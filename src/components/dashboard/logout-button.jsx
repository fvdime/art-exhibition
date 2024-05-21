"use client";

import { SignOut } from "@/actions/auth.action";
import React from "react";

const LogoutButton = () => {
  return (
    <button
      type="button"
      onClick={async () => {
        await SignOut();
      }}
      className="w-fit text-xs text-center font-medium px-4 py-1 rounded bg-red-900 cursor-pointer shadow hover:shadow-lg transition-all ease-in duration-300 text-white hover:text-gray-100"
    >
      Sign Out
    </button>
  );
};

export default LogoutButton;
