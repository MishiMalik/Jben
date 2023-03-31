$(window).scroll(function() {
    if ( $(window).scrollTop() >= 100 ) {
        $('.logo-div').css('margin-left', '0');
        $('.navbar-top').css('border-bottom', '1px solid rgb(218, 218, 218)');
    } else {
        $('.logo-div').css('margin-left', '-130px');
        $('.navbar-top').css('border-bottom', '1px solid transparent');
    }
});