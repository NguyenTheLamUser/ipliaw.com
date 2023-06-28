window[window["TiktokAnalyticsObject"]]._env = {
    "env": "external",
    "key": ""
};
window[window["TiktokAnalyticsObject"]]._variation_id = 'test_3';;
if (!window[window["TiktokAnalyticsObject"]]._server_unique_id) window[window["TiktokAnalyticsObject"]]._server_unique_id = 'c7312442-15dd-11ee-8ba9-56f12ce550c8';
window[window["TiktokAnalyticsObject"]]._plugins = {
    "AdvancedMatching": true,
    "AutoAdvancedMatching": true,
    "AutoConfig": true,
    "Callback": true,
    "Identify": true,
    "Monitor": false,
    "PerformanceInteraction": false,
    "Shopify": true,
    "WebFL": false
};
window[window["TiktokAnalyticsObject"]]._aam = {
    "in_form": true,
    "selectors": {
        "button[type='submit']": 4,
        "input[type='image']": 2,
        "input[type='submit']": 3
    },
    "exclude_selectors": [],
    "phone_regex": "",
    "phone_selectors": ["phone", "mobile", "contact", "pn"],
    "restricted_keywords": ["ssn", "unique", "cc", "card", "cvv", "cvc", "cvn", "creditcard", "billing", "security", "social", "pass"]
};
window[window["TiktokAnalyticsObject"]]._auto_config = {
    "open_graph": ["audience"],
    "microdata": ["audience"],
    "json_ld": ["audience"],
    "meta": null
};
! function() {
    function i() {
        return window && window.TiktokAnalyticsObject || "ttq"
    }

    function t() {
        return window && window[i()]
    }
    var n, o, e, c, a, r = [{
            id: "MTcyYWM1ZjQwMA",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !1,
                Monitor: !1
            }
        }, {
            id: "MTcyYWM1ZjQwMQ",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !1,
                Monitor: !1
            }
        }, {
            id: "MTcyYWM1ZjQwMg",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !0,
                Monitor: !1
            }
        }, {
            id: "MTcyYWM1ZjQwMw",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !0,
                Monitor: !1
            }
        }, {
            id: "MTcyYWM1ZjQwNA",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !1,
                Monitor: !0
            }
        }, {
            id: "MTcyYWM1ZjQwNQ",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !1,
                Monitor: !0
            }
        }, {
            id: "MTcyYWM1ZjQwNg",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !0,
                Monitor: !0
            }
        }, {
            id: "MTcyYWM1ZjQwNw",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !0,
                Monitor: !0
            }
        }],
        d = {
            "info": {
                "pixelCode": "CGEHJJJC77U845ORLVH0",
                "name": "Tiktok Pixel",
                "status": 0,
                "setupMode": 0,
                "partner": "",
                "advertiserID": "7213341961770647553",
                "is_onsite": false,
                "firstPartyCookieEnabled": true
            },
            "plugins": {
                "Shopify": false,
                "AdvancedMatching": {
                    "email": true,
                    "phone_number": true
                },
                "AutoAdvancedMatching": {
                    "auto_email": true,
                    "auto_phone_number": true
                },
                "Callback": true,
                "Identify": true,
                "Monitor": true,
                "PerformanceInteraction": true,
                "WebFL": true,
                "AutoConfig": false
            },
            "rules": [{
                "code_id": 7213968358608322562,
                "pixel_event_id": 7213968358608322562,
                "trigger_type": "PAGEVIEW",
                "conditions": [{
                    "variable_type": "PAGE_URL",
                    "operator": "CONTAINS",
                    "value": "/cart/completed"
                }],
                "code": "\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"CGEHJJJC77U845ORLVH0\").track(\"CompletePayment\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"
            }, {
                "code_id": 7214003893091500034,
                "pixel_event_id": 7214003893091500034,
                "trigger_type": "PAGEVIEW",
                "conditions": [{
                    "variable_type": "PAGE_URL",
                    "operator": "CONTAINS",
                    "value": "/cart/checkout"
                }],
                "code": "\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"CGEHJJJC77U845ORLVH0\").track(\"InitiateCheckout\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"
            }, {
                "code_id": 7214003893091516418,
                "pixel_event_id": 7214003893091516418,
                "trigger_type": "CLICK",
                "conditions": [{
                    "variable_type": "ELEMENT",
                    "operator": "EQUALS",
                    "value": "html \u003e :nth-child(7) \u003e div"
                }],
                "code": "\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"CGEHJJJC77U845ORLVH0\").track(\"AddToCart\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"
            }]
        },
        p = "https://analytics.tiktok.com/i18n/pixel/static/",
        M = t();
    M || (M = [], window && (window[i()] = M)), Object.assign(d, {
            options: (n = d.info.pixelCode, (o = t()._o) && o[n] || {})
        }),
        function(i) {
            M._i || (M._i = {});
            var t = i.info.pixelCode;
            t && (M._i[t] || (M._i[t] = []), Object.assign(M._i[t], i), M._i[t]._load = +new Date)
        }(d), e = function(i, t, n) {
            var o = 0 < arguments.length && void 0 !== i ? i : {},
                e = 1 < arguments.length ? t : void 0,
                t = 2 < arguments.length ? n : void 0,
                n = function(i, t) {
                    for (var n = 0; n < i.length; n++)
                        if (t.call(null, i[n], n)) return i[n]
                }(r, function(i) {
                    var t = i.map;
                    return function(i, t) {
                        for (var n = 0; n < i.length; n++)
                            if (!t.call(null, i[n], n)) return !1;
                        return !0
                    }(Object.keys(t), function(i) {
                        return !(!o[i] || !e[i]) === t[i]
                    })
                });
            return n ? t + "main.".concat(n.id, ".js") : t + "main.".concat(r[0].id, ".js")
        }(M._plugins, d.plugins, p), c = d.info.pixelCode, (void 0 !== self.DedicatedWorkerGlobalScope ? self instanceof self.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === self.constructor.name) ? self.importScripts && self.importScripts(e) : ((a = document.createElement("script")).type = "text/javascript", a.async = !0, a.src = e, a.setAttribute("data-id", c), (c = document.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(a, c))
}();