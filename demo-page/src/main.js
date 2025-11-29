import './style.css'
import { projects } from './data/projects.js'

document.querySelector('#projects-grid').innerHTML = projects.map((project, index) => `
  <div class="project-card" style="animation-delay: ${index * 100}ms">
    <img src="${project.image}" alt="${project.title}" class="card-image" loading="lazy" />
    <div class="card-content">
      <h3 class="card-title">${project.title}</h3>
      <div class="tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <p class="card-description">${project.description}</p>
      <div class="card-actions">
        <a href="${project.demoUrl}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href="${project.githubUrl}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </div>
`).join('')

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
});
