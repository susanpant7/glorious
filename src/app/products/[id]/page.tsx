import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { SHOP_URL } from "@/lib/shop";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createPageMetadata } from "@/lib/seo";

const productThemeColors: Record<string, string> = {
  "skin-cleanser": "#1f5c5a",
  "night-cream": "#781a97",
  "vitamin-c-serum": "#c31e62",
  "sun-block": "#f0c214",
  "moisturizer": "#1c2147",
  "shampoo": "#13887c",
  "face-wash": "#4ea32a",
};

function productThemeColor(id: string) {
  return productThemeColors[id] ?? "#1f5c5a";
}

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return createPageMetadata({
      title: "Product Not Found",
      description: "The GlowRious product you are looking for could not be found.",
      path: `/products/${id}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${product.name} - ${product.type} for ${product.tone}`,
    description: `${product.description} Shop GlowRious ${product.name} in Nepal for NPR ${product.price}.`,
    path: `/products/${product.id}`,
    image: product.image,
    imageAlt: `${product.name} by GlowRious`,
    keywords: [
      product.name,
      `GlowRious ${product.name}`,
      product.type,
      product.category,
      `${product.name} Nepal`,
      "GlowRious skincare",
    ],
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  const similarProducts = products.filter(
    (item) => item.category === product?.category && item.id !== id
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-[var(--theme)] sm:text-6xl">
              {product.name}
            </h1>
         
            <p className="mt-4 max-w-3xl whitespace-pre-line text-lg leading-8 text-slate-700">
              {product.details}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href="/products">Back to products</Link>
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.85fr]">
            <Card className="overflow-hidden border border-slate-200 shadow-sm">
              <div className="p-6">
                <ProductImageGallery
                  images={
                    product.images ?? [product.image, product.image, product.image]
                  }
                  tag={product.category}
                />
              </div>
            </Card>

            <Card className="border border-slate-200 shadow-sm">
                <CardHeader className="flex items-start justify-between gap-4 px-8 pt-8 pb-0">
                    <div>
                      {/* product title shown here using product theme color */}
                      {product ? (
                        <h3 className="text-3xl font-bold" style={{ color: productThemeColor(product.id) }}>
                          {product.name.toUpperCase()}
                        </h3>
                      ) : null}
                    </div>
                    <div className="flex items-center">
                      <Button asChild size="sm">
                        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ShoppingBag className="size-4" />
                          Shop Now
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
              <CardContent className="px-8 pb-8">
                <Table>
                  <TableHeader>
                    <tr>
                      <TableHead>Spec</TableHead>
                      <TableHead>Value</TableHead>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    {product.specs.map((spec) => (
                      <TableRow key={spec.label}>
                        <TableCell className="font-medium text-slate-600">{spec.label}</TableCell>
                        <TableCell className="text-slate-950">{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                  <div className="mt-8">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl bg-slate-50 p-5">
                        <p className="text-sm text-slate-500">Shades</p>
                        <p className="mt-2 font-semibold text-slate-950">{product.shades}</p>
                      </div>
                      <div className="rounded-3xl bg-slate-50 p-5">
                        <p className="text-sm text-slate-500">Tone</p>
                        <p className="mt-2 font-semibold text-slate-950">{product.tone}</p>
                      </div>
                    </div>
                  </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.85fr]">
            <Card className="border border-slate-200 shadow-sm lg:col-span-2">
              <CardHeader className="space-y-3 px-8 pt-8 pb-0">
                <CardTitle className="text-2xl">Product information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-8 pb-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {product.sections.map((section) => (
                    <AccordionItem key={section.id} value={section.id} className="rounded-3xl border border-slate-200 bg-slate-50">
                      <AccordionTrigger className="px-5 py-4 text-base font-semibold text-slate-950">
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-4 text-sm leading-7 text-slate-700">
                        <div className="whitespace-pre-line">{section.content}</div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-slate-200 shadow-sm">
            <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-8 pt-8 pb-0">
              <div>
                <CardTitle className="text-2xl">Customer reviews</CardTitle>
                <CardDescription>Read honest feedback from people who have already tried this product.</CardDescription>
              </div>
              <div className="text-sm font-semibold text-slate-600">{product.reviews.length} reviews</div>
            </CardHeader>
            <CardContent className="space-y-6 px-8 pb-8">
              {product.reviews.map((review) => (
                <div key={review.id} className="rounded-3xl bg-slate-50 p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>
                          {review.author
                            .split(" ")
                            .map((part) => part[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-slate-950">{review.author}</p>
                        <p className="text-sm text-slate-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-600">
                      {Array.from({ length: review.rating }, (_, index) => (
                        <span key={index}>★</span>
                      ))}
                      {Array.from({ length: 5 - review.rating }, (_, index) => (
                        <span key={index} className="text-slate-300">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-slate-700">{review.content}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {similarProducts.length > 0 ? (
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader className="px-8 pt-8 pb-0">
                <CardTitle className="text-2xl">Similar products</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 px-8 pb-8 sm:grid-cols-2 xl:grid-cols-3">
                {similarProducts.map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.id}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-auto space-y-2 p-5">
                      <Badge variant="secondary" className="uppercase tracking-[0.28em] text-[11px]">
                        {item.category}
                      </Badge>
                      <p className="font-semibold text-slate-950">{item.name}</p>
                      <p className="text-sm text-slate-600">{item.type}</p>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          ) : null}
        </div>
      </div>
    </div>
  );
}
