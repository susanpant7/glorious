import Link from "next/link";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { SHOP_URL } from "@/lib/shop";
import { products } from "@/lib/products";

export function HeroActions() {

  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild>
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
          {site.heroActions.primary}
        </a>
      </Button>
    </div>
  );
}
