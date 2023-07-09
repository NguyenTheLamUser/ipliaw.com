require([
    'jquery'
], function($) {

    $(function() {

        var $body = $('body');
        var $headerPrimary = $('.page-header .header-primary');
        var $searchInput = $('#search');
        var $headerSearchMixed = $('.header-search-mixed');
        var $algoliaSearchBlock = $headerSearchMixed.find('.algolia-search-block');
        var $storeSwitcher = $('#switcher-store');
        var storeSwitcherWidth = $storeSwitcher.outerWidth();
        var $searchCloseBtn = $('.develo-search-close');
        var $mobileSearchButtonToggle = $('.page-header .header-primary .header-search-mixed .algolia-search-block .magnifying-glass');
        var $mobileMinicartButtonToggle = $('.page-header .minicart-wrapper .action.showcart');

        /** Mobile VS Desktop specific **/
        if ($(window).width() < 992) {

            // Mobile
            /** Search Handling **/
            $mobileSearchButtonToggle.on('click', function(e) {

                e.preventDefault();

                toggleMobileSearch();
            });

            $searchInput.on('blur', function() {
                hideMobileSearch();
            });

            $searchInput.on('input', function() {
                if ($searchInput.val().length == 0) {
                    $searchInput.attr('readonly', 'readonly'); // Force keyboard to hide on input field.
                    $searchInput.attr('disabled', 'true'); // Force keyboard to hide on textarea field.
                    setTimeout(function() {
                        $searchInput.blur(); //actually close the keyboard
                        // Remove readonly attribute after keyboard is hidden.
                        $searchInput.removeAttr('readonly');
                        $searchInput.removeAttr('disabled');
                    }, 100);
                }
            });

            $searchInput.on('keyup', function(e) {
                if (e.key === 'Enter' || e.keyCode === 13) {
                    $('#develo-algolia-all a.secondary').click();
                }
            });

            $searchCloseBtn.on('click', function(e) {

                e.preventDefault();

                hideMobileSearch();

            });

            /** Minicart Handling **/
            /*$mobileMinicartButtonToggle.on('click', function() {

                console.log('click');

                setTimeout(function() {

                    // Handle page state.
                    if( $mobileMinicartButtonToggle.hasClass('active') ) {
                        $body.addClass('mobile-minicart-active fade-page-content');
                    } else {
                        $body.removeClass('mobile-minicart-active fade-page-content');
                    }

                    // unbind the close icon and wrap it to ours.
                    if( $('.minicart-wrapper .block-minicart #btn-minicart-close').length && !$('.minicart-wrapper .block-minicart #btn-minicart-close').hasClass('lpjs-unbinded-close') ) {

                        $('.minicart-wrapper .block-minicart #btn-minicart-close').addClass('lpjs-unbinded-close');

                        $('.minicart-wrapper .block-minicart #btn-minicart-close').on('click', function() {
                            $mobileMinicartButtonToggle.click();
                        });

                    }

                }, 100 );

            });*/

        } else {

            // Desktop

            $headerSearchMixed.css('left', storeSwitcherWidth);

            $searchInput.on('focus', function() {

                // Scroll to top of page so search UI is correct
                $('html, body').animate({
                    scrollTop: 0
                }, 200);

                // Stop body from moving
                $('body').addClass('overflow-hidden');

                // Misc search / ui state
                $algoliaSearchBlock.css('flex', 'auto');
                $headerPrimary.addClass('header-search-mixed-active');
                $headerSearchMixed.addClass('active');
                $headerSearchMixed.animate({
                    'margin-left': '-' + storeSwitcherWidth + 'px'
                }, 200, function() {
                    $searchCloseBtn.show();
                });

            });

            $searchInput.on('blur', function() {

                // Enable body moving
                $('body').removeClass('overflow-hidden');

                // Misc search / ui state
                $algoliaSearchBlock.css('flex', 'unset');
                $searchCloseBtn.hide();
                $headerSearchMixed.animate({
                    'margin-left': 0
                }, 200, function() {
                    $(this).removeClass('active');
                    $headerPrimary.removeClass('header-search-mixed-active');
                });

            });

        }

        /** Helper functions **/
        function showMobileSearch() {

            $body.addClass('mobile-search-active fade-page-content');
            $headerSearchMixed.addClass('active');
            $searchCloseBtn.show();

        }

        function hideMobileSearch() {

            $body.removeClass('mobile-search-active fade-page-content');
            $headerSearchMixed.removeClass('active');
            $searchCloseBtn.hide();

        }

        function toggleMobileSearch() {

            if ($headerSearchMixed.hasClass('active')) {
                hideMobileSearch();
            } else {
                showMobileSearch();
            }

        }

    });

});