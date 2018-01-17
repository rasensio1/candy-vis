(ns ^:figwheel-always candy-vis.views-test
  (:require [cljs.test :refer-macros [is testing use-fixtures]]
            [cljs-react-test.utils :as tu]
            [cljs-react-test.simulate :as sim]
            [reagent.core :as r :refer [atom]]
            [candy-vis.views :as vw]
            [devcards.core :refer-macros [deftest]]))

(def ^:dynamic c)

; (use-fixtures :each (fn [test-fn]
;                       (binding [c (tu/new-container!)]
;                         (js-debugger)
;                         (test-fn)
;                         (tu/unmount! c))))

; (deftest header-test
;   (testing "Shows header"
;     (let [display-node (r/render [vw/header] c)]
;       (is (re-find #"Candies" (.-innerHTML display-node))) )))

(deftest header-test
  (testing "Shows header"
    (let [c (tu/new-container!)
          _ (r/render [vw/header] c)]
      (is (re-find #"Candies" (.-innerHTML c)))
     (tu/unmount! c) )))

