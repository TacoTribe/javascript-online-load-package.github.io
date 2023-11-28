document.addEventListener("DOMContentLoaded", function () {
  var navigation = document.getElementById("stickyNavMobile");
  var content = document.querySelector(".content");
  var navOffset = navigation.offsetTop;

  function updateStickyNavigation() {
    var isSticky = window.pageYOffset > navOffset;

    navigation.classList.toggle("sticky", isSticky);
    content.style.marginTop = isSticky ? navigation.offsetHeight + "px" : 0;
  }

  var debounceTimer;

  function debounce(func, wait) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(func, wait);
  }

  function handleScroll() {
    debounce(updateStickyNavigation, 10);
  }

  function handleResize() {
    navOffset = navigation.offsetTop; // Perbarui offset setelah perubahan ukuran jendela
    updateStickyNavigation();
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleResize);

  updateStickyNavigation();
});
