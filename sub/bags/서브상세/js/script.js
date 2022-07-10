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