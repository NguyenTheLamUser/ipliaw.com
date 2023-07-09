define([
    'jquery',
], function($) {

    $(function() {

        var algoliaExistsCheckInterval = null;
        var algoliaExistsCheckIntervalErrors = 0;

        function bindAlgoliaFilterDropdowns() {

            var $algoliaWidgets = $('.page-products .algolia-instant-results-wrapper [class*="is-widget-container-"]');

            if ($algoliaWidgets.length) {

                $algoliaWidgets.each(function() {

                    var $algoliaWidget = $(this);
                    var $algoliaWidgetPanel = $algoliaWidget.find('.ais-Panel');
                    var $algoliaWidgetPanelHeader = $algoliaWidget.find('.ais-Panel-header');
                    var $algoliaWidgetPanelHeaderName = $algoliaWidgetPanelHeader.find('.name');
                    var $algoliaWidgetPanelBody = $algoliaWidget.find('.ais-Panel-body');

                    // Skip hidden widgets.
                    if ($algoliaWidgetPanel.is('[hidden]')) {
                        return;
                    }

                    if ($algoliaWidgetPanelHeaderName.length) {

                        $algoliaWidgetPanelHeaderName.html('<a href="#/">' + $algoliaWidgetPanelHeaderName.text() + '<span class="f-icon icon-chevron-down"></span></a>');

                        $algoliaWidget.addClass('widget-dropdown-state-closed');
                        $algoliaWidgetPanelBody.hide();

                    }

                    $algoliaWidgetPanelHeader.off('click').on('click', function(e) {

                        e.preventDefault();

                        // Close all open headers.
                        $algoliaWidgets.filter('.widget-dropdown-state-open').not($algoliaWidget).removeClass('widget-dropdown-state-open').addClass('widget-dropdown-state-closed').find('.ais-Panel-body').slideUp();

                        // Open or Close depending on the current state.
                        if ($algoliaWidget.hasClass('widget-dropdown-state-open')) {
                            $algoliaWidgetPanelBody.slideUp();
                        } else {
                            $algoliaWidgetPanelBody.slideDown();
                        }

                        setTimeout(function() {
                            $algoliaWidget.toggleClass('widget-dropdown-state-open').toggleClass('widget-dropdown-state-closed');
                        }, 400);

                    });

                });

                clearInterval(algoliaExistsCheckInterval);
                algoliaExistsCheckIntervalErrors = 0;

            } else {

                algoliaExistsCheckIntervalErrors++;

                if (algoliaExistsCheckIntervalErrors > 30) {

                    clearInterval(algoliaExistsCheckInterval);
                    algoliaExistsCheckInterval = 0;

                }

            }

        }

        function moveAlgoliaChosenFilters() {

            var $algoliaWrapper = $('.page-products .algolia-instant-results-wrapper');

            if ($algoliaWrapper.length) {

                var $algoliaFacetsContainer = $algoliaWrapper.find('#instant-search-facets-container');

                if ($algoliaFacetsContainer.length) {
                    $algoliaFacetsContainer.append($algoliaFacetsContainer.find('.instant-search-facets-container-pre-filters-container'));
                }

            }

        }

        function initialiseAlgoliaExtends() {

            // Bind the dropdowns and click events
            bindAlgoliaFilterDropdowns();

            // Move the chosen filters & clear button
            moveAlgoliaChosenFilters();

        }

        function initialise() {

            // Kick off the attempts to load the algolia code.
            algoliaExistsCheckInterval = setInterval(initialiseAlgoliaExtends, 1000);

            // Kick it off manually initially
            initialiseAlgoliaExtends();

            // Listen for mouse events when the algolia filters are open..
            $(document).on('click', function(e) {

                // Close when clicking away.
                var $algoliaWidgets = $('.page-products .algolia-instant-results-wrapper [class*="is-widget-container-"]');
                var $openAlgoliaFilter = $algoliaWidgets.filter('.widget-dropdown-state-open');

                if ($openAlgoliaFilter.length) {

                    if (!$openAlgoliaFilter.is(e.target) && $openAlgoliaFilter.has(e.target).length === 0) {
                        $openAlgoliaFilter.find('.ais-Panel-header .name a').click();
                    }

                }

            });

        }

        initialise();

    });

});