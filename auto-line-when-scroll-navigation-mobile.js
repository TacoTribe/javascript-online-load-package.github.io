document.addEventListener("DOMContentLoaded", function () {
  var navigation = document.getElementById("stickyNavMobile");
  var content = document.querySelector(".content");
  var navOffset = navigation.offsetTop;
  var isUpdating = false;

  function updateStickyNavigation() {
    isUpdating = true;

    var isSticky = window.pageYOffset > navOffset;

    navigation.classList.toggle("sticky", isSticky);
    content.style.marginTop = isSticky ? navigation.offsetHeight + "px" : 0;

    isUpdating = false;
  }

  function handleScroll() {
    if (!isUpdating) {
      requestAnimationFrame(updateStickyNavigation);
    }
  }

  window.addEventListener("scroll", handleScroll);

  updateStickyNavigation();
});
