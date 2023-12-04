  let currentSection = 1;

  function navigate(direction, targetSection) {
    document.getElementById(`section${currentSection}`).classList.remove('activeSection');

    if (direction === 'back') {
      currentSection = Math.max(1, currentSection - 1);
    } else if (direction === 'next') {
      currentSection = Math.min(15, currentSection + 1);
    } else {
      currentSection = targetSection;
    }

    document.getElementById(`section${currentSection}`).classList.add('activeSection');
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to each navigation link
    document.querySelectorAll('.subnavigasiLinks').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSection = parseInt(this.getAttribute('href').replace('#section', ''));
        navigate('goto', targetSection);
      });
    });
  });
