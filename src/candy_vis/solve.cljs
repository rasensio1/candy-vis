(ns candy-vis.solve)

(defn next-step [state]
  "Returns a map with the updated values for :index :direction :candies"
  (let [idx (:index state)
        nxt (fn [idx] (+ (:dir state) idx))
        candies (:candies state)
        ranks (:ranks state)
        dir (:dir state)]
    (case nxt

      ;; if at the end of the list, just reverse the direction 
      (count candies) {:dir (* -1 dir)} 

      ;; if back at beginning, update :finished
       -1 {:finished true}

      (if (and (> (nth ranks nxt) ;; next rank bigger than current?
                    (nth ranks idx))
               (< (nth candies nxt) ;; next candies less than current?
                  (nth candies idx)))
        {:index (+ dir idx) :candies (update candies inc nxt)}; inc next candy
        {:index (+ dir idx)} ;; else, just update index
        )))) 

