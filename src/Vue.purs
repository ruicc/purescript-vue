module Vue 
 ( Vue(..)
 , vue
 ) where

import Control.Monad.Eff

-- Vue Object.
foreign import data Vue :: *

-- Use `dat` instead of `data` due to reserved words.
foreign import vue
    "function vue(opt) {\
    \   return function() {\
    \       if (opt.dat !== undefined) {\
    \           opt.data = opt.dat;\
    \           delete opt.dat;\
    \       }\
    \       return new Vue(opt);\
    \   }\
    \}" :: forall e r s. { el :: String | r } -> Eff e Vue
