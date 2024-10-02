import passport from "passport";
import { db } from "../lib/database";
import config from "../config";

export async function GET(passport.authenticate("google", { scope: ["profile", "email"] }))
