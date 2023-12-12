function saveModeToStorage(mode) {
  localStorage.setItem('preferredMode', mode);
}

function loadModeFromStorage() {
  return localStorage.getItem('preferredMode') || 'dark';
}

function applyMode(mode) {
  const body = document.body;
  const darkModeSwitch = document.getElementById('darkModeSwitch');
  const whiteModeSwitch = document.getElementById('whiteModeSwitch');

  if (mode === 'dark') {
    body.classList.add('dark-mode');
    darkModeSwitch.style.display = 'none';
    whiteModeSwitch.style.display = 'inline-block';
  } else {
    body.classList.remove('dark-mode');
    darkModeSwitch.style.display = 'inline-block';
    whiteModeSwitch.style.display = 'none';
  }

  saveModeToStorage(mode);
}

function toggleMode() {
  const body = document.body;
  const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newMode = currentMode === 'dark' ? 'light' : 'dark';
  applyMode(newMode);
}

document.addEventListener('DOMContentLoaded', function() {
  const preferredMode = loadModeFromStorage();
  applyMode(preferredMode);
});

document.getElementById('darkModeSwitch').addEventListener('click', toggleMode);
document.getElementById('whiteModeSwitch').addEventListener('click', toggleMode);
