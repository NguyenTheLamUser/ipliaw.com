(function(require) {
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    directoryRegionUpdater: 'Magento_Directory/js/region-updater'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            waitSeconds: 0,
            map: {
                '*': {
                    'ko': 'knockoutjs/knockout',
                    'knockout': 'knockoutjs/knockout',
                    'mageUtils': 'mage/utils/main',
                    'rjsResolver': 'mage/requirejs/resolver',
                    'jquery-ui-modules/core': 'jquery/ui-modules/core',
                    'jquery-ui-modules/accordion': 'jquery/ui-modules/widgets/accordion',
                    'jquery-ui-modules/autocomplete': 'jquery/ui-modules/widgets/autocomplete',
                    'jquery-ui-modules/button': 'jquery/ui-modules/widgets/button',
                    'jquery-ui-modules/datepicker': 'jquery/ui-modules/widgets/datepicker',
                    'jquery-ui-modules/dialog': 'jquery/ui-modules/widgets/dialog',
                    'jquery-ui-modules/draggable': 'jquery/ui-modules/widgets/draggable',
                    'jquery-ui-modules/droppable': 'jquery/ui-modules/widgets/droppable',
                    'jquery-ui-modules/effect-blind': 'jquery/ui-modules/effects/effect-blind',
                    'jquery-ui-modules/effect-bounce': 'jquery/ui-modules/effects/effect-bounce',
                    'jquery-ui-modules/effect-clip': 'jquery/ui-modules/effects/effect-clip',
                    'jquery-ui-modules/effect-drop': 'jquery/ui-modules/effects/effect-drop',
                    'jquery-ui-modules/effect-explode': 'jquery/ui-modules/effects/effect-explode',
                    'jquery-ui-modules/effect-fade': 'jquery/ui-modules/effects/effect-fade',
                    'jquery-ui-modules/effect-fold': 'jquery/ui-modules/effects/effect-fold',
                    'jquery-ui-modules/effect-highlight': 'jquery/ui-modules/effects/effect-highlight',
                    'jquery-ui-modules/effect-scale': 'jquery/ui-modules/effects/effect-scale',
                    'jquery-ui-modules/effect-pulsate': 'jquery/ui-modules/effects/effect-pulsate',
                    'jquery-ui-modules/effect-shake': 'jquery/ui-modules/effects/effect-shake',
                    'jquery-ui-modules/effect-slide': 'jquery/ui-modules/effects/effect-slide',
                    'jquery-ui-modules/effect-transfer': 'jquery/ui-modules/effects/effect-transfer',
                    'jquery-ui-modules/effect': 'jquery/ui-modules/effect',
                    'jquery-ui-modules/menu': 'jquery/ui-modules/widgets/menu',
                    'jquery-ui-modules/mouse': 'jquery/ui-modules/widgets/mouse',
                    'jquery-ui-modules/position': 'jquery/ui-modules/position',
                    'jquery-ui-modules/progressbar': 'jquery/ui-modules/widgets/progressbar',
                    'jquery-ui-modules/resizable': 'jquery/ui-modules/widgets/resizable',
                    'jquery-ui-modules/selectable': 'jquery/ui-modules/widgets/selectable',
                    'jquery-ui-modules/slider': 'jquery/ui-modules/widgets/selectmenu',
                    'jquery-ui-modules/sortable': 'jquery/ui-modules/widgets/sortable',
                    'jquery-ui-modules/spinner': 'jquery/ui-modules/widgets/spinner',
                    'jquery-ui-modules/tabs': 'jquery/ui-modules/widgets/tabs',
                    'jquery-ui-modules/tooltip': 'jquery/ui-modules/widgets/tooltip',
                    'jquery-ui-modules/widget': 'jquery/ui-modules/widget',
                    'jquery-ui-modules/timepicker': 'jquery/timepicker',
                    'vimeo': 'vimeo/player',
                    'vimeoWrapper': 'vimeo/vimeo-wrapper'
                }
            },
            shim: {
                'jquery/jquery-migrate': ['jquery'],
                'mage/adminhtml/backup': ['prototype'],
                'mage/captcha': ['prototype'],
                'mage/new-gallery': ['jquery'],
                'jquery/ui': ['jquery'],
                'matchMedia': {
                    'exports': 'mediaCheck'
                },
                'magnifier/magnifier': ['jquery'],
                'vimeo/player': {
                    'exports': 'Player'
                }
            },
            paths: {
                'jquery/validate': 'jquery/jquery.validate',
                'jquery/file-uploader': 'jquery/fileUploader/jquery.fileuploader',
                'prototype': 'legacy-build.min',
                'jquery/jquery.cookie': 'js-cookie/cookie-wrapper',
                'jquery/jquery-storageapi': 'js-storage/storage-wrapper',
                'text': 'mage/requirejs/text',
                'domReady': 'requirejs/domReady',
                'spectrum': 'jquery/spectrum/spectrum',
                'tinycolor': 'jquery/spectrum/tinycolor',
                'jquery-ui-modules': 'jquery/ui-modules'
            },
            deps: [
                'jquery/jquery-migrate'
            ],
            config: {
                text: {
                    'headers': {
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            }
        };

        require(['jquery'], function($) {
            'use strict';

            $.noConflict();
        });

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    'rowBuilder': 'Magento_Theme/js/row-builder',
                    'toggleAdvanced': 'mage/toggle',
                    'translateInline': 'mage/translate-inline',
                    'sticky': 'mage/sticky',
                    'tabs': 'mage/tabs',
                    'collapsible': 'mage/collapsible',
                    'dropdownDialog': 'mage/dropdown',
                    'dropdown': 'mage/dropdowns',
                    'accordion': 'mage/accordion',
                    'loader': 'mage/loader',
                    'tooltip': 'mage/tooltip',
                    'deletableItem': 'mage/deletable-item',
                    'itemTable': 'mage/item-table',
                    'fieldsetControls': 'mage/fieldset-controls',
                    'fieldsetResetControl': 'mage/fieldset-controls',
                    'redirectUrl': 'mage/redirect-url',
                    'loaderAjax': 'mage/loader',
                    'menu': 'mage/menu',
                    'popupWindow': 'mage/popup-window',
                    'validation': 'mage/validation/validation',
                    'breadcrumbs': 'Magento_Theme/js/view/breadcrumbs',
                    'jquery/ui': 'jquery/compat',
                    'cookieStatus': 'Magento_Theme/js/cookie-status'
                }
            },
            deps: [
                'mage/common',
                'mage/dataPost',
                'mage/bootstrap'
            ],
            config: {
                mixins: {
                    'Magento_Theme/js/view/breadcrumbs': {
                        'Magento_Theme/js/view/add-home-breadcrumb': true
                    }
                }
            }
        };

        /* eslint-disable max-depth */
        /**
         * Adds polyfills only for browser contexts which prevents bundlers from including them.
         */
        if (typeof window !== 'undefined' && window.document) {
            /**
             * Polyfill localStorage and sessionStorage for browsers that do not support them.
             */
            try {
                if (!window.localStorage || !window.sessionStorage) {
                    throw new Error();
                }

                localStorage.setItem('storage_test', 1);
                localStorage.removeItem('storage_test');
            } catch (e) {
                config.deps.push('mage/polyfill');
            }
        }
        /* eslint-enable max-depth */

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    checkoutBalance: 'Magento_Customer/js/checkout-balance',
                    address: 'Magento_Customer/js/address',
                    changeEmailPassword: 'Magento_Customer/js/change-email-password',
                    passwordStrengthIndicator: 'Magento_Customer/js/password-strength-indicator',
                    zxcvbn: 'Magento_Customer/js/zxcvbn',
                    addressValidation: 'Magento_Customer/js/addressValidation',
                    showPassword: 'Magento_Customer/js/show-password',
                    'Magento_Customer/address': 'Magento_Customer/js/address',
                    'Magento_Customer/change-email-password': 'Magento_Customer/js/change-email-password',
                    globalSessionLoader: 'Magento_Customer/js/customer-global-session-loader.js'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    escaper: 'Magento_Security/js/escaper'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    quickSearch: 'Magento_Search/js/form-mini',
                    'Magento_Search/form-mini': 'Magento_Search/js/form-mini'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    priceBox: 'Magento_Catalog/js/price-box',
                    priceOptionDate: 'Magento_Catalog/js/price-option-date',
                    priceOptionFile: 'Magento_Catalog/js/price-option-file',
                    priceOptions: 'Magento_Catalog/js/price-options',
                    priceUtils: 'Magento_Catalog/js/price-utils'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    compareList: 'Magento_Catalog/js/list',
                    relatedProducts: 'Magento_Catalog/js/related-products',
                    upsellProducts: 'Magento_Catalog/js/upsell-products',
                    productListToolbarForm: 'Magento_Catalog/js/product/list/toolbar',
                    catalogGallery: 'Magento_Catalog/js/gallery',
                    catalogAddToCart: 'Magento_Catalog/js/catalog-add-to-cart'
                }
            },
            config: {
                mixins: {
                    'Magento_Theme/js/view/breadcrumbs': {
                        'Magento_Catalog/js/product/breadcrumbs': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    addToCart: 'Magento_Msrp/js/msrp'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    catalogSearch: 'Magento_CatalogSearch/form-mini'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    creditCardType: 'Magento_Payment/js/cc-type',
                    'Magento_Payment/cc-type': 'Magento_Payment/js/cc-type'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    giftMessage: 'Magento_Sales/js/gift-message',
                    ordersReturns: 'Magento_Sales/js/orders-returns',
                    'Magento_Sales/gift-message': 'Magento_Sales/js/gift-message',
                    'Magento_Sales/orders-returns': 'Magento_Sales/js/orders-returns'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    discountCode: 'Magento_Checkout/js/discount-codes',
                    shoppingCart: 'Magento_Checkout/js/shopping-cart',
                    regionUpdater: 'Magento_Checkout/js/region-updater',
                    sidebar: 'Magento_Checkout/js/sidebar',
                    checkoutLoader: 'Magento_Checkout/js/checkout-loader',
                    checkoutData: 'Magento_Checkout/js/checkout-data',
                    proceedToCheckout: 'Magento_Checkout/js/proceed-to-checkout',
                    catalogAddToCart: 'Magento_Catalog/js/catalog-add-to-cart'
                }
            },
            shim: {
                'Magento_Checkout/js/model/totals': {
                    deps: ['Magento_Customer/js/customer-data']
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    requireCookie: 'Magento_Cookie/js/require-cookie',
                    cookieNotices: 'Magento_Cookie/js/notices'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    downloadable: 'Magento_Downloadable/js/downloadable',
                    'Magento_Downloadable/downloadable': 'Magento_Downloadable/js/downloadable'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    bundleOption: 'Magento_Bundle/bundle',
                    priceBundle: 'Magento_Bundle/js/price-bundle',
                    slide: 'Magento_Bundle/js/slide',
                    productSummary: 'Magento_Bundle/js/product-summary'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    giftOptions: 'Magento_GiftMessage/js/gift-options',
                    'Magento_GiftMessage/gift-options': 'Magento_GiftMessage/js/gift-options'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            deps: [],
            shim: {
                'chartjs/chartjs-adapter-moment': ['moment'],
                'tiny_mce_5/tinymce.min': {
                    exports: 'tinyMCE'
                }
            },
            paths: {
                'ui/template': 'Magento_Ui/templates'
            },
            map: {
                '*': {
                    uiElement: 'Magento_Ui/js/lib/core/element/element',
                    uiCollection: 'Magento_Ui/js/lib/core/collection',
                    uiComponent: 'Magento_Ui/js/lib/core/collection',
                    uiClass: 'Magento_Ui/js/lib/core/class',
                    uiEvents: 'Magento_Ui/js/lib/core/events',
                    uiRegistry: 'Magento_Ui/js/lib/registry/registry',
                    consoleLogger: 'Magento_Ui/js/lib/logger/console-logger',
                    uiLayout: 'Magento_Ui/js/core/renderer/layout',
                    buttonAdapter: 'Magento_Ui/js/form/button-adapter',
                    chartJs: 'chartjs/Chart.min',
                    'chart.js': 'chartjs/Chart.min',
                    tinymce: 'tiny_mce_5/tinymce.min',
                    wysiwygAdapter: 'mage/adminhtml/wysiwyg/tiny_mce/tinymce5Adapter'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            deps: [
                'Magento_Ui/js/core/app'
            ]
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    pageCache: 'Magento_PageCache/js/page-cache'
                }
            },
            deps: ['Magento_PageCache/js/form-key-provider']
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    captcha: 'Magento_Captcha/js/captcha',
                    'Magento_Captcha/captcha': 'Magento_Captcha/js/captcha'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    configurable: 'Magento_ConfigurableProduct/js/configurable'
                }
            },
            config: {
                mixins: {
                    'Magento_Catalog/js/catalog-add-to-cart': {
                        'Magento_ConfigurableProduct/js/catalog-add-to-cart-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    multiShipping: 'Magento_Multishipping/js/multi-shipping',
                    orderOverview: 'Magento_Multishipping/js/overview',
                    payment: 'Magento_Multishipping/js/payment',
                    billingLoader: 'Magento_Checkout/js/checkout-loader',
                    cartUpdate: 'Magento_Checkout/js/action/update-shopping-cart',
                    multiShippingBalance: 'Magento_Multishipping/js/multi-shipping-balance'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    recentlyViewedProducts: 'Magento_Reports/js/recently-viewed'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            config: {
                mixins: {
                    'Magento_Swatches/js/swatch-renderer': {
                        'Magento_InventorySwatchesFrontendUi/js/swatch-renderer': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    subscriptionStatusResolver: 'Magento_Newsletter/js/subscription-status-resolver',
                    newsletterSignUp: 'Magento_Newsletter/js/newsletter-sign-up'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            config: {
                mixins: {
                    'Magento_Checkout/js/action/select-payment-method': {
                        'Magento_SalesRule/js/action/select-payment-method-mixin': true
                    },
                    'Magento_Checkout/js/model/shipping-save-processor': {
                        'Magento_SalesRule/js/model/shipping-save-processor-mixin': true
                    },
                    'Magento_Checkout/js/action/place-order': {
                        'Magento_SalesRule/js/model/place-order-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    'slick': 'Magento_PageBuilder/js/resource/slick/slick',
                    'jarallax': 'Magento_PageBuilder/js/resource/jarallax/jarallax',
                    'jarallaxVideo': 'Magento_PageBuilder/js/resource/jarallax/jarallax-video',
                    'Magento_PageBuilder/js/resource/vimeo/player': 'vimeo/player',
                    'Magento_PageBuilder/js/resource/vimeo/vimeo-wrapper': 'vimeo/vimeo-wrapper',
                    'jarallax-wrapper': 'Magento_PageBuilder/js/resource/jarallax/jarallax-wrapper'
                }
            },
            shim: {
                'Magento_PageBuilder/js/resource/slick/slick': {
                    deps: ['jquery']
                },
                'Magento_PageBuilder/js/resource/jarallax/jarallax-video': {
                    deps: ['jarallax-wrapper', 'vimeoWrapper']
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            shim: {
                cardinaljs: {
                    exports: 'Cardinal'
                },
                cardinaljsSandbox: {
                    exports: 'Cardinal'
                }
            },
            paths: {
                cardinaljsSandbox: 'https://includestest.ccdc02.com/cardinalcruise/v1/songbird',
                cardinaljs: 'https://songbird.cardinalcommerce.com/edge/v1/songbird'
            }
        };


        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    transparent: 'Magento_Payment/js/transparent',
                    'Magento_Payment/transparent': 'Magento_Payment/js/transparent'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    orderReview: 'Magento_Paypal/js/order-review',
                    'Magento_Paypal/order-review': 'Magento_Paypal/js/order-review',
                    paypalCheckout: 'Magento_Paypal/js/paypal-checkout'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            config: {
                mixins: {
                    'Magento_Customer/js/customer-data': {
                        'Magento_Persistent/js/view/customer-data-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    loadPlayer: 'Magento_ProductVideo/js/load-player',
                    fotoramaVideoEvents: 'Magento_ProductVideo/js/fotorama-add-video-events',
                    'vimeoWrapper': 'vimeo/vimeo-wrapper'
                }
            },
            shim: {
                vimeoAPI: {},
                'Magento_ProductVideo/js/load-player': {
                    deps: ['vimeoWrapper']
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            config: {
                mixins: {
                    'Magento_Checkout/js/action/place-order': {
                        'Magento_CheckoutAgreements/js/model/place-order-mixin': true
                    },
                    'Magento_Checkout/js/action/set-payment-information': {
                        'Magento_CheckoutAgreements/js/model/set-payment-information-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        // eslint-disable-next-line no-unused-vars
        var config = {
            config: {
                mixins: {
                    'Magento_Checkout/js/model/place-order': {
                        'Magento_ReCaptchaCheckout/js/model/place-order-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        /*eslint strict: ["error", "global"]*/

        'use strict';

        var config = {
            config: {
                mixins: {
                    'Magento_Ui/js/view/messages': {
                        'Magento_ReCaptchaFrontendUi/js/ui-messages-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        // eslint-disable-next-line no-unused-vars
        var config = {
            config: {
                mixins: {
                    'Magento_Paypal/js/view/payment/method-renderer/payflowpro-method': {
                        'Magento_ReCaptchaPaypal/js/payflowpro-method-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        // eslint-disable-next-line no-unused-vars
        var config = {
            config: {
                mixins: {
                    'jquery': {
                        'Magento_ReCaptchaWebapiUi/js/jquery-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    mageTranslationDictionary: 'Magento_Translation/js/mage-translation-dictionary'
                }
            },
            deps: [
                'mageTranslationDictionary'
            ]
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    editTrigger: 'mage/edit-trigger',
                    addClass: 'Magento_Translation/js/add-class',
                    'Magento_Translation/add-class': 'Magento_Translation/js/add-class'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    configurableVariationQty: 'Magento_InventoryConfigurableProductFrontendUi/js/configurable-variation-qty'
                }
            },
            config: {
                mixins: {
                    'Magento_ConfigurableProduct/js/configurable': {
                        'Magento_InventoryConfigurableProductFrontendUi/js/configurable': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            config: {
                mixins: {
                    'Magento_Checkout/js/view/payment/list': {
                        'Magento_PaypalCaptcha/js/view/payment/list-mixin': true
                    },
                    'Magento_Paypal/js/view/payment/method-renderer/payflowpro-method': {
                        'Magento_PaypalCaptcha/js/view/payment/method-renderer/payflowpro-method-mixin': true
                    },
                    'Magento_Captcha/js/view/checkout/defaultCaptcha': {
                        'Magento_PaypalCaptcha/js/view/checkout/defaultCaptcha-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    'taxToggle': 'Magento_Weee/js/tax-toggle',
                    'Magento_Weee/tax-toggle': 'Magento_Weee/js/tax-toggle'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            map: {
                '*': {
                    wishlist: 'Magento_Wishlist/js/wishlist',
                    addToWishlist: 'Magento_Wishlist/js/add-to-wishlist',
                    wishlistSearch: 'Magento_Wishlist/js/search'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Copyright © 2015 Magento. All rights reserved.
         * See COPYING.txt for license details.
         */
        /*jshint browser:true jquery:true*/
        /*global alert*/
        var config = {
            config: {
                mixins: {
                    'Magento_Tax/js/view/checkout/summary/grand-total': {
                        'Adyen_Payment/js/view/checkout/summary/grand-total-mixin': true
                    },
                    'Magento_Checkout/js/action/set-shipping-information': {
                        'Adyen_Payment/js/model/set-shipping-information-mixin': true
                    },
                    'Magento_Multishipping/js/payment': {
                        'Adyen_Payment/js/view/checkout/multishipping/payment-mixin': true
                    },
                    'Magento_CheckoutAgreements/js/model/agreements-assigner': {
                        'Adyen_Payment/js/view/checkout/summary/agreements-assigner-mixin': true
                    },
                    'mage/validation': {
                        'Adyen_Payment/js/view/checkout/validator-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            paths: {
                'algoliaBundle': 'Algolia_AlgoliaSearch/internals/algoliaBundle.min',
                'algoliaAnalytics': 'Algolia_AlgoliaSearch/internals/search-insights',
                'rangeSlider': 'Algolia_AlgoliaSearch/navigation/range-slider-widget'
            },
            config: {
                mixins: {
                    'Magento_Catalog/js/catalog-add-to-cart': {
                        'Algolia_AlgoliaSearch/insights/add-to-cart-mixin': true
                    },
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            config: {
                mixins: {
                    'Magento_ConfigurableProduct/js/configurable': {
                        'Develo_ConfigurableProductSkuAdjustment/js/model/skuswitch': true
                    },
                    'Magento_Swatches/js/swatch-renderer': {
                        'Develo_ConfigurableProductSkuAdjustment/js/model/swatch-skuswitch': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            map: {
                '*': {
                    "develoGeolocation": "Develo_GeolocationRedirect/js/popup"
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Mageplaza
         *
         * NOTICE OF LICENSE
         *
         * This source file is subject to the mageplaza.com license that is
         * available through the world-wide-web at this URL:
         * https://www.mageplaza.com/LICENSE.txt
         *
         * DISCLAIMER
         *
         * Do not edit or add to this file if you wish to upgrade this extension to newer
         * version in the future.
         *
         * @category    Mageplaza
         * @package     Mageplaza_Core
         * @copyright   Copyright (c) Mageplaza (https://www.mageplaza.com/)
         * @license     https://www.mageplaza.com/LICENSE.txt
         */

        var config = {
            paths: {
                'mageplaza/core/jquery/popup': 'Mageplaza_Core/js/jquery.magnific-popup.min',
                'mageplaza/core/owl.carousel': 'Mageplaza_Core/js/owl.carousel.min',
                'mageplaza/core/bootstrap': 'Mageplaza_Core/js/bootstrap.min',
                mpIonRangeSlider: 'Mageplaza_Core/js/ion.rangeSlider.min',
                touchPunch: 'Mageplaza_Core/js/jquery.ui.touch-punch.min',
                mpDevbridgeAutocomplete: 'Mageplaza_Core/js/jquery.autocomplete.min'
            },
            shim: {
                "mageplaza/core/jquery/popup": ["jquery"],
                "mageplaza/core/owl.carousel": ["jquery"],
                "mageplaza/core/bootstrap": ["jquery"],
                mpIonRangeSlider: ["jquery"],
                mpDevbridgeAutocomplete: ["jquery"],
                touchPunch: ['jquery', 'jquery-ui-modules/core', 'jquery-ui-modules/mouse', 'jquery-ui-modules/widget']
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            map: {
                '*': {
                    configurable: 'Magento_ConfigurableProduct/js/configurable'
                }
            },
            config: {
                mixins: {
                    'Magento_Swatches/js/swatch-renderer': {
                        'GoGento_ConfigurableBundle/js/swatch-renderer-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            map: {
                '*': {
                    'highlight': 'MageArray_Faq/js/nwdthemes/jquery.highlight',
                    'collapse': 'MageArray_Faq/js/nwdthemes/jquery.collapse',
                    'faqpage': 'MageArray_Faq/js/nwdthemes/faqpage'
                }
            }
        };
        require.config(config);
    })();
    (function() {
        var config = {
            map: {
                '*': {
                    magepalGtmDatalayer: 'MagePal_GoogleTagManager/js/datalayer'
                }
            },
            shim: {
                'MagePal_GoogleTagManager/js/datalayer': ['Magento_Customer/js/customer-data']
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            map: {
                '*': {
                    addToCartGa4DataLayer: 'MagePal_GoogleAnalytics4/js/add-to-cart-datalayer',
                    addToCartAjaxGa4DataLayer: 'MagePal_GoogleAnalytics4/js/add-to-cart-ajax-datalayer',
                    dataLayerGa4ShareComponent: 'MagePal_GoogleAnalytics4/js/shared-component',
                    checkOutGa4DataLayer: 'MagePal_GoogleAnalytics4/js/checkout-datalayer',
                    ga4DataLayer: 'MagePal_GoogleAnalytics4/js/datalayer'
                }
            },
            config: {
                mixins: {
                    'Magento_Checkout/js/view/shipping': {
                        'MagePal_GoogleAnalytics4/js/mixin/shipping-mixin': true
                    },
                    'CyberSource_Address/js/view/cybersource-shipping': {
                        'MagePal_GoogleAnalytics4/js/mixin/shipping-mixin': true
                    },
                    'Magento_Checkout/js/view/payment/default': {
                        'MagePal_GoogleAnalytics4/js/mixin/payment/default-mixin': true
                    },
                    'Magento_Checkout/js/view/form/element/email': {
                        'MagePal_GoogleAnalytics4/js/mixin/view/form/element/email-mixin': true
                    },
                    'Aheadworks_OneStepCheckout/js/view/form/email': {
                        'MagePal_GoogleAnalytics4/js/mixin/aheadworks/onestepcheckout/view/form/email-mixin': true
                    },
                    'Aheadworks_OneStepCheckout/js/view/sidebar/item-details/qty': {
                        'MagePal_GoogleAnalytics4/js/mixin/aheadworks/onestepcheckout/view/sidebar/item-details/qty-mixin': true
                    },
                    'Aheadworks_OneStepCheckout/js/view/sidebar/item-details/actions': {
                        'MagePal_GoogleAnalytics4/js/mixin/aheadworks/onestepcheckout/view/sidebar/item-details/actions-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        /**
         * Mageplaza
         *
         * NOTICE OF LICENSE
         *
         * This source file is subject to the Mageplaza.com license that is
         * available through the world-wide-web at this URL:
         * https://www.mageplaza.com/LICENSE.txt
         *
         * DISCLAIMER
         *
         * Do not edit or add to this file if you wish to upgrade this extension to newer
         * version in the future.
         *
         * @category    Mageplaza
         * @package     Mageplaza_GiftCard
         * @copyright   Copyright (c) Mageplaza (https://www.mageplaza.com/)
         * @license     https://www.mageplaza.com/LICENSE.txt
         */

        var config = {
            config: {
                mixins: {
                    'Magento_Checkout/js/view/summary/shipping': {
                        'Mageplaza_GiftCard/js/view/summary/shipping-mixins': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            // Old code was removed. File left intentionally
        };

        require.config(config);
    })();
    (function() {
        var config = {
            config: {
                mixins: {
                    'Magento_Checkout/js/model/error-processor': {
                        'Swissup_AddressFieldManager/js/mixin/error-processor-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            config: {
                mixins: {
                    // Process json response
                    'Magento_Checkout/js/model/error-processor': {
                        'Swissup_AddressValidation/js/error-processor-mixin': true
                    },
                    'Magento_Checkout/js/model/shipping-save-processor/payload-extender': {
                        'Swissup_AddressValidation/js/shipping-payload-extender-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            config: {
                mixins: {
                    // Added ability to reload shipping rates
                    'Magento_Checkout/js/model/shipping-rate-service': {
                        'Swissup_Checkout/js/mixin/model/shipping-rate-service-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            config: {
                mixins: {
                    'Magento_Checkout/js/view/summary/item/details': {
                        'Swissup_CheckoutCart/js/view/details-mixin': true
                    },
                    'Magento_Checkout/js/model/resource-url-manager': {
                        'Swissup_CheckoutCart/js/model/resource-url-manager-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            config: {
                mixins: {
                    'Magento_Checkout/js/action/place-order': {
                        'Swissup_CheckoutFields/js/model/place-order-mixin': true
                    },
                    'Magento_Checkout/js/action/set-payment-information': {
                        'Swissup_CheckoutFields/js/model/set-payment-information-mixin': true
                    },
                    'Magento_Checkout/js/action/set-payment-information-extended': {
                        'Swissup_CheckoutFields/js/model/set-payment-information-extended-mixin': true
                    },
                    'Magento_Ui/js/form/element/abstract': {
                        'Swissup_CheckoutFields/js/mixin/form/element/abstract-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            config: {
                mixins: {
                    // Validate passwords on the shipping step
                    'Magento_Checkout/js/view/shipping': {
                        'Swissup_CheckoutRegistration/js/mixin/shipping-mixin': true
                    },
                    // Send data when saving shipping information
                    'Magento_Checkout/js/model/shipping-save-processor/payload-extender': {
                        'Swissup_CheckoutRegistration/js/mixin/shipping-payload-extender-mixin': true
                    },
                    // Send data when virtual quote is used
                    'Magento_Checkout/js/action/place-order': {
                        'Swissup_CheckoutRegistration/js/mixin/place-order-mixin': true
                    },
                    // Send data when virtual quote is used
                    'Magento_Checkout/js/action/set-payment-information': {
                        'Swissup_CheckoutRegistration/js/mixin/set-payment-information-mixin': true
                    },
                    // Send data when virtual quote is used
                    'Magento_Checkout/js/action/set-payment-information-extended': {
                        'Swissup_CheckoutRegistration/js/mixin/set-payment-information-extended-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            config: {
                mixins: {
                    // fix for the uk_UA, de_DE locales
                    'mage/utils/misc': {
                        'Swissup_DeliveryDate/js/mixin/utils/misc-mixin': true
                    },
                    'Magento_Checkout/js/view/shipping': {
                        'Swissup_DeliveryDate/js/mixin/shipping-mixin': true
                    },
                    // Compatibility with Magento < 2.2.2
                    'mage/storage': {
                        'Swissup_DeliveryDate/js/mixin/storage-mixin': true
                    },
                    // Magento >= 2.2.2
                    'Magento_Checkout/js/model/shipping-save-processor/payload-extender': {
                        'Swissup_DeliveryDate/js/mixin/payload-extender-mixin': true
                    },
                    'Magento_Ui/js/lib/validation/rules': {
                        'Swissup_DeliveryDate/js/validation/delivery-date-validate-date': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            config: {
                mixins: {
                    // Save shipping information before order was placed
                    'mage/storage': {
                        'Swissup_Firecheckout/js/mixin/model/storage-mixin': true
                    },
                    // 1. don't hide the message too quick
                    // 2. hide the message after 8 seconds instead of 5
                    'Magento_Ui/js/view/messages': {
                        'Swissup_Firecheckout/js/mixin/view/messages-mixin': true
                    },
                    // Scroll to error
                    'Magento_Checkout/js/model/error-processor': {
                        'Swissup_Firecheckout/js/mixin/model/error-processor-mixin': true
                    },
                    // Open steps for all modes except multistep-wizard
                    'Magento_Checkout/js/model/step-navigator': {
                        'Swissup_Firecheckout/js/mixin/model/step-navigator-mixin': true
                    },
                    // Add set-shipping-method and set-shipping-address urls
                    'Magento_Checkout/js/model/resource-url-manager': {
                        'Swissup_Firecheckout/js/mixin/model/resource-url-manager-mixin': true
                    },
                    // Set street as an array, if it's not set. Fixes Magento_Braintree issue.
                    'Magento_Checkout/js/model/address-converter': {
                        'Swissup_Firecheckout/js/mixin/model/address-converter-mixin': true
                    },
                    // Don't validate email on payment step unless it's a virtual purchase
                    'Magento_Checkout/js/model/customer-email-validator': {
                        'Swissup_Firecheckout/js/mixin/model/customer-email-validator-mixin': true
                    },
                    // Disable loader for specific components
                    'Magento_Checkout/js/model/full-screen-loader': {
                        'Swissup_Firecheckout/js/mixin/model/full-screen-loader-mixin': true
                    },
                    // Reduce validateDelay
                    'Magento_Checkout/js/model/shipping-rates-validator': {
                        'Swissup_Firecheckout/js/mixin/model/abstract-validator-mixin': true
                    },
                    // Reduce validateDelay
                    'Magento_Checkout/js/model/billing-address-postcode-validator': {
                        'Swissup_Firecheckout/js/mixin/model/abstract-validator-mixin': true
                    },
                    // Magento 2.2.8 fix for mistakenly equal billing and shipping addresses
                    'Magento_Checkout/js/action/select-billing-address': {
                        'Swissup_Firecheckout/js/mixin/action/select-billing-address-mixin': true
                    },
                    // Call payment methods recalculation on address data change
                    'Magento_Checkout/js/action/select-shipping-address': {
                        'Swissup_Firecheckout/js/mixin/action/select-shipping-address-mixin': true
                    },
                    // Prevent 400 Bad Request response when email is not filled in
                    'Magento_Checkout/js/action/set-payment-information-extended': {
                        'Swissup_Firecheckout/js/mixin/action/set-payment-information-extended-mixin': true
                    },
                    // Save/restore payment form data, prevent section update if needed
                    'Magento_Checkout/js/model/payment-service': {
                        'Swissup_Firecheckout/js/mixin/model/payment-service-mixin': true
                    },
                    // Prevent from saving invalid/empty billing address
                    'Magento_Checkout/js/view/billing-address': {
                        'Swissup_Firecheckout/js/mixin/view/billing-address-mixin': true
                    },
                    // Fix lost focus on email field
                    'Magento_Checkout/js/view/form/element/email': {
                        'Swissup_Firecheckout/js/mixin/view/email-mixin': true
                    },
                    // Dispatch fc:validate-shipping-information event
                    'Magento_Checkout/js/view/shipping': {
                        'Swissup_Firecheckout/js/mixin/view/shipping-mixin': true
                    },
                    // Always show shipping information
                    'Magento_Checkout/js/view/shipping-information': {
                        'Swissup_Firecheckout/js/mixin/view/shipping-information-mixin': true
                    },
                    // Always show order totals
                    'Magento_Checkout/js/view/summary/abstract-total': {
                        'Swissup_Firecheckout/js/mixin/view/summary/abstract-total-mixin': true
                    },
                    // Always show cart items
                    'Magento_Checkout/js/view/summary/cart-items': {
                        'Swissup_Firecheckout/js/mixin/view/summary/cart-items-mixin': true
                    },
                    // Select default shipping/payment methods
                    'Magento_Checkout/js/model/checkout-data-resolver': {
                        'Swissup_Firecheckout/js/mixin/model/checkout-data-resolver-mixin': true
                    },
                    // Set agreement checkbox id to be able to click 'I Agree' button in argeements popup
                    'Magento_CheckoutAgreements/js/view/checkout-agreements': {
                        'Swissup_Firecheckout/js/mixin/view/checkout-agreements-mixin': true
                    },
                    // Show 'I Agree' button in argeements popup
                    'Magento_CheckoutAgreements/js/model/agreements-modal': {
                        'Swissup_Firecheckout/js/mixin/model/agreements-modal-mixin': true
                    },
                    // Move iframe into modal popup
                    'Magento_Paypal/js/view/payment/method-renderer/iframe-methods': {
                        'Swissup_Firecheckout/js/mixin/view/payment/paypal/method-renderer/iframe-methods-mixin': true
                    },
                    // Disable validation when using onestep layout
                    'Magento_Paypal/js/view/payment/method-renderer/in-context/checkout-express': {
                        'Swissup_Firecheckout/js/mixin/view/payment/paypal/method-renderer/in-context/checkout-express-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            config: {
                mixins: {
                    // Disable page reload. Reload totals with ajax instead.
                    'Magento_GiftMessage/js/view/gift-message': {
                        'Swissup_FirecheckoutIntegrations/js/mixin/view/magento-gift-message-mixin': true
                    },
                    // Fixes to work without page reload and show resultBlock, when message is not set but options are.
                    'Magento_GiftWrapping/js/view/gift-wrapping': {
                        'Swissup_FirecheckoutIntegrations/js/mixin/view/magento-gift-wrapping-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            config: {
                mixins: {
                    // Add region and city to the address object
                    'Magento_Checkout/js/model/new-customer-address': {
                        'Swissup_Geoip/js/new-customer-address-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            map: {
                '*': {
                    orderAttachment: 'Swissup_Orderattachment/js/order-attachment'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            config: {
                mixins: {
                    'Magento_Checkout/js/action/place-order': {
                        'Swissup_Recaptcha/js/model/place-order-mixin': true
                    },
                    'Magento_Checkout/js/action/set-payment-information': {
                        'Swissup_Recaptcha/js/model/place-order-mixin': true
                    },
                    'Magento_Checkout/js/action/set-payment-information-extended': {
                        'Swissup_Recaptcha/js/model/place-order-mixin': true
                    },
                    // Paypal
                    'Magento_Paypal/js/action/set-payment-method': {
                        'Swissup_Recaptcha/js/model/place-order-mixin': true
                    },
                    // Amazon Payment
                    'Amazon_Payment/js/action/place-order': {
                        'Swissup_Recaptcha/js/model/place-order-mixin': true
                    },
                    // Mageplaza OSC
                    'Mageplaza_Osc/js/action/set-payment-method': {
                        'Swissup_Recaptcha/js/model/place-order-mixin': true
                    },
                    'Mageplaza_Osc/js/action/place-order': {
                        'Swissup_Recaptcha/js/model/place-order-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            map: {
                '*': {
                    'stickyfill': 'Swissup_Stickyfill/js/stickyfill'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            config: {
                mixins: {
                    'Magento_Checkout/js/action/place-order': {
                        'Swissup_SubscribeAtCheckout/js/model/place-order-mixin': true
                    },
                    'Magento_Checkout/js/action/set-payment-information': {
                        'Swissup_SubscribeAtCheckout/js/model/set-payment-information-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            config: {
                mixins: {
                    'Magento_Checkout/js/model/error-processor': {
                        'Swissup_Taxvat/js/model/error-processor-mixin': true
                    }
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            map: {
                '*': {
                    'tippy': 'Swissup_Tippyjs/js/tippy-wrapper',
                    '@popperjs/core': 'Swissup_Tippyjs/js/popper'
                }
            }
        };

        require.config(config);
    })();
    (function() {
        var config = {
            map: {
                '*': {
                    owl_carousel: 'WeltPixel_OwlCarouselSlider/js/owl.carousel',
                    owl_config: 'WeltPixel_OwlCarouselSlider/js/owl.config',
                    owlAjax: 'WeltPixel_OwlCarouselSlider/js/owlAjax'
                }
            },
            shim: {
                owl_carousel: {
                    deps: ['jquery']
                },
                owl_config: {
                    deps: ['jquery', 'owl_carousel']
                },
                owlAjax: {
                    deps: ['jquery', 'owl_carousel', 'owl_config']
                }
            }
        };
        require.config(config);
    })();
    (function() {
        /**
         * Copyright © Magento, Inc. All rights reserved.
         * See COPYING.txt for license details.
         */

        var config = {
            deps: [
                'Magento_Theme/js/theme'
            ]
        };

        require.config(config);
    })();
    (function() {
        var config = {
            shim: {
                "Adyen_Payment/js/model/adyen-configuration": ["Adyen_Payment/js/model/adyen-payment-service"]
            },
            map: {
                '*': {
                    "lpCatalogNavigation": "js/lp-catalog-navigation",
                    "lpFooter": "js/lp-footer",
                    "lpSidebar": "js/lp-sidebar",
                    "infoBar": "js/info-bar",
                    "searchUI": "js/search-ui",
                    "homepageTrending": "js/homepage-trending",
                    "swiper": "js/swiper-bundle.min",
                    "hoverintent": "js/vendor/hoverintent.min",
                    "videoPlayer": "js/video-player",
                    "productDetailTabs": "js/product-detail-tabs",
                    "develoFaq": "js/develo-faq",
                    "gallerySlider": "js/gallery-slider",
                    "productOverview": "js/product-overview",
                    "vue": "js/vendor/vue",
                    "alpine": "js/vendor/alpine.min",
                    "kitbuilder": "js/kitbuilder",
                    "algoliaFiltersExtended": "js/algolia-filters-extended",
                    "productQty": "js/product-qty",
                    "productSizeguide": "js/product-sizeguide",
                    "sizeguideJs": "js/sizeguide",
                    "productView": "js/product-view",
                    "productStockNotification": "js/product-stock-notification",
                    "kitbuilderDetailsSidebar": "js/kitbuilder-details-sidebar"
                }
            }
        };

        require.config(config);
    })();



})(require);