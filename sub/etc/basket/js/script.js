window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

$(document).ready(function() {
    //explain, option hidden
    var header = (($("header").offset().top)+ 180);
    $(window).scroll (function() {
        var height = $(window).scrollTop();
        var lastImg = ($(".lastImg").offset().top - header);

        if (height > lastImg) {
            $(".explain").addClass("on");
            $(".option").addClass("on");
        } else {
            $(".explain").removeClass("on");
            $(".option").removeClass("on");
        }
    });

    // iconHover
    $('.header-icon > a, .w-b-box > .wishlist-box > a, .w-b-box > .basket-box > a').each(function() {
        var nowIcon = $(this).find('img');
        var srcIcon = nowIcon.attr('src');
        var newIcon = srcIcon.substring(0, srcIcon.lastIndexOf('.'));

        $(this).hover(function() {
            $(this).find('img').attr('src', newIcon + '_on.' + /[^.]+$/.exec(srcIcon));
        }, function() {
            $(this).find('img').attr('src', newIcon + '.' + /[^.]+$/.exec(srcIcon));
        });
    });

    //상품상세정보
    $(function() {
        $(".detail > p").hide();
        $(".detail > h3").click(function() {
            $(".detail > p").slideToggle();
        });
    });

    //footer-menu-click
    $(".footer-menu-click").click(function() {
        if (!mql.matches) {
            $(this).siblings().slideToggle(500, "swing");
        }
    });

    
});