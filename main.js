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
});

// Parallax effect
document.addEventListener('DOMContentLoaded', () => {
  const parallaxElements = document.querySelectorAll('.parallax');

  const handleParallax = () => {
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;

      const limit = rect.top + rect.height;

      if (rect.top <= window.innerHeight && limit >= 0) {
        const yOffset = (scrolled * speed) * -1;
        element.style.transform = `translate3d(0, ${yOffset}px, 0)`;
      }
    });
  };

  window.addEventListener('scroll', handleParallax);
  handleParallax(); // Initial position

  var swiper = new Swiper(".centered-slide-carousel", {
    centeredSlides: true,
    paginationClickable: true,
    loop: true,
    spaceBetween: 30,
    slideToClickedSlide: true,
    pagination: {
      el: ".centered-slide-carousel .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1920: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1028: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      990: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });
});
