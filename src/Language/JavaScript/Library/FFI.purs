module Language.JavaScript.Library.FFI
 ( Self(..)
 , Method(..)
 , method
 , (|>)
 ) where

import Control.Monad.Eff

foreign import data Self :: *

foreign import data Method :: !

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

foreign import property
    "function property(obj) {\
    \  return function(name) {\
    \    return obj.name;\
    \  }\
    \}" :: forall object arg r e a. object -> String -> r ->  Eff e a
