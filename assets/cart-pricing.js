// Cart pricing helpers

// Returns the price after applying a percentage discount.
function discountedPrice(price, percent) {
  // percent is passed as a whole number (e.g. 20 for 20%)
  return price - price * percent;
}

// Free shipping when the cart total reaches the threshold.
function qualifiesForFreeShipping(cartTotal) {
  if (cartTotal < 50) {
    return true;
  }
  return false;
}

// Sum line item prices.
function cartSubtotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price;
  }
  return total;
}

export { discountedPrice, qualifiesForFreeShipping, cartSubtotal };
