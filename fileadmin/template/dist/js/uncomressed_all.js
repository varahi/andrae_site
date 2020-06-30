function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
    }
    return Array.from(e);
}
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e);
        })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    function n(e, t, n) {
        var r,
            i = (t = t || se).createElement("script");
        if (((i.text = e), n)) for (r in we) n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i);
    }
    function r(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? fe[pe.call(e)] || "object" : typeof e;
    }
    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = r(e);
        return !ye(e) && !be(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
    }
    function o(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function s(e, t, n) {
        return ye(t)
            ? xe.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
            })
            : t.nodeType
                ? xe.grep(e, function (e) {
                    return (e === t) !== n;
                })
                : "string" != typeof t
                    ? xe.grep(e, function (e) {
                        return de.call(t, e) > -1 !== n;
                    })
                    : xe.filter(t, e, n);
    }
    function a(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    function u(e) {
        var t = {};
        return (
            xe.each(e.match(Ne) || [], function (e, n) {
                t[n] = !0;
            }),
                t
        );
    }
    function l(e) {
        return e;
    }
    function c(e) {
        throw e;
    }
    function d(e, t, n, r) {
        var i;
        try {
            e && ye((i = e.promise)) ? i.call(e).done(t).fail(n) : e && ye((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    function f() {
        se.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), xe.ready();
    }
    function p(e, t) {
        return t.toUpperCase();
    }
    function h(e) {
        return e.replace($e, "ms-").replace(Me, p);
    }
    function g() {
        this.expando = xe.expando + g.uid++;
    }
    function m(e) {
        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : He.test(e) ? JSON.parse(e) : e));
    }
    function v(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(Ve, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = m(n);
                } catch (e) {}
                Ie.set(e, t, n);
            } else n = void 0;
        return n;
    }
    function y(e, t, n, r) {
        var i,
            o,
            s = 20,
            a = r
                ? function () {
                    return r.cur();
                }
                : function () {
                    return xe.css(e, t, "");
                },
            u = a(),
            l = (n && n[3]) || (xe.cssNumber[t] ? "" : "px"),
            c = (xe.cssNumber[t] || ("px" !== l && +u)) && ze.exec(xe.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; s--; ) xe.style(e, t, c + l), (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0), (c /= o);
            (c *= 2), xe.style(e, t, c + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
    }
    function b(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = Ze[r];
        return i || ((t = n.body.appendChild(n.createElement(r))), (i = xe.css(t, "display")), t.parentNode.removeChild(t), "none" === i && (i = "block"), (Ze[r] = i), i);
    }
    function w(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
            (r = e[o]).style &&
            ((n = r.style.display),
                t ? ("none" === n && ((i[o] = Le.get(r, "display") || null), i[o] || (r.style.display = "")), "" === r.style.display && Ue(r) && (i[o] = b(r))) : "none" !== n && ((i[o] = "none"), Le.set(r, "display", n)));
        for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    function x(e, t) {
        var n;
        return (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && o(e, t)) ? xe.merge([e], n) : n;
    }
    function C(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Le.set(e[n], "globalEval", !t || Le.get(t[n], "globalEval"));
    }
    function _(e, t, n, i, o) {
        for (var s, a, u, l, c, d, f = t.createDocumentFragment(), p = [], h = 0, g = e.length; h < g; h++)
            if ((s = e[h]) || 0 === s)
                if ("object" === r(s)) xe.merge(p, s.nodeType ? [s] : s);
                else if (Ke.test(s)) {
                    for (a = a || f.appendChild(t.createElement("div")), u = (Ye.exec(s) || ["", ""])[1].toLowerCase(), l = Je[u] || Je._default, a.innerHTML = l[1] + xe.htmlPrefilter(s) + l[2], d = l[0]; d--; ) a = a.lastChild;
                    xe.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(s));
        for (f.textContent = "", h = 0; (s = p[h++]); )
            if (i && xe.inArray(s, i) > -1) o && o.push(s);
            else if (((c = xe.contains(s.ownerDocument, s)), (a = x(f.appendChild(s), "script")), c && C(a), n)) for (d = 0; (s = a[d++]); ) Qe.test(s.type || "") && n.push(s);
        return f;
    }
    function T() {
        return !0;
    }
    function E() {
        return !1;
    }
    function A() {
        try {
            return se.activeElement;
        } catch (e) {}
    }
    function F(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && ((r = r || n), (n = void 0));
            for (a in t) F(e, a, n, r, t[a], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = E;
        else if (!i) return e;
        return (
            1 === o &&
            ((s = i),
                ((i = function (e) {
                    return xe().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = xe.guid++))),
                e.each(function () {
                    xe.event.add(this, t, i, r, n);
                })
        );
    }
    function S(e, t) {
        return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? xe(e).children("tbody")[0] || e : e;
    }
    function D(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function k(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function j(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (Le.hasData(e) && ((o = Le.access(e)), (s = Le.set(t, o)), (l = o.events))) {
                delete s.handle, (s.events = {});
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) xe.event.add(t, i, l[i][n]);
            }
            Ie.hasData(e) && ((a = Ie.access(e)), (u = xe.extend({}, a)), Ie.set(t, u));
        }
    }
    function N(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ge.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
    }
    function q(e, t, r, i) {
        t = le.apply([], t);
        var o,
            s,
            a,
            u,
            l,
            c,
            d = 0,
            f = e.length,
            p = f - 1,
            h = t[0],
            g = ye(h);
        if (g || (f > 1 && "string" == typeof h && !ve.checkClone && st.test(h)))
            return e.each(function (n) {
                var o = e.eq(n);
                g && (t[0] = h.call(this, n, o.html())), q(o, t, r, i);
            });
        if (f && ((o = _(t, e[0].ownerDocument, !1, e, i)), (s = o.firstChild), 1 === o.childNodes.length && (o = s), s || i)) {
            for (u = (a = xe.map(x(o, "script"), D)).length; d < f; d++) (l = o), d !== p && ((l = xe.clone(l, !0, !0)), u && xe.merge(a, x(l, "script"))), r.call(e[d], l, d);
            if (u)
                for (c = a[a.length - 1].ownerDocument, xe.map(a, k), d = 0; d < u; d++)
                    (l = a[d]), Qe.test(l.type || "") && !Le.access(l, "globalEval") && xe.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? xe._evalUrl && xe._evalUrl(l.src) : n(l.textContent.replace(at, ""), c, l));
        }
        return e;
    }
    function P(e, t, n) {
        for (var r, i = t ? xe.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || xe.cleanData(x(r)), r.parentNode && (n && xe.contains(r.ownerDocument, r) && C(x(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    function O(e, t, n) {
        var r,
            i,
            o,
            s,
            a = e.style;
        return (
            (n = n || lt(e)) &&
            ("" !== (s = n.getPropertyValue(t) || n[t]) || xe.contains(e.ownerDocument, e) || (s = xe.style(e, t)),
            !ve.pixelBoxStyles() && ut.test(s) && ct.test(t) && ((r = a.width), (i = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = r), (a.minWidth = i), (a.maxWidth = o))),
                void 0 !== s ? s + "" : s
        );
    }
    function $(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments);
            },
        };
    }
    function M(e) {
        if (e in mt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--; ) if ((e = gt[n] + t) in mt) return e;
    }
    function R(e) {
        var t = xe.cssProps[e];
        return t || (t = xe.cssProps[e] = M(e) || e), t;
    }
    function L(e, t, n) {
        var r = ze.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function I(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
            "margin" === n && (u += xe.css(e, n + Be[s], !0, i)),
                r
                    ? ("content" === n && (u -= xe.css(e, "padding" + Be[s], !0, i)), "margin" !== n && (u -= xe.css(e, "border" + Be[s] + "Width", !0, i)))
                    : ((u += xe.css(e, "padding" + Be[s], !0, i)), "padding" !== n ? (u += xe.css(e, "border" + Be[s] + "Width", !0, i)) : (a += xe.css(e, "border" + Be[s] + "Width", !0, i)));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - 0.5))), u;
    }
    function H(e, t, n) {
        var r = lt(e),
            i = O(e, t, r),
            o = "border-box" === xe.css(e, "boxSizing", !1, r),
            s = o;
        if (ut.test(i)) {
            if (!n) return i;
            i = "auto";
        }
        return (
            (s = s && (ve.boxSizingReliable() || i === e.style[t])),
            ("auto" === i || (!parseFloat(i) && "inline" === xe.css(e, "display", !1, r))) && ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
            (i = parseFloat(i) || 0) + I(e, t, n || (o ? "border" : "content"), s, r, i) + "px"
        );
    }
    function V(e, t, n, r, i) {
        return new V.prototype.init(e, t, n, r, i);
    }
    function W() {
        yt && (!1 === se.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(W) : e.setTimeout(W, xe.fx.interval), xe.fx.tick());
    }
    function z() {
        return (
            e.setTimeout(function () {
                vt = void 0;
            }),
                (vt = Date.now())
        );
    }
    function B(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Be[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function U(e, t, n) {
        for (var r, i = (G.tweeners[t] || []).concat(G.tweeners["*"]), o = 0, s = i.length; o < s; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function X(e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            u,
            l,
            c,
            d = "width" in t || "height" in t,
            f = this,
            p = {},
            h = e.style,
            g = e.nodeType && Ue(e),
            m = Le.get(e, "fxshow");
        n.queue ||
        (null == (s = xe._queueHooks(e, "fx")).unqueued &&
        ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
                s.unqueued || a();
            })),
            s.unqueued++,
            f.always(function () {
                f.always(function () {
                    s.unqueued--, xe.queue(e, "fx").length || s.empty.fire();
                });
            }));
        for (r in t)
            if (((i = t[r]), bt.test(i))) {
                if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    g = !0;
                }
                p[r] = (m && m[r]) || xe.style(e, r);
            }
        if ((u = !xe.isEmptyObject(t)) || !xe.isEmptyObject(p)) {
            d &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = m && m.display) && (l = Le.get(e, "display")),
            "none" === (c = xe.css(e, "display")) && (l ? (c = l) : (w([e], !0), (l = e.style.display || l), (c = xe.css(e, "display")), w([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
            "none" === xe.css(e, "float") &&
            (u ||
            (f.done(function () {
                h.display = l;
            }),
            null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                (h.display = "inline-block"))),
            n.overflow &&
            ((h.overflow = "hidden"),
                f.always(function () {
                    (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                })),
                (u = !1);
            for (r in p)
                u ||
                (m ? "hidden" in m && (g = m.hidden) : (m = Le.access(e, "fxshow", { display: l })),
                o && (m.hidden = !g),
                g && w([e], !0),
                    f.done(function () {
                        g || w([e]), Le.remove(e, "fxshow");
                        for (r in p) xe.style(e, r, p[r]);
                    })),
                    (u = U(g ? m[r] : 0, r, f)),
                r in m || ((m[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        }
    }
    function Z(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (((r = h(n)), (i = t[r]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (s = xe.cssHooks[r]) && "expand" in s)) {
                (o = s.expand(o)), delete e[r];
                for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
            } else t[r] = i;
    }
    function G(e, t, n) {
        var r,
            i,
            o = 0,
            s = G.prefilters.length,
            a = xe.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (i) return !1;
                for (var t = vt || z(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; o < s; o++) l.tweens[o].run(r);
                return a.notifyWith(e, [l, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1);
            },
            l = a.promise({
                elem: e,
                props: xe.extend({}, t),
                opts: xe.extend(!0, { specialEasing: {}, easing: xe.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: vt || z(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = xe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this;
                },
            }),
            c = l.props;
        for (Z(c, l.opts.specialEasing); o < s; o++) if ((r = G.prefilters[o].call(l, e, c, l.opts))) return ye(r.stop) && (xe._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return (
            xe.map(c, U, l),
            ye(l.opts.start) && l.opts.start.call(e, l),
                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                xe.fx.timer(xe.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
                l
        );
    }
    function Y(e) {
        return (e.match(Ne) || []).join(" ");
    }
    function Q(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function J(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(Ne) || [] : [];
    }
    function K(e, t, n, i) {
        var o;
        if (Array.isArray(t))
            xe.each(t, function (t, r) {
                n || jt.test(e) ? i(e, r) : K(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
            });
        else if (n || "object" !== r(t)) i(e, t);
        else for (o in t) K(e + "[" + o + "]", t[o], n, i);
    }
    function ee(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(Ne) || [];
            if (ye(n)) for (; (r = o[i++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function te(e, t, n, r) {
        function i(a) {
            var u;
            return (
                (o[a] = !0),
                    xe.each(e[a] || [], function (e, a) {
                        var l = a(t, n, r);
                        return "string" != typeof l || s || o[l] ? (s ? !(u = l) : void 0) : (t.dataTypes.unshift(l), i(l), !1);
                    }),
                    u
            );
        }
        var o = {},
            s = e === Wt;
        return i(t.dataTypes[0]) || (!o["*"] && i("*"));
    }
    function ne(e, t) {
        var n,
            r,
            i = xe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && xe.extend(!0, e, r), e;
    }
    function re(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break;
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                s || (s = i);
            }
            o = o || s;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function ie(e, t, n, r) {
        var i,
            o,
            s,
            a,
            u,
            l = {},
            c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o; )
            if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (!(s = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                !0 === s ? (s = l[i]) : !0 !== l[i] && ((o = a[0]), c.unshift(a[1]));
                                break;
                            }
                    if (!0 !== s)
                        if (s && e["throws"]) t = s(t);
                        else
                            try {
                                t = s(t);
                            } catch (e) {
                                return { state: "parsererror", error: s ? e : "No conversion from " + u + " to " + o };
                            }
                }
        return { state: "success", data: t };
    }
    var oe = [],
        se = e.document,
        ae = Object.getPrototypeOf,
        ue = oe.slice,
        le = oe.concat,
        ce = oe.push,
        de = oe.indexOf,
        fe = {},
        pe = fe.toString,
        he = fe.hasOwnProperty,
        ge = he.toString,
        me = ge.call(Object),
        ve = {},
        ye = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        be = function (e) {
            return null != e && e === e.window;
        },
        we = { type: !0, src: !0, noModule: !0 },
        xe = function (e, t) {
            return new xe.fn.init(e, t);
        },
        Ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (xe.fn = xe.prototype = {
        jquery: "3.3.1",
        constructor: xe,
        length: 0,
        toArray: function () {
            return ue.call(this);
        },
        get: function (e) {
            return null == e ? ue.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = xe.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return xe.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                xe.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(ue.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: ce,
        sort: oe.sort,
        splice: oe.splice,
    }),
        (xe.extend = xe.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                s = arguments[0] || {},
                a = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++), "object" == typeof s || ye(s) || (s = {}), a === u && ((s = this), a--); a < u; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        (n = s[t]),
                        s !== (r = e[t]) &&
                        (l && r && (xe.isPlainObject(r) || (i = Array.isArray(r)))
                            ? (i ? ((i = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && xe.isPlainObject(n) ? n : {}), (s[t] = xe.extend(l, o, r)))
                            : void 0 !== r && (s[t] = r));
            return s;
        }),
        xe.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== pe.call(e) || ((t = ae(e)) && ("function" != typeof (n = he.call(t, "constructor") && t.constructor) || ge.call(n) !== me)));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e) {
                n(e);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (i(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(Ce, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (i(Object(e)) ? xe.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : de.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++) (r = !t(e[o], o)) !== a && i.push(e[o]);
                return i;
            },
            map: function (e, t, n) {
                var r,
                    o,
                    s = 0,
                    a = [];
                if (i(e)) for (r = e.length; s < r; s++) null != (o = t(e[s], s, n)) && a.push(o);
                else for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
                return le.apply([], a);
            },
            guid: 1,
            support: ve,
        }),
    "function" == typeof Symbol && (xe.fn[Symbol.iterator] = oe[Symbol.iterator]),
        xe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            fe["[object " + t + "]"] = t.toLowerCase();
        });
    var _e = (function (e) {
        function t(e, t, n, r) {
            var i,
                o,
                s,
                a,
                u,
                l,
                c,
                f = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (((n = n || []), "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))) return n;
            if (!r && ((t ? t.ownerDocument || t : H) !== q && N(t), (t = t || q), O)) {
                if (11 !== h && (u = ve.exec(e)))
                    if ((i = u[1])) {
                        if (9 === h) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n;
                        } else if (f && (s = f.getElementById(i)) && L(t, s) && s.id === i) return n.push(s), n;
                    } else {
                        if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = u[3]) && C.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(i)), n;
                    }
                if (C.qsa && !U[e + " "] && (!$ || !$.test(e))) {
                    if (1 !== h) (f = t), (c = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? (a = a.replace(xe, Ce)) : t.setAttribute("id", (a = I)), o = (l = A(e)).length; o--; ) l[o] = "#" + a + " " + p(l[o]);
                        (c = l.join(",")), (f = (ye.test(e) && d(t.parentNode)) || t);
                    }
                    if (c)
                        try {
                            return J.apply(n, f.querySelectorAll(c)), n;
                        } catch (e) {
                        } finally {
                            a === I && t.removeAttribute("id");
                        }
                }
            }
            return S(e.replace(ae, "$1"), t, n, r);
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > _.cacheLength && delete e[t.shift()], (e[n + " "] = r);
            }
            var t = [];
            return e;
        }
        function r(e) {
            return (e[I] = !0), e;
        }
        function i(e) {
            var t = q.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; ) _.attrHandle[n[r]] = t;
        }
        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function a(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function l(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (t.isDisabled !== !e && Te(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function c(e) {
            return r(function (t) {
                return (
                    (t = +t),
                        r(function (n, r) {
                            for (var i, o = e([], n.length, t), s = o.length; s--; ) n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                        })
                );
            });
        }
        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        function f() {}
        function p(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function h(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                s = n && "parentNode" === o,
                a = W++;
            return t.first
                ? function (t, n, i) {
                    for (; (t = t[r]); ) if (1 === t.nodeType || s) return e(t, n, i);
                    return !1;
                }
                : function (t, n, u) {
                    var l,
                        c,
                        d,
                        f = [V, a];
                    if (u) {
                        for (; (t = t[r]); ) if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
                    } else
                        for (; (t = t[r]); )
                            if (1 === t.nodeType || s)
                                if (((d = t[I] || (t[I] = {})), (c = d[t.uniqueID] || (d[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                else {
                                    if ((l = c[o]) && l[0] === V && l[1] === a) return (f[2] = l[2]);
                                    if (((c[o] = f), (f[2] = e(t, n, u)))) return !0;
                                }
                    return !1;
                };
        }
        function g(e) {
            return e.length > 1
                ? function (t, n, r) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                    return !0;
                }
                : e[0];
        }
        function m(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r;
        }
        function v(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++) (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)));
            return s;
        }
        function y(e, t, n, i, o, s) {
            return (
                i && !i[I] && (i = y(i)),
                o && !o[I] && (o = y(o, s)),
                    r(function (r, s, a, u) {
                        var l,
                            c,
                            d,
                            f = [],
                            p = [],
                            h = s.length,
                            g = r || m(t || "*", a.nodeType ? [a] : a, []),
                            y = !e || (!r && t) ? g : v(g, f, e, a, u),
                            b = n ? (o || (r ? e : h || i) ? [] : s) : y;
                        if ((n && n(y, b, a, u), i)) for (l = v(b, p), i(l, [], a, u), c = l.length; c--; ) (d = l[c]) && (b[p[c]] = !(y[p[c]] = d));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (l = [], c = b.length; c--; ) (d = b[c]) && l.push((y[c] = d));
                                    o(null, (b = []), l, u);
                                }
                                for (c = b.length; c--; ) (d = b[c]) && (l = o ? ee(r, d) : f[c]) > -1 && (r[l] = !(s[l] = d));
                            }
                        } else (b = v(b === s ? b.splice(h, b.length) : b)), o ? o(null, s, b, u) : J.apply(s, b);
                    })
            );
        }
        function b(e) {
            for (
                var t,
                    n,
                    r,
                    i = e.length,
                    o = _.relative[e[0].type],
                    s = o || _.relative[" "],
                    a = o ? 1 : 0,
                    u = h(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    l = h(
                        function (e) {
                            return ee(t, e) > -1;
                        },
                        s,
                        !0
                    ),
                    c = [
                        function (e, n, r) {
                            var i = (!o && (r || n !== D)) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                            return (t = null), i;
                        },
                    ];
                a < i;
                a++
            )
                if ((n = _.relative[e[a].type])) c = [h(g(c), n)];
                else {
                    if ((n = _.filter[e[a].type].apply(null, e[a].matches))[I]) {
                        for (r = ++a; r < i && !_.relative[e[r].type]; r++);
                        return y(a > 1 && g(c), a > 1 && p(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(ae, "$1"), n, a < r && b(e.slice(a, r)), r < i && b((e = e.slice(r))), r < i && p(e));
                    }
                    c.push(n);
                }
            return g(c);
        }
        function w(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function (r, s, a, u, l) {
                    var c,
                        d,
                        f,
                        p = 0,
                        h = "0",
                        g = r && [],
                        m = [],
                        y = D,
                        b = r || (o && _.find.TAG("*", l)),
                        w = (V += null == y ? 1 : Math.random() || 0.1),
                        x = b.length;
                    for (l && (D = s === q || s || l); h !== x && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (d = 0, s || c.ownerDocument === q || (N(c), (a = !O)); (f = e[d++]); )
                                if (f(c, s || q, a)) {
                                    u.push(c);
                                    break;
                                }
                            l && (V = w);
                        }
                        i && ((c = !f && c) && p--, r && g.push(c));
                    }
                    if (((p += h), i && h !== p)) {
                        for (d = 0; (f = n[d++]); ) f(g, m, s, a);
                        if (r) {
                            if (p > 0) for (; h--; ) g[h] || m[h] || (m[h] = Y.call(u));
                            m = v(m);
                        }
                        J.apply(u, m), l && !r && m.length > 0 && p + n.length > 1 && t.uniqueSort(u);
                    }
                    return l && ((V = w), (D = y)), g;
                };
            return i ? r(s) : s;
        }
        var x,
            C,
            _,
            T,
            E,
            A,
            F,
            S,
            D,
            k,
            j,
            N,
            q,
            P,
            O,
            $,
            M,
            R,
            L,
            I = "sizzle" + 1 * new Date(),
            H = e.document,
            V = 0,
            W = 0,
            z = n(),
            B = n(),
            U = n(),
            X = function (e, t) {
                return e === t && (j = !0), 0;
            },
            Z = {}.hasOwnProperty,
            G = [],
            Y = G.pop,
            Q = G.push,
            J = G.push,
            K = G.slice,
            ee = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(oe),
            fe = new RegExp("^" + re + "$"),
            pe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i"),
            },
            he = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ce = function (e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            _e = function () {
                N();
            },
            Te = h(
                function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            J.apply((G = K.call(H.childNodes)), H.childNodes), G[H.childNodes.length].nodeType;
        } catch (e) {
            J = {
                apply: G.length
                    ? function (e, t) {
                        Q.apply(e, K.call(t));
                    }
                    : function (e, t) {
                        for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                        e.length = n - 1;
                    },
            };
        }
        (C = t.support = {}),
            (E = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
            }),
            (N = t.setDocument = function (e) {
                var t,
                    n,
                    r = e ? e.ownerDocument || e : H;
                return r !== q && 9 === r.nodeType && r.documentElement
                    ? ((q = r),
                        (P = q.documentElement),
                        (O = !E(q)),
                    H !== q && (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _e, !1) : n.attachEvent && n.attachEvent("onunload", _e)),
                        (C.attributes = i(function (e) {
                            return (e.className = "i"), !e.getAttribute("className");
                        })),
                        (C.getElementsByTagName = i(function (e) {
                            return e.appendChild(q.createComment("")), !e.getElementsByTagName("*").length;
                        })),
                        (C.getElementsByClassName = me.test(q.getElementsByClassName)),
                        (C.getById = i(function (e) {
                            return (P.appendChild(e).id = I), !q.getElementsByName || !q.getElementsByName(I).length;
                        })),
                        C.getById
                            ? ((_.filter.ID = function (e) {
                                var t = e.replace(be, we);
                                return function (e) {
                                    return e.getAttribute("id") === t;
                                };
                            }),
                                (_.find.ID = function (e, t) {
                                    if ("undefined" != typeof t.getElementById && O) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : [];
                                    }
                                }))
                            : ((_.filter.ID = function (e) {
                                var t = e.replace(be, we);
                                return function (e) {
                                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t;
                                };
                            }),
                                (_.find.ID = function (e, t) {
                                    if ("undefined" != typeof t.getElementById && O) {
                                        var n,
                                            r,
                                            i,
                                            o = t.getElementById(e);
                                        if (o) {
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                            for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        }
                                        return [];
                                    }
                                })),
                        (_.find.TAG = C.getElementsByTagName
                            ? function (e, t) {
                                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : C.qsa ? t.querySelectorAll(e) : void 0;
                            }
                            : function (e, t) {
                                var n,
                                    r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                                    return r;
                                }
                                return o;
                            }),
                        (_.find.CLASS =
                            C.getElementsByClassName &&
                            function (e, t) {
                                if ("undefined" != typeof t.getElementsByClassName && O) return t.getElementsByClassName(e);
                            }),
                        (M = []),
                        ($ = []),
                    (C.qsa = me.test(q.querySelectorAll)) &&
                    (i(function (e) {
                        (P.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length && $.push("[*^$]=" + ne + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || $.push("\\[" + ne + "*(?:value|" + te + ")"),
                        e.querySelectorAll("[id~=" + I + "-]").length || $.push("~="),
                        e.querySelectorAll(":checked").length || $.push(":checked"),
                        e.querySelectorAll("a#" + I + "+*").length || $.push(".#.+[+~]");
                    }),
                        i(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = q.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length && $.push("name" + ne + "*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length && $.push(":enabled", ":disabled"),
                                (P.appendChild(e).disabled = !0),
                            2 !== e.querySelectorAll(":disabled").length && $.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                $.push(",.*:");
                        })),
                    (C.matchesSelector = me.test((R = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector))) &&
                    i(function (e) {
                        (C.disconnectedMatch = R.call(e, "*")), R.call(e, "[s!='']:x"), M.push("!=", oe);
                    }),
                        ($ = $.length && new RegExp($.join("|"))),
                        (M = M.length && new RegExp(M.join("|"))),
                        (t = me.test(P.compareDocumentPosition)),
                        (L =
                            t || me.test(P.contains)
                                ? function (e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                }
                                : function (e, t) {
                                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                    return !1;
                                }),
                        (X = t
                            ? function (e, t) {
                                if (e === t) return (j = !0), 0;
                                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return (
                                    n ||
                                    (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!C.sortDetached && t.compareDocumentPosition(e) === n)
                                        ? e === q || (e.ownerDocument === H && L(H, e))
                                            ? -1
                                            : t === q || (t.ownerDocument === H && L(H, t))
                                                ? 1
                                                : k
                                                    ? ee(k, e) - ee(k, t)
                                                    : 0
                                        : 4 & n
                                            ? -1
                                            : 1)
                                );
                            }
                            : function (e, t) {
                                if (e === t) return (j = !0), 0;
                                var n,
                                    r = 0,
                                    i = e.parentNode,
                                    o = t.parentNode,
                                    a = [e],
                                    u = [t];
                                if (!i || !o) return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : k ? ee(k, e) - ee(k, t) : 0;
                                if (i === o) return s(e, t);
                                for (n = e; (n = n.parentNode); ) a.unshift(n);
                                for (n = t; (n = n.parentNode); ) u.unshift(n);
                                for (; a[r] === u[r]; ) r++;
                                return r ? s(a[r], u[r]) : a[r] === H ? -1 : u[r] === H ? 1 : 0;
                            }),
                        q)
                    : q;
            }),
            (t.matches = function (e, n) {
                return t(e, null, null, n);
            }),
            (t.matchesSelector = function (e, n) {
                if (((e.ownerDocument || e) !== q && N(e), (n = n.replace(ce, "='$1']")), C.matchesSelector && O && !U[n + " "] && (!M || !M.test(n)) && (!$ || !$.test(n))))
                    try {
                        var r = R.call(e, n);
                        if (r || C.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                    } catch (e) {}
                return t(n, q, null, [e]).length > 0;
            }),
            (t.contains = function (e, t) {
                return (e.ownerDocument || e) !== q && N(e), L(e, t);
            }),
            (t.attr = function (e, t) {
                (e.ownerDocument || e) !== q && N(e);
                var n = _.attrHandle[t.toLowerCase()],
                    r = n && Z.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                return void 0 !== r ? r : C.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
            }),
            (t.escape = function (e) {
                return (e + "").replace(xe, Ce);
            }),
            (t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (t.uniqueSort = function (e) {
                var t,
                    n = [],
                    r = 0,
                    i = 0;
                if (((j = !C.detectDuplicates), (k = !C.sortStable && e.slice(0)), e.sort(X), j)) {
                    for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                    for (; r--; ) e.splice(n[r], 1);
                }
                return (k = null), e;
            }),
            (T = t.getText = function (e) {
                var t,
                    n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
                    } else if (3 === i || 4 === i) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += T(t);
                return n;
            }),
            ((_ = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: pe,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (e) {
                        return (e[1] = e[1].replace(be, we)), (e[3] = (e[3] || e[4] || e[5] || "").replace(be, we)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                                "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && t.error(e[0]),
                                e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return pe.CHILD.test(e[0])
                            ? null
                            : (e[3] ? (e[2] = e[4] || e[5] || "") : n && de.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(be, we).toLowerCase();
                        return "*" === e
                            ? function () {
                                return !0;
                            }
                            : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t;
                            };
                    },
                    CLASS: function (e) {
                        var t = z[e + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                                z(e, function (e) {
                                    return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (e, n, r) {
                        return function (i) {
                            var o = t.attr(i, e);
                            return null == o
                                ? "!=" === n
                                : !n ||
                                ((o += ""),
                                    "=" === n
                                        ? o === r
                                        : "!=" === n
                                        ? o !== r
                                        : "^=" === n
                                            ? r && 0 === o.indexOf(r)
                                            : "*=" === n
                                                ? r && o.indexOf(r) > -1
                                                : "$=" === n
                                                    ? r && o.slice(-r.length) === r
                                                    : "~=" === n
                                                        ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1
                                                        : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
                        };
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === r && 0 === i
                            ? function (e) {
                                return !!e.parentNode;
                            }
                            : function (t, n, u) {
                                var l,
                                    c,
                                    d,
                                    f,
                                    p,
                                    h,
                                    g = o !== s ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    v = a && t.nodeName.toLowerCase(),
                                    y = !u && !a,
                                    b = !1;
                                if (m) {
                                    if (o) {
                                        for (; g; ) {
                                            for (f = t; (f = f[g]); ) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (((h = [s ? m.firstChild : m.lastChild]), s && y)) {
                                        for (
                                            b = (p = (l = (c = (d = (f = m)[I] || (f[I] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === V && l[1]) && l[2], f = p && m.childNodes[p];
                                            (f = (++p && f && f[g]) || (b = p = 0) || h.pop());

                                        )
                                            if (1 === f.nodeType && ++b && f === t) {
                                                c[e] = [V, p, b];
                                                break;
                                            }
                                    } else if ((y && (b = p = (l = (c = (d = (f = t)[I] || (f[I] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === V && l[1]), !1 === b))
                                        for (
                                            ;
                                            (f = (++p && f && f[g]) || (b = p = 0) || h.pop()) &&
                                            ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((c = (d = f[I] || (f[I] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [V, b]), f !== t));

                                        );
                                    return (b -= i) === r || (b % r == 0 && b / r >= 0);
                                }
                            };
                    },
                    PSEUDO: function (e, n) {
                        var i,
                            o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[I]
                            ? o(n)
                            : o.length > 1
                                ? ((i = [e, e, "", n]),
                                    _.setFilters.hasOwnProperty(e.toLowerCase())
                                        ? r(function (e, t) {
                                            for (var r, i = o(e, n), s = i.length; s--; ) e[(r = ee(e, i[s]))] = !(t[r] = i[s]);
                                        })
                                        : function (e) {
                                            return o(e, 0, i);
                                        })
                                : o;
                    },
                },
                pseudos: {
                    not: r(function (e) {
                        var t = [],
                            n = [],
                            i = F(e.replace(ae, "$1"));
                        return i[I]
                            ? r(function (e, t, n, r) {
                                for (var o, s = i(e, null, r, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                            })
                            : function (e, r, o) {
                                return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                            };
                    }),
                    has: r(function (e) {
                        return function (n) {
                            return t(e, n).length > 0;
                        };
                    }),
                    contains: r(function (e) {
                        return (
                            (e = e.replace(be, we)),
                                function (t) {
                                    return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
                                }
                        );
                    }),
                    lang: r(function (e) {
                        return (
                            fe.test(e || "") || t.error("unsupported lang: " + e),
                                (e = e.replace(be, we).toLowerCase()),
                                function (t) {
                                    var n;
                                    do if ((n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1;
                                }
                        );
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                        return e === P;
                    },
                    focus: function (e) {
                        return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: l(!1),
                    disabled: l(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !_.pseudos.empty(e);
                    },
                    header: function (e) {
                        return ge.test(e.nodeName);
                    },
                    input: function (e) {
                        return he.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                    },
                    first: c(function () {
                        return [0];
                    }),
                    last: c(function (e, t) {
                        return [t - 1];
                    }),
                    eq: c(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: c(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: c(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: c(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                        return e;
                    }),
                    gt: c(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                    }),
                },
            }).pseudos.nth = _.pseudos.eq);
        for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) _.pseudos[x] = a(x);
        for (x in { submit: !0, reset: !0 }) _.pseudos[x] = u(x);
        return (
            (f.prototype = _.filters = _.pseudos),
                (_.setFilters = new f()),
                (A = t.tokenize = function (e, n) {
                    var r,
                        i,
                        o,
                        s,
                        a,
                        u,
                        l,
                        c = B[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (a = e, u = [], l = _.preFilter; a; ) {
                        (r && !(i = ue.exec(a))) || (i && (a = a.slice(i[0].length) || a), u.push((o = []))), (r = !1), (i = le.exec(a)) && ((r = i.shift()), o.push({ value: r, type: i[0].replace(ae, " ") }), (a = a.slice(r.length)));
                        for (s in _.filter) !(i = pe[s].exec(a)) || (l[s] && !(i = l[s](i))) || ((r = i.shift()), o.push({ value: r, type: s, matches: i }), (a = a.slice(r.length)));
                        if (!r) break;
                    }
                    return n ? a.length : a ? t.error(e) : B(e, u).slice(0);
                }),
                (F = t.compile = function (e, t) {
                    var n,
                        r = [],
                        i = [],
                        o = U[e + " "];
                    if (!o) {
                        for (t || (t = A(e)), n = t.length; n--; ) (o = b(t[n]))[I] ? r.push(o) : i.push(o);
                        (o = U(e, w(i, r))).selector = e;
                    }
                    return o;
                }),
                (S = t.select = function (e, t, n, r) {
                    var i,
                        o,
                        s,
                        a,
                        u,
                        l = "function" == typeof e && e,
                        c = !r && A((e = l.selector || e));
                    if (((n = n || []), 1 === c.length)) {
                        if ((o = c[0] = c[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && O && _.relative[o[1].type]) {
                            if (!(t = (_.find.ID(s.matches[0].replace(be, we), t) || [])[0])) return n;
                            l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                        }
                        for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && ((s = o[i]), !_.relative[(a = s.type)]); )
                            if ((u = _.find[a]) && (r = u(s.matches[0].replace(be, we), (ye.test(o[0].type) && d(t.parentNode)) || t))) {
                                if ((o.splice(i, 1), !(e = r.length && p(o)))) return J.apply(n, r), n;
                                break;
                            }
                    }
                    return (l || F(e, c))(r, t, !O, n, !t || (ye.test(e) && d(t.parentNode)) || t), n;
                }),
                (C.sortStable = I.split("").sort(X).join("") === I),
                (C.detectDuplicates = !!j),
                N(),
                (C.sortDetached = i(function (e) {
                    return 1 & e.compareDocumentPosition(q.createElement("fieldset"));
                })),
            i(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
            o("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (C.attributes &&
                i(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
            o("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            }),
            i(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
            o(te, function (e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
            }),
                t
        );
    })(e);
    (xe.find = _e), (xe.expr = _e.selectors), (xe.expr[":"] = xe.expr.pseudos), (xe.uniqueSort = xe.unique = _e.uniqueSort), (xe.text = _e.getText), (xe.isXMLDoc = _e.isXML), (xe.contains = _e.contains), (xe.escapeSelector = _e.escape);
    var Te = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && xe(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        Ee = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        Ae = xe.expr.match.needsContext,
        Fe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    (xe.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType
                    ? xe.find.matchesSelector(r, e)
                    ? [r]
                    : []
                    : xe.find.matches(
                    e,
                    xe.grep(t, function (e) {
                        return 1 === e.nodeType;
                    })
                    )
        );
    }),
        xe.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        xe(e).filter(function () {
                            for (t = 0; t < r; t++) if (xe.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) xe.find(e, i[t], n);
                return r > 1 ? xe.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(s(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(s(this, e || [], !0));
            },
            is: function (e) {
                return !!s(this, "string" == typeof e && Ae.test(e) ? xe(e) : e || [], !1).length;
            },
        });
    var Se,
        De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((xe.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || Se), "string" == typeof e)) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : De.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (((t = t instanceof xe ? t[0] : t), xe.merge(this, xe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), Fe.test(r[1]) && xe.isPlainObject(t)))
                    for (r in t) ye(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = se.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : ye(e) ? (void 0 !== n.ready ? n.ready(e) : e(xe)) : xe.makeArray(e, this);
    }).prototype = xe.fn),
        (Se = xe(se));
    var ke = /^(?:parents|prev(?:Until|All))/,
        je = { children: !0, contents: !0, next: !0, prev: !0 };
    xe.fn.extend({
        has: function (e) {
            var t = xe(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (xe.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof e && xe(e);
            if (!Ae.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && xe.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(o.length > 1 ? xe.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? de.call(xe(e), this[0]) : de.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(xe.uniqueSort(xe.merge(this.get(), xe(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        xe.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return Te(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return Te(e, "parentNode", n);
                },
                next: function (e) {
                    return a(e, "nextSibling");
                },
                prev: function (e) {
                    return a(e, "previousSibling");
                },
                nextAll: function (e) {
                    return Te(e, "nextSibling");
                },
                prevAll: function (e) {
                    return Te(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return Te(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return Te(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return Ee((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return Ee(e.firstChild);
                },
                contents: function (e) {
                    return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), xe.merge([], e.childNodes));
                },
            },
            function (e, t) {
                xe.fn[e] = function (n, r) {
                    var i = xe.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = xe.filter(r, i)), this.length > 1 && (je[e] || xe.uniqueSort(i), ke.test(e) && i.reverse()), this.pushStack(i);
                };
            }
        );
    var Ne = /[^\x20\t\r\n\f]+/g;
    (xe.Callbacks = function (e) {
        e = "string" == typeof e ? u(e) : xe.extend({}, e);
        var t,
            n,
            i,
            o,
            s = [],
            a = [],
            l = -1,
            c = function () {
                for (o = o || e.once, i = t = !0; a.length; l = -1) for (n = a.shift(); ++l < s.length; ) !1 === s[l].apply(n[0], n[1]) && e.stopOnFalse && ((l = s.length), (n = !1));
                e.memory || (n = !1), (t = !1), o && (s = n ? [] : "");
            },
            d = {
                add: function () {
                    return (
                        s &&
                        (n && !t && ((l = s.length - 1), a.push(n)),
                            (function i(t) {
                                xe.each(t, function (t, n) {
                                    ye(n) ? (e.unique && d.has(n)) || s.push(n) : n && n.length && "string" !== r(n) && i(n);
                                });
                            })(arguments),
                        n && !t && c()),
                            this
                    );
                },
                remove: function () {
                    return (
                        xe.each(arguments, function (e, t) {
                            for (var n; (n = xe.inArray(t, s, n)) > -1; ) s.splice(n, 1), n <= l && l--;
                        }),
                            this
                    );
                },
                has: function (e) {
                    return e ? xe.inArray(e, s) > -1 : s.length > 0;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (o = a = []), (s = n = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (o = a = []), n || t || (s = n = ""), this;
                },
                locked: function () {
                    return !!o;
                },
                fireWith: function (e, n) {
                    return o || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || c()), this;
                },
                fire: function () {
                    return d.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!i;
                },
            };
        return d;
    }),
        xe.extend({
            Deferred: function (t) {
                var n = [
                        ["notify", "progress", xe.Callbacks("memory"), xe.Callbacks("memory"), 2],
                        ["resolve", "done", xe.Callbacks("once memory"), xe.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", xe.Callbacks("once memory"), xe.Callbacks("once memory"), 1, "rejected"],
                    ],
                    r = "pending",
                    i = {
                        state: function () {
                            return r;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return i.then(null, e);
                        },
                        pipe: function () {
                            var e = arguments;
                            return xe
                                .Deferred(function (t) {
                                    xe.each(n, function (n, r) {
                                        var i = ye(e[r[4]]) && e[r[4]];
                                        o[r[1]](function () {
                                            var e = i && i.apply(this, arguments);
                                            e && ye(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        then: function (t, r, i) {
                            function o(t, n, r, i) {
                                return function () {
                                    var a = this,
                                        u = arguments,
                                        d = function () {
                                            var e, d;
                                            if (!(t < s)) {
                                                if ((e = r.apply(a, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                (d = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                    ye(d)
                                                        ? i
                                                        ? d.call(e, o(s, n, l, i), o(s, n, c, i))
                                                        : (s++, d.call(e, o(s, n, l, i), o(s, n, c, i), o(s, n, l, n.notifyWith)))
                                                        : (r !== l && ((a = void 0), (u = [e])), (i || n.resolveWith)(a, u));
                                            }
                                        },
                                        f = i
                                            ? d
                                            : function () {
                                                try {
                                                    d();
                                                } catch (e) {
                                                    xe.Deferred.exceptionHook && xe.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= s && (r !== c && ((a = void 0), (u = [e])), n.rejectWith(a, u));
                                                }
                                            };
                                    t ? f() : (xe.Deferred.getStackHook && (f.stackTrace = xe.Deferred.getStackHook()), e.setTimeout(f));
                                };
                            }
                            var s = 0;
                            return xe
                                .Deferred(function (e) {
                                    n[0][3].add(o(0, e, ye(i) ? i : l, e.notifyWith)), n[1][3].add(o(0, e, ye(t) ? t : l)), n[2][3].add(o(0, e, ye(r) ? r : c));
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? xe.extend(e, i) : i;
                        },
                    },
                    o = {};
                return (
                    xe.each(n, function (e, t) {
                        var s = t[2],
                            a = t[5];
                        (i[t[1]] = s.add),
                        a &&
                        s.add(
                            function () {
                                r = a;
                            },
                            n[3 - e][2].disable,
                            n[3 - e][3].disable,
                            n[0][2].lock,
                            n[0][3].lock
                        ),
                            s.add(t[3].fire),
                            (o[t[0]] = function () {
                                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                            }),
                            (o[t[0] + "With"] = s.fireWith);
                    }),
                        i.promise(o),
                    t && t.call(o, o),
                        o
                );
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    i = ue.call(arguments),
                    o = xe.Deferred(),
                    s = function (e) {
                        return function (n) {
                            (r[e] = this), (i[e] = arguments.length > 1 ? ue.call(arguments) : n), --t || o.resolveWith(r, i);
                        };
                    };
                if (t <= 1 && (d(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || ye(i[n] && i[n].then))) return o.then();
                for (; n--; ) d(i[n], s(n), o.reject);
                return o.promise();
            },
        });
    var qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (xe.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && qe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
        (xe.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var Pe = xe.Deferred();
    (xe.fn.ready = function (e) {
        return (
            Pe.then(e)["catch"](function (e) {
                xe.readyException(e);
            }),
                this
        );
    }),
        xe.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --xe.readyWait : xe.isReady) || ((xe.isReady = !0), (!0 !== e && --xe.readyWait > 0) || Pe.resolveWith(se, [xe]));
            },
        }),
        (xe.ready.then = Pe.then),
        "complete" === se.readyState || ("loading" !== se.readyState && !se.documentElement.doScroll) ? e.setTimeout(xe.ready) : (se.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
    var Oe = function (e, t, n, i, o, s, a) {
            var u = 0,
                l = e.length,
                c = null == n;
            if ("object" === r(n)) {
                o = !0;
                for (u in n) Oe(e, t, u, n[u], !0, s, a);
            } else if (
                void 0 !== i &&
                ((o = !0),
                ye(i) || (a = !0),
                c &&
                (a
                    ? (t.call(e, i), (t = null))
                    : ((c = t),
                        (t = function (e, t, n) {
                            return c.call(xe(e), n);
                        }))),
                    t)
            )
                for (; u < l; u++) t(e[u], n, a ? i : i.call(e[u], u, t(e[u], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : s;
        },
        $e = /^-ms-/,
        Me = /-([a-z])/g,
        Re = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
    (g.uid = 1),
        (g.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), Re(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[h(t)] = n;
                else for (r in t) i[h(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(h) : (t = h(t)) in r ? [t] : t.match(Ne) || []).length;
                        for (; n--; ) delete r[t[n]];
                    }
                    (void 0 === t || xe.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !xe.isEmptyObject(t);
            },
        });
    var Le = new g(),
        Ie = new g(),
        He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ve = /[A-Z]/g;
    xe.extend({
        hasData: function (e) {
            return Ie.hasData(e) || Le.hasData(e);
        },
        data: function (e, t, n) {
            return Ie.access(e, t, n);
        },
        removeData: function (e, t) {
            Ie.remove(e, t);
        },
        _data: function (e, t, n) {
            return Le.access(e, t, n);
        },
        _removeData: function (e, t) {
            Le.remove(e, t);
        },
    }),
        xe.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    i,
                    o = this[0],
                    s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && ((i = Ie.get(o)), 1 === o.nodeType && !Le.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--; ) s[n] && 0 === (r = s[n].name).indexOf("data-") && ((r = h(r.slice(5))), v(o, r, i[r]));
                        Le.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                        Ie.set(this, e);
                    })
                    : Oe(
                        this,
                        function (t) {
                            var n;
                            if (o && void 0 === t) {
                                if (void 0 !== (n = Ie.get(o, e))) return n;
                                if (void 0 !== (n = v(o, e))) return n;
                            } else
                                this.each(function () {
                                    Ie.set(this, e, t);
                                });
                        },
                        null,
                        t,
                        arguments.length > 1,
                        null,
                        !0
                    );
            },
            removeData: function (e) {
                return this.each(function () {
                    Ie.remove(this, e);
                });
            },
        }),
        xe.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = Le.get(e, t)), n && (!r || Array.isArray(n) ? (r = Le.access(e, t, xe.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = xe.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = xe._queueHooks(e, t),
                    s = function () {
                        xe.dequeue(e, t);
                    };
                "inprogress" === i && ((i = n.shift()), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    Le.get(e, n) ||
                    Le.access(e, n, {
                        empty: xe.Callbacks("once memory").add(function () {
                            Le.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        xe.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                        arguments.length < n
                            ? xe.queue(this[0], e)
                            : void 0 === t
                            ? this
                            : this.each(function () {
                                var n = xe.queue(this, e, t);
                                xe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && xe.dequeue(this, e);
                            })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    xe.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = xe.Deferred(),
                    o = this,
                    s = this.length,
                    a = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = Le.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
                return a(), i.promise(t);
            },
        });
    var We = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ze = new RegExp("^(?:([+-])=|)(" + We + ")([a-z%]*)$", "i"),
        Be = ["Top", "Right", "Bottom", "Left"],
        Ue = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && xe.contains(e.ownerDocument, e) && "none" === xe.css(e, "display"));
        },
        Xe = function (e, t, n, r) {
            var i,
                o,
                s = {};
            for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = s[o];
            return i;
        },
        Ze = {};
    xe.fn.extend({
        show: function () {
            return w(this, !0);
        },
        hide: function () {
            return w(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                    Ue(this) ? xe(this).show() : xe(this).hide();
                });
        },
    });
    var Ge = /^(?:checkbox|radio)$/i,
        Ye = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Qe = /^$|^module$|\/(?:java|ecma)script/i,
        Je = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (Je.optgroup = Je.option), (Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead), (Je.th = Je.td);
    var Ke = /<|&#?\w+;/;
    !(function () {
        var e = se.createDocumentFragment().appendChild(se.createElement("div")),
            t = se.createElement("input");
        t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            (ve.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (ve.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var et = se.documentElement,
        tt = /^key/,
        nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rt = /^([^.]*)(?:\.(.+)|)/;
    (xe.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o,
                s,
                a,
                u,
                l,
                c,
                d,
                f,
                p,
                h,
                g,
                m = Le.get(e);
            if (m)
                for (
                    n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && xe.find.matchesSelector(et, i),
                    n.guid || (n.guid = xe.guid++),
                    (u = m.events) || (u = m.events = {}),
                    (s = m.handle) ||
                    (s = m.handle = function (t) {
                        return "undefined" != typeof xe && xe.event.triggered !== t.type ? xe.event.dispatch.apply(e, arguments) : void 0;
                    }),
                        l = (t = (t || "").match(Ne) || [""]).length;
                    l--;

                )
                    (p = g = (a = rt.exec(t[l]) || [])[1]),
                        (h = (a[2] || "").split(".").sort()),
                    p &&
                    ((d = xe.event.special[p] || {}),
                        (p = (i ? d.delegateType : d.bindType) || p),
                        (d = xe.event.special[p] || {}),
                        (c = xe.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && xe.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                    (f = u[p]) || (((f = u[p] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, r, h, s)) || (e.addEventListener && e.addEventListener(p, s))),
                    d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                        i ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                        (xe.event.global[p] = !0));
        },
        remove: function (e, t, n, r, i) {
            var o,
                s,
                a,
                u,
                l,
                c,
                d,
                f,
                p,
                h,
                g,
                m = Le.hasData(e) && Le.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(Ne) || [""]).length; l--; )
                    if (((a = rt.exec(t[l]) || []), (p = g = a[1]), (h = (a[2] || "").split(".").sort()), p)) {
                        for (d = xe.event.special[p] || {}, f = u[(p = (r ? d.delegateType : d.bindType) || p)] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--; )
                            (c = f[o]),
                            (!i && g !== c.origType) ||
                            (n && n.guid !== c.guid) ||
                            (a && !a.test(c.namespace)) ||
                            (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                            (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                        s && !f.length && ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) || xe.removeEvent(e, p, m.handle), delete u[p]);
                    } else for (p in u) xe.event.remove(e, p + t[l], n, r, !0);
                xe.isEmptyObject(u) && Le.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                s,
                a = xe.event.fix(e),
                u = new Array(arguments.length),
                l = (Le.get(this, "events") || {})[a.type] || [],
                c = xe.event.special[a.type] || {};
            for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (((a.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, a))) {
                for (s = xe.event.handlers.call(this, a, l), t = 0; (i = s[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
                        ((a.handleObj = o), (a.data = o.data), void 0 !== (r = ((xe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                s,
                a = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], s = {}, n = 0; n < u; n++) void 0 === s[(i = (r = t[n]).selector + " ")] && (s[i] = r.needsContext ? xe(i, this).index(l) > -1 : xe.find(i, this, null, [l]).length), s[i] && o.push(r);
                        o.length && a.push({ elem: l, handlers: o });
                    }
            return (l = this), u < t.length && a.push({ elem: l, handlers: t.slice(u) }), a;
        },
        addProp: function (e, t) {
            Object.defineProperty(xe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ye(t)
                    ? function () {
                        if (this.originalEvent) return t(this.originalEvent);
                    }
                    : function () {
                        if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (e) {
            return e[xe.expando] ? e : new xe.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== A() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === A() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1;
                },
                _default: function (e) {
                    return o(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (xe.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (xe.Event = function (e, t) {
            return this instanceof xe.Event
                ? (e && e.type
                    ? ((this.originalEvent = e),
                        (this.type = e.type),
                        (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? T : E),
                        (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                        (this.currentTarget = e.currentTarget),
                        (this.relatedTarget = e.relatedTarget))
                    : (this.type = e),
                t && xe.extend(this, t),
                    (this.timeStamp = (e && e.timeStamp) || Date.now()),
                    (this[xe.expando] = !0),
                    void 0)
                : new xe.Event(e, t);
        }),
        (xe.Event.prototype = {
            constructor: xe.Event,
            isDefaultPrevented: E,
            isPropagationStopped: E,
            isImmediatePropagationStopped: E,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = T), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = T), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = T), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        xe.each(
            {
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
                char: !0,
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
                which: function (e) {
                    var t = e.button;
                    return null == e.which && tt.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && nt.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            xe.event.addProp
        ),
        xe.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            xe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (i && (i === r || xe.contains(r, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        xe.fn.extend({
            on: function (e, t, n, r) {
                return F(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return F(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), xe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = E),
                        this.each(function () {
                            xe.event.remove(this, e, n, t);
                        })
                );
            },
        });
    var it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ot = /<script|<style|<link/i,
        st = /checked\s*(?:[^=]|=\s*.checked.)/i,
        at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    xe.extend({
        htmlPrefilter: function (e) {
            return e.replace(it, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                s,
                a = e.cloneNode(!0),
                u = xe.contains(e.ownerDocument, e);
            if (!(ve.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || xe.isXMLDoc(e))) for (s = x(a), r = 0, i = (o = x(e)).length; r < i; r++) N(o[r], s[r]);
            if (t)
                if (n) for (o = o || x(e), s = s || x(a), r = 0, i = o.length; r < i; r++) j(o[r], s[r]);
                else j(e, a);
            return (s = x(a, "script")).length > 0 && C(s, !u && x(e, "script")), a;
        },
        cleanData: function (e) {
            for (var t, n, r, i = xe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Re(n)) {
                    if ((t = n[Le.expando])) {
                        if (t.events) for (r in t.events) i[r] ? xe.event.remove(n, r) : xe.removeEvent(n, r, t.handle);
                        n[Le.expando] = void 0;
                    }
                    n[Ie.expando] && (n[Ie.expando] = void 0);
                }
        },
    }),
        xe.fn.extend({
            detach: function (e) {
                return P(this, e, !0);
            },
            remove: function (e) {
                return P(this, e);
            },
            text: function (e) {
                return Oe(
                    this,
                    function (e) {
                        return void 0 === e
                            ? xe.text(this)
                            : this.empty().each(function () {
                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                            });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return q(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || S(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return q(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = S(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return q(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return q(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (xe.cleanData(x(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                        (t = null == t ? e : t),
                        this.map(function () {
                            return xe.clone(this, e, t);
                        })
                );
            },
            html: function (e) {
                return Oe(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !ot.test(e) && !Je[(Ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = xe.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (xe.cleanData(x(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return q(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        xe.inArray(this, e) < 0 && (xe.cleanData(x(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        xe.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            xe.fn[e] = function (e) {
                for (var n, r = [], i = xe(e), o = i.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), xe(i[s])[t](n), ce.apply(r, n.get());
                return this.pushStack(r);
            };
        });
    var ut = new RegExp("^(" + We + ")(?!px)[a-z%]+$", "i"),
        lt = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        ct = new RegExp(Be.join("|"), "i");
    !(function () {
        function t() {
            if (l) {
                (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    et.appendChild(u).appendChild(l);
                var t = e.getComputedStyle(l);
                (r = "1%" !== t.top),
                    (a = 12 === n(t.marginLeft)),
                    (l.style.right = "60%"),
                    (s = 36 === n(t.right)),
                    (i = 36 === n(t.width)),
                    (l.style.position = "absolute"),
                    (o = 36 === l.offsetWidth || "absolute"),
                    et.removeChild(u),
                    (l = null);
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var r,
            i,
            o,
            s,
            a,
            u = se.createElement("div"),
            l = se.createElement("div");
        l.style &&
        ((l.style.backgroundClip = "content-box"),
            (l.cloneNode(!0).style.backgroundClip = ""),
            (ve.clearCloneStyle = "content-box" === l.style.backgroundClip),
            xe.extend(ve, {
                boxSizingReliable: function () {
                    return t(), i;
                },
                pixelBoxStyles: function () {
                    return t(), s;
                },
                pixelPosition: function () {
                    return t(), r;
                },
                reliableMarginLeft: function () {
                    return t(), a;
                },
                scrollboxSize: function () {
                    return t(), o;
                },
            }));
    })();
    var dt = /^(none|table(?!-c[ea]).+)/,
        ft = /^--/,
        pt = { position: "absolute", visibility: "hidden", display: "block" },
        ht = { letterSpacing: "0", fontWeight: "400" },
        gt = ["Webkit", "Moz", "ms"],
        mt = se.createElement("div").style;
    xe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = O(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    s,
                    a = h(t),
                    u = ft.test(t),
                    l = e.style;
                if ((u || (t = R(a)), (s = xe.cssHooks[t] || xe.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ze.exec(n)) && i[1] && ((n = y(e, t, i)), (o = "number")),
                null != n &&
                n === n &&
                ("number" === o && (n += (i && i[3]) || (xe.cssNumber[a] ? "" : "px")),
                ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                s,
                a = h(t);
            return (
                ft.test(t) || (t = R(a)),
                (s = xe.cssHooks[t] || xe.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)),
                void 0 === i && (i = O(e, t, r)),
                "normal" === i && t in ht && (i = ht[t]),
                    "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
        },
    }),
        xe.each(["height", "width"], function (e, t) {
            xe.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n)
                        return !dt.test(xe.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? H(e, t, r)
                            : Xe(e, pt, function () {
                                return H(e, t, r);
                            });
                },
                set: function (e, n, r) {
                    var i,
                        o = lt(e),
                        s = "border-box" === xe.css(e, "boxSizing", !1, o),
                        a = r && I(e, t, r, s, o);
                    return (
                        s && ve.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - I(e, t, "border", !1, o) - 0.5)),
                        a && (i = ze.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = xe.css(e, t))),
                            L(e, n, a)
                    );
                },
            };
        }),
        (xe.cssHooks.marginLeft = $(ve.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(O(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                        Xe(e, { marginLeft: 0 }, function () {
                            return e.getBoundingClientRect().left;
                        })) + "px"
                );
        })),
        xe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (xe.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Be[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
            "margin" !== e && (xe.cssHooks[e + t].set = L);
        }),
        xe.fn.extend({
            css: function (e, t) {
                return Oe(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (r = lt(e), i = t.length; s < i; s++) o[t[s]] = xe.css(e, t[s], !1, r);
                            return o;
                        }
                        return void 0 !== n ? xe.style(e, t, n) : xe.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
        }),
        (xe.Tween = V),
        (V.prototype = {
            constructor: V,
            init: function (e, t, n, r, i, o) {
                (this.elem = e), (this.prop = n), (this.easing = i || xe.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (xe.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = V.propHooks[this.prop];
                return e && e.get ? e.get(this) : V.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = V.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = xe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                        (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : V.propHooks._default.set(this),
                        this
                );
            },
        }),
        (V.prototype.init.prototype = V.prototype),
        (V.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = xe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    xe.fx.step[e.prop] ? xe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[xe.cssProps[e.prop]] && !xe.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : xe.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (V.propHooks.scrollTop = V.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (xe.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (xe.fx = V.prototype.init),
        (xe.fx.step = {});
    var vt,
        yt,
        bt = /^(?:toggle|show|hide)$/,
        wt = /queueHooks$/;
    (xe.Animation = xe.extend(G, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return y(n.elem, e, ze.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            ye(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ne));
            for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (G.tweeners[n] = G.tweeners[n] || []), G.tweeners[n].unshift(t);
        },
        prefilters: [X],
        prefilter: function (e, t) {
            t ? G.prefilters.unshift(e) : G.prefilters.push(e);
        },
    })),
        (xe.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? xe.extend({}, e) : { complete: n || (!n && t) || (ye(e) && e), duration: e, easing: (n && t) || (t && !ye(t) && t) };
            return (
                xe.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in xe.fx.speeds ? (r.duration = xe.fx.speeds[r.duration]) : (r.duration = xe.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                    (r.old = r.complete),
                    (r.complete = function () {
                        ye(r.old) && r.old.call(this), r.queue && xe.dequeue(this, r.queue);
                    }),
                    r
            );
        }),
        xe.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(Ue).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = xe.isEmptyObject(e),
                    o = xe.speed(t, n, r),
                    s = function () {
                        var t = G(this, xe.extend({}, e), o);
                        (i || Le.get(this, "finish")) && t.stop(!0);
                    };
                return (s.finish = s), i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                        this.each(function () {
                            var t = !0,
                                i = null != e && e + "queueHooks",
                                o = xe.timers,
                                s = Le.get(this);
                            if (i) s[i] && s[i].stop && r(s[i]);
                            else for (i in s) s[i] && s[i].stop && wt.test(i) && r(s[i]);
                            for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                            (!t && n) || xe.dequeue(this, e);
                        })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                        this.each(function () {
                            var t,
                                n = Le.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = xe.timers,
                                s = r ? r.length : 0;
                            for (n.finish = !0, xe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish;
                        })
                );
            },
        }),
        xe.each(["toggle", "show", "hide"], function (e, t) {
            var n = xe.fn[t];
            xe.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, r, i);
            };
        }),
        xe.each({ slideDown: B("show"), slideUp: B("hide"), slideToggle: B("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            xe.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
            };
        }),
        (xe.timers = []),
        (xe.fx.tick = function () {
            var e,
                t = 0,
                n = xe.timers;
            for (vt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || xe.fx.stop(), (vt = void 0);
        }),
        (xe.fx.timer = function (e) {
            xe.timers.push(e), xe.fx.start();
        }),
        (xe.fx.interval = 13),
        (xe.fx.start = function () {
            yt || ((yt = !0), W());
        }),
        (xe.fx.stop = function () {
            yt = null;
        }),
        (xe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (xe.fn.delay = function (t, n) {
            return (
                (t = xe.fx ? xe.fx.speeds[t] || t : t),
                    (n = n || "fx"),
                    this.queue(n, function (n, r) {
                        var i = e.setTimeout(n, t);
                        r.stop = function () {
                            e.clearTimeout(i);
                        };
                    })
            );
        }),
        (function () {
            var e = se.createElement("input"),
                t = se.createElement("select").appendChild(se.createElement("option"));
            (e.type = "checkbox"), (ve.checkOn = "" !== e.value), (ve.optSelected = t.selected), ((e = se.createElement("input")).value = "t"), (e.type = "radio"), (ve.radioValue = "t" === e.value);
        })();
    var xt,
        Ct = xe.expr.attrHandle;
    xe.fn.extend({
        attr: function (e, t) {
            return Oe(this, xe.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                xe.removeAttr(this, e);
            });
        },
    }),
        xe.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? xe.prop(e, t, n)
                        : ((1 === o && xe.isXMLDoc(e)) || (i = xe.attrHooks[t.toLowerCase()] || (xe.expr.match.bool.test(t) ? xt : void 0)),
                            void 0 !== n
                                ? null === n
                                ? void xe.removeAttr(e, t)
                                : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                    ? r
                                    : (e.setAttribute(t, n + ""), n)
                                : i && "get" in i && null !== (r = i.get(e, t))
                                ? r
                                : null == (r = xe.find.attr(e, t))
                                    ? void 0
                                    : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!ve.radioValue && "radio" === t && o(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(Ne);
                if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
            },
        }),
        (xt = {
            set: function (e, t, n) {
                return !1 === t ? xe.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        xe.each(xe.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = Ct[t] || xe.find.attr;
            Ct[t] = function (e, t, r) {
                var i,
                    o,
                    s = t.toLowerCase();
                return r || ((o = Ct[s]), (Ct[s] = i), (i = null != n(e, t, r) ? s : null), (Ct[s] = o)), i;
            };
        });
    var _t = /^(?:input|select|textarea|button)$/i,
        Tt = /^(?:a|area)$/i;
    xe.fn.extend({
        prop: function (e, t) {
            return Oe(this, xe.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[xe.propFix[e] || e];
            });
        },
    }),
        xe.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && xe.isXMLDoc(e)) || ((t = xe.propFix[t] || t), (i = xe.propHooks[t])),
                            void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = xe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : _t.test(e.nodeName) || (Tt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
    ve.optSelected ||
    (xe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
    }),
        xe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            xe.propFix[this.toLowerCase()] = this;
        }),
        xe.fn.extend({
            addClass: function (e) {
                var t,
                    n,
                    r,
                    i,
                    o,
                    s,
                    a,
                    u = 0;
                if (ye(e))
                    return this.each(function (t) {
                        xe(this).addClass(e.call(this, t, Q(this)));
                    });
                if ((t = J(e)).length)
                    for (; (n = this[u++]); )
                        if (((i = Q(n)), (r = 1 === n.nodeType && " " + Y(i) + " "))) {
                            for (s = 0; (o = t[s++]); ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (a = Y(r)) && n.setAttribute("class", a);
                        }
                return this;
            },
            removeClass: function (e) {
                var t,
                    n,
                    r,
                    i,
                    o,
                    s,
                    a,
                    u = 0;
                if (ye(e))
                    return this.each(function (t) {
                        xe(this).removeClass(e.call(this, t, Q(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((t = J(e)).length)
                    for (; (n = this[u++]); )
                        if (((i = Q(n)), (r = 1 === n.nodeType && " " + Y(i) + " "))) {
                            for (s = 0; (o = t[s++]); ) for (; r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
                            i !== (a = Y(r)) && n.setAttribute("class", a);
                        }
                return this;
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                    ? t
                        ? this.addClass(e)
                        : this.removeClass(e)
                    : ye(e)
                        ? this.each(function (n) {
                            xe(this).toggleClass(e.call(this, n, Q(this), t), t);
                        })
                        : this.each(function () {
                            var t, i, o, s;
                            if (r) for (i = 0, o = xe(this), s = J(e); (t = s[i++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                            else (void 0 !== e && "boolean" !== n) || ((t = Q(this)) && Le.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Le.get(this, "__className__") || ""));
                        });
            },
            hasClass: function (e) {
                var t,
                    n,
                    r = 0;
                for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && (" " + Y(Q(n)) + " ").indexOf(t) > -1) return !0;
                return !1;
            },
        });
    var Et = /\r/g;
    xe.fn.extend({
        val: function (e) {
            var t,
                n,
                r,
                i = this[0];
            return arguments.length
                ? ((r = ye(e)),
                    this.each(function (n) {
                        var i;
                        1 === this.nodeType &&
                        (null == (i = r ? e.call(this, n, xe(this).val()) : e)
                            ? (i = "")
                            : "number" == typeof i
                                ? (i += "")
                                : Array.isArray(i) &&
                                (i = xe.map(i, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                        ((t = xe.valHooks[this.type] || xe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                    }))
                : i
                    ? (t = xe.valHooks[i.type] || xe.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
                        ? n
                        : "string" == typeof (n = i.value)
                            ? n.replace(Et, "")
                            : null == n
                                ? ""
                                : n
                    : void 0;
        },
    }),
        xe.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = xe.find.attr(e, "value");
                        return null != t ? t : Y(xe.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            s = e.selectedIndex,
                            a = "select-one" === e.type,
                            u = a ? null : [],
                            l = a ? s + 1 : i.length;
                        for (r = s < 0 ? l : a ? s : 0; r < l; r++)
                            if (((n = i[r]).selected || r === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                                if (((t = xe(n).val()), a)) return t;
                                u.push(t);
                            }
                        return u;
                    },
                    set: function (e, t) {
                        for (var n, r, i = e.options, o = xe.makeArray(t), s = i.length; s--; ) ((r = i[s]).selected = xe.inArray(xe.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        xe.each(["radio", "checkbox"], function () {
            (xe.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = xe.inArray(xe(e).val(), t) > -1);
                },
            }),
            ve.checkOn ||
            (xe.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
            });
        }),
        (ve.focusin = "onfocusin" in e);
    var At = /^(?:focusinfocus|focusoutblur)$/,
        Ft = function (e) {
            e.stopPropagation();
        };
    xe.extend(xe.event, {
        trigger: function (t, n, r, i) {
            var o,
                s,
                a,
                u,
                l,
                c,
                d,
                f,
                p = [r || se],
                h = he.call(t, "type") ? t.type : t,
                g = he.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((s = f = a = r = r || se),
                3 !== r.nodeType &&
                8 !== r.nodeType &&
                !At.test(h + xe.event.triggered) &&
                (h.indexOf(".") > -1 && ((h = (g = h.split(".")).shift()), g.sort()),
                    (l = h.indexOf(":") < 0 && "on" + h),
                    (t = t[xe.expando] ? t : new xe.Event(h, "object" == typeof t && t)),
                    (t.isTrigger = i ? 2 : 3),
                    (t.namespace = g.join(".")),
                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (t.result = void 0),
                t.target || (t.target = r),
                    (n = null == n ? [t] : xe.makeArray(n, [t])),
                    (d = xe.event.special[h] || {}),
                i || !d.trigger || !1 !== d.trigger.apply(r, n)))
            ) {
                if (!i && !d.noBubble && !be(r)) {
                    for (u = d.delegateType || h, At.test(u + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), (a = s);
                    a === (r.ownerDocument || se) && p.push(a.defaultView || a.parentWindow || e);
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
                    (f = s),
                        (t.type = o > 1 ? u : d.bindType || h),
                    (c = (Le.get(s, "events") || {})[t.type] && Le.get(s, "handle")) && c.apply(s, n),
                    (c = l && s[l]) && c.apply && Re(s) && ((t.result = c.apply(s, n)), !1 === t.result && t.preventDefault());
                return (
                    (t.type = h),
                    i ||
                    t.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(p.pop(), n)) ||
                    !Re(r) ||
                    (l &&
                        ye(r[h]) &&
                        !be(r) &&
                        ((a = r[l]) && (r[l] = null),
                            (xe.event.triggered = h),
                        t.isPropagationStopped() && f.addEventListener(h, Ft),
                            r[h](),
                        t.isPropagationStopped() && f.removeEventListener(h, Ft),
                            (xe.event.triggered = void 0),
                        a && (r[l] = a))),
                        t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = xe.extend(new xe.Event(), n, { type: e, isSimulated: !0 });
            xe.event.trigger(r, null, t);
        },
    }),
        xe.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    xe.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return xe.event.trigger(e, t, n, !0);
            },
        }),
    ve.focusin ||
    xe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
            xe.event.simulate(t, e.target, xe.event.fix(e));
        };
        xe.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = Le.access(r, t);
                i || r.addEventListener(e, n, !0), Le.access(r, t, (i || 0) + 1);
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = Le.access(r, t) - 1;
                i ? Le.access(r, t, i) : (r.removeEventListener(e, n, !0), Le.remove(r, t));
            },
        };
    });
    var St = e.location,
        Dt = Date.now(),
        kt = /\?/;
    xe.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (n) {
            t = void 0;
        }
        return (t && !t.getElementsByTagName("parsererror").length) || xe.error("Invalid XML: " + e), t;
    };
    var jt = /\[\]$/,
        Nt = /\r?\n/g,
        qt = /^(?:submit|button|image|reset|file)$/i,
        Pt = /^(?:input|select|textarea|keygen)/i;
    (xe.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = ye(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (Array.isArray(e) || (e.jquery && !xe.isPlainObject(e)))
            xe.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) K(n, e[n], t, i);
        return r.join("&");
    }),
        xe.fn.extend({
            serialize: function () {
                return xe.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = xe.prop(this, "elements");
                    return e ? xe.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !xe(this).is(":disabled") && Pt.test(this.nodeName) && !qt.test(e) && (this.checked || !Ge.test(e));
                    })
                    .map(function (e, t) {
                        var n = xe(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                                ? xe.map(n, function (e) {
                                    return { name: t.name, value: e.replace(Nt, "\r\n") };
                                })
                                : { name: t.name, value: n.replace(Nt, "\r\n") };
                    })
                    .get();
            },
        });
    var Ot = /%20/g,
        $t = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        It = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Vt = {},
        Wt = {},
        zt = "*/".concat("*"),
        Bt = se.createElement("a");
    (Bt.href = St.href),
        xe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: St.href,
                type: "GET",
                isLocal: Lt.test(St.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": xe.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? ne(ne(e, xe.ajaxSettings), t) : ne(xe.ajaxSettings, e);
            },
            ajaxPrefilter: ee(Vt),
            ajaxTransport: ee(Wt),
            ajax: function (e, t) {
                function n(e, t, n, s) {
                    var u,
                        d,
                        f,
                        b,
                        w,
                        x = t;
                    l ||
                    ((l = !0),
                    a && _.clearTimeout(a),
                        (r = void 0),
                        (o = s || ""),
                        (C.readyState = e > 0 ? 4 : 0),
                        (u = (e >= 200 && e < 300) || 304 === e),
                    n && (b = re(p, C, n)),
                        (b = ie(p, b, C, u)),
                        u
                            ? (p.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (xe.lastModified[i] = w), (w = C.getResponseHeader("etag")) && (xe.etag[i] = w)),
                                204 === e || "HEAD" === p.type ? (x = "nocontent") : 304 === e ? (x = "notmodified") : ((x = b.state), (d = b.data), (u = !(f = b.error))))
                            : ((f = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                        (C.status = e),
                        (C.statusText = (t || x) + ""),
                        u ? m.resolveWith(h, [d, x, C]) : m.rejectWith(h, [C, x, f]),
                        C.statusCode(y),
                        (y = void 0),
                    c && g.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? d : f]),
                        v.fireWith(h, [C, x]),
                    c && (g.trigger("ajaxComplete", [C, p]), --xe.active || xe.event.trigger("ajaxStop")));
                }
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    l,
                    c,
                    d,
                    f,
                    p = xe.ajaxSetup({}, t),
                    h = p.context || p,
                    g = p.context && (h.nodeType || h.jquery) ? xe(h) : xe.event,
                    m = xe.Deferred(),
                    v = xe.Callbacks("once memory"),
                    y = p.statusCode || {},
                    b = {},
                    w = {},
                    x = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (l) {
                                if (!s) for (s = {}; (t = Rt.exec(o)); ) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                            return l ? o : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == l && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (b[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == l && (p.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (l) C.always(e[C.status]);
                                else for (t in e) y[t] = [y[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || x;
                            return r && r.abort(t), n(0, t), this;
                        },
                    };
                if (
                    (m.promise(C),
                        (p.url = ((e || p.url || St.href) + "").replace(Ht, St.protocol + "//")),
                        (p.type = t.method || t.type || p.method || p.type),
                        (p.dataTypes = (p.dataType || "*").toLowerCase().match(Ne) || [""]),
                    null == p.crossDomain)
                ) {
                    u = se.createElement("a");
                    try {
                        (u.href = p.url), (u.href = u.href), (p.crossDomain = Bt.protocol + "//" + Bt.host != u.protocol + "//" + u.host);
                    } catch (_) {
                        p.crossDomain = !0;
                    }
                }
                if ((p.data && p.processData && "string" != typeof p.data && (p.data = xe.param(p.data, p.traditional)), te(Vt, p, t, C), l)) return C;
                (c = xe.event && p.global) && 0 == xe.active++ && xe.event.trigger("ajaxStart"),
                    (p.type = p.type.toUpperCase()),
                    (p.hasContent = !It.test(p.type)),
                    (i = p.url.replace($t, "")),
                    p.hasContent
                        ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ot, "+"))
                        : ((f = p.url.slice(i.length)),
                        p.data && (p.processData || "string" == typeof p.data) && ((i += (kt.test(i) ? "&" : "?") + p.data), delete p.data),
                        !1 === p.cache && ((i = i.replace(Mt, "$1")), (f = (kt.test(i) ? "&" : "?") + "_=" + Dt++ + f)),
                            (p.url = i + f)),
                p.ifModified && (xe.lastModified[i] && C.setRequestHeader("If-Modified-Since", xe.lastModified[i]), xe.etag[i] && C.setRequestHeader("If-None-Match", xe.etag[i])),
                ((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) && C.setRequestHeader("Content-Type", p.contentType),
                    C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : p.accepts["*"]);
                for (d in p.headers) C.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, C, p) || l)) return C.abort();
                if (((x = "abort"), v.add(p.complete), C.done(p.success), C.fail(p.error), (r = te(Wt, p, t, C)))) {
                    if (((C.readyState = 1), c && g.trigger("ajaxSend", [C, p]), l)) return C;
                    p.async &&
                    p.timeout > 0 &&
                    (a = _.setTimeout(function () {
                        C.abort("timeout");
                    }, p.timeout));
                    try {
                        (l = !1), r.send(b, n);
                    } catch (_) {
                        if (l) throw _;
                        n(-1, _);
                    }
                } else n(-1, "No Transport");
                return C;
            },
            getJSON: function (e, t, n) {
                return xe.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return xe.get(e, void 0, t, "script");
            },
        }),
        xe.each(["get", "post"], function (e, t) {
            xe[t] = function (e, n, r, i) {
                return ye(n) && ((i = i || r), (r = n), (n = void 0)), xe.ajax(xe.extend({ url: e, type: t, dataType: i, data: n, success: r }, xe.isPlainObject(e) && e));
            };
        }),
        (xe._evalUrl = function (e) {
            return xe.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
        }),
        xe.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                    (ye(e) && (e = e.call(this[0])),
                        (t = xe(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                        this
                );
            },
            wrapInner: function (e) {
                return ye(e)
                    ? this.each(function (t) {
                        xe(this).wrapInner(e.call(this, t));
                    })
                    : this.each(function () {
                        var t = xe(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    });
            },
            wrap: function (e) {
                var t = ye(e);
                return this.each(function (n) {
                    xe(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            xe(this).replaceWith(this.childNodes);
                        }),
                        this
                );
            },
        }),
        (xe.expr.pseudos.hidden = function (e) {
            return !xe.expr.pseudos.visible(e);
        }),
        (xe.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (xe.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var Ut = { 0: 200, 1223: 204 },
        Xt = xe.ajaxSettings.xhr();
    (ve.cors = !!Xt && "withCredentials" in Xt),
        (ve.ajax = Xt = !!Xt),
        xe.ajaxTransport(function (e) {
            var t, n;
            if (ve.cors || (Xt && !e.crossDomain))
                return {
                    send: function (r, i) {
                        var o,
                            s = e.xhr();
                        if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (o in e.xhrFields) s[o] = e.xhrFields[o];
                        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        for (o in r) s.setRequestHeader(o, r[o]);
                        (t = function (e) {
                            return function () {
                                t &&
                                ((t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                    "abort" === e
                                        ? s.abort()
                                        : "error" === e
                                        ? "number" != typeof s.status
                                            ? i(0, "error")
                                            : i(s.status, s.statusText)
                                        : i(Ut[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                            };
                        }),
                            (s.onload = t()),
                            (n = s.onerror = s.ontimeout = t("error")),
                            void 0 !== s.onabort
                                ? (s.onabort = n)
                                : (s.onreadystatechange = function () {
                                    4 === s.readyState &&
                                    a.setTimeout(function () {
                                        t && n();
                                    });
                                }),
                            (t = t("abort"));
                        try {
                            s.send((e.hasContent && e.data) || null);
                        } catch (a) {
                            if (t) throw a;
                        }
                    },
                    abort: function () {
                        t && t();
                    },
                };
        }),
        xe.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        xe.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return xe.globalEval(e), e;
                },
            },
        }),
        xe.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        xe.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (r, i) {
                        (t = xe("<script>")
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            se.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
            }
        });
    var Zt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
    xe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Zt.pop() || xe.expando + "_" + Dt++;
            return (this[e] = !0), e;
        },
    }),
        xe.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
                o,
                s,
                a = !1 !== t.jsonp && (Gt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0])
                return (
                    (i = t.jsonpCallback = ye(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                        a ? (t[a] = t[a].replace(Gt, "$1" + i)) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                        (t.converters["script json"] = function () {
                            return s || xe.error(i + " was not called"), s[0];
                        }),
                        (t.dataTypes[0] = "json"),
                        (o = e[i]),
                        (e[i] = function () {
                            s = arguments;
                        }),
                        r.always(function () {
                            void 0 === o ? xe(e).removeProp(i) : (e[i] = o), t[i] && ((t.jsonpCallback = n.jsonpCallback), Zt.push(i)), s && ye(o) && o(s[0]), (s = o = void 0);
                        }),
                        "script"
                );
        }),
        (ve.createHTMLDocument = (function () {
            var e = se.implementation.createHTMLDocument("").body;
            return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
        })()),
        (xe.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && ((n = t), (t = !1));
            var r, i, o;
            return (
                t || (ve.createHTMLDocument ? (((r = (t = se.implementation.createHTMLDocument("")).createElement("base")).href = se.location.href), t.head.appendChild(r)) : (t = se)),
                    (i = Fe.exec(e)),
                    (o = !n && []),
                    i ? [t.createElement(i[1])] : ((i = _([e], t, o)), o && o.length && xe(o).remove(), xe.merge([], i.childNodes))
            );
        }),
        (xe.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                s = this,
                a = e.indexOf(" ");
            return (
                a > -1 && ((r = Y(e.slice(a))), (e = e.slice(0, a))),
                    ye(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                s.length > 0 &&
                xe
                    .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                    .done(function (e) {
                        (o = arguments), s.html(r ? xe("<div>").append(xe.parseHTML(e)).find(r) : e);
                    })
                    .always(
                        n &&
                        function (e, t) {
                            s.each(function () {
                                n.apply(this, o || [e.responseText, t, e]);
                            });
                        }
                    ),
                    this
            );
        }),
        xe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            xe.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        (xe.expr.pseudos.animated = function (e) {
            return xe.grep(xe.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (xe.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    l,
                    c = xe.css(e, "position"),
                    d = xe(e),
                    f = {};
                "static" === c && (e.style.position = "relative"),
                    (a = d.offset()),
                    (o = xe.css(e, "top")),
                    (u = xe.css(e, "left")),
                    (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? ((s = (r = d.position()).top), (i = r.left)) : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                ye(t) && (t = t.call(e, n, xe.extend({}, a))),
                null != t.top && (f.top = t.top - a.top + s),
                null != t.left && (f.left = t.left - a.left + i),
                    "using" in t ? t.using.call(e, f) : d.css(f);
            },
        }),
        xe.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                            xe.offset.setOffset(this, e, t);
                        });
                var t,
                    n,
                    r = this[0];
                return r ? (r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === xe.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === xe.css(e, "position"); ) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((i = xe(e).offset()).top += xe.css(e, "borderTopWidth", !0)), (i.left += xe.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - i.top - xe.css(r, "marginTop", !0), left: t.left - i.left - xe.css(r, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === xe.css(e, "position"); ) e = e.offsetParent;
                    return e || et;
                });
            },
        }),
        xe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            xe.fn[e] = function (r) {
                return Oe(
                    this,
                    function (e, r, i) {
                        var o;
                        return be(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? (o ? o[t] : e[r]) : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i));
                    },
                    e,
                    r,
                    arguments.length
                );
            };
        }),
        xe.each(["top", "left"], function (e, t) {
            xe.cssHooks[t] = $(ve.pixelPosition, function (e, n) {
                if (n) return (n = O(e, t)), ut.test(n) ? xe(e).position()[t] + "px" : n;
            });
        }),
        xe.each({ Height: "height", Width: "width" }, function (e, t) {
            xe.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                xe.fn[r] = function (i, o) {
                    var s = arguments.length && (n || "boolean" != typeof i),
                        a = n || (!0 === i || !0 === o ? "margin" : "border");
                    return Oe(
                        this,
                        function (t, n, i) {
                            var o;
                            return be(t)
                                ? 0 === r.indexOf("outer")
                                    ? t["inner" + e]
                                    : t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                    ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                    : void 0 === i
                                        ? xe.css(t, n, a)
                                        : xe.style(t, n, i, a);
                        },
                        t,
                        s ? i : void 0,
                        s
                    );
                };
            });
        }),
        xe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            xe.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        }),
        xe.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        xe.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        }),
        (xe.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), ye(e)))
                return (
                    (r = ue.call(arguments, 2)),
                        (i = function () {
                            return e.apply(t || this, r.concat(ue.call(arguments)));
                        }),
                        (i.guid = e.guid = e.guid || xe.guid++),
                        i
                );
        }),
        (xe.holdReady = function (e) {
            e ? xe.readyWait++ : xe.ready(!0);
        }),
        (xe.isArray = Array.isArray),
        (xe.parseJSON = JSON.parse),
        (xe.nodeName = o),
        (xe.isFunction = ye),
        (xe.isWindow = be),
        (xe.camelCase = h),
        (xe.type = r),
        (xe.now = Date.now),
        (xe.isNumeric = function (e) {
            var t = xe.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
    "function" == typeof define &&
    define.amd &&
    define("jquery", [], function () {
        return xe;
    });
    var Yt = e.jQuery,
        Qt = e.$;
    return (
        (xe.noConflict = function (t) {
            return e.$ === xe && (e.$ = Qt), t && e.jQuery === xe && (e.jQuery = Yt), xe;
        }),
        t || (e.jQuery = e.$ = xe),
            xe
    );
});
var _slice = Array.prototype.slice,
    _slicedToArray = (function () {
        function e(e, t) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
            } catch (u) {
                (i = !0), (o = u);
            } finally {
                try {
                    !r && a["return"] && a["return"]();
                } finally {
                    if (i) throw o;
                }
            }
            return n;
        }
        return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    })(),
    _extends =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t(require("jquery"))) : "function" == typeof define && define.amd ? define(["jquery"], t) : (e.parsley = t(e.jQuery));
})(this, function (e) {
    "use strict";
    function t(e, t) {
        return (
            e.parsleyAdaptedCallback ||
            (e.parsleyAdaptedCallback = function () {
                var n = Array.prototype.slice.call(arguments, 0);
                n.unshift(this), e.apply(t || N, n);
            }),
                e.parsleyAdaptedCallback
        );
    }
    function n(e) {
        return 0 === e.lastIndexOf(P, 0) ? e.substr(P.length) : e;
    }
    function r() {
        var t = this,
            n = window || global;
        _extends(this, {
            isNativeEvent: function (e) {
                return e.originalEvent && e.originalEvent.isTrusted !== !1;
            },
            fakeInputEvent: function (n) {
                t.isNativeEvent(n) && e(n.target).trigger("input");
            },
            misbehaves: function (n) {
                t.isNativeEvent(n) && (t.behavesOk(n), e(document).on("change.inputevent", n.data.selector, t.fakeInputEvent), t.fakeInputEvent(n));
            },
            behavesOk: function (n) {
                t.isNativeEvent(n) && e(document).off("input.inputevent", n.data.selector, t.behavesOk).off("change.inputevent", n.data.selector, t.misbehaves);
            },
            install: function () {
                if (!n.inputEventPatched) {
                    n.inputEventPatched = "0.0.3";
                    for (var r = ["select", 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]'], i = 0; i < r.length; i++) {
                        var o = r[i];
                        e(document).on("input.inputevent", o, { selector: o }, t.behavesOk).on("change.inputevent", o, { selector: o }, t.misbehaves);
                    }
                }
            },
            uninstall: function () {
                delete n.inputEventPatched, e(document).off(".inputevent");
            },
        });
    }
    var i = 1,
        o = {},
        s = {
            attr: function (e, t, n) {
                var r,
                    i,
                    o,
                    s = new RegExp("^" + t, "i");
                if ("undefined" == typeof n) n = {};
                else for (r in n) n.hasOwnProperty(r) && delete n[r];
                if (!e) return n;
                for (o = e.attributes, r = o.length; r--; ) (i = o[r]), i && i.specified && s.test(i.name) && (n[this.camelize(i.name.slice(t.length))] = this.deserializeValue(i.value));
                return n;
            },
            checkAttr: function (e, t, n) {
                return e.hasAttribute(t + n);
            },
            setAttr: function (e, t, n, r) {
                e.setAttribute(this.dasherize(t + n), String(r));
            },
            getType: function (e) {
                return e.getAttribute("type") || "text";
            },
            generateID: function () {
                return "" + i++;
            },
            deserializeValue: function (e) {
                var t;
                try {
                    return e ? "true" == e || ("false" != e && ("null" == e ? null : isNaN((t = Number(e))) ? (/^[\[\{]/.test(e) ? JSON.parse(e) : e) : t)) : e;
                } catch (n) {
                    return e;
                }
            },
            camelize: function (e) {
                return e.replace(/-+(.)?/g, function (e, t) {
                    return t ? t.toUpperCase() : "";
                });
            },
            dasherize: function (e) {
                return e
                    .replace(/::/g, "/")
                    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
                    .replace(/([a-z\d])([A-Z])/g, "$1_$2")
                    .replace(/_/g, "-")
                    .toLowerCase();
            },
            warn: function () {
                var e;
                window.console && "function" == typeof window.console.warn && (e = window.console).warn.apply(e, arguments);
            },
            warnOnce: function (e) {
                o[e] || ((o[e] = !0), this.warn.apply(this, arguments));
            },
            _resetWarnings: function () {
                o = {};
            },
            trimString: function (e) {
                return e.replace(/^\s+|\s+$/g, "");
            },
            parse: {
                date: function M(e) {
                    var t = e.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
                    if (!t) return null;
                    var n = t.map(function (e) {
                            return parseInt(e, 10);
                        }),
                        r = _slicedToArray(n, 4),
                        i = (r[0], r[1]),
                        o = r[2],
                        s = r[3],
                        M = new Date(i, o - 1, s);
                    return M.getFullYear() !== i || M.getMonth() + 1 !== o || M.getDate() !== s ? null : M;
                },
                string: function (e) {
                    return e;
                },
                integer: function (e) {
                    return isNaN(e) ? null : parseInt(e, 10);
                },
                number: function (e) {
                    if (isNaN(e)) throw null;
                    return parseFloat(e);
                },
                boolean: function (e) {
                    return !/^\s*false\s*$/i.test(e);
                },
                object: function (e) {
                    return s.deserializeValue(e);
                },
                regexp: function (e) {
                    var t = "";
                    return /^\/.*\/(?:[gimy]*)$/.test(e) ? ((t = e.replace(/.*\/([gimy]*)$/, "$1")), (e = e.replace(new RegExp("^/(.*?)/" + t + "$"), "$1"))) : (e = "^" + e + "$"), new RegExp(e, t);
                },
            },
            parseRequirement: function (e, t) {
                var n = this.parse[e || "string"];
                if (!n) throw 'Unknown requirement specification: "' + e + '"';
                var r = n(t);
                if (null === r) throw "Requirement is not a " + e + ': "' + t + '"';
                return r;
            },
            namespaceEvents: function (t, n) {
                return (
                    (t = this.trimString(t || "").split(/\s+/)),
                        t[0]
                            ? e
                                .map(t, function (e) {
                                    return e + "." + n;
                                })
                                .join(" ")
                            : ""
                );
            },
            difference: function (t, n) {
                var r = [];
                return (
                    e.each(t, function (e, t) {
                        n.indexOf(t) == -1 && r.push(t);
                    }),
                        r
                );
            },
            all: function (t) {
                return e.when.apply(e, _toConsumableArray(t).concat([42, 42]));
            },
            objectCreate:
                Object.create ||
                (function () {
                    var e = function () {};
                    return function (t) {
                        if (arguments.length > 1) throw Error("Second argument not supported");
                        if ("object" != typeof t) throw TypeError("Argument must be an object");
                        e.prototype = t;
                        var n = new e();
                        return (e.prototype = null), n;
                    };
                })(),
            _SubmitSelector: 'input[type="submit"], button:submit',
        },
        a = {
            namespace: "data-parsley-",
            inputs: "input, textarea, select",
            excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
            priorityEnabled: !0,
            multiple: null,
            group: null,
            uiEnabled: !0,
            validationThreshold: 3,
            focus: "first",
            trigger: !1,
            triggerAfterFailure: "input",
            errorClass: "parsley-error",
            successClass: "parsley-success",
            classHandler: function (e) {},
            errorsContainer: function (e) {},
            errorsWrapper: '<ul class="parsley-errors-list"></ul>',
            errorTemplate: "<li></li>",
        },
        u = function () {
            this.__id__ = s.generateID();
        };
    u.prototype = {
        asyncSupport: !0,
        _pipeAccordingToValidationResult: function () {
            var t = this,
                n = function () {
                    var n = e.Deferred();
                    return !0 !== t.validationResult && n.reject(), n.resolve().promise();
                };
            return [n, n];
        },
        actualizeOptions: function () {
            return s.attr(this.element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this;
        },
        _resetOptions: function (e) {
            (this.domOptions = s.objectCreate(this.parent.options)), (this.options = s.objectCreate(this.domOptions));
            for (var t in e) e.hasOwnProperty(t) && (this.options[t] = e[t]);
            this.actualizeOptions();
        },
        _listeners: null,
        on: function (e, t) {
            this._listeners = this._listeners || {};
            var n = (this._listeners[e] = this._listeners[e] || []);
            return n.push(t), this;
        },
        subscribe: function (t, n) {
            e.listenTo(this, t.toLowerCase(), n);
        },
        off: function (e, t) {
            var n = this._listeners && this._listeners[e];
            if (n)
                if (t) for (var r = n.length; r--; ) n[r] === t && n.splice(r, 1);
                else delete this._listeners[e];
            return this;
        },
        unsubscribe: function (t, n) {
            e.unsubscribeTo(this, t.toLowerCase());
        },
        trigger: function (e, t, n) {
            t = t || this;
            var r,
                i = this._listeners && this._listeners[e];
            if (i) for (var o = i.length; o--; ) if (((r = i[o].call(t, t, n)), r === !1)) return r;
            return !this.parent || this.parent.trigger(e, t, n);
        },
        asyncIsValid: function (e, t) {
            return s.warnOnce("asyncIsValid is deprecated; please use whenValid instead"), this.whenValid({ group: e, force: t });
        },
        _findRelated: function () {
            return this.options.multiple ? e(this.parent.element.querySelectorAll("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]')) : this.$element;
        },
    };
    var l = function (e, t) {
            var n = e.match(/^\s*\[(.*)\]\s*$/);
            if (!n) throw 'Requirement is not an array: "' + e + '"';
            var r = n[1].split(",").map(s.trimString);
            if (r.length !== t) throw "Requirement has " + r.length + " values when " + t + " are needed";
            return r;
        },
        c = function (e, t, n) {
            var r = null,
                i = {};
            for (var o in e)
                if (o) {
                    var a = n(o);
                    "string" == typeof a && (a = s.parseRequirement(e[o], a)), (i[o] = a);
                } else r = s.parseRequirement(e[o], t);
            return [r, i];
        },
        d = function (t) {
            e.extend(!0, this, t);
        };
    d.prototype = {
        validate: function (e, t) {
            if (this.fn) return arguments.length > 3 && (t = [].slice.call(arguments, 1, -1)), this.fn(e, t);
            if (Array.isArray(e)) {
                if (!this.validateMultiple) throw "Validator `" + this.name + "` does not handle multiple values";
                return this.validateMultiple.apply(this, arguments);
            }
            var n = arguments[arguments.length - 1];
            if (this.validateDate && n._isDateInput()) return (arguments[0] = s.parse.date(arguments[0])), null !== arguments[0] && this.validateDate.apply(this, arguments);
            if (this.validateNumber) return !isNaN(e) && ((arguments[0] = parseFloat(arguments[0])), this.validateNumber.apply(this, arguments));
            if (this.validateString) return this.validateString.apply(this, arguments);
            throw "Validator `" + this.name + "` only handles multiple values";
        },
        parseRequirements: function (t, n) {
            if ("string" != typeof t) return Array.isArray(t) ? t : [t];
            var r = this.requirementType;
            if (Array.isArray(r)) {
                for (var i = l(t, r.length), o = 0; o < i.length; o++) i[o] = s.parseRequirement(r[o], i[o]);
                return i;
            }
            return e.isPlainObject(r) ? c(r, t, n) : [s.parseRequirement(r, t)];
        },
        requirementType: "string",
        priority: 2,
    };
    var f = function (e, t) {
            (this.__class__ = "ValidatorRegistry"), (this.locale = "en"), this.init(e || {}, t || {});
        },
        p = {
            email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/,
            number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
            integer: /^-?\d+$/,
            digits: /^\d+$/,
            alphanum: /^\w+$/i,
            date: {
                test: function (e) {
                    return null !== s.parse.date(e);
                },
            },
            url: new RegExp(
                "^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$"
            ),
        };
    p.range = p.number;
    var h = function (e) {
            var t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
        },
        g = function (e, t) {
            return t.map(s.parse[e]);
        },
        m = function (e, t) {
            return function (n) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                return i.pop(), t.apply(void 0, [n].concat(_toConsumableArray(g(e, i))));
            };
        },
        v = function (e) {
            return { validateDate: m("date", e), validateNumber: m("number", e), requirementType: e.length <= 2 ? "string" : ["string", "string"], priority: 30 };
        };
    f.prototype = {
        init: function (e, t) {
            (this.catalog = t), (this.validators = _extends({}, this.validators));
            for (var n in e) this.addValidator(n, e[n].fn, e[n].priority);
            window.Parsley.trigger("parsley:validator:init");
        },
        setLocale: function (e) {
            if ("undefined" == typeof this.catalog[e]) throw new Error(e + " is not available in the catalog");
            return (this.locale = e), this;
        },
        addCatalog: function (e, t, n) {
            return "object" == typeof t && (this.catalog[e] = t), !0 === n ? this.setLocale(e) : this;
        },
        addMessage: function (e, t, n) {
            return "undefined" == typeof this.catalog[e] && (this.catalog[e] = {}), (this.catalog[e][t] = n), this;
        },
        addMessages: function (e, t) {
            for (var n in t) this.addMessage(e, n, t[n]);
            return this;
        },
        addValidator: function (e, t, n) {
            if (this.validators[e]) s.warn('Validator "' + e + '" is already defined.');
            else if (a.hasOwnProperty(e)) return void s.warn('"' + e + '" is a restricted keyword and is not a valid validator name.');
            return this._setValidator.apply(this, arguments);
        },
        hasValidator: function (e) {
            return !!this.validators[e];
        },
        updateValidator: function (e, t, n) {
            return this.validators[e] ? this._setValidator.apply(this, arguments) : (s.warn('Validator "' + e + '" is not already defined.'), this.addValidator.apply(this, arguments));
        },
        removeValidator: function (e) {
            return this.validators[e] || s.warn('Validator "' + e + '" is not defined.'), delete this.validators[e], this;
        },
        _setValidator: function (e, t, n) {
            "object" != typeof t && (t = { fn: t, priority: n }), t.validate || (t = new d(t)), (this.validators[e] = t);
            for (var r in t.messages || {}) this.addMessage(r, e, t.messages[r]);
            return this;
        },
        getErrorMessage: function (e) {
            var t;
            if ("type" === e.name) {
                var n = this.catalog[this.locale][e.name] || {};
                t = n[e.requirements];
            } else t = this.formatMessage(this.catalog[this.locale][e.name], e.requirements);
            return t || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage;
        },
        formatMessage: function (e, t) {
            if ("object" == typeof t) {
                for (var n in t) e = this.formatMessage(e, t[n]);
                return e;
            }
            return "string" == typeof e ? e.replace(/%s/i, t) : "";
        },
        validators: {
            notblank: {
                validateString: function (e) {
                    return /\S/.test(e);
                },
                priority: 2,
            },
            required: {
                validateMultiple: function (e) {
                    return e.length > 0;
                },
                validateString: function (e) {
                    return /\S/.test(e);
                },
                priority: 512,
            },
            type: {
                validateString: function (e, t) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        r = n.step,
                        i = void 0 === r ? "any" : r,
                        o = n.base,
                        s = void 0 === o ? 0 : o,
                        a = p[t];
                    if (!a) throw new Error("validator type `" + t + "` is not supported");
                    if (!a.test(e)) return !1;
                    if ("number" === t && !/^any$/i.test(i || "")) {
                        var u = Number(e),
                            l = Math.max(h(i), h(s));
                        if (h(u) > l) return !1;
                        var c = function (e) {
                            return Math.round(e * Math.pow(10, l));
                        };
                        if ((c(u) - c(s)) % c(i) != 0) return !1;
                    }
                    return !0;
                },
                requirementType: { "": "string", step: "string", base: "number" },
                priority: 256,
            },
            pattern: {
                validateString: function (e, t) {
                    return t.test(e);
                },
                requirementType: "regexp",
                priority: 64,
            },
            minlength: {
                validateString: function (e, t) {
                    return e.length >= t;
                },
                requirementType: "integer",
                priority: 30,
            },
            maxlength: {
                validateString: function (e, t) {
                    return e.length <= t;
                },
                requirementType: "integer",
                priority: 30,
            },
            length: {
                validateString: function (e, t, n) {
                    return e.length >= t && e.length <= n;
                },
                requirementType: ["integer", "integer"],
                priority: 30,
            },
            mincheck: {
                validateMultiple: function (e, t) {
                    return e.length >= t;
                },
                requirementType: "integer",
                priority: 30,
            },
            maxcheck: {
                validateMultiple: function (e, t) {
                    return e.length <= t;
                },
                requirementType: "integer",
                priority: 30,
            },
            check: {
                validateMultiple: function (e, t, n) {
                    return e.length >= t && e.length <= n;
                },
                requirementType: ["integer", "integer"],
                priority: 30,
            },
            min: v(function (e, t) {
                return e >= t;
            }),
            max: v(function (e, t) {
                return e <= t;
            }),
            range: v(function (e, t, n) {
                return e >= t && e <= n;
            }),
            equalto: {
                validateString: function (t, n) {
                    var r = e(n);
                    return r.length ? t === r.val() : t === n;
                },
                priority: 256,
            },
        },
    };
    var y = {},
        b = function R(e, t, n) {
            for (var r = [], i = [], o = 0; o < e.length; o++) {
                for (var s = !1, a = 0; a < t.length; a++)
                    if (e[o].assert.name === t[a].assert.name) {
                        s = !0;
                        break;
                    }
                s ? i.push(e[o]) : r.push(e[o]);
            }
            return { kept: i, added: r, removed: n ? [] : R(t, e, !0).added };
        };
    (y.Form = {
        _actualizeTriggers: function () {
            var e = this;
            this.$element.on("submit.Parsley", function (t) {
                e.onSubmitValidate(t);
            }),
                this.$element.on("click.Parsley", s._SubmitSelector, function (t) {
                    e.onSubmitButton(t);
                }),
            !1 !== this.options.uiEnabled && this.element.setAttribute("novalidate", "");
        },
        focus: function () {
            if (((this._focusedField = null), !0 === this.validationResult || "none" === this.options.focus)) return null;
            for (var e = 0; e < this.fields.length; e++) {
                var t = this.fields[e];
                if (!0 !== t.validationResult && t.validationResult.length > 0 && "undefined" == typeof t.options.noFocus && ((this._focusedField = t.$element), "first" === this.options.focus)) break;
            }
            return null === this._focusedField ? null : this._focusedField.focus();
        },
        _destroyUI: function () {
            this.$element.off(".Parsley");
        },
    }),
        (y.Field = {
            _reflowUI: function () {
                if ((this._buildUI(), this._ui)) {
                    var e = b(this.validationResult, this._ui.lastValidationResult);
                    (this._ui.lastValidationResult = this.validationResult),
                        this._manageStatusClass(),
                        this._manageErrorsMessages(e),
                        this._actualizeTriggers(),
                    (!e.kept.length && !e.added.length) || this._failedOnce || ((this._failedOnce = !0), this._actualizeTriggers());
                }
            },
            getErrorsMessages: function () {
                if (!0 === this.validationResult) return [];
                for (var e = [], t = 0; t < this.validationResult.length; t++) e.push(this.validationResult[t].errorMessage || this._getErrorMessage(this.validationResult[t].assert));
                return e;
            },
            addError: function (e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = t.message,
                    r = t.assert,
                    i = t.updateClass,
                    o = void 0 === i || i;
                this._buildUI(), this._addError(e, { message: n, assert: r }), o && this._errorClass();
            },
            updateError: function (e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = t.message,
                    r = t.assert,
                    i = t.updateClass,
                    o = void 0 === i || i;
                this._buildUI(), this._updateError(e, { message: n, assert: r }), o && this._errorClass();
            },
            removeError: function (e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = t.updateClass,
                    r = void 0 === n || n;
                this._buildUI(), this._removeError(e), r && this._manageStatusClass();
            },
            _manageStatusClass: function () {
                this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : this.validationResult.length > 0 ? this._errorClass() : this._resetClass();
            },
            _manageErrorsMessages: function (t) {
                if ("undefined" == typeof this.options.errorsMessagesDisabled) {
                    if ("undefined" != typeof this.options.errorMessage)
                        return t.added.length || t.kept.length
                            ? (this._insertErrorWrapper(),
                            0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(e(this.options.errorTemplate).addClass("parsley-custom-error-message")),
                                this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage))
                            : this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                    for (var n = 0; n < t.removed.length; n++) this._removeError(t.removed[n].assert.name);
                    for (n = 0; n < t.added.length; n++) this._addError(t.added[n].assert.name, { message: t.added[n].errorMessage, assert: t.added[n].assert });
                    for (n = 0; n < t.kept.length; n++) this._updateError(t.kept[n].assert.name, { message: t.kept[n].errorMessage, assert: t.kept[n].assert });
                }
            },
            _addError: function (t, n) {
                var r = n.message,
                    i = n.assert;
                this._insertErrorWrapper(),
                    this._ui.$errorClassHandler.attr("aria-describedby", this._ui.errorsWrapperId),
                    this._ui.$errorsWrapper.addClass("filled").append(
                        e(this.options.errorTemplate)
                            .addClass("parsley-" + t)
                            .html(r || this._getErrorMessage(i))
                    );
            },
            _updateError: function (e, t) {
                var n = t.message,
                    r = t.assert;
                this._ui.$errorsWrapper
                    .addClass("filled")
                    .find(".parsley-" + e)
                    .html(n || this._getErrorMessage(r));
            },
            _removeError: function (e) {
                this._ui.$errorClassHandler.removeAttr("aria-describedby"),
                    this._ui.$errorsWrapper
                        .removeClass("filled")
                        .find(".parsley-" + e)
                        .remove();
            },
            _getErrorMessage: function (e) {
                var t = e.name + "Message";
                return "undefined" != typeof this.options[t] ? window.Parsley.formatMessage(this.options[t], e.requirements) : window.Parsley.getErrorMessage(e);
            },
            _buildUI: function () {
                if (!this._ui && !1 !== this.options.uiEnabled) {
                    var t = {};
                    this.element.setAttribute(this.options.namespace + "id", this.__id__),
                        (t.$errorClassHandler = this._manageClassHandler()),
                        (t.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__)),
                        (t.$errorsWrapper = e(this.options.errorsWrapper).attr("id", t.errorsWrapperId)),
                        (t.lastValidationResult = []),
                        (t.validationInformationVisible = !1),
                        (this._ui = t);
                }
            },
            _manageClassHandler: function () {
                if ("string" == typeof this.options.classHandler && e(this.options.classHandler).length) return e(this.options.classHandler);
                var t = this.options.classHandler;
                if (("string" == typeof this.options.classHandler && "function" == typeof window[this.options.classHandler] && (t = window[this.options.classHandler]), "function" == typeof t)) {
                    var n = t.call(this, this);
                    if ("undefined" != typeof n && n.length) return n;
                } else {
                    if ("object" == typeof t && t instanceof jQuery && t.length) return t;
                    t && s.warn("The class handler `" + t + "` does not exist in DOM nor as a global JS function");
                }
                return this._inputHolder();
            },
            _inputHolder: function () {
                return this.options.multiple && "SELECT" !== this.element.nodeName ? this.$element.parent() : this.$element;
            },
            _insertErrorWrapper: function () {
                var t = this.options.errorsContainer;
                if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();
                if ("string" == typeof t) {
                    if (e(t).length) return e(t).append(this._ui.$errorsWrapper);
                    "function" == typeof window[t] ? (t = window[t]) : s.warn("The errors container `" + t + "` does not exist in DOM nor as a global JS function");
                }
                return "function" == typeof t && (t = t.call(this, this)), "object" == typeof t && t.length ? t.append(this._ui.$errorsWrapper) : this._inputHolder().after(this._ui.$errorsWrapper);
            },
            _actualizeTriggers: function () {
                var e,
                    t = this,
                    n = this._findRelated();
                n.off(".Parsley"),
                    this._failedOnce
                        ? n.on(s.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function () {
                            t._validateIfNeeded();
                        })
                        : (e = s.namespaceEvents(this.options.trigger, "Parsley")) &&
                        n.on(e, function (e) {
                            t._validateIfNeeded(e);
                        });
            },
            _validateIfNeeded: function (e) {
                var t = this;
                (e && /key|input/.test(e.type) && (!this._ui || !this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold) ||
                (this.options.debounce
                    ? (window.clearTimeout(this._debounced),
                        (this._debounced = window.setTimeout(function () {
                            return t.validate();
                        }, this.options.debounce)))
                    : this.validate());
            },
            _resetUI: function () {
                (this._failedOnce = !1),
                    this._actualizeTriggers(),
                "undefined" != typeof this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(), (this._ui.lastValidationResult = []), (this._ui.validationInformationVisible = !1));
            },
            _destroyUI: function () {
                this._resetUI(), "undefined" != typeof this._ui && this._ui.$errorsWrapper.remove(), delete this._ui;
            },
            _successClass: function () {
                (this._ui.validationInformationVisible = !0), this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass);
            },
            _errorClass: function () {
                (this._ui.validationInformationVisible = !0), this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass);
            },
            _resetClass: function () {
                this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass);
            },
        });
    var w = function (t, n, r) {
            (this.__class__ = "Form"), (this.element = t), (this.$element = e(t)), (this.domOptions = n), (this.options = r), (this.parent = window.Parsley), (this.fields = []), (this.validationResult = null);
        },
        x = { pending: null, resolved: !0, rejected: !1 };
    w.prototype = {
        onSubmitValidate: function (e) {
            var t = this;
            if (!0 !== e.parsley) {
                var n = this._submitSource || this.$element.find(s._SubmitSelector)[0];
                if (((this._submitSource = null), this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0), !n || null === n.getAttribute("formnovalidate"))) {
                    window.Parsley._remoteCache = {};
                    var r = this.whenValidate({ event: e });
                    ("resolved" === r.state() && !1 !== this._trigger("submit")) ||
                    (e.stopImmediatePropagation(),
                        e.preventDefault(),
                    "pending" === r.state() &&
                    r.done(function () {
                        t._submit(n);
                    }));
                }
            }
        },
        onSubmitButton: function (e) {
            this._submitSource = e.currentTarget;
        },
        _submit: function (t) {
            if (!1 !== this._trigger("submit")) {
                if (t) {
                    var n = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1);
                    0 === n.length && (n = e('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)), n.attr({ name: t.getAttribute("name"), value: t.getAttribute("value") });
                }
                this.$element.trigger(_extends(e.Event("submit"), { parsley: !0 }));
            }
        },
        validate: function (t) {
            if (arguments.length >= 1 && !e.isPlainObject(t)) {
                s.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
                var n = _slice.call(arguments),
                    r = n[0],
                    i = n[1],
                    o = n[2];
                t = { group: r, force: i, event: o };
            }
            return x[this.whenValidate(t).state()];
        },
        whenValidate: function () {
            var t,
                n = this,
                r = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                i = r.group,
                o = r.force,
                a = r.event;
            (this.submitEvent = a),
            a &&
            (this.submitEvent = _extends({}, a, {
                preventDefault: function () {
                    s.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"), (n.validationResult = !1);
                },
            })),
                (this.validationResult = !0),
                this._trigger("validate"),
                this._refreshFields();
            var u = this._withoutReactualizingFormOptions(function () {
                return e.map(n.fields, function (e) {
                    return e.whenValidate({ force: o, group: i });
                });
            });
            return (t = s
                .all(u)
                .done(function () {
                    n._trigger("success");
                })
                .fail(function () {
                    (n.validationResult = !1), n.focus(), n._trigger("error");
                })
                .always(function () {
                    n._trigger("validated");
                })).pipe.apply(t, _toConsumableArray(this._pipeAccordingToValidationResult()));
        },
        isValid: function (t) {
            if (arguments.length >= 1 && !e.isPlainObject(t)) {
                s.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
                var n = _slice.call(arguments),
                    r = n[0],
                    i = n[1];
                t = { group: r, force: i };
            }
            return x[this.whenValid(t).state()];
        },
        whenValid: function () {
            var t = this,
                n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                r = n.group,
                i = n.force;
            this._refreshFields();
            var o = this._withoutReactualizingFormOptions(function () {
                return e.map(t.fields, function (e) {
                    return e.whenValid({ group: r, force: i });
                });
            });
            return s.all(o);
        },
        refresh: function () {
            return this._refreshFields(), this;
        },
        reset: function () {
            for (var e = 0; e < this.fields.length; e++) this.fields[e].reset();
            this._trigger("reset");
        },
        destroy: function () {
            this._destroyUI();
            for (var e = 0; e < this.fields.length; e++) this.fields[e].destroy();
            this.$element.removeData("Parsley"), this._trigger("destroy");
        },
        _refreshFields: function () {
            return this.actualizeOptions()._bindFields();
        },
        _bindFields: function () {
            var t = this,
                n = this.fields;
            return (
                (this.fields = []),
                    (this.fieldsMappedById = {}),
                    this._withoutReactualizingFormOptions(function () {
                        t.$element
                            .find(t.options.inputs)
                            .not(t.options.excluded)
                            .each(function (e, n) {
                                var r = new window.Parsley.Factory(n, {}, t);
                                if (("Field" === r.__class__ || "FieldMultiple" === r.__class__) && !0 !== r.options.excluded) {
                                    var i = r.__class__ + "-" + r.__id__;
                                    "undefined" == typeof t.fieldsMappedById[i] && ((t.fieldsMappedById[i] = r), t.fields.push(r));
                                }
                            }),
                            e.each(s.difference(n, t.fields), function (e, t) {
                                t.reset();
                            });
                    }),
                    this
            );
        },
        _withoutReactualizingFormOptions: function (e) {
            var t = this.actualizeOptions;
            this.actualizeOptions = function () {
                return this;
            };
            var n = e();
            return (this.actualizeOptions = t), n;
        },
        _trigger: function (e) {
            return this.trigger("form:" + e);
        },
    };
    var C = function (e, t, n, r, i) {
            var o = window.Parsley._validatorRegistry.validators[t],
                s = new d(o);
            (r = r || e.options[t + "Priority"] || s.priority), (i = !0 === i), _extends(this, { validator: s, name: t, requirements: n, priority: r, isDomConstraint: i }), this._parseRequirements(e.options);
        },
        _ = function (e) {
            var t = e[0].toUpperCase();
            return t + e.slice(1);
        };
    C.prototype = {
        validate: function (e, t) {
            var n;
            return (n = this.validator).validate.apply(n, [e].concat(_toConsumableArray(this.requirementList), [t]));
        },
        _parseRequirements: function (e) {
            var t = this;
            this.requirementList = this.validator.parseRequirements(this.requirements, function (n) {
                return e[t.name + _(n)];
            });
        },
    };
    var T = function (t, n, r, i) {
            (this.__class__ = "Field"),
                (this.element = t),
                (this.$element = e(t)),
            "undefined" != typeof i && (this.parent = i),
                (this.options = r),
                (this.domOptions = n),
                (this.constraints = []),
                (this.constraintsByName = {}),
                (this.validationResult = !0),
                this._bindConstraints();
        },
        E = { pending: null, resolved: !0, rejected: !1 };
    T.prototype = {
        validate: function (t) {
            arguments.length >= 1 && !e.isPlainObject(t) && (s.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."), (t = { options: t }));
            var n = this.whenValidate(t);
            if (!n) return !0;
            switch (n.state()) {
                case "pending":
                    return null;
                case "resolved":
                    return !0;
                case "rejected":
                    return this.validationResult;
            }
        },
        whenValidate: function () {
            var e,
                t = this,
                n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                r = n.force,
                i = n.group;
            if ((this.refresh(), !i || this._isInGroup(i)))
                return (
                    (this.value = this.getValue()),
                        this._trigger("validate"),
                        (e = this.whenValid({ force: r, value: this.value, _refreshed: !0 })
                            .always(function () {
                                t._reflowUI();
                            })
                            .done(function () {
                                t._trigger("success");
                            })
                            .fail(function () {
                                t._trigger("error");
                            })
                            .always(function () {
                                t._trigger("validated");
                            })).pipe.apply(e, _toConsumableArray(this._pipeAccordingToValidationResult()))
                );
        },
        hasConstraints: function () {
            return 0 !== this.constraints.length;
        },
        needsValidation: function (e) {
            return "undefined" == typeof e && (e = this.getValue()), !(!e.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty);
        },
        _isInGroup: function (t) {
            return Array.isArray(this.options.group) ? -1 !== e.inArray(t, this.options.group) : this.options.group === t;
        },
        isValid: function (t) {
            if (arguments.length >= 1 && !e.isPlainObject(t)) {
                s.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
                var n = _slice.call(arguments),
                    r = n[0],
                    i = n[1];
                t = { force: r, value: i };
            }
            var o = this.whenValid(t);
            return !o || E[o.state()];
        },
        whenValid: function () {
            var t = this,
                n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                r = n.force,
                i = void 0 !== r && r,
                o = n.value,
                a = n.group,
                u = n._refreshed;
            if ((u || this.refresh(), !a || this._isInGroup(a))) {
                if (((this.validationResult = !0), !this.hasConstraints())) return e.when();
                if ((("undefined" != typeof o && null !== o) || (o = this.getValue()), !this.needsValidation(o) && !0 !== i)) return e.when();
                var l = this._getGroupedConstraints(),
                    c = [];
                return (
                    e.each(l, function (n, r) {
                        var i = s.all(
                            e.map(r, function (e) {
                                return t._validateConstraint(o, e);
                            })
                        );
                        if ((c.push(i), "rejected" === i.state())) return !1;
                    }),
                        s.all(c)
                );
            }
        },
        _validateConstraint: function (t, n) {
            var r = this,
                i = n.validate(t, this);
            return (
                !1 === i && (i = e.Deferred().reject()),
                    s.all([i]).fail(function (e) {
                        r.validationResult instanceof Array || (r.validationResult = []), r.validationResult.push({ assert: n, errorMessage: "string" == typeof e && e });
                    })
            );
        },
        getValue: function () {
            var e;
            return (
                (e = "function" == typeof this.options.value ? this.options.value(this) : "undefined" != typeof this.options.value ? this.options.value : this.$element.val()),
                    "undefined" == typeof e || null === e ? "" : this._handleWhitespace(e)
            );
        },
        reset: function () {
            return this._resetUI(), this._trigger("reset");
        },
        destroy: function () {
            this._destroyUI(), this.$element.removeData("Parsley"), this.$element.removeData("FieldMultiple"), this._trigger("destroy");
        },
        refresh: function () {
            return this._refreshConstraints(), this;
        },
        _refreshConstraints: function () {
            return this.actualizeOptions()._bindConstraints();
        },
        refreshConstraints: function () {
            return s.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh"), this.refresh();
        },
        addConstraint: function (e, t, n, r) {
            if (window.Parsley._validatorRegistry.validators[e]) {
                var i = new C(this, e, t, n, r);
                "undefined" !== this.constraintsByName[i.name] && this.removeConstraint(i.name), this.constraints.push(i), (this.constraintsByName[i.name] = i);
            }
            return this;
        },
        removeConstraint: function (e) {
            for (var t = 0; t < this.constraints.length; t++)
                if (e === this.constraints[t].name) {
                    this.constraints.splice(t, 1);
                    break;
                }
            return delete this.constraintsByName[e], this;
        },
        updateConstraint: function (e, t, n) {
            return this.removeConstraint(e).addConstraint(e, t, n);
        },
        _bindConstraints: function () {
            for (var e = [], t = {}, n = 0; n < this.constraints.length; n++) !1 === this.constraints[n].isDomConstraint && (e.push(this.constraints[n]), (t[this.constraints[n].name] = this.constraints[n]));
            (this.constraints = e), (this.constraintsByName = t);
            for (var r in this.options) this.addConstraint(r, this.options[r], void 0, !0);
            return this._bindHtml5Constraints();
        },
        _bindHtml5Constraints: function () {
            null !== this.element.getAttribute("required") && this.addConstraint("required", !0, void 0, !0), null !== this.element.getAttribute("pattern") && this.addConstraint("pattern", this.element.getAttribute("pattern"), void 0, !0);
            var e = this.element.getAttribute("min"),
                t = this.element.getAttribute("max");
            null !== e && null !== t ? this.addConstraint("range", [e, t], void 0, !0) : null !== e ? this.addConstraint("min", e, void 0, !0) : null !== t && this.addConstraint("max", t, void 0, !0),
                null !== this.element.getAttribute("minlength") && null !== this.element.getAttribute("maxlength")
                    ? this.addConstraint("length", [this.element.getAttribute("minlength"), this.element.getAttribute("maxlength")], void 0, !0)
                    : null !== this.element.getAttribute("minlength")
                    ? this.addConstraint("minlength", this.element.getAttribute("minlength"), void 0, !0)
                    : null !== this.element.getAttribute("maxlength") && this.addConstraint("maxlength", this.element.getAttribute("maxlength"), void 0, !0);
            var n = s.getType(this.element);
            return "number" === n
                ? this.addConstraint("type", ["number", { step: this.element.getAttribute("step") || "1", base: e || this.element.getAttribute("value") }], void 0, !0)
                : /^(email|url|range|date)$/i.test(n)
                    ? this.addConstraint("type", n, void 0, !0)
                    : this;
        },
        _isRequired: function () {
            return "undefined" != typeof this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements;
        },
        _trigger: function (e) {
            return this.trigger("field:" + e);
        },
        _handleWhitespace: function (e) {
            return (
                !0 === this.options.trimValue && s.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'),
                "squish" === this.options.whitespace && (e = e.replace(/\s{2,}/g, " ")),
                ("trim" !== this.options.whitespace && "squish" !== this.options.whitespace && !0 !== this.options.trimValue) || (e = s.trimString(e)),
                    e
            );
        },
        _isDateInput: function () {
            var e = this.constraintsByName.type;
            return e && "date" === e.requirements;
        },
        _getGroupedConstraints: function () {
            if (!1 === this.options.priorityEnabled) return [this.constraints];
            for (var e = [], t = {}, n = 0; n < this.constraints.length; n++) {
                var r = this.constraints[n].priority;
                t[r] || e.push((t[r] = [])), t[r].push(this.constraints[n]);
            }
            return (
                e.sort(function (e, t) {
                    return t[0].priority - e[0].priority;
                }),
                    e
            );
        },
    };
    var A = T,
        F = function () {
            this.__class__ = "FieldMultiple";
        };
    F.prototype = {
        addElement: function (e) {
            return this.$elements.push(e), this;
        },
        _refreshConstraints: function () {
            var t;
            if (((this.constraints = []), "SELECT" === this.element.nodeName)) return this.actualizeOptions()._bindConstraints(), this;
            for (var n = 0; n < this.$elements.length; n++)
                if (e("html").has(this.$elements[n]).length) {
                    t = this.$elements[n].data("FieldMultiple")._refreshConstraints().constraints;
                    for (var r = 0; r < t.length; r++) this.addConstraint(t[r].name, t[r].requirements, t[r].priority, t[r].isDomConstraint);
                } else this.$elements.splice(n, 1);
            return this;
        },
        getValue: function () {
            if ("function" == typeof this.options.value) return this.options.value(this);
            if ("undefined" != typeof this.options.value) return this.options.value;
            if ("INPUT" === this.element.nodeName) {
                var t = s.getType(this.element);
                if ("radio" === t) return this._findRelated().filter(":checked").val() || "";
                if ("checkbox" === t) {
                    var n = [];
                    return (
                        this._findRelated()
                            .filter(":checked")
                            .each(function () {
                                n.push(e(this).val());
                            }),
                            n
                    );
                }
            }
            return "SELECT" === this.element.nodeName && null === this.$element.val() ? [] : this.$element.val();
        },
        _init: function () {
            return (this.$elements = [this.$element]), this;
        },
    };
    var S = function (t, n, r) {
        (this.element = t), (this.$element = e(t));
        var i = this.$element.data("Parsley");
        if (i) return "undefined" != typeof r && i.parent === window.Parsley && ((i.parent = r), i._resetOptions(i.options)), "object" == typeof n && _extends(i.options, n), i;
        if (!this.$element.length) throw new Error("You must bind Parsley on an existing element.");
        if ("undefined" != typeof r && "Form" !== r.__class__) throw new Error("Parent instance must be a Form instance");
        return (this.parent = r || window.Parsley), this.init(n);
    };
    S.prototype = {
        init: function (e) {
            return (
                (this.__class__ = "Parsley"),
                    (this.__version__ = "2.8.1"),
                    (this.__id__ = s.generateID()),
                    this._resetOptions(e),
                    "FORM" === this.element.nodeName || (s.checkAttr(this.element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs))
                        ? this.bind("parsleyForm")
                        : this.isMultiple()
                        ? this.handleMultiple()
                        : this.bind("parsleyField")
            );
        },
        isMultiple: function () {
            var e = s.getType(this.element);
            return "radio" === e || "checkbox" === e || ("SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple"));
        },
        handleMultiple: function () {
            var t,
                n,
                r = this;
            if (((this.options.multiple = this.options.multiple || (t = this.element.getAttribute("name")) || this.element.getAttribute("id")), "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")))
                return (this.options.multiple = this.options.multiple || this.__id__), this.bind("parsleyFieldMultiple");
            if (!this.options.multiple) return s.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            (this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, "")),
            t &&
            e('input[name="' + t + '"]').each(function (e, t) {
                var n = s.getType(t);
                ("radio" !== n && "checkbox" !== n) || t.setAttribute(r.options.namespace + "multiple", r.options.multiple);
            });
            for (var i = this._findRelated(), o = 0; o < i.length; o++)
                if (((n = e(i.get(o)).data("Parsley")), "undefined" != typeof n)) {
                    this.$element.data("FieldMultiple") || n.addElement(this.$element);
                    break;
                }
            return this.bind("parsleyField", !0), n || this.bind("parsleyFieldMultiple");
        },
        bind: function (t, n) {
            var r;
            switch (t) {
                case "parsleyForm":
                    r = e.extend(new w(this.element, this.domOptions, this.options), new u(), window.ParsleyExtend)._bindFields();
                    break;
                case "parsleyField":
                    r = e.extend(new A(this.element, this.domOptions, this.options, this.parent), new u(), window.ParsleyExtend);
                    break;
                case "parsleyFieldMultiple":
                    r = e.extend(new A(this.element, this.domOptions, this.options, this.parent), new F(), new u(), window.ParsleyExtend)._init();
                    break;
                default:
                    throw new Error(t + "is not a supported Parsley type");
            }
            return (
                this.options.multiple && s.setAttr(this.element, this.options.namespace, "multiple", this.options.multiple),
                    "undefined" != typeof n ? (this.$element.data("FieldMultiple", r), r) : (this.$element.data("Parsley", r), r._actualizeTriggers(), r._trigger("init"), r)
            );
        },
    };
    var D = e.fn.jquery.split(".");
    if (parseInt(D[0]) <= 1 && parseInt(D[1]) < 8) throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
    D.forEach || s.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
    var k = _extends(new u(), { element: document, $element: e(document), actualizeOptions: null, _resetOptions: null, Factory: S, version: "2.8.1" });
    _extends(A.prototype, y.Field, u.prototype),
        _extends(w.prototype, y.Form, u.prototype),
        _extends(S.prototype, u.prototype),
        (e.fn.parsley = e.fn.psly = function (t) {
            if (this.length > 1) {
                var n = [];
                return (
                    this.each(function () {
                        n.push(e(this).parsley(t));
                    }),
                        n
                );
            }
            if (0 != this.length) return new S(this[0], t);
        }),
    "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}),
        (k.options = _extends(s.objectCreate(a), window.ParsleyConfig)),
        (window.ParsleyConfig = k.options),
        (window.Parsley = window.psly = k),
        (k.Utils = s),
        (window.ParsleyUtils = {}),
        e.each(s, function (e, t) {
            "function" == typeof t &&
            (window.ParsleyUtils[e] = function () {
                return s.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."), s[e].apply(s, arguments);
            });
        });
    var j = (window.Parsley._validatorRegistry = new f(window.ParsleyConfig.validators, window.ParsleyConfig.i18n));
    (window.ParsleyValidator = {}),
        e.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(" "), function (e, t) {
            (window.Parsley[t] = function () {
                return j[t].apply(j, arguments);
            }),
                (window.ParsleyValidator[t] = function () {
                    var e;
                    return s.warnOnce("Accessing the method '" + t + "' through Validator is deprecated. Simply call 'window.Parsley." + t + "(...)'"), (e = window.Parsley)[t].apply(e, arguments);
                });
        }),
        (window.Parsley.UI = y),
        (window.ParsleyUI = {
            removeError: function (e, t, n) {
                var r = !0 !== n;
                return s.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e.removeError(t, { updateClass: r });
            },
            getErrorsMessages: function (e) {
                return s.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."), e.getErrorsMessages();
            },
        }),
        e.each("addError updateError".split(" "), function (e, t) {
            window.ParsleyUI[t] = function (e, n, r, i, o) {
                var a = !0 !== o;
                return s.warnOnce("Accessing UI is deprecated. Call '" + t + "' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e[t](n, { message: r, assert: i, updateClass: a });
            };
        }),
    !1 !== window.ParsleyConfig.autoBind &&
    e(function () {
        e("[data-parsley-validate]").length && e("[data-parsley-validate]").parsley();
    });
    var N = e({}),
        q = function () {
            s.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley");
        },
        P = "parsley:";
    (e.listen = function (e, r) {
        var i;
        if ((q(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && ((i = arguments[1]), (r = arguments[2])), "function" != typeof r)) throw new Error("Wrong parameters");
        window.Parsley.on(n(e), t(r, i));
    }),
        (e.listenTo = function (e, r, i) {
            if ((q(), !(e instanceof A || e instanceof w))) throw new Error("Must give Parsley instance");
            if ("string" != typeof r || "function" != typeof i) throw new Error("Wrong parameters");
            e.on(n(r), t(i));
        }),
        (e.unsubscribe = function (e, t) {
            if ((q(), "string" != typeof e || "function" != typeof t)) throw new Error("Wrong arguments");
            window.Parsley.off(n(e), t.parsleyAdaptedCallback);
        }),
        (e.unsubscribeTo = function (e, t) {
            if ((q(), !(e instanceof A || e instanceof w))) throw new Error("Must give Parsley instance");
            e.off(n(t));
        }),
        (e.unsubscribeAll = function (t) {
            q(),
                window.Parsley.off(n(t)),
                e("form,input,textarea,select").each(function () {
                    var r = e(this).data("Parsley");
                    r && r.off(n(t));
                });
        }),
        (e.emit = function (e, t) {
            var r;
            q();
            var i = t instanceof A || t instanceof w,
                o = Array.prototype.slice.call(arguments, i ? 2 : 1);
            o.unshift(n(e)), i || (t = window.Parsley), (r = t).trigger.apply(r, _toConsumableArray(o));
        }),
        e.extend(!0, k, {
            asyncValidators: {
                default: {
                    fn: function (e) {
                        return e.status >= 200 && e.status < 300;
                    },
                    url: !1,
                },
                reverse: {
                    fn: function (e) {
                        return e.status < 200 || e.status >= 300;
                    },
                    url: !1,
                },
            },
            addAsyncValidator: function (e, t, n, r) {
                return (k.asyncValidators[e] = { fn: t, url: n || !1, options: r || {} }), this;
            },
        }),
        k.addValidator("remote", {
            requirementType: { "": "string", validator: "string", reverse: "boolean", options: "object" },
            validateString: function (t, n, r, i) {
                var o,
                    s,
                    a = {},
                    u = r.validator || (!0 === r.reverse ? "reverse" : "default");
                if ("undefined" == typeof k.asyncValidators[u]) throw new Error("Calling an undefined async validator: `" + u + "`");
                (n = k.asyncValidators[u].url || n), n.indexOf("{value}") > -1 ? (n = n.replace("{value}", encodeURIComponent(t))) : (a[i.element.getAttribute("name") || i.element.getAttribute("id")] = t);
                var l = e.extend(!0, r.options || {}, k.asyncValidators[u].options);
                (o = e.extend(!0, {}, { url: n, data: a, type: "GET" }, l)), i.trigger("field:ajaxoptions", i, o), (s = e.param(o)), "undefined" == typeof k._remoteCache && (k._remoteCache = {});
                var c = (k._remoteCache[s] = k._remoteCache[s] || e.ajax(o)),
                    d = function () {
                        var t = k.asyncValidators[u].fn.call(i, c, n, r);
                        return t || (t = e.Deferred().reject()), e.when(t);
                    };
                return c.then(d, d);
            },
            priority: -1,
        }),
        k.on("form:submit", function () {
            k._remoteCache = {};
        }),
        (u.prototype.addAsyncValidator = function () {
            return s.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"), k.addAsyncValidator.apply(k, arguments);
        }),
        k.addMessages("en", {
            defaultMessage: "This value seems to be invalid.",
            type: {
                email: "This value should be a valid email.",
                url: "This value should be a valid url.",
                number: "This value should be a valid number.",
                integer: "This value should be a valid integer.",
                digits: "This value should be digits.",
                alphanum: "This value should be alphanumeric.",
            },
            notblank: "This value should not be blank.",
            required: "This value is required.",
            pattern: "This value seems to be invalid.",
            min: "This value should be greater than or equal to %s.",
            max: "This value should be lower than or equal to %s.",
            range: "This value should be between %s and %s.",
            minlength: "This value is too short. It should have %s characters or more.",
            maxlength: "This value is too long. It should have %s characters or fewer.",
            length: "This value length is invalid. It should be between %s and %s characters long.",
            mincheck: "You must select at least %s choices.",
            maxcheck: "You must select %s choices or fewer.",
            check: "You must select between %s and %s choices.",
            equalto: "This value should be the same.",
        }),
        k.setLocale("en");
    var O = new r();
    O.install();
    var $ = k;
    return $;
});
$(document).ready(function () {
    var l = $(".accordion-toggle");
    l.on("click", function (l) {
        l.preventDefault();
        var a = $(this).attr("aria-controls"),
            o = $("#" + a);
        $(this).hasClass("collapsed") && $(this).toggleClass("collapsed"), o.toggle(300), $("div.panel-collapse ").not(o).slideUp();
    });
});
$(document).ready(function () {}),
    $(document).on("click", ".openNav", function () {
        if ($(window).width() >= 450) var e = 0 == $(".mobileMenu").width() ? "70vw" : 0;
        else var e = 0 == $(".mobileMenu").width() ? "100vw" : 0;
        $(".mobileMenu").animate({ width: e }), $("body").addClass("noOverflow"), $(".openNav").hide();
    }),
    $(document).on("click", ".closeNav", function () {
        if ($(window).width() >= 450) var e = 0 == $(".mobileMenu").width() ? "70vw" : 0;
        else var e = 0 == $(".mobileMenu").width() ? "100vw" : 0;
        $(".mobileMenu").animate({ width: e }), $("body").removeClass("noOverflow"), $(".openNav").show();
    }),
    (equalHeight = function (e) {
        var t = 0;
        $(e).each(function () {
            var e = $(this).height();
            e > t && (t = e);
        }),
            $(e).height(t + "px");
    }),
    (autoHeight = function (e) {
        $(e).height("auto");
    }),

    $(window).on("load", function () {
        $(window).width() > 768 && (equalHeight(".newsItem"), equalHeight(".newsItem h5"), equalHeight(".StartItem p")),
        $(window).width() >= 992 && (equalHeight(".first"), equalHeight(".second")),
        $(window).width() >= 1200 && equalHeight(".address"),
        $(window).width() < 768 && (autoHeight(".newsItem"), autoHeight(".newsItem h5"), autoHeight(".StartItem p"));
    }),

    $(window).on("resize", function () {
        $(window).width() > 768 && (equalHeight(".newsItem"), equalHeight(".newsItem h5"), equalHeight(".StartItem p")),
        $(window).width() >= 992 && (equalHeight(".first"), equalHeight(".second")),
        $(window).width() >= 1200 && equalHeight(".address"),
        $(window).width() < 768 && (autoHeight(".newsItem"), autoHeight(".newsItem h5"), autoHeight(".StartItem p"));

        // T3Dev 24.06.2020, this code will be apply in custom.js
        //windowsize = $(window).width();
        //if (windowsize < 1200) {
        //    $('.first').css('height','auto');
        //}
    }),

    $(document).on("click", ".btn-link", function () {
        $(this).toggleClass("opened");
    }),
    $(document).on("click", ".openSubMenu", function (e) {
        e.preventDefault();
        var t = $(this).parents(".navItem").next("div"),
            i = $(".mobileMenu i").parents(".navItem").next("div");
        $(this).hasClass("openedMenu") ? $(this).removeClass("openedMenu") : ($(".openSubMenu").not($(this)).removeClass("openedMenu"), $(this).addClass("openedMenu")),
            t.hasClass("openedMobileNav")
                ? (i.addClass("hideMobileNav").removeClass("openedMobileNav"), i.slideUp())
                : (i.not(t).addClass("hideMobileNav").removeClass("openedMobileNav"), i.not(t).slideUp(), t.removeClass("hideMobileNav").addClass("openedMobileNav"), t.slideDown());
    });
$(document).ready(function () {});
