define([
        "jquery",
    ],
    function($) {
        "use strict";
        $(document).ready(function($) {
            console.log("Main.js Loaded !");

            $("#algolia-searchbox label.label").on("click", function() {
                if ($("#algolia-autocomplete-tt.algolia-autocomplete").hasClass('search_visible')) {
                    $("#algolia-autocomplete-tt.algolia-autocomplete").removeClass('search_visible');
                } else {
                    $("#algolia-autocomplete-tt.algolia-autocomplete").addClass('search_visible');
                }
            });
        });
        return;
    });