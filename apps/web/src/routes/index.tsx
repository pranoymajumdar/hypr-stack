import { trpc } from "@hypr-stack/trpc/client";
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "@hypr-stack/ui";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import * as lucide from "lucide-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    data: healthStatus,
    isLoading: isHealthLoading,
    isError: isHealthError,
  } = useQuery(trpc.healthCheck.queryOptions());

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-foreground">
      <div className="space-y-5 text-center">
        <h1 className="font-extrabold text-5xl tracking-tight">Hypr Stack</h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          {
            "Hypr Stack is your turbocharged full-stack monorepo with Tanstack Router, Hono, Trpc, Better Auth and shadcn/ui."
          }
        </p>
      </div>

      <div className="mt-14 grid w-full max-w-4xl gap-6 md:grid-cols-2">
        <Card className="border border-border/50 shadow-xl backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-xl">
              API Health
              {isHealthLoading && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <lucide.Loader2 className="h-3 w-3 animate-spin" /> Checking
                </Badge>
              )}
              {healthStatus?.status && (
                <Badge>
                  <lucide.LucideCheck />
                  Healthy
                </Badge>
              )}
              {isHealthError && <Badge variant="destructive">❌ Down</Badge>}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              This checks your{" "}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-foreground text-xs">
                trpc.healthCheck
              </code>{" "}
              endpoint.
            </p>
          </CardContent>
        </Card>

        <Card className="border border-border/50 shadow-xl backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl">Quick Start</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            <Button variant="default" className="justify-start">
              <lucide.BookOpen className="mr-2 h-4 w-4" /> Read Docs
            </Button>
            <Button variant="secondary" className="justify-start">
              <lucide.Github className="mr-2 h-4 w-4" /> View on GitHub
            </Button>
            <Button variant="outline" className="justify-start">
              <lucide.Rocket className="mr-2 h-4 w-4" /> Explore Examples
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
