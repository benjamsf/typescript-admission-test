(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) r(d);
  new MutationObserver((d) => {
    for (const g of d)
      if (g.type === "childList")
        for (const R of g.addedNodes)
          R.tagName === "LINK" && R.rel === "modulepreload" && r(R);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(d) {
    const g = {};
    return (
      d.integrity && (g.integrity = d.integrity),
      d.referrerPolicy && (g.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (g.credentials = "include")
        : d.crossOrigin === "anonymous"
        ? (g.credentials = "omit")
        : (g.credentials = "same-origin"),
      g
    );
  }
  function r(d) {
    if (d.ep) return;
    d.ep = !0;
    const g = s(d);
    fetch(d.href, g);
  }
})();
function kd(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var bf = { exports: {} },
  Ou = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _d;
function Lm() {
  if (_d) return Ou;
  _d = 1;
  var i = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.fragment");
  function s(r, d, g) {
    var R = null;
    if (
      (g !== void 0 && (R = "" + g),
      d.key !== void 0 && (R = "" + d.key),
      "key" in d)
    ) {
      g = {};
      for (var M in d) M !== "key" && (g[M] = d[M]);
    } else g = d;
    return (
      (d = g.ref),
      { $$typeof: i, type: r, key: R, ref: d !== void 0 ? d : null, props: g }
    );
  }
  return (Ou.Fragment = o), (Ou.jsx = s), (Ou.jsxs = s), Ou;
}
var Ud;
function Gm() {
  return Ud || ((Ud = 1), (bf.exports = Lm())), bf.exports;
}
var K = Gm(),
  Ef = { exports: {} },
  et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nd;
function Xm() {
  if (Nd) return et;
  Nd = 1;
  var i = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    g = Symbol.for("react.consumer"),
    R = Symbol.for("react.context"),
    M = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    B = Symbol.iterator;
  function N(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (B && y[B]) || y["@@iterator"]),
        typeof y == "function" ? y : null);
  }
  var Q = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    G = {};
  function Z(y, C, L) {
    (this.props = y),
      (this.context = C),
      (this.refs = G),
      (this.updater = L || Q);
  }
  (Z.prototype.isReactComponent = {}),
    (Z.prototype.setState = function (y, C) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, y, C, "setState");
    }),
    (Z.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    });
  function q() {}
  q.prototype = Z.prototype;
  function w(y, C, L) {
    (this.props = y),
      (this.context = C),
      (this.refs = G),
      (this.updater = L || Q);
  }
  var P = (w.prototype = new q());
  (P.constructor = w), H(P, Z.prototype), (P.isPureReactComponent = !0);
  var ct = Array.isArray,
    I = { H: null, A: null, T: null, S: null, V: null },
    _t = Object.prototype.hasOwnProperty;
  function Rt(y, C, L, Y, J, ft) {
    return (
      (L = ft.ref),
      { $$typeof: i, type: y, key: C, ref: L !== void 0 ? L : null, props: ft }
    );
  }
  function zt(y, C) {
    return Rt(y.type, C, void 0, void 0, void 0, y.props);
  }
  function pt(y) {
    return typeof y == "object" && y !== null && y.$$typeof === i;
  }
  function kt(y) {
    var C = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function (L) {
        return C[L];
      })
    );
  }
  var se = /\/+/g;
  function wt(y, C) {
    return typeof y == "object" && y !== null && y.key != null
      ? kt("" + y.key)
      : C.toString(36);
  }
  function El() {}
  function Tl(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (
          (typeof y.status == "string"
            ? y.then(El, El)
            : ((y.status = "pending"),
              y.then(
                function (C) {
                  y.status === "pending" &&
                    ((y.status = "fulfilled"), (y.value = C));
                },
                function (C) {
                  y.status === "pending" &&
                    ((y.status = "rejected"), (y.reason = C));
                },
              )),
          y.status)
        ) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function Zt(y, C, L, Y, J) {
    var ft = typeof y;
    (ft === "undefined" || ft === "boolean") && (y = null);
    var tt = !1;
    if (y === null) tt = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          tt = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case i:
            case o:
              tt = !0;
              break;
            case x:
              return (tt = y._init), Zt(tt(y._payload), C, L, Y, J);
          }
      }
    if (tt)
      return (
        (J = J(y)),
        (tt = Y === "" ? "." + wt(y, 0) : Y),
        ct(J)
          ? ((L = ""),
            tt != null && (L = tt.replace(se, "$&/") + "/"),
            Zt(J, C, L, "", function (We) {
              return We;
            }))
          : J != null &&
            (pt(J) &&
              (J = zt(
                J,
                L +
                  (J.key == null || (y && y.key === J.key)
                    ? ""
                    : ("" + J.key).replace(se, "$&/") + "/") +
                  tt,
              )),
            C.push(J)),
        1
      );
    tt = 0;
    var ee = Y === "" ? "." : Y + ":";
    if (ct(y))
      for (var bt = 0; bt < y.length; bt++)
        (Y = y[bt]), (ft = ee + wt(Y, bt)), (tt += Zt(Y, C, L, ft, J));
    else if (((bt = N(y)), typeof bt == "function"))
      for (y = bt.call(y), bt = 0; !(Y = y.next()).done; )
        (Y = Y.value), (ft = ee + wt(Y, bt++)), (tt += Zt(Y, C, L, ft, J));
    else if (ft === "object") {
      if (typeof y.then == "function") return Zt(Tl(y), C, L, Y, J);
      throw (
        ((C = String(y)),
        Error(
          "Objects are not valid as a React child (found: " +
            (C === "[object Object]"
              ? "object with keys {" + Object.keys(y).join(", ") + "}"
              : C) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return tt;
  }
  function z(y, C, L) {
    if (y == null) return y;
    var Y = [],
      J = 0;
    return (
      Zt(y, Y, "", "", function (ft) {
        return C.call(L, ft, J++);
      }),
      Y
    );
  }
  function j(y) {
    if (y._status === -1) {
      var C = y._result;
      (C = C()),
        C.then(
          function (L) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 1), (y._result = L));
          },
          function (L) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 2), (y._result = L));
          },
        ),
        y._status === -1 && ((y._status = 0), (y._result = C));
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var W =
    typeof reportError == "function"
      ? reportError
      : function (y) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var C = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof y == "object" &&
                y !== null &&
                typeof y.message == "string"
                  ? String(y.message)
                  : String(y),
              error: y,
            });
            if (!window.dispatchEvent(C)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", y);
            return;
          }
          console.error(y);
        };
  function vt() {}
  return (
    (et.Children = {
      map: z,
      forEach: function (y, C, L) {
        z(
          y,
          function () {
            C.apply(this, arguments);
          },
          L,
        );
      },
      count: function (y) {
        var C = 0;
        return (
          z(y, function () {
            C++;
          }),
          C
        );
      },
      toArray: function (y) {
        return (
          z(y, function (C) {
            return C;
          }) || []
        );
      },
      only: function (y) {
        if (!pt(y))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return y;
      },
    }),
    (et.Component = Z),
    (et.Fragment = s),
    (et.Profiler = d),
    (et.PureComponent = w),
    (et.StrictMode = r),
    (et.Suspense = p),
    (et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (et.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (y) {
        return I.H.useMemoCache(y);
      },
    }),
    (et.cache = function (y) {
      return function () {
        return y.apply(null, arguments);
      };
    }),
    (et.cloneElement = function (y, C, L) {
      if (y == null)
        throw Error(
          "The argument must be a React element, but you passed " + y + ".",
        );
      var Y = H({}, y.props),
        J = y.key,
        ft = void 0;
      if (C != null)
        for (tt in (C.ref !== void 0 && (ft = void 0),
        C.key !== void 0 && (J = "" + C.key),
        C))
          !_t.call(C, tt) ||
            tt === "key" ||
            tt === "__self" ||
            tt === "__source" ||
            (tt === "ref" && C.ref === void 0) ||
            (Y[tt] = C[tt]);
      var tt = arguments.length - 2;
      if (tt === 1) Y.children = L;
      else if (1 < tt) {
        for (var ee = Array(tt), bt = 0; bt < tt; bt++)
          ee[bt] = arguments[bt + 2];
        Y.children = ee;
      }
      return Rt(y.type, J, void 0, void 0, ft, Y);
    }),
    (et.createContext = function (y) {
      return (
        (y = {
          $$typeof: R,
          _currentValue: y,
          _currentValue2: y,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (y.Provider = y),
        (y.Consumer = { $$typeof: g, _context: y }),
        y
      );
    }),
    (et.createElement = function (y, C, L) {
      var Y,
        J = {},
        ft = null;
      if (C != null)
        for (Y in (C.key !== void 0 && (ft = "" + C.key), C))
          _t.call(C, Y) &&
            Y !== "key" &&
            Y !== "__self" &&
            Y !== "__source" &&
            (J[Y] = C[Y]);
      var tt = arguments.length - 2;
      if (tt === 1) J.children = L;
      else if (1 < tt) {
        for (var ee = Array(tt), bt = 0; bt < tt; bt++)
          ee[bt] = arguments[bt + 2];
        J.children = ee;
      }
      if (y && y.defaultProps)
        for (Y in ((tt = y.defaultProps), tt))
          J[Y] === void 0 && (J[Y] = tt[Y]);
      return Rt(y, ft, void 0, void 0, null, J);
    }),
    (et.createRef = function () {
      return { current: null };
    }),
    (et.forwardRef = function (y) {
      return { $$typeof: M, render: y };
    }),
    (et.isValidElement = pt),
    (et.lazy = function (y) {
      return { $$typeof: x, _payload: { _status: -1, _result: y }, _init: j };
    }),
    (et.memo = function (y, C) {
      return { $$typeof: m, type: y, compare: C === void 0 ? null : C };
    }),
    (et.startTransition = function (y) {
      var C = I.T,
        L = {};
      I.T = L;
      try {
        var Y = y(),
          J = I.S;
        J !== null && J(L, Y),
          typeof Y == "object" &&
            Y !== null &&
            typeof Y.then == "function" &&
            Y.then(vt, W);
      } catch (ft) {
        W(ft);
      } finally {
        I.T = C;
      }
    }),
    (et.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (et.use = function (y) {
      return I.H.use(y);
    }),
    (et.useActionState = function (y, C, L) {
      return I.H.useActionState(y, C, L);
    }),
    (et.useCallback = function (y, C) {
      return I.H.useCallback(y, C);
    }),
    (et.useContext = function (y) {
      return I.H.useContext(y);
    }),
    (et.useDebugValue = function () {}),
    (et.useDeferredValue = function (y, C) {
      return I.H.useDeferredValue(y, C);
    }),
    (et.useEffect = function (y, C, L) {
      var Y = I.H;
      if (typeof L == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return Y.useEffect(y, C);
    }),
    (et.useId = function () {
      return I.H.useId();
    }),
    (et.useImperativeHandle = function (y, C, L) {
      return I.H.useImperativeHandle(y, C, L);
    }),
    (et.useInsertionEffect = function (y, C) {
      return I.H.useInsertionEffect(y, C);
    }),
    (et.useLayoutEffect = function (y, C) {
      return I.H.useLayoutEffect(y, C);
    }),
    (et.useMemo = function (y, C) {
      return I.H.useMemo(y, C);
    }),
    (et.useOptimistic = function (y, C) {
      return I.H.useOptimistic(y, C);
    }),
    (et.useReducer = function (y, C, L) {
      return I.H.useReducer(y, C, L);
    }),
    (et.useRef = function (y) {
      return I.H.useRef(y);
    }),
    (et.useState = function (y) {
      return I.H.useState(y);
    }),
    (et.useSyncExternalStore = function (y, C, L) {
      return I.H.useSyncExternalStore(y, C, L);
    }),
    (et.useTransition = function () {
      return I.H.useTransition();
    }),
    (et.version = "19.1.0"),
    et
  );
}
var Cd;
function Uf() {
  return Cd || ((Cd = 1), (Ef.exports = Xm())), Ef.exports;
}
var D = Uf();
const Qm = kd(D);
var Tf = { exports: {} },
  zu = {},
  Af = { exports: {} },
  Rf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hd;
function wm() {
  return (
    Hd ||
      ((Hd = 1),
      (function (i) {
        function o(z, j) {
          var W = z.length;
          z.push(j);
          t: for (; 0 < W; ) {
            var vt = (W - 1) >>> 1,
              y = z[vt];
            if (0 < d(y, j)) (z[vt] = j), (z[W] = y), (W = vt);
            else break t;
          }
        }
        function s(z) {
          return z.length === 0 ? null : z[0];
        }
        function r(z) {
          if (z.length === 0) return null;
          var j = z[0],
            W = z.pop();
          if (W !== j) {
            z[0] = W;
            t: for (var vt = 0, y = z.length, C = y >>> 1; vt < C; ) {
              var L = 2 * (vt + 1) - 1,
                Y = z[L],
                J = L + 1,
                ft = z[J];
              if (0 > d(Y, W))
                J < y && 0 > d(ft, Y)
                  ? ((z[vt] = ft), (z[J] = W), (vt = J))
                  : ((z[vt] = Y), (z[L] = W), (vt = L));
              else if (J < y && 0 > d(ft, W))
                (z[vt] = ft), (z[J] = W), (vt = J);
              else break t;
            }
          }
          return j;
        }
        function d(z, j) {
          var W = z.sortIndex - j.sortIndex;
          return W !== 0 ? W : z.id - j.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var g = performance;
          i.unstable_now = function () {
            return g.now();
          };
        } else {
          var R = Date,
            M = R.now();
          i.unstable_now = function () {
            return R.now() - M;
          };
        }
        var p = [],
          m = [],
          x = 1,
          B = null,
          N = 3,
          Q = !1,
          H = !1,
          G = !1,
          Z = !1,
          q = typeof setTimeout == "function" ? setTimeout : null,
          w = typeof clearTimeout == "function" ? clearTimeout : null,
          P = typeof setImmediate < "u" ? setImmediate : null;
        function ct(z) {
          for (var j = s(m); j !== null; ) {
            if (j.callback === null) r(m);
            else if (j.startTime <= z)
              r(m), (j.sortIndex = j.expirationTime), o(p, j);
            else break;
            j = s(m);
          }
        }
        function I(z) {
          if (((G = !1), ct(z), !H))
            if (s(p) !== null) (H = !0), _t || ((_t = !0), wt());
            else {
              var j = s(m);
              j !== null && Zt(I, j.startTime - z);
            }
        }
        var _t = !1,
          Rt = -1,
          zt = 5,
          pt = -1;
        function kt() {
          return Z ? !0 : !(i.unstable_now() - pt < zt);
        }
        function se() {
          if (((Z = !1), _t)) {
            var z = i.unstable_now();
            pt = z;
            var j = !0;
            try {
              t: {
                (H = !1), G && ((G = !1), w(Rt), (Rt = -1)), (Q = !0);
                var W = N;
                try {
                  e: {
                    for (
                      ct(z), B = s(p);
                      B !== null && !(B.expirationTime > z && kt());

                    ) {
                      var vt = B.callback;
                      if (typeof vt == "function") {
                        (B.callback = null), (N = B.priorityLevel);
                        var y = vt(B.expirationTime <= z);
                        if (((z = i.unstable_now()), typeof y == "function")) {
                          (B.callback = y), ct(z), (j = !0);
                          break e;
                        }
                        B === s(p) && r(p), ct(z);
                      } else r(p);
                      B = s(p);
                    }
                    if (B !== null) j = !0;
                    else {
                      var C = s(m);
                      C !== null && Zt(I, C.startTime - z), (j = !1);
                    }
                  }
                  break t;
                } finally {
                  (B = null), (N = W), (Q = !1);
                }
                j = void 0;
              }
            } finally {
              j ? wt() : (_t = !1);
            }
          }
        }
        var wt;
        if (typeof P == "function")
          wt = function () {
            P(se);
          };
        else if (typeof MessageChannel < "u") {
          var El = new MessageChannel(),
            Tl = El.port2;
          (El.port1.onmessage = se),
            (wt = function () {
              Tl.postMessage(null);
            });
        } else
          wt = function () {
            q(se, 0);
          };
        function Zt(z, j) {
          Rt = q(function () {
            z(i.unstable_now());
          }, j);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (i.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (zt = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (i.unstable_next = function (z) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var j = 3;
                break;
              default:
                j = N;
            }
            var W = N;
            N = j;
            try {
              return z();
            } finally {
              N = W;
            }
          }),
          (i.unstable_requestPaint = function () {
            Z = !0;
          }),
          (i.unstable_runWithPriority = function (z, j) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var W = N;
            N = z;
            try {
              return j();
            } finally {
              N = W;
            }
          }),
          (i.unstable_scheduleCallback = function (z, j, W) {
            var vt = i.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? vt + W : vt))
                : (W = vt),
              z)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = W + y),
              (z = {
                id: x++,
                callback: j,
                priorityLevel: z,
                startTime: W,
                expirationTime: y,
                sortIndex: -1,
              }),
              W > vt
                ? ((z.sortIndex = W),
                  o(m, z),
                  s(p) === null &&
                    z === s(m) &&
                    (G ? (w(Rt), (Rt = -1)) : (G = !0), Zt(I, W - vt)))
                : ((z.sortIndex = y),
                  o(p, z),
                  H || Q || ((H = !0), _t || ((_t = !0), wt()))),
              z
            );
          }),
          (i.unstable_shouldYield = kt),
          (i.unstable_wrapCallback = function (z) {
            var j = N;
            return function () {
              var W = N;
              N = j;
              try {
                return z.apply(this, arguments);
              } finally {
                N = W;
              }
            };
          });
      })(Rf)),
    Rf
  );
}
var Bd;
function Zm() {
  return Bd || ((Bd = 1), (Af.exports = wm())), Af.exports;
}
var xf = { exports: {} },
  Jt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qd;
function Vm() {
  if (qd) return Jt;
  qd = 1;
  var i = Uf();
  function o(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        m += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var r = {
      d: {
        f: s,
        r: function () {
          throw Error(o(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for("react.portal");
  function g(p, m, x) {
    var B =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: B == null ? null : "" + B,
      children: p,
      containerInfo: m,
      implementation: x,
    };
  }
  var R = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function M(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Jt.createPortal = function (p, m) {
      var x =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(o(299));
      return g(p, m, null, x);
    }),
    (Jt.flushSync = function (p) {
      var m = R.T,
        x = r.p;
      try {
        if (((R.T = null), (r.p = 2), p)) return p();
      } finally {
        (R.T = m), (r.p = x), r.d.f();
      }
    }),
    (Jt.preconnect = function (p, m) {
      typeof p == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        r.d.C(p, m));
    }),
    (Jt.prefetchDNS = function (p) {
      typeof p == "string" && r.d.D(p);
    }),
    (Jt.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var x = m.as,
          B = M(x, m.crossOrigin),
          N = typeof m.integrity == "string" ? m.integrity : void 0,
          Q = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        x === "style"
          ? r.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: B,
              integrity: N,
              fetchPriority: Q,
            })
          : x === "script" &&
            r.d.X(p, {
              crossOrigin: B,
              integrity: N,
              fetchPriority: Q,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (Jt.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var x = M(m.as, m.crossOrigin);
            r.d.M(p, {
              crossOrigin: x,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && r.d.M(p);
    }),
    (Jt.preload = function (p, m) {
      if (
        typeof p == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var x = m.as,
          B = M(x, m.crossOrigin);
        r.d.L(p, x, {
          crossOrigin: B,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (Jt.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var x = M(m.as, m.crossOrigin);
          r.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: x,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else r.d.m(p);
    }),
    (Jt.requestFormReset = function (p) {
      r.d.r(p);
    }),
    (Jt.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (Jt.useFormState = function (p, m, x) {
      return R.H.useFormState(p, m, x);
    }),
    (Jt.useFormStatus = function () {
      return R.H.useHostTransitionStatus();
    }),
    (Jt.version = "19.1.0"),
    Jt
  );
}
var Yd;
function Km() {
  if (Yd) return xf.exports;
  Yd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return i(), (xf.exports = Vm()), xf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd;
function Jm() {
  if (jd) return zu;
  jd = 1;
  var i = Zm(),
    o = Uf(),
    s = Km();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function g(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function R(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function M(t) {
    if (g(t) !== t) throw Error(r(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = g(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var u = l.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === l) return M(u), t;
          if (n === a) return M(u), e;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== a.return) (l = u), (a = n);
      else {
        for (var c = !1, f = u.child; f; ) {
          if (f === l) {
            (c = !0), (l = u), (a = n);
            break;
          }
          if (f === a) {
            (c = !0), (a = u), (l = n);
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === l) {
              (c = !0), (l = n), (a = u);
              break;
            }
            if (f === a) {
              (c = !0), (a = n), (l = u);
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (l.alternate !== a) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? t : e;
  }
  function m(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = m(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var x = Object.assign,
    B = Symbol.for("react.element"),
    N = Symbol.for("react.transitional.element"),
    Q = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    G = Symbol.for("react.strict_mode"),
    Z = Symbol.for("react.profiler"),
    q = Symbol.for("react.provider"),
    w = Symbol.for("react.consumer"),
    P = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    I = Symbol.for("react.suspense"),
    _t = Symbol.for("react.suspense_list"),
    Rt = Symbol.for("react.memo"),
    zt = Symbol.for("react.lazy"),
    pt = Symbol.for("react.activity"),
    kt = Symbol.for("react.memo_cache_sentinel"),
    se = Symbol.iterator;
  function wt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (se && t[se]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var El = Symbol.for("react.client.reference");
  function Tl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === El ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case H:
        return "Fragment";
      case Z:
        return "Profiler";
      case G:
        return "StrictMode";
      case I:
        return "Suspense";
      case _t:
        return "SuspenseList";
      case pt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Q:
          return "Portal";
        case P:
          return (t.displayName || "Context") + ".Provider";
        case w:
          return (t._context.displayName || "Context") + ".Consumer";
        case ct:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Rt:
          return (
            (e = t.displayName || null), e !== null ? e : Tl(t.type) || "Memo"
          );
        case zt:
          (e = t._payload), (t = t._init);
          try {
            return Tl(t(e));
          } catch {}
      }
    return null;
  }
  var Zt = Array.isArray,
    z = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    j = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = { pending: !1, data: null, method: null, action: null },
    vt = [],
    y = -1;
  function C(t) {
    return { current: t };
  }
  function L(t) {
    0 > y || ((t.current = vt[y]), (vt[y] = null), y--);
  }
  function Y(t, e) {
    y++, (vt[y] = t.current), (t.current = e);
  }
  var J = C(null),
    ft = C(null),
    tt = C(null),
    ee = C(null);
  function bt(t, e) {
    switch ((Y(tt, e), Y(ft, t), Y(J, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? ud(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = ud(e)), (t = nd(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    L(J), Y(J, t);
  }
  function We() {
    L(J), L(ft), L(tt);
  }
  function ui(t) {
    t.memoizedState !== null && Y(ee, t);
    var e = J.current,
      l = nd(e, t.type);
    e !== l && (Y(ft, t), Y(J, l));
  }
  function Bu(t) {
    ft.current === t && (L(J), L(ft)),
      ee.current === t && (L(ee), (Eu._currentValue = W));
  }
  var ni = Object.prototype.hasOwnProperty,
    ii = i.unstable_scheduleCallback,
    ci = i.unstable_cancelCallback,
    gh = i.unstable_shouldYield,
    Sh = i.unstable_requestPaint,
    Re = i.unstable_now,
    ph = i.unstable_getCurrentPriorityLevel,
    Yf = i.unstable_ImmediatePriority,
    jf = i.unstable_UserBlockingPriority,
    qu = i.unstable_NormalPriority,
    bh = i.unstable_LowPriority,
    Lf = i.unstable_IdlePriority,
    Eh = i.log,
    Th = i.unstable_setDisableYieldValue,
    Ma = null,
    le = null;
  function Fe(t) {
    if (
      (typeof Eh == "function" && Th(t),
      le && typeof le.setStrictMode == "function")
    )
      try {
        le.setStrictMode(Ma, t);
      } catch {}
  }
  var ae = Math.clz32 ? Math.clz32 : xh,
    Ah = Math.log,
    Rh = Math.LN2;
  function xh(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Ah(t) / Rh) | 0)) | 0;
  }
  var Yu = 256,
    ju = 4194304;
  function Al(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Lu(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = t.suspendedLanes,
      c = t.pingedLanes;
    t = t.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~n),
          a !== 0
            ? (u = Al(a))
            : ((c &= f),
              c !== 0
                ? (u = Al(c))
                : l || ((l = f & ~t), l !== 0 && (u = Al(l)))))
        : ((f = a & ~n),
          f !== 0
            ? (u = Al(f))
            : c !== 0
            ? (u = Al(c))
            : l || ((l = a & ~t), l !== 0 && (u = Al(l)))),
      u === 0
        ? 0
        : e !== 0 &&
          e !== u &&
          (e & n) === 0 &&
          ((n = u & -u),
          (l = e & -e),
          n >= l || (n === 32 && (l & 4194048) !== 0))
        ? e
        : u
    );
  }
  function _a(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Oh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Gf() {
    var t = Yu;
    return (Yu <<= 1), (Yu & 4194048) === 0 && (Yu = 256), t;
  }
  function Xf() {
    var t = ju;
    return (ju <<= 1), (ju & 62914560) === 0 && (ju = 4194304), t;
  }
  function fi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ua(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function zh(t, e, l, a, u, n) {
    var c = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var f = t.entanglements,
      h = t.expirationTimes,
      E = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var O = 31 - ae(l),
        U = 1 << O;
      (f[O] = 0), (h[O] = -1);
      var T = E[O];
      if (T !== null)
        for (E[O] = null, O = 0; O < T.length; O++) {
          var A = T[O];
          A !== null && (A.lane &= -536870913);
        }
      l &= ~U;
    }
    a !== 0 && Qf(t, a, 0),
      n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(c & ~e));
  }
  function Qf(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - ae(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194090));
  }
  function wf(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - ae(l),
        u = 1 << a;
      (u & e) | (t[a] & e) && (t[a] |= e), (l &= ~u);
    }
  }
  function ri(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function oi(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Zf() {
    var t = j.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Rd(t.type));
  }
  function Dh(t, e) {
    var l = j.p;
    try {
      return (j.p = t), e();
    } finally {
      j.p = l;
    }
  }
  var Pe = Math.random().toString(36).slice(2),
    Vt = "__reactFiber$" + Pe,
    Wt = "__reactProps$" + Pe,
    Ql = "__reactContainer$" + Pe,
    si = "__reactEvents$" + Pe,
    Mh = "__reactListeners$" + Pe,
    _h = "__reactHandles$" + Pe,
    Vf = "__reactResources$" + Pe,
    Na = "__reactMarker$" + Pe;
  function di(t) {
    delete t[Vt], delete t[Wt], delete t[si], delete t[Mh], delete t[_h];
  }
  function wl(t) {
    var e = t[Vt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[Ql] || l[Vt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = rd(t); t !== null; ) {
            if ((l = t[Vt])) return l;
            t = rd(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function Zl(t) {
    if ((t = t[Vt] || t[Ql])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ca(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Vl(t) {
    var e = t[Vf];
    return (
      e ||
        (e = t[Vf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Bt(t) {
    t[Na] = !0;
  }
  var Kf = new Set(),
    Jf = {};
  function Rl(t, e) {
    Kl(t, e), Kl(t + "Capture", e);
  }
  function Kl(t, e) {
    for (Jf[t] = e, t = 0; t < e.length; t++) Kf.add(e[t]);
  }
  var Uh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    kf = {},
    $f = {};
  function Nh(t) {
    return ni.call($f, t)
      ? !0
      : ni.call(kf, t)
      ? !1
      : Uh.test(t)
      ? ($f[t] = !0)
      : ((kf[t] = !0), !1);
  }
  function Gu(t, e, l) {
    if (Nh(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Xu(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Ne(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  var hi, Wf;
  function Jl(t) {
    if (hi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (hi = (e && e[1]) || ""),
          (Wf =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      hi +
      t +
      Wf
    );
  }
  var mi = !1;
  function yi(t, e) {
    if (!t || mi) return "";
    mi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var U = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(U.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(U, []);
                } catch (A) {
                  var T = A;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (A) {
                  T = A;
                }
                t.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                T = A;
              }
              (U = t()) &&
                typeof U.catch == "function" &&
                U.catch(function () {});
            }
          } catch (A) {
            if (A && T && typeof A.stack == "string") return [A.stack, T.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        c = n[0],
        f = n[1];
      if (c && f) {
        var h = c.split(`
`),
          E = f.split(`
`);
        for (
          u = a = 0;
          a < h.length && !h[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; u < E.length && !E[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === h.length || u === E.length)
          for (
            a = h.length - 1, u = E.length - 1;
            1 <= a && 0 <= u && h[a] !== E[u];

          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (h[a] !== E[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || h[a] !== E[u])) {
                  var O =
                    `
` + h[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      O.includes("<anonymous>") &&
                      (O = O.replace("<anonymous>", t.displayName)),
                    O
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (mi = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? Jl(l) : "";
  }
  function Ch(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Jl(t.type);
      case 16:
        return Jl("Lazy");
      case 13:
        return Jl("Suspense");
      case 19:
        return Jl("SuspenseList");
      case 0:
      case 15:
        return yi(t.type, !1);
      case 11:
        return yi(t.type.render, !1);
      case 1:
        return yi(t.type, !0);
      case 31:
        return Jl("Activity");
      default:
        return "";
    }
  }
  function Ff(t) {
    try {
      var e = "";
      do (e += Ch(t)), (t = t.return);
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function de(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Pf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Hh(t) {
    var e = Pf(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var u = l.get,
        n = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (c) {
            (a = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Qu(t) {
    t._valueTracker || (t._valueTracker = Hh(t));
  }
  function If(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = Pf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function wu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Bh = /[\n"\\]/g;
  function he(t) {
    return t.replace(Bh, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function vi(t, e, l, a, u, n, c, f) {
    (t.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (t.type = c)
        : t.removeAttribute("type"),
      e != null
        ? c === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + de(e))
          : t.value !== "" + de(e) && (t.value = "" + de(e))
        : (c !== "submit" && c !== "reset") || t.removeAttribute("value"),
      e != null
        ? gi(t, c, de(e))
        : l != null
        ? gi(t, c, de(l))
        : a != null && t.removeAttribute("value"),
      u == null && n != null && (t.defaultChecked = !!n),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.name = "" + de(f))
        : t.removeAttribute("name");
  }
  function tr(t, e, l, a, u, n, c, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (t.type = n),
      e != null || l != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || e != null)) return;
      (l = l != null ? "" + de(l) : ""),
        (e = e != null ? "" + de(e) : l),
        f || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = f ? t.checked : !!a),
      (t.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.name = c);
  }
  function gi(t, e, l) {
    (e === "number" && wu(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function kl(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < l.length; u++) e["$" + l[u]] = !0;
      for (l = 0; l < t.length; l++)
        (u = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== u && (t[l].selected = u),
          u && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + de(l), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === l) {
          (t[u].selected = !0), a && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function er(t, e, l) {
    if (
      e != null &&
      ((e = "" + de(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + de(l) : "";
  }
  function lr(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(r(92));
        if (Zt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (e = l);
    }
    (l = de(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a);
  }
  function $l(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var qh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function ar(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, l)
      : typeof l != "number" || l === 0 || qh.has(e)
      ? e === "float"
        ? (t.cssFloat = l)
        : (t[e] = ("" + l).trim())
      : (t[e] = l + "px");
  }
  function ur(t, e, l) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var u in e)
        (a = e[u]), e.hasOwnProperty(u) && l[u] !== a && ar(t, u, a);
    } else for (var n in e) e.hasOwnProperty(n) && ar(t, n, e[n]);
  }
  function Si(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Yh = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    jh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zu(t) {
    return jh.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var pi = null;
  function bi(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Wl = null,
    Fl = null;
  function nr(t) {
    var e = Zl(t);
    if (e && (t = e.stateNode)) {
      var l = t[Wt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (vi(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + he("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var u = a[Wt] || null;
                if (!u) throw Error(r(90));
                vi(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (e = 0; e < l.length; e++)
              (a = l[e]), a.form === t.form && If(a);
          }
          break t;
        case "textarea":
          er(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && kl(t, !!l.multiple, e, !1);
      }
    }
  }
  var Ei = !1;
  function ir(t, e, l) {
    if (Ei) return t(e, l);
    Ei = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Ei = !1),
        (Wl !== null || Fl !== null) &&
          (_n(), Wl && ((e = Wl), (t = Fl), (Fl = Wl = null), nr(e), t)))
      )
        for (e = 0; e < t.length; e++) nr(t[e]);
    }
  }
  function Ha(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Wt] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(r(231, e, typeof l));
    return l;
  }
  var Ce = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ti = !1;
  if (Ce)
    try {
      var Ba = {};
      Object.defineProperty(Ba, "passive", {
        get: function () {
          Ti = !0;
        },
      }),
        window.addEventListener("test", Ba, Ba),
        window.removeEventListener("test", Ba, Ba);
    } catch {
      Ti = !1;
    }
  var Ie = null,
    Ai = null,
    Vu = null;
  function cr() {
    if (Vu) return Vu;
    var t,
      e = Ai,
      l = e.length,
      a,
      u = "value" in Ie ? Ie.value : Ie.textContent,
      n = u.length;
    for (t = 0; t < l && e[t] === u[t]; t++);
    var c = l - t;
    for (a = 1; a <= c && e[l - a] === u[n - a]; a++);
    return (Vu = u.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Ku(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Ju() {
    return !0;
  }
  function fr() {
    return !1;
  }
  function Ft(t) {
    function e(l, a, u, n, c) {
      (this._reactName = l),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var f in t)
        t.hasOwnProperty(f) && ((l = t[f]), (this[f] = l ? l(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Ju
          : fr),
        (this.isPropagationStopped = fr),
        this
      );
    }
    return (
      x(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Ju));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Ju));
        },
        persist: function () {},
        isPersistent: Ju,
      }),
      e
    );
  }
  var xl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ku = Ft(xl),
    qa = x({}, xl, { view: 0, detail: 0 }),
    Lh = Ft(qa),
    Ri,
    xi,
    Ya,
    $u = x({}, qa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: zi,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ya &&
              (Ya && t.type === "mousemove"
                ? ((Ri = t.screenX - Ya.screenX), (xi = t.screenY - Ya.screenY))
                : (xi = Ri = 0),
              (Ya = t)),
            Ri);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : xi;
      },
    }),
    rr = Ft($u),
    Gh = x({}, $u, { dataTransfer: 0 }),
    Xh = Ft(Gh),
    Qh = x({}, qa, { relatedTarget: 0 }),
    Oi = Ft(Qh),
    wh = x({}, xl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Zh = Ft(wh),
    Vh = x({}, xl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Kh = Ft(Vh),
    Jh = x({}, xl, { data: 0 }),
    or = Ft(Jh),
    kh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    $h = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Wh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Fh(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Wh[t])
      ? !!e[t]
      : !1;
  }
  function zi() {
    return Fh;
  }
  var Ph = x({}, qa, {
      key: function (t) {
        if (t.key) {
          var e = kh[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Ku(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? $h[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zi,
      charCode: function (t) {
        return t.type === "keypress" ? Ku(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Ku(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    Ih = Ft(Ph),
    t0 = x({}, $u, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    sr = Ft(t0),
    e0 = x({}, qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zi,
    }),
    l0 = Ft(e0),
    a0 = x({}, xl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    u0 = Ft(a0),
    n0 = x({}, $u, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    i0 = Ft(n0),
    c0 = x({}, xl, { newState: 0, oldState: 0 }),
    f0 = Ft(c0),
    r0 = [9, 13, 27, 32],
    Di = Ce && "CompositionEvent" in window,
    ja = null;
  Ce && "documentMode" in document && (ja = document.documentMode);
  var o0 = Ce && "TextEvent" in window && !ja,
    dr = Ce && (!Di || (ja && 8 < ja && 11 >= ja)),
    hr = " ",
    mr = !1;
  function yr(t, e) {
    switch (t) {
      case "keyup":
        return r0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function vr(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Pl = !1;
  function s0(t, e) {
    switch (t) {
      case "compositionend":
        return vr(e);
      case "keypress":
        return e.which !== 32 ? null : ((mr = !0), hr);
      case "textInput":
        return (t = e.data), t === hr && mr ? null : t;
      default:
        return null;
    }
  }
  function d0(t, e) {
    if (Pl)
      return t === "compositionend" || (!Di && yr(t, e))
        ? ((t = cr()), (Vu = Ai = Ie = null), (Pl = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return dr && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var h0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function gr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!h0[t.type] : e === "textarea";
  }
  function Sr(t, e, l, a) {
    Wl ? (Fl ? Fl.push(a) : (Fl = [a])) : (Wl = a),
      (e = qn(e, "onChange")),
      0 < e.length &&
        ((l = new ku("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e }));
  }
  var La = null,
    Ga = null;
  function m0(t) {
    Is(t, 0);
  }
  function Wu(t) {
    var e = Ca(t);
    if (If(e)) return t;
  }
  function pr(t, e) {
    if (t === "change") return e;
  }
  var br = !1;
  if (Ce) {
    var Mi;
    if (Ce) {
      var _i = "oninput" in document;
      if (!_i) {
        var Er = document.createElement("div");
        Er.setAttribute("oninput", "return;"),
          (_i = typeof Er.oninput == "function");
      }
      Mi = _i;
    } else Mi = !1;
    br = Mi && (!document.documentMode || 9 < document.documentMode);
  }
  function Tr() {
    La && (La.detachEvent("onpropertychange", Ar), (Ga = La = null));
  }
  function Ar(t) {
    if (t.propertyName === "value" && Wu(Ga)) {
      var e = [];
      Sr(e, Ga, t, bi(t)), ir(m0, e);
    }
  }
  function y0(t, e, l) {
    t === "focusin"
      ? (Tr(), (La = e), (Ga = l), La.attachEvent("onpropertychange", Ar))
      : t === "focusout" && Tr();
  }
  function v0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Wu(Ga);
  }
  function g0(t, e) {
    if (t === "click") return Wu(e);
  }
  function S0(t, e) {
    if (t === "input" || t === "change") return Wu(e);
  }
  function p0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ue = typeof Object.is == "function" ? Object.is : p0;
  function Xa(t, e) {
    if (ue(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var u = l[a];
      if (!ni.call(e, u) || !ue(t[u], e[u])) return !1;
    }
    return !0;
  }
  function Rr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function xr(t, e) {
    var l = Rr(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Rr(l);
    }
  }
  function Or(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Or(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function zr(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = wu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = wu(t.document);
    }
    return e;
  }
  function Ui(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var b0 = Ce && "documentMode" in document && 11 >= document.documentMode,
    Il = null,
    Ni = null,
    Qa = null,
    Ci = !1;
  function Dr(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Ci ||
      Il == null ||
      Il !== wu(a) ||
      ((a = Il),
      "selectionStart" in a && Ui(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Qa && Xa(Qa, a)) ||
        ((Qa = a),
        (a = qn(Ni, "onSelect")),
        0 < a.length &&
          ((e = new ku("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = Il))));
  }
  function Ol(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var ta = {
      animationend: Ol("Animation", "AnimationEnd"),
      animationiteration: Ol("Animation", "AnimationIteration"),
      animationstart: Ol("Animation", "AnimationStart"),
      transitionrun: Ol("Transition", "TransitionRun"),
      transitionstart: Ol("Transition", "TransitionStart"),
      transitioncancel: Ol("Transition", "TransitionCancel"),
      transitionend: Ol("Transition", "TransitionEnd"),
    },
    Hi = {},
    Mr = {};
  Ce &&
    ((Mr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ta.animationend.animation,
      delete ta.animationiteration.animation,
      delete ta.animationstart.animation),
    "TransitionEvent" in window || delete ta.transitionend.transition);
  function zl(t) {
    if (Hi[t]) return Hi[t];
    if (!ta[t]) return t;
    var e = ta[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Mr) return (Hi[t] = e[l]);
    return t;
  }
  var _r = zl("animationend"),
    Ur = zl("animationiteration"),
    Nr = zl("animationstart"),
    E0 = zl("transitionrun"),
    T0 = zl("transitionstart"),
    A0 = zl("transitioncancel"),
    Cr = zl("transitionend"),
    Hr = new Map(),
    Bi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Bi.push("scrollEnd");
  function Ee(t, e) {
    Hr.set(t, e), Rl(e, [t]);
  }
  var Br = new WeakMap();
  function me(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Br.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: Ff(e) }), Br.set(t, e), e);
    }
    return { value: t, source: e, stack: Ff(e) };
  }
  var ye = [],
    ea = 0,
    qi = 0;
  function Fu() {
    for (var t = ea, e = (qi = ea = 0); e < t; ) {
      var l = ye[e];
      ye[e++] = null;
      var a = ye[e];
      ye[e++] = null;
      var u = ye[e];
      ye[e++] = null;
      var n = ye[e];
      if (((ye[e++] = null), a !== null && u !== null)) {
        var c = a.pending;
        c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
          (a.pending = u);
      }
      n !== 0 && qr(l, u, n);
    }
  }
  function Pu(t, e, l, a) {
    (ye[ea++] = t),
      (ye[ea++] = e),
      (ye[ea++] = l),
      (ye[ea++] = a),
      (qi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Yi(t, e, l, a) {
    return Pu(t, e, l, a), Iu(t);
  }
  function la(t, e) {
    return Pu(t, null, null, e), Iu(t);
  }
  function qr(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var u = !1, n = t.return; n !== null; )
      (n.childLanes |= l),
        (a = n.alternate),
        a !== null && (a.childLanes |= l),
        n.tag === 22 &&
          ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = n),
        (n = n.return);
    return t.tag === 3
      ? ((n = t.stateNode),
        u &&
          e !== null &&
          ((u = 31 - ae(l)),
          (t = n.hiddenUpdates),
          (a = t[u]),
          a === null ? (t[u] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        n)
      : null;
  }
  function Iu(t) {
    if (50 < hu) throw ((hu = 0), (wc = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var aa = {};
  function R0(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ne(t, e, l, a) {
    return new R0(t, e, l, a);
  }
  function ji(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function He(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = ne(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Yr(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function tn(t, e, l, a, u, n) {
    var c = 0;
    if (((a = t), typeof t == "function")) ji(t) && (c = 1);
    else if (typeof t == "string")
      c = Om(t, l, J.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case pt:
          return (t = ne(31, l, e, u)), (t.elementType = pt), (t.lanes = n), t;
        case H:
          return Dl(l.children, u, n, e);
        case G:
          (c = 8), (u |= 24);
          break;
        case Z:
          return (
            (t = ne(12, l, e, u | 2)), (t.elementType = Z), (t.lanes = n), t
          );
        case I:
          return (t = ne(13, l, e, u)), (t.elementType = I), (t.lanes = n), t;
        case _t:
          return (t = ne(19, l, e, u)), (t.elementType = _t), (t.lanes = n), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case q:
              case P:
                c = 10;
                break t;
              case w:
                c = 9;
                break t;
              case ct:
                c = 11;
                break t;
              case Rt:
                c = 14;
                break t;
              case zt:
                (c = 16), (a = null);
                break t;
            }
          (c = 29),
            (l = Error(r(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = ne(c, l, e, u)), (e.elementType = t), (e.type = a), (e.lanes = n), e
    );
  }
  function Dl(t, e, l, a) {
    return (t = ne(7, t, a, e)), (t.lanes = l), t;
  }
  function Li(t, e, l) {
    return (t = ne(6, t, null, e)), (t.lanes = l), t;
  }
  function Gi(t, e, l) {
    return (
      (e = ne(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var ua = [],
    na = 0,
    en = null,
    ln = 0,
    ve = [],
    ge = 0,
    Ml = null,
    Be = 1,
    qe = "";
  function _l(t, e) {
    (ua[na++] = ln), (ua[na++] = en), (en = t), (ln = e);
  }
  function jr(t, e, l) {
    (ve[ge++] = Be), (ve[ge++] = qe), (ve[ge++] = Ml), (Ml = t);
    var a = Be;
    t = qe;
    var u = 32 - ae(a) - 1;
    (a &= ~(1 << u)), (l += 1);
    var n = 32 - ae(e) + u;
    if (30 < n) {
      var c = u - (u % 5);
      (n = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (u -= c),
        (Be = (1 << (32 - ae(e) + u)) | (l << u) | a),
        (qe = n + t);
    } else (Be = (1 << n) | (l << u) | a), (qe = t);
  }
  function Xi(t) {
    t.return !== null && (_l(t, 1), jr(t, 1, 0));
  }
  function Qi(t) {
    for (; t === en; )
      (en = ua[--na]), (ua[na] = null), (ln = ua[--na]), (ua[na] = null);
    for (; t === Ml; )
      (Ml = ve[--ge]),
        (ve[ge] = null),
        (qe = ve[--ge]),
        (ve[ge] = null),
        (Be = ve[--ge]),
        (ve[ge] = null);
  }
  var $t = null,
    xt = null,
    ot = !1,
    Ul = null,
    xe = !1,
    wi = Error(r(519));
  function Nl(t) {
    var e = Error(r(418, ""));
    throw (Va(me(e, t)), wi);
  }
  function Lr(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Vt] = t), (e[Wt] = a), l)) {
      case "dialog":
        nt("cancel", e), nt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        nt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < yu.length; l++) nt(yu[l], e);
        break;
      case "source":
        nt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        nt("error", e), nt("load", e);
        break;
      case "details":
        nt("toggle", e);
        break;
      case "input":
        nt("invalid", e),
          tr(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ),
          Qu(e);
        break;
      case "select":
        nt("invalid", e);
        break;
      case "textarea":
        nt("invalid", e), lr(e, a.value, a.defaultValue, a.children), Qu(e);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      ad(e.textContent, l)
        ? (a.popover != null && (nt("beforetoggle", e), nt("toggle", e)),
          a.onScroll != null && nt("scroll", e),
          a.onScrollEnd != null && nt("scrollend", e),
          a.onClick != null && (e.onclick = Yn),
          (e = !0))
        : (e = !1),
      e || Nl(t);
  }
  function Gr(t) {
    for ($t = t.return; $t; )
      switch ($t.tag) {
        case 5:
        case 13:
          xe = !1;
          return;
        case 27:
        case 3:
          xe = !0;
          return;
        default:
          $t = $t.return;
      }
  }
  function wa(t) {
    if (t !== $t) return !1;
    if (!ot) return Gr(t), (ot = !0), !1;
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || nf(t.type, t.memoizedProps))),
        (l = !l)),
      l && xt && Nl(t),
      Gr(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === "/$")) {
              if (e === 0) {
                xt = Ae(t.nextSibling);
                break t;
              }
              e--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || e++;
          t = t.nextSibling;
        }
        xt = null;
      }
    } else
      e === 27
        ? ((e = xt), yl(t.type) ? ((t = of), (of = null), (xt = t)) : (xt = e))
        : (xt = $t ? Ae(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Za() {
    (xt = $t = null), (ot = !1);
  }
  function Xr() {
    var t = Ul;
    return (
      t !== null &&
        (te === null ? (te = t) : te.push.apply(te, t), (Ul = null)),
      t
    );
  }
  function Va(t) {
    Ul === null ? (Ul = [t]) : Ul.push(t);
  }
  var Zi = C(null),
    Cl = null,
    Ye = null;
  function tl(t, e, l) {
    Y(Zi, e._currentValue), (e._currentValue = l);
  }
  function je(t) {
    (t._currentValue = Zi.current), L(Zi);
  }
  function Vi(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Ki(t, e, l, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var f = n;
          n = u;
          for (var h = 0; h < e.length; h++)
            if (f.context === e[h]) {
              (n.lanes |= l),
                (f = n.alternate),
                f !== null && (f.lanes |= l),
                Vi(n.return, l, t),
                a || (c = null);
              break t;
            }
          n = f.next;
        }
      } else if (u.tag === 18) {
        if (((c = u.return), c === null)) throw Error(r(341));
        (c.lanes |= l),
          (n = c.alternate),
          n !== null && (n.lanes |= l),
          Vi(c, l, t),
          (c = null);
      } else c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (((u = c.sibling), u !== null)) {
            (u.return = c.return), (c = u);
            break;
          }
          c = c.return;
        }
      u = c;
    }
  }
  function Ka(t, e, l, a) {
    t = null;
    for (var u = e, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(r(387));
        if (((c = c.memoizedProps), c !== null)) {
          var f = u.type;
          ue(u.pendingProps.value, c.value) ||
            (t !== null ? t.push(f) : (t = [f]));
        }
      } else if (u === ee.current) {
        if (((c = u.alternate), c === null)) throw Error(r(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(Eu) : (t = [Eu]));
      }
      u = u.return;
    }
    t !== null && Ki(e, t, l, a), (e.flags |= 262144);
  }
  function an(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ue(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Hl(t) {
    (Cl = t),
      (Ye = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Kt(t) {
    return Qr(Cl, t);
  }
  function un(t, e) {
    return Cl === null && Hl(t), Qr(t, e);
  }
  function Qr(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Ye === null)) {
      if (t === null) throw Error(r(308));
      (Ye = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Ye = Ye.next = e;
    return l;
  }
  var x0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    O0 = i.unstable_scheduleCallback,
    z0 = i.unstable_NormalPriority,
    Ct = {
      $$typeof: P,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ji() {
    return { controller: new x0(), data: new Map(), refCount: 0 };
  }
  function Ja(t) {
    t.refCount--,
      t.refCount === 0 &&
        O0(z0, function () {
          t.controller.abort();
        });
  }
  var ka = null,
    ki = 0,
    ia = 0,
    ca = null;
  function D0(t, e) {
    if (ka === null) {
      var l = (ka = []);
      (ki = 0),
        (ia = Wc()),
        (ca = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return ki++, e.then(wr, wr), e;
  }
  function wr() {
    if (--ki === 0 && ka !== null) {
      ca !== null && (ca.status = "fulfilled");
      var t = ka;
      (ka = null), (ia = 0), (ca = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function M0(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          l.push(u);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var u = 0; u < l.length; u++) (0, l[u])(e);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < l.length; u++)
            (0, l[u])(void 0);
        },
      ),
      a
    );
  }
  var Zr = z.S;
  z.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      D0(t, e),
      Zr !== null && Zr(t, e);
  };
  var Bl = C(null);
  function $i() {
    var t = Bl.current;
    return t !== null ? t : St.pooledCache;
  }
  function nn(t, e) {
    e === null ? Y(Bl, Bl.current) : Y(Bl, e.pool);
  }
  function Vr() {
    var t = $i();
    return t === null ? null : { parent: Ct._currentValue, pool: t };
  }
  var $a = Error(r(460)),
    Kr = Error(r(474)),
    cn = Error(r(542)),
    Wi = { then: function () {} };
  function Jr(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function fn() {}
  function kr(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(fn, fn), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Wr(t), t);
      default:
        if (typeof e.status == "string") e.then(fn, fn);
        else {
          if (((t = St), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "fulfilled"), (u.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "rejected"), (u.reason = a);
                }
              },
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Wr(t), t);
        }
        throw ((Wa = e), $a);
    }
  }
  var Wa = null;
  function $r() {
    if (Wa === null) throw Error(r(459));
    var t = Wa;
    return (Wa = null), t;
  }
  function Wr(t) {
    if (t === $a || t === cn) throw Error(r(483));
  }
  var el = !1;
  function Fi(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Pi(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function ll(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function al(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (st & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (a.pending = e),
        (e = Iu(t)),
        qr(t, null, l),
        e
      );
    }
    return Pu(t, a, e, l), Iu(t);
  }
  function Fa(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), wf(t, l);
    }
  }
  function Ii(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var u = null,
        n = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          n === null ? (u = n = c) : (n = n.next = c), (l = l.next);
        } while (l !== null);
        n === null ? (u = n = e) : (n = n.next = e);
      } else u = n = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var tc = !1;
  function Pa() {
    if (tc) {
      var t = ca;
      if (t !== null) throw t;
    }
  }
  function Ia(t, e, l, a) {
    tc = !1;
    var u = t.updateQueue;
    el = !1;
    var n = u.firstBaseUpdate,
      c = u.lastBaseUpdate,
      f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var h = f,
        E = h.next;
      (h.next = null), c === null ? (n = E) : (c.next = E), (c = h);
      var O = t.alternate;
      O !== null &&
        ((O = O.updateQueue),
        (f = O.lastBaseUpdate),
        f !== c &&
          (f === null ? (O.firstBaseUpdate = E) : (f.next = E),
          (O.lastBaseUpdate = h)));
    }
    if (n !== null) {
      var U = u.baseState;
      (c = 0), (O = E = h = null), (f = n);
      do {
        var T = f.lane & -536870913,
          A = T !== f.lane;
        if (A ? (it & T) === T : (a & T) === T) {
          T !== 0 && T === ia && (tc = !0),
            O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var F = t,
              k = f;
            T = e;
            var yt = l;
            switch (k.tag) {
              case 1:
                if (((F = k.payload), typeof F == "function")) {
                  U = F.call(yt, U, T);
                  break t;
                }
                U = F;
                break t;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = k.payload),
                  (T = typeof F == "function" ? F.call(yt, U, T) : F),
                  T == null)
                )
                  break t;
                U = x({}, U, T);
                break t;
              case 2:
                el = !0;
            }
          }
          (T = f.callback),
            T !== null &&
              ((t.flags |= 64),
              A && (t.flags |= 8192),
              (A = u.callbacks),
              A === null ? (u.callbacks = [T]) : A.push(T));
        } else
          (A = {
            lane: T,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            O === null ? ((E = O = A), (h = U)) : (O = O.next = A),
            (c |= T);
        if (((f = f.next), f === null)) {
          if (((f = u.shared.pending), f === null)) break;
          (A = f),
            (f = A.next),
            (A.next = null),
            (u.lastBaseUpdate = A),
            (u.shared.pending = null);
        }
      } while (!0);
      O === null && (h = U),
        (u.baseState = h),
        (u.firstBaseUpdate = E),
        (u.lastBaseUpdate = O),
        n === null && (u.shared.lanes = 0),
        (sl |= c),
        (t.lanes = c),
        (t.memoizedState = U);
    }
  }
  function Fr(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function Pr(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) Fr(l[t], e);
  }
  var fa = C(null),
    rn = C(0);
  function Ir(t, e) {
    (t = Ve), Y(rn, t), Y(fa, e), (Ve = t | e.baseLanes);
  }
  function ec() {
    Y(rn, Ve), Y(fa, fa.current);
  }
  function lc() {
    (Ve = rn.current), L(fa), L(rn);
  }
  var ul = 0,
    lt = null,
    ht = null,
    Ut = null,
    on = !1,
    ra = !1,
    ql = !1,
    sn = 0,
    tu = 0,
    oa = null,
    _0 = 0;
  function Dt() {
    throw Error(r(321));
  }
  function ac(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ue(t[l], e[l])) return !1;
    return !0;
  }
  function uc(t, e, l, a, u, n) {
    return (
      (ul = n),
      (lt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (z.H = t === null || t.memoizedState === null ? Yo : jo),
      (ql = !1),
      (n = l(a, u)),
      (ql = !1),
      ra && (n = eo(e, l, a, u)),
      to(t),
      n
    );
  }
  function to(t) {
    z.H = gn;
    var e = ht !== null && ht.next !== null;
    if (((ul = 0), (Ut = ht = lt = null), (on = !1), (tu = 0), (oa = null), e))
      throw Error(r(300));
    t === null ||
      qt ||
      ((t = t.dependencies), t !== null && an(t) && (qt = !0));
  }
  function eo(t, e, l, a) {
    lt = t;
    var u = 0;
    do {
      if ((ra && (oa = null), (tu = 0), (ra = !1), 25 <= u))
        throw Error(r(301));
      if (((u += 1), (Ut = ht = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (z.H = Y0), (n = e(l, a));
    } while (ra);
    return n;
  }
  function U0() {
    var t = z.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? eu(e) : e),
      (t = t.useState()[0]),
      (ht !== null ? ht.memoizedState : null) !== t && (lt.flags |= 1024),
      e
    );
  }
  function nc() {
    var t = sn !== 0;
    return (sn = 0), t;
  }
  function ic(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function cc(t) {
    if (on) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      on = !1;
    }
    (ul = 0), (Ut = ht = lt = null), (ra = !1), (tu = sn = 0), (oa = null);
  }
  function Pt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ut === null ? (lt.memoizedState = Ut = t) : (Ut = Ut.next = t), Ut;
  }
  function Nt() {
    if (ht === null) {
      var t = lt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ht.next;
    var e = Ut === null ? lt.memoizedState : Ut.next;
    if (e !== null) (Ut = e), (ht = t);
    else {
      if (t === null)
        throw lt.alternate === null ? Error(r(467)) : Error(r(310));
      (ht = t),
        (t = {
          memoizedState: ht.memoizedState,
          baseState: ht.baseState,
          baseQueue: ht.baseQueue,
          queue: ht.queue,
          next: null,
        }),
        Ut === null ? (lt.memoizedState = Ut = t) : (Ut = Ut.next = t);
    }
    return Ut;
  }
  function fc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function eu(t) {
    var e = tu;
    return (
      (tu += 1),
      oa === null && (oa = []),
      (t = kr(oa, t, e)),
      (e = lt),
      (Ut === null ? e.memoizedState : Ut.next) === null &&
        ((e = e.alternate),
        (z.H = e === null || e.memoizedState === null ? Yo : jo)),
      t
    );
  }
  function dn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return eu(t);
      if (t.$$typeof === P) return Kt(t);
    }
    throw Error(r(438, String(t)));
  }
  function rc(t) {
    var e = null,
      l = lt.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = lt.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = fc()), (lt.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = kt;
    return e.index++, l;
  }
  function Le(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function hn(t) {
    var e = Nt();
    return oc(e, ht, t);
  }
  function oc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var u = t.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        (u.next = n.next), (n.next = c);
      }
      (e.baseQueue = u = n), (a.pending = null);
    }
    if (((n = t.baseState), u === null)) t.memoizedState = n;
    else {
      e = u.next;
      var f = (c = null),
        h = null,
        E = e,
        O = !1;
      do {
        var U = E.lane & -536870913;
        if (U !== E.lane ? (it & U) === U : (ul & U) === U) {
          var T = E.revertLane;
          if (T === 0)
            h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              U === ia && (O = !0);
          else if ((ul & T) === T) {
            (E = E.next), T === ia && (O = !0);
            continue;
          } else
            (U = {
              lane: 0,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              h === null ? ((f = h = U), (c = n)) : (h = h.next = U),
              (lt.lanes |= T),
              (sl |= T);
          (U = E.action),
            ql && l(n, U),
            (n = E.hasEagerState ? E.eagerState : l(n, U));
        } else
          (T = {
            lane: U,
            revertLane: E.revertLane,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            h === null ? ((f = h = T), (c = n)) : (h = h.next = T),
            (lt.lanes |= U),
            (sl |= U);
        E = E.next;
      } while (E !== null && E !== e);
      if (
        (h === null ? (c = n) : (h.next = f),
        !ue(n, t.memoizedState) && ((qt = !0), O && ((l = ca), l !== null)))
      )
        throw l;
      (t.memoizedState = n),
        (t.baseState = c),
        (t.baseQueue = h),
        (a.lastRenderedState = n);
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function sc(t) {
    var e = Nt(),
      l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      u = l.pending,
      n = e.memoizedState;
    if (u !== null) {
      l.pending = null;
      var c = (u = u.next);
      do (n = t(n, c.action)), (c = c.next);
      while (c !== u);
      ue(n, e.memoizedState) || (qt = !0),
        (e.memoizedState = n),
        e.baseQueue === null && (e.baseState = n),
        (l.lastRenderedState = n);
    }
    return [n, a];
  }
  function lo(t, e, l) {
    var a = lt,
      u = Nt(),
      n = ot;
    if (n) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var c = !ue((ht || u).memoizedState, l);
    c && ((u.memoizedState = l), (qt = !0)), (u = u.queue);
    var f = no.bind(null, a, u, t);
    if (
      (lu(2048, 8, f, [t]),
      u.getSnapshot !== e || c || (Ut !== null && Ut.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        sa(9, mn(), uo.bind(null, a, u, l, e), null),
        St === null)
      )
        throw Error(r(349));
      n || (ul & 124) !== 0 || ao(a, e, l);
    }
    return l;
  }
  function ao(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = lt.updateQueue),
      e === null
        ? ((e = fc()), (lt.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function uo(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), io(e) && co(t);
  }
  function no(t, e, l) {
    return l(function () {
      io(e) && co(t);
    });
  }
  function io(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ue(t, l);
    } catch {
      return !0;
    }
  }
  function co(t) {
    var e = la(t, 2);
    e !== null && oe(e, t, 2);
  }
  function dc(t) {
    var e = Pt();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), ql)) {
        Fe(!0);
        try {
          l();
        } finally {
          Fe(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Le,
        lastRenderedState: t,
      }),
      e
    );
  }
  function fo(t, e, l, a) {
    return (t.baseState = l), oc(t, ht, typeof a == "function" ? a : Le);
  }
  function N0(t, e, l, a, u) {
    if (vn(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      z.T !== null ? l(!0) : (n.isTransition = !1),
        a(n),
        (l = e.pending),
        l === null
          ? ((n.next = e.pending = n), ro(e, n))
          : ((n.next = l.next), (e.pending = l.next = n));
    }
  }
  function ro(t, e) {
    var l = e.action,
      a = e.payload,
      u = t.state;
    if (e.isTransition) {
      var n = z.T,
        c = {};
      z.T = c;
      try {
        var f = l(u, a),
          h = z.S;
        h !== null && h(c, f), oo(t, e, f);
      } catch (E) {
        hc(t, e, E);
      } finally {
        z.T = n;
      }
    } else
      try {
        (n = l(u, a)), oo(t, e, n);
      } catch (E) {
        hc(t, e, E);
      }
  }
  function oo(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            so(t, e, a);
          },
          function (a) {
            return hc(t, e, a);
          },
        )
      : so(t, e, l);
  }
  function so(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      ho(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), ro(t, l)));
  }
  function hc(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = l), ho(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function ho(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function mo(t, e) {
    return e;
  }
  function yo(t, e) {
    if (ot) {
      var l = St.formState;
      if (l !== null) {
        t: {
          var a = lt;
          if (ot) {
            if (xt) {
              e: {
                for (var u = xt, n = xe; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break e;
                  }
                  if (((u = Ae(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (xt = Ae(u.nextSibling)), (a = u.data === "F!");
                break t;
              }
            }
            Nl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = Pt()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mo,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Ho.bind(null, lt, a)),
      (a.dispatch = l),
      (a = dc(!1)),
      (n = Sc.bind(null, lt, !1, a.queue)),
      (a = Pt()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (l = N0.bind(null, lt, u, n, l)),
      (u.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function vo(t) {
    var e = Nt();
    return go(e, ht, t);
  }
  function go(t, e, l) {
    if (
      ((e = oc(t, e, mo)[0]),
      (t = hn(Le)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = eu(e);
      } catch (c) {
        throw c === $a ? cn : c;
      }
    else a = e;
    e = Nt();
    var u = e.queue,
      n = u.dispatch;
    return (
      l !== e.memoizedState &&
        ((lt.flags |= 2048), sa(9, mn(), C0.bind(null, u, l), null)),
      [a, n, t]
    );
  }
  function C0(t, e) {
    t.action = e;
  }
  function So(t) {
    var e = Nt(),
      l = ht;
    if (l !== null) return go(e, l, t);
    Nt(), (e = e.memoizedState), (l = Nt());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function sa(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = lt.updateQueue),
      e === null && ((e = fc()), (lt.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function mn() {
    return { destroy: void 0, resource: void 0 };
  }
  function po() {
    return Nt().memoizedState;
  }
  function yn(t, e, l, a) {
    var u = Pt();
    (a = a === void 0 ? null : a),
      (lt.flags |= t),
      (u.memoizedState = sa(1 | e, mn(), l, a));
  }
  function lu(t, e, l, a) {
    var u = Nt();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    ht !== null && a !== null && ac(a, ht.memoizedState.deps)
      ? (u.memoizedState = sa(e, n, l, a))
      : ((lt.flags |= t), (u.memoizedState = sa(1 | e, n, l, a)));
  }
  function bo(t, e) {
    yn(8390656, 8, t, e);
  }
  function Eo(t, e) {
    lu(2048, 8, t, e);
  }
  function To(t, e) {
    return lu(4, 2, t, e);
  }
  function Ao(t, e) {
    return lu(4, 4, t, e);
  }
  function Ro(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function xo(t, e, l) {
    (l = l != null ? l.concat([t]) : null), lu(4, 4, Ro.bind(null, e, t), l);
  }
  function mc() {}
  function Oo(t, e) {
    var l = Nt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && ac(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function zo(t, e) {
    var l = Nt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && ac(e, a[1])) return a[0];
    if (((a = t()), ql)) {
      Fe(!0);
      try {
        t();
      } finally {
        Fe(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function yc(t, e, l) {
    return l === void 0 || (ul & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = _s()), (lt.lanes |= t), (sl |= t), l);
  }
  function Do(t, e, l, a) {
    return ue(l, e)
      ? l
      : fa.current !== null
      ? ((t = yc(t, l, a)), ue(t, e) || (qt = !0), t)
      : (ul & 42) === 0
      ? ((qt = !0), (t.memoizedState = l))
      : ((t = _s()), (lt.lanes |= t), (sl |= t), e);
  }
  function Mo(t, e, l, a, u) {
    var n = j.p;
    j.p = n !== 0 && 8 > n ? n : 8;
    var c = z.T,
      f = {};
    (z.T = f), Sc(t, !1, e, l);
    try {
      var h = u(),
        E = z.S;
      if (
        (E !== null && E(f, h),
        h !== null && typeof h == "object" && typeof h.then == "function")
      ) {
        var O = M0(h, a);
        au(t, e, O, re(t));
      } else au(t, e, a, re(t));
    } catch (U) {
      au(t, e, { then: function () {}, status: "rejected", reason: U }, re());
    } finally {
      (j.p = n), (z.T = c);
    }
  }
  function H0() {}
  function vc(t, e, l, a) {
    if (t.tag !== 5) throw Error(r(476));
    var u = _o(t).queue;
    Mo(
      t,
      u,
      e,
      W,
      l === null
        ? H0
        : function () {
            return Uo(t), l(a);
          },
    );
  }
  function _o(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Le,
        lastRenderedState: W,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Le,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Uo(t) {
    var e = _o(t).next.queue;
    au(t, e, {}, re());
  }
  function gc() {
    return Kt(Eu);
  }
  function No() {
    return Nt().memoizedState;
  }
  function Co() {
    return Nt().memoizedState;
  }
  function B0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = re();
          t = ll(l);
          var a = al(e, t, l);
          a !== null && (oe(a, e, l), Fa(a, e, l)),
            (e = { cache: Ji() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function q0(t, e, l) {
    var a = re();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      vn(t)
        ? Bo(e, l)
        : ((l = Yi(t, e, l, a)), l !== null && (oe(l, t, a), qo(l, e, a)));
  }
  function Ho(t, e, l) {
    var a = re();
    au(t, e, l, a);
  }
  function au(t, e, l, a) {
    var u = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (vn(t)) Bo(e, u);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = e.lastRenderedReducer), n !== null)
      )
        try {
          var c = e.lastRenderedState,
            f = n(c, l);
          if (((u.hasEagerState = !0), (u.eagerState = f), ue(f, c)))
            return Pu(t, e, u, 0), St === null && Fu(), !1;
        } catch {
        } finally {
        }
      if (((l = Yi(t, e, u, a)), l !== null))
        return oe(l, t, a), qo(l, e, a), !0;
    }
    return !1;
  }
  function Sc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Wc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      vn(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = Yi(t, l, a, 2)), e !== null && oe(e, t, 2);
  }
  function vn(t) {
    var e = t.alternate;
    return t === lt || (e !== null && e === lt);
  }
  function Bo(t, e) {
    ra = on = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function qo(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), wf(t, l);
    }
  }
  var gn = {
      readContext: Kt,
      use: dn,
      useCallback: Dt,
      useContext: Dt,
      useEffect: Dt,
      useImperativeHandle: Dt,
      useLayoutEffect: Dt,
      useInsertionEffect: Dt,
      useMemo: Dt,
      useReducer: Dt,
      useRef: Dt,
      useState: Dt,
      useDebugValue: Dt,
      useDeferredValue: Dt,
      useTransition: Dt,
      useSyncExternalStore: Dt,
      useId: Dt,
      useHostTransitionStatus: Dt,
      useFormState: Dt,
      useActionState: Dt,
      useOptimistic: Dt,
      useMemoCache: Dt,
      useCacheRefresh: Dt,
    },
    Yo = {
      readContext: Kt,
      use: dn,
      useCallback: function (t, e) {
        return (Pt().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Kt,
      useEffect: bo,
      useImperativeHandle: function (t, e, l) {
        (l = l != null ? l.concat([t]) : null),
          yn(4194308, 4, Ro.bind(null, e, t), l);
      },
      useLayoutEffect: function (t, e) {
        return yn(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        yn(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = Pt();
        e = e === void 0 ? null : e;
        var a = t();
        if (ql) {
          Fe(!0);
          try {
            t();
          } finally {
            Fe(!1);
          }
        }
        return (l.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, l) {
        var a = Pt();
        if (l !== void 0) {
          var u = l(e);
          if (ql) {
            Fe(!0);
            try {
              l(e);
            } finally {
              Fe(!1);
            }
          }
        } else u = e;
        return (
          (a.memoizedState = a.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (a.queue = t),
          (t = t.dispatch = q0.bind(null, lt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Pt();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = dc(t);
        var e = t.queue,
          l = Ho.bind(null, lt, e);
        return (e.dispatch = l), [t.memoizedState, l];
      },
      useDebugValue: mc,
      useDeferredValue: function (t, e) {
        var l = Pt();
        return yc(l, t, e);
      },
      useTransition: function () {
        var t = dc(!1);
        return (
          (t = Mo.bind(null, lt, t.queue, !0, !1)),
          (Pt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = lt,
          u = Pt();
        if (ot) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (((l = e()), St === null)) throw Error(r(349));
          (it & 124) !== 0 || ao(a, e, l);
        }
        u.memoizedState = l;
        var n = { value: l, getSnapshot: e };
        return (
          (u.queue = n),
          bo(no.bind(null, a, n, t), [t]),
          (a.flags |= 2048),
          sa(9, mn(), uo.bind(null, a, n, l, e), null),
          l
        );
      },
      useId: function () {
        var t = Pt(),
          e = St.identifierPrefix;
        if (ot) {
          var l = qe,
            a = Be;
          (l = (a & ~(1 << (32 - ae(a) - 1))).toString(32) + l),
            (e = "«" + e + "R" + l),
            (l = sn++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "»");
        } else (l = _0++), (e = "«" + e + "r" + l.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: gc,
      useFormState: yo,
      useActionState: yo,
      useOptimistic: function (t) {
        var e = Pt();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = Sc.bind(null, lt, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: rc,
      useCacheRefresh: function () {
        return (Pt().memoizedState = B0.bind(null, lt));
      },
    },
    jo = {
      readContext: Kt,
      use: dn,
      useCallback: Oo,
      useContext: Kt,
      useEffect: Eo,
      useImperativeHandle: xo,
      useInsertionEffect: To,
      useLayoutEffect: Ao,
      useMemo: zo,
      useReducer: hn,
      useRef: po,
      useState: function () {
        return hn(Le);
      },
      useDebugValue: mc,
      useDeferredValue: function (t, e) {
        var l = Nt();
        return Do(l, ht.memoizedState, t, e);
      },
      useTransition: function () {
        var t = hn(Le)[0],
          e = Nt().memoizedState;
        return [typeof t == "boolean" ? t : eu(t), e];
      },
      useSyncExternalStore: lo,
      useId: No,
      useHostTransitionStatus: gc,
      useFormState: vo,
      useActionState: vo,
      useOptimistic: function (t, e) {
        var l = Nt();
        return fo(l, ht, t, e);
      },
      useMemoCache: rc,
      useCacheRefresh: Co,
    },
    Y0 = {
      readContext: Kt,
      use: dn,
      useCallback: Oo,
      useContext: Kt,
      useEffect: Eo,
      useImperativeHandle: xo,
      useInsertionEffect: To,
      useLayoutEffect: Ao,
      useMemo: zo,
      useReducer: sc,
      useRef: po,
      useState: function () {
        return sc(Le);
      },
      useDebugValue: mc,
      useDeferredValue: function (t, e) {
        var l = Nt();
        return ht === null ? yc(l, t, e) : Do(l, ht.memoizedState, t, e);
      },
      useTransition: function () {
        var t = sc(Le)[0],
          e = Nt().memoizedState;
        return [typeof t == "boolean" ? t : eu(t), e];
      },
      useSyncExternalStore: lo,
      useId: No,
      useHostTransitionStatus: gc,
      useFormState: So,
      useActionState: So,
      useOptimistic: function (t, e) {
        var l = Nt();
        return ht !== null
          ? fo(l, ht, t, e)
          : ((l.baseState = t), [t, l.queue.dispatch]);
      },
      useMemoCache: rc,
      useCacheRefresh: Co,
    },
    da = null,
    uu = 0;
  function Sn(t) {
    var e = uu;
    return (uu += 1), da === null && (da = []), kr(da, t, e);
  }
  function nu(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function pn(t, e) {
    throw e.$$typeof === B
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Lo(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Go(t) {
    function e(S, v) {
      if (t) {
        var b = S.deletions;
        b === null ? ((S.deletions = [v]), (S.flags |= 16)) : b.push(v);
      }
    }
    function l(S, v) {
      if (!t) return null;
      for (; v !== null; ) e(S, v), (v = v.sibling);
      return null;
    }
    function a(S) {
      for (var v = new Map(); S !== null; )
        S.key !== null ? v.set(S.key, S) : v.set(S.index, S), (S = S.sibling);
      return v;
    }
    function u(S, v) {
      return (S = He(S, v)), (S.index = 0), (S.sibling = null), S;
    }
    function n(S, v, b) {
      return (
        (S.index = b),
        t
          ? ((b = S.alternate),
            b !== null
              ? ((b = b.index), b < v ? ((S.flags |= 67108866), v) : b)
              : ((S.flags |= 67108866), v))
          : ((S.flags |= 1048576), v)
      );
    }
    function c(S) {
      return t && S.alternate === null && (S.flags |= 67108866), S;
    }
    function f(S, v, b, _) {
      return v === null || v.tag !== 6
        ? ((v = Li(b, S.mode, _)), (v.return = S), v)
        : ((v = u(v, b)), (v.return = S), v);
    }
    function h(S, v, b, _) {
      var X = b.type;
      return X === H
        ? O(S, v, b.props.children, _, b.key)
        : v !== null &&
          (v.elementType === X ||
            (typeof X == "object" &&
              X !== null &&
              X.$$typeof === zt &&
              Lo(X) === v.type))
        ? ((v = u(v, b.props)), nu(v, b), (v.return = S), v)
        : ((v = tn(b.type, b.key, b.props, null, S.mode, _)),
          nu(v, b),
          (v.return = S),
          v);
    }
    function E(S, v, b, _) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== b.containerInfo ||
        v.stateNode.implementation !== b.implementation
        ? ((v = Gi(b, S.mode, _)), (v.return = S), v)
        : ((v = u(v, b.children || [])), (v.return = S), v);
    }
    function O(S, v, b, _, X) {
      return v === null || v.tag !== 7
        ? ((v = Dl(b, S.mode, _, X)), (v.return = S), v)
        : ((v = u(v, b)), (v.return = S), v);
    }
    function U(S, v, b) {
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return (v = Li("" + v, S.mode, b)), (v.return = S), v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case N:
            return (
              (b = tn(v.type, v.key, v.props, null, S.mode, b)),
              nu(b, v),
              (b.return = S),
              b
            );
          case Q:
            return (v = Gi(v, S.mode, b)), (v.return = S), v;
          case zt:
            var _ = v._init;
            return (v = _(v._payload)), U(S, v, b);
        }
        if (Zt(v) || wt(v))
          return (v = Dl(v, S.mode, b, null)), (v.return = S), v;
        if (typeof v.then == "function") return U(S, Sn(v), b);
        if (v.$$typeof === P) return U(S, un(S, v), b);
        pn(S, v);
      }
      return null;
    }
    function T(S, v, b, _) {
      var X = v !== null ? v.key : null;
      if (
        (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
      )
        return X !== null ? null : f(S, v, "" + b, _);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case N:
            return b.key === X ? h(S, v, b, _) : null;
          case Q:
            return b.key === X ? E(S, v, b, _) : null;
          case zt:
            return (X = b._init), (b = X(b._payload)), T(S, v, b, _);
        }
        if (Zt(b) || wt(b)) return X !== null ? null : O(S, v, b, _, null);
        if (typeof b.then == "function") return T(S, v, Sn(b), _);
        if (b.$$typeof === P) return T(S, v, un(S, b), _);
        pn(S, b);
      }
      return null;
    }
    function A(S, v, b, _, X) {
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return (S = S.get(b) || null), f(v, S, "" + _, X);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case N:
            return (
              (S = S.get(_.key === null ? b : _.key) || null), h(v, S, _, X)
            );
          case Q:
            return (
              (S = S.get(_.key === null ? b : _.key) || null), E(v, S, _, X)
            );
          case zt:
            var at = _._init;
            return (_ = at(_._payload)), A(S, v, b, _, X);
        }
        if (Zt(_) || wt(_)) return (S = S.get(b) || null), O(v, S, _, X, null);
        if (typeof _.then == "function") return A(S, v, b, Sn(_), X);
        if (_.$$typeof === P) return A(S, v, b, un(v, _), X);
        pn(v, _);
      }
      return null;
    }
    function F(S, v, b, _) {
      for (
        var X = null, at = null, V = v, $ = (v = 0), jt = null;
        V !== null && $ < b.length;
        $++
      ) {
        V.index > $ ? ((jt = V), (V = null)) : (jt = V.sibling);
        var rt = T(S, V, b[$], _);
        if (rt === null) {
          V === null && (V = jt);
          break;
        }
        t && V && rt.alternate === null && e(S, V),
          (v = n(rt, v, $)),
          at === null ? (X = rt) : (at.sibling = rt),
          (at = rt),
          (V = jt);
      }
      if ($ === b.length) return l(S, V), ot && _l(S, $), X;
      if (V === null) {
        for (; $ < b.length; $++)
          (V = U(S, b[$], _)),
            V !== null &&
              ((v = n(V, v, $)),
              at === null ? (X = V) : (at.sibling = V),
              (at = V));
        return ot && _l(S, $), X;
      }
      for (V = a(V); $ < b.length; $++)
        (jt = A(V, S, $, b[$], _)),
          jt !== null &&
            (t &&
              jt.alternate !== null &&
              V.delete(jt.key === null ? $ : jt.key),
            (v = n(jt, v, $)),
            at === null ? (X = jt) : (at.sibling = jt),
            (at = jt));
      return (
        t &&
          V.forEach(function (bl) {
            return e(S, bl);
          }),
        ot && _l(S, $),
        X
      );
    }
    function k(S, v, b, _) {
      if (b == null) throw Error(r(151));
      for (
        var X = null, at = null, V = v, $ = (v = 0), jt = null, rt = b.next();
        V !== null && !rt.done;
        $++, rt = b.next()
      ) {
        V.index > $ ? ((jt = V), (V = null)) : (jt = V.sibling);
        var bl = T(S, V, rt.value, _);
        if (bl === null) {
          V === null && (V = jt);
          break;
        }
        t && V && bl.alternate === null && e(S, V),
          (v = n(bl, v, $)),
          at === null ? (X = bl) : (at.sibling = bl),
          (at = bl),
          (V = jt);
      }
      if (rt.done) return l(S, V), ot && _l(S, $), X;
      if (V === null) {
        for (; !rt.done; $++, rt = b.next())
          (rt = U(S, rt.value, _)),
            rt !== null &&
              ((v = n(rt, v, $)),
              at === null ? (X = rt) : (at.sibling = rt),
              (at = rt));
        return ot && _l(S, $), X;
      }
      for (V = a(V); !rt.done; $++, rt = b.next())
        (rt = A(V, S, $, rt.value, _)),
          rt !== null &&
            (t &&
              rt.alternate !== null &&
              V.delete(rt.key === null ? $ : rt.key),
            (v = n(rt, v, $)),
            at === null ? (X = rt) : (at.sibling = rt),
            (at = rt));
      return (
        t &&
          V.forEach(function (jm) {
            return e(S, jm);
          }),
        ot && _l(S, $),
        X
      );
    }
    function yt(S, v, b, _) {
      if (
        (typeof b == "object" &&
          b !== null &&
          b.type === H &&
          b.key === null &&
          (b = b.props.children),
        typeof b == "object" && b !== null)
      ) {
        switch (b.$$typeof) {
          case N:
            t: {
              for (var X = b.key; v !== null; ) {
                if (v.key === X) {
                  if (((X = b.type), X === H)) {
                    if (v.tag === 7) {
                      l(S, v.sibling),
                        (_ = u(v, b.props.children)),
                        (_.return = S),
                        (S = _);
                      break t;
                    }
                  } else if (
                    v.elementType === X ||
                    (typeof X == "object" &&
                      X !== null &&
                      X.$$typeof === zt &&
                      Lo(X) === v.type)
                  ) {
                    l(S, v.sibling),
                      (_ = u(v, b.props)),
                      nu(_, b),
                      (_.return = S),
                      (S = _);
                    break t;
                  }
                  l(S, v);
                  break;
                } else e(S, v);
                v = v.sibling;
              }
              b.type === H
                ? ((_ = Dl(b.props.children, S.mode, _, b.key)),
                  (_.return = S),
                  (S = _))
                : ((_ = tn(b.type, b.key, b.props, null, S.mode, _)),
                  nu(_, b),
                  (_.return = S),
                  (S = _));
            }
            return c(S);
          case Q:
            t: {
              for (X = b.key; v !== null; ) {
                if (v.key === X)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === b.containerInfo &&
                    v.stateNode.implementation === b.implementation
                  ) {
                    l(S, v.sibling),
                      (_ = u(v, b.children || [])),
                      (_.return = S),
                      (S = _);
                    break t;
                  } else {
                    l(S, v);
                    break;
                  }
                else e(S, v);
                v = v.sibling;
              }
              (_ = Gi(b, S.mode, _)), (_.return = S), (S = _);
            }
            return c(S);
          case zt:
            return (X = b._init), (b = X(b._payload)), yt(S, v, b, _);
        }
        if (Zt(b)) return F(S, v, b, _);
        if (wt(b)) {
          if (((X = wt(b)), typeof X != "function")) throw Error(r(150));
          return (b = X.call(b)), k(S, v, b, _);
        }
        if (typeof b.then == "function") return yt(S, v, Sn(b), _);
        if (b.$$typeof === P) return yt(S, v, un(S, b), _);
        pn(S, b);
      }
      return (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
        ? ((b = "" + b),
          v !== null && v.tag === 6
            ? (l(S, v.sibling), (_ = u(v, b)), (_.return = S), (S = _))
            : (l(S, v), (_ = Li(b, S.mode, _)), (_.return = S), (S = _)),
          c(S))
        : l(S, v);
    }
    return function (S, v, b, _) {
      try {
        uu = 0;
        var X = yt(S, v, b, _);
        return (da = null), X;
      } catch (V) {
        if (V === $a || V === cn) throw V;
        var at = ne(29, V, null, S.mode);
        return (at.lanes = _), (at.return = S), at;
      } finally {
      }
    };
  }
  var ha = Go(!0),
    Xo = Go(!1),
    Se = C(null),
    Oe = null;
  function nl(t) {
    var e = t.alternate;
    Y(Ht, Ht.current & 1),
      Y(Se, t),
      Oe === null &&
        (e === null || fa.current !== null || e.memoizedState !== null) &&
        (Oe = t);
  }
  function Qo(t) {
    if (t.tag === 22) {
      if ((Y(Ht, Ht.current), Y(Se, t), Oe === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Oe = t);
      }
    } else il();
  }
  function il() {
    Y(Ht, Ht.current), Y(Se, Se.current);
  }
  function Ge(t) {
    L(Se), Oe === t && (Oe = null), L(Ht);
  }
  var Ht = C(0);
  function bn(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || rf(l))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function pc(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : x({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var bc = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = re(),
        u = ll(a);
      (u.payload = e),
        l != null && (u.callback = l),
        (e = al(t, u, a)),
        e !== null && (oe(e, t, a), Fa(e, t, a));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = re(),
        u = ll(a);
      (u.tag = 1),
        (u.payload = e),
        l != null && (u.callback = l),
        (e = al(t, u, a)),
        e !== null && (oe(e, t, a), Fa(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = re(),
        a = ll(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = al(t, a, l)),
        e !== null && (oe(e, t, l), Fa(e, t, l));
    },
  };
  function wo(t, e, l, a, u, n, c) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, n, c)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Xa(l, a) || !Xa(u, n)
        : !0
    );
  }
  function Zo(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && bc.enqueueReplaceState(e, e.state, null);
  }
  function Yl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = x({}, l));
      for (var u in t) l[u] === void 0 && (l[u] = t[u]);
    }
    return l;
  }
  var En =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Vo(t) {
    En(t);
  }
  function Ko(t) {
    console.error(t);
  }
  function Jo(t) {
    En(t);
  }
  function Tn(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function ko(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Ec(t, e, l) {
    return (
      (l = ll(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Tn(t, e);
      }),
      l
    );
  }
  function $o(t) {
    return (t = ll(t)), (t.tag = 3), t;
  }
  function Wo(t, e, l, a) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      (t.payload = function () {
        return u(n);
      }),
        (t.callback = function () {
          ko(e, l, a);
        });
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (t.callback = function () {
        ko(e, l, a),
          typeof u != "function" &&
            (dl === null ? (dl = new Set([this])) : dl.add(this));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function j0(t, e, l, a, u) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && Ka(e, l, u, !0),
        (l = Se.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Oe === null ? Vc() : l.alternate === null && Ot === 0 && (Ot = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = u),
              a === Wi
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  Jc(t, a, u)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Wi
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  Jc(t, a, u)),
              !1
            );
        }
        throw Error(r(435, l.tag));
      }
      return Jc(t, a, u), Vc(), !1;
    }
    if (ot)
      return (
        (e = Se.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            a !== wi && ((t = Error(r(422), { cause: a })), Va(me(t, l))))
          : (a !== wi && ((e = Error(r(423), { cause: a })), Va(me(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (a = me(a, l)),
            (u = Ec(t.stateNode, a, u)),
            Ii(t, u),
            Ot !== 4 && (Ot = 2)),
        !1
      );
    var n = Error(r(520), { cause: a });
    if (
      ((n = me(n, l)),
      du === null ? (du = [n]) : du.push(n),
      Ot !== 4 && (Ot = 2),
      e === null)
    )
      return !0;
    (a = me(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = u & -u),
            (l.lanes |= t),
            (t = Ec(l.stateNode, a, t)),
            Ii(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (n = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (dl === null || !dl.has(n)))))
          )
            return (
              (l.flags |= 65536),
              (u &= -u),
              (l.lanes |= u),
              (u = $o(u)),
              Wo(u, t, l, a),
              Ii(l, u),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Fo = Error(r(461)),
    qt = !1;
  function Lt(t, e, l, a) {
    e.child = t === null ? Xo(e, null, l, a) : ha(e, t.child, l, a);
  }
  function Po(t, e, l, a, u) {
    l = l.render;
    var n = e.ref;
    if ("ref" in a) {
      var c = {};
      for (var f in a) f !== "ref" && (c[f] = a[f]);
    } else c = a;
    return (
      Hl(e),
      (a = uc(t, e, l, c, n, u)),
      (f = nc()),
      t !== null && !qt
        ? (ic(t, e, u), Xe(t, e, u))
        : (ot && f && Xi(e), (e.flags |= 1), Lt(t, e, a, u), e.child)
    );
  }
  function Io(t, e, l, a, u) {
    if (t === null) {
      var n = l.type;
      return typeof n == "function" &&
        !ji(n) &&
        n.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = n), ts(t, e, n, a, u))
        : ((t = tn(l.type, null, a, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((n = t.child), !Mc(t, u))) {
      var c = n.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Xa), l(c, a) && t.ref === e.ref)
      )
        return Xe(t, e, u);
    }
    return (
      (e.flags |= 1),
      (t = He(n, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function ts(t, e, l, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Xa(n, a) && t.ref === e.ref)
        if (((qt = !1), (e.pendingProps = a = n), Mc(t, u)))
          (t.flags & 131072) !== 0 && (qt = !0);
        else return (e.lanes = t.lanes), Xe(t, e, u);
    }
    return Tc(t, e, l, a, u);
  }
  function es(t, e, l) {
    var a = e.pendingProps,
      u = a.children,
      n = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((a = n !== null ? n.baseLanes | l : l), t !== null)) {
          for (u = e.child = t.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling);
          e.childLanes = n & ~a;
        } else (e.childLanes = 0), (e.child = null);
        return ls(t, e, a, l);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && nn(e, n !== null ? n.cachePool : null),
          n !== null ? Ir(e, n) : ec(),
          Qo(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          ls(t, e, n !== null ? n.baseLanes | l : l, l)
        );
    } else
      n !== null
        ? (nn(e, n.cachePool), Ir(e, n), il(), (e.memoizedState = null))
        : (t !== null && nn(e, null), ec(), il());
    return Lt(t, e, u, l), e.child;
  }
  function ls(t, e, l, a) {
    var u = $i();
    return (
      (u = u === null ? null : { parent: Ct._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && nn(e, null),
      ec(),
      Qo(e),
      t !== null && Ka(t, e, a, !0),
      null
    );
  }
  function An(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Tc(t, e, l, a, u) {
    return (
      Hl(e),
      (l = uc(t, e, l, a, void 0, u)),
      (a = nc()),
      t !== null && !qt
        ? (ic(t, e, u), Xe(t, e, u))
        : (ot && a && Xi(e), (e.flags |= 1), Lt(t, e, l, u), e.child)
    );
  }
  function as(t, e, l, a, u, n) {
    return (
      Hl(e),
      (e.updateQueue = null),
      (l = eo(e, a, l, u)),
      to(t),
      (a = nc()),
      t !== null && !qt
        ? (ic(t, e, n), Xe(t, e, n))
        : (ot && a && Xi(e), (e.flags |= 1), Lt(t, e, l, n), e.child)
    );
  }
  function us(t, e, l, a, u) {
    if ((Hl(e), e.stateNode === null)) {
      var n = aa,
        c = l.contextType;
      typeof c == "object" && c !== null && (n = Kt(c)),
        (n = new l(a, n)),
        (e.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = bc),
        (e.stateNode = n),
        (n._reactInternals = e),
        (n = e.stateNode),
        (n.props = a),
        (n.state = e.memoizedState),
        (n.refs = {}),
        Fi(e),
        (c = l.contextType),
        (n.context = typeof c == "object" && c !== null ? Kt(c) : aa),
        (n.state = e.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == "function" && (pc(e, l, c, a), (n.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && bc.enqueueReplaceState(n, n.state, null),
          Ia(e, a, n, u),
          Pa(),
          (n.state = e.memoizedState)),
        typeof n.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      n = e.stateNode;
      var f = e.memoizedProps,
        h = Yl(l, f);
      n.props = h;
      var E = n.context,
        O = l.contextType;
      (c = aa), typeof O == "object" && O !== null && (c = Kt(O));
      var U = l.getDerivedStateFromProps;
      (O =
        typeof U == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = e.pendingProps !== f),
        O ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || E !== c) && Zo(e, n, a, c)),
        (el = !1);
      var T = e.memoizedState;
      (n.state = T),
        Ia(e, a, n, u),
        Pa(),
        (E = e.memoizedState),
        f || T !== E || el
          ? (typeof U == "function" && (pc(e, l, U, a), (E = e.memoizedState)),
            (h = el || wo(e, l, h, a, T, E, c))
              ? (O ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = E)),
            (n.props = a),
            (n.state = E),
            (n.context = c),
            (a = h))
          : (typeof n.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (n = e.stateNode),
        Pi(t, e),
        (c = e.memoizedProps),
        (O = Yl(l, c)),
        (n.props = O),
        (U = e.pendingProps),
        (T = n.context),
        (E = l.contextType),
        (h = aa),
        typeof E == "object" && E !== null && (h = Kt(E)),
        (f = l.getDerivedStateFromProps),
        (E =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== U || T !== h) && Zo(e, n, a, h)),
        (el = !1),
        (T = e.memoizedState),
        (n.state = T),
        Ia(e, a, n, u),
        Pa();
      var A = e.memoizedState;
      c !== U ||
      T !== A ||
      el ||
      (t !== null && t.dependencies !== null && an(t.dependencies))
        ? (typeof f == "function" && (pc(e, l, f, a), (A = e.memoizedState)),
          (O =
            el ||
            wo(e, l, O, a, T, A, h) ||
            (t !== null && t.dependencies !== null && an(t.dependencies)))
            ? (E ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, A, h),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, A, h)),
              typeof n.componentDidUpdate == "function" && (e.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === t.memoizedProps && T === t.memoizedState) ||
                (e.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === t.memoizedProps && T === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = A)),
          (n.props = a),
          (n.state = A),
          (n.context = h),
          (a = O))
        : (typeof n.componentDidUpdate != "function" ||
            (c === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      An(t, e),
      (a = (e.flags & 128) !== 0),
      n || a
        ? ((n = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = ha(e, t.child, null, u)),
              (e.child = ha(e, null, l, u)))
            : Lt(t, e, l, u),
          (e.memoizedState = n.state),
          (t = e.child))
        : (t = Xe(t, e, u)),
      t
    );
  }
  function ns(t, e, l, a) {
    return Za(), (e.flags |= 256), Lt(t, e, l, a), e.child;
  }
  var Ac = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Rc(t) {
    return { baseLanes: t, cachePool: Vr() };
  }
  function xc(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= pe), t;
  }
  function is(t, e, l) {
    var a = e.pendingProps,
      u = !1,
      n = (e.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          t !== null && t.memoizedState === null ? !1 : (Ht.current & 2) !== 0),
      c && ((u = !0), (e.flags &= -129)),
      (c = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ot) {
        if ((u ? nl(e) : il(), ot)) {
          var f = xt,
            h;
          if ((h = f)) {
            t: {
              for (h = f, f = xe; h.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break t;
                }
                if (((h = Ae(h.nextSibling)), h === null)) {
                  f = null;
                  break t;
                }
              }
              f = h;
            }
            f !== null
              ? ((e.memoizedState = {
                  dehydrated: f,
                  treeContext: Ml !== null ? { id: Be, overflow: qe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (h = ne(18, null, null, 0)),
                (h.stateNode = f),
                (h.return = e),
                (e.child = h),
                ($t = e),
                (xt = null),
                (h = !0))
              : (h = !1);
          }
          h || Nl(e);
        }
        if (
          ((f = e.memoizedState),
          f !== null && ((f = f.dehydrated), f !== null))
        )
          return rf(f) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        Ge(e);
      }
      return (
        (f = a.children),
        (a = a.fallback),
        u
          ? (il(),
            (u = e.mode),
            (f = Rn({ mode: "hidden", children: f }, u)),
            (a = Dl(a, u, l, null)),
            (f.return = e),
            (a.return = e),
            (f.sibling = a),
            (e.child = f),
            (u = e.child),
            (u.memoizedState = Rc(l)),
            (u.childLanes = xc(t, c, l)),
            (e.memoizedState = Ac),
            a)
          : (nl(e), Oc(e, f))
      );
    }
    if (
      ((h = t.memoizedState), h !== null && ((f = h.dehydrated), f !== null))
    ) {
      if (n)
        e.flags & 256
          ? (nl(e), (e.flags &= -257), (e = zc(t, e, l)))
          : e.memoizedState !== null
          ? (il(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (il(),
            (u = a.fallback),
            (f = e.mode),
            (a = Rn({ mode: "visible", children: a.children }, f)),
            (u = Dl(u, f, l, null)),
            (u.flags |= 2),
            (a.return = e),
            (u.return = e),
            (a.sibling = u),
            (e.child = a),
            ha(e, t.child, null, l),
            (a = e.child),
            (a.memoizedState = Rc(l)),
            (a.childLanes = xc(t, c, l)),
            (e.memoizedState = Ac),
            (e = u));
      else if ((nl(e), rf(f))) {
        if (((c = f.nextSibling && f.nextSibling.dataset), c)) var E = c.dgst;
        (c = E),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = c),
          Va({ value: a, source: null, stack: null }),
          (e = zc(t, e, l));
      } else if (
        (qt || Ka(t, e, l, !1), (c = (l & t.childLanes) !== 0), qt || c)
      ) {
        if (
          ((c = St),
          c !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : ri(a)),
            (a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== h.retryLane))
        )
          throw ((h.retryLane = a), la(t, a), oe(c, t, a), Fo);
        f.data === "$?" || Vc(), (e = zc(t, e, l));
      } else
        f.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = h.treeContext),
            (xt = Ae(f.nextSibling)),
            ($t = e),
            (ot = !0),
            (Ul = null),
            (xe = !1),
            t !== null &&
              ((ve[ge++] = Be),
              (ve[ge++] = qe),
              (ve[ge++] = Ml),
              (Be = t.id),
              (qe = t.overflow),
              (Ml = e)),
            (e = Oc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (il(),
        (u = a.fallback),
        (f = e.mode),
        (h = t.child),
        (E = h.sibling),
        (a = He(h, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = h.subtreeFlags & 65011712),
        E !== null ? (u = He(E, u)) : ((u = Dl(u, f, l, null)), (u.flags |= 2)),
        (u.return = e),
        (a.return = e),
        (a.sibling = u),
        (e.child = a),
        (a = u),
        (u = e.child),
        (f = t.child.memoizedState),
        f === null
          ? (f = Rc(l))
          : ((h = f.cachePool),
            h !== null
              ? ((E = Ct._currentValue),
                (h = h.parent !== E ? { parent: E, pool: E } : h))
              : (h = Vr()),
            (f = { baseLanes: f.baseLanes | l, cachePool: h })),
        (u.memoizedState = f),
        (u.childLanes = xc(t, c, l)),
        (e.memoizedState = Ac),
        a)
      : (nl(e),
        (l = t.child),
        (t = l.sibling),
        (l = He(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((c = e.deletions),
          c === null ? ((e.deletions = [t]), (e.flags |= 16)) : c.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Oc(t, e) {
    return (
      (e = Rn({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Rn(t, e) {
    return (
      (t = ne(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function zc(t, e, l) {
    return (
      ha(e, t.child, null, l),
      (t = Oc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function cs(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Vi(t.return, e, l);
  }
  function Dc(t, e, l, a, u) {
    var n = t.memoizedState;
    n === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: u,
        })
      : ((n.isBackwards = e),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = l),
        (n.tailMode = u));
  }
  function fs(t, e, l) {
    var a = e.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    if ((Lt(t, e, a.children, l), (a = Ht.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && cs(t, l, e);
          else if (t.tag === 19) cs(t, l, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((Y(Ht, a), u)) {
      case "forwards":
        for (l = e.child, u = null; l !== null; )
          (t = l.alternate),
            t !== null && bn(t) === null && (u = l),
            (l = l.sibling);
        (l = u),
          l === null
            ? ((u = e.child), (e.child = null))
            : ((u = l.sibling), (l.sibling = null)),
          Dc(e, !1, u, l, n);
        break;
      case "backwards":
        for (l = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && bn(t) === null)) {
            e.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = l), (l = u), (u = t);
        }
        Dc(e, !0, l, null, n);
        break;
      case "together":
        Dc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Xe(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (sl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ka(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, l = He(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = He(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function Mc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && an(t)));
  }
  function L0(t, e, l) {
    switch (e.tag) {
      case 3:
        bt(e, e.stateNode.containerInfo),
          tl(e, Ct, t.memoizedState.cache),
          Za();
        break;
      case 27:
      case 5:
        ui(e);
        break;
      case 4:
        bt(e, e.stateNode.containerInfo);
        break;
      case 10:
        tl(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (nl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
            ? is(t, e, l)
            : (nl(e), (t = Xe(t, e, l)), t !== null ? t.sibling : null);
        nl(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (Ka(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          u)
        ) {
          if (a) return fs(t, e, l);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Y(Ht, Ht.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), es(t, e, l);
      case 24:
        tl(e, Ct, t.memoizedState.cache);
    }
    return Xe(t, e, l);
  }
  function rs(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) qt = !0;
      else {
        if (!Mc(t, l) && (e.flags & 128) === 0) return (qt = !1), L0(t, e, l);
        qt = (t.flags & 131072) !== 0;
      }
    else (qt = !1), ot && (e.flags & 1048576) !== 0 && jr(e, ln, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            u = a._init;
          if (((a = u(a._payload)), (e.type = a), typeof a == "function"))
            ji(a)
              ? ((t = Yl(a, t)), (e.tag = 1), (e = us(null, e, a, t, l)))
              : ((e.tag = 0), (e = Tc(null, e, a, t, l)));
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === ct)) {
                (e.tag = 11), (e = Po(null, e, a, t, l));
                break t;
              } else if (u === Rt) {
                (e.tag = 14), (e = Io(null, e, a, t, l));
                break t;
              }
            }
            throw ((e = Tl(a) || a), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Tc(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (u = Yl(a, e.pendingProps)), us(t, e, a, u, l);
      case 3:
        t: {
          if ((bt(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          a = e.pendingProps;
          var n = e.memoizedState;
          (u = n.element), Pi(t, e), Ia(e, a, null, l);
          var c = e.memoizedState;
          if (
            ((a = c.cache),
            tl(e, Ct, a),
            a !== n.cache && Ki(e, [Ct], l, !0),
            Pa(),
            (a = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: c.cache }),
              (e.updateQueue.baseState = n),
              (e.memoizedState = n),
              e.flags & 256)
            ) {
              e = ns(t, e, a, l);
              break t;
            } else if (a !== u) {
              (u = me(Error(r(424)), e)), Va(u), (e = ns(t, e, a, l));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                xt = Ae(t.firstChild),
                  $t = e,
                  ot = !0,
                  Ul = null,
                  xe = !0,
                  l = Xo(e, null, a, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Za(), a === u)) {
              e = Xe(t, e, l);
              break t;
            }
            Lt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          An(t, e),
          t === null
            ? (l = hd(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : ot ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = jn(tt.current).createElement(l)),
                (a[Vt] = e),
                (a[Wt] = t),
                Xt(a, l, t),
                Bt(a),
                (e.stateNode = a))
            : (e.memoizedState = hd(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ui(e),
          t === null &&
            ot &&
            ((a = e.stateNode = od(e.type, e.pendingProps, tt.current)),
            ($t = e),
            (xe = !0),
            (u = xt),
            yl(e.type) ? ((of = u), (xt = Ae(a.firstChild))) : (xt = u)),
          Lt(t, e, e.pendingProps.children, l),
          An(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            ot &&
            ((u = a = xt) &&
              ((a = hm(a, e.type, e.pendingProps, xe)),
              a !== null
                ? ((e.stateNode = a),
                  ($t = e),
                  (xt = Ae(a.firstChild)),
                  (xe = !1),
                  (u = !0))
                : (u = !1)),
            u || Nl(e)),
          ui(e),
          (u = e.type),
          (n = e.pendingProps),
          (c = t !== null ? t.memoizedProps : null),
          (a = n.children),
          nf(u, n) ? (a = null) : c !== null && nf(u, c) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = uc(t, e, U0, null, null, l)), (Eu._currentValue = u)),
          An(t, e),
          Lt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            ot &&
            ((t = l = xt) &&
              ((l = mm(l, e.pendingProps, xe)),
              l !== null
                ? ((e.stateNode = l), ($t = e), (xt = null), (t = !0))
                : (t = !1)),
            t || Nl(e)),
          null
        );
      case 13:
        return is(t, e, l);
      case 4:
        return (
          bt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = ha(e, null, a, l)) : Lt(t, e, a, l),
          e.child
        );
      case 11:
        return Po(t, e, e.type, e.pendingProps, l);
      case 7:
        return Lt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Lt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Lt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          tl(e, e.type, a.value),
          Lt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (a = e.pendingProps.children),
          Hl(e),
          (u = Kt(u)),
          (a = a(u)),
          (e.flags |= 1),
          Lt(t, e, a, l),
          e.child
        );
      case 14:
        return Io(t, e, e.type, e.pendingProps, l);
      case 15:
        return ts(t, e, e.type, e.pendingProps, l);
      case 19:
        return fs(t, e, l);
      case 31:
        return (
          (a = e.pendingProps),
          (l = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((l = Rn(a, l)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l))
            : ((l = He(t.child, a)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l)),
          e
        );
      case 22:
        return es(t, e, l);
      case 24:
        return (
          Hl(e),
          (a = Kt(Ct)),
          t === null
            ? ((u = $i()),
              u === null &&
                ((u = St),
                (n = Ji()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= l),
                (u = n)),
              (e.memoizedState = { parent: a, cache: u }),
              Fi(e),
              tl(e, Ct, u))
            : ((t.lanes & l) !== 0 && (Pi(t, e), Ia(e, null, null, l), Pa()),
              (u = t.memoizedState),
              (n = e.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  tl(e, Ct, a))
                : ((a = n.cache),
                  tl(e, Ct, a),
                  a !== u.cache && Ki(e, [Ct], l, !0))),
          Lt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Qe(t) {
    t.flags |= 4;
  }
  function os(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Sd(e))) {
      if (
        ((e = Se.current),
        e !== null &&
          ((it & 4194048) === it
            ? Oe !== null
            : ((it & 62914560) !== it && (it & 536870912) === 0) || e !== Oe))
      )
        throw ((Wa = Wi), Kr);
      t.flags |= 8192;
    }
  }
  function xn(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Xf() : 536870912), (t.lanes |= e), (ga |= e));
  }
  function iu(t, e) {
    if (!ot)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Tt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var u = t.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function G0(t, e, l) {
    var a = e.pendingProps;
    switch ((Qi(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tt(e), null;
      case 1:
        return Tt(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          je(Ct),
          We(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (wa(e)
              ? Qe(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Xr())),
          Tt(e),
          null
        );
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? (Qe(e),
              l !== null ? (Tt(e), os(e, l)) : (Tt(e), (e.flags &= -16777217)))
            : l
            ? l !== t.memoizedState
              ? (Qe(e), Tt(e), os(e, l))
              : (Tt(e), (e.flags &= -16777217))
            : (t.memoizedProps !== a && Qe(e), Tt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Bu(e), (l = tt.current);
        var u = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && Qe(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return Tt(e), null;
          }
          (t = J.current),
            wa(e) ? Lr(e) : ((t = od(u, a, l)), (e.stateNode = t), Qe(e));
        }
        return Tt(e), null;
      case 5:
        if ((Bu(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Qe(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return Tt(e), null;
          }
          if (((t = J.current), wa(e))) Lr(e);
          else {
            switch (((u = jn(tt.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l,
                    );
                    break;
                  case "script":
                    (t = u.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? u.createElement(l, { is: a.is })
                        : u.createElement(l);
                }
            }
            (t[Vt] = e), (t[Wt] = a);
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            e.stateNode = t;
            t: switch ((Xt(t, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Qe(e);
          }
        }
        return Tt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Qe(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = tt.current), wa(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (u = $t),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (t[Vt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                ad(t.nodeValue, l)
              )),
              t || Nl(e);
          } else (t = jn(t).createTextNode(a)), (t[Vt] = e), (e.stateNode = t);
        }
        return Tt(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = wa(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(r(317));
              u[Vt] = e;
            } else
              Za(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Tt(e), (u = !1);
          } else
            (u = Xr()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return e.flags & 256 ? (Ge(e), e) : (Ge(e), null);
        }
        if ((Ge(e), (e.flags & 128) !== 0)) return (e.lanes = l), e;
        if (
          ((l = a !== null), (t = t !== null && t.memoizedState !== null), l)
        ) {
          (a = e.child),
            (u = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (u = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048);
        }
        return (
          l !== t && l && (e.child.flags |= 8192),
          xn(e, e.updateQueue),
          Tt(e),
          null
        );
      case 4:
        return We(), t === null && tf(e.stateNode.containerInfo), Tt(e), null;
      case 10:
        return je(e.type), Tt(e), null;
      case 19:
        if ((L(Ht), (u = e.memoizedState), u === null)) return Tt(e), null;
        if (((a = (e.flags & 128) !== 0), (n = u.rendering), n === null))
          if (a) iu(u, !1);
          else {
            if (Ot !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((n = bn(t)), n !== null)) {
                  for (
                    e.flags |= 128,
                      iu(u, !1),
                      t = n.updateQueue,
                      e.updateQueue = t,
                      xn(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    Yr(l, t), (l = l.sibling);
                  return Y(Ht, (Ht.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              Re() > Dn &&
              ((e.flags |= 128), (a = !0), iu(u, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = bn(n)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                xn(e, t),
                iu(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !ot)
              )
                return Tt(e), null;
            } else
              2 * Re() - u.renderingStartTime > Dn &&
                l !== 536870912 &&
                ((e.flags |= 128), (a = !0), iu(u, !1), (e.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = e.child), (e.child = n))
            : ((t = u.last),
              t !== null ? (t.sibling = n) : (e.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((e = u.tail),
            (u.rendering = e),
            (u.tail = e.sibling),
            (u.renderingStartTime = Re()),
            (e.sibling = null),
            (t = Ht.current),
            Y(Ht, a ? (t & 1) | 2 : t & 1),
            e)
          : (Tt(e), null);
      case 22:
      case 23:
        return (
          Ge(e),
          lc(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Tt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Tt(e),
          (l = e.updateQueue),
          l !== null && xn(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && L(Bl),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          je(Ct),
          Tt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function X0(t, e) {
    switch ((Qi(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          je(Ct),
          We(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Bu(e), null;
      case 13:
        if (
          (Ge(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          Za();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return L(Ht), null;
      case 4:
        return We(), null;
      case 10:
        return je(e.type), null;
      case 22:
      case 23:
        return (
          Ge(e),
          lc(),
          t !== null && L(Bl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return je(Ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ss(t, e) {
    switch ((Qi(e), e.tag)) {
      case 3:
        je(Ct), We();
        break;
      case 26:
      case 27:
      case 5:
        Bu(e);
        break;
      case 4:
        We();
        break;
      case 13:
        Ge(e);
        break;
      case 19:
        L(Ht);
        break;
      case 10:
        je(e.type);
        break;
      case 22:
      case 23:
        Ge(e), lc(), t !== null && L(Bl);
        break;
      case 24:
        je(Ct);
    }
  }
  function cu(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var n = l.create,
              c = l.inst;
            (a = n()), (c.destroy = a);
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (f) {
      gt(e, e.return, f);
    }
  }
  function cl(t, e, l) {
    try {
      var a = e.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst,
              f = c.destroy;
            if (f !== void 0) {
              (c.destroy = void 0), (u = e);
              var h = l,
                E = f;
              try {
                E();
              } catch (O) {
                gt(u, h, O);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (O) {
      gt(e, e.return, O);
    }
  }
  function ds(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Pr(e, l);
      } catch (a) {
        gt(t, t.return, a);
      }
    }
  }
  function hs(t, e, l) {
    (l.props = Yl(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      gt(t, e, a);
    }
  }
  function fu(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (u) {
      gt(t, e, u);
    }
  }
  function ze(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          gt(t, e, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          gt(t, e, u);
        }
      else l.current = null;
  }
  function ms(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (u) {
      gt(t, t.return, u);
    }
  }
  function _c(t, e, l) {
    try {
      var a = t.stateNode;
      fm(a, t.type, l, e), (a[Wt] = e);
    } catch (u) {
      gt(t, t.return, u);
    }
  }
  function ys(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && yl(t.type)) ||
      t.tag === 4
    );
  }
  function Uc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || ys(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && yl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Nc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Yn));
    else if (
      a !== 4 &&
      (a === 27 && yl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Nc(t, e, l), t = t.sibling; t !== null; )
        Nc(t, e, l), (t = t.sibling);
  }
  function On(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && yl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (On(t, e, l), t = t.sibling; t !== null; )
        On(t, e, l), (t = t.sibling);
  }
  function vs(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      Xt(e, a, l), (e[Vt] = t), (e[Wt] = l);
    } catch (n) {
      gt(t, t.return, n);
    }
  }
  var we = !1,
    Mt = !1,
    Cc = !1,
    gs = typeof WeakSet == "function" ? WeakSet : Set,
    Yt = null;
  function Q0(t, e) {
    if (((t = t.containerInfo), (af = Zn), (t = zr(t)), Ui(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, n.nodeType;
            } catch {
              l = null;
              break t;
            }
            var c = 0,
              f = -1,
              h = -1,
              E = 0,
              O = 0,
              U = t,
              T = null;
            e: for (;;) {
              for (
                var A;
                U !== l || (u !== 0 && U.nodeType !== 3) || (f = c + u),
                  U !== n || (a !== 0 && U.nodeType !== 3) || (h = c + a),
                  U.nodeType === 3 && (c += U.nodeValue.length),
                  (A = U.firstChild) !== null;

              )
                (T = U), (U = A);
              for (;;) {
                if (U === t) break e;
                if (
                  (T === l && ++E === u && (f = c),
                  T === n && ++O === a && (h = c),
                  (A = U.nextSibling) !== null)
                )
                  break;
                (U = T), (T = U.parentNode);
              }
              U = A;
            }
            l = f === -1 || h === -1 ? null : { start: f, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      uf = { focusedElem: t, selectionRange: l }, Zn = !1, Yt = e;
      Yt !== null;

    )
      if (
        ((e = Yt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (Yt = t);
      else
        for (; Yt !== null; ) {
          switch (((e = Yt), (n = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                (t = void 0),
                  (l = e),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = l.stateNode);
                try {
                  var F = Yl(l.type, u, l.elementType === l.type);
                  (t = a.getSnapshotBeforeUpdate(F, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (k) {
                  gt(l, l.return, k);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  ff(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ff(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Yt = t);
            break;
          }
          Yt = e.return;
        }
  }
  function Ss(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fl(t, l), a & 4 && cu(5, l);
        break;
      case 1:
        if ((fl(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (c) {
              gt(l, l.return, c);
            }
          else {
            var u = Yl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              gt(l, l.return, c);
            }
          }
        a & 64 && ds(l), a & 512 && fu(l, l.return);
        break;
      case 3:
        if ((fl(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Pr(t, e);
          } catch (c) {
            gt(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && a & 4 && vs(l);
      case 26:
      case 5:
        fl(t, l), e === null && a & 4 && ms(l), a & 512 && fu(l, l.return);
        break;
      case 12:
        fl(t, l);
        break;
      case 13:
        fl(t, l),
          a & 4 && Es(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = F0.bind(null, l)), ym(t, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || we), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Mt), (u = we);
          var n = Mt;
          (we = a),
            (Mt = e) && !n ? rl(t, l, (l.subtreeFlags & 8772) !== 0) : fl(t, l),
            (we = u),
            (Mt = n);
        }
        break;
      case 30:
        break;
      default:
        fl(t, l);
    }
  }
  function ps(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), ps(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && di(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Et = null,
    It = !1;
  function Ze(t, e, l) {
    for (l = l.child; l !== null; ) bs(t, e, l), (l = l.sibling);
  }
  function bs(t, e, l) {
    if (le && typeof le.onCommitFiberUnmount == "function")
      try {
        le.onCommitFiberUnmount(Ma, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Mt || ze(l, e),
          Ze(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Mt || ze(l, e);
        var a = Et,
          u = It;
        yl(l.type) && ((Et = l.stateNode), (It = !1)),
          Ze(t, e, l),
          gu(l.stateNode),
          (Et = a),
          (It = u);
        break;
      case 5:
        Mt || ze(l, e);
      case 6:
        if (
          ((a = Et),
          (u = It),
          (Et = null),
          Ze(t, e, l),
          (Et = a),
          (It = u),
          Et !== null)
        )
          if (It)
            try {
              (Et.nodeType === 9
                ? Et.body
                : Et.nodeName === "HTML"
                ? Et.ownerDocument.body
                : Et
              ).removeChild(l.stateNode);
            } catch (n) {
              gt(l, e, n);
            }
          else
            try {
              Et.removeChild(l.stateNode);
            } catch (n) {
              gt(l, e, n);
            }
        break;
      case 18:
        Et !== null &&
          (It
            ? ((t = Et),
              fd(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                l.stateNode,
              ),
              xu(t))
            : fd(Et, l.stateNode));
        break;
      case 4:
        (a = Et),
          (u = It),
          (Et = l.stateNode.containerInfo),
          (It = !0),
          Ze(t, e, l),
          (Et = a),
          (It = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Mt || cl(2, l, e), Mt || cl(4, l, e), Ze(t, e, l);
        break;
      case 1:
        Mt ||
          (ze(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && hs(l, e, a)),
          Ze(t, e, l);
        break;
      case 21:
        Ze(t, e, l);
        break;
      case 22:
        (Mt = (a = Mt) || l.memoizedState !== null), Ze(t, e, l), (Mt = a);
        break;
      default:
        Ze(t, e, l);
    }
  }
  function Es(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        xu(t);
      } catch (l) {
        gt(e, e.return, l);
      }
  }
  function w0(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new gs()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new gs()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Hc(t, e) {
    var l = w0(t);
    e.forEach(function (a) {
      var u = P0.bind(null, t, a);
      l.has(a) || (l.add(a), a.then(u, u));
    });
  }
  function ie(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var u = l[a],
          n = t,
          c = e,
          f = c;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (yl(f.type)) {
                (Et = f.stateNode), (It = !1);
                break t;
              }
              break;
            case 5:
              (Et = f.stateNode), (It = !1);
              break t;
            case 3:
            case 4:
              (Et = f.stateNode.containerInfo), (It = !0);
              break t;
          }
          f = f.return;
        }
        if (Et === null) throw Error(r(160));
        bs(n, c, u),
          (Et = null),
          (It = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Ts(e, t), (e = e.sibling);
  }
  var Te = null;
  function Ts(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ie(e, t),
          ce(t),
          a & 4 && (cl(3, t, t.return), cu(3, t), cl(5, t, t.return));
        break;
      case 1:
        ie(e, t),
          ce(t),
          a & 512 && (Mt || l === null || ze(l, l.return)),
          a & 64 &&
            we &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var u = Te;
        if (
          (ie(e, t),
          ce(t),
          a & 512 && (Mt || l === null || ze(l, l.return)),
          a & 4)
        ) {
          var n = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (l = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  e: switch (a) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Na] ||
                          n[Vt] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title"),
                          )),
                        Xt(n, a, l),
                        (n[Vt] = t),
                        Bt(n),
                        (a = n);
                      break t;
                    case "link":
                      var c = vd("link", "href", u).get(a + (l.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              n.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              n.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              n.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(f, 1);
                            break e;
                          }
                      }
                      (n = u.createElement(a)),
                        Xt(n, a, l),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = vd("meta", "content", u).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              n.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              n.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              n.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            c.splice(f, 1);
                            break e;
                          }
                      }
                      (n = u.createElement(a)),
                        Xt(n, a, l),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  (n[Vt] = t), Bt(n), (a = n);
                }
                t.stateNode = a;
              } else gd(u, t.type, t.stateNode);
            else t.stateNode = yd(u, a, t.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : n.count--,
                a === null
                  ? gd(u, t.type, t.stateNode)
                  : yd(u, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                _c(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        ie(e, t),
          ce(t),
          a & 512 && (Mt || l === null || ze(l, l.return)),
          l !== null && a & 4 && _c(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (ie(e, t),
          ce(t),
          a & 512 && (Mt || l === null || ze(l, l.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            $l(u, "");
          } catch (A) {
            gt(t, t.return, A);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), _c(t, u, l !== null ? l.memoizedProps : u)),
          a & 1024 && (Cc = !0);
        break;
      case 6:
        if ((ie(e, t), ce(t), a & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (A) {
            gt(t, t.return, A);
          }
        }
        break;
      case 3:
        if (
          ((Xn = null),
          (u = Te),
          (Te = Ln(e.containerInfo)),
          ie(e, t),
          (Te = u),
          ce(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            xu(e.containerInfo);
          } catch (A) {
            gt(t, t.return, A);
          }
        Cc && ((Cc = !1), As(t));
        break;
      case 4:
        (a = Te),
          (Te = Ln(t.stateNode.containerInfo)),
          ie(e, t),
          ce(t),
          (Te = a);
        break;
      case 12:
        ie(e, t), ce(t);
        break;
      case 13:
        ie(e, t),
          ce(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Gc = Re()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Hc(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null,
          E = we,
          O = Mt;
        if (
          ((we = E || u),
          (Mt = O || h),
          ie(e, t),
          (Mt = O),
          (we = E),
          ce(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = u ? e._visibility & -2 : e._visibility | 1,
              u && (l === null || h || we || Mt || jl(t)),
              l = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (((n = h.stateNode), u))
                    (c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    f = h.stateNode;
                    var U = h.memoizedProps.style,
                      T =
                        U != null && U.hasOwnProperty("display")
                          ? U.display
                          : null;
                    f.style.display =
                      T == null || typeof T == "boolean" ? "" : ("" + T).trim();
                  }
                } catch (A) {
                  gt(h, h.return, A);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = u ? "" : h.memoizedProps;
                } catch (A) {
                  gt(h, h.return, A);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Hc(t, l))));
        break;
      case 19:
        ie(e, t),
          ce(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Hc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ie(e, t), ce(t);
    }
  }
  function ce(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (ys(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var u = l.stateNode,
              n = Uc(t);
            On(t, n, u);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && ($l(c, ""), (l.flags &= -33));
            var f = Uc(t);
            On(t, f, c);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              E = Uc(t);
            Nc(t, E, h);
            break;
          default:
            throw Error(r(161));
        }
      } catch (O) {
        gt(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function As(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        As(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function fl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Ss(t, e.alternate, e), (e = e.sibling);
  }
  function jl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          cl(4, e, e.return), jl(e);
          break;
        case 1:
          ze(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && hs(e, e.return, l),
            jl(e);
          break;
        case 27:
          gu(e.stateNode);
        case 26:
        case 5:
          ze(e, e.return), jl(e);
          break;
        case 22:
          e.memoizedState === null && jl(e);
          break;
        case 30:
          jl(e);
          break;
        default:
          jl(e);
      }
      t = t.sibling;
    }
  }
  function rl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        u = t,
        n = e,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          rl(u, n, l), cu(4, n);
          break;
        case 1:
          if (
            (rl(u, n, l),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (E) {
              gt(a, a.return, E);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var f = a.stateNode;
            try {
              var h = u.shared.hiddenCallbacks;
              if (h !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < h.length; u++)
                  Fr(h[u], f);
            } catch (E) {
              gt(a, a.return, E);
            }
          }
          l && c & 64 && ds(n), fu(n, n.return);
          break;
        case 27:
          vs(n);
        case 26:
        case 5:
          rl(u, n, l), l && a === null && c & 4 && ms(n), fu(n, n.return);
          break;
        case 12:
          rl(u, n, l);
          break;
        case 13:
          rl(u, n, l), l && c & 4 && Es(u, n);
          break;
        case 22:
          n.memoizedState === null && rl(u, n, l), fu(n, n.return);
          break;
        case 30:
          break;
        default:
          rl(u, n, l);
      }
      e = e.sibling;
    }
  }
  function Bc(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && Ja(l));
  }
  function qc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ja(t));
  }
  function De(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Rs(t, e, l, a), (e = e.sibling);
  }
  function Rs(t, e, l, a) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        De(t, e, l, a), u & 2048 && cu(9, e);
        break;
      case 1:
        De(t, e, l, a);
        break;
      case 3:
        De(t, e, l, a),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ja(t)));
        break;
      case 12:
        if (u & 2048) {
          De(t, e, l, a), (t = e.stateNode);
          try {
            var n = e.memoizedProps,
              c = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                c,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (h) {
            gt(e, e.return, h);
          }
        } else De(t, e, l, a);
        break;
      case 13:
        De(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (n = e.stateNode),
          (c = e.alternate),
          e.memoizedState !== null
            ? n._visibility & 2
              ? De(t, e, l, a)
              : ru(t, e)
            : n._visibility & 2
            ? De(t, e, l, a)
            : ((n._visibility |= 2),
              ma(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
          u & 2048 && Bc(c, e);
        break;
      case 24:
        De(t, e, l, a), u & 2048 && qc(e.alternate, e);
        break;
      default:
        De(t, e, l, a);
    }
  }
  function ma(t, e, l, a, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var n = t,
        c = e,
        f = l,
        h = a,
        E = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ma(n, c, f, h, u), cu(8, c);
          break;
        case 23:
          break;
        case 22:
          var O = c.stateNode;
          c.memoizedState !== null
            ? O._visibility & 2
              ? ma(n, c, f, h, u)
              : ru(n, c)
            : ((O._visibility |= 2), ma(n, c, f, h, u)),
            u && E & 2048 && Bc(c.alternate, c);
          break;
        case 24:
          ma(n, c, f, h, u), u && E & 2048 && qc(c.alternate, c);
          break;
        default:
          ma(n, c, f, h, u);
      }
      e = e.sibling;
    }
  }
  function ru(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          u = a.flags;
        switch (a.tag) {
          case 22:
            ru(l, a), u & 2048 && Bc(a.alternate, a);
            break;
          case 24:
            ru(l, a), u & 2048 && qc(a.alternate, a);
            break;
          default:
            ru(l, a);
        }
        e = e.sibling;
      }
  }
  var ou = 8192;
  function ya(t) {
    if (t.subtreeFlags & ou)
      for (t = t.child; t !== null; ) xs(t), (t = t.sibling);
  }
  function xs(t) {
    switch (t.tag) {
      case 26:
        ya(t),
          t.flags & ou &&
            t.memoizedState !== null &&
            Dm(Te, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ya(t);
        break;
      case 3:
      case 4:
        var e = Te;
        (Te = Ln(t.stateNode.containerInfo)), ya(t), (Te = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = ou), (ou = 16777216), ya(t), (ou = e))
            : ya(t));
        break;
      default:
        ya(t);
    }
  }
  function Os(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function su(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Yt = a), Ds(a, t);
        }
      Os(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) zs(t), (t = t.sibling);
  }
  function zs(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        su(t), t.flags & 2048 && cl(9, t, t.return);
        break;
      case 3:
        su(t);
        break;
      case 12:
        su(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), zn(t))
          : su(t);
        break;
      default:
        su(t);
    }
  }
  function zn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Yt = a), Ds(a, t);
        }
      Os(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          cl(8, e, e.return), zn(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), zn(e));
          break;
        default:
          zn(e);
      }
      t = t.sibling;
    }
  }
  function Ds(t, e) {
    for (; Yt !== null; ) {
      var l = Yt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          cl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ja(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (Yt = a);
      else
        t: for (l = t; Yt !== null; ) {
          a = Yt;
          var u = a.sibling,
            n = a.return;
          if ((ps(a), a === l)) {
            Yt = null;
            break t;
          }
          if (u !== null) {
            (u.return = n), (Yt = u);
            break t;
          }
          Yt = n;
        }
    }
  }
  var Z0 = {
      getCacheForType: function (t) {
        var e = Kt(Ct),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
    },
    V0 = typeof WeakMap == "function" ? WeakMap : Map,
    st = 0,
    St = null,
    ut = null,
    it = 0,
    dt = 0,
    fe = null,
    ol = !1,
    va = !1,
    Yc = !1,
    Ve = 0,
    Ot = 0,
    sl = 0,
    Ll = 0,
    jc = 0,
    pe = 0,
    ga = 0,
    du = null,
    te = null,
    Lc = !1,
    Gc = 0,
    Dn = 1 / 0,
    Mn = null,
    dl = null,
    Gt = 0,
    hl = null,
    Sa = null,
    pa = 0,
    Xc = 0,
    Qc = null,
    Ms = null,
    hu = 0,
    wc = null;
  function re() {
    if ((st & 2) !== 0 && it !== 0) return it & -it;
    if (z.T !== null) {
      var t = ia;
      return t !== 0 ? t : Wc();
    }
    return Zf();
  }
  function _s() {
    pe === 0 && (pe = (it & 536870912) === 0 || ot ? Gf() : 536870912);
    var t = Se.current;
    return t !== null && (t.flags |= 32), pe;
  }
  function oe(t, e, l) {
    ((t === St && (dt === 2 || dt === 9)) || t.cancelPendingCommit !== null) &&
      (ba(t, 0), ml(t, it, pe, !1)),
      Ua(t, l),
      ((st & 2) === 0 || t !== St) &&
        (t === St &&
          ((st & 2) === 0 && (Ll |= l), Ot === 4 && ml(t, it, pe, !1)),
        Me(t));
  }
  function Us(t, e, l) {
    if ((st & 6) !== 0) throw Error(r(327));
    var a = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || _a(t, e),
      u = a ? k0(t, e) : Kc(t, e, !0),
      n = a;
    do {
      if (u === 0) {
        va && !a && ml(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), n && !K0(l))) {
          (u = Kc(t, e, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = e), t.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = t.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            e = c;
            t: {
              var f = t;
              u = du;
              var h = f.current.memoizedState.isDehydrated;
              if ((h && (ba(f, c).flags |= 256), (c = Kc(f, c, !1)), c !== 2)) {
                if (Yc && !h) {
                  (f.errorRecoveryDisabledLanes |= n), (Ll |= n), (u = 4);
                  break t;
                }
                (n = te),
                  (te = u),
                  n !== null && (te === null ? (te = n) : te.push.apply(te, n));
              }
              u = c;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          ba(t, 0), ml(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (n = u), n)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ml(a, e, pe, !ol);
              break t;
            case 2:
              te = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((u = Gc + 300 - Re()), 10 < u)) {
            if ((ml(a, e, pe, !ol), Lu(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = id(
              Ns.bind(null, a, l, te, Mn, Lc, e, pe, Ll, ga, ol, n, 2, -0, 0),
              u,
            );
            break t;
          }
          Ns(a, l, te, Mn, Lc, e, pe, Ll, ga, ol, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Me(t);
  }
  function Ns(t, e, l, a, u, n, c, f, h, E, O, U, T, A) {
    if (
      ((t.timeoutHandle = -1),
      (U = e.subtreeFlags),
      (U & 8192 || (U & 16785408) === 16785408) &&
        ((bu = { stylesheets: null, count: 0, unsuspend: zm }),
        xs(e),
        (U = Mm()),
        U !== null))
    ) {
      (t.cancelPendingCommit = U(
        Ls.bind(null, t, e, n, l, a, u, c, f, h, O, 1, T, A),
      )),
        ml(t, n, c, !E);
      return;
    }
    Ls(t, e, n, l, a, u, c, f, h);
  }
  function K0(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var u = l[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!ue(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function ml(t, e, l, a) {
    (e &= ~jc),
      (e &= ~Ll),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var u = e; 0 < u; ) {
      var n = 31 - ae(u),
        c = 1 << n;
      (a[n] = -1), (u &= ~c);
    }
    l !== 0 && Qf(t, l, e);
  }
  function _n() {
    return (st & 6) === 0 ? (mu(0), !1) : !0;
  }
  function Zc() {
    if (ut !== null) {
      if (dt === 0) var t = ut.return;
      else (t = ut), (Ye = Cl = null), cc(t), (da = null), (uu = 0), (t = ut);
      for (; t !== null; ) ss(t.alternate, t), (t = t.return);
      ut = null;
    }
  }
  function ba(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), om(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      Zc(),
      (St = t),
      (ut = l = He(t.current, null)),
      (it = e),
      (dt = 0),
      (fe = null),
      (ol = !1),
      (va = _a(t, e)),
      (Yc = !1),
      (ga = pe = jc = Ll = sl = Ot = 0),
      (te = du = null),
      (Lc = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var u = 31 - ae(a),
          n = 1 << u;
        (e |= t[u]), (a &= ~n);
      }
    return (Ve = e), Fu(), l;
  }
  function Cs(t, e) {
    (lt = null),
      (z.H = gn),
      e === $a || e === cn
        ? ((e = $r()), (dt = 3))
        : e === Kr
        ? ((e = $r()), (dt = 4))
        : (dt =
            e === Fo
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (fe = e),
      ut === null && ((Ot = 1), Tn(t, me(e, t.current)));
  }
  function Hs() {
    var t = z.H;
    return (z.H = gn), t === null ? gn : t;
  }
  function Bs() {
    var t = z.A;
    return (z.A = Z0), t;
  }
  function Vc() {
    (Ot = 4),
      ol || ((it & 4194048) !== it && Se.current !== null) || (va = !0),
      ((sl & 134217727) === 0 && (Ll & 134217727) === 0) ||
        St === null ||
        ml(St, it, pe, !1);
  }
  function Kc(t, e, l) {
    var a = st;
    st |= 2;
    var u = Hs(),
      n = Bs();
    (St !== t || it !== e) && ((Mn = null), ba(t, e)), (e = !1);
    var c = Ot;
    t: do
      try {
        if (dt !== 0 && ut !== null) {
          var f = ut,
            h = fe;
          switch (dt) {
            case 8:
              Zc(), (c = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Se.current === null && (e = !0);
              var E = dt;
              if (((dt = 0), (fe = null), Ea(t, f, h, E), l && va)) {
                c = 0;
                break t;
              }
              break;
            default:
              (E = dt), (dt = 0), (fe = null), Ea(t, f, h, E);
          }
        }
        J0(), (c = Ot);
        break;
      } catch (O) {
        Cs(t, O);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Ye = Cl = null),
      (st = a),
      (z.H = u),
      (z.A = n),
      ut === null && ((St = null), (it = 0), Fu()),
      c
    );
  }
  function J0() {
    for (; ut !== null; ) qs(ut);
  }
  function k0(t, e) {
    var l = st;
    st |= 2;
    var a = Hs(),
      u = Bs();
    St !== t || it !== e
      ? ((Mn = null), (Dn = Re() + 500), ba(t, e))
      : (va = _a(t, e));
    t: do
      try {
        if (dt !== 0 && ut !== null) {
          e = ut;
          var n = fe;
          e: switch (dt) {
            case 1:
              (dt = 0), (fe = null), Ea(t, e, n, 1);
              break;
            case 2:
            case 9:
              if (Jr(n)) {
                (dt = 0), (fe = null), Ys(e);
                break;
              }
              (e = function () {
                (dt !== 2 && dt !== 9) || St !== t || (dt = 7), Me(t);
              }),
                n.then(e, e);
              break t;
            case 3:
              dt = 7;
              break t;
            case 4:
              dt = 5;
              break t;
            case 7:
              Jr(n)
                ? ((dt = 0), (fe = null), Ys(e))
                : ((dt = 0), (fe = null), Ea(t, e, n, 7));
              break;
            case 5:
              var c = null;
              switch (ut.tag) {
                case 26:
                  c = ut.memoizedState;
                case 5:
                case 27:
                  var f = ut;
                  if (!c || Sd(c)) {
                    (dt = 0), (fe = null);
                    var h = f.sibling;
                    if (h !== null) ut = h;
                    else {
                      var E = f.return;
                      E !== null ? ((ut = E), Un(E)) : (ut = null);
                    }
                    break e;
                  }
              }
              (dt = 0), (fe = null), Ea(t, e, n, 5);
              break;
            case 6:
              (dt = 0), (fe = null), Ea(t, e, n, 6);
              break;
            case 8:
              Zc(), (Ot = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        $0();
        break;
      } catch (O) {
        Cs(t, O);
      }
    while (!0);
    return (
      (Ye = Cl = null),
      (z.H = a),
      (z.A = u),
      (st = l),
      ut !== null ? 0 : ((St = null), (it = 0), Fu(), Ot)
    );
  }
  function $0() {
    for (; ut !== null && !gh(); ) qs(ut);
  }
  function qs(t) {
    var e = rs(t.alternate, t, Ve);
    (t.memoizedProps = t.pendingProps), e === null ? Un(t) : (ut = e);
  }
  function Ys(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = as(l, e, e.pendingProps, e.type, void 0, it);
        break;
      case 11:
        e = as(l, e, e.pendingProps, e.type.render, e.ref, it);
        break;
      case 5:
        cc(e);
      default:
        ss(l, e), (e = ut = Yr(e, Ve)), (e = rs(l, e, Ve));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Un(t) : (ut = e);
  }
  function Ea(t, e, l, a) {
    (Ye = Cl = null), cc(e), (da = null), (uu = 0);
    var u = e.return;
    try {
      if (j0(t, u, e, l, it)) {
        (Ot = 1), Tn(t, me(l, t.current)), (ut = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((ut = u), n);
      (Ot = 1), Tn(t, me(l, t.current)), (ut = null);
      return;
    }
    e.flags & 32768
      ? (ot || a === 1
          ? (t = !0)
          : va || (it & 536870912) !== 0
          ? (t = !1)
          : ((ol = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = Se.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        js(e, t))
      : Un(e);
  }
  function Un(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        js(e, ol);
        return;
      }
      t = e.return;
      var l = G0(e.alternate, e, Ve);
      if (l !== null) {
        ut = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ut = e;
        return;
      }
      ut = e = t;
    } while (e !== null);
    Ot === 0 && (Ot = 5);
  }
  function js(t, e) {
    do {
      var l = X0(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (ut = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ut = t;
        return;
      }
      ut = t = l;
    } while (t !== null);
    (Ot = 6), (ut = null);
  }
  function Ls(t, e, l, a, u, n, c, f, h) {
    t.cancelPendingCommit = null;
    do Nn();
    while (Gt !== 0);
    if ((st & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((n = e.lanes | e.childLanes),
        (n |= qi),
        zh(t, l, n, c, f, h),
        t === St && ((ut = St = null), (it = 0)),
        (Sa = e),
        (hl = t),
        (pa = l),
        (Xc = n),
        (Qc = u),
        (Ms = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            I0(qu, function () {
              return Zs(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = z.T), (z.T = null), (u = j.p), (j.p = 2), (c = st), (st |= 4);
        try {
          Q0(t, e, l);
        } finally {
          (st = c), (j.p = u), (z.T = a);
        }
      }
      (Gt = 1), Gs(), Xs(), Qs();
    }
  }
  function Gs() {
    if (Gt === 1) {
      Gt = 0;
      var t = hl,
        e = Sa,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        (l = z.T), (z.T = null);
        var a = j.p;
        j.p = 2;
        var u = st;
        st |= 4;
        try {
          Ts(e, t);
          var n = uf,
            c = zr(t.containerInfo),
            f = n.focusedElem,
            h = n.selectionRange;
          if (
            c !== f &&
            f &&
            f.ownerDocument &&
            Or(f.ownerDocument.documentElement, f)
          ) {
            if (h !== null && Ui(f)) {
              var E = h.start,
                O = h.end;
              if ((O === void 0 && (O = E), "selectionStart" in f))
                (f.selectionStart = E),
                  (f.selectionEnd = Math.min(O, f.value.length));
              else {
                var U = f.ownerDocument || document,
                  T = (U && U.defaultView) || window;
                if (T.getSelection) {
                  var A = T.getSelection(),
                    F = f.textContent.length,
                    k = Math.min(h.start, F),
                    yt = h.end === void 0 ? k : Math.min(h.end, F);
                  !A.extend && k > yt && ((c = yt), (yt = k), (k = c));
                  var S = xr(f, k),
                    v = xr(f, yt);
                  if (
                    S &&
                    v &&
                    (A.rangeCount !== 1 ||
                      A.anchorNode !== S.node ||
                      A.anchorOffset !== S.offset ||
                      A.focusNode !== v.node ||
                      A.focusOffset !== v.offset)
                  ) {
                    var b = U.createRange();
                    b.setStart(S.node, S.offset),
                      A.removeAllRanges(),
                      k > yt
                        ? (A.addRange(b), A.extend(v.node, v.offset))
                        : (b.setEnd(v.node, v.offset), A.addRange(b));
                  }
                }
              }
            }
            for (U = [], A = f; (A = A.parentNode); )
              A.nodeType === 1 &&
                U.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < U.length;
              f++
            ) {
              var _ = U[f];
              (_.element.scrollLeft = _.left), (_.element.scrollTop = _.top);
            }
          }
          (Zn = !!af), (uf = af = null);
        } finally {
          (st = u), (j.p = a), (z.T = l);
        }
      }
      (t.current = e), (Gt = 2);
    }
  }
  function Xs() {
    if (Gt === 2) {
      Gt = 0;
      var t = hl,
        e = Sa,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        (l = z.T), (z.T = null);
        var a = j.p;
        j.p = 2;
        var u = st;
        st |= 4;
        try {
          Ss(t, e.alternate, e);
        } finally {
          (st = u), (j.p = a), (z.T = l);
        }
      }
      Gt = 3;
    }
  }
  function Qs() {
    if (Gt === 4 || Gt === 3) {
      (Gt = 0), Sh();
      var t = hl,
        e = Sa,
        l = pa,
        a = Ms;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Gt = 5)
        : ((Gt = 0), (Sa = hl = null), ws(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (dl = null),
        oi(l),
        (e = e.stateNode),
        le && typeof le.onCommitFiberRoot == "function")
      )
        try {
          le.onCommitFiberRoot(Ma, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = z.T), (u = j.p), (j.p = 2), (z.T = null);
        try {
          for (var n = t.onRecoverableError, c = 0; c < a.length; c++) {
            var f = a[c];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          (z.T = e), (j.p = u);
        }
      }
      (pa & 3) !== 0 && Nn(),
        Me(t),
        (u = t.pendingLanes),
        (l & 4194090) !== 0 && (u & 42) !== 0
          ? t === wc
            ? hu++
            : ((hu = 0), (wc = t))
          : (hu = 0),
        mu(0);
    }
  }
  function ws(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ja(e)));
  }
  function Nn(t) {
    return Gs(), Xs(), Qs(), Zs();
  }
  function Zs() {
    if (Gt !== 5) return !1;
    var t = hl,
      e = Xc;
    Xc = 0;
    var l = oi(pa),
      a = z.T,
      u = j.p;
    try {
      (j.p = 32 > l ? 32 : l), (z.T = null), (l = Qc), (Qc = null);
      var n = hl,
        c = pa;
      if (((Gt = 0), (Sa = hl = null), (pa = 0), (st & 6) !== 0))
        throw Error(r(331));
      var f = st;
      if (
        ((st |= 4),
        zs(n.current),
        Rs(n, n.current, c, l),
        (st = f),
        mu(0, !1),
        le && typeof le.onPostCommitFiberRoot == "function")
      )
        try {
          le.onPostCommitFiberRoot(Ma, n);
        } catch {}
      return !0;
    } finally {
      (j.p = u), (z.T = a), ws(t, e);
    }
  }
  function Vs(t, e, l) {
    (e = me(l, e)),
      (e = Ec(t.stateNode, e, 2)),
      (t = al(t, e, 2)),
      t !== null && (Ua(t, 2), Me(t));
  }
  function gt(t, e, l) {
    if (t.tag === 3) Vs(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Vs(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (dl === null || !dl.has(a)))
          ) {
            (t = me(l, t)),
              (l = $o(2)),
              (a = al(e, l, 2)),
              a !== null && (Wo(l, a, e, t), Ua(a, 2), Me(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Jc(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new V0();
      var u = new Set();
      a.set(e, u);
    } else (u = a.get(e)), u === void 0 && ((u = new Set()), a.set(e, u));
    u.has(l) ||
      ((Yc = !0), u.add(l), (t = W0.bind(null, t, e, l)), e.then(t, t));
  }
  function W0(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      St === t &&
        (it & l) === l &&
        (Ot === 4 || (Ot === 3 && (it & 62914560) === it && 300 > Re() - Gc)
          ? (st & 2) === 0 && ba(t, 0)
          : (jc |= l),
        ga === it && (ga = 0)),
      Me(t);
  }
  function Ks(t, e) {
    e === 0 && (e = Xf()), (t = la(t, e)), t !== null && (Ua(t, e), Me(t));
  }
  function F0(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), Ks(t, l);
  }
  function P0(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          u = t.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), Ks(t, l);
  }
  function I0(t, e) {
    return ii(t, e);
  }
  var Cn = null,
    Ta = null,
    kc = !1,
    Hn = !1,
    $c = !1,
    Gl = 0;
  function Me(t) {
    t !== Ta &&
      t.next === null &&
      (Ta === null ? (Cn = Ta = t) : (Ta = Ta.next = t)),
      (Hn = !0),
      kc || ((kc = !0), em());
  }
  function mu(t, e) {
    if (!$c && Hn) {
      $c = !0;
      do
        for (var l = !1, a = Cn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = a.suspendedLanes,
                f = a.pingedLanes;
              (n = (1 << (31 - ae(42 | t) + 1)) - 1),
                (n &= u & ~(c & ~f)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((l = !0), Ws(a, n));
          } else
            (n = it),
              (n = Lu(
                a,
                a === St ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || _a(a, n) || ((l = !0), Ws(a, n));
          a = a.next;
        }
      while (l);
      $c = !1;
    }
  }
  function tm() {
    Js();
  }
  function Js() {
    Hn = kc = !1;
    var t = 0;
    Gl !== 0 && (rm() && (t = Gl), (Gl = 0));
    for (var e = Re(), l = null, a = Cn; a !== null; ) {
      var u = a.next,
        n = ks(a, e);
      n === 0
        ? ((a.next = null),
          l === null ? (Cn = u) : (l.next = u),
          u === null && (Ta = l))
        : ((l = a), (t !== 0 || (n & 3) !== 0) && (Hn = !0)),
        (a = u);
    }
    mu(t);
  }
  function ks(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        u = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - ae(n),
        f = 1 << c,
        h = u[c];
      h === -1
        ? ((f & l) === 0 || (f & a) !== 0) && (u[c] = Oh(f, e))
        : h <= e && (t.expiredLanes |= f),
        (n &= ~f);
    }
    if (
      ((e = St),
      (l = it),
      (l = Lu(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (dt === 2 || dt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && ci(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || _a(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && ci(a), oi(l))) {
        case 2:
        case 8:
          l = jf;
          break;
        case 32:
          l = qu;
          break;
        case 268435456:
          l = Lf;
          break;
        default:
          l = qu;
      }
      return (
        (a = $s.bind(null, t)),
        (l = ii(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && ci(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function $s(t, e) {
    if (Gt !== 0 && Gt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var l = t.callbackNode;
    if (Nn() && t.callbackNode !== l) return null;
    var a = it;
    return (
      (a = Lu(
        t,
        t === St ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Us(t, a, e),
          ks(t, Re()),
          t.callbackNode != null && t.callbackNode === l
            ? $s.bind(null, t)
            : null)
    );
  }
  function Ws(t, e) {
    if (Nn()) return null;
    Us(t, e, !0);
  }
  function em() {
    sm(function () {
      (st & 6) !== 0 ? ii(Yf, tm) : Js();
    });
  }
  function Wc() {
    return Gl === 0 && (Gl = Gf()), Gl;
  }
  function Fs(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Zu("" + t);
  }
  function Ps(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function lm(t, e, l, a, u) {
    if (e === "submit" && l && l.stateNode === u) {
      var n = Fs((u[Wt] || null).action),
        c = a.submitter;
      c &&
        ((e = (e = c[Wt] || null)
          ? Fs(e.formAction)
          : c.getAttribute("formAction")),
        e !== null && ((n = e), (c = null)));
      var f = new ku("action", "action", null, a, u);
      t.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Gl !== 0) {
                  var h = c ? Ps(u, c) : new FormData(u);
                  vc(
                    l,
                    { pending: !0, data: h, method: u.method, action: n },
                    null,
                    h,
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (h = c ? Ps(u, c) : new FormData(u)),
                  vc(
                    l,
                    { pending: !0, data: h, method: u.method, action: n },
                    n,
                    h,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Fc = 0; Fc < Bi.length; Fc++) {
    var Pc = Bi[Fc],
      am = Pc.toLowerCase(),
      um = Pc[0].toUpperCase() + Pc.slice(1);
    Ee(am, "on" + um);
  }
  Ee(_r, "onAnimationEnd"),
    Ee(Ur, "onAnimationIteration"),
    Ee(Nr, "onAnimationStart"),
    Ee("dblclick", "onDoubleClick"),
    Ee("focusin", "onFocus"),
    Ee("focusout", "onBlur"),
    Ee(E0, "onTransitionRun"),
    Ee(T0, "onTransitionStart"),
    Ee(A0, "onTransitionCancel"),
    Ee(Cr, "onTransitionEnd"),
    Kl("onMouseEnter", ["mouseout", "mouseover"]),
    Kl("onMouseLeave", ["mouseout", "mouseover"]),
    Kl("onPointerEnter", ["pointerout", "pointerover"]),
    Kl("onPointerLeave", ["pointerout", "pointerover"]),
    Rl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Rl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Rl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Rl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Rl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Rl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var yu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    nm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(yu),
    );
  function Is(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var f = a[c],
              h = f.instance,
              E = f.currentTarget;
            if (((f = f.listener), h !== n && u.isPropagationStopped()))
              break t;
            (n = f), (u.currentTarget = E);
            try {
              n(u);
            } catch (O) {
              En(O);
            }
            (u.currentTarget = null), (n = h);
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((f = a[c]),
              (h = f.instance),
              (E = f.currentTarget),
              (f = f.listener),
              h !== n && u.isPropagationStopped())
            )
              break t;
            (n = f), (u.currentTarget = E);
            try {
              n(u);
            } catch (O) {
              En(O);
            }
            (u.currentTarget = null), (n = h);
          }
      }
    }
  }
  function nt(t, e) {
    var l = e[si];
    l === void 0 && (l = e[si] = new Set());
    var a = t + "__bubble";
    l.has(a) || (td(e, t, 2, !1), l.add(a));
  }
  function Ic(t, e, l) {
    var a = 0;
    e && (a |= 4), td(l, t, a, e);
  }
  var Bn = "_reactListening" + Math.random().toString(36).slice(2);
  function tf(t) {
    if (!t[Bn]) {
      (t[Bn] = !0),
        Kf.forEach(function (l) {
          l !== "selectionchange" && (nm.has(l) || Ic(l, !1, t), Ic(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Bn] || ((e[Bn] = !0), Ic("selectionchange", !1, e));
    }
  }
  function td(t, e, l, a) {
    switch (Rd(e)) {
      case 2:
        var u = Nm;
        break;
      case 8:
        u = Cm;
        break;
      default:
        u = yf;
    }
    (l = u.bind(null, e, l, t)),
      (u = void 0),
      !Ti ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: u })
          : t.addEventListener(e, l, !0)
        : u !== void 0
        ? t.addEventListener(e, l, { passive: u })
        : t.addEventListener(e, l, !1);
  }
  function ef(t, e, l, a, u) {
    var n = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var f = a.stateNode.containerInfo;
          if (f === u) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var h = c.tag;
              if ((h === 3 || h === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (((c = wl(f)), c === null)) return;
            if (((h = c.tag), h === 5 || h === 6 || h === 26 || h === 27)) {
              a = n = c;
              continue t;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    ir(function () {
      var E = n,
        O = bi(l),
        U = [];
      t: {
        var T = Hr.get(t);
        if (T !== void 0) {
          var A = ku,
            F = t;
          switch (t) {
            case "keypress":
              if (Ku(l) === 0) break t;
            case "keydown":
            case "keyup":
              A = Ih;
              break;
            case "focusin":
              (F = "focus"), (A = Oi);
              break;
            case "focusout":
              (F = "blur"), (A = Oi);
              break;
            case "beforeblur":
            case "afterblur":
              A = Oi;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = rr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = Xh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = l0;
              break;
            case _r:
            case Ur:
            case Nr:
              A = Zh;
              break;
            case Cr:
              A = u0;
              break;
            case "scroll":
            case "scrollend":
              A = Lh;
              break;
            case "wheel":
              A = i0;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = Kh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = sr;
              break;
            case "toggle":
            case "beforetoggle":
              A = f0;
          }
          var k = (e & 4) !== 0,
            yt = !k && (t === "scroll" || t === "scrollend"),
            S = k ? (T !== null ? T + "Capture" : null) : T;
          k = [];
          for (var v = E, b; v !== null; ) {
            var _ = v;
            if (
              ((b = _.stateNode),
              (_ = _.tag),
              (_ !== 5 && _ !== 26 && _ !== 27) ||
                b === null ||
                S === null ||
                ((_ = Ha(v, S)), _ != null && k.push(vu(v, _, b))),
              yt)
            )
              break;
            v = v.return;
          }
          0 < k.length &&
            ((T = new A(T, F, null, l, O)), U.push({ event: T, listeners: k }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((T = t === "mouseover" || t === "pointerover"),
            (A = t === "mouseout" || t === "pointerout"),
            T &&
              l !== pi &&
              (F = l.relatedTarget || l.fromElement) &&
              (wl(F) || F[Ql]))
          )
            break t;
          if (
            (A || T) &&
            ((T =
              O.window === O
                ? O
                : (T = O.ownerDocument)
                ? T.defaultView || T.parentWindow
                : window),
            A
              ? ((F = l.relatedTarget || l.toElement),
                (A = E),
                (F = F ? wl(F) : null),
                F !== null &&
                  ((yt = g(F)),
                  (k = F.tag),
                  F !== yt || (k !== 5 && k !== 27 && k !== 6)) &&
                  (F = null))
              : ((A = null), (F = E)),
            A !== F)
          ) {
            if (
              ((k = rr),
              (_ = "onMouseLeave"),
              (S = "onMouseEnter"),
              (v = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((k = sr),
                (_ = "onPointerLeave"),
                (S = "onPointerEnter"),
                (v = "pointer")),
              (yt = A == null ? T : Ca(A)),
              (b = F == null ? T : Ca(F)),
              (T = new k(_, v + "leave", A, l, O)),
              (T.target = yt),
              (T.relatedTarget = b),
              (_ = null),
              wl(O) === E &&
                ((k = new k(S, v + "enter", F, l, O)),
                (k.target = b),
                (k.relatedTarget = yt),
                (_ = k)),
              (yt = _),
              A && F)
            )
              e: {
                for (k = A, S = F, v = 0, b = k; b; b = Aa(b)) v++;
                for (b = 0, _ = S; _; _ = Aa(_)) b++;
                for (; 0 < v - b; ) (k = Aa(k)), v--;
                for (; 0 < b - v; ) (S = Aa(S)), b--;
                for (; v--; ) {
                  if (k === S || (S !== null && k === S.alternate)) break e;
                  (k = Aa(k)), (S = Aa(S));
                }
                k = null;
              }
            else k = null;
            A !== null && ed(U, T, A, k, !1),
              F !== null && yt !== null && ed(U, yt, F, k, !0);
          }
        }
        t: {
          if (
            ((T = E ? Ca(E) : window),
            (A = T.nodeName && T.nodeName.toLowerCase()),
            A === "select" || (A === "input" && T.type === "file"))
          )
            var X = pr;
          else if (gr(T))
            if (br) X = S0;
            else {
              X = v0;
              var at = y0;
            }
          else
            (A = T.nodeName),
              !A ||
              A.toLowerCase() !== "input" ||
              (T.type !== "checkbox" && T.type !== "radio")
                ? E && Si(E.elementType) && (X = pr)
                : (X = g0);
          if (X && (X = X(t, E))) {
            Sr(U, X, l, O);
            break t;
          }
          at && at(t, T, E),
            t === "focusout" &&
              E &&
              T.type === "number" &&
              E.memoizedProps.value != null &&
              gi(T, "number", T.value);
        }
        switch (((at = E ? Ca(E) : window), t)) {
          case "focusin":
            (gr(at) || at.contentEditable === "true") &&
              ((Il = at), (Ni = E), (Qa = null));
            break;
          case "focusout":
            Qa = Ni = Il = null;
            break;
          case "mousedown":
            Ci = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ci = !1), Dr(U, l, O);
            break;
          case "selectionchange":
            if (b0) break;
          case "keydown":
          case "keyup":
            Dr(U, l, O);
        }
        var V;
        if (Di)
          t: {
            switch (t) {
              case "compositionstart":
                var $ = "onCompositionStart";
                break t;
              case "compositionend":
                $ = "onCompositionEnd";
                break t;
              case "compositionupdate":
                $ = "onCompositionUpdate";
                break t;
            }
            $ = void 0;
          }
        else
          Pl
            ? yr(t, l) && ($ = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              ($ = "onCompositionStart");
        $ &&
          (dr &&
            l.locale !== "ko" &&
            (Pl || $ !== "onCompositionStart"
              ? $ === "onCompositionEnd" && Pl && (V = cr())
              : ((Ie = O),
                (Ai = "value" in Ie ? Ie.value : Ie.textContent),
                (Pl = !0))),
          (at = qn(E, $)),
          0 < at.length &&
            (($ = new or($, t, null, l, O)),
            U.push({ event: $, listeners: at }),
            V ? ($.data = V) : ((V = vr(l)), V !== null && ($.data = V)))),
          (V = o0 ? s0(t, l) : d0(t, l)) &&
            (($ = qn(E, "onBeforeInput")),
            0 < $.length &&
              ((at = new or("onBeforeInput", "beforeinput", null, l, O)),
              U.push({ event: at, listeners: $ }),
              (at.data = V))),
          lm(U, t, E, l, O);
      }
      Is(U, e);
    });
  }
  function vu(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function qn(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var u = t,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ha(t, l)),
          u != null && a.unshift(vu(t, u, n)),
          (u = Ha(t, e)),
          u != null && a.push(vu(t, u, n))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Aa(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function ed(t, e, l, a, u) {
    for (var n = e._reactName, c = []; l !== null && l !== a; ) {
      var f = l,
        h = f.alternate,
        E = f.stateNode;
      if (((f = f.tag), h !== null && h === a)) break;
      (f !== 5 && f !== 26 && f !== 27) ||
        E === null ||
        ((h = E),
        u
          ? ((E = Ha(l, n)), E != null && c.unshift(vu(l, E, h)))
          : u || ((E = Ha(l, n)), E != null && c.push(vu(l, E, h)))),
        (l = l.return);
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var im = /\r\n?/g,
    cm = /\u0000|\uFFFD/g;
  function ld(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        im,
        `
`,
      )
      .replace(cm, "");
  }
  function ad(t, e) {
    return (e = ld(e)), ld(t) === e;
  }
  function Yn() {}
  function mt(t, e, l, a, u, n) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || $l(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            $l(t, "" + a);
        break;
      case "className":
        Xu(t, "class", a);
        break;
      case "tabIndex":
        Xu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Xu(t, l, a);
        break;
      case "style":
        ur(t, a, n);
        break;
      case "data":
        if (e !== "object") {
          Xu(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (a = Zu("" + a)), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (l === "formAction"
              ? (e !== "input" && mt(t, e, "name", u.name, u, null),
                mt(t, e, "formEncType", u.formEncType, u, null),
                mt(t, e, "formMethod", u.formMethod, u, null),
                mt(t, e, "formTarget", u.formTarget, u, null))
              : (mt(t, e, "encType", u.encType, u, null),
                mt(t, e, "method", u.method, u, null),
                mt(t, e, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = Zu("" + a)), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Yn);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = Zu("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        nt("beforetoggle", t), nt("toggle", t), Gu(t, "popover", a);
        break;
      case "xlinkActuate":
        Ne(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ne(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ne(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ne(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ne(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ne(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ne(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ne(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ne(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Gu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Yh.get(l) || l), Gu(t, l, a));
    }
  }
  function lf(t, e, l, a, u, n) {
    switch (l) {
      case "style":
        ur(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? $l(t, a)
          : (typeof a == "number" || typeof a == "bigint") && $l(t, "" + a);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Yn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Jf.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((u = l.endsWith("Capture")),
              (e = l.slice(2, u ? l.length - 7 : void 0)),
              (n = t[Wt] || null),
              (n = n != null ? n[l] : null),
              typeof n == "function" && t.removeEventListener(e, n, u),
              typeof a == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, u);
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
              ? t.setAttribute(l, "")
              : Gu(t, l, a);
          }
    }
  }
  function Xt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        nt("error", t), nt("load", t);
        var a = !1,
          u = !1,
          n;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var c = l[n];
            if (c != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  mt(t, e, n, c, l, null);
              }
          }
        u && mt(t, e, "srcSet", l.srcSet, l, null),
          a && mt(t, e, "src", l.src, l, null);
        return;
      case "input":
        nt("invalid", t);
        var f = (n = c = u = null),
          h = null,
          E = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var O = l[a];
            if (O != null)
              switch (a) {
                case "name":
                  u = O;
                  break;
                case "type":
                  c = O;
                  break;
                case "checked":
                  h = O;
                  break;
                case "defaultChecked":
                  E = O;
                  break;
                case "value":
                  n = O;
                  break;
                case "defaultValue":
                  f = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null) throw Error(r(137, e));
                  break;
                default:
                  mt(t, e, a, O, l, null);
              }
          }
        tr(t, n, f, h, E, c, u, !1), Qu(t);
        return;
      case "select":
        nt("invalid", t), (a = c = n = null);
        for (u in l)
          if (l.hasOwnProperty(u) && ((f = l[u]), f != null))
            switch (u) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                a = f;
              default:
                mt(t, e, u, f, l, null);
            }
        (e = n),
          (l = c),
          (t.multiple = !!a),
          e != null ? kl(t, !!a, e, !1) : l != null && kl(t, !!a, l, !0);
        return;
      case "textarea":
        nt("invalid", t), (n = u = a = null);
        for (c in l)
          if (l.hasOwnProperty(c) && ((f = l[c]), f != null))
            switch (c) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                u = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(r(91));
                break;
              default:
                mt(t, e, c, f, l, null);
            }
        lr(t, a, u, n), Qu(t);
        return;
      case "option":
        for (h in l)
          if (l.hasOwnProperty(h) && ((a = l[h]), a != null))
            switch (h) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                mt(t, e, h, a, l, null);
            }
        return;
      case "dialog":
        nt("beforetoggle", t), nt("toggle", t), nt("cancel", t), nt("close", t);
        break;
      case "iframe":
      case "object":
        nt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < yu.length; a++) nt(yu[a], t);
        break;
      case "image":
        nt("error", t), nt("load", t);
        break;
      case "details":
        nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        nt("error", t), nt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (E in l)
          if (l.hasOwnProperty(E) && ((a = l[E]), a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                mt(t, e, E, a, l, null);
            }
        return;
      default:
        if (Si(e)) {
          for (O in l)
            l.hasOwnProperty(O) &&
              ((a = l[O]), a !== void 0 && lf(t, e, O, a, l, void 0));
          return;
        }
    }
    for (f in l)
      l.hasOwnProperty(f) && ((a = l[f]), a != null && mt(t, e, f, a, l, null));
  }
  function fm(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          c = null,
          f = null,
          h = null,
          E = null,
          O = null;
        for (A in l) {
          var U = l[A];
          if (l.hasOwnProperty(A) && U != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = U;
              default:
                a.hasOwnProperty(A) || mt(t, e, A, null, a, U);
            }
        }
        for (var T in a) {
          var A = a[T];
          if (((U = l[T]), a.hasOwnProperty(T) && (A != null || U != null)))
            switch (T) {
              case "type":
                n = A;
                break;
              case "name":
                u = A;
                break;
              case "checked":
                E = A;
                break;
              case "defaultChecked":
                O = A;
                break;
              case "value":
                c = A;
                break;
              case "defaultValue":
                f = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(r(137, e));
                break;
              default:
                A !== U && mt(t, e, T, A, a, U);
            }
        }
        vi(t, c, f, h, E, O, n, u);
        return;
      case "select":
        A = c = f = T = null;
        for (n in l)
          if (((h = l[n]), l.hasOwnProperty(n) && h != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                A = h;
              default:
                a.hasOwnProperty(n) || mt(t, e, n, null, a, h);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (h = l[u]),
            a.hasOwnProperty(u) && (n != null || h != null))
          )
            switch (u) {
              case "value":
                T = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== h && mt(t, e, u, n, a, h);
            }
        (e = f),
          (l = c),
          (a = A),
          T != null
            ? kl(t, !!l, T, !1)
            : !!a != !!l &&
              (e != null ? kl(t, !!l, e, !0) : kl(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        A = T = null;
        for (f in l)
          if (
            ((u = l[f]),
            l.hasOwnProperty(f) && u != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                mt(t, e, f, null, a, u);
            }
        for (c in a)
          if (
            ((u = a[c]),
            (n = l[c]),
            a.hasOwnProperty(c) && (u != null || n != null))
          )
            switch (c) {
              case "value":
                T = u;
                break;
              case "defaultValue":
                A = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== n && mt(t, e, c, u, a, n);
            }
        er(t, T, A);
        return;
      case "option":
        for (var F in l)
          if (
            ((T = l[F]),
            l.hasOwnProperty(F) && T != null && !a.hasOwnProperty(F))
          )
            switch (F) {
              case "selected":
                t.selected = !1;
                break;
              default:
                mt(t, e, F, null, a, T);
            }
        for (h in a)
          if (
            ((T = a[h]),
            (A = l[h]),
            a.hasOwnProperty(h) && T !== A && (T != null || A != null))
          )
            switch (h) {
              case "selected":
                t.selected =
                  T && typeof T != "function" && typeof T != "symbol";
                break;
              default:
                mt(t, e, h, T, a, A);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var k in l)
          (T = l[k]),
            l.hasOwnProperty(k) &&
              T != null &&
              !a.hasOwnProperty(k) &&
              mt(t, e, k, null, a, T);
        for (E in a)
          if (
            ((T = a[E]),
            (A = l[E]),
            a.hasOwnProperty(E) && T !== A && (T != null || A != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(r(137, e));
                break;
              default:
                mt(t, e, E, T, a, A);
            }
        return;
      default:
        if (Si(e)) {
          for (var yt in l)
            (T = l[yt]),
              l.hasOwnProperty(yt) &&
                T !== void 0 &&
                !a.hasOwnProperty(yt) &&
                lf(t, e, yt, void 0, a, T);
          for (O in a)
            (T = a[O]),
              (A = l[O]),
              !a.hasOwnProperty(O) ||
                T === A ||
                (T === void 0 && A === void 0) ||
                lf(t, e, O, T, a, A);
          return;
        }
    }
    for (var S in l)
      (T = l[S]),
        l.hasOwnProperty(S) &&
          T != null &&
          !a.hasOwnProperty(S) &&
          mt(t, e, S, null, a, T);
    for (U in a)
      (T = a[U]),
        (A = l[U]),
        !a.hasOwnProperty(U) ||
          T === A ||
          (T == null && A == null) ||
          mt(t, e, U, T, a, A);
  }
  var af = null,
    uf = null;
  function jn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function ud(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function nd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function nf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var cf = null;
  function rm() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === cf
        ? !1
        : ((cf = t), !0)
      : ((cf = null), !1);
  }
  var id = typeof setTimeout == "function" ? setTimeout : void 0,
    om = typeof clearTimeout == "function" ? clearTimeout : void 0,
    cd = typeof Promise == "function" ? Promise : void 0,
    sm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof cd < "u"
        ? function (t) {
            return cd.resolve(null).then(t).catch(dm);
          }
        : id;
  function dm(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function yl(t) {
    return t === "head";
  }
  function fd(t, e) {
    var l = e,
      a = 0,
      u = 0;
    do {
      var n = l.nextSibling;
      if ((t.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var c = t.ownerDocument;
            if ((l & 1 && gu(c.documentElement), l & 2 && gu(c.body), l & 4))
              for (l = c.head, gu(l), c = l.firstChild; c; ) {
                var f = c.nextSibling,
                  h = c.nodeName;
                c[Na] ||
                  h === "SCRIPT" ||
                  h === "STYLE" ||
                  (h === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(c),
                  (c = f);
              }
          }
          if (u === 0) {
            t.removeChild(n), xu(e);
            return;
          }
          u--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? u++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = n;
    } while (l);
    xu(e);
  }
  function ff(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ff(l), di(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function hm(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var u = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Na])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((n = t.getAttribute("rel")),
                n === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((n = t.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (((t = Ae(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function mm(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Ae(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function rf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function ym(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete") e();
    else {
      var a = function () {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function Ae(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var of = null;
  function rd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function od(t, e, l) {
    switch (((e = jn(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function gu(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    di(t);
  }
  var be = new Map(),
    sd = new Set();
  function Ln(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Ke = j.d;
  j.d = { f: vm, r: gm, D: Sm, C: pm, L: bm, m: Em, X: Am, S: Tm, M: Rm };
  function vm() {
    var t = Ke.f(),
      e = _n();
    return t || e;
  }
  function gm(t) {
    var e = Zl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Uo(e) : Ke.r(t);
  }
  var Ra = typeof document > "u" ? null : document;
  function dd(t, e, l) {
    var a = Ra;
    if (a && typeof e == "string" && e) {
      var u = he(e);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof l == "string" && (u += '[crossorigin="' + l + '"]'),
        sd.has(u) ||
          (sd.add(u),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(u) === null &&
            ((e = a.createElement("link")),
            Xt(e, "link", t),
            Bt(e),
            a.head.appendChild(e)));
    }
  }
  function Sm(t) {
    Ke.D(t), dd("dns-prefetch", t, null);
  }
  function pm(t, e) {
    Ke.C(t, e), dd("preconnect", t, e);
  }
  function bm(t, e, l) {
    Ke.L(t, e, l);
    var a = Ra;
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + he(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((u += '[imagesrcset="' + he(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (u += '[imagesizes="' + he(l.imageSizes) + '"]'))
        : (u += '[href="' + he(t) + '"]');
      var n = u;
      switch (e) {
        case "style":
          n = xa(t);
          break;
        case "script":
          n = Oa(t);
      }
      be.has(n) ||
        ((t = x(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        be.set(n, t),
        a.querySelector(u) !== null ||
          (e === "style" && a.querySelector(Su(n))) ||
          (e === "script" && a.querySelector(pu(n))) ||
          ((e = a.createElement("link")),
          Xt(e, "link", t),
          Bt(e),
          a.head.appendChild(e)));
    }
  }
  function Em(t, e) {
    Ke.m(t, e);
    var l = Ra;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + he(a) + '"][href="' + he(t) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Oa(t);
      }
      if (
        !be.has(n) &&
        ((t = x({ rel: "modulepreload", href: t }, e)),
        be.set(n, t),
        l.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(pu(n))) return;
        }
        (a = l.createElement("link")),
          Xt(a, "link", t),
          Bt(a),
          l.head.appendChild(a);
      }
    }
  }
  function Tm(t, e, l) {
    Ke.S(t, e, l);
    var a = Ra;
    if (a && t) {
      var u = Vl(a).hoistableStyles,
        n = xa(t);
      e = e || "default";
      var c = u.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if ((c = a.querySelector(Su(n)))) f.loading = 5;
        else {
          (t = x({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = be.get(n)) && sf(t, l);
          var h = (c = a.createElement("link"));
          Bt(h),
            Xt(h, "link", t),
            (h._p = new Promise(function (E, O) {
              (h.onload = E), (h.onerror = O);
            })),
            h.addEventListener("load", function () {
              f.loading |= 1;
            }),
            h.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Gn(c, e, a);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: f }),
          u.set(n, c);
      }
    }
  }
  function Am(t, e) {
    Ke.X(t, e);
    var l = Ra;
    if (l && t) {
      var a = Vl(l).hoistableScripts,
        u = Oa(t),
        n = a.get(u);
      n ||
        ((n = l.querySelector(pu(u))),
        n ||
          ((t = x({ src: t, async: !0 }, e)),
          (e = be.get(u)) && df(t, e),
          (n = l.createElement("script")),
          Bt(n),
          Xt(n, "link", t),
          l.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function Rm(t, e) {
    Ke.M(t, e);
    var l = Ra;
    if (l && t) {
      var a = Vl(l).hoistableScripts,
        u = Oa(t),
        n = a.get(u);
      n ||
        ((n = l.querySelector(pu(u))),
        n ||
          ((t = x({ src: t, async: !0, type: "module" }, e)),
          (e = be.get(u)) && df(t, e),
          (n = l.createElement("script")),
          Bt(n),
          Xt(n, "link", t),
          l.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function hd(t, e, l, a) {
    var u = (u = tt.current) ? Ln(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = xa(l.href)),
            (l = Vl(u).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = xa(l.href);
          var n = Vl(u).hoistableStyles,
            c = n.get(t);
          if (
            (c ||
              ((u = u.ownerDocument || u),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(t, c),
              (n = u.querySelector(Su(t))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              be.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                be.set(t, l),
                n || xm(u, t, l, c.state))),
            e && a === null)
          )
            throw Error(r(528, ""));
          return c;
        }
        if (e && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Oa(l)),
              (l = Vl(u).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function xa(t) {
    return 'href="' + he(t) + '"';
  }
  function Su(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function md(t) {
    return x({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function xm(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Xt(e, "link", l),
        Bt(e),
        t.head.appendChild(e));
  }
  function Oa(t) {
    return '[src="' + he(t) + '"]';
  }
  function pu(t) {
    return "script[async]" + t;
  }
  function yd(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + he(l.href) + '"]');
          if (a) return (e.instance = a), Bt(a), a;
          var u = x({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Bt(a),
            Xt(a, "style", u),
            Gn(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          u = xa(l.href);
          var n = t.querySelector(Su(u));
          if (n) return (e.state.loading |= 4), (e.instance = n), Bt(n), n;
          (a = md(l)),
            (u = be.get(u)) && sf(a, u),
            (n = (t.ownerDocument || t).createElement("link")),
            Bt(n);
          var c = n;
          return (
            (c._p = new Promise(function (f, h) {
              (c.onload = f), (c.onerror = h);
            })),
            Xt(n, "link", a),
            (e.state.loading |= 4),
            Gn(n, l.precedence, t),
            (e.instance = n)
          );
        case "script":
          return (
            (n = Oa(l.src)),
            (u = t.querySelector(pu(n)))
              ? ((e.instance = u), Bt(u), u)
              : ((a = l),
                (u = be.get(n)) && ((a = x({}, l)), df(a, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                Bt(u),
                Xt(u, "link", a),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Gn(a, l.precedence, t));
    return e.instance;
  }
  function Gn(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        c = 0;
      c < a.length;
      c++
    ) {
      var f = a[c];
      if (f.dataset.precedence === e) n = f;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function sf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function df(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Xn = null;
  function vd(t, e, l) {
    if (Xn === null) {
      var a = new Map(),
        u = (Xn = new Map());
      u.set(l, a);
    } else (u = Xn), (a = u.get(l)), a || ((a = new Map()), u.set(l, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), u = 0;
      u < l.length;
      u++
    ) {
      var n = l[u];
      if (
        !(
          n[Na] ||
          n[Vt] ||
          (t === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(e) || "";
        c = t + c;
        var f = a.get(c);
        f ? f.push(n) : a.set(c, [n]);
      }
    }
    return a;
  }
  function gd(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null,
      );
  }
  function Om(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Sd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var bu = null;
  function zm() {}
  function Dm(t, e, l) {
    if (bu === null) throw Error(r(475));
    var a = bu;
    if (
      e.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = xa(l.href),
          n = t.querySelector(Su(u));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Qn.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = n),
            Bt(n);
          return;
        }
        (n = t.ownerDocument || t),
          (l = md(l)),
          (u = be.get(u)) && sf(l, u),
          (n = n.createElement("link")),
          Bt(n);
        var c = n;
        (c._p = new Promise(function (f, h) {
          (c.onload = f), (c.onerror = h);
        })),
          Xt(n, "link", l),
          (e.instance = n);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = Qn.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Mm() {
    if (bu === null) throw Error(r(475));
    var t = bu;
    return (
      t.stylesheets && t.count === 0 && hf(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && hf(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function Qn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) hf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var wn = null;
  function hf(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (wn = new Map()),
        e.forEach(_m, t),
        (wn = null),
        Qn.call(t));
  }
  function _m(t, e) {
    if (!(e.state.loading & 4)) {
      var l = wn.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), wn.set(t, l);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (l.set(c.dataset.precedence, c), (a = c));
        }
        a && l.set(null, a);
      }
      (u = e.instance),
        (c = u.getAttribute("data-precedence")),
        (n = l.get(c) || a),
        n === a && l.set(null, u),
        l.set(c, u),
        this.count++,
        (a = Qn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Eu = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0,
  };
  function Um(t, e, l, a, u, n, c, f) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = fi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = fi(0)),
      (this.hiddenUpdates = fi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map());
  }
  function pd(t, e, l, a, u, n, c, f, h, E, O, U) {
    return (
      (t = new Um(t, e, l, c, f, h, E, U)),
      (e = 1),
      n === !0 && (e |= 24),
      (n = ne(3, null, null, e)),
      (t.current = n),
      (n.stateNode = t),
      (e = Ji()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (n.memoizedState = { element: a, isDehydrated: l, cache: e }),
      Fi(n),
      t
    );
  }
  function bd(t) {
    return t ? ((t = aa), t) : aa;
  }
  function Ed(t, e, l, a, u, n) {
    (u = bd(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = ll(e)),
      (a.payload = { element: l }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (l = al(t, a, e)),
      l !== null && (oe(l, t, e), Fa(l, t, e));
  }
  function Td(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function mf(t, e) {
    Td(t, e), (t = t.alternate) && Td(t, e);
  }
  function Ad(t) {
    if (t.tag === 13) {
      var e = la(t, 67108864);
      e !== null && oe(e, t, 67108864), mf(t, 67108864);
    }
  }
  var Zn = !0;
  function Nm(t, e, l, a) {
    var u = z.T;
    z.T = null;
    var n = j.p;
    try {
      (j.p = 2), yf(t, e, l, a);
    } finally {
      (j.p = n), (z.T = u);
    }
  }
  function Cm(t, e, l, a) {
    var u = z.T;
    z.T = null;
    var n = j.p;
    try {
      (j.p = 8), yf(t, e, l, a);
    } finally {
      (j.p = n), (z.T = u);
    }
  }
  function yf(t, e, l, a) {
    if (Zn) {
      var u = vf(a);
      if (u === null) ef(t, e, a, Vn, l), xd(t, a);
      else if (Bm(u, t, e, l, a)) a.stopPropagation();
      else if ((xd(t, a), e & 4 && -1 < Hm.indexOf(t))) {
        for (; u !== null; ) {
          var n = Zl(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = Al(n.pendingLanes);
                  if (c !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var h = 1 << (31 - ae(c));
                      (f.entanglements[1] |= h), (c &= ~h);
                    }
                    Me(n), (st & 6) === 0 && ((Dn = Re() + 500), mu(0));
                  }
                }
                break;
              case 13:
                (f = la(n, 2)), f !== null && oe(f, n, 2), _n(), mf(n, 2);
            }
          if (((n = vf(a)), n === null && ef(t, e, a, Vn, l), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else ef(t, e, a, null, l);
    }
  }
  function vf(t) {
    return (t = bi(t)), gf(t);
  }
  var Vn = null;
  function gf(t) {
    if (((Vn = null), (t = wl(t)), t !== null)) {
      var e = g(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = R(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Vn = t), null;
  }
  function Rd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ph()) {
          case Yf:
            return 2;
          case jf:
            return 8;
          case qu:
          case bh:
            return 32;
          case Lf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Sf = !1,
    vl = null,
    gl = null,
    Sl = null,
    Tu = new Map(),
    Au = new Map(),
    pl = [],
    Hm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function xd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        vl = null;
        break;
      case "dragenter":
      case "dragleave":
        gl = null;
        break;
      case "mouseover":
      case "mouseout":
        Sl = null;
        break;
      case "pointerover":
      case "pointerout":
        Tu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Au.delete(e.pointerId);
    }
  }
  function Ru(t, e, l, a, u, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        e !== null && ((e = Zl(e)), e !== null && Ad(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function Bm(t, e, l, a, u) {
    switch (e) {
      case "focusin":
        return (vl = Ru(vl, t, e, l, a, u)), !0;
      case "dragenter":
        return (gl = Ru(gl, t, e, l, a, u)), !0;
      case "mouseover":
        return (Sl = Ru(Sl, t, e, l, a, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return Tu.set(n, Ru(Tu.get(n) || null, t, e, l, a, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), Au.set(n, Ru(Au.get(n) || null, t, e, l, a, u)), !0
        );
    }
    return !1;
  }
  function Od(t) {
    var e = wl(t.target);
    if (e !== null) {
      var l = g(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = R(l)), e !== null)) {
            (t.blockedOn = e),
              Dh(t.priority, function () {
                if (l.tag === 13) {
                  var a = re();
                  a = ri(a);
                  var u = la(l, a);
                  u !== null && oe(u, l, a), mf(l, a);
                }
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Kn(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = vf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (pi = a), l.target.dispatchEvent(a), (pi = null);
      } else return (e = Zl(l)), e !== null && Ad(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function zd(t, e, l) {
    Kn(t) && l.delete(e);
  }
  function qm() {
    (Sf = !1),
      vl !== null && Kn(vl) && (vl = null),
      gl !== null && Kn(gl) && (gl = null),
      Sl !== null && Kn(Sl) && (Sl = null),
      Tu.forEach(zd),
      Au.forEach(zd);
  }
  function Jn(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Sf ||
        ((Sf = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, qm)));
  }
  var kn = null;
  function Dd(t) {
    kn !== t &&
      ((kn = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        kn === t && (kn = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            u = t[e + 2];
          if (typeof a != "function") {
            if (gf(a || l) === null) continue;
            break;
          }
          var n = Zl(l);
          n !== null &&
            (t.splice(e, 3),
            (e -= 3),
            vc(n, { pending: !0, data: u, method: l.method, action: a }, a, u));
        }
      }));
  }
  function xu(t) {
    function e(h) {
      return Jn(h, t);
    }
    vl !== null && Jn(vl, t),
      gl !== null && Jn(gl, t),
      Sl !== null && Jn(Sl, t),
      Tu.forEach(e),
      Au.forEach(e);
    for (var l = 0; l < pl.length; l++) {
      var a = pl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < pl.length && ((l = pl[0]), l.blockedOn === null); )
      Od(l), l.blockedOn === null && pl.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var u = l[a],
          n = l[a + 1],
          c = u[Wt] || null;
        if (typeof n == "function") c || Dd(l);
        else if (c) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (c = n[Wt] || null))) f = c.formAction;
            else if (gf(u) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? (l[a + 1] = f) : (l.splice(a, 3), (a -= 3)),
            Dd(l);
        }
      }
  }
  function pf(t) {
    this._internalRoot = t;
  }
  ($n.prototype.render = pf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var l = e.current,
        a = re();
      Ed(l, a, t, e, null, null);
    }),
    ($n.prototype.unmount = pf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Ed(t.current, 2, null, t, null, null), _n(), (e[Ql] = null);
        }
      });
  function $n(t) {
    this._internalRoot = t;
  }
  $n.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Zf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < pl.length && e !== 0 && e < pl[l].priority; l++);
      pl.splice(l, 0, t), l === 0 && Od(t);
    }
  };
  var Md = o.version;
  if (Md !== "19.1.0") throw Error(r(527, Md, "19.1.0"));
  j.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = p(e)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Ym = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wn.isDisabled && Wn.supportsFiber)
      try {
        (Ma = Wn.inject(Ym)), (le = Wn);
      } catch {}
  }
  return (
    (zu.createRoot = function (t, e) {
      if (!d(t)) throw Error(r(299));
      var l = !1,
        a = "",
        u = Vo,
        n = Ko,
        c = Jo,
        f = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (n = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (f = e.unstable_transitionCallbacks)),
        (e = pd(t, 1, !1, null, null, l, a, u, n, c, f, null)),
        (t[Ql] = e.current),
        tf(t),
        new pf(e)
      );
    }),
    (zu.hydrateRoot = function (t, e, l) {
      if (!d(t)) throw Error(r(299));
      var a = !1,
        u = "",
        n = Vo,
        c = Ko,
        f = Jo,
        h = null,
        E = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (n = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (f = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (h = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (E = l.formState)),
        (e = pd(t, 1, !0, e, l ?? null, a, u, n, c, f, h, E)),
        (e.context = bd(null)),
        (l = e.current),
        (a = re()),
        (a = ri(a)),
        (u = ll(a)),
        (u.callback = null),
        al(l, u, a),
        (l = a),
        (e.current.lanes = l),
        Ua(e, l),
        Me(e),
        (t[Ql] = e.current),
        tf(t),
        new $n(e)
      );
    }),
    (zu.version = "19.1.0"),
    zu
  );
}
var Ld;
function km() {
  if (Ld) return Tf.exports;
  Ld = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return i(), (Tf.exports = Jm()), Tf.exports;
}
var $m = km();
const Wm = kd($m);
var Du = {},
  Gd;
function Fm() {
  if (Gd) return Du;
  (Gd = 1),
    Object.defineProperty(Du, "__esModule", { value: !0 }),
    (Du.parse = R),
    (Du.serialize = m);
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    o = /^[\u0021-\u003A\u003C-\u007E]*$/,
    s =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    r = /^[\u0020-\u003A\u003D-\u007E]*$/,
    d = Object.prototype.toString,
    g = (() => {
      const N = function () {};
      return (N.prototype = Object.create(null)), N;
    })();
  function R(N, Q) {
    const H = new g(),
      G = N.length;
    if (G < 2) return H;
    const Z = (Q == null ? void 0 : Q.decode) || x;
    let q = 0;
    do {
      const w = N.indexOf("=", q);
      if (w === -1) break;
      const P = N.indexOf(";", q),
        ct = P === -1 ? G : P;
      if (w > ct) {
        q = N.lastIndexOf(";", w - 1) + 1;
        continue;
      }
      const I = M(N, q, w),
        _t = p(N, w, I),
        Rt = N.slice(I, _t);
      if (H[Rt] === void 0) {
        let zt = M(N, w + 1, ct),
          pt = p(N, ct, zt);
        const kt = Z(N.slice(zt, pt));
        H[Rt] = kt;
      }
      q = ct + 1;
    } while (q < G);
    return H;
  }
  function M(N, Q, H) {
    do {
      const G = N.charCodeAt(Q);
      if (G !== 32 && G !== 9) return Q;
    } while (++Q < H);
    return H;
  }
  function p(N, Q, H) {
    for (; Q > H; ) {
      const G = N.charCodeAt(--Q);
      if (G !== 32 && G !== 9) return Q + 1;
    }
    return H;
  }
  function m(N, Q, H) {
    const G = (H == null ? void 0 : H.encode) || encodeURIComponent;
    if (!i.test(N)) throw new TypeError(`argument name is invalid: ${N}`);
    const Z = G(Q);
    if (!o.test(Z)) throw new TypeError(`argument val is invalid: ${Q}`);
    let q = N + "=" + Z;
    if (!H) return q;
    if (H.maxAge !== void 0) {
      if (!Number.isInteger(H.maxAge))
        throw new TypeError(`option maxAge is invalid: ${H.maxAge}`);
      q += "; Max-Age=" + H.maxAge;
    }
    if (H.domain) {
      if (!s.test(H.domain))
        throw new TypeError(`option domain is invalid: ${H.domain}`);
      q += "; Domain=" + H.domain;
    }
    if (H.path) {
      if (!r.test(H.path))
        throw new TypeError(`option path is invalid: ${H.path}`);
      q += "; Path=" + H.path;
    }
    if (H.expires) {
      if (!B(H.expires) || !Number.isFinite(H.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${H.expires}`);
      q += "; Expires=" + H.expires.toUTCString();
    }
    if (
      (H.httpOnly && (q += "; HttpOnly"),
      H.secure && (q += "; Secure"),
      H.partitioned && (q += "; Partitioned"),
      H.priority)
    )
      switch (
        typeof H.priority == "string" ? H.priority.toLowerCase() : void 0
      ) {
        case "low":
          q += "; Priority=Low";
          break;
        case "medium":
          q += "; Priority=Medium";
          break;
        case "high":
          q += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${H.priority}`);
      }
    if (H.sameSite)
      switch (
        typeof H.sameSite == "string" ? H.sameSite.toLowerCase() : H.sameSite
      ) {
        case !0:
        case "strict":
          q += "; SameSite=Strict";
          break;
        case "lax":
          q += "; SameSite=Lax";
          break;
        case "none":
          q += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${H.sameSite}`);
      }
    return q;
  }
  function x(N) {
    if (N.indexOf("%") === -1) return N;
    try {
      return decodeURIComponent(N);
    } catch {
      return N;
    }
  }
  function B(N) {
    return d.call(N) === "[object Date]";
  }
  return Du;
}
Fm();
var Xd = "popstate";
function Pm(i = {}) {
  function o(r, d) {
    let { pathname: g, search: R, hash: M } = r.location;
    return Mf(
      "",
      { pathname: g, search: R, hash: M },
      (d.state && d.state.usr) || null,
      (d.state && d.state.key) || "default",
    );
  }
  function s(r, d) {
    return typeof d == "string" ? d : _u(d);
  }
  return ty(o, s, null, i);
}
function At(i, o) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(o);
}
function _e(i, o) {
  if (!i) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function Im() {
  return Math.random().toString(36).substring(2, 10);
}
function Qd(i, o) {
  return { usr: i.state, key: i.key, idx: o };
}
function Mf(i, o, s = null, r) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof o == "string" ? za(o) : o),
    state: s,
    key: (o && o.key) || r || Im(),
  };
}
function _u({ pathname: i = "/", search: o = "", hash: s = "" }) {
  return (
    o && o !== "?" && (i += o.charAt(0) === "?" ? o : "?" + o),
    s && s !== "#" && (i += s.charAt(0) === "#" ? s : "#" + s),
    i
  );
}
function za(i) {
  let o = {};
  if (i) {
    let s = i.indexOf("#");
    s >= 0 && ((o.hash = i.substring(s)), (i = i.substring(0, s)));
    let r = i.indexOf("?");
    r >= 0 && ((o.search = i.substring(r)), (i = i.substring(0, r))),
      i && (o.pathname = i);
  }
  return o;
}
function ty(i, o, s, r = {}) {
  let { window: d = document.defaultView, v5Compat: g = !1 } = r,
    R = d.history,
    M = "POP",
    p = null,
    m = x();
  m == null && ((m = 0), R.replaceState({ ...R.state, idx: m }, ""));
  function x() {
    return (R.state || { idx: null }).idx;
  }
  function B() {
    M = "POP";
    let Z = x(),
      q = Z == null ? null : Z - m;
    (m = Z), p && p({ action: M, location: G.location, delta: q });
  }
  function N(Z, q) {
    M = "PUSH";
    let w = Mf(G.location, Z, q);
    m = x() + 1;
    let P = Qd(w, m),
      ct = G.createHref(w);
    try {
      R.pushState(P, "", ct);
    } catch (I) {
      if (I instanceof DOMException && I.name === "DataCloneError") throw I;
      d.location.assign(ct);
    }
    g && p && p({ action: M, location: G.location, delta: 1 });
  }
  function Q(Z, q) {
    M = "REPLACE";
    let w = Mf(G.location, Z, q);
    m = x();
    let P = Qd(w, m),
      ct = G.createHref(w);
    R.replaceState(P, "", ct),
      g && p && p({ action: M, location: G.location, delta: 0 });
  }
  function H(Z) {
    return ey(Z);
  }
  let G = {
    get action() {
      return M;
    },
    get location() {
      return i(d, R);
    },
    listen(Z) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(Xd, B),
        (p = Z),
        () => {
          d.removeEventListener(Xd, B), (p = null);
        }
      );
    },
    createHref(Z) {
      return o(d, Z);
    },
    createURL: H,
    encodeLocation(Z) {
      let q = H(Z);
      return { pathname: q.pathname, search: q.search, hash: q.hash };
    },
    push: N,
    replace: Q,
    go(Z) {
      return R.go(Z);
    },
  };
  return G;
}
function ey(i, o = !1) {
  let s = "http://localhost";
  typeof window < "u" &&
    (s =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    At(s, "No window.location.(origin|href) available to create URL");
  let r = typeof i == "string" ? i : _u(i);
  return (
    (r = r.replace(/ $/, "%20")),
    !o && r.startsWith("//") && (r = s + r),
    new URL(r, s)
  );
}
function $d(i, o, s = "/") {
  return ly(i, o, s, !1);
}
function ly(i, o, s, r) {
  let d = typeof o == "string" ? za(o) : o,
    g = ke(d.pathname || "/", s);
  if (g == null) return null;
  let R = Wd(i);
  ay(R);
  let M = null;
  for (let p = 0; M == null && p < R.length; ++p) {
    let m = my(g);
    M = dy(R[p], m, r);
  }
  return M;
}
function Wd(i, o = [], s = [], r = "") {
  let d = (g, R, M) => {
    let p = {
      relativePath: M === void 0 ? g.path || "" : M,
      caseSensitive: g.caseSensitive === !0,
      childrenIndex: R,
      route: g,
    };
    p.relativePath.startsWith("/") &&
      (At(
        p.relativePath.startsWith(r),
        `Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (p.relativePath = p.relativePath.slice(r.length)));
    let m = Je([r, p.relativePath]),
      x = s.concat(p);
    g.children &&
      g.children.length > 0 &&
      (At(
        g.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`,
      ),
      Wd(g.children, o, x, m)),
      !(g.path == null && !g.index) &&
        o.push({ path: m, score: oy(m, g.index), routesMeta: x });
  };
  return (
    i.forEach((g, R) => {
      var M;
      if (g.path === "" || !((M = g.path) != null && M.includes("?"))) d(g, R);
      else for (let p of Fd(g.path)) d(g, R, p);
    }),
    o
  );
}
function Fd(i) {
  let o = i.split("/");
  if (o.length === 0) return [];
  let [s, ...r] = o,
    d = s.endsWith("?"),
    g = s.replace(/\?$/, "");
  if (r.length === 0) return d ? [g, ""] : [g];
  let R = Fd(r.join("/")),
    M = [];
  return (
    M.push(...R.map((p) => (p === "" ? g : [g, p].join("/")))),
    d && M.push(...R),
    M.map((p) => (i.startsWith("/") && p === "" ? "/" : p))
  );
}
function ay(i) {
  i.sort((o, s) =>
    o.score !== s.score
      ? s.score - o.score
      : sy(
          o.routesMeta.map((r) => r.childrenIndex),
          s.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
var uy = /^:[\w-]+$/,
  ny = 3,
  iy = 2,
  cy = 1,
  fy = 10,
  ry = -2,
  wd = (i) => i === "*";
function oy(i, o) {
  let s = i.split("/"),
    r = s.length;
  return (
    s.some(wd) && (r += ry),
    o && (r += iy),
    s
      .filter((d) => !wd(d))
      .reduce((d, g) => d + (uy.test(g) ? ny : g === "" ? cy : fy), r)
  );
}
function sy(i, o) {
  return i.length === o.length && i.slice(0, -1).every((r, d) => r === o[d])
    ? i[i.length - 1] - o[o.length - 1]
    : 0;
}
function dy(i, o, s = !1) {
  let { routesMeta: r } = i,
    d = {},
    g = "/",
    R = [];
  for (let M = 0; M < r.length; ++M) {
    let p = r[M],
      m = M === r.length - 1,
      x = g === "/" ? o : o.slice(g.length) || "/",
      B = ei(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: m },
        x,
      ),
      N = p.route;
    if (
      (!B &&
        m &&
        s &&
        !r[r.length - 1].route.index &&
        (B = ei(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          x,
        )),
      !B)
    )
      return null;
    Object.assign(d, B.params),
      R.push({
        params: d,
        pathname: Je([g, B.pathname]),
        pathnameBase: Sy(Je([g, B.pathnameBase])),
        route: N,
      }),
      B.pathnameBase !== "/" && (g = Je([g, B.pathnameBase]));
  }
  return R;
}
function ei(i, o) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [s, r] = hy(i.path, i.caseSensitive, i.end),
    d = o.match(s);
  if (!d) return null;
  let g = d[0],
    R = g.replace(/(.)\/+$/, "$1"),
    M = d.slice(1);
  return {
    params: r.reduce((m, { paramName: x, isOptional: B }, N) => {
      if (x === "*") {
        let H = M[N] || "";
        R = g.slice(0, g.length - H.length).replace(/(.)\/+$/, "$1");
      }
      const Q = M[N];
      return (
        B && !Q ? (m[x] = void 0) : (m[x] = (Q || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: g,
    pathnameBase: R,
    pattern: i,
  };
}
function hy(i, o = !1, s = !0) {
  _e(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(
      /\*$/,
      "/*",
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(
      /\*$/,
      "/*",
    )}".`,
  );
  let r = [],
    d =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (R, M, p) => (
            r.push({ paramName: M, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    i.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (d += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
      ? (d += "\\/*$")
      : i !== "" && i !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, o ? void 0 : "i"), r]
  );
}
function my(i) {
  try {
    return i
      .split("/")
      .map((o) => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/");
  } catch (o) {
    return (
      _e(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`,
      ),
      i
    );
  }
}
function ke(i, o) {
  if (o === "/") return i;
  if (!i.toLowerCase().startsWith(o.toLowerCase())) return null;
  let s = o.endsWith("/") ? o.length - 1 : o.length,
    r = i.charAt(s);
  return r && r !== "/" ? null : i.slice(s) || "/";
}
function yy(i, o = "/") {
  let {
    pathname: s,
    search: r = "",
    hash: d = "",
  } = typeof i == "string" ? za(i) : i;
  return {
    pathname: s ? (s.startsWith("/") ? s : vy(s, o)) : o,
    search: py(r),
    hash: by(d),
  };
}
function vy(i, o) {
  let s = o.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((d) => {
      d === ".." ? s.length > 1 && s.pop() : d !== "." && s.push(d);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function Of(i, o, s, r) {
  return `Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    r,
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function gy(i) {
  return i.filter(
    (o, s) => s === 0 || (o.route.path && o.route.path.length > 0),
  );
}
function Pd(i) {
  let o = gy(i);
  return o.map((s, r) => (r === o.length - 1 ? s.pathname : s.pathnameBase));
}
function Id(i, o, s, r = !1) {
  let d;
  typeof i == "string"
    ? (d = za(i))
    : ((d = { ...i }),
      At(
        !d.pathname || !d.pathname.includes("?"),
        Of("?", "pathname", "search", d),
      ),
      At(
        !d.pathname || !d.pathname.includes("#"),
        Of("#", "pathname", "hash", d),
      ),
      At(!d.search || !d.search.includes("#"), Of("#", "search", "hash", d)));
  let g = i === "" || d.pathname === "",
    R = g ? "/" : d.pathname,
    M;
  if (R == null) M = s;
  else {
    let B = o.length - 1;
    if (!r && R.startsWith("..")) {
      let N = R.split("/");
      for (; N[0] === ".."; ) N.shift(), (B -= 1);
      d.pathname = N.join("/");
    }
    M = B >= 0 ? o[B] : "/";
  }
  let p = yy(d, M),
    m = R && R !== "/" && R.endsWith("/"),
    x = (g || R === ".") && s.endsWith("/");
  return !p.pathname.endsWith("/") && (m || x) && (p.pathname += "/"), p;
}
var Je = (i) => i.join("/").replace(/\/\/+/g, "/"),
  Sy = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  py = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  by = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function Ey(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
var th = ["POST", "PUT", "PATCH", "DELETE"];
new Set(th);
var Ty = ["GET", ...th];
new Set(Ty);
var Da = D.createContext(null);
Da.displayName = "DataRouter";
var li = D.createContext(null);
li.displayName = "DataRouterState";
var eh = D.createContext({ isTransitioning: !1 });
eh.displayName = "ViewTransition";
var Ay = D.createContext(new Map());
Ay.displayName = "Fetchers";
var Ry = D.createContext(null);
Ry.displayName = "Await";
var Ue = D.createContext(null);
Ue.displayName = "Navigation";
var Uu = D.createContext(null);
Uu.displayName = "Location";
var $e = D.createContext({ outlet: null, matches: [], isDataRoute: !1 });
$e.displayName = "Route";
var Nf = D.createContext(null);
Nf.displayName = "RouteError";
function xy(i, { relative: o } = {}) {
  At(
    Nu(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: s, navigator: r } = D.useContext(Ue),
    { hash: d, pathname: g, search: R } = Cu(i, { relative: o }),
    M = g;
  return (
    s !== "/" && (M = g === "/" ? s : Je([s, g])),
    r.createHref({ pathname: M, search: R, hash: d })
  );
}
function Nu() {
  return D.useContext(Uu) != null;
}
function Xl() {
  return (
    At(
      Nu(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    D.useContext(Uu).location
  );
}
var lh =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ah(i) {
  D.useContext(Ue).static || D.useLayoutEffect(i);
}
function uh() {
  let { isDataRoute: i } = D.useContext($e);
  return i ? jy() : Oy();
}
function Oy() {
  At(
    Nu(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let i = D.useContext(Da),
    { basename: o, navigator: s } = D.useContext(Ue),
    { matches: r } = D.useContext($e),
    { pathname: d } = Xl(),
    g = JSON.stringify(Pd(r)),
    R = D.useRef(!1);
  return (
    ah(() => {
      R.current = !0;
    }),
    D.useCallback(
      (p, m = {}) => {
        if ((_e(R.current, lh), !R.current)) return;
        if (typeof p == "number") {
          s.go(p);
          return;
        }
        let x = Id(p, JSON.parse(g), d, m.relative === "path");
        i == null &&
          o !== "/" &&
          (x.pathname = x.pathname === "/" ? o : Je([o, x.pathname])),
          (m.replace ? s.replace : s.push)(x, m.state, m);
      },
      [o, s, g, d, i],
    )
  );
}
D.createContext(null);
function Cu(i, { relative: o } = {}) {
  let { matches: s } = D.useContext($e),
    { pathname: r } = Xl(),
    d = JSON.stringify(Pd(s));
  return D.useMemo(() => Id(i, JSON.parse(d), r, o === "path"), [i, d, r, o]);
}
function zy(i, o) {
  return nh(i, o);
}
function nh(i, o, s, r) {
  var q;
  At(
    Nu(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: d } = D.useContext(Ue),
    { matches: g } = D.useContext($e),
    R = g[g.length - 1],
    M = R ? R.params : {},
    p = R ? R.pathname : "/",
    m = R ? R.pathnameBase : "/",
    x = R && R.route;
  {
    let w = (x && x.path) || "";
    ih(
      p,
      !x || w.endsWith("*") || w.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${
        w === "/" ? "*" : `${w}/*`
      }">.`,
    );
  }
  let B = Xl(),
    N;
  if (o) {
    let w = typeof o == "string" ? za(o) : o;
    At(
      m === "/" || ((q = w.pathname) == null ? void 0 : q.startsWith(m)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${w.pathname}" was given in the \`location\` prop.`,
    ),
      (N = w);
  } else N = B;
  let Q = N.pathname || "/",
    H = Q;
  if (m !== "/") {
    let w = m.replace(/^\//, "").split("/");
    H = "/" + Q.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let G = $d(i, { pathname: H });
  _e(
    x || G != null,
    `No routes matched location "${N.pathname}${N.search}${N.hash}" `,
  ),
    _e(
      G == null ||
        G[G.length - 1].route.element !== void 0 ||
        G[G.length - 1].route.Component !== void 0 ||
        G[G.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let Z = Ny(
    G &&
      G.map((w) =>
        Object.assign({}, w, {
          params: Object.assign({}, M, w.params),
          pathname: Je([
            m,
            d.encodeLocation
              ? d.encodeLocation(w.pathname).pathname
              : w.pathname,
          ]),
          pathnameBase:
            w.pathnameBase === "/"
              ? m
              : Je([
                  m,
                  d.encodeLocation
                    ? d.encodeLocation(w.pathnameBase).pathname
                    : w.pathnameBase,
                ]),
        }),
      ),
    g,
    s,
    r,
  );
  return o && Z
    ? D.createElement(
        Uu.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...N,
            },
            navigationType: "POP",
          },
        },
        Z,
      )
    : Z;
}
function Dy() {
  let i = Yy(),
    o = Ey(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    s = i instanceof Error ? i.stack : null,
    r = "rgba(200,200,200, 0.5)",
    d = { padding: "0.5rem", backgroundColor: r },
    g = { padding: "2px 4px", backgroundColor: r },
    R = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (R = D.createElement(
      D.Fragment,
      null,
      D.createElement("p", null, "💿 Hey developer 👋"),
      D.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        D.createElement("code", { style: g }, "ErrorBoundary"),
        " or",
        " ",
        D.createElement("code", { style: g }, "errorElement"),
        " prop on your route.",
      ),
    )),
    D.createElement(
      D.Fragment,
      null,
      D.createElement("h2", null, "Unexpected Application Error!"),
      D.createElement("h3", { style: { fontStyle: "italic" } }, o),
      s ? D.createElement("pre", { style: d }, s) : null,
      R,
    )
  );
}
var My = D.createElement(Dy, null),
  _y = class extends D.Component {
    constructor(i) {
      super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        });
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, o) {
      return o.location !== i.location ||
        (o.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : o.error,
            location: o.location,
            revalidation: i.revalidation || o.revalidation,
          };
    }
    componentDidCatch(i, o) {
      console.error(
        "React Router caught the following error during render",
        i,
        o,
      );
    }
    render() {
      return this.state.error !== void 0
        ? D.createElement(
            $e.Provider,
            { value: this.props.routeContext },
            D.createElement(Nf.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function Uy({ routeContext: i, match: o, children: s }) {
  let r = D.useContext(Da);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = o.route.id),
    D.createElement($e.Provider, { value: i }, s)
  );
}
function Ny(i, o = [], s = null, r = null) {
  if (i == null) {
    if (!s) return null;
    if (s.errors) i = s.matches;
    else if (o.length === 0 && !s.initialized && s.matches.length > 0)
      i = s.matches;
    else return null;
  }
  let d = i,
    g = s == null ? void 0 : s.errors;
  if (g != null) {
    let p = d.findIndex(
      (m) => m.route.id && (g == null ? void 0 : g[m.route.id]) !== void 0,
    );
    At(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        g,
      ).join(",")}`,
    ),
      (d = d.slice(0, Math.min(d.length, p + 1)));
  }
  let R = !1,
    M = -1;
  if (s)
    for (let p = 0; p < d.length; p++) {
      let m = d[p];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (M = p),
        m.route.id)
      ) {
        let { loaderData: x, errors: B } = s,
          N =
            m.route.loader &&
            !x.hasOwnProperty(m.route.id) &&
            (!B || B[m.route.id] === void 0);
        if (m.route.lazy || N) {
          (R = !0), M >= 0 ? (d = d.slice(0, M + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((p, m, x) => {
    let B,
      N = !1,
      Q = null,
      H = null;
    s &&
      ((B = g && m.route.id ? g[m.route.id] : void 0),
      (Q = m.route.errorElement || My),
      R &&
        (M < 0 && x === 0
          ? (ih(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (N = !0),
            (H = null))
          : M === x &&
            ((N = !0), (H = m.route.hydrateFallbackElement || null))));
    let G = o.concat(d.slice(0, x + 1)),
      Z = () => {
        let q;
        return (
          B
            ? (q = Q)
            : N
            ? (q = H)
            : m.route.Component
            ? (q = D.createElement(m.route.Component, null))
            : m.route.element
            ? (q = m.route.element)
            : (q = p),
          D.createElement(Uy, {
            match: m,
            routeContext: { outlet: p, matches: G, isDataRoute: s != null },
            children: q,
          })
        );
      };
    return s && (m.route.ErrorBoundary || m.route.errorElement || x === 0)
      ? D.createElement(_y, {
          location: s.location,
          revalidation: s.revalidation,
          component: Q,
          error: B,
          children: Z(),
          routeContext: { outlet: null, matches: G, isDataRoute: !0 },
        })
      : Z();
  }, null);
}
function Cf(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Cy(i) {
  let o = D.useContext(Da);
  return At(o, Cf(i)), o;
}
function Hy(i) {
  let o = D.useContext(li);
  return At(o, Cf(i)), o;
}
function By(i) {
  let o = D.useContext($e);
  return At(o, Cf(i)), o;
}
function Hf(i) {
  let o = By(i),
    s = o.matches[o.matches.length - 1];
  return (
    At(
      s.route.id,
      `${i} can only be used on routes that contain a unique "id"`,
    ),
    s.route.id
  );
}
function qy() {
  return Hf("useRouteId");
}
function Yy() {
  var r;
  let i = D.useContext(Nf),
    o = Hy("useRouteError"),
    s = Hf("useRouteError");
  return i !== void 0 ? i : (r = o.errors) == null ? void 0 : r[s];
}
function jy() {
  let { router: i } = Cy("useNavigate"),
    o = Hf("useNavigate"),
    s = D.useRef(!1);
  return (
    ah(() => {
      s.current = !0;
    }),
    D.useCallback(
      async (d, g = {}) => {
        _e(s.current, lh),
          s.current &&
            (typeof d == "number"
              ? i.navigate(d)
              : await i.navigate(d, { fromRouteId: o, ...g }));
      },
      [i, o],
    )
  );
}
var Zd = {};
function ih(i, o, s) {
  !o && !Zd[i] && ((Zd[i] = !0), _e(!1, s));
}
D.memo(Ly);
function Ly({ routes: i, future: o, state: s }) {
  return nh(i, void 0, s, o);
}
function Pn(i) {
  At(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function Gy({
  basename: i = "/",
  children: o = null,
  location: s,
  navigationType: r = "POP",
  navigator: d,
  static: g = !1,
}) {
  At(
    !Nu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let R = i.replace(/^\/*/, "/"),
    M = D.useMemo(
      () => ({ basename: R, navigator: d, static: g, future: {} }),
      [R, d, g],
    );
  typeof s == "string" && (s = za(s));
  let {
      pathname: p = "/",
      search: m = "",
      hash: x = "",
      state: B = null,
      key: N = "default",
    } = s,
    Q = D.useMemo(() => {
      let H = ke(p, R);
      return H == null
        ? null
        : {
            location: { pathname: H, search: m, hash: x, state: B, key: N },
            navigationType: r,
          };
    }, [R, p, m, x, B, N, r]);
  return (
    _e(
      Q != null,
      `<Router basename="${R}"> is not able to match the URL "${p}${m}${x}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    Q == null
      ? null
      : D.createElement(
          Ue.Provider,
          { value: M },
          D.createElement(Uu.Provider, { children: o, value: Q }),
        )
  );
}
function Xy({ children: i, location: o }) {
  return zy(_f(i), o);
}
function _f(i, o = []) {
  let s = [];
  return (
    D.Children.forEach(i, (r, d) => {
      if (!D.isValidElement(r)) return;
      let g = [...o, d];
      if (r.type === D.Fragment) {
        s.push.apply(s, _f(r.props.children, g));
        return;
      }
      At(
        r.type === Pn,
        `[${
          typeof r.type == "string" ? r.type : r.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        At(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes.",
        );
      let R = {
        id: r.props.id || g.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (R.children = _f(r.props.children, g)), s.push(R);
    }),
    s
  );
}
var In = "get",
  ti = "application/x-www-form-urlencoded";
function ai(i) {
  return i != null && typeof i.tagName == "string";
}
function Qy(i) {
  return ai(i) && i.tagName.toLowerCase() === "button";
}
function wy(i) {
  return ai(i) && i.tagName.toLowerCase() === "form";
}
function Zy(i) {
  return ai(i) && i.tagName.toLowerCase() === "input";
}
function Vy(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Ky(i, o) {
  return i.button === 0 && (!o || o === "_self") && !Vy(i);
}
var Fn = null;
function Jy() {
  if (Fn === null)
    try {
      new FormData(document.createElement("form"), 0), (Fn = !1);
    } catch {
      Fn = !0;
    }
  return Fn;
}
var ky = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function zf(i) {
  return i != null && !ky.has(i)
    ? (_e(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ti}"`,
      ),
      null)
    : i;
}
function $y(i, o) {
  let s, r, d, g, R;
  if (wy(i)) {
    let M = i.getAttribute("action");
    (r = M ? ke(M, o) : null),
      (s = i.getAttribute("method") || In),
      (d = zf(i.getAttribute("enctype")) || ti),
      (g = new FormData(i));
  } else if (Qy(i) || (Zy(i) && (i.type === "submit" || i.type === "image"))) {
    let M = i.form;
    if (M == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let p = i.getAttribute("formaction") || M.getAttribute("action");
    if (
      ((r = p ? ke(p, o) : null),
      (s = i.getAttribute("formmethod") || M.getAttribute("method") || In),
      (d =
        zf(i.getAttribute("formenctype")) ||
        zf(M.getAttribute("enctype")) ||
        ti),
      (g = new FormData(M, i)),
      !Jy())
    ) {
      let { name: m, type: x, value: B } = i;
      if (x === "image") {
        let N = m ? `${m}.` : "";
        g.append(`${N}x`, "0"), g.append(`${N}y`, "0");
      } else m && g.append(m, B);
    }
  } else {
    if (ai(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (s = In), (r = null), (d = ti), (R = i);
  }
  return (
    g && d === "text/plain" && ((R = g), (g = void 0)),
    { action: r, method: s.toLowerCase(), encType: d, formData: g, body: R }
  );
}
function Bf(i, o) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(o);
}
async function Wy(i, o) {
  if (i.id in o) return o[i.id];
  try {
    let s = await import(i.module);
    return (o[i.id] = s), s;
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`,
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Fy(i) {
  return i == null
    ? !1
    : i.href == null
    ? i.rel === "preload" &&
      typeof i.imageSrcSet == "string" &&
      typeof i.imageSizes == "string"
    : typeof i.rel == "string" && typeof i.href == "string";
}
async function Py(i, o, s) {
  let r = await Promise.all(
    i.map(async (d) => {
      let g = o.routes[d.route.id];
      if (g) {
        let R = await Wy(g, s);
        return R.links ? R.links() : [];
      }
      return [];
    }),
  );
  return lv(
    r
      .flat(1)
      .filter(Fy)
      .filter((d) => d.rel === "stylesheet" || d.rel === "preload")
      .map((d) =>
        d.rel === "stylesheet"
          ? { ...d, rel: "prefetch", as: "style" }
          : { ...d, rel: "prefetch" },
      ),
  );
}
function Vd(i, o, s, r, d, g) {
  let R = (p, m) => (s[m] ? p.route.id !== s[m].route.id : !0),
    M = (p, m) => {
      var x;
      return (
        s[m].pathname !== p.pathname ||
        (((x = s[m].route.path) == null ? void 0 : x.endsWith("*")) &&
          s[m].params["*"] !== p.params["*"])
      );
    };
  return g === "assets"
    ? o.filter((p, m) => R(p, m) || M(p, m))
    : g === "data"
    ? o.filter((p, m) => {
        var B;
        let x = r.routes[p.route.id];
        if (!x || !x.hasLoader) return !1;
        if (R(p, m) || M(p, m)) return !0;
        if (p.route.shouldRevalidate) {
          let N = p.route.shouldRevalidate({
            currentUrl: new URL(d.pathname + d.search + d.hash, window.origin),
            currentParams: ((B = s[0]) == null ? void 0 : B.params) || {},
            nextUrl: new URL(i, window.origin),
            nextParams: p.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof N == "boolean") return N;
        }
        return !0;
      })
    : [];
}
function Iy(i, o, { includeHydrateFallback: s } = {}) {
  return tv(
    i
      .map((r) => {
        let d = o.routes[r.route.id];
        if (!d) return [];
        let g = [d.module];
        return (
          d.clientActionModule && (g = g.concat(d.clientActionModule)),
          d.clientLoaderModule && (g = g.concat(d.clientLoaderModule)),
          s &&
            d.hydrateFallbackModule &&
            (g = g.concat(d.hydrateFallbackModule)),
          d.imports && (g = g.concat(d.imports)),
          g
        );
      })
      .flat(1),
  );
}
function tv(i) {
  return [...new Set(i)];
}
function ev(i) {
  let o = {},
    s = Object.keys(i).sort();
  for (let r of s) o[r] = i[r];
  return o;
}
function lv(i, o) {
  let s = new Set();
  return (
    new Set(o),
    i.reduce((r, d) => {
      let g = JSON.stringify(ev(d));
      return s.has(g) || (s.add(g), r.push({ key: g, link: d })), r;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var av = new Set([100, 101, 204, 205]);
function uv(i, o) {
  let s =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : i;
  return (
    s.pathname === "/"
      ? (s.pathname = "_root.data")
      : o && ke(s.pathname, o) === "/"
      ? (s.pathname = `${o.replace(/\/$/, "")}/_root.data`)
      : (s.pathname = `${s.pathname.replace(/\/$/, "")}.data`),
    s
  );
}
function ch() {
  let i = D.useContext(Da);
  return (
    Bf(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    i
  );
}
function nv() {
  let i = D.useContext(li);
  return (
    Bf(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    i
  );
}
var qf = D.createContext(void 0);
qf.displayName = "FrameworkContext";
function fh() {
  let i = D.useContext(qf);
  return (
    Bf(i, "You must render this element inside a <HydratedRouter> element"), i
  );
}
function iv(i, o) {
  let s = D.useContext(qf),
    [r, d] = D.useState(!1),
    [g, R] = D.useState(!1),
    {
      onFocus: M,
      onBlur: p,
      onMouseEnter: m,
      onMouseLeave: x,
      onTouchStart: B,
    } = o,
    N = D.useRef(null);
  D.useEffect(() => {
    if ((i === "render" && R(!0), i === "viewport")) {
      let G = (q) => {
          q.forEach((w) => {
            R(w.isIntersecting);
          });
        },
        Z = new IntersectionObserver(G, { threshold: 0.5 });
      return (
        N.current && Z.observe(N.current),
        () => {
          Z.disconnect();
        }
      );
    }
  }, [i]),
    D.useEffect(() => {
      if (r) {
        let G = setTimeout(() => {
          R(!0);
        }, 100);
        return () => {
          clearTimeout(G);
        };
      }
    }, [r]);
  let Q = () => {
      d(!0);
    },
    H = () => {
      d(!1), R(!1);
    };
  return s
    ? i !== "intent"
      ? [g, N, {}]
      : [
          g,
          N,
          {
            onFocus: Mu(M, Q),
            onBlur: Mu(p, H),
            onMouseEnter: Mu(m, Q),
            onMouseLeave: Mu(x, H),
            onTouchStart: Mu(B, Q),
          },
        ]
    : [!1, N, {}];
}
function Mu(i, o) {
  return (s) => {
    i && i(s), s.defaultPrevented || o(s);
  };
}
function cv({ page: i, ...o }) {
  let { router: s } = ch(),
    r = D.useMemo(() => $d(s.routes, i, s.basename), [s.routes, i, s.basename]);
  return r ? D.createElement(rv, { page: i, matches: r, ...o }) : null;
}
function fv(i) {
  let { manifest: o, routeModules: s } = fh(),
    [r, d] = D.useState([]);
  return (
    D.useEffect(() => {
      let g = !1;
      return (
        Py(i, o, s).then((R) => {
          g || d(R);
        }),
        () => {
          g = !0;
        }
      );
    }, [i, o, s]),
    r
  );
}
function rv({ page: i, matches: o, ...s }) {
  let r = Xl(),
    { manifest: d, routeModules: g } = fh(),
    { basename: R } = ch(),
    { loaderData: M, matches: p } = nv(),
    m = D.useMemo(() => Vd(i, o, p, d, r, "data"), [i, o, p, d, r]),
    x = D.useMemo(() => Vd(i, o, p, d, r, "assets"), [i, o, p, d, r]),
    B = D.useMemo(() => {
      if (i === r.pathname + r.search + r.hash) return [];
      let H = new Set(),
        G = !1;
      if (
        (o.forEach((q) => {
          var P;
          let w = d.routes[q.route.id];
          !w ||
            !w.hasLoader ||
            ((!m.some((ct) => ct.route.id === q.route.id) &&
              q.route.id in M &&
              (P = g[q.route.id]) != null &&
              P.shouldRevalidate) ||
            w.hasClientLoader
              ? (G = !0)
              : H.add(q.route.id));
        }),
        H.size === 0)
      )
        return [];
      let Z = uv(i, R);
      return (
        G &&
          H.size > 0 &&
          Z.searchParams.set(
            "_routes",
            o
              .filter((q) => H.has(q.route.id))
              .map((q) => q.route.id)
              .join(","),
          ),
        [Z.pathname + Z.search]
      );
    }, [R, M, r, d, m, o, i, g]),
    N = D.useMemo(() => Iy(x, d), [x, d]),
    Q = fv(x);
  return D.createElement(
    D.Fragment,
    null,
    B.map((H) =>
      D.createElement("link", {
        key: H,
        rel: "prefetch",
        as: "fetch",
        href: H,
        ...s,
      }),
    ),
    N.map((H) =>
      D.createElement("link", { key: H, rel: "modulepreload", href: H, ...s }),
    ),
    Q.map(({ key: H, link: G }) => D.createElement("link", { key: H, ...G })),
  );
}
function ov(...i) {
  return (o) => {
    i.forEach((s) => {
      typeof s == "function" ? s(o) : s != null && (s.current = o);
    });
  };
}
var rh =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  rh && (window.__reactRouterVersion = "7.6.2");
} catch {}
function sv({ basename: i, children: o, window: s }) {
  let r = D.useRef();
  r.current == null && (r.current = Pm({ window: s, v5Compat: !0 }));
  let d = r.current,
    [g, R] = D.useState({ action: d.action, location: d.location }),
    M = D.useCallback(
      (p) => {
        D.startTransition(() => R(p));
      },
      [R],
    );
  return (
    D.useLayoutEffect(() => d.listen(M), [d, M]),
    D.createElement(Gy, {
      basename: i,
      children: o,
      location: g.location,
      navigationType: g.action,
      navigator: d,
    })
  );
}
var oh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Hu = D.forwardRef(function (
    {
      onClick: o,
      discover: s = "render",
      prefetch: r = "none",
      relative: d,
      reloadDocument: g,
      replace: R,
      state: M,
      target: p,
      to: m,
      preventScrollReset: x,
      viewTransition: B,
      ...N
    },
    Q,
  ) {
    let { basename: H } = D.useContext(Ue),
      G = typeof m == "string" && oh.test(m),
      Z,
      q = !1;
    if (typeof m == "string" && G && ((Z = m), rh))
      try {
        let pt = new URL(window.location.href),
          kt = m.startsWith("//") ? new URL(pt.protocol + m) : new URL(m),
          se = ke(kt.pathname, H);
        kt.origin === pt.origin && se != null
          ? (m = se + kt.search + kt.hash)
          : (q = !0);
      } catch {
        _e(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let w = xy(m, { relative: d }),
      [P, ct, I] = iv(r, N),
      _t = mv(m, {
        replace: R,
        state: M,
        target: p,
        preventScrollReset: x,
        relative: d,
        viewTransition: B,
      });
    function Rt(pt) {
      o && o(pt), pt.defaultPrevented || _t(pt);
    }
    let zt = D.createElement("a", {
      ...N,
      ...I,
      href: Z || w,
      onClick: q || g ? o : Rt,
      ref: ov(Q, ct),
      target: p,
      "data-discover": !G && s === "render" ? "true" : void 0,
    });
    return P && !G
      ? D.createElement(D.Fragment, null, zt, D.createElement(cv, { page: w }))
      : zt;
  });
Hu.displayName = "Link";
var sh = D.forwardRef(function (
  {
    "aria-current": o = "page",
    caseSensitive: s = !1,
    className: r = "",
    end: d = !1,
    style: g,
    to: R,
    viewTransition: M,
    children: p,
    ...m
  },
  x,
) {
  let B = Cu(R, { relative: m.relative }),
    N = Xl(),
    Q = D.useContext(li),
    { navigator: H, basename: G } = D.useContext(Ue),
    Z = Q != null && pv(B) && M === !0,
    q = H.encodeLocation ? H.encodeLocation(B).pathname : B.pathname,
    w = N.pathname,
    P =
      Q && Q.navigation && Q.navigation.location
        ? Q.navigation.location.pathname
        : null;
  s ||
    ((w = w.toLowerCase()),
    (P = P ? P.toLowerCase() : null),
    (q = q.toLowerCase())),
    P && G && (P = ke(P, G) || P);
  const ct = q !== "/" && q.endsWith("/") ? q.length - 1 : q.length;
  let I = w === q || (!d && w.startsWith(q) && w.charAt(ct) === "/"),
    _t =
      P != null &&
      (P === q || (!d && P.startsWith(q) && P.charAt(q.length) === "/")),
    Rt = { isActive: I, isPending: _t, isTransitioning: Z },
    zt = I ? o : void 0,
    pt;
  typeof r == "function"
    ? (pt = r(Rt))
    : (pt = [
        r,
        I ? "active" : null,
        _t ? "pending" : null,
        Z ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let kt = typeof g == "function" ? g(Rt) : g;
  return D.createElement(
    Hu,
    {
      ...m,
      "aria-current": zt,
      className: pt,
      ref: x,
      style: kt,
      to: R,
      viewTransition: M,
    },
    typeof p == "function" ? p(Rt) : p,
  );
});
sh.displayName = "NavLink";
var dv = D.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: o,
      navigate: s,
      reloadDocument: r,
      replace: d,
      state: g,
      method: R = In,
      action: M,
      onSubmit: p,
      relative: m,
      preventScrollReset: x,
      viewTransition: B,
      ...N
    },
    Q,
  ) => {
    let H = gv(),
      G = Sv(M, { relative: m }),
      Z = R.toLowerCase() === "get" ? "get" : "post",
      q = typeof M == "string" && oh.test(M),
      w = (P) => {
        if ((p && p(P), P.defaultPrevented)) return;
        P.preventDefault();
        let ct = P.nativeEvent.submitter,
          I = (ct == null ? void 0 : ct.getAttribute("formmethod")) || R;
        H(ct || P.currentTarget, {
          fetcherKey: o,
          method: I,
          navigate: s,
          replace: d,
          state: g,
          relative: m,
          preventScrollReset: x,
          viewTransition: B,
        });
      };
    return D.createElement("form", {
      ref: Q,
      method: Z,
      action: G,
      onSubmit: r ? p : w,
      ...N,
      "data-discover": !q && i === "render" ? "true" : void 0,
    });
  },
);
dv.displayName = "Form";
function hv(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function dh(i) {
  let o = D.useContext(Da);
  return At(o, hv(i)), o;
}
function mv(
  i,
  {
    target: o,
    replace: s,
    state: r,
    preventScrollReset: d,
    relative: g,
    viewTransition: R,
  } = {},
) {
  let M = uh(),
    p = Xl(),
    m = Cu(i, { relative: g });
  return D.useCallback(
    (x) => {
      if (Ky(x, o)) {
        x.preventDefault();
        let B = s !== void 0 ? s : _u(p) === _u(m);
        M(i, {
          replace: B,
          state: r,
          preventScrollReset: d,
          relative: g,
          viewTransition: R,
        });
      }
    },
    [p, M, m, s, r, o, i, d, g, R],
  );
}
var yv = 0,
  vv = () => `__${String(++yv)}__`;
function gv() {
  let { router: i } = dh("useSubmit"),
    { basename: o } = D.useContext(Ue),
    s = qy();
  return D.useCallback(
    async (r, d = {}) => {
      let { action: g, method: R, encType: M, formData: p, body: m } = $y(r, o);
      if (d.navigate === !1) {
        let x = d.fetcherKey || vv();
        await i.fetch(x, s, d.action || g, {
          preventScrollReset: d.preventScrollReset,
          formData: p,
          body: m,
          formMethod: d.method || R,
          formEncType: d.encType || M,
          flushSync: d.flushSync,
        });
      } else
        await i.navigate(d.action || g, {
          preventScrollReset: d.preventScrollReset,
          formData: p,
          body: m,
          formMethod: d.method || R,
          formEncType: d.encType || M,
          replace: d.replace,
          state: d.state,
          fromRouteId: s,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [i, o, s],
  );
}
function Sv(i, { relative: o } = {}) {
  let { basename: s } = D.useContext(Ue),
    r = D.useContext($e);
  At(r, "useFormAction must be used inside a RouteContext");
  let [d] = r.matches.slice(-1),
    g = { ...Cu(i || ".", { relative: o }) },
    R = Xl();
  if (i == null) {
    g.search = R.search;
    let M = new URLSearchParams(g.search),
      p = M.getAll("index");
    if (p.some((x) => x === "")) {
      M.delete("index"),
        p.filter((B) => B).forEach((B) => M.append("index", B));
      let x = M.toString();
      g.search = x ? `?${x}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      d.route.index &&
      (g.search = g.search ? g.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (g.pathname = g.pathname === "/" ? s : Je([s, g.pathname])),
    _u(g)
  );
}
function pv(i, o = {}) {
  let s = D.useContext(eh);
  At(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = dh("useViewTransitionState"),
    d = Cu(i, { relative: o.relative });
  if (!s.isTransitioning) return !1;
  let g = ke(s.currentLocation.pathname, r) || s.currentLocation.pathname,
    R = ke(s.nextLocation.pathname, r) || s.nextLocation.pathname;
  return ei(d.pathname, R) != null || ei(d.pathname, g) != null;
}
[...av];
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bv = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ev = (i) =>
    i.replace(/^([A-Z])|[\s-_]+(\w)/g, (o, s, r) =>
      r ? r.toUpperCase() : s.toLowerCase(),
    ),
  Kd = (i) => {
    const o = Ev(i);
    return o.charAt(0).toUpperCase() + o.slice(1);
  },
  hh = (...i) =>
    i
      .filter((o, s, r) => !!o && o.trim() !== "" && r.indexOf(o) === s)
      .join(" ")
      .trim(),
  Tv = (i) => {
    for (const o in i)
      if (o.startsWith("aria-") || o === "role" || o === "title") return !0;
  };
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Av = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rv = D.forwardRef(
  (
    {
      color: i = "currentColor",
      size: o = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: r,
      className: d = "",
      children: g,
      iconNode: R,
      ...M
    },
    p,
  ) =>
    D.createElement(
      "svg",
      {
        ref: p,
        ...Av,
        width: o,
        height: o,
        stroke: i,
        strokeWidth: r ? (Number(s) * 24) / Number(o) : s,
        className: hh("lucide", d),
        ...(!g && !Tv(M) && { "aria-hidden": "true" }),
        ...M,
      },
      [
        ...R.map(([m, x]) => D.createElement(m, x)),
        ...(Array.isArray(g) ? g : [g]),
      ],
    ),
);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xv = (i, o) => {
  const s = D.forwardRef(({ className: r, ...d }, g) =>
    D.createElement(Rv, {
      ref: g,
      iconNode: o,
      className: hh(`lucide-${bv(Kd(i))}`, `lucide-${i}`, r),
      ...d,
    }),
  );
  return (s.displayName = Kd(i)), s;
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ov = [
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
        key: "m3kijz",
      },
    ],
    [
      "path",
      {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
        key: "1fmvmk",
      },
    ],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  ],
  zv = xv("rocket", Ov);
function Dv({ children: i }) {
  return K.jsxs("div", {
    className: "flex min-h-screen w-full flex-col bg-black text-gray-200",
    children: [
      K.jsxs("nav", {
        className: `fixed inset-x-0 top-0 z-50 h-14 w-full
                      flex items-center justify-between
                      bg-gray-900 border-b border-gray-800 px-6`,
        children: [
          K.jsxs(Hu, {
            to: "/",
            className: "inline-flex items-center gap-2 text-lg font-semibold",
            children: [
              K.jsx(zv, { className: "size-5 text-yellow-400" }),
              "Unit Logbook",
            ],
          }),
          K.jsx("div", {
            className: "flex gap-6",
            children: [
              { to: "/", label: "Entries", exact: !0 },
              { to: "/new", label: "New entry" },
            ].map(({ to: o, label: s, exact: r }) =>
              K.jsx(
                sh,
                {
                  to: o,
                  end: r,
                  className: ({ isActive: d }) =>
                    `transition-colors hover:text-white ${
                      d ? "text-white font-medium" : "text-gray-400"
                    }`,
                  children: s,
                },
                o,
              ),
            ),
          }),
        ],
      }),
      K.jsx("main", {
        className: "flex-1 w-full pt-14",
        children: K.jsx("div", {
          className: "mx-auto w-full max-w-3xl px-4",
          children: i,
        }),
      }),
      K.jsxs("footer", {
        className: `w-full border-t border-gray-800 p-4
                         text-center text-xs text-gray-500`,
        children: ["© ", new Date().getFullYear(), " · Unit Logbook"],
      }),
    ],
  });
}
const Mv = [
    {
      id: "1",
      title: "Night perimeter check",
      body: "All clear around main gate.",
      isoTime: "2025-05-14T21:30:00Z",
      lat: 60.1503,
      lon: 25.0293,
    },
    {
      id: "2",
      title: "Generator maintenance",
      body: "Changed oil and inspected filters.",
      isoTime: "2025-05-15T07:15:00Z",
      lat: 60.1561,
      lon: 25.0249,
    },
    {
      id: "3",
      title: "Weather update",
      body: "Heavy rainfall expected after 1600 hrs.",
      isoTime: "2025-05-15T09:40:00Z",
      lat: null,
      lon: null,
    },
    {
      id: "4",
      title: "Drone sighting",
      body: "Quad-copter over Vuosaari direction, 200 m AGL.",
      isoTime: "2025-05-15T12:03:00Z",
      lat: 60.1568,
      lon: 25.0472,
    },
    {
      id: "5",
      title: "Supply drop received",
      body: "Ammo and rations accounted for.",
      isoTime: "2025-05-15T14:55:00Z",
      lat: 60.1534,
      lon: 25.0367,
    },
    {
      id: "6",
      title: "Radio outage",
      body: "Primary HF link down for 12 min — rebooted transceiver.",
      isoTime: "2025-05-15T16:22:00Z",
      lat: null,
      lon: null,
    },
    {
      id: "7",
      title: "Medical check",
      body: "One soldier treated for mild hypothermia.",
      isoTime: "2025-05-15T18:05:00Z",
      lat: 60.151,
      lon: 25.0324,
    },
    {
      id: "8",
      title: "Patrol departure",
      body: "Alpha team left for sector Santahamina east shore.",
      isoTime: "2025-05-15T19:40:00Z",
      lat: 60.1496,
      lon: 25.0441,
    },
    {
      id: "9",
      title: "Wildlife interference",
      body: "Fox damaged comms cable near OP-2; temporary fix applied.",
      isoTime: "2025-05-15T20:18:00Z",
      lat: 60.1479,
      lon: 25.0198,
    },
    {
      id: "10",
      title: "Sync to HQ",
      body: "Logbook synced over SATCOM. All entries acknowledged.",
      isoTime: "2025-05-16T06:45:00Z",
      lat: null,
      lon: null,
    },
  ],
  mh = "unitlog.entries",
  _v = Mv.map((i) => ({ ...i, createdAt: i.isoTime ?? i.createdAt }));
function yh() {
  try {
    const i = localStorage.getItem(mh);
    if (i) return JSON.parse(i);
  } catch {}
  return _v;
}
function vh(i) {
  localStorage.setItem(mh, JSON.stringify(i));
}
function Uv() {
  const [i, o] = D.useState([]);
  D.useEffect(() => {
    o(yh()),
      i.length === 0 &&
        fetch("./sample-data/entries.json")
          .then((r) => r.json())
          .then((r) => {
            o(r), vh(r);
          })
          .catch(() => {});
  }, []);
  const s = [...i].sort(
    (r, d) => Date.parse(d.createdAt) - Date.parse(r.createdAt),
  );
  return K.jsxs("section", {
    className: "space-y-6",
    children: [
      K.jsxs("header", {
        className: "flex items-center justify-between",
        children: [
          K.jsx("h2", {
            className: "text-2xl font-bold",
            children: "Log entries",
          }),
          K.jsx(Hu, {
            to: "/new",
            className:
              "rounded bg-primary px-4 py-2 text-primary-foreground hover:opacity-90",
            children: "+ New entry",
          }),
        ],
      }),
      K.jsx("div", {
        className: "bg-red-500 text-white p-4",
        children: "Write below.",
      }),
      s.length === 0
        ? K.jsx("p", {
            className: "text-muted-foreground",
            children: "No entries yet.",
          })
        : K.jsx("ul", {
            className: "space-y-4",
            children: s.map((r) =>
              K.jsxs(
                "li",
                {
                  className: "rounded border p-4",
                  children: [
                    K.jsx("h3", {
                      className: "font-semibold",
                      children: r.title,
                    }),
                    K.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: new Date(r.createdAt).toLocaleString(),
                    }),
                    K.jsx("p", {
                      className: "mt-2 whitespace-pre-line",
                      children: r.body,
                    }),
                  ],
                },
                r.id,
              ),
            ),
          }),
    ],
  });
}
const Qt = [];
for (let i = 0; i < 256; ++i) Qt.push((i + 256).toString(16).slice(1));
function Nv(i, o = 0) {
  return (
    Qt[i[o + 0]] +
    Qt[i[o + 1]] +
    Qt[i[o + 2]] +
    Qt[i[o + 3]] +
    "-" +
    Qt[i[o + 4]] +
    Qt[i[o + 5]] +
    "-" +
    Qt[i[o + 6]] +
    Qt[i[o + 7]] +
    "-" +
    Qt[i[o + 8]] +
    Qt[i[o + 9]] +
    "-" +
    Qt[i[o + 10]] +
    Qt[i[o + 11]] +
    Qt[i[o + 12]] +
    Qt[i[o + 13]] +
    Qt[i[o + 14]] +
    Qt[i[o + 15]]
  ).toLowerCase();
}
let Df;
const Cv = new Uint8Array(16);
function Hv() {
  if (!Df) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    Df = crypto.getRandomValues.bind(crypto);
  }
  return Df(Cv);
}
const Bv =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  Jd = { randomUUID: Bv };
function qv(i, o, s) {
  var d;
  if (Jd.randomUUID && !i) return Jd.randomUUID();
  i = i || {};
  const r = i.random ?? ((d = i.rng) == null ? void 0 : d.call(i)) ?? Hv();
  if (r.length < 16) throw new Error("Random bytes length must be >= 16");
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), Nv(r);
}
function Yv({ children: i, className: o }) {
  return K.jsx("div", { className: o, children: i });
}
function jv() {
  const i = uh(),
    [o, s] = D.useState(""),
    [r, d] = D.useState(""),
    [g, R] = D.useState(""),
    [M, p] = D.useState("");
  function m(x) {
    x.preventDefault();
    const N = [
      {
        id: qv(),
        title: o,
        body: r,
        createdAt: new Date().toISOString(),
        lat: g ? Number(g) : void 0,
        lon: M ? Number(M) : void 0,
      },
      ...yh(),
    ];
    vh(N), i("/");
  }
  return K.jsx(Yv, {
    className: "py-8",
    children: K.jsxs("form", {
      onSubmit: m,
      className: "mx-auto max-w-lg space-y-4 rounded border p-6",
      children: [
        K.jsx("h2", { className: "text-xl font-bold", children: "New entry" }),
        K.jsxs("label", {
          className: "block",
          children: [
            K.jsx("span", {
              className: "mb-1 inline-block",
              children: "Title",
            }),
            K.jsx("input", {
              className: "w-full rounded border p-2",
              value: o,
              onChange: (x) => s(x.target.value),
              required: !0,
            }),
          ],
        }),
        K.jsxs("label", {
          className: "block",
          children: [
            K.jsx("span", { className: "mb-1 inline-block", children: "Body" }),
            K.jsx("textarea", {
              className: "w-full rounded border p-2",
              rows: 6,
              value: r,
              onChange: (x) => d(x.target.value),
              required: !0,
            }),
          ],
        }),
        K.jsxs("div", {
          className: "grid grid-cols-2 gap-4",
          children: [
            K.jsxs("label", {
              className: "block",
              children: [
                K.jsx("span", {
                  className: "mb-1 inline-block",
                  children: "Lat (optional)",
                }),
                K.jsx("input", {
                  type: "number",
                  step: "any",
                  className: "w-full rounded border p-2",
                  value: g,
                  onChange: (x) => R(x.target.value),
                }),
              ],
            }),
            K.jsxs("label", {
              className: "block",
              children: [
                K.jsx("span", {
                  className: "mb-1 inline-block",
                  children: "Lon (optional)",
                }),
                K.jsx("input", {
                  type: "number",
                  step: "any",
                  className: "w-full rounded border p-2",
                  value: M,
                  onChange: (x) => p(x.target.value),
                }),
              ],
            }),
          ],
        }),
        K.jsx("button", {
          type: "submit",
          className: "rounded bg-primary px-4 py-2 text-primary-foreground",
          children: "Save entry",
        }),
      ],
    }),
  });
}
function Lv() {
  return K.jsxs("div", {
    className: "grid place-content-center h-full text-center space-y-4",
    children: [
      K.jsx("h2", { className: "text-3xl font-bold", children: "404" }),
      K.jsx("p", {
        className: "text-muted-foreground",
        children: "Nothing to see here.",
      }),
      K.jsx(Hu, {
        to: "/",
        className: "rounded bg-primary px-4 py-2 text-primary-foreground",
        children: "Back to list",
      }),
    ],
  });
}
function Gv() {
  return K.jsx(sv, {
    children: K.jsx(Dv, {
      children: K.jsxs(Xy, {
        children: [
          K.jsx(Pn, { path: "/", element: K.jsx(Uv, {}) }),
          K.jsx(Pn, { path: "/new", element: K.jsx(jv, {}) }),
          K.jsx(Pn, { path: "*", element: K.jsx(Lv, {}) }),
        ],
      }),
    }),
  });
}
function Xv() {
  return K.jsx(Gv, {});
}
Wm.createRoot(document.getElementById("root")).render(
  K.jsx(Qm.StrictMode, { children: K.jsx(Xv, {}) }),
);
