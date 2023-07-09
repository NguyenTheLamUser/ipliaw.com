/**
 * Copyright © MagePal LLC. All rights reserved.
 * See COPYING.txt for license details.
 * https://www.magepal.com | support@magepal.com
 */

define([
    'uiClass',
    'jquery',
    'underscore',
    'jquery/jquery-storageapi'
], function(Component, $, _) {
    'use strict';

    window.magePalGa4ProductCollection = window.magePalGa4ProductCollection || {};

    return Component.extend({
        productCollection: window.magePalGa4ProductCollection,
        config: {},
        itemListId: null,
        itemListName: null,
        setConfig: function(config) {
            this.config = config;
            return this;
        },
        /**
         * load data layer
         * @return object;
         */
        loadDataLayer: function() {
            var dataLayer = {};
            _.each(this.getDataLayerObject(), function(item, key) {
                dataLayer = $.extend(true, dataLayer, item);
            });

            return dataLayer;
        },
        /**
         * Get data layer object
         * @return {*|*[]}
         */
        getDataLayerObject: function() {
            window[this.config.dataLayerName] = window[this.config.dataLayerName] || [];
            return window[this.config.dataLayerName];
        },
        /**
         * Get local store data
         * @return {*}
         */
        getStorageData: function() {
            try {
                return $.initNamespaceStorage('magepal-google-analytics4').localStorage;
            } catch (e) {
                return null;
            }
        },
        /**
         * Get local store data
         * @return {*}
         */
        getProductClickStorageData: function() {
            var result = {};

            try {
                var storage = this.getStorageData();
                /**
                 * Product click format
                 * {pid: productId, sku: product.id, list: list.item_list_name, index: product.index}
                 */
                if (storage) {
                    result = storage.get('product-click');
                }
            } catch (e) {}

            return result;
        },
        /**
         * Add dynamic data
         * @param storedData
         * @param item
         * @return {*}
         */
        addDynamicElements: function(storedData, item) {
            this.itemListName = null;
            this.itemListId = null;

            if (_.has(storedData, 'index')) {
                item.index = storedData.index;
            }

            if (_.has(storedData, 'item_list_id')) {
                item.item_list_id = this.itemListId = storedData.item_list_id;
            }

            if (_.has(storedData, 'item_list_name')) {
                item.item_list_name = this.itemListName = storedData.item_list_name;
            }
        },
        /**
         * Add click position/index to data
         * @param ecommerceData
         * @return {*}
         */
        processData: function(ecommerceData) {
            var storedData = this.getProductClickStorageData();
            var self = this;

            _.each(ecommerceData, function(data) {
                if (_.has(data, 'parent_sku') &&
                    _.isObject(storedData) &&
                    _.has(storedData, 'sku') &&
                    data.parent_sku === storedData.sku
                ) {
                    self.addDynamicElements(storedData, data);
                } else if (_.has(data, 'parent_sku')) {
                    var product = self.getProductBySku(data.parent_sku);

                    if (product) {
                        self.addDynamicElements(product, data);
                    }
                }
            });

            return ecommerceData;
        },
        /**
         * Push Data to data layer
         * @param data
         */
        pushAddToCartDataLayer: function(data) {
            var dataLayer = this.getDataLayerObject();
            $("body").trigger("mpGa4ItemAddToCart", [data, dataLayer]);
            dataLayer.push({
                'event': 'add_to_cart',
                'ecommerce': {
                    'currency': this.config.currency,
                    'items': data,
                    'item_list_name': this.itemListName,
                    'item_list_id': this.itemListId
                },
                'cart': {
                    'add': {
                        'products': data
                    }
                },
                '_clear': true
            });
        },
        /**
         * Add, remove, change qty data layer push
         * @param data
         */
        pushAddRemoveItemDataLayer: function(data) {
            if (_.isObject(data) && _.has(data, 'cart_items')) {
                var cartGenericLayer = {};
                var dataLayer = this.getDataLayerObject();
                var self = this;

                _.each(data.cart_items, function(cartItem) {
                    if (_.has(cartItem, 'event')) {
                        if (_.has(cartItem, 'ecommerce')) {
                            cartItem.ecommerce.currency = self.config.currency;
                        }

                        if (cartItem.event === 'add_to_cart') {
                            var itemsAdded = self.processData(cartItem.ecommerce.items);

                            $("body").trigger("mpGa4ItemAddToCart", [itemsAdded, dataLayer]);
                            cartGenericLayer.add = {
                                'products': itemsAdded
                            };

                            if (self.itemListId) {
                                cartItem.ecommerce.item_list_id = self.itemListId;
                            }

                            if (self.itemListName) {
                                cartItem.ecommerce.item_list_name = self.itemListName;
                            }
                        }

                        if (cartItem.event === 'remove_from_cart') {
                            var itemsRemoved = self.processData(cartItem.ecommerce.items);

                            $("body").trigger("mpGa4ItemRemoveFromCart", [itemsRemoved, dataLayer]);
                            cartGenericLayer.remove = {
                                'products': itemsRemoved
                            };

                            if (self.itemListId) {
                                cartItem.ecommerce.item_list_id = self.itemListId;
                            }

                            if (self.itemListName) {
                                cartItem.ecommerce.item_list_name = self.itemListName;
                            }
                        }
                    }

                    if (!_.isEmpty(cartGenericLayer)) {
                        cartItem.cart = cartGenericLayer;
                    }
                    cartItem._clear = true;
                    dataLayer.push(cartItem);
                });
            }
        },
        /**
         * Store product collection
         * @param data
         */
        setProductCollection: function(data) {
            var self = this;
            if (_.isObject(data) && _.has(data, 'ecommerce') && _.has(data.ecommerce, 'items')) {
                _.each(data.ecommerce.items, function(product) {
                    if (_.has(product, 'p_id')) {
                        self.productCollection[product.p_id] = product;
                    }
                });
            }
        },
        /**
         * get product collection
         * @param productId
         */
        getProductById: function(productId) {
            return productId && _.has(this.productCollection, productId) ? this.productCollection[productId] : false;
        },
        /**
         * get product collection
         * @param sku
         */
        getProductBySku: function(sku) {
            return _.find(this.productCollection, function(item) {
                return item.item_id === sku ? item : false;
            });
        },
        /**
         * Bind product click event
         */
        trackClick: function() {
            var self = this;

            _.each(this.config.productLists, function(list) {
                $('body').on('click', list.class_name, function() {
                    return self.productClick($(this), list);
                });
            });
        },
        /**
         * Track product click event
         */
        productClick: function($element, list) {
            var $container = $element.closest(list.container_class);
            var $priceBox = $container.find("[data-product-id]");
            var productUrl = null;

            if ($container.find('a.product-item-link').length) {
                productUrl = $container.find('a.product-item-link').attr('href');
            } else if ($container.find('a.product-item-photo').length) {
                productUrl = $container.find('a.product-item-photo').attr('href');
            } else {
                productUrl = $element.attr('href');
            }

            if ($priceBox.length) {
                var productId = $priceBox.data('productId');
                var product = {};

                if (productId && _.has(this.productCollection, productId)) {
                    product = this.productCollection[productId];
                } else if (productId) {
                    product = this.productCollection[_.first(_.keys(this.productCollection))];
                    if (_.has(product, 'p_id')) {
                        var price = 0;

                        if ($container.find("[data-price-amount]").data('priceAmount') > 0) {
                            price = $container.find("[data-price-amount]").data('priceAmount');
                        }

                        product.p_id = productId;
                        product.id = $container.find("[data-product-sku]").data('productSku');
                        product.position = $container.index() > 0 ? $container.index() : 0;
                        product.name = $.trim($container.find(".product-item-link").text());
                        product.price = price;
                    } else {
                        product = {};
                    }
                }

                if (_.has(product, 'p_id')) {
                    //if gtm take longer than 3 seconds
                    var autoRedirectTimer = setTimeout(function() {
                        document.location = productUrl
                    }, 3000);

                    $("body").trigger("mpGa4ProductClick", [product, this.getDataLayerObject(), list]);

                    try {
                        var storage = this.getStorageData();
                        if (!_.isEmpty(storage)) {
                            storage.set('product-click', {
                                pid: productId,
                                sku: product.item_id,
                                item_list_name: list.item_list_name,
                                item_list_id: list.item_list_id,
                                index: product.index
                            });
                        }
                    } catch (e) {}

                    this.getDataLayerObject().push({
                        'event': 'select_item',
                        'ecommerce': {
                            'items': [product],
                            'item_list_name': list.item_list_name,
                            'item_list_id': list.item_list_id
                        },
                        'eventCallback': function() {
                            clearTimeout(autoRedirectTimer);
                            document.location = productUrl
                        },
                        '_clear': true
                    });

                    return false;
                }
            }

            return true;
        }
    });

});