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
