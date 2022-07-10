// window.onbeforeunload = function() {
//     window.scrollTo(0, 0);
// }

$(document).ready(function() {

    var header = (($("header").offset().top)+ 180);
    console.log(header);
    $(window).scroll (function() {
        var height = $(window).scrollTop();
        var lastImg = ($(".lastImg").offset().top - header);
        console.log(height);
        console.log(lastImg);
        if (height > lastImg) {
            $(".explain").addClass("on");
            $(".option").addClass("on");
        } else {
            $(".explain").removeClass("on");
            $(".option").removeClass("on");
        }


    })
    
})