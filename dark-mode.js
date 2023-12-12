// Fungsi untuk menyimpan mode ke local storage
function saveModeToStorage(mode) {
  localStorage.setItem('preferredMode', mode);
}

// Fungsi untuk memuat mode dari local storage
function loadModeFromStorage() {
  return localStorage.getItem('preferredMode');
}

// Fungsi untuk menangani perubahan mode
function handleModeChange(mode) {
  const body = document.body;
  const darkModeSwitch = document.getElementById('darkModeSwitch');
  const whiteModeSwitch = document.getElementById('whiteModeSwitch');

  body.classList.toggle('dark-mode', mode === 'dark');
  darkModeSwitch.style.display = mode === 'dark' ? 'none' : 'inline-block';
  whiteModeSwitch.style.display = mode === 'light' ? 'none' : 'inline-block';

  saveModeToStorage(mode);
}

// Fungsi untuk menoggle antara dark dan light modes
function toggleMode() {
  const currentMode = loadModeFromStorage() || 'light';
  const newMode = currentMode === 'light' ? 'dark' : 'light';
  handleModeChange(newMode);
}

document.addEventListener('DOMContentLoaded', function() {
  // Memuat mode dari local storage atau menggunakan 'light' sebagai default
  const preferredMode = loadModeFromStorage() || 'light';
  handleModeChange(preferredMode);
});

// Menambahkan event listener untuk masing-masing span
document.getElementById('darkModeSwitch').addEventListener('click', toggleMode);
document.getElementById('whiteModeSwitch').addEventListener('click', toggleMode);
