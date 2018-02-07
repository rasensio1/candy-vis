(ns candy-vis.run
  (:require [candy-vis.solve :as sol]))

(defn tick [state]
  (swap! state merge (sol/next-step @state))
  (if (:finished @state)
    "done"
    (js/setTimeout (fn [] (tick state)) 300)))
