(ns candy-vis.state
  (:require
    [candy-vis.helpers :as hl]
    [reagent.core :as r :refer [atom]]))

(def default-ranks [1 2 3 5 4 14 13 12 9 10 11 12 13 14 15])

(def initial-state {:ranks default-ranks
                    :candies (mapv (fn [e] 1) default-ranks)
                    :index 0
                    :finished false
                    :speed 500
                    :dir 1})

