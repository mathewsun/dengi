function location_hash_update(hash, loc) {
    history.replaceState ? history.replaceState({
        time: (new Date).getTime(),
        hash: hash
    }, null, (void 0 !== loc && loc ? loc : "") + (void 0 !== hash && hash ? hash : "")) : location.hash = hash
}

function location_hash_remove() {
    var scrollV, scrollH, loc = window.location;
    "pushState" in history ? history.pushState("", document.title, loc.pathname + loc.search) : (scrollV = document.body.scrollTop, scrollH = document.body.scrollLeft, loc.hash = "", document.body.scrollTop = scrollV, document.body.scrollLeft = scrollH)
}

function touchclick() {
    return $(".no-touchevents").length ? "click" : "touchstart"
}! function (e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function i(e) {
        var t = b.className,
            n = Modernizr._config.classPrefix || "";
        if (w && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), w ? b.className.baseVal = t : b.className = t)
    }

    function a(e, t) {
        if ("object" == typeof e)
            for (var n in e) x(e, n) && a(n, e[n]);
        else {
            var r = (e = e.toLowerCase()).split("."),
                o = Modernizr[r[0]];
            if (2 == r.length && (o = o[r[1]]), void 0 !== o) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : w ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function u(e, n, r, o) {
        var i, a, u, c, f = "modernizr",
            d = s("div"),
            p = function l() {
                var e = t.body;
                return e || ((e = s(w ? "svg" : "body")).fake = !0), e
            }();
        if (parseInt(r, 10))
            for (; r--;)(u = s("div")).id = o ? o[r] : f + (r + 1), d.appendChild(u);
        return (i = s("style")).type = "text/css", i.id = "s" + f, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), a = n(d, e), p.fake ? (p.parentNode.removeChild(p), b.style.overflow = c, b.offsetHeight) : d.parentNode.removeChild(d), !!a
    }

    function c(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function f(e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function d(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function m(e) {
        return e.replace(/([A-Z])/g, function (e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function h(t, n, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, t, n);
            var i = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (i) {
                i[i.error ? "error" : "log"].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !n && t.currentStyle && t.currentStyle[r];
        return o
    }

    function v(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(m(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--;) i.push("(" + m(t[o]) + ":" + r + ")");
            return u("@supports (" + (i = i.join(" or ")) + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == h(e, null, "position")
            })
        }
        return n
    }

    function g(e, t, o, i) {
        function a() {
            u && (delete F.style, delete F.modElem)
        }
        if (i = !r(i, "undefined") && i, !r(o, "undefined")) {
            var l = v(e, o);
            if (!r(l, "undefined")) return l
        }
        for (var u, d, p, m, h, g = ["modernizr", "tspan", "samp"]; !F.style && g.length;) u = !0, F.modElem = s(g.shift()), F.style = F.modElem.style;
        for (p = e.length, d = 0; d < p; d++)
            if (m = e[d], h = F.style[m], c(m, "-") && (m = f(m)), F.style[m] !== n) {
                if (i || r(o, "undefined")) return a(), "pfx" != t || m;
                try {
                    F.style[m] = o
                } catch (y) {}
                if (F.style[m] != h) return a(), "pfx" != t || m
            } return a(), !1
    }

    function y(e, t, n, o, i) {
        var a = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + z.join(a + " ") + a).split(" ");
        return r(t, "string") || r(t, "undefined") ? g(s, t, o, i) : function p(e, t, n) {
            var o;
            for (var i in e)
                if (e[i] in t) return !1 === n ? e[i] : r(o = t[e[i]], "function") ? d(o, n || t) : o;
            return !1
        }(s = (e + " " + P.join(a + " ") + a).split(" "), t, n)
    }

    function C(e, t, r) {
        return y(e, n, n, t, r)
    }
    var _ = [],
        E = [],
        S = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout(function () {
                    t(n[e])
                }, 0)
            },
            addTest: function (e, t, n) {
                E.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function (e) {
                E.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function () {};
    Modernizr.prototype = S, Modernizr = new Modernizr;
    var x, b = t.documentElement,
        w = "svg" === b.nodeName.toLowerCase();
    w || function (e, t) {
            function n(e, t) {
                var n = e.createElement("p"),
                    r = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
            }

            function r() {
                var e = C.elements;
                return "string" == typeof e ? e.split(" ") : e
            }

            function i(e) {
                var t = y[e[v]];
                return t || (t = {}, g++, e[v] = g, y[g] = t), t
            }

            function a(e, n, r) {
                return n || (n = t), f ? n.createElement(e) : (r || (r = i(n)), !(o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e)).canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o));
                var o
            }

            function l(e, t) {
                t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                    return C.shivMethods ? a(n, e, t) : t.createElem(n)
                }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(C, t.frag)
            }

            function u(e) {
                e || (e = t);
                var r = i(e);
                return !C.shivCSS || c || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), f || l(e, r), e
            }
            var c, f, p = e.html5 || {},
                m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                v = "_html5shiv",
                g = 0,
                y = {};
            ! function () {
                try {
                    var e = t.createElement("a");
                    e.innerHTML = "<xyz></xyz>", c = "hidden" in e, f = 1 == e.childNodes.length || function () {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                    }()
                } catch (n) {
                    f = c = !0
                }
            }();
            var C = {
                elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
                version: "3.7.3",
                shivCSS: !1 !== p.shivCSS,
                supportsUnknownElements: f,
                shivMethods: !1 !== p.shivMethods,
                type: "default",
                shivDocument: u,
                createElement: a,
                createDocumentFragment: function s(e, n) {
                    if (e || (e = t), f) return e.createDocumentFragment();
                    for (var o = (n = n || i(e)).frag.cloneNode(), a = 0, s = r(), l = s.length; a < l; a++) o.createElement(s[a]);
                    return o
                },
                addElements: function o(e, t) {
                    var n = C.elements;
                    "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), C.elements = n + " " + e, u(t)
                }
            };
            e.html5 = C, u(t), "object" == typeof module && module.exports && (module.exports = C)
        }(void 0 !== e ? e : this, t),
        function () {
            var e = {}.hasOwnProperty;
            x = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) {
                return t in e && r(e.constructor.prototype[t], "undefined")
            } : function (t, n) {
                return e.call(t, n)
            }
        }(), S._l = {}, S.on = function (e, t) {
            this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () {
                Modernizr._trigger(e, Modernizr[e])
            }, 0)
        }, S._trigger = function (e, t) {
            if (this._l[e]) {
                var n = this._l[e];
                setTimeout(function () {
                    var e;
                    for (e = 0; e < n.length; e++)(0, n[e])(t)
                }, 0), delete this._l[e]
            }
        }, Modernizr._q.push(function () {
            S.addTest = a
        });
    var T = S._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    S._prefixes = T, Modernizr.addTest("csspointerevents", function () {
        var e = s("a").style;
        return e.cssText = "pointer-events:auto", "auto" === e.pointerEvents
    });
    var N = S.testStyles = u;
    Modernizr.addTest("touchevents", function () {
        var n;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else {
            var r = ["@media (", T.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            N(r, function (e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    });
    var j = "Moz O ms Webkit",
        z = S._config.usePrefixes ? j.split(" ") : [];
    S._cssomPrefixes = z;
    var P = S._config.usePrefixes ? j.toLowerCase().split(" ") : [];
    S._domPrefixes = P;
    var k = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function () {
        delete k.elem
    });
    var F = {
        style: k.elem.style
    };
    Modernizr._q.unshift(function () {
            delete F.style
        }), S.testAllProps = y, S.testAllProps = C, Modernizr.addTest("cssanimations", C("animationName", "a", !0)), Modernizr.addTest("csstransitions", C("transition", "all", !0)), S.testProp = function (e, t, r) {
            return g([e], n, t, r)
        },
        function o() {
            var e, t, n, o, i, s;
            for (var l in E)
                if (E.hasOwnProperty(l)) {
                    if (e = [], (t = E[l]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                        for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                    for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) 1 === (s = e[i].split(".")).length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), _.push((o ? "" : "no-") + s.join("-"))
                }
        }(), i(_), delete S.addTest, delete S.addAsyncTest;
    for (var D = 0; D < Modernizr._q.length; D++) Modernizr._q[D]();
    e.Modernizr = Modernizr
}(window, document),
function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        var c = (b = b || d).createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.2.1",
        r = function (a, b) {
            return new r.fn.init(a, b)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function (a, b) {
            return b.toUpperCase()
        };

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && 0 < b && b - 1 in a)
    }
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function () {
            return f.call(this)
        },
        get: function (a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function (a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function (a) {
            return r.each(this, a)
        },
        map: function (a) {
            return this.pushStack(r.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(0 <= c && c < b ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], g !== (d = a[b]) && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (f = e ? (e = !1, c && Array.isArray(c) ? c : []) : c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === r.type(a)
        },
        isWindow: function (a) {
            return null != a && a === a.window
        },
        isNumeric: function (a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function (a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a) || (b = e(a)) && ("function" != typeof (c = l.call(b, "constructor") && b.constructor) || m.call(c) !== n))
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        },
        globalEval: function (a) {
            p(a)
        },
        camelCase: function (a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        each: function (a, b) {
            var c, d = 0;
            if (w(a))
                for (c = a.length; d < c && !1 !== b.call(a[d], d, a[d]); d++);
            else
                for (d in a)
                    if (!1 === b.call(a[d], d, a[d])) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(s, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var e = [], f = 0, g = a.length, h = !c; f < g; f++) !b(a[f], f) !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; f < d; f++) null != (e = b(a[f], f, c)) && h.push(e);
            else
                for (f in a) null != (e = b(a[f], f, c)) && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), (e = function () {
                return a.apply(b || this, d.concat(f.call(arguments)))
            }).guid = a.guid = a.guid || r.guid++, e
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });
    var x = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function (a, b) {
                return a === b && (l = !0), 0
            },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d != d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function (a, b) {
                return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            da = function () {
                m()
            },
            ea = ta(function (a) {
                return !0 === a.disabled && ("form" in a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                    } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), h = (o = g(a)).length; h--;) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];
            return function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            for (var c = a.split("|"), e = c.length; e--;) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return function (b) {
                return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function pa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        for (b in c = ga.support = {}, f = ga.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName
            }, m = ga.setDocument = function (a) {
                var b, e, g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement && (o = (n = g).documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
                    return a.className = "i", !a.getAttribute("className")
                }), c.getElementsByTagName = ja(function (a) {
                    return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
                }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
                    return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
                }), c.getById ? (d.filter.ID = function (a) {
                    var b = a.replace(_, aa);
                    return function (a) {
                        return a.getAttribute("id") === b
                    }
                }, d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }) : (d.filter.ID = function (a) {
                    var b = a.replace(_, aa);
                    return function (a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }, d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                        var c, d, e, f = b.getElementById(a);
                        if (f) {
                            if ((c = f.getAttributeNode("id")) && c.value === a) return [f];
                            for (e = b.getElementsByName(a), d = 0; f = e[d++];)
                                if ((c = f.getAttributeNode("id")) && c.value === a) return [f]
                        }
                        return []
                    }
                }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                } : function (a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" !== a) return f;
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                    if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
                }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                }), ja(function (a) {
                    a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                    c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
                }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function (a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, B = b ? function (a, b) {
                    if (a === b) return l = !0, 0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d || (1 & (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
                } : function (a, b) {
                    if (a === b) return l = !0, 0;
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        g = [a],
                        h = [b];
                    if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                    if (e === f) return la(a, b);
                    for (c = a; c = c.parentNode;) g.unshift(c);
                    for (c = b; c = c.parentNode;) h.unshift(c);
                    for (; g[d] === h[d];) d++;
                    return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
                }), n
            }, ga.matches = function (a, b) {
                return ga(a, null, null, b)
            }, ga.matchesSelector = function (a, b) {
                if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return 0 < ga(b, n, null, [a]).length
            }, ga.contains = function (a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b)
            }, ga.attr = function (a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }, ga.escape = function (a) {
                return (a + "").replace(ba, ca)
            }, ga.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, ga.uniqueSort = function (a) {
                var b, d = [],
                    e = 0,
                    f = 0;
                if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                    for (; b = a[f++];) b === a[f] && (e = d.push(f));
                    for (; e--;) a.splice(d[e], 1)
                }
                return k = null, a
            }, e = ga.getText = function (a) {
                var b, c = "",
                    d = 0,
                    f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                    } else if (3 === f || 4 === f) return a.nodeValue
                } else
                    for (; b = a[d++];) c += e(b);
                return c
            }, (d = ga.selectors = {
                cacheLength: 50,
                createPseudo: ia,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (a) {
                        return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function (a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                    },
                    PSEUDO: function (a) {
                        var b, c = !a[6] && a[2];
                        return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(_, aa).toLowerCase();
                        return "*" === a ? function () {
                            return !0
                        } : function (a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function (a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (a, b, c) {
                        return function (d) {
                            var e = ga.attr(d, a);
                            return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && -1 < e.indexOf(c) : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? -1 < (" " + e.replace(O, " ") + " ").indexOf(c) : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                        }
                    },
                    CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        } : function (b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h,
                                t = !1;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (m = b; m = m[p];)
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (t = (n = (j = (k = (l = (m = q)[u] || (m[u] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] || [])[0] === w && j[1]) && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                        if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [w, n, t];
                                            break
                                        }
                                } else if (s && (t = n = (j = (k = (l = (m = b)[u] || (m[u] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] || [])[0] === w && j[1]), !1 === t)
                                    for (;
                                        (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && ((k = (l = m[u] || (m[u] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] = [w, t]), m !== b)););
                                return (t -= e) === d || t % d == 0 && 0 <= t / d
                            }
                        }
                    },
                    PSEUDO: function (a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : 1 < e.length ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                            for (var d, f = e(a, b), g = f.length; g--;) a[d = I(a, f[g])] = !(c[d] = f[g])
                        }) : function (a) {
                            return e(a, 0, c)
                        }) : e
                    }
                },
                pseudos: {
                    not: ia(function (a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(P, "$1"));
                        return d[u] ? ia(function (a, b, c, e) {
                            for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, e, f) {
                            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: ia(function (a) {
                        return function (b) {
                            return 0 < ga(a, b).length
                        }
                    }),
                    contains: ia(function (a) {
                        return a = a.replace(_, aa),
                            function (b) {
                                return -1 < (b.textContent || b.innerText || e(b)).indexOf(a)
                            }
                    }),
                    lang: ia(function (a) {
                        return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                            function (b) {
                                var c;
                                do {
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                                } while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function (a) {
                        return a === o
                    },
                    focus: function (a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: oa(!1),
                    disabled: oa(!0),
                    checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                    },
                    empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function (a) {
                        return X.test(a.nodeName)
                    },
                    input: function (a) {
                        return W.test(a.nodeName)
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: pa(function () {
                        return [0]
                    }),
                    last: pa(function (a, b) {
                        return [b - 1]
                    }),
                    eq: pa(function (a, b, c) {
                        return [c < 0 ? c + b : c]
                    }),
                    even: pa(function (a, b) {
                        for (var c = 0; c < b; c += 2) a.push(c);
                        return a
                    }),
                    odd: pa(function (a, b) {
                        for (var c = 1; c < b; c += 2) a.push(c);
                        return a
                    }),
                    lt: pa(function (a, b, c) {
                        for (var d = c < 0 ? c + b : c; 0 <= --d;) a.push(d);
                        return a
                    }),
                    gt: pa(function (a, b, c) {
                        for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }).pseudos.nth = d.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function ra() {}

        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function (b, c, e) {
                for (; b = b[d];)
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function (b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || g)
                            if (k = (l = b[u] || (b[u] = {}))[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                                if ((k[f] = m)[2] = a(b, c, i)) return !0
                            } return !1
            }
        }

        function ua(a) {
            return 1 < a.length ? function (b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || function va(a, b, c) {
                        for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
                        return c
                    }(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d)
                    for (j = wa(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        for (k = r.length; k--;)(l = r[k]) && -1 < (j = e ? I(f, l) : m[k]) && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
                    return a === b
                }, h, !0), l = ta(function (a) {
                    return -1 < I(b, a)
                }, h, !0), m = [function (a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if ((c = d.filter[a[i].type].apply(null, a[i].matches))[u]) {
                        for (e = ++i; e < f && !d.relative[a[e].type]; e++);
                        return xa(1 < i && ua(m), 1 < i && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                } return ua(m)
        }

        function za(a, b) {
            var c = 0 < b.length,
                e = 0 < a.length,
                f = function (f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            for (o = 0, g || l.ownerDocument === n || (m(l), h = !p); q = a[o++];)
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                } k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        for (o = 0; q = b[o++];) q(t, u, g, h);
                        if (f) {
                            if (0 < r)
                                for (; s--;) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && 0 < u.length && 1 < r + b.length && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h;) {
                for (g in c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                        value: c,
                        type: e[0].replace(P, " ")
                    }), h = h.slice(c.length)), d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        }, h = ga.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                for (b || (b = g(a)), c = b.length; c--;)(f = ya(b[c]))[u] ? d.push(f) : e.push(f);
                (f = A(a, za(e, d))).selector = a
            }
            return f
        }, i = ga.select = function (a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (2 < (i = n[0] = n[0].slice(0)).length && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (!(b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0])) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                for (f = V.needsContext.test(a) ? 0 : i.length; f-- && (j = i[f], !d.relative[k = j.type]);)
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), !(a = e.length && sa(i))) return G.apply(c, e), c;
                        break
                    }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function (a, b, c) {
            var d;
            if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function (a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                } return d
        },
        z = function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        A = r.expr.match.needsContext;

    function B(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;

    function E(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function (a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function (a) {
            return -1 < i.call(b, a) !== c
        }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
            return -1 < i.call(b, a) !== c && 1 === a.nodeType
        }))
    }
    r.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, r.fn.extend({
        find: function (a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
                for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return 1 < d ? r.uniqueSort(c) : c
        },
        filter: function (a) {
            return this.pushStack(E(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(E(this, a || [], !0))
        },
        is: function (a) {
            return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (r.fn.init = function (a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || F, "string" != typeof a) return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
        if (!(e = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : G.exec(a)) || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
            if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
                for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
            return this
        }
        return (f = d.getElementById(e[2])) && (this[0] = f, this.length = 1), this
    }).prototype = r.fn, F = r(d);
    var I = /^(?:parents|prev(?:Until|All))/,
        J = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function K(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }
    r.fn.extend({
        has: function (a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function (a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? -1 < g.index(c) : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        } return this.pushStack(1 < f.length ? r.uniqueSort(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), r.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return y(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function (a) {
            return K(a, "nextSibling")
        },
        prev: function (a) {
            return K(a, "previousSibling")
        },
        nextAll: function (a) {
            return y(a, "nextSibling")
        },
        prevAll: function (a) {
            return y(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function (a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return z(a.firstChild)
        },
        contents: function (a) {
            return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes))
        }
    }, function (a, b) {
        r.fn[a] = function (c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), 1 < this.length && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;

    function N(a) {
        return a
    }

    function O(a) {
        throw a
    }

    function P(a, b, c, d) {
        var e;
        try {
            a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
        } catch (a) {
            c.apply(void 0, [a])
        }
    }
    r.Callbacks = function (a) {
        a = "string" == typeof a ? function M(a) {
            var b = {};
            return r.each(a.match(L) || [], function (a, c) {
                b[c] = !0
            }), b
        }(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function () {
                for (e = e || a.once, d = b = !0; g.length; h = -1)
                    for (c = g.shift(); ++h < f.length;) !1 === f[h].apply(c[0], c[1]) && a.stopOnFalse && (h = f.length, c = !1);
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function () {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        r.each(b, function (b, c) {
                            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function () {
                    return r.each(arguments, function (a, b) {
                        for (var c; - 1 < (c = r.inArray(b, f, c));) f.splice(c, 1), c <= h && h--
                    }), this
                },
                has: function (a) {
                    return a ? -1 < r.inArray(a, f) : 0 < f.length
                },
                empty: function () {
                    return f && (f = []), this
                },
                disable: function () {
                    return e = g = [], f = c = "", this
                },
                disabled: function () {
                    return !f
                },
                lock: function () {
                    return e = g = [], c || b || (f = c = ""), this
                },
                locked: function () {
                    return !!e
                },
                fireWith: function (a, c) {
                    return e || (c = [a, (c = c || []).slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function () {
                    return j.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return j
    }, r.extend({
        Deferred: function (b) {
            var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
                d = "pending",
                e = {
                    state: function () {
                        return d
                    },
                    always: function () {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function (a) {
                        return e.then(null, a)
                    },
                    pipe: function () {
                        var a = arguments;
                        return r.Deferred(function (b) {
                            r.each(c, function (c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function () {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function (b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function () {
                                var h = this,
                                    i = arguments,
                                    j = function () {
                                        var a, j;
                                        if (!(b < f)) {
                                            if ((a = d.apply(h, i)) === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function () {
                                        try {
                                            j()
                                        } catch (a) {
                                            r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), f <= b + 1 && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i))
                                        }
                                    };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function (a) {
                            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? r.extend(a, e) : e
                    }
                },
                f = {};
            return r.each(c, function (a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function () {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function (a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function (a) {
                    return function (c) {
                        d[a] = this, e[a] = 1 < arguments.length ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                    }
                };
            if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            for (; c--;) P(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, r.readyException = function (b) {
        a.setTimeout(function () {
            throw b
        })
    };
    var R = r.Deferred();

    function S() {
        d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready()
    }
    r.fn.ready = function (a) {
        return R.then(a)["catch"](function (a) {
            r.readyException(a)
        }), this
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (a) {
            (!0 === a ? --r.readyWait : r.isReady) || ((r.isReady = !0) !== a && 0 < --r.readyWait || R.resolveWith(d, [r]))
        }
    }), r.ready.then = R.then, "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
    var T = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c))
                for (h in e = !0, c) T(a, b, h, c[h], !0, f, g);
            else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (b = g ? (b.call(a, d), null) : (j = b, function (a, b, c) {
                    return j.call(r(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        U = function (a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function V() {
        this.expando = r.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function (a) {
            var b = a[this.expando];
            return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function (a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function (a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function (a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function (a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    c = (b = Array.isArray(b) ? b.map(r.camelCase) : (b = r.camelCase(b)) in d ? [b] : b.match(L) || []).length;
                    for (; c--;) delete d[b[c]]
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function (a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var W = new V,
        X = new V,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function _(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), "string" == typeof (c = a.getAttribute(d))) {
                try {
                    c = function $(a) {
                        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a)
                    }(c)
                } catch (e) {}
                X.set(a, b, c)
            } else c = void 0;
        return c
    }
    r.extend({
        hasData: function (a) {
            return X.hasData(a) || W.hasData(a)
        },
        data: function (a, b, c) {
            return X.access(a, b, c)
        },
        removeData: function (a, b) {
            X.remove(a, b)
        },
        _data: function (a, b, c) {
            return W.access(a, b, c)
        },
        _removeData: function (a, b) {
            W.remove(a, b)
        }
    }), r.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 !== a) return "object" == typeof a ? this.each(function () {
                X.set(this, a)
            }) : T(this, function (b) {
                var c;
                if (f && void 0 === b) {
                    if (void 0 !== (c = X.get(f, a))) return c;
                    if (void 0 !== (c = _(f, a))) return c
                } else this.each(function () {
                    X.set(this, a, b)
                })
            }, null, b, 1 < arguments.length, null, !0);
            if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
                for (c = g.length; c--;) g[c] && (0 === (d = g[c].name).indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
                W.set(f, "hasDataAttrs", !0)
            }
            return e
        },
        removeData: function (a) {
            return this.each(function () {
                X.remove(this, a)
            })
        }
    }), r.extend({
        queue: function (a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b);
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, function () {
                r.dequeue(a, b)
            }, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return W.get(a, c) || W.access(a, c, {
                empty: r.Callbacks("once memory").add(function () {
                    W.remove(a, [b + "queue", c])
                })
            })
        }
    }), r.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                r.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)(c = W.get(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
        ca = ["Top", "Right", "Bottom", "Left"],
        da = function (a, b) {
            return "none" === (a = b || a).style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
        },
        ea = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            for (f in e = c.apply(a, d || []), b) a.style[f] = g[f];
            return e
        };

    function fa(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function () {
                return d.cur()
            } : function () {
                return r.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
        if (k && k[3] !== j)
            for (j = j || k[3], c = c || [], k = +i || 1; k /= f = f || ".5", r.style(a, b, k + j), f !== (f = h() / i) && 1 !== f && --g;);
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var ga = {};

    function ha(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = ga[d];
        return e || (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e)
    }

    function ia(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++)(d = a[f]).style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }
    r.fn.extend({
        show: function () {
            return ia(this, !0)
        },
        hide: function () {
            return ia(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                da(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ja = /^(?:checkbox|radio)$/i,
        ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        la = /^$|\/(?:java|ecma)script/i,
        ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function na(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c
    }

    function oa(a, b) {
        for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"))
    }
    ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;
    var pa = /<|&#?\w+;/;

    function qa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if ((f = a[n]) || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (pa.test(f)) {
            for (g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0]; k--;) g = g.lastChild;
            r.merge(m, g.childNodes), (g = l.firstChild).textContent = ""
        } else m.push(b.createTextNode(f));
        for (l.textContent = "", n = 0; f = m[n++];)
            if (d && -1 < r.inArray(f, d)) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c)
            for (k = 0; f = g[k++];) la.test(f.type || "") && c.push(f);
        return l
    }! function () {
        var b = d.createDocumentFragment().appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var ra = d.documentElement,
        sa = /^key/,
        ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ua = /^([^.]*)(?:\.(.+)|)/;

    function va() {
        return !0
    }

    function wa() {
        return !1
    }

    function xa() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ya(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            for (h in "string" != typeof c && (d = d || c, c = void 0), b) ya(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = wa;
        else if (!e) return a;
        return 1 === f && (g = e, (e = function (a) {
            return r().off(a), g.apply(this, arguments)
        }).guid = g.guid || (g.guid = r.guid++)), a.each(function () {
            r.event.add(this, b, e, d, c)
        })
    }
    r.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
            if (q)
                for (c.handler && (c = (f = c).handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                        return void 0 !== r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                    }), j = (b = (b || "").match(L) || [""]).length; j--;) n = p = (h = ua.exec(b[j]) || [])[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || ((m = i[n] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, o, g) || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
            if (q && (i = q.events)) {
                for (j = (b = (b || "").match(L) || [""]).length; j--;)
                    if (n = p = (h = ua.exec(b[j]) || [])[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = r.event.special[n] || {}, m = i[n = (d ? l.delegateType : l.bindType) || n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && W.remove(a, "handle events")
            }
        },
        dispatch: function (a) {
            var c, d, e, f, g, h, b = r.event.fix(a),
                i = new Array(arguments.length),
                j = (W.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, b)) {
                for (h = r.event.handlers.call(this, b, j), c = 0;
                    (f = h[c++]) && !b.isPropagationStopped();)
                    for (b.currentTarget = f.elem, d = 0;
                        (g = f.handlers[d++]) && !b.isImmediatePropagationStopped();) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, void 0 !== (e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)) && !1 === (b.result = e) && (b.preventDefault(), b.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, b), b.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && 1 <= a.button))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || !0 !== j.disabled)) {
                        for (f = [], g = {}, c = 0; c < i; c++) void 0 === g[e = (d = b[c]).selector + " "] && (g[e] = d.needsContext ? -1 < r(e, this).index(j) : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    } return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h
        },
        addProp: function (a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function () {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function (b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function (a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== xa() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === xa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1
                },
                _default: function (a) {
                    return B(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, r.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, r.Event = function (a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: wa,
        isPropagationStopped: wa,
        isImmediatePropagationStopped: wa,
        isSimulated: !1,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
            var b = a.button;
            return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === this || r.contains(this, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({
        on: function (a, b, c, d) {
            return ya(this, a, b, c, d)
        },
        one: function (a, b, c, d) {
            return ya(this, a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" != typeof a) return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = wa), this.each(function () {
                r.event.remove(this, a, c, b)
            });
            for (e in a) this.off(e, b, a[e]);
            return this
        }
    });
    var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Aa = /<script|<style|<link/i,
        Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ca = /^true\/(.*)/,
        Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ea(a, b) {
        return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") && r(">tbody", a)[0] || a
    }

    function Fa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Ga(a) {
        var b = Ca.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events))
                for (e in delete g.handle, g.events = {}, j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]);
            X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i))
        }
    }

    function Ia(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function Ja(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || 1 < m && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d)
        });
        if (m && (f = (e = qa(b, a[0].ownerDocument, !1, a, d)).firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (i = (h = r.map(na(e, "script"), Fa)).length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
        }
        return a
    }

    function Ka(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    r.extend({
        htmlPrefilter: function (a) {
            return a.replace(za, "<$1></$2>")
        },
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = na(h), d = 0, e = (f = na(a)).length; d < e; d++) Ia(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
                else Ha(a, h);
            return 0 < (g = na(h, "script")).length && oa(g, !i && na(a, "script")), h
        },
        cleanData: function (a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (U(c)) {
                    if (b = c[W.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[W.expando] = void 0
                    }
                    c[X.expando] && (c[X.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function (a) {
            return Ka(this, a, !0)
        },
        remove: function (a) {
            return Ka(this, a)
        },
        text: function (a) {
            return T(this, function (a) {
                return void 0 === a ? r.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function () {
            return Ja(this, arguments, function (a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ea(this, a).appendChild(a)
            })
        },
        prepend: function () {
            return Ja(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return Ja(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return Ja(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
            return this
        },
        clone: function (a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return r.clone(this, a, b)
            })
        },
        html: function (a) {
            return T(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) 1 === (b = this[c] || {}).nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = [];
            return Ja(this, arguments, function (b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        r.fn[a] = function (a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var La = /^margin/,
        Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
        Na = function (b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        };

    function Oa(a, b, c) {
        var d, e, f, g, h = a.style;
        return (c = c || Na(a)) && ("" !== (g = c.getPropertyValue(b) || c[b]) || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Pa(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function () {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function () {
                return b(), c
            },
            boxSizingReliable: function () {
                return b(), e
            },
            pixelMarginRight: function () {
                return b(), f
            },
            reliableMarginLeft: function () {
                return b(), g
            }
        }))
    }();
    var Qa = /^(none|table(?!-c[ea]).+)/,
        Ra = /^--/,
        Sa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ta = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ua = ["Webkit", "Moz", "ms"],
        Va = d.createElement("div").style;

    function Xa(a) {
        var b = r.cssProps[a];
        return b || (b = r.cssProps[a] = function Wa(a) {
            if (a in Va) return a;
            for (var b = a[0].toUpperCase() + a.slice(1), c = Ua.length; c--;)
                if ((a = Ua[c] + b) in Va) return a
        }(a) || a), b
    }

    function Ya(a, b, c) {
        var d = ba.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Za(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
        return g
    }

    function $a(a, b, c) {
        var d, e = Na(a),
            f = Oa(a, b, e),
            g = "border-box" === r.css(a, "boxSizing", !1, e);
        return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), (f = parseFloat(f) || 0) + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
    }

    function _a(a, b, c, d, e) {
        return new _a.prototype.init(a, b, c, d, e)
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Oa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = Ra.test(b),
                    j = a.style;
                return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : ("string" === (f = typeof c) && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), void(null != c && c == c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c))))
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = r.camelCase(b);
            return Ra.test(b) || (b = Xa(h)), (g = r.cssHooks[b] || r.cssHooks[h]) && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), !0 === c || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function (a, b) {
        r.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
                    return $a(a, b, d)
                })
            },
            set: function (a, c, d) {
                var e, f = d && Na(a),
                    g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(0, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
        if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
            marginLeft: 0
        }, function () {
            return a.getBoundingClientRect().left
        })) + "px"
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        r.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, La.test(a) || (r.cssHooks[a + b].set = Ya)
    }), r.fn.extend({
        css: function (a, b) {
            return T(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (Array.isArray(b)) {
                    for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, 1 < arguments.length)
        }
    }), ((r.Tween = _a).prototype = {
        constructor: _a,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = _a.propHooks[this.prop];
            return a && a.get ? a.get(this) : _a.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = _a.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this
        }
    }).init.prototype = _a.prototype, (_a.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, "")) && "auto" !== b ? b : 0
            },
            set: function (a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }).scrollTop = _a.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, r.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, r.fx = _a.prototype.init, r.fx.step = {};
    var ab, bb, cb = /^(?:toggle|show|hide)$/,
        db = /queueHooks$/;

    function eb() {
        bb && (!1 === d.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick())
    }

    function fb() {
        return a.setTimeout(function () {
            ab = void 0
        }), ab = r.now()
    }

    function gb(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) e["margin" + (c = ca[d])] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function hb(a, b, c) {
        for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function kb(a, b, c) {
        var d, e, f = 0,
            g = kb.prefilters.length,
            h = r.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), f = 1 - (c / j.duration || 0), g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, {
                    specialEasing: {},
                    easing: r.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: ab || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (function jb(a, b) {
                var c, d, e, f, g;
                for (c in a)
                    if (e = b[d = r.camelCase(c)], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = r.cssHooks[d]) && "expand" in g)
                        for (c in f = g.expand(f), delete a[d], f) c in a || (a[c] = f[c], b[c] = e);
                    else b[d] = e
            }(k, j.opts.specialEasing); f < g; f++)
            if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j
    }
    r.Animation = r.extend(kb, {
            tweeners: {
                "*": [function (a, b) {
                    var c = this.createTween(a, b);
                    return fa(c.elem, a, ba.exec(b), c), c
                }]
            },
            tweener: function (a, b) {
                for (var c, d = 0, e = (a = r.isFunction(a) ? (b = a, ["*"]) : a.match(L)).length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b)
            },
            prefilters: [function ib(a, b, c) {
                var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
                    m = this,
                    n = {},
                    o = a.style,
                    p = a.nodeType && da(a),
                    q = W.get(a, "fxshow");
                for (d in c.queue || (null == (g = r._queueHooks(a, "fx")).unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
                        g.unqueued || h()
                    }), g.unqueued++, m.always(function () {
                        m.always(function () {
                            g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
                        })
                    })), b)
                    if (e = b[d], cb.test(e)) {
                        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                            if ("show" !== e || !q || void 0 === q[d]) continue;
                            p = !0
                        }
                        n[d] = q && q[d] || r.style(a, d)
                    } if ((i = !r.isEmptyObject(b)) || !r.isEmptyObject(n))
                    for (d in l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], null == (j = q && q.display) && (j = W.get(a, "display")), "none" === (k = r.css(a, "display")) && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
                            o.display = j
                        }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
                        })), i = !1, n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", {
                        display: j
                    }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
                        for (d in p || ia([a]), W.remove(a, "fxshow"), n) r.style(a, d, n[d])
                    })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
            }],
            prefilter: function (a, b) {
                b ? kb.prefilters.unshift(a) : kb.prefilters.push(a)
            }
        }), r.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? r.extend({}, a) : {
                complete: c || !c && b || r.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !r.isFunction(b) && b
            };
            return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue)
            }, d
        }, r.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(da).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function (a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function () {
                        var b = kb(this, r.extend({}, a), f);
                        (e || W.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = W.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || r.dequeue(this, a)
                })
            },
            finish: function (a) {
                return !1 !== a && (a = a || "fx"), this.each(function () {
                    var b, c = W.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), r.each(["toggle", "show", "hide"], function (a, b) {
            var c = r.fn[b];
            r.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
            }
        }), r.each({
            slideDown: gb("show"),
            slideUp: gb("hide"),
            slideToggle: gb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            r.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), r.timers = [], r.fx.tick = function () {
            var a, b = 0,
                c = r.timers;
            for (ab = r.now(); b < c.length; b++)(a = c[b])() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), ab = void 0
        }, r.fx.timer = function (a) {
            r.timers.push(a), r.fx.start()
        }, r.fx.interval = 13, r.fx.start = function () {
            bb || (bb = !0, eb())
        }, r.fx.stop = function () {
            bb = null
        }, r.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, r.fn.delay = function (b, c) {
            return b = r.fx && r.fx.speeds[b] || b, c = c || "fx", this.queue(c, function (c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function () {
                    a.clearTimeout(e)
                }
            })
        },
        function () {
            var a = d.createElement("input"),
                c = d.createElement("select").appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, (a = d.createElement("input")).value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var lb, mb = r.expr.attrHandle;
    r.fn.extend({
        attr: function (a, b) {
            return T(this, r.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function (a) {
            return this.each(function () {
                r.removeAttr(this, a)
            })
        }
    }), r.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : null == (d = r.find.attr(a, b)) ? void 0 : d)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!o.radioValue && "radio" === b && B(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function (a, b) {
            var c, d = 0,
                e = b && b.match(L);
            if (e && 1 === a.nodeType)
                for (; c = e[d++];) a.removeAttribute(c)
        }
    }), lb = {
        set: function (a, b, c) {
            return !1 === b ? r.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = mb[b] || r.find.attr;
        mb[b] = function (a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e
        }
    });
    var nb = /^(?:input|select|textarea|button)$/i,
        ob = /^(?:a|area)$/i;

    function pb(a) {
        return (a.match(L) || []).join(" ")
    }

    function qb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        prop: function (a, b) {
            return T(this, r.prop, a, b, 1 < arguments.length)
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[r.propFix[a] || a]
            })
        }
    }), r.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        r.propFix[this.toLowerCase()] = this
    }), r.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function (b) {
                r(this).addClass(a.call(this, b, qb(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(L) || []; c = this[i++];)
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        e !== (h = pb(d)) && c.setAttribute("class", h)
                    } return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function (b) {
                r(this).removeClass(a.call(this, b, qb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(L) || []; c = this[i++];)
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        for (g = 0; f = b[g++];)
                            for (; - 1 < d.indexOf(" " + f + " ");) d = d.replace(" " + f + " ", " ");
                        e !== (h = pb(d)) && c.setAttribute("class", h)
                    } return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
                r(this).toggleClass(a.call(this, c, qb(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c)
                    for (d = 0, e = r(this), f = a.match(L) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else void 0 !== a && "boolean" !== c || ((b = qb(this)) && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : W.get(this, "__className__") || ""))
            })
        },
        hasClass: function (a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && -1 < (" " + pb(qb(c)) + " ").indexOf(b)) return !0;
            return !1
        }
    });
    var rb = /\r/g;
    r.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = r.isFunction(a), this.each(function (c) {
                var e;
                1 === this.nodeType && (null == (e = d ? a.call(this, c, r(this).val()) : a) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
                    return null == a ? "" : a + ""
                })), (b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : "string" == typeof (c = e.value) ? c.replace(rb, "") : null == c ? "" : c : void 0
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : pb(r.text(a))
                }
            },
            select: {
                get: function (a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (((c = e[d]).selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;
                            h.push(b)
                        } return h
                },
                set: function (a, b) {
                    for (var c, d, e = a.options, f = r.makeArray(b), g = e.length; g--;)((d = e[g]).selected = -1 < r.inArray(r.valHooks.option.get(d), f)) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function () {
        r.valHooks[this] = {
            set: function (a, b) {
                if (Array.isArray(b)) return a.checked = -1 < r.inArray(r(a).val(), b)
            }
        }, o.checkOn || (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function (b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (-1 < p.indexOf(".") && (p = (q = p.split(".")).shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, (b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b)).isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || !1 !== n.trigger.apply(e, c))) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                for (g = 0;
                    (h = o[g++]) && !b.isPropagationStopped();) b.type = 1 < g ? j : n.bindType || p, (m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle")) && m.apply(h, c), (m = k && h[k]) && m.apply && U(h) && (b.result = m.apply(h, c), !1 === b.result && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && !1 !== n._default.apply(o.pop(), c) || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && ((i = e[k]) && (e[k] = null), e[r.event.triggered = p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function (a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({
        trigger: function (a, b) {
            return this.each(function () {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            if (c) return r.event.trigger(a, b, c, !0)
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        r.fn[b] = function (a, c) {
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), r.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = W.access(d, b);
                e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = W.access(d, b) - 1;
                e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b))
            }
        }
    });
    var tb = a.location,
        ub = r.now(),
        vb = /\?/;
    r.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
    };
    var wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (Array.isArray(b)) r.each(b, function (b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) Ab(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({
        serialize: function () {
            return r.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a))
            }).map(function (a, b) {
                var c = r(this).val();
                return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                }
            }).get()
        }
    });
    var Bb = /%20/g,
        Cb = /#.*$/,
        Db = /([?&])_=[^&]*/,
        Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Gb = /^(?:GET|HEAD)$/,
        Hb = /^\/\//,
        Ib = {},
        Jb = {},
        Kb = "*/".concat("*"),
        Lb = d.createElement("a");

    function Mb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(L) || [];
            if (r.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Nb(a, b, c, d) {
        var e = {},
            f = a === Jb;

        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Ob(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a
    }

    function Qb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (!(g = j[i + " " + f] || j["* " + f]))
                for (e in j)
                    if ((h = e.split(" "))[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                        break
                    } if (!0 !== g)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    Lb.href = tb.href, r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tb.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
        },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function (b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (k) {
                            if (!h)
                                for (h = {}; b = Eb.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return k ? g : null
                    },
                    setRequestHeader: function (a, b) {
                        return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function (a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this
                    }
                };
            if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
            for (m in (l = r.event && o.global) && 0 == r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), !1 === o.cache && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && !1 !== o.contentType || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]), o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (!1 === o.beforeSend.call(p, y, o) || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && 0 < o.timeout && (i = a.setTimeout(function () {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(v, A)
                } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = 0 < b ? 4 : 0, j = 200 <= b && b < 300 || 304 === b, d && (v = function Pb(a, b, c) {
                    for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                        "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
                    if (d)
                        for (e in h)
                            if (h[e] && h[e].test(d)) {
                                i.unshift(e);
                                break
                            } if (i[0] in c) f = i[0];
                    else {
                        for (e in c) {
                            if (!i[0] || a.converters[e + " " + i[0]]) {
                                f = e;
                                break
                            }
                            g || (g = e)
                        }
                        f = f || g
                    }
                    if (f) return f !== i[0] && i.unshift(f), c[f]
                }(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && ((w = y.getResponseHeader("Last-Modified")) && (r.lastModified[f] = w), (w = y.getResponseHeader("etag")) && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, j = !(n = v.error))) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function (a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return r.get(a, void 0, b, "script")
        }
    }), r.each(["get", "post"], function (a, b) {
        r[b] = function (a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }), r._evalUrl = function (a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, r.fn.extend({
        wrapAll: function (a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function (a) {
            return r.isFunction(a) ? this.each(function (b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = r.isFunction(a);
            return this.each(function (c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function (a) {
            return this.parent(a).not("body").each(function () {
                r(this).replaceWith(this.childNodes)
            }), this
        }
    }), r.expr.pseudos.hidden = function (a) {
        return !r.expr.pseudos.visible(a)
    }, r.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, r.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Rb = {
            0: 200,
            1223: 204
        },
        Sb = r.ajaxSettings.xhr();
    o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
        var c, d;
        if (o.cors || Sb && !b.crossDomain) return {
            send: function (e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                for (g in b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) h.setRequestHeader(g, e[g]);
                c = function (a) {
                    return function () {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function () {
                c && c()
            }
        }
    }), r.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1)
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (a) {
                return r.globalEval(a), a
            }
        }
    }), r.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), r.ajaxTransport("script", function (a) {
        var b, c;
        if (a.crossDomain) return {
            send: function (e, f) {
                b = r("<script>").prop({
                    charset: a.scriptCharset,
                    src: a.url
                }).on("load error", c = function (a) {
                    b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                }), d.head.appendChild(b[0])
            },
            abort: function () {
                c && c()
            }
        }
    });
    var Tb = [],
        Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Tb.pop() || r.expando + "_" + ub++;
            return this[a] = !0, a
        }
    }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : !1 !== b.jsonp && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), o.createHTMLDocument = function () {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), r.parseHTML = function (a, b, c) {
        return "string" != typeof a ? [] : ("boolean" == typeof b && (c = b, b = !1), b || (o.createHTMLDocument ? ((e = (b = d.implementation.createHTMLDocument("")).createElement("base")).href = d.location.href, b.head.appendChild(e)) : b = d), g = !c && [], (f = C.exec(a)) ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes)));
        var e, f, g
    }, r.fn.load = function (a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return -1 < h && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), 0 < g.length && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        r.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), r.expr.pseudos.animated = function (a) {
        return r.grep(r.timers, function (b) {
            return a === b.elem
        }).length
    }, r.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), e = ("absolute" === k || "fixed" === k) && -1 < (f + i).indexOf("auto") ? (g = (d = l.position()).top, d.left) : (g = parseFloat(f) || 0, parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            return f ? f.getClientRects().length ? (d = f.getBoundingClientRect(), c = (b = f.ownerDocument).documentElement, e = b.defaultView, {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent; a && "static" === r.css(a, "position");) a = a.offsetParent;
                return a || ra
            })
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function (d) {
            return T(this, function (a, d, e) {
                var f;
                return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), r.each(["top", "left"], function (a, b) {
        r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
            if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c
        })
    }), r.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            r.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (!0 === e || !0 === f ? "margin" : "border");
                return T(this, function (b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), r.holdReady = function (a) {
        a ? r.readyWait++ : r.ready(!0)
    }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function () {
        return r
    });
    var Vb = a.jQuery,
        Wb = a.$;
    return r.noConflict = function (b) {
        return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r
    }, b || (a.jQuery = a.$ = r), r
}),
function (q, m) {
    "function" == typeof define && define.amd ? define(m) : "object" == typeof exports ? module.exports = m() : q.Blazy = m()
}(this, function () {
    function q(b) {
        var c = b._util;
        c.elements = function E(b) {
            for (var c = [], a = (b = b.root.querySelectorAll(b.selector)).length; a--; c.unshift(b[a]));
            return c
        }(b.options), c.count = c.elements.length, c.destroyed && (c.destroyed = !1, b.options.container && l(b.options.container, function (a) {
            n(a, "scroll", c.validateT)
        }), n(window, "resize", c.saveViewportOffsetT), n(window, "resize", c.validateT), n(window, "scroll", c.validateT)), m(b)
    }

    function m(b) {
        for (var c = b._util, a = 0; a < c.count; a++) {
            var e, d = c.elements[a],
                g = d;
            e = b.options;
            var p = g.getBoundingClientRect();
            e.container && y && (g = g.closest(e.containerClass)) ? e = !!r(g = g.getBoundingClientRect(), f) && r(p, {
                top: g.top - e.offset,
                right: g.right + e.offset,
                bottom: g.bottom + e.offset,
                left: g.left - e.offset
            }) : e = r(p, f), (e || t(d, b.options.successClass)) && (b.load(d), c.elements.splice(a, 1), c.count--, a--)
        }
        0 === c.count && b.destroy()
    }

    function r(b, c) {
        return b.right >= c.left && b.bottom >= c.top && b.left <= c.right && b.top <= c.bottom
    }

    function z(b, c, a) {
        if (!t(b, a.successClass) && (c || a.loadInvisible || 0 < b.offsetWidth && 0 < b.offsetHeight))
            if (c = b.getAttribute(u) || b.getAttribute(a.src)) {
                var d = (c = c.split(a.separator))[A && 1 < c.length ? 1 : 0],
                    e = b.getAttribute(a.srcset),
                    g = "img" === b.nodeName.toLowerCase(),
                    p = (c = b.parentNode) && "picture" === c.nodeName.toLowerCase();
                if (g || void 0 === b.src) {
                    var h = new Image,
                        w = function () {
                            a.error && a.error(b, "invalid"), v(b, a.errorClass), k(h, "error", w), k(h, "load", f)
                        },
                        f = function () {
                            g ? p || B(b, d, e) : b.style.backgroundImage = 'url("' + d + '")', x(b, a), k(h, "load", f), k(h, "error", w)
                        };
                    p && (h = b, l(c.getElementsByTagName("source"), function (b) {
                        var c = a.srcset,
                            e = b.getAttribute(c);
                        e && (b.setAttribute("srcset", e), b.removeAttribute(c))
                    })), n(h, "error", w), n(h, "load", f), B(h, d, e)
                } else b.src = d, x(b, a)
            } else "video" === b.nodeName.toLowerCase() ? (l(b.getElementsByTagName("source"), function (b) {
                var c = a.src,
                    e = b.getAttribute(c);
                e && (b.setAttribute("src", e), b.removeAttribute(c))
            }), b.load(), x(b, a)) : (a.error && a.error(b, "missing"), v(b, a.errorClass))
    }

    function x(b, c) {
        v(b, c.successClass), c.success && c.success(b), b.removeAttribute(c.src), b.removeAttribute(c.srcset), l(c.breakpoints, function (a) {
            b.removeAttribute(a.src)
        })
    }

    function B(b, c, a) {
        a && b.setAttribute("srcset", a), b.src = c
    }

    function t(b, c) {
        return -1 !== (" " + b.className + " ").indexOf(" " + c + " ")
    }

    function v(b, c) {
        t(b, c) || (b.className += " " + c)
    }

    function C(b) {
        f.bottom = (window.innerHeight || document.documentElement.clientHeight) + b, f.right = (window.innerWidth || document.documentElement.clientWidth) + b
    }

    function n(b, c, a) {
        b.attachEvent ? b.attachEvent && b.attachEvent("on" + c, a) : b.addEventListener(c, a, {
            capture: !1,
            passive: !0
        })
    }

    function k(b, c, a) {
        b.detachEvent ? b.detachEvent && b.detachEvent("on" + c, a) : b.removeEventListener(c, a, {
            capture: !1,
            passive: !0
        })
    }

    function l(b, c) {
        if (b && c)
            for (var a = b.length, d = 0; d < a && !1 !== c(b[d], d); d++);
    }

    function D(b, c, a) {
        var d = 0;
        return function () {
            var e = +new Date;
            e - d < c || (d = e, b.apply(a, arguments))
        }
    }
    var u, f, A, y;
    return function (b) {
        if (!document.querySelectorAll) {
            var c = document.createStyleSheet();
            document.querySelectorAll = function (a, b, d, h, f) {
                for (f = document.all, b = [], d = (a = a.replace(/\[for\b/gi, "[htmlFor").split(",")).length; d--;) {
                    for (c.addRule(a[d], "k:v"), h = f.length; h--;) f[h].currentStyle.k && b.push(f[h]);
                    c.removeRule(0)
                }
                return b
            }
        }
        var a = this,
            d = a._util = {};
        d.elements = [], d.destroyed = !0, a.options = b || {}, a.options.error = a.options.error || !1, a.options.offset = a.options.offset || 100, a.options.root = a.options.root || document, a.options.success = a.options.success || !1, a.options.selector = a.options.selector || ".b-lazy", a.options.separator = a.options.separator || "|", a.options.containerClass = a.options.container, a.options.container = !!a.options.containerClass && document.querySelectorAll(a.options.containerClass), a.options.errorClass = a.options.errorClass || "b-error", a.options.breakpoints = a.options.breakpoints || !1, a.options.loadInvisible = a.options.loadInvisible || !1, a.options.successClass = a.options.successClass || "b-loaded", a.options.validateDelay = a.options.validateDelay || 25, a.options.saveViewportOffsetDelay = a.options.saveViewportOffsetDelay || 50, a.options.srcset = a.options.srcset || "data-srcset", a.options.src = u = a.options.src || "data-src", y = Element.prototype.closest, A = 1 < window.devicePixelRatio, (f = {}).top = 0 - a.options.offset, f.left = 0 - a.options.offset, a.revalidate = function () {
            q(a)
        }, a.load = function (a, b) {
            var c = this.options;
            void 0 === a.length ? z(a, b, c) : l(a, function (a) {
                z(a, b, c)
            })
        }, a.destroy = function () {
            var a = this._util;
            this.options.container && l(this.options.container, function (b) {
                k(b, "scroll", a.validateT)
            }), k(window, "scroll", a.validateT), k(window, "resize", a.validateT), k(window, "resize", a.saveViewportOffsetT), a.count = 0, a.elements.length = 0, a.destroyed = !0
        }, d.validateT = D(function () {
            m(a)
        }, a.options.validateDelay, a), d.saveViewportOffsetT = D(function () {
            C(a.options.offset)
        }, a.options.saveViewportOffsetDelay, a), C(a.options.offset), l(a.options.breakpoints, function (a) {
            if (a.width >= window.screen.width) return u = a.src, !1
        }), setTimeout(function () {
            q(a)
        })
    }
}),
function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (this.length) {
                var c = a.data(this[0], "validator");
                return c || (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
                    c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
                }), this.on("submit.validate", function (b) {
                    function d() {
                        var d, e;
                        return !c.settings.submitHandler || (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e && e)
                    }
                    return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? !(c.formSubmitted = !0) : d() : (c.focusInvalid(), !1)
                })), c)
            }
            b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function () {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
                (b = c.element(this) && b) || (d = d.concat(c.errorList))
            }), c.errorList = d), b
        },
        rules: function (b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (null != j && null != j.form) {
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
                            i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                        }), i) : (delete e[j.name], f)
                }
                return (g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j)).required && (h = g.required, delete g.required, g = a.extend({
                    required: h
                }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                    remote: h
                })), g
            }
        }
    }), a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + a(b).val())
        },
        filled: function (b) {
            var c = a(b).val();
            return null !== c && !!a.trim("" + c)
        },
        unchecked: function (b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function (b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function (b, c) {
        return 1 === arguments.length ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : (void 0 === c || (2 < arguments.length && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return c
            })
        })), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (a) {
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function (a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function (b, c) {
                9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function (a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function b(b) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]);
                    var c = a.data(this.form, "validator"),
                        d = "on" + b.type.replace(/^validate/, ""),
                        e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function (b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
                        d[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function (b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function () {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function (b) {
                var c, d, e = this.clean(b),
                    f = this.validationTargetFor(e),
                    g = this,
                    h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), (d = this.groups[f.name]) && a.each(this.groups, function (a, b) {
                    b === d && a !== f.name && ((e = g.validationTargetFor(g.clean(g.findByName(a)))) && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h))
                }), c = !1 !== this.check(f), h = h && c, this.invalid[f.name] = !c, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
            },
            showErrors: function (b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        }
                    }), this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            },
            resetElements: function (a) {
                var b;
                if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
                else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (a) {
                var b, c = 0;
                for (b in a) a[b] && c++;
                return c
            },
            hideErrors: function () {
                this.hideThese(this.toHide)
            },
            hideThese: function (a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            },
            valid: function () {
                return 0 === this.size()
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function () {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function (a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function () {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    var d = this.name || a(this).attr("name");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]), !(d in c || !b.objectLength(a(this).rules()) || (c[d] = !0, 0))
                })
            },
            clean: function (b) {
                return a(b)[0]
            },
            errors: function () {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            resetInternals: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
            },
            reset: function () {
                this.resetInternals(), this.currentElements = a([])
            },
            prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function (b) {
                var c, d, e = a(b),
                    f = b.type;
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : 0 <= (d = c.lastIndexOf("/")) ? c.substr(d + 1) : 0 <= (d = c.lastIndexOf("\\")) ? c.substr(d + 1) : c : "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function (b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(),
                    g = a.map(f, function (a, b) {
                        return b
                    }).length,
                    h = !1,
                    i = this.elementValue(b);
                if ("function" == typeof f.normalizer) {
                    if ("string" != typeof (i = f.normalizer.call(b, i))) throw new TypeError("The normalizer should return a string value.");
                    delete f.normalizer
                }
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if ("dependency-mismatch" === (c = a.validator.methods[d].call(this, i, b, e.parameters)) && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j
                    }
                }
                if (!h) return this.objectLength(f) && this.successList.push(b), !0
            },
            customDataMessage: function (b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function (a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function () {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function (b, c) {
                "string" == typeof c && (c = {
                    method: c
                });
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                    e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
            },
            formatAndAdd: function (a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }), this.errorMap[a.name] = c, this.submitted[a.name] = c
            },
            addWrapper: function (a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function () {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (b, c) {
                var d, e, f, g, h = this.errorsFor(b),
                    i = this.idOrName(b),
                    j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (d = h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), (e = this.groups[b.name]) && (g = this, a.each(g.groups, function (b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
            },
            errorsFor: function (b) {
                var c = this.escapeCssMeta(this.idOrName(b)),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
            },
            escapeCssMeta: function (a) {
                return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function (b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
            },
            checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function (b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            },
            getLength: function (b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function (a, b) {
                return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            },
            dependTypes: {
                "boolean": function (a) {
                    return a
                },
                string: function (b, c) {
                    return !!a(b, c.form).length
                },
                "function": function (a, b) {
                    return a(b)
                }
            },
            optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function (b) {
                this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
            },
            stopRequest: function (b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (b, c) {
                return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                })
            },
            destroy: function () {
                this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        normalizeAttributeRule: function (a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function (b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) d = "required" === c ? ("" === (d = b.getAttribute(c)) && (d = !0), !!d) : f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function (b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function (b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function (b, c) {
            return a.each(b, function (d, e) {
                if (!1 !== e) {
                    if (e.param || e.depends) {
                        var f = !0;
                        switch (typeof e.depends) {
                            case "string":
                                f = !!a(e.depends, c.form).length;
                                break;
                            case "function":
                                f = e.depends.call(c, c)
                        }
                        f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
                    }
                } else delete b[d]
            }), a.each(b, function (d, e) {
                b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
            }), a.each(["minlength", "maxlength"], function () {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function () {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function (b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function () {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function (b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function (b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" !== c.nodeName.toLowerCase()) return this.checkable(c) ? 0 < this.getLength(b, c) : 0 < b.length;
                var e = a(c).val();
                return e && 0 < e.length
            },
            email: function (a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function (a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
            },
            date: function (a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function (a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            minlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || d <= e
            },
            maxlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e <= d
            },
            rangelength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function (a, b, c) {
                return this.optional(b) || c <= a
            },
            max: function (a, b, c) {
                return this.optional(b) || a <= c
            },
            range: function (a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            step: function (b, c, d) {
                var e, f = a(c).attr("type"),
                    g = "Step attribute on input type " + f + " is not supported.",
                    i = new RegExp("\\b" + f + "\\b"),
                    k = function (a) {
                        var b = ("" + a).match(/(?:\.(\d+))?$/);
                        return b && b[1] ? b[1].length : 0
                    },
                    l = function (a) {
                        return Math.round(a * Math.pow(10, e))
                    },
                    m = !0;
                if (f && !i.test(["text", "number", "range"].join())) throw new Error(g);
                return e = k(d), (k(b) > e || l(b) % l(d) != 0) && (m = !1), this.optional(c) || m
            },
            equalTo: function (b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function (b, c, d, e) {
                if (this.optional(c)) return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
                    url: d
                } || d, h = a.param(a.extend({
                    data: b
                }, d.data)), i.old === h ? i.valid : (i.old = h, (f = this).startRequest(c), (g = {})[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function (a) {
                        var d, g, h, j = !0 === a || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    });
    var b, c = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function (d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    }), a
}),
function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate.min"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    return function () {
        function b(a) {
            return a.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "")
        }
        a.validator.addMethod("maxWords", function (a, c, d) {
            return this.optional(c) || b(a).match(/\b\w+\b/g).length <= d
        }, a.validator.format("Please enter {0} words or less.")), a.validator.addMethod("minWords", function (a, c, d) {
            return this.optional(c) || b(a).match(/\b\w+\b/g).length >= d
        }, a.validator.format("Please enter at least {0} words.")), a.validator.addMethod("rangeWords", function (a, c, d) {
            var e = b(a),
                f = /\b\w+\b/g;
            return this.optional(c) || e.match(f).length >= d[0] && e.match(f).length <= d[1]
        }, a.validator.format("Please enter between {0} and {1} words."))
    }(), a.validator.addMethod("accept", function (b, c, d) {
        var e, g, h = "string" == typeof d ? d.replace(/\s/g, "") : "image/*",
            i = this.optional(c);
        if (i) return i;
        if ("file" === a(c).attr("type") && (h = h.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&").replace(/,/g, "|").replace(/\/\*/g, "/.*"), c.files && c.files.length))
            for (g = new RegExp(".?(" + h + ")$", "i"), e = 0; e < c.files.length; e++)
                if (!c.files[e].type.match(g)) return !1;
        return !0
    }, a.validator.format("Please enter a value with a valid mimetype.")), a.validator.addMethod("alphanumeric", function (a, b) {
        return this.optional(b) || /^\w+$/i.test(a)
    }, "Letters, numbers, and underscores only please"), a.validator.addMethod("bankaccountNL", function (a, b) {
        if (this.optional(b)) return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a)) return !1;
        var c, f = a.replace(/ /g, ""),
            g = 0,
            h = f.length;
        for (c = 0; c < h; c++) g += (h - c) * f.substring(c, c + 1);
        return g % 11 == 0
    }, "Please specify a valid bank account number"), a.validator.addMethod("bankorgiroaccountNL", function (b, c) {
        return this.optional(c) || a.validator.methods.bankaccountNL.call(this, b, c) || a.validator.methods.giroaccountNL.call(this, b, c)
    }, "Please specify a valid bank or giro account number"), a.validator.addMethod("bic", function (a, b) {
        return this.optional(b) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(a.toUpperCase())
    }, "Please specify a valid BIC code"), a.validator.addMethod("cifES", function (a) {
        "use strict";

        function b(a) {
            return a % 2 == 0
        }
        var c, d, e, f, g = new RegExp(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi),
            h = a.substring(0, 1),
            i = a.substring(1, 8),
            j = a.substring(8, 9),
            l = 0,
            m = 0;
        if (9 !== a.length || !g.test(a)) return !1;
        for (c = 0; c < i.length; c++) d = parseInt(i[c], 10), b(c) ? m += (d *= 2) < 10 ? d : d - 9 : l += d;
        return e = (10 - (l + m).toString().substr(-1)).toString(), e = 9 < parseInt(e, 10) ? "0" : e, f = "JABCDEFGHI".substr(e, 1).toString(), h.match(/[ABEH]/) ? j === e : h.match(/[KPQS]/) ? j === f : j === e || j === f
    }, "Please specify a valid CIF number."), a.validator.addMethod("cpfBR", function (a) {
        if (11 !== (a = a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "")).length) return !1;
        var b, c, d, e, f = 0;
        if (b = parseInt(a.substring(9, 10), 10), c = parseInt(a.substring(10, 11), 10), d = function (a, b) {
                var c = 10 * a % 11;
                return 10 !== c && 11 !== c || (c = 0), c === b
            }, "" === a || "00000000000" === a || "11111111111" === a || "22222222222" === a || "33333333333" === a || "44444444444" === a || "55555555555" === a || "66666666666" === a || "77777777777" === a || "88888888888" === a || "99999999999" === a) return !1;
        for (e = 1; e <= 9; e++) f += parseInt(a.substring(e - 1, e), 10) * (11 - e);
        if (d(f, b)) {
            for (f = 0, e = 1; e <= 10; e++) f += parseInt(a.substring(e - 1, e), 10) * (12 - e);
            return d(f, c)
        }
        return !1
    }, "Please specify a valid CPF number"), a.validator.addMethod("creditcard", function (a, b) {
        if (this.optional(b)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(a)) return !1;
        var c, d, e = 0,
            f = 0,
            g = !1;
        if ((a = a.replace(/\D/g, "")).length < 13 || 19 < a.length) return !1;
        for (c = a.length - 1; 0 <= c; c--) d = a.charAt(c), f = parseInt(d, 10), g && 9 < (f *= 2) && (f -= 9), e += f, g = !g;
        return e % 10 == 0
    }, "Please enter a valid credit card number."), a.validator.addMethod("creditcardtypes", function (a, b, c) {
        if (/[^0-9\-]+/.test(a)) return !1;
        a = a.replace(/\D/g, "");
        var d = 0;
        return c.mastercard && (d |= 1), c.visa && (d |= 2), c.amex && (d |= 4), c.dinersclub && (d |= 8), c.enroute && (d |= 16), c.discover && (d |= 32), c.jcb && (d |= 64), c.unknown && (d |= 128), c.all && (d = 255), 1 & d && /^(5[12345])/.test(a) ? 16 === a.length : 2 & d && /^(4)/.test(a) ? 16 === a.length : 4 & d && /^(3[47])/.test(a) ? 15 === a.length : 8 & d && /^(3(0[012345]|[68]))/.test(a) ? 14 === a.length : 16 & d && /^(2(014|149))/.test(a) ? 15 === a.length : 32 & d && /^(6011)/.test(a) ? 16 === a.length : 64 & d && /^(3)/.test(a) ? 16 === a.length : 64 & d && /^(2131|1800)/.test(a) ? 15 === a.length : !!(128 & d)
    }, "Please enter a valid credit card number."), a.validator.addMethod("currency", function (a, b, c) {
        var d, e = "string" == typeof c,
            f = e ? c : c[0],
            g = !!e || c[1];
        return f = f.replace(/,/g, ""), d = "^[" + (f = g ? f + "]" : f + "]?") + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$", d = new RegExp(d), this.optional(b) || d.test(a)
    }, "Please specify a valid currency"), a.validator.addMethod("dateFA", function (a, b) {
        return this.optional(b) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(a)
    }, a.validator.messages.date), a.validator.addMethod("dateITA", function (a, b) {
        var c, d, e, f, g, h = !1;
        return h = !!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(a) && (c = a.split("/"), d = parseInt(c[0], 10), e = parseInt(c[1], 10), f = parseInt(c[2], 10), (g = new Date(Date.UTC(f, e - 1, d, 12, 0, 0, 0))).getUTCFullYear() === f && g.getUTCMonth() === e - 1 && g.getUTCDate() === d), this.optional(b) || h
    }, a.validator.messages.date), a.validator.addMethod("dateNL", function (a, b) {
        return this.optional(b) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a)
    }, a.validator.messages.date), a.validator.addMethod("extension", function (a, b, c) {
        return c = "string" == typeof c ? c.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(b) || a.match(new RegExp("\\.(" + c + ")$", "i"))
    }, a.validator.format("Please enter a value with a valid extension.")), a.validator.addMethod("giroaccountNL", function (a, b) {
        return this.optional(b) || /^[0-9]{1,7}$/.test(a)
    }, "Please specify a valid giro account number"), a.validator.addMethod("iban", function (a, b) {
        if (this.optional(b)) return !0;
        var d, e, g, j, k, l = a.replace(/ /g, "").toUpperCase(),
            m = "",
            n = !0,
            o = "";
        if (l.length < 5) return !1;
        if (void 0 !== (g = {
                AL: "\\d{8}[\\dA-Z]{16}",
                AD: "\\d{8}[\\dA-Z]{12}",
                AT: "\\d{16}",
                AZ: "[\\dA-Z]{4}\\d{20}",
                BE: "\\d{12}",
                BH: "[A-Z]{4}[\\dA-Z]{14}",
                BA: "\\d{16}",
                BR: "\\d{23}[A-Z][\\dA-Z]",
                BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
                CR: "\\d{17}",
                HR: "\\d{17}",
                CY: "\\d{8}[\\dA-Z]{16}",
                CZ: "\\d{20}",
                DK: "\\d{14}",
                DO: "[A-Z]{4}\\d{20}",
                EE: "\\d{16}",
                FO: "\\d{14}",
                FI: "\\d{14}",
                FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
                GE: "[\\dA-Z]{2}\\d{16}",
                DE: "\\d{18}",
                GI: "[A-Z]{4}[\\dA-Z]{15}",
                GR: "\\d{7}[\\dA-Z]{16}",
                GL: "\\d{14}",
                GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
                HU: "\\d{24}",
                IS: "\\d{22}",
                IE: "[\\dA-Z]{4}\\d{14}",
                IL: "\\d{19}",
                IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
                KZ: "\\d{3}[\\dA-Z]{13}",
                KW: "[A-Z]{4}[\\dA-Z]{22}",
                LV: "[A-Z]{4}[\\dA-Z]{13}",
                LB: "\\d{4}[\\dA-Z]{20}",
                LI: "\\d{5}[\\dA-Z]{12}",
                LT: "\\d{16}",
                LU: "\\d{3}[\\dA-Z]{13}",
                MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
                MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
                MR: "\\d{23}",
                MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
                MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
                MD: "[\\dA-Z]{2}\\d{18}",
                ME: "\\d{18}",
                NL: "[A-Z]{4}\\d{10}",
                NO: "\\d{11}",
                PK: "[\\dA-Z]{4}\\d{16}",
                PS: "[\\dA-Z]{4}\\d{21}",
                PL: "\\d{24}",
                PT: "\\d{21}",
                RO: "[A-Z]{4}[\\dA-Z]{16}",
                SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
                SA: "\\d{2}[\\dA-Z]{18}",
                RS: "\\d{18}",
                SK: "\\d{20}",
                SI: "\\d{15}",
                ES: "\\d{20}",
                SE: "\\d{20}",
                CH: "\\d{5}[\\dA-Z]{12}",
                TN: "\\d{20}",
                TR: "\\d{5}[\\dA-Z]{17}",
                AE: "\\d{3}\\d{16}",
                GB: "[A-Z]{4}\\d{14}",
                VG: "[\\dA-Z]{4}\\d{16}"
            } [l.substring(0, 2)]) && !new RegExp("^[A-Z]{2}\\d{2}" + g + "$", "").test(l)) return !1;
        for (d = l.substring(4, l.length) + l.substring(0, 4), j = 0; j < d.length; j++) "0" !== (e = d.charAt(j)) && (n = !1), n || (m += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));
        for (k = 0; k < m.length; k++) o = ("" + o + m.charAt(k)) % 97;
        return 1 === o
    }, "Please specify a valid IBAN"), a.validator.addMethod("integer", function (a, b) {
        return this.optional(b) || /^-?\d+$/.test(a)
    }, "A positive or negative non-decimal number please"), a.validator.addMethod("ipv4", function (a, b) {
        return this.optional(b) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a)
    }, "Please enter a valid IP v4 address."), a.validator.addMethod("ipv6", function (a, b) {
        return this.optional(b) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a)
    }, "Please enter a valid IP v6 address."), a.validator.addMethod("lettersonly", function (a, b) {
        return this.optional(b) || /^[a-z]+$/i.test(a)
    }, "Letters only please"), a.validator.addMethod("letterswithbasicpunc", function (a, b) {
        return this.optional(b) || /^[a-z\-.,()'"\s]+$/i.test(a)
    }, "Letters or punctuation only please"), a.validator.addMethod("mobileNL", function (a, b) {
        return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(a)
    }, "Please specify a valid mobile number"), a.validator.addMethod("mobileUK", function (a, b) {
        return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || 9 < a.length && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
    }, "Please specify a valid mobile number"), a.validator.addMethod("nieES", function (a) {
        "use strict";
        var b, c = new RegExp(/^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi),
            e = a.substr(a.length - 1).toUpperCase();
        return !(10 < (a = a.toString().toUpperCase()).length || a.length < 9 || !c.test(a)) && (b = 9 === (a = a.replace(/^[X]/, "0").replace(/^[Y]/, "1").replace(/^[Z]/, "2")).length ? a.substr(0, 8) : a.substr(0, 9), "TRWAGMYFPDXBNJZSQVHLCKET".charAt(parseInt(b, 10) % 23) === e)
    }, "Please specify a valid NIE number."), a.validator.addMethod("nifES", function (a) {
        "use strict";
        return !!(a = a.toUpperCase()).match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") && (/^[0-9]{8}[A-Z]{1}$/.test(a) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8, 0) % 23) === a.charAt(8) : !!/^[KLM]{1}/.test(a) && a[8] === String.fromCharCode(64))
    }, "Please specify a valid NIF number."), a.validator.addMethod("notEqualTo", function (b, c, d) {
        return this.optional(c) || !a.validator.methods.equalTo.call(this, b, c, d)
    }, "Please enter a different value, values must not be the same."), a.validator.addMethod("nowhitespace", function (a, b) {
        return this.optional(b) || /^\S+$/i.test(a)
    }, "No white space please"), a.validator.addMethod("pattern", function (a, b, c) {
        return !!this.optional(b) || ("string" == typeof c && (c = new RegExp("^(?:" + c + ")$")), c.test(a))
    }, "Invalid format."), a.validator.addMethod("phoneNL", function (a, b) {
        return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(a)
    }, "Please specify a valid phone number."), a.validator.addMethod("phonesUK", function (a, b) {
        return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || 9 < a.length && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)
    }, "Please specify a valid uk phone number"), a.validator.addMethod("phoneUK", function (a, b) {
        return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || 9 < a.length && a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
    }, "Please specify a valid phone number"), a.validator.addMethod("phoneUS", function (a, b) {
        return a = a.replace(/\s+/g, ""), this.optional(b) || 9 < a.length && a.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)
    }, "Please specify a valid phone number"), a.validator.addMethod("postalcodeBR", function (a, b) {
        return this.optional(b) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a)
    }, "Informe um CEP válido."), a.validator.addMethod("postalCodeCA", function (a, b) {
        return this.optional(b) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(a)
    }, "Please specify a valid postal code"), a.validator.addMethod("postalcodeIT", function (a, b) {
        return this.optional(b) || /^\d{5}$/.test(a)
    }, "Please specify a valid postal code"), a.validator.addMethod("postalcodeNL", function (a, b) {
        return this.optional(b) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a)
    }, "Please specify a valid postal code"), a.validator.addMethod("postcodeUK", function (a, b) {
        return this.optional(b) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(a)
    }, "Please specify a valid UK postcode"), a.validator.addMethod("require_from_group", function (b, c, d) {
        var e = a(d[1], c.form),
            f = e.eq(0),
            g = f.data("valid_req_grp") ? f.data("valid_req_grp") : a.extend({}, this),
            h = e.filter(function () {
                return g.elementValue(this)
            }).length >= d[0];
        return f.data("valid_req_grp", g), a(c).data("being_validated") || (e.data("being_validated", !0), e.each(function () {
            g.element(this)
        }), e.data("being_validated", !1)), h
    }, a.validator.format("Please fill at least {0} of these fields.")), a.validator.addMethod("skip_or_fill_minimum", function (b, c, d) {
        var e = a(d[1], c.form),
            f = e.eq(0),
            g = f.data("valid_skip") ? f.data("valid_skip") : a.extend({}, this),
            h = e.filter(function () {
                return g.elementValue(this)
            }).length,
            i = 0 === h || h >= d[0];
        return f.data("valid_skip", g), a(c).data("being_validated") || (e.data("being_validated", !0), e.each(function () {
            g.element(this)
        }), e.data("being_validated", !1)), i
    }, a.validator.format("Please either skip these fields or fill at least {0} of them.")), a.validator.addMethod("stateUS", function (a, b, c) {
        var d, e = void 0 === c,
            f = !e && "undefined" != typeof c.caseSensitive && c.caseSensitive,
            g = !e && "undefined" != typeof c.includeTerritories && c.includeTerritories,
            h = !e && "undefined" != typeof c.includeMilitary && c.includeMilitary;
        return d = g || h ? g && h ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : g ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$", d = f ? new RegExp(d) : new RegExp(d, "i"), this.optional(b) || d.test(a)
    }, "Please specify a valid state"), a.validator.addMethod("strippedminlength", function (b, c, d) {
        return a(b).text().length >= d
    }, a.validator.format("Please enter at least {0} characters")), a.validator.addMethod("time", function (a, b) {
        return this.optional(b) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(a)
    }, "Please enter a valid time, between 00:00 and 23:59"), a.validator.addMethod("time12h", function (a, b) {
        return this.optional(b) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)
    }, "Please enter a valid time in 12-hour am/pm format"), a.validator.addMethod("url2", function (a, b) {
        return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
    }, a.validator.messages.url), a.validator.addMethod("vinUS", function (a) {
        if (17 !== a.length) return !1;
        var b, c, d, e, f, g, h = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            i = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
            j = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
            k = 0;
        for (b = 0; b < 17; b++) {
            if (e = j[b], d = a.slice(b, b + 1), 8 === b && (g = d), isNaN(d)) {
                for (c = 0; c < h.length; c++)
                    if (d.toUpperCase() === h[c]) {
                        d = i[c], d *= e, isNaN(g) && 8 === c && (g = h[c]);
                        break
                    }
            } else d *= e;
            k += d
        }
        return 10 === (f = k % 11) && (f = "X"), f === g
    }, "The specified vehicle identification number (VIN) is invalid."), a.validator.addMethod("zipcodeUS", function (a, b) {
        return this.optional(b) || /^\d{5}(-\d{4})?$/.test(a)
    }, "The specified US ZIP Code is invalid"), a.validator.addMethod("ziprange", function (a, b) {
        return this.optional(b) || /^90[2-5]\d\{2\}-\d{4}$/.test(a)
    }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx"), a
}),
function webpackUniversalModuleDefinition(root, factory) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = factory(require("jquery"));
    else if ("function" == typeof define && define.amd) define(["jquery"], factory);
    else {
        var a = "object" == typeof exports ? factory(require("jquery")) : factory(root.jQuery);
        for (var i in a)("object" == typeof exports ? exports : root)[i] = a[i]
    }
}(window, function (__WEBPACK_EXTERNAL_MODULE__3__) {
    return modules = [function (module) {
        module.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}')
    }, function (module, exports, __webpack_require__) {
        "use strict";

        function _typeof(obj) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            })(obj)
        }
        var $ = __webpack_require__(2),
            window = __webpack_require__(4),
            document = window.document,
            generateMaskSet = __webpack_require__(5).generateMaskSet,
            analyseMask = __webpack_require__(5).analyseMask,
            maskScope = __webpack_require__(8);

        function Inputmask(alias, options, internal) {
            if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
            this.el = void 0, this.events = {}, !(this.maskset = void 0) !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}, alias && (options.alias = alias)), this.opts = $.extend(!0, {}, this.defaults, options), this.noMasksCache = options && void 0 !== options.definitions, this.userOptions = options || {}, resolveAlias(this.opts.alias, options, this.opts), this.isRTL = this.opts.numericInput), this.refreshValue = !1, this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.originalPlaceholder = void 0
        }

        function resolveAlias(aliasStr, options, opts) {
            var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
            return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, void 0, opts), $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), !1)
        }
        Inputmask.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                _maxTestPos: 500,
                placeholder: "_",
                optionalmarker: ["[", "]"],
                quantifiermarker: ["{", "}"],
                groupmarker: ["(", ")"],
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: $.noop,
                onincomplete: $.noop,
                oncleared: $.noop,
                repeat: 0,
                greedy: !1,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                insertModeVisual: !0,
                clearIncomplete: !1,
                alias: null,
                onKeyDown: $.noop,
                onBeforeMask: null,
                onBeforePaste: function (pastedValue, opts) {
                    return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: $.noop,
                skipOptionalPartCharacter: " ",
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                _radixDance: !1,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: !0,
                tabThrough: !1,
                supportsInputType: ["text", "tel", "url", "password", "search"],
                ignorables: [8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
                isComplete: null,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: void 0,
                jitMasking: !1,
                nullable: !0,
                inputEventOnly: !1,
                noValuePatching: !1,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "text",
                importDataAttributes: !0,
                shiftPositions: !0
            },
            definitions: {
                9: {
                    validator: "[0-9１-９]",
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"
                }
            },
            aliases: {},
            masksCache: {},
            mask: function (elems) {
                var that = this;
                return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
                    var scopedOpts = $.extend(!0, {}, that.opts);
                    if (function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                            function importOption(option, optionData) {
                                null !== (optionData = void 0 !== optionData ? optionData : npt.getAttribute(dataAttribute + "-" + option)) && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), userOptions[option] = optionData)
                            }
                            if (!0 === opts.importDataAttributes) {
                                var option, dataoptions, optionData, p, attrOptions = npt.getAttribute(dataAttribute);
                                if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(/'/g, '"'), dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions)
                                    for (p in optionData = void 0, dataoptions)
                                        if ("alias" === p.toLowerCase()) {
                                            optionData = dataoptions[p];
                                            break
                                        } for (option in importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts), opts) {
                                    if (dataoptions)
                                        for (p in optionData = void 0, dataoptions)
                                            if (p.toLowerCase() === option.toLowerCase()) {
                                                optionData = dataoptions[p];
                                                break
                                            } importOption(option, optionData)
                                }
                            }
                            return $.extend(!0, opts, userOptions), "rtl" !== npt.dir && !opts.rightAlign || (npt.style.textAlign = "right"), "rtl" !== npt.dir && !opts.numericInput || (npt.dir = "ltr", npt.removeAttribute("dir"), opts.isRTL = !0), Object.keys(userOptions).length
                        }(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute)) {
                        var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                        void 0 !== maskset && (void 0 !== el.inputmask && (el.inputmask.opts.autoUnmask = !0, el.inputmask.remove()), el.inputmask = new Inputmask(void 0, void 0, !0), el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, (el.inputmask.el = el).inputmask.$el = $(el), el.inputmask.maskset = maskset, $.data(el, "_inputmask_opts", scopedOpts), maskScope.call(el.inputmask, {
                            action: "mask"
                        }))
                    }
                }), elems && elems[0] && elems[0].inputmask || this
            },
            option: function (options, noremask) {
                return "string" == typeof options ? this.opts[options] : "object" === _typeof(options) ? ($.extend(this.userOptions, options), this.el && !0 !== noremask && this.mask(this.el), this) : void 0
            },
            unmaskedvalue: function (value) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
                    action: "unmaskedvalue",
                    value: value
                })
            },
            remove: function () {
                return maskScope.call(this, {
                    action: "remove"
                })
            },
            getemptymask: function () {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
                    action: "getemptymask"
                })
            },
            hasMaskedValue: function () {
                return !this.opts.autoUnmask
            },
            isComplete: function () {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
                    action: "isComplete"
                })
            },
            getmetadata: function () {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
                    action: "getmetadata"
                })
            },
            isValid: function (value) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
                    action: "isValid",
                    value: value
                })
            },
            format: function (value, metadata) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
                    action: "format",
                    value: value,
                    metadata: metadata
                })
            },
            setValue: function (value) {
                this.el && $(this.el).trigger("setvalue", [value])
            },
            analyseMask: analyseMask
        }, Inputmask.extendDefaults = function (options) {
            $.extend(!0, Inputmask.prototype.defaults, options)
        }, Inputmask.extendDefinitions = function (definition) {
            $.extend(!0, Inputmask.prototype.definitions, definition)
        }, Inputmask.extendAliases = function (alias) {
            $.extend(!0, Inputmask.prototype.aliases, alias)
        }, Inputmask.format = function (value, options, metadata) {
            return Inputmask(options).format(value, metadata)
        }, Inputmask.unmask = function (value, options) {
            return Inputmask(options).unmaskedvalue(value)
        }, Inputmask.isValid = function (value, options) {
            return Inputmask(options).isValid(value)
        }, Inputmask.remove = function (elems) {
            "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
                el.inputmask && el.inputmask.remove()
            })
        }, Inputmask.setValue = function (elems, value) {
            "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
                el.inputmask ? el.inputmask.setValue(value) : $(el).trigger("setvalue", [value])
            })
        };
        var escapeRegexRegex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");
        Inputmask.escapeRegex = function (str) {
            return str.replace(escapeRegexRegex, "\\$1")
        }, Inputmask.dependencyLib = $, window.Inputmask = Inputmask, module.exports = Inputmask
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var jquery = __webpack_require__(3);
        if (void 0 === jquery) throw "jQuery not loaded!";
        module.exports = jquery
    }, function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__3__
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var __WEBPACK_AMD_DEFINE_RESULT__;

        function _typeof(obj) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
                return typeof obj
            } : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            })(obj)
        }
        __WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return "undefined" != typeof window ? window : new(eval("require('jsdom').JSDOM"))("").window
        }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(2);
        module.exports = {
            generateMaskSet: function generateMaskSet(opts, nocache) {
                function generateMask(mask, metadata, opts) {
                    var masksetDefinition, maskdefKey, regexMask = !1;
                    if (null !== mask && "" !== mask || (mask = (regexMask = null !== opts.regex) ? (mask = opts.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (regexMask = !0, ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), 0 < opts.repeat || "*" === opts.repeat || "+" === opts.repeat) {
                        var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
                        mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1]
                    }
                    return maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask, !1 !== opts.keepStatic && (maskdefKey = "ks_" + maskdefKey), void 0 === Inputmask.prototype.masksCache[maskdefKey] || !0 === nocache ? (masksetDefinition = {
                        mask: mask,
                        maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                        validPositions: {},
                        _buffer: void 0,
                        buffer: void 0,
                        tests: {},
                        excludes: {},
                        metadata: metadata,
                        maskLength: void 0,
                        jitOffset: {}
                    }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), masksetDefinition
                }
                if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {
                    if (1 < opts.mask.length) {
                        null === opts.keepStatic && (opts.keepStatic = !0);
                        var altMask = opts.groupmarker[0];
                        return $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, function (ndx, msk) {
                            1 < altMask.length && (altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]), void 0 === msk.mask || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask
                        }), generateMask(altMask += opts.groupmarker[1], opts.mask, opts)
                    }
                    opts.mask = opts.mask.pop()
                }
                return null === opts.keepStatic && (opts.keepStatic = !1), opts.mask && void 0 !== opts.mask.mask && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts)
            },
            analyseMask: function analyseMask(mask, regexMask, opts) {
                var match, m, openingToken, currentOpeningToken, alternator, lastMatch, tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                    regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                    escaped = !1,
                    currentToken = new MaskToken,
                    openenings = [],
                    maskTokens = [],
                    closeRegexGroup = !1;

                function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                    this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, this.quantifier = {
                        min: 1,
                        max: 1
                    }
                }

                function insertTestDefinition(mtoken, element, position) {
                    position = void 0 !== position ? position : mtoken.matches.length;
                    var prevMatch = mtoken.matches[position - 1];
                    if (regexMask) 0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
                        fn: new RegExp(element, opts.casing ? "i" : ""),
                        "static": !1,
                        optionality: !1,
                        newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element,
                        casing: null,
                        def: element,
                        placeholder: void 0,
                        nativeDef: element
                    }) : (escaped && (element = element[element.length - 1]), $.each(element.split(""), function (ndx, lmnt) {
                        prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
                            fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]", opts.casing ? "i" : "") : null,
                            "static": !0,
                            optionality: !1,
                            newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== lmnt && !0 !== prevMatch["static"],
                            casing: null,
                            def: opts.staticDefinitionSymbol || lmnt,
                            placeholder: void 0 !== opts.staticDefinitionSymbol ? lmnt : void 0,
                            nativeDef: (escaped ? "'" : "") + lmnt
                        })
                    })), escaped = !1;
                    else {
                        var maskdef = (opts.definitions ? opts.definitions[element] : void 0) || Inputmask.prototype.definitions[element];
                        maskdef && !escaped ? mtoken.matches.splice(position++, 0, {
                            fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function () {
                                this.test = maskdef.validator
                            } : new RegExp("."),
                            "static": maskdef["static"] || !1,
                            optionality: !1,
                            newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
                            casing: maskdef.casing,
                            def: maskdef.definitionSymbol || element,
                            placeholder: maskdef.placeholder,
                            nativeDef: element,
                            generated: maskdef.generated
                        }) : (mtoken.matches.splice(position++, 0, {
                            fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]", opts.casing ? "i" : "") : null,
                            "static": !0,
                            optionality: !1,
                            newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element && !0 !== prevMatch["static"],
                            casing: null,
                            def: opts.staticDefinitionSymbol || element,
                            placeholder: void 0 !== opts.staticDefinitionSymbol ? element : void 0,
                            nativeDef: (escaped ? "'" : "") + element
                        }), escaped = !1)
                    }
                }

                function defaultCase() {
                    if (0 < openenings.length) {
                        if (insertTestDefinition(currentOpeningToken = openenings[openenings.length - 1], m), currentOpeningToken.isAlternator) {
                            alternator = openenings.pop();
                            for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup && (alternator.matches[mndx].isGroup = !1);
                            0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1]).matches.push(alternator) : currentToken.matches.push(alternator)
                        }
                    } else insertTestDefinition(currentToken, m)
                }

                function groupify(matches) {
                    var groupToken = new MaskToken(!0);
                    return groupToken.openGroup = !1, groupToken.matches = matches, groupToken
                }

                function closeGroup() {
                    if ((openingToken = openenings.pop()).openGroup = !1, void 0 !== openingToken)
                        if (0 < openenings.length) {
                            if ((currentOpeningToken = openenings[openenings.length - 1]).matches.push(openingToken), currentOpeningToken.isAlternator) {
                                alternator = openenings.pop();
                                for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1, alternator.matches[mndx].alternatorGroup = !1;
                                0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1]).matches.push(alternator) : currentToken.matches.push(alternator)
                            }
                        } else currentToken.matches.push(openingToken);
                    else defaultCase()
                }

                function groupQuantifier(matches) {
                    var lastMatch = matches.pop();
                    return lastMatch.isQuantifier && (lastMatch = groupify([matches.pop(), lastMatch])), lastMatch
                }
                for (regexMask && (opts.optionalmarker[0] = void 0, opts.optionalmarker[1] = void 0); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask);) {
                    if (m = match[0], regexMask) switch (m.charAt(0)) {
                        case "?":
                            m = "{0,1}";
                            break;
                        case "+":
                        case "*":
                            m = "{" + m + "}";
                            break;
                        case "|":
                            if (0 === openenings.length) {
                                var altRegexGroup = groupify(currentToken.matches);
                                altRegexGroup.openGroup = !0, openenings.push(altRegexGroup), currentToken.matches = [], closeRegexGroup = !0
                            }
                    }
                    if (escaped) defaultCase();
                    else switch (m.charAt(0)) {
                        case "(?=":
                        case "(?!":
                        case "(?<=":
                        case "(?<!":
                            break;
                        case opts.escapeChar:
                            escaped = !0, regexMask && defaultCase();
                            break;
                        case opts.optionalmarker[1]:
                        case opts.groupmarker[1]:
                            closeGroup();
                            break;
                        case opts.optionalmarker[0]:
                            openenings.push(new MaskToken(!1, !0));
                            break;
                        case opts.groupmarker[0]:
                            openenings.push(new MaskToken(!0));
                            break;
                        case opts.quantifiermarker[0]:
                            var quantifier = new MaskToken(!1, !1, !0),
                                mqj = (m = m.replace(/[{}]/g, "")).split("|"),
                                mq = mqj[0].split(","),
                                mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                                mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                            "*" !== mq0 && "+" !== mq0 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                                min: mq0,
                                max: mq1,
                                jit: mqj[1]
                            };
                            var matches = 0 < openenings.length ? openenings[openenings.length - 1].matches : currentToken.matches;
                            if ((match = matches.pop()).isAlternator) {
                                matches.push(match), matches = match.matches;
                                var groupToken = new MaskToken(!0),
                                    tmpMatch = matches.pop();
                                matches.push(groupToken), matches = groupToken.matches, match = tmpMatch
                            }
                            match.isGroup || (match = groupify([match])), matches.push(match), matches.push(quantifier);
                            break;
                        case opts.alternatormarker:
                            if (0 < openenings.length) {
                                var subToken = (currentOpeningToken = openenings[openenings.length - 1]).matches[currentOpeningToken.matches.length - 1];
                                lastMatch = currentOpeningToken.openGroup && (void 0 === subToken.matches || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : groupQuantifier(currentOpeningToken.matches)
                            } else lastMatch = groupQuantifier(currentToken.matches);
                            if (lastMatch.isAlternator) openenings.push(lastMatch);
                            else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), openenings.push(alternator), lastMatch.openGroup) {
                                var alternatorGroup = new MaskToken(!(lastMatch.openGroup = !1));
                                alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup)
                            }
                            break;
                        default:
                            defaultCase()
                    }
                }
                for (closeRegexGroup && closeGroup(); 0 < openenings.length;) openingToken = openenings.pop(), currentToken.matches.push(openingToken);
                return 0 < currentToken.matches.length && (function verifyGroupMarker(maskToken) {
                    maskToken && maskToken.matches && $.each(maskToken.matches, function (ndx, token) {
                        var nextToken = maskToken.matches[ndx + 1];
                        (void 0 === nextToken || void 0 === nextToken.matches || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, regexMask || (insertTestDefinition(token, opts.groupmarker[0], 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker[1]))), verifyGroupMarker(token)
                    })
                }(currentToken), maskTokens.push(currentToken)), (opts.numericInput || opts.isRTL) && function reverseTokens(maskToken) {
                    for (var match in maskToken.matches = maskToken.matches.reverse(), maskToken.matches)
                        if (Object.prototype.hasOwnProperty.call(maskToken.matches, match)) {
                            var intMatch = parseInt(match);
                            if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                                var qt = maskToken.matches[match];
                                maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt)
                            }
                            void 0 !== maskToken.matches[match].matches ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = ((st = maskToken.matches[match]) === opts.optionalmarker[0] ? st = opts.optionalmarker[1] : st === opts.optionalmarker[1] ? st = opts.optionalmarker[0] : st === opts.groupmarker[0] ? st = opts.groupmarker[1] : st === opts.groupmarker[1] && (st = opts.groupmarker[0]), st)
                        } var st;
                    return maskToken
                }(maskTokens[0]), maskTokens
            }
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__(7), __webpack_require__(10), __webpack_require__(11), __webpack_require__(12), module.exports = __webpack_require__(1)
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var Inputmask = __webpack_require__(1);
        Inputmask.extendDefinitions({
            A: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
            }
        });
        var ipValidatorRegex = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");

        function ipValidator(chrs, maskset, pos, strict, opts) {
            return chrs = -1 < pos - 1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, -1 < pos - 2 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : "00" + chrs, ipValidatorRegex.test(chrs)
        }
        Inputmask.extendAliases({
            cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
            },
            url: {
                regex: "(https?|ftp)//.*",
                autoUnmask: !1
            },
            ip: {
                mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
                definitions: {
                    i: {
                        validator: ipValidator
                    },
                    j: {
                        validator: ipValidator
                    },
                    k: {
                        validator: ipValidator
                    },
                    l: {
                        validator: ipValidator
                    }
                },
                onUnMask: function (maskedValue, unmaskedValue, opts) {
                    return maskedValue
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                casing: "lower",
                onBeforePaste: function (pastedValue, opts) {
                    return (pastedValue = pastedValue.toLowerCase()).replace("mailto:", "")
                },
                definitions: {
                    "*": {
                        validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]"
                    }
                },
                onUnMask: function (maskedValue, unmaskedValue, opts) {
                    return maskedValue
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            },
            ssn: {
                mask: "999-99-9999",
                postValidation: function (buffer, pos, c, currentResult, opts, maskset, strict) {
                    return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer.join(""))
                }
            }
        }), module.exports = Inputmask
    }, function (module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__(9);
        var $ = __webpack_require__(2),
            window = __webpack_require__(4),
            document = window.document,
            ua = window.navigator && window.navigator.userAgent || "",
            ie = 0 < ua.indexOf("MSIE ") || 0 < ua.indexOf("Trident/"),
            mobile = "ontouchstart" in window,
            iemobile = /iemobile/i.test(ua),
            iphone = /iphone/i.test(ua) && !iemobile,
            keyCode = __webpack_require__(0);
        module.exports = function maskScope(actionObj) {
            var inputmask = this,
                maskset = inputmask.maskset,
                opts = inputmask.opts,
                el = inputmask.el,
                isRTL = inputmask.isRTL || (inputmask.isRTL = opts.numericInput);

            function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
                var greedy = opts.greedy;
                clearOptionalTail && (opts.greedy = !1), minimalPos = minimalPos || 0;
                var ndxIntlzr, test, testPos, jitRenderStatic, maskTemplate = [],
                    pos = 0;
                do {
                    if (!0 === baseOnInput && maskset.validPositions[pos]) test = (testPos = clearOptionalTail && !0 === maskset.validPositions[pos].match.optionality && void 0 === maskset.validPositions[pos + 1] && (!0 === maskset.validPositions[pos].generatedInput || maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && 0 < pos) ? determineTestTemplate(pos, getTests(pos, ndxIntlzr, pos - 1)) : maskset.validPositions[pos]).match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test));
                    else {
                        test = (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1)).match, ndxIntlzr = testPos.locator.slice();
                        var jitMasking = !0 !== noJit && (!1 !== opts.jitMasking ? opts.jitMasking : test.jit);
                        (jitRenderStatic = jitRenderStatic && test["static"] && test.def !== opts.groupSeparator && null === test.fn || maskset.validPositions[pos - 1] && test["static"] && test.def !== opts.groupSeparator && null === test.fn) || !1 === jitMasking || void 0 === jitMasking || "number" == typeof jitMasking && isFinite(jitMasking) && pos < jitMasking ? maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test)) : jitRenderStatic = !1
                    }
                    pos++
                } while ((void 0 === inputmask.maxLength || pos < inputmask.maxLength) && (!0 !== test["static"] || "" !== test.def) || pos < minimalPos);
                return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), !1 === includeMode && void 0 !== maskset.maskLength || (maskset.maskLength = pos - 1), opts.greedy = greedy, maskTemplate
            }

            function resetMaskSet(soft) {
                !(maskset.buffer = void 0) !== soft && (maskset.validPositions = {}, maskset.p = 0)
            }

            function getLastValidPosition(closestTo, strict, validPositions) {
                var before = -1,
                    after = -1,
                    valids = validPositions || maskset.validPositions;
                for (var posNdx in void 0 === closestTo && (closestTo = -1), valids) {
                    var psNdx = parseInt(posNdx);
                    valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), closestTo <= psNdx && (after = psNdx))
                }
                return -1 === before || before == closestTo ? after : -1 == after ? before : closestTo - before < after - closestTo ? before : after
            }

            function getDecisionTaker(tst) {
                var decisionTaker = tst.locator[tst.alternation];
                return "string" == typeof decisionTaker && 0 < decisionTaker.length && (decisionTaker = decisionTaker.split(",")[0]), void 0 !== decisionTaker ? decisionTaker.toString() : ""
            }

            function getLocator(tst, align) {
                var locator = (null != tst.alternation ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
                if ("" !== locator)
                    for (; locator.length < align;) locator += "0";
                return locator
            }

            function determineTestTemplate(pos, tests) {
                for (var tstLocator, closest, bestMatch, targetLocator = getLocator(getTest(pos = 0 < pos ? pos - 1 : 0)), ndx = 0; ndx < tests.length; ndx++) {
                    var tst = tests[ndx];
                    tstLocator = getLocator(tst, targetLocator.length);
                    var distance = Math.abs(tstLocator - targetLocator);
                    (void 0 === closest || "" !== tstLocator && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && "master" === bestMatch.match.newBlockMarker && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) && (closest = distance, bestMatch = tst)
                }
                return bestMatch
            }

            function getTestTemplate(pos, ndxIntlzr, tstPs) {
                return maskset.validPositions[pos] || determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs))
            }

            function getTest(pos, tests) {
                return maskset.validPositions[pos] ? maskset.validPositions[pos] : (tests || getTests(pos))[0]
            }

            function positionCanMatchDefinition(pos, testDefinition, opts) {
                for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) {
                    if (tests[tndx].match && (!(tests[tndx].match.nativeDef !== testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] || opts.shiftPositions && testDefinition.match["static"]) || tests[tndx].match.nativeDef === testDefinition.match.nativeDef)) {
                        valid = !0;
                        break
                    }
                    if (tests[tndx].match && tests[tndx].match.def === testDefinition.match.nativeDef) {
                        valid = void 0;
                        break
                    }
                }
                return !1 === valid && void 0 !== maskset.jitOffset[pos] && (valid = positionCanMatchDefinition(pos + maskset.jitOffset[pos], testDefinition, opts)), valid
            }

            function getTests(pos, ndxIntlzr, tstPs) {
                var latestMatch, maskTokens = maskset.maskToken,
                    testPos = ndxIntlzr ? tstPs : 0,
                    ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
                    matches = [],
                    insertStop = !1,
                    cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

                function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                    function handleMatch(match, loopNdx, quantifierRecurse) {
                        function isFirstMatch(latestMatch, tokenGroup) {
                            var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
                            return firstMatch || $.each(tokenGroup.matches, function (ndx, match) {
                                if (!0 === match.isQuantifier ? firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]) : Object.prototype.hasOwnProperty.call(match, "matches") && (firstMatch = isFirstMatch(latestMatch, match)), firstMatch) return !1
                            }), firstMatch
                        }

                        function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                            var bestMatch, indexPos;
                            if ((maskset.tests[pos] || maskset.validPositions[pos]) && $.each(maskset.tests[pos] || [maskset.validPositions[pos]], function (ndx, lmnt) {
                                    if (lmnt.mloc[alternateNdx]) return bestMatch = lmnt, !1;
                                    var alternation = void 0 !== targetAlternation ? targetAlternation : lmnt.alternation,
                                        ndxPos = void 0 !== lmnt.locator[alternation] ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                                    (void 0 === indexPos || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, indexPos = ndxPos)
                                }), bestMatch) {
                                var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation];
                                return (bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator).slice((void 0 !== targetAlternation ? targetAlternation : bestMatch.alternation) + 1)
                            }
                            return void 0 !== targetAlternation ? resolveNdxInitializer(pos, alternateNdx) : void 0
                        }

                        function isSubsetOf(source, target) {
                            function expand(pattern) {
                                for (var end, expanded = [], start = -1, i = 0, l = pattern.length; i < l; i++)
                                    if ("-" === pattern.charAt(i))
                                        for (end = pattern.charCodeAt(i + 1); ++start < end;) expanded.push(String.fromCharCode(start));
                                    else start = pattern.charCodeAt(i), expanded.push(pattern.charAt(i));
                                return expanded.join("")
                            }
                            return source.match.def === target.match.nativeDef || !(!(opts.regex || source.match.fn instanceof RegExp && target.match.fn instanceof RegExp) || !0 === source.match["static"] || !0 === target.match["static"]) && -1 !== expand(target.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g, "")))
                        }

                        function setMergeLocators(targetMatch, altMatch) {
                            var alternationNdx = targetMatch.alternation,
                                shouldMerge = void 0 === altMatch || alternationNdx === altMatch.alternation && -1 === targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]);
                            if (!shouldMerge && alternationNdx > altMatch.alternation)
                                for (var i = altMatch.alternation; i < alternationNdx; i++)
                                    if (targetMatch.locator[i] !== altMatch.locator[i]) {
                                        alternationNdx = i, shouldMerge = !0;
                                        break
                                    } if (shouldMerge) {
                                targetMatch.mloc = targetMatch.mloc || {};
                                var locNdx = targetMatch.locator[alternationNdx];
                                if (void 0 !== locNdx) {
                                    if ("string" == typeof locNdx && (locNdx = locNdx.split(",")[0]), void 0 === targetMatch.mloc[locNdx] && (targetMatch.mloc[locNdx] = targetMatch.locator.slice()), void 0 !== altMatch) {
                                        for (var ndx in altMatch.mloc) "string" == typeof ndx && (ndx = ndx.split(",")[0]), void 0 === targetMatch.mloc[ndx] && (targetMatch.mloc[ndx] = altMatch.mloc[ndx]);
                                        targetMatch.locator[alternationNdx] = Object.keys(targetMatch.mloc).join(",")
                                    }
                                    return !0
                                }
                                targetMatch.alternation = void 0
                            }
                            return !1
                        }

                        function isSameLevel(targetMatch, altMatch) {
                            if (targetMatch.locator.length !== altMatch.locator.length) return !1;
                            for (var locNdx = targetMatch.alternation + 1; locNdx < targetMatch.locator.length; locNdx++)
                                if (targetMatch.locator[locNdx] !== altMatch.locator[locNdx]) return !1;
                            return !0
                        }
                        if (testPos > opts._maxTestPos && void 0 !== quantifierRecurse) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + maskset.mask;
                        if (testPos === pos && void 0 === match.matches) return matches.push({
                            match: match,
                            locator: loopNdx.reverse(),
                            cd: cacheDependency,
                            mloc: {}
                        }), !0;
                        if (void 0 !== match.matches) {
                            if (match.isGroup && quantifierRecurse !== match) {
                                if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx, quantifierRecurse)) return !0
                            } else if (match.isOptional) {
                                var optionalToken = match,
                                    mtchsNdx = matches.length;
                                if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) {
                                    if ($.each(matches, function (ndx, mtch) {
                                            mtchsNdx <= ndx && (mtch.match.optionality = !0)
                                        }), latestMatch = matches[matches.length - 1].match, void 0 !== quantifierRecurse || !isFirstMatch(latestMatch, optionalToken)) return !0;
                                    insertStop = !0, testPos = pos
                                }
                            } else if (match.isAlternator) {
                                var maltMatches, alternateToken = match,
                                    malternateMatches = [],
                                    currentMatches = matches.slice(),
                                    loopNdxCnt = loopNdx.length,
                                    altIndex = 0 < ndxInitializer.length ? ndxInitializer.shift() : -1;
                                if (-1 === altIndex || "string" == typeof altIndex) {
                                    var amndx, currentPos = testPos,
                                        ndxInitializerClone = ndxInitializer.slice(),
                                        altIndexArr = [];
                                    if ("string" == typeof altIndex) altIndexArr = altIndex.split(",");
                                    else
                                        for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx.toString());
                                    if (void 0 !== maskset.excludes[pos]) {
                                        for (var altIndexArrClone = altIndexArr.slice(), i = 0, exl = maskset.excludes[pos].length; i < exl; i++) {
                                            var excludeSet = maskset.excludes[pos][i].toString().split(":");
                                            loopNdx.length == excludeSet[1] && altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1)
                                        }
                                        0 === altIndexArr.length && (delete maskset.excludes[pos], altIndexArr = altIndexArrClone)
                                    }(!0 === opts.keepStatic || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) && (altIndexArr = altIndexArr.slice(0, 1));
                                    for (var unMatchedAlternation = !1, ndx = 0; ndx < altIndexArr.length; ndx++) {
                                        amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = "string" == typeof altIndex && resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) ? match = !0 : 0 === ndx && (unMatchedAlternation = !0), maltMatches = matches.slice(), testPos = currentPos, matches = [];
                                        for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                            var altMatch = maltMatches[ndx1],
                                                dropMatch = !1;
                                            altMatch.match.jit = altMatch.match.jit || unMatchedAlternation, altMatch.alternation = altMatch.alternation || loopNdxCnt, setMergeLocators(altMatch);
                                            for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                                var altMatch2 = malternateMatches[ndx2];
                                                if ("string" != typeof altIndex || void 0 !== altMatch.alternation && -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {
                                                    if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                                        dropMatch = !0, setMergeLocators(altMatch2, altMatch);
                                                        break
                                                    }
                                                    if (isSubsetOf(altMatch, altMatch2)) {
                                                        setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                        break
                                                    }
                                                    if (isSubsetOf(altMatch2, altMatch)) {
                                                        setMergeLocators(altMatch2, altMatch);
                                                        break
                                                    }
                                                    if (target = altMatch2, !0 === (source = altMatch).match["static"] && !0 !== target.match["static"] && target.match.fn.test(source.match.def, maskset, pos, !1, opts, !1)) {
                                                        isSameLevel(altMatch, altMatch2) || void 0 !== el.inputmask.userOptions.keepStatic ? setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch)) : opts.keepStatic = !0;
                                                        break
                                                    }
                                                }
                                            }
                                            dropMatch || malternateMatches.push(altMatch)
                                        }
                                    }
                                    matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = 0 < matches.length, match = 0 < malternateMatches.length, ndxInitializer = ndxInitializerClone.slice()
                                } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
                                if (match) return !0
                            } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1])
                                for (var qt = match, qndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                                    var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                    if (match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup)) {
                                        if ((latestMatch = matches[matches.length - 1].match).optionalQuantifier = qndx >= qt.quantifier.min, latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit, latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                                            insertStop = !0, testPos = pos;
                                            break
                                        }
                                        return latestMatch.jit && (maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch)), !0
                                    }
                                } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) return !0
                        } else testPos++;
                        var source, target
                    }
                    for (var tndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++)
                        if (!0 !== maskToken.matches[tndx].isQuantifier) {
                            var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
                            if (match && testPos === pos) return match;
                            if (pos < testPos) break
                        }
                }
                if (-1 < pos && (void 0 === inputmask.maxLength || pos < inputmask.maxLength)) {
                    if (void 0 === ndxIntlzr) {
                        for (var test, previousPos = pos - 1; void 0 === (test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) && -1 < previousPos;) previousPos--;
                        void 0 !== test && -1 < previousPos && (ndxInitializer = function mergeLocators(pos, tests) {
                            var locator = [];
                            return $.isArray(tests) || (tests = [tests]), 0 < tests.length && (void 0 === tests[0].alternation || !0 === opts.keepStatic ? 0 === (locator = determineTestTemplate(pos, tests.slice()).locator.slice()).length && (locator = tests[0].locator.slice()) : $.each(tests, function (ndx, tst) {
                                if ("" !== tst.def)
                                    if (0 === locator.length) locator = tst.locator.slice();
                                    else
                                        for (var i = 0; i < locator.length; i++) tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i])
                            })), locator
                        }(previousPos, test), cacheDependency = ndxInitializer.join(""), testPos = previousPos)
                    }
                    if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) return maskset.tests[pos];
                    for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                        if (resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]) && testPos === pos || pos < testPos) break
                    }
                }
                return 0 !== matches.length && !insertStop || matches.push({
                    match: {
                        fn: null,
                        "static": !0,
                        optionality: !1,
                        casing: null,
                        def: "",
                        placeholder: ""
                    },
                    locator: [],
                    mloc: {},
                    cd: cacheDependency
                }), void 0 !== ndxIntlzr && maskset.tests[pos] ? $.extend(!0, [], matches) : (maskset.tests[pos] = $.extend(!0, [], matches), maskset.tests[pos])
            }

            function getBufferTemplate() {
                return void 0 === maskset._buffer && (maskset._buffer = getMaskTemplate(!1, 1), void 0 === maskset.buffer && (maskset.buffer = maskset._buffer.slice())), maskset._buffer
            }

            function getBuffer(noCache) {
                return void 0 !== maskset.buffer && !0 !== noCache || (maskset.buffer = getMaskTemplate(!0, getLastValidPosition(), !0), void 0 === maskset._buffer && (maskset._buffer = maskset.buffer.slice())), maskset.buffer
            }

            function refreshFromBuffer(start, end, buffer) {
                var i, p, skipOptionalPartCharacter = opts.skipOptionalPartCharacter,
                    bffr = isRTL ? buffer.slice().reverse() : buffer;
                if (!(opts.skipOptionalPartCharacter = "") === start) resetMaskSet(), maskset.tests = {}, start = 0, end = buffer.length, p = determineNewCaretPosition({
                    begin: 0,
                    end: 0
                }, !1).begin;
                else {
                    for (i = start; i < end; i++) delete maskset.validPositions[i];
                    p = start
                }
                var keypress = new $.Event("keypress");
                for (i = start; i < end; i++) {
                    keypress.which = bffr[i].toString().charCodeAt(0), inputmask.ignorable = !1;
                    var valResult = EventHandlers.keypressEvent.call(el, keypress, !0, !1, !1, p);
                    !1 !== valResult && (p = valResult.forwardPosition)
                }
                opts.skipOptionalPartCharacter = skipOptionalPartCharacter
            }

            function checkAlternationMatch(altArr1, altArr2, na) {
                for (var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = void 0 !== na ? na.split(",") : [], i = 0; i < naArr.length; i++) - 1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
                for (var alndx = 0; alndx < altArr1.length; alndx++)
                    if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
                        isMatch = !0;
                        break
                    } return isMatch
            }

            function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
                var lastAlt, alternation, altPos, prevAltPos, i, validPos, decisionPos, begin, end, validPsClone = $.extend(!0, {}, maskset.validPositions),
                    tstClone = $.extend(!0, {}, maskset.tests),
                    isValidRslt = !1,
                    returnRslt = !1,
                    lAltPos = void 0 !== rAltPos ? rAltPos : getLastValidPosition();
                if (selection && (begin = selection.begin, end = selection.end, selection.begin > selection.end && (begin = selection.end, end = selection.begin)), -1 === lAltPos && void 0 === rAltPos) alternation = (prevAltPos = getTest(lastAlt = 0)).alternation;
                else
                    for (; 0 <= lAltPos; lAltPos--)
                        if ((altPos = maskset.validPositions[lAltPos]) && void 0 !== altPos.alternation) {
                            if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
                            lastAlt = lAltPos, alternation = maskset.validPositions[lastAlt].alternation, prevAltPos = altPos
                        } if (void 0 !== alternation) {
                    decisionPos = parseInt(lastAlt), maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [], !0 !== maskPos && maskset.excludes[decisionPos].push(getDecisionTaker(prevAltPos) + ":" + prevAltPos.alternation);
                    var validInputs = [],
                        resultPos = -1;
                    for (i = decisionPos; i < getLastValidPosition(void 0, !0) + 1; i++) - 1 === resultPos && maskPos <= i && void 0 !== c && (validInputs.push(c), resultPos = validInputs.length - 1), (validPos = maskset.validPositions[i]) && !0 !== validPos.generatedInput && (void 0 === selection || i < begin || end <= i) && validInputs.push(validPos.input), delete maskset.validPositions[i];
                    for (-1 === resultPos && void 0 !== c && (validInputs.push(c), resultPos = validInputs.length - 1); void 0 !== maskset.excludes[decisionPos] && maskset.excludes[decisionPos].length < 10;) {
                        for (maskset.tests = {}, resetMaskSet(!0), isValidRslt = !0, i = 0; i < validInputs.length && (isValidRslt = isValid(isValidRslt.caret || getLastValidPosition(void 0, !0) + 1, validInputs[i], !1, fromIsValid, !0)); i++) i === resultPos && (returnRslt = isValidRslt), 1 == maskPos && isValidRslt && (returnRslt = {
                            caretPos: i
                        });
                        if (isValidRslt) break;
                        if (resetMaskSet(), prevAltPos = getTest(decisionPos), maskset.validPositions = $.extend(!0, {}, validPsClone), maskset.tests = $.extend(!0, {}, tstClone), !maskset.excludes[decisionPos]) {
                            returnRslt = alternate(maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                            break
                        }
                        var decisionTaker = getDecisionTaker(prevAltPos);
                        if (-1 !== maskset.excludes[decisionPos].indexOf(decisionTaker + ":" + prevAltPos.alternation)) {
                            returnRslt = alternate(maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                            break
                        }
                        for (maskset.excludes[decisionPos].push(decisionTaker + ":" + prevAltPos.alternation), i = decisionPos; i < getLastValidPosition(void 0, !0) + 1; i++) delete maskset.validPositions[i]
                    }
                }
                return returnRslt && !1 === opts.keepStatic || delete maskset.excludes[decisionPos], returnRslt
            }

            function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly) {
                function isSelection(posObj) {
                    return isRTL ? 1 < posObj.begin - posObj.end || posObj.begin - posObj.end == 1 : 1 < posObj.end - posObj.begin || posObj.end - posObj.begin == 1
                }
                strict = !0 === strict;
                var maskPos = pos;

                function processCommandObject(commandObj) {
                    if (void 0 !== commandObj) {
                        if (void 0 !== commandObj.remove && ($.isArray(commandObj.remove) || (commandObj.remove = [commandObj.remove]), $.each(commandObj.remove.sort(function (a, b) {
                                return b.pos - a.pos
                            }), function (ndx, lmnt) {
                                revalidateMask({
                                    begin: lmnt,
                                    end: lmnt + 1
                                })
                            }), commandObj.remove = void 0), void 0 !== commandObj.insert && ($.isArray(commandObj.insert) || (commandObj.insert = [commandObj.insert]), $.each(commandObj.insert.sort(function (a, b) {
                                return a.pos - b.pos
                            }), function (ndx, lmnt) {
                                "" !== lmnt.c && isValid(lmnt.pos, lmnt.c, void 0 === lmnt.strict || lmnt.strict, void 0 !== lmnt.fromIsValid ? lmnt.fromIsValid : fromIsValid)
                            }), commandObj.insert = void 0), commandObj.refreshFromBuffer && commandObj.buffer) {
                            var refresh = commandObj.refreshFromBuffer;
                            refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, commandObj.buffer), commandObj.refreshFromBuffer = void 0
                        }
                        void 0 !== commandObj.rewritePosition && (maskPos = commandObj.rewritePosition, commandObj = !0)
                    }
                    return commandObj
                }

                function _isValid(position, c, strict) {
                    var rslt = !1;
                    return $.each(getTests(position), function (ndx, tst) {
                        var test = tst.match;
                        if (getBuffer(!0), !1 !== (rslt = null != test.fn ? test.fn.test(c, maskset, position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
                                c: getPlaceholder(position, test, !0) || test.def,
                                pos: position
                            })) {
                            var elem = void 0 !== rslt.c ? rslt.c : c,
                                validatedPos = position;
                            return elem = elem === opts.skipOptionalPartCharacter && !0 === test["static"] ? getPlaceholder(position, test, !0) || test.def : elem, !0 !== (rslt = processCommandObject(rslt)) && void 0 !== rslt.pos && rslt.pos !== position && (validatedPos = rslt.pos), !0 !== rslt && void 0 === rslt.pos && void 0 === rslt.c || !1 === revalidateMask(pos, $.extend({}, tst, {
                                input: function casing(elem, test, pos) {
                                    switch (opts.casing || test.casing) {
                                        case "upper":
                                            elem = elem.toUpperCase();
                                            break;
                                        case "lower":
                                            elem = elem.toLowerCase();
                                            break;
                                        case "title":
                                            var posBefore = maskset.validPositions[pos - 1];
                                            elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
                                            break;
                                        default:
                                            if ($.isFunction(opts.casing)) {
                                                var args = Array.prototype.slice.call(arguments);
                                                args.push(maskset.validPositions), elem = opts.casing.apply(this, args)
                                            }
                                    }
                                    return elem
                                }(elem, test, validatedPos)
                            }), fromIsValid, validatedPos) && (rslt = !1), !1
                        }
                    }), rslt
                }
                void 0 !== pos.begin && (maskPos = isRTL ? pos.end : pos.begin);
                var result = !0,
                    positionsClone = $.extend(!0, {}, maskset.validPositions);
                if (!1 === opts.keepStatic && void 0 !== maskset.excludes[maskPos] && !0 !== fromAlternate && !0 !== fromIsValid)
                    for (var i = maskPos; i < (isRTL ? pos.begin : pos.end); i++) void 0 !== maskset.excludes[i] && (maskset.excludes[i] = void 0, delete maskset.tests[i]);
                if ($.isFunction(opts.preValidation) && !0 !== fromIsValid && !0 !== validateOnly && (result = processCommandObject(result = opts.preValidation.call(el, getBuffer(), maskPos, c, isSelection(pos), opts, maskset, pos, strict || fromAlternate))), !0 === result) {
                    if (void 0 === inputmask.maxLength || maskPos < inputmask.maxLength) {
                        if (result = _isValid(maskPos, c, strict), (!strict || !0 === fromIsValid) && !1 === result && !0 !== validateOnly) {
                            var currentPosValid = maskset.validPositions[maskPos];
                            if (!currentPosValid || !0 !== currentPosValid.match["static"] || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
                                if (opts.insertMode || void 0 === maskset.validPositions[seekNext(maskPos)] || pos.end > maskPos) {
                                    var skip = !1;
                                    if (maskset.jitOffset[maskPos] && void 0 === maskset.validPositions[seekNext(maskPos)] && (!1 !== (result = isValid(maskPos + maskset.jitOffset[maskPos], c, !0)) && (!0 !== fromAlternate && (result.caret = maskPos), skip = !0)), pos.end > maskPos && (maskset.validPositions[maskPos] = void 0), !skip && !isMask(maskPos, opts.keepStatic))
                                        for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++)
                                            if (!1 !== (result = _isValid(nPos, c, strict))) {
                                                result = trackbackPositions(maskPos, void 0 !== result.pos ? result.pos : nPos) || result, maskPos = nPos;
                                                break
                                            }
                                }
                            } else result = {
                                caret: seekNext(maskPos)
                            }
                        }
                    } else result = !1;
                    !1 !== result || !opts.keepStatic || !isComplete(getBuffer()) && 0 !== maskPos || strict || !0 === fromAlternate ? isSelection(pos) && maskset.tests[maskPos] && 1 < maskset.tests[maskPos].length && opts.keepStatic && !strict && !0 !== fromAlternate && (result = alternate(!0)) : result = alternate(maskPos, c, strict, fromIsValid, void 0, pos), !0 === result && (result = {
                        pos: maskPos
                    })
                }
                if ($.isFunction(opts.postValidation) && !0 !== fromIsValid && !0 !== validateOnly) {
                    var postResult = opts.postValidation.call(el, getBuffer(!0), void 0 !== pos.begin ? isRTL ? pos.end : pos.begin : pos, c, result, opts, maskset, strict);
                    void 0 !== postResult && (result = !0 === postResult ? result : postResult)
                }
                return result && void 0 === result.pos && (result.pos = maskPos), !1 === result || !0 === validateOnly ? (resetMaskSet(!0), maskset.validPositions = $.extend(!0, {}, positionsClone)) : trackbackPositions(void 0, maskPos, !0), processCommandObject(result)
            }

            function trackbackPositions(originalPos, newPos, fillOnly) {
                if (void 0 === originalPos)
                    for (originalPos = newPos - 1; 0 < originalPos && !maskset.validPositions[originalPos]; originalPos--);
                for (var ps = originalPos; ps < newPos; ps++)
                    if (void 0 === maskset.validPositions[ps] && !isMask(ps, !0)) {
                        if (0 == ps ? getTest(ps) : maskset.validPositions[ps - 1]) {
                            var tests = getTests(ps).slice();
                            "" === tests[tests.length - 1].match.def && tests.pop();
                            var np, bestMatch = determineTestTemplate(ps, tests);
                            if (bestMatch && (!0 !== bestMatch.match.jit || "master" === bestMatch.match.newBlockMarker && (np = maskset.validPositions[ps + 1]) && !0 === np.match.optionalQuantifier) && ((bestMatch = $.extend({}, bestMatch, {
                                    input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def
                                })).generatedInput = !0, revalidateMask(ps, bestMatch, !0), !0 !== fillOnly)) return isValid(newPos, maskset.validPositions[newPos].input, !(maskset.validPositions[newPos] = void 0), !0)
                        }
                    }
            }

            function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
                function IsEnclosedStatic(pos, valids, selection) {
                    var posMatch = valids[pos];
                    if (void 0 === posMatch || !0 !== posMatch.match["static"] || !0 === posMatch.match.optionality || void 0 !== valids[0] && void 0 !== valids[0].alternation) return !1;
                    var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && !0 === valids[pos - 1].match["static"] && valids[pos - 1] : valids[pos - 1],
                        nextMatch = selection.end > pos + 1 ? valids[pos + 1] && !0 === valids[pos + 1].match["static"] && valids[pos + 1] : valids[pos + 1];
                    return prevMatch && nextMatch
                }
                var offset = 0,
                    begin = void 0 !== pos.begin ? pos.begin : pos,
                    end = void 0 !== pos.end ? pos.end : pos;
                if (pos.begin > pos.end && (begin = pos.end, end = pos.begin), validatedPos = void 0 !== validatedPos ? validatedPos : begin, begin !== end || opts.insertMode && void 0 !== maskset.validPositions[validatedPos] && void 0 === fromIsValid || void 0 === validTest) {
                    var i, positionsClone = $.extend(!0, {}, maskset.validPositions),
                        lvp = getLastValidPosition(void 0, !0);
                    for (maskset.p = begin, i = lvp; begin <= i; i--) delete maskset.validPositions[i], void 0 === validTest && delete maskset.tests[i + 1];
                    var t, canMatch, valid = !0,
                        j = validatedPos,
                        posMatch = j;
                    for (validTest && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest), posMatch++, j++), i = validTest ? end : end - 1; i <= lvp; i++) {
                        if (void 0 !== (t = positionsClone[i]) && !0 !== t.generatedInput && (end <= i || begin <= i && IsEnclosedStatic(i, positionsClone, {
                                begin: begin,
                                end: end
                            }))) {
                            for (;
                                "" !== getTest(posMatch).match.def;) {
                                if (!1 !== (canMatch = positionCanMatchDefinition(posMatch, t, opts)) || "+" === t.match.def) {
                                    "+" === t.match.def && getBuffer(!0);
                                    var result = isValid(posMatch, t.input, "+" !== t.match.def, "+" !== t.match.def);
                                    if (valid = !1 !== result, j = (result.pos || posMatch) + 1, !valid && canMatch) break
                                } else valid = !1;
                                if (valid) {
                                    void 0 === validTest && t.match["static"] && i === pos.begin && offset++;
                                    break
                                }
                                if (!valid && posMatch > maskset.maskLength) break;
                                posMatch++
                            }
                            "" == getTest(posMatch).match.def && (valid = !1), posMatch = j
                        }
                        if (!valid) break
                    }
                    if (!valid) return maskset.validPositions = $.extend(!0, {}, positionsClone), resetMaskSet(!0), !1
                } else validTest && getTest(validatedPos).match.cd === validTest.match.cd && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest));
                return resetMaskSet(!0), offset
            }

            function isMask(pos, strict, fuzzy) {
                var test = getTestTemplate(pos).match;
                if ("" === test.def && (test = getTest(pos).match), !0 !== test["static"]) return test.fn;
                if (!0 === fuzzy && void 0 !== maskset.validPositions[pos] && !0 !== maskset.validPositions[pos].generatedInput) return !0;
                if (!0 !== strict && -1 < pos) {
                    if (fuzzy) {
                        var tests = getTests(pos);
                        return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)
                    }
                    var testTemplate = determineTestTemplate(pos, getTests(pos)),
                        testPlaceHolder = getPlaceholder(pos, testTemplate.match);
                    return testTemplate.match.def !== testPlaceHolder
                }
                return !1
            }

            function seekNext(pos, newBlock, fuzzy) {
                void 0 === fuzzy && (fuzzy = !0);
                for (var position = pos + 1;
                    "" !== getTest(position).match.def && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position, void 0, !0)) || !0 !== newBlock && !isMask(position, void 0, fuzzy));) position++;
                return position
            }

            function seekPrevious(pos, newBlock) {
                var tests, position = pos;
                if (position <= 0) return 0;
                for (; 0 < --position && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position, void 0, !0) && ((tests = getTests(position)).length < 2 || 2 === tests.length && "" === tests[1].match.def)););
                return position
            }

            function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
                if (event && $.isFunction(opts.onBeforeWrite)) {
                    var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                    if (result) {
                        if (result.refreshFromBuffer) {
                            var refresh = result.refreshFromBuffer;
                            refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), buffer = getBuffer(!0)
                        }
                        void 0 !== caretPos && (caretPos = void 0 !== result.caret ? result.caret : caretPos)
                    }
                }
                if (void 0 !== input && (input.inputmask._valueSet(buffer.join("")), void 0 === caretPos || void 0 !== event && "blur" === event.type || caret(input, caretPos, void 0, void 0, void 0 !== event && "keydown" === event.type && (event.keyCode === keyCode.DELETE || event.keyCode === keyCode.BACKSPACE)), !0 === triggerEvents)) {
                    var $input = $(input),
                        nptVal = input.inputmask._valueGet();
                    input.inputmask.skipInputEvent = !0, $input.trigger("input"), setTimeout(function () {
                        nptVal === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(buffer) && $input.trigger("complete")
                    }, 0)
                }
            }

            function getPlaceholder(pos, test, returnPL) {
                if (void 0 !== (test = test || getTest(pos).match).placeholder || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
                if (!0 !== test["static"]) return opts.placeholder.charAt(pos % opts.placeholder.length);
                if (-1 < pos && void 0 === maskset.validPositions[pos]) {
                    var prevTest, tests = getTests(pos),
                        staticAlternations = [];
                    if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0))
                        for (var i = 0; i < tests.length; i++)
                            if ("" !== tests[i].match.def && !0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (!0 === tests[i].match["static"] || void 0 === prevTest || !1 !== tests[i].match.fn.test(prevTest.match.def, maskset, pos, !0, opts)) && (staticAlternations.push(tests[i]), !0 === tests[i].match["static"] && (prevTest = tests[i]), 1 < staticAlternations.length && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length)
                }
                return test.def
            }

            function HandleNativePlaceholder(npt, value) {
                if (ie) {
                    if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || "" === npt.placeholder)) {
                        var buffer = getBuffer().slice(),
                            nptValue = npt.inputmask._valueGet();
                        if (nptValue !== value) {
                            var lvp = getLastValidPosition(); - 1 === lvp && nptValue === getBufferTemplate().join("") ? buffer = [] : -1 !== lvp && clearOptionalTail(buffer), writeBuffer(npt, buffer)
                        }
                    }
                } else npt.placeholder !== value && (npt.placeholder = value, "" === npt.placeholder && npt.removeAttribute("placeholder"))
            }

            function determineNewCaretPosition(selectedCaret, tabbed) {
                if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), selectedCaret.begin === selectedCaret.end) {
                    switch (opts.positionCaretOnClick) {
                        case "none":
                            break;
                        case "select":
                            selectedCaret = {
                                begin: 0,
                                end: getBuffer().length
                            };
                            break;
                        case "ignore":
                            selectedCaret.end = selectedCaret.begin = seekNext(getLastValidPosition());
                            break;
                        case "radixFocus":
                            if (function doRadixFocus(clickPos) {
                                    if ("" !== opts.radixPoint && 0 !== opts.digits) {
                                        var vps = maskset.validPositions;
                                        if (void 0 === vps[clickPos] || vps[clickPos].input === getPlaceholder(clickPos)) {
                                            if (clickPos < seekNext(-1)) return !0;
                                            var radixPos = $.inArray(opts.radixPoint, getBuffer());
                                            if (-1 !== radixPos) {
                                                for (var vp in vps)
                                                    if (vps[vp] && radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
                                                return !0
                                            }
                                        }
                                    }
                                    return !1
                                }(selectedCaret.begin)) {
                                var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                                selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext(radixPos) : radixPos;
                                break
                            }
                            default:
                                var clickPosition = selectedCaret.begin,
                                    lvclickPosition = getLastValidPosition(clickPosition, !0),
                                    lastPosition = seekNext(-1 !== lvclickPosition || isMask(0) ? lvclickPosition : 0);
                                if (clickPosition < lastPosition) selectedCaret.end = selectedCaret.begin = isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition);
                                else {
                                    var lvp = maskset.validPositions[lvclickPosition],
                                        tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : void 0, lvp),
                                        placeholder = getPlaceholder(lastPosition, tt.match);
                                    if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, opts.keepStatic) && tt.match.def === placeholder) {
                                        var newPos = seekNext(lastPosition);
                                        (newPos <= clickPosition || clickPosition === lastPosition) && (lastPosition = newPos)
                                    }
                                    selectedCaret.end = selectedCaret.begin = lastPosition
                                }
                    }
                    return selectedCaret
                }
            }
            var valueBuffer, EventRuler = {
                    on: function (input, eventName, eventHandler) {
                        var ev = function ev(e) {
                            e.originalEvent && (e = e.originalEvent || e, arguments[0] = e);
                            var args, that = this,
                                inputmask = that.inputmask;
                            if (void 0 === inputmask && "FORM" !== this.nodeName) {
                                var imOpts = $.data(that, "_inputmask_opts");
                                imOpts ? new Inputmask(imOpts).mask(that) : EventRuler.off(that)
                            } else {
                                if ("setvalue" === e.type || "FORM" === this.nodeName || !(that.disabled || that.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === keyCode.TAB))) {
                                    switch (e.type) {
                                        case "input":
                                            if (!0 === inputmask.skipInputEvent || e.inputType && "insertCompositionText" === e.inputType) return inputmask.skipInputEvent = !1, e.preventDefault();
                                            break;
                                        case "keydown":
                                            inputmask.skipKeyPressEvent = !1, inputmask.skipInputEvent = !1;
                                            break;
                                        case "keypress":
                                            if (!0 === inputmask.skipKeyPressEvent) return e.preventDefault();
                                            inputmask.skipKeyPressEvent = !0;
                                            break;
                                        case "click":
                                        case "focus":
                                            return inputmask.validationEvent ? (inputmask.validationEvent = !1, input.blur(), HandleNativePlaceholder(input, (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).join("")), setTimeout(function () {
                                                input.focus()
                                            }, 3e3)) : (args = arguments, setTimeout(function () {
                                                input.inputmask && eventHandler.apply(that, args)
                                            }, 0)), !1
                                    }
                                    var returnVal = eventHandler.apply(that, arguments);
                                    return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal
                                }
                                e.preventDefault()
                            }
                        };
                        input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), -1 !== $.inArray(eventName, ["submit", "reset"]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev)
                    },
                    off: function (input, event) {
                        var events;
                        input.inputmask && input.inputmask.events && (event ? (events = [])[event] = input.inputmask.events[event] : events = input.inputmask.events, $.each(events, function (eventName, evArr) {
                            for (; 0 < evArr.length;) {
                                var ev = evArr.pop(); - 1 !== $.inArray(eventName, ["submit", "reset"]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev)
                            }
                            delete input.inputmask.events[eventName]
                        }))
                    }
                },
                EventHandlers = {
                    keydownEvent: function (e) {
                        var input = this,
                            $input = $(input),
                            k = e.keyCode,
                            pos = caret(input),
                            kdResult = opts.onKeyDown.call(this, e, getBuffer(), pos, opts);
                        if (void 0 !== kdResult) return kdResult;
                        if (k === keyCode.BACKSPACE || k === keyCode.DELETE || iphone && k === keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === keyCode.X && !("oncut" in input)) e.preventDefault(), handleRemove(input, k, pos), writeBuffer(input, getBuffer(!0), maskset.p, e, input.inputmask._valueGet() !== getBuffer().join(""));
                        else if (k === keyCode.END || k === keyCode.PAGE_DOWN) {
                            e.preventDefault();
                            var caretPos = seekNext(getLastValidPosition());
                            caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0)
                        } else k === keyCode.HOME && !e.shiftKey || k === keyCode.PAGE_UP ? (e.preventDefault(), caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(input, !0, !1, inputmask.undoValue.split("")), $input.trigger("click")) : !0 === opts.tabThrough && k === keyCode.TAB ? (!0 === e.shiftKey ? (!0 === getTest(pos.begin).match["static"] && (pos.begin = seekNext(pos.begin)), pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), pos.end = seekNext(pos.begin, !0), pos.end < maskset.maskLength && pos.end--), pos.begin < maskset.maskLength && (e.preventDefault(), caret(input, pos.begin, pos.end))) : e.shiftKey || opts.insertModeVisual && !1 === opts.insertMode && (k === keyCode.RIGHT ? setTimeout(function () {
                            var caretPos = caret(input);
                            caret(input, caretPos.begin)
                        }, 0) : k === keyCode.LEFT && setTimeout(function () {
                            var caretPos_begin = translatePosition(input.inputmask.caretPos.begin);
                            translatePosition(input.inputmask.caretPos.end);
                            caret(input, isRTL ? caretPos_begin + (caretPos_begin === maskset.maskLength ? 0 : 1) : caretPos_begin - (0 === caretPos_begin ? 0 : 1))
                        }, 0));
                        inputmask.ignorable = -1 !== $.inArray(k, opts.ignorables)
                    },
                    keypressEvent: function (e, checkval, writeOut, strict, ndx) {
                        var input = this,
                            $input = $(input),
                            k = e.which || e.charCode || e.keyCode;
                        if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || inputmask.ignorable)) return k === keyCode.ENTER && inputmask.undoValue !== getBuffer().join("") && (inputmask.undoValue = getBuffer().join(""), setTimeout(function () {
                            $input.trigger("change")
                        }, 0)), inputmask.skipInputEvent = !0;
                        if (k) {
                            44 !== k && 46 !== k || 3 !== e.location || "" === opts.radixPoint || (k = opts.radixPoint.charCodeAt(0));
                            var forwardPosition, pos = checkval ? {
                                    begin: ndx,
                                    end: ndx
                                } : caret(input),
                                c = String.fromCharCode(k);
                            maskset.writeOutBuffer = !0;
                            var valResult = isValid(pos, c, strict);
                            if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = void 0 !== valResult.caret ? valResult.caret : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos), maskset.p = forwardPosition), forwardPosition = opts.numericInput && void 0 === valResult.caret ? seekPrevious(forwardPosition) : forwardPosition, !1 !== writeOut && (setTimeout(function () {
                                    opts.onKeyValidation.call(input, k, valResult)
                                }, 0), maskset.writeOutBuffer && !1 !== valResult)) {
                                var buffer = getBuffer();
                                writeBuffer(input, buffer, forwardPosition, e, !0 !== checkval)
                            }
                            if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), valResult
                        }
                    },
                    pasteEvent: function (e) {
                        var tempValue, inputValue = this.inputmask._valueGet(!0),
                            caretPos = caret(this);
                        isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
                        var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
                            valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                        if (valueBeforeCaret == (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), valueAfterCaret == (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""), window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
                        else {
                            if (!e.clipboardData || !e.clipboardData.getData) return !0;
                            inputValue = valueBeforeCaret + e.clipboardData.getData("text/plain") + valueAfterCaret
                        }
                        var pasteValue = inputValue;
                        if ($.isFunction(opts.onBeforePaste)) {
                            if (!1 === (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts))) return e.preventDefault();
                            pasteValue = pasteValue || inputValue
                        }
                        return checkVal(this, !0, !1, pasteValue.toString().split(""), e), e.preventDefault()
                    },
                    inputFallBackEvent: function (e) {
                        var input = this,
                            inputValue = input.inputmask._valueGet(!0),
                            buffer = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join(""),
                            caretPos = caret(input, void 0, void 0, !0);
                        if (buffer !== inputValue) {
                            var changes = function analyseChanges(inputValue, buffer, caretPos) {
                                for (var bl, i, placeholder, frontPart = inputValue.substr(0, caretPos.begin).split(""), backPart = inputValue.substr(caretPos.begin).split(""), frontBufferPart = buffer.substr(0, caretPos.begin).split(""), backBufferPart = buffer.substr(caretPos.begin).split(""), fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length, bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length, action = "", data = []; frontPart.length < fpl;) frontPart.push("~");
                                for (; frontBufferPart.length < fpl;) frontBufferPart.push("~");
                                for (; backPart.length < bpl;) backPart.unshift("~");
                                for (; backBufferPart.length < bpl;) backBufferPart.unshift("~");
                                var newBuffer = frontPart.concat(backPart),
                                    oldBuffer = frontBufferPart.concat(backBufferPart);
                                for (i = 0, bl = newBuffer.length; i < bl; i++) switch (placeholder = getPlaceholder(translatePosition(i)), action) {
                                    case "insertText":
                                        oldBuffer[i - 1] === newBuffer[i] && caretPos.begin == newBuffer.length - 1 && data.push(newBuffer[i]), i = bl;
                                        break;
                                    case "insertReplacementText":
                                    case "deleteContentBackward":
                                        "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                                        break;
                                    default:
                                        newBuffer[i] !== oldBuffer[i] && ("~" !== newBuffer[i + 1] && newBuffer[i + 1] !== placeholder && void 0 !== newBuffer[i + 1] || (oldBuffer[i] !== placeholder || "~" !== oldBuffer[i + 1]) && "~" !== oldBuffer[i] ? "~" === oldBuffer[i + 1] && oldBuffer[i] === newBuffer[i + 1] ? (action = "insertText", data.push(newBuffer[i]), caretPos.begin--, caretPos.end--) : newBuffer[i] !== placeholder && "~" !== newBuffer[i] && ("~" === newBuffer[i + 1] || oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1]) ? (action = "insertReplacementText", data.push(newBuffer[i]), caretPos.begin--) : "~" === newBuffer[i] ? (action = "deleteContentBackward", !isMask(translatePosition(i), !0) && oldBuffer[i] !== opts.radixPoint || caretPos.end++) : i = bl : (action = "insertText", data.push(newBuffer[i]), caretPos.begin--, caretPos.end--))
                                }
                                return {
                                    action: action,
                                    data: data,
                                    caret: caretPos
                                }
                            }(inputValue = function ieMobileHandler(input, inputValue, caretPos) {
                                if (iemobile) {
                                    var inputChar = inputValue.replace(getBuffer().join(""), "");
                                    if (1 === inputChar.length) {
                                        var iv = inputValue.split("");
                                        iv.splice(caretPos.begin, 0, inputChar), inputValue = iv.join("")
                                    }
                                }
                                return inputValue
                            }(0, inputValue, caretPos), buffer, caretPos);
                            switch ((input.inputmask.shadowRoot || document).activeElement !== input && input.focus(), writeBuffer(input, getBuffer()), caret(input, caretPos.begin, caretPos.end, !0), changes.action) {
                                case "insertText":
                                case "insertReplacementText":
                                    $.each(changes.data, function (ndx, entry) {
                                        var keypress = new $.Event("keypress");
                                        keypress.which = entry.charCodeAt(0), inputmask.ignorable = !1, EventHandlers.keypressEvent.call(input, keypress)
                                    }), setTimeout(function () {
                                        inputmask.$el.trigger("keyup")
                                    }, 0);
                                    break;
                                case "deleteContentBackward":
                                    var keydown = new $.Event("keydown");
                                    keydown.keyCode = keyCode.BACKSPACE, EventHandlers.keydownEvent.call(input, keydown);
                                    break;
                                default:
                                    applyInputValue(input, inputValue)
                            }
                            e.preventDefault()
                        }
                    },
                    compositionendEvent: function (e) {
                        inputmask.$el.trigger("input")
                    },
                    setValueEvent: function (e, argument_1, argument_2) {
                        var value = e && e.detail ? e.detail[0] : argument_1;
                        void 0 === value && (value = this.inputmask._valueGet(!0)), applyInputValue(this, value), (e.detail && void 0 !== e.detail[1] || void 0 !== argument_2) && caret(this, e.detail ? e.detail[1] : argument_2)
                    },
                    focusEvent: function (e) {
                        var nptValue = this.inputmask._valueGet();
                        opts.showMaskOnFocus && nptValue !== getBuffer().join("") && writeBuffer(this, getBuffer(), seekNext(getLastValidPosition())), !0 !== opts.positionCaretOnTab || !1 !== inputmask.mouseEnter || isComplete(getBuffer()) && -1 !== getLastValidPosition() || EventHandlers.clickEvent.apply(this, [e, !0]), inputmask.undoValue = getBuffer().join("")
                    },
                    invalidEvent: function (e) {
                        inputmask.validationEvent = !0
                    },
                    mouseleaveEvent: function () {
                        inputmask.mouseEnter = !1, opts.clearMaskOnLostFocus && (this.inputmask.shadowRoot || document).activeElement !== this && HandleNativePlaceholder(this, inputmask.originalPlaceholder)
                    },
                    clickEvent: function (e, tabbed) {
                        if ((this.inputmask.shadowRoot || document).activeElement === this) {
                            var newCaretPosition = determineNewCaretPosition(caret(this), tabbed);
                            void 0 !== newCaretPosition && caret(this, newCaretPosition)
                        }
                    },
                    cutEvent: function (e) {
                        var pos = caret(this),
                            clipboardData = window.clipboardData || e.clipboardData,
                            clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                        clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")), document.execCommand && document.execCommand("copy"), handleRemove(this, keyCode.DELETE, pos), writeBuffer(this, getBuffer(), maskset.p, e, inputmask.undoValue !== getBuffer().join(""))
                    },
                    blurEvent: function (e) {
                        var $input = $(this);
                        if (this.inputmask) {
                            HandleNativePlaceholder(this, inputmask.originalPlaceholder);
                            var nptValue = this.inputmask._valueGet(),
                                buffer = getBuffer().slice();
                            "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), !1 === isComplete(buffer) && (setTimeout(function () {
                                $input.trigger("incomplete")
                            }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), writeBuffer(this, buffer, void 0, e)), inputmask.undoValue !== getBuffer().join("") && (inputmask.undoValue = getBuffer().join(""), $input.trigger("change"))
                        }
                    },
                    mouseenterEvent: function () {
                        inputmask.mouseEnter = !0, (this.inputmask.shadowRoot || document).activeElement !== this && (null == inputmask.originalPlaceholder && this.placeholder !== inputmask.originalPlaceholder && (inputmask.originalPlaceholder = this.placeholder), opts.showMaskOnHover && HandleNativePlaceholder(this, (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).join("")))
                    },
                    submitEvent: function () {
                        inputmask.undoValue !== getBuffer().join("") && inputmask.$el.trigger("change"), opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""), opts.clearIncomplete && !1 === isComplete(getBuffer()) && el.inputmask._valueSet(""), opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), setTimeout(function () {
                            writeBuffer(el, getBuffer())
                        }, 0))
                    },
                    resetEvent: function () {
                        el.inputmask.refreshValue = !0, setTimeout(function () {
                            applyInputValue(el, el.inputmask._valueGet(!0))
                        }, 0)
                    }
                };

            function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
                var inputmask = this || input.inputmask,
                    inputValue = nptvl.slice(),
                    charCodes = "",
                    initialNdx = -1,
                    result = void 0;
                resetMaskSet(), maskset.tests = {}, initialNdx = opts.radixPoint ? determineNewCaretPosition({
                    begin: 0,
                    end: 0
                }).begin : 0, maskset.p = initialNdx, inputmask.caretPos = {
                    begin: initialNdx
                };
                var staticMatches = [],
                    prevCaretPos = inputmask.caretPos;
                if ($.each(inputValue, function (ndx, charCode) {
                        if (void 0 !== charCode)
                            if (void 0 === maskset.validPositions[ndx] && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, void 0, void 0, !0)) maskset.p++;
                            else {
                                var keypress = new $.Event("_checkval");
                                keypress.which = charCode.toString().charCodeAt(0), charCodes += charCode;
                                var lvp = getLastValidPosition(void 0, !0);
                                ! function isTemplateMatch(ndx, charCodes) {
                                    for (var targetTemplate = getMaskTemplate(!0, 0).slice(ndx, seekNext(ndx)).join("").replace(/'/g, ""), charCodeNdx = targetTemplate.indexOf(charCodes); 0 < charCodeNdx && " " === targetTemplate[charCodeNdx - 1];) charCodeNdx--;
                                    var match = 0 === charCodeNdx && !isMask(ndx) && (getTest(ndx).match.nativeDef === charCodes.charAt(0) || !0 === getTest(ndx).match["static"] && getTest(ndx).match.nativeDef === "'" + charCodes.charAt(0) || " " === getTest(ndx).match.nativeDef && (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) || !0 === getTest(ndx + 1).match["static"] && getTest(ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
                                    if (!match && 0 < charCodeNdx && !isMask(ndx, !1, !0)) {
                                        var nextPos = seekNext(ndx);
                                        inputmask.caretPos.begin < nextPos && (inputmask.caretPos = {
                                            begin: nextPos
                                        })
                                    }
                                    return match
                                }(initialNdx, charCodes) ? (result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, inputmask.caretPos.begin)) && (initialNdx = inputmask.caretPos.begin + 1, charCodes = "") : result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, lvp + 1), result ? (void 0 !== result.pos && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match["static"] && void 0 === maskset.validPositions[result.pos].alternation && (staticMatches.push(result.pos), isRTL || (result.forwardPosition = result.pos + 1)), writeBuffer(void 0, getBuffer(), result.forwardPosition, keypress, !1), inputmask.caretPos = {
                                    begin: result.forwardPosition,
                                    end: result.forwardPosition
                                }, prevCaretPos = inputmask.caretPos) : inputmask.caretPos = prevCaretPos
                            }
                    }), 0 < staticMatches.length) {
                    var sndx, validPos, nextValid = seekNext(-1, void 0, !1);
                    if (!isComplete(getBuffer()) && staticMatches.length <= nextValid || isComplete(getBuffer()) && 0 < staticMatches.length && staticMatches.length !== nextValid && 0 === staticMatches[0])
                        for (var nextSndx = nextValid; void 0 !== (sndx = staticMatches.shift());) {
                            var keypress = new $.Event("_checkval");
                            if ((validPos = maskset.validPositions[sndx]).generatedInput = !0, keypress.which = validPos.input.charCodeAt(0), (result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, nextSndx)) && void 0 !== result.pos && result.pos !== sndx && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match["static"]) staticMatches.push(result.pos);
                            else if (!result) break;
                            nextSndx++
                        } else
                            for (; sndx = staticMatches.pop();)(validPos = maskset.validPositions[sndx]) && (validPos.generatedInput = !0)
                }
                if (writeOut)
                    for (var vndx in writeBuffer(input, getBuffer(), result ? result.forwardPosition : void 0, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type && inputmask.undoValue !== getBuffer().join("")), maskset.validPositions) !0 !== maskset.validPositions[vndx].match.generated && delete maskset.validPositions[vndx].generatedInput
            }

            function unmaskedvalue(input) {
                if (input) {
                    if (void 0 === input.inputmask) return input.value;
                    input.inputmask && input.inputmask.refreshValue && applyInputValue(input, input.inputmask._valueGet(!0))
                }
                var umValue = [],
                    vps = maskset.validPositions;
                for (var pndx in vps) vps[pndx] && vps[pndx].match && (1 != vps[pndx].match["static"] || !0 !== vps[pndx].generatedInput) && umValue.push(vps[pndx].input);
                var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");
                if ($.isFunction(opts.onUnMask)) {
                    var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                    unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts)
                }
                return unmaskedValue
            }

            function translatePosition(pos) {
                return !isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || !el || (pos = el.inputmask._valueGet().length - pos), pos
            }

            function caret(input, begin, end, notranslate, isDelete) {
                var range;
                if (void 0 === begin) return "selectionStart" in input && "selectionEnd" in input ? (begin = input.selectionStart, end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, end = range.endOffset) : document.selection && document.selection.createRange && (end = (begin = 0 - (range = document.selection.createRange()).duplicate().moveStart("character", -input.inputmask._valueGet().length)) + range.text.length), {
                    begin: notranslate ? begin : translatePosition(begin),
                    end: notranslate ? end : translatePosition(end)
                };
                if ($.isArray(begin) && (end = isRTL ? begin[0] : begin[1], begin = isRTL ? begin[1] : begin[0]), void 0 !== begin.begin && (end = isRTL ? begin.begin : begin.end, begin = isRTL ? begin.end : begin.begin), "number" == typeof begin) {
                    begin = notranslate ? begin : translatePosition(begin), end = "number" == typeof (end = notranslate ? end : translatePosition(end)) ? end : begin;
                    var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                    if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, input.inputmask.caretPos = {
                            begin: begin,
                            end: end
                        }, opts.insertModeVisual && !1 === opts.insertMode && begin === end && (isDelete || end++), input === (input.inputmask.shadowRoot || document).activeElement)
                        if ("setSelectionRange" in input) input.setSelectionRange(begin, end);
                        else if (window.getSelection) {
                        if (range = document.createRange(), void 0 === input.firstChild || null === input.firstChild) {
                            var textNode = document.createTextNode("");
                            input.appendChild(textNode)
                        }
                        range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), range.collapse(!0);
                        var sel = window.getSelection();
                        sel.removeAllRanges(), sel.addRange(range)
                    } else input.createTextRange && ((range = input.createTextRange()).collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), range.select())
                }
            }

            function determineLastRequiredPosition(returnDefinition) {
                var pos, testPos, buffer = getMaskTemplate(!0, getLastValidPosition(), !0, !0),
                    bl = buffer.length,
                    lvp = getLastValidPosition(),
                    positions = {},
                    lvTest = maskset.validPositions[lvp],
                    ndxIntlzr = void 0 !== lvTest ? lvTest.locator.slice() : void 0;
                for (pos = lvp + 1; pos < buffer.length; pos++) ndxIntlzr = (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1)).locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
                var lvTestAlt = lvTest && void 0 !== lvTest.alternation ? lvTest.locator[lvTest.alternation] : void 0;
                for (pos = bl - 1; lvp < pos && (((testPos = positions[pos]).match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && 1 != testPos.match["static"] || !0 === testPos.match["static"] && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) bl--;
                return returnDefinition ? {
                    l: bl,
                    def: positions[bl] ? positions[bl].match : void 0
                } : bl
            }

            function clearOptionalTail(buffer) {
                for (var lmnt, template = getMaskTemplate(!(buffer.length = 0), 0, !0, void 0, !0); void 0 !== (lmnt = template.shift());) buffer.push(lmnt);
                return buffer
            }

            function isComplete(buffer) {
                if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
                if ("*" !== opts.repeat) {
                    var complete = !1,
                        lrp = determineLastRequiredPosition(!0),
                        aml = seekPrevious(lrp.l);
                    if (void 0 === lrp.def || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                        complete = !0;
                        for (var i = 0; i <= aml; i++) {
                            var test = getTestTemplate(i).match;
                            if (!0 !== test["static"] && void 0 === maskset.validPositions[i] && !0 !== test.optionality && !0 !== test.optionalQuantifier || !0 === test["static"] && buffer[i] !== getPlaceholder(i, test)) {
                                complete = !1;
                                break
                            }
                        }
                    }
                    return complete
                }
            }

            function handleRemove(input, k, pos, strict, fromIsValid) {
                if ((opts.numericInput || isRTL) && (k === keyCode.BACKSPACE ? k = keyCode.DELETE : k === keyCode.DELETE && (k = keyCode.BACKSPACE), isRTL)) {
                    var pend = pos.end;
                    pos.end = pos.begin, pos.begin = pend
                }
                var offset, lvp = getLastValidPosition(void 0, !0);
                if (pos.end >= getBuffer().length && lvp >= pos.end && (pos.end = lvp + 1), k === keyCode.BACKSPACE ? pos.end - pos.begin < 1 && (pos.begin = seekPrevious(pos.begin)) : k === keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0, !0) ? pos.end + 1 : seekNext(pos.end) + 1), !1 !== (offset = revalidateMask(pos))) {
                    if (!0 !== strict && !1 !== opts.keepStatic || null !== opts.regex && -1 !== getTest(pos.begin).match.def.indexOf("|")) {
                        var result = alternate(!0);
                        if (result) {
                            var newPos = void 0 !== result.caret ? result.caret : result.pos ? seekNext(result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition(-1, !0);
                            (k !== keyCode.DELETE || pos.begin > newPos) && pos.begin
                        }
                    }!0 !== strict && (maskset.p = k === keyCode.DELETE ? pos.begin + offset : pos.begin)
                }
            }

            function applyInputValue(input, value) {
                input.inputmask.refreshValue = !1, $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), checkVal(input, !0, !1, value = value.toString().split("")), inputmask.undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && -1 === getLastValidPosition() && input.inputmask._valueSet("")
            }
            if (void 0 !== actionObj) switch (actionObj.action) {
                case "isComplete":
                    return el = actionObj.el, isComplete(getBuffer());
                case "unmaskedvalue":
                    return void 0 !== el && void 0 === actionObj.value || (valueBuffer = actionObj.value, valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer).split(""), checkVal.call(this, void 0, !1, !1, valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, void 0, getBuffer(), 0, opts)), unmaskedvalue(el);
                case "mask":
                    ! function mask() {
                        EventRuler.off(el);
                        var isSupported = function isElementTypeSupported(input, opts) {
                            "textarea" !== input.tagName.toLowerCase() && opts.ignorables.push(keyCode.ENTER);
                            var elementType = input.getAttribute("type"),
                                isSupported = "input" === input.tagName.toLowerCase() && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "textarea" === input.tagName.toLowerCase();
                            if (!isSupported)
                                if ("input" === input.tagName.toLowerCase()) {
                                    var el = document.createElement("input");
                                    el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null
                                } else isSupported = "partial";
                            return !1 !== isSupported ? function patchValueProperty(npt) {
                                var valueGet, valueSet;

                                function getter() {
                                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? (this.inputmask.shadowRoot || document.activeElement) === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this)
                                }

                                function setter(value) {
                                    valueSet.call(this, value), this.inputmask && applyInputValue(this, value)
                                }
                                if (!npt.inputmask.__valueGet) {
                                    if (!0 !== opts.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : void 0;
                                            valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                                                get: getter,
                                                set: setter,
                                                configurable: !0
                                            })) : "input" !== npt.tagName.toLowerCase() && (valueGet = function valueGet() {
                                                return this.textContent
                                            }, valueSet = function valueSet(value) {
                                                this.textContent = value
                                            }, Object.defineProperty(npt, "value", {
                                                get: getter,
                                                set: setter,
                                                configurable: !0
                                            }))
                                        } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), npt.__defineSetter__("value", setter));
                                        npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet
                                    }
                                    npt.inputmask._valueGet = function (overruleRTL) {
                                        return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el)
                                    }, npt.inputmask._valueSet = function (value, overruleRTL) {
                                        valueSet.call(this.el, null == value ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value)
                                    }, void 0 === valueGet && (valueGet = function valueGet() {
                                        return this.value
                                    }, valueSet = function valueSet(value) {
                                        this.value = value
                                    }, function patchValhook(type) {
                                        if ($.valHooks && (void 0 === $.valHooks[type] || !0 !== $.valHooks[type].inputmaskpatch)) {
                                            var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
                                                    return elem.value
                                                },
                                                valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
                                                    return elem.value = value, elem
                                                };
                                            $.valHooks[type] = {
                                                get: function (elem) {
                                                    if (elem.inputmask) {
                                                        if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                                                        var result = valhookGet(elem);
                                                        return -1 !== getLastValidPosition(void 0, void 0, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : ""
                                                    }
                                                    return valhookGet(elem)
                                                },
                                                set: function (elem, value) {
                                                    var result = valhookSet(elem, value);
                                                    return elem.inputmask && applyInputValue(elem, value), result
                                                },
                                                inputmaskpatch: !0
                                            }
                                        }
                                    }(npt.type), function installNativeValueSetFallback(npt) {
                                        EventRuler.on(npt, "mouseenter", function () {
                                            var value = this.inputmask._valueGet(!0);
                                            value !== (isRTL ? getBuffer().reverse() : getBuffer()).join("") && applyInputValue(this, value)
                                        })
                                    }(npt))
                                }
                            }(input) : input.inputmask = void 0, isSupported
                        }(el, opts);
                        if (!1 !== isSupported) {
                            inputmask.originalPlaceholder = el.placeholder, inputmask.maxLength = void 0 !== el ? el.maxLength : void 0, -1 === inputmask.maxLength && (inputmask.maxLength = void 0), "inputMode" in el && null === el.getAttribute("inputmode") && (el.inputMode = opts.inputmode, el.setAttribute("inputmode", opts.inputmode)), !0 === isSupported && (opts.showMaskOnFocus = opts.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(el.autocomplete), iphone && (opts.insertModeVisual = !1), EventRuler.on(el, "submit", EventHandlers.submitEvent), EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "blur", EventHandlers.blurEvent), EventRuler.on(el, "focus", EventHandlers.focusEvent), EventRuler.on(el, "invalid", EventHandlers.invalidEvent), EventRuler.on(el, "click", EventHandlers.clickEvent), EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent), EventRuler.on(el, "paste", EventHandlers.pasteEvent), EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete), EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared), mobile || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent), EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent), EventRuler.on(el, "compositionend", EventHandlers.compositionendEvent)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent), inputmask.undoValue = getBufferTemplate().join("");
                            var activeElement = (el.inputmask.shadowRoot || document).activeElement;
                            if ("" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || activeElement === el) {
                                applyInputValue(el, el.inputmask._valueGet(!0));
                                var buffer = getBuffer().slice();
                                !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), opts.clearMaskOnLostFocus && activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), (!1 === opts.clearMaskOnLostFocus || opts.showMaskOnFocus && activeElement === el || "" !== el.inputmask._valueGet(!0)) && writeBuffer(el, buffer), activeElement === el && caret(el, seekNext(getLastValidPosition()))
                            }
                        }
                    }();
                    break;
                case "format":
                    return valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value).split(""), checkVal.call(this, void 0, !0, !1, valueBuffer), actionObj.metadata ? {
                        value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                        metadata: maskScope.call(this, {
                            action: "getmetadata"
                        }, maskset, opts)
                    } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");
                case "isValid":
                    actionObj.value ? (valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value).split(""), checkVal.call(this, void 0, !0, !1, valueBuffer)) : actionObj.value = isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");
                    for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; rl < lmib && !isMask(lmib); lmib--);
                    return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === (isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""));
                case "getemptymask":
                    return getBufferTemplate().join("");
                case "remove":
                    if (el && el.inputmask) {
                        $.data(el, "_inputmask_opts", null);
                        var cv = opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(opts.autoUnmask);
                        cv !== getBufferTemplate().join("") ? el.inputmask._valueSet(cv, opts.autoUnmask) : el.inputmask._valueSet(""), EventRuler.off(el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value") && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
                            get: el.inputmask.__valueGet,
                            set: el.inputmask.__valueSet,
                            configurable: !0
                        }) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet), el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = void 0
                    }
                    return el;
                case "getmetadata":
                    if ($.isArray(maskset.metadata)) {
                        var maskTarget = getMaskTemplate(!0, 0, !1).join("");
                        return $.each(maskset.metadata, function (ndx, mtdt) {
                            if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1
                        }), maskTarget
                    }
                    return maskset.metadata
            }
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";

        function _typeof(obj) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            })(obj)
        }
        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function (object) {
            return object.__proto__
        } : function (object) {
            return object.constructor.prototype
        })
    }, function (module, exports, __webpack_require__) {
        "use strict";

        function _typeof(obj) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            })(obj)
        }
        var Inputmask = __webpack_require__(1),
            $ = Inputmask.dependencyLib,
            keyCode = __webpack_require__(0),
            formatCode = {
                d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
                dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
                    return pad(Date.prototype.getDate.call(this), 2)
                }],
                ddd: [""],
                dddd: [""],
                m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
                    return Date.prototype.getMonth.call(this) + 1
                }],
                mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
                    return pad(Date.prototype.getMonth.call(this) + 1, 2)
                }],
                mmm: [""],
                mmmm: [""],
                yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function () {
                    return pad(Date.prototype.getFullYear.call(this), 2)
                }],
                yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
                    return pad(Date.prototype.getFullYear.call(this), 4)
                }],
                h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
                hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
                    return pad(Date.prototype.getHours.call(this), 2)
                }],
                hx: [function (x) {
                    return "[0-9]{".concat(x, "}")
                }, Date.prototype.setHours, "hours", function (x) {
                    return Date.prototype.getHours
                }],
                H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
                HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
                    return pad(Date.prototype.getHours.call(this), 2)
                }],
                Hx: [function (x) {
                    return "[0-9]{".concat(x, "}")
                }, Date.prototype.setHours, "hours", function (x) {
                    return function () {
                        return pad(Date.prototype.getHours.call(this), x)
                    }
                }],
                M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
                MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function () {
                    return pad(Date.prototype.getMinutes.call(this), 2)
                }],
                s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
                ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function () {
                    return pad(Date.prototype.getSeconds.call(this), 2)
                }],
                l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
                    return pad(Date.prototype.getMilliseconds.call(this), 3)
                }],
                L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
                    return pad(Date.prototype.getMilliseconds.call(this), 2)
                }],
                t: ["[ap]"],
                tt: ["[ap]m"],
                T: ["[AP]"],
                TT: ["[AP]M"],
                Z: [""],
                o: [""],
                S: [""]
            },
            formatAlias = {
                isoDate: "yyyy-mm-dd",
                isoTime: "HH:MM:ss",
                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
            };

        function formatcode(match) {
            var dynMatches = new RegExp("\\d+$").exec(match[0]);
            if (dynMatches && void 0 !== dynMatches[0]) {
                var fcode = formatCode[match[0][0] + "x"].slice("");
                return fcode[0] = fcode[0](dynMatches[0]), fcode[3] = fcode[3](dynMatches[0]), fcode
            }
            if (formatCode[match[0]]) return formatCode[match[0]]
        }

        function getTokenizer(opts) {
            if (!opts.tokenizer) {
                var tokens = [],
                    dyntokens = [];
                for (var ndx in formatCode)
                    if (/\.*x$/.test(ndx)) {
                        var dynToken = ndx[0] + "\\d+"; - 1 === dyntokens.indexOf(dynToken) && dyntokens.push(dynToken)
                    } else -1 === tokens.indexOf(ndx[0]) && tokens.push(ndx[0]);
                opts.tokenizer = "(" + (0 < dyntokens.length ? dyntokens.join("|") + "|" : "") + tokens.join("+|") + ")+?|.", opts.tokenizer = new RegExp(opts.tokenizer, "g")
            }
            return opts.tokenizer
        }

        function parse(format, dateObjValue, opts, raw) {
            var match, fcode, mask = "";
            for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format);)
                if (void 0 === dateObjValue)
                    if (fcode = formatcode(match)) mask += "(" + fcode[0] + ")";
                    else switch (match[0]) {
                        case "[":
                            mask += "(";
                            break;
                        case "]":
                            mask += ")?";
                            break;
                        default:
                            mask += Inputmask.escapeRegex(match[0])
                    } else if (fcode = formatcode(match))
                        if (!0 !== raw && fcode[3]) {
                            mask += fcode[3].call(dateObjValue.date)
                        } else fcode[2] ? mask += dateObjValue["raw" + fcode[2]] : mask += match[0];
            else mask += match[0];
            return mask
        }

        function pad(val, len) {
            for (val = String(val), len = len || 2; val.length < len;) val = "0" + val;
            return val
        }

        function analyseMask(maskString, format, opts) {
            var targetProp, match, dateOperation, dateObj = {
                    date: new Date(1, 0, 1)
                },
                mask = maskString;

            function setValue(dateObj, value, opts) {
                dateObj[targetProp] = function extendProperty(value) {
                    return value.replace(/[^0-9]/g, "0")
                }(value), dateObj["raw" + targetProp] = value, void 0 !== dateOperation && dateOperation.call(dateObj.date, "month" == targetProp ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp])
            }
            if ("string" == typeof mask) {
                for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format);) {
                    var value = mask.slice(0, match[0].length);
                    formatCode.hasOwnProperty(match[0]) && (targetProp = formatCode[match[0]][2], dateOperation = formatCode[match[0]][1], setValue(dateObj, value)), mask = mask.slice(value.length)
                }
                return dateObj
            }
            if (mask && "object" === _typeof(mask) && mask.hasOwnProperty("date")) return mask
        }

        function importDate(dateObj, opts) {
            var match, date = "";
            for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(opts.inputFormat);) "d" === match[0].charAt(0) ? date += pad(dateObj.getDate(), match[0].length) : "m" === match[0].charAt(0) ? date += pad(dateObj.getMonth() + 1, match[0].length) : "yyyy" === match[0] ? date += dateObj.getFullYear().toString() : "y" === match[0].charAt(0) && (date += pad(dateObj.getYear(), match[0].length));
            return date
        }

        function getTokenMatch(pos, opts) {
            var targetMatch, match, calcPos = 0,
                matchLength = 0;
            for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(opts.inputFormat);) {
                var dynMatches = new RegExp("\\d+$").exec(match[0]);
                if (pos <= (calcPos += matchLength = dynMatches ? parseInt(dynMatches[0]) : match[0].length)) {
                    targetMatch = match, match = getTokenizer(opts).exec(opts.inputFormat);
                    break
                }
            }
            return {
                targetMatchIndex: calcPos - matchLength,
                nextMatch: match,
                targetMatch: targetMatch
            }
        }
        Inputmask.extendAliases({
            datetime: {
                mask: function (opts) {
                    return opts.numericInput = !1, formatCode.S = opts.i18n.ordinalSuffix.join("|"), opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat, opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat, opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat, opts.placeholder = "" !== opts.placeholder ? opts.placeholder : opts.inputFormat.replace(/[[\]]/, ""), opts.regex = parse(opts.inputFormat, void 0, opts), opts.min = analyseMask(opts.min, opts.inputFormat, opts), opts.max = analyseMask(opts.max, opts.inputFormat, opts), null
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: void 0,
                outputFormat: void 0,
                min: null,
                max: null,
                skipOptionalPartCharacter: "",
                i18n: {
                    dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    ordinalSuffix: ["st", "nd", "rd", "th"]
                },
                preValidation: function (buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                    if (strict) return !0;
                    if (isNaN(c) && buffer[pos] !== c) {
                        var tokenMatch = getTokenMatch(pos, opts);
                        if (tokenMatch.nextMatch && tokenMatch.nextMatch[0] === c && 1 < tokenMatch.targetMatch[0].length) {
                            var validator = formatCode[tokenMatch.targetMatch[0]][0];
                            if (new RegExp(validator).test("0" + buffer[pos - 1])) return buffer[pos] = buffer[pos - 1], buffer[pos - 1] = "0", {
                                fuzzy: !0,
                                buffer: buffer,
                                refreshFromBuffer: {
                                    start: pos - 1,
                                    end: pos + 1
                                },
                                pos: pos + 1
                            }
                        }
                    }
                    return !0
                },
                postValidation: function (buffer, pos, c, currentResult, opts, maskset, strict) {
                    if (strict) return !0;
                    var tokenMatch, validator;
                    if (!1 === currentResult) return (tokenMatch = getTokenMatch(pos + 1, opts)).targetMatch && tokenMatch.targetMatchIndex === pos && 1 < tokenMatch.targetMatch[0].length && void 0 !== formatCode[tokenMatch.targetMatch[0]] && (validator = formatCode[tokenMatch.targetMatch[0]][0], new RegExp(validator).test("0" + c)) ? {
                        insert: [{
                            pos: pos,
                            c: "0"
                        }, {
                            pos: pos + 1,
                            c: c
                        }],
                        pos: pos + 1
                    } : currentResult;
                    if (currentResult.fuzzy && (buffer = currentResult.buffer, pos = currentResult.pos), (tokenMatch = getTokenMatch(pos, opts)).targetMatch && tokenMatch.targetMatch[0] && void 0 !== formatCode[tokenMatch.targetMatch[0]]) {
                        validator = formatCode[tokenMatch.targetMatch[0]][0];
                        var part = buffer.slice(tokenMatch.targetMatchIndex, tokenMatch.targetMatchIndex + tokenMatch.targetMatch[0].length);
                        !1 === new RegExp(validator).test(part.join("")) && 2 === tokenMatch.targetMatch[0].length && maskset.validPositions[tokenMatch.targetMatchIndex] && maskset.validPositions[tokenMatch.targetMatchIndex + 1] && (maskset.validPositions[tokenMatch.targetMatchIndex + 1].input = "0")
                    }
                    var result = currentResult,
                        dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
                    return result && dateParts.date.getTime() == dateParts.date.getTime() && (result = (result = function isValidDate(dateParts, currentResult) {
                        return (!isFinite(dateParts.rawday) || "29" == dateParts.day && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day) && currentResult
                    }(dateParts, result)) && function isDateInRange(dateParts, opts) {
                        var result = !0;
                        if (opts.min) {
                            if (dateParts.rawyear) {
                                var rawYear = dateParts.rawyear.replace(/[^0-9]/g, "");
                                result = opts.min.year.substr(0, rawYear.length) <= rawYear
                            }
                            dateParts.year === dateParts.rawyear && opts.min.date.getTime() == opts.min.date.getTime() && (result = opts.min.date.getTime() <= dateParts.date.getTime())
                        }
                        return result && opts.max && opts.max.date.getTime() == opts.max.date.getTime() && (result = opts.max.date.getTime() >= dateParts.date.getTime()), result
                    }(dateParts, opts)), pos && result && currentResult.pos !== pos ? {
                        buffer: parse(opts.inputFormat, dateParts, opts).split(""),
                        refreshFromBuffer: {
                            start: pos,
                            end: currentResult.pos
                        }
                    } : result
                },
                onKeyDown: function (e, buffer, caretPos, opts) {
                    e.ctrlKey && e.keyCode === keyCode.RIGHT && (this.inputmask._valueSet(importDate(new Date, opts)), $(this).trigger("setvalue"))
                },
                onUnMask: function (maskedValue, unmaskedValue, opts) {
                    return unmaskedValue ? parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts, !0) : unmaskedValue
                },
                casing: function (elem, test, pos, validPositions) {
                    return 0 == test.nativeDef.indexOf("[ap]") ? elem.toLowerCase() : 0 == test.nativeDef.indexOf("[AP]") ? elem.toUpperCase() : elem
                },
                onBeforeMask: function (initialValue, opts) {
                    return "[object Date]" === Object.prototype.toString.call(initialValue) && (initialValue = importDate(initialValue, opts)), initialValue
                },
                insertMode: !1,
                shiftPositions: !1,
                keepStatic: !1,
                inputmode: "numeric"
            }
        }), module.exports = Inputmask
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var Inputmask = __webpack_require__(1),
            $ = Inputmask.dependencyLib,
            keyCode = __webpack_require__(0);

        function autoEscape(txt, opts) {
            for (var escapedTxt = "", i = 0; i < txt.length; i++) Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker[0] === txt.charAt(i) || opts.optionalmarker[1] === txt.charAt(i) || opts.quantifiermarker[0] === txt.charAt(i) || opts.quantifiermarker[1] === txt.charAt(i) || opts.groupmarker[0] === txt.charAt(i) || opts.groupmarker[1] === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
            return escapedTxt
        }

        function alignDigits(buffer, digits, opts, force) {
            if (0 < buffer.length && 0 < digits && (!opts.digitsOptional || force)) {
                var radixPosition = $.inArray(opts.radixPoint, buffer); - 1 === radixPosition && (buffer.push(opts.radixPoint), radixPosition = buffer.length - 1);
                for (var i = 1; i <= digits; i++) isFinite(buffer[radixPosition + i]) || (buffer[radixPosition + i] = "0")
            }
            return buffer
        }

        function findValidator(symbol, maskset) {
            var posNdx = 0;
            if ("+" === symbol) {
                for (posNdx in maskset.validPositions);
                posNdx = parseInt(posNdx)
            }
            for (var tstNdx in maskset.tests)
                if (posNdx <= (tstNdx = parseInt(tstNdx)))
                    for (var ndx = 0, ndxl = maskset.tests[tstNdx].length; ndx < ndxl; ndx++)
                        if ((void 0 === maskset.validPositions[tstNdx] || "-" === symbol) && maskset.tests[tstNdx][ndx].match.def === symbol) return tstNdx + (void 0 !== maskset.validPositions[tstNdx] && "-" !== symbol ? 1 : 0);
            return posNdx
        }

        function findValid(symbol, maskset) {
            var ret = -1;
            return $.each(maskset.validPositions, function (ndx, tst) {
                if (tst && tst.match.def === symbol) return ret = parseInt(ndx), !1
            }), ret
        }

        function decimalValidator(chrs, maskset, pos, strict, opts) {
            var radixPos = maskset.buffer ? maskset.buffer.indexOf(opts.radixPoint) : -1,
                result = -1 !== radixPos && new RegExp("[0-9１-９]").test(chrs);
            return opts._radixDance && result && null == maskset.validPositions[radixPos] ? {
                insert: {
                    pos: radixPos === pos ? radixPos + 1 : radixPos,
                    c: opts.radixPoint
                },
                pos: pos
            } : result
        }
        Inputmask.extendAliases({
            numeric: {
                mask: function genMask(opts) {
                    opts.repeat = 0, opts.groupSeparator === opts.radixPoint && opts.digits && "0" !== opts.digits && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = void 0), 1 < opts.placeholder.length && (opts.placeholder = opts.placeholder.charAt(0)), "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && (opts.positionCaretOnClick = "lvp");
                    var decimalDef = "0",
                        radixPointDef = opts.radixPoint;
                    !0 === opts.numericInput && void 0 === opts.__financeInput ? (decimalDef = "1", opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts._radixDance = !1, radixPointDef = "," === opts.radixPoint ? "?" : "!", "" !== opts.radixPoint && void 0 === opts.definitions[radixPointDef] && (opts.definitions[radixPointDef] = {}, opts.definitions[radixPointDef].validator = "[" + opts.radixPoint + "]", opts.definitions[radixPointDef].placeholder = opts.radixPoint, opts.definitions[radixPointDef]["static"] = !0, opts.definitions[radixPointDef].generated = !0)) : (opts.__financeInput = !1, opts.numericInput = !0);
                    var altMask, mask = "[+]";
                    if (mask += autoEscape(opts.prefix, opts), "" !== opts.groupSeparator ? (void 0 === opts.definitions[opts.groupSeparator] && (opts.definitions[opts.groupSeparator] = {}, opts.definitions[opts.groupSeparator].validator = "[" + opts.groupSeparator + "]", opts.definitions[opts.groupSeparator].placeholder = opts.groupSeparator, opts.definitions[opts.groupSeparator]["static"] = !0, opts.definitions[opts.groupSeparator].generated = !0), mask += opts._mask(opts)) : mask += "9{+}", void 0 !== opts.digits && 0 !== opts.digits) {
                        var dq = opts.digits.toString().split(",");
                        isFinite(dq[0]) && dq[1] && isFinite(dq[1]) ? mask += radixPointDef + decimalDef + "{" + opts.digits + "}" : (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && (opts.digitsOptional ? (altMask = mask + radixPointDef + decimalDef + "{0," + opts.digits + "}", opts.keepStatic = !0) : mask += radixPointDef + decimalDef + "{" + opts.digits + "}")
                    }
                    return mask += autoEscape(opts.suffix, opts), mask += "[-]", altMask && (mask = [altMask + autoEscape(opts.suffix, opts) + "[-]", mask]), opts.greedy = !1,
                        function parseMinMaxOptions(opts) {
                            void 0 === opts.parseMinMaxOptions && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), opts.parseMinMaxOptions = "done")
                        }(opts), mask
                },
                _mask: function (opts) {
                    return "(" + opts.groupSeparator + "999){+|1}"
                },
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                _radixDance: !0,
                groupSeparator: "",
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                prefix: "",
                suffix: "",
                min: null,
                max: null,
                step: 1,
                unmaskAsNumber: !1,
                roundingFN: Math.round,
                inputmode: "numeric",
                shortcuts: {
                    k: "000",
                    m: "000000"
                },
                placeholder: "0",
                greedy: !1,
                rightAlign: !0,
                insertMode: !0,
                autoUnmask: !1,
                skipOptionalPartCharacter: "",
                definitions: {
                    0: {
                        validator: decimalValidator
                    },
                    1: {
                        validator: decimalValidator,
                        definitionSymbol: "9"
                    },
                    "+": {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front)
                        }
                    },
                    "-": {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && chrs === opts.negationSymbol.back
                        }
                    }
                },
                preValidation: function (buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                    if (!1 !== opts.__financeInput && c === opts.radixPoint) return !1;
                    var pattern;
                    if (pattern = opts.shortcuts && opts.shortcuts[c]) {
                        if (1 < pattern.length)
                            for (var inserts = [], i = 0; i < pattern.length; i++) inserts.push({
                                pos: pos + i,
                                c: pattern[i],
                                strict: !1
                            });
                        return {
                            insert: inserts
                        }
                    }
                    var radixPos = $.inArray(opts.radixPoint, buffer),
                        initPos = pos;
                    if (pos = function hanndleRadixDance(pos, c, radixPos, maskset, opts) {
                            return opts._radixDance && opts.numericInput && c !== opts.negationSymbol.back && pos <= radixPos && (0 < radixPos || c == opts.radixPoint) && (void 0 === maskset.validPositions[pos - 1] || maskset.validPositions[pos - 1].input !== opts.negationSymbol.back) && (pos -= 1), pos
                        }(pos, c, radixPos, maskset, opts), "-" === c || c === opts.negationSymbol.front) {
                        if (!0 !== opts.allowMinus) return !1;
                        var isNegative = !1,
                            front = findValid("+", maskset),
                            back = findValid("-", maskset);
                        return -1 !== front && (isNegative = [front, back]), !1 !== isNegative ? {
                            remove: isNegative,
                            caret: initPos
                        } : {
                            insert: [{
                                pos: findValidator("+", maskset),
                                c: opts.negationSymbol.front,
                                fromIsValid: !0
                            }, {
                                pos: findValidator("-", maskset),
                                c: opts.negationSymbol.back,
                                fromIsValid: void 0
                            }],
                            caret: initPos + opts.negationSymbol.back.length
                        }
                    }
                    if (strict) return !0;
                    if (-1 !== radixPos && !0 === opts._radixDance && !1 === isSelection && c === opts.radixPoint && void 0 !== opts.digits && (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && radixPos !== pos) return {
                        caret: opts._radixDance && pos === radixPos - 1 ? radixPos + 1 : radixPos
                    };
                    if (!1 === opts.__financeInput)
                        if (isSelection) {
                            if (opts.digitsOptional) return {
                                rewritePosition: caretPos.end
                            };
                            if (!opts.digitsOptional) {
                                if (caretPos.begin > radixPos && caretPos.end <= radixPos) return c === opts.radixPoint ? {
                                    insert: {
                                        pos: radixPos + 1,
                                        c: "0",
                                        fromIsValid: !0
                                    },
                                    rewritePosition: radixPos
                                } : {
                                    rewritePosition: radixPos + 1
                                };
                                if (caretPos.begin < radixPos) return {
                                    rewritePosition: caretPos.begin - 1
                                }
                            }
                        } else if (!opts.showMaskOnHover && !opts.showMaskOnFocus && !opts.digitsOptional && 0 < opts.digits && "" === this.inputmask.__valueGet.call(this)) return {
                        rewritePosition: radixPos
                    };
                    return {
                        rewritePosition: pos
                    }
                },
                postValidation: function (buffer, pos, c, currentResult, opts, maskset, strict) {
                    if (!1 === currentResult) return currentResult;
                    if (strict) return !0;
                    if (null !== opts.min || null !== opts.max) {
                        var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                            unmaskAsNumber: !0
                        }));
                        if (null !== opts.min && unmasked < opts.min && (unmasked.toString().length >= opts.min.toString().length || unmasked < 0)) return !1;
                        if (null !== opts.max && unmasked > opts.max) return !1
                    }
                    return currentResult
                },
                onUnMask: function (maskedValue, unmaskedValue, opts) {
                    if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
                    var processValue = maskedValue.replace(opts.prefix, "");
                    return processValue = (processValue = processValue.replace(opts.suffix, "")).replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")), processValue = (processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-")).replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), Number(processValue)) : processValue
                },
                isComplete: function (buffer, opts) {
                    var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
                    return maskedValue = (maskedValue = (maskedValue = (maskedValue = (maskedValue = maskedValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-")).replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "")).replace(opts.prefix, "")).replace(opts.suffix, "")).replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === opts.radixPoint && (maskedValue = maskedValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")), isFinite(maskedValue)
                },
                onBeforeMask: function (initialValue, opts) {
                    var radixPoint = opts.radixPoint || ",";
                    isFinite(opts.digits) && (opts.digits = parseInt(opts.digits)), "number" != typeof initialValue && "number" !== opts.inputType || "" === radixPoint || (initialValue = initialValue.toString().replace(".", radixPoint));
                    var valueParts = initialValue.split(radixPoint),
                        integerPart = valueParts[0].replace(/[^\-0-9]/g, ""),
                        decimalPart = 1 < valueParts.length ? valueParts[1].replace(/[^0-9]/g, "") : "",
                        forceDigits = 1 < valueParts.length;
                    initialValue = integerPart + ("" !== decimalPart ? radixPoint + decimalPart : decimalPart);
                    var digits = 0;
                    if ("" !== radixPoint && (digits = opts.digitsOptional ? opts.digits < decimalPart.length ? opts.digits : decimalPart.length : opts.digits, "" !== decimalPart || !opts.digitsOptional)) {
                        var digitsFactor = Math.pow(10, digits || 1);
                        initialValue = initialValue.replace(Inputmask.escapeRegex(radixPoint), "."), isNaN(parseFloat(initialValue)) || (initialValue = (opts.roundingFN(parseFloat(initialValue) * digitsFactor) / digitsFactor).toFixed(digits)), initialValue = initialValue.toString().replace(".", radixPoint)
                    }
                    if (0 === opts.digits && -1 !== initialValue.indexOf(radixPoint) && (initialValue = initialValue.substring(0, initialValue.indexOf(radixPoint))), null !== opts.min || null !== opts.max) {
                        var numberValue = initialValue.toString().replace(radixPoint, ".");
                        null !== opts.min && numberValue < opts.min ? initialValue = opts.min.toString().replace(".", radixPoint) : null !== opts.max && numberValue > opts.max && (initialValue = opts.max.toString().replace(".", radixPoint))
                    }
                    return alignDigits(initialValue.toString().split(""), digits, opts, forceDigits).join("")
                },
                onBeforeWrite: function (e, buffer, caretPos, opts) {
                    function stripBuffer(buffer, stripRadix) {
                        if (!1 !== opts.__financeInput || stripRadix) {
                            var position = $.inArray(opts.radixPoint, buffer); - 1 !== position && buffer.splice(position, 1)
                        }
                        if ("" !== opts.groupSeparator)
                            for (; - 1 !== (position = buffer.indexOf(opts.groupSeparator));) buffer.splice(position, 1);
                        return buffer
                    }
                    var result, leadingzeroes = function checkForLeadingZeroes(buffer, opts) {
                        var numberMatches = new RegExp("(^" + ("" !== opts.negationSymbol.front ? Inputmask.escapeRegex(opts.negationSymbol.front) + "?" : "") + Inputmask.escapeRegex(opts.prefix) + ")(.*)(" + Inputmask.escapeRegex(opts.suffix) + ("" != opts.negationSymbol.back ? Inputmask.escapeRegex(opts.negationSymbol.back) + "?" : "") + "$)").exec(buffer.slice().reverse().join("")),
                            number = numberMatches ? numberMatches[2] : "",
                            leadingzeroes = !1;
                        return number && (number = number.split(opts.radixPoint.charAt(0))[0], leadingzeroes = new RegExp("^[0" + opts.groupSeparator + "]*").exec(number)), !(!leadingzeroes || !(1 < leadingzeroes[0].length || 0 < leadingzeroes[0].length && leadingzeroes[0].length < number.length)) && leadingzeroes
                    }(buffer, opts);
                    if (leadingzeroes) {
                        var buf = buffer.slice().reverse(),
                            caretNdx = buf.join("").indexOf(leadingzeroes[0]);
                        buf.splice(caretNdx, leadingzeroes[0].length);
                        var newCaretPos = buf.length - caretNdx;
                        stripBuffer(buf), result = {
                            refreshFromBuffer: !0,
                            buffer: buf.reverse(),
                            caret: caretPos < newCaretPos ? caretPos : newCaretPos
                        }
                    }
                    if (e) switch (e.type) {
                        case "blur":
                        case "checkval":
                            if (null !== opts.min) {
                                var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== opts.min && unmasked < opts.min) return {
                                    refreshFromBuffer: !0,
                                    buffer: alignDigits(opts.min.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                                }
                            }
                            if (buffer[buffer.length - 1] === opts.negationSymbol.front) {
                                var nmbrMtchs = new RegExp("(^" + ("" != opts.negationSymbol.front ? Inputmask.escapeRegex(opts.negationSymbol.front) + "?" : "") + Inputmask.escapeRegex(opts.prefix) + ")(.*)(" + Inputmask.escapeRegex(opts.suffix) + ("" != opts.negationSymbol.back ? Inputmask.escapeRegex(opts.negationSymbol.back) + "?" : "") + "$)").exec(stripBuffer(buffer.slice(), !0).reverse().join(""));
                                0 == (nmbrMtchs ? nmbrMtchs[2] : "") && (result = {
                                    refreshFromBuffer: !0,
                                    buffer: [0]
                                })
                            } else "" !== opts.radixPoint && buffer[0] === opts.radixPoint && (result && result.buffer ? result.buffer.shift() : (buffer.shift(), result = {
                                refreshFromBuffer: !0,
                                buffer: stripBuffer(buffer)
                            }));
                            if (opts.enforceDigitsOnBlur) {
                                var bffr = (result = result || {}) && result.buffer || buffer.slice().reverse();
                                result.refreshFromBuffer = !0, result.buffer = alignDigits(bffr, opts.digits, opts, !0).reverse()
                            }
                    }
                    return result
                },
                onKeyDown: function (e, buffer, caretPos, opts) {
                    var bffr, $input = $(this);
                    if (e.ctrlKey) switch (e.keyCode) {
                        case keyCode.UP:
                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue"), !1;
                        case keyCode.DOWN:
                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue"), !1
                    }
                    if (!e.shiftKey && (e.keyCode === keyCode.DELETE || e.keyCode === keyCode.BACKSPACE || e.keyCode === keyCode.BACKSPACE_SAFARI) && caretPos.begin !== buffer.length) {
                        if (buffer[e.keyCode === keyCode.DELETE ? caretPos.begin - 1 : caretPos.end] === opts.negationSymbol.front) return bffr = buffer.slice().reverse(), "" !== opts.negationSymbol.front && bffr.shift(), "" !== opts.negationSymbol.back && bffr.pop(), $input.trigger("setvalue", [bffr.join(""), caretPos.begin]), !1;
                        if (!0 === opts._radixDance) {
                            var radixPos = $.inArray(opts.radixPoint, buffer);
                            if (opts.digitsOptional) {
                                if (0 === radixPos) return (bffr = buffer.slice().reverse()).pop(), $input.trigger("setvalue", [bffr.join(""), caretPos.begin >= bffr.length ? bffr.length : caretPos.begin]), !1
                            } else if (-1 !== radixPos && (caretPos.begin < radixPos || caretPos.end < radixPos || e.keyCode === keyCode.DELETE && caretPos.begin === radixPos)) return caretPos.begin !== caretPos.end || e.keyCode !== keyCode.BACKSPACE && e.keyCode !== keyCode.BACKSPACE_SAFARI || caretPos.begin++, (bffr = buffer.slice().reverse()).splice(bffr.length - caretPos.begin, caretPos.begin - caretPos.end + 1), bffr = alignDigits(bffr, opts.digits, opts).join(""), $input.trigger("setvalue", [bffr, caretPos.begin >= bffr.length ? radixPos + 1 : caretPos.begin]), !1
                        }
                    }
                }
            },
            currency: {
                prefix: "",
                groupSeparator: ",",
                alias: "numeric",
                digits: 2,
                digitsOptional: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0
            },
            percentage: {
                alias: "numeric",
                min: 0,
                max: 100,
                suffix: " %",
                digits: 0,
                allowMinus: !1
            },
            indianns: {
                alias: "numeric",
                _mask: function (opts) {
                    return "(" + opts.groupSeparator + "99){*|1}(" + opts.groupSeparator + "999){1|1}"
                },
                groupSeparator: ",",
                radixPoint: ".",
                placeholder: "0",
                digits: 2,
                digitsOptional: !1
            }
        }), module.exports = Inputmask
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var _inputmask = function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            }
        }(__webpack_require__(1));

        function _typeof(obj) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            })(obj)
        }

        function _possibleConstructorReturn(self, call) {
            return !call || "object" !== _typeof(call) && "function" != typeof call ? function _assertThisInitialized(self) {
                if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return self
            }(self) : call
        }

        function _wrapNativeSuper(Class) {
            var _cache = "function" == typeof Map ? new Map : void 0;
            return (_wrapNativeSuper = function _wrapNativeSuper(Class) {
                if (null === Class || !_isNativeFunction(Class)) return Class;
                if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== _cache) {
                    if (_cache.has(Class)) return _cache.get(Class);
                    _cache.set(Class, Wrapper)
                }

                function Wrapper() {
                    return _construct(Class, arguments, _getPrototypeOf(this).constructor)
                }
                return Wrapper.prototype = Object.create(Class.prototype, {
                    constructor: {
                        value: Wrapper,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), _setPrototypeOf(Wrapper, Class)
            })(Class)
        }

        function isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }

        function _construct(Parent, args, Class) {
            return (_construct = isNativeReflectConstruct() ? Reflect.construct : function (Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var instance = new(Function.bind.apply(Parent, a));
                return Class && _setPrototypeOf(instance, Class.prototype), instance
            }).apply(null, arguments)
        }

        function _isNativeFunction(fn) {
            return -1 !== Function.toString.call(fn).indexOf("[native code]")
        }

        function _setPrototypeOf(o, p) {
            return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                return o.__proto__ = p, o
            })(o, p)
        }

        function _getPrototypeOf(o) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o)
            })(o)
        }
        if (document.head.createShadowRoot || document.head.attachShadow) {
            var InputmaskElement = function (_HTMLElement) {
                function InputmaskElement() {
                    var _this;
                    (function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
                    })(this, InputmaskElement);
                    var attributeNames = (_this = _possibleConstructorReturn(this, _getPrototypeOf(InputmaskElement).call(this))).getAttributeNames(),
                        shadow = _this.attachShadow({
                            mode: "closed"
                        }),
                        input = document.createElement("input");
                    for (var attr in input.type = "text", shadow.appendChild(input), attributeNames) Object.prototype.hasOwnProperty.call(attributeNames, attr) && input.setAttribute("data-inputmask-" + attributeNames[attr], _this.getAttribute(attributeNames[attr]));
                    return (new _inputmask["default"]).mask(input), input.inputmask.shadowRoot = shadow, _this
                }
                return function _inherits(subClass, superClass) {
                    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            writable: !0,
                            configurable: !0
                        }
                    }), superClass && _setPrototypeOf(subClass, superClass)
                }(InputmaskElement, _wrapNativeSuper(HTMLElement)), InputmaskElement
            }();
            customElements.define("input-mask", InputmaskElement)
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";

        function _typeof(obj) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            })(obj)
        }
        var $ = __webpack_require__(3),
            Inputmask = __webpack_require__(1);
        void 0 === $.fn.inputmask && ($.fn.inputmask = function (fn, options) {
            var nptmask, input = this[0];
            if (void 0 === options && (options = {}), "string" == typeof fn) switch (fn) {
                case "unmaskedvalue":
                    return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();
                case "remove":
                    return this.each(function () {
                        this.inputmask && this.inputmask.remove()
                    });
                case "getemptymask":
                    return input && input.inputmask ? input.inputmask.getemptymask() : "";
                case "hasMaskedValue":
                    return !(!input || !input.inputmask) && input.inputmask.hasMaskedValue();
                case "isComplete":
                    return !input || !input.inputmask || input.inputmask.isComplete();
                case "getmetadata":
                    return input && input.inputmask ? input.inputmask.getmetadata() : void 0;
                case "setvalue":
                    Inputmask.setValue(input, options);
                    break;
                case "option":
                    if ("string" != typeof options) return this.each(function () {
                        if (void 0 !== this.inputmask) return this.inputmask.option(options)
                    });
                    if (input && void 0 !== input.inputmask) return input.inputmask.option(options);
                    break;
                default:
                    return options.alias = fn, nptmask = new Inputmask(options), this.each(function () {
                        nptmask.mask(this)
                    })
            } else {
                if (Array.isArray(fn)) return options.alias = fn, nptmask = new Inputmask(options), this.each(function () {
                    nptmask.mask(this)
                });
                if ("object" == _typeof(fn)) return nptmask = new Inputmask(fn), void 0 === fn.mask && void 0 === fn.alias ? this.each(function () {
                    if (void 0 !== this.inputmask) return this.inputmask.option(fn);
                    nptmask.mask(this)
                }) : this.each(function () {
                    nptmask.mask(this)
                });
                if (void 0 === fn) return this.each(function () {
                    (nptmask = new Inputmask(options)).mask(this)
                })
            }
        })
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var im = __webpack_require__(6),
            jQuery = __webpack_require__(3);
        im.dependencyLib === jQuery && __webpack_require__(13), module.exports = im
    }], installedModules = {}, __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        })
    }, __webpack_require__.r = function (exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        })
    }, __webpack_require__.t = function (value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                enumerable: !0,
                value: value
            }), 2 & mode && "string" != typeof value)
            for (var key in value) __webpack_require__.d(ns, key, function (key) {
                return value[key]
            }.bind(null, key));
        return ns
    }, __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ? function () {
            return module["default"]
        } : function () {
            return module
        };
        return __webpack_require__.d(getter, "a", getter), getter
    }, __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 14);

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports
    }
    var modules, installedModules
}),
function (e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : window.wNumb = e()
}(function () {
    "use strict";
    var o = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];

    function w(e) {
        return e.split("").reverse().join("")
    }

    function h(e, t) {
        return e.substring(0, t.length) === t
    }

    function f(e, t, n) {
        if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t)
    }

    function x(e) {
        return "number" == typeof e && isFinite(e)
    }

    function n(e, t, n, r, i, o, f, u, s, c, a, p) {
        var d, l, h, g = p,
            v = "",
            m = "";
        return o && (p = o(p)), !!x(p) && (!1 !== e && 0 === parseFloat(p.toFixed(e)) && (p = 0), p < 0 && (d = !0, p = Math.abs(p)), !1 !== e && (p = function (e, t) {
            return e = e.toString().split("e"), (+((e = (e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t)))).toString().split("e"))[0] + "e" + (e[1] ? e[1] - t : -t))).toFixed(t)
        }(p, e)), -1 !== (p = p.toString()).indexOf(".") ? (h = (l = p.split("."))[0], n && (v = n + l[1])) : h = p, t && (h = w((h = w(h).match(/.{1,3}/g)).join(w(t)))), d && u && (m += u), r && (m += r), d && s && (m += s), m += h, m += v, i && (m += i), c && (m = c(m, g)), m)
    }

    function r(e, t, n, r, i, o, f, u, s, c, a, p) {
        var d, l = "";
        return a && (p = a(p)), !(!p || "string" != typeof p) && (u && h(p, u) && (p = p.replace(u, ""), d = !0), r && h(p, r) && (p = p.replace(r, "")), s && h(p, s) && (p = p.replace(s, ""), d = !0), i && function (e, t) {
            return p.slice(-1 * t.length) === t
        }(0, i) && (p = p.slice(0, -1 * i.length)), t && (p = p.split(t).join("")), n && (p = p.replace(n, ".")), d && (l += "-"), "" !== (l = (l += p).replace(/[^0-9\.\-.]/g, "")) && (l = Number(l), f && (l = f(l)), !!x(l) && l))
    }

    function i(e, t, n) {
        var r, i = [];
        for (r = 0; r < o.length; r += 1) i.push(e[o[r]]);
        return i.push(n), t.apply("", i)
    }
    return function e(t) {
        if (!(this instanceof e)) return new e(t);
        "object" == typeof t && (t = function (e) {
            var t, n, r, i = {};
            for (void 0 === e.suffix && (e.suffix = e.postfix), t = 0; t < o.length; t += 1)
                if (void 0 === (r = e[n = o[t]])) "negative" !== n || i.negativeBefore ? "mark" === n && "." !== i.thousand ? i[n] = "." : i[n] = !1 : i[n] = "-";
                else if ("decimals" === n) {
                if (!(0 <= r && r < 8)) throw new Error(n);
                i[n] = r
            } else if ("encoder" === n || "decoder" === n || "edit" === n || "undo" === n) {
                if ("function" != typeof r) throw new Error(n);
                i[n] = r
            } else {
                if ("string" != typeof r) throw new Error(n);
                i[n] = r
            }
            return f(i, "mark", "thousand"), f(i, "prefix", "negative"), f(i, "prefix", "negativeBefore"), i
        }(t), this.to = function (e) {
            return i(t, n, e)
        }, this.from = function (e) {
            return i(t, r, e)
        })
    }
}),
function (t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t()
}(function () {
    "use strict";
    var lt = "14.2.0";

    function ut(t) {
        t.parentElement.removeChild(t)
    }

    function s(t) {
        return null != t
    }

    function ct(t) {
        t.preventDefault()
    }

    function i(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t)
    }

    function pt(t, e, r) {
        0 < r && (ht(t, e), setTimeout(function () {
            mt(t, e)
        }, r))
    }

    function ft(t) {
        return Math.max(Math.min(t, 100), 0)
    }

    function dt(t) {
        return Array.isArray(t) ? t : [t]
    }

    function e(t) {
        var e = (t = String(t)).split(".");
        return 1 < e.length ? e[1].length : 0
    }

    function ht(t, e) {
        t.classList && !/\s/.test(e) ? t.classList.add(e) : t.className += " " + e
    }

    function mt(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }

    function gt(t) {
        var e = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (t.compatMode || "");
        return {
            x: e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft,
            y: e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop
        }
    }

    function c(t, e) {
        return 100 / (e - t)
    }

    function p(t, e) {
        return 100 * e / (t[1] - t[0])
    }

    function f(t, e) {
        for (var r = 1; t >= e[r];) r += 1;
        return r
    }

    function o(t, e, r) {
        var n;
        if ("number" == typeof e && (e = [e]), !Array.isArray(e)) throw new Error("noUiSlider (" + lt + "): 'range' contains invalid value.");
        if (!i(n = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !i(e[0])) throw new Error("noUiSlider (" + lt + "): 'range' value isn't numeric.");
        r.xPct.push(n), r.xVal.push(e[0]), n ? r.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (r.xSteps[0] = e[1]), r.xHighestCompleteStep.push(0)
    }

    function a(t, e, r) {
        if (e)
            if (r.xVal[t] !== r.xVal[t + 1]) {
                r.xSteps[t] = p([r.xVal[t], r.xVal[t + 1]], e) / c(r.xPct[t], r.xPct[t + 1]);
                var n = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t],
                    i = Math.ceil(Number(n.toFixed(3)) - 1),
                    o = r.xVal[t] + r.xNumSteps[t] * i;
                r.xHighestCompleteStep[t] = o
            } else r.xSteps[t] = r.xHighestCompleteStep[t] = r.xVal[t]
    }

    function l(t, e, r) {
        var n;
        this.xPct = [], this.xVal = [], this.xSteps = [r || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e;
        var i = [];
        for (n in t) t.hasOwnProperty(n) && i.push([t[n], n]);
        for (i.length && "object" == typeof i[0][0] ? i.sort(function (t, e) {
                return t[0][0] - e[0][0]
            }) : i.sort(function (t, e) {
                return t[0] - e[0]
            }), n = 0; n < i.length; n++) o(i[n][1], i[n][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) a(n, this.xNumSteps[n], this)
    }
    l.prototype.getMargin = function (t) {
        var e = this.xNumSteps[0];
        if (e && t / e % 1 != 0) throw new Error("noUiSlider (" + lt + "): 'limit', 'margin' and 'padding' must be divisible by step.");
        return 2 === this.xPct.length && p(this.xVal, t)
    }, l.prototype.toStepping = function (t) {
        return function r(t, e, r) {
            if (r >= t.slice(-1)[0]) return 100;
            var n, i, o = f(r, t),
                a = t[o - 1],
                s = t[o],
                l = e[o - 1],
                u = e[o];
            return l + (i = r, p(n = [a, s], n[0] < 0 ? i + Math.abs(n[0]) : i - n[0]) / c(l, u))
        }(this.xVal, this.xPct, t)
    }, l.prototype.fromStepping = function (t) {
        return function (t, e, r) {
            if (100 <= r) return t.slice(-1)[0];
            var n, i = f(r, e),
                o = t[i - 1],
                a = t[i],
                s = e[i - 1];
            return n = [o, a], (r - s) * c(s, e[i]) * (n[1] - n[0]) / 100 + n[0]
        }(this.xVal, this.xPct, t)
    }, l.prototype.getStep = function (t) {
        return function n(t, e, r, n) {
            if (100 === n) return n;
            var i, o, a = f(n, t),
                s = t[a - 1],
                l = t[a];
            return r ? (l - s) / 2 < n - s ? l : s : e[a - 1] ? t[a - 1] + (i = n - t[a - 1], o = e[a - 1], Math.round(i / o) * o) : n
        }(this.xPct, this.xSteps, this.snap, t)
    }, l.prototype.getDefaultStep = function (t, e, r) {
        var n = f(t, this.xPct);
        return (100 === t || e && t === this.xPct[n - 1]) && (n = Math.max(n - 1, 1)), (this.xVal[n] - this.xVal[n - 1]) / r
    }, l.prototype.getNearbySteps = function (t) {
        var e = f(t, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[e - 2],
                step: this.xNumSteps[e - 2],
                highestStep: this.xHighestCompleteStep[e - 2]
            },
            thisStep: {
                startValue: this.xVal[e - 1],
                step: this.xNumSteps[e - 1],
                highestStep: this.xHighestCompleteStep[e - 1]
            },
            stepAfter: {
                startValue: this.xVal[e],
                step: this.xNumSteps[e],
                highestStep: this.xHighestCompleteStep[e]
            }
        }
    }, l.prototype.countStepDecimals = function () {
        var t = this.xNumSteps.map(e);
        return Math.max.apply(null, t)
    }, l.prototype.convert = function (t) {
        return this.getStep(this.toStepping(t))
    };
    var u = {
        to: function (t) {
            return void 0 !== t && t.toFixed(2)
        },
        from: Number
    };

    function d(t) {
        if ("object" == typeof (e = t) && "function" == typeof e.to && "function" == typeof e.from) return !0;
        var e;
        throw new Error("noUiSlider (" + lt + "): 'format' requires 'to' and 'from' methods.")
    }

    function h(t, e) {
        if (!i(e)) throw new Error("noUiSlider (" + lt + "): 'step' is not numeric.");
        t.singleStep = e
    }

    function m(t, e) {
        if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider (" + lt + "): 'range' is not an object.");
        if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (" + lt + "): Missing 'min' or 'max' in 'range'.");
        if (e.min === e.max) throw new Error("noUiSlider (" + lt + "): 'range' 'min' and 'max' cannot be equal.");
        t.spectrum = new l(e, t.snap, t.singleStep)
    }

    function g(t, e) {
        if (e = dt(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider (" + lt + "): 'start' option is incorrect.");
        t.handles = e.length, t.start = e
    }

    function v(t, e) {
        if ("boolean" != typeof (t.snap = e)) throw new Error("noUiSlider (" + lt + "): 'snap' option must be a boolean.")
    }

    function b(t, e) {
        if ("boolean" != typeof (t.animate = e)) throw new Error("noUiSlider (" + lt + "): 'animate' option must be a boolean.")
    }

    function S(t, e) {
        if ("number" != typeof (t.animationDuration = e)) throw new Error("noUiSlider (" + lt + "): 'animationDuration' option must be a number.")
    }

    function x(t, e) {
        var r, n = [!1];
        if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
            for (r = 1; r < t.handles; r++) n.push(e);
            n.push(!1)
        } else {
            if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (" + lt + "): 'connect' option doesn't match handle count.");
            n = e
        }
        t.connect = n
    }

    function w(t, e) {
        switch (e) {
            case "horizontal":
                t.ort = 0;
                break;
            case "vertical":
                t.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + lt + "): 'orientation' option is invalid.")
        }
    }

    function y(t, e) {
        if (!i(e)) throw new Error("noUiSlider (" + lt + "): 'margin' option must be numeric.");
        if (0 !== e && (t.margin = t.spectrum.getMargin(e), !t.margin)) throw new Error("noUiSlider (" + lt + "): 'margin' option is only supported on linear sliders.")
    }

    function E(t, e) {
        if (!i(e)) throw new Error("noUiSlider (" + lt + "): 'limit' option must be numeric.");
        if (t.limit = t.spectrum.getMargin(e), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + lt + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
    }

    function C(t, e) {
        if (!i(e) && !Array.isArray(e)) throw new Error("noUiSlider (" + lt + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (Array.isArray(e) && 2 !== e.length && !i(e[0]) && !i(e[1])) throw new Error("noUiSlider (" + lt + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (0 !== e) {
            if (Array.isArray(e) || (e = [e, e]), !(t.padding = [t.spectrum.getMargin(e[0]), t.spectrum.getMargin(e[1])]) === t.padding[0] || !1 === t.padding[1]) throw new Error("noUiSlider (" + lt + "): 'padding' option is only supported on linear sliders.");
            if (t.padding[0] < 0 || t.padding[1] < 0) throw new Error("noUiSlider (" + lt + "): 'padding' option must be a positive number(s).");
            if (100 < t.padding[0] + t.padding[1]) throw new Error("noUiSlider (" + lt + "): 'padding' option must not exceed 100% of the range.")
        }
    }

    function N(t, e) {
        switch (e) {
            case "ltr":
                t.dir = 0;
                break;
            case "rtl":
                t.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + lt + "): 'direction' option was not recognized.")
        }
    }

    function U(t, e) {
        if ("string" != typeof e) throw new Error("noUiSlider (" + lt + "): 'behaviour' must be a string containing options.");
        var r = 0 <= e.indexOf("tap"),
            n = 0 <= e.indexOf("drag"),
            i = 0 <= e.indexOf("fixed"),
            o = 0 <= e.indexOf("snap"),
            a = 0 <= e.indexOf("hover"),
            s = 0 <= e.indexOf("unconstrained");
        if (i) {
            if (2 !== t.handles) throw new Error("noUiSlider (" + lt + "): 'fixed' behaviour must be used with 2 handles");
            y(t, t.start[1] - t.start[0])
        }
        if (s && (t.margin || t.limit)) throw new Error("noUiSlider (" + lt + "): 'unconstrained' behaviour cannot be used with margin or limit");
        t.events = {
            tap: r || o,
            drag: n,
            fixed: i,
            snap: o,
            hover: a,
            unconstrained: s
        }
    }

    function P(t, e) {
        if (!1 !== e)
            if (!0 === e) {
                t.tooltips = [];
                for (var r = 0; r < t.handles; r++) t.tooltips.push(!0)
            } else {
                if (t.tooltips = dt(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + lt + "): must pass a formatter for all handles.");
                t.tooltips.forEach(function (t) {
                    if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + lt + "): 'tooltips' must be passed a formatter or 'false'.")
                })
            }
    }

    function V(t, e) {
        d(t.ariaFormat = e)
    }

    function k(t, e) {
        d(t.format = e)
    }

    function A(t, e) {
        if ("boolean" != typeof (t.keyboardSupport = e)) throw new Error("noUiSlider (" + lt + "): 'keyboardSupport' option must be a boolean.")
    }

    function M(t, e) {
        t.documentElement = e
    }

    function O(t, e) {
        if ("string" != typeof e && !1 !== e) throw new Error("noUiSlider (" + lt + "): 'cssPrefix' must be a string or `false`.");
        t.cssPrefix = e
    }

    function L(t, e) {
        if ("object" != typeof e) throw new Error("noUiSlider (" + lt + "): 'cssClasses' must be an object.");
        if ("string" == typeof t.cssPrefix)
            for (var r in t.cssClasses = {}, e) e.hasOwnProperty(r) && (t.cssClasses[r] = t.cssPrefix + e[r]);
        else t.cssClasses = e
    }

    function vt(e) {
        var r = {
                margin: 0,
                limit: 0,
                padding: 0,
                animate: !0,
                animationDuration: 300,
                ariaFormat: u,
                format: u
            },
            n = {
                step: {
                    r: !1,
                    t: h
                },
                start: {
                    r: !0,
                    t: g
                },
                connect: {
                    r: !0,
                    t: x
                },
                direction: {
                    r: !0,
                    t: N
                },
                snap: {
                    r: !1,
                    t: v
                },
                animate: {
                    r: !1,
                    t: b
                },
                animationDuration: {
                    r: !1,
                    t: S
                },
                range: {
                    r: !0,
                    t: m
                },
                orientation: {
                    r: !1,
                    t: w
                },
                margin: {
                    r: !1,
                    t: y
                },
                limit: {
                    r: !1,
                    t: E
                },
                padding: {
                    r: !1,
                    t: C
                },
                behaviour: {
                    r: !0,
                    t: U
                },
                ariaFormat: {
                    r: !1,
                    t: V
                },
                format: {
                    r: !1,
                    t: k
                },
                tooltips: {
                    r: !1,
                    t: P
                },
                keyboardSupport: {
                    r: !0,
                    t: A
                },
                documentElement: {
                    r: !1,
                    t: M
                },
                cssPrefix: {
                    r: !0,
                    t: O
                },
                cssClasses: {
                    r: !0,
                    t: L
                }
            },
            i = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: {
                    target: "target",
                    base: "base",
                    origin: "origin",
                    handle: "handle",
                    handleLower: "handle-lower",
                    handleUpper: "handle-upper",
                    touchArea: "touch-area",
                    horizontal: "horizontal",
                    vertical: "vertical",
                    background: "background",
                    connect: "connect",
                    connects: "connects",
                    ltr: "ltr",
                    rtl: "rtl",
                    textDirectionLtr: "txt-dir-ltr",
                    textDirectionRtl: "txt-dir-rtl",
                    draggable: "draggable",
                    drag: "state-drag",
                    tap: "state-tap",
                    active: "active",
                    tooltip: "tooltip",
                    pips: "pips",
                    pipsHorizontal: "pips-horizontal",
                    pipsVertical: "pips-vertical",
                    marker: "marker",
                    markerHorizontal: "marker-horizontal",
                    markerVertical: "marker-vertical",
                    markerNormal: "marker-normal",
                    markerLarge: "marker-large",
                    markerSub: "marker-sub",
                    value: "value",
                    valueHorizontal: "value-horizontal",
                    valueVertical: "value-vertical",
                    valueNormal: "value-normal",
                    valueLarge: "value-large",
                    valueSub: "value-sub"
                }
            };
        e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(n).forEach(function (t) {
            if (!s(e[t]) && void 0 === i[t]) {
                if (n[t].r) throw new Error("noUiSlider (" + lt + "): '" + t + "' is required.");
                return !0
            }
            n[t].t(r, s(e[t]) ? e[t] : i[t])
        }), r.pips = e.pips;
        var t = document.createElement("div"),
            o = void 0 !== t.style.msTransform,
            a = void 0 !== t.style.transform;
        return r.transformRule = a ? "transform" : o ? "msTransform" : "webkitTransform", r.style = [["left", "top"], ["right", "bottom"]][r.dir][r.ort], r
    }
    return {
        __spectrum: l,
        version: lt,
        create: function (t, e) {
            if (!t || !t.nodeName) throw new Error("noUiSlider (" + lt + "): create requires a single element, got: " + t);
            if (t.noUiSlider) throw new Error("noUiSlider (" + lt + "): Slider was already initialized.");
            var r = function D(t, v, o) {
                var l, u, a, c, i, s, e, p, f = window.navigator.pointerEnabled ? {
                        start: "pointerdown",
                        move: "pointermove",
                        end: "pointerup"
                    } : window.navigator.msPointerEnabled ? {
                        start: "MSPointerDown",
                        move: "MSPointerMove",
                        end: "MSPointerUp"
                    } : {
                        start: "mousedown touchstart",
                        move: "mousemove touchmove",
                        end: "mouseup touchend"
                    },
                    d = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function () {
                        var t = !1;
                        try {
                            var e = Object.defineProperty({}, "passive", {
                                get: function () {
                                    t = !0
                                }
                            });
                            window.addEventListener("test", null, e)
                        } catch (t) {}
                        return t
                    }(),
                    h = t,
                    y = v.spectrum,
                    b = [],
                    S = [],
                    m = [],
                    g = 0,
                    x = {},
                    w = t.ownerDocument,
                    E = v.documentElement || w.documentElement,
                    C = w.body,
                    N = -1,
                    U = 0,
                    P = 1,
                    V = 2,
                    k = "rtl" === w.dir || 1 === v.ort ? 0 : 100;

                function A(t, e) {
                    var r = w.createElement("div");
                    return e && ht(r, e), t.appendChild(r), r
                }

                function M(t, e) {
                    var r = A(t, v.cssClasses.origin),
                        n = A(r, v.cssClasses.handle);
                    return A(n, v.cssClasses.touchArea), n.setAttribute("data-handle", e), v.keyboardSupport && (n.setAttribute("tabindex", "0"), n.addEventListener("keydown", function (t) {
                        return function (t, e) {
                            if (L() || D(e)) return !1;
                            var r = ["Left", "Right"],
                                n = ["Down", "Up"],
                                i = ["PageDown", "PageUp"],
                                o = ["Home", "End"];
                            v.dir && !v.ort ? r.reverse() : v.ort && !v.dir && (n.reverse(), i.reverse());
                            var a, s = t.key.replace("Arrow", ""),
                                l = s === i[0],
                                u = s === i[1],
                                c = s === n[0] || s === r[0] || l,
                                p = s === n[1] || s === r[1] || u,
                                d = s === o[1];
                            if (!(c || p || s === o[0] || d)) return !0;
                            if (t.preventDefault(), p || c) {
                                var h = c ? 0 : 1,
                                    g = st(e)[h];
                                if (null === g) return !1;
                                !1 === g && (g = y.getDefaultStep(S[e], c, 10)), (u || l) && (g *= 5), g = Math.max(g, 1e-7), g *= c ? -1 : 1, a = b[e] + g
                            } else a = d ? v.spectrum.xVal[v.spectrum.xVal.length - 1] : v.spectrum.xVal[0];
                            return rt(e, y.toStepping(a), !0, !0), J("slide", e), J("update", e), J("change", e), J("set", e), !1
                        }(t, e)
                    })), n.setAttribute("role", "slider"), n.setAttribute("aria-orientation", v.ort ? "vertical" : "horizontal"), 0 === e ? ht(n, v.cssClasses.handleLower) : e === v.handles - 1 && ht(n, v.cssClasses.handleUpper), r
                }

                function O(t, e) {
                    return !!e && A(t, v.cssClasses.connect)
                }

                function r(t, e) {
                    return !!v.tooltips[e] && A(t.firstChild, v.cssClasses.tooltip)
                }

                function L() {
                    return h.hasAttribute("disabled")
                }

                function D(t) {
                    return u[t].hasAttribute("disabled")
                }

                function z() {
                    i && (G("update.tooltips"), i.forEach(function (t) {
                        t && ut(t)
                    }), i = null)
                }

                function H() {
                    z(), i = u.map(r), $("update.tooltips", function (t, e, r) {
                        if (i[e]) {
                            var n = t[e];
                            !0 !== v.tooltips[e] && (n = v.tooltips[e].to(r[e])), i[e].innerHTML = n
                        }
                    })
                }

                function j(e, i, o) {
                    var a = w.createElement("div"),
                        s = [];
                    s[U] = v.cssClasses.valueNormal, s[P] = v.cssClasses.valueLarge, s[V] = v.cssClasses.valueSub;
                    var l = [];
                    l[U] = v.cssClasses.markerNormal, l[P] = v.cssClasses.markerLarge, l[V] = v.cssClasses.markerSub;
                    var u = [v.cssClasses.valueHorizontal, v.cssClasses.valueVertical],
                        c = [v.cssClasses.markerHorizontal, v.cssClasses.markerVertical];

                    function p(t, e) {
                        var r = e === v.cssClasses.value,
                            n = r ? s : l;
                        return e + " " + (r ? u : c)[v.ort] + " " + n[t]
                    }
                    return ht(a, v.cssClasses.pips), ht(a, 0 === v.ort ? v.cssClasses.pipsHorizontal : v.cssClasses.pipsVertical), Object.keys(e).forEach(function (t) {
                        ! function (t, e, r) {
                            if ((r = i ? i(e, r) : r) !== N) {
                                var n = A(a, !1);
                                n.className = p(r, v.cssClasses.marker), n.style[v.style] = t + "%", U < r && ((n = A(a, !1)).className = p(r, v.cssClasses.value), n.setAttribute("data-value", e), n.style[v.style] = t + "%", n.innerHTML = o.to(e))
                            }
                        }(t, e[t][0], e[t][1])
                    }), a
                }

                function F() {
                    c && (ut(c), c = null)
                }

                function R(t) {
                    F();
                    var m, g, v, b, e, r, S, x, w, n = t.mode,
                        i = t.density || 1,
                        o = t.filter || !1,
                        a = function (t, e, r) {
                            if ("range" === t || "steps" === t) return y.xVal;
                            if ("count" === t) {
                                if (e < 2) throw new Error("noUiSlider (" + lt + "): 'values' (>= 2) required for mode 'count'.");
                                var n = e - 1,
                                    i = 100 / n;
                                for (e = []; n--;) e[n] = n * i;
                                e.push(100), t = "positions"
                            }
                            return "positions" === t ? e.map(function (t) {
                                return y.fromStepping(r ? y.getStep(t) : t)
                            }) : "values" === t ? r ? e.map(function (t) {
                                return y.fromStepping(y.getStep(y.toStepping(t)))
                            }) : e : void 0
                        }(n, t.values || !1, t.stepped || !1),
                        s = (m = i, g = n, v = a, b = {}, e = y.xVal[0], r = y.xVal[y.xVal.length - 1], x = S = !1, w = 0, (v = v.slice().sort(function (t, e) {
                            return t - e
                        }).filter(function (t) {
                            return !this[t] && (this[t] = !0)
                        }, {}))[0] !== e && (v.unshift(e), S = !0), v[v.length - 1] !== r && (v.push(r), x = !0), v.forEach(function (t, e) {
                            var r, n, i, o, a, s, l, u, c, p, f = t,
                                d = v[e + 1],
                                h = "steps" === g;
                            if (h && (r = y.xNumSteps[e]), r || (r = d - f), !1 !== f && void 0 !== d)
                                for (r = Math.max(r, 1e-7), n = f; n <= d; n = (n + r).toFixed(7) / 1) {
                                    for (u = (a = (o = y.toStepping(n)) - w) / m, p = a / (c = Math.round(u)), i = 1; i <= c; i += 1) b[(s = w + i * p).toFixed(5)] = [y.fromStepping(s), 0];
                                    l = -1 < v.indexOf(n) ? P : h ? V : U, !e && S && n !== d && (l = 0), n === d && x || (b[o.toFixed(5)] = [n, l]), w = o
                                }
                        }), b),
                        l = t.format || {
                            to: Math.round
                        };
                    return c = h.appendChild(j(s, o, l))
                }

                function T() {
                    var t = l.getBoundingClientRect(),
                        e = "offset" + ["Width", "Height"][v.ort];
                    return 0 === v.ort ? t.width || l[e] : t.height || l[e]
                }

                function B(n, i, o, a) {
                    var e = function (t) {
                            return !!(t = function (t, e, r) {
                                var n, i, o = 0 === t.type.indexOf("touch"),
                                    a = 0 === t.type.indexOf("mouse"),
                                    s = 0 === t.type.indexOf("pointer");
                                if (0 === t.type.indexOf("MSPointer") && (s = !0), o) {
                                    var l = function (t) {
                                        return t.target === r || r.contains(t.target) || t.target.shadowRoot && t.target.shadowRoot.contains(r)
                                    };
                                    if ("touchstart" === t.type) {
                                        var u = Array.prototype.filter.call(t.touches, l);
                                        if (1 < u.length) return !1;
                                        n = u[0].pageX, i = u[0].pageY
                                    } else {
                                        var c = Array.prototype.find.call(t.changedTouches, l);
                                        if (!c) return !1;
                                        n = c.pageX, i = c.pageY
                                    }
                                }
                                return e = e || gt(w), (a || s) && (n = t.clientX + e.x, i = t.clientY + e.y), t.pageOffset = e, t.points = [n, i], t.cursor = a || s, t
                            }(t, a.pageOffset, a.target || i)) && !(L() && !a.doNotReject) && (e = h, r = v.cssClasses.tap, !((e.classList ? e.classList.contains(r) : new RegExp("\\b" + r + "\\b").test(e.className)) && !a.doNotReject) && !(n === f.start && void 0 !== t.buttons && 1 < t.buttons) && (!a.hover || !t.buttons) && (d || t.preventDefault(), t.calcPoint = t.points[v.ort], void o(t, a)));
                            var e, r
                        },
                        r = [];
                    return n.split(" ").forEach(function (t) {
                        i.addEventListener(t, e, !!d && {
                            passive: !0
                        }), r.push([t, e])
                    }), r
                }

                function q(t) {
                    var e, r, n, i, o, a, s = 100 * (t - (e = l, r = v.ort, n = e.getBoundingClientRect(), o = (i = e.ownerDocument).documentElement, a = gt(i), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (a.x = 0), r ? n.top + a.y - o.clientTop : n.left + a.x - o.clientLeft)) / T();
                    return s = ft(s), v.dir ? 100 - s : s
                }

                function X(t, e) {
                    "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && _(t, e)
                }

                function Y(t, e) {
                    if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return _(t, e);
                    var r = (v.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
                    Z(0 < r, 100 * r / e.baseSize, e.locations, e.handleNumbers)
                }

                function _(t, e) {
                    e.handle && (mt(e.handle, v.cssClasses.active), g -= 1), e.listeners.forEach(function (t) {
                        E.removeEventListener(t[0], t[1])
                    }), 0 === g && (mt(h, v.cssClasses.drag), et(), t.cursor && (C.style.cursor = "", C.removeEventListener("selectstart", ct))), e.handleNumbers.forEach(function (t) {
                        J("change", t), J("set", t), J("end", t)
                    })
                }

                function I(t, e) {
                    if (e.handleNumbers.some(D)) return !1;
                    var r;
                    1 === e.handleNumbers.length && (r = u[e.handleNumbers[0]].children[0], g += 1, ht(r, v.cssClasses.active)), t.stopPropagation();
                    var n = [],
                        i = B(f.move, E, Y, {
                            target: t.target,
                            handle: r,
                            listeners: n,
                            startCalcPoint: t.calcPoint,
                            baseSize: T(),
                            pageOffset: t.pageOffset,
                            handleNumbers: e.handleNumbers,
                            buttonsProperty: t.buttons,
                            locations: S.slice()
                        }),
                        o = B(f.end, E, _, {
                            target: t.target,
                            handle: r,
                            listeners: n,
                            doNotReject: !0,
                            handleNumbers: e.handleNumbers
                        }),
                        a = B("mouseout", E, X, {
                            target: t.target,
                            handle: r,
                            listeners: n,
                            doNotReject: !0,
                            handleNumbers: e.handleNumbers
                        });
                    n.push.apply(n, i.concat(o, a)), t.cursor && (C.style.cursor = getComputedStyle(t.target).cursor, 1 < u.length && ht(h, v.cssClasses.drag), C.addEventListener("selectstart", ct, !1)), e.handleNumbers.forEach(function (t) {
                        J("start", t)
                    })
                }

                function $(t, e) {
                    x[t] = x[t] || [], x[t].push(e), "update" === t.split(".")[0] && u.forEach(function (t, e) {
                        J("update", e)
                    })
                }

                function G(t) {
                    var n = t && t.split(".")[0],
                        i = n && t.substring(n.length);
                    Object.keys(x).forEach(function (t) {
                        var e = t.split(".")[0],
                            r = t.substring(e.length);
                        n && n !== e || i && i !== r || delete x[t]
                    })
                }

                function J(r, n, i) {
                    Object.keys(x).forEach(function (t) {
                        var e = t.split(".")[0];
                        r === e && x[t].forEach(function (t) {
                            t.call(s, b.map(v.format.to), n, b.slice(), i || !1, S.slice(), s)
                        })
                    })
                }

                function K(t, e, r, n, i, o) {
                    return 1 < u.length && !v.events.unconstrained && (n && 0 < e && (r = Math.max(r, t[e - 1] + v.margin)), i && e < u.length - 1 && (r = Math.min(r, t[e + 1] - v.margin))), 1 < u.length && v.limit && (n && 0 < e && (r = Math.min(r, t[e - 1] + v.limit)), i && e < u.length - 1 && (r = Math.max(r, t[e + 1] - v.limit))), v.padding && (0 === e && (r = Math.max(r, v.padding[0])), e === u.length - 1 && (r = Math.min(r, 100 - v.padding[1]))), !((r = ft(r = y.getStep(r))) === t[e] && !o) && r
                }

                function Q(t, e) {
                    var r = v.ort;
                    return (r ? e : t) + ", " + (r ? t : e)
                }

                function Z(t, n, r, e) {
                    var i = r.slice(),
                        o = [!t, t],
                        a = [t, !t];
                    e = e.slice(), t && e.reverse(), 1 < e.length ? e.forEach(function (t, e) {
                        var r = K(i, t, i[t] + n, o[e], a[e], !1);
                        !1 === r ? n = 0 : (n = r - i[t], i[t] = r)
                    }) : o = a = [!0];
                    var s = !1;
                    e.forEach(function (t, e) {
                        s = rt(t, r[t] + n, o[e], a[e]) || s
                    }), s && e.forEach(function (t) {
                        J("update", t), J("slide", t)
                    })
                }

                function tt(t, e) {
                    return v.dir ? 100 - t - e : t
                }

                function et() {
                    m.forEach(function (t) {
                        var e = 50 < S[t] ? -1 : 1,
                            r = 3 + (u.length + e * t);
                        u[t].style.zIndex = r
                    })
                }

                function rt(t, e, r, n) {
                    return !1 !== (e = K(S, t, e, r, n, !1)) && (function (t, e) {
                        S[t] = e, b[t] = y.fromStepping(e);
                        var r = "translate(" + Q(10 * (tt(e, 0) - k) + "%", "0") + ")";
                        u[t].style[v.transformRule] = r, nt(t), nt(t + 1)
                    }(t, e), !0)
                }

                function nt(t) {
                    if (a[t]) {
                        var e = 0,
                            r = 100;
                        0 !== t && (e = S[t - 1]), t !== a.length - 1 && (r = S[t]);
                        var n = r - e,
                            i = "translate(" + Q(tt(e, n) + "%", "0") + ")",
                            o = "scale(" + Q(n / 100, "1") + ")";
                        a[t].style[v.transformRule] = i + " " + o
                    }
                }

                function it(t, e) {
                    return null === t || !1 === t || void 0 === t ? S[e] : ("number" == typeof t && (t = String(t)), t = v.format.from(t), !1 === (t = y.toStepping(t)) || isNaN(t) ? S[e] : t)
                }

                function ot(t, e) {
                    var r = dt(t),
                        n = void 0 === S[0];
                    e = void 0 === e || !!e, v.animate && !n && pt(h, v.cssClasses.tap, v.animationDuration), m.forEach(function (t) {
                        rt(t, it(r[t], t), !0, !1)
                    });
                    for (var i = 1 === m.length ? 0 : 1; i < m.length; ++i) m.forEach(function (t) {
                        rt(t, S[t], !0, !0)
                    });
                    et(), m.forEach(function (t) {
                        J("update", t), null !== r[t] && e && J("set", t)
                    })
                }

                function at() {
                    var t = b.map(v.format.to);
                    return 1 === t.length ? t[0] : t
                }

                function st(t) {
                    var e = S[t],
                        r = y.getNearbySteps(e),
                        n = b[t],
                        i = r.thisStep.step,
                        o = null;
                    if (v.snap) return [n - r.stepBefore.startValue || null, r.stepAfter.startValue - n || null];
                    !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n), o = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep, 100 === e ? i = null : 0 === e && (o = null);
                    var a = y.countStepDecimals();
                    return null !== i && !1 !== i && (i = Number(i.toFixed(a))), null !== o && !1 !== o && (o = Number(o.toFixed(a))), [o, i]
                }
                return ht(e = h, v.cssClasses.target), 0 === v.dir ? ht(e, v.cssClasses.ltr) : ht(e, v.cssClasses.rtl), 0 === v.ort ? ht(e, v.cssClasses.horizontal) : ht(e, v.cssClasses.vertical), ht(e, "rtl" === getComputedStyle(e).direction ? v.cssClasses.textDirectionRtl : v.cssClasses.textDirectionLtr), l = A(e, v.cssClasses.base),
                    function (t, e) {
                        var r = A(e, v.cssClasses.connects);
                        u = [], (a = []).push(O(r, t[0]));
                        for (var n = 0; n < v.handles; n++) u.push(M(e, n)), m[n] = n, a.push(O(r, t[n + 1]))
                    }(v.connect, l), (p = v.events).fixed || u.forEach(function (t, e) {
                        B(f.start, t.children[0], I, {
                            handleNumbers: [e]
                        })
                    }), p.tap && B(f.start, l, function n(t) {
                        t.stopPropagation();
                        var i, o, a, e = q(t.calcPoint),
                            r = (i = e, a = !(o = 100), u.forEach(function (t, e) {
                                if (!D(e)) {
                                    var r = S[e],
                                        n = Math.abs(r - i);
                                    (n < o || n <= o && r < i || 100 === n && 100 === o) && (a = e, o = n)
                                }
                            }), a);
                        if (!1 === r) return !1;
                        v.events.snap || pt(h, v.cssClasses.tap, v.animationDuration), rt(r, e, !0, !0), et(), J("slide", r, !0), J("update", r, !0), J("change", r, !0), J("set", r, !0), v.events.snap && I(t, {
                            handleNumbers: [r]
                        })
                    }, {}), p.hover && B(f.move, l, function W(t) {
                        var e = q(t.calcPoint),
                            r = y.getStep(e),
                            n = y.fromStepping(r);
                        Object.keys(x).forEach(function (t) {
                            "hover" === t.split(".")[0] && x[t].forEach(function (t) {
                                t.call(s, n)
                            })
                        })
                    }, {
                        hover: !0
                    }), p.drag && a.forEach(function (t, e) {
                        if (!1 !== t && 0 !== e && e !== a.length - 1) {
                            var r = u[e - 1],
                                n = u[e],
                                i = [t];
                            ht(t, v.cssClasses.draggable), p.fixed && (i.push(r.children[0]), i.push(n.children[0])), i.forEach(function (t) {
                                B(f.start, t, I, {
                                    handles: [r, n],
                                    handleNumbers: [e - 1, e]
                                })
                            })
                        }
                    }), ot(v.start), v.pips && R(v.pips), v.tooltips && H(), $("update", function (t, e, a, r, s) {
                        m.forEach(function (t) {
                            var e = u[t],
                                r = K(S, t, 0, !0, !0, !0),
                                n = K(S, t, 100, !0, !0, !0),
                                i = s[t],
                                o = v.ariaFormat.to(a[t]);
                            r = y.fromStepping(r).toFixed(1), n = y.fromStepping(n).toFixed(1), i = y.fromStepping(i).toFixed(1), e.children[0].setAttribute("aria-valuemin", r), e.children[0].setAttribute("aria-valuemax", n), e.children[0].setAttribute("aria-valuenow", i), e.children[0].setAttribute("aria-valuetext", o)
                        })
                    }), s = {
                        destroy: function () {
                            for (var t in v.cssClasses) v.cssClasses.hasOwnProperty(t) && mt(h, v.cssClasses[t]);
                            for (; h.firstChild;) h.removeChild(h.firstChild);
                            delete h.noUiSlider
                        },
                        steps: function () {
                            return m.map(st)
                        },
                        on: $,
                        off: G,
                        get: at,
                        set: ot,
                        setHandle: function (t, e, r) {
                            if (!(0 <= (t = Number(t)) && t < m.length)) throw new Error("noUiSlider (" + lt + "): invalid handle number, got: " + t);
                            rt(t, it(e, t), !0, !0), J("update", t), r && J("set", t)
                        },
                        reset: function (t) {
                            ot(v.start, t)
                        },
                        __moveHandles: function (t, e, r) {
                            Z(t, e, S, r)
                        },
                        options: o,
                        updateOptions: function (e, t) {
                            var r = at(),
                                n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
                            n.forEach(function (t) {
                                void 0 !== e[t] && (o[t] = e[t])
                            });
                            var i = vt(o);
                            n.forEach(function (t) {
                                void 0 !== e[t] && (v[t] = i[t])
                            }), y = i.spectrum, v.margin = i.margin, v.limit = i.limit, v.padding = i.padding, v.pips ? R(v.pips) : F(), v.tooltips ? H() : z(), S = [], ot(e.start || r, t)
                        },
                        target: h,
                        removePips: F,
                        removeTooltips: z,
                        pips: R
                    }
            }(t, vt(e), e);
            return t.noUiSlider = r
        }
    }
}),
function (t, e, n, o) {
    "use strict";

    function i(t, e) {
        var o, i, a, s = [],
            r = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), (a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o) || (s = e.selector ? n(e.selector) : (i = o.attr("data-fancybox") || "") ? (s = t.data ? t.data.items : []).length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]') : [o], (r = n(s).index(o)) < 0 && (r = 0), (a = n.fancybox.open(s, e, r)).$trigger = o))
    }
    if (t.console = t.console || {
            info: function (t) {}
        }, n) {
        if (n.fn.fancybox) return console.info("fancyBox already initialized");
        var a = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function (t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function (t, e) {
                        return "image" === t.type && "toggleControls"
                    },
                    clickSlide: function (t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function (t, e) {
                        return "image" === t.type && "zoom"
                    },
                    dblclickSlide: function (t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            },
            s = n(t),
            r = n(e),
            c = 0,
            d = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
                return t.setTimeout(e, 1e3 / 60)
            },
            u = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
                t.clearTimeout(e)
            },
            f = function () {
                var t, n = e.createElement("fakeelement"),
                    o = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in o)
                    if (void 0 !== n.style[t]) return o[t];
                return "transitionend"
            }(),
            p = function (t) {
                return t && t.length && t[0].offsetHeight
            },
            h = function (t, e) {
                var o = n.extend(!0, {}, t, e);
                return n.each(e, function (t, e) {
                    n.isArray(e) && (o[t] = e)
                }), o
            },
            g = function (t) {
                var o, i;
                return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), o = {
                    x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                    y: t.getBoundingClientRect().top + t.offsetHeight / 2
                }, i = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), i)
            },
            b = function (t, e, o) {
                var i = this;
                i.opts = h({
                    index: o
                }, n.fancybox.defaults), n.isPlainObject(e) && (i.opts = h(i.opts, e)), n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)), i.id = i.opts.id || ++c, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), i.group.length && i.init()
            };
        n.extend(b.prototype, {
                init: function () {
                    var o, i, a = this,
                        r = a.group[a.currIndex].opts;
                    r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active").removeClass("compensate-for-scrollbar"), !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("#fancybox-style-noscroll").remove(), n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), i = "", n.each(r.buttons, function (t, e) {
                        i += r.btnTpl[e] || ""
                    }), o = n(a.translate(a, r.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + a.id).addClass(r.baseClass).data("FancyBox", a).appendTo(r.parentEl), a.$refs = {
                        container: o
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                        a.$refs[t] = o.find(".fancybox-" + t)
                    }), a.trigger("onInit"), a.activate(), a.jumpTo(a.currIndex)
                },
                translate: function (t, e) {
                    var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                    return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                        return void 0 === n[e] ? t : n[e]
                    })
                },
                addContent: function (t) {
                    var e, o = this,
                        i = n.makeArray(t);
                    n.each(i, function (t, e) {
                        var i, a, s, r, c, l = {},
                            d = {};
                        n.isPlainObject(e) ? d = (l = e).opts || e : "object" === n.type(e) && n(e).length ? (d = (i = n(e)).data() || {}, (d = n.extend(!0, {}, d, d.options)).$orig = i, l.src = o.opts.src || d.src || i.attr("href"), l.type || l.src || (l.type = "inline", l.src = e)) : l = {
                            type: "html",
                            src: e + ""
                        }, l.opts = n.extend(!0, {}, o.opts, d), n.isArray(d.buttons) && (l.opts.buttons = d.buttons), n.fancybox.isMobile && l.opts.mobile && (l.opts = h(l.opts, l.opts.mobile)), a = l.type || l.opts.type, r = l.src || "", !a && r && ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", l.opts.video.format || (l.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", l = n.extend(!0, l, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: !1
                                }
                            }
                        })) : "#" === r.charAt(0) && (a = "inline")), a ? l.type = a : o.trigger("objectNeedsType", l), l.contentType || (l.contentType = -1 < n.inArray(l.type, ["html", "inline", "ajax"]) ? "html" : l.type), l.index = o.group.length, "auto" == l.opts.smallBtn && (l.opts.smallBtn = -1 < n.inArray(l.type, ["html", "inline", "ajax"])), "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn), l.$thumb = l.opts.$thumb || null, l.opts.$trigger && l.index === o.opts.index && (l.$thumb = l.opts.$trigger.find("img:first"), l.$thumb.length && (l.opts.$orig = l.opts.$trigger)), l.$thumb && l.$thumb.length || !l.opts.$orig || (l.$thumb = l.opts.$orig.find("img:first")), l.$thumb && !l.$thumb.length && (l.$thumb = null), l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null), "function" === n.type(l.opts.caption) && (l.opts.caption = l.opts.caption.apply(e, [o, l])), "function" === n.type(o.opts.caption) && (l.opts.caption = o.opts.caption.apply(e, [o, l])), l.opts.caption instanceof n || (l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + ""), "ajax" === l.type && (1 < (c = r.split(/\s+/, 2)).length && (l.src = c.shift(), l.opts.filter = c.shift())), l.opts.modal && (l.opts = n.extend(!0, l.opts, {
                            trapFocus: !0,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), o.group.push(l)
                    }), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()))
                },
                addEvents: function () {
                    var e = this;
                    e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
                        t.stopPropagation(), t.preventDefault(), e.close(t)
                    }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
                        t.stopPropagation(), t.preventDefault(), e.previous()
                    }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
                        t.stopPropagation(), t.preventDefault(), e.next()
                    }).on("click.fb", "[data-fancybox-zoom]", function (t) {
                        e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                    }), s.on("orientationchange.fb resize.fb", function (t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), e.requestId = d(function () {
                            e.update(t)
                        })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function () {
                            e.$refs.stage.show(), e.update(t)
                        }, n.fancybox.isMobile ? 600 : 250))
                    }), r.on("keydown.fb", function (t) {
                        var i = (n.fancybox ? n.fancybox.getInstance() : null).current,
                            a = t.keyCode || t.which;
                        if (9 != a) return !i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select") ? void 0 : 8 === a || 27 === a ? (t.preventDefault(), void e.close(t)) : 37 === a || 38 === a ? (t.preventDefault(), void e.previous()) : 39 === a || 40 === a ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, a);
                        i.opts.trapFocus && e.focus(t)
                    }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                        e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
                    }), e.idleInterval = t.setInterval(function () {
                        ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
                    }, 1e3))
                },
                removeEvents: function () {
                    var e = this;
                    s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
                },
                previous: function (t) {
                    return this.jumpTo(this.currPos - 1, t)
                },
                next: function (t) {
                    return this.jumpTo(this.currPos + 1, t)
                },
                jumpTo: function (t, e) {
                    var o, i, a, s, r, c, l, d, u, f = this,
                        h = f.group.length;
                    if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                        if (t = parseInt(t, 10), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || h <= t)) return !1;
                        if (o = f.firstRun = !Object.keys(f.slides).length, r = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, s = f.createSlide(t), 1 < h && ((a || s.index < h - 1) && f.createSlide(t + 1), (a || 0 < s.index) && f.createSlide(t - 1)), f.current = s, f.currIndex = s.index, f.currPos = s.pos, f.trigger("beforeShow", o), f.updateControls(), s.forcedDuration = void 0, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i = f.isMoved(s), s.$slide.addClass("fancybox-slide--current"), o) return s.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(s), void f.preload("image");
                        c = n.fancybox.getTranslate(r.$slide), l = n.fancybox.getTranslate(f.$refs.stage), n.each(f.slides, function (t, e) {
                            n.fancybox.stop(e.$slide, !0)
                        }), r.pos !== s.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), i ? (u = c.left - (r.pos * c.width + r.pos * r.opts.gutter), n.each(f.slides, function (t, o) {
                            o.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                                return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                            });
                            var i = o.pos * c.width + o.pos * o.opts.gutter;
                            n.fancybox.setTranslate(o.$slide, {
                                top: 0,
                                left: i - l.left + u
                            }), o.pos !== s.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > s.pos ? "next" : "previous")), p(o.$slide), n.fancybox.animate(o.$slide, {
                                top: 0,
                                left: (o.pos - s.pos) * c.width + (o.pos - s.pos) * o.opts.gutter
                            }, e, function () {
                                o.$slide.css({
                                    transform: "",
                                    opacity: ""
                                }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === f.currPos && f.complete()
                            })
                        })) : e && s.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, r.$slide.addClass("fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")), n.fancybox.animate(r.$slide, d, e, function () {
                            r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")
                        }, !1)), s.isLoaded ? f.revealContent(s) : f.loadSlide(s), f.preload("image")
                    }
                },
                createSlide: function (t) {
                    var e, o, i = this;
                    return o = (o = t % i.group.length) < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
                        pos: t,
                        $slide: e,
                        isLoaded: !1
                    }), i.updateSlide(i.slides[t])), i.slides[t]
                },
                scaleToActual: function (t, e, o) {
                    var i, a, s, r, c, l = this,
                        d = l.current,
                        u = d.$content,
                        f = n.fancybox.getTranslate(d.$slide).width,
                        p = n.fancybox.getTranslate(d.$slide).height,
                        h = d.width,
                        g = d.height;
                    l.isAnimating || l.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (l.isAnimating = !0, n.fancybox.stop(u), t = void 0 === t ? .5 * f : t, e = void 0 === e ? .5 * p : e, (i = n.fancybox.getTranslate(u)).top -= n.fancybox.getTranslate(d.$slide).top, i.left -= n.fancybox.getTranslate(d.$slide).left, r = h / i.width, c = g / i.height, a = .5 * f - .5 * h, s = .5 * p - .5 * g, f < h && (0 < (a = i.left * r - (t * r - t)) && (a = 0), a < f - h && (a = f - h)), p < g && (0 < (s = i.top * c - (e * c - e)) && (s = 0), s < p - g && (s = p - g)), l.updateCursor(h, g), n.fancybox.animate(u, {
                        top: s,
                        left: a,
                        scaleX: r,
                        scaleY: c
                    }, o || 366, function () {
                        l.isAnimating = !1
                    }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
                },
                scaleToFit: function (t) {
                    var e, o = this,
                        i = o.current,
                        a = i.$content;
                    o.isAnimating || o.isMoved() || !a || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0, n.fancybox.stop(a), e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / a.width(),
                        scaleY: e.height / a.height()
                    }, t || 366, function () {
                        o.isAnimating = !1
                    }))
                },
                getFitPos: function (t) {
                    var e, o, i, a, r = t.$content,
                        c = t.$slide,
                        l = t.width || t.opts.width,
                        d = t.height || t.opts.height,
                        u = {};
                    return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(this.$refs.stage).width, o = n.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && d || (l = e, d = o), e - .5 < (l *= i = Math.min(1, e / l, o / d)) && (l = e), o - .5 < (d *= i) && (d = o), "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (l / (a = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9) < d ? d = l / a : d * a < l && (l = d * a)), u.width = l, u.height = d, u)
                },
                update: function (t) {
                    var e = this;
                    n.each(e.slides, function (n, o) {
                        e.updateSlide(o, t)
                    })
                },
                updateSlide: function (t, e) {
                    var o = this,
                        i = t && t.$content,
                        a = t.width || t.opts.width,
                        s = t.height || t.opts.height,
                        r = t.$slide;
                    o.adjustCaption(t), i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), o.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger("onUpdate", t, e)
                },
                centerSlide: function (t) {
                    var e = this,
                        o = e.current,
                        i = o.$slide;
                    !e.isClosing && o && (i.siblings().css({
                        transform: "",
                        opacity: ""
                    }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(i, {
                        top: 0,
                        left: 0,
                        opacity: 1
                    }, void 0 === t ? 0 : t, function () {
                        i.css({
                            transform: "",
                            opacity: ""
                        }), o.isComplete || e.complete()
                    }, !1))
                },
                isMoved: function (t) {
                    var e, o, i = t || this.current;
                    return !!i && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (.5 < Math.abs(e.top - o.top) || .5 < Math.abs(e.left - o.left)))
                },
                updateCursor: function (t, e) {
                    var o, i, a = this,
                        s = a.current,
                        r = a.$refs.container;
                    s && !a.isClosing && a.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), i = !!(o = a.canPan(t, e)) || a.isZoomable(), r.toggleClass("fancybox-is-zoomable", i), n("[data-fancybox-zoom]").prop("disabled", !i), o ? r.addClass("fancybox-can-pan") : i && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || 1 < a.group.length) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"))
                },
                isZoomable: function () {
                    var t, e = this,
                        n = e.current;
                    if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                        if (!n.isLoaded) return !0;
                        if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0
                    }
                    return !1
                },
                isScaledDown: function (t, e) {
                    var i = !1,
                        a = this.current,
                        s = a.$content;
                    return void 0 !== t && void 0 !== e ? i = t < a.width && e < a.height : s && (i = (i = n.fancybox.getTranslate(s)).width < a.width && i.height < a.height), i
                },
                canPan: function (t, e) {
                    var i = this.current,
                        a = null,
                        s = !1;
                    return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (s = this.getFitPos(i), void 0 !== t && void 0 !== e ? a = {
                        width: t,
                        height: e
                    } : i.isComplete && (a = n.fancybox.getTranslate(i.$content)), a && s && (s = 1.5 < Math.abs(a.width - s.width) || 1.5 < Math.abs(a.height - s.height))), s
                },
                loadSlide: function (t) {
                    var e, o, i, a = this;
                    if (!t.isLoading && !t.isLoaded) {
                        if (!(t.isLoading = !0) === a.trigger("beforeLoad", t)) return t.isLoading = !1;
                        switch (e = t.type, (o = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                            case "image":
                                a.setImage(t);
                                break;
                            case "iframe":
                                a.setIframe(t);
                                break;
                            case "html":
                                a.setContent(t, t.src || t.content);
                                break;
                            case "video":
                                a.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                                break;
                            case "inline":
                                n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
                                break;
                            case "ajax":
                                a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                    url: t.src,
                                    success: function (e, n) {
                                        "success" === n && a.setContent(t, e)
                                    },
                                    error: function (e, n) {
                                        e && "abort" !== n && a.setError(t)
                                    }
                                })), o.one("onReset", function () {
                                    i.abort()
                                });
                                break;
                            default:
                                a.setError(t)
                        }
                        return !0
                    }
                },
                setImage: function (t) {
                    var o, i = this;
                    setTimeout(function () {
                        var e = t.$image;
                        i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t)
                    }, 50), i.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (o = e.createElement("img")).onerror = function () {
                        n(this).remove(), t.$ghost = null
                    }, o.onload = function () {
                        i.afterLoad(t)
                    }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), i.setBigImage(t)
                },
                checkSrcset: function (e) {
                    var n, o, i, a, s = e.opts.srcset || e.opts.image.srcset;
                    if (s) {
                        i = t.devicePixelRatio || 1, a = t.innerWidth * i, (o = s.split(",").map(function (t) {
                            var e = {};
                            return t.trim().split(/\s+/).forEach(function (t, n) {
                                var o = parseInt(t.substring(0, t.length - 1), 10);
                                if (0 === n) return e.url = t;
                                o && (e.value = o, e.postfix = t[t.length - 1])
                            }), e
                        })).sort(function (t, e) {
                            return t.value - e.value
                        });
                        for (var r = 0; r < o.length; r++) {
                            var c = o[r];
                            if ("w" === c.postfix && c.value >= a || "x" === c.postfix && c.value >= i) {
                                n = c;
                                break
                            }
                        }!n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s)
                    }
                },
                setBigImage: function (t) {
                    var o = this,
                        i = e.createElement("img"),
                        a = n(i);
                    t.$image = a.one("error", function () {
                        o.setError(t)
                    }).one("load", function () {
                        var e;
                        t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)), o.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (1 < t.width / t.height && 1 < s.width() / s.height() ? "100" : Math.round(t.width / t.height * 100)) + "vw"), a.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
                            t.$ghost && !o.isClosing && t.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t))
                    }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i.complete || "complete" == i.readyState) && a.naturalWidth && a.naturalHeight ? a.trigger("load") : i.error && a.trigger("error")
                },
                resolveImageSlideSize: function (t, e, n) {
                    var o = parseInt(t.opts.width, 10),
                        i = parseInt(t.opts.height, 10);
                    t.width = e, t.height = n, 0 < o && (t.width = o, t.height = Math.floor(o * n / e)), 0 < i && (t.width = Math.floor(i * e / n), t.height = i)
                },
                setIframe: function (t) {
                    var e, o = this,
                        i = t.opts.iframe,
                        a = t.$slide;
                    t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (o.showLoading(t), e.on("load.fb error.fb", function (e) {
                        this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t)
                    }), a.on("refresh.fb", function () {
                        var o, s = t.$content,
                            r = i.css.width,
                            c = i.css.height;
                        if (1 === e[0].isReady) {
                            try {
                                o = e.contents().find("body")
                            } catch (t) {}
                            o && o.length && o.children().length && (a.css("overflow", "visible"), s.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            }), void 0 === r && (r = Math.ceil(Math.max(o[0].clientWidth, o.outerWidth(!0)))), s.css("width", r || "").css("max-width", ""), void 0 === c && (c = Math.ceil(Math.max(o[0].clientHeight, o.outerHeight(!0)))), s.css("height", c || ""), a.css("overflow", "auto")), s.removeClass("fancybox-is-hidden")
                        }
                    })) : o.afterLoad(t), e.attr("src", t.src), a.one("onReset", function () {
                        try {
                            n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                        } catch (t) {}
                        n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                    })
                },
                setContent: function (t, e) {
                    var o = this;
                    o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), function (t) {
                        return t && t.hasOwnProperty && t instanceof n
                    }(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
                        n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                    }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), o.afterLoad(t))
                },
                setError: function (t) {
                    t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
                },
                showLoading: function (t) {
                    var e = this;
                    (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
                },
                hideLoading: function (t) {
                    (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
                },
                afterLoad: function (t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
                        return 2 == t.button && t.preventDefault(), !0
                    }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
                },
                adjustCaption: function (t) {
                    var e, n = this,
                        o = t || n.current,
                        i = o.opts.caption,
                        a = o.opts.preventCaptionOverlap,
                        s = n.$refs.caption,
                        r = !1;
                    s.toggleClass("fancybox-caption--separate", a), a && i && i.length && (o.pos !== n.currPos ? ((e = s.clone().appendTo(s.parent())).children().eq(0).empty().html(i), r = e.outerHeight(!0), e.empty().remove()) : n.$caption && (r = n.$caption.outerHeight(!0)), o.$slide.css("padding-bottom", r || ""))
                },
                adjustLayout: function (t) {
                    var e, n, o, i, s = t || this.current;
                    s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"], i = s.$slide.css("padding-bottom"), 0 < parseFloat(i) && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i), s.$slide.css("padding-bottom", o))), s.$content.css("margin-bottom", n))
                },
                revealContent: function (t) {
                    var e, o, i, a, s = this,
                        r = t.$slide,
                        c = !1,
                        l = !1,
                        d = s.isMoved(t),
                        u = t.isRevealed;
                    return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10), !d && t.pos === s.currPos && i || (e = !1), "zoom" === e && (t.pos === s.currPos && i && "image" === t.type && !t.hasError && (l = s.getThumbPos(t)) ? c = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, c.scaleX = c.width / l.width, c.scaleY = c.height / l.height, "auto" == (a = t.opts.zoomOpacity) && (a = .1 < Math.abs(t.width / t.height - l.width / l.height)), a && (l.opacity = .1, c.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l), p(t.$content), void n.fancybox.animate(t.$content, c, i, function () {
                        s.isAnimating = !1, s.complete()
                    })) : (s.updateSlide(t), e ? (n.fancybox.stop(r), o = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, r.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(r), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(r, "fancybox-slide--current", i, function () {
                        r.removeClass(o).css({
                            transform: "",
                            opacity: ""
                        }), t.pos === s.currPos && s.complete()
                    }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === s.currPos && s.complete())))
                },
                getThumbPos: function (t) {
                    var e, o, i, a, s, r = !1,
                        c = t.$thumb;
                    return !(!c || !g(c[0])) && (e = n.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), i = parseFloat(c.css("border-right-width") || 0), a = parseFloat(c.css("border-bottom-width") || 0), s = parseFloat(c.css("border-left-width") || 0), r = {
                        top: e.top + o,
                        left: e.left + s,
                        width: e.width - i - s,
                        height: e.height - o - a,
                        scaleX: 1,
                        scaleY: 1
                    }, 0 < e.width && 0 < e.height && r)
                },
                complete: function () {
                    var t, e = this,
                        o = e.current,
                        i = {};
                    !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), p(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function (t, o) {
                        o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
                    }), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
                        Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
                    }), o.opts.autoFocus && "html" === o.contentType && ((t = o.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0))
                },
                preload: function (t) {
                    var e, n, o = this;
                    o.group.length < 2 || (n = o.slides[o.currPos + 1], (e = o.slides[o.currPos - 1]) && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n))
                },
                focus: function (t, o) {
                    var i, a, s = this,
                        r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                    s.isClosing || ((i = (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible")).filter(r).filter(function () {
                        return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                    })).length ? (a = i.index(e.activeElement), t && t.shiftKey ? (a < 0 || 0 == a) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (a < 0 || a == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"))
                },
                activate: function () {
                    var t = this;
                    n(".fancybox-container").each(function () {
                        var e = n(this).data("FancyBox");
                        e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                    }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                },
                close: function (t, e) {
                    var o, i, a, s, r, c, l, u = this,
                        f = u.current,
                        h = function () {
                            u.cleanUp(t)
                        };
                    return !u.isClosing && (!(u.isClosing = !0) === u.trigger("beforeClose", t) ? (u.isClosing = !1, d(function () {
                        u.update()
                    }), !1) : (u.removeEvents(), a = f.$content, o = f.opts.animationEffect, i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), i && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), u.hideLoading(f), u.hideControls(!0), u.updateCursor(), "zoom" !== o || a && i && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), c = {
                        top: (s = n.fancybox.getTranslate(a)).top,
                        left: s.left,
                        scaleX: s.width / l.width,
                        scaleY: s.height / l.height,
                        width: l.width,
                        height: l.height
                    }, "auto" == (r = f.opts.zoomOpacity) && (r = .1 < Math.abs(f.width / f.height - l.width / l.height)), r && (l.opacity = 0), n.fancybox.setTranslate(a, c), p(a), n.fancybox.animate(a, l, i, h)) : o && i ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(), !0))
                },
                cleanUp: function (e) {
                    var o, i, a, s = this,
                        r = s.current.opts.$orig;
                    s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), r && r.length && (i = t.scrollX, a = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(a).scrollLeft(i))), s.current = null, (o = n.fancybox.getInstance()) ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
                },
                trigger: function (t, e) {
                    var o, i = Array.prototype.slice.call(arguments, 1),
                        a = this,
                        s = e && e.opts ? e : a.current;
                    if (s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), !1 === o) return o;
                    "afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i)
                },
                updateControls: function () {
                    var t = this,
                        o = t.current,
                        i = o.index,
                        a = t.$refs.container,
                        s = t.$refs.caption,
                        r = o.opts.caption;
                    o.$slide.trigger("refresh"), r && r.length ? (t.$caption = s).children().eq(0).html(r) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), a.find("[data-fancybox-count]").html(t.group.length), a.find("[data-fancybox-index]").html(i + 1), a.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), a.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1), "image" === o.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
                },
                hideControls: function (t) {
                    var n = ["infobar", "toolbar", "nav"];
                    !t && this.current.opts.preventCaptionOverlap || n.push("caption"), this.$refs.container.removeClass(n.map(function (t) {
                        return "fancybox-show-" + t
                    }).join(" ")), this.hasHiddenControls = !0
                },
                showControls: function () {
                    var t = this,
                        e = t.current ? t.current.opts : t.opts,
                        n = t.$refs.container;
                    t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && 1 < t.group.length)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && 1 < t.group.length)).toggleClass("fancybox-is-modal", !!e.modal)
                },
                toggleControls: function () {
                    this.hasHiddenControls ? this.showControls() : this.hideControls()
                }
            }), n.fancybox = {
                version: "3.5.7",
                defaults: a,
                getInstance: function (t) {
                    var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        o = Array.prototype.slice.call(arguments, 1);
                    return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
                },
                open: function (t, e, n) {
                    return new b(t, e, n)
                },
                close: function (t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close(t))
                },
                destroy: function () {
                    this.close(!0), r.add("body").off("click.fb-start", "**")
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: function () {
                    var n = e.createElement("div");
                    return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
                }(),
                getTranslate: function (t) {
                    var e;
                    return !(!t || !t.length) && {
                        top: (e = t[0].getBoundingClientRect()).top || 0,
                        left: e.left || 0,
                        width: e.width,
                        height: e.height,
                        opacity: parseFloat(t.css("opacity"))
                    }
                },
                setTranslate: function (t, e) {
                    var n = "",
                        o = {};
                    if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (o.transform = n), void 0 !== e.opacity && (o.opacity = e.opacity), void 0 !== e.width && (o.width = e.width), void 0 !== e.height && (o.height = e.height), t.css(o)
                },
                animate: function (t, e, o, i, a) {
                    var s, r = this;
                    n.isFunction(o) && (i = o, o = null), r.stop(t), s = r.getTranslate(t), t.on(f, function (c) {
                        (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (r.stop(t), n.isNumeric(o) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, {
                            top: e.top,
                            left: e.left,
                            width: s.width * e.scaleX,
                            height: s.height * e.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        }) : !0 !== a && t.removeClass(e), n.isFunction(i) && i(c))
                    }), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
                        t.trigger(f)
                    }, o + 33))
                },
                stop: function (t, e) {
                    t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
                }
            }, n.fn.fancybox = function (t) {
                var e;
                return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                    options: t
                }, i) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t
                }, i), this
            }, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
                n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                    $trigger: n(this)
                })
            }),
            function () {
                var t = null;
                r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
                    switch (e.type) {
                        case "mousedown":
                            t = n(this);
                            break;
                        case "mouseup":
                            t = null;
                            break;
                        case "focusin":
                            n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            n(".fancybox-button").removeClass("fancybox-focus")
                    }
                })
            }()
    }
}(window, document, jQuery),
function (t) {
    "use strict";
    var e = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function (t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function (t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        },
        n = function (e, n, o) {
            if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function (t, n) {
                e = e.replace("$" + t, n || "")
            }), o.length && (e += (0 < e.indexOf("?") ? "&" : "?") + o), e
        };
    t(document).on("objectNeedsType.fb", function (o, i, a) {
        var s, r, c, l, d, u, f, p = a.src || "",
            h = !1;
        s = t.extend(!0, {}, e, a.opts.media), t.each(s, function (e, o) {
            if (c = p.match(o.matcher)) {
                if (h = o.type, f = e, u = {}, o.paramPlace && c[o.paramPlace]) {
                    "?" == (d = c[o.paramPlace])[0] && (d = d.substring(1)), d = d.split("&");
                    for (var i = 0; i < d.length; ++i) {
                        var s = d[i].split("=", 2);
                        2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                    }
                }
                return l = t.extend(!0, {}, o.params, a.opts[e], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : n(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : n(o.thumb, c), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1
            }
        }), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (a.opts = t.extend(!0, a.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), t.extend(a, {
            type: h,
            src: p,
            origSrc: a.src,
            contentSource: f,
            contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
        })) : p && (a.type = a.opts.defaultType)
    });
    var o = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            "class": "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            "class": "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function (t) {
            var e, n = this;
            this[t].loaded ? setTimeout(function () {
                n.done(t)
            }) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
                n[t].loaded = !0, n.done(t)
            } : e.onload = function () {
                n[t].loaded = !0, n.done(t)
            }, document.body.appendChild(e))
        },
        done: function (e) {
            var n, o;
            "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(o.attr("id"), {
                events: {
                    onStateChange: function (t) {
                        0 == t.data && n.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(o).on("ended", function () {
                n.next()
            }))
        }
    };
    t(document).on({
        "afterShow.fb": function (t, e, n) {
            1 < e.group.length && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource)
        }
    })
}(jQuery),
function (t, e, n) {
    "use strict";
    var o = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
            return t.setTimeout(e, 1e3 / 60)
        },
        i = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
            t.clearTimeout(e)
        },
        a = function (e) {
            var n = [];
            for (var o in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[o].pageX ? n.push({
                x: e[o].pageX,
                y: e[o].pageY
            }) : e[o].clientX && n.push({
                x: e[o].clientX,
                y: e[o].clientY
            });
            return n
        },
        s = function (t, e, n) {
            return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        },
        r = function (t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
                if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
            return !1
        },
        c = function (e) {
            var n = t.getComputedStyle(e)["overflow-y"],
                o = t.getComputedStyle(e)["overflow-x"],
                i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
                a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
            return i || a
        },
        l = function (t) {
            for (var e = !1; !(e = c(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")););
            return e
        },
        d = function (t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
        };
    d.prototype.destroy = function () {
        var t = this;
        t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (i(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
    }, d.prototype.ontouchstart = function (o) {
        var i = this,
            c = n(o.target),
            d = i.instance,
            u = d.current,
            f = u.$slide,
            p = u.$content,
            h = "touchstart" == o.type;
        if (h && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
            if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();
            i.realPoints = i.startPoints = a(o), i.startPoints.length && (u.touch && o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = p, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.canPan = d.canPan(), i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(f[0].clientWidth), i.canvasHeight = Math.round(f[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                top: 0,
                left: 0
            }, i.sliderStartPos = n.fancybox.getTranslate(f), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), ((i.opts || i.canPan) && (c.is(i.$stage) || i.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (i.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && i.isScrollable || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-is-grabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))))
        }
    }, d.prototype.onscroll = function (t) {
        this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0)
    }, d.prototype.ontouchmove = function (t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void(e.canTap = !1) : (e.newPoints = a(t), void((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), 0 < e.distance && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }, d.prototype.onSwipe = function (e) {
        var a, s = this,
            r = s.instance,
            c = s.isSwiping,
            l = s.sliderStartPos.left || 0;
        if (!0 !== c) "x" == c && (0 < s.distanceX && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX), s.sliderLastPos = {
            top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
            left: l
        }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function () {
            s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
                var o = e.pos - s.instance.currPos;
                n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
                })
            }), s.$container.addClass("fancybox-is-sliding"))
        });
        else if (10 < Math.abs(s.distance)) {
            if (s.canTap = !1, r.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : r.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && 800 < n(t).width() ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = 45 < a && a < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void(s.isScrolling = !0);
            r.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(r.slides, function (t, e) {
                var o, i;
                n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), i = n.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }), e.pos === r.current.pos && (s.sliderStartPos.top = o.top - i.top, s.sliderStartPos.left = o.left - i.left), n.fancybox.setTranslate(e.$slide, {
                    top: o.top - i.top,
                    left: o.left - i.left
                })
            }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
        }
    }, d.prototype.onPan = function () {
        var t = this;
        s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && i(t.requestId), t.requestId = o(function () {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        }))
    }, d.prototype.limitMovement = function () {
        var t, e, n, o, i, a, s = this,
            r = s.canvasWidth,
            c = s.canvasHeight,
            l = s.distanceX,
            d = s.distanceY,
            u = s.contentStartPos,
            f = u.left,
            p = u.top,
            h = u.width,
            g = u.height;
        return i = r < h ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), 0 < l && t < i && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), 0 < d && e < a && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), {
            top: a,
            left: i
        }
    }, d.prototype.limitPosition = function (t, e, n, o) {
        var a = this.canvasWidth,
            s = this.canvasHeight;
        return t = a < n ? (t = 0 < t ? 0 : t) < a - n ? a - n : t : Math.max(0, a / 2 - n / 2), {
            top: e = s < o ? (e = 0 < e ? 0 : e) < s - o ? s - o : e : Math.max(0, s / 2 - o / 2),
            left: t
        }
    }, d.prototype.onZoom = function () {
        var e = this,
            a = e.contentStartPos,
            r = a.width,
            c = a.height,
            l = a.left,
            d = a.top,
            f = s(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
            p = Math.floor(r * f),
            h = Math.floor(c * f),
            g = (r - p) * e.percentageOfImageAtPinchPointX,
            b = (c - h) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            y = m - e.centerPointStartX,
            S = {
                top: d + (b + (v - e.centerPointStartY)),
                left: l + (g + y),
                scaleX: f,
                scaleY: f
            };
        e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && i(e.requestId), e.requestId = o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, d.prototype.ontouchend = function (t) {
        var o = this,
            s = o.isSwiping,
            r = o.isPanning,
            c = o.isZooming,
            l = o.isScrolling;
        if (o.endPoints = a(t), o.dMs = Math.max((new Date).getTime() - o.startTime, 1), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap) return o.onTap(t);
        o.speed = 100, o.velocityX = o.distanceX / o.dMs * .5, o.velocityY = o.distanceY / o.dMs * .5, r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l)
    }, d.prototype.endSwiping = function (t, e) {
        var o = this,
            i = !1,
            a = o.instance.group.length,
            s = Math.abs(o.distanceX),
            r = "x" == t && 1 < a && (130 < o.dMs && 10 < s || 50 < s);
        o.sliderLastPos = null, "y" == t && !e && 50 < Math.abs(o.distanceY) ? (n.fancybox.animate(o.instance.current.$slide, {
            top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
            opacity: 0
        }, 200), i = o.instance.close(!0, 250)) : r && 0 < o.distanceX ? i = o.instance.previous(300) : r && o.distanceX < 0 && (i = o.instance.next(300)), !1 !== i || "x" != t && "y" != t || o.instance.centerSlide(200), o.$container.removeClass("fancybox-is-sliding")
    }, d.prototype.endPanning = function () {
        var t, e, o, i = this;
        i.contentLastPos && (e = !1 === i.opts.momentum || 350 < i.dMs ? (t = i.contentLastPos.left, i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX, i.contentLastPos.top + 500 * i.velocityY), (o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height)).width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 366))
    }, d.prototype.endZooming = function () {
        var t, e, o, i, a = this,
            s = a.instance.current,
            r = a.newWidth,
            c = a.newHeight;
        a.contentLastPos && (t = a.contentLastPos.left, i = {
            top: e = a.contentLastPos.top,
            left: t,
            width: r,
            height: c,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.animate(a.$content, o, 150)))
    }, d.prototype.onTap = function (e) {
        var o, i = this,
            s = n(e.target),
            r = i.instance,
            c = r.current,
            l = e && a(e) || i.startPoints,
            d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
            u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
            f = function (t) {
                var o = c.opts[t];
                if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
                    case "close":
                        r.close(i.startEvent);
                        break;
                    case "toggleControls":
                        r.toggleControls();
                        break;
                    case "next":
                        r.next();
                        break;
                    case "nextOrClose":
                        1 < r.group.length ? r.next() : r.close(i.startEvent);
                        break;
                    case "zoom":
                        "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent))
                }
            };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";
            else if (s.is(".fancybox-slide")) o = "Slide";
            else {
                if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
                o = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped), i.tapped = null, 50 < Math.abs(d - i.tapX) || 50 < Math.abs(u - i.tapY)) return this;
                f("dblclick" + o)
            } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function () {
                i.tapped = null, r.isAnimating || f("click" + o)
            }, 500) : f("click" + o);
            return this
        }
    }, n(e).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new d(e))
    }).on("beforeClose.fb", function (t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, jQuery),
function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var n = function (t) {
        this.instance = t, this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function () {
            var t = this,
                n = t.instance,
                o = n.group[n.currIndex].opts.slideShow;
            t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                t.toggle()
            }), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
        },
        set: function (t) {
            var n = this,
                o = n.instance,
                i = o.current;
            i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
                scaleX: 1
            }, i.opts.slideShow.speed), n.timer = setTimeout(function () {
                o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0)
            }, i.opts.slideShow.speed)) : (n.stop(), o.idleSecondsCounter = 0, o.showControls())
        },
        clear: function () {
            var t = this;
            clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide()
        },
        start: function () {
            var t = this,
                e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
        },
        stop: function () {
            var t = this,
                e = t.instance.current;
            t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
        },
        toggle: function () {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), e(t).on({
        "onInit.fb": function (t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function (t, e, n, o) {
            var i = e && e.SlideShow;
            o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
        },
        "afterShow.fb": function (t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set()
        },
        "afterKeydown.fb": function (n, o, i, a, s) {
            var r = o && o.SlideShow;
            !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    })
}(document, jQuery),
function (t, e) {
    "use strict";
    var n = function () {
        for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, o = 0; o < e.length; o++) {
            var i = e[o];
            if (i && i[1] in t) {
                for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
                return n
            }
        }
        return !1
    }();
    if (n) {
        var o = {
            request: function (e) {
                (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function () {
                t[n.exitFullscreen]()
            },
            toggle: function (e) {
                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function () {
                return Boolean(t[n.fullscreenElement])
            },
            enabled: function () {
                return Boolean(t[n.fullscreenEnabled])
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), e(t).on(n.fullscreenchange, function () {
            var t = o.isFullscreen(),
                n = e.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
        })
    }
    e(t).on({
        "onInit.fb": function (t, e) {
            n ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                t.stopPropagation(), t.preventDefault(), o.toggle()
            }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
            e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle())
        },
        "beforeClose.fb": function (t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
        }
    })
}(document, jQuery),
function (t, e) {
    "use strict";
    var n = "fancybox-thumbs";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var o = function (t) {
        this.init(t)
    };
    e.extend(o.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function (t) {
            var e = this,
                n = t.group,
                o = 0;
            e.instance = t, e.opts = n[t.currIndex].opts.thumbs, (t.Thumbs = e).$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var i = 0, a = n.length; i < a && (n[i].thumb && o++, !(1 < o)); i++);
            1 < o && e.opts ? (e.$button.removeAttr("style").on("click", function () {
                e.toggle()
            }), e.isActive = !0) : e.$button.hide()
        },
        create: function () {
            var t, o = this,
                i = o.instance,
                a = o.opts.parentEl,
                s = [];
            o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)), o.$grid.on("click", "a", function () {
                i.jumpTo(e(this).attr("data-index"))
            })), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(i.group, function (e, n) {
                (t = n.thumb) || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0))
        },
        focus: function (t) {
            var e, n, o = this,
                i = o.$list,
                a = o.$grid;
            o.instance.current && (n = (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
                scrollTop: i.scrollTop() + n.top
            }, t) : "x" === o.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - e.outerWidth())) && i.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function () {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
        },
        hide: function () {
            this.isVisible = !1, this.update()
        },
        show: function () {
            this.isVisible = !0, this.update()
        },
        toggle: function () {
            this.isVisible = !this.isVisible, this.update()
        }
    }), e(t).on({
        "onInit.fb": function (t, e) {
            var n;
            e && !e.Thumbs && ((n = new o(e)).isActive && !0 === n.opts.autoStart && n.show())
        },
        "beforeShow.fb": function (t, e, n, o) {
            var i = e && e.Thumbs;
            i && i.isVisible && i.focus(o ? 0 : 250)
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
            var a = e && e.Thumbs;
            a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())
        },
        "beforeClose.fb": function (t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, jQuery),
function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function (t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), e(t).on("click", "[data-fancybox-share]", function () {
        var t, o, i = e.fancybox.getInstance(),
            a = i.current || null;
        a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, function n(t) {
            var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            return String(t).replace(/[&<>"'`=\/]/g, function (t) {
                return e[t]
            })
        }(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({
            src: i.translate(i, o),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function (t, e) {
                    i.$refs.container.one("beforeClose.fb", function () {
                        t.close(null, 0)
                    }), e.$content.find(".fancybox-share__button").click(function () {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function (t, e, n) {
    "use strict";

    function o() {
        var e = t.location.hash.substr(1),
            n = e.split("-"),
            o = 1 < n.length && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
        return {
            hash: e,
            index: o < 1 ? 1 : o,
            gallery: n.join("-")
        }
    }

    function i(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }

    function a(t) {
        var e, n;
        return !!t && ("" !== (n = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n)
    }
    n.escapeSelector || (n.escapeSelector = function (t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    }), n(function () {
        !1 !== n.fancybox.defaults.hash && (n(e).on({
            "onInit.fb": function (t, e) {
                var n, i;
                !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function (n, o, i, s) {
                var r;
                i && !1 !== i.opts.hash && (r = a(o)) && (o.currentHash = r + (1 < o.group.length ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function () {
                    "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function (n, o, i) {
                i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null)
            }
        }), n(t).on("hashchange.fb", function () {
            var t = o(),
                e = null;
            n.each(n(".fancybox-container").get().reverse(), function (t, o) {
                var i = n(o).data("FancyBox");
                if (i && i.currentHash) return e = i, !1
            }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t)
        }), setTimeout(function () {
            n.fancybox.getInstance() || i(o())
        }, 50))
    })
}(window, document, jQuery),
function (t, e) {
    "use strict";
    var n = (new Date).getTime();
    e(t).on({
        "onInit.fb": function (t, e, o) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                var o = e.current,
                    i = (new Date).getTime();
                e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery),
function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function () {
    return function (e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0)
    }([function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var i = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            u = o((o(n(1)), n(6))),
            f = o(n(7)),
            d = o(n(8)),
            p = o(n(9)),
            b = o(n(10)),
            y = o(n(11)),
            h = o(n(14)),
            w = [],
            k = !1,
            x = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            },
            j = function () {
                if (0 < arguments.length && void 0 !== arguments[0] && arguments[0] && (k = !0), k) return w = (0, y["default"])(w, x), (0, b["default"])(w, x.once), w
            },
            O = function () {
                w = (0, h["default"])(), j()
            };
        e.exports = {
            init: function (e) {
                x = i(x, e), w = (0, h["default"])();
                var t = document.all && !window.atob;
                return function (e) {
                    return !0 === e || "mobile" === e && p["default"].mobile() || "phone" === e && p["default"].phone() || "tablet" === e && p["default"].tablet() || "function" == typeof e && !0 === e()
                }(x.disable) || t ? void w.forEach(function (e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                }) : (document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function () {
                    j(!0)
                }) : document.addEventListener(x.startEvent, function () {
                    j(!0)
                }), window.addEventListener("resize", (0, f["default"])(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, f["default"])(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u["default"])(function () {
                    (0, b["default"])(w, x.once)
                }, x.throttleDelay)), x.disableMutationObserver || (0, d["default"])("[data-aos]", O), w)
            },
            refresh: j,
            refreshHard: O
        }
    }, function (e, t) {}, , , , , function (e, t) {
        (function (t) {
            "use strict";

            function n(e, t, n) {
                function o(t) {
                    var n = b,
                        o = v;
                    return b = v = void 0, k = t, g = e.apply(o, n)
                }

                function c(e) {
                    var n = e - w;
                    return void 0 === w || t <= n || n < 0 || S && y <= e - k
                }

                function s() {
                    var e = O();
                    return c(e) ? d(e) : void(h = setTimeout(s, function a(e) {
                        var i = t - (e - w);
                        return S ? j(i, y - (e - k)) : i
                    }(e)))
                }

                function d(e) {
                    return h = void 0, z && b ? o(e) : (b = v = void 0, g)
                }

                function m() {
                    var e = O(),
                        n = c(e);
                    if (b = arguments, v = this, w = e, n) {
                        if (void 0 === h) return function r(e) {
                            return k = e, h = setTimeout(s, t), _ ? o(e) : g
                        }(w);
                        if (S) return h = setTimeout(s, t), o(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)), g
                }
                var b, v, y, g, h, w, k = 0,
                    _ = !1,
                    S = !1,
                    z = !0;
                if ("function" != typeof e) throw new TypeError(f);
                return t = u(t) || 0, i(n) && (_ = !!n.leading, y = (S = "maxWait" in n) ? x(u(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = function l() {
                    void 0 !== h && clearTimeout(h), b = w = v = h = void(k = 0)
                }, m.flush = function p() {
                    return void 0 === h ? g : d(O())
                }, m
            }

            function i(e) {
                var t = void 0 === e ? "undefined" : c(e);
                return !!e && ("object" == t || "function" == t)
            }

            function a(e) {
                return "symbol" == (void 0 === e ? "undefined" : c(e)) || function r(e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : c(e))
                }(e) && k.call(e) == d
            }

            function u(e) {
                if ("number" == typeof e) return e;
                if (a(e)) return s;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(l, "");
                var n = m.test(e);
                return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
            }
            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                f = "Expected a function",
                s = NaN,
                d = "[object Symbol]",
                l = /^\s+|\s+$/g,
                p = /^[-+]0x[0-9a-f]+$/i,
                m = /^0b[01]+$/i,
                b = /^0o[0-7]+$/i,
                v = parseInt,
                y = "object" == (void 0 === t ? "undefined" : c(t)) && t && t.Object === Object && t,
                g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                h = y || g || Function("return this")(),
                k = Object.prototype.toString,
                x = Math.max,
                j = Math.min,
                O = function () {
                    return h.Date.now()
                };
            e.exports = function o(e, t, o) {
                var r = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError(f);
                return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: a
                })
            }
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        (function (t) {
            "use strict";

            function o(e) {
                var t = void 0 === e ? "undefined" : u(e);
                return !!e && ("object" == t || "function" == t)
            }

            function r(e) {
                return "symbol" == (void 0 === e ? "undefined" : u(e)) || function i(e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : u(e))
                }(e) && w.call(e) == s
            }

            function a(e) {
                if ("number" == typeof e) return e;
                if (r(e)) return f;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(d, "");
                var n = p.test(e);
                return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e
            }
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                f = NaN,
                s = "[object Symbol]",
                d = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i,
                m = /^0o[0-7]+$/i,
                b = parseInt,
                v = "object" == (void 0 === t ? "undefined" : u(t)) && t && t.Object === Object && t,
                y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
                g = v || y || Function("return this")(),
                w = Object.prototype.toString,
                k = Math.max,
                x = Math.min,
                j = function () {
                    return g.Date.now()
                };
            e.exports = function n(e, t, n) {
                function i(t) {
                    var n = b,
                        o = v;
                    return b = v = void 0, O = t, g = e.apply(o, n)
                }

                function f(e) {
                    var n = e - w;
                    return void 0 === w || t <= n || n < 0 || S && y <= e - O
                }

                function s() {
                    var e = j();
                    return f(e) ? d(e) : void(h = setTimeout(s, function u(e) {
                        var i = t - (e - w);
                        return S ? x(i, y - (e - O)) : i
                    }(e)))
                }

                function d(e) {
                    return h = void 0, z && b ? i(e) : (b = v = void 0, g)
                }

                function m() {
                    var e = j(),
                        n = f(e);
                    if (b = arguments, v = this, w = e, n) {
                        if (void 0 === h) return function r(e) {
                            return O = e, h = setTimeout(s, t), _ ? i(e) : g
                        }(w);
                        if (S) return h = setTimeout(s, t), i(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)), g
                }
                var b, v, y, g, h, w, O = 0,
                    _ = !1,
                    S = !1,
                    z = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return t = a(t) || 0, o(n) && (_ = !!n.leading, y = (S = "maxWait" in n) ? k(a(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = function l() {
                    void 0 !== h && clearTimeout(h), b = w = v = h = void(O = 0)
                }, m.flush = function p() {
                    return void 0 === h ? g : d(j())
                }, m
            }
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        "use strict";

        function o(e) {
            e && e.forEach(function (e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                    n = Array.prototype.slice.call(e.removedNodes);
                t.concat(n).filter(function (e) {
                    return e.hasAttribute && e.hasAttribute("data-aos")
                }).length && i()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {};
        t["default"] = function n(e, t) {
            var n = window.document,
                a = new(window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver)(o);
            i = t, a.observe(n.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })
        }
    }, function (e, t) {
        "use strict";

        function o() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            f = function () {
                function e() {
                    ! function n(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return i(e, [{
                    key: "phone",
                    value: function () {
                        var e = o();
                        return !(!r.test(e) && !a.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function () {
                        var e = o();
                        return !(!u.test(e) && !c.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function () {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t["default"] = new f
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t["default"] = function (e, t) {
            var o = window.pageYOffset,
                i = window.innerHeight;
            e.forEach(function (e, r) {
                ! function (e, t, n) {
                    var o = e.node.getAttribute("data-aos-once");
                    t > e.position ? e.node.classList.add("aos-animate") : void 0 !== o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
                }(e, i + o, t)
            })
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(n(12));
        t["default"] = function (e, t) {
            return e.forEach(function (e, n) {
                e.node.classList.add("aos-init"), e.position = (0, r["default"])(e.node, t.offset)
            }), e
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(n(13));
        t["default"] = function (e, t) {
            var n = 0,
                o = 0,
                i = window.innerHeight,
                a = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                };
            switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r["default"])(e).top, a.anchorPlacement) {
                case "top-bottom":
                    break;
                case "center-bottom":
                    n += e.offsetHeight / 2;
                    break;
                case "bottom-bottom":
                    n += e.offsetHeight;
                    break;
                case "top-center":
                    n += i / 2;
                    break;
                case "bottom-center":
                    n += i / 2 + e.offsetHeight;
                    break;
                case "center-center":
                    n += i / 2 + e.offsetHeight / 2;
                    break;
                case "top-top":
                    n += i;
                    break;
                case "bottom-top":
                    n += e.offsetHeight + i;
                    break;
                case "center-top":
                    n += e.offsetHeight / 2 + i
            }
            return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
        }
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t["default"] = function (e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: n,
                left: t
            }
        }
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t["default"] = function (e) {
            return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
                return {
                    node: e
                }
            })
        }
    }])
});
var addCSSRule = function (sheet_id, rules) {
        $("#" + sheet_id).remove(), $("<style type='text/css' id='" + sheet_id + "'>" + rules + "</style>").appendTo("head")
    },
    removeCSSRule = function (sheet_id) {
        $("#" + sheet_id).remove()
    },
    delay = function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer), timer = setTimeout(callback, ms)
        }
    }(),
    forceRedraw = function ($el) {
        return $el && $el.length && $el[0].offsetHeight
    };

function fix_touch_hovers() {
    if (Modernizr.touchevents) try {
        for (var ignore = /:hover/, i = 0; i < document.styleSheets.length; i++)
            for (var sheet = document.styleSheets[i], j = sheet.cssRules.length - 1; 0 <= j; j--) {
                var rule = sheet.cssRules[j];
                if (rule.type === CSSRule.STYLE_RULE) ignore.test(rule.selectorText) && (sheet.deleteRule(j), 0);
                else if (rule.type === CSSRule.MEDIA_RULE)
                    for (var mrules = rule.cssRules, k = mrules.length - 1; 0 <= k; k--) {
                        var mrule = mrules[k];
                        mrule.type === CSSRule.STYLE_RULE && ignore.test(mrule.selectorText) && (rule.deleteRule(k), 0)
                    }
            }
    } catch (e) {
        console.log("Fix Hovers ERROR", e)
    }
}
$.fn.hasScrollBar = function () {
    return this.get(0).scrollHeight > this.outerHeight()
}, $.fn.startScrollBar = function () {
    return this.get(0).scrollTop <= 0
}, $.fn.endScrollBar = function () {
    return this.get(0).scrollTop >= this.get(0).scrollHeight - this.outerHeight()
}, $.fn.hasHorzScrollbar = function () {
    return this.get(0).scrollWidth > this.width()
}, window.getFunctionFromString = function (string) {
    var scope = window,
        scopeSplit = string.split(".");
    for (i = 0; i < scopeSplit.length - 1; i++)
        if ((scope = scope[scopeSplit[i]]) == undefined) return;
    return scope[scopeSplit[scopeSplit.length - 1]]
};
var urlParams = {};

function click_touch_init() {
    $(document).on("click.touchfocused", ".touchevents .touch-focused, .touch-focused-all", function (e) {
        var $o = $(this);
        $o.hasClass("focused") ? $o.hasClass("touch-focused-toggle") && $o.removeClass("focused") : ($o.hasClass("disable-prevent-link-clicks") || e.preventDefault(), $(".touch-focused").not($o).not($o.closest(".touch-focused")).removeClass("focused"), $o.addClass("focused"))
    }), $(document).on("click", ".touchevents .touch-focused a, .touch-focused-all a", function (e) {
        var $tf = $(this).closest(".touch-focused");
        $tf.hasClass("focused") || $tf.hasClass("disable-prevent-link-clicks") || e.preventDefault()
    }), $(document).on("click touchstart", "*", function (e) {
        $(e.target).closest(".touch-focused").length || $(".touch-focused").removeClass("focused")
    }), $(document).on("click", ".no-click", function (e) {
        e.preventDefault()
    }), $(document).on("click", ".no-propagation", function (e) {
        e.stopPropagation()
    })
}

function responsive_init() {
    responsive_update()
}

function responsive_update(force, no_animation) {
    void 0 !== no_animation && no_animation && $("body").addClass("no-transition no-animation"), void 0 === force && (force = !1);
    var ww = window.innerWidth;
    ($("body").data("ww") != ww || force) && ("undefined" != typeof Blazy && "undefined" != typeof Blazy.revalidate && Blazy.revalidate(), $("[data-place]").each(function () {
        var places = $(this).data("place"),
            breakpoints = Object.keys(places).map(function (value) {
                return parseInt(value)
            }).sort(function (a, b) {
                return a - b
            }).reverse();
        for (i in breakpoints)
            if (window.matchMedia("(min-width: " + breakpoints[i] + "px)").matches) {
                $(places[breakpoints[i]]).length && ($(this).next(places[breakpoints[i]]).length || $(this).attr("data-place-breakpoint", breakpoints[i]).insertBefore(places[breakpoints[i]]));
                break
            }
    }), $("body").data("ww", ww)), void 0 !== no_animation && no_animation && ($("body")[0].offsetHeight, $("body").removeClass("no-transition no-animation"))
}

function blazy_init(container) {
    $(".js-blazy-revalidate-on-scroll").on("scroll", function () {
        blazy_revalidate_on_scroll_delay(function () {
            "undefined" != typeof Blazy && "undefined" != typeof Blazy.revalidate && Blazy.revalidate()
        }, 50)
    }), window.Blazy = new Blazy({
        container: container || null,
        offset: 0,
        success: function (ele) {
            var $o = $(ele).closest(".img-to-bg");
            img_to_bg($o), $o.addClass("img-to-bg-lazy-loaded"), blazy_callback(ele)
        },
        error: function (ele, msg) {
            blazy_callback(ele)
        }
    }), $(window).on("resize", function () {
        blazy_revalidate_delay(function () {
            blazy_revalidate()
        }, 100)
    }), $(document).on("shown.bs.modal", function () {
        blazy_revalidate()
    }), $(".js-slick-slider-revalidate-image").on("init reInit setPosition", function (event) {
        blazy_revalidate()
    })
}

function blazy_callback(ele) {
    var callback = $(ele).not(".blazy-callback-executed").data("src-callback");
    if (callback) {
        var callback_params = $(ele).data("src-callback-params");
        callback_params || (callback_params = []);
        var fn = getFunctionFromString(callback);
        "function" == typeof fn && ($(ele).addClass("blazy-callback-executed"), fn.apply(null, callback_params))
    }
}

function blazy_revalidate() {
    "undefined" != typeof Blazy && "undefined" != typeof Blazy.revalidate && Blazy.revalidate()
}(window.onpopstate = function () {
    for (var match, pl = /\+/g, search = /([^&=]+)=?([^&]*)/g, decode = function (s) {
            return decodeURIComponent(s.replace(pl, " "))
        }, query = window.location.search.substring(1); match = search.exec(query);) decode(match[1]) in urlParams ? (Array.isArray(urlParams[decode(match[1])]) || (urlParams[decode(match[1])] = [urlParams[decode(match[1])]]), urlParams[decode(match[1])].push(decode(match[2]))) : urlParams[decode(match[1])] = decode(match[2])
})();
var blazy_revalidate_delay = function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer), timer = setTimeout(callback, ms)
        }
    }(),
    blazy_revalidate_on_scroll_delay = function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer), timer = setTimeout(callback, ms)
        }
    }();

function img_to_bg($o, context) {
    $("body").hasClass("img-to-bg-inited") || ($(window).on("resize", function () {
        delay_img_to_bg(function () {
            img_to_bg($(".img-to-bg-resp"))
        }, 100)
    }), $("body").addClass("img-to-bg-inited")), void 0 !== $o && $o || ($o = $(".img-to-bg", context)), $o.each(function () {
        var $imgtobg = $(this),
            $img = $imgtobg.find("> img").first();
        $img.length || ($img = $imgtobg.find("> picture img").first());
        var src = "";
        if ($img.length) src = $img[0].currentSrc;
        src || (src = $img.attr("src")), $img.length && src && ($imgtobg.css("background-image", "url('" + src + "')"), $imgtobg.addClass("img-to-bg--inited"))
    })
}
var delay_img_to_bg = function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer), timer = setTimeout(callback, ms)
    }
}();

function fix_100vh_init() {
    Modernizr.touchevents && (fix_100vh(), $("body").data("fix_100vh_ww", $(window).width()), $(window).on("resize", function (e) {
        $("body").data("fix_100vh_ww") != $(window).width() && fix_100vh(), $("body").data("fix_100vh_ww", $(window).width())
    }))
}

function fix_100vh() {
    $(".js-fix-100vh").each(function () {
        $(this).css("height", window.innerHeight)
    }), $(".js-fix-100vh-minus-header").each(function () {
        $(this).css("height", window.innerHeight - $(".header + .header-replace")[0].offsetHeight)
    }), $(".js-fix-100vh-min").each(function () {
        $(this).css("min-height", window.innerHeight)
    }), $(".js-fix-100vh-max").each(function () {
        $(this).css("max-height", window.innerHeight)
    })
}

function toggle_element_init() {
    $(document).on("click click-pseudo change", ".toggle-element, .show-element, .hide-element", function (e) {
        if ($(this).is("a") && e.preventDefault(), "change" != e.type && $(this).is(":checkbox,:radio")) return !0;
        var callback = $(this).data("toggle-condition"),
            condition = !0,
            condition_child = $(this).data("toggle-condition-child");
        if (void 0 !== condition_child) condition = condition_child;
        else if (callback) {
            var callback_params = $(this).data("toggle-condition-args");
            callback_params || (callback_params = []);
            var fn = getFunctionFromString(callback);
            "function" == typeof fn && (condition = fn.apply(null, callback_params)), $(this).parents("[data-toggle-condition]").data("toggle-condition-child", condition)
        }
        if (!condition) return !0;
        var $o = $();
        $(this).attr("href") && 1 < $(this).attr("href").length && ($o = $($(this).attr("href"))), $o.length || ($o = $($(this).data("selector")));
        var restore_scroll = $(this).data("toggle-restore-scroll-position");
        if (restore_scroll) {
            var scroll_pos = $(window).scrollTop(),
                $scroll_relative = $(this),
                scroll_relative = $(this).data("toggle-restore-scroll-relative");
            scroll_relative && ($scroll_relative = $(scroll_relative));
            var offset_pos = parseInt($scroll_relative.offset().top, 10)
        }
        var class_name = "hidden";
        $(this).data("toggle-class") && (class_name = $(this).data("toggle-class"));
        var element_class_name = "active";
        $(this).data("toggle-element-class") && (element_class_name = $(this).data("toggle-element-class"));
        var change_label = !1;
        if ($(this).hasClass("toggle-element") && (change_label = !0, $(this).is(":checkbox,:radio") ? "change" == e.type && $o.toggleClass(class_name, !$(this).prop("checked")) : ($(this).toggleClass(element_class_name), $o.toggleClass(class_name)), $o.trigger("toggle-element")), $(this).hasClass("show-element") && ($o_s = $($(this).data("selector-show")), $o_s.length && ($o = $o_s), $(this).hasClass(element_class_name) || (change_label = !0), $(this).addClass(element_class_name), $o.toggleClass(class_name, !!$(this).data("toggle-reverse")), $o.trigger("show-element")), $(this).hasClass("hide-element") && ($o_h = $($(this).data("selector-hide")), $o_h.length && ($o = $o_h), $(this).hasClass(element_class_name) && (change_label = !0), $(this).addClass(element_class_name), $o.toggleClass(class_name, !$(this).data("toggle-reverse")), $o.trigger("hide-element")), change_label && $(this).data("toggle-change-label")) {
            var label = $(this).html();
            $(this).html($(this).attr("data-toggle-change-label")), $(this).attr("data-toggle-change-label", label)
        }
        var $siblings = $(this).siblings();
        if ($(this).data("toggle-siblings-selector") && ($siblings = $(this).closest($(this).data("toggle-siblings-selector")).siblings()), $(this).data("toggle-current-selector") && ($siblings = $siblings.find($(this).data("toggle-current-selector"))), $siblings.removeClass(element_class_name), restore_scroll) {
            $(window).scrollTop();
            var offset_pos_new = parseInt($scroll_relative.offset().top, 10);
            $(window).scrollTop(offset_pos_new - (offset_pos - scroll_pos))
        }
    })
}

function goto_init() {
    $(document).on("click", ".js-goto", function (e) {
        var hash = $(this).attr("href").split("#");
        if (1 < hash.length) {
            hash = "#" + hash.pop();
            var $o = $(hash);
            if ($o.length) {
                e.preventDefault();
                var $this = $(this);
                $this.closest(".goto-list").length && ($this.closest(".goto-list").find("li").removeClass("active"), $this.closest("li").addClass("active"), tabs_update_pointer($this.closest(".tabs"))), $this.closest(".goto-hash-change").length && location_hash_update($this.attr("href")), goto_object($o)
            }
        }
    })
}

function goto_object($o, speed, doffset) {
    if (void 0 === speed && (speed = 700), $o.length) {
        var offset = $o.offset().top;
        void 0 !== doffset && (offset += doffset);
        var $offset = $(".js-goto-offset").first();
        $offset.length && (offset -= $offset.outerHeight()), $o.data("goto-offset-element") && (offset -= $($o.data("goto-offset-element")).outerHeight()), goto_offset(offset, speed, $o)
    }
}

function goto_offset(offset, speed, $o) {
    void 0 === speed && (speed = 700), $("html, body").stop(!0, !0).animate({
        scrollTop: offset
    }, speed, function () {
        $(this).trigger("goto-end"), $o && $o.trigger("goto-end")
    })
}

function aos_init() {
    AOS.init({
        offset: window.matchMedia("(max-width: 767px)").matches ? 50 : 100,
        duration: 600,
        delay: 0,
        once: !0
    })
}

function misc_init() {
    $(document).on("after-action-success", ".form--quote", function (e) {
        var url = $(this).data("redirect-url"),
            timeout = $(this).data("redirect-after");
        void 0 === timeout && (timeout = 0), url && setTimeout(function () {
            location.href = url
        }, timeout)
    }), $(document).on("submit", ".js-form-hero", function (e) {
        loader_add($(this).find('[type="submit"]'))
    }), urlParams && urlParams.price && $('input[name="price"]').val(urlParams.price).trigger("change")
}

function checkbox_plain_init($o, context) {
    $o || ($o = context ? $(".checkbox-plain-js", context) : $(".checkbox-plain-js")), ($o = $o.not(".checkbox-plain-js-inited")).find("[type='checkbox'], [type='radio']").on("change change-pseudo", function (e) {
        var $o = $(this).closest(".checkbox-plain-js"),
            name = $(this).attr("name");
        if ("radio" == $(this).prop("type")) {
            var $radios = $(this).closest("form").find("[name='" + name + "']");
            $radios.length || ($radios = $("input[name='" + name + "']")), ($radios = $radios.not(":checked")).closest(".checkbox-plain-js").removeClass("checked")
        }
        $(this).prop("checked") ? $o.addClass("checked") : $o.removeClass("checked"), $(this).prop("disabled") ? $o.addClass("disabled") : $o.removeClass("disabled")
    }).on("focus", function (e) {
        var $o = $(this).closest(".checkbox-plain-js");
        $(this).prop("disabled") || $o.addClass("focused")
    }).on("blur", function (e) {
        $(this).closest(".checkbox-plain-js").removeClass("focused")
    }).on("click", function (e) {
        $(this).data("uncheckable");
        if (void 0 !== $(this).data("uncheckable")) {
            var previousValue = $(this).attr("data-previousValue"),
                name = $(this).attr("name"),
                $radios = $(this).closest("form").find("[name='" + name + "']");
            $radios.length || ($radios = $("input[name='" + name + "']")), "checked" == previousValue ? ($(this).prop("checked", !1).trigger("change"), $(this).attr("data-previousValue", !1)) : ($radios.attr("data-previousValue", !1), $(this).attr("data-previousValue", "checked"))
        }
    }).each(function () {
        var $o = $(this).closest(".checkbox-plain-js");
        $(this).prop("checked") && $o.addClass("checked"), $(this).prop("disabled") && $o.addClass("disabled")
    }), $o.addClass("checkbox-plain-js-inited")
}

function nouislider_init() {
    $("body").hasClass("nouislider-inited") || ($(document).on("change keyup", ".js-range-input input", function (e) {
        if ("keyup" == e.type && "" === $(this).val()) return !0;
        if ($range = $(this).closest(".js-range"), $slider = $range.find(".js-range-slider"), $inputs = $range.find(".js-range-input input"), $slider.length && 0 < $inputs.length) {
            if ("keyup" == e.type && ($(this).val() < $slider[0].noUiSlider.options.range.min[0] || $(this).val() > $slider[0].noUiSlider.options.range.max[0])) return !0;
            var values = [];
            $inputs.each(function (i) {
                !i && 1 * $(this).val() > 1 * $inputs.eq(1).val() && $(this).val(-9999999999), !i || 1 * $(this).val() || $(this).val(9999999999), values.push($(this).val())
            }), $slider[0].noUiSlider.set(values)
        }
    }), $("body").addClass("nouislider-inited")), $(".js-range-slider").not(".nouislider-inited").each(function () {
        var rangeMin = $(this).data("min") || 0,
            connect = $(this).data("connect") || "lower",
            rangeMax = $(this).data("max") || 0,
            rangeStep = $(this).data("step") || 1,
            rangeMargin = $(this).data("margin") || 0,
            rangeDecimals = $(this).data("decimals") || 0,
            rangeReduce = $(this).data("reduce") || 0,
            rangePrefix = $(this).data("prefix") || "",
            rangeSuffix = $(this).data("suffix") || "",
            rangeSnap = $(this).data("snap") || !1,
            rangeRange = $(this).data("range") || !1,
            rangePips = $(this).data("pips") || !1,
            rangeFormatFunction = $(this).data("range-format-function") || !1,
            $range = $(this).closest(".js-range"),
            range_slider_element = this,
            rangeMinData = parseFloat($(this).attr("data-minValue")),
            rangeMaxData = parseFloat($(this).attr("data-maxValue"));
        if (rangeMax <= rangeMinData && (rangeMinData = rangeMin), rangeMaxData <= rangeMin && (rangeMaxData = rangeMax), rangeMin == rangeMax && (rangeMin--, rangeMax++), void 0 !== $(this).attr("data-value")) {
            var rangeData = parseFloat($(this).attr("data-value"));
            rangeMax <= rangeData && (rangeData = rangeMin), rangeData <= rangeMin && (rangeData = rangeMax)
        }
        rangeRange || (rangeRange = {
            min: Number((1 * rangeMin).toFixed(rangeDecimals)),
            max: Number((1 * rangeMax).toFixed(rangeDecimals))
        }), def_format = wNumb({
            decimals: rangeDecimals,
            thousand: " ",
            prefix: rangePrefix,
            suffix: rangeSuffix,
            encoder: function (value) {
                return value / Math.pow(10, rangeReduce)
            }
        }), noUiSlider.create(range_slider_element, {
            start: void 0 !== rangeData ? rangeData : [rangeMinData, rangeMaxData],
            connect: connect,
            direction: "ltr",
            orientation: "horizontal",
            behaviour: "tap-drag",
            margin: rangeMargin,
            step: rangeStep,
            snap: rangeSnap,
            range: rangeRange,
            pips: rangePips,
            tooltips: void 0 !== rangeData ? def_format : [def_format, def_format],
            format: {
                to: function (value) {
                    return Number((1 * value).toFixed(rangeDecimals))
                },
                from: function (value) {
                    return Number((1 * value).toFixed(rangeDecimals))
                }
            }
        }), $range.find(".js-range-input-get").val(rangeData).data("range-value-changed", rangeData).data("input-format", def_format).data("input-format-function", rangeFormatFunction), $range.find(".js-range-input-get-min").val(rangeMinData).data("range-value-changed", rangeMinData).data("input-format", def_format).data("input-format-function", rangeFormatFunction), $range.find(".js-range-input-get-max").val(rangeMaxData).data("range-value-changed", rangeMaxData).data("input-format", def_format).data("input-format-function", rangeFormatFunction), range_slider_element.noUiSlider.on("update", function (values, handle) {
            var $range = $(range_slider_element).closest(".js-range"),
                $input = ($range.find(".js-range-input"), $range.find(".js-range-input-get")),
                $input_min = $range.find(".js-range-input-get-min"),
                $input_max = $range.find(".js-range-input-get-max");
            $input.val(values[0]).trigger("range-updated").closest(".js-range-input").toggleClass("active", values[0] != this.options.range.min), $input_min.val(values[0]).trigger("range-updated").closest(".js-range-input").toggleClass("active", values[0] != this.options.range.min), $input_max.val(values[1]).trigger("range-updated").closest(".js-range-input").toggleClass("active", values[1] != this.options.range.max), rangeFormatFunction && "function" == typeof window[rangeFormatFunction] ? ($range.find(".js-range-set").html(window[rangeFormatFunction](values[0])), $range.find(".js-range-min-set").html(window[rangeFormatFunction](values[0])), $range.find(".js-range-max-set").html(window[rangeFormatFunction](values[1]))) : ($range.find(".js-range-set").html(def_format.to(values[0])), $range.find(".js-range-min-set").html(def_format.to(values[0])), $range.find(".js-range-max-set").html(def_format.to(values[1])))
        }), range_slider_element.noUiSlider.on("change", function (values, handle) {
            var $range = $(range_slider_element).closest(".js-range"),
                $input = $range.find(".js-range-input-get"),
                $input_min = $range.find(".js-range-input-get-min"),
                $input_max = $range.find(".js-range-input-get-max");
            $input.data("range-value-changed") != values[0] && $input.trigger("range-changed"), $input_min.data("range-value-changed") != values[0] && $input_min.trigger("range-changed"), $input_max.data("range-value-changed") != values[1] && $input_max.trigger("range-changed"), $input.data("range-value-changed", values[0]), $input_min.data("range-value-changed", values[0]), $input_max.data("range-value-changed", values[1])
        }), 0 != rangeData && range_slider_element.noUiSlider.set([rangeData, null]), 0 != rangeMinData && range_slider_element.noUiSlider.set([rangeMinData, null]), 0 != rangeMaxData && range_slider_element.noUiSlider.set([null, rangeMaxData]), $(this).addClass("nouislider-inited")
    })
}

function mask_init(context) {
    "undefined" != typeof Inputmask && ($("body").hasClass("inputmask-inited") || (Inputmask.extendDefaults({
        showMaskOnHover: !0,
        showMaskOnFocus: !0,
        onKeyDown: function (event, buffer, caretPos, opts) {
            event && event.target && !$(event.target).inputmask("isComplete") && ($(event.target).removeClass("mask-complete"), $(event.target).removeClass("mask-incomplete"))
        },
        oncomplete: function (event) {
            event && event.target && ($(event.target).addClass("mask-complete"), $(event.target).removeClass("mask-incomplete"))
        },
        onincomplete: function (event) {
            event && event.target && ($(event.target).removeClass("mask-complete"), $(event.target).addClass("mask-incomplete"))
        }
    }), $("body").addClass("inputmask-inited")), $(".mask-phone-ru", context).filter(":not(.mask-inited)").inputmask({
        definitions: {
            "#": {
                validator: "[0-9]",
                cardinality: 1
            }
        },
        mask: "+7 (###) ###-##-##",
        placeholder: "_"
    }).addClass("mask-inited"), $(".mask-date", context).filter(":not(.mask-inited)").inputmask({
        definitions: {
            "#": {
                validator: "[0-9]",
                cardinality: 1
            }
        },
        mask: "##.##.####",
        placeholder: "_"
    }).addClass("mask-inited"))
}

function form_process_init() {
    $(document).on("submit.valid click perform-action", ".js-action", function (e) {
        var $this = $(this);
        if ($this.is("form") && "submit" != e.type) return !0;
        e.preventDefault();
        var url = $this.attr("href"),
            method = "get",
            data = null;
        $this.find(".js-file-upload-hash").val((new Date).getTime()), $this.is("form") && (url = $this.attr("action"), method = $this.attr("method")), $this.attr("data-action-url") && (url = $this.attr("data-action-url")), $this.attr("data-action-method") && (method = $this.attr("data-action-method")), $this.is("form") && (data = $this.serialize(), "get" != method.toLowerCase() && window.FormData !== undefined && (data = new FormData($this[0])), $this.data("serialized", data), $this.data("serializedArray", $this.serializeArray())), $this.find(".js-file-upload-start").length ? (form_process_before_send($this), $this.find(".js-file-upload-start").trigger("click")) : $.ajax({
            url: url,
            type: method,
            data: data,
            dataType: "json",
            cache: !1,
            contentType: !1,
            processData: !1,
            beforeSend: function () {
                form_process_before_send($this)
            },
            complete: function (response) {
                form_process_complete($this, response)
            },
            success: function (response) {
                form_process_success($this, response)
            },
            error: function (jqXHR) {
                form_process_errors($this, jqXHR)
            }
        })
    }), $(document).on("after-action-success", ".js-action-reset-after", function (e) {
        $(this)[0].reset()
    })
}

function form_process_before_send($this) {
    $this.find(":input").prop("disabled", !0).closest(".textfield-wrapper").addClass("disabled"), $this.find(".js-form-disable-on-submit").addClass("disabled");
    var $btn = $this.find(".loader-on-submit");
    window.loader_add && loader_add($btn)
}

function form_process_complete($this, response) {
    $this.find(":input").not("[data-disabled]").prop("disabled", !1).closest(".textfield-wrapper").removeClass("disabled"), $this.find(".js-form-disable-on-submit").not("[data-disabled]").removeClass("disabled"), $this.find(":password").val("");
    var $btn = $this.find(".loader-on-submit");
    window.loader_remove && loader_remove($btn), $this.trigger("after-action-complete", response)
}

function form_process_success($this, response) {
    if (response.popup) response.text && ($.fancybox.close(), $.fancybox.open(response.text, $.fancybox.options_modal));
    else {
        var $message = $this.find(".js-message");
        $message.length || ($message = $this.find($this.data("message"))), $message.length || ($message = $($this.data("message"))), $this.find(".js-message-container").html(response.text), bind_widgets($this), $message.addClass("active"), $this.addClass("inactive"), $message.offset().top < $(window).scrollTop() + $(".header").outerHeight() && goto_object($message, null, -1 * $(".header").outerHeight()), $this.data("message-autoclose") && setTimeout(function () {
            $message.removeClass("active"), $this.removeClass("inactive")
        }, $this.data("message-autoclose"))
    }
    $this.trigger("after-action-success", response)
}

function form_process_errors($this, jqXHR) {
    var error_text;
    console.log(jqXHR.status, jqXHR.responseJSON), 401 === jqXHR.status ? error_text = "Access denied." : 422 === jqXHR.status ? form_process_errors_show($this, jqXHR.responseJSON) : error_text = "Error occurs. Try again.", error_text && alert(error_text), $this.trigger("after-action-error", jqXHR)
}

function form_process_errors_show($this, response) {
    var index = 0;
    $.each(response, function (field_name, field_errors) {
        $field = $this.find("[name='" + field_name + "']"), index || $field.trigger("focus"), $field.addClass("error");
        var $append_to = $field.closest(".form__item-field");
        $append_to.length || ($append_to = $field.parent()), $append_to.find(".form__error").remove(), $.each(field_errors, function (error_index, error_text) {
            $append_to.append("<div class='form__error form__error--" + error_index + "'>" + error_text + "</div>")
        }), index++
    })
}

function validate_init(context) {
    if ($.validator) {
        $("body").hasClass("validate-inited") || ($(document).on("reset", ".form-validate", function () {
            var $form = $(this);
            $form.find(".form__item, :input").removeClass("error"), setTimeout(function () {
                $form.find(":input").trigger("change"), $form.find(".checkbox-plain-js input[type='checkbox'], .checkbox-plain-js input[type='radio']").trigger("change-pseudo")
            }, 50)
        }), $.validator.setDefaults({}), $.extend($.validator.messages, {
            required: "Обязательное поле.",
            pattern: "Некорректное значение.",
            email: "Некорректный E-mail.",
            phonecomplete: "Неполный номер телефона.",
            maskcomplete: "Заполните поле полностью.",
            dateru: "Несуществующая дата."
        }), $.validator.addMethod("email", function (value, element) {
            return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
        }), $.validator.addMethod("phonecomplete", function (value, element) {
            return this.optional(element) || 7 <= value.replace(/\D/, "").length && $(element).inputmask("isComplete")
        }), $.validator.addMethod("maskcomplete", function (value, element) {
            return this.optional(element) || 7 <= value.replace(/\D/, "").length && $(element).inputmask("isComplete")
        }), $.validator.addMethod("password", function (value, element) {
            return this.optional(element) || 6 <= value.length
        }), $.validator.addMethod("dateru", function (value, element) {
            return this.optional(element) || /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/.test(value)
        }), $.validator.addMethod("passwordconfirm", function (value, element) {
            var $password = $($(element).data("rule-passwordconfirm-password"));
            return this.optional(element) || !$password.length || !$password.val() || value === $password.val()
        }), $.each($.validator.methods, function (key, value) {
            $.validator.methods[key] = function () {
                return 0 < arguments.length && (arguments[0] = $.trim(arguments[0])), value.apply(this, arguments)
            }
        }), $(document).on("keyup blur change check-form", ".form-disabled-until-valid :input", function () {
            var $form = $(this).closest(".form-disabled-until-valid"),
                result = $form.validate().checkForm(),
                $if_filled = $form.find(".form-disabled-until-valid-check-filled"),
                is_filled = $if_filled.filter(".filled").length == $if_filled.length;
            $if_filled.length && (result = result && is_filled), $form.find(".disabled-until-valid").prop("disabled", !result)
        }), $(document).on("change change-checkbox-valid", "input[type='checkbox'], input[type='radio']", function () {
            $(this).closest("form").data("validator") && $(this).valid()
        }), $("body").addClass("validate-inited"));
        var $forms = context ? $(".form-validate", context) : $(".form-validate");
        ($forms = $forms.not(".form-validate-inited")).each(function () {
            $(this).validate({
                onkeyup: !1,
                normalizer: function (value) {
                    return $.trim(value)
                },
                errorClass: "form__error",
                validClass: "valid",
                errorElement: "div",
                highlight: function (element, errorClass, validClass) {
                    $(element).addClass("error").removeClass("valid")
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).addClass("valid").removeClass("error")
                },
                errorPlacement: function (error, element) {
                    $(element).closest(".form__item-field").append(error)
                },
                submitHandler: function (form, e) {
                    $(form).trigger("submit.valid")
                }
            }), $(this).addClass("form-validate-inited")
        }), $(".form-disabled-until-valid-onload").find(":input").first().trigger("check-form")
    }
}

function form_validate(form, show_errors) {
    var $form = $(form);
    if (show_errors) {
        var result = $form.valid();
        $form.validate().focusInvalid();
        return result
    }
    return $form.validate().checkForm()
}

function loader_init() {
    $btn = $(".loader-on-page-load"), loader_add($btn), $btn.prop("disabled", !0)
}

function loader_add($o) {
    $o.closest(".btn").length && $o.wrapInner("<div class='btn__loader-inner'>"), $o.append('<span class="loader"><svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"    width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">        <path fill="#fff" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">        <animateTransform attributeType="xml"            attributeName="transform"            type="rotate"            from="0 25 25"            to="360 25 25"            dur="0.6s"            repeatCount="indefinite"/>        </path>        </svg></div>').addClass("loading"), $o.find("> .loader").addClass("active")
}

function loader_remove($o) {
    $o.find(".btn__loader-inner").children().unwrap(), $o.removeClass("loading");
    var $loader = $o.find("> .loader");
    $loader.removeClass("active"), $loader.remove()
}

function fancybox_init() {
    if ($("html").hasClass("fancybox-inited") || ($("html").addClass("fancybox-inited"), $.fancybox.defaults.i18n.ru = {
            CLOSE: "Закрыть",
            NEXT: "Далее",
            PREV: "Назад",
            ERROR: "Загрузка контента не удалась. <br/> Пожалуйста, попробуйте ещё раз.",
            PLAY_START: "Начать слайдшоу",
            PLAY_STOP: "Приостановить слайдшоу",
            FULL_SCREEN: "Во весь экран",
            THUMBS: "Предпросмотр",
            DOWNLOAD: "Скачать",
            SHARE: "Поделиться",
            ZOOM: "Масштаб"
        }, $.fancybox.defaults.lang = $("html").attr("lang"), $().fancybox && ($.fancybox.options_default = {
            slideShow: !1,
            hash: !1,
            loop: !0,
            idleTime: 10,
            margin: [44, 0],
            gutter: 50,
            keyboard: !0,
            animationEffect: "zoom",
            arrows: !0,
            infobar: !0,
            toolbar: !0,
            buttons: ["slideShow", "fullScreen", "thumbs", "close"],
            smallBtn: !0,
            btnTpl: {
                smallBtn: '<div data-fancybox-close class="fancybox-close"><svg class="icon icon--cross"><use xlink:href="#icon-cross"></use></svg></div>'
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0
            }
        }, $.fancybox.options_modal = {
            animationDuration: 700,
            parentEl: ".wrap",
            slideShow: !1,
            hash: !1,
            keyboard: !1,
            ajax: {
                settings: {
                    cache: !1
                }
            },
            hideScrollbar: !0,
            baseClass: "fancybox-container--popup",
            trapFocus: !1,
            autoFocus: !1,
            touch: !1,
            popup_default: !0,
            btnTpl: {
                smallBtn: '<div data-fancybox-close class="fancybox-close"><svg class="icon icon--cross"><use xlink:href="#icon-cross"></use></svg></div>'
            },
            afterLoad: function (instance, current) {
                current.$content.wrap("<div>"), current.$content.hasClass("fancybox-content") && current.$content.removeClass("fancybox-content").parent().addClass("fancybox-content"), bind_widgets(current.$content)
            },
            afterShow: function (instance, current) {
                "undefined" != typeof Blazy && "undefined" != typeof Blazy.revalidate && Blazy.revalidate()
            },
            beforeClose: function (instance, current) {
                current.$content && current.$content.closest(".fancybox-container").addClass("fancybox-is-close")
            }
        }, $.fancybox.defaults.afterLoad = function (instance, current) {
            current.$content.closest(".fancybox-container").addClass("fancybox-container--" + current.type)
        }, $.fancybox.defaults.beforeLoad = function (instance, current) {
            if ($().tooltipster) {
                var tooltips = $.tooltipster.instances();
                $.each(tooltips, function (i, tooltip) {
                    tooltip.close()
                })
            }
        }, $.fancybox.defaults.hash = !1, $.fancybox.defaults.errorTpl = '<div><div class="panel panel--compact"><div class="panel__content text-align-center"><p>Произошла ошибка при загрузке. <br /> Попробуйте ещё раз.</p></div></div></div>'), $("body").on("mousewheel", function (e) {
            if ($(".fancybox-is-zoomable").length) {
                e.preventDefault();
                var instance = $.fancybox.getInstance();
                $(".fancybox-is-zoomable").length && instance.canPan() && 0 < e.deltaY ? instance.scaleToFit() : $(".fancybox-can-zoomIn").length && instance.isScaledDown() && e.deltaY < 0 && instance.scaleToActual(e.clientX, e.clientY)
            }
        })), $().fancybox) {
        var options = $.fancybox.options_default;
        for (group in $fancybox_links_all = $("[data-fancybox]").not(".fancybox-inited"), $fancybox_links = $fancybox_links_all.not("[data-type='ajax'], [data-type='inline']"), fancybox_links_by_group = [], groups = [], $fancybox_links.each(function () {
                var group = $(this).attr("data-fancybox");
                group || (group = ""), $.inArray(group, groups) < 0 && groups.push(group)
            }), groups) {
            options_current = $.extend(!0, {}, options);
            var $items = $fancybox_links.filter("[data-fancybox='" + groups[group] + "']"),
                $first = $items.eq(0);
            void 0 !== $first.attr("data-fancybox-loop") && (options_current.loop = $first.data("fancybox-loop")), $items.fancybox(options_current).addClass("fancybox-inited")
        }
        $fancybox_links_ajax = $fancybox_links_all.filter("[data-type='ajax'], [data-type='inline']"), $fancybox_links_ajax.each(function () {
            var options = $.fancybox.options_modal;
            $(this).data("ajax-type") && (options = $.extend({}, options, {
                ajax: {
                    settings: {
                        type: $(this).data("ajax-type")
                    }
                }
            })), $(this).data("ajax-data") && (options = $.extend({}, options, {
                ajax: {
                    settings: {
                        data: $(this).data("ajax-data")
                    }
                }
            })), $(this).data("popup-class") && (options = $.extend({}, options, {
                baseClass: options.baseClass + " " + $(this).data("popup-class")
            })), $(this).fancybox(options)
        }).addClass("fancybox-inited")
    }
}

function document_ready() {
    ts = (new Date).getTime(), $("body").removeClass("no-transition"), $("body")[0].offsetHeight, $("body").addClass("ready"), responsive_init(), init_event_handlers(), bind_widgets(), te = (new Date).getTime(), console.log("On-Ready Load Time: ", te - ts)
}

function window_onload() {
    ts = (new Date).getTime(), $("body").removeClass("not-loaded").addClass("loaded"), responsive_update(), te = (new Date).getTime(), console.log("Window Load Time: ", te - ts)
}

function init_event_handlers() {
    blazy_init(), goto_init(), fix_100vh_init(), fix_touch_hovers(), click_touch_init(), form_process_init(), toggle_element_init(), nouislider_init(), misc_init()
}

function bind_widgets(context) {
    img_to_bg(context), validate_init(), fancybox_init(context), checkbox_plain_init(null, context), mask_init(context)
}
$(function () {
    document_ready(), window_onload(), aos_init()
}), $(window).scroll(function () {}), $(window).on("resize", function (e) {
    responsive_update(null, !0)
});
//# sourceMappingURL=build.js.map



// $(document).ready(function () {
//     $("#send_order_button").click(function () {
//
//         alert("event onclick");
//
//         $.post("https://vuamoclick2money.amocrm.ru/private/api/auth.php", { USER_LOGIN: "vu@click2.money", USER_HASH: "4ad6c209b3c8ce6227560fdeafbc7581dfcaa7d7" })
//             .done(function (data) {
//                 alert("Data Loaded: " + data);
//             })
//             .fail(function (data) {
//                 alert("error " + JSON.parse(data));
//             });
//
//     });
// });

