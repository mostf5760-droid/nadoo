let cartCount = 0;
const cartCounter = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCounter.textContent = cartCount;
    saveCart();
  });
});

function saveCart() {
  localStorage.setItem("cartCount", cartCount);
}

function loadCart() {
  const saved = localStorage.getItem("cartCount");
  if (saved) {
    cartCount = saved;
    cartCounter.textContent = cartCount;
  }
}

loadCart();
