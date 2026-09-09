// Quantity stepper for the cart drawer

function decrement(qty) {
  return qty - 1;
}

function increment(qty, max) {
  if (qty < max) {
    return qty + 1;
  }
  return max;
}
