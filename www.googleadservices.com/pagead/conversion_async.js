(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var aa;

    function ba(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ia(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ja = ia(this),
        ka = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        l = {},
        la = {};

    function t(a, b, c) {
        if (!c || null != a) {
            c = la[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    }

    function u(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in l ? f = l : f = ja;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ka && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(l, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === la[d] && (a = 1E9 * Math.random() >>> 0, la[d] = ka ? ja.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, la[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    u("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    u("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, l.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ja[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ma(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ma(a) {
        a = {
            next: a
        };
        a[t(l.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }
    var na = ka && "function" == typeof t(Object, "assign") ? t(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    u("Object.assign", function(a) {
        return a || na
    }, "es6");

    function oa(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    u("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = oa(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");

    function pa(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[t(l.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    u("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return pa(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    u("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return pa(this, function(b) {
                return b
            })
        }
    }, "es6");
    u("globalThis", function(a) {
        return a || ja
    }, "es_2020");
    u("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    u("Array.prototype.values", function(a) {
        return a ? a : function() {
            return pa(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    u("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    u("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || t(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    u("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== oa(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    u("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    var v = this || self;

    function qa(a) {
        return a
    };

    function y(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    };

    function ra(a, b) {
        this.i = a === sa && b || "";
        this.g = ta
    }
    var ta = {},
        sa = {};

    function ua(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var va = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        wa = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };
    var xa, ya;
    a: {
        for (var za = ["CLOSURE_FLAGS"], Aa = v, Ba = 0; Ba < za.length; Ba++)
            if (Aa = Aa[za[Ba]], null == Aa) {
                ya = null;
                break a
            }
        ya = Aa
    }
    var Ca = ya && ya[610401301];
    xa = null != Ca ? Ca : !1;

    function Fa() {
        var a = v.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var z, Ga = v.navigator;
    z = Ga ? Ga.userAgentData || null : null;

    function Ha(a) {
        return xa ? z ? z.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }

    function C(a) {
        return -1 != Fa().indexOf(a)
    };

    function D() {
        return xa ? !!z && 0 < z.brands.length : !1
    }

    function Ia() {
        return D() ? Ha("Chromium") : (C("Chrome") || C("CriOS")) && !(D() ? 0 : C("Edge")) || C("Silk")
    };

    function Ja(a) {
        Ja[" "](a);
        return a
    }
    Ja[" "] = function() {};
    var Ka;

    function La(a) {
        this.g = a
    }
    La.prototype.toString = function() {
        return this.g + ""
    };

    function Ma(a) {
        return a instanceof La && a.constructor === La ? a.g : "type_error:TrustedResourceUrl"
    }
    var Na = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Oa = {};

    function Pa(a) {
        if (void 0 === Ka) {
            var b = null;
            var c = v.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: qa,
                        createScript: qa,
                        createScriptURL: qa
                    })
                } catch (d) {
                    v.console && v.console.error(d.message)
                }
                Ka = b
            } else Ka = b
        }
        a = (b = Ka) ? b.createScriptURL(a) : a;
        return new La(a, Oa)
    }

    function Qa(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var Ra = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Sa(a) {
        var b = a.match(Ra);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function Ta(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var Ua = /#|$/;

    function E(a, b) {
        var c = a.search(Ua),
            d = Ta(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
    var Va = /[?&]($|#)/;

    function F(a, b, c) {
        for (var d = a.search(Ua), e = 0, f, g = []; 0 <= (f = Ta(a, e, b, d));) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
        g.push(a.slice(e));
        a = g.join("").replace(Va, "$1");
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        (b += c) ? (c = a.indexOf("#"), 0 > c && (c = a.length), d = a.indexOf("?"), 0 > d || d > c ? (d = c, e = "") : e = a.substring(d + 1, c), c = [a.slice(0, d), e, a.slice(c)], a = c[1], c[1] = b ? a ? a + "&" + b : b : a, b = c[0] + (c[1] ? "?" + c[1] : "") + c[2]) : b = a;
        return b
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Wa(a, b) {
        a.src = Ma(b);
        var c, d;
        (c = (b = null == (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };

    function Xa(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Ja(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function Ya() {
        if (!l.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            l.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Za(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var ab = ua(function() {
            return wa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], $a) || 1E-4 > Math.random()
        }),
        bb = ua(function() {
            return $a("MSIE")
        });

    function $a(a) {
        return -1 != Fa().indexOf(a)
    }

    function G(a) {
        return /^true$/.test(a)
    }

    function cb(a, b) {
        if (!a || !b.head) return null;
        var c = db("META");
        b.head.appendChild(c);
        c.httpEquiv = "origin-trial";
        c.content = a;
        return c
    }

    function db(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var eb = y("0.20"),
        fb = y("0.002"),
        gb = y("1.0"),
        hb = y("0.00"),
        ib = y("0.00"),
        jb = y("0.00"),
        kb = G("true"),
        lb = G("true"),
        mb = G("true"),
        nb = G("true"),
        ob = G("true");
    var qb = null;

    function rb() {
        if (null === qb) {
            qb = "";
            try {
                var a = "";
                try {
                    a = v.top.location.hash
                } catch (c) {
                    a = v.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    qb = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return qb
    }

    function H(a, b, c) {
        var d = I;
        if (c ? d.g.hasOwnProperty(c) && "" == d.g[c] : 1) {
            var e;
            e = (e = rb()) ? (e = e.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? e[0] : null : null;
            if (e) a = e;
            else a: {
                if (!bb() && !ab() && (e = Math.random(), e < b)) {
                    e = Ya();
                    a = a[Math.floor(e * a.length)];
                    break a
                }
                a = null
            }
            a && "" != a && (c ? d.g.hasOwnProperty(c) && (d.g[c] = a) : d.i[a] = !0)
        }
    }

    function J(a) {
        var b = I;
        return b.g.hasOwnProperty(a) ? b.g[a] : ""
    }

    function sb() {
        var a = I,
            b = [];
        Za(a.i, function(c, d) {
            b.push(d)
        });
        Za(a.g, function(c) {
            "" != c && b.push(c)
        });
        return b
    };
    var tb = {
            L: 2,
            T: 13,
            S: 14,
            O: 16,
            N: 17,
            M: 18,
            K: 19,
            V: 20,
            U: 21,
            J: 22
        },
        I = null;

    function ub() {
        return !!I && ("466465926" == J(20) || "466465925" == J(20))
    }

    function vb() {
        return !!I && "592230571" == J(16)
    }

    function wb() {
        return !!I && ("512247839" == J(22) || "512247838" == J(22))
    };

    function xb(a) {
        var b = void 0 === b ? v : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };

    function K(a) {
        var b = "s";
        if (a.s && a.hasOwnProperty(b)) return a.s;
        b = new a;
        return a.s = b
    };
    var yb = {
        P: 0,
        G: 1,
        R: 2,
        I: 3,
        H: 4
    };

    function zb() {
        this.g = {}
    }

    function Ab(a, b, c) {
        "number" === typeof c && 0 < c && (a.g[b] = Math.round(c))
    }

    function Bb(a) {
        var b = K(zb);
        var c = void 0 === c ? v : c;
        c = c.performance;
        Ab(b, a, c && c.now ? c.now() : null)
    }

    function Cb() {
        function a() {
            return Ab(b, 0, xb("loadEventStart") - xb("navigationStart"))
        }
        var b = K(zb);
        0 != xb("loadEventStart") ? a() : window.addEventListener("load", a)
    }

    function Db(a, b) {
        b.google_tag_manager && b.google_tag_manager._li && (b = b.google_tag_manager._li, Ab(a, 4, b.cbt), Ab(a, 3, b.cst))
    }

    function Eb() {
        var a = K(zb);
        return t(Object, "values").call(Object, yb).map(function(b) {
            return [b, a.g[b] || 0]
        })
    };
    var Fb = G("false");
    var Gb = {};

    function L(a) {
        Gb.TAGGING = Gb.TAGGING || [];
        Gb.TAGGING[a] = !0
    };

    function Hb(a) {
        return "function" === typeof a
    }

    function Ib(a) {
        return "string" === typeof a
    }
    var Jb = Array.isArray;

    function Kb(a, b) {
        if (a && Jb(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function Lb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function Mb() {
        return new Date(Date.now())
    };
    var N = window,
        O = document;

    function Nb(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null, b())
        })
    }
    var Ob = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Pb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Qb(a, b, c) {
        b && Lb(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    function Rb(a, b, c, d) {
        var e = O.createElement("script");
        Qb(e, c, Ob);
        e.type = "text/javascript";
        e.async = !0;
        a = Pa(null === a ? "null" : void 0 === a ? "undefined" : a);
        Wa(e, a);
        Nb(e, b);
        d ? d.appendChild(e) : (b = O.getElementsByTagName("script")[0] || O.body || O.head, b.parentNode.insertBefore(e, b))
    }

    function Sb(a, b, c, d, e, f) {
        f = void 0 === f ? !0 : f;
        var g = e;
        e = !1;
        g || (g = O.createElement("iframe"), e = !0);
        Qb(g, c, Pb);
        d && Lb(d, function(h, k) {
            g.dataset[h] = k
        });
        f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
        e && (c = O.body && O.body.lastChild || O.body || O.head, c.parentNode.insertBefore(g, c));
        Nb(g, b);
        void 0 !== a && (g.src = a)
    };

    function Tb() {
        var a = void 0 === a ? document : a;
        var b;
        return !(null == (b = a.featurePolicy) || !(aa = b.allowedFeatures(), t(aa, "includes")).call(aa, "attribution-reporting"))
    };

    function Ub(a, b, c) {
        a = Vb(a, !0);
        if (a[b]) return !1;
        a[b] = [];
        a[b][0] = c;
        return !0
    }

    function Vb(a, b) {
        var c = a.GooglebQhCsO;
        c || (c = {}, b && (a.GooglebQhCsO = c));
        return c
    };
    !C("Android") || Ia();
    Ia();
    C("Safari") && (Ia() || (D() ? 0 : C("Coast")) || (D() ? 0 : C("Opera")) || (D() ? 0 : C("Edge")) || (D() ? Ha("Microsoft Edge") : C("Edg/")) || D() && Ha("Opera"));
    var Wb = {},
        Xb = null;

    function Yb(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        a = 4;
        void 0 === a && (a = 0);
        if (!Xb)
            for (Xb = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Wb[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Xb[h] && (Xb[h] = g)
                }
            }
        a = Wb[a];
        c = Array(Math.floor(b.length / 3));
        d = a[64] || "";
        for (e = f = 0; f < b.length - 2; f += 3) {
            var k = b[f],
                m = b[f + 1];
            h = b[f + 2];
            g = a[k >> 2];
            k = a[(k &
                3) << 4 | m >> 4];
            m = a[(m & 15) << 2 | h >> 6];
            h = a[h & 63];
            c[e++] = g + k + m + h
        }
        g = 0;
        h = d;
        switch (b.length - f) {
            case 2:
                g = b[f + 1], h = a[(g & 15) << 2] || d;
            case 1:
                b = b[f], c[e] = a[b >> 2] + a[(b & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };

    function Zb(a, b, c, d, e) {
        var f = E(c, "fmt");
        if (d) {
            var g = E(c, "random"),
                h = E(c, "label") || "";
            if (!g) return !1;
            g = Yb(decodeURIComponent(h.replace(/\+/g, " ")) + ":" + decodeURIComponent(g.replace(/\+/g, " ")));
            if (!Ub(a, g, d)) return !1
        }
        f && 4 != f && (c = F(c, "rfmt", f));
        c = F(c, "fmt", 4);
        Rb(c, function() {
            a.google_noFurtherRedirects && d && d.call && (a.google_noFurtherRedirects = null, d())
        }, e, b.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var $b = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);

    function ac() {
        var a = {};
        this.g = function() {
            var b = $b.g,
                c = $b.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.i = function(b) {
            a[$b.g] = b
        }
    };
    var bc = [];

    function P(a) {
        return void 0 == bc[a] ? !1 : bc[a]
    };
    var cc = [],
        Q = {},
        dc = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function R() {
        var a = {};
        var b = N.google_tag_data;
        N.google_tag_data = void 0 === b ? a : b;
        a = N.google_tag_data;
        a.ics || (a.ics = {
            entries: {},
            cps: {},
            default: ec,
            update: fc,
            declare: gc,
            implicit: hc,
            addListener: ic,
            notifyListeners: jc,
            setCps: kc,
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

    function lc(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }

    function gc(a, b, c, d, e) {
        var f = R();
        f.active = !0;
        f.usedDeclare = !0;
        f = t(f, "entries");
        var g = f[a] || {},
            h = g.declare_region;
        c = c && Ib(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        lc(c, h, d, e) && (b = {
            region: g.region,
            declare_region: c,
            declare: "granted" === b,
            implicit: g.implicit,
            default: g.default,
            update: g.update,
            quiet: g.quiet
        }, "" !== d || !1 !== g.declare) && (f[a] = b)
    }

    function hc(a, b) {
        var c = R();
        c.active = !0;
        c.usedImplicit = !0;
        c = t(c, "entries");
        a = c[a] = c[a] || {};
        !1 !== a.implicit && (a.implicit = "granted" === b)
    }

    function ec(a, b, c, d, e, f) {
        var g = R();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        L(19);
        if (void 0 == b) L(18);
        else {
            var h = t(g, "entries");
            g = h[a] || {};
            var k = g.region;
            c = c && Ib(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (lc(c, k, d, e)) {
                e = !!(f && 0 < f && void 0 === g.update);
                var m = {
                    region: c,
                    declare_region: g.declare_region,
                    implicit: g.implicit,
                    default: "granted" === b,
                    declare: g.declare,
                    update: g.update,
                    quiet: e
                };
                if ("" !== d || !1 !== g.default) h[a] = m;
                e && N.setTimeout(function() {
                    if (h[a] ===
                        m && m.quiet) {
                        m.quiet = !1;
                        var p = [a];
                        if (P(4))
                            for (var n in Q) Q.hasOwnProperty(n) && Q[n] === a && p.push(n);
                        for (n = 0; n < p.length; n++) mc(p[n]);
                        jc();
                        L(2)
                    }
                }, f)
            }
        }
    }

    function fc(a, b) {
        var c = R();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = nc(c, a),
                e = t(c, "entries");
            e = e[a] = e[a] || {};
            e.update = "granted" === b;
            c = nc(c, a);
            b = [a];
            if (P(4))
                for (var f in Q) Q.hasOwnProperty(f) && Q[f] === a && b.push(f);
            if (e.quiet)
                for (e.quiet = !1, a = 0; a < b.length; a++) mc(b[a]);
            else if (c !== d)
                for (a = 0; a < b.length; a++) mc(b[a])
        }
    }

    function kc(a, b, c, d, e) {
        var f = R();
        a: {
            var g = f.cps,
                h = g[a] || {},
                k = h.region;c = c && Ib(c) ? c.toUpperCase() : void 0;d = d.toUpperCase();
            if (lc(c, k, d, e.toUpperCase()) && (b = {
                    enabled: "granted" === b,
                    region: c
                }, "" !== d || !1 !== h.enabled)) {
                g[a] = b;
                a = !0;
                break a
            }
            a = !1
        }
        a && (f.usedSetCps = !0)
    }

    function ic(a, b) {
        cc.push({
            consentTypes: a,
            B: b
        })
    }

    function mc(a) {
        for (var b = 0; b < cc.length; ++b) {
            var c = cc[b];
            Jb(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.A = !0)
        }
    }

    function jc(a, b) {
        for (var c = 0; c < cc.length; ++c) {
            var d = cc[c];
            if (d.A) {
                d.A = !1;
                try {
                    d.B({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function nc(a, b) {
        var c = t(a, "entries");
        a = c[b] || {};
        var d = a.update;
        if (void 0 !== d) return d ? 1 : 2;
        d = a.default;
        if (void 0 !== d) return d ? 1 : 2;
        if (P(4) && Q.hasOwnProperty(b)) {
            c = c[Q[b]] || {};
            d = c.update;
            if (void 0 !== d) return d ? 1 : 2;
            d = c.default;
            if (void 0 !== d) return d ? 1 : 2
        }
        d = a.declare;
        return void 0 !== d ? d ? 1 : 2 : P(4) && (d = a.implicit, void 0 !== d) ? d ? 3 : 4 : P(3) && dc.hasOwnProperty(b) ? dc[b] ? 3 : 4 : 0
    }

    function oc(a) {
        var b = R();
        b.accessedAny = !0;
        switch (nc(b, a)) {
            case 1:
            case 3:
                return !0;
            case 2:
            case 4:
                return !1;
            default:
                return !0
        }
    }

    function pc(a) {
        var b = R();
        b.accessedAny = !0;
        return !(t(b, "entries")[a] || {}).quiet
    }

    function qc() {
        if (!K(ac).g()) return !1;
        var a = R();
        a.accessedAny = !0;
        return a.active
    }

    function rc(a, b) {
        R().addListener(a, b)
    }

    function sc(a) {
        function b() {
            for (var e = 0; e < c.length; e++)
                if (!pc(c[e])) return !0;
            return !1
        }
        var c = ["ad_storage"];
        if (b()) {
            var d = !1;
            rc(c, function(e) {
                d || b() || (d = !0, a(e))
            })
        } else a({})
    }

    function tc(a) {
        function b() {
            for (var e = [], f = 0; f < c.length; f++) {
                var g = c[f];
                oc(g) && !d[g] && (e.push(g), d[g] = !0)
            }
            return e
        }
        var c = Ib("ad_storage") ? ["ad_storage"] : "ad_storage",
            d = {};
        b().length !== c.length && rc(c, function(e) {
            var f = b();
            0 < f.length && (e.consentTypes = f, a(e))
        })
    };

    function uc(a, b, c, d) {
        if (wc(d)) {
            d = [];
            b = String(b || xc()).split(";");
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("="),
                    g = f[0].replace(/^\s*|\s*$/g, "");
                g && g == a && ((f = f.slice(1).join("=").replace(/^\s*|\s*$/g, "")) && c && (f = decodeURIComponent(f)), d.push(f))
            }
            a = d
        } else a = [];
        return a
    }

    function yc(a, b, c, d) {
        var e = xc(),
            f = window;
        "null" !== f.origin && (f.document.cookie = a);
        a = xc();
        return e != a || void 0 != c && 0 <= uc(b, a, !1, d).indexOf(c)
    }

    function zc(a, b, c) {
        function d(n, q, w) {
            if (null == w) return delete g[q], n;
            g[q] = w;
            return n + "; " + q + "=" + w
        }

        function e(n, q) {
            if (null == q) return delete g[q], n;
            g[q] = !0;
            return n + "; " + q
        }
        if (wc(c.j)) {
            if (void 0 == b) var f = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else c.encode && (b = encodeURIComponent(b)), b = Ac(b), f = a + "=" + b;
            var g = {};
            f = d(f, "path", c.path);
            if (c.expires instanceof Date) var h = c.expires.toUTCString();
            else null != c.expires && (h = c.expires);
            f = d(f, "expires", h);
            f = d(f, "max-age", c.W);
            f = d(f, "samesite", c.X);
            c.Y &&
                (f = e(f, "secure"));
            if ((h = c.domain) && "auto" === h.toLowerCase()) {
                h = Bc();
                for (var k = 0; k < h.length; ++k) {
                    var m = "none" !== h[k] ? h[k] : void 0,
                        p = d(f, "domain", m);
                    p = e(p, c.flags);
                    if (!Cc(m, c.path) && yc(p, a, b, c.j)) break
                }
            } else h && "none" !== h.toLowerCase() && (f = d(f, "domain", h)), f = e(f, c.flags), Cc(h, c.path) || yc(f, a, b, c.j)
        }
    }

    function Dc(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        zc(a, b, c)
    }

    function Ac(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
    var Ec = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Fc = /(^|\.)doubleclick\.net$/i;

    function Cc(a, b) {
        return Fc.test(window.document.location.hostname) || "/" === b && Ec.test(a)
    }

    function xc() {
        return "null" !== window.origin ? window.document.cookie : ""
    }

    function Bc() {
        var a = [],
            b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (c = b.length - 2; 0 <= c; c--) a.push(b.slice(c).join("."));
        b = window.document.location.hostname;
        Fc.test(b) || Ec.test(b) || a.push("none");
        return a
    }

    function wc(a) {
        return K(ac).g() && a && qc() ? pc(a) ? oc(a) : !1 : !0
    };

    function Gc(a, b) {
        var c, d = Number(null != a.v ? a.v : void 0);
        0 !== d && (c = new Date((b || Mb().getTime()) + 1E3 * (d || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !0,
            expires: c,
            j: void 0
        }
    };

    function Hc(a) {
        var b = [],
            c = O.cookie.split(";");
        a = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].match(a);
            e && b.push({
                u: e[1],
                value: e[2],
                timestamp: Number(e[2].split(".")[1]) || 0
            })
        }
        b.sort(function(f, g) {
            return g.timestamp - f.timestamp
        });
        return b
    }

    function S(a, b) {
        a = Hc(a);
        var c = {};
        if (!a || !a.length) return c;
        for (var d = 0; d < a.length; d++) {
            var e = a[d].value.split(".");
            if (!("1" !== e[0] || b && 3 > e.length || !b && 3 !== e.length) && Number(e[1])) {
                c[a[d].u] || (c[a[d].u] = []);
                var f = {
                    version: e[0],
                    timestamp: 1E3 * Number(e[1]),
                    h: e[2]
                };
                b && 3 < e.length && (f.labels = e.slice(3));
                c[a[d].u].push(f)
            }
        }
        return c
    };
    var Ic = /:[0-9]+$/;

    function Jc(a, b) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split("=");
            if (decodeURIComponent(d[0]).replace(/\+/g, " ") === b) return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g, " ")
        }
    }

    function Kc(a, b) {
        var c = "query";
        var d = (d = a.protocol) ? d.replace(":", "").toLowerCase() : "";
        c && (c = String(c).toLowerCase());
        switch (c) {
            case "url_no_fragment":
                b = "";
                a && a.href && (b = a.href.indexOf("#"), b = 0 > b ? a.href : a.href.substr(0, b));
                a = b;
                break;
            case "protocol":
                a = d;
                break;
            case "host":
                a = a.hostname.replace(Ic, "").toLowerCase();
                break;
            case "port":
                a = String(Number(a.port) || ("http" === d ? 80 : "https" === d ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || L(1);
                a = "/" === a.pathname.charAt(0) ? a.pathname : "/" + a.pathname;
                a = a.split("/");
                0 <= [].indexOf(a[a.length - 1]) && (a[a.length - 1] = "");
                a = a.join("/");
                break;
            case "query":
                a = a.search.replace("?", "");
                b && (a = Jc(a, b));
                break;
            case "extension":
                a = a.pathname.split(".");
                a = 1 < a.length ? a[a.length - 1] : "";
                a = a.split("/")[0];
                break;
            case "fragment":
                a = a.hash.replace("#", "");
                break;
            default:
                a = a && a.href
        }
        return a
    };
    var Lc = /^\w+$/,
        Mc = /^[\w-]+$/,
        Nc = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        };

    function T() {
        return K(ac).g() && qc() ? oc("ad_storage") : !0
    }

    function Oc(a, b) {
        pc("ad_storage") ? T() ? a() : tc(a) : b ? L(3) : sc(function() {
            Oc(a, !0)
        })
    }

    function Pc(a) {
        return Qc(a).map(function(b) {
            return b.h
        })
    }

    function Qc(a) {
        var b = [];
        if ("null" === N.origin || !O.cookie) return b;
        a = uc(a, O.cookie, void 0, "ad_storage");
        if (!a || 0 == a.length) return b;
        for (var c = {}, d = 0; d < a.length; c = {
                l: c.l
            }, d++) {
            var e = Rc(a[d]);
            if (null != e) {
                var f = e;
                e = f.version;
                c.l = f.h;
                var g = f.timestamp;
                f = f.labels;
                var h = Kb(b, function(k) {
                    return function(m) {
                        return m.h === k.l
                    }
                }(c));
                h ? (h.timestamp = Math.max(h.timestamp, g), h.labels = Sc(h.labels, f || [])) : b.push({
                    version: e,
                    h: c.l,
                    timestamp: g,
                    labels: f
                })
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return Tc(b)
    }

    function Sc(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (a = 0; a < b.length; a++) c[b[a]] || d.push(b[a]);
        return d
    }

    function Uc(a) {
        return a && "string" == typeof a && a.match(Lc) ? a : "_gcl"
    }

    function Vc() {
        var a = N.location.href,
            b = O.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || L(1), c = "/" + c);
        a = b.hostname.replace(Ic, "");
        var d = {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: a,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        };
        b = Kc(d, "gclid");
        c = Kc(d, "gclsrc");
        a = Kc(d, "wbraid");
        var e = Kc(d, "dclid");
        b && c && a || (d = d.hash.replace("#", ""), b = b || Jc(d, "gclid"), c = c || Jc(d, "gclsrc"), a = a || Jc(d, "wbraid"));
        return Wc(b, c, e, a)
    }

    function Wc(a, b, c, d) {
        function e(g, h) {
            f[h] || (f[h] = []);
            f[h].push(g)
        }
        var f = {};
        f.gclid = a;
        f.gclsrc = b;
        f.dclid = c;
        void 0 !== d && Mc.test(d) && (f.gbraid = d, e(d, "gb"));
        if (void 0 !== a && a.match(Mc)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return f
    }

    function Xc() {
        var a = {},
            b = Vc();
        Oc(function() {
            Yc(b, !1, a)
        })
    }

    function Yc(a, b, c, d, e) {
        function f(n) {
            n = ["GCL", p, n];
            0 < e.length && n.push(e.join("."));
            return n.join(".")
        }

        function g(n, q) {
            if (n = Zc(n, h)) Dc(n, q, k), m = !0
        }
        c = c || {};
        e = e || [];
        var h = Uc(c.prefix);
        d = d || Mb().getTime();
        var k = Gc(c, d);
        k.j = "ad_storage";
        var m = !1,
            p = Math.round(d / 1E3);
        a.aw && g("aw", f(a.aw[0]));
        a.dc && g("dc", f(a.dc[0]));
        a.gf && g("gf", f(a.gf[0]));
        a.ha && g("ha", f(a.ha[0]));
        a.gp && g("gp", f(a.gp[0]));
        if (!m && a.gb) {
            a = a.gb[0];
            d = Zc("gb", h);
            c = !1;
            if (!b)
                for (b = Qc(d), d = 0; d < b.length; d++) b[d].h === a && b[d].labels && 0 < b[d].labels.length &&
                    (c = !0);
            c || g("gb", f(a))
        }
    }

    function Zc(a, b) {
        a = Nc[a];
        if (void 0 !== a) return b + a
    }

    function $c(a) {
        return 0 !== ad(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    }

    function Rc(a) {
        a = ad(a.split("."));
        return 0 === a.length ? null : {
            version: a[0],
            h: a[2],
            timestamp: 1E3 * (Number(a[1]) || 0),
            labels: a.slice(3)
        }
    }

    function ad(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Mc.test(a[2]) ? [] : a
    }

    function Tc(a) {
        return a.filter(function(b) {
            return Mc.test(b.h)
        })
    }

    function bd() {
        var a = ["aw"],
            b = {};
        if ("null" !== N.origin) {
            for (var c = Uc(b.prefix), d = {}, e = 0; e < a.length; e++) Nc[a[e]] && (d[a[e]] = Nc[a[e]]);
            Oc(function() {
                Lb(d, function(f, g) {
                    g = uc(c + g, O.cookie, void 0, "ad_storage");
                    g.sort(function(p, n) {
                        return $c(n) - $c(p)
                    });
                    if (g.length) {
                        var h = g[0];
                        g = $c(h);
                        var k = 0 !== ad(h.split(".")).length ? h.split(".").slice(3) : [],
                            m = {};
                        h = 0 !== ad(h.split(".")).length ? h.split(".")[2] : void 0;
                        m[f] = [h];
                        Yc(m, !0, b, g, k)
                    }
                })
            })
        }
    }

    function cd(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!T()) return e;
        var f = Qc(a);
        if (!f.length) return e;
        for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d) return e;
        1 !== e[0] && (d = f[0], f = f[0].timestamp, b = [d.version, Math.round(f / 1E3), d.h].concat(d.labels || [], [b]).join("."), c = Gc(c, f), c.j = "ad_storage", Dc(a, b, c));
        return e
    }

    function dd(a, b) {
        b = Uc(b);
        a = Zc(a, b);
        if (!a) return 0;
        a = Qc(a);
        for (var c = b = 0; c < a.length; c++) b = Math.max(b, a[c].timestamp);
        return b
    }

    function ed(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var fd = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        gd = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        hd = /^\d+\.fls\.doubleclick\.net$/,
        id = /;gac=([^;?]+)/,
        jd = /;gacgb=([^;?]+)/,
        kd = /;gclaw=([^;?]+)/,
        ld = /;gclgb=([^;?]+)/;

    function md(a, b, c) {
        if (hd.test(a.location.host)) return (b = a.location.href.match(c)) && 2 == b.length && b[1].match(fd) ? decodeURIComponent(b[1]) : "";
        a = [];
        for (var d in b) {
            c = [];
            for (var e = b[d], f = 0; f < e.length; f++) c.push(e[f].h);
            a.push(d + ":" + c.join(","))
        }
        return 0 < a.length ? a.join(";") : ""
    }

    function nd(a, b, c, d) {
        var e = T() ? S("_gac_gb", !0) : {},
            f = [],
            g = !1,
            h;
        for (h in e) {
            var k = cd("_gac_gb_" + h, b, c, d);
            g = g || 0 !== k.length && k.some(function(m) {
                return 1 === m
            });
            f.push(h + ":" + k.join(","))
        }
        return {
            D: g ? f.join(";") : "",
            C: md(a, e, jd)
        }
    }

    function od(a, b, c, d) {
        if (hd.test(a.location.host)) {
            if ((a = a.location.href.match(d)) && 2 == a.length && a[1].match(gd)) return [{
                h: a[1]
            }]
        } else return Qc((b || "_gcl") + c);
        return []
    }

    function pd(a, b) {
        return od(a, b, "_aw", kd).map(function(c) {
            return c.h
        }).join(".")
    }

    function qd(a, b) {
        return od(a, b, "_gb", ld).map(function(c) {
            return c.h
        }).join(".")
    }

    function rd(a, b) {
        var c = "" !== qd(a, b) || 0 < t(Object, "keys").call(Object, T() ? S("_gac_gb", !0) : {}).length;
        a = "" !== pd(a, b) || "" !== md(a, T() ? S() : {}, id);
        return c && a
    }

    function sd(a) {
        0 !== Pc("_gcl_aw").length || a && 0 !== Pc(a + "_aw").length || (Xc(), bd())
    }

    function td(a, b, c) {
        a = cd((b && b.prefix || "_gcl") + "_gb", a, b, c);
        return 0 === a.length || a.every(function(d) {
            return 0 === d
        }) ? "" : a.join(".")
    };

    function ud() {
        if (Hb(N.__uspapi)) {
            var a = "";
            try {
                N.__uspapi("getUSPData", 1, function(b, c) {
                    c && b && (b = b.uspString) && RegExp("^[\\da-zA-Z-]{1,20}$").test(b) && (a = b)
                })
            } catch (b) {}
            return a
        }
    };
    var vd = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function wd(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function xd(a) {
        a = a.google_tag_data;
        if (null != a && a.uach) {
            a = a.uach;
            var b = t(Object, "assign").call(Object, {}, a);
            a.fullVersionList && (b.fullVersionList = a.fullVersionList.slice(0));
            a = b
        } else a = null;
        return a
    }

    function yd(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function zd() {
        var a = window;
        if (yd(a)) {
            var b = wd(a);
            b.uach_promise || (a = a.navigator.userAgentData.getHighEntropyValues(vd).then(function(c) {
                null != b.uach || (b.uach = c);
                return c
            }), b.uach_promise = a)
        }
    };
    var Ad = {
            id: !0,
            origin: !0,
            destination: !0,
            start_date: !0,
            end_date: !0,
            location_id: !0
        },
        Bd = /^[a-zA-Z0-9_]+$/,
        Cd = !1,
        Dd = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" ");

    function Ed(a, b) {
        var c = a;
        return function() {
            --c;
            0 >= c && b()
        }
    }

    function W(a) {
        return null != a ? encodeURIComponent(String(a)) : ""
    }

    function Fd(a) {
        if (null != a) {
            a = String(a).substring(0, 512);
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        }
        return ""
    }

    function X(a, b) {
        b = W(b);
        return "" != b && (a = W(a), "" != a) ? "&".concat(a, "=", b) : ""
    }

    function Gd(a) {
        var b = typeof a;
        return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function Hd(a) {
        if (!a || "object" != typeof a || "function" == typeof a.join) return "";
        var b = [],
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (d && "function" === typeof d.join) {
                    for (var e = [], f = 0; f < d.length; ++f) {
                        var g = Gd(d[f]);
                        null != g && e.push(g)
                    }
                    d = 0 == e.length ? null : e.join(",")
                } else d = Gd(d);
                (e = Gd(c)) && null != d && b.push(e + "=" + d)
            }
        return b.join(";")
    }

    function Id(a) {
        return "number" != typeof a && "string" != typeof a ? "" : W(a.toString())
    }

    function Jd(a, b) {
        if (b.google_read_gcl_cookie_opt_out || b.google_remarketing_only || b.google_conversion_domain && (!b.google_gcl_cookie_prefix || !/^_ycl/.test(b.google_gcl_cookie_prefix))) return "";
        var c = "",
            d = Kd(b),
            e = {};
        b.google_gcl_cookie_domain && (e.domain = b.google_gcl_cookie_domain);
        b.google_gcl_cookie_flags && (e.flags = b.google_gcl_cookie_flags);
        null != b.google_gcl_cookie_max_age_seconds && (e.v = b.google_gcl_cookie_max_age_seconds);
        b.google_gcl_cookie_path && (e.path = b.google_gcl_cookie_path);
        d && (e.prefix = d);
        if (Ld(b) && b.m) var f = void 0 === b.o;
        else hd.test(a.location.host) ? f = !(kd.test(a.location.href) || id.test(a.location.href)) : (f = Math.max(dd("aw", d), ed(T() ? S() : {})), f = Math.max(dd("gb", d), ed(T() ? S("_gac_gb", !0) : {})) > f);
        if (f) {
            if (void 0 !== b.o) return b.o;
            c = qd(a, d || void 0);
            f = b.google_conversion_label;
            var g = td(f, e, b.m);
            c = X("gclgb", c) + (g ? X("mcov", g) : "");
            if (d) return b.o = c;
            d = nd(a, f, e, b.m);
            a = d.C;
            d = d.D;
            c += (a ? X("gacgb", a) : "") + (d ? X("gacmcov", d) : "");
            return b.o = c
        }
        if (d) return b = pd(a, d), X("gclaw", b);
        (b = pd(a)) && (c = X("gclaw",
            b));
        b = md(a, T() ? S() : {}, id);
        return c + (b ? X("gac", b) : "")
    }

    function Md(a) {
        function b(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        }
        a = a ? a.title : "";
        if (void 0 == a || "" == a) return "";
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c));) c--;
        return "&tiba=" + a.substr(0, c)
    }

    function Nd(a, b, c, d, e, f) {
        var g = "https://",
            h = "landing" === d.google_conversion_type ? "/extclk" : "/";
        switch (e) {
            default: return "";
            case 2:
                    case 3:
                    var k = "googleads.g.doubleclick.net/";
                var m = "pagead/viewthroughconversion/";
                break;
            case 1:
                    k = "www.google.com/";m = "pagead/1p-conversion/";
                break;
            case 6:
                    k = "www.google.com/";m = "ccm/conversion/";
                break;
            case 0:
                    k = d.google_conversion_domain || "www.googleadservices.com/";m = "pagead/conversion/";
                break;
            case 5:
                    k = d.google_conversion_domain || "www.googleadservices.com/";m = "ccm/conversion/";
                break;
            case 4:
                    k = (k = d.google_gtm_experiments) && k.apcm ? "www.google.com" : k && k.capiorig ? d.google_conversion_id + ".privacysandbox.googleadservices.com" : "www.google.com/";m = "pagead/privacysandbox/conversion/";
                break;
            case 7:
                    k = "googleads.g.doubleclick.net/",
                m = "td/rul/"
        }
        kb && d.google_transport_url && (k = d.google_transport_url);
        "/" !== k[k.length - 1] && (k += "/");
        if (0 === k.indexOf("http://") || 0 === k.indexOf("https://")) g = "";
        g = [g, k, m, W(d.google_conversion_id), h, "?random=", W(d.google_conversion_time)].join("");
        h = X("cv", d.google_conversion_js_version);
        k = X("fst", d.google_conversion_first_time);
        m = X("num", d.google_conversion_snippets);
        var p = X("fmt", d.google_conversion_format),
            n = d.google_remarketing_only ? X("userId", d.google_user_id) : "";
        var q = d.google_tag_for_child_directed_treatment;
        q = null == q || 0 !== q && 1 !== q ? "" : X("tfcd", q);
        var w = d.google_tag_for_under_age_of_consent;
        w = null == w || 0 !== w && 1 !== w ? "" : X("tfua", w);
        var da = d.google_allow_ad_personalization_signals;
        da = !1 === da ? X("npa", 1) : !0 === da ? X("npa", 0) : "";
        var Da = d.google_restricted_data_processing;
        Da = mb ? !0 ===
            Da ? X("rdp", 1) : !1 === Da ? X("rdp", 0) : "" : "";
        var Zd = X("value", d.google_conversion_value),
            $d = X("currency_code", d.google_conversion_currency),
            ae = X("label", d.google_conversion_label),
            be = X("oid", d.google_conversion_order_id),
            ce = X("bg", d.google_conversion_color);
        a: {
            var B = d.google_conversion_language;
            if (null != B) {
                B = B.toString();
                if (2 == B.length) {
                    B = X("hl", B);
                    break a
                }
                if (5 == B.length) {
                    B = X("hl", B.substring(0, 2)) + X("gl", B.substring(3, 5));
                    break a
                }
            }
            B = ""
        }
        var de = X("guid", "ON"),
            ee = !d.google_conversion_domain && "GooglemKTybQhCsO" in
            v && "function" == typeof v.GooglemKTybQhCsO ? X("resp", "GooglemKTybQhCsO") : "",
            fe = X("disvt", d.google_disable_viewthrough),
            ge = X("eid", sb().join());
        var ea = d.google_conversion_date;
        var A = [];
        if (a) {
            var M = a.screen;
            M && (A.push(X("u_h", M.height)), A.push(X("u_w", M.width)), A.push(X("u_ah", M.availHeight)), A.push(X("u_aw", M.availWidth)), A.push(X("u_cd", M.colorDepth)));
            a.history && A.push(X("u_his", a.history.length))
        }
        ea && "function" == typeof ea.getTimezoneOffset && A.push(X("u_tz", -ea.getTimezoneOffset()));
        b && ("function" ==
            typeof b.javaEnabled && A.push(X("u_java", b.javaEnabled())), b.plugins && A.push(X("u_nplug", b.plugins.length)), b.mimeTypes && A.push(X("u_nmime", b.mimeTypes.length)));
        ea = A.join("");
        A = X("gtm", d.google_gtm);
        b = b && b.sendBeacon ? X("sendb", "1") : "";
        M = Od();
        var ie = X("ig", /googleadservices\.com/.test("www.googleadservices.com") ? 1 : 0),
            Ea = Hd(d.google_custom_params);
        f = Hd(f);
        f = Ea.concat(0 < Ea.length && 0 < f.length ? ";" : "", f);
        f = "" == f ? "" : "&".concat("data=", encodeURIComponent(f));
        Ea = Jd(c, d);
        var fa = d.google_conversion_page_url,
            je = d.google_conversion_referrer_url,
            ha = "";
        if (c) {
            var U = a.top == a ? 0 : (U = a.location.ancestorOrigins) ? U[U.length - 1] == a.location.origin ? 1 : 2 : Xa(a.top) ? 1 : 2;
            fa = fa ? fa : 1 == U ? a.top.location.href : a.location.href;
            var vc = "";
            I && H(["509562772", "509562773"], hb, 21);
            if (I && ("509562773" == J(21) || "509562772" == J(21))) {
                for (var x, r = a, V = r; r && r != r.parent;) r = r.parent, Xa(r) && (V = r);
                x = V;
                r = x.location.href;
                if (x === x.top) r = {
                    url: r,
                    F: !0
                };
                else {
                    V = !1;
                    var pb = x.document;
                    pb && pb.referrer && (r = pb.referrer, x.parent === x.top && (V = !0));
                    (x = x.location.ancestorOrigins) && (x = x[x.length - 1]) &&
                    -1 === r.indexOf(x) && (V = !1, r = x);
                    r = {
                        url: r,
                        F: V
                    }
                }
                r.url && fa !== r.url && (vc = r.url)
            }
            ha += X("frm", U);
            ha += X("url", Fd(fa));
            ha += X("ref", Fd(je || c.referrer));
            ha += X("top", Fd(vc))
        }
        a = [h, k, m, p, n, q, w, da, Da, Zd, $d, ae, be, ce, B, de, ee, fe, ge, ea, A, b, M, ie, f, Ea, ha, Md(c), Pd(d.google_additional_params), Pd(d.google_remarketing_only ? {} : d.google_additional_conversion_params), "&hn=" + W("www.googleadservices.com"), Qd(a), Rd(a)].join("");
        c = rb();
        a += 0 < c.length ? "&debug_experiment_id=" + c : "";
        if (!d.google_remarketing_only && !d.google_conversion_domain) {
            c = [X("mid", d.google_conversion_merchant_id), X("fcntr", d.google_basket_feed_country), X("flng", d.google_basket_feed_language), X("dscnt", d.google_basket_discount), X("bttype", d.google_basket_transaction_type)].join("");
            if (d)
                if (h = d.google_conversion_items) {
                    k = [];
                    m = 0;
                    for (p = h.length; m < p; m++) n = h[m], q = [], n && (q.push(Id(n.value)), q.push(Id(n.quantity)), q.push(Id(n.item_id)), q.push(Id(n.start_date)), q.push(Id(n.end_date)), k.push("(" + q.join("*") + ")"));
                    h = 0 < k.length ? "&item=" + k.join("") : ""
                } else h = "";
            else h = "";
            c = [a,
                c, h
            ].join("");
            a = 4E3 < c.length ? [a, X("item", "elngth")].join("") : c
        }
        g += a;
        1 === e || 6 === e ? g += [X("gcp", 1), X("sscte", 1), X("ct_cookie_present", 1)].join("") : 3 == e && (g += X("gcp", 1), g += X("ct_cookie_present", 1));
        lb && (e = ud(), void 0 !== e && (g += X("us_privacy", e || "error")));
        Ld(d) && (g = d.m ? g + X("gbcov", 1) : g + X("gbcov", 0));
        return g
    }

    function Sd(a) {
        if (!Fb) {
            var b = document;
            var c = "IFRAME";
            "application/xhtml+xml" === b.contentType && (c = c.toLowerCase());
            c = b.createElement(c);
            c.style.display = "none";
            c.src = "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE";
            a.body.appendChild(c)
        }
    }

    function Td() {
        return new Image
    }

    function Ud(a, b, c, d, e, f) {
        var g = c.onload_callback;
        e = e && g && g.call ? g : function() {};
        I && H(["512247838", "512247839"], ob ? 1 : 0, 22);
        d += X("async", "1");
        g = c.google_gtm_url_processor;
        Hb(g) && (d = g(d));
        var h = (g = c.opt_image_generator) && g.call,
            k = wb() ? {
                attributionsrc: ""
            } : void 0;
        if (!(f = h || !f)) {
            if (c.google_conversion_domain) var m = !1;
            else try {
                m = Zb(a, b, d, e, k)
            } catch (p) {
                m = !1
            }
            f = !m
        }
        f && (a = Td, h && (a = g), a = a(), a.src = d, wb() && a.setAttribute("attributionsrc", ""), a.onload = e)
    }

    function Vd(a, b) {
        I && "376635471" == J(2) && ("complete" === b.readyState ? Sd(b) : a.addEventListener ? a.addEventListener("load", function() {
            Sd(b)
        }) : a.attachEvent("onload", function() {
            Sd(b)
        }))
    }

    function Wd(a) {
        if ("landing" === a.google_conversion_type || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough) return !1;
        a.google_conversion_date = new Date;
        a.google_conversion_time = a.google_conversion_date.getTime();
        a.google_conversion_snippets = "number" === typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ? a.google_conversion_snippets + 1 : 1;
        void 0 === a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time);
        a.google_conversion_js_version =
            "9";
        0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 3);
        !1 !== a.google_enable_display_cookie_match && (a.google_enable_display_cookie_match = !0);
        return !0
    }

    function Xd(a, b) {
        function c(f) {
            d[f] = b && null != b[f] ? b[f] : a[f]
        }
        for (var d = {}, e = 0; e < Dd.length; e++) c(Dd[e]);
        c("onload_callback");
        return d
    }

    function Yd(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c],
                e = void 0;
            d.hasOwnProperty("google_business_vertical") ? (e = d.google_business_vertical, b[e] = b[e] || {
                google_business_vertical: e
            }) : (e = "", Object.prototype.hasOwnProperty.call(b, e) || (b[e] = {}));
            e = b[e];
            for (var f = t(Object, "keys").call(Object, d).filter(function(k) {
                    return Ad.hasOwnProperty(k)
                }), g = 0; g < f.length; g++) {
                var h = f[g];
                h in e || (e[h] = []);
                e[h].push(d[h])
            }
        }
        return t(Object, "values").call(Object, b)
    }

    function Od() {
        var a = "";
        vb() && (a = Eb().map(function(b) {
            return b.join("-")
        }).join("_"));
        return X("li", a)
    }

    function Qd(a) {
        if (!nb || !a.__gsaExp || !a.__gsaExp.id) return "";
        a = a.__gsaExp.id;
        if (!Hb(a)) return "";
        try {
            var b = Number(a());
            return isNaN(b) ? "" : X("gsaexp", b)
        } catch (c) {
            return ""
        }
    }

    function Rd(a) {
        function b(d, e) {
            null != e && c.push(d + "=" + encodeURIComponent(e))
        }
        if (!ub()) return "";
        a = xd(a);
        if (!a) return "";
        var c = [];
        b("&uaa", a.architecture);
        b("&uab", a.bitness);
        b("&uam", a.model);
        b("&uap", a.platform);
        b("&uapv", a.platformVersion);
        null != a.wow64 && b("&uaw", a.wow64 ? "1" : "0");
        a.fullVersionList && b("&uafvl", a.fullVersionList.map(function(d) {
            return encodeURIComponent(d.brand || "") + ";" + encodeURIComponent(d.version || "")
        }).join("|"));
        return c.join("")
    }

    function Pd(a) {
        if (!a) return "";
        var b = "",
            c;
        for (c in a) a.hasOwnProperty(c) && (b += X(c, a[c]));
        return b
    }

    function Ld(a) {
        return (a = a.google_gtm_experiments) && a.gbcov ? !0 : !1
    }

    function Kd(a) {
        return a.google_gcl_cookie_prefix && "_gcl" !== a.google_gcl_cookie_prefix && Bd.test(a.google_gcl_cookie_prefix) ? a.google_gcl_cookie_prefix : ""
    }

    function he(a, b) {
        if (!b.google_remarketing_only && ke(a, b)) {
            a = b.google_additional_conversion_params || {};
            var c = b.google_gtm_experiments;
            a.capi = c && c.apcm ? "2" : "1";
            b.google_additional_conversion_params = a
        }
    }

    function ke(a, b) {
        if (b.google_transport_url) return !1;
        if ((b = b.google_gtm_experiments) && b.apcm) return !0;
        if (!b || !b.capi) return !1;
        a: {
            if (!Cd) {
                cb("A4w7HyCK6tScR/6oxyP31X0MsYLu0ZlIdOBV/7GEXwRIQZy3/qaAa0jm3+mKd8mQDUB6svQWIUC2X/gyNdSvbgAAAACUeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJBdHRyaWJ1dGlvblJlcG9ydGluZ0Nyb3NzQXBwV2ViIiwiZXhwaXJ5IjoxNzA3MjYzOTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d", a);
                if (!Tb() && !cb(le() ? "" : "A2kc5o2ErHAbqJvF2MHSdYtnc2Bp3n6Jn2kNeko6SgHH6zXBHn0+4BbAW2No9ylVJMkzJAPwMqCVHqXm+IF1DgQAAACKeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2OTUxNjc5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", a)) {
                    a = !1;
                    break a
                }
                Cd = !0
            }
            a = Tb()
        }
        return a
    }

    function me(a, b, c, d, e) {
        a = Nd(a, b, c, d, 7, e);
        b = "AW-" + d.google_conversion_id;
        (d = d.google_conversion_label) && (b = b + "/" + d);
        a: {
            d = b;b = void 0;
            try {
                b = O.querySelector('iframe[data-tagging-id="' + d + '"]')
            } catch (f) {}
            if (b) {
                if ((c = Number(b.dataset.loadTime)) && 6E4 > Mb().getTime() - c) {
                    L(9);
                    break a
                }
            } else try {
                if (50 <= O.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    L(10);
                    break a
                }
            } catch (f) {}
            Sb(a, void 0, {
                allow: "join-ad-interest-group"
            }, {
                taggingId: d,
                loadTime: Mb().getTime()
            }, b)
        }
    }

    function le() {
        return !!t("www.googleadservices.com", "endsWith").call("www.googleadservices.com", "google.com")
    };
    var ne = !1,
        oe = document.currentScript && document.currentScript.src || "";

    function pe(a, b, c) {
        try {
            if (!ne && (ne = !0, !c.google_gtm)) {
                var d = void 0,
                    e = void 0,
                    f = E(a.location.href, "gtm_debug");
                qe(f) && (d = 2);
                d || 0 !== b.referrer.indexOf("https://tagassistant.google.com/") || (d = 3);
                !d && 0 <= va(b.cookie.split("; "), "__TAG_ASSISTANT=x") && (d = 4);
                d || (e = b.documentElement.getAttribute("data-tag-assistant-present"), qe(e) && (d = 5));
                if (d) {
                    var g = "AW-" + (c.google_conversion_id || "");
                    if (!a["google.tagmanager.debugui2.queue"]) {
                        a["google.tagmanager.debugui2.queue"] = [];
                        var h = new ra(sa, "https://www.googletagmanager.com/debug/bootstrap");
                        var k = Pa(h instanceof ra && h.constructor === ra && h.g === ta ? h.i : "type_error:Const");
                        c = {
                            id: g,
                            src: "LEGACY",
                            cond: d
                        };
                        var m = Na.exec(Ma(k).toString()),
                            p = m[3] || "";
                        var n = Pa(m[1] + Qa("?", m[2] || "", c) + Qa("#", p));
                        var q = db("SCRIPT", b);
                        Wa(q, n);
                        var w = b.getElementsByTagName("script")[0];
                        w && w.parentNode && w.parentNode.insertBefore(q, w)
                    }
                    a["google.tagmanager.debugui2.queue"].push({
                        messageType: "LEGACY_CONTAINER_STARTING",
                        data: {
                            id: g,
                            scriptSource: oe
                        }
                    })
                }
            }
        } catch (da) {}
    }

    function qe(a) {
        if (null == a || 0 === a.length) return !1;
        a = Number(a);
        var b = Date.now();
        return a < b + 3E5 && a > b - 9E5
    };

    function re(a, b) {
        a.onload_callback = a.onload_callback && "function" == typeof a.onload_callback.call ? Ed(b, a.onload_callback) : function() {}
    }

    function se(a, b, c, d) {
        pe(a, c, d);
        vb() && (Bb(2), d.google_gtm && Db(K(zb), a));
        var e = !1;
        if (3 != d.google_conversion_format) return !1;
        try {
            if (Wd(d)) {
                d.google_remarketing_only && d.google_enable_display_cookie_match && !Fb && I && H(["376635470", "376635471"], eb, 2);
                d.google_remarketing_only && !d.google_conversion_domain && I && H(["759238990", "759238991"], jb, 13);
                !d.google_remarketing_only || d.google_conversion_domain || I && ("759248991" == J(14) || "759248990" == J(14)) || I && H(["759248990", "759248991"], ib, 14);
                !1 !== d.google_conversion_linker &&
                    (d.google_gtm || sd(d.google_gcl_cookie_prefix));
                if (1 == d.google_remarketing_only && null != d.google_gtag_event_data && null != d.google_gtag_event_data.items && d.google_gtag_event_data.items.constructor === Array && 0 < d.google_gtag_event_data.items.length) te(a, b, c, d);
                else {
                    var f = d.google_gtm_experiments && d.google_gtm_experiments.ccmpp;
                    if (d.google_conversion_domain || d.google_transport_url && "https://pagead2.googlesyndication.com/" !== d.google_transport_url) f = !1;
                    var g = !1;
                    le() && (g = !0);
                    var h = d.google_additional_params;
                    h && h.dg && (g = "e" === h.dg);
                    h = function(k, m, p) {
                        m = void 0 === m ? !0 : m;
                        p = void 0 === p ? !0 : p;
                        Ud(a, c, d, Nd(a, b, c, d, k), m, p)
                    };
                    d.google_gtm_experiments && d.google_gtm_experiments.fledge && (d.google_additional_params = d.google_additional_params || {}, d.google_additional_params.fledge = "1");
                    d.google_remarketing_only ? h(2) : g ? (re(d, f ? 3 : 2), he(c, d), h(1), h(3), f && h(6, !0, !1)) : (re(d, f ? 2 : 1), he(c, d), h(0), f && h(5, !0, !1), Ld(d) && rd(c, Kd(d)) && (d.m = !0, h(0, !1)));
                    d.google_gtm_experiments && d.google_gtm_experiments.fledge && me(a, b, c, d)
                }
                d.google_remarketing_only &&
                    d.google_enable_display_cookie_match && Vd(a, c);
                e = !0
            }
        } catch (k) {}
        return e
    }

    function te(a, b, c, d) {
        var e = Yd(d.google_gtag_event_data.items);
        re(d, e.length);
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            d.google_gtm_experiments && d.google_gtm_experiments.fledge && (d.google_additional_params = d.google_additional_params || {}, d.google_additional_params.fledge = "1");
            Ud(a, c, d, Nd(a, b, c, d, 2, g), !0, !0);
            d.google_gtm_experiments && d.google_gtm_experiments.fledge && me(a, b, c, d, g);
            d.google_conversion_time = d.google_conversion_time + 1
        }
    };
    I = new function() {
        var a = [];
        var b = 0,
            c;
        for (c in tb) a[b++] = tb[c];
        a = void 0 === a ? [] : a;
        this.i = {};
        this.g = {};
        for (b = 0; b < a.length; ++b) this.g[a[b]] = ""
    };
    H(["466465925", "466465926"], gb, 20);
    ub() && zd();
    I && H(["592230570", "592230571"], fb, 16);
    vb() && (Bb(1), Cb());

    function ue(a, b, c) {
        function d(m, p) {
            var n = new Image;
            n.onload = m;
            n.src = p
        }

        function e() {
            --f;
            if (0 >= f) {
                var m = Vb(a, !1),
                    p = m[b];
                p && (delete m[b], (m = p[0]) && m.call && m())
            }
        }
        var f = c.length + 1;
        if (2 == c.length) {
            var g = c[0],
                h = c[1];
            0 <= Ta(g, 0, "rmt_tld", g.search(Ua)) && 0 <= Ta(g, 0, "ipr", g.search(Ua)) && !h.match(Ra)[6] && (h += Sa(g), c[1] = F(h, "rmt_tld", "1"))
        }
        for (g = 0; g < c.length; g++) {
            h = c[g];
            var k = E(h, "fmt");
            switch (parseInt(k, 10)) {
                case 1:
                case 2:
                    (k = a.document.getElementById("goog_conv_iframe")) && !k.src ? Sb(h, e, void 0, void 0, k, !1) : d(e,
                        h);
                    break;
                case 4:
                    Zb(a, a.document, h, e);
                    break;
                case 5:
                    if (a.navigator && a.navigator.sendBeacon)
                        if (a.navigator.sendBeacon(h, "")) {
                            e();
                            break
                        } else h = F(h, "sendb", 2);
                    h = F(h, "fmt", 3);
                default:
                    d(e, h)
            }
        }
        e()
    }
    var ve = ["GooglemKTybQhCsO"],
        Y = v;
    ve[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + ve[0]);
    for (var Z; ve.length && (Z = ve.shift());) ve.length || void 0 === ue ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = ue;
    window.google_trackConversion = function(a) {
        var b = window,
            c = navigator,
            d = document;
        a = Xd(b, a);
        a.google_conversion_format = 3;
        var e = !!a.google_gtm;
        K(ac).i(e);
        return se(b, c, d, a)
    };
}).call(this);