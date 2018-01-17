(ns ^:figwheel-always candy-vis.core
  (:require [candy-vis.state :as st]
            [candy-vis.solve :as sol]
            [candy-vis.views :as vw]
            [reagent.core :as r :refer [atom]]
            [candy-vis.draw :as drw]))

(enable-console-print!)

(r/render [vw/header] (js/document.getElementById "header"))

 (defn tick [state]
   (drw/draw-state state)
   (swap! state merge (sol/next-step @state))
   (if (:finished @state)
     "done"
     (js/setTimeout (fn [] (tick state)) 500)))

(tick st/app-state)

