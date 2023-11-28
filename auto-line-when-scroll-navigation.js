  document.addEventListener("DOMContentLoaded", function () {
    // Sticky navigation for desktop
    var navigationDesktop = document.getElementById("stickyNav");
    var contentDesktop = document.querySelector(".content");
    var navOffsetDesktop = navigationDesktop.offsetTop;

    function updateStickyNavigationDesktop() {
      var isStickyDesktop = window.pageYOffset > navOffsetDesktop;

      navigationDesktop.classList.toggle("sticky", isStickyDesktop);
      contentDesktop.style.marginTop = isStickyDesktop ? navigationDesktop.offsetHeight + "px" : 0;
    }

    function handleScrollDesktop() {
      updateStickyNavigationDesktop();
    }

    window.addEventListener("scroll", handleScrollDesktop);

    updateStickyNavigationDesktop();

    // Sticky navigation for mobile
    var navigationMobile = document.getElementById("stickyNavMobile");
    var contentMobile = document.querySelector(".content");
    var navOffsetMobile = navigationMobile.offsetTop;

    function updateStickyNavigationMobile() {
      var isStickyMobile = window.pageYOffset > navOffsetMobile;

      navigationMobile.classList.toggle("sticky", isStickyMobile);
      contentMobile.style.marginTop = isStickyMobile ? navigationMobile.offsetHeight + "px" : 0;
    }

    function handleScrollMobile() {
      updateStickyNavigationMobile();
    }

    window.addEventListener("scroll", handleScrollMobile);

    updateStickyNavigationMobile();
  });
