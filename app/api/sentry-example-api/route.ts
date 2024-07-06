/* eslint-disable no-unreachable */
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A simple API route
export function GET() {
  return NextResponse.json({ data: "API Route Response" });
}
