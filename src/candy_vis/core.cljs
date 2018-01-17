(ns ^:figwheel-always candy-vis.core
  (:require [candy-vis.state :as st]
            [candy-vis.solve :as sol]
            [candy-vis.views.general :as gn]
            [reagent.core :as r :refer [atom]]
            [candy-vis.draw :as drw]))

(enable-console-print!)

(r/render [gn/header] (js/document.getElementById "header"))

 (defn tick [state]
   (drw/draw-state state)
   (swap! state merge (sol/next-step @state))
   (if (:finished @state)
     "done"
     (js/setTimeout (fn [] (tick state)) 500)))

(tick st/app-state)

;; GAME PLAN
;; First, solve a hard-coded setup. Black blocks
;; Take input (#children, each grade) and solve

;; NEXT??
;; multiple algorithms
;; more problems?
