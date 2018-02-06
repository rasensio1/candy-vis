(ns candy-vis.views)

(defn header []
  [:div [:h1 "How Many Candies?"]])

(defn kid-num []
  [:div.kid-num.text-center [:p 6] ])

(defn form-header []
  [:div.text-center
   [:h3 "Add a kiddo"]])

(defn add-kid-container []
   [:div.add-kid-container
    [:input.form-control {:type :number :placeholder "Rank goes here" }]
    [:input.form-control {:type :submit :value "Add"}]])

(defn remove-kid-container []
  [:div.add-kid-container
   [:input.form-control {:type :submit :value "Remove last kid"}]])

(defn go-button []
  [:div.go-button
   [:input.form-control {:type :submit :value "Distribute Candies"}] ])

(defn rank-form []
  [:div.form-body
   [form-header]
   [add-kid-container]
   [remove-kid-container]
   [go-button]])

