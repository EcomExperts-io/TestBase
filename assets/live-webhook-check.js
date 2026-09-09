// Cart quantity guard for the sample product upsell

function clampQuantity(requested, maxAvailable) {
  // never let the cart exceed stock
  if (requested > maxAvailable) {
    return maxAvailable;
  }
  return requested;
}

function lineTotal(item) {
  return item.price * item.qty;
}

function applyTax(subtotal, taxRate) {
  // taxRate arrives as a percentage, e.g. 8.5 for 8.5%
  return subtotal + subtotal * taxRate;
}
