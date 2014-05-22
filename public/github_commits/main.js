var PS = PS || {};
PS.Prelude = (function () {
    "use strict";
    var LT = {
        ctor: "Prelude.LT", 
        values: [  ]
    };
    var GT = {
        ctor: "Prelude.GT", 
        values: [  ]
    };
    var EQ = {
        ctor: "Prelude.EQ", 
        values: [  ]
    };
    function $less$less$less(dict) {
        return dict["<<<"];
    };
    function id(dict) {
        return dict["id"];
    };
    function cons(e) {  return function (l) {    return [e].concat(l);  };};
    function show(dict) {
        return dict["show"];
    };
    function showStringImpl(s) {  return JSON.stringify(s);};
    function showNumberImpl(n) {  return n.toString();};
    function showArrayImpl (f) {  return function (xs) {    var ss = [];    for (var i = 0, l = xs.length; i < l; i++) {      ss[i] = f(xs[i]);    }    return '[' + ss.join(',') + ']';  };};
    function $less$dollar$greater(dict) {
        return dict["<$>"];
    };
    function $less$times$greater(dict) {
        return dict["<*>"];
    };
    function pure(dict) {
        return dict["pure"];
    };
    function empty(dict) {
        return dict["empty"];
    };
    function $less$bar$greater(dict) {
        return dict["<|>"];
    };
    function $greater$greater$eq(dict) {
        return dict[">>="];
    };
    function $plus(dict) {
        return dict["+"];
    };
    function $minus(dict) {
        return dict["-"];
    };
    function $times(dict) {
        return dict["*"];
    };
    function $div(dict) {
        return dict["/"];
    };
    function $percent(dict) {
        return dict["%"];
    };
    function negate(dict) {
        return dict["negate"];
    };
    function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
    function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
    function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
    function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
    function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
    function numNegate(n) {  return -n;};
    function $eq$eq(dict) {
        return dict["=="];
    };
    function $div$eq(dict) {
        return dict["/="];
    };
    function refEq(r1) {  return function(r2) {    return r1 === r2;  };};
    function refIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
    function compare(dict) {
        return dict["compare"];
    };
    function numCompare(n1) {  return function(n2) {    return n1 < n2 ? LT : n1 > n2 ? GT : EQ;  };};
    function $amp(dict) {
        return dict["&"];
    };
    function $bar(dict) {
        return dict["|"];
    };
    function $up(dict) {
        return dict["^"];
    };
    function shl(dict) {
        return dict["shl"];
    };
    function shr(dict) {
        return dict["shr"];
    };
    function zshr(dict) {
        return dict["zshr"];
    };
    function complement(dict) {
        return dict["complement"];
    };
    function numShl(n1) {  return function(n2) {    return n1 << n2;  };};
    function numShr(n1) {  return function(n2) {    return n1 >> n2;  };};
    function numZshr(n1) {  return function(n2) {    return n1 >>> n2;  };};
    function numAnd(n1) {  return function(n2) {    return n1 & n2;  };};
    function numOr(n1) {  return function(n2) {    return n1 | n2;  };};
    function numXor(n1) {  return function(n2) {    return n1 ^ n2;  };};
    function numComplement(n) {  return ~n;};
    function $amp$amp(dict) {
        return dict["&&"];
    };
    function $bar$bar(dict) {
        return dict["||"];
    };
    function not(dict) {
        return dict["not"];
    };
    function boolAnd(b1) {  return function(b2) {    return b1 && b2;  };};
    function boolOr(b1) {  return function(b2) {    return b1 || b2;  };};
    function boolNot(b) {  return !b;};
    function $less$greater(dict) {
        return dict["<>"];
    };
    function concatString(s1) {  return function(s2) {    return s1 + s2;  };};
    var $greater$greater$greater = function (__dict_Semigroupoid_0) {
        return function (f) {
            return function (g) {
                return $less$less$less(__dict_Semigroupoid_0)(g)(f);
            };
        };
    };
    var $greater$eq = function (__dict_Ord_1) {
        return function (a1) {
            return function (a2) {
                return (function (_1) {
                    if (_1.ctor === "Prelude.LT") {
                        return false;
                    };
                    return true;
                })(compare(__dict_Ord_1)(a1)(a2));
            };
        };
    };
    var $greater = function (__dict_Ord_2) {
        return function (a1) {
            return function (a2) {
                return (function (_1) {
                    if (_1.ctor === "Prelude.GT") {
                        return true;
                    };
                    return false;
                })(compare(__dict_Ord_2)(a1)(a2));
            };
        };
    };
    var $less$eq = function (__dict_Ord_3) {
        return function (a1) {
            return function (a2) {
                return (function (_1) {
                    if (_1.ctor === "Prelude.GT") {
                        return false;
                    };
                    return true;
                })(compare(__dict_Ord_3)(a1)(a2));
            };
        };
    };
    var $less = function (__dict_Ord_4) {
        return function (a1) {
            return function (a2) {
                return (function (_1) {
                    if (_1.ctor === "Prelude.LT") {
                        return true;
                    };
                    return false;
                })(compare(__dict_Ord_4)(a1)(a2));
            };
        };
    };
    var $colon = cons;
    var $plus$plus = function (__dict_Semigroup_5) {
        return $less$greater(__dict_Semigroup_5);
    };
    var $dollar = function (f) {
        return function (x) {
            return f(x);
        };
    };
    var $hash = function (x) {
        return function (f) {
            return f(x);
        };
    };
    var showString = function (_) {
        return {
            "__superclasses": {}, 
            show: showStringImpl
        };
    };
    var showOrdering = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_1) {
                if (_1.ctor === "Prelude.LT") {
                    return "LT";
                };
                if (_1.ctor === "Prelude.GT") {
                    return "GT";
                };
                if (_1.ctor === "Prelude.EQ") {
                    return "EQ";
                };
                throw "Failed pattern match";
            }
        };
    };
    var showNumber = function (_) {
        return {
            "__superclasses": {}, 
            show: showNumberImpl
        };
    };
    var showBoolean = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_1) {
                if (_1) {
                    return "true";
                };
                if (!_1) {
                    return "false";
                };
                throw "Failed pattern match";
            }
        };
    };
    var showArray = function (__dict_Show_6) {
        return {
            "__superclasses": {}, 
            show: showArrayImpl(show(__dict_Show_6))
        };
    };
    var semigroupoidArr = function (_) {
        return {
            "__superclasses": {}, 
            "<<<": function (f) {
                return function (g) {
                    return function (x) {
                        return f(g(x));
                    };
                };
            }
        };
    };
    var semigroupString = function (_) {
        return {
            "__superclasses": {}, 
            "<>": concatString
        };
    };
    var $$return = function (__dict_Monad_7) {
        return pure(__dict_Monad_7["__superclasses"]["Prelude.Applicative_0"]({}));
    };
    var numNumber = function (_) {
        return {
            "__superclasses": {}, 
            "+": numAdd, 
            "-": numSub, 
            "*": numMul, 
            "/": numDiv, 
            "%": numMod, 
            negate: numNegate
        };
    };
    var liftM1 = function (__dict_Monad_8) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_8["__superclasses"]["Prelude.Bind_1"]({}))(a)(function (_1) {
                    return $$return(__dict_Monad_8)(f(_1));
                });
            };
        };
    };
    var liftA1 = function (__dict_Applicative_9) {
        return function (f) {
            return function (a) {
                return $less$times$greater(__dict_Applicative_9["__superclasses"]["Prelude.Apply_0"]({}))(pure(__dict_Applicative_9)(f))(a);
            };
        };
    };
    var flip = function (f) {
        return function (b) {
            return function (a) {
                return f(a)(b);
            };
        };
    };
    var eqString = function (_) {
        return {
            "__superclasses": {}, 
            "==": refEq, 
            "/=": refIneq
        };
    };
    var eqNumber = function (_) {
        return {
            "__superclasses": {}, 
            "==": refEq, 
            "/=": refIneq
        };
    };
    var ordNumber = function (_) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqNumber({});
                }
            }, 
            compare: numCompare
        };
    };
    var eqBoolean = function (_) {
        return {
            "__superclasses": {}, 
            "==": refEq, 
            "/=": refIneq
        };
    };
    var $$const = function (_1) {
        return function (_2) {
            return _1;
        };
    };
    var categoryArr = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroupoid_0": function (_) {
                    return semigroupoidArr({});
                }
            }, 
            id: function (x) {
                return x;
            }
        };
    };
    var boolLikeBoolean = function (_) {
        return {
            "__superclasses": {}, 
            "&&": boolAnd, 
            "||": boolOr, 
            not: boolNot
        };
    };
    var eqArray = function (__dict_Eq_10) {
        return {
            "__superclasses": {}, 
            "==": function (_1) {
                return function (_2) {
                    if (_1.length === 0) {
                        if (_2.length === 0) {
                            return true;
                        };
                    };
                    if (_1.length > 0) {
                        var _8 = _1.slice(1);
                        if (_2.length > 0) {
                            var _6 = _2.slice(1);
                            return $amp$amp(boolLikeBoolean({}))($eq$eq(__dict_Eq_10)(_1[0])(_2[0]))($eq$eq(eqArray(__dict_Eq_10))(_8)(_6));
                        };
                    };
                    return false;
                };
            }, 
            "/=": function (xs) {
                return function (ys) {
                    return not(boolLikeBoolean({}))($eq$eq(eqArray(__dict_Eq_10))(xs)(ys));
                };
            }
        };
    };
    var eqOrdering = function (_) {
        return {
            "__superclasses": {}, 
            "==": function (_1) {
                return function (_2) {
                    if (_1.ctor === "Prelude.LT") {
                        if (_2.ctor === "Prelude.LT") {
                            return true;
                        };
                    };
                    if (_1.ctor === "Prelude.GT") {
                        if (_2.ctor === "Prelude.GT") {
                            return true;
                        };
                    };
                    if (_1.ctor === "Prelude.EQ") {
                        if (_2.ctor === "Prelude.EQ") {
                            return true;
                        };
                    };
                    return false;
                };
            }, 
            "/=": function (x) {
                return function (y) {
                    return not(boolLikeBoolean({}))($eq$eq(eqOrdering({}))(x)(y));
                };
            }
        };
    };
    var bitsNumber = function (_) {
        return {
            "__superclasses": {}, 
            "&": numAnd, 
            "|": numOr, 
            "^": numXor, 
            shl: numShl, 
            shr: numShr, 
            zshr: numZshr, 
            complement: numComplement
        };
    };
    var asTypeOf = function (_1) {
        return function (_2) {
            return _1;
        };
    };
    var ap = function (__dict_Monad_11) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_11["__superclasses"]["Prelude.Bind_1"]({}))(f)(function (_1) {
                    return (function (_2) {
                        return $greater$greater$eq(__dict_Monad_11["__superclasses"]["Prelude.Bind_1"]({}))(a)(function (_1) {
                            return $$return(__dict_Monad_11)(_2(_1));
                        });
                    })(_1);
                });
            };
        };
    };
    return {
        LT: LT, 
        GT: GT, 
        EQ: EQ, 
        "++": $plus$plus, 
        concatString: concatString, 
        "<>": $less$greater, 
        boolNot: boolNot, 
        boolOr: boolOr, 
        boolAnd: boolAnd, 
        not: not, 
        "||": $bar$bar, 
        "&&": $amp$amp, 
        numComplement: numComplement, 
        numXor: numXor, 
        numOr: numOr, 
        numAnd: numAnd, 
        numZshr: numZshr, 
        numShr: numShr, 
        numShl: numShl, 
        complement: complement, 
        zshr: zshr, 
        shr: shr, 
        shl: shl, 
        "^": $up, 
        "|": $bar, 
        "&": $amp, 
        numCompare: numCompare, 
        ">=": $greater$eq, 
        "<=": $less$eq, 
        ">": $greater, 
        "<": $less, 
        compare: compare, 
        refIneq: refIneq, 
        refEq: refEq, 
        "/=": $div$eq, 
        "==": $eq$eq, 
        numNegate: numNegate, 
        numMod: numMod, 
        numDiv: numDiv, 
        numMul: numMul, 
        numSub: numSub, 
        numAdd: numAdd, 
        negate: negate, 
        "%": $percent, 
        "/": $div, 
        "*": $times, 
        "-": $minus, 
        "+": $plus, 
        ap: ap, 
        liftM1: liftM1, 
        "return": $$return, 
        ">>=": $greater$greater$eq, 
        "<|>": $less$bar$greater, 
        empty: empty, 
        liftA1: liftA1, 
        pure: pure, 
        "<*>": $less$times$greater, 
        "<$>": $less$dollar$greater, 
        showArrayImpl: showArrayImpl, 
        showNumberImpl: showNumberImpl, 
        showStringImpl: showStringImpl, 
        show: show, 
        cons: cons, 
        ":": $colon, 
        "#": $hash, 
        "$": $dollar, 
        id: id, 
        ">>>": $greater$greater$greater, 
        "<<<": $less$less$less, 
        asTypeOf: asTypeOf, 
        "const": $$const, 
        flip: flip, 
        semigroupoidArr: semigroupoidArr, 
        categoryArr: categoryArr, 
        showString: showString, 
        showBoolean: showBoolean, 
        showNumber: showNumber, 
        showArray: showArray, 
        numNumber: numNumber, 
        eqString: eqString, 
        eqNumber: eqNumber, 
        eqBoolean: eqBoolean, 
        eqArray: eqArray, 
        eqOrdering: eqOrdering, 
        showOrdering: showOrdering, 
        ordNumber: ordNumber, 
        bitsNumber: bitsNumber, 
        boolLikeBoolean: boolLikeBoolean, 
        semigroupString: semigroupString
    };
})();
var PS = PS || {};
PS.Prelude_Unsafe = (function () {
    "use strict";
    function unsafeIndex(xs) {  return function(n) {    return xs[n];  };};
    return {
        unsafeIndex: unsafeIndex
    };
})();
var PS = PS || {};
PS.Math = (function () {
    "use strict";
    var abs = Math.abs;;
    var acos = Math.acos;;
    var asin = Math.asin;;
    var atan = Math.atan;;
    function atan2(y){  return function (x) {    return Math.atan2(y, x);  };};
    var ceil = Math.ceil;;
    var cos = Math.cos;;
    var exp = Math.exp;;
    var floor = Math.floor;;
    var log = Math.log;;
    function max(n1){  return function(n2) {    return Math.max(n1, n2);  }};
    function min(n1){  return function(n2) {    return Math.min(n1, n2);  }};
    function pow(n){  return function(p) {    return Math.pow(n, p);  }};
    var round = Math.round;;
    var sin = Math.sin;;
    var sqrt = Math.sqrt;;
    var tan = Math.tan;;
    var e       = Math.E;;
    var ln2     = Math.LN2;;
    var ln10    = Math.LN10;;
    var log2e   = Math.LOG2E;;
    var log10e  = Math.LOG10E;;
    var pi      = Math.PI;;
    var sqrt1_2 = Math.SQRT1_2;;
    var sqrt2   = Math.SQRT2;;
    return {
        sqrt2: sqrt2, 
        "sqrt1_2": sqrt1_2, 
        pi: pi, 
        log10e: log10e, 
        log2e: log2e, 
        ln10: ln10, 
        ln2: ln2, 
        e: e, 
        tan: tan, 
        sqrt: sqrt, 
        sin: sin, 
        round: round, 
        pow: pow, 
        min: min, 
        max: max, 
        log: log, 
        floor: floor, 
        exp: exp, 
        cos: cos, 
        ceil: ceil, 
        atan2: atan2, 
        atan: atan, 
        asin: asin, 
        acos: acos, 
        abs: abs
    };
})();
var PS = PS || {};
PS.Data_Maybe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Nothing = {
        ctor: "Data.Maybe.Nothing", 
        values: [  ]
    };
    var Just = function (value0) {
        return {
            ctor: "Data.Maybe.Just", 
            values: [ value0 ]
        };
    };
    var showMaybe = function (__dict_Show_12) {
        return {
            "__superclasses": {}, 
            show: function (_1) {
                if (_1.ctor === "Data.Maybe.Just") {
                    return "Just " + Prelude.show(__dict_Show_12)(_1.values[0]);
                };
                if (_1.ctor === "Data.Maybe.Nothing") {
                    return "Nothing";
                };
                throw "Failed pattern match";
            }
        };
    };
    var maybe = function (_1) {
        return function (_2) {
            return function (_3) {
                if (_3.ctor === "Data.Maybe.Nothing") {
                    return _1;
                };
                if (_3.ctor === "Data.Maybe.Just") {
                    return _2(_3.values[0]);
                };
                throw "Failed pattern match";
            };
        };
    };
    var isNothing = maybe(true)(Prelude["const"](false));
    var isJust = maybe(false)(Prelude["const"](true));
    var functorMaybe = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": function (_1) {
                return function (_2) {
                    if (_2.ctor === "Data.Maybe.Just") {
                        return Just(_1(_2.values[0]));
                    };
                    return Nothing;
                };
            }
        };
    };
    var fromMaybe = function (a) {
        return maybe(a)(Prelude.id(Prelude.categoryArr({})));
    };
    var eqMaybe = function (__dict_Eq_14) {
        return {
            "__superclasses": {}, 
            "==": function (_1) {
                return function (_2) {
                    if (_1.ctor === "Data.Maybe.Nothing") {
                        if (_2.ctor === "Data.Maybe.Nothing") {
                            return true;
                        };
                    };
                    if (_1.ctor === "Data.Maybe.Just") {
                        if (_2.ctor === "Data.Maybe.Just") {
                            return Prelude["=="](__dict_Eq_14)(_1.values[0])(_2.values[0]);
                        };
                    };
                    return false;
                };
            }, 
            "/=": function (a) {
                return function (b) {
                    return !Prelude["=="](eqMaybe(__dict_Eq_14))(a)(b);
                };
            }
        };
    };
    var ordMaybe = function (__dict_Ord_13) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqMaybe(__dict_Ord_13["__superclasses"]["Prelude.Eq_0"]({}));
                }
            }, 
            compare: function (_1) {
                return function (_2) {
                    if (_1.ctor === "Data.Maybe.Just") {
                        if (_2.ctor === "Data.Maybe.Just") {
                            return Prelude.compare(__dict_Ord_13)(_1.values[0])(_2.values[0]);
                        };
                    };
                    if (_1.ctor === "Data.Maybe.Nothing") {
                        if (_2.ctor === "Data.Maybe.Nothing") {
                            return Prelude.EQ;
                        };
                    };
                    if (_1.ctor === "Data.Maybe.Nothing") {
                        return Prelude.LT;
                    };
                    if (_2.ctor === "Data.Maybe.Nothing") {
                        return Prelude.GT;
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var applyMaybe = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorMaybe({});
                }
            }, 
            "<*>": function (_1) {
                return function (_2) {
                    if (_1.ctor === "Data.Maybe.Just") {
                        return Prelude["<$>"](functorMaybe({}))(_1.values[0])(_2);
                    };
                    if (_1.ctor === "Data.Maybe.Nothing") {
                        return Nothing;
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var bindMaybe = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyMaybe({});
                }
            }, 
            ">>=": function (_1) {
                return function (_2) {
                    if (_1.ctor === "Data.Maybe.Just") {
                        return _2(_1.values[0]);
                    };
                    if (_1.ctor === "Data.Maybe.Nothing") {
                        return Nothing;
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var applicativeMaybe = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyMaybe({});
                }
            }, 
            pure: Just
        };
    };
    var monadMaybe = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeMaybe({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindMaybe({});
                }
            }
        };
    };
    var alternativeMaybe = function (_) {
        return {
            "__superclasses": {}, 
            empty: Nothing, 
            "<|>": function (_1) {
                return function (_2) {
                    if (_1.ctor === "Data.Maybe.Nothing") {
                        return _2;
                    };
                    return _1;
                };
            }
        };
    };
    return {
        Nothing: Nothing, 
        Just: Just, 
        isNothing: isNothing, 
        isJust: isJust, 
        fromMaybe: fromMaybe, 
        maybe: maybe, 
        functorMaybe: functorMaybe, 
        applyMaybe: applyMaybe, 
        applicativeMaybe: applicativeMaybe, 
        alternativeMaybe: alternativeMaybe, 
        bindMaybe: bindMaybe, 
        monadMaybe: monadMaybe, 
        showMaybe: showMaybe, 
        eqMaybe: eqMaybe, 
        ordMaybe: ordMaybe
    };
})();
var PS = PS || {};
PS.Data_Function = (function () {
    "use strict";
    var on = function (f) {
        return function (g) {
            return function (x) {
                return function (y) {
                    return f(g(x))(g(y));
                };
            };
        };
    };
    return {
        on: on
    };
})();
var PS = PS || {};
PS.Data_Eq = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Ref = function (value0) {
        return {
            ctor: "Data.Eq.Ref", 
            values: [ value0 ]
        };
    };
    var liftRef = function (_1) {
        return function (_2) {
            return function (_3) {
                return _1(_2.values[0])(_3.values[0]);
            };
        };
    };
    var eqRef = function (_) {
        return {
            "__superclasses": {}, 
            "==": liftRef(Prelude.refEq), 
            "/=": liftRef(Prelude.refIneq)
        };
    };
    return {
        Ref: Ref, 
        liftRef: liftRef, 
        eqRef: eqRef
    };
})();
var PS = PS || {};
PS.Data_Either = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Left = function (value0) {
        return {
            ctor: "Data.Either.Left", 
            values: [ value0 ]
        };
    };
    var Right = function (value0) {
        return {
            ctor: "Data.Either.Right", 
            values: [ value0 ]
        };
    };
    var showEither = function (__dict_Show_15) {
        return function (__dict_Show_16) {
            return {
                "__superclasses": {}, 
                show: function (_1) {
                    if (_1.ctor === "Data.Either.Left") {
                        return "Left " + Prelude.show(__dict_Show_15)(_1.values[0]);
                    };
                    if (_1.ctor === "Data.Either.Right") {
                        return "Right " + Prelude.show(__dict_Show_16)(_1.values[0]);
                    };
                    throw "Failed pattern match";
                }
            };
        };
    };
    var functorEither = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": function (_1) {
                return function (_2) {
                    if (_2.ctor === "Data.Either.Left") {
                        return Left(_2.values[0]);
                    };
                    if (_2.ctor === "Data.Either.Right") {
                        return Right(_1(_2.values[0]));
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var eqEither = function (__dict_Eq_19) {
        return function (__dict_Eq_20) {
            return {
                "__superclasses": {}, 
                "==": function (_1) {
                    return function (_2) {
                        if (_1.ctor === "Data.Either.Left") {
                            if (_2.ctor === "Data.Either.Left") {
                                return Prelude["=="](__dict_Eq_19)(_1.values[0])(_2.values[0]);
                            };
                        };
                        if (_1.ctor === "Data.Either.Right") {
                            if (_2.ctor === "Data.Either.Right") {
                                return Prelude["=="](__dict_Eq_20)(_1.values[0])(_2.values[0]);
                            };
                        };
                        return false;
                    };
                }, 
                "/=": function (a) {
                    return function (b) {
                        return !Prelude["=="](eqEither(__dict_Eq_19)(__dict_Eq_20))(a)(b);
                    };
                }
            };
        };
    };
    var ordEither = function (__dict_Ord_17) {
        return function (__dict_Ord_18) {
            return {
                "__superclasses": {
                    "Prelude.Eq_0": function (_) {
                        return eqEither(__dict_Ord_17["__superclasses"]["Prelude.Eq_0"]({}))(__dict_Ord_18["__superclasses"]["Prelude.Eq_0"]({}));
                    }
                }, 
                compare: function (_1) {
                    return function (_2) {
                        if (_1.ctor === "Data.Either.Left") {
                            if (_2.ctor === "Data.Either.Left") {
                                return Prelude.compare(__dict_Ord_17)(_1.values[0])(_2.values[0]);
                            };
                        };
                        if (_1.ctor === "Data.Either.Right") {
                            if (_2.ctor === "Data.Either.Right") {
                                return Prelude.compare(__dict_Ord_18)(_1.values[0])(_2.values[0]);
                            };
                        };
                        if (_1.ctor === "Data.Either.Left") {
                            return Prelude.LT;
                        };
                        if (_2.ctor === "Data.Either.Left") {
                            return Prelude.GT;
                        };
                        throw "Failed pattern match";
                    };
                }
            };
        };
    };
    var either = function (_1) {
        return function (_2) {
            return function (_3) {
                if (_3.ctor === "Data.Either.Left") {
                    return _1(_3.values[0]);
                };
                if (_3.ctor === "Data.Either.Right") {
                    return _2(_3.values[0]);
                };
                throw "Failed pattern match";
            };
        };
    };
    var isLeft = either(Prelude["const"](true))(Prelude["const"](false));
    var isRight = either(Prelude["const"](false))(Prelude["const"](true));
    var applyEither = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorEither({});
                }
            }, 
            "<*>": function (_1) {
                return function (_2) {
                    if (_1.ctor === "Data.Either.Left") {
                        return Left(_1.values[0]);
                    };
                    if (_1.ctor === "Data.Either.Right") {
                        return Prelude["<$>"](functorEither({}))(_1.values[0])(_2);
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var bindEither = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyEither({});
                }
            }, 
            ">>=": either(function (e) {
                return function (_) {
                    return Left(e);
                };
            })(function (a) {
                return function (f) {
                    return f(a);
                };
            })
        };
    };
    var applicativeEither = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyEither({});
                }
            }, 
            pure: Right
        };
    };
    var monadEither = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeEither({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindEither({});
                }
            }
        };
    };
    return {
        Left: Left, 
        Right: Right, 
        isRight: isRight, 
        isLeft: isLeft, 
        either: either, 
        functorEither: functorEither, 
        applyEither: applyEither, 
        applicativeEither: applicativeEither, 
        bindEither: bindEither, 
        monadEither: monadEither, 
        showEither: showEither, 
        eqEither: eqEither, 
        ordEither: ordEither
    };
})();
var PS = PS || {};
PS.Data_Array_Unsafe = (function () {
    "use strict";
    var tail = function (_1) {
        if (_1.length > 0) {
            var _4 = _1.slice(1);
            return _4;
        };
        throw "Failed pattern match";
    };
    var head = function (_1) {
        if (_1.length > 0) {
            return _1[0];
        };
        throw "Failed pattern match";
    };
    return {
        tail: tail, 
        head: head
    };
})();
var PS = PS || {};
PS.Data_Array = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Prelude_Unsafe = PS.Prelude_Unsafe;
    function snoc(l) {  return function (e) {    var l1 = l.slice();    l1.push(e);     return l1;  };};
    function length (xs) {  return xs.length;};
    function findIndex (f) {  return function (arr) {    for (var i = 0, l = arr.length; i < l; i++) {      if (f(arr[i])) {        return i;      }    }    return -1;  };};
    function findLastIndex (f) {  return function (arr) {    for (var i = arr.length - 1; i >= 0; i--) {      if (f(arr[i])) {        return i;      }    }    return -1;  };};
    function append (l1) {  return function (l2) {    return l1.concat(l2);  };};
    function concat (xss) {  var result = [];  for (var i = 0, l = xss.length; i < l; i++) {    result.push.apply(result, xss[i]);  }  return result;};
    function reverse (l) {  return l.slice().reverse();};
    function drop (n) {  return function (l) {    return l.slice(n);  };};
    function slice (s) {  return function (e) {    return function (l) {      return l.slice(s, e);    };  };};
    function insertAt (index) {  return function (a) {    return function (l) {      var l1 = l.slice();      l1.splice(index, 0, a);      return l1;    };   };};
    function deleteAt (index) {  return function (n) {    return function (l) {      var l1 = l.slice();      l1.splice(index, n);      return l1;    };   };};
    function updateAt (index) {  return function (a) {    return function (l) {      var i = ~~index;      if (i < 0 || i >= l.length) return l;      var l1 = l.slice();      l1[i] = a;      return l1;    };   };};
    function concatMap (f) {  return function (arr) {    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      Array.prototype.push.apply(result, f(arr[i]));    }    return result;  };};
    function map (f) {  return function (arr) {    var l = arr.length;    var result = new Array(l);    for (var i = 0; i < l; i++) {      result[i] = f(arr[i]);    }    return result;  };};
    function filter (f) {  return function (arr) {    var n = 0;    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      if (f(arr[i])) {        result[n++] = arr[i];      }    }    return result;  };};
    function range (start) {  return function (end) {    var i = ~~start, e = ~~end;    var step = i > e ? -1 : 1;    var result = [i], n = 1;    while (i !== e) {      i += step;      result[n++] = i;    }    return result;  };};
    function zipWith (f) {  return function (xs) {    return function (ys) {      var l = xs.length < ys.length ? xs.length : ys.length;      var result = new Array(l);      for (var i = 0; i < l; i++) {        result[i] = f(xs[i])(ys[i]);      }      return result;    };  };};
    function sortJS (f) {  return function (l) {    return l.slice().sort(function (x, y) {      return f(x)(y);    });  };};
    var $bang$bang = function (xs) {
        return function (n) {
            var isInt = function (n) {
                return n !== ~~n;
            };
            return (n < 0 || n >= length(xs) || isInt(n)) ? Data_Maybe.Nothing : Data_Maybe.Just(xs[n]);
        };
    };
    var take = function (n) {
        return slice(0)(n);
    };
    var tail = function (_1) {
        if (_1.length > 0) {
            var _4 = _1.slice(1);
            return Data_Maybe.Just(_4);
        };
        return Data_Maybe.Nothing;
    };
    var sortBy = function (comp) {
        return function (xs) {
            var comp$prime = function (x) {
                return function (y) {
                    return (function (_1) {
                        if (_1.ctor === "Prelude.GT") {
                            return 1;
                        };
                        if (_1.ctor === "Prelude.EQ") {
                            return 0;
                        };
                        if (_1.ctor === "Prelude.LT") {
                            return -1;
                        };
                        throw "Failed pattern match";
                    })(comp(x)(y));
                };
            };
            return sortJS(comp$prime)(xs);
        };
    };
    var sort = function (__dict_Ord_21) {
        return function (xs) {
            return sortBy(Prelude.compare(__dict_Ord_21))(xs);
        };
    };
    var singleton = function (a) {
        return [ a ];
    };
    var semigroupArray = function (_) {
        return {
            "__superclasses": {}, 
            "<>": append
        };
    };
    var $$null = function (_1) {
        if (_1.length === 0) {
            return true;
        };
        return false;
    };
    var nubBy = function (_1) {
        return function (_2) {
            if (_2.length === 0) {
                return [  ];
            };
            if (_2.length > 0) {
                var _6 = _2.slice(1);
                return Prelude[":"](_2[0])(nubBy(_1)(filter(function (y) {
                    return !_1(_2[0])(y);
                })(_6)));
            };
            throw "Failed pattern match";
        };
    };
    var nub = function (__dict_Eq_22) {
        return nubBy(Prelude["=="](__dict_Eq_22));
    };
    var mapMaybe = function (f) {
        return concatMap(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe.maybe([  ])(singleton))(f));
    };
    var last = function (__copy__1) {
        var _1 = __copy__1;
        tco: while (true) {
            if (_1.length > 0) {
                var _4 = _1.slice(1);
                if (_4.length === 0) {
                    return Data_Maybe.Just(_1[0]);
                };
            };
            if (_1.length > 0) {
                var _6 = _1.slice(1);
                _1 = _6;
                continue tco;
            };
            return Data_Maybe.Nothing;
        };
    };
    var init = function (_1) {
        if (_1.length === 0) {
            return Data_Maybe.Nothing;
        };
        return Data_Maybe.Just(slice(0)(length(_1) - 1)(_1));
    };
    var head = function (_1) {
        if (_1.length > 0) {
            return Data_Maybe.Just(_1[0]);
        };
        return Data_Maybe.Nothing;
    };
    var functorArray = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": map
        };
    };
    var elemLastIndex = function (__dict_Eq_23) {
        return function (x) {
            return findLastIndex(Prelude["=="](__dict_Eq_23)(x));
        };
    };
    var elemIndex = function (__dict_Eq_24) {
        return function (x) {
            return findIndex(Prelude["=="](__dict_Eq_24)(x));
        };
    };
    var applicativeArray = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyArray({});
                }
            }, 
            pure: singleton
        };
    };
    var applyArray = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorArray({});
                }
            }, 
            "<*>": Prelude.ap(monadArray({}))
        };
    };
    var monadArray = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeArray({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindArray({});
                }
            }
        };
    };
    var bindArray = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyArray({});
                }
            }, 
            ">>=": Prelude.flip(concatMap)
        };
    };
    var alternativeArray = function (_) {
        return {
            "__superclasses": {}, 
            empty: [  ], 
            "<|>": append
        };
    };
    return {
        sortBy: sortBy, 
        sort: sort, 
        nubBy: nubBy, 
        nub: nub, 
        zipWith: zipWith, 
        range: range, 
        filter: filter, 
        concatMap: concatMap, 
        updateAt: updateAt, 
        deleteAt: deleteAt, 
        insertAt: insertAt, 
        take: take, 
        drop: drop, 
        reverse: reverse, 
        concat: concat, 
        append: append, 
        elemLastIndex: elemLastIndex, 
        elemIndex: elemIndex, 
        findLastIndex: findLastIndex, 
        findIndex: findIndex, 
        length: length, 
        mapMaybe: mapMaybe, 
        map: map, 
        "null": $$null, 
        init: init, 
        tail: tail, 
        last: last, 
        head: head, 
        singleton: singleton, 
        snoc: snoc, 
        "!!": $bang$bang, 
        functorArray: functorArray, 
        applyArray: applyArray, 
        applicativeArray: applicativeArray, 
        bindArray: bindArray, 
        monadArray: monadArray, 
        semigroupArray: semigroupArray, 
        alternativeArray: alternativeArray
    };
})();
var PS = PS || {};
PS.Data_Monoid = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    function mempty(dict) {
        return dict["mempty"];
    };
    var monoidString = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return Prelude.semigroupString({});
                }
            }, 
            mempty: ""
        };
    };
    var monoidArray = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return Data_Array.semigroupArray({});
                }
            }, 
            mempty: [  ]
        };
    };
    return {
        mempty: mempty, 
        monoidString: monoidString, 
        monoidArray: monoidArray
    };
})();
var PS = PS || {};
PS.Data_Monoid_All = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var All = function (value0) {
        return {
            ctor: "Data.Monoid.All.All", 
            values: [ value0 ]
        };
    };
    var showAll = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_1) {
                return "All (" + Prelude.show(Prelude.showBoolean({}))(_1.values[0]) + ")";
            }
        };
    };
    var semigroupAll = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_1) {
                return function (_2) {
                    return All(_1.values[0] && _2.values[0]);
                };
            }
        };
    };
    var runAll = function (_1) {
        return _1.values[0];
    };
    var monoidAll = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupAll({});
                }
            }, 
            mempty: All(true)
        };
    };
    var eqAll = function (_) {
        return {
            "__superclasses": {}, 
            "==": function (_1) {
                return function (_2) {
                    return _1.values[0] === _2.values[0];
                };
            }, 
            "/=": function (_1) {
                return function (_2) {
                    return _1.values[0] !== _2.values[0];
                };
            }
        };
    };
    return {
        All: All, 
        runAll: runAll, 
        eqAll: eqAll, 
        showAll: showAll, 
        semigroupAll: semigroupAll, 
        monoidAll: monoidAll
    };
})();
var PS = PS || {};
PS.Data_Monoid_Any = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Any = function (value0) {
        return {
            ctor: "Data.Monoid.Any.Any", 
            values: [ value0 ]
        };
    };
    var showAny = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_1) {
                return "Any (" + Prelude.show(Prelude.showBoolean({}))(_1.values[0]) + ")";
            }
        };
    };
    var semigroupAny = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_1) {
                return function (_2) {
                    return Any(_1.values[0] || _2.values[0]);
                };
            }
        };
    };
    var runAny = function (_1) {
        return _1.values[0];
    };
    var monoidAny = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupAny({});
                }
            }, 
            mempty: Any(false)
        };
    };
    var eqAny = function (_) {
        return {
            "__superclasses": {}, 
            "==": function (_1) {
                return function (_2) {
                    return _1.values[0] === _2.values[0];
                };
            }, 
            "/=": function (_1) {
                return function (_2) {
                    return _1.values[0] !== _2.values[0];
                };
            }
        };
    };
    return {
        Any: Any, 
        runAny: runAny, 
        eqAny: eqAny, 
        showAny: showAny, 
        semigroupAny: semigroupAny, 
        monoidAny: monoidAny
    };
})();
var PS = PS || {};
PS.Data_Monoid_Dual = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    var Dual = function (value0) {
        return {
            ctor: "Data.Monoid.Dual.Dual", 
            values: [ value0 ]
        };
    };
    var showDual = function (__dict_Show_25) {
        return {
            "__superclasses": {}, 
            show: function (_1) {
                return "Dual (" + Prelude.show(__dict_Show_25)(_1.values[0]) + ")";
            }
        };
    };
    var semigroupDual = function (__dict_Semigroup_26) {
        return {
            "__superclasses": {}, 
            "<>": function (_1) {
                return function (_2) {
                    return Dual(Prelude["<>"](__dict_Semigroup_26)(_2.values[0])(_1.values[0]));
                };
            }
        };
    };
    var runDual = function (_1) {
        return _1.values[0];
    };
    var monoidDual = function (__dict_Monoid_28) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupDual(__dict_Monoid_28["__superclasses"]["Prelude.Semigroup_0"]({}));
                }
            }, 
            mempty: Dual(Data_Monoid.mempty(__dict_Monoid_28))
        };
    };
    var eqDual = function (__dict_Eq_29) {
        return {
            "__superclasses": {}, 
            "==": function (_1) {
                return function (_2) {
                    return Prelude["=="](__dict_Eq_29)(_1.values[0])(_2.values[0]);
                };
            }, 
            "/=": function (_1) {
                return function (_2) {
                    return Prelude["/="](__dict_Eq_29)(_1.values[0])(_2.values[0]);
                };
            }
        };
    };
    var ordDual = function (__dict_Ord_27) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqDual(__dict_Ord_27["__superclasses"]["Prelude.Eq_0"]({}));
                }
            }, 
            compare: function (_1) {
                return function (_2) {
                    return Prelude.compare(__dict_Ord_27)(_1.values[0])(_2.values[0]);
                };
            }
        };
    };
    return {
        Dual: Dual, 
        runDual: runDual, 
        eqDual: eqDual, 
        ordDual: ordDual, 
        showDual: showDual, 
        semigroupDual: semigroupDual, 
        monoidDual: monoidDual
    };
})();
var PS = PS || {};
PS.Data_Monoid_Endo = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Endo = function (value0) {
        return {
            ctor: "Data.Monoid.Endo.Endo", 
            values: [ value0 ]
        };
    };
    var semigroupEndo = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_1) {
                return function (_2) {
                    return Endo(Prelude["<<<"](Prelude.semigroupoidArr({}))(_1.values[0])(_2.values[0]));
                };
            }
        };
    };
    var runEndo = function (_1) {
        return _1.values[0];
    };
    var monoidEndo = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupEndo({});
                }
            }, 
            mempty: Endo(Prelude.id(Prelude.categoryArr({})))
        };
    };
    return {
        Endo: Endo, 
        runEndo: runEndo, 
        semigroupEndo: semigroupEndo, 
        monoidEndo: monoidEndo
    };
})();
var PS = PS || {};
PS.Data_Monoid_First = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var First = function (value0) {
        return {
            ctor: "Data.Monoid.First.First", 
            values: [ value0 ]
        };
    };
    var showFirst = function (__dict_Show_30) {
        return {
            "__superclasses": {}, 
            show: function (_1) {
                return "First (" + Prelude.show(Data_Maybe.showMaybe(__dict_Show_30))(_1.values[0]) + ")";
            }
        };
    };
    var semigroupFirst = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_1) {
                return function (_2) {
                    if ((_1.values[0]).ctor === "Data.Maybe.Just") {
                        return _1;
                    };
                    return _2;
                };
            }
        };
    };
    var runFirst = function (_1) {
        return _1.values[0];
    };
    var monoidFirst = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupFirst({});
                }
            }, 
            mempty: First(Data_Maybe.Nothing)
        };
    };
    var eqFirst = function (__dict_Eq_32) {
        return {
            "__superclasses": {}, 
            "==": function (_1) {
                return function (_2) {
                    return Prelude["=="](Data_Maybe.eqMaybe(__dict_Eq_32))(_1.values[0])(_2.values[0]);
                };
            }, 
            "/=": function (_1) {
                return function (_2) {
                    return Prelude["/="](Data_Maybe.eqMaybe(__dict_Eq_32))(_1.values[0])(_2.values[0]);
                };
            }
        };
    };
    var ordFirst = function (__dict_Ord_31) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqFirst(__dict_Ord_31["__superclasses"]["Prelude.Eq_0"]({}));
                }
            }, 
            compare: function (_1) {
                return function (_2) {
                    return Prelude.compare(Data_Maybe.ordMaybe(__dict_Ord_31))(_1.values[0])(_2.values[0]);
                };
            }
        };
    };
    return {
        First: First, 
        runFirst: runFirst, 
        eqFirst: eqFirst, 
        ordFirst: ordFirst, 
        showFirst: showFirst, 
        semigroupFirst: semigroupFirst, 
        monoidFirst: monoidFirst
    };
})();
var PS = PS || {};
PS.Data_Monoid_Last = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Last = function (value0) {
        return {
            ctor: "Data.Monoid.Last.Last", 
            values: [ value0 ]
        };
    };
    var showLast = function (__dict_Show_33) {
        return {
            "__superclasses": {}, 
            show: function (_1) {
                return "Last (" + Prelude.show(Data_Maybe.showMaybe(__dict_Show_33))(_1.values[0]) + ")";
            }
        };
    };
    var semigroupLast = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_1) {
                return function (_2) {
                    if ((_2.values[0]).ctor === "Data.Maybe.Just") {
                        return _2;
                    };
                    if ((_2.values[0]).ctor === "Data.Maybe.Nothing") {
                        return _1;
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var runLast = function (_1) {
        return _1.values[0];
    };
    var monoidLast = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupLast({});
                }
            }, 
            mempty: Last(Data_Maybe.Nothing)
        };
    };
    var eqLast = function (__dict_Eq_35) {
        return {
            "__superclasses": {}, 
            "==": function (_1) {
                return function (_2) {
                    return Prelude["=="](Data_Maybe.eqMaybe(__dict_Eq_35))(_1.values[0])(_2.values[0]);
                };
            }, 
            "/=": function (_1) {
                return function (_2) {
                    return Prelude["/="](Data_Maybe.eqMaybe(__dict_Eq_35))(_1.values[0])(_2.values[0]);
                };
            }
        };
    };
    var ordLast = function (__dict_Ord_34) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqLast(__dict_Ord_34["__superclasses"]["Prelude.Eq_0"]({}));
                }
            }, 
            compare: function (_1) {
                return function (_2) {
                    return Prelude.compare(Data_Maybe.ordMaybe(__dict_Ord_34))(_1.values[0])(_2.values[0]);
                };
            }
        };
    };
    return {
        Last: Last, 
        runLast: runLast, 
        eqLast: eqLast, 
        ordLast: ordLast, 
        showLast: showLast, 
        semigroupLast: semigroupLast, 
        monoidLast: monoidLast
    };
})();
var PS = PS || {};
PS.Data_Monoid_Product = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Product = function (value0) {
        return {
            ctor: "Data.Monoid.Product.Product", 
            values: [ value0 ]
        };
    };
    var showProduct = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_1) {
                return "Product (" + Prelude.show(Prelude.showNumber({}))(_1.values[0]) + ")";
            }
        };
    };
    var semigroupProduct = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_1) {
                return function (_2) {
                    return Product(_1.values[0] * _2.values[0]);
                };
            }
        };
    };
    var runProduct = function (_1) {
        return _1.values[0];
    };
    var monoidProduct = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupProduct({});
                }
            }, 
            mempty: Product(1)
        };
    };
    var eqProduct = function (_) {
        return {
            "__superclasses": {}, 
            "==": function (_1) {
                return function (_2) {
                    return _1.values[0] === _2.values[0];
                };
            }, 
            "/=": function (_1) {
                return function (_2) {
                    return _1.values[0] !== _2.values[0];
                };
            }
        };
    };
    var ordProduct = function (_) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqProduct({});
                }
            }, 
            compare: function (_1) {
                return function (_2) {
                    return Prelude.compare(Prelude.ordNumber({}))(_1.values[0])(_2.values[0]);
                };
            }
        };
    };
    return {
        Product: Product, 
        runProduct: runProduct, 
        eqProduct: eqProduct, 
        ordProduct: ordProduct, 
        showProduct: showProduct, 
        semigroupProduct: semigroupProduct, 
        monoidProduct: monoidProduct
    };
})();
var PS = PS || {};
PS.Data_Monoid_Sum = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Sum = function (value0) {
        return {
            ctor: "Data.Monoid.Sum.Sum", 
            values: [ value0 ]
        };
    };
    var showSum = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_1) {
                return "Sum (" + Prelude.show(Prelude.showNumber({}))(_1.values[0]) + ")";
            }
        };
    };
    var semigroupSum = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_1) {
                return function (_2) {
                    return Sum(_1.values[0] + _2.values[0]);
                };
            }
        };
    };
    var runSum = function (_1) {
        return _1.values[0];
    };
    var monoidSum = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroup_0": function (_) {
                    return semigroupSum({});
                }
            }, 
            mempty: Sum(0)
        };
    };
    var eqSum = function (_) {
        return {
            "__superclasses": {}, 
            "==": function (_1) {
                return function (_2) {
                    return _1.values[0] === _2.values[0];
                };
            }, 
            "/=": function (_1) {
                return function (_2) {
                    return _1.values[0] !== _2.values[0];
                };
            }
        };
    };
    var ordSum = function (_) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqSum({});
                }
            }, 
            compare: function (_1) {
                return function (_2) {
                    return Prelude.compare(Prelude.ordNumber({}))(_1.values[0])(_2.values[0]);
                };
            }
        };
    };
    return {
        Sum: Sum, 
        runSum: runSum, 
        eqSum: eqSum, 
        ordSum: ordSum, 
        showSum: showSum, 
        semigroupSum: semigroupSum, 
        monoidSum: monoidSum
    };
})();
var PS = PS || {};
PS.Data_Tuple = (function () {
    "use strict";
    var Data_Array = PS.Data_Array;
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    var Tuple = function (value0) {
        return function (value1) {
            return {
                ctor: "Data.Tuple.Tuple", 
                values: [ value0, value1 ]
            };
        };
    };
    var zip = Data_Array.zipWith(Tuple);
    var unzip = function (_1) {
        return (function (_2) {
            if (_2.length > 0) {
                var _4 = _2.slice(1);
                return (function (_1) {
                    return Tuple(Prelude[":"]((_2[0]).values[0])(_1.values[0]))(Prelude[":"]((_2[0]).values[1])(_1.values[1]));
                })(unzip(_4));
            };
            if (_2.length === 0) {
                return Tuple([  ])([  ]);
            };
            throw "Failed pattern match";
        })(_1);
    };
    var uncurry = function (_1) {
        return function (_2) {
            return _1(_2.values[0])(_2.values[1]);
        };
    };
    var swap = function (_1) {
        return Tuple(_1.values[1])(_1.values[0]);
    };
    var snd = function (_1) {
        return _1.values[1];
    };
    var showTuple = function (__dict_Show_36) {
        return function (__dict_Show_37) {
            return {
                "__superclasses": {}, 
                show: function (_1) {
                    return "Tuple(" + Prelude.show(__dict_Show_36)(_1.values[0]) + ", " + Prelude.show(__dict_Show_37)(_1.values[1]) + ")";
                }
            };
        };
    };
    var functorTuple = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": function (_1) {
                return function (_2) {
                    return Tuple(_2.values[0])(_1(_2.values[1]));
                };
            }
        };
    };
    var fst = function (_1) {
        return _1.values[0];
    };
    var eqTuple = function (__dict_Eq_41) {
        return function (__dict_Eq_42) {
            return {
                "__superclasses": {}, 
                "==": function (_1) {
                    return function (_2) {
                        return Prelude["=="](__dict_Eq_41)(_1.values[0])(_2.values[0]) && Prelude["=="](__dict_Eq_42)(_1.values[1])(_2.values[1]);
                    };
                }, 
                "/=": function (t1) {
                    return function (t2) {
                        return !Prelude["=="](eqTuple(__dict_Eq_41)(__dict_Eq_42))(t1)(t2);
                    };
                }
            };
        };
    };
    var ordTuple = function (__dict_Ord_38) {
        return function (__dict_Ord_39) {
            return {
                "__superclasses": {
                    "Prelude.Eq_0": function (_) {
                        return eqTuple(__dict_Ord_38["__superclasses"]["Prelude.Eq_0"]({}))(__dict_Ord_39["__superclasses"]["Prelude.Eq_0"]({}));
                    }
                }, 
                compare: function (_1) {
                    return function (_2) {
                        return (function (_3, _4) {
                            return (function (_1) {
                                if (_1.ctor === "Prelude.EQ") {
                                    return Prelude.compare(__dict_Ord_39)(_3.values[1])(_4.values[1]);
                                };
                                return _1;
                            })(Prelude.compare(__dict_Ord_38)(_3.values[0])(_4.values[0]));
                        })(_1, _2);
                    };
                }
            };
        };
    };
    var curry = function (f) {
        return function (a) {
            return function (b) {
                return f(Tuple(a)(b));
            };
        };
    };
    var applyTuple = function (__dict_Semigroup_44) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorTuple({});
                }
            }, 
            "<*>": function (_1) {
                return function (_2) {
                    return Tuple(Prelude["<>"](__dict_Semigroup_44)(_1.values[0])(_2.values[0]))(_1.values[1](_2.values[1]));
                };
            }
        };
    };
    var bindTuple = function (__dict_Semigroup_43) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyTuple(__dict_Semigroup_43);
                }
            }, 
            ">>=": function (_1) {
                return function (_2) {
                    return (function (_3, _4) {
                        return (function (_1) {
                            return Tuple(Prelude["<>"](__dict_Semigroup_43)(_3.values[0])(_1.values[0]))(_1.values[1]);
                        })(_4(_3.values[1]));
                    })(_1, _2);
                };
            }
        };
    };
    var applicativeTuple = function (__dict_Monoid_45) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyTuple(__dict_Monoid_45["__superclasses"]["Prelude.Semigroup_0"]({}));
                }
            }, 
            pure: Tuple(Data_Monoid.mempty(__dict_Monoid_45))
        };
    };
    var monadTuple = function (__dict_Monoid_40) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeTuple(__dict_Monoid_40);
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindTuple(__dict_Monoid_40["__superclasses"]["Prelude.Semigroup_0"]({}));
                }
            }
        };
    };
    return {
        Tuple: Tuple, 
        swap: swap, 
        unzip: unzip, 
        zip: zip, 
        uncurry: uncurry, 
        curry: curry, 
        snd: snd, 
        fst: fst, 
        showTuple: showTuple, 
        eqTuple: eqTuple, 
        ordTuple: ordTuple, 
        functorTuple: functorTuple, 
        applyTuple: applyTuple, 
        applicativeTuple: applicativeTuple, 
        bindTuple: bindTuple, 
        monadTuple: monadTuple
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function returnE(a) {  return function() {    return a;  };};
    function bindE(a) {  return function(f) {    return function() {      return f(a())();    };  };};
    function runPure(f) {  return f();};
    function untilE(f) {  return function() {    while (!f()) { }    return {};  };};
    function whileE(f) {  return function(a) {    return function() {      while (f()) {        a();      }      return {};    };  };};
    function forE(lo) {  return function(hi) {    return function(f) {      return function() {        for (var i = lo; i < hi; i++) {          f(i)();        }      };    };  };};
    function foreachE(as) {  return function(f) {    for (var i = 0; i < as.length; i++) {      f(as[i])();    }  };};
    var applicativeEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyEff({});
                }
            }, 
            pure: returnE
        };
    };
    var applyEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorEff({});
                }
            }, 
            "<*>": Prelude.ap(monadEff({}))
        };
    };
    var functorEff = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": Prelude.liftA1(applicativeEff({}))
        };
    };
    var monadEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeEff({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindEff({});
                }
            }
        };
    };
    var bindEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyEff({});
                }
            }, 
            ">>=": bindE
        };
    };
    return {
        foreachE: foreachE, 
        forE: forE, 
        whileE: whileE, 
        untilE: untilE, 
        runPure: runPure, 
        bindE: bindE, 
        returnE: returnE, 
        functorEff: functorEff, 
        applyEff: applyEff, 
        applicativeEff: applicativeEff, 
        bindEff: bindEff, 
        monadEff: monadEff
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Exception = (function () {
    "use strict";
    function throwException(e) {  return function() {    throw e;  };};
    function catchException(c) {  return function(t) {    return function() {      try {        return t();      } catch(e) {        return c(e)();      }    };  };};
    return {
        catchException: catchException, 
        throwException: throwException
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Random = (function () {
    "use strict";
    function random() {  return Math.random();};
    return {
        random: random
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Unsafe = (function () {
    "use strict";
    function unsafeInterleaveEff(f) {  return f;};
    return {
        unsafeInterleaveEff: unsafeInterleaveEff
    };
})();
var PS = PS || {};
PS.Control_Monad_ST = (function () {
    "use strict";
    function newSTRef(val) {  return function () {    return { value: val };  };};
    function readSTRef(ref) {  return function() {    return ref.value;  };};
    function modifySTRef(ref) {  return function(f) {    return function() {      return ref.value = f(ref.value);    };  };};
    function writeSTRef(ref) {  return function(a) {    return function() {      return ref.value = a;    };  };};
    function newSTArray(len) {  return function(a) {    return function() {      var arr = [];      for (var i = 0; i < len; i++) {        arr[i] = a;      };      return arr;    };  };};
    function peekSTArray(arr) {  return function(i) {    return function() {      return arr[i];    };  };};
    function pokeSTArray(arr) {  return function(i) {    return function(a) {      return function() {        return arr[i] = a;      };    };  };};
    function runST(f) {  return f;};
    function runSTArray(f) {  return f;};
    return {
        runSTArray: runSTArray, 
        runST: runST, 
        pokeSTArray: pokeSTArray, 
        peekSTArray: peekSTArray, 
        newSTArray: newSTArray, 
        writeSTRef: writeSTRef, 
        modifySTRef: modifySTRef, 
        readSTRef: readSTRef, 
        newSTRef: newSTRef
    };
})();
var PS = PS || {};
PS.Debug_Trace = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function trace(s) {  return function() {    console.log(s);    return {};  };};
    var print = function (__dict_Show_46) {
        return function (o) {
            return trace(Prelude.show(__dict_Show_46)(o));
        };
    };
    return {
        print: print, 
        trace: trace
    };
})();
var PS = PS || {};
PS.Main = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function vue(opt) {    return function() {        if (opt.dat !== undefined) {            opt.data = opt.dat;            delete opt.dat;        }        return new Vue(opt);    }};
    function truncate(v) {    var newline = v.indexOf('\n');    return newline > -1 ? v.slice(0, newline) : v;};
    function formatDate(v) {    return v.replace(/T|Z/g, ' ');};
    function fetchData(self) {    return function() {        var apiUrl = 'https://api.github.com/repos/yyx990803/vue/commits?per_page=3&sha=';        var xhr = new XMLHttpRequest();        xhr.open('GET', apiUrl + self.branch);        xhr.onload = function() {            self.commits = JSON.parse(xhr.responseText);        };        xhr.send();    };};
    function method(f) {    return function() {        var self = this;        return f(self)();    };};
    function call(obj) {    return function(methodName) {        return function(args) {            return function() {                return obj[methodName].apply(obj, rec2arr(args));            };        };    };    function rec2arr(rec) {        var arr = [];        for (var i = 1; i < 100; ++i) {            var key = 'arg' + i;            if (rec[key] === undefined) {                break;            } else {                arr.push(rec[key]);            }        }        return arr;    }};
    var $bar$greater = call;
    var watch = function (key) {
        return function (eff) {
            return function (self) {
                return $bar$greater(self)("$watch")({
                    arg1: key, 
                    arg2: eff(self)
                });
            };
        };
    };
    var main = vue({
        el: "#demo", 
        dat: {
            branch: "master"
        }, 
        created: method(watch("branch")(fetchData)), 
        filters: {
            truncate: truncate, 
            formatDate: formatDate
        }, 
        methods: {
            fetchData: method(fetchData)
        }
    });
    return {
        main: main, 
        watch: watch, 
        "|>": $bar$greater, 
        call: call, 
        method: method, 
        fetchData: fetchData, 
        formatDate: formatDate, 
        truncate: truncate, 
        vue: vue
    };
})();
var PS = PS || {};
PS.Test_QuickCheck_LCG = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Gen = function (value0) {
        return {
            ctor: "Test.QuickCheck.LCG.Gen", 
            values: [ value0 ]
        };
    };
    function randomSeed() {  return Math.floor(Math.random() * (1 << 30));};
    function float32ToInt32(n) {  var arr = new ArrayBuffer(4);  var fv = new Float32Array(arr);  var iv = new Int32Array(arr);  fv[0] = n;  return iv[0];};
    var runGen = function (_1) {
        return _1.values[0];
    };
    var lcgN = 1 << 30;
    var lcgM = 1103515245;
    var lcgC = 12345;
    var lcgNext = function (n) {
        return (lcgM * n + lcgC) % lcgN;
    };
    var lcgStep = Gen(function (l) {
        return {
            value: l, 
            newSeed: lcgNext(l)
        };
    });
    var perturbGen = function (_1) {
        return function (_2) {
            return Gen(function (l) {
                return _2.values[0](lcgNext(float32ToInt32(_1)) + l);
            });
        };
    };
    var functorGen = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": function (_1) {
                return function (_2) {
                    return (function (_3, _4) {
                        return Gen(function (l) {
                            return (function (_1) {
                                return {
                                    value: _3(_1.value), 
                                    newSeed: _1.newSeed
                                };
                            })(_4.values[0](l));
                        });
                    })(_1, _2);
                };
            }
        };
    };
    var uniform = Prelude["<$>"](functorGen({}))(function (n) {
        return n / (1 << 30);
    })(lcgStep);
    var evalGen = function (gen) {
        return function (seed) {
            return (runGen(gen)(seed)).value;
        };
    };
    var applyGen = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorGen({});
                }
            }, 
            "<*>": function (_1) {
                return function (_2) {
                    return (function (_3, _4) {
                        var _6 = _3.values[0];
                        return Gen(function (l) {
                            return (function (_1) {
                                var _2 = _1.value;
                                var _3 = _1.newSeed;
                                return (function (_1) {
                                    return {
                                        value: _2(_1.value), 
                                        newSeed: _1.newSeed
                                    };
                                })(_4.values[0](_3));
                            })(_6(l));
                        });
                    })(_1, _2);
                };
            }
        };
    };
    var bindGen = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyGen({});
                }
            }, 
            ">>=": function (_1) {
                return function (_2) {
                    return (function (_3, _4) {
                        return Gen(function (l) {
                            return (function (_1) {
                                return runGen(_4(_1.value))(_1.newSeed);
                            })(_3.values[0](l));
                        });
                    })(_1, _2);
                };
            }
        };
    };
    var applicativeGen = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyGen({});
                }
            }, 
            pure: function (a) {
                return Gen(function (l) {
                    return {
                        value: a, 
                        newSeed: l
                    };
                });
            }
        };
    };
    var monadGen = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeGen({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindGen({});
                }
            }
        };
    };
    return {
        Gen: Gen, 
        perturbGen: perturbGen, 
        float32ToInt32: float32ToInt32, 
        uniform: uniform, 
        lcgStep: lcgStep, 
        lcgNext: lcgNext, 
        lcgN: lcgN, 
        lcgC: lcgC, 
        lcgM: lcgM, 
        randomSeed: randomSeed, 
        evalGen: evalGen, 
        runGen: runGen, 
        functorGen: functorGen, 
        applyGen: applyGen, 
        applicativeGen: applicativeGen, 
        bindGen: bindGen, 
        monadGen: monadGen
    };
})();
var PS = PS || {};
PS.Test_QuickCheck = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Test_QuickCheck_LCG = PS.Test_QuickCheck_LCG;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Control_Monad_Eff_Exception = PS.Control_Monad_Eff_Exception;
    var Debug_Trace = PS.Debug_Trace;
    var Success = {
        ctor: "Test.QuickCheck.Success", 
        values: [  ]
    };
    var Failed = function (value0) {
        return {
            ctor: "Test.QuickCheck.Failed", 
            values: [ value0 ]
        };
    };
    function arbitrary(dict) {
        return dict["arbitrary"];
    };
    function coarbitrary(dict) {
        return dict["coarbitrary"];
    };
    function test(dict) {
        return dict["test"];
    };
    var $less$qmark$greater = function (_1) {
        return function (_2) {
            if (_1) {
                return Success;
            };
            if (!_1) {
                return Failed(_2);
            };
            throw "Failed pattern match";
        };
    };
    var testableResult = function (_) {
        return {
            "__superclasses": {}, 
            test: Prelude["return"](Test_QuickCheck_LCG.monadGen({}))
        };
    };
    var testableFunction = function (__dict_Arbitrary_47) {
        return function (__dict_Testable_48) {
            return {
                "__superclasses": {}, 
                test: function (f) {
                    return Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(arbitrary(__dict_Arbitrary_47))(function (_1) {
                        return test(__dict_Testable_48)(f(_1));
                    });
                }
            };
        };
    };
    var testableBoolean = function (_) {
        return {
            "__superclasses": {}, 
            test: function (_1) {
                if (_1) {
                    return Prelude["return"](Test_QuickCheck_LCG.monadGen({}))(Success);
                };
                if (!_1) {
                    return Prelude["return"](Test_QuickCheck_LCG.monadGen({}))(Failed("Test returned false"));
                };
                throw "Failed pattern match";
            }
        };
    };
    var showResult = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_1) {
                if (_1.ctor === "Test.QuickCheck.Success") {
                    return "Success";
                };
                if (_1.ctor === "Test.QuickCheck.Failed") {
                    return "Failed: " + _1.values[0];
                };
                throw "Failed pattern match";
            }
        };
    };
    var repeatable = function (f) {
        return Test_QuickCheck_LCG.Gen(function (l) {
            return {
                value: function (a) {
                    return (Test_QuickCheck_LCG.runGen(f(a))(l)).value;
                }, 
                newSeed: l
            };
        });
    };
    var quickCheckPure = function (__dict_Testable_49) {
        return function (seed) {
            return function (n) {
                return function (prop) {
                    var go = function (_2) {
                        return (function (_3) {
                            if (_3 <= 0) {
                                return Prelude["return"](Test_QuickCheck_LCG.monadGen({}))([  ]);
                            };
                            return Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(test(__dict_Testable_49)(prop))(function (_1) {
                                return (function (_2) {
                                    return Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(go(_3 - 1))(function (_1) {
                                        return Prelude["return"](Test_QuickCheck_LCG.monadGen({}))(Prelude[":"](_2)(_1));
                                    });
                                })(_1);
                            });
                        })(_2);
                    };
                    return Test_QuickCheck_LCG.evalGen(go(n))(seed);
                };
            };
        };
    };
    var quickCheck$prime = function (__dict_Testable_50) {
        return function (n) {
            return function (prop) {
                var throwOnFirstFailure = function (__copy__1) {
                    return function (__copy__2) {
                        var _1 = __copy__1;
                        var _2 = __copy__2;
                        tco: while (true) {
                            if (_2.length === 0) {
                                return Prelude["return"](Control_Monad_Eff.monadEff({}))({});
                            };
                            var n = _1;
                            if (_2.length > 0) {
                                if ((_2[0]).ctor === "Test.QuickCheck.Failed") {
                                    return Control_Monad_Eff_Exception.throwException("Test " + Prelude.show(Prelude.showNumber({}))(n) + " failed: \n" + (_2[0]).values[0]);
                                };
                            };
                            if (_2.length > 0) {
                                var _9 = _2.slice(1);
                                var __tco__1 = _1 + 1;
                                _1 = __tco__1;
                                _2 = _9;
                                continue tco;
                            };
                            throw "Failed pattern match";
                        };
                    };
                };
                var countSuccesses = function (_1) {
                    if (_1.length === 0) {
                        return 0;
                    };
                    if (_1.length > 0) {
                        var _4 = _1.slice(1);
                        if ((_1[0]).ctor === "Test.QuickCheck.Success") {
                            return 1 + countSuccesses(_4);
                        };
                    };
                    if (_1.length > 0) {
                        var _6 = _1.slice(1);
                        return countSuccesses(_6);
                    };
                    throw "Failed pattern match";
                };
                return function __do() {
                    var _1 = Test_QuickCheck_LCG.randomSeed();
                    return (function () {
                        var results = quickCheckPure(__dict_Testable_50)(_1)(n)(prop);
                        return (function () {
                            var successes = countSuccesses(results);
                            return function __do() {
                                Debug_Trace.trace(Prelude.show(Prelude.showNumber({}))(successes) + "/" + Prelude.show(Prelude.showNumber({}))(n) + " test(s) passed.")();
                                return throwOnFirstFailure(1)(results)();
                            };
                        })();
                    })()();
                };
            };
        };
    };
    var quickCheck = function (__dict_Testable_51) {
        return function (prop) {
            return quickCheck$prime(__dict_Testable_51)(100)(prop);
        };
    };
    var coarbNumber = function (_) {
        return {
            "__superclasses": {}, 
            coarbitrary: Test_QuickCheck_LCG.perturbGen
        };
    };
    var coarbBoolean = function (_) {
        return {
            "__superclasses": {}, 
            coarbitrary: function (_1) {
                return function (_2) {
                    if (_1) {
                        return Test_QuickCheck_LCG.Gen(function (l) {
                            return _2.values[0](l + 1);
                        });
                    };
                    if (!_1) {
                        return Test_QuickCheck_LCG.Gen(function (l) {
                            return _2.values[0](l + 2);
                        });
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var coarbArray = function (__dict_CoArbitrary_54) {
        return {
            "__superclasses": {}, 
            coarbitrary: function (_1) {
                if (_1.length === 0) {
                    return Prelude.id(Prelude.categoryArr({}));
                };
                if (_1.length > 0) {
                    var _4 = _1.slice(1);
                    return Prelude["<<<"](Prelude.semigroupoidArr({}))(coarbitrary(coarbArray(__dict_CoArbitrary_54))(_4))(coarbitrary(__dict_CoArbitrary_54)(_1[0]));
                };
                throw "Failed pattern match";
            }
        };
    };
    var arbNumber = function (_) {
        return {
            "__superclasses": {}, 
            arbitrary: Test_QuickCheck_LCG.uniform
        };
    };
    var arbFunction = function (__dict_CoArbitrary_55) {
        return function (__dict_Arbitrary_56) {
            return {
                "__superclasses": {}, 
                arbitrary: repeatable(function (a) {
                    return coarbitrary(__dict_CoArbitrary_55)(a)(arbitrary(__dict_Arbitrary_56));
                })
            };
        };
    };
    var arbBoolean = function (_) {
        return {
            "__superclasses": {}, 
            arbitrary: Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(Test_QuickCheck_LCG.uniform)(function (_1) {
                return Prelude["return"](Test_QuickCheck_LCG.monadGen({}))((_1 * 2) < 1);
            })
        };
    };
    var arbArray = function (__dict_Arbitrary_57) {
        return {
            "__superclasses": {}, 
            arbitrary: Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(arbitrary(arbBoolean({})))(function (_2) {
                return (function (_3) {
                    return _3 ? Prelude["return"](Test_QuickCheck_LCG.monadGen({}))([  ]) : Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(arbitrary(__dict_Arbitrary_57))(function (_1) {
    return (function (_2) {
        return Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(arbitrary(arbArray(__dict_Arbitrary_57)))(function (_1) {
            return Prelude["return"](Test_QuickCheck_LCG.monadGen({}))(Prelude[":"](_2)(_1));
        });
    })(_1);
});
                })(_2);
            })
        };
    };
    var coarbFunction = function (__dict_Arbitrary_52) {
        return function (__dict_CoArbitrary_53) {
            return {
                "__superclasses": {}, 
                coarbitrary: function (f) {
                    return function (gen) {
                        var map = function (_1) {
                            return function (_2) {
                                if (_2.length === 0) {
                                    return [  ];
                                };
                                if (_2.length > 0) {
                                    var _6 = _2.slice(1);
                                    return Prelude[":"](_1(_2[0]))(map(_1)(_6));
                                };
                                throw "Failed pattern match";
                            };
                        };
                        return Prelude[">>="](Test_QuickCheck_LCG.bindGen({}))(arbitrary(arbArray(__dict_Arbitrary_52)))(function (_1) {
                            return coarbitrary(coarbArray(__dict_CoArbitrary_53))(map(f)(_1))(gen);
                        });
                    };
                }
            };
        };
    };
    return {
        Success: Success, 
        Failed: Failed, 
        quickCheck: quickCheck, 
        "quickCheck'": quickCheck$prime, 
        quickCheckPure: quickCheckPure, 
        test: test, 
        repeatable: repeatable, 
        "<?>": $less$qmark$greater, 
        coarbitrary: coarbitrary, 
        arbitrary: arbitrary, 
        showResult: showResult, 
        arbNumber: arbNumber, 
        coarbNumber: coarbNumber, 
        arbBoolean: arbBoolean, 
        coarbBoolean: coarbBoolean, 
        arbFunction: arbFunction, 
        coarbFunction: coarbFunction, 
        arbArray: arbArray, 
        coarbArray: coarbArray, 
        testableResult: testableResult, 
        testableBoolean: testableBoolean, 
        testableFunction: testableFunction
    };
})();
var PS = PS || {};
PS.Control_Monad = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var when = function (__dict_Monad_58) {
        return function (_1) {
            return function (_2) {
                if (_1) {
                    return _2;
                };
                if (!_1) {
                    return Prelude["return"](__dict_Monad_58)({});
                };
                throw "Failed pattern match";
            };
        };
    };
    var unless = function (__dict_Monad_59) {
        return function (_1) {
            return function (_2) {
                if (!_1) {
                    return _2;
                };
                if (_1) {
                    return Prelude["return"](__dict_Monad_59)({});
                };
                throw "Failed pattern match";
            };
        };
    };
    var replicateM = function (__dict_Monad_60) {
        return function (_2) {
            return function (_3) {
                return (function (_4, _5) {
                    if (_4 === 0) {
                        return Prelude["return"](__dict_Monad_60)([  ]);
                    };
                    return Prelude[">>="](__dict_Monad_60["__superclasses"]["Prelude.Bind_1"]({}))(_5)(function (_1) {
                        return (function (_2) {
                            return Prelude[">>="](__dict_Monad_60["__superclasses"]["Prelude.Bind_1"]({}))(replicateM(__dict_Monad_60)(_4 - 1)(_5))(function (_1) {
                                return Prelude["return"](__dict_Monad_60)(Prelude[":"](_2)(_1));
                            });
                        })(_1);
                    });
                })(_2, _3);
            };
        };
    };
    var foldM = function (__dict_Monad_61) {
        return function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.length === 0) {
                        return Prelude["return"](__dict_Monad_61)(_2);
                    };
                    if (_3.length > 0) {
                        var _8 = _3.slice(1);
                        return Prelude[">>="](__dict_Monad_61["__superclasses"]["Prelude.Bind_1"]({}))(_1(_2)(_3[0]))(function (a$prime) {
                            return foldM(__dict_Monad_61)(_1)(a$prime)(_8);
                        });
                    };
                    throw "Failed pattern match";
                };
            };
        };
    };
    return {
        unless: unless, 
        when: when, 
        foldM: foldM, 
        replicateM: replicateM
    };
})();
var PS = PS || {};
PS.Control_Bind = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var $greater$eq$greater = function (__dict_Bind_62) {
        return function (f) {
            return function (g) {
                return function (a) {
                    return Prelude[">>="](__dict_Bind_62)(f(a))(g);
                };
            };
        };
    };
    var $eq$less$less = function (__dict_Bind_63) {
        return function (f) {
            return function (m) {
                return Prelude[">>="](__dict_Bind_63)(m)(f);
            };
        };
    };
    var $less$eq$less = function (__dict_Bind_64) {
        return function (f) {
            return function (g) {
                return function (a) {
                    return $eq$less$less(__dict_Bind_64)(f)(g(a));
                };
            };
        };
    };
    var join = function (__dict_Bind_65) {
        return function (m) {
            return Prelude[">>="](__dict_Bind_65)(m)(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var ifM = function (__dict_Bind_66) {
        return function (cond) {
            return function (t) {
                return function (f) {
                    return Prelude[">>="](__dict_Bind_66)(cond)(function (cond$prime) {
                        return cond$prime ? t : f;
                    });
                };
            };
        };
    };
    return {
        ifM: ifM, 
        join: join, 
        "<=<": $less$eq$less, 
        ">=>": $greater$eq$greater, 
        "=<<": $eq$less$less
    };
})();
var PS = PS || {};
PS.Control_Apply = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var $less$times = function (__dict_Apply_67) {
        return function (a) {
            return function (b) {
                return Prelude["<*>"](__dict_Apply_67)(Prelude["<$>"](__dict_Apply_67["__superclasses"]["Prelude.Functor_0"]({}))(Prelude["const"])(a))(b);
            };
        };
    };
    var $times$greater = function (__dict_Apply_68) {
        return function (a) {
            return function (b) {
                return Prelude["<*>"](__dict_Apply_68)(Prelude["<$>"](__dict_Apply_68["__superclasses"]["Prelude.Functor_0"]({}))(Prelude["const"](Prelude.id(Prelude.categoryArr({}))))(a))(b);
            };
        };
    };
    var lift5 = function (__dict_Apply_69) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return function (e) {
                                return Prelude["<*>"](__dict_Apply_69)(Prelude["<*>"](__dict_Apply_69)(Prelude["<*>"](__dict_Apply_69)(Prelude["<*>"](__dict_Apply_69)(Prelude["<$>"](__dict_Apply_69["__superclasses"]["Prelude.Functor_0"]({}))(f)(a))(b))(c))(d))(e);
                            };
                        };
                    };
                };
            };
        };
    };
    var lift4 = function (__dict_Apply_70) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return Prelude["<*>"](__dict_Apply_70)(Prelude["<*>"](__dict_Apply_70)(Prelude["<*>"](__dict_Apply_70)(Prelude["<$>"](__dict_Apply_70["__superclasses"]["Prelude.Functor_0"]({}))(f)(a))(b))(c))(d);
                        };
                    };
                };
            };
        };
    };
    var lift3 = function (__dict_Apply_71) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return Prelude["<*>"](__dict_Apply_71)(Prelude["<*>"](__dict_Apply_71)(Prelude["<$>"](__dict_Apply_71["__superclasses"]["Prelude.Functor_0"]({}))(f)(a))(b))(c);
                    };
                };
            };
        };
    };
    var lift2 = function (__dict_Apply_72) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return Prelude["<*>"](__dict_Apply_72)(Prelude["<$>"](__dict_Apply_72["__superclasses"]["Prelude.Functor_0"]({}))(f)(a))(b);
                };
            };
        };
    };
    var forever = function (__dict_Apply_73) {
        return function (a) {
            return $times$greater(__dict_Apply_73)(a)(forever(__dict_Apply_73)(a));
        };
    };
    return {
        forever: forever, 
        lift5: lift5, 
        lift4: lift4, 
        lift3: lift3, 
        lift2: lift2, 
        "*>": $times$greater, 
        "<*": $less$times
    };
})();
var PS = PS || {};
PS.Data_Foldable = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Apply = PS.Control_Apply;
    var Data_Monoid = PS.Data_Monoid;
    var Data_Maybe = PS.Data_Maybe;
    function foldr(dict) {
        return dict["foldr"];
    };
    function foldl(dict) {
        return dict["foldl"];
    };
    function foldMap(dict) {
        return dict["foldMap"];
    };
    function foldrArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = xs.length - 1; i >= 0; --i) {        acc = f(xs[i])(acc);      }      return acc;    }  }};
    function foldlArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = 0, len = xs.length; i < len; ++i) {        acc = f(acc)(xs[i]);      }      return acc;    }  }};
    var traverse_ = function (__dict_Functor_74) {
        return function (__dict_Applicative_75) {
            return function (__dict_Foldable_76) {
                return function (f) {
                    return foldr(__dict_Foldable_76)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Apply["*>"](__dict_Applicative_75["__superclasses"]["Prelude.Apply_0"]({})))(f))(Prelude.pure(__dict_Applicative_75)({}));
                };
            };
        };
    };
    var sum = function (__dict_Foldable_77) {
        return foldl(__dict_Foldable_77)(Prelude["+"](Prelude.numNumber({})))(0);
    };
    var sequence_ = function (__dict_Functor_78) {
        return function (__dict_Applicative_79) {
            return function (__dict_Foldable_80) {
                return traverse_(__dict_Functor_78)(__dict_Applicative_79)(__dict_Foldable_80)(Prelude.id(Prelude.categoryArr({})));
            };
        };
    };
    var product = function (__dict_Foldable_81) {
        return foldl(__dict_Foldable_81)(Prelude["*"](Prelude.numNumber({})))(1);
    };
    var or = function (__dict_Foldable_82) {
        return foldl(__dict_Foldable_82)(Prelude["||"](Prelude.boolLikeBoolean({})))(false);
    };
    var mconcat = function (__dict_Foldable_83) {
        return function (__dict_Monoid_84) {
            return foldl(__dict_Foldable_83)(Prelude["<>"](__dict_Monoid_84["__superclasses"]["Prelude.Semigroup_0"]({})))(Data_Monoid.mempty(__dict_Monoid_84));
        };
    };
    var for_ = function (__dict_Functor_85) {
        return function (__dict_Applicative_86) {
            return function (__dict_Foldable_87) {
                return Prelude.flip(traverse_(__dict_Functor_85)(__dict_Applicative_86)(__dict_Foldable_87));
            };
        };
    };
    var foldableTuple = function (_) {
        return {
            "__superclasses": {}, 
            foldr: function (_1) {
                return function (_2) {
                    return function (_3) {
                        return _1(_3.values[1])(_2);
                    };
                };
            }, 
            foldl: function (_1) {
                return function (_2) {
                    return function (_3) {
                        return _1(_2)(_3.values[1]);
                    };
                };
            }, 
            foldMap: function (__dict_Monoid_88) {
                return function (_1) {
                    return function (_2) {
                        return _1(_2.values[1]);
                    };
                };
            }
        };
    };
    var foldableRef = function (_) {
        return {
            "__superclasses": {}, 
            foldr: function (_1) {
                return function (_2) {
                    return function (_3) {
                        return _1(_3.values[0])(_2);
                    };
                };
            }, 
            foldl: function (_1) {
                return function (_2) {
                    return function (_3) {
                        return _1(_2)(_3.values[0]);
                    };
                };
            }, 
            foldMap: function (__dict_Monoid_89) {
                return function (_1) {
                    return function (_2) {
                        return _1(_2.values[0]);
                    };
                };
            }
        };
    };
    var foldableMaybe = function (_) {
        return {
            "__superclasses": {}, 
            foldr: function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.ctor === "Data.Maybe.Nothing") {
                            return _2;
                        };
                        if (_3.ctor === "Data.Maybe.Just") {
                            return _1(_3.values[0])(_2);
                        };
                        throw "Failed pattern match";
                    };
                };
            }, 
            foldl: function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.ctor === "Data.Maybe.Nothing") {
                            return _2;
                        };
                        if (_3.ctor === "Data.Maybe.Just") {
                            return _1(_2)(_3.values[0]);
                        };
                        throw "Failed pattern match";
                    };
                };
            }, 
            foldMap: function (__dict_Monoid_90) {
                return function (_1) {
                    return function (_2) {
                        if (_2.ctor === "Data.Maybe.Nothing") {
                            return Data_Monoid.mempty(__dict_Monoid_90);
                        };
                        if (_2.ctor === "Data.Maybe.Just") {
                            return _1(_2.values[0]);
                        };
                        throw "Failed pattern match";
                    };
                };
            }
        };
    };
    var foldableEither = function (_) {
        return {
            "__superclasses": {}, 
            foldr: function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.ctor === "Data.Either.Left") {
                            return _2;
                        };
                        if (_3.ctor === "Data.Either.Right") {
                            return _1(_3.values[0])(_2);
                        };
                        throw "Failed pattern match";
                    };
                };
            }, 
            foldl: function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.ctor === "Data.Either.Left") {
                            return _2;
                        };
                        if (_3.ctor === "Data.Either.Right") {
                            return _1(_2)(_3.values[0]);
                        };
                        throw "Failed pattern match";
                    };
                };
            }, 
            foldMap: function (__dict_Monoid_91) {
                return function (_1) {
                    return function (_2) {
                        if (_2.ctor === "Data.Either.Left") {
                            return Data_Monoid.mempty(__dict_Monoid_91);
                        };
                        if (_2.ctor === "Data.Either.Right") {
                            return _1(_2.values[0]);
                        };
                        throw "Failed pattern match";
                    };
                };
            }
        };
    };
    var foldableArray = function (_) {
        return {
            "__superclasses": {}, 
            foldr: function (f) {
                return function (z) {
                    return function (xs) {
                        return foldrArray(f)(z)(xs);
                    };
                };
            }, 
            foldl: function (f) {
                return function (z) {
                    return function (xs) {
                        return foldlArray(f)(z)(xs);
                    };
                };
            }, 
            foldMap: function (__dict_Monoid_92) {
                return function (f) {
                    return function (xs) {
                        return foldr(foldableArray({}))(function (x) {
                            return function (acc) {
                                return Prelude["<>"](__dict_Monoid_92["__superclasses"]["Prelude.Semigroup_0"]({}))(f(x))(acc);
                            };
                        })(Data_Monoid.mempty(__dict_Monoid_92))(xs);
                    };
                };
            }
        };
    };
    var fold = function (__dict_Foldable_93) {
        return function (__dict_Monoid_94) {
            return foldMap(__dict_Foldable_93)(__dict_Monoid_94)(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var find = function (__dict_Foldable_95) {
        return function (p) {
            return function (f) {
                return (function (_1) {
                    if (_1.length > 0) {
                        return Data_Maybe.Just(_1[0]);
                    };
                    if (_1.length === 0) {
                        return Data_Maybe.Nothing;
                    };
                    throw "Failed pattern match";
                })(foldMap(__dict_Foldable_95)(Data_Monoid.monoidArray({}))(function (x) {
                    return p(x) ? [ x ] : [  ];
                })(f));
            };
        };
    };
    var any = function (__dict_Foldable_96) {
        return function (p) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(or(foldableArray({})))(foldMap(__dict_Foldable_96)(Data_Monoid.monoidArray({}))(function (x) {
                return [ p(x) ];
            }));
        };
    };
    var elem = function (__dict_Eq_97) {
        return function (__dict_Foldable_98) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(any(__dict_Foldable_98))(Prelude["=="](__dict_Eq_97));
        };
    };
    var notElem = function (__dict_Eq_99) {
        return function (__dict_Foldable_100) {
            return function (x) {
                return Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.not(Prelude.boolLikeBoolean({})))(elem(__dict_Eq_99)(__dict_Foldable_100)(x));
            };
        };
    };
    var and = function (__dict_Foldable_101) {
        return foldl(__dict_Foldable_101)(Prelude["&&"](Prelude.boolLikeBoolean({})))(true);
    };
    var all = function (__dict_Foldable_102) {
        return function (p) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(and(foldableArray({})))(foldMap(__dict_Foldable_102)(Data_Monoid.monoidArray({}))(function (x) {
                return [ p(x) ];
            }));
        };
    };
    return {
        foldlArray: foldlArray, 
        foldrArray: foldrArray, 
        find: find, 
        notElem: notElem, 
        elem: elem, 
        product: product, 
        sum: sum, 
        all: all, 
        any: any, 
        or: or, 
        and: and, 
        mconcat: mconcat, 
        "sequence_": sequence_, 
        "for_": for_, 
        "traverse_": traverse_, 
        fold: fold, 
        foldMap: foldMap, 
        foldl: foldl, 
        foldr: foldr, 
        foldableArray: foldableArray, 
        foldableEither: foldableEither, 
        foldableMaybe: foldableMaybe, 
        foldableRef: foldableRef, 
        foldableTuple: foldableTuple
    };
})();
var PS = PS || {};
PS.Data_Traversable = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Eq = PS.Data_Eq;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Either = PS.Data_Either;
    var Data_Array = PS.Data_Array;
    function traverse(dict) {
        return dict["traverse"];
    };
    function sequence(dict) {
        return dict["sequence"];
    };
    var traversableTuple = function (_) {
        return {
            "__superclasses": {}, 
            traverse: function (__dict_Functor_105) {
                return function (__dict_Applicative_106) {
                    return function (_1) {
                        return function (_2) {
                            return Prelude["<$>"](__dict_Functor_105)(Data_Tuple.Tuple(_2.values[0]))(_1(_2.values[1]));
                        };
                    };
                };
            }, 
            sequence: function (__dict_Functor_107) {
                return function (__dict_Applicative_108) {
                    return function (_1) {
                        return Prelude["<$>"](__dict_Functor_107)(Data_Tuple.Tuple(_1.values[0]))(_1.values[1]);
                    };
                };
            }
        };
    };
    var traversableRef = function (_) {
        return {
            "__superclasses": {}, 
            traverse: function (__dict_Functor_109) {
                return function (__dict_Applicative_110) {
                    return function (_1) {
                        return function (_2) {
                            return Prelude["<$>"](__dict_Functor_109)(Data_Eq.Ref)(_1(_2.values[0]));
                        };
                    };
                };
            }, 
            sequence: function (__dict_Functor_111) {
                return function (__dict_Applicative_112) {
                    return function (_1) {
                        return Prelude["<$>"](__dict_Functor_111)(Data_Eq.Ref)(_1.values[0]);
                    };
                };
            }
        };
    };
    var traversableMaybe = function (_) {
        return {
            "__superclasses": {}, 
            traverse: function (__dict_Functor_113) {
                return function (__dict_Applicative_114) {
                    return function (_1) {
                        return function (_2) {
                            if (_2.ctor === "Data.Maybe.Nothing") {
                                return Prelude.pure(__dict_Applicative_114)(Data_Maybe.Nothing);
                            };
                            if (_2.ctor === "Data.Maybe.Just") {
                                return Prelude["<$>"](__dict_Functor_113)(Data_Maybe.Just)(_1(_2.values[0]));
                            };
                            throw "Failed pattern match";
                        };
                    };
                };
            }, 
            sequence: function (__dict_Functor_115) {
                return function (__dict_Applicative_116) {
                    return function (_1) {
                        if (_1.ctor === "Data.Maybe.Nothing") {
                            return Prelude.pure(__dict_Applicative_116)(Data_Maybe.Nothing);
                        };
                        if (_1.ctor === "Data.Maybe.Just") {
                            return Prelude["<$>"](__dict_Functor_115)(Data_Maybe.Just)(_1.values[0]);
                        };
                        throw "Failed pattern match";
                    };
                };
            }
        };
    };
    var traversableEither = function (_) {
        return {
            "__superclasses": {}, 
            traverse: function (__dict_Functor_117) {
                return function (__dict_Applicative_118) {
                    return function (_1) {
                        return function (_2) {
                            if (_2.ctor === "Data.Either.Left") {
                                return Prelude.pure(__dict_Applicative_118)(Data_Either.Left(_2.values[0]));
                            };
                            if (_2.ctor === "Data.Either.Right") {
                                return Prelude["<$>"](__dict_Functor_117)(Data_Either.Right)(_1(_2.values[0]));
                            };
                            throw "Failed pattern match";
                        };
                    };
                };
            }, 
            sequence: function (__dict_Functor_119) {
                return function (__dict_Applicative_120) {
                    return function (_1) {
                        if (_1.ctor === "Data.Either.Left") {
                            return Prelude.pure(__dict_Applicative_120)(Data_Either.Left(_1.values[0]));
                        };
                        if (_1.ctor === "Data.Either.Right") {
                            return Prelude["<$>"](__dict_Functor_119)(Data_Either.Right)(_1.values[0]);
                        };
                        throw "Failed pattern match";
                    };
                };
            }
        };
    };
    var traversableArray = function (_) {
        return {
            "__superclasses": {}, 
            traverse: function (__dict_Functor_121) {
                return function (__dict_Applicative_122) {
                    return function (_1) {
                        return function (_2) {
                            if (_2.length === 0) {
                                return Prelude.pure(__dict_Applicative_122)([  ]);
                            };
                            if (_2.length > 0) {
                                var _6 = _2.slice(1);
                                return Prelude["<*>"](__dict_Applicative_122["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_121)(Prelude[":"])(_1(_2[0])))(traverse(traversableArray({}))(__dict_Functor_121)(__dict_Applicative_122)(_1)(_6));
                            };
                            throw "Failed pattern match";
                        };
                    };
                };
            }, 
            sequence: function (__dict_Functor_123) {
                return function (__dict_Applicative_124) {
                    return function (_1) {
                        if (_1.length === 0) {
                            return Prelude.pure(__dict_Applicative_124)([  ]);
                        };
                        if (_1.length > 0) {
                            var _4 = _1.slice(1);
                            return Prelude["<*>"](__dict_Applicative_124["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_123)(Prelude[":"])(_1[0]))(sequence(traversableArray({}))(__dict_Functor_123)(__dict_Applicative_124)(_4));
                        };
                        throw "Failed pattern match";
                    };
                };
            }
        };
    };
    var zipWithA = function (__dict_Functor_103) {
        return function (__dict_Applicative_104) {
            return function (f) {
                return function (xs) {
                    return function (ys) {
                        return sequence(traversableArray({}))(__dict_Functor_103)(__dict_Applicative_104)(Data_Array.zipWith(f)(xs)(ys));
                    };
                };
            };
        };
    };
    var $$for = function (__dict_Functor_125) {
        return function (__dict_Applicative_126) {
            return function (__dict_Traversable_127) {
                return function (x) {
                    return function (f) {
                        return traverse(__dict_Traversable_127)(__dict_Functor_125)(__dict_Applicative_126)(f)(x);
                    };
                };
            };
        };
    };
    return {
        zipWithA: zipWithA, 
        "for": $$for, 
        sequence: sequence, 
        traverse: traverse, 
        traversableArray: traversableArray, 
        traversableEither: traversableEither, 
        traversableRef: traversableRef, 
        traversableMaybe: traversableMaybe, 
        traversableTuple: traversableTuple
    };
})();
var PS = PS || {};
PS.Data_Foreign = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    var Data_Traversable = PS.Data_Traversable;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Array = PS.Data_Array;
    var Data_Maybe = PS.Data_Maybe;
    var ForeignParser = function (value0) {
        return {
            ctor: "Data.Foreign.ForeignParser", 
            values: [ value0 ]
        };
    };
    function fromString (str) {   try {     return Data_Either.Right(JSON.parse(str));   } catch (e) {     return Data_Either.Left(e.toString());   } };
    function readPrimType (typeName) {   return function (value) {     if (toString.call(value) == '[object ' + typeName + ']') {       return Data_Either.Right(value);    }     return Data_Either.Left('Value is not a ' + typeName + '');   }; };
    function readMaybeImpl (value) {   return value === undefined || value === null ? Data_Maybe.Nothing : Data_Maybe.Just(value); };
    function readPropImpl (k) {   return function (obj) {     return Data_Either.Right(obj[k]);  }; };
    var showForeignImpl = JSON.stringify;;
    function read(dict) {
        return dict["read"];
    };
    var showForeign = function (_) {
        return {
            "__superclasses": {}, 
            show: showForeignImpl
        };
    };
    var readString = function (_) {
        return {
            "__superclasses": {}, 
            read: ForeignParser(readPrimType("String"))
        };
    };
    var readNumber = function (_) {
        return {
            "__superclasses": {}, 
            read: ForeignParser(readPrimType("Number"))
        };
    };
    var readBoolean = function (_) {
        return {
            "__superclasses": {}, 
            read: ForeignParser(readPrimType("Boolean"))
        };
    };
    var parseForeign = function (_1) {
        return function (_2) {
            return _1.values[0](_2);
        };
    };
    var parseJSON = function (__dict_ReadForeign_128) {
        return function (json) {
            return Prelude[">>="](Data_Either.bindEither({}))(fromString(json))(parseForeign(read(__dict_ReadForeign_128)));
        };
    };
    var functorForeignParser = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": function (_1) {
                return function (_2) {
                    return ForeignParser(function (x) {
                        return Prelude["<$>"](Data_Either.functorEither({}))(_1)(_2.values[0](x));
                    });
                };
            }
        };
    };
    var applyForeignParser = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorForeignParser({});
                }
            }, 
            "<*>": function (_1) {
                return function (_2) {
                    return (function (_3, _4) {
                        return ForeignParser(function (x) {
                            return (function (_1) {
                                if (_1.ctor === "Data.Either.Left") {
                                    return Data_Either.Left(_1.values[0]);
                                };
                                if (_1.ctor === "Data.Either.Right") {
                                    return Prelude["<$>"](Data_Either.functorEither({}))(_1.values[0])(_4.values[0](x));
                                };
                                throw "Failed pattern match";
                            })(_3.values[0](x));
                        });
                    })(_1, _2);
                };
            }
        };
    };
    var bindForeignParser = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyForeignParser({});
                }
            }, 
            ">>=": function (_1) {
                return function (_2) {
                    return (function (_3, _4) {
                        return ForeignParser(function (x) {
                            return (function (_1) {
                                if (_1.ctor === "Data.Either.Left") {
                                    return Data_Either.Left(_1.values[0]);
                                };
                                if (_1.ctor === "Data.Either.Right") {
                                    return parseForeign(_4(_1.values[0]))(x);
                                };
                                throw "Failed pattern match";
                            })(_3.values[0](x));
                        });
                    })(_1, _2);
                };
            }
        };
    };
    var prop = function (__dict_ReadForeign_129) {
        return function (p) {
            return Prelude[">>="](bindForeignParser({}))(ForeignParser(function (x) {
                return readPropImpl(p)(x);
            }))(function (x) {
                return ForeignParser(function (_) {
                    return (function (_1) {
                        if (_1.ctor === "Data.Either.Right") {
                            return Data_Either.Right(_1.values[0]);
                        };
                        if (_1.ctor === "Data.Either.Left") {
                            return Data_Either.Left("Error reading property '" + p + "':\n" + _1.values[0]);
                        };
                        throw "Failed pattern match";
                    })(parseForeign(read(__dict_ReadForeign_129))(x));
                });
            });
        };
    };
    var readArray = function (__dict_ReadForeign_130) {
        return {
            "__superclasses": {}, 
            read: (function () {
                var arrayItem = function (_1) {
                    return (function (_2) {
                        return (function (_1) {
                            if (_1.ctor === "Data.Either.Right") {
                                return Data_Either.Right(_1.values[0]);
                            };
                            if (_1.ctor === "Data.Either.Left") {
                                return Data_Either.Left("Error reading item at index " + Prelude.show(Prelude.showNumber({}))(_2.values[0]) + ":\n" + _1.values[0]);
                            };
                            throw "Failed pattern match";
                        })(parseForeign(read(__dict_ReadForeign_130))(_2.values[1]));
                    })(_1);
                };
                return Prelude[">>="](bindForeignParser({}))(ForeignParser(readPrimType("Array")))(function (xs) {
                    return ForeignParser(function (_) {
                        return Data_Traversable.traverse(Data_Traversable.traversableArray({}))(Data_Either.functorEither({}))(Data_Either.applicativeEither({}))(arrayItem)(Data_Tuple.zip(Data_Array.range(0)(Data_Array.length(xs)))(xs));
                    });
                });
            })()
        };
    };
    var readMaybe = function (__dict_ReadForeign_131) {
        return {
            "__superclasses": {}, 
            read: Prelude[">>="](bindForeignParser({}))(ForeignParser(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Either.Right)(readMaybeImpl)))(function (x) {
                return ForeignParser(function (_) {
                    if (x.ctor === "Data.Maybe.Just") {
                        return Prelude[">>="](Data_Either.bindEither({}))(parseForeign(read(__dict_ReadForeign_131))(x.values[0]))(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude["return"](Data_Either.monadEither({})))(Data_Maybe.Just));
                    };
                    if (x.ctor === "Data.Maybe.Nothing") {
                        return Prelude["return"](Data_Either.monadEither({}))(Data_Maybe.Nothing);
                    };
                    throw "Failed pattern match";
                });
            })
        };
    };
    var applicativeForeignParser = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyForeignParser({});
                }
            }, 
            pure: function (x) {
                return ForeignParser(function (_) {
                    return Data_Either.Right(x);
                });
            }
        };
    };
    var monadForeignParser = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeForeignParser({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindForeignParser({});
                }
            }
        };
    };
    return {
        ForeignParser: ForeignParser, 
        prop: prop, 
        read: read, 
        parseJSON: parseJSON, 
        parseForeign: parseForeign, 
        showForeign: showForeign, 
        functorForeignParser: functorForeignParser, 
        bindForeignParser: bindForeignParser, 
        applyForeignParser: applyForeignParser, 
        applicativeForeignParser: applicativeForeignParser, 
        monadForeignParser: monadForeignParser, 
        readString: readString, 
        readNumber: readNumber, 
        readBoolean: readBoolean, 
        readArray: readArray, 
        readMaybe: readMaybe
    };
})();
PS.Main.main();