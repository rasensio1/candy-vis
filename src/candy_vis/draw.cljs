(ns candy-vis.draw
  (:require [rid3.core :as rid3]
            [reagent.core :as r]))

(def page-height 400)
(def page-width 600)

(defn svg-did-mount [node ratom]
  (-> node
      (.attr "width" page-width)
      (.attr "height" page-height)
      (.style "background-color" "white")))

(defn rank-label-did-mount [node ratom]
  (let [bar-n (count (get @ratom :dataset))
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
        ;;                    pixel    centered        x-dist
        (.attr "x" (fn [_ i ] (+ i (/ (x-scale 1) 2) (x-scale i))))

        (.attr "y" 20)
        (.attr "text-anchor" "middle")
        (.attr "alignment-baseline" "middle")
        (.attr "fill" "green")
        (.attr "font-size" "24px" )
        (.attr "font-family" "sans-serif")
        (.text (fn [d] (aget d "rank"))))))

(defn candy-label-did-mount [node ratom]
  (let [bar-n (count (get @ratom :dataset))
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
      ;;                    pixel    centered        x-dist
      (.attr "x" (fn [_ i ] (+ i (/ (x-scale 1) 2) (x-scale i))))

      (.attr "y" (fn [d] (- (y-scale (aget d "candies")) 15)))
      (.attr "text-anchor" "middle")
      (.attr "alignment-baseline" "middle")
      (.attr "fill" "green")
      (.attr "font-size" "24px" )
      (.attr "font-family" "sans-serif")
      (.text (fn [d] (aget d "candies"))))))

(defn candy-bar-did-mount [node ratom]
  (let [bar-n (count (get @ratom :dataset))
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

;; (defn create-x-scale [ratom]
;;   (let [dataset (get @ratom :dataset)
;;         width page-width
;;         domain (map :rank dataset)]
;;     (-> js/d3
;;         .scaleBand
;;         (.rangeRound #js [0 width])
;;         (.padding 0.1)
;;         (.domain (clj->js domain)))))

;; (defn x-axis [node ratom]
;;   (let [x-scale (create-x-scale ratom)]
;;     (-> node
;;         (.attr "transform" (str "translate(0," (- page-height 20) ")"))
;;         (.call (.axisBottom js/d3 x-scale)))
;;     (-> node
;;         (.select "path")
;;         (.style "stroke" "none"))))

(defn viz [ratom]
  [rid3/viz
   {:id "some-id"
    :ratom ratom
    :svg {:did-mount svg-did-mount}
    :pieces [{:kind :elem-with-data
              :class "candy-bar"
              :tag "rect"
              :did-mount candy-bar-did-mount}
             {:kind :elem-with-data
              :class "candy-label"
              :tag "text"
              :did-mount candy-label-did-mount}
             {:kind :elem-with-data
              :class "rank-label"
              :tag "text"
              :did-mount rank-label-did-mount}
             ;; {:kind :container
             ;;  :class "x-axis"
             ;;  :did-mount x-axis}
             ]}])

(defn draw-state [state]
  (r/render [:div [viz state]]
            (.getElementById js/document "testid")))
