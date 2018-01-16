(ns candy-vis.bar-graph
  (:require 
    [candy-vis.state :as st]))

;; maybe extract pieces into their own functions
(defn bar-stats [child-no candies]
  {:x (* child-no (+ st/candy-width st/candy-width-offset))
   :y (* st/candy-height (- st/max-candies candies))
   :x-l st/candy-width
   :y-l (* st/candy-height candies)}
  )

