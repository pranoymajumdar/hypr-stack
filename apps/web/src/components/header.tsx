import { authClient } from "@hypr-stack/auth/client";
import { Button } from "@hypr-stack/ui";
import { Link } from "@tanstack/react-router";
import { LucideArrowRight } from "lucide-react";
import { Logo } from "./logo";
import { UserMenu } from "./user-menu";

export function Header() {
  const { data } = authClient.useSession();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <Logo />
          <div>
            <h1 className="font-semibold text-lg">hypr-stack</h1>
            <p className="text-muted-foreground text-xs">Full-stack Monorepo</p>
          </div>
        </Link>
        {data?.session ? (
          <UserMenu user={data.user} />
        ) : (
          <Button asChild size="sm">
            <Link to="/auth">
              Sign In <LucideArrowRight />
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
}
