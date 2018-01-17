(ns candy-vis.views)

(defn header []
  [:div
   [:h1 "How Many Candies?"]])

(defn rank-input []
  [:div.rank-input-container
   [:input.form-control {:type :numeric :class :rank-field}] ])

(defn rank-inputs-container [n]
  [:div.rank-inputs-container.text-center
   (repeat n [rank-input])])

