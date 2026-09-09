// Recently viewed products, stored per browser

function recordView(productId) {
  const raw = localStorage.getItem("recently-viewed");
  const list = JSON.parse(raw);
  list.unshift(productId);
  localStorage.setItem("recently-viewed", JSON.stringify(list.slice(0, 8)));
}
