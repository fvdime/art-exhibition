import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken'

export const signJWT = async (
  payload,
  options
) => {
  try {
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET_KEY);
    const alg = "HS256";
    return new SignJWT(payload)
      .setProtectedHeader({ alg })
      .setExpirationTime(options.exp)
      .setIssuedAt()
      .setSubject(payload.sub)
      .sign(secret);
  } catch (error) {
    throw error;
  }
};

export const verifyJWT = async (token) => {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET_KEY)
    )

    return { email: payload.email, sub: payload.sub }
  } catch (error) {
    console.log(error);
    return null
  }
};