document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting Lumina! We’ll get back to you soon.");
});

document.querySelectorAll(".product-card button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Item added to cart! (Visual only)");
    });
});
// ===== Function to Update Cart Count =====
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCountEl = document.getElementById("cartCount");
    if (cartCountEl) {
        cartCountEl.textContent = cart.length;
    }
}
// ===== Add to Cart in Shop Page =====
document.querySelectorAll(".product-card button").forEach(btn => {
    btn.addEventListener("click", () => {
        const productCard = btn.closest(".product-card");
        const name = productCard.querySelector("h3").textContent;
        const price = productCard.querySelector("p").textContent.replace("Rs.", "").trim();

        // Get existing cart or start new
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ name, price });
        localStorage.setItem("cart", JSON.stringify(cart));

        // Update cart count immediately
        updateCartCount();

        // Feedback to user
        alert(`${name} added to cart!`);
    });
});

// Run count update on page load
updateCartCount();
