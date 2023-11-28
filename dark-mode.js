  function toggleMode(mode) {
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
  }

    document.addEventListener('DOMContentLoaded', function() {
    toggleMode('light'); 
    });
