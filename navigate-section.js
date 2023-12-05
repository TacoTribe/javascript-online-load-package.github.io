let currentSection = 1;

function navigate(direction, targetSection) {
  const sectionElement = document.getElementById(`section${currentSection}`);
  sectionElement.classList.remove('activeSection');

  switch (direction) {
    case 'back':
      currentSection = Math.max(1, currentSection - 1);
      break;
    case 'next':
      currentSection = Math.min(15, currentSection + 1);
      break;
    case 'goto':
      currentSection = targetSection;
      break;
    default:
      break;
  }

  const newSectionElement = document.getElementById(`section${currentSection}`);
  newSectionElement.classList.add('activeSection');
}

function handleLinkClick(event) {
  event.preventDefault();
  const targetSection = parseInt(this.getAttribute('href').replace('#section', ''));
  navigate('goto', targetSection);
}

document.addEventListener('DOMContentLoaded', function () {
  // Add event listener to each navigation link
  document.querySelectorAll('.subnavigasiLinks').forEach(function (link) {
    link.addEventListener('click', handleLinkClick);
  });

  // Check if there is a section ID in the URL and navigate to that section
  const urlHash = window.location.hash;
  if (urlHash && urlHash.startsWith('#section')) {
    const targetSection = parseInt(urlHash.replace('#section', ''));
    navigate('goto', targetSection);
  }
});
