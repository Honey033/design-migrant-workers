/*!
 * matter-js 0.17.1 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define('Matter', [], t)
    : 'object' == typeof exports
    ? (exports.Matter = t())
    : (e.Matter = t())
})(this, function () {
  return (function (e) {
    var t = {}
    function n(i) {
      if (t[i]) return t[i].exports
      var o = (t[i] = { i: i, l: !1, exports: {} })
      return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i })
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var i = Object.create(null)
        if (
          (n.r(i),
          Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            n.d(
              i,
              o,
              function (t) {
                return e[t]
              }.bind(null, o)
            )
        return i
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ''),
      n((n.s = 22))
    )
  })([
    function (e, t) {
      var n = {}
      ;(e.exports = n),
        (function () {
          ;(n._nextId = 0),
            (n._seed = 0),
            (n._nowStartTime = +new Date()),
            (n._warnedOnce = {}),
            (n._decomp = null),
            (n.extend = function (e, t) {
              var i, o
              'boolean' == typeof t ? ((i = 2), (o = t)) : ((i = 1), (o = !0))
              for (var r = i; r < arguments.length; r++) {
                var a = arguments[r]
                if (a)
                  for (var s in a)
                    o && a[s] && a[s].constructor === Object
                      ? e[s] && e[s].constructor !== Object
                        ? (e[s] = a[s])
                        : ((e[s] = e[s] || {}), n.extend(e[s], o, a[s]))
                      : (e[s] = a[s])
              }
              return e
            }),
            (n.clone = function (e, t) {
              return n.extend({}, t, e)
            }),
            (n.keys = function (e) {
              if (Object.keys) return Object.keys(e)
              var t = []
              for (var n in e) t.push(n)
              return t
            }),
            (n.values = function (e) {
              var t = []
              if (Object.keys) {
                for (var n = Object.keys(e), i = 0; i < n.length; i++)
                  t.push(e[n[i]])
                return t
              }
              for (var o in e) t.push(e[o])
              return t
            }),
            (n.get = function (e, t, n, i) {
              t = t.split('.').slice(n, i)
              for (var o = 0; o < t.length; o += 1) e = e[t[o]]
              return e
            }),
            (n.set = function (e, t, i, o, r) {
              var a = t.split('.').slice(o, r)
              return (n.get(e, t, 0, -1)[a[a.length - 1]] = i), i
            }),
            (n.shuffle = function (e) {
              for (var t = e.length - 1; t > 0; t--) {
                var i = Math.floor(n.random() * (t + 1)),
                  o = e[t]
                ;(e[t] = e[i]), (e[i] = o)
              }
              return e
            }),
            (n.choose = function (e) {
              return e[Math.floor(n.random() * e.length)]
            }),
            (n.isElement = function (e) {
              return 'undefined' != typeof HTMLElement
                ? e instanceof HTMLElement
                : !!(e && e.nodeType && e.nodeName)
            }),
            (n.isArray = function (e) {
              return '[object Array]' === Object.prototype.toString.call(e)
            }),
            (n.isFunction = function (e) {
              return 'function' == typeof e
            }),
            (n.isPlainObject = function (e) {
              return 'object' == typeof e && e.constructor === Object
            }),
            (n.isString = function (e) {
              return '[object String]' === toString.call(e)
            }),
            (n.clamp = function (e, t, n) {
              return e < t ? t : e > n ? n : e
            }),
            (n.sign = function (e) {
              return e < 0 ? -1 : 1
            }),
            (n.now = function () {
              if ('undefined' != typeof window && window.performance) {
                if (window.performance.now) return window.performance.now()
                if (window.performance.webkitNow)
                  return window.performance.webkitNow()
              }
              return Date.now ? Date.now() : new Date() - n._nowStartTime
            }),
            (n.random = function (t, n) {
              return (
                (n = void 0 !== n ? n : 1),
                (t = void 0 !== t ? t : 0) + e() * (n - t)
              )
            })
          var e = function () {
            return (
              (n._seed = (9301 * n._seed + 49297) % 233280), n._seed / 233280
            )
          }
          ;(n.colorToNumber = function (e) {
            return (
              3 == (e = e.replace('#', '')).length &&
                (e =
                  e.charAt(0) +
                  e.charAt(0) +
                  e.charAt(1) +
                  e.charAt(1) +
                  e.charAt(2) +
                  e.charAt(2)),
              parseInt(e, 16)
            )
          }),
            (n.logLevel = 1),
            (n.log = function () {
              console &&
                n.logLevel > 0 &&
                n.logLevel <= 3 &&
                console.log.apply(
                  console,
                  ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                )
            }),
            (n.info = function () {
              console &&
                n.logLevel > 0 &&
                n.logLevel <= 2 &&
                console.info.apply(
                  console,
                  ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                )
            }),
            (n.warn = function () {
              console &&
                n.logLevel > 0 &&
                n.logLevel <= 3 &&
                console.warn.apply(
                  console,
                  ['matter-js:'].concat(Array.prototype.slice.call(arguments))
                )
            }),
            (n.warnOnce = function () {
              var e = Array.prototype.slice.call(arguments).join(' ')
              n._warnedOnce[e] || (n.warn(e), (n._warnedOnce[e] = !0))
            }),
            (n.deprecated = function (e, t, i) {
              e[t] = n.chain(function () {
                n.warnOnce('🔅 deprecated 🔅', i)
              }, e[t])
            }),
            (n.nextId = function () {
              return n._nextId++
            }),
            (n.indexOf = function (e, t) {
              if (e.indexOf) return e.indexOf(t)
              for (var n = 0; n < e.length; n++) if (e[n] === t) return n
              return -1
            }),
            (n.map = function (e, t) {
              if (e.map) return e.map(t)
              for (var n = [], i = 0; i < e.length; i += 1) n.push(t(e[i]))
              return n
            }),
            (n.topologicalSort = function (e) {
              var t = [],
                i = [],
                o = []
              for (var r in e) i[r] || o[r] || n._topologicalSort(r, i, o, e, t)
              return t
            }),
            (n._topologicalSort = function (e, t, i, o, r) {
              var a = o[e] || []
              i[e] = !0
              for (var s = 0; s < a.length; s += 1) {
                var l = a[s]
                i[l] || t[l] || n._topologicalSort(l, t, i, o, r)
              }
              ;(i[e] = !1), (t[e] = !0), r.push(e)
            }),
            (n.chain = function () {
              for (var e = [], t = 0; t < arguments.length; t += 1) {
                var n = arguments[t]
                n._chained ? e.push.apply(e, n._chained) : e.push(n)
              }
              var i = function () {
                for (
                  var t,
                    n = new Array(arguments.length),
                    i = 0,
                    o = arguments.length;
                  i < o;
                  i++
                )
                  n[i] = arguments[i]
                for (i = 0; i < e.length; i += 1) {
                  var r = e[i].apply(t, n)
                  void 0 !== r && (t = r)
                }
                return t
              }
              return (i._chained = e), i
            }),
            (n.chainPathBefore = function (e, t, i) {
              return n.set(e, t, n.chain(i, n.get(e, t)))
            }),
            (n.chainPathAfter = function (e, t, i) {
              return n.set(e, t, n.chain(n.get(e, t), i))
            }),
            (n.setDecomp = function (e) {
              n._decomp = e
            }),
            (n.getDecomp = function () {
              var e = n._decomp
              try {
                e || 'undefined' == typeof window || (e = window.decomp),
                  e || 'undefined' == typeof global || (e = global.decomp)
              } catch (t) {
                e = null
              }
              return e
            })
        })()
    },
    function (e, t) {
      var n = {}
      ;(e.exports = n),
        (n.create = function (e) {
          var t = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } }
          return e && n.update(t, e), t
        }),
        (n.update = function (e, t, n) {
          ;(e.min.x = 1 / 0),
            (e.max.x = -1 / 0),
            (e.min.y = 1 / 0),
            (e.max.y = -1 / 0)
          for (var i = 0; i < t.length; i++) {
            var o = t[i]
            o.x > e.max.x && (e.max.x = o.x),
              o.x < e.min.x && (e.min.x = o.x),
              o.y > e.max.y && (e.max.y = o.y),
              o.y < e.min.y && (e.min.y = o.y)
          }
          n &&
            (n.x > 0 ? (e.max.x += n.x) : (e.min.x += n.x),
            n.y > 0 ? (e.max.y += n.y) : (e.min.y += n.y))
        }),
        (n.contains = function (e, t) {
          return (
            t.x >= e.min.x && t.x <= e.max.x && t.y >= e.min.y && t.y <= e.max.y
          )
        }),
        (n.overlaps = function (e, t) {
          return (
            e.min.x <= t.max.x &&
            e.max.x >= t.min.x &&
            e.max.y >= t.min.y &&
            e.min.y <= t.max.y
          )
        }),
        (n.translate = function (e, t) {
          ;(e.min.x += t.x),
            (e.max.x += t.x),
            (e.min.y += t.y),
            (e.max.y += t.y)
        }),
        (n.shift = function (e, t) {
          var n = e.max.x - e.min.x,
            i = e.max.y - e.min.y
          ;(e.min.x = t.x),
            (e.max.x = t.x + n),
            (e.min.y = t.y),
            (e.max.y = t.y + i)
        })
    },
    function (e, t) {
      var n = {}
      ;(e.exports = n),
        (n.create = function (e, t) {
          return { x: e || 0, y: t || 0 }
        }),
        (n.clone = function (e) {
          return { x: e.x, y: e.y }
        }),
        (n.magnitude = function (e) {
          return Math.sqrt(e.x * e.x + e.y * e.y)
        }),
        (n.magnitudeSquared = function (e) {
          return e.x * e.x + e.y * e.y
        }),
        (n.rotate = function (e, t, n) {
          var i = Math.cos(t),
            o = Math.sin(t)
          n || (n = {})
          var r = e.x * i - e.y * o
          return (n.y = e.x * o + e.y * i), (n.x = r), n
        }),
        (n.rotateAbout = function (e, t, n, i) {
          var o = Math.cos(t),
            r = Math.sin(t)
          i || (i = {})
          var a = n.x + ((e.x - n.x) * o - (e.y - n.y) * r)
          return (i.y = n.y + ((e.x - n.x) * r + (e.y - n.y) * o)), (i.x = a), i
        }),
        (n.normalise = function (e) {
          var t = n.magnitude(e)
          return 0 === t ? { x: 0, y: 0 } : { x: e.x / t, y: e.y / t }
        }),
        (n.dot = function (e, t) {
          return e.x * t.x + e.y * t.y
        }),
        (n.cross = function (e, t) {
          return e.x * t.y - e.y * t.x
        }),
        (n.cross3 = function (e, t, n) {
          return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x)
        }),
        (n.add = function (e, t, n) {
          return n || (n = {}), (n.x = e.x + t.x), (n.y = e.y + t.y), n
        }),
        (n.sub = function (e, t, n) {
          return n || (n = {}), (n.x = e.x - t.x), (n.y = e.y - t.y), n
        }),
        (n.mult = function (e, t) {
          return { x: e.x * t, y: e.y * t }
        }),
        (n.div = function (e, t) {
          return { x: e.x / t, y: e.y / t }
        }),
        (n.perp = function (e, t) {
          return { x: (t = !0 === t ? -1 : 1) * -e.y, y: t * e.x }
        }),
        (n.neg = function (e) {
          return { x: -e.x, y: -e.y }
        }),
        (n.angle = function (e, t) {
          return Math.atan2(t.y - e.y, t.x - e.x)
        }),
        (n._temp = [
          n.create(),
          n.create(),
          n.create(),
          n.create(),
          n.create(),
          n.create()
        ])
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(2),
        r = n(0)
      ;(i.create = function (e, t) {
        for (var n = [], i = 0; i < e.length; i++) {
          var o = e[i],
            r = { x: o.x, y: o.y, index: i, body: t, isInternal: !1 }
          n.push(r)
        }
        return n
      }),
        (i.fromPath = function (e, t) {
          var n = []
          return (
            e.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi, function (e, t, i) {
              n.push({ x: parseFloat(t), y: parseFloat(i) })
            }),
            i.create(n, t)
          )
        }),
        (i.centre = function (e) {
          for (
            var t, n, r, a = i.area(e, !0), s = { x: 0, y: 0 }, l = 0;
            l < e.length;
            l++
          )
            (r = (l + 1) % e.length),
              (t = o.cross(e[l], e[r])),
              (n = o.mult(o.add(e[l], e[r]), t)),
              (s = o.add(s, n))
          return o.div(s, 6 * a)
        }),
        (i.mean = function (e) {
          for (var t = { x: 0, y: 0 }, n = 0; n < e.length; n++)
            (t.x += e[n].x), (t.y += e[n].y)
          return o.div(t, e.length)
        }),
        (i.area = function (e, t) {
          for (var n = 0, i = e.length - 1, o = 0; o < e.length; o++)
            (n += (e[i].x - e[o].x) * (e[i].y + e[o].y)), (i = o)
          return t ? n / 2 : Math.abs(n) / 2
        }),
        (i.inertia = function (e, t) {
          for (var n, i, r = 0, a = 0, s = e, l = 0; l < s.length; l++)
            (i = (l + 1) % s.length),
              (r +=
                (n = Math.abs(o.cross(s[i], s[l]))) *
                (o.dot(s[i], s[i]) + o.dot(s[i], s[l]) + o.dot(s[l], s[l]))),
              (a += n)
          return (t / 6) * (r / a)
        }),
        (i.translate = function (e, t, n) {
          var i
          if (n)
            for (i = 0; i < e.length; i++)
              (e[i].x += t.x * n), (e[i].y += t.y * n)
          else for (i = 0; i < e.length; i++) (e[i].x += t.x), (e[i].y += t.y)
          return e
        }),
        (i.rotate = function (e, t, n) {
          if (0 !== t) {
            for (
              var i = Math.cos(t), o = Math.sin(t), r = 0;
              r < e.length;
              r++
            ) {
              var a = e[r],
                s = a.x - n.x,
                l = a.y - n.y
              ;(a.x = n.x + (s * i - l * o)), (a.y = n.y + (s * o + l * i))
            }
            return e
          }
        }),
        (i.contains = function (e, t) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n],
              o = e[(n + 1) % e.length]
            if ((t.x - i.x) * (o.y - i.y) + (t.y - i.y) * (i.x - o.x) > 0)
              return !1
          }
          return !0
        }),
        (i.scale = function (e, t, n, r) {
          if (1 === t && 1 === n) return e
          var a, s
          r = r || i.centre(e)
          for (var l = 0; l < e.length; l++)
            (a = e[l]),
              (s = o.sub(a, r)),
              (e[l].x = r.x + s.x * t),
              (e[l].y = r.y + s.y * n)
          return e
        }),
        (i.chamfer = function (e, t, n, i, a) {
          ;(t = 'number' == typeof t ? [t] : t || [8]),
            (n = void 0 !== n ? n : -1),
            (i = i || 2),
            (a = a || 14)
          for (var s = [], l = 0; l < e.length; l++) {
            var c = e[l - 1 >= 0 ? l - 1 : e.length - 1],
              u = e[l],
              d = e[(l + 1) % e.length],
              p = t[l < t.length ? l : t.length - 1]
            if (0 !== p) {
              var f = o.normalise({ x: u.y - c.y, y: c.x - u.x }),
                v = o.normalise({ x: d.y - u.y, y: u.x - d.x }),
                m = Math.sqrt(2 * Math.pow(p, 2)),
                y = o.mult(r.clone(f), p),
                g = o.normalise(o.mult(o.add(f, v), 0.5)),
                x = o.sub(u, o.mult(g, m)),
                h = n
              ;-1 === n && (h = 1.75 * Math.pow(p, 0.32)),
                (h = r.clamp(h, i, a)) % 2 == 1 && (h += 1)
              for (var b = Math.acos(o.dot(f, v)) / h, S = 0; S < h; S++)
                s.push(o.add(o.rotate(y, b * S), x))
            } else s.push(u)
          }
          return s
        }),
        (i.clockwiseSort = function (e) {
          var t = i.mean(e)
          return (
            e.sort(function (e, n) {
              return o.angle(t, e) - o.angle(t, n)
            }),
            e
          )
        }),
        (i.isConvex = function (e) {
          var t,
            n,
            i,
            o,
            r = 0,
            a = e.length
          if (a < 3) return null
          for (t = 0; t < a; t++)
            if (
              ((i = (t + 2) % a),
              (o = (e[(n = (t + 1) % a)].x - e[t].x) * (e[i].y - e[n].y)),
              (o -= (e[n].y - e[t].y) * (e[i].x - e[n].x)) < 0
                ? (r |= 1)
                : o > 0 && (r |= 2),
              3 === r)
            )
              return !1
          return 0 !== r || null
        }),
        (i.hull = function (e) {
          var t,
            n,
            i = [],
            r = []
          for (
            (e = e.slice(0)).sort(function (e, t) {
              var n = e.x - t.x
              return 0 !== n ? n : e.y - t.y
            }),
              n = 0;
            n < e.length;
            n += 1
          ) {
            for (
              t = e[n];
              r.length >= 2 &&
              o.cross3(r[r.length - 2], r[r.length - 1], t) <= 0;

            )
              r.pop()
            r.push(t)
          }
          for (n = e.length - 1; n >= 0; n -= 1) {
            for (
              t = e[n];
              i.length >= 2 &&
              o.cross3(i[i.length - 2], i[i.length - 1], t) <= 0;

            )
              i.pop()
            i.push(t)
          }
          return i.pop(), r.pop(), i.concat(r)
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(0)
      ;(i.on = function (e, t, n) {
        for (var i, o = t.split(' '), r = 0; r < o.length; r++)
          (i = o[r]),
            (e.events = e.events || {}),
            (e.events[i] = e.events[i] || []),
            e.events[i].push(n)
        return n
      }),
        (i.off = function (e, t, n) {
          if (t) {
            'function' == typeof t &&
              ((n = t), (t = o.keys(e.events).join(' ')))
            for (var i = t.split(' '), r = 0; r < i.length; r++) {
              var a = e.events[i[r]],
                s = []
              if (n && a)
                for (var l = 0; l < a.length; l++) a[l] !== n && s.push(a[l])
              e.events[i[r]] = s
            }
          } else e.events = {}
        }),
        (i.trigger = function (e, t, n) {
          var i,
            r,
            a,
            s,
            l = e.events
          if (l && o.keys(l).length > 0) {
            n || (n = {}), (i = t.split(' '))
            for (var c = 0; c < i.length; c++)
              if ((a = l[(r = i[c])])) {
                ;((s = o.clone(n, !1)).name = r), (s.source = e)
                for (var u = 0; u < a.length; u++) a[u].apply(e, [s])
              }
          }
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(4),
        r = n(0),
        a = n(1),
        s = n(6)
      ;(i.create = function (e) {
        return r.extend(
          {
            id: r.nextId(),
            type: 'composite',
            parent: null,
            isModified: !1,
            bodies: [],
            constraints: [],
            composites: [],
            label: 'Composite',
            plugin: {}
          },
          e
        )
      }),
        (i.setModified = function (e, t, n, o) {
          if (
            ((e.isModified = t),
            n && e.parent && i.setModified(e.parent, t, n, o),
            o)
          )
            for (var r = 0; r < e.composites.length; r++) {
              var a = e.composites[r]
              i.setModified(a, t, n, o)
            }
        }),
        (i.add = function (e, t) {
          var n = [].concat(t)
          o.trigger(e, 'beforeAdd', { object: t })
          for (var a = 0; a < n.length; a++) {
            var s = n[a]
            switch (s.type) {
              case 'body':
                if (s.parent !== s) {
                  r.warn(
                    'Composite.add: skipped adding a compound body part (you must add its parent instead)'
                  )
                  break
                }
                i.addBody(e, s)
                break
              case 'constraint':
                i.addConstraint(e, s)
                break
              case 'composite':
                i.addComposite(e, s)
                break
              case 'mouseConstraint':
                i.addConstraint(e, s.constraint)
            }
          }
          return o.trigger(e, 'afterAdd', { object: t }), e
        }),
        (i.remove = function (e, t, n) {
          var r = [].concat(t)
          o.trigger(e, 'beforeRemove', { object: t })
          for (var a = 0; a < r.length; a++) {
            var s = r[a]
            switch (s.type) {
              case 'body':
                i.removeBody(e, s, n)
                break
              case 'constraint':
                i.removeConstraint(e, s, n)
                break
              case 'composite':
                i.removeComposite(e, s, n)
                break
              case 'mouseConstraint':
                i.removeConstraint(e, s.constraint)
            }
          }
          return o.trigger(e, 'afterRemove', { object: t }), e
        }),
        (i.addComposite = function (e, t) {
          return (
            e.composites.push(t),
            (t.parent = e),
            i.setModified(e, !0, !0, !1),
            e
          )
        }),
        (i.removeComposite = function (e, t, n) {
          var o = r.indexOf(e.composites, t)
          if (
            (-1 !== o &&
              (i.removeCompositeAt(e, o), i.setModified(e, !0, !0, !1)),
            n)
          )
            for (var a = 0; a < e.composites.length; a++)
              i.removeComposite(e.composites[a], t, !0)
          return e
        }),
        (i.removeCompositeAt = function (e, t) {
          return e.composites.splice(t, 1), i.setModified(e, !0, !0, !1), e
        }),
        (i.addBody = function (e, t) {
          return e.bodies.push(t), i.setModified(e, !0, !0, !1), e
        }),
        (i.removeBody = function (e, t, n) {
          var o = r.indexOf(e.bodies, t)
          if (
            (-1 !== o && (i.removeBodyAt(e, o), i.setModified(e, !0, !0, !1)),
            n)
          )
            for (var a = 0; a < e.composites.length; a++)
              i.removeBody(e.composites[a], t, !0)
          return e
        }),
        (i.removeBodyAt = function (e, t) {
          return e.bodies.splice(t, 1), i.setModified(e, !0, !0, !1), e
        }),
        (i.addConstraint = function (e, t) {
          return e.constraints.push(t), i.setModified(e, !0, !0, !1), e
        }),
        (i.removeConstraint = function (e, t, n) {
          var o = r.indexOf(e.constraints, t)
          if ((-1 !== o && i.removeConstraintAt(e, o), n))
            for (var a = 0; a < e.composites.length; a++)
              i.removeConstraint(e.composites[a], t, !0)
          return e
        }),
        (i.removeConstraintAt = function (e, t) {
          return e.constraints.splice(t, 1), i.setModified(e, !0, !0, !1), e
        }),
        (i.clear = function (e, t, n) {
          if (n)
            for (var o = 0; o < e.composites.length; o++)
              i.clear(e.composites[o], t, !0)
          return (
            t
              ? (e.bodies = e.bodies.filter(function (e) {
                  return e.isStatic
                }))
              : (e.bodies.length = 0),
            (e.constraints.length = 0),
            (e.composites.length = 0),
            i.setModified(e, !0, !0, !1),
            e
          )
        }),
        (i.allBodies = function (e) {
          for (var t = [].concat(e.bodies), n = 0; n < e.composites.length; n++)
            t = t.concat(i.allBodies(e.composites[n]))
          return t
        }),
        (i.allConstraints = function (e) {
          for (
            var t = [].concat(e.constraints), n = 0;
            n < e.composites.length;
            n++
          )
            t = t.concat(i.allConstraints(e.composites[n]))
          return t
        }),
        (i.allComposites = function (e) {
          for (
            var t = [].concat(e.composites), n = 0;
            n < e.composites.length;
            n++
          )
            t = t.concat(i.allComposites(e.composites[n]))
          return t
        }),
        (i.get = function (e, t, n) {
          var o, r
          switch (n) {
            case 'body':
              o = i.allBodies(e)
              break
            case 'constraint':
              o = i.allConstraints(e)
              break
            case 'composite':
              o = i.allComposites(e).concat(e)
          }
          return o
            ? 0 ===
              (r = o.filter(function (e) {
                return e.id.toString() === t.toString()
              })).length
              ? null
              : r[0]
            : null
        }),
        (i.move = function (e, t, n) {
          return i.remove(e, t), i.add(n, t), e
        }),
        (i.rebase = function (e) {
          for (
            var t = i
                .allBodies(e)
                .concat(i.allConstraints(e))
                .concat(i.allComposites(e)),
              n = 0;
            n < t.length;
            n++
          )
            t[n].id = r.nextId()
          return i.setModified(e, !0, !0, !1), e
        }),
        (i.translate = function (e, t, n) {
          for (var o = n ? i.allBodies(e) : e.bodies, r = 0; r < o.length; r++)
            s.translate(o[r], t)
          return i.setModified(e, !0, !0, !1), e
        }),
        (i.rotate = function (e, t, n, o) {
          for (
            var r = Math.cos(t),
              a = Math.sin(t),
              l = o ? i.allBodies(e) : e.bodies,
              c = 0;
            c < l.length;
            c++
          ) {
            var u = l[c],
              d = u.position.x - n.x,
              p = u.position.y - n.y
            s.setPosition(u, {
              x: n.x + (d * r - p * a),
              y: n.y + (d * a + p * r)
            }),
              s.rotate(u, t)
          }
          return i.setModified(e, !0, !0, !1), e
        }),
        (i.scale = function (e, t, n, o, r) {
          for (
            var a = r ? i.allBodies(e) : e.bodies, l = 0;
            l < a.length;
            l++
          ) {
            var c = a[l],
              u = c.position.x - o.x,
              d = c.position.y - o.y
            s.setPosition(c, { x: o.x + u * t, y: o.y + d * n }),
              s.scale(c, t, n)
          }
          return i.setModified(e, !0, !0, !1), e
        }),
        (i.bounds = function (e) {
          for (var t = i.allBodies(e), n = [], o = 0; o < t.length; o += 1) {
            var r = t[o]
            n.push(r.bounds.min, r.bounds.max)
          }
          return a.create(n)
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(3),
        r = n(2),
        a = n(7),
        s = (n(16), n(0)),
        l = n(1),
        c = n(10)
      !(function () {
        ;(i._inertiaScale = 4),
          (i._nextCollidingGroupId = 1),
          (i._nextNonCollidingGroupId = -1),
          (i._nextCategory = 1),
          (i.create = function (t) {
            var n = {
                id: s.nextId(),
                type: 'body',
                label: 'Body',
                parts: [],
                plugin: {},
                angle: 0,
                vertices: o.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
                position: { x: 0, y: 0 },
                force: { x: 0, y: 0 },
                torque: 0,
                positionImpulse: { x: 0, y: 0 },
                constraintImpulse: { x: 0, y: 0, angle: 0 },
                totalContacts: 0,
                speed: 0,
                angularSpeed: 0,
                velocity: { x: 0, y: 0 },
                angularVelocity: 0,
                isSensor: !1,
                isStatic: !1,
                isSleeping: !1,
                motion: 0,
                sleepThreshold: 60,
                density: 0.001,
                restitution: 0,
                friction: 0.1,
                frictionStatic: 0.5,
                frictionAir: 0.01,
                collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                slop: 0.05,
                timeScale: 1,
                render: {
                  visible: !0,
                  opacity: 1,
                  strokeStyle: null,
                  fillStyle: null,
                  lineWidth: null,
                  sprite: { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 }
                },
                events: null,
                bounds: null,
                chamfer: null,
                circleRadius: 0,
                positionPrev: null,
                anglePrev: 0,
                parent: null,
                axes: null,
                area: 0,
                mass: 0,
                inertia: 0,
                _original: null
              },
              i = s.extend(n, t)
            return e(i, t), i
          }),
          (i.nextGroup = function (e) {
            return e ? i._nextNonCollidingGroupId-- : i._nextCollidingGroupId++
          }),
          (i.nextCategory = function () {
            return (i._nextCategory = i._nextCategory << 1), i._nextCategory
          })
        var e = function (e, t) {
          ;(t = t || {}),
            i.set(e, {
              bounds: e.bounds || l.create(e.vertices),
              positionPrev: e.positionPrev || r.clone(e.position),
              anglePrev: e.anglePrev || e.angle,
              vertices: e.vertices,
              parts: e.parts || [e],
              isStatic: e.isStatic,
              isSleeping: e.isSleeping,
              parent: e.parent || e
            }),
            o.rotate(e.vertices, e.angle, e.position),
            c.rotate(e.axes, e.angle),
            l.update(e.bounds, e.vertices, e.velocity),
            i.set(e, {
              axes: t.axes || e.axes,
              area: t.area || e.area,
              mass: t.mass || e.mass,
              inertia: t.inertia || e.inertia
            })
          var n = e.isStatic
              ? '#14151f'
              : s.choose([
                  '#f19648',
                  '#f5d259',
                  '#f55a3c',
                  '#063e7b',
                  '#ececd1'
                ]),
            a = e.isStatic ? '#555' : '#ccc',
            u = e.isStatic && null === e.render.fillStyle ? 1 : 0
          ;(e.render.fillStyle = e.render.fillStyle || n),
            (e.render.strokeStyle = e.render.strokeStyle || a),
            (e.render.lineWidth = e.render.lineWidth || u),
            (e.render.sprite.xOffset +=
              -(e.bounds.min.x - e.position.x) /
              (e.bounds.max.x - e.bounds.min.x)),
            (e.render.sprite.yOffset +=
              -(e.bounds.min.y - e.position.y) /
              (e.bounds.max.y - e.bounds.min.y))
        }
        ;(i.set = function (e, t, n) {
          var o
          for (o in ('string' == typeof t && ((o = t), ((t = {})[o] = n)), t))
            if (Object.prototype.hasOwnProperty.call(t, o))
              switch (((n = t[o]), o)) {
                case 'isStatic':
                  i.setStatic(e, n)
                  break
                case 'isSleeping':
                  a.set(e, n)
                  break
                case 'mass':
                  i.setMass(e, n)
                  break
                case 'density':
                  i.setDensity(e, n)
                  break
                case 'inertia':
                  i.setInertia(e, n)
                  break
                case 'vertices':
                  i.setVertices(e, n)
                  break
                case 'position':
                  i.setPosition(e, n)
                  break
                case 'angle':
                  i.setAngle(e, n)
                  break
                case 'velocity':
                  i.setVelocity(e, n)
                  break
                case 'angularVelocity':
                  i.setAngularVelocity(e, n)
                  break
                case 'parts':
                  i.setParts(e, n)
                  break
                case 'centre':
                  i.setCentre(e, n)
                  break
                default:
                  e[o] = n
              }
        }),
          (i.setStatic = function (e, t) {
            for (var n = 0; n < e.parts.length; n++) {
              var i = e.parts[n]
              ;(i.isStatic = t),
                t
                  ? ((i._original = {
                      restitution: i.restitution,
                      friction: i.friction,
                      mass: i.mass,
                      inertia: i.inertia,
                      density: i.density,
                      inverseMass: i.inverseMass,
                      inverseInertia: i.inverseInertia
                    }),
                    (i.restitution = 0),
                    (i.friction = 1),
                    (i.mass = i.inertia = i.density = 1 / 0),
                    (i.inverseMass = i.inverseInertia = 0),
                    (i.positionPrev.x = i.position.x),
                    (i.positionPrev.y = i.position.y),
                    (i.anglePrev = i.angle),
                    (i.angularVelocity = 0),
                    (i.speed = 0),
                    (i.angularSpeed = 0),
                    (i.motion = 0))
                  : i._original &&
                    ((i.restitution = i._original.restitution),
                    (i.friction = i._original.friction),
                    (i.mass = i._original.mass),
                    (i.inertia = i._original.inertia),
                    (i.density = i._original.density),
                    (i.inverseMass = i._original.inverseMass),
                    (i.inverseInertia = i._original.inverseInertia),
                    (i._original = null))
            }
          }),
          (i.setMass = function (e, t) {
            var n = e.inertia / (e.mass / 6)
            ;(e.inertia = n * (t / 6)),
              (e.inverseInertia = 1 / e.inertia),
              (e.mass = t),
              (e.inverseMass = 1 / e.mass),
              (e.density = e.mass / e.area)
          }),
          (i.setDensity = function (e, t) {
            i.setMass(e, t * e.area), (e.density = t)
          }),
          (i.setInertia = function (e, t) {
            ;(e.inertia = t), (e.inverseInertia = 1 / e.inertia)
          }),
          (i.setVertices = function (e, t) {
            t[0].body === e ? (e.vertices = t) : (e.vertices = o.create(t, e)),
              (e.axes = c.fromVertices(e.vertices)),
              (e.area = o.area(e.vertices)),
              i.setMass(e, e.density * e.area)
            var n = o.centre(e.vertices)
            o.translate(e.vertices, n, -1),
              i.setInertia(e, i._inertiaScale * o.inertia(e.vertices, e.mass)),
              o.translate(e.vertices, e.position),
              l.update(e.bounds, e.vertices, e.velocity)
          }),
          (i.setParts = function (e, t, n) {
            var r
            for (
              t = t.slice(0),
                e.parts.length = 0,
                e.parts.push(e),
                e.parent = e,
                r = 0;
              r < t.length;
              r++
            ) {
              var a = t[r]
              a !== e && ((a.parent = e), e.parts.push(a))
            }
            if (1 !== e.parts.length) {
              if ((n = void 0 === n || n)) {
                var s = []
                for (r = 0; r < t.length; r++) s = s.concat(t[r].vertices)
                o.clockwiseSort(s)
                var l = o.hull(s),
                  c = o.centre(l)
                i.setVertices(e, l), o.translate(e.vertices, c)
              }
              var u = i._totalProperties(e)
              ;(e.area = u.area),
                (e.parent = e),
                (e.position.x = u.centre.x),
                (e.position.y = u.centre.y),
                (e.positionPrev.x = u.centre.x),
                (e.positionPrev.y = u.centre.y),
                i.setMass(e, u.mass),
                i.setInertia(e, u.inertia),
                i.setPosition(e, u.centre)
            }
          }),
          (i.setCentre = function (e, t, n) {
            n
              ? ((e.positionPrev.x += t.x),
                (e.positionPrev.y += t.y),
                (e.position.x += t.x),
                (e.position.y += t.y))
              : ((e.positionPrev.x = t.x - (e.position.x - e.positionPrev.x)),
                (e.positionPrev.y = t.y - (e.position.y - e.positionPrev.y)),
                (e.position.x = t.x),
                (e.position.y = t.y))
          }),
          (i.setPosition = function (e, t) {
            var n = r.sub(t, e.position)
            ;(e.positionPrev.x += n.x), (e.positionPrev.y += n.y)
            for (var i = 0; i < e.parts.length; i++) {
              var a = e.parts[i]
              ;(a.position.x += n.x),
                (a.position.y += n.y),
                o.translate(a.vertices, n),
                l.update(a.bounds, a.vertices, e.velocity)
            }
          }),
          (i.setAngle = function (e, t) {
            var n = t - e.angle
            e.anglePrev += n
            for (var i = 0; i < e.parts.length; i++) {
              var a = e.parts[i]
              ;(a.angle += n),
                o.rotate(a.vertices, n, e.position),
                c.rotate(a.axes, n),
                l.update(a.bounds, a.vertices, e.velocity),
                i > 0 && r.rotateAbout(a.position, n, e.position, a.position)
            }
          }),
          (i.setVelocity = function (e, t) {
            ;(e.positionPrev.x = e.position.x - t.x),
              (e.positionPrev.y = e.position.y - t.y),
              (e.velocity.x = t.x),
              (e.velocity.y = t.y),
              (e.speed = r.magnitude(e.velocity))
          }),
          (i.setAngularVelocity = function (e, t) {
            ;(e.anglePrev = e.angle - t),
              (e.angularVelocity = t),
              (e.angularSpeed = Math.abs(e.angularVelocity))
          }),
          (i.translate = function (e, t) {
            i.setPosition(e, r.add(e.position, t))
          }),
          (i.rotate = function (e, t, n) {
            if (n) {
              var o = Math.cos(t),
                r = Math.sin(t),
                a = e.position.x - n.x,
                s = e.position.y - n.y
              i.setPosition(e, {
                x: n.x + (a * o - s * r),
                y: n.y + (a * r + s * o)
              }),
                i.setAngle(e, e.angle + t)
            } else i.setAngle(e, e.angle + t)
          }),
          (i.scale = function (e, t, n, r) {
            var a = 0,
              s = 0
            r = r || e.position
            for (var u = 0; u < e.parts.length; u++) {
              var d = e.parts[u]
              o.scale(d.vertices, t, n, r),
                (d.axes = c.fromVertices(d.vertices)),
                (d.area = o.area(d.vertices)),
                i.setMass(d, e.density * d.area),
                o.translate(d.vertices, { x: -d.position.x, y: -d.position.y }),
                i.setInertia(
                  d,
                  i._inertiaScale * o.inertia(d.vertices, d.mass)
                ),
                o.translate(d.vertices, { x: d.position.x, y: d.position.y }),
                u > 0 && ((a += d.area), (s += d.inertia)),
                (d.position.x = r.x + (d.position.x - r.x) * t),
                (d.position.y = r.y + (d.position.y - r.y) * n),
                l.update(d.bounds, d.vertices, e.velocity)
            }
            e.parts.length > 1 &&
              ((e.area = a),
              e.isStatic || (i.setMass(e, e.density * a), i.setInertia(e, s))),
              e.circleRadius &&
                (t === n ? (e.circleRadius *= t) : (e.circleRadius = null))
          }),
          (i.update = function (e, t, n, i) {
            var a = Math.pow(t * n * e.timeScale, 2),
              s = 1 - e.frictionAir * n * e.timeScale,
              u = e.position.x - e.positionPrev.x,
              d = e.position.y - e.positionPrev.y
            ;(e.velocity.x = u * s * i + (e.force.x / e.mass) * a),
              (e.velocity.y = d * s * i + (e.force.y / e.mass) * a),
              (e.positionPrev.x = e.position.x),
              (e.positionPrev.y = e.position.y),
              (e.position.x += e.velocity.x),
              (e.position.y += e.velocity.y),
              (e.angularVelocity =
                (e.angle - e.anglePrev) * s * i + (e.torque / e.inertia) * a),
              (e.anglePrev = e.angle),
              (e.angle += e.angularVelocity),
              (e.speed = r.magnitude(e.velocity)),
              (e.angularSpeed = Math.abs(e.angularVelocity))
            for (var p = 0; p < e.parts.length; p++) {
              var f = e.parts[p]
              o.translate(f.vertices, e.velocity),
                p > 0 &&
                  ((f.position.x += e.velocity.x),
                  (f.position.y += e.velocity.y)),
                0 !== e.angularVelocity &&
                  (o.rotate(f.vertices, e.angularVelocity, e.position),
                  c.rotate(f.axes, e.angularVelocity),
                  p > 0 &&
                    r.rotateAbout(
                      f.position,
                      e.angularVelocity,
                      e.position,
                      f.position
                    )),
                l.update(f.bounds, f.vertices, e.velocity)
            }
          }),
          (i.applyForce = function (e, t, n) {
            ;(e.force.x += n.x), (e.force.y += n.y)
            var i = t.x - e.position.x,
              o = t.y - e.position.y
            e.torque += i * n.y - o * n.x
          }),
          (i._totalProperties = function (e) {
            for (
              var t = { mass: 0, area: 0, inertia: 0, centre: { x: 0, y: 0 } },
                n = 1 === e.parts.length ? 0 : 1;
              n < e.parts.length;
              n++
            ) {
              var i = e.parts[n],
                o = i.mass !== 1 / 0 ? i.mass : 1
              ;(t.mass += o),
                (t.area += i.area),
                (t.inertia += i.inertia),
                (t.centre = r.add(t.centre, r.mult(i.position, o)))
            }
            return (t.centre = r.div(t.centre, t.mass)), t
          })
      })()
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(4)
      ;(i._motionWakeThreshold = 0.18),
        (i._motionSleepThreshold = 0.08),
        (i._minBias = 0.9),
        (i.update = function (e, t) {
          for (var n = t * t * t, o = 0; o < e.length; o++) {
            var r = e[o],
              a = r.speed * r.speed + r.angularSpeed * r.angularSpeed
            if (0 === r.force.x && 0 === r.force.y) {
              var s = Math.min(r.motion, a),
                l = Math.max(r.motion, a)
              ;(r.motion = i._minBias * s + (1 - i._minBias) * l),
                r.sleepThreshold > 0 && r.motion < i._motionSleepThreshold * n
                  ? ((r.sleepCounter += 1),
                    r.sleepCounter >= r.sleepThreshold && i.set(r, !0))
                  : r.sleepCounter > 0 && (r.sleepCounter -= 1)
            } else i.set(r, !1)
          }
        }),
        (i.afterCollisions = function (e, t) {
          for (var n = t * t * t, o = 0; o < e.length; o++) {
            var r = e[o]
            if (r.isActive) {
              var a = r.collision,
                s = a.bodyA.parent,
                l = a.bodyB.parent
              if (
                !((s.isSleeping && l.isSleeping) || s.isStatic || l.isStatic) &&
                (s.isSleeping || l.isSleeping)
              ) {
                var c = s.isSleeping && !s.isStatic ? s : l,
                  u = c === s ? l : s
                !c.isStatic &&
                  u.motion > i._motionWakeThreshold * n &&
                  i.set(c, !1)
              }
            }
          }
        }),
        (i.set = function (e, t) {
          var n = e.isSleeping
          t
            ? ((e.isSleeping = !0),
              (e.sleepCounter = e.sleepThreshold),
              (e.positionImpulse.x = 0),
              (e.positionImpulse.y = 0),
              (e.positionPrev.x = e.position.x),
              (e.positionPrev.y = e.position.y),
              (e.anglePrev = e.angle),
              (e.speed = 0),
              (e.angularSpeed = 0),
              (e.motion = 0),
              n || o.trigger(e, 'sleepStart'))
            : ((e.isSleeping = !1),
              (e.sleepCounter = 0),
              n && o.trigger(e, 'sleepEnd'))
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(3),
        r = n(2),
        a = n(7),
        s = n(1),
        l = n(10),
        c = n(0)
      ;(i._warming = 0.4),
        (i._torqueDampen = 1),
        (i._minLength = 1e-6),
        (i.create = function (e) {
          var t = e
          t.bodyA && !t.pointA && (t.pointA = { x: 0, y: 0 }),
            t.bodyB && !t.pointB && (t.pointB = { x: 0, y: 0 })
          var n = t.bodyA ? r.add(t.bodyA.position, t.pointA) : t.pointA,
            i = t.bodyB ? r.add(t.bodyB.position, t.pointB) : t.pointB,
            o = r.magnitude(r.sub(n, i))
          ;(t.length = void 0 !== t.length ? t.length : o),
            (t.id = t.id || c.nextId()),
            (t.label = t.label || 'Constraint'),
            (t.type = 'constraint'),
            (t.stiffness = t.stiffness || (t.length > 0 ? 1 : 0.7)),
            (t.damping = t.damping || 0),
            (t.angularStiffness = t.angularStiffness || 0),
            (t.angleA = t.bodyA ? t.bodyA.angle : t.angleA),
            (t.angleB = t.bodyB ? t.bodyB.angle : t.angleB),
            (t.plugin = {})
          var a = {
            visible: !0,
            lineWidth: 2,
            strokeStyle: '#ffffff',
            type: 'line',
            anchors: !0
          }
          return (
            0 === t.length && t.stiffness > 0.1
              ? ((a.type = 'pin'), (a.anchors = !1))
              : t.stiffness < 0.9 && (a.type = 'spring'),
            (t.render = c.extend(a, t.render)),
            t
          )
        }),
        (i.preSolveAll = function (e) {
          for (var t = 0; t < e.length; t += 1) {
            var n = e[t],
              i = n.constraintImpulse
            n.isStatic ||
              (0 === i.x && 0 === i.y && 0 === i.angle) ||
              ((n.position.x += i.x),
              (n.position.y += i.y),
              (n.angle += i.angle))
          }
        }),
        (i.solveAll = function (e, t) {
          for (var n = 0; n < e.length; n += 1) {
            var o = e[n],
              r = !o.bodyA || (o.bodyA && o.bodyA.isStatic),
              a = !o.bodyB || (o.bodyB && o.bodyB.isStatic)
            ;(r || a) && i.solve(e[n], t)
          }
          for (n = 0; n < e.length; n += 1)
            (r = !(o = e[n]).bodyA || (o.bodyA && o.bodyA.isStatic)),
              (a = !o.bodyB || (o.bodyB && o.bodyB.isStatic)),
              r || a || i.solve(e[n], t)
        }),
        (i.solve = function (e, t) {
          var n = e.bodyA,
            o = e.bodyB,
            a = e.pointA,
            s = e.pointB
          if (n || o) {
            n &&
              !n.isStatic &&
              (r.rotate(a, n.angle - e.angleA, a), (e.angleA = n.angle)),
              o &&
                !o.isStatic &&
                (r.rotate(s, o.angle - e.angleB, s), (e.angleB = o.angle))
            var l = a,
              c = s
            if (
              (n && (l = r.add(n.position, a)),
              o && (c = r.add(o.position, s)),
              l && c)
            ) {
              var u = r.sub(l, c),
                d = r.magnitude(u)
              d < i._minLength && (d = i._minLength)
              var p,
                f,
                v,
                m,
                y,
                g = (d - e.length) / d,
                x = e.stiffness < 1 ? e.stiffness * t : e.stiffness,
                h = r.mult(u, g * x),
                b = (n ? n.inverseMass : 0) + (o ? o.inverseMass : 0),
                S =
                  b + ((n ? n.inverseInertia : 0) + (o ? o.inverseInertia : 0))
              if (e.damping) {
                var w = r.create()
                ;(v = r.div(u, d)),
                  (y = r.sub(
                    (o && r.sub(o.position, o.positionPrev)) || w,
                    (n && r.sub(n.position, n.positionPrev)) || w
                  )),
                  (m = r.dot(v, y))
              }
              n &&
                !n.isStatic &&
                ((f = n.inverseMass / b),
                (n.constraintImpulse.x -= h.x * f),
                (n.constraintImpulse.y -= h.y * f),
                (n.position.x -= h.x * f),
                (n.position.y -= h.y * f),
                e.damping &&
                  ((n.positionPrev.x -= e.damping * v.x * m * f),
                  (n.positionPrev.y -= e.damping * v.y * m * f)),
                (p =
                  (r.cross(a, h) / S) *
                  i._torqueDampen *
                  n.inverseInertia *
                  (1 - e.angularStiffness)),
                (n.constraintImpulse.angle -= p),
                (n.angle -= p)),
                o &&
                  !o.isStatic &&
                  ((f = o.inverseMass / b),
                  (o.constraintImpulse.x += h.x * f),
                  (o.constraintImpulse.y += h.y * f),
                  (o.position.x += h.x * f),
                  (o.position.y += h.y * f),
                  e.damping &&
                    ((o.positionPrev.x += e.damping * v.x * m * f),
                    (o.positionPrev.y += e.damping * v.y * m * f)),
                  (p =
                    (r.cross(s, h) / S) *
                    i._torqueDampen *
                    o.inverseInertia *
                    (1 - e.angularStiffness)),
                  (o.constraintImpulse.angle += p),
                  (o.angle += p))
            }
          }
        }),
        (i.postSolveAll = function (e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t],
              c = n.constraintImpulse
            if (!(n.isStatic || (0 === c.x && 0 === c.y && 0 === c.angle))) {
              a.set(n, !1)
              for (var u = 0; u < n.parts.length; u++) {
                var d = n.parts[u]
                o.translate(d.vertices, c),
                  u > 0 && ((d.position.x += c.x), (d.position.y += c.y)),
                  0 !== c.angle &&
                    (o.rotate(d.vertices, c.angle, n.position),
                    l.rotate(d.axes, c.angle),
                    u > 0 &&
                      r.rotateAbout(
                        d.position,
                        c.angle,
                        n.position,
                        d.position
                      )),
                  s.update(d.bounds, d.vertices, n.velocity)
              }
              ;(c.angle *= i._warming), (c.x *= i._warming), (c.y *= i._warming)
            }
          }
        }),
        (i.pointAWorld = function (e) {
          return {
            x: (e.bodyA ? e.bodyA.position.x : 0) + e.pointA.x,
            y: (e.bodyA ? e.bodyA.position.y : 0) + e.pointA.y
          }
        }),
        (i.pointBWorld = function (e) {
          return {
            x: (e.bodyB ? e.bodyB.position.x : 0) + e.pointB.x,
            y: (e.bodyB ? e.bodyB.position.y : 0) + e.pointB.y
          }
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(17)
      ;(i.create = function (e, t) {
        var n = e.bodyA,
          o = e.bodyB,
          r = e.parentA,
          a = e.parentB,
          s = {
            id: i.id(n, o),
            bodyA: n,
            bodyB: o,
            contacts: {},
            activeContacts: [],
            separation: 0,
            isActive: !0,
            confirmedActive: !0,
            isSensor: n.isSensor || o.isSensor,
            timeCreated: t,
            timeUpdated: t,
            inverseMass: r.inverseMass + a.inverseMass,
            friction: Math.min(r.friction, a.friction),
            frictionStatic: Math.max(r.frictionStatic, a.frictionStatic),
            restitution: Math.max(r.restitution, a.restitution),
            slop: Math.max(r.slop, a.slop)
          }
        return i.update(s, e, t), s
      }),
        (i.update = function (e, t, n) {
          var r = e.contacts,
            a = t.supports,
            s = e.activeContacts,
            l = t.parentA,
            c = t.parentB
          if (
            ((e.collision = t),
            (e.inverseMass = l.inverseMass + c.inverseMass),
            (e.friction = Math.min(l.friction, c.friction)),
            (e.frictionStatic = Math.max(l.frictionStatic, c.frictionStatic)),
            (e.restitution = Math.max(l.restitution, c.restitution)),
            (e.slop = Math.max(l.slop, c.slop)),
            (s.length = 0),
            t.collided)
          ) {
            for (var u = 0; u < a.length; u++) {
              var d = a[u],
                p = o.id(d),
                f = r[p]
              f ? s.push(f) : s.push((r[p] = o.create(d)))
            }
            ;(e.separation = t.depth), i.setActive(e, !0, n)
          } else !0 === e.isActive && i.setActive(e, !1, n)
        }),
        (i.setActive = function (e, t, n) {
          t
            ? ((e.isActive = !0), (e.timeUpdated = n))
            : ((e.isActive = !1), (e.activeContacts.length = 0))
        }),
        (i.id = function (e, t) {
          return e.id < t.id ? 'A' + e.id + 'B' + t.id : 'A' + t.id + 'B' + e.id
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(2),
        r = n(0)
      ;(i.fromVertices = function (e) {
        for (var t = {}, n = 0; n < e.length; n++) {
          var i = (n + 1) % e.length,
            a = o.normalise({ x: e[i].y - e[n].y, y: e[n].x - e[i].x }),
            s = 0 === a.y ? 1 / 0 : a.x / a.y
          t[(s = s.toFixed(3).toString())] = a
        }
        return r.values(t)
      }),
        (i.rotate = function (e, t) {
          if (0 !== t)
            for (
              var n = Math.cos(t), i = Math.sin(t), o = 0;
              o < e.length;
              o++
            ) {
              var r,
                a = e[o]
              ;(r = a.x * n - a.y * i), (a.y = a.x * i + a.y * n), (a.x = r)
            }
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(3),
        r = n(0),
        a = n(6),
        s = n(1),
        l = n(2)
      ;(i.rectangle = function (e, t, n, i, s) {
        s = s || {}
        var l = {
          label: 'Rectangle Body',
          position: { x: e, y: t },
          vertices: o.fromPath(
            'L 0 0 L ' + n + ' 0 L ' + n + ' ' + i + ' L 0 ' + i
          )
        }
        if (s.chamfer) {
          var c = s.chamfer
          ;(l.vertices = o.chamfer(
            l.vertices,
            c.radius,
            c.quality,
            c.qualityMin,
            c.qualityMax
          )),
            delete s.chamfer
        }
        return a.create(r.extend({}, l, s))
      }),
        (i.trapezoid = function (e, t, n, i, s, l) {
          l = l || {}
          var c,
            u = n * (s *= 0.5),
            d = u + (1 - 2 * s) * n,
            p = d + u
          c =
            s < 0.5
              ? 'L 0 0 L ' +
                u +
                ' ' +
                -i +
                ' L ' +
                d +
                ' ' +
                -i +
                ' L ' +
                p +
                ' 0'
              : 'L 0 0 L ' + d + ' ' + -i + ' L ' + p + ' 0'
          var f = {
            label: 'Trapezoid Body',
            position: { x: e, y: t },
            vertices: o.fromPath(c)
          }
          if (l.chamfer) {
            var v = l.chamfer
            ;(f.vertices = o.chamfer(
              f.vertices,
              v.radius,
              v.quality,
              v.qualityMin,
              v.qualityMax
            )),
              delete l.chamfer
          }
          return a.create(r.extend({}, f, l))
        }),
        (i.circle = function (e, t, n, o, a) {
          o = o || {}
          var s = { label: 'Circle Body', circleRadius: n }
          a = a || 25
          var l = Math.ceil(Math.max(10, Math.min(a, n)))
          return (
            l % 2 == 1 && (l += 1), i.polygon(e, t, l, n, r.extend({}, s, o))
          )
        }),
        (i.polygon = function (e, t, n, s, l) {
          if (((l = l || {}), n < 3)) return i.circle(e, t, s, l)
          for (
            var c = (2 * Math.PI) / n, u = '', d = 0.5 * c, p = 0;
            p < n;
            p += 1
          ) {
            var f = d + p * c,
              v = Math.cos(f) * s,
              m = Math.sin(f) * s
            u += 'L ' + v.toFixed(3) + ' ' + m.toFixed(3) + ' '
          }
          var y = {
            label: 'Polygon Body',
            position: { x: e, y: t },
            vertices: o.fromPath(u)
          }
          if (l.chamfer) {
            var g = l.chamfer
            ;(y.vertices = o.chamfer(
              y.vertices,
              g.radius,
              g.quality,
              g.qualityMin,
              g.qualityMax
            )),
              delete l.chamfer
          }
          return a.create(r.extend({}, y, l))
        }),
        (i.fromVertices = function (e, t, n, i, c, u, d, p) {
          var f,
            v,
            m,
            y,
            g,
            x,
            h,
            b,
            S,
            w,
            A = r.getDecomp()
          for (
            f = Boolean(A && A.quickDecomp),
              i = i || {},
              m = [],
              c = void 0 !== c && c,
              u = void 0 !== u ? u : 0.01,
              d = void 0 !== d ? d : 10,
              p = void 0 !== p ? p : 0.01,
              r.isArray(n[0]) || (n = [n]),
              S = 0;
            S < n.length;
            S += 1
          )
            if (
              ((g = n[S]),
              !(y = o.isConvex(g)) &&
                !f &&
                r.warnOnce(
                  "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                ),
              y || !f)
            )
              (g = y ? o.clockwiseSort(g) : o.hull(g)),
                m.push({ position: { x: e, y: t }, vertices: g })
            else {
              var P = g.map(function (e) {
                return [e.x, e.y]
              })
              A.makeCCW(P),
                !1 !== u && A.removeCollinearPoints(P, u),
                !1 !== p &&
                  A.removeDuplicatePoints &&
                  A.removeDuplicatePoints(P, p)
              var M = A.quickDecomp(P)
              for (x = 0; x < M.length; x++) {
                var C = M[x].map(function (e) {
                  return { x: e[0], y: e[1] }
                })
                ;(d > 0 && o.area(C) < d) ||
                  m.push({ position: o.centre(C), vertices: C })
              }
            }
          for (x = 0; x < m.length; x++) m[x] = a.create(r.extend(m[x], i))
          if (c)
            for (x = 0; x < m.length; x++) {
              var B = m[x]
              for (h = x + 1; h < m.length; h++) {
                var _ = m[h]
                if (s.overlaps(B.bounds, _.bounds)) {
                  var k = B.vertices,
                    I = _.vertices
                  for (b = 0; b < B.vertices.length; b++)
                    for (w = 0; w < _.vertices.length; w++) {
                      var T = l.magnitudeSquared(
                          l.sub(k[(b + 1) % k.length], I[w])
                        ),
                        R = l.magnitudeSquared(
                          l.sub(k[b], I[(w + 1) % I.length])
                        )
                      T < 5 &&
                        R < 5 &&
                        ((k[b].isInternal = !0), (I[w].isInternal = !0))
                    }
                }
              }
            }
          return m.length > 1
            ? ((v = a.create(r.extend({ parts: m.slice(0) }, i))),
              a.setPosition(v, { x: e, y: t }),
              v)
            : m[0]
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(0)
      ;(i.create = function (e) {
        var t = {}
        return (
          e ||
            o.log(
              'Mouse.create: element was undefined, defaulting to document.body',
              'warn'
            ),
          (t.element = e || document.body),
          (t.absolute = { x: 0, y: 0 }),
          (t.position = { x: 0, y: 0 }),
          (t.mousedownPosition = { x: 0, y: 0 }),
          (t.mouseupPosition = { x: 0, y: 0 }),
          (t.offset = { x: 0, y: 0 }),
          (t.scale = { x: 1, y: 1 }),
          (t.wheelDelta = 0),
          (t.button = -1),
          (t.pixelRatio =
            parseInt(t.element.getAttribute('data-pixel-ratio'), 10) || 1),
          (t.sourceEvents = {
            mousemove: null,
            mousedown: null,
            mouseup: null,
            mousewheel: null
          }),
          (t.mousemove = function (e) {
            var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio)
            e.changedTouches && ((t.button = 0), e.preventDefault()),
              (t.absolute.x = n.x),
              (t.absolute.y = n.y),
              (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
              (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
              (t.sourceEvents.mousemove = e)
          }),
          (t.mousedown = function (e) {
            var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio)
            e.changedTouches
              ? ((t.button = 0), e.preventDefault())
              : (t.button = e.button),
              (t.absolute.x = n.x),
              (t.absolute.y = n.y),
              (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
              (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
              (t.mousedownPosition.x = t.position.x),
              (t.mousedownPosition.y = t.position.y),
              (t.sourceEvents.mousedown = e)
          }),
          (t.mouseup = function (e) {
            var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio)
            e.changedTouches && e.preventDefault(),
              (t.button = -1),
              (t.absolute.x = n.x),
              (t.absolute.y = n.y),
              (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
              (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
              (t.mouseupPosition.x = t.position.x),
              (t.mouseupPosition.y = t.position.y),
              (t.sourceEvents.mouseup = e)
          }),
          (t.mousewheel = function (e) {
            ;(t.wheelDelta = Math.max(
              -1,
              Math.min(1, e.wheelDelta || -e.detail)
            )),
              e.preventDefault()
          }),
          i.setElement(t, t.element),
          t
        )
      }),
        (i.setElement = function (e, t) {
          ;(e.element = t),
            t.addEventListener('mousemove', e.mousemove),
            t.addEventListener('mousedown', e.mousedown),
            t.addEventListener('mouseup', e.mouseup),
            t.addEventListener('mousewheel', e.mousewheel),
            t.addEventListener('DOMMouseScroll', e.mousewheel),
            t.addEventListener('touchmove', e.mousemove),
            t.addEventListener('touchstart', e.mousedown),
            t.addEventListener('touchend', e.mouseup)
        }),
        (i.clearSourceEvents = function (e) {
          ;(e.sourceEvents.mousemove = null),
            (e.sourceEvents.mousedown = null),
            (e.sourceEvents.mouseup = null),
            (e.sourceEvents.mousewheel = null),
            (e.wheelDelta = 0)
        }),
        (i.setOffset = function (e, t) {
          ;(e.offset.x = t.x),
            (e.offset.y = t.y),
            (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
            (e.position.y = e.absolute.y * e.scale.y + e.offset.y)
        }),
        (i.setScale = function (e, t) {
          ;(e.scale.x = t.x),
            (e.scale.y = t.y),
            (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
            (e.position.y = e.absolute.y * e.scale.y + e.offset.y)
        }),
        (i._getRelativeMousePosition = function (e, t, n) {
          var i,
            o,
            r = t.getBoundingClientRect(),
            a =
              document.documentElement ||
              document.body.parentNode ||
              document.body,
            s =
              void 0 !== window.pageXOffset ? window.pageXOffset : a.scrollLeft,
            l =
              void 0 !== window.pageYOffset ? window.pageYOffset : a.scrollTop,
            c = e.changedTouches
          return (
            c
              ? ((i = c[0].pageX - r.left - s), (o = c[0].pageY - r.top - l))
              : ((i = e.pageX - r.left - s), (o = e.pageY - r.top - l)),
            {
              x: i / ((t.clientWidth / (t.width || t.clientWidth)) * n),
              y: o / ((t.clientHeight / (t.height || t.clientHeight)) * n)
            }
          )
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(14),
        r = n(9),
        a = n(1)
      ;(i.collisions = function (e, t) {
        for (var n = [], s = t.pairs.table, l = 0; l < e.length; l++) {
          var c = e[l][0],
            u = e[l][1]
          if (
            ((!c.isStatic && !c.isSleeping) ||
              (!u.isStatic && !u.isSleeping)) &&
            i.canCollide(c.collisionFilter, u.collisionFilter) &&
            a.overlaps(c.bounds, u.bounds)
          )
            for (var d = c.parts.length > 1 ? 1 : 0; d < c.parts.length; d++)
              for (
                var p = c.parts[d], f = u.parts.length > 1 ? 1 : 0;
                f < u.parts.length;
                f++
              ) {
                var v = u.parts[f]
                if ((p === c && v === u) || a.overlaps(p.bounds, v.bounds)) {
                  var m,
                    y = s[r.id(p, v)]
                  m = y && y.isActive ? y.collision : null
                  var g = o.collides(p, v, m)
                  g.collided && n.push(g)
                }
              }
        }
        return n
      }),
        (i.canCollide = function (e, t) {
          return e.group === t.group && 0 !== e.group
            ? e.group > 0
            : 0 != (e.mask & t.category) && 0 != (t.mask & e.category)
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(3),
        r = n(2)
      ;(i.collides = function (e, t, n) {
        var a,
          s,
          l,
          c,
          u = !1
        if (n) {
          var d = e.parent,
            p = t.parent,
            f =
              d.speed * d.speed +
              d.angularSpeed * d.angularSpeed +
              p.speed * p.speed +
              p.angularSpeed * p.angularSpeed
          ;(u = n && n.collided && f < 0.2), (c = n)
        } else c = { collided: !1, bodyA: e, bodyB: t }
        if (n && u) {
          var v = c.axisBody,
            m = v === e ? t : e,
            y = [v.axes[n.axisNumber]]
          if (
            ((l = i._overlapAxes(v.vertices, m.vertices, y)),
            (c.reused = !0),
            l.overlap <= 0)
          )
            return (c.collided = !1), c
        } else {
          if ((a = i._overlapAxes(e.vertices, t.vertices, e.axes)).overlap <= 0)
            return (c.collided = !1), c
          if ((s = i._overlapAxes(t.vertices, e.vertices, t.axes)).overlap <= 0)
            return (c.collided = !1), c
          a.overlap < s.overlap
            ? ((l = a), (c.axisBody = e))
            : ((l = s), (c.axisBody = t)),
            (c.axisNumber = l.axisNumber)
        }
        ;(c.bodyA = e.id < t.id ? e : t),
          (c.bodyB = e.id < t.id ? t : e),
          (c.collided = !0),
          (c.depth = l.overlap),
          (c.parentA = c.bodyA.parent),
          (c.parentB = c.bodyB.parent),
          (e = c.bodyA),
          (t = c.bodyB),
          r.dot(l.axis, r.sub(t.position, e.position)) < 0
            ? (c.normal = { x: l.axis.x, y: l.axis.y })
            : (c.normal = { x: -l.axis.x, y: -l.axis.y }),
          (c.tangent = r.perp(c.normal)),
          (c.penetration = c.penetration || {}),
          (c.penetration.x = c.normal.x * c.depth),
          (c.penetration.y = c.normal.y * c.depth)
        var g = i._findSupports(e, t, c.normal),
          x = []
        if (
          (o.contains(e.vertices, g[0]) && x.push(g[0]),
          o.contains(e.vertices, g[1]) && x.push(g[1]),
          x.length < 2)
        ) {
          var h = i._findSupports(t, e, r.neg(c.normal))
          o.contains(t.vertices, h[0]) && x.push(h[0]),
            x.length < 2 && o.contains(t.vertices, h[1]) && x.push(h[1])
        }
        return x.length < 1 && (x = [g[0]]), (c.supports = x), c
      }),
        (i._overlapAxes = function (e, t, n) {
          for (
            var o,
              a,
              s = r._temp[0],
              l = r._temp[1],
              c = { overlap: Number.MAX_VALUE },
              u = 0;
            u < n.length;
            u++
          ) {
            if (
              ((a = n[u]),
              i._projectToAxis(s, e, a),
              i._projectToAxis(l, t, a),
              (o = Math.min(s.max - l.min, l.max - s.min)) <= 0)
            )
              return (c.overlap = o), c
            o < c.overlap && ((c.overlap = o), (c.axis = a), (c.axisNumber = u))
          }
          return c
        }),
        (i._projectToAxis = function (e, t, n) {
          for (var i = r.dot(t[0], n), o = i, a = 1; a < t.length; a += 1) {
            var s = r.dot(t[a], n)
            s > o ? (o = s) : s < i && (i = s)
          }
          ;(e.min = i), (e.max = o)
        }),
        (i._findSupports = function (e, t, n) {
          for (
            var i,
              o,
              a,
              s,
              l = Number.MAX_VALUE,
              c = r._temp[0],
              u = t.vertices,
              d = e.position,
              p = 0;
            p < u.length;
            p++
          )
            (o = u[p]),
              (c.x = o.x - d.x),
              (c.y = o.y - d.y),
              (i = -r.dot(n, c)) < l && ((l = i), (a = o))
          return (
            (o = u[a.index - 1 >= 0 ? a.index - 1 : u.length - 1]),
            (c.x = o.x - d.x),
            (c.y = o.y - d.y),
            (l = -r.dot(n, c)),
            (s = o),
            (o = u[(a.index + 1) % u.length]),
            (c.x = o.x - d.x),
            (c.y = o.y - d.y),
            (i = -r.dot(n, c)) < l && (s = o),
            [a, s]
          )
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(0)
      ;(i._registry = {}),
        (i.register = function (e) {
          if (
            (i.isPlugin(e) ||
              o.warn(
                'Plugin.register:',
                i.toString(e),
                'does not implement all required fields.'
              ),
            e.name in i._registry)
          ) {
            var t = i._registry[e.name],
              n = i.versionParse(e.version).number,
              r = i.versionParse(t.version).number
            n > r
              ? (o.warn(
                  'Plugin.register:',
                  i.toString(t),
                  'was upgraded to',
                  i.toString(e)
                ),
                (i._registry[e.name] = e))
              : n < r
              ? o.warn(
                  'Plugin.register:',
                  i.toString(t),
                  'can not be downgraded to',
                  i.toString(e)
                )
              : e !== t &&
                o.warn(
                  'Plugin.register:',
                  i.toString(e),
                  'is already registered to different plugin object'
                )
          } else i._registry[e.name] = e
          return e
        }),
        (i.resolve = function (e) {
          return i._registry[i.dependencyParse(e).name]
        }),
        (i.toString = function (e) {
          return 'string' == typeof e
            ? e
            : (e.name || 'anonymous') + '@' + (e.version || e.range || '0.0.0')
        }),
        (i.isPlugin = function (e) {
          return e && e.name && e.version && e.install
        }),
        (i.isUsed = function (e, t) {
          return e.used.indexOf(t) > -1
        }),
        (i.isFor = function (e, t) {
          var n = e.for && i.dependencyParse(e.for)
          return (
            !e.for ||
            (t.name === n.name && i.versionSatisfies(t.version, n.range))
          )
        }),
        (i.use = function (e, t) {
          if (
            ((e.uses = (e.uses || []).concat(t || [])), 0 !== e.uses.length)
          ) {
            for (
              var n = i.dependencies(e),
                r = o.topologicalSort(n),
                a = [],
                s = 0;
              s < r.length;
              s += 1
            )
              if (r[s] !== e.name) {
                var l = i.resolve(r[s])
                l
                  ? i.isUsed(e, l.name) ||
                    (i.isFor(l, e) ||
                      (o.warn(
                        'Plugin.use:',
                        i.toString(l),
                        'is for',
                        l.for,
                        'but installed on',
                        i.toString(e) + '.'
                      ),
                      (l._warned = !0)),
                    l.install
                      ? l.install(e)
                      : (o.warn(
                          'Plugin.use:',
                          i.toString(l),
                          'does not specify an install function.'
                        ),
                        (l._warned = !0)),
                    l._warned
                      ? (a.push('🔶 ' + i.toString(l)), delete l._warned)
                      : a.push('✅ ' + i.toString(l)),
                    e.used.push(l.name))
                  : a.push('❌ ' + r[s])
              }
            a.length > 0 && o.info(a.join('  '))
          } else
            o.warn(
              'Plugin.use:',
              i.toString(e),
              'does not specify any dependencies to install.'
            )
        }),
        (i.dependencies = function (e, t) {
          var n = i.dependencyParse(e),
            r = n.name
          if (!(r in (t = t || {}))) {
            ;(e = i.resolve(e) || e),
              (t[r] = o.map(e.uses || [], function (t) {
                i.isPlugin(t) && i.register(t)
                var r = i.dependencyParse(t),
                  a = i.resolve(t)
                return (
                  a && !i.versionSatisfies(a.version, r.range)
                    ? (o.warn(
                        'Plugin.dependencies:',
                        i.toString(a),
                        'does not satisfy',
                        i.toString(r),
                        'used by',
                        i.toString(n) + '.'
                      ),
                      (a._warned = !0),
                      (e._warned = !0))
                    : a ||
                      (o.warn(
                        'Plugin.dependencies:',
                        i.toString(t),
                        'used by',
                        i.toString(n),
                        'could not be resolved.'
                      ),
                      (e._warned = !0)),
                  r.name
                )
              }))
            for (var a = 0; a < t[r].length; a += 1) i.dependencies(t[r][a], t)
            return t
          }
        }),
        (i.dependencyParse = function (e) {
          return o.isString(e)
            ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/.test(
                e
              ) ||
                o.warn(
                  'Plugin.dependencyParse:',
                  e,
                  'is not a valid dependency string.'
                ),
              { name: e.split('@')[0], range: e.split('@')[1] || '*' })
            : { name: e.name, range: e.range || e.version }
        }),
        (i.versionParse = function (e) {
          var t = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-]+)?$/
          t.test(e) ||
            o.warn(
              'Plugin.versionParse:',
              e,
              'is not a valid version or range.'
            )
          var n = t.exec(e),
            i = Number(n[4]),
            r = Number(n[5]),
            a = Number(n[6])
          return {
            isRange: Boolean(n[1] || n[2]),
            version: n[3],
            range: e,
            operator: n[1] || n[2] || '',
            major: i,
            minor: r,
            patch: a,
            parts: [i, r, a],
            prerelease: n[7],
            number: 1e8 * i + 1e4 * r + a
          }
        }),
        (i.versionSatisfies = function (e, t) {
          t = t || '*'
          var n = i.versionParse(t),
            o = i.versionParse(e)
          if (n.isRange) {
            if ('*' === n.operator || '*' === e) return !0
            if ('>' === n.operator) return o.number > n.number
            if ('>=' === n.operator) return o.number >= n.number
            if ('~' === n.operator)
              return (
                o.major === n.major && o.minor === n.minor && o.patch >= n.patch
              )
            if ('^' === n.operator)
              return n.major > 0
                ? o.major === n.major && o.number >= n.number
                : n.minor > 0
                ? o.minor === n.minor && o.patch >= n.patch
                : o.patch === n.patch
          }
          return e === t || '*' === e
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(0),
        r = n(5),
        a = n(1),
        s = n(4),
        l = n(2),
        c = n(12)
      !(function () {
        var e, t
        'undefined' != typeof window &&
          ((e =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (e) {
              window.setTimeout(function () {
                e(o.now())
              }, 1e3 / 60)
            }),
          (t =
            window.cancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.msCancelAnimationFrame)),
          (i._goodFps = 30),
          (i._goodDelta = 1e3 / 60),
          (i.create = function (e) {
            var t = {
                controller: i,
                engine: null,
                element: null,
                canvas: null,
                mouse: null,
                frameRequestId: null,
                timing: {
                  historySize: 60,
                  delta: 0,
                  deltaHistory: [],
                  lastTime: 0,
                  lastTimestamp: 0,
                  lastElapsed: 0,
                  timestampElapsed: 0,
                  timestampElapsedHistory: [],
                  engineDeltaHistory: [],
                  engineElapsedHistory: [],
                  elapsedHistory: []
                },
                options: {
                  width: 800,
                  height: 600,
                  pixelRatio: 1,
                  background: '#14151f',
                  wireframeBackground: '#14151f',
                  hasBounds: !!e.bounds,
                  enabled: !0,
                  wireframes: !0,
                  showSleeping: !0,
                  showDebug: !1,
                  showStats: !1,
                  showPerformance: !1,
                  showBroadphase: !1,
                  showBounds: !1,
                  showVelocity: !1,
                  showCollisions: !1,
                  showSeparations: !1,
                  showAxes: !1,
                  showPositions: !1,
                  showAngleIndicator: !1,
                  showIds: !1,
                  showVertexNumbers: !1,
                  showConvexHulls: !1,
                  showInternalEdges: !1,
                  showMousePosition: !1
                }
              },
              n = o.extend(t, e)
            return (
              n.canvas &&
                ((n.canvas.width = n.options.width || n.canvas.width),
                (n.canvas.height = n.options.height || n.canvas.height)),
              (n.mouse = e.mouse),
              (n.engine = e.engine),
              (n.canvas = n.canvas || d(n.options.width, n.options.height)),
              (n.context = n.canvas.getContext('2d')),
              (n.textures = {}),
              (n.bounds = n.bounds || {
                min: { x: 0, y: 0 },
                max: { x: n.canvas.width, y: n.canvas.height }
              }),
              1 !== n.options.pixelRatio &&
                i.setPixelRatio(n, n.options.pixelRatio),
              o.isElement(n.element)
                ? n.element.appendChild(n.canvas)
                : n.canvas.parentNode ||
                  o.log(
                    'Render.create: options.element was undefined, render.canvas was created but not appended',
                    'warn'
                  ),
              n
            )
          }),
          (i.run = function (t) {
            !(function o(r) {
              ;(t.frameRequestId = e(o)),
                n(t, r),
                i.world(t, r),
                (t.options.showStats || t.options.showDebug) &&
                  i.stats(t, t.context, r),
                (t.options.showPerformance || t.options.showDebug) &&
                  i.performance(t, t.context, r)
            })()
          }),
          (i.stop = function (e) {
            t(e.frameRequestId)
          }),
          (i.setPixelRatio = function (e, t) {
            var n = e.options,
              i = e.canvas
            'auto' === t && (t = p(i)),
              (n.pixelRatio = t),
              i.setAttribute('data-pixel-ratio', t),
              (i.width = n.width * t),
              (i.height = n.height * t),
              (i.style.width = n.width + 'px'),
              (i.style.height = n.height + 'px')
          }),
          (i.lookAt = function (e, t, n, i) {
            ;(i = void 0 === i || i),
              (t = o.isArray(t) ? t : [t]),
              (n = n || { x: 0, y: 0 })
            for (
              var r = {
                  min: { x: 1 / 0, y: 1 / 0 },
                  max: { x: -1 / 0, y: -1 / 0 }
                },
                a = 0;
              a < t.length;
              a += 1
            ) {
              var s = t[a],
                l = s.bounds ? s.bounds.min : s.min || s.position || s,
                u = s.bounds ? s.bounds.max : s.max || s.position || s
              l &&
                u &&
                (l.x < r.min.x && (r.min.x = l.x),
                u.x > r.max.x && (r.max.x = u.x),
                l.y < r.min.y && (r.min.y = l.y),
                u.y > r.max.y && (r.max.y = u.y))
            }
            var d = r.max.x - r.min.x + 2 * n.x,
              p = r.max.y - r.min.y + 2 * n.y,
              f = e.canvas.height,
              v = e.canvas.width / f,
              m = d / p,
              y = 1,
              g = 1
            m > v ? (g = m / v) : (y = v / m),
              (e.options.hasBounds = !0),
              (e.bounds.min.x = r.min.x),
              (e.bounds.max.x = r.min.x + d * y),
              (e.bounds.min.y = r.min.y),
              (e.bounds.max.y = r.min.y + p * g),
              i &&
                ((e.bounds.min.x += 0.5 * d - d * y * 0.5),
                (e.bounds.max.x += 0.5 * d - d * y * 0.5),
                (e.bounds.min.y += 0.5 * p - p * g * 0.5),
                (e.bounds.max.y += 0.5 * p - p * g * 0.5)),
              (e.bounds.min.x -= n.x),
              (e.bounds.max.x -= n.x),
              (e.bounds.min.y -= n.y),
              (e.bounds.max.y -= n.y),
              e.mouse &&
                (c.setScale(e.mouse, {
                  x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                  y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height
                }),
                c.setOffset(e.mouse, e.bounds.min))
          }),
          (i.startViewTransform = function (e) {
            var t = e.bounds.max.x - e.bounds.min.x,
              n = e.bounds.max.y - e.bounds.min.y,
              i = t / e.options.width,
              o = n / e.options.height
            e.context.setTransform(
              e.options.pixelRatio / i,
              0,
              0,
              e.options.pixelRatio / o,
              0,
              0
            ),
              e.context.translate(-e.bounds.min.x, -e.bounds.min.y)
          }),
          (i.endViewTransform = function (e) {
            e.context.setTransform(
              e.options.pixelRatio,
              0,
              0,
              e.options.pixelRatio,
              0,
              0
            )
          }),
          (i.world = function (e, t) {
            var n,
              u = o.now(),
              d = e.engine,
              p = d.world,
              f = e.canvas,
              m = e.context,
              y = e.options,
              g = e.timing,
              x = r.allBodies(p),
              h = r.allConstraints(p),
              b = y.wireframes ? y.wireframeBackground : y.background,
              S = [],
              w = [],
              A = { timestamp: d.timing.timestamp }
            if (
              (s.trigger(e, 'beforeRender', A),
              e.currentBackground !== b && v(e, b),
              (m.globalCompositeOperation = 'source-in'),
              (m.fillStyle = 'transparent'),
              m.fillRect(0, 0, f.width, f.height),
              (m.globalCompositeOperation = 'source-over'),
              y.hasBounds)
            ) {
              for (n = 0; n < x.length; n++) {
                var P = x[n]
                a.overlaps(P.bounds, e.bounds) && S.push(P)
              }
              for (n = 0; n < h.length; n++) {
                var M = h[n],
                  C = M.bodyA,
                  B = M.bodyB,
                  _ = M.pointA,
                  k = M.pointB
                C && (_ = l.add(C.position, M.pointA)),
                  B && (k = l.add(B.position, M.pointB)),
                  _ &&
                    k &&
                    (a.contains(e.bounds, _) || a.contains(e.bounds, k)) &&
                    w.push(M)
              }
              i.startViewTransform(e),
                e.mouse &&
                  (c.setScale(e.mouse, {
                    x: (e.bounds.max.x - e.bounds.min.x) / e.options.width,
                    y: (e.bounds.max.y - e.bounds.min.y) / e.options.height
                  }),
                  c.setOffset(e.mouse, e.bounds.min))
            } else
              (w = h),
                (S = x),
                1 !== e.options.pixelRatio &&
                  e.context.setTransform(
                    e.options.pixelRatio,
                    0,
                    0,
                    e.options.pixelRatio,
                    0,
                    0
                  )
            !y.wireframes || (d.enableSleeping && y.showSleeping)
              ? i.bodies(e, S, m)
              : (y.showConvexHulls && i.bodyConvexHulls(e, S, m),
                i.bodyWireframes(e, S, m)),
              y.showBounds && i.bodyBounds(e, S, m),
              (y.showAxes || y.showAngleIndicator) && i.bodyAxes(e, S, m),
              y.showPositions && i.bodyPositions(e, S, m),
              y.showVelocity && i.bodyVelocity(e, S, m),
              y.showIds && i.bodyIds(e, S, m),
              y.showSeparations && i.separations(e, d.pairs.list, m),
              y.showCollisions && i.collisions(e, d.pairs.list, m),
              y.showVertexNumbers && i.vertexNumbers(e, S, m),
              y.showMousePosition && i.mousePosition(e, e.mouse, m),
              i.constraints(w, m),
              y.showBroadphase && i.grid(e, d.grid, m),
              y.hasBounds && i.endViewTransform(e),
              s.trigger(e, 'afterRender', A),
              (g.lastElapsed = o.now() - u)
          }),
          (i.stats = function (e, t, n) {
            for (
              var i = e.engine,
                o = i.world,
                a = r.allBodies(o),
                s = 0,
                l = 0,
                c = 0;
              c < a.length;
              c += 1
            )
              s += a[c].parts.length
            var u = {
              Part: s,
              Body: a.length,
              Cons: r.allConstraints(o).length,
              Comp: r.allComposites(o).length,
              Pair: i.pairs.list.length
            }
            for (var d in ((t.fillStyle = '#0e0f19'),
            t.fillRect(l, 0, 302.5, 44),
            (t.font = '12px Arial'),
            (t.textBaseline = 'top'),
            (t.textAlign = 'right'),
            u)) {
              var p = u[d]
              ;(t.fillStyle = '#aaa'),
                t.fillText(d, l + 55, 8),
                (t.fillStyle = '#eee'),
                t.fillText(p, l + 55, 26),
                (l += 55)
            }
          }),
          (i.performance = function (e, t) {
            var n = e.engine,
              o = e.timing,
              r = o.deltaHistory,
              a = o.elapsedHistory,
              s = o.timestampElapsedHistory,
              l = o.engineDeltaHistory,
              c = o.engineElapsedHistory,
              d = n.timing.lastDelta,
              p = u(r),
              f = u(a),
              v = u(l),
              m = u(c),
              y = u(s) / p || 0,
              g = 1e3 / p || 0
            ;(t.fillStyle = '#0e0f19'),
              t.fillRect(0, 50, 370, 34),
              i.status(
                t,
                10,
                69,
                60,
                4,
                r.length,
                Math.round(g) + ' fps',
                g / i._goodFps,
                function (e) {
                  return r[e] / p - 1
                }
              ),
              i.status(
                t,
                82,
                69,
                60,
                4,
                l.length,
                d.toFixed(2) + ' dt',
                i._goodDelta / d,
                function (e) {
                  return l[e] / v - 1
                }
              ),
              i.status(
                t,
                154,
                69,
                60,
                4,
                c.length,
                m.toFixed(2) + ' ut',
                1 - m / i._goodFps,
                function (e) {
                  return c[e] / m - 1
                }
              ),
              i.status(
                t,
                226,
                69,
                60,
                4,
                a.length,
                f.toFixed(2) + ' rt',
                1 - f / i._goodFps,
                function (e) {
                  return a[e] / f - 1
                }
              ),
              i.status(
                t,
                298,
                69,
                60,
                4,
                s.length,
                y.toFixed(2) + ' x',
                y * y * y,
                function (e) {
                  return (s[e] / r[e] / y || 0) - 1
                }
              )
          }),
          (i.status = function (e, t, n, i, r, a, s, l, c) {
            ;(e.strokeStyle = '#888'),
              (e.fillStyle = '#444'),
              (e.lineWidth = 1),
              e.fillRect(t, n + 7, i, 1),
              e.beginPath(),
              e.moveTo(t, n + 7 - r * o.clamp(0.4 * c(0), -2, 2))
            for (var u = 0; u < i; u += 1)
              e.lineTo(
                t + u,
                n + 7 - (u < a ? r * o.clamp(0.4 * c(u), -2, 2) : 0)
              )
            e.stroke(),
              (e.fillStyle =
                'hsl(' + o.clamp(25 + 95 * l, 0, 120) + ',100%,60%)'),
              e.fillRect(t, n - 7, 4, 4),
              (e.font = '12px Arial'),
              (e.textBaseline = 'middle'),
              (e.textAlign = 'right'),
              (e.fillStyle = '#eee'),
              e.fillText(s, t + i, n - 5)
          }),
          (i.constraints = function (e, t) {
            for (var n = t, i = 0; i < e.length; i++) {
              var r = e[i]
              if (r.render.visible && r.pointA && r.pointB) {
                var a,
                  s,
                  c = r.bodyA,
                  u = r.bodyB
                if (
                  ((a = c ? l.add(c.position, r.pointA) : r.pointA),
                  'pin' === r.render.type)
                )
                  n.beginPath(),
                    n.arc(a.x, a.y, 3, 0, 2 * Math.PI),
                    n.closePath()
                else {
                  if (
                    ((s = u ? l.add(u.position, r.pointB) : r.pointB),
                    n.beginPath(),
                    n.moveTo(a.x, a.y),
                    'spring' === r.render.type)
                  )
                    for (
                      var d,
                        p = l.sub(s, a),
                        f = l.perp(l.normalise(p)),
                        v = Math.ceil(o.clamp(r.length / 5, 12, 20)),
                        m = 1;
                      m < v;
                      m += 1
                    )
                      (d = m % 2 == 0 ? 1 : -1),
                        n.lineTo(
                          a.x + p.x * (m / v) + f.x * d * 4,
                          a.y + p.y * (m / v) + f.y * d * 4
                        )
                  n.lineTo(s.x, s.y)
                }
                r.render.lineWidth &&
                  ((n.lineWidth = r.render.lineWidth),
                  (n.strokeStyle = r.render.strokeStyle),
                  n.stroke()),
                  r.render.anchors &&
                    ((n.fillStyle = r.render.strokeStyle),
                    n.beginPath(),
                    n.arc(a.x, a.y, 3, 0, 2 * Math.PI),
                    n.arc(s.x, s.y, 3, 0, 2 * Math.PI),
                    n.closePath(),
                    n.fill())
              }
            }
          }),
          (i.bodies = function (e, t, n) {
            var i,
              o,
              r,
              a,
              s = n,
              l = (e.engine, e.options),
              c = l.showInternalEdges || !l.wireframes
            for (r = 0; r < t.length; r++)
              if ((i = t[r]).render.visible)
                for (a = i.parts.length > 1 ? 1 : 0; a < i.parts.length; a++)
                  if ((o = i.parts[a]).render.visible) {
                    if (
                      (l.showSleeping && i.isSleeping
                        ? (s.globalAlpha = 0.5 * o.render.opacity)
                        : 1 !== o.render.opacity &&
                          (s.globalAlpha = o.render.opacity),
                      o.render.sprite &&
                        o.render.sprite.texture &&
                        !l.wireframes)
                    ) {
                      var u = o.render.sprite,
                        d = f(e, u.texture)
                      s.translate(o.position.x, o.position.y),
                        s.rotate(o.angle),
                        s.drawImage(
                          d,
                          d.width * -u.xOffset * u.xScale,
                          d.height * -u.yOffset * u.yScale,
                          d.width * u.xScale,
                          d.height * u.yScale
                        ),
                        s.rotate(-o.angle),
                        s.translate(-o.position.x, -o.position.y)
                    } else {
                      if (o.circleRadius)
                        s.beginPath(),
                          s.arc(
                            o.position.x,
                            o.position.y,
                            o.circleRadius,
                            0,
                            2 * Math.PI
                          )
                      else {
                        s.beginPath(),
                          s.moveTo(o.vertices[0].x, o.vertices[0].y)
                        for (var p = 1; p < o.vertices.length; p++)
                          !o.vertices[p - 1].isInternal || c
                            ? s.lineTo(o.vertices[p].x, o.vertices[p].y)
                            : s.moveTo(o.vertices[p].x, o.vertices[p].y),
                            o.vertices[p].isInternal &&
                              !c &&
                              s.moveTo(
                                o.vertices[(p + 1) % o.vertices.length].x,
                                o.vertices[(p + 1) % o.vertices.length].y
                              )
                        s.lineTo(o.vertices[0].x, o.vertices[0].y),
                          s.closePath()
                      }
                      l.wireframes
                        ? ((s.lineWidth = 1),
                          (s.strokeStyle = '#bbb'),
                          s.stroke())
                        : ((s.fillStyle = o.render.fillStyle),
                          o.render.lineWidth &&
                            ((s.lineWidth = o.render.lineWidth),
                            (s.strokeStyle = o.render.strokeStyle),
                            s.stroke()),
                          s.fill())
                    }
                    s.globalAlpha = 1
                  }
          }),
          (i.bodyWireframes = function (e, t, n) {
            var i,
              o,
              r,
              a,
              s,
              l = n,
              c = e.options.showInternalEdges
            for (l.beginPath(), r = 0; r < t.length; r++)
              if ((i = t[r]).render.visible)
                for (s = i.parts.length > 1 ? 1 : 0; s < i.parts.length; s++) {
                  for (
                    o = i.parts[s],
                      l.moveTo(o.vertices[0].x, o.vertices[0].y),
                      a = 1;
                    a < o.vertices.length;
                    a++
                  )
                    !o.vertices[a - 1].isInternal || c
                      ? l.lineTo(o.vertices[a].x, o.vertices[a].y)
                      : l.moveTo(o.vertices[a].x, o.vertices[a].y),
                      o.vertices[a].isInternal &&
                        !c &&
                        l.moveTo(
                          o.vertices[(a + 1) % o.vertices.length].x,
                          o.vertices[(a + 1) % o.vertices.length].y
                        )
                  l.lineTo(o.vertices[0].x, o.vertices[0].y)
                }
            ;(l.lineWidth = 1), (l.strokeStyle = '#bbb'), l.stroke()
          }),
          (i.bodyConvexHulls = function (e, t, n) {
            var i,
              o,
              r,
              a = n
            for (a.beginPath(), o = 0; o < t.length; o++)
              if ((i = t[o]).render.visible && 1 !== i.parts.length) {
                for (
                  a.moveTo(i.vertices[0].x, i.vertices[0].y), r = 1;
                  r < i.vertices.length;
                  r++
                )
                  a.lineTo(i.vertices[r].x, i.vertices[r].y)
                a.lineTo(i.vertices[0].x, i.vertices[0].y)
              }
            ;(a.lineWidth = 1),
              (a.strokeStyle = 'rgba(255,255,255,0.2)'),
              a.stroke()
          }),
          (i.vertexNumbers = function (e, t, n) {
            var i,
              o,
              r,
              a = n
            for (i = 0; i < t.length; i++) {
              var s = t[i].parts
              for (r = s.length > 1 ? 1 : 0; r < s.length; r++) {
                var l = s[r]
                for (o = 0; o < l.vertices.length; o++)
                  (a.fillStyle = 'rgba(255,255,255,0.2)'),
                    a.fillText(
                      i + '_' + o,
                      l.position.x + 0.8 * (l.vertices[o].x - l.position.x),
                      l.position.y + 0.8 * (l.vertices[o].y - l.position.y)
                    )
              }
            }
          }),
          (i.mousePosition = function (e, t, n) {
            var i = n
            ;(i.fillStyle = 'rgba(255,255,255,0.8)'),
              i.fillText(
                t.position.x + '  ' + t.position.y,
                t.position.x + 5,
                t.position.y - 5
              )
          }),
          (i.bodyBounds = function (e, t, n) {
            var i = n,
              o = (e.engine, e.options)
            i.beginPath()
            for (var r = 0; r < t.length; r++) {
              if (t[r].render.visible)
                for (
                  var a = t[r].parts, s = a.length > 1 ? 1 : 0;
                  s < a.length;
                  s++
                ) {
                  var l = a[s]
                  i.rect(
                    l.bounds.min.x,
                    l.bounds.min.y,
                    l.bounds.max.x - l.bounds.min.x,
                    l.bounds.max.y - l.bounds.min.y
                  )
                }
            }
            o.wireframes
              ? (i.strokeStyle = 'rgba(255,255,255,0.08)')
              : (i.strokeStyle = 'rgba(0,0,0,0.1)'),
              (i.lineWidth = 1),
              i.stroke()
          }),
          (i.bodyAxes = function (e, t, n) {
            var i,
              o,
              r,
              a,
              s = n,
              l = (e.engine, e.options)
            for (s.beginPath(), o = 0; o < t.length; o++) {
              var c = t[o],
                u = c.parts
              if (c.render.visible)
                if (l.showAxes)
                  for (r = u.length > 1 ? 1 : 0; r < u.length; r++)
                    for (i = u[r], a = 0; a < i.axes.length; a++) {
                      var d = i.axes[a]
                      s.moveTo(i.position.x, i.position.y),
                        s.lineTo(
                          i.position.x + 20 * d.x,
                          i.position.y + 20 * d.y
                        )
                    }
                else
                  for (r = u.length > 1 ? 1 : 0; r < u.length; r++)
                    for (i = u[r], a = 0; a < i.axes.length; a++)
                      s.moveTo(i.position.x, i.position.y),
                        s.lineTo(
                          (i.vertices[0].x +
                            i.vertices[i.vertices.length - 1].x) /
                            2,
                          (i.vertices[0].y +
                            i.vertices[i.vertices.length - 1].y) /
                            2
                        )
            }
            l.wireframes
              ? ((s.strokeStyle = 'indianred'), (s.lineWidth = 1))
              : ((s.strokeStyle = 'rgba(255, 255, 255, 0.4)'),
                (s.globalCompositeOperation = 'overlay'),
                (s.lineWidth = 2)),
              s.stroke(),
              (s.globalCompositeOperation = 'source-over')
          }),
          (i.bodyPositions = function (e, t, n) {
            var i,
              o,
              r,
              a,
              s = n,
              l = (e.engine, e.options)
            for (s.beginPath(), r = 0; r < t.length; r++)
              if ((i = t[r]).render.visible)
                for (a = 0; a < i.parts.length; a++)
                  (o = i.parts[a]),
                    s.arc(o.position.x, o.position.y, 3, 0, 2 * Math.PI, !1),
                    s.closePath()
            for (
              l.wireframes
                ? (s.fillStyle = 'indianred')
                : (s.fillStyle = 'rgba(0,0,0,0.5)'),
                s.fill(),
                s.beginPath(),
                r = 0;
              r < t.length;
              r++
            )
              (i = t[r]).render.visible &&
                (s.arc(
                  i.positionPrev.x,
                  i.positionPrev.y,
                  2,
                  0,
                  2 * Math.PI,
                  !1
                ),
                s.closePath())
            ;(s.fillStyle = 'rgba(255,165,0,0.8)'), s.fill()
          }),
          (i.bodyVelocity = function (e, t, n) {
            var i = n
            i.beginPath()
            for (var o = 0; o < t.length; o++) {
              var r = t[o]
              r.render.visible &&
                (i.moveTo(r.position.x, r.position.y),
                i.lineTo(
                  r.position.x + 2 * (r.position.x - r.positionPrev.x),
                  r.position.y + 2 * (r.position.y - r.positionPrev.y)
                ))
            }
            ;(i.lineWidth = 3), (i.strokeStyle = 'cornflowerblue'), i.stroke()
          }),
          (i.bodyIds = function (e, t, n) {
            var i,
              o,
              r = n
            for (i = 0; i < t.length; i++)
              if (t[i].render.visible) {
                var a = t[i].parts
                for (o = a.length > 1 ? 1 : 0; o < a.length; o++) {
                  var s = a[o]
                  ;(r.font = '12px Arial'),
                    (r.fillStyle = 'rgba(255,255,255,0.5)'),
                    r.fillText(s.id, s.position.x + 10, s.position.y - 10)
                }
              }
          }),
          (i.collisions = function (e, t, n) {
            var i,
              o,
              r,
              a,
              s = n,
              l = e.options
            for (s.beginPath(), r = 0; r < t.length; r++)
              if ((i = t[r]).isActive)
                for (o = i.collision, a = 0; a < i.activeContacts.length; a++) {
                  var c = i.activeContacts[a].vertex
                  s.rect(c.x - 1.5, c.y - 1.5, 3.5, 3.5)
                }
            for (
              l.wireframes
                ? (s.fillStyle = 'rgba(255,255,255,0.7)')
                : (s.fillStyle = 'orange'),
                s.fill(),
                s.beginPath(),
                r = 0;
              r < t.length;
              r++
            )
              if (
                (i = t[r]).isActive &&
                ((o = i.collision), i.activeContacts.length > 0)
              ) {
                var u = i.activeContacts[0].vertex.x,
                  d = i.activeContacts[0].vertex.y
                2 === i.activeContacts.length &&
                  ((u =
                    (i.activeContacts[0].vertex.x +
                      i.activeContacts[1].vertex.x) /
                    2),
                  (d =
                    (i.activeContacts[0].vertex.y +
                      i.activeContacts[1].vertex.y) /
                    2)),
                  o.bodyB === o.supports[0].body || !0 === o.bodyA.isStatic
                    ? s.moveTo(u - 8 * o.normal.x, d - 8 * o.normal.y)
                    : s.moveTo(u + 8 * o.normal.x, d + 8 * o.normal.y),
                  s.lineTo(u, d)
              }
            l.wireframes
              ? (s.strokeStyle = 'rgba(255,165,0,0.7)')
              : (s.strokeStyle = 'orange'),
              (s.lineWidth = 1),
              s.stroke()
          }),
          (i.separations = function (e, t, n) {
            var i,
              o,
              r,
              a,
              s,
              l = n,
              c = e.options
            for (l.beginPath(), s = 0; s < t.length; s++)
              if ((i = t[s]).isActive) {
                r = (o = i.collision).bodyA
                var u = 1
                ;(a = o.bodyB).isStatic || r.isStatic || (u = 0.5),
                  a.isStatic && (u = 0),
                  l.moveTo(a.position.x, a.position.y),
                  l.lineTo(
                    a.position.x - o.penetration.x * u,
                    a.position.y - o.penetration.y * u
                  ),
                  (u = 1),
                  a.isStatic || r.isStatic || (u = 0.5),
                  r.isStatic && (u = 0),
                  l.moveTo(r.position.x, r.position.y),
                  l.lineTo(
                    r.position.x + o.penetration.x * u,
                    r.position.y + o.penetration.y * u
                  )
              }
            c.wireframes
              ? (l.strokeStyle = 'rgba(255,165,0,0.5)')
              : (l.strokeStyle = 'orange'),
              l.stroke()
          }),
          (i.grid = function (e, t, n) {
            var i = n
            e.options.wireframes
              ? (i.strokeStyle = 'rgba(255,180,0,0.1)')
              : (i.strokeStyle = 'rgba(255,180,0,0.5)'),
              i.beginPath()
            for (var r = o.keys(t.buckets), a = 0; a < r.length; a++) {
              var s = r[a]
              if (!(t.buckets[s].length < 2)) {
                var l = s.split(/C|R/)
                i.rect(
                  0.5 + parseInt(l[1], 10) * t.bucketWidth,
                  0.5 + parseInt(l[2], 10) * t.bucketHeight,
                  t.bucketWidth,
                  t.bucketHeight
                )
              }
            }
            ;(i.lineWidth = 1), i.stroke()
          }),
          (i.inspector = function (e, t) {
            e.engine
            var n,
              i = e.selected,
              o = e.render,
              r = o.options
            if (r.hasBounds) {
              var a = o.bounds.max.x - o.bounds.min.x,
                s = o.bounds.max.y - o.bounds.min.y,
                l = a / o.options.width,
                c = s / o.options.height
              t.scale(1 / l, 1 / c),
                t.translate(-o.bounds.min.x, -o.bounds.min.y)
            }
            for (var u = 0; u < i.length; u++) {
              var d = i[u].data
              switch (
                (t.translate(0.5, 0.5),
                (t.lineWidth = 1),
                (t.strokeStyle = 'rgba(255,165,0,0.9)'),
                t.setLineDash([1, 2]),
                d.type)
              ) {
                case 'body':
                  ;(n = d.bounds),
                    t.beginPath(),
                    t.rect(
                      Math.floor(n.min.x - 3),
                      Math.floor(n.min.y - 3),
                      Math.floor(n.max.x - n.min.x + 6),
                      Math.floor(n.max.y - n.min.y + 6)
                    ),
                    t.closePath(),
                    t.stroke()
                  break
                case 'constraint':
                  var p = d.pointA
                  d.bodyA && (p = d.pointB),
                    t.beginPath(),
                    t.arc(p.x, p.y, 10, 0, 2 * Math.PI),
                    t.closePath(),
                    t.stroke()
              }
              t.setLineDash([]), t.translate(-0.5, -0.5)
            }
            null !== e.selectStart &&
              (t.translate(0.5, 0.5),
              (t.lineWidth = 1),
              (t.strokeStyle = 'rgba(255,165,0,0.6)'),
              (t.fillStyle = 'rgba(255,165,0,0.1)'),
              (n = e.selectBounds),
              t.beginPath(),
              t.rect(
                Math.floor(n.min.x),
                Math.floor(n.min.y),
                Math.floor(n.max.x - n.min.x),
                Math.floor(n.max.y - n.min.y)
              ),
              t.closePath(),
              t.stroke(),
              t.fill(),
              t.translate(-0.5, -0.5)),
              r.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0)
          })
        var n = function (e, t) {
            var n = e.engine,
              o = e.timing,
              r = o.historySize,
              a = n.timing.timestamp
            ;(o.delta = t - o.lastTime || i._goodDelta),
              (o.lastTime = t),
              (o.timestampElapsed = a - o.lastTimestamp || 0),
              (o.lastTimestamp = a),
              o.deltaHistory.unshift(o.delta),
              (o.deltaHistory.length = Math.min(o.deltaHistory.length, r)),
              o.engineDeltaHistory.unshift(n.timing.lastDelta),
              (o.engineDeltaHistory.length = Math.min(
                o.engineDeltaHistory.length,
                r
              )),
              o.timestampElapsedHistory.unshift(o.timestampElapsed),
              (o.timestampElapsedHistory.length = Math.min(
                o.timestampElapsedHistory.length,
                r
              )),
              o.engineElapsedHistory.unshift(n.timing.lastElapsed),
              (o.engineElapsedHistory.length = Math.min(
                o.engineElapsedHistory.length,
                r
              )),
              o.elapsedHistory.unshift(o.lastElapsed),
              (o.elapsedHistory.length = Math.min(o.elapsedHistory.length, r))
          },
          u = function (e) {
            for (var t = 0, n = 0; n < e.length; n += 1) t += e[n]
            return t / e.length || 0
          },
          d = function (e, t) {
            var n = document.createElement('canvas')
            return (
              (n.width = e),
              (n.height = t),
              (n.oncontextmenu = function () {
                return !1
              }),
              (n.onselectstart = function () {
                return !1
              }),
              n
            )
          },
          p = function (e) {
            var t = e.getContext('2d')
            return (
              (window.devicePixelRatio || 1) /
              (t.webkitBackingStorePixelRatio ||
                t.mozBackingStorePixelRatio ||
                t.msBackingStorePixelRatio ||
                t.oBackingStorePixelRatio ||
                t.backingStorePixelRatio ||
                1)
            )
          },
          f = function (e, t) {
            var n = e.textures[t]
            return n || (((n = e.textures[t] = new Image()).src = t), n)
          },
          v = function (e, t) {
            var n = t
            ;/(jpg|gif|png)$/.test(t) && (n = 'url(' + t + ')'),
              (e.canvas.style.background = n),
              (e.canvas.style.backgroundSize = 'contain'),
              (e.currentBackground = t)
          }
      })()
    },
    function (e, t) {
      var n = {}
      ;(e.exports = n),
        (n.create = function (e) {
          return { id: n.id(e), vertex: e, normalImpulse: 0, tangentImpulse: 0 }
        }),
        (n.id = function (e) {
          return e.body.id + '_' + e.index
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(7),
        r = n(19),
        a = n(13),
        s = n(20),
        l = n(21),
        c = n(4),
        u = n(5),
        d = n(8),
        p = n(0),
        f = n(6)
      ;(i.create = function (e) {
        e = e || {}
        var t = p.extend(
          {
            positionIterations: 6,
            velocityIterations: 4,
            constraintIterations: 2,
            enableSleeping: !1,
            events: [],
            plugin: {},
            grid: null,
            gravity: { x: 0, y: 1, scale: 0.001 },
            timing: { timestamp: 0, timeScale: 1, lastDelta: 0, lastElapsed: 0 }
          },
          e
        )
        return (
          (t.world = e.world || u.create({ label: 'World' })),
          (t.grid = l.create(e.grid || e.broadphase)),
          (t.pairs = s.create()),
          (t.world.gravity = t.gravity),
          (t.broadphase = t.grid),
          (t.metrics = {}),
          t
        )
      }),
        (i.update = function (e, t, n) {
          var f = p.now()
          ;(t = t || 1e3 / 60), (n = n || 1)
          var v,
            m,
            y = e.world,
            g = e.timing,
            x = e.grid
          ;(g.timestamp += t * g.timeScale), (g.lastDelta = t * g.timeScale)
          var h = { timestamp: g.timestamp }
          c.trigger(e, 'beforeUpdate', h)
          var b = u.allBodies(y),
            S = u.allConstraints(y)
          for (
            e.enableSleeping && o.update(b, g.timeScale),
              i._bodiesApplyGravity(b, e.gravity),
              i._bodiesUpdate(b, t, g.timeScale, n, y.bounds),
              d.preSolveAll(b),
              m = 0;
            m < e.constraintIterations;
            m++
          )
            d.solveAll(S, g.timeScale)
          d.postSolveAll(b),
            y.isModified && l.clear(x),
            l.update(x, b, e, y.isModified),
            (v = x.pairsList),
            y.isModified && u.setModified(y, !1, !1, !0)
          var w = a.collisions(v, e),
            A = e.pairs,
            P = g.timestamp
          for (
            s.update(A, w, P),
              s.removeOld(A, P),
              e.enableSleeping && o.afterCollisions(A.list, g.timeScale),
              A.collisionStart.length > 0 &&
                c.trigger(e, 'collisionStart', { pairs: A.collisionStart }),
              r.preSolvePosition(A.list),
              m = 0;
            m < e.positionIterations;
            m++
          )
            r.solvePosition(A.list, g.timeScale)
          for (
            r.postSolvePosition(b), d.preSolveAll(b), m = 0;
            m < e.constraintIterations;
            m++
          )
            d.solveAll(S, g.timeScale)
          for (
            d.postSolveAll(b), r.preSolveVelocity(A.list), m = 0;
            m < e.velocityIterations;
            m++
          )
            r.solveVelocity(A.list, g.timeScale)
          return (
            A.collisionActive.length > 0 &&
              c.trigger(e, 'collisionActive', { pairs: A.collisionActive }),
            A.collisionEnd.length > 0 &&
              c.trigger(e, 'collisionEnd', { pairs: A.collisionEnd }),
            i._bodiesClearForces(b),
            c.trigger(e, 'afterUpdate', h),
            (e.timing.lastElapsed = p.now() - f),
            e
          )
        }),
        (i.merge = function (e, t) {
          if ((p.extend(e, t), t.world)) {
            ;(e.world = t.world), i.clear(e)
            for (var n = u.allBodies(e.world), r = 0; r < n.length; r++) {
              var a = n[r]
              o.set(a, !1), (a.id = p.nextId())
            }
          }
        }),
        (i.clear = function (e) {
          var t = e.world,
            n = u.allBodies(t)
          s.clear(e.pairs), l.clear(e.grid), l.update(e.grid, n, e, !0)
        }),
        (i._bodiesClearForces = function (e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t]
            ;(n.force.x = 0), (n.force.y = 0), (n.torque = 0)
          }
        }),
        (i._bodiesApplyGravity = function (e, t) {
          var n = void 0 !== t.scale ? t.scale : 0.001
          if ((0 !== t.x || 0 !== t.y) && 0 !== n)
            for (var i = 0; i < e.length; i++) {
              var o = e[i]
              o.isStatic ||
                o.isSleeping ||
                ((o.force.y += o.mass * t.y * n),
                (o.force.x += o.mass * t.x * n))
            }
        }),
        (i._bodiesUpdate = function (e, t, n, i, o) {
          for (var r = 0; r < e.length; r++) {
            var a = e[r]
            a.isStatic || a.isSleeping || f.update(a, t, n, i)
          }
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(3),
        r = n(2),
        a = n(0),
        s = n(1)
      ;(i._restingThresh = 4),
        (i._restingThreshTangent = 6),
        (i._positionDampen = 0.9),
        (i._positionWarming = 0.8),
        (i._frictionNormalMultiplier = 5),
        (i.preSolvePosition = function (e) {
          var t, n, i
          for (t = 0; t < e.length; t++)
            (n = e[t]).isActive &&
              ((i = n.activeContacts.length),
              (n.collision.parentA.totalContacts += i),
              (n.collision.parentB.totalContacts += i))
        }),
        (i.solvePosition = function (e, t) {
          var n,
            o,
            a,
            s,
            l,
            c,
            u,
            d,
            p,
            f = r._temp[0],
            v = r._temp[1],
            m = r._temp[2],
            y = r._temp[3]
          for (n = 0; n < e.length; n++)
            (o = e[n]).isActive &&
              !o.isSensor &&
              ((s = (a = o.collision).parentA),
              (l = a.parentB),
              (c = a.normal),
              (u = r.sub(
                r.add(l.positionImpulse, l.position, f),
                r.add(
                  s.positionImpulse,
                  r.sub(l.position, a.penetration, v),
                  m
                ),
                y
              )),
              (o.separation = r.dot(c, u)))
          for (n = 0; n < e.length; n++)
            (o = e[n]).isActive &&
              !o.isSensor &&
              ((s = (a = o.collision).parentA),
              (l = a.parentB),
              (c = a.normal),
              (p = (o.separation - o.slop) * t),
              (s.isStatic || l.isStatic) && (p *= 2),
              s.isStatic ||
                s.isSleeping ||
                ((d = i._positionDampen / s.totalContacts),
                (s.positionImpulse.x += c.x * p * d),
                (s.positionImpulse.y += c.y * p * d)),
              l.isStatic ||
                l.isSleeping ||
                ((d = i._positionDampen / l.totalContacts),
                (l.positionImpulse.x -= c.x * p * d),
                (l.positionImpulse.y -= c.y * p * d)))
        }),
        (i.postSolvePosition = function (e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t]
            if (
              ((n.totalContacts = 0),
              0 !== n.positionImpulse.x || 0 !== n.positionImpulse.y)
            ) {
              for (var a = 0; a < n.parts.length; a++) {
                var l = n.parts[a]
                o.translate(l.vertices, n.positionImpulse),
                  s.update(l.bounds, l.vertices, n.velocity),
                  (l.position.x += n.positionImpulse.x),
                  (l.position.y += n.positionImpulse.y)
              }
              ;(n.positionPrev.x += n.positionImpulse.x),
                (n.positionPrev.y += n.positionImpulse.y),
                r.dot(n.positionImpulse, n.velocity) < 0
                  ? ((n.positionImpulse.x = 0), (n.positionImpulse.y = 0))
                  : ((n.positionImpulse.x *= i._positionWarming),
                    (n.positionImpulse.y *= i._positionWarming))
            }
          }
        }),
        (i.preSolveVelocity = function (e) {
          var t,
            n,
            i,
            o,
            a,
            s,
            l,
            c,
            u,
            d,
            p,
            f,
            v,
            m,
            y = r._temp[0],
            g = r._temp[1]
          for (t = 0; t < e.length; t++)
            if ((i = e[t]).isActive && !i.isSensor)
              for (
                o = i.activeContacts,
                  s = (a = i.collision).parentA,
                  l = a.parentB,
                  c = a.normal,
                  u = a.tangent,
                  n = 0;
                n < o.length;
                n++
              )
                (p = (d = o[n]).vertex),
                  (f = d.normalImpulse),
                  (v = d.tangentImpulse),
                  (0 === f && 0 === v) ||
                    ((y.x = c.x * f + u.x * v),
                    (y.y = c.y * f + u.y * v),
                    s.isStatic ||
                      s.isSleeping ||
                      ((m = r.sub(p, s.position, g)),
                      (s.positionPrev.x += y.x * s.inverseMass),
                      (s.positionPrev.y += y.y * s.inverseMass),
                      (s.anglePrev += r.cross(m, y) * s.inverseInertia)),
                    l.isStatic ||
                      l.isSleeping ||
                      ((m = r.sub(p, l.position, g)),
                      (l.positionPrev.x -= y.x * l.inverseMass),
                      (l.positionPrev.y -= y.y * l.inverseMass),
                      (l.anglePrev -= r.cross(m, y) * l.inverseInertia)))
        }),
        (i.solveVelocity = function (e, t) {
          for (
            var n = t * t,
              o = r._temp[0],
              s = r._temp[1],
              l = r._temp[2],
              c = r._temp[3],
              u = r._temp[4],
              d = r._temp[5],
              p = 0;
            p < e.length;
            p++
          ) {
            var f = e[p]
            if (f.isActive && !f.isSensor) {
              var v = f.collision,
                m = v.parentA,
                y = v.parentB,
                g = v.normal,
                x = v.tangent,
                h = f.activeContacts,
                b = 1 / h.length
              ;(m.velocity.x = m.position.x - m.positionPrev.x),
                (m.velocity.y = m.position.y - m.positionPrev.y),
                (y.velocity.x = y.position.x - y.positionPrev.x),
                (y.velocity.y = y.position.y - y.positionPrev.y),
                (m.angularVelocity = m.angle - m.anglePrev),
                (y.angularVelocity = y.angle - y.anglePrev)
              for (var S = 0; S < h.length; S++) {
                var w = h[S],
                  A = w.vertex,
                  P = r.sub(A, m.position, s),
                  M = r.sub(A, y.position, l),
                  C = r.add(
                    m.velocity,
                    r.mult(r.perp(P), m.angularVelocity),
                    c
                  ),
                  B = r.add(
                    y.velocity,
                    r.mult(r.perp(M), y.angularVelocity),
                    u
                  ),
                  _ = r.sub(C, B, d),
                  k = r.dot(g, _),
                  I = r.dot(x, _),
                  T = Math.abs(I),
                  R = a.sign(I),
                  E = (1 + f.restitution) * k,
                  L =
                    a.clamp(f.separation + k, 0, 1) *
                    i._frictionNormalMultiplier,
                  V = I,
                  O = 1 / 0
                T > f.friction * f.frictionStatic * L * n &&
                  ((O = T), (V = a.clamp(f.friction * R * n, -O, O)))
                var F = r.cross(P, g),
                  D = r.cross(M, g),
                  H =
                    b /
                    (m.inverseMass +
                      y.inverseMass +
                      m.inverseInertia * F * F +
                      y.inverseInertia * D * D)
                if (((E *= H), (V *= H), k < 0 && k * k > i._restingThresh * n))
                  w.normalImpulse = 0
                else {
                  var j = w.normalImpulse
                  ;(w.normalImpulse = Math.min(w.normalImpulse + E, 0)),
                    (E = w.normalImpulse - j)
                }
                if (I * I > i._restingThreshTangent * n) w.tangentImpulse = 0
                else {
                  var W = w.tangentImpulse
                  ;(w.tangentImpulse = a.clamp(w.tangentImpulse + V, -O, O)),
                    (V = w.tangentImpulse - W)
                }
                ;(o.x = g.x * E + x.x * V),
                  (o.y = g.y * E + x.y * V),
                  m.isStatic ||
                    m.isSleeping ||
                    ((m.positionPrev.x += o.x * m.inverseMass),
                    (m.positionPrev.y += o.y * m.inverseMass),
                    (m.anglePrev += r.cross(P, o) * m.inverseInertia)),
                  y.isStatic ||
                    y.isSleeping ||
                    ((y.positionPrev.x -= o.x * y.inverseMass),
                    (y.positionPrev.y -= o.y * y.inverseMass),
                    (y.anglePrev -= r.cross(M, o) * y.inverseInertia))
              }
            }
          }
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(9),
        r = n(0)
      ;(i._pairMaxIdleLife = 1e3),
        (i.create = function (e) {
          return r.extend(
            {
              table: {},
              list: [],
              collisionStart: [],
              collisionActive: [],
              collisionEnd: []
            },
            e
          )
        }),
        (i.update = function (e, t, n) {
          var i,
            r,
            a,
            s,
            l = e.list,
            c = e.table,
            u = e.collisionStart,
            d = e.collisionEnd,
            p = e.collisionActive
          for (
            u.length = 0, d.length = 0, p.length = 0, s = 0;
            s < l.length;
            s++
          )
            l[s].confirmedActive = !1
          for (s = 0; s < t.length; s++)
            (i = t[s]).collided &&
              ((a = c[(r = o.id(i.bodyA, i.bodyB))])
                ? (a.isActive ? p.push(a) : u.push(a),
                  o.update(a, i, n),
                  (a.confirmedActive = !0))
                : ((a = o.create(i, n)), (c[r] = a), u.push(a), l.push(a)))
          for (s = 0; s < l.length; s++)
            (a = l[s]).isActive &&
              !a.confirmedActive &&
              (o.setActive(a, !1, n), d.push(a))
        }),
        (i.removeOld = function (e, t) {
          var n,
            o,
            r,
            a,
            s = e.list,
            l = e.table,
            c = []
          for (a = 0; a < s.length; a++)
            (o = (n = s[a]).collision).bodyA.isSleeping || o.bodyB.isSleeping
              ? (n.timeUpdated = t)
              : t - n.timeUpdated > i._pairMaxIdleLife && c.push(a)
          for (a = 0; a < c.length; a++)
            delete l[(n = s[(r = c[a] - a)]).id], s.splice(r, 1)
        }),
        (i.clear = function (e) {
          return (
            (e.table = {}),
            (e.list.length = 0),
            (e.collisionStart.length = 0),
            (e.collisionActive.length = 0),
            (e.collisionEnd.length = 0),
            e
          )
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(9),
        r = n(0)
      ;(i.create = function (e) {
        return r.extend(
          {
            buckets: {},
            pairs: {},
            pairsList: [],
            bucketWidth: 48,
            bucketHeight: 48
          },
          e
        )
      }),
        (i.update = function (e, t, n, o) {
          var r,
            a,
            s,
            l,
            c,
            u = n.world,
            d = e.buckets,
            p = !1
          for (r = 0; r < t.length; r++) {
            var f = t[r]
            if (
              (!f.isSleeping || o) &&
              (!u.bounds ||
                !(
                  f.bounds.max.x < u.bounds.min.x ||
                  f.bounds.min.x > u.bounds.max.x ||
                  f.bounds.max.y < u.bounds.min.y ||
                  f.bounds.min.y > u.bounds.max.y
                ))
            ) {
              var v = i._getRegion(e, f)
              if (!f.region || v.id !== f.region.id || o) {
                ;(f.region && !o) || (f.region = v)
                var m = i._regionUnion(v, f.region)
                for (a = m.startCol; a <= m.endCol; a++)
                  for (s = m.startRow; s <= m.endRow; s++) {
                    l = d[(c = i._getBucketId(a, s))]
                    var y =
                        a >= v.startCol &&
                        a <= v.endCol &&
                        s >= v.startRow &&
                        s <= v.endRow,
                      g =
                        a >= f.region.startCol &&
                        a <= f.region.endCol &&
                        s >= f.region.startRow &&
                        s <= f.region.endRow
                    !y && g && g && l && i._bucketRemoveBody(e, l, f),
                      (f.region === v || (y && !g) || o) &&
                        (l || (l = i._createBucket(d, c)),
                        i._bucketAddBody(e, l, f))
                  }
                ;(f.region = v), (p = !0)
              }
            }
          }
          p && (e.pairsList = i._createActivePairsList(e))
        }),
        (i.clear = function (e) {
          ;(e.buckets = {}), (e.pairs = {}), (e.pairsList = [])
        }),
        (i._regionUnion = function (e, t) {
          var n = Math.min(e.startCol, t.startCol),
            o = Math.max(e.endCol, t.endCol),
            r = Math.min(e.startRow, t.startRow),
            a = Math.max(e.endRow, t.endRow)
          return i._createRegion(n, o, r, a)
        }),
        (i._getRegion = function (e, t) {
          var n = t.bounds,
            o = Math.floor(n.min.x / e.bucketWidth),
            r = Math.floor(n.max.x / e.bucketWidth),
            a = Math.floor(n.min.y / e.bucketHeight),
            s = Math.floor(n.max.y / e.bucketHeight)
          return i._createRegion(o, r, a, s)
        }),
        (i._createRegion = function (e, t, n, i) {
          return {
            id: e + ',' + t + ',' + n + ',' + i,
            startCol: e,
            endCol: t,
            startRow: n,
            endRow: i
          }
        }),
        (i._getBucketId = function (e, t) {
          return 'C' + e + 'R' + t
        }),
        (i._createBucket = function (e, t) {
          return (e[t] = [])
        }),
        (i._bucketAddBody = function (e, t, n) {
          for (var i = 0; i < t.length; i++) {
            var r = t[i]
            if (!(n.id === r.id || (n.isStatic && r.isStatic))) {
              var a = o.id(n, r),
                s = e.pairs[a]
              s ? (s[2] += 1) : (e.pairs[a] = [n, r, 1])
            }
          }
          t.push(n)
        }),
        (i._bucketRemoveBody = function (e, t, n) {
          t.splice(r.indexOf(t, n), 1)
          for (var i = 0; i < t.length; i++) {
            var a = t[i],
              s = o.id(n, a),
              l = e.pairs[s]
            l && (l[2] -= 1)
          }
        }),
        (i._createActivePairsList = function (e) {
          var t,
            n,
            i = []
          t = r.keys(e.pairs)
          for (var o = 0; o < t.length; o++)
            (n = e.pairs[t[o]])[2] > 0 ? i.push(n) : delete e.pairs[t[o]]
          return i
        })
    },
    function (e, t, n) {
      var i = (e.exports = n(23))
      ;(i.Axes = n(10)),
        (i.Bodies = n(11)),
        (i.Body = n(6)),
        (i.Bounds = n(1)),
        (i.Common = n(0)),
        (i.Composite = n(5)),
        (i.Composites = n(24)),
        (i.Constraint = n(8)),
        (i.Contact = n(17)),
        (i.Detector = n(13)),
        (i.Engine = n(18)),
        (i.Events = n(4)),
        (i.Grid = n(21)),
        (i.Mouse = n(12)),
        (i.MouseConstraint = n(25)),
        (i.Pair = n(9)),
        (i.Pairs = n(20)),
        (i.Plugin = n(15)),
        (i.Query = n(26)),
        (i.Render = n(16)),
        (i.Resolver = n(19)),
        (i.Runner = n(27)),
        (i.SAT = n(14)),
        (i.Sleeping = n(7)),
        (i.Svg = n(28)),
        (i.Vector = n(2)),
        (i.Vertices = n(3)),
        (i.World = n(29)),
        (i.Engine.run = i.Runner.run),
        i.Common.deprecated(
          i.Engine,
          'run',
          'Engine.run ➤ use Matter.Runner.run(engine) instead'
        )
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(15),
        r = n(0)
      ;(i.name = 'matter-js'),
        (i.version = '0.17.1'),
        (i.uses = []),
        (i.used = []),
        (i.use = function () {
          o.use(i, Array.prototype.slice.call(arguments))
        }),
        (i.before = function (e, t) {
          return (e = e.replace(/^Matter./, '')), r.chainPathBefore(i, e, t)
        }),
        (i.after = function (e, t) {
          return (e = e.replace(/^Matter./, '')), r.chainPathAfter(i, e, t)
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(5),
        r = n(8),
        a = n(0),
        s = n(6),
        l = n(11),
        c = a.deprecated
      ;(i.stack = function (e, t, n, i, r, a, l) {
        for (
          var c, u = o.create({ label: 'Stack' }), d = e, p = t, f = 0, v = 0;
          v < i;
          v++
        ) {
          for (var m = 0, y = 0; y < n; y++) {
            var g = l(d, p, y, v, c, f)
            if (g) {
              var x = g.bounds.max.y - g.bounds.min.y,
                h = g.bounds.max.x - g.bounds.min.x
              x > m && (m = x),
                s.translate(g, { x: 0.5 * h, y: 0.5 * x }),
                (d = g.bounds.max.x + r),
                o.addBody(u, g),
                (c = g),
                (f += 1)
            } else d += r
          }
          ;(p += m + a), (d = e)
        }
        return u
      }),
        (i.chain = function (e, t, n, i, s, l) {
          for (var c = e.bodies, u = 1; u < c.length; u++) {
            var d = c[u - 1],
              p = c[u],
              f = d.bounds.max.y - d.bounds.min.y,
              v = d.bounds.max.x - d.bounds.min.x,
              m = p.bounds.max.y - p.bounds.min.y,
              y = {
                bodyA: d,
                pointA: { x: v * t, y: f * n },
                bodyB: p,
                pointB: { x: (p.bounds.max.x - p.bounds.min.x) * i, y: m * s }
              },
              g = a.extend(y, l)
            o.addConstraint(e, r.create(g))
          }
          return (e.label += ' Chain'), e
        }),
        (i.mesh = function (e, t, n, i, s) {
          var l,
            c,
            u,
            d,
            p,
            f = e.bodies
          for (l = 0; l < n; l++) {
            for (c = 1; c < t; c++)
              (u = f[c - 1 + l * t]),
                (d = f[c + l * t]),
                o.addConstraint(
                  e,
                  r.create(a.extend({ bodyA: u, bodyB: d }, s))
                )
            if (l > 0)
              for (c = 0; c < t; c++)
                (u = f[c + (l - 1) * t]),
                  (d = f[c + l * t]),
                  o.addConstraint(
                    e,
                    r.create(a.extend({ bodyA: u, bodyB: d }, s))
                  ),
                  i &&
                    c > 0 &&
                    ((p = f[c - 1 + (l - 1) * t]),
                    o.addConstraint(
                      e,
                      r.create(a.extend({ bodyA: p, bodyB: d }, s))
                    )),
                  i &&
                    c < t - 1 &&
                    ((p = f[c + 1 + (l - 1) * t]),
                    o.addConstraint(
                      e,
                      r.create(a.extend({ bodyA: p, bodyB: d }, s))
                    ))
          }
          return (e.label += ' Mesh'), e
        }),
        (i.pyramid = function (e, t, n, o, r, a, l) {
          return i.stack(e, t, n, o, r, a, function (t, i, a, c, u, d) {
            var p = Math.min(o, Math.ceil(n / 2)),
              f = u ? u.bounds.max.x - u.bounds.min.x : 0
            if (!(c > p || a < (c = p - c) || a > n - 1 - c))
              return (
                1 === d &&
                  s.translate(u, { x: (a + (n % 2 == 1 ? 1 : -1)) * f, y: 0 }),
                l(e + (u ? a * f : 0) + a * r, i, a, c, u, d)
              )
          })
        }),
        (i.newtonsCradle = function (e, t, n, i, a) {
          for (
            var s = o.create({ label: 'Newtons Cradle' }), c = 0;
            c < n;
            c++
          ) {
            var u = l.circle(e + c * (1.9 * i), t + a, i, {
                inertia: 1 / 0,
                restitution: 1,
                friction: 0,
                frictionAir: 1e-4,
                slop: 1
              }),
              d = r.create({ pointA: { x: e + c * (1.9 * i), y: t }, bodyB: u })
            o.addBody(s, u), o.addConstraint(s, d)
          }
          return s
        }),
        c(
          i,
          'newtonsCradle',
          'Composites.newtonsCradle ➤ moved to newtonsCradle example'
        ),
        (i.car = function (e, t, n, i, a) {
          var c = s.nextGroup(!0),
            u = 0.5 * -n + 20,
            d = 0.5 * n - 20,
            p = o.create({ label: 'Car' }),
            f = l.rectangle(e, t, n, i, {
              collisionFilter: { group: c },
              chamfer: { radius: 0.5 * i },
              density: 2e-4
            }),
            v = l.circle(e + u, t + 0, a, {
              collisionFilter: { group: c },
              friction: 0.8
            }),
            m = l.circle(e + d, t + 0, a, {
              collisionFilter: { group: c },
              friction: 0.8
            }),
            y = r.create({
              bodyB: f,
              pointB: { x: u, y: 0 },
              bodyA: v,
              stiffness: 1,
              length: 0
            }),
            g = r.create({
              bodyB: f,
              pointB: { x: d, y: 0 },
              bodyA: m,
              stiffness: 1,
              length: 0
            })
          return (
            o.addBody(p, f),
            o.addBody(p, v),
            o.addBody(p, m),
            o.addConstraint(p, y),
            o.addConstraint(p, g),
            p
          )
        }),
        c(i, 'car', 'Composites.car ➤ moved to car example'),
        (i.softBody = function (e, t, n, o, r, s, c, u, d, p) {
          ;(d = a.extend({ inertia: 1 / 0 }, d)),
            (p = a.extend(
              { stiffness: 0.2, render: { type: 'line', anchors: !1 } },
              p
            ))
          var f = i.stack(e, t, n, o, r, s, function (e, t) {
            return l.circle(e, t, u, d)
          })
          return i.mesh(f, n, o, c, p), (f.label = 'Soft Body'), f
        }),
        c(
          i,
          'softBody',
          'Composites.softBody ➤ moved to softBody and cloth examples'
        )
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(3),
        r = n(7),
        a = n(12),
        s = n(4),
        l = n(13),
        c = n(8),
        u = n(5),
        d = n(0),
        p = n(1)
      ;(i.create = function (e, t) {
        var n = (e ? e.mouse : null) || (t ? t.mouse : null)
        n ||
          (e && e.render && e.render.canvas
            ? (n = a.create(e.render.canvas))
            : t && t.element
            ? (n = a.create(t.element))
            : ((n = a.create()),
              d.warn(
                'MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected'
              )))
        var o = {
            type: 'mouseConstraint',
            mouse: n,
            element: null,
            body: null,
            constraint: c.create({
              label: 'Mouse Constraint',
              pointA: n.position,
              pointB: { x: 0, y: 0 },
              length: 0.01,
              stiffness: 0.1,
              angularStiffness: 1,
              render: { strokeStyle: '#90EE90', lineWidth: 3 }
            }),
            collisionFilter: { category: 1, mask: 4294967295, group: 0 }
          },
          r = d.extend(o, t)
        return (
          s.on(e, 'beforeUpdate', function () {
            var t = u.allBodies(e.world)
            i.update(r, t), i._triggerEvents(r)
          }),
          r
        )
      }),
        (i.update = function (e, t) {
          var n = e.mouse,
            i = e.constraint,
            a = e.body
          if (0 === n.button) {
            if (i.bodyB) r.set(i.bodyB, !1), (i.pointA = n.position)
            else
              for (var c = 0; c < t.length; c++)
                if (
                  ((a = t[c]),
                  p.contains(a.bounds, n.position) &&
                    l.canCollide(a.collisionFilter, e.collisionFilter))
                )
                  for (
                    var u = a.parts.length > 1 ? 1 : 0;
                    u < a.parts.length;
                    u++
                  ) {
                    var d = a.parts[u]
                    if (o.contains(d.vertices, n.position)) {
                      ;(i.pointA = n.position),
                        (i.bodyB = e.body = a),
                        (i.pointB = {
                          x: n.position.x - a.position.x,
                          y: n.position.y - a.position.y
                        }),
                        (i.angleB = a.angle),
                        r.set(a, !1),
                        s.trigger(e, 'startdrag', { mouse: n, body: a })
                      break
                    }
                  }
          } else
            (i.bodyB = e.body = null),
              (i.pointB = null),
              a && s.trigger(e, 'enddrag', { mouse: n, body: a })
        }),
        (i._triggerEvents = function (e) {
          var t = e.mouse,
            n = t.sourceEvents
          n.mousemove && s.trigger(e, 'mousemove', { mouse: t }),
            n.mousedown && s.trigger(e, 'mousedown', { mouse: t }),
            n.mouseup && s.trigger(e, 'mouseup', { mouse: t }),
            a.clearSourceEvents(t)
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(2),
        r = n(14),
        a = n(1),
        s = n(11),
        l = n(3)
      ;(i.collides = function (e, t) {
        for (var n = [], i = 0; i < t.length; i++) {
          var o = t[i]
          if (a.overlaps(o.bounds, e.bounds))
            for (
              var s = 1 === o.parts.length ? 0 : 1;
              s < o.parts.length;
              s++
            ) {
              var l = o.parts[s]
              if (a.overlaps(l.bounds, e.bounds)) {
                var c = r.collides(l, e)
                if (c.collided) {
                  n.push(c)
                  break
                }
              }
            }
        }
        return n
      }),
        (i.ray = function (e, t, n, r) {
          r = r || 1e-100
          for (
            var a = o.angle(t, n),
              l = o.magnitude(o.sub(t, n)),
              c = 0.5 * (n.x + t.x),
              u = 0.5 * (n.y + t.y),
              d = s.rectangle(c, u, l, r, { angle: a }),
              p = i.collides(d, e),
              f = 0;
            f < p.length;
            f += 1
          ) {
            var v = p[f]
            v.body = v.bodyB = v.bodyA
          }
          return p
        }),
        (i.region = function (e, t, n) {
          for (var i = [], o = 0; o < e.length; o++) {
            var r = e[o],
              s = a.overlaps(r.bounds, t)
            ;((s && !n) || (!s && n)) && i.push(r)
          }
          return i
        }),
        (i.point = function (e, t) {
          for (var n = [], i = 0; i < e.length; i++) {
            var o = e[i]
            if (a.contains(o.bounds, t))
              for (
                var r = 1 === o.parts.length ? 0 : 1;
                r < o.parts.length;
                r++
              ) {
                var s = o.parts[r]
                if (a.contains(s.bounds, t) && l.contains(s.vertices, t)) {
                  n.push(o)
                  break
                }
              }
          }
          return n
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(4),
        r = n(18),
        a = n(0)
      !(function () {
        var e, t, n
        ;('undefined' != typeof window &&
          ((e =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame),
          (t =
            window.cancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.msCancelAnimationFrame)),
        e) ||
          ((e = function (e) {
            n = setTimeout(function () {
              e(a.now())
            }, 1e3 / 60)
          }),
          (t = function () {
            clearTimeout(n)
          }))
        ;(i.create = function (e) {
          var t = a.extend(
            {
              fps: 60,
              correction: 1,
              deltaSampleSize: 60,
              counterTimestamp: 0,
              frameCounter: 0,
              deltaHistory: [],
              timePrev: null,
              timeScalePrev: 1,
              frameRequestId: null,
              isFixed: !1,
              enabled: !0
            },
            e
          )
          return (
            (t.delta = t.delta || 1e3 / t.fps),
            (t.deltaMin = t.deltaMin || 1e3 / t.fps),
            (t.deltaMax = t.deltaMax || 1e3 / (0.5 * t.fps)),
            (t.fps = 1e3 / t.delta),
            t
          )
        }),
          (i.run = function (t, n) {
            return (
              void 0 !== t.positionIterations && ((n = t), (t = i.create())),
              (function o(r) {
                ;(t.frameRequestId = e(o)), r && t.enabled && i.tick(t, n, r)
              })(),
              t
            )
          }),
          (i.tick = function (e, t, n) {
            var i,
              a = t.timing,
              s = 1,
              l = { timestamp: a.timestamp }
            o.trigger(e, 'beforeTick', l),
              e.isFixed
                ? (i = e.delta)
                : ((i = n - e.timePrev || e.delta),
                  (e.timePrev = n),
                  e.deltaHistory.push(i),
                  (e.deltaHistory = e.deltaHistory.slice(-e.deltaSampleSize)),
                  (s =
                    (i =
                      (i =
                        (i = Math.min.apply(null, e.deltaHistory)) < e.deltaMin
                          ? e.deltaMin
                          : i) > e.deltaMax
                        ? e.deltaMax
                        : i) / e.delta),
                  (e.delta = i)),
              0 !== e.timeScalePrev && (s *= a.timeScale / e.timeScalePrev),
              0 === a.timeScale && (s = 0),
              (e.timeScalePrev = a.timeScale),
              (e.correction = s),
              (e.frameCounter += 1),
              n - e.counterTimestamp >= 1e3 &&
                ((e.fps = e.frameCounter * ((n - e.counterTimestamp) / 1e3)),
                (e.counterTimestamp = n),
                (e.frameCounter = 0)),
              o.trigger(e, 'tick', l),
              o.trigger(e, 'beforeUpdate', l),
              r.update(t, i, s),
              o.trigger(e, 'afterUpdate', l),
              o.trigger(e, 'afterTick', l)
          }),
          (i.stop = function (e) {
            t(e.frameRequestId)
          }),
          (i.start = function (e, t) {
            i.run(e, t)
          })
      })()
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      n(1)
      var o = n(0)
      ;(i.pathToVertices = function (e, t) {
        'undefined' == typeof window ||
          'SVGPathSeg' in window ||
          o.warn(
            'Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.'
          )
        var n,
          r,
          a,
          s,
          l,
          c,
          u,
          d,
          p,
          f,
          v,
          m = [],
          y = 0,
          g = 0,
          x = 0
        t = t || 15
        var h = function (e, t, n) {
            var i = n % 2 == 1 && n > 1
            if (!p || e != p.x || t != p.y) {
              p && i ? ((f = p.x), (v = p.y)) : ((f = 0), (v = 0))
              var o = { x: f + e, y: v + t }
              ;(!i && p) || (p = o), m.push(o), (g = f + e), (x = v + t)
            }
          },
          b = function (e) {
            var t = e.pathSegTypeAsLetter.toUpperCase()
            if ('Z' !== t) {
              switch (t) {
                case 'M':
                case 'L':
                case 'T':
                case 'C':
                case 'S':
                case 'Q':
                  ;(g = e.x), (x = e.y)
                  break
                case 'H':
                  g = e.x
                  break
                case 'V':
                  x = e.y
              }
              h(g, x, e.pathSegType)
            }
          }
        for (
          i._svgPathToAbsolute(e), a = e.getTotalLength(), c = [], n = 0;
          n < e.pathSegList.numberOfItems;
          n += 1
        )
          c.push(e.pathSegList.getItem(n))
        for (u = c.concat(); y < a; ) {
          if ((l = c[e.getPathSegAtLength(y)]) != d) {
            for (; u.length && u[0] != l; ) b(u.shift())
            d = l
          }
          switch (l.pathSegTypeAsLetter.toUpperCase()) {
            case 'C':
            case 'T':
            case 'S':
            case 'Q':
            case 'A':
              ;(s = e.getPointAtLength(y)), h(s.x, s.y, 0)
          }
          y += t
        }
        for (n = 0, r = u.length; n < r; ++n) b(u[n])
        return m
      }),
        (i._svgPathToAbsolute = function (e) {
          for (
            var t,
              n,
              i,
              o,
              r,
              a,
              s = e.pathSegList,
              l = 0,
              c = 0,
              u = s.numberOfItems,
              d = 0;
            d < u;
            ++d
          ) {
            var p = s.getItem(d),
              f = p.pathSegTypeAsLetter
            if (/[MLHVCSQTA]/.test(f))
              'x' in p && (l = p.x), 'y' in p && (c = p.y)
            else
              switch (
                ('x1' in p && (i = l + p.x1),
                'x2' in p && (r = l + p.x2),
                'y1' in p && (o = c + p.y1),
                'y2' in p && (a = c + p.y2),
                'x' in p && (l += p.x),
                'y' in p && (c += p.y),
                f)
              ) {
                case 'm':
                  s.replaceItem(e.createSVGPathSegMovetoAbs(l, c), d)
                  break
                case 'l':
                  s.replaceItem(e.createSVGPathSegLinetoAbs(l, c), d)
                  break
                case 'h':
                  s.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(l), d)
                  break
                case 'v':
                  s.replaceItem(e.createSVGPathSegLinetoVerticalAbs(c), d)
                  break
                case 'c':
                  s.replaceItem(
                    e.createSVGPathSegCurvetoCubicAbs(l, c, i, o, r, a),
                    d
                  )
                  break
                case 's':
                  s.replaceItem(
                    e.createSVGPathSegCurvetoCubicSmoothAbs(l, c, r, a),
                    d
                  )
                  break
                case 'q':
                  s.replaceItem(
                    e.createSVGPathSegCurvetoQuadraticAbs(l, c, i, o),
                    d
                  )
                  break
                case 't':
                  s.replaceItem(
                    e.createSVGPathSegCurvetoQuadraticSmoothAbs(l, c),
                    d
                  )
                  break
                case 'a':
                  s.replaceItem(
                    e.createSVGPathSegArcAbs(
                      l,
                      c,
                      p.r1,
                      p.r2,
                      p.angle,
                      p.largeArcFlag,
                      p.sweepFlag
                    ),
                    d
                  )
                  break
                case 'z':
                case 'Z':
                  ;(l = t), (c = n)
              }
            ;('M' != f && 'm' != f) || ((t = l), (n = c))
          }
        })
    },
    function (e, t, n) {
      var i = {}
      e.exports = i
      var o = n(5)
      n(0)
      ;(i.create = o.create),
        (i.add = o.add),
        (i.remove = o.remove),
        (i.clear = o.clear),
        (i.addComposite = o.addComposite),
        (i.addBody = o.addBody),
        (i.addConstraint = o.addConstraint)
    }
  ])
})
