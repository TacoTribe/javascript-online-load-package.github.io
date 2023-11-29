let currentSection = 1;

function navigate(direction) {
  document.getElementById(`section${currentSection}`).classList.remove('activeSection');

  const totalSections = document.querySelectorAll('.section').length;

  if (direction === 'back') {
    currentSection = (currentSection - 1 + totalSections) % totalSections || totalSections;
  } else if (direction === 'next') {
    currentSection = (currentSection % totalSections) + 1;
  }

  document.getElementById(`section${currentSection}`).classList.add('activeSection');
}
