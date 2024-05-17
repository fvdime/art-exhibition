"use client";

import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { CreateWork } from "@/actions/post.action";
import { useFormState } from "react-dom";

const initialState = {
  error: "",
};

const NewWorkForm = () => {
  const [state, formAction] = useFormState(CreateWork, initialState);

  return (
    <form className="w-full h-full p-8" action={formAction}>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="image"
      >
        Upload file
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        name="image"
        type="file"
        accept="image/png, image/jpeg, image/jpg"
      />
       {state.error && (
        <p className="text-xs font-medium text-gray-900">{state.error}</p>
      )}

      <div className="text-center">
        <button className="rounded text-center font-semibold transition-all ease-in duration-500 text-sm border w-full bg-red-950 hover:bg-red-900 text-white border-red-950 hover:border-red-900 px-8 py-3">
          Create
        </button>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </form>
  );
};

export default NewWorkForm;
