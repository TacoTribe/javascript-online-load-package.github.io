// Fungsi untuk mengaktifkan bagian berdasarkan fragmen URL
function activateSectionFromHash() {
  // Mendapatkan fragmen URL (hash)
  const hash = window.location.hash;

  // Menyaring hanya jika fragmen dimulai dengan "#section"
  if (hash.startsWith('#section')) {
    // Mendapatkan nomor bagian dari fragmen
    const sectionNumber = parseInt(hash.slice(8));

    // Memastikan nomor bagian valid
    if (!isNaN(sectionNumber) && sectionNumber >= 1 && sectionNumber <= 15) {
      // Menghapus kelas 'activeSection' dari semua bagian
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('activeSection');
      });

      // Menambahkan kelas 'activeSection' ke bagian yang sesuai
      document.getElementById(`section${sectionNumber}`).classList.add('activeSection');

      // Memperbarui nilai currentSection
      currentSection = sectionNumber;
    }
  }
}

// Panggil fungsi untuk mengaktifkan bagian berdasarkan fragmen URL saat halaman dimuat
activateSectionFromHash();

// Menambahkan event listener untuk merespons perubahan dalam fragmen URL
window.addEventListener('hashchange', activateSectionFromHash);
