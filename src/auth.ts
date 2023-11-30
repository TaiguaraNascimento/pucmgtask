import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...
  ],
  secret: process.env.SECRET,
  // ...
});

/*

import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/GitHub";
import Providers from 'next-auth/providers'

export const authConfig = {
  providers: [GitHub],
} satisfies NextAuthConfig;

export const { handlers, auth, signOut } = NextAuth(authConfig);


*/
