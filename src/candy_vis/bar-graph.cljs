(ns candy-vis.bar-graph
  (:require [candy-vis.core :as core]
            [candy-vis.state :as st]))

;; weird that this ns require core for #context...
;; should figure out better structure later


(defn draw-bar [stats]
  (let [{:keys [ x y x-l y-l]} stats] (.fillRect core/context x y x-l y-l)))

(defn draw-bars [coll-stats]
  (map draw-bar coll-stats))

;; maybe extract pieces into their own functions
(defn bar-stats [child-no candies]
  {:x (* child-no (+ st/candy-width st/candy-width-offset))
   :y (* st/candy-height (- st/max-candies candies))
   :x-l st/candy-width
   :y-l (* st/candy-height candies)}
  )

(defn draw-candies [candies]
  (-> (map-indexed bar-stats candies)
      (draw-bars)))
