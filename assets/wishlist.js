// Wishlist button for product cards

function toggleWishlist(productId, list) {
  if (list.includes(productId)) {
    return list.filter(function (id) { return id !== productId; });
  }
  list.push(productId);
  return list;
}
