import { signJWT } from "./sign-token";
import { cookies } from "next/headers";

const EXP_TIME = 30 * 24 * 60 * 60 * 1000;

export const signToken = async ({admin}) => {
  try {
    const token = await signJWT(
      { sub: admin.id, email: admin.email },
      { exp: "72h" }
    );

    console.log("Token signed successfully:", token);

    console.log("NEW USER::::::", JSON.stringify(admin));

    console.log("NEW USER ID:", admin.id);
    console.log("NEW USER EMAIL:", admin.email);

    const tokenMaxAge = EXP_TIME * 60;

    const cookieStore = cookies();

    const cookieOptions = {
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV !== "development",
      maxAge: tokenMaxAge,
    };

    await Promise.all([
      cookieStore.set(cookieOptions),
      cookieStore.set({
        name: "logged-in",
        value: "true",
        maxAge: tokenMaxAge,
      }),
    ]);
  } catch (error) {
    console.error("Error signing JWT token:", error);
  }
};
