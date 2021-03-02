$(document).ready(function(){

    $(function(){
        $.scrollIt({
            topOffset: -30,
            scrollTime: 600
        });
    });

    $(window).scroll(function() {    
        const scroll = $(window).scrollTop();
        // console.log(scroll);
    
        if (scroll >= 100) {
            $(".header").addClass("header--scroll");
        } else {
            $(".header").removeClass("header--scroll");
        }
    });

    $('.nav__hamburger').click(function() {
        $('.nav__menu').toggleClass('navmenu--show');
        $('.nav__hamburger').toggleClass('active');
    })
    
    $('.nav__link').click(function() {
        $('.nav__menu').removeClass('navmenu--show');
        $('.nav__hamburger').removeClass('active');
    })

});