(ns ^:figwheel-always candy-vis.core
  (:require [candy-vis.state :as st]
            [candy-vis.draw :as drw]))

(enable-console-print!)


(defn draw-state [state]
  (drw/draw-candies (get @state :candies)))

(draw-state st/app-state)



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
