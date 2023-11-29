document.addEventListener("DOMContentLoaded", function() {
    var imgMainCard = document.querySelector('.imgMainCard');
    var cardDesc = document.querySelector('.cardDesc');

    if (imgMainCard && cardDesc) {
        cardDesc.style.width = imgMainCard.offsetWidth + 'px';
    }
});
