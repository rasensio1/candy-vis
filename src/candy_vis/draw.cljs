(ns candy-vis.draw
  (:require [rid3.core :as rid3]
            [reagent.core :as r]))

(defn svg-did-mount [node ratom]
  (-> node
      (.attr "width" 600)
      (.attr "height" 400)
      (.style "background-color" "grey")))

(defn circle-did-mount [node ratom]
  (-> node
      (.attr "cx" 100)
      (.attr "cy" 100)
      (.attr "r" 50)))

(defn candies-did-mount [node ratom]
  (-> node
      (.attr "x" 200)
      (.attr "y" 200)
      (.attr "text-anchor" "middle")
      (.attr "alignment-baseline" "middle")
      (.attr "fill" "green")
      (.attr "font-size" "24px" )
      (.attr "font-family" "sans-serif")
      (.text (fn [d] (aget d "rank")))))

(defn viz [ratom]
  [rid3/viz
   {:id "some-id"
    :ratom ratom
    :svg {:did-mount svg-did-mount}
    :pieces [{:kind :elem-with-data
              :class "candies"
              :tag "text"
              :did-mount candies-did-mount}
             {:kind :elem
              :class "background"
              :tag "circle"
              :did-mount circle-did-mount}]}])

(defn draw-state [state]
  (r/render [:div [viz state]]
            (.getElementById js/document "testid")))
