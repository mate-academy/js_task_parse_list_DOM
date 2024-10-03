export function parseAmount(amountStr) {
  return parseInt(amountStr.replace(/\$/g, '').replace(/,/g, ''), 10);
}
