let currentSection = 1;

  function navigate(direction) {
    document.getElementById(`section${currentSection}`).classList.remove('activeSection');

    if (direction === 'back') {
      currentSection = Math.max(1, currentSection - 1);
    } else if (direction === 'next') {
      currentSection = Math.min(15, currentSection + 1);
    }

    document.getElementById(`section${currentSection}`).classList.add('activeSection');
  }

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  const sectionParam = getParameterByName('on');
  if (sectionParam) {
    const sectionNumber = parseInt(sectionParam);
    if (!isNaN(sectionNumber) && sectionNumber >= 1 && sectionNumber <= 15) {
      currentSection = sectionNumber;
      navigate();
    }
  }

  document.getElementById(`section${currentSection}`).classList.add('activeSection');
