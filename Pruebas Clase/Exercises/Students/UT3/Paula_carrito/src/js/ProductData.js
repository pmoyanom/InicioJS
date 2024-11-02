// products.js
const products = [  //It is an array of objects where each object represents a product
                    //Each product has: id, name, price, image path and description
    {
        id: 1,
        name: "Laptop Pro",
        price: 999.99,
        image: "img/laptop.png",
        description: "High-performance laptop for professionals"
    },
    {
        id: 2,
        name: "Keyboard",
        price: 49.99,
        image: "img/keyboard.png",
        description: "Premium wireless keyboard in black"
    },
    {
        id: 3,
        name: "Mouse",
        price: 5.95,
        image: "img/mouse.png",
        description: "Blue mouse with wired connection"
    },
    {
        id: 4,
        name: "Hard drive",
        price: 48.95,
        image: "img/data.png",
        description: "Hard drive storage."
    }
];

// Function to render products
function renderProducts() {//renderProducts() creates the product cards on the page. Runs when the page fully loads
    const productsContainer=document.getElementById('products');// Get the product container from the HTML
    // Generate the HTML for each product
    //Use .map() to convert each product to HTML
    productsContainer.innerHTML=products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">${product.price.toFixed(2)}€</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `).join('');//.join('') converts the resulting array into a text string
}

// Initialize products when the page loads
document.addEventListener('DOMContentLoaded', renderProducts);