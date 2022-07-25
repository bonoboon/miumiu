$(".footer-menu-click").click(function() {
    if (!mql.matches) {
        $(this).siblings().slideToggle(500, "swing");
    }
});