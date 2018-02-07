(ns candy-vis.run
  (:require [candy-vis.solve :as sol]
            [candy-vis.swappers :as swp]))

(defn tick [state]
  (swp/algo-step state (sol/next-step @state))
  (if (:finished @state)
    "done"
    (js/setTimeout (fn [] (tick state)) (:speed @state))))
