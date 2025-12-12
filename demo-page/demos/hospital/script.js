// Hospital Data
const services = [
    { icon: 'fa-heart', title: 'Cardiology', desc: 'Advanced heart care with latest diagnostic and treatment technologies.', color: 'linear-gradient(135deg, #FF3366 0%, #FF6B9D 100%)' },
    { icon: 'fa-brain', title: 'Neurology', desc: 'Expert neurological care for brain and nervous system disorders.', color: 'linear-gradient(135deg, #00D9FF 0%, #0088FF 100%)' },
    { icon: 'fa-baby', title: 'Pediatrics', desc: 'Comprehensive healthcare for infants, children, and adolescents.', color: 'linear-gradient(135deg, #FFB800 0%, #FFA000 100%)' },
    { icon: 'fa-bone', title: 'Orthopedics', desc: 'Treatment of musculoskeletal system disorders and injuries.', color: 'linear-gradient(135deg, #00E676 0%, #00C853 100%)' },
    { icon: 'fa-lungs', title: 'Pulmonology', desc: 'Respiratory care for lung diseases and breathing disorders.', color: 'linear-gradient(135deg, #7C4DFF 0%, #651FFF 100%)' },
    { icon: 'fa-eye', title: 'Ophthalmology', desc: 'Complete eye care from routine exams to advanced surgery.', color: 'linear-gradient(135deg, #FF9100 0%, #FF6D00 100%)' },
    { icon: 'fa-tooth', title: 'Dentistry', desc: 'Comprehensive dental care and cosmetic dentistry services.', color: 'linear-gradient(135deg, #00BFA5 0%, #00897B 100%)' },
    { icon: 'fa-dna', title: 'Oncology', desc: 'Cancer treatment with latest therapies and compassionate care.', color: 'linear-gradient(135deg, #FF3366 0%, #E91E63 100%)' }
];

const doctors = [
    { name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', exp: '15+ years', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80', education: 'MD, Harvard Medical School', rating: 4.9 },
    { name: 'Dr. Michael Chen', specialty: 'Neurologist', exp: '12+ years', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80', education: 'MD, Johns Hopkins', rating: 4.8 },
    { name: 'Dr. Emily Williams', specialty: 'Pediatrician', exp: '10+ years', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80', education: 'MD, Stanford Medical', rating: 5.0 },
    { name: 'Dr. James Wilson', specialty: 'Orthopedic Surgeon', exp: '18+ years', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80', education: 'MD, Mayo Clinic', rating: 4.9 },
    { name: 'Dr. Lisa Anderson', specialty: 'Oncologist', exp: '14+ years', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80', education: 'MD, Yale School of Medicine', rating: 4.9 },
    { name: 'Dr. Robert Martinez', specialty: 'Emergency Medicine', exp: '16+ years', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80', education: 'MD, Columbia Medical', rating: 4.8 }
];

const departments = {
    emergency: { name: 'Emergency Department', desc: '24/7 emergency care with state-of-the-art trauma center and rapid response team.', beds: 30, facilities: ['Trauma Units', 'Emergency OR', 'Observation Units'] },
    icu: { name: 'Intensive Care Unit', desc: 'Critical care with advanced life support systems and specialized monitoring.', beds: 45, facilities: ['Ventilators', 'Cardiac Monitors', 'Isolation Units'] },
    surgery: { name: 'Surgical Center', desc: 'Modern operating rooms equipped with latest surgical technology.', beds: 12, facilities: ['8 Operating Rooms', 'Robotic Surgery', 'Recovery Units'] },
    maternity: { name: 'Maternity Ward', desc: 'Comprehensive obstetric and neonatal care in a comfortable environment.', beds: 25, facilities: ['Delivery Rooms', 'NICU', 'Lactation Support'] },
    radiology: { name: 'Radiology Suite', desc: 'Advanced imaging services including MRI, CT, X-ray, and ultrasound.', beds: 0, facilities: ['3T MRI', '128-Slice CT', 'Digital X-Ray'] }
};

const testimonials = [
    { name: 'John Smith', text: 'The care I received was exceptional. The staff was professional, caring, and went above and beyond.', rating: 5 },
    { name: 'Mary Johnson', text: 'Outstanding facility with state-of-the-art equipment. I felt safe and well-cared for throughout my stay.', rating: 5 },
    { name: 'David Lee', text: 'From admission to discharge, everything was handled perfectly. Highly recommend this hospital!', rating: 5 }
];

// Render Services
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = services.map((service, i) => `
        <div class="service-card" style="animation: fadeInUp 0.6s ease ${i * 0.1}s both">
            <div class="service-icon" style="background: ${service.color}">
                <i class="fas ${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
        </div>
    `).join('');
}

// Render Doctors
function renderDoctors() {
    const track = document.getElementById('doctorsTrack');
    track.innerHTML = doctors.map((doctor, i) => `
        <div class="doctor-card" style="animation: fadeInUp 0.6s ease ${i * 0.1}s both">
            <div class="doctor-img">
                <img src="${doctor.image}" alt="${doctor.name}">
            </div>
            <div class="doctor-info">
                <div class="doctor-name">${doctor.name}</div>
                <div class="doctor-specialty">${doctor.specialty}</div>
                <div class="doctor-exp">${doctor.exp} experience</div>
                <div class="doctor-education">${doctor.education}</div>
                <div class="doctor-rating">
                    ${'⭐'.repeat(Math.floor(doctor.rating))} ${doctor.rating}
                </div>
            </div>
        </div>
    `).join('');
}

// Render Department Content
function renderDepartment(deptKey) {
    const dept = departments[deptKey];
    const content = document.getElementById('deptContent');
    content.innerHTML = `
        <h3 style="font-size: 2rem; margin-bottom: 1rem;">${dept.name}</h3>
        <p style="color: var(--gray); margin-bottom: 2rem; font-size: 1.125rem;">${dept.desc}</p>
        ${dept.beds > 0 ? `<p style="margin-bottom: 1rem;"><strong>Capacity:</strong> ${dept.beds} beds</p>` : ''}
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 2rem;">
            ${dept.facilities.map(f => `
                <div style="padding: 1rem; background: rgba(0, 217, 255, 0.1); border: 1px solid rgba(0, 217, 255, 0.3); border-radius: 12px;">
                    <i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i>${f}
                </div>
            `).join('')}
        </div>
    `;
}

// Department Tabs
function setupDepartmentTabs() {
    const tabs = document.querySelectorAll('.dept-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderDepartment(tab.dataset.dept);
        });
    });
    renderDepartment('emergency');
}

// Render Testimonials
function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    grid.innerHTML = testimonials.map((t, i) => `
        <div class="testimonial-card" style="animation: fadeInUp 0.6s ease ${i * 0.15}s both">
            <div class="testimonial-header">
                <div class="testimonial-avatar">${t.name.charAt(0)}</div>
                <div>
                    <strong>${t.name}</strong>
                    <div>${'⭐'.repeat(t.rating)}</div>
                </div>
            </div>
            <p class="testimonial-text">"${t.text}"</p>
        </div>
    `).join('');
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString() + (target === 98 ? '%' : '+');
                    }
                };
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Modal Functions
function openAppointmentModal() {
    document.getElementById('appointmentModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAppointmentModal() {
    document.getElementById('appointmentModal').classList.remove('active');
    document.body.style.overflow = '';
}

function handleAppointment(e) {
    e.preventDefault();
    alert('Appointment request submitted! We will contact you shortly.');
    closeAppointmentModal();
    e.target.reset();
}

// Intersection Observer for Animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Initialize
renderServices();
renderDoctors();
setupDepartmentTabs();
renderTestimonials();
animateCounters();

console.log('🏥 MediCare Hospital loaded!');
