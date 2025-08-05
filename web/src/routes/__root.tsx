import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ConvexReactClient } from "convex/react";
import { env } from "@/lib/env";

const convex = new ConvexReactClient(env.VITE_CONVEX_URL);

export const Route = createRootRoute({
  component: () => (
    <ConvexAuthProvider client={convex}>
      <Outlet />
      <TanStackRouterDevtools />
    </ConvexAuthProvider>
  ),
});
