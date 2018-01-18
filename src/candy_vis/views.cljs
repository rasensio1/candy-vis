(ns candy-vis.views)

(defn header []
  [:div [:h1 "How Many Candies?"]])

(defn kid-num []
  [:div.kid-num.text-center [:p 6] ])

(defn kids-container [n]
  [:div.kids-container
   (repeat n [kid-num]) ])

(defn form-header []
  [:div.text-center
   [:h3 "Choose each kiddo's rank"]])

(defn rank-input []
  [:div.rank-input-container
   [:input.form-control {:type :number :value 1 }] ])

(defn rank-inputs-container [n]
  [:div.rank-inputs-container
   (repeat n [rank-input])])

(defn go-button []
  [:div.go-button
   [:input.form-control {:type :submit :value "Submit"}] ])

(defn rank-form []
  [:div.form-body
   [kids-container 15]
   [form-header]
   [rank-inputs-container 15]
   [go-button]])

