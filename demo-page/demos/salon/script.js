// Glamour Salon Data
const services = [
    { icon: '✂️', title: 'Haircut & Styling', desc: 'Precision cuts tailored to your face shape and lifestyle', price: 'From $65' },
    { icon: '🎨', title: 'Hair Coloring', desc: 'Balayage, highlights, ombre, and creative color techniques', price: 'From $150' },
    { icon: '💄', title: 'Bridal Makeup', desc: 'Flawless looks for your special day with trial included', price: 'From $350' },
    { icon: '💅', title: 'Nail Artistry', desc: 'Manicure, pedicure, gel, and artistic nail designs', price: 'From $45' },
    { icon: '✨', title: 'Facial Glow', desc: 'Rejuvenating treatments for radiant, healthy skin', price: 'From $120' },
    { icon: '💇', title: 'Hair Extensions', desc: 'Premium quality extensions for length and volume', price: 'From $400' }
];

const gallery = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
    'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80',
    'https://images.unsplash.com/photo-1522335108757-6eee8f2fdb41?w=600&q=80',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80'
];

const team = [
    { name: 'Sophie Martinez', role: 'Creative Director', specialty: 'Color & Styling', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80' },
    { name: 'Emma Thompson', role: 'Senior Stylist', specialty: 'Bridal Hair', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80' },
    { name: 'Mia Rodriguez', role: 'Color Specialist', specialty: 'Balayage Expert', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
    { name: 'Olivia Chen', role: 'Makeup Artist', specialty: 'Bridal & Editorial', image: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=400&q=80' }
];

const reviews = [
    { name: 'Sarah K.', service: 'Hair Coloring', text: 'Sophie did the most gorgeous balayage! People keep asking where I got it done. Absolutely love it!', rating: 5 },
    { name: 'Jessica M.', service: 'Bridal Makeup', text: 'Emma made me feel like a princess on my wedding day. The trial was perfect and she nailed the look!', rating: 5 },
    { name: 'Rachel P.', service: 'Haircut', text: 'Best haircut I\'ve ever had. They really listen to what you want and deliver beyond expectations.', rating: 5 }
];

const instaPosts = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&q=80',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&q=80',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80',
    'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80',
    'https://images.unsplash.com/photo-1522335108757-6eee8f2fdb41?w=300&q=80'
];

// Render Functions
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = services.map((s, i) => `
        <div class="service-card" style="animation: fadeInUp 0.6s ease ${i * 0.1}s both">
            <div class="service-icon">${s.icon}</div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <div class="service-price">${s.price}</div>
        </div>
    `).join('');
}

function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = gallery.map((img, i) => `
        <div class="gallery-item" style="animation: fadeIn 0.5s ease ${i * 0.05}s both">
            <img src="${img}" alt="Gallery ${i + 1}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-expand"></i>
            </div>
        </div>
    `).join('');
}

function renderTeam() {
    const grid = document.getElementById('teamGrid');
    grid.innerHTML = team.map((t, i) => `
        <div class="team-card" style="animation: fadeInUp 0.6s ease ${i * 0.15}s both">
            <div class="team-img">
                <img src="${t.image}" alt="${t.name}" loading="lazy">
            </div>
            <div class="team-info">
                <h4>${t.name}</h4>
                <div class="team-role">${t.role}</div>
                <div class="team-specialty">${t.specialty}</div>
            </div>
        </div>
    `).join('');
}

function renderReviews() {
    const slider = document.getElementById('reviewsSlider');
    slider.innerHTML = reviews.map((r, i) => `
        <div class="review-card" style="animation: fadeInUp 0.6s ease ${i * 0.15}s both">
            <div class="review-header">
                <div class="reviewer">
                    <div class="reviewer-avatar">${r.name.charAt(0)}</div>
                    <div>
                        <div class="reviewer-name">${r.name}</div>
                        <div class="reviewer-service">${r.service}</div>
                    </div>
                </div>
                <div class="review-stars">${'★'.repeat(r.rating)}</div>
            </div>
            <p class="review-text">"${r.text}"</p>
        </div>
    `).join('');
}

function renderInsta() {
    const grid = document.getElementById('instaGrid');
    grid.innerHTML = instaPosts.map(img => `
        <div class="insta-item">
            <img src="${img}" alt="Instagram" loading="lazy">
            <div class="insta-overlay">
                <i class="fab fa-instagram"></i>
            </div>
        </div>
    `).join('');
}

// Modal
function openBooking() {
    document.getElementById('bookingModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBooking() {
    document.getElementById('bookingModal').classList.remove('active');
    document.body.style.overflow = '';
}

function handleBooking(e) {
    e.preventDefault();
    alert('Booking confirmed! We\'ll send you a confirmation shortly.');
    closeBooking();
    e.target.reset();
}

// Animation Styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
`;
document.head.appendChild(style);

// Init
renderServices();
renderGallery();
renderTeam();
renderReviews();
renderInsta();

console.log('✨ Glamour Salon loaded!');
