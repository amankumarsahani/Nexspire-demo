// ===== Savoria Cafe & Bistro - Interactive Script =====

// Menu Data
const menuData = {
    coffee: [
        {
            name: "Signature Espresso",
            desc: "Rich, bold espresso with notes of chocolate and caramel",
            price: 4.50,
            image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=200&q=80",
            tags: ["Popular", "Strong"]
        },
        {
            name: "Caramel Macchiato",
            desc: "Espresso marked with steamed milk and vanilla, topped with caramel",
            price: 5.50,
            image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=200&q=80",
            tags: ["Sweet"]
        },
        {
            name: "Iced Mocha",
            desc: "Espresso with rich chocolate sauce, milk, and whipped cream",
            price: 6.00,
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&q=80",
            tags: ["Refreshing"]
        },
        {
            name: "Vanilla Latte",
            desc: "Smooth espresso with steamed milk and house-made vanilla syrup",
            price: 5.25,
            image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=200&q=80",
            tags: ["Creamy"]
        }
    ],
    breakfast: [
        {
            name: "Avocado Toast",
            desc: "Smashed avocado on artisan sourdough with poached eggs and microgreens",
            price: 14.00,
            image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=200&q=80",
            tags: ["Healthy", "Popular"]
        },
        {
            name: "Belgian Waffles",
            desc: "Fluffy waffles with fresh berries, whipped cream and maple syrup",
            price: 12.00,
            image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=200&q=80",
            tags: ["Sweet"]
        },
        {
            name: "Eggs Benedict",
            desc: "Poached eggs on English muffin with ham and hollandaise",
            price: 15.00,
            image: "https://images.unsplash.com/photo-1608039829572-68e3bfa48bb5?w=200&q=80",
            tags: ["Classic"]
        },
        {
            name: "Acai Bowl",
            desc: "Blended acai with granola, fresh fruits, and honey drizzle",
            price: 13.00,
            image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=200&q=80",
            tags: ["Vegan", "Healthy"]
        }
    ],
    lunch: [
        {
            name: "Grilled Chicken Panini",
            desc: "Herb-marinated chicken with mozzarella, pesto, and roasted peppers",
            price: 14.50,
            image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&q=80",
            tags: ["Popular"]
        },
        {
            name: "Mediterranean Salad",
            desc: "Mixed greens, feta, olives, tomatoes with lemon herb dressing",
            price: 12.00,
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&q=80",
            tags: ["Healthy", "Vegan"]
        },
        {
            name: "Gourmet Burger",
            desc: "Angus beef patty with aged cheddar, caramelized onions, and special sauce",
            price: 16.00,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80",
            tags: ["Signature"]
        },
        {
            name: "Truffle Fries",
            desc: "Crispy fries tossed in truffle oil and parmesan with aioli",
            price: 9.00,
            image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&q=80",
            tags: ["Shareable"]
        }
    ],
    pastries: [
        {
            name: "Chocolate Croissant",
            desc: "Buttery, flaky croissant filled with rich Belgian chocolate",
            price: 4.50,
            image: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=200&q=80",
            tags: ["Bestseller"]
        },
        {
            name: "Blueberry Muffin",
            desc: "Fresh-baked muffin bursting with wild blueberries",
            price: 3.50,
            image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=200&q=80",
            tags: ["Fresh Daily"]
        },
        {
            name: "Cinnamon Roll",
            desc: "Warm, gooey cinnamon roll with cream cheese frosting",
            price: 5.00,
            image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=200&q=80",
            tags: ["Warm"]
        },
        {
            name: "Tiramisu",
            desc: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
            price: 8.00,
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&q=80",
            tags: ["Signature"]
        }
    ]
};

// Specials Data
const specials = [
    {
        name: "Truffle Eggs Benedict",
        desc: "Our signature eggs benedict elevated with black truffle shavings and truffle hollandaise",
        price: 22.00,
        image: "https://images.unsplash.com/photo-1608039829572-68e3bfa48bb5?w=600&q=80",
        badge: "Chef's Special"
    },
    {
        name: "Lavender Honey Latte",
        desc: "House-made lavender syrup, local honey, and smooth espresso in steamed oat milk",
        price: 7.50,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
        badge: "Seasonal"
    },
    {
        name: "Brioche French Toast",
        desc: "Thick-cut brioche dipped in vanilla custard, topped with mascarpone and fresh berries",
        price: 16.00,
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80",
        badge: "Weekend Only"
    }
];

// Gallery Data
const galleryImages = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80",
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80",
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&q=80",
    "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400&q=80"
];

// Reviews Data
const reviews = [
    {
        name: "Emily Carter",
        date: "2 days ago",
        text: "The best coffee in town! The avocado toast is absolutely divine and the atmosphere is so cozy. My new favorite spot for weekend brunch!",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
        rating: 5
    },
    {
        name: "Michael Chen",
        date: "1 week ago",
        text: "Finally found a cafe that roasts their own beans! The espresso is perfectly balanced and the pastries are always fresh. Highly recommend!",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
        rating: 5
    },
    {
        name: "Sarah Johnson",
        date: "2 weeks ago",
        text: "Came for a business meeting and was impressed by the quiet corners and excellent WiFi. The staff is incredibly attentive and friendly.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
        rating: 5
    }
];

// Current menu category
let currentCategory = 'coffee';

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    renderMenu(currentCategory);
    renderSpecials();
    renderGallery();
    renderReviews();
    createCoffeeBeans();
    initMenuTabs();
    initScrollAnimations();
    initNavScroll();
});

// Render Menu Items
function renderMenu(category) {
    const grid = document.getElementById('menuGrid');
    if (!grid) return;

    const items = menuData[category] || [];

    grid.innerHTML = items.map((item, index) => `
        <div class="menu-item" style="animation: fadeInUp 0.5s ease ${index * 0.1}s backwards">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="menu-item-desc">${item.desc}</p>
                <div class="menu-item-tags">
                    ${item.tags.map(tag => `<span class="menu-item-tag">${tag}</span>`).join('')}
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

            const category = tab.dataset.category;
            currentCategory = category;
            renderMenu(category);
        });
    });
}

// Render Specials
function renderSpecials() {
    const grid = document.getElementById('specialsGrid');
    if (!grid) return;

    grid.innerHTML = specials.map((item, index) => `
        <div class="special-card" style="animation: fadeInUp 0.6s ease ${index * 0.15}s backwards">
            <div class="special-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <span class="special-badge">${item.badge}</span>
            </div>
            <div class="special-content">
                <h3 class="special-name">${item.name}</h3>
                <p class="special-desc">${item.desc}</p>
                <div class="special-footer">
                    <span class="special-price">$${item.price.toFixed(2)}</span>
                    <button class="special-order-btn" onclick="openReservationModal()">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Gallery
function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    grid.innerHTML = galleryImages.map((img, index) => `
        <div class="gallery-item" style="animation: fadeInUp 0.5s ease ${index * 0.1}s backwards">
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
        <div class="review-card" style="animation: fadeInUp 0.6s ease ${index * 0.15}s backwards">
            <div class="review-header">
                <img src="${review.avatar}" alt="${review.name}" class="review-avatar">
                <div class="review-info">
                    <h4 class="review-name">${review.name}</h4>
                    <span class="review-date">${review.date}</span>
                </div>
                <div class="review-rating">
                    ${Array(review.rating).fill('<i class="fas fa-star"></i>').join('')}
                </div>
            </div>
            <p class="review-text">${review.text}</p>
        </div>
    `).join('');
}

// Create Floating Coffee Beans
function createCoffeeBeans() {
    const container = document.getElementById('coffeeBeans');
    if (!container) return;

    const beanEmojis = ['☕', '🫘', '☕', '🫘'];

    for (let i = 0; i < 15; i++) {
        const bean = document.createElement('div');
        bean.className = 'coffee-bean';
        bean.textContent = beanEmojis[Math.floor(Math.random() * beanEmojis.length)];
        bean.style.left = Math.random() * 100 + '%';
        bean.style.animationDelay = Math.random() * 25 + 's';
        bean.style.animationDuration = (20 + Math.random() * 15) + 's';
        container.appendChild(bean);
    }
}

// Initialize Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.menu-item, .special-card, .gallery-item, .review-card').forEach(el => {
        observer.observe(el);
    });
}

// Navbar Scroll Effect
function initNavScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active nav link on scroll
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
function openReservationModal() {
    document.getElementById('reservationModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeReservationModal() {
    document.getElementById('reservationModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Handle Reservation Form
function handleReservation(event) {
    event.preventDefault();
    closeReservationModal();

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
        closeReservationModal();
    }
});
