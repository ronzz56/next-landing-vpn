import passport from "passport";
import { NextRequest, NextResponse } from "next/server";

export async function GET(passport.authenticate("google", { failureRedirect: "/" }), req: NextRequest) {
  NextResponse.redirect("/signin")
}
