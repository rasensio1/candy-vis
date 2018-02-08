(ns candy-vis.draw
  (:require [rid3.core :as rid3]
            [reagent.core :as r]))

(def viz-height 400)
(def viz-width 600)

(defn n-kids [ratom]
  (count (get @ratom :candies)))

(defn set-attr [node [attr settr]]
  (.attr node attr settr))

(defn set-attrs [node attr-opts]
  (doseq [opts attr-opts]
    (set-attr node opts)))

(defn svg-did-mount [node ratom]
  (set-attrs node [["width" viz-width]
                   ["height" viz-height]])
  (.style node "background-color" "white"))

(defn mk-scale [domain length]
  (-> js/d3
      .scaleLinear
      (.domain #js [0 domain])
      (.range length)))

(defn mk-x-scale [bar-n width]
    (mk-scale bar-n (clj->js [0 (- width (dec bar-n))])))

(defn mk-y-scale [bar-n height]
   (mk-scale bar-n (clj->js [height 0])))

(defn center-scale-pos [idx scale]
;; paddings  centered      x-dist
  (+ idx (/ (scale 1) 2) (scale idx)))

;; There is a macroexpansion for all this repetition in `let`,
;;  but I don't know how to do it yet.

(defn rank-label-did-mount [node ratom]
  (let [bar-n (n-kids ratom)
        bar-w-inc (/ viz-width bar-n)
        x-scale (mk-x-scale bar-n viz-width)]
    (.text node (fn [d] (aget d "rank")))
    (set-attrs node [["y" (- viz-height 10)]
                     ["x" (fn [_ i ] (center-scale-pos i x-scale))]
                     ["alignment-baseline" "middle"]
                     ["text-anchor" "middle"]
                     ["fill" "black"]
                     ["font-size" (str (/ bar-w-inc 2) "px")]
                     ["font-family" "sans-serif"]])))

(defn candy-label-did-mount [node ratom]
  (let [bar-n (n-kids ratom)
        bar-w-inc (/ viz-width bar-n)
        y-scale (mk-y-scale bar-n viz-height)
        x-scale (mk-x-scale bar-n viz-width)]
  (.text node (fn [d] (aget d "candies")))
  (set-attrs node [["x" (fn [_ i ] (center-scale-pos i x-scale))]
                   ["y" (fn [d] (- (y-scale (aget d "candies")) 15))]
                   ["text-anchor" "middle"]
                   ["alignment-baseline" "middle"]
                   ["fill" "green"]
                   ["font-size" (str (/ bar-w-inc 1.5) "px") ]
                   ["font-family" "sans-serif"]])))

(defn candy-bar-did-mount [node ratom]
  (let [idx (get @ratom :index)
        bar-n (n-kids ratom)
        bar-w-inc (/ viz-width bar-n)
        y-scale (mk-y-scale bar-n viz-height)
        x-scale (mk-x-scale bar-n viz-width)]
    (.style node "shape-rendering" "crispEdges")
    (set-attrs node
               [["fill" (fn [_ i] (if (= idx i) "lawngreen" "green"))]
                ["x" (fn [_ i ] (+ i (x-scale i)))]
                ["y" (fn [d] (y-scale (aget d "candies")))]
                ["height" (fn [d] (- (y-scale 0) (y-scale (aget d "candies"))))]
                ["opacity" 0.8]
                ["width" (x-scale 1)]])))

(defn key-label [node ratom]
  (set-attrs node [["font-size" "20px"]
                   ["x" 30] ["y" 30]])
  (.text node "Key:"))

(defn key-candies [node ratom]
  (set-attrs node [["fill" "green" ]
                   ["x" 40] ["y" 50]
                   ["font-size" "15px" ]])
  (.text node "(Green) - How many candies each child has."))

(defn key-rank [node ratom]
  (set-attrs node [["x" 40]
                   ["y" 70]
                   ["font-size" "15px"]])
  (.text node "(Black) - The starting rank of each child."))

(defn mkmp [rnk cnd]
  {:rank rnk :candies cnd})

(defn set-draw-dst [ratom]
  (let [res (mapv mkmp (get @ratom :ranks) (get @ratom :candies ))]
    (-> res clj->js)))

(def graph-key
  {:kind :container
   :class "key-container"
   :children
   [{:kind :elem :class "key-label"
     :tag "text" :did-mount key-label}
    {:kind :elem :class "key-candies"
     :tag "text" :did-mount key-candies}
    {:kind :elem :class "key-rank"
     :tag "text" :did-mount key-rank}]})

(def candy-bar
  {:kind :elem-with-data
   :class "candy-bar"
   :tag "rect"
   :prepare-dataset set-draw-dst
   :did-mount candy-bar-did-mount})

(def candy-label
  {:kind :elem-with-data
   :class "candy-label"
   :prepare-dataset set-draw-dst
   :tag "text"
   :did-mount candy-label-did-mount})

(def rank-label
  {:kind :elem-with-data
   :class "rank-label"
   :prepare-dataset set-draw-dst
   :tag "text"
   :did-mount rank-label-did-mount})

(defn viz [ratom]
  [rid3/viz
   {:id "my-viz"
    :ratom ratom
    :svg {:did-mount svg-did-mount}
    :pieces [graph-key
             candy-bar
             candy-label
             rank-label]}])

(defn draw-viz [state]
  (r/render [:div [viz state]]
            (.getElementById js/document "data-viz")))
