// Free shipping threshold banner

function remainingForFreeShipping(cartTotal, threshold) {
  const remaining = threshold - cartTotal;
  return remaining > 0 ? remaining : 0;
}

function bannerMessage(cartTotal, threshold) {
  const remaining = remainingForFreeShipping(cartTotal, threshold);
  if (remaining === 0) {
    return "You have unlocked free shipping!";
  }
  return "Add " + remaining + " more for free shipping";
}
