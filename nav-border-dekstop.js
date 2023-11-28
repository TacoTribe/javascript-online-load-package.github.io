    // Mendapatkan elemen section
    var section = document.getElementById("stickyNav");

    // Menambahkan event listener untuk mendeteksi scroll
    window.addEventListener("scroll", function() {
      // Mendapatkan posisi scroll
      var scrollPosition = window.scrollY;

      // Menentukan offset yang diinginkan (50px dalam hal ini)
      var offset = 50;

      // Memeriksa apakah posisi scroll melebihi offset
      if (scrollPosition > offset) {
        // Jika iya, tambahkan class with-border pada elemen section
        section.classList.add("with-border");
      } else {
        // Jika tidak, hilangkan class with-border pada elemen section
        section.classList.remove("with-border");
      }
    });
