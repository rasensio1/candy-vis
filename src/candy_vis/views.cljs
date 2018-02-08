(ns candy-vis.views
   (:require [reagent.core :as r]
             [candy-vis.run :as run]
             [candy-vis.swappers :as swp]))

(defn header []
  [:div#candies-header [:h1 "How Many Candies?"]])

(defn form-header []
  [:div#form-header.text-center
   [:h3 "Options"]])

(defn add-kid-container [state]
  (let [rank (r/atom "1")]
    [:div#add-kid-container
     [:p.add-prompt "With what ranks? (comma separted values)"]
     [:div.inlinesec
      [:input.form-control.f80
       {:type :text :placeholder "1,2,3,6,8"
        :on-change #(reset! rank (-> % .-target .-value))}]
      [:input.form-control.f20
       {:type :submit :value "Submit"
        :on-click #(swp/add-kids state @rank)}]]]))

(defn add-random-kid-container [state]
  ;; TODO regular atom?
  (let [num (r/atom 1)]
    [:div#random-kid-container
     [:label "With random ranks. (How many?)"]
     [:div.inlinesec
      [:input.form-control.f80
       {:type :number :placeholder "20"
        :on-change #(reset! num (-> % .-target .-value))}]
      [:input.form-control.f20
       {:type :submit :value "Submit"
        :on-click #(swp/add-rando-kids state @num)}]]]))

(defn remove-kid-container [state]
  [:div.add-kid-container.greybox.inlinesec
   [:h5.f80 "Remove last kid"]
   [:input.form-control.f20
    {:type :submit :value "Submit"
     :on-click #(swp/remove-kid state)}]])

(defn reset-container [state]
  [:div.reset-button.greybox.inlinesec
   [:h5.f80 "Reset all"]
   [:input.form-control.f20 {:type :submit
                         :value "Submit"
                         :on-click #(swp/reset-state state)}]])

(defn speed-opts-container [state]
  [:div.speed-opts-cointainer.greybox.inlinesec
   [:h5.f80 "Speed"]
   [:input {:type :range
            :default-value 300
            :min 1 :max 700
            :on-change #(swp/change-speed state (-> % .-target .-value))}]])

(defn add-container [state]
  [:div#add-container.greybox
   [:div.text-center [:h4 "Add Kids"]]
   [:div#add-rank
    [add-kid-container state]
    [add-random-kid-container state]]])

(defn other-container [state]
  [:div#other-container
   [remove-kid-container state]
   [reset-container state]
   [speed-opts-container state]])

(defn form-body [state]
  [:div#form-container
   [add-container state]
   [other-container state]])

(defn go-button [state]
  [:div.row.justify-content-md-center
   [:div#go-button
   [:input.form-control.btn.btn-lg.btn-success
                        {:type :submit
                         :value "Distribute Candies"
                         :on-click #(run/tick state)}]]])

(defn options-form [state]
  [:div#options-form
   [form-header]
   [form-body state]
   [go-button state]])

(defn problem-description []
  [:div.container
   [:p """Alice is a kindergarten teacher. She wants to give some candies to the
    children in her class. All the children sit in a line (their positions are
    fixed), and each of them has a rating score according to his or her
    performance in the class. Alice wants to give at least 1 candy to each child.
    If two children sit next to each other, then the one with the higher rating
    must get more candies. Alice wants to save money, so she needs to minimize the
    total number of candies given to the children."""]])

