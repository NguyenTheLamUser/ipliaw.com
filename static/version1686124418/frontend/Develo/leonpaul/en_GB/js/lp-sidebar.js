require(['jquery', 'underscore', 'hoverintent', 'mage/translate', 'mage/cookies', 'Magento_Customer/js/customer-data'], function($, _, hoverintent, $t, $c, customerData) {

    $(function() {

        var cookieNameVatToggleShowInc = 'lp_vat_toggle_show_inc';
        var classNameVatToggleShowInc = 'lp-vat-toggle-show-inc';
        var $body = $('body');
        var $sidebarMenuButtonToggle = $('.bottom-bar-container .action-lp-menu-toggle, .page-header .header-primary .action-lp-menu-toggle');
        var $sidebarContainer = $('.sidebar-navigation-container');
        var sidebarInitialShopOpen = false;
        var isCustomerLoggedIn = false;
        var $sidebarMenuMyAccountGuest = $sidebarContainer.find('.item-my_account_guest');
        var $sidebarMenuMyAccountAuthenticated = $sidebarContainer.find('.item-my_account_authenticated');

        var changeCustomerAuthdMenuLinks = function() {

            // Reset the other sidebar
            $sidebarMenuMyAccountGuest.hide();
            $sidebarMenuMyAccountAuthenticated.hide();

            if (isCustomerLoggedIn) {
                $sidebarMenuMyAccountAuthenticated.show();
            } else {
                $sidebarMenuMyAccountGuest.show();

            }

        }

        // When page is ready, calculate sidebar menu my account changes
        changeCustomerAuthdMenuLinks();

        // Called when customer data observer changes
        var onCustomerDataChange = function(event) {

            isCustomerLoggedIn = typeof event['firstname'] !== 'undefined';
            changeCustomerAuthdMenuLinks();

        }

        // Get the customer data -> customer - observer
        var customerDataCustomer = customerData.get('customer');

        // Listen to customer data changes
        customerDataCustomer.subscribe(onCustomerDataChange);

        // Add the dropdown toggles dynamically.
        $sidebarContainer.find('li.parent > a').each(function() {
            $(this).parent().append($(this).clone().addClass('dropdown-toggle').removeClass('title').html('<span class="f-icon icon-plus"></span><span class="sr-only">Menu</span>'));
        });

        initVatToggle();

        /** All screen sizes **/
        $sidebarMenuButtonToggle.on('click', function(e) {

            e.preventDefault();

            // Client request > preopen Shop.
            if (sidebarInitialShopOpen === false) {

                sidebarInitialShopOpen = true;
                $sidebarContainer.find('.item-shop > .dropdown-toggle').click();

            }

            // Handle page state.
            setTimeout(function() {

                if (!$sidebarContainer.hasClass('active')) {
                    openSidebarMenu();
                } else {
                    closeSidebarMenu();
                }

            }, 50);

        });

        function openSidebarMenu() {

            $body.addClass('sidebar-navigation-active fade-page-wrapper');
            $sidebarContainer.animate({
                width: 'toggle'
            }, 180);
            $sidebarContainer.addClass('active');

        }

        function closeSidebarMenu() {

            $sidebarContainer.animate({
                width: 'toggle'
            }, 180, function() {
                $sidebarContainer.css('display', '');
                $sidebarContainer.removeClass('active');
                $body.removeClass('sidebar-navigation-active fade-page-wrapper');
            });

        }

        $(document).mouseup(function(e) {

            if ($sidebarContainer.hasClass('active') && !$sidebarContainer.is(e.target) && $sidebarContainer.has(e.target).length === 0 && !$sidebarMenuButtonToggle.is(e.target) && $sidebarMenuButtonToggle.has(e.target).length === 0) {

                closeSidebarMenu();

            }

        });

        $sidebarContainer.find('li.parent > a.dropdown-toggle').on('click', function(e) {

            e.preventDefault();

            var currentlyHasActive = $(this).parent().hasClass('active');

            // Disable any other active ones on the same level
            $(this).parent().siblings('.active').removeClass('active');

            if (currentlyHasActive) {

                // clicking same one again, close it
                $(this).parent().removeClass('active');

                if ($(this).parent().parent().parent().hasClass('sidebar-container')) {
                    return;
                }

                if ($(this).parent().hasClass('level-top')) {
                    $sidebarContainer.find('.sidebar-container > .level0 > .level0:not(.item-shop)').removeClass('hidden');
                }

                $(this).parent().siblings().removeClass('hidden');
                $(this).parent().parent().siblings('a').removeClass('hidden');

            } else {

                // opening new one
                // Set current one to active

                $(this).parent().addClass('active');

                if ($(this).parent().parent().parent().hasClass('sidebar-container')) {
                    return;
                }

                if ($(this).parent().hasClass('level-top')) {
                    $sidebarContainer.find('.sidebar-container > .level0 > .level0:not(.item-shop)').addClass('hidden');
                }

                $(this).parent().siblings().addClass('hidden');
                $(this).parent().parent().siblings('a').addClass('hidden');

            }

        });

        function initVatToggle() {

            // If UK Store then show VAT Toggle, everywhere else hide and unset the cookie.
            var $storeSwitcher = $('#switcher-store .switcher-options .switcher-trigger');

            if ($storeSwitcher.length) {

                var storeSwitcherCurrentStoreCode = $storeSwitcher.data('current-store-code');

                if (storeSwitcherCurrentStoreCode == 'defaultuk') {

                    // Add the VAT Toggle to the sidebar
                    var $vatToggleContainer = addVatToggleToSidebar();

                    // Changes to this should show or hide the VAT and update the preference as a cookie.
                    $vatToggleContainer.find('input').on('change', function() {

                        // Update cookie
                        $.cookie(cookieNameVatToggleShowInc, $(this).is(':checked'));

                        // Update body class
                        refreshVatTogglePricing();

                    });

                    // Load the current VAT Toggle status and and set the page class accordingly.
                    var isCheckedCookie = refreshVatTogglePricing();

                    // Update the input of the switch depending on the cookie
                    $vatToggleContainer.find('input').prop('checked', isCheckedCookie)

                }
                // Update body class
                refreshVatTogglePricing();
            }

        }

        function refreshVatTogglePricing() {

            // Read the cookie
            var lpVatToggleCookie = $.cookie(cookieNameVatToggleShowInc);

            // Update body class
            if (typeof lpVatToggleCookie == 'undefined' || lpVatToggleCookie == null && !$body.hasClass('config-excl-tax')) {
                // Cookie not set, default to show inc on.
                $body.addClass(classNameVatToggleShowInc);
                return true;
            } else if (lpVatToggleCookie == 'false' || $body.hasClass('config-excl-tax')) {
                $body.removeClass(classNameVatToggleShowInc);
                return false;
            } else {
                if (!$body.hasClass('config-excl-tax')) {
                    $body.addClass(classNameVatToggleShowInc);
                }
                return true;
            }

        }

        /**
         * Add the VAT Toggle to the sidebar
         *
         * Returns VAT toggle element
         * @returns {*|jQuery}
         */
        function addVatToggleToSidebar() {

            // Find the shop section and add our VAT toggl to it.
            return $sidebarContainer.find('.sidebar-container .item-shop .submenu').first().prepend('<li class="level0 nav-vat-toggle level-top"><label class="input-switch"><span class="switch-label">' + $t('Display VAT') + '</span><input type="checkbox"><span class="switch-status"></span></label></li>');

        }

    });

});