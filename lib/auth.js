import { db } from "./database";
import config from "../config";

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: config.google.clientId,
      clientSecret: config.google.clientSecret,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email, image } = user;
        try {
          const userExists = await db.findOne({ email });

          if (!userExists) {
            const keys = await randomText(6)
            const key = "RY-" + keys
     
            const obj = {
              googleId: profile.id,
              username: name.replace(/[^A-Za-z0-9]/g, '').toLowerCase(),
              name: name,
              email: email,
              limit: config.options.limit || 25,
              profile: image,
              apikey: key,
              isAdmin: false,
              standard: false,
              standardTime: 0,
              premium: false,
              premiumTime: 0,
              defaultKey: key,
            }

            await db.create(obj)

            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
