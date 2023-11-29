let currentSection = 1;

function navigate(direction) {
  document.getElementById(`section${currentSection}`).classList.remove('activeSection');

  if (direction === 'back') {
    currentSection = (currentSection - 1) < 1 ? 3 : currentSection - 1;
  } else if (direction === 'next') {
    currentSection = (currentSection + 1) > 3 ? 1 : currentSection + 1;
  }

  document.getElementById(`section${currentSection}`).classList.add('activeSection');
}
