(defproject candy-vis "0.1.0-SNAPSHOT"
  :description "Visualize a candy distribution algorithm"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[com.cemerick/piggieback "0.2.1"]
                 [figwheel-sidecar "0.5.8"]
                 [lein-doo "0.1.7"]
                 [devcards "0.2.4"]
                 [reagent "0.7.0"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 ]
  :plugins [[lein-cljsbuild "1.1.4" :exclusions [[org.clojure/clojure]]]
            [lein-figwheel "0.5.14"]
            [lein-doo "0.1.7"]
            ]
  :jvm-opts  ["--add-modules" "java.xml.bind"]
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :clean-targets ^{:protect false} [:target-path "out" "resources/public/js"]
  :cljsbuild { :builds [ {:id "dev" 
                          :source-paths ["src/"]
                          :figwheel true
                          :compiler {:main "candy-vis.core"
                                     :asset-path "js/out"
                                     :output-to "resources/public/js/candy_vis.js"
                                     :output-dir "resources/public/js/out" } }
                         {:id "test"
                          :source-paths ["src" "test"]
                          :compiler {:main runners.doo
                                     :optimizations :none
                                     :output-to "resources/public/cljs/tests/all-tests.js" } }
                        {:id "devcards-test"
                         :source-paths ["src" "test"]
                         :figwheel {:devcards true}
                         :compiler {:main runners.browser
                                    :optimizations :none
                                    :asset-path "cljs/tests/out"
                                    :output-dir "resources/public/cljs/tests/out"
                                    :output-to "resources/public/cljs/tests/all-tests.js"
                                    :source-map-timestamp true } } ] })
