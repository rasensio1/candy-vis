(ns candy-vis.views)

(defn header []
  [:div
   [:h1 "How Many Candies?"]])

(defn candy-input []
  [:div
   [:input.form-control {:field :numeric :id :candy}] ])
