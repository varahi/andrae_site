$(window).on("resize", function () {
    // Set auto height in bottom menu when resize window
    windowsize = $(window).width();
    if (windowsize < 1200) {
        $('.first').css('height','auto');
    }
});