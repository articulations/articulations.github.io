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

document.addEventListener("DOMContentLoaded", function () {
    ymaps.ready(function () {
        var e, n = ymaps.geolocation,
            t = document.getElementsByClassName("user-city");
        for (e = 0; e < t.length; e++) t[e].innerHTML = " " + n.city
    })
});
