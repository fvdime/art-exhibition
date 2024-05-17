"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { uploadImage } from "@/lib/upload-image";
import { revalidatePath } from "next/cache";

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

export async function GetAllWorks() {
  return prisma.work.findMany();
}

export async function GetRandomWorks() {
  const worksCount = await prisma.work.count();
  const skip = Math.floor(Math.random() * worksCount);
  return await prisma.work.findMany({
    take: 7,
    skip: skip,
  });
}

export async function GetWorkById(id) {
  return await prisma.work.findFirst({
    where: { id: id }
  })
}

export async function GetFeaturedWorks() {
  return await prisma.work.findMany({
    where: { 
      featured: true
    }
  })
}

export const deleteWorkById = async ({workId}) => {
  await prisma.work.delete({
    where: { id: workId }
  })

  console.log("Deleted")
  revalidatePath("/gallery")
}

export const featuredWorkById = async (workId) => {
  await prisma.work.update({
    where: { id: workId },
    data: {
      featured: true
    }
  })

  console.log("updated")
  revalidatePath("/gallery")
}