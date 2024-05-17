"use client";

import React, { useCallback, useState } from "react";
import { CreateWork } from "@/actions/post.action";
import { useFormState } from "react-dom";
import Image from "next/image";

const initialState = {
  error: "",
};

const NewWorkForm = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleUpload = useCallback((event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setImagePreview(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const [state, formAction] = useFormState(CreateWork, initialState);

  return (
    <form className="w-full h-full py-4" action={formAction}>
      <div className="mb-6">
        <label
          htmlFor="image"
          className="h-[50vh] md:h-[70vh] relative cursor-pointer hover:opacity-50 transition duration-200 ease-in border-dashed border-2 p-20 flex flex-col border-red-900 justify-center items-center text-red-950"
        >
          <input
            id="image"
            type="file"
            accept="image/*"
            className="hidden"
            name="image"
            onChange={handleUpload}
          />
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"
            />
          </svg>
          <h2 className="font-semibold text-lg">Click to upload</h2>
          {imagePreview && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                alt="upload"
                layout="fill"
                objectFit="cover"
                src={imagePreview}
              />
            </div>
          )}
        </label>
      </div>
      {state.error && (
        <p className="text-xs font-medium text-red-900 mt-1">{state.error}</p>
      )}

      <div className="text-center">
        <button className="rounded text-center font-semibold transition-all ease-in duration-500 text-sm border w-full bg-red-950 hover:bg-red-900 text-white border-red-950 hover:border-red-900 px-8 py-3">
          Create
        </button>
      </div>
    </form>
  );
};

export default NewWorkForm;
