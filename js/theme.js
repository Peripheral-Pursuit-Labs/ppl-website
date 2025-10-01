// Theme Toggle Functionality
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const THEME_KEY = 'ppl-theme';

  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'light') {
    body.classList.remove('dark-mode');
  } else {
    // Default to dark mode
    body.classList.add('dark-mode');
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    // Save preference to localStorage
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, currentTheme);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
})();
