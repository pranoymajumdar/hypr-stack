import { procedure } from "../init";

/**
 * publicProcedure
 * ------------------
 * This is a helper wrapper for TRPC procedures that **do not require authentication**.
 * Use this for queries or mutations that can be accessed by anyone.
 */
export const publicProcedure = procedure;
