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
  (let [rank (r/atom 1)]
    [:div#add-kid-container
     [:p.add-prompt "With what ranks? (comma separted values)"]
     [:div.inlinesec
      [:input.form-control.f80
       {:type :text :placeholder "1,2,3,6,8"
        :on-change #(reset! rank (-> % .-target .-value))}]
      [:input.form-control.btn.btn-light.f20
       {:type :submit :value "Submit"
        :on-click #(swp/add-kid state @rank)}]
      ]
     ]))

(defn add-random-kid-container [state]
  ;; TODO regular atom?
  (let [num (r/atom 1)]
    [:div.random-kid-container
     [:h5 "With random ranks"]
     [:label "How many?"]
     [:div.inlinesec
      [:input.form-control.f80
       {:type :number :placeholder "How many random kids?"
        :on-change #(reset! num (-> % .-target .-value))}]
      [:input.form-control.f20
       {:type :submit :value "Submit"
        :on-click #(swp/add-rando-kids state @num)}]
      ]
     ]))

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
   [:div.btn-group.f20
    [:button.btn.btn-primary
     {:on-click #(swp/change-speed state :medium)} "Medium"]
    [:button.btn.btn-primary
     {:on-click #(swp/change-speed state :fast)} "Fast"]
    [:button.btn.btn-primary
     {:on-click #(swp/change-speed state :fastest)} "Fastest"]]])

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

