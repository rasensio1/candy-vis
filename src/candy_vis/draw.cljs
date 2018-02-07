(ns candy-vis.draw
  (:require [rid3.core :as rid3]
            [reagent.core :as r]))

(def page-height 400)
(def page-width 600)

(defn n-kids [ratom]
  (count (get @ratom :candies)))

(defn svg-did-mount [node ratom]
  (-> node
      (.attr "width" page-width)
      (.attr "height" page-height)
      (.style "background-color" "white")))

;; There is a macroexpansion for all this repetition in `let`,
;;  but I don't know how to do it yet.

(defn rank-label-did-mount [node ratom]
  (let [bar-n (n-kids ratom)
        bar-h-inc (/ page-height bar-n)
        bar-w-inc (/ page-width bar-n)
        x-scale (-> js/d3
                    .scaleLinear
                    (.domain #js [0 bar-n])
                    (.range #js [0 (- page-width (dec bar-n))]))]
    (-> node
        (.attr "x" (fn [_ i ] (+ i (/ (x-scale 1) 2) (x-scale i))))

        (.attr "y" 20)
        (.attr "text-anchor" "middle")
        (.attr "alignment-baseline" "middle")
        (.attr "fill" "green")
        (.attr "font-size" "24px" )
        (.attr "font-family" "sans-serif")
        (.text (fn [d] (aget d "rank"))))))

(defn candy-label-did-mount [node ratom]
  (let [bar-n (n-kids ratom)
        bar-h-inc (/ page-height bar-n)
        bar-w-inc (/ page-width bar-n)
        y-scale (-> js/d3
                    .scaleLinear
                    (.domain #js [0 (inc bar-n)]) ;; max candies is (n + 1)
                    (.range #js [page-height 0]))
        x-scale (-> js/d3
                    .scaleLinear
                    (.domain #js [0 bar-n])
                    (.range #js [0 (- page-width (dec bar-n))]))]
  (-> node
      ;;               margin pixel  centered        x-dist
      (.attr "x" (fn [_ i ] (+ i (/ (x-scale 1) 2) (x-scale i))))
      (.attr "y" (fn [d] (- (y-scale (aget d "candies")) 15)))
      (.attr "text-anchor" "middle")
      (.attr "alignment-baseline" "middle")
      (.attr "fill" "green")
      (.attr "font-size" "24px")
      (.attr "font-family" "sans-serif")
      (.text (fn [d] (aget d "candies"))))))

(defn candy-bar-did-mount [node ratom]
  (let [bar-n (n-kids ratom)
        bar-h-inc (/ page-height bar-n)
        bar-w-inc (/ page-width bar-n)
        y-scale (-> js/d3
                    .scaleLinear
                    (.domain #js [0 (inc bar-n)]) ;; max candies is (n + 1)
                    (.range #js [page-height 0]))
        x-scale (-> js/d3
                    .scaleLinear
                    (.domain #js [0 bar-n])
                    (.range #js [0 (- page-width (dec bar-n))]))]
    (-> node
        (.style "shape-rendering" "crispEdges")
        (.attr "fill" "green")
        (.attr "x" (fn [_ i ] (+ i (x-scale i))))
        (.attr "y" (fn [d] (y-scale (aget d "candies"))))
        (.attr "height" (fn [d] (- (y-scale 0) (y-scale (aget d "candies")))))
        (.attr "opacity" 0.8)
        (.attr "width" (x-scale 1)))))

(defn mkmp [rnk cnd]
  {:rank rnk :candies cnd})

(defn set-draw-dst [ratom]
  (let [res (mapv mkmp (get @ratom :ranks) (get @ratom :candies ))]
    (-> res clj->js)))

(defn viz [ratom]
  [rid3/viz
   {:id "some-id"
    :ratom ratom
    :svg {:did-mount svg-did-mount}
    :pieces [{:kind :elem-with-data
              :class "candy-bar"
              :tag "rect"
              :prepare-dataset set-draw-dst
              :did-mount candy-bar-did-mount}
             {:kind :elem-with-data
              :class "candy-label"
              :prepare-dataset set-draw-dst
              :tag "text"
              :did-mount candy-label-did-mount}
             {:kind :elem-with-data
              :class "rank-label"
              :prepare-dataset set-draw-dst
              :tag "text"
              :did-mount rank-label-did-mount}
             ]}])

(defn draw-state [state]
  (r/render [:div [viz state]]
            (.getElementById js/document "testid")))
