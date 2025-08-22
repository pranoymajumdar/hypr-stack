import { db } from "@hypr-stack/db";
import { env } from "@hypr-stack/env/server";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export const createContext = async (_opts: FetchCreateContextFnOptions) => {
  return {
    db,
    env,
  };
};
export type Context = Awaited<ReturnType<typeof createContext>>;
