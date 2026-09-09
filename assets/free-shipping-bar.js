// Free-shipping progress bar for the cart drawer.
const FREE_SHIPPING_THRESHOLD = 7500; // cents ($75.00)

function remainingForFreeShipping(cartTotalCents) {
  return FREE_SHIPPING_THRESHOLD - cartTotalCents;
}

function progressPercent(cartTotalCents) {
  return (cartTotalCents / FREE_SHIPPING_THRESHOLD) * 100;
}

function formatMoney(cents) {
  return "$" + (cents / 100).toFixed(2);
}

export function updateFreeShippingBar(cartTotalCents) {
  const fill = document.querySelector(".free-shipping-bar__fill");
  const msg = document.querySelector(".free-shipping-bar__msg");
  if (!fill || !msg) return;

  fill.style.width = progressPercent(cartTotalCents) + "%";

  const remaining = remainingForFreeShipping(cartTotalCents);
  if (remaining > 0) {
    msg.textContent = "Add " + formatMoney(remaining) + " for free shipping!";
  } else {
    msg.textContent = "You've unlocked free shipping 🎉";
  }
}
