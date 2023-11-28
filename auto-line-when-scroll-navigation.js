  document.addEventListener("DOMContentLoaded", function () {
    // Sticky Nav for Desktop
    var navigationDesktop = document.getElementById("stickyNav");
    var contentDesktop = document.querySelector(".content");
    var navOffsetDesktop = navigationDesktop.offsetTop;

    // Sticky Nav for Mobile
    var navigationMobile = document.getElementById("stickyNavMobile");
    var contentMobile = document.querySelector(".content");
    var navOffsetMobile = navigationMobile.offsetTop;

    function updateStickyNavigation(navigation, content, navOffset) {
      var isSticky = window.pageYOffset > navOffset;

      navigation.classList.toggle("sticky", isSticky);
      content.style.marginTop = isSticky ? navigation.offsetHeight + "px" : 0;
    }

    function handleScroll() {
      updateStickyNavigation(navigationDesktop, contentDesktop, navOffsetDesktop);
      updateStickyNavigation(navigationMobile, contentMobile, navOffsetMobile);
    }

    window.addEventListener("scroll", handleScroll);

    updateStickyNavigation(navigationDesktop, contentDesktop, navOffsetDesktop);
    updateStickyNavigation(navigationMobile, contentMobile, navOffsetMobile);
  });
