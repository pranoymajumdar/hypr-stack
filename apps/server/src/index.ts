import { serve } from "@hono/node-server";
import { trpcServer } from "@hono/trpc-server";
import { auth } from "@hypr-stack/auth/server";
import { env } from "@hypr-stack/env/server";
import { appRouter } from "@hypr-stack/trpc/server";
import { type Context, Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: env.CORS_ORIGIN,
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  }),
);

app.on(["POST", "GET"], "/auth/**", (c: Context) => auth.handler(c.req.raw));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(
  {
    fetch: app.fetch,
    port: 8000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
