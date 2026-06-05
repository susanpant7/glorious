import Link from "next/link";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button asChild>
        <Link href="/products">{site.heroActions.primary}</Link>
      </Button>
    </div>
  );
}
