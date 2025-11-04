import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authConfig);
  if (session) {
    return NextResponse.json({ message: "Authorized" }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
