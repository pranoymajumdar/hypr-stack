import { TRPCError } from "@trpc/server";
import { procedure } from "../init";

/**
 * protectedProcedure
 * ------------------
 * This is a helper wrapper for TRPC procedures that require authentication.
 * Use this whenever you want to ensure that the user is signed in before
 * executing any query or mutation.
 */
export const protectedProcedure = procedure.use(async ({ ctx, next }) => {
  // Check if the session and user exist in the context
  if (!ctx.session || !ctx.user) {
    // Throw an UNAUTHORIZED error if the user is not signed in
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be signed in.",
    });
  }

  // Pass the session and user forward to the next middleware / procedure
  return next({
    ctx: {
      session: ctx.session,
      user: ctx.user,
    },
  });
});
