window.addEventListener('load', () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeUp 0.9s ease forwards';
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    });

    /*Popup for email*/
  function toggleTooltip(el) {
    const tooltip = el.previousElementSibling;
    tooltip.classList.toggle('show');
  }

  // Close tooltip when clicking anywhere else
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.icon-wrapper')) {
      document.querySelectorAll('.tooltip').forEach(t => t.classList.remove('show'));
    }
  });