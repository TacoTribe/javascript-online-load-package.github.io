    // Mendapatkan elemen navigasi
    var navigation = document.querySelector('.navigation');

    // Mendapatkan elemen yang membutuhkan margin
    var content = document.querySelector('.content');

    // Mengukur tinggi navigasi
    var navigationHeight = navigation.clientHeight;

    // Menetapkan margin-bottom pada elemen .navigation
    navigation.style.marginBottom = navigationHeight + 'px';
