// favorites.js

function addToFavorites(product) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Add a timestamp as a unique identifier
    const favoriteItem = {
        ...product,
        id: Date.now()
    };
    
    favorites.push(favoriteItem);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Product added to favorites!');
    displayFavorites();
}

function removeFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(item => item.id !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
}

function displayFavorites() {
    const favoritesContainer = document.getElementById('favorites-container');
    if (!favoritesContainer) return;

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>You have no favorites yet.</p>';
        return;
    }

    let html = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;">';
    favorites.forEach(product => {
        html += `
            <div style="border: 1px solid #ddd; padding: 10px; text-align: center;">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 200px; object-fit: cover;">
                <h3 style="margin: 10px 0;">${product.name}</h3>
                <p style="margin: 10px 0;">$${product.price.toFixed(2)}</p>
                <button onclick="removeFromFavorites(${product.id})" style="background-color: #f44336; color: white; border: none; padding: 5px 10px; cursor: pointer;">Remove</button>
            </div>
        `;
    });
    html += '</div>';

    favoritesContainer.innerHTML = html;
}

// Call displayFavorites when the page loads
document.addEventListener('DOMContentLoaded', displayFavorites);