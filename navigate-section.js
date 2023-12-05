let currentSection = 1;

function navigateToSection(targetSection) {
  document.getElementById(`section${currentSection}`).classList.remove('activeSection');
  currentSection = targetSection;
  document.getElementById(`section${currentSection}`).classList.add('activeSection');
}

function navigate(direction) {
  document.getElementById(`section${currentSection}`).classList.remove('activeSection');

  if (direction === 'back') {
    currentSection = Math.max(1, currentSection - 1);
  } else if (direction === 'next') {
    currentSection = Math.min(15, currentSection + 1);
  }

  document.getElementById(`section${currentSection}`).classList.add('activeSection');
}

document.addEventListener('DOMContentLoaded', function () {
  // Add event listener to hashchange
  window.addEventListener('hashchange', function () {
    const targetSection = parseInt(window.location.hash.replace('#section', '')) || 1;
    navigateToSection(targetSection);
  });

  // Add event listener to each navigation link
  document.querySelectorAll('.subnavigasiLinks').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetSection = parseInt(this.getAttribute('href').replace('#section', '')) || 1;
      window.location.hash = `section${targetSection}`;
    });
  });

  // Initial navigation based on hash
  const initialTargetSection = parseInt(window.location.hash.replace('#section', '')) || 1;
  navigateToSection(initialTargetSection);
});
