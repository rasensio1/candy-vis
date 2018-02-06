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

   ;; updates the ":dataset" attr for rid3
   (let [dst (mapv mkmp (:ranks @state) (:candies @state))]
     (swap! state assoc :dataset dst))

   (if (:finished @state)
     "done"
     (js/setTimeout (fn [] (tick state)) 500)))

(tick app-state)

;; TODO
;; Add x-labels to display ranks
;; Make n-children dynamic with button
;;  - add (with rank)
;;  - remove last child

