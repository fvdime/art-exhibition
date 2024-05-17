import { NextResponse } from "next/server";
import { verifyJWT } from "./lib/sign-token";

const REQUIRE_TOKEN = ["/dashboard"];

const doPagesRequireToken = (url) =>
  REQUIRE_TOKEN.some((page) => page.startsWith(url));

export async function middleware(request) {
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };

  const verifiedToken = token && (await verifyJWT(token));

  if (!verifiedToken && doPagesRequireToken(nextUrl.pathname)) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);

    const response = NextResponse.redirect(
      new URL(`/auth?${new URLSearchParams({ error: "badauth" })}`, url)
    );

    return response;
  }

  const headers = new Headers(request.headers);
  headers.set("sub", verifiedToken?.sub);

  return NextResponse.next({
    request: { headers },
  });
}

export const config = {
  matcher: ["/auth", "/dashboard/:path*"],
};
