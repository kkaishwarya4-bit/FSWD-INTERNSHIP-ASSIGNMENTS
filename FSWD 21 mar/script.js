const container = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");

// Show products
function displayProducts(list) {
    container.innerHTML = "";

    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <button>Add to Cart</button>
        `;

        container.appendChild(card);
    });
}

// Filter logic
function filterProducts() {
    let filtered = products;

    const category = categoryFilter.value;
    const price = priceFilter.value;

    if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }

    if (price === "low") {
        filtered = filtered.filter(p => p.price < 500);
    } else if (price === "mid") {
        filtered = filtered.filter(p => p.price >= 500 && p.price <= 1000);
    } else if (price === "high") {
        filtered = filtered.filter(p => p.price > 1000);
    }

    displayProducts(filtered);
}

// Events
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);

// Initial display
displayProducts(products);