// Menunggu dokumen HTML sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan semua elemen dengan kelas 'mainCard'
    var mainCards = document.querySelectorAll('.mainCard');

    // Fungsi untuk mengatur tinggi atau lebar 'cardDesc' sesuai dengan 'imgMainCard'
    function setCardDescSize(card) {
        var imgMainCard = card.querySelector('.imgMainCard');
        var cardDesc = card.querySelector('.cardDesc');

        if (imgMainCard && cardDesc) {
            // Mengatur lebar 'cardDesc' sama dengan lebar 'imgMainCard'
            cardDesc.style.width = imgMainCard.offsetWidth + 'px';
            // Jika ingin mengatur tinggi, gunakan baris berikut
            // cardDesc.style.height = imgMainCard.offsetHeight + 'px';
        }
    }

    // Iterasi melalui setiap elemen 'mainCard' dan memanggil fungsi setCardDescSize
    mainCards.forEach(function (card) {
        setCardDescSize(card);
    });
});
