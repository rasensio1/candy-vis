(ns candy-vis.swappers
  (:require [candy-vis.state :as st]))

(defn algo-step [state updates]
  (swap! state merge updates))

(defn add-kid [state rank]
  (swap! state (partial merge-with conj) {:candies 1
                                           :ranks rank}))

(defn add-rando-kids [state n-kids]
  (dotimes [n n-kids] (add-kid state (+ 1 (rand-int 50)))))

(defn remove-kid [state]
  (swap! state assoc :candies (pop (:candies @state))
                      :ranks (pop (:ranks @state))))

(defn reset-state [state]
  (reset! state st/initial-state))

