import { auth } from "@hypr-stack/auth/server";
import { db } from "@hypr-stack/db";
import { env } from "@hypr-stack/env/server";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export const createContext = async (opts: FetchCreateContextFnOptions) => {
  const sessionData = await auth.api.getSession({
    headers: opts.req.headers,
  });

  return {
    db,
    env,
    session: sessionData?.session ?? null,
    user: sessionData?.user ?? null,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
