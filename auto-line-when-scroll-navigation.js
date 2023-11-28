document.addEventListener("DOMContentLoaded", function () {
  var navigation = document.getElementById("stickyNav");
  var navOffset = navigation.offsetTop;

  function handleScroll() {
    if (window.pageYOffset > navOffset) {
      navigation.classList.add("sticky");
    } else {
      navigation.classList.remove("sticky");
    }

    var content = document.querySelector(".content");
    content.style.marginTop = navigation.classList.contains("sticky") ? navigation.offsetHeight + "px" : 0;
  }

  window.addEventListener("scroll", handleScroll);
});
