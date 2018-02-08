(ns ^:figwheel-always candy-vis.state-test
  (:require [cljs.test :refer-macros [is testing]]
            [candy-vis.state :as st]
            [devcards.core :refer-macros [deftest]]))

(deftest initial-state-test
  (testing "index"
    (is (= 0 (:index st/initial-state))))
  (testing "initial dir"
    (is (= 1 (:dir st/initial-state))))
  (testing "finished"
    (is (= false (:finished st/initial-state)))))

(deftest ranks-candies-test
  (testing "gets candies from initial ranks"
    (is (= (count (:ranks st/initial-state))
           (count (:candies st/initial-state))))
    (is (apply = (cons 1 (:candies st/initial-state))))))

