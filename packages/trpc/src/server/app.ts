import { createCallerFactory, router } from "./init";
import { publicProcedure } from "./procedures/publicProcedure";

export const appRouter = router({
  healthCheck: publicProcedure.query(async () => {
    return {
      status: "ok",
    };
  }),
});

// Export type router type signature
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
