(ns candy-vis.state
  (:require
    [candy-vis.helpers :as hl]
    [reagent.core :as r :refer [atom]]))

(defonce children 15)

(def initial-state {:ranks [1 2 3 5 4 14 13 12 9 10 11 12 13 14 15]
                    :candies (vec (repeat children 1))
                    :dataset []
                    :index 0
                    :finished false
                    :dir 1
                    ;; can get rid of children and base it on rankings
                    :children children
                    :history [] })

(defonce app-state (r/atom initial-state))
