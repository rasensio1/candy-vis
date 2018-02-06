(ns candy-vis.views
  (:require [reagent.core :as r]))

(defn header []
  [:div [:h1 "How Many Candies?"]])

(defn kid-num []
  [:div.kid-num.text-center [:p 6] ])

(defn form-header []
  [:div.text-center
   [:h3 "Add a kiddo"]])

(defn add-kid-container [state]
  (let [rank (r/atom 1)]
   [:div.add-kid-container
    [:input.form-control {:type :number :placeholder "Rank goes here" }]
    [:input.form-control
     {:type :submit :value "Add kid"
      :on-change #(reset! rank (-> % .-target .-value))
      :on-click #(swap! state (partial merge-with conj) {:candies 1
                                                         :ranks @rank})}]]))


(let [myatm (atom {:can [1 2 3]})]
  (swap! myatm (partial merge-with conj) {:can 1}))

(defn remove-kid-container [state]
  [:div.add-kid-container
   [:input.form-control
    {:type :submit :value "Remove last kid"
     :on-click #(swap! state assoc :candies (pop (:candies @state))
                                   :ranks (pop (:ranks @state)))}]])

(defn go-button [state]
  [:div.go-button
   [:input.form-control {:type :submit :value "Distribute Candies"}] ])

(defn rank-form [state]
  [:div.form-body
   [form-header]
   [add-kid-container state]
   [remove-kid-container state]
   [go-button state]])

