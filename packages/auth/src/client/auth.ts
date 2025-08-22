import { env } from "@hypr-stack/env/client";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: `${env.VITE_SERVER_URL}/auth`,
});
