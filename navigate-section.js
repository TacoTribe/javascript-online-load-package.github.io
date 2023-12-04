let currentSection = 1;

function navigate(direction) {
  // Menghapus class activeSection dari semua elemen dengan class tersebut
  const activeSections = document.querySelectorAll('.activeSection');
  activeSections.forEach((section) => {
    section.classList.remove('activeSection');
  });

  if (direction === 'back') {
    currentSection = Math.max(1, currentSection - 1);
  } else if (direction === 'next') {
    currentSection = Math.min(15, currentSection + 1);
  }

  // Menambahkan class activeSection pada elemen dengan ID section{currentSection}
  document.getElementById(`section${currentSection}`).classList.add('activeSection');
}

// Memeriksa hash pada URL dan memperbarui currentSection
window.addEventListener('hashchange', function () {
  const hash = window.location.hash;
  const sectionNumber = parseInt(hash.replace('#section', ''), 10);

  if (!isNaN(sectionNumber) && sectionNumber >= 1 && sectionNumber <= 15) {
    currentSection = sectionNumber;
    navigate('next'); // Memastikan bahwa class activeSection diperbarui
  }
});

// Memanggil fungsi navigate pada saat halaman pertama kali dimuat
window.addEventListener('load', function () {
  const hash = window.location.hash;
  const sectionNumber = parseInt(hash.replace('#section', ''), 10);

  if (!isNaN(sectionNumber) && sectionNumber >= 1 && sectionNumber <= 15) {
    currentSection = sectionNumber;
  }

  navigate('next');
});
