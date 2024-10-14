export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
}

/* export function formatCurrency(amount: number, currency: string = "USD", locale: string = "en-US") {
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
  }
  
  console.log(formatCurrency(1000, "USD", "en-US")); // $1,000.00
  console.log(formatCurrency(1000, "EUR", "de-DE")); // 1.000,00 €
  console.log(formatCurrency(1000, "JPY", "ja-JP")); // ￥1,000
  console.log(formatCurrency(1000, "GBP", "en-GB")); // £1,000.00
  console.log(formatCurrency(1000, "ARS", "es-AR")); // $ 1.000,00
  console.log(formatCurrency(1000, "BRL", "pt-BR")); // R$ 1.000,00
   */
