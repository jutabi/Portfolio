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
    if(wScroll >= contents.eq(6).offset().top){
        nav.removeClass("active");
        nav.eq(6).addClass("active");
    }
    if(wScroll >= contents.eq(7).offset().top){
        nav.removeClass("active");
        nav.eq(7).addClass("active");
    }
    if(wScroll >= contents.eq(8).offset().top){
        nav.removeClass("active");
        nav.eq(8).addClass("active");
    }
    if(wScroll >= contents.eq(9).offset().top){
        nav.removeClass("active");
        nav.eq(9).addClass("active");
    }
});


$(document).on("ready", function () {
    $("#contents > div").each(function () {
        // mousewheel: 크롬 익스 사파리 오페라
        // DOMMouseScroll: 파이어폭스
        // 두개의 이벤트를 동시에 수행하는 on을 사용
        $(this).on("mousewheel DOMMouseScroll", function (event) {
            let delta = 0;
            let moveTop = null;
            let boxMax = $("#contents > div").length - 1;

            if (event) {
                event = window.event;
            }

            if (event.wheelDelta) {
                // mousewheel은
                // 휠을 내릴 떄 -120 반환
                // 휠을 올릴 때 120 반환
                // 그래서 1이나 -1로 반환하도록 / 120
                delta = event.wheelDelta / 120;
                if(window.opera) {
                    delta = -delta;
                }
            }
            else if (window.detail) {
                // 파이어폭스의 속성
                // 휠을 내릴 때 3 반환
                // 휠을 올릴 때 -3 반환
                // 위의 delta값과 부호와 수가 다름. 그래서 1로 만들도록
                // - 하고 나누기 3
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
                    complete: function () {}
                });
        });
    });
});