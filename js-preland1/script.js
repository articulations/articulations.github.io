var popupShow = 1
$('html').mouseleave(function () {
    if (popupShow === 1) {
        popupShow = 0;
        $('.popup').fadeIn();
    }
});
$('.close').click(function () {
    $('.popup').fadeOut();
});

