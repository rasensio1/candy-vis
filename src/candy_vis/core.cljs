(ns ^:figwheel-always candy-vis.core
  (:require [candy-vis.state :as st]
            [candy-vis.solve :as sol]
            [candy-vis.views :as vw]
            [reagent.core :as r :refer [atom]]
            [candy-vis.draw :as drw]))

(enable-console-print!)

(defn mkmp [rnk cnd]
  {:rank rnk :candies cnd})



(r/render [vw/header] (js/document.getElementById "header"))
(r/render [vw/rank-form] (js/document.getElementById "body"))

 (defn tick [state]
   (let [dst (mapv mkmp (:ranks @state) (:candies @state))]
     (swap! state assoc :dataset dst))
   (drw/draw-state state)
   (swap! state merge (sol/next-step @state))
   (if (:finished @state)
     "done"
     (js/setTimeout (fn [] (tick state)) 500)))

(tick st/app-state)

