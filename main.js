const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

/**
  * @param {IntersectionObserver} observer 
*/
function observerCallback(entries, observer) {
  console.log(typeof(entries))
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.replace('animate-fade-out', 'animate-fade-up');
    } else {
      entry.target.classList.replace('animate-fade-up', 'animate-fade-out');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  let isMenuOpen = false;

  const updateMenu = () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.style.opacity = isMenuOpen ? '1' : '0';
    mobileMenu.style.pointerEvents = isMenuOpen ? 'auto' : 'none';

    // Update menu button icon
    menuButton.innerHTML = isMenuOpen
      ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>';
  };

  menuButton.addEventListener('click', updateMenu);

  // Close mobile menu when clicking on links
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) {
        updateMenu();
      }
    });
  });

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const fadeElements = document.querySelectorAll('.animate-fade-up', '.animate-fade-in');
  console.log(fadeElements)
  fadeElements.forEach(element => observer.observe(element));
});
