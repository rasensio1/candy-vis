(ns ^:figwheel-always candy-vis.core
  (:require [candy-vis.state :as st]
            [candy-vis.bar-graph :as bg]))

(enable-console-print!)

(defonce context
  (.getCoetext
    (.getElementById js/document "target") "2d"))

(defn draw-state [state]
  (bg/draw-candies (get @state :candies)))



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
