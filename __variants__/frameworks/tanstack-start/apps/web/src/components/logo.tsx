import { Zap } from "lucide-react";

export function Logo() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
      <Zap className="h-4 w-4 text-primary-foreground" />
    </div>
  );
}
