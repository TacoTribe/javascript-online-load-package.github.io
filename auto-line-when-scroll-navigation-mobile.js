document.addEventListener("DOMContentLoaded", function () {
  const navigation = document.getElementById("stickyNavMobile");
  const content = document.querySelector(".content");
  const navOffset = navigation.offsetTop;

  function updateStickyNavigation() {
    const isSticky = window.scrollY > navOffset;

    navigation.classList.toggle("sticky", isSticky);
    content.style.marginTop = isSticky ? `${navigation.offsetHeight}px` : 0;
  }

  function handleScroll() {
    updateStickyNavigation();
  }

  window.addEventListener("scroll", handleScroll);

  updateStickyNavigation();
});
