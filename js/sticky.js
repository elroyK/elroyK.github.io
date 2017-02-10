function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var header_bottom = $('#sticky-anchor').offset().bottom;
    if (window_top > header_bottom)
        $('#sticky-nav').addClass('sticky');
    else
        $('#sticky-nav').removeClass('sticky');
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});