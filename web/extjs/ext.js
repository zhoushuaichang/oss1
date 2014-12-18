/*
 This file is part of Ext JS 4.2

 Copyright (c) 2011-2014 Sencha Inc

 Contact:  http://www.sencha.com/contact

 Commercial Usage
 Licensees holding valid commercial licenses may use this file in accordance with the Commercial
 Software License Agreement provided with the Software or, alternatively, in accordance with the
 terms contained in a written agreement between you and Sencha.

 If you are unsure which license is appropriate for your use, please contact the sales department
 at http://www.sencha.com/contact.

 Build date: 2014-09-02 11:12:40 (ef1fa70924f51a26dacbe29644ca3f31501a5fce)
 */
var Ext = Ext || {};
if (!Ext.core) {
    Ext.core = {}
}
if (!Ext.dom) {
    Ext.dom = {}
}
if (!Ext.perf) {
    Ext.perf = {}
}
if (!Ext.util) {
    Ext.util = {}
}
(function (i) {
    var k = [], l = ["constructor", "toString", "valueOf", "toLocaleString"], j = {}, o = {}, b = 0, h, c, n, g, a = function () {
        var q, p;
        c = Ext.Base;
        n = Ext.ClassManager;
        for (q = l.length; q-- > 0;) {
            p = (1 << q);
            o[j[p] = l[q]] = p
        }
        for (q in o) {
            b |= o[q]
        }
        b = ~b;
        Function.prototype.$isFunction = 1;
        g = Ext.Class.getPreprocessor("config").fn;
        for (h in c) {
            if (c.hasOwnProperty(h)) {
                k.push(h)
            }
        }
        i.derive = d;
        return d.apply(this, arguments)
    }, e = function (x, t, w) {
        var q = w.enumerableMembers, u = x.prototype, s, v, r, p;
        if (!t) {
            return
        }
        for (s in t) {
            p = t[s];
            if (p && p.$isFunction && !p.$isClass && p !== Ext.emptyFn && p !== Ext.identityFn) {
                u[s] = v = p;
                v.$owner = x;
                v.$name = s
            } else {
                u[s] = p
            }
        }
        for (r = 1; q; r <<= 1) {
            if (q & r) {
                q &= ~r;
                s = j[r];
                u[s] = v = t[s];
                v.$owner = x;
                v.$name = s
            }
        }
    }, m = function (t) {
        var p = function s() {
            return t.apply(this, arguments) || null
        }, r, q;
        p.prototype = Ext.Object.chain(t.prototype);
        for (r = k.length; r-- > 0;) {
            q = k[r];
            p[q] = c[q]
        }
        return p
    }, d = function (u, x, Q, p, w, E, v, N, s, G, A) {
        var q = function z() {
            return this.constructor.apply(this, arguments) || null
        }, P = q, r = {enumerableMembers: p & b, onCreated: A, onBeforeCreated: e, aliases: N}, D = Q.alternateClassName || [], L = Ext.global, H, K, M, C, J, T, S, t, I, y, O, F, B, R;
        for (M = k.length; M-- > 0;) {
            S = k[M];
            q[S] = c[S]
        }
        if (Q.$isFunction) {
            Q = Q(q)
        }
        r.data = Q;
        y = Q.statics, Q.$className = u;
        if ("$className" in Q) {
            q.$className = Q.$className
        }
        q.extend(x);
        I = q.prototype;
        q.xtype = Q.xtype = w[0];
        if (w) {
            I.xtypes = w
        }
        I.xtypesChain = E;
        I.xtypesMap = v;
        Q.alias = N;
        P.triggerExtended(q, Q, r);
        if (Q.onClassExtended) {
            q.onExtended(Q.onClassExtended, q);
            delete Q.onClassExtended
        }
        if (y) {
            for (O in y) {
                if (y.hasOwnProperty(O)) {
                    R = y[O];
                    if (R && R.$isFunction && !R.$isClass && R !== Ext.emptyFn && R !== Ext.identityFn) {
                        q[O] = B = R;
                        B.$owner = q;
                        B.$name = O
                    }
                    q[O] = R
                }
            }
        }
        delete Q.statics;
        if (Q.inheritableStatics) {
            q.addInheritableStatics(Q.inheritableStatics)
        }
        if (I.onClassExtended) {
            P.onExtended(I.onClassExtended, P);
            delete I.onClassExtended
        }
        if (Q.config) {
            g(q, Q)
        }
        r.onBeforeCreated(q, r.data, r);
        for (M = 0, J = s && s.length; M < J; ++M) {
            q.mixin.apply(q, s[M])
        }
        for (M = 0, J = N.length; M < J; M++) {
            H = N[M];
            n.setAlias(q, H)
        }
        if (Q.singleton) {
            P = new q()
        }
        if (!(D instanceof Array)) {
            D = [D]
        }
        for (M = 0, C = D.length; M < C; M++) {
            K = D[M];
            n.classes[K] = P;
            F = n.getName(P);
            t = n.maps.nameToAlternates;
            if (F && F !== K) {
                n.maps.alternateToName[K] = F;
                D = t[F] || (t[F] = []);
                D.push(K)
            }
        }
        for (M = 0, J = G.length; M < J; M += 2) {
            T = G[M];
            if (!T) {
                T = L
            }
            T[G[M + 1]] = P
        }
        n.classes[u] = P;
        F = n.getName(P);
        t = n.maps.nameToAlternates;
        if (F && F !== u) {
            n.maps.alternateToName[u] = F;
            D = t[F] || (t[F] = []);
            D.push(u)
        }
        delete I.alternateClassName;
        if (r.onCreated) {
            r.onCreated.call(P, P)
        }
        if (u) {
            n.triggerCreated(u)
        }
        return P
    };
    i.derive = a
}(Ext.cmd = {}));
var Ext = Ext || {};
Ext._startTime = new Date().getTime();
(function () {
    var a = this, d = Object.prototype, b = d.toString, l = true, m = {toString: 1}, g = function () {
    }, k = function () {
        var i = k.caller.caller;
        return i.$owner.prototype[i.$name].apply(this, arguments)
    }, e, j = /\S/, h, c = /\[object\s*(?:Array|Arguments|\w*Collection|\w*List|HTML\s+document\.all\s+class)\]/;
    Ext.global = a;
    for (e in m) {
        l = null
    }
    if (l) {
        l = ["hasOwnProperty", "valueOf", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "constructor"]
    }
    Ext.enumerables = l;
    Ext.apply = function (q, p, s) {
        if (s) {
            Ext.apply(q, s)
        }
        if (q && p && typeof p === "object") {
            var r, o, n;
            for (r in p) {
                q[r] = p[r]
            }
            if (l) {
                for (o = l.length; o--;) {
                    n = l[o];
                    if (p.hasOwnProperty(n)) {
                        q[n] = p[n]
                    }
                }
            }
        }
        return q
    };
    Ext.buildSettings = Ext.apply({baseCSSPrefix: "x-"}, Ext.buildSettings || {});
    Ext.apply(Ext, {name: Ext.sandboxName || "Ext", emptyFn: g, identityFn: function (i) {
        return i
    }, emptyString: new String(), baseCSSPrefix: Ext.buildSettings.baseCSSPrefix, applyIf: function (n, i) {
        var o;
        if (n) {
            for (o in i) {
                if (n[o] === undefined) {
                    n[o] = i[o]
                }
            }
        }
        return n
    }, iterate: function (i, o, n) {
        if (Ext.isEmpty(i)) {
            return
        }
        if (n === undefined) {
            n = i
        }
        if (Ext.isIterable(i)) {
            Ext.Array.each.call(Ext.Array, i, o, n)
        } else {
            Ext.Object.each.call(Ext.Object, i, o, n)
        }
    }});
    Ext.apply(Ext, {extend: (function () {
        var i = d.constructor, n = function (q) {
            for (var p in q) {
                if (!q.hasOwnProperty(p)) {
                    continue
                }
                this[p] = q[p]
            }
        };
        return function (o, t, r) {
            if (Ext.isObject(t)) {
                r = t;
                t = o;
                o = r.constructor !== i ? r.constructor : function () {
                    t.apply(this, arguments)
                }
            }
            var q = function () {
            }, p, s = t.prototype;
            q.prototype = s;
            p = o.prototype = new q();
            p.constructor = o;
            o.superclass = s;
            if (s.constructor === i) {
                s.constructor = t
            }
            o.override = function (u) {
                Ext.override(o, u)
            };
            p.override = n;
            p.proto = p;
            o.override(r);
            o.extend = function (u) {
                return Ext.extend(o, u)
            };
            return o
        }
    }()), override: function (p, q) {
        if (p.$isClass) {
            p.override(q)
        } else {
            if (typeof p == "function") {
                Ext.apply(p.prototype, q)
            } else {
                var i = p.self, n, o;
                if (i && i.$isClass) {
                    for (n in q) {
                        if (q.hasOwnProperty(n)) {
                            o = q[n];
                            if (typeof o == "function") {
                                o.$name = n;
                                o.$owner = i;
                                o.$previous = p.hasOwnProperty(n) ? p[n] : k
                            }
                            p[n] = o
                        }
                    }
                } else {
                    Ext.apply(p, q)
                }
            }
        }
        return p
    }});
    Ext.apply(Ext, {valueFrom: function (o, i, n) {
        return Ext.isEmpty(o, n) ? i : o
    }, typeOf: function (n) {
        var i, o;
        if (n === null) {
            return"null"
        }
        i = typeof n;
        if (i === "undefined" || i === "string" || i === "number" || i === "boolean") {
            return i
        }
        o = b.call(n);
        switch (o) {
            case"[object Array]":
                return"array";
            case"[object Date]":
                return"date";
            case"[object Boolean]":
                return"boolean";
            case"[object Number]":
                return"number";
            case"[object RegExp]":
                return"regexp"
        }
        if (i === "function") {
            return"function"
        }
        if (i === "object") {
            if (n.nodeType !== undefined) {
                if (n.nodeType === 3) {
                    return(j).test(n.nodeValue) ? "textnode" : "whitespace"
                } else {
                    return"element"
                }
            }
            return"object"
        }
    }, coerce: function (q, p) {
        var o = Ext.typeOf(q), n = Ext.typeOf(p), i = typeof q === "string";
        if (o !== n) {
            switch (n) {
                case"string":
                    return String(q);
                case"number":
                    return Number(q);
                case"boolean":
                    return i && (!q || q === "false") ? false : Boolean(q);
                case"null":
                    return i && (!q || q === "null") ? null : q;
                case"undefined":
                    return i && (!q || q === "undefined") ? undefined : q;
                case"date":
                    return i && isNaN(q) ? Ext.Date.parse(q, Ext.Date.defaultFormat) : Date(Number(q))
            }
        }
        return q
    }, isEmpty: function (i, n) {
        return(i === null) || (i === undefined) || (!n ? i === "" : false) || (Ext.isArray(i) && i.length === 0)
    }, isArray: ("isArray" in Array) ? Array.isArray : function (i) {
        return b.call(i) === "[object Array]"
    }, isDate: function (i) {
        return b.call(i) === "[object Date]"
    }, isObject: (b.call(null) === "[object Object]") ? function (i) {
        return i !== null && i !== undefined && b.call(i) === "[object Object]" && i.ownerDocument === undefined
    } : function (i) {
        return b.call(i) === "[object Object]"
    }, isSimpleObject: function (i) {
        return i instanceof Object && i.constructor === Object
    }, isPrimitive: function (n) {
        var i = typeof n;
        return i === "string" || i === "number" || i === "boolean"
    }, isFunction: (typeof document !== "undefined" && typeof document.getElementsByTagName("body") === "function") ? function (i) {
        return !!i && b.call(i) === "[object Function]"
    } : function (i) {
        return !!i && typeof i === "function"
    }, isNumber: function (i) {
        return typeof i === "number" && isFinite(i)
    }, isNumeric: function (i) {
        return !isNaN(parseFloat(i)) && isFinite(i)
    }, isString: function (i) {
        return typeof i === "string"
    }, isBoolean: function (i) {
        return typeof i === "boolean"
    }, isElement: function (i) {
        return i ? i.nodeType === 1 : false
    }, isTextNode: function (i) {
        return i ? i.nodeName === "#text" : false
    }, isDefined: function (i) {
        return typeof i !== "undefined"
    }, isIterable: function (i) {
        if (!i || typeof i.length !== "number" || typeof i === "string" || Ext.isFunction(i)) {
            return false
        }
        if (!i.propertyIsEnumerable) {
            return !!i.item
        }
        if (i.hasOwnProperty("length") && !i.propertyIsEnumerable("length")) {
            return true
        }
        return c.test(b.call(i))
    }});
    Ext.apply(Ext, {clone: function (s) {
        var r, q, o, n, t, p;
        if (s === null || s === undefined) {
            return s
        }
        if (s.nodeType && s.cloneNode) {
            return s.cloneNode(true)
        }
        r = b.call(s);
        if (r === "[object Date]") {
            return new Date(s.getTime())
        }
        if (r === "[object Array]") {
            q = s.length;
            t = [];
            while (q--) {
                t[q] = Ext.clone(s[q])
            }
        } else {
            if (r === "[object Object]" && s.constructor === Object) {
                t = {};
                for (p in s) {
                    t[p] = Ext.clone(s[p])
                }
                if (l) {
                    for (o = l.length; o--;) {
                        n = l[o];
                        if (s.hasOwnProperty(n)) {
                            t[n] = s[n]
                        }
                    }
                }
            }
        }
        return t || s
    }, getUniqueGlobalNamespace: function () {
        var o = this.uniqueGlobalNamespace, n;
        if (o === undefined) {
            n = 0;
            do {
                o = "ExtBox" + (++n)
            } while (Ext.global[o] !== undefined);
            Ext.global[o] = Ext;
            this.uniqueGlobalNamespace = o
        }
        return o
    }, functionFactoryCache: {}, cacheableFunctionFactory: function () {
        var r = this, o = Array.prototype.slice.call(arguments), n = r.functionFactoryCache, i, p, q;
        if (Ext.isSandboxed) {
            q = o.length;
            if (q > 0) {
                q--;
                o[q] = "var Ext=window." + Ext.name + ";" + o[q]
            }
        }
        i = o.join("");
        p = n[i];
        if (!p) {
            p = Function.prototype.constructor.apply(Function.prototype, o);
            n[i] = p
        }
        return p
    }, functionFactory: function () {
        var o = this, i = Array.prototype.slice.call(arguments), n;
        if (Ext.isSandboxed) {
            n = i.length;
            if (n > 0) {
                n--;
                i[n] = "var Ext=window." + Ext.name + ";" + i[n]
            }
        }
        return Function.prototype.constructor.apply(Function.prototype, i)
    }, Logger: {verbose: g, log: g, info: g, warn: g, error: function (i) {
        throw new Error(i)
    }, deprecate: g}});
    Ext.type = Ext.typeOf;
    h = Ext.app;
    if (!h) {
        h = Ext.app = {}
    }
    Ext.apply(h, {namespaces: {}, collectNamespaces: function (o) {
        var i = Ext.app.namespaces, n;
        for (n in o) {
            if (o.hasOwnProperty(n)) {
                i[n] = true
            }
        }
    }, addNamespaces: function (p) {
        var q = Ext.app.namespaces, o, n;
        if (!Ext.isArray(p)) {
            p = [p]
        }
        for (o = 0, n = p.length; o < n; o++) {
            q[p[o]] = true
        }
    }, clearNamespaces: function () {
        Ext.app.namespaces = {}
    }, getNamespace: function (n) {
        var p = Ext.app.namespaces, i = "", o;
        for (o in p) {
            if (p.hasOwnProperty(o) && o.length > i.length && (o + "." === n.substring(0, o.length + 1))) {
                i = o
            }
        }
        return i === "" ? undefined : i
    }})
}());
Ext.globalEval = Ext.global.execScript ? function (a) {
    execScript(a)
} : function ($$code) {
    (function () {
        var Ext = this.Ext;
        eval($$code)
    }())
};
(function () {
    var b = "4.2.3.1477", e = [""], i = /([^\d\.])/, c = /[^\d]/g, a = /[\-+]/g, h = /\s/g, d = /_/g, g;
    Ext.Version = g = Ext.extend(Object, {isVersion: true, padModes: {"~": NaN, "^": Infinity}, release: "", constructor: function (r, n) {
        var s = this, l = s.padModes, j, p, m, o, t, k, q;
        if (r.isVersion) {
            return r
        }
        s.version = q = String(r).toLowerCase().replace(d, ".").replace(a, "");
        j = q.charAt(0);
        if (j in l) {
            q = q.substring(1);
            m = l[j]
        } else {
            m = n ? l[n] : 0
        }
        s.pad = m;
        k = q.search(i);
        s.shortVersion = q;
        if (k !== -1) {
            s.release = t = q.substr(k, r.length);
            s.shortVersion = q.substr(0, k);
            t = g.releaseValueMap[t] || t
        }
        s.releaseValue = t || m;
        s.shortVersion = s.shortVersion.replace(c, "");
        s.parts = o = q.split(".");
        for (p = o.length; p--;) {
            o[p] = parseInt(o[p], 10)
        }
        if (m === Infinity) {
            o.push(m)
        }
        s.major = o[0] || m;
        s.minor = o[1] || m;
        s.patch = o[2] || m;
        s.build = o[3] || m;
        return s
    }, compareTo: function (t) {
        var u = this, n = u.pad, r = u.parts, v = r.length, m = t.isVersion ? t : new g(t), k = m.pad, q = m.parts, p = q.length, j = Math.max(v, p), o, l, s;
        for (o = 0; o < j; o++) {
            l = (o < v) ? r[o] : n;
            s = (o < p) ? q[o] : k;
            if (l < s) {
                return -1
            }
            if (l > s) {
                return 1
            }
        }
        l = u.releaseValue;
        s = m.releaseValue;
        if (l < s) {
            return -1
        }
        if (l > s) {
            return 1
        }
        return 0
    }, toString: function () {
        return this.version
    }, valueOf: function () {
        return this.version
    }, getMajor: function () {
        return this.major
    }, getMinor: function () {
        return this.minor
    }, getPatch: function () {
        return this.patch
    }, getBuild: function () {
        return this.build
    }, getRelease: function () {
        return this.release
    }, getReleaseValue: function () {
        return this.releaseValue
    }, isGreaterThan: function (j) {
        return this.compareTo(j) > 0
    }, isGreaterThanOrEqual: function (j) {
        return this.compareTo(j) >= 0
    }, isLessThan: function (j) {
        return this.compareTo(j) < 0
    }, isLessThanOrEqual: function (j) {
        return this.compareTo(j) <= 0
    }, equals: function (j) {
        return this.compareTo(j) === 0
    }, match: function (j) {
        j = String(j);
        return this.version.substr(0, j.length) === j
    }, toArray: function () {
        var j = this;
        return[j.getMajor(), j.getMinor(), j.getPatch(), j.getBuild(), j.getRelease()]
    }, getShortVersion: function () {
        return this.shortVersion
    }, gt: function (j) {
        return this.compareTo(j) > 0
    }, lt: function (j) {
        return this.compareTo(j) < 0
    }, gtEq: function (j) {
        return this.compareTo(j) >= 0
    }, ltEq: function (j) {
        return this.compareTo(j) <= 0
    }});
    Ext.apply(g, {releaseValueMap: {dev: -6, alpha: -5, a: -5, beta: -4, b: -4, rc: -3, "#": -2, p: -1, pl: -1}, getComponentValue: function (j) {
        return !j ? 0 : (isNaN(j) ? this.releaseValueMap[j] || j : parseInt(j, 10))
    }, compare: function (l, k) {
        var j = l.isVersion ? l : new g(l);
        return j.compareTo(k)
    }});
    Ext.apply(Ext, {versions: {}, lastRegisteredVersion: null, setVersion: function (k, j) {
        Ext.lastRegisteredVersion = Ext.versions[k] = new g(j);
        return this
    }, getVersion: function (j) {
        if (j === undefined) {
            return Ext.lastRegisteredVersion
        }
        return Ext.versions[j]
    }, checkVersion: function (n, v) {
        var r = Ext.isArray(n), w = r ? n : e, j = w.length, k = Ext.versions, u = k.ext || k.touch, o, t, q, l, m, x, p, s;
        if (!r) {
            e[0] = n
        }
        for (o = 0; o < j; ++o) {
            if (!Ext.isString(x = w[o])) {
                q = Ext.checkVersion(x.and || x.or, !x.or);
                if (x.not) {
                    q = !q
                }
            } else {
                if (x.indexOf(" ") >= 0) {
                    x = x.replace(h, "")
                }
                t = x.indexOf("@");
                if (t < 0) {
                    p = x;
                    s = u
                } else {
                    if (!(s = k[x.substring(0, t)])) {
                        if (v) {
                            return false
                        }
                        continue
                    }
                    p = x.substring(t + 1)
                }
                t = p.indexOf("-");
                if (t < 0) {
                    if (p.charAt(t = p.length - 1) === "+") {
                        l = p.substring(0, t);
                        m = null
                    } else {
                        l = m = p
                    }
                } else {
                    if (t > 0) {
                        l = p.substring(0, t);
                        m = p.substring(t + 1)
                    } else {
                        l = null;
                        m = p.substring(t + 1)
                    }
                }
                q = true;
                if (l) {
                    l = new g(l, "~");
                    q = l.ltEq(s)
                }
                if (q && m) {
                    m = new g(m, "~");
                    q = m.gtEq(s)
                }
            }
            if (q) {
                if (!v) {
                    return true
                }
            } else {
                if (v) {
                    return false
                }
            }
        }
        return !!v
    }, deprecate: function (j, l, m, k) {
        if (g.compare(Ext.getVersion(j), l) < 1) {
            m.call(k)
        }
    }});
    Ext.setVersion("core", b)
}());
Ext.String = (function () {
    var k = /^[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+|[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+$/g, q = /('|\\)/g, j = /\{\d+\}/, c = /([-.*+?\^${}()|\[\]\/\\])/g, r = /^\s+|\s+$/g, m = /\s+/, o = /(^[^a-z]*|[^\w])/gi, g, b, i, e, h = function (t, s) {
        return g[s]
    }, n = function (t, s) {
        return(s in b) ? b[s] : String.fromCharCode(parseInt(s.substr(2), 10))
    }, d = function (u, t) {
        if (u === null || u === undefined || t === null || t === undefined) {
            return false
        }
        return t.length <= u.length
    }, p = {useFormat: false, compiled: true, stringFormat: true}, l = {}, a = function (s) {
        if (j.test(s)) {
            s = new Ext.Template(s, p);
            return function () {
                return s.apply(arguments)
            }
        } else {
            return function () {
                return s
            }
        }
    };
    return{insert: function (v, w, u) {
        if (!v) {
            return w
        }
        if (!w) {
            return v
        }
        var t = v.length;
        if (!u && u !== 0) {
            u = t
        }
        if (u < 0) {
            u *= -1;
            if (u >= t) {
                u = 0
            } else {
                u = t - u
            }
        }
        if (u === 0) {
            v = w + v
        } else {
            if (u >= v.length) {
                v += w
            } else {
                v = v.substr(0, u) + w + v.substr(u)
            }
        }
        return v
    }, startsWith: function (v, w, u) {
        var t = d(v, w);
        if (t) {
            if (u) {
                v = v.toLowerCase();
                w = w.toLowerCase()
            }
            t = v.lastIndexOf(w, 0) === 0
        }
        return t
    }, endsWith: function (w, u, v) {
        var t = d(w, u);
        if (t) {
            if (v) {
                w = w.toLowerCase();
                u = u.toLowerCase()
            }
            t = w.indexOf(u, w.length - u.length) !== -1
        }
        return t
    }, createVarName: function (t) {
        return t.replace(o, "")
    }, htmlEncode: function (s) {
        return(!s) ? s : String(s).replace(i, h)
    }, htmlDecode: function (s) {
        return(!s) ? s : String(s).replace(e, n)
    }, hasHtmlCharacters: function (t) {
        return i.test(t)
    }, addCharacterEntities: function (t) {
        var s = [], w = [], u, v;
        for (u in t) {
            v = t[u];
            b[u] = v;
            g[v] = u;
            s.push(v);
            w.push(u)
        }
        i = new RegExp("(" + s.join("|") + ")", "g");
        e = new RegExp("(" + w.join("|") + "|&#[0-9]{1,5};)", "g")
    }, resetCharacterEntities: function () {
        g = {};
        b = {};
        this.addCharacterEntities({"&amp;": "&", "&gt;": ">", "&lt;": "<", "&quot;": '"', "&#39;": "'"})
    }, urlAppend: function (t, s) {
        if (!Ext.isEmpty(s)) {
            return t + (t.indexOf("?") === -1 ? "?" : "&") + s
        }
        return t
    }, trim: function (s) {
        return s.replace(k, "")
    }, capitalize: function (s) {
        return s.charAt(0).toUpperCase() + s.substr(1)
    }, uncapitalize: function (s) {
        return s.charAt(0).toLowerCase() + s.substr(1)
    }, ellipsis: function (u, t, v) {
        if (u && u.length > t) {
            if (v) {
                var w = u.substr(0, t - 2), s = Math.max(w.lastIndexOf(" "), w.lastIndexOf("."), w.lastIndexOf("!"), w.lastIndexOf("?"));
                if (s !== -1 && s >= (t - 15)) {
                    return w.substr(0, s) + "..."
                }
            }
            return u.substr(0, t - 3) + "..."
        }
        return u
    }, escapeRegex: function (s) {
        return s.replace(c, "\\$1")
    }, escape: function (s) {
        return s.replace(q, "\\$1")
    }, toggle: function (t, u, s) {
        return t === u ? s : u
    }, leftPad: function (t, u, v) {
        var s = String(t);
        v = v || " ";
        while (s.length < u) {
            s = v + s
        }
        return s
    }, format: function (t) {
        var s = l[t] || (l[t] = a(t));
        return s.apply(this, arguments)
    }, repeat: function (w, v, t) {
        if (v < 1) {
            v = 0
        }
        for (var s = [], u = v; u--;) {
            s.push(w)
        }
        return s.join(t || "")
    }, splitWords: function (s) {
        if (s && typeof s == "string") {
            return s.replace(r, "").split(m)
        }
        return s || []
    }}
}());
Ext.String.resetCharacterEntities();
Ext.htmlEncode = Ext.String.htmlEncode;
Ext.htmlDecode = Ext.String.htmlDecode;
Ext.urlAppend = Ext.String.urlAppend;
Ext.Number = new function () {
    var b = this, c = (0.9).toFixed() !== "1", a = Math;
    Ext.apply(this, {constrain: function (h, g, e) {
        var d = parseFloat(h);
        return(d < g) ? g : ((d > e) ? e : d)
    }, snap: function (h, e, g, i) {
        var d;
        if (h === undefined || h < g) {
            return g || 0
        }
        if (e) {
            d = h % e;
            if (d !== 0) {
                h -= d;
                if (d * 2 >= e) {
                    h += e
                } else {
                    if (d * 2 < -e) {
                        h -= e
                    }
                }
            }
        }
        return b.constrain(h, g, i)
    }, snapInRange: function (h, d, g, i) {
        var e;
        g = (g || 0);
        if (h === undefined || h < g) {
            return g
        }
        if (d && (e = ((h - g) % d))) {
            h -= e;
            e *= 2;
            if (e >= d) {
                h += d
            }
        }
        if (i !== undefined) {
            if (h > (i = b.snapInRange(i, d, g))) {
                h = i
            }
        }
        return h
    }, toFixed: c ? function (g, d) {
        d = d || 0;
        var e = a.pow(10, d);
        return(a.round(g * e) / e).toFixed(d)
    } : function (e, d) {
        return e.toFixed(d)
    }, from: function (e, d) {
        if (isFinite(e)) {
            e = parseFloat(e)
        }
        return !isNaN(e) ? e : d
    }, randomInt: function (e, d) {
        return a.floor(a.random() * (d - e + 1) + e)
    }, correctFloat: function (d) {
        return parseFloat(d.toPrecision(14))
    }});
    Ext.num = function () {
        return b.from.apply(this, arguments)
    }
}();
(function () {
    var g = Array.prototype, o = g.slice, q = (function () {
        var A = [], e, z = 20;
        if (!A.splice) {
            return false
        }
        while (z--) {
            A.push("A")
        }
        A.splice(15, 0, "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F");
        e = A.length;
        A.splice(13, 0, "XXX");
        if (e + 1 != A.length) {
            return false
        }
        return true
    }()), j = "forEach" in g, u = "map" in g, p = "indexOf" in g, y = "every" in g, c = "some" in g, d = "filter" in g, n = (function () {
        var e = [1, 2, 3, 4, 5].sort(function () {
            return 0
        });
        return e[0] === 1 && e[1] === 2 && e[2] === 3 && e[3] === 4 && e[4] === 5
    }()), k = true, a, w, t, v;
    try {
        if (typeof document !== "undefined") {
            o.call(document.getElementsByTagName("body"))
        }
    } catch (s) {
        k = false
    }
    function m(z, e) {
        return(e < 0) ? Math.max(0, z.length + e) : Math.min(z.length, e)
    }

    function x(G, F, z, J) {
        var K = J ? J.length : 0, B = G.length, H = m(G, F), E, I, A, e, C, D;
        if (H === B) {
            if (K) {
                G.push.apply(G, J)
            }
        } else {
            E = Math.min(z, B - H);
            I = H + E;
            A = I + K - E;
            e = B - I;
            C = B - E;
            if (A < I) {
                for (D = 0; D < e; ++D) {
                    G[A + D] = G[I + D]
                }
            } else {
                if (A > I) {
                    for (D = e; D--;) {
                        G[A + D] = G[I + D]
                    }
                }
            }
            if (K && H === C) {
                G.length = C;
                G.push.apply(G, J)
            } else {
                G.length = C + K;
                for (D = 0; D < K; ++D) {
                    G[H + D] = J[D]
                }
            }
        }
        return G
    }

    function i(B, e, A, z) {
        if (z && z.length) {
            if (e === 0 && !A) {
                B.unshift.apply(B, z)
            } else {
                if (e < B.length) {
                    B.splice.apply(B, [e, A].concat(z))
                } else {
                    B.push.apply(B, z)
                }
            }
        } else {
            B.splice(e, A)
        }
        return B
    }

    function b(A, e, z) {
        return x(A, e, z)
    }

    function r(A, e, z) {
        A.splice(e, z);
        return A
    }

    function l(C, e, A) {
        var B = m(C, e), z = C.slice(e, m(C, B + A));
        if (arguments.length < 4) {
            x(C, B, A)
        } else {
            x(C, B, A, o.call(arguments, 3))
        }
        return z
    }

    function h(e) {
        return e.splice.apply(e, o.call(arguments, 1))
    }

    w = q ? r : b;
    t = q ? i : x;
    v = q ? h : l;
    a = Ext.Array = {each: function (D, B, A, e) {
        D = a.from(D);
        var z, C = D.length;
        if (e !== true) {
            for (z = 0; z < C; z++) {
                if (B.call(A || D[z], D[z], z, D) === false) {
                    return z
                }
            }
        } else {
            for (z = C - 1; z > -1; z--) {
                if (B.call(A || D[z], D[z], z, D) === false) {
                    return z
                }
            }
        }
        return true
    }, forEach: j ? function (A, z, e) {
        A.forEach(z, e)
    } : function (C, A, z) {
        var e = 0, B = C.length;
        for (; e < B; e++) {
            A.call(z, C[e], e, C)
        }
    }, indexOf: p ? function (A, e, z) {
        return g.indexOf.call(A, e, z)
    } : function (C, A, B) {
        var e, z = C.length;
        for (e = (B < 0) ? Math.max(0, z + B) : B || 0; e < z; e++) {
            if (C[e] === A) {
                return e
            }
        }
        return -1
    }, contains: p ? function (z, e) {
        return g.indexOf.call(z, e) !== -1
    } : function (B, A) {
        var e, z;
        for (e = 0, z = B.length; e < z; e++) {
            if (B[e] === A) {
                return true
            }
        }
        return false
    }, toArray: function (A, C, e) {
        if (!A || !A.length) {
            return[]
        }
        if (typeof A === "string") {
            A = A.split("")
        }
        if (k) {
            return o.call(A, C || 0, e || A.length)
        }
        var B = [], z;
        C = C || 0;
        e = e ? ((e < 0) ? A.length + e : e) : A.length;
        for (z = C; z < e; z++) {
            B.push(A[z])
        }
        return B
    }, pluck: function (D, e) {
        var z = [], A, C, B;
        for (A = 0, C = D.length; A < C; A++) {
            B = D[A];
            z.push(B[e])
        }
        return z
    }, map: u ? function (A, z, e) {
        return A.map(z, e)
    } : function (D, C, B) {
        var A = [], z = 0, e = D.length;
        for (; z < e; z++) {
            A[z] = C.call(B, D[z], z, D)
        }
        return A
    }, every: y ? function (A, z, e) {
        return A.every(z, e)
    } : function (C, A, z) {
        var e = 0, B = C.length;
        for (; e < B; ++e) {
            if (!A.call(z, C[e], e, C)) {
                return false
            }
        }
        return true
    }, some: c ? function (A, z, e) {
        return A.some(z, e)
    } : function (C, A, z) {
        var e = 0, B = C.length;
        for (; e < B; ++e) {
            if (A.call(z, C[e], e, C)) {
                return true
            }
        }
        return false
    }, equals: function (C, B) {
        var z = C.length, e = B.length, A;
        if (C === B) {
            return true
        }
        if (z !== e) {
            return false
        }
        for (A = 0; A < z; ++A) {
            if (C[A] !== B[A]) {
                return false
            }
        }
        return true
    }, clean: function (C) {
        var z = [], e = 0, B = C.length, A;
        for (; e < B; e++) {
            A = C[e];
            if (!Ext.isEmpty(A)) {
                z.push(A)
            }
        }
        return z
    }, unique: function (C) {
        var B = [], e = 0, A = C.length, z;
        for (; e < A; e++) {
            z = C[e];
            if (a.indexOf(B, z) === -1) {
                B.push(z)
            }
        }
        return B
    }, filter: d ? function (A, z, e) {
        return A.filter(z, e)
    } : function (D, B, A) {
        var z = [], e = 0, C = D.length;
        for (; e < C; e++) {
            if (B.call(A, D[e], e, D)) {
                z.push(D[e])
            }
        }
        return z
    }, findBy: function (C, B, A) {
        var z = 0, e = C.length;
        for (; z < e; z++) {
            if (B.call(A || C, C[z], z)) {
                return C[z]
            }
        }
        return null
    }, from: function (A, z) {
        if (A === undefined || A === null) {
            return[]
        }
        if (Ext.isArray(A)) {
            return(z) ? o.call(A) : A
        }
        var e = typeof A;
        if (A && A.length !== undefined && e !== "string" && (e !== "function" || !A.apply)) {
            return a.toArray(A)
        }
        return[A]
    }, remove: function (A, z) {
        var e = a.indexOf(A, z);
        if (e !== -1) {
            w(A, e, 1)
        }
        return A
    }, include: function (z, e) {
        if (!a.contains(z, e)) {
            z.push(e)
        }
    }, clone: function (e) {
        return o.call(e)
    }, merge: function () {
        var e = o.call(arguments), B = [], z, A;
        for (z = 0, A = e.length; z < A; z++) {
            B = B.concat(e[z])
        }
        return a.unique(B)
    }, intersect: function () {
        var e = [], A = o.call(arguments), L, J, F, I, M, B, z, H, K, C, G, E, D;
        if (!A.length) {
            return e
        }
        L = A.length;
        for (G = M = 0; G < L; G++) {
            B = A[G];
            if (!I || B.length < I.length) {
                I = B;
                M = G
            }
        }
        I = a.unique(I);
        w(A, M, 1);
        z = I.length;
        L = A.length;
        for (G = 0; G < z; G++) {
            H = I[G];
            C = 0;
            for (E = 0; E < L; E++) {
                J = A[E];
                F = J.length;
                for (D = 0; D < F; D++) {
                    K = J[D];
                    if (H === K) {
                        C++;
                        break
                    }
                }
            }
            if (C === L) {
                e.push(H)
            }
        }
        return e
    }, difference: function (z, e) {
        var E = o.call(z), C = E.length, B, A, D;
        for (B = 0, D = e.length; B < D; B++) {
            for (A = 0; A < C; A++) {
                if (E[A] === e[B]) {
                    w(E, A, 1);
                    A--;
                    C--
                }
            }
        }
        return E
    }, slice: ([1, 2].slice(1, undefined).length ? function (A, z, e) {
        return o.call(A, z, e)
    } : function (A, z, e) {
        if (typeof z === "undefined") {
            return o.call(A)
        }
        if (typeof e === "undefined") {
            return o.call(A, z)
        }
        return o.call(A, z, e)
    }), sort: n ? function (z, e) {
        if (e) {
            return z.sort(e)
        } else {
            return z.sort()
        }
    } : function (F, E) {
        var C = F.length, B = 0, D, e, A, z;
        for (; B < C; B++) {
            A = B;
            for (e = B + 1; e < C; e++) {
                if (E) {
                    D = E(F[e], F[A]);
                    if (D < 0) {
                        A = e
                    }
                } else {
                    if (F[e] < F[A]) {
                        A = e
                    }
                }
            }
            if (A !== B) {
                z = F[B];
                F[B] = F[A];
                F[A] = z
            }
        }
        return F
    }, flatten: function (A) {
        var z = [];

        function e(B) {
            var D, E, C;
            for (D = 0, E = B.length; D < E; D++) {
                C = B[D];
                if (Ext.isArray(C)) {
                    e(C)
                } else {
                    z.push(C)
                }
            }
            return z
        }

        return e(A)
    }, min: function (D, C) {
        var z = D[0], e, B, A;
        for (e = 0, B = D.length; e < B; e++) {
            A = D[e];
            if (C) {
                if (C(z, A) === 1) {
                    z = A
                }
            } else {
                if (A < z) {
                    z = A
                }
            }
        }
        return z
    }, max: function (D, C) {
        var e = D[0], z, B, A;
        for (z = 0, B = D.length; z < B; z++) {
            A = D[z];
            if (C) {
                if (C(e, A) === -1) {
                    e = A
                }
            } else {
                if (A > e) {
                    e = A
                }
            }
        }
        return e
    }, mean: function (e) {
        return e.length > 0 ? a.sum(e) / e.length : undefined
    }, sum: function (C) {
        var z = 0, e, B, A;
        for (e = 0, B = C.length; e < B; e++) {
            A = C[e];
            z += A
        }
        return z
    }, toMap: function (C, e, A) {
        var B = {}, z = C.length;
        if (!e) {
            while (z--) {
                B[C[z]] = z + 1
            }
        } else {
            if (typeof e == "string") {
                while (z--) {
                    B[C[z][e]] = z + 1
                }
            } else {
                while (z--) {
                    B[e.call(A, C[z])] = z + 1
                }
            }
        }
        return B
    }, toValueMap: function (C, e, A) {
        var B = {}, z = C.length;
        if (!e) {
            while (z--) {
                B[C[z]] = C[z]
            }
        } else {
            if (typeof e == "string") {
                while (z--) {
                    B[C[z][e]] = C[z]
                }
            } else {
                while (z--) {
                    B[e.call(A, C[z])] = C[z]
                }
            }
        }
        return B
    }, erase: w, insert: function (A, z, e) {
        return t(A, z, 0, e)
    }, replace: t, splice: v, push: function (B) {
        var e = arguments.length, A = 1, z;
        if (B === undefined) {
            B = []
        } else {
            if (!Ext.isArray(B)) {
                B = [B]
            }
        }
        for (; A < e; A++) {
            z = arguments[A];
            Array.prototype.push[Ext.isIterable(z) ? "apply" : "call"](B, z)
        }
        return B
    }};
    Ext.each = a.each;
    a.union = a.merge;
    Ext.min = a.min;
    Ext.max = a.max;
    Ext.sum = a.sum;
    Ext.mean = a.mean;
    Ext.flatten = a.flatten;
    Ext.clean = a.clean;
    Ext.unique = a.unique;
    Ext.pluck = a.pluck;
    Ext.toArray = function () {
        return a.toArray.apply(a, arguments)
    }
}());
Ext.Function = {flexSetter: function (a) {
    return function (d, c) {
        var e, g;
        if (d === null) {
            return this
        }
        if (typeof d !== "string") {
            for (e in d) {
                if (d.hasOwnProperty(e)) {
                    a.call(this, e, d[e])
                }
            }
            if (Ext.enumerables) {
                for (g = Ext.enumerables.length; g--;) {
                    e = Ext.enumerables[g];
                    if (d.hasOwnProperty(e)) {
                        a.call(this, e, d[e])
                    }
                }
            }
        } else {
            a.call(this, d, c)
        }
        return this
    }
}, bind: function (d, c, b, a) {
    if (arguments.length === 2) {
        return function () {
            return d.apply(c, arguments)
        }
    }
    var g = d, e = Array.prototype.slice;
    return function () {
        var h = b || arguments;
        if (a === true) {
            h = e.call(arguments, 0);
            h = h.concat(b)
        } else {
            if (typeof a == "number") {
                h = e.call(arguments, 0);
                Ext.Array.insert(h, a, b)
            }
        }
        return g.apply(c || Ext.global, h)
    }
}, pass: function (c, a, b) {
    if (!Ext.isArray(a)) {
        if (Ext.isIterable(a)) {
            a = Ext.Array.clone(a)
        } else {
            a = a !== undefined ? [a] : []
        }
    }
    return function () {
        var d = [].concat(a);
        d.push.apply(d, arguments);
        return c.apply(b || this, d)
    }
}, alias: function (b, a) {
    return function () {
        return b[a].apply(b, arguments)
    }
}, clone: function (a) {
    return function () {
        return a.apply(this, arguments)
    }
}, createInterceptor: function (d, c, b, a) {
    var e = d;
    if (!Ext.isFunction(c)) {
        return d
    } else {
        a = Ext.isDefined(a) ? a : null;
        return function () {
            var h = this, g = arguments;
            c.target = h;
            c.method = d;
            return(c.apply(b || h || Ext.global, g) !== false) ? d.apply(h || Ext.global, g) : a
        }
    }
}, createDelayed: function (e, c, d, b, a) {
    if (d || b) {
        e = Ext.Function.bind(e, d, b, a)
    }
    return function () {
        var h = this, g = Array.prototype.slice.call(arguments);
        setTimeout(function () {
            e.apply(h, g)
        }, c)
    }
}, defer: function (e, c, d, b, a) {
    e = Ext.Function.bind(e, d, b, a);
    if (c > 0) {
        return setTimeout(Ext.supports.TimeoutActualLateness ? function () {
            e()
        } : e, c)
    }
    e();
    return 0
}, createSequence: function (b, c, a) {
    if (!c) {
        return b
    } else {
        return function () {
            var d = b.apply(this, arguments);
            c.apply(a || this, arguments);
            return d
        }
    }
}, createBuffered: function (e, b, d, c) {
    var a;
    return function () {
        var h = c || Array.prototype.slice.call(arguments, 0), g = d || this;
        if (a) {
            clearTimeout(a)
        }
        a = setTimeout(function () {
            e.apply(g, h)
        }, b)
    }
}, createThrottled: function (e, b, d) {
    var g, a, c, i, h = function () {
        e.apply(d || this, c);
        g = Ext.Date.now()
    };
    return function () {
        a = Ext.Date.now() - g;
        c = arguments;
        clearTimeout(i);
        if (!g || (a >= b)) {
            h()
        } else {
            i = setTimeout(h, b - a)
        }
    }
}, interceptBefore: function (b, a, d, c) {
    var e = b[a] || Ext.emptyFn;
    return(b[a] = function () {
        var g = d.apply(c || this, arguments);
        e.apply(this, arguments);
        return g
    })
}, interceptAfter: function (b, a, d, c) {
    var e = b[a] || Ext.emptyFn;
    return(b[a] = function () {
        e.apply(this, arguments);
        return d.apply(c || this, arguments)
    })
}};
Ext.defer = Ext.Function.alias(Ext.Function, "defer");
Ext.pass = Ext.Function.alias(Ext.Function, "pass");
Ext.bind = Ext.Function.alias(Ext.Function, "bind");
(function () {
    var a = function () {
    }, b = Ext.Object = {chain: Object.create || function (d) {
        a.prototype = d;
        var c = new a();
        a.prototype = null;
        return c
    }, clear: function (c) {
        var d = b.getKeys(c), e = d.length;
        while (e--) {
            delete c[d[e]]
        }
        return c
    }, toQueryObjects: function (e, k, d) {
        var c = b.toQueryObjects, j = [], g, h;
        if (Ext.isArray(k)) {
            for (g = 0, h = k.length; g < h; g++) {
                if (d) {
                    j = j.concat(c(e + "[" + g + "]", k[g], true))
                } else {
                    j.push({name: e, value: k[g]})
                }
            }
        } else {
            if (Ext.isObject(k)) {
                for (g in k) {
                    if (k.hasOwnProperty(g)) {
                        if (d) {
                            j = j.concat(c(e + "[" + g + "]", k[g], true))
                        } else {
                            j.push({name: e, value: k[g]})
                        }
                    }
                }
            } else {
                j.push({name: e, value: k})
            }
        }
        return j
    }, toQueryString: function (g, d) {
        var h = [], e = [], l, k, m, c, n;
        for (l in g) {
            if (g.hasOwnProperty(l)) {
                h = h.concat(b.toQueryObjects(l, g[l], d))
            }
        }
        for (k = 0, m = h.length; k < m; k++) {
            c = h[k];
            n = c.value;
            if (Ext.isEmpty(n)) {
                n = ""
            } else {
                if (Ext.isDate(n)) {
                    n = Ext.Date.toString(n)
                }
            }
            e.push(encodeURIComponent(c.name) + "=" + encodeURIComponent(String(n)))
        }
        return e.join("&")
    }, fromQueryString: function (d, r) {
        var m = d.replace(/^\?/, "").split("&"), u = {}, s, k, w, n, q, g, o, p, c, h, t, l, v, e;
        for (q = 0, g = m.length; q < g; q++) {
            o = m[q];
            if (o.length > 0) {
                k = o.split("=");
                w = decodeURIComponent(k[0]);
                n = (k[1] !== undefined) ? decodeURIComponent(k[1]) : "";
                if (!r) {
                    if (u.hasOwnProperty(w)) {
                        if (!Ext.isArray(u[w])) {
                            u[w] = [u[w]]
                        }
                        u[w].push(n)
                    } else {
                        u[w] = n
                    }
                } else {
                    h = w.match(/(\[):?([^\]]*)\]/g);
                    t = w.match(/^([^\[]+)/);
                    w = t[0];
                    l = [];
                    if (h === null) {
                        u[w] = n;
                        continue
                    }
                    for (p = 0, c = h.length; p < c; p++) {
                        v = h[p];
                        v = (v.length === 2) ? "" : v.substring(1, v.length - 1);
                        l.push(v)
                    }
                    l.unshift(w);
                    s = u;
                    for (p = 0, c = l.length; p < c; p++) {
                        v = l[p];
                        if (p === c - 1) {
                            if (Ext.isArray(s) && v === "") {
                                s.push(n)
                            } else {
                                s[v] = n
                            }
                        } else {
                            if (s[v] === undefined || typeof s[v] === "string") {
                                e = l[p + 1];
                                s[v] = (Ext.isNumeric(e) || e === "") ? [] : {}
                            }
                            s = s[v]
                        }
                    }
                }
            }
        }
        return u
    }, each: function (c, e, d) {
        for (var g in c) {
            if (c.hasOwnProperty(g)) {
                if (e.call(d || c, g, c[g], c) === false) {
                    return
                }
            }
        }
    }, merge: function (k) {
        var h = 1, j = arguments.length, c = b.merge, e = Ext.clone, g, m, l, d;
        for (; h < j; h++) {
            g = arguments[h];
            for (m in g) {
                l = g[m];
                if (l && l.constructor === Object) {
                    d = k[m];
                    if (d && d.constructor === Object) {
                        c(d, l)
                    } else {
                        k[m] = e(l)
                    }
                } else {
                    k[m] = l
                }
            }
        }
        return k
    }, mergeIf: function (c) {
        var h = 1, j = arguments.length, e = Ext.clone, d, g, k;
        for (; h < j; h++) {
            d = arguments[h];
            for (g in d) {
                if (!(g in c)) {
                    k = d[g];
                    if (k && k.constructor === Object) {
                        c[g] = e(k)
                    } else {
                        c[g] = k
                    }
                }
            }
        }
        return c
    }, getKey: function (c, e) {
        for (var d in c) {
            if (c.hasOwnProperty(d) && c[d] === e) {
                return d
            }
        }
        return null
    }, getValues: function (d) {
        var c = [], e;
        for (e in d) {
            if (d.hasOwnProperty(e)) {
                c.push(d[e])
            }
        }
        return c
    }, getKeys: (typeof Object.keys == "function") ? function (c) {
        if (!c) {
            return[]
        }
        return Object.keys(c)
    } : function (c) {
        var d = [], e;
        for (e in c) {
            if (c.hasOwnProperty(e)) {
                d.push(e)
            }
        }
        return d
    }, getSize: function (c) {
        var d = 0, e;
        for (e in c) {
            if (c.hasOwnProperty(e)) {
                d++
            }
        }
        return d
    }, isEmpty: function (c) {
        for (var d in c) {
            if (c.hasOwnProperty(d)) {
                return false
            }
        }
        return true
    }, equals: (function () {
        var c = function (g, e) {
            var d;
            for (d in g) {
                if (g.hasOwnProperty(d)) {
                    if (g[d] !== e[d]) {
                        return false
                    }
                }
            }
            return true
        };
        return function (e, d) {
            if (e === d) {
                return true
            }
            if (e && d) {
                return c(e, d) && c(d, e)
            } else {
                if (!e && !d) {
                    return e === d
                } else {
                    return false
                }
            }
        }
    })(), classify: function (g) {
        var e = g, i = [], d = {}, c = function () {
            var k = 0, l = i.length, m;
            for (; k < l; k++) {
                m = i[k];
                this[m] = new d[m]()
            }
        }, h, j;
        for (h in g) {
            if (g.hasOwnProperty(h)) {
                j = g[h];
                if (j && j.constructor === Object) {
                    i.push(h);
                    d[h] = b.classify(j)
                }
            }
        }
        c.prototype = e;
        return c
    }};
    Ext.merge = Ext.Object.merge;
    Ext.mergeIf = Ext.Object.mergeIf;
    Ext.urlEncode = function () {
        var c = Ext.Array.from(arguments), d = "";
        if ((typeof c[1] === "string")) {
            d = c[1] + "&";
            c[1] = false
        }
        return d + b.toQueryString.apply(b, c)
    };
    Ext.urlDecode = function () {
        return b.fromQueryString.apply(b, arguments)
    }
}());
Ext.Date = new function () {
    var d = this, j = /(\\.)/g, a = /([gGhHisucUOPZ]|MS)/, e = /([djzmnYycU]|MS)/, i = /\\/gi, c = /\{(\d+)\}/g, g = new RegExp("\\/Date\\(([-+])?(\\d+)(?:[+-]\\d{4})?\\)\\/"), b = ["var me = this, dt, y, m, d, h, i, s, ms, o, O, z, zz, u, v, W, year, jan4, week1monday, daysInMonth, dayMatched,", "def = me.defaults,", "from = Ext.Number.from,", "results = String(input).match(me.parseRegexes[{0}]);", "if(results){", "{1}", "if(u != null){", "v = new Date(u * 1000);", "}else{", "dt = me.clearTime(new Date);", "y = from(y, from(def.y, dt.getFullYear()));", "m = from(m, from(def.m - 1, dt.getMonth()));", "dayMatched = d !== undefined;", "d = from(d, from(def.d, dt.getDate()));", "if (!dayMatched) {", "dt.setDate(1);", "dt.setMonth(m);", "dt.setFullYear(y);", "daysInMonth = me.getDaysInMonth(dt);", "if (d > daysInMonth) {", "d = daysInMonth;", "}", "}", "h  = from(h, from(def.h, dt.getHours()));", "i  = from(i, from(def.i, dt.getMinutes()));", "s  = from(s, from(def.s, dt.getSeconds()));", "ms = from(ms, from(def.ms, dt.getMilliseconds()));", "if(z >= 0 && y >= 0){", "v = me.add(new Date(y < 100 ? 100 : y, 0, 1, h, i, s, ms), me.YEAR, y < 100 ? y - 100 : 0);", "v = !strict? v : (strict === true && (z <= 364 || (me.isLeapYear(v) && z <= 365))? me.add(v, me.DAY, z) : null);", "}else if(strict === true && !me.isValid(y, m + 1, d, h, i, s, ms)){", "v = null;", "}else{", "if (W) {", "year = y || (new Date()).getFullYear();", "jan4 = new Date(year, 0, 4, 0, 0, 0);", "d = jan4.getDay();", "week1monday = new Date(jan4.getTime() - ((d === 0 ? 6 : d - 1) * 86400000));", "v = Ext.Date.clearTime(new Date(week1monday.getTime() + ((W - 1) * 604800000 + 43200000)));", "} else {", "v = me.add(new Date(y < 100 ? 100 : y, m, d, h, i, s, ms), me.YEAR, y < 100 ? y - 100 : 0);", "}", "}", "}", "}", "if(v){", "if(zz != null){", "v = me.add(v, me.SECOND, -v.getTimezoneOffset() * 60 - zz);", "}else if(o){", "v = me.add(v, me.MINUTE, -v.getTimezoneOffset() + (sn == '+'? -1 : 1) * (hr * 60 + mn));", "}", "}", "return v;"].join("\n");

    function h(l) {
        var k = Array.prototype.slice.call(arguments, 1);
        return l.replace(c, function (n, o) {
            return k[o]
        })
    }

    Ext.apply(d, {now: Date.now || function () {
        return +new Date()
    }, toString: function (k) {
        var l = Ext.String.leftPad;
        return k.getFullYear() + "-" + l(k.getMonth() + 1, 2, "0") + "-" + l(k.getDate(), 2, "0") + "T" + l(k.getHours(), 2, "0") + ":" + l(k.getMinutes(), 2, "0") + ":" + l(k.getSeconds(), 2, "0")
    }, getElapsed: function (l, k) {
        return Math.abs(l - (k || d.now()))
    }, useStrict: false, formatCodeToRegex: function (l, k) {
        var m = d.parseCodes[l];
        if (m) {
            m = typeof m == "function" ? m() : m;
            d.parseCodes[l] = m
        }
        return m ? Ext.applyIf({c: m.c ? h(m.c, k || "{0}") : m.c}, m) : {g: 0, c: null, s: Ext.String.escapeRegex(l)}
    }, parseFunctions: {MS: function (l, k) {
        var m = (l || "").match(g);
        return m ? new Date(((m[1] || "") + m[2]) * 1) : null
    }, time: function (l, k) {
        var m = parseInt(l, 10);
        if (m || m === 0) {
            return new Date(m)
        }
        return null
    }, timestamp: function (l, k) {
        var m = parseInt(l, 10);
        if (m || m === 0) {
            return new Date(m * 1000)
        }
        return null
    }}, parseRegexes: [], formatFunctions: {MS: function () {
        return"\\/Date(" + this.getTime() + ")\\/"
    }, time: function () {
        return this.getTime().toString()
    }, timestamp: function () {
        return d.format(this, "U")
    }}, y2kYear: 50, MILLI: "ms", SECOND: "s", MINUTE: "mi", HOUR: "h", DAY: "d", MONTH: "mo", YEAR: "y", defaults: {}, dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNumbers: {January: 0, Jan: 0, February: 1, Feb: 1, March: 2, Mar: 2, April: 3, Apr: 3, May: 4, June: 5, Jun: 5, July: 6, Jul: 6, August: 7, Aug: 7, September: 8, Sep: 8, October: 9, Oct: 9, November: 10, Nov: 10, December: 11, Dec: 11}, defaultFormat: "m/d/Y", getShortMonthName: function (k) {
        return Ext.Date.monthNames[k].substring(0, 3)
    }, getShortDayName: function (k) {
        return Ext.Date.dayNames[k].substring(0, 3)
    }, getMonthNumber: function (k) {
        return Ext.Date.monthNumbers[k.substring(0, 1).toUpperCase() + k.substring(1, 3).toLowerCase()]
    }, formatContainsHourInfo: function (k) {
        return a.test(k.replace(j, ""))
    }, formatContainsDateInfo: function (k) {
        return e.test(k.replace(j, ""))
    }, unescapeFormat: function (k) {
        return k.replace(i, "")
    }, formatCodes: {d: "Ext.String.leftPad(this.getDate(), 2, '0')", D: "Ext.Date.getShortDayName(this.getDay())", j: "this.getDate()", l: "Ext.Date.dayNames[this.getDay()]", N: "(this.getDay() ? this.getDay() : 7)", S: "Ext.Date.getSuffix(this)", w: "this.getDay()", z: "Ext.Date.getDayOfYear(this)", W: "Ext.String.leftPad(Ext.Date.getWeekOfYear(this), 2, '0')", F: "Ext.Date.monthNames[this.getMonth()]", m: "Ext.String.leftPad(this.getMonth() + 1, 2, '0')", M: "Ext.Date.getShortMonthName(this.getMonth())", n: "(this.getMonth() + 1)", t: "Ext.Date.getDaysInMonth(this)", L: "(Ext.Date.isLeapYear(this) ? 1 : 0)", o: "(this.getFullYear() + (Ext.Date.getWeekOfYear(this) == 1 && this.getMonth() > 0 ? +1 : (Ext.Date.getWeekOfYear(this) >= 52 && this.getMonth() < 11 ? -1 : 0)))", Y: "Ext.String.leftPad(this.getFullYear(), 4, '0')", y: "('' + this.getFullYear()).substring(2, 4)", a: "(this.getHours() < 12 ? 'am' : 'pm')", A: "(this.getHours() < 12 ? 'AM' : 'PM')", g: "((this.getHours() % 12) ? this.getHours() % 12 : 12)", G: "this.getHours()", h: "Ext.String.leftPad((this.getHours() % 12) ? this.getHours() % 12 : 12, 2, '0')", H: "Ext.String.leftPad(this.getHours(), 2, '0')", i: "Ext.String.leftPad(this.getMinutes(), 2, '0')", s: "Ext.String.leftPad(this.getSeconds(), 2, '0')", u: "Ext.String.leftPad(this.getMilliseconds(), 3, '0')", O: "Ext.Date.getGMTOffset(this)", P: "Ext.Date.getGMTOffset(this, true)", T: "Ext.Date.getTimezone(this)", Z: "(this.getTimezoneOffset() * -60)", c: function () {
        var p, n, m, k, o;
        for (p = "Y-m-dTH:i:sP", n = [], m = 0, k = p.length; m < k; ++m) {
            o = p.charAt(m);
            n.push(o == "T" ? "'T'" : d.getFormatCode(o))
        }
        return n.join(" + ")
    }, U: "Math.round(this.getTime() / 1000)"}, isValid: function (t, k, r, p, n, o, l) {
        p = p || 0;
        n = n || 0;
        o = o || 0;
        l = l || 0;
        var q = d.add(new Date(t < 100 ? 100 : t, k - 1, r, p, n, o, l), d.YEAR, t < 100 ? t - 100 : 0);
        return t == q.getFullYear() && k == q.getMonth() + 1 && r == q.getDate() && p == q.getHours() && n == q.getMinutes() && o == q.getSeconds() && l == q.getMilliseconds()
    }, parse: function (l, n, k) {
        var m = d.parseFunctions;
        if (m[n] == null) {
            d.createParser(n)
        }
        return m[n].call(d, l, Ext.isDefined(k) ? k : d.useStrict)
    }, parseDate: function (l, m, k) {
        return d.parse(l, m, k)
    }, getFormatCode: function (l) {
        var k = d.formatCodes[l];
        if (k) {
            k = typeof k == "function" ? k() : k;
            d.formatCodes[l] = k
        }
        return k || ("'" + Ext.String.escape(l) + "'")
    }, createFormat: function (o) {
        var n = [], k = false, m = "", l;
        for (l = 0; l < o.length; ++l) {
            m = o.charAt(l);
            if (!k && m == "\\") {
                k = true
            } else {
                if (k) {
                    k = false;
                    n.push("'" + Ext.String.escape(m) + "'")
                } else {
                    n.push(d.getFormatCode(m))
                }
            }
        }
        d.formatFunctions[o] = Ext.functionFactory("return " + n.join("+"))
    }, createParser: function (t) {
        var l = d.parseRegexes.length, u = 1, m = [], s = [], q = false, k = "", o = 0, p = t.length, r = [], n;
        for (; o < p; ++o) {
            k = t.charAt(o);
            if (!q && k == "\\") {
                q = true
            } else {
                if (q) {
                    q = false;
                    s.push(Ext.String.escape(k))
                } else {
                    n = d.formatCodeToRegex(k, u);
                    u += n.g;
                    s.push(n.s);
                    if (n.g && n.c) {
                        if (n.calcAtEnd) {
                            r.push(n.c)
                        } else {
                            m.push(n.c)
                        }
                    }
                }
            }
        }
        m = m.concat(r);
        d.parseRegexes[l] = new RegExp("^" + s.join("") + "$", "i");
        d.parseFunctions[t] = Ext.functionFactory("input", "strict", h(b, l, m.join("")))
    }, parseCodes: {d: {g: 1, c: "d = parseInt(results[{0}], 10);\n", s: "(3[0-1]|[1-2][0-9]|0[1-9])"}, j: {g: 1, c: "d = parseInt(results[{0}], 10);\n", s: "(3[0-1]|[1-2][0-9]|[1-9])"}, D: function () {
        for (var k = [], l = 0; l < 7; k.push(d.getShortDayName(l)), ++l) {
        }
        return{g: 0, c: null, s: "(?:" + k.join("|") + ")"}
    }, l: function () {
        return{g: 0, c: null, s: "(?:" + d.dayNames.join("|") + ")"}
    }, N: {g: 0, c: null, s: "[1-7]"}, S: {g: 0, c: null, s: "(?:st|nd|rd|th)"}, w: {g: 0, c: null, s: "[0-6]"}, z: {g: 1, c: "z = parseInt(results[{0}], 10);\n", s: "(\\d{1,3})"}, W: {g: 1, c: "W = parseInt(results[{0}], 10);\n", s: "(\\d{2})"}, F: function () {
        return{g: 1, c: "m = parseInt(me.getMonthNumber(results[{0}]), 10);\n", s: "(" + d.monthNames.join("|") + ")"}
    }, M: function () {
        for (var k = [], l = 0; l < 12; k.push(d.getShortMonthName(l)), ++l) {
        }
        return Ext.applyIf({s: "(" + k.join("|") + ")"}, d.formatCodeToRegex("F"))
    }, m: {g: 1, c: "m = parseInt(results[{0}], 10) - 1;\n", s: "(1[0-2]|0[1-9])"}, n: {g: 1, c: "m = parseInt(results[{0}], 10) - 1;\n", s: "(1[0-2]|[1-9])"}, t: {g: 0, c: null, s: "(?:\\d{2})"}, L: {g: 0, c: null, s: "(?:1|0)"}, o: {g: 1, c: "y = parseInt(results[{0}], 10);\n", s: "(\\d{4})"}, Y: {g: 1, c: "y = parseInt(results[{0}], 10);\n", s: "(\\d{4})"}, y: {g: 1, c: "var ty = parseInt(results[{0}], 10);\ny = ty > me.y2kYear ? 1900 + ty : 2000 + ty;\n", s: "(\\d{1,2})"}, a: {g: 1, c: "if (/(am)/i.test(results[{0}])) {\nif (!h || h == 12) { h = 0; }\n} else { if (!h || h < 12) { h = (h || 0) + 12; }}", s: "(am|pm|AM|PM)", calcAtEnd: true}, A: {g: 1, c: "if (/(am)/i.test(results[{0}])) {\nif (!h || h == 12) { h = 0; }\n} else { if (!h || h < 12) { h = (h || 0) + 12; }}", s: "(AM|PM|am|pm)", calcAtEnd: true}, g: {g: 1, c: "h = parseInt(results[{0}], 10);\n", s: "(1[0-2]|[0-9])"}, G: {g: 1, c: "h = parseInt(results[{0}], 10);\n", s: "(2[0-3]|1[0-9]|[0-9])"}, h: {g: 1, c: "h = parseInt(results[{0}], 10);\n", s: "(1[0-2]|0[1-9])"}, H: {g: 1, c: "h = parseInt(results[{0}], 10);\n", s: "(2[0-3]|[0-1][0-9])"}, i: {g: 1, c: "i = parseInt(results[{0}], 10);\n", s: "([0-5][0-9])"}, s: {g: 1, c: "s = parseInt(results[{0}], 10);\n", s: "([0-5][0-9])"}, u: {g: 1, c: "ms = results[{0}]; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n", s: "(\\d+)"}, O: {g: 1, c: ["o = results[{0}];", "var sn = o.substring(0,1),", "hr = o.substring(1,3)*1 + Math.floor(o.substring(3,5) / 60),", "mn = o.substring(3,5) % 60;", "o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + Ext.String.leftPad(hr, 2, '0') + Ext.String.leftPad(mn, 2, '0')) : null;\n"].join("\n"), s: "([+-]\\d{4})"}, P: {g: 1, c: ["o = results[{0}];", "var sn = o.substring(0,1),", "hr = o.substring(1,3)*1 + Math.floor(o.substring(4,6) / 60),", "mn = o.substring(4,6) % 60;", "o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + Ext.String.leftPad(hr, 2, '0') + Ext.String.leftPad(mn, 2, '0')) : null;\n"].join("\n"), s: "([+-]\\d{2}:\\d{2})"}, T: {g: 0, c: null, s: "[A-Z]{1,5}"}, Z: {g: 1, c: "zz = results[{0}] * 1;\nzz = (-43200 <= zz && zz <= 50400)? zz : null;\n", s: "([+-]?\\d{1,5})"}, c: function () {
        var n = [], k = [d.formatCodeToRegex("Y", 1), d.formatCodeToRegex("m", 2), d.formatCodeToRegex("d", 3), d.formatCodeToRegex("H", 4), d.formatCodeToRegex("i", 5), d.formatCodeToRegex("s", 6), {c: "ms = results[7] || '0'; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n"}, {c: ["if(results[8]) {", "if(results[8] == 'Z'){", "zz = 0;", "}else if (results[8].indexOf(':') > -1){", d.formatCodeToRegex("P", 8).c, "}else{", d.formatCodeToRegex("O", 8).c, "}", "}"].join("\n")}], o, m;
        for (o = 0, m = k.length; o < m; ++o) {
            n.push(k[o].c)
        }
        return{g: 1, c: n.join(""), s: [k[0].s, "(?:", "-", k[1].s, "(?:", "-", k[2].s, "(?:", "(?:T| )?", k[3].s, ":", k[4].s, "(?::", k[5].s, ")?", "(?:(?:\\.|,)(\\d+))?", "(Z|(?:[-+]\\d{2}(?::)?\\d{2}))?", ")?", ")?", ")?"].join("")}
    }, U: {g: 1, c: "u = parseInt(results[{0}], 10);\n", s: "(-?\\d+)"}}, dateFormat: function (k, l) {
        return d.format(k, l)
    }, isEqual: function (l, k) {
        if (l && k) {
            return(l.getTime() === k.getTime())
        }
        return !(l || k)
    }, format: function (l, m) {
        var k = d.formatFunctions;
        if (!Ext.isDate(l)) {
            return""
        }
        if (k[m] == null) {
            d.createFormat(m)
        }
        return k[m].call(l) + ""
    }, getTimezone: function (k) {
        return k.toString().replace(/^.* (?:\((.*)\)|([A-Z]{1,5})(?:[\-+][0-9]{4})?(?: -?\d+)?)$/, "$1$2").replace(/[^A-Z]/g, "")
    }, getGMTOffset: function (k, l) {
        var m = k.getTimezoneOffset();
        return(m > 0 ? "-" : "+") + Ext.String.leftPad(Math.floor(Math.abs(m) / 60), 2, "0") + (l ? ":" : "") + Ext.String.leftPad(Math.abs(m % 60), 2, "0")
    }, getDayOfYear: function (n) {
        var l = 0, p = Ext.Date.clone(n), k = n.getMonth(), o;
        for (o = 0, p.setDate(1), p.setMonth(0); o < k; p.setMonth(++o)) {
            l += d.getDaysInMonth(p)
        }
        return l + n.getDate() - 1
    }, getWeekOfYear: (function () {
        var k = 86400000, l = 7 * k;
        return function (n) {
            var o = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate() + 3) / k, m = Math.floor(o / 7), p = new Date(m * l).getUTCFullYear();
            return m - Math.floor(Date.UTC(p, 0, 7) / l) + 1
        }
    }()), isLeapYear: function (k) {
        var l = k.getFullYear();
        return !!((l & 3) == 0 && (l % 100 || (l % 400 == 0 && l)))
    }, getFirstDayOfMonth: function (l) {
        var k = (l.getDay() - (l.getDate() - 1)) % 7;
        return(k < 0) ? (k + 7) : k
    }, getLastDayOfMonth: function (k) {
        return d.getLastDateOfMonth(k).getDay()
    }, getFirstDateOfMonth: function (k) {
        return new Date(k.getFullYear(), k.getMonth(), 1)
    }, getLastDateOfMonth: function (k) {
        return new Date(k.getFullYear(), k.getMonth(), d.getDaysInMonth(k))
    }, getDaysInMonth: (function () {
        var k = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return function (n) {
            var l = n.getMonth();
            return l == 1 && d.isLeapYear(n) ? 29 : k[l]
        }
    }()), getSuffix: function (k) {
        switch (k.getDate()) {
            case 1:
            case 21:
            case 31:
                return"st";
            case 2:
            case 22:
                return"nd";
            case 3:
            case 23:
                return"rd";
            default:
                return"th"
        }
    }, clone: function (k) {
        return new Date(k.getTime())
    }, isDST: function (k) {
        return new Date(k.getFullYear(), 0, 1).getTimezoneOffset() != k.getTimezoneOffset()
    }, clearTime: function (k, o) {
        if (o) {
            return Ext.Date.clearTime(Ext.Date.clone(k))
        }
        var m = k.getDate(), l, n;
        k.setHours(0);
        k.setMinutes(0);
        k.setSeconds(0);
        k.setMilliseconds(0);
        if (k.getDate() != m) {
            for (l = 1, n = d.add(k, Ext.Date.HOUR, l); n.getDate() != m; l++, n = d.add(k, Ext.Date.HOUR, l)) {
            }
            k.setDate(m);
            k.setHours(n.getHours())
        }
        return k
    }, add: function (n, m, q) {
        var r = Ext.Date.clone(n), k = Ext.Date, l, p, o = 0;
        if (!m || q === 0) {
            return r
        }
        p = q - parseInt(q, 10);
        q = parseInt(q, 10);
        if (q) {
            switch (m.toLowerCase()) {
                case Ext.Date.MILLI:
                    r.setTime(r.getTime() + q);
                    break;
                case Ext.Date.SECOND:
                    r.setTime(r.getTime() + q * 1000);
                    break;
                case Ext.Date.MINUTE:
                    r.setTime(r.getTime() + q * 60 * 1000);
                    break;
                case Ext.Date.HOUR:
                    r.setTime(r.getTime() + q * 60 * 60 * 1000);
                    break;
                case Ext.Date.DAY:
                    r.setDate(r.getDate() + q);
                    break;
                case Ext.Date.MONTH:
                    l = n.getDate();
                    if (l > 28) {
                        l = Math.min(l, Ext.Date.getLastDateOfMonth(Ext.Date.add(Ext.Date.getFirstDateOfMonth(n), Ext.Date.MONTH, q)).getDate())
                    }
                    r.setDate(l);
                    r.setMonth(n.getMonth() + q);
                    break;
                case Ext.Date.YEAR:
                    l = n.getDate();
                    if (l > 28) {
                        l = Math.min(l, Ext.Date.getLastDateOfMonth(Ext.Date.add(Ext.Date.getFirstDateOfMonth(n), Ext.Date.YEAR, q)).getDate())
                    }
                    r.setDate(l);
                    r.setFullYear(n.getFullYear() + q);
                    break
            }
        }
        if (p) {
            switch (m.toLowerCase()) {
                case Ext.Date.MILLI:
                    o = 1;
                    break;
                case Ext.Date.SECOND:
                    o = 1000;
                    break;
                case Ext.Date.MINUTE:
                    o = 1000 * 60;
                    break;
                case Ext.Date.HOUR:
                    o = 1000 * 60 * 60;
                    break;
                case Ext.Date.DAY:
                    o = 1000 * 60 * 60 * 24;
                    break;
                case Ext.Date.MONTH:
                    l = d.getDaysInMonth(r);
                    o = 1000 * 60 * 60 * 24 * l;
                    break;
                case Ext.Date.YEAR:
                    l = (d.isLeapYear(r) ? 366 : 365);
                    o = 1000 * 60 * 60 * 24 * l;
                    break
            }
            if (o) {
                r.setTime(r.getTime() + o * p)
            }
        }
        return r
    }, subtract: function (l, k, m) {
        return d.add(l, k, -m)
    }, between: function (l, n, k) {
        var m = l.getTime();
        return n.getTime() <= m && m <= k.getTime()
    }, compat: function () {
        var l = window.Date, k, r = ["useStrict", "formatCodeToRegex", "parseFunctions", "parseRegexes", "formatFunctions", "y2kYear", "MILLI", "SECOND", "MINUTE", "HOUR", "DAY", "MONTH", "YEAR", "defaults", "dayNames", "monthNames", "monthNumbers", "getShortMonthName", "getShortDayName", "getMonthNumber", "formatCodes", "isValid", "parseDate", "getFormatCode", "createFormat", "createParser", "parseCodes"], o = ["dateFormat", "format", "getTimezone", "getGMTOffset", "getDayOfYear", "getWeekOfYear", "isLeapYear", "getFirstDayOfMonth", "getLastDayOfMonth", "getDaysInMonth", "getSuffix", "clone", "isDST", "clearTime", "add", "between"], q = r.length, m = o.length, n, t, u;
        for (u = 0; u < q; u++) {
            n = r[u];
            l[n] = d[n]
        }
        for (k = 0; k < m; k++) {
            t = o[k];
            l.prototype[t] = function () {
                var p = Array.prototype.slice.call(arguments);
                p.unshift(this);
                return d[t].apply(d, p)
            }
        }
    }})
}();
(function (a) {
    var d = [], b = function () {
    }, c = function (j, g, i, h) {
        var e = function () {
            var k = this.callParent(arguments);
            j.apply(this, arguments);
            return k
        };
        e.$name = i;
        e.$owner = h;
        if (g) {
            e.$previous = g.$previous;
            g.$previous = e
        }
        return e
    };
    Ext.apply(b, {$className: "Ext.Base", $isClass: true, create: function () {
        return Ext.create.apply(Ext, [this].concat(Array.prototype.slice.call(arguments, 0)))
    }, extend: function (k) {
        var e = k.prototype, n, h, j, l, g, m;
        h = this.prototype = Ext.Object.chain(e);
        h.self = this;
        this.superclass = h.superclass = e;
        if (!k.$isClass) {
            n = Ext.Base.prototype;
            for (j in n) {
                if (j in h) {
                    h[j] = n[j]
                }
            }
        }
        m = e.$inheritableStatics;
        if (m) {
            for (j = 0, l = m.length; j < l; j++) {
                g = m[j];
                if (!this.hasOwnProperty(g)) {
                    this[g] = k[g]
                }
            }
        }
        if (k.$onExtended) {
            this.$onExtended = k.$onExtended.slice()
        }
        h.config = new h.configClass();
        h.initConfigList = h.initConfigList.slice();
        h.initConfigMap = Ext.clone(h.initConfigMap);
        h.configMap = Ext.Object.chain(h.configMap)
    }, $onExtended: [], triggerExtended: function () {
        var h = this.$onExtended, g = h.length, e, j;
        if (g > 0) {
            for (e = 0; e < g; e++) {
                j = h[e];
                j.fn.apply(j.scope || this, arguments)
            }
        }
    }, onExtended: function (g, e) {
        this.$onExtended.push({fn: g, scope: e});
        return this
    }, addConfig: function (i, m) {
        var o = this.prototype, n = Ext.Class.configNameCache, j = o.configMap, k = o.initConfigList, h = o.initConfigMap, l = o.config, e, g, p;
        for (g in i) {
            if (i.hasOwnProperty(g)) {
                if (!j[g]) {
                    j[g] = true
                }
                p = i[g];
                e = n[g].initialized;
                if (!h[g] && p !== null && !o[e]) {
                    h[g] = true;
                    k.push(g)
                }
            }
        }
        if (m) {
            Ext.merge(l, i)
        } else {
            Ext.mergeIf(l, i)
        }
        o.configClass = Ext.Object.classify(l)
    }, addStatics: function (e) {
        var h, g;
        for (g in e) {
            if (e.hasOwnProperty(g)) {
                h = e[g];
                if (typeof h == "function" && !h.$isClass && h !== Ext.emptyFn && h !== Ext.identityFn) {
                    h.$owner = this;
                    h.$name = g
                }
                this[g] = h
            }
        }
        return this
    }, addInheritableStatics: function (g) {
        var j, e, i = this.prototype, h, k;
        j = i.$inheritableStatics;
        e = i.$hasInheritableStatics;
        if (!j) {
            j = i.$inheritableStatics = [];
            e = i.$hasInheritableStatics = {}
        }
        for (h in g) {
            if (g.hasOwnProperty(h)) {
                k = g[h];
                this[h] = k;
                if (!e[h]) {
                    e[h] = true;
                    j.push(h)
                }
            }
        }
        return this
    }, addMembers: function (g) {
        var j = this.prototype, e = Ext.enumerables, m = [], k, l, h, n;
        for (h in g) {
            m.push(h)
        }
        if (e) {
            m.push.apply(m, e)
        }
        for (k = 0, l = m.length; k < l; k++) {
            h = m[k];
            if (g.hasOwnProperty(h)) {
                n = g[h];
                if (typeof n == "function" && !n.$isClass && n !== Ext.emptyFn && n !== Ext.identityFn) {
                    n.$owner = this;
                    n.$name = h
                }
                j[h] = n
            }
        }
        return this
    }, addMember: function (e, g) {
        if (typeof g == "function" && !g.$isClass && g !== Ext.emptyFn && g !== Ext.identityFn) {
            g.$owner = this;
            g.$name = e
        }
        this.prototype[e] = g;
        return this
    }, implement: function () {
        this.addMembers.apply(this, arguments)
    }, borrow: function (k, h) {
        var o = this.prototype, n = k.prototype, j, l, g, m, e;
        h = Ext.Array.from(h);
        for (j = 0, l = h.length; j < l; j++) {
            g = h[j];
            e = n[g];
            if (typeof e == "function") {
                m = Ext.Function.clone(e);
                m.$owner = this;
                m.$name = g;
                o[g] = m
            } else {
                o[g] = e
            }
        }
        return this
    }, override: function (g) {
        var n = this, p = Ext.enumerables, l = n.prototype, i = Ext.Function.clone, e, k, h, o, m, j;
        if (arguments.length === 2) {
            e = g;
            g = {};
            g[e] = arguments[1];
            p = null
        }
        do {
            m = [];
            o = null;
            for (e in g) {
                if (e == "statics") {
                    o = g[e]
                } else {
                    if (e == "inheritableStatics") {
                        n.addInheritableStatics(g[e])
                    } else {
                        if (e == "config") {
                            n.addConfig(g[e], true)
                        } else {
                            m.push(e)
                        }
                    }
                }
            }
            if (p) {
                m.push.apply(m, p)
            }
            for (k = m.length; k--;) {
                e = m[k];
                if (g.hasOwnProperty(e)) {
                    h = g[e];
                    if (typeof h == "function" && !h.$className && h !== Ext.emptyFn && h !== Ext.identityFn) {
                        if (typeof h.$owner != "undefined") {
                            h = i(h)
                        }
                        h.$owner = n;
                        h.$name = e;
                        j = l.hasOwnProperty(e) && l[e];
                        if (j) {
                            h.$previous = j
                        }
                    }
                    l[e] = h
                }
            }
            l = n;
            g = o
        } while (g);
        return this
    }, callParent: function (e) {
        var g;
        return(g = this.callParent.caller) && (g.$previous || ((g = g.$owner ? g : g.caller) && g.$owner.superclass.self[g.$name])).apply(this, e || d)
    }, callSuper: function (e) {
        var g;
        return(g = this.callSuper.caller) && ((g = g.$owner ? g : g.caller) && g.$owner.superclass.self[g.$name]).apply(this, e || d)
    }, mixin: function (g, h) {
        var l = this, s = h.prototype, n = l.prototype, r, m, j, k, q, p, o, e;
        if (typeof s.onClassMixedIn != "undefined") {
            s.onClassMixedIn.call(h, l)
        }
        if (!n.hasOwnProperty("mixins")) {
            if ("mixins" in n) {
                n.mixins = Ext.Object.chain(n.mixins)
            } else {
                n.mixins = {}
            }
        }
        for (r in s) {
            p = s[r];
            if (r === "mixins") {
                Ext.merge(n.mixins, p)
            } else {
                if (r === "xhooks") {
                    for (o in p) {
                        e = p[o];
                        e.$previous = Ext.emptyFn;
                        if (n.hasOwnProperty(o)) {
                            c(e, n[o], o, l)
                        } else {
                            n[o] = c(e, null, o, l)
                        }
                    }
                } else {
                    if (!(r === "mixinId" || r === "config") && (n[r] === undefined)) {
                        n[r] = p
                    }
                }
            }
        }
        m = s.$inheritableStatics;
        if (m) {
            for (j = 0, k = m.length; j < k; j++) {
                q = m[j];
                if (!l.hasOwnProperty(q)) {
                    l[q] = h[q]
                }
            }
        }
        if ("config" in s) {
            l.addConfig(s.config, false)
        }
        n.mixins[g] = s;
        return l
    }, getName: function () {
        return Ext.getClassName(this)
    }, createAlias: a(function (g, e) {
        this.override(g, function () {
            return this[e].apply(this, arguments)
        })
    }), addXtype: function (j) {
        var g = this.prototype, i = g.xtypesMap, h = g.xtypes, e = g.xtypesChain;
        if (!g.hasOwnProperty("xtypesMap")) {
            i = g.xtypesMap = Ext.merge({}, g.xtypesMap || {});
            h = g.xtypes = g.xtypes ? [].concat(g.xtypes) : [];
            e = g.xtypesChain = g.xtypesChain ? [].concat(g.xtypesChain) : [];
            g.xtype = j
        }
        if (!i[j]) {
            i[j] = true;
            h.push(j);
            e.push(j);
            Ext.ClassManager.setAlias(this, "widget." + j)
        }
        return this
    }});
    b.implement({isInstance: true, $className: "Ext.Base", configClass: Ext.emptyFn, initConfigList: [], configMap: {}, initConfigMap: {}, statics: function () {
        var g = this.statics.caller, e = this.self;
        if (!g) {
            return e
        }
        return g.$owner
    }, callParent: function (g) {
        var h, e = (h = this.callParent.caller) && (h.$previous || ((h = h.$owner ? h : h.caller) && h.$owner.superclass[h.$name]));
        return e.apply(this, g || d)
    }, callSuper: function (g) {
        var h, e = (h = this.callSuper.caller) && ((h = h.$owner ? h : h.caller) && h.$owner.superclass[h.$name]);
        return e.apply(this, g || d)
    }, self: b, constructor: function () {
        return this
    }, initConfig: function (h) {
        var n = h, m = Ext.Class.configNameCache, k = new this.configClass(), q = this.initConfigList, j = this.configMap, p, l, o, g, e;
        this.initConfig = Ext.emptyFn;
        this.initialConfig = n || {};
        this.config = h = (n) ? Ext.merge(k, h) : k;
        if (n) {
            q = q.slice();
            for (g in n) {
                if (j[g]) {
                    if (n[g] !== null) {
                        q.push(g);
                        this[m[g].initialized] = false
                    }
                }
            }
        }
        for (l = 0, o = q.length; l < o; l++) {
            g = q[l];
            p = m[g];
            e = p.initialized;
            if (!this[e]) {
                this[e] = true;
                this[p.set].call(this, h[g])
            }
        }
        return this
    }, hasConfig: function (e) {
        return Boolean(this.configMap[e])
    }, setConfig: function (i, m) {
        if (!i) {
            return this
        }
        var h = Ext.Class.configNameCache, e = this.config, l = this.configMap, k = this.initialConfig, g, j;
        m = Boolean(m);
        for (g in i) {
            if (m && k.hasOwnProperty(g)) {
                continue
            }
            j = i[g];
            e[g] = j;
            if (l[g]) {
                this[h[g].set](j)
            }
        }
        return this
    }, getConfig: function (g) {
        var e = Ext.Class.configNameCache;
        return this[e[g].get]()
    }, getInitialConfig: function (g) {
        var e = this.config;
        if (!g) {
            return e
        } else {
            return e[g]
        }
    }, onConfigUpdate: function (l, n, o) {
        var p = this.self, h, k, e, j, m, g;
        l = Ext.Array.from(l);
        o = o || this;
        for (h = 0, k = l.length; h < k; h++) {
            e = l[h];
            j = "update" + Ext.String.capitalize(e);
            m = this[j] || Ext.emptyFn;
            g = function () {
                m.apply(this, arguments);
                o[n].apply(o, arguments)
            };
            g.$name = j;
            g.$owner = p;
            this[j] = g
        }
    }, destroy: function () {
        this.destroy = Ext.emptyFn
    }});
    b.prototype.callOverridden = b.prototype.callParent;
    Ext.Base = b
}(Ext.Function.flexSetter));
(function () {
    var c, b = Ext.Base, g = [], e, d;
    for (e in b) {
        if (b.hasOwnProperty(e)) {
            g.push(e)
        }
    }
    d = g.length;
    function a(i) {
        function h() {
            return this.constructor.apply(this, arguments) || null
        }

        return h
    }

    Ext.Class = c = function (i, j, h) {
        if (typeof i != "function") {
            h = j;
            j = i;
            i = null
        }
        if (!j) {
            j = {}
        }
        i = c.create(i, j);
        c.process(i, j, h);
        return i
    };
    Ext.apply(c, {onBeforeCreated: function (i, j, h) {
        i.addMembers(j);
        h.onCreated.call(i, i)
    }, create: function (h, l) {
        var j, k;
        if (!h) {
            h = a()
        }
        for (k = 0; k < d; k++) {
            j = g[k];
            h[j] = b[j]
        }
        return h
    }, process: function (h, p, l) {
        var k = p.preprocessors || c.defaultPreprocessors, s = this.preprocessors, v = {onBeforeCreated: this.onBeforeCreated}, u = [], w, o, n, t, m, r, q;
        delete p.preprocessors;
        for (n = 0, t = k.length; n < t; n++) {
            w = k[n];
            if (typeof w == "string") {
                w = s[w];
                o = w.properties;
                if (o === true) {
                    u.push(w.fn)
                } else {
                    if (o) {
                        for (m = 0, r = o.length; m < r; m++) {
                            q = o[m];
                            if (p.hasOwnProperty(q)) {
                                u.push(w.fn);
                                break
                            }
                        }
                    }
                }
            } else {
                u.push(w)
            }
        }
        v.onCreated = l ? l : Ext.emptyFn;
        v.preprocessors = u;
        this.doProcess(h, p, v)
    }, doProcess: function (i, m, h) {
        var l = this, n = h.preprocessors, j = n.shift(), k = l.doProcess;
        for (; j; j = n.shift()) {
            if (j.call(l, i, m, h, k) === false) {
                return
            }
        }
        h.onBeforeCreated.apply(l, arguments)
    }, preprocessors: {}, registerPreprocessor: function (i, l, j, h, k) {
        if (!h) {
            h = "last"
        }
        if (!j) {
            j = [i]
        }
        this.preprocessors[i] = {name: i, properties: j || false, fn: l};
        this.setDefaultPreprocessorPosition(i, h, k);
        return this
    }, getPreprocessor: function (h) {
        return this.preprocessors[h]
    }, getPreprocessors: function () {
        return this.preprocessors
    }, defaultPreprocessors: [], getDefaultPreprocessors: function () {
        return this.defaultPreprocessors
    }, setDefaultPreprocessors: function (h) {
        this.defaultPreprocessors = Ext.Array.from(h);
        return this
    }, setDefaultPreprocessorPosition: function (j, l, k) {
        var h = this.defaultPreprocessors, i;
        if (typeof l == "string") {
            if (l === "first") {
                h.unshift(j);
                return this
            } else {
                if (l === "last") {
                    h.push(j);
                    return this
                }
            }
            l = (l === "after") ? 1 : -1
        }
        i = Ext.Array.indexOf(h, k);
        if (i !== -1) {
            Ext.Array.splice(h, Math.max(0, i + l), 0, j)
        }
        return this
    }, configNameCache: {}, getConfigNameMap: function (j) {
        var i = this.configNameCache, k = i[j], h;
        if (!k) {
            h = j.charAt(0).toUpperCase() + j.substr(1);
            k = i[j] = {internal: j, initialized: "_is" + h + "Initialized", apply: "apply" + h, update: "update" + h, set: "set" + h, get: "get" + h, doSet: "doSet" + h, changeEvent: j.toLowerCase() + "change"}
        }
        return k
    }});
    c.registerPreprocessor("extend", function (j, l, q) {
        var m = Ext.Base, n = m.prototype, o = l.extend, h, p, k;
        delete l.extend;
        if (o && o !== Object) {
            h = o
        } else {
            h = m
        }
        p = h.prototype;
        if (!h.$isClass) {
            for (k in n) {
                if (!p[k]) {
                    p[k] = n[k]
                }
            }
        }
        j.extend(h);
        j.triggerExtended.apply(j, arguments);
        if (l.onClassExtended) {
            j.onExtended(l.onClassExtended, j);
            delete l.onClassExtended
        }
    }, true);
    c.registerPreprocessor("statics", function (h, i) {
        h.addStatics(i.statics);
        delete i.statics
    });
    c.registerPreprocessor("inheritableStatics", function (h, i) {
        h.addInheritableStatics(i.inheritableStatics);
        delete i.inheritableStatics
    });
    c.registerPreprocessor("config", function (h, k) {
        var j = k.config, i = h.prototype;
        delete k.config;
        Ext.Object.each(j, function (n, w) {
            var u = c.getConfigNameMap(n), q = u.internal, l = u.initialized, v = u.apply, o = u.update, t = u.set, m = u.get, y = (t in i) || k.hasOwnProperty(t), p = (v in i) || k.hasOwnProperty(v), r = (o in i) || k.hasOwnProperty(o), x, s;
            if (w === null || (!y && !p && !r)) {
                i[q] = w;
                i[l] = true
            } else {
                i[l] = false
            }
            if (!y) {
                k[t] = function (B) {
                    var A = this[q], z = this[v], C = this[o];
                    if (!this[l]) {
                        this[l] = true
                    }
                    if (z) {
                        B = z.call(this, B, A)
                    }
                    if (typeof B != "undefined") {
                        this[q] = B;
                        if (C && B !== A) {
                            C.call(this, B, A)
                        }
                    }
                    return this
                }
            }
            if (!(m in i) || k.hasOwnProperty(m)) {
                s = k[m] || false;
                if (s) {
                    x = function () {
                        return s.apply(this, arguments)
                    }
                } else {
                    x = function () {
                        return this[q]
                    }
                }
                k[m] = function () {
                    var z;
                    if (!this[l]) {
                        this[l] = true;
                        this[t](this.config[n])
                    }
                    z = this[m];
                    if ("$previous" in z) {
                        z.$previous = x
                    } else {
                        this[m] = x
                    }
                    return x.apply(this, arguments)
                }
            }
        });
        h.addConfig(j, true)
    });
    c.registerPreprocessor("mixins", function (l, p, h) {
        var j = p.mixins, m, k, n, o;
        delete p.mixins;
        Ext.Function.interceptBefore(h, "onCreated", function () {
            if (j instanceof Array) {
                for (n = 0, o = j.length; n < o; n++) {
                    k = j[n];
                    m = k.prototype.mixinId || k.$className;
                    l.mixin(m, k)
                }
            } else {
                for (var i in j) {
                    if (j.hasOwnProperty(i)) {
                        l.mixin(i, j[i])
                    }
                }
            }
        })
    });
    Ext.extend = function (j, k, i) {
        if (arguments.length === 2 && Ext.isObject(k)) {
            i = k;
            k = j;
            j = null
        }
        var h;
        if (!k) {
            throw new Error("[Ext.extend] Attempting to extend from a class which has not been loaded on the page.")
        }
        i.extend = k;
        i.preprocessors = ["extend", "statics", "inheritableStatics", "mixins", "config"];
        if (j) {
            h = new c(j, i);
            h.prototype.constructor = j
        } else {
            h = new c(i)
        }
        h.prototype.override = function (n) {
            for (var l in n) {
                if (n.hasOwnProperty(l)) {
                    this[l] = n[l]
                }
            }
        };
        return h
    }
}());
(function (c, e, h, d, g) {
    function a() {
        function i() {
            return this.constructor.apply(this, arguments) || null
        }

        return i
    }

    var b = Ext.ClassManager = {classes: {}, existCache: {}, namespaceRewrites: [
        {from: "Ext.", to: Ext}
    ], maps: {alternateToName: {}, aliasToName: {}, nameToAliases: {}, nameToAlternates: {}}, enableNamespaceParseCache: true, namespaceParseCache: {}, instantiators: [], isCreated: function (n) {
        var m = this.existCache, l, o, k, j, p;
        if (this.classes[n] || m[n]) {
            return true
        }
        j = g;
        p = this.parseNamespace(n);
        for (l = 0, o = p.length; l < o; l++) {
            k = p[l];
            if (typeof k != "string") {
                j = k
            } else {
                if (!j || !j[k]) {
                    return false
                }
                j = j[k]
            }
        }
        m[n] = true;
        this.triggerCreated(n);
        return true
    }, createdListeners: [], nameCreatedListeners: {}, triggerCreated: function (s) {
        var u = this.createdListeners, m = this.nameCreatedListeners, n = this.maps.nameToAlternates[s], t = [s], p, r, o, q, l, k;
        for (p = 0, r = u.length; p < r; p++) {
            l = u[p];
            l.fn.call(l.scope, s)
        }
        if (n) {
            t.push.apply(t, n)
        }
        for (p = 0, r = t.length; p < r; p++) {
            k = t[p];
            u = m[k];
            if (u) {
                for (o = 0, q = u.length; o < q; o++) {
                    l = u[o];
                    l.fn.call(l.scope, k)
                }
                delete m[k]
            }
        }
    }, onCreated: function (m, l, k) {
        var j = this.createdListeners, i = this.nameCreatedListeners, n = {fn: m, scope: l};
        if (k) {
            if (this.isCreated(k)) {
                m.call(l, k);
                return
            }
            if (!i[k]) {
                i[k] = []
            }
            i[k].push(n)
        } else {
            j.push(n)
        }
    }, parseNamespace: function (l) {
        var j = this.namespaceParseCache, m, o, q, k, t, s, r, n, p;
        if (this.enableNamespaceParseCache) {
            if (j.hasOwnProperty(l)) {
                return j[l]
            }
        }
        m = [];
        o = this.namespaceRewrites;
        q = g;
        k = l;
        for (n = 0, p = o.length; n < p; n++) {
            t = o[n];
            s = t.from;
            r = t.to;
            if (k === s || k.substring(0, s.length) === s) {
                k = k.substring(s.length);
                if (typeof r != "string") {
                    q = r
                } else {
                    m = m.concat(r.split("."))
                }
                break
            }
        }
        m.push(q);
        m = m.concat(k.split("."));
        if (this.enableNamespaceParseCache) {
            j[l] = m
        }
        return m
    }, setNamespace: function (m, p) {
        var k = g, q = this.parseNamespace(m), o = q.length - 1, j = q[o], n, l;
        for (n = 0; n < o; n++) {
            l = q[n];
            if (typeof l != "string") {
                k = l
            } else {
                if (!k[l]) {
                    k[l] = {}
                }
                k = k[l]
            }
        }
        k[j] = p;
        return k[j]
    }, createNamespaces: function () {
        var k = g, p, m, n, l, o, q;
        for (n = 0, o = arguments.length; n < o; n++) {
            p = this.parseNamespace(arguments[n]);
            for (l = 0, q = p.length; l < q; l++) {
                m = p[l];
                if (typeof m != "string") {
                    k = m
                } else {
                    if (!k[m]) {
                        k[m] = {}
                    }
                    k = k[m]
                }
            }
        }
        return k
    }, set: function (i, m) {
        var l = this, o = l.maps, n = o.nameToAlternates, k = l.getName(m), j;
        l.classes[i] = l.setNamespace(i, m);
        if (k && k !== i) {
            o.alternateToName[i] = k;
            j = n[k] || (n[k] = []);
            j.push(i)
        }
        return this
    }, get: function (l) {
        var n = this.classes, j, p, k, m, o;
        if (n[l]) {
            return n[l]
        }
        j = g;
        p = this.parseNamespace(l);
        for (m = 0, o = p.length; m < o; m++) {
            k = p[m];
            if (typeof k != "string") {
                j = k
            } else {
                if (!j || !j[k]) {
                    return null
                }
                j = j[k]
            }
        }
        return j
    }, setAlias: function (i, j) {
        var l = this.maps.aliasToName, m = this.maps.nameToAliases, k;
        if (typeof i == "string") {
            k = i
        } else {
            k = this.getName(i)
        }
        if (j && l[j] !== k) {
            l[j] = k
        }
        if (!m[k]) {
            m[k] = []
        }
        if (j) {
            Ext.Array.include(m[k], j)
        }
        return this
    }, addNameAliasMappings: function (j) {
        var o = this.maps.aliasToName, p = this.maps.nameToAliases, m, n, l, k;
        for (m in j) {
            n = p[m] || (p[m] = []);
            for (k = 0; k < j[m].length; k++) {
                l = j[m][k];
                if (!o[l]) {
                    o[l] = m;
                    n.push(l)
                }
            }
        }
        return this
    }, addNameAlternateMappings: function (m) {
        var j = this.maps.alternateToName, p = this.maps.nameToAlternates, l, n, o, k;
        for (l in m) {
            n = p[l] || (p[l] = []);
            for (k = 0; k < m[l].length; k++) {
                o = m[l][k];
                if (!j[o]) {
                    j[o] = l;
                    n.push(o)
                }
            }
        }
        return this
    }, getByAlias: function (i) {
        return this.get(this.getNameByAlias(i))
    }, getNameByAlias: function (i) {
        return this.maps.aliasToName[i] || ""
    }, getNameByAlternate: function (i) {
        return this.maps.alternateToName[i] || ""
    }, getAliasesByName: function (i) {
        return this.maps.nameToAliases[i] || []
    }, getName: function (i) {
        return i && i.$className || ""
    }, getClass: function (i) {
        return i && i.self || null
    }, create: function (j, l, i) {
        var k = a();
        if (typeof l == "function") {
            l = l(k)
        }
        l.$className = j;
        return new c(k, l, function () {
            var m = l.postprocessors || b.defaultPostprocessors, t = b.postprocessors, u = [], s, o, r, n, q, p, v;
            delete l.postprocessors;
            for (o = 0, r = m.length; o < r; o++) {
                s = m[o];
                if (typeof s == "string") {
                    s = t[s];
                    p = s.properties;
                    if (p === true) {
                        u.push(s.fn)
                    } else {
                        if (p) {
                            for (n = 0, q = p.length; n < q; n++) {
                                v = p[n];
                                if (l.hasOwnProperty(v)) {
                                    u.push(s.fn);
                                    break
                                }
                            }
                        }
                    }
                } else {
                    u.push(s)
                }
            }
            l.postprocessors = u;
            l.createdFn = i;
            b.processCreate(j, this, l)
        })
    }, processCreate: function (l, j, n) {
        var m = this, i = n.postprocessors.shift(), k = n.createdFn;
        if (!i) {
            if (l) {
                m.set(l, j)
            }
            if (k) {
                k.call(j, j)
            }
            if (l) {
                m.triggerCreated(l)
            }
            return
        }
        if (i.call(m, l, j, n, m.processCreate) !== false) {
            m.processCreate(l, j, n)
        }
    }, createOverride: function (m, l, j) {
        var n = this, o = l.override, q = l.requires, k = l.uses, p = l.compatibility, i = function () {
            var r, s;
            if (q) {
                s = q;
                q = null;
                Ext.Loader.require(s, i)
            } else {
                r = n.get(o);
                delete l.override;
                delete l.compatibility;
                delete l.requires;
                delete l.uses;
                Ext.override(r, l);
                n.triggerCreated(m);
                if (k) {
                    Ext.Loader.addUsedClasses(k)
                }
                if (j) {
                    j.call(r)
                }
            }
        };
        n.existCache[m] = true;
        if (!p || Ext.checkVersion(p)) {
            n.onCreated(i, n, o)
        }
        return n
    }, instantiateByAlias: function () {
        var j = arguments[0], i = h.call(arguments), k = this.getNameByAlias(j);
        if (!k) {
            k = this.maps.aliasToName[j];
            Ext.syncRequire(k)
        }
        i[0] = k;
        return this.instantiate.apply(this, i)
    }, instantiate: function () {
        var k = arguments[0], m = typeof k, j = h.call(arguments, 1), l = k, n, i;
        if (m != "function") {
            if (m != "string" && j.length === 0) {
                j = [k];
                k = k.xclass
            }
            i = this.get(k)
        } else {
            i = k
        }
        if (!i) {
            n = this.getNameByAlias(k);
            if (n) {
                k = n;
                i = this.get(k)
            }
        }
        if (!i) {
            n = this.getNameByAlternate(k);
            if (n) {
                k = n;
                i = this.get(k)
            }
        }
        if (!i) {
            Ext.syncRequire(k);
            i = this.get(k)
        }
        return this.getInstantiator(j.length)(i, j)
    }, dynInstantiate: function (j, i) {
        i = d(i, true);
        i.unshift(j);
        return this.instantiate.apply(this, i)
    }, getInstantiator: function (m) {
        var l = this.instantiators, n, k, j;
        n = l[m];
        if (!n) {
            k = m;
            j = [];
            for (k = 0; k < m; k++) {
                j.push("a[" + k + "]")
            }
            n = l[m] = new Function("c", "a", "return new c(" + j.join(",") + ")")
        }
        return n
    }, postprocessors: {}, defaultPostprocessors: [], registerPostprocessor: function (j, m, k, i, l) {
        if (!i) {
            i = "last"
        }
        if (!k) {
            k = [j]
        }
        this.postprocessors[j] = {name: j, properties: k || false, fn: m};
        this.setDefaultPostprocessorPosition(j, i, l);
        return this
    }, setDefaultPostprocessors: function (i) {
        this.defaultPostprocessors = d(i);
        return this
    }, setDefaultPostprocessorPosition: function (j, m, l) {
        var k = this.defaultPostprocessors, i;
        if (typeof m == "string") {
            if (m === "first") {
                k.unshift(j);
                return this
            } else {
                if (m === "last") {
                    k.push(j);
                    return this
                }
            }
            m = (m === "after") ? 1 : -1
        }
        i = Ext.Array.indexOf(k, l);
        if (i !== -1) {
            Ext.Array.splice(k, Math.max(0, i + m), 0, j)
        }
        return this
    }, getNamesByExpression: function (q) {
        var o = this.maps.nameToAliases, r = [], j, n, l, k, s, m, p;
        if (q.indexOf("*") !== -1) {
            q = q.replace(/\*/g, "(.*?)");
            s = new RegExp("^" + q + "$");
            for (j in o) {
                if (o.hasOwnProperty(j)) {
                    l = o[j];
                    if (j.search(s) !== -1) {
                        r.push(j)
                    } else {
                        for (m = 0, p = l.length; m < p; m++) {
                            n = l[m];
                            if (n.search(s) !== -1) {
                                r.push(j);
                                break
                            }
                        }
                    }
                }
            }
        } else {
            k = this.getNameByAlias(q);
            if (k) {
                r.push(k)
            } else {
                k = this.getNameByAlternate(q);
                if (k) {
                    r.push(k)
                } else {
                    r.push(q)
                }
            }
        }
        return r
    }};
    b.registerPostprocessor("alias", function (l, k, o) {
        var j = o.alias, m, n;
        for (m = 0, n = j.length; m < n; m++) {
            e = j[m];
            this.setAlias(k, e)
        }
    }, ["xtype", "alias"]);
    b.registerPostprocessor("singleton", function (j, i, l, k) {
        if (l.singleton) {
            k.call(this, j, new i(), l)
        } else {
            return true
        }
        return false
    });
    b.registerPostprocessor("alternateClassName", function (k, j, o) {
        var m = o.alternateClassName, l, n, p;
        if (!(m instanceof Array)) {
            m = [m]
        }
        for (l = 0, n = m.length; l < n; l++) {
            p = m[l];
            this.set(p, j)
        }
    });
    Ext.apply(Ext, {create: e(b, "instantiate"), widget: function (k, j) {
        var o = k, l, m, i, n;
        if (typeof o != "string") {
            j = k;
            o = j.xtype
        } else {
            j = j || {}
        }
        if (j.isComponent) {
            return j
        }
        l = "widget." + o;
        m = b.getNameByAlias(l);
        if (!m) {
            n = true
        }
        i = b.get(m);
        if (n || !i) {
            return b.instantiateByAlias(l, j)
        }
        return new i(j)
    }, createByAlias: e(b, "instantiateByAlias"), define: function (j, k, i) {
        if (k.override) {
            return b.createOverride.apply(b, arguments)
        }
        return b.create.apply(b, arguments)
    }, undefine: function (q) {
        var l = b.classes, s = b.maps, t = s.aliasToName, u = s.nameToAliases, w = s.alternateToName, o = s.nameToAlternates, j = u[q], r = o[q], m, v, k, n;
        delete b.namespaceParseCache[q];
        delete u[q];
        delete o[q];
        delete l[q];
        if (j) {
            for (n = j.length; n--;) {
                delete t[j[n]]
            }
        }
        if (r) {
            for (n = r.length; n--;) {
                delete w[r[n]]
            }
        }
        m = b.parseNamespace(q);
        v = m.length - 1;
        k = m[0];
        for (n = 1; n < v; n++) {
            k = k[m[n]];
            if (!k) {
                return
            }
        }
        try {
            delete k[m[v]]
        } catch (p) {
            k[m[v]] = undefined
        }
    }, getClassName: e(b, "getName"), getDisplayName: function (i) {
        if (i) {
            if (i.displayName) {
                return i.displayName
            }
            if (i.$name && i.$class) {
                return Ext.getClassName(i.$class) + "#" + i.$name
            }
            if (i.$className) {
                return i.$className
            }
        }
        return"Anonymous"
    }, getClass: e(b, "getClass"), namespace: e(b, "createNamespaces")});
    Ext.createWidget = Ext.widget;
    Ext.ns = Ext.namespace;
    c.registerPreprocessor("className", function (i, j) {
        if ("$className" in j) {
            i.$className = j.$className
        }
    }, true, "first");
    c.registerPreprocessor("alias", function (u, o) {
        var s = u.prototype, l = d(o.xtype), j = d(o.alias), v = "widget.", t = v.length, p = Array.prototype.slice.call(s.xtypesChain || []), m = Ext.merge({}, s.xtypesMap || {}), n, r, q, k;
        for (n = 0, r = j.length; n < r; n++) {
            q = j[n];
            if (q.substring(0, t) === v) {
                k = q.substring(t);
                Ext.Array.include(l, k)
            }
        }
        u.xtype = o.xtype = l[0];
        o.xtypes = l;
        for (n = 0, r = l.length; n < r; n++) {
            k = l[n];
            if (!m[k]) {
                m[k] = true;
                p.push(k)
            }
        }
        o.xtypesChain = p;
        o.xtypesMap = m;
        Ext.Function.interceptAfter(o, "onClassCreated", function () {
            var i = s.mixins, x, w;
            for (x in i) {
                if (i.hasOwnProperty(x)) {
                    w = i[x];
                    l = w.xtypes;
                    if (l) {
                        for (n = 0, r = l.length; n < r; n++) {
                            k = l[n];
                            if (!m[k]) {
                                m[k] = true;
                                p.push(k)
                            }
                        }
                    }
                }
            }
        });
        for (n = 0, r = l.length; n < r; n++) {
            k = l[n];
            Ext.Array.include(j, v + k)
        }
        o.alias = j
    }, ["xtype", "alias"])
}(Ext.Class, Ext.Function.alias, Array.prototype.slice, Ext.Array.from, Ext.global));
if (Ext._alternatesMetadata) {
    Ext.ClassManager.addNameAlternateMappings(Ext._alternatesMetadata);
    Ext._alternatesMetadata = null
}
if (Ext._aliasMetadata) {
    Ext.ClassManager.addNameAliasMappings(Ext._aliasMetadata);
    Ext._aliasMetadata = null
}
Ext.Loader = new function () {
    var k = this, b = Ext.ClassManager, u = Ext.Class, e = Ext.Function.flexSetter, p = Ext.Function.alias, a = Ext.Function.pass, d = Ext.Function.defer, h = Ext.Array.erase, o = ["extend", "mixins", "requires"], w = {}, n = [], c = /\/\.\//g, g = /\./g, j = 0;
    Ext.apply(k, {isInHistory: w, history: n, config: {enabled: false, scriptChainDelay: false, disableCaching: true, disableCachingParam: "_dc", garbageCollect: false, paths: {Ext: "."}, preserveScripts: true, scriptCharset: undefined}, setConfig: function (z, A) {
        if (Ext.isObject(z) && arguments.length === 1) {
            Ext.merge(k.config, z);
            if ("paths" in z) {
                Ext.app.collectNamespaces(z.paths)
            }
        } else {
            k.config[z] = (Ext.isObject(A)) ? Ext.merge(k.config[z], A) : A;
            if (z === "paths") {
                Ext.app.collectNamespaces(A)
            }
        }
        return k
    }, getConfig: function (z) {
        if (z) {
            return k.config[z]
        }
        return k.config
    }, setPath: e(function (z, A) {
        k.config.paths[z] = A;
        Ext.app.namespaces[z] = true;
        j++;
        return k
    }), addClassPathMappings: function (A) {
        var z;
        if (j == 0) {
            k.config.paths = A
        } else {
            for (z in A) {
                k.config.paths[z] = A[z]
            }
        }
        j++;
        return k
    }, getPath: function (z) {
        var B = "", C = k.config.paths, A = k.getPrefix(z);
        if (A.length > 0) {
            if (A === z) {
                return C[A]
            }
            B = C[A];
            z = z.substring(A.length + 1)
        }
        if (B.length > 0) {
            B += "/"
        }
        return B.replace(c, "/") + z.replace(g, "/") + ".js"
    }, getPrefix: function (A) {
        var C = k.config.paths, B, z = "";
        if (C.hasOwnProperty(A)) {
            return A
        }
        for (B in C) {
            if (C.hasOwnProperty(B) && B + "." === A.substring(0, B.length + 1)) {
                if (B.length > z.length) {
                    z = B
                }
            }
        }
        return z
    }, isAClassNameWithAKnownPrefix: function (z) {
        var A = k.getPrefix(z);
        return A !== "" && A !== z
    }, require: function (B, A, z, C) {
        if (A) {
            A.call(z)
        }
    }, syncRequire: function () {
    }, exclude: function (z) {
        return{require: function (C, B, A) {
            return k.require(C, B, A, z)
        }, syncRequire: function (C, B, A) {
            return k.syncRequire(C, B, A, z)
        }}
    }, onReady: function (C, B, D, z) {
        var A;
        if (D !== false && Ext.onDocumentReady) {
            A = C;
            C = function () {
                Ext.onDocumentReady(A, B, z)
            }
        }
        C.call(B)
    }});
    var r = [], s = {}, v = {}, m = {}, t = {}, q = {}, x = [], y = [], i = {}, l = function (z, A) {
        return A.priority - z.priority
    };
    Ext.apply(k, {documentHead: typeof document != "undefined" && (document.head || document.getElementsByTagName("head")[0]), isLoading: false, queue: r, isClassFileLoaded: s, isFileLoaded: v, readyListeners: x, optionalRequires: y, requiresMap: i, numPendingFiles: 0, numLoadedFiles: 0, hasFileLoadError: false, classNameToFilePathMap: t, scriptsLoading: 0, syncModeEnabled: false, scriptElements: q, refreshQueue: function () {
        var D = r.length, A, C, z, B;
        if (!D && !k.scriptsLoading) {
            return k.triggerReady()
        }
        for (A = 0; A < D; A++) {
            C = r[A];
            if (C) {
                B = C.requires;
                for (z = 0; z < B.length;) {
                    if (b.isCreated(B[z])) {
                        h(B, z, 1)
                    } else {
                        z++
                    }
                }
                if (C.requires.length === 0) {
                    h(r, A, 1);
                    C.callback.call(C.scope);
                    k.refreshQueue();
                    break
                }
            }
        }
        return k
    }, injectScriptElement: function (z, G, D, I, B) {
        var H = document.createElement("script"), E = false, A = k.config, F = function () {
            if (!E) {
                E = true;
                H.onload = H.onreadystatechange = H.onerror = null;
                if (typeof A.scriptChainDelay == "number") {
                    d(G, A.scriptChainDelay, I)
                } else {
                    G.call(I)
                }
                k.cleanupScriptElement(H, A.preserveScripts === false, A.garbageCollect)
            }
        }, C = function (J) {
            d(D, 1, I);
            k.cleanupScriptElement(H, A.preserveScripts === false, A.garbageCollect)
        };
        H.type = "text/javascript";
        H.onerror = C;
        B = B || A.scriptCharset;
        if (B) {
            H.charset = B
        }
        if ("addEventListener" in H) {
            H.onload = F
        } else {
            if ("readyState" in H) {
                H.onreadystatechange = function () {
                    if (this.readyState == "loaded" || this.readyState == "complete") {
                        F()
                    }
                }
            } else {
                H.onload = F
            }
        }
        H.src = z;
        (k.documentHead || document.getElementsByTagName("head")[0]).appendChild(H);
        return H
    }, removeScriptElement: function (z) {
        if (q[z]) {
            k.cleanupScriptElement(q[z], true, !!k.getConfig("garbageCollect"));
            delete q[z]
        }
        return k
    }, cleanupScriptElement: function (B, A, C) {
        var D;
        B.onload = B.onreadystatechange = B.onerror = null;
        if (A) {
            Ext.removeNode(B);
            if (C) {
                for (D in B) {
                    try {
                        if (D != "src") {
                            B[D] = null
                        }
                        delete B[D]
                    } catch (z) {
                    }
                }
            }
        }
        return k
    }, loadScript: function (I) {
        var C = k.getConfig(), B = typeof I == "string", A = B ? I : I.url, E = !B && I.onError, F = !B && I.onLoad, H = !B && I.scope, G = function () {
            k.numPendingFiles--;
            k.scriptsLoading--;
            if (E) {
                E.call(H, "Failed loading '" + A + "', please verify that the file exists")
            }
            if (k.numPendingFiles + k.scriptsLoading === 0) {
                k.refreshQueue()
            }
        }, D = function () {
            k.numPendingFiles--;
            k.scriptsLoading--;
            if (F) {
                F.call(H)
            }
            if (k.numPendingFiles + k.scriptsLoading === 0) {
                k.refreshQueue()
            }
        }, z;
        k.isLoading = true;
        k.numPendingFiles++;
        k.scriptsLoading++;
        z = C.disableCaching ? (A + (A.indexOf("?") === -1 ? "?" : "&") + C.disableCachingParam + "=" + Ext.Date.now()) : A;
        q[A] = k.injectScriptElement(z, D, G)
    }, loadScriptFile: function (A, H, F, K, z) {
        var C = k.getConfig(), L = A + (C.disableCaching ? ("?" + C.disableCachingParam + "=" + Ext.Date.now()) : ""), B = false, J, D, I, E = "";
        K = K || k;
        k.isLoading = true;
        if (!z) {
            I = function () {
            };
            q[A] = k.injectScriptElement(L, H, I, K)
        } else {
            if (typeof XMLHttpRequest != "undefined") {
                J = new XMLHttpRequest()
            } else {
                J = new ActiveXObject("Microsoft.XMLHTTP")
            }
            try {
                J.open("GET", L, false);
                J.send(null)
            } catch (G) {
                B = true
            }
            D = (J.status === 1223) ? 204 : (J.status === 0 && ((self.location || {}).protocol == "file:" || (self.location || {}).protocol == "ionp:")) ? 200 : J.status;
            B = B || (D === 0);
            if (B) {
            } else {
                if ((D >= 200 && D < 300) || (D === 304)) {
                    if (!Ext.isIE) {
                        E = "\n//@ sourceURL=" + A
                    }
                    Ext.globalEval(J.responseText + E);
                    H.call(K)
                } else {
                }
            }
            J = null
        }
    }, syncRequire: function () {
        var z = k.syncModeEnabled;
        if (!z) {
            k.syncModeEnabled = true
        }
        k.require.apply(k, arguments);
        if (!z) {
            k.syncModeEnabled = false
        }
        k.refreshQueue()
    }, require: function (R, I, C, E) {
        var K = {}, B = {}, H = [], T = [], Q = [], A = [], G, S, M, L, z, F, P, O, N, J, D;
        if (E) {
            E = (typeof E === "string") ? [E] : E;
            for (O = 0, J = E.length; O < J; O++) {
                z = E[O];
                if (typeof z == "string" && z.length > 0) {
                    H = b.getNamesByExpression(z);
                    for (N = 0, D = H.length; N < D; N++) {
                        K[H[N]] = true
                    }
                }
            }
        }
        R = (typeof R === "string") ? [R] : (R ? R : []);
        if (I) {
            if (I.length > 0) {
                G = function () {
                    var V = [], U, W;
                    for (U = 0, W = A.length; U < W; U++) {
                        V.push(b.get(A[U]))
                    }
                    return I.apply(this, V)
                }
            } else {
                G = I
            }
        } else {
            G = Ext.emptyFn
        }
        C = C || Ext.global;
        for (O = 0, J = R.length; O < J; O++) {
            L = R[O];
            if (typeof L == "string" && L.length > 0) {
                T = b.getNamesByExpression(L);
                D = T.length;
                for (N = 0; N < D; N++) {
                    P = T[N];
                    if (K[P] !== true) {
                        A.push(P);
                        if (!b.isCreated(P) && !B[P]) {
                            B[P] = true;
                            Q.push(P)
                        }
                    }
                }
            }
        }
        if (Q.length > 0) {
            if (!k.config.enabled) {
                throw new Error("Ext.Loader is not enabled, so dependencies cannot be resolved dynamically. Missing required class" + ((Q.length > 1) ? "es" : "") + ": " + Q.join(", "))
            }
        } else {
            G.call(C);
            return k
        }
        S = k.syncModeEnabled;
        if (!S) {
            r.push({requires: Q.slice(), callback: G, scope: C})
        }
        J = Q.length;
        for (O = 0; O < J; O++) {
            F = Q[O];
            M = k.getPath(F);
            if (S && s.hasOwnProperty(F)) {
                if (!s[F]) {
                    k.numPendingFiles--;
                    k.removeScriptElement(M);
                    delete s[F]
                }
            }
            if (!s.hasOwnProperty(F)) {
                if (k.isFileLoaded[M] || m[M]) {
                    s[F] = true
                } else {
                    m[M] = true;
                    s[F] = false;
                    k.numPendingFiles++;
                    k.loadScriptFile(M, a(k.onFileLoaded, [F, M], k), a(k.onFileLoadError, [F, M], k), k, S)
                }
                t[F] = M
            }
        }
        if (S) {
            G.call(C);
            if (J === 1) {
                return b.get(F)
            }
        }
        return k
    }, onFileLoaded: function (B, A) {
        var z = s[B];
        k.numLoadedFiles++;
        s[B] = true;
        v[A] = true;
        delete m[A];
        if (!z) {
            k.numPendingFiles--
        }
        if (k.numPendingFiles === 0) {
            k.refreshQueue()
        }
    }, onFileLoadError: function (B, A, z, C) {
        k.numPendingFiles--;
        k.hasFileLoadError = true
    }, addUsedClasses: function (B) {
        var z, A, C;
        if (B) {
            B = (typeof B == "string") ? [B] : B;
            for (A = 0, C = B.length; A < C; A++) {
                z = B[A];
                if (typeof z == "string" && !Ext.Array.contains(y, z)) {
                    y.push(z)
                }
            }
        }
        return k
    }, triggerReady: function () {
        var z, A = y;
        if (k.isLoading) {
            k.isLoading = false;
            if (A.length !== 0) {
                A = A.slice();
                y.length = 0;
                k.require(A, k.triggerReady, k);
                return k
            }
        }
        Ext.Array.sort(x, l);
        while (x.length && !k.isLoading) {
            z = x.shift();
            z.fn.call(z.scope)
        }
        return k
    }, onReady: function (C, B, D, z) {
        var A;
        if (D !== false && Ext.onDocumentReady) {
            A = C;
            C = function () {
                Ext.onDocumentReady(A, B, z)
            }
        }
        if (!k.isLoading) {
            C.call(B)
        } else {
            x.push({fn: C, scope: B, priority: (z && z.priority) || 0})
        }
    }, historyPush: function (z) {
        if (z && s.hasOwnProperty(z) && !w[z]) {
            w[z] = true;
            n.push(z)
        }
        return k
    }});
    Ext.disableCacheBuster = function (A, B) {
        var z = new Date();
        z.setTime(z.getTime() + (A ? 10 * 365 : -1) * 24 * 60 * 60 * 1000);
        z = z.toGMTString();
        document.cookie = "ext-cache=1; expires=" + z + "; path=" + (B || "/")
    };
    Ext.require = p(k, "require");
    Ext.syncRequire = p(k, "syncRequire");
    Ext.exclude = p(k, "exclude");
    Ext.onReady = function (B, A, z) {
        k.onReady(B, A, true, z)
    };
    u.registerPreprocessor("loader", function (P, D, O, N) {
        var K = this, I = [], z, J = b.getName(P), C, B, H, G, M, F, A, L, E;
        for (C = 0, H = o.length; C < H; C++) {
            F = o[C];
            if (D.hasOwnProperty(F)) {
                A = D[F];
                if (typeof A == "string") {
                    I.push(A)
                } else {
                    if (A instanceof Array) {
                        for (B = 0, G = A.length; B < G; B++) {
                            M = A[B];
                            if (typeof M == "string") {
                                I.push(M)
                            }
                        }
                    } else {
                        if (typeof A != "function") {
                            for (B in A) {
                                if (A.hasOwnProperty(B)) {
                                    M = A[B];
                                    if (typeof M == "string") {
                                        I.push(M)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (I.length === 0) {
            return
        }
        k.require(I, function () {
            for (C = 0, H = o.length; C < H; C++) {
                F = o[C];
                if (D.hasOwnProperty(F)) {
                    A = D[F];
                    if (typeof A == "string") {
                        D[F] = b.get(A)
                    } else {
                        if (A instanceof Array) {
                            for (B = 0, G = A.length; B < G; B++) {
                                M = A[B];
                                if (typeof M == "string") {
                                    D[F][B] = b.get(M)
                                }
                            }
                        } else {
                            if (typeof A != "function") {
                                for (var Q in A) {
                                    if (A.hasOwnProperty(Q)) {
                                        M = A[Q];
                                        if (typeof M == "string") {
                                            D[F][Q] = b.get(M)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            N.call(K, P, D, O)
        });
        return false
    }, true, "after", "className");
    b.registerPostprocessor("uses", function (B, A, C) {
        var z = C.uses;
        if (z) {
            k.addUsedClasses(z)
        }
    });
    b.onCreated(k.historyPush)
}();
if (Ext._classPathMetadata) {
    Ext.Loader.addClassPathMappings(Ext._classPathMetadata);
    Ext._classPathMetadata = null
}
(function () {
    var a = document.getElementsByTagName("script"), b = a[a.length - 1], d = b.src, c = d.substring(0, d.lastIndexOf("/") + 1), e = Ext.Loader;
    e.setConfig({enabled: true, disableCaching: true, paths: {Ext: c + "src"}})
})();
Ext._endTime = new Date().getTime();
if (Ext._beforereadyhandler) {
    Ext._beforereadyhandler()
}
Ext.Error = Ext.extend(Error, {statics: {ignore: false, raise: function (a) {
    a = a || {};
    if (Ext.isString(a)) {
        a = {msg: a}
    }
    var c = this.raise.caller, b;
    if (c) {
        if (c.$name) {
            a.sourceMethod = c.$name
        }
        if (c.$owner) {
            a.sourceClass = c.$owner.$className
        }
    }
    if (Ext.Error.handle(a) !== true) {
        b = Ext.Error.prototype.toString.call(a);
        Ext.log({msg: b, level: "error", dump: a, stack: true});
        throw new Ext.Error(a)
    }
}, handle: function () {
    return Ext.Error.ignore
}}, name: "Ext.Error", constructor: function (a) {
    if (Ext.isString(a)) {
        a = {msg: a}
    }
    var b = this;
    Ext.apply(b, a);
    b.message = b.message || b.msg
}, toString: function () {
    var c = this, b = c.sourceClass ? c.sourceClass : "", a = c.sourceMethod ? "." + c.sourceMethod + "(): " : "", d = c.msg || "(No description provided)";
    return b + a + d
}});
Ext.deprecated = function (a) {
    return Ext.emptyFn
};
Ext.JSON = (new (function () {
    var me = this, encodingFunction, decodingFunction, useNative = null, useHasOwn = !!{}.hasOwnProperty, isNative = function () {
        if (useNative === null) {
            useNative = Ext.USE_NATIVE_JSON && window.JSON && JSON.toString() == "[object JSON]"
        }
        return useNative
    }, pad = function (n) {
        return n < 10 ? "0" + n : n
    }, doDecode = function (json) {
        return eval("(" + json + ")")
    }, doEncode = function (o, newline) {
        if (o === null || o === undefined) {
            return"null"
        } else {
            if (Ext.isDate(o)) {
                return Ext.JSON.encodeDate(o)
            } else {
                if (Ext.isString(o)) {
                    return Ext.JSON.encodeString(o)
                } else {
                    if (typeof o == "number") {
                        return isFinite(o) ? String(o) : "null"
                    } else {
                        if (Ext.isBoolean(o)) {
                            return String(o)
                        } else {
                            if (o.toJSON) {
                                return o.toJSON()
                            } else {
                                if (Ext.isArray(o)) {
                                    return encodeArray(o, newline)
                                } else {
                                    if (Ext.isObject(o)) {
                                        return encodeObject(o, newline)
                                    } else {
                                        if (typeof o === "function") {
                                            return"null"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return"undefined"
    }, m = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\", "\v": "\\u000b"}, charToReplace = /[\\\"\x00-\x1f\x7f-\uffff]/g, encodeString = function (s) {
        return'"' + s.replace(charToReplace, function (a) {
            var c = m[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"'
    }, encodeArray = function (o, newline) {
        var a = ["[", ""], len = o.length, i;
        for (i = 0; i < len; i += 1) {
            a.push(Ext.JSON.encodeValue(o[i]), ",")
        }
        a[a.length - 1] = "]";
        return a.join("")
    }, encodeObject = function (o, newline) {
        var a = ["{", ""], i, val;
        for (i in o) {
            val = o[i];
            if (!useHasOwn || o.hasOwnProperty(i)) {
                if (typeof val === "function" || val === undefined) {
                    continue
                }
                a.push(Ext.JSON.encodeValue(i), ":", Ext.JSON.encodeValue(val), ",")
            }
        }
        a[a.length - 1] = "}";
        return a.join("")
    };
    me.encodeString = encodeString;
    me.encodeValue = doEncode;
    me.encodeDate = function (o) {
        return'"' + o.getFullYear() + "-" + pad(o.getMonth() + 1) + "-" + pad(o.getDate()) + "T" + pad(o.getHours()) + ":" + pad(o.getMinutes()) + ":" + pad(o.getSeconds()) + '"'
    };
    me.encode = function (o) {
        if (!encodingFunction) {
            encodingFunction = isNative() ? JSON.stringify : me.encodeValue
        }
        return encodingFunction(o)
    };
    me.decode = function (json, safe) {
        if (!decodingFunction) {
            decodingFunction = isNative() ? JSON.parse : doDecode
        }
        try {
            return decodingFunction(json)
        } catch (e) {
            if (safe === true) {
                return null
            }
            Ext.Error.raise({sourceClass: "Ext.JSON", sourceMethod: "decode", msg: "You're trying to decode an invalid JSON String: " + json})
        }
    }
})());
Ext.encode = Ext.JSON.encode;
Ext.decode = Ext.JSON.decode;
Ext.apply(Ext, {userAgent: navigator.userAgent.toLowerCase(), cache: {}, idSeed: 1000, windowId: "ext-window", documentId: "ext-document", isReady: false, enableGarbageCollector: true, enableListenerCollection: true, rootHierarchyState: {}, addCacheEntry: function (g, c, e) {
    e = e || c.dom;
    var a = Ext.cache, b = g || (c && c.id) || e.id, d = a[b] || (a[b] = {data: {}, events: {}, dom: e, skipGarbageCollection: !!(e.getElementById || e.navigator)});
    if (c) {
        c.$cache = d;
        d.el = c
    }
    return d
}, updateCacheEntry: function (a, c) {
    var b = a.dom;
    if (c !== b) {
        Ext.EventManager.removeAll(b)
    }
    a.dom = c;
    if (a.el) {
        a.el.dom = c
    }
    return a
}, id: function (a, c) {
    var b = this, d = "";
    a = Ext.getDom(a, true) || {};
    if (a === document) {
        a.id = b.documentId
    } else {
        if (a === window) {
            a.id = b.windowId
        }
    }
    if (!a.id) {
        if (b.isSandboxed) {
            d = Ext.sandboxName.toLowerCase() + "-"
        }
        a.id = d + (c || "ext-gen") + (++Ext.idSeed)
    }
    return a.id
}, escapeId: (function () {
    var c = /^[a-zA-Z_][a-zA-Z0-9_\-]*$/i, d = /([\W]{1})/g, b = /^(\d)/g, a = function (h, g) {
        return"\\" + g
    }, e = function (h, g) {
        return"\\00" + g.charCodeAt(0).toString(16) + " "
    };
    return function (g) {
        return c.test(g) ? g : g.replace(d, a).replace(b, e)
    }
}()), getBody: (function () {
    var a;
    return function () {
        return a || (a = Ext.get(document.body))
    }
}()), getHead: (function () {
    var a;
    return function () {
        return a || (a = Ext.get(document.getElementsByTagName("head")[0]))
    }
}()), getDoc: (function () {
    var a;
    return function () {
        return a || (a = Ext.get(document))
    }
}()), getOrientation: function () {
    return window.innerHeight > window.innerWidth ? "portrait" : "landscape"
}, destroy: function () {
    var c = arguments.length, b, a;
    for (b = 0; b < c; b++) {
        a = arguments[b];
        if (a) {
            if (Ext.isArray(a)) {
                this.destroy.apply(this, a)
            } else {
                if (a.isStore) {
                    a.destroyStore()
                } else {
                    if (Ext.isFunction(a.destroy)) {
                        a.destroy()
                    } else {
                        if (a.dom) {
                            a.remove()
                        }
                    }
                }
            }
        }
    }
}, callback: function (g, e, c, b) {
    var d, a;
    if (Ext.isFunction(g)) {
        d = g
    } else {
        if (e && Ext.isString(g)) {
            d = e[g]
        }
    }
    if (d) {
        c = c || [];
        e = e || window;
        if (b) {
            Ext.defer(d, b, e, c)
        } else {
            a = d.apply(e, c)
        }
    }
    return a
}, resolveMethod: function (b, a) {
    if (Ext.isFunction(b)) {
        return b
    }
    return a[b]
}, htmlEncode: function (a) {
    return Ext.String.htmlEncode(a)
}, htmlDecode: function (a) {
    return Ext.String.htmlDecode(a)
}, urlAppend: function (a, b) {
    return Ext.String.urlAppend(a, b)
}, splitAndUnescape: (function () {
    var a = {};
    return function (d, c) {
        if (!d) {
            return[]
        } else {
            if (!c) {
                return[d]
            }
        }
        var g = a[c] || (a[c] = new RegExp("\\\\" + c, "g")), b = [], h, e;
        h = d.split(c);
        while ((e = h.shift()) !== undefined) {
            while (e.charAt(e.length - 1) === "\\" && h.length > 0) {
                e = e + c + h.shift()
            }
            e = e.replace(g, c);
            b.push(e)
        }
        return b
    }
})()});
Ext.ns = Ext.namespace;
window.undefined = window.undefined;
(function () {
    var q = function (e) {
        return e.test(Ext.userAgent)
    }, v = document.compatMode == "CSS1Compat", H = function (T, S) {
        var e;
        return(T && (e = S.exec(Ext.userAgent))) ? parseFloat(e[1]) : 0
    }, r = document.documentMode, a = q(/opera/), x = a && q(/version\/10\.5/), M = q(/\bchrome\b/), B = q(/webkit/), c = !M && q(/safari/), K = c && q(/applewebkit\/4/), I = c && q(/version\/3/), F = c && q(/version\/4/), l = c && q(/version\/5\.0/), E = c && q(/version\/5/), k = !a && (q(/msie/) || q(/trident/)), L = k && ((q(/msie 7/) && r != 8 && r != 9 && r != 10) || r == 7), J = k && ((q(/msie 8/) && r != 7 && r != 9 && r != 10) || r == 8), G = k && ((q(/msie 9/) && r != 7 && r != 8 && r != 10) || r == 9), i = k && ((q(/msie 10/) && r != 7 && r != 8 && r != 9) || r == 10), g = k && ((q(/trident\/7\.0/) && r != 7 && r != 8 && r != 9 && r != 10) || r == 11), O = k && q(/msie 6/), b = !B && !k && q(/gecko/), R = b && q(/rv:1\.9/), Q = b && q(/rv:2\.0/), P = b && q(/rv:5\./), t = b && q(/rv:10\./), A = R && q(/rv:1\.9\.0/), y = R && q(/rv:1\.9\.1/), w = R && q(/rv:1\.9\.2/), h = q(/windows|win32/), D = q(/macintosh|mac os x/), z = q(/linux/), n = null, o = H(true, /\bchrome\/(\d+\.\d+)/), j = H(true, /\bfirefox\/(\d+\.\d+)/), p = H(k, /msie (\d+\.\d+)/), u = H(a, /version\/(\d+\.\d+)/), d = H(c, /version\/(\d+\.\d+)/), C = H(B, /webkit\/(\d+\.\d+)/), s = /^https/i.test(window.location.protocol), m;
    try {
        document.execCommand("BackgroundImageCache", false, true)
    } catch (N) {
    }
    m = function () {
    };
    m.info = m.warn = m.error = Ext.emptyFn;
    Ext.setVersion("ext", "4.2.3.1477");
    Ext.setVersion("extjs", "4.2.3.1477");
    Ext.apply(Ext, {SSL_SECURE_URL: s && k ? "javascript:''" : "about:blank", plainTableCls: Ext.buildSettings.baseCSSPrefix + "table-plain", plainListCls: Ext.buildSettings.baseCSSPrefix + "list-plain", enableNestedListenerRemoval: false, USE_NATIVE_JSON: false, getDom: function (T, S) {
        if (!T || !document) {
            return null
        }
        if (T.dom) {
            return T.dom
        } else {
            if (typeof T == "string") {
                var U = Ext.getElementById(T);
                if (U && k && S) {
                    if (T == U.getAttribute("id")) {
                        return U
                    } else {
                        return null
                    }
                }
                return U
            } else {
                return T
            }
        }
    }, removeNode: O || L || J ? (function () {
        var e;
        return function (U) {
            if (U && U.tagName.toUpperCase() != "BODY") {
                (Ext.enableNestedListenerRemoval) ? Ext.EventManager.purgeElement(U) : Ext.EventManager.removeAll(U);
                var S = Ext.cache, T = U.id;
                if (S[T]) {
                    delete S[T].dom;
                    delete S[T]
                }
                if (J && U.parentNode) {
                    U.parentNode.removeChild(U)
                }
                e = e || document.createElement("div");
                e.appendChild(U);
                e.innerHTML = ""
            }
        }
    }()) : function (T) {
        if (T && T.parentNode && T.tagName.toUpperCase() != "BODY") {
            (Ext.enableNestedListenerRemoval) ? Ext.EventManager.purgeElement(T) : Ext.EventManager.removeAll(T);
            var e = Ext.cache, S = T.id;
            if (e[S]) {
                delete e[S].dom;
                delete e[S]
            }
            T.parentNode.removeChild(T)
        }
    }, isStrict: v, isIEQuirks: k && (!v && (O || L || J || G)), isOpera: a, isOpera10_5: x, isWebKit: B, isChrome: M, isSafari: c, isSafari3: I, isSafari4: F, isSafari5: E, isSafari5_0: l, isSafari2: K, isIE: k, isIE6: O, isIE7: L, isIE7m: O || L, isIE7p: k && !O, isIE8: J, isIE8m: O || L || J, isIE8p: k && !(O || L), isIE9: G, isIE9m: O || L || J || G, isIE9p: k && !(O || L || J), isIE10: i, isIE10m: O || L || J || G || i, isIE10p: k && !(O || L || J || G), isIE11: g, isIE11m: O || L || J || G || i || g, isIE11p: k && !(O || L || J || G || i), isGecko: b, isGecko3: R, isGecko4: Q, isGecko5: P, isGecko10: t, isFF3_0: A, isFF3_5: y, isFF3_6: w, isFF4: 4 <= j && j < 5, isFF5: 5 <= j && j < 6, isFF10: 10 <= j && j < 11, isLinux: z, isWindows: h, isMac: D, chromeVersion: o, firefoxVersion: j, ieVersion: p, operaVersion: u, safariVersion: d, webKitVersion: C, isSecure: s, BLANK_IMAGE_URL: (O || L) ? "//www.sencha.com/s.gif" : "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", value: function (T, e, S) {
        return Ext.isEmpty(T, S) ? e : T
    }, escapeRe: function (e) {
        return e.replace(/([-.*+?\^${}()|\[\]\/\\])/g, "\\$1")
    }, addBehaviors: function (V) {
        if (!Ext.isReady) {
            Ext.onReady(function () {
                Ext.addBehaviors(V)
            })
        } else {
            var S = {}, U, e, T;
            for (e in V) {
                if ((U = e.split("@"))[1]) {
                    T = U[0];
                    if (!S[T]) {
                        S[T] = Ext.select(T)
                    }
                    S[T].on(U[1], V[e])
                }
            }
            S = null
        }
    }, getScrollbarSize: function (S) {
        if (!Ext.isReady) {
            return{}
        }
        if (S || !n) {
            var e = document.body, T = document.createElement("div");
            T.style.width = T.style.height = "100px";
            T.style.overflow = "scroll";
            T.style.position = "absolute";
            e.appendChild(T);
            n = {width: T.offsetWidth - T.clientWidth, height: T.offsetHeight - T.clientHeight};
            e.removeChild(T)
        }
        return n
    }, getScrollBarWidth: function (S) {
        var e = Ext.getScrollbarSize(S);
        return e.width + 2
    }, copyTo: function (S, U, W, V) {
        if (typeof W == "string") {
            W = W.split(/[,;\s]/)
        }
        var X, T = W ? W.length : 0, e;
        for (X = 0; X < T; X++) {
            e = W[X];
            if (V || U.hasOwnProperty(e)) {
                S[e] = U[e]
            }
        }
        return S
    }, destroyMembers: function (U) {
        for (var T = 1, S = arguments, e = S.length; T < e; T++) {
            Ext.destroy(U[S[T]]);
            delete U[S[T]]
        }
    }, log: m, partition: function (e, V) {
        var W = [
            [],
            []
        ], S, U, T = e.length;
        for (S = 0; S < T; S++) {
            U = e[S];
            W[(V && V(U, S, e)) || (!V && U) ? 0 : 1].push(U)
        }
        return W
    }, invoke: function (e, V) {
        var X = [], W = Array.prototype.slice.call(arguments, 2), S, U, T = e.length;
        for (S = 0; S < T; S++) {
            U = e[S];
            if (U && typeof U[V] == "function") {
                X.push(U[V].apply(U, W))
            } else {
                X.push(undefined)
            }
        }
        return X
    }, zip: function () {
        var Y = Ext.partition(arguments, function (Z) {
            return typeof Z != "function"
        }), V = Y[0], X = Y[1][0], e = Ext.max(Ext.pluck(V, "length")), U = [], W, T, S;
        for (W = 0; W < e; W++) {
            U[W] = [];
            if (X) {
                U[W] = X.apply(X, Ext.pluck(V, W))
            } else {
                for (T = 0, S = V.length; T < S; T++) {
                    U[W].push(V[T][W])
                }
            }
        }
        return U
    }, toSentence: function (S, e) {
        var V = S.length, U, T;
        if (V <= 1) {
            return S[0]
        } else {
            U = S.slice(0, V - 1);
            T = S[V - 1];
            return Ext.util.Format.format("{0} {1} {2}", U.join(", "), e || "and", T)
        }
    }, setGlyphFontFamily: function (e) {
        Ext._glyphFontFamily = e
    }, useShims: O})
}());
Ext.application = function (a) {
    var d, e, c, b = function () {
        Ext.onReady(function () {
            Ext.app.Application.instance = new d()
        })
    };
    if (typeof a === "string") {
        Ext.require(a, function () {
            d = Ext.ClassManager.get(a);
            b()
        })
    } else {
        Ext.Loader.setPath(a.name, a.appFolder || "app");
        if (e = a.paths) {
            for (c in e) {
                if (e.hasOwnProperty(c)) {
                    Ext.Loader.setPath(c, e[c])
                }
            }
        }
        a["paths processed"] = true;
        Ext.define(a.name + ".$application", Ext.apply({extend: "Ext.app.Application"}, a), function () {
            d = this;
            b()
        })
    }
};
(function () {
    Ext.ns("Ext.util");
    var g = Ext.util.Format = {}, c = /<\/?[^>]+>/gi, i = /(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig, e = /\r?\n/g, b = /#+$/, h = /[\d,\.#]+/, k = /[^\d\.#]/g, a, j, d = {};
    Ext.apply(g, {thousandSeparator: ",", decimalSeparator: ".", currencyPrecision: 2, currencySign: "$", currencyAtEnd: false, undef: function (l) {
        return l !== undefined ? l : ""
    }, defaultValue: function (m, l) {
        return m !== undefined && m !== "" ? m : l
    }, substr: "ab".substr(-1) != "b" ? function (m, o, l) {
        var n = String(m);
        return(o < 0) ? n.substr(Math.max(n.length + o, 0), l) : n.substr(o, l)
    } : function (m, n, l) {
        return String(m).substr(n, l)
    }, lowercase: function (l) {
        return String(l).toLowerCase()
    }, uppercase: function (l) {
        return String(l).toUpperCase()
    }, usMoney: function (l) {
        return g.currency(l, "$", 2)
    }, currency: function (n, p, m, l) {
        var r = "", q = ",0", o = 0;
        n = n - 0;
        if (n < 0) {
            n = -n;
            r = "-"
        }
        m = Ext.isDefined(m) ? m : g.currencyPrecision;
        q += (m > 0 ? "." : "");
        for (; o < m; o++) {
            q += "0"
        }
        n = g.number(n, q);
        if ((l || g.currencyAtEnd) === true) {
            return Ext.String.format("{0}{1}{2}", r, n, p || g.currencySign)
        } else {
            return Ext.String.format("{0}{1}{2}", r, p || g.currencySign, n)
        }
    }, date: function (l, m) {
        if (!l) {
            return""
        }
        if (!Ext.isDate(l)) {
            l = new Date(Date.parse(l))
        }
        return Ext.Date.dateFormat(l, m || Ext.Date.defaultFormat)
    }, dateRenderer: function (l) {
        return function (m) {
            return g.date(m, l)
        }
    }, stripTags: function (l) {
        return !l ? l : String(l).replace(c, "")
    }, stripScripts: function (l) {
        return !l ? l : String(l).replace(i, "")
    }, fileSize: (function () {
        var l = 1024, m = 1048576, n = 1073741824;
        return function (p) {
            var o;
            if (p < l) {
                if (p === 1) {
                    o = "1 byte"
                } else {
                    o = p + " bytes"
                }
            } else {
                if (p < m) {
                    o = (Math.round(((p * 10) / l)) / 10) + " KB"
                } else {
                    if (p < n) {
                        o = (Math.round(((p * 10) / m)) / 10) + " MB"
                    } else {
                        o = (Math.round(((p * 10) / n)) / 10) + " GB"
                    }
                }
            }
            return o
        }
    })(), math: (function () {
        var l = {};
        return function (n, m) {
            if (!l[m]) {
                l[m] = Ext.functionFactory("v", "return v " + m + ";")
            }
            return l[m](n)
        }
    }()), round: function (n, m) {
        var l = Number(n);
        if (typeof m == "number") {
            m = Math.pow(10, m);
            l = Math.round(n * m) / m
        }
        return l
    }, number: function (w, p) {
        if (!p) {
            return w
        }
        var o = d[p];
        if (!o) {
            var s = p, A = g.thousandSeparator, x = g.decimalSeparator, q = 0, n = "", m, t, u, y, z, l, r;
            if (p.substr(p.length - 2) == "/i") {
                if (!a || j !== x) {
                    a = new RegExp("[^\\d\\" + x + "]", "g");
                    j = x
                }
                p = p.substr(0, p.length - 2);
                m = p.indexOf(A) !== -1;
                t = p.replace(a, "").split(x)
            } else {
                m = p.indexOf(",") != -1;
                t = p.replace(k, "").split(".")
            }
            u = p.replace(h, "");
            if (t.length > 2) {
            } else {
                if (t.length === 2) {
                    q = t[1].length;
                    z = t[1].match(b);
                    if (z) {
                        r = z[0].length;
                        n = 'trailingZeroes=new RegExp(Ext.String.escapeRegex(utilFormat.decimalSeparator) + "*0{0,' + r + '}$")'
                    }
                }
            }
            l = ["var utilFormat=Ext.util.Format,extNumber=Ext.Number,neg,absVal,fnum,parts" + (m ? ",thousandSeparator,thousands=[],j,n,i" : "") + (u ? ',formatString="' + p + '",formatPattern=/[\\d,\\.#]+/' : "") + ',trailingZeroes;return function(v){if(typeof v!=="number"&&isNaN(v=extNumber.from(v,NaN)))return"";neg=v<0;', "absVal=Math.abs(v);", "fnum=Ext.Number.toFixed(absVal, " + q + ");", n, ";"];
            if (m) {
                if (q) {
                    l[l.length] = 'parts=fnum.split(".");';
                    l[l.length] = "fnum=parts[0];"
                }
                l[l.length] = "if(absVal>=1000) {";
                l[l.length] = "thousandSeparator=utilFormat.thousandSeparator;thousands.length=0;j=fnum.length;n=fnum.length%3||3;for(i=0;i<j;i+=n){if(i!==0){n=3;}thousands[thousands.length]=fnum.substr(i,n);}fnum=thousands.join(thousandSeparator);}";
                if (q) {
                    l[l.length] = "fnum += utilFormat.decimalSeparator+parts[1];"
                }
            } else {
                if (q) {
                    l[l.length] = 'if(utilFormat.decimalSeparator!=="."){parts=fnum.split(".");fnum=parts[0]+utilFormat.decimalSeparator+parts[1];}'
                }
            }
            l[l.length] = 'if(neg&&fnum!=="' + (q ? "0." + Ext.String.repeat("0", q) : "0") + '")fnum="-"+fnum;';
            if (z) {
                l[l.length] = 'fnum=fnum.replace(trailingZeroes,"");'
            }
            l[l.length] = "return ";
            if (u) {
                l[l.length] = "formatString.replace(formatPattern, fnum);"
            } else {
                l[l.length] = "fnum;"
            }
            l[l.length] = "};";
            o = d[s] = Ext.functionFactory("Ext", l.join(""))(Ext)
        }
        return o(w)
    }, numberRenderer: function (l) {
        return function (m) {
            return g.number(m, l)
        }
    }, attributes: function (m) {
        if (typeof m === "object") {
            var l = [], n;
            for (n in m) {
                if (m.hasOwnProperty(n)) {
                    l.push(n, '="', n === "style" ? Ext.DomHelper.generateStyles(m[n], null, true) : Ext.htmlEncode(m[n]), '"')
                }
            }
            m = l.join("")
        }
        return m || ""
    }, plural: function (l, m, n) {
        return l + " " + (l == 1 ? m : (n ? n : m + "s"))
    }, nl2br: function (l) {
        return Ext.isEmpty(l) ? "" : l.replace(e, "<br/>")
    }, capitalize: Ext.String.capitalize, ellipsis: Ext.String.ellipsis, format: Ext.String.format, htmlDecode: Ext.String.htmlDecode, htmlEncode: Ext.String.htmlEncode, leftPad: Ext.String.leftPad, trim: Ext.String.trim, parseBox: function (m) {
        m = m || 0;
        if (typeof m === "number") {
            return{top: m, right: m, bottom: m, left: m}
        }
        var n = m.split(" "), l = n.length;
        if (l == 1) {
            n[1] = n[2] = n[3] = n[0]
        } else {
            if (l == 2) {
                n[2] = n[0];
                n[3] = n[1]
            } else {
                if (l == 3) {
                    n[3] = n[1]
                }
            }
        }
        return{top: parseInt(n[0], 10) || 0, right: parseInt(n[1], 10) || 0, bottom: parseInt(n[2], 10) || 0, left: parseInt(n[3], 10) || 0}
    }, escapeRegex: function (l) {
        return l.replace(/([\-.*+?\^${}()|\[\]\/\\])/g, "\\$1")
    }})
}());
(Ext.cmd.derive("Ext.util.TaskRunner", Ext.Base, {interval: 10, timerId: null, constructor: function (a) {
    var b = this;
    if (typeof a == "number") {
        b.interval = a
    } else {
        if (a) {
            Ext.apply(b, a)
        }
    }
    b.tasks = [];
    b.timerFn = Ext.Function.bind(b.onTick, b)
}, newTask: function (b) {
    var a = new Ext.util.TaskRunner.Task(b);
    a.manager = this;
    return a
}, start: function (a) {
    var c = this, b = Ext.Date.now();
    if (!a.pending) {
        c.tasks.push(a);
        a.pending = true
    }
    a.stopped = false;
    a.taskStartTime = b;
    a.taskRunTime = a.fireOnStart !== false ? 0 : a.taskStartTime;
    a.taskRunCount = 0;
    if (!c.firing) {
        if (a.fireOnStart !== false) {
            c.startTimer(0, b)
        } else {
            c.startTimer(a.interval, b)
        }
    }
    return a
}, stop: function (a) {
    if (!a.stopped) {
        a.stopped = true;
        if (a.onStop) {
            a.onStop.call(a.scope || a, a)
        }
    }
    return a
}, stopAll: function () {
    Ext.each(this.tasks, this.stop, this)
}, firing: false, nextExpires: 1e+99, onTick: function () {
    var m = this, e = m.tasks, a = Ext.Date.now(), n = 1e+99, k = e.length, c, o, h, b, d, g;
    m.timerId = null;
    m.firing = true;
    for (h = 0; h < k || h < (k = e.length); ++h) {
        b = e[h];
        if (!(g = b.stopped)) {
            c = b.taskRunTime + b.interval;
            if (c <= a) {
                d = 1;
                try {
                    d = b.run.apply(b.scope || b, b.args || [++b.taskRunCount])
                } catch (j) {
                    try {
                        if (b.onError) {
                            d = b.onError.call(b.scope || b, b, j)
                        }
                    } catch (l) {
                    }
                }
                b.taskRunTime = a;
                if (d === false || b.taskRunCount === b.repeat) {
                    m.stop(b);
                    g = true
                } else {
                    g = b.stopped;
                    c = a + b.interval
                }
            }
            if (!g && b.duration && b.duration <= (a - b.taskStartTime)) {
                m.stop(b);
                g = true
            }
        }
        if (g) {
            b.pending = false;
            if (!o) {
                o = e.slice(0, h)
            }
        } else {
            if (o) {
                o.push(b)
            }
            if (n > c) {
                n = c
            }
        }
    }
    if (o) {
        m.tasks = o
    }
    m.firing = false;
    if (m.tasks.length) {
        m.startTimer(n - a, Ext.Date.now())
    }
    if (m.fireIdleEvent !== false) {
        Ext.EventManager.idleEvent.fire()
    }
}, startTimer: function (e, c) {
    var d = this, b = c + e, a = d.timerId;
    if (a && d.nextExpires - b > d.interval) {
        clearTimeout(a);
        a = null
    }
    if (!a) {
        if (e < d.interval) {
            e = d.interval
        }
        d.timerId = setTimeout(d.timerFn, e);
        d.nextExpires = b
    }
}}, 1, 0, 0, 0, 0, 0, [Ext.util, "TaskRunner"], function () {
    var b = this, a = b.prototype;
    a.destroy = a.stopAll;
    Ext.util.TaskManager = Ext.TaskManager = new b();
    b.Task = new Ext.Class({isTask: true, stopped: true, fireOnStart: false, constructor: function (c) {
        Ext.apply(this, c)
    }, restart: function (c) {
        if (c !== undefined) {
            this.interval = c
        }
        this.manager.start(this)
    }, start: function (c) {
        if (this.stopped) {
            this.restart(c)
        }
    }, stop: function () {
        this.manager.stop(this)
    }});
    a = b.Task.prototype;
    a.destroy = a.stop
}));
(Ext.cmd.derive("Ext.util.TaskManager", Ext.util.TaskRunner, {alternateClassName: ["Ext.TaskManager"], singleton: true}, 0, 0, 0, 0, 0, 0, [Ext.util, "TaskManager", Ext, "TaskManager"], 0));
(Ext.cmd.derive("Ext.perf.Accumulator", Ext.Base, (function () {
    var c = null, h = Ext.global.chrome, d, b = function () {
        b = function () {
            return new Date().getTime()
        };
        var l, m;
        if (Ext.isChrome && h && h.Interval) {
            l = new h.Interval();
            l.start();
            b = function () {
                return l.microseconds() / 1000
            }
        } else {
            if (window.ActiveXObject) {
                try {
                    m = new ActiveXObject("SenchaToolbox.Toolbox");
                    Ext.senchaToolbox = m;
                    b = function () {
                        return m.milliseconds
                    }
                } catch (n) {
                }
            } else {
                if (Date.now) {
                    b = Date.now
                }
            }
        }
        Ext.perf.getTimestamp = Ext.perf.Accumulator.getTimestamp = b;
        return b()
    };

    function i(m, l) {
        m.sum += l;
        m.min = Math.min(m.min, l);
        m.max = Math.max(m.max, l)
    }

    function e(o) {
        var m = o ? o : (b() - this.time), n = this, l = n.accum;
        ++l.count;
        if (!--l.depth) {
            i(l.total, m)
        }
        i(l.pure, m - n.childTime);
        c = n.parent;
        if (c) {
            ++c.accum.childCount;
            c.childTime += m
        }
    }

    function a() {
        return{min: Number.MAX_VALUE, max: 0, sum: 0}
    }

    function j(m, l) {
        return function () {
            var o = m.enter(), n = l.apply(this, arguments);
            o.leave();
            return n
        }
    }

    function k(l) {
        return Math.round(l * 100) / 100
    }

    function g(n, m, l, p) {
        var o = {avg: 0, min: p.min, max: p.max, sum: 0};
        if (n) {
            l = l || 0;
            o.sum = p.sum - m * l;
            o.avg = o.sum / n
        }
        return o
    }

    return{constructor: function (l) {
        var m = this;
        m.count = m.childCount = m.depth = m.maxDepth = 0;
        m.pure = a();
        m.total = a();
        m.name = l
    }, statics: {getTimestamp: b}, format: function (l) {
        if (!d) {
            d = new Ext.XTemplate(["{name} - {count} call(s)", '<tpl if="count">', '<tpl if="childCount">', " ({childCount} children)", "</tpl>", '<tpl if="depth - 1">', " ({depth} deep)", "</tpl>", '<tpl for="times">', ", {type}: {[this.time(values.sum)]} msec (", "avg={[this.time(values.sum / parent.count)]}", ")", "</tpl>", "</tpl>"].join(""), {time: function (n) {
                return Math.round(n * 100) / 100
            }})
        }
        var m = this.getData(l);
        m.name = this.name;
        m.pure.type = "Pure";
        m.total.type = "Total";
        m.times = [m.pure, m.total];
        return d.apply(m)
    }, getData: function (l) {
        var m = this;
        return{count: m.count, childCount: m.childCount, depth: m.maxDepth, pure: g(m.count, m.childCount, l, m.pure), total: g(m.count, m.childCount, l, m.total)}
    }, enter: function () {
        var l = this, m = {accum: l, leave: e, childTime: 0, parent: c};
        ++l.depth;
        if (l.maxDepth < l.depth) {
            l.maxDepth = l.depth
        }
        c = m;
        m.time = b();
        return m
    }, monitor: function (n, m, l) {
        var o = this.enter();
        if (l) {
            n.apply(m, l)
        } else {
            n.call(m)
        }
        o.leave()
    }, report: function () {
        Ext.log(this.format())
    }, tap: function (t, v) {
        var u = this, o = typeof v == "string" ? [v] : v, s, w, q, p, n, m, l, r;
        r = function () {
            if (typeof t == "string") {
                s = Ext.global;
                p = t.split(".");
                for (q = 0, n = p.length; q < n; ++q) {
                    s = s[p[q]]
                }
            } else {
                s = t
            }
            for (q = 0, n = o.length; q < n; ++q) {
                m = o[q];
                w = m.charAt(0) == "!";
                if (w) {
                    m = m.substring(1)
                } else {
                    w = !(m in s.prototype)
                }
                l = w ? s : s.prototype;
                l[m] = j(u, l[m])
            }
        };
        Ext.ClassManager.onCreated(r, u, t);
        return u
    }}
}()), 1, 0, 0, 0, 0, 0, [Ext.perf, "Accumulator"], function () {
    Ext.perf.getTimestamp = this.getTimestamp
}));
(Ext.cmd.derive("Ext.perf.Monitor", Ext.Base, {singleton: true, alternateClassName: "Ext.Perf", constructor: function () {
    this.accumulators = [];
    this.accumulatorsByName = {}
}, calibrate: function () {
    var b = new Ext.perf.Accumulator("$"), g = b.total, c = Ext.perf.Accumulator.getTimestamp, e = 0, h, a, d;
    d = c();
    do {
        h = b.enter();
        h.leave();
        ++e
    } while (g.sum < 100);
    a = c();
    return(a - d) / e
}, get: function (b) {
    var c = this, a = c.accumulatorsByName[b];
    if (!a) {
        c.accumulatorsByName[b] = a = new Ext.perf.Accumulator(b);
        c.accumulators.push(a)
    }
    return a
}, enter: function (a) {
    return this.get(a).enter()
}, monitor: function (a, c, b) {
    this.get(a).monitor(c, b)
}, report: function () {
    var c = this, b = c.accumulators, a = c.calibrate();
    b.sort(function (e, d) {
        return(e.name < d.name) ? -1 : ((d.name < e.name) ? 1 : 0)
    });
    c.updateGC();
    Ext.log("Calibration: " + Math.round(a * 100) / 100 + " msec/sample");
    Ext.each(b, function (d) {
        Ext.log(d.format(a))
    })
}, getData: function (c) {
    var b = {}, a = this.accumulators;
    Ext.each(a, function (d) {
        if (c || d.count) {
            b[d.name] = d.getData()
        }
    });
    return b
}, reset: function () {
    Ext.each(this.accumulators, function (a) {
        var b = a;
        b.count = b.childCount = b.depth = b.maxDepth = 0;
        b.pure = {min: Number.MAX_VALUE, max: 0, sum: 0};
        b.total = {min: Number.MAX_VALUE, max: 0, sum: 0}
    })
}, updateGC: function () {
    var a = this.accumulatorsByName.GC, b = Ext.senchaToolbox, c;
    if (a) {
        a.count = b.garbageCollectionCounter || 0;
        if (a.count) {
            c = a.pure;
            a.total.sum = c.sum = b.garbageCollectionMilliseconds;
            c.min = c.max = c.sum / a.count;
            c = a.total;
            c.min = c.max = c.sum / a.count
        }
    }
}, watchGC: function () {
    Ext.perf.getTimestamp();
    var a = Ext.senchaToolbox;
    if (a) {
        this.get("GC");
        a.watchGarbageCollector(false)
    }
}, setup: function (c) {
    if (!c) {
        c = {render: {"Ext.AbstractComponent": "render"}, layout: {"Ext.layout.Context": "run"}}
    }
    this.currentConfig = c;
    var d, g, b, e, a;
    for (d in c) {
        if (c.hasOwnProperty(d)) {
            g = c[d];
            b = Ext.Perf.get(d);
            for (e in g) {
                if (g.hasOwnProperty(e)) {
                    a = g[e];
                    b.tap(e, a)
                }
            }
        }
    }
    this.watchGC()
}}, 1, 0, 0, 0, 0, 0, [Ext.perf, "Monitor", Ext, "Perf"], 0));
Ext.is = {init: function (b) {
    var c = this.platforms, e = c.length, d, a;
    b = b || window.navigator;
    for (d = 0; d < e; d++) {
        a = c[d];
        this[a.identity] = a.regex.test(b[a.property])
    }
    this.Desktop = this.Mac || this.Windows || (this.Linux && !this.Android);
    this.Tablet = this.iPad;
    this.Phone = !this.Desktop && !this.Tablet;
    this.iOS = this.iPhone || this.iPad || this.iPod;
    this.Standalone = !!window.navigator.standalone
}, platforms: [
    {property: "platform", regex: /iPhone/i, identity: "iPhone"},
    {property: "platform", regex: /iPod/i, identity: "iPod"},
    {property: "userAgent", regex: /iPad/i, identity: "iPad"},
    {property: "userAgent", regex: /Blackberry/i, identity: "Blackberry"},
    {property: "userAgent", regex: /Android/i, identity: "Android"},
    {property: "platform", regex: /Mac/i, identity: "Mac"},
    {property: "platform", regex: /Win/i, identity: "Windows"},
    {property: "platform", regex: /Linux/i, identity: "Linux"}
]};
Ext.is.init();
(function () {
    var a = function (i, h) {
        var g = i.ownerDocument.defaultView, j = (g ? g.getComputedStyle(i, null) : i.currentStyle) || i.style;
        return j[h]
    }, e = {"IE6-quirks": [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], "IE6-strict": [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], "IE7-quirks": [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], "IE7-strict": [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], "IE8-quirks": [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], "IE8-strict": [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0], "IE9-quirks": [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], "IE9-strict": [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0], "IE10-quirks": [1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0], "IE10-strict": [1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0]}, c = document, d = c.createElement("div");

    function b() {
        var g = Ext.isIE6 ? "IE6" : Ext.isIE7 ? "IE7" : Ext.isIE8 ? "IE8" : Ext.isIE9 ? "IE9" : Ext.isIE10 ? "IE10" : "";
        return g ? g + (Ext.isStrict ? "-strict" : "-quirks") : ""
    }

    Ext.supports = {init: function () {
        var m = this, k = m.toRun || m.tests, i = k.length, g = [], o = b(), l, j, p, h = Ext.isReady;
        if (h) {
            d.innerHTML = ['<div style="height:30px;width:50px;">', '<div style="height:20px;width:20px;"></div>', "</div>", '<div style="width: 200px; height: 200px; position: relative; padding: 5px;">', '<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>', "</div>", '<div style="position: absolute; left: 10%; top: 10%;"></div>', '<div style="float:left; background-color:transparent;"></div>'].join("");
            c.body.appendChild(d)
        }
        j = e[o];
        while (i--) {
            l = k[i];
            p = j && j[i];
            if (p !== undefined) {
                m[l.identity] = p
            } else {
                if (h || l.early) {
                    m[l.identity] = l.fn.call(m, c, d)
                } else {
                    g.push(l)
                }
            }
        }
        if (h) {
            c.body.removeChild(d)
        }
        m.toRun = g
    }, PointerEvents: "pointerEvents" in document.documentElement.style, LocalStorage: (function () {
        try {
            return"localStorage" in window && window.localStorage !== null
        } catch (g) {
            return false
        }
    })(), CSS3BoxShadow: "boxShadow" in document.documentElement.style || "WebkitBoxShadow" in document.documentElement.style || "MozBoxShadow" in document.documentElement.style, ClassList: !!document.documentElement.classList, OrientationChange: ((typeof window.orientation != "undefined") && ("onorientationchange" in window)), DeviceMotion: ("ondevicemotion" in window), Touch: ("ontouchstart" in window) && (!Ext.is.Desktop), TimeoutActualLateness: (function () {
        setTimeout(function () {
            Ext.supports.TimeoutActualLateness = arguments.length !== 0
        }, 0)
    }()), tests: [
        {identity: "Transitions", fn: function (m, o) {
            var l = ["webkit", "Moz", "o", "ms", "khtml"], n = "TransitionEnd", g = [l[0] + n, "transitionend", l[2] + n, l[3] + n, l[4] + n], k = l.length, j = 0, h = false;
            for (; j < k; j++) {
                if (a(o, l[j] + "TransitionProperty")) {
                    Ext.supports.CSS3Prefix = l[j];
                    Ext.supports.CSS3TransitionEnd = g[j];
                    h = true;
                    break
                }
            }
            return h
        }},
        {identity: "RightMargin", fn: function (h, i) {
            var g = h.defaultView;
            return !(g && g.getComputedStyle(i.firstChild.firstChild, null).marginRight != "0px")
        }},
        {identity: "DisplayChangeInputSelectionBug", early: true, fn: function () {
            var g = Ext.webKitVersion;
            return 0 < g && g < 533
        }},
        {identity: "DisplayChangeTextAreaSelectionBug", early: true, fn: function () {
            var g = Ext.webKitVersion;
            return 0 < g && g < 534.24
        }},
        {identity: "TransparentColor", fn: function (h, i, g) {
            g = h.defaultView;
            return !(g && g.getComputedStyle(i.lastChild, null).backgroundColor != "transparent")
        }},
        {identity: "ComputedStyle", fn: function (h, i, g) {
            g = h.defaultView;
            return g && g.getComputedStyle
        }},
        {identity: "Svg", fn: function (g) {
            return !!g.createElementNS && !!g.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
        }},
        {identity: "Canvas", fn: function (g) {
            return !!g.createElement("canvas").getContext
        }, early: true},
        {identity: "Vml", fn: function (g) {
            var h = g.createElement("div");
            h.innerHTML = "<!--[if vml]><br/><br/><![endif]-->";
            return(h.childNodes.length == 2)
        }, early: true},
        {identity: "Float", fn: function (g) {
            return"cssFloat" in g.documentElement.style
        }, early: true},
        {identity: "AudioTag", fn: function (g) {
            return !!g.createElement("audio").canPlayType
        }, early: true},
        {identity: "History", fn: function () {
            var g = window.history;
            return !!(g && g.pushState)
        }, early: true},
        {identity: "Hashchange", fn: function () {
            var g = document.documentMode;
            return"onhashchange" in window && (g === undefined || g > 7)
        }, early: true},
        {identity: "CSS3DTransform", fn: function () {
            return(typeof WebKitCSSMatrix != "undefined" && new WebKitCSSMatrix().hasOwnProperty("m41"))
        }, early: true},
        {identity: "CSS3LinearGradient", fn: function (l, g) {
            var n = "background-image:", m = "-webkit-gradient(linear, left top, right bottom, from(black), to(white))", k = "linear-gradient(left top, black, white)", j = "-moz-" + k, h = "-ms-" + k, i = "-o-" + k, o = [n + m, n + k, n + j, n + h, n + i];
            g.style.cssText = o.join(";");
            return(("" + g.style.backgroundImage).indexOf("gradient") !== -1) && !Ext.isIE9
        }, early: true},
        {identity: "CSS3BorderRadius", fn: function (j) {
            var h = ["borderRadius", "BorderRadius", "MozBorderRadius", "WebkitBorderRadius", "OBorderRadius", "KhtmlBorderRadius"], g;
            for (g = 0; g < h.length; g++) {
                if (h[g] in j.documentElement.style) {
                    return true
                }
            }
            return false
        }, early: true},
        {identity: "GeoLocation", fn: function () {
            return(typeof navigator != "undefined" && "geolocation" in navigator) || (typeof google != "undefined" && typeof google.gears != "undefined")
        }, early: true},
        {identity: "MouseEnterLeave", fn: function (g) {
            return("onmouseenter" in g.documentElement && "onmouseleave" in g.documentElement)
        }, early: true},
        {identity: "MouseWheel", fn: function (g) {
            return("onmousewheel" in g.documentElement)
        }, early: true},
        {identity: "Opacity", fn: function (g, h) {
            if (Ext.isIE6 || Ext.isIE7 || Ext.isIE8) {
                return false
            }
            h.style.cssText = "opacity:0.73";
            return h.style.opacity == "0.73"
        }, early: true},
        {identity: "Placeholder", fn: function (g) {
            return"placeholder" in g.createElement("input")
        }, early: true},
        {identity: "Direct2DBug", fn: function (g) {
            return Ext.isString(g.documentElement.style.msTransformOrigin) && Ext.isIE10m
        }, early: true},
        {identity: "BoundingClientRect", fn: function (g) {
            return !Ext.isIEQuirks && "getBoundingClientRect" in g.documentElement
        }, early: true},
        {identity: "RotatedBoundingClientRect", fn: function (k) {
            var g = k.body, h = false, j = k.createElement("div"), i = j.style;
            if (j.getBoundingClientRect) {
                i.WebkitTransform = i.MozTransform = i.OTransform = i.transform = "rotate(90deg)";
                i.width = "100px";
                i.height = "30px";
                g.appendChild(j);
                h = j.getBoundingClientRect().height !== 100;
                g.removeChild(j)
            }
            return h
        }},
        {identity: "IncludePaddingInWidthCalculation", fn: function (g, h) {
            return h.childNodes[1].firstChild.offsetWidth == 210
        }},
        {identity: "IncludePaddingInHeightCalculation", fn: function (g, h) {
            return h.childNodes[1].firstChild.offsetHeight == 210
        }},
        {identity: "ArraySort", fn: function () {
            var g = [1, 2, 3, 4, 5].sort(function () {
                return 0
            });
            return g[0] === 1 && g[1] === 2 && g[2] === 3 && g[3] === 4 && g[4] === 5
        }, early: true},
        {identity: "Range", fn: function (g) {
            return !!g.createRange
        }, early: true},
        {identity: "CreateContextualFragment", fn: function (h) {
            var g = h.createRange ? h.createRange() : false;
            return g && !!g.createContextualFragment
        }, early: true},
        {identity: "WindowOnError", fn: function () {
            return Ext.isIE || Ext.isGecko || Ext.webKitVersion >= 534.16
        }, early: true},
        {identity: "TextAreaMaxLength", fn: function (h) {
            var g = h.createElement("textarea");
            return("maxlength" in g)
        }, early: true},
        {identity: "GetPositionPercentage", fn: function (g, h) {
            return a(h.childNodes[2], "left") == "10%"
        }},
        {identity: "PercentageHeightOverflowBug", fn: function (j) {
            var g = false, i, h;
            if (Ext.getScrollbarSize().height) {
                h = j.createElement("div");
                i = h.style;
                i.height = "50px";
                i.width = "50px";
                i.overflow = "auto";
                i.position = "absolute";
                h.innerHTML = ['<div style="display:table;height:100%;">', '<div style="width:51px;"></div>', "</div>"].join("");
                j.body.appendChild(h);
                if (h.firstChild.offsetHeight === 50) {
                    g = true
                }
                j.body.removeChild(h)
            }
            return g
        }},
        {identity: "xOriginBug", fn: function (j, k) {
            k.innerHTML = '<div id="b1" style="height:100px;width:100px;direction:rtl;position:relative;overflow:scroll"><div id="b2" style="position:relative;width:100%;height:20px;"></div><div id="b3" style="position:absolute;width:20px;height:20px;top:0px;right:0px"></div></div>';
            var i = document.getElementById("b1").getBoundingClientRect(), h = document.getElementById("b2").getBoundingClientRect(), g = document.getElementById("b3").getBoundingClientRect();
            return(h.left !== i.left && g.right !== i.right)
        }},
        {identity: "ScrollWidthInlinePaddingBug", fn: function (j) {
            var g = false, i, h;
            h = j.createElement("div");
            i = h.style;
            i.height = "50px";
            i.width = "50px";
            i.padding = "10px";
            i.overflow = "hidden";
            i.position = "absolute";
            h.innerHTML = '<span style="display:inline-block;zoom:1;height:60px;width:60px;"></span>';
            j.body.appendChild(h);
            if (h.scrollWidth === 70) {
                g = true
            }
            j.body.removeChild(h);
            return g
        }},
        {identity: "rtlVertScrollbarOnRight", fn: function (i, j) {
            j.innerHTML = '<div style="height:100px;width:100px;direction:rtl;overflow:scroll"><div style="width:20px;height:200px;"></div></div>';
            var h = j.firstChild, g = h.firstChild;
            return(g.offsetLeft + g.offsetWidth !== h.offsetLeft + h.offsetWidth)
        }},
        {identity: "rtlVertScrollbarOverflowBug", fn: function (h, i) {
            i.innerHTML = '<div style="height:100px;width:100px;direction:rtl;overflow:auto"><div style="width:95px;height:200px;"></div></div>';
            var g = i.firstChild;
            return g.clientHeight === g.offsetHeight
        }}
    ]}
}());
Ext.supports.init();
Ext.util.DelayedTask = function (e, d, b, h) {
    var g = this, a, c = function () {
        clearInterval(g.id);
        g.id = null;
        e.apply(d, b || []);
        Ext.EventManager.idleEvent.fire()
    };
    h = typeof h === "boolean" ? h : true;
    g.id = null;
    g.delay = function (j, l, k, i) {
        if (h) {
            g.cancel()
        }
        if (typeof j === "number") {
            a = j
        }
        e = l || e;
        d = k || d;
        b = i || b;
        if (!g.id) {
            g.id = setInterval(c, a)
        }
    };
    g.cancel = function () {
        if (g.id) {
            clearInterval(g.id);
            g.id = null
        }
    }
};
(Ext.cmd.derive("Ext.util.Event", Ext.Base, function () {
    var d = Array.prototype.slice, a = Ext.Array.insert, b = Ext.Array.toArray, c = Ext.util.DelayedTask;
    return{isEvent: true, suspended: 0, noOptions: {}, constructor: function (g, e) {
        this.name = e;
        this.observable = g;
        this.listeners = []
    }, addListener: function (p, r, t) {
        var n = this, o, j, q, e, s, m, h, l, k, g;
        r = r || n.observable;
        if (!n.isListening(p, r)) {
            j = n.createListener(p, r, t);
            if (n.firing) {
                n.listeners = n.listeners.slice(0)
            }
            o = n.listeners;
            l = h = o.length;
            q = t && t.priority;
            s = n._highestNegativePriorityIndex;
            m = (s !== undefined);
            if (q) {
                e = (q < 0);
                if (!e || m) {
                    for (k = (e ? s : 0); k < h; k++) {
                        g = o[k].o ? o[k].o.priority || 0 : 0;
                        if (g < q) {
                            l = k;
                            break
                        }
                    }
                } else {
                    n._highestNegativePriorityIndex = l
                }
            } else {
                if (m) {
                    l = s
                }
            }
            if (!e && l <= s) {
                n._highestNegativePriorityIndex++
            }
            if (l === h) {
                n.listeners[h] = j
            } else {
                a(n.listeners, l, [j])
            }
        }
    }, createListener: function (h, g, k) {
        g = g || this.observable;
        var i = this, j = {fn: h, scope: g, ev: i}, e = h;
        if (k) {
            j.o = k;
            if (k.single) {
                e = i.createSingle(e, j, k, g)
            }
            if (k.target) {
                e = i.createTargeted(e, j, k, g)
            }
            if (k.delay) {
                e = i.createDelayed(e, j, k, g)
            }
            if (k.buffer) {
                e = i.createBuffered(e, j, k, g)
            }
        }
        j.fireFn = e;
        return j
    }, findListener: function (k, j) {
        var h = this.listeners, e = h.length, l, g;
        while (e--) {
            l = h[e];
            if (l) {
                g = l.scope;
                if (l.fn == k && (g == (j || this.observable))) {
                    return e
                }
            }
        }
        return -1
    }, isListening: function (g, e) {
        return this.findListener(g, e) !== -1
    }, removeListener: function (i, h) {
        var j = this, g, m, l, e;
        g = j.findListener(i, h);
        if (g != -1) {
            m = j.listeners[g];
            l = j._highestNegativePriorityIndex;
            if (j.firing) {
                j.listeners = j.listeners.slice(0)
            }
            if (m.task) {
                m.task.cancel();
                delete m.task
            }
            e = m.tasks && m.tasks.length;
            if (e) {
                while (e--) {
                    m.tasks[e].cancel()
                }
                delete m.tasks
            }
            j.listeners.splice(g, 1);
            if (l) {
                if (g < l) {
                    j._highestNegativePriorityIndex--
                } else {
                    if (g === l && g === j.listeners.length) {
                        delete j._highestNegativePriorityIndex
                    }
                }
            }
            return true
        }
        return false
    }, clearListeners: function () {
        var g = this.listeners, e = g.length;
        while (e--) {
            this.removeListener(g[e].fn, g[e].scope)
        }
    }, suspend: function () {
        ++this.suspended
    }, resume: function () {
        if (this.suspended) {
            --this.suspended
        }
    }, isSuspended: function () {
        return this.suspended > 0
    }, fire: function () {
        var l = this, j = l.listeners, k = j.length, h, g, m, e;
        if (!l.suspended && k > 0) {
            l.firing = true;
            g = arguments.length ? d.call(arguments, 0) : [];
            e = g.length;
            for (h = 0; h < k; h++) {
                m = j[h];
                if (m.o) {
                    g[e] = m.o
                }
                if (m && m.fireFn.apply(m.scope || l.observable, g) === false) {
                    return(l.firing = false)
                }
            }
        }
        l.firing = false;
        return true
    }, createTargeted: function (g, h, i, e) {
        return function () {
            if (i.target === arguments[0]) {
                g.apply(e, arguments)
            }
        }
    }, createBuffered: function (g, h, i, e) {
        h.task = new c();
        return function () {
            h.task.delay(i.buffer, g, e, b(arguments))
        }
    }, createDelayed: function (g, h, i, e) {
        return function () {
            var j = new c();
            if (!h.tasks) {
                h.tasks = []
            }
            h.tasks.push(j);
            j.delay(i.delay || 10, g, e, b(arguments))
        }
    }, createSingle: function (g, h, i, e) {
        return function () {
            var j = h.ev;
            if (j.removeListener(h.fn, e) && j.observable) {
                j.observable.hasListeners[j.name]--
            }
            return g.apply(e, arguments)
        }
    }}
}, 1, 0, 0, 0, 0, 0, [Ext.util, "Event"], 0));
Ext.EventManager = new function () {
    var b = this, i = document, e = window, j = Ext.supports, a = /\\/g, d = Ext.baseCSSPrefix, h = !Ext.isIE9 && "addEventListener" in i, c, g = function () {
        var p = i.body || i.getElementsByTagName("body")[0], l = [], k = [], m = j.CSS3LinearGradient, o = j.CSS3BorderRadius, n;
        if (!Ext.scopeCss) {
            l.push(d + "body")
        }
        if (!p) {
            return false
        }
        n = p.parentNode;
        function q(r) {
            l.push(d + r)
        }

        if (Ext.isIE && Ext.isIE9m) {
            q("ie");
            if (Ext.isIE6) {
                q("ie6")
            } else {
                q("ie7p");
                if (Ext.isIE7) {
                    q("ie7")
                } else {
                    q("ie8p");
                    if (Ext.isIE8) {
                        q("ie8")
                    } else {
                        q("ie9p");
                        if (Ext.isIE9) {
                            q("ie9")
                        }
                    }
                }
            }
            if (Ext.isIE7m) {
                q("ie7m")
            }
            if (Ext.isIE8m) {
                q("ie8m")
            }
            if (Ext.isIE9m) {
                q("ie9m")
            }
            if (Ext.isIE7 || Ext.isIE8) {
                q("ie78")
            }
        }
        if (Ext.isIE10) {
            q("ie10")
        }
        if (Ext.isGecko) {
            q("gecko");
            if (Ext.isGecko3) {
                q("gecko3")
            }
            if (Ext.isGecko4) {
                q("gecko4")
            }
            if (Ext.isGecko5) {
                q("gecko5")
            }
        }
        if (Ext.isOpera) {
            q("opera")
        }
        if (Ext.isWebKit) {
            q("webkit")
        }
        if (Ext.isSafari) {
            q("safari");
            if (Ext.isSafari2) {
                q("safari2")
            }
            if (Ext.isSafari3) {
                q("safari3")
            }
            if (Ext.isSafari4) {
                q("safari4")
            }
            if (Ext.isSafari5) {
                q("safari5")
            }
            if (Ext.isSafari5_0) {
                q("safari5_0")
            }
        }
        if (Ext.isChrome) {
            q("chrome")
        }
        if (Ext.isMac) {
            q("mac")
        }
        if (Ext.isLinux) {
            q("linux")
        }
        if (!o) {
            q("nbr")
        }
        if (!m) {
            q("nlg")
        }
        if (n) {
            if (Ext.isStrict && (Ext.isIE6 || Ext.isIE7)) {
                Ext.isBorderBox = false
            } else {
                Ext.isBorderBox = true
            }
            if (!Ext.isBorderBox) {
                k.push(d + "content-box")
            }
            if (Ext.isStrict) {
                k.push(d + "strict")
            } else {
                k.push(d + "quirks")
            }
            Ext.fly(n, "_internal").addCls(k)
        }
        Ext.fly(p, "_internal").addCls(l);
        return true
    };
    Ext.apply(b, {hasBoundOnReady: false, hasFiredReady: false, deferReadyEvent: 1, onReadyChain: [], readyEvent: (function () {
        c = new Ext.util.Event();
        c.fire = function () {
            Ext._beforeReadyTime = Ext._beforeReadyTime || new Date().getTime();
            c.self.prototype.fire.apply(c, arguments);
            Ext._afterReadytime = new Date().getTime()
        };
        return c
    }()), idleEvent: new Ext.util.Event(), isReadyPaused: function () {
        return(/[?&]ext-pauseReadyFire\b/i.test(location.search) && !Ext._continueFireReady)
    }, bindReadyEvent: function () {
        if (b.hasBoundOnReady) {
            return
        }
        if (i.readyState == "complete") {
            b.onReadyEvent({type: i.readyState || "body"})
        } else {
            i.addEventListener("DOMContentLoaded", b.onReadyEvent, false);
            e.addEventListener("load", b.onReadyEvent, false);
            b.hasBoundOnReady = true
        }
    }, onReadyEvent: function (k) {
        if (k && k.type) {
            b.onReadyChain.push(k.type)
        }
        if (b.hasBoundOnReady) {
            i.removeEventListener("DOMContentLoaded", b.onReadyEvent, false);
            e.removeEventListener("load", b.onReadyEvent, false)
        }
        if (!Ext.isReady) {
            b.fireDocReady()
        }
    }, fireDocReady: function () {
        if (!Ext.isReady) {
            Ext._readyTime = new Date().getTime();
            Ext.isReady = true;
            j.init();
            b.onWindowUnload();
            c.onReadyChain = b.onReadyChain;
            if (Ext.isNumber(b.deferReadyEvent)) {
                Ext.Function.defer(b.fireReadyEvent, b.deferReadyEvent);
                b.hasDocReadyTimer = true
            } else {
                b.fireReadyEvent()
            }
        }
    }, fireReadyEvent: function () {
        b.hasDocReadyTimer = false;
        b.isFiring = true;
        while (c.listeners.length && !b.isReadyPaused()) {
            c.fire()
        }
        b.isFiring = false;
        b.hasFiredReady = true;
        b.idleEvent.fire()
    }, onDocumentReady: function (m, l, k) {
        k = k || {};
        k.single = true;
        c.addListener(m, l, k);
        if (!(b.isFiring || b.hasDocReadyTimer)) {
            if (Ext.isReady) {
                b.fireReadyEvent()
            } else {
                b.bindReadyEvent()
            }
        }
    }, stoppedMouseDownEvent: new Ext.util.Event(), propRe: /^(?:scope|delay|buffer|single|stopEvent|preventDefault|stopPropagation|normalized|args|delegate|freezeEvent)$/, getId: function (k) {
        var l;
        k = Ext.getDom(k);
        if (k === i) {
            l = Ext.documentId
        } else {
            if (k == e) {
                l = Ext.windowId
            } else {
                l = Ext.id(k)
            }
        }
        if (!Ext.cache[l]) {
            Ext.addCacheEntry(l, null, k)
        }
        return l
    }, prepareListenerConfig: function (n, l, p) {
        var q = b.propRe, m, o, k;
        for (m in l) {
            if (l.hasOwnProperty(m)) {
                if (!q.test(m)) {
                    o = l[m];
                    if (typeof o == "function") {
                        k = [n, m, o, l.scope, l]
                    } else {
                        k = [n, m, o.fn, o.scope, o]
                    }
                    if (p) {
                        b.removeListener.apply(b, k)
                    } else {
                        b.addListener.apply(b, k)
                    }
                }
            }
        }
    }, mouseEnterLeaveRe: /mouseenter|mouseleave/, normalizeEvent: function (k, l) {
        if (b.mouseEnterLeaveRe.test(k) && !j.MouseEnterLeave) {
            if (l) {
                l = Ext.Function.createInterceptor(l, b.contains)
            }
            k = k == "mouseenter" ? "mouseover" : "mouseout"
        } else {
            if (k == "mousewheel" && !j.MouseWheel && !Ext.isOpera) {
                k = "DOMMouseScroll"
            }
        }
        return{eventName: k, fn: l}
    }, contains: function (l) {
        l = l.browserEvent || l;
        var k = l.currentTarget, m = b.getRelatedTarget(l);
        if (k && k.firstChild) {
            while (m) {
                if (m === k) {
                    return false
                }
                m = m.parentNode;
                if (m && (m.nodeType != 1)) {
                    m = null
                }
            }
        }
        return true
    }, addListener: function (o, q, t, v, w) {
        if (typeof q !== "string") {
            b.prepareListenerConfig(o, q);
            return
        }
        var n = o.dom || Ext.getDom(o), r, s, m, k, l, p, u;
        if (typeof t === "string") {
            t = Ext.resolveMethod(t, v || o)
        }
        w = w || {};
        s = b.normalizeEvent(q, t);
        m = b.createListenerWrap(n, q, s.fn, v, w);
        k = b.getEventListenerCache(o.dom ? o : n, q);
        q = s.eventName;
        r = h || (Ext.isIE9 && !n.attachEvent);
        if (!r) {
            l = b.normalizeId(n);
            if (l) {
                p = Ext.cache[l][q];
                if (p && p.firing) {
                    k = b.cloneEventListenerCache(n, q)
                }
            }
        }
        u = !!w.capture;
        k.push({fn: t, wrap: m, scope: v, capture: u});
        if (!r) {
            if (k.length === 1) {
                l = b.normalizeId(n, true);
                t = Ext.Function.bind(b.handleSingleEvent, b, [l, q], true);
                Ext.cache[l][q] = {firing: false, fn: t};
                n.attachEvent("on" + q, t)
            }
        } else {
            n.addEventListener(q, m, u)
        }
        if (n == i && q == "mousedown") {
            b.stoppedMouseDownEvent.addListener(m)
        }
    }, normalizeId: function (l, k) {
        var m;
        if (l === i) {
            m = Ext.documentId
        } else {
            if (l == e) {
                m = Ext.windowId
            } else {
                m = l.id
            }
        }
        if (!m && k) {
            m = b.getId(l)
        }
        return m
    }, handleSingleEvent: function (p, q, m) {
        var n = b.getEventListenerCache(q, m), l = Ext.cache[q][m], k, o;
        if (l.firing) {
            return
        }
        l.firing = true;
        for (o = 0, k = n.length; o < k; ++o) {
            n[o].wrap(p)
        }
        l.firing = false
    }, removeListener: function (t, v, w, y) {
        if (typeof v !== "string") {
            b.prepareListenerConfig(t, v, true);
            return
        }
        var r = Ext.getDom(t), m, n = t.dom ? t : Ext.get(r), k = b.getEventListenerCache(n, v), x = b.normalizeEvent(v).eventName, s = k.length, q, u, p, o, l;
        if (!r) {
            return
        }
        p = h || (Ext.isIE9 && !r.detachEvent);
        if (typeof w === "string") {
            w = Ext.resolveMethod(w, y || t)
        }
        while (s--) {
            o = k[s];
            if (o && (!w || o.fn == w) && (!y || o.scope === y)) {
                l = o.wrap;
                if (l.task) {
                    clearTimeout(l.task);
                    delete l.task
                }
                q = l.tasks && l.tasks.length;
                if (q) {
                    while (q--) {
                        clearTimeout(l.tasks[q])
                    }
                    delete l.tasks
                }
                if (!p) {
                    m = b.normalizeId(r, true);
                    u = Ext.cache[m][x];
                    if (u && u.firing) {
                        k = b.cloneEventListenerCache(r, x)
                    }
                    if (k.length === 1) {
                        w = u.fn;
                        delete Ext.cache[m][x];
                        r.detachEvent("on" + x, w)
                    }
                } else {
                    r.removeEventListener(x, l, o.capture)
                }
                if (l && r == i && v == "mousedown") {
                    b.stoppedMouseDownEvent.removeListener(l)
                }
                Ext.Array.erase(k, s, 1)
            }
        }
    }, removeAll: function (n) {
        var o = (typeof n === "string") ? n : n.id, l, m, k;
        if (o && (l = Ext.cache[o])) {
            m = l.events;
            for (k in m) {
                if (m.hasOwnProperty(k)) {
                    b.removeListener(n, k)
                }
            }
            l.events = {}
        }
    }, purgeElement: function (n, l) {
        var p = Ext.getDom(n), m = 0, k, o;
        if (l) {
            b.removeListener(n, l)
        } else {
            b.removeAll(n)
        }
        if (p && p.childNodes) {
            o = p.childNodes;
            for (k = o.length; m < k; m++) {
                b.purgeElement(o[m], l)
            }
        }
    }, createListenerWrap: function (q, l, o, n, k) {
        k = k || {};
        var p, m = function (t, r) {
            var s;
            if (!p) {
                s = ["if(!" + Ext.name + ") {return;}"];
                if (k.buffer || k.delay || k.freezeEvent) {
                    if (k.freezeEvent) {
                        s.push("e = X.EventObject.setEvent(e);")
                    }
                    s.push("e = new X.EventObjectImpl(e, " + (k.freezeEvent ? "true" : "false") + ");")
                } else {
                    s.push("e = X.EventObject.setEvent(e);")
                }
                if (k.delegate) {
                    s.push('var result, t = e.getTarget("' + (k.delegate + "").replace(a, "\\\\") + '", this);');
                    s.push("if(!t) {return;}")
                } else {
                    s.push("var t = e.target, result;")
                }
                if (k.target) {
                    s.push("if(e.target !== options.target) {return;}")
                }
                if (k.stopEvent) {
                    s.push("e.stopEvent();")
                } else {
                    if (k.preventDefault) {
                        s.push("e.preventDefault();")
                    }
                    if (k.stopPropagation) {
                        s.push("e.stopPropagation();")
                    }
                }
                if (k.normalized === false) {
                    s.push("e = e.browserEvent;")
                }
                if (k.buffer) {
                    s.push("(wrap.task && clearTimeout(wrap.task));");
                    s.push("wrap.task = setTimeout(function() {")
                }
                if (k.delay) {
                    s.push("wrap.tasks = wrap.tasks || [];");
                    s.push("wrap.tasks.push(setTimeout(function() {")
                }
                s.push("result = fn.call(scope || dom, e, t, options);");
                if (k.single) {
                    s.push("evtMgr.removeListener(dom, ename, fn, scope);")
                }
                if (l !== "mousemove" && l !== "unload") {
                    s.push("if (evtMgr.idleEvent.listeners.length) {");
                    s.push("evtMgr.idleEvent.fire();");
                    s.push("}")
                }
                if (k.delay) {
                    s.push("}, " + k.delay + "));")
                }
                if (k.buffer) {
                    s.push("}, " + k.buffer + ");")
                }
                s.push("return result;");
                p = Ext.cacheableFunctionFactory("e", "options", "fn", "scope", "ename", "dom", "wrap", "args", "X", "evtMgr", s.join("\n"))
            }
            return p.call(q, t, k, o, n, l, q, m, r, Ext, b)
        };
        return m
    }, getEventCache: function (m) {
        var l, k, n;
        if (!m) {
            return[]
        }
        if (m.$cache) {
            l = m.$cache
        } else {
            if (typeof m === "string") {
                n = m
            } else {
                n = b.getId(m)
            }
            l = Ext.cache[n]
        }
        k = l.events || (l.events = {});
        return k
    }, getEventListenerCache: function (m, k) {
        var l = b.getEventCache(m);
        return l[k] || (l[k] = [])
    }, cloneEventListenerCache: function (n, k) {
        var m = b.getEventCache(n), l;
        if (m[k]) {
            l = m[k].slice(0)
        } else {
            l = []
        }
        m[k] = l;
        return l
    }, mouseLeaveRe: /(mouseout|mouseleave)/, mouseEnterRe: /(mouseover|mouseenter)/, stopEvent: function (k) {
        b.stopPropagation(k);
        b.preventDefault(k)
    }, stopPropagation: function (k) {
        k = k.browserEvent || k;
        if (k.stopPropagation) {
            k.stopPropagation()
        } else {
            k.cancelBubble = true
        }
    }, preventDefault: function (k) {
        k = k.browserEvent || k;
        if (k.preventDefault) {
            k.preventDefault()
        } else {
            k.returnValue = false;
            try {
                if (k.ctrlKey || k.keyCode > 111 && k.keyCode < 124) {
                    k.keyCode = -1
                }
            } catch (l) {
            }
        }
    }, getRelatedTarget: function (k) {
        k = k.browserEvent || k;
        var l = k.relatedTarget;
        if (!l) {
            if (b.mouseLeaveRe.test(k.type)) {
                l = k.toElement
            } else {
                if (b.mouseEnterRe.test(k.type)) {
                    l = k.fromElement
                }
            }
        }
        return b.resolveTextNode(l)
    }, getPageX: function (k) {
        return b.getPageXY(k)[0]
    }, getPageY: function (k) {
        return b.getPageXY(k)[1]
    }, getPageXY: function (m) {
        m = m.browserEvent || m;
        var l = m.pageX, o = m.pageY, n = i.documentElement, k = i.body;
        if (!l && l !== 0) {
            l = m.clientX + (n && n.scrollLeft || k && k.scrollLeft || 0) - (n && n.clientLeft || k && k.clientLeft || 0);
            o = m.clientY + (n && n.scrollTop || k && k.scrollTop || 0) - (n && n.clientTop || k && k.clientTop || 0)
        }
        return[l, o]
    }, getTarget: function (k) {
        k = k.browserEvent || k;
        return b.resolveTextNode(k.target || k.srcElement)
    }, resolveTextNode: Ext.isGecko ? function (l) {
        if (l) {
            var k = HTMLElement.prototype.toString.call(l);
            if (k !== "[xpconnect wrapped native prototype]" && k !== "[object XULElement]") {
                return l.nodeType == 3 ? l.parentNode : l
            }
        }
    } : function (k) {
        return k && k.nodeType == 3 ? k.parentNode : k
    }, curWidth: 0, curHeight: 0, onWindowResize: function (n, m, l) {
        var k = b.resizeEvent;
        if (!k) {
            b.resizeEvent = k = new Ext.util.Event();
            b.on(e, "resize", b.fireResize, null, {buffer: 100})
        }
        k.addListener(n, m, l)
    }, fireResize: function () {
        var k = Ext.Element.getViewWidth(), l = Ext.Element.getViewHeight();
        if (b.curHeight != l || b.curWidth != k) {
            b.curHeight = l;
            b.curWidth = k;
            b.resizeEvent.fire(k, l)
        }
    }, removeResizeListener: function (m, l) {
        var k = b.resizeEvent;
        if (k) {
            k.removeListener(m, l)
        }
    }, onWindowUnload: function (n, m, l) {
        var k = b.unloadEvent;
        if (!k) {
            b.unloadEvent = k = new Ext.util.Event();
            b.addListener(e, "unload", b.fireUnload)
        }
        if (n) {
            k.addListener(n, m, l)
        }
    }, fireUnload: function () {
        try {
            i = e = undefined;
            var p, l, n, m, k;
            b.unloadEvent.fire();
            if (Ext.isGecko3) {
                p = Ext.ComponentQuery.query("gridview");
                l = 0;
                n = p.length;
                for (; l < n; l++) {
                    p[l].scrollToTop()
                }
            }
            k = Ext.cache;
            for (m in k) {
                if (k.hasOwnProperty(m)) {
                    b.removeAll(m)
                }
            }
        } catch (o) {
        }
    }, removeUnloadListener: function (m, l) {
        var k = b.unloadEvent;
        if (k) {
            k.removeListener(m, l)
        }
    }, useKeyDown: Ext.isWebKit ? parseInt(navigator.userAgent.match(/AppleWebKit\/(\d+)/)[1], 10) >= 525 : !((Ext.isGecko && !Ext.isWindows) || (Ext.isOpera && Ext.operaVersion < 12)), getKeyEvent: function () {
        return b.useKeyDown ? "keydown" : "keypress"
    }});
    if (!h && document.attachEvent) {
        Ext.apply(b, {pollScroll: function () {
            var k = true;
            try {
                document.documentElement.doScroll("left")
            } catch (l) {
                k = false
            }
            if (k && document.body) {
                b.onReadyEvent({type: "doScroll"})
            } else {
                b.scrollTimeout = setTimeout(b.pollScroll, 20)
            }
            return k
        }, scrollTimeout: null, readyStatesRe: /complete/i, checkReadyState: function () {
            var k = document.readyState;
            if (b.readyStatesRe.test(k)) {
                b.onReadyEvent({type: k})
            }
        }, bindReadyEvent: function () {
            var k = true;
            if (b.hasBoundOnReady) {
                return
            }
            try {
                k = window.frameElement === undefined
            } catch (l) {
                k = false
            }
            if (!k || !i.documentElement.doScroll) {
                b.pollScroll = Ext.emptyFn
            }
            if (b.pollScroll() === true) {
                return
            }
            if (i.readyState == "complete") {
                b.onReadyEvent({type: "already " + (i.readyState || "body")})
            } else {
                i.attachEvent("onreadystatechange", b.checkReadyState);
                window.attachEvent("onload", b.onReadyEvent);
                b.hasBoundOnReady = true
            }
        }, onReadyEvent: function (k) {
            if (k && k.type) {
                b.onReadyChain.push(k.type)
            }
            if (b.hasBoundOnReady) {
                document.detachEvent("onreadystatechange", b.checkReadyState);
                window.detachEvent("onload", b.onReadyEvent)
            }
            if (Ext.isNumber(b.scrollTimeout)) {
                clearTimeout(b.scrollTimeout);
                delete b.scrollTimeout
            }
            if (!Ext.isReady) {
                b.fireDocReady()
            }
        }, onReadyChain: []})
    }
    Ext.onReady = function (m, l, k) {
        Ext.Loader.onReady(m, l, true, k)
    };
    Ext.onDocumentReady = b.onDocumentReady;
    b.on = b.addListener;
    b.un = b.removeListener;
    Ext.onReady(g)
}();
(Ext.cmd.derive("Ext.util.Observable", Ext.Base, function (a) {
    var e = Ext.emptyFn, d = [], g = Array.prototype, h = g.slice, c = Ext.util.Event, b = function (i) {
        if (i instanceof b) {
            return i
        }
        this.observable = i;
        if (arguments[1].isObservable) {
            this.managedListeners = true
        }
        this.args = h.call(arguments, 1)
    };
    b.prototype.destroy = function () {
        this.observable[this.managedListeners ? "mun" : "un"].apply(this.observable, this.args)
    };
    return{statics: {releaseCapture: function (i) {
        i.fireEventArgs = this.prototype.fireEventArgs
    }, capture: function (l, j, i) {
        var k = function (m, n) {
            return j.apply(i, [m].concat(n))
        };
        this.captureArgs(l, k, i)
    }, captureArgs: function (k, j, i) {
        k.fireEventArgs = Ext.Function.createInterceptor(k.fireEventArgs, j, i)
    }, observe: function (i, j) {
        if (i) {
            if (!i.isObservable) {
                Ext.applyIf(i, new this());
                this.captureArgs(i.prototype, i.fireEventArgs, i)
            }
            if (Ext.isObject(j)) {
                i.on(j)
            }
        }
        return i
    }, prepareClass: function (k, j) {
        if (!k.HasListeners) {
            var l = function () {
            }, i = k.superclass.HasListeners || (j && j.HasListeners) || a.HasListeners;
            k.prototype.HasListeners = k.HasListeners = l;
            l.prototype = k.hasListeners = new i()
        }
    }}, isObservable: true, eventsSuspended: 0, constructor: function (i) {
        var j = this;
        Ext.apply(j, i);
        if (!j.hasListeners) {
            j.hasListeners = new j.HasListeners()
        }
        j.events = j.events || {};
        if (j.listeners) {
            j.on(j.listeners);
            j.listeners = null
        }
        if (j.bubbleEvents) {
            j.enableBubble(j.bubbleEvents)
        }
    }, onClassExtended: function (i) {
        if (!i.HasListeners) {
            a.prepareClass(i)
        }
    }, eventOptionsRe: /^(?:scope|delay|buffer|single|stopEvent|preventDefault|stopPropagation|normalized|args|delegate|element|destroyable|vertical|horizontal|freezeEvent|priority)$/, addManagedListener: function (p, l, n, q, r, k) {
        var m = this, o = m.managedListeners = m.managedListeners || [], j, i;
        if (typeof l !== "string") {
            i = arguments.length > 4 ? r : l;
            r = l;
            for (l in r) {
                if (r.hasOwnProperty(l)) {
                    j = r[l];
                    if (!m.eventOptionsRe.test(l)) {
                        m.addManagedListener(p, l, j.fn || j, j.scope || r.scope || q, j.fn ? j : i, true)
                    }
                }
            }
            if (r && r.destroyable) {
                return new b(m, p, r)
            }
        } else {
            if (typeof n === "string") {
                q = q || m;
                n = Ext.resolveMethod(n, q)
            }
            if (n !== e) {
                o.push({item: p, ename: l, fn: n, scope: q, options: r});
                p.on(l, n, q, r);
                if (!k && r && r.destroyable) {
                    return new b(m, p, l, n, q)
                }
            }
        }
    }, removeManagedListener: function (q, l, o, r) {
        var n = this, s, k, p, j, m;
        if (typeof l !== "string") {
            s = l;
            for (l in s) {
                if (s.hasOwnProperty(l)) {
                    k = s[l];
                    if (!n.eventOptionsRe.test(l)) {
                        n.removeManagedListener(q, l, k.fn || k, k.scope || s.scope || r)
                    }
                }
            }
        } else {
            p = n.managedListeners ? n.managedListeners.slice() : [];
            if (typeof o === "string") {
                r = r || n;
                o = Ext.resolveMethod(o, r)
            }
            for (m = 0, j = p.length; m < j; m++) {
                n.removeManagedListenerItem(false, p[m], q, l, o, r)
            }
        }
    }, fireEvent: function (i) {
        return this.fireEventArgs(i, h.call(arguments, 1))
    }, fireEventArgs: function (i, k) {
        i = i.toLowerCase();
        var n = this, l = n.events, m = l && l[i], j = true;
        if (m && n.hasListeners[i]) {
            j = n.continueFireEvent(i, k || d, m.bubble)
        }
        return j
    }, continueFireEvent: function (k, m, j) {
        var o = this, i, n, l = true;
        do {
            if (o.eventsSuspended) {
                if ((i = o.eventQueue)) {
                    i.push([k, m, j])
                }
                return l
            } else {
                n = o.events[k];
                if (n && n !== true) {
                    if ((l = n.fire.apply(n, m)) === false) {
                        break
                    }
                }
            }
        } while (j && (o = o.getBubbleParent()));
        return l
    }, getBubbleParent: function () {
        var j = this, i = j.getBubbleTarget && j.getBubbleTarget();
        if (i && i.isObservable) {
            return i
        }
        return null
    }, addListener: function (l, n, m, k) {
        var p = this, j, o, i = 0;
        if (typeof l !== "string") {
            k = l;
            for (l in k) {
                if (k.hasOwnProperty(l)) {
                    j = k[l];
                    if (!p.eventOptionsRe.test(l)) {
                        p.addListener(l, j.fn || j, j.scope || k.scope, j.fn ? j : k)
                    }
                }
            }
            if (k && k.destroyable) {
                return new b(p, k)
            }
        } else {
            l = l.toLowerCase();
            o = p.events[l];
            if (o && o.isEvent) {
                i = o.listeners.length
            } else {
                p.events[l] = o = new c(p, l)
            }
            if (typeof n === "string") {
                m = m || p;
                n = Ext.resolveMethod(n, m)
            }
            if (n !== e) {
                o.addListener(n, m, k);
                if (o.listeners.length !== i) {
                    p.hasListeners._incr_(l)
                }
                if (k && k.destroyable) {
                    return new b(p, l, n, m, k)
                }
            }
        }
    }, removeListener: function (k, m, l) {
        var o = this, j, n, i;
        if (typeof k !== "string") {
            i = k;
            for (k in i) {
                if (i.hasOwnProperty(k)) {
                    j = i[k];
                    if (!o.eventOptionsRe.test(k)) {
                        o.removeListener(k, j.fn || j, j.scope || i.scope)
                    }
                }
            }
        } else {
            k = k.toLowerCase();
            n = o.events[k];
            if (n && n.isEvent) {
                if (typeof m === "string") {
                    l = l || o;
                    m = Ext.resolveMethod(m, l)
                }
                if (n.removeListener(m, l)) {
                    o.hasListeners._decr_(k)
                }
            }
        }
    }, clearListeners: function () {
        var k = this.events, i = this.hasListeners, l, j;
        for (j in k) {
            if (k.hasOwnProperty(j)) {
                l = k[j];
                if (l.isEvent) {
                    delete i[j];
                    l.clearListeners()
                }
            }
        }
        this.clearManagedListeners()
    }, clearManagedListeners: function () {
        var k = this.managedListeners || [], l = 0, j = k.length;
        for (; l < j; l++) {
            this.removeManagedListenerItem(true, k[l])
        }
        this.managedListeners = []
    }, removeManagedListenerItem: function (j, i, n, k, m, l) {
        if (j || (i.item === n && i.ename === k && (!m || i.fn === m) && (!l || i.scope === l))) {
            i.item.un(i.ename, i.fn, i.scope);
            if (!j) {
                Ext.Array.remove(this.managedListeners, i)
            }
        }
    }, addEvents: function (p) {
        var n = this, m = n.events || (n.events = {}), j, k, l;
        if (typeof p == "string") {
            for (k = arguments, l = k.length; l--;) {
                j = k[l];
                if (!m[j]) {
                    m[j] = true
                }
            }
        } else {
            Ext.applyIf(n.events, p)
        }
    }, hasListener: function (i) {
        return !!this.hasListeners[i.toLowerCase()]
    }, isSuspended: function (j) {
        var i = this.eventsSuspended > 0;
        if (!i && j) {
            j = this.events[j];
            if (j && j.isEvent) {
                return j.isSuspended()
            }
        }
        return i
    }, suspendEvents: function (i) {
        this.eventsSuspended += 1;
        if (i && !this.eventQueue) {
            this.eventQueue = []
        }
    }, suspendEvent: function (k) {
        var j = arguments.length, n = this.events, m, o, l;
        for (m = 0; m < j; m++) {
            l = arguments[m];
            o = n[l];
            if (!o || typeof o == "boolean") {
                n[l] = o = new c(this, l)
            }
            o.suspend()
        }
    }, resumeEvent: function () {
        var j = arguments.length, k, l;
        for (k = 0; k < j; k++) {
            l = this.events[arguments[k]];
            if (l && l.resume) {
                l.resume()
            }
        }
    }, resumeEvents: function () {
        var i = this, l = i.eventQueue, k, j;
        if (i.eventsSuspended && !--i.eventsSuspended) {
            delete i.eventQueue;
            if (l) {
                k = l.length;
                for (j = 0; j < k; j++) {
                    i.continueFireEvent.apply(i, l[j])
                }
            }
        }
    }, relayEvents: function (k, m, p) {
        var o = this, j = m.length, l = 0, n, q = {};
        for (; l < j; l++) {
            n = m[l];
            q[n] = o.createRelayer(p ? p + n : n)
        }
        o.mon(k, q, null, null, undefined);
        return new b(o, k, q)
    }, createRelayer: function (i, j) {
        var k = this;
        return function () {
            return k.fireEventArgs.call(k, i, j ? h.apply(arguments, j) : arguments)
        }
    }, enableBubble: function (q) {
        if (q) {
            var o = this, p = (typeof q == "string") ? arguments : q, n = p.length, l = o.events, k, m, j;
            for (j = 0; j < n; ++j) {
                k = p[j].toLowerCase();
                m = l[k];
                if (!m || typeof m == "boolean") {
                    l[k] = m = new c(o, k)
                }
                o.hasListeners._incr_(k);
                m.bubble = true
            }
        }
    }}
}, 1, 0, 0, 0, 0, 0, [Ext.util, "Observable"], function () {
    var b = this, e = b.prototype, c = function () {
    }, g = function (h) {
        if (!h.HasListeners) {
            var i = h.prototype;
            b.prepareClass(h, this);
            h.onExtended(function (j) {
                b.prepareClass(j)
            });
            if (i.onClassMixedIn) {
                Ext.override(h, {onClassMixedIn: function (j) {
                    g.call(this, j);
                    this.callParent(arguments)
                }})
            } else {
                i.onClassMixedIn = function (j) {
                    g.call(this, j)
                }
            }
        }
    }, a;
    c.prototype = {_decr_: function (h) {
        if (!--this[h]) {
            delete this[h]
        }
    }, _incr_: function (h) {
        if (this.hasOwnProperty(h)) {
            ++this[h]
        } else {
            this[h] = 1
        }
    }};
    e.HasListeners = b.HasListeners = c;
    b.createAlias({on: "addListener", un: "removeListener", mon: "addManagedListener", mun: "removeManagedListener"});
    b.observeClass = b.observe;
    Ext.globalEvents = a = new b({events: {idle: Ext.EventManager.idleEvent, ready: Ext.EventManager.readyEvent}});
    Ext.on = function () {
        return a.addListener.apply(a, arguments)
    };
    Ext.un = function () {
        return a.removeListener.apply(a, arguments)
    };
    function d(n) {
        var m = (this.methodEvents = this.methodEvents || {})[n], j, i, k, l = this, h;
        if (!m) {
            this.methodEvents[n] = m = {};
            m.originalFn = this[n];
            m.methodName = n;
            m.before = [];
            m.after = [];
            h = function (q, p, o) {
                if ((i = q.apply(p || l, o)) !== undefined) {
                    if (typeof i == "object") {
                        if (i.returnValue !== undefined) {
                            j = i.returnValue
                        } else {
                            j = i
                        }
                        k = !!i.cancel
                    } else {
                        if (i === false) {
                            k = true
                        } else {
                            j = i
                        }
                    }
                }
            };
            this[n] = function () {
                var q = Array.prototype.slice.call(arguments, 0), p, r, o;
                j = i = undefined;
                k = false;
                for (r = 0, o = m.before.length; r < o; r++) {
                    p = m.before[r];
                    h(p.fn, p.scope, q);
                    if (k) {
                        return j
                    }
                }
                if ((i = m.originalFn.apply(l, q)) !== undefined) {
                    j = i
                }
                for (r = 0, o = m.after.length; r < o; r++) {
                    p = m.after[r];
                    h(p.fn, p.scope, q);
                    if (k) {
                        return j
                    }
                }
                return j
            }
        }
        return m
    }

    Ext.apply(e, {onClassMixedIn: g, beforeMethod: function (j, i, h) {
        d.call(this, j).before.push({fn: i, scope: h})
    }, afterMethod: function (j, i, h) {
        d.call(this, j).after.push({fn: i, scope: h})
    }, removeMethodListener: function (n, l, k) {
        var m = this.getMethodEvent(n), j, h;
        for (j = 0, h = m.before.length; j < h; j++) {
            if (m.before[j].fn == l && m.before[j].scope == k) {
                Ext.Array.erase(m.before, j, 1);
                return
            }
        }
        for (j = 0, h = m.after.length; j < h; j++) {
            if (m.after[j].fn == l && m.after[j].scope == k) {
                Ext.Array.erase(m.after, j, 1);
                return
            }
        }
    }, toggleEventLogging: function (h) {
        Ext.util.Observable[h ? "capture" : "releaseCapture"](this, function (i) {
            if (Ext.isDefined(Ext.global.console)) {
                Ext.global.console.log(i, arguments)
            }
        })
    }})
}));
(Ext.cmd.derive("Ext.EventObjectImpl", Ext.Base, {BACKSPACE: 8, TAB: 9, NUM_CENTER: 12, ENTER: 13, RETURN: 13, SHIFT: 16, CTRL: 17, ALT: 18, PAUSE: 19, CAPS_LOCK: 20, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, PRINT_SCREEN: 44, INSERT: 45, DELETE: 46, ZERO: 48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, CONTEXT_MENU: 93, NUM_ZERO: 96, NUM_ONE: 97, NUM_TWO: 98, NUM_THREE: 99, NUM_FOUR: 100, NUM_FIVE: 101, NUM_SIX: 102, NUM_SEVEN: 103, NUM_EIGHT: 104, NUM_NINE: 105, NUM_MULTIPLY: 106, NUM_PLUS: 107, NUM_MINUS: 109, NUM_PERIOD: 110, NUM_DIVISION: 111, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, WHEEL_SCALE: (function () {
    var a;
    if (Ext.isGecko) {
        a = 3
    } else {
        if (Ext.isMac) {
            if (Ext.isSafari && Ext.webKitVersion >= 532) {
                a = 120
            } else {
                a = 12
            }
            a *= 3
        } else {
            a = 120
        }
    }
    return a
}()), clickRe: /(dbl)?click/, safariKeys: {3: 13, 63234: 37, 63235: 39, 63232: 38, 63233: 40, 63276: 33, 63277: 34, 63272: 46, 63273: 36, 63275: 35}, btnMap: Ext.isIE9m ? {1: 0, 4: 1, 2: 2} : {0: 0, 1: 1, 2: 2}, isEvent: true, constructor: function (a, b) {
    if (a) {
        this.setEvent(a.browserEvent || a, b)
    }
}, setEvent: function (c, d) {
    var b = this, a;
    if (c === b || (c && c.browserEvent)) {
        return c
    }
    b.browserEvent = c;
    if (c) {
        a = c.button ? b.btnMap[c.button] : (c.which ? c.which - 1 : -1);
        if (b.clickRe.test(c.type) && a == -1) {
            a = 0
        }
        b.type = c.type;
        b.button = a;
        b.shiftKey = c.shiftKey;
        b.ctrlKey = c.ctrlKey || c.metaKey || false;
        b.altKey = c.altKey;
        b.keyCode = c.keyCode;
        b.charCode = c.charCode;
        b.target = Ext.EventManager.getTarget(c);
        b.relatedTarget = Ext.EventManager.getRelatedTarget(c);
        b.currentTarget = c.currentTarget;
        b.xy = (d ? b.getXY() : null)
    } else {
        b.button = -1;
        b.shiftKey = false;
        b.ctrlKey = false;
        b.altKey = false;
        b.keyCode = 0;
        b.charCode = 0;
        b.target = null;
        b.xy = [0, 0]
    }
    return b
}, clone: function () {
    return new this.self(this.browserEvent, this)
}, stopEvent: function () {
    this.stopPropagation();
    this.preventDefault()
}, preventDefault: function () {
    if (this.browserEvent) {
        Ext.EventManager.preventDefault(this.browserEvent)
    }
}, stopPropagation: function () {
    var a = this.browserEvent;
    if (a) {
        if (a.type == "mousedown") {
            Ext.EventManager.stoppedMouseDownEvent.fire(this)
        }
        Ext.EventManager.stopPropagation(a)
    }
}, getCharCode: function () {
    return this.charCode || this.keyCode
}, getKey: function () {
    return this.normalizeKey(this.keyCode || this.charCode)
}, normalizeKey: function (a) {
    return Ext.isWebKit ? (this.safariKeys[a] || a) : a
}, getPageX: function () {
    return this.getX()
}, getPageY: function () {
    return this.getY()
}, getX: function () {
    return this.getXY()[0]
}, getY: function () {
    return this.getXY()[1]
}, getXY: function () {
    if (!this.xy) {
        this.xy = Ext.EventManager.getPageXY(this.browserEvent)
    }
    return this.xy
}, getTarget: function (b, c, a) {
    if (b) {
        return Ext.fly(this.target).findParent(b, c, a)
    }
    return a ? Ext.get(this.target) : this.target
}, getRelatedTarget: function (b, c, a) {
    if (b && this.relatedTarget) {
        return Ext.fly(this.relatedTarget).findParent(b, c, a)
    }
    return a ? Ext.get(this.relatedTarget) : this.relatedTarget
}, correctWheelDelta: function (c) {
    var b = this.WHEEL_SCALE, a = Math.round(c / b);
    if (!a && c) {
        a = (c < 0) ? -1 : 1
    }
    return a
}, getWheelDeltas: function () {
    var d = this, c = d.browserEvent, b = 0, a = 0;
    if (Ext.isDefined(c.wheelDeltaX)) {
        b = c.wheelDeltaX;
        a = c.wheelDeltaY
    } else {
        if (c.wheelDelta) {
            a = c.wheelDelta
        } else {
            if (c.detail) {
                a = -c.detail;
                if (a > 100) {
                    a = 3
                } else {
                    if (a < -100) {
                        a = -3
                    }
                }
                if (Ext.isDefined(c.axis) && c.axis === c.HORIZONTAL_AXIS) {
                    b = a;
                    a = 0
                }
            }
        }
    }
    return{x: d.correctWheelDelta(b), y: d.correctWheelDelta(a)}
}, getWheelDelta: function () {
    var a = this.getWheelDeltas();
    return a.y
}, within: function (d, e, b) {
    if (d) {
        var c = e ? this.getRelatedTarget() : this.getTarget(), a;
        if (c) {
            a = Ext.fly(d, "_internal").contains(c);
            if (!a && b) {
                a = c == Ext.getDom(d)
            }
            return a
        }
    }
    return false
}, isNavKeyPress: function () {
    var b = this, a = this.normalizeKey(b.keyCode);
    return(a >= 33 && a <= 40) || a == b.RETURN || a == b.TAB || a == b.ESC
}, isSpecialKey: function () {
    var a = this.normalizeKey(this.keyCode);
    return(this.type == "keypress" && this.ctrlKey) || this.isNavKeyPress() || (a == this.BACKSPACE) || (a >= 16 && a <= 20) || (a >= 44 && a <= 46)
}, getPoint: function () {
    var a = this.getXY();
    return new Ext.util.Point(a[0], a[1])
}, hasModifier: function () {
    var a = this;
    return !!(a.ctrlKey || a.altKey || a.shiftKey || a.metaKey)
}, injectEvent: (function () {
    var d, e = {}, c;
    if (!Ext.isIE9m && document.createEvent) {
        d = {createHtmlEvent: function (k, i, h, g) {
            var j = k.createEvent("HTMLEvents");
            j.initEvent(i, h, g);
            return j
        }, createMouseEvent: function (u, s, m, l, o, k, i, j, g, r, q, n, p) {
            var h = u.createEvent("MouseEvents"), t = u.defaultView || window;
            if (h.initMouseEvent) {
                h.initMouseEvent(s, m, l, t, o, k, i, k, i, j, g, r, q, n, p)
            } else {
                h = u.createEvent("UIEvents");
                h.initEvent(s, m, l);
                h.view = t;
                h.detail = o;
                h.screenX = k;
                h.screenY = i;
                h.clientX = k;
                h.clientY = i;
                h.ctrlKey = j;
                h.altKey = g;
                h.metaKey = q;
                h.shiftKey = r;
                h.button = n;
                h.relatedTarget = p
            }
            return h
        }, createUIEvent: function (m, k, i, h, j) {
            var l = m.createEvent("UIEvents"), g = m.defaultView || window;
            l.initUIEvent(k, i, h, g, j);
            return l
        }, fireEvent: function (i, g, h) {
            i.dispatchEvent(h)
        }, fixTarget: function (g) {
            if (g == window && !g.dispatchEvent) {
                return document
            }
            return g
        }}
    } else {
        if (document.createEventObject) {
            c = {0: 1, 1: 4, 2: 2};
            d = {createHtmlEvent: function (k, i, h, g) {
                var j = k.createEventObject();
                j.bubbles = h;
                j.cancelable = g;
                return j
            }, createMouseEvent: function (t, s, m, l, o, k, i, j, g, r, q, n, p) {
                var h = t.createEventObject();
                h.bubbles = m;
                h.cancelable = l;
                h.detail = o;
                h.screenX = k;
                h.screenY = i;
                h.clientX = k;
                h.clientY = i;
                h.ctrlKey = j;
                h.altKey = g;
                h.shiftKey = r;
                h.metaKey = q;
                h.button = c[n] || n;
                h.relatedTarget = p;
                return h
            }, createUIEvent: function (l, j, h, g, i) {
                var k = l.createEventObject();
                k.bubbles = h;
                k.cancelable = g;
                return k
            }, fireEvent: function (i, g, h) {
                i.fireEvent("on" + g, h)
            }, fixTarget: function (g) {
                if (g == document) {
                    return document.documentElement
                }
                return g
            }}
        }
    }
    Ext.Object.each({load: [false, false], unload: [false, false], select: [true, false], change: [true, false], submit: [true, true], reset: [true, false], resize: [true, false], scroll: [true, false]}, function (i, j) {
        var h = j[0], g = j[1];
        e[i] = function (m, k) {
            var l = d.createHtmlEvent(i, h, g);
            d.fireEvent(m, i, l)
        }
    });
    function b(i, h) {
        var g = (i != "mousemove");
        return function (m, j) {
            var l = j.getXY(), k = d.createMouseEvent(m.ownerDocument, i, true, g, h, l[0], l[1], j.ctrlKey, j.altKey, j.shiftKey, j.metaKey, j.button, j.relatedTarget);
            d.fireEvent(m, i, k)
        }
    }

    Ext.each(["click", "dblclick", "mousedown", "mouseup", "mouseover", "mousemove", "mouseout"], function (g) {
        e[g] = b(g, 1)
    });
    Ext.Object.each({focusin: [true, false], focusout: [true, false], activate: [true, true], focus: [false, false], blur: [false, false]}, function (i, j) {
        var h = j[0], g = j[1];
        e[i] = function (m, k) {
            var l = d.createUIEvent(m.ownerDocument, i, h, g, 1);
            d.fireEvent(m, i, l)
        }
    });
    if (!d) {
        e = {};
        d = {fixTarget: Ext.identityFn}
    }
    function a(h, g) {
    }

    return function (j) {
        var i = this, h = e[i.type] || a, g = j ? (j.dom || j) : i.getTarget();
        g = d.fixTarget(g);
        h(g, i)
    }
}())}, 1, 0, 0, 0, 0, 0, [Ext, "EventObjectImpl"], function () {
    Ext.EventObject = new Ext.EventObjectImpl()
}));
(Ext.cmd.derive("Ext.dom.AbstractQuery", Ext.Base, {select: function (k, b) {
    var h = [], d, g, e, c, a;
    b = b || document;
    if (typeof b == "string") {
        b = document.getElementById(b)
    }
    k = Ext.splitAndUnescape(k, ",");
    for (g = 0, c = k.length; g < c; g++) {
        if (typeof k[g] == "string") {
            if (typeof k[g][0] == "@") {
                d = b.getAttributeNode(k[g].substring(1));
                h.push(d)
            } else {
                d = b.querySelectorAll(k[g]);
                for (e = 0, a = d.length; e < a; e++) {
                    h.push(d[e])
                }
            }
        }
    }
    return h
}, selectNode: function (b, a) {
    return this.select(b, a)[0]
}, is: function (a, b) {
    if (typeof a == "string") {
        a = document.getElementById(a)
    }
    return this.select(b).indexOf(a) !== -1
}}, 0, 0, 0, 0, 0, 0, [Ext.dom, "AbstractQuery"], 0));
(Ext.cmd.derive("Ext.dom.AbstractHelper", Ext.Base, {emptyTags: /^(?:br|frame|hr|img|input|link|meta|range|spacer|wbr|area|param|col)$/i, confRe: /^(?:tag|children|cn|html|tpl|tplData)$/i, endRe: /end/i, styleSepRe: /\s*(?::|;)\s*/, attributeTransform: {cls: "class", htmlFor: "for"}, closeTags: {}, decamelizeName: (function () {
    var c = /([a-z])([A-Z])/g, b = {};

    function a(d, g, e) {
        return g + "-" + e.toLowerCase()
    }

    return function (d) {
        return b[d] || (b[d] = d.replace(c, a))
    }
}()), generateMarkup: function (j, b) {
    var h = this, g = typeof j, e, a, k, d, c;
    if (g == "string" || g == "number") {
        b.push(j)
    } else {
        if (Ext.isArray(j)) {
            for (d = 0; d < j.length; d++) {
                if (j[d]) {
                    h.generateMarkup(j[d], b)
                }
            }
        } else {
            k = j.tag || "div";
            b.push("<", k);
            for (e in j) {
                if (j.hasOwnProperty(e)) {
                    a = j[e];
                    if (!h.confRe.test(e)) {
                        if (typeof a == "object") {
                            b.push(" ", e, '="');
                            h.generateStyles(a, b, true).push('"')
                        } else {
                            b.push(" ", h.attributeTransform[e] || e, '="', a, '"')
                        }
                    }
                }
            }
            if (h.emptyTags.test(k)) {
                b.push("/>")
            } else {
                b.push(">");
                if ((a = j.tpl)) {
                    a.applyOut(j.tplData, b)
                }
                if ((a = j.html)) {
                    b.push(a)
                }
                if ((a = j.cn || j.children)) {
                    h.generateMarkup(a, b)
                }
                c = h.closeTags;
                b.push(c[k] || (c[k] = "</" + k + ">"))
            }
        }
    }
    return b
}, generateStyles: function (g, c, e) {
    var b = c || [], d, h;
    for (d in g) {
        if (g.hasOwnProperty(d)) {
            h = g[d];
            d = this.decamelizeName(d);
            if (e && Ext.String.hasHtmlCharacters(h)) {
                h = Ext.String.htmlEncode(h)
            }
            b.push(d, ":", h, ";")
        }
    }
    return c || b.join("")
}, markup: function (a) {
    if (typeof a == "string") {
        return a
    }
    var b = this.generateMarkup(a, []);
    return b.join("")
}, applyStyles: function (c, d) {
    if (d) {
        var b = 0, a;
        c = Ext.fly(c, "_applyStyles");
        if (typeof d == "function") {
            d = d.call()
        }
        if (typeof d == "string") {
            d = Ext.util.Format.trim(d).split(this.styleSepRe);
            for (a = d.length; b < a;) {
                c.setStyle(d[b++], d[b++])
            }
        } else {
            if (Ext.isObject(d)) {
                c.setStyle(d)
            }
        }
    }
}, insertHtml: function (c, g, d) {
    var h = {}, a, b, i, e;
    c = c.toLowerCase();
    h.beforebegin = ["BeforeBegin", "previousSibling"];
    h.afterend = ["AfterEnd", "nextSibling"];
    b = g.ownerDocument.createRange();
    a = "setStart" + (this.endRe.test(c) ? "After" : "Before");
    if (h[c]) {
        b[a](g);
        i = b.createContextualFragment(d);
        g.parentNode.insertBefore(i, c == "beforebegin" ? g : g.nextSibling);
        return g[(c == "beforebegin" ? "previous" : "next") + "Sibling"]
    } else {
        e = (c == "afterbegin" ? "first" : "last") + "Child";
        if (g.firstChild) {
            b[a](g[e]);
            i = b.createContextualFragment(d);
            if (c == "afterbegin") {
                g.insertBefore(i, g.firstChild)
            } else {
                g.appendChild(i)
            }
        } else {
            g.innerHTML = d
        }
        return g[e]
    }
    throw'Illegal insertion point -> "' + c + '"'
}, insertBefore: function (a, c, b) {
    return this.doInsert(a, c, b, "beforebegin")
}, insertAfter: function (a, c, b) {
    return this.doInsert(a, c, b, "afterend", "nextSibling")
}, insertFirst: function (a, c, b) {
    return this.doInsert(a, c, b, "afterbegin", "firstChild")
}, append: function (a, c, b) {
    return this.doInsert(a, c, b, "beforeend", "", true)
}, overwrite: function (a, c, b) {
    a = Ext.getDom(a);
    a.innerHTML = this.markup(c);
    return b ? Ext.get(a.firstChild) : a.firstChild
}, doInsert: function (d, g, e, h, c, a) {
    var b = this.insertHtml(h, Ext.getDom(d), this.markup(g));
    return e ? Ext.get(b, true) : b
}}, 0, 0, 0, 0, 0, 0, [Ext.dom, "AbstractHelper"], 0));
Ext.define("Ext.dom.AbstractElement_static", {override: "Ext.dom.AbstractElement", inheritableStatics: {unitRe: /\d+(px|em|%|en|ex|pt|in|cm|mm|pc)$/i, camelRe: /(-[a-z])/gi, msRe: /^-ms-/, cssRe: /([a-z0-9\-]+)\s*:\s*([^;\s]+(?:\s*[^;\s]+)*)?;?/gi, opacityRe: /alpha\(opacity=(.*)\)/i, propertyCache: {}, defaultUnit: "px", borders: {l: "border-left-width", r: "border-right-width", t: "border-top-width", b: "border-bottom-width"}, paddings: {l: "padding-left", r: "padding-right", t: "padding-top", b: "padding-bottom"}, margins: {l: "margin-left", r: "margin-right", t: "margin-top", b: "margin-bottom"}, addUnits: function (b, a) {
    if (typeof b == "number") {
        return b + (a || this.defaultUnit || "px")
    }
    if (b === "" || b == "auto" || b === undefined || b === null) {
        return b || ""
    }
    if (!this.unitRe.test(b)) {
        return b || ""
    }
    return b
}, isAncestor: function (b, d) {
    var a = false;
    b = Ext.getDom(b);
    d = Ext.getDom(d);
    if (b && d) {
        if (b.contains) {
            return b.contains(d)
        } else {
            if (b.compareDocumentPosition) {
                return !!(b.compareDocumentPosition(d) & 16)
            } else {
                while ((d = d.parentNode)) {
                    a = d == b || a
                }
            }
        }
    }
    return a
}, parseBox: function (c) {
    c = c || 0;
    var a = typeof c, d, b;
    if (a === "number") {
        return{top: c, right: c, bottom: c, left: c}
    } else {
        if (a !== "string") {
            return c
        }
    }
    d = c.split(" ");
    b = d.length;
    if (b == 1) {
        d[1] = d[2] = d[3] = d[0]
    } else {
        if (b == 2) {
            d[2] = d[0];
            d[3] = d[1]
        } else {
            if (b == 3) {
                d[3] = d[1]
            }
        }
    }
    return{top: parseFloat(d[0]) || 0, right: parseFloat(d[1]) || 0, bottom: parseFloat(d[2]) || 0, left: parseFloat(d[3]) || 0}
}, unitizeBox: function (g, e) {
    var d = this.addUnits, c = this.parseBox(g);
    return d(c.top, e) + " " + d(c.right, e) + " " + d(c.bottom, e) + " " + d(c.left, e)
}, camelReplaceFn: function (b, c) {
    return c.charAt(1).toUpperCase()
}, normalize: function (a) {
    if (a == "float") {
        a = Ext.supports.Float ? "cssFloat" : "styleFloat"
    }
    return this.propertyCache[a] || (this.propertyCache[a] = a.replace(this.msRe, "ms-").replace(this.camelRe, this.camelReplaceFn))
}, getDocumentHeight: function () {
    return Math.max(!Ext.isStrict ? document.body.scrollHeight : document.documentElement.scrollHeight, this.getViewportHeight())
}, getDocumentWidth: function () {
    return Math.max(!Ext.isStrict ? document.body.scrollWidth : document.documentElement.scrollWidth, this.getViewportWidth())
}, getViewportHeight: function () {
    return window.innerHeight
}, getViewportWidth: function () {
    return window.innerWidth
}, getViewSize: function () {
    return{width: window.innerWidth, height: window.innerHeight}
}, getOrientation: function () {
    if (Ext.supports.OrientationChange) {
        return(window.orientation == 0) ? "portrait" : "landscape"
    }
    return(window.innerHeight > window.innerWidth) ? "portrait" : "landscape"
}, fromPoint: function (a, b) {
    return Ext.get(document.elementFromPoint(a, b))
}, parseStyles: function (c) {
    var a = {}, b = this.cssRe, d;
    if (c) {
        b.lastIndex = 0;
        while ((d = b.exec(c))) {
            a[d[1]] = d[2] || ""
        }
    }
    return a
}}}, function () {
    var c = document, b = null, a = c.compatMode == "CSS1Compat";
    if (!("activeElement" in c) && c.addEventListener) {
        c.addEventListener("focus", function (e) {
            if (e && e.target) {
                b = (e.target == c) ? null : e.target
            }
        }, true)
    }
    function d(g, h, e) {
        return function () {
            g.selectionStart = h;
            g.selectionEnd = e
        }
    }

    this.addInheritableStatics({getActiveElement: function () {
        var h;
        try {
            h = c.activeElement
        } catch (g) {
        }
        h = h || b;
        if (!h) {
            h = b = document.body
        }
        return h
    }, getRightMarginFixCleaner: function (k) {
        var h = Ext.supports, i = h.DisplayChangeInputSelectionBug, j = h.DisplayChangeTextAreaSelectionBug, l, e, m, g;
        if (i || j) {
            l = c.activeElement || b;
            e = l && l.tagName;
            if ((j && e == "TEXTAREA") || (i && e == "INPUT" && l.type == "text")) {
                if (Ext.dom.Element.isAncestor(k, l)) {
                    m = l.selectionStart;
                    g = l.selectionEnd;
                    if (Ext.isNumber(m) && Ext.isNumber(g)) {
                        return d(l, m, g)
                    }
                }
            }
        }
        return Ext.emptyFn
    }, getViewWidth: function (e) {
        return e ? Ext.dom.Element.getDocumentWidth() : Ext.dom.Element.getViewportWidth()
    }, getViewHeight: function (e) {
        return e ? Ext.dom.Element.getDocumentHeight() : Ext.dom.Element.getViewportHeight()
    }, getDocumentHeight: function () {
        return Math.max(!a ? c.body.scrollHeight : c.documentElement.scrollHeight, Ext.dom.Element.getViewportHeight())
    }, getDocumentWidth: function () {
        return Math.max(!a ? c.body.scrollWidth : c.documentElement.scrollWidth, Ext.dom.Element.getViewportWidth())
    }, getViewportHeight: function () {
        return Ext.isIE9m ? (Ext.isStrict ? c.documentElement.clientHeight : c.body.clientHeight) : self.innerHeight
    }, getViewportWidth: function () {
        return(!Ext.isStrict && !Ext.isOpera) ? c.body.clientWidth : Ext.isIE9m ? c.documentElement.clientWidth : self.innerWidth
    }, serializeForm: function (i) {
        var j = i.elements || (document.forms[i] || Ext.getDom(i)).elements, t = false, s = encodeURIComponent, m = "", l = j.length, n, g, r, v, u, p, k, q, h;
        for (p = 0; p < l; p++) {
            n = j[p];
            g = n.name;
            r = n.type;
            v = n.options;
            if (!n.disabled && g) {
                if (/select-(one|multiple)/i.test(r)) {
                    q = v.length;
                    for (k = 0; k < q; k++) {
                        h = v[k];
                        if (h.selected) {
                            u = h.hasAttribute ? h.hasAttribute("value") : h.getAttributeNode("value").specified;
                            m += Ext.String.format("{0}={1}&", s(g), s(u ? h.value : h.text))
                        }
                    }
                } else {
                    if (!(/file|undefined|reset|button/i.test(r))) {
                        if (!(/radio|checkbox/i.test(r) && !n.checked) && !(r == "submit" && t)) {
                            m += s(g) + "=" + s(n.value) + "&";
                            t = /submit/i.test(r)
                        }
                    }
                }
            }
        }
        return m.substr(0, m.length - 1)
    }})
});
Ext.define("Ext.dom.AbstractElement_insertion", {override: "Ext.dom.AbstractElement", appendChild: function (d, c) {
    var g = this, i, b, h, a;
    if (d.nodeType || d.dom || typeof d == "string") {
        d = Ext.getDom(d);
        g.dom.appendChild(d);
        return !c ? Ext.get(d) : d
    } else {
        if (d.length) {
            i = Ext.fly(document.createDocumentFragment(), "_internal");
            b = d.length;
            Ext.DomHelper.useDom = true;
            for (h = 0; h < b; h++) {
                i.appendChild(d[h], c)
            }
            Ext.DomHelper.useDom = a;
            g.dom.appendChild(i.dom);
            return c ? i.dom : i
        } else {
            return g.createChild(d, null, c)
        }
    }
}, appendTo: function (a) {
    Ext.getDom(a).appendChild(this.dom);
    return this
}, insertBefore: function (a) {
    a = Ext.getDom(a);
    a.parentNode.insertBefore(this.dom, a);
    return this
}, insertAfter: function (a) {
    a = Ext.getDom(a);
    a.parentNode.insertBefore(this.dom, a.nextSibling);
    return this
}, insertFirst: function (b, a) {
    b = b || {};
    if (b.nodeType || b.dom || typeof b == "string") {
        b = Ext.getDom(b);
        this.dom.insertBefore(b, this.dom.firstChild);
        return !a ? Ext.get(b) : b
    } else {
        return this.createChild(b, this.dom.firstChild, a)
    }
}, insertSibling: function (b, g, j) {
    var i = this, k = Ext.core.DomHelper, l = k.useDom, m = (g || "before").toLowerCase() == "after", d, a, c, h;
    if (Ext.isArray(b)) {
        a = Ext.fly(document.createDocumentFragment(), "_internal");
        c = b.length;
        k.useDom = true;
        for (h = 0; h < c; h++) {
            d = a.appendChild(b[h], j)
        }
        k.useDom = l;
        i.dom.parentNode.insertBefore(a.dom, m ? i.dom.nextSibling : i.dom);
        return d
    }
    b = b || {};
    if (b.nodeType || b.dom) {
        d = i.dom.parentNode.insertBefore(Ext.getDom(b), m ? i.dom.nextSibling : i.dom);
        if (!j) {
            d = Ext.get(d)
        }
    } else {
        if (m && !i.dom.nextSibling) {
            d = k.append(i.dom.parentNode, b, !j)
        } else {
            d = k[m ? "insertAfter" : "insertBefore"](i.dom, b, !j)
        }
    }
    return d
}, replace: function (a) {
    a = Ext.get(a);
    this.insertBefore(a);
    a.remove();
    return this
}, replaceWith: function (a) {
    var b = this;
    if (a.nodeType || a.dom || typeof a == "string") {
        a = Ext.get(a);
        b.dom.parentNode.insertBefore(a.dom, b.dom)
    } else {
        a = Ext.core.DomHelper.insertBefore(b.dom, a)
    }
    delete Ext.cache[b.id];
    Ext.removeNode(b.dom);
    b.id = Ext.id(b.dom = a);
    Ext.dom.AbstractElement.addToCache(b.isFlyweight ? new Ext.dom.AbstractElement(b.dom) : b);
    return b
}, createChild: function (b, a, c) {
    b = b || {tag: "div"};
    if (a) {
        return Ext.core.DomHelper.insertBefore(a, b, c !== true)
    } else {
        return Ext.core.DomHelper.append(this.dom, b, c !== true)
    }
}, wrap: function (b, c, a) {
    var e = Ext.core.DomHelper.insertBefore(this.dom, b || {tag: "div"}, true), d = e;
    if (a) {
        d = Ext.DomQuery.selectNode(a, e.dom)
    }
    d.appendChild(this.dom);
    return c ? e.dom : e
}, insertHtml: function (b, c, a) {
    var d = Ext.core.DomHelper.insertHtml(b, this.dom, c);
    return a ? Ext.get(d) : d
}});
Ext.define("Ext.dom.AbstractElement_style", {override: "Ext.dom.AbstractElement"}, function () {
    var d = this, m = /\w/g, q = /\s+/, c = /^(?:transparent|(?:rgba[(](?:\s*\d+\s*[,]){3}\s*0\s*[)]))$/i, j = Ext.supports.ClassList, e = "padding", i = "margin", a = "border", r = "-left", b = "-right", o = "-top", k = "-bottom", p = "-width", l = {l: a + r + p, r: a + b + p, t: a + o + p, b: a + k + p}, g = {l: e + r, r: e + b, t: e + o, b: e + k}, n = {l: i + r, r: i + b, t: i + o, b: i + k}, h = new d.Fly();
    Ext.override(d, {styleHooks: {}, addStyles: function (z, y) {
        var u = 0, x = (z || "").match(m), w, s = x.length, v, t = [];
        if (s == 1) {
            u = Math.abs(parseFloat(this.getStyle(y[x[0]])) || 0)
        } else {
            if (s) {
                for (w = 0; w < s; w++) {
                    v = x[w];
                    t.push(y[v])
                }
                t = this.getStyle(t);
                for (w = 0; w < s; w++) {
                    v = x[w];
                    u += Math.abs(parseFloat(t[y[v]]) || 0)
                }
            }
        }
        return u
    }, addCls: (function () {
        var t = function (z) {
            var A = this, w = A.dom, u = A.trimRe, B = z, v, C, x, y, D;
            if (typeof(z) == "string") {
                z = z.replace(u, "").split(q)
            }
            if (w && z && !!(y = z.length)) {
                if (!w.className) {
                    w.className = z.join(" ")
                } else {
                    v = w.classList;
                    if (v) {
                        for (x = 0; x < y; ++x) {
                            D = z[x];
                            if (D) {
                                if (!v.contains(D)) {
                                    if (C) {
                                        C.push(D)
                                    } else {
                                        C = w.className.replace(u, "");
                                        C = C ? [C, D] : [D]
                                    }
                                }
                            }
                        }
                        if (C) {
                            w.className = C.join(" ")
                        }
                    } else {
                        s(B)
                    }
                }
            }
            return A
        }, s = function (v) {
            var w = this, x = w.dom, u;
            if (x && v && v.length) {
                u = Ext.Element.mergeClsList(x.className, v);
                if (u.changed) {
                    x.className = u.join(" ")
                }
            }
            return w
        };
        return j ? t : s
    })(), removeCls: function (u) {
        var v = this, x = v.dom, w, s, t;
        if (typeof(u) == "string") {
            u = u.replace(v.trimRe, "").split(q)
        }
        if (x && x.className && u && !!(s = u.length)) {
            w = x.classList;
            if (s === 1 && w) {
                if (u[0]) {
                    w.remove(u[0])
                }
            } else {
                t = Ext.Element.removeCls(x.className, u);
                if (t.changed) {
                    x.className = t.join(" ")
                }
            }
        }
        return v
    }, radioCls: function (w) {
        var x = this.dom.parentNode.childNodes, t, u, s;
        w = Ext.isArray(w) ? w : [w];
        for (u = 0, s = x.length; u < s; u++) {
            t = x[u];
            if (t && t.nodeType == 1) {
                h.attach(t).removeCls(w)
            }
        }
        return this.addCls(w)
    }, toggleCls: (function () {
        var s = function (u) {
            var v = this, x = v.dom, w;
            if (x) {
                u = u.replace(v.trimRe, "");
                if (u) {
                    w = x.classList;
                    if (w) {
                        w.toggle(u)
                    } else {
                        t(u)
                    }
                }
            }
            return v
        }, t = function (u) {
            return this.hasCls(u) ? this.removeCls(u) : this.addCls(u)
        };
        return j ? s : t
    })(), hasCls: (function () {
        var s = function (v) {
            var x = this.dom, u = false, w;
            if (x && v) {
                w = x.classList;
                if (w) {
                    u = w.contains(v)
                } else {
                    u = t(v)
                }
            }
            return u
        }, t = function (u) {
            var v = this.dom;
            return v ? u && (" " + v.className + " ").indexOf(" " + u + " ") !== -1 : false
        };
        return j ? s : t
    })(), replaceCls: function (t, s) {
        return this.removeCls(t).addCls(s)
    }, isStyle: function (s, t) {
        return this.getStyle(s) == t
    }, getStyle: function (E, z) {
        var A = this, v = A.dom, H = typeof E != "string", F = A.styleHooks, t = E, B = t, y = 1, x, G, D, C, u, s, w;
        if (H) {
            D = {};
            t = B[0];
            w = 0;
            if (!(y = B.length)) {
                return D
            }
        }
        if (!v || v.documentElement) {
            return D || ""
        }
        x = v.style;
        if (z) {
            s = x
        } else {
            s = v.ownerDocument.defaultView.getComputedStyle(v, null);
            if (!s) {
                z = true;
                s = x
            }
        }
        do {
            C = F[t];
            if (!C) {
                F[t] = C = {name: d.normalize(t)}
            }
            if (C.get) {
                u = C.get(v, A, z, s)
            } else {
                G = C.name;
                u = s[G]
            }
            if (!H) {
                return u
            }
            D[t] = u;
            t = B[++w]
        } while (w < y);
        return D
    }, getStyles: function () {
        var t = Ext.Array.slice(arguments), s = t.length, u;
        if (s && typeof t[s - 1] == "boolean") {
            u = t.pop()
        }
        return this.getStyle(t, u)
    }, isTransparent: function (t) {
        var s = this.getStyle(t);
        return s ? c.test(s) : false
    }, setStyle: function (z, x) {
        var v = this, y = v.dom, s = v.styleHooks, u = y.style, t = z, w;
        if (typeof t == "string") {
            w = s[t];
            if (!w) {
                s[t] = w = {name: d.normalize(t)}
            }
            x = (x == null) ? "" : x;
            if (w.set) {
                w.set(y, x, v)
            } else {
                u[w.name] = x
            }
            if (w.afterSet) {
                w.afterSet(y, x, v)
            }
        } else {
            for (t in z) {
                if (z.hasOwnProperty(t)) {
                    w = s[t];
                    if (!w) {
                        s[t] = w = {name: d.normalize(t)}
                    }
                    x = z[t];
                    x = (x == null) ? "" : x;
                    if (w.set) {
                        w.set(y, x, v)
                    } else {
                        u[w.name] = x
                    }
                    if (w.afterSet) {
                        w.afterSet(y, x, v)
                    }
                }
            }
        }
        return v
    }, getHeight: function (t) {
        var u = this.dom, s = t ? (u.clientHeight - this.getPadding("tb")) : u.offsetHeight;
        return s > 0 ? s : 0
    }, getWidth: function (s) {
        var u = this.dom, t = s ? (u.clientWidth - this.getPadding("lr")) : u.offsetWidth;
        return t > 0 ? t : 0
    }, setWidth: function (s) {
        var t = this;
        t.dom.style.width = d.addUnits(s);
        return t
    }, setHeight: function (s) {
        var t = this;
        t.dom.style.height = d.addUnits(s);
        return t
    }, getBorderWidth: function (s) {
        return this.addStyles(s, l)
    }, getPadding: function (s) {
        return this.addStyles(s, g)
    }, margins: n, applyStyles: function (u) {
        if (u) {
            var t, s, v = this.dom;
            if (typeof u == "function") {
                u = u.call()
            }
            if (typeof u == "string") {
                u = Ext.util.Format.trim(u).split(/\s*(?::|;)\s*/);
                for (t = 0, s = u.length; t < s;) {
                    v.style[d.normalize(u[t++])] = u[t++]
                }
            } else {
                if (typeof u == "object") {
                    this.setStyle(u)
                }
            }
        }
    }, setSize: function (u, s) {
        var v = this, t = v.dom.style;
        if (Ext.isObject(u)) {
            s = u.height;
            u = u.width
        }
        t.width = d.addUnits(u);
        t.height = d.addUnits(s);
        return v
    }, getViewSize: function () {
        var s = document, t = this.dom;
        if (t == s || t == s.body) {
            return{width: d.getViewportWidth(), height: d.getViewportHeight()}
        } else {
            return{width: t.clientWidth, height: t.clientHeight}
        }
    }, getSize: function (t) {
        var s = this.dom;
        return{width: Math.max(0, t ? (s.clientWidth - this.getPadding("lr")) : s.offsetWidth), height: Math.max(0, t ? (s.clientHeight - this.getPadding("tb")) : s.offsetHeight)}
    }, repaint: function () {
        var s = this.dom;
        this.addCls(Ext.baseCSSPrefix + "repaint");
        setTimeout(function () {
            h.attach(s).removeCls(Ext.baseCSSPrefix + "repaint")
        }, 1);
        return this
    }, getMargin: function (t) {
        var u = this, w = {t: "top", l: "left", r: "right", b: "bottom"}, s, x, v;
        if (!t) {
            v = [];
            for (s in u.margins) {
                if (u.margins.hasOwnProperty(s)) {
                    v.push(u.margins[s])
                }
            }
            x = u.getStyle(v);
            if (x && typeof x == "object") {
                for (s in u.margins) {
                    if (u.margins.hasOwnProperty(s)) {
                        x[w[s]] = parseFloat(x[u.margins[s]]) || 0
                    }
                }
            }
            return x
        } else {
            return u.addStyles(t, u.margins)
        }
    }, mask: function (t, x, B) {
        var y = this, u = y.dom, v = (y.$cache || y.getCache()).data, s = v.mask, C, A, z = "", w = Ext.baseCSSPrefix;
        y.addCls(w + "masked");
        if (y.getStyle("position") == "static") {
            y.addCls(w + "masked-relative")
        }
        if (s) {
            s.remove()
        }
        if (x && typeof x == "string") {
            z = " " + x
        } else {
            z = " " + w + "mask-gray"
        }
        C = y.createChild({role: "presentation", cls: w + "mask" + ((B !== false) ? "" : (" " + w + "mask-gray")), html: t ? ('<div class="' + (x || (w + "mask-message")) + '" role="presentation">' + t + "</div>") : ""});
        A = y.getSize();
        v.mask = C;
        if (u === document.body) {
            A.height = window.innerHeight;
            if (y.orientationHandler) {
                Ext.EventManager.unOrientationChange(y.orientationHandler, y)
            }
            y.orientationHandler = function () {
                A = y.getSize();
                A.height = window.innerHeight;
                C.setSize(A)
            };
            Ext.EventManager.onOrientationChange(y.orientationHandler, y)
        }
        C.setSize(A);
        if (Ext.is.iPad) {
            Ext.repaint()
        }
    }, unmask: function () {
        var t = this, v = (t.$cache || t.getCache()).data, s = v.mask, u = Ext.baseCSSPrefix;
        if (s) {
            s.remove();
            delete v.mask
        }
        t.removeCls([u + "masked", u + "masked-relative"]);
        if (t.dom === document.body) {
            Ext.EventManager.unOrientationChange(t.orientationHandler, t);
            delete t.orientationHandler
        }
    }});
    Ext.onReady(function () {
        var A = Ext.supports, s, y, w, t, z;

        function x(F, C, E, B) {
            var D = B[this.name] || "";
            return c.test(D) ? "transparent" : D
        }

        function v(H, E, G, D) {
            var B = D.marginRight, C, F;
            if (B != "0px") {
                C = H.style;
                F = C.display;
                C.display = "inline-block";
                B = (G ? D : H.ownerDocument.defaultView.getComputedStyle(H, null)).marginRight;
                C.display = F
            }
            return B
        }

        function u(I, F, H, E) {
            var B = E.marginRight, D, C, G;
            if (B != "0px") {
                D = I.style;
                C = d.getRightMarginFixCleaner(I);
                G = D.display;
                D.display = "inline-block";
                B = (H ? E : I.ownerDocument.defaultView.getComputedStyle(I, "")).marginRight;
                D.display = G;
                C()
            }
            return B
        }

        s = d.prototype.styleHooks;
        if (A.init) {
            A.init()
        }
        if (!A.RightMargin) {
            s.marginRight = s["margin-right"] = {name: "marginRight", get: (A.DisplayChangeInputSelectionBug || A.DisplayChangeTextAreaSelectionBug) ? u : v}
        }
        if (!A.TransparentColor) {
            y = ["background-color", "border-color", "color", "outline-color"];
            for (w = y.length; w--;) {
                t = y[w];
                z = d.normalize(t);
                s[t] = s[z] = {name: z, get: x}
            }
        }
    })
});
Ext.define("Ext.dom.AbstractElement_traversal", {override: "Ext.dom.AbstractElement", findParent: function (h, b, a) {
    var e = this.dom, c = document.documentElement, g = 0, d;
    b = b || 50;
    if (isNaN(b)) {
        d = Ext.getDom(b);
        b = Number.MAX_VALUE
    }
    while (e && e.nodeType == 1 && g < b && e != c && e != d) {
        if (Ext.DomQuery.is(e, h)) {
            return a ? Ext.get(e) : e
        }
        g++;
        e = e.parentNode
    }
    return null
}, findParentNode: function (d, b, a) {
    var c = Ext.fly(this.dom.parentNode, "_internal");
    return c ? c.findParent(d, b, a) : null
}, up: function (c, a, b) {
    return this.findParentNode(c, a, !b)
}, select: function (a, b) {
    return Ext.dom.Element.select(a, this.dom, b)
}, query: function (a) {
    return Ext.DomQuery.select(a, this.dom)
}, down: function (a, b) {
    var c = Ext.DomQuery.selectNode(a, this.dom);
    return b ? c : Ext.get(c)
}, child: function (a, b) {
    var d, c = this, e;
    e = Ext.id(c.dom);
    e = Ext.escapeId(e);
    d = Ext.DomQuery.selectNode("#" + e + " > " + a, c.dom);
    return b ? d : Ext.get(d)
}, parent: function (a, b) {
    return this.matchNode("parentNode", "parentNode", a, b)
}, next: function (a, b) {
    return this.matchNode("nextSibling", "nextSibling", a, b)
}, prev: function (a, b) {
    return this.matchNode("previousSibling", "previousSibling", a, b)
}, first: function (a, b) {
    return this.matchNode("nextSibling", "firstChild", a, b)
}, last: function (a, b) {
    return this.matchNode("previousSibling", "lastChild", a, b)
}, matchNode: function (b, e, a, c) {
    if (!this.dom) {
        return null
    }
    var d = this.dom[e];
    while (d) {
        if (d.nodeType == 1 && (!a || Ext.DomQuery.is(d, a))) {
            return !c ? Ext.get(d) : d
        }
        d = d[b]
    }
    return null
}, isAncestor: function (a) {
    return this.self.isAncestor.call(this.self, this.dom, a)
}});
(Ext.cmd.derive("Ext.dom.AbstractElement", Ext.Base, {trimRe: /^\s+|\s+$/g, whitespaceRe: /\s/, inheritableStatics: {trimRe: /^\s+|\s+$/g, whitespaceRe: /\s/, get: function (c) {
    var i = this, j = window.document, d = Ext.dom.Element, h, b, g, e, a;
    if (!c) {
        return null
    }
    if (c.isFly) {
        c = c.dom
    }
    if (typeof c == "string") {
        if (c == Ext.windowId) {
            return d.get(window)
        } else {
            if (c == Ext.documentId) {
                return d.get(j)
            }
        }
        h = Ext.cache[c];
        if (h && h.skipGarbageCollection) {
            g = h.el;
            return g
        }
        if (!(e = j.getElementById(c))) {
            return null
        }
        if (h && h.el) {
            g = Ext.updateCacheEntry(h, e).el
        } else {
            g = new d(e, !!h)
        }
        return g
    } else {
        if (c.tagName) {
            if (!(a = c.id)) {
                a = Ext.id(c)
            }
            h = Ext.cache[a];
            if (h && h.el) {
                g = Ext.updateCacheEntry(h, c).el
            } else {
                g = new d(c, !!h)
            }
            return g
        } else {
            if (c instanceof i) {
                if (c != i.docEl && c != i.winEl) {
                    a = c.id;
                    h = Ext.cache[a];
                    if (h) {
                        Ext.updateCacheEntry(h, j.getElementById(a) || c.dom)
                    }
                }
                return c
            } else {
                if (c.isComposite) {
                    return c
                } else {
                    if (Ext.isArray(c)) {
                        return i.select(c)
                    } else {
                        if (c === j) {
                            if (!i.docEl) {
                                b = i.docEl = Ext.Object.chain(d.prototype);
                                b.dom = j;
                                b.el = b;
                                b.id = Ext.id(j);
                                i.addToCache(b)
                            }
                            return i.docEl
                        } else {
                            if (c === window) {
                                if (!i.winEl) {
                                    i.winEl = Ext.Object.chain(d.prototype);
                                    i.winEl.dom = window;
                                    i.winEl.id = Ext.id(window);
                                    i.addToCache(i.winEl)
                                }
                                return i.winEl
                            }
                        }
                    }
                }
            }
        }
    }
    return null
}, addToCache: function (a, b) {
    if (a) {
        Ext.addCacheEntry(b, a)
    }
    return a
}, addMethods: function () {
    this.override.apply(this, arguments)
}, mergeClsList: function () {
    var m, k = {}, g, b, d, h, c, n = [], e = false, a = this.trimRe, l = this.whitespaceRe;
    for (g = 0, b = arguments.length; g < b; g++) {
        m = arguments[g];
        if (Ext.isString(m)) {
            m = m.replace(a, "").split(l)
        }
        if (m) {
            for (d = 0, h = m.length; d < h; d++) {
                c = m[d];
                if (!k[c]) {
                    if (g) {
                        e = true
                    }
                    k[c] = true
                }
            }
        }
    }
    for (c in k) {
        n.push(c)
    }
    n.changed = e;
    return n
}, removeCls: function (a, b) {
    var h = {}, g, c, d, k = [], e = false, j = this.whitespaceRe;
    if (a) {
        if (Ext.isString(a)) {
            a = a.replace(this.trimRe, "").split(j)
        }
        for (g = 0, c = a.length; g < c; g++) {
            h[a[g]] = true
        }
    }
    if (b) {
        if (Ext.isString(b)) {
            b = b.split(j)
        }
        for (g = 0, c = b.length; g < c; g++) {
            d = b[g];
            if (h[d]) {
                e = true;
                delete h[d]
            }
        }
    }
    for (d in h) {
        k.push(d)
    }
    k.changed = e;
    return k
}, VISIBILITY: 1, DISPLAY: 2, OFFSETS: 3, ASCLASS: 4}, constructor: function (a, b) {
    var c = this, d = typeof a == "string" ? document.getElementById(a) : a, e;
    c.el = c;
    if (!d) {
        return null
    }
    e = d.id;
    if (!b && e && Ext.cache[e]) {
        return Ext.cache[e].el
    }
    c.dom = d;
    c.id = e || Ext.id(d);
    c.self.addToCache(c)
}, set: function (e, b) {
    var c = this.dom, a, d;
    for (a in e) {
        if (e.hasOwnProperty(a)) {
            d = e[a];
            if (a == "style") {
                this.applyStyles(d)
            } else {
                if (a == "cls") {
                    c.className = d
                } else {
                    if (b !== false) {
                        if (d === undefined) {
                            c.removeAttribute(a)
                        } else {
                            c.setAttribute(a, d)
                        }
                    } else {
                        c[a] = d
                    }
                }
            }
        }
    }
    return this
}, defaultUnit: "px", is: function (a) {
    return Ext.DomQuery.is(this.dom, a)
}, getValue: function (a) {
    var b = this.dom.value;
    return a ? parseInt(b, 10) : b
}, remove: function () {
    var a = this, b = a.dom;
    if (a.isAnimate) {
        a.stopAnimation()
    }
    if (b) {
        Ext.removeNode(b);
        delete a.dom
    }
}, contains: (function () {
    var a = function (c) {
        var b;
        try {
            c = c.dom || c
        } catch (d) {
            return true
        }
        b = HTMLElement.prototype.toString.call(c);
        return b === "[xpconnect wrapped native prototype]" || b === "[object XULElement]"
    };
    return function (b) {
        if (!b || (Ext.isGecko3 && a(b))) {
            return false
        }
        var c = this, d = b.dom || b;
        return(d === c.dom) || Ext.dom.AbstractElement.isAncestor(c.dom, d)
    }
}()), getAttribute: function (a, b) {
    var c = this.dom;
    return c.getAttributeNS(b, a) || c.getAttribute(b + ":" + a) || c.getAttribute(a) || c[a]
}, update: function (a) {
    if (this.dom) {
        this.dom.innerHTML = a
    }
    return this
}, setHTML: function (a) {
    if (this.dom) {
        this.dom.innerHTML = a
    }
    return this
}, getHTML: function () {
    return this.dom ? this.dom.innerHTML : ""
}, hide: function () {
    this.setVisible(false);
    return this
}, show: function () {
    this.setVisible(true);
    return this
}, setVisible: function (g, a) {
    var b = this, e = b.self, d = b.getVisibilityMode(), c = Ext.baseCSSPrefix;
    switch (d) {
        case e.VISIBILITY:
            b.removeCls([c + "hidden-display", c + "hidden-offsets"]);
            b[g ? "removeCls" : "addCls"](c + "hidden-visibility");
            break;
        case e.DISPLAY:
            b.removeCls([c + "hidden-visibility", c + "hidden-offsets"]);
            b[g ? "removeCls" : "addCls"](c + "hidden-display");
            break;
        case e.OFFSETS:
            b.removeCls([c + "hidden-visibility", c + "hidden-display"]);
            b[g ? "removeCls" : "addCls"](c + "hidden-offsets");
            break
    }
    return b
}, getVisibilityMode: function () {
    var b = (this.$cache || this.getCache()).data, a = b.visibilityMode;
    if (a === undefined) {
        b.visibilityMode = a = this.self.DISPLAY
    }
    return a
}, setVisibilityMode: function (a) {
    (this.$cache || this.getCache()).data.visibilityMode = a;
    return this
}, getCache: function () {
    var a = this, b = a.dom.id || Ext.id(a.dom);
    a.$cache = Ext.cache[b] || Ext.addCacheEntry(b, null, a.dom);
    return a.$cache
}}, 1, 0, 0, 0, 0, 0, [Ext.dom, "AbstractElement"], function () {
    var a = this;
    Ext.getDetachedBody = function () {
        var b = a.detachedBodyEl;
        if (!b) {
            b = document.createElement("div");
            a.detachedBodyEl = b = new a.Fly(b);
            b.isDetachedBody = true
        }
        return b
    };
    Ext.getElementById = function (d) {
        var c = document.getElementById(d), b;
        if (!c && (b = a.detachedBodyEl)) {
            c = b.dom.querySelector("#" + Ext.escapeId(d))
        }
        return c
    };
    Ext.get = function (b) {
        return Ext.dom.Element.get(b)
    };
    this.addStatics({Fly: new Ext.Class({extend: a, isFly: true, constructor: function (b) {
        this.dom = b;
        this.el = this
    }, attach: function (b) {
        this.dom = b;
        this.$cache = b && b.id ? Ext.cache[b.id] : null;
        return this
    }}), _flyweights: {}, fly: function (e, c) {
        var d = null, b = a._flyweights;
        c = c || "_global";
        e = Ext.getDom(e);
        if (e) {
            d = b[c] || (b[c] = new a.Fly());
            d.dom = e;
            d.$cache = e.id ? Ext.cache[e.id] : null
        }
        return d
    }});
    Ext.fly = function () {
        return a.fly.apply(a, arguments)
    };
    (function (b) {
        b.destroy = b.remove;
        if (document.querySelector) {
            b.getById = function (e, c) {
                var d = document.getElementById(e) || this.dom.querySelector("#" + Ext.escapeId(e));
                return c ? d : (d ? Ext.get(d) : null)
            }
        } else {
            b.getById = function (e, c) {
                var d = document.getElementById(e);
                return c ? d : (d ? Ext.get(d) : null)
            }
        }
    }(this.prototype))
}));
(Ext.cmd.derive("Ext.dom.Helper", Ext.dom.AbstractHelper, (function () {
    var b = "afterbegin", i = "afterend", a = "beforebegin", o = "beforeend", l = "<table>", h = "</table>", c = l + "<tbody>", n = "</tbody>" + h, k = c + "<tr>", e = "</tr>" + n, p = document.createElement("div"), m = ["BeforeBegin", "previousSibling"], j = ["AfterEnd", "nextSibling"], d = {beforebegin: m, afterend: j}, g = {beforebegin: m, afterend: j, afterbegin: ["AfterBegin", "firstChild"], beforeend: ["BeforeEnd", "lastChild"]};
    return{tableRe: /^(?:table|thead|tbody|tr|td)$/i, tableElRe: /td|tr|tbody|thead/i, useDom: false, createDom: function (q, w) {
        var r, z = document, u, x, s, y, v, t;
        if (Ext.isArray(q)) {
            r = z.createDocumentFragment();
            for (v = 0, t = q.length; v < t; v++) {
                this.createDom(q[v], r)
            }
        } else {
            if (typeof q == "string") {
                r = z.createTextNode(q)
            } else {
                r = z.createElement(q.tag || "div");
                u = !!r.setAttribute;
                for (x in q) {
                    if (!this.confRe.test(x)) {
                        s = q[x];
                        if (x == "cls") {
                            r.className = s
                        } else {
                            if (u) {
                                r.setAttribute(x, s)
                            } else {
                                r[x] = s
                            }
                        }
                    }
                }
                Ext.DomHelper.applyStyles(r, q.style);
                if ((y = q.children || q.cn)) {
                    this.createDom(y, r)
                } else {
                    if (q.html) {
                        r.innerHTML = q.html
                    }
                }
            }
        }
        if (w) {
            w.appendChild(r)
        }
        return r
    }, ieTable: function (v, q, w, u) {
        p.innerHTML = [q, w, u].join("");
        var r = -1, t = p, s;
        while (++r < v) {
            t = t.firstChild
        }
        s = t.nextSibling;
        if (s) {
            s = t;
            t = document.createDocumentFragment();
            while (s) {
                nx = s.nextSibling;
                t.appendChild(s);
                s = nx
            }
        }
        return t
    }, insertIntoTable: function (z, s, r, t) {
        var q, w, v = s == a, y = s == b, u = s == o, x = s == i;
        if (z == "td" && (y || u) || !this.tableElRe.test(z) && (v || x)) {
            return null
        }
        w = v ? r : x ? r.nextSibling : y ? r.firstChild : null;
        if (v || x) {
            r = r.parentNode
        }
        if (z == "td" || (z == "tr" && (u || y))) {
            q = this.ieTable(4, k, t, e)
        } else {
            if (((z == "tbody" || z == "thead") && (u || y)) || (z == "tr" && (v || x))) {
                q = this.ieTable(3, c, t, n)
            } else {
                q = this.ieTable(2, l, t, h)
            }
        }
        r.insertBefore(q, w);
        return q
    }, createContextualFragment: function (r) {
        var q = document.createDocumentFragment(), s, t;
        p.innerHTML = r;
        t = p.childNodes;
        s = t.length;
        while (s--) {
            q.appendChild(t[0])
        }
        return q
    }, applyStyles: function (q, r) {
        if (r) {
            if (typeof r == "function") {
                r = r.call()
            }
            if (typeof r == "string") {
                r = Ext.dom.Element.parseStyles(r)
            }
            if (typeof r == "object") {
                Ext.fly(q, "_applyStyles").setStyle(r)
            }
        }
    }, createHtml: function (q) {
        return this.markup(q)
    }, doInsert: function (t, v, u, w, s, q) {
        t = t.dom || Ext.getDom(t);
        var r;
        if (this.useDom) {
            r = this.createDom(v, null);
            if (q) {
                t.appendChild(r)
            } else {
                (s == "firstChild" ? t : t.parentNode).insertBefore(r, t[s] || t)
            }
        } else {
            r = this.insertHtml(w, t, this.markup(v))
        }
        return u ? Ext.get(r, true) : r
    }, overwrite: function (s, r, t) {
        var q;
        s = Ext.getDom(s);
        r = this.markup(r);
        if (Ext.isIE && this.tableRe.test(s.tagName)) {
            while (s.firstChild) {
                s.removeChild(s.firstChild)
            }
            if (r) {
                q = this.insertHtml("afterbegin", s, r);
                return t ? Ext.get(q) : q
            }
            return null
        }
        s.innerHTML = r;
        return t ? Ext.get(s.firstChild) : s.firstChild
    }, insertHtml: function (s, v, t) {
        var x, r, u, q, w;
        s = s.toLowerCase();
        if (v.insertAdjacentHTML) {
            if (Ext.isIE && this.tableRe.test(v.tagName) && (w = this.insertIntoTable(v.tagName.toLowerCase(), s, v, t))) {
                return w
            }
            if ((x = g[s])) {
                if (Ext.global.MSApp && Ext.global.MSApp.execUnsafeLocalFunction) {
                    MSApp.execUnsafeLocalFunction(function () {
                        v.insertAdjacentHTML(x[0], t)
                    })
                } else {
                    v.insertAdjacentHTML(x[0], t)
                }
                return v[x[1]]
            }
        } else {
            if (v.nodeType === 3) {
                s = s === "afterbegin" ? "beforebegin" : s;
                s = s === "beforeend" ? "afterend" : s
            }
            r = Ext.supports.CreateContextualFragment ? v.ownerDocument.createRange() : undefined;
            q = "setStart" + (this.endRe.test(s) ? "After" : "Before");
            if (d[s]) {
                if (r) {
                    r[q](v);
                    w = r.createContextualFragment(t)
                } else {
                    w = this.createContextualFragment(t)
                }
                v.parentNode.insertBefore(w, s == a ? v : v.nextSibling);
                return v[(s == a ? "previous" : "next") + "Sibling"]
            } else {
                u = (s == b ? "first" : "last") + "Child";
                if (v.firstChild) {
                    if (r) {
                        r[q](v[u]);
                        w = r.createContextualFragment(t)
                    } else {
                        w = this.createContextualFragment(t)
                    }
                    if (s == b) {
                        v.insertBefore(w, v.firstChild)
                    } else {
                        v.appendChild(w)
                    }
                } else {
                    v.innerHTML = t
                }
                return v[u]
            }
        }
    }, createTemplate: function (r) {
        var q = this.markup(r);
        return new Ext.Template(q)
    }}
})(), 0, 0, 0, 0, 0, 0, [Ext.dom, "Helper"], function () {
    Ext.ns("Ext.core");
    Ext.DomHelper = Ext.core.DomHelper = new this()
}));
(Ext.cmd.derive("Ext.Template", Ext.Base, {inheritableStatics: {from: function (b, a) {
    b = Ext.getDom(b);
    return new this(b.value || b.innerHTML, a || "")
}}, useEval: Ext.isGecko, constructor: function (d) {
    var g = this, b = arguments, a = [], c = 0, e = b.length, h;
    g.initialConfig = {};
    if (e === 1 && Ext.isArray(d)) {
        b = d;
        e = b.length
    }
    if (e > 1) {
        for (; c < e; c++) {
            h = b[c];
            if (typeof h == "object") {
                Ext.apply(g.initialConfig, h);
                Ext.apply(g, h)
            } else {
                a.push(h)
            }
        }
    } else {
        a.push(d)
    }
    g.html = a.join("");
    if (g.compiled) {
        g.compile()
    }
}, isTemplate: true, disableFormats: false, re: /\{(?:(?:(\d*)|([\w\-]+))(?:\:([A-Za-z_\.]*)(?:\((.*?)?\))?)?)\}/g, apply: function (a) {
    if (this.compiled) {
        return this.compiled(a).join("")
    }
    return this.evaluate(a)
}, evaluate: function (a) {
    var g = this, c = g.disableFormats !== true, e = Ext.util.Format, b = g;

    function d(k, j, i, l, h) {
        if (i == null || i == "") {
            i = j
        }
        if (l && c) {
            if (h) {
                h = [a[i]].concat(Ext.functionFactory("return [" + h + "];")())
            } else {
                h = [a[i]]
            }
            if (l.substr(0, 5) === "this.") {
                return b[l.substr(5)].apply(b, h)
            } else {
                if (e[l]) {
                    return e[l].apply(e, h)
                } else {
                    return k
                }
            }
        } else {
            return a[i] !== undefined ? a[i] : ""
        }
    }

    return g.html.replace(g.re, d)
}, applyOut: function (a, b) {
    var c = this;
    if (c.compiled) {
        b.push.apply(b, c.compiled(a))
    } else {
        b.push(c.apply(a))
    }
    return b
}, applyTemplate: function () {
    return this.apply.apply(this, arguments)
}, set: function (a, c) {
    var b = this;
    b.html = a;
    b.compiled = null;
    return c ? b.compile() : b
}, compileARe: /\\/g, compileBRe: /(\r\n|\n)/g, compileCRe: /'/g, compile: function () {
    var b = this, a;
    a = b.html.replace(b.compileARe, "\\\\").replace(b.compileBRe, "\\n").replace(b.compileCRe, "\\'").replace(b.re, Ext.Function.bind(b.regexReplaceFn, b));
    a = (this.disableFormats !== true ? "var fm=Ext.util.Format;" : "") + (b.useEval ? "$=" : "return") + " function(v){return ['" + a + "'];};";
    b.compiled = b.useEval ? b.evalCompiled(a) : (new Function("Ext", a))(Ext);
    return b
}, evalCompiled: function ($) {
    eval($);
    return $
}, regexReplaceFn: function fn(d, c, b, e, a) {
    if (c == null || c == "") {
        c = '"' + b + '"'
    } else {
        if (this.stringFormat) {
            c = parseInt(c) + 1
        }
    }
    if (e && this.disableFormats !== true) {
        a = a ? "," + a : "";
        if (e.substr(0, 5) === "this.") {
            e = e + "("
        } else {
            if (Ext.util.Format[e]) {
                e = "fm." + e + "("
            } else {
                return d
            }
        }
        return"'," + e + "v[" + c + "]" + a + "),'"
    } else {
        return"',v[" + c + "] == undefined ? '' : v[" + c + "],'"
    }
}, insertFirst: function (b, a, c) {
    return this.doInsert("afterBegin", b, a, c)
}, insertBefore: function (b, a, c) {
    return this.doInsert("beforeBegin", b, a, c)
}, insertAfter: function (b, a, c) {
    return this.doInsert("afterEnd", b, a, c)
}, append: function (b, a, c) {
    return this.doInsert("beforeEnd", b, a, c)
}, doInsert: function (b, d, a, e) {
    var c = Ext.DomHelper.insertHtml(b, Ext.getDom(d), this.apply(a));
    return e ? Ext.get(c) : c
}, overwrite: function (c, a, d) {
    var b = Ext.DomHelper.overwrite(Ext.getDom(c), this.apply(a));
    return d ? Ext.get(b) : b
}}, 1, 0, 0, 0, 0, 0, [Ext, "Template"], 0));
(Ext.cmd.derive("Ext.XTemplateParser", Ext.Base, {constructor: function (a) {
    Ext.apply(this, a)
}, doTpl: Ext.emptyFn, parse: function (n) {
    var w = this, q = n.length, p = {elseif: "elif"}, r = w.topRe, c = w.actionsRe, e, d, j, o, h, k, i, v, u, b, g, a, l;
    w.level = 0;
    w.stack = d = [];
    for (e = 0; e < q; e = b) {
        r.lastIndex = e;
        o = r.exec(n);
        if (!o) {
            w.doText(n.substring(e, q));
            break
        }
        u = o.index;
        b = r.lastIndex;
        if (e < u) {
            j = n.substring(e, u);
            if (!(l && Ext.String.trim(j) === "")) {
                w.doText(j)
            }
        }
        l = false;
        if (o[1]) {
            b = n.indexOf("%}", u + 2);
            w.doEval(n.substring(u + 2, b));
            b += 2
        } else {
            if (o[2]) {
                b = n.indexOf("]}", u + 2);
                w.doExpr(n.substring(u + 2, b));
                b += 2
            } else {
                if (o[3]) {
                    w.doTag(o[3])
                } else {
                    if (o[4]) {
                        g = null;
                        while ((v = c.exec(o[4])) !== null) {
                            j = v[2] || v[3];
                            if (j) {
                                j = Ext.String.htmlDecode(j);
                                h = v[1];
                                h = p[h] || h;
                                g = g || {};
                                k = g[h];
                                if (typeof k == "string") {
                                    g[h] = [k, j]
                                } else {
                                    if (k) {
                                        g[h].push(j)
                                    } else {
                                        g[h] = j
                                    }
                                }
                            }
                        }
                        if (!g) {
                            if (w.elseRe.test(o[4])) {
                                w.doElse()
                            } else {
                                if (w.defaultRe.test(o[4])) {
                                    w.doDefault()
                                } else {
                                    w.doTpl();
                                    d.push({type: "tpl"})
                                }
                            }
                        } else {
                            if (g["if"]) {
                                w.doIf(g["if"], g);
                                d.push({type: "if"})
                            } else {
                                if (g["switch"]) {
                                    w.doSwitch(g["switch"], g);
                                    d.push({type: "switch"});
                                    l = true
                                } else {
                                    if (g["case"]) {
                                        w.doCase(g["case"], g)
                                    } else {
                                        if (g.elif) {
                                            w.doElseIf(g.elif, g)
                                        } else {
                                            if (g["for"]) {
                                                ++w.level;
                                                if (a = w.propRe.exec(o[4])) {
                                                    g.propName = a[1] || a[2]
                                                }
                                                w.doFor(g["for"], g);
                                                d.push({type: "for", actions: g})
                                            } else {
                                                if (g.foreach) {
                                                    ++w.level;
                                                    if (a = w.propRe.exec(o[4])) {
                                                        g.propName = a[1] || a[2]
                                                    }
                                                    w.doForEach(g.foreach, g);
                                                    d.push({type: "foreach", actions: g})
                                                } else {
                                                    if (g.exec) {
                                                        w.doExec(g.exec, g);
                                                        d.push({type: "exec", actions: g})
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (o[0].length === 5) {
                            d.push({type: "tpl"})
                        } else {
                            i = d.pop();
                            w.doEnd(i.type, i.actions);
                            if (i.type == "for" || i.type == "foreach") {
                                --w.level
                            }
                        }
                    }
                }
            }
        }
    }
}, topRe: /(?:(\{\%)|(\{\[)|\{([^{}]+)\})|(?:<tpl([^>]*)\>)|(?:<\/tpl>)/g, actionsRe: /\s*(elif|elseif|if|for|foreach|exec|switch|case|eval|between)\s*\=\s*(?:(?:"([^"]*)")|(?:'([^']*)'))\s*/g, propRe: /prop=(?:(?:"([^"]*)")|(?:'([^']*)'))/, defaultRe: /^\s*default\s*$/, elseRe: /^\s*else\s*$/}, 1, 0, 0, 0, 0, 0, [Ext, "XTemplateParser"], 0));
(Ext.cmd.derive("Ext.XTemplateCompiler", Ext.XTemplateParser, {useEval: Ext.isGecko, useIndex: Ext.isIE8m, useFormat: true, propNameRe: /^[\w\d\$]*$/, compile: function (a) {
    var c = this, b = c.generate(a);
    return c.useEval ? c.evalTpl(b) : (new Function("Ext", b))(Ext)
}, generate: function (a) {
    var d = this, b = "var fm=Ext.util.Format,ts=Object.prototype.toString;", c;
    d.maxLevel = 0;
    d.body = ["var c0=values, a0=" + d.createArrayTest(0) + ", p0=parent, n0=xcount, i0=xindex, k0, v;\n"];
    if (d.definitions) {
        if (typeof d.definitions === "string") {
            d.definitions = [d.definitions, b]
        } else {
            d.definitions.push(b)
        }
    } else {
        d.definitions = [b]
    }
    d.switches = [];
    d.parse(a);
    d.definitions.push((d.useEval ? "$=" : "return") + " function (" + d.fnArgs + ") {", d.body.join(""), "}");
    c = d.definitions.join("\n");
    d.definitions.length = d.body.length = d.switches.length = 0;
    delete d.definitions;
    delete d.body;
    delete d.switches;
    return c
}, doText: function (c) {
    var b = this, a = b.body;
    c = c.replace(b.aposRe, "\\'").replace(b.newLineRe, "\\n");
    if (b.useIndex) {
        a.push("out[out.length]='", c, "'\n")
    } else {
        a.push("out.push('", c, "')\n")
    }
}, doExpr: function (b) {
    var a = this.body;
    a.push("if ((v=" + b + ") != null) out");
    if (this.useIndex) {
        a.push("[out.length]=v+''\n")
    } else {
        a.push(".push(v+'')\n")
    }
}, doTag: function (a) {
    var b = this.parseTag(a);
    if (b) {
        this.doExpr(b)
    } else {
        this.doText("{" + a + "}")
    }
}, doElse: function () {
    this.body.push("} else {\n")
}, doEval: function (a) {
    this.body.push(a, "\n")
}, doIf: function (b, c) {
    var a = this;
    if (b === ".") {
        a.body.push("if (values) {\n")
    } else {
        if (a.propNameRe.test(b)) {
            a.body.push("if (", a.parseTag(b), ") {\n")
        } else {
            a.body.push("if (", a.addFn(b), a.callFn, ") {\n")
        }
    }
    if (c.exec) {
        a.doExec(c.exec)
    }
}, doElseIf: function (b, c) {
    var a = this;
    if (b === ".") {
        a.body.push("else if (values) {\n")
    } else {
        if (a.propNameRe.test(b)) {
            a.body.push("} else if (", a.parseTag(b), ") {\n")
        } else {
            a.body.push("} else if (", a.addFn(b), a.callFn, ") {\n")
        }
    }
    if (c.exec) {
        a.doExec(c.exec)
    }
}, doSwitch: function (c) {
    var b = this, a;
    if (c === "." || c === "#") {
        a = c === "." ? "values" : "xindex";
        b.body.push("switch (", a, ") {\n")
    } else {
        if (b.propNameRe.test(c)) {
            b.body.push("switch (", b.parseTag(c), ") {\n")
        } else {
            b.body.push("switch (", b.addFn(c), b.callFn, ") {\n")
        }
    }
    b.switches.push(0)
}, doCase: function (e) {
    var d = this, c = Ext.isArray(e) ? e : [e], g = d.switches.length - 1, a, b;
    if (d.switches[g]) {
        d.body.push("break;\n")
    } else {
        d.switches[g]++
    }
    for (b = 0, g = c.length; b < g; ++b) {
        a = d.intRe.exec(c[b]);
        c[b] = a ? a[1] : ("'" + c[b].replace(d.aposRe, "\\'") + "'")
    }
    d.body.push("case ", c.join(": case "), ":\n")
}, doDefault: function () {
    var a = this, b = a.switches.length - 1;
    if (a.switches[b]) {
        a.body.push("break;\n")
    } else {
        a.switches[b]++
    }
    a.body.push("default:\n")
}, doEnd: function (b, d) {
    var c = this, a = c.level - 1;
    if (b == "for" || b == "foreach") {
        if (d.exec) {
            c.doExec(d.exec)
        }
        c.body.push("}\n");
        c.body.push("parent=p", a, ";values=r", a + 1, ";xcount=n" + a + ";xindex=i", a, "+1;xkey=k", a, ";\n")
    } else {
        if (b == "if" || b == "switch") {
            c.body.push("}\n")
        }
    }
}, doFor: function (e, h) {
    var d = this, c, b = d.level, a = b - 1, g;
    if (e === ".") {
        c = "values"
    } else {
        if (d.propNameRe.test(e)) {
            c = d.parseTag(e)
        } else {
            c = d.addFn(e) + d.callFn
        }
    }
    if (d.maxLevel < b) {
        d.maxLevel = b;
        d.body.push("var ")
    }
    if (e == ".") {
        g = "c" + b
    } else {
        g = "a" + a + "?c" + a + "[i" + a + "]:c" + a
    }
    d.body.push("i", b, "=0,n", b, "=0,c", b, "=", c, ",a", b, "=", d.createArrayTest(b), ",r", b, "=values,p", b, ",k", b, ";\n", "p", b, "=parent=", g, "\n", "if (c", b, "){if(a", b, "){n", b, "=c", b, ".length;}else if (c", b, ".isMixedCollection){c", b, "=c", b, ".items;n", b, "=c", b, ".length;}else if(c", b, ".isStore){c", b, "=c", b, ".data.items;n", b, "=c", b, ".length;}else{c", b, "=[c", b, "];n", b, "=1;}}\n", "for (xcount=n", b, ";i", b, "<n" + b + ";++i", b, "){\n", "values=c", b, "[i", b, "]");
    if (h.propName) {
        d.body.push(".", h.propName)
    }
    d.body.push("\n", "xindex=i", b, "+1\n");
    if (h.between) {
        d.body.push('if(xindex>1){ out.push("', h.between, '"); } \n')
    }
}, doForEach: function (e, h) {
    var d = this, c, b = d.level, a = b - 1, g;
    if (e === ".") {
        c = "values"
    } else {
        if (d.propNameRe.test(e)) {
            c = d.parseTag(e)
        } else {
            c = d.addFn(e) + d.callFn
        }
    }
    if (d.maxLevel < b) {
        d.maxLevel = b;
        d.body.push("var ")
    }
    if (e == ".") {
        g = "c" + b
    } else {
        g = "a" + a + "?c" + a + "[i" + a + "]:c" + a
    }
    d.body.push("i", b, "=-1,n", b, "=0,c", b, "=", c, ",a", b, "=", d.createArrayTest(b), ",r", b, "=values,p", b, ",k", b, ";\n", "p", b, "=parent=", g, "\n", "for(k", b, " in c", b, "){\n", "xindex=++i", b, "+1;\n", "xkey=k", b, ";\n", "values=c", b, "[k", b, "];");
    if (h.propName) {
        d.body.push(".", h.propName)
    }
    if (h.between) {
        d.body.push('if(xindex>1){ out.push("', h.between, '"); } \n')
    }
}, createArrayTest: ("isArray" in Array) ? function (a) {
    return"Array.isArray(c" + a + ")"
} : function (a) {
    return"ts.call(c" + a + ')==="[object Array]"'
}, doExec: function (c, d) {
    var b = this, a = "f" + b.definitions.length;
    b.definitions.push("function " + a + "(" + b.fnArgs + ") {", " try { with(values) {", "  " + c, " }} catch(e) {", "}", "}");
    b.body.push(a + b.callFn + "\n")
}, addFn: function (a) {
    var c = this, b = "f" + c.definitions.length;
    if (a === ".") {
        c.definitions.push("function " + b + "(" + c.fnArgs + ") {", " return values", "}")
    } else {
        if (a === "..") {
            c.definitions.push("function " + b + "(" + c.fnArgs + ") {", " return parent", "}")
        } else {
            c.definitions.push("function " + b + "(" + c.fnArgs + ") {", " try { with(values) {", "  return(" + a + ")", " }} catch(e) {", "}", "}")
        }
    }
    return b
}, parseTag: function (b) {
    var h = this, a = h.tagRe.exec(b), e, i, d, g, c;
    if (!a) {
        return null
    }
    e = a[1];
    i = a[2];
    d = a[3];
    g = a[4];
    if (e == ".") {
        if (!h.validTypes) {
            h.definitions.push("var validTypes={string:1,number:1,boolean:1};");
            h.validTypes = true
        }
        c = 'validTypes[typeof values] || ts.call(values) === "[object Date]" ? values : ""'
    } else {
        if (e == "#") {
            c = "xindex"
        } else {
            if (e == "$") {
                c = "xkey"
            } else {
                if (e.substr(0, 7) == "parent.") {
                    c = e
                } else {
                    if (isNaN(e) && e.indexOf("-") == -1 && e.indexOf(".") != -1) {
                        c = "values." + e
                    } else {
                        c = "values['" + e + "']"
                    }
                }
            }
        }
    }
    if (g) {
        c = "(" + c + g + ")"
    }
    if (i && h.useFormat) {
        d = d ? "," + d : "";
        if (i.substr(0, 5) != "this.") {
            i = "fm." + i + "("
        } else {
            i += "("
        }
    } else {
        return c
    }
    return i + c + d + ")"
}, evalTpl: function ($) {
    eval($);
    return $
}, newLineRe: /\r\n|\r|\n/g, aposRe: /[']/g, intRe: /^\s*(\d+)\s*$/, tagRe: /^([\w-\.\#\$]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?(\s?[\+\-\*\/]\s?[\d\.\+\-\*\/\(\)]+)?$/}, 0, 0, 0, 0, 0, 0, [Ext, "XTemplateCompiler"], function () {
    var a = this.prototype;
    a.fnArgs = "out,values,parent,xindex,xcount,xkey";
    a.callFn = ".call(this," + a.fnArgs + ")"
}));
(Ext.cmd.derive("Ext.XTemplate", Ext.Template, {emptyObj: {}, apply: function (a, b) {
    return this.applyOut(a, [], b).join("")
}, applyOut: function (a, b, d) {
    var g = this, c;
    if (!g.fn) {
        c = new Ext.XTemplateCompiler({useFormat: g.disableFormats !== true, definitions: g.definitions});
        g.fn = c.compile(g.html)
    }
    try {
        g.fn(b, a, d || g.emptyObj, 1, 1)
    } catch (h) {
    }
    return b
}, compile: function () {
    return this
}, statics: {getTpl: function (b, d) {
    var c = b[d], a;
    if (c && !c.isTemplate) {
        c = Ext.ClassManager.dynInstantiate("Ext.XTemplate", c);
        if (b.hasOwnProperty(d)) {
            a = b
        } else {
            for (a = b.self.prototype; a && !a.hasOwnProperty(d); a = a.superclass) {
            }
        }
        a[d] = c;
        c.owner = a
    }
    return c || null
}}}, 0, 0, 0, 0, 0, 0, [Ext, "XTemplate"], 0));
Ext.ns("Ext.core");
Ext.dom.Query = Ext.core.DomQuery = Ext.DomQuery = (function () {
    var DQ, doc = document, cache, simpleCache, valueCache, useClassList = !!doc.documentElement.classList, useElementPointer = !!doc.documentElement.firstElementChild, useChildrenCollection = (function () {
        var d = doc.createElement("div");
        d.innerHTML = "<!-- -->text<!-- -->";
        return d.children && (d.children.length === 0)
    })(), nonSpace = /\S/, trimRe = /^\s+|\s+$/g, tplRe = /\{(\d+)\}/g, modeRe = /^(\s?[\/>+~]\s?|\s|$)/, tagTokenRe = /^(#)?([\w\-\*\|\\]+)/, nthRe = /(\d*)n\+?(\d*)/, nthRe2 = /\D/, startIdRe = /^\s*#/, isIE = window.ActiveXObject ? true : false, key = 30803, longHex = /\\([0-9a-fA-F]{6})/g, shortHex = /\\([0-9a-fA-F]{1,6})\s{0,1}/g, nonHex = /\\([^0-9a-fA-F]{1})/g, escapes = /\\/g, num, hasEscapes, supportsColonNsSeparator = (function () {
        var xmlDoc, xmlString = '<r><a:b xmlns:a="n"></a:b></r>';
        if (window.DOMParser) {
            xmlDoc = (new DOMParser()).parseFromString(xmlString, "application/xml")
        } else {
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.loadXML(xmlString)
        }
        return !!xmlDoc.getElementsByTagName("a:b").length
    })(), longHexToChar = function ($0, $1) {
        return String.fromCharCode(parseInt($1, 16))
    }, shortToLongHex = function ($0, $1) {
        while ($1.length < 6) {
            $1 = "0" + $1
        }
        return"\\" + $1
    }, charToLongHex = function ($0, $1) {
        num = $1.charCodeAt(0).toString(16);
        if (num.length === 1) {
            num = "0" + num
        }
        return"\\0000" + num
    }, unescapeCssSelector = function (selector) {
        return(hasEscapes) ? selector.replace(longHex, longHexToChar) : selector
    }, setupEscapes = function (path) {
        hasEscapes = (path.indexOf("\\") > -1);
        if (hasEscapes) {
            path = path.replace(shortHex, shortToLongHex).replace(nonHex, charToLongHex).replace(escapes, "\\\\")
        }
        return path
    };
    eval("var batch = 30803, child, next, prev, byClassName;");
    child = useChildrenCollection ? function child(parent, index) {
        return parent.children[index]
    } : function child(parent, index) {
        var i = 0, n = parent.firstChild;
        while (n) {
            if (n.nodeType == 1) {
                if (++i == index) {
                    return n
                }
            }
            n = n.nextSibling
        }
        return null
    };
    next = useElementPointer ? function (n) {
        return n.nextElementSibling
    } : function (n) {
        while ((n = n.nextSibling) && n.nodeType != 1) {
        }
        return n
    };
    prev = useElementPointer ? function (n) {
        return n.previousElementSibling
    } : function (n) {
        while ((n = n.previousSibling) && n.nodeType != 1) {
        }
        return n
    };
    function children(parent) {
        var n = parent.firstChild, nodeIndex = -1, nextNode;
        while (n) {
            nextNode = n.nextSibling;
            if (n.nodeType == 3 && !nonSpace.test(n.nodeValue)) {
                parent.removeChild(n)
            } else {
                n.nodeIndex = ++nodeIndex
            }
            n = nextNode
        }
        return this
    }

    byClassName = useClassList ? function (nodeSet, cls) {
        cls = unescapeCssSelector(cls);
        if (!cls) {
            return nodeSet
        }
        var result = [], ri = -1, i, ci, classList;
        for (i = 0; ci = nodeSet[i]; i++) {
            classList = ci.classList;
            if (classList) {
                if (classList.contains(cls)) {
                    result[++ri] = ci
                }
            } else {
                if ((" " + ci.className + " ").indexOf(cls) !== -1) {
                    result[++ri] = ci
                }
            }
        }
        return result
    } : function (nodeSet, cls) {
        cls = unescapeCssSelector(cls);
        if (!cls) {
            return nodeSet
        }
        var result = [], ri = -1, i, ci;
        for (i = 0; ci = nodeSet[i]; i++) {
            if ((" " + ci.className + " ").indexOf(cls) !== -1) {
                result[++ri] = ci
            }
        }
        return result
    };
    function attrValue(n, attr) {
        if (!n.tagName && typeof n.length != "undefined") {
            n = n[0]
        }
        if (!n) {
            return null
        }
        if (attr == "for") {
            return n.htmlFor
        }
        if (attr == "class" || attr == "className") {
            return n.className
        }
        return n.getAttribute(attr) || n[attr]
    }

    function getNodes(ns, mode, tagName) {
        var result = [], ri = -1, cs, i, ni, j, ci, cn, utag, n, cj;
        if (!ns) {
            return result
        }
        tagName = tagName.replace("|", ":") || "*";
        if (typeof ns.getElementsByTagName != "undefined") {
            ns = [ns]
        }
        if (!mode) {
            tagName = unescapeCssSelector(tagName);
            if (!supportsColonNsSeparator && DQ.isXml(ns[0]) && tagName.indexOf(":") !== -1) {
                for (i = 0; ni = ns[i]; i++) {
                    cs = ni.getElementsByTagName(tagName.split(":").pop());
                    for (j = 0; ci = cs[j]; j++) {
                        if (ci.tagName === tagName) {
                            result[++ri] = ci
                        }
                    }
                }
            } else {
                for (i = 0; ni = ns[i]; i++) {
                    cs = ni.getElementsByTagName(tagName);
                    for (j = 0; ci = cs[j]; j++) {
                        result[++ri] = ci
                    }
                }
            }
        } else {
            if (mode == "/" || mode == ">") {
                utag = tagName.toUpperCase();
                for (i = 0; ni = ns[i]; i++) {
                    cn = ni.childNodes;
                    for (j = 0; cj = cn[j]; j++) {
                        if (cj.nodeName == utag || cj.nodeName == tagName || tagName == "*") {
                            result[++ri] = cj
                        }
                    }
                }
            } else {
                if (mode == "+") {
                    utag = tagName.toUpperCase();
                    for (i = 0; n = ns[i]; i++) {
                        while ((n = n.nextSibling) && n.nodeType != 1) {
                        }
                        if (n && (n.nodeName == utag || n.nodeName == tagName || tagName == "*")) {
                            result[++ri] = n
                        }
                    }
                } else {
                    if (mode == "~") {
                        utag = tagName.toUpperCase();
                        for (i = 0; n = ns[i]; i++) {
                            while ((n = n.nextSibling)) {
                                if (n.nodeName == utag || n.nodeName == tagName || tagName == "*") {
                                    result[++ri] = n
                                }
                            }
                        }
                    }
                }
            }
        }
        return result
    }

    function concat(a, b) {
        a.push.apply(a, b);
        return a
    }

    function byTag(cs, tagName) {
        if (cs.tagName || cs === doc) {
            cs = [cs]
        }
        if (!tagName) {
            return cs
        }
        var result = [], ri = -1, i, ci;
        tagName = tagName.toLowerCase();
        for (i = 0; ci = cs[i]; i++) {
            if (ci.nodeType == 1 && ci.tagName.toLowerCase() == tagName) {
                result[++ri] = ci
            }
        }
        return result
    }

    function byId(cs, id) {
        id = unescapeCssSelector(id);
        if (cs.tagName || cs === doc) {
            cs = [cs]
        }
        if (!id) {
            return cs
        }
        var result = [], ri = -1, i, ci;
        for (i = 0; ci = cs[i]; i++) {
            if (ci && ci.id == id) {
                result[++ri] = ci;
                return result
            }
        }
        return result
    }

    function byAttribute(cs, attr, value, op, custom) {
        var result = [], ri = -1, useGetStyle = custom == "{", fn = DQ.operators[op], a, xml, hasXml, i, ci;
        value = unescapeCssSelector(value);
        for (i = 0; ci = cs[i]; i++) {
            if (ci.nodeType === 1) {
                if (!hasXml) {
                    xml = DQ.isXml(ci);
                    hasXml = true
                }
                if (!xml) {
                    if (useGetStyle) {
                        a = DQ.getStyle(ci, attr)
                    } else {
                        if (attr == "class" || attr == "className") {
                            a = ci.className
                        } else {
                            if (attr == "for") {
                                a = ci.htmlFor
                            } else {
                                if (attr == "href") {
                                    a = ci.getAttribute("href", 2)
                                } else {
                                    a = ci.getAttribute(attr)
                                }
                            }
                        }
                    }
                } else {
                    a = ci.getAttribute(attr)
                }
                if ((fn && fn(a, value)) || (!fn && a)) {
                    result[++ri] = ci
                }
            }
        }
        return result
    }

    function byPseudo(cs, name, value) {
        value = unescapeCssSelector(value);
        return DQ.pseudos[name](cs, value)
    }

    function nodupIEXml(cs) {
        var d = ++key, r, i, len, c;
        cs[0].setAttribute("_nodup", d);
        r = [cs[0]];
        for (i = 1, len = cs.length; i < len; i++) {
            c = cs[i];
            if (!c.getAttribute("_nodup") != d) {
                c.setAttribute("_nodup", d);
                r[r.length] = c
            }
        }
        for (i = 0, len = cs.length; i < len; i++) {
            cs[i].removeAttribute("_nodup")
        }
        return r
    }

    function nodup(cs) {
        if (!cs) {
            return[]
        }
        var len = cs.length, c, i, r = cs, cj, ri = -1, d, j;
        if (!len || typeof cs.nodeType != "undefined" || len == 1) {
            return cs
        }
        if (isIE && typeof cs[0].selectSingleNode != "undefined") {
            return nodupIEXml(cs)
        }
        d = ++key;
        cs[0]._nodup = d;
        for (i = 1; c = cs[i]; i++) {
            if (c._nodup != d) {
                c._nodup = d
            } else {
                r = [];
                for (j = 0; j < i; j++) {
                    r[++ri] = cs[j]
                }
                for (j = i + 1; cj = cs[j]; j++) {
                    if (cj._nodup != d) {
                        cj._nodup = d;
                        r[++ri] = cj
                    }
                }
                return r
            }
        }
        return r
    }

    function quickDiffIEXml(c1, c2) {
        var d = ++key, r = [], i, len;
        for (i = 0, len = c1.length; i < len; i++) {
            c1[i].setAttribute("_qdiff", d)
        }
        for (i = 0, len = c2.length; i < len; i++) {
            if (c2[i].getAttribute("_qdiff") != d) {
                r[r.length] = c2[i]
            }
        }
        for (i = 0, len = c1.length; i < len; i++) {
            c1[i].removeAttribute("_qdiff")
        }
        return r
    }

    function quickDiff(c1, c2) {
        var len1 = c1.length, d = ++key, r = [], i, len;
        if (!len1) {
            return c2
        }
        if (isIE && typeof c1[0].selectSingleNode != "undefined") {
            return quickDiffIEXml(c1, c2)
        }
        for (i = 0; i < len1; i++) {
            c1[i]._qdiff = d
        }
        for (i = 0, len = c2.length; i < len; i++) {
            if (c2[i]._qdiff != d) {
                r[r.length] = c2[i]
            }
        }
        return r
    }

    function quickId(ns, mode, root, id) {
        if (ns == root) {
            id = unescapeCssSelector(id);
            var d = root.ownerDocument || root;
            return d.getElementById(id)
        }
        ns = getNodes(ns, mode, "*");
        return byId(ns, id)
    }

    return DQ = {clearCache: function () {
        cache && cache.clear();
        valueCache && valueCache.clear();
        simpleCache && simpleCache.clear()
    }, getStyle: function (el, name) {
        return Ext.fly(el, "_DomQuery").getStyle(name)
    }, compile: function (path, type) {
        type = type || "select";
        var fn = ["var f = function(root) {\n var mode; ++batch; var n = root || document;\n"], lastPath, matchers = DQ.matchers, matchersLn = matchers.length, modeMatch, lmode = path.match(modeRe), tokenMatch, matched, j, t, m;
        path = setupEscapes(path);
        if (lmode && lmode[1]) {
            fn[fn.length] = 'mode="' + lmode[1].replace(trimRe, "") + '";';
            path = path.replace(lmode[1], "")
        }
        while (path.substr(0, 1) == "/") {
            path = path.substr(1)
        }
        while (path && lastPath != path) {
            lastPath = path;
            tokenMatch = path.match(tagTokenRe);
            if (type == "select") {
                if (tokenMatch) {
                    if (tokenMatch[1] == "#") {
                        fn[fn.length] = 'n = quickId(n, mode, root, "' + tokenMatch[2] + '");'
                    } else {
                        fn[fn.length] = 'n = getNodes(n, mode, "' + tokenMatch[2] + '");'
                    }
                    path = path.replace(tokenMatch[0], "")
                } else {
                    if (path.substr(0, 1) != "@") {
                        fn[fn.length] = 'n = getNodes(n, mode, "*");'
                    }
                }
            } else {
                if (tokenMatch) {
                    if (tokenMatch[1] == "#") {
                        fn[fn.length] = 'n = byId(n, "' + tokenMatch[2] + '");'
                    } else {
                        fn[fn.length] = 'n = byTag(n, "' + tokenMatch[2] + '");'
                    }
                    path = path.replace(tokenMatch[0], "")
                }
            }
            while (!(modeMatch = path.match(modeRe))) {
                matched = false;
                for (j = 0; j < matchersLn; j++) {
                    t = matchers[j];
                    m = path.match(t.re);
                    if (m) {
                        fn[fn.length] = t.select.replace(tplRe, function (x, i) {
                            return m[i]
                        });
                        path = path.replace(m[0], "");
                        matched = true;
                        break
                    }
                }
                if (!matched) {
                    Ext.Error.raise({sourceClass: "Ext.DomQuery", sourceMethod: "compile", msg: 'Error parsing selector. Parsing failed at "' + path + '"'})
                }
            }
            if (modeMatch[1]) {
                fn[fn.length] = 'mode="' + modeMatch[1].replace(trimRe, "") + '";';
                path = path.replace(modeMatch[1], "")
            }
        }
        fn[fn.length] = "return nodup(n);\n}";
        eval(fn.join(""));
        return f
    }, jsSelect: function (path, root, type) {
        if (!cache) {
            DQ._cache = cache = new Ext.util.LruCache({maxSize: 200})
        }
        root = root || doc;
        if (typeof root == "string") {
            root = doc.getElementById(root)
        }
        var paths = Ext.splitAndUnescape(path, ","), results = [], query, i, len, subPath, result;
        for (i = 0, len = paths.length; i < len; i++) {
            subPath = paths[i].replace(trimRe, "");
            query = cache.get(subPath);
            if (!query) {
                query = DQ.compile(subPath, type);
                if (!query) {
                    Ext.Error.raise({sourceClass: "Ext.DomQuery", sourceMethod: "jsSelect", msg: subPath + " is not a valid selector"})
                }
                cache.add(subPath, query)
            } else {
                setupEscapes(subPath)
            }
            result = query(root);
            if (result && result !== doc) {
                results = results.concat(result)
            }
        }
        if (paths.length > 1) {
            return nodup(results)
        }
        return results
    }, isXml: function (el) {
        var docEl = (el ? el.ownerDocument || el : 0).documentElement;
        return docEl ? docEl.nodeName !== "HTML" : false
    }, select: doc.querySelectorAll ? function (path, root, type, single) {
        root = root || doc;
        if (!DQ.isXml(root)) {
            try {
                if (root.parentNode && (root.nodeType !== 9) && path.indexOf(",") === -1 && !startIdRe.test(path)) {
                    path = "#" + Ext.escapeId(Ext.id(root)) + " " + path;
                    root = root.parentNode
                }
                return single ? [root.querySelector(path)] : Ext.Array.toArray(root.querySelectorAll(path))
            } catch (e) {
            }
        }
        return DQ.jsSelect.call(this, path, root, type)
    } : function (path, root, type) {
        return DQ.jsSelect.call(this, path, root, type)
    }, selectNode: function (path, root) {
        return Ext.DomQuery.select(path, root, null, true)[0]
    }, selectValue: function (path, root, defaultValue) {
        if (!valueCache) {
            DQ._valueCache = valueCache = new Ext.util.LruCache({maxSize: 200})
        }
        path = path.replace(trimRe, "");
        var query = valueCache.get(path), n, v;
        if (!query) {
            query = DQ.compile(path, "select");
            valueCache.add(path, query)
        } else {
            setupEscapes(path)
        }
        n = query(root);
        n = n[0] ? n[0] : n;
        if (typeof n.normalize == "function") {
            n.normalize()
        }
        v = (n && n.firstChild ? n.firstChild.nodeValue : null);
        return((v === null || v === undefined || v === "") ? defaultValue : v)
    }, selectNumber: function (path, root, defaultValue) {
        var v = DQ.selectValue(path, root, defaultValue || 0);
        return parseFloat(v)
    }, is: function (el, ss) {
        if (typeof el == "string") {
            el = doc.getElementById(el)
        }
        var isArray = Ext.isArray(el), result = DQ.filter(isArray ? el : [el], ss);
        return isArray ? (result.length == el.length) : (result.length > 0)
    }, filter: function (els, ss, nonMatches) {
        ss = ss.replace(trimRe, "");
        if (!simpleCache) {
            DQ._simpleCache = simpleCache = new Ext.util.LruCache({maxSize: 200})
        }
        var query = simpleCache.get(ss), result;
        if (!query) {
            query = DQ.compile(ss, "simple");
            simpleCache.add(ss, query)
        } else {
            setupEscapes(ss)
        }
        result = query(els);
        return nonMatches ? quickDiff(result, els) : result
    }, matchers: [
        {re: /^\.([\w\-\\]+)/, select: useClassList ? 'n = byClassName(n, "{1}");' : 'n = byClassName(n, " {1} ");'},
        {re: /^\:([\w\-]+)(?:\(((?:[^\s>\/]*|.*?))\))?/, select: 'n = byPseudo(n, "{1}", "{2}");'},
        {re: /^(?:([\[\{])(?:@)?([\w\-]+)\s?(?:(=|.=)\s?['"]?(.*?)["']?)?[\]\}])/, select: 'n = byAttribute(n, "{2}", "{4}", "{3}", "{1}");'},
        {re: /^#([\w\-\\]+)/, select: 'n = byId(n, "{1}");'},
        {re: /^@([\w\-\.]+)/, select: 'return {firstChild:{nodeValue:attrValue(n, "{1}")}};'}
    ], operators: {"=": function (a, v) {
        return a == v
    }, "!=": function (a, v) {
        return a != v
    }, "^=": function (a, v) {
        return a && a.substr(0, v.length) == v
    }, "$=": function (a, v) {
        return a && a.substr(a.length - v.length) == v
    }, "*=": function (a, v) {
        return a && a.indexOf(v) !== -1
    }, "%=": function (a, v) {
        return(a % v) === 0
    }, "|=": function (a, v) {
        return a && (a == v || a.substr(0, v.length + 1) == v + "-")
    }, "~=": function (a, v) {
        return a && (" " + a + " ").indexOf(" " + v + " ") != -1
    }}, pseudos: {"first-child": function (c) {
        var r = [], ri = -1, n, i, ci;
        for (i = 0; (ci = n = c[i]); i++) {
            while ((n = n.previousSibling) && n.nodeType != 1) {
            }
            if (!n) {
                r[++ri] = ci
            }
        }
        return r
    }, "last-child": function (c) {
        var r = [], ri = -1, n, i, ci;
        for (i = 0; (ci = n = c[i]); i++) {
            while ((n = n.nextSibling) && n.nodeType != 1) {
            }
            if (!n) {
                r[++ri] = ci
            }
        }
        return r
    }, "nth-child": function (c, a) {
        var r = [], ri = -1, m = nthRe.exec(a == "even" && "2n" || a == "odd" && "2n+1" || !nthRe2.test(a) && "n+" + a || a), f = (m[1] || 1) - 0, l = m[2] - 0, i, n, j, cn, pn;
        for (i = 0; n = c[i]; i++) {
            pn = n.parentNode;
            if (batch != pn._batch) {
                j = 0;
                for (cn = pn.firstChild; cn; cn = cn.nextSibling) {
                    if (cn.nodeType == 1) {
                        cn.nodeIndex = ++j
                    }
                }
                pn._batch = batch
            }
            if (f == 1) {
                if (l === 0 || n.nodeIndex == l) {
                    r[++ri] = n
                }
            } else {
                if ((n.nodeIndex + l) % f === 0) {
                    r[++ri] = n
                }
            }
        }
        return r
    }, "only-child": function (c) {
        var r = [], ri = -1, i, ci;
        for (i = 0; ci = c[i]; i++) {
            if (!prev(ci) && !next(ci)) {
                r[++ri] = ci
            }
        }
        return r
    }, empty: function (c) {
        var r = [], ri = -1, i, ci, cns, j, cn, empty;
        for (i = 0; ci = c[i]; i++) {
            cns = ci.childNodes;
            j = 0;
            empty = true;
            while (cn = cns[j]) {
                ++j;
                if (cn.nodeType == 1 || cn.nodeType == 3) {
                    empty = false;
                    break
                }
            }
            if (empty) {
                r[++ri] = ci
            }
        }
        return r
    }, contains: function (c, v) {
        var r = [], ri = -1, i, ci;
        for (i = 0; ci = c[i]; i++) {
            if ((ci.textContent || ci.innerText || ci.text || "").indexOf(v) != -1) {
                r[++ri] = ci
            }
        }
        return r
    }, nodeValue: function (c, v) {
        var r = [], ri = -1, i, ci;
        for (i = 0; ci = c[i]; i++) {
            if (ci.firstChild && ci.firstChild.nodeValue == v) {
                r[++ri] = ci
            }
        }
        return r
    }, checked: function (c) {
        var r = [], ri = -1, i, ci;
        for (i = 0; ci = c[i]; i++) {
            if (ci.checked === true) {
                r[++ri] = ci
            }
        }
        return r
    }, not: function (c, ss) {
        return DQ.filter(c, ss, true)
    }, any: function (c, selectors) {
        var ss = selectors.split("|"), r = [], ri = -1, s, i, ci, j;
        for (i = 0; ci = c[i]; i++) {
            for (j = 0; s = ss[j]; j++) {
                if (DQ.is(ci, s)) {
                    r[++ri] = ci;
                    break
                }
            }
        }
        return r
    }, odd: function (c) {
        return this["nth-child"](c, "odd")
    }, even: function (c) {
        return this["nth-child"](c, "even")
    }, nth: function (c, a) {
        return c[a - 1] || []
    }, first: function (c) {
        return c[0] || []
    }, last: function (c) {
        return c[c.length - 1] || []
    }, has: function (c, ss) {
        var s = DQ.select, r = [], ri = -1, i, ci;
        for (i = 0; ci = c[i]; i++) {
            if (s(ss, ci).length > 0) {
                r[++ri] = ci
            }
        }
        return r
    }, next: function (c, ss) {
        var is = DQ.is, r = [], ri = -1, i, ci, n;
        for (i = 0; ci = c[i]; i++) {
            n = next(ci);
            if (n && is(n, ss)) {
                r[++ri] = ci
            }
        }
        return r
    }, prev: function (c, ss) {
        var is = DQ.is, r = [], ri = -1, i, ci, n;
        for (i = 0; ci = c[i]; i++) {
            n = prev(ci);
            if (n && is(n, ss)) {
                r[++ri] = ci
            }
        }
        return r
    }, focusable: function (candidates) {
        var len = candidates.length, results = [], i = 0, c;
        for (; i < len; i++) {
            c = candidates[i];
            if (Ext.fly(c, "_DomQuery").isFocusable()) {
                results.push(c)
            }
        }
        return results
    }, visible: function (candidates, deep) {
        var len = candidates.length, results = [], i = 0, c;
        for (; i < len; i++) {
            c = candidates[i];
            if (Ext.fly(c, "_DomQuery").isVisible(deep)) {
                results.push(c)
            }
        }
        return results
    }}}
}());
Ext.query = Ext.DomQuery.select;
Ext.define("Ext.dom.Element_anim", {override: "Ext.dom.Element", animate: function (c) {
    var e = this, b = e.dom.id || Ext.id(e.dom), d, g, a;
    if (!Ext.fx.Manager.hasFxBlock(b)) {
        if (c.listeners) {
            d = c.listeners;
            delete c.listeners
        }
        if (c.internalListeners) {
            c.listeners = c.internalListeners;
            delete c.internalListeners
        }
        a = c.autoEnd;
        delete c.autoEnd;
        g = new Ext.fx.Anim(e.anim(c));
        if (d) {
            g.on(d)
        }
        Ext.fx.Manager.queueFx(g);
        if (a) {
            g.jumpToEnd()
        }
    }
    return e
}, anim: function (a) {
    if (!Ext.isObject(a)) {
        return(a) ? {} : false
    }
    var b = this, c = a.duration || Ext.fx.Anim.prototype.duration, e = a.easing || "ease", d;
    if (a.stopAnimation) {
        b.stopAnimation()
    }
    Ext.applyIf(a, Ext.fx.Manager.getFxDefaults(b.id));
    Ext.fx.Manager.setFxDefaults(b.id, {delay: 0});
    d = {target: b.dom, remove: a.remove, alternate: a.alternate || false, duration: c, easing: e, callback: a.callback, listeners: a.listeners, iterations: a.iterations || 1, scope: a.scope, block: a.block, concurrent: a.concurrent, delay: a.delay || 0, paused: true, keyframes: a.keyframes, from: a.from || {}, to: Ext.apply({}, a)};
    Ext.apply(d.to, a.to);
    delete d.to.to;
    delete d.to.from;
    delete d.to.remove;
    delete d.to.alternate;
    delete d.to.keyframes;
    delete d.to.iterations;
    delete d.to.listeners;
    delete d.to.target;
    delete d.to.paused;
    delete d.to.callback;
    delete d.to.scope;
    delete d.to.duration;
    delete d.to.easing;
    delete d.to.concurrent;
    delete d.to.block;
    delete d.to.stopAnimation;
    delete d.to.delay;
    return d
}, slideIn: function (d, c, e) {
    var h = this, b = h.dom, k = b.style, j, a, g, i;
    d = d || "t";
    c = c || {};
    j = function () {
        var p = this, o = c.listeners, n = Ext.fly(b, "_anim"), q, l, r, m;
        if (!e) {
            n.fixDisplay()
        }
        q = n.getBox();
        if ((d == "t" || d == "b") && q.height === 0) {
            q.height = b.scrollHeight
        } else {
            if ((d == "l" || d == "r") && q.width === 0) {
                q.width = b.scrollWidth
            }
        }
        l = n.getStyles("width", "height", "left", "right", "top", "bottom", "position", "z-index", true);
        n.setSize(q.width, q.height);
        if (c.preserveScroll) {
            g = n.cacheScrollValues()
        }
        m = n.wrap({role: "presentation", id: Ext.id() + "-anim-wrap-for-" + n.dom.id, style: {visibility: e ? "visible" : "hidden"}});
        i = m.dom.parentNode;
        m.setPositioning(n.getPositioning(true));
        if (m.isStyle("position", "static")) {
            m.position("relative")
        }
        n.clearPositioning("auto");
        m.clip();
        if (g) {
            g()
        }
        n.setStyle({visibility: "", position: "absolute"});
        if (e) {
            m.setSize(q.width, q.height)
        }
        switch (d) {
            case"t":
                r = {from: {width: q.width + "px", height: "0px"}, to: {width: q.width + "px", height: q.height + "px"}};
                k.bottom = "0px";
                break;
            case"l":
                r = {from: {width: "0px", height: q.height + "px"}, to: {width: q.width + "px", height: q.height + "px"}};
                h.anchorAnimX(d);
                break;
            case"r":
                r = {from: {x: q.x + q.width, width: "0px", height: q.height + "px"}, to: {x: q.x, width: q.width + "px", height: q.height + "px"}};
                h.anchorAnimX(d);
                break;
            case"b":
                r = {from: {y: q.y + q.height, width: q.width + "px", height: "0px"}, to: {y: q.y, width: q.width + "px", height: q.height + "px"}};
                break;
            case"tl":
                r = {from: {x: q.x, y: q.y, width: "0px", height: "0px"}, to: {width: q.width + "px", height: q.height + "px"}};
                k.bottom = "0px";
                h.anchorAnimX("l");
                break;
            case"bl":
                r = {from: {y: q.y + q.height, width: "0px", height: "0px"}, to: {y: q.y, width: q.width + "px", height: q.height + "px"}};
                h.anchorAnimX("l");
                break;
            case"br":
                r = {from: {x: q.x + q.width, y: q.y + q.height, width: "0px", height: "0px"}, to: {x: q.x, y: q.y, width: q.width + "px", height: q.height + "px"}};
                h.anchorAnimX("r");
                break;
            case"tr":
                r = {from: {x: q.x + q.width, width: "0px", height: "0px"}, to: {x: q.x, width: q.width + "px", height: q.height + "px"}};
                k.bottom = "0px";
                h.anchorAnimX("r");
                break
        }
        m.show();
        a = Ext.apply({}, c);
        delete a.listeners;
        a = new Ext.fx.Anim(Ext.applyIf(a, {target: m, duration: 500, easing: "ease-out", from: e ? r.to : r.from, to: e ? r.from : r.to}));
        a.on("afteranimate", function () {
            var s = Ext.fly(b, "_anim");
            s.setStyle(l);
            if (e) {
                if (c.useDisplay) {
                    s.setDisplayed(false)
                } else {
                    s.hide()
                }
            }
            if (m.dom) {
                if (m.dom.parentNode) {
                    m.dom.parentNode.insertBefore(s.dom, m.dom)
                } else {
                    i.appendChild(s.dom)
                }
                m.remove()
            }
            if (g) {
                g()
            }
            p.end()
        });
        if (o) {
            a.on(o)
        }
    };
    h.animate({duration: c.duration ? Math.max(c.duration, 500) * 2 : 1000, listeners: {beforeanimate: j}});
    return h
}, slideOut: function (a, b) {
    return this.slideIn(a, b, true)
}, puff: function (e) {
    var d = this, g = d.dom, b, c = d.getBox(), a = d.getStyles("width", "height", "left", "right", "top", "bottom", "position", "z-index", "font-size", "opacity", true);
    e = Ext.applyIf(e || {}, {easing: "ease-out", duration: 500, useDisplay: false});
    b = function () {
        var h = Ext.fly(g, "_anim");
        h.clearOpacity();
        h.show();
        this.to = {width: c.width * 2, height: c.height * 2, x: c.x - (c.width / 2), y: c.y - (c.height / 2), opacity: 0, fontSize: "200%"};
        this.on("afteranimate", function () {
            var i = Ext.fly(g, "_anim");
            if (i) {
                if (e.useDisplay) {
                    i.setDisplayed(false)
                } else {
                    i.hide()
                }
                i.setStyle(a);
                Ext.callback(e.callback, e.scope)
            }
        })
    };
    d.animate({duration: e.duration, easing: e.easing, listeners: {beforeanimate: {fn: b}}});
    return d
}, switchOff: function (c) {
    var b = this, d = b.dom, a;
    c = Ext.applyIf(c || {}, {easing: "ease-in", duration: 500, remove: false, useDisplay: false});
    a = function () {
        var j = Ext.fly(d, "_anim"), i = this, h = j.getSize(), k = j.getXY(), g, e;
        j.clearOpacity();
        j.clip();
        e = j.getPositioning();
        g = new Ext.fx.Animator({target: d, duration: c.duration, easing: c.easing, keyframes: {33: {opacity: 0.3}, 66: {height: 1, y: k[1] + h.height / 2}, 100: {width: 1, x: k[0] + h.width / 2}}});
        g.on("afteranimate", function () {
            var l = Ext.fly(d, "_anim");
            if (c.useDisplay) {
                l.setDisplayed(false)
            } else {
                l.hide()
            }
            l.clearOpacity();
            l.setPositioning(e);
            l.setSize(h);
            i.end()
        })
    };
    b.animate({duration: (Math.max(c.duration, 500) * 2), listeners: {beforeanimate: {fn: a}}, callback: c.callback, scope: c.scope});
    return b
}, frame: function (a, d, e) {
    var c = this, g = c.dom, b;
    a = a || "#C3DAF9";
    d = d || 1;
    e = e || {};
    b = function () {
        var k = Ext.fly(g, "_anim"), j = this, l, i, h;
        k.show();
        l = k.getBox();
        i = Ext.getBody().createChild({role: "presentation", id: k.dom.id + "-anim-proxy", style: {position: "absolute", "pointer-events": "none", "z-index": 35000, border: "0px solid " + a}});
        h = new Ext.fx.Anim({target: i, duration: e.duration || 1000, iterations: d, from: {top: l.y, left: l.x, borderWidth: 0, opacity: 1, height: l.height, width: l.width}, to: {top: l.y - 20, left: l.x - 20, borderWidth: 10, opacity: 0, height: l.height + 40, width: l.width + 40}});
        h.on("afteranimate", function () {
            i.remove();
            j.end()
        })
    };
    c.animate({duration: (Math.max(e.duration, 500) * 2) || 2000, listeners: {beforeanimate: {fn: b}}, callback: e.callback, scope: e.scope});
    return c
}, ghost: function (a, d) {
    var c = this, e = c.dom, b;
    a = a || "b";
    b = function () {
        var j = Ext.fly(e, "_anim"), i = j.getWidth(), h = j.getHeight(), k = j.getXY(), g = j.getPositioning(), l = {opacity: 0};
        switch (a) {
            case"t":
                l.y = k[1] - h;
                break;
            case"l":
                l.x = k[0] - i;
                break;
            case"r":
                l.x = k[0] + i;
                break;
            case"b":
                l.y = k[1] + h;
                break;
            case"tl":
                l.x = k[0] - i;
                l.y = k[1] - h;
                break;
            case"bl":
                l.x = k[0] - i;
                l.y = k[1] + h;
                break;
            case"br":
                l.x = k[0] + i;
                l.y = k[1] + h;
                break;
            case"tr":
                l.x = k[0] + i;
                l.y = k[1] - h;
                break
        }
        this.to = l;
        this.on("afteranimate", function () {
            var m = Ext.fly(e, "_anim");
            if (m) {
                m.hide();
                m.clearOpacity();
                m.setPositioning(g)
            }
        })
    };
    c.animate(Ext.applyIf(d || {}, {duration: 500, easing: "ease-out", listeners: {beforeanimate: b}}));
    return c
}, highlight: function (d, b) {
    var i = this, e = i.dom, k = {}, h, l, g, c, a, j;
    if (e.tagName.match(i.tableTagRe)) {
        return i.select("div").highlight(d, b)
    }
    b = b || {};
    c = b.listeners || {};
    g = b.attr || "backgroundColor";
    k[g] = d || "ffff9c";
    if (!b.to) {
        l = {};
        l[g] = b.endColor || i.getColor(g, "ffffff", "")
    } else {
        l = b.to
    }
    b.listeners = Ext.apply(Ext.apply({}, c), {beforeanimate: function () {
        h = e.style[g];
        var m = Ext.fly(e, "_anim");
        m.clearOpacity();
        m.show();
        a = c.beforeanimate;
        if (a) {
            j = a.fn || a;
            return j.apply(a.scope || c.scope || window, arguments)
        }
    }, afteranimate: function () {
        if (e) {
            e.style[g] = h
        }
        a = c.afteranimate;
        if (a) {
            j = a.fn || a;
            j.apply(a.scope || c.scope || window, arguments)
        }
    }});
    i.animate(Ext.apply({}, b, {duration: 1000, easing: "ease-in", from: k, to: l}));
    return i
}, pause: function (a) {
    var b = this;
    Ext.fx.Manager.setFxDefaults(b.id, {delay: a});
    return b
}, fadeIn: function (c) {
    var a = this, b = a.dom;
    a.animate(Ext.apply({}, c, {opacity: 1, internalListeners: {beforeanimate: function (e) {
        var d = Ext.fly(b, "_anim");
        if (d.isStyle("display", "none")) {
            d.setDisplayed("")
        } else {
            d.show()
        }
    }}}));
    return this
}, fadeOut: function (c) {
    var a = this, b = a.dom;
    c = Ext.apply({opacity: 0, internalListeners: {afteranimate: function (e) {
        if (b && e.to.opacity === 0) {
            var d = Ext.fly(b, "_anim");
            if (c.useDisplay) {
                d.setDisplayed(false)
            } else {
                d.hide()
            }
        }
    }}}, c);
    a.animate(c);
    return a
}, scale: function (a, b, c) {
    this.animate(Ext.apply({}, c, {width: a, height: b}));
    return this
}, shift: function (a) {
    this.animate(a);
    return this
}, anchorAnimX: function (a) {
    var b = (a === "l") ? "right" : "left";
    this.dom.style[b] = "0px"
}});
Ext.define("Ext.dom.Element_dd", {override: "Ext.dom.Element", initDD: function (c, b, d) {
    var a = new Ext.dd.DD(Ext.id(this.dom), c, b);
    return Ext.apply(a, d)
}, initDDProxy: function (c, b, d) {
    var a = new Ext.dd.DDProxy(Ext.id(this.dom), c, b);
    return Ext.apply(a, d)
}, initDDTarget: function (c, b, d) {
    var a = new Ext.dd.DDTarget(Ext.id(this.dom), c, b);
    return Ext.apply(a, d)
}});
Ext.define("Ext.dom.Element_fx", {override: "Ext.dom.Element"}, function () {
    var b = Ext.dom.Element, i = "visibility", g = "display", n = "none", e = "hidden", m = "visible", o = "offsets", j = "asclass", a = "nosize", c = "originalDisplay", d = "visibilityMode", h = "isVisible", l = Ext.baseCSSPrefix + "hide-offsets", k = function (q) {
        var r = (q.$cache || q.getCache()).data, s = r[c];
        if (s === undefined) {
            r[c] = s = ""
        }
        return s
    }, p = function (r) {
        var s = (r.$cache || r.getCache()).data, q = s[d];
        if (q === undefined) {
            s[d] = q = b.VISIBILITY
        }
        return q
    };
    b.override({originalDisplay: "", visibilityMode: 1, setVisible: function (u, q) {
        var s = this, t = s.dom, r = p(s);
        if (typeof q == "string") {
            switch (q) {
                case g:
                    r = b.DISPLAY;
                    break;
                case i:
                    r = b.VISIBILITY;
                    break;
                case o:
                    r = b.OFFSETS;
                    break;
                case a:
                case j:
                    r = b.ASCLASS;
                    break
            }
            s.setVisibilityMode(r);
            q = false
        }
        if (!q || !s.anim) {
            if (r == b.DISPLAY) {
                return s.setDisplayed(u)
            } else {
                if (r == b.OFFSETS) {
                    s[u ? "removeCls" : "addCls"](l)
                } else {
                    if (r == b.VISIBILITY) {
                        s.fixDisplay();
                        t.style.visibility = u ? "" : e
                    } else {
                        if (r == b.ASCLASS) {
                            s[u ? "removeCls" : "addCls"](s.visibilityCls || b.visibilityCls)
                        }
                    }
                }
            }
        } else {
            if (u) {
                s.setOpacity(0.01);
                s.setVisible(true)
            }
            if (!Ext.isObject(q)) {
                q = {duration: 350, easing: "ease-in"}
            }
            s.animate(Ext.applyIf({callback: function () {
                if (!u) {
                    Ext.fly(t, "_internal").setVisible(false).setOpacity(1)
                }
            }, to: {opacity: (u) ? 1 : 0}}, q))
        }
        (s.$cache || s.getCache()).data[h] = u;
        return s
    }, hasMetrics: function () {
        var q = p(this);
        return this.isVisible() || (q == b.OFFSETS) || (q == b.VISIBILITY)
    }, toggle: function (q) {
        var r = this;
        r.setVisible(!r.isVisible(), r.anim(q));
        return r
    }, setDisplayed: function (q) {
        if (typeof q == "boolean") {
            q = q ? k(this) : n
        }
        this.setStyle(g, q);
        return this
    }, fixDisplay: function () {
        var q = this;
        if (q.isStyle(g, n)) {
            q.setStyle(i, e);
            q.setStyle(g, k(q));
            if (q.isStyle(g, n)) {
                q.setStyle(g, "block")
            }
        }
    }, hide: function (q) {
        if (typeof q == "string") {
            this.setVisible(false, q);
            return this
        }
        this.setVisible(false, this.anim(q));
        return this
    }, show: function (q) {
        if (typeof q == "string") {
            this.setVisible(true, q);
            return this
        }
        this.setVisible(true, this.anim(q));
        return this
    }})
});
Ext.define("Ext.dom.Element_position", {override: "Ext.dom.Element"}, function () {
    var x, q = this, m = "left", j = "right", p = "top", h = "bottom", n = "position", i = "static", y = "relative", u = "z-index", t = "BODY", c = "padding", s = "border", r = "-left", l = "-right", a = "-top", k = "-bottom", g = "-width", e = {l: s + r + g, r: s + l + g, t: s + a + g, b: s + k + g}, d = {l: c + r, r: c + l, t: c + a, b: c + k}, v = [d.l, d.r, d.t, d.b], b = [e.l, e.r, e.t, e.b], w = Math.round, z = document, o = function (A) {
        if (!x) {
            x = new Ext.Element.Fly()
        }
        x.attach(A);
        return x
    };
    q.override({pxRe: /^\d+(?:\.\d*)?px$/i, inheritableStatics: {getX: function (A) {
        return q.getXY(A)[0]
    }, getXY: function (C) {
        var F = z.body, B = z.documentElement, A = 0, D = 0, G = [0, 0], E, I;
        C = Ext.getDom(C);
        if (C != z && C != F) {
            if (Ext.isIE) {
                try {
                    E = C.getBoundingClientRect();
                    D = B.clientTop || F.clientTop;
                    A = B.clientLeft || F.clientLeft
                } catch (H) {
                    E = {left: 0, top: 0}
                }
            } else {
                E = C.getBoundingClientRect()
            }
            I = o(z).getScroll();
            G = [w(E.left + I.left - A), w(E.top + I.top - D)]
        }
        return G
    }, getY: function (A) {
        return q.getXY(A)[1]
    }, setX: function (B, A) {
        q.setXY(B, [A, false])
    }, setXY: function (B, C) {
        (B = Ext.fly(B, "_setXY")).position();
        var D = B.translatePoints(C), A = B.dom.style, E;
        A.right = "auto";
        for (E in D) {
            if (!isNaN(D[E])) {
                A[E] = D[E] + "px"
            }
        }
    }, setY: function (A, B) {
        q.setXY(A, [false, B])
    }}, center: function (A) {
        return this.alignTo(A || z, "c-c")
    }, clearPositioning: function (A) {
        A = A || "";
        return this.setStyle({left: A, right: A, top: A, bottom: A, "z-index": "", position: i})
    }, getAnchorToXY: function (D, A, C, B) {
        return D.getAnchorXY(A, C, B)
    }, getBottom: function (A) {
        return(A ? this.getLocalY() : this.getY()) + this.getHeight()
    }, getBorderPadding: function () {
        var A = this.getStyle(v), B = this.getStyle(b);
        return{beforeX: (parseFloat(B[e.l]) || 0) + (parseFloat(A[d.l]) || 0), afterX: (parseFloat(B[e.r]) || 0) + (parseFloat(A[d.r]) || 0), beforeY: (parseFloat(B[e.t]) || 0) + (parseFloat(A[d.t]) || 0), afterY: (parseFloat(B[e.b]) || 0) + (parseFloat(A[d.b]) || 0)}
    }, getCenterXY: function () {
        return this.getAlignToXY(z, "c-c")
    }, getLeft: function (A) {
        return A ? this.getLocalX() : this.getX()
    }, getLocalX: function () {
        var C = this, B = C.dom.offsetParent, A = C.getStyle("left");
        if (!A || A === "auto") {
            A = 0
        } else {
            if (C.pxRe.test(A)) {
                A = parseFloat(A)
            } else {
                A = C.getX();
                if (B) {
                    A -= q.getX(B)
                }
            }
        }
        return A
    }, getLocalXY: function () {
        var D = this, C = D.dom.offsetParent, B = D.getStyle(["left", "top"]), A = B.left, E = B.top;
        if (!A || A === "auto") {
            A = 0
        } else {
            if (D.pxRe.test(A)) {
                A = parseFloat(A)
            } else {
                A = D.getX();
                if (C) {
                    A -= q.getX(C)
                }
            }
        }
        if (!E || E === "auto") {
            E = 0
        } else {
            if (D.pxRe.test(E)) {
                E = parseFloat(E)
            } else {
                E = D.getY();
                if (C) {
                    E -= q.getY(C)
                }
            }
        }
        return[A, E]
    }, getLocalY: function () {
        var B = this, A = B.dom.offsetParent, C = B.getStyle("top");
        if (!C || C === "auto") {
            C = 0
        } else {
            if (B.pxRe.test(C)) {
                C = parseFloat(C)
            } else {
                C = B.getY();
                if (A) {
                    C -= q.getY(A)
                }
            }
        }
        return C
    }, getPageBox: function (C) {
        var F = this, D = F.dom, H = D.nodeName == t, I = H ? Ext.Element.getViewWidth() : D.offsetWidth, E = H ? Ext.Element.getViewHeight() : D.offsetHeight, K = F.getXY(), J = K[1], A = K[0] + I, G = K[1] + E, B = K[0];
        if (C) {
            return new Ext.util.Region(J, A, G, B)
        } else {
            return{left: B, top: J, width: I, height: E, right: A, bottom: G}
        }
    }, getPositioning: function (B) {
        var A = this.getStyle(["left", "top", "position", "z-index"]), C = this.dom;
        if (B) {
            if (A.left === "auto") {
                A.left = C.offsetLeft + "px"
            }
            if (A.top === "auto") {
                A.top = C.offsetTop + "px"
            }
        }
        return A
    }, getRight: function (A) {
        return(A ? this.getLocalX() : this.getX()) + this.getWidth()
    }, getTop: function (A) {
        return A ? this.getLocalY() : this.getY()
    }, getX: function () {
        return q.getX(this.dom)
    }, getXY: function () {
        return q.getXY(this.dom)
    }, getY: function () {
        return q.getY(this.dom)
    }, moveTo: function (A, C, B) {
        return this.setXY([A, C], B)
    }, position: function (E, D, A, C) {
        var B = this;
        if (!E && B.isStyle(n, i)) {
            B.setStyle(n, y)
        } else {
            if (E) {
                B.setStyle(n, E)
            }
        }
        if (D) {
            B.setStyle(u, D)
        }
        if (A || C) {
            B.setXY([A || false, C || false])
        }
    }, setBottom: function (A) {
        this.dom.style[h] = this.addUnits(A);
        return this
    }, setBounds: function (B, E, D, A, C) {
        return this.setBox({x: B, y: E, width: D, height: A}, C)
    }, setLeft: function (A) {
        this.dom.style[m] = this.addUnits(A);
        return this
    }, setLeftTop: function (D, C) {
        var B = this, A = B.dom.style;
        A.left = B.addUnits(D);
        A.top = B.addUnits(C);
        return B
    }, setLocalX: function (A) {
        var B = this.dom.style;
        B.right = "auto";
        B.left = (A === null) ? "auto" : A + "px"
    }, setLocalXY: function (A, C) {
        var B = this.dom.style;
        B.right = "auto";
        if (A && A.length) {
            C = A[1];
            A = A[0]
        }
        if (A === null) {
            B.left = "auto"
        } else {
            if (A !== undefined) {
                B.left = A + "px"
            }
        }
        if (C === null) {
            B.top = "auto"
        } else {
            if (C !== undefined) {
                B.top = C + "px"
            }
        }
    }, setLocalY: function (A) {
        this.dom.style.top = (A === null) ? "auto" : A + "px"
    }, setLocation: function (A, C, B) {
        return this.setXY([A, C], B)
    }, setPositioning: function (A) {
        return this.setStyle(A)
    }, setRight: function (A) {
        this.dom.style[j] = this.addUnits(A);
        return this
    }, setTop: function (A) {
        this.dom.style[p] = this.addUnits(A);
        return this
    }, setX: function (A, B) {
        return this.setXY([A, this.getY()], B)
    }, setXY: function (C, A) {
        var B = this;
        if (!A || !B.anim) {
            q.setXY(B.dom, C)
        } else {
            if (!Ext.isObject(A)) {
                A = {}
            }
            B.animate(Ext.applyIf({to: {x: C[0], y: C[1]}}, A))
        }
        return this
    }, setY: function (B, A) {
        return this.setXY([this.getX(), B], A)
    }});
    q.getTrueXY = q.getXY
});
Ext.define("Ext.dom.Element_scroll", {override: "Ext.dom.Element", isScrollable: function () {
    var a = this.dom;
    return a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth
}, getScroll: function () {
    var c = this, h = c.dom, g = document, a = g.body, b = g.documentElement, e, d;
    if (h === g || h === a) {
        e = b.scrollLeft || (a ? a.scrollLeft : 0);
        d = b.scrollTop || (a ? a.scrollTop : 0)
    } else {
        e = h.scrollLeft;
        d = h.scrollTop
    }
    return{left: e, top: d}
}, getScrollLeft: function () {
    var b = this.dom, a = document;
    if (b === a || b === a.body) {
        return this.getScroll().left
    } else {
        return b.scrollLeft
    }
}, getScrollTop: function () {
    var b = this.dom, a = document;
    if (b === a || b === a.body) {
        return this.getScroll().top
    } else {
        return b.scrollTop
    }
}, setScrollLeft: function (a) {
    this.dom.scrollLeft = a;
    return this
}, setScrollTop: function (a) {
    this.dom.scrollTop = a;
    return this
}, scrollBy: function (b, a, c) {
    var d = this, e = d.dom;
    if (b.length) {
        c = a;
        a = b[1];
        b = b[0]
    } else {
        if (typeof b != "number") {
            c = a;
            a = b.y;
            b = b.x
        }
    }
    if (b) {
        d.scrollTo("left", d.constrainScrollLeft(e.scrollLeft + b), c)
    }
    if (a) {
        d.scrollTo("top", d.constrainScrollTop(e.scrollTop + a), c)
    }
    return d
}, scrollTo: function (c, e, a) {
    var g = /top/i.test(c), d = this, i = g ? "scrollTop" : "scrollLeft", h = d.dom, b;
    if (!a || !d.anim) {
        h[i] = e;
        h[i] = e
    } else {
        b = {to: {}};
        b.to[i] = e;
        if (Ext.isObject(a)) {
            Ext.applyIf(b, a)
        }
        d.animate(b)
    }
    return d
}, scrollIntoView: function (b, e, c, h) {
    var m = this, k = m.dom, i = m.getOffsetsTo(b = Ext.getDom(b) || Ext.getBody().dom), g = i[0] + b.scrollLeft, n = i[1] + b.scrollTop, a = n + k.offsetHeight, o = g + k.offsetWidth, r = b.clientHeight, q = parseInt(b.scrollTop, 10), d = parseInt(b.scrollLeft, 10), j = q + r, p = d + b.clientWidth, l;
    if (h) {
        if (c) {
            c = Ext.apply({listeners: {afteranimate: function () {
                m.scrollChildFly.attach(k).highlight()
            }}}, c)
        } else {
            m.scrollChildFly.attach(k).highlight()
        }
    }
    if (k.offsetHeight > r || n < q) {
        l = n
    } else {
        if (a > j) {
            l = a - r
        }
    }
    if (l != null) {
        m.scrollChildFly.attach(b).scrollTo("top", l, c)
    }
    if (e !== false) {
        l = null;
        if (k.offsetWidth > b.clientWidth || g < d) {
            l = g
        } else {
            if (o > p) {
                l = o - b.clientWidth
            }
        }
        if (l != null) {
            m.scrollChildFly.attach(b).scrollTo("left", l, c)
        }
    }
    return m
}, scrollChildIntoView: function (b, a) {
    this.scrollChildFly.attach(Ext.getDom(b)).scrollIntoView(this, a)
}, scroll: function (j, a, c) {
    if (!this.isScrollable()) {
        return false
    }
    j = j.charAt(0);
    var i = this, e = i.dom, h = j === "r" || j === "l" ? "left" : "top", b = false, d, g;
    if (j === "l" || j === "t" || j === "u") {
        a = -a
    }
    if (h === "left") {
        d = e.scrollLeft;
        g = i.constrainScrollLeft(d + a)
    } else {
        d = e.scrollTop;
        g = i.constrainScrollTop(d + a)
    }
    if (g !== d) {
        this.scrollTo(h, g, c);
        b = true
    }
    return b
}, constrainScrollLeft: function (a) {
    var b = this.dom;
    return Math.max(Math.min(a, b.scrollWidth - b.clientWidth), 0)
}, constrainScrollTop: function (a) {
    var b = this.dom;
    return Math.max(Math.min(a, b.scrollHeight - b.clientHeight), 0)
}}, function () {
    this.prototype.scrollChildFly = new this.Fly();
    this.prototype.scrolltoFly = new this.Fly()
});
Ext.define("Ext.dom.Element_style", {override: "Ext.dom.Element"}, function () {
    var r = this, n = document.defaultView, p = /table-row|table-.*-group/, a = "_internal", t = "hidden", q = "height", h = "width", e = "isClipped", j = "overflow", m = "overflow-x", l = "overflow-y", u = "originalClip", b = /#document|body/i, v, g, o, d, s, i, w;
    if (!n || !n.getComputedStyle) {
        r.prototype.getStyle = function (B, A) {
            var N = this, I = N.dom, L = typeof B != "string", k = N.styleHooks, y = B, z = y, H = 1, D = A, M, E, x, C, G, J, F;
            if (L) {
                x = {};
                y = z[0];
                F = 0;
                if (!(H = z.length)) {
                    return x
                }
            }
            if (!I || I.documentElement) {
                return x || ""
            }
            E = I.style;
            if (A) {
                J = E
            } else {
                J = I.currentStyle;
                if (!J) {
                    D = true;
                    J = E
                }
            }
            do {
                C = k[y];
                if (!C) {
                    k[y] = C = {name: r.normalize(y)}
                }
                if (C.get) {
                    G = C.get(I, N, D, J)
                } else {
                    M = C.name;
                    if (C.canThrow) {
                        try {
                            G = J[M]
                        } catch (K) {
                            G = ""
                        }
                    } else {
                        G = J ? J[M] : ""
                    }
                }
                if (!L) {
                    return G
                }
                x[y] = G;
                y = z[++F]
            } while (F < H);
            return x
        }
    }
    r.override({getHeight: function (z, x) {
        var y = this, A = y.isStyle("display", "none"), k, B;
        if (A) {
            return 0
        }
        k = y.dom.offsetHeight;
        if (Ext.supports.Direct2DBug) {
            B = y.adjustDirect2DDimension(q);
            if (x) {
                k += B
            } else {
                if (B > 0 && B < 0.5) {
                    k++
                }
            }
        }
        if (z) {
            k -= y.getBorderWidth("tb") + y.getPadding("tb")
        }
        return(k < 0) ? 0 : k
    }, getWidth: function (k, B) {
        var z = this, C = z.dom, A = z.isStyle("display", "none"), y, x, D;
        if (A) {
            return 0
        }
        if (Ext.supports.BoundingClientRect) {
            y = C.getBoundingClientRect();
            x = (z.vertical && !Ext.isIE9 && !Ext.supports.RotatedBoundingClientRect) ? (y.bottom - y.top) : (y.right - y.left);
            x = B ? x : Math.ceil(x)
        } else {
            x = C.offsetWidth
        }
        if (Ext.supports.Direct2DBug && !z.vertical) {
            D = z.adjustDirect2DDimension(h);
            if (B) {
                x += D
            } else {
                if (D > 0 && D < 0.5) {
                    x++
                }
            }
        }
        if (k) {
            x -= z.getBorderWidth("lr") + z.getPadding("lr")
        }
        return(x < 0) ? 0 : x
    }, setWidth: function (x, k) {
        var y = this;
        x = y.adjustWidth(x);
        if (!k || !y.anim) {
            y.dom.style.width = y.addUnits(x)
        } else {
            if (!Ext.isObject(k)) {
                k = {}
            }
            y.animate(Ext.applyIf({to: {width: x}}, k))
        }
        return y
    }, setHeight: function (k, x) {
        var y = this;
        k = y.adjustHeight(k);
        if (!x || !y.anim) {
            y.dom.style.height = y.addUnits(k)
        } else {
            if (!Ext.isObject(x)) {
                x = {}
            }
            y.animate(Ext.applyIf({to: {height: k}}, x))
        }
        return y
    }, applyStyles: function (k) {
        Ext.DomHelper.applyStyles(this.dom, k);
        return this
    }, setSize: function (y, k, x) {
        var z = this;
        if (Ext.isObject(y)) {
            x = k;
            k = y.height;
            y = y.width
        }
        y = z.adjustWidth(y);
        k = z.adjustHeight(k);
        if (!x || !z.anim) {
            z.dom.style.width = z.addUnits(y);
            z.dom.style.height = z.addUnits(k)
        } else {
            if (x === true) {
                x = {}
            }
            z.animate(Ext.applyIf({to: {width: y, height: k}}, x))
        }
        return z
    }, getViewSize: function () {
        var y = this, z = y.dom, x = b.test(z.nodeName), k;
        if (x) {
            k = {width: r.getViewWidth(), height: r.getViewHeight()}
        } else {
            k = {width: z.clientWidth, height: z.clientHeight}
        }
        return k
    }, getSize: function (k) {
        return{width: this.getWidth(k), height: this.getHeight(k)}
    }, adjustWidth: function (k) {
        var x = this, y = (typeof k == "number");
        if (y && x.autoBoxAdjust && !x.isBorderBox()) {
            k -= (x.getBorderWidth("lr") + x.getPadding("lr"))
        }
        return(y && k < 0) ? 0 : k
    }, adjustHeight: function (k) {
        var x = this, y = (typeof k == "number");
        if (y && x.autoBoxAdjust && !x.isBorderBox()) {
            k -= (x.getBorderWidth("tb") + x.getPadding("tb"))
        }
        return(y && k < 0) ? 0 : k
    }, getColor: function (x, y, D) {
        var A = this.getStyle(x), z = D || D === "" ? D : "#", C, k, B = 0;
        if (!A || (/transparent|inherit/.test(A))) {
            return y
        }
        if (/^r/.test(A)) {
            A = A.slice(4, A.length - 1).split(",");
            k = A.length;
            for (; B < k; B++) {
                C = parseInt(A[B], 10);
                z += (C < 16 ? "0" : "") + C.toString(16)
            }
        } else {
            A = A.replace("#", "");
            z += A.length == 3 ? A.replace(/^(\w)(\w)(\w)$/, "$1$1$2$2$3$3") : A
        }
        return(z.length > 5 ? z.toLowerCase() : y)
    }, setOpacity: function (x, k) {
        var y = this;
        if (!y.dom) {
            return y
        }
        if (!k || !y.anim) {
            y.setStyle("opacity", x)
        } else {
            if (typeof k != "object") {
                k = {duration: 350, easing: "ease-in"}
            }
            y.animate(Ext.applyIf({to: {opacity: x}}, k))
        }
        return y
    }, clearOpacity: function () {
        return this.setOpacity("")
    }, adjustDirect2DDimension: function (y) {
        var D = this, x = D.dom, B = D.getStyle("display"), A = x.style.display, E = x.style.position, C = y === h ? 0 : 1, k = x.currentStyle, z;
        if (B === "inline") {
            x.style.display = "inline-block"
        }
        x.style.position = B.match(p) ? "absolute" : "static";
        z = (parseFloat(k[y]) || parseFloat(k.msTransformOrigin.split(" ")[C]) * 2) % 1;
        x.style.position = E;
        if (B === "inline") {
            x.style.display = A
        }
        return z
    }, clip: function () {
        var x = this, y = (x.$cache || x.getCache()).data, k;
        if (!y[e]) {
            y[e] = true;
            k = x.getStyle([j, m, l]);
            y[u] = {o: k[j], x: k[m], y: k[l]};
            x.setStyle(j, t);
            x.setStyle(m, t);
            x.setStyle(l, t)
        }
        return x
    }, unclip: function () {
        var x = this, y = (x.$cache || x.getCache()).data, k;
        if (y[e]) {
            y[e] = false;
            k = y[u];
            if (k.o) {
                x.setStyle(j, k.o)
            }
            if (k.x) {
                x.setStyle(m, k.x)
            }
            if (k.y) {
                x.setStyle(l, k.y)
            }
        }
        return x
    }, boxWrap: function (k) {
        k = k || Ext.baseCSSPrefix + "box";
        var x = Ext.get(this.insertHtml("beforeBegin", "<div class='" + k + "' role='presentation'>" + Ext.String.format(r.boxMarkup, k) + "</div>"));
        Ext.DomQuery.selectNode("." + k + "-mc", x.dom).appendChild(this.dom);
        return x
    }, getComputedHeight: function () {
        var x = this, k = Math.max(x.dom.offsetHeight, x.dom.clientHeight);
        if (!k) {
            k = parseFloat(x.getStyle(q)) || 0;
            if (!x.isBorderBox()) {
                k += x.getFrameWidth("tb")
            }
        }
        return k
    }, getComputedWidth: function () {
        var x = this, k = Math.max(x.dom.offsetWidth, x.dom.clientWidth);
        if (!k) {
            k = parseFloat(x.getStyle(h)) || 0;
            if (!x.isBorderBox()) {
                k += x.getFrameWidth("lr")
            }
        }
        return k
    }, getFrameWidth: function (x, k) {
        return(k && this.isBorderBox()) ? 0 : (this.getPadding(x) + this.getBorderWidth(x))
    }, addClsOnOver: function (y, B, x) {
        var z = this, A = z.dom, k = Ext.isFunction(B);
        z.hover(function () {
            if (k && B.call(x || z, z) === false) {
                return
            }
            Ext.fly(A, a).addCls(y)
        }, function () {
            Ext.fly(A, a).removeCls(y)
        });
        return z
    }, addClsOnFocus: function (y, B, x) {
        var z = this, A = z.dom, k = Ext.isFunction(B);
        z.on("focus", function () {
            if (k && B.call(x || z, z) === false) {
                return false
            }
            Ext.fly(A, a).addCls(y)
        });
        z.on("blur", function () {
            Ext.fly(A, a).removeCls(y)
        });
        return z
    }, addClsOnClick: function (y, B, x) {
        var z = this, A = z.dom, k = Ext.isFunction(B);
        z.on("mousedown", function () {
            if (k && B.call(x || z, z) === false) {
                return false
            }
            Ext.fly(A, a).addCls(y);
            var D = Ext.getDoc(), C = function () {
                Ext.fly(A, a).removeCls(y);
                D.removeListener("mouseup", C)
            };
            D.on("mouseup", C)
        });
        return z
    }, getStyleSize: function () {
        var A = this, B = this.dom, x = b.test(B.nodeName), z, k, y;
        if (x) {
            return{width: r.getViewWidth(), height: r.getViewHeight()}
        }
        z = A.getStyle([q, h], true);
        if (z.width && z.width != "auto") {
            k = parseFloat(z.width);
            if (A.isBorderBox()) {
                k -= A.getFrameWidth("lr")
            }
        }
        if (z.height && z.height != "auto") {
            y = parseFloat(z.height);
            if (A.isBorderBox()) {
                y -= A.getFrameWidth("tb")
            }
        }
        return{width: k || A.getWidth(true), height: y || A.getHeight(true)}
    }, statics: {selectableCls: Ext.baseCSSPrefix + "selectable", unselectableCls: Ext.baseCSSPrefix + "unselectable"}, selectable: function () {
        var k = this;
        k.dom.unselectable = "";
        k.removeCls(r.unselectableCls);
        k.addCls(r.selectableCls);
        return k
    }, unselectable: function () {
        var k = this;
        if (Ext.isOpera) {
            k.dom.unselectable = "on"
        }
        k.removeCls(r.selectableCls);
        k.addCls(r.unselectableCls);
        return k
    }, setVertical: function (A, x) {
        var z = this, y = r.prototype, k;
        z.vertical = true;
        if (x) {
            z.addCls(z.verticalCls = x)
        }
        z.setWidth = y.setHeight;
        z.setHeight = y.setWidth;
        if (!Ext.isIE9m) {
            z.getWidth = y.getHeight;
            z.getHeight = y.getWidth
        }
        z.styleHooks = (A === 270) ? r.prototype.verticalStyleHooks270 : r.prototype.verticalStyleHooks90
    }, setHorizontal: function () {
        var x = this, k = x.verticalCls;
        delete x.vertical;
        if (k) {
            delete x.verticalCls;
            x.removeCls(k)
        }
        delete x.setWidth;
        delete x.setHeight;
        if (!Ext.isIE9m) {
            delete x.getWidth;
            delete x.getHeight
        }
        delete x.styleHooks
    }});
    r.prototype.styleHooks = v = Ext.dom.AbstractElement.prototype.styleHooks;
    r.prototype.verticalStyleHooks90 = g = Ext.Object.chain(r.prototype.styleHooks);
    r.prototype.verticalStyleHooks270 = o = Ext.Object.chain(r.prototype.styleHooks);
    g.width = {name: "height"};
    g.height = {name: "width"};
    g["margin-top"] = {name: "marginLeft"};
    g["margin-right"] = {name: "marginTop"};
    g["margin-bottom"] = {name: "marginRight"};
    g["margin-left"] = {name: "marginBottom"};
    g["padding-top"] = {name: "paddingLeft"};
    g["padding-right"] = {name: "paddingTop"};
    g["padding-bottom"] = {name: "paddingRight"};
    g["padding-left"] = {name: "paddingBottom"};
    g["border-top"] = {name: "borderLeft"};
    g["border-right"] = {name: "borderTop"};
    g["border-bottom"] = {name: "borderRight"};
    g["border-left"] = {name: "borderBottom"};
    o.width = {name: "height"};
    o.height = {name: "width"};
    o["margin-top"] = {name: "marginRight"};
    o["margin-right"] = {name: "marginBottom"};
    o["margin-bottom"] = {name: "marginLeft"};
    o["margin-left"] = {name: "marginTop"};
    o["padding-top"] = {name: "paddingRight"};
    o["padding-right"] = {name: "paddingBottom"};
    o["padding-bottom"] = {name: "paddingLeft"};
    o["padding-left"] = {name: "paddingTop"};
    o["border-top"] = {name: "borderRight"};
    o["border-right"] = {name: "borderBottom"};
    o["border-bottom"] = {name: "borderLeft"};
    o["border-left"] = {name: "borderTop"};
    if (Ext.isIE7m) {
        v.fontSize = v["font-size"] = {name: "fontSize", canThrow: true};
        v.fontStyle = v["font-style"] = {name: "fontStyle", canThrow: true};
        v.fontFamily = v["font-family"] = {name: "fontFamily", canThrow: true}
    }
    if (Ext.isIEQuirks || Ext.isIE && Ext.ieVersion <= 8) {
        function c(z, x, y, k) {
            if (k[this.styleName] == "none") {
                return"0px"
            }
            return k[this.name]
        }

        d = ["Top", "Right", "Bottom", "Left"];
        s = d.length;
        while (s--) {
            i = d[s];
            w = "border" + i + "Width";
            v["border-" + i.toLowerCase() + "-width"] = v[w] = {name: w, styleName: "border" + i + "Style", get: c}
        }
    }
    Ext.getDoc().on("selectstart", function (A, C) {
        var B = document.documentElement, z = r.selectableCls, y = r.unselectableCls, k = C && C.tagName;
        k = k && k.toLowerCase();
        if (k === "input" || k === "textarea") {
            return
        }
        while (C && C.nodeType === 1 && C !== B) {
            var x = Ext.fly(C);
            if (x.hasCls(z)) {
                return
            }
            if (x.hasCls(y)) {
                A.stopEvent();
                return
            }
            C = C.parentNode
        }
    })
});
Ext.onReady(function () {
    var c = /alpha\(opacity=(.*)\)/i, b = /^\s+|\s+$/g, a = Ext.dom.Element.prototype.styleHooks;
    a.opacity = {name: "opacity", afterSet: function (g, e, d) {
        if (d.isLayer) {
            d.onOpacitySet(e)
        }
    }};
    if (!Ext.supports.Opacity && Ext.isIE) {
        Ext.apply(a.opacity, {get: function (h) {
            var g = h.style.filter, e, d;
            if (g.match) {
                e = g.match(c);
                if (e) {
                    d = parseFloat(e[1]);
                    if (!isNaN(d)) {
                        return d ? d / 100 : 0
                    }
                }
            }
            return 1
        }, set: function (h, e) {
            var d = h.style, g = d.filter.replace(c, "").replace(b, "");
            d.zoom = 1;
            if (typeof(e) == "number" && e >= 0 && e < 1) {
                e *= 100;
                d.filter = g + (g.length ? " " : "") + "alpha(opacity=" + e + ")"
            } else {
                d.filter = g
            }
        }})
    }
});
(Ext.cmd.derive("Ext.util.Positionable", Ext.Base, {_positionTopLeft: ["position", "top", "left"], _alignRe: /^([a-z]+)-([a-z]+)(\?)?$/, afterSetPosition: Ext.emptyFn, adjustForConstraints: function (c, b) {
    var a = this.getConstrainVector(b, c);
    if (a) {
        c[0] += a[0];
        c[1] += a[1]
    }
    return c
}, alignTo: function (c, a, g, b) {
    var e = this, d = e.el;
    return e.setXY(e.getAlignToXY(c, a, g), d.anim && !!b ? d.anim(b) : false)
}, anchorTo: function (h, e, b, a, j, k) {
    var g = this, i = !Ext.isEmpty(j), c = function () {
        g.alignTo(h, e, b, a);
        Ext.callback(k, g)
    }, d = g.getAnchor();
    g.removeAnchor();
    Ext.apply(d, {fn: c, scroll: i});
    Ext.EventManager.onWindowResize(c, null);
    if (i) {
        Ext.EventManager.on(window, "scroll", c, null, {buffer: !isNaN(j) ? j : 50})
    }
    c();
    return g
}, calculateAnchorXY: function (g, i, h, d) {
    var j = this, c = j.el, k = document, e = c.dom == k.body || c.dom == k, l = Math.round, m, b, a;
    g = (g || "tl").toLowerCase();
    d = d || {};
    b = d.width || (e ? Ext.Element.getViewWidth() : j.getWidth());
    a = d.height || (e ? Ext.Element.getViewHeight() : j.getHeight());
    switch (g) {
        case"tl":
            m = [0, 0];
            break;
        case"bl":
            m = [0, a];
            break;
        case"tr":
            m = [b, 0];
            break;
        case"c":
            m = [l(b * 0.5), l(a * 0.5)];
            break;
        case"t":
            m = [l(b * 0.5), 0];
            break;
        case"l":
            m = [0, l(a * 0.5)];
            break;
        case"r":
            m = [b, l(a * 0.5)];
            break;
        case"b":
            m = [l(b * 0.5), a];
            break;
        case"tc":
            m = [l(b * 0.5), 0];
            break;
        case"bc":
            m = [l(b * 0.5), a];
            break;
        case"br":
            m = [b, a]
    }
    return[m[0] + i, m[1] + h]
}, convertPositionSpec: Ext.identityFn, getAlignToXY: function (j, w, e) {
    var z = this, d, v, a, h, r, g, s, t, p, q, u, o, n, b, c, i, l, m, k;
    j = Ext.get(j.el || j);
    if (!j || !j.dom) {
    }
    e = e || [0, 0];
    w = (!w || w == "?" ? "tl-bl?" : (!(/-/).test(w) && w !== "" ? "tl-" + w : w || "tl-bl")).toLowerCase();
    w = z.convertPositionSpec(w);
    a = w.match(z._alignRe);
    o = a[1];
    n = a[2];
    u = !!a[3];
    h = z.getAnchorXY(o, true);
    r = z.getAnchorToXY(j, n, false);
    m = r[0] - h[0] + e[0];
    k = r[1] - h[1] + e[1];
    if (u) {
        d = z.constrainTo || z.container || z.el.parent();
        d = Ext.get(d.el || d);
        v = d.getViewRegion();
        v.right = v.left + d.el.dom.clientWidth;
        g = z.getWidth();
        s = z.getHeight();
        t = j.getRegion();
        b = o.charAt(0);
        c = o.charAt(o.length - 1);
        i = n.charAt(0);
        l = n.charAt(n.length - 1);
        p = (m < t.right && m + g >= t.left) && ((b == "t" && i == "b") || (b == "b" && i == "t"));
        q = (k < t.bottom && k + s >= t.top) && ((c == "r" && l == "l") || (c == "l" && l == "r"));
        if (m + g > v.right) {
            if (q) {
                m = t.left - g;
                q = false
            } else {
                m = v.right - g
            }
        }
        if (m < v.left) {
            m = q ? t.right : v.left
        }
        if (k + s > v.bottom) {
            if (p) {
                k = t.top - s;
                p = false
            } else {
                k = v.bottom - s
            }
        }
        if (k < v.top) {
            k = p ? t.bottom : v.top
        }
    }
    return[m, k]
}, getAnchor: function () {
    var b = this.el, c = (b.$cache || b.getCache()).data, a;
    if (!b.dom) {
        return
    }
    a = c._anchor;
    if (!a) {
        a = c._anchor = {}
    }
    return a
}, getAnchorXY: function (d, i, b) {
    var h = this, j = h.getXY(), a = h.el, l = document, c = a.dom == l.body || a.dom == l, k = a.getScroll(), g = c ? k.left : i ? 0 : j[0], e = c ? k.top : i ? 0 : j[1];
    return h.calculateAnchorXY(d, g, e, b)
}, getBox: function (d, i) {
    var e = this, m = i ? e.getLocalXY() : e.getXY(), j = m[0], g = m[1], k = e.getWidth(), b = e.getHeight(), c, a, l;
    if (d) {
        c = e.getBorderPadding();
        a = c.beforeX;
        l = c.beforeY;
        j += a;
        g += l;
        k -= (a + c.afterX);
        b -= (l + c.afterY)
    }
    return{x: j, left: j, 0: j, y: g, top: g, 1: g, width: k, height: b, right: j + k, bottom: g + b}
}, calculateConstrainedPosition: function (h, b, l, d) {
    var k = this, c, i = k.floatParent, e = i ? i.getTargetEl() : null, a, g, j, m = false;
    if (l && i) {
        a = e.getXY();
        g = e.getBorderPadding();
        a[0] += g.beforeX;
        a[1] += g.beforeY;
        if (b) {
            j = [b[0] + a[0], b[1] + a[1]]
        }
    } else {
        j = b
    }
    h = h || k.constrainTo || e || k.container || k.el.parent();
    c = (k.constrainHeader ? k.header : k).getConstrainVector(h, j, d);
    if (c) {
        m = b || k.getPosition(l);
        m[0] += c[0];
        m[1] += c[1]
    }
    return m
}, getConstrainVector: function (h, c, e) {
    var a = this.getRegion(), d = [0, 0], b = (this.shadow && this.constrainShadow && !this.shadowDisabled) ? this.shadow.getShadowSize() : undefined, j = false, i, g = this.constraintInsets;
    if (!(h instanceof Ext.util.Region)) {
        h = Ext.get(h.el || h);
        i = h.getViewSize();
        h = h.getViewRegion();
        h.right = h.left + i.width;
        h.bottom = h.top + i.height
    }
    if (g) {
        g = Ext.isObject(g) ? g : Ext.Element.parseBox(g);
        h.adjust(g.top, g.right, g.bottom, g.length)
    }
    if (c) {
        a.translateBy(c[0] - a.x, c[1] - a.y)
    }
    if (e) {
        a.right = a.left + e[0];
        a.bottom = a.top + e[1]
    }
    if (b) {
        h.adjust(b[0], -b[1], -b[2], b[3])
    }
    if (a.right > h.right) {
        j = true;
        d[0] = (h.right - a.right)
    }
    if (a.left + d[0] < h.left) {
        j = true;
        d[0] = (h.left - a.left)
    }
    if (a.bottom > h.bottom) {
        j = true;
        d[1] = (h.bottom - a.bottom)
    }
    if (a.top + d[1] < h.top) {
        j = true;
        d[1] = (h.top - a.top)
    }
    return j ? d : false
}, getOffsetsTo: function (a) {
    var c = this.getXY(), b = Ext.fly(a.el || a, "_internal").getXY();
    return[c[0] - b[0], c[1] - b[1]]
}, getRegion: function () {
    var a = this.getBox();
    return new Ext.util.Region(a.top, a.right, a.bottom, a.left)
}, getViewRegion: function () {
    var g = this, c = g.el, a = c.dom.nodeName === "BODY", e, j, h, i, d, b, k;
    if (a) {
        j = c.getScroll();
        d = j.left;
        i = j.top;
        b = Ext.dom.AbstractElement.getViewportWidth();
        k = Ext.dom.AbstractElement.getViewportHeight()
    } else {
        e = g.getBorderPadding();
        h = g.getXY();
        d = h[0] + e.beforeX;
        i = h[1] + e.beforeY;
        b = g.getWidth(true);
        k = g.getHeight(true)
    }
    return new Ext.util.Region(i, d + b, i + k, d)
}, move: function (j, b, c) {
    var g = this, m = g.getXY(), k = m[0], i = m[1], d = [k - b, i], l = [k + b, i], h = [k, i - b], a = [k, i + b], e = {l: d, left: d, r: l, right: l, t: h, top: h, up: h, b: a, bottom: a, down: a};
    j = j.toLowerCase();
    g.setXY([e[j][0], e[j][1]], c)
}, removeAnchor: function () {
    var a = this.getAnchor();
    if (a && a.fn) {
        Ext.EventManager.removeResizeListener(a.fn);
        if (a.scroll) {
            Ext.EventManager.un(window, "scroll", a.fn)
        }
        delete a.fn
    }
    return this
}, setBox: function (e, a) {
    var g = this, b = g.el, j = e.x, i = e.y, m = [j, i], k = e.width, d = e.height, c = (g.constrain || g.constrainHeader), l = c && g.calculateConstrainedPosition(null, [j, i], false, [k, d]);
    if (l) {
        j = l[0];
        i = l[1]
    }
    if (!a || !b.anim) {
        g.setSize(k, d);
        g.setXY([j, i]);
        g.afterSetPosition(j, i)
    } else {
        g.animate(Ext.applyIf({to: {x: j, y: i, width: b.adjustWidth(k), height: b.adjustHeight(d)}, listeners: {afteranimate: Ext.Function.bind(g.afterSetPosition, g, [j, i])}}, a))
    }
    return g
}, setRegion: function (b, a) {
    return this.setBox({x: b.left, y: b.top, width: b.right - b.left, height: b.bottom - b.top}, a)
}, translatePoints: function (a, c) {
    var b = this.translateXY(a, c);
    return{left: b.x, top: b.y}
}, translateXY: function (h, e) {
    var d = this, b = d.el, i = b.getStyle(d._positionTopLeft), a = i.position == "relative", c = parseFloat(i.left), g = parseFloat(i.top), j = d.getXY();
    if (Ext.isArray(h)) {
        e = h[1];
        h = h[0]
    }
    if (isNaN(c)) {
        c = a ? 0 : b.dom.offsetLeft
    }
    if (isNaN(g)) {
        g = a ? 0 : b.dom.offsetTop
    }
    c = (typeof h == "number") ? h - j[0] + c : undefined;
    g = (typeof e == "number") ? e - j[1] + g : undefined;
    return{x: c, y: g}
}}, 0, 0, 0, 0, 0, 0, [Ext.util, "Positionable"], 0));
(Ext.cmd.derive("Ext.dom.Element", Ext.dom.AbstractElement, function (a) {
    var b = "hidden", g = document, j = "visibility", c = "display", k = "none", e = Ext.baseCSSPrefix + "masked", l = Ext.baseCSSPrefix + "masked-relative", i = Ext.baseCSSPrefix + "mask-msg", m = /^body/i, h, d = Ext.isStrict ? {select: 1} : {input: 1, select: 1, textarea: 1}, n = function (t) {
        var s = [], o = -1, q, p;
        for (q = 0; p = t[q]; q++) {
            if (p.scrollTop > 0 || p.scrollLeft > 0) {
                s[++o] = p
            }
        }
        return s
    };
    return{alternateClassName: ["Ext.Element", "Ext.core.Element"], isElement: true, tableTagRe: /^(?:tr|td|table|tbody)$/i, addUnits: function () {
        return a.addUnits.apply(a, arguments)
    }, focus: function (r, q) {
        var o = this;
        q = q || o.dom;
        try {
            if (Number(r)) {
                Ext.defer(o.focus, r, o, [null, q])
            } else {
                Ext.globalEvents.fireEvent("beforefocus", q);
                q.focus()
            }
        } catch (p) {
        }
        return o
    }, blur: function () {
        var o = this, q = o.dom;
        if (q !== document.body) {
            try {
                q.blur()
            } catch (p) {
            }
            return o
        } else {
            return o.focus(undefined, q)
        }
    }, isBorderBox: function () {
        var o = Ext.isBorderBox;
        if (Ext.isIE7m && !o) {
            o = ((this.dom.tagName || "").toLowerCase() in d)
        }
        return o
    }, hover: function (p, o, r, q) {
        var s = this;
        s.on("mouseenter", p, r || s.dom, q);
        s.on("mouseleave", o, r || s.dom, q);
        return s
    }, getAttributeNS: function (p, o) {
        return this.getAttribute(o, p)
    }, getAttribute: (Ext.isIE && !(Ext.isIE9p && g.documentMode >= 9)) ? function (o, q) {
        var r = this.dom, p;
        if (q) {
            p = typeof r[q + ":" + o];
            if (p != "undefined" && p != "unknown") {
                return r[q + ":" + o] || null
            }
            return null
        }
        if (o === "for") {
            o = "htmlFor"
        }
        return r[o] || null
    } : function (o, p) {
        var q = this.dom;
        if (p) {
            return q.getAttributeNS(p, o) || q.getAttribute(p + ":" + o)
        }
        return q.getAttribute(o) || q[o] || null
    }, cacheScrollValues: function () {
        var s = this, r, q, p, t = [], o = function () {
            for (p = 0; p < r.length; p++) {
                q = r[p];
                q.scrollLeft = t[p][0];
                q.scrollTop = t[p][1]
            }
        };
        if (!Ext.DomQuery.pseudos.isScrolled) {
            Ext.DomQuery.pseudos.isScrolled = n
        }
        r = s.query(":isScrolled");
        for (p = 0; p < r.length; p++) {
            q = r[p];
            t[p] = [q.scrollLeft, q.scrollTop]
        }
        return o
    }, autoBoxAdjust: true, isVisible: function (o) {
        var q = this, r = q.dom, p = r.ownerDocument.documentElement;
        if (!h) {
            h = new a.Fly()
        }
        while (r !== p) {
            if (!r || r.nodeType === 11 || (h.attach(r)).isStyle(j, b) || h.isStyle(c, k)) {
                return false
            }
            if (!o) {
                break
            }
            r = r.parentNode
        }
        return true
    }, isDisplayed: function () {
        return !this.isStyle(c, k)
    }, enableDisplayMode: function (p) {
        var o = this;
        o.setVisibilityMode(a.DISPLAY);
        if (!Ext.isEmpty(p)) {
            (o.$cache || o.getCache()).data.originalDisplay = p
        }
        return o
    }, mask: function (p, z, w) {
        var B = this, s = B.dom, t = s.style.setExpression, v = (B.$cache || B.getCache()).data, r = v.maskShimEl, y = v.maskEl, q = v.maskMsg, u, x, o, C;
        if (!(m.test(s.tagName) && B.getStyle("position") == "static")) {
            B.addCls(l)
        }
        if (y) {
            y.remove()
        }
        if (q) {
            q.remove()
        }
        if (r) {
            r.remove()
        }
        if (Ext.isIE6) {
            r = Ext.DomHelper.append(s, {tag: "iframe", role: "presentation", cls: Ext.baseCSSPrefix + "shim " + Ext.baseCSSPrefix + "mask-shim"}, true);
            v.maskShimEl = r;
            r.setDisplayed(true)
        }
        Ext.DomHelper.append(s, [
            {role: "presentation", cls: Ext.baseCSSPrefix + "mask", style: "top:0;left:0;"},
            {role: "presentation", cls: z ? i + " " + z : i, cn: {tag: "div", role: "presentation", cls: Ext.baseCSSPrefix + "mask-msg-inner", cn: {tag: "div", role: "presentation", cls: Ext.baseCSSPrefix + "mask-msg-text", html: p || ""}}}
        ]);
        q = Ext.get(s.lastChild);
        y = Ext.get(q.dom.previousSibling);
        v.maskMsg = q;
        v.maskEl = y;
        B.addCls(e);
        y.setDisplayed(true);
        if (typeof p == "string") {
            q.setDisplayed(true);
            q.center(B)
        } else {
            q.setDisplayed(false)
        }
        if (Ext.isStrict && !Ext.isIE6 && (s === g.body)) {
            y.addCls(Ext.baseCSSPrefix + "mask-fixed")
        }
        if (s !== g.body || Ext.isIE6 || Ext.isIEQuirks) {
            if (!Ext.supports.IncludePaddingInWidthCalculation && t) {
                try {
                    y.dom.style.setExpression("width", 'this.parentNode.clientWidth + "px"');
                    u = 'this.parentNode.clientWidth + "px"';
                    if (r) {
                        r.dom.style.setExpression("width", u)
                    }
                    y.dom.style.setExpression("width", u)
                } catch (A) {
                }
            }
            if (!Ext.supports.IncludePaddingInHeightCalculation && t) {
                try {
                    x = "this.parentNode." + (s == g.body ? "scrollHeight" : "offsetHeight") + ' + "px"';
                    if (r) {
                        r.dom.style.setExpression("height", x)
                    }
                    y.dom.style.setExpression("height", x)
                } catch (A) {
                }
            } else {
                if (Ext.isIE9m && !(Ext.isIE7 && Ext.isStrict) && B.getStyle("height") == "auto") {
                    if (Ext.isIE6 && Ext.isStrict) {
                        o = s.parentNode;
                        C = Math.max(o.clientHeight, o.scrollHeight)
                    }
                    if (r) {
                        r.setSize(undefined, w || C || B.getHeight())
                    }
                    y.setSize(undefined, w || C || B.getHeight())
                }
            }
        }
        return y
    }, unmask: function () {
        var s = this, t = (s.$cache || s.getCache()).data, r = t.maskEl, p = t.maskShimEl, o = t.maskMsg, q;
        if (r) {
            q = r.dom.style;
            if (q.clearExpression) {
                q.clearExpression("width");
                q.clearExpression("height")
            }
            if (r) {
                r.remove();
                delete t.maskEl
            }
            if (o) {
                o.remove();
                delete t.maskMsg
            }
            s.removeCls([e, l]);
            if (p) {
                q = p.dom.style;
                if (q.clearExpression) {
                    q.clearExpression("width");
                    q.clearExpression("height")
                }
                p.remove();
                delete t.maskShimEl
            }
        }
    }, isMasked: function () {
        var q = this, s = (q.$cache || q.getCache()).data, p = s.maskEl, o = s.maskMsg, r = false;
        if (p && p.isVisible()) {
            if (o) {
                o.center(q)
            }
            r = true
        }
        return r
    }, createShim: function () {
        var o = g.createElement("iframe"), p;
        o.frameBorder = "0";
        o.className = Ext.baseCSSPrefix + "shim";
        o.src = Ext.SSL_SECURE_URL;
        o.setAttribute("role", "presentation");
        p = Ext.get(this.dom.parentNode.insertBefore(o, this.dom));
        p.autoBoxAdjust = false;
        return p
    }, addKeyListener: function (p, r, q) {
        var o;
        if (typeof p != "object" || Ext.isArray(p)) {
            o = {target: this, key: p, fn: r, scope: q}
        } else {
            o = {target: this, key: p.key, shift: p.shift, ctrl: p.ctrl, alt: p.alt, fn: r, scope: q}
        }
        return new Ext.util.KeyMap(o)
    }, addKeyMap: function (o) {
        return new Ext.util.KeyMap(Ext.apply({target: this}, o))
    }, on: function (o, r, q, p) {
        Ext.EventManager.on(this, o, r, q || this, p);
        return this
    }, un: function (o, q, p) {
        Ext.EventManager.un(this, o, q, p || this);
        return this
    }, removeAllListeners: function () {
        Ext.EventManager.removeAll(this);
        return this
    }, purgeAllListeners: function () {
        Ext.EventManager.purgeElement(this);
        return this
    }, select: function (o) {
        return a.select(o, false, this.dom)
    }}
}, 0, 0, 0, 0, 0, [
    [Ext.util.Positionable.prototype.mixinId || Ext.util.Positionable.$className, Ext.util.Positionable]
], [Ext.dom, "Element", Ext, "Element", Ext.core, "Element"], function () {
    var DOC = document, EC = Ext.cache, Element = this, AbstractElement = Ext.dom.AbstractElement, focusRe = /^a|button|embed|iframe|input|object|select|textarea$/i, nonSpaceRe = /\S/, scriptTagRe = /(?:<script([^>]*)?>)((\n|\r|.)*?)(?:<\/script>)/ig, replaceScriptTagRe = /(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig, srcRe = /\ssrc=([\'\"])(.*?)\1/i, typeRe = /\stype=([\'\"])(.*?)\1/i, useDocForId = !Ext.isIE8m, internalFly;
    Element.boxMarkup = ['<div class="{0}-tl" role="presentation">', '<div class="{0}-tr" role="presentation">', '<div class="{0}-tc" role="presentation"></div>', "</div>", "</div>", '<div class="{0}-ml" role="presentation">', '<div class="{0}-mr" role="presentation">', '<div class="{0}-mc" role="presentation"></div>', "</div>", "</div>", '<div class="{0}-bl" role="presentation">', '<div class="{0}-br" role="presentation">', '<div class="{0}-bc" role="presentation"></div>', "</div>", "</div>"].join("");
    function garbageCollect() {
        if (!Ext.enableGarbageCollector) {
            clearInterval(Element.collectorThreadId)
        } else {
            var eid, d, o, t;
            for (eid in EC) {
                if (!EC.hasOwnProperty(eid)) {
                    continue
                }
                o = EC[eid];
                if (o.skipGarbageCollection) {
                    continue
                }
                d = o.dom;
                if (d && (!d.parentNode || (!d.offsetParent && !Ext.getElementById(eid)))) {
                    if (Ext.enableListenerCollection) {
                        Ext.EventManager.removeAll(d)
                    }
                    delete EC[eid]
                }
            }
            if (Ext.isIE) {
                t = {};
                for (eid in EC) {
                    if (!EC.hasOwnProperty(eid)) {
                        continue
                    }
                    t[eid] = EC[eid]
                }
                EC = Ext.cache = t
            }
        }
    }

    Element.collectorThreadId = setInterval(garbageCollect, 30000);
    Element.addMethods({monitorMouseLeave: function (delay, handler, scope) {
        var me = this, timer, listeners = {mouseleave: function (e) {
            timer = setTimeout(Ext.Function.bind(handler, scope || me, [e]), delay)
        }, mouseenter: function () {
            clearTimeout(timer)
        }, freezeEvent: true};
        me.on(listeners);
        return listeners
    }, swallowEvent: function (eventName, preventDefault) {
        var me = this, e, eLen, fn = function (e) {
            e.stopPropagation();
            if (preventDefault) {
                e.preventDefault()
            }
        };
        if (Ext.isArray(eventName)) {
            eLen = eventName.length;
            for (e = 0; e < eLen; e++) {
                me.on(eventName[e], fn)
            }
            return me
        }
        me.on(eventName, fn);
        return me
    }, relayEvent: function (eventName, observable) {
        this.on(eventName, function (e) {
            observable.fireEvent(eventName, e)
        })
    }, clean: function (forceReclean) {
        var me = this, dom = me.dom, data = (me.$cache || me.getCache()).data, n = dom.firstChild, ni = -1, nx;
        if (data.isCleaned && forceReclean !== true) {
            return me
        }
        while (n) {
            nx = n.nextSibling;
            if (n.nodeType == 3) {
                if (!(nonSpaceRe.test(n.nodeValue))) {
                    dom.removeChild(n)
                } else {
                    if (nx && nx.nodeType == 3) {
                        n.appendData(Ext.String.trim(nx.data));
                        dom.removeChild(nx);
                        nx = n.nextSibling;
                        n.nodeIndex = ++ni
                    }
                }
            } else {
                internalFly.attach(n).clean();
                n.nodeIndex = ++ni
            }
            n = nx
        }
        data.isCleaned = true;
        return me
    }, load: function (options) {
        this.getLoader().load(options);
        return this
    }, getLoader: function () {
        var me = this, data = (me.$cache || me.getCache()).data, loader = data.loader;
        if (!loader) {
            data.loader = loader = new Ext.ElementLoader({target: me})
        }
        return loader
    }, syncContent: function (source) {
        source = Ext.getDom(source);
        var sourceNodes = source.childNodes, sourceLen = sourceNodes.length, dest = this.dom, destNodes = dest.childNodes, destLen = destNodes.length, i, destNode, sourceNode, nodeType, newAttrs, attLen, attName;
        if (Ext.isIE9m && dest.mergeAttributes) {
            dest.mergeAttributes(source, true);
            dest.src = source.src
        } else {
            newAttrs = source.attributes;
            attLen = newAttrs.length;
            for (i = 0; i < attLen; i++) {
                attName = newAttrs[i].name;
                if (attName !== "id") {
                    dest.setAttribute(attName, newAttrs[i].value)
                }
            }
        }
        if (sourceLen !== destLen) {
            dest.innerHTML = source.innerHTML;
            return
        }
        for (i = 0; i < sourceLen; i++) {
            sourceNode = sourceNodes[i];
            destNode = destNodes[i];
            nodeType = sourceNode.nodeType;
            if (nodeType !== destNode.nodeType || (nodeType === 1 && sourceNode.tagName !== destNode.tagName)) {
                dest.innerHTML = source.innerHTML;
                return
            }
            if (nodeType === 3) {
                destNode.data = sourceNode.data
            } else {
                if (sourceNode.id && destNode.id !== sourceNode.id) {
                    destNode.id = sourceNode.id
                }
                destNode.style.cssText = sourceNode.style.cssText;
                destNode.className = sourceNode.className;
                internalFly.attach(destNode).syncContent(sourceNode)
            }
        }
    }, update: function (html, loadScripts, callback) {
        var me = this, id, dom, interval;
        if (!me.dom) {
            return me
        }
        html = html || "";
        dom = me.dom;
        if (loadScripts !== true) {
            dom.innerHTML = html;
            Ext.callback(callback, me);
            return me
        }
        id = Ext.id();
        html += '<span id="' + id + '" role="presentation"></span>';
        interval = setInterval(function () {
            var hd, match, attrs, srcMatch, typeMatch, el, s;
            if (!(el = DOC.getElementById(id))) {
                return false
            }
            clearInterval(interval);
            Ext.removeNode(el);
            hd = Ext.getHead().dom;
            while ((match = scriptTagRe.exec(html))) {
                attrs = match[1];
                srcMatch = attrs ? attrs.match(srcRe) : false;
                if (srcMatch && srcMatch[2]) {
                    s = DOC.createElement("script");
                    s.src = srcMatch[2];
                    typeMatch = attrs.match(typeRe);
                    if (typeMatch && typeMatch[2]) {
                        s.type = typeMatch[2]
                    }
                    hd.appendChild(s)
                } else {
                    if (match[2] && match[2].length > 0) {
                        if (window.execScript) {
                            window.execScript(match[2])
                        } else {
                            window.eval(match[2])
                        }
                    }
                }
            }
            Ext.callback(callback, me)
        }, 20);
        dom.innerHTML = html.replace(replaceScriptTagRe, "");
        return me
    }, removeAllListeners: function () {
        this.removeAnchor();
        Ext.EventManager.removeAll(this.dom);
        return this
    }, createProxy: function (config, renderTo, matchBox) {
        config = (typeof config == "object") ? config : {tag: "div", role: "presentation", cls: config};
        var me = this, proxy = renderTo ? Ext.DomHelper.append(renderTo, config, true) : Ext.DomHelper.insertBefore(me.dom, config, true);
        proxy.setVisibilityMode(Element.DISPLAY);
        proxy.hide();
        if (matchBox && me.setBox && me.getBox) {
            proxy.setBox(me.getBox())
        }
        return proxy
    }, needsTabIndex: function () {
        if (this.dom) {
            if ((this.dom.nodeName === "a") && (!this.dom.href)) {
                return true
            }
            return !focusRe.test(this.dom.nodeName)
        }
    }, isFocusable: function (asFocusEl) {
        var dom = this.dom, tabIndexAttr = dom.getAttributeNode("tabIndex"), tabIndex, nodeName = dom.nodeName, canFocus = false;
        if (tabIndexAttr && tabIndexAttr.specified) {
            tabIndex = tabIndexAttr.value
        }
        if (dom && !dom.disabled) {
            if (tabIndex == -1) {
                canFocus = Ext.enableFocusManager && asFocusEl
            } else {
                if (focusRe.test(nodeName)) {
                    if ((nodeName !== "a") || dom.href) {
                        canFocus = true
                    }
                } else {
                    canFocus = tabIndex != null && tabIndex >= 0
                }
            }
            canFocus = canFocus && this.isVisible(true)
        }
        return canFocus
    }});
    if (Ext.isIE9m) {
        Element.prototype.getById = function (id, asDom) {
            var dom = this.dom, cacheItem, el, ret;
            if (dom) {
                el = (useDocForId && DOC.getElementById(id)) || dom.all[id];
                if (el) {
                    if (asDom) {
                        ret = el
                    } else {
                        cacheItem = EC[id];
                        if (cacheItem && cacheItem.el) {
                            ret = Ext.updateCacheEntry(cacheItem, el).el
                        } else {
                            ret = new Element(el)
                        }
                    }
                    return ret
                }
            }
            return asDom ? Ext.getDom(id) : Element.get(id)
        }
    }
    Element.createAlias({addListener: "on", removeListener: "un", clearListeners: "removeAllListeners", focusable: "isFocusable"});
    Element.Fly = AbstractElement.Fly = new Ext.Class({extend: Element, isFly: true, constructor: function (dom) {
        this.dom = dom;
        this.el = this
    }, attach: AbstractElement.Fly.prototype.attach});
    internalFly = new Element.Fly();
    if (Ext.isIE9m) {
        Ext.getElementById = function (id) {
            var el = DOC.getElementById(id), detachedBodyEl;
            if (!el && (detachedBodyEl = AbstractElement.detachedBodyEl)) {
                el = detachedBodyEl.dom.all[id]
            }
            return el
        }
    } else {
        if (!DOC.querySelector) {
            Ext.getDetachedBody = Ext.getBody;
            Ext.getElementById = function (id) {
                return DOC.getElementById(id)
            }
        }
    }
}));
(Ext.cmd.derive("Ext.dom.CompositeElementLite", Ext.Base, {alternateClassName: "Ext.CompositeElementLite", statics: {importElementMethods: function () {
    var b, c = Ext.dom.Element.prototype, a = this.prototype;
    for (b in c) {
        if (typeof c[b] == "function") {
            (function (d) {
                a[d] = a[d] || function () {
                    return this.invoke(d, arguments)
                }
            }).call(a, b)
        }
    }
}}, constructor: function (b, a) {
    this.elements = [];
    this.add(b, a);
    this.el = new Ext.dom.AbstractElement.Fly()
}, isComposite: true, getElement: function (a) {
    return this.el.attach(a)
}, transformElement: function (a) {
    return Ext.getDom(a)
}, getCount: function () {
    return this.elements.length
}, add: function (c, a) {
    var e = this.elements, b, d;
    if (!c) {
        return this
    }
    if (typeof c == "string") {
        c = Ext.dom.Element.selectorFunction(c, a)
    } else {
        if (c.isComposite) {
            c = c.elements
        } else {
            if (!Ext.isIterable(c)) {
                c = [c]
            }
        }
    }
    for (b = 0, d = c.length; b < d; ++b) {
        e.push(this.transformElement(c[b]))
    }
    return this
}, invoke: function (d, a) {
    var g = this.elements, e = g.length, c, b;
    d = Ext.dom.Element.prototype[d];
    for (b = 0; b < e; b++) {
        c = g[b];
        if (c) {
            d.apply(this.getElement(c), a)
        }
    }
    return this
}, item: function (b) {
    var c = this.elements[b], a = null;
    if (c) {
        a = this.getElement(c)
    }
    return a
}, slice: function () {
    return this.elements.slice.apply(this.elements, arguments)
}, addListener: function (b, j, h, g) {
    var d = this.elements, a = d.length, c, k;
    for (c = 0; c < a; c++) {
        k = d[c];
        if (k) {
            Ext.EventManager.on(k, b, j, h || k, g)
        }
    }
    return this
}, each: function (g, d) {
    var h = this, c = h.elements, a = c.length, b, j;
    for (b = 0; b < a; b++) {
        j = c[b];
        if (j) {
            j = this.getElement(j);
            if (g.call(d || j, j, h, b) === false) {
                break
            }
        }
    }
    return h
}, fill: function (a) {
    var b = this;
    b.elements = [];
    b.add(a);
    return b
}, insert: function (b, a) {
    Ext.Array.insert(this.elements, b, a)
}, filter: function (b) {
    var h = this, c = h.elements, g = c.length, d = [], e = 0, j = typeof b == "function", k, a;
    for (; e < g; e++) {
        a = c[e];
        k = false;
        if (a) {
            a = h.getElement(a);
            if (j) {
                k = b.call(a, a, h, e) !== false
            } else {
                k = a.is(b)
            }
            if (k) {
                d.push(h.transformElement(a))
            }
        }
    }
    h.elements = d;
    return h
}, indexOf: function (a) {
    return Ext.Array.indexOf(this.elements, this.transformElement(a))
}, replaceElement: function (e, c, a) {
    var b = !isNaN(e) ? e : this.indexOf(e), g;
    if (b > -1) {
        c = Ext.getDom(c);
        if (a) {
            g = this.elements[b];
            g.parentNode.insertBefore(c, g);
            Ext.removeNode(g)
        }
        Ext.Array.splice(this.elements, b, 1, c)
    }
    return this
}, clear: function (d) {
    var c = this, b = c.elements, a = b.length - 1;
    if (d) {
        for (; a >= 0; a--) {
            Ext.removeNode(b[a])
        }
    }
    this.elements = []
}, addElements: function (d, b) {
    if (!d) {
        return this
    }
    if (typeof d == "string") {
        d = Ext.dom.Element.selectorFunction(d, b)
    }
    var c = this.elements, a = d.length, g;
    for (g = 0; g < a; g++) {
        c.push(Ext.get(d[g]))
    }
    return this
}, first: function () {
    return this.item(0)
}, last: function () {
    return this.item(this.getCount() - 1)
}, contains: function (a) {
    return this.indexOf(a) != -1
}, removeElement: function (e, i) {
    e = [].concat(e);
    var d = this, g = d.elements, c = e.length, h, b, a;
    for (a = 0; a < c; a++) {
        h = e[a];
        if ((b = (g[h] || g[h = d.indexOf(h)]))) {
            if (i) {
                if (b.dom) {
                    b.remove()
                } else {
                    Ext.removeNode(b)
                }
            }
            Ext.Array.erase(g, h, 1)
        }
    }
    return d
}}, 1, 0, 0, 0, 0, 0, [Ext.dom, "CompositeElementLite", Ext, "CompositeElementLite"], function () {
    this.importElementMethods();
    this.prototype.on = this.prototype.addListener;
    if (Ext.DomQuery) {
        Ext.dom.Element.selectorFunction = Ext.DomQuery.select
    }
    Ext.dom.Element.select = function (a, b) {
        var c;
        if (typeof a == "string") {
            c = Ext.dom.Element.selectorFunction(a, b)
        } else {
            if (a.length !== undefined) {
                c = a
            } else {
            }
        }
        return new Ext.CompositeElementLite(c)
    };
    Ext.select = function () {
        return Ext.dom.Element.select.apply(Ext.dom.Element, arguments)
    }
}));
(Ext.cmd.derive("Ext.dom.CompositeElement", Ext.dom.CompositeElementLite, {alternateClassName: "Ext.CompositeElement", getElement: function (a) {
    return a
}, transformElement: function (a) {
    return Ext.get(a)
}}, 0, 0, 0, 0, 0, 0, [Ext.dom, "CompositeElement", Ext, "CompositeElement"], function () {
    Ext.dom.Element.select = function (a, d, b) {
        var c;
        if (typeof a == "string") {
            c = Ext.dom.Element.selectorFunction(a, b)
        } else {
            if (a.length !== undefined) {
                c = a
            } else {
            }
        }
        return(d === true) ? new Ext.CompositeElement(c) : new Ext.CompositeElementLite(c)
    }
}));
Ext.select = Ext.Element.select;
Ext.ClassManager.addNameAlternateMappings({"Ext.AbstractComponent": [], "Ext.AbstractManager": [], "Ext.AbstractPlugin": [], "Ext.Action": [], "Ext.Ajax": [], "Ext.Component": [], "Ext.ComponentLoader": [], "Ext.ComponentManager": ["Ext.ComponentMgr"], "Ext.ComponentQuery": [], "Ext.Editor": [], "Ext.ElementLoader": [], "Ext.FocusManager": ["Ext.FocusMgr"], "Ext.Img": [], "Ext.LoadMask": [], "Ext.ModelManager": ["Ext.ModelMgr"], "Ext.PluginManager": ["Ext.PluginMgr"], "Ext.ProgressBar": [], "Ext.Queryable": [], "Ext.Shadow": [], "Ext.ShadowPool": [], "Ext.ZIndexManager": ["Ext.WindowGroup"], "Ext.app.Application": [], "Ext.app.Controller": [], "Ext.app.EventBus": [], "Ext.app.EventDomain": [], "Ext.app.domain.Component": [], "Ext.app.domain.Controller": [], "Ext.app.domain.Direct": [], "Ext.app.domain.Global": [], "Ext.app.domain.Store": [], "Ext.button.Button": ["Ext.Button"], "Ext.button.Cycle": ["Ext.CycleButton"], "Ext.button.Manager": ["Ext.ButtonToggleManager"], "Ext.button.Split": ["Ext.SplitButton"], "Ext.chart.Callout": [], "Ext.chart.Chart": [], "Ext.chart.Highlight": [], "Ext.chart.Label": [], "Ext.chart.Legend": [], "Ext.chart.LegendItem": [], "Ext.chart.Mask": [], "Ext.chart.MaskLayer": [], "Ext.chart.Navigation": [], "Ext.chart.Shape": [], "Ext.chart.Tip": [], "Ext.chart.TipSurface": [], "Ext.chart.axis.Abstract": [], "Ext.chart.axis.Axis": ["Ext.chart.Axis"], "Ext.chart.axis.Category": ["Ext.chart.CategoryAxis"], "Ext.chart.axis.Gauge": [], "Ext.chart.axis.Numeric": ["Ext.chart.NumericAxis"], "Ext.chart.axis.Radial": [], "Ext.chart.axis.Time": ["Ext.chart.TimeAxis"], "Ext.chart.series.Area": [], "Ext.chart.series.Bar": ["Ext.chart.BarSeries", "Ext.chart.BarChart", "Ext.chart.StackedBarChart"], "Ext.chart.series.Cartesian": ["Ext.chart.CartesianSeries", "Ext.chart.CartesianChart"], "Ext.chart.series.Column": ["Ext.chart.ColumnSeries", "Ext.chart.ColumnChart", "Ext.chart.StackedColumnChart"], "Ext.chart.series.Gauge": [], "Ext.chart.series.Line": ["Ext.chart.LineSeries", "Ext.chart.LineChart"], "Ext.chart.series.Pie": ["Ext.chart.PieSeries", "Ext.chart.PieChart"], "Ext.chart.series.Radar": [], "Ext.chart.series.Scatter": [], "Ext.chart.series.Series": [], "Ext.chart.theme.Base": [], "Ext.chart.theme.Theme": [], "Ext.container.AbstractContainer": [], "Ext.container.ButtonGroup": ["Ext.ButtonGroup"], "Ext.container.Container": ["Ext.Container"], "Ext.container.DockingContainer": [], "Ext.container.Monitor": [], "Ext.container.Viewport": ["Ext.Viewport"], "Ext.data.AbstractStore": [], "Ext.data.ArrayStore": [], "Ext.data.Batch": [], "Ext.data.BufferStore": [], "Ext.data.Connection": [], "Ext.data.DirectStore": [], "Ext.data.Errors": [], "Ext.data.Field": [], "Ext.data.Group": [], "Ext.data.IdGenerator": [], "Ext.data.JsonP": [], "Ext.data.JsonPStore": [], "Ext.data.JsonStore": [], "Ext.data.Model": ["Ext.data.Record"], "Ext.data.NodeInterface": [], "Ext.data.NodeStore": [], "Ext.data.Operation": [], "Ext.data.PageMap": [], "Ext.data.Request": [], "Ext.data.ResultSet": [], "Ext.data.SequentialIdGenerator": [], "Ext.data.SortTypes": [], "Ext.data.Store": [], "Ext.data.StoreManager": ["Ext.StoreMgr", "Ext.data.StoreMgr", "Ext.StoreManager"], "Ext.data.Tree": [], "Ext.data.TreeModel": [], "Ext.data.TreeStore": [], "Ext.data.Types": [], "Ext.data.UuidGenerator": [], "Ext.data.XmlStore": [], "Ext.data.amf.Encoder": [], "Ext.data.amf.Packet": [], "Ext.data.amf.Proxy": [], "Ext.data.amf.Reader": [], "Ext.data.amf.RemotingMessage": [], "Ext.data.amf.XmlDecoder": [], "Ext.data.amf.XmlEncoder": [], "Ext.data.association.Association": ["Ext.data.Association"], "Ext.data.association.BelongsTo": ["Ext.data.BelongsToAssociation"], "Ext.data.association.HasMany": ["Ext.data.HasManyAssociation"], "Ext.data.association.HasOne": ["Ext.data.HasOneAssociation"], "Ext.data.flash.BinaryXhr": [], "Ext.data.proxy.Ajax": ["Ext.data.HttpProxy", "Ext.data.AjaxProxy"], "Ext.data.proxy.Client": ["Ext.data.ClientProxy"], "Ext.data.proxy.Direct": ["Ext.data.DirectProxy"], "Ext.data.proxy.JsonP": ["Ext.data.ScriptTagProxy"], "Ext.data.proxy.LocalStorage": ["Ext.data.LocalStorageProxy"], "Ext.data.proxy.Memory": ["Ext.data.MemoryProxy"], "Ext.data.proxy.Proxy": ["Ext.data.DataProxy", "Ext.data.Proxy"], "Ext.data.proxy.Rest": ["Ext.data.RestProxy"], "Ext.data.proxy.Server": ["Ext.data.ServerProxy"], "Ext.data.proxy.SessionStorage": ["Ext.data.SessionStorageProxy"], "Ext.data.proxy.WebStorage": ["Ext.data.WebStorageProxy"], "Ext.data.reader.Array": ["Ext.data.ArrayReader"], "Ext.data.reader.Json": ["Ext.data.JsonReader"], "Ext.data.reader.Reader": ["Ext.data.Reader", "Ext.data.DataReader"], "Ext.data.reader.Xml": ["Ext.data.XmlReader"], "Ext.data.soap.Proxy": [], "Ext.data.soap.Reader": [], "Ext.data.validations": [], "Ext.data.writer.Json": ["Ext.data.JsonWriter"], "Ext.data.writer.Writer": ["Ext.data.DataWriter", "Ext.data.Writer"], "Ext.data.writer.Xml": ["Ext.data.XmlWriter"], "Ext.dd.DD": [], "Ext.dd.DDProxy": [], "Ext.dd.DDTarget": [], "Ext.dd.DragDrop": [], "Ext.dd.DragDropManager": ["Ext.dd.DragDropMgr", "Ext.dd.DDM"], "Ext.dd.DragSource": [], "Ext.dd.DragTracker": [], "Ext.dd.DragZone": [], "Ext.dd.DropTarget": [], "Ext.dd.DropZone": [], "Ext.dd.Registry": [], "Ext.dd.ScrollManager": [], "Ext.dd.StatusProxy": [], "Ext.direct.AmfRemotingProvider": [], "Ext.direct.Event": [], "Ext.direct.ExceptionEvent": [], "Ext.direct.JsonProvider": [], "Ext.direct.Manager": [], "Ext.direct.PollingProvider": [], "Ext.direct.Provider": [], "Ext.direct.RemotingEvent": [], "Ext.direct.RemotingMethod": [], "Ext.direct.RemotingProvider": [], "Ext.direct.Transaction": ["Ext.Direct.Transaction"], "Ext.dom.Layer": ["Ext.Layer"], "Ext.draw.Color": [], "Ext.draw.Component": [], "Ext.draw.CompositeSprite": [], "Ext.draw.Draw": [], "Ext.draw.Matrix": [], "Ext.draw.Sprite": [], "Ext.draw.SpriteDD": [], "Ext.draw.Surface": [], "Ext.draw.Text": [], "Ext.draw.engine.ImageExporter": [], "Ext.draw.engine.Svg": [], "Ext.draw.engine.SvgExporter": [], "Ext.draw.engine.Vml": [], "Ext.env.Browser": [], "Ext.env.FeatureDetector": [], "Ext.env.OS": [], "Ext.flash.Component": ["Ext.FlashComponent"], "Ext.form.Basic": ["Ext.form.BasicForm"], "Ext.form.CheckboxGroup": [], "Ext.form.CheckboxManager": [], "Ext.form.FieldAncestor": [], "Ext.form.FieldContainer": [], "Ext.form.FieldSet": [], "Ext.form.Label": [], "Ext.form.Labelable": [], "Ext.form.Panel": ["Ext.FormPanel", "Ext.form.FormPanel"], "Ext.form.RadioGroup": [], "Ext.form.RadioManager": [], "Ext.form.action.Action": ["Ext.form.Action"], "Ext.form.action.DirectLoad": ["Ext.form.Action.DirectLoad"], "Ext.form.action.DirectSubmit": ["Ext.form.Action.DirectSubmit"], "Ext.form.action.Load": ["Ext.form.Action.Load"], "Ext.form.action.StandardSubmit": [], "Ext.form.action.Submit": ["Ext.form.Action.Submit"], "Ext.form.field.Base": ["Ext.form.Field", "Ext.form.BaseField"], "Ext.form.field.Checkbox": ["Ext.form.Checkbox"], "Ext.form.field.ComboBox": ["Ext.form.ComboBox"], "Ext.form.field.Date": ["Ext.form.DateField", "Ext.form.Date"], "Ext.form.field.Display": ["Ext.form.DisplayField", "Ext.form.Display"], "Ext.form.field.Field": [], "Ext.form.field.File": ["Ext.form.FileUploadField", "Ext.ux.form.FileUploadField", "Ext.form.File"], "Ext.form.field.FileButton": [], "Ext.form.field.Hidden": ["Ext.form.Hidden"], "Ext.form.field.HtmlEditor": ["Ext.form.HtmlEditor"], "Ext.form.field.Number": ["Ext.form.NumberField", "Ext.form.Number"], "Ext.form.field.Picker": ["Ext.form.Picker"], "Ext.form.field.Radio": ["Ext.form.Radio"], "Ext.form.field.Spinner": ["Ext.form.Spinner"], "Ext.form.field.Text": ["Ext.form.TextField", "Ext.form.Text"], "Ext.form.field.TextArea": ["Ext.form.TextArea"], "Ext.form.field.Time": ["Ext.form.TimeField", "Ext.form.Time"], "Ext.form.field.Trigger": ["Ext.form.TriggerField", "Ext.form.TwinTriggerField", "Ext.form.Trigger"], "Ext.form.field.VTypes": ["Ext.form.VTypes"], "Ext.fx.Anim": [], "Ext.fx.Animator": [], "Ext.fx.CubicBezier": [], "Ext.fx.Easing": [], "Ext.fx.Manager": [], "Ext.fx.PropertyHandler": [], "Ext.fx.Queue": [], "Ext.fx.target.Component": [], "Ext.fx.target.CompositeElement": [], "Ext.fx.target.CompositeElementCSS": [], "Ext.fx.target.CompositeSprite": [], "Ext.fx.target.Element": [], "Ext.fx.target.ElementCSS": [], "Ext.fx.target.Sprite": [], "Ext.fx.target.Target": [], "Ext.grid.CellContext": [], "Ext.grid.CellEditor": [], "Ext.grid.ColumnComponentLayout": [], "Ext.grid.ColumnLayout": [], "Ext.grid.ColumnManager": ["Ext.grid.ColumnModel"], "Ext.grid.Panel": ["Ext.list.ListView", "Ext.ListView", "Ext.grid.GridPanel"], "Ext.grid.RowEditor": [], "Ext.grid.RowEditorButtons": [], "Ext.grid.View": [], "Ext.grid.ViewDropZone": [], "Ext.grid.column.Action": ["Ext.grid.ActionColumn"], "Ext.grid.column.Boolean": ["Ext.grid.BooleanColumn"], "Ext.grid.column.Check": ["Ext.ux.CheckColumn", "Ext.grid.column.CheckColumn"], "Ext.grid.column.Column": ["Ext.grid.Column"], "Ext.grid.column.Date": ["Ext.grid.DateColumn"], "Ext.grid.column.Number": ["Ext.grid.NumberColumn"], "Ext.grid.column.RowNumberer": ["Ext.grid.RowNumberer"], "Ext.grid.column.Template": ["Ext.grid.TemplateColumn"], "Ext.grid.feature.AbstractSummary": [], "Ext.grid.feature.Feature": [], "Ext.grid.feature.GroupStore": [], "Ext.grid.feature.Grouping": [], "Ext.grid.feature.GroupingSummary": [], "Ext.grid.feature.RowBody": [], "Ext.grid.feature.RowWrap": [], "Ext.grid.feature.Summary": [], "Ext.grid.header.Container": [], "Ext.grid.header.DragZone": [], "Ext.grid.header.DropZone": [], "Ext.grid.locking.HeaderContainer": [], "Ext.grid.locking.Lockable": ["Ext.grid.Lockable"], "Ext.grid.locking.View": ["Ext.grid.LockingView"], "Ext.grid.plugin.BufferedRenderer": [], "Ext.grid.plugin.BufferedRendererTableView": [], "Ext.grid.plugin.BufferedRendererTreeView": [], "Ext.grid.plugin.CellEditing": [], "Ext.grid.plugin.DivRenderer": [], "Ext.grid.plugin.DragDrop": [], "Ext.grid.plugin.Editing": [], "Ext.grid.plugin.HeaderReorderer": [], "Ext.grid.plugin.HeaderResizer": [], "Ext.grid.plugin.RowEditing": [], "Ext.grid.plugin.RowExpander": [], "Ext.grid.property.Grid": ["Ext.grid.PropertyGrid"], "Ext.grid.property.HeaderContainer": ["Ext.grid.PropertyColumnModel"], "Ext.grid.property.Property": ["Ext.PropGridProperty"], "Ext.grid.property.Store": ["Ext.grid.PropertyStore"], "Ext.layout.ClassList": [], "Ext.layout.Context": [], "Ext.layout.ContextItem": [], "Ext.layout.Layout": [], "Ext.layout.SizeModel": [], "Ext.layout.component.Auto": [], "Ext.layout.component.Body": [], "Ext.layout.component.BoundList": [], "Ext.layout.component.Button": [], "Ext.layout.component.Component": [], "Ext.layout.component.Dock": ["Ext.layout.component.AbstractDock"], "Ext.layout.component.Draw": [], "Ext.layout.component.FieldSet": [], "Ext.layout.component.ProgressBar": [], "Ext.layout.component.field.ComboBox": [], "Ext.layout.component.field.Field": [], "Ext.layout.component.field.FieldContainer": [], "Ext.layout.component.field.HtmlEditor": [], "Ext.layout.component.field.Slider": [], "Ext.layout.component.field.Text": [], "Ext.layout.component.field.TextArea": [], "Ext.layout.component.field.Trigger": [], "Ext.layout.container.Absolute": ["Ext.layout.AbsoluteLayout"], "Ext.layout.container.Accordion": ["Ext.layout.AccordionLayout"], "Ext.layout.container.Anchor": ["Ext.layout.AnchorLayout"], "Ext.layout.container.Auto": [], "Ext.layout.container.Border": ["Ext.layout.BorderLayout"], "Ext.layout.container.Box": ["Ext.layout.BoxLayout"], "Ext.layout.container.Card": ["Ext.layout.CardLayout"], "Ext.layout.container.CheckboxGroup": [], "Ext.layout.container.Column": ["Ext.layout.ColumnLayout"], "Ext.layout.container.Container": ["Ext.layout.ContainerLayout"], "Ext.layout.container.Editor": [], "Ext.layout.container.Fit": ["Ext.layout.FitLayout"], "Ext.layout.container.Form": ["Ext.layout.FormLayout"], "Ext.layout.container.HBox": ["Ext.layout.HBoxLayout"], "Ext.layout.container.Table": ["Ext.layout.TableLayout"], "Ext.layout.container.VBox": ["Ext.layout.VBoxLayout"], "Ext.layout.container.border.Region": [], "Ext.layout.container.boxOverflow.Menu": ["Ext.layout.boxOverflow.Menu"], "Ext.layout.container.boxOverflow.None": ["Ext.layout.boxOverflow.None"], "Ext.layout.container.boxOverflow.Scroller": ["Ext.layout.boxOverflow.Scroller"], "Ext.menu.CheckItem": [], "Ext.menu.ColorPicker": [], "Ext.menu.DatePicker": [], "Ext.menu.Item": ["Ext.menu.TextItem"], "Ext.menu.KeyNav": [], "Ext.menu.Manager": ["Ext.menu.MenuMgr"], "Ext.menu.Menu": [], "Ext.menu.Separator": [], "Ext.panel.AbstractPanel": [], "Ext.panel.DD": [], "Ext.panel.Header": [], "Ext.panel.Panel": ["Ext.Panel"], "Ext.panel.Proxy": ["Ext.dd.PanelProxy"], "Ext.panel.Table": [], "Ext.panel.Tool": [], "Ext.picker.Color": ["Ext.ColorPalette"], "Ext.picker.Date": ["Ext.DatePicker"], "Ext.picker.Month": ["Ext.MonthPicker"], "Ext.picker.Time": [], "Ext.resizer.BorderSplitter": [], "Ext.resizer.BorderSplitterTracker": [], "Ext.resizer.Handle": [], "Ext.resizer.ResizeTracker": [], "Ext.resizer.Resizer": ["Ext.Resizable"], "Ext.resizer.Splitter": [], "Ext.resizer.SplitterTracker": [], "Ext.rtl.AbstractComponent": [], "Ext.rtl.EventObjectImpl": [], "Ext.rtl.button.Button": [], "Ext.rtl.chart.Chart": [], "Ext.rtl.chart.Legend": [], "Ext.rtl.chart.LegendItem": [], "Ext.rtl.chart.axis.Axis": [], "Ext.rtl.chart.axis.Gauge": [], "Ext.rtl.chart.series.Cartesian": [], "Ext.rtl.chart.series.Gauge": [], "Ext.rtl.dd.DD": [], "Ext.rtl.dom.Element_anim": [], "Ext.rtl.dom.Element_insertion": [], "Ext.rtl.dom.Element_position": [], "Ext.rtl.dom.Element_scroll": [], "Ext.rtl.dom.Element_static": [], "Ext.rtl.dom.Layer": [], "Ext.rtl.draw.Component": [], "Ext.rtl.draw.Sprite": [], "Ext.rtl.form.Labelable": [], "Ext.rtl.form.field.Checkbox": [], "Ext.rtl.form.field.File": [], "Ext.rtl.form.field.FileButton": [], "Ext.rtl.form.field.Spinner": [], "Ext.rtl.form.field.Trigger": [], "Ext.rtl.grid.CellEditor": [], "Ext.rtl.grid.ColumnLayout": [], "Ext.rtl.grid.RowEditor": [], "Ext.rtl.grid.column.Column": [], "Ext.rtl.grid.feature.Summary": [], "Ext.rtl.grid.plugin.HeaderResizer": [], "Ext.rtl.grid.plugin.RowEditing": [], "Ext.rtl.layout.ContextItem": [], "Ext.rtl.layout.component.Dock": [], "Ext.rtl.layout.component.field.Text": [], "Ext.rtl.layout.component.field.Trigger": [], "Ext.rtl.layout.container.Absolute": [], "Ext.rtl.layout.container.Border": [], "Ext.rtl.layout.container.Box": [], "Ext.rtl.layout.container.CheckboxGroup": [], "Ext.rtl.layout.container.Column": [], "Ext.rtl.layout.container.HBox": [], "Ext.rtl.layout.container.VBox": [], "Ext.rtl.layout.container.boxOverflow.Menu": [], "Ext.rtl.layout.container.boxOverflow.Scroller": [], "Ext.rtl.panel.Header": [], "Ext.rtl.panel.Panel": [], "Ext.rtl.resizer.BorderSplitterTracker": [], "Ext.rtl.resizer.ResizeTracker": [], "Ext.rtl.resizer.SplitterTracker": [], "Ext.rtl.selection.CellModel": [], "Ext.rtl.selection.TreeModel": [], "Ext.rtl.slider.Multi": [], "Ext.rtl.tab.Bar": [], "Ext.rtl.tip.QuickTipManager": [], "Ext.rtl.tree.Column": [], "Ext.rtl.util.Floating": [], "Ext.rtl.util.Renderable": [], "Ext.rtl.view.Table": [], "Ext.selection.CellModel": [], "Ext.selection.CheckboxModel": [], "Ext.selection.DataViewModel": [], "Ext.selection.Model": ["Ext.AbstractSelectionModel"], "Ext.selection.RowModel": [], "Ext.selection.TreeModel": [], "Ext.slider.Multi": ["Ext.slider.MultiSlider"], "Ext.slider.Single": ["Ext.Slider", "Ext.form.SliderField", "Ext.slider.SingleSlider", "Ext.slider.Slider"], "Ext.slider.Thumb": [], "Ext.slider.Tip": [], "Ext.state.CookieProvider": [], "Ext.state.LocalStorageProvider": [], "Ext.state.Manager": [], "Ext.state.Provider": [], "Ext.state.Stateful": [], "Ext.tab.Bar": [], "Ext.tab.Panel": ["Ext.TabPanel"], "Ext.tab.Tab": [], "Ext.tip.QuickTip": ["Ext.QuickTip"], "Ext.tip.QuickTipManager": ["Ext.QuickTips"], "Ext.tip.Tip": ["Ext.Tip"], "Ext.tip.ToolTip": ["Ext.ToolTip"], "Ext.toolbar.Fill": ["Ext.Toolbar.Fill"], "Ext.toolbar.Item": ["Ext.Toolbar.Item"], "Ext.toolbar.Paging": ["Ext.PagingToolbar"], "Ext.toolbar.Separator": ["Ext.Toolbar.Separator"], "Ext.toolbar.Spacer": ["Ext.Toolbar.Spacer"], "Ext.toolbar.TextItem": ["Ext.Toolbar.TextItem"], "Ext.toolbar.Toolbar": ["Ext.Toolbar"], "Ext.tree.Column": [], "Ext.tree.Panel": ["Ext.tree.TreePanel", "Ext.TreePanel"], "Ext.tree.View": [], "Ext.tree.ViewDragZone": [], "Ext.tree.ViewDropZone": [], "Ext.tree.plugin.TreeViewDragDrop": [], "Ext.util.AbstractMixedCollection": [], "Ext.util.Animate": [], "Ext.util.Bindable": [], "Ext.util.CSS": [], "Ext.util.ClickRepeater": [], "Ext.util.ComponentDragger": [], "Ext.util.Cookies": [], "Ext.util.ElementContainer": [], "Ext.util.Filter": [], "Ext.util.Floating": [], "Ext.util.Grouper": [], "Ext.util.HashMap": [], "Ext.util.History": ["Ext.History"], "Ext.util.Inflector": [], "Ext.util.KeyMap": ["Ext.KeyMap"], "Ext.util.KeyNav": ["Ext.KeyNav"], "Ext.util.LocalStorage": [], "Ext.util.LruCache": [], "Ext.util.Memento": [], "Ext.util.MixedCollection": [], "Ext.util.Offset": [], "Ext.util.Point": [], "Ext.util.ProtoElement": [], "Ext.util.Queue": [], "Ext.util.Region": [], "Ext.util.Renderable": [], "Ext.util.Sortable": [], "Ext.util.Sorter": [], "Ext.util.TextMetrics": [], "Ext.view.AbstractView": [], "Ext.view.BoundList": ["Ext.BoundList"], "Ext.view.BoundListKeyNav": [], "Ext.view.DragZone": [], "Ext.view.DropZone": [], "Ext.view.NodeCache": [], "Ext.view.Table": [], "Ext.view.TableLayout": [], "Ext.view.View": ["Ext.DataView"], "Ext.window.MessageBox": [], "Ext.window.Window": ["Ext.Window"]});
Ext.ClassManager.addNameAliasMappings({"Ext.AbstractComponent": [], "Ext.AbstractManager": [], "Ext.AbstractPlugin": [], "Ext.Action": [], "Ext.Ajax": [], "Ext.Component": ["widget.box", "widget.component"], "Ext.ComponentLoader": [], "Ext.ComponentManager": [], "Ext.ComponentQuery": [], "Ext.Editor": ["widget.editor"], "Ext.ElementLoader": [], "Ext.FocusManager": [], "Ext.Img": ["widget.image", "widget.imagecomponent"], "Ext.LoadMask": ["widget.loadmask"], "Ext.ModelManager": [], "Ext.PluginManager": [], "Ext.ProgressBar": ["widget.progressbar"], "Ext.Queryable": [], "Ext.Shadow": [], "Ext.ShadowPool": [], "Ext.ZIndexManager": [], "Ext.app.Application": [], "Ext.app.Controller": [], "Ext.app.EventBus": [], "Ext.app.EventDomain": [], "Ext.app.domain.Component": [], "Ext.app.domain.Controller": [], "Ext.app.domain.Direct": [], "Ext.app.domain.Global": [], "Ext.app.domain.Store": [], "Ext.button.Button": ["widget.button"], "Ext.button.Cycle": ["widget.cycle"], "Ext.button.Manager": [], "Ext.button.Split": ["widget.splitbutton"], "Ext.chart.Callout": [], "Ext.chart.Chart": ["widget.chart"], "Ext.chart.Highlight": [], "Ext.chart.Label": [], "Ext.chart.Legend": [], "Ext.chart.LegendItem": [], "Ext.chart.Mask": [], "Ext.chart.MaskLayer": [], "Ext.chart.Navigation": [], "Ext.chart.Shape": [], "Ext.chart.Tip": [], "Ext.chart.TipSurface": [], "Ext.chart.axis.Abstract": [], "Ext.chart.axis.Axis": [], "Ext.chart.axis.Category": ["axis.category"], "Ext.chart.axis.Gauge": ["axis.gauge"], "Ext.chart.axis.Numeric": ["axis.numeric"], "Ext.chart.axis.Radial": ["axis.radial"], "Ext.chart.axis.Time": ["axis.time"], "Ext.chart.series.Area": ["series.area"], "Ext.chart.series.Bar": ["series.bar"], "Ext.chart.series.Cartesian": [], "Ext.chart.series.Column": ["series.column"], "Ext.chart.series.Gauge": ["series.gauge"], "Ext.chart.series.Line": ["series.line"], "Ext.chart.series.Pie": ["series.pie"], "Ext.chart.series.Radar": ["series.radar"], "Ext.chart.series.Scatter": ["series.scatter"], "Ext.chart.series.Series": [], "Ext.chart.theme.Base": [], "Ext.chart.theme.Theme": [], "Ext.container.AbstractContainer": [], "Ext.container.ButtonGroup": ["widget.buttongroup"], "Ext.container.Container": ["widget.container"], "Ext.container.DockingContainer": [], "Ext.container.Monitor": [], "Ext.container.Viewport": ["widget.viewport"], "Ext.data.AbstractStore": [], "Ext.data.ArrayStore": ["store.array"], "Ext.data.Batch": [], "Ext.data.BufferStore": ["store.buffer"], "Ext.data.Connection": [], "Ext.data.DirectStore": ["store.direct"], "Ext.data.Errors": [], "Ext.data.Field": ["data.field"], "Ext.data.Group": [], "Ext.data.IdGenerator": [], "Ext.data.JsonP": [], "Ext.data.JsonPStore": ["store.jsonp"], "Ext.data.JsonStore": ["store.json"], "Ext.data.Model": [], "Ext.data.NodeInterface": [], "Ext.data.NodeStore": ["store.node"], "Ext.data.Operation": [], "Ext.data.PageMap": [], "Ext.data.Request": [], "Ext.data.ResultSet": [], "Ext.data.SequentialIdGenerator": ["idgen.sequential"], "Ext.data.SortTypes": [], "Ext.data.Store": ["store.store"], "Ext.data.StoreManager": [], "Ext.data.Tree": ["data.tree"], "Ext.data.TreeModel": [], "Ext.data.TreeStore": ["store.tree"], "Ext.data.Types": [], "Ext.data.UuidGenerator": ["idgen.uuid"], "Ext.data.XmlStore": ["store.xml"], "Ext.data.amf.Encoder": ["data.amf.Encoder"], "Ext.data.amf.Packet": [], "Ext.data.amf.Proxy": ["proxy.amf"], "Ext.data.amf.Reader": ["reader.amf"], "Ext.data.amf.RemotingMessage": ["data.amf.remotingmessage"], "Ext.data.amf.XmlDecoder": ["data.amf.xmldecoder"], "Ext.data.amf.XmlEncoder": ["data.amf.xmlencoder"], "Ext.data.association.Association": [], "Ext.data.association.BelongsTo": ["association.belongsto"], "Ext.data.association.HasMany": ["association.hasmany"], "Ext.data.association.HasOne": ["association.hasone"], "Ext.data.flash.BinaryXhr": [], "Ext.data.proxy.Ajax": ["proxy.ajax"], "Ext.data.proxy.Client": [], "Ext.data.proxy.Direct": ["proxy.direct"], "Ext.data.proxy.JsonP": ["proxy.jsonp", "proxy.scripttag"], "Ext.data.proxy.LocalStorage": ["proxy.localstorage"], "Ext.data.proxy.Memory": ["proxy.memory"], "Ext.data.proxy.Proxy": ["proxy.proxy"], "Ext.data.proxy.Rest": ["proxy.rest"], "Ext.data.proxy.Server": ["proxy.server"], "Ext.data.proxy.SessionStorage": ["proxy.sessionstorage"], "Ext.data.proxy.WebStorage": [], "Ext.data.reader.Array": ["reader.array"], "Ext.data.reader.Json": ["reader.json"], "Ext.data.reader.Reader": [], "Ext.data.reader.Xml": ["reader.xml"], "Ext.data.soap.Proxy": ["proxy.soap"], "Ext.data.soap.Reader": ["reader.soap"], "Ext.data.validations": [], "Ext.data.writer.Json": ["writer.json"], "Ext.data.writer.Writer": ["writer.base"], "Ext.data.writer.Xml": ["writer.xml"], "Ext.dd.DD": [], "Ext.dd.DDProxy": [], "Ext.dd.DDTarget": [], "Ext.dd.DragDrop": [], "Ext.dd.DragDropManager": [], "Ext.dd.DragSource": [], "Ext.dd.DragTracker": [], "Ext.dd.DragZone": [], "Ext.dd.DropTarget": [], "Ext.dd.DropZone": [], "Ext.dd.Registry": [], "Ext.dd.ScrollManager": [], "Ext.dd.StatusProxy": [], "Ext.direct.AmfRemotingProvider": ["direct.amfremotingprovider"], "Ext.direct.Event": ["direct.event"], "Ext.direct.ExceptionEvent": ["direct.exception"], "Ext.direct.JsonProvider": ["direct.jsonprovider"], "Ext.direct.Manager": [], "Ext.direct.PollingProvider": ["direct.pollingprovider"], "Ext.direct.Provider": ["direct.provider"], "Ext.direct.RemotingEvent": ["direct.rpc"], "Ext.direct.RemotingMethod": [], "Ext.direct.RemotingProvider": ["direct.remotingprovider"], "Ext.direct.Transaction": ["direct.transaction"], "Ext.dom.Layer": [], "Ext.draw.Color": [], "Ext.draw.Component": ["widget.draw"], "Ext.draw.CompositeSprite": [], "Ext.draw.Draw": [], "Ext.draw.Matrix": [], "Ext.draw.Sprite": [], "Ext.draw.SpriteDD": [], "Ext.draw.Surface": [], "Ext.draw.Text": ["widget.text"], "Ext.draw.engine.ImageExporter": [], "Ext.draw.engine.Svg": [], "Ext.draw.engine.SvgExporter": [], "Ext.draw.engine.Vml": [], "Ext.env.Browser": [], "Ext.env.FeatureDetector": [], "Ext.env.OS": [], "Ext.flash.Component": ["widget.flash"], "Ext.form.Basic": [], "Ext.form.CheckboxGroup": ["widget.checkboxgroup"], "Ext.form.CheckboxManager": [], "Ext.form.FieldAncestor": [], "Ext.form.FieldContainer": ["widget.fieldcontainer"], "Ext.form.FieldSet": ["widget.fieldset"], "Ext.form.Label": ["widget.label"], "Ext.form.Labelable": [], "Ext.form.Panel": ["widget.form"], "Ext.form.RadioGroup": ["widget.radiogroup"], "Ext.form.RadioManager": [], "Ext.form.action.Action": [], "Ext.form.action.DirectLoad": ["formaction.directload"], "Ext.form.action.DirectSubmit": ["formaction.directsubmit"], "Ext.form.action.Load": ["formaction.load"], "Ext.form.action.StandardSubmit": ["formaction.standardsubmit"], "Ext.form.action.Submit": ["formaction.submit"], "Ext.form.field.Base": ["widget.field"], "Ext.form.field.Checkbox": ["widget.checkbox", "widget.checkboxfield"], "Ext.form.field.ComboBox": ["widget.combo", "widget.combobox"], "Ext.form.field.Date": ["widget.datefield"], "Ext.form.field.Display": ["widget.displayfield"], "Ext.form.field.Field": [], "Ext.form.field.File": ["widget.filefield", "widget.fileuploadfield"], "Ext.form.field.FileButton": ["widget.filebutton"], "Ext.form.field.Hidden": ["widget.hidden", "widget.hiddenfield"], "Ext.form.field.HtmlEditor": ["widget.htmleditor"], "Ext.form.field.Number": ["widget.numberfield"], "Ext.form.field.Picker": ["widget.pickerfield"], "Ext.form.field.Radio": ["widget.radio", "widget.radiofield"], "Ext.form.field.Spinner": ["widget.spinnerfield"], "Ext.form.field.Text": ["widget.textfield"], "Ext.form.field.TextArea": ["widget.textarea", "widget.textareafield"], "Ext.form.field.Time": ["widget.timefield"], "Ext.form.field.Trigger": ["widget.trigger", "widget.triggerfield"], "Ext.form.field.VTypes": [], "Ext.fx.Anim": [], "Ext.fx.Animator": [], "Ext.fx.CubicBezier": [], "Ext.fx.Easing": [], "Ext.fx.Manager": [], "Ext.fx.PropertyHandler": [], "Ext.fx.Queue": [], "Ext.fx.target.Component": [], "Ext.fx.target.CompositeElement": [], "Ext.fx.target.CompositeElementCSS": [], "Ext.fx.target.CompositeSprite": [], "Ext.fx.target.Element": [], "Ext.fx.target.ElementCSS": [], "Ext.fx.target.Sprite": [], "Ext.fx.target.Target": [], "Ext.grid.CellContext": [], "Ext.grid.CellEditor": [], "Ext.grid.ColumnComponentLayout": ["layout.columncomponent"], "Ext.grid.ColumnLayout": ["layout.gridcolumn"], "Ext.grid.ColumnManager": [], "Ext.grid.Panel": ["widget.grid", "widget.gridpanel"], "Ext.grid.RowEditor": ["widget.roweditor"], "Ext.grid.RowEditorButtons": ["widget.roweditorbuttons"], "Ext.grid.View": ["widget.gridview"], "Ext.grid.ViewDropZone": [], "Ext.grid.column.Action": ["widget.actioncolumn"], "Ext.grid.column.Boolean": ["widget.booleancolumn"], "Ext.grid.column.Check": ["widget.checkcolumn"], "Ext.grid.column.Column": ["widget.gridcolumn"], "Ext.grid.column.Date": ["widget.datecolumn"], "Ext.grid.column.Number": ["widget.numbercolumn"], "Ext.grid.column.RowNumberer": ["widget.rownumberer"], "Ext.grid.column.Template": ["widget.templatecolumn"], "Ext.grid.feature.AbstractSummary": ["feature.abstractsummary"], "Ext.grid.feature.Feature": ["feature.feature"], "Ext.grid.feature.GroupStore": [], "Ext.grid.feature.Grouping": ["feature.grouping"], "Ext.grid.feature.GroupingSummary": ["feature.groupingsummary"], "Ext.grid.feature.RowBody": ["feature.rowbody"], "Ext.grid.feature.RowWrap": ["feature.rowwrap"], "Ext.grid.feature.Summary": ["feature.summary"], "Ext.grid.header.Container": ["widget.headercontainer"], "Ext.grid.header.DragZone": [], "Ext.grid.header.DropZone": [], "Ext.grid.locking.HeaderContainer": [], "Ext.grid.locking.Lockable": [], "Ext.grid.locking.View": [], "Ext.grid.plugin.BufferedRenderer": ["plugin.bufferedrenderer"], "Ext.grid.plugin.BufferedRendererTableView": [], "Ext.grid.plugin.BufferedRendererTreeView": [], "Ext.grid.plugin.CellEditing": ["plugin.cellediting"], "Ext.grid.plugin.DivRenderer": ["plugin.divrenderer"], "Ext.grid.plugin.DragDrop": ["plugin.gridviewdragdrop"], "Ext.grid.plugin.Editing": ["editing.editing"], "Ext.grid.plugin.HeaderReorderer": ["plugin.gridheaderreorderer"], "Ext.grid.plugin.HeaderResizer": ["plugin.gridheaderresizer"], "Ext.grid.plugin.RowEditing": ["plugin.rowediting"], "Ext.grid.plugin.RowExpander": ["plugin.rowexpander"], "Ext.grid.property.Grid": ["widget.propertygrid"], "Ext.grid.property.HeaderContainer": [], "Ext.grid.property.Property": [], "Ext.grid.property.Store": [], "Ext.layout.ClassList": [], "Ext.layout.Context": [], "Ext.layout.ContextItem": [], "Ext.layout.Layout": [], "Ext.layout.SizeModel": [], "Ext.layout.component.Auto": ["layout.autocomponent"], "Ext.layout.component.Body": ["layout.body"], "Ext.layout.component.BoundList": ["layout.boundlist"], "Ext.layout.component.Button": ["layout.button"], "Ext.layout.component.Component": [], "Ext.layout.component.Dock": ["layout.dock"], "Ext.layout.component.Draw": ["layout.draw"], "Ext.layout.component.FieldSet": ["layout.fieldset"], "Ext.layout.component.ProgressBar": ["layout.progressbar"], "Ext.layout.component.field.ComboBox": ["layout.combobox"], "Ext.layout.component.field.Field": ["layout.field"], "Ext.layout.component.field.FieldContainer": ["layout.fieldcontainer"], "Ext.layout.component.field.HtmlEditor": ["layout.htmleditor"], "Ext.layout.component.field.Slider": ["layout.sliderfield"], "Ext.layout.component.field.Text": ["layout.textfield"], "Ext.layout.component.field.TextArea": ["layout.textareafield"], "Ext.layout.component.field.Trigger": ["layout.triggerfield"], "Ext.layout.container.Absolute": ["layout.absolute"], "Ext.layout.container.Accordion": ["layout.accordion"], "Ext.layout.container.Anchor": ["layout.anchor"], "Ext.layout.container.Auto": ["layout.auto", "layout.autocontainer"], "Ext.layout.container.Border": ["layout.border"], "Ext.layout.container.Box": ["layout.box"], "Ext.layout.container.Card": ["layout.card"], "Ext.layout.container.CheckboxGroup": ["layout.checkboxgroup"], "Ext.layout.container.Column": ["layout.column"], "Ext.layout.container.Container": ["layout.container"], "Ext.layout.container.Editor": ["layout.editor"], "Ext.layout.container.Fit": ["layout.fit"], "Ext.layout.container.Form": ["layout.form"], "Ext.layout.container.HBox": ["layout.hbox"], "Ext.layout.container.Table": ["layout.table"], "Ext.layout.container.VBox": ["layout.vbox"], "Ext.layout.container.border.Region": [], "Ext.layout.container.boxOverflow.Menu": [], "Ext.layout.container.boxOverflow.None": [], "Ext.layout.container.boxOverflow.Scroller": [], "Ext.menu.CheckItem": ["widget.menucheckitem"], "Ext.menu.ColorPicker": ["widget.colormenu"], "Ext.menu.DatePicker": ["widget.datemenu"], "Ext.menu.Item": ["widget.menuitem"], "Ext.menu.KeyNav": [], "Ext.menu.Manager": [], "Ext.menu.Menu": ["widget.menu"], "Ext.menu.Separator": ["widget.menuseparator"], "Ext.panel.AbstractPanel": [], "Ext.panel.DD": [], "Ext.panel.Header": ["widget.header"], "Ext.panel.Panel": ["widget.panel"], "Ext.panel.Proxy": [], "Ext.panel.Table": ["widget.tablepanel"], "Ext.panel.Tool": ["widget.tool"], "Ext.picker.Color": ["widget.colorpicker"], "Ext.picker.Date": ["widget.datepicker"], "Ext.picker.Month": ["widget.monthpicker"], "Ext.picker.Time": ["widget.timepicker"], "Ext.resizer.BorderSplitter": ["widget.bordersplitter"], "Ext.resizer.BorderSplitterTracker": [], "Ext.resizer.Handle": [], "Ext.resizer.ResizeTracker": [], "Ext.resizer.Resizer": [], "Ext.resizer.Splitter": ["widget.splitter"], "Ext.resizer.SplitterTracker": [], "Ext.rtl.AbstractComponent": [], "Ext.rtl.EventObjectImpl": [], "Ext.rtl.button.Button": [], "Ext.rtl.chart.Chart": [], "Ext.rtl.chart.Legend": [], "Ext.rtl.chart.LegendItem": [], "Ext.rtl.chart.axis.Axis": [], "Ext.rtl.chart.axis.Gauge": [], "Ext.rtl.chart.series.Cartesian": [], "Ext.rtl.chart.series.Gauge": [], "Ext.rtl.dd.DD": [], "Ext.rtl.dom.Element_anim": [], "Ext.rtl.dom.Element_insertion": [], "Ext.rtl.dom.Element_position": [], "Ext.rtl.dom.Element_scroll": [], "Ext.rtl.dom.Element_static": [], "Ext.rtl.dom.Layer": [], "Ext.rtl.draw.Component": [], "Ext.rtl.draw.Sprite": [], "Ext.rtl.form.Labelable": [], "Ext.rtl.form.field.Checkbox": [], "Ext.rtl.form.field.File": [], "Ext.rtl.form.field.FileButton": [], "Ext.rtl.form.field.Spinner": [], "Ext.rtl.form.field.Trigger": [], "Ext.rtl.grid.CellEditor": [], "Ext.rtl.grid.ColumnLayout": [], "Ext.rtl.grid.RowEditor": [], "Ext.rtl.grid.column.Column": [], "Ext.rtl.grid.feature.Summary": [], "Ext.rtl.grid.plugin.HeaderResizer": [], "Ext.rtl.grid.plugin.RowEditing": [], "Ext.rtl.layout.ContextItem": [], "Ext.rtl.layout.component.Dock": [], "Ext.rtl.layout.component.field.Text": [], "Ext.rtl.layout.component.field.Trigger": [], "Ext.rtl.layout.container.Absolute": [], "Ext.rtl.layout.container.Border": [], "Ext.rtl.layout.container.Box": [], "Ext.rtl.layout.container.CheckboxGroup": [], "Ext.rtl.layout.container.Column": [], "Ext.rtl.layout.container.HBox": [], "Ext.rtl.layout.container.VBox": [], "Ext.rtl.layout.container.boxOverflow.Menu": [], "Ext.rtl.layout.container.boxOverflow.Scroller": [], "Ext.rtl.panel.Header": [], "Ext.rtl.panel.Panel": [], "Ext.rtl.resizer.BorderSplitterTracker": [], "Ext.rtl.resizer.ResizeTracker": [], "Ext.rtl.resizer.SplitterTracker": [], "Ext.rtl.selection.CellModel": [], "Ext.rtl.selection.TreeModel": [], "Ext.rtl.slider.Multi": [], "Ext.rtl.tab.Bar": [], "Ext.rtl.tip.QuickTipManager": [], "Ext.rtl.tree.Column": [], "Ext.rtl.util.Floating": [], "Ext.rtl.util.Renderable": [], "Ext.rtl.view.Table": [], "Ext.selection.CellModel": ["selection.cellmodel"], "Ext.selection.CheckboxModel": ["selection.checkboxmodel"], "Ext.selection.DataViewModel": [], "Ext.selection.Model": [], "Ext.selection.RowModel": ["selection.rowmodel"], "Ext.selection.TreeModel": ["selection.treemodel"], "Ext.slider.Multi": ["widget.multislider"], "Ext.slider.Single": ["widget.slider", "widget.sliderfield"], "Ext.slider.Thumb": [], "Ext.slider.Tip": ["widget.slidertip"], "Ext.state.CookieProvider": [], "Ext.state.LocalStorageProvider": ["state.localstorage"], "Ext.state.Manager": [], "Ext.state.Provider": [], "Ext.state.Stateful": [], "Ext.tab.Bar": ["widget.tabbar"], "Ext.tab.Panel": ["widget.tabpanel"], "Ext.tab.Tab": ["widget.tab"], "Ext.tip.QuickTip": ["widget.quicktip"], "Ext.tip.QuickTipManager": [], "Ext.tip.Tip": ["widget.tip"], "Ext.tip.ToolTip": ["widget.tooltip"], "Ext.toolbar.Fill": ["widget.tbfill"], "Ext.toolbar.Item": ["widget.tbitem"], "Ext.toolbar.Paging": ["widget.pagingtoolbar"], "Ext.toolbar.Separator": ["widget.tbseparator"], "Ext.toolbar.Spacer": ["widget.tbspacer"], "Ext.toolbar.TextItem": ["widget.tbtext"], "Ext.toolbar.Toolbar": ["widget.toolbar"], "Ext.tree.Column": ["widget.treecolumn"], "Ext.tree.Panel": ["widget.treepanel"], "Ext.tree.View": ["widget.treeview"], "Ext.tree.ViewDragZone": [], "Ext.tree.ViewDropZone": [], "Ext.tree.plugin.TreeViewDragDrop": ["plugin.treeviewdragdrop"], "Ext.util.AbstractMixedCollection": [], "Ext.util.Animate": [], "Ext.util.Bindable": [], "Ext.util.CSS": [], "Ext.util.ClickRepeater": [], "Ext.util.ComponentDragger": [], "Ext.util.Cookies": [], "Ext.util.ElementContainer": [], "Ext.util.Filter": [], "Ext.util.Floating": [], "Ext.util.Grouper": [], "Ext.util.HashMap": [], "Ext.util.History": [], "Ext.util.Inflector": [], "Ext.util.KeyMap": [], "Ext.util.KeyNav": [], "Ext.util.LocalStorage": [], "Ext.util.LruCache": [], "Ext.util.Memento": [], "Ext.util.MixedCollection": [], "Ext.util.Offset": [], "Ext.util.Point": [], "Ext.util.ProtoElement": [], "Ext.util.Queue": [], "Ext.util.Region": [], "Ext.util.Renderable": [], "Ext.util.Sortable": [], "Ext.util.Sorter": [], "Ext.util.TextMetrics": [], "Ext.view.AbstractView": [], "Ext.view.BoundList": ["widget.boundlist"], "Ext.view.BoundListKeyNav": [], "Ext.view.DragZone": [], "Ext.view.DropZone": [], "Ext.view.NodeCache": [], "Ext.view.Table": ["widget.tableview"], "Ext.view.TableLayout": ["layout.tableview"], "Ext.view.View": ["widget.dataview"], "Ext.window.MessageBox": ["widget.messagebox"], "Ext.window.Window": ["widget.window"]});