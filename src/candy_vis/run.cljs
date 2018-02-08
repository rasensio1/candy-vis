(ns candy-vis.run
  (:require [candy-vis.solve :as sol]
            [candy-vis.swappers :as swp]))

(defn speed-for
  "Maps arbitrary 'speed' settings to
  the millisecond timeout for the `tick` function"
  [num]
  (get {3 1
        2 50
        1 200} num))

(defn tick [state]
  (swp/algo-step state (sol/next-step @state))
  (if (:finished @state)
    "done"
    (js/setTimeout #(tick state) (speed-for (:speed @state)))))

(defn run-viz [state]
  (swp/unfinish state)
  (tick state))

