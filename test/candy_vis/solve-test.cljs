(ns ^:figwheel-always candy-vis.solve-test
  (:require [cljs.test :refer-macros [is testing]]
            [candy-vis.solve :as sol]
            [devcards.core :refer-macros [deftest]]))

(def dummy-state {:index 0
                  :dir 1
                  :finished false
                  :candies [1 1 1]
                  :ranks [1 2 1]})

(defn solver [state]
  (let [app-state (atom state)]
    (while (false? (:finished @app-state)) (swap! app-state merge (sol/next-step @app-state)))
    @app-state))


(deftest next-step-test
  (testing "End of forward iteration"
    (is (= {:dir -1} (sol/next-step
                       (assoc dummy-state :index 2)))))
  (testing "End of backward iteration"
    (is (= {:finished true} (sol/next-step
                       (assoc dummy-state :index 0 :dir -1)))) )
  (testing "Incrases candy"
    (is (= {:index 1 :candies [1 2 1]} (sol/next-step
                                         {:index 0 :dir 1
                                          :candies [1 1 1]
                                          :ranks [1 2 1] })))))

(deftest next-step-integration-test
  (testing "Can solve a simple situation"
    (is (= {:index 0
            :dir -1
            :candies [1 2 1]
            :ranks [1 2 1]
            :finished true
            } (solver dummy-state))))

  (testing "Can solve a complex situation"
    (is (= [1 2 1 2 1 2 3 4 2 1] (:candies (solver (assoc dummy-state
                                                    :candies [1 1 1 1 1 1 1 1 1 1]
                                                    :ranks [2 4 2 6 1 7 8 9 2 1]))))))
  (testing "Can solve always increasing"
    (is (= [1 2 3 4 5 6 7 8] (:candies (solver (assoc dummy-state
                                                      :ranks [1 2 3 4 5 6 7 8]
                                                      :candies [1 1 1 1 1 1 1 1]))))))

  (testing "Can solve always decreasing"
    (is (= [8 7 6 5 4 3 2 1] (:candies (solver (assoc dummy-state
                                                      :ranks [8 7 6 5 4 3 2 1]
                                                      :candies [1 1 1 1 1 1 1 1])))))))

