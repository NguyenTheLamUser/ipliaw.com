$('.carousel').carousel({
    interval: 8000
})
//////////////Lazy load carousel bootstrap
$('.carousel.lazy').on('slide.bs.carousel', function(ev) {
    var lazy;
    lazy = $(ev.relatedTarget).find("img[data-src]");
    lazy.attr("src", lazy.data('src'));
    lazy.removeAttr("data-src");
})