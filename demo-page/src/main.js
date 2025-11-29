import './style.css'
import { projects } from './data/projects.js'

// Set current year dynamically
document.getElementById('current-year').textContent = new Date().getFullYear();

// Update project count in hero stats
document.getElementById('project-count').textContent = projects.length;

// Render projects with stagger animation
const projectsGrid = document.querySelector('#projects-grid');

projects.forEach((project, index) => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.style.animationDelay = `${index * 150}ms`;

  card.innerHTML = `
    <div class="card-image-container">
      <img src="${project.image}" alt="${project.title}" class="card-image" loading="lazy" />
      <div class="card-overlay">
        <div class="card-actions">
          <a href="${project.demoUrl}" class="card-btn btn-primary" ${project.demoUrl === '#' ? '' : 'target="_blank" rel="noopener noreferrer"'}>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            <span>View Demo</span>
          </a>
        </div>
      </div>
    </div>
    <div class="card-content">
      <h3 class="card-title">${project.title}</h3>
      <div class="tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <p class="card-description">${project.description}</p>
    </div>
  `;

  projectsGrid.appendChild(card);
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');

  // Add ripple effect animation
  themeToggle.style.transform = 'scale(0.95)';
  setTimeout(() => {
    themeToggle.style.transform = '';
  }, 150);
});

// Scroll-based animations for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {
  observer.observe(card);
});
