import { router } from "./trpc";

export const appRouter = router({});

// Export type router type signature
export type AppRouter = typeof appRouter;
