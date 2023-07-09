require(['jquery', 'underscore', 'hoverintent'], function($, _, hoverintent) {

    $(function() {

        var $body = $('body');
        var $pageHeader = $('.page-header');
        var $pageHeaderPrimary = $pageHeader.find('.header.header-primary');
        var $catalogNavigationTopmenu = $('.header-catalog-navigation');
        var $catalogNavigationTopmenuTopLevelUl = $catalogNavigationTopmenu.find('.list-catalog-navigation-top-level');
        var $catalogNavigationTopmenuItems = $catalogNavigationTopmenuTopLevelUl.find('a');
        var $catalogNavigationDropdown = $('.header-catalog-navigation-dropdown');
        var $catalogNavigationDropdownToplevelLevel0Items = $catalogNavigationDropdown.find('.header-catalog-navigation-dropdown-toplevel > .level0');
        var $catalogNavigationDropdownToplevelLevel1Items = $catalogNavigationDropdown.find('.header-catalog-navigation-dropdown-toplevel > .level0 > .submenu > .level1');
        var $catalogNavigationDropdownBottomlevel = $catalogNavigationDropdown.find('.header-catalog-navigation-dropdown-bottomlevel');
        var $catalogNavigationDropdownBottomlevelAdvert = $catalogNavigationDropdown.find('.header-catalog-navigation-dropdown-bottomlevel .bottomlevel--advert');
        var $catalogNavigationDropdownBottomlevelCategories = $catalogNavigationDropdown.find('.header-catalog-navigation-dropdown-bottomlevel .bottomlevel--categories');

        if ($(window).width() < 768) {

            // Mobile

            /** Mobile - Check item off screen (after siblings only) **/

            // Handle hiding/showing the out of view style per list item.
            var handleDarkenOutOfViewItems = _.throttle(function() {

                var outOfViewportHitEl = false;

                $catalogNavigationTopmenuTopLevelUl.find('> li').addClass('out-of-view');

                $catalogNavigationTopmenuTopLevelUl.find('> li').each(function() {

                    if (isElementInViewport($(this))) {

                        $(this).removeClass('out-of-view');

                        if (!outOfViewportHitEl) {

                            outOfViewportHitEl = true;
                            $(this).prevAll().removeClass('out-of-view');

                        }
                    }

                });

            }, 150);

            // Listen to scroll & window resize events
            $(window).on('DOMContentLoaded load resize', handleDarkenOutOfViewItems);
            $catalogNavigationTopmenu.find('.list-catalog-navigation-top-level').on('scroll', handleDarkenOutOfViewItems);

            // Do it on pageload
            handleDarkenOutOfViewItems();

        } else {

            // Desktop

            /** Configure the hoverintent setup for the desktop menu **/
            if ($catalogNavigationTopmenu.length && $catalogNavigationDropdown.length) {

                $catalogNavigationTopmenuItems.hoverIntent(
                    function() {

                        // Handler in
                        var currentNavPosition = $(this).data('nav-position');
                        var currentCategoryId = $(this).data('category-id');

                        $body.addClass('catalog-navigation-visible fade-page-wrapper-not-header');

                        $catalogNavigationDropdown.show();

                        // Remove all the active classes on the top menu
                        $catalogNavigationTopmenuItems.removeClass('active');

                        // Add the active class to the current item in the top menu.
                        $(this).addClass('active');

                        // Clear the bottom level
                        $catalogNavigationDropdownBottomlevelAdvert.html('');
                        $catalogNavigationDropdownBottomlevelCategories.html('');

                        // Remove all the active classes on this dropdown level
                        $catalogNavigationDropdownToplevelLevel0Items.removeClass('active');

                        // Add the active class to the current item in the dropdown.
                        $catalogNavigationDropdownToplevelLevel0Items.filter('.' + currentNavPosition).addClass('active');

                        if (typeof currentCategoryId !== 'undefined' && typeof catalogNavigationFeaturedContent !== 'undefined' && typeof catalogNavigationFeaturedContent[currentCategoryId] !== 'undefined') {
                            $catalogNavigationDropdownBottomlevelAdvert.html(catalogNavigationFeaturedContent[currentCategoryId]);
                        }

                    },
                    function() {

                        // Handler out

                    }
                );

                $pageHeader.hoverIntent(
                    function() {

                        // Handler in

                    },
                    function() {

                        if ($body.hasClass('catalog-navigation-visible')) {

                            $body.removeClass('catalog-navigation-visible fade-page-wrapper-not-header')

                            // Handler out
                            $catalogNavigationDropdown.hide()

                            // Remove all the active classes on the top menu
                            $catalogNavigationTopmenuItems.removeClass('active')

                            // Clear the bottom level
                            $catalogNavigationDropdownBottomlevelAdvert.html('')
                            $catalogNavigationDropdownBottomlevelCategories.html('')

                            // Remove all the active classes on this dropdown level
                            $catalogNavigationDropdownToplevelLevel0Items.removeClass('active')

                        }


                    }
                );
                $pageHeaderPrimary.hoverIntent(
                    function() {

                        if ($body.hasClass('catalog-navigation-visible')) {

                            $body.removeClass('catalog-navigation-visible fade-page-wrapper-not-header')

                            // Handler in
                            $catalogNavigationDropdown.hide()

                            // Remove all the active classes on the top menu
                            $catalogNavigationTopmenuItems.removeClass('active')

                            // Clear the bottom level
                            $catalogNavigationDropdownBottomlevelAdvert.html('')
                            $catalogNavigationDropdownBottomlevelCategories.html('')

                            // Remove all the active classes on this dropdown level
                            $catalogNavigationDropdownToplevelLevel0Items.removeClass('active')

                        }

                    },
                    function() {

                        // Handler out

                    }
                );

                $catalogNavigationDropdownToplevelLevel1Items.hoverIntent(
                    function() {

                        // Handler in
                        // Remove all the active classes on this dropdown level
                        $catalogNavigationDropdownToplevelLevel1Items.removeClass('active');

                        // Add the active class to the current item in the dropdown
                        $(this).addClass('active');

                        // Populate the bottom level dropdown with the selected dropdown items.
                        $catalogNavigationDropdownBottomlevelCategories.html($(this).find('> .submenu').clone());

                    },
                    function() {

                        // Handler out

                    }
                );

            }

        }

        /** Utilities **/
        function isElementInViewport(el) {

            // Special bonus for those using jQuery
            if (typeof jQuery === "function" && el instanceof jQuery) {
                el = el[0];
            }

            var rect = el.getBoundingClientRect();

            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

    });

});