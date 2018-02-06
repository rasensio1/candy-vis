(ns candy-vis.solve)

(defn next-step [state]
  "Returns a map with the updated values for :index :dir :candies"
  (let [idx (:index state)
        dir (:dir state)
        nxt (+ dir idx)
        candies (:candies state)
        ranks (:ranks state)]
    (cond

      ;; if at the end of the list, just reverse the direction
      (= nxt (count candies)) {:dir (* -1 dir)}
      ;; if back at beginning, update :finished
      (= nxt -1 ) {:finished true}

      :else (if (and (> (nth ranks nxt) ;; next rank higher than current?
                    (nth ranks idx))
               (<= (nth candies nxt) ;; next candies less or equal to current?
                  (nth candies idx)))
        {:index (+ dir idx) :candies (assoc candies nxt (inc (nth candies idx)))}; next candy = this + 1
        {:index (+ dir idx)} ;; else, just update index
        ))))

