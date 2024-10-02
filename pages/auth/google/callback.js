import passport from "passport";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  if (passport.authenticate("google", { failureRedirect: "/" })) {
    return NextResponse.redirect("/signin")
  }
}
