(ns candy-vis.draw
  (:require [rid3.core :as rid3]
            [reagent.core :as r]))

(defn draw-state [state]
  (r/render [:div [viz state]]
            (.getElementById js/document "testid")))

(defn viz [ratom]
  [rid3/viz
   {:id "some-id"
    :ratom ratom
    :svg {:did-mount (fn [node _]
                       (-> node
                           (.attr "width" 200)
                           (.attr "height" 200)
                           (.style "background-color" "grey")))}
    :pieces [{:kind :elem
              :class "background"
              :tag "circle"
              :did-mount (fn [node _]
                           (-> node
                               (.attr "cx" 100)
                               (.attr "cy" 100)
                               (.attr "r" 50)))}
             {:kind :elem
              :class "foreground"
              :tag "text"
              :did-mount (fn [node _]
                           (-> node
                               (.attr "x" 100)
                               (.attr "y" 100)
                               (.attr "text-anchor" "middle")
                               (.attr "alignment-baseline" "middle")
                               (.attr "fill" "gree")
                               (.attr "font-size" "24px")
                               (.attr "font-family" "sans-serif")
                               (.text "RID3")))}]
    }])
