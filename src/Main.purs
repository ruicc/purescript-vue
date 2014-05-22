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

-- TODO: need to factor out
foreign import callM
    "function callM(method) {\
    \    return function(key) {\
    \        return function(eff) {\
    \           return function(self) {\
    \               return function() {\
    \                   return self[method](key, eff(self));\
    \               };\
    \           };\
    \       };\
    \    };\
    \}" :: forall e a. String -> String -> (Self -> Eff e {}) -> (Self -> Eff (method :: Method | e) {})

watch = callM "$watch"

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
