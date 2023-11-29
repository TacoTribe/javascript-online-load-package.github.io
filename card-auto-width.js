document.addEventListener("DOMContentLoaded", function () {
    var mainCards = document.querySelectorAll('.mainCard');

    function setCardDescSize(card) {
        var imgMainCard = card.querySelector('.imgMainCard');
        var cardDesc = card.querySelector('.cardDesc');

        if (imgMainCard && cardDesc) {
            cardDesc.style.width = imgMainCard.offsetWidth + 'px';
        }
    }

    mainCards.forEach(function (card) {
        setCardDescSize(card);
    });
});
