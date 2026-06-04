export function formatPrice(price: number, currency: "NPR" = "NPR") {
  if (currency === "NPR") {
    return `रु ${price.toLocaleString("en-IN")}`;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(price);
}