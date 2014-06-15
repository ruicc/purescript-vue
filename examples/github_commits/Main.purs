module Main where

import Vue
import Language.JavaScript.Library.FFI
import Control.Monad.Eff
import Data.String (indexOf, take)
import Data.String.Regex (regex, replace)

truncate :: String -> String
truncate v = let
    newline = indexOf v "\\n"
    in if newline > -1
        then take newline v
        else v

formatDate :: String -> String
formatDate v = replace (regex "/T|Z/" "g") " " v

foreign import fetchData
    "function fetchData(self) {\
    \    return function() {\
    \        var xhr = new XMLHttpRequest();\
    \        xhr.open('GET', apiUrl(self.branch));\
    \        xhr.onload = function() {\
    \            self.commits = JSON.parse(xhr.responseText);\
    \        };\
    \        xhr.send();\
    \    };\
    \}" :: forall e. Self -> Eff e {}

apiUrl :: String -> String
apiUrl v = "https://api.github.com/repos/yyx990803/vue/commits?per_page=3&sha=" ++ v

watch :: forall e a. String -> (Self -> Eff e {}) -> (Self -> Eff (method :: Method | e) {})
watch key eff = \self -> self |> "$watch" $ { arg1: key, arg2: (eff self) }

main = vue
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
