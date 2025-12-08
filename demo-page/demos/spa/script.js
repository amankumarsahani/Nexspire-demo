// Initialize AOS
AOS.init({
    duration: 1200,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Petal Animation
function createPetals() {
    const container = document.getElementById('petals');
    const colors = ['#FFD7D7', '#FFE4E1', '#FFF0F5']; // Shades of soft pink

    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';

        // Random properties
        const startLeft = Math.random() * 100;
        const size = Math.random() * 10 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];

        petal.style.left = startLeft + '%';
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        petal.style.background = color;
        petal.style.animationDuration = (Math.random() * 5 + 10) + 's';

        container.appendChild(petal);

        // Cleanup
        setTimeout(() => petal.remove(), 15000);
    }, 800);
}

// Start visual effects
setTimeout(createPetals, 500);

// Audio Control
let isPlaying = false;
// Note: In a real environment we would have an audio file. 
// For this demo, we verify the toggle functionality works visually.
function toggleAudio() {
    const btn = document.getElementById('audioToggle');
    const icon = btn.querySelector('i');

    isPlaying = !isPlaying;

    if (isPlaying) {
        btn.classList.add('active');
        icon.className = 'fa-solid fa-volume-high';
        showNotification('Ambient sounds played');
    } else {
        btn.classList.remove('active');
        icon.className = 'fa-solid fa-volume-off';
        showNotification('Ambient sounds paused');
    }
}

// Data
const treatments = [
    {
        icon: 'fa-hot-tub-person',
        title: 'Hydrotherapy',
        description: 'Healing water treatments to soothe muscles and calm the mind.',
        duration: '45 mins'
    },
    {
        icon: 'fa-hands-bubbles',
        title: 'Deep Tissue',
        description: 'Intensive massage targeting deep muscle layers for tension release.',
        duration: '60/90 mins'
    },
    {
        icon: 'fa-feather',
        title: 'Aromatherapy',
        description: 'Essential oils blended to enhance physical and emotional wellness.',
        duration: '60 mins'
    },
    {
        icon: 'fa-gem',
        title: 'Hot Stone',
        description: 'Smooth, heated stones placed on key points to melt away stress.',
        duration: '75 mins'
    },
    {
        icon: 'fa-mask-face',
        title: 'Organic Facial',
        description: 'Natural ingredients to nourish, cleanse and revitalize your skin.',
        duration: '50 mins'
    },
    {
        icon: 'fa-yin-yang',
        title: 'Reiki Healing',
        description: 'Energy healing technique to restore balance and harmony.',
        duration: '60 mins'
    }
];

const packages = [
    {
        title: 'Zen Harmony',
        price: '$180',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
        features: ['60min Aromatherapy Massage', 'Organic Facial', 'Herbal Tea Ceremony']
    },
    {
        title: 'Royal Indulgence',
        price: '$290',
        image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80',
        features: ['90min Hot Stone Massage', 'Full Body Scrub', 'Hydrotherapy Session', 'Spa Lunch']
    },
    {
        title: 'Couples Retreat',
        price: '$450',
        image: 'https://images.unsplash.com/photo-1591343395882-a1b0293f30a2?w=600&q=80',
        features: ['Side-by-side Massage', 'Private Jacuzzi Time', 'Champagne & Fruits', 'Relaxation Lounge']
    }
];

// Render Treatments
const treatmentsGrid = document.getElementById('treatmentsGrid');
treatments.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'treatment-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', index * 100);
    card.innerHTML = `
        <i class="fa-solid ${item.icon} treatment-icon"></i>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="treatment-duration">${item.duration}</div>
    `;
    treatmentsGrid.appendChild(card);
});

// Render Packages
const packagesGrid = document.getElementById('packagesGrid');
packages.forEach((pkg, index) => {
    const card = document.createElement('div');
    card.className = 'package-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', index * 100);

    const featuresList = pkg.features.map(f => `<li><i class="fa-solid fa-leaf"></i> ${f}</li>`).join('');

    card.innerHTML = `
        <div class="package-image">
            <img src="${pkg.image}" alt="${pkg.title}">
        </div>
        <div class="package-content">
            <h3 class="package-title">${pkg.title}</h3>
            <span class="package-price">${pkg.price}</span>
            <ul class="package-features">${featuresList}</ul>
            <button class="btn-primary btn-full" onclick="showBookingModal()">Reserve Package</button>
        </div>
    `;
    packagesGrid.appendChild(card);
});

// Booking Modal Functions
function showBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function handleBooking(e) {
    e.preventDefault();
    closeBookingModal();
    showNotification('Reservation request sent successfully. We will contact you shortly.');
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(47, 79, 79, 0.9);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        z-index: 10000;
        font-family: 'Lato', sans-serif;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        animation: fadeIn 0.5s ease;
    `;
    notification.innerHTML = `<i class="fa-solid fa-check" style="margin-right: 10px;"></i> ${message}`;

    document.body.appendChild(notification);

    // Add fade in animation style if not present
    if (!document.getElementById('notification-style')) {
        const style = document.createElement('style');
        style.id = 'notification-style';
        style.textContent = `
            @keyframes fadeIn { from { opacity: 0; transform: translate(-50%, 20px); } to { opacity: 1; transform: translate(-50%, 0); } }
            @keyframes fadeOut { from { opacity: 1; transform: translate(-50%, 0); } to { opacity: 0; transform: translate(-50%, 20px); } }
        `;
        document.head.appendChild(style);
    }

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s ease forwards';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Close modal on outside click
document.getElementById('bookingModal').addEventListener('click', (e) => {
    if (e.target.id === 'bookingModal') closeBookingModal();
});

console.log('🌿 Serenity Spa loaded successfully');
