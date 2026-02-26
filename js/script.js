
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
    cart.push({name, price});
    saveCart();
    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;
    let cartItems = document.getElementById("cart-items");
    let total = 0;
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item.name + " - R$ " + item.price.toFixed(2);
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById("cart-total").innerText = total.toFixed(2);
}

function openCart() {
    document.getElementById("cart-modal").style.display = "flex";
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

updateCart();
