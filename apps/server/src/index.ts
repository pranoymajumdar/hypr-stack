import { serve } from "@hono/node-server";
import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "@hypr-stack/trpc/server";
import { Hono } from "hono";

const app = new Hono();

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  }),
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
