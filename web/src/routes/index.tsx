import { api } from "@repo/backend/convex/_generated/api";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "convex/react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const check = useQuery(api.queries.health.check);
  return <div>{JSON.stringify(check)}</div>;
}
