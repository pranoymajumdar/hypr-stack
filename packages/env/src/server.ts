import path from "node:path";
import { fileURLToPath } from "node:url";
import { createEnv } from "@t3-oss/env-core";
import dotenv from "dotenv";
import { z } from "zod";

// Load .env file from the project root
// This approach is more robust than hardcoding relative paths
if (process.env.NODE_ENV !== "production") {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const envPath = path.resolve(__dirname, "../../../.env");
  dotenv.config({ path: envPath });
}

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z.url(),
    CORS_ORIGIN: z.url(),
    BETTER_AUTH_URL: z.url(), // Base url of your server
    BETTER_AUTH_SECRET: z.string().min(32), // Ensure minimum length for security
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  runtimeEnv: process.env,

  isServer: typeof window === "undefined",

  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,

  /**
   * Skip validation in production to improve performance.
   * Set to false if you want to ensure validation in production.
   */
  skipValidation: false,
});
