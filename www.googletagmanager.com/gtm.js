// Copyright 2012 Google Inc. All rights reserved.

(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');

(function() {

    var data = {
        "resource": {
            "version": "277",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__c",
                "vtp_value": "UA-40757602-1"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "isLoggedin"
            }, {
                "function": "__gas",
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_cookieDomain": "auto",
                "vtp_useEcommerceDataLayer": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useGA4SchemaForEcommerce": true,
                "vtp_metric": ["list", ["map", "index", "1", "metric", ["macro", 6]]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "2", "dimension", ["macro", 6]]],
                "vtp_enableEcommerce": true,
                "vtp_trackingId": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_ecommerceIsEnabled": true,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__c",
                "vtp_value": "3"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "itm_source",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__c",
                "vtp_value": "4"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "itm_medium",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__c",
                "vtp_value": "5"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "itm_campaign",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__c",
                "vtp_value": "6"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "itm_content",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__c",
                "vtp_value": "7"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "itm_term",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector(\".product-title\").innerText.trim();return a})();"]
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 1,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 21], 8, 16], ";if(a\u0026\u0026a.items)return a.items})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.transaction_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.affiliation"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.tax"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.shipping"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.currency"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.coupon"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector(\".total-price\\x3espan\").innerText.match(\/^(.*).{2}\/i)[1].trim();return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector(\".shipping\").innerText.match(\/^.{14}(.*).{0}\/i)[1].trim();return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector(\".number-product\").innerText.match(\/^.{17}(.*).{0}\/i)[1].trim();return a})();"]
            }, {
                "function": "__dbg"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "attributes.distance"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "attributes.label"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_useEcommerceDataLayer": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useGA4SchemaForEcommerce": true,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": true,
                "vtp_trackingId": "UA-40757602-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_ecommerceIsEnabled": true,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "attributes.distance"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "attributes.label"
            }, {
                "function": "__c",
                "vtp_value": "UA-40757602-1"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "isLoggedin"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_useEcommerceDataLayer": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_metric": ["list", ["map", "index", "1", "metric", ["macro", 42]]],
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "2", "dimension", ["macro", 42]]],
                "vtp_enableEcommerce": true,
                "vtp_trackingId": ["macro", 41],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_ecommerceIsEnabled": true,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-40757602-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventation"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventlabel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.items"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.revenue"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector(\".total-price\\x3espan\").innerText.match(\/^(.*).{2}\/i)[1].trim();return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector(\".shipping\").innerText.match(\/^.{14}(.*).{0}\/i)[1].trim();return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector(\".number-product\").innerText.match(\/^.{17}(.*).{0}\/i)[1].trim();return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector(\".product-title\").innerText.trim();return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.coupon"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.currency"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 1,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.affiliation"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.tax"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.transaction_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.shipping"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 55], 8, 16], ";if(a\u0026\u0026a.items)return a.items})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.value"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-40757602-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=$(\".well .row .col-xs-12.col-sm-7\").children(\"b\").siblings(\"b\");return b=$(a[1]).text()})();"]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-70271047-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventlabel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventation"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-40757602-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.revenue"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.items"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.shipping"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.currency"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.transaction_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.affiliation"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 1,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 74], 8, 16], ";if(a\u0026\u0026a.items)return a.items})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.tax"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.coupon"
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorMessage",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorLineNumber",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.newUrlFragment",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.oldUrlFragment",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.newHistoryState",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.oldHistoryState",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.historyChangeSource",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__ctv"
            }, {
                "function": "__r"
            }, {
                "function": "__cid"
            }, {
                "function": "__hid"
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoProvider",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoTitle",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoDuration",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoPercent",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoVisible",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoStatus",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoCurrentTime",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollUnits",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollDirection",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleRatio",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleTime",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__gaawc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendPageView": true,
                "vtp_enableSendToServerContainer": false,
                "vtp_measurementId": "G-1VT7WZXHW7",
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": false,
                "tag_id": 311
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_eventName": "add_to_cart",
                "vtp_measurementId": "G-1VT7WZXHW7",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "tag_id": 312
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "click icon Cart",
                "vtp_eventLabel": ["macro", 3],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_eventValue": "1",
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 314
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Add to Cart (Buy Now)",
                "vtp_eventLabel": ["macro", 3],
                "vtp_useEcommerceDataLayer": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useGA4SchemaForEcommerce": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": true,
                "vtp_trackingId": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 331
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Product Click",
                "vtp_eventLabel": ["macro", 3],
                "vtp_useEcommerceDataLayer": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useGA4SchemaForEcommerce": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": true,
                "vtp_trackingId": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 334
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_gaSettings": ["macro", 7],
                "vtp_useEcommerceDataLayer": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": true,
                "vtp_setTrackerName": false,
                "vtp_useGA4SchemaForEcommerce": false,
                "vtp_metric": ["list", ["map", "index", "1", "metric", ["macro", 6]]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "2", "dimension", ["macro", 6]],
                    ["map", "index", ["macro", 8], "dimension", ["macro", 9]],
                    ["map", "index", ["macro", 10], "dimension", ["macro", 11]],
                    ["map", "index", ["macro", 12], "dimension", ["macro", 13]],
                    ["map", "index", ["macro", 14], "dimension", ["macro", 15]],
                    ["map", "index", ["macro", 16], "dimension", ["macro", 17]]
                ],
                "vtp_enableEcommerce": true,
                "vtp_trackingId": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 345
            }, {
                "function": "__gclidw",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableUrlPassthrough": false,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "tag_id": 346
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_eventName": "begin_checkout",
                "vtp_eventParameters": ["list", ["map", "name", "item_name", "value", ["macro", 18]]],
                "vtp_measurementId": "G-1VT7WZXHW7",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "tag_id": 348
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "937291173",
                "vtp_currencyCode": "VND",
                "vtp_conversionLabel": "BAH5CJKMqGwQpdv3vgM",
                "vtp_rdp": false,
                "vtp_url": ["macro", 19],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 350
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_eventName": "view_cart",
                "vtp_eventParameters": ["list", ["map", "name", "item_name", "value", ["macro", 18]]],
                "vtp_measurementId": "G-1VT7WZXHW7",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "tag_id": 357
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": ["macro", 20],
                "vtp_eventParameters": ["list", ["map", "name", "items", "value", ["macro", 22]],
                    ["map", "name", "transaction_id", "value", ["macro", 23]],
                    ["map", "name", "affiliation", "value", ["macro", 24]],
                    ["map", "name", "value", "value", ["macro", 25]],
                    ["map", "name", "tax", "value", ["macro", 26]],
                    ["map", "name", "shipping", "value", ["macro", 27]],
                    ["map", "name", "currency", "value", ["macro", 28]],
                    ["map", "name", "coupon", "value", ["macro", 29]]
                ],
                "vtp_measurementId": "none",
                "vtp_measurementIdOverride": "G-1VT7WZXHW7",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "tag_id": 365
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "11024557318",
                "vtp_conversionLabel": "7wppCI6EioMYEIbK9Ygp",
                "vtp_rdp": false,
                "vtp_url": ["macro", 19],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 367
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": true,
                "vtp_trackingId": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 369
            }, {
                "function": "__sp",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "11024557318",
                "vtp_customParamsFormat": "NONE",
                "vtp_rdp": false,
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 19],
                "vtp_enableRdpCheckbox": true,
                "vtp_enableConversionLinkingSettings": true,
                "tag_id": 370
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_eventName": "purchase",
                "vtp_eventParameters": ["list", ["map", "name", "value", "value", ["macro", 30]],
                    ["map", "name", "shipping", "value", ["macro", 31]],
                    ["map", "name", "quantity", "value", ["macro", 32]],
                    ["map", "name", "item_name", "value", ["macro", 18]]
                ],
                "vtp_measurementId": "G-1VT7WZXHW7",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "tag_id": 376
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Remove cart",
                "vtp_eventLabel": ["macro", 3],
                "vtp_useEcommerceDataLayer": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useGA4SchemaForEcommerce": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": true,
                "vtp_trackingId": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 379
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 381
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_eventName": "button_view_cua_hang",
                "vtp_measurementId": "G-1VT7WZXHW7",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "tag_id": 388
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_useDebugVersion": ["macro", 33],
                "vtp_eventCategory": "Scroll Tracking",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": ["macro", 34],
                "vtp_eventLabel": ["macro", 35],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "cookieDomain", "value", "auto"]],
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 392
            }, {
                "function": "__sp",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_conversionId": "10907511727",
                "vtp_customParamsFormat": "NONE",
                "vtp_rdp": false,
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 19],
                "vtp_enableRdpCheckbox": true,
                "vtp_enableConversionLinkingSettings": true,
                "tag_id": 393
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "Click balloon popup",
                "vtp_measurementId": "G-1VT7WZXHW7",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "tag_id": 396
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "10955293785",
                "vtp_conversionLabel": "9gbkCOODktIDENmI8uco",
                "vtp_rdp": false,
                "vtp_url": ["macro", 19],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 403
            }, {
                "function": "__sp",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_conversionId": "937291173",
                "vtp_customParamsFormat": "NONE",
                "vtp_rdp": false,
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 19],
                "vtp_enableRdpCheckbox": true,
                "vtp_enableConversionLinkingSettings": true,
                "tag_id": 406
            }, {
                "function": "__paused",
                "vtp_originalTagType": "gaawe",
                "tag_id": 419
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_TRANSACTION",
                "vtp_gaSettings": ["macro", 36],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsTransaction": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 420
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "Đăng ký Thành Viên",
                "vtp_measurementId": "G-1VT7WZXHW7",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "tag_id": 424
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "Đăng nhập",
                "vtp_measurementId": "G-1VT7WZXHW7",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "tag_id": 426
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "Mua hàng - không đăng nhập",
                "vtp_measurementId": "G-1VT7WZXHW7",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "tag_id": 428
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "Mua hàng - đăng nhập",
                "vtp_measurementId": "G-1VT7WZXHW7",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "tag_id": 430
            }, {
                "function": "__cvt_2133962_434",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_ga_ecomm": "enhance_ecomm",
                "vtp_pixel_code": "7213341961770647553",
                "vtp_event": "AddToCart",
                "vtp_enhance_ecomm": true,
                "vtp_hash": "hashed",
                "tag_id": 437
            }, {
                "function": "__cvt_2133962_434",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_ga_ecomm": "enhance_ecomm",
                "vtp_pixel_code": "7213341961770647553",
                "vtp_event": "CompletePayment",
                "vtp_enhance_ecomm": true,
                "vtp_hash": "hashed",
                "tag_id": 438
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "10927294648",
                "vtp_currencyCode": "VND",
                "vtp_conversionLabel": "ELuWCL3Xy5oYELiRxdoo",
                "vtp_rdp": false,
                "vtp_url": ["macro", 19],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 449
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "877539472",
                "vtp_conversionLabel": "oaVMCIinw5sYEJDhuKID",
                "vtp_rdp": false,
                "vtp_url": ["macro", 19],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 450
            }, {
                "function": "__sp",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "877539472",
                "vtp_customParamsFormat": "NONE",
                "vtp_rdp": false,
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 19],
                "vtp_enableRdpCheckbox": true,
                "vtp_enableConversionLinkingSettings": true,
                "tag_id": 451
            }, {
                "function": "__cl",
                "tag_id": 452
            }, {
                "function": "__cl",
                "tag_id": 453
            }, {
                "function": "__cl",
                "tag_id": 454
            }, {
                "function": "__cl",
                "tag_id": 455
            }, {
                "function": "__cl",
                "tag_id": 456
            }, {
                "function": "__cl",
                "tag_id": 457
            }, {
                "function": "__cl",
                "tag_id": 458
            }, {
                "function": "__cl",
                "tag_id": 459
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2133962_189",
                "tag_id": 460
            }, {
                "function": "__cl",
                "tag_id": 461
            }, {
                "function": "__cl",
                "tag_id": 462
            }, {
                "function": "__cl",
                "tag_id": 463
            }, {
                "function": "__cl",
                "tag_id": 464
            }, {
                "function": "__cl",
                "tag_id": 465
            }, {
                "function": "__cl",
                "tag_id": 466
            }, {
                "function": "__cl",
                "tag_id": 467
            }, {
                "function": "__cl",
                "tag_id": 468
            }, {
                "function": "__cl",
                "tag_id": 469
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2133962_323",
                "tag_id": 470
            }, {
                "function": "__cl",
                "tag_id": 471
            }, {
                "function": "__cl",
                "tag_id": 472
            }, {
                "function": "__cl",
                "tag_id": 473
            }, {
                "function": "__cl",
                "tag_id": 474
            }, {
                "function": "__cl",
                "tag_id": 475
            }, {
                "function": "__cl",
                "tag_id": 476
            }, {
                "function": "__cl",
                "tag_id": 477
            }, {
                "function": "__cl",
                "tag_id": 478
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "15000",
                "vtp_limit": "1",
                "vtp_uniqueTriggerId": "2133962_384",
                "tag_id": 479
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "5000",
                "vtp_limit": "1",
                "vtp_uniqueTriggerId": "2133962_385",
                "tag_id": 480
            }, {
                "function": "__cl",
                "tag_id": 481
            }, {
                "function": "__cl",
                "tag_id": 482
            }, {
                "function": "__cl",
                "tag_id": 483
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2133962_423",
                "tag_id": 484
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": true,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2133962_425",
                "tag_id": 485
            }, {
                "function": "__cl",
                "tag_id": 486
            }, {
                "function": "__cl",
                "tag_id": 487
            }, {
                "function": "__html",
                "vtp_html": "\n\t\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods=\"page track identify instances debug on off once ready alias group enableCookie disableCookie\".split(\" \");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f=\"https:\/\/analytics.tiktok.com\/i18n\/pixel\/events.js\";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement(\"script\");c.type=\"text\/javascript\";c.async=!0;c.src=f+\"?sdkid\\x3d\"+b+\"\\x26lib\\x3d\"+e;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)};a.load(\"CGE1CKJC77U734TI362G\");a.page()}(window,document,\"ttq\");\u003C\/script\u003E\n\t",
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 431
            }, {
                "function": "__html",
                "vtp_html": "\n\t\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods=\"page track identify instances debug on off once ready alias group enableCookie disableCookie\".split(\" \");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f=\"https:\/\/analytics.tiktok.com\/i18n\/pixel\/events.js\";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement(\"script\");c.type=\"text\/javascript\";c.async=!0;c.src=f+\"?sdkid\\x3d\"+b+\"\\x26lib\\x3d\"+e;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)};a.load(\"CGEHJJJC77U845ORLVH0\");a.page()}(window,document,\"ttq\");\u003C\/script\u003E\n\t",
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 433
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\t\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods=\"page track identify instances debug on off once ready alias group enableCookie disableCookie\".split(\" \");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f=\"https:\/\/analytics.tiktok.com\/i18n\/pixel\/events.js\";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement(\"script\");c.type=\"text\/javascript\";c.async=!0;c.src=f+\"?sdkid\\x3d\"+b+\"\\x26lib\\x3d\"+e;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)};a.load(\"CGEHJJJC77U845ORLVH0\");a.page()}(window,document,\"ttq\");\u003C\/script\u003E\n\t",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 435
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "MUA NGAY"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.click"
            }, {
                "function": "_cn",
                "arg0": ["macro", 2],
                "arg1": "vas-icon-bag"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "cart\/completed"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "addcart"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "addToCart"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "productClick"
            }, {
                "function": "_cn",
                "arg0": ["macro", 3],
                "arg1": "\/cart\/checkout"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "transaction"
            }, {
                "function": "_ew",
                "arg0": ["macro", 3],
                "arg1": "\/cart"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "view_item|view_item_list|select_item|add_to_cart|remove_from_cart|view_cart|begin_checkout|add_payment_info|add_shipping_info|purchase"
            }, {
                "function": "_cn",
                "arg0": ["macro", 3],
                "arg1": "\/cart\/completed"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "removeFromCart"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "promotionClick"
            }, {
                "function": "_sw",
                "arg0": ["macro", 1],
                "arg1": "SẢN PHẨM CÓ TẠI"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "scrollTracking"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "balloon-link-img"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "ĐĂNG KÝ"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 37],
                "arg1": "(^$|((^|,)2133962_423($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 2],
                "arg1": "next action-button"
            }, {
                "function": "_re",
                "arg0": ["macro", 37],
                "arg1": "(^$|((^|,)2133962_425($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 38],
                "arg1": "newuser"
            }, {
                "function": "_cn",
                "arg0": ["macro", 38],
                "arg1": "olduser"
            }, {
                "function": "_re",
                "arg0": ["macro", 5],
                "arg1": ".*",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "https:\/\/www.vascara.com\/login\/"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 5, 6, 13, 19, 22, 33, 70, 71, 72, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 63, 64, 65, 66, 68, 69]
                ],
                [
                    ["if", 1, 2],
                    ["add", 1]
                ],
                [
                    ["if", 2, 3],
                    ["add", 2]
                ],
                [
                    ["if", 2, 5],
                    ["add", 3, 29]
                ],
                [
                    ["if", 6],
                    ["add", 3, 29]
                ],
                [
                    ["if", 7],
                    ["add", 4]
                ],
                [
                    ["if", 0, 8],
                    ["add", 7]
                ],
                [
                    ["if", 9],
                    ["add", 8, 24, 31, 32]
                ],
                [
                    ["if", 0, 10],
                    ["add", 9]
                ],
                [
                    ["if", 11],
                    ["add", 10, 23]
                ],
                [
                    ["if", 0, 4],
                    ["add", 11, 12, 21, 30]
                ],
                [
                    ["if", 0, 12],
                    ["add", 14]
                ],
                [
                    ["if", 13],
                    ["add", 15]
                ],
                [
                    ["if", 14],
                    ["add", 16]
                ],
                [
                    ["if", 2, 15],
                    ["add", 17]
                ],
                [
                    ["if", 16],
                    ["add", 18]
                ],
                [
                    ["if", 2, 17],
                    ["add", 20]
                ],
                [
                    ["if", 18, 19, 20],
                    ["add", 25]
                ],
                [
                    ["if", 19, 21, 22],
                    ["add", 26]
                ],
                [
                    ["if", 2, 23],
                    ["add", 27]
                ],
                [
                    ["if", 2, 24],
                    ["add", 28]
                ],
                [
                    ["if", 0, 25],
                    ["add", 61, 62]
                ],
                [
                    ["if", 0, 26],
                    ["add", 67]
                ]
            ]
        },
        "runtime": [
                [50, "__cvt_2133962_434", [46, "a"],
                    [52, "b", "0_1_20"],
                    [52, "c", ["require", "logToConsole"]],
                    [52, "d", ["require", "copyFromWindow"]],
                    [52, "e", ["require", "copyFromDataLayer"]],
                    [52, "f", ["require", "makeNumber"]],
                    [52, "g", ["require", "callInWindow"]],
                    [52, "h", ["require", "Object"]],
                    [52, "i", ["require", "JSON"]],
                    [52, "j", ["e", "ecommerce"]],
                    [52, "k", [8, "ViewContent", 1, "ClickButton", 1, "Search", 1, "AddToWishlist", 1, "AddToCart", 1, "InitiateCheckout", 1, "AddPaymentInfo", 1, "CompletePayment", 1, "PlaceAnOrder", 1, "Contact", 1, "Download", 1, "SubmitForm", 1, "CompleteRegistration", 1, "Subscribe", 1]],
                    [52, "l", [51, "", [7, "u"],
                        [36, [21, [40, ["d", [15, "u"]]], "undefined"]]
                    ]],
                    [52, "m", [51, "", [7, "u"],
                        [36, [1, [15, "u"],
                            [12, [17, [15, "u"], "length"], 64]
                        ]]
                    ]],
                    [52, "n", [51, "", [7, "u"],
                        [41, "v", "w", "x", "y"],
                        [3, "v", 0],
                        [22, [17, [15, "u"], "email"],
                            [46, [3, "v", [0, [15, "v"], 1]]],
                            [46, [22, [17, [15, "u"], "sha256_email"],
                                [46, [3, "v", [0, [15, "v"], 2]]]
                            ]]
                        ],
                        [3, "w", 0],
                        [22, [17, [15, "u"], "phone"],
                            [46, [3, "w", [0, [15, "w"], 1]]],
                            [46, [22, [17, [15, "u"], "sha256_phone"],
                                [46, [3, "w", [0, [15, "w"], 2]]]
                            ]]
                        ],
                        [3, "x", 0],
                        [22, [17, [15, "u"], "external_id"],
                            [46, [3, "x", [0, [15, "x"], 1]]],
                            [46, [22, [17, [15, "u"], "sha256_external_id"],
                                [46, [3, "x", [0, [15, "x"], 2]]]
                            ]]
                        ],
                        [3, "y", 0],
                        [22, [1, [12, [17, [15, "u"], "enhance_ecomm"], false],
                                [12, [17, [15, "u"], "single_multi_product"], "empty"]
                            ],
                            [46, [3, "y", 1]],
                            [46, [22, [1, [12, [17, [15, "u"], "enhance_ecomm"], false],
                                    [12, [17, [15, "u"], "single_multi_product"], "single"]
                                ],
                                [46, [3, "y", 2]],
                                [46, [22, [1, [12, [17, [15, "u"], "enhance_ecomm"], false],
                                        [12, [17, [15, "u"], "single_multi_product"], "multiple"]
                                    ],
                                    [46, [3, "y", 3]],
                                    [46, [22, [1, [12, [17, [15, "u"], "enhance_ecomm"], true],
                                            [12, [17, [15, "u"], "ga_ecomm"], "enhance_ecomm"]
                                        ],
                                        [46, [3, "y", 4]],
                                        [46, [22, [1, [12, [17, [15, "u"], "enhance_ecomm"], true],
                                                [12, [17, [15, "u"], "ga_ecomm"], "ecomm"]
                                            ],
                                            [46, [3, "y", 5]]
                                        ]]
                                    ]]
                                ]]
                            ]]
                        ],
                        [36, [0, [0, [0, [0, "", [15, "v"]],
                                    [15, "w"]
                                ],
                                [15, "x"]
                            ],
                            [15, "y"]
                        ]]
                    ]],
                    [52, "o", [51, "", [7, "u", "v"],
                        [22, [28, [15, "v"]],
                            [46, [36, [45]]]
                        ],
                        [22, [1, [1, [12, [17, [15, "u"], "event"], "ViewContent"],
                                    [17, [15, "v"], "detail"]
                                ],
                                [17, [17, [15, "v"], "detail"], "products"]
                            ],
                            [46, [36, [17, [17, [15, "v"], "detail"], "products"]]],
                            [46, [22, [1, [1, [12, [17, [15, "u"], "event"], "AddToCart"],
                                        [17, [15, "v"], "add"]
                                    ],
                                    [17, [17, [15, "v"], "add"], "products"]
                                ],
                                [46, [36, [17, [17, [15, "v"], "add"], "products"]]],
                                [46, [22, [1, [1, [30, [12, [17, [15, "u"], "event"], "InitiateCheckout"],
                                                [12, [17, [15, "u"], "event"], "AddPaymentInfo"]
                                            ],
                                            [17, [15, "v"], "checkout"]
                                        ],
                                        [17, [17, [15, "v"], "checkout"], "products"]
                                    ],
                                    [46, [36, [17, [17, [15, "v"], "checkout"], "products"]]],
                                    [46, [22, [1, [1, [30, [30, [12, [17, [15, "u"], "event"], "CompletePayment"],
                                                        [12, [17, [15, "u"], "event"], "PlaceAnOrder"]
                                                    ],
                                                    [12, [17, [15, "u"], "event"], "Subscribe"]
                                                ],
                                                [17, [15, "v"], "purchase"]
                                            ],
                                            [17, [17, [15, "v"], "purchase"], "products"]
                                        ],
                                        [46, [36, [17, [17, [15, "v"], "purchase"], "products"]]],
                                        [46, [22, [1, [17, [15, "v"], "detail"],
                                                    [17, [17, [15, "v"], "detail"], "products"]
                                                ],
                                                [46, [36, [17, [17, [15, "v"], "detail"], "products"]]]
                                            ],
                                            [22, [1, [17, [15, "v"], "add"],
                                                    [17, [17, [15, "v"], "add"], "products"]
                                                ],
                                                [46, [36, [17, [17, [15, "v"], "add"], "products"]]]
                                            ],
                                            [22, [1, [17, [15, "v"], "checkout"],
                                                    [17, [17, [15, "v"], "checkout"], "products"]
                                                ],
                                                [46, [36, [17, [17, [15, "v"], "checkout"], "products"]]]
                                            ],
                                            [22, [1, [17, [15, "v"], "purchase"],
                                                    [17, [17, [15, "v"], "purchase"], "products"]
                                                ],
                                                [46, [36, [17, [17, [15, "v"], "purchase"], "products"]]]
                                            ]
                                        ]
                                    ]]
                                ]]
                            ]]
                        ],
                        [36, [45]]
                    ]],
                    [52, "p", [51, "", [7, "u"],
                        [41, "v"],
                        [3, "v", [7]],
                        [22, [17, [15, "u"], "item_category"],
                            [46, [2, [15, "v"], "push", [7, [17, [15, "u"], "item_category"]]]]
                        ],
                        [22, [17, [15, "u"], "item_category2"],
                            [46, [2, [15, "v"], "push", [7, [17, [15, "u"], "item_category2"]]]]
                        ],
                        [22, [17, [15, "u"], "item_category3"],
                            [46, [2, [15, "v"], "push", [7, [17, [15, "u"], "item_category3"]]]]
                        ],
                        [22, [17, [15, "u"], "item_category4"],
                            [46, [2, [15, "v"], "push", [7, [17, [15, "u"], "item_category4"]]]]
                        ],
                        [22, [17, [15, "u"], "item_category5"],
                            [46, [2, [15, "v"], "push", [7, [17, [15, "u"], "item_category5"]]]]
                        ],
                        [22, [18, [17, [15, "v"], "length"], 0],
                            [46, [36, [2, [15, "v"], "join", [7, ","]]]]
                        ],
                        [36, [45]]
                    ]],
                    [52, "q", [51, "", [7, "u", "v"],
                        [41, "w", "x", "y"],
                        [3, "w", 0],
                        [3, "x", "USD"],
                        [3, "y", [7]],
                        [22, [1, [15, "v"],
                                [17, [15, "v"], "items"]
                            ],
                            [46, ["c", "1a. Standard Ecommerce - Data layers detected"],
                                [2, [17, [15, "v"], "items"], "map", [7, [51, "", [7, "ba"],
                                    [41, "bb", "bc"],
                                    [3, "bb", [8]],
                                    [22, [17, [15, "ba"], "item_id"],
                                        [46, [43, [15, "bb"], "content_id", [17, [15, "ba"], "item_id"]]]
                                    ],
                                    [22, [1, [28, [17, [15, "ba"], "item_id"]],
                                            [17, [15, "ba"], "id"]
                                        ],
                                        [46, [43, [15, "bb"], "content_id", [17, [15, "ba"], "id"]]]
                                    ],
                                    [22, [17, [15, "ba"], "item_name"],
                                        [46, [43, [15, "bb"], "content_name", [17, [15, "ba"], "item_name"]]]
                                    ],
                                    [22, [17, [15, "ba"], "item_brand"],
                                        [46, [43, [15, "bb"], "brand", [17, [15, "ba"], "item_brand"]]]
                                    ],
                                    [3, "bc", ["p", [15, "ba"]]],
                                    [22, [15, "bc"],
                                        [46, [43, [15, "bb"], "content_category", [15, "bc"]]]
                                    ],
                                    [22, [17, [15, "ba"], "price"],
                                        [46, [43, [15, "bb"], "price", ["f", [17, [15, "ba"], "price"]]]]
                                    ],
                                    [22, [17, [15, "ba"], "quantity"],
                                        [46, [43, [15, "bb"], "quantity", ["f", [17, [15, "ba"], "quantity"]]]],
                                        [46, [43, [15, "bb"], "quantity", 1]]
                                    ],
                                    [43, [15, "bb"], "content_type", "product"],
                                    [2, [15, "y"], "push", [7, [15, "bb"]]],
                                    [22, [17, [15, "ba"], "price"],
                                        [46, [22, [28, [17, [15, "ba"], "quantity"]],
                                                [46, [43, [15, "ba"], "quantity", 1]]
                                            ],
                                            [3, "w", [0, [15, "w"],
                                                [26, [17, [15, "ba"], "price"],
                                                    [17, [15, "ba"], "quantity"]
                                                ]
                                            ]]
                                        ]
                                    ]
                                ]]]
                            ],
                            [46, [22, [12, [17, [15, "u"], "ga_ecomm"], "ecomm"],
                                [46, ["c", "1a. Standard Ecommerce - Unable to detect any Data Layers"]]
                            ]]
                        ],
                        [52, "z", ["o", [15, "u"],
                            [15, "v"]
                        ]],
                        [22, [1, [21, [15, "z"],
                                    [45]
                                ],
                                [12, [17, [15, "y"], "length"], 0]
                            ],
                            [46, ["c", "1b. Enhanced Ecommerce - Data layers detected"],
                                [2, [15, "z"], "map", [7, [51, "", [7, "ba"],
                                    [41, "bb"],
                                    [3, "bb", [8]],
                                    [22, [17, [15, "ba"], "id"],
                                        [46, [43, [15, "bb"], "content_id", [17, [15, "ba"], "id"]]]
                                    ],
                                    [22, [17, [15, "ba"], "name"],
                                        [46, [43, [15, "bb"], "content_name", [17, [15, "ba"], "name"]]]
                                    ],
                                    [22, [17, [15, "ba"], "brand"],
                                        [46, [43, [15, "bb"], "brand", [17, [15, "ba"], "brand"]]]
                                    ],
                                    [22, [17, [15, "ba"], "category"],
                                        [46, [43, [15, "bb"], "content_category", [17, [15, "ba"], "category"]]]
                                    ],
                                    [22, [17, [15, "ba"], "price"],
                                        [46, [43, [15, "bb"], "price", ["f", [17, [15, "ba"], "price"]]]]
                                    ],
                                    [22, [17, [15, "ba"], "quantity"],
                                        [46, [43, [15, "bb"], "quantity", ["f", [17, [15, "ba"], "quantity"]]]],
                                        [46, [43, [15, "bb"], "quantity", 1]]
                                    ],
                                    [43, [15, "bb"], "content_type", "product"],
                                    [2, [15, "y"], "push", [7, [15, "bb"]]],
                                    [22, [17, [15, "ba"], "price"],
                                        [46, [22, [28, [17, [15, "ba"], "quantity"]],
                                                [46, [43, [15, "ba"], "quantity", 1]]
                                            ],
                                            [3, "w", [0, [15, "w"],
                                                [26, [17, [15, "ba"], "price"],
                                                    [17, [15, "ba"], "quantity"]
                                                ]
                                            ]]
                                        ]
                                    ]
                                ]]]
                            ],
                            [46, [22, [12, [17, [15, "u"], "ga_ecomm"], "enhance_ecomm"],
                                [46, ["c", "1b. Enhanced Ecommerce - Unable to detect any ecommerce data layers"]]
                            ]]
                        ],
                        [22, [15, "v"],
                            [46, [22, [17, [15, "v"], "currencyCode"],
                                    [46, [3, "x", [17, [15, "v"], "currencyCode"]]],
                                    [46, [22, [17, [15, "v"], "currency"],
                                        [46, [3, "x", [17, [15, "v"], "currency"]]]
                                    ]]
                                ],
                                [22, [17, [15, "v"], "value"],
                                    [46, [3, "w", [17, [15, "v"], "value"]]],
                                    [46, [22, [1, [1, [17, [15, "v"], "purchase"],
                                                [17, [17, [15, "v"], "purchase"], "actionField"]
                                            ],
                                            [17, [17, [17, [15, "v"], "purchase"], "actionField"], "revenue"]
                                        ],
                                        [46, [3, "w", [17, [17, [17, [15, "v"], "purchase"], "actionField"], "revenue"]]]
                                    ]]
                                ]
                            ]
                        ],
                        [36, [8, "value", [15, "w"], "currency", [15, "x"], "contents", [15, "y"]]]
                    ]],
                    [52, "r", [51, "", [7],
                        [41, "u", "v"],
                        [3, "u", [8, "gtm_version", [0, [0, [15, "b"], ":"],
                            ["n", [15, "a"]]
                        ]]],
                        [22, [12, [17, [15, "a"], "enhance_ecomm"], true],
                            [46, [53, [52, "w", ["q", [15, "a"],
                                    [15, "j"]
                                ]],
                                [43, [15, "u"], "currency", [17, [15, "w"], "currency"]],
                                [43, [15, "u"], "value", [17, [15, "w"], "value"]],
                                [22, [1, [17, [15, "w"], "contents"],
                                        [18, [17, [17, [15, "w"], "contents"], "length"], 0]
                                    ],
                                    [46, [43, [15, "u"], "contents", [17, [15, "w"], "contents"]]]
                                ]
                            ]],
                            [46, [22, [12, [17, [15, "a"], "single_multi_product"], "single"],
                                [46, [22, [17, [15, "a"], "content_id"],
                                        [46, [43, [15, "u"], "content_id", [17, [15, "a"], "content_id"]]]
                                    ],
                                    [22, [17, [15, "a"], "content_type"],
                                        [46, [43, [15, "u"], "content_type", [17, [15, "a"], "content_type"]]]
                                    ],
                                    [22, [17, [15, "a"], "content_name"],
                                        [46, [43, [15, "u"], "content_name", [17, [15, "a"], "content_name"]]]
                                    ],
                                    [22, [17, [15, "a"], "price"],
                                        [46, [43, [15, "u"], "price", ["f", [17, [15, "a"], "price"]]]]
                                    ],
                                    [22, [17, [15, "a"], "quantity"],
                                        [46, [43, [15, "u"], "quantity", ["f", [17, [15, "a"], "quantity"]]]]
                                    ],
                                    [22, [17, [15, "a"], "currency"],
                                        [46, [43, [15, "u"], "currency", [17, [15, "a"], "currency"]]]
                                    ],
                                    [22, [17, [15, "a"], "value"],
                                        [46, [43, [15, "u"], "value", ["f", [17, [15, "a"], "value"]]]],
                                        [46, [22, [1, [17, [15, "a"], "price"],
                                                [17, [15, "a"], "quantity"]
                                            ],
                                            [46, [43, [15, "u"], "value", [26, ["f", [17, [15, "a"], "price"]],
                                                ["f", [17, [15, "a"], "quantity"]]
                                            ]]]
                                        ]]
                                    ],
                                    [22, [17, [15, "a"], "content_category"],
                                        [46, [43, [15, "u"], "content_category", [17, [15, "a"], "content_category"]]]
                                    ],
                                    [22, [17, [15, "a"], "description"],
                                        [46, [43, [15, "u"], "description", [17, [15, "a"], "description"]]]
                                    ],
                                    [22, [17, [15, "a"], "query"],
                                        [46, [43, [15, "u"], "query", [17, [15, "a"], "query"]]]
                                    ],
                                    [22, [17, [15, "a"], "status"],
                                        [46, [43, [15, "u"], "status", [17, [15, "a"], "status"]]]
                                    ]
                                ],
                                [46, [22, [12, [17, [15, "a"], "single_multi_product"], "multiple"],
                                    [46, [22, [17, [15, "a"], "contents"],
                                            [46, [53, [52, "w", [2, [15, "i"], "parse", [7, [17, [15, "a"], "contents"]]]],
                                                [22, [21, [15, "w"],
                                                        [44]
                                                    ],
                                                    [46, [43, [15, "u"], "contents", [15, "w"]]],
                                                    [46, [43, [15, "u"], "contents", [17, [15, "a"], "contents"]]]
                                                ]
                                            ]]
                                        ],
                                        [22, [17, [15, "a"], "currency"],
                                            [46, [43, [15, "u"], "currency", [17, [15, "a"], "currency"]]]
                                        ],
                                        [22, [17, [15, "a"], "value"],
                                            [46, [43, [15, "u"], "value", ["f", [17, [15, "a"], "value"]]]]
                                        ],
                                        [22, [17, [15, "a"], "description"],
                                            [46, [43, [15, "u"], "description", [17, [15, "a"], "description"]]]
                                        ],
                                        [22, [17, [15, "a"], "query"],
                                            [46, [43, [15, "u"], "query", [17, [15, "a"], "query"]]]
                                        ],
                                        [22, [17, [15, "a"], "status"],
                                            [46, [43, [15, "u"], "status", [17, [15, "a"], "status"]]]
                                        ]
                                    ],
                                    [46, [22, [12, [17, [15, "a"], "single_multi_product"], "empty"],
                                        [46, [22, [17, [15, "a"], "currency"],
                                                [46, [43, [15, "u"], "currency", [17, [15, "a"], "currency"]]]
                                            ],
                                            [22, [17, [15, "a"], "value"],
                                                [46, [43, [15, "u"], "value", ["f", [17, [15, "a"], "value"]]]]
                                            ],
                                            [22, [17, [15, "a"], "description"],
                                                [46, [43, [15, "u"], "description", [17, [15, "a"], "description"]]]
                                            ],
                                            [22, [17, [15, "a"], "query"],
                                                [46, [43, [15, "u"], "query", [17, [15, "a"], "query"]]]
                                            ],
                                            [22, [17, [15, "a"], "status"],
                                                [46, [43, [15, "u"], "status", [17, [15, "a"], "status"]]]
                                            ]
                                        ]
                                    ]]
                                ]]
                            ]]
                        ],
                        [3, "v", [8]],
                        [22, [12, [17, [15, "a"], "hash"], "hashed"],
                            [46, [22, [17, [15, "a"], "sha256_email"],
                                    [46, [43, [15, "v"], "sha256_email", [17, [15, "a"], "sha256_email"]]]
                                ],
                                [22, [17, [15, "a"], "sha256_phone"],
                                    [46, [43, [15, "v"], "sha256_phone_number", [17, [15, "a"], "sha256_phone"]]]
                                ],
                                [22, [17, [15, "a"], "sha256_external_id"],
                                    [46, [43, [15, "v"], "external_id", [17, [15, "a"], "sha256_external_id"]]]
                                ],
                                ["c", "2a. Advanced matching with hashed PII"]
                            ],
                            [46, [22, [12, [17, [15, "a"], "hash"], "non-hashed"],
                                [46, [22, [17, [15, "a"], "email"],
                                        [46, [43, [15, "v"], "email", [17, [15, "a"], "email"]]]
                                    ],
                                    [22, [17, [15, "a"], "phone"],
                                        [46, [43, [15, "v"], "phone_number", [17, [15, "a"], "phone"]]]
                                    ],
                                    [22, [17, [15, "a"], "external_id"],
                                        [46, [43, [15, "v"], "external_id", [17, [15, "a"], "external_id"]]]
                                    ],
                                    ["c", "2b. Advanced matching without hashed data, TikTok Pixel will hash the data for you."]
                                ]
                            ]]
                        ],
                        [22, [18, [17, [2, [15, "h"], "keys", [7, [15, "v"]]], "length"], 0],
                            [46, ["g", "ttq.identify", [15, "v"]]]
                        ],
                        ["c", "3. Base code found, sending ", [17, [15, "a"], "event"], "event with", [15, "u"],
                            [17, [15, "a"], "event_id"]
                        ],
                        ["g", "ttq.track", [17, [15, "a"], "event"],
                            [15, "u"],
                            [8, "event_id", [17, [15, "a"], "event_id"], "pixel_code", [17, [15, "a"], "pixel_code"]]
                        ]
                    ]],
                    [52, "s", [51, "", [7, "u"],
                        [52, "v", [7]],
                        [52, "w", [7]],
                        [22, [30, [20, [40, [17, [15, "u"], "pixel_code"]], "undefined"],
                                [20, [2, [17, [15, "u"], "pixel_code"], "trim", [7]], ""]
                            ],
                            [46, [2, [15, "v"], "push", [7, "data.pixel_code not found"]]]
                        ],
                        [22, [28, ["l", "ttq"]],
                            [46, [2, [15, "v"], "push", [7, "ttq not found"]]]
                        ],
                        [22, [17, [15, "u"], "external_id"],
                            [46, [43, [15, "u"], "external_id", [2, [17, [15, "u"], "external_id"], "trim", [7]]]]
                        ],
                        [22, [17, [15, "u"], "email"],
                            [46, [22, [20, [2, [17, [15, "u"], "email"], "indexOf", [7, "@"]],
                                        [27, 1]
                                    ],
                                    [46, [2, [15, "w"], "push", [7, "data.email is not an email"]]]
                                ],
                                [22, ["m", [17, [15, "u"], "email"]],
                                    [46, [2, [15, "w"], "push", [7, "data.email appears to be a SHA256 hash"]]]
                                ]
                            ]
                        ],
                        [22, [17, [15, "u"], "phone"],
                            [46, [22, ["m", [17, [15, "u"], "phone"]],
                                [46, [2, [15, "w"], "push", [7, "data.phone appears to be a SHA256 hash"]]]
                            ]]
                        ],
                        [22, [17, [15, "u"], "sha256_email"],
                            [46, [22, [28, ["m", [17, [15, "u"], "sha256_email"]]],
                                [46, [2, [15, "w"], "push", [7, "data.sha256_email is not a SHA256 hash"]]]
                            ]]
                        ],
                        [22, [17, [15, "u"], "sha256_phone"],
                            [46, [22, [28, ["m", [17, [15, "u"], "sha256_phone"]]],
                                [46, [2, [15, "w"], "push", [7, "data.sha256_phone is not a SHA256 hash"]]]
                            ]]
                        ],
                        [22, [20, [16, [15, "k"],
                                    [17, [15, "u"], "event"]
                                ],
                                [44]
                            ],
                            [46, [2, [15, "w"], "push", [7, [0, [0, "data.event \"", [17, [15, "u"], "event"]], "\" is not a valid event"]]]]
                        ],
                        [65, "x", [15, "w"],
                            [46, ["c", [0, "[WARN] ", [15, "x"]]]]
                        ],
                        [65, "x", [15, "v"],
                            [46, ["c", [0, "[ERROR] ", [15, "x"]]]]
                        ],
                        [36, [15, "v"]]
                    ]],
                    [52, "t", [51, "", [7],
                        [52, "u", ["s", [15, "a"]]],
                        [22, [18, [17, [15, "u"], "length"], 0],
                            [46, [2, [15, "a"], "gtmOnFailure", [7]],
                                [36]
                            ]
                        ],
                        ["r"],
                        [2, [15, "a"], "gtmOnSuccess", [7]]
                    ]],
                    ["t"]
                ],
                [50, "__r", [46, "a"],
                    [36, [13, [41, "$0"],
                        [3, "$0", ["require", "generateRandom"]],
                        ["$0", [30, [17, [15, "a"], "min"], 0],
                            [30, [17, [15, "a"], "max"], 2.147483647E9]
                        ]
                    ]]
                ]

            ]

            ,
        "permissions": {
            "__cvt_2133962_434": {
                "logging": {
                    "environments": "debug"
                },
                "access_globals": {
                    "keys": [{
                        "key": "ttq",
                        "read": true,
                        "write": false,
                        "execute": false
                    }, {
                        "key": "ttq.identify",
                        "read": false,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "ttq.track",
                        "read": false,
                        "write": false,
                        "execute": true
                    }]
                },
                "read_data_layer": {
                    "keyPatterns": ["ecommerce"]
                }
            },
            "__r": {}


        }

        ,
        "sandboxed_scripts": [
                "__cvt_2133962_434"

            ]

            ,
        "security_groups": {
            "google": [
                "__r"

            ]


        }



    };

    var productSettings = {
        "AW-937291173": {
            "preAutoPii": true
        }
    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ba, da = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ea = function(a) {
            return a.raw = a
        },
        ia = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: da(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ja = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ka;
    if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                ma = pa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        ka = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ka,
        ra = function(a, b) {
            a.prototype = ja(b.prototype);
            a.prototype.constructor = a;
            if (qa) qa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Zm = b.prototype
        },
        sa = this || self,
        ta = function(a) {
            return a
        };
    var ua = function(a, b) {
        this.h = a;
        this.m = b
    };
    var va = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        },
        wa = function() {
            this.B = {};
            this.C = !1;
            this.J = {}
        },
        xa = function(a, b) {
            var c = [],
                d;
            for (d in a.B)
                if (a.B.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d);
                        break;
                    case 2:
                        c.push(a.get(d));
                        break;
                    case 3:
                        c.push([d, a.get(d)])
                }
            return c
        };
    wa.prototype.get = function(a) {
        return this.B["dust." + a]
    };
    wa.prototype.set = function(a, b) {
        this.C || (a = "dust." + a, this.J.hasOwnProperty(a) || (this.B[a] = b))
    };
    wa.prototype.has = function(a) {
        return this.B.hasOwnProperty("dust." + a)
    };
    var ya = function(a, b) {
        b = "dust." + b;
        a.C || a.J.hasOwnProperty(b) || delete a.B[b]
    };
    wa.prototype.wc = function() {
        this.C = !0
    };
    wa.prototype.Sf = function() {
        return this.C
    };
    var za = function(a) {
        this.m = new wa;
        this.h = [];
        this.B = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (va(b) ? this.h[Number(b)] = a[Number(b)] : this.m.set(b, a[b]))
    };
    ba = za.prototype;
    ba.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof za ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    ba.set = function(a, b) {
        if (!this.B)
            if ("length" === a) {
                if (!va(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b)
            } else va(a) ? this.h[Number(a)] = b : this.m.set(a, b)
    };
    ba.get = function(a) {
        return "length" === a ? this.length() : va(a) ? this.h[Number(a)] : this.m.get(a)
    };
    ba.length = function() {
        return this.h.length
    };
    ba.Tb = function() {
        for (var a = xa(this.m, 1), b = 0; b < this.h.length; b++) a.push(b + "");
        return new za(a)
    };
    var Aa = function(a, b) {
        va(b) ? delete a.h[Number(b)] : ya(a.m, b)
    };
    ba = za.prototype;
    ba.pop = function() {
        return this.h.pop()
    };
    ba.push = function(a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    };
    ba.shift = function() {
        return this.h.shift()
    };
    ba.splice = function(a, b, c) {
        return new za(this.h.splice.apply(this.h, arguments))
    };
    ba.unshift = function(a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    };
    ba.has = function(a) {
        return va(a) && this.h.hasOwnProperty(a) || this.m.has(a)
    };
    ba.wc = function() {
        this.B = !0;
        Object.freeze(this.h);
        this.m.wc()
    };
    ba.Sf = function() {
        return this.B
    };
    var Ba = function() {
        this.quota = {}
    };
    Ba.prototype.reset = function() {
        this.quota = {}
    };
    var Ca = function(a, b) {
        this.R = a;
        this.J = function(c, d, e) {
            return c.apply(d, e)
        };
        this.B = b;
        this.m = new wa;
        this.h = this.C = void 0
    };
    Ca.prototype.add = function(a, b) {
        Da(this, a, b, !1)
    };
    var Da = function(a, b, c, d) {
        if (!a.m.Sf())
            if (d) {
                var e = a.m;
                e.set(b, c);
                e.J["dust." + b] = !0
            } else a.m.set(b, c)
    };
    Ca.prototype.set = function(a, b) {
        this.m.Sf() || (!this.m.has(a) && this.B && this.B.has(a) ? this.B.set(a, b) : this.m.set(a, b))
    };
    Ca.prototype.get = function(a) {
        return this.m.has(a) ? this.m.get(a) : this.B ? this.B.get(a) : void 0
    };
    Ca.prototype.has = function(a) {
        return !!this.m.has(a) || !(!this.B || !this.B.has(a))
    };
    var Fa = function(a) {
        var b = new Ca(a.R, a);
        a.C && (b.C = a.C);
        b.J = a.J;
        b.h = a.h;
        return b
    };
    var Ga = function() {},
        Ha = function(a) {
            return "function" === typeof a
        },
        k = function(a) {
            return "string" === typeof a
        },
        Ia = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        Ka = Array.isArray,
        La = function(a, b) {
            if (a && Ka(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ma = function(a, b) {
            if (!Ia(a) || !Ia(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Oa = function(a, b) {
            for (var c = new Na, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        l = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Pa = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Qa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ra = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Sa = function(a) {
            var b = [];
            if (Ka(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ta = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ua = function() {
            return new Date(Date.now())
        },
        Va = function() {
            return Ua().getTime()
        },
        Na = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Na.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Na.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Wa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Xa = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ya = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Za = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        ab = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        bb = function(a, b) {
            var c = z;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <=
                    b.indexOf(d)) return
            }
            return d
        },
        cb = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        db = /^\w{1,9}$/,
        eb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            l(a, function(d, e) {
                db.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        fb = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    var gb = function(a, b) {
        wa.call(this);
        this.R = a;
        this.rb = b
    };
    ra(gb, wa);
    gb.prototype.toString = function() {
        return this.R
    };
    gb.prototype.Tb = function() {
        return new za(xa(this, 1))
    };
    gb.prototype.h = function(a, b) {
        return this.rb.apply(new ib(this, a), Array.prototype.slice.call(arguments, 1))
    };
    gb.prototype.m = function(a, b) {
        try {
            return this.h.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var kb = function(a, b) {
            for (var c, d = 0; d < b.length && !(c = jb(a, b[d]), c instanceof ua); d++);
            return c
        },
        jb = function(a, b) {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof gb)) throw Error("Attempting to execute non-function " + b[0] + ".");
                return c.h.apply(c, [a].concat(b.slice(1)))
            } catch (e) {
                var d = a.C;
                d && d(e, b.context ? {
                    id: b[0],
                    line: b.context.line
                } : null);
                throw e;
            }
        },
        ib = function(a, b) {
            this.m = a;
            this.h = b
        },
        C = function(a, b) {
            return Ka(b) ? jb(a.h, b) : b
        },
        E = function(a) {
            return a.m.R
        };
    var lb = function() {
        wa.call(this)
    };
    ra(lb, wa);
    lb.prototype.Tb = function() {
        return new za(xa(this, 1))
    };
    var mb = {
        map: function(a) {
            for (var b = new lb, c = 0; c < arguments.length - 1; c += 2) {
                var d = C(this, arguments[c]) + "",
                    e = C(this, arguments[c + 1]);
                b.set(d, e)
            }
            return b
        },
        list: function(a) {
            for (var b = new za, c = 0; c < arguments.length; c++) {
                var d = C(this, arguments[c]);
                b.push(d)
            }
            return b
        },
        fn: function(a, b, c) {
            var d = this.h,
                e = C(this, b);
            if (!(e instanceof za)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            return new gb(a, function() {
                return function(g) {
                    var h = Fa(d);
                    void 0 ===
                        h.h && (h.h = this.h.h);
                    for (var m = Array.prototype.slice.call(arguments, 0), n = 0; n < m.length; n++)
                        if (m[n] = C(this, m[n]), m[n] instanceof ua) return m[n];
                    for (var p = e.get("length"), q = 0; q < p; q++) q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new za(m));
                    var r = kb(h, f);
                    if (r instanceof ua) return "return" === r.h ? r.m : r
                }
            }())
        },
        control: function(a, b) {
            return new ua(a, C(this, b))
        },
        undefined: function() {}
    };
    var nb = function() {
            this.B = new Ba;
            this.h = new Ca(this.B)
        },
        ob = function(a, b, c) {
            var d = new gb(b, c);
            d.wc();
            a.h.set(b, d)
        },
        pb = function(a, b, c) {
            mb.hasOwnProperty(b) && ob(a, c || b, mb[b])
        };
    nb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.m(c)
    };
    nb.prototype.m = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = jb(this.h, arguments[c]);
        return b
    };
    nb.prototype.C = function(a, b) {
        var c = Fa(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++) d = jb(c, arguments[e]);
        return d
    };

    function qb() {
        for (var a = rb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function sb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var rb, tb;

    function ub(a) {
        rb = rb || sb();
        tb = tb || qb();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                h = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | h >> 6,
                q = h & 63;
            e || (q = 64, d || (p = 64));
            b.push(rb[m], rb[n], rb[p], rb[q])
        }
        return b.join("")
    }

    function vb(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = tb[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        rb = rb || sb();
        tb = tb || qb();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };
    var wb = {},
        xb = function(a, b) {
            wb[a] = wb[a] || [];
            wb[a][b] = !0
        },
        yb = function() {
            delete wb.GA4_EVENT
        },
        zb = function(a) {
            var b = wb[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return ub(c.join("")).replace(/\.+$/, "")
        };
    var Ab = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var Bb, Db = function() {
        if (void 0 === Bb) {
            var a = null,
                b = sa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ta,
                        createScript: ta,
                        createScriptURL: ta
                    })
                } catch (c) {
                    sa.console && sa.console.error(c.message)
                }
                Bb = a
            } else Bb = a
        }
        return Bb
    };
    var Eb = function(a) {
        this.h = a
    };
    Eb.prototype.toString = function() {
        return this.h + ""
    };
    var Fb = function(a) {
            return a instanceof Eb && a.constructor === Eb ? a.h : "type_error:TrustedResourceUrl"
        },
        Gb = {},
        Hb = function(a) {
            var b = a,
                c = Db(),
                d = c ? c.createScriptURL(b) : b;
            return new Eb(d, Gb)
        };
    var Ib = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Jb, Kb;
    a: {
        for (var Lb = ["CLOSURE_FLAGS"], Mb = sa, Nb = 0; Nb < Lb.length; Nb++)
            if (Mb = Mb[Lb[Nb]], null == Mb) {
                Kb = null;
                break a
            }
        Kb = Mb
    }
    var Ob = Kb && Kb[610401301];
    Jb = null != Ob ? Ob : !1;

    function Pb() {
        var a = sa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var Qb, Rb = sa.navigator;
    Qb = Rb ? Rb.userAgentData || null : null;

    function Sb(a) {
        return Jb ? Qb ? Qb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function Tb(a) {
        return -1 != Pb().indexOf(a)
    };

    function Ub() {
        return Jb ? !!Qb && 0 < Qb.brands.length : !1
    }

    function Vb() {
        return Ub() ? !1 : Tb("Opera")
    }

    function Wb() {
        return Tb("Firefox") || Tb("FxiOS")
    }

    function Xb() {
        return Ub() ? Sb("Chromium") : (Tb("Chrome") || Tb("CriOS")) && !(Ub() ? 0 : Tb("Edge")) || Tb("Silk")
    };
    var Yb = {},
        Zb = function(a) {
            this.h = a
        };
    Zb.prototype.toString = function() {
        return this.h.toString()
    };
    var $b = function(a) {
        return a instanceof Zb && a.constructor === Zb ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var ac = {};
    var bc = function() {},
        cc = function(a) {
            this.h = a
        };
    ra(cc, bc);
    cc.prototype.toString = function() {
        return this.h
    };

    function ec(a, b) {
        var c = [new cc(fc[0].toLowerCase(), ac)];
        if (0 === c.length) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof cc) g = f.h;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return 0 !== e.indexOf(f)
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }

    function gc(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };
    (function() {
        return ""
    }).toString().indexOf("`");

    function hc(a) {
        var b = a = ic(a),
            c = Db(),
            d = c ? c.createHTML(b) : b;
        return new Zb(d, Yb)
    }

    function ic(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var z = window,
        G = document,
        jc = navigator,
        kc = G.currentScript && G.currentScript.src,
        lc = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        mc = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        nc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        oc = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function pc(a, b, c) {
        b && l(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var qc = function(a, b, c, d, e) {
            var f = G.createElement("script");
            pc(f, d, nc);
            f.type = "text/javascript";
            f.async = !0;
            var g;
            g = Hb(ic(a));
            f.src = Fb(g);
            var h, m, n, p = null == (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(m, "script[nonce]");
            (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
            mc(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var q = G.getElementsByTagName("script")[0] || G.body || G.head;
                q.parentNode.insertBefore(f, q)
            }
            return f
        },
        rc = function() {
            if (kc) {
                var a =
                    kc.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        sc = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                h = !1;
            g || (g = G.createElement("iframe"), h = !0);
            pc(g, c, oc);
            d && l(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (h) {
                var m = G.body && G.body.lastChild || G.body || G.head;
                m.parentNode.insertBefore(g, m)
            }
            mc(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        tc = function(a, b, c, d) {
            var e = new Image(1, 1);
            pc(e,
                d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        uc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        vc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        I = function(a) {
            z.setTimeout(a, 0)
        },
        wc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        xc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " !=
                b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        yc = function(a) {
            var b = G.createElement("div"),
                c = b,
                d = hc("A<div>" + a + "</div>");
            1 === c.nodeType && gc(c);
            c.innerHTML = $b(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        zc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Ac = function(a) {
            var b;
            try {
                b = jc.sendBeacon && jc.sendBeacon(a)
            } catch (c) {
                xb("TAGGING", 15)
            }
            b || tc(a)
        },
        Bc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Cc = function(a) {
            var b = {
                headers: {
                    "Attribution-Reporting-Eligible": "trigger"
                },
                keepalive: !0,
                attributionReporting: {
                    eventSourceEligible: !0,
                    triggerEligible: !0
                }
            };
            try {
                z.fetch(a, b)
            } catch (c) {}
        },
        Dc = function() {
            var a = z.performance;
            if (a && Ha(a.now)) return a.now()
        },
        Ec = function() {
            return z.performance || void 0
        };
    var Fc = function(a, b) {
            return C(this, a) && C(this, b)
        },
        Gc = function(a, b) {
            return C(this, a) === C(this, b)
        },
        Hc = function(a, b) {
            return C(this, a) || C(this, b)
        },
        Ic = function(a, b) {
            a = C(this, a);
            b = C(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        Jc = function(a, b) {
            a = String(C(this, a));
            b = String(C(this, b));
            return a.substring(0, b.length) === b
        },
        Kc = function(a, b) {
            a = C(this, a);
            b = C(this, b);
            switch (a) {
                case "pageLocation":
                    var c = z.location.href;
                    b instanceof lb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
    var Mc = function() {
        this.h = new nb;
        Lc(this)
    };
    Mc.prototype.execute = function(a) {
        return this.h.m(a)
    };
    var Lc = function(a) {
        pb(a.h, "map");
        var b = function(c, d) {
            ob(a.h, c, d)
        };
        b("and", Fc);
        b("contains", Ic);
        b("equals", Gc);
        b("or", Hc);
        b("startsWith", Jc);
        b("variable", Kc)
    };
    var Nc = function() {
        this.map = new Map
    };
    Nc.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    Nc.prototype.get = function(a) {
        return this.map.get(a)
    };
    var Oc = function() {
        this.keys = [];
        this.values = []
    };
    Oc.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    Oc.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (-1 < b) return this.values[b]
    };
    var Pc = function(a) {
        if (a instanceof Pc) return a;
        this.Ga = a
    };
    Pc.prototype.toString = function() {
        return String(this.Ga)
    };
    var Rc = function(a) {
        wa.call(this);
        this.h = a;
        this.set("then", Qc(this));
        this.set("catch", Qc(this, !0));
        this.set("finally", Qc(this, !1, !0))
    };
    ra(Rc, lb);
    var Qc = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new gb("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof gb || (d = void 0);
            e instanceof gb || (e = void 0);
            var f = Fa(this.h),
                g = function(m) {
                    return function(n) {
                        return c ? (m.h(f), a.h) : m.h(f, n)
                    }
                },
                h = a.h.then(d && g(d), e && g(e));
            return new Rc(h)
        })
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Sc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Tc = function(a) {
            if (null == a) return String(a);
            var b = Sc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Uc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Vc = function(a) {
            if (!a || "object" != Tc(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Uc(a, "constructor") && !Uc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Uc(a, b)
        },
        J = function(a, b) {
            var c = b || ("array" == Tc(a) ? [] : {}),
                d;
            for (d in a)
                if (Uc(a, d)) {
                    var e = a[d];
                    "array" == Tc(e) ? ("array" != Tc(c[d]) && (c[d] = []), c[d] = J(e, c[d])) : Vc(e) ? (Vc(c[d]) || (c[d] = {}), c[d] = J(e, c[d])) : c[d] = e
                }
            return c
        };
    var Xc = function(a, b, c) {
            var d = Map ? new Nc : new Oc,
                e = function(g, h) {
                    for (var m = xa(g, 1), n = 0; n < m.length; n++) h[m[n]] = f(g.get(m[n]))
                },
                f = function(g) {
                    var h = d.get(g);
                    if (h) return h;
                    if (g instanceof za) {
                        var m = [];
                        d.set(g, m);
                        for (var n = g.Tb(), p = 0; p < n.length(); p++) m[n.get(p)] = f(g.get(n.get(p)));
                        return m
                    }
                    if (g instanceof Rc) return g.h;
                    if (g instanceof lb) {
                        var q = {};
                        d.set(g, q);
                        e(g, q);
                        return q
                    }
                    if (g instanceof gb) {
                        var r = function() {
                            for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = Wc(u[v], b, c);
                            var w =
                                new Ca(b ? b.R : new Ba);
                            b && (w.h = b.h);
                            return f(g.h.apply(g, [w].concat(u)))
                        };
                        d.set(g, r);
                        e(g, r);
                        return r
                    }
                    var t = !1;
                    switch (c) {
                        case 1:
                            t = !0;
                            break;
                        case 2:
                            t = !1;
                            break;
                        case 3:
                            t = !1;
                            break;
                        default:
                    }
                    if (g instanceof Pc && t) return g.Ga;
                    switch (typeof g) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return g;
                        case "object":
                            if (null === g) return null
                    }
                };
            return f(a)
        },
        Wc = function(a, b, c) {
            var d = Map ?
                new Nc : new Oc,
                e = function(g, h) {
                    for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]))
                },
                f = function(g) {
                    var h = d.get(g);
                    if (h) return h;
                    if (Ka(g) || Pa(g)) {
                        var m = new za([]);
                        d.set(g, m);
                        for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                        return m
                    }
                    if (Vc(g)) {
                        var p = new lb;
                        d.set(g, p);
                        e(g, p);
                        return p
                    }
                    if ("function" === typeof g) {
                        var q = new gb("", function(x) {
                            for (var y = Array.prototype.slice.call(arguments, 0), A = 0; A < y.length; A++) y[A] = Xc(C(this, y[A]), b, c);
                            return f((0, this.h.J)(g, g, y))
                        });
                        d.set(g, q);
                        e(g, q);
                        return q
                    }
                    var v = typeof g;
                    if (null === g || "string" === v || "number" === v || "boolean" === v) return g;
                    var w = !1;
                    switch (c) {
                        case 1:
                            w = !0;
                            break;
                        case 2:
                            w = !1;
                            break;
                        default:
                    }
                    if (void 0 !== g && w) return new Pc(g)
                };
            return f(a)
        };
    var Yc = function(a) {
            for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
            return b
        },
        Zc = function(a) {
            if (void 0 === a || Ka(a) || Vc(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        };
    var $c = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof za)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new za(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
            return new za(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.h(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
            return new za(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = Yc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : Aa(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new za(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Yc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.h(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : Aa(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var ad = {
            charAt: 1,
            concat: 1,
            indexOf: 1,
            lastIndexOf: 1,
            match: 1,
            replace: 1,
            search: 1,
            slice: 1,
            split: 1,
            substring: 1,
            toLowerCase: 1,
            toLocaleLowerCase: 1,
            toString: 1,
            toUpperCase: 1,
            toLocaleUpperCase: 1,
            trim: 1
        },
        bd = new ua("break"),
        cd = new ua("continue"),
        dd = function(a, b) {
            return C(this, a) + C(this, b)
        },
        fd = function(a, b) {
            return C(this, a) && C(this, b)
        },
        gd = function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            if (!(c instanceof za)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) {
                if ("toString" === b) {
                    if (d && c.length()) {
                        var e = Xc(c.get(0));
                        try {
                            return a.toString(e)
                        } catch (r) {}
                    }
                    return a.toString()
                }
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (ad.hasOwnProperty(b)) {
                    var f = 2;
                    f = 1;
                    var g = Xc(c, void 0, f);
                    return Wc(a[b].apply(a, g), this.h)
                }
                throw Error("TypeError: " +
                    b + " is not a function");
            }
            if (a instanceof za) {
                if (a.has(b)) {
                    var h = a.get(b);
                    if (h instanceof gb) {
                        var m = Yc(c);
                        m.unshift(this.h);
                        return h.h.apply(h, m)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if (0 <= $c.supportedMethods.indexOf(b)) {
                    var n = Yc(c);
                    n.unshift(this.h);
                    return $c[b].apply(a, n)
                }
            }
            if (a instanceof gb || a instanceof lb) {
                if (a.has(b)) {
                    var p = a.get(b);
                    if (p instanceof gb) {
                        var q = Yc(c);
                        q.unshift(this.h);
                        return p.h.apply(p, q)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof
                gb ? a.R : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, Yc(c))
            }
            if (a instanceof Pc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" + b + "' property.");
        },
        hd = function(a, b) {
            a = C(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.h;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = C(this, b);
            c.set(a, d);
            return d
        },
        id = function(a) {
            var b = Fa(this.h),
                c = kb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof ua) return c
        },
        jd = function() {
            return bd
        },
        kd = function(a) {
            for (var b = C(this, a), c = 0; c < b.length; c++) {
                var d = C(this, b[c]);
                if (d instanceof ua) return d
            }
        },
        ld = function(a) {
            for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = C(this, arguments[c + 1]);
                    Da(b, d, e, !0)
                }
            }
        },
        md = function() {
            return cd
        },
        nd = function(a, b, c) {
            var d = new za;
            b = C(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.h.add(a, C(this,
                f))
        },
        od = function(a, b) {
            return C(this, a) / C(this, b)
        },
        pd = function(a, b) {
            a = C(this, a);
            b = C(this, b);
            var c = a instanceof Pc,
                d = b instanceof Pc;
            return c || d ? c && d ? a.Ga == b.Ga : !1 : a == b
        },
        qd = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = C(this, arguments[c]);
            return b
        };

    function rd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = kb(f, d);
            if (g instanceof ua) {
                if ("break" === g.h) break;
                if ("return" === g.h) return g
            }
        }
    }

    function sd(a, b, c) {
        if ("string" === typeof b) return rd(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof lb || b instanceof za || b instanceof gb) {
            var d = b.Tb(),
                e = d.length();
            return rd(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var td = function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            var d = this.h;
            return sd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        ud = function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            var d = this.h;
            return sd(function(e) {
                var f = Fa(d);
                Da(f, a, e, !0);
                return f
            }, b, c)
        },
        vd = function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            var d = this.h;
            return sd(function(e) {
                var f = Fa(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        xd = function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            var d = this.h;
            return wd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        yd =
        function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            var d = this.h;
            return wd(function(e) {
                var f = Fa(d);
                Da(f, a, e, !0);
                return f
            }, b, c)
        },
        zd = function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            var d = this.h;
            return wd(function(e) {
                var f = Fa(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function wd(a, b, c) {
        if ("string" === typeof b) return rd(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof za) return rd(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        throw new TypeError("The value is not iterable.");
    }
    var Ad = function(a, b, c, d) {
            function e(p, q) {
                for (var r = 0; r < f.length(); r++) {
                    var t = f.get(r);
                    q.add(t, p.get(t))
                }
            }
            var f = C(this, a);
            if (!(f instanceof za)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.h;
            d = C(this, d);
            var h = Fa(g);
            for (e(g, h); jb(h, b);) {
                var m = kb(h, d);
                if (m instanceof ua) {
                    if ("break" === m.h) break;
                    if ("return" === m.h) return m
                }
                var n = Fa(g);
                e(h, n);
                jb(n, c);
                h = n
            }
        },
        Bd = function(a) {
            a = C(this, a);
            var b = this.h,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        Cd = function(a, b) {
            var c;
            a = C(this, a);
            b = C(this, b);
            if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof lb || a instanceof za || a instanceof gb) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : va(b) && (c = a[b]);
            else if (a instanceof Pc) return;
            return c
        },
        Dd = function(a, b) {
            return C(this, a) > C(this,
                b)
        },
        Ed = function(a, b) {
            return C(this, a) >= C(this, b)
        },
        Fd = function(a, b) {
            a = C(this, a);
            b = C(this, b);
            a instanceof Pc && (a = a.Ga);
            b instanceof Pc && (b = b.Ga);
            return a === b
        },
        Gd = function(a, b) {
            return !Fd.call(this, a, b)
        },
        Hd = function(a, b, c) {
            var d = [];
            C(this, a) ? d = C(this, b) : c && (d = C(this, c));
            var e = kb(this.h, d);
            if (e instanceof ua) return e
        },
        Id = function(a, b) {
            return C(this, a) < C(this, b)
        },
        Jd = function(a, b) {
            return C(this, a) <= C(this, b)
        },
        Kd = function(a, b) {
            return C(this, a) % C(this, b)
        },
        Ld = function(a, b) {
            return C(this, a) * C(this, b)
        },
        Md = function(a) {
            return -C(this,
                a)
        },
        Nd = function(a) {
            return !C(this, a)
        },
        Od = function(a, b) {
            return !pd.call(this, a, b)
        },
        Pd = function() {
            return null
        },
        Qd = function(a, b) {
            return C(this, a) || C(this, b)
        },
        Rd = function(a, b) {
            var c = C(this, a);
            C(this, b);
            return c
        },
        Sd = function(a) {
            return C(this, a)
        },
        Td = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        Ud = function(a) {
            return new ua("return", C(this, a))
        },
        Vd = function(a, b, c) {
            a = C(this, a);
            b = C(this, b);
            c = C(this, c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof gb || a instanceof za || a instanceof lb) && a.set(b, c);
            return c
        },
        Wd = function(a, b) {
            return C(this, a) - C(this, b)
        },
        Xd = function(a, b, c) {
            a = C(this, a);
            var d = C(this, b),
                e = C(this, c);
            if (!Ka(d) || !Ka(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === C(this, d[h]))
                    if (f = C(this, e[h]), f instanceof ua) {
                        var m = f.h;
                        if ("break" === m) return;
                        if ("return" === m || "continue" === m) return f
                    } else g = !0;
            if (e.length === d.length + 1 && (f = C(this, e[e.length - 1]), f instanceof ua && ("return" === f.h || "continue" ===
                    f.h))) return f
        },
        Yd = function(a, b, c) {
            return C(this, a) ? C(this, b) : C(this, c)
        },
        Zd = function(a) {
            a = C(this, a);
            return a instanceof gb ? "function" : typeof a
        },
        $d = function(a) {
            for (var b = this.h, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        ae = function(a, b, c, d) {
            var e = C(this, d);
            if (C(this, c)) {
                var f = kb(this.h, e);
                if (f instanceof ua) {
                    if ("break" === f.h) return;
                    if ("return" === f.h) return f
                }
            }
            for (; C(this, a);) {
                var g = kb(this.h, e);
                if (g instanceof ua) {
                    if ("break" === g.h) break;
                    if ("return" === g.h) return g
                }
                C(this,
                    b)
            }
        },
        be = function(a) {
            return ~Number(C(this, a))
        },
        ce = function(a, b) {
            return Number(C(this, a)) << Number(C(this, b))
        },
        de = function(a, b) {
            return Number(C(this, a)) >> Number(C(this, b))
        },
        ee = function(a, b) {
            return Number(C(this, a)) >>> Number(C(this, b))
        },
        fe = function(a, b) {
            return Number(C(this, a)) & Number(C(this, b))
        },
        ie = function(a, b) {
            return Number(C(this, a)) ^ Number(C(this, b))
        },
        je = function(a, b) {
            return Number(C(this, a)) | Number(C(this, b))
        };
    var le = function() {
        this.h = new nb;
        ke(this)
    };
    le.prototype.execute = function(a) {
        return me(this.h.m(a))
    };
    var ne = function(a, b, c) {
            return me(a.h.C(b, c))
        },
        ke = function(a) {
            var b = function(d, e) {
                pb(a.h, d, String(e))
            };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) {
                ob(a.h, String(d), e)
            };
            c(0, dd);
            c(1, fd);
            c(2, gd);
            c(3, hd);
            c(53, id);
            c(4, jd);
            c(5, kd);
            c(52, ld);
            c(6, md);
            c(9, kd);
            c(50, nd);
            c(10, od);
            c(12, pd);
            c(13, qd);
            c(47, td);
            c(54, ud);
            c(55, vd);
            c(63, Ad);
            c(64, xd);
            c(65, yd);
            c(66, zd);
            c(15, Bd);
            c(16, Cd);
            c(17, Cd);
            c(18, Dd);
            c(19, Ed);
            c(20, Fd);
            c(21, Gd);
            c(22, Hd);
            c(23, Id);
            c(24, Jd);
            c(25, Kd);
            c(26, Ld);
            c(27,
                Md);
            c(28, Nd);
            c(29, Od);
            c(45, Pd);
            c(30, Qd);
            c(32, Rd);
            c(33, Rd);
            c(34, Sd);
            c(35, Sd);
            c(46, Td);
            c(36, Ud);
            c(43, Vd);
            c(37, Wd);
            c(38, Xd);
            c(39, Yd);
            c(40, Zd);
            c(41, $d);
            c(42, ae);
            c(58, be);
            c(57, ce);
            c(60, de);
            c(61, ee);
            c(56, fe);
            c(62, ie);
            c(59, je)
        };

    function me(a) {
        if (a instanceof ua || a instanceof gb || a instanceof za || a instanceof lb || a instanceof Pc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };

    function oe(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    }

    function pe(a) {
        switch (a) {
            case 1:
                return "G";
            case 3:
                return "g";
            case 2:
                return "D";
            case 4:
                return "d";
            case 0:
                return "g";
            default:
                return "g"
        }
    }

    function qe(a, b) {
        var c = a[1] || 0,
            d = a[2] || 0;
        switch (b) {
            case 0:
                return "G1" + oe(c) + oe(d);
            case 1:
                return "G2" + pe(c) + pe(d);
            default:
                return "g1--"
        }
    };
    var re = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Zj: a("consent"),
            hi: a("convert_case_to"),
            ii: a("convert_false_to"),
            ji: a("convert_null_to"),
            ki: a("convert_true_to"),
            li: a("convert_undefined_to"),
            Gm: a("debug_mode_metadata"),
            Sb: a("function"),
            Zg: a("instance_name"),
            Bk: a("live_only"),
            Ck: a("malware_disabled"),
            Dk: a("metadata"),
            Gk: a("original_activity_id"),
            Nm: a("original_vendor_template_id"),
            Mm: a("once_on_load"),
            Fk: a("once_per_event"),
            gj: a("once_per_load"),
            Rm: a("priority_override"),
            Sm: a("respected_consent_types"),
            lj: a("setup_tags"),
            pe: a("tag_id"),
            qj: a("teardown_tags")
        }
    }();
    var se = [],
        te = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        ue = function(a) {
            return te[a]
        },
        ve = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var ze = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        Ae = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\v": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        Be = function(a) {
            return Ae[a]
        };
    se[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(ze, Be) + "'"
        }
    };
    var Je = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Ke = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        Le = function(a) {
            return Ke[a]
        };
    se[16] = function(a) {
        return a
    };
    var Ne;
    var Oe = [],
        Pe = [],
        Qe = [],
        Re = [],
        Se = [],
        Te = {},
        Ue, Ve, Xe = function() {
            var a = We;
            Ve = Ve || a
        },
        Ye, Ze = [],
        $e = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        af = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Te[c],
                f = b && 2 === b.type && d.Nj && e && -1 !== Ze.indexOf(c),
                g = {},
                h = {},
                m;
            for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.wj && d.wj(a[m]), e && (g[m] = a[m]), !e || f) && (h[m.substr(4)] =
                a[m]);
            e && d && d.vj && (g.vtp_gtmCachedValues = d.vj);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.index;
                        if (null == p) n = "";
                        else {
                            var q;
                            switch (b.type) {
                                case 2:
                                    q = Oe[p];
                                    break;
                                case 1:
                                    q = Re[p];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var r = q && q[re.Zg];
                            n = r ? String(r) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var t, u;
            e && (t = e(g));
            if (!e || f) u = Ne(c, h, b);
            f && t !== u && d && d.Nj(d.id, c);
            return e ? t : u
        },
        cf = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = bf(a[e], b, c));
            return d
        },
        bf = function(a, b,
            c) {
            if (Ka(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(bf(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = Oe[f];
                        if (!g || b.vh(g)) return;
                        c[f] = !0;
                        var h = String(g[re.Zg]);
                        try {
                            var m = cf(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = af(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: h
                            });
                            Ye && (d = Ye.Qk(d, m))
                        } catch (y) {
                            b.Gj && b.Gj(y, Number(f), h), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[bf(a[n],
                            b, c)] = bf(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = bf(a[q], b, c);
                            Ve && (p = p || r === Ve.yf);
                            d.push(r)
                        }
                        return Ve && p ? Ve.Rk(d) : d.join("");
                    case "escape":
                        d = bf(a[1], b, c);
                        if (Ve && Ka(a[1]) && "macro" === a[1][0] && Ve.Bl(a)) return Ve.Yl(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) se[a[t]] && (d = se[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Re[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            Bj: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] =
                            a[1];
                        var w = df(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        df = function(a, b, c) {
            try {
                return Ue(cf(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var ef = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.h = a
    };
    ra(ef, Error);

    function ff(a, b) {
        if (Ka(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) ff(a[c], b[c])
        }
    };
    var gf = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.Sl = a;
        this.m = b;
        this.h = []
    };
    ra(gf, Error);
    var jf = function() {
        return function(a, b) {
            a instanceof gf || (a = new gf(a, hf));
            b && a.h.push(b);
            throw a;
        }
    };

    function hf(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--) Ia(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var mf = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = kf(a), f = 0; f < Pe.length; f++) {
                var g = Pe[f],
                    h = lf(g, e);
                if (h) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || []);
            }
            for (var p = [], q = 0; q < Re.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        lf = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var h = b(f[g]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        kf = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = df(Qe[c], a));
                return b[c]
            }
        };
    var nf = {
        Qk: function(a, b) {
            b[re.hi] && "string" === typeof a && (a = 1 == b[re.hi] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(re.ji) && null === a && (a = b[re.ji]);
            b.hasOwnProperty(re.li) && void 0 === a && (a = b[re.li]);
            b.hasOwnProperty(re.ki) && !0 === a && (a = b[re.ki]);
            b.hasOwnProperty(re.ii) && !1 === a && (a = b[re.ii]);
            return a
        }
    };
    var of = function() {
        this.h = {}
    };

    function pf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d), g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f) throw new ef(c, d, g);
            }
    }

    function qf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.h[d],
                    f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    pf(e, b, d, g);
                    pf(f, b, d, g)
                }
            }
        }
    };
    var uf = function() {
            var a = data.permissions || {},
                b = rf.ctid,
                c = this;
            this.m = new of ;
            this.h = {};
            var d = {},
                e = qf(this.m, b, function() {
                    var f = arguments[0];
                    return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            l(a, function(f, g) {
                var h = {};
                l(g, function(m, n) {
                    var p = sf(m, n);
                    h[m] = p.assert;
                    d[m] || (d[m] = p.M)
                });
                c.h[f] = function(m, n) {
                    var p = h[m];
                    if (!p) throw tf(m, {}, "The requested permission " + m + " is not configured.");
                    var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q)
                }
            })
        },
        wf = function(a) {
            return vf.h[a] || function() {}
        };

    function sf(a, b) {
        var c = $e(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = tf;
        try {
            return af(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new ef(e, {}, "Permission " + e + " is unknown.");
                },
                M: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function tf(a, b, c) {
        return new ef(a, b, c)
    };
    var xf = !1;
    var yf = {};
    yf.Em = Ra('');
    yf.Tk = Ra('');
    var zf = xf,
        Af = yf.Tk,
        Bf = yf.Em;
    var Mf = /^[a-z$_][\w$]*$/i,
        Nf = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i,
        Of = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!Nf.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = -1 !== f && f === e.length - 2,
                    h = g ? e.slice(0, e.length - 2) : e,
                    m;
                a: if (0 === d.length) m = !1;
                    else {
                        for (var n = d.split("."), p = 0; p < n.length; p++)
                            if (!Mf.exec(n[p])) {
                                m = !1;
                                break a
                            }
                        m = !0
                    }
                if (!m || h.length > d.length || !g && d.length != e.length ? 0 : g ? 0 === d.indexOf(h) && (d === h || "." == d.charAt(h.length)) : d === h) return !0
            }
            return !1
        };
    var Pf = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function Qf(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Rf = new Na;

    function Sf(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Rf.get(e);
            f || (f = new RegExp(b, d), Rf.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Tf(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }

    function Uf(a, b) {
        return String(a) === String(b)
    }

    function Vf(a, b) {
        return Number(a) >= Number(b)
    }

    function Wf(a, b) {
        return Number(a) <= Number(b)
    }

    function Xf(a, b) {
        return Number(a) > Number(b)
    }

    function Yf(a, b) {
        return Number(a) < Number(b)
    }

    function Zf(a, b) {
        return 0 === String(a).indexOf(String(b))
    };
    var fg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function gg(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var hg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        ig = {
            Fn: "function",
            DustMap: "Object",
            List: "Array"
        },
        L = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = hg.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    m = c[d];
                if (null == m) {
                    if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== h) {
                    var n = typeof m;
                    m instanceof gb ? n = "Fn" : m instanceof za ? n = "List" : m instanceof lb ? n = "DustMap" : m instanceof Pc && (n = "OpaqueValue");
                    if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (ig[n] || n) + ", which does not match required type " + (ig[h] || h) + ".");
                }
            }
        };

    function jg(a) {
        return "" + a
    }

    function kg(a, b) {
        var c = [];
        return c
    };
    var lg = function(a, b) {
            var c = new gb(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = C(this, d[e]);
                return b.apply(this, d)
            });
            c.wc();
            return c
        },
        mg = function(a, b) {
            var c = new lb,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Ha(e) ? c.set(d, lg(a + "_" + d, e)) : Vc(e) ? c.set(d, mg(a + "_" + d, e)) : (Ia(e) || k(e) || "boolean" === typeof e) && c.set(d, e)
                }
            c.wc();
            return c
        };
    var ng = function(a, b) {
        L(E(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new lb;
        return d = mg("AssertApiSubject", c)
    };
    var og = function(a, b) {
        L(E(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof Rc) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new lb;
        return d = mg("AssertThatSubject", c)
    };

    function pg(a) {
        return function() {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(Xc(arguments[d], c));
            return Wc(a.apply(null, b))
        }
    }
    var rg = function() {
        for (var a = Math, b = qg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = pg(a[e].bind(a)))
        }
        return c
    };
    var sg = function(a) {
        var b;
        return b
    };
    var wg = function(a) {
        var b;
        return b
    };
    var xg = function(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };
    var yg = function(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };

    function zg(a, b) {
        var c = !1;
        return c
    }
    zg.H = "internal.evaluateBooleanExpression";
    var Eg = function(a) {
        L(E(this), ["message:?string"], arguments);
    };
    var Fg = function(a, b) {
        L(E(this), ["min:!number", "max:!number"], arguments);
        return Ma(a, b)
    };
    var M = function(a, b, c) {
        var d = a.h.h;
        if (!d) throw Error("Missing program state.");
        d.uj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var Gg = function() {
        M(this, "read_container_data");
        var a = new lb;
        a.set("containerId", 'GTM-PFKS3S');
        a.set("version", '277');
        a.set("environmentName", '');
        a.set("debugMode", zf);
        a.set("previewMode", Bf);
        a.set("environmentMode", Af);
        a.wc();
        return a
    };
    var Hg = function() {
        return (new Date).getTime()
    };
    var Ig = function(a) {
        if (null === a) return "null";
        if (a instanceof za) return "array";
        if (a instanceof gb) return "function";
        if (a instanceof Pc) {
            a = a.Ga;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var Jg = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (zf || Bf) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return Wc(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(Xc(c))
            })
        }
    };
    var Kg = function(a) {
        return Qa(Xc(a, this.h))
    };
    var Lg = function(a) {
        return Number(Xc(a, this.h))
    };
    var Mg = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var Ng = function(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null
    };
    var qg = "floor ceil round max min abs pow sqrt".split(" ");
    var Og = function() {
            var a = {};
            return {
                il: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                vm: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        Pg = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return gb.prototype.h.apply(a, c)
            }
        },
        Qg = function(a, b) {
            L(E(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var Rg = {};
    var Sg = function(a) {
        var b = new lb;
        if (a instanceof za)
            for (var c = a.Tb(), d = 0; d < c.length(); d++) {
                var e = c.get(d);
                a.has(e) && b.set(e, a.get(e))
            } else if (a instanceof gb)
                for (var f = xa(a, 1), g = 0; g < f.length; g++) {
                    var h = f[g];
                    b.set(h, a.get(h))
                } else
                    for (var m = 0; m < a.length; m++) b.set(m, a[m]);
        return b
    };
    Rg.keys = function(a) {
        L(E(this), ["input:!*"], arguments);
        if (a instanceof za || a instanceof gb || "string" === typeof a) a = Sg(a);
        if (a instanceof lb) return a.Tb();
        return new za
    };
    Rg.values = function(a) {
        L(E(this), ["input:!*"], arguments);
        if (a instanceof za || a instanceof gb || "string" === typeof a) a = Sg(a);
        if (a instanceof lb) return new za(xa(a, 2));
        return new za
    };
    Rg.entries = function(a) {
        L(E(this), ["input:!*"], arguments);
        if (a instanceof za || a instanceof gb || "string" === typeof a) a = Sg(a);
        if (a instanceof lb) {
            for (var b = xa(a, 3), c = new za, d = 0; d < b.length; d++) {
                var e = new za(b[d]);
                c.push(e)
            }
            return c
        }
        return new za
    };
    Rg.freeze = function(a) {
        (a instanceof lb || a instanceof za || a instanceof gb) && a.wc();
        return a
    };
    Rg.delete = function(a, b) {
        if (a instanceof lb && !a.Sf()) return ya(a, b), !0;
        return !1
    };
    var Tg = function() {
        this.h = {};
        this.m = {};
    };
    Tg.prototype.get = function(a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        return c
    };
    Tg.prototype.add = function(a, b, c) {
        if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.m.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Ha(b) ? lg(a, b) : mg(a, b)
    };

    function Ug(a, b) {
        var c = void 0;
        return c
    };

    function Vg() {
        var a = {};
        return a
    };
    var Xg = function(a) {
            return Wg ? G.querySelectorAll(a) : null
        },
        Yg = function(a, b) {
            if (!Wg) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!G.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Zg = !1;
    if (G.querySelectorAll) try {
        var $g = G.querySelectorAll(":root");
        $g && 1 == $g.length && $g[0] == G.documentElement && (Zg = !0)
    } catch (a) {}
    var Wg = Zg;
    var O = function(a) {
        xb("GTM", a)
    };
    var ah = function(a) {
            return null == a ? "" : k(a) ? Ta(String(a)) : "e0"
        },
        ch = function(a) {
            return a.replace(bh, "")
        },
        eh = function(a) {
            return dh(a.replace(/\s/g, ""))
        },
        dh = function(a) {
            return Ta(a.replace(fh, "").toLowerCase())
        },
        hh = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return gh.test(a) ? a : "e0"
        },
        jh = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (ih.test(c)) return c
            }
            return "e0"
        },
        mh = function(a,
            b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== kh.indexOf(c.name) ? lh(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        lh = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (z.crypto && z.crypto.subtle) {
                if (nh.test(a)) return Promise.resolve(a);
                try {
                    var b = oh(a);
                    return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                        var d = Array.from(new Uint8Array(c)).map(function(e) {
                            return String.fromCharCode(e)
                        }).join("");
                        return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }).catch(function() {
                        return "e2"
                    })
                } catch (c) {
                    return Promise.resolve("e2")
                }
            } else return Promise.resolve("e1")
        },
        oh = function(a) {
            var b;
            if (z.TextEncoder) b = (new TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 |
                        e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        fh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        ih = /^\S+@\S+\.\S+$/,
        gh = /^\+\d{10,15}$/,
        bh = /[.~]/g,
        ph = /^[0-9A-Za-z_-]{43}$/,
        nh = /^[0-9A-Fa-f]{64}$/,
        qh = {},
        rh = (qh.email = "em", qh.phone_number = "pn", qh.first_name = "fn", qh.last_name = "ln", qh.street = "sa", qh.city = "ct", qh.region = "rg", qh.country = "co", qh.postal_code = "pc", qh.error_code = "ec", qh),
        sh = {},
        th = (sh.email = "sha256_email_address", sh.phone_number = "sha256_phone_number", sh.first_name = "sha256_first_name", sh.last_name =
            "sha256_last_name", sh.street = "sha256_street", sh),
        uh = function(a, b) {
            function c(t, u, v, w) {
                var x = ah(t);
                "" !== x && (nh.test(x) ? m.push({
                    name: u,
                    value: x,
                    index: w
                }) : m.push({
                    name: u,
                    value: v(x),
                    index: w
                }))
            }

            function d(t, u) {
                var v = t;
                if (k(v) || Ka(v)) {
                    v = Ka(t) ? t : [t];
                    for (var w = 0; w < v.length; ++w) {
                        var x = ah(v[w]),
                            y = nh.test(x);
                        u && !y && O(89);
                        !u && y && O(88)
                    }
                }
            }

            function e(t, u) {
                var v = t[u];
                d(v, !1);
                var w = th[u];
                t.hasOwnProperty(w) && (t.hasOwnProperty(u) && O(90), v = t[w], d(v, !0));
                return v
            }

            function f(t, u, v) {
                var w = e(t, u);
                w = Ka(w) ? w : [w];
                for (var x =
                        0; x < w.length; ++x) c(w[x], u, v)
            }

            function g(t, u, v, w) {
                var x = e(t, u);
                c(x, u, v, w)
            }

            function h(t) {
                return function(u) {
                    O(64);
                    return t(u)
                }
            }
            var m = [];
            if ("https:" === z.location.protocol) {
                f(a, "email", jh);
                f(a, "phone_number", hh);
                f(a, "first_name", h(eh));
                f(a, "last_name", h(eh));
                var n = a.home_address || {};
                f(n, "street", h(dh));
                f(n, "city", h(dh));
                f(n, "postal_code", h(ch));
                f(n, "region", h(dh));
                f(n, "country", h(ch));
                var p = a.address || {};
                p = Ka(p) ? p : [p];
                for (var q = 0; q < p.length; q++) {
                    var r = p[q];
                    g(r, "first_name", eh, q);
                    g(r, "last_name", eh, q);
                    g(r, "street", dh, q);
                    g(r, "city", dh, q);
                    g(r, "postal_code", ch, q);
                    g(r, "region", dh, q);
                    g(r, "country", ch, q)
                }
                mh(m, b)
            } else m.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(m)
        },
        vh = function(a, b) {
            uh(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        h = c[f].value,
                        m = c[f].index,
                        n = rh[g];
                    n && h && (-1 === kh.indexOf(g) || /^e\d+$/.test(h) || ph.test(h) || nh.test(h)) && (void 0 !== m && (n += m), d.push(n + "." + h), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        wh = function(a) {
            if (z.Promise) try {
                return new Promise(function(b) {
                    vh(a,
                        function(c, d) {
                            b({
                                Tf: c,
                                Wl: d
                            })
                        })
                })
            } catch (b) {}
        },
        kh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var P = {
            g: {
                eg: "ad_personalization",
                F: "ad_storage",
                We: "ad_user_data",
                O: "analytics_storage",
                Ua: "region",
                xd: "consent_updated",
                Xe: "wait_for_update",
                mi: "ads",
                ig: "all",
                ni: "play",
                oi: "search",
                ri: "youtube",
                si: "app_remove",
                ui: "app_store_refund",
                vi: "app_store_subscription_cancel",
                wi: "app_store_subscription_convert",
                xi: "app_store_subscription_renew",
                kg: "add_payment_info",
                lg: "add_shipping_info",
                Yb: "add_to_cart",
                Zb: "remove_from_cart",
                mg: "view_cart",
                Jb: "begin_checkout",
                ac: "select_item",
                Za: "view_item_list",
                sb: "select_promotion",
                ab: "view_promotion",
                Ca: "purchase",
                bc: "refund",
                Ia: "view_item",
                ng: "add_to_wishlist",
                fk: "exception",
                yi: "first_open",
                zi: "first_visit",
                la: "gtag.config",
                Ja: "gtag.get",
                Ai: "in_app_purchase",
                fc: "page_view",
                gk: "screen_view",
                Bi: "session_start",
                hk: "timing_complete",
                ik: "track_social",
                zd: "user_engagement",
                tb: "gclid",
                ma: "ads_data_redaction",
                X: "allow_ad_personalization_signals",
                Ad: "allow_custom_scripts",
                Ze: "allow_display_features",
                Bd: "allow_enhanced_conversions",
                ub: "allow_google_signals",
                Da: "allow_interest_groups",
                jk: "app_id",
                kk: "app_installer_id",
                lk: "app_name",
                mk: "app_version",
                hc: "auid",
                Ci: "auto_detection_enabled",
                Kb: "aw_remarketing",
                af: "aw_remarketing_only",
                Cd: "discount",
                Dd: "aw_feed_country",
                Ed: "aw_feed_language",
                Z: "items",
                Fd: "aw_merchant_id",
                og: "aw_basket_type",
                Lc: "campaign_content",
                Mc: "campaign_id",
                Nc: "campaign_medium",
                Oc: "campaign_name",
                Pc: "campaign",
                Qc: "campaign_source",
                Rc: "campaign_term",
                cb: "client_id",
                Di: "content_group",
                Ei: "content_type",
                Ka: "conversion_cookie_prefix",
                Sc: "conversion_id",
                xa: "conversion_linker",
                Lb: "conversion_api",
                Na: "cookie_domain",
                Ea: "cookie_expires",
                Oa: "cookie_flags",
                ic: "cookie_name",
                Tc: "cookie_path",
                La: "cookie_prefix",
                fb: "cookie_update",
                vb: "country",
                sa: "currency",
                Gd: "customer_lifetime_value",
                jc: "custom_map",
                Fi: "gcldc",
                Gi: "debug_mode",
                aa: "developer_id",
                Hi: "disable_merchant_reported_purchases",
                kc: "dc_custom_params",
                pg: "dc_natural_search",
                bf: "dynamic_event_settings",
                qg: "affiliation",
                Hd: "checkout_option",
                cf: "checkout_step",
                rg: "coupon",
                Uc: "item_list_name",
                df: "list_name",
                Ii: "promotions",
                Vc: "shipping",
                ef: "tax",
                Id: "engagement_time_msec",
                Wc: "enhanced_client_id",
                Xc: "enhanced_conversions",
                sg: "enhanced_conversions_automatic_settings",
                Jd: "estimated_delivery_date",
                ff: "euid_logged_in_state",
                mc: "event_callback",
                nk: "event_category",
                wb: "event_developer_id_string",
                pk: "event_label",
                ug: "event",
                Kd: "event_settings",
                Ld: "event_timeout",
                qk: "description",
                rk: "fatal",
                Ji: "experiments",
                hf: "firebase_id",
                Md: "first_party_collection",
                Nd: "_x_20",
                Mb: "_x_19",
                vg: "fledge",
                wg: "flight_error_code",
                xg: "flight_error_message",
                Ki: "fl_activity_category",
                Li: "fl_activity_group",
                yg: "fl_advertiser_id",
                Mi: "fl_ar_dedupe",
                Ni: "fl_random_number",
                Oi: "tran",
                Pi: "u",
                Od: "gac_gclid",
                nc: "gac_wbraid",
                zg: "gac_wbraid_multiple_conversions",
                Ag: "ga_restrict_domain",
                jf: "ga_temp_client_id",
                Pd: "gdpr_applies",
                Bg: "geo_granularity",
                hb: "value_callback",
                Pa: "value_key",
                sk: "google_ono",
                ib: "google_signals",
                Cg: "google_tld",
                Qd: "groups",
                Dg: "gsa_experiment_id",
                Eg: "iframe_state",
                Rd: "ignore_referrer",
                kf: "internal_traffic_results",
                Nb: "is_legacy_converted",
                yb: "is_legacy_loaded",
                Sd: "is_passthrough",
                ya: "language",
                lf: "legacy_developer_id_string",
                za: "linker",
                oc: "accept_incoming",
                zb: "decorate_forms",
                T: "domains",
                Ob: "url_position",
                Fg: "method",
                tk: "name",
                Yc: "new_customer",
                Gg: "non_interaction",
                Qi: "optimize_id",
                nf: "page_hostname",
                Pb: "page_path",
                Fa: "page_referrer",
                Ab: "page_title",
                Hg: "passengers",
                Ig: "phone_conversion_callback",
                Ri: "phone_conversion_country_code",
                Jg: "phone_conversion_css_class",
                Si: "phone_conversion_ids",
                Kg: "phone_conversion_number",
                Lg: "phone_conversion_options",
                qc: "quantity",
                Zc: "redact_device_info",
                pf: "redact_enhanced_user_id",
                Ti: "redact_ga_client_id",
                Ui: "redact_user_id",
                Td: "referral_exclusion_definition",
                Qb: "restricted_data_processing",
                Vi: "retoken",
                uk: "sample_rate",
                qf: "screen_name",
                Bb: "screen_resolution",
                Wi: "search_term",
                Qa: "send_page_view",
                Rb: "send_to",
                rf: "server_container_url",
                ad: "session_duration",
                Ud: "session_engaged",
                tf: "session_engaged_time",
                jb: "session_id",
                Vd: "session_number",
                bd: "delivery_postal_code",
                Mg: "temporary_client_id",
                uf: "topmost_url",
                Xi: "tracking_id",
                vf: "traffic_type",
                na: "transaction_id",
                sc: "transport_url",
                Ng: "trip_type",
                uc: "update",
                kb: "url_passthrough",
                Xd: "_user_agent_architecture",
                Yd: "_user_agent_bitness",
                Zd: "_user_agent_full_version_list",
                ae: "_user_agent_mobile",
                be: "_user_agent_model",
                ce: "_user_agent_platform",
                de: "_user_agent_platform_version",
                ee: "_user_agent_wow64",
                oa: "user_data",
                Og: "user_data_auto_latency",
                Pg: "user_data_auto_meta",
                Qg: "user_data_auto_multi",
                Rg: "user_data_auto_selectors",
                Sg: "user_data_auto_status",
                wf: "user_data_mode",
                xf: "user_data_settings",
                Aa: "user_id",
                Ra: "user_properties",
                Tg: "us_privacy_string",
                da: "value",
                vc: "wbraid",
                Ug: "wbraid_multiple_conversions",
                dj: "_host_name",
                ej: "_in_page_command",
                fj: "_is_passthrough_cid",
                Af: "non_personalized_ads",
                oe: "_sst_parameters",
                eb: "conversion_label",
                ia: "page_location",
                xb: "global_developer_id_string",
                Wd: "tc_privacy_string"
            }
        },
        xh = {},
        yh = Object.freeze((xh[P.g.X] = 1, xh[P.g.Ze] = 1, xh[P.g.Bd] = 1, xh[P.g.ub] = 1, xh[P.g.Z] = 1, xh[P.g.Na] = 1, xh[P.g.Ea] = 1, xh[P.g.Oa] = 1, xh[P.g.ic] = 1, xh[P.g.Tc] = 1, xh[P.g.La] = 1, xh[P.g.fb] = 1, xh[P.g.jc] = 1, xh[P.g.aa] = 1, xh[P.g.bf] =
            1, xh[P.g.mc] = 1, xh[P.g.Kd] = 1, xh[P.g.Ld] = 1, xh[P.g.Md] = 1, xh[P.g.Ag] = 1, xh[P.g.ib] = 1, xh[P.g.Cg] = 1, xh[P.g.Qd] = 1, xh[P.g.kf] = 1, xh[P.g.Nb] = 1, xh[P.g.yb] = 1, xh[P.g.za] = 1, xh[P.g.pf] = 1, xh[P.g.Td] = 1, xh[P.g.Qb] = 1, xh[P.g.Qa] = 1, xh[P.g.Rb] = 1, xh[P.g.rf] = 1, xh[P.g.ad] = 1, xh[P.g.tf] = 1, xh[P.g.bd] = 1, xh[P.g.sc] = 1, xh[P.g.uc] = 1, xh[P.g.xf] = 1, xh[P.g.Ra] = 1, xh[P.g.oe] = 1, xh));
    Object.freeze([P.g.ia, P.g.Fa, P.g.Ab, P.g.ya, P.g.qf, P.g.Aa, P.g.hf, P.g.Di]);
    var zh = {},
        Ah = Object.freeze((zh[P.g.si] = 1, zh[P.g.ui] = 1, zh[P.g.vi] = 1, zh[P.g.wi] = 1, zh[P.g.xi] = 1, zh[P.g.yi] = 1, zh[P.g.zi] = 1, zh[P.g.Ai] = 1, zh[P.g.Bi] = 1, zh[P.g.zd] = 1, zh)),
        Bh = {},
        Ch = Object.freeze((Bh[P.g.kg] = 1, Bh[P.g.lg] = 1, Bh[P.g.Yb] = 1, Bh[P.g.Zb] = 1, Bh[P.g.mg] = 1, Bh[P.g.Jb] = 1, Bh[P.g.ac] = 1, Bh[P.g.Za] = 1, Bh[P.g.sb] = 1, Bh[P.g.ab] = 1, Bh[P.g.Ca] = 1, Bh[P.g.bc] = 1, Bh[P.g.Ia] = 1, Bh[P.g.ng] = 1, Bh)),
        Dh = Object.freeze([P.g.X, P.g.ub, P.g.fb]),
        Eh = Object.freeze([].concat(Dh)),
        Fh = Object.freeze([P.g.Ea, P.g.Ld, P.g.ad, P.g.tf, P.g.Id]),
        Gh = Object.freeze([].concat(Fh)),
        Hh = {},
        Ih = (Hh[P.g.F] = "1", Hh[P.g.O] = "2", Hh),
        Jh = {},
        Kh = Object.freeze((Jh[P.g.X] = 1, Jh[P.g.Bd] = 1, Jh[P.g.Da] = 1, Jh[P.g.Kb] = 1, Jh[P.g.af] = 1, Jh[P.g.Cd] = 1, Jh[P.g.Dd] = 1, Jh[P.g.Ed] = 1, Jh[P.g.Z] = 1, Jh[P.g.Fd] = 1, Jh[P.g.Ka] = 1, Jh[P.g.xa] = 1, Jh[P.g.Na] = 1, Jh[P.g.Ea] = 1, Jh[P.g.Oa] = 1, Jh[P.g.La] = 1, Jh[P.g.sa] = 1, Jh[P.g.Gd] = 1, Jh[P.g.aa] = 1, Jh[P.g.Hi] = 1, Jh[P.g.Xc] = 1, Jh[P.g.Jd] = 1, Jh[P.g.hf] = 1, Jh[P.g.Md] = 1, Jh[P.g.Nb] = 1, Jh[P.g.yb] = 1, Jh[P.g.ya] = 1, Jh[P.g.Yc] = 1, Jh[P.g.ia] = 1, Jh[P.g.Fa] = 1, Jh[P.g.Ig] = 1, Jh[P.g.Jg] =
            1, Jh[P.g.Kg] = 1, Jh[P.g.Lg] = 1, Jh[P.g.Qb] = 1, Jh[P.g.Qa] = 1, Jh[P.g.Rb] = 1, Jh[P.g.rf] = 1, Jh[P.g.bd] = 1, Jh[P.g.na] = 1, Jh[P.g.sc] = 1, Jh[P.g.uc] = 1, Jh[P.g.kb] = 1, Jh[P.g.oa] = 1, Jh[P.g.Aa] = 1, Jh[P.g.da] = 1, Jh));
    Object.freeze(P.g);
    var Lh = {},
        Mh = z.google_tag_manager = z.google_tag_manager || {},
        Nh = Math.random();
    Lh.ah = "36q0";
    Lh.ne = Number("0") || 0;
    Lh.ka = "dataLayer";
    Lh.dk = "ChAI8LTvpAYQ2eTwkoLhqNJ0EiMAYqO6cklLLOiUzj/QrU80GzTRXTSt9f47RckJenOco9EXtRoCFwU\x3d";
    var Oh = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        Ph = {
            __paused: 1,
            __tg: 1
        },
        Qh;
    for (Qh in Oh) Oh.hasOwnProperty(Qh) && (Ph[Qh] = 1);
    var Rh = Ra(""),
        Sh, Th = !1;
    Sh = Th;
    var Uh, Vh = !1;
    Uh = Vh;
    var Wh, Xh = !1;
    Wh = Xh;
    var Yh, Zh = !1;
    Yh = Zh;
    Lh.Ye = "www.googletagmanager.com";
    var $h = "" + Lh.Ye + (Sh ? "/gtag/js" : "/gtm.js"),
        ai = null,
        bi = null,
        ci = {},
        di = {},
        ei = {},
        fi = function() {
            var a = Mh.sequence || 1;
            Mh.sequence = a + 1;
            return a
        };
    Lh.bk = "";
    var gi = "";
    Lh.Ef = gi;
    var hi = new Na,
        ii = {},
        ji = {},
        mi = {
            name: Lh.ka,
            set: function(a, b) {
                J(cb(a, b), ii);
                ki()
            },
            get: function(a) {
                return li(a, 2)
            },
            reset: function() {
                hi = new Na;
                ii = {};
                ki()
            }
        },
        li = function(a, b) {
            return 2 != b ? hi.get(a) : ni(a)
        },
        ni = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = ii, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        oi = function(a, b) {
            ji.hasOwnProperty(a) || (hi.set(a, b), J(cb(a, b), ii), ki())
        },
        pi = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                    "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = li(c, 1);
                if (Ka(d) || Vc(d)) d = J(d);
                ji[c] = d
            }
        },
        ki = function(a) {
            l(ji, function(b, c) {
                hi.set(b, c);
                J(cb(b), ii);
                J(cb(b, c), ii);
                a && delete ji[b]
            })
        },
        qi = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? ni(a) : hi.get(a);
            "array" === Tc(d) || "object" === Tc(d) ? c = J(d) : c = d;
            return c
        };
    var ri = [],
        si = function(a) {
            return void 0 == ri[a] ? !1 : ri[a]
        };
    var R = [];
    R[7] = !0;
    R[9] = !0;
    R[27] = !0;
    R[28] = !0;
    R[11] = !0;
    R[13] = !0;
    R[55] = !0;
    R[15] = !0;
    R[16] = !0;
    R[25] = !0;
    R[26] = !0;
    R[34] = !0;
    R[36] = !0;
    R[43] = !0;
    R[57] = !0;
    R[59] = !0;
    R[61] = !0;
    R[66] = !0;
    R[68] = !0;
    R[72] = !0;
    R[73] = !0, ri[1] = !0;
    R[75] = !0;
    R[74] = !0;
    R[76] = !0;
    R[77] = !0;
    R[80] = !0;
    R[83] = !0;
    R[88] = !0;
    R[92] = !0;
    R[93] = !0;
    R[94] = !0;
    R[96] = !0;
    R[97] = !0;
    R[113] = !0;
    R[115] = !0;
    R[116] = !0;
    R[118] = !0;
    R[122] = !0;
    R[127] = !0;
    R[128] = !0;
    R[130] = !0;
    R[132] = !0;
    R[133] = !0;
    R[135] = !0;
    var T = function(a) {
        return !!R[a]
    };
    var ti = function(a) {
        xb("HEALTH", a)
    };
    var ui;
    try {
        ui = JSON.parse(vb("eyIwIjoiVk4iLCIxIjoiVk4tSE4iLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20udm4iLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiIifQ"))
    } catch (a) {
        O(123), ti(2), ui = {}
    }
    var Gi = function() {
            return ui["0"] || ""
        },
        Hi = function() {
            return ui["1"] || ""
        },
        Ii = function() {
            var a = !1;
            return a
        },
        Ji = function() {
            return !!ui["6"]
        },
        Ki = function() {
            var a = "";
            return a
        },
        Li = function() {
            var a = !1;
            a = !!ui["5"];
            return a
        },
        Mi = function() {
            var a = "";
            return a
        };
    var Ni, Oi = !1;

    function Pi() {
        Oi = !0;
        Ni = productSettings, productSettings = void 0;
        Ni = Ni || {}
    }
    var Qi = function(a) {
        Oi || Pi();
        return Ni[a]
    };
    var Ri = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        Si = function(a) {
            if (G.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var h = g.indexOf("opacity(");
                    0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };
    var aj = /:[0-9]+$/,
        bj = /^\d+\.fls\.doubleclick\.net$/,
        cj = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var m = h.slice(1).join("=");
                    if (!c) return d ? m : decodeURIComponent(m).replace(/\+/g, " ");
                    e.push(d ? m : decodeURIComponent(m).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        },
        fj = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = dj(a.protocol) || dj(z.location.protocol);
            "port" === b ? a.port =
                String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(aj, "").toLowerCase());
            return ej(a, b, c, d, e)
        },
        ej = function(a, b, c, d, e) {
            var f, g = dj(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = gj(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(aj, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f =
                        String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || xb("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = cj(f, e, !1));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        dj = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        gj = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        hj = function(a) {
            var b = G.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || xb("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(aj, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        ij = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n :
                    p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = hj(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var m = "" + f + g + h;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        jj = function(a) {
            var b = hj(z.location.href),
                c = fj(b, "host", !1);
            if (c && c.match(bj)) {
                var d = fj(b,
                    "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var lj = function(a, b, c) {
            var d = a.element,
                e = {
                    U: a.U,
                    type: a.ja,
                    tagName: d.tagName
                };
            b && (e.querySelector = kj(d));
            c && (e.isVisible = !Si(d));
            return e
        },
        mj = function(a, b, c) {
            return lj({
                element: a.element,
                U: a.U,
                ja: "1"
            }, b, c)
        },
        nj = function(a) {
            var b = !!a.yc + "." + !!a.zc;
            a && a.hd && a.hd.length && (b += "." + a.hd.join("."));
            a && a.Wa && (b += "." + a.Wa.email + "." + a.Wa.phone + "." + a.Wa.address);
            return b
        },
        qj = function(a) {
            if (0 != a.length) {
                var b;
                b = oj(a, function(c) {
                    return !pj.test(c.U)
                });
                b = oj(b, function(c) {
                    return "INPUT" === c.element.tagName.toUpperCase()
                });
                b = oj(b, function(c) {
                    return !Si(c.element)
                });
                return b[0]
            }
        },
        rj = function(a, b) {
            if (!b || 0 === b.length) return a;
            for (var c = [], d = 0; d < a.length; d++) {
                for (var e = !0, f = 0; f < b.length; f++) {
                    var g = b[f];
                    if (g && Yg(a[d].element, g)) {
                        e = !1;
                        break
                    }
                }
                e && c.push(a[d])
            }
            return c
        },
        oj = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        kj = function(a) {
            var b;
            if (a === G.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] ===
                                        a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = kj(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        tj = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.textContent;
                "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
                if (e) {
                    var f = e.match(sj);
                    if (f) {
                        var g = f[0],
                            h;
                        if (z.location) {
                            var m = ej(z.location, "host", !0);
                            h = 0 <= g.toLowerCase().indexOf(m)
                        } else h = !1;
                        h || b.push({
                            element: d,
                            U: g
                        })
                    }
                }
            }
            return b
        },
        xj = function() {
            var a = [],
                b = G.body;
            if (!b) return {
                elements: a,
                status: "4"
            };
            for (var c = b.querySelectorAll("*"),
                    d = 0; d < c.length && 1E4 > d; d++) {
                var e = c[d];
                if (!(0 <= uj.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
                    for (var f = !1, g = 0; g < e.childElementCount && 1E4 > g; g++)
                        if (!(0 <= vj.indexOf(e.children[g].tagName.toUpperCase()))) {
                            f = !0;
                            break
                        }(!f || T(114) && -1 !== wj.indexOf(e.tagName)) && a.push(e)
                }
            }
            return {
                elements: a,
                status: 1E4 < c.length ? "2" : "1"
            }
        },
        yj = !0,
        zj = !1;
    var sj = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        Aj = /@(gmail|googlemail)\./i,
        pj = /support|noreply/i,
        uj = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        vj = ["BR"],
        Bj = {
            Hm: "1",
            Pm: "2",
            Im: "3",
            Km: "4",
            Fm: "5",
            Qm: "6",
            Lm: "7"
        },
        Cj = {},
        wj = ["INPUT", "SELECT"];
    var Vj = function(a) {
            a = a || {
                yc: !0,
                zc: !0
            };
            a.Wa = a.Wa || {
                email: !0,
                phone: !1,
                address: !1
            };
            var b = nj(a),
                c = Cj[b];
            if (c && 200 > Va() - c.timestamp) return c.result;
            var d = xj(),
                e = d.status,
                f = [],
                g, h, m = [];
            if (!T(114)) {
                if (a.Wa && a.Wa.email) {
                    var n = tj(d.elements);
                    f = rj(n, a && a.hd);
                    g = qj(f);
                    10 < n.length && (e = "3")
                }!a.Vh && g && (f = [g]);
                for (var p = 0; p < f.length; p++) m.push(mj(f[p], a.yc, a.zc));
                m = m.slice(0, 10)
            } else if (a.Wa) {}
            g && (h = mj(g, a.yc, a.zc));
            var D = {
                elements: m,
                Oh: h,
                status: e
            };
            Cj[b] = {
                timestamp: Va(),
                result: D
            };
            return D
        },
        Wj = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.U.length + ":" + Aj.test(a.U)
        };
    var Xj = function(a, b, c) {
            if (!c) return !1;
            var d = c.selector_type,
                e = String(c.value),
                f;
            if ("js_variable" === d) {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (var g = e.split(","), h = 0; h < g.length; h++) {
                    var m = g[h].trim();
                    if (m) {
                        if (0 === m.indexOf("dataLayer.")) f = li(m.substring(10));
                        else {
                            var n = m.split(".");
                            f = z[n.shift()];
                            for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                        }
                        if (void 0 !== f) break
                    }
                }
            } else if ("css_selector" === d && Wg) {
                var q = Xg(e);
                if (q && 0 < q.length) {
                    f = [];
                    for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(xc(q[r]) ||
                        Ta(q[r].value));
                    f = 1 === f.length ? f[0] : f
                }
            }
            return f ? (a[b] = f, !0) : !1
        },
        Yj = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = Xj(b, "email", a.email) || c;
                c = Xj(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                    var f = {};
                    c = Xj(f, "first_name", d[e].first_name) || c;
                    c = Xj(f, "last_name", d[e].last_name) || c;
                    c = Xj(f, "street", d[e].street) || c;
                    c = Xj(f, "city", d[e].city) || c;
                    c = Xj(f, "region", d[e].region) || c;
                    c = Xj(f, "country", d[e].country) || c;
                    c = Xj(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f)
                }
                return c ?
                    b : void 0
            }
        },
        Zj = function(a) {
            return a.B[P.g.xf]
        },
        ak = function(a) {
            var b = U(a, P.g.Xc) || {},
                c = !1;
            l(b, function(d, e) {
                var f = e.enhanced_conversions_mode;
                if ("automatic" === f || "manual" === f) c = !0
            });
            return c
        },
        bk = function(a) {
            if (!Vc(a)) return !1;
            var b = a.mode;
            return "auto_detect" === b || "selectors" === b || "code" === b || !!a.enable_code
        },
        ck = function(a) {
            if (a) {
                if ("selectors" === a.mode || Vc(a.selectors)) return Yj(a.selectors);
                if ("auto_detect" === a.mode || Vc(a.auto_detect)) {
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = Vj({
                                yc: !1,
                                zc: !1,
                                hd: c.exclude_element_selectors,
                                Wa: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    address: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if ("1" === g.type) {
                                    e.email = g.U;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
                }
            }
        };
    var dk = function(a) {
            var b = a && a[P.g.sg];
            return b && b[P.g.Ci]
        },
        ek = function() {
            return -1 !== jc.userAgent.toLowerCase().indexOf("firefox")
        },
        fk = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) :
                        b.push("")
                }
                return b.join(",")
            }
        };
    var gk = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var hk = function(a) {
        hk[" "](a);
        return a
    };
    hk[" "] = function() {};
    var jk = function() {
        var a = ik,
            b = "th";
        if (a.th && a.hasOwnProperty(b)) return a.th;
        var c = new a;
        return a.th = c
    };
    var ik = function() {
        var a = {};
        this.h = function() {
            var b = gk.h,
                c = gk.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function() {
            a[gk.h] = !0
        }
    };
    var kk = !1,
        lk = !1,
        mk = [],
        nk = {},
        ok = {},
        pk = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function qk() {
        var a = lc("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            cps: {},
            default: rk,
            update: sk,
            declare: tk,
            implicit: uk,
            addListener: vk,
            notifyListeners: wk,
            setCps: xk,
            active: !1,
            usedDeclare: !1,
            usedDefault: !1,
            usedUpdate: !1,
            usedImplicit: !1,
            usedSetCps: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function yk(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }

    function tk(a, b, c, d, e) {
        var f = qk();
        f.active = !0;
        f.usedDeclare = !0;
        var g = f.entries,
            h = g[a] || {},
            m = h.declare_region,
            n = c && k(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (yk(n, m, d, e)) {
            var p = {
                region: h.region,
                declare_region: n,
                declare: "granted" === b,
                implicit: h.implicit,
                default: h.default,
                update: h.update,
                quiet: h.quiet
            };
            if ("" !== d || !1 !== h.declare) g[a] = p
        }
    }

    function uk(a, b) {
        var c = qk();
        c.active = !0;
        c.usedImplicit = !0;
        var d = c.entries,
            e = d[a] = d[a] || {};
        !1 !== e.implicit && (e.implicit = "granted" === b)
    }

    function rk(a, b, c, d, e, f) {
        var g = qk();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        xb("TAGGING", 19);
        if (void 0 == b) xb("TAGGING", 18);
        else {
            var h = g.entries,
                m = h[a] || {},
                n = m.region,
                p = c && k(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (yk(p, n, d, e)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    r = {
                        region: p,
                        declare_region: m.declare_region,
                        implicit: m.implicit,
                        default: "granted" === b,
                        declare: m.declare,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.default) h[a] =
                    r;
                q && z.setTimeout(function() {
                    if (h[a] === r && r.quiet) {
                        r.quiet = !1;
                        var t = [a];
                        if (si(4))
                            for (var u in nk) nk.hasOwnProperty(u) && nk[u] === a && t.push(u);
                        for (var v = 0; v < t.length; v++) zk(t[v]);
                        wk();
                        xb("TAGGING", 2)
                    }
                }, f)
            }
        }
    }

    function sk(a, b) {
        var c = qk();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Ak(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Ak(c, a),
                h = [a];
            if (si(4))
                for (var m in nk) nk.hasOwnProperty(m) && nk[m] === a && h.push(m);
            if (f.quiet) {
                f.quiet = !1;
                for (var n = 0; n < h.length; n++) zk(h[n])
            } else if (g !== d)
                for (var p = 0; p < h.length; p++) zk(h[p])
        }
    }

    function Bk(a, b, c, d, e, f) {
        var g = a[b] || {},
            h = g.region,
            m = d && k(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (yk(m, h, e, f)) {
            var n = {
                enabled: "granted" === c,
                region: m
            };
            if ("" !== e || !1 !== g.enabled) return a[b] = n, !0
        }
        return !1
    }

    function xk(a, b, c, d, e) {
        var f = qk();
        Bk(f.cps, a, b, c, d, e) && (f.usedSetCps = !0)
    }

    function vk(a, b) {
        mk.push({
            consentTypes: a,
            Yk: b
        })
    }

    function zk(a) {
        for (var b = 0; b < mk.length; ++b) {
            var c = mk[b];
            Ka(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.Ij = !0)
        }
    }

    function wk(a, b) {
        for (var c = 0; c < mk.length; ++c) {
            var d = mk[c];
            if (d.Ij) {
                d.Ij = !1;
                try {
                    d.Yk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function Ak(a, b) {
        var c = a.entries,
            d = c[b] || {},
            e = d.update;
        if (void 0 !== e) return e ? 1 : 2;
        e = d.default;
        if (void 0 !== e) return e ? 1 : 2;
        if (si(4) && nk.hasOwnProperty(b)) {
            var f = c[nk[b]] || {};
            e = f.update;
            if (void 0 !== e) return e ? 1 : 2;
            e = f.default;
            if (void 0 !== e) return e ? 1 : 2
        }
        e = d.declare;
        return void 0 !== e ? e ? 1 : 2 : si(4) && (e = d.implicit, void 0 !== e) ? e ? 3 : 4 : si(3) && pk.hasOwnProperty(b) ? pk[b] ? 3 : 4 : 0
    }
    var Ck = function(a) {
            var b = qk();
            b.accessedAny = !0;
            switch (Ak(b, a)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        },
        Dk = function(a) {
            var b = qk();
            b.accessedDefault = !0;
            switch ((b.entries[a] || {}).default) {
                case !0:
                    return 3;
                case !1:
                    return 2;
                default:
                    return 1
            }
        },
        Ek = function(a) {
            var b = qk();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Fk = function() {
            if (!jk().h()) return !1;
            var a = qk();
            a.accessedAny = !0;
            return a.active
        },
        Gk = function() {
            var a = qk();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Hk = function(a,
            b) {
            qk().addListener(a, b)
        },
        Ik = function(a, b) {
            qk().notifyListeners(a, b)
        },
        Jk = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Ek(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Hk(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Kk = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var h = d[g];
                    Ck(h) && !e[h] && (f.push(h), e[h] = !0)
                }
                return f
            }
            var d = k(b) ? [b] : b,
                e = {};
            c().length !== d.length && Hk(d, function(f) {
                var g = c();
                0 < g.length && (f.consentTypes = g, a(f))
            })
        };

    function Lk() {}

    function Mk() {};
    var Nk = [P.g.F, P.g.O, P.g.We, P.g.eg],
        Ok = {},
        Pk = (Ok[P.g.mi] = "a", Ok[P.g.oi] = "s", Ok[P.g.ri] = "y", Ok[P.g.ni] = "p", Ok),
        Qk = function(a) {
            for (var b = a[P.g.Ua], c = Array.isArray(b) ? b : [b], d = {
                    od: 0
                }; d.od < c.length; d = {
                    od: d.od
                }, ++d.od) l(a, function(e) {
                return function(f, g) {
                    if (f !== P.g.Ua) {
                        var h = c[e.od],
                            m = Gi(),
                            n = Hi();
                        lk = !0;
                        kk && xb("TAGGING", 20);
                        qk().declare(f, g, h, m, n)
                    }
                }
            }(d))
        },
        Rk = function(a) {
            var b = a[P.g.Ua];
            b && O(40);
            var c = a[P.g.Xe];
            c && O(41);
            for (var d = Ka(b) ? b : [b], e = {
                    pd: 0
                }; e.pd < d.length; e = {
                    pd: e.pd
                }, ++e.pd) l(a, function(f) {
                return function(g,
                    h) {
                    if (g !== P.g.Ua && g !== P.g.Xe) {
                        var m = d[f.pd],
                            n = Number(c),
                            p = Gi(),
                            q = Hi();
                        kk = !0;
                        lk && xb("TAGGING", 20);
                        qk().default(g, h, m, p, q, n)
                    }
                }
            }(e))
        },
        Sk = function(a, b) {
            l(a, function(c, d) {
                kk = !0;
                lk && xb("TAGGING", 20);
                qk().update(c, d)
            });
            Ik(b.eventId, b.priorityId)
        },
        Tk = function(a) {
            for (var b = a[P.g.Ua], c = Array.isArray(b) ? b : [b], d = {
                    rd: 0
                }; d.rd < c.length; d = {
                    rd: d.rd
                }, ++d.rd) l(a, function(e) {
                return function(f, g) {
                    if (f !== P.g.Ua) {
                        var h = c[e.rd],
                            m = Gi(),
                            n = Hi();
                        qk().setCps(f, g, h, m, n)
                    }
                }
            }(d))
        },
        Uk = function(a) {
            for (var b = a[P.g.Ua], c = Array.isArray(b) ?
                    b : [b], d = {
                        Gc: 0
                    }; d.Gc < c.length; d = {
                    Gc: d.Gc
                }, ++d.Gc) a.hasOwnProperty(P.g.ig) && l(Pk, function(e) {
                return function(f) {
                    Bk(ok, f, a[P.g.ig], c[e.Gc], Gi(), Hi())
                }
            }(d)), l(a, function(e) {
                return function(f, g) {
                    f !== P.g.Ua && f !== P.g.ig && Bk(ok, f, g, c[e.Gc], Gi(), Hi())
                }
            }(d))
        },
        Vk = function() {
            return Ck(P.g.We) ? Ji() || qk().usedSetCps : !1
        },
        Wk = function(a, b) {
            Hk(a, b)
        },
        Xk = function(a, b) {
            Kk(a, b)
        },
        Yk = function(a, b) {
            Jk(a, b)
        };
    var Zk = [P.g.F, P.g.O],
        $k = [P.g.F, P.g.O, P.g.We, P.g.eg],
        al = {},
        bl = (al[P.g.F] = 1, al[P.g.O] = 2, al),
        cl = {},
        dl = (cl[P.g.mi] = "a", cl[P.g.oi] = "s", cl[P.g.ri] = "y", cl[P.g.ni] = "p", cl),
        el = function() {
            var a = {},
                b;
            for (b in bl)
                if (bl.hasOwnProperty(b)) {
                    var c = bl[b],
                        d, e = qk();
                    e.accessedAny = !0;
                    d = Ak(e, b);
                    a[c] = d
                }
            var f = T(111) && Zk.every(Ck),
                g = T(104);
            return f || g ? qe(a, 1) : qe(a, 0)
        },
        fl = {},
        gl = (fl[P.g.F] = 0, fl[P.g.O] = 1, fl[P.g.We] = 2, fl[P.g.eg] = 3, fl);

    function hl(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var il = function() {
            if (T(106)) {
                for (var a = "1", b = 0; b < $k.length; b++) {
                    var c = a,
                        d, e = $k[b],
                        f = nk[e];
                    d = void 0 === f ? 0 : gl.hasOwnProperty(f) ? 12 | gl[f] : 8;
                    var g = qk();
                    g.accessedAny = !0;
                    var h = g.entries[e] || {};
                    d = d << 2 | hl(h.implicit);
                    a = c + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [d] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [hl(h.declare) << 4 | hl(h.default) << 2 | hl(h.update)])
                }
                return a
            }
            for (var m = "G1", n = 0; n < Zk.length; n++) switch (Dk(Zk[n])) {
                case 3:
                    m += "1";
                    break;
                case 2:
                    m += "0";
                    break;
                case 1:
                    m += "-"
            }
            return m
        },
        jl = function() {
            var a = qk(),
                b = a.cps,
                c = [],
                d;
            for (d in ok) ok.hasOwnProperty(d) && ok[d].enabled && (a.usedSetCps ? b.hasOwnProperty(d) && b[d].enabled && c.push(d) : c.push(d));
            for (var e = "", f = 0; f < c.length; f++) {
                var g = dl[c[f]];
                g && (e += g)
            }
            return "" === e ? "-" : e
        };
    var kl = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var ll = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var ml = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        nl = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function ol(a) {
        return "null" !== a.origin
    };
    var rl = function(a, b, c, d) {
            return pl(d) ? ll(a, String(b || ql()), c) : []
        },
        ul = function(a, b, c, d, e) {
            if (pl(e)) {
                var f = sl(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = tl(f, function(g) {
                        return g.Lf
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = tl(f, function(g) {
                        return g.Ge
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function vl(a, b, c, d) {
        var e = ql(),
            f = window;
        ol(f) && (f.document.cookie = a);
        var g = ql();
        return e != g || void 0 != c && 0 <= rl(b, g, !1, d).indexOf(c)
    }
    var zl = function(a, b, c, d) {
            function e(w, x, y) {
                if (null == y) return delete h[x], w;
                h[x] = y;
                return w + "; " + x + "=" + y
            }

            function f(w, x) {
                if (null == x) return delete h[x], w;
                h[x] = !0;
                return w + "; " + x
            }
            if (!pl(c.Fb)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = wl(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var m;
            c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
            g = e(g, "expires", m);
            g = e(g, "max-age", c.Nl);
            g = e(g, "samesite",
                c.km);
            c.mm && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = xl(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                    var u = "none" !== p[t] ? p[t] : void 0,
                        v = e(g, "domain", u);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h)
                    } catch (w) {
                        q = w;
                        continue
                    }
                    r = !0;
                    if (!yl(u, c.path) && vl(v, a, b, c.Fb)) return 0
                }
                if (q && !r) throw q;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return yl(n, c.path) ? 1 : vl(g, a, b, c.Fb) ? 0 : 1
        },
        Al = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return zl(a,
                b, c)
        };

    function tl(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                m = b(h);
            m === c ? d.push(h) : void 0 === f || m < f ? (e = [h], f = m) : m === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function sl(a, b, c) {
        for (var d = [], e = rl(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    Lf: 1 * m[0] || 1,
                    Ge: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var wl = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Bl = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Cl = /(^|\.)doubleclick\.net$/i,
        yl = function(a, b) {
            return Cl.test(window.document.location.hostname) || "/" === b && Bl.test(a)
        },
        ql = function() {
            return ol(window) ? window.document.cookie : ""
        },
        xl = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Cl.test(e) || Bl.test(e) || a.push("none");
            return a
        },
        pl = function(a) {
            return jk().h() && a && Fk() ? Ek(a) ? Ck(a) : !1 : !0
        };
    var Dl = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ kl(a) & 2147483647) : String(b)
        },
        El = function(a) {
            return [Dl(a), Math.round(Va() / 1E3)].join(".")
        },
        Hl = function(a, b, c, d, e) {
            var f = Fl(b);
            return ul(a, f, Gl(c), d, e)
        },
        Il = function(a, b, c, d) {
            var e = "" + Fl(c),
                f = Gl(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Fl = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Gl = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var Jl = function() {
        Mh.dedupe_gclid || (Mh.dedupe_gclid = "" + El());
        return Mh.dedupe_gclid
    };
    var Kl = function() {
        var a = !1;
        return a
    };
    var Ml = function(a, b) {
            var c = Ll();
            c.pending || (c.pending = []);
            La(c.pending, function(d) {
                return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
            }) || c.pending.push({
                target: a,
                onLoad: b
            })
        },
        Nl = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = [];
            this.siloed = []
        },
        Ll = function() {
            var a = lc("google_tag_data", {}),
                b = a.tidr;
            b || (b = new Nl, a.tidr = b);
            return b
        };
    var Ol = {},
        Pl = !1,
        rf = {
            ctid: "GTM-PFKS3S",
            Jf: "2133962",
            Uf: "GTM-PFKS3S",
            Hj: "GTM-PFKS3S"
        };
    Ol.zf = Ra("");
    var Rl = function() {
            var a = rf.Uf ? rf.Uf.split("|") : [rf.ctid];
            return Pl ? a.map(Ql) : a
        },
        Tl = function() {
            var a = Sl();
            return Pl ? a.map(Ql) : a
        },
        Vl = function() {
            return Ul(rf.ctid)
        },
        Wl = function(a) {
            return a ? rf.Jf : Ul(rf.Jf || "_" + rf.ctid)
        },
        Sl = function() {
            return rf.Hj ? rf.Hj.split("|") : []
        },
        Xl = function(a) {
            var b = Ll();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        },
        Ul = function(a) {
            return T(138) ? Pl ? Ql(a) : a : a
        },
        Ql = function(a) {
            return T(138) ? "s_" + a : a
        },
        Yl = function() {
            if (T(138)) {
                var a = !1;
                if (a) {
                    var b = Ll();
                    if (b.siloed) {
                        for (var c = [], d = rf.Uf ? rf.Uf.split("|") : [rf.ctid], e = Sl(), f = {}, g = 0; g < b.siloed.length; f = {
                                wd: f.wd
                            }, g++) f.wd = b.siloed[g], !Pl && La(f.wd.isDestination ? e : d, function(h) {
                            return function(m) {
                                return m === h.wd.ctid
                            }
                        }(f)) ? Pl = !0 : c.push(f.wd);
                        b.siloed = c
                    }
                }
            }
        };

    function Zl() {
        var a = Ll();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Rl(), f = Tl(), g = {}, h = 0; h < a.pending.length; g = {
                    Ic: g.Ic
                }, h++) g.Ic = a.pending[h], La(g.Ic.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.Ic.target.ctid
                }
            }(g)) ? d || (b = g.Ic.onLoad, d = !0) : c.push(g.Ic);
            a.pending = c;
            if (b) try {
                b(Wl())
            } catch (m) {}
        }
    }
    var $l = function() {
            for (var a = Ll(), b = Rl(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = Rl(), d.destinations = Tl()) : a.container[b[c]] = {
                    state: 2,
                    containers: Rl(),
                    destinations: Tl()
                }
            }
            for (var e = Tl(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && O(93);
                g ? (g.state = 2, g.containers = Rl(), g.destinations = Tl()) : a.destination[e[f]] = {
                    state: 2,
                    containers: Rl(),
                    destinations: Tl()
                }
            }
            T(132) && (a.canonical[Wl()] = {});
            Zl()
        },
        am = function(a) {
            return !!Ll().container[a]
        },
        bm = function() {
            return {
                ctid: Vl(),
                isDestination: Ol.zf
            }
        };

    function cm(a) {
        if (T(138)) {
            var b = Ll();
            (b.siloed = b.siloed || []).push(a)
        }
    }
    var dm = function() {
            var a = Ll().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        em = function() {
            var a = {};
            l(Ll().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };
    var fm = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        gm = function(a) {
            var b = rf.ctid.split("-")[0].toUpperCase(),
                c = {};
            c.ctid = rf.ctid;
            c.gm = Lh.ne;
            c.jm = Lh.ah;
            c.Kl = Ol.zf ? 2 : 1;
            Sh ? (c.Yf = fm[b], c.Yf || (c.Yf = 0)) : c.Yf = Yh ? 13 : 10;
            Wh ? c.Gh = 1 : Kl() ? c.Gh = 2 : c.Gh = 3;
            var d;
            var e = c.Yf,
                f = c.Gh;
            void 0 === e ? d = "" : (f || (f = 0), d = "" + gg(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e << 2 | f]);
            var g = c.Tm,
                h = 4 + d + (g ? "" + gg(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [g] : ""),
                m, n = c.jm;
            m = n &&
                fg.test(n) ? "" + gg(3, 2) + n : "";
            var p, q = c.gm;
            p = q ? "" + gg(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [q] : "";
            var r;
            var t = c.ctid;
            if (t && a) {
                var u = t.split("-"),
                    v = u[0].toUpperCase();
                if ("GTM" !== v && "OPT" !== v) r = "";
                else {
                    var w = u[1];
                    r = "" + gg(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + w.length] + (c.Kl || 0) + w
                }
            } else r = "";
            return h + m + p + r
        };

    function hm(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var im = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function jm() {
        return Jb ? !!Qb && !!Qb.platform : !1
    }

    function km() {
        return Tb("iPhone") && !Tb("iPod") && !Tb("iPad")
    }

    function lm() {
        km() || Tb("iPad") || Tb("iPod")
    };
    Vb();
    Ub() || Tb("Trident") || Tb("MSIE");
    Tb("Edge");
    !Tb("Gecko") || -1 != Pb().toLowerCase().indexOf("webkit") && !Tb("Edge") || Tb("Trident") || Tb("MSIE") || Tb("Edge"); - 1 != Pb().toLowerCase().indexOf("webkit") && !Tb("Edge") && Tb("Mobile");
    jm() || Tb("Macintosh");
    jm() || Tb("Windows");
    (jm() ? "Linux" === Qb.platform : Tb("Linux")) || jm() || Tb("CrOS");
    var mm = sa.navigator || null;
    mm && (mm.appVersion || "").indexOf("X11");
    jm() || Tb("Android");
    km();
    Tb("iPad");
    Tb("iPod");
    lm();
    Pb().toLowerCase().indexOf("kaios");
    var nm = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var h = a.charCodeAt(e + f);
                    if (!h || 61 == h || 38 == h || 35 == h) return e
                }
                e += f + 1
            }
            return -1
        },
        om = /#|$/,
        pm = function(a, b) {
            var c = a.search(om),
                d = nm(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        qm = /[?&]($|#)/,
        rm = function(a, b, c) {
            for (var d, e = a.search(om), f = 0, g, h = []; 0 <= (g = nm(a, f, b, e));) h.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            h.push(a.slice(f));
            d = h.join("").replace(qm, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var sm = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        hk(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        tm = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function um(a) {
        if (!a || !G.head) return null;
        var b = vm("META");
        G.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var wm = function() {
            if (z.top == z) return 0;
            var a = z.location.ancestorOrigins;
            return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : sm(z.top) ? 1 : 2
        },
        vm = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function xm(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = vm("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        h = Ab(g, e);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            im(e, "load", f);
            im(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Qm = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            tm(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Pm(c, b)
        },
        Pm = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else xm(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Rm = function() {};
    var Sm = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Tm = function(a, b) {
            b = void 0 === b ? {} : b;
            this.m = a;
            this.h = null;
            this.J = {};
            this.rb = 0;
            var c;
            this.R = null != (c = b.zm) ? c : 500;
            var d;
            this.C = null != (d = b.Um) ? d : !1;
            this.B = null
        };
    ra(Tm, Rm);
    Tm.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.C
            },
            d = nl(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.R && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.R));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Sm(c), c.internalBlockOnErrors = b.C, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Um(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Tm.prototype.removeEventListener = function(a) {
        a && a.listenerId && Um(this, "removeEventListener", null, a.listenerId)
    };
    var Wm = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var m;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = Vm(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Vm(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === h ? a.purpose && a.vendor ? Vm(a.purpose.legitimateInterests,
                b) && Vm(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Vm = function(a, b) {
            return !(!a || !a[b])
        },
        Um = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) {
                var e = a.m.__tcfapi;
                e(b, 2, c, d)
            } else if (Xm(a)) {
                Ym(a);
                var f = ++a.rb;
                a.J[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Xm = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.m, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (h) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (h) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Ym = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.J[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, im(a.m, "message", a.B))
        },
        Zm = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Sm(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Qm({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var $m = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        an = hm('', 500);

    function bn() {
        var a = Mh.tcf || {};
        return Mh.tcf = a
    }
    var hn = function() {
        var a = bn(),
            b = new Tm(z, {
                zm: -1
            });
        cn(b) && dn() && O(124);
        if (!dn() && !a.active && cn(b)) {
            a.active = !0;
            a.Vf = {};
            en();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) fn(a), gn(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in $m) $m.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {},
                                h;
                            for (h in $m)
                                if ($m.hasOwnProperty(h))
                                    if ("1" ===
                                        h) {
                                        var m, n = c,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        m = Zm(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Wm(n, "1", 0) : !1;
                                        g["1"] = m
                                    } else g[h] = Wm(c, h, $m[h]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.Vf = d, gn(a))
                    }
                })
            } catch (c) {
                fn(a), gn(a)
            }
        }
    };

    function fn(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function en() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = an, a);
        Rk(b)
    }

    function cn(a) {
        return "function" === typeof z.__tcfapi || "function" === typeof a.m.__tcfapi || null != Xm(a) ? !0 : !1
    }
    var dn = function() {
        return !0 !== z.gtag_enable_tcf_support
    };

    function gn(a) {
        var b = {},
            c = (b.ad_storage = a.Vf["1"] ? "granted" : "denied", b);
        Sk(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: jn()
        })
    }
    var jn = function() {
            var a = bn();
            return a.active ? a.tcString || "" : ""
        },
        kn = function() {
            var a = bn();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        ln = function(a) {
            if (!$m.hasOwnProperty(String(a))) return !0;
            var b = bn();
            return b.active && b.Vf ? !!b.Vf[String(a)] : !0
        };
    var mn = function(a) {
            var b = String(a[re.Sb] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        nn = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var on = {
            sampleRate: "0.005000",
            Wj: "",
            Vj: Number("5"),
            bn: Number("")
        },
        pn = [];

    function qn(a) {
        pn.push(a)
    }
    var rn = !1,
        sn;
    if (!(sn = nn)) {
        var tn = Math.random(),
            un = on.sampleRate;
        sn = tn < Number(un)
    }
    var vn = sn,
        wn = "https://www.googletagmanager.com/a?id=" + rf.ctid,
        xn = void 0,
        yn = {},
        zn = void 0,
        An = new function() {
            var a = 5;
            0 < on.Vj && (a = on.Vj);
            this.h = 0;
            this.B = [];
            this.m = a
        },
        Bn = 1E3;

    function Cn(a) {
        var b = xn;
        if (void 0 === b) return "";
        for (var c = [wn], d = 0; d < pn.length; d++) {
            var e = pn[d]({
                eventId: b,
                Xb: !!a,
                Pj: function() {
                    rn = !0
                }
            });
            "&" === e[0] && c.push(e)
        }
        c.push("&z=0");
        return c.join("")
    }

    function Dn() {
        zn && (z.clearTimeout(zn), zn = void 0);
        if (void 0 !== xn && En) {
            var a;
            (a = yn[xn]) || (a = An.h < An.m ? !1 : 1E3 > Va() - An.B[An.h % An.m]);
            if (a || 0 >= Bn--) O(1), yn[xn] = !0;
            else {
                var b = An.h++ % An.m;
                An.B[b] = Va();
                var c = Cn(!0);
                tc(c);
                if (rn) {
                    var d = c.replace("/a?", "/td?");
                    tc(d)
                }
                En = rn = !1
            }
        }
    }
    var En = !1;

    function Fn(a) {
        yn[a] || (a !== xn && (Dn(), xn = a), En = !0, zn || (zn = z.setTimeout(Dn, 500)), 2022 <= Cn().length && Dn())
    }
    var Gn = Ma();

    function Hn() {
        Gn = Ma()
    }

    function In() {
        return ["&v=3&t=t", "&pid=" + Gn].join("")
    };
    var Jn = void 0;

    function Kn(a) {
        var b = "";
        return b
    };
    var Ln = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    Wb();
    km() || Tb("iPod");
    Tb("iPad");
    !Tb("Android") || Xb() || Wb() || Vb() || Tb("Silk");
    Xb();
    !Tb("Safari") || Xb() || (Ub() ? 0 : Tb("Coast")) || Vb() || (Ub() ? 0 : Tb("Edge")) || (Ub() ? Sb("Microsoft Edge") : Tb("Edg/")) || (Ub() ? Sb("Opera") : Tb("OPR")) || Wb() || Tb("Silk") || Tb("Android") || lm();
    var Mn = {},
        Nn = null,
        On = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!Nn) {
                Nn = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(h[m].split(""));
                    Mn[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === Nn[q] && (Nn[q] = p)
                    }
                }
            }
            for (var r = Mn[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    A = b[v + 2],
                    B = r[x >> 2],
                    D = r[(x & 3) << 4 | y >> 4],
                    F = r[(y & 15) << 2 | A >> 6],
                    K = r[A & 63];
                t[w++] = "" + B + D + F + K
            }
            var H = 0,
                N = u;
            switch (b.length - v) {
                case 2:
                    H = b[v + 1], N = r[(H & 15) << 2] || u;
                case 1:
                    var Q = b[v];
                    t[w] = "" + r[Q >> 2] + r[(Q & 3) << 4 | H >> 4] + N + u
            }
            return t.join("")
        };
    var Pn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Qn(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function Rn() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Sn() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function Tn(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function Un() {
        var a = z;
        if (!Tn(a)) return null;
        var b = Qn(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(Pn).then(function(d) {
            null != b.uach || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };
    var Vn, Wn = function() {
            if (Tn(z) && (Vn = Va(), !Sn())) {
                var a = Un();
                a && (a.then(function() {
                    O(95);
                }), a.catch(function() {
                    O(96)
                }))
            }
        },
        Yn = function(a) {
            var b = Xn.Dm,
                c = function(g, h) {
                    try {
                        a(g, h)
                    } catch (m) {}
                },
                d = Rn();
            if (d) c(d);
            else {
                var e = Sn();
                if (e) {
                    b =
                        Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = z.setTimeout(function() {
                        c.De || (c.De = !0, O(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.De || (c.De = !0, O(104), z.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.De || (c.De = !0, O(105), z.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        Zn = function(a, b) {
            a && (b.m[P.g.Xd] = a.architecture, b.m[P.g.Yd] = a.bitness, a.fullVersionList && (b.m[P.g.Zd] = a.fullVersionList.map(function(c) {
                    return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
                }).join("|")),
                b.m[P.g.ae] = a.mobile ? "1" : "0", b.m[P.g.be] = a.model, b.m[P.g.ce] = a.platform, b.m[P.g.de] = a.platformVersion, b.m[P.g.ee] = a.wow64 ? "1" : "0")
        };

    function $n(a, b, c, d) {
        var e, f = Number(null != a.Db ? a.Db : void 0);
        0 !== f && (e = new Date((b || Va()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Fb: d
        }
    };
    var ao;
    var fo = function() {
            var a = bo,
                b = co,
                c = eo(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                uc(G, "mousedown", d);
                uc(G, "keyup", d);
                uc(G, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        go = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            eo().decorators.push(f)
        },
        ho = function(a, b, c) {
            for (var d = eo().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== G.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        h = !0;
                        break a
                    }
                    h = !1
                }
                if (h) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Ya(e, g.callback())
                }
            }
            return e
        };

    function eo() {
        var a = lc("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var io = /(.*?)\*(.*?)\*(.*)/,
        jo = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        ko = /^(?:www\.|m\.|amp\.)+/,
        lo = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function mo(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var oo = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(ub(String(d))))
            }
        var e = b.join("*");
        return ["1", no(e), e].join("*")
    };

    function no(a, b) {
        var c = [jc.userAgent, (new Date).getTimezoneOffset(), jc.userLanguage || jc.language, Math.floor(Va() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = ao)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        ao = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ ao[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function po() {
        return function(a) {
            var b = hj(z.location.href),
                c = b.search.replace("?", ""),
                d = cj(c, "_gl", !1, !0) || "";
            a.query = qo(d) || {};
            var e = fj(b, "fragment").match(mo("_gl"));
            a.fragment = qo(e && e[3] || "") || {}
        }
    }

    function ro(a, b) {
        var c = mo(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var so = function(a, b) {
            b || (b = "_gl");
            var c = lo.exec(a);
            if (!c) return "";
            var d = c[1],
                e = ro(b, (c[2] || "").slice(1)),
                f = ro(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        to = function(a) {
            var b = po(),
                c = eo();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ya(d, e.query), a && Ya(d, e.fragment));
            return d
        },
        qo = function(a) {
            try {
                var b = uo(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = vb(d[e + 1]);
                        c[f] = g
                    }
                    xb("TAGGING", 6);
                    return c
                }
            } catch (h) {
                xb("TAGGING",
                    8)
            }
        };

    function uo(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = io.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === no(h, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return h;
                xb("TAGGING", 7)
            }
        }
    }

    function vo(a, b, c, d) {
        function e(p) {
            p = ro(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = lo.exec(c);
        if (!f) return "";
        var g = f[1],
            h = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + m
    }

    function wo(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = ho(b, 1, c),
            e = ho(b, 2, c),
            f = ho(b, 3, c);
        if (Za(d)) {
            var g = oo(d);
            c ? xo("_gl", g, a) : yo("_gl", g, a, !1)
        }
        if (!c && Za(e)) {
            var h = oo(e);
            yo("_gl", h, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        yo(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        xo(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && vo(n, p, q)
            }
    }

    function yo(a, b, c, d) {
        if (c.href) {
            var e = vo(a, b, c.href, void 0 === d ? !1 : d);
            Ib.test(e) && (c.href = e)
        }
    }

    function xo(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = G.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = vo(a, b, c.action);
                Ib.test(n) && (c.action = n)
            }
        }
    }

    function bo(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || wo(e, e.hostname)
            }
        } catch (g) {}
    }

    function co(a) {
        try {
            if (a.action) {
                var b = fj(hj(a.action), "host");
                wo(a, b)
            }
        } catch (c) {}
    }
    var zo = function(a, b, c, d) {
            fo();
            go(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Ao = function(a, b) {
            fo();
            go(a, [ej(z.location, "host", !0)], b, !0, !0)
        },
        Bo = function() {
            var a = G.location.hostname,
                b = jo.exec(G.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(ko, ""),
                m = e.replace(ko, ""),
                n;
            if (!(n = h === m)) {
                var p = "." + m;
                n = h.substring(h.length - p.length,
                    h.length) === p
            }
            return n
        },
        Co = function(a, b) {
            return !1 === a ? !1 : a || b || Bo()
        };
    var Do = ["1"],
        Eo = {},
        Fo = {},
        Ho = function(a) {
            return Eo[Go(a)]
        },
        Lo = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Go(a.prefix);
            if (!Eo[c])
                if (Io(c, a.path, a.domain)) {
                    if (si(1)) {
                        var d = Fo[Go(a.prefix)];
                        Jo(a, d ? d.id : void 0, d ? d.Dh : void 0)
                    }
                } else {
                    var e = jj("auiddc");
                    if (e) xb("TAGGING", 17), Eo[c] = e;
                    else if (b) {
                        var f = Go(a.prefix),
                            g = El();
                        if (0 === Ko(f, g, a)) {
                            var h = lc("google_tag_data", {});
                            h._gcl_au || (h._gcl_au = g)
                        }
                        Io(c, a.path, a.domain)
                    }
                }
        };

    function Jo(a, b, c) {
        var d = Go(a.prefix),
            e = Eo[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var h = e;
                    b && (h = e + "." + b + "." + (c ? c : Math.floor(Va() / 1E3)));
                    Ko(d, h, a, 1E3 * g)
                }
            }
        }
    }

    function Ko(a, b, c, d) {
        var e = Il(b, "1", c.domain, c.path),
            f = $n(c, d);
        f.Fb = "ad_storage";
        return Al(a, e, f)
    }

    function Io(a, b, c) {
        var d = Hl(a, b, c, Do, "ad_storage");
        if (!d) return !1;
        Mo(a, d);
        return !0
    }

    function Mo(a, b) {
        var c = b.split(".");
        5 === c.length ? (Eo[a] = c.slice(0, 2).join("."), Fo[a] = {
            id: c.slice(2, 4).join("."),
            Dh: Number(c[4]) || 0
        }) : 3 === c.length ? Fo[a] = {
            id: c.slice(0, 2).join("."),
            Dh: Number(c[2]) || 0
        } : Eo[a] = b
    }

    function Go(a) {
        return (a || "_gcl") + "_au"
    }

    function No(a) {
        Fk() ? Jk(function() {
            Ck("ad_storage") ? a() : Kk(a, "ad_storage")
        }, ["ad_storage"]) : a()
    }

    function Oo(a) {
        var b = to(!0),
            c = Go(a.prefix);
        No(function() {
            var d = b[c];
            if (d) {
                Mo(c, d);
                var e = 1E3 * Number(Eo[c].split(".")[1]);
                if (e) {
                    xb("TAGGING", 16);
                    var f = $n(a, e);
                    f.Fb = "ad_storage";
                    var g = Il(d, "1", a.domain, a.path);
                    Al(c, g, f)
                }
            }
        })
    }

    function Po(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                h = Hl(a, e.path, e.domain, Do, "ad_storage");
            h && (g[a] = h);
            return g
        };
        No(function() {
            zo(f, b, c, d)
        })
    };
    var Qo = function(a) {
        for (var b = [], c = G.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Yh: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };

    function Ro(a, b) {
        var c = Qo(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Yh] || (d[c[e].Yh] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    fa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Yh].push(g)
            }
        }
        return d
    };
    var So = /^\w+$/,
        To = /^[\w-]+$/,
        Uo = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        Vo = function() {
            return jk().h() && Fk() ? Ck("ad_storage") : !0
        },
        Wo = function(a, b) {
            Ek("ad_storage") ? Vo() ? a() : Kk(a, "ad_storage") : b ? xb("TAGGING", 3) : Jk(function() {
                Wo(a, !0)
            }, ["ad_storage"])
        },
        Yo = function(a) {
            return Xo(a).map(function(b) {
                return b.fa
            })
        },
        Xo = function(a) {
            var b = [];
            if (!ol(z) || !G.cookie) return b;
            var c = rl(a, G.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Qe: d.Qe
                }, e++) {
                var f = Zo(c[e]);
                if (null != f) {
                    var g = f,
                        h = g.version;
                    d.Qe = g.fa;
                    var m = g.timestamp,
                        n = g.labels,
                        p = La(b, function(q) {
                            return function(r) {
                                return r.fa === q.Qe
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = $o(p.labels, n || [])) : b.push({
                        version: h,
                        fa: d.Qe,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return ap(b)
        };

    function $o(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function bp(a) {
        return a && "string" == typeof a && a.match(So) ? a : "_gcl"
    }
    var dp = function() {
            var a = hj(z.location.href),
                b = fj(a, "query", !1, void 0, "gclid"),
                c = fj(a, "query", !1, void 0, "gclsrc"),
                d = fj(a, "query", !1, void 0, "wbraid"),
                e = fj(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || cj(f, "gclid", !1);
                c = c || cj(f, "gclsrc", !1);
                d = d || cj(f, "wbraid", !1)
            }
            return cp(b, c, e, d)
        },
        cp = function(a, b, c, d) {
            var e = {},
                f = function(g, h) {
                    e[h] || (e[h] = []);
                    e[h].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && To.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(To)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        fp = function(a) {
            var b = dp();
            Wo(function() {
                ep(b, !1, a)
            })
        };

    function ep(a, b, c, d, e) {
        function f(w, x) {
            var y = gp(w, g);
            y && (Al(y, x, h), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = bp(c.prefix);
        d = d || Va();
        var h = $n(c, d, !0);
        h.Fb = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var x = ["GCL", n, w];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = gp("gb", g),
                t = !1;
            if (!b)
                for (var u = Xo(r), v = 0; v < u.length; v++) u[v].fa === q && u[v].labels &&
                    0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var ip = function(a, b) {
            var c = to(!0);
            Wo(function() {
                for (var d = bp(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Uo[f]) {
                        var g = gp(f, d),
                            h = c[g];
                        if (h) {
                            var m = Math.min(hp(h), Va()),
                                n;
                            b: {
                                var p = m;
                                if (ol(z))
                                    for (var q = rl(g, G.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (hp(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = $n(b, m, !0);
                                t.Fb = "ad_storage";
                                Al(g, h, t)
                            }
                        }
                    }
                }
                ep(cp(c.gclid, c.gclsrc), !1, b)
            })
        },
        gp = function(a, b) {
            var c = Uo[a];
            if (void 0 !== c) return b + c
        },
        hp = function(a) {
            return 0 !== jp(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Zo(a) {
        var b = jp(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            fa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function jp(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !To.test(a[2]) ? [] : a
    }
    var kp = function(a, b, c, d, e) {
            if (Ka(b) && ol(z)) {
                var f = bp(e),
                    g = function() {
                        for (var h = {}, m = 0; m < a.length; ++m) {
                            var n = gp(a[m], f);
                            if (n) {
                                var p = rl(n, G.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1])
                            }
                        }
                        return h
                    };
                Wo(function() {
                    zo(g, b, c, d)
                })
            }
        },
        ap = function(a) {
            return a.filter(function(b) {
                return To.test(b.fa)
            })
        },
        lp = function(a, b) {
            if (ol(z)) {
                for (var c = bp(b.prefix), d = {}, e = 0; e < a.length; e++) Uo[a[e]] && (d[a[e]] = Uo[a[e]]);
                Wo(function() {
                    l(d, function(f, g) {
                        var h = rl(c + g, G.cookie, void 0, "ad_storage");
                        h.sort(function(t,
                            u) {
                            return hp(u) - hp(t)
                        });
                        if (h.length) {
                            var m = h[0],
                                n = hp(m),
                                p = 0 !== jp(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== jp(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            ep(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function mp(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var np = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (Fk()) {
                var c = dp();
                if (mp(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    Ao(function() {
                        return d
                    }, 3);
                    Ao(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        op = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!Vo()) return e;
            var f = Xo(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var h = f[0],
                    m = f[0].timestamp,
                    n = [h.version, Math.round(m /
                        1E3), h.fa].concat(h.labels || [], [b]).join("."),
                    p = $n(c, m, !0);
                p.Fb = "ad_storage";
                Al(a, n, p)
            }
            return e
        };

    function pp(a, b) {
        var c = bp(b),
            d = gp(a, c);
        if (!d) return 0;
        for (var e = Xo(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function qp(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var rp = function(a) {
        var b = Math.max(pp("aw", a), qp(Vo() ? Ro() : {}));
        return Math.max(pp("gb", a), qp(Vo() ? Ro("_gac_gb", !0) : {})) > b
    };
    var sp = function(a, b) {
            var c = a && !Ck(P.g.F);
            return b && c ? "0" : b
        },
        vp = function(a) {
            function b(u) {
                var v;
                Mh.reported_gclid || (Mh.reported_gclid = {});
                v = Mh.reported_gclid;
                var w, x = g;
                w = !g || Fk() && !Ck(P.g.F) ? m + (u ? "gcu" : "gcs") : m + "." + (f.prefix || "_gcl") + (u ? "gcu" : "gcs");
                if (!v[w]) {
                    v[w] = !0;
                    var y = [],
                        A = {},
                        B = function(aa, W) {
                            W && (y.push(aa + "=" + encodeURIComponent(W)), A[aa] = !0)
                        },
                        D = "https://www.google.com";
                    if (Fk()) {
                        var F = Ck(P.g.F);
                        B("gcs", el());
                        u && B("gcu", "1");
                        (T(106) || Gk()) && B("gcd", il());
                        B("rnd", Jl());
                        if ((!m || n && "aw.ds" !== n) && Ck(P.g.F)) {
                            var K = Yo("_gcl_aw");
                            B("gclaw", K.join("."))
                        }
                        B("url", String(z.location).split(/[?#]/)[0]);
                        B("dclid", sp(d, p));
                        F || (D = "https://pagead2.googlesyndication.com")
                    }
                    T(109) && (Vk() && B("dma_cps", jl()), Ji() && B("dma", "1"));
                    B("gdpr_consent", jn());
                    B("gdpr", kn());
                    "1" === to(!1)._up && B("gtm_up", "1");
                    B("gclid", sp(d, m));
                    B("gclsrc", n);
                    if (!(A.gclid || A.dclid || A.gclaw) && (B("gbraid", sp(d, q)), !A.gbraid && Fk() && Ck(P.g.F))) {
                        var H =
                            Yo("_gcl_gb");
                        0 < H.length && B("gclgb", H.join("."))
                    }
                    B("gtm", gm(!e));
                    g && Ck(P.g.F) && (Lo(f || {}), x && B("auid", Ho(f.prefix) || ""));
                    up || a.Aj && B("did", a.Aj);
                    a.Qf && B("gdid", a.Qf);
                    a.Mf && B("edid", a.Mf);
                    var N = T(64) ? Rn() : null;
                    if (N) {
                        var Q = function(aa, W) {
                            y.push(aa + "=" + encodeURIComponent(W));
                            A[aa] = !0
                        };
                        Q("uaa", N.architecture);
                        Q("uab", N.bitness);
                        N.fullVersionList && Q("uafvl", N.fullVersionList.map(function(aa) {
                            return encodeURIComponent(aa.brand || "") + ";" + encodeURIComponent(aa.version || "")
                        }).join("|"));
                        Q("uam", N.model);
                        Q("uap",
                            N.platform);
                        Q("uapv", N.platformVersion);
                        Q("uaw", N.wow64 ? "1" : "0")
                    }
                    var ca = D + "/pagead/landing?" + y.join("&");
                    Ac(ca)
                }
            }
            var c = !!a.Kf,
                d = !!a.Je,
                e = a.Wh,
                f = void 0 === a.xc ? {} : a.xc,
                g = void 0 === a.Ce ? !0 : a.Ce,
                h = dp(),
                m = h.gclid || "",
                n = h.gclsrc,
                p = h.dclid || "",
                q = h.gbraid || "",
                r = !c && ((!m || n && "aw.ds" !== n ? !1 : !0) || q),
                t = Fk();
            if (r || t) t ? Yk(function() {
                b();
                Ck(P.g.F) || Xk(function(u) {
                    return b(!0, u.consentEventId, u.consentPriorityId)
                }, P.g.F)
            }, [P.g.F]) : b()
        },
        tp = function(a) {
            var b = String(z.location).split(/[?#]/)[0],
                c = Lh.dk || z._CONSENT_MODE_SALT;
            return a ? c ? String(kl(b + a + c)) : "0" : ""
        },
        up = !1;
    var wp = /[A-Z]+/,
        xp = /\s/,
        yp = function(a, b) {
            if (k(a)) {
                a = Ta(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (wp.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b && T(120)) {
                            var g = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = g(e);
                            if ("DC" === d && 2 === f.length) {
                                var h = g(f[1]);
                                2 === h.length && (f[1] = h[0], f.push(h[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var m = 0; m < f.length; m++)
                                if (!f[m] || xp.test(f[m]) && ("AW" !== d || 1 !== m)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            ba: d + "-" + f[0],
                            I: f
                        }
                    }
                }
            }
        },
        Ap = function(a,
            b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = yp(a[d], b);
                e && (c[e.id] = e)
            }
            zp(c);
            var f = [];
            l(c, function(g, h) {
                f.push(h)
            });
            return f
        };

    function zp(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.I[1] && b.push(d.ba)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Bp = function(a, b, c, d) {
        var e = rc(),
            f;
        if (1 === e) a: {
            var g = $h;g = g.toLowerCase();
            for (var h = "https://" + g, m = "http://" + g, n = 1, p = G.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(h) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var Dp = function(a, b, c) {
            if (z[a.functionName]) return b.Kh && I(b.Kh), z[a.functionName];
            var d = Cp();
            z[a.functionName] = d;
            if (a.Hf)
                for (var e = 0; e < a.Hf.length; e++) z[a.Hf[e]] = z[a.Hf[e]] || Cp();
            a.Rf && void 0 === z[a.Rf] && (z[a.Rf] = c);
            qc(Bp("https://", "http://", a.Uh), b.Kh, b.Ql);
            return d
        },
        Cp = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Ep = {
            functionName: "_googWcmImpl",
            Rf: "_googWcmAk",
            Uh: "www.gstatic.com/wcm/loader.js"
        },
        Fp = {
            functionName: "_gaPhoneImpl",
            Rf: "ga_wpid",
            Uh: "www.gstatic.com/gaphone/loader.js"
        },
        Gp = {
            Yj: "",
            Ik: "5"
        },
        Hp = {
            functionName: "_googCallTrackingImpl",
            Hf: [Fp.functionName, Ep.functionName],
            Uh: "www.gstatic.com/call-tracking/call-tracking_" + (Gp.Yj || Gp.Ik) + ".js"
        },
        Ip = {},
        Jp = function(a, b, c, d) {
            O(22);
            if (c) {
                d = d || {};
                var e = Dp(Ep, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Eb && (f.autoreplace = c);
                e(2, d.Eb, f, c, 0, Ua(), d.options)
            }
        },
        Kp = function(a, b, c, d) {
            O(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ua()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    Ip[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.I.length ? (e.adData = {
                            ak: g.I[0],
                            cl: g.I[1]
                        }, Ip[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.ba
                        }, Ip[g.id] = !0))
                }(e.gaData || e.adData) && Dp(Hp, d)(d.Eb, e, d.options)
            }
        },
        Lp = function() {
            var a = !1;
            return a
        },
        Mp = function(a, b) {
            if (a)
                if (Kl()) {} else {
                    if (k(a)) {
                        var c =
                            yp(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = U(b, P.g.Si);
                    if (f && Ka(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var h = yp(f[g]);
                            h && (d.push(h), (a.id === h.id || a.id === a.ba && a.ba === h.ba) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = U(b, P.g.Kg),
                            n;
                        if (m) {
                            Ka(m) ? n = m : n = [m];
                            var p = U(b, P.g.Ig),
                                q = U(b, P.g.Jg),
                                r = U(b, P.g.Lg),
                                t = U(b, P.g.Ri),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) Kp(d, n[w], t, {
                                        Eb: u,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix && a.I[1]) Lp() ? Kp([a], n[w], t || "US", {
                                Eb: u,
                                options: r
                            }) : Jp(a.I[0], a.I[1], n[w], {
                                Eb: u,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (Lp()) Kp([a], n[w], t || "US", {
                                    Eb: u
                                });
                                else {
                                    var x = a.ba,
                                        y = n[w],
                                        A = {
                                            Eb: u
                                        };
                                    O(23);
                                    if (y) {
                                        A = A || {};
                                        var B = Dp(Fp, A, x),
                                            D = {};
                                        void 0 !== A.Eb ? D.receiver = A.Eb : D.replace = y;
                                        D.ga_wpid = x;
                                        D.destination = y;
                                        B(2, Ua(), D)
                                    }
                                }
                        }
                    }
                }
        };
    var Np = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.h = c;
        this.m = {};
        this.metadata = J(c.eventMetadata || {});
        this.isAborted = !1
    };
    Np.prototype.copyToHitData = function(a, b) {
        var c = U(this.h, a);
        void 0 !== c ? this.m[a] = c : void 0 !== b && (this.m[a] = b)
    };
    var Op = function(a, b, c) {
        var d = Qi(a.target.ba);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function Pp(a) {
        return {
            getDestinationId: function() {
                return a.target.ba
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                a.m[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return U(a.h, b)
            },
            Pf: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.m)
            }
        }
    };
    var Rp = function(a) {
            var b = Qp[a.target.ba];
            if (!a.isAborted && b)
                for (var c = Pp(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c)
                    } catch (e) {
                        a.isAborted = !0
                    }
                    if (a.isAborted) break
                }
        },
        Sp = function(a, b) {
            var c = Qp[a];
            c || (c = Qp[a] = []);
            c.push(b)
        },
        Qp = {};
    var Vp = function(a) {
            a = a || {};
            var b;
            if (!Fk() || Ck(Tp)) {
                (b = Up(a)) || (b = El());
                var c = a,
                    d = Go(c.prefix);
                Jo(c, b);
                delete Eo[d];
                delete Fo[d];
                Io(d, c.path, c.domain);
                return Up(a)
            }
        },
        Up = function(a) {
            if (!Fk() || Ck(Tp)) {
                a = a || {};
                Lo(a, !1);
                var b = Fo[Go(bp(a.prefix))];
                if (b && !(18E5 < Va() - 1E3 * b.Dh)) {
                    var c = b.id,
                        d = c.split(".");
                    if (2 === d.length && !(864E5 < Va() - 1E3 * (Number(d[1]) || 0))) return c
                }
            }
        },
        Tp = P.g.F;
    var Wp = function(a, b) {
            var c = Mh.joined_auid = Mh.joined_auid || {},
                d = (a || "_gcl") + "." + b;
            if (c[d]) return !0;
            c[d] = !0;
            return !1
        },
        Xp = function() {
            var a = hj(z.location.href).search.replace("?", "");
            return "1" === cj(a, "gad", !1, !0)
        },
        Yp = function(a) {
            var b = [];
            l(a, function(c, d) {
                d = ap(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].fa);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        $p = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = jj("gcl" + a);
                if (d) return d.split(".")
            }
            var e = bp(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 :
                    c;
                var f = !Ck(Zp) && c,
                    g;
                g = dp()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var h = gp(a, e);
            return h ? Yo(h) : []
        },
        aq = function(a, b) {
            Ek(Zp) ? Ck(Zp) ? a() : Kk(a, Zp) : b ? O(42) : Yk(function() {
                aq(a, !0)
            }, [Zp])
        },
        Zp = P.g.F,
        bq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        cq = /^www.googleadservices.com$/,
        dq = function(a, b) {
            return $p("aw", a, b)
        },
        eq = function(a, b) {
            return $p("dc", a, b)
        },
        fq = function(a) {
            var b = jj("gac");
            return b ? !Ck(Zp) && a ? "0" : decodeURIComponent(b) : Yp(Vo() ? Ro() : {})
        },
        gq = function(a) {
            var b = jj("gacgb");
            return b ? !Ck(Zp) && a ? "0" : decodeURIComponent(b) :
                Yp(Vo() ? Ro("_gac_gb", !0) : {})
        },
        hq = function(a) {
            var b = dp(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw",
                g = T(93) && Xp();
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                fa: d,
                ye: f
            });
            e && c.push({
                fa: e,
                ye: "ds"
            });
            0 === c.length && b.gbraid && c.push({
                fa: b.gbraid,
                ye: "gb"
            });
            T(77) && 0 === c.length && "aw.ds" === f && c.push({
                fa: "",
                ye: "aw.ds"
            });
            aq(function() {
                Lo(a);
                var h = Ho(a.prefix);
                if (h) {
                    var m = ["auid=" + h];
                    if (T(15)) {
                        var n = G.referrer ? fj(hj(G.referrer), "host") : "";
                        0 === c.length && (T(88) ? bq.test(n) || cq.test(n) : bq.test(n)) && c.push({
                            fa: "",
                            ye: ""
                        });
                        if (0 === c.length && !g) return;
                        n && m.push("ref=" + encodeURIComponent(n));
                        var p = 1 === wm() ? z.top.location.href : z.location.href;
                        p = p.replace(/[\?#].*$/, "");
                        m.push("url=" + encodeURIComponent(p));
                        m.push("tft=" + Va());
                        var q = Dc();
                        void 0 !== q && m.push("tfd=" + Math.round(q));
                        if (T(76)) {
                            var r = wm();
                            m.push("frm=" + r)
                        }
                        g && m.push("gad=1")
                    }
                    if (0 < c.length)
                        for (var t = 0; t < c.length; t++) {
                            var u = c[t],
                                v = u.fa,
                                w = u.ye;
                            if (!Wp(a.prefix, w + "." + v)) {
                                var x = "https://adservice.google.com/pagead/regclk?" + m.join("&");
                                "" !== v ? x = "gb" === w ? x + "&wbraid=" + v : x + "&gclid=" + v + "&gclsrc=" +
                                    w : "aw.ds" === w && (x += "&gclsrc=aw.ds");
                                Ac(x)
                            }
                        } else if (g && !Wp(a.prefix, "gad")) {
                            var y = "https://adservice.google.com/pagead/regclk?" + m.join("&");
                            Ac(y)
                        }
                }
            })
        },
        iq = function(a) {
            return jj("gclaw") || jj("gac") || 0 < (dp().aw || []).length ? !1 : 0 < (dp().gb || []).length ? !0 : rp(a)
        };
    var jq = function(a, b, c, d, e, f, g, h, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.J = d;
            this.m = e;
            this.C = f;
            this.R = g;
            this.B = h;
            this.eventMetadata = m;
            this.P = n;
            this.W = p;
            this.isGtmEvent = q
        },
        U = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.J[b]) return a.J[b];
            if (void 0 !== a.m[b]) return a.m[b];
            vn && kq(a, a.C[b], a.R[b]) && (O(71), O(79));
            return void 0 !== a.C[b] ? a.C[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        lq = function(a) {
            function b(g) {
                for (var h = Object.keys(g), m = 0; m < h.length; ++m) c[h[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.J);
            b(a.m);
            b(a.C);
            if (vn)
                for (var d = Object.keys(a.R), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        O(71);
                        O(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        mq = function(a, b, c) {
            function d(m) {
                Vc(m) && l(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.C[b]), d(a.m[b]), d(a.J[b]));
            c && 2 !== c || d(a.h[b]);
            if (vn) {
                var g = f,
                    h = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.R[b]), d(a.m[b]), d(a.J[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || kq(a, e, h)) O(71), O(81);
                f = g;
                e = h
            }
            return f ?
                e : void 0
        },
        nq = function(a) {
            var b = [P.g.Pc, P.g.Lc, P.g.Mc, P.g.Nc, P.g.Oc, P.g.Qc, P.g.Rc],
                c = {},
                d = !1,
                e = function(h) {
                    for (var m = 0; m < b.length; m++) void 0 !== h[b[m]] && (c[b[m]] = h[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.J) || e(a.m)) return c;
            e(a.C);
            if (vn) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.R);
                kq(a, c, f) && (O(71), O(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.B);
            return c
        },
        kq = function(a, b, c) {
            if (!vn) return !1;
            try {
                if (b === c) return !1;
                var d = Tc(b);
                if (d !== Tc(c) || !(Vc(b) && Vc(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e =
                            0; e < b.length; e++)
                        if (kq(a, b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || kq(a, b[g], c[g])) return !0
                }
            } catch (h) {
                O(72)
            }
            return !1
        },
        oq = function(a, b) {
            this.Xg = a;
            this.xk = b;
            this.C = {};
            this.ie = {};
            this.h = {};
            this.J = {};
            this.m = {};
            this.he = {};
            this.B = {};
            this.yd = function() {};
            this.rb = function() {};
            this.R = !1
        },
        pq = function(a, b) {
            a.C = b;
            return a
        },
        qq = function(a, b) {
            a.ie = b;
            return a
        },
        rq = function(a, b) {
            a.h = b;
            return a
        },
        sq = function(a, b) {
            a.J = b;
            return a
        },
        tq = function(a, b) {
            a.m =
                b;
            return a
        },
        uq = function(a, b) {
            a.he = b;
            return a
        },
        vq = function(a, b) {
            a.B = b || {};
            return a
        },
        wq = function(a, b) {
            a.yd = b;
            return a
        },
        xq = function(a, b) {
            a.rb = b;
            return a
        },
        yq = function(a, b) {
            a.R = b;
            return a
        },
        zq = function(a) {
            return new jq(a.Xg, a.xk, a.C, a.ie, a.h, a.J, a.m, a.he, a.B, a.yd, a.rb, a.R)
        };
    var Bq = function(a, b) {
            var c = a.Fh,
                d = a.Zh;
            a.kh && (Co(c[P.g.oc], !!c[P.g.T]) && (ip(Aq, b), T(73) && Oo(b)), fp(b), lp(Aq, b), hq(b));
            c[P.g.T] && (kp(Aq, c[P.g.T], c[P.g.Ob], !!c[P.g.zb], b.prefix), T(73) && (Po(Go(b.prefix), c[P.g.T], c[P.g.Ob], !!c[P.g.zb], b), Po("FPAU", c[P.g.T], c[P.g.Ob], !!c[P.g.zb], b)));
            d && np(Aq)
        },
        Cq = function(a, b, c, d) {
            var e = a.ai,
                f = a.callback,
                g = a.Ih;
            if ("function" === typeof f)
                if (e === P.g.tb && void 0 === g) {
                    var h = d(b.prefix, c);
                    0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h)
                } else e === P.g.hc ? (O(65), Lo(b, !1), f(Ho(b.prefix))) :
                    f(g)
        },
        Aq = ["aw", "dc", "gb"];

    function Dq(a) {
        var b = U(a.h, P.g.yb),
            c = U(a.h, P.g.Nb);
        b && !c ? (a.eventName !== P.g.la && a.eventName !== P.g.zd && O(131), a.isAborted = !0) : !b && c && (O(132), a.isAborted = !0)
    };
    var Eq = function() {
        var a = jc && jc.userAgent || "";
        if (0 > a.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)) return !1;
        var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
        if ("" === b) return !1;
        for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
            if (void 0 === c[e]) return !0;
            if (d[e] != c[e]) return Number(d[e]) > Number(c[e])
        }
        return d.length >= c.length
    };

    function Fq() {
        return "attribution-reporting"
    }

    function Gq(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var Hq = !1;

    function Iq() {
        if (Gq("join-ad-interest-group") && Ha(jc.joinAdInterestGroup)) return !0;
        Hq || (um('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Hq = !0);
        return Gq("join-ad-interest-group") && Ha(jc.joinAdInterestGroup)
    }

    function Jq(a, b) {
        var c = void 0;
        try {
            c = G.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Va() - d) {
                xb("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= G.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                xb("TAGGING", 10);
                return
            }
        } catch (e) {}
        sc(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Va()
        }, c)
    }

    function Kq() {
        return "https://td.doubleclick.net"
    };
    var Lq = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Mq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Nq = /^\d+\.fls\.doubleclick\.net$/,
        Oq = /;gac=([^;?]+)/,
        Pq = /;gacgb=([^;?]+)/,
        Qq = /;gclaw=([^;?]+)/,
        Rq = /;gclgb=([^;?]+)/;

    function Sq(a, b) {
        if (Nq.test(G.location.host)) {
            var c = G.location.href.match(b);
            return c && 2 == c.length && c[1].match(Lq) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].fa);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var Tq = function(a, b, c) {
        var d = Vo() ? Ro("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var h = op("_gac_gb_" + g, a, b, c);
            f = f || 0 !== h.length && h.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + h.join(","))
        }
        return {
            bl: f ? e.join(";") : "",
            al: Sq(d, Pq)
        }
    };

    function Uq(a, b, c) {
        if (Nq.test(G.location.host)) {
            var d = G.location.href.match(c);
            if (d && 2 == d.length && d[1].match(Mq)) return [{
                fa: d[1]
            }]
        } else return Xo((a || "_gcl") + b);
        return []
    }
    var Vq = function(a) {
            return Uq(a, "_aw", Qq).map(function(b) {
                return b.fa
            }).join(".")
        },
        Wq = function(a) {
            return Uq(a, "_gb", Rq).map(function(b) {
                return b.fa
            }).join(".")
        },
        Xq = function(a, b) {
            var c = op((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var Yq = function() {
        if (Ha(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Zq = function(a) {
            if (null != a) {
                var b = String(a).substring(0, 512),
                    c = b.indexOf("#");
                return -1 == c ? b : b.substring(0, c)
            }
            return ""
        },
        $q = function() {
            var a = G.title;
            if (void 0 == a || "" == a) return "";
            var b = function(d) {
                try {
                    return decodeURIComponent(d), !0
                } catch (e) {
                    return !1
                }
            };
            a = encodeURIComponent(a);
            for (var c = 256; !b(a.substr(0, c));) c--;
            return decodeURIComponent(a.substr(0, c))
        },
        ar = function(a) {
            a.metadata.speculative_in_message || (a.metadata.speculative = !1)
        },
        br = function(a, b) {
            Ka(b) || (b = [b]);
            return 0 <= b.indexOf(a.metadata.hit_type)
        },
        cr = function(a) {
            var b = a.target.I[0];
            if (b) {
                a.m[P.g.Sc] = b;
                var c = a.target.I[1];
                c && (a.m[P.g.eb] = c)
            } else a.isAborted = !0
        },
        dr = function(a) {
            if (br(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
                var b = a.m[P.g.eb],
                    c = !0 === U(a.h, P.g.af);
                c && (a.metadata.remarketing_only = !0);
                switch (a.metadata.hit_type) {
                    case "conversion":
                        !c && b && ar(a);
                        ek() && (a.metadata.is_gcp_conversion = !0);
                        break;
                    case "user_data_lead":
                    case "user_data_web":
                        !c && b && (a.isAborted = !0);
                        break;
                    case "remarketing":
                        !c && b || ar(a)
                }
                a.m[P.g.dj] = a.metadata.is_gcp_conversion ?
                    "www.google.com" : "www.googleadservices.com"
            }
        },
        er = function(a) {
            br(a, ["conversion", "remarketing"])
        },
        fr = function(a) {
            if (br(a, ["conversion", "remarketing"])) {
                var b = wm();
                a.m[P.g.Eg] = b;
                var c = U(a.h, P.g.ia);
                c || (c = 1 === b ? z.top.location.href : z.location.href);
                a.m[P.g.ia] = Zq(c);
                a.copyToHitData(P.g.Fa, G.referrer);
                a.m[P.g.Ab] = $q();
                a.copyToHitData(P.g.ya);
                var d = Ri();
                a.m[P.g.Bb] = d.width + "x" + d.height;
                if (T(86)) {
                    for (var e, f = z, g = f; f && f != f.parent;) f = f.parent, sm(f) && (g = f);
                    e = g;
                    var h;
                    var m = e.location.href;
                    if (e === e.top) h = {
                        url: m,
                        Cl: !0
                    };
                    else {
                        var n = !1,
                            p = e.document;
                        p && p.referrer && (m = p.referrer, e.parent === e.top && (n = !0));
                        var q = e.location.ancestorOrigins;
                        if (q) {
                            var r = q[q.length - 1];
                            r && -1 === m.indexOf(r) && (n = !1, m = r)
                        }
                        h = {
                            url: m,
                            Cl: n
                        }
                    }
                    var t = h;
                    t.url && c !== t.url && (a.m[P.g.uf] = Zq(t.url))
                }
            }
        },
        gr = function(a) {
            br(a, ["conversion", "remarketing"]) && (a.copyToHitData(P.g.na), a.copyToHitData(P.g.da), a.copyToHitData(P.g.sa), "remarketing" === a.metadata.hit_type && a.copyToHitData(P.g.Aa))
        },
        hr = function(a) {
            if (T(13))
                if (!Tn(z)) O(87);
                else if (void 0 !== Vn) {
                O(85);
                var b = Rn();
                b ? Zn(b, a) : O(86)
            }
        },
        kr = function(a) {
            br(a, ["conversion"]) && (!0 === z._gtmpcm || Eq() ? a.m[P.g.Lb] = "2" : T(7) && (ir || Gq(Fq()) || (um('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), ir = !0), jr || (jr = !0, um('A+xK4jmZTgh1KBVry/UZKUE3h6Dr9HPPioFS4KNCzify+KEoOii7z/goKS2zgbAOwhpZ1GZllpdz7XviivJM9gcAAACFeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQXR0cmlidXRpb25SZXBvcnRpbmdDcm9zc0FwcFdlYiIsImV4cGlyeSI6MTcwNzI2Mzk5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d')), Gq(Fq()) && (a.m[P.g.Lb] = "1")))
        },
        lr = function(a) {
            br(a, ["conversion", "remarketing"]) && T(9) && Ck(P.g.F) && !1 !== U(a.h, P.g.Da) && !1 !== U(a.h, P.g.X) && !1 !== U(a.h, P.g.Kb) && !1 !== U(a.h, P.g.Qa) && Iq() && (a.m[P.g.vg] = "1", a.metadata.send_fledge_experiment = !0)
        },
        mr = function(a) {
            var b = function(d) {
                return U(a.h, d)
            };
            a.metadata.conversion_linker_enabled = !1 !== b(P.g.xa);
            var c = {
                prefix: b(P.g.Ka) || b(P.g.La),
                domain: b(P.g.Na),
                Db: b(P.g.Ea),
                flags: b(P.g.Oa)
            };
            a.metadata.cookie_options = c;
            a.metadata.redact_ads_data = null != b(P.g.ma) && !1 !== b(P.g.ma);
            a.metadata.allow_ad_personalization = !1 !== b(P.g.X)
        },
        nr = function(a) {
            if (Op(a, "ccd_add_1p_data", !1) && Ck(P.g.F)) {
                var b = Zj(a.h);
                if (bk(b)) {
                    var c = U(a.h, P.g.oa);
                    null === c ? a.metadata.user_data_from_code = null : (b.enable_code && Vc(c) && (a.metadata.user_data_from_code =
                        c), Vc(b.selectors) && (a.metadata.user_data_from_manual = Yj(b.selectors)))
                }
            }
        },
        or = function(a) {
            var b = !a.metadata.send_user_data_hit && br(a, ["conversion", "user_data_web"]),
                c = !Op(a, "ccd_add_1p_data", !1) && br(a, "user_data_lead");
            if ((b || c) && Ck(P.g.F)) {
                var d = "conversion" === a.metadata.hit_type,
                    e = a.h,
                    f = void 0,
                    g = U(e, P.g.oa);
                if (d) {
                    var h = (U(e, P.g.Xc) || {})[a.m[P.g.eb]];
                    if (!0 === U(e, P.g.Bd) || h) {
                        var m;
                        var n;
                        if (h) b: {
                            switch (h.enhanced_conversions_mode) {
                                case "manual":
                                    if (g && Vc(g)) {
                                        n = g;
                                        break b
                                    }
                                    var p = h.enhanced_conversions_manual_var;
                                    n = void 0 !== p ? p : z.enhanced_conversion_data;
                                    break b;
                                case "automatic":
                                    n = Yj(h[P.g.sg]);
                                    break b
                            }
                            n = void 0
                        }
                        else n = z.enhanced_conversion_data;
                        var q = n,
                            r = (h || {}).enhanced_conversions_mode,
                            t;
                        if (q) {
                            if ("manual" === r) switch (q._tag_mode) {
                                case "CODE":
                                    t = "c";
                                    break;
                                case "AUTO":
                                    t = "a";
                                    break;
                                case "MANUAL":
                                    t = "m";
                                    break;
                                default:
                                    t = "c"
                            } else t = "automatic" === r ? dk(h) ? "a" : "m" : "c";
                            m = {
                                U: q,
                                Uj: t
                            }
                        } else m = {
                            U: q,
                            Uj: void 0
                        };
                        var u = m,
                            v = u.Uj;
                        f = u.U;
                        a.m[P.g.wf] = v
                    }
                } else {
                    if (T(115) || a.metadata.is_config_command || !a.h.isGtmEvent && !ak(a.h)) return;
                    bk(Zj(a.h)) && null !== g && (Vc(g) ? f = g : f = ck(Zj(a.h)), f && ar(a))
                }
                a.metadata.user_data = f
            }
        },
        pr = function(a) {
            br(a, ["conversion", "remarketing"]) && (a.h.isGtmEvent ? "conversion" !== a.metadata.hit_type && a.eventName && (a.m[P.g.ug] = a.eventName) : a.m[P.g.ug] = a.eventName, l(a.h.h, function(b, c) {
                Kh[b.split(".")[0]] || (a.m[b] = c)
            }))
        },
        qr = function(a) {
            if (a.eventName === P.g.la && (a.metadata.is_config_command = !0, br(a, "conversion") && (a.metadata.speculative = !0), !br(a, "remarketing") || !1 !== U(a.h, P.g.Kb) && !1 !== U(a.h, P.g.Qa) || (a.metadata.speculative = !0), br(a, "landing_page"))) {
                var b = U(a.h, P.g.fb),
                    c = U(a.h, P.g.za) || {},
                    d = U(a.h, P.g.kb),
                    e = a.metadata.conversion_linker_enabled,
                    f = a.metadata.cookie_options;
                Bq({
                    kh: e,
                    xj: b,
                    Fh: c,
                    Zh: d
                }, f);
                Mp(a.target, a.h);
                vp({
                    Kf: !1,
                    Je: a.metadata.redact_ads_data,
                    Wh: a.target.id,
                    eventId: a.h.eventId,
                    priorityId: a.h.priorityId,
                    xc: e ? f : void 0,
                    Ce: e,
                    Aj: a.m[P.g.lf],
                    Qf: a.m[P.g.xb],
                    Mf: a.m[P.g.wb]
                });
                a.isAborted = !0
            }
        },
        rr = function(a) {
            if (!Op(a, "hasPreAutoPiiCcdRule", !1)) {
                var b = T(50);
                if ((!T(49) || b || a.h.isGtmEvent) && br(a, "conversion") && Ck(P.g.F)) {
                    var c =
                        (U(a.h, P.g.Xc) || {})[a.m[P.g.eb]],
                        d = a.m[P.g.Sc],
                        e;
                    if (!(e = dk(c)))
                        if (Li() && yj)
                            if (zj) e = !0;
                            else {
                                var f = Qi("AW-" + d);
                                e = !!f && !!f.preAutoPii
                            }
                    else e = !1;
                    if (e) {
                        var g = Va(),
                            h = Vj({
                                yc: !0,
                                zc: !0,
                                Vh: !0
                            });
                        if (0 !== h.elements.length) {
                            for (var m = [], n = 0; n < h.elements.length; ++n) {
                                var p = h.elements[n];
                                m.push(p.querySelector + "*" + Wj(p) + "*" + p.type)
                            }
                            a.m[P.g.Qg] = m.join("~");
                            var q = h.Oh;
                            q && (a.m[P.g.Rg] = q.querySelector, a.m[P.g.Pg] = Wj(q));
                            a.m[P.g.Og] = String(Va() - g);
                            a.m[P.g.Sg] = h.status
                        }
                    }
                }
            }
        },
        sr = function(a) {
            if (a.eventName === P.g.Ja && !a.h.isGtmEvent) {
                if (!a.metadata.consent_updated &&
                    br(a, "conversion")) {
                    var b = U(a.h, P.g.hb);
                    if ("function" !== typeof b) return;
                    var c = String(U(a.h, P.g.Pa)),
                        d = a.m[c],
                        e = U(a.h, c);
                    c === P.g.tb || c === P.g.hc ? Cq({
                        ai: c,
                        callback: b,
                        Ih: e
                    }, a.metadata.cookie_options, a.metadata.redact_ads_data, dq) : b(d || e)
                }
                a.isAborted = !0
            }
        },
        tr = function(a) {
            if (br(a, "conversion") && Ck(P.g.F) && (a.m[P.g.vc] || a.m[P.g.nc])) {
                var b = a.m[P.g.eb],
                    c = J(a.metadata.cookie_options),
                    d = bp(c.prefix);
                c.prefix = "_gcl" === d ? "" : d;
                if (a.m[P.g.vc]) {
                    var e = Xq(b, c);
                    e && (a.m[P.g.Ug] = e)
                }
                if (a.m[P.g.nc]) {
                    var f = Tq(b, c).bl;
                    f &&
                        (a.m[P.g.zg] = f)
                }
            }
        },
        ur = function(a) {
            var b = T(4),
                c = a.h,
                d, e, f;
            if (!b) {
                var g = mq(c, P.g.aa);
                d = eb(Vc(g) ? g : {})
            }
            var h = mq(c, P.g.aa, 1),
                m = mq(c, P.g.aa, 2);
            e = eb(Vc(h) ? h : {}, ".");
            f = eb(Vc(m) ? m : {}, ".");
            b || (a.m[P.g.lf] = d);
            a.m[P.g.xb] = e;
            a.m[P.g.wb] = f
        },
        vr = function(a) {
            if (br(a, ["conversion", "remarketing"])) {
                var b = "conversion" === a.metadata.hit_type;
                b && a.eventName !== P.g.Ca || (a.copyToHitData(P.g.Z), b && (a.copyToHitData(P.g.Fd), a.copyToHitData(P.g.Dd), a.copyToHitData(P.g.Ed), a.copyToHitData(P.g.Cd), a.m[P.g.og] = a.eventName))
            }
        },
        wr =
        function(a) {
            if (br(a, ["conversion", "remarketing"])) {
                var b = a.h,
                    c = U(b, P.g.Qb);
                if (!0 === c || !1 === c) a.m[P.g.Qb] = c;
                var d = U(b, P.g.X);
                if (!0 === d || !1 === d) a.m[P.g.Af] = !d;
                !1 === d && br(a, "remarketing") && (a.isAborted = !0)
            }
        },
        xr = function(a) {
            br(a, "conversion") && (a.copyToHitData(P.g.Yc), a.copyToHitData(P.g.Gd), a.copyToHitData(P.g.bd), a.copyToHitData(P.g.Jd), a.copyToHitData(P.g.vb), a.copyToHitData(P.g.Vc))
        },
        yr = function(a) {
            Rp(a);
        },
        zr = function(a) {
            if (br(a, ["conversion", "remarketing"]) && z.__gsaExp && z.__gsaExp.id) {
                var b = z.__gsaExp.id;
                if (Ha(b)) try {
                    var c = Number(b());
                    isNaN(c) || (a.m[P.g.Dg] = c)
                } catch (d) {}
            }
        },
        Ar = function(a) {
            if (br(a, ["conversion", "remarketing"])) {
                var b = Yq();
                void 0 !== b && (a.m[P.g.Tg] = b || "error");
                var c = kn();
                c && (a.m[P.g.Pd] = c);
                var d = jn();
                d && (a.m[P.g.Wd] = d)
            }
        },
        Br = function(a) {
            br(a, ["conversion"]) && "1" === to(!1)._up && (a.m[P.g.Sd] = !0)
        },
        Cr = function(a) {
            br(a, ["conversion"]) && (a.metadata.redact_click_ids = !!a.metadata.redact_ads_data && !Ck(P.g.F))
        },
        Dr = function(a) {
            if (br(a, ["conversion", "user_data_lead", "user_data_web"]) && Ck(P.g.F) && a.metadata.conversion_linker_enabled) {
                var b = a.metadata.cookie_options,
                    c = bp(b.prefix);
                "_gcl" === c && (c = "");
                var d = c;
                if (Nq.test(G.location.host) ? Qq.test(G.location.href) || Oq.test(G.location.href) : !rp(d)) {
                    var e = Vq(c);
                    e && (a.m[P.g.tb] = e);
                    if (!c) {
                        var f = Sq(Vo() ? Ro() : {}, Oq);
                        f && (a.m[P.g.Od] = f)
                    }
                } else {
                    var g = Wq(c);
                    g && (a.m[P.g.vc] = g);
                    if (!c) {
                        var h = a.m[P.g.eb];
                        b = J(b);
                        b.prefix = c;
                        var m = Tq(h, b, !0).al;
                        m && (a.m[P.g.nc] = m)
                    }
                }
            }
        },
        Er = function(a) {
            if (br(a, ["conversion",
                    "remarketing", "user_data_lead", "user_data_web"
                ]) && a.metadata.conversion_linker_enabled && Ck(P.g.F)) {
                var b = !T(3);
                if ("remarketing" !== a.metadata.hit_type || b) {
                    var c = a.metadata.cookie_options;
                    Lo(c, "conversion" === a.metadata.hit_type && a.eventName !== P.g.Ja);
                    a.m[P.g.hc] = Ho(c.prefix)
                }
            }
        },
        Fr = function(a) {
            if (br(a, ["conversion"])) {
                var b = Up(a.metadata.cookie_options);
                if (b && !a.m[P.g.na]) {
                    var c = El(a.m[P.g.eb]);
                    a.m[P.g.na] = c
                }
                b && (a.m[P.g.jb] = b, a.metadata.send_ccm_parallel_ping = !0)
            }
        },
        Gr = function(a) {
            var b = !Ck(P.g.F);
            switch (a.metadata.hit_type) {
                case "user_data_lead":
                case "user_data_web":
                    a.isAborted = !(!b && !a.metadata.consent_updated);
                    break;
                case "remarketing":
                    a.isAborted = b;
                    break;
                case "conversion":
                    a.metadata.consent_updated && (a.m[P.g.xd] = !0)
            }
        },
        Hr = function(a) {
            br(a, ["conversion"]) && a.h.eventMetadata.is_external_event && (a.m[P.g.ej] = !0)
        },
        Ir = function(a) {
            var b;
            if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit) switch (a.metadata.hit_type) {
                case "user_data_web":
                    b = 97;
                    ar(a);
                    break;
                case "user_data_lead":
                    b = 98;
                    ar(a);
                    break;
                case "conversion":
                    b = 99
            }!a.metadata.speculative && b && O(b);
            !0 === a.metadata.speculative &&
                (a.isAborted = !0)
        },
        ir = !1,
        jr = !1;
    var Jr = {
        D: {
            di: "ads_conversion_hit",
            fg: "container_execute_start",
            fi: "container_setup_end",
            gg: "container_setup_start",
            ei: "container_execute_end",
            gi: "container_yield_end",
            hg: "container_yield_start",
            Zi: "event_execute_end",
            Yi: "event_evaluation_end",
            Vg: "event_evaluation_start",
            aj: "event_setup_end",
            fe: "event_setup_start",
            bj: "ga4_conversion_hit",
            je: "page_load",
            Om: "pageview",
            Ub: "snippet_load",
            mj: "tag_callback_error",
            nj: "tag_callback_failure",
            oj: "tag_callback_success",
            pj: "tag_execute_end",
            ed: "tag_execute_start"
        }
    };
    var Kr = !1,
        Lr = "L S Y E EC TC HTC".split(" "),
        Mr = ["S", "V", "E"],
        Nr = ["TS", "TI", "TE"];
    var ps = function(a) {},
        qs = function(a) {},
        rs = function() {},
        ss = function(a, b) {},
        ts = function(a, b) {},
        us = function(a, b) {},
        vs = function(a, b) {},
        Or = function(a, b, c, d, e, f) {
            var g;
            g = void 0 === g ? !1 : g;
            var h = {};
            return h
        },
        Pr = function(a) {
            var b = !1;
            return b
        },
        Qr = function(a, b) {},
        ws = function() {
            var a = {};
            return a
        },
        is = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        xs = function() {},
        ys = function(a, b) {},
        zs = function(a, b, c) {},
        As = function() {
            var a = Or("PAGEVIEW", Vl());
            if ($r(a.entry, "mark")[0]) {
                var b = Ec();
                b.clearMarks(a.entry);
                b.clearMeasures("GTM-" + Vl() + ":" + Jr.D.je + ":to:PAGEVIEW")
            }
            var c = Or(Jr.D.je, Vl());
            Pr(a) && Qr(a, c)
        };
    var Bs = function(a, b) {
        var c = z,
            d, e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e;
        if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var Cs = function(a, b, c) {
        var d = pm(a, "fmt");
        if (b) {
            var e = pm(a, "random"),
                f = pm(a, "label") || "";
            if (!e) return !1;
            var g = On(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!Bs(g, b)) return !1
        }
        d && 4 != d && (a = rm(a, "rfmt", d));
        var h = rm(a, "fmt", 4);
        qc(h, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, c, G.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Ds = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = void 0;
                if (d.hasOwnProperty("google_business_vertical")) {
                    e = d.google_business_vertical;
                    var f = {};
                    b[e] = b[e] || (f.google_business_vertical = e, f)
                } else e = "", b.hasOwnProperty(e) || (b[e] = {});
                var g = b[e],
                    h;
                for (h in d) "google_business_vertical" !== h && (h in g || (g[h] = []), g[h].push(d[h]))
            }
            return Object.keys(b).map(function(m) {
                return b[m]
            })
        },
        Es = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                if (d) {
                    var e = {};
                    b.push((e.id =
                        d.id, e.origin = d.origin, e.destination = d.destination, e.start_date = d.start_date, e.end_date = d.end_date, e.location_id = d.location_id, e.google_business_vertical = d.google_business_vertical, e))
                }
            }
            return b
        },
        Fs = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: d.id,
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                })
            }
            return b
        },
        Hs = function(a) {
            if (!a) return "";
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = [];
                d && (e.push(Gs(d.value)), e.push(Gs(d.quantity)),
                    e.push(Gs(d.item_id)), e.push(Gs(d.start_date)), e.push(Gs(d.end_date)), b.push("(" + e.join("*") + ")"))
            }
            return 0 < b.length ? b.join("") : ""
        },
        Gs = function(a) {
            return "number" !== typeof a && "string" !== typeof a ? "" : a.toString()
        },
        Js = function(a, b) {
            var c = Is(b);
            return "" + a + (a && c ? ";" : "") + c
        },
        Is = function(a) {
            if (!a || "object" !== typeof a || "function" === typeof a.join) return "";
            var b = [];
            l(a, function(c, d) {
                var e, f;
                if (Ka(d)) {
                    for (var g = [], h = 0; h < d.length; ++h) {
                        var m = Ks(d[h]);
                        void 0 != m && g.push(m)
                    }
                    f = 0 !== g.length ? g.join(",") : void 0
                } else f =
                    Ks(d);
                e = f;
                var n = Ks(c);
                n && void 0 != e && b.push(n + "=" + e)
            });
            return b.join(";")
        },
        Ks = function(a) {
            var b = typeof a;
            if (null != a && "object" !== b && "function" !== b) return String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
        },
        Ls = function(a, b) {
            var c = [],
                d = function(f, g) {
                    null != g && "" !== g && (!0 === g && (g = 1), !1 === g && (g = 0), c.push(f + "=" + encodeURIComponent(g)))
                },
                e = a.metadata.hit_type;
            "conversion" !== e && "remarketing" !== e || d("random", a.metadata.event_start_timestamp_ms);
            l(b, d);
            return c.join("&")
        },
        Ms = function(a, b) {
            var c =
                a.metadata.hit_type,
                d = a.m[P.g.Sc],
                e = Ck(P.g.F),
                f = [],
                g, h = a.h.P,
                m, n = Kl() ? 2 : 3,
                p = 0,
                q = function(w) {
                    f.push(w);
                    w.pb && p++
                };
            switch (c) {
                case "conversion":
                    m = "pagead/conversion";
                    var r = "";
                    e ? a.metadata.is_gcp_conversion ? (g = "https://www.google.com/", m = "pagead/1p-conversion") : g = "https://www.googleadservices.com/" : g = "https://pagead2.googlesyndication.com/";
                    a.metadata.is_gcp_conversion && (r = "&gcp=1&sscte=1&ct_cookie_present=1");
                    q({
                        Cb: "" + g + m + "/" + d + "/?" + Ls(a, b) + r,
                        format: n,
                        pb: !0,
                        attributes: {
                            attributionsrc: ""
                        }
                    });
                    a.metadata.send_ccm_parallel_ping &&
                        q({
                            Cb: "" + g + "ccm/conversion/" + d + "/?" + Ls(a, b) + r,
                            format: 2,
                            pb: !0
                        });
                    a.metadata.is_gcp_conversion && (r = "&gcp=1&ct_cookie_present=1", q({
                        Cb: "" + (e ? "https://googleads.g.doubleclick.net/" : g) + "pagead/viewthroughconversion/" + d + "/?" + Ls(a, b) + r,
                        format: n,
                        pb: !0
                    }));
                    break;
                case "remarketing":
                    var t = b.data || "",
                        u = Ds(Es(a.m[P.g.Z]));
                    if (u.length) {
                        for (var v = 0; v < u.length; v++) b.data = Js(t, u[v]), q({
                                Cb: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + Ls(a, b),
                                format: n,
                                pb: !0
                            }), a.metadata.send_fledge_experiment &&
                            q({
                                Cb: Kq() + "/td/rul/" + d + "?" + Ls(a, b),
                                format: 4,
                                pb: !1
                            }), a.metadata.event_start_timestamp_ms += 1;
                        a.metadata.send_fledge_experiment = !1
                    } else q({
                        Cb: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + Ls(a, b),
                        format: n,
                        pb: !0
                    });
                    break;
                case "user_data_lead":
                    q({
                        Cb: "https://google.com/pagead/form-data/" + d + "?" + Ls(a, b),
                        format: 1,
                        pb: !0
                    });
                    break;
                case "user_data_web":
                    q({
                        Cb: "https://google.com/ccm/form-data/" + d + "?" + Ls(a, b),
                        format: 1,
                        pb: !0
                    })
            }
            1 < f.length && Ha(a.h.P) && (h = fb(a.h.P, p));
            Kl() || "conversion" !==
                c && "remarketing" !== c || !a.metadata.send_fledge_experiment || q({
                    Cb: Kq() + "/td/rul/" + d + "?" + Ls(a, b),
                    format: 4,
                    pb: !1
                });
            return {
                P: h,
                vl: f
            }
        },
        Ns = function(a, b, c, d, e, f) {
            qs(c);
            var g = function() {
                e && e()
            };
            switch (b) {
                case 1:
                    Ac(a);
                    e && e();
                    break;
                case 2:
                    tc(a, g, void 0, f);
                    break;
                case 3:
                    var h = !1;
                    try {
                        h = Cs(a, g, f)
                    } catch (p) {
                        h = !1
                    }
                    h || Ns(a, 2, c, d, g, f);
                    break;
                case 4:
                    var m = "AW-" + c.m[P.g.Sc],
                        n = c.m[P.g.eb];
                    n && (m = m + "/" + n);
                    Jq(a, m)
            }
        },
        Os = {},
        Ps = (Os[P.g.xd] = "gcu", Os[P.g.tb] = "gclaw", Os[P.g.hc] = "auid", Os[P.g.Cd] = "dscnt", Os[P.g.Dd] = "fcntr", Os[P.g.Ed] =
            "flng", Os[P.g.Fd] = "mid", Os[P.g.og] = "bttype", Os[P.g.eb] = "label", Os[P.g.Lb] = "capi", Os[P.g.sa] = "currency_code", Os[P.g.Gd] = "vdltv", Os[P.g.Gi] = "_dbg", Os[P.g.Jd] = "oedeld", Os[P.g.wb] = "edid", Os[P.g.vg] = "fledge", Os[P.g.Od] = "gac", Os[P.g.nc] = "gacgb", Os[P.g.zg] = "gacmcov", Os[P.g.Pd] = "gdpr", Os[P.g.xb] = "gdid", Os[P.g.Dg] = "gsaexp", Os[P.g.Eg] = "frm", Os[P.g.Sd] = "gtm_up", Os[P.g.lf] = "did", Os[P.g.Yc] = void 0, Os[P.g.Ab] = "tiba", Os[P.g.Qb] = "rdp", Os[P.g.jb] = "ecsid", Os[P.g.bd] = "delopc", Os[P.g.Wd] = "gdpr_consent", Os[P.g.na] = "oid",
            Os[P.g.Og] = "ec_lat", Os[P.g.Pg] = "ec_meta", Os[P.g.Qg] = "ec_m", Os[P.g.Rg] = "ec_sel", Os[P.g.Sg] = "ec_s", Os[P.g.wf] = "ec_mode", Os[P.g.Aa] = "userId", Os[P.g.Tg] = "us_privacy", Os[P.g.da] = "value", Os[P.g.vc] = "gclgb", Os[P.g.Ug] = "mcov", Os[P.g.dj] = "hn", Os[P.g.ej] = "gtm_ee", Os[P.g.Af] = "npa", Os[P.g.Sc] = null, Os[P.g.Bb] = null, Os[P.g.ya] = null, Os[P.g.Z] = null, Os[P.g.ia] = null, Os[P.g.Fa] = null, Os[P.g.uf] = null, Os),
        Rs = function(a) {
            Qs(a, function(b) {
                for (var c = Ms(a, b), d = c.P, e = c.vl, f = 0; f < e.length; f++) {
                    var g = e[f];
                    Ns(g.Cb, g.format, a, b,
                        g.pb ? d : void 0, g.attributes)
                }
            })
        },
        Qs = function(a, b) {
            var c = a.metadata.hit_type,
                d = {},
                e = {},
                f = [],
                g = a.metadata.event_start_timestamp_ms;
            if ("conversion" === c || "remarketing" === c) d.cv = "11", d.fst = g, d.fmt = 3, d.bg = "ffffff", d.guid = "ON", d.async = "1";
            d.gtm = gm();
            Fk() && (T(104) || "remarketing" !== c) && (d.gcs = el(), T(106) || "remarketing" !== c && Gk()) && (d.gcd = il());
            T(109) && (Vk() && (d.dma_cps = jl()), Ji() && (d.dma = "1"));
            if (a.m[P.g.Bb]) {
                var h = a.m[P.g.Bb].split("x");
                2 === h.length && (d.u_w = h[0], d.u_h = h[1])
            }
            if (a.m[P.g.ya]) {
                var m = a.m[P.g.ya];
                2 === m.length ? d.hl = m : 5 === m.length && (d.hl = m.substring(0, 2), d.gl = m.substring(3, 5))
            }
            var n = a.metadata.redact_click_ids,
                p = function(w, x) {
                    var y = a.m[x];
                    y && (d[w] = n ? ij(y) : y)
                };
            p("url", P.g.ia);
            p("ref", P.g.Fa);
            p("top", P.g.uf);
            T(13) && (Ps[P.g.Xd] = "uaa", Ps[P.g.Yd] = "uab", Ps[P.g.Zd] = "uafvl", Ps[P.g.ae] = "uamb", Ps[P.g.be] = "uam", Ps[P.g.ce] = "uap", Ps[P.g.de] = "uapv", Ps[P.g.ee] = "uaw");
            l(a.m, function(w, x) {
                if (Ps.hasOwnProperty(w)) {
                    var y = Ps[w];
                    y && (d[y] = x)
                } else e[w] = x
            });
            var q = a.m[P.g.Yc];
            void 0 != q && "" !== q && (d.vdnc = String(q));
            var r =
                a.m[P.g.Vc];
            void 0 !== r && (d.shf = r);
            var t = a.m[P.g.vb];
            void 0 !== t && (d.delc = t);
            d.data = Is(e);
            var u = a.m[P.g.Z];
            u && "conversion" === c && (d.iedeld = fk(u), d.item = Hs(Fs(u)));
            if (("conversion" === c || "user_data_lead" === c || "user_data_web" === c) && a.metadata.user_data && (!T(68) || Ck(P.g.F))) {
                var v = wh(a.metadata.user_data);
                v && f.push(v.then(function(w) {
                    d.em = w.Tf;
                    if ("user_data_web" === c && 0 < w.Wl) {
                        var x = Vp(a.metadata.cookie_options);
                        d.ecsid = x
                    }
                }))
            }
            if (f.length) try {
                Promise.all(f).then(function() {
                    b(d)
                });
                return
            } catch (w) {}
            b(d)
        };
    var Ss = function() {
            this.h = {}
        },
        Ts = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        Us = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        Ws = function(a, b, c, d) {
            if (!Fk()) {
                Vs(a, b, c, d);
                return
            }
            Yk(function() {
                Ck(P.g.F) ? Vs(a, b, c, d) : d && d()
            }, [P.g.F]);
        };
    var Xs = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = {
                    gclgb: function() {
                        return $p("gb", b, c).join(".")
                    },
                    gacgb: function() {
                        return gq(c)
                    },
                    gclaw: function() {
                        return dq(b, c).join(".")
                    },
                    gac: function() {
                        return fq(c)
                    }
                },
                e = iq(b),
                f = e ? "gclgb" : "gclaw",
                g = e ? "gacgb" : "gac",
                h = d[g],
                m = (0, d[f])(),
                n = "_gcl" !== b ? "" : h();
            m && Ts(a, f, m);
            n && Ts(a, g, n)
        },
        Vs = function(a, b, c, d) {
            c = c || {};
            var e = c.xc || {},
                f = new Ss;
            vh(b, function(g, h) {
                Ts(f, "em", g);
                Ts(f, "gtm", gm());
                Fk() && (Ts(f, "gcs", el()), Ts(f, "gcd", il()));
                T(109) && (Vk() && Ts(f, "dma_cps", jl()), Ji() && Ts(f,
                    "dma", "1"));
                Xs(f, bp(e.prefix), c.Je);
                Ts(f, "auid", Ho(e.prefix));
                if (0 < h) {
                    var m = Vp(e);
                    Ts(f, "ecsid", m)
                }
                var n = Us(f);
                Ac("https://google.com/pagead/form-data/" + a + "?" + n);
                Ac("https://google.com/ccm/form-data/" + a + "?" + n);
                d && d()
            })
        };

    function Ys(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return hj("" + c + b).href
        }
    }

    function Zs() {
        return !!Lh.Ef && "SGTM_TOKEN" !== Lh.Ef.split("@@").join("")
    }

    function $s(a) {
        for (var b = at(), c = ia(b), d = c.next(); !d.done; d = c.next()) {
            var e = U(a, d.value);
            if (e) return e
        }
    }

    function at() {
        var a = [];
        T(113) && a.push(P.g.rf);
        a.push(P.g.sc);
        return a
    };
    var ct = function(a, b, c, d, e) {
            if (!bt() && !am(a)) {
                var f = "?id=" + encodeURIComponent(a) + "&l=" + Lh.ka,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                T(142) && (f += "&gtm=" + gm());
                var h = Zs();
                h && (f += "&sign=" + Lh.Ef);
                var m = c ? "/gtag/js" : "/gtm.js",
                    n = Uh || Wh ? Ys(b, m + f) : void 0;
                if (!n) {
                    var p = Lh.Ye + m;
                    h && kc && g && (p = kc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    n = Bp("https://", "http://", p + f)
                }
                var q = a;
                d.siloed && (cm({
                    ctid: q,
                    isDestination: !1
                }), q = Ql(q));
                var r = q,
                    t = bm();
                Ll().container[r] = {
                    state: 1,
                    context: d,
                    parent: t
                };
                Ml({
                        ctid: r,
                        isDestination: !1
                    },
                    e);
                qc(n)
            }
        },
        dt = function(a, b, c, d) {
            var e;
            if (e = !bt()) {
                var f = Ll().destination[a];
                e = !(f && f.state)
            }
            if (e)
                if (dm()) Ll().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: bm()
                }, Ml({
                    ctid: a,
                    isDestination: !0
                }, d), O(91);
                else {
                    var g = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Lh.ka + "&cx=c";
                    T(142) && (g += "&gtm=" + gm());
                    Zs() && (g += "&sign=" + Lh.Ef);
                    var h = Uh || Wh ? Ys(b, g) : void 0;
                    h || (h = Bp("https://", "http://", Lh.Ye + g));
                    var m = a;
                    c.siloed && (cm({
                        ctid: m,
                        isDestination: !0
                    }), m = Ql(m));
                    Ll().destination[m] = {
                        state: 1,
                        context: c,
                        parent: bm()
                    };
                    Ml({
                        ctid: m,
                        isDestination: !0
                    }, d);
                    qc(h)
                }
        };

    function bt() {
        if (Kl()) {
            return !0
        }
        return !1
    };
    var ft = function(a, b) {
            et(a).entity.push(b)
        },
        gt = function(a, b) {
            et(a).event && et(a).event.push(b)
        },
        ht = function() {
            var a = et(Wl());
            return a.event ? a.event : []
        };

    function et(a) {
        var b, c = Mh.r;
        c || (c = {
            container: {}
        }, Mh.r = c);
        b = c;
        var d = b.container[a];
        d || (d = {
            entity: [],
            event: []
        }, b.container[a] = d);
        return d
    };
    var it = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        jt = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        kt = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        lt = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        ot = function(a) {
            var b = li("gtm.allowlist") || li("gtm.whitelist");
            b && O(9);
            Sh && (b = ["google", "gtagfl", "lcl", "zone"]);
            mt() && (Sh ?
                O(116) : O(117), nt && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && ab(Sa(b), jt),
                d = li("gtm.blocklist") || li("gtm.blacklist");
            d || (d = li("tagTypeBlacklist")) && O(3);
            d ? O(8) : d = [];
            mt() && (d = Sa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Sa(d).indexOf("google") && O(2);
            var e = d && ab(Sa(d), kt),
                f = {};
            return function(g) {
                var h = g && g[re.Sb];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var m = di[h] || [],
                    n = a(h, m),
                    p;
                p = et(Wl()).entity;
                for (var q = 0; q < p.length; q++) try {
                    n = n && p[q](h, m)
                } catch (y) {
                    n = !1
                }
                if (b) {
                    var r;
                    if (r = n) a: {
                        if (0 > c.indexOf(h))
                            if (m && 0 < m.length)
                                for (var t = 0; t < m.length; t++) {
                                    if (0 > c.indexOf(m[t])) {
                                        O(11);
                                        r = !1;
                                        break a
                                    }
                                } else {
                                    r = !1;
                                    break a
                                }
                        r = !0
                    }
                    n = r
                }
                var u = !1;
                if (d) {
                    var v = 0 <= e.indexOf(h);
                    if (v) u = v;
                    else {
                        var w = Oa(e, m || []);
                        w && O(10);
                        u = w
                    }
                }
                var x = !n || u;
                x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Oa(e, lt));
                return f[h] = x
            }
        },
        nt = !1;
    var mt = function() {
        return it.test(z.location && z.location.hostname)
    };
    var pt = "",
        qt = [];

    function rt(a) {
        var b = "";
        pt && (b = "&dl=" + encodeURIComponent(pt));
        0 < qt.length && (b += "&tdp=" + qt.join("."));
        a.Xb && (pt = "", qt.length = 0, b && a.Pj());
        return b
    };
    var st = [];

    function tt(a) {
        if (!st.length) return "";
        var b = "&tdc=" + st.join("!");
        a.Xb && (a.Pj(), st.length = 0);
        return b
    };
    var ut = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        vt = {},
        wt = Object.freeze((vt[P.g.Qa] = !0, vt)),
        xt = 0 <= G.location.search.indexOf("?gtm_diagnostics=") || 0 <= G.location.search.indexOf("&gtm_diagnostics="),
        At = function(a, b, c) {
            if (vn && "config" === a && !(1 < yp(b).I.length)) {
                var d, e = lc("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = J(c.C);
                J(c.h, f);
                var g = [],
                    h;
                for (h in d) {
                    var m = zt(d[h], f);
                    m.length && (xt && console.log(m), g.push(h))
                }
                g.length && (g.length && vn && st.push(b + "*" + g.join(".")), xb("TAGGING", ut[G.readyState] ||
                    14));
                d[b] = f
            }
        };

    function Bt(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function zt(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? wt[q] : t
            },
            f;
        for (f in Bt(a, b)) {
            var g = (d ? d + "." : "") + f,
                h = e(f, a),
                m = e(f, b),
                n = "object" === Tc(h) || "array" === Tc(h),
                p = "object" === Tc(m) || "array" === Tc(m);
            if (n && p) zt(h, m, c, g);
            else if (n || p || h !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var Ct = !1,
        Dt = 0,
        Et = [];

    function Ft(a) {
        if (!Ct) {
            var b = G.createEventObject,
                c = "complete" == G.readyState,
                d = "interactive" == G.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Ct = !0;
                for (var e = 0; e < Et.length; e++) I(Et[e])
            }
            Et.push = function() {
                for (var f = 0; f < arguments.length; f++) I(arguments[f]);
                return 0
            }
        }
    }

    function Gt() {
        if (!Ct && 140 > Dt) {
            Dt++;
            try {
                G.documentElement.doScroll("left"), Ft()
            } catch (a) {
                z.setTimeout(Gt, 50)
            }
        }
    }
    var Ht = function(a) {
        Ct ? a() : Et.push(a)
    };
    var Jt = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Vl()
        }
    };

    function Kt(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var Mt = function(a, b) {
            this.h = !1;
            this.C = [];
            this.J = {
                tags: []
            };
            this.R = !1;
            this.m = this.B = 0;
            Lt(this, a, b)
        },
        Nt = function(a, b, c, d) {
            if (Ph.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Vc(d) && (e = J(d, e));
            e.id = c;
            e.status = "timeout";
            return a.J.tags.push(e) - 1
        },
        Ot = function(a, b, c, d) {
            var e = a.J.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Pt = function(a) {
            if (!a.h) {
                for (var b = a.C, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.C.length = 0
            }
        },
        Lt = function(a, b, c) {
            void 0 !== b && a.Gf(b);
            c && z.setTimeout(function() {
                return Pt(a)
            }, Number(c))
        };
    Mt.prototype.Gf = function(a) {
        var b = this,
            c = Xa(function() {
                return I(function() {
                    a(Vl(), b.J)
                })
            });
        this.h ? c() : this.C.push(c)
    };
    var Qt = function(a) {
            a.B++;
            return Xa(function() {
                a.m++;
                a.R && a.m >= a.B && Pt(a)
            })
        },
        Rt = function(a) {
            a.R = !0;
            a.m >= a.B && Pt(a)
        };
    var St = {},
        Ut = function() {
            return z[Tt()]
        },
        Vt = !1;
    var Wt = function(a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ua());
                z[b] = c
            }
            return z[b]
        },
        Xt = function(a) {
            if (Fk()) {
                var b = Ut();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function Tt() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var Yt = function(a) {},
        Zt = function(a, b) {
            return function() {
                var c = Ut(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var du = {},
        eu = {};

    function fu(a, b) {
        if (vn) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            du[a] = "&e=" + c + "&eid=" + a;
            Fn(a)
        }
    }

    function gu(a) {
        var b = a.eventId,
            c = a.Xb;
        if (!du[b]) return "";
        var d = eu[b] ? "" : "&es=1";
        d += du[b];
        c && (eu[b] = !0);
        return d
    };
    var hu = {};

    function iu(a, b) {
        vn && (hu[a] = hu[a] || {}, hu[a][b] = (hu[a][b] || 0) + 1)
    }

    function ju(a) {
        for (var b = a.eventId, c = a.Xb, d = Object.entries(hu[b] || {}), e = [], f = 0; f < d.length; f++) {
            var g = ia(d[f]),
                h = g.next().value,
                m = g.next().value;
            e.push("" + h + m)
        }
        c && delete hu[b];
        return e.length ? "&md=" + e.join(".") : ""
    };
    var ku = {},
        lu = {
            aev: "1",
            c: "2",
            jsm: "3",
            v: "4",
            j: "5",
            smm: "6",
            rmm: "7",
            input: "8"
        };

    function mu(a, b, c) {
        if (vn) {
            ku[a] = ku[a] || [];
            var d = lu[b] || "0",
                e;
            e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === G ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || Vc(c) ? "0" : "e";
            ku[a].push("" + d + e)
        }
    }

    function nu(a) {
        var b = a.eventId,
            c = ku[b] || [];
        if (!c.length) return "";
        a.Xb && delete ku[b];
        return "&pcr=" + c.join(".")
    };
    var ou = {},
        Gu = {};

    function Uu(a, b, c) {
        if (vn && b) {
            var d = mn(b);
            ou[a] = ou[a] || [];
            ou[a].push(c + d);
            var e = b["function"];
            if (!e) throw Error("Error: No function name given for function call.");
            var f = (Te[e] ? "1" : "2") + d;
            Gu[a] = Gu[a] || [];
            Gu[a].push(f);
            Fn(a)
        }
    }

    function Vu(a) {
        var b = a.eventId,
            c = a.Xb,
            d = "",
            e = ou[b] || [];
        e.length && (d += "&tr=" + e.join("."));
        var f = Gu[b] || [];
        f.length && (d += "&ti=" + f.join("."));
        c && (delete ou[b], delete Gu[b]);
        return d
    };

    function Wu(a, b, c, d) {
        var e = Re[a],
            f = Xu(a, b, c, d);
        if (!f) return null;
        var g = bf(e[re.lj], c, []);
        if (g && g.length) {
            var h = g[0];
            f = Wu(h.index, {
                P: f,
                W: 1 === h.Bj ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Xu(a, b, c, d) {
        function e() {
            if (f[re.Ck]) h();
            else {
                var w = cf(f, c, []),
                    x = w[re.Zj];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!Ck(x[y])) {
                            h();
                            return
                        }
                var A = Nt(c.Vb, String(f[re.Sb]), Number(f[re.pe]), w[re.Dk]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var K = Va() - F;
                        Uu(c.id, Re[a], "5");
                        Ot(c.Vb, A, "success", K);
                        T(70) && zs(c, f, Jr.D.oj);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var K = Va() - F;
                        Uu(c.id, Re[a], "6");
                        Ot(c.Vb, A, "failure", K);
                        T(70) && zs(c, f, Jr.D.nj);
                        h()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Uu(c.id, f, "1");
                var D = function() {
                    ti(3);
                    var K = Va() - F;
                    Uu(c.id, f, "7");
                    Ot(c.Vb, A, "exception", K);
                    T(70) && zs(c, f, Jr.D.mj);
                    B || (B = !0, h())
                };
                T(70) && ys(c, f);
                var F = Va();
                try {
                    af(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (K) {
                    D(K)
                }
                T(70) && zs(c, f, Jr.D.pj)
            }
        }
        var f = Re[a],
            g = b.P,
            h = b.W,
            m = b.terminate;
        if (c.vh(f)) return null;
        var n = bf(f[re.qj], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Wu(p.index, {
                    P: g,
                    W: h,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            h = 2 === p.Bj ? m : q
        }
        if (f[re.gj] || f[re.Fk]) {
            var r = f[re.gj] ?
                Se : c.wm,
                t = g,
                u = h;
            if (!r[a]) {
                e = Xa(e);
                var v = Yu(a, r, e);
                g = v.P;
                h = v.W
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function Yu(a, b, c) {
        var d = [],
            e = [];
        b[a] = Zu(d, e, c);
        return {
            P: function() {
                b[a] = $u;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            W: function() {
                b[a] = av;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Zu(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function $u(a) {
        a()
    }

    function av(a, b) {
        b()
    };
    var cv = function(a, b) {
            return 1 === arguments.length ? bv("set", a) : bv("set", a, b)
        },
        dv = function(a, b) {
            return 1 === arguments.length ? bv("config", a) : bv("config", a, b)
        },
        ev = function(a, b, c) {
            c = c || {};
            c[P.g.Rb] = a;
            return bv("event", b, c)
        };

    function bv(a) {
        return arguments
    }
    var fv = function() {
        this.h = [];
        this.m = []
    };
    fv.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {}
    };
    fv.prototype.listen = function(a) {
        this.m.push(a)
    };
    fv.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    fv.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var hv = function(a, b, c) {
            gv().enqueue(a, b, c)
        },
        jv = function() {
            var a = iv;
            gv().listen(a)
        };

    function gv() {
        var a = Mh.mb;
        a || (a = new fv, Mh.mb = a);
        return a
    }
    var rv = function(a) {
            var b = Mh.zones;
            return b ? b.getIsAllowedFn(Rl(), a) : function() {
                return !0
            }
        },
        sv = function(a) {
            var b = Mh.zones;
            return b ? b.isActive(Rl(), a) : !0
        },
        tv = function() {
            gt(Wl(), function(a, b) {
                return sv(b)
            })
        };
    var wv = function(a, b) {
        for (var c = [], d = 0; d < Re.length; d++)
            if (a[d]) {
                var e = Re[d];
                var f = Qt(b.Vb);
                try {
                    var g = Wu(d, {
                        P: f,
                        W: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = e["function"];
                        if (!h) throw "Error: No function name given for function call.";
                        var m = Te[h];
                        c.push({
                            Rj: d,
                            Jj: (m ? m.priorityOverride || 0 : 0) || Kt(e[re.Sb], 1) || 0,
                            execute: g
                        })
                    } else uv(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(vv);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function vv(a, b) {
        var c, d = b.Jj,
            e = a.Jj;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Rj,
                h = b.Rj;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function uv(a, b) {
        if (vn) {
            var c = function(d) {
                var e = b.vh(Re[d]) ? "3" : "4",
                    f = bf(Re[d][re.lj], b, []);
                f && f.length && c(f[0].index);
                Uu(b.id, Re[d], e);
                var g = bf(Re[d][re.qj], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var zv = !1,
        xv;
    var Fv = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        T(70) && ss(b, d);
        if ("gtm.js" === d) {
            if (zv) return !1;
            zv = !0
        }
        var e, f = !1,
            g = sv(b);
        if (T(130))
            for (var h = ht(), m = 0; g && m < h.length; m++) g = (0, h[m])(d, b);
        if (g) e = rv(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            f = !0;
            e = rv(Number.MAX_SAFE_INTEGER)
        }
        fu(b, d);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = {
                id: b,
                priorityId: c,
                name: d,
                vh: ot(e),
                wm: [],
                Gj: function() {
                    O(6);
                    ti(0)
                },
                vj: Bv(),
                wj: Cv(b),
                Vb: new Mt(function() {
                    if (T(70)) {}
                    n && n.apply(n, [].slice.call(arguments, 0))
                }, p)
            };
        T(119) && (q.Nj = iu);
        T(70) && us(q.id, q.name);
        var r = mf(q);
        T(70) && vs(q.id,
            q.name);
        f && (r = Dv(r));
        T(70) && ts(b, d);
        var t = wv(r, q),
            u = !1;
        Rt(q.Vb);
        "gtm.js" !== d && "gtm.sync" !== d || Yt(Vl());
        return Ev(r, t) || u
    };

    function Cv(a) {
        return function(b) {
            Zc(b) || mu(a, "input", b)
        }
    }

    function Bv() {
        var a = {};
        a.event = qi("event", 1);
        a.ecommerce = qi("ecommerce", 1);
        a.gtm = qi("gtm");
        a.eventModel = qi("eventModel");
        return a
    }

    function Dv(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Re[c][re.Sb]);
                if (Oh[d] || void 0 !== Re[c][re.Gk] || ei[d] || Kt(d, 2)) b[c] = !0
            }
        return b
    }

    function Ev(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Re[c] && !Ph[String(Re[c][re.Sb])]) return !0;
        return !1
    }
    var Gv = {};

    function Hv(a, b, c) {
        vn && void 0 !== a && (Gv[a] = Gv[a] || [], Gv[a].push(c + b), Fn(a))
    }

    function Iv(a) {
        var b = a.eventId,
            c = a.Xb,
            d = "",
            e = Gv[b] || [];
        e.length && (d += "&epr=" + e.join("."));
        c && delete Gv[b];
        return d
    };
    var Kv = function(a, b) {
            var c = yp(a, !0);
            c && Jv.register(c, b)
        },
        Lv = function(a, b, c, d) {
            var e = yp(c, d.isGtmEvent);
            e && Jv.push("event", [b, a], e, d)
        },
        Mv = function(a, b, c, d) {
            var e = yp(c, d.isGtmEvent);
            e && Jv.push("get", [a, b], e, d)
        },
        Ov = function(a) {
            var b = yp(a, !0),
                c;
            b ? c = Nv(Jv, b).h : c = {};
            return c
        },
        Pv = function(a, b) {
            var c = yp(a, !0);
            if (c) {
                var d = Jv,
                    e = J(b);
                J(Nv(d, c).h, e);
                Nv(d, c).h = e
            }
        },
        Qv = function() {
            this.status = 1;
            this.J = {};
            this.h = {};
            this.m = {};
            this.R = null;
            this.C = {};
            this.B = !1
        },
        Rv = function(a, b, c, d) {
            var e = Va();
            this.type = a;
            this.B = e;
            this.h =
                b;
            this.m = c;
            this.messageContext = d
        },
        Sv = function() {
            this.m = {};
            this.B = {};
            this.h = []
        },
        Nv = function(a, b) {
            var c = b.ba;
            return a.m[c] = a.m[c] || new Qv
        },
        Tv = function(a, b, c, d) {
            if (d.h) {
                var e = Nv(a, d.h),
                    f = e.R;
                if (f) {
                    var g = J(c),
                        h = J(e.J[d.h.id]),
                        m = J(e.C),
                        n = J(e.h),
                        p = J(a.B),
                        q = {};
                    if (vn) try {
                        q = J(ii)
                    } catch (v) {
                        O(72)
                    }
                    var r = d.h.prefix,
                        t = function(v) {
                            Hv(d.messageContext.eventId, r, v);
                            var w = g[P.g.mc];
                            w && I(w)
                        },
                        u = zq(yq(xq(wq(vq(tq(sq(uq(rq(qq(pq(new oq(d.messageContext.eventId, d.messageContext.priorityId), g), h), m), n), p), q), d.messageContext.eventMetadata),
                            function() {
                                if (t) {
                                    var v = t;
                                    t = void 0;
                                    v("2")
                                }
                            }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3")
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        Hv(d.messageContext.eventId, r, "1"), At(d.type, d.h.id, u), f(d.h.id, b, d.B, u)
                    } catch (v) {
                        Hv(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    Sv.prototype.register = function(a, b, c) {
        var d = Nv(this, a);
        3 !== d.status && (d.R = b, d.status = 3, c && (J(d.h, c), d.h = c), this.flush())
    };
    Sv.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === Nv(this, c).status && (Nv(this, c).status = 2, this.push("require", [{}], c, {})), Nv(this, c).B && (d.deferrable = !1));
        this.h.push(new Rv(a, c, b, d));
        d.deferrable || this.flush()
    };
    Sv.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0],
                g = f.h;
            if (f.messageContext.deferrable) !g || Nv(this, g).B ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== Nv(this, g).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        l(f.m[0], function(r, t) {
                            J(cb(r, t), b.B)
                        });
                        break;
                    case "config":
                        var h = Nv(this, g);
                        e.Gb = {};
                        l(f.m[0], function(r) {
                            return function(t, u) {
                                J(cb(t, u), r.Gb)
                            }
                        }(e));
                        var m = !!e.Gb[P.g.uc];
                        delete e.Gb[P.g.uc];
                        var n = g.ba === g.id;
                        m || (n ? h.C = {} : h.J[g.id] = {});
                        h.B && m || Tv(this, P.g.la, e.Gb, f);
                        h.B = !0;
                        n ? J(e.Gb, h.C) : (J(e.Gb, h.J[g.id]), O(70));
                        d = !0;
                        break;
                    case "event":
                        e.Pe = {};
                        l(f.m[0], function(r) {
                            return function(t, u) {
                                J(cb(t, u), r.Pe)
                            }
                        }(e));
                        Tv(this, f.m[1], e.Pe, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[P.g.Pa] = f.m[0], p[P.g.hb] = f.m[1], p);
                        Tv(this, P.g.Ja, q, f)
                }
                this.h.shift();
                Uv(this, f)
            }
            e = {
                Gb: e.Gb,
                Pe: e.Pe
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var Uv = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = Nv(a, b.h).m[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.m)
                        if (a.m.hasOwnProperty(e)) {
                            var f = a.m[e];
                            if (f && f.m)
                                for (var g = f.m[b.type] || [], h = 0; h < g.length; h++) g[h]()
                        }
        },
        Jv = new Sv;
    var vf;
    var Vv = {},
        Wv = {},
        Xv = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    Ue: e.Ue,
                    Re: e.Re
                }, f++) {
                var g = a[f];
                if (0 <= g.indexOf("-")) {
                    if (e.Ue = yp(g, b), e.Ue) {
                        var h = Tl();
                        La(h, function(r) {
                            return function(t) {
                                return r.Ue.ba === t
                            }
                        }(e)) ? c.push(g) : d.push(g)
                    }
                } else {
                    var m = Vv[g] || [];
                    e.Re = {};
                    m.forEach(function(r) {
                        return function(t) {
                            return r.Re[t] = !0
                        }
                    }(e));
                    for (var n = Rl(), p = 0; p < n.length; p++)
                        if (e.Re[n[p]]) {
                            c = c.concat(Tl());
                            break
                        }
                    var q = Wv[g] || [];
                    q.length && (c = c.concat(q))
                }
            }
            return {
                Ml: c,
                Pl: d
            }
        },
        Yv = function(a) {
            l(Vv, function(b,
                c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        Zv = function(a) {
            l(Wv, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var $v = "HA GF G UA AW DC MC".split(" "),
        aw = !1,
        bw = !1;

    function cw(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: fi()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var dw = void 0,
        ew = void 0;

    function fw(a, b, c) {
        var d = J(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && O(136);
        var e = J(b);
        J(c, e);
        hv(dv(Rl()[0], e), a.eventId, d)
    }

    function gw(a) {
        for (var b = at(), c = ia(b), d = c.next(); !d.done; d = c.next()) {
            var e = d.value,
                f = a && a[e] || Jv.B[e];
            if (f) return f
        }
    }
    var hw = {
            config: function(a, b) {
                var c = T(122),
                    d = cw(a, b);
                if (!(2 > a.length) && k(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Vc(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = yp(a[1], b.isGtmEvent);
                    if (f) {
                        var g, h, m;
                        a: {
                            if (!Ol.zf) {
                                var n = Xl(bm());
                                if (n && n.parent && n.context && 1 === n.context.source && 0 !== n.parent.ctid.indexOf("GTM-")) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    m = {
                                        Tl: Xl(p),
                                        Ll: q
                                    };
                                    break a
                                }
                            }
                            m = void 0
                        }
                        var r = m;
                        r && (g = r.Tl, h = r.Ll);
                        fu(d.eventId, "gtag.config");
                        var t = f.ba,
                            u = f.id !== t;
                        if (u ? -1 === Tl().indexOf(t) : -1 === Rl().indexOf(t)) {
                            if (!(c &&
                                    b.inheritParentConfig || T(61) && e[P.g.yb])) {
                                var v = gw(e);
                                if (u) dt(t, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                                    var w = e;
                                    dw ? fw(b, w, dw) : ew || (ew = J(w))
                                } else ct(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (g && (O(128), h && O(130), c && b.inheritParentConfig)) {
                                var x = e;
                                ew ? fw(b, ew, x) : !x[P.g.uc] && Rh && dw || (dw = J(x));
                                return
                            }
                            if (Rh && !u && !e[P.g.uc]) {
                                var y = bw;
                                bw = !0;
                                if (y) return
                            }
                            aw || O(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    Zv(f.id);
                                    var A = f.id,
                                        B = e[P.g.Qd] || "default";
                                    B = String(B).split(",");
                                    for (var D = 0; D < B.length; D++) {
                                        var F = Wv[B[D]] || [];
                                        Wv[B[D]] = F;
                                        0 > F.indexOf(A) && F.push(A)
                                    }
                                } else {
                                    Yv(f.id);
                                    var K = f.id,
                                        H = e[P.g.Qd] || "default";
                                    H = H.toString().split(",");
                                    for (var N = 0; N < H.length; N++) {
                                        var Q = Vv[H[N]] || [];
                                        Vv[H[N]] = Q;
                                        0 > Q.indexOf(K) && Q.push(K)
                                    }
                                }
                            delete e[P.g.Qd];
                            var ca = b.eventMetadata || {};
                            ca.hasOwnProperty("is_external_event") || (ca.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = ca;
                            delete e[P.g.mc];
                            for (var aa = u ? [f.id] : Tl(), W = 0; W <
                                aa.length; W++) {
                                var S = e,
                                    na = J(b),
                                    ha = yp(aa[W], na.isGtmEvent);
                                ha && Jv.push("config", [S], ha, na)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    O(39);
                    var c = cw(a, b),
                        d = a[1];
                    "default" === d ? Rk(a[2]) : "update" === d ? Sk(a[2], c) : "declare" === d ? b.fromContainerExecution && Qk(a[2]) : "core_platform_services" === d && Tk(a[2])
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && k(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Vc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = J(e), e[P.g.mc] && (g.eventCallback =
                        e[P.g.mc]), e[P.g.Ld] && (g.eventTimeout = e[P.g.Ld]));
                    var h = cw(a, b),
                        m = h.eventId,
                        n = h.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[P.g.Rb];
                    void 0 === r && (r = li(P.g.Rb, 2), void 0 === r && (r = "default"));
                    if (k(r) || Ka(r)) {
                        var t;
                        b.isGtmEvent && T(120) ? t = k(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                        var u = Xv(t, b.isGtmEvent),
                            v = u.Ml,
                            w = u.Pl;
                        if (w.length)
                            for (var x = gw(q), y = 0; y < w.length; y++) {
                                var A = yp(w[y], b.isGtmEvent);
                                A && dt(A.ba, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = Ap(v, b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        fu(m, c);
                        for (var D = [], F = 0; F < B.length; F++) {
                            var K = B[F],
                                H = J(b);
                            if (-1 !== $v.indexOf(K.prefix)) {
                                var N = J(d),
                                    Q = H.eventMetadata || {};
                                Q.hasOwnProperty("is_external_event") || (Q.is_external_event = !H.fromContainerExecution);
                                H.eventMetadata = Q;
                                delete N[P.g.mc];
                                Lv(c, N, K.id, H)
                            }
                            D.push(K.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < B.length ? g.eventModel[P.g.Rb] = D.join() : delete g.eventModel[P.g.Rb];
                        aw || O(43);
                        void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        T(135) && g.eventModel[P.g.Nb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                O(53);
                if (4 === a.length && k(a[1]) && k(a[2]) && Ha(a[3])) {
                    var c = yp(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        aw || O(43);
                        var f = gw();
                        if (!La(Tl(), function(h) {
                                return c.ba === h
                            })) dt(c.ba, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== $v.indexOf(c.prefix)) {
                            cw(a, b);
                            var g = {};
                            Lk(J((g[P.g.Pa] = d, g[P.g.hb] =
                                e, g)));
                            Mv(d, function(h) {
                                I(function() {
                                    return e(h)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    aw = !0;
                    var c = cw(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (3 === a.length && k(a[1]) && Ha(a[2])) {
                    var b = a[1],
                        c = a[2],
                        d = vf.m;
                    d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
                    if (O(74), "all" === a[1]) {
                        O(75);
                        var e = !1;
                        try {
                            e = a[2](Vl(), "unknown", {})
                        } catch (f) {}
                        e || O(76)
                    }
                } else {
                    O(73);
                }
            },
            set: function(a, b) {
                var c;
                2 == a.length && Vc(a[1]) ? c = J(a[1]) : 3 == a.length && k(a[1]) && (c = {}, Vc(a[2]) || Ka(a[2]) ? c[a[1]] = J(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = cw(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    J(c);
                    var g = J(c);
                    Jv.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    T(30) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        iw = {
            policy: !0
        };
    var jw = function(a) {
            var b = z[Lh.ka].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        kw = function(a) {
            var b = z[Lh.ka],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var lw = !1,
        mw = [];

    function nw() {
        if (!lw) {
            lw = !0;
            for (var a = 0; a < mw.length; a++) I(mw[a])
        }
    }
    var ow = function(a) {
        lw ? I(a) : mw.push(a)
    };
    var Fw = function(a) {
        if (Ew(a)) return a;
        this.h = a
    };
    Fw.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Ew = function(a) {
        return !a || "object" !== Tc(a) || Vc(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Fw.prototype.getUntrustedMessageValue = Fw.prototype.getUntrustedMessageValue;
    var Gw = 0,
        Hw = {},
        Iw = [],
        Jw = [],
        Kw = !1,
        Lw = !1;

    function Mw(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Nw = function(a) {
            return z[Lh.ka].push(a)
        },
        Ow = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return Nw(a)
        },
        Pw = function(a, b) {
            var c = Mh[Lh.ka],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = z.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function Qw(a, b) {
        var c = a._clear || b.overwriteModelFields;
        l(a, function(e, f) {
            "_clear" !== e && (c && oi(e), oi(e, f))
        });
        ai || (ai = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = fi(), a["gtm.uniqueEventId"] = d, oi("gtm.uniqueEventId", d));
        return Fv(a)
    }

    function Rw(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Pa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Sw() {
        var a;
        if (Jw.length) a = Jw.shift();
        else if (Iw.length) a = Iw.shift();
        else return;
        var b;
        var c = a;
        if (Kw || !Rw(c.message)) b = c;
        else {
            Kw = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = fi());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                h = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Iw.unshift(h, c);
            if (vn) {
                var m = rf.ctid;
                if (m) {
                    var n, p = Xl(bm());
                    n = p && p.context;
                    var q, r = hj(z.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution,
                        u = n && n.source,
                        v = rf.Jf,
                        w = Ol.zf;
                    vn && (pt || (pt = q), qt.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }

    function Tw() {
        for (var a = !1, b; !Lw && (b = Sw());) {
            Lw = !0;
            delete ii.eventModel;
            ki();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Lw = !1;
            else {
                e.fromContainerExecution && pi();
                try {
                    if (Ha(d)) try {
                        d.call(mi)
                    } catch (x) {} else if (Ka(d)) {
                        var f = d;
                        if (k(f[0])) {
                            var g = f[0].split("."),
                                h = g.pop(),
                                m = f.slice(1),
                                n = li(g.join("."), 2);
                            if (null != n) try {
                                n[h].apply(n, m)
                            } catch (x) {}
                        }
                    } else {
                        var p = void 0,
                            q = !1;
                        if (Pa(d)) {
                            a: {
                                if (d.length && k(d[0])) {
                                    var r = hw[d[0]];
                                    if (r && (!e.fromContainerExecution || !iw[d[0]])) {
                                        p = r(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }(q = p &&
                                "set" === d[0] && !!p.event) && O(101)
                        }
                        else p = d;
                        if (p) {
                            var t = Qw(p, e);
                            a = t || a;
                            q && t && O(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && ki(!0);
                    var u = d["gtm.uniqueEventId"];
                    if ("number" === typeof u) {
                        for (var v = Hw[String(u)] || [], w = 0; w < v.length; w++) Jw.push(Uw(v[w]));
                        v.length && Jw.sort(Mw);
                        delete Hw[String(u)];
                        u > Gw && (Gw = u)
                    }
                    Lw = !1
                }
            }
        }
        return !a
    }

    function Vw() {
        if (T(70)) {
            var a = Ww();
        }
        var e = Tw();
        try {
            jw(Vl())
        } catch (f) {}
        return e
    }

    function iv(a) {
        if (Gw < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Hw[b] = Hw[b] || [];
            Hw[b].push(a)
        } else Jw.push(Uw(a)), Jw.sort(Mw), I(function() {
            Lw || Tw()
        })
    }

    function Uw(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Xw = function() {
            function a(f) {
                var g = {};
                if (Ew(f)) {
                    var h = f;
                    f = Ew(h) ? h.getUntrustedMessageValue() : void 0;
                    g.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: g
                }
            }
            var b = lc(Lh.ka, []),
                c = Mh[Lh.ka] = Mh[Lh.ka] || {};
            !0 === c.pruned && O(83);
            Hw = gv().get();
            jv();
            Ht(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            ow(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < Mh.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var g = 0; g < arguments.length; g++) f[g] = new Fw(arguments[g])
                } else f = [].slice.call(arguments, 0);
                var h = f.map(function(q) {
                    return a(q)
                });
                Iw.push.apply(Iw, h);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (O(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return Tw() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            Iw.push.apply(Iw, e);
            Ww() && (T(70) && rs(), I(Vw))
        },
        Ww = function() {
            var a = !0;
            return a
        };

    function Yw(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Va();
        return b < c + 3E5 && b > c - 9E5
    }

    function Zw(a) {
        return a && 0 === a.indexOf("pending:") ? Yw(a.substr(8)) : !1
    };
    var tx = function() {};
    var We = {};
    We.yf = new String("undefined");
    var ux = function(a) {
        this.h = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === We.yf ? b : a[d]);
            return c.join("")
        }
    };
    ux.prototype.toString = function() {
        return this.h("undefined")
    };
    ux.prototype.valueOf = ux.prototype.toString;
    We.Jk = ux;
    We.me = {};
    We.Rk = function(a) {
        return new ux(a)
    };
    var vx = {};
    We.dm = function(a, b) {
        var c = fi();
        vx[c] = [a, b];
        return c
    };
    We.yj = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            O(a ? 134 : 135);
            var d = vx[c];
            if (d && "function" === typeof d[b]) d[b]();
            vx[c] = void 0
        }
    };
    We.Bl = function(a) {
        for (var b = !1, c = !1,
                d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    We.Yl = function(a) {
        if (a === We.yf) return a;
        var b = fi();
        We.me[b] = a;
        return T(133) ? 'google_tag_manager["rm"]["' + Wl() + '"](' + b + ")" : 'google_tag_manager["' + Vl() + '"].macro(' + b + ")"
    };
    We.Ol = function(a, b, c) {
        a instanceof We.Jk && (a = a.h(We.dm(b, c)), b = Ga);
        return {
            wl: a,
            P: b
        }
    };
    var wx = function() {
        T(132) && ((Mh.rm = Mh.rm || {})[Wl()] = function(a) {
            if (We.me.hasOwnProperty(a)) return We.me[a]
        })
    };
    var xx = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Bc(a, "className"),
                "gtm.elementId": a["for"] || wc(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Bc(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Bc(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        yx = function(a) {
            Mh.hasOwnProperty("autoEventsSettings") || (Mh.autoEventsSettings = {});
            var b = Mh.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        zx = function(a, b, c) {
            yx(a)[b] = c
        },
        Ax = function(a, b, c, d) {
            var e = yx(a),
                f = Wa(e, b, d);
            e[b] = c(f)
        },
        Bx = function(a, b, c) {
            var d = yx(a);
            return Wa(d, b, c)
        },
        Cx = function(a) {
            return "string" === typeof a ? a : String(fi())
        };
    var Wx = z.clearTimeout,
        Xx = z.setTimeout,
        V = function(a, b, c, d) {
            if (Kl()) {
                b && I(b)
            } else return qc(a, b, c, d)
        },
        Yx = function() {
            return new Date
        },
        Zx = function() {
            return z.location.href
        },
        $x = function(a) {
            return fj(hj(a), "fragment")
        },
        ay = function(a) {
            return gj(hj(a))
        },
        by = function(a, b) {
            return li(a, b || 2)
        },
        cy = function(a, b, c) {
            return b ? Ow(a, b, c) : Nw(a)
        },
        dy = function(a, b) {
            z[a] = b
        },
        X = function(a, b, c) {
            b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        ey = function(a, b, c) {
            return rl(a, b, void 0 === c ? !0 : !!c)
        },
        fy = function(a, b, c) {
            return 0 === Al(a, b, c)
        },
        gy = function(a, b) {
            if (Kl()) {
                b && I(b)
            } else sc(a, b)
        },
        hy = function(a) {
            return !!Bx(a, "init", !1)
        },
        iy = function(a) {
            zx(a, "init", !0)
        },
        jy = function(a, b, c) {
            Zc(a) || mu(c, b, a)
        };
    var ky = We.Ol;

    function Hy(a, b) {
        function c(g) {
            var h = hj(g),
                m = fj(h, "protocol"),
                n = fj(h, "host", !0),
                p = fj(h, "port"),
                q = fj(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Iy(a) {
        return Jy(a) ? 1 : 0
    }

    function Jy(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = J(a, {});
                J({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Iy(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return Tf(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < Pf.length; g++) {
                            var h = Pf[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return Qf(b, c);
            case "_eq":
                return Uf(b, c);
            case "_ge":
                return Vf(b, c);
            case "_gt":
                return Xf(b, c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Wf(b, c);
            case "_lt":
                return Yf(b, c);
            case "_re":
                return Sf(b, c, a.ignore_case);
            case "_sw":
                return Zf(b, c);
            case "_um":
                return Hy(b, c)
        }
        return !1
    };

    function Ky() {
        var a = ["&cv=277", "&rv=" + Lh.ah, "&tc=" + Re.filter(function(b) {
            return b
        }).length];
        Lh.ne && a.push("&x=" + Lh.ne);
        return a.join("")
    };

    function Ly() {
        function a(c, d) {
            var e = zb(d);
            e && b.push(c + "=" + e)
        }
        var b = [];
        a("&u", "GTM");
        a("&ut", "TAGGING");
        a("&h", "HEALTH");
        return b.join("")
    };
    var My;

    function Ny(a, b, c) {
        My = My || new Tg;
        My.add(a, b, c)
    }

    function Oy(a, b) {
        var c = My = My || new Tg;
        if (c.m.hasOwnProperty(a)) throw "Attempting to add a private function which already exists: " + a + ".";
        if (c.h.hasOwnProperty(a)) throw "Attempting to add a private function with an existing API name: " + a + ".";
        c.m[a] = Ha(b) ? lg(a, b) : mg(a, b)
    }

    function Py() {
        return function(a) {
            var b;
            var c = My;
            if (c.h.hasOwnProperty(a)) b = c.get(a, this);
            else {
                var d;
                if (d = c.m.hasOwnProperty(a)) {
                    var e = !1,
                        f = this.h.h;
                    if (f) {
                        var g = f.jd();
                        if (g) {
                            0 !== g.indexOf("__cvt_") && (e = !0);
                        }
                    } else e = !0;
                    d = e
                }
                if (d) {
                    var h = c.m.hasOwnProperty(a) ? c.m[a] : void 0;
                    b = h
                } else throw Error(a + " is not a valid API name.");
            }
            return b
        }
    };

    function Qy(a, b) {
        var c = this;
    }
    Qy.K = "addConsentListener";
    var Ry;
    var Sy = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (Ry) try {
                a[b]()
            } catch (c) {
                O(77)
            } else a[b]()
    };

    function Ty(a, b, c) {
        var d = this,
            e;
        return e
    }
    Ty.H = "internal.addDataLayerEventListener";

    function Uy(a, b, c) {}
    Uy.K = "addDocumentEventListener";

    function Vy(a, b, c, d) {}
    Vy.K = "addElementEventListener";

    function Wy(a) {}
    Wy.K = "addEventCallback";

    function $y(a) {}
    $y.H = "internal.addFormAbandonmentListener";

    function az(a, b, c, d) {}
    az.H = "internal.addFormData";
    var bz = {},
        cz = [],
        dz = {},
        ez = 0,
        fz = 0;

    function mz(a, b) {}
    mz.H = "internal.addFormInteractionListener";

    function tz(a, b) {}
    tz.H = "internal.addFormSubmitListener";

    function yz(a) {}
    yz.H = "internal.addGaSendListener";
    var zz = function(a, b) {
        this.tagId = a;
        this.h = b
    };

    function Az(a, b, c) {
        var d = this;
    }
    Az.H = "internal.loadGoogleTag";

    function Bz(a, b, c) {}
    Bz.H = "internal.addGoogleTagRestriction";
    var Cz = {},
        Dz = [];
    var Kz = function(a, b) {};
    Kz.H = "internal.addHistoryChangeListener";

    function Lz(a, b, c) {}
    Lz.K = "addWindowEventListener";

    function Mz(a, b) {
        return !0
    }
    Mz.K = "aliasInWindow";

    function Nz(a, b, c) {}
    Nz.H = "internal.appendRemoteConfigParameter";

    function Oz() {
        var a = 2;
        return a
    };

    function Pz(a, b) {
        var c;
        L(E(this), ["path:!string"], [a]);
        M(this, "access_globals", "execute", a);
        for (var d = a.split("."), e = z, f = e[d[0]], g = 1; f && g < d.length; g++)
            if (e = f, f = f[d[g]], e === z || e === G) return;
        if ("function" !== Tc(f)) return;
        for (var h = Oz(), m = [], n = 1; n < arguments.length; n++) m.push(Xc(arguments[n], this.h, h));
        var p = (0, this.h.J)(f, e, m);
        c = Wc(p, this.h, h);
        void 0 === c && void 0 !== p && O(45);
        return c
    }
    Pz.K = "callInWindow";

    function Qz(a) {}
    Qz.K = "callLater";

    function Rz(a) {}
    Rz.H = "callOnDomReady";

    function Sz(a) {}
    Sz.H = "callOnWindowLoad";

    function Tz(a) {
        var b;
        return b
    }
    Tz.H = "internal.computeGtmParameter";

    function Uz(a, b) {
        var c;
        L(E(this), ["key:!string", "dataLayerVersion:?number"], arguments), M(this, "read_data_layer", a), c = 2 !== (b || 2) ? li(a, 1) : ni(a, [z, G]);
        var d = Wc(c, this.h, Oz());
        void 0 === d && void 0 !== c && O(45);
        return d
    }
    Uz.K = "copyFromDataLayer";

    function Vz(a) {
        var b;
        L(E(this), ["path:!string"], arguments);
        M(this, "access_globals", "read", a);
        var c = a.split("."),
            d = bb(c, [z, G]);
        if (!d) return;
        var e = d[c[c.length - 1]];
        b = Wc(e, this.h, Oz());
        void 0 === b && void 0 !== e && O(45);
        return b
    }
    Vz.K = "copyFromWindow";

    function Wz(a, b) {
        var c;
        return c
    }
    Wz.H = "internal.copyPreHit";

    function Xz(a, b) {
        var c = null,
            d = Oz();
        return Wc(c, this.h, d)
    }
    Xz.K = "createArgumentsQueue";

    function Yz(a) {
        var b;
        return Wc(b, this.h,
            Oz())
    }
    Yz.K = "createQueue";

    function Zz(a, b) {
        var c = null;
        return c
    }
    Zz.H = "internal.createRegex";

    function $z(a) {
        if (!a) return {};
        var b = a.Xk;
        return Jt(b.type, b.index, b.name)
    }

    function aA(a) {
        return a ? {
            originatingEntity: $z(a)
        } : {}
    };

    function bA(a) {}
    bA.H = "internal.declareConsentState";
    var cA = {},
        dA = [],
        eA = {},
        fA = 0,
        gA = 0;

    function mA(a, b) {
        var c = this;
        return b
    }
    mA.H = "internal.enableAutoEventOnFormInteraction";

    function rA(a, b) {
        var c = this;
        return b
    }
    rA.H = "internal.enableAutoEventOnFormSubmit";

    function wA() {
        var a = this;
    }
    wA.H = "internal.enableAutoEventOnGaSend";
    var xA = {},
        yA = [];

    function FA(a, b) {
        var c = this;
        return b
    }
    FA.H = "internal.enableAutoEventOnHistoryChange";

    function JA(a, b) {
        var c = this;
        return b
    }
    JA.H = "internal.enableAutoEventOnLinkClick";
    var KA, LA;

    function UA(a, b) {
        var c = this;
        return b
    }
    UA.H = "internal.enableAutoEventOnScroll";
    var fc = ea(["data-gtm-yt-inspected-"]),
        VA = ["www.youtube.com", "www.youtube-nocookie.com"],
        WA, XA = !1;

    function gB(a, b) {
        var c = this;
        return b
    }
    gB.H = "internal.enableAutoEventOnYouTubeActivity";
    var hB;

    function iB(a) {
        var b = !1;
        return b
    }
    iB.H = "internal.evaluateMatchingRules";

    function sB(a, b) {
        var c = !1;
        return c
    }
    sB.H = "internal.evaluatePredicates";
    var tB = function(a) {
        var b;
        return b
    };

    function uB(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    }
    uB.K = "getCookieValues";

    function vB() {
        return Gi()
    }
    vB.H = "internal.getCountryCode";

    function wB() {
        var a = [];
        return Wc(a)
    }
    wB.H = "internal.getDestinationIds";

    function xB(a) {
        var b = null;
        return b
    }
    xB.K = "getElementById";
    var yB = {};
    yB.deferGaGamLink = T(129);
    yB.enableAddFormDataApi = T(127);
    yB.enableAddGoogleTagRestrictionApi = T(91);
    yB.enableAdsConversionValidation = T(83);
    yB.enableAdsHistoryChangeEvents = T(36);
    yB.enableAutoPiiOnPhoneAndAddress = T(114);
    yB.enableCcdAutoRedaction = T(92);
    yB.enableCcdEventEditingAndCreation = T(26);
    yB.enableCcdPreAutoPiiDetection = T(49);
    yB.enableCcdUserData = T(16);
    yB.enableConsentDisclosureActivity = T(124);
    yB.enableDeferAllEnhancedMeasurement = T(126);
    yB.enableEesPagePath = T(43);
    yB.enableEuidAutoMode = T(37);
    yB.enableFormSkipValidation = T(116);
    yB.enableGa4OnoRemarketing = T(34);
    yB.enableMergeRemoteConfigApi = T(137);
    yB.enableRemoveFormDataApi = T(128);
    yB.includeQueryInEesPagePath = T(57);
    yB.pixieSetCorePlatformServices = T(105);
    yB.useEnableAutoEventOnFormApis = T(91);
    yB.autoPiiEligible = Li();

    function zB() {
        return Wc(yB)
    }
    zB.H = "internal.getFlags";

    function AB(a, b) {
        var c;
        return c
    }
    AB.H = "internal.getProductSettingsParameter";

    function BB(a, b) {
        var c;
        return c
    }
    BB.K = "getQueryParameters";

    function CB(a, b) {
        var c;
        return c
    }
    CB.K = "getReferrerQueryParameters";

    function DB(a) {
        var b = "";
        return b
    }
    DB.K = "getReferrerUrl";

    function EB() {
        return Hi()
    }
    EB.H = "internal.getRegionCode";

    function FB(a, b) {
        var c;
        return c
    }
    FB.H = "internal.getRemoteConfigParameter";

    function GB(a) {
        var b = "";
        return b
    }
    GB.K = "getUrl";

    function HB() {
        M(this, "get_user_agent");
        return jc.userAgent
    }
    HB.K = "getUserAgent";

    function VB() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var WB = function() {
            var a = VB();
            a.hid = a.hid || Ma();
            return a.hid
        },
        XB = function(a, b) {
            var c = VB();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var tC = function() {
            var a = !0;
            ln(7) && ln(9) && ln(10) || (a = !1);
            return a
        },
        uC = function() {
            var a = !0;
            ln(3) && ln(4) || (a = !1);
            return a
        };
    var VC = window,
        WC = document,
        XC = function(a) {
            var b = VC._gaUserPrefs;
            if (b && b.ioo && b.ioo() || WC.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === VC["ga-disable-" + a]) return !0;
            try {
                var c = VC.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = ll("AMP_TOKEN", String(WC.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return WC.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function cD(a) {
        l(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[P.g.Ra] || {};
        l(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var lD = function(a, b) {};

    function kD(a, b) {
        var c = function() {};
        return c
    }

    function mD(a, b, c) {};
    var nD = function(a, b) {
            var c;
            c = b ? [Ar, Br, Dr, nr, rr, Fr, sr, Er, yr, or, Ir, tr, Cr, lr, Gr, hr] : [Dq, mr, cr, pr, dr, er, fr, gr, ur, vr, xr, zr, qr, wr, kr, Hr];
            for (var d = 0; d < c.length && (c[d](a), !a.isAborted); d++);
        },
        oD = function(a, b, c, d) {
            var e = new Np(b, c, d);
            e.metadata.hit_type = a;
            e.metadata.speculative = !0;
            e.metadata.event_start_timestamp_ms = Va();
            e.metadata.speculative_in_message = d.eventMetadata.speculative;
            return e
        },
        pD = function(a) {
            var b = a.indexOf("/"),
                c = 3 <= b,
                d = a.substring(3, c ? b : a.length);
            return {
                id: a,
                prefix: "AW",
                ba: "AW-" + d,
                I: [d, c ?
                    a.substring(b + 1) : void 0
                ]
            }
        },
        qD = function(a, b, c, d) {
            function e() {
                for (var q = 0; q < g.length; q++) {
                    var r = g[q];
                    r.isAborted || (nD(g[q], !0), r.metadata.speculative || r.isAborted || Rs(r))
                }
            }
            var f = yp(a, d.isGtmEvent);
            T(120) || !f && d.isGtmEvent && (f = pD(a));
            if (f) {
                var g = [];
                if (d.eventMetadata.hit_type_override) {
                    var h = d.eventMetadata.hit_type_override;
                    Array.isArray(h) || (h = [h]);
                    for (var m = 0; m < h.length; m++) {
                        var n = oD(h[m], f, b, d);
                        n.metadata.speculative = !1;
                        g.push(n)
                    }
                } else b === P.g.la && g.push(oD("landing_page", f, b, d)), g.push(oD("conversion",
                    f, b, d)), g.push(oD("user_data_lead", f, b, d)), g.push(oD("user_data_web", f, b, d)), g.push(oD("remarketing", f, b, d));
                for (var p = 0; p < g.length; p++) nD(g[p], !1);
                Yk(function() {
                    for (var q = [], r = [], t = 0; t < g.length; t++) {
                        var u = g[t];
                        q.push(u.isAborted);
                        r.push(u.metadata.speculative)
                    }
                    e();
                    Ck(P.g.F) || Xk(function(v) {
                        for (var w = v.consentEventId, x = v.consentPriorityId, y = 0; y < g.length; y++) {
                            var A = g[y];
                            A.metadata.consent_updated = !0;
                            A.metadata.speculative = r[y];
                            A.metadata.event_start_timestamp_ms = Va();
                            A.isAborted = q[y];
                            A.metadata.consent_event_id =
                                w;
                            A.metadata.consent_priority_id = x
                        }
                        e()
                    }, [P.g.F])
                }, [P.g.F])
            }
        };
    var eE = function(a, b) {
            if (!b.isGtmEvent) {
                var c = U(b, P.g.Pa),
                    d = U(b, P.g.hb),
                    e = U(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    bE.hasOwnProperty(c) ? f = bE[c] : cE.hasOwnProperty(c) && (f = cE[c]);
                    1 === f && (f = dE(c));
                    k(f) ? Ut()(function() {
                        var g = Ut().getByName(a).get(f);
                        d(g)
                    }) : d(void 0)
                } else d(e)
            }
        },
        fE = function(a, b) {
            var c = a[P.g.Ob],
                d = b + ".",
                e = a[P.g.T] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                g = !!a[P.g.zb];
            e = String(e).replace(/\s+/g, "").split(",");
            var h = Ut();
            h(d + "require", "linker");
            h(d + "linker:autoLink", e, f, g)
        },
        jE = function(a,
            b, c) {
            if (Fk() && (!c.isGtmEvent || !gE[a])) {
                var d = !Ck(P.g.O),
                    e = function(f) {
                        var g, h, m = Ut(),
                            n = hE(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.isGtmEvent || iE(b, n.createOnlyFields)) {
                            c.isGtmEvent && (g = "gtm" + fi(), h = n.createOnlyFields, n.gtmTrackerName && (h.name = g));
                            m(function() {
                                var t = m.getByName(b);
                                t && (p = t.get("clientId"));
                                c.isGtmEvent || m.remove(b)
                            });
                            m("create", a, c.isGtmEvent ? h : n.createOnlyFields);
                            d && Ck(P.g.O) && (d = !1, m(function() {
                                var t = Ut().getByName(c.isGtmEvent ? g : b);
                                !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = Ih[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = Ih[f]), t.set(n.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                            }));
                            c.isGtmEvent && m(function() {
                                m.remove(g)
                            })
                        }
                    };
                Xk(function() {
                    return e(P.g.O)
                }, P.g.O);
                Xk(function() {
                        return e(P.g.F)
                    },
                    P.g.F);
                c.isGtmEvent && (gE[a] = !0)
            }
        },
        kE = function(a, b) {
            Zs() && b && (a[P.g.Mb] = b)
        },
        tE = function(a, b, c) {
            function d() {
                var H = U(c, P.g.jc);
                h(function() {
                    if (!c.isGtmEvent && Vc(H)) {
                        var N = u.fieldsToSend,
                            Q = m().getByName(n),
                            ca;
                        for (ca in H)
                            if (H.hasOwnProperty(ca) && /^(dimension|metric)\d+$/.test(ca) && void 0 != H[ca]) {
                                var aa = Q.get(dE(H[ca]));
                                lE(N, ca, aa)
                            }
                    }
                })
            }

            function e() {
                if (u.displayfeatures) {
                    var H = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: H
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                h = c.isGtmEvent ? Wt(U(c, "gaFunctionName")) : Wt();
            if (Ha(h)) {
                var m = Ut,
                    n;
                c.isGtmEvent ? n = U(c, "name") || U(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(H) {
                        var N = [].slice.call(arguments, 0);
                        N[0] = n ? n + "." + N[0] : "" + N[0];
                        h.apply(window, N)
                    },
                    q = function(H) {
                        var N = function(na, ha) {
                                for (var fa = 0; ha && fa < ha.length; fa++) p(na, ha[fa])
                            },
                            Q = c.isGtmEvent,
                            ca = Q ? mE(u) : nE(b, c);
                        if (ca) {
                            var aa = {};
                            kE(aa, H);
                            p("require", "ec", "ec.js", aa);
                            Q && ca.lh && p("set", "&cu", ca.lh);
                            var W = ca.action;
                            if (Q || "impressions" === W)
                                if (N("ec:addImpression",
                                        ca.Fj), !Q) return;
                            if ("promo_click" === W || "promo_view" === W || Q && ca.Ie) {
                                var S = ca.Ie;
                                N("ec:addPromo", S);
                                if (S && 0 < S.length && "promo_click" === W) {
                                    Q ? p("ec:setAction", W, ca.lb) : p("ec:setAction", W);
                                    return
                                }
                                if (!Q) return
                            }
                            "promo_view" !== W && "impressions" !== W && (N("ec:addProduct", ca.Dc), p("ec:setAction", W, ca.lb))
                        }
                    },
                    r = function(H) {
                        if (H) {
                            var N = {};
                            if (Vc(H))
                                for (var Q in oE) oE.hasOwnProperty(Q) && pE(oE[Q], Q, H[Q], N);
                            kE(N, x);
                            p("require", "linkid", N)
                        }
                    },
                    t = function() {
                        if (Kl()) {} else {
                            var H =
                                U(c, P.g.Qi);
                            H && (p("require", H, {
                                dataLayer: Lh.ka
                            }), p("require", "render"))
                        }
                    },
                    u = hE(n, b, c),
                    v = function(H, N, Q) {
                        Q && (N = "" + N);
                        u.fieldsToSend[H] = N
                    };
                !c.isGtmEvent && iE(n, u.createOnlyFields) && (h(function() {
                    m() && m().remove(n)
                }), qE[n] = !1);
                h("create", f, u.createOnlyFields);
                if (u.createOnlyFields[P.g.Mb] && !c.isGtmEvent) {
                    var w = Uh || Wh ? Ys(u.createOnlyFields[P.g.Mb], "/analytics.js") : void 0;
                    w && (g = w)
                }
                var x = c.isGtmEvent ? u.fieldsToSet[P.g.Mb] : u.createOnlyFields[P.g.Mb];
                if (x) {
                    var y = c.isGtmEvent ? u.fieldsToSet[P.g.Nd] : u.createOnlyFields[P.g.Nd];
                    y && !qE[n] && (qE[n] = !0, h(Zt(n, y)))
                }
                c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
                var A = u[P.g.za];
                A && A[P.g.T] && fE(A, n);
                p("set", u.fieldsToSet);
                if (c.isGtmEvent) {
                    if (u.enableLinkId) {
                        var B = {};
                        kE(B, x);
                        p("require", "linkid", "linkid.js", B)
                    }
                    Fk() && jE(f, n, c)
                }
                if (b === P.g.fc)
                    if (c.isGtmEvent) {
                        e();
                        if (u.remarketingLists) {
                            var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: D
                            })
                        }
                        q(x);
                        p("send", "pageview");
                        u.createOnlyFields._useUp && Xt(n +
                            ".")
                    } else t(), p("send", "pageview", u.fieldsToSend);
                else b === P.g.la ? (t(), Mp(f, c), U(c, P.g.kb) && (np(["aw", "dc"]), Xt(n + ".")), 0 != u.sendPageView && p("send", "pageview", u.fieldsToSend), jE(f, n, c)) : b === P.g.Ja ? eE(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.isGtmEvent ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0), v("timingValue", Qa(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || rE[b]) && q(x), c.isGtmEvent && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value &&
                    v("eventValue", Qa(u.value))), p("send", u.fieldsToSend));
                if (!sE && !c.isGtmEvent) {
                    sE = !0;
                    var F = function() {
                            c.W()
                        },
                        K = function() {
                            m().loaded || F()
                        };
                    Kl() ? I(K) : qc(g, K, F)
                }
            } else I(c.W)
        },
        uE = function(a, b, c, d) {
            Yk(function() {
                tE(a, b, d)
            }, [P.g.O, P.g.F])
        },
        wE = function(a) {
            function b(e) {
                function f(h, m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            g[h] = e[p];
                            break
                        }
                    }
                }
                var g = J(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant",
                    "item_variant"
                ]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) g.category = e.category;
                    else {
                        for (var h = "", m = 0; m < vE.length; m++) void 0 !== e[vE[m]] && (h && (h += "/"), h += e[vE[m]]);
                        h && (g.category = h)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return g
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && Vc(a[d]) && c.push(b(a[d]));
            return c.length ? c :
                void 0
        },
        xE = function(a) {
            return Ck(a)
        },
        yE = !1;
    var sE, qE = {},
        gE = {},
        zE = {},
        AE = Object.freeze((zE.page_hostname = 1, zE[P.g.X] = 1, zE[P.g.ub] = 1, zE[P.g.Na] = 1, zE[P.g.Ea] = 1, zE[P.g.Oa] = 1, zE[P.g.ic] = 1, zE[P.g.Tc] = 1, zE[P.g.La] = 1, zE[P.g.fb] = 1, zE[P.g.ia] = 1, zE[P.g.Pb] = 1, zE[P.g.Fa] = 1, zE[P.g.Ab] = 1, zE)),
        BE = {},
        bE = Object.freeze((BE.client_storage = "storage", BE.sample_rate = 1, BE.site_speed_sample_rate = 1, BE.store_gac = 1, BE.use_amp_client_id =
            1, BE[P.g.cb] = 1, BE[P.g.xa] = "storeGac", BE[P.g.Na] = 1, BE[P.g.Ea] = 1, BE[P.g.Oa] = 1, BE[P.g.ic] = 1, BE[P.g.Tc] = 1, BE[P.g.fb] = 1, BE)),
        CE = {},
        DE = Object.freeze((CE._cs = 1, CE._useUp = 1, CE.allowAnchor = 1, CE.allowLinker = 1, CE.alwaysSendReferrer = 1, CE.clientId = 1, CE.cookieDomain = 1, CE.cookieExpires = 1, CE.cookieFlags = 1, CE.cookieName = 1, CE.cookiePath = 1, CE.cookieUpdate = 1, CE.legacyCookieDomain = 1, CE.legacyHistoryImport = 1, CE.name = 1, CE.sampleRate = 1, CE.siteSpeedSampleRate = 1, CE.storage = 1, CE.storeGac = 1, CE.useAmpClientId = 1, CE._cd2l = 1, CE)),
        EE = Object.freeze({
            anonymize_ip: 1
        }),
        FE = {},
        cE = Object.freeze((FE.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, FE.app_id = 1, FE.app_installer_id = 1, FE.app_name = 1, FE.app_version = 1, FE.description = "exDescription", FE.fatal = "exFatal", FE.language = 1, FE.page_hostname = "hostname", FE.transport_type = "transport", FE[P.g.sa] = "currencyCode", FE[P.g.Gg] = 1, FE[P.g.ia] = "location", FE[P.g.Pb] = "page", FE[P.g.Fa] = "referrer", FE[P.g.Ab] =
            "title", FE[P.g.qf] = 1, FE[P.g.Aa] = 1, FE)),
        GE = {},
        HE = Object.freeze((GE.content_id = 1, GE.event_action = 1, GE.event_category = 1, GE.event_label = 1, GE.link_attribution = 1, GE.name = 1, GE[P.g.za] = 1, GE[P.g.Fg] = 1, GE[P.g.Qa] = 1, GE[P.g.da] = 1, GE)),
        IE = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        vE = Object.freeze(["item_category",
            "item_category2", "item_category3", "item_category4", "item_category5"
        ]),
        JE = {},
        oE = Object.freeze((JE.levels = 1, JE[P.g.Ea] = "duration", JE[P.g.ic] = 1, JE)),
        KE = {},
        LE = Object.freeze((KE.anonymize_ip = 1, KE.fatal = 1, KE.send_page_view = 1, KE.store_gac = 1, KE.use_amp_client_id = 1, KE[P.g.xa] = 1, KE[P.g.Gg] = 1, KE)),
        pE = function(a, b, c, d) {
            if (void 0 !== c)
                if (LE[b] && (c = Ra(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[dE(b)] = c;
                else if (k(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        dE = function(a) {
            return a &&
                k(a) ? a.replace(/(_[a-z])/g, function(b) {
                    return b[1].toUpperCase()
                }) : a
        },
        ME = {},
        rE = Object.freeze((ME.checkout_progress = 1, ME.select_content = 1, ME.set_checkout_option = 1, ME[P.g.Yb] = 1, ME[P.g.Zb] = 1, ME[P.g.Jb] = 1, ME[P.g.ac] = 1, ME[P.g.Za] = 1, ME[P.g.sb] = 1, ME[P.g.ab] = 1, ME[P.g.Ca] = 1, ME[P.g.bc] = 1, ME[P.g.Ia] = 1, ME)),
        NE = {},
        OE = Object.freeze((NE.checkout_progress = 1, NE.set_checkout_option = 1, NE[P.g.kg] = 1, NE[P.g.lg] = 1, NE[P.g.Yb] = 1, NE[P.g.Zb] = 1, NE[P.g.mg] = 1, NE[P.g.Jb] = 1, NE[P.g.Ca] = 1, NE[P.g.bc] = 1, NE[P.g.ng] = 1, NE)),
        PE = {},
        QE = Object.freeze((PE.generate_lead =
            1, PE.login = 1, PE.search = 1, PE.select_content = 1, PE.share = 1, PE.sign_up = 1, PE.view_search_results = 1, PE[P.g.ac] = 1, PE[P.g.Za] = 1, PE[P.g.sb] = 1, PE[P.g.ab] = 1, PE[P.g.Ia] = 1, PE)),
        RE = function(a) {
            var b = "general";
            OE[a] ? b = "ecommerce" : QE[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        SE = {},
        TE = Object.freeze((SE.view_search_results = 1, SE[P.g.Za] = 1, SE[P.g.ab] = 1, SE[P.g.Ia] = 1, SE)),
        lE = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        UE = function(a) {
            if (Ka(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e =
                            d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        hE = function(a, b, c) {
            var d = function(Q) {
                    return U(c, Q)
                },
                e = {},
                f = {},
                g = {},
                h = {},
                m = UE(d(P.g.Ji));
            !c.isGtmEvent && m && lE(f, "exp", m);
            g["&gtm"] = gm(!0);
            c.isGtmEvent || (g._no_slc = !0);
            Fk() && (h._cs = xE);
            var n = d(P.g.jc);
            if (!c.isGtmEvent && Vc(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && lE(f, p, q)
                    }
            for (var r = !c.isGtmEvent, t = lq(c), u = 0; u <
                t.length; ++u) {
                var v = t[u];
                if (c.isGtmEvent) {
                    var w = d(v);
                    IE.hasOwnProperty(v) ? e[v] = w : DE.hasOwnProperty(v) ? h[v] = w : g[v] = w
                } else {
                    var x = void 0;
                    x = v !== P.g.aa ? d(v) : mq(c, v);
                    if (HE.hasOwnProperty(v)) pE(HE[v], v, x, e);
                    else if (EE.hasOwnProperty(v)) pE(EE[v], v, x, g);
                    else if (cE.hasOwnProperty(v)) pE(cE[v], v, x, f);
                    else if (bE.hasOwnProperty(v)) pE(bE[v], v, x, h);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) pE(1, v, x, f);
                    else if (v === P.g.aa) {
                        if (!yE) {
                            var y = eb(x);
                            y && (f["&did"] = y)
                        }
                        var A = void 0,
                            B = void 0;
                        b === P.g.la ? A = eb(mq(c,
                            v), ".") : (A = eb(mq(c, v, 1), "."), B = eb(mq(c, v, 2), "."));
                        A && (f["&gdid"] = A);
                        B && (f["&edid"] = B)
                    } else v === P.g.La && 0 > t.indexOf(P.g.ic) && (h.cookieName = x + "_ga");
                    T(96) && AE[v] && (c.m.hasOwnProperty(v) || b === P.g.la && c.h.hasOwnProperty(v)) && (r = !1)
                }
            }
            T(96) && r && (f["&jsscut"] = "1");
            !1 !== d(P.g.Ze) && !1 !== d(P.g.ub) && tC() || (g.allowAdFeatures = !1);
            !1 !== d(P.g.X) && uC() || (g.allowAdPersonalizationSignals = !1);
            !c.isGtmEvent && d(P.g.kb) && (h._useUp = !0);
            if (c.isGtmEvent) {
                h.name = h.name || e.gtmTrackerName;
                var D = g.hitCallback;
                g.hitCallback = function() {
                    Ha(D) &&
                        D();
                    c.P()
                }
            } else {
                lE(h, "cookieDomain", "auto");
                lE(g, "forceSSL", !0);
                lE(e, "eventCategory", RE(b));
                TE[b] && lE(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? lE(e, "eventLabel", d(P.g.Fg)) : "search" === b || "view_search_results" === b ? lE(e, "eventLabel", d(P.g.Wi)) : "select_content" === b && lE(e, "eventLabel", d(P.g.Ei));
                var F = e[P.g.za] || {},
                    K = F[P.g.oc];
                K || 0 != K && F[P.g.T] ? h.allowLinker = !0 : !1 === K && lE(h, "useAmpClientId", !1);
                f.hitCallback = c.P;
                h.name = a
            }
            Fk() && (g["&gcs"] = el(), T(106) && (g["&gcd"] = il()), Ck(P.g.O) || (h.storage =
                "none"), Ck(P.g.F) || (g.allowAdFeatures = !1, h.storeGac = !1));
            T(109) && (Vk() && (g["&dma_cps"] = jl()), Ji() && (g["&dma"] = "1"));
            var H = $s(c) || d(P.g.Mb),
                N = d(P.g.Nd);
            H && (c.isGtmEvent || (h[P.g.Mb] = H), h._cd2l = !0);
            N && !c.isGtmEvent && (h[P.g.Nd] = N);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = h;
            return e
        },
        mE = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.lh = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.Fj = "impressions" === b.translateIfKeyEquals ?
                    wE(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Ie = "promoView" === b.translateIfKeyEquals ? wE(e) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Ie = "promoClick" === b.translateIfKeyEquals ? wE(f) : f;
                c.lb = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var h = b[g].products;
                    c.Dc = "products" === b.translateIfKeyEquals ? wE(h) :
                        h;
                    c.lb = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        nE = function(a, b) {
            function c(u) {
                return {
                    id: d(P.g.na),
                    affiliation: d(P.g.qg),
                    revenue: d(P.g.da),
                    tax: d(P.g.ef),
                    shipping: d(P.g.Vc),
                    coupon: d(P.g.rg),
                    list: d(P.g.df) || d(P.g.Uc) || u
                }
            }
            for (var d = function(u) {
                    return U(b, u)
                }, e = d(P.g.Z), f, g = 0; e && g < e.length && !(f = e[g][P.g.df] || e[g][P.g.Uc]); g++);
            var h = d(P.g.jc);
            if (Vc(h))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in h) h.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != h[p] && lE(n, p,
                        n[h[p]])
                }
            var q = null,
                r = d(P.g.Ii);
            if (a === P.g.Ca || a === P.g.bc) q = {
                action: a,
                lb: c(),
                Dc: wE(e)
            };
            else if (a === P.g.Yb) q = {
                action: "add",
                lb: c(),
                Dc: wE(e)
            };
            else if (a === P.g.Zb) q = {
                action: "remove",
                lb: c(),
                Dc: wE(e)
            };
            else if (a === P.g.Ia) q = {
                action: "detail",
                lb: c(f),
                Dc: wE(e)
            };
            else if (a === P.g.Za) q = {
                action: "impressions",
                Fj: wE(e)
            };
            else if (a === P.g.ab) q = {
                action: "promo_view",
                Ie: wE(r) || wE(e)
            };
            else if ("select_content" === a && r && 0 < r.length || a === P.g.sb) q = {
                action: "promo_click",
                Ie: wE(r) || wE(e)
            };
            else if ("select_content" === a || a === P.g.ac) q = {
                action: "click",
                lb: {
                    list: d(P.g.df) || d(P.g.Uc) || f
                },
                Dc: wE(e)
            };
            else if (a === P.g.Jb || "checkout_progress" === a) {
                var t = {
                    step: a === P.g.Jb ? 1 : d(P.g.cf),
                    option: d(P.g.Hd)
                };
                q = {
                    action: "checkout",
                    Dc: wE(e),
                    lb: J(c(), t)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                lb: {
                    step: d(P.g.cf),
                    option: d(P.g.Hd)
                }
            });
            q && (q.lh = d(P.g.sa));
            return q
        },
        VE = {},
        iE = function(a, b) {
            var c = VE[a];
            VE[a] = J(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var WE = kD;
    var XE = function(a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]))
    };

    function YE(a, b, c) {
        var d = this;
    }
    YE.H = "internal.gtagConfig";

    function ZE() {
        var a = {};
        return a
    };

    function aF(a, b) {}
    aF.K = "gtagSet";

    function bF(a, b) {}
    bF.K = "injectHiddenIframe";
    var cF = {};

    function eF(a, b, c, d) {}
    var fF = Object.freeze({
            dl: 1,
            id: 1
        }),
        gF = {};

    function hF(a, b, c, d) {}
    eF.K = "injectScript";
    hF.H = "internal.injectScript";

    function iF(a) {
        var b = !0;
        return b
    }
    iF.K = "isConsentGranted";
    var jF = function() {
        var a = Jg(function(b) {
            this.h.h.log("error", b)
        });
        a.K = "JSON";
        return a
    };
    var kF = function() {
            return !1
        },
        lF = {
            getItem: function(a) {
                var b = null;
                return b
            },
            setItem: function(a,
                b) {
                return !1
            },
            removeItem: function(a) {}
        };
    var mF = ["textContent", "value", "tagName", "children", "childElementCount"];

    function nF(a) {
        var b;
        return b
    }
    nF.H = "internal.locateUserData";

    function pF() {
        try {
            M(this, "logging")
        } catch (c) {
            return
        }
        if (!console) return;
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = Xc(a[b], this.h);
        console.log.apply(console, a);
    }
    pF.K = "logToConsole";

    function qF(a, b) {}
    qF.H = "internal.mergeRemoteConfig";

    function rF(a) {
        var b = void 0;
        return b
    }
    rF.K = "parseUrl";

    function sF(a) {}
    sF.H = "internal.processAsNewEvent";

    function tF(a, b) {
        var c = !1;
        return c
    }
    tF.K = "queryPermission";

    function uF() {
        var a = "";
        return a
    }
    uF.K = "readCharacterSet";

    function vF() {
        var a = "";
        return a
    }
    vF.K = "readTitle";

    function wF(a, b) {
        var c = this;
    }
    wF.H = "internal.registerCcdCallback";

    function xF(a) {
        return !0
    }
    xF.H = "internal.registerDestination";
    var yF = Object.freeze(["config", "event", "get", "set"]);

    function zF(a, b, c) {}
    zF.H = "internal.registerGtagCommandListener";

    function AF(a, b) {
        var c = !1;
        return c
    }
    AF.H = "internal.removeDataLayerEventListener";

    function BF(a, b) {}
    BF.H = "internal.removeFormData";

    function CF() {}
    CF.K = "resetDataLayer";

    function DF(a, b, c, d) {}
    DF.H = "internal.sendGtagEvent";

    function EF(a, b, c) {}
    EF.K = "sendPixel";

    function FF(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    FF.K = "setCookie";

    function GF(a, b) {}
    GF.K = "setCorePlatformServices";

    function HF(a) {}
    HF.K = "setDefaultConsentState";

    function IF(a, b) {}
    IF.H = "internal.setDelegatedConsentType";

    function JF(a, b, c) {
        return !1
    }
    JF.K = "setInWindow";

    function KF(a, b, c) {}
    KF.H = "internal.setProductSettingsParameter";

    function LF(a, b, c) {}
    LF.H = "internal.setRemoteConfigParameter";

    function MF(a, b, c, d) {
        var e = this;
    }
    MF.K = "sha256";

    function NF(a, b, c) {}
    NF.H = "internal.sortRemoteConfigParameters";
    var OF = {},
        PF = {};
    OF.K = "templateStorage";
    OF.getItem = function(a) {
        var b = null;
        return b
    };
    OF.setItem = function(a, b) {};
    OF.removeItem = function(a) {};
    OF.clear = function() {};

    function QF(a, b) {
        var c = !1;
        return c
    }
    QF.H = "internal.testRegex";
    var RF = function(a) {
        var b;
        return b
    };

    function SF(a) {}
    SF.K = "updateConsentState";
    var TF = function() {
        var a = function(c) {
                return Oy(c.H, c)
            },
            b = function(c) {
                return Ny(c.K, c)
            };
        b(Qy);
        b(Wy);
        b(Mz);
        b(Pz);
        b(Qz);
        b(Uz);
        b(Vz);
        b(Xz);
        b(jF());
        b(Yz);
        b(uB);
        b(BB);
        b(CB);
        b(DB);
        b(GB);
        b(aF);
        b(bF);
        b(eF);
        b(iF);
        b(pF);
        b(rF);
        b(tF);
        b(uF);
        b(vF);
        b(EF);
        b(FF);
        b(HF);
        b(JF);
        b(MF);
        b(OF);
        b(SF);
        Ny("Math", rg());
        Ny("Object", Rg);
        Ny("TestHelper", Vg());
        Ny("assertApi", ng);
        Ny("assertThat", og);
        Ny("decodeUri", sg);
        Ny("decodeUriComponent", wg);
        Ny("encodeUri", xg);
        Ny("encodeUriComponent", yg);
        Ny("fail", Eg);
        Ny("generateRandom", Fg);
        Ny("getContainerVersion",
            Gg);
        Ny("getTimestamp", Hg);
        Ny("getTimestampMillis", Hg);
        Ny("getType", Ig);
        Ny("makeInteger", Kg);
        Ny("makeNumber", Lg);
        Ny("makeString", Mg);
        Ny("makeTableMap", Ng);
        Ny("mock", Qg);
        Ny("fromBase64", tB, !("atob" in z));
        Ny("localStorage", lF, !kF());
        Ny("toBase64", RF, !("btoa" in z));
        a(Ty);
        a(mz);
        a(tz);
        a(yz);
        a(Kz);
        a(Nz);
        a(Sz);
        a(Wz);
        a(Zz);
        a(bA);
        a(mA);
        a(rA);
        a(wA);
        a(FA);
        a(JA);
        a(UA);
        a(gB);
        a(zg);
        a(iB);
        a(vB);
        a(wB);
        a(zB);
        a(AB);
        a(EB);
        a(FB);
        a(YE);
        a(hF);
        a(Az);
        a(nF);
        a(sF);
        a(wF);
        a(zF);
        a(AF);
        a(DF);
        a(IF);
        a(KF);
        a(LF);
        a(NF);
        a(QF);
        Oy("internal.GtagSchema",
            ZE());
        T(105) && b(GF);
        T(127) && a(az);
        T(128) && a(BF);
        T(136) && a(Bz);
        T(137) && a(qF);
        T(141) && a(xF);
        return Py()
    };
    var UF = function() {
            return !1
        },
        VF = function() {
            var a = {};
            return function(b, c, d) {}
        };
    var WF;

    function XF() {
        var a = WF;
        return function(b, c, d) {
            var e = d && d.event;
            YF(c);
            var f = new lb;
            l(c, function(q, r) {
                var t = Wc(r);
                void 0 === t && void 0 !== r && O(44);
                f.set(q, t)
            });
            a.h.h.C = jf();
            var g = {
                uj: wf(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                Gf: void 0 !== e ? function(q) {
                    return e.Vb.Gf(q)
                } : void 0,
                jd: function() {
                    return b
                },
                log: function() {},
                Xk: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                },
                hm: !!Kt(b, 3)
            };
            if (UF()) {
                var h = VF(),
                    m = void 0,
                    n = void 0;
                g.Ya = {
                    Xh: [],
                    qe: {},
                    nb: function(q, r, t) {
                        1 === r && (m =
                            q);
                        7 === r && (n = t);
                        h(q, r, t)
                    },
                    Hh: Og()
                };
                g.log = function(q, r) {
                    if (m) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        h(m, 4, {
                            level: q,
                            source: n,
                            message: t
                        })
                    }
                }
            }
            var p = ne(a, g, [b, f]);
            a.h.h.C = void 0;
            p instanceof ua && "return" === p.h && (p = p.m);
            return Xc(p)
        }
    }

    function YF(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ha(b) && (a.gtmOnSuccess = function() {
            I(b)
        });
        Ha(c) && (a.gtmOnFailure = function() {
            I(c)
        })
    }

    function ZF() {
        WF.h.h.J = function(a, b, c) {
            Mh.SANDBOXED_JS_SEMAPHORE = Mh.SANDBOXED_JS_SEMAPHORE || 0;
            Mh.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                Mh.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function $F(a) {
        void 0 !== a && l(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                di[e] = di[e] || [];
                di[e].push(b)
            }
        })
    };
    var aG = encodeURI,
        Y = encodeURIComponent,
        bG = function(a, b, c) {
            tc(a, b, c)
        },
        cG = function(a, b) {
            if (!a) return !1;
            var c = fj(hj(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        fG = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        o: {}
    };

    Z.o.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.s = "jsm";
                Z.__jsm.isVendorTemplate = !0;
                Z.__jsm.priorityOverride = 0;
                Z.__jsm.isInfrastructure = !1
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = X("google_tag_manager");
                        var d = c && c.e && c.e(b);
                        jy(d, "jsm", a.vtp_gtmEventId);
                        return d
                    } catch (e) {}
                }
            })
        }();
    Z.o.c = ["google"],
        function() {
            (function(a) {
                Z.__c = a;
                Z.__c.s = "c";
                Z.__c.isVendorTemplate = !0;
                Z.__c.priorityOverride = 0;
                Z.__c.isInfrastructure = !1
            })(function(a) {
                jy(a.vtp_value, "c", a.vtp_gtmEventId);
                return a.vtp_value
            })
        }();
    Z.o.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.s = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.o.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.s = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0;
                Z.__f.isInfrastructure = !1
            })(function(a) {
                var b = by("gtm.referrer", 1) || G.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? fj(hj(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : ay(String(b)) : String(b)
            })
        }();
    Z.o.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = xx(c, "gtm.click");
                    cy(d)
                }
            }(function(b) {
                Z.__cl = b;
                Z.__cl.s = "cl";
                Z.__cl.isVendorTemplate = !0;
                Z.__cl.priorityOverride = 0;
                Z.__cl.isInfrastructure = !1
            })(function(b) {
                if (!hy("cl")) {
                    var c = X("document");
                    uc(c, "click", a, !0);
                    iy("cl")
                }
                I(b.vtp_gtmOnSuccess)
            })
        }();
    Z.o.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Z.__access_globals = b;
                Z.__access_globals.s = "access_globals";
                Z.__access_globals.isVendorTemplate = !0;
                Z.__access_globals.priorityOverride = 0;
                Z.__access_globals.isInfrastructure = !1
            })(function(b) {
                for (var c =
                        b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], h = 0; h < c.length; h++) {
                    var m = c[h],
                        n = m.key;
                    m.read && e.push(n);
                    m.write && f.push(n);
                    m.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!k(r)) throw d(p, {}, "Key must be a string.");
                        if ("read" === q) {
                            if (-1 < e.indexOf(r)) return
                        } else if ("write" === q) {
                            if (-1 < f.indexOf(r)) return
                        } else if ("readwrite" === q) {
                            if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return
                        } else if ("execute" === q) {
                            if (-1 < g.indexOf(r)) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " +
                            q);
                        throw d(p, {}, "Prohibited " + q + " on global variable: " + r + ".");
                    },
                    M: a
                }
            })
        }();
    Z.o.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.s = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : by("gtm.url", 1)) || Zx();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return ay(String(c));
                var e = hj(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        h = b[a("vtp_queryKey").toString()] || "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? Ka(h) ? n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) {
                        var q = fj(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = fj(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Z.o.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.s = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0;
                Z.__v.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = by(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                jy(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();


    Z.o.cid = ["google"],
        function() {
            (function(a) {
                Z.__cid = a;
                Z.__cid.s = "cid";
                Z.__cid.isVendorTemplate = !0;
                Z.__cid.priorityOverride = 0;
                Z.__cid.isInfrastructure = !1
            })(function() {
                return Vl()
            })
        }();
    Z.o.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Z.__gclidw = b;
                Z.__gclidw.s = "gclidw";
                Z.__gclidw.isVendorTemplate = !0;
                Z.__gclidw.priorityOverride = 100;
                Z.__gclidw.isInfrastructure = !1
            })(function(b) {
                I(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, f = b.vtp_cookieFlags);
                var g = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                !b.vtp_enableCrossDomainFeature || b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || !b.vtp_enableCrossDomain &&
                    !Bo() || (ip(a, g), T(73) && Oo(g));
                fp(g);
                lp(["aw", "dc"], g);
                hq(g);
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var h = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    kp(a, h, b.vtp_urlPosition, !!b.vtp_formDecoration, g.prefix);
                    T(73) && (Po(Go(g.prefix), h, b.vtp_urlPosition, !!b.vtp_formDecoration, g), Po("FPAU", h, b.vtp_urlPosition, !!b.vtp_formDecoration, g))
                }
                var m = by(P.g.ma);
                vp({
                    eventId: b.vtp_gtmEventId,
                    priorityId: b.vtp_gtmPriorityId,
                    Kf: !1,
                    Je: void 0 != m && !1 !== m,
                    xc: g,
                    Ce: !0
                });
                b.vtp_enableUrlPassthrough && np(["aw", "dc", "gb"])
            })
        }();

    Z.o.aev = ["google"],
        function() {
            function a(r, t, u, v, w) {
                w || (w = "element");
                var x = t + "." + u,
                    y;
                if (n.hasOwnProperty(x)) y = n[x];
                else {
                    var A = r[w];
                    if (A && (y = v(A), n[x] = y, p.push(x), 35 < p.length)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return y
            }

            function b(r, t, u) {
                var v = r[q[t]];
                return void 0 !== v ? v : u
            }

            function c(r, t) {
                if (!r) return !1;
                var u = d(Zx());
                Ka(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var v = [u], w = 0; w < t.length; w++) {
                    var x = t[w];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x = new RegExp(x.domain)
                        } catch (B) {
                            continue
                        } else x =
                            x.domain;
                    var y = d(r);
                    if (x instanceof RegExp) {
                        if (x.test(y)) return !1
                    } else {
                        var A = x;
                        if (0 != A.length) {
                            if (0 <= y.indexOf(A)) return !1;
                            v.push(d(A))
                        }
                    }
                }
                return !cG(r, v)
            }

            function d(r) {
                m.test(r) || (r = "http://" + r);
                return fj(hj(r), "HOST", !0)
            }

            function e(r, t, u, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(t, u, "FORM." + r, g);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return h(t, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return h(t, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return h(t,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var x = t.interactedFormFieldPosition;
                        return void 0 === x ? v : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = t.interactSequenceNumber;
                        return void 0 === y ? v : y;
                    default:
                        return v
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return wc(r, "value");
                    case "button":
                        return xc(r);
                    default:
                        return null
                }
            }

            function g(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var t = 0, u = 0; u < r.elements.length; u++) Fx(r.elements[u]) && t++;
                    return t
                }
            }

            function h(r, t, u) {
                var v = r.interactedFormField;
                return v && wc(v, t) || u
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Z.__aev = r;
                Z.__aev.s = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0;
                Z.__aev.isInfrastructure = !1
            })(function(r) {
                var t =
                    r.vtp_gtmEventId,
                    u = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    w = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var x = w.element;
                        return x && x.tagName || u;
                    case "TEXT":
                        return a(w, t, v, xc) || u;
                    case "URL":
                        var y;
                        a: {
                            var A = String(w.elementUrl || u || ""),
                                B = hj(A),
                                D = String(r.vtp_component || "URL");
                            switch (D) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = c(A, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = fj(B, D, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var F;
                        if (void 0 === r.vtp_attribute) F = b(w,
                            v, u);
                        else {
                            var K = w.element;
                            F = K && wc(K, r.vtp_attribute) || u || ""
                        }
                        return F;
                    case "MD":
                        var H = r.vtp_mdValue,
                            N = a(w, t, "MD", Rx);
                        return H && N ? Ux(N, H) || u : N || u;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
                    default:
                        var Q = b(w, v, u);
                        jy(Q, "aev", r.vtp_gtmEventId);
                        return Q
                }
            })
        }();
    Z.o.read_data_layer = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Z.__read_data_layer = b;
                Z.__read_data_layer.s = "read_data_layer";
                Z.__read_data_layer.isVendorTemplate = !0;
                Z.__read_data_layer.priorityOverride = 0;
                Z.__read_data_layer.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_keyPatterns || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!k(f)) throw d(e, {}, "Keys must be strings.");
                        try {
                            if (Of(f, c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid key filter.");
                        }
                        throw d(e, {}, "Prohibited read from data layer variable: " +
                            f + ".");
                    },
                    M: a
                }
            })
        }();
    Z.o.paused = [],
        function() {
            (function(a) {
                Z.__paused = a;
                Z.__paused.s = "paused";
                Z.__paused.isVendorTemplate = !0;
                Z.__paused.priorityOverride = 0;
                Z.__paused.isInfrastructure = !1
            })(function(a) {
                I(a.vtp_gtmOnFailure)
            })
        }();


    Z.o.lcl = [],
        function() {
            function a() {
                var c = X("document"),
                    d = 0,
                    e = function(f) {
                        var g = f.target;
                        if (g && 3 !== f.which && !(f.wh || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            g = zc(g, ["a", "area"], 100);
                            if (!g) return f.returnValue;
                            var h = f.defaultPrevented || !1 === f.returnValue,
                                m = Bx("lcl", h ? "nv.mwt" : "mwt", 0),
                                n;
                            n = h ? Bx("lcl", "nv.ids", []) : Bx("lcl", "ids", []);
                            if (n.length) {
                                var p = xx(g, "gtm.linkClick", n);
                                if (b(f, g, c) && !h && m && g.href) {
                                    var q = !!La(String(Bc(g, "rel") || "").split(" "), function(v) {
                                            return "noreferrer" === v.toLowerCase()
                                        }),
                                        r = X((Bc(g, "target") || "_self").substring(1)),
                                        t = !0,
                                        u = Pw(function() {
                                            var v;
                                            if (v = t && r) {
                                                var w;
                                                a: if (q) {
                                                    var x;
                                                    try {
                                                        x = new MouseEvent(f.type, {
                                                            bubbles: !0
                                                        })
                                                    } catch (y) {
                                                        if (!c.createEvent) {
                                                            w = !1;
                                                            break a
                                                        }
                                                        x = c.createEvent("MouseEvents");
                                                        x.initEvent(f.type, !0, !0)
                                                    }
                                                    x.wh = !0;
                                                    f.target.dispatchEvent(x);
                                                    w = !0
                                                } else w = !1;
                                                v = !w
                                            }
                                            v && (r.location.href = Bc(g, "href"))
                                        }, m);
                                    if (cy(p, u, m)) t = !1;
                                    else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                                } else cy(p, function() {}, m || 2E3);
                                return !0
                            }
                        }
                    };
                uc(c, "click", e, !1);
                uc(c, "auxclick", e, !1)
            }

            function b(c, d, e) {
                if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
                var f = Bc(d, "href"),
                    g = f.indexOf("#"),
                    h = Bc(d, "target");
                if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g) return !1;
                if (0 < g) {
                    var m = ay(f),
                        n = ay(e.location);
                    return m !== n
                }
                return !0
            }(function(c) {
                Z.__lcl = c;
                Z.__lcl.s = "lcl";
                Z.__lcl.isVendorTemplate = !0;
                Z.__lcl.priorityOverride = 0;
                Z.__lcl.isInfrastructure = !1
            })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                    f = Number(c.vtp_waitForTagsTimeout);
                if (!f || 0 >= f) f = 2E3;
                var g = c.vtp_uniqueTriggerId || "0";
                if (d) {
                    var h = function(n) {
                        return Math.max(f, n)
                    };
                    Ax("lcl", "mwt", h, 0);
                    e || Ax("lcl", "nv.mwt", h, 0)
                }
                var m = function(n) {
                    n.push(g);
                    return n
                };
                Ax("lcl", "ids", m, []);
                e || Ax("lcl", "nv.ids", m, []);
                hy("lcl") || (a(), iy("lcl"));
                I(c.vtp_gtmOnSuccess)
            })
        }();

    Z.o.gaawc = ["google"],
        function() {
            (function(a) {
                Z.__gaawc = a;
                Z.__gaawc.s = "gaawc";
                Z.__gaawc.isVendorTemplate = !0;
                Z.__gaawc.priorityOverride = 10;
                Z.__gaawc.isInfrastructure = !1
            })(function(a) {
                var b = String(a.vtp_measurementId);
                if (!k(b) || 0 >= b.indexOf("-")) I(a.vtp_gtmOnFailure);
                else {
                    var c = fG(a.vtp_fieldsToSet, "name", "value") || {};
                    if (c.hasOwnProperty(P.g.Ra) || a.vtp_userProperties) {
                        var d = c[P.g.Ra] || {};
                        J(fG(a.vtp_userProperties, "name", "value"), d);
                        c[P.g.Ra] = d
                    }
                    a.vtp_enableSendToServerContainer && a.vtp_serverContainerUrl &&
                        (c[P.g.sc] = a.vtp_serverContainerUrl, c[P.g.Md] = !0);
                    var e = a.vtp_userDataVariable;
                    e && (c[P.g.oa] = e);
                    XE(c, Dh, function(f) {
                        return Ra(f)
                    });
                    XE(c, Fh, function(f) {
                        return Number(f)
                    });
                    c.send_page_view = a.vtp_sendPageView;
                    hv(dv(b, c), a.vtp_gtmEventId, {
                        noTargetGroup: !0,
                        originatingEntity: Jt(1, a.vtp_gtmEntityIndex, a.vtp_gtmEntityName)
                    });
                    I(a.vtp_gtmOnSuccess)
                }
            })
        }();
    Z.o.gaawe = ["google"],
        function() {
            function a(f, g, h) {
                for (var m = 0; m < g.length; m++) f.hasOwnProperty(g[m]) && (f[g[m]] = h(f[g[m]]))
            }

            function b(f, g, h) {
                var m = {},
                    n = function(u, v) {
                        m[u] = m[u] || v
                    },
                    p = function(u, v, w) {
                        w = void 0 === w ? !1 : w;
                        c.push(6);
                        if (u) {
                            m.items = m.items || [];
                            for (var x = {}, y = 0; y < u.length; x = {
                                    Hc: x.Hc
                                }, y++) x.Hc = {}, l(u[y], function(B) {
                                return function(D, F) {
                                    w && "id" === D ? B.Hc.promotion_id = F : w && "name" === D ? B.Hc.promotion_name = F : B.Hc[D] = F
                                }
                            }(x)), m.items.push(x.Hc)
                        }
                        if (v)
                            for (var A in v) d.hasOwnProperty(A) ? n(d[A], v[A]) : n(A,
                                v[A])
                    },
                    q;
                "dataLayer" === f.vtp_getEcommerceDataFrom ? (q = f.vtp_gtmCachedValues.eventModel) || (q = f.vtp_gtmCachedValues.ecommerce) : (q = f.vtp_ecommerceMacroData, Vc(q) && q.ecommerce && !q.items && (q = q.ecommerce));
                if (Vc(q)) {
                    var r = !1,
                        t;
                    for (t in q) q.hasOwnProperty(t) && (r || (c.push(5), r = !0), "currencyCode" === t ? n("currency", q.currencyCode) : "impressions" === t && g === P.g.Za ? p(q.impressions, null) : "promoClick" === t && g === P.g.sb ? p(q.promoClick.promotions, q.promoClick.actionField, !0) : "promoView" === t && g === P.g.ab ? p(q.promoView.promotions,
                        q.promoView.actionField, !0) : e.hasOwnProperty(t) ? g === e[t] && p(q[t].products, q[t].actionField) : m[t] = q[t]);
                    J(m, h)
                }
            }
            var c = [],
                d = {
                    id: "transaction_id",
                    revenue: "value",
                    list: "item_list_name"
                },
                e = {
                    click: "select_item",
                    detail: "view_item",
                    add: "add_to_cart",
                    remove: "remove_from_cart",
                    checkout: "begin_checkout",
                    checkout_option: "checkout_option",
                    purchase: "purchase",
                    refund: "refund"
                };
            (function(f) {
                Z.__gaawe = f;
                Z.__gaawe.s = "gaawe";
                Z.__gaawe.isVendorTemplate = !0;
                Z.__gaawe.priorityOverride = 0;
                Z.__gaawe.isInfrastructure = !1
            })(function(f) {
                var g;
                g = f.vtp_migratedToV2 ? String(f.vtp_measurementIdOverride) : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
                if (k(g) && 0 === g.indexOf("G-")) {
                    var h = String(f.vtp_eventName),
                        m = {};
                    c = [];
                    f.vtp_sendEcommerceData && (Ch.hasOwnProperty(h) || "checkout_option" === h) && b(f, h, m);
                    var n = f.vtp_eventSettingsVariable;
                    if (n)
                        for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
                    if (f.vtp_eventSettingsTable) {
                        var q = fG(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
                            r;
                        for (r in q) m[r] = q[r]
                    }
                    var t = fG(f.vtp_eventParameters, "name",
                            "value"),
                        u;
                    for (u in t) t.hasOwnProperty(u) && (m[u] = t[u]);
                    var v = f.vtp_userDataVariable;
                    v && (m[P.g.oa] = v);
                    if (m.hasOwnProperty(P.g.Ra) || f.vtp_userProperties) {
                        var w = m[P.g.Ra] || {};
                        J(fG(f.vtp_userProperties, "name", "value"), w);
                        m[P.g.Ra] = w
                    }
                    var x = {
                        originatingEntity: Jt(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName)
                    };
                    if (0 < c.length) {
                        var y = {};
                        x.eventMetadata = (y.event_usage = c, y)
                    }
                    a(m, Dh, function(B) {
                        return Ra(B)
                    });
                    a(m, Fh, function(B) {
                        return Number(B)
                    });
                    var A = f.vtp_gtmEventId;
                    x.noGtmEvent = !0;
                    hv(ev(g, h, m), A, x);
                    I(f.vtp_gtmOnSuccess)
                } else I(f.vtp_gtmOnFailure)
            })
        }();

    Z.o.ctv = ["google"],
        function() {
            (function(a) {
                Z.__ctv = a;
                Z.__ctv.s = "ctv";
                Z.__ctv.isVendorTemplate = !0;
                Z.__ctv.priorityOverride = 0;
                Z.__ctv.isInfrastructure = !1
            })(function() {
                return "277"
            })
        }();




    Z.o.sp = ["google"],
        function() {
            (function(a) {
                Z.__sp = a;
                Z.__sp.s = "sp";
                Z.__sp.isVendorTemplate = !0;
                Z.__sp.priorityOverride = 0;
                Z.__sp.isInfrastructure = !1
            })(function(a) {
                var b, c = {};
                "DATA_LAYER" == a.vtp_customParamsFormat ? c = a.vtp_dataLayerVariable : "USER_SPECIFIED" == a.vtp_customParamsFormat && (c = fG(a.vtp_customParams, "key", "value"));
                b = Vc(c) ? c : {};
                b[P.g.af] = !0;
                var d = !a.hasOwnProperty("vtp_enableConversionLinker") || !!a.vtp_enableConversionLinker;
                b[P.g.Ka] = a.vtp_conversionCookiePrefix;
                b[P.g.xa] = d;
                a.vtp_enableDynamicRemarketing &&
                    (a.vtp_eventValue && (b[P.g.da] = a.vtp_eventValue), a.vtp_eventItems && (b[P.g.Z] = a.vtp_eventItems));
                a.vtp_rdp && (b[P.g.Qb] = !0);
                a.vtp_userId && (b[P.g.Aa] = a.vtp_userId);
                b[P.g.Da] = by(P.g.Da), b[P.g.X] = by(P.g.X), b[P.g.Kb] = by(P.g.Kb), b[P.g.Qa] = by(P.g.Qa);
                var e = zq(yq(xq(wq(pq(new oq(a.vtp_gtmEventId, a.vtp_gtmPriorityId), b), a.vtp_gtmOnSuccess), a.vtp_gtmOnFailure), !0)),
                    f = "AW-" + a.vtp_conversionId;
                a.vtp_conversionLabel && (f += "/" + a.vtp_conversionLabel);
                e.eventMetadata.hit_type_override = "remarketing";
                qD(f, a.vtp_eventName || "", Date.now(), e)
            })
        }();

    Z.o.tl = ["google"],
        function() {
            function a(b) {
                return function() {
                    if (b.Eh && b.Jh >= b.Eh) b.uh && X("self").clearInterval(b.uh);
                    else {
                        b.Jh++;
                        var c = Yx().getTime();
                        cy({
                            event: b.eventName,
                            "gtm.timerId": b.uh,
                            "gtm.timerEventNumber": b.Jh,
                            "gtm.timerInterval": b.interval,
                            "gtm.timerLimit": b.Eh,
                            "gtm.timerStartTime": b.Qj,
                            "gtm.timerCurrentTime": c,
                            "gtm.timerElapsedTime": c - b.Qj,
                            "gtm.triggers": b.Cm
                        })
                    }
                }
            }(function(b) {
                Z.__tl = b;
                Z.__tl.s = "tl";
                Z.__tl.isVendorTemplate = !0;
                Z.__tl.priorityOverride = 0;
                Z.__tl.isInfrastructure = !1
            })(function(b) {
                I(b.vtp_gtmOnSuccess);
                if (!isNaN(b.vtp_interval)) {
                    var c = {
                        eventName: b.vtp_eventName,
                        Jh: 0,
                        interval: Number(b.vtp_interval),
                        Eh: isNaN(b.vtp_limit) ? 0 : Number(b.vtp_limit),
                        Cm: String(b.vtp_uniqueTriggerId || "0"),
                        Qj: Yx().getTime()
                    };
                    c.uh = X("self").setInterval(a(c), 0 > Number(b.vtp_interval) ? 0 : Number(b.vtp_interval))
                }
            })
        }();

    Z.o.ua = ["google"],
        function() {
            function a(m, n) {
                for (var p in m)
                    if (!h[p] && m.hasOwnProperty(p)) {
                        var q = g[p] ? Ra(m[p]) : m[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(m) {
                var n = {};
                m.vtp_gaSettings && J(fG(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                J(fG(m.vtp_fieldsToSet, "fieldName", "value"), n);
                Ra(n.urlPassthrough) && (n._useUp = !0);
                m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
                return n
            }

            function c(m, n) {
                return void 0 === n ? n : m(n)
            }

            function d(m, n, p) {
                var q =
                    function(N, Q, ca) {
                        for (var aa in N)
                            if (r.hasOwnProperty(aa)) {
                                var W = ca[Q] || {};
                                W.actionField = W.actionField || {};
                                W.actionField[r[aa]] = N[aa];
                                ca[Q] = W
                            }
                    },
                    r = {
                        transaction_id: "id",
                        affiliation: "affiliation",
                        value: "revenue",
                        tax: "tax",
                        shipping: "shipping",
                        coupon: "coupon",
                        item_list_name: "list"
                    },
                    t = {},
                    u = (t[P.g.ac] = "click", t[P.g.Ia] = "detail", t[P.g.Yb] = "add", t[P.g.Zb] = "remove", t[P.g.Jb] = "checkout", t[P.g.Ca] = "purchase", t[P.g.bc] = "refund", t),
                    v;
                if (m.vtp_useEcommerceDataLayer) {
                    var w = !1;
                    m.vtp_useGA4SchemaForEcommerce && (v = m.vtp_gtmCachedValues.eventModel,
                        w = !!v);
                    w || (v = by("ecommerce", 1))
                } else m.vtp_ecommerceMacroData && (v = m.vtp_ecommerceMacroData.ecommerce, !v && m.vtp_useGA4SchemaForEcommerce && (v = m.vtp_ecommerceMacroData));
                if (!Vc(v)) return;
                v = Object(v);
                var x = {},
                    y = v.currencyCode;
                m.vtp_useGA4SchemaForEcommerce && (y = y || v.currency);
                var A = Wa(n, "currencyCode", y);
                A && (x.currencyCode = A);
                v.impressions &&
                    (x.impressions = v.impressions);
                v.promoView && (x.promoView = v.promoView);
                if (m.vtp_useGA4SchemaForEcommerce) {
                    if (p === P.g.Za && !v.impressions) v.items && (x.impressions = v.items, x.translateIfKeyEquals = "impressions");
                    else if (p === P.g.ab && !v.promoView) v.promoView = {}, v.items && (x.promoView = {}, x.promoView.promotions = v.items, x.translateIfKeyEquals = "promoView");
                    else if (p === P.g.sb && !v.promoClick) v.promoClick = {}, v.items && (x.promoClick = {}, x.promoClick.promotions = v.items, x.translateIfKeyEquals = "promoClick", q(v, "promoClick",
                        x));
                    else if (u.hasOwnProperty(p)) {
                        var B = u[p];
                        !v[B] && v.items && (x[B] = {}, x[B].products = v.items, x.translateIfKeyEquals = "products", q(v, B, x))
                    }
                    var D = x.translateIfKeyEquals;
                    if ("promoClick" === D || "products" === D) return x
                }
                if (v.promoClick) return x.promoClick = v.promoClick, x;
                for (var F = "detail checkout checkout_option click add remove purchase refund".split(" "), K = 0; K < F.length; K++) {
                    var H = v[F[K]];
                    if (H) return x[F[K]] = H, x
                }
                m.vtp_useGA4SchemaForEcommerce && u.hasOwnProperty(p) && q(v, u[p], x);
                return x;
            }

            function e(m, n) {
                if (!f) {
                    var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = m.vtp_gtmOnFailure,
                        r = Uh || Wh ? Ys(n._x_19, "/analytics.js") : void 0,
                        t = Bp("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    V("analytics.js" === p && r ? r : t, function() {
                        var u = Ut();
                        u && u.loaded || q();
                    }, q)
                }
            }
            var f, g = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                h = {
                    urlPassthrough: !0
                };
            (function(m) {
                Z.__ua = m;
                Z.__ua.s = "ua";
                Z.__ua.isVendorTemplate = !0;
                Z.__ua.priorityOverride = 0;
                Z.__ua.isInfrastructure = !1
            })(function(m) {
                function n() {
                    if (m.vtp_doubleClick || "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    r = {};
                if (m.vtp_gaSettings) {
                    var t = m.vtp_gaSettings;
                    J(fG(t.vtp_contentGroup, "index", "group"), p);
                    J(fG(t.vtp_dimension, "index", "dimension"), q);
                    J(fG(t.vtp_metric, "index", "metric"), r);
                    var u = J(t);
                    u.vtp_fieldsToSet = void 0;
                    u.vtp_contentGroup = void 0;
                    u.vtp_dimension = void 0;
                    u.vtp_metric = void 0;
                    m = J(m, u)
                }
                J(fG(m.vtp_contentGroup, "index", "group"), p);
                J(fG(m.vtp_dimension, "index", "dimension"), q);
                J(fG(m.vtp_metric, "index", "metric"), r);
                var v = b(m),
                    w = String(m.vtp_trackingId || ""),
                    x = "",
                    y = "",
                    A = "";
                m.vtp_setTrackerName &&
                    "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && (A = m.vtp_trackerName, y = A + ".") : (A = "gtm" + fi(), y = A + ".");
                var B = function(ha, fa) {
                    for (var Ea in fa) fa.hasOwnProperty(Ea) && (v[ha + Ea] = fa[Ea])
                };
                B("contentGroup", p);
                B("dimension", q);
                B("metric", r);
                m.vtp_enableEcommerce && (x = m.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(m, v, x));
                if ("TRACK_EVENT" === m.vtp_trackType) x = "track_event", n(), v.eventCategory = String(m.vtp_eventCategory), v.eventAction = String(m.vtp_eventAction), v.eventLabel = c(String, m.vtp_eventLabel),
                    v.value = c(Qa, m.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
                    if (x = P.g.fc, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains) {
                        var D = {};
                        D[P.g.T] = m.vtp_autoLinkDomains;
                        D.use_anchor = m.vtp_useHashAutoLink;
                        D[P.g.zb] = m.vtp_decorateFormsAutoLink;
                        v[P.g.za] = D
                    }
                } else "TRACK_SOCIAL" === m.vtp_trackType ? (x = "track_social", v.socialNetwork = String(m.vtp_socialNetwork), v.socialAction = String(m.vtp_socialAction), v.socialTarget = String(m.vtp_socialActionTarget)) :
                    "TRACK_TIMING" == m.vtp_trackType && (x = "timing_complete", v.eventCategory = String(m.vtp_timingCategory), v.timingVar = String(m.vtp_timingVar), v.value = Qa(m.vtp_timingValue), v.eventLabel = c(String, m.vtp_timingLabel));
                m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                m.vtp_enableLinkId && (v.enableLinkId = !0);
                var F = {};
                a(v, F);
                v.name || (F.gtmTrackerName = A);
                F.gaFunctionName = m.vtp_functionName;
                void 0 !== m.vtp_nonInteraction && (F.nonInteraction = m.vtp_nonInteraction);
                var K = zq(yq(xq(wq(pq(new oq(m.vtp_gtmEventId, m.vtp_gtmPriorityId),
                    F), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure), !0));
                uE(w, x, Date.now(), K);
                var H = Wt(m.vtp_functionName);
                if (Ha(H)) {
                    var N = function(ha) {
                        var fa = [].slice.call(arguments, 0);
                        fa[0] = y + fa[0];
                        H.apply(window, fa)
                    };
                    if ("TRACK_TRANSACTION" == m.vtp_trackType) {
                        N("require", "ecommerce", "//www.google-analytics.com/plugins/ua/ecommerce.js");
                        var Q = function(ha) {
                                return by("transaction" + ha, 1)
                            },
                            ca = Q("Id");
                        N("ecommerce:addTransaction", {
                            id: ca,
                            affiliation: Q("Affiliation"),
                            revenue: Q("Total"),
                            shipping: Q("Shipping"),
                            tax: Q("Tax")
                        });
                        for (var aa = Q("Products") || [], W = 0; W < aa.length; W++) {
                            var S = aa[W];
                            N("ecommerce:addItem", {
                                id: ca,
                                sku: S.sku,
                                name: S.name,
                                category: S.category,
                                price: S.price,
                                quantity: S.quantity
                            })
                        }
                        N("ecommerce:send");
                    } else if ("DECORATE_LINK" == m.vtp_trackType) {} else if ("DECORATE_FORM" == m.vtp_trackType) {} else if ("TRACK_DATA" == m.vtp_trackType) {}
                    e(m, v)
                } else I(m.vtp_gtmOnFailure)
            })
        }();
    Z.o.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.s = "gas";
                Z.__gas.isVendorTemplate = !0;
                Z.__gas.priorityOverride = 0;
                Z.__gas.isInfrastructure = !1
            })(function(a) {
                var b = J(a),
                    c = b;
                c[re.Sb] = null;
                c[re.Zg] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();
    Z.o.awct = ["google"],
        function() {
            function a(c, d, e) {
                return function(f, g, h) {
                    d[f] = "DATA_LAYER" === e ? by(h) : c[g]
                }
            }

            function b(c) {
                if (c.vtp_enableEnhancedConversion) {
                    var d = c.vtp_cssProvidedEnhancedConversionValue || c.vtp_enhancedConversionObject;
                    if (d) return {
                        enhanced_conversions_mode: "manual",
                        enhanced_conversions_manual_var: d
                    }
                }
            }(function(c) {
                Z.__awct = c;
                Z.__awct.s = "awct";
                Z.__awct.isVendorTemplate = !0;
                Z.__awct.priorityOverride = 0;
                Z.__awct.isInfrastructure = !1
            })(function(c) {
                var d = !c.hasOwnProperty("vtp_enableConversionLinker") ||
                    !!c.vtp_enableConversionLinker,
                    e = !!c.vtp_enableEnhancedConversions || !!c.vtp_enableEnhancedConversion,
                    f = fG(c.vtp_customVariables, "varName", "value") || {},
                    g = {},
                    h = (g[P.g.da] = c.vtp_conversionValue || 0, g[P.g.sa] = c.vtp_currencyCode, g[P.g.na] = c.vtp_orderId, g[P.g.Ka] = c.vtp_conversionCookiePrefix, g[P.g.xa] = d, g[P.g.Bd] = e, g[P.g.ma] = by(P.g.ma), g[P.g.aa] = by("developer_id"), g);
                h[P.g.Da] = by(P.g.Da), h[P.g.X] = by(P.g.X), h[P.g.Kb] = by(P.g.Kb), h[P.g.Qa] = by(P.g.Qa);
                c.vtp_rdp && (h[P.g.Qb] = !0);
                if (c.vtp_enableCustomParams)
                    for (var m in f) Kh.hasOwnProperty(m) || (h[m] = f[m]);
                if (c.vtp_enableProductReporting) {
                    var n = a(c, h, c.vtp_productReportingDataSource);
                    n(P.g.Fd, "vtp_awMerchantId", "aw_merchant_id");
                    n(P.g.Dd, "vtp_awFeedCountry", "aw_feed_country");
                    n(P.g.Ed, "vtp_awFeedLanguage", "aw_feed_language");
                    n(P.g.Cd, "vtp_discount", "discount");
                    n(P.g.Z, "vtp_items", "items")
                }
                c.vtp_enableShippingData && (h[P.g.bd] = c.vtp_deliveryPostalCode, h[P.g.Jd] = c.vtp_estimatedDeliveryDate, h[P.g.vb] =
                    c.vtp_deliveryCountry, h[P.g.Vc] = c.vtp_shippingFee);
                c.vtp_transportUrl && (h[P.g.sc] = c.vtp_transportUrl);
                if (c.vtp_enableNewCustomerReporting) {
                    var p = a(c, h, c.vtp_newCustomerReportingDataSource);
                    p(P.g.Yc, "vtp_awNewCustomer", "new_customer");
                    p(P.g.Gd, "vtp_awCustomerLTV", "customer_lifetime_value")
                }
                var q = b(c);
                if (q) {
                    var r = {};
                    h[P.g.Xc] = (r[c.vtp_conversionLabel] = q, r)
                }
                var t = "AW-" + c.vtp_conversionId,
                    u = t + "/" + c.vtp_conversionLabel;
                if (T(123)) {
                    dt(t, c.vtp_transportUrl, {
                        source: 7,
                        fromContainerExecution: !0
                    }, function(y) {
                        ft(y,
                            function(A) {
                                return !!{
                                    e: !0,
                                    c: !0,
                                    cid: !0,
                                    gct: !0,
                                    rep: !0,
                                    ogt_cons_disc: !0,
                                    ccd_ads_first: !0,
                                    ccd_ads_last: !0,
                                    ccd_fl_first: !0,
                                    ccd_fl_last: !0,
                                    ccd_ga_first: !0,
                                    ccd_ga_last: !0,
                                    ccd_mc_first: !0,
                                    ccd_mc_last: !0
                                }[A]
                            })
                    });
                    var v = {},
                        w = {
                            eventMetadata: (v.hit_type_override = "conversion", v),
                            noGtmEvent: !0,
                            isGtmEvent: !0
                        };
                    hv(ev(u, P.g.Ca, h), c.vtp_gtmEventId, w);
                    I(c.vtp_gtmOnSuccess)
                } else {
                    var x = zq(yq(xq(wq(pq(new oq(c.vtp_gtmEventId, c.vtp_gtmPriorityId), h), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure), !0));
                    x.eventMetadata.hit_type_override =
                        "conversion";
                    qD(u, P.g.Ca, Date.now(), x)
                }
            })
        }();

    Z.o.logging = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Z.__logging = b;
                Z.__logging.s = "logging";
                Z.__logging.isVendorTemplate = !0;
                Z.__logging.priorityOverride = 0;
                Z.__logging.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_environments || "debug",
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e) {
                        var f;
                        if (f = "all" !== c && !0) {
                            var g = !1;
                            f = !g
                        }
                        if (f) throw d(e, {}, "Logging is not enabled in all environments");
                    },
                    M: a
                }
            })
        }();


    Z.o.hid = ["google"],
        function() {
            (function(a) {
                Z.__hid = a;
                Z.__hid.s = "hid";
                Z.__hid.isVendorTemplate = !0;
                Z.__hid.priorityOverride = 0;
                Z.__hid.isInfrastructure = !1
            })(function() {
                return We.yf
            })
        }();

    Z.o.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var h = e.shift(),
                                m = a(d, e, f, g);
                            if ("SCRIPT" == String(h.nodeName).toUpperCase() && "text/gtmscript" == h.type) {
                                var n = G.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = h.id;
                                n.text = h.text || h.textContent || h.innerHTML || "";
                                h.charset && (n.charset = h.charset);
                                var p = h.getAttribute("data-gtmsrc");
                                p && (n.src = p, mc(n, m));
                                d.insertBefore(n, null);
                                p || m()
                            } else if (h.innerHTML && 0 <= h.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; h.firstChild;) q.push(h.removeChild(h.firstChild));
                                d.insertBefore(h, null);
                                a(h, q, m, g)()
                            } else d.insertBefore(h, null), m()
                        } else f()
                    } catch (r) {
                        I(g)
                    }
                }
            }

            function b(d) {
                if (G.body) {
                    var e = d.vtp_gtmOnFailure,
                        f = ky(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.wl,
                        h = f.P;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(g, h, e) : a(G.body, yc(g), h, e)()
                } else Xx(function() {
                    b(d)
                }, 200)
            }
            Z.__html = b;
            Z.__html.s =
                "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0;
            Z.__html.isInfrastructure = !1
        }();
    Z.o.dbg = ["google"],
        function() {
            (function(a) {
                Z.__dbg = a;
                Z.__dbg.s = "dbg";
                Z.__dbg.isVendorTemplate = !0;
                Z.__dbg.priorityOverride = 0;
                Z.__dbg.isInfrastructure = !1
            })(function() {
                return !1
            })
        }();


    var xH = {};
    T(134) || (xH.macro = function(a) {
        if (We.me.hasOwnProperty(a)) return We.me[a]
    }), xH.onHtmlSuccess = We.yj(!0), xH.onHtmlFailure = We.yj(!1);
    xH.dataLayer = mi;
    xH.callback = function(a) {
        ci.hasOwnProperty(a) && Ha(ci[a]) && ci[a]();
        delete ci[a]
    };
    xH.bootstrap = 0;
    xH._spx = !1;

    function yH() {
        Mh[Vl()] = Mh[Vl()] || xH;
        T(134) || Wl(!0) && (Mh["ctid_" + Wl(!0)] = xH);
        $l();
        dm() || l(em(), function(a, b) {
            dt(a, b.transportUrl, b.context);
            O(92)
        });
        Ya(di, Z.o);
        wx(), Xe();
        Ye = nf
    }
    (function(a) {
        function b() {
            m = G.documentElement.getAttribute("data-tag-assistant-present");
            Yw(m) && (h = g.vk)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (G.referrer) {
                var d = hj(G.referrer);
                c = "cct.google" === ej(d, "host")
            }
            if (!c) {
                var e = rl("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, qc("https://cct.google/taggy/agent.js"))
        }
        if (Yh) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    Sh ? (v = "OGT", w = "GTAG") : Yh && (w = v = "OPT");
                    var x = z["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        z["google.tagmanager.debugui2.queue"] = x, qc("https://" + Lh.Ye + "/debug/bootstrap?id=" + rf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + gm()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: kc,
                            containerProduct: v,
                            debug: !1,
                            id: rf.ctid,
                            destinations: Sl()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    Lh.bk && (y.data.initialPublish = !0);
                    x.push(y)
                },
                g = {
                    Jm: 1,
                    wk: 2,
                    Hk: 3,
                    ek: 4,
                    vk: 5
                },
                h = void 0,
                m = void 0,
                n = fj(z.location, "query", !1, void 0, "gtm_debug");
            Yw(n) && (h = g.wk);
            if (!h && G.referrer) {
                var p = hj(G.referrer);
                "tagassistant.google.com" === ej(p, "host") && (h = g.Hk)
            }
            if (!h) {
                var q =
                    rl("__TAG_ASSISTANT");
                q.length && q[0].length && (h = g.ek)
            }
            h || b();
            if (!h && Zw(m)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        h && kc ? f(h) : a()
                    },
                    t = !1;
                uc(G, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else h && kc ? f(h) : a()
        }
    })(function() {
        Yl();
        if (T(70)) {}
        jk().m();
        hn();
        var b;
        if (T(133)) {
            var c = Wl();
            b = !!Ll().canonical[c]
        } else b = Wl(!0) ? Mh["ctid_" +
            Wl(!0)] : Mh[Vl()];
        if (b) {
            var d = Mh.zones;
            d && d.unregisterChild(Rl());
        } else {
            (T(11) || T(13) || T(55) || T(48)) && Wn();
            for (var e = data.resource || {}, f = e.macros || [], g = 0; g < f.length; g++) Oe.push(f[g]);
            for (var h = e.tags || [], m = 0; m < h.length; m++) Re.push(h[m]);
            for (var n = e.predicates || [], p = 0; p < n.length; p++) Qe.push(n[p]);
            for (var q = e.rules || [], r = 0; r < q.length; r++) {
                for (var t =
                        q[r], u = {}, v = 0; v < t.length; v++) u[t[v][0]] = Array.prototype.slice.call(t[v], 1);
                Pe.push(u)
            }
            Te = Z;
            Ue = Iy;
            vf = new uf;
            var w = data.sandboxed_scripts,
                x = data.security_groups,
                y = data.infra;
            a: {
                var A = data.runtime || [],
                    B = data.runtime_lines;WF = new le;ZF();Ne = XF();
                var D = WF,
                    F = TF();ob(D.h, "require", F);
                for (var K = [], H = 0; H < A.length; H++) {
                    var N = A[H];
                    if (!Ka(N) || 3 > N.length) {
                        if (0 === N.length) continue;
                        break a
                    }
                    B && B[H] && B[H].length && ff(N, B[H]);
                    try {
                        WF.execute(N), T(119) && vn && 50 === N[0] && K.push(N[1])
                    } catch (wi) {}
                }
                T(119) && (Ze = K)
            }
            if (void 0 !==
                w)
                for (var Q = ["sandboxedScripts"], ca = 0; ca < w.length; ca++) {
                    var aa = w[ca].replace(/^_*/, "");
                    di[aa] = Q
                }
            $F(x);
            if (void 0 !== y)
                for (var W = 0; W < y.length; W++) ei[y[W]] = !0;
            yH();
            if (T(102)) {
                for (var S = ui["7"], na = S ? S.split("|") : [], ha = {}, fa = 0; fa < na.length; fa++) ha[na[fa]] = !0;
                for (var Ea = 0; Ea < Nk.length; Ea++) {
                    var $a = Nk[Ea],
                        la = ha[$a] ? "granted" : "denied";
                    qk().implicit($a, la)
                }
            }
            Xw();
            Ct = !1;
            Dt = 0;
            if ("interactive" == G.readyState && !G.createEventObject || "complete" == G.readyState) Ft();
            else {
                uc(G, "DOMContentLoaded", Ft);
                uc(G, "readystatechange",
                    Ft);
                if (G.createEventObject && G.documentElement.doScroll) {
                    var Ja = !0;
                    try {
                        Ja = !z.frameElement
                    } catch (wi) {}
                    Ja && Gt()
                }
                uc(z, "load", Ft)
            }
            lw = !1;
            "complete" === G.readyState ? nw() : uc(z, "load", nw);
            vn && (qn(In), z.setInterval(Hn, 864E5));
            qn(Ky);
            qn(gu);
            qn(Ly);
            qn(Iv);
            qn(Vu);
            qn(tt);
            qn(Kn);
            qn(rt);
            qn(nu);
            T(119) && qn(ju);
            tx();
            ti(1);
            T(131) && tv();
            bi = Va();
            xH.bootstrap = bi;
            if (T(70)) {}
        }
    });

})()