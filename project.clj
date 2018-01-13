(defproject candy-vis "0.1.0-SNAPSHOT"
  :description "Visualize a candy distribution algorithm"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"] [org.clojure/clojurescript "1.9.946"]]
  :plugins [[lein-figwheel "0.5.14"]]
  :jvm-opts  ["--add-modules" "java.xml.bind"]
  :cljsbuild{ :builds [ {:id "dev" 
                        :source-paths ["src/"]
                        :figwheel true
                        :compiler {:main "candy-vis.core"
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/candy_vis.js"
                                   :output-dir "resources/public/js/out" } } ] })
