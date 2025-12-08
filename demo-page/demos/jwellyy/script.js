// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Create Particle System
function createParticleSystem() {
    const particlesContainer = document.getElementById('particles');

    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 5 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = (Math.random() * 6 + 6) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';

        particlesContainer.appendChild(particle);

        setTimeout(() => particle.remove(), 12000);
    }, 400);
}

// Start particle system
setTimeout(createParticleSystem, 500);

// Product Data
const products = [
    {
        id: 1,
        name: "Eternal Diamond Ring",
        category: "rings",
        price: 2499,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
        badge: "Bestseller",
        description: "Exquisite 18K white gold ring featuring a stunning 2-carat center diamond surrounded by micro-pavé diamonds."
    },
    {
        id: 2,
        name: "Royal Sapphire Necklace",
        category: "necklaces",
        price: 3999,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
        badge: "New",
        description: "Luxurious platinum necklace adorned with rare blue sapphires and brilliant-cut diamonds."
    },
    {
        id: 3,
        name: "Classic Pearl Earrings",
        category: "earrings",
        price: 899,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
        badge: "",
        description: "Timeless freshwater pearl earrings set in 14K yellow gold with diamond accents."
    },
    {
        id: 4,
        name: "Infinity Love Bracelet",
        category: "bracelets",
        price: 1599,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
        badge: "Trending",
        description: "Elegant 18K rose gold bracelet featuring the iconic infinity symbol studded with diamonds."
    },
    {
        id: 5,
        name: "Emerald Elegance Ring",
        category: "rings",
        price: 2899,
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80",
        badge: "",
        description: "Stunning emerald-cut center stone flanked by brilliant diamonds in platinum setting."
    },
    {
        id: 6,
        name: "Diamond Tennis Bracelet",
        category: "bracelets",
        price: 4299,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
        badge: "Luxury",
        description: "Classic tennis bracelet featuring 50 round brilliant diamonds in 18K white gold."
    }
];

// Shopping Cart
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.querySelector('.cart-count');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');

// Render Products
function renderProducts(filter = 'all') {
    productsGrid.innerHTML = '';

    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    filtered.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', index * 100);
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <button class="quick-view" onclick="showProductDetails(${product.id})">
                    <i class="fas fa-eye"></i>
                    <span>Quick View</span>
                </button>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price.toLocaleString()}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-bag"></i>
                    <span>Add to Cart</span>
                </button>
            </div>
        `;
        productsGrid.appendChild(card);
    });

    // Refresh AOS
    AOS.refresh();
}

// Filter Functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.category);
    });
});

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showNotification('Added to cart!');
}

// Update Cart
function updateCart() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    renderCart();
}

// Render Cart
function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-bag-shopping"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        document.querySelector('.total-amount').textContent = '$0.00';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" style="display: flex; gap: 1rem; padding: 1.25rem; border-bottom: 1px solid rgba(255,255,255,0.1); align-items: center;">
            <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; border-radius: 12px; object-fit: cover;">
            <div style="flex: 1;">
                <div style="color: white; font-weight: 700; margin-bottom: 0.35rem;">${item.name}</div>
                <div style="color: #D4AF37; font-weight: 600;">$${item.price.toLocaleString()} × ${item.quantity}</div>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 1.3rem; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.querySelector('.total-amount').textContent = `$${total.toLocaleString()}`;
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Show Product Details
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-details">
            <h2>${product.name}</h2>
            <div class="product-category">${product.category.toUpperCase()}</div>
            <div class="product-price">$${product.price.toLocaleString()}</div>
            <p style="color: rgba(255,255,255,0.8); line-height: 1.8; margin: 2rem 0;">${product.description}</p>
            <button class="btn-primary" onclick="addToCart(${product.id}); closeProductModal();">
                <span>Add to Cart</span>
                <i class="fas fa-shopping-bag"></i>
            </button>
        </div>
    `;

    productModal.classList.add('active');
}

// Close Product Modal
function closeProductModal() {
    productModal.classList.remove('active');
}

// Cart Modal Toggle
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
});

closeModal.addEventListener('click', closeProductModal);

// Close modals on outside click
cartSidebar.addEventListener('click', (e) => {
    if (e.target === cartSidebar) cartSidebar.classList.remove('active');
});

productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeProductModal();
});

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(135deg, #D4AF37, #FFD700);
        color: #0F172A;
        padding: 1.25rem 2.5rem;
        border-radius: 50px;
        box-shadow: 0 10px 40px rgba(212,175,55,0.4);
        z-index: 10000;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
        animation: slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    notification.innerHTML = `<i class="fas fa-check-circle" style="margin-right: 0.65rem;"></i>${message}`;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => notification.remove(), 500);
    }, 2500);
}

// Animation Keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(500px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(500px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize
renderProducts();
updateCart();

console.log('✨ JWellyy - Premium Luxury Jewelry loaded successfully! ✨');
