(ns ^:figwheel-always candy-vis.solve-test
  (:require [cljs.test :refer-macros [is testing]]
            [candy-vis.solve :as sol]
            [devcards.core :refer-macros [deftest]]))

(def dummy-state {:index 0
                  :dir 1
                  :candies [1 1 1 1]
                  :ranks [3 2 1 2]})

(deftest next-step
  (testing "End of forward iteration"
    (is (= {:dir -1} (sol/next-step 
                       (assoc dummy-state :index 3)))))
  (testing "End of backward iteration"
    (is (= {:finished true} (sol/next-step 
                       (assoc dummy-state :index 0 :dir -1)))) )

  (testing "Incrases candy"
    (is (= {:index 1 :candies [1 2 1]} (sol/next-step
                                         {:index 0 :dir 1
                                          :candies [1 1 1]
                                          :ranks [2 1 2] }))))

  )

