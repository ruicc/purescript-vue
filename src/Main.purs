module Main where

import Control.Monad.Eff
import Debug.Trace

main = vue $ def { dat = { message: "Can you hear me?" } }

foreign import vue
    "function vue(opt) {\
    \    return function() {\
    \        if (opt.dat !== undefined) {\
    \            opt.data = opt.dat;\
    \            delete opt.dat;\
    \        }\
    \        new Vue(opt);\
    \    }\
    \}" :: forall e. VueOpt -> Eff e {}

type VueOpt = { el :: String, dat :: { message :: String } }

def :: VueOpt
def = { el: "#demo" , dat: { message: "Hello Vue.js!" } }
