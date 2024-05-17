"use client";

import { deleteWorkById } from "@/actions/post.action";
import React from "react";

const DeleteButton = (workId) => {
  return (
    <button
      type="button"
      onClick={async () => {
        await deleteWorkById(workId);
      }}
      className="text-xl font-bold shadow-xl text-center bg-red-50 p-2.5 rounded-full outline-none"
    >
      <svg
        className="w-6 h-6 text-red-800 hover:text-red-900 transition-all ease duration-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 -960 960 960"
      >
        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
      </svg>
    </button>
  );
};

export default DeleteButton;
