const body = document.body;
const darkModeSwitch = document.getElementById('darkModeSwitch');
const whiteModeSwitch = document.getElementById('whiteModeSwitch');

function saveModeToStorage(mode) {
  localStorage.setItem('preferredMode', mode);
}

function loadModeFromStorage() {
  return localStorage.getItem('preferredMode') || 'dark';
}

function applyMode(mode) {
  const isDarkMode = mode === 'dark';

  body.classList.toggle('dark-mode', isDarkMode);
  darkModeSwitch.style.display = isDarkMode ? 'none' : 'inline-block';
  whiteModeSwitch.style.display = isDarkMode ? 'inline-block' : 'none';

  saveModeToStorage(mode);
}

function toggleMode() {
  const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newMode = currentMode === 'dark' ? 'light' : 'dark';
  applyMode(newMode);
}

document.addEventListener('DOMContentLoaded', function() {
  const preferredMode = loadModeFromStorage();
  applyMode(preferredMode);
});

// Use a common parent element or body for event delegation
document.body.addEventListener('click', function(event) {
  if (event.target === darkModeSwitch || event.target === whiteModeSwitch) {
    toggleMode();
  }
});
