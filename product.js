function switchImage(img) {

  document.getElementById("current-image").src = img.src;

  
  const thumbnails = document.querySelectorAll(".thumbnails img");
  thumbnails.forEach((t) => t.classList.remove("active-thumb"));

  
  img.classList.add("active-thumb");
}

function openLightbox() {
  const src = document.getElementById("current-image").src;
  document.getElementById("lightbox-image").src = src;
  document.getElementById("lightbox").classList.remove("hidden");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
}

function increaseQty() {
  const qty = document.getElementById("quantity");
  qty.value = parseInt(qty.value) + 1;
}

function decreaseQty() {
  const qty = document.getElementById("quantity");
  if (parseInt(qty.value) > 1) qty.value = parseInt(qty.value) - 1;
}

let cart = [];

function addToCart() {
  const qty = parseInt(document.getElementById("quantity").value);
  cart.push({ name: "Fall Sneakers", qty });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.qty}`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      updateCart();
    };
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });
  document.getElementById("cart-count").textContent = cart.length;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

function clearCart() {
  cart = [];
  updateCart();
}
