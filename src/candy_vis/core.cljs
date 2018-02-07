(ns ^:figwheel-always candy-vis.core
  (:require [candy-vis.state :as st]
            [candy-vis.solve :as sol]
            [candy-vis.views :as vw]
            [reagent.core :as r :refer [atom]]
            [candy-vis.draw :as drw]))

(enable-console-print!)

(defn mkmp [rnk cnd]
  {:rank rnk :candies cnd})

(defonce app-state (r/atom st/initial-state))


(r/render [vw/header] (js/document.getElementById "header"))
(r/render [vw/rank-form app-state] (js/document.getElementById "body"))
(drw/draw-state app-state)

(defn tick [state]
  (swap! state merge (sol/next-step @state))
  (if (:finished @state)
    "done"
    (js/setTimeout (fn [] (tick state)) 500)))

(tick app-state)

;; TODO
;; wait to start until button is clicked
;; add "reset-state" button
;; move x-labels to display ranks to bottom
;; Add random kid button
