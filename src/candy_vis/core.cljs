(ns ^:figwheel-always candy-vis.core
  (:require [candy-vis.state :as st]
            [candy-vis.solve :as sol]
            [candy-vis.draw :as drw]))

(enable-console-print!)


 (defn tick [state]
   (drw/draw-state state)
   (swap! state merge (sol/next-step @state))
   (js-debugger)
   (if (:finished @state)
     (println "done")
     (js/setTimeout (fn [] (tick state)) 500)))

(tick st/app-state)

;; GAME PLAN
;; First, solve a hard-coded setup. Black blocks
;; Take input (#children, each grade) and solve

;; NEXT??
;; multiple algorithms
;; more problems?
