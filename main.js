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

// window.onload = LoadFunction;

// function LoadFunction(){
//     let menu1 = document.getElementById("menu1");
//     let menu2 = document.getElementById("menu2");

//     menu1.style.display = "none";
//     menu2.style.display = "none";
    
//     let menuClick = document.getElementById("menu-click");
//     menuClick.onclick = ClickFunction;
// }

// function ClickFunction(){
//     menu1.style.display = "block";
//     menu2.style.display = "block";
//     menuClick.onclick = ClickFunction2;
// }

// function ClickFunction2(){
//     menu1.style.display = "none";
//     menu2.style.display = "none";
// }

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