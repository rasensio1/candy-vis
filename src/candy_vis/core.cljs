(ns ^:figwheel-always candy-vis.core
  (:require [candy-vis.state :as st]
            [candy-vis.draw :as drw]))

(enable-console-print!)

(drw/draw-state st/app-state)

; (defn tick [state]
;   (drw/draw-state st/app-state)
;   (swap! app-state (algo/next-state @app-state))
;   )



;;   tick!
;; draw candies
;; stop if done
;; update candies





;; GAME PLAN
;; First, solve a hard-coded setup. Black blocks
;; Take input (#children, each grade) and solve

;; NEXT??
;; multiple algorithms
;; more problems?
