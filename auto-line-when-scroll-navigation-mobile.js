document.addEventListener("DOMContentLoaded", function () {
  var navigation = document.getElementById("stickyNavMobile");
  var content = document.querySelector(".content");
  var navOffset = navigation.offsetTop;

  function updateStickyNavigation() {
    var isSticky = window.pageYOffset > navOffset;

    navigation.classList.toggle("sticky", isSticky);
    content.style.marginTop = isSticky ? navigation.offsetHeight + "px" : 0;
  }

  // Menggunakan fungsi debounce untuk mengurangi frekuensi pemanggilan handleScroll
  var debounceTimer;
  function debounce(func, wait) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(func, wait);
  }

  function handleScroll() {
    debounce(updateStickyNavigation, 10);
  }

  // Menggunakan passive:true untuk meningkatkan performa scroll
  window.addEventListener("scroll", handleScroll, { passive: true });

  updateStickyNavigation(); // Pemanggilan awal agar kondisi awal di-handle
});
