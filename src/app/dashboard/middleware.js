import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
  NextResponse.redirect(new URL("/api/auth/signin", req));
});
