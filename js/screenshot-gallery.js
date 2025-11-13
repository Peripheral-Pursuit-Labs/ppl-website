// Screenshot Gallery Scroll Controls
document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.screenshot-gallery');
  const leftChevron = document.querySelector('.gallery-chevron-left');
  const rightChevron = document.querySelector('.gallery-chevron-right');

  if (!gallery || !leftChevron || !rightChevron) return;

  function updateChevrons() {
    const scrollLeft = gallery.scrollLeft;
    const scrollWidth = gallery.scrollWidth;
    const clientWidth = gallery.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    // Show/hide left chevron
    if (scrollLeft <= 5) {
      leftChevron.classList.remove('visible');
    } else {
      leftChevron.classList.add('visible');
    }

    // Show/hide right chevron
    if (scrollLeft >= maxScroll - 5) {
      rightChevron.classList.remove('visible');
    } else {
      rightChevron.classList.add('visible');
    }
  }

  // Update chevrons on scroll
  gallery.addEventListener('scroll', updateChevrons);

  // Update chevrons on window resize
  window.addEventListener('resize', updateChevrons);

  // Initial check after a short delay to ensure images are loaded
  setTimeout(updateChevrons, 100);

  // Also check after images load
  const images = gallery.querySelectorAll('img');
  let loadedCount = 0;
  images.forEach(img => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.addEventListener('load', () => {
        loadedCount++;
        if (loadedCount === images.length) {
          updateChevrons();
        }
      });
    }
  });
  if (loadedCount === images.length) {
    updateChevrons();
  }

  // Scroll left button
  leftChevron.addEventListener('click', function() {
    const scrollAmount = gallery.clientWidth * 0.8;
    gallery.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  // Scroll right button
  rightChevron.addEventListener('click', function() {
    const scrollAmount = gallery.clientWidth * 0.8;
    gallery.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});
