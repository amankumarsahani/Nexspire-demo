// ===== Savoria Cafe & Bistro - Interactive Script =====

// Menu Data
const menuItems = [
    {
        name: "Espresso",
        description: "Rich, bold single or double shot of our signature blend",
        price: 4,
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80",
        category: "coffee",
        tags: ["Classic", "Organic"]
    },
    {
        name: "Cappuccino",
        description: "Silky steamed milk with perfect microfoam over espresso",
        price: 5.5,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80",
        category: "coffee",
        tags: ["Popular", "Creamy"]
    },
    {
        name: "Caramel Latte",
        description: "Espresso with steamed milk and house-made caramel",
        price: 6,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
        category: "coffee",
        badge: "Bestseller",
        tags: ["Sweet", "Indulgent"]
    },
    {
        name: "Avocado Toast",
        description: "Sourdough with smashed avocado, poached eggs, and microgreens",
        price: 14,
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&q=80",
        category: "breakfast",
        badge: "Healthy",
        tags: ["Vegetarian", "Fresh"]
    },
    {
        name: "Belgian Waffles",
        description: "Crispy waffles with berries, whipped cream, and maple syrup",
        price: 12,
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&q=80",
        category: "breakfast",
        tags: ["Sweet", "Classic"]
    },
    {
        name: "Eggs Benedict",
        description: "Poached eggs, ham, hollandaise on English muffin",
        price: 16,
        image: "https://images.unsplash.com/photo-1608039829572-813e28d9fd04?w=400&q=80",
        category: "breakfast",
        badge: "Chef's Pick",
        tags: ["Classic", "Brunch"]
    },
    {
        name: "Grilled Salmon Bowl",
        description: "Fresh salmon, quinoa, roasted vegetables, lemon dill sauce",
        price: 22,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
        category: "lunch",
        badge: "Healthy",
        tags: ["Protein", "Fresh"]
    },
    {
        name: "Truffle Burger",
        description: "Wagyu beef, truffle aioli, caramelized onions, brioche bun",
        price: 24,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
        category: "lunch",
        badge: "Popular",
        tags: ["Indulgent", "Signature"]
    },
    {
        name: "Mediterranean Wrap",
        description: "Grilled chicken, hummus, feta, fresh vegetables in lavash",
        price: 16,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
        category: "lunch",
        tags: ["Light", "Fresh"]
    },
    {
        name: "Tiramisu",
        description: "Classic Italian mascarpone, espresso-soaked ladyfingers",
        price: 10,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
        category: "desserts",
        badge: "Must Try",
        tags: ["Coffee", "Classic"]
    },
    {
        name: "Crème Brûlée",
        description: "Vanilla custard with caramelized sugar crust",
        price: 9,
        image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=400&q=80",
        category: "desserts",
        tags: ["French", "Creamy"]
    },
    {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center, vanilla ice cream",
        price: 11,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
        category: "desserts",
        badge: "Signature",
        tags: ["Chocolate", "Warm"]
    }
];

// Gallery Data
const galleryImages = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&q=80",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80",
    "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&q=80",
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&q=80"
];

// Reviews Data
const reviews = [
    {
        text: "The best brunch spot in the city! The avocado toast is perfection and their coffee keeps me coming back every weekend.",
        name: "Emma Watson",
        date: "2 weeks ago",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
        rating: 5
    },
    {
        text: "Incredible atmosphere and even better food. The truffle burger is a must-try. Perfect for date nights!",
        name: "James Miller",
        date: "1 month ago",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        rating: 5
    },
    {
        text: "Finally found my favorite cafe! The staff is wonderful and their desserts are heavenly. The tiramisu is divine.",
        name: "Sofia Rodriguez",
        date: "3 weeks ago",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
        rating: 5
    }
];

// Current category filter
let currentCategory = 'all';

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    renderGallery();
    renderReviews();
    initMenuTabs();
    initScrollAnimations();
    initNavScroll();
});

// Render Menu Items
function renderMenu() {
    const grid = document.getElementById('menuGrid');
    if (!grid) return;

    const filteredItems = currentCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === currentCategory);

    grid.innerHTML = filteredItems.map((item, index) => `
        <div class="menu-card" data-category="${item.category}" style="animation: fadeInUp 0.5s ease ${index * 0.1}s backwards">
            <div class="menu-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
            </div>
            <div class="menu-content">
                <div class="menu-header">
                    <h3 class="menu-name">${item.name}</h3>
                    <span class="menu-price">$${item.price}</span>
                </div>
                <p class="menu-desc">${item.description}</p>
                <div class="menu-tags">
                    ${item.tags.map(tag => `<span class="menu-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize Menu Tabs
function initMenuTabs() {
    const tabs = document.querySelectorAll('.menu-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            currentCategory = tab.dataset.category;
            renderMenu();
        });
    });
}

// Render Gallery
function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    grid.innerHTML = galleryImages.map((img, index) => `
        <div class="gallery-card" style="animation: fadeInUp 0.5s ease ${index * 0.1}s backwards">
            <img src="${img}" alt="Savoria Gallery ${index + 1}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-expand"></i>
            </div>
        </div>
    `).join('');
}

// Render Reviews
function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    if (!grid) return;

    grid.innerHTML = reviews.map((review, index) => `
        <div class="review-card" style="animation: fadeInUp 0.5s ease ${index * 0.15}s backwards">
            <div class="review-header">
                <div class="review-author">
                    <img src="${review.avatar}" alt="${review.name}" class="author-avatar">
                    <div>
                        <div class="author-name">${review.name}</div>
                        <div class="author-date">${review.date}</div>
                    </div>
                </div>
                <div class="review-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
                </div>
            </div>
            <p class="review-text">"${review.text}"</p>
        </div>
    `).join('');
}

// Initialize Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.menu-card, .gallery-card, .review-card, .special-card').forEach(el => {
        observer.observe(el);
    });
}

// Navbar Scroll Effect
function initNavScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active link tracking
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Modal Functions
function openReserveModal() {
    document.getElementById('reserveModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeReserveModal() {
    document.getElementById('reserveModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Handle Reservation Form
function handleReservation(event) {
    event.preventDefault();
    closeReserveModal();

    // Show success toast
    const toast = document.getElementById('successToast');
    toast.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 5000);
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeReserveModal();
    }
});

// Add hover effect to special cards
document.querySelectorAll('.special-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});
