"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { uploadImage } from "@/lib/upload-image";

export async function CreateWork(prevState, formData) {
  try {
    const image = formData.get("image");
    const response = await uploadImage({ file: image });

    if (!response || response.result.$metadata.httpStatusCode !== 200) {
      return { error: "Image not uploaded!" };
    }

    const work = await prisma.work.create({
      data: {
        image: response.filePath,
      },
    });

    console.log(work);
  } catch (error) {
    return {
      error: "Image not uploaded",
    };
  }

  redirect("/dashboard");

  return {
    error: "",
  };
}
