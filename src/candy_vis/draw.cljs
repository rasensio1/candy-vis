(ns candy-vis.draw
  ( :require 
    [candy-vis.bar-graph :as bg]))

(defonce context
  (.getContext
    (.getElementById js/document "target") "2d"))

(defn draw-bar [stats]
  (let [{:keys [x y x-l y-l]} stats] (.fillRect context x y x-l y-l)))

(defn draw-bars [coll-stats]
  (map draw-bar coll-stats))

(defn draw-candies [candies]
  (-> (map-indexed bg/bar-stats candies)
      (draw-bars)))
