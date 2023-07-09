require(['jquery', 'owl_carousel'], function($, owlCarousel) {

    $(function() {

        var $trendingSlider = $('.trending-product-slider');

        $trendingSlider.owlCarousel({
            items: 3,
            loop: false,
            dots: false,
            margin: 30,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                768: {
                    items: 3,
                }
            }
        });

    });

});