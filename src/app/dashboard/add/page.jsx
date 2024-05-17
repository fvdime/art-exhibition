import NewWorkForm from "@/components/form/new-work";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AddPage() {
  return (
    <div className="w-full min-h-screen bg-red-50 text-red-950">
      <div className="max-w-screen-lg mx-auto h-full p-4 md:py-4">
        <h1 className="text-xl uppercase font-medium ">Add New Work!</h1>
        <NewWorkForm/>
      </div>
    </div>
  );
}
