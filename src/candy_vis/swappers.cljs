(ns candy-vis.swappers
  (:require [candy-vis.state :as st]
            [clojure.string :as string]))

(defn add-kid [state rank]
  (swap! state (partial merge-with conj) {:candies 1
                                          :ranks rank}))

(defn get-ranks [raw-ranks]
  (as-> (string/replace raw-ranks #"[^,\d]" "") s
        (string/split s #"," )
        (map int s)))

(defn add-kids [state ranks]
  (doseq [n (get-ranks ranks)]
    (add-kid state n)))

(defn add-rando-kids [state n-kids]
  (dotimes [n n-kids] (add-kid state (+ 1 (rand-int 50)))))

(defn unfinish [state]
  (swap! state merge {:finished false :dir 1}))

(defn algo-step [state updates]
  (swap! state merge updates))

(defn remove-kid [state]
  (swap! state assoc :candies (pop (:candies @state))
                      :ranks (pop (:ranks @state))))

(defn reset-state [state]
  (reset! state st/initial-state))

(defn reset-candies [state]
  (swap! state update-in [:candies] #(mapv (fn [_] 1) %)))

(defn change-speed [state speed]
  (swap! state assoc :speed speed))
