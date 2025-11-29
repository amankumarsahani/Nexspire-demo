const products = [
    {
        id: 1,
        name: "Minimalist Cotton Tee",
        category: "Men",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80"
    },
    {
        id: 2,
        name: "Urban Denim Jacket",
        category: "Men",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80"
    },
    {
        id: 3,
        name: "Classic Leather Watch",
        category: "Accessories",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80"
    },
    {
        id: 4,
        name: "Summer Floral Dress",
        category: "Women",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80"
    },
    {
        id: 5,
        name: "Premium Sunglasses",
        category: "Accessories",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&q=80"
    },
    {
        id: 6,
        name: "Casual Sneakers",
        category: "Men",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1527010154944-f2241763d806?w=500&q=80"
    },
    {
        id: 7,
        name: "Elegant Tote Bag",
        category: "Women",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80"
    },
    {
        id: 8,
        name: "Wool Blend Scarf",
        category: "Accessories",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&q=80"
    }
];

const productGrid = document.getElementById('product-grid');
const cartCountElement = document.querySelector('.cart-count');
let cartCount = 0;

function renderProducts(filter = 'All') {
    productGrid.innerHTML = '';

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <button class="add-to-cart-btn" onclick="addToCart()" aria-label="Add to Cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price}</div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

function addToCart() {
    cartCount++;
    cartCountElement.textContent = cartCount;

    // Simple animation effect
    cartCountElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
    }, 200);
}

// Filter Tabs Logic
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderProducts(tab.textContent);
    });
});

// Initial Render
renderProducts();

// Expose addToCart to global scope for inline onclick
window.addToCart = addToCart;
