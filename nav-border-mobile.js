    // Mendapatkan elemen section untuk mobile
    var sectionMobile = document.getElementById("stickyNavMobile");

    // Menambahkan event listener untuk mendeteksi scroll
    window.addEventListener("scroll", function() {
      // Mendapatkan posisi scroll
      var scrollPosition = window.scrollY;

      // Menentukan offset yang diinginkan (50px dalam hal ini)
      var offset = 50;

      // Memeriksa apakah posisi scroll melebihi offset untuk mobile
      if (scrollPosition > offset) {
        // Jika iya, tambahkan class with-border pada elemen section mobile
        sectionMobile.classList.add("with-border");
      } else {
        // Jika tidak, hilangkan class with-border pada elemen section mobile
        sectionMobile.classList.remove("with-border");
      }

      // Mendapatkan elemen section untuk desktop
      var sectionDesktop = document.getElementById("stickyNav");

      // Memeriksa apakah posisi scroll melebihi offset untuk desktop
      if (scrollPosition > offset) {
        // Jika iya, tambahkan class with-border pada elemen section desktop
        sectionDesktop.classList.add("with-border");
      } else {
        // Jika tidak, hilangkan class with-border pada elemen section desktop
        sectionDesktop.classList.remove("with-border");
      }
    });
