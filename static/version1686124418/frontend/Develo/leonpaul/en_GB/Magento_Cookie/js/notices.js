/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/**
 * @api
 */
define([
    'jquery',
    'jquery-ui-modules/widget',
    'mage/cookies'
], function($) {
    'use strict';

    $.widget('mage.cookieNotices', {
        /** @inheritdoc */
        _create: function() {
            if ($.mage.cookies.get(this.options.cookieName)) {
                this.element.hide();
            } else {
                this.element.show();
                this.forceUserToCloseCookieNotice();
                $('#notice-cookie-block a, #cookie-policy-content .cookie-policy-content-close').on('click', function(e) {
                    e.preventDefault();
                    $('#cookie-policy-content').fadeToggle(200);
                });
            }
            $(this.options.cookieAllowButtonSelector).on('click', $.proxy(function() {
                var cookieExpires = new Date(new Date().getTime() + this.options.cookieLifetime * 1000);

                $.mage.cookies.set(this.options.cookieName, JSON.stringify(this.options.cookieValue), {
                    expires: cookieExpires
                });

                if ($.mage.cookies.get(this.options.cookieName)) {
                    this.element.hide();
                    $(document).trigger('user:allowed:save:cookie');
                    this.removeCookieNotice();
                } else {
                    window.location.href = this.options.noCookiesUrl;
                }
            }, this));
        },
        forceUserToCloseCookieNotice: function() {
            $('body').addClass('cookie-notification-active');
        },
        removeCookieNotice: function() {
            $('body').removeClass('cookie-notification-active');
        }
    });

    return $.mage.cookieNotices;
});