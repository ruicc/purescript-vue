module Main where

import Control.Monad.Eff

foreign import data Vue :: *

foreign import data Filter :: *
foreign import data Method :: *

foreign import vue
    "function vue(opt) {\
    \    return function() {\
    \        if (opt.dat !== undefined) {\
    \            opt.data = opt.dat;\
    \            delete opt.dat;\
    \        }\
    \        var v = new Vue(opt);\
    \        var f = v.$options.ready;\
    \        v.$options.ready = f(v);\
    \        for (var m in v.$options.methods) {\
    \            var f = v.$options.methods[m];\
    \            v.$options.methods[m] = f(v);\
    \        }\
    \        return v;\
    \    }\
    \}" :: forall e r. { el :: String | r } -> Eff e Vue

--foreign import created
--    "function created() {\
--    \    this.$watch('branch', function() {\
--    \        this.fetchData();\
--    \    })\
--    \}" :: Method

--created :: forall e a. Eff e a
--created = watch "branch" \ vue -> fetchData



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
    "function fetchData(vue) {\
    \    return function() {\
    \        var apiUrl = 'https://api.github.com/repos/yyx990803/vue/commits?per_page=3&sha=';\
    \        var xhr = new XMLHttpRequest(),\
    \            self = this;\
    \        xhr.open('GET', apiUrl + self.branch);\
    \        xhr.onload = function() {\
    \            self.commits = JSON.parse(xhr.responseText);\
    \        };\
    \        xhr.send();\
    \    }\
    \}" :: forall e. Vue -> Eff e {}

--foreign import setMethod
--    "function setMethod(vue) {\
--    \    return function(name) {\
--    \        return function(method) {\
--    \            return function() {\
--    \                vue[name] = method;\
--    \                return vue;\
--    \            };\
--    \        };\
--    \    };\
--    \}" :: forall e. Vue -> String -> Method -> Eff e Vue


-- TODO: methodが呼び出せるMethodコンテキストEffで作れそうじゃね？？？
-- convert function to method.
foreign import method
    "function method() {\
    \    var self = this;\
    \    return function() {\
    \        return self;\
    \    };\
    \}" :: forall e a. Eff e Vue
--    \}" :: forall r a. (forall e'. Vue -> Eff e' a) -> Eff (method :: Method | r) a


-- 一般的なメソッド呼び出し難しい(Tupleが要る)
--foreign import callM
--function callM(vue) {
--    function(name) {
--        return vue[name]();
--    }
--}

foreign import watch
    "function watch(vue) {\
    \    return function watch(key) {\
    \        return function(eff) {\
    \            return function() {\
    \                return vue.$watch(key, eff(vue));\
    \            };\
    \        };\
    \    };\
    \}" :: forall e a. Vue -> String -> (Vue -> Eff e {}) -> Eff e a

main = do
    vue
        {
            el: "#demo",
            dat: {
                branch: "master"
            },
            ready: \vue -> watch vue "branch" fetchData,
            filters: {
                truncate: truncate,
                formatDate: formatDate
            },
            methods: {
                fetchData: fetchData
            }
        }
