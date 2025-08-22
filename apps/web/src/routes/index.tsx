import { Badge, Button, Input } from "@hypr-stack/ui";
import { createFileRoute } from "@tanstack/react-router";
import { Activity, Database, LogIn, Shield, User, Zap } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [todoText, setTodoText] = useState("");
  const [healthStatus, setHealthStatus] = useState<"unknown" | "ok" | "error">(
    "unknown",
  );
  const [isSignedIn, setIsSignedIn] = useState(false);

  const checkHealth = () => setHealthStatus("ok");
  const createTodo = () => {
    alert(`Todo "${todoText}" created!`);
    setTodoText("");
  };
  const handleSignIn = () => setIsSignedIn(!isSignedIn);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-semibold text-lg">hypr-stack</h1>
              <p className="text-muted-foreground text-xs">Ready to use</p>
            </div>
          </div>
          <Button
            variant={isSignedIn ? "outline" : "default"}
            size="sm"
            onClick={handleSignIn}
          >
            {isSignedIn ? (
              <>
                <User className="mr-2 h-4 w-4" />
                Demo User
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </>
            )}
          </Button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl">Your Project is Ready</h2>
          <p className="mb-8 text-muted-foreground">
            Full-stack TypeScript with TRPC, Better-Auth, and Hono
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="outline">Turborepo</Badge>
            <Badge variant="outline">Tanstack Router</Badge>
            <Badge variant="outline">Hono</Badge>
            <Badge variant="outline">TRPC</Badge>
            <Badge variant="outline">Better-Auth</Badge>
          </div>
        </div>

        {/* Demo Cards */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {/* Health Check */}
          <div className="h-full rounded-2xl border border-green-200 bg-green-50/30 p-8 dark:border-green-800 dark:bg-green-950/20">
            <div className="mb-6 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/40">
                  <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-xl">Health Check</h3>
                  <p className="text-muted-foreground text-sm">
                    Public endpoint
                  </p>
                </div>
              </div>
              <Badge
                variant={healthStatus === "ok" ? "default" : "secondary"}
                className={`${healthStatus === "ok" ? "bg-green-600 hover:bg-green-600" : ""} flex-shrink-0`}
              >
                {healthStatus === "ok" ? "Healthy" : "Ready"}
              </Badge>
            </div>

            <div className="mb-6 rounded-xl border bg-background/80 p-4 text-center font-mono text-sm">
              trpc.healthCheck.queryOptions()
            </div>

            <Button
              onClick={checkHealth}
              className="h-12 w-full rounded-xl bg-green-600 font-medium text-base text-white hover:bg-green-700"
            >
              <Activity className="mr-3 h-5 w-5" />
              Run Health Check
            </Button>
          </div>

          {/* Todo Creation */}
          <div className="h-fit rounded-2xl border border-blue-200 bg-blue-50/30 p-8 dark:border-blue-800 dark:bg-blue-950/20">
            <div className="mb-6 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/40">
                  <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-xl">Create Todo</h3>
                  <p className="text-muted-foreground text-sm">
                    Protected endpoint
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="flex-shrink-0 gap-1">
                <Shield className="h-3 w-3" />
                Auth Required
              </Badge>
            </div>

            <div className="mb-6 rounded-xl border bg-background/80 p-4 text-center font-mono text-sm">
              trpc.createTodo.mutationOptions()
            </div>

            {!isSignedIn ? (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center dark:border-amber-800 dark:bg-amber-950/40">
                <div className="flex items-center justify-center gap-2 text-amber-700 dark:text-amber-300">
                  <Shield className="h-4 w-4" />
                  <span className="font-medium text-sm">
                    Sign in to test this endpoint
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <Input
                  placeholder="What needs to be done?"
                  value={todoText}
                  onChange={(e) => setTodoText(e.target.value)}
                  className="h-12 rounded-xl bg-background/80 text-base"
                />
                <Button
                  onClick={createTodo}
                  disabled={!isSignedIn || !todoText.trim()}
                  className="h-12 w-full rounded-xl bg-blue-600 font-medium text-base text-white hover:bg-blue-700 disabled:bg-muted"
                >
                  <Database className="mr-3 h-5 w-5" />
                  Create Todo
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
