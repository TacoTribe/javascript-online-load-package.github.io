document.addEventListener("DOMContentLoaded", function () {
  var navigation = document.getElementById("stickyNavMobile");
  var content = document.querySelector(".content");
  var navOffset = navigation.offsetTop;

  function updateStickyNavigation() {
    var isSticky = window.pageYOffset > navOffset;

    navigation.classList.toggle("sticky", isSticky);
    content.style.marginTop = isSticky ? navigation.offsetHeight + "px" : 0;
  }

  function handleScroll() {
    updateStickyNavigation();
  }

  window.addEventListener("scroll", handleScroll);

  updateStickyNavigation();
});
