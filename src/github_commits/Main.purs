module Main where

import Control.Monad.Eff

foreign import data Vue :: *
foreign import data Self :: *

foreign import data Filter :: *
foreign import data Method :: !

foreign import vue
    "function vue(opt) {\
    \    return function() {\
    \        if (opt.dat !== undefined) {\
    \            opt.data = opt.dat;\
    \            delete opt.dat;\
    \        }\
    \        return new Vue(opt);\
    \    }\
    \}" :: forall e r. { el :: String | r } -> Eff e Vue


foreign import truncate
    "function truncate(v) {\
    \    var newline = v.indexOf('\\n');\
    \    return newline > -1 ? v.slice(0, newline) : v;\
    \}" :: Filter

foreign import formatDate
    "function formatDate(v) {\
    \    return v.replace(/T|Z/g, ' ');\
    \}" :: Filter

foreign import fetchData
    "function fetchData(self) {\
    \    return function() {\
    \        var apiUrl = 'https://api.github.com/repos/yyx990803/vue/commits?per_page=3&sha=';\
    \        var xhr = new XMLHttpRequest();\
    \        xhr.open('GET', apiUrl + self.branch);\
    \        xhr.onload = function() {\
    \            self.commits = JSON.parse(xhr.responseText);\
    \        };\
    \        xhr.send();\
    \    };\
    \}" :: forall e. Self -> Eff e {}

-- `method` takes a Method effect, and makes a method by feeding the effect with the special value `this`
foreign import method
    "function method(f) {\
    \    return function() {\
    \        var self = this;\
    \        return f(self)();\
    \    };\
    \}" :: forall r a. (Self -> Eff (method :: Method | r) a) -> Eff r a

-- method call; 3rd arg should be { arg1 :: a, arg2 :: b, ... }
foreign import call
    "function call(obj) {\
    \    return function(methodName) {\
    \        return function(args) {\
    \            return function() {\
    \                return obj[methodName].apply(obj, rec2arr(args));\
    \            };\
    \        };\
    \    };\
    \    function rec2arr(rec) {\
    \        var arr = [];\
    \        for (var i = 1; i < 100; ++i) {\
    \            var key = 'arg' + i;\
    \            if (rec[key] === undefined) {\
    \                break;\
    \            } else {\
    \                arr.push(rec[key]);\
    \            }\
    \        }\
    \        return arr;\
    \    }\
    \}" :: forall object arg r e a. object -> String -> r ->  Eff e a

(|>) = call
infixr 1 |>

watch :: forall e a. String -> (Self -> Eff e {}) -> (Self -> Eff (method :: Method | e) {})
watch key eff = \self -> self |> "$watch" $ { arg1: key, arg2: (eff self) }

main = do
    vue
        {
            el: "#demo",
            dat: {
                branch: "master"
            },
            created: method (watch "branch" fetchData),
            filters: {
                truncate: truncate,
                formatDate: formatDate
            },
            methods: {
                fetchData: method fetchData
            }
        }
