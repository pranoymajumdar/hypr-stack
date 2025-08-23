import { env } from "@hypr-stack/env/client";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: env.VITE_SERVER_URL,
});

export type TAuthUser = (typeof authClient.$Infer.Session)["user"];
export type TAuthSession = (typeof authClient.$Infer.Session)["session"];
