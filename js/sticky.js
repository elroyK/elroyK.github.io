function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top)
        $('.navbar').addClass('sticky');
    else
        $('.navbar').removeClass('sticky');
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});