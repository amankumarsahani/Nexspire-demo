// ===== SwiftShip Courier - Interactive Script =====

// Services Data
const services = [
    {
        icon: "fa-bolt",
        name: "Express Delivery",
        description: "Same-day and next-day delivery for urgent shipments. Perfect for time-sensitive packages.",
        features: ["Same-Day", "Next-Day", "Priority Handling"]
    },
    {
        icon: "fa-globe-americas",
        name: "International Shipping",
        description: "Seamless worldwide delivery with customs clearance and door-to-door tracking.",
        features: ["195+ Countries", "Customs Cleared", "Duty Paid Options"]
    },
    {
        icon: "fa-ship",
        name: "Freight Services",
        description: "Cost-effective solutions for large shipments via sea and air freight.",
        features: ["Sea Freight", "Air Freight", "LCL & FCL"]
    },
    {
        icon: "fa-warehouse",
        name: "Warehousing",
        description: "Secure storage and fulfillment services with real-time inventory management.",
        features: ["Climate Control", "Inventory Mgmt", "Pick & Pack"]
    },
    {
        icon: "fa-truck",
        name: "Ground Shipping",
        description: "Reliable domestic ground delivery with flexible pickup and delivery options.",
        features: ["Nationwide", "Flexible Schedule", "Tracking"]
    },
    {
        icon: "fa-dolly",
        name: "Last Mile Delivery",
        description: "Efficient last-mile solutions ensuring packages reach your customers' doorsteps.",
        features: ["Same-Day", "Photo Proof", "Live Updates"]
    }
];

// Testimonials Data
const testimonials = [
    {
        text: "SwiftShip has transformed our e-commerce logistics. Deliveries are faster and customers are happier than ever. Their tracking system is incredibly accurate.",
        name: "Jennifer Lee",
        company: "TechMart CEO",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    },
    {
        text: "We ship thousands of packages monthly. SwiftShip's reliability and competitive pricing have made them our exclusive logistics partner for 3 years.",
        name: "Michael Chen",
        company: "GlobalGoods Director",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
        text: "The real-time tracking feature is a game-changer. Our customers love being able to see exactly where their package is at any moment.",
        name: "Sarah Williams",
        company: "FashionHub Founder",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    }
];

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderTestimonials();
    createMovingLines();
    initScrollAnimations();
    animateStats();
    initNavScroll();
});

// Render Services
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    grid.innerHTML = services.map((service, index) => `
        <div class="service-card" style="animation: fadeInUp 0.5s ease ${index * 0.1}s backwards">
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
        <div class="testimonial-card" style="animation: fadeInUp 0.5s ease ${index * 0.15}s backwards">
            <div class="testimonial-stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
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
        line.style.top = (20 + i * 20) + '%';
        line.style.width = (100 + Math.random() * 200) + 'px';
        line.style.animationDelay = (i * 2) + 's';
        line.style.opacity = 0.3 + Math.random() * 0.3;
        container.appendChild(line);
    }
}

// Animate Stats
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
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, stepTime);
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(0) + 'M+';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toLocaleString();
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

    document.querySelectorAll('.service-card, .testimonial-card').forEach(el => {
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

// Quick Track from Hero
function quickTrack() {
    const input = document.getElementById('heroTrackInput');
    const trackingNumber = input.value.trim();

    if (trackingNumber) {
        document.getElementById('trackingInput').value = trackingNumber;
        document.getElementById('tracking').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => trackPackage(), 500);
    } else {
        document.getElementById('tracking').scrollIntoView({ behavior: 'smooth' });
    }
}

// Track Package
function trackPackage() {
    const input = document.getElementById('trackingInput');
    const result = document.getElementById('trackingResult');
    const trackingNumber = input.value.trim();

    if (!trackingNumber) {
        input.style.borderColor = '#FF4444';
        setTimeout(() => input.style.borderColor = '', 2000);
        return;
    }

    // Simulate loading
    result.style.opacity = '0.5';

    setTimeout(() => {
        result.style.opacity = '1';
        // Update tracking number in result
        const packageId = result.querySelector('.package-id');
        if (packageId) {
            packageId.textContent = trackingNumber.toUpperCase();
        }

        // Animate progress bar
        const progress = result.querySelector('.map-progress');
        if (progress) {
            progress.style.width = '0';
            setTimeout(() => progress.style.width = '65%', 100);
        }
    }, 1000);
}

// Shipping Calculator
function calculateShipping() {
    const from = document.getElementById('calcFrom').value;
    const to = document.getElementById('calcTo').value;
    const weight = document.getElementById('calcWeight').value;

    if (!from || !to || !weight) {
        alert('Please fill in all required fields');
        return;
    }

    const result = document.getElementById('calcResult');
    result.style.animation = 'fadeInUp 0.5s ease';

    // Update prices based on weight (simulated)
    const basePrice = parseFloat(weight) * 5;
    const options = result.querySelectorAll('.shipping-option');

    options.forEach((option, index) => {
        const priceEl = option.querySelector('.option-price');
        const multipliers = [3, 1.5, 1];
        const price = (basePrice * multipliers[index]).toFixed(2);
        priceEl.textContent = '$' + price;
    });
}

function swapLocations() {
    const from = document.getElementById('calcFrom');
    const to = document.getElementById('calcTo');
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
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

// Mobile Menu
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

// Add some interactivity to pulse points on map
document.querySelectorAll('.pulse-point').forEach(point => {
    point.addEventListener('click', () => {
        const city = point.querySelector('span').textContent;
        alert(`SwiftShip has a major hub in ${city} with 24/7 operations!`);
    });
});
