window.onbeforeunload = function() {
    // window.scrollTo(0, 0);
}


$(document).ready(function(){

    // 모바일(햄버거) 메뉴
    $(".mobile-menu-btn").click(function() {
        const mobileMenu = $(".mobile-menu");
        $(this).toggleClass("open");
        mobileMenu.toggleClass("hide show");
    });

    //로고+메뉴 카테고리 스크롤
    var nav = ($("nav").offset().top);
    var header = ($('header').offset().top + $('header').outerHeight());
    $(window).scroll (function() {
        if ($(window).scrollTop() > 1) {
            $("header").css("position","fixed");

          if($(window).scrollTop() + 400 > nav) {
            $("nav").addClass("fixed");
            $("nav").css("top",200)
          }
          else {
            $("nav").removeClass("fixed");
            $("nav").css("top",0)
          }
        }
        else {
            $("header").css("position","");
        }
        
        console.log($(window).scrollTop());
     });

    // 메뉴border
    $("nav a").click(function() {
        // $(this).css("font-weight","bold");
        // $(this).css("font-weight", "");
        $(this).toggleClass("menuBold");
        if($("nav a").css("font-weight")=="bold") {
            $(this).removeClass("menuBold");
        }else {
            $(this).addClass("menuBold");
        }
    })
   
});
    