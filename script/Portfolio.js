var nav = $("#dot ul li");
var contents = $("#contents > div");

nav.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    var section = contents.eq(index);
    var offset = section.offset().top;

    $("html,body").animate({scrollTop:offset},600,"easeInOutExpo");
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