// cart.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    if (document.getElementById('cart-items')) {
        displayCart();
    }
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    
    if (!cartItems || !totalAmount) return;

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.style.display = 'flex';
        cartItem.style.alignItems = 'center';
        cartItem.style.marginBottom = '10px';
        cartItem.style.padding = '10px';
        cartItem.style.border = '1px solid #ddd';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px; object-fit: cover; margin-right: 20px;">
            <div class="item-details" style="flex-grow: 1;">
                <h3 style="margin: 0 0 10px 0;">${item.name}</h3>
                <p style="margin: 0;">Price: $${item.price.toFixed(2)}</p>
            </div>
            <button onclick="removeFromCart(${index})" style="background-color: #f44336; color: white; border: none; padding: 5px 10px; cursor: pointer;">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    totalAmount.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Call displayCart when the cart page loads
if (document.getElementById('cart-items')) {
    displayCart();
}