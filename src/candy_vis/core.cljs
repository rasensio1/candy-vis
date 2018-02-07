(ns ^:figwheel-always candy-vis.core
  (:require [candy-vis.state :as st]
            [candy-vis.views :as vw]
            [reagent.core :as r :refer [atom]]
            [candy-vis.draw :as drw]))

(enable-console-print!)

(defonce app-state (r/atom st/initial-state))


(r/render [vw/header] (js/document.getElementById "header"))
(r/render [vw/rank-form app-state] (js/document.getElementById "body"))
(drw/draw-state app-state)


;; TODO
;; Add pointer for index
;; Add random kid button
;; Display total when algo finishes
;; Add speed option (like for large datasets)
