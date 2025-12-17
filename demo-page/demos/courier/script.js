// ===== SwiftShip Courier - Interactive Script =====

// Services Data
const services = [
    {
        icon: "fa-bolt",
        name: "Express Delivery",
        description: "Same-day and next-day delivery for urgent shipments. Priority handling and real-time tracking included.",
        features: ["Same Day", "Priority", "Insured"]
    },
    {
        icon: "fa-globe-americas",
        name: "International Shipping",
        description: "Worldwide delivery to over 195 countries. Customs handling and door-to-door service.",
        features: ["195+ Countries", "Customs", "Tracking"]
    },
    {
        icon: "fa-truck",
        name: "Freight Services",
        description: "Large cargo and bulk shipments by air, sea, or ground. Competitive rates for businesses.",
        features: ["Bulk Shipping", "Air/Sea/Ground", "B2B"]
    },
    {
        icon: "fa-warehouse",
        name: "Warehousing",
        description: "Secure storage and inventory management. Flexible solutions for e-commerce businesses.",
        features: ["24/7 Security", "Inventory", "Fulfillment"]
    },
    {
        icon: "fa-box",
        name: "E-commerce Solutions",
        description: "End-to-end logistics for online sellers. Integration with major platforms and automated shipping.",
        features: ["API Integration", "Auto-Shipping", "Returns"]
    },
    {
        icon: "fa-clock",
        name: "Scheduled Pickup",
        description: "Regular pickup schedules tailored to your business needs. Never miss a shipping deadline.",
        features: ["Daily/Weekly", "Flexible", "Reliable"]
    }
];

// Testimonials Data
const testimonials = [
    {
        text: "SwiftShip has transformed our e-commerce logistics. Same-day delivery has boosted our customer satisfaction by 40%.",
        name: "Jennifer Walsh",
        company: "TechGadgets Inc.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
        rating: 5
    },
    {
        text: "The real-time tracking and customer service are exceptional. Our international shipments arrive faster than ever.",
        name: "Marcus Chen",
        company: "Global Imports LLC",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
        rating: 5
    },
    {
        text: "Reliable, affordable, and professional. SwiftShip handles all our freight needs with zero issues.",
        name: "Sarah Mitchell",
        company: "Fresh Foods Co.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
        rating: 5
    }
];

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderTestimonials();
    createMovingLines();
    initScrollAnimations();
    initNavScroll();
    animateStats();
});

// Render Services
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    grid.innerHTML = services.map((service, index) => `
        <div class="service-card" style="animation: fadeInUp 0.6s ease ${index * 0.1}s backwards">
            <div class="service-icon">
                <i class="fas ${service.icon}"></i>
            </div>
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <div class="service-features">
                ${service.features.map(f => `<span class="service-feature">${f}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Render Testimonials
function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;

    grid.innerHTML = testimonials.map((t, index) => `
        <div class="testimonial-card" style="animation: fadeInUp 0.6s ease ${index * 0.15}s backwards">
            <div class="testimonial-rating">
                ${Array(t.rating).fill('<i class="fas fa-star"></i>').join('')}
            </div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
                <img src="${t.avatar}" alt="${t.name}" class="author-avatar">
                <div>
                    <div class="author-name">${t.name}</div>
                    <div class="author-company">${t.company}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Create Moving Lines Animation
function createMovingLines() {
    const container = document.getElementById('movingLines');
    if (!container) return;

    for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.className = 'moving-line';
        line.style.top = (Math.random() * 100) + '%';
        line.style.width = (100 + Math.random() * 200) + 'px';
        line.style.animationDelay = (Math.random() * 8) + 's';
        line.style.animationDuration = (6 + Math.random() * 4) + 's';
        container.appendChild(line);
    }
}

// Animate Stats on Scroll
function animateStats() {
    const stats = document.querySelectorAll('.stat-number[data-target]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateNumber(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 60;
    const duration = 2000;
    const stepTime = duration / 60;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, stepTime);
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

    document.querySelectorAll('.service-card, .testimonial-card, .coverage-stat').forEach(el => {
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

// Quick Track from Hero
function quickTrack() {
    const input = document.getElementById('heroTrackInput');
    if (input && input.value.trim()) {
        document.getElementById('trackingInput').value = input.value;
        document.getElementById('tracking').scrollIntoView({ behavior: 'smooth' });
        setTimeout(trackPackage, 500);
    }
}

// Track Package
function trackPackage() {
    const input = document.getElementById('trackingInput');
    const result = document.getElementById('trackingResult');

    if (input && input.value.trim()) {
        result.classList.add('active');
        result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Calculator Functions
function swapLocations() {
    const from = document.getElementById('calcFrom');
    const to = document.getElementById('calcTo');

    if (from && to) {
        const temp = from.value;
        from.value = to.value;
        to.value = temp;
    }
}

function calculateShipping() {
    const result = document.getElementById('calcResult');
    if (result) {
        result.style.display = 'block';
        result.scrollIntoView({ behavior: 'smooth' });
    }
}

function selectOption(element) {
    document.querySelectorAll('.shipping-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
}

// Modal Functions
function openShipModal() {
    document.getElementById('shipModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeShipModal() {
    document.getElementById('shipModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Handle Shipment Form
function handleShipment(event) {
    event.preventDefault();
    closeShipModal();

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
        closeShipModal();
    }
});

// Interactive map points
document.querySelectorAll('.pulse-point').forEach(point => {
    point.addEventListener('mouseenter', () => {
        point.style.transform = 'scale(1.5)';
    });
    point.addEventListener('mouseleave', () => {
        point.style.transform = 'scale(1)';
    });
});
