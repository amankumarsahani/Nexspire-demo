// ===== Data =====
const services = [
    { icon: '✂️', title: 'Haircut & Styling', desc: 'Precision cuts and stunning styles tailored to your features', price: 'From $45' },
    { icon: '🎨', title: 'Hair Coloring', desc: 'Vibrant colors, balayage, highlights, and creative techniques', price: 'From $120' },
    { icon: '💄', title: 'Bridal Makeup', desc: 'Flawless bridal looks for your special day', price: 'From $250' },
    { icon: '💅', title: 'Manicure & Pedicure', desc: 'Luxurious nail care with premium products', price: 'From $35' },
    { icon: '🧖', title: 'Facial Treatment', desc: 'Rejuvenating facials for radiant, glowing skin', price: 'From $85' },
    { icon: '💆', title: 'Massage Therapy', desc: 'Relaxing massages to melt away stress', price: 'From $75' },
    { icon: '💇', title: 'Hair Extensions', desc: 'Premium quality extensions for length and volume', price: 'From $350' },
    { icon: '✨', title: 'Keratin Treatment', desc: 'Smoothing treatment for frizz-free, silky hair', price: 'From $200' }
];

const gallery = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=80',
    'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80',
    'https://images.unsplash.com/photo-1522335108757-6eee8f2fdb41?w=400&q=80',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=80'
];

const team = [
    { name: 'Sophie Martinez', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80', specialty: 'Color Specialist' },
    { name: 'Emma Thompson', role: 'Senior Stylist', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80', specialty: 'Bridal Hair' },
    { name: 'Mia Rodriguez', role: 'Color Specialist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', specialty: 'Balayage Expert' },
    { name: 'Olivia Chen', role: 'Makeup Artist', image: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=400&q=80', specialty: 'Bridal Makeup' },
    { name: 'Isabella Rose', role: 'Nail Technician', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80', specialty: 'Nail Art' },
    { name: 'Ava Daniels', role: 'Hair Stylist', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80', specialty: 'Extensions' }
];

const reviews = [
    { name: 'Sarah K.', rating: 5, text: 'Amazing experience! Sophie gave me the best haircut I\'ve ever had. The salon is beautiful and everyone is so friendly.', service: 'Haircut & Color' },
    { name: 'Jessica M.', rating: 5, text: 'Emma did my bridal makeup and I felt like a princess! She\'s incredibly talented and made my day perfect.', service: 'Bridal Makeup' },
    { name: 'Rachel P.', rating: 5, text: 'Mia is a color genius! My balayage looks absolutely stunning. I get compliments everywhere I go!', service: 'Hair Coloring' },
    { name: 'Amanda L.', rating: 5, text: 'The manicure and pedicure was so relaxing. Isabella did beautiful nail art and the products they use are top quality!', service: 'Manicure & Pedicure' },
    { name: 'Nicole T.', rating: 5, text: 'Best salon in town! Clean, modern, and the staff really knows what they\'re doing. Highly recommend!', service: 'Facial Treatment' },
    { name: 'Michelle D.', rating: 5, text: 'The keratin treatment transformed my hair! It\'s so smooth and shiny now. Worth every penny!', service: 'Keratin Treatment' },
    { name: 'Lauren W.', rating: 5, text: 'Ava did my hair extensions and they look so natural! I couldn\'t be happier with the result.', service: 'Hair Extensions' },
    { name: 'Emily R.', rating: 5, text: 'This salon is a hidden gem! Professional, welcoming atmosphere and amazing results every time.', service: 'Hair Styling' }
];

// ===== DOM Elements =====
const servicesGrid = document.getElementById('servicesGrid');
const galleryGrid = document.getElementById('galleryGrid');
const teamGrid = document.getElementById('teamGrid');
const reviewsGrid = document.getElementById('reviewsGrid');
const bookingModal = document.getElementById('bookingModal');

// ===== Render Functions =====
function renderServices() {
    servicesGrid.innerHTML = services.map((service, i) => `
        <div class="service-card" style="animation: fadeIn 0.6s ease ${i * 0.1}s backwards">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
            <div class="service-price">${service.price}</div>
        </div>
    `).join('');
}

function renderGallery() {
    galleryGrid.innerHTML = gallery.map((img, i) => `
        <div class="gallery-item" style="animation: fadeIn 0.6s ease ${i * 0.08}s backwards">
            <img src="${img}" alt="Gallery ${i + 1}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
    `).join('');
}

function renderTeam() {
    teamGrid.innerHTML = team.map((member, i) => `
        <div class="team-card" style="animation: fadeIn 0.6s ease ${i * 0.1}s backwards">
            <div class="team-image">
                <img src="${member.image}" alt="${member.name}" loading="lazy">
                <div class="team-social">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="team-info">
                <h3>${member.name}</h3>
                <div class="team-role">${member.role}</div>
                <div class="team-specialty"><i class="fas fa-star"></i> ${member.specialty}</div>
            </div>
        </div>
    `).join('');
}

// ===== Render Reviews =====
function renderReviews() {
    if (!reviewsGrid) return;
    reviewsGrid.innerHTML = reviews.map((review, i) => `
        <div class="review-card" style="animation: fadeIn 0.6s ease ${i * 0.1}s backwards">
            <div class="review-header">
                <div class="review-author">
                    <div class="author-avatar">${review.name.charAt(0)}</div>
                    <div>
                        <h4>${review.name}</h4>
                        <div class="review-service">${review.service}</div>
                    </div>
                </div>
                <div class="review-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
                </div>
            </div>
            <p class="review-text">${review.text}</p>
        </div>
    `).join('');
}

// ===== Modal Functions =====
function openBookingModal() {
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
}

bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) closeBookingModal();
});

// ===== Form Handler =====
function handleBooking(e) {
    e.preventDefault();
    showNotification('Booking confirmed! We\'ll send you a confirmation email shortly.');
    closeBookingModal();
    e.target.reset();
}

// ===== Notification =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        padding: 18px 32px;
        background: linear-gradient(135deg, #C88EA7 0%, #FFB5C5 100%);
        color: white;
        border-radius: 16px;
        font-weight: 600;
        font-size: 15px;
        z-index: 3000;
        animation: slideIn 0.4s ease, slideOut 0.4s ease 3s forwards;
        box-shadow: 0 10px 40px rgba(200, 142, 167, 0.4);
        display: flex;
        align-items: center;
        gap: 12px;
    `;
    notification.innerHTML = `<i class="fas fa-check-circle"></i>${message}`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3500);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
`;
document.head.appendChild(style);

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== Initialize =====
renderServices();
renderGallery();
renderTeam();
renderReviews();

console.log('💄 Glamour Salon loaded successfully!');
