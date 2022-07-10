window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

window.onload = function() {
//     var img = document.querySelector(".grid-item-main-img");
//     var modal = document.getElementById("overlay");
//     var content = document.getElementById("modalContent");

//     img.onclick = function() {
//         overlay.style.display = "block";
//     }

    // const element = document.querySelector(".shoulder1");
    // function hover(element) {
    //     element.setAttribute('src', "./images/shoulder/shoulderBagsBlack02.jpg");
    // }
    // function unhover(element) {
    //     element.setAttribute('src', "./images/shoulder/shoulderBagsBlack02.jpg");

    // }


}




//jQuery
$(document).ready(function(){

    // 모바일(햄버거) 메뉴
    $(".mobile-menu-btn").click(function() {
        const mobileMenu = $(".mobile-menu");
        $(this).toggleClass("open");
        mobileMenu.toggleClass("hide show");
    });

    //로고+메뉴 카테고리 스크롤
    var nav = ($("nav").offset().top);
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
    var navA = $("nav > .gnb > li > a");
    $(navA).click(function() {
        var target = $(this).attr("href");
        $("html").animate({scrollTop:$(target).offset().top}, 1000);

        if(navA.target) {
            $(navA.target).removeClass("menuBold")
            $(this).addClass("menuBold");
        }else {
            $(this).addClass("menuBold");
        }
        navA.target = this;
        return false;
    });

    // imgModal
    const img = $(".container > .grid-main-img");
    $(img).click(function() {
        $(".overlay").show();
        var imgSrc = $(this).children("img").attr("src");
        var imgAlt = $(this).children("img").attr("alt");
        $(".overlay img").attr("src", imgSrc);
        $(".overlay img").attr("alt", imgAlt);
    });

    $(".overlay").click(function(e) {
        if (e.target.className != "overlay") {
            return false;
        } else {
            $(".overlay").hide()
        }
    })

    // imgHover
    $('.grid-item, .img-box > li > a').each(function() {
        var nowImg = $(this).find('img');
        var srcName = nowImg.attr('src');
        var newSrc = srcName.substring(0, srcName.lastIndexOf('.'));

        $(this).hover(function() {
            $(this).find('img').attr('src', newSrc + '_on.' + /[^.]+$/.exec(srcName));}, function() {
            $(this).find('img').attr('src', newSrc + '.' + /[^.]+$/.exec(srcName));
        });
    });

    //iconHover
    $('.header-icon > a').each(function() {
        var nowIcon = $(this).find('img');
        var srcIcon = nowIcon.attr('src');
        var newIcon = srcIcon.substring(0, srcIcon.lastIndexOf('.'));

        $(this).hover(function() {
            $(this).find('img').attr('src', newIcon + '_on.' + /[^.]+$/.exec(srcIcon));
            $(this).find("img").css("width", "25px");
        }, function() {
            $(this).find('img').attr('src', newIcon + '.' + /[^.]+$/.exec(srcIcon));
            $(this).find("img").css("width", "");

        });
    });
});
    