// Serenity Spa Data
const treatments = [
    { icon: '💆', title: 'Signature Massage', desc: 'Our signature full-body massage combining Swedish and deep tissue techniques for complete relaxation.', duration: '90 min', price: '$149' },
    { icon: '🔥', title: 'Hot Stone Therapy', desc: 'Warm volcanic stones placed on key points to melt away tension and restore energy flow.', duration: '75 min', price: '$129' },
    { icon: '🌸', title: 'Aromatherapy', desc: 'Therapeutic massage with custom-blended essential oils for deep relaxation and healing.', duration: '60 min', price: '$99' },
    { icon: '✨', title: 'Facial Rejuvenation', desc: 'Luxurious facial treatment with organic products for radiant, glowing skin.', duration: '60 min', price: '$119' },
    { icon: '🍃', title: 'Body Wrap', desc: 'Detoxifying wrap with natural herbs and minerals to purify and nourish your skin.', duration: '90 min', price: '$159' },
    { icon: '🧘', title: 'Meditation Session', desc: 'Guided meditation for mental clarity, stress relief, and inner peace.', duration: '45 min', price: '$59' }
];

const packages = [
    { title: 'Day of Bliss', price: '$299', featured: false, image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80', features: ['90-min Signature Massage', 'Facial Rejuvenation', 'Aromatherapy Bath', 'Herbal Tea Service'] },
    { title: 'Ultimate Retreat', price: '$449', featured: true, badge: 'Most Popular', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec66?w=600&q=80', features: ['Hot Stone Therapy', 'Body Wrap', 'Facial Rejuvenation', 'Gourmet Lunch', 'Pool Access'] },
    { title: 'Couples Escape', price: '$549', featured: false, image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80', features: ['Couples Massage', 'Private Suite', 'Champagne & Chocolate', 'Aromatherapy', 'Sunset Views'] }
];

const classes = [
    { title: 'Morning Yoga', time: '7:00 AM - 8:00 AM', instructor: 'Maya Singh', icon: 'fa-spa' },
    { title: 'Meditation', time: '9:00 AM - 10:00 AM', instructor: 'Dr. James Wilson', icon: 'fa-om' },
    { title: 'Power Yoga', time: '6:00 PM - 7:00 PM', instructor: 'Sarah Martinez', icon: 'fa-dumbbell' },
    { title: 'Tai Chi', time: '8:00 AM - 9:00 AM', instructor: 'Master Chen', icon: 'fa-yin-yang' },
    { title: 'Breathwork', time: '5:00 PM - 6:00 PM', instructor: 'Emma Thompson', icon: 'fa-wind' },
    { title: 'Restorative Yoga', time: '7:00 PM - 8:00 PM', instructor: 'Lisa Anderson', icon: 'fa-leaf' }
];

const testimonials = [
    { quote: 'An absolutely transformative experience. The moment I walked in, all my stress melted away. The therapists are incredibly skilled and attentive. This is my sanctuary.', author: 'Sarah Mitchell, Wellness Enthusiast' },
    { quote: 'I have visited spas around the world, and Serenity stands out for its authentic approach to wellness. The attention to detail is remarkable.', author: 'David Chen, Travel Writer' },
    { quote: 'The perfect escape from city life. Every treatment feels like a journey, and the staff truly cares about your wellbeing.', author: 'Jennifer Woods, Yoga Instructor' }
];

// Render Functions
function renderTreatments() {
    const timeline = document.getElementById('treatmentsTimeline');
    timeline.innerHTML = treatments.map((t, i) => `
        <div class="treatment-card" style="animation: fadeInUp 0.5s ease ${i * 0.1}s both">
            <div class="treatment-icon">${t.icon}</div>
            <h3>${t.title}</h3>
            <p>${t.desc}</p>
            <div class="treatment-meta">
                <span><i class="far fa-clock"></i> ${t.duration}</span>
                <span>${t.price}</span>
            </div>
        </div>
    `).join('');
}

function renderPackages() {
    const grid = document.getElementById('packagesGrid');
    grid.innerHTML = packages.map((p, i) => `
        <div class="package-card ${p.featured ? 'featured' : ''}" style="animation: fadeInUp 0.6s ease ${i * 0.15}s both">
            <div class="package-img">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
                ${p.badge ? `<span class="package-badge">${p.badge}</span>` : ''}
            </div>
            <div class="package-content">
                <h3 class="package-title">${p.title}</h3>
                <div class="package-price">${p.price}</div>
                <ul class="package-features">
                    ${p.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                </ul>
                <button class="btn btn-primary btn-full" onclick="openModal()">Book Now</button>
            </div>
        </div>
    `).join('');
}

function renderClasses() {
    const grid = document.getElementById('classesGrid');
    grid.innerHTML = classes.map((c, i) => `
        <div class="class-card" style="animation: fadeInUp 0.5s ease ${i * 0.1}s both">
            <div class="class-icon"><i class="fas ${c.icon}"></i></div>
            <h3>${c.title}</h3>
            <div class="class-time">${c.time}</div>
            <div class="class-instructor">with ${c.instructor}</div>
        </div>
    `).join('');
}

function renderTestimonial() {
    const randomIndex = Math.floor(Math.random() * testimonials.length);
    const t = testimonials[randomIndex];
    document.getElementById('testimonialQuote').textContent = t.quote;
    document.getElementById('testimonialAuthor').textContent = `— ${t.author}`;
}

// Modal Functions
function openModal() {
    document.getElementById('bookingModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('bookingModal').classList.remove('active');
    document.body.style.overflow = '';
}

function handleBooking(e) {
    e.preventDefault();
    alert('Your wellness journey awaits! We\'ll confirm your reservation shortly.');
    closeModal();
    e.target.reset();
}

// Animation Styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Initialize
renderTreatments();
renderPackages();
renderClasses();
renderTestimonial();

console.log('🍃 Serenity Spa loaded!');
