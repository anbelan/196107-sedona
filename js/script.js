$(function() {
	/* логика показа скрытия формы */
    $('.popup').hide();
    $('.search-form-btn').click(function(){
    	$('.popup').fadeIn();
    	return false;
    })
    $('.popup-close').click(function(){
    	$('.popup').fadeOut();
    	return false;
    })
    /* валидация формы */
    $('.popup form').validate({
        rules: {
            "checkin-date": "required",
            "checkout-date": "required",
            "adults": "required",
            "children": "required"
        },
        messages: {
            "checkin-date": "Это поле обязательно",
            "checkout-date": "Это поле обязательно",
            "adults": "Это поле обязательно",
            "children": "Это поле обязательно"
        }
    })   
});