(ns candy-vis.core)

(enable-console-print!)

(defonce context
  (.getContext
    (.getElementById js/document "target") "2d"))

(.fillRect context 0 0 20 20)
