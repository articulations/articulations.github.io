$(document).ready(function () {

    var obj = $('.recommend');
    var offset = obj.offset();
    var topOffset = offset.top;
    var leftOffset = offset.left;
    var marginTop = obj.css("marginTop");
    var marginLeft = obj.css("marginLeft");

    $(window).scroll(function () {
	var scrollTop = $(window).scrollTop();

	if (scrollTop >= topOffset) {

	    obj.css({
		marginTop: 0,
		left: leftOffset,
		top: 0,
		position: 'fixed',
	    });
	}

	if (scrollTop < topOffset) {

	    obj.css({
		marginTop: marginTop,
		left: 0,
		position: 'relative',
	    });
	}
    });


});
