define([
        'jquery',
        'jquery/ui',
        'mage/menu' 
    ],
    function($) {
        $.widget('fencing.menu', $.mage.menu, {

            /**
             * @private
             */
            _init: function() {
                this._super();

                if (this.options.expanded === true) {
                    this.isExpanded();
                }

                if (this.options.responsive === true) {
                    mediaCheck({
                        //media: this.options.mediaBreakpoint,
                        media: "(max-width:767px)",
                        entry: $.proxy(function() {
                            this._toggleMobileMode();
                        }, this),
                        exit: $.proxy(function() {
                            this._toggleDesktopMode();
                        }, this)
                    });
                }

                this._assignControls()._listen();
                this._setActiveMenu();
            },

            /**
             * @private
             */
            _toggleMobileMode: function() {
                var subMenus;

                $(this.element).off('mouseenter mouseleave');
                this._on({

                    /**
                     * @param {jQuery.Event} event
                     */
                    'click .ui-menu-item:has(a)': function(event) {
                        var target;

                        event.preventDefault();
                        target = $(event.target).closest('.ui-menu-item');
                        //target.get(0).scrollIntoView();

                        if (!target.hasClass('level-top') || !target.has('.ui-menu').length) {
                            window.location.href = target.find('> a').attr('href');
                        }
                    },

                    /**
                     * @param {jQuery.Event} event
                     */
                    'click .ui-menu-item:has(.ui-state-active)': function(event) {
                        this.collapseAll(event, true);
                    }
                });

                subMenus = this.element.find('.level-top');
                /*$.each(subMenus, $.proxy(function (index, item) {
                    var category = $(item).find('> a span').not('.ui-menu-icon').text(),
                        categoryUrl = $(item).find('> a').attr('href'),
                        menu = $(item).find('> .ui-menu');

                    this.categoryLink = $('<a>')
                        .attr('href', categoryUrl)
                        .text($.mage.__('All ') + category);

                    this.categoryParent = $('<li>')
                        .addClass('ui-menu-item all-category')
                        .html(this.categoryLink);

                    if (menu.find('.all-category').length === 0) {
                        menu.prepend(this.categoryParent);
                    }

                }, this));*/

                $.each(subMenus, $.proxy(function(index, item) {
                    var levelTopChildUl = $(item).find('> ul');
                    levelTopChildUl.css('display', 'block');
                    levelTopChildUl.addClass('expanded');
                    $(levelTopChildUl).find('> li').addClass('level-top');

                    $(levelTopChildUl).find('> li > ul').removeClass('expanded');
                    if ($(levelTopChildUl).find('> li').hasClass('has-active')) {
                        $(levelTopChildUl).find('> li > ul').css('display', 'block');
                    }

                }, this));

            },
            /**
             * @private
             */
            _toggleDesktopMode: function() {
                var categoryParent, html, subMenus;

                $(this.element).off('click mousedown mouseenter mouseleave');
                this._on({

                    /**
                     * Prevent focus from sticking to links inside menu after clicking
                     * them (focus should always stay on UL during navigation).
                     */
                    'mousedown .ui-menu-item > a': function(event) {
                        event.preventDefault();
                    },

                    /**
                     * Prevent focus from sticking to links inside menu after clicking
                     * them (focus should always stay on UL during navigation).
                     */
                    'click .ui-state-disabled > a': function(event) {
                        event.preventDefault();
                    },

                    /**
                     * @param {jQuer.Event} event
                     */
                    'click .ui-menu-item:has(a)': function(event) {
                        var target = $(event.target).closest('.ui-menu-item');

                        if (!this.mouseHandled && target.not('.ui-state-disabled').length) {
                            this.select(event);

                            // Only set the mouseHandled flag if the event will bubble, see #9469.
                            if (!event.isPropagationStopped()) {
                                this.mouseHandled = true;
                            }

                            // Open submenu on click
                            if (target.has('.ui-menu').length) {
                                this.expand(event);
                            } else if (!this.element.is(':focus') &&
                                $(this.document[0].activeElement).closest('.ui-menu').length
                            ) {
                                // Redirect focus to the menu
                                this.element.trigger('focus', [true]);

                                // If the active item is on the top level, let it stay active.
                                // Otherwise, blur the active item since it is no longer visible.
                                if (this.active && this.active.parents('.ui-menu').length === 1) { //eslint-disable-line
                                    clearTimeout(this.timer);
                                }
                            }
                        }
                    },

                    /**
                     * @param {jQuery.Event} event
                     */
                    'mouseenter .ui-menu-item': function(event) {
                        var target = $(event.currentTarget),
                            submenu = this.options.menus,
                            ulElement,
                            ulElementWidth,
                            width,
                            targetPageX,
                            rightBound;

                        if (target.has(submenu)) {
                            ulElement = target.find(submenu);
                            ulElementWidth = ulElement.outerWidth(true);
                            width = target.outerWidth() * 2;
                            targetPageX = target.offset().left;
                            rightBound = $(window).width();

                            if (ulElementWidth + width + targetPageX > rightBound) {
                                ulElement.addClass('submenu-reverse');
                            }

                            if (targetPageX - ulElementWidth < 0) {
                                ulElement.removeClass('submenu-reverse');
                            }
                        }

                        // Remove ui-state-active class from siblings of the newly focused menu item
                        // to avoid a jump caused by adjacent elements both having a class with a border
                        target.siblings().children('.ui-state-active').removeClass('ui-state-active');
                        this.focus(event, target);
                    },

                    /**
                     * @param {jQuery.Event} event
                     */
                    'mouseleave': function(event) {
                        this.collapseAll(event, true);
                    },

                    /**
                     * Mouse leave.
                     */
                    'mouseleave .ui-menu': 'collapseAll'
                });

                categoryParent = this.element.find('.all-category');
                html = $('html');

                categoryParent.remove();

                if (html.hasClass('nav-open')) {
                    html.removeClass('nav-open');
                    setTimeout(function() {
                        html.removeClass('nav-before-open');
                    }, this.options.hideDelay);
                }

                //Restore desktop menu styles again.
                subMenus = this.element.find('.level-top');

                $.each(subMenus, $.proxy(function(index, item) {
                    var levelTopChildUl = $(item).find('> ul');
                    levelTopChildUl.css('display', 'none');
                    levelTopChildUl.removeClass('expanded');
                    $(levelTopChildUl).find('> li').removeClass('level-top');

                }, this));
            },
        });
        return $.fencing.menu;
    });