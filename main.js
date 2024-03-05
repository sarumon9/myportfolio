$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    infinite:true,
    slidesToShow:1,
    slidesToScroll:1,
    prevArrow:'<div class="slick-prev"></div>',
    nextArrow:'<div class="slick-next"></div>',
    dots:true
});



$(document).ready(readyFunction);

function readyFunction(){
    $("#menu1").css("display","none");
    $("#menu2").css("display", "none");
    $("#menu-click").click(clickFunction);
    $(".grid-items img").click(clickFunction1);
    $('.close-btn').click(clickFunction2);
}



function clickFunction(){
    $("#menu1").slideToggle();
    $("#menu2").slideToggle();
}

function clickFunction1(){
    var imgSrc = $(this).attr("src");
    $(".bigimg").children().attr("src", imgSrc);
    $('.modal').fadeIn();
    $('body, html').css('overflow-y', 'hidden');
    return false;
}

function clickFunction2(){
    $(".modal").fadeOut();
    $("body,html").css("overflow-y", "visible");
    return false;
}
