(ns ^:figwheel-always candy-vis.core_test
  (:require [cljs.test :refer-macros [is testing]]
            [candy-vis.state :as st]
            [devcards.core :refer-macros [deftest]]))

(deftest initial-state
  (testing "history"
    (is (=  [] (get st/initial-state :history)))))

(deftest canvas-width
  (is (= 800 st/canvas-width)))
