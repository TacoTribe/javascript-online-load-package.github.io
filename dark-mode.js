// Fungsi untuk menyimpan mode ke local storage
function saveModeToStorage(mode) {
  localStorage.setItem('preferredMode', mode);
}

// Fungsi untuk memuat mode dari local storage
function loadModeFromStorage() {
  return localStorage.getItem('preferredMode');
}

function toggleMode(mode) {
  const body = document.body;
  const darkModeSwitch = document.getElementById('darkModeSwitch');
  const whiteModeSwitch = document.getElementById('whiteModeSwitch');

  if (mode === 'dark') {
    body.classList.add('dark-mode');
    darkModeSwitch.style.display = 'none';
    whiteModeSwitch.style.display = 'inline-block';
    saveModeToStorage('dark');
  } else if (mode === 'light') {
    body.classList.remove('dark-mode');
    darkModeSwitch.style.display = 'inline-block';
    whiteModeSwitch.style.display = 'none';
    saveModeToStorage('light');
  } else if (mode === 'toggle') {
    // Toggle between dark and light modes
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      darkModeSwitch.style.display = 'inline-block';
      whiteModeSwitch.style.display = 'none';
      saveModeToStorage('light');
    } else {
      body.classList.add('dark-mode');
      darkModeSwitch.style.display = 'none';
      whiteModeSwitch.style.display = 'inline-block';
      saveModeToStorage('dark');
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Memuat mode dari local storage atau menggunakan 'light' sebagai default
  const preferredMode = loadModeFromStorage() || 'dark';
  toggleMode(preferredMode);
});

// Menambahkan event listener untuk masing-masing span
document.getElementById('darkModeSwitch').addEventListener('click', function() {
  toggleMode('toggle');
});

document.getElementById('whiteModeSwitch').addEventListener('click', function() {
  toggleMode('toggle');
});
