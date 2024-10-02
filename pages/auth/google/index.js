import passport from "passport";
import { db } from "../lib/database";

export async function GET(passport.authenticate("google", { scope: ["profile", "email"] }))
