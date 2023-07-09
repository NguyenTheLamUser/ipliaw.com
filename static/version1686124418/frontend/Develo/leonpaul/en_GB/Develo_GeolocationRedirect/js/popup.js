require([
    'jquery'
], function($) {

    var $geolocateCloseButton = $('.geolocate-modal-close');
    var $body = $('body');

    // Generic cookie functions

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // Custom code

    // TODO: Test that cookie is being set correctly

    if (!getCookie('geolocation_modal')) {

        $.ajax({

            method: 'GET',
            url: 'https://get.geojs.io/v1/ip/country.json',

        }).success(function(res) {

            let usersCountry = res.country;
            let currentStoreCountry = $('#store-locale').text().split("_")[1];

            if (usersCountry.length && currentStoreCountry.length) {

                if (usersCountry === currentStoreCountry) {
                    return;
                }

                openGeolocateModal(usersCountry);

            }

        });

        setCookie('geolocation_modal', true, 365);

    }

    function openGeolocateModal(userCountryCode) {

        var $geolocateModal = $('#develo-geolocate-modal');
        var $suggestedLocation = $geolocateModal.find('.suggested-location');
        var $redirectButton = $('#geolocate-redirect-btn');
        var storeName = '';
        var storeBtnText = '';
        var correctUrl;

        switch (userCountryCode) {

            // TODO: Make sure all store views are added and have the correct URL mapped below

            // TODO: Decide logic for what language the suggested store popup should display. i.e. suggested language or current language

            case 'GB':
                correctUrl = 'https://www.leonpaul.com';
                storeName = 'the United Kingdom';
                storeBtnText = 'United Kingdom';
                break;
            case 'FR':
                correctUrl = 'https://www.leonpaulfrance.com';
                storeName = 'France';
                storeBtnText = 'French';
                break;
            case 'DE':
                correctUrl = 'https://www.leonpaulgermany.com';
                storeName = 'Germany';
                storeBtnText = 'German';
                break;
            case 'ES':
                correctUrl = 'https://www.leonpaul.com';
                storeName = 'Spain';
                storeBtnText = 'Spanish';
                break;
            case 'US':
                correctUrl = 'https://www.leonpaulusa.com';
                storeName = 'the United States';
                storeBtnText = 'United States';
                break;
            default:
                return;

        }

        $redirectButton.text(storeBtnText);
        $suggestedLocation.text(storeName);
        $redirectButton.attr('href', correctUrl);
        $body.addClass('overlay-active');
        $geolocateModal.fadeIn(250);

    }

    $geolocateCloseButton.on('click', function() {

        var $geolocateModal = $('#develo-geolocate-modal');
        $body.removeClass('overlay-active');
        $geolocateModal.fadeOut(250);

    });

});