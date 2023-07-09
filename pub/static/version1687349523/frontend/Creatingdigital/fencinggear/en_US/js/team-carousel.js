var teamCarousel = function(params) {
    var self = this;

    /**
     * Close Items
     */
    params.closeButton.on('click', {
        self: self
    }, function(event) {
        event.stopPropagation();
        jQuery('.team-absoulate-carousel .slider-contents .text-contents').removeClass('visible');
        if (!self.isMobile()) {
            jQuery(this).parent('div').removeClass('visible');
        }


        //self.startSlides();
    });

    jQuery(document).on("click", ".team-absoulate-carousel .text-contents button.close-team", function() {
        event.stopPropagation();
        jQuery('.team-absoulate-carousel .slider-contents .text-contents').removeClass('visible');
        if (!self.isMobile()) {
            jQuery(this).parent('div').removeClass('visible');
        }

        self.startSlides();
    });

    params.owlItem.on('click', {
        self: self
    }, function(event) {
        if (self.isMobile()) {
            self.stopSlides();

            jQuery('.team-absoulate-carousel .slider-contents .text-contents .var-contents').empty().html('').removeClass('visible');

            var currentItem = jQuery(this);

            var currentItemImg = currentItem.children("img").clone();

            var text = currentItem.find('div.team-text').html();
            jQuery('.team-absoulate-carousel .slider-contents .text-contents .var-contents').empty().html(text);
            jQuery('.team-absoulate-carousel .slider-contents .text-contents .var-contents').append(currentItemImg);
            jQuery('.team-absoulate-carousel .slider-contents .text-contents').addClass('visible');
        } else {
            self.stopSlides();
            jQuery('.team-absoulate-carousel .slider-contents div.team-text').removeClass('visible');
            var currentItem = jQuery(this);

            var text = currentItem.find('div.team-text').addClass('visible');


        }
    });

    params.learnMoreLink.on('click', {
        self: self
    }, function(event) {
        event.preventDefault();

        if (self.isMobile()) {
            return;
        }

        self.stopSlides();

        jQuery('.team-absoulate-carousel .slider-contents .text-contents .var-contents').empty().html('').removeClass('visible');

        var currentItem = jQuery(this).parent('div.item');

        var currentItemImg = currentItem.children("img").clone();

        var text = currentItem.find('div.team-text').html();
        jQuery('.team-absoulate-carousel .slider-contents .text-contents .var-contents').empty().html(text);
        jQuery('.team-absoulate-carousel .slider-contents .text-contents .var-contents').append(currentItemImg);
        jQuery('.team-absoulate-carousel .slider-contents .text-contents').addClass('visible');
    });

    /**
     * Stop sliding
     */
    this.stopSlides = function() {
        jQuery('.team-absoulate-carousel .owl-carousel').trigger('stop.owl.autoplay');
    }

    /**
     * Start sliding
     */
    this.startSlides = function() {
        jQuery('.team-absoulate-carousel .owl-carousel').trigger('play.owl.autoplay');
    }
    /**
     *
     * @returns {boolean}
     */
    this.isMobile = function() {
        if (jQuery(window).width() < 768) {
            return true;
        } else {
            return false;
        }
    }
};