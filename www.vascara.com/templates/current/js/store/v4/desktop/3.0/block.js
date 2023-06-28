$(document).ready(function() {
    $('.product-slide').owlCarousel({
        items: 1,
        pagination: true,
        navText: ["", ""],
        responsiveClass: true,
        loop: false,
        margin: 30,
        nav: true,
        lazyLoad: true,
        slideBy: 'page',
        navText: ["<img src='/templates/current/img3_0/icon/prev.png' alt='prev'>", "<img src='/templates/current/img3_0/icon/next.png' alt='next'>"],
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4

            }
        }
    });
    $('body').find(".owlproductslideheight").removeClass("owlproductslideheight");

    $('.event-slide').owlCarousel({
        items: 1,
        pagination: true,
        responsiveClass: true,
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<img src='/templates/current/img3_0/icon/prev.png' alt='prev'>", "<img src='/templates/current/img3_0/icon/next.png' alt='next'>"],
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1200: {
                items: 2

            }
        }
    });
})