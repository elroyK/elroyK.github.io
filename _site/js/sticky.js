function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top)
        $('#sticky-nav').addClass('sticky');
    else
        $('#sticky-nav').removeClass('sticky');
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});