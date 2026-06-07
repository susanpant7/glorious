export function formatPrice(price: number | string, currency: "NPR" = "NPR") {
  const numericPrice = typeof price === "string" ? Number(price.replace(/[^0-9.]/g, "")) : price;

  if (Number.isNaN(numericPrice)) {
    return typeof price === "string" ? price : `रु ${price}`;
  }

  if (currency === "NPR") {
    return `रु ${numericPrice.toLocaleString("en-IN")}`;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(numericPrice);
}