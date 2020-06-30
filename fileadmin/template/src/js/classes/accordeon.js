$(document).ready(function() {
    var $accordeonToggle = $(".accordion-toggle");

    $accordeonToggle.on('click', function(e) {
        e.preventDefault();

        var aId = $(this).attr('aria-controls');
        var $targetElement = $("#"+aId);

        if($(this).hasClass('collapsed')) {
            $(this).toggleClass('collapsed');

        }

        $targetElement.toggle(300);
        $('div.panel-collapse ').not($targetElement).slideUp();
    });
});