function Ca(h, d) {
    return function () {
        return h.apply(d, arguments);
    };
}
const { toString: Cf } = Object.prototype,
    { getPrototypeOf: lo } = Object,
    as = ((h) => (d) => {
        const _ = Cf.call(d);
        return h[_] || (h[_] = _.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    We = (h) => ((h = h.toLowerCase()), (d) => as(d) === h),
    us = (h) => (d) => typeof d === h,
    { isArray: _r } = Array,
    ai = us("undefined");
function wf(h) {
    return (
        h !== null &&
        !ai(h) &&
        h.constructor !== null &&
        !ai(h.constructor) &&
        xe(h.constructor.isBuffer) &&
        h.constructor.isBuffer(h)
    );
}
const wa = We("ArrayBuffer");
function Sf(h) {
    let d;
    return (
        typeof ArrayBuffer < "u" && ArrayBuffer.isView
            ? (d = ArrayBuffer.isView(h))
            : (d = h && h.buffer && wa(h.buffer)),
        d
    );
}
const xf = us("string"),
    xe = us("function"),
    Sa = us("number"),
    ls = (h) => h !== null && typeof h == "object",
    kf = (h) => h === !0 || h === !1,
    ns = (h) => {
        if (as(h) !== "object") return !1;
        const d = lo(h);
        return (
            (d === null ||
                d === Object.prototype ||
                Object.getPrototypeOf(d) === null) &&
            !(Symbol.toStringTag in h) &&
            !(Symbol.iterator in h)
        );
    },
    Of = We("Date"),
    Df = We("File"),
    Nf = We("Blob"),
    Lf = We("FileList"),
    Rf = (h) => ls(h) && xe(h.pipe),
    Pf = (h) => {
        let d;
        return (
            h &&
            ((typeof FormData == "function" && h instanceof FormData) ||
                (xe(h.append) &&
                    ((d = as(h)) === "formdata" ||
                        (d === "object" &&
                            xe(h.toString) &&
                            h.toString() === "[object FormData]"))))
        );
    },
    If = We("URLSearchParams"),
    Ff = (h) =>
        h.trim ? h.trim() : h.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ui(h, d, { allOwnKeys: _ = !1 } = {}) {
    if (h === null || typeof h > "u") return;
    let v, w;
    if ((typeof h != "object" && (h = [h]), _r(h)))
        for (v = 0, w = h.length; v < w; v++) d.call(null, h[v], v, h);
    else {
        const S = _ ? Object.getOwnPropertyNames(h) : Object.keys(h),
            O = S.length;
        let I;
        for (v = 0; v < O; v++) (I = S[v]), d.call(null, h[I], I, h);
    }
}
function xa(h, d) {
    d = d.toLowerCase();
    const _ = Object.keys(h);
    let v = _.length,
        w;
    for (; v-- > 0; ) if (((w = _[v]), d === w.toLowerCase())) return w;
    return null;
}
const ka = (() =>
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
            ? self
            : typeof window < "u"
            ? window
            : global)(),
    Oa = (h) => !ai(h) && h !== ka;
function io() {
    const { caseless: h } = (Oa(this) && this) || {},
        d = {},
        _ = (v, w) => {
            const S = (h && xa(d, w)) || w;
            ns(d[S]) && ns(v)
                ? (d[S] = io(d[S], v))
                : ns(v)
                ? (d[S] = io({}, v))
                : _r(v)
                ? (d[S] = v.slice())
                : (d[S] = v);
        };
    for (let v = 0, w = arguments.length; v < w; v++)
        arguments[v] && ui(arguments[v], _);
    return d;
}
const Mf = (h, d, _, { allOwnKeys: v } = {}) => (
        ui(
            d,
            (w, S) => {
                _ && xe(w) ? (h[S] = Ca(w, _)) : (h[S] = w);
            },
            { allOwnKeys: v }
        ),
        h
    ),
    Bf = (h) => (h.charCodeAt(0) === 65279 && (h = h.slice(1)), h),
    $f = (h, d, _, v) => {
        (h.prototype = Object.create(d.prototype, v)),
            (h.prototype.constructor = h),
            Object.defineProperty(h, "super", { value: d.prototype }),
            _ && Object.assign(h.prototype, _);
    },
    Vf = (h, d, _, v) => {
        let w, S, O;
        const I = {};
        if (((d = d || {}), h == null)) return d;
        do {
            for (w = Object.getOwnPropertyNames(h), S = w.length; S-- > 0; )
                (O = w[S]),
                    (!v || v(O, h, d)) && !I[O] && ((d[O] = h[O]), (I[O] = !0));
            h = _ !== !1 && lo(h);
        } while (h && (!_ || _(h, d)) && h !== Object.prototype);
        return d;
    },
    jf = (h, d, _) => {
        (h = String(h)),
            (_ === void 0 || _ > h.length) && (_ = h.length),
            (_ -= d.length);
        const v = h.indexOf(d, _);
        return v !== -1 && v === _;
    },
    Hf = (h) => {
        if (!h) return null;
        if (_r(h)) return h;
        let d = h.length;
        if (!Sa(d)) return null;
        const _ = new Array(d);
        for (; d-- > 0; ) _[d] = h[d];
        return _;
    },
    qf = (
        (h) => (d) =>
            h && d instanceof h
    )(typeof Uint8Array < "u" && lo(Uint8Array)),
    Wf = (h, d) => {
        const v = (h && h[Symbol.iterator]).call(h);
        let w;
        for (; (w = v.next()) && !w.done; ) {
            const S = w.value;
            d.call(h, S[0], S[1]);
        }
    },
    Uf = (h, d) => {
        let _;
        const v = [];
        for (; (_ = h.exec(d)) !== null; ) v.push(_);
        return v;
    },
    zf = We("HTMLFormElement"),
    Kf = (h) =>
        h.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (_, v, w) {
            return v.toUpperCase() + w;
        }),
    ha = (
        ({ hasOwnProperty: h }) =>
        (d, _) =>
            h.call(d, _)
    )(Object.prototype),
    Yf = We("RegExp"),
    Da = (h, d) => {
        const _ = Object.getOwnPropertyDescriptors(h),
            v = {};
        ui(_, (w, S) => {
            let O;
            (O = d(w, S, h)) !== !1 && (v[S] = O || w);
        }),
            Object.defineProperties(h, v);
    },
    Gf = (h) => {
        Da(h, (d, _) => {
            if (xe(h) && ["arguments", "caller", "callee"].indexOf(_) !== -1)
                return !1;
            const v = h[_];
            if (xe(v)) {
                if (((d.enumerable = !1), "writable" in d)) {
                    d.writable = !1;
                    return;
                }
                d.set ||
                    (d.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + _ + "'"
                        );
                    });
            }
        });
    },
    Xf = (h, d) => {
        const _ = {},
            v = (w) => {
                w.forEach((S) => {
                    _[S] = !0;
                });
            };
        return _r(h) ? v(h) : v(String(h).split(d)), _;
    },
    Jf = () => {},
    Qf = (h, d) => ((h = +h), Number.isFinite(h) ? h : d),
    Zs = "abcdefghijklmnopqrstuvwxyz",
    da = "0123456789",
    Na = { DIGIT: da, ALPHA: Zs, ALPHA_DIGIT: Zs + Zs.toUpperCase() + da },
    Zf = (h = 16, d = Na.ALPHA_DIGIT) => {
        let _ = "";
        const { length: v } = d;
        for (; h--; ) _ += d[(Math.random() * v) | 0];
        return _;
    };
function th(h) {
    return !!(
        h &&
        xe(h.append) &&
        h[Symbol.toStringTag] === "FormData" &&
        h[Symbol.iterator]
    );
}
const eh = (h) => {
        const d = new Array(10),
            _ = (v, w) => {
                if (ls(v)) {
                    if (d.indexOf(v) >= 0) return;
                    if (!("toJSON" in v)) {
                        d[w] = v;
                        const S = _r(v) ? [] : {};
                        return (
                            ui(v, (O, I) => {
                                const z = _(O, w + 1);
                                !ai(z) && (S[I] = z);
                            }),
                            (d[w] = void 0),
                            S
                        );
                    }
                }
                return v;
            };
        return _(h, 0);
    },
    nh = We("AsyncFunction"),
    rh = (h) => h && (ls(h) || xe(h)) && xe(h.then) && xe(h.catch),
    F = {
        isArray: _r,
        isArrayBuffer: wa,
        isBuffer: wf,
        isFormData: Pf,
        isArrayBufferView: Sf,
        isString: xf,
        isNumber: Sa,
        isBoolean: kf,
        isObject: ls,
        isPlainObject: ns,
        isUndefined: ai,
        isDate: Of,
        isFile: Df,
        isBlob: Nf,
        isRegExp: Yf,
        isFunction: xe,
        isStream: Rf,
        isURLSearchParams: If,
        isTypedArray: qf,
        isFileList: Lf,
        forEach: ui,
        merge: io,
        extend: Mf,
        trim: Ff,
        stripBOM: Bf,
        inherits: $f,
        toFlatObject: Vf,
        kindOf: as,
        kindOfTest: We,
        endsWith: jf,
        toArray: Hf,
        forEachEntry: Wf,
        matchAll: Uf,
        isHTMLForm: zf,
        hasOwnProperty: ha,
        hasOwnProp: ha,
        reduceDescriptors: Da,
        freezeMethods: Gf,
        toObjectSet: Xf,
        toCamelCase: Kf,
        noop: Jf,
        toFiniteNumber: Qf,
        findKey: xa,
        global: ka,
        isContextDefined: Oa,
        ALPHABET: Na,
        generateString: Zf,
        isSpecCompliantForm: th,
        toJSONObject: eh,
        isAsyncFn: nh,
        isThenable: rh,
    };
function yt(h, d, _, v, w) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = h),
        (this.name = "AxiosError"),
        d && (this.code = d),
        _ && (this.config = _),
        v && (this.request = v),
        w && (this.response = w);
}
F.inherits(yt, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: F.toJSONObject(this.config),
            code: this.code,
            status:
                this.response && this.response.status
                    ? this.response.status
                    : null,
        };
    },
});
const La = yt.prototype,
    Ra = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
].forEach((h) => {
    Ra[h] = { value: h };
});
Object.defineProperties(yt, Ra);
Object.defineProperty(La, "isAxiosError", { value: !0 });
yt.from = (h, d, _, v, w, S) => {
    const O = Object.create(La);
    return (
        F.toFlatObject(
            h,
            O,
            function (z) {
                return z !== Error.prototype;
            },
            (I) => I !== "isAxiosError"
        ),
        yt.call(O, h.message, d, _, v, w),
        (O.cause = h),
        (O.name = h.name),
        S && Object.assign(O, S),
        O
    );
};
const ih = null;
function so(h) {
    return F.isPlainObject(h) || F.isArray(h);
}
function Pa(h) {
    return F.endsWith(h, "[]") ? h.slice(0, -2) : h;
}
function pa(h, d, _) {
    return h
        ? h
              .concat(d)
              .map(function (w, S) {
                  return (w = Pa(w)), !_ && S ? "[" + w + "]" : w;
              })
              .join(_ ? "." : "")
        : d;
}
function sh(h) {
    return F.isArray(h) && !h.some(so);
}
const oh = F.toFlatObject(F, {}, null, function (d) {
    return /^is[A-Z]/.test(d);
});
function cs(h, d, _) {
    if (!F.isObject(h)) throw new TypeError("target must be an object");
    (d = d || new FormData()),
        (_ = F.toFlatObject(
            _,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (q, Et) {
                return !F.isUndefined(Et[q]);
            }
        ));
    const v = _.metaTokens,
        w = _.visitor || M,
        S = _.dots,
        O = _.indexes,
        z = (_.Blob || (typeof Blob < "u" && Blob)) && F.isSpecCompliantForm(d);
    if (!F.isFunction(w)) throw new TypeError("visitor must be a function");
    function et(H) {
        if (H === null) return "";
        if (F.isDate(H)) return H.toISOString();
        if (!z && F.isBlob(H))
            throw new yt("Blob is not supported. Use a Buffer instead.");
        return F.isArrayBuffer(H) || F.isTypedArray(H)
            ? z && typeof Blob == "function"
                ? new Blob([H])
                : Buffer.from(H)
            : H;
    }
    function M(H, q, Et) {
        let K = H;
        if (H && !Et && typeof H == "object") {
            if (F.endsWith(q, "{}"))
                (q = v ? q : q.slice(0, -2)), (H = JSON.stringify(H));
            else if (
                (F.isArray(H) && sh(H)) ||
                ((F.isFileList(H) || F.endsWith(q, "[]")) && (K = F.toArray(H)))
            )
                return (
                    (q = Pa(q)),
                    K.forEach(function (Bt, Re) {
                        !(F.isUndefined(Bt) || Bt === null) &&
                            d.append(
                                O === !0
                                    ? pa([q], Re, S)
                                    : O === null
                                    ? q
                                    : q + "[]",
                                et(Bt)
                            );
                    }),
                    !1
                );
        }
        return so(H) ? !0 : (d.append(pa(Et, q, S), et(H)), !1);
    }
    const W = [],
        xt = Object.assign(oh, {
            defaultVisitor: M,
            convertValue: et,
            isVisitable: so,
        });
    function It(H, q) {
        if (!F.isUndefined(H)) {
            if (W.indexOf(H) !== -1)
                throw Error("Circular reference detected in " + q.join("."));
            W.push(H),
                F.forEach(H, function (K, le) {
                    (!(F.isUndefined(K) || K === null) &&
                        w.call(
                            d,
                            K,
                            F.isString(le) ? le.trim() : le,
                            q,
                            xt
                        )) === !0 && It(K, q ? q.concat(le) : [le]);
                }),
                W.pop();
        }
    }
    if (!F.isObject(h)) throw new TypeError("data must be an object");
    return It(h), d;
}
function ga(h) {
    const d = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
    };
    return encodeURIComponent(h).replace(/[!'()~]|%20|%00/g, function (v) {
        return d[v];
    });
}
function co(h, d) {
    (this._pairs = []), h && cs(h, this, d);
}
const Ia = co.prototype;
Ia.append = function (d, _) {
    this._pairs.push([d, _]);
};
Ia.toString = function (d) {
    const _ = d
        ? function (v) {
              return d.call(this, v, ga);
          }
        : ga;
    return this._pairs
        .map(function (w) {
            return _(w[0]) + "=" + _(w[1]);
        }, "")
        .join("&");
};
function ah(h) {
    return encodeURIComponent(h)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
}
function Fa(h, d, _) {
    if (!d) return h;
    const v = (_ && _.encode) || ah,
        w = _ && _.serialize;
    let S;
    if (
        (w
            ? (S = w(d, _))
            : (S = F.isURLSearchParams(d)
                  ? d.toString()
                  : new co(d, _).toString(v)),
        S)
    ) {
        const O = h.indexOf("#");
        O !== -1 && (h = h.slice(0, O)),
            (h += (h.indexOf("?") === -1 ? "?" : "&") + S);
    }
    return h;
}
class uh {
    constructor() {
        this.handlers = [];
    }
    use(d, _, v) {
        return (
            this.handlers.push({
                fulfilled: d,
                rejected: _,
                synchronous: v ? v.synchronous : !1,
                runWhen: v ? v.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(d) {
        this.handlers[d] && (this.handlers[d] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(d) {
        F.forEach(this.handlers, function (v) {
            v !== null && d(v);
        });
    }
}
const ma = uh,
    Ma = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    lh = typeof URLSearchParams < "u" ? URLSearchParams : co,
    ch = typeof FormData < "u" ? FormData : null,
    fh = typeof Blob < "u" ? Blob : null,
    hh = {
        isBrowser: !0,
        classes: { URLSearchParams: lh, FormData: ch, Blob: fh },
        protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    Ba = typeof window < "u" && typeof document < "u",
    dh = ((h) => Ba && ["ReactNative", "NativeScript", "NS"].indexOf(h) < 0)(
        typeof navigator < "u" && navigator.product
    ),
    ph = (() =>
        typeof WorkerGlobalScope < "u" &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == "function")(),
    gh = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: Ba,
                hasStandardBrowserEnv: dh,
                hasStandardBrowserWebWorkerEnv: ph,
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    qe = { ...gh, ...hh };
function mh(h, d) {
    return cs(
        h,
        new qe.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (_, v, w, S) {
                    return qe.isNode && F.isBuffer(_)
                        ? (this.append(v, _.toString("base64")), !1)
                        : S.defaultVisitor.apply(this, arguments);
                },
            },
            d
        )
    );
}
function _h(h) {
    return F.matchAll(/\w+|\[(\w*)]/g, h).map((d) =>
        d[0] === "[]" ? "" : d[1] || d[0]
    );
}
function vh(h) {
    const d = {},
        _ = Object.keys(h);
    let v;
    const w = _.length;
    let S;
    for (v = 0; v < w; v++) (S = _[v]), (d[S] = h[S]);
    return d;
}
function $a(h) {
    function d(_, v, w, S) {
        let O = _[S++];
        const I = Number.isFinite(+O),
            z = S >= _.length;
        return (
            (O = !O && F.isArray(w) ? w.length : O),
            z
                ? (F.hasOwnProp(w, O) ? (w[O] = [w[O], v]) : (w[O] = v), !I)
                : ((!w[O] || !F.isObject(w[O])) && (w[O] = []),
                  d(_, v, w[O], S) && F.isArray(w[O]) && (w[O] = vh(w[O])),
                  !I)
        );
    }
    if (F.isFormData(h) && F.isFunction(h.entries)) {
        const _ = {};
        return (
            F.forEachEntry(h, (v, w) => {
                d(_h(v), w, _, 0);
            }),
            _
        );
    }
    return null;
}
function Eh(h, d, _) {
    if (F.isString(h))
        try {
            return (d || JSON.parse)(h), F.trim(h);
        } catch (v) {
            if (v.name !== "SyntaxError") throw v;
        }
    return (_ || JSON.stringify)(h);
}
const fo = {
    transitional: Ma,
    adapter: ["xhr", "http"],
    transformRequest: [
        function (d, _) {
            const v = _.getContentType() || "",
                w = v.indexOf("application/json") > -1,
                S = F.isObject(d);
            if (
                (S && F.isHTMLForm(d) && (d = new FormData(d)), F.isFormData(d))
            )
                return w && w ? JSON.stringify($a(d)) : d;
            if (
                F.isArrayBuffer(d) ||
                F.isBuffer(d) ||
                F.isStream(d) ||
                F.isFile(d) ||
                F.isBlob(d)
            )
                return d;
            if (F.isArrayBufferView(d)) return d.buffer;
            if (F.isURLSearchParams(d))
                return (
                    _.setContentType(
                        "application/x-www-form-urlencoded;charset=utf-8",
                        !1
                    ),
                    d.toString()
                );
            let I;
            if (S) {
                if (v.indexOf("application/x-www-form-urlencoded") > -1)
                    return mh(d, this.formSerializer).toString();
                if (
                    (I = F.isFileList(d)) ||
                    v.indexOf("multipart/form-data") > -1
                ) {
                    const z = this.env && this.env.FormData;
                    return cs(
                        I ? { "files[]": d } : d,
                        z && new z(),
                        this.formSerializer
                    );
                }
            }
            return S || w
                ? (_.setContentType("application/json", !1), Eh(d))
                : d;
        },
    ],
    transformResponse: [
        function (d) {
            const _ = this.transitional || fo.transitional,
                v = _ && _.forcedJSONParsing,
                w = this.responseType === "json";
            if (d && F.isString(d) && ((v && !this.responseType) || w)) {
                const O = !(_ && _.silentJSONParsing) && w;
                try {
                    return JSON.parse(d);
                } catch (I) {
                    if (O)
                        throw I.name === "SyntaxError"
                            ? yt.from(
                                  I,
                                  yt.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response
                              )
                            : I;
                }
            }
            return d;
        },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: qe.classes.FormData, Blob: qe.classes.Blob },
    validateStatus: function (d) {
        return d >= 200 && d < 300;
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
        },
    },
};
F.forEach(["delete", "get", "head", "post", "put", "patch"], (h) => {
    fo.headers[h] = {};
});
const ho = fo,
    yh = F.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
    ]),
    bh = (h) => {
        const d = {};
        let _, v, w;
        return (
            h &&
                h
                    .split(
                        `
`
                    )
                    .forEach(function (O) {
                        (w = O.indexOf(":")),
                            (_ = O.substring(0, w).trim().toLowerCase()),
                            (v = O.substring(w + 1).trim()),
                            !(!_ || (d[_] && yh[_])) &&
                                (_ === "set-cookie"
                                    ? d[_]
                                        ? d[_].push(v)
                                        : (d[_] = [v])
                                    : (d[_] = d[_] ? d[_] + ", " + v : v));
                    }),
            d
        );
    },
    _a = Symbol("internals");
function oi(h) {
    return h && String(h).trim().toLowerCase();
}
function rs(h) {
    return h === !1 || h == null ? h : F.isArray(h) ? h.map(rs) : String(h);
}
function Ah(h) {
    const d = Object.create(null),
        _ = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let v;
    for (; (v = _.exec(h)); ) d[v[1]] = v[2];
    return d;
}
const Th = (h) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(h.trim());
function to(h, d, _, v, w) {
    if (F.isFunction(v)) return v.call(this, d, _);
    if ((w && (d = _), !!F.isString(d))) {
        if (F.isString(v)) return d.indexOf(v) !== -1;
        if (F.isRegExp(v)) return v.test(d);
    }
}
function Ch(h) {
    return h
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (d, _, v) => _.toUpperCase() + v);
}
function wh(h, d) {
    const _ = F.toCamelCase(" " + d);
    ["get", "set", "has"].forEach((v) => {
        Object.defineProperty(h, v + _, {
            value: function (w, S, O) {
                return this[v].call(this, d, w, S, O);
            },
            configurable: !0,
        });
    });
}
class fs {
    constructor(d) {
        d && this.set(d);
    }
    set(d, _, v) {
        const w = this;
        function S(I, z, et) {
            const M = oi(z);
            if (!M) throw new Error("header name must be a non-empty string");
            const W = F.findKey(w, M);
            (!W ||
                w[W] === void 0 ||
                et === !0 ||
                (et === void 0 && w[W] !== !1)) &&
                (w[W || z] = rs(I));
        }
        const O = (I, z) => F.forEach(I, (et, M) => S(et, M, z));
        return (
            F.isPlainObject(d) || d instanceof this.constructor
                ? O(d, _)
                : F.isString(d) && (d = d.trim()) && !Th(d)
                ? O(bh(d), _)
                : d != null && S(_, d, v),
            this
        );
    }
    get(d, _) {
        if (((d = oi(d)), d)) {
            const v = F.findKey(this, d);
            if (v) {
                const w = this[v];
                if (!_) return w;
                if (_ === !0) return Ah(w);
                if (F.isFunction(_)) return _.call(this, w, v);
                if (F.isRegExp(_)) return _.exec(w);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(d, _) {
        if (((d = oi(d)), d)) {
            const v = F.findKey(this, d);
            return !!(
                v &&
                this[v] !== void 0 &&
                (!_ || to(this, this[v], v, _))
            );
        }
        return !1;
    }
    delete(d, _) {
        const v = this;
        let w = !1;
        function S(O) {
            if (((O = oi(O)), O)) {
                const I = F.findKey(v, O);
                I && (!_ || to(v, v[I], I, _)) && (delete v[I], (w = !0));
            }
        }
        return F.isArray(d) ? d.forEach(S) : S(d), w;
    }
    clear(d) {
        const _ = Object.keys(this);
        let v = _.length,
            w = !1;
        for (; v--; ) {
            const S = _[v];
            (!d || to(this, this[S], S, d, !0)) && (delete this[S], (w = !0));
        }
        return w;
    }
    normalize(d) {
        const _ = this,
            v = {};
        return (
            F.forEach(this, (w, S) => {
                const O = F.findKey(v, S);
                if (O) {
                    (_[O] = rs(w)), delete _[S];
                    return;
                }
                const I = d ? Ch(S) : String(S).trim();
                I !== S && delete _[S], (_[I] = rs(w)), (v[I] = !0);
            }),
            this
        );
    }
    concat(...d) {
        return this.constructor.concat(this, ...d);
    }
    toJSON(d) {
        const _ = Object.create(null);
        return (
            F.forEach(this, (v, w) => {
                v != null &&
                    v !== !1 &&
                    (_[w] = d && F.isArray(v) ? v.join(", ") : v);
            }),
            _
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([d, _]) => d + ": " + _)
            .join(`
`);
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(d) {
        return d instanceof this ? d : new this(d);
    }
    static concat(d, ..._) {
        const v = new this(d);
        return _.forEach((w) => v.set(w)), v;
    }
    static accessor(d) {
        const v = (this[_a] = this[_a] = { accessors: {} }).accessors,
            w = this.prototype;
        function S(O) {
            const I = oi(O);
            v[I] || (wh(w, O), (v[I] = !0));
        }
        return F.isArray(d) ? d.forEach(S) : S(d), this;
    }
}
fs.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
]);
F.reduceDescriptors(fs.prototype, ({ value: h }, d) => {
    let _ = d[0].toUpperCase() + d.slice(1);
    return {
        get: () => h,
        set(v) {
            this[_] = v;
        },
    };
});
F.freezeMethods(fs);
const sn = fs;
function eo(h, d) {
    const _ = this || ho,
        v = d || _,
        w = sn.from(v.headers);
    let S = v.data;
    return (
        F.forEach(h, function (I) {
            S = I.call(_, S, w.normalize(), d ? d.status : void 0);
        }),
        w.normalize(),
        S
    );
}
function Va(h) {
    return !!(h && h.__CANCEL__);
}
function li(h, d, _) {
    yt.call(this, h ?? "canceled", yt.ERR_CANCELED, d, _),
        (this.name = "CanceledError");
}
F.inherits(li, yt, { __CANCEL__: !0 });
function Sh(h, d, _) {
    const v = _.config.validateStatus;
    !_.status || !v || v(_.status)
        ? h(_)
        : d(
              new yt(
                  "Request failed with status code " + _.status,
                  [yt.ERR_BAD_REQUEST, yt.ERR_BAD_RESPONSE][
                      Math.floor(_.status / 100) - 4
                  ],
                  _.config,
                  _.request,
                  _
              )
          );
}
const xh = qe.hasStandardBrowserEnv
    ? {
          write(h, d, _, v, w, S) {
              const O = [h + "=" + encodeURIComponent(d)];
              F.isNumber(_) && O.push("expires=" + new Date(_).toGMTString()),
                  F.isString(v) && O.push("path=" + v),
                  F.isString(w) && O.push("domain=" + w),
                  S === !0 && O.push("secure"),
                  (document.cookie = O.join("; "));
          },
          read(h) {
              const d = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + h + ")=([^;]*)")
              );
              return d ? decodeURIComponent(d[3]) : null;
          },
          remove(h) {
              this.write(h, "", Date.now() - 864e5);
          },
      }
    : {
          write() {},
          read() {
              return null;
          },
          remove() {},
      };
function kh(h) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(h);
}
function Oh(h, d) {
    return d ? h.replace(/\/+$/, "") + "/" + d.replace(/^\/+/, "") : h;
}
function ja(h, d) {
    return h && !kh(d) ? Oh(h, d) : d;
}
const Dh = qe.hasStandardBrowserEnv
    ? (function () {
          const d = /(msie|trident)/i.test(navigator.userAgent),
              _ = document.createElement("a");
          let v;
          function w(S) {
              let O = S;
              return (
                  d && (_.setAttribute("href", O), (O = _.href)),
                  _.setAttribute("href", O),
                  {
                      href: _.href,
                      protocol: _.protocol ? _.protocol.replace(/:$/, "") : "",
                      host: _.host,
                      search: _.search ? _.search.replace(/^\?/, "") : "",
                      hash: _.hash ? _.hash.replace(/^#/, "") : "",
                      hostname: _.hostname,
                      port: _.port,
                      pathname:
                          _.pathname.charAt(0) === "/"
                              ? _.pathname
                              : "/" + _.pathname,
                  }
              );
          }
          return (
              (v = w(window.location.href)),
              function (O) {
                  const I = F.isString(O) ? w(O) : O;
                  return I.protocol === v.protocol && I.host === v.host;
              }
          );
      })()
    : (function () {
          return function () {
              return !0;
          };
      })();
function Nh(h) {
    const d = /^([-+\w]{1,25})(:?\/\/|:)/.exec(h);
    return (d && d[1]) || "";
}
function Lh(h, d) {
    h = h || 10;
    const _ = new Array(h),
        v = new Array(h);
    let w = 0,
        S = 0,
        O;
    return (
        (d = d !== void 0 ? d : 1e3),
        function (z) {
            const et = Date.now(),
                M = v[S];
            O || (O = et), (_[w] = z), (v[w] = et);
            let W = S,
                xt = 0;
            for (; W !== w; ) (xt += _[W++]), (W = W % h);
            if (((w = (w + 1) % h), w === S && (S = (S + 1) % h), et - O < d))
                return;
            const It = M && et - M;
            return It ? Math.round((xt * 1e3) / It) : void 0;
        }
    );
}
function va(h, d) {
    let _ = 0;
    const v = Lh(50, 250);
    return (w) => {
        const S = w.loaded,
            O = w.lengthComputable ? w.total : void 0,
            I = S - _,
            z = v(I),
            et = S <= O;
        _ = S;
        const M = {
            loaded: S,
            total: O,
            progress: O ? S / O : void 0,
            bytes: I,
            rate: z || void 0,
            estimated: z && O && et ? (O - S) / z : void 0,
            event: w,
        };
        (M[d ? "download" : "upload"] = !0), h(M);
    };
}
const Rh = typeof XMLHttpRequest < "u",
    Ph =
        Rh &&
        function (h) {
            return new Promise(function (_, v) {
                let w = h.data;
                const S = sn.from(h.headers).normalize();
                let { responseType: O, withXSRFToken: I } = h,
                    z;
                function et() {
                    h.cancelToken && h.cancelToken.unsubscribe(z),
                        h.signal && h.signal.removeEventListener("abort", z);
                }
                let M;
                if (F.isFormData(w)) {
                    if (
                        qe.hasStandardBrowserEnv ||
                        qe.hasStandardBrowserWebWorkerEnv
                    )
                        S.setContentType(!1);
                    else if ((M = S.getContentType()) !== !1) {
                        const [q, ...Et] = M
                            ? M.split(";")
                                  .map((K) => K.trim())
                                  .filter(Boolean)
                            : [];
                        S.setContentType(
                            [q || "multipart/form-data", ...Et].join("; ")
                        );
                    }
                }
                let W = new XMLHttpRequest();
                if (h.auth) {
                    const q = h.auth.username || "",
                        Et = h.auth.password
                            ? unescape(encodeURIComponent(h.auth.password))
                            : "";
                    S.set("Authorization", "Basic " + btoa(q + ":" + Et));
                }
                const xt = ja(h.baseURL, h.url);
                W.open(
                    h.method.toUpperCase(),
                    Fa(xt, h.params, h.paramsSerializer),
                    !0
                ),
                    (W.timeout = h.timeout);
                function It() {
                    if (!W) return;
                    const q = sn.from(
                            "getAllResponseHeaders" in W &&
                                W.getAllResponseHeaders()
                        ),
                        K = {
                            data:
                                !O || O === "text" || O === "json"
                                    ? W.responseText
                                    : W.response,
                            status: W.status,
                            statusText: W.statusText,
                            headers: q,
                            config: h,
                            request: W,
                        };
                    Sh(
                        function (Bt) {
                            _(Bt), et();
                        },
                        function (Bt) {
                            v(Bt), et();
                        },
                        K
                    ),
                        (W = null);
                }
                if (
                    ("onloadend" in W
                        ? (W.onloadend = It)
                        : (W.onreadystatechange = function () {
                              !W ||
                                  W.readyState !== 4 ||
                                  (W.status === 0 &&
                                      !(
                                          W.responseURL &&
                                          W.responseURL.indexOf("file:") === 0
                                      )) ||
                                  setTimeout(It);
                          }),
                    (W.onabort = function () {
                        W &&
                            (v(
                                new yt("Request aborted", yt.ECONNABORTED, h, W)
                            ),
                            (W = null));
                    }),
                    (W.onerror = function () {
                        v(new yt("Network Error", yt.ERR_NETWORK, h, W)),
                            (W = null);
                    }),
                    (W.ontimeout = function () {
                        let Et = h.timeout
                            ? "timeout of " + h.timeout + "ms exceeded"
                            : "timeout exceeded";
                        const K = h.transitional || Ma;
                        h.timeoutErrorMessage && (Et = h.timeoutErrorMessage),
                            v(
                                new yt(
                                    Et,
                                    K.clarifyTimeoutError
                                        ? yt.ETIMEDOUT
                                        : yt.ECONNABORTED,
                                    h,
                                    W
                                )
                            ),
                            (W = null);
                    }),
                    qe.hasStandardBrowserEnv &&
                        (I && F.isFunction(I) && (I = I(h)),
                        I || (I !== !1 && Dh(xt))))
                ) {
                    const q =
                        h.xsrfHeaderName &&
                        h.xsrfCookieName &&
                        xh.read(h.xsrfCookieName);
                    q && S.set(h.xsrfHeaderName, q);
                }
                w === void 0 && S.setContentType(null),
                    "setRequestHeader" in W &&
                        F.forEach(S.toJSON(), function (Et, K) {
                            W.setRequestHeader(K, Et);
                        }),
                    F.isUndefined(h.withCredentials) ||
                        (W.withCredentials = !!h.withCredentials),
                    O && O !== "json" && (W.responseType = h.responseType),
                    typeof h.onDownloadProgress == "function" &&
                        W.addEventListener(
                            "progress",
                            va(h.onDownloadProgress, !0)
                        ),
                    typeof h.onUploadProgress == "function" &&
                        W.upload &&
                        W.upload.addEventListener(
                            "progress",
                            va(h.onUploadProgress)
                        ),
                    (h.cancelToken || h.signal) &&
                        ((z = (q) => {
                            W &&
                                (v(!q || q.type ? new li(null, h, W) : q),
                                W.abort(),
                                (W = null));
                        }),
                        h.cancelToken && h.cancelToken.subscribe(z),
                        h.signal &&
                            (h.signal.aborted
                                ? z()
                                : h.signal.addEventListener("abort", z)));
                const H = Nh(xt);
                if (H && qe.protocols.indexOf(H) === -1) {
                    v(
                        new yt(
                            "Unsupported protocol " + H + ":",
                            yt.ERR_BAD_REQUEST,
                            h
                        )
                    );
                    return;
                }
                W.send(w || null);
            });
        },
    oo = { http: ih, xhr: Ph };
F.forEach(oo, (h, d) => {
    if (h) {
        try {
            Object.defineProperty(h, "name", { value: d });
        } catch {}
        Object.defineProperty(h, "adapterName", { value: d });
    }
});
const Ea = (h) => `- ${h}`,
    Ih = (h) => F.isFunction(h) || h === null || h === !1,
    Ha = {
        getAdapter: (h) => {
            h = F.isArray(h) ? h : [h];
            const { length: d } = h;
            let _, v;
            const w = {};
            for (let S = 0; S < d; S++) {
                _ = h[S];
                let O;
                if (
                    ((v = _),
                    !Ih(_) &&
                        ((v = oo[(O = String(_)).toLowerCase()]), v === void 0))
                )
                    throw new yt(`Unknown adapter '${O}'`);
                if (v) break;
                w[O || "#" + S] = v;
            }
            if (!v) {
                const S = Object.entries(w).map(
                    ([I, z]) =>
                        `adapter ${I} ` +
                        (z === !1
                            ? "is not supported by the environment"
                            : "is not available in the build")
                );
                let O = d
                    ? S.length > 1
                        ? `since :
` +
                          S.map(Ea).join(`
`)
                        : " " + Ea(S[0])
                    : "as no adapter specified";
                throw new yt(
                    "There is no suitable adapter to dispatch the request " + O,
                    "ERR_NOT_SUPPORT"
                );
            }
            return v;
        },
        adapters: oo,
    };
function no(h) {
    if (
        (h.cancelToken && h.cancelToken.throwIfRequested(),
        h.signal && h.signal.aborted)
    )
        throw new li(null, h);
}
function ya(h) {
    return (
        no(h),
        (h.headers = sn.from(h.headers)),
        (h.data = eo.call(h, h.transformRequest)),
        ["post", "put", "patch"].indexOf(h.method) !== -1 &&
            h.headers.setContentType("application/x-www-form-urlencoded", !1),
        Ha.getAdapter(h.adapter || ho.adapter)(h).then(
            function (v) {
                return (
                    no(h),
                    (v.data = eo.call(h, h.transformResponse, v)),
                    (v.headers = sn.from(v.headers)),
                    v
                );
            },
            function (v) {
                return (
                    Va(v) ||
                        (no(h),
                        v &&
                            v.response &&
                            ((v.response.data = eo.call(
                                h,
                                h.transformResponse,
                                v.response
                            )),
                            (v.response.headers = sn.from(
                                v.response.headers
                            )))),
                    Promise.reject(v)
                );
            }
        )
    );
}
const ba = (h) => (h instanceof sn ? h.toJSON() : h);
function mr(h, d) {
    d = d || {};
    const _ = {};
    function v(et, M, W) {
        return F.isPlainObject(et) && F.isPlainObject(M)
            ? F.merge.call({ caseless: W }, et, M)
            : F.isPlainObject(M)
            ? F.merge({}, M)
            : F.isArray(M)
            ? M.slice()
            : M;
    }
    function w(et, M, W) {
        if (F.isUndefined(M)) {
            if (!F.isUndefined(et)) return v(void 0, et, W);
        } else return v(et, M, W);
    }
    function S(et, M) {
        if (!F.isUndefined(M)) return v(void 0, M);
    }
    function O(et, M) {
        if (F.isUndefined(M)) {
            if (!F.isUndefined(et)) return v(void 0, et);
        } else return v(void 0, M);
    }
    function I(et, M, W) {
        if (W in d) return v(et, M);
        if (W in h) return v(void 0, et);
    }
    const z = {
        url: S,
        method: S,
        data: S,
        baseURL: O,
        transformRequest: O,
        transformResponse: O,
        paramsSerializer: O,
        timeout: O,
        timeoutMessage: O,
        withCredentials: O,
        withXSRFToken: O,
        adapter: O,
        responseType: O,
        xsrfCookieName: O,
        xsrfHeaderName: O,
        onUploadProgress: O,
        onDownloadProgress: O,
        decompress: O,
        maxContentLength: O,
        maxBodyLength: O,
        beforeRedirect: O,
        transport: O,
        httpAgent: O,
        httpsAgent: O,
        cancelToken: O,
        socketPath: O,
        responseEncoding: O,
        validateStatus: I,
        headers: (et, M) => w(ba(et), ba(M), !0),
    };
    return (
        F.forEach(Object.keys(Object.assign({}, h, d)), function (M) {
            const W = z[M] || w,
                xt = W(h[M], d[M], M);
            (F.isUndefined(xt) && W !== I) || (_[M] = xt);
        }),
        _
    );
}
const qa = "1.6.2",
    po = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (h, d) => {
        po[h] = function (v) {
            return typeof v === h || "a" + (d < 1 ? "n " : " ") + h;
        };
    }
);
const Aa = {};
po.transitional = function (d, _, v) {
    function w(S, O) {
        return (
            "[Axios v" +
            qa +
            "] Transitional option '" +
            S +
            "'" +
            O +
            (v ? ". " + v : "")
        );
    }
    return (S, O, I) => {
        if (d === !1)
            throw new yt(
                w(O, " has been removed" + (_ ? " in " + _ : "")),
                yt.ERR_DEPRECATED
            );
        return (
            _ &&
                !Aa[O] &&
                ((Aa[O] = !0),
                console.warn(
                    w(
                        O,
                        " has been deprecated since v" +
                            _ +
                            " and will be removed in the near future"
                    )
                )),
            d ? d(S, O, I) : !0
        );
    };
};
function Fh(h, d, _) {
    if (typeof h != "object")
        throw new yt("options must be an object", yt.ERR_BAD_OPTION_VALUE);
    const v = Object.keys(h);
    let w = v.length;
    for (; w-- > 0; ) {
        const S = v[w],
            O = d[S];
        if (O) {
            const I = h[S],
                z = I === void 0 || O(I, S, h);
            if (z !== !0)
                throw new yt(
                    "option " + S + " must be " + z,
                    yt.ERR_BAD_OPTION_VALUE
                );
            continue;
        }
        if (_ !== !0) throw new yt("Unknown option " + S, yt.ERR_BAD_OPTION);
    }
}
const ao = { assertOptions: Fh, validators: po },
    bn = ao.validators;
class ss {
    constructor(d) {
        (this.defaults = d),
            (this.interceptors = { request: new ma(), response: new ma() });
    }
    request(d, _) {
        typeof d == "string" ? ((_ = _ || {}), (_.url = d)) : (_ = d || {}),
            (_ = mr(this.defaults, _));
        const { transitional: v, paramsSerializer: w, headers: S } = _;
        v !== void 0 &&
            ao.assertOptions(
                v,
                {
                    silentJSONParsing: bn.transitional(bn.boolean),
                    forcedJSONParsing: bn.transitional(bn.boolean),
                    clarifyTimeoutError: bn.transitional(bn.boolean),
                },
                !1
            ),
            w != null &&
                (F.isFunction(w)
                    ? (_.paramsSerializer = { serialize: w })
                    : ao.assertOptions(
                          w,
                          { encode: bn.function, serialize: bn.function },
                          !0
                      )),
            (_.method = (
                _.method ||
                this.defaults.method ||
                "get"
            ).toLowerCase());
        let O = S && F.merge(S.common, S[_.method]);
        S &&
            F.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (H) => {
                    delete S[H];
                }
            ),
            (_.headers = sn.concat(O, S));
        const I = [];
        let z = !0;
        this.interceptors.request.forEach(function (q) {
            (typeof q.runWhen == "function" && q.runWhen(_) === !1) ||
                ((z = z && q.synchronous), I.unshift(q.fulfilled, q.rejected));
        });
        const et = [];
        this.interceptors.response.forEach(function (q) {
            et.push(q.fulfilled, q.rejected);
        });
        let M,
            W = 0,
            xt;
        if (!z) {
            const H = [ya.bind(this), void 0];
            for (
                H.unshift.apply(H, I),
                    H.push.apply(H, et),
                    xt = H.length,
                    M = Promise.resolve(_);
                W < xt;

            )
                M = M.then(H[W++], H[W++]);
            return M;
        }
        xt = I.length;
        let It = _;
        for (W = 0; W < xt; ) {
            const H = I[W++],
                q = I[W++];
            try {
                It = H(It);
            } catch (Et) {
                q.call(this, Et);
                break;
            }
        }
        try {
            M = ya.call(this, It);
        } catch (H) {
            return Promise.reject(H);
        }
        for (W = 0, xt = et.length; W < xt; ) M = M.then(et[W++], et[W++]);
        return M;
    }
    getUri(d) {
        d = mr(this.defaults, d);
        const _ = ja(d.baseURL, d.url);
        return Fa(_, d.params, d.paramsSerializer);
    }
}
F.forEach(["delete", "get", "head", "options"], function (d) {
    ss.prototype[d] = function (_, v) {
        return this.request(
            mr(v || {}, { method: d, url: _, data: (v || {}).data })
        );
    };
});
F.forEach(["post", "put", "patch"], function (d) {
    function _(v) {
        return function (S, O, I) {
            return this.request(
                mr(I || {}, {
                    method: d,
                    headers: v ? { "Content-Type": "multipart/form-data" } : {},
                    url: S,
                    data: O,
                })
            );
        };
    }
    (ss.prototype[d] = _()), (ss.prototype[d + "Form"] = _(!0));
});
const is = ss;
class go {
    constructor(d) {
        if (typeof d != "function")
            throw new TypeError("executor must be a function.");
        let _;
        this.promise = new Promise(function (S) {
            _ = S;
        });
        const v = this;
        this.promise.then((w) => {
            if (!v._listeners) return;
            let S = v._listeners.length;
            for (; S-- > 0; ) v._listeners[S](w);
            v._listeners = null;
        }),
            (this.promise.then = (w) => {
                let S;
                const O = new Promise((I) => {
                    v.subscribe(I), (S = I);
                }).then(w);
                return (
                    (O.cancel = function () {
                        v.unsubscribe(S);
                    }),
                    O
                );
            }),
            d(function (S, O, I) {
                v.reason || ((v.reason = new li(S, O, I)), _(v.reason));
            });
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(d) {
        if (this.reason) {
            d(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(d) : (this._listeners = [d]);
    }
    unsubscribe(d) {
        if (!this._listeners) return;
        const _ = this._listeners.indexOf(d);
        _ !== -1 && this._listeners.splice(_, 1);
    }
    static source() {
        let d;
        return {
            token: new go(function (w) {
                d = w;
            }),
            cancel: d,
        };
    }
}
const Mh = go;
function Bh(h) {
    return function (_) {
        return h.apply(null, _);
    };
}
function $h(h) {
    return F.isObject(h) && h.isAxiosError === !0;
}
const uo = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
};
Object.entries(uo).forEach(([h, d]) => {
    uo[d] = h;
});
const Vh = uo;
function Wa(h) {
    const d = new is(h),
        _ = Ca(is.prototype.request, d);
    return (
        F.extend(_, is.prototype, d, { allOwnKeys: !0 }),
        F.extend(_, d, null, { allOwnKeys: !0 }),
        (_.create = function (w) {
            return Wa(mr(h, w));
        }),
        _
    );
}
const Mt = Wa(ho);
Mt.Axios = is;
Mt.CanceledError = li;
Mt.CancelToken = Mh;
Mt.isCancel = Va;
Mt.VERSION = qa;
Mt.toFormData = cs;
Mt.AxiosError = yt;
Mt.Cancel = Mt.CanceledError;
Mt.all = function (d) {
    return Promise.all(d);
};
Mt.spread = Bh;
Mt.isAxiosError = $h;
Mt.mergeConfig = mr;
Mt.AxiosHeaders = sn;
Mt.formToJSON = (h) => $a(F.isHTMLForm(h) ? new FormData(h) : h);
Mt.getAdapter = Ha.getAdapter;
Mt.HttpStatusCode = Vh;
Mt.default = Mt;
const jh = Mt;
window.axios = jh;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var Hh =
    typeof globalThis < "u"
        ? globalThis
        : typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof self < "u"
        ? self
        : {};
function qh(h) {
    return h &&
        h.__esModule &&
        Object.prototype.hasOwnProperty.call(h, "default")
        ? h.default
        : h;
}
var Ua = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */ (function (h) {
    (function (d, _) {
        h.exports = d.document
            ? _(d, !0)
            : function (v) {
                  if (!v.document)
                      throw new Error(
                          "jQuery requires a window with a document"
                      );
                  return _(v);
              };
    })(typeof window < "u" ? window : Hh, function (d, _) {
        var v = [],
            w = Object.getPrototypeOf,
            S = v.slice,
            O = v.flat
                ? function (e) {
                      return v.flat.call(e);
                  }
                : function (e) {
                      return v.concat.apply([], e);
                  },
            I = v.push,
            z = v.indexOf,
            et = {},
            M = et.toString,
            W = et.hasOwnProperty,
            xt = W.toString,
            It = xt.call(Object),
            H = {},
            q = function (r) {
                return (
                    typeof r == "function" &&
                    typeof r.nodeType != "number" &&
                    typeof r.item != "function"
                );
            },
            Et = function (r) {
                return r != null && r === r.window;
            },
            K = d.document,
            le = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function Bt(e, r, i) {
            i = i || K;
            var a,
                l,
                c = i.createElement("script");
            if (((c.text = e), r))
                for (a in le)
                    (l = r[a] || (r.getAttribute && r.getAttribute(a))),
                        l && c.setAttribute(a, l);
            i.head.appendChild(c).parentNode.removeChild(c);
        }
        function Re(e) {
            return e == null
                ? e + ""
                : typeof e == "object" || typeof e == "function"
                ? et[M.call(e)] || "object"
                : typeof e;
        }
        var ci = "3.7.1",
            fi = /HTML$/i,
            u = function (e, r) {
                return new u.fn.init(e, r);
            };
        (u.fn = u.prototype =
            {
                jquery: ci,
                constructor: u,
                length: 0,
                toArray: function () {
                    return S.call(this);
                },
                get: function (e) {
                    return e == null
                        ? S.call(this)
                        : e < 0
                        ? this[e + this.length]
                        : this[e];
                },
                pushStack: function (e) {
                    var r = u.merge(this.constructor(), e);
                    return (r.prevObject = this), r;
                },
                each: function (e) {
                    return u.each(this, e);
                },
                map: function (e) {
                    return this.pushStack(
                        u.map(this, function (r, i) {
                            return e.call(r, i, r);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(S.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                even: function () {
                    return this.pushStack(
                        u.grep(this, function (e, r) {
                            return (r + 1) % 2;
                        })
                    );
                },
                odd: function () {
                    return this.pushStack(
                        u.grep(this, function (e, r) {
                            return r % 2;
                        })
                    );
                },
                eq: function (e) {
                    var r = this.length,
                        i = +e + (e < 0 ? r : 0);
                    return this.pushStack(i >= 0 && i < r ? [this[i]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: I,
                sort: v.sort,
                splice: v.splice,
            }),
            (u.extend = u.fn.extend =
                function () {
                    var e,
                        r,
                        i,
                        a,
                        l,
                        c,
                        p = arguments[0] || {},
                        b = 1,
                        y = arguments.length,
                        T = !1;
                    for (
                        typeof p == "boolean" &&
                            ((T = p), (p = arguments[b] || {}), b++),
                            typeof p != "object" && !q(p) && (p = {}),
                            b === y && ((p = this), b--);
                        b < y;
                        b++
                    )
                        if ((e = arguments[b]) != null)
                            for (r in e)
                                (a = e[r]),
                                    !(r === "__proto__" || p === a) &&
                                        (T &&
                                        a &&
                                        (u.isPlainObject(a) ||
                                            (l = Array.isArray(a)))
                                            ? ((i = p[r]),
                                              l && !Array.isArray(i)
                                                  ? (c = [])
                                                  : !l && !u.isPlainObject(i)
                                                  ? (c = {})
                                                  : (c = i),
                                              (l = !1),
                                              (p[r] = u.extend(T, c, a)))
                                            : a !== void 0 && (p[r] = a));
                    return p;
                }),
            u.extend({
                expando: "jQuery" + (ci + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e);
                },
                noop: function () {},
                isPlainObject: function (e) {
                    var r, i;
                    return !e || M.call(e) !== "[object Object]"
                        ? !1
                        : ((r = w(e)),
                          r
                              ? ((i =
                                    W.call(r, "constructor") && r.constructor),
                                typeof i == "function" && xt.call(i) === It)
                              : !0);
                },
                isEmptyObject: function (e) {
                    var r;
                    for (r in e) return !1;
                    return !0;
                },
                globalEval: function (e, r, i) {
                    Bt(e, { nonce: r && r.nonce }, i);
                },
                each: function (e, r) {
                    var i,
                        a = 0;
                    if (vr(e))
                        for (
                            i = e.length;
                            a < i && r.call(e[a], a, e[a]) !== !1;
                            a++
                        );
                    else for (a in e) if (r.call(e[a], a, e[a]) === !1) break;
                    return e;
                },
                text: function (e) {
                    var r,
                        i = "",
                        a = 0,
                        l = e.nodeType;
                    if (!l) for (; (r = e[a++]); ) i += u.text(r);
                    return l === 1 || l === 11
                        ? e.textContent
                        : l === 9
                        ? e.documentElement.textContent
                        : l === 3 || l === 4
                        ? e.nodeValue
                        : i;
                },
                makeArray: function (e, r) {
                    var i = r || [];
                    return (
                        e != null &&
                            (vr(Object(e))
                                ? u.merge(i, typeof e == "string" ? [e] : e)
                                : I.call(i, e)),
                        i
                    );
                },
                inArray: function (e, r, i) {
                    return r == null ? -1 : z.call(r, e, i);
                },
                isXMLDoc: function (e) {
                    var r = e && e.namespaceURI,
                        i = e && (e.ownerDocument || e).documentElement;
                    return !fi.test(r || (i && i.nodeName) || "HTML");
                },
                merge: function (e, r) {
                    for (var i = +r.length, a = 0, l = e.length; a < i; a++)
                        e[l++] = r[a];
                    return (e.length = l), e;
                },
                grep: function (e, r, i) {
                    for (var a, l = [], c = 0, p = e.length, b = !i; c < p; c++)
                        (a = !r(e[c], c)), a !== b && l.push(e[c]);
                    return l;
                },
                map: function (e, r, i) {
                    var a,
                        l,
                        c = 0,
                        p = [];
                    if (vr(e))
                        for (a = e.length; c < a; c++)
                            (l = r(e[c], c, i)), l != null && p.push(l);
                    else
                        for (c in e)
                            (l = r(e[c], c, i)), l != null && p.push(l);
                    return O(p);
                },
                guid: 1,
                support: H,
            }),
            typeof Symbol == "function" &&
                (u.fn[Symbol.iterator] = v[Symbol.iterator]),
            u.each(
                "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                    " "
                ),
                function (e, r) {
                    et["[object " + r + "]"] = r.toLowerCase();
                }
            );
        function vr(e) {
            var r = !!e && "length" in e && e.length,
                i = Re(e);
            return q(e) || Et(e)
                ? !1
                : i === "array" ||
                      r === 0 ||
                      (typeof r == "number" && r > 0 && r - 1 in e);
        }
        function bt(e, r) {
            return e.nodeName && e.nodeName.toLowerCase() === r.toLowerCase();
        }
        var hs = v.pop,
            ds = v.sort,
            ps = v.splice,
            ft = "[\\x20\\t\\r\\n\\f]",
            Pe = new RegExp(
                "^" + ft + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ft + "+$",
                "g"
            );
        u.contains = function (e, r) {
            var i = r && r.parentNode;
            return (
                e === i ||
                !!(
                    i &&
                    i.nodeType === 1 &&
                    (e.contains
                        ? e.contains(i)
                        : e.compareDocumentPosition &&
                          e.compareDocumentPosition(i) & 16)
                )
            );
        };
        var on = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function Er(e, r) {
            return r
                ? e === "\0"
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                : "\\" + e;
        }
        u.escapeSelector = function (e) {
            return (e + "").replace(on, Er);
        };
        var Qt = K,
            jn = I;
        (function () {
            var e,
                r,
                i,
                a,
                l,
                c = jn,
                p,
                b,
                y,
                T,
                L,
                R = u.expando,
                D = 0,
                $ = 0,
                Q = He(),
                ot = He(),
                ct = He(),
                Lt = He(),
                Rt = function (m, A) {
                    return m === A && (l = !0), 0;
                },
                be =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                Ae =
                    "(?:\\\\[\\da-fA-F]{1,6}" +
                    ft +
                    "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                ht =
                    "\\[" +
                    ft +
                    "*(" +
                    Ae +
                    ")(?:" +
                    ft +
                    "*([*^$|!~]?=)" +
                    ft +
                    `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
                    Ae +
                    "))|)" +
                    ft +
                    "*\\]",
                je =
                    ":(" +
                    Ae +
                    `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
                    ht +
                    ")*)|.*)\\)|)",
                _t = new RegExp(ft + "+", "g"),
                kt = new RegExp("^" + ft + "*," + ft + "*"),
                gn = new RegExp("^" + ft + "*([>+~]|" + ft + ")" + ft + "*"),
                rr = new RegExp(ft + "|>"),
                Te = new RegExp(je),
                kn = new RegExp("^" + Ae + "$"),
                de = {
                    ID: new RegExp("^#(" + Ae + ")"),
                    CLASS: new RegExp("^\\.(" + Ae + ")"),
                    TAG: new RegExp("^(" + Ae + "|[*])"),
                    ATTR: new RegExp("^" + ht),
                    PSEUDO: new RegExp("^" + je),
                    CHILD: new RegExp(
                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                            ft +
                            "*(even|odd|(([+-]|)(\\d*)n|)" +
                            ft +
                            "*(?:([+-]|)" +
                            ft +
                            "*(\\d+)|))" +
                            ft +
                            "*\\)|)",
                        "i"
                    ),
                    bool: new RegExp("^(?:" + be + ")$", "i"),
                    needsContext: new RegExp(
                        "^" +
                            ft +
                            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                            ft +
                            "*((?:-\\d)?\\d*)" +
                            ft +
                            "*\\)|)(?=[^-]|$)",
                        "i"
                    ),
                },
                ke = /^(?:input|select|textarea|button)$/i,
                Oe = /^h\d$/i,
                ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                zr = /[+~]/,
                Ce = new RegExp(
                    "\\\\[\\da-fA-F]{1,6}" + ft + "?|\\\\([^\\r\\n\\f])",
                    "g"
                ),
                B = function (m, A) {
                    var x = "0x" + m.slice(1) - 65536;
                    return (
                        A ||
                        (x < 0
                            ? String.fromCharCode(x + 65536)
                            : String.fromCharCode(
                                  (x >> 10) | 55296,
                                  (x & 1023) | 56320
                              ))
                    );
                },
                Kr = function () {
                    De();
                },
                Bi = sr(
                    function (m) {
                        return m.disabled === !0 && bt(m, "fieldset");
                    },
                    { dir: "parentNode", next: "legend" }
                );
            function Yr() {
                try {
                    return p.activeElement;
                } catch {}
            }
            try {
                c.apply((v = S.call(Qt.childNodes)), Qt.childNodes),
                    v[Qt.childNodes.length].nodeType;
            } catch {
                c = {
                    apply: function (A, x) {
                        jn.apply(A, S.call(x));
                    },
                    call: function (A) {
                        jn.apply(A, S.call(arguments, 1));
                    },
                };
            }
            function dt(m, A, x, N) {
                var P,
                    U,
                    Y,
                    X,
                    G,
                    pt,
                    it,
                    ut = A && A.ownerDocument,
                    gt = A ? A.nodeType : 9;
                if (
                    ((x = x || []),
                    typeof m != "string" ||
                        !m ||
                        (gt !== 1 && gt !== 9 && gt !== 11))
                )
                    return x;
                if (!N && (De(A), (A = A || p), y)) {
                    if (gt !== 11 && (G = ee.exec(m)))
                        if ((P = G[1])) {
                            if (gt === 9)
                                if ((Y = A.getElementById(P))) {
                                    if (Y.id === P) return c.call(x, Y), x;
                                } else return x;
                            else if (
                                ut &&
                                (Y = ut.getElementById(P)) &&
                                dt.contains(A, Y) &&
                                Y.id === P
                            )
                                return c.call(x, Y), x;
                        } else {
                            if (G[2])
                                return c.apply(x, A.getElementsByTagName(m)), x;
                            if ((P = G[3]) && A.getElementsByClassName)
                                return (
                                    c.apply(x, A.getElementsByClassName(P)), x
                                );
                        }
                    if (!Lt[m + " "] && (!T || !T.test(m))) {
                        if (
                            ((it = m),
                            (ut = A),
                            gt === 1 && (rr.test(m) || gn.test(m)))
                        ) {
                            for (
                                ut = (zr.test(m) && $i(A.parentNode)) || A,
                                    (ut != A || !H.scope) &&
                                        ((X = A.getAttribute("id"))
                                            ? (X = u.escapeSelector(X))
                                            : A.setAttribute("id", (X = R))),
                                    pt = Dn(m),
                                    U = pt.length;
                                U--;

                            )
                                pt[U] =
                                    (X ? "#" + X : ":scope") + " " + ir(pt[U]);
                            it = pt.join(",");
                        }
                        try {
                            return c.apply(x, ut.querySelectorAll(it)), x;
                        } catch {
                            Lt(m, !0);
                        } finally {
                            X === R && A.removeAttribute("id");
                        }
                    }
                }
                return ji(m.replace(Pe, "$1"), A, x, N);
            }
            function He() {
                var m = [];
                function A(x, N) {
                    return (
                        m.push(x + " ") > r.cacheLength && delete A[m.shift()],
                        (A[x + " "] = N)
                    );
                }
                return A;
            }
            function pe(m) {
                return (m[R] = !0), m;
            }
            function Wt(m) {
                var A = p.createElement("fieldset");
                try {
                    return !!m(A);
                } catch {
                    return !1;
                } finally {
                    A.parentNode && A.parentNode.removeChild(A), (A = null);
                }
            }
            function Gr(m) {
                return function (A) {
                    return bt(A, "input") && A.type === m;
                };
            }
            function Z(m) {
                return function (A) {
                    return (bt(A, "input") || bt(A, "button")) && A.type === m;
                };
            }
            function On(m) {
                return function (A) {
                    return "form" in A
                        ? A.parentNode && A.disabled === !1
                            ? "label" in A
                                ? "label" in A.parentNode
                                    ? A.parentNode.disabled === m
                                    : A.disabled === m
                                : A.isDisabled === m ||
                                  (A.isDisabled !== !m && Bi(A) === m)
                            : A.disabled === m
                        : "label" in A
                        ? A.disabled === m
                        : !1;
                };
            }
            function tn(m) {
                return pe(function (A) {
                    return (
                        (A = +A),
                        pe(function (x, N) {
                            for (
                                var P, U = m([], x.length, A), Y = U.length;
                                Y--;

                            )
                                x[(P = U[Y])] && (x[P] = !(N[P] = x[P]));
                        })
                    );
                });
            }
            function $i(m) {
                return m && typeof m.getElementsByTagName < "u" && m;
            }
            function De(m) {
                var A,
                    x = m ? m.ownerDocument || m : Qt;
                return (
                    x == p ||
                        x.nodeType !== 9 ||
                        !x.documentElement ||
                        ((p = x),
                        (b = p.documentElement),
                        (y = !u.isXMLDoc(p)),
                        (L =
                            b.matches ||
                            b.webkitMatchesSelector ||
                            b.msMatchesSelector),
                        b.msMatchesSelector &&
                            Qt != p &&
                            (A = p.defaultView) &&
                            A.top !== A &&
                            A.addEventListener("unload", Kr),
                        (H.getById = Wt(function (N) {
                            return (
                                (b.appendChild(N).id = u.expando),
                                !p.getElementsByName ||
                                    !p.getElementsByName(u.expando).length
                            );
                        })),
                        (H.disconnectedMatch = Wt(function (N) {
                            return L.call(N, "*");
                        })),
                        (H.scope = Wt(function () {
                            return p.querySelectorAll(":scope");
                        })),
                        (H.cssHas = Wt(function () {
                            try {
                                return p.querySelector(":has(*,:jqfake)"), !1;
                            } catch {
                                return !0;
                            }
                        })),
                        H.getById
                            ? ((r.filter.ID = function (N) {
                                  var P = N.replace(Ce, B);
                                  return function (U) {
                                      return U.getAttribute("id") === P;
                                  };
                              }),
                              (r.find.ID = function (N, P) {
                                  if (typeof P.getElementById < "u" && y) {
                                      var U = P.getElementById(N);
                                      return U ? [U] : [];
                                  }
                              }))
                            : ((r.filter.ID = function (N) {
                                  var P = N.replace(Ce, B);
                                  return function (U) {
                                      var Y =
                                          typeof U.getAttributeNode < "u" &&
                                          U.getAttributeNode("id");
                                      return Y && Y.value === P;
                                  };
                              }),
                              (r.find.ID = function (N, P) {
                                  if (typeof P.getElementById < "u" && y) {
                                      var U,
                                          Y,
                                          X,
                                          G = P.getElementById(N);
                                      if (G) {
                                          if (
                                              ((U = G.getAttributeNode("id")),
                                              U && U.value === N)
                                          )
                                              return [G];
                                          for (
                                              X = P.getElementsByName(N), Y = 0;
                                              (G = X[Y++]);

                                          )
                                              if (
                                                  ((U =
                                                      G.getAttributeNode("id")),
                                                  U && U.value === N)
                                              )
                                                  return [G];
                                      }
                                      return [];
                                  }
                              })),
                        (r.find.TAG = function (N, P) {
                            return typeof P.getElementsByTagName < "u"
                                ? P.getElementsByTagName(N)
                                : P.querySelectorAll(N);
                        }),
                        (r.find.CLASS = function (N, P) {
                            if (typeof P.getElementsByClassName < "u" && y)
                                return P.getElementsByClassName(N);
                        }),
                        (T = []),
                        Wt(function (N) {
                            var P;
                            (b.appendChild(N).innerHTML =
                                "<a id='" +
                                R +
                                "' href='' disabled='disabled'></a><select id='" +
                                R +
                                "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                                N.querySelectorAll("[selected]").length ||
                                    T.push(
                                        "\\[" + ft + "*(?:value|" + be + ")"
                                    ),
                                N.querySelectorAll("[id~=" + R + "-]").length ||
                                    T.push("~="),
                                N.querySelectorAll("a#" + R + "+*").length ||
                                    T.push(".#.+[+~]"),
                                N.querySelectorAll(":checked").length ||
                                    T.push(":checked"),
                                (P = p.createElement("input")),
                                P.setAttribute("type", "hidden"),
                                N.appendChild(P).setAttribute("name", "D"),
                                (b.appendChild(N).disabled = !0),
                                N.querySelectorAll(":disabled").length !== 2 &&
                                    T.push(":enabled", ":disabled"),
                                (P = p.createElement("input")),
                                P.setAttribute("name", ""),
                                N.appendChild(P),
                                N.querySelectorAll("[name='']").length ||
                                    T.push(
                                        "\\[" +
                                            ft +
                                            "*name" +
                                            ft +
                                            "*=" +
                                            ft +
                                            `*(?:''|"")`
                                    );
                        }),
                        H.cssHas || T.push(":has"),
                        (T = T.length && new RegExp(T.join("|"))),
                        (Rt = function (N, P) {
                            if (N === P) return (l = !0), 0;
                            var U =
                                !N.compareDocumentPosition -
                                !P.compareDocumentPosition;
                            return (
                                U ||
                                ((U =
                                    (N.ownerDocument || N) ==
                                    (P.ownerDocument || P)
                                        ? N.compareDocumentPosition(P)
                                        : 1),
                                U & 1 ||
                                (!H.sortDetached &&
                                    P.compareDocumentPosition(N) === U)
                                    ? N === p ||
                                      (N.ownerDocument == Qt &&
                                          dt.contains(Qt, N))
                                        ? -1
                                        : P === p ||
                                          (P.ownerDocument == Qt &&
                                              dt.contains(Qt, P))
                                        ? 1
                                        : a
                                        ? z.call(a, N) - z.call(a, P)
                                        : 0
                                    : U & 4
                                    ? -1
                                    : 1)
                            );
                        })),
                    p
                );
            }
            (dt.matches = function (m, A) {
                return dt(m, null, null, A);
            }),
                (dt.matchesSelector = function (m, A) {
                    if ((De(m), y && !Lt[A + " "] && (!T || !T.test(A))))
                        try {
                            var x = L.call(m, A);
                            if (
                                x ||
                                H.disconnectedMatch ||
                                (m.document && m.document.nodeType !== 11)
                            )
                                return x;
                        } catch {
                            Lt(A, !0);
                        }
                    return dt(A, p, null, [m]).length > 0;
                }),
                (dt.contains = function (m, A) {
                    return (
                        (m.ownerDocument || m) != p && De(m), u.contains(m, A)
                    );
                }),
                (dt.attr = function (m, A) {
                    (m.ownerDocument || m) != p && De(m);
                    var x = r.attrHandle[A.toLowerCase()],
                        N =
                            x && W.call(r.attrHandle, A.toLowerCase())
                                ? x(m, A, !y)
                                : void 0;
                    return N !== void 0 ? N : m.getAttribute(A);
                }),
                (dt.error = function (m) {
                    throw new Error(
                        "Syntax error, unrecognized expression: " + m
                    );
                }),
                (u.uniqueSort = function (m) {
                    var A,
                        x = [],
                        N = 0,
                        P = 0;
                    if (
                        ((l = !H.sortStable),
                        (a = !H.sortStable && S.call(m, 0)),
                        ds.call(m, Rt),
                        l)
                    ) {
                        for (; (A = m[P++]); ) A === m[P] && (N = x.push(P));
                        for (; N--; ) ps.call(m, x[N], 1);
                    }
                    return (a = null), m;
                }),
                (u.fn.uniqueSort = function () {
                    return this.pushStack(u.uniqueSort(S.apply(this)));
                }),
                (r = u.expr =
                    {
                        cacheLength: 50,
                        createPseudo: pe,
                        match: de,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": { dir: "parentNode", first: !0 },
                            " ": { dir: "parentNode" },
                            "+": { dir: "previousSibling", first: !0 },
                            "~": { dir: "previousSibling" },
                        },
                        preFilter: {
                            ATTR: function (m) {
                                return (
                                    (m[1] = m[1].replace(Ce, B)),
                                    (m[3] = (
                                        m[3] ||
                                        m[4] ||
                                        m[5] ||
                                        ""
                                    ).replace(Ce, B)),
                                    m[2] === "~=" && (m[3] = " " + m[3] + " "),
                                    m.slice(0, 4)
                                );
                            },
                            CHILD: function (m) {
                                return (
                                    (m[1] = m[1].toLowerCase()),
                                    m[1].slice(0, 3) === "nth"
                                        ? (m[3] || dt.error(m[0]),
                                          (m[4] = +(m[4]
                                              ? m[5] + (m[6] || 1)
                                              : 2 *
                                                (m[3] === "even" ||
                                                    m[3] === "odd"))),
                                          (m[5] = +(
                                              m[7] + m[8] || m[3] === "odd"
                                          )))
                                        : m[3] && dt.error(m[0]),
                                    m
                                );
                            },
                            PSEUDO: function (m) {
                                var A,
                                    x = !m[6] && m[2];
                                return de.CHILD.test(m[0])
                                    ? null
                                    : (m[3]
                                          ? (m[2] = m[4] || m[5] || "")
                                          : x &&
                                            Te.test(x) &&
                                            (A = Dn(x, !0)) &&
                                            (A =
                                                x.indexOf(")", x.length - A) -
                                                x.length) &&
                                            ((m[0] = m[0].slice(0, A)),
                                            (m[2] = x.slice(0, A))),
                                      m.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (m) {
                                var A = m.replace(Ce, B).toLowerCase();
                                return m === "*"
                                    ? function () {
                                          return !0;
                                      }
                                    : function (x) {
                                          return bt(x, A);
                                      };
                            },
                            CLASS: function (m) {
                                var A = Q[m + " "];
                                return (
                                    A ||
                                    ((A = new RegExp(
                                        "(^|" + ft + ")" + m + "(" + ft + "|$)"
                                    )) &&
                                        Q(m, function (x) {
                                            return A.test(
                                                (typeof x.className ==
                                                    "string" &&
                                                    x.className) ||
                                                    (typeof x.getAttribute <
                                                        "u" &&
                                                        x.getAttribute(
                                                            "class"
                                                        )) ||
                                                    ""
                                            );
                                        }))
                                );
                            },
                            ATTR: function (m, A, x) {
                                return function (N) {
                                    var P = dt.attr(N, m);
                                    return P == null
                                        ? A === "!="
                                        : A
                                        ? ((P += ""),
                                          A === "="
                                              ? P === x
                                              : A === "!="
                                              ? P !== x
                                              : A === "^="
                                              ? x && P.indexOf(x) === 0
                                              : A === "*="
                                              ? x && P.indexOf(x) > -1
                                              : A === "$="
                                              ? x && P.slice(-x.length) === x
                                              : A === "~="
                                              ? (
                                                    " " +
                                                    P.replace(_t, " ") +
                                                    " "
                                                ).indexOf(x) > -1
                                              : A === "|="
                                              ? P === x ||
                                                P.slice(0, x.length + 1) ===
                                                    x + "-"
                                              : !1)
                                        : !0;
                                };
                            },
                            CHILD: function (m, A, x, N, P) {
                                var U = m.slice(0, 3) !== "nth",
                                    Y = m.slice(-4) !== "last",
                                    X = A === "of-type";
                                return N === 1 && P === 0
                                    ? function (G) {
                                          return !!G.parentNode;
                                      }
                                    : function (G, pt, it) {
                                          var ut,
                                              gt,
                                              nt,
                                              At,
                                              ne,
                                              Xt =
                                                  U !== Y
                                                      ? "nextSibling"
                                                      : "previousSibling",
                                              Pt = G.parentNode,
                                              ge =
                                                  X && G.nodeName.toLowerCase(),
                                              mn = !it && !X,
                                              Jt = !1;
                                          if (Pt) {
                                              if (U) {
                                                  for (; Xt; ) {
                                                      for (
                                                          nt = G;
                                                          (nt = nt[Xt]);

                                                      )
                                                          if (
                                                              X
                                                                  ? bt(nt, ge)
                                                                  : nt.nodeType ===
                                                                    1
                                                          )
                                                              return !1;
                                                      ne = Xt =
                                                          m === "only" &&
                                                          !ne &&
                                                          "nextSibling";
                                                  }
                                                  return !0;
                                              }
                                              if (
                                                  ((ne = [
                                                      Y
                                                          ? Pt.firstChild
                                                          : Pt.lastChild,
                                                  ]),
                                                  Y && mn)
                                              ) {
                                                  for (
                                                      gt =
                                                          Pt[R] || (Pt[R] = {}),
                                                          ut = gt[m] || [],
                                                          At =
                                                              ut[0] === D &&
                                                              ut[1],
                                                          Jt = At && ut[2],
                                                          nt =
                                                              At &&
                                                              Pt.childNodes[At];
                                                      (nt =
                                                          (++At &&
                                                              nt &&
                                                              nt[Xt]) ||
                                                          (Jt = At = 0) ||
                                                          ne.pop());

                                                  )
                                                      if (
                                                          nt.nodeType === 1 &&
                                                          ++Jt &&
                                                          nt === G
                                                      ) {
                                                          gt[m] = [D, At, Jt];
                                                          break;
                                                      }
                                              } else if (
                                                  (mn &&
                                                      ((gt =
                                                          G[R] || (G[R] = {})),
                                                      (ut = gt[m] || []),
                                                      (At =
                                                          ut[0] === D && ut[1]),
                                                      (Jt = At)),
                                                  Jt === !1)
                                              )
                                                  for (
                                                      ;
                                                      (nt =
                                                          (++At &&
                                                              nt &&
                                                              nt[Xt]) ||
                                                          (Jt = At = 0) ||
                                                          ne.pop()) &&
                                                      !(
                                                          (X
                                                              ? bt(nt, ge)
                                                              : nt.nodeType ===
                                                                1) &&
                                                          ++Jt &&
                                                          (mn &&
                                                              ((gt =
                                                                  nt[R] ||
                                                                  (nt[R] = {})),
                                                              (gt[m] = [
                                                                  D,
                                                                  Jt,
                                                              ])),
                                                          nt === G)
                                                      );

                                                  );
                                              return (
                                                  (Jt -= P),
                                                  Jt === N ||
                                                      (Jt % N === 0 &&
                                                          Jt / N >= 0)
                                              );
                                          }
                                      };
                            },
                            PSEUDO: function (m, A) {
                                var x,
                                    N =
                                        r.pseudos[m] ||
                                        r.setFilters[m.toLowerCase()] ||
                                        dt.error("unsupported pseudo: " + m);
                                return N[R]
                                    ? N(A)
                                    : N.length > 1
                                    ? ((x = [m, m, "", A]),
                                      r.setFilters.hasOwnProperty(
                                          m.toLowerCase()
                                      )
                                          ? pe(function (P, U) {
                                                for (
                                                    var Y,
                                                        X = N(P, A),
                                                        G = X.length;
                                                    G--;

                                                )
                                                    (Y = z.call(P, X[G])),
                                                        (P[Y] = !(U[Y] = X[G]));
                                            })
                                          : function (P) {
                                                return N(P, 0, x);
                                            })
                                    : N;
                            },
                        },
                        pseudos: {
                            not: pe(function (m) {
                                var A = [],
                                    x = [],
                                    N = or(m.replace(Pe, "$1"));
                                return N[R]
                                    ? pe(function (P, U, Y, X) {
                                          for (
                                              var G,
                                                  pt = N(P, null, X, []),
                                                  it = P.length;
                                              it--;

                                          )
                                              (G = pt[it]) &&
                                                  (P[it] = !(U[it] = G));
                                      })
                                    : function (P, U, Y) {
                                          return (
                                              (A[0] = P),
                                              N(A, null, Y, x),
                                              (A[0] = null),
                                              !x.pop()
                                          );
                                      };
                            }),
                            has: pe(function (m) {
                                return function (A) {
                                    return dt(m, A).length > 0;
                                };
                            }),
                            contains: pe(function (m) {
                                return (
                                    (m = m.replace(Ce, B)),
                                    function (A) {
                                        return (
                                            (
                                                A.textContent || u.text(A)
                                            ).indexOf(m) > -1
                                        );
                                    }
                                );
                            }),
                            lang: pe(function (m) {
                                return (
                                    kn.test(m || "") ||
                                        dt.error("unsupported lang: " + m),
                                    (m = m.replace(Ce, B).toLowerCase()),
                                    function (A) {
                                        var x;
                                        do
                                            if (
                                                (x = y
                                                    ? A.lang
                                                    : A.getAttribute(
                                                          "xml:lang"
                                                      ) ||
                                                      A.getAttribute("lang"))
                                            )
                                                return (
                                                    (x = x.toLowerCase()),
                                                    x === m ||
                                                        x.indexOf(m + "-") === 0
                                                );
                                        while (
                                            (A = A.parentNode) &&
                                            A.nodeType === 1
                                        );
                                        return !1;
                                    }
                                );
                            }),
                            target: function (m) {
                                var A = d.location && d.location.hash;
                                return A && A.slice(1) === m.id;
                            },
                            root: function (m) {
                                return m === b;
                            },
                            focus: function (m) {
                                return (
                                    m === Yr() &&
                                    p.hasFocus() &&
                                    !!(m.type || m.href || ~m.tabIndex)
                                );
                            },
                            enabled: On(!1),
                            disabled: On(!0),
                            checked: function (m) {
                                return (
                                    (bt(m, "input") && !!m.checked) ||
                                    (bt(m, "option") && !!m.selected)
                                );
                            },
                            selected: function (m) {
                                return (
                                    m.parentNode && m.parentNode.selectedIndex,
                                    m.selected === !0
                                );
                            },
                            empty: function (m) {
                                for (m = m.firstChild; m; m = m.nextSibling)
                                    if (m.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function (m) {
                                return !r.pseudos.empty(m);
                            },
                            header: function (m) {
                                return Oe.test(m.nodeName);
                            },
                            input: function (m) {
                                return ke.test(m.nodeName);
                            },
                            button: function (m) {
                                return (
                                    (bt(m, "input") && m.type === "button") ||
                                    bt(m, "button")
                                );
                            },
                            text: function (m) {
                                var A;
                                return (
                                    bt(m, "input") &&
                                    m.type === "text" &&
                                    ((A = m.getAttribute("type")) == null ||
                                        A.toLowerCase() === "text")
                                );
                            },
                            first: tn(function () {
                                return [0];
                            }),
                            last: tn(function (m, A) {
                                return [A - 1];
                            }),
                            eq: tn(function (m, A, x) {
                                return [x < 0 ? x + A : x];
                            }),
                            even: tn(function (m, A) {
                                for (var x = 0; x < A; x += 2) m.push(x);
                                return m;
                            }),
                            odd: tn(function (m, A) {
                                for (var x = 1; x < A; x += 2) m.push(x);
                                return m;
                            }),
                            lt: tn(function (m, A, x) {
                                var N;
                                for (
                                    x < 0
                                        ? (N = x + A)
                                        : x > A
                                        ? (N = A)
                                        : (N = x);
                                    --N >= 0;

                                )
                                    m.push(N);
                                return m;
                            }),
                            gt: tn(function (m, A, x) {
                                for (var N = x < 0 ? x + A : x; ++N < A; )
                                    m.push(N);
                                return m;
                            }),
                        },
                    }),
                (r.pseudos.nth = r.pseudos.eq);
            for (e in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0,
            })
                r.pseudos[e] = Gr(e);
            for (e in { submit: !0, reset: !0 }) r.pseudos[e] = Z(e);
            function Vi() {}
            (Vi.prototype = r.filters = r.pseudos), (r.setFilters = new Vi());
            function Dn(m, A) {
                var x,
                    N,
                    P,
                    U,
                    Y,
                    X,
                    G,
                    pt = ot[m + " "];
                if (pt) return A ? 0 : pt.slice(0);
                for (Y = m, X = [], G = r.preFilter; Y; ) {
                    (!x || (N = kt.exec(Y))) &&
                        (N && (Y = Y.slice(N[0].length) || Y),
                        X.push((P = []))),
                        (x = !1),
                        (N = gn.exec(Y)) &&
                            ((x = N.shift()),
                            P.push({ value: x, type: N[0].replace(Pe, " ") }),
                            (Y = Y.slice(x.length)));
                    for (U in r.filter)
                        (N = de[U].exec(Y)) &&
                            (!G[U] || (N = G[U](N))) &&
                            ((x = N.shift()),
                            P.push({ value: x, type: U, matches: N }),
                            (Y = Y.slice(x.length)));
                    if (!x) break;
                }
                return A ? Y.length : Y ? dt.error(m) : ot(m, X).slice(0);
            }
            function ir(m) {
                for (var A = 0, x = m.length, N = ""; A < x; A++)
                    N += m[A].value;
                return N;
            }
            function sr(m, A, x) {
                var N = A.dir,
                    P = A.next,
                    U = P || N,
                    Y = x && U === "parentNode",
                    X = $++;
                return A.first
                    ? function (G, pt, it) {
                          for (; (G = G[N]); )
                              if (G.nodeType === 1 || Y) return m(G, pt, it);
                          return !1;
                      }
                    : function (G, pt, it) {
                          var ut,
                              gt,
                              nt = [D, X];
                          if (it) {
                              for (; (G = G[N]); )
                                  if ((G.nodeType === 1 || Y) && m(G, pt, it))
                                      return !0;
                          } else
                              for (; (G = G[N]); )
                                  if (G.nodeType === 1 || Y)
                                      if (
                                          ((gt = G[R] || (G[R] = {})),
                                          P && bt(G, P))
                                      )
                                          G = G[N] || G;
                                      else {
                                          if (
                                              (ut = gt[U]) &&
                                              ut[0] === D &&
                                              ut[1] === X
                                          )
                                              return (nt[2] = ut[2]);
                                          if (
                                              ((gt[U] = nt),
                                              (nt[2] = m(G, pt, it)))
                                          )
                                              return !0;
                                      }
                          return !1;
                      };
            }
            function en(m) {
                return m.length > 1
                    ? function (A, x, N) {
                          for (var P = m.length; P--; )
                              if (!m[P](A, x, N)) return !1;
                          return !0;
                      }
                    : m[0];
            }
            function Rs(m, A, x) {
                for (var N = 0, P = A.length; N < P; N++) dt(m, A[N], x);
                return x;
            }
            function Xr(m, A, x, N, P) {
                for (
                    var U, Y = [], X = 0, G = m.length, pt = A != null;
                    X < G;
                    X++
                )
                    (U = m[X]) &&
                        (!x || x(U, N, P)) &&
                        (Y.push(U), pt && A.push(X));
                return Y;
            }
            function Jr(m, A, x, N, P, U) {
                return (
                    N && !N[R] && (N = Jr(N)),
                    P && !P[R] && (P = Jr(P, U)),
                    pe(function (Y, X, G, pt) {
                        var it,
                            ut,
                            gt,
                            nt,
                            At = [],
                            ne = [],
                            Xt = X.length,
                            Pt = Y || Rs(A || "*", G.nodeType ? [G] : G, []),
                            ge = m && (Y || !A) ? Xr(Pt, At, m, G, pt) : Pt;
                        if (
                            (x
                                ? ((nt = P || (Y ? m : Xt || N) ? [] : X),
                                  x(ge, nt, G, pt))
                                : (nt = ge),
                            N)
                        )
                            for (
                                it = Xr(nt, ne),
                                    N(it, [], G, pt),
                                    ut = it.length;
                                ut--;

                            )
                                (gt = it[ut]) &&
                                    (nt[ne[ut]] = !(ge[ne[ut]] = gt));
                        if (Y) {
                            if (P || m) {
                                if (P) {
                                    for (it = [], ut = nt.length; ut--; )
                                        (gt = nt[ut]) && it.push((ge[ut] = gt));
                                    P(null, (nt = []), it, pt);
                                }
                                for (ut = nt.length; ut--; )
                                    (gt = nt[ut]) &&
                                        (it = P ? z.call(Y, gt) : At[ut]) >
                                            -1 &&
                                        (Y[it] = !(X[it] = gt));
                            }
                        } else (nt = Xr(nt === X ? nt.splice(Xt, nt.length) : nt)), P ? P(null, X, nt, pt) : c.apply(X, nt);
                    })
                );
            }
            function Qr(m) {
                for (
                    var A,
                        x,
                        N,
                        P = m.length,
                        U = r.relative[m[0].type],
                        Y = U || r.relative[" "],
                        X = U ? 1 : 0,
                        G = sr(
                            function (ut) {
                                return ut === A;
                            },
                            Y,
                            !0
                        ),
                        pt = sr(
                            function (ut) {
                                return z.call(A, ut) > -1;
                            },
                            Y,
                            !0
                        ),
                        it = [
                            function (ut, gt, nt) {
                                var At =
                                    (!U && (nt || gt != i)) ||
                                    ((A = gt).nodeType
                                        ? G(ut, gt, nt)
                                        : pt(ut, gt, nt));
                                return (A = null), At;
                            },
                        ];
                    X < P;
                    X++
                )
                    if ((x = r.relative[m[X].type])) it = [sr(en(it), x)];
                    else {
                        if (
                            ((x = r.filter[m[X].type].apply(
                                null,
                                m[X].matches
                            )),
                            x[R])
                        ) {
                            for (N = ++X; N < P && !r.relative[m[N].type]; N++);
                            return Jr(
                                X > 1 && en(it),
                                X > 1 &&
                                    ir(
                                        m
                                            .slice(0, X - 1)
                                            .concat({
                                                value:
                                                    m[X - 2].type === " "
                                                        ? "*"
                                                        : "",
                                            })
                                    ).replace(Pe, "$1"),
                                x,
                                X < N && Qr(m.slice(X, N)),
                                N < P && Qr((m = m.slice(N))),
                                N < P && ir(m)
                            );
                        }
                        it.push(x);
                    }
                return en(it);
            }
            function Ps(m, A) {
                var x = A.length > 0,
                    N = m.length > 0,
                    P = function (U, Y, X, G, pt) {
                        var it,
                            ut,
                            gt,
                            nt = 0,
                            At = "0",
                            ne = U && [],
                            Xt = [],
                            Pt = i,
                            ge = U || (N && r.find.TAG("*", pt)),
                            mn = (D += Pt == null ? 1 : Math.random() || 0.1),
                            Jt = ge.length;
                        for (
                            pt && (i = Y == p || Y || pt);
                            At !== Jt && (it = ge[At]) != null;
                            At++
                        ) {
                            if (N && it) {
                                for (
                                    ut = 0,
                                        !Y &&
                                            it.ownerDocument != p &&
                                            (De(it), (X = !y));
                                    (gt = m[ut++]);

                                )
                                    if (gt(it, Y || p, X)) {
                                        c.call(G, it);
                                        break;
                                    }
                                pt && (D = mn);
                            }
                            x && ((it = !gt && it) && nt--, U && ne.push(it));
                        }
                        if (((nt += At), x && At !== nt)) {
                            for (ut = 0; (gt = A[ut++]); ) gt(ne, Xt, Y, X);
                            if (U) {
                                if (nt > 0)
                                    for (; At--; )
                                        ne[At] ||
                                            Xt[At] ||
                                            (Xt[At] = hs.call(G));
                                Xt = Xr(Xt);
                            }
                            c.apply(G, Xt),
                                pt &&
                                    !U &&
                                    Xt.length > 0 &&
                                    nt + A.length > 1 &&
                                    u.uniqueSort(G);
                        }
                        return pt && ((D = mn), (i = Pt)), ne;
                    };
                return x ? pe(P) : P;
            }
            function or(m, A) {
                var x,
                    N = [],
                    P = [],
                    U = ct[m + " "];
                if (!U) {
                    for (A || (A = Dn(m)), x = A.length; x--; )
                        (U = Qr(A[x])), U[R] ? N.push(U) : P.push(U);
                    (U = ct(m, Ps(P, N))), (U.selector = m);
                }
                return U;
            }
            function ji(m, A, x, N) {
                var P,
                    U,
                    Y,
                    X,
                    G,
                    pt = typeof m == "function" && m,
                    it = !N && Dn((m = pt.selector || m));
                if (((x = x || []), it.length === 1)) {
                    if (
                        ((U = it[0] = it[0].slice(0)),
                        U.length > 2 &&
                            (Y = U[0]).type === "ID" &&
                            A.nodeType === 9 &&
                            y &&
                            r.relative[U[1].type])
                    ) {
                        if (
                            ((A = (r.find.ID(Y.matches[0].replace(Ce, B), A) ||
                                [])[0]),
                            A)
                        )
                            pt && (A = A.parentNode);
                        else return x;
                        m = m.slice(U.shift().value.length);
                    }
                    for (
                        P = de.needsContext.test(m) ? 0 : U.length;
                        P-- && ((Y = U[P]), !r.relative[(X = Y.type)]);

                    )
                        if (
                            (G = r.find[X]) &&
                            (N = G(
                                Y.matches[0].replace(Ce, B),
                                (zr.test(U[0].type) && $i(A.parentNode)) || A
                            ))
                        ) {
                            if ((U.splice(P, 1), (m = N.length && ir(U)), !m))
                                return c.apply(x, N), x;
                            break;
                        }
                }
                return (
                    (pt || or(m, it))(
                        N,
                        A,
                        !y,
                        x,
                        !A || (zr.test(m) && $i(A.parentNode)) || A
                    ),
                    x
                );
            }
            (H.sortStable = R.split("").sort(Rt).join("") === R),
                De(),
                (H.sortDetached = Wt(function (m) {
                    return (
                        m.compareDocumentPosition(p.createElement("fieldset")) &
                        1
                    );
                })),
                (u.find = dt),
                (u.expr[":"] = u.expr.pseudos),
                (u.unique = u.uniqueSort),
                (dt.compile = or),
                (dt.select = ji),
                (dt.setDocument = De),
                (dt.tokenize = Dn),
                (dt.escape = u.escapeSelector),
                (dt.getText = u.text),
                (dt.isXML = u.isXMLDoc),
                (dt.selectors = u.expr),
                (dt.support = u.support),
                (dt.uniqueSort = u.uniqueSort);
        })();
        var an = function (e, r, i) {
                for (
                    var a = [], l = i !== void 0;
                    (e = e[r]) && e.nodeType !== 9;

                )
                    if (e.nodeType === 1) {
                        if (l && u(e).is(i)) break;
                        a.push(e);
                    }
                return a;
            },
            hi = function (e, r) {
                for (var i = []; e; e = e.nextSibling)
                    e.nodeType === 1 && e !== r && i.push(e);
                return i;
            },
            di = u.expr.match.needsContext,
            ie =
                /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function yr(e, r, i) {
            return q(r)
                ? u.grep(e, function (a, l) {
                      return !!r.call(a, l, a) !== i;
                  })
                : r.nodeType
                ? u.grep(e, function (a) {
                      return (a === r) !== i;
                  })
                : typeof r != "string"
                ? u.grep(e, function (a) {
                      return z.call(r, a) > -1 !== i;
                  })
                : u.filter(r, e, i);
        }
        (u.filter = function (e, r, i) {
            var a = r[0];
            return (
                i && (e = ":not(" + e + ")"),
                r.length === 1 && a.nodeType === 1
                    ? u.find.matchesSelector(a, e)
                        ? [a]
                        : []
                    : u.find.matches(
                          e,
                          u.grep(r, function (l) {
                              return l.nodeType === 1;
                          })
                      )
            );
        }),
            u.fn.extend({
                find: function (e) {
                    var r,
                        i,
                        a = this.length,
                        l = this;
                    if (typeof e != "string")
                        return this.pushStack(
                            u(e).filter(function () {
                                for (r = 0; r < a; r++)
                                    if (u.contains(l[r], this)) return !0;
                            })
                        );
                    for (i = this.pushStack([]), r = 0; r < a; r++)
                        u.find(e, l[r], i);
                    return a > 1 ? u.uniqueSort(i) : i;
                },
                filter: function (e) {
                    return this.pushStack(yr(this, e || [], !1));
                },
                not: function (e) {
                    return this.pushStack(yr(this, e || [], !0));
                },
                is: function (e) {
                    return !!yr(
                        this,
                        typeof e == "string" && di.test(e) ? u(e) : e || [],
                        !1
                    ).length;
                },
            });
        var pi,
            gs = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            Hn = (u.fn.init = function (e, r, i) {
                var a, l;
                if (!e) return this;
                if (((i = i || pi), typeof e == "string"))
                    if (
                        (e[0] === "<" &&
                        e[e.length - 1] === ">" &&
                        e.length >= 3
                            ? (a = [null, e, null])
                            : (a = gs.exec(e)),
                        a && (a[1] || !r))
                    )
                        if (a[1]) {
                            if (
                                ((r = r instanceof u ? r[0] : r),
                                u.merge(
                                    this,
                                    u.parseHTML(
                                        a[1],
                                        r && r.nodeType
                                            ? r.ownerDocument || r
                                            : K,
                                        !0
                                    )
                                ),
                                ie.test(a[1]) && u.isPlainObject(r))
                            )
                                for (a in r)
                                    q(this[a])
                                        ? this[a](r[a])
                                        : this.attr(a, r[a]);
                            return this;
                        } else
                            return (
                                (l = K.getElementById(a[2])),
                                l && ((this[0] = l), (this.length = 1)),
                                this
                            );
                    else
                        return !r || r.jquery
                            ? (r || i).find(e)
                            : this.constructor(r).find(e);
                else {
                    if (e.nodeType)
                        return (this[0] = e), (this.length = 1), this;
                    if (q(e)) return i.ready !== void 0 ? i.ready(e) : e(u);
                }
                return u.makeArray(e, this);
            });
        (Hn.prototype = u.fn), (pi = u(K));
        var br = /^(?:parents|prev(?:Until|All))/,
            gi = { children: !0, contents: !0, next: !0, prev: !0 };
        u.fn.extend({
            has: function (e) {
                var r = u(e, this),
                    i = r.length;
                return this.filter(function () {
                    for (var a = 0; a < i; a++)
                        if (u.contains(this, r[a])) return !0;
                });
            },
            closest: function (e, r) {
                var i,
                    a = 0,
                    l = this.length,
                    c = [],
                    p = typeof e != "string" && u(e);
                if (!di.test(e)) {
                    for (; a < l; a++)
                        for (i = this[a]; i && i !== r; i = i.parentNode)
                            if (
                                i.nodeType < 11 &&
                                (p
                                    ? p.index(i) > -1
                                    : i.nodeType === 1 &&
                                      u.find.matchesSelector(i, e))
                            ) {
                                c.push(i);
                                break;
                            }
                }
                return this.pushStack(c.length > 1 ? u.uniqueSort(c) : c);
            },
            index: function (e) {
                return e
                    ? typeof e == "string"
                        ? z.call(u(e), this[0])
                        : z.call(this, e.jquery ? e[0] : e)
                    : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
            },
            add: function (e, r) {
                return this.pushStack(
                    u.uniqueSort(u.merge(this.get(), u(e, r)))
                );
            },
            addBack: function (e) {
                return this.add(
                    e == null ? this.prevObject : this.prevObject.filter(e)
                );
            },
        });
        function mi(e, r) {
            for (; (e = e[r]) && e.nodeType !== 1; );
            return e;
        }
        u.each(
            {
                parent: function (e) {
                    var r = e.parentNode;
                    return r && r.nodeType !== 11 ? r : null;
                },
                parents: function (e) {
                    return an(e, "parentNode");
                },
                parentsUntil: function (e, r, i) {
                    return an(e, "parentNode", i);
                },
                next: function (e) {
                    return mi(e, "nextSibling");
                },
                prev: function (e) {
                    return mi(e, "previousSibling");
                },
                nextAll: function (e) {
                    return an(e, "nextSibling");
                },
                prevAll: function (e) {
                    return an(e, "previousSibling");
                },
                nextUntil: function (e, r, i) {
                    return an(e, "nextSibling", i);
                },
                prevUntil: function (e, r, i) {
                    return an(e, "previousSibling", i);
                },
                siblings: function (e) {
                    return hi((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return hi(e.firstChild);
                },
                contents: function (e) {
                    return e.contentDocument != null && w(e.contentDocument)
                        ? e.contentDocument
                        : (bt(e, "template") && (e = e.content || e),
                          u.merge([], e.childNodes));
                },
            },
            function (e, r) {
                u.fn[e] = function (i, a) {
                    var l = u.map(this, r, i);
                    return (
                        e.slice(-5) !== "Until" && (a = i),
                        a && typeof a == "string" && (l = u.filter(a, l)),
                        this.length > 1 &&
                            (gi[e] || u.uniqueSort(l),
                            br.test(e) && l.reverse()),
                        this.pushStack(l)
                    );
                };
            }
        );
        var _e = /[^\x20\t\r\n\f]+/g;
        function zt(e) {
            var r = {};
            return (
                u.each(e.match(_e) || [], function (i, a) {
                    r[a] = !0;
                }),
                r
            );
        }
        u.Callbacks = function (e) {
            e = typeof e == "string" ? zt(e) : u.extend({}, e);
            var r,
                i,
                a,
                l,
                c = [],
                p = [],
                b = -1,
                y = function () {
                    for (l = l || e.once, a = r = !0; p.length; b = -1)
                        for (i = p.shift(); ++b < c.length; )
                            c[b].apply(i[0], i[1]) === !1 &&
                                e.stopOnFalse &&
                                ((b = c.length), (i = !1));
                    e.memory || (i = !1),
                        (r = !1),
                        l && (i ? (c = []) : (c = ""));
                },
                T = {
                    add: function () {
                        return (
                            c &&
                                (i && !r && ((b = c.length - 1), p.push(i)),
                                (function L(R) {
                                    u.each(R, function (D, $) {
                                        q($)
                                            ? (!e.unique || !T.has($)) &&
                                              c.push($)
                                            : $ &&
                                              $.length &&
                                              Re($) !== "string" &&
                                              L($);
                                    });
                                })(arguments),
                                i && !r && y()),
                            this
                        );
                    },
                    remove: function () {
                        return (
                            u.each(arguments, function (L, R) {
                                for (var D; (D = u.inArray(R, c, D)) > -1; )
                                    c.splice(D, 1), D <= b && b--;
                            }),
                            this
                        );
                    },
                    has: function (L) {
                        return L ? u.inArray(L, c) > -1 : c.length > 0;
                    },
                    empty: function () {
                        return c && (c = []), this;
                    },
                    disable: function () {
                        return (l = p = []), (c = i = ""), this;
                    },
                    disabled: function () {
                        return !c;
                    },
                    lock: function () {
                        return (l = p = []), !i && !r && (c = i = ""), this;
                    },
                    locked: function () {
                        return !!l;
                    },
                    fireWith: function (L, R) {
                        return (
                            l ||
                                ((R = R || []),
                                (R = [L, R.slice ? R.slice() : R]),
                                p.push(R),
                                r || y()),
                            this
                        );
                    },
                    fire: function () {
                        return T.fireWith(this, arguments), this;
                    },
                    fired: function () {
                        return !!a;
                    },
                };
            return T;
        };
        function Ft(e) {
            return e;
        }
        function jt(e) {
            throw e;
        }
        function Ht(e, r, i, a) {
            var l;
            try {
                e && q((l = e.promise))
                    ? l.call(e).done(r).fail(i)
                    : e && q((l = e.then))
                    ? l.call(e, r, i)
                    : r.apply(void 0, [e].slice(a));
            } catch (c) {
                i.apply(void 0, [c]);
            }
        }
        u.extend({
            Deferred: function (e) {
                var r = [
                        [
                            "notify",
                            "progress",
                            u.Callbacks("memory"),
                            u.Callbacks("memory"),
                            2,
                        ],
                        [
                            "resolve",
                            "done",
                            u.Callbacks("once memory"),
                            u.Callbacks("once memory"),
                            0,
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            u.Callbacks("once memory"),
                            u.Callbacks("once memory"),
                            1,
                            "rejected",
                        ],
                    ],
                    i = "pending",
                    a = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return l.done(arguments).fail(arguments), this;
                        },
                        catch: function (c) {
                            return a.then(null, c);
                        },
                        pipe: function () {
                            var c = arguments;
                            return u
                                .Deferred(function (p) {
                                    u.each(r, function (b, y) {
                                        var T = q(c[y[4]]) && c[y[4]];
                                        l[y[1]](function () {
                                            var L =
                                                T && T.apply(this, arguments);
                                            L && q(L.promise)
                                                ? L.promise()
                                                      .progress(p.notify)
                                                      .done(p.resolve)
                                                      .fail(p.reject)
                                                : p[y[0] + "With"](
                                                      this,
                                                      T ? [L] : arguments
                                                  );
                                        });
                                    }),
                                        (c = null);
                                })
                                .promise();
                        },
                        then: function (c, p, b) {
                            var y = 0;
                            function T(L, R, D, $) {
                                return function () {
                                    var Q = this,
                                        ot = arguments,
                                        ct = function () {
                                            var Rt, be;
                                            if (!(L < y)) {
                                                if (
                                                    ((Rt = D.apply(Q, ot)),
                                                    Rt === R.promise())
                                                )
                                                    throw new TypeError(
                                                        "Thenable self-resolution"
                                                    );
                                                (be =
                                                    Rt &&
                                                    (typeof Rt == "object" ||
                                                        typeof Rt ==
                                                            "function") &&
                                                    Rt.then),
                                                    q(be)
                                                        ? $
                                                            ? be.call(
                                                                  Rt,
                                                                  T(
                                                                      y,
                                                                      R,
                                                                      Ft,
                                                                      $
                                                                  ),
                                                                  T(y, R, jt, $)
                                                              )
                                                            : (y++,
                                                              be.call(
                                                                  Rt,
                                                                  T(
                                                                      y,
                                                                      R,
                                                                      Ft,
                                                                      $
                                                                  ),
                                                                  T(
                                                                      y,
                                                                      R,
                                                                      jt,
                                                                      $
                                                                  ),
                                                                  T(
                                                                      y,
                                                                      R,
                                                                      Ft,
                                                                      R.notifyWith
                                                                  )
                                                              ))
                                                        : (D !== Ft &&
                                                              ((Q = void 0),
                                                              (ot = [Rt])),
                                                          ($ || R.resolveWith)(
                                                              Q,
                                                              ot
                                                          ));
                                            }
                                        },
                                        Lt = $
                                            ? ct
                                            : function () {
                                                  try {
                                                      ct();
                                                  } catch (Rt) {
                                                      u.Deferred
                                                          .exceptionHook &&
                                                          u.Deferred.exceptionHook(
                                                              Rt,
                                                              Lt.error
                                                          ),
                                                          L + 1 >= y &&
                                                              (D !== jt &&
                                                                  ((Q = void 0),
                                                                  (ot = [Rt])),
                                                              R.rejectWith(
                                                                  Q,
                                                                  ot
                                                              ));
                                                  }
                                              };
                                    L
                                        ? Lt()
                                        : (u.Deferred.getErrorHook
                                              ? (Lt.error =
                                                    u.Deferred.getErrorHook())
                                              : u.Deferred.getStackHook &&
                                                (Lt.error =
                                                    u.Deferred.getStackHook()),
                                          d.setTimeout(Lt));
                                };
                            }
                            return u
                                .Deferred(function (L) {
                                    r[0][3].add(
                                        T(0, L, q(b) ? b : Ft, L.notifyWith)
                                    ),
                                        r[1][3].add(T(0, L, q(c) ? c : Ft)),
                                        r[2][3].add(T(0, L, q(p) ? p : jt));
                                })
                                .promise();
                        },
                        promise: function (c) {
                            return c != null ? u.extend(c, a) : a;
                        },
                    },
                    l = {};
                return (
                    u.each(r, function (c, p) {
                        var b = p[2],
                            y = p[5];
                        (a[p[1]] = b.add),
                            y &&
                                b.add(
                                    function () {
                                        i = y;
                                    },
                                    r[3 - c][2].disable,
                                    r[3 - c][3].disable,
                                    r[0][2].lock,
                                    r[0][3].lock
                                ),
                            b.add(p[3].fire),
                            (l[p[0]] = function () {
                                return (
                                    l[p[0] + "With"](
                                        this === l ? void 0 : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (l[p[0] + "With"] = b.fireWith);
                    }),
                    a.promise(l),
                    e && e.call(l, l),
                    l
                );
            },
            when: function (e) {
                var r = arguments.length,
                    i = r,
                    a = Array(i),
                    l = S.call(arguments),
                    c = u.Deferred(),
                    p = function (b) {
                        return function (y) {
                            (a[b] = this),
                                (l[b] =
                                    arguments.length > 1
                                        ? S.call(arguments)
                                        : y),
                                --r || c.resolveWith(a, l);
                        };
                    };
                if (
                    r <= 1 &&
                    (Ht(e, c.done(p(i)).resolve, c.reject, !r),
                    c.state() === "pending" || q(l[i] && l[i].then))
                )
                    return c.then();
                for (; i--; ) Ht(l[i], p(i), c.reject);
                return c.promise();
            },
        });
        var qn = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (u.Deferred.exceptionHook = function (e, r) {
            d.console &&
                d.console.warn &&
                e &&
                qn.test(e.name) &&
                d.console.warn(
                    "jQuery.Deferred exception: " + e.message,
                    e.stack,
                    r
                );
        }),
            (u.readyException = function (e) {
                d.setTimeout(function () {
                    throw e;
                });
            });
        var Ie = u.Deferred();
        (u.fn.ready = function (e) {
            return (
                Ie.then(e).catch(function (r) {
                    u.readyException(r);
                }),
                this
            );
        }),
            u.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                    (e === !0 ? --u.readyWait : u.isReady) ||
                        ((u.isReady = !0),
                        !(e !== !0 && --u.readyWait > 0) &&
                            Ie.resolveWith(K, [u]));
                },
            }),
            (u.ready.then = Ie.then);
        function ve() {
            K.removeEventListener("DOMContentLoaded", ve),
                d.removeEventListener("load", ve),
                u.ready();
        }
        K.readyState === "complete" ||
        (K.readyState !== "loading" && !K.documentElement.doScroll)
            ? d.setTimeout(u.ready)
            : (K.addEventListener("DOMContentLoaded", ve),
              d.addEventListener("load", ve));
        var Zt = function (e, r, i, a, l, c, p) {
                var b = 0,
                    y = e.length,
                    T = i == null;
                if (Re(i) === "object") {
                    l = !0;
                    for (b in i) Zt(e, r, b, i[b], !0, c, p);
                } else if (
                    a !== void 0 &&
                    ((l = !0),
                    q(a) || (p = !0),
                    T &&
                        (p
                            ? (r.call(e, a), (r = null))
                            : ((T = r),
                              (r = function (L, R, D) {
                                  return T.call(u(L), D);
                              }))),
                    r)
                )
                    for (; b < y; b++)
                        r(e[b], i, p ? a : a.call(e[b], b, r(e[b], i)));
                return l ? e : T ? r.call(e) : y ? r(e[0], i) : c;
            },
            _i = /^-ms-/,
            Ar = /-([a-z])/g;
        function un(e, r) {
            return r.toUpperCase();
        }
        function ce(e) {
            return e.replace(_i, "ms-").replace(Ar, un);
        }
        var Ue = function (e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
        };
        function ze() {
            this.expando = u.expando + ze.uid++;
        }
        (ze.uid = 1),
            (ze.prototype = {
                cache: function (e) {
                    var r = e[this.expando];
                    return (
                        r ||
                            ((r = {}),
                            Ue(e) &&
                                (e.nodeType
                                    ? (e[this.expando] = r)
                                    : Object.defineProperty(e, this.expando, {
                                          value: r,
                                          configurable: !0,
                                      }))),
                        r
                    );
                },
                set: function (e, r, i) {
                    var a,
                        l = this.cache(e);
                    if (typeof r == "string") l[ce(r)] = i;
                    else for (a in r) l[ce(a)] = r[a];
                    return l;
                },
                get: function (e, r) {
                    return r === void 0
                        ? this.cache(e)
                        : e[this.expando] && e[this.expando][ce(r)];
                },
                access: function (e, r, i) {
                    return r === void 0 ||
                        (r && typeof r == "string" && i === void 0)
                        ? this.get(e, r)
                        : (this.set(e, r, i), i !== void 0 ? i : r);
                },
                remove: function (e, r) {
                    var i,
                        a = e[this.expando];
                    if (a !== void 0) {
                        if (r !== void 0)
                            for (
                                Array.isArray(r)
                                    ? (r = r.map(ce))
                                    : ((r = ce(r)),
                                      (r = (r in a) ? [r] : r.match(_e) || [])),
                                    i = r.length;
                                i--;

                            )
                                delete a[r[i]];
                        (r === void 0 || u.isEmptyObject(a)) &&
                            (e.nodeType
                                ? (e[this.expando] = void 0)
                                : delete e[this.expando]);
                    }
                },
                hasData: function (e) {
                    var r = e[this.expando];
                    return r !== void 0 && !u.isEmptyObject(r);
                },
            });
        var J = new ze(),
            Kt = new ze(),
            vi = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ei = /[A-Z]/g;
        function yi(e) {
            return e === "true"
                ? !0
                : e === "false"
                ? !1
                : e === "null"
                ? null
                : e === +e + ""
                ? +e
                : vi.test(e)
                ? JSON.parse(e)
                : e;
        }
        function Tr(e, r, i) {
            var a;
            if (i === void 0 && e.nodeType === 1)
                if (
                    ((a = "data-" + r.replace(Ei, "-$&").toLowerCase()),
                    (i = e.getAttribute(a)),
                    typeof i == "string")
                ) {
                    try {
                        i = yi(i);
                    } catch {}
                    Kt.set(e, r, i);
                } else i = void 0;
            return i;
        }
        u.extend({
            hasData: function (e) {
                return Kt.hasData(e) || J.hasData(e);
            },
            data: function (e, r, i) {
                return Kt.access(e, r, i);
            },
            removeData: function (e, r) {
                Kt.remove(e, r);
            },
            _data: function (e, r, i) {
                return J.access(e, r, i);
            },
            _removeData: function (e, r) {
                J.remove(e, r);
            },
        }),
            u.fn.extend({
                data: function (e, r) {
                    var i,
                        a,
                        l,
                        c = this[0],
                        p = c && c.attributes;
                    if (e === void 0) {
                        if (
                            this.length &&
                            ((l = Kt.get(c)),
                            c.nodeType === 1 && !J.get(c, "hasDataAttrs"))
                        ) {
                            for (i = p.length; i--; )
                                p[i] &&
                                    ((a = p[i].name),
                                    a.indexOf("data-") === 0 &&
                                        ((a = ce(a.slice(5))), Tr(c, a, l[a])));
                            J.set(c, "hasDataAttrs", !0);
                        }
                        return l;
                    }
                    return typeof e == "object"
                        ? this.each(function () {
                              Kt.set(this, e);
                          })
                        : Zt(
                              this,
                              function (b) {
                                  var y;
                                  if (c && b === void 0)
                                      return (
                                          (y = Kt.get(c, e)),
                                          y !== void 0 ||
                                          ((y = Tr(c, e)), y !== void 0)
                                              ? y
                                              : void 0
                                      );
                                  this.each(function () {
                                      Kt.set(this, e, b);
                                  });
                              },
                              null,
                              r,
                              arguments.length > 1,
                              null,
                              !0
                          );
                },
                removeData: function (e) {
                    return this.each(function () {
                        Kt.remove(this, e);
                    });
                },
            }),
            u.extend({
                queue: function (e, r, i) {
                    var a;
                    if (e)
                        return (
                            (r = (r || "fx") + "queue"),
                            (a = J.get(e, r)),
                            i &&
                                (!a || Array.isArray(i)
                                    ? (a = J.access(e, r, u.makeArray(i)))
                                    : a.push(i)),
                            a || []
                        );
                },
                dequeue: function (e, r) {
                    r = r || "fx";
                    var i = u.queue(e, r),
                        a = i.length,
                        l = i.shift(),
                        c = u._queueHooks(e, r),
                        p = function () {
                            u.dequeue(e, r);
                        };
                    l === "inprogress" && ((l = i.shift()), a--),
                        l &&
                            (r === "fx" && i.unshift("inprogress"),
                            delete c.stop,
                            l.call(e, p, c)),
                        !a && c && c.empty.fire();
                },
                _queueHooks: function (e, r) {
                    var i = r + "queueHooks";
                    return (
                        J.get(e, i) ||
                        J.access(e, i, {
                            empty: u.Callbacks("once memory").add(function () {
                                J.remove(e, [r + "queue", i]);
                            }),
                        })
                    );
                },
            }),
            u.fn.extend({
                queue: function (e, r) {
                    var i = 2;
                    return (
                        typeof e != "string" && ((r = e), (e = "fx"), i--),
                        arguments.length < i
                            ? u.queue(this[0], e)
                            : r === void 0
                            ? this
                            : this.each(function () {
                                  var a = u.queue(this, e, r);
                                  u._queueHooks(this, e),
                                      e === "fx" &&
                                          a[0] !== "inprogress" &&
                                          u.dequeue(this, e);
                              })
                    );
                },
                dequeue: function (e) {
                    return this.each(function () {
                        u.dequeue(this, e);
                    });
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", []);
                },
                promise: function (e, r) {
                    var i,
                        a = 1,
                        l = u.Deferred(),
                        c = this,
                        p = this.length,
                        b = function () {
                            --a || l.resolveWith(c, [c]);
                        };
                    for (
                        typeof e != "string" && ((r = e), (e = void 0)),
                            e = e || "fx";
                        p--;

                    )
                        (i = J.get(c[p], e + "queueHooks")),
                            i && i.empty && (a++, i.empty.add(b));
                    return b(), l.promise(r);
                },
            });
        var Cr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ln = new RegExp("^(?:([+-])=|)(" + Cr + ")([a-z%]*)$", "i"),
            Ee = ["Top", "Right", "Bottom", "Left"],
            Fe = K.documentElement,
            Yt = function (e) {
                return u.contains(e.ownerDocument, e);
            },
            se = { composed: !0 };
        Fe.getRootNode &&
            (Yt = function (e) {
                return (
                    u.contains(e.ownerDocument, e) ||
                    e.getRootNode(se) === e.ownerDocument
                );
            });
        var ye = function (e, r) {
            return (
                (e = r || e),
                e.style.display === "none" ||
                    (e.style.display === "" &&
                        Yt(e) &&
                        u.css(e, "display") === "none")
            );
        };
        function oe(e, r, i, a) {
            var l,
                c,
                p = 20,
                b = a
                    ? function () {
                          return a.cur();
                      }
                    : function () {
                          return u.css(e, r, "");
                      },
                y = b(),
                T = (i && i[3]) || (u.cssNumber[r] ? "" : "px"),
                L =
                    e.nodeType &&
                    (u.cssNumber[r] || (T !== "px" && +y)) &&
                    ln.exec(u.css(e, r));
            if (L && L[3] !== T) {
                for (y = y / 2, T = T || L[3], L = +y || 1; p--; )
                    u.style(e, r, L + T),
                        (1 - c) * (1 - (c = b() / y || 0.5)) <= 0 && (p = 0),
                        (L = L / c);
                (L = L * 2), u.style(e, r, L + T), (i = i || []);
            }
            return (
                i &&
                    ((L = +L || +y || 0),
                    (l = i[1] ? L + (i[1] + 1) * i[2] : +i[2]),
                    a && ((a.unit = T), (a.start = L), (a.end = l))),
                l
            );
        }
        var Wn = {};
        function ms(e) {
            var r,
                i = e.ownerDocument,
                a = e.nodeName,
                l = Wn[a];
            return (
                l ||
                ((r = i.body.appendChild(i.createElement(a))),
                (l = u.css(r, "display")),
                r.parentNode.removeChild(r),
                l === "none" && (l = "block"),
                (Wn[a] = l),
                l)
            );
        }
        function cn(e, r) {
            for (var i, a, l = [], c = 0, p = e.length; c < p; c++)
                (a = e[c]),
                    a.style &&
                        ((i = a.style.display),
                        r
                            ? (i === "none" &&
                                  ((l[c] = J.get(a, "display") || null),
                                  l[c] || (a.style.display = "")),
                              a.style.display === "" && ye(a) && (l[c] = ms(a)))
                            : i !== "none" &&
                              ((l[c] = "none"), J.set(a, "display", i)));
            for (c = 0; c < p; c++) l[c] != null && (e[c].style.display = l[c]);
            return e;
        }
        u.fn.extend({
            show: function () {
                return cn(this, !0);
            },
            hide: function () {
                return cn(this);
            },
            toggle: function (e) {
                return typeof e == "boolean"
                    ? e
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          ye(this) ? u(this).show() : u(this).hide();
                      });
            },
        });
        var Ke = /^(?:checkbox|radio)$/i,
            fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Me = /^$|^module$|\/(?:java|ecma)script/i;
        (function () {
            var e = K.createDocumentFragment(),
                r = e.appendChild(K.createElement("div")),
                i = K.createElement("input");
            i.setAttribute("type", "radio"),
                i.setAttribute("checked", "checked"),
                i.setAttribute("name", "t"),
                r.appendChild(i),
                (H.checkClone = r
                    .cloneNode(!0)
                    .cloneNode(!0).lastChild.checked),
                (r.innerHTML = "<textarea>x</textarea>"),
                (H.noCloneChecked = !!r.cloneNode(!0).lastChild.defaultValue),
                (r.innerHTML = "<option></option>"),
                (H.option = !!r.lastChild);
        })();
        var Gt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
        (Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead),
            (Gt.th = Gt.td),
            H.option ||
                (Gt.optgroup = Gt.option =
                    [1, "<select multiple='multiple'>", "</select>"]);
        function Nt(e, r) {
            var i;
            return (
                typeof e.getElementsByTagName < "u"
                    ? (i = e.getElementsByTagName(r || "*"))
                    : typeof e.querySelectorAll < "u"
                    ? (i = e.querySelectorAll(r || "*"))
                    : (i = []),
                r === void 0 || (r && bt(e, r)) ? u.merge([e], i) : i
            );
        }
        function An(e, r) {
            for (var i = 0, a = e.length; i < a; i++)
                J.set(e[i], "globalEval", !r || J.get(r[i], "globalEval"));
        }
        var bi = /<|&#?\w+;/;
        function Ye(e, r, i, a, l) {
            for (
                var c,
                    p,
                    b,
                    y,
                    T,
                    L,
                    R = r.createDocumentFragment(),
                    D = [],
                    $ = 0,
                    Q = e.length;
                $ < Q;
                $++
            )
                if (((c = e[$]), c || c === 0))
                    if (Re(c) === "object") u.merge(D, c.nodeType ? [c] : c);
                    else if (!bi.test(c)) D.push(r.createTextNode(c));
                    else {
                        for (
                            p = p || R.appendChild(r.createElement("div")),
                                b = (fe.exec(c) || ["", ""])[1].toLowerCase(),
                                y = Gt[b] || Gt._default,
                                p.innerHTML = y[1] + u.htmlPrefilter(c) + y[2],
                                L = y[0];
                            L--;

                        )
                            p = p.lastChild;
                        u.merge(D, p.childNodes),
                            (p = R.firstChild),
                            (p.textContent = "");
                    }
            for (R.textContent = "", $ = 0; (c = D[$++]); ) {
                if (a && u.inArray(c, a) > -1) {
                    l && l.push(c);
                    continue;
                }
                if (
                    ((T = Yt(c)),
                    (p = Nt(R.appendChild(c), "script")),
                    T && An(p),
                    i)
                )
                    for (L = 0; (c = p[L++]); )
                        Me.test(c.type || "") && i.push(c);
            }
            return R;
        }
        var Un = /^([^.]*)(?:\.(.+)|)/;
        function Ge() {
            return !0;
        }
        function te() {
            return !1;
        }
        function wr(e, r, i, a, l, c) {
            var p, b;
            if (typeof r == "object") {
                typeof i != "string" && ((a = a || i), (i = void 0));
                for (b in r) wr(e, b, i, a, r[b], c);
                return e;
            }
            if (
                (a == null && l == null
                    ? ((l = i), (a = i = void 0))
                    : l == null &&
                      (typeof i == "string"
                          ? ((l = a), (a = void 0))
                          : ((l = a), (a = i), (i = void 0))),
                l === !1)
            )
                l = te;
            else if (!l) return e;
            return (
                c === 1 &&
                    ((p = l),
                    (l = function (y) {
                        return u().off(y), p.apply(this, arguments);
                    }),
                    (l.guid = p.guid || (p.guid = u.guid++))),
                e.each(function () {
                    u.event.add(this, r, l, a, i);
                })
            );
        }
        u.event = {
            global: {},
            add: function (e, r, i, a, l) {
                var c,
                    p,
                    b,
                    y,
                    T,
                    L,
                    R,
                    D,
                    $,
                    Q,
                    ot,
                    ct = J.get(e);
                if (Ue(e))
                    for (
                        i.handler &&
                            ((c = i), (i = c.handler), (l = c.selector)),
                            l && u.find.matchesSelector(Fe, l),
                            i.guid || (i.guid = u.guid++),
                            (y = ct.events) ||
                                (y = ct.events = Object.create(null)),
                            (p = ct.handle) ||
                                (p = ct.handle =
                                    function (Lt) {
                                        return typeof u < "u" &&
                                            u.event.triggered !== Lt.type
                                            ? u.event.dispatch.apply(
                                                  e,
                                                  arguments
                                              )
                                            : void 0;
                                    }),
                            r = (r || "").match(_e) || [""],
                            T = r.length;
                        T--;

                    )
                        (b = Un.exec(r[T]) || []),
                            ($ = ot = b[1]),
                            (Q = (b[2] || "").split(".").sort()),
                            $ &&
                                ((R = u.event.special[$] || {}),
                                ($ = (l ? R.delegateType : R.bindType) || $),
                                (R = u.event.special[$] || {}),
                                (L = u.extend(
                                    {
                                        type: $,
                                        origType: ot,
                                        data: a,
                                        handler: i,
                                        guid: i.guid,
                                        selector: l,
                                        needsContext:
                                            l &&
                                            u.expr.match.needsContext.test(l),
                                        namespace: Q.join("."),
                                    },
                                    c
                                )),
                                (D = y[$]) ||
                                    ((D = y[$] = []),
                                    (D.delegateCount = 0),
                                    (!R.setup ||
                                        R.setup.call(e, a, Q, p) === !1) &&
                                        e.addEventListener &&
                                        e.addEventListener($, p)),
                                R.add &&
                                    (R.add.call(e, L),
                                    L.handler.guid ||
                                        (L.handler.guid = i.guid)),
                                l
                                    ? D.splice(D.delegateCount++, 0, L)
                                    : D.push(L),
                                (u.event.global[$] = !0));
            },
            remove: function (e, r, i, a, l) {
                var c,
                    p,
                    b,
                    y,
                    T,
                    L,
                    R,
                    D,
                    $,
                    Q,
                    ot,
                    ct = J.hasData(e) && J.get(e);
                if (!(!ct || !(y = ct.events))) {
                    for (r = (r || "").match(_e) || [""], T = r.length; T--; ) {
                        if (
                            ((b = Un.exec(r[T]) || []),
                            ($ = ot = b[1]),
                            (Q = (b[2] || "").split(".").sort()),
                            !$)
                        ) {
                            for ($ in y) u.event.remove(e, $ + r[T], i, a, !0);
                            continue;
                        }
                        for (
                            R = u.event.special[$] || {},
                                $ = (a ? R.delegateType : R.bindType) || $,
                                D = y[$] || [],
                                b =
                                    b[2] &&
                                    new RegExp(
                                        "(^|\\.)" +
                                            Q.join("\\.(?:.*\\.|)") +
                                            "(\\.|$)"
                                    ),
                                p = c = D.length;
                            c--;

                        )
                            (L = D[c]),
                                (l || ot === L.origType) &&
                                    (!i || i.guid === L.guid) &&
                                    (!b || b.test(L.namespace)) &&
                                    (!a ||
                                        a === L.selector ||
                                        (a === "**" && L.selector)) &&
                                    (D.splice(c, 1),
                                    L.selector && D.delegateCount--,
                                    R.remove && R.remove.call(e, L));
                        p &&
                            !D.length &&
                            ((!R.teardown ||
                                R.teardown.call(e, Q, ct.handle) === !1) &&
                                u.removeEvent(e, $, ct.handle),
                            delete y[$]);
                    }
                    u.isEmptyObject(y) && J.remove(e, "handle events");
                }
            },
            dispatch: function (e) {
                var r,
                    i,
                    a,
                    l,
                    c,
                    p,
                    b = new Array(arguments.length),
                    y = u.event.fix(e),
                    T =
                        (J.get(this, "events") || Object.create(null))[
                            y.type
                        ] || [],
                    L = u.event.special[y.type] || {};
                for (b[0] = y, r = 1; r < arguments.length; r++)
                    b[r] = arguments[r];
                if (
                    ((y.delegateTarget = this),
                    !(L.preDispatch && L.preDispatch.call(this, y) === !1))
                ) {
                    for (
                        p = u.event.handlers.call(this, y, T), r = 0;
                        (l = p[r++]) && !y.isPropagationStopped();

                    )
                        for (
                            y.currentTarget = l.elem, i = 0;
                            (c = l.handlers[i++]) &&
                            !y.isImmediatePropagationStopped();

                        )
                            (!y.rnamespace ||
                                c.namespace === !1 ||
                                y.rnamespace.test(c.namespace)) &&
                                ((y.handleObj = c),
                                (y.data = c.data),
                                (a = (
                                    (u.event.special[c.origType] || {})
                                        .handle || c.handler
                                ).apply(l.elem, b)),
                                a !== void 0 &&
                                    (y.result = a) === !1 &&
                                    (y.preventDefault(), y.stopPropagation()));
                    return (
                        L.postDispatch && L.postDispatch.call(this, y), y.result
                    );
                }
            },
            handlers: function (e, r) {
                var i,
                    a,
                    l,
                    c,
                    p,
                    b = [],
                    y = r.delegateCount,
                    T = e.target;
                if (y && T.nodeType && !(e.type === "click" && e.button >= 1)) {
                    for (; T !== this; T = T.parentNode || this)
                        if (
                            T.nodeType === 1 &&
                            !(e.type === "click" && T.disabled === !0)
                        ) {
                            for (c = [], p = {}, i = 0; i < y; i++)
                                (a = r[i]),
                                    (l = a.selector + " "),
                                    p[l] === void 0 &&
                                        (p[l] = a.needsContext
                                            ? u(l, this).index(T) > -1
                                            : u.find(l, this, null, [T])
                                                  .length),
                                    p[l] && c.push(a);
                            c.length && b.push({ elem: T, handlers: c });
                        }
                }
                return (
                    (T = this),
                    y < r.length && b.push({ elem: T, handlers: r.slice(y) }),
                    b
                );
            },
            addProp: function (e, r) {
                Object.defineProperty(u.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: q(r)
                        ? function () {
                              if (this.originalEvent)
                                  return r(this.originalEvent);
                          }
                        : function () {
                              if (this.originalEvent)
                                  return this.originalEvent[e];
                          },
                    set: function (i) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: i,
                        });
                    },
                });
            },
            fix: function (e) {
                return e[u.expando] ? e : new u.Event(e);
            },
            special: {
                load: { noBubble: !0 },
                click: {
                    setup: function (e) {
                        var r = this || e;
                        return (
                            Ke.test(r.type) &&
                                r.click &&
                                bt(r, "input") &&
                                he(r, "click", !0),
                            !1
                        );
                    },
                    trigger: function (e) {
                        var r = this || e;
                        return (
                            Ke.test(r.type) &&
                                r.click &&
                                bt(r, "input") &&
                                he(r, "click"),
                            !0
                        );
                    },
                    _default: function (e) {
                        var r = e.target;
                        return (
                            (Ke.test(r.type) &&
                                r.click &&
                                bt(r, "input") &&
                                J.get(r, "click")) ||
                            bt(r, "a")
                        );
                    },
                },
                beforeunload: {
                    postDispatch: function (e) {
                        e.result !== void 0 &&
                            e.originalEvent &&
                            (e.originalEvent.returnValue = e.result);
                    },
                },
            },
        };
        function he(e, r, i) {
            if (!i) {
                J.get(e, r) === void 0 && u.event.add(e, r, Ge);
                return;
            }
            J.set(e, r, !1),
                u.event.add(e, r, {
                    namespace: !1,
                    handler: function (a) {
                        var l,
                            c = J.get(this, r);
                        if (a.isTrigger & 1 && this[r]) {
                            if (c)
                                (u.event.special[r] || {}).delegateType &&
                                    a.stopPropagation();
                            else if (
                                ((c = S.call(arguments)),
                                J.set(this, r, c),
                                this[r](),
                                (l = J.get(this, r)),
                                J.set(this, r, !1),
                                c !== l)
                            )
                                return (
                                    a.stopImmediatePropagation(),
                                    a.preventDefault(),
                                    l
                                );
                        } else
                            c &&
                                (J.set(
                                    this,
                                    r,
                                    u.event.trigger(c[0], c.slice(1), this)
                                ),
                                a.stopPropagation(),
                                (a.isImmediatePropagationStopped = Ge));
                    },
                });
        }
        (u.removeEvent = function (e, r, i) {
            e.removeEventListener && e.removeEventListener(r, i);
        }),
            (u.Event = function (e, r) {
                if (!(this instanceof u.Event)) return new u.Event(e, r);
                e && e.type
                    ? ((this.originalEvent = e),
                      (this.type = e.type),
                      (this.isDefaultPrevented =
                          e.defaultPrevented ||
                          (e.defaultPrevented === void 0 &&
                              e.returnValue === !1)
                              ? Ge
                              : te),
                      (this.target =
                          e.target && e.target.nodeType === 3
                              ? e.target.parentNode
                              : e.target),
                      (this.currentTarget = e.currentTarget),
                      (this.relatedTarget = e.relatedTarget))
                    : (this.type = e),
                    r && u.extend(this, r),
                    (this.timeStamp = (e && e.timeStamp) || Date.now()),
                    (this[u.expando] = !0);
            }),
            (u.Event.prototype = {
                constructor: u.Event,
                isDefaultPrevented: te,
                isPropagationStopped: te,
                isImmediatePropagationStopped: te,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    (this.isDefaultPrevented = Ge),
                        e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    (this.isPropagationStopped = Ge),
                        e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    (this.isImmediatePropagationStopped = Ge),
                        e && !this.isSimulated && e.stopImmediatePropagation(),
                        this.stopPropagation();
                },
            }),
            u.each(
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
                    code: !0,
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
                    which: !0,
                },
                u.event.addProp
            ),
            u.each({ focus: "focusin", blur: "focusout" }, function (e, r) {
                function i(a) {
                    if (K.documentMode) {
                        var l = J.get(this, "handle"),
                            c = u.event.fix(a);
                        (c.type = a.type === "focusin" ? "focus" : "blur"),
                            (c.isSimulated = !0),
                            l(a),
                            c.target === c.currentTarget && l(c);
                    } else u.event.simulate(r, a.target, u.event.fix(a));
                }
                (u.event.special[e] = {
                    setup: function () {
                        var a;
                        if ((he(this, e, !0), K.documentMode))
                            (a = J.get(this, r)),
                                a || this.addEventListener(r, i),
                                J.set(this, r, (a || 0) + 1);
                        else return !1;
                    },
                    trigger: function () {
                        return he(this, e), !0;
                    },
                    teardown: function () {
                        var a;
                        if (K.documentMode)
                            (a = J.get(this, r) - 1),
                                a
                                    ? J.set(this, r, a)
                                    : (this.removeEventListener(r, i),
                                      J.remove(this, r));
                        else return !1;
                    },
                    _default: function (a) {
                        return J.get(a.target, e);
                    },
                    delegateType: r,
                }),
                    (u.event.special[r] = {
                        setup: function () {
                            var a = this.ownerDocument || this.document || this,
                                l = K.documentMode ? this : a,
                                c = J.get(l, r);
                            c ||
                                (K.documentMode
                                    ? this.addEventListener(r, i)
                                    : a.addEventListener(e, i, !0)),
                                J.set(l, r, (c || 0) + 1);
                        },
                        teardown: function () {
                            var a = this.ownerDocument || this.document || this,
                                l = K.documentMode ? this : a,
                                c = J.get(l, r) - 1;
                            c
                                ? J.set(l, r, c)
                                : (K.documentMode
                                      ? this.removeEventListener(r, i)
                                      : a.removeEventListener(e, i, !0),
                                  J.remove(l, r));
                        },
                    });
            }),
            u.each(
                {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout",
                },
                function (e, r) {
                    u.event.special[e] = {
                        delegateType: r,
                        bindType: r,
                        handle: function (i) {
                            var a,
                                l = this,
                                c = i.relatedTarget,
                                p = i.handleObj;
                            return (
                                (!c || (c !== l && !u.contains(l, c))) &&
                                    ((i.type = p.origType),
                                    (a = p.handler.apply(this, arguments)),
                                    (i.type = r)),
                                a
                            );
                        },
                    };
                }
            ),
            u.fn.extend({
                on: function (e, r, i, a) {
                    return wr(this, e, r, i, a);
                },
                one: function (e, r, i, a) {
                    return wr(this, e, r, i, a, 1);
                },
                off: function (e, r, i) {
                    var a, l;
                    if (e && e.preventDefault && e.handleObj)
                        return (
                            (a = e.handleObj),
                            u(e.delegateTarget).off(
                                a.namespace
                                    ? a.origType + "." + a.namespace
                                    : a.origType,
                                a.selector,
                                a.handler
                            ),
                            this
                        );
                    if (typeof e == "object") {
                        for (l in e) this.off(l, r, e[l]);
                        return this;
                    }
                    return (
                        (r === !1 || typeof r == "function") &&
                            ((i = r), (r = void 0)),
                        i === !1 && (i = te),
                        this.each(function () {
                            u.event.remove(this, e, i, r);
                        })
                    );
                },
            });
        var zn = /<script|<style|<link/i,
            Ai = /checked\s*(?:[^=]|=\s*.checked.)/i,
            _s = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function fn(e, r) {
            return (
                (bt(e, "table") &&
                    bt(r.nodeType !== 11 ? r : r.firstChild, "tr") &&
                    u(e).children("tbody")[0]) ||
                e
            );
        }
        function Sr(e) {
            return (
                (e.type = (e.getAttribute("type") !== null) + "/" + e.type), e
            );
        }
        function Tn(e) {
            return (
                (e.type || "").slice(0, 5) === "true/"
                    ? (e.type = e.type.slice(5))
                    : e.removeAttribute("type"),
                e
            );
        }
        function Ti(e, r) {
            var i, a, l, c, p, b, y;
            if (r.nodeType === 1) {
                if (J.hasData(e) && ((c = J.get(e)), (y = c.events), y)) {
                    J.remove(r, "handle events");
                    for (l in y)
                        for (i = 0, a = y[l].length; i < a; i++)
                            u.event.add(r, l, y[l][i]);
                }
                Kt.hasData(e) &&
                    ((p = Kt.access(e)), (b = u.extend({}, p)), Kt.set(r, b));
            }
        }
        function Ci(e, r) {
            var i = r.nodeName.toLowerCase();
            i === "input" && Ke.test(e.type)
                ? (r.checked = e.checked)
                : (i === "input" || i === "textarea") &&
                  (r.defaultValue = e.defaultValue);
        }
        function Xe(e, r, i, a) {
            r = O(r);
            var l,
                c,
                p,
                b,
                y,
                T,
                L = 0,
                R = e.length,
                D = R - 1,
                $ = r[0],
                Q = q($);
            if (
                Q ||
                (R > 1 && typeof $ == "string" && !H.checkClone && Ai.test($))
            )
                return e.each(function (ot) {
                    var ct = e.eq(ot);
                    Q && (r[0] = $.call(this, ot, ct.html())), Xe(ct, r, i, a);
                });
            if (
                R &&
                ((l = Ye(r, e[0].ownerDocument, !1, e, a)),
                (c = l.firstChild),
                l.childNodes.length === 1 && (l = c),
                c || a)
            ) {
                for (p = u.map(Nt(l, "script"), Sr), b = p.length; L < R; L++)
                    (y = l),
                        L !== D &&
                            ((y = u.clone(y, !0, !0)),
                            b && u.merge(p, Nt(y, "script"))),
                        i.call(e[L], y, L);
                if (b)
                    for (
                        T = p[p.length - 1].ownerDocument, u.map(p, Tn), L = 0;
                        L < b;
                        L++
                    )
                        (y = p[L]),
                            Me.test(y.type || "") &&
                                !J.access(y, "globalEval") &&
                                u.contains(T, y) &&
                                (y.src &&
                                (y.type || "").toLowerCase() !== "module"
                                    ? u._evalUrl &&
                                      !y.noModule &&
                                      u._evalUrl(
                                          y.src,
                                          {
                                              nonce:
                                                  y.nonce ||
                                                  y.getAttribute("nonce"),
                                          },
                                          T
                                      )
                                    : Bt(y.textContent.replace(_s, ""), y, T));
            }
            return e;
        }
        function xr(e, r, i) {
            for (
                var a, l = r ? u.filter(r, e) : e, c = 0;
                (a = l[c]) != null;
                c++
            )
                !i && a.nodeType === 1 && u.cleanData(Nt(a)),
                    a.parentNode &&
                        (i && Yt(a) && An(Nt(a, "script")),
                        a.parentNode.removeChild(a));
            return e;
        }
        u.extend({
            htmlPrefilter: function (e) {
                return e;
            },
            clone: function (e, r, i) {
                var a,
                    l,
                    c,
                    p,
                    b = e.cloneNode(!0),
                    y = Yt(e);
                if (
                    !H.noCloneChecked &&
                    (e.nodeType === 1 || e.nodeType === 11) &&
                    !u.isXMLDoc(e)
                )
                    for (p = Nt(b), c = Nt(e), a = 0, l = c.length; a < l; a++)
                        Ci(c[a], p[a]);
                if (r)
                    if (i)
                        for (
                            c = c || Nt(e), p = p || Nt(b), a = 0, l = c.length;
                            a < l;
                            a++
                        )
                            Ti(c[a], p[a]);
                    else Ti(e, b);
                return (
                    (p = Nt(b, "script")),
                    p.length > 0 && An(p, !y && Nt(e, "script")),
                    b
                );
            },
            cleanData: function (e) {
                for (
                    var r, i, a, l = u.event.special, c = 0;
                    (i = e[c]) !== void 0;
                    c++
                )
                    if (Ue(i)) {
                        if ((r = i[J.expando])) {
                            if (r.events)
                                for (a in r.events)
                                    l[a]
                                        ? u.event.remove(i, a)
                                        : u.removeEvent(i, a, r.handle);
                            i[J.expando] = void 0;
                        }
                        i[Kt.expando] && (i[Kt.expando] = void 0);
                    }
            },
        }),
            u.fn.extend({
                detach: function (e) {
                    return xr(this, e, !0);
                },
                remove: function (e) {
                    return xr(this, e);
                },
                text: function (e) {
                    return Zt(
                        this,
                        function (r) {
                            return r === void 0
                                ? u.text(this)
                                : this.empty().each(function () {
                                      (this.nodeType === 1 ||
                                          this.nodeType === 11 ||
                                          this.nodeType === 9) &&
                                          (this.textContent = r);
                                  });
                        },
                        null,
                        e,
                        arguments.length
                    );
                },
                append: function () {
                    return Xe(this, arguments, function (e) {
                        if (
                            this.nodeType === 1 ||
                            this.nodeType === 11 ||
                            this.nodeType === 9
                        ) {
                            var r = fn(this, e);
                            r.appendChild(e);
                        }
                    });
                },
                prepend: function () {
                    return Xe(this, arguments, function (e) {
                        if (
                            this.nodeType === 1 ||
                            this.nodeType === 11 ||
                            this.nodeType === 9
                        ) {
                            var r = fn(this, e);
                            r.insertBefore(e, r.firstChild);
                        }
                    });
                },
                before: function () {
                    return Xe(this, arguments, function (e) {
                        this.parentNode &&
                            this.parentNode.insertBefore(e, this);
                    });
                },
                after: function () {
                    return Xe(this, arguments, function (e) {
                        this.parentNode &&
                            this.parentNode.insertBefore(e, this.nextSibling);
                    });
                },
                empty: function () {
                    for (var e, r = 0; (e = this[r]) != null; r++)
                        e.nodeType === 1 &&
                            (u.cleanData(Nt(e, !1)), (e.textContent = ""));
                    return this;
                },
                clone: function (e, r) {
                    return (
                        (e = e ?? !1),
                        (r = r ?? e),
                        this.map(function () {
                            return u.clone(this, e, r);
                        })
                    );
                },
                html: function (e) {
                    return Zt(
                        this,
                        function (r) {
                            var i = this[0] || {},
                                a = 0,
                                l = this.length;
                            if (r === void 0 && i.nodeType === 1)
                                return i.innerHTML;
                            if (
                                typeof r == "string" &&
                                !zn.test(r) &&
                                !Gt[(fe.exec(r) || ["", ""])[1].toLowerCase()]
                            ) {
                                r = u.htmlPrefilter(r);
                                try {
                                    for (; a < l; a++)
                                        (i = this[a] || {}),
                                            i.nodeType === 1 &&
                                                (u.cleanData(Nt(i, !1)),
                                                (i.innerHTML = r));
                                    i = 0;
                                } catch {}
                            }
                            i && this.empty().append(r);
                        },
                        null,
                        e,
                        arguments.length
                    );
                },
                replaceWith: function () {
                    var e = [];
                    return Xe(
                        this,
                        arguments,
                        function (r) {
                            var i = this.parentNode;
                            u.inArray(this, e) < 0 &&
                                (u.cleanData(Nt(this)),
                                i && i.replaceChild(r, this));
                        },
                        e
                    );
                },
            }),
            u.each(
                {
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith",
                },
                function (e, r) {
                    u.fn[e] = function (i) {
                        for (
                            var a, l = [], c = u(i), p = c.length - 1, b = 0;
                            b <= p;
                            b++
                        )
                            (a = b === p ? this : this.clone(!0)),
                                u(c[b])[r](a),
                                I.apply(l, a.get());
                        return this.pushStack(l);
                    };
                }
            );
        var kr = new RegExp("^(" + Cr + ")(?!px)[a-z%]+$", "i"),
            Or = /^--/,
            Kn = function (e) {
                var r = e.ownerDocument.defaultView;
                return (!r || !r.opener) && (r = d), r.getComputedStyle(e);
            },
            Dr = function (e, r, i) {
                var a,
                    l,
                    c = {};
                for (l in r) (c[l] = e.style[l]), (e.style[l] = r[l]);
                a = i.call(e);
                for (l in r) e.style[l] = c[l];
                return a;
            },
            hn = new RegExp(Ee.join("|"), "i");
        (function () {
            function e() {
                if (T) {
                    (y.style.cssText =
                        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                        (T.style.cssText =
                            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                        Fe.appendChild(y).appendChild(T);
                    var L = d.getComputedStyle(T);
                    (i = L.top !== "1%"),
                        (b = r(L.marginLeft) === 12),
                        (T.style.right = "60%"),
                        (c = r(L.right) === 36),
                        (a = r(L.width) === 36),
                        (T.style.position = "absolute"),
                        (l = r(T.offsetWidth / 3) === 12),
                        Fe.removeChild(y),
                        (T = null);
                }
            }
            function r(L) {
                return Math.round(parseFloat(L));
            }
            var i,
                a,
                l,
                c,
                p,
                b,
                y = K.createElement("div"),
                T = K.createElement("div");
            T.style &&
                ((T.style.backgroundClip = "content-box"),
                (T.cloneNode(!0).style.backgroundClip = ""),
                (H.clearCloneStyle = T.style.backgroundClip === "content-box"),
                u.extend(H, {
                    boxSizingReliable: function () {
                        return e(), a;
                    },
                    pixelBoxStyles: function () {
                        return e(), c;
                    },
                    pixelPosition: function () {
                        return e(), i;
                    },
                    reliableMarginLeft: function () {
                        return e(), b;
                    },
                    scrollboxSize: function () {
                        return e(), l;
                    },
                    reliableTrDimensions: function () {
                        var L, R, D, $;
                        return (
                            p == null &&
                                ((L = K.createElement("table")),
                                (R = K.createElement("tr")),
                                (D = K.createElement("div")),
                                (L.style.cssText =
                                    "position:absolute;left:-11111px;border-collapse:separate"),
                                (R.style.cssText =
                                    "box-sizing:content-box;border:1px solid"),
                                (R.style.height = "1px"),
                                (D.style.height = "9px"),
                                (D.style.display = "block"),
                                Fe.appendChild(L).appendChild(R).appendChild(D),
                                ($ = d.getComputedStyle(R)),
                                (p =
                                    parseInt($.height, 10) +
                                        parseInt($.borderTopWidth, 10) +
                                        parseInt($.borderBottomWidth, 10) ===
                                    R.offsetHeight),
                                Fe.removeChild(L)),
                            p
                        );
                    },
                }));
        })();
        function Cn(e, r, i) {
            var a,
                l,
                c,
                p,
                b = Or.test(r),
                y = e.style;
            return (
                (i = i || Kn(e)),
                i &&
                    ((p = i.getPropertyValue(r) || i[r]),
                    b && p && (p = p.replace(Pe, "$1") || void 0),
                    p === "" && !Yt(e) && (p = u.style(e, r)),
                    !H.pixelBoxStyles() &&
                        kr.test(p) &&
                        hn.test(r) &&
                        ((a = y.width),
                        (l = y.minWidth),
                        (c = y.maxWidth),
                        (y.minWidth = y.maxWidth = y.width = p),
                        (p = i.width),
                        (y.width = a),
                        (y.minWidth = l),
                        (y.maxWidth = c))),
                p !== void 0 ? p + "" : p
            );
        }
        function wi(e, r) {
            return {
                get: function () {
                    if (e()) {
                        delete this.get;
                        return;
                    }
                    return (this.get = r).apply(this, arguments);
                },
            };
        }
        var Nr = ["Webkit", "Moz", "ms"],
            Si = K.createElement("div").style,
            Yn = {};
        function Gn(e) {
            for (var r = e[0].toUpperCase() + e.slice(1), i = Nr.length; i--; )
                if (((e = Nr[i] + r), e in Si)) return e;
        }
        function Lr(e) {
            var r = u.cssProps[e] || Yn[e];
            return r || (e in Si ? e : (Yn[e] = Gn(e) || e));
        }
        var Rr = /^(none|table(?!-c[ea]).+)/,
            vs = {
                position: "absolute",
                visibility: "hidden",
                display: "block",
            },
            wn = { letterSpacing: "0", fontWeight: "400" };
        function xi(e, r, i) {
            var a = ln.exec(r);
            return a ? Math.max(0, a[2] - (i || 0)) + (a[3] || "px") : r;
        }
        function Xn(e, r, i, a, l, c) {
            var p = r === "width" ? 1 : 0,
                b = 0,
                y = 0,
                T = 0;
            if (i === (a ? "border" : "content")) return 0;
            for (; p < 4; p += 2)
                i === "margin" && (T += u.css(e, i + Ee[p], !0, l)),
                    a
                        ? (i === "content" &&
                              (y -= u.css(e, "padding" + Ee[p], !0, l)),
                          i !== "margin" &&
                              (y -= u.css(
                                  e,
                                  "border" + Ee[p] + "Width",
                                  !0,
                                  l
                              )))
                        : ((y += u.css(e, "padding" + Ee[p], !0, l)),
                          i !== "padding"
                              ? (y += u.css(
                                    e,
                                    "border" + Ee[p] + "Width",
                                    !0,
                                    l
                                ))
                              : (b += u.css(
                                    e,
                                    "border" + Ee[p] + "Width",
                                    !0,
                                    l
                                )));
            return (
                !a &&
                    c >= 0 &&
                    (y +=
                        Math.max(
                            0,
                            Math.ceil(
                                e["offset" + r[0].toUpperCase() + r.slice(1)] -
                                    c -
                                    y -
                                    b -
                                    0.5
                            )
                        ) || 0),
                y + T
            );
        }
        function Jn(e, r, i) {
            var a = Kn(e),
                l = !H.boxSizingReliable() || i,
                c = l && u.css(e, "boxSizing", !1, a) === "border-box",
                p = c,
                b = Cn(e, r, a),
                y = "offset" + r[0].toUpperCase() + r.slice(1);
            if (kr.test(b)) {
                if (!i) return b;
                b = "auto";
            }
            return (
                ((!H.boxSizingReliable() && c) ||
                    (!H.reliableTrDimensions() && bt(e, "tr")) ||
                    b === "auto" ||
                    (!parseFloat(b) &&
                        u.css(e, "display", !1, a) === "inline")) &&
                    e.getClientRects().length &&
                    ((c = u.css(e, "boxSizing", !1, a) === "border-box"),
                    (p = y in e),
                    p && (b = e[y])),
                (b = parseFloat(b) || 0),
                b + Xn(e, r, i || (c ? "border" : "content"), p, a, b) + "px"
            );
        }
        u.extend({
            cssHooks: {
                opacity: {
                    get: function (e, r) {
                        if (r) {
                            var i = Cn(e, "opacity");
                            return i === "" ? "1" : i;
                        }
                    },
                },
            },
            cssNumber: {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageSlice: !0,
                columnCount: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                scale: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
            },
            cssProps: {},
            style: function (e, r, i, a) {
                if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
                    var l,
                        c,
                        p,
                        b = ce(r),
                        y = Or.test(r),
                        T = e.style;
                    if (
                        (y || (r = Lr(b)),
                        (p = u.cssHooks[r] || u.cssHooks[b]),
                        i !== void 0)
                    ) {
                        if (
                            ((c = typeof i),
                            c === "string" &&
                                (l = ln.exec(i)) &&
                                l[1] &&
                                ((i = oe(e, r, l)), (c = "number")),
                            i == null || i !== i)
                        )
                            return;
                        c === "number" &&
                            !y &&
                            (i += (l && l[3]) || (u.cssNumber[b] ? "" : "px")),
                            !H.clearCloneStyle &&
                                i === "" &&
                                r.indexOf("background") === 0 &&
                                (T[r] = "inherit"),
                            (!p ||
                                !("set" in p) ||
                                (i = p.set(e, i, a)) !== void 0) &&
                                (y ? T.setProperty(r, i) : (T[r] = i));
                    } else
                        return p &&
                            "get" in p &&
                            (l = p.get(e, !1, a)) !== void 0
                            ? l
                            : T[r];
                }
            },
            css: function (e, r, i, a) {
                var l,
                    c,
                    p,
                    b = ce(r),
                    y = Or.test(r);
                return (
                    y || (r = Lr(b)),
                    (p = u.cssHooks[r] || u.cssHooks[b]),
                    p && "get" in p && (l = p.get(e, !0, i)),
                    l === void 0 && (l = Cn(e, r, a)),
                    l === "normal" && r in wn && (l = wn[r]),
                    i === "" || i
                        ? ((c = parseFloat(l)),
                          i === !0 || isFinite(c) ? c || 0 : l)
                        : l
                );
            },
        }),
            u.each(["height", "width"], function (e, r) {
                u.cssHooks[r] = {
                    get: function (i, a, l) {
                        if (a)
                            return Rr.test(u.css(i, "display")) &&
                                (!i.getClientRects().length ||
                                    !i.getBoundingClientRect().width)
                                ? Dr(i, vs, function () {
                                      return Jn(i, r, l);
                                  })
                                : Jn(i, r, l);
                    },
                    set: function (i, a, l) {
                        var c,
                            p = Kn(i),
                            b = !H.scrollboxSize() && p.position === "absolute",
                            y = b || l,
                            T =
                                y &&
                                u.css(i, "boxSizing", !1, p) === "border-box",
                            L = l ? Xn(i, r, l, T, p) : 0;
                        return (
                            T &&
                                b &&
                                (L -= Math.ceil(
                                    i[
                                        "offset" +
                                            r[0].toUpperCase() +
                                            r.slice(1)
                                    ] -
                                        parseFloat(p[r]) -
                                        Xn(i, r, "border", !1, p) -
                                        0.5
                                )),
                            L &&
                                (c = ln.exec(a)) &&
                                (c[3] || "px") !== "px" &&
                                ((i.style[r] = a), (a = u.css(i, r))),
                            xi(i, a, L)
                        );
                    },
                };
            }),
            (u.cssHooks.marginLeft = wi(H.reliableMarginLeft, function (e, r) {
                if (r)
                    return (
                        (parseFloat(Cn(e, "marginLeft")) ||
                            e.getBoundingClientRect().left -
                                Dr(e, { marginLeft: 0 }, function () {
                                    return e.getBoundingClientRect().left;
                                })) + "px"
                    );
            })),
            u.each(
                { margin: "", padding: "", border: "Width" },
                function (e, r) {
                    (u.cssHooks[e + r] = {
                        expand: function (i) {
                            for (
                                var a = 0,
                                    l = {},
                                    c =
                                        typeof i == "string"
                                            ? i.split(" ")
                                            : [i];
                                a < 4;
                                a++
                            )
                                l[e + Ee[a] + r] = c[a] || c[a - 2] || c[0];
                            return l;
                        },
                    }),
                        e !== "margin" && (u.cssHooks[e + r].set = xi);
                }
            ),
            u.fn.extend({
                css: function (e, r) {
                    return Zt(
                        this,
                        function (i, a, l) {
                            var c,
                                p,
                                b = {},
                                y = 0;
                            if (Array.isArray(a)) {
                                for (c = Kn(i), p = a.length; y < p; y++)
                                    b[a[y]] = u.css(i, a[y], !1, c);
                                return b;
                            }
                            return l !== void 0
                                ? u.style(i, a, l)
                                : u.css(i, a);
                        },
                        e,
                        r,
                        arguments.length > 1
                    );
                },
            });
        function qt(e, r, i, a, l) {
            return new qt.prototype.init(e, r, i, a, l);
        }
        (u.Tween = qt),
            (qt.prototype = {
                constructor: qt,
                init: function (e, r, i, a, l, c) {
                    (this.elem = e),
                        (this.prop = i),
                        (this.easing = l || u.easing._default),
                        (this.options = r),
                        (this.start = this.now = this.cur()),
                        (this.end = a),
                        (this.unit = c || (u.cssNumber[i] ? "" : "px"));
                },
                cur: function () {
                    var e = qt.propHooks[this.prop];
                    return e && e.get
                        ? e.get(this)
                        : qt.propHooks._default.get(this);
                },
                run: function (e) {
                    var r,
                        i = qt.propHooks[this.prop];
                    return (
                        this.options.duration
                            ? (this.pos = r =
                                  u.easing[this.easing](
                                      e,
                                      this.options.duration * e,
                                      0,
                                      1,
                                      this.options.duration
                                  ))
                            : (this.pos = r = e),
                        (this.now = (this.end - this.start) * r + this.start),
                        this.options.step &&
                            this.options.step.call(this.elem, this.now, this),
                        i && i.set
                            ? i.set(this)
                            : qt.propHooks._default.set(this),
                        this
                    );
                },
            }),
            (qt.prototype.init.prototype = qt.prototype),
            (qt.propHooks = {
                _default: {
                    get: function (e) {
                        var r;
                        return e.elem.nodeType !== 1 ||
                            (e.elem[e.prop] != null &&
                                e.elem.style[e.prop] == null)
                            ? e.elem[e.prop]
                            : ((r = u.css(e.elem, e.prop, "")),
                              !r || r === "auto" ? 0 : r);
                    },
                    set: function (e) {
                        u.fx.step[e.prop]
                            ? u.fx.step[e.prop](e)
                            : e.elem.nodeType === 1 &&
                              (u.cssHooks[e.prop] ||
                                  e.elem.style[Lr(e.prop)] != null)
                            ? u.style(e.elem, e.prop, e.now + e.unit)
                            : (e.elem[e.prop] = e.now);
                    },
                },
            }),
            (qt.propHooks.scrollTop = qt.propHooks.scrollLeft =
                {
                    set: function (e) {
                        e.elem.nodeType &&
                            e.elem.parentNode &&
                            (e.elem[e.prop] = e.now);
                    },
                }),
            (u.easing = {
                linear: function (e) {
                    return e;
                },
                swing: function (e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2;
                },
                _default: "swing",
            }),
            (u.fx = qt.prototype.init),
            (u.fx.step = {});
        var dn,
            Qn,
            Pr = /^(?:toggle|show|hide)$/,
            ki = /queueHooks$/;
        function Je() {
            Qn &&
                (K.hidden === !1 && d.requestAnimationFrame
                    ? d.requestAnimationFrame(Je)
                    : d.setTimeout(Je, u.fx.interval),
                u.fx.tick());
        }
        function Zn() {
            return (
                d.setTimeout(function () {
                    dn = void 0;
                }),
                (dn = Date.now())
            );
        }
        function tr(e, r) {
            var i,
                a = 0,
                l = { height: e };
            for (r = r ? 1 : 0; a < 4; a += 2 - r)
                (i = Ee[a]), (l["margin" + i] = l["padding" + i] = e);
            return r && (l.opacity = l.width = e), l;
        }
        function Ir(e, r, i) {
            for (
                var a,
                    l = (ue.tweeners[r] || []).concat(ue.tweeners["*"]),
                    c = 0,
                    p = l.length;
                c < p;
                c++
            )
                if ((a = l[c].call(i, r, e))) return a;
        }
        function Es(e, r, i) {
            var a,
                l,
                c,
                p,
                b,
                y,
                T,
                L,
                R = "width" in r || "height" in r,
                D = this,
                $ = {},
                Q = e.style,
                ot = e.nodeType && ye(e),
                ct = J.get(e, "fxshow");
            i.queue ||
                ((p = u._queueHooks(e, "fx")),
                p.unqueued == null &&
                    ((p.unqueued = 0),
                    (b = p.empty.fire),
                    (p.empty.fire = function () {
                        p.unqueued || b();
                    })),
                p.unqueued++,
                D.always(function () {
                    D.always(function () {
                        p.unqueued--, u.queue(e, "fx").length || p.empty.fire();
                    });
                }));
            for (a in r)
                if (((l = r[a]), Pr.test(l))) {
                    if (
                        (delete r[a],
                        (c = c || l === "toggle"),
                        l === (ot ? "hide" : "show"))
                    )
                        if (l === "show" && ct && ct[a] !== void 0) ot = !0;
                        else continue;
                    $[a] = (ct && ct[a]) || u.style(e, a);
                }
            if (((y = !u.isEmptyObject(r)), !(!y && u.isEmptyObject($)))) {
                R &&
                    e.nodeType === 1 &&
                    ((i.overflow = [Q.overflow, Q.overflowX, Q.overflowY]),
                    (T = ct && ct.display),
                    T == null && (T = J.get(e, "display")),
                    (L = u.css(e, "display")),
                    L === "none" &&
                        (T
                            ? (L = T)
                            : (cn([e], !0),
                              (T = e.style.display || T),
                              (L = u.css(e, "display")),
                              cn([e]))),
                    (L === "inline" || (L === "inline-block" && T != null)) &&
                        u.css(e, "float") === "none" &&
                        (y ||
                            (D.done(function () {
                                Q.display = T;
                            }),
                            T == null &&
                                ((L = Q.display), (T = L === "none" ? "" : L))),
                        (Q.display = "inline-block"))),
                    i.overflow &&
                        ((Q.overflow = "hidden"),
                        D.always(function () {
                            (Q.overflow = i.overflow[0]),
                                (Q.overflowX = i.overflow[1]),
                                (Q.overflowY = i.overflow[2]);
                        })),
                    (y = !1);
                for (a in $)
                    y ||
                        (ct
                            ? "hidden" in ct && (ot = ct.hidden)
                            : (ct = J.access(e, "fxshow", { display: T })),
                        c && (ct.hidden = !ot),
                        ot && cn([e], !0),
                        D.done(function () {
                            ot || cn([e]), J.remove(e, "fxshow");
                            for (a in $) u.style(e, a, $[a]);
                        })),
                        (y = Ir(ot ? ct[a] : 0, a, D)),
                        a in ct ||
                            ((ct[a] = y.start),
                            ot && ((y.end = y.start), (y.start = 0)));
            }
        }
        function ys(e, r) {
            var i, a, l, c, p;
            for (i in e)
                if (
                    ((a = ce(i)),
                    (l = r[a]),
                    (c = e[i]),
                    Array.isArray(c) && ((l = c[1]), (c = e[i] = c[0])),
                    i !== a && ((e[a] = c), delete e[i]),
                    (p = u.cssHooks[a]),
                    p && "expand" in p)
                ) {
                    (c = p.expand(c)), delete e[a];
                    for (i in c) i in e || ((e[i] = c[i]), (r[i] = l));
                } else r[a] = l;
        }
        function ue(e, r, i) {
            var a,
                l,
                c = 0,
                p = ue.prefilters.length,
                b = u.Deferred().always(function () {
                    delete y.elem;
                }),
                y = function () {
                    if (l) return !1;
                    for (
                        var R = dn || Zn(),
                            D = Math.max(0, T.startTime + T.duration - R),
                            $ = D / T.duration || 0,
                            Q = 1 - $,
                            ot = 0,
                            ct = T.tweens.length;
                        ot < ct;
                        ot++
                    )
                        T.tweens[ot].run(Q);
                    return (
                        b.notifyWith(e, [T, Q, D]),
                        Q < 1 && ct
                            ? D
                            : (ct || b.notifyWith(e, [T, 1, 0]),
                              b.resolveWith(e, [T]),
                              !1)
                    );
                },
                T = b.promise({
                    elem: e,
                    props: u.extend({}, r),
                    opts: u.extend(
                        !0,
                        { specialEasing: {}, easing: u.easing._default },
                        i
                    ),
                    originalProperties: r,
                    originalOptions: i,
                    startTime: dn || Zn(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function (R, D) {
                        var $ = u.Tween(
                            e,
                            T.opts,
                            R,
                            D,
                            T.opts.specialEasing[R] || T.opts.easing
                        );
                        return T.tweens.push($), $;
                    },
                    stop: function (R) {
                        var D = 0,
                            $ = R ? T.tweens.length : 0;
                        if (l) return this;
                        for (l = !0; D < $; D++) T.tweens[D].run(1);
                        return (
                            R
                                ? (b.notifyWith(e, [T, 1, 0]),
                                  b.resolveWith(e, [T, R]))
                                : b.rejectWith(e, [T, R]),
                            this
                        );
                    },
                }),
                L = T.props;
            for (ys(L, T.opts.specialEasing); c < p; c++)
                if (((a = ue.prefilters[c].call(T, e, L, T.opts)), a))
                    return (
                        q(a.stop) &&
                            (u._queueHooks(T.elem, T.opts.queue).stop =
                                a.stop.bind(a)),
                        a
                    );
            return (
                u.map(L, Ir, T),
                q(T.opts.start) && T.opts.start.call(e, T),
                T.progress(T.opts.progress)
                    .done(T.opts.done, T.opts.complete)
                    .fail(T.opts.fail)
                    .always(T.opts.always),
                u.fx.timer(
                    u.extend(y, { elem: e, anim: T, queue: T.opts.queue })
                ),
                T
            );
        }
        (u.Animation = u.extend(ue, {
            tweeners: {
                "*": [
                    function (e, r) {
                        var i = this.createTween(e, r);
                        return oe(i.elem, e, ln.exec(r), i), i;
                    },
                ],
            },
            tweener: function (e, r) {
                q(e) ? ((r = e), (e = ["*"])) : (e = e.match(_e));
                for (var i, a = 0, l = e.length; a < l; a++)
                    (i = e[a]),
                        (ue.tweeners[i] = ue.tweeners[i] || []),
                        ue.tweeners[i].unshift(r);
            },
            prefilters: [Es],
            prefilter: function (e, r) {
                r ? ue.prefilters.unshift(e) : ue.prefilters.push(e);
            },
        })),
            (u.speed = function (e, r, i) {
                var a =
                    e && typeof e == "object"
                        ? u.extend({}, e)
                        : {
                              complete: i || (!i && r) || (q(e) && e),
                              duration: e,
                              easing: (i && r) || (r && !q(r) && r),
                          };
                return (
                    u.fx.off
                        ? (a.duration = 0)
                        : typeof a.duration != "number" &&
                          (a.duration in u.fx.speeds
                              ? (a.duration = u.fx.speeds[a.duration])
                              : (a.duration = u.fx.speeds._default)),
                    (a.queue == null || a.queue === !0) && (a.queue = "fx"),
                    (a.old = a.complete),
                    (a.complete = function () {
                        q(a.old) && a.old.call(this),
                            a.queue && u.dequeue(this, a.queue);
                    }),
                    a
                );
            }),
            u.fn.extend({
                fadeTo: function (e, r, i, a) {
                    return this.filter(ye)
                        .css("opacity", 0)
                        .show()
                        .end()
                        .animate({ opacity: r }, e, i, a);
                },
                animate: function (e, r, i, a) {
                    var l = u.isEmptyObject(e),
                        c = u.speed(r, i, a),
                        p = function () {
                            var b = ue(this, u.extend({}, e), c);
                            (l || J.get(this, "finish")) && b.stop(!0);
                        };
                    return (
                        (p.finish = p),
                        l || c.queue === !1
                            ? this.each(p)
                            : this.queue(c.queue, p)
                    );
                },
                stop: function (e, r, i) {
                    var a = function (l) {
                        var c = l.stop;
                        delete l.stop, c(i);
                    };
                    return (
                        typeof e != "string" &&
                            ((i = r), (r = e), (e = void 0)),
                        r && this.queue(e || "fx", []),
                        this.each(function () {
                            var l = !0,
                                c = e != null && e + "queueHooks",
                                p = u.timers,
                                b = J.get(this);
                            if (c) b[c] && b[c].stop && a(b[c]);
                            else
                                for (c in b)
                                    b[c] && b[c].stop && ki.test(c) && a(b[c]);
                            for (c = p.length; c--; )
                                p[c].elem === this &&
                                    (e == null || p[c].queue === e) &&
                                    (p[c].anim.stop(i),
                                    (l = !1),
                                    p.splice(c, 1));
                            (l || !i) && u.dequeue(this, e);
                        })
                    );
                },
                finish: function (e) {
                    return (
                        e !== !1 && (e = e || "fx"),
                        this.each(function () {
                            var r,
                                i = J.get(this),
                                a = i[e + "queue"],
                                l = i[e + "queueHooks"],
                                c = u.timers,
                                p = a ? a.length : 0;
                            for (
                                i.finish = !0,
                                    u.queue(this, e, []),
                                    l && l.stop && l.stop.call(this, !0),
                                    r = c.length;
                                r--;

                            )
                                c[r].elem === this &&
                                    c[r].queue === e &&
                                    (c[r].anim.stop(!0), c.splice(r, 1));
                            for (r = 0; r < p; r++)
                                a[r] && a[r].finish && a[r].finish.call(this);
                            delete i.finish;
                        })
                    );
                },
            }),
            u.each(["toggle", "show", "hide"], function (e, r) {
                var i = u.fn[r];
                u.fn[r] = function (a, l, c) {
                    return a == null || typeof a == "boolean"
                        ? i.apply(this, arguments)
                        : this.animate(tr(r, !0), a, l, c);
                };
            }),
            u.each(
                {
                    slideDown: tr("show"),
                    slideUp: tr("hide"),
                    slideToggle: tr("toggle"),
                    fadeIn: { opacity: "show" },
                    fadeOut: { opacity: "hide" },
                    fadeToggle: { opacity: "toggle" },
                },
                function (e, r) {
                    u.fn[e] = function (i, a, l) {
                        return this.animate(r, i, a, l);
                    };
                }
            ),
            (u.timers = []),
            (u.fx.tick = function () {
                var e,
                    r = 0,
                    i = u.timers;
                for (dn = Date.now(); r < i.length; r++)
                    (e = i[r]), !e() && i[r] === e && i.splice(r--, 1);
                i.length || u.fx.stop(), (dn = void 0);
            }),
            (u.fx.timer = function (e) {
                u.timers.push(e), u.fx.start();
            }),
            (u.fx.interval = 13),
            (u.fx.start = function () {
                Qn || ((Qn = !0), Je());
            }),
            (u.fx.stop = function () {
                Qn = null;
            }),
            (u.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (u.fn.delay = function (e, r) {
                return (
                    (e = (u.fx && u.fx.speeds[e]) || e),
                    (r = r || "fx"),
                    this.queue(r, function (i, a) {
                        var l = d.setTimeout(i, e);
                        a.stop = function () {
                            d.clearTimeout(l);
                        };
                    })
                );
            }),
            (function () {
                var e = K.createElement("input"),
                    r = K.createElement("select"),
                    i = r.appendChild(K.createElement("option"));
                (e.type = "checkbox"),
                    (H.checkOn = e.value !== ""),
                    (H.optSelected = i.selected),
                    (e = K.createElement("input")),
                    (e.value = "t"),
                    (e.type = "radio"),
                    (H.radioValue = e.value === "t");
            })();
        var Qe,
            Sn = u.expr.attrHandle;
        u.fn.extend({
            attr: function (e, r) {
                return Zt(this, u.attr, e, r, arguments.length > 1);
            },
            removeAttr: function (e) {
                return this.each(function () {
                    u.removeAttr(this, e);
                });
            },
        }),
            u.extend({
                attr: function (e, r, i) {
                    var a,
                        l,
                        c = e.nodeType;
                    if (!(c === 3 || c === 8 || c === 2)) {
                        if (typeof e.getAttribute > "u") return u.prop(e, r, i);
                        if (
                            ((c !== 1 || !u.isXMLDoc(e)) &&
                                (l =
                                    u.attrHooks[r.toLowerCase()] ||
                                    (u.expr.match.bool.test(r) ? Qe : void 0)),
                            i !== void 0)
                        ) {
                            if (i === null) {
                                u.removeAttr(e, r);
                                return;
                            }
                            return l &&
                                "set" in l &&
                                (a = l.set(e, i, r)) !== void 0
                                ? a
                                : (e.setAttribute(r, i + ""), i);
                        }
                        return l && "get" in l && (a = l.get(e, r)) !== null
                            ? a
                            : ((a = u.find.attr(e, r)), a ?? void 0);
                    }
                },
                attrHooks: {
                    type: {
                        set: function (e, r) {
                            if (
                                !H.radioValue &&
                                r === "radio" &&
                                bt(e, "input")
                            ) {
                                var i = e.value;
                                return (
                                    e.setAttribute("type", r),
                                    i && (e.value = i),
                                    r
                                );
                            }
                        },
                    },
                },
                removeAttr: function (e, r) {
                    var i,
                        a = 0,
                        l = r && r.match(_e);
                    if (l && e.nodeType === 1)
                        for (; (i = l[a++]); ) e.removeAttribute(i);
                },
            }),
            (Qe = {
                set: function (e, r, i) {
                    return (
                        r === !1 ? u.removeAttr(e, i) : e.setAttribute(i, i), i
                    );
                },
            }),
            u.each(u.expr.match.bool.source.match(/\w+/g), function (e, r) {
                var i = Sn[r] || u.find.attr;
                Sn[r] = function (a, l, c) {
                    var p,
                        b,
                        y = l.toLowerCase();
                    return (
                        c ||
                            ((b = Sn[y]),
                            (Sn[y] = p),
                            (p = i(a, l, c) != null ? y : null),
                            (Sn[y] = b)),
                        p
                    );
                };
            });
        var bs = /^(?:input|select|textarea|button)$/i,
            As = /^(?:a|area)$/i;
        u.fn.extend({
            prop: function (e, r) {
                return Zt(this, u.prop, e, r, arguments.length > 1);
            },
            removeProp: function (e) {
                return this.each(function () {
                    delete this[u.propFix[e] || e];
                });
            },
        }),
            u.extend({
                prop: function (e, r, i) {
                    var a,
                        l,
                        c = e.nodeType;
                    if (!(c === 3 || c === 8 || c === 2))
                        return (
                            (c !== 1 || !u.isXMLDoc(e)) &&
                                ((r = u.propFix[r] || r), (l = u.propHooks[r])),
                            i !== void 0
                                ? l &&
                                  "set" in l &&
                                  (a = l.set(e, i, r)) !== void 0
                                    ? a
                                    : (e[r] = i)
                                : l && "get" in l && (a = l.get(e, r)) !== null
                                ? a
                                : e[r]
                        );
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var r = u.find.attr(e, "tabindex");
                            return r
                                ? parseInt(r, 10)
                                : bs.test(e.nodeName) ||
                                  (As.test(e.nodeName) && e.href)
                                ? 0
                                : -1;
                        },
                    },
                },
                propFix: { for: "htmlFor", class: "className" },
            }),
            H.optSelected ||
                (u.propHooks.selected = {
                    get: function (e) {
                        var r = e.parentNode;
                        return (
                            r && r.parentNode && r.parentNode.selectedIndex,
                            null
                        );
                    },
                    set: function (e) {
                        var r = e.parentNode;
                        r &&
                            (r.selectedIndex,
                            r.parentNode && r.parentNode.selectedIndex);
                    },
                }),
            u.each(
                [
                    "tabIndex",
                    "readOnly",
                    "maxLength",
                    "cellSpacing",
                    "cellPadding",
                    "rowSpan",
                    "colSpan",
                    "useMap",
                    "frameBorder",
                    "contentEditable",
                ],
                function () {
                    u.propFix[this.toLowerCase()] = this;
                }
            );
        function Be(e) {
            var r = e.match(_e) || [];
            return r.join(" ");
        }
        function $e(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function er(e) {
            return Array.isArray(e)
                ? e
                : typeof e == "string"
                ? e.match(_e) || []
                : [];
        }
        u.fn.extend({
            addClass: function (e) {
                var r, i, a, l, c, p;
                return q(e)
                    ? this.each(function (b) {
                          u(this).addClass(e.call(this, b, $e(this)));
                      })
                    : ((r = er(e)),
                      r.length
                          ? this.each(function () {
                                if (
                                    ((a = $e(this)),
                                    (i =
                                        this.nodeType === 1 &&
                                        " " + Be(a) + " "),
                                    i)
                                ) {
                                    for (c = 0; c < r.length; c++)
                                        (l = r[c]),
                                            i.indexOf(" " + l + " ") < 0 &&
                                                (i += l + " ");
                                    (p = Be(i)),
                                        a !== p &&
                                            this.setAttribute("class", p);
                                }
                            })
                          : this);
            },
            removeClass: function (e) {
                var r, i, a, l, c, p;
                return q(e)
                    ? this.each(function (b) {
                          u(this).removeClass(e.call(this, b, $e(this)));
                      })
                    : arguments.length
                    ? ((r = er(e)),
                      r.length
                          ? this.each(function () {
                                if (
                                    ((a = $e(this)),
                                    (i =
                                        this.nodeType === 1 &&
                                        " " + Be(a) + " "),
                                    i)
                                ) {
                                    for (c = 0; c < r.length; c++)
                                        for (
                                            l = r[c];
                                            i.indexOf(" " + l + " ") > -1;

                                        )
                                            i = i.replace(" " + l + " ", " ");
                                    (p = Be(i)),
                                        a !== p &&
                                            this.setAttribute("class", p);
                                }
                            })
                          : this)
                    : this.attr("class", "");
            },
            toggleClass: function (e, r) {
                var i,
                    a,
                    l,
                    c,
                    p = typeof e,
                    b = p === "string" || Array.isArray(e);
                return q(e)
                    ? this.each(function (y) {
                          u(this).toggleClass(e.call(this, y, $e(this), r), r);
                      })
                    : typeof r == "boolean" && b
                    ? r
                        ? this.addClass(e)
                        : this.removeClass(e)
                    : ((i = er(e)),
                      this.each(function () {
                          if (b)
                              for (c = u(this), l = 0; l < i.length; l++)
                                  (a = i[l]),
                                      c.hasClass(a)
                                          ? c.removeClass(a)
                                          : c.addClass(a);
                          else
                              (e === void 0 || p === "boolean") &&
                                  ((a = $e(this)),
                                  a && J.set(this, "__className__", a),
                                  this.setAttribute &&
                                      this.setAttribute(
                                          "class",
                                          a || e === !1
                                              ? ""
                                              : J.get(this, "__className__") ||
                                                    ""
                                      ));
                      }));
            },
            hasClass: function (e) {
                var r,
                    i,
                    a = 0;
                for (r = " " + e + " "; (i = this[a++]); )
                    if (
                        i.nodeType === 1 &&
                        (" " + Be($e(i)) + " ").indexOf(r) > -1
                    )
                        return !0;
                return !1;
            },
        });
        var Ts = /\r/g;
        u.fn.extend({
            val: function (e) {
                var r,
                    i,
                    a,
                    l = this[0];
                return arguments.length
                    ? ((a = q(e)),
                      this.each(function (c) {
                          var p;
                          this.nodeType === 1 &&
                              (a
                                  ? (p = e.call(this, c, u(this).val()))
                                  : (p = e),
                              p == null
                                  ? (p = "")
                                  : typeof p == "number"
                                  ? (p += "")
                                  : Array.isArray(p) &&
                                    (p = u.map(p, function (b) {
                                        return b == null ? "" : b + "";
                                    })),
                              (r =
                                  u.valHooks[this.type] ||
                                  u.valHooks[this.nodeName.toLowerCase()]),
                              (!r ||
                                  !("set" in r) ||
                                  r.set(this, p, "value") === void 0) &&
                                  (this.value = p));
                      }))
                    : l
                    ? ((r =
                          u.valHooks[l.type] ||
                          u.valHooks[l.nodeName.toLowerCase()]),
                      r && "get" in r && (i = r.get(l, "value")) !== void 0
                          ? i
                          : ((i = l.value),
                            typeof i == "string" ? i.replace(Ts, "") : i ?? ""))
                    : void 0;
            },
        }),
            u.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var r = u.find.attr(e, "value");
                            return r ?? Be(u.text(e));
                        },
                    },
                    select: {
                        get: function (e) {
                            var r,
                                i,
                                a,
                                l = e.options,
                                c = e.selectedIndex,
                                p = e.type === "select-one",
                                b = p ? null : [],
                                y = p ? c + 1 : l.length;
                            for (c < 0 ? (a = y) : (a = p ? c : 0); a < y; a++)
                                if (
                                    ((i = l[a]),
                                    (i.selected || a === c) &&
                                        !i.disabled &&
                                        (!i.parentNode.disabled ||
                                            !bt(i.parentNode, "optgroup")))
                                ) {
                                    if (((r = u(i).val()), p)) return r;
                                    b.push(r);
                                }
                            return b;
                        },
                        set: function (e, r) {
                            for (
                                var i,
                                    a,
                                    l = e.options,
                                    c = u.makeArray(r),
                                    p = l.length;
                                p--;

                            )
                                (a = l[p]),
                                    (a.selected =
                                        u.inArray(u.valHooks.option.get(a), c) >
                                        -1) && (i = !0);
                            return i || (e.selectedIndex = -1), c;
                        },
                    },
                },
            }),
            u.each(["radio", "checkbox"], function () {
                (u.valHooks[this] = {
                    set: function (e, r) {
                        if (Array.isArray(r))
                            return (e.checked = u.inArray(u(e).val(), r) > -1);
                    },
                }),
                    H.checkOn ||
                        (u.valHooks[this].get = function (e) {
                            return e.getAttribute("value") === null
                                ? "on"
                                : e.value;
                        });
            });
        var pn = d.location,
            Oi = { guid: Date.now() },
            Fr = /\?/;
        u.parseXML = function (e) {
            var r, i;
            if (!e || typeof e != "string") return null;
            try {
                r = new d.DOMParser().parseFromString(e, "text/xml");
            } catch {}
            return (
                (i = r && r.getElementsByTagName("parsererror")[0]),
                (!r || i) &&
                    u.error(
                        "Invalid XML: " +
                            (i
                                ? u.map(i.childNodes, function (a) {
                                      return a.textContent;
                                  }).join(`
`)
                                : e)
                    ),
                r
            );
        };
        var Mr = /^(?:focusinfocus|focusoutblur)$/,
            Di = function (e) {
                e.stopPropagation();
            };
        u.extend(u.event, {
            trigger: function (e, r, i, a) {
                var l,
                    c,
                    p,
                    b,
                    y,
                    T,
                    L,
                    R,
                    D = [i || K],
                    $ = W.call(e, "type") ? e.type : e,
                    Q = W.call(e, "namespace") ? e.namespace.split(".") : [];
                if (
                    ((c = R = p = i = i || K),
                    !(i.nodeType === 3 || i.nodeType === 8) &&
                        !Mr.test($ + u.event.triggered) &&
                        ($.indexOf(".") > -1 &&
                            ((Q = $.split(".")), ($ = Q.shift()), Q.sort()),
                        (y = $.indexOf(":") < 0 && "on" + $),
                        (e = e[u.expando]
                            ? e
                            : new u.Event($, typeof e == "object" && e)),
                        (e.isTrigger = a ? 2 : 3),
                        (e.namespace = Q.join(".")),
                        (e.rnamespace = e.namespace
                            ? new RegExp(
                                  "(^|\\.)" +
                                      Q.join("\\.(?:.*\\.|)") +
                                      "(\\.|$)"
                              )
                            : null),
                        (e.result = void 0),
                        e.target || (e.target = i),
                        (r = r == null ? [e] : u.makeArray(r, [e])),
                        (L = u.event.special[$] || {}),
                        !(!a && L.trigger && L.trigger.apply(i, r) === !1)))
                ) {
                    if (!a && !L.noBubble && !Et(i)) {
                        for (
                            b = L.delegateType || $,
                                Mr.test(b + $) || (c = c.parentNode);
                            c;
                            c = c.parentNode
                        )
                            D.push(c), (p = c);
                        p === (i.ownerDocument || K) &&
                            D.push(p.defaultView || p.parentWindow || d);
                    }
                    for (l = 0; (c = D[l++]) && !e.isPropagationStopped(); )
                        (R = c),
                            (e.type = l > 1 ? b : L.bindType || $),
                            (T =
                                (J.get(c, "events") || Object.create(null))[
                                    e.type
                                ] && J.get(c, "handle")),
                            T && T.apply(c, r),
                            (T = y && c[y]),
                            T &&
                                T.apply &&
                                Ue(c) &&
                                ((e.result = T.apply(c, r)),
                                e.result === !1 && e.preventDefault());
                    return (
                        (e.type = $),
                        !a &&
                            !e.isDefaultPrevented() &&
                            (!L._default ||
                                L._default.apply(D.pop(), r) === !1) &&
                            Ue(i) &&
                            y &&
                            q(i[$]) &&
                            !Et(i) &&
                            ((p = i[y]),
                            p && (i[y] = null),
                            (u.event.triggered = $),
                            e.isPropagationStopped() &&
                                R.addEventListener($, Di),
                            i[$](),
                            e.isPropagationStopped() &&
                                R.removeEventListener($, Di),
                            (u.event.triggered = void 0),
                            p && (i[y] = p)),
                        e.result
                    );
                }
            },
            simulate: function (e, r, i) {
                var a = u.extend(new u.Event(), i, {
                    type: e,
                    isSimulated: !0,
                });
                u.event.trigger(a, null, r);
            },
        }),
            u.fn.extend({
                trigger: function (e, r) {
                    return this.each(function () {
                        u.event.trigger(e, r, this);
                    });
                },
                triggerHandler: function (e, r) {
                    var i = this[0];
                    if (i) return u.event.trigger(e, r, i, !0);
                },
            });
        var Br = /\[\]$/,
            Ni = /\r?\n/g,
            Cs = /^(?:submit|button|image|reset|file)$/i,
            Li = /^(?:input|select|textarea|keygen)/i;
        function $r(e, r, i, a) {
            var l;
            if (Array.isArray(r))
                u.each(r, function (c, p) {
                    i || Br.test(e)
                        ? a(e, p)
                        : $r(
                              e +
                                  "[" +
                                  (typeof p == "object" && p != null ? c : "") +
                                  "]",
                              p,
                              i,
                              a
                          );
                });
            else if (!i && Re(r) === "object")
                for (l in r) $r(e + "[" + l + "]", r[l], i, a);
            else a(e, r);
        }
        (u.param = function (e, r) {
            var i,
                a = [],
                l = function (c, p) {
                    var b = q(p) ? p() : p;
                    a[a.length] =
                        encodeURIComponent(c) +
                        "=" +
                        encodeURIComponent(b ?? "");
                };
            if (e == null) return "";
            if (Array.isArray(e) || (e.jquery && !u.isPlainObject(e)))
                u.each(e, function () {
                    l(this.name, this.value);
                });
            else for (i in e) $r(i, e[i], r, l);
            return a.join("&");
        }),
            u.fn.extend({
                serialize: function () {
                    return u.param(this.serializeArray());
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = u.prop(this, "elements");
                        return e ? u.makeArray(e) : this;
                    })
                        .filter(function () {
                            var e = this.type;
                            return (
                                this.name &&
                                !u(this).is(":disabled") &&
                                Li.test(this.nodeName) &&
                                !Cs.test(e) &&
                                (this.checked || !Ke.test(e))
                            );
                        })
                        .map(function (e, r) {
                            var i = u(this).val();
                            return i == null
                                ? null
                                : Array.isArray(i)
                                ? u.map(i, function (a) {
                                      return {
                                          name: r.name,
                                          value: a.replace(
                                              Ni,
                                              `\r
`
                                          ),
                                      };
                                  })
                                : {
                                      name: r.name,
                                      value: i.replace(
                                          Ni,
                                          `\r
`
                                      ),
                                  };
                        })
                        .get();
                },
            });
        var ws = /%20/g,
            Ss = /#.*$/,
            xs = /([?&])_=[^&]*/,
            ks = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Os = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ds = /^(?:GET|HEAD)$/,
            Ns = /^\/\//,
            Vr = {},
            nr = {},
            xn = "*/".concat("*"),
            jr = K.createElement("a");
        jr.href = pn.href;
        function Ri(e) {
            return function (r, i) {
                typeof r != "string" && ((i = r), (r = "*"));
                var a,
                    l = 0,
                    c = r.toLowerCase().match(_e) || [];
                if (q(i))
                    for (; (a = c[l++]); )
                        a[0] === "+"
                            ? ((a = a.slice(1) || "*"),
                              (e[a] = e[a] || []).unshift(i))
                            : (e[a] = e[a] || []).push(i);
            };
        }
        function Pi(e, r, i, a) {
            var l = {},
                c = e === nr;
            function p(b) {
                var y;
                return (
                    (l[b] = !0),
                    u.each(e[b] || [], function (T, L) {
                        var R = L(r, i, a);
                        if (typeof R == "string" && !c && !l[R])
                            return r.dataTypes.unshift(R), p(R), !1;
                        if (c) return !(y = R);
                    }),
                    y
                );
            }
            return p(r.dataTypes[0]) || (!l["*"] && p("*"));
        }
        function Hr(e, r) {
            var i,
                a,
                l = u.ajaxSettings.flatOptions || {};
            for (i in r)
                r[i] !== void 0 && ((l[i] ? e : a || (a = {}))[i] = r[i]);
            return a && u.extend(!0, e, a), e;
        }
        function qr(e, r, i) {
            for (
                var a, l, c, p, b = e.contents, y = e.dataTypes;
                y[0] === "*";

            )
                y.shift(),
                    a === void 0 &&
                        (a = e.mimeType || r.getResponseHeader("Content-Type"));
            if (a) {
                for (l in b)
                    if (b[l] && b[l].test(a)) {
                        y.unshift(l);
                        break;
                    }
            }
            if (y[0] in i) c = y[0];
            else {
                for (l in i) {
                    if (!y[0] || e.converters[l + " " + y[0]]) {
                        c = l;
                        break;
                    }
                    p || (p = l);
                }
                c = c || p;
            }
            if (c) return c !== y[0] && y.unshift(c), i[c];
        }
        function Ii(e, r, i, a) {
            var l,
                c,
                p,
                b,
                y,
                T = {},
                L = e.dataTypes.slice();
            if (L[1])
                for (p in e.converters) T[p.toLowerCase()] = e.converters[p];
            for (c = L.shift(); c; )
                if (
                    (e.responseFields[c] && (i[e.responseFields[c]] = r),
                    !y &&
                        a &&
                        e.dataFilter &&
                        (r = e.dataFilter(r, e.dataType)),
                    (y = c),
                    (c = L.shift()),
                    c)
                ) {
                    if (c === "*") c = y;
                    else if (y !== "*" && y !== c) {
                        if (((p = T[y + " " + c] || T["* " + c]), !p)) {
                            for (l in T)
                                if (
                                    ((b = l.split(" ")),
                                    b[1] === c &&
                                        ((p =
                                            T[y + " " + b[0]] ||
                                            T["* " + b[0]]),
                                        p))
                                ) {
                                    p === !0
                                        ? (p = T[l])
                                        : T[l] !== !0 &&
                                          ((c = b[0]), L.unshift(b[1]));
                                    break;
                                }
                        }
                        if (p !== !0)
                            if (p && e.throws) r = p(r);
                            else
                                try {
                                    r = p(r);
                                } catch (R) {
                                    return {
                                        state: "parsererror",
                                        error: p
                                            ? R
                                            : "No conversion from " +
                                              y +
                                              " to " +
                                              c,
                                    };
                                }
                    }
                }
            return { state: "success", data: r };
        }
        u.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: pn.href,
                type: "GET",
                isLocal: Os.test(pn.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": xn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": u.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, r) {
                return r ? Hr(Hr(e, u.ajaxSettings), r) : Hr(u.ajaxSettings, e);
            },
            ajaxPrefilter: Ri(Vr),
            ajaxTransport: Ri(nr),
            ajax: function (e, r) {
                typeof e == "object" && ((r = e), (e = void 0)), (r = r || {});
                var i,
                    a,
                    l,
                    c,
                    p,
                    b,
                    y,
                    T,
                    L,
                    R,
                    D = u.ajaxSetup({}, r),
                    $ = D.context || D,
                    Q = D.context && ($.nodeType || $.jquery) ? u($) : u.event,
                    ot = u.Deferred(),
                    ct = u.Callbacks("once memory"),
                    Lt = D.statusCode || {},
                    Rt = {},
                    be = {},
                    Ae = "canceled",
                    ht = {
                        readyState: 0,
                        getResponseHeader: function (_t) {
                            var kt;
                            if (y) {
                                if (!c)
                                    for (c = {}; (kt = ks.exec(l)); )
                                        c[kt[1].toLowerCase() + " "] = (
                                            c[kt[1].toLowerCase() + " "] || []
                                        ).concat(kt[2]);
                                kt = c[_t.toLowerCase() + " "];
                            }
                            return kt == null ? null : kt.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return y ? l : null;
                        },
                        setRequestHeader: function (_t, kt) {
                            return (
                                y == null &&
                                    ((_t = be[_t.toLowerCase()] =
                                        be[_t.toLowerCase()] || _t),
                                    (Rt[_t] = kt)),
                                this
                            );
                        },
                        overrideMimeType: function (_t) {
                            return y == null && (D.mimeType = _t), this;
                        },
                        statusCode: function (_t) {
                            var kt;
                            if (_t)
                                if (y) ht.always(_t[ht.status]);
                                else for (kt in _t) Lt[kt] = [Lt[kt], _t[kt]];
                            return this;
                        },
                        abort: function (_t) {
                            var kt = _t || Ae;
                            return i && i.abort(kt), je(0, kt), this;
                        },
                    };
                if (
                    (ot.promise(ht),
                    (D.url = ((e || D.url || pn.href) + "").replace(
                        Ns,
                        pn.protocol + "//"
                    )),
                    (D.type = r.method || r.type || D.method || D.type),
                    (D.dataTypes = (D.dataType || "*")
                        .toLowerCase()
                        .match(_e) || [""]),
                    D.crossDomain == null)
                ) {
                    b = K.createElement("a");
                    try {
                        (b.href = D.url),
                            (b.href = b.href),
                            (D.crossDomain =
                                jr.protocol + "//" + jr.host !=
                                b.protocol + "//" + b.host);
                    } catch {
                        D.crossDomain = !0;
                    }
                }
                if (
                    (D.data &&
                        D.processData &&
                        typeof D.data != "string" &&
                        (D.data = u.param(D.data, D.traditional)),
                    Pi(Vr, D, r, ht),
                    y)
                )
                    return ht;
                (T = u.event && D.global),
                    T && u.active++ === 0 && u.event.trigger("ajaxStart"),
                    (D.type = D.type.toUpperCase()),
                    (D.hasContent = !Ds.test(D.type)),
                    (a = D.url.replace(Ss, "")),
                    D.hasContent
                        ? D.data &&
                          D.processData &&
                          (D.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                          ) === 0 &&
                          (D.data = D.data.replace(ws, "+"))
                        : ((R = D.url.slice(a.length)),
                          D.data &&
                              (D.processData || typeof D.data == "string") &&
                              ((a += (Fr.test(a) ? "&" : "?") + D.data),
                              delete D.data),
                          D.cache === !1 &&
                              ((a = a.replace(xs, "$1")),
                              (R =
                                  (Fr.test(a) ? "&" : "?") +
                                  "_=" +
                                  Oi.guid++ +
                                  R)),
                          (D.url = a + R)),
                    D.ifModified &&
                        (u.lastModified[a] &&
                            ht.setRequestHeader(
                                "If-Modified-Since",
                                u.lastModified[a]
                            ),
                        u.etag[a] &&
                            ht.setRequestHeader("If-None-Match", u.etag[a])),
                    ((D.data && D.hasContent && D.contentType !== !1) ||
                        r.contentType) &&
                        ht.setRequestHeader("Content-Type", D.contentType),
                    ht.setRequestHeader(
                        "Accept",
                        D.dataTypes[0] && D.accepts[D.dataTypes[0]]
                            ? D.accepts[D.dataTypes[0]] +
                                  (D.dataTypes[0] !== "*"
                                      ? ", " + xn + "; q=0.01"
                                      : "")
                            : D.accepts["*"]
                    );
                for (L in D.headers) ht.setRequestHeader(L, D.headers[L]);
                if (D.beforeSend && (D.beforeSend.call($, ht, D) === !1 || y))
                    return ht.abort();
                if (
                    ((Ae = "abort"),
                    ct.add(D.complete),
                    ht.done(D.success),
                    ht.fail(D.error),
                    (i = Pi(nr, D, r, ht)),
                    !i)
                )
                    je(-1, "No Transport");
                else {
                    if (
                        ((ht.readyState = 1),
                        T && Q.trigger("ajaxSend", [ht, D]),
                        y)
                    )
                        return ht;
                    D.async &&
                        D.timeout > 0 &&
                        (p = d.setTimeout(function () {
                            ht.abort("timeout");
                        }, D.timeout));
                    try {
                        (y = !1), i.send(Rt, je);
                    } catch (_t) {
                        if (y) throw _t;
                        je(-1, _t);
                    }
                }
                function je(_t, kt, gn, rr) {
                    var Te,
                        kn,
                        de,
                        ke,
                        Oe,
                        ee = kt;
                    y ||
                        ((y = !0),
                        p && d.clearTimeout(p),
                        (i = void 0),
                        (l = rr || ""),
                        (ht.readyState = _t > 0 ? 4 : 0),
                        (Te = (_t >= 200 && _t < 300) || _t === 304),
                        gn && (ke = qr(D, ht, gn)),
                        !Te &&
                            u.inArray("script", D.dataTypes) > -1 &&
                            u.inArray("json", D.dataTypes) < 0 &&
                            (D.converters["text script"] = function () {}),
                        (ke = Ii(D, ke, ht, Te)),
                        Te
                            ? (D.ifModified &&
                                  ((Oe = ht.getResponseHeader("Last-Modified")),
                                  Oe && (u.lastModified[a] = Oe),
                                  (Oe = ht.getResponseHeader("etag")),
                                  Oe && (u.etag[a] = Oe)),
                              _t === 204 || D.type === "HEAD"
                                  ? (ee = "nocontent")
                                  : _t === 304
                                  ? (ee = "notmodified")
                                  : ((ee = ke.state),
                                    (kn = ke.data),
                                    (de = ke.error),
                                    (Te = !de)))
                            : ((de = ee),
                              (_t || !ee) &&
                                  ((ee = "error"), _t < 0 && (_t = 0))),
                        (ht.status = _t),
                        (ht.statusText = (kt || ee) + ""),
                        Te
                            ? ot.resolveWith($, [kn, ee, ht])
                            : ot.rejectWith($, [ht, ee, de]),
                        ht.statusCode(Lt),
                        (Lt = void 0),
                        T &&
                            Q.trigger(Te ? "ajaxSuccess" : "ajaxError", [
                                ht,
                                D,
                                Te ? kn : de,
                            ]),
                        ct.fireWith($, [ht, ee]),
                        T &&
                            (Q.trigger("ajaxComplete", [ht, D]),
                            --u.active || u.event.trigger("ajaxStop")));
                }
                return ht;
            },
            getJSON: function (e, r, i) {
                return u.get(e, r, i, "json");
            },
            getScript: function (e, r) {
                return u.get(e, void 0, r, "script");
            },
        }),
            u.each(["get", "post"], function (e, r) {
                u[r] = function (i, a, l, c) {
                    return (
                        q(a) && ((c = c || l), (l = a), (a = void 0)),
                        u.ajax(
                            u.extend(
                                {
                                    url: i,
                                    type: r,
                                    dataType: c,
                                    data: a,
                                    success: l,
                                },
                                u.isPlainObject(i) && i
                            )
                        )
                    );
                };
            }),
            u.ajaxPrefilter(function (e) {
                var r;
                for (r in e.headers)
                    r.toLowerCase() === "content-type" &&
                        (e.contentType = e.headers[r] || "");
            }),
            (u._evalUrl = function (e, r, i) {
                return u.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: { "text script": function () {} },
                    dataFilter: function (a) {
                        u.globalEval(a, r, i);
                    },
                });
            }),
            u.fn.extend({
                wrapAll: function (e) {
                    var r;
                    return (
                        this[0] &&
                            (q(e) && (e = e.call(this[0])),
                            (r = u(e, this[0].ownerDocument).eq(0).clone(!0)),
                            this[0].parentNode && r.insertBefore(this[0]),
                            r
                                .map(function () {
                                    for (var i = this; i.firstElementChild; )
                                        i = i.firstElementChild;
                                    return i;
                                })
                                .append(this)),
                        this
                    );
                },
                wrapInner: function (e) {
                    return q(e)
                        ? this.each(function (r) {
                              u(this).wrapInner(e.call(this, r));
                          })
                        : this.each(function () {
                              var r = u(this),
                                  i = r.contents();
                              i.length ? i.wrapAll(e) : r.append(e);
                          });
                },
                wrap: function (e) {
                    var r = q(e);
                    return this.each(function (i) {
                        u(this).wrapAll(r ? e.call(this, i) : e);
                    });
                },
                unwrap: function (e) {
                    return (
                        this.parent(e)
                            .not("body")
                            .each(function () {
                                u(this).replaceWith(this.childNodes);
                            }),
                        this
                    );
                },
            }),
            (u.expr.pseudos.hidden = function (e) {
                return !u.expr.pseudos.visible(e);
            }),
            (u.expr.pseudos.visible = function (e) {
                return !!(
                    e.offsetWidth ||
                    e.offsetHeight ||
                    e.getClientRects().length
                );
            }),
            (u.ajaxSettings.xhr = function () {
                try {
                    return new d.XMLHttpRequest();
                } catch {}
            });
        var Ve = { 0: 200, 1223: 204 },
            Ze = u.ajaxSettings.xhr();
        (H.cors = !!Ze && "withCredentials" in Ze),
            (H.ajax = Ze = !!Ze),
            u.ajaxTransport(function (e) {
                var r, i;
                if (H.cors || (Ze && !e.crossDomain))
                    return {
                        send: function (a, l) {
                            var c,
                                p = e.xhr();
                            if (
                                (p.open(
                                    e.type,
                                    e.url,
                                    e.async,
                                    e.username,
                                    e.password
                                ),
                                e.xhrFields)
                            )
                                for (c in e.xhrFields) p[c] = e.xhrFields[c];
                            e.mimeType &&
                                p.overrideMimeType &&
                                p.overrideMimeType(e.mimeType),
                                !e.crossDomain &&
                                    !a["X-Requested-With"] &&
                                    (a["X-Requested-With"] = "XMLHttpRequest");
                            for (c in a) p.setRequestHeader(c, a[c]);
                            (r = function (b) {
                                return function () {
                                    r &&
                                        ((r =
                                            i =
                                            p.onload =
                                            p.onerror =
                                            p.onabort =
                                            p.ontimeout =
                                            p.onreadystatechange =
                                                null),
                                        b === "abort"
                                            ? p.abort()
                                            : b === "error"
                                            ? typeof p.status != "number"
                                                ? l(0, "error")
                                                : l(p.status, p.statusText)
                                            : l(
                                                  Ve[p.status] || p.status,
                                                  p.statusText,
                                                  (p.responseType || "text") !==
                                                      "text" ||
                                                      typeof p.responseText !=
                                                          "string"
                                                      ? { binary: p.response }
                                                      : {
                                                            text: p.responseText,
                                                        },
                                                  p.getAllResponseHeaders()
                                              ));
                                };
                            }),
                                (p.onload = r()),
                                (i = p.onerror = p.ontimeout = r("error")),
                                p.onabort !== void 0
                                    ? (p.onabort = i)
                                    : (p.onreadystatechange = function () {
                                          p.readyState === 4 &&
                                              d.setTimeout(function () {
                                                  r && i();
                                              });
                                      }),
                                (r = r("abort"));
                            try {
                                p.send((e.hasContent && e.data) || null);
                            } catch (b) {
                                if (r) throw b;
                            }
                        },
                        abort: function () {
                            r && r();
                        },
                    };
            }),
            u.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1);
            }),
            u.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                    "text script": function (e) {
                        return u.globalEval(e), e;
                    },
                },
            }),
            u.ajaxPrefilter("script", function (e) {
                e.cache === void 0 && (e.cache = !1),
                    e.crossDomain && (e.type = "GET");
            }),
            u.ajaxTransport("script", function (e) {
                if (e.crossDomain || e.scriptAttrs) {
                    var r, i;
                    return {
                        send: function (a, l) {
                            (r = u("<script>")
                                .attr(e.scriptAttrs || {})
                                .prop({ charset: e.scriptCharset, src: e.url })
                                .on(
                                    "load error",
                                    (i = function (c) {
                                        r.remove(),
                                            (i = null),
                                            c &&
                                                l(
                                                    c.type === "error"
                                                        ? 404
                                                        : 200,
                                                    c.type
                                                );
                                    })
                                )),
                                K.head.appendChild(r[0]);
                        },
                        abort: function () {
                            i && i();
                        },
                    };
                }
            });
        var Fi = [],
            Wr = /(=)\?(?=&|$)|\?\?/;
        u.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Fi.pop() || u.expando + "_" + Oi.guid++;
                return (this[e] = !0), e;
            },
        }),
            u.ajaxPrefilter("json jsonp", function (e, r, i) {
                var a,
                    l,
                    c,
                    p =
                        e.jsonp !== !1 &&
                        (Wr.test(e.url)
                            ? "url"
                            : typeof e.data == "string" &&
                              (e.contentType || "").indexOf(
                                  "application/x-www-form-urlencoded"
                              ) === 0 &&
                              Wr.test(e.data) &&
                              "data");
                if (p || e.dataTypes[0] === "jsonp")
                    return (
                        (a = e.jsonpCallback =
                            q(e.jsonpCallback)
                                ? e.jsonpCallback()
                                : e.jsonpCallback),
                        p
                            ? (e[p] = e[p].replace(Wr, "$1" + a))
                            : e.jsonp !== !1 &&
                              (e.url +=
                                  (Fr.test(e.url) ? "&" : "?") +
                                  e.jsonp +
                                  "=" +
                                  a),
                        (e.converters["script json"] = function () {
                            return c || u.error(a + " was not called"), c[0];
                        }),
                        (e.dataTypes[0] = "json"),
                        (l = d[a]),
                        (d[a] = function () {
                            c = arguments;
                        }),
                        i.always(function () {
                            l === void 0 ? u(d).removeProp(a) : (d[a] = l),
                                e[a] &&
                                    ((e.jsonpCallback = r.jsonpCallback),
                                    Fi.push(a)),
                                c && q(l) && l(c[0]),
                                (c = l = void 0);
                        }),
                        "script"
                    );
            }),
            (H.createHTMLDocument = (function () {
                var e = K.implementation.createHTMLDocument("").body;
                return (
                    (e.innerHTML = "<form></form><form></form>"),
                    e.childNodes.length === 2
                );
            })()),
            (u.parseHTML = function (e, r, i) {
                if (typeof e != "string") return [];
                typeof r == "boolean" && ((i = r), (r = !1));
                var a, l, c;
                return (
                    r ||
                        (H.createHTMLDocument
                            ? ((r = K.implementation.createHTMLDocument("")),
                              (a = r.createElement("base")),
                              (a.href = K.location.href),
                              r.head.appendChild(a))
                            : (r = K)),
                    (l = ie.exec(e)),
                    (c = !i && []),
                    l
                        ? [r.createElement(l[1])]
                        : ((l = Ye([e], r, c)),
                          c && c.length && u(c).remove(),
                          u.merge([], l.childNodes))
                );
            }),
            (u.fn.load = function (e, r, i) {
                var a,
                    l,
                    c,
                    p = this,
                    b = e.indexOf(" ");
                return (
                    b > -1 && ((a = Be(e.slice(b))), (e = e.slice(0, b))),
                    q(r)
                        ? ((i = r), (r = void 0))
                        : r && typeof r == "object" && (l = "POST"),
                    p.length > 0 &&
                        u
                            .ajax({
                                url: e,
                                type: l || "GET",
                                dataType: "html",
                                data: r,
                            })
                            .done(function (y) {
                                (c = arguments),
                                    p.html(
                                        a
                                            ? u("<div>")
                                                  .append(u.parseHTML(y))
                                                  .find(a)
                                            : y
                                    );
                            })
                            .always(
                                i &&
                                    function (y, T) {
                                        p.each(function () {
                                            i.apply(
                                                this,
                                                c || [y.responseText, T, y]
                                            );
                                        });
                                    }
                            ),
                    this
                );
            }),
            (u.expr.pseudos.animated = function (e) {
                return u.grep(u.timers, function (r) {
                    return e === r.elem;
                }).length;
            }),
            (u.offset = {
                setOffset: function (e, r, i) {
                    var a,
                        l,
                        c,
                        p,
                        b,
                        y,
                        T,
                        L = u.css(e, "position"),
                        R = u(e),
                        D = {};
                    L === "static" && (e.style.position = "relative"),
                        (b = R.offset()),
                        (c = u.css(e, "top")),
                        (y = u.css(e, "left")),
                        (T =
                            (L === "absolute" || L === "fixed") &&
                            (c + y).indexOf("auto") > -1),
                        T
                            ? ((a = R.position()), (p = a.top), (l = a.left))
                            : ((p = parseFloat(c) || 0),
                              (l = parseFloat(y) || 0)),
                        q(r) && (r = r.call(e, i, u.extend({}, b))),
                        r.top != null && (D.top = r.top - b.top + p),
                        r.left != null && (D.left = r.left - b.left + l),
                        "using" in r ? r.using.call(e, D) : R.css(D);
                },
            }),
            u.fn.extend({
                offset: function (e) {
                    if (arguments.length)
                        return e === void 0
                            ? this
                            : this.each(function (l) {
                                  u.offset.setOffset(this, e, l);
                              });
                    var r,
                        i,
                        a = this[0];
                    if (a)
                        return a.getClientRects().length
                            ? ((r = a.getBoundingClientRect()),
                              (i = a.ownerDocument.defaultView),
                              {
                                  top: r.top + i.pageYOffset,
                                  left: r.left + i.pageXOffset,
                              })
                            : { top: 0, left: 0 };
                },
                position: function () {
                    if (this[0]) {
                        var e,
                            r,
                            i,
                            a = this[0],
                            l = { top: 0, left: 0 };
                        if (u.css(a, "position") === "fixed")
                            r = a.getBoundingClientRect();
                        else {
                            for (
                                r = this.offset(),
                                    i = a.ownerDocument,
                                    e = a.offsetParent || i.documentElement;
                                e &&
                                (e === i.body || e === i.documentElement) &&
                                u.css(e, "position") === "static";

                            )
                                e = e.parentNode;
                            e &&
                                e !== a &&
                                e.nodeType === 1 &&
                                ((l = u(e).offset()),
                                (l.top += u.css(e, "borderTopWidth", !0)),
                                (l.left += u.css(e, "borderLeftWidth", !0)));
                        }
                        return {
                            top: r.top - l.top - u.css(a, "marginTop", !0),
                            left: r.left - l.left - u.css(a, "marginLeft", !0),
                        };
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (
                            var e = this.offsetParent;
                            e && u.css(e, "position") === "static";

                        )
                            e = e.offsetParent;
                        return e || Fe;
                    });
                },
            }),
            u.each(
                { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                function (e, r) {
                    var i = r === "pageYOffset";
                    u.fn[e] = function (a) {
                        return Zt(
                            this,
                            function (l, c, p) {
                                var b;
                                if (
                                    (Et(l)
                                        ? (b = l)
                                        : l.nodeType === 9 &&
                                          (b = l.defaultView),
                                    p === void 0)
                                )
                                    return b ? b[r] : l[c];
                                b
                                    ? b.scrollTo(
                                          i ? b.pageXOffset : p,
                                          i ? p : b.pageYOffset
                                      )
                                    : (l[c] = p);
                            },
                            e,
                            a,
                            arguments.length
                        );
                    };
                }
            ),
            u.each(["top", "left"], function (e, r) {
                u.cssHooks[r] = wi(H.pixelPosition, function (i, a) {
                    if (a)
                        return (
                            (a = Cn(i, r)),
                            kr.test(a) ? u(i).position()[r] + "px" : a
                        );
                });
            }),
            u.each({ Height: "height", Width: "width" }, function (e, r) {
                u.each(
                    { padding: "inner" + e, content: r, "": "outer" + e },
                    function (i, a) {
                        u.fn[a] = function (l, c) {
                            var p =
                                    arguments.length &&
                                    (i || typeof l != "boolean"),
                                b =
                                    i ||
                                    (l === !0 || c === !0
                                        ? "margin"
                                        : "border");
                            return Zt(
                                this,
                                function (y, T, L) {
                                    var R;
                                    return Et(y)
                                        ? a.indexOf("outer") === 0
                                            ? y["inner" + e]
                                            : y.document.documentElement[
                                                  "client" + e
                                              ]
                                        : y.nodeType === 9
                                        ? ((R = y.documentElement),
                                          Math.max(
                                              y.body["scroll" + e],
                                              R["scroll" + e],
                                              y.body["offset" + e],
                                              R["offset" + e],
                                              R["client" + e]
                                          ))
                                        : L === void 0
                                        ? u.css(y, T, b)
                                        : u.style(y, T, L, b);
                                },
                                r,
                                p ? l : void 0,
                                p
                            );
                        };
                    }
                );
            }),
            u.each(
                [
                    "ajaxStart",
                    "ajaxStop",
                    "ajaxComplete",
                    "ajaxError",
                    "ajaxSuccess",
                    "ajaxSend",
                ],
                function (e, r) {
                    u.fn[r] = function (i) {
                        return this.on(r, i);
                    };
                }
            ),
            u.fn.extend({
                bind: function (e, r, i) {
                    return this.on(e, null, r, i);
                },
                unbind: function (e, r) {
                    return this.off(e, null, r);
                },
                delegate: function (e, r, i, a) {
                    return this.on(r, e, i, a);
                },
                undelegate: function (e, r, i) {
                    return arguments.length === 1
                        ? this.off(e, "**")
                        : this.off(r, e || "**", i);
                },
                hover: function (e, r) {
                    return this.on("mouseenter", e).on("mouseleave", r || e);
                },
            }),
            u.each(
                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                    " "
                ),
                function (e, r) {
                    u.fn[r] = function (i, a) {
                        return arguments.length > 0
                            ? this.on(r, null, i, a)
                            : this.trigger(r);
                    };
                }
            );
        var Ur = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        (u.proxy = function (e, r) {
            var i, a, l;
            if (
                (typeof r == "string" && ((i = e[r]), (r = e), (e = i)), !!q(e))
            )
                return (
                    (a = S.call(arguments, 2)),
                    (l = function () {
                        return e.apply(r || this, a.concat(S.call(arguments)));
                    }),
                    (l.guid = e.guid = e.guid || u.guid++),
                    l
                );
        }),
            (u.holdReady = function (e) {
                e ? u.readyWait++ : u.ready(!0);
            }),
            (u.isArray = Array.isArray),
            (u.parseJSON = JSON.parse),
            (u.nodeName = bt),
            (u.isFunction = q),
            (u.isWindow = Et),
            (u.camelCase = ce),
            (u.type = Re),
            (u.now = Date.now),
            (u.isNumeric = function (e) {
                var r = u.type(e);
                return (
                    (r === "number" || r === "string") &&
                    !isNaN(e - parseFloat(e))
                );
            }),
            (u.trim = function (e) {
                return e == null ? "" : (e + "").replace(Ur, "$1");
            });
        var Mi = d.jQuery,
            Ls = d.$;
        return (
            (u.noConflict = function (e) {
                return (
                    d.$ === u && (d.$ = Ls),
                    e && d.jQuery === u && (d.jQuery = Mi),
                    u
                );
            }),
            typeof _ > "u" && (d.jQuery = d.$ = u),
            u
        );
    });
})(Ua);
var Wh = Ua.exports;
const Uh = qh(Wh);
/*!
 * Tabler v1.0.0-beta20 (https://tabler.io)
 * @version 1.0.0-beta20
 * @link https://tabler.io
 * Copyright 2018-2023 The Tabler Authors
 * Copyright 2018-2023 codecalm.net Paweł Kuna
 * Licensed under MIT (https://github.com/tabler/tabler/blob/master/LICENSE)
 */ (function (h) {
    typeof define == "function" && define.amd ? define(h) : h();
})(function () {
    var h = new Map();
    function d(o) {
        var t = h.get(o);
        t && t.destroy();
    }
    function _(o) {
        var t = h.get(o);
        t && t.update();
    }
    var v = null;
    typeof window > "u"
        ? (((v = function (o) {
              return o;
          }).destroy = function (o) {
              return o;
          }),
          (v.update = function (o) {
              return o;
          }))
        : (((v = function (o, t) {
              return (
                  o &&
                      Array.prototype.forEach.call(
                          o.length ? o : [o],
                          function (n) {
                              return (function (s) {
                                  if (
                                      s &&
                                      s.nodeName &&
                                      s.nodeName === "TEXTAREA" &&
                                      !h.has(s)
                                  ) {
                                      var f,
                                          g = null,
                                          E = window.getComputedStyle(s),
                                          C =
                                              ((f = s.value),
                                              function () {
                                                  V({
                                                      testForHeightReduction:
                                                          f === "" ||
                                                          !s.value.startsWith(
                                                              f
                                                          ),
                                                      restoreTextAlign: null,
                                                  }),
                                                      (f = s.value);
                                              }),
                                          k = function (tt) {
                                              s.removeEventListener(
                                                  "autosize:destroy",
                                                  k
                                              ),
                                                  s.removeEventListener(
                                                      "autosize:update",
                                                      j
                                                  ),
                                                  s.removeEventListener(
                                                      "input",
                                                      C
                                                  ),
                                                  window.removeEventListener(
                                                      "resize",
                                                      j
                                                  ),
                                                  Object.keys(tt).forEach(
                                                      function (st) {
                                                          return (s.style[st] =
                                                              tt[st]);
                                                      }
                                                  ),
                                                  h.delete(s);
                                          }.bind(s, {
                                              height: s.style.height,
                                              resize: s.style.resize,
                                              textAlign: s.style.textAlign,
                                              overflowY: s.style.overflowY,
                                              overflowX: s.style.overflowX,
                                              wordWrap: s.style.wordWrap,
                                          });
                                      s.addEventListener("autosize:destroy", k),
                                          s.addEventListener(
                                              "autosize:update",
                                              j
                                          ),
                                          s.addEventListener("input", C),
                                          window.addEventListener("resize", j),
                                          (s.style.overflowX = "hidden"),
                                          (s.style.wordWrap = "break-word"),
                                          h.set(s, { destroy: k, update: j }),
                                          j();
                                  }
                                  function V(tt) {
                                      var st,
                                          rt,
                                          vt = tt.restoreTextAlign,
                                          at = vt === void 0 ? null : vt,
                                          mt = tt.testForHeightReduction,
                                          wt = mt === void 0 || mt,
                                          Dt = E.overflowY;
                                      if (
                                          s.scrollHeight !== 0 &&
                                          (E.resize === "vertical"
                                              ? (s.style.resize = "none")
                                              : E.resize === "both" &&
                                                (s.style.resize = "horizontal"),
                                          wt &&
                                              ((st = (function (lt) {
                                                  for (
                                                      var Tt = [];
                                                      lt &&
                                                      lt.parentNode &&
                                                      lt.parentNode instanceof
                                                          Element;

                                                  )
                                                      lt.parentNode.scrollTop &&
                                                          Tt.push([
                                                              lt.parentNode,
                                                              lt.parentNode
                                                                  .scrollTop,
                                                          ]),
                                                          (lt = lt.parentNode);
                                                  return function () {
                                                      return Tt.forEach(
                                                          function (Ct) {
                                                              var St = Ct[0],
                                                                  $t = Ct[1];
                                                              (St.style.scrollBehavior =
                                                                  "auto"),
                                                                  (St.scrollTop =
                                                                      $t),
                                                                  (St.style.scrollBehavior =
                                                                      null);
                                                          }
                                                      );
                                                  };
                                              })(s)),
                                              (s.style.height = "")),
                                          (rt =
                                              E.boxSizing === "content-box"
                                                  ? s.scrollHeight -
                                                    (parseFloat(E.paddingTop) +
                                                        parseFloat(
                                                            E.paddingBottom
                                                        ))
                                                  : s.scrollHeight +
                                                    parseFloat(
                                                        E.borderTopWidth
                                                    ) +
                                                    parseFloat(
                                                        E.borderBottomWidth
                                                    )),
                                          E.maxHeight !== "none" &&
                                          rt > parseFloat(E.maxHeight)
                                              ? (E.overflowY === "hidden" &&
                                                    (s.style.overflow =
                                                        "scroll"),
                                                (rt = parseFloat(E.maxHeight)))
                                              : E.overflowY !== "hidden" &&
                                                (s.style.overflow = "hidden"),
                                          (s.style.height = rt + "px"),
                                          at && (s.style.textAlign = at),
                                          st && st(),
                                          g !== rt &&
                                              (s.dispatchEvent(
                                                  new Event(
                                                      "autosize:resized",
                                                      { bubbles: !0 }
                                                  )
                                              ),
                                              (g = rt)),
                                          Dt !== E.overflow && !at)
                                      ) {
                                          var Ot = E.textAlign;
                                          E.overflow === "hidden" &&
                                              (s.style.textAlign =
                                                  Ot === "start"
                                                      ? "end"
                                                      : "start"),
                                              V({
                                                  restoreTextAlign: Ot,
                                                  testForHeightReduction: !0,
                                              });
                                      }
                                  }
                                  function j() {
                                      V({
                                          testForHeightReduction: !0,
                                          restoreTextAlign: null,
                                      });
                                  }
                              })(n);
                          }
                      ),
                  o
              );
          }).destroy = function (o) {
              return (
                  o && Array.prototype.forEach.call(o.length ? o : [o], d), o
              );
          }),
          (v.update = function (o) {
              return (
                  o && Array.prototype.forEach.call(o.length ? o : [o], _), o
              );
          }));
    var w = v,
        S = document.querySelectorAll('[data-bs-toggle="autosize"]');
    S.length &&
        S.forEach(function (o) {
            w(o);
        });
    function O(o, t) {
        if (o == null) return {};
        var n = {},
            s = Object.keys(o),
            f,
            g;
        for (g = 0; g < s.length; g++)
            (f = s[g]), !(t.indexOf(f) >= 0) && (n[f] = o[f]);
        return n;
    }
    function I(o) {
        let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return new I.InputMask(o, t);
    }
    class z {
        constructor(t) {
            Object.assign(
                this,
                { inserted: "", rawInserted: "", skip: !1, tailShift: 0 },
                t
            );
        }
        aggregate(t) {
            return (
                (this.rawInserted += t.rawInserted),
                (this.skip = this.skip || t.skip),
                (this.inserted += t.inserted),
                (this.tailShift += t.tailShift),
                this
            );
        }
        get offset() {
            return this.tailShift + this.inserted.length;
        }
    }
    I.ChangeDetails = z;
    function et(o) {
        return typeof o == "string" || o instanceof String;
    }
    const M = {
        NONE: "NONE",
        LEFT: "LEFT",
        FORCE_LEFT: "FORCE_LEFT",
        RIGHT: "RIGHT",
        FORCE_RIGHT: "FORCE_RIGHT",
    };
    function W(o) {
        switch (o) {
            case M.LEFT:
                return M.FORCE_LEFT;
            case M.RIGHT:
                return M.FORCE_RIGHT;
            default:
                return o;
        }
    }
    function xt(o) {
        return o.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    }
    function It(o) {
        return Array.isArray(o) ? o : [o, new z()];
    }
    function H(o, t) {
        if (t === o) return !0;
        var n = Array.isArray(t),
            s = Array.isArray(o),
            f;
        if (n && s) {
            if (t.length != o.length) return !1;
            for (f = 0; f < t.length; f++) if (!H(t[f], o[f])) return !1;
            return !0;
        }
        if (n != s) return !1;
        if (t && o && typeof t == "object" && typeof o == "object") {
            var g = t instanceof Date,
                E = o instanceof Date;
            if (g && E) return t.getTime() == o.getTime();
            if (g != E) return !1;
            var C = t instanceof RegExp,
                k = o instanceof RegExp;
            if (C && k) return t.toString() == o.toString();
            if (C != k) return !1;
            var V = Object.keys(t);
            for (f = 0; f < V.length; f++)
                if (!Object.prototype.hasOwnProperty.call(o, V[f])) return !1;
            for (f = 0; f < V.length; f++) if (!H(o[V[f]], t[V[f]])) return !1;
            return !0;
        } else if (t && o && typeof t == "function" && typeof o == "function") return t.toString() === o.toString();
        return !1;
    }
    class q {
        constructor(t, n, s, f) {
            for (
                this.value = t,
                    this.cursorPos = n,
                    this.oldValue = s,
                    this.oldSelection = f;
                this.value.slice(0, this.startChangePos) !==
                this.oldValue.slice(0, this.startChangePos);

            )
                --this.oldSelection.start;
        }
        get startChangePos() {
            return Math.min(this.cursorPos, this.oldSelection.start);
        }
        get insertedCount() {
            return this.cursorPos - this.startChangePos;
        }
        get inserted() {
            return this.value.substr(this.startChangePos, this.insertedCount);
        }
        get removedCount() {
            return Math.max(
                this.oldSelection.end - this.startChangePos ||
                    this.oldValue.length - this.value.length,
                0
            );
        }
        get removed() {
            return this.oldValue.substr(this.startChangePos, this.removedCount);
        }
        get head() {
            return this.value.substring(0, this.startChangePos);
        }
        get tail() {
            return this.value.substring(
                this.startChangePos + this.insertedCount
            );
        }
        get removeDirection() {
            return !this.removedCount || this.insertedCount
                ? M.NONE
                : (this.oldSelection.end === this.cursorPos ||
                      this.oldSelection.start === this.cursorPos) &&
                  this.oldSelection.end === this.oldSelection.start
                ? M.RIGHT
                : M.LEFT;
        }
    }
    class Et {
        constructor() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : "",
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : 0,
                s = arguments.length > 2 ? arguments[2] : void 0;
            (this.value = t), (this.from = n), (this.stop = s);
        }
        toString() {
            return this.value;
        }
        extend(t) {
            this.value += String(t);
        }
        appendTo(t) {
            return t
                .append(this.toString(), { tail: !0 })
                .aggregate(t._appendPlaceholder());
        }
        get state() {
            return { value: this.value, from: this.from, stop: this.stop };
        }
        set state(t) {
            Object.assign(this, t);
        }
        unshift(t) {
            if (!this.value.length || (t != null && this.from >= t)) return "";
            const n = this.value[0];
            return (this.value = this.value.slice(1)), n;
        }
        shift() {
            if (!this.value.length) return "";
            const t = this.value[this.value.length - 1];
            return (this.value = this.value.slice(0, -1)), t;
        }
    }
    class K {
        constructor(t) {
            (this._value = ""),
                this._update(Object.assign({}, K.DEFAULTS, t)),
                (this.isInitialized = !0);
        }
        updateOptions(t) {
            Object.keys(t).length &&
                this.withValueRefresh(this._update.bind(this, t));
        }
        _update(t) {
            Object.assign(this, t);
        }
        get state() {
            return { _value: this.value };
        }
        set state(t) {
            this._value = t._value;
        }
        reset() {
            this._value = "";
        }
        get value() {
            return this._value;
        }
        set value(t) {
            this.resolve(t);
        }
        resolve(t) {
            return (
                this.reset(),
                this.append(t, { input: !0 }, ""),
                this.doCommit(),
                this.value
            );
        }
        get unmaskedValue() {
            return this.value;
        }
        set unmaskedValue(t) {
            this.reset(), this.append(t, {}, ""), this.doCommit();
        }
        get typedValue() {
            return this.doParse(this.value);
        }
        set typedValue(t) {
            this.value = this.doFormat(t);
        }
        get rawInputValue() {
            return this.extractInput(0, this.value.length, { raw: !0 });
        }
        set rawInputValue(t) {
            this.reset(), this.append(t, { raw: !0 }, ""), this.doCommit();
        }
        get displayValue() {
            return this.value;
        }
        get isComplete() {
            return !0;
        }
        get isFilled() {
            return this.isComplete;
        }
        nearestInputPos(t, n) {
            return t;
        }
        totalInputPositions() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this.value.length;
            return Math.min(this.value.length, n - t);
        }
        extractInput() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this.value.length;
            return this.value.slice(t, n);
        }
        extractTail() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this.value.length;
            return new Et(this.extractInput(t, n), t);
        }
        appendTail(t) {
            return et(t) && (t = new Et(String(t))), t.appendTo(this);
        }
        _appendCharRaw(t) {
            return t
                ? ((this._value += t), new z({ inserted: t, rawInserted: t }))
                : new z();
        }
        _appendChar(t) {
            let n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                s = arguments.length > 2 ? arguments[2] : void 0;
            const f = this.state;
            let g;
            if (
                (([t, g] = It(this.doPrepare(t, n))),
                (g = g.aggregate(this._appendCharRaw(t, n))),
                g.inserted)
            ) {
                let E,
                    C = this.doValidate(n) !== !1;
                if (C && s != null) {
                    const k = this.state;
                    this.overwrite === !0 &&
                        ((E = s.state),
                        s.unshift(this.value.length - g.tailShift));
                    let V = this.appendTail(s);
                    (C = V.rawInserted === s.toString()),
                        !(C && V.inserted) &&
                            this.overwrite === "shift" &&
                            ((this.state = k),
                            (E = s.state),
                            s.shift(),
                            (V = this.appendTail(s)),
                            (C = V.rawInserted === s.toString())),
                        C && V.inserted && (this.state = k);
                }
                C || ((g = new z()), (this.state = f), s && E && (s.state = E));
            }
            return g;
        }
        _appendPlaceholder() {
            return new z();
        }
        _appendEager() {
            return new z();
        }
        append(t, n, s) {
            if (!et(t)) throw new Error("value should be string");
            const f = new z(),
                g = et(s) ? new Et(String(s)) : s;
            n != null && n.tail && (n._beforeTailState = this.state);
            for (let E = 0; E < t.length; ++E) {
                const C = this._appendChar(t[E], n, g);
                if (!C.rawInserted && !this.doSkipInvalid(t[E], n, g)) break;
                f.aggregate(C);
            }
            return (
                g != null && (f.tailShift += this.appendTail(g).tailShift),
                (this.eager === !0 || this.eager === "append") &&
                    n !== null &&
                    n !== void 0 &&
                    n.input &&
                    t &&
                    f.aggregate(this._appendEager()),
                f
            );
        }
        remove() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this.value.length;
            return (
                (this._value = this.value.slice(0, t) + this.value.slice(n)),
                new z()
            );
        }
        withValueRefresh(t) {
            if (this._refreshing || !this.isInitialized) return t();
            this._refreshing = !0;
            const n = this.rawInputValue,
                s = this.value,
                f = t();
            return (
                (this.rawInputValue = n),
                this.value &&
                    this.value !== s &&
                    s.indexOf(this.value) === 0 &&
                    this.append(s.slice(this.value.length), {}, ""),
                delete this._refreshing,
                f
            );
        }
        runIsolated(t) {
            if (this._isolated || !this.isInitialized) return t(this);
            this._isolated = !0;
            const n = this.state,
                s = t(this);
            return (this.state = n), delete this._isolated, s;
        }
        doSkipInvalid(t) {
            return this.skipInvalid;
        }
        doPrepare(t) {
            let n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
            return this.prepare ? this.prepare(t, this, n) : t;
        }
        doValidate(t) {
            return (
                (!this.validate || this.validate(this.value, this, t)) &&
                (!this.parent || this.parent.doValidate(t))
            );
        }
        doCommit() {
            this.commit && this.commit(this.value, this);
        }
        doFormat(t) {
            return this.format ? this.format(t, this) : t;
        }
        doParse(t) {
            return this.parse ? this.parse(t, this) : t;
        }
        splice(t, n, s, f) {
            let g =
                arguments.length > 4 && arguments[4] !== void 0
                    ? arguments[4]
                    : { input: !0 };
            const E = t + n,
                C = this.extractTail(E),
                k = this.eager === !0 || this.eager === "remove";
            let V;
            k && ((f = W(f)), (V = this.extractInput(0, E, { raw: !0 })));
            let j = t;
            const tt = new z();
            if (
                (f !== M.NONE &&
                    ((j = this.nearestInputPos(
                        t,
                        n > 1 && t !== 0 && !k ? M.NONE : f
                    )),
                    (tt.tailShift = j - t)),
                tt.aggregate(this.remove(j)),
                k && f !== M.NONE && V === this.rawInputValue)
            )
                if (f === M.FORCE_LEFT) {
                    let st;
                    for (
                        ;
                        V === this.rawInputValue && (st = this.value.length);

                    )
                        tt.aggregate(new z({ tailShift: -1 })).aggregate(
                            this.remove(st - 1)
                        );
                } else f === M.FORCE_RIGHT && C.unshift();
            return tt.aggregate(this.append(s, g, C));
        }
        maskEquals(t) {
            return this.mask === t;
        }
        typedValueEquals(t) {
            const n = this.typedValue;
            return (
                t === n ||
                (K.EMPTY_VALUES.includes(t) && K.EMPTY_VALUES.includes(n)) ||
                this.doFormat(t) === this.doFormat(this.typedValue)
            );
        }
    }
    (K.DEFAULTS = { format: String, parse: (o) => o, skipInvalid: !0 }),
        (K.EMPTY_VALUES = [void 0, null, ""]),
        (I.Masked = K);
    function le(o) {
        if (o == null) throw new Error("mask property should be defined");
        return o instanceof RegExp
            ? I.MaskedRegExp
            : et(o)
            ? I.MaskedPattern
            : o instanceof Date || o === Date
            ? I.MaskedDate
            : o instanceof Number || typeof o == "number" || o === Number
            ? I.MaskedNumber
            : Array.isArray(o) || o === Array
            ? I.MaskedDynamic
            : I.Masked && o.prototype instanceof I.Masked
            ? o
            : o instanceof I.Masked
            ? o.constructor
            : o instanceof Function
            ? I.MaskedFunction
            : (console.warn("Mask not found for mask", o), I.Masked);
    }
    function Bt(o) {
        if (I.Masked && o instanceof I.Masked) return o;
        o = Object.assign({}, o);
        const t = o.mask;
        if (I.Masked && t instanceof I.Masked) return t;
        const n = le(t);
        if (!n)
            throw new Error(
                "Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask."
            );
        return new n(o);
    }
    I.createMask = Bt;
    const Re = [
            "parent",
            "isOptional",
            "placeholderChar",
            "displayChar",
            "lazy",
            "eager",
        ],
        ci = {
            0: /\d/,
            a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
            "*": /./,
        };
    class fi {
        constructor(t) {
            const {
                    parent: n,
                    isOptional: s,
                    placeholderChar: f,
                    displayChar: g,
                    lazy: E,
                    eager: C,
                } = t,
                k = O(t, Re);
            (this.masked = Bt(k)),
                Object.assign(this, {
                    parent: n,
                    isOptional: s,
                    placeholderChar: f,
                    displayChar: g,
                    lazy: E,
                    eager: C,
                });
        }
        reset() {
            (this.isFilled = !1), this.masked.reset();
        }
        remove() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this.value.length;
            return t === 0 && n >= 1
                ? ((this.isFilled = !1), this.masked.remove(t, n))
                : new z();
        }
        get value() {
            return (
                this.masked.value ||
                (this.isFilled && !this.isOptional ? this.placeholderChar : "")
            );
        }
        get unmaskedValue() {
            return this.masked.unmaskedValue;
        }
        get displayValue() {
            return (this.masked.value && this.displayChar) || this.value;
        }
        get isComplete() {
            return !!this.masked.value || this.isOptional;
        }
        _appendChar(t) {
            let n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
            if (this.isFilled) return new z();
            const s = this.masked.state,
                f = this.masked._appendChar(t, n);
            return (
                f.inserted &&
                    this.doValidate(n) === !1 &&
                    ((f.inserted = f.rawInserted = ""),
                    (this.masked.state = s)),
                !f.inserted &&
                    !this.isOptional &&
                    !this.lazy &&
                    !n.input &&
                    (f.inserted = this.placeholderChar),
                (f.skip = !f.inserted && !this.isOptional),
                (this.isFilled = !!f.inserted),
                f
            );
        }
        append() {
            return this.masked.append(...arguments);
        }
        _appendPlaceholder() {
            const t = new z();
            return (
                this.isFilled ||
                    this.isOptional ||
                    ((this.isFilled = !0), (t.inserted = this.placeholderChar)),
                t
            );
        }
        _appendEager() {
            return new z();
        }
        extractTail() {
            return this.masked.extractTail(...arguments);
        }
        appendTail() {
            return this.masked.appendTail(...arguments);
        }
        extractInput() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this.value.length,
                s = arguments.length > 2 ? arguments[2] : void 0;
            return this.masked.extractInput(t, n, s);
        }
        nearestInputPos(t) {
            let n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : M.NONE;
            const s = 0,
                f = this.value.length,
                g = Math.min(Math.max(t, s), f);
            switch (n) {
                case M.LEFT:
                case M.FORCE_LEFT:
                    return this.isComplete ? g : s;
                case M.RIGHT:
                case M.FORCE_RIGHT:
                    return this.isComplete ? g : f;
                case M.NONE:
                default:
                    return g;
            }
        }
        totalInputPositions() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this.value.length;
            return this.value.slice(t, n).length;
        }
        doValidate() {
            return (
                this.masked.doValidate(...arguments) &&
                (!this.parent || this.parent.doValidate(...arguments))
            );
        }
        doCommit() {
            this.masked.doCommit();
        }
        get state() {
            return { masked: this.masked.state, isFilled: this.isFilled };
        }
        set state(t) {
            (this.masked.state = t.masked), (this.isFilled = t.isFilled);
        }
    }
    class u {
        constructor(t) {
            Object.assign(this, t), (this._value = ""), (this.isFixed = !0);
        }
        get value() {
            return this._value;
        }
        get unmaskedValue() {
            return this.isUnmasking ? this.value : "";
        }
        get displayValue() {
            return this.value;
        }
        reset() {
            (this._isRawInput = !1), (this._value = "");
        }
        remove() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this._value.length;
            return (
                (this._value = this._value.slice(0, t) + this._value.slice(n)),
                this._value || (this._isRawInput = !1),
                new z()
            );
        }
        nearestInputPos(t) {
            let n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : M.NONE;
            const s = 0,
                f = this._value.length;
            switch (n) {
                case M.LEFT:
                case M.FORCE_LEFT:
                    return s;
                case M.NONE:
                case M.RIGHT:
                case M.FORCE_RIGHT:
                default:
                    return f;
            }
        }
        totalInputPositions() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this._value.length;
            return this._isRawInput ? n - t : 0;
        }
        extractInput() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this._value.length;
            return (
                ((arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : {}
                ).raw &&
                    this._isRawInput &&
                    this._value.slice(t, n)) ||
                ""
            );
        }
        get isComplete() {
            return !0;
        }
        get isFilled() {
            return !!this._value;
        }
        _appendChar(t) {
            let n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
            const s = new z();
            if (this.isFilled) return s;
            const f = this.eager === !0 || this.eager === "append",
                E =
                    this.char === t &&
                    (this.isUnmasking || n.input || n.raw) &&
                    (!n.raw || !f) &&
                    !n.tail;
            return (
                E && (s.rawInserted = this.char),
                (this._value = s.inserted = this.char),
                (this._isRawInput = E && (n.raw || n.input)),
                s
            );
        }
        _appendEager() {
            return this._appendChar(this.char, { tail: !0 });
        }
        _appendPlaceholder() {
            const t = new z();
            return this.isFilled || (this._value = t.inserted = this.char), t;
        }
        extractTail() {
            return (
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : this.value.length,
                new Et("")
            );
        }
        appendTail(t) {
            return et(t) && (t = new Et(String(t))), t.appendTo(this);
        }
        append(t, n, s) {
            const f = this._appendChar(t[0], n);
            return (
                s != null && (f.tailShift += this.appendTail(s).tailShift), f
            );
        }
        doCommit() {}
        get state() {
            return { _value: this._value, _isRawInput: this._isRawInput };
        }
        set state(t) {
            Object.assign(this, t);
        }
    }
    const vr = ["chunks"];
    class bt {
        constructor() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : [],
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : 0;
            (this.chunks = t), (this.from = n);
        }
        toString() {
            return this.chunks.map(String).join("");
        }
        extend(t) {
            if (!String(t)) return;
            et(t) && (t = new Et(String(t)));
            const n = this.chunks[this.chunks.length - 1],
                s =
                    n &&
                    (n.stop === t.stop || t.stop == null) &&
                    t.from === n.from + n.toString().length;
            if (t instanceof Et)
                s ? n.extend(t.toString()) : this.chunks.push(t);
            else if (t instanceof bt) {
                if (t.stop == null) {
                    let f;
                    for (; t.chunks.length && t.chunks[0].stop == null; )
                        (f = t.chunks.shift()),
                            (f.from += t.from),
                            this.extend(f);
                }
                t.toString() && ((t.stop = t.blockIndex), this.chunks.push(t));
            }
        }
        appendTo(t) {
            if (!(t instanceof I.MaskedPattern))
                return new Et(this.toString()).appendTo(t);
            const n = new z();
            for (let s = 0; s < this.chunks.length && !n.skip; ++s) {
                const f = this.chunks[s],
                    g = t._mapPosToBlock(t.value.length),
                    E = f.stop;
                let C;
                if (E != null && (!g || g.index <= E)) {
                    if (f instanceof bt || t._stops.indexOf(E) >= 0) {
                        const k = t._appendPlaceholder(E);
                        n.aggregate(k);
                    }
                    C = f instanceof bt && t._blocks[E];
                }
                if (C) {
                    const k = C.appendTail(f);
                    (k.skip = !1), n.aggregate(k), (t._value += k.inserted);
                    const V = f.toString().slice(k.rawInserted.length);
                    V && n.aggregate(t.append(V, { tail: !0 }));
                } else n.aggregate(t.append(f.toString(), { tail: !0 }));
            }
            return n;
        }
        get state() {
            return {
                chunks: this.chunks.map((t) => t.state),
                from: this.from,
                stop: this.stop,
                blockIndex: this.blockIndex,
            };
        }
        set state(t) {
            const { chunks: n } = t,
                s = O(t, vr);
            Object.assign(this, s),
                (this.chunks = n.map((f) => {
                    const g = "chunks" in f ? new bt() : new Et();
                    return (g.state = f), g;
                }));
        }
        unshift(t) {
            if (!this.chunks.length || (t != null && this.from >= t)) return "";
            const n = t != null ? t - this.from : t;
            let s = 0;
            for (; s < this.chunks.length; ) {
                const f = this.chunks[s],
                    g = f.unshift(n);
                if (f.toString()) {
                    if (!g) break;
                    ++s;
                } else this.chunks.splice(s, 1);
                if (g) return g;
            }
            return "";
        }
        shift() {
            if (!this.chunks.length) return "";
            let t = this.chunks.length - 1;
            for (; 0 <= t; ) {
                const n = this.chunks[t],
                    s = n.shift();
                if (n.toString()) {
                    if (!s) break;
                    --t;
                } else this.chunks.splice(t, 1);
                if (s) return s;
            }
            return "";
        }
    }
    class hs {
        constructor(t, n) {
            (this.masked = t), (this._log = []);
            const { offset: s, index: f } =
                t._mapPosToBlock(n) ||
                (n < 0
                    ? { index: 0, offset: 0 }
                    : { index: this.masked._blocks.length, offset: 0 });
            (this.offset = s), (this.index = f), (this.ok = !1);
        }
        get block() {
            return this.masked._blocks[this.index];
        }
        get pos() {
            return this.masked._blockStartPos(this.index) + this.offset;
        }
        get state() {
            return { index: this.index, offset: this.offset, ok: this.ok };
        }
        set state(t) {
            Object.assign(this, t);
        }
        pushState() {
            this._log.push(this.state);
        }
        popState() {
            const t = this._log.pop();
            return (this.state = t), t;
        }
        bindBlock() {
            this.block ||
                (this.index < 0 && ((this.index = 0), (this.offset = 0)),
                this.index >= this.masked._blocks.length &&
                    ((this.index = this.masked._blocks.length - 1),
                    (this.offset = this.block.value.length)));
        }
        _pushLeft(t) {
            for (
                this.pushState(), this.bindBlock();
                0 <= this.index;
                --this.index,
                    this.offset =
                        ((n = this.block) === null || n === void 0
                            ? void 0
                            : n.value.length) || 0
            ) {
                var n;
                if (t()) return (this.ok = !0);
            }
            return (this.ok = !1);
        }
        _pushRight(t) {
            for (
                this.pushState(), this.bindBlock();
                this.index < this.masked._blocks.length;
                ++this.index, this.offset = 0
            )
                if (t()) return (this.ok = !0);
            return (this.ok = !1);
        }
        pushLeftBeforeFilled() {
            return this._pushLeft(() => {
                if (
                    !(this.block.isFixed || !this.block.value) &&
                    ((this.offset = this.block.nearestInputPos(
                        this.offset,
                        M.FORCE_LEFT
                    )),
                    this.offset !== 0)
                )
                    return !0;
            });
        }
        pushLeftBeforeInput() {
            return this._pushLeft(() => {
                if (!this.block.isFixed)
                    return (
                        (this.offset = this.block.nearestInputPos(
                            this.offset,
                            M.LEFT
                        )),
                        !0
                    );
            });
        }
        pushLeftBeforeRequired() {
            return this._pushLeft(() => {
                if (
                    !(
                        this.block.isFixed ||
                        (this.block.isOptional && !this.block.value)
                    )
                )
                    return (
                        (this.offset = this.block.nearestInputPos(
                            this.offset,
                            M.LEFT
                        )),
                        !0
                    );
            });
        }
        pushRightBeforeFilled() {
            return this._pushRight(() => {
                if (
                    !(this.block.isFixed || !this.block.value) &&
                    ((this.offset = this.block.nearestInputPos(
                        this.offset,
                        M.FORCE_RIGHT
                    )),
                    this.offset !== this.block.value.length)
                )
                    return !0;
            });
        }
        pushRightBeforeInput() {
            return this._pushRight(() => {
                if (!this.block.isFixed)
                    return (
                        (this.offset = this.block.nearestInputPos(
                            this.offset,
                            M.NONE
                        )),
                        !0
                    );
            });
        }
        pushRightBeforeRequired() {
            return this._pushRight(() => {
                if (
                    !(
                        this.block.isFixed ||
                        (this.block.isOptional && !this.block.value)
                    )
                )
                    return (
                        (this.offset = this.block.nearestInputPos(
                            this.offset,
                            M.NONE
                        )),
                        !0
                    );
            });
        }
    }
    class ds extends K {
        _update(t) {
            t.mask && (t.validate = (n) => n.search(t.mask) >= 0),
                super._update(t);
        }
    }
    I.MaskedRegExp = ds;
    const ps = ["_blocks"];
    class ft extends K {
        constructor() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
            (t.definitions = Object.assign({}, ci, t.definitions)),
                super(Object.assign({}, ft.DEFAULTS, t));
        }
        _update() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
            (t.definitions = Object.assign(
                {},
                this.definitions,
                t.definitions
            )),
                super._update(t),
                this._rebuildMask();
        }
        _rebuildMask() {
            const t = this.definitions;
            (this._blocks = []), (this._stops = []), (this._maskedBlocks = {});
            let n = this.mask;
            if (!n || !t) return;
            let s = !1,
                f = !1;
            for (let C = 0; C < n.length; ++C) {
                var g, E;
                if (this.blocks) {
                    const st = n.slice(C),
                        rt = Object.keys(this.blocks).filter(
                            (at) => st.indexOf(at) === 0
                        );
                    rt.sort((at, mt) => mt.length - at.length);
                    const vt = rt[0];
                    if (vt) {
                        const at = Bt(
                            Object.assign(
                                {
                                    parent: this,
                                    lazy: this.lazy,
                                    eager: this.eager,
                                    placeholderChar: this.placeholderChar,
                                    displayChar: this.displayChar,
                                    overwrite: this.overwrite,
                                },
                                this.blocks[vt]
                            )
                        );
                        at &&
                            (this._blocks.push(at),
                            this._maskedBlocks[vt] ||
                                (this._maskedBlocks[vt] = []),
                            this._maskedBlocks[vt].push(
                                this._blocks.length - 1
                            )),
                            (C += vt.length - 1);
                        continue;
                    }
                }
                let k = n[C],
                    V = k in t;
                if (k === ft.STOP_CHAR) {
                    this._stops.push(this._blocks.length);
                    continue;
                }
                if (k === "{" || k === "}") {
                    s = !s;
                    continue;
                }
                if (k === "[" || k === "]") {
                    f = !f;
                    continue;
                }
                if (k === ft.ESCAPE_CHAR) {
                    if ((++C, (k = n[C]), !k)) break;
                    V = !1;
                }
                const j =
                        (g = t[k]) !== null &&
                        g !== void 0 &&
                        g.mask &&
                        !(
                            ((E = t[k]) === null || E === void 0
                                ? void 0
                                : E.mask.prototype) instanceof I.Masked
                        )
                            ? t[k]
                            : { mask: t[k] },
                    tt = V
                        ? new fi(
                              Object.assign(
                                  {
                                      parent: this,
                                      isOptional: f,
                                      lazy: this.lazy,
                                      eager: this.eager,
                                      placeholderChar: this.placeholderChar,
                                      displayChar: this.displayChar,
                                  },
                                  j
                              )
                          )
                        : new u({ char: k, eager: this.eager, isUnmasking: s });
                this._blocks.push(tt);
            }
        }
        get state() {
            return Object.assign({}, super.state, {
                _blocks: this._blocks.map((t) => t.state),
            });
        }
        set state(t) {
            const { _blocks: n } = t,
                s = O(t, ps);
            this._blocks.forEach((f, g) => (f.state = n[g])), (super.state = s);
        }
        reset() {
            super.reset(), this._blocks.forEach((t) => t.reset());
        }
        get isComplete() {
            return this._blocks.every((t) => t.isComplete);
        }
        get isFilled() {
            return this._blocks.every((t) => t.isFilled);
        }
        get isFixed() {
            return this._blocks.every((t) => t.isFixed);
        }
        get isOptional() {
            return this._blocks.every((t) => t.isOptional);
        }
        doCommit() {
            this._blocks.forEach((t) => t.doCommit()), super.doCommit();
        }
        get unmaskedValue() {
            return this._blocks.reduce((t, n) => (t += n.unmaskedValue), "");
        }
        set unmaskedValue(t) {
            super.unmaskedValue = t;
        }
        get value() {
            return this._blocks.reduce((t, n) => (t += n.value), "");
        }
        set value(t) {
            super.value = t;
        }
        get displayValue() {
            return this._blocks.reduce((t, n) => (t += n.displayValue), "");
        }
        appendTail(t) {
            return super.appendTail(t).aggregate(this._appendPlaceholder());
        }
        _appendEager() {
            var t;
            const n = new z();
            let s =
                (t = this._mapPosToBlock(this.value.length)) === null ||
                t === void 0
                    ? void 0
                    : t.index;
            if (s == null) return n;
            this._blocks[s].isFilled && ++s;
            for (let f = s; f < this._blocks.length; ++f) {
                const g = this._blocks[f]._appendEager();
                if (!g.inserted) break;
                n.aggregate(g);
            }
            return n;
        }
        _appendCharRaw(t) {
            let n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
            const s = this._mapPosToBlock(this.value.length),
                f = new z();
            if (!s) return f;
            for (let C = s.index; ; ++C) {
                var g, E;
                const k = this._blocks[C];
                if (!k) break;
                const V = k._appendChar(
                        t,
                        Object.assign({}, n, {
                            _beforeTailState:
                                (g = n._beforeTailState) === null ||
                                g === void 0 ||
                                (E = g._blocks) === null ||
                                E === void 0
                                    ? void 0
                                    : E[C],
                        })
                    ),
                    j = V.skip;
                if ((f.aggregate(V), j || V.rawInserted)) break;
            }
            return f;
        }
        extractTail() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this.value.length;
            const s = new bt();
            return (
                t === n ||
                    this._forEachBlocksInRange(t, n, (f, g, E, C) => {
                        const k = f.extractTail(E, C);
                        (k.stop = this._findStopBefore(g)),
                            (k.from = this._blockStartPos(g)),
                            k instanceof bt && (k.blockIndex = g),
                            s.extend(k);
                    }),
                s
            );
        }
        extractInput() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this.value.length,
                s =
                    arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : {};
            if (t === n) return "";
            let f = "";
            return (
                this._forEachBlocksInRange(t, n, (g, E, C, k) => {
                    f += g.extractInput(C, k, s);
                }),
                f
            );
        }
        _findStopBefore(t) {
            let n;
            for (let s = 0; s < this._stops.length; ++s) {
                const f = this._stops[s];
                if (f <= t) n = f;
                else break;
            }
            return n;
        }
        _appendPlaceholder(t) {
            const n = new z();
            if (this.lazy && t == null) return n;
            const s = this._mapPosToBlock(this.value.length);
            if (!s) return n;
            const f = s.index,
                g = t ?? this._blocks.length;
            return (
                this._blocks.slice(f, g).forEach((E) => {
                    if (!E.lazy || t != null) {
                        const C = E._blocks != null ? [E._blocks.length] : [],
                            k = E._appendPlaceholder(...C);
                        (this._value += k.inserted), n.aggregate(k);
                    }
                }),
                n
            );
        }
        _mapPosToBlock(t) {
            let n = "";
            for (let s = 0; s < this._blocks.length; ++s) {
                const f = this._blocks[s],
                    g = n.length;
                if (((n += f.value), t <= n.length))
                    return { index: s, offset: t - g };
            }
        }
        _blockStartPos(t) {
            return this._blocks
                .slice(0, t)
                .reduce((n, s) => (n += s.value.length), 0);
        }
        _forEachBlocksInRange(t) {
            let n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this.value.length,
                s = arguments.length > 2 ? arguments[2] : void 0;
            const f = this._mapPosToBlock(t);
            if (f) {
                const g = this._mapPosToBlock(n),
                    E = g && f.index === g.index,
                    C = f.offset,
                    k = g && E ? g.offset : this._blocks[f.index].value.length;
                if ((s(this._blocks[f.index], f.index, C, k), g && !E)) {
                    for (let V = f.index + 1; V < g.index; ++V)
                        s(this._blocks[V], V, 0, this._blocks[V].value.length);
                    s(this._blocks[g.index], g.index, 0, g.offset);
                }
            }
        }
        remove() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this.value.length;
            const s = super.remove(t, n);
            return (
                this._forEachBlocksInRange(t, n, (f, g, E, C) => {
                    s.aggregate(f.remove(E, C));
                }),
                s
            );
        }
        nearestInputPos(t) {
            let n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : M.NONE;
            if (!this._blocks.length) return 0;
            const s = new hs(this, t);
            if (n === M.NONE)
                return s.pushRightBeforeInput() ||
                    (s.popState(), s.pushLeftBeforeInput())
                    ? s.pos
                    : this.value.length;
            if (n === M.LEFT || n === M.FORCE_LEFT) {
                if (n === M.LEFT) {
                    if ((s.pushRightBeforeFilled(), s.ok && s.pos === t))
                        return t;
                    s.popState();
                }
                if (
                    (s.pushLeftBeforeInput(),
                    s.pushLeftBeforeRequired(),
                    s.pushLeftBeforeFilled(),
                    n === M.LEFT)
                ) {
                    if (
                        (s.pushRightBeforeInput(),
                        s.pushRightBeforeRequired(),
                        (s.ok && s.pos <= t) ||
                            (s.popState(), s.ok && s.pos <= t))
                    )
                        return s.pos;
                    s.popState();
                }
                return s.ok
                    ? s.pos
                    : n === M.FORCE_LEFT
                    ? 0
                    : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : 0);
            }
            return n === M.RIGHT || n === M.FORCE_RIGHT
                ? (s.pushRightBeforeInput(),
                  s.pushRightBeforeRequired(),
                  s.pushRightBeforeFilled()
                      ? s.pos
                      : n === M.FORCE_RIGHT
                      ? this.value.length
                      : (s.popState(),
                        s.ok || (s.popState(), s.ok)
                            ? s.pos
                            : this.nearestInputPos(t, M.LEFT)))
                : t;
        }
        totalInputPositions() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this.value.length,
                s = 0;
            return (
                this._forEachBlocksInRange(t, n, (f, g, E, C) => {
                    s += f.totalInputPositions(E, C);
                }),
                s
            );
        }
        maskedBlock(t) {
            return this.maskedBlocks(t)[0];
        }
        maskedBlocks(t) {
            const n = this._maskedBlocks[t];
            return n ? n.map((s) => this._blocks[s]) : [];
        }
    }
    (ft.DEFAULTS = { lazy: !0, placeholderChar: "_" }),
        (ft.STOP_CHAR = "`"),
        (ft.ESCAPE_CHAR = "\\"),
        (ft.InputDefinition = fi),
        (ft.FixedDefinition = u),
        (I.MaskedPattern = ft);
    class Pe extends ft {
        get _matchFrom() {
            return this.maxLength - String(this.from).length;
        }
        _update(t) {
            t = Object.assign(
                {
                    to: this.to || 0,
                    from: this.from || 0,
                    maxLength: this.maxLength || 0,
                },
                t
            );
            let n = String(t.to).length;
            t.maxLength != null && (n = Math.max(n, t.maxLength)),
                (t.maxLength = n);
            const s = String(t.from).padStart(n, "0"),
                f = String(t.to).padStart(n, "0");
            let g = 0;
            for (; g < f.length && f[g] === s[g]; ) ++g;
            (t.mask = f.slice(0, g).replace(/0/g, "\\0") + "0".repeat(n - g)),
                super._update(t);
        }
        get isComplete() {
            return super.isComplete && !!this.value;
        }
        boundaries(t) {
            let n = "",
                s = "";
            const [, f, g] = t.match(/^(\D*)(\d*)(\D*)/) || [];
            return (
                g &&
                    ((n = "0".repeat(f.length) + g),
                    (s = "9".repeat(f.length) + g)),
                (n = n.padEnd(this.maxLength, "0")),
                (s = s.padEnd(this.maxLength, "9")),
                [n, s]
            );
        }
        doPrepare(t) {
            let n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                s;
            if (
                (([t, s] = It(super.doPrepare(t.replace(/\D/g, ""), n))),
                !this.autofix || !t)
            )
                return t;
            const f = String(this.from).padStart(this.maxLength, "0"),
                g = String(this.to).padStart(this.maxLength, "0");
            let E = this.value + t;
            if (E.length > this.maxLength) return "";
            const [C, k] = this.boundaries(E);
            return Number(k) < this.from
                ? f[E.length - 1]
                : Number(C) > this.to
                ? this.autofix === "pad" && E.length < this.maxLength
                    ? ["", s.aggregate(this.append(f[E.length - 1] + t, n))]
                    : g[E.length - 1]
                : t;
        }
        doValidate() {
            const t = this.value;
            if (t.search(/[^0]/) === -1 && t.length <= this._matchFrom)
                return !0;
            const [s, f] = this.boundaries(t);
            return (
                this.from <= Number(f) &&
                Number(s) <= this.to &&
                super.doValidate(...arguments)
            );
        }
    }
    I.MaskedRange = Pe;
    class on extends ft {
        constructor(t) {
            super(Object.assign({}, on.DEFAULTS, t));
        }
        _update(t) {
            t.mask === Date && delete t.mask, t.pattern && (t.mask = t.pattern);
            const n = t.blocks;
            (t.blocks = Object.assign({}, on.GET_DEFAULT_BLOCKS())),
                t.min && (t.blocks.Y.from = t.min.getFullYear()),
                t.max && (t.blocks.Y.to = t.max.getFullYear()),
                t.min &&
                    t.max &&
                    t.blocks.Y.from === t.blocks.Y.to &&
                    ((t.blocks.m.from = t.min.getMonth() + 1),
                    (t.blocks.m.to = t.max.getMonth() + 1),
                    t.blocks.m.from === t.blocks.m.to &&
                        ((t.blocks.d.from = t.min.getDate()),
                        (t.blocks.d.to = t.max.getDate()))),
                Object.assign(t.blocks, this.blocks, n),
                Object.keys(t.blocks).forEach((s) => {
                    const f = t.blocks[s];
                    !("autofix" in f) &&
                        "autofix" in t &&
                        (f.autofix = t.autofix);
                }),
                super._update(t);
        }
        doValidate() {
            const t = this.date;
            return (
                super.doValidate(...arguments) &&
                (!this.isComplete ||
                    (this.isDateExist(this.value) &&
                        t != null &&
                        (this.min == null || this.min <= t) &&
                        (this.max == null || t <= this.max)))
            );
        }
        isDateExist(t) {
            return this.format(this.parse(t, this), this).indexOf(t) >= 0;
        }
        get date() {
            return this.typedValue;
        }
        set date(t) {
            this.typedValue = t;
        }
        get typedValue() {
            return this.isComplete ? super.typedValue : null;
        }
        set typedValue(t) {
            super.typedValue = t;
        }
        maskEquals(t) {
            return t === Date || super.maskEquals(t);
        }
    }
    (on.DEFAULTS = {
        pattern: "d{.}`m{.}`Y",
        format: (o) => {
            if (!o) return "";
            const t = String(o.getDate()).padStart(2, "0"),
                n = String(o.getMonth() + 1).padStart(2, "0"),
                s = o.getFullYear();
            return [t, n, s].join(".");
        },
        parse: (o) => {
            const [t, n, s] = o.split(".");
            return new Date(s, n - 1, t);
        },
    }),
        (on.GET_DEFAULT_BLOCKS = () => ({
            d: { mask: Pe, from: 1, to: 31, maxLength: 2 },
            m: { mask: Pe, from: 1, to: 12, maxLength: 2 },
            Y: { mask: Pe, from: 1900, to: 9999 },
        })),
        (I.MaskedDate = on);
    class Er {
        get selectionStart() {
            let t;
            try {
                t = this._unsafeSelectionStart;
            } catch {}
            return t ?? this.value.length;
        }
        get selectionEnd() {
            let t;
            try {
                t = this._unsafeSelectionEnd;
            } catch {}
            return t ?? this.value.length;
        }
        select(t, n) {
            if (
                !(
                    t == null ||
                    n == null ||
                    (t === this.selectionStart && n === this.selectionEnd)
                )
            )
                try {
                    this._unsafeSelect(t, n);
                } catch {}
        }
        _unsafeSelect(t, n) {}
        get isActive() {
            return !1;
        }
        bindEvents(t) {}
        unbindEvents() {}
    }
    I.MaskElement = Er;
    class Qt extends Er {
        constructor(t) {
            super(), (this.input = t), (this._handlers = {});
        }
        get rootElement() {
            var t, n, s;
            return (t =
                (n = (s = this.input).getRootNode) === null || n === void 0
                    ? void 0
                    : n.call(s)) !== null && t !== void 0
                ? t
                : document;
        }
        get isActive() {
            return this.input === this.rootElement.activeElement;
        }
        get _unsafeSelectionStart() {
            return this.input.selectionStart;
        }
        get _unsafeSelectionEnd() {
            return this.input.selectionEnd;
        }
        _unsafeSelect(t, n) {
            this.input.setSelectionRange(t, n);
        }
        get value() {
            return this.input.value;
        }
        set value(t) {
            this.input.value = t;
        }
        bindEvents(t) {
            Object.keys(t).forEach((n) =>
                this._toggleEventHandler(Qt.EVENTS_MAP[n], t[n])
            );
        }
        unbindEvents() {
            Object.keys(this._handlers).forEach((t) =>
                this._toggleEventHandler(t)
            );
        }
        _toggleEventHandler(t, n) {
            this._handlers[t] &&
                (this.input.removeEventListener(t, this._handlers[t]),
                delete this._handlers[t]),
                n &&
                    (this.input.addEventListener(t, n),
                    (this._handlers[t] = n));
        }
    }
    (Qt.EVENTS_MAP = {
        selectionChange: "keydown",
        input: "input",
        drop: "drop",
        click: "click",
        focus: "focus",
        commit: "blur",
    }),
        (I.HTMLMaskElement = Qt);
    class jn extends Qt {
        get _unsafeSelectionStart() {
            const t = this.rootElement,
                n = t.getSelection && t.getSelection(),
                s = n && n.anchorOffset,
                f = n && n.focusOffset;
            return f == null || s == null || s < f ? s : f;
        }
        get _unsafeSelectionEnd() {
            const t = this.rootElement,
                n = t.getSelection && t.getSelection(),
                s = n && n.anchorOffset,
                f = n && n.focusOffset;
            return f == null || s == null || s > f ? s : f;
        }
        _unsafeSelect(t, n) {
            if (!this.rootElement.createRange) return;
            const s = this.rootElement.createRange();
            s.setStart(this.input.firstChild || this.input, t),
                s.setEnd(this.input.lastChild || this.input, n);
            const f = this.rootElement,
                g = f.getSelection && f.getSelection();
            g && (g.removeAllRanges(), g.addRange(s));
        }
        get value() {
            return this.input.textContent;
        }
        set value(t) {
            this.input.textContent = t;
        }
    }
    I.HTMLContenteditableMaskElement = jn;
    const an = ["mask"];
    class hi {
        constructor(t, n) {
            (this.el =
                t instanceof Er
                    ? t
                    : t.isContentEditable &&
                      t.tagName !== "INPUT" &&
                      t.tagName !== "TEXTAREA"
                    ? new jn(t)
                    : new Qt(t)),
                (this.masked = Bt(n)),
                (this._listeners = {}),
                (this._value = ""),
                (this._unmaskedValue = ""),
                (this._saveSelection = this._saveSelection.bind(this)),
                (this._onInput = this._onInput.bind(this)),
                (this._onChange = this._onChange.bind(this)),
                (this._onDrop = this._onDrop.bind(this)),
                (this._onFocus = this._onFocus.bind(this)),
                (this._onClick = this._onClick.bind(this)),
                (this.alignCursor = this.alignCursor.bind(this)),
                (this.alignCursorFriendly =
                    this.alignCursorFriendly.bind(this)),
                this._bindEvents(),
                this.updateValue(),
                this._onChange();
        }
        get mask() {
            return this.masked.mask;
        }
        maskEquals(t) {
            var n;
            return (
                t == null ||
                ((n = this.masked) === null || n === void 0
                    ? void 0
                    : n.maskEquals(t))
            );
        }
        set mask(t) {
            if (this.maskEquals(t)) return;
            if (!(t instanceof I.Masked) && this.masked.constructor === le(t)) {
                this.masked.updateOptions({ mask: t });
                return;
            }
            const n = Bt({ mask: t });
            (n.unmaskedValue = this.masked.unmaskedValue), (this.masked = n);
        }
        get value() {
            return this._value;
        }
        set value(t) {
            this.value !== t &&
                ((this.masked.value = t),
                this.updateControl(),
                this.alignCursor());
        }
        get unmaskedValue() {
            return this._unmaskedValue;
        }
        set unmaskedValue(t) {
            this.unmaskedValue !== t &&
                ((this.masked.unmaskedValue = t),
                this.updateControl(),
                this.alignCursor());
        }
        get typedValue() {
            return this.masked.typedValue;
        }
        set typedValue(t) {
            this.masked.typedValueEquals(t) ||
                ((this.masked.typedValue = t),
                this.updateControl(),
                this.alignCursor());
        }
        get displayValue() {
            return this.masked.displayValue;
        }
        _bindEvents() {
            this.el.bindEvents({
                selectionChange: this._saveSelection,
                input: this._onInput,
                drop: this._onDrop,
                click: this._onClick,
                focus: this._onFocus,
                commit: this._onChange,
            });
        }
        _unbindEvents() {
            this.el && this.el.unbindEvents();
        }
        _fireEvent(t) {
            for (
                var n = arguments.length,
                    s = new Array(n > 1 ? n - 1 : 0),
                    f = 1;
                f < n;
                f++
            )
                s[f - 1] = arguments[f];
            const g = this._listeners[t];
            g && g.forEach((E) => E(...s));
        }
        get selectionStart() {
            return this._cursorChanging
                ? this._changingCursorPos
                : this.el.selectionStart;
        }
        get cursorPos() {
            return this._cursorChanging
                ? this._changingCursorPos
                : this.el.selectionEnd;
        }
        set cursorPos(t) {
            !this.el ||
                !this.el.isActive ||
                (this.el.select(t, t), this._saveSelection());
        }
        _saveSelection() {
            this.displayValue !== this.el.value &&
                console.warn(
                    "Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."
                ),
                (this._selection = {
                    start: this.selectionStart,
                    end: this.cursorPos,
                });
        }
        updateValue() {
            (this.masked.value = this.el.value),
                (this._value = this.masked.value);
        }
        updateControl() {
            const t = this.masked.unmaskedValue,
                n = this.masked.value,
                s = this.displayValue,
                f = this.unmaskedValue !== t || this.value !== n;
            (this._unmaskedValue = t),
                (this._value = n),
                this.el.value !== s && (this.el.value = s),
                f && this._fireChangeEvents();
        }
        updateOptions(t) {
            const { mask: n } = t,
                s = O(t, an),
                f = !this.maskEquals(n),
                g = !H(this.masked, s);
            f && (this.mask = n),
                g && this.masked.updateOptions(s),
                (f || g) && this.updateControl();
        }
        updateCursor(t) {
            t != null && ((this.cursorPos = t), this._delayUpdateCursor(t));
        }
        _delayUpdateCursor(t) {
            this._abortUpdateCursor(),
                (this._changingCursorPos = t),
                (this._cursorChanging = setTimeout(() => {
                    this.el &&
                        ((this.cursorPos = this._changingCursorPos),
                        this._abortUpdateCursor());
                }, 10));
        }
        _fireChangeEvents() {
            this._fireEvent("accept", this._inputEvent),
                this.masked.isComplete &&
                    this._fireEvent("complete", this._inputEvent);
        }
        _abortUpdateCursor() {
            this._cursorChanging &&
                (clearTimeout(this._cursorChanging),
                delete this._cursorChanging);
        }
        alignCursor() {
            this.cursorPos = this.masked.nearestInputPos(
                this.masked.nearestInputPos(this.cursorPos, M.LEFT)
            );
        }
        alignCursorFriendly() {
            this.selectionStart === this.cursorPos && this.alignCursor();
        }
        on(t, n) {
            return (
                this._listeners[t] || (this._listeners[t] = []),
                this._listeners[t].push(n),
                this
            );
        }
        off(t, n) {
            if (!this._listeners[t]) return this;
            if (!n) return delete this._listeners[t], this;
            const s = this._listeners[t].indexOf(n);
            return s >= 0 && this._listeners[t].splice(s, 1), this;
        }
        _onInput(t) {
            if (
                ((this._inputEvent = t),
                this._abortUpdateCursor(),
                !this._selection)
            )
                return this.updateValue();
            const n = new q(
                    this.el.value,
                    this.cursorPos,
                    this.displayValue,
                    this._selection
                ),
                s = this.masked.rawInputValue,
                f = this.masked.splice(
                    n.startChangePos,
                    n.removed.length,
                    n.inserted,
                    n.removeDirection,
                    { input: !0, raw: !0 }
                ).offset,
                g =
                    s === this.masked.rawInputValue
                        ? n.removeDirection
                        : M.NONE;
            let E = this.masked.nearestInputPos(n.startChangePos + f, g);
            g !== M.NONE && (E = this.masked.nearestInputPos(E, M.NONE)),
                this.updateControl(),
                this.updateCursor(E),
                delete this._inputEvent;
        }
        _onChange() {
            this.displayValue !== this.el.value && this.updateValue(),
                this.masked.doCommit(),
                this.updateControl(),
                this._saveSelection();
        }
        _onDrop(t) {
            t.preventDefault(), t.stopPropagation();
        }
        _onFocus(t) {
            this.alignCursorFriendly();
        }
        _onClick(t) {
            this.alignCursorFriendly();
        }
        destroy() {
            this._unbindEvents(), (this._listeners.length = 0), delete this.el;
        }
    }
    I.InputMask = hi;
    class di extends ft {
        _update(t) {
            t.enum && (t.mask = "*".repeat(t.enum[0].length)), super._update(t);
        }
        doValidate() {
            return (
                this.enum.some((t) => t.indexOf(this.unmaskedValue) >= 0) &&
                super.doValidate(...arguments)
            );
        }
    }
    I.MaskedEnum = di;
    class ie extends K {
        constructor(t) {
            super(Object.assign({}, ie.DEFAULTS, t));
        }
        _update(t) {
            super._update(t), this._updateRegExps();
        }
        _updateRegExps() {
            let t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
                n = "\\d*",
                s =
                    (this.scale
                        ? "("
                              .concat(xt(this.radix), "\\d{0,")
                              .concat(this.scale, "})?")
                        : "") + "$";
            (this._numberRegExp = new RegExp(t + n + s)),
                (this._mapToRadixRegExp = new RegExp(
                    "[".concat(this.mapToRadix.map(xt).join(""), "]"),
                    "g"
                )),
                (this._thousandsSeparatorRegExp = new RegExp(
                    xt(this.thousandsSeparator),
                    "g"
                ));
        }
        _removeThousandsSeparators(t) {
            return t.replace(this._thousandsSeparatorRegExp, "");
        }
        _insertThousandsSeparators(t) {
            const n = t.split(this.radix);
            return (
                (n[0] = n[0].replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    this.thousandsSeparator
                )),
                n.join(this.radix)
            );
        }
        doPrepare(t) {
            let n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
            t = this._removeThousandsSeparators(
                this.scale &&
                    this.mapToRadix.length &&
                    ((n.input && n.raw) || (!n.input && !n.raw))
                    ? t.replace(this._mapToRadixRegExp, this.radix)
                    : t
            );
            const [s, f] = It(super.doPrepare(t, n));
            return t && !s && (f.skip = !0), [s, f];
        }
        _separatorsCount(t) {
            let n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !1,
                s = 0;
            for (let f = 0; f < t; ++f)
                this._value.indexOf(this.thousandsSeparator, f) === f &&
                    (++s, n && (t += this.thousandsSeparator.length));
            return s;
        }
        _separatorsCountFromSlice() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : this._value;
            return this._separatorsCount(
                this._removeThousandsSeparators(t).length,
                !0
            );
        }
        extractInput() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this.value.length,
                s = arguments.length > 2 ? arguments[2] : void 0;
            return (
                ([t, n] = this._adjustRangeWithSeparators(t, n)),
                this._removeThousandsSeparators(super.extractInput(t, n, s))
            );
        }
        _appendCharRaw(t) {
            let n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
            if (!this.thousandsSeparator) return super._appendCharRaw(t, n);
            const s =
                    n.tail && n._beforeTailState
                        ? n._beforeTailState._value
                        : this._value,
                f = this._separatorsCountFromSlice(s);
            this._value = this._removeThousandsSeparators(this.value);
            const g = super._appendCharRaw(t, n);
            this._value = this._insertThousandsSeparators(this._value);
            const E =
                    n.tail && n._beforeTailState
                        ? n._beforeTailState._value
                        : this._value,
                C = this._separatorsCountFromSlice(E);
            return (
                (g.tailShift += (C - f) * this.thousandsSeparator.length),
                (g.skip = !g.rawInserted && t === this.thousandsSeparator),
                g
            );
        }
        _findSeparatorAround(t) {
            if (this.thousandsSeparator) {
                const n = t - this.thousandsSeparator.length + 1,
                    s = this.value.indexOf(this.thousandsSeparator, n);
                if (s <= t) return s;
            }
            return -1;
        }
        _adjustRangeWithSeparators(t, n) {
            const s = this._findSeparatorAround(t);
            s >= 0 && (t = s);
            const f = this._findSeparatorAround(n);
            return f >= 0 && (n = f + this.thousandsSeparator.length), [t, n];
        }
        remove() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : this.value.length;
            [t, n] = this._adjustRangeWithSeparators(t, n);
            const s = this.value.slice(0, t),
                f = this.value.slice(n),
                g = this._separatorsCount(s.length);
            this._value = this._insertThousandsSeparators(
                this._removeThousandsSeparators(s + f)
            );
            const E = this._separatorsCountFromSlice(s);
            return new z({
                tailShift: (E - g) * this.thousandsSeparator.length,
            });
        }
        nearestInputPos(t, n) {
            if (!this.thousandsSeparator) return t;
            switch (n) {
                case M.NONE:
                case M.LEFT:
                case M.FORCE_LEFT: {
                    const s = this._findSeparatorAround(t - 1);
                    if (s >= 0) {
                        const f = s + this.thousandsSeparator.length;
                        if (
                            t < f ||
                            this.value.length <= f ||
                            n === M.FORCE_LEFT
                        )
                            return s;
                    }
                    break;
                }
                case M.RIGHT:
                case M.FORCE_RIGHT: {
                    const s = this._findSeparatorAround(t);
                    if (s >= 0) return s + this.thousandsSeparator.length;
                }
            }
            return t;
        }
        doValidate(t) {
            let n = !!this._removeThousandsSeparators(this.value).match(
                this._numberRegExp
            );
            if (n) {
                const s = this.number;
                n =
                    n &&
                    !isNaN(s) &&
                    (this.min == null ||
                        this.min >= 0 ||
                        this.min <= this.number) &&
                    (this.max == null ||
                        this.max <= 0 ||
                        this.number <= this.max);
            }
            return n && super.doValidate(t);
        }
        doCommit() {
            if (this.value) {
                const t = this.number;
                let n = t;
                this.min != null && (n = Math.max(n, this.min)),
                    this.max != null && (n = Math.min(n, this.max)),
                    n !== t && (this.unmaskedValue = this.doFormat(n));
                let s = this.value;
                this.normalizeZeros && (s = this._normalizeZeros(s)),
                    this.padFractionalZeros &&
                        this.scale > 0 &&
                        (s = this._padFractionalZeros(s)),
                    (this._value = s);
            }
            super.doCommit();
        }
        _normalizeZeros(t) {
            const n = this._removeThousandsSeparators(t).split(this.radix);
            return (
                (n[0] = n[0].replace(/^(\D*)(0*)(\d*)/, (s, f, g, E) => f + E)),
                t.length && !/\d$/.test(n[0]) && (n[0] = n[0] + "0"),
                n.length > 1 &&
                    ((n[1] = n[1].replace(/0*$/, "")),
                    n[1].length || (n.length = 1)),
                this._insertThousandsSeparators(n.join(this.radix))
            );
        }
        _padFractionalZeros(t) {
            if (!t) return t;
            const n = t.split(this.radix);
            return (
                n.length < 2 && n.push(""),
                (n[1] = n[1].padEnd(this.scale, "0")),
                n.join(this.radix)
            );
        }
        doSkipInvalid(t) {
            let n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                s = arguments.length > 2 ? arguments[2] : void 0;
            const f =
                this.scale === 0 &&
                t !== this.thousandsSeparator &&
                (t === this.radix ||
                    t === ie.UNMASKED_RADIX ||
                    this.mapToRadix.includes(t));
            return super.doSkipInvalid(t, n, s) && !f;
        }
        get unmaskedValue() {
            return this._removeThousandsSeparators(
                this._normalizeZeros(this.value)
            ).replace(this.radix, ie.UNMASKED_RADIX);
        }
        set unmaskedValue(t) {
            super.unmaskedValue = t;
        }
        get typedValue() {
            return this.doParse(this.unmaskedValue);
        }
        set typedValue(t) {
            this.rawInputValue = this.doFormat(t).replace(
                ie.UNMASKED_RADIX,
                this.radix
            );
        }
        get number() {
            return this.typedValue;
        }
        set number(t) {
            this.typedValue = t;
        }
        get allowNegative() {
            return (
                this.signed ||
                (this.min != null && this.min < 0) ||
                (this.max != null && this.max < 0)
            );
        }
        typedValueEquals(t) {
            return (
                (super.typedValueEquals(t) ||
                    (ie.EMPTY_VALUES.includes(t) &&
                        ie.EMPTY_VALUES.includes(this.typedValue))) &&
                !(t === 0 && this.value === "")
            );
        }
    }
    (ie.UNMASKED_RADIX = "."),
        (ie.DEFAULTS = {
            radix: ",",
            thousandsSeparator: "",
            mapToRadix: [ie.UNMASKED_RADIX],
            scale: 2,
            signed: !1,
            normalizeZeros: !0,
            padFractionalZeros: !1,
            parse: Number,
            format: (o) =>
                o.toLocaleString("en-US", {
                    useGrouping: !1,
                    maximumFractionDigits: 20,
                }),
        }),
        (ie.EMPTY_VALUES = [...K.EMPTY_VALUES, 0]),
        (I.MaskedNumber = ie);
    class yr extends K {
        _update(t) {
            t.mask && (t.validate = t.mask), super._update(t);
        }
    }
    I.MaskedFunction = yr;
    const pi = ["compiledMasks", "currentMaskRef", "currentMask"],
        gs = ["mask"];
    class Hn extends K {
        constructor(t) {
            super(Object.assign({}, Hn.DEFAULTS, t)), (this.currentMask = null);
        }
        _update(t) {
            super._update(t),
                "mask" in t &&
                    (this.compiledMasks = Array.isArray(t.mask)
                        ? t.mask.map((n) => Bt(n))
                        : []);
        }
        _appendCharRaw(t) {
            let n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
            const s = this._applyDispatch(t, n);
            return (
                this.currentMask &&
                    s.aggregate(
                        this.currentMask._appendChar(
                            t,
                            this.currentMaskFlags(n)
                        )
                    ),
                s
            );
        }
        _applyDispatch() {
            let t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : "",
                n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                s =
                    arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : "";
            const f =
                    n.tail && n._beforeTailState != null
                        ? n._beforeTailState._value
                        : this.value,
                g = this.rawInputValue,
                E =
                    n.tail && n._beforeTailState != null
                        ? n._beforeTailState._rawInputValue
                        : g,
                C = g.slice(E.length),
                k = this.currentMask,
                V = new z(),
                j = k == null ? void 0 : k.state;
            if (
                ((this.currentMask = this.doDispatch(
                    t,
                    Object.assign({}, n),
                    s
                )),
                this.currentMask)
            )
                if (this.currentMask !== k) {
                    if ((this.currentMask.reset(), E)) {
                        const tt = this.currentMask.append(E, { raw: !0 });
                        V.tailShift = tt.inserted.length - f.length;
                    }
                    C &&
                        (V.tailShift += this.currentMask.append(C, {
                            raw: !0,
                            tail: !0,
                        }).tailShift);
                } else this.currentMask.state = j;
            return V;
        }
        _appendPlaceholder() {
            const t = this._applyDispatch(...arguments);
            return (
                this.currentMask &&
                    t.aggregate(this.currentMask._appendPlaceholder()),
                t
            );
        }
        _appendEager() {
            const t = this._applyDispatch(...arguments);
            return (
                this.currentMask &&
                    t.aggregate(this.currentMask._appendEager()),
                t
            );
        }
        appendTail(t) {
            const n = new z();
            return (
                t && n.aggregate(this._applyDispatch("", {}, t)),
                n.aggregate(
                    this.currentMask
                        ? this.currentMask.appendTail(t)
                        : super.appendTail(t)
                )
            );
        }
        currentMaskFlags(t) {
            var n, s;
            return Object.assign({}, t, {
                _beforeTailState:
                    (((n = t._beforeTailState) === null || n === void 0
                        ? void 0
                        : n.currentMaskRef) === this.currentMask &&
                        ((s = t._beforeTailState) === null || s === void 0
                            ? void 0
                            : s.currentMask)) ||
                    t._beforeTailState,
            });
        }
        doDispatch(t) {
            let n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                s =
                    arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : "";
            return this.dispatch(t, this, n, s);
        }
        doValidate(t) {
            return (
                super.doValidate(t) &&
                (!this.currentMask ||
                    this.currentMask.doValidate(this.currentMaskFlags(t)))
            );
        }
        doPrepare(t) {
            let n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                [s, f] = It(super.doPrepare(t, n));
            if (this.currentMask) {
                let g;
                ([s, g] = It(super.doPrepare(s, this.currentMaskFlags(n)))),
                    (f = f.aggregate(g));
            }
            return [s, f];
        }
        reset() {
            var t;
            (t = this.currentMask) === null || t === void 0 || t.reset(),
                this.compiledMasks.forEach((n) => n.reset());
        }
        get value() {
            return this.currentMask ? this.currentMask.value : "";
        }
        set value(t) {
            super.value = t;
        }
        get unmaskedValue() {
            return this.currentMask ? this.currentMask.unmaskedValue : "";
        }
        set unmaskedValue(t) {
            super.unmaskedValue = t;
        }
        get typedValue() {
            return this.currentMask ? this.currentMask.typedValue : "";
        }
        set typedValue(t) {
            let n = String(t);
            this.currentMask &&
                ((this.currentMask.typedValue = t),
                (n = this.currentMask.unmaskedValue)),
                (this.unmaskedValue = n);
        }
        get displayValue() {
            return this.currentMask ? this.currentMask.displayValue : "";
        }
        get isComplete() {
            var t;
            return !!(
                !((t = this.currentMask) === null || t === void 0) &&
                t.isComplete
            );
        }
        get isFilled() {
            var t;
            return !!(
                !((t = this.currentMask) === null || t === void 0) && t.isFilled
            );
        }
        remove() {
            const t = new z();
            return (
                this.currentMask &&
                    t
                        .aggregate(this.currentMask.remove(...arguments))
                        .aggregate(this._applyDispatch()),
                t
            );
        }
        get state() {
            var t;
            return Object.assign({}, super.state, {
                _rawInputValue: this.rawInputValue,
                compiledMasks: this.compiledMasks.map((n) => n.state),
                currentMaskRef: this.currentMask,
                currentMask:
                    (t = this.currentMask) === null || t === void 0
                        ? void 0
                        : t.state,
            });
        }
        set state(t) {
            const { compiledMasks: n, currentMaskRef: s, currentMask: f } = t,
                g = O(t, pi);
            this.compiledMasks.forEach((E, C) => (E.state = n[C])),
                s != null &&
                    ((this.currentMask = s), (this.currentMask.state = f)),
                (super.state = g);
        }
        extractInput() {
            return this.currentMask
                ? this.currentMask.extractInput(...arguments)
                : "";
        }
        extractTail() {
            return this.currentMask
                ? this.currentMask.extractTail(...arguments)
                : super.extractTail(...arguments);
        }
        doCommit() {
            this.currentMask && this.currentMask.doCommit(), super.doCommit();
        }
        nearestInputPos() {
            return this.currentMask
                ? this.currentMask.nearestInputPos(...arguments)
                : super.nearestInputPos(...arguments);
        }
        get overwrite() {
            return this.currentMask
                ? this.currentMask.overwrite
                : super.overwrite;
        }
        set overwrite(t) {
            console.warn(
                '"overwrite" option is not available in dynamic mask, use this option in siblings'
            );
        }
        get eager() {
            return this.currentMask ? this.currentMask.eager : super.eager;
        }
        set eager(t) {
            console.warn(
                '"eager" option is not available in dynamic mask, use this option in siblings'
            );
        }
        get skipInvalid() {
            return this.currentMask
                ? this.currentMask.skipInvalid
                : super.skipInvalid;
        }
        set skipInvalid(t) {
            (this.isInitialized || t !== K.DEFAULTS.skipInvalid) &&
                console.warn(
                    '"skipInvalid" option is not available in dynamic mask, use this option in siblings'
                );
        }
        maskEquals(t) {
            return (
                Array.isArray(t) &&
                this.compiledMasks.every((n, s) => {
                    if (!t[s]) return;
                    const f = t[s],
                        { mask: g } = f,
                        E = O(f, gs);
                    return H(n, E) && n.maskEquals(g);
                })
            );
        }
        typedValueEquals(t) {
            var n;
            return !!(
                !((n = this.currentMask) === null || n === void 0) &&
                n.typedValueEquals(t)
            );
        }
    }
    (Hn.DEFAULTS = {
        dispatch: (o, t, n, s) => {
            if (!t.compiledMasks.length) return;
            const f = t.rawInputValue,
                g = t.compiledMasks.map((E, C) => {
                    const k = t.currentMask === E,
                        V = k
                            ? E.value.length
                            : E.nearestInputPos(E.value.length, M.FORCE_LEFT);
                    return (
                        E.rawInputValue !== f
                            ? (E.reset(), E.append(f, { raw: !0 }))
                            : k || E.remove(V),
                        E.append(o, t.currentMaskFlags(n)),
                        E.appendTail(s),
                        {
                            index: C,
                            weight: E.rawInputValue.length,
                            totalInputPositions: E.totalInputPositions(
                                0,
                                Math.max(
                                    V,
                                    E.nearestInputPos(
                                        E.value.length,
                                        M.FORCE_LEFT
                                    )
                                )
                            ),
                        }
                    );
                });
            return (
                g.sort(
                    (E, C) =>
                        C.weight - E.weight ||
                        C.totalInputPositions - E.totalInputPositions
                ),
                t.compiledMasks[g[0].index]
            );
        },
    }),
        (I.MaskedDynamic = Hn);
    const br = {
        MASKED: "value",
        UNMASKED: "unmaskedValue",
        TYPED: "typedValue",
    };
    function gi(o) {
        let t =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : br.MASKED,
            n =
                arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : br.MASKED;
        const s = Bt(o);
        return (f) => s.runIsolated((g) => ((g[t] = f), g[n]));
    }
    function mi(o) {
        for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1;
            s < t;
            s++
        )
            n[s - 1] = arguments[s];
        return gi(...n)(o);
    }
    (I.PIPE_TYPE = br), (I.createPipe = gi), (I.pipe = mi);
    try {
        globalThis.IMask = I;
    } catch {}
    var _e = [].slice.call(document.querySelectorAll("[data-mask]"));
    _e.map(function (o) {
        return new I(o, {
            mask: o.dataset.mask,
            lazy: o.dataset["mask-visible"] === "true",
        });
    });
    var zt = "top",
        Ft = "bottom",
        jt = "right",
        Ht = "left",
        qn = "auto",
        Ie = [zt, Ft, jt, Ht],
        ve = "start",
        Zt = "end",
        _i = "clippingParents",
        Ar = "viewport",
        un = "popper",
        ce = "reference",
        Ue = Ie.reduce(function (o, t) {
            return o.concat([t + "-" + ve, t + "-" + Zt]);
        }, []),
        ze = [].concat(Ie, [qn]).reduce(function (o, t) {
            return o.concat([t, t + "-" + ve, t + "-" + Zt]);
        }, []),
        J = "beforeRead",
        Kt = "read",
        vi = "afterRead",
        Ei = "beforeMain",
        yi = "main",
        Tr = "afterMain",
        Cr = "beforeWrite",
        ln = "write",
        Ee = "afterWrite",
        Fe = [J, Kt, vi, Ei, yi, Tr, Cr, ln, Ee];
    function Yt(o) {
        return o ? (o.nodeName || "").toLowerCase() : null;
    }
    function se(o) {
        if (o == null) return window;
        if (o.toString() !== "[object Window]") {
            var t = o.ownerDocument;
            return (t && t.defaultView) || window;
        }
        return o;
    }
    function ye(o) {
        var t = se(o).Element;
        return o instanceof t || o instanceof Element;
    }
    function oe(o) {
        var t = se(o).HTMLElement;
        return o instanceof t || o instanceof HTMLElement;
    }
    function Wn(o) {
        if (typeof ShadowRoot > "u") return !1;
        var t = se(o).ShadowRoot;
        return o instanceof t || o instanceof ShadowRoot;
    }
    function ms(o) {
        var t = o.state;
        Object.keys(t.elements).forEach(function (n) {
            var s = t.styles[n] || {},
                f = t.attributes[n] || {},
                g = t.elements[n];
            !oe(g) ||
                !Yt(g) ||
                (Object.assign(g.style, s),
                Object.keys(f).forEach(function (E) {
                    var C = f[E];
                    C === !1
                        ? g.removeAttribute(E)
                        : g.setAttribute(E, C === !0 ? "" : C);
                }));
        });
    }
    function cn(o) {
        var t = o.state,
            n = {
                popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
            };
        return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
                Object.keys(t.elements).forEach(function (s) {
                    var f = t.elements[s],
                        g = t.attributes[s] || {},
                        E = Object.keys(
                            t.styles.hasOwnProperty(s) ? t.styles[s] : n[s]
                        ),
                        C = E.reduce(function (k, V) {
                            return (k[V] = ""), k;
                        }, {});
                    !oe(f) ||
                        !Yt(f) ||
                        (Object.assign(f.style, C),
                        Object.keys(g).forEach(function (k) {
                            f.removeAttribute(k);
                        }));
                });
            }
        );
    }
    var Ke = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: ms,
        effect: cn,
        requires: ["computeStyles"],
    };
    function fe(o) {
        return o.split("-")[0];
    }
    var Me = Math.max,
        Gt = Math.min,
        Nt = Math.round;
    function An() {
        var o = navigator.userAgentData;
        return o != null && o.brands && Array.isArray(o.brands)
            ? o.brands
                  .map(function (t) {
                      return t.brand + "/" + t.version;
                  })
                  .join(" ")
            : navigator.userAgent;
    }
    function bi() {
        return !/^((?!chrome|android).)*safari/i.test(An());
    }
    function Ye(o, t, n) {
        t === void 0 && (t = !1), n === void 0 && (n = !1);
        var s = o.getBoundingClientRect(),
            f = 1,
            g = 1;
        t &&
            oe(o) &&
            ((f = (o.offsetWidth > 0 && Nt(s.width) / o.offsetWidth) || 1),
            (g = (o.offsetHeight > 0 && Nt(s.height) / o.offsetHeight) || 1));
        var E = ye(o) ? se(o) : window,
            C = E.visualViewport,
            k = !bi() && n,
            V = (s.left + (k && C ? C.offsetLeft : 0)) / f,
            j = (s.top + (k && C ? C.offsetTop : 0)) / g,
            tt = s.width / f,
            st = s.height / g;
        return {
            width: tt,
            height: st,
            top: j,
            right: V + tt,
            bottom: j + st,
            left: V,
            x: V,
            y: j,
        };
    }
    function Un(o) {
        var t = Ye(o),
            n = o.offsetWidth,
            s = o.offsetHeight;
        return (
            Math.abs(t.width - n) <= 1 && (n = t.width),
            Math.abs(t.height - s) <= 1 && (s = t.height),
            { x: o.offsetLeft, y: o.offsetTop, width: n, height: s }
        );
    }
    function Ge(o, t) {
        var n = t.getRootNode && t.getRootNode();
        if (o.contains(t)) return !0;
        if (n && Wn(n)) {
            var s = t;
            do {
                if (s && o.isSameNode(s)) return !0;
                s = s.parentNode || s.host;
            } while (s);
        }
        return !1;
    }
    function te(o) {
        return se(o).getComputedStyle(o);
    }
    function wr(o) {
        return ["table", "td", "th"].indexOf(Yt(o)) >= 0;
    }
    function he(o) {
        return (
            (ye(o) ? o.ownerDocument : o.document) || window.document
        ).documentElement;
    }
    function zn(o) {
        return Yt(o) === "html"
            ? o
            : o.assignedSlot ||
                  o.parentNode ||
                  (Wn(o) ? o.host : null) ||
                  he(o);
    }
    function Ai(o) {
        return !oe(o) || te(o).position === "fixed" ? null : o.offsetParent;
    }
    function _s(o) {
        var t = /firefox/i.test(An()),
            n = /Trident/i.test(An());
        if (n && oe(o)) {
            var s = te(o);
            if (s.position === "fixed") return null;
        }
        var f = zn(o);
        for (
            Wn(f) && (f = f.host);
            oe(f) && ["html", "body"].indexOf(Yt(f)) < 0;

        ) {
            var g = te(f);
            if (
                g.transform !== "none" ||
                g.perspective !== "none" ||
                g.contain === "paint" ||
                ["transform", "perspective"].indexOf(g.willChange) !== -1 ||
                (t && g.willChange === "filter") ||
                (t && g.filter && g.filter !== "none")
            )
                return f;
            f = f.parentNode;
        }
        return null;
    }
    function fn(o) {
        for (
            var t = se(o), n = Ai(o);
            n && wr(n) && te(n).position === "static";

        )
            n = Ai(n);
        return n &&
            (Yt(n) === "html" ||
                (Yt(n) === "body" && te(n).position === "static"))
            ? t
            : n || _s(o) || t;
    }
    function Sr(o) {
        return ["top", "bottom"].indexOf(o) >= 0 ? "x" : "y";
    }
    function Tn(o, t, n) {
        return Me(o, Gt(t, n));
    }
    function Ti(o, t, n) {
        var s = Tn(o, t, n);
        return s > n ? n : s;
    }
    function Ci() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
    }
    function Xe(o) {
        return Object.assign({}, Ci(), o);
    }
    function xr(o, t) {
        return t.reduce(function (n, s) {
            return (n[s] = o), n;
        }, {});
    }
    var kr = function (t, n) {
        return (
            (t =
                typeof t == "function"
                    ? t(Object.assign({}, n.rects, { placement: n.placement }))
                    : t),
            Xe(typeof t != "number" ? t : xr(t, Ie))
        );
    };
    function Or(o) {
        var t,
            n = o.state,
            s = o.name,
            f = o.options,
            g = n.elements.arrow,
            E = n.modifiersData.popperOffsets,
            C = fe(n.placement),
            k = Sr(C),
            V = [Ht, jt].indexOf(C) >= 0,
            j = V ? "height" : "width";
        if (!(!g || !E)) {
            var tt = kr(f.padding, n),
                st = Un(g),
                rt = k === "y" ? zt : Ht,
                vt = k === "y" ? Ft : jt,
                at =
                    n.rects.reference[j] +
                    n.rects.reference[k] -
                    E[k] -
                    n.rects.popper[j],
                mt = E[k] - n.rects.reference[k],
                wt = fn(g),
                Dt = wt
                    ? k === "y"
                        ? wt.clientHeight || 0
                        : wt.clientWidth || 0
                    : 0,
                Ot = at / 2 - mt / 2,
                lt = tt[rt],
                Tt = Dt - st[j] - tt[vt],
                Ct = Dt / 2 - st[j] / 2 + Ot,
                St = Tn(lt, Ct, Tt),
                $t = k;
            n.modifiersData[s] =
                ((t = {}), (t[$t] = St), (t.centerOffset = St - Ct), t);
        }
    }
    function Kn(o) {
        var t = o.state,
            n = o.options,
            s = n.element,
            f = s === void 0 ? "[data-popper-arrow]" : s;
        f != null &&
            ((typeof f == "string" &&
                ((f = t.elements.popper.querySelector(f)), !f)) ||
                (Ge(t.elements.popper, f) && (t.elements.arrow = f)));
    }
    var Dr = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: Or,
        effect: Kn,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
    };
    function hn(o) {
        return o.split("-")[1];
    }
    var Cn = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function wi(o, t) {
        var n = o.x,
            s = o.y,
            f = t.devicePixelRatio || 1;
        return { x: Nt(n * f) / f || 0, y: Nt(s * f) / f || 0 };
    }
    function Nr(o) {
        var t,
            n = o.popper,
            s = o.popperRect,
            f = o.placement,
            g = o.variation,
            E = o.offsets,
            C = o.position,
            k = o.gpuAcceleration,
            V = o.adaptive,
            j = o.roundOffsets,
            tt = o.isFixed,
            st = E.x,
            rt = st === void 0 ? 0 : st,
            vt = E.y,
            at = vt === void 0 ? 0 : vt,
            mt =
                typeof j == "function" ? j({ x: rt, y: at }) : { x: rt, y: at };
        (rt = mt.x), (at = mt.y);
        var wt = E.hasOwnProperty("x"),
            Dt = E.hasOwnProperty("y"),
            Ot = Ht,
            lt = zt,
            Tt = window;
        if (V) {
            var Ct = fn(n),
                St = "clientHeight",
                $t = "clientWidth";
            if (
                (Ct === se(n) &&
                    ((Ct = he(n)),
                    te(Ct).position !== "static" &&
                        C === "absolute" &&
                        ((St = "scrollHeight"), ($t = "scrollWidth"))),
                (Ct = Ct),
                f === zt || ((f === Ht || f === jt) && g === Zt))
            ) {
                lt = Ft;
                var Ut =
                    tt && Ct === Tt && Tt.visualViewport
                        ? Tt.visualViewport.height
                        : Ct[St];
                (at -= Ut - s.height), (at *= k ? 1 : -1);
            }
            if (f === Ht || ((f === zt || f === Ft) && g === Zt)) {
                Ot = jt;
                var Vt =
                    tt && Ct === Tt && Tt.visualViewport
                        ? Tt.visualViewport.width
                        : Ct[$t];
                (rt -= Vt - s.width), (rt *= k ? 1 : -1);
            }
        }
        var re = Object.assign({ position: C }, V && Cn),
            Ne = j === !0 ? wi({ x: rt, y: at }, se(n)) : { x: rt, y: at };
        if (((rt = Ne.x), (at = Ne.y), k)) {
            var ae;
            return Object.assign(
                {},
                re,
                ((ae = {}),
                (ae[lt] = Dt ? "0" : ""),
                (ae[Ot] = wt ? "0" : ""),
                (ae.transform =
                    (Tt.devicePixelRatio || 1) <= 1
                        ? "translate(" + rt + "px, " + at + "px)"
                        : "translate3d(" + rt + "px, " + at + "px, 0)"),
                ae)
            );
        }
        return Object.assign(
            {},
            re,
            ((t = {}),
            (t[lt] = Dt ? at + "px" : ""),
            (t[Ot] = wt ? rt + "px" : ""),
            (t.transform = ""),
            t)
        );
    }
    function Si(o) {
        var t = o.state,
            n = o.options,
            s = n.gpuAcceleration,
            f = s === void 0 ? !0 : s,
            g = n.adaptive,
            E = g === void 0 ? !0 : g,
            C = n.roundOffsets,
            k = C === void 0 ? !0 : C,
            V = {
                placement: fe(t.placement),
                variation: hn(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: f,
                isFixed: t.options.strategy === "fixed",
            };
        t.modifiersData.popperOffsets != null &&
            (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                Nr(
                    Object.assign({}, V, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: E,
                        roundOffsets: k,
                    })
                )
            )),
            t.modifiersData.arrow != null &&
                (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    Nr(
                        Object.assign({}, V, {
                            offsets: t.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: k,
                        })
                    )
                )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement,
            }));
    }
    var Yn = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: Si,
            data: {},
        },
        Gn = { passive: !0 };
    function Lr(o) {
        var t = o.state,
            n = o.instance,
            s = o.options,
            f = s.scroll,
            g = f === void 0 ? !0 : f,
            E = s.resize,
            C = E === void 0 ? !0 : E,
            k = se(t.elements.popper),
            V = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
            g &&
                V.forEach(function (j) {
                    j.addEventListener("scroll", n.update, Gn);
                }),
            C && k.addEventListener("resize", n.update, Gn),
            function () {
                g &&
                    V.forEach(function (j) {
                        j.removeEventListener("scroll", n.update, Gn);
                    }),
                    C && k.removeEventListener("resize", n.update, Gn);
            }
        );
    }
    var Rr = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: Lr,
            data: {},
        },
        vs = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function wn(o) {
        return o.replace(/left|right|bottom|top/g, function (t) {
            return vs[t];
        });
    }
    var xi = { start: "end", end: "start" };
    function Xn(o) {
        return o.replace(/start|end/g, function (t) {
            return xi[t];
        });
    }
    function Jn(o) {
        var t = se(o),
            n = t.pageXOffset,
            s = t.pageYOffset;
        return { scrollLeft: n, scrollTop: s };
    }
    function qt(o) {
        return Ye(he(o)).left + Jn(o).scrollLeft;
    }
    function dn(o, t) {
        var n = se(o),
            s = he(o),
            f = n.visualViewport,
            g = s.clientWidth,
            E = s.clientHeight,
            C = 0,
            k = 0;
        if (f) {
            (g = f.width), (E = f.height);
            var V = bi();
            (V || (!V && t === "fixed")) &&
                ((C = f.offsetLeft), (k = f.offsetTop));
        }
        return { width: g, height: E, x: C + qt(o), y: k };
    }
    function Qn(o) {
        var t,
            n = he(o),
            s = Jn(o),
            f = (t = o.ownerDocument) == null ? void 0 : t.body,
            g = Me(
                n.scrollWidth,
                n.clientWidth,
                f ? f.scrollWidth : 0,
                f ? f.clientWidth : 0
            ),
            E = Me(
                n.scrollHeight,
                n.clientHeight,
                f ? f.scrollHeight : 0,
                f ? f.clientHeight : 0
            ),
            C = -s.scrollLeft + qt(o),
            k = -s.scrollTop;
        return (
            te(f || n).direction === "rtl" &&
                (C += Me(n.clientWidth, f ? f.clientWidth : 0) - g),
            { width: g, height: E, x: C, y: k }
        );
    }
    function Pr(o) {
        var t = te(o),
            n = t.overflow,
            s = t.overflowX,
            f = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + f + s);
    }
    function ki(o) {
        return ["html", "body", "#document"].indexOf(Yt(o)) >= 0
            ? o.ownerDocument.body
            : oe(o) && Pr(o)
            ? o
            : ki(zn(o));
    }
    function Je(o, t) {
        var n;
        t === void 0 && (t = []);
        var s = ki(o),
            f = s === ((n = o.ownerDocument) == null ? void 0 : n.body),
            g = se(s),
            E = f ? [g].concat(g.visualViewport || [], Pr(s) ? s : []) : s,
            C = t.concat(E);
        return f ? C : C.concat(Je(zn(E)));
    }
    function Zn(o) {
        return Object.assign({}, o, {
            left: o.x,
            top: o.y,
            right: o.x + o.width,
            bottom: o.y + o.height,
        });
    }
    function tr(o, t) {
        var n = Ye(o, !1, t === "fixed");
        return (
            (n.top = n.top + o.clientTop),
            (n.left = n.left + o.clientLeft),
            (n.bottom = n.top + o.clientHeight),
            (n.right = n.left + o.clientWidth),
            (n.width = o.clientWidth),
            (n.height = o.clientHeight),
            (n.x = n.left),
            (n.y = n.top),
            n
        );
    }
    function Ir(o, t, n) {
        return t === Ar ? Zn(dn(o, n)) : ye(t) ? tr(t, n) : Zn(Qn(he(o)));
    }
    function Es(o) {
        var t = Je(zn(o)),
            n = ["absolute", "fixed"].indexOf(te(o).position) >= 0,
            s = n && oe(o) ? fn(o) : o;
        return ye(s)
            ? t.filter(function (f) {
                  return ye(f) && Ge(f, s) && Yt(f) !== "body";
              })
            : [];
    }
    function ys(o, t, n, s) {
        var f = t === "clippingParents" ? Es(o) : [].concat(t),
            g = [].concat(f, [n]),
            E = g[0],
            C = g.reduce(function (k, V) {
                var j = Ir(o, V, s);
                return (
                    (k.top = Me(j.top, k.top)),
                    (k.right = Gt(j.right, k.right)),
                    (k.bottom = Gt(j.bottom, k.bottom)),
                    (k.left = Me(j.left, k.left)),
                    k
                );
            }, Ir(o, E, s));
        return (
            (C.width = C.right - C.left),
            (C.height = C.bottom - C.top),
            (C.x = C.left),
            (C.y = C.top),
            C
        );
    }
    function ue(o) {
        var t = o.reference,
            n = o.element,
            s = o.placement,
            f = s ? fe(s) : null,
            g = s ? hn(s) : null,
            E = t.x + t.width / 2 - n.width / 2,
            C = t.y + t.height / 2 - n.height / 2,
            k;
        switch (f) {
            case zt:
                k = { x: E, y: t.y - n.height };
                break;
            case Ft:
                k = { x: E, y: t.y + t.height };
                break;
            case jt:
                k = { x: t.x + t.width, y: C };
                break;
            case Ht:
                k = { x: t.x - n.width, y: C };
                break;
            default:
                k = { x: t.x, y: t.y };
        }
        var V = f ? Sr(f) : null;
        if (V != null) {
            var j = V === "y" ? "height" : "width";
            switch (g) {
                case ve:
                    k[V] = k[V] - (t[j] / 2 - n[j] / 2);
                    break;
                case Zt:
                    k[V] = k[V] + (t[j] / 2 - n[j] / 2);
                    break;
            }
        }
        return k;
    }
    function Qe(o, t) {
        t === void 0 && (t = {});
        var n = t,
            s = n.placement,
            f = s === void 0 ? o.placement : s,
            g = n.strategy,
            E = g === void 0 ? o.strategy : g,
            C = n.boundary,
            k = C === void 0 ? _i : C,
            V = n.rootBoundary,
            j = V === void 0 ? Ar : V,
            tt = n.elementContext,
            st = tt === void 0 ? un : tt,
            rt = n.altBoundary,
            vt = rt === void 0 ? !1 : rt,
            at = n.padding,
            mt = at === void 0 ? 0 : at,
            wt = Xe(typeof mt != "number" ? mt : xr(mt, Ie)),
            Dt = st === un ? ce : un,
            Ot = o.rects.popper,
            lt = o.elements[vt ? Dt : st],
            Tt = ys(
                ye(lt) ? lt : lt.contextElement || he(o.elements.popper),
                k,
                j,
                E
            ),
            Ct = Ye(o.elements.reference),
            St = ue({
                reference: Ct,
                element: Ot,
                strategy: "absolute",
                placement: f,
            }),
            $t = Zn(Object.assign({}, Ot, St)),
            Ut = st === un ? $t : Ct,
            Vt = {
                top: Tt.top - Ut.top + wt.top,
                bottom: Ut.bottom - Tt.bottom + wt.bottom,
                left: Tt.left - Ut.left + wt.left,
                right: Ut.right - Tt.right + wt.right,
            },
            re = o.modifiersData.offset;
        if (st === un && re) {
            var Ne = re[f];
            Object.keys(Vt).forEach(function (ae) {
                var Fn = [jt, Ft].indexOf(ae) >= 0 ? 1 : -1,
                    Mn = [zt, Ft].indexOf(ae) >= 0 ? "y" : "x";
                Vt[ae] += Ne[Mn] * Fn;
            });
        }
        return Vt;
    }
    function Sn(o, t) {
        t === void 0 && (t = {});
        var n = t,
            s = n.placement,
            f = n.boundary,
            g = n.rootBoundary,
            E = n.padding,
            C = n.flipVariations,
            k = n.allowedAutoPlacements,
            V = k === void 0 ? ze : k,
            j = hn(s),
            tt = j
                ? C
                    ? Ue
                    : Ue.filter(function (vt) {
                          return hn(vt) === j;
                      })
                : Ie,
            st = tt.filter(function (vt) {
                return V.indexOf(vt) >= 0;
            });
        st.length === 0 && (st = tt);
        var rt = st.reduce(function (vt, at) {
            return (
                (vt[at] = Qe(o, {
                    placement: at,
                    boundary: f,
                    rootBoundary: g,
                    padding: E,
                })[fe(at)]),
                vt
            );
        }, {});
        return Object.keys(rt).sort(function (vt, at) {
            return rt[vt] - rt[at];
        });
    }
    function bs(o) {
        if (fe(o) === qn) return [];
        var t = wn(o);
        return [Xn(o), t, Xn(t)];
    }
    function As(o) {
        var t = o.state,
            n = o.options,
            s = o.name;
        if (!t.modifiersData[s]._skip) {
            for (
                var f = n.mainAxis,
                    g = f === void 0 ? !0 : f,
                    E = n.altAxis,
                    C = E === void 0 ? !0 : E,
                    k = n.fallbackPlacements,
                    V = n.padding,
                    j = n.boundary,
                    tt = n.rootBoundary,
                    st = n.altBoundary,
                    rt = n.flipVariations,
                    vt = rt === void 0 ? !0 : rt,
                    at = n.allowedAutoPlacements,
                    mt = t.options.placement,
                    wt = fe(mt),
                    Dt = wt === mt,
                    Ot = k || (Dt || !vt ? [wn(mt)] : bs(mt)),
                    lt = [mt].concat(Ot).reduce(function (gr, yn) {
                        return gr.concat(
                            fe(yn) === qn
                                ? Sn(t, {
                                      placement: yn,
                                      boundary: j,
                                      rootBoundary: tt,
                                      padding: V,
                                      flipVariations: vt,
                                      allowedAutoPlacements: at,
                                  })
                                : yn
                        );
                    }, []),
                    Tt = t.rects.reference,
                    Ct = t.rects.popper,
                    St = new Map(),
                    $t = !0,
                    Ut = lt[0],
                    Vt = 0;
                Vt < lt.length;
                Vt++
            ) {
                var re = lt[Vt],
                    Ne = fe(re),
                    ae = hn(re) === ve,
                    Fn = [zt, Ft].indexOf(Ne) >= 0,
                    Mn = Fn ? "width" : "height",
                    me = Qe(t, {
                        placement: re,
                        boundary: j,
                        rootBoundary: tt,
                        altBoundary: st,
                        padding: V,
                    }),
                    Le = Fn ? (ae ? jt : Ht) : ae ? Ft : zt;
                Tt[Mn] > Ct[Mn] && (Le = wn(Le));
                var Ji = wn(Le),
                    Bn = [];
                if (
                    (g && Bn.push(me[Ne] <= 0),
                    C && Bn.push(me[Le] <= 0, me[Ji] <= 0),
                    Bn.every(function (gr) {
                        return gr;
                    }))
                ) {
                    (Ut = re), ($t = !1);
                    break;
                }
                St.set(re, Bn);
            }
            if ($t)
                for (
                    var Qi = vt ? 3 : 1,
                        Gs = function (yn) {
                            var si = lt.find(function (ts) {
                                var $n = St.get(ts);
                                if ($n)
                                    return $n.slice(0, yn).every(function (Xs) {
                                        return Xs;
                                    });
                            });
                            if (si) return (Ut = si), "break";
                        },
                        ii = Qi;
                    ii > 0;
                    ii--
                ) {
                    var Zi = Gs(ii);
                    if (Zi === "break") break;
                }
            t.placement !== Ut &&
                ((t.modifiersData[s]._skip = !0),
                (t.placement = Ut),
                (t.reset = !0));
        }
    }
    var Be = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: As,
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
    };
    function $e(o, t, n) {
        return (
            n === void 0 && (n = { x: 0, y: 0 }),
            {
                top: o.top - t.height - n.y,
                right: o.right - t.width + n.x,
                bottom: o.bottom - t.height + n.y,
                left: o.left - t.width - n.x,
            }
        );
    }
    function er(o) {
        return [zt, jt, Ft, Ht].some(function (t) {
            return o[t] >= 0;
        });
    }
    function Ts(o) {
        var t = o.state,
            n = o.name,
            s = t.rects.reference,
            f = t.rects.popper,
            g = t.modifiersData.preventOverflow,
            E = Qe(t, { elementContext: "reference" }),
            C = Qe(t, { altBoundary: !0 }),
            k = $e(E, s),
            V = $e(C, f, g),
            j = er(k),
            tt = er(V);
        (t.modifiersData[n] = {
            referenceClippingOffsets: k,
            popperEscapeOffsets: V,
            isReferenceHidden: j,
            hasPopperEscaped: tt,
        }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": j,
                "data-popper-escaped": tt,
            }));
    }
    var pn = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: Ts,
    };
    function Oi(o, t, n) {
        var s = fe(o),
            f = [Ht, zt].indexOf(s) >= 0 ? -1 : 1,
            g =
                typeof n == "function"
                    ? n(Object.assign({}, t, { placement: o }))
                    : n,
            E = g[0],
            C = g[1];
        return (
            (E = E || 0),
            (C = (C || 0) * f),
            [Ht, jt].indexOf(s) >= 0 ? { x: C, y: E } : { x: E, y: C }
        );
    }
    function Fr(o) {
        var t = o.state,
            n = o.options,
            s = o.name,
            f = n.offset,
            g = f === void 0 ? [0, 0] : f,
            E = ze.reduce(function (j, tt) {
                return (j[tt] = Oi(tt, t.rects, g)), j;
            }, {}),
            C = E[t.placement],
            k = C.x,
            V = C.y;
        t.modifiersData.popperOffsets != null &&
            ((t.modifiersData.popperOffsets.x += k),
            (t.modifiersData.popperOffsets.y += V)),
            (t.modifiersData[s] = E);
    }
    var Mr = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: Fr,
    };
    function Di(o) {
        var t = o.state,
            n = o.name;
        t.modifiersData[n] = ue({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement,
        });
    }
    var Br = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: Di,
        data: {},
    };
    function Ni(o) {
        return o === "x" ? "y" : "x";
    }
    function Cs(o) {
        var t = o.state,
            n = o.options,
            s = o.name,
            f = n.mainAxis,
            g = f === void 0 ? !0 : f,
            E = n.altAxis,
            C = E === void 0 ? !1 : E,
            k = n.boundary,
            V = n.rootBoundary,
            j = n.altBoundary,
            tt = n.padding,
            st = n.tether,
            rt = st === void 0 ? !0 : st,
            vt = n.tetherOffset,
            at = vt === void 0 ? 0 : vt,
            mt = Qe(t, {
                boundary: k,
                rootBoundary: V,
                padding: tt,
                altBoundary: j,
            }),
            wt = fe(t.placement),
            Dt = hn(t.placement),
            Ot = !Dt,
            lt = Sr(wt),
            Tt = Ni(lt),
            Ct = t.modifiersData.popperOffsets,
            St = t.rects.reference,
            $t = t.rects.popper,
            Ut =
                typeof at == "function"
                    ? at(Object.assign({}, t.rects, { placement: t.placement }))
                    : at,
            Vt =
                typeof Ut == "number"
                    ? { mainAxis: Ut, altAxis: Ut }
                    : Object.assign({ mainAxis: 0, altAxis: 0 }, Ut),
            re = t.modifiersData.offset
                ? t.modifiersData.offset[t.placement]
                : null,
            Ne = { x: 0, y: 0 };
        if (Ct) {
            if (g) {
                var ae,
                    Fn = lt === "y" ? zt : Ht,
                    Mn = lt === "y" ? Ft : jt,
                    me = lt === "y" ? "height" : "width",
                    Le = Ct[lt],
                    Ji = Le + mt[Fn],
                    Bn = Le - mt[Mn],
                    Qi = rt ? -$t[me] / 2 : 0,
                    Gs = Dt === ve ? St[me] : $t[me],
                    ii = Dt === ve ? -$t[me] : -St[me],
                    Zi = t.elements.arrow,
                    gr = rt && Zi ? Un(Zi) : { width: 0, height: 0 },
                    yn = t.modifiersData["arrow#persistent"]
                        ? t.modifiersData["arrow#persistent"].padding
                        : Ci(),
                    si = yn[Fn],
                    ts = yn[Mn],
                    $n = Tn(0, St[me], gr[me]),
                    Xs = Ot
                        ? St[me] / 2 - Qi - $n - si - Vt.mainAxis
                        : Gs - $n - si - Vt.mainAxis,
                    vf = Ot
                        ? -St[me] / 2 + Qi + $n + ts + Vt.mainAxis
                        : ii + $n + ts + Vt.mainAxis,
                    Js = t.elements.arrow && fn(t.elements.arrow),
                    Ef = Js
                        ? lt === "y"
                            ? Js.clientTop || 0
                            : Js.clientLeft || 0
                        : 0,
                    ra = (ae = re == null ? void 0 : re[lt]) != null ? ae : 0,
                    yf = Le + Xs - ra - Ef,
                    bf = Le + vf - ra,
                    ia = Tn(rt ? Gt(Ji, yf) : Ji, Le, rt ? Me(Bn, bf) : Bn);
                (Ct[lt] = ia), (Ne[lt] = ia - Le);
            }
            if (C) {
                var sa,
                    Af = lt === "x" ? zt : Ht,
                    Tf = lt === "x" ? Ft : jt,
                    Vn = Ct[Tt],
                    es = Tt === "y" ? "height" : "width",
                    oa = Vn + mt[Af],
                    aa = Vn - mt[Tf],
                    Qs = [zt, Ht].indexOf(wt) !== -1,
                    ua = (sa = re == null ? void 0 : re[Tt]) != null ? sa : 0,
                    la = Qs ? oa : Vn - St[es] - $t[es] - ua + Vt.altAxis,
                    ca = Qs ? Vn + St[es] + $t[es] - ua - Vt.altAxis : aa,
                    fa =
                        rt && Qs
                            ? Ti(la, Vn, ca)
                            : Tn(rt ? la : oa, Vn, rt ? ca : aa);
                (Ct[Tt] = fa), (Ne[Tt] = fa - Vn);
            }
            t.modifiersData[s] = Ne;
        }
    }
    var Li = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: Cs,
        requiresIfExists: ["offset"],
    };
    function $r(o) {
        return { scrollLeft: o.scrollLeft, scrollTop: o.scrollTop };
    }
    function ws(o) {
        return o === se(o) || !oe(o) ? Jn(o) : $r(o);
    }
    function Ss(o) {
        var t = o.getBoundingClientRect(),
            n = Nt(t.width) / o.offsetWidth || 1,
            s = Nt(t.height) / o.offsetHeight || 1;
        return n !== 1 || s !== 1;
    }
    function xs(o, t, n) {
        n === void 0 && (n = !1);
        var s = oe(t),
            f = oe(t) && Ss(t),
            g = he(t),
            E = Ye(o, f, n),
            C = { scrollLeft: 0, scrollTop: 0 },
            k = { x: 0, y: 0 };
        return (
            (s || (!s && !n)) &&
                ((Yt(t) !== "body" || Pr(g)) && (C = ws(t)),
                oe(t)
                    ? ((k = Ye(t, !0)),
                      (k.x += t.clientLeft),
                      (k.y += t.clientTop))
                    : g && (k.x = qt(g))),
            {
                x: E.left + C.scrollLeft - k.x,
                y: E.top + C.scrollTop - k.y,
                width: E.width,
                height: E.height,
            }
        );
    }
    function ks(o) {
        var t = new Map(),
            n = new Set(),
            s = [];
        o.forEach(function (g) {
            t.set(g.name, g);
        });
        function f(g) {
            n.add(g.name);
            var E = [].concat(g.requires || [], g.requiresIfExists || []);
            E.forEach(function (C) {
                if (!n.has(C)) {
                    var k = t.get(C);
                    k && f(k);
                }
            }),
                s.push(g);
        }
        return (
            o.forEach(function (g) {
                n.has(g.name) || f(g);
            }),
            s
        );
    }
    function Os(o) {
        var t = ks(o);
        return Fe.reduce(function (n, s) {
            return n.concat(
                t.filter(function (f) {
                    return f.phase === s;
                })
            );
        }, []);
    }
    function Ds(o) {
        var t;
        return function () {
            return (
                t ||
                    (t = new Promise(function (n) {
                        Promise.resolve().then(function () {
                            (t = void 0), n(o());
                        });
                    })),
                t
            );
        };
    }
    function Ns(o) {
        var t = o.reduce(function (n, s) {
            var f = n[s.name];
            return (
                (n[s.name] = f
                    ? Object.assign({}, f, s, {
                          options: Object.assign({}, f.options, s.options),
                          data: Object.assign({}, f.data, s.data),
                      })
                    : s),
                n
            );
        }, {});
        return Object.keys(t).map(function (n) {
            return t[n];
        });
    }
    var Vr = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function nr() {
        for (var o = arguments.length, t = new Array(o), n = 0; n < o; n++)
            t[n] = arguments[n];
        return !t.some(function (s) {
            return !(s && typeof s.getBoundingClientRect == "function");
        });
    }
    function xn(o) {
        o === void 0 && (o = {});
        var t = o,
            n = t.defaultModifiers,
            s = n === void 0 ? [] : n,
            f = t.defaultOptions,
            g = f === void 0 ? Vr : f;
        return function (C, k, V) {
            V === void 0 && (V = g);
            var j = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, Vr, g),
                    modifiersData: {},
                    elements: { reference: C, popper: k },
                    attributes: {},
                    styles: {},
                },
                tt = [],
                st = !1,
                rt = {
                    state: j,
                    setOptions: function (wt) {
                        var Dt = typeof wt == "function" ? wt(j.options) : wt;
                        at(),
                            (j.options = Object.assign({}, g, j.options, Dt)),
                            (j.scrollParents = {
                                reference: ye(C)
                                    ? Je(C)
                                    : C.contextElement
                                    ? Je(C.contextElement)
                                    : [],
                                popper: Je(k),
                            });
                        var Ot = Os(Ns([].concat(s, j.options.modifiers)));
                        return (
                            (j.orderedModifiers = Ot.filter(function (lt) {
                                return lt.enabled;
                            })),
                            vt(),
                            rt.update()
                        );
                    },
                    forceUpdate: function () {
                        if (!st) {
                            var wt = j.elements,
                                Dt = wt.reference,
                                Ot = wt.popper;
                            if (nr(Dt, Ot)) {
                                (j.rects = {
                                    reference: xs(
                                        Dt,
                                        fn(Ot),
                                        j.options.strategy === "fixed"
                                    ),
                                    popper: Un(Ot),
                                }),
                                    (j.reset = !1),
                                    (j.placement = j.options.placement),
                                    j.orderedModifiers.forEach(function (Vt) {
                                        return (j.modifiersData[Vt.name] =
                                            Object.assign({}, Vt.data));
                                    });
                                for (
                                    var lt = 0;
                                    lt < j.orderedModifiers.length;
                                    lt++
                                ) {
                                    if (j.reset === !0) {
                                        (j.reset = !1), (lt = -1);
                                        continue;
                                    }
                                    var Tt = j.orderedModifiers[lt],
                                        Ct = Tt.fn,
                                        St = Tt.options,
                                        $t = St === void 0 ? {} : St,
                                        Ut = Tt.name;
                                    typeof Ct == "function" &&
                                        (j =
                                            Ct({
                                                state: j,
                                                options: $t,
                                                name: Ut,
                                                instance: rt,
                                            }) || j);
                                }
                            }
                        }
                    },
                    update: Ds(function () {
                        return new Promise(function (mt) {
                            rt.forceUpdate(), mt(j);
                        });
                    }),
                    destroy: function () {
                        at(), (st = !0);
                    },
                };
            if (!nr(C, k)) return rt;
            rt.setOptions(V).then(function (mt) {
                !st && V.onFirstUpdate && V.onFirstUpdate(mt);
            });
            function vt() {
                j.orderedModifiers.forEach(function (mt) {
                    var wt = mt.name,
                        Dt = mt.options,
                        Ot = Dt === void 0 ? {} : Dt,
                        lt = mt.effect;
                    if (typeof lt == "function") {
                        var Tt = lt({
                                state: j,
                                name: wt,
                                instance: rt,
                                options: Ot,
                            }),
                            Ct = function () {};
                        tt.push(Tt || Ct);
                    }
                });
            }
            function at() {
                tt.forEach(function (mt) {
                    return mt();
                }),
                    (tt = []);
            }
            return rt;
        };
    }
    var jr = xn(),
        Ri = [Rr, Br, Yn, Ke],
        Pi = xn({ defaultModifiers: Ri }),
        Hr = [Rr, Br, Yn, Ke, Mr, Be, Li, Dr, pn],
        qr = xn({ defaultModifiers: Hr }),
        Ii = Object.freeze({
            __proto__: null,
            popperGenerator: xn,
            detectOverflow: Qe,
            createPopperBase: jr,
            createPopper: qr,
            createPopperLite: Pi,
            top: zt,
            bottom: Ft,
            right: jt,
            left: Ht,
            auto: qn,
            basePlacements: Ie,
            start: ve,
            end: Zt,
            clippingParents: _i,
            viewport: Ar,
            popper: un,
            reference: ce,
            variationPlacements: Ue,
            placements: ze,
            beforeRead: J,
            read: Kt,
            afterRead: vi,
            beforeMain: Ei,
            main: yi,
            afterMain: Tr,
            beforeWrite: Cr,
            write: ln,
            afterWrite: Ee,
            modifierPhases: Fe,
            applyStyles: Ke,
            arrow: Dr,
            computeStyles: Yn,
            eventListeners: Rr,
            flip: Be,
            hide: pn,
            offset: Mr,
            popperOffsets: Br,
            preventOverflow: Li,
        });
    /*!
     * Bootstrap v5.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     */ const Ve = new Map(),
        Ze = {
            set(o, t, n) {
                Ve.has(o) || Ve.set(o, new Map());
                const s = Ve.get(o);
                if (!s.has(t) && s.size !== 0) {
                    console.error(
                        `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                            Array.from(s.keys())[0]
                        }.`
                    );
                    return;
                }
                s.set(t, n);
            },
            get(o, t) {
                return (Ve.has(o) && Ve.get(o).get(t)) || null;
            },
            remove(o, t) {
                if (!Ve.has(o)) return;
                const n = Ve.get(o);
                n.delete(t), n.size === 0 && Ve.delete(o);
            },
        },
        Fi = 1e6,
        Wr = 1e3,
        Ur = "transitionend",
        Mi = (o) => (
            o &&
                window.CSS &&
                window.CSS.escape &&
                (o = o.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)),
            o
        ),
        Ls = (o) =>
            o == null
                ? `${o}`
                : Object.prototype.toString
                      .call(o)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase(),
        e = (o) => {
            do o += Math.floor(Math.random() * Fi);
            while (document.getElementById(o));
            return o;
        },
        r = (o) => {
            if (!o) return 0;
            let { transitionDuration: t, transitionDelay: n } =
                window.getComputedStyle(o);
            const s = Number.parseFloat(t),
                f = Number.parseFloat(n);
            return !s && !f
                ? 0
                : ((t = t.split(",")[0]),
                  (n = n.split(",")[0]),
                  (Number.parseFloat(t) + Number.parseFloat(n)) * Wr);
        },
        i = (o) => {
            o.dispatchEvent(new Event(Ur));
        },
        a = (o) =>
            !o || typeof o != "object"
                ? !1
                : (typeof o.jquery < "u" && (o = o[0]),
                  typeof o.nodeType < "u"),
        l = (o) =>
            a(o)
                ? o.jquery
                    ? o[0]
                    : o
                : typeof o == "string" && o.length > 0
                ? document.querySelector(Mi(o))
                : null,
        c = (o) => {
            if (!a(o) || o.getClientRects().length === 0) return !1;
            const t =
                    getComputedStyle(o).getPropertyValue("visibility") ===
                    "visible",
                n = o.closest("details:not([open])");
            if (!n) return t;
            if (n !== o) {
                const s = o.closest("summary");
                if ((s && s.parentNode !== n) || s === null) return !1;
            }
            return t;
        },
        p = (o) =>
            !o ||
            o.nodeType !== Node.ELEMENT_NODE ||
            o.classList.contains("disabled")
                ? !0
                : typeof o.disabled < "u"
                ? o.disabled
                : o.hasAttribute("disabled") &&
                  o.getAttribute("disabled") !== "false",
        b = (o) => {
            if (!document.documentElement.attachShadow) return null;
            if (typeof o.getRootNode == "function") {
                const t = o.getRootNode();
                return t instanceof ShadowRoot ? t : null;
            }
            return o instanceof ShadowRoot
                ? o
                : o.parentNode
                ? b(o.parentNode)
                : null;
        },
        y = () => {},
        T = (o) => {
            o.offsetHeight;
        },
        L = () =>
            window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
                ? window.jQuery
                : null,
        R = [],
        D = (o) => {
            document.readyState === "loading"
                ? (R.length ||
                      document.addEventListener("DOMContentLoaded", () => {
                          for (const t of R) t();
                      }),
                  R.push(o))
                : o();
        },
        $ = () => document.documentElement.dir === "rtl",
        Q = (o) => {
            D(() => {
                const t = L();
                if (t) {
                    const n = o.NAME,
                        s = t.fn[n];
                    (t.fn[n] = o.jQueryInterface),
                        (t.fn[n].Constructor = o),
                        (t.fn[n].noConflict = () => (
                            (t.fn[n] = s), o.jQueryInterface
                        ));
                }
            });
        },
        ot = (o, t = [], n = o) => (typeof o == "function" ? o(...t) : n),
        ct = (o, t, n = !0) => {
            if (!n) {
                ot(o);
                return;
            }
            const s = 5,
                f = r(t) + s;
            let g = !1;
            const E = ({ target: C }) => {
                C === t && ((g = !0), t.removeEventListener(Ur, E), ot(o));
            };
            t.addEventListener(Ur, E),
                setTimeout(() => {
                    g || i(t);
                }, f);
        },
        Lt = (o, t, n, s) => {
            const f = o.length;
            let g = o.indexOf(t);
            return g === -1
                ? !n && s
                    ? o[f - 1]
                    : o[0]
                : ((g += n ? 1 : -1),
                  s && (g = (g + f) % f),
                  o[Math.max(0, Math.min(g, f - 1))]);
        },
        Rt = /[^.]*(?=\..*)\.|.*/,
        be = /\..*/,
        Ae = /::\d+$/,
        ht = {};
    let je = 1;
    const _t = { mouseenter: "mouseover", mouseleave: "mouseout" },
        kt = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
        ]);
    function gn(o, t) {
        return (t && `${t}::${je++}`) || o.uidEvent || je++;
    }
    function rr(o) {
        const t = gn(o);
        return (o.uidEvent = t), (ht[t] = ht[t] || {}), ht[t];
    }
    function Te(o, t) {
        return function n(s) {
            return (
                Kr(s, { delegateTarget: o }),
                n.oneOff && B.off(o, s.type, t),
                t.apply(o, [s])
            );
        };
    }
    function kn(o, t, n) {
        return function s(f) {
            const g = o.querySelectorAll(t);
            for (let { target: E } = f; E && E !== this; E = E.parentNode)
                for (const C of g)
                    if (C === E)
                        return (
                            Kr(f, { delegateTarget: E }),
                            s.oneOff && B.off(o, f.type, t, n),
                            n.apply(E, [f])
                        );
        };
    }
    function de(o, t, n = null) {
        return Object.values(o).find(
            (s) => s.callable === t && s.delegationSelector === n
        );
    }
    function ke(o, t, n) {
        const s = typeof t == "string",
            f = s ? n : t || n;
        let g = Ce(o);
        return kt.has(g) || (g = o), [s, f, g];
    }
    function Oe(o, t, n, s, f) {
        if (typeof t != "string" || !o) return;
        let [g, E, C] = ke(t, n, s);
        t in _t &&
            (E = ((vt) =>
                function (at) {
                    if (
                        !at.relatedTarget ||
                        (at.relatedTarget !== at.delegateTarget &&
                            !at.delegateTarget.contains(at.relatedTarget))
                    )
                        return vt.call(this, at);
                })(E));
        const k = rr(o),
            V = k[C] || (k[C] = {}),
            j = de(V, E, g ? n : null);
        if (j) {
            j.oneOff = j.oneOff && f;
            return;
        }
        const tt = gn(E, t.replace(Rt, "")),
            st = g ? kn(o, n, E) : Te(o, E);
        (st.delegationSelector = g ? n : null),
            (st.callable = E),
            (st.oneOff = f),
            (st.uidEvent = tt),
            (V[tt] = st),
            o.addEventListener(C, st, g);
    }
    function ee(o, t, n, s, f) {
        const g = de(t[n], s, f);
        g && (o.removeEventListener(n, g, !!f), delete t[n][g.uidEvent]);
    }
    function zr(o, t, n, s) {
        const f = t[n] || {};
        for (const [g, E] of Object.entries(f))
            g.includes(s) && ee(o, t, n, E.callable, E.delegationSelector);
    }
    function Ce(o) {
        return (o = o.replace(be, "")), _t[o] || o;
    }
    const B = {
        on(o, t, n, s) {
            Oe(o, t, n, s, !1);
        },
        one(o, t, n, s) {
            Oe(o, t, n, s, !0);
        },
        off(o, t, n, s) {
            if (typeof t != "string" || !o) return;
            const [f, g, E] = ke(t, n, s),
                C = E !== t,
                k = rr(o),
                V = k[E] || {},
                j = t.startsWith(".");
            if (typeof g < "u") {
                if (!Object.keys(V).length) return;
                ee(o, k, E, g, f ? n : null);
                return;
            }
            if (j) for (const tt of Object.keys(k)) zr(o, k, tt, t.slice(1));
            for (const [tt, st] of Object.entries(V)) {
                const rt = tt.replace(Ae, "");
                (!C || t.includes(rt)) &&
                    ee(o, k, E, st.callable, st.delegationSelector);
            }
        },
        trigger(o, t, n) {
            if (typeof t != "string" || !o) return null;
            const s = L(),
                f = Ce(t),
                g = t !== f;
            let E = null,
                C = !0,
                k = !0,
                V = !1;
            g &&
                s &&
                ((E = s.Event(t, n)),
                s(o).trigger(E),
                (C = !E.isPropagationStopped()),
                (k = !E.isImmediatePropagationStopped()),
                (V = E.isDefaultPrevented()));
            const j = Kr(new Event(t, { bubbles: C, cancelable: !0 }), n);
            return (
                V && j.preventDefault(),
                k && o.dispatchEvent(j),
                j.defaultPrevented && E && E.preventDefault(),
                j
            );
        },
    };
    function Kr(o, t = {}) {
        for (const [n, s] of Object.entries(t))
            try {
                o[n] = s;
            } catch {
                Object.defineProperty(o, n, {
                    configurable: !0,
                    get() {
                        return s;
                    },
                });
            }
        return o;
    }
    function Bi(o) {
        if (o === "true") return !0;
        if (o === "false") return !1;
        if (o === Number(o).toString()) return Number(o);
        if (o === "" || o === "null") return null;
        if (typeof o != "string") return o;
        try {
            return JSON.parse(decodeURIComponent(o));
        } catch {
            return o;
        }
    }
    function Yr(o) {
        return o.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
    }
    const dt = {
        setDataAttribute(o, t, n) {
            o.setAttribute(`data-bs-${Yr(t)}`, n);
        },
        removeDataAttribute(o, t) {
            o.removeAttribute(`data-bs-${Yr(t)}`);
        },
        getDataAttributes(o) {
            if (!o) return {};
            const t = {},
                n = Object.keys(o.dataset).filter(
                    (s) => s.startsWith("bs") && !s.startsWith("bsConfig")
                );
            for (const s of n) {
                let f = s.replace(/^bs/, "");
                (f = f.charAt(0).toLowerCase() + f.slice(1, f.length)),
                    (t[f] = Bi(o.dataset[s]));
            }
            return t;
        },
        getDataAttribute(o, t) {
            return Bi(o.getAttribute(`data-bs-${Yr(t)}`));
        },
    };
    class He {
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error(
                'You have to implement the static method "NAME", for each component!'
            );
        }
        _getConfig(t) {
            return (
                (t = this._mergeConfigObj(t)),
                (t = this._configAfterMerge(t)),
                this._typeCheckConfig(t),
                t
            );
        }
        _configAfterMerge(t) {
            return t;
        }
        _mergeConfigObj(t, n) {
            const s = a(n) ? dt.getDataAttribute(n, "config") : {};
            return {
                ...this.constructor.Default,
                ...(typeof s == "object" ? s : {}),
                ...(a(n) ? dt.getDataAttributes(n) : {}),
                ...(typeof t == "object" ? t : {}),
            };
        }
        _typeCheckConfig(t, n = this.constructor.DefaultType) {
            for (const [s, f] of Object.entries(n)) {
                const g = t[s],
                    E = a(g) ? "element" : Ls(g);
                if (!new RegExp(f).test(E))
                    throw new TypeError(
                        `${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${E}" but expected type "${f}".`
                    );
            }
        }
    }
    const pe = "5.3.1";
    class Wt extends He {
        constructor(t, n) {
            super(),
                (t = l(t)),
                t &&
                    ((this._element = t),
                    (this._config = this._getConfig(n)),
                    Ze.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            Ze.remove(this._element, this.constructor.DATA_KEY),
                B.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
        }
        _queueCallback(t, n, s = !0) {
            ct(t, n, s);
        }
        _getConfig(t) {
            return (
                (t = this._mergeConfigObj(t, this._element)),
                (t = this._configAfterMerge(t)),
                this._typeCheckConfig(t),
                t
            );
        }
        static getInstance(t) {
            return Ze.get(l(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, n = {}) {
            return (
                this.getInstance(t) ||
                new this(t, typeof n == "object" ? n : null)
            );
        }
        static get VERSION() {
            return pe;
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`;
        }
    }
    const Gr = (o) => {
            let t = o.getAttribute("data-bs-target");
            if (!t || t === "#") {
                let n = o.getAttribute("href");
                if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
                n.includes("#") &&
                    !n.startsWith("#") &&
                    (n = `#${n.split("#")[1]}`),
                    (t = n && n !== "#" ? n.trim() : null);
            }
            return Mi(t);
        },
        Z = {
            find(o, t = document.documentElement) {
                return [].concat(
                    ...Element.prototype.querySelectorAll.call(t, o)
                );
            },
            findOne(o, t = document.documentElement) {
                return Element.prototype.querySelector.call(t, o);
            },
            children(o, t) {
                return [].concat(...o.children).filter((n) => n.matches(t));
            },
            parents(o, t) {
                const n = [];
                let s = o.parentNode.closest(t);
                for (; s; ) n.push(s), (s = s.parentNode.closest(t));
                return n;
            },
            prev(o, t) {
                let n = o.previousElementSibling;
                for (; n; ) {
                    if (n.matches(t)) return [n];
                    n = n.previousElementSibling;
                }
                return [];
            },
            next(o, t) {
                let n = o.nextElementSibling;
                for (; n; ) {
                    if (n.matches(t)) return [n];
                    n = n.nextElementSibling;
                }
                return [];
            },
            focusableChildren(o) {
                const t = [
                    "a",
                    "button",
                    "input",
                    "textarea",
                    "select",
                    "details",
                    "[tabindex]",
                    '[contenteditable="true"]',
                ]
                    .map((n) => `${n}:not([tabindex^="-"])`)
                    .join(",");
                return this.find(t, o).filter((n) => !p(n) && c(n));
            },
            getSelectorFromElement(o) {
                const t = Gr(o);
                return t && Z.findOne(t) ? t : null;
            },
            getElementFromSelector(o) {
                const t = Gr(o);
                return t ? Z.findOne(t) : null;
            },
            getMultipleElementsFromSelector(o) {
                const t = Gr(o);
                return t ? Z.find(t) : [];
            },
        },
        On = (o, t = "hide") => {
            const n = `click.dismiss${o.EVENT_KEY}`,
                s = o.NAME;
            B.on(document, n, `[data-bs-dismiss="${s}"]`, function (f) {
                if (
                    (["A", "AREA"].includes(this.tagName) && f.preventDefault(),
                    p(this))
                )
                    return;
                const g =
                    Z.getElementFromSelector(this) || this.closest(`.${s}`);
                o.getOrCreateInstance(g)[t]();
            });
        },
        tn = "alert",
        De = ".bs.alert",
        Vi = `close${De}`,
        Dn = `closed${De}`,
        ir = "fade",
        sr = "show";
    class en extends Wt {
        static get NAME() {
            return tn;
        }
        close() {
            if (B.trigger(this._element, Vi).defaultPrevented) return;
            this._element.classList.remove(sr);
            const n = this._element.classList.contains(ir);
            this._queueCallback(() => this._destroyElement(), this._element, n);
        }
        _destroyElement() {
            this._element.remove(),
                B.trigger(this._element, Dn),
                this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const n = en.getOrCreateInstance(this);
                if (typeof t == "string") {
                    if (
                        n[t] === void 0 ||
                        t.startsWith("_") ||
                        t === "constructor"
                    )
                        throw new TypeError(`No method named "${t}"`);
                    n[t](this);
                }
            });
        }
    }
    On(en, "close"), Q(en);
    const Rs = "button",
        Jr = ".bs.button",
        Qr = ".data-api",
        Ps = "active",
        or = '[data-bs-toggle="button"]',
        ji = `click${Jr}${Qr}`;
    class m extends Wt {
        static get NAME() {
            return Rs;
        }
        toggle() {
            this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle(Ps)
            );
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const n = m.getOrCreateInstance(this);
                t === "toggle" && n[t]();
            });
        }
    }
    B.on(document, ji, or, (o) => {
        o.preventDefault();
        const t = o.target.closest(or);
        m.getOrCreateInstance(t).toggle();
    }),
        Q(m);
    const A = "swipe",
        x = ".bs.swipe",
        N = `touchstart${x}`,
        P = `touchmove${x}`,
        U = `touchend${x}`,
        Y = `pointerdown${x}`,
        X = `pointerup${x}`,
        G = "touch",
        pt = "pen",
        it = "pointer-event",
        ut = 40,
        gt = { endCallback: null, leftCallback: null, rightCallback: null },
        nt = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)",
        };
    class At extends He {
        constructor(t, n) {
            super(),
                (this._element = t),
                !(!t || !At.isSupported()) &&
                    ((this._config = this._getConfig(n)),
                    (this._deltaX = 0),
                    (this._supportPointerEvents = !!window.PointerEvent),
                    this._initEvents());
        }
        static get Default() {
            return gt;
        }
        static get DefaultType() {
            return nt;
        }
        static get NAME() {
            return A;
        }
        dispose() {
            B.off(this._element, x);
        }
        _start(t) {
            if (!this._supportPointerEvents) {
                this._deltaX = t.touches[0].clientX;
                return;
            }
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX);
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) &&
                (this._deltaX = t.clientX - this._deltaX),
                this._handleSwipe(),
                ot(this._config.endCallback);
        }
        _move(t) {
            this._deltaX =
                t.touches && t.touches.length > 1
                    ? 0
                    : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= ut) return;
            const n = t / this._deltaX;
            (this._deltaX = 0),
                n &&
                    ot(
                        n > 0
                            ? this._config.rightCallback
                            : this._config.leftCallback
                    );
        }
        _initEvents() {
            this._supportPointerEvents
                ? (B.on(this._element, Y, (t) => this._start(t)),
                  B.on(this._element, X, (t) => this._end(t)),
                  this._element.classList.add(it))
                : (B.on(this._element, N, (t) => this._start(t)),
                  B.on(this._element, P, (t) => this._move(t)),
                  B.on(this._element, U, (t) => this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
            return (
                this._supportPointerEvents &&
                (t.pointerType === pt || t.pointerType === G)
            );
        }
        static isSupported() {
            return (
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0
            );
        }
    }
    const ne = "carousel",
        Pt = ".bs.carousel",
        ge = ".data-api",
        mn = "ArrowLeft",
        Jt = "ArrowRight",
        za = 500,
        Zr = "next",
        ar = "prev",
        ur = "left",
        Hi = "right",
        Ka = `slide${Pt}`,
        Is = `slid${Pt}`,
        Ya = `keydown${Pt}`,
        Ga = `mouseenter${Pt}`,
        Xa = `mouseleave${Pt}`,
        Ja = `dragstart${Pt}`,
        Qa = `load${Pt}${ge}`,
        Za = `click${Pt}${ge}`,
        mo = "carousel",
        qi = "active",
        tu = "slide",
        eu = "carousel-item-end",
        nu = "carousel-item-start",
        ru = "carousel-item-next",
        iu = "carousel-item-prev",
        _o = ".active",
        vo = ".carousel-item",
        su = _o + vo,
        ou = ".carousel-item img",
        au = ".carousel-indicators",
        uu = "[data-bs-slide], [data-bs-slide-to]",
        lu = '[data-bs-ride="carousel"]',
        cu = { [mn]: Hi, [Jt]: ur },
        fu = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0,
        },
        hu = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean",
        };
    class lr extends Wt {
        constructor(t, n) {
            super(t, n),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = Z.findOne(au, this._element)),
                this._addEventListeners(),
                this._config.ride === mo && this.cycle();
        }
        static get Default() {
            return fu;
        }
        static get DefaultType() {
            return hu;
        }
        static get NAME() {
            return ne;
        }
        next() {
            this._slide(Zr);
        }
        nextWhenVisible() {
            !document.hidden && c(this._element) && this.next();
        }
        prev() {
            this._slide(ar);
        }
        pause() {
            this._isSliding && i(this._element), this._clearInterval();
        }
        cycle() {
            this._clearInterval(),
                this._updateInterval(),
                (this._interval = setInterval(
                    () => this.nextWhenVisible(),
                    this._config.interval
                ));
        }
        _maybeEnableCycle() {
            if (this._config.ride) {
                if (this._isSliding) {
                    B.one(this._element, Is, () => this.cycle());
                    return;
                }
                this.cycle();
            }
        }
        to(t) {
            const n = this._getItems();
            if (t > n.length - 1 || t < 0) return;
            if (this._isSliding) {
                B.one(this._element, Is, () => this.to(t));
                return;
            }
            const s = this._getItemIndex(this._getActive());
            if (s === t) return;
            const f = t > s ? Zr : ar;
            this._slide(f, n[t]);
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
            return (t.defaultInterval = t.interval), t;
        }
        _addEventListeners() {
            this._config.keyboard &&
                B.on(this._element, Ya, (t) => this._keydown(t)),
                this._config.pause === "hover" &&
                    (B.on(this._element, Ga, () => this.pause()),
                    B.on(this._element, Xa, () => this._maybeEnableCycle())),
                this._config.touch &&
                    At.isSupported() &&
                    this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const s of Z.find(ou, this._element))
                B.on(s, Ja, (f) => f.preventDefault());
            const n = {
                leftCallback: () => this._slide(this._directionToOrder(ur)),
                rightCallback: () => this._slide(this._directionToOrder(Hi)),
                endCallback: () => {
                    this._config.pause === "hover" &&
                        (this.pause(),
                        this.touchTimeout && clearTimeout(this.touchTimeout),
                        (this.touchTimeout = setTimeout(
                            () => this._maybeEnableCycle(),
                            za + this._config.interval
                        )));
                },
            };
            this._swipeHelper = new At(this._element, n);
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const n = cu[t.key];
            n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const n = Z.findOne(_o, this._indicatorsElement);
            n.classList.remove(qi), n.removeAttribute("aria-current");
            const s = Z.findOne(
                `[data-bs-slide-to="${t}"]`,
                this._indicatorsElement
            );
            s && (s.classList.add(qi), s.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const n = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = n || this._config.defaultInterval;
        }
        _slide(t, n = null) {
            if (this._isSliding) return;
            const s = this._getActive(),
                f = t === Zr,
                g = n || Lt(this._getItems(), s, f, this._config.wrap);
            if (g === s) return;
            const E = this._getItemIndex(g),
                C = (rt) =>
                    B.trigger(this._element, rt, {
                        relatedTarget: g,
                        direction: this._orderToDirection(t),
                        from: this._getItemIndex(s),
                        to: E,
                    });
            if (C(Ka).defaultPrevented || !s || !g) return;
            const V = !!this._interval;
            this.pause(),
                (this._isSliding = !0),
                this._setActiveIndicatorElement(E),
                (this._activeElement = g);
            const j = f ? nu : eu,
                tt = f ? ru : iu;
            g.classList.add(tt), T(g), s.classList.add(j), g.classList.add(j);
            const st = () => {
                g.classList.remove(j, tt),
                    g.classList.add(qi),
                    s.classList.remove(qi, tt, j),
                    (this._isSliding = !1),
                    C(Is);
            };
            this._queueCallback(st, s, this._isAnimated()), V && this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains(tu);
        }
        _getActive() {
            return Z.findOne(su, this._element);
        }
        _getItems() {
            return Z.find(vo, this._element);
        }
        _clearInterval() {
            this._interval &&
                (clearInterval(this._interval), (this._interval = null));
        }
        _directionToOrder(t) {
            return $() ? (t === ur ? ar : Zr) : t === ur ? Zr : ar;
        }
        _orderToDirection(t) {
            return $() ? (t === ar ? ur : Hi) : t === ar ? Hi : ur;
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const n = lr.getOrCreateInstance(this, t);
                if (typeof t == "number") {
                    n.to(t);
                    return;
                }
                if (typeof t == "string") {
                    if (
                        n[t] === void 0 ||
                        t.startsWith("_") ||
                        t === "constructor"
                    )
                        throw new TypeError(`No method named "${t}"`);
                    n[t]();
                }
            });
        }
    }
    B.on(document, Za, uu, function (o) {
        const t = Z.getElementFromSelector(this);
        if (!t || !t.classList.contains(mo)) return;
        o.preventDefault();
        const n = lr.getOrCreateInstance(t),
            s = this.getAttribute("data-bs-slide-to");
        if (s) {
            n.to(s), n._maybeEnableCycle();
            return;
        }
        if (dt.getDataAttribute(this, "slide") === "next") {
            n.next(), n._maybeEnableCycle();
            return;
        }
        n.prev(), n._maybeEnableCycle();
    }),
        B.on(window, Qa, () => {
            const o = Z.find(lu);
            for (const t of o) lr.getOrCreateInstance(t);
        }),
        Q(lr);
    const du = "collapse",
        ti = ".bs.collapse",
        pu = ".data-api",
        gu = `show${ti}`,
        mu = `shown${ti}`,
        _u = `hide${ti}`,
        vu = `hidden${ti}`,
        Eu = `click${ti}${pu}`,
        Fs = "show",
        cr = "collapse",
        Wi = "collapsing",
        yu = "collapsed",
        bu = `:scope .${cr} .${cr}`,
        Au = "collapse-horizontal",
        Tu = "width",
        Cu = "height",
        wu = ".collapse.show, .collapse.collapsing",
        Ms = '[data-bs-toggle="collapse"]',
        Su = { parent: null, toggle: !0 },
        xu = { parent: "(null|element)", toggle: "boolean" };
    class fr extends Wt {
        constructor(t, n) {
            super(t, n),
                (this._isTransitioning = !1),
                (this._triggerArray = []);
            const s = Z.find(Ms);
            for (const f of s) {
                const g = Z.getSelectorFromElement(f),
                    E = Z.find(g).filter((C) => C === this._element);
                g !== null && E.length && this._triggerArray.push(f);
            }
            this._initializeChildren(),
                this._config.parent ||
                    this._addAriaAndCollapsedClass(
                        this._triggerArray,
                        this._isShown()
                    ),
                this._config.toggle && this.toggle();
        }
        static get Default() {
            return Su;
        }
        static get DefaultType() {
            return xu;
        }
        static get NAME() {
            return du;
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (
                (this._config.parent &&
                    (t = this._getFirstLevelChildren(wu)
                        .filter((C) => C !== this._element)
                        .map((C) => fr.getOrCreateInstance(C, { toggle: !1 }))),
                (t.length && t[0]._isTransitioning) ||
                    B.trigger(this._element, gu).defaultPrevented)
            )
                return;
            for (const C of t) C.hide();
            const s = this._getDimension();
            this._element.classList.remove(cr),
                this._element.classList.add(Wi),
                (this._element.style[s] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
            const f = () => {
                    (this._isTransitioning = !1),
                        this._element.classList.remove(Wi),
                        this._element.classList.add(cr, Fs),
                        (this._element.style[s] = ""),
                        B.trigger(this._element, mu);
                },
                E = `scroll${s[0].toUpperCase() + s.slice(1)}`;
            this._queueCallback(f, this._element, !0),
                (this._element.style[s] = `${this._element[E]}px`);
        }
        hide() {
            if (
                this._isTransitioning ||
                !this._isShown() ||
                B.trigger(this._element, _u).defaultPrevented
            )
                return;
            const n = this._getDimension();
            (this._element.style[n] = `${
                this._element.getBoundingClientRect()[n]
            }px`),
                T(this._element),
                this._element.classList.add(Wi),
                this._element.classList.remove(cr, Fs);
            for (const f of this._triggerArray) {
                const g = Z.getElementFromSelector(f);
                g &&
                    !this._isShown(g) &&
                    this._addAriaAndCollapsedClass([f], !1);
            }
            this._isTransitioning = !0;
            const s = () => {
                (this._isTransitioning = !1),
                    this._element.classList.remove(Wi),
                    this._element.classList.add(cr),
                    B.trigger(this._element, vu);
            };
            (this._element.style[n] = ""),
                this._queueCallback(s, this._element, !0);
        }
        _isShown(t = this._element) {
            return t.classList.contains(Fs);
        }
        _configAfterMerge(t) {
            return (t.toggle = !!t.toggle), (t.parent = l(t.parent)), t;
        }
        _getDimension() {
            return this._element.classList.contains(Au) ? Tu : Cu;
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(Ms);
            for (const n of t) {
                const s = Z.getElementFromSelector(n);
                s && this._addAriaAndCollapsedClass([n], this._isShown(s));
            }
        }
        _getFirstLevelChildren(t) {
            const n = Z.find(bu, this._config.parent);
            return Z.find(t, this._config.parent).filter((s) => !n.includes(s));
        }
        _addAriaAndCollapsedClass(t, n) {
            if (t.length)
                for (const s of t)
                    s.classList.toggle(yu, !n),
                        s.setAttribute("aria-expanded", n);
        }
        static jQueryInterface(t) {
            const n = {};
            return (
                typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1),
                this.each(function () {
                    const s = fr.getOrCreateInstance(this, n);
                    if (typeof t == "string") {
                        if (typeof s[t] > "u")
                            throw new TypeError(`No method named "${t}"`);
                        s[t]();
                    }
                })
            );
        }
    }
    B.on(document, Eu, Ms, function (o) {
        (o.target.tagName === "A" ||
            (o.delegateTarget && o.delegateTarget.tagName === "A")) &&
            o.preventDefault();
        for (const t of Z.getMultipleElementsFromSelector(this))
            fr.getOrCreateInstance(t, { toggle: !1 }).toggle();
    }),
        Q(fr);
    const Eo = "dropdown",
        Nn = ".bs.dropdown",
        Bs = ".data-api",
        ku = "Escape",
        yo = "Tab",
        Ou = "ArrowUp",
        bo = "ArrowDown",
        Du = 2,
        Nu = `hide${Nn}`,
        Lu = `hidden${Nn}`,
        Ru = `show${Nn}`,
        Pu = `shown${Nn}`,
        Ao = `click${Nn}${Bs}`,
        To = `keydown${Nn}${Bs}`,
        Iu = `keyup${Nn}${Bs}`,
        hr = "show",
        Fu = "dropup",
        Mu = "dropend",
        Bu = "dropstart",
        $u = "dropup-center",
        Vu = "dropdown-center",
        Ln = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        ju = `${Ln}.${hr}`,
        Ui = ".dropdown-menu",
        Hu = ".navbar",
        qu = ".navbar-nav",
        Wu = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Uu = $() ? "top-end" : "top-start",
        zu = $() ? "top-start" : "top-end",
        Ku = $() ? "bottom-end" : "bottom-start",
        Yu = $() ? "bottom-start" : "bottom-end",
        Gu = $() ? "left-start" : "right-start",
        Xu = $() ? "right-start" : "left-start",
        Ju = "top",
        Qu = "bottom",
        Zu = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle",
        },
        tl = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)",
        };
    class we extends Wt {
        constructor(t, n) {
            super(t, n),
                (this._popper = null),
                (this._parent = this._element.parentNode),
                (this._menu =
                    Z.next(this._element, Ui)[0] ||
                    Z.prev(this._element, Ui)[0] ||
                    Z.findOne(Ui, this._parent)),
                (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
            return Zu;
        }
        static get DefaultType() {
            return tl;
        }
        static get NAME() {
            return Eo;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (p(this._element) || this._isShown()) return;
            const t = { relatedTarget: this._element };
            if (!B.trigger(this._element, Ru, t).defaultPrevented) {
                if (
                    (this._createPopper(),
                    "ontouchstart" in document.documentElement &&
                        !this._parent.closest(qu))
                )
                    for (const s of [].concat(...document.body.children))
                        B.on(s, "mouseover", y);
                this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.add(hr),
                    this._element.classList.add(hr),
                    B.trigger(this._element, Pu, t);
            }
        }
        hide() {
            if (p(this._element) || !this._isShown()) return;
            const t = { relatedTarget: this._element };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
        }
        _completeHide(t) {
            if (!B.trigger(this._element, Nu, t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                    for (const s of [].concat(...document.body.children))
                        B.off(s, "mouseover", y);
                this._popper && this._popper.destroy(),
                    this._menu.classList.remove(hr),
                    this._element.classList.remove(hr),
                    this._element.setAttribute("aria-expanded", "false"),
                    dt.removeDataAttribute(this._menu, "popper"),
                    B.trigger(this._element, Lu, t);
            }
        }
        _getConfig(t) {
            if (
                ((t = super._getConfig(t)),
                typeof t.reference == "object" &&
                    !a(t.reference) &&
                    typeof t.reference.getBoundingClientRect != "function")
            )
                throw new TypeError(
                    `${Eo.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                );
            return t;
        }
        _createPopper() {
            if (typeof Ii > "u")
                throw new TypeError(
                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                );
            let t = this._element;
            this._config.reference === "parent"
                ? (t = this._parent)
                : a(this._config.reference)
                ? (t = l(this._config.reference))
                : typeof this._config.reference == "object" &&
                  (t = this._config.reference);
            const n = this._getPopperConfig();
            this._popper = qr(t, this._menu, n);
        }
        _isShown() {
            return this._menu.classList.contains(hr);
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains(Mu)) return Gu;
            if (t.classList.contains(Bu)) return Xu;
            if (t.classList.contains($u)) return Ju;
            if (t.classList.contains(Vu)) return Qu;
            const n =
                getComputedStyle(this._menu)
                    .getPropertyValue("--bs-position")
                    .trim() === "end";
            return t.classList.contains(Fu) ? (n ? zu : Uu) : n ? Yu : Ku;
        }
        _detectNavbar() {
            return this._element.closest(Hu) !== null;
        }
        _getOffset() {
            const { offset: t } = this._config;
            return typeof t == "string"
                ? t.split(",").map((n) => Number.parseInt(n, 10))
                : typeof t == "function"
                ? (n) => t(n, this._element)
                : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                ],
            };
            return (
                (this._inNavbar || this._config.display === "static") &&
                    (dt.setDataAttribute(this._menu, "popper", "static"),
                    (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                { ...t, ...ot(this._config.popperConfig, [t]) }
            );
        }
        _selectMenuItem({ key: t, target: n }) {
            const s = Z.find(Wu, this._menu).filter((f) => c(f));
            s.length && Lt(s, n, t === bo, !s.includes(n)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const n = we.getOrCreateInstance(this, t);
                if (typeof t == "string") {
                    if (typeof n[t] > "u")
                        throw new TypeError(`No method named "${t}"`);
                    n[t]();
                }
            });
        }
        static clearMenus(t) {
            if (t.button === Du || (t.type === "keyup" && t.key !== yo)) return;
            const n = Z.find(ju);
            for (const s of n) {
                const f = we.getInstance(s);
                if (!f || f._config.autoClose === !1) continue;
                const g = t.composedPath(),
                    E = g.includes(f._menu);
                if (
                    g.includes(f._element) ||
                    (f._config.autoClose === "inside" && !E) ||
                    (f._config.autoClose === "outside" && E) ||
                    (f._menu.contains(t.target) &&
                        ((t.type === "keyup" && t.key === yo) ||
                            /input|select|option|textarea|form/i.test(
                                t.target.tagName
                            )))
                )
                    continue;
                const C = { relatedTarget: f._element };
                t.type === "click" && (C.clickEvent = t), f._completeHide(C);
            }
        }
        static dataApiKeydownHandler(t) {
            const n = /input|textarea/i.test(t.target.tagName),
                s = t.key === ku,
                f = [Ou, bo].includes(t.key);
            if ((!f && !s) || (n && !s)) return;
            t.preventDefault();
            const g = this.matches(Ln)
                    ? this
                    : Z.prev(this, Ln)[0] ||
                      Z.next(this, Ln)[0] ||
                      Z.findOne(Ln, t.delegateTarget.parentNode),
                E = we.getOrCreateInstance(g);
            if (f) {
                t.stopPropagation(), E.show(), E._selectMenuItem(t);
                return;
            }
            E._isShown() && (t.stopPropagation(), E.hide(), g.focus());
        }
    }
    B.on(document, To, Ln, we.dataApiKeydownHandler),
        B.on(document, To, Ui, we.dataApiKeydownHandler),
        B.on(document, Ao, we.clearMenus),
        B.on(document, Iu, we.clearMenus),
        B.on(document, Ao, Ln, function (o) {
            o.preventDefault(), we.getOrCreateInstance(this).toggle();
        }),
        Q(we);
    const Co = "backdrop",
        el = "fade",
        wo = "show",
        So = `mousedown.bs.${Co}`,
        nl = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body",
        },
        rl = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)",
        };
    class xo extends He {
        constructor(t) {
            super(),
                (this._config = this._getConfig(t)),
                (this._isAppended = !1),
                (this._element = null);
        }
        static get Default() {
            return nl;
        }
        static get DefaultType() {
            return rl;
        }
        static get NAME() {
            return Co;
        }
        show(t) {
            if (!this._config.isVisible) {
                ot(t);
                return;
            }
            this._append();
            const n = this._getElement();
            this._config.isAnimated && T(n),
                n.classList.add(wo),
                this._emulateAnimation(() => {
                    ot(t);
                });
        }
        hide(t) {
            if (!this._config.isVisible) {
                ot(t);
                return;
            }
            this._getElement().classList.remove(wo),
                this._emulateAnimation(() => {
                    this.dispose(), ot(t);
                });
        }
        dispose() {
            this._isAppended &&
                (B.off(this._element, So),
                this._element.remove(),
                (this._isAppended = !1));
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                (t.className = this._config.className),
                    this._config.isAnimated && t.classList.add(el),
                    (this._element = t);
            }
            return this._element;
        }
        _configAfterMerge(t) {
            return (t.rootElement = l(t.rootElement)), t;
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t),
                B.on(t, So, () => {
                    ot(this._config.clickCallback);
                }),
                (this._isAppended = !0);
        }
        _emulateAnimation(t) {
            ct(t, this._getElement(), this._config.isAnimated);
        }
    }
    const il = "focustrap",
        zi = ".bs.focustrap",
        sl = `focusin${zi}`,
        ol = `keydown.tab${zi}`,
        al = "Tab",
        ul = "forward",
        ko = "backward",
        ll = { autofocus: !0, trapElement: null },
        cl = { autofocus: "boolean", trapElement: "element" };
    class Oo extends He {
        constructor(t) {
            super(),
                (this._config = this._getConfig(t)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
        }
        static get Default() {
            return ll;
        }
        static get DefaultType() {
            return cl;
        }
        static get NAME() {
            return il;
        }
        activate() {
            this._isActive ||
                (this._config.autofocus && this._config.trapElement.focus(),
                B.off(document, zi),
                B.on(document, sl, (t) => this._handleFocusin(t)),
                B.on(document, ol, (t) => this._handleKeydown(t)),
                (this._isActive = !0));
        }
        deactivate() {
            this._isActive && ((this._isActive = !1), B.off(document, zi));
        }
        _handleFocusin(t) {
            const { trapElement: n } = this._config;
            if (t.target === document || t.target === n || n.contains(t.target))
                return;
            const s = Z.focusableChildren(n);
            s.length === 0
                ? n.focus()
                : this._lastTabNavDirection === ko
                ? s[s.length - 1].focus()
                : s[0].focus();
        }
        _handleKeydown(t) {
            t.key === al && (this._lastTabNavDirection = t.shiftKey ? ko : ul);
        }
    }
    const Do = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        No = ".sticky-top",
        Ki = "padding-right",
        Lo = "margin-right";
    class $s {
        constructor() {
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
                this._setElementAttributes(this._element, Ki, (n) => n + t),
                this._setElementAttributes(Do, Ki, (n) => n + t),
                this._setElementAttributes(No, Lo, (n) => n - t);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, Ki),
                this._resetElementAttributes(Do, Ki),
                this._resetElementAttributes(No, Lo);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(t, n, s) {
            const f = this.getWidth(),
                g = (E) => {
                    if (
                        E !== this._element &&
                        window.innerWidth > E.clientWidth + f
                    )
                        return;
                    this._saveInitialAttribute(E, n);
                    const C = window.getComputedStyle(E).getPropertyValue(n);
                    E.style.setProperty(n, `${s(Number.parseFloat(C))}px`);
                };
            this._applyManipulationCallback(t, g);
        }
        _saveInitialAttribute(t, n) {
            const s = t.style.getPropertyValue(n);
            s && dt.setDataAttribute(t, n, s);
        }
        _resetElementAttributes(t, n) {
            const s = (f) => {
                const g = dt.getDataAttribute(f, n);
                if (g === null) {
                    f.style.removeProperty(n);
                    return;
                }
                dt.removeDataAttribute(f, n), f.style.setProperty(n, g);
            };
            this._applyManipulationCallback(t, s);
        }
        _applyManipulationCallback(t, n) {
            if (a(t)) {
                n(t);
                return;
            }
            for (const s of Z.find(t, this._element)) n(s);
        }
    }
    const fl = "modal",
        Se = ".bs.modal",
        hl = ".data-api",
        dl = "Escape",
        pl = `hide${Se}`,
        gl = `hidePrevented${Se}`,
        Ro = `hidden${Se}`,
        Po = `show${Se}`,
        ml = `shown${Se}`,
        _l = `resize${Se}`,
        vl = `click.dismiss${Se}`,
        El = `mousedown.dismiss${Se}`,
        yl = `keydown.dismiss${Se}`,
        bl = `click${Se}${hl}`,
        Io = "modal-open",
        Al = "fade",
        Fo = "show",
        Vs = "modal-static",
        Tl = ".modal.show",
        Cl = ".modal-dialog",
        wl = ".modal-body",
        Sl = '[data-bs-toggle="modal"]',
        xl = { backdrop: !0, focus: !0, keyboard: !0 },
        kl = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean",
        };
    class Rn extends Wt {
        constructor(t, n) {
            super(t, n),
                (this._dialog = Z.findOne(Cl, this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new $s()),
                this._addEventListeners();
        }
        static get Default() {
            return xl;
        }
        static get DefaultType() {
            return kl;
        }
        static get NAME() {
            return fl;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
                this._isTransitioning ||
                B.trigger(this._element, Po, { relatedTarget: t })
                    .defaultPrevented ||
                ((this._isShown = !0),
                (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(Io),
                this._adjustDialog(),
                this._backdrop.show(() => this._showElement(t)));
        }
        hide() {
            !this._isShown ||
                this._isTransitioning ||
                B.trigger(this._element, pl).defaultPrevented ||
                ((this._isShown = !1),
                (this._isTransitioning = !0),
                this._focustrap.deactivate(),
                this._element.classList.remove(Fo),
                this._queueCallback(
                    () => this._hideModal(),
                    this._element,
                    this._isAnimated()
                ));
        }
        dispose() {
            B.off(window, Se),
                B.off(this._dialog, Se),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new xo({
                isVisible: !!this._config.backdrop,
                isAnimated: this._isAnimated(),
            });
        }
        _initializeFocusTrap() {
            return new Oo({ trapElement: this._element });
        }
        _showElement(t) {
            document.body.contains(this._element) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
            const n = Z.findOne(wl, this._dialog);
            n && (n.scrollTop = 0),
                T(this._element),
                this._element.classList.add(Fo);
            const s = () => {
                this._config.focus && this._focustrap.activate(),
                    (this._isTransitioning = !1),
                    B.trigger(this._element, ml, { relatedTarget: t });
            };
            this._queueCallback(s, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
            B.on(this._element, yl, (t) => {
                if (t.key === dl) {
                    if (this._config.keyboard) {
                        this.hide();
                        return;
                    }
                    this._triggerBackdropTransition();
                }
            }),
                B.on(window, _l, () => {
                    this._isShown &&
                        !this._isTransitioning &&
                        this._adjustDialog();
                }),
                B.on(this._element, El, (t) => {
                    B.one(this._element, vl, (n) => {
                        if (
                            !(
                                this._element !== t.target ||
                                this._element !== n.target
                            )
                        ) {
                            if (this._config.backdrop === "static") {
                                this._triggerBackdropTransition();
                                return;
                            }
                            this._config.backdrop && this.hide();
                        }
                    });
                });
        }
        _hideModal() {
            (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                    document.body.classList.remove(Io),
                        this._resetAdjustments(),
                        this._scrollBar.reset(),
                        B.trigger(this._element, Ro);
                });
        }
        _isAnimated() {
            return this._element.classList.contains(Al);
        }
        _triggerBackdropTransition() {
            if (B.trigger(this._element, gl).defaultPrevented) return;
            const n =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight,
                s = this._element.style.overflowY;
            s === "hidden" ||
                this._element.classList.contains(Vs) ||
                (n || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(Vs),
                this._queueCallback(() => {
                    this._element.classList.remove(Vs),
                        this._queueCallback(() => {
                            this._element.style.overflowY = s;
                        }, this._dialog);
                }, this._dialog),
                this._element.focus());
        }
        _adjustDialog() {
            const t =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight,
                n = this._scrollBar.getWidth(),
                s = n > 0;
            if (s && !t) {
                const f = $() ? "paddingLeft" : "paddingRight";
                this._element.style[f] = `${n}px`;
            }
            if (!s && t) {
                const f = $() ? "paddingRight" : "paddingLeft";
                this._element.style[f] = `${n}px`;
            }
        }
        _resetAdjustments() {
            (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
        }
        static jQueryInterface(t, n) {
            return this.each(function () {
                const s = Rn.getOrCreateInstance(this, t);
                if (typeof t == "string") {
                    if (typeof s[t] > "u")
                        throw new TypeError(`No method named "${t}"`);
                    s[t](n);
                }
            });
        }
    }
    B.on(document, bl, Sl, function (o) {
        const t = Z.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && o.preventDefault(),
            B.one(t, Po, (f) => {
                f.defaultPrevented ||
                    B.one(t, Ro, () => {
                        c(this) && this.focus();
                    });
            });
        const n = Z.findOne(Tl);
        n && Rn.getInstance(n).hide(), Rn.getOrCreateInstance(t).toggle(this);
    }),
        On(Rn),
        Q(Rn);
    const Ol = "offcanvas",
        nn = ".bs.offcanvas",
        Mo = ".data-api",
        Dl = `load${nn}${Mo}`,
        Nl = "Escape",
        Bo = "show",
        $o = "showing",
        Vo = "hiding",
        Ll = "offcanvas-backdrop",
        jo = ".offcanvas.show",
        Rl = `show${nn}`,
        Pl = `shown${nn}`,
        Il = `hide${nn}`,
        Ho = `hidePrevented${nn}`,
        qo = `hidden${nn}`,
        Fl = `resize${nn}`,
        Ml = `click${nn}${Mo}`,
        Bl = `keydown.dismiss${nn}`,
        $l = '[data-bs-toggle="offcanvas"]',
        Vl = { backdrop: !0, keyboard: !0, scroll: !1 },
        jl = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean",
        };
    class rn extends Wt {
        constructor(t, n) {
            super(t, n),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
        }
        static get Default() {
            return Vl;
        }
        static get DefaultType() {
            return jl;
        }
        static get NAME() {
            return Ol;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            if (
                this._isShown ||
                B.trigger(this._element, Rl, { relatedTarget: t })
                    .defaultPrevented
            )
                return;
            (this._isShown = !0),
                this._backdrop.show(),
                this._config.scroll || new $s().hide(),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add($o);
            const s = () => {
                (!this._config.scroll || this._config.backdrop) &&
                    this._focustrap.activate(),
                    this._element.classList.add(Bo),
                    this._element.classList.remove($o),
                    B.trigger(this._element, Pl, { relatedTarget: t });
            };
            this._queueCallback(s, this._element, !0);
        }
        hide() {
            if (!this._isShown || B.trigger(this._element, Il).defaultPrevented)
                return;
            this._focustrap.deactivate(),
                this._element.blur(),
                (this._isShown = !1),
                this._element.classList.add(Vo),
                this._backdrop.hide();
            const n = () => {
                this._element.classList.remove(Bo, Vo),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    this._config.scroll || new $s().reset(),
                    B.trigger(this._element, qo);
            };
            this._queueCallback(n, this._element, !0);
        }
        dispose() {
            this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
        }
        _initializeBackDrop() {
            const t = () => {
                    if (this._config.backdrop === "static") {
                        B.trigger(this._element, Ho);
                        return;
                    }
                    this.hide();
                },
                n = !!this._config.backdrop;
            return new xo({
                className: Ll,
                isVisible: n,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: n ? t : null,
            });
        }
        _initializeFocusTrap() {
            return new Oo({ trapElement: this._element });
        }
        _addEventListeners() {
            B.on(this._element, Bl, (t) => {
                if (t.key === Nl) {
                    if (this._config.keyboard) {
                        this.hide();
                        return;
                    }
                    B.trigger(this._element, Ho);
                }
            });
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const n = rn.getOrCreateInstance(this, t);
                if (typeof t == "string") {
                    if (
                        n[t] === void 0 ||
                        t.startsWith("_") ||
                        t === "constructor"
                    )
                        throw new TypeError(`No method named "${t}"`);
                    n[t](this);
                }
            });
        }
    }
    B.on(document, Ml, $l, function (o) {
        const t = Z.getElementFromSelector(this);
        if (
            (["A", "AREA"].includes(this.tagName) && o.preventDefault(),
            p(this))
        )
            return;
        B.one(t, qo, () => {
            c(this) && this.focus();
        });
        const n = Z.findOne(jo);
        n && n !== t && rn.getInstance(n).hide(),
            rn.getOrCreateInstance(t).toggle(this);
    }),
        B.on(window, Dl, () => {
            for (const o of Z.find(jo)) rn.getOrCreateInstance(o).show();
        }),
        B.on(window, Fl, () => {
            for (const o of Z.find(
                "[aria-modal][class*=show][class*=offcanvas-]"
            ))
                getComputedStyle(o).position !== "fixed" &&
                    rn.getOrCreateInstance(o).hide();
        }),
        On(rn),
        Q(rn);
    const Wo = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        Hl = new Set([
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ]),
        ql = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        Wl = (o, t) => {
            const n = o.nodeName.toLowerCase();
            return t.includes(n)
                ? Hl.has(n)
                    ? !!ql.test(o.nodeValue)
                    : !0
                : t.filter((s) => s instanceof RegExp).some((s) => s.test(n));
        };
    function Ul(o, t, n) {
        if (!o.length) return o;
        if (n && typeof n == "function") return n(o);
        const f = new window.DOMParser().parseFromString(o, "text/html"),
            g = [].concat(...f.body.querySelectorAll("*"));
        for (const E of g) {
            const C = E.nodeName.toLowerCase();
            if (!Object.keys(t).includes(C)) {
                E.remove();
                continue;
            }
            const k = [].concat(...E.attributes),
                V = [].concat(t["*"] || [], t[C] || []);
            for (const j of k) Wl(j, V) || E.removeAttribute(j.nodeName);
        }
        return f.body.innerHTML;
    }
    const zl = "TemplateFactory",
        Kl = {
            allowList: Wo,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>",
        },
        Yl = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string",
        },
        Gl = {
            entry: "(string|element|function|null)",
            selector: "(string|element)",
        };
    class Xl extends He {
        constructor(t) {
            super(), (this._config = this._getConfig(t));
        }
        static get Default() {
            return Kl;
        }
        static get DefaultType() {
            return Yl;
        }
        static get NAME() {
            return zl;
        }
        getContent() {
            return Object.values(this._config.content)
                .map((t) => this._resolvePossibleFunction(t))
                .filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(t) {
            return (
                this._checkContent(t),
                (this._config.content = { ...this._config.content, ...t }),
                this
            );
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [f, g] of Object.entries(this._config.content))
                this._setContent(t, g, f);
            const n = t.children[0],
                s = this._resolvePossibleFunction(this._config.extraClass);
            return s && n.classList.add(...s.split(" ")), n;
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
            for (const [n, s] of Object.entries(t))
                super._typeCheckConfig({ selector: n, entry: s }, Gl);
        }
        _setContent(t, n, s) {
            const f = Z.findOne(s, t);
            if (f) {
                if (((n = this._resolvePossibleFunction(n)), !n)) {
                    f.remove();
                    return;
                }
                if (a(n)) {
                    this._putElementInTemplate(l(n), f);
                    return;
                }
                if (this._config.html) {
                    f.innerHTML = this._maybeSanitize(n);
                    return;
                }
                f.textContent = n;
            }
        }
        _maybeSanitize(t) {
            return this._config.sanitize
                ? Ul(t, this._config.allowList, this._config.sanitizeFn)
                : t;
        }
        _resolvePossibleFunction(t) {
            return ot(t, [this]);
        }
        _putElementInTemplate(t, n) {
            if (this._config.html) {
                (n.innerHTML = ""), n.append(t);
                return;
            }
            n.textContent = t.textContent;
        }
    }
    const Jl = "tooltip",
        Ql = new Set(["sanitize", "allowList", "sanitizeFn"]),
        js = "fade",
        Zl = "modal",
        Yi = "show",
        tc = ".tooltip-inner",
        Uo = `.${Zl}`,
        zo = "hide.bs.modal",
        ei = "hover",
        Hs = "focus",
        ec = "click",
        nc = "manual",
        rc = "hide",
        ic = "hidden",
        sc = "show",
        oc = "shown",
        ac = "inserted",
        uc = "click",
        lc = "focusin",
        cc = "focusout",
        fc = "mouseenter",
        hc = "mouseleave",
        dc = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: $() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: $() ? "right" : "left",
        },
        pc = {
            allowList: Wo,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 6],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus",
        },
        gc = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
        };
    class _n extends Wt {
        constructor(t, n) {
            if (typeof Ii > "u")
                throw new TypeError(
                    "Bootstrap's tooltips require Popper (https://popper.js.org)"
                );
            super(t, n),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._isHovered = null),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._templateFactory = null),
                (this._newContent = null),
                (this.tip = null),
                this._setListeners(),
                this._config.selector || this._fixTitle();
        }
        static get Default() {
            return pc;
        }
        static get DefaultType() {
            return gc;
        }
        static get NAME() {
            return Jl;
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle() {
            if (this._isEnabled) {
                if (
                    ((this._activeTrigger.click = !this._activeTrigger.click),
                    this._isShown())
                ) {
                    this._leave();
                    return;
                }
                this._enter();
            }
        }
        dispose() {
            clearTimeout(this._timeout),
                B.off(this._element.closest(Uo), zo, this._hideModalHandler),
                this._element.getAttribute("data-bs-original-title") &&
                    this._element.setAttribute(
                        "title",
                        this._element.getAttribute("data-bs-original-title")
                    ),
                this._disposePopper(),
                super.dispose();
        }
        show() {
            if (this._element.style.display === "none")
                throw new Error("Please use show on visible elements");
            if (!(this._isWithContent() && this._isEnabled)) return;
            const t = B.trigger(this._element, this.constructor.eventName(sc)),
                s = (
                    b(this._element) ||
                    this._element.ownerDocument.documentElement
                ).contains(this._element);
            if (t.defaultPrevented || !s) return;
            this._disposePopper();
            const f = this._getTipElement();
            this._element.setAttribute(
                "aria-describedby",
                f.getAttribute("id")
            );
            const { container: g } = this._config;
            if (
                (this._element.ownerDocument.documentElement.contains(
                    this.tip
                ) ||
                    (g.append(f),
                    B.trigger(this._element, this.constructor.eventName(ac))),
                (this._popper = this._createPopper(f)),
                f.classList.add(Yi),
                "ontouchstart" in document.documentElement)
            )
                for (const C of [].concat(...document.body.children))
                    B.on(C, "mouseover", y);
            const E = () => {
                B.trigger(this._element, this.constructor.eventName(oc)),
                    this._isHovered === !1 && this._leave(),
                    (this._isHovered = !1);
            };
            this._queueCallback(E, this.tip, this._isAnimated());
        }
        hide() {
            if (
                !this._isShown() ||
                B.trigger(this._element, this.constructor.eventName(rc))
                    .defaultPrevented
            )
                return;
            if (
                (this._getTipElement().classList.remove(Yi),
                "ontouchstart" in document.documentElement)
            )
                for (const f of [].concat(...document.body.children))
                    B.off(f, "mouseover", y);
            (this._activeTrigger[ec] = !1),
                (this._activeTrigger[Hs] = !1),
                (this._activeTrigger[ei] = !1),
                (this._isHovered = null);
            const s = () => {
                this._isWithActiveTrigger() ||
                    (this._isHovered || this._disposePopper(),
                    this._element.removeAttribute("aria-describedby"),
                    B.trigger(this._element, this.constructor.eventName(ic)));
            };
            this._queueCallback(s, this.tip, this._isAnimated());
        }
        update() {
            this._popper && this._popper.update();
        }
        _isWithContent() {
            return !!this._getTitle();
        }
        _getTipElement() {
            return (
                this.tip ||
                    (this.tip = this._createTipElement(
                        this._newContent || this._getContentForTemplate()
                    )),
                this.tip
            );
        }
        _createTipElement(t) {
            const n = this._getTemplateFactory(t).toHtml();
            if (!n) return null;
            n.classList.remove(js, Yi),
                n.classList.add(`bs-${this.constructor.NAME}-auto`);
            const s = e(this.constructor.NAME).toString();
            return (
                n.setAttribute("id", s),
                this._isAnimated() && n.classList.add(js),
                n
            );
        }
        setContent(t) {
            (this._newContent = t),
                this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
            return (
                this._templateFactory
                    ? this._templateFactory.changeContent(t)
                    : (this._templateFactory = new Xl({
                          ...this._config,
                          content: t,
                          extraClass: this._resolvePossibleFunction(
                              this._config.customClass
                          ),
                      })),
                this._templateFactory
            );
        }
        _getContentForTemplate() {
            return { [tc]: this._getTitle() };
        }
        _getTitle() {
            return (
                this._resolvePossibleFunction(this._config.title) ||
                this._element.getAttribute("data-bs-original-title")
            );
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(
                t.delegateTarget,
                this._getDelegateConfig()
            );
        }
        _isAnimated() {
            return (
                this._config.animation ||
                (this.tip && this.tip.classList.contains(js))
            );
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(Yi);
        }
        _createPopper(t) {
            const n = ot(this._config.placement, [this, t, this._element]),
                s = dc[n.toUpperCase()];
            return qr(this._element, t, this._getPopperConfig(s));
        }
        _getOffset() {
            const { offset: t } = this._config;
            return typeof t == "string"
                ? t.split(",").map((n) => Number.parseInt(n, 10))
                : typeof t == "function"
                ? (n) => t(n, this._element)
                : t;
        }
        _resolvePossibleFunction(t) {
            return ot(t, [this._element]);
        }
        _getPopperConfig(t) {
            const n = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements,
                        },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    {
                        name: "arrow",
                        options: { element: `.${this.constructor.NAME}-arrow` },
                    },
                    {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: (s) => {
                            this._getTipElement().setAttribute(
                                "data-popper-placement",
                                s.state.placement
                            );
                        },
                    },
                ],
            };
            return { ...n, ...ot(this._config.popperConfig, [n]) };
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const n of t)
                if (n === "click")
                    B.on(
                        this._element,
                        this.constructor.eventName(uc),
                        this._config.selector,
                        (s) => {
                            this._initializeOnDelegatedTarget(s).toggle();
                        }
                    );
                else if (n !== nc) {
                    const s =
                            n === ei
                                ? this.constructor.eventName(fc)
                                : this.constructor.eventName(lc),
                        f =
                            n === ei
                                ? this.constructor.eventName(hc)
                                : this.constructor.eventName(cc);
                    B.on(this._element, s, this._config.selector, (g) => {
                        const E = this._initializeOnDelegatedTarget(g);
                        (E._activeTrigger[g.type === "focusin" ? Hs : ei] = !0),
                            E._enter();
                    }),
                        B.on(this._element, f, this._config.selector, (g) => {
                            const E = this._initializeOnDelegatedTarget(g);
                            (E._activeTrigger[g.type === "focusout" ? Hs : ei] =
                                E._element.contains(g.relatedTarget)),
                                E._leave();
                        });
                }
            (this._hideModalHandler = () => {
                this._element && this.hide();
            }),
                B.on(this._element.closest(Uo), zo, this._hideModalHandler);
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t &&
                (!this._element.getAttribute("aria-label") &&
                    !this._element.textContent.trim() &&
                    this._element.setAttribute("aria-label", t),
                this._element.setAttribute("data-bs-original-title", t),
                this._element.removeAttribute("title"));
        }
        _enter() {
            if (this._isShown() || this._isHovered) {
                this._isHovered = !0;
                return;
            }
            (this._isHovered = !0),
                this._setTimeout(() => {
                    this._isHovered && this.show();
                }, this._config.delay.show);
        }
        _leave() {
            this._isWithActiveTrigger() ||
                ((this._isHovered = !1),
                this._setTimeout(() => {
                    this._isHovered || this.hide();
                }, this._config.delay.hide));
        }
        _setTimeout(t, n) {
            clearTimeout(this._timeout), (this._timeout = setTimeout(t, n));
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
            const n = dt.getDataAttributes(this._element);
            for (const s of Object.keys(n)) Ql.has(s) && delete n[s];
            return (
                (t = { ...n, ...(typeof t == "object" && t ? t : {}) }),
                (t = this._mergeConfigObj(t)),
                (t = this._configAfterMerge(t)),
                this._typeCheckConfig(t),
                t
            );
        }
        _configAfterMerge(t) {
            return (
                (t.container =
                    t.container === !1 ? document.body : l(t.container)),
                typeof t.delay == "number" &&
                    (t.delay = { show: t.delay, hide: t.delay }),
                typeof t.title == "number" && (t.title = t.title.toString()),
                typeof t.content == "number" &&
                    (t.content = t.content.toString()),
                t
            );
        }
        _getDelegateConfig() {
            const t = {};
            for (const [n, s] of Object.entries(this._config))
                this.constructor.Default[n] !== s && (t[n] = s);
            return (t.selector = !1), (t.trigger = "manual"), t;
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), (this._popper = null)),
                this.tip && (this.tip.remove(), (this.tip = null));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const n = _n.getOrCreateInstance(this, t);
                if (typeof t == "string") {
                    if (typeof n[t] > "u")
                        throw new TypeError(`No method named "${t}"`);
                    n[t]();
                }
            });
        }
    }
    Q(_n);
    const mc = "popover",
        _c = ".popover-header",
        vc = ".popover-body",
        Ec = {
            ..._n.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click",
        },
        yc = { ..._n.DefaultType, content: "(null|string|element|function)" };
    class ni extends _n {
        static get Default() {
            return Ec;
        }
        static get DefaultType() {
            return yc;
        }
        static get NAME() {
            return mc;
        }
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
            return { [_c]: this._getTitle(), [vc]: this._getContent() };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const n = ni.getOrCreateInstance(this, t);
                if (typeof t == "string") {
                    if (typeof n[t] > "u")
                        throw new TypeError(`No method named "${t}"`);
                    n[t]();
                }
            });
        }
    }
    Q(ni);
    const bc = "scrollspy",
        qs = ".bs.scrollspy",
        Ac = ".data-api",
        Tc = `activate${qs}`,
        Ko = `click${qs}`,
        Cc = `load${qs}${Ac}`,
        wc = "dropdown-item",
        dr = "active",
        Sc = '[data-bs-spy="scroll"]',
        Ws = "[href]",
        xc = ".nav, .list-group",
        Yo = ".nav-link",
        kc = `${Yo}, .nav-item > ${Yo}, .list-group-item`,
        Oc = ".dropdown",
        Dc = ".dropdown-toggle",
        Nc = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null,
            threshold: [0.1, 0.5, 1],
        },
        Lc = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array",
        };
    class ri extends Wt {
        constructor(t, n) {
            super(t, n),
                (this._targetLinks = new Map()),
                (this._observableSections = new Map()),
                (this._rootElement =
                    getComputedStyle(this._element).overflowY === "visible"
                        ? null
                        : this._element),
                (this._activeTarget = null),
                (this._observer = null),
                (this._previousScrollData = {
                    visibleEntryTop: 0,
                    parentScrollTop: 0,
                }),
                this.refresh();
        }
        static get Default() {
            return Nc;
        }
        static get DefaultType() {
            return Lc;
        }
        static get NAME() {
            return bc;
        }
        refresh() {
            this._initializeTargetsAndObservables(),
                this._maybeEnableSmoothScroll(),
                this._observer
                    ? this._observer.disconnect()
                    : (this._observer = this._getNewObserver());
            for (const t of this._observableSections.values())
                this._observer.observe(t);
        }
        dispose() {
            this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
            return (
                (t.target = l(t.target) || document.body),
                (t.rootMargin = t.offset
                    ? `${t.offset}px 0px -30%`
                    : t.rootMargin),
                typeof t.threshold == "string" &&
                    (t.threshold = t.threshold
                        .split(",")
                        .map((n) => Number.parseFloat(n))),
                t
            );
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll &&
                (B.off(this._config.target, Ko),
                B.on(this._config.target, Ko, Ws, (t) => {
                    const n = this._observableSections.get(t.target.hash);
                    if (n) {
                        t.preventDefault();
                        const s = this._rootElement || window,
                            f = n.offsetTop - this._element.offsetTop;
                        if (s.scrollTo) {
                            s.scrollTo({ top: f, behavior: "smooth" });
                            return;
                        }
                        s.scrollTop = f;
                    }
                }));
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin,
            };
            return new IntersectionObserver(
                (n) => this._observerCallback(n),
                t
            );
        }
        _observerCallback(t) {
            const n = (E) => this._targetLinks.get(`#${E.target.id}`),
                s = (E) => {
                    (this._previousScrollData.visibleEntryTop =
                        E.target.offsetTop),
                        this._process(n(E));
                },
                f = (this._rootElement || document.documentElement).scrollTop,
                g = f >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = f;
            for (const E of t) {
                if (!E.isIntersecting) {
                    (this._activeTarget = null), this._clearActiveClass(n(E));
                    continue;
                }
                const C =
                    E.target.offsetTop >=
                    this._previousScrollData.visibleEntryTop;
                if (g && C) {
                    if ((s(E), !f)) return;
                    continue;
                }
                !g && !C && s(E);
            }
        }
        _initializeTargetsAndObservables() {
            (this._targetLinks = new Map()),
                (this._observableSections = new Map());
            const t = Z.find(Ws, this._config.target);
            for (const n of t) {
                if (!n.hash || p(n)) continue;
                const s = Z.findOne(decodeURI(n.hash), this._element);
                c(s) &&
                    (this._targetLinks.set(decodeURI(n.hash), n),
                    this._observableSections.set(n.hash, s));
            }
        }
        _process(t) {
            this._activeTarget !== t &&
                (this._clearActiveClass(this._config.target),
                (this._activeTarget = t),
                t.classList.add(dr),
                this._activateParents(t),
                B.trigger(this._element, Tc, { relatedTarget: t }));
        }
        _activateParents(t) {
            if (t.classList.contains(wc)) {
                Z.findOne(Dc, t.closest(Oc)).classList.add(dr);
                return;
            }
            for (const n of Z.parents(t, xc))
                for (const s of Z.prev(n, kc)) s.classList.add(dr);
        }
        _clearActiveClass(t) {
            t.classList.remove(dr);
            const n = Z.find(`${Ws}.${dr}`, t);
            for (const s of n) s.classList.remove(dr);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const n = ri.getOrCreateInstance(this, t);
                if (typeof t == "string") {
                    if (
                        n[t] === void 0 ||
                        t.startsWith("_") ||
                        t === "constructor"
                    )
                        throw new TypeError(`No method named "${t}"`);
                    n[t]();
                }
            });
        }
    }
    B.on(window, Cc, () => {
        for (const o of Z.find(Sc)) ri.getOrCreateInstance(o);
    }),
        Q(ri);
    const Rc = "tab",
        Pn = ".bs.tab",
        Pc = `hide${Pn}`,
        Ic = `hidden${Pn}`,
        Fc = `show${Pn}`,
        Mc = `shown${Pn}`,
        Bc = `click${Pn}`,
        $c = `keydown${Pn}`,
        Vc = `load${Pn}`,
        jc = "ArrowLeft",
        Go = "ArrowRight",
        Hc = "ArrowUp",
        Xo = "ArrowDown",
        Us = "Home",
        Jo = "End",
        In = "active",
        Qo = "fade",
        zs = "show",
        qc = "dropdown",
        Wc = ".dropdown-toggle",
        Uc = ".dropdown-menu",
        Ks = ":not(.dropdown-toggle)",
        zc = '.list-group, .nav, [role="tablist"]',
        Kc = ".nav-item, .list-group-item",
        Yc = `.nav-link${Ks}, .list-group-item${Ks}, [role="tab"]${Ks}`,
        Zo =
            '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Ys = `${Yc}, ${Zo}`,
        Gc = `.${In}[data-bs-toggle="tab"], .${In}[data-bs-toggle="pill"], .${In}[data-bs-toggle="list"]`;
    class vn extends Wt {
        constructor(t) {
            super(t),
                (this._parent = this._element.closest(zc)),
                this._parent &&
                    (this._setInitialAttributes(
                        this._parent,
                        this._getChildren()
                    ),
                    B.on(this._element, $c, (n) => this._keydown(n)));
        }
        static get NAME() {
            return Rc;
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const n = this._getActiveElem(),
                s = n ? B.trigger(n, Pc, { relatedTarget: t }) : null;
            B.trigger(t, Fc, { relatedTarget: n }).defaultPrevented ||
                (s && s.defaultPrevented) ||
                (this._deactivate(n, t), this._activate(t, n));
        }
        _activate(t, n) {
            if (!t) return;
            t.classList.add(In), this._activate(Z.getElementFromSelector(t));
            const s = () => {
                if (t.getAttribute("role") !== "tab") {
                    t.classList.add(zs);
                    return;
                }
                t.removeAttribute("tabindex"),
                    t.setAttribute("aria-selected", !0),
                    this._toggleDropDown(t, !0),
                    B.trigger(t, Mc, { relatedTarget: n });
            };
            this._queueCallback(s, t, t.classList.contains(Qo));
        }
        _deactivate(t, n) {
            if (!t) return;
            t.classList.remove(In),
                t.blur(),
                this._deactivate(Z.getElementFromSelector(t));
            const s = () => {
                if (t.getAttribute("role") !== "tab") {
                    t.classList.remove(zs);
                    return;
                }
                t.setAttribute("aria-selected", !1),
                    t.setAttribute("tabindex", "-1"),
                    this._toggleDropDown(t, !1),
                    B.trigger(t, Ic, { relatedTarget: n });
            };
            this._queueCallback(s, t, t.classList.contains(Qo));
        }
        _keydown(t) {
            if (![jc, Go, Hc, Xo, Us, Jo].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const n = this._getChildren().filter((f) => !p(f));
            let s;
            if ([Us, Jo].includes(t.key))
                s = n[t.key === Us ? 0 : n.length - 1];
            else {
                const f = [Go, Xo].includes(t.key);
                s = Lt(n, t.target, f, !0);
            }
            s &&
                (s.focus({ preventScroll: !0 }),
                vn.getOrCreateInstance(s).show());
        }
        _getChildren() {
            return Z.find(Ys, this._parent);
        }
        _getActiveElem() {
            return (
                this._getChildren().find((t) => this._elemIsActive(t)) || null
            );
        }
        _setInitialAttributes(t, n) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const s of n) this._setInitialAttributesOnChild(s);
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const n = this._elemIsActive(t),
                s = this._getOuterElement(t);
            t.setAttribute("aria-selected", n),
                s !== t &&
                    this._setAttributeIfNotExists(s, "role", "presentation"),
                n || t.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(t, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
            const n = Z.getElementFromSelector(t);
            n &&
                (this._setAttributeIfNotExists(n, "role", "tabpanel"),
                t.id &&
                    this._setAttributeIfNotExists(
                        n,
                        "aria-labelledby",
                        `${t.id}`
                    ));
        }
        _toggleDropDown(t, n) {
            const s = this._getOuterElement(t);
            if (!s.classList.contains(qc)) return;
            const f = (g, E) => {
                const C = Z.findOne(g, s);
                C && C.classList.toggle(E, n);
            };
            f(Wc, In), f(Uc, zs), s.setAttribute("aria-expanded", n);
        }
        _setAttributeIfNotExists(t, n, s) {
            t.hasAttribute(n) || t.setAttribute(n, s);
        }
        _elemIsActive(t) {
            return t.classList.contains(In);
        }
        _getInnerElement(t) {
            return t.matches(Ys) ? t : Z.findOne(Ys, t);
        }
        _getOuterElement(t) {
            return t.closest(Kc) || t;
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const n = vn.getOrCreateInstance(this);
                if (typeof t == "string") {
                    if (
                        n[t] === void 0 ||
                        t.startsWith("_") ||
                        t === "constructor"
                    )
                        throw new TypeError(`No method named "${t}"`);
                    n[t]();
                }
            });
        }
    }
    B.on(document, Bc, Zo, function (o) {
        ["A", "AREA"].includes(this.tagName) && o.preventDefault(),
            !p(this) && vn.getOrCreateInstance(this).show();
    }),
        B.on(window, Vc, () => {
            for (const o of Z.find(Gc)) vn.getOrCreateInstance(o);
        }),
        Q(vn);
    const Xc = "toast",
        En = ".bs.toast",
        Jc = `mouseover${En}`,
        Qc = `mouseout${En}`,
        Zc = `focusin${En}`,
        tf = `focusout${En}`,
        ef = `hide${En}`,
        nf = `hidden${En}`,
        rf = `show${En}`,
        sf = `shown${En}`,
        of = "fade",
        ta = "hide",
        Gi = "show",
        Xi = "showing",
        af = { animation: "boolean", autohide: "boolean", delay: "number" },
        uf = { animation: !0, autohide: !0, delay: 5e3 };
    class pr extends Wt {
        constructor(t, n) {
            super(t, n),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
        }
        static get Default() {
            return uf;
        }
        static get DefaultType() {
            return af;
        }
        static get NAME() {
            return Xc;
        }
        show() {
            if (B.trigger(this._element, rf).defaultPrevented) return;
            this._clearTimeout(),
                this._config.animation && this._element.classList.add(of);
            const n = () => {
                this._element.classList.remove(Xi),
                    B.trigger(this._element, sf),
                    this._maybeScheduleHide();
            };
            this._element.classList.remove(ta),
                T(this._element),
                this._element.classList.add(Gi, Xi),
                this._queueCallback(n, this._element, this._config.animation);
        }
        hide() {
            if (
                !this.isShown() ||
                B.trigger(this._element, ef).defaultPrevented
            )
                return;
            const n = () => {
                this._element.classList.add(ta),
                    this._element.classList.remove(Xi, Gi),
                    B.trigger(this._element, nf);
            };
            this._element.classList.add(Xi),
                this._queueCallback(n, this._element, this._config.animation);
        }
        dispose() {
            this._clearTimeout(),
                this.isShown() && this._element.classList.remove(Gi),
                super.dispose();
        }
        isShown() {
            return this._element.classList.contains(Gi);
        }
        _maybeScheduleHide() {
            this._config.autohide &&
                (this._hasMouseInteraction ||
                    this._hasKeyboardInteraction ||
                    (this._timeout = setTimeout(() => {
                        this.hide();
                    }, this._config.delay)));
        }
        _onInteraction(t, n) {
            switch (t.type) {
                case "mouseover":
                case "mouseout": {
                    this._hasMouseInteraction = n;
                    break;
                }
                case "focusin":
                case "focusout": {
                    this._hasKeyboardInteraction = n;
                    break;
                }
            }
            if (n) {
                this._clearTimeout();
                return;
            }
            const s = t.relatedTarget;
            this._element === s ||
                this._element.contains(s) ||
                this._maybeScheduleHide();
        }
        _setListeners() {
            B.on(this._element, Jc, (t) => this._onInteraction(t, !0)),
                B.on(this._element, Qc, (t) => this._onInteraction(t, !1)),
                B.on(this._element, Zc, (t) => this._onInteraction(t, !0)),
                B.on(this._element, tf, (t) => this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const n = pr.getOrCreateInstance(this, t);
                if (typeof t == "string") {
                    if (typeof n[t] > "u")
                        throw new TypeError(`No method named "${t}"`);
                    n[t](this);
                }
            });
        }
    }
    On(pr), Q(pr);
    var lf = Object.freeze({
            __proto__: null,
            Alert: en,
            Button: m,
            Carousel: lr,
            Collapse: fr,
            Dropdown: we,
            Modal: Rn,
            Offcanvas: rn,
            Popover: ni,
            ScrollSpy: ri,
            Tab: vn,
            Toast: pr,
            Tooltip: _n,
        }),
        cf = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="dropdown"]')
        );
    cf.map(function (o) {
        var t = {
            boundary:
                o.getAttribute("data-bs-boundary") === "viewport"
                    ? document.querySelector(".btn")
                    : "clippingParents",
        };
        return new we(o, t);
    });
    var ff = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    ff.map(function (o) {
        var t,
            n,
            s = {
                delay: { show: 50, hide: 50 },
                html:
                    (t = o.getAttribute("data-bs-html") === "true") !== null &&
                    t !== void 0
                        ? t
                        : !1,
                placement:
                    (n = o.getAttribute("data-bs-placement")) !== null &&
                    n !== void 0
                        ? n
                        : "auto",
            };
        return new _n(o, s);
    });
    var hf = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    hf.map(function (o) {
        var t,
            n,
            s = {
                delay: { show: 50, hide: 50 },
                html:
                    (t = o.getAttribute("data-bs-html") === "true") !== null &&
                    t !== void 0
                        ? t
                        : !1,
                placement:
                    (n = o.getAttribute("data-bs-placement")) !== null &&
                    n !== void 0
                        ? n
                        : "auto",
            };
        return new ni(o, s);
    });
    var df = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="switch-icon"]')
    );
    df.map(function (o) {
        o.addEventListener("click", function (t) {
            t.stopPropagation(), o.classList.toggle("active");
        });
    });
    var pf = function () {
        var t = window.location.hash;
        if (t) {
            var n = [].slice.call(
                    document.querySelectorAll('[data-bs-toggle="tab"]')
                ),
                s = n.filter(function (f) {
                    return f.hash === t;
                });
            s.map(function (f) {
                new vn(f).show();
            });
        }
    };
    pf();
    var gf = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="toast"]')
    );
    gf.map(function (o) {
        return new pr(o);
    });
    var ea = "tblr-",
        na = function (t, n) {
            var s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return s
                ? "rgba("
                      .concat(parseInt(s[1], 16), ", ")
                      .concat(parseInt(s[2], 16), ", ")
                      .concat(parseInt(s[3], 16), ", ")
                      .concat(n, ")")
                : null;
        },
        mf = function (t) {
            var n =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : 1,
                s = getComputedStyle(document.body)
                    .getPropertyValue("--".concat(ea).concat(t))
                    .trim();
            return n !== 1 ? na(s, n) : s;
        },
        _f = Object.freeze({
            __proto__: null,
            prefix: ea,
            hexToRgba: na,
            getColor: mf,
        });
    (globalThis.bootstrap = lf), (globalThis.tabler = _f);
});
const Ta = "tablerTheme",
    zh = "light";
let os;
const ro = new Proxy(new URLSearchParams(window.location.search), {
    get: (h, d) => h.get(d),
});
if (ro.theme) localStorage.setItem(Ta, ro.theme), (os = ro.theme);
else {
    const h = localStorage.getItem(Ta);
    os = h || zh;
}
os === "dark"
    ? document.body.setAttribute("data-bs-theme", os)
    : document.body.removeAttribute("data-bs-theme");
window.$ = window.jQuery = Uh;
