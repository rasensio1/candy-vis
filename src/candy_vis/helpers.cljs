(ns candy-vis.helpers)

(defonce canvas
  (.getElementById js/document "target"))

(defonce context
  (.getContext canvas "2d"))

