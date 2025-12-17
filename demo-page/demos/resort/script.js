// ===== Paradise Resort & Spa - Interactive Script =====

// Room Data
const rooms = [
    {
        name: "Deluxe Ocean View",
        description: "Wake up to breathtaking ocean panoramas in our elegantly appointed deluxe rooms.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
        tag: "Most Popular",
        price: 450,
        features: ["Ocean View", "King Bed", "65 sqm"]
    },
    {
        name: "Premium Suite",
        description: "Spacious luxury with separate living area and premium amenities for the discerning traveler.",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
        tag: "Luxury",
        price: 750,
        features: ["Sea View", "2 Rooms", "95 sqm"]
    },
    {
        name: "Presidential Villa",
        description: "The ultimate in tropical luxury with private pool, butler service, and exclusive beach access.",
        image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&q=80",
        tag: "Exclusive",
        price: 1200,
        features: ["Private Pool", "3 Bedrooms", "280 sqm"]
    },
    {
        name: "Beach Bungalow",
        description: "Step directly onto pristine sand from your private bungalow with thatched roof charm.",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
        tag: "Beachfront",
        price: 850,
        features: ["Beach Access", "Terrace", "120 sqm"]
    }
];

// Amenities Data
const amenities = [
    { icon: "fa-swimming-pool", name: "Infinity Pool", desc: "Stunning oceanfront infinity pool with panoramic views" },
    { icon: "fa-spa", name: "Luxury Spa", desc: "World-class treatments using natural ingredients" },
    { icon: "fa-dumbbell", name: "Fitness Center", desc: "State-of-the-art equipment with personal trainers" },
    { icon: "fa-water", name: "Water Sports", desc: "Snorkeling, diving, kayaking, and paddleboarding" },
    { icon: "fa-umbrella-beach", name: "Private Beach", desc: "Exclusive stretch of pristine white sand beach" },
    { icon: "fa-concierge-bell", name: "24/7 Concierge", desc: "Personalized service for all your needs" },
    { icon: "fa-utensils", name: "Fine Dining", desc: "Multiple restaurants with world-class cuisine" },
    { icon: "fa-child", name: "Kids Club", desc: "Supervised activities for young adventurers" }
];

// Gallery Data
const galleryImages = [
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80"
];

// Testimonials Data
const testimonials = [
    {
        quote: "An absolutely magical experience. The staff went above and beyond to make our honeymoon unforgettable. The sunset views from our villa were breathtaking.",
        name: "Sarah & Michael Thompson",
        title: "Honeymoon Guests, USA",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    },
    {
        quote: "Paradise Resort exceeded all expectations. From the pristine beaches to the exquisite dining, every moment was perfect. We're already planning our return.",
        name: "James Richardson",
        title: "Business Executive, UK",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
    },
    {
        quote: "The spa treatments were heavenly, and the ocean view from our suite was simply stunning. This is true luxury at its finest.",
        name: "Elena Rodriguez",
        title: "Travel Blogger, Spain",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    }
];

// Current testimonial index
let currentTestimonial = 0;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    renderRooms();
    renderAmenities();
    renderGallery();
    renderTestimonials();
    createParticles();
    initScrollAnimations();
    initNavScroll();
    animateStats();
});

// Render Rooms
function renderRooms() {
    const grid = document.getElementById('roomsGrid');
    if (!grid) return;

    grid.innerHTML = rooms.map((room, index) => `
        <div class="room-card" style="animation: fadeInUp 0.6s ease ${index * 0.15}s backwards">
            <div class="room-image">
                <img src="${room.image}" alt="${room.name}" loading="lazy">
                <span class="room-tag">${room.tag}</span>
            </div>
            <div class="room-content">
                <h3 class="room-name">${room.name}</h3>
                <p class="room-desc">${room.description}</p>
                <div class="room-features">
                    ${room.features.map(f => `
                        <span class="room-feature">
                            <i class="fas fa-check"></i>
                            ${f}
                        </span>
                    `).join('')}
                </div>
                <div class="room-footer">
                    <div class="room-price">$${room.price}<span>/night</span></div>
                    <button class="room-book-btn" onclick="openBookingModal()">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Amenities
function renderAmenities() {
    const grid = document.getElementById('amenitiesGrid');
    if (!grid) return;

    grid.innerHTML = amenities.map((amenity, index) => `
        <div class="amenity-card" style="animation: fadeInUp 0.6s ease ${index * 0.1}s backwards">
            <div class="amenity-icon">
                <i class="fas ${amenity.icon}"></i>
            </div>
            <h3>${amenity.name}</h3>
            <p>${amenity.desc}</p>
        </div>
    `).join('');
}

// Render Gallery
function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    grid.innerHTML = galleryImages.map((img, index) => `
        <div class="gallery-card" style="animation: fadeInUp 0.6s ease ${index * 0.1}s backwards">
            <img src="${img}" alt="Resort Gallery ${index + 1}" loading="lazy">
            <div class="gallery-card-overlay">
                <i class="fas fa-expand"></i>
            </div>
        </div>
    `).join('');
}

// Render Testimonials
function renderTestimonials() {
    const slider = document.getElementById('testimonialsSlider');
    const dots = document.getElementById('sliderDots');
    if (!slider || !dots) return;

    slider.innerHTML = testimonials.map((t, index) => `
        <div class="testimonial-slide ${index === 0 ? 'active' : ''}">
            <p class="testimonial-quote">${t.quote}</p>
            <div class="testimonial-author">
                <img src="${t.avatar}" alt="${t.name}" class="author-avatar">
                <div class="author-info">
                    <h4 class="author-name">${t.name}</h4>
                    <span class="author-title">${t.title}</span>
                </div>
            </div>
        </div>
    `).join('');

    dots.innerHTML = testimonials.map((_, index) => `
        <div class="slider-dot ${index === 0 ? 'active' : ''}" onclick="goToTestimonial(${index})"></div>
    `).join('');
}

// Testimonial Navigation
function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonial();
}

function updateTestimonial() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.slider-dot');

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentTestimonial);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentTestimonial);
    });
}

// Auto-advance testimonials
setInterval(nextTestimonial, 6000);

// Create Floating Particles
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 15) + 's';
        container.appendChild(particle);
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

    document.querySelectorAll('.room-card, .amenity-card, .gallery-card').forEach(el => {
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
function openBookingModal() {
    document.getElementById('bookingModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    document.getElementById('bookingModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Handle Booking Form Submission
function handleBooking(event) {
    event.preventDefault();
    closeBookingModal();

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
        closeBookingModal();
    }
});
