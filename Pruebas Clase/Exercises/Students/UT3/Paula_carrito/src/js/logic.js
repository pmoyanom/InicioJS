// Create an empty array for the cart
let cart = [];

// Load cart from cookies when page loads
//When the page loads, it retrieves the cart saved in cookies and refreshes the screen
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromCookies();
    updateCartDisplay();
});

// Function to save cart to cookies
function saveCartToCookies() {//saveCartToCookies(): Save the cart in cookies
    
    const cartJson = JSON.stringify(cart);// Convert cart to JSON
    document.cookie = `cart=${encodeURIComponent(cartJson)};path=/;max-age=604800`; // Saves it for 1 week (604800 seconds)
}

// Function to load cart from cookies
function loadCartFromCookies() {//loadCartFromCookies(): Retrieves the cookie cart
    const cookies=document.cookie.split(';');
    const cartCookie=cookies.find(cookie=>cookie.trim().startsWith('cart='));//Look for the cookie called "cart"
    if (cartCookie) {
        const cartJson=decodeURIComponent(cartCookie.split('=')[1]);//Decodes it and converts it from JSON to object
    
        cart=JSON.parse(cartJson);
    }
}

// Function to add item to cart
function addToCart(productId) {
    const product=products.find(p=>p.id===productId);
    const cartItem=cart.find(item=>item.id===productId);//Check if the product is already in the cart
    
    if (cartItem) {
        cartItem.quantity++;//If it exists, increase the amount
    } else {
        cart.push({//If it does not exist, add it with quantity 1
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCartToCookies();//Save changes and refresh the screen
    updateCartDisplay();
}

// Function to remove item from cart
function removeFromCart(productId) {//removeFromCart(): Remove a specific product
    cart=cart.filter(item=>item.id!==productId);
    saveCartToCookies();
    updateCartDisplay();
}

// Function to clear cart
function clearCart() {// clearCart(): Empties the entire cart
    cart=[];
    saveCartToCookies();
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {// Update three items:
    const cartItems=document.getElementById('cart-items');//    The list of products in the cart
    const cartCount=document.getElementById('cart-count');//    The item counter
    const cartTotal=document.getElementById('cart-total');//    The total price
    
    // Update cart items display
    cartItems.innerHTML=cart.map(item=> `
        <div class="cart-item">
            <div class="cart-item-info">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>${item.price.toFixed(2)}€ x ${item.quantity}</p>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                Remove
            </button>
        </div>
    `).join('');
    
    // Update cart count
    cartCount.textContent=cart.reduce((total, item)=>total+item.quantity, 0);//Use .reduce() to calculate totals
    // Update cart total
    const total=cart.reduce((sum, item)=>sum+(item.price*item.quantity), 0);
    cartTotal.textContent=total.toFixed(2);// Format prices to two decimal places
    
}

// Add event listener for clear cart button
document.getElementById('clear-cart').addEventListener('click', clearCart);
