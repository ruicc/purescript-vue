module Main where

import Control.Monad.Eff

foreign import data Vue :: *
foreign import data This :: *

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
    \}" :: forall e. This -> Eff e {}


-- TODO: forall r a. Eff (method :: Method | r) a
foreign import method
    "var method = function(f) {\
    \    return function() {\
    \        var self = this;\
    \        return f(self)();\
    \    };\
    \}" :: forall e' a. (forall r. This -> Eff (method :: Method | r) a) -> Eff e' a

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
    \}" :: forall e e' e'' a.  String -> String -> (This -> Eff e' {}) -> (This -> Eff e'' a)

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
--                fetchData: fetchData
            }
        }
