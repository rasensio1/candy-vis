(ns candy-vis.views
   (:require [reagent.core :as r]
             [candy-vis.run :as run]
             [candy-vis.swappers :as swp]))

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
      [:input.form-control
        {:type :number :placeholder "rank goes here"
          :on-change #(reset! rank (-> % .-target .-value))}]
    [:input.form-control
     {:type :submit :value "Add kid"
      :on-click #(swp/add-kid state @rank)}]]))

(defn remove-kid-container [state]
  [:div.add-kid-container
   [:input.form-control
    {:type :submit :value "Remove last kid"
     :on-click #(swp/remove-kid state)}]])

(defn go-button [state]
  [:div.go-button
   [:input.form-control {:type :submit
                         :value "Distribute Candies"
                         :on-click #(run/tick state)}]])

(defn reset-button [state]
  [:div.reset-button
   [:input.form-control {:type :submit
                         :value "Reset All"
                         :on-click #(swp/reset-state state)}]])

(defn random-kid-container [state]
  ;; TODO regular atom?
  (let [num (r/atom 1)]
    [:div.random-kid-container
   [:input.form-control
    {:type :number :placeholder "How many random kids?"
     :on-change #(reset! num (-> % .-target .-value))}]
   [:input.form-control
    {:type :submit :value "Add random kids"
     :on-click #(swp/add-rando-kids state @num)}]]))

(defn speed-options [state]
  [:h3 "single-select buttons"]
  [:div.btn-group {:field :single-select :id :unique.position}
   [:button.btn.btn-default {:on-click #(swp/change-speed state :medium)} "Medium"]
   [:button.btn.btn-default {:on-click #(swp/change-speed state :fast)} "Fast"]
   [:button.btn.btn-default {:on-click #(swp/change-speed state :fastest)} "Fastest"]]
  )

(defn rank-form [state]
  [:div.form-body
   [form-header]
   [add-kid-container state]
   [random-kid-container state]
   [remove-kid-container state]
   [reset-button state]
   [go-button state]
   [speed-options state]])

