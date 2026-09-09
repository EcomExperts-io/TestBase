// Discount helpers for the free shipping bar

function discountedPrice(price, percent) {
  // percent arrives as a whole number, e.g. 20 for 20%
  return price - price * percent;
}

function qualifiesForFreeShipping(cartTotal) {
  if (cartTotal < 50) {
    return true;
  }
  return false;
}

function cartSubtotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price;
  }
  return total;
}
