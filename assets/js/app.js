$(window).scroll(function() {
    if ( $(window).scrollTop() >= 100 ) {
        $('.logo-div').css('margin-left', '0');
        $('.navbar-top').css('border-bottom', '1px solid rgb(218, 218, 218)');
    } else {
        $('.logo-div').css('margin-left', '-120px');
        $('.navbar-top').css('border-bottom', '1px solid transparent');
    }
});


$('.owl-carousel').owlCarousel({
    items:4,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2.4,
            nav:false
        },
        1000:{
            items:3.1,
            nav:false,
            loop:true
        }
    }
})



// =======================================navbar
$('.menu-icon').on("click",function(){
    $('.navbar-content').css("left",'0px');
    $('.backdrop').css("display",'block');
    $('.body').css("overflow-y",'hidden');
})

$('.backdrop').on("click",function(){
    $('.navbar-content').css("left",'-300px');
    $('.backdrop').css("display",'none');
    $('.body').css("overflow-y",'scroll');
})