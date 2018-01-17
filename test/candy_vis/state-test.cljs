(ns ^:figwheel-always candy-vis.state-test
  (:require [cljs.test :refer-macros [is testing]]
            [candy-vis.state :as st]
            [devcards.core :refer-macros [deftest]]))

(deftest initial-state-tate
  (testing "history"
    (is (= [] (:history st/initial-state))))
  (testing "index"
    (is (= 0 (:index st/initial-state))))
  (testing "initial dir"
    (is (= 1 (:dir st/initial-state))))
  (testing "finished"
    (is (= false (:finished st/initial-state)))) )

