module Main where

import Control.Monad.Eff

main = vue
    {
        el: "#demo",
        dat: { message: "Hello Vue.js!" }
    }

foreign import data Vue :: *

foreign import vue
    "function vue(opt) {\
    \    return function() {\
    \        if (opt.dat !== undefined) {\
    \            opt.data = opt.dat;\
    \            delete opt.dat;\
    \        }\
    \        return new Vue(opt);\
    \    }\
    \}" :: forall e r s. { el :: String | r } -> Eff e Vue
