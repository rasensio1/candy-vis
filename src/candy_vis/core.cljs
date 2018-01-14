(ns candy-vis.core)

(enable-console-print!)

(defonce context
  (.getContext
    (.getElementById js/document "target") "2d"))

(defonce children 15)
(defonce canvas-width 800)
(defonce canvas-height 800)

(defonce candy-width-offset 3)
(defonce candy-height (quot canvas-height children))
(def candy-width (quot (- 800 (* children candy-width-offset )) children))

(def initial-state {:rankings [1 2 3 4 5 6 7 8 9 10 11 12 13 14 15]
                    :candies (vec (repeat children 0))})




;; GAME PLAN
;; First, solve a hard-coded setup. Black blocks
;; Take input (#children, each grade) and solve

;; NEXT??
;; multiple algorithms
;; more problems?
