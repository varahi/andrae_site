$(document).ready(function(){
   //$('body').bootstrapMaterialDesign();

    /*Hyphenator.config({
        displaytogglebox : false,
        minwordlength : 10
    });
    Hyphenator.run();*/
});

//mobile Nav
// function toggleNav() {
//     if ($(window).width() >= 450){
//         var toggleWidth = $(".mobileMenu").width() == 0 ? "70vw" : 0;
//     }
//     else{
//         var toggleWidth = $(".mobileMenu").width() == 0 ? "100vw" : 0;
//     }
//     $("body").toggleClass("noOverflow");
//     $('.mobileMenu').animate({width: toggleWidth});
//     // $('#nav-icon3').toggleClass('open');
// }
//END


$(document).on('click', '.openNav', function () {
    if ($(window).width() >= 450){
        var toggleWidth = $(".mobileMenu").width() == 0 ? "70vw" : 0;
    }
    else{
        var toggleWidth = $(".mobileMenu").width() == 0 ? "100vw" : 0;
    }
    $('.mobileMenu').animate({width: toggleWidth});
    $("body").addClass("noOverflow");
    $('.openNav').hide();
});

$(document).on('click', '.closeNav', function () {
    if ($(window).width() >= 450){
        var toggleWidth = $(".mobileMenu").width() == 0 ? "70vw" : 0;
    }
    else{
        var toggleWidth = $(".mobileMenu").width() == 0 ? "100vw" : 0;
    }
    $('.mobileMenu').animate({width: toggleWidth});
    $("body").removeClass("noOverflow");
    $('.openNav').show();
});

//News equal height
equalHeight = function(container){
    var tallestItem = 0;

    $(container).each(function(){
        var height = $(this).height();

        if(height > tallestItem){
            tallestItem = height;
        }
    });

    $(container).height(tallestItem+'px')
};

//News equal height
autoHeight = function(container){
    $(container).height('auto')
};

$(window).on('load', function() {
    if($(window).width() > 768){
        equalHeight('.newsItem');
        equalHeight('.newsItem h5');
        equalHeight('.StartItem p');
    }
    if ($(window).width() >= 992){
        equalHeight('.first');
        equalHeight('.second');
    }
    if ($(window).width() >= 1200){
        equalHeight('.address');
    }
    if($(window).width() < 768){
        autoHeight('.newsItem');
        autoHeight('.newsItem h5');
        autoHeight('.StartItem p');
    }
});


$(window).on('resize', function(){
    if($(window).width() > 768){
        equalHeight('.newsItem');
        equalHeight('.newsItem h5');
        equalHeight('.StartItem p');
    }
    if ($(window).width() >= 992){
        equalHeight('.first');
        equalHeight('.second');
    }
    if ($(window).width() >= 1200){
        equalHeight('.address');
    }
    if($(window).width() < 768){
        autoHeight('.newsItem');
        autoHeight('.newsItem h5');
        autoHeight('.StartItem p');
    }
});
//News equal height





$(document).on("click",".btn-link",function() {
    $(this).toggleClass("opened");
});

$(document).on('click', '.openSubMenu', function(e){
    e.preventDefault();
    var openSubMenu = $(this).parents(".navItem").next("div");
    var allSubMenus = $(".mobileMenu i").parents(".navItem").next("div");

    if($(this).hasClass("openedMenu")){
        $(this).removeClass("openedMenu");
    } else {
        $(".openSubMenu").not($(this)).removeClass("openedMenu");
        $(this).addClass("openedMenu");
    }

    if(openSubMenu.hasClass("openedMobileNav")){
        allSubMenus.addClass("hideMobileNav").removeClass("openedMobileNav");
        allSubMenus.slideUp();
    } else {
        allSubMenus.not(openSubMenu).addClass("hideMobileNav").removeClass("openedMobileNav");
        allSubMenus.not(openSubMenu).slideUp();
        openSubMenu.removeClass("hideMobileNav").addClass("openedMobileNav");
        openSubMenu.slideDown();
    }
});