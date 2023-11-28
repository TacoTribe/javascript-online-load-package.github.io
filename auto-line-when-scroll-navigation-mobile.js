  document.addEventListener("DOMContentLoaded", function () {
    var navigation = document.getElementById("stickyNavMobile");
    var content = document.querySelector(".content");
    var navOffset = navigation.offsetTop;

    function updateStickyNavigation() {
      var isSticky = window.pageYOffset > navOffset;

      if (isSticky) {
        navigation.classList.add("sticky");
        content.style.marginTop = navigation.offsetHeight + "px";
      } else {
        navigation.classList.remove("sticky");
        content.style.marginTop = 0;
      }
    }

    function handleScroll() {
      updateStickyNavigation();
    }

    window.addEventListener("scroll", handleScroll);

    updateStickyNavigation();
  });
