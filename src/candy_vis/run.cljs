(ns candy-vis.run
  (:require [candy-vis.solve :as sol]
            [candy-vis.swappers :as swp]))

(defn app-speed [setting]
  ({:medium 400
   :fast 100
   :fastest 5} setting))

(defn tick [state]
  (swp/algo-step state (sol/next-step @state))
  (if (:finished @state)
    "done"
    (js/setTimeout (fn [] (tick state)) (app-speed (:speed @state)))))
