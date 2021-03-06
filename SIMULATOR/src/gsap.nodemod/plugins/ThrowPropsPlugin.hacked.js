/*!
 * VERSION: 0.9.0
 * DATE: 2013-09-27
 * JavaScript (also available in ActionScript 3 and 2)
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * ThrowPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */

define(['gsapTweenLite'], function (gsap) {
    (gsap._gsQueue || (gsap._gsQueue = [])).push(function () {
        "use strict";
        gsap._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function (a, b, c, d) {
            var q, r, s, t, e = function () {
                a.call(this, "throwProps"), this._overwriteProps.length = 0
            }, f = 999999999999999,
                g = {
                    x: 1,
                    y: 1,
                    z: 2,
                    scale: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 1,
                    rotationZ: 1,
                    rotationX: 2,
                    rotationY: 2,
                    skewX: 1,
                    skewY: 1
                }, h = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
                i = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
                j = function (a) {
                    //for (var b = [h, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116)], c = b.length; --c > -1;)
                    //    if (-1 !== a.indexOf(b[c])) return !0;
                    return !0 //1
                }(""),
                k = function (a, b, c, d) {
                    for (var i, j, e = b.length, g = 0, h = f; --e > -1;) i = b[e], j = i - a, 0 > j && (j = -j), h > j && i >= d && c >= i && (g = e, h = j);
                    return b[g]
                }, l = function (a, b, c, d) {
                    if ("auto" === a.end) return a;
                    c = isNaN(c) ? f : c, d = isNaN(d) ? -f : d;
                    var e = "function" == typeof a.end ? a.end(b) : a.end instanceof Array ? k(b, a.end, c, d) : Number(a.end);
                    return e > c ? e = c : d > e && (e = d), {
                        max: e,
                        min: e
                    }
                }, m = e.calculateChange = function (a, d, e, f) {
                    null == f && (f = .05);
                    var g = d instanceof c ? d : d ? new c(d) : b.defaultEase;
                    return e * f * a / g.getRatio(f)
                }, n = e.calculateDuration = function (a, d, e, f, g) {
                    g = g || .05;
                    var h = f instanceof c ? f : f ? new c(f) : b.defaultEase;
                    return Math.abs((d - a) * h.getRatio(g) / e / g)
                }, o = e.calculateTweenDuration = function (a, f, g, h, i) {
                    if ("string" == typeof a && (a = b.selector(a)), !a) return 0;
                    null == g && (g = 10), null == h && (h = .2), null == i && (i = 1), a.length && (a = a[0] || a);
                    var s, t, u, v, w, x, y, z, A, B, j = 0,
                        k = 9999999999,
                        o = f.throwProps || f,
                        p = f.ease instanceof c ? f.ease : f.ease ? new c(f.ease) : b.defaultEase,
                        q = isNaN(o.checkpoint) ? .05 : Number(o.checkpoint),
                        r = isNaN(o.resistance) ? e.defaultResistance : Number(o.resistance);
                    for (s in o) "resistance" !== s && "checkpoint" !== s && (t = o[s], "object" != typeof t && (A = A || d.getByTarget(a), A && A.isTrackingProp(s) ? t = "number" == typeof t ? {
                        velocity: t
                    } : {
                        velocity: A.getVelocity(s)
                    } : (v = Number(t) || 0, u = v * r > 0 ? v / r : v / -r)), "object" == typeof t && (void 0 !== t.velocity && "number" == typeof t.velocity ? v = Number(t.velocity) || 0 : (A = A || d.getByTarget(a), v = A && A.isTrackingProp(s) ? A.getVelocity(s) : 0), w = isNaN(t.resistance) ? r : Number(t.resistance), u = v * w > 0 ? v / w : v / -w, x = "function" == typeof a[s] ? a[s.indexOf("set") || "function" != typeof a["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : a[s] || 0, y = x + m(v, p, u, q), void 0 !== t.end && (t = l(t, y, t.max, t.min)), void 0 !== t.max && y > Number(t.max) ? (B = t.unitFactor || 1, z = x > t.max && t.min !== t.max || v * B > -15 && 45 > v * B ? h + .1 * (g - h) : n(x, t.max, v, p, q), k > z + i && (k = z + i)) : void 0 !== t.min && y < Number(t.min) && (B = t.unitFactor || 1, z = x < t.min && t.min !== t.max || v * B > -45 && 15 > v * B ? h + .1 * (g - h) : n(x, t.min, v, p, q), k > z + i && (k = z + i)), z > j && (j = z)), u > j && (j = u));
                    return j > k && (j = k), j > g ? g : h > j ? h : j
                }, p = e.prototype = new a("throwProps");
            return p.constructor = e, e.version = "0.9.0", e.API = 2, e._autoCSS = !0, e.defaultResistance = 100, e.track = function (a, b, c) {
                return d.track(a, b, c)
            }, e.untrack = function (a, b) {
                d.untrack(a, b)
            }, e.isTracking = function (a, b) {
                return d.isTracking(a, b)
            }, e.getVelocity = function (a, b) {
                var c = d.getByTarget(a);
                return c ? c.getVelocity(b) : 0 / 0
            }, e._cssRegister = function () {
                var a = (gsap.GreenSockGlobals || gsap).com.greensock.plugins.CSSPlugin;
                if (a) {
                    var b = a._internals,
                        c = b._parseToProxy,
                        f = b._setPluginRatio,
                        h = b.CSSPropTween;
                    b._registerComplexSpecialProp("throwProps", {
                        parser: function (a, b, i, j, k, l) {
                            l = new e;
                            var t, u, v, w, x, m = {}, n = {}, o = {}, p = {}, s = {};
                            r = {};
                            for (v in b) "resistance" !== v && (u = b[v], "object" == typeof u ? (void 0 !== u.velocity && "number" == typeof u.velocity ? m[v] = Number(u.velocity) || 0 : (x = x || d.getByTarget(a), m[v] = x && x.isTrackingProp(v) ? x.getVelocity(v) : 0), void 0 !== u.end && (p[v] = u.end), void 0 !== u.min && (n[v] = u.min), void 0 !== u.max && (o[v] = u.max), void 0 !== u.resistance && (t = !0, s[v] = u.resistance)) : "number" == typeof u ? m[v] = u : (x = x || d.getByTarget(a), m[v] = x && x.isTrackingProp(v) ? x.getVelocity(v) : u || 0), g[v] && j._enableTransforms(2 === g[v]));
                            w = c(a, m, j, k, l), q = w.proxy, m = w.end;
                            for (v in q) r[v] = {
                                velocity: m[v],
                                min: n[v],
                                max: o[v],
                                end: p[v],
                                resistance: s[v]
                            };
                            return null != b.resistance && (r.resistance = b.resistance), k = new h(a, "throwProps", 0, 0, w.pt, 2), k.plugin = l, k.setRatio = f, k.data = w, l._onInitTween(q, r, j._tween), k
                        }
                    })
                }
            }, e.to = function (a, c, d, e, f) {
                c.throwProps || (c = {
                    throwProps: c
                });
                var g = new b(a, 1, c);
                return g.render(0, !0, !0), g.vars.css ? (g.duration(o(q, {
                    throwProps: r,
                    ease: c.ease
                }, d, e, f)), g._delay && !g.vars.immediateRender ? g.invalidate() : s._onInitTween(q, t, g), g) : (g.kill(), new b(a, o(a, c, d, e, f), c))
            }, p._onInitTween = function (a, b, c) {
                if (this.target = a, this._props = [], s = this, t = b, !j) return gsap.location.href = "http://" + h + i + "?plugin=" + this._propName, !1;
                var n, o, p, q, r, u, v, w, x, e = c._ease,
                    f = isNaN(b.checkpoint) ? .05 : Number(b.checkpoint),
                    g = c._duration,
                    k = 0;
                for (n in b)
                    if ("resistance" !== n && "checkpoint" !== n) {
                        if (o = b[n], "number" == typeof o) r = Number(o) || 0;
                        else if ("object" != typeof o || isNaN(o.velocity)) {
                            if (x = x || d.getByTarget(a), !x || !x.isTrackingProp(n)) throw "ERROR: No velocity was defined in the throwProps tween of " + a + " property: " + n;
                            r = x.getVelocity(n)
                        } else r = Number(o.velocity);
                        u = m(r, e, g, f), w = 0, q = "function" == typeof a[n], p = q ? a[n.indexOf("set") || "function" != typeof a["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : a[n], "object" == typeof o && (v = p + u, void 0 !== o.end && (o = l(o, v, o.max, o.min)), void 0 !== o.max && Number(o.max) < v ? w = o.max - p - u : void 0 !== o.min && Number(o.min) > v && (w = o.min - p - u)), this._props[k++] = {
                            p: n,
                            s: p,
                            c1: u,
                            c2: w,
                            f: q,
                            r: !1
                        }, this._overwriteProps[k] = n
                    }
                return !0
            }, p._kill = function (b) {
                for (var c = this._props.length; --c > -1;) null != b[this._props[c].p] && this._props.splice(c, 1);
                return a.prototype._kill.call(this, b)
            }, p._roundProps = function (a, b) {
                for (var c = this._props, d = c.length; --d > -1;) (a[c[d]] || a.throwProps) && (c[d].r = b)
            }, p.setRatio = function (a) {
                for (var c, d, b = this._props.length; --b > -1;) c = this._props[b], d = c.s + c.c1 * a + c.c2 * a * a, c.r && (d = 0 | d + (d > 0 ? .5 : -.5)), c.f ? this.target[c.p](d) : this.target[c.p] = d
            }, a.activate([e]), e
        }, !0), gsap._gsDefine("utils.VelocityTracker", ["TweenLite"], function (a) {
            var b, c, d, e, f = /([A-Z])/g,
                g = {}, h = {
                    x: 1,
                    y: 1,
                    z: 2,
                    scale: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 1,
                    rotationZ: 1,
                    rotationX: 2,
                    rotationY: 2,
                    skewX: 1,
                    skewY: 1
                }, i = function () { }, j = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
                k = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
                l = function (a) {
                    //for (var b = [j, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116)], c = b.length; --c > -1;)
                    //    if (-1 !== a.indexOf(b[c])) return !0;
                    return !0 //1
                }(""),
                m = function (a, b, c) {
                    var d = (a._gsTransform || g)[b];
                    return d || 0 === d ? d : (a.style[b] ? d = a.style[b] : (c = c || i(a, null)) ? (a = c.getPropertyValue(b.replace(f, "-$1").toLowerCase()), d = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, d = c[b]), parseFloat(d) || 0)
                }, n = a.ticker,
                o = function (a, b, c) {
                    this.p = a, this.f = b, this.v1 = this.v2 = 0, this.t1 = this.t2 = n.time, this.css = !1, this.type = "", this._prev = null, c && (this._next = c, c._prev = this)
                }, p = function () {
                    var f, g, a = b,
                        c = n.time;
                    if (c - d >= .03)
                        for (e = d, d = c; a;) {
                            for (g = a._firstVP; g;) f = g.css ? m(a.target, g.p) : g.f ? a.target[g.p]() : a.target[g.p], (f !== g.v1 || c - g.t1 > .15) && (g.v2 = g.v1, g.v1 = f, g.t2 = g.t1, g.t1 = c), g = g._next;
                            a = a._next
                        }
                }, q = function (a) {
                    this._lookup = {}, this.target = a, this.elem = a.style && a.nodeType ? !0 : !1, c || (n.addEventListener("tick", p, null, !1, -100), d = e = n.time, c = !0), b && (this._next = b, b._prev = this), b = this
                }, r = q.getByTarget = function (a) {
                    for (var c = b; c;) {
                        if (c.target === a) return c;
                        c = c._next
                    }
                }, s = q.prototype;
            return s.addProp = function (b, c) {
                if (!this._lookup[b]) {
                    var d = this.target,
                        e = "function" == typeof d[b],
                        f = e ? this._altProp(b) : b,
                        g = this._firstVP;
                    this._firstVP = this._lookup[b] = this._lookup[f] = g = new o(f !== b && 0 === b.indexOf("set") ? f : b, e, g), g.css = this.elem && (void 0 !== this.target.style[g.p] || h[g.p]), g.css && h[g.p] && !d._gsTransform && a.set(d, {
                        x: "+=0"
                    }), g.type = c || g.css && 0 === b.indexOf("rotation") ? "deg" : "", g.v1 = g.v2 = g.css ? m(d, g.p) : e ? d[g.p]() : d[g.p]
                }
            }, s.removeProp = function (a) {
                var b = this._lookup[a];
                b && (b._prev ? b._prev._next = b._next : b === this._firstVP && (this._firstVP = b._next), b._next && (b._next._prev = b._prev), this._lookup[a] = 0, b.f && (this._lookup[this._altProp(a)] = 0))
            }, s.isTrackingProp = function (a) {
                return this._lookup[a] instanceof o
            }, s.getVelocity = function (a) {
                var d, e, f, b = this._lookup[a],
                    c = this.target;
                if (!b) throw "The velocity of " + a + " is not being tracked.";
                return d = b.css ? m(c, b.p) : b.f ? c[b.p]() : c[b.p], e = d - b.v2, ("rad" === b.type || "deg" === b.type) && (f = "rad" === b.type ? 2 * Math.PI : 360, e %= f, e !== e % (f / 2) && (e = 0 > e ? e + f : e - f)), e / (n.time - b.t2)
            }, s._altProp = function (a) {
                var b = a.substr(0, 3),
                    c = ("get" === b ? "set" : "set" === b ? "get" : b) + a.substr(3);
                return "function" == typeof this.target[c] ? c : a
            }, q.getByTarget = function (a) {
                for (var c = b; c;) {
                    if (c.target === a) return c;
                    c = c._next
                }
            }, q.track = function (a, b, c) {
                var d = r(a),
                    e = b.split(","),
                    f = e.length;
                for (c = (c || "").split(","), d || (d = new q(a)) ; --f > -1;) d.addProp(e[f], c[f] || c[0]);
                return d
            }, q.untrack = function (a, c) {
                var d = r(a),
                    e = (c || "").split(","),
                    f = e.length;
                if (d) {
                    for (; --f > -1;) d.removeProp(e[f]);
                    d._firstVP && c || (d._prev ? d._prev._next = d._next : d === b && (b = d._next), d._next && (d._next._prev = d._prev))
                }
            }, q.isTracking = function (a, b) {
                var c = r(a);
                return c ? !b && c._firstVP ? !0 : c.isTrackingProp(b) : !1
            }, l ? q : (gsap.location.href = "http://" + j + k + "?plugin=VelocityTracker", !1)
        }, !0)
    }), gsap._gsDefine && gsap._gsQueue.pop()();
    return gsap;
});
