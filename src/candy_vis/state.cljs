(ns candy-vis.state
  (:require
    [candy-vis.helpers :as hl]
    [reagent.core :as r :refer [atom]]))

(defonce children 15)
(defonce canvas-width (.-width hl/canvas))
(defonce canvas-height (.-height hl/canvas))
(defonce max-candies (dec children))

;; max candies in solution is numbef of children + 1 
(defonce candy-height (quot canvas-height (inc children))) 

(def candy-width (quot (* canvas-width 0.75) children))

;; no offest between start of canvas and first child && end of canvas, last child
(def candy-width-offset (quot (* canvas-width 0.25) max-candies))

(def initial-state {:ranks [1 2 3 5 4 3 7 12 9 10 11 12 13 14 15]
                    :candies (vec (repeat children 1))
                    :index 0
                    :finished false
                    :dir 1
                    ;; can get rid of children and base it on rankings
                    :children children
                    :history [] })

(defonce app-state (r/atom initial-state))
