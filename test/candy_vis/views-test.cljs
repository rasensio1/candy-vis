(ns ^:figwheel-always candy-vis.views-test
  (:require [cljs.test :refer-macros [is testing use-fixtures]]
            [cljs-react-test.utils :as tu]
            [cljs-react-test.simulate :as sim]
            [reagent.core :as r :refer [atom]]
            [candy-vis.views :as vw]
            [devcards.core :refer-macros [deftest]]))

(deftest header-test
  (testing "Shows header"
    (let [c (tu/new-container!)
          _ (r/render [vw/header] c)]
      (is (re-find #"Candies" (.-innerHTML c)))
     (tu/unmount! c) )))

(deftest rank-input-test
  (testing "Shows an input"
    (let [c (tu/new-container!)
          _ (r/render [vw/rank-input] c)]
      (is (re-find #"input" (.-innerHTML c)))
      (is (re-find #"rank" (.-innerHTML c)))
     (tu/unmount! c) )))

(deftest rank-input-contianer-test
  (testing "Shows inputs within container"
    (let [c (tu/new-container!)
          _ (r/render [vw/rank-input-container 3] c)]
      (is (re-find #"rank-input-container" (.-innerHTML c)))
      (is (re-find #"rank-inputs-container" (.-innerHTML c)))
     (tu/unmount! c) )))

