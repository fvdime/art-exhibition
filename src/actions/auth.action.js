"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { signToken } from "@/lib/token";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { compare } from "bcrypt";

const authSchema = z.object({
  password: z.string().min(6),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
});

export const SignIn = async (prevState, formData) => {
  try {
    const isValidData = authSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!isValidData.email || !isValidData.password) {
      return {
        email: "Missing Credentials.",
        password: "Missing Credentials.",
      };
    }

    const admin = await prisma.admin.findFirst({
      where: {
        email: isValidData.email,
      },
    });

    if (!admin || !(await compare(isValidData.password, admin.password))) {
      return {
        email: "",
        password: "I think you ended up with the wrong path",
      };
    }

    const response = await signToken({ admin });
    console.log(response);
  } catch (error) {
    if (error && error.name == "ZodError") {
      const errors = {
        email: "",
        password: "",
      };

      [...JSON.parse(error.message)].forEach((item) => {
        if (item?.path[0] == "email") {
          errors.email = item?.message || "";
        }
        if (item?.path[0] == "password") {
          errors.password = item?.message || "";
        }
      });

      return errors;
    }
    return {
      email: "",
      password: "",
    };
  }

  redirect("/dashboard");
};

export async function SignOut() {
  const cookieStore = cookies();
  cookieStore.delete("token");
  cookieStore.delete("logged-in");
  redirect("/");
}
