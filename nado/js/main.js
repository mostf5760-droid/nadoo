const cartOverlay = document.getElementById("cartOverlay");
const cartBtn = document.querySelector(".cart");
const closeCart = document.getElementById("closeCart");
const cartItemsBox = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCounter = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// فتح / إغلاق السلة
cartBtn.onclick = () => cartOverlay.style.display = "flex";
closeCart.onclick = () => cartOverlay.style.display = "none";

// إضافة منتج
document.querySelectorAll(".product-card button").forEach(button => {
  button.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");

    const name = card.dataset.name;
    const price = Number(card.dataset.price);

    cart.push({ name, price });
    saveCart();
    renderCart();
  });
});


function renderCart() {
  cartItemsBox.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItemsBox.innerHTML += `
      <div class="cart-item">
        <p>${item.name}</p>
        <span>${item.price} د.ل</span>
      </div>
    `;
  });

  cartTotal.textContent = total;
  cartCounter.textContent = cart.length;
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

renderCart();
