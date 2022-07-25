window.onload = function() {
    // 메인 이미지 커지게
    const mainimg = document.querySelectorAll(".main-imgs img");
    for (let i = 0; i < mainimg.length; i++) {
        mainimg[i].addEventListener('mouseover', zoomIn);
        mainimg[i].addEventListener('mouseout', zoomOut);
    };

    function zoomIn(e) {
        e.currentTarget.style.transform = "scale(1.2)";
        e.currentTarget.style.zIndex = 1;
        e.currentTarget.style.transition = "all 0.5s";
    };
    
    function zoomOut(e) {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.zIndex = 0;
        e.currentTarget.style.transition = "all 0.5s";
    };

    // top 버튼
    let top = document.getElementById("top");
    top.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: "smooth"});
    });
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 700) {
            top.style.opacity = 1;
            top.style.transition = "0.3s";
        } else {
            top.style.opacity = 0;
            top.style.transition = "0.3s";
        }
    });
}

$(function() {
    // 퀵메뉴
    var gnbA = $("#gnb > li > a");
    $("#gnb").css("top", $(window).height() / 2 - $("#gnb").height() / 2 + "px");

    $(window).scroll(function() {
        var t = $(this).scrollTop() + ($(this).height() / 2 - $("#gnb").height() / 2);
        $("#gnb").stop().animate({top:t}, 300);
    });

    gnbA.click(function() {
        var target = $(this).attr("href"); 
        $("html").animate({scrollTop:$(target).offset().top}, 1000);

         
        if(gnbA.target) {
            $(gnbA.target).removeClass("on");
            $(this).addClass("on");
        } else {
            $(this).addClass("on");
        }
        gnbA.target = this;
        return false;
    });

    // 모바일 슬라이드
    setInterval(function() {
        $(".slide-m").animate({left:"-100%"}, 700, function() {
            $(".slide-m").append($(".slide-m li:first-child")).css({left:0});
        });
    }, 4000);

    // pc 슬라이드
    $(".prev").click(function() {
        $(".slide-pc").prepend($(".slide-pc li:last-child")).css({left:"-100%"}).animate({left:0}, 500);
    });
    
    $(".next").click(function() {
        $(".slide-pc").animate({left:"-100%"}, 500, function() {
            $(".slide-pc").append($(".slide-pc li:first-child")).css({left:0});
        });
    });
    
    setInterval(function() {
        $(".slide-pc").animate({left:"-100%"}, 700, function() {
            $(".slide-pc").append($(".slide-pc li:first-child")).css({left:0});
        });
    }, 4000);

    // 푸터 메뉴
    $(".footer-menu-click").click(function() {
        if (!mql.matches) {
            $(this).siblings().slideToggle(500, "swing");
        }
    });

    // modal
    $(".modal-item").click(function(e) {
        e.preventDefault();
        $(".modal").fadeIn();
        $("body").css("overflow", "hidden");
        let imgSrc = $(this).children().attr("src");
        $(".modal-content img").attr("src", imgSrc);
    });
    
    $(".close").click(function() {
        $(".modal").fadeOut();
        $("body").css("overflow", "scroll");
    });
    
    $(window).keyup(function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
    
        if(key == 27) {
            $(".modal").fadeOut();
            $("body").css("overflow", "scroll");
        }
    });
    
    $(".modal").click(function() {
        $(this).fadeOut();
        $("body").css("overflow", "scroll");
    });

    // 페이지 스크롤
    let scrollEvent = false;
    let count = 0;
    const mql = window.matchMedia("screen and (min-width: 1024px)");

    if (mql.matches) {
        $("html, body").on("mousewheel", function(e) {
            e.preventDefault();
            let m = e.originalEvent.wheelDelta;
            let sb = $(window).innerHeight();
    
            if(m > 1 && scrollEvent == false && count >= 1) {
                console.log(count);
                scrollEvent = true;
                count--;
                $("html, body").stop().animate({scrollTop:sb*count}, {duration:1000, complete: function() {
                    scrollEvent = false;}
                });
            } else if (m < 1 && scrollEvent == false && count < 7) {
                console.log(count);
                scrollEvent = true;
                count++;
                $("html, body").stop().animate({scrollTop:sb*count}, {duration:1000, complete: function() {
                    scrollEvent = false;}
                });
            }
        });
    }
});