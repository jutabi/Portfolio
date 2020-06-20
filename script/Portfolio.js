let nav = $("#dot ul li");
let contents = $("#contents > div");

nav.click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    let section = contents.eq(index);
    let offset = section.offset().top;

    $("html,body").animate({
        scrollTop: offset},
        600,
        "easeInOutExpo");
    // $('html, body').animate({
    //     scrollTop: $('.container').offset().top
    // }, 'fast');
});


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= contents.eq(0).offset().top){
        nav.removeClass("active");
        nav.eq(0).addClass("active");
    }
    if(wScroll >= contents.eq(1).offset().top){
        nav.removeClass("active");
        nav.eq(1).addClass("active");
    }
    if(wScroll >= contents.eq(2).offset().top){
        nav.removeClass("active");
        nav.eq(2).addClass("active");
    }
    if(wScroll >= contents.eq(3).offset().top){
        nav.removeClass("active");
        nav.eq(3).addClass("active");
    }
    if(wScroll >= contents.eq(4).offset().top){
        nav.removeClass("active");
        nav.eq(4).addClass("active");
    }
    if(wScroll >= contents.eq(5).offset().top){
        nav.removeClass("active");
        nav.eq(5).addClass("active");
    }
});


$(document).on("ready", function () {
    $("#contents > div").each(function () {
        $(this).on("mousewheel DOMMouseScroll", function (event) {
            let delta = 0;
            let moveTop = null;
            let boxMax = $("#contents > div").length - 1;

            if (event) {
                event = window.event;
            }

            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if(window.opera) {
                    delta = -delta;
                }
            }
            else if (window.detail) {
                delta = -event.detail / 3;
            }

            if (delta < 0) {
                if ($(this).index() < boxMax) {
                    if($(this).next() !== undefined) {
                        moveTop = $(this).next().offset().top;
                    }
                }
                else {
                    // alert("마지막 페이지 입니다");
                    return false;
                }
            }
            else {
                if ($(this).index() > 0) {
                    if ($(this).prev() !== undefined) {
                        moveTop = $(this).prev().offset().top;
                    }
                }
                else {
                    // alert("첫번째 페이지 입니다");
                    return false;
                }
            }
            $("html, body").stop().animate({
                    scrollTop: moveTop + "px"},
                {
                    duration: 600,
                    composite: function () {}
                });
        });
    });
});