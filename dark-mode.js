function toggleMode(mode) {
  const body = document.body;
  const darkModeSwitch = document.getElementById('darkModeSwitch');
  const whiteModeSwitch = document.getElementById('whiteModeSwitch');

  if (mode === 'dark') {
    body.classList.add('dark-mode');
    darkModeSwitch.style.display = 'none';
    whiteModeSwitch.style.display = 'inline-block';
  } else if (mode === 'light') {
    body.classList.remove('dark-mode');
    darkModeSwitch.style.display = 'inline-block';
    whiteModeSwitch.style.display = 'none';
  } else if (mode === 'toggle') {
    // Toggle between dark and light modes
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      darkModeSwitch.style.display = 'inline-block';
      whiteModeSwitch.style.display = 'none';
    } else {
      body.classList.add('dark-mode');
      darkModeSwitch.style.display = 'none';
      whiteModeSwitch.style.display = 'inline-block';
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  toggleMode('light');
});

// Tambahkan event listener untuk kedua span dengan fungsi yang sama
document.getElementById('darkModeSwitch').addEventListener('click', function (event) {
  toggleMode('toggle');
  event.stopPropagation(); // Menghentikan propagasi agar klik tidak mencapai elemen a
});

document.getElementById('whiteModeSwitch').addEventListener('click', function (event) {
  toggleMode('toggle');
  event.stopPropagation(); // Menghentikan propagasi agar klik tidak mencapai elemen a
});
