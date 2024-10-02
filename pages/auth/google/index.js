import passport from "passport";
import { db } from "../lib/database";

export async function GET() {
  return passport.authenticate("google", { scope: ["profile", "email"] })
}
