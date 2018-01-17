(ns candy-vis.views)

(defn header []
  [:div
   [:h1 "How Many Candies?"]])

(defn rank-input []
  [:div.rank-input-container
   [:input.form-control {:field :numeric :class :rank-field}] ])

(defn rank-input-container [n]
  [:div.rank-inputs-container
   (repeat n [rank-input])])
