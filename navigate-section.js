  let currentSection = 1;

  function navigate(direction) {
    document.getElementById(section${currentSection}).classList.remove('activeSection');

    if (direction === 'back') {
      currentSection = Math.max(1, currentSection - 1);
    } else if (direction === 'next') {
      currentSection = Math.min(3, currentSection + 1);
    }

    document.getElementById(section${currentSection}).classList.add('activeSection');
  }
