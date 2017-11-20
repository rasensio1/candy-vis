// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28051__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28051__auto__){
return or__28051__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28051__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
var or__28051__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28051__auto____$1)){
return or__28051__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34220_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34220_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34221 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34222 = null;
var count__34223 = (0);
var i__34224 = (0);
while(true){
if((i__34224 < count__34223)){
var n = cljs.core._nth.call(null,chunk__34222,i__34224);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34225 = seq__34221;
var G__34226 = chunk__34222;
var G__34227 = count__34223;
var G__34228 = (i__34224 + (1));
seq__34221 = G__34225;
chunk__34222 = G__34226;
count__34223 = G__34227;
i__34224 = G__34228;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34221);
if(temp__4657__auto__){
var seq__34221__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34221__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__34221__$1);
var G__34229 = cljs.core.chunk_rest.call(null,seq__34221__$1);
var G__34230 = c__28890__auto__;
var G__34231 = cljs.core.count.call(null,c__28890__auto__);
var G__34232 = (0);
seq__34221 = G__34229;
chunk__34222 = G__34230;
count__34223 = G__34231;
i__34224 = G__34232;
continue;
} else {
var n = cljs.core.first.call(null,seq__34221__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34233 = cljs.core.next.call(null,seq__34221__$1);
var G__34234 = null;
var G__34235 = (0);
var G__34236 = (0);
seq__34221 = G__34233;
chunk__34222 = G__34234;
count__34223 = G__34235;
i__34224 = G__34236;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__34237){
var vec__34238 = p__34237;
var _ = cljs.core.nth.call(null,vec__34238,(0),null);
var v = cljs.core.nth.call(null,vec__34238,(1),null);
var and__28039__auto__ = v;
if(cljs.core.truth_(and__28039__auto__)){
return v.call(null,dep);
} else {
return and__28039__auto__;
}
}),cljs.core.filter.call(null,(function (p__34241){
var vec__34242 = p__34241;
var k = cljs.core.nth.call(null,vec__34242,(0),null);
var v = cljs.core.nth.call(null,vec__34242,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34254_34262 = cljs.core.seq.call(null,deps);
var chunk__34255_34263 = null;
var count__34256_34264 = (0);
var i__34257_34265 = (0);
while(true){
if((i__34257_34265 < count__34256_34264)){
var dep_34266 = cljs.core._nth.call(null,chunk__34255_34263,i__34257_34265);
if(cljs.core.truth_((function (){var and__28039__auto__ = dep_34266;
if(cljs.core.truth_(and__28039__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34266));
} else {
return and__28039__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34266,(depth + (1)),state);
} else {
}

var G__34267 = seq__34254_34262;
var G__34268 = chunk__34255_34263;
var G__34269 = count__34256_34264;
var G__34270 = (i__34257_34265 + (1));
seq__34254_34262 = G__34267;
chunk__34255_34263 = G__34268;
count__34256_34264 = G__34269;
i__34257_34265 = G__34270;
continue;
} else {
var temp__4657__auto___34271 = cljs.core.seq.call(null,seq__34254_34262);
if(temp__4657__auto___34271){
var seq__34254_34272__$1 = temp__4657__auto___34271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34254_34272__$1)){
var c__28890__auto___34273 = cljs.core.chunk_first.call(null,seq__34254_34272__$1);
var G__34274 = cljs.core.chunk_rest.call(null,seq__34254_34272__$1);
var G__34275 = c__28890__auto___34273;
var G__34276 = cljs.core.count.call(null,c__28890__auto___34273);
var G__34277 = (0);
seq__34254_34262 = G__34274;
chunk__34255_34263 = G__34275;
count__34256_34264 = G__34276;
i__34257_34265 = G__34277;
continue;
} else {
var dep_34278 = cljs.core.first.call(null,seq__34254_34272__$1);
if(cljs.core.truth_((function (){var and__28039__auto__ = dep_34278;
if(cljs.core.truth_(and__28039__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34278));
} else {
return and__28039__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34278,(depth + (1)),state);
} else {
}

var G__34279 = cljs.core.next.call(null,seq__34254_34272__$1);
var G__34280 = null;
var G__34281 = (0);
var G__34282 = (0);
seq__34254_34262 = G__34279;
chunk__34255_34263 = G__34280;
count__34256_34264 = G__34281;
i__34257_34265 = G__34282;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34258){
var vec__34259 = p__34258;
var seq__34260 = cljs.core.seq.call(null,vec__34259);
var first__34261 = cljs.core.first.call(null,seq__34260);
var seq__34260__$1 = cljs.core.next.call(null,seq__34260);
var x = first__34261;
var xs = seq__34260__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34259,seq__34260,first__34261,seq__34260__$1,x,xs,get_deps__$1){
return (function (p1__34245_SHARP_){
return clojure.set.difference.call(null,p1__34245_SHARP_,x);
});})(vec__34259,seq__34260,first__34261,seq__34260__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34283 = cljs.core.seq.call(null,provides);
var chunk__34284 = null;
var count__34285 = (0);
var i__34286 = (0);
while(true){
if((i__34286 < count__34285)){
var prov = cljs.core._nth.call(null,chunk__34284,i__34286);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34287_34295 = cljs.core.seq.call(null,requires);
var chunk__34288_34296 = null;
var count__34289_34297 = (0);
var i__34290_34298 = (0);
while(true){
if((i__34290_34298 < count__34289_34297)){
var req_34299 = cljs.core._nth.call(null,chunk__34288_34296,i__34290_34298);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34299,prov);

var G__34300 = seq__34287_34295;
var G__34301 = chunk__34288_34296;
var G__34302 = count__34289_34297;
var G__34303 = (i__34290_34298 + (1));
seq__34287_34295 = G__34300;
chunk__34288_34296 = G__34301;
count__34289_34297 = G__34302;
i__34290_34298 = G__34303;
continue;
} else {
var temp__4657__auto___34304 = cljs.core.seq.call(null,seq__34287_34295);
if(temp__4657__auto___34304){
var seq__34287_34305__$1 = temp__4657__auto___34304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34287_34305__$1)){
var c__28890__auto___34306 = cljs.core.chunk_first.call(null,seq__34287_34305__$1);
var G__34307 = cljs.core.chunk_rest.call(null,seq__34287_34305__$1);
var G__34308 = c__28890__auto___34306;
var G__34309 = cljs.core.count.call(null,c__28890__auto___34306);
var G__34310 = (0);
seq__34287_34295 = G__34307;
chunk__34288_34296 = G__34308;
count__34289_34297 = G__34309;
i__34290_34298 = G__34310;
continue;
} else {
var req_34311 = cljs.core.first.call(null,seq__34287_34305__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34311,prov);

var G__34312 = cljs.core.next.call(null,seq__34287_34305__$1);
var G__34313 = null;
var G__34314 = (0);
var G__34315 = (0);
seq__34287_34295 = G__34312;
chunk__34288_34296 = G__34313;
count__34289_34297 = G__34314;
i__34290_34298 = G__34315;
continue;
}
} else {
}
}
break;
}

var G__34316 = seq__34283;
var G__34317 = chunk__34284;
var G__34318 = count__34285;
var G__34319 = (i__34286 + (1));
seq__34283 = G__34316;
chunk__34284 = G__34317;
count__34285 = G__34318;
i__34286 = G__34319;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34283);
if(temp__4657__auto__){
var seq__34283__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34283__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__34283__$1);
var G__34320 = cljs.core.chunk_rest.call(null,seq__34283__$1);
var G__34321 = c__28890__auto__;
var G__34322 = cljs.core.count.call(null,c__28890__auto__);
var G__34323 = (0);
seq__34283 = G__34320;
chunk__34284 = G__34321;
count__34285 = G__34322;
i__34286 = G__34323;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34283__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34291_34324 = cljs.core.seq.call(null,requires);
var chunk__34292_34325 = null;
var count__34293_34326 = (0);
var i__34294_34327 = (0);
while(true){
if((i__34294_34327 < count__34293_34326)){
var req_34328 = cljs.core._nth.call(null,chunk__34292_34325,i__34294_34327);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34328,prov);

var G__34329 = seq__34291_34324;
var G__34330 = chunk__34292_34325;
var G__34331 = count__34293_34326;
var G__34332 = (i__34294_34327 + (1));
seq__34291_34324 = G__34329;
chunk__34292_34325 = G__34330;
count__34293_34326 = G__34331;
i__34294_34327 = G__34332;
continue;
} else {
var temp__4657__auto___34333__$1 = cljs.core.seq.call(null,seq__34291_34324);
if(temp__4657__auto___34333__$1){
var seq__34291_34334__$1 = temp__4657__auto___34333__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34291_34334__$1)){
var c__28890__auto___34335 = cljs.core.chunk_first.call(null,seq__34291_34334__$1);
var G__34336 = cljs.core.chunk_rest.call(null,seq__34291_34334__$1);
var G__34337 = c__28890__auto___34335;
var G__34338 = cljs.core.count.call(null,c__28890__auto___34335);
var G__34339 = (0);
seq__34291_34324 = G__34336;
chunk__34292_34325 = G__34337;
count__34293_34326 = G__34338;
i__34294_34327 = G__34339;
continue;
} else {
var req_34340 = cljs.core.first.call(null,seq__34291_34334__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34340,prov);

var G__34341 = cljs.core.next.call(null,seq__34291_34334__$1);
var G__34342 = null;
var G__34343 = (0);
var G__34344 = (0);
seq__34291_34324 = G__34341;
chunk__34292_34325 = G__34342;
count__34293_34326 = G__34343;
i__34294_34327 = G__34344;
continue;
}
} else {
}
}
break;
}

var G__34345 = cljs.core.next.call(null,seq__34283__$1);
var G__34346 = null;
var G__34347 = (0);
var G__34348 = (0);
seq__34283 = G__34345;
chunk__34284 = G__34346;
count__34285 = G__34347;
i__34286 = G__34348;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34349_34353 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34350_34354 = null;
var count__34351_34355 = (0);
var i__34352_34356 = (0);
while(true){
if((i__34352_34356 < count__34351_34355)){
var ns_34357 = cljs.core._nth.call(null,chunk__34350_34354,i__34352_34356);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34357);

var G__34358 = seq__34349_34353;
var G__34359 = chunk__34350_34354;
var G__34360 = count__34351_34355;
var G__34361 = (i__34352_34356 + (1));
seq__34349_34353 = G__34358;
chunk__34350_34354 = G__34359;
count__34351_34355 = G__34360;
i__34352_34356 = G__34361;
continue;
} else {
var temp__4657__auto___34362 = cljs.core.seq.call(null,seq__34349_34353);
if(temp__4657__auto___34362){
var seq__34349_34363__$1 = temp__4657__auto___34362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34349_34363__$1)){
var c__28890__auto___34364 = cljs.core.chunk_first.call(null,seq__34349_34363__$1);
var G__34365 = cljs.core.chunk_rest.call(null,seq__34349_34363__$1);
var G__34366 = c__28890__auto___34364;
var G__34367 = cljs.core.count.call(null,c__28890__auto___34364);
var G__34368 = (0);
seq__34349_34353 = G__34365;
chunk__34350_34354 = G__34366;
count__34351_34355 = G__34367;
i__34352_34356 = G__34368;
continue;
} else {
var ns_34369 = cljs.core.first.call(null,seq__34349_34363__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34369);

var G__34370 = cljs.core.next.call(null,seq__34349_34363__$1);
var G__34371 = null;
var G__34372 = (0);
var G__34373 = (0);
seq__34349_34353 = G__34370;
chunk__34350_34354 = G__34371;
count__34351_34355 = G__34372;
i__34352_34356 = G__34373;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28051__auto__ = goog.require__;
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34374__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34375__i = 0, G__34375__a = new Array(arguments.length -  0);
while (G__34375__i < G__34375__a.length) {G__34375__a[G__34375__i] = arguments[G__34375__i + 0]; ++G__34375__i;}
  args = new cljs.core.IndexedSeq(G__34375__a,0,null);
} 
return G__34374__delegate.call(this,args);};
G__34374.cljs$lang$maxFixedArity = 0;
G__34374.cljs$lang$applyTo = (function (arglist__34376){
var args = cljs.core.seq(arglist__34376);
return G__34374__delegate(args);
});
G__34374.cljs$core$IFn$_invoke$arity$variadic = G__34374__delegate;
return G__34374;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__34377_SHARP_,p2__34378_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34377_SHARP_)].join('')),p2__34378_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__34379_SHARP_,p2__34380_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34379_SHARP_)].join(''),p2__34380_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34381 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34381.addCallback(((function (G__34381){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34381))
);

G__34381.addErrback(((function (G__34381){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34381))
);

return G__34381;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34382){if((e34382 instanceof Error)){
var e = e34382;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34382;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34383){if((e34383 instanceof Error)){
var e = e34383;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34383;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34384 = cljs.core._EQ_;
var expr__34385 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34384.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34385))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34384.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34385))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34384.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34385))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__34384,expr__34385){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34384,expr__34385))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34387,callback){
var map__34388 = p__34387;
var map__34388__$1 = ((((!((map__34388 == null)))?((((map__34388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34388):map__34388);
var file_msg = map__34388__$1;
var request_url = cljs.core.get.call(null,map__34388__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__28051__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34388,map__34388__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34388,map__34388__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32219__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto__){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto__){
return (function (state_34428){
var state_val_34429 = (state_34428[(1)]);
if((state_val_34429 === (7))){
var inst_34424 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
var statearr_34430_34457 = state_34428__$1;
(statearr_34430_34457[(2)] = inst_34424);

(statearr_34430_34457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (1))){
var state_34428__$1 = state_34428;
var statearr_34431_34458 = state_34428__$1;
(statearr_34431_34458[(2)] = null);

(statearr_34431_34458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (4))){
var inst_34392 = (state_34428[(7)]);
var inst_34392__$1 = (state_34428[(2)]);
var state_34428__$1 = (function (){var statearr_34432 = state_34428;
(statearr_34432[(7)] = inst_34392__$1);

return statearr_34432;
})();
if(cljs.core.truth_(inst_34392__$1)){
var statearr_34433_34459 = state_34428__$1;
(statearr_34433_34459[(1)] = (5));

} else {
var statearr_34434_34460 = state_34428__$1;
(statearr_34434_34460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (15))){
var inst_34409 = (state_34428[(8)]);
var inst_34406 = (state_34428[(9)]);
var inst_34411 = inst_34409.call(null,inst_34406);
var state_34428__$1 = state_34428;
var statearr_34435_34461 = state_34428__$1;
(statearr_34435_34461[(2)] = inst_34411);

(statearr_34435_34461[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (13))){
var inst_34418 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
var statearr_34436_34462 = state_34428__$1;
(statearr_34436_34462[(2)] = inst_34418);

(statearr_34436_34462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (6))){
var state_34428__$1 = state_34428;
var statearr_34437_34463 = state_34428__$1;
(statearr_34437_34463[(2)] = null);

(statearr_34437_34463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (17))){
var inst_34415 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
var statearr_34438_34464 = state_34428__$1;
(statearr_34438_34464[(2)] = inst_34415);

(statearr_34438_34464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (3))){
var inst_34426 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34428__$1,inst_34426);
} else {
if((state_val_34429 === (12))){
var state_34428__$1 = state_34428;
var statearr_34439_34465 = state_34428__$1;
(statearr_34439_34465[(2)] = null);

(statearr_34439_34465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (2))){
var state_34428__$1 = state_34428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34428__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34429 === (11))){
var inst_34397 = (state_34428[(10)]);
var inst_34404 = figwheel.client.file_reloading.blocking_load.call(null,inst_34397);
var state_34428__$1 = state_34428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34428__$1,(14),inst_34404);
} else {
if((state_val_34429 === (9))){
var inst_34397 = (state_34428[(10)]);
var state_34428__$1 = state_34428;
if(cljs.core.truth_(inst_34397)){
var statearr_34440_34466 = state_34428__$1;
(statearr_34440_34466[(1)] = (11));

} else {
var statearr_34441_34467 = state_34428__$1;
(statearr_34441_34467[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (5))){
var inst_34398 = (state_34428[(11)]);
var inst_34392 = (state_34428[(7)]);
var inst_34397 = cljs.core.nth.call(null,inst_34392,(0),null);
var inst_34398__$1 = cljs.core.nth.call(null,inst_34392,(1),null);
var state_34428__$1 = (function (){var statearr_34442 = state_34428;
(statearr_34442[(11)] = inst_34398__$1);

(statearr_34442[(10)] = inst_34397);

return statearr_34442;
})();
if(cljs.core.truth_(inst_34398__$1)){
var statearr_34443_34468 = state_34428__$1;
(statearr_34443_34468[(1)] = (8));

} else {
var statearr_34444_34469 = state_34428__$1;
(statearr_34444_34469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (14))){
var inst_34409 = (state_34428[(8)]);
var inst_34397 = (state_34428[(10)]);
var inst_34406 = (state_34428[(2)]);
var inst_34407 = console.log("Loading!",inst_34397);
var inst_34408 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34409__$1 = cljs.core.get.call(null,inst_34408,inst_34397);
var state_34428__$1 = (function (){var statearr_34445 = state_34428;
(statearr_34445[(12)] = inst_34407);

(statearr_34445[(8)] = inst_34409__$1);

(statearr_34445[(9)] = inst_34406);

return statearr_34445;
})();
if(cljs.core.truth_(inst_34409__$1)){
var statearr_34446_34470 = state_34428__$1;
(statearr_34446_34470[(1)] = (15));

} else {
var statearr_34447_34471 = state_34428__$1;
(statearr_34447_34471[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (16))){
var inst_34406 = (state_34428[(9)]);
var inst_34413 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34406);
var state_34428__$1 = state_34428;
var statearr_34448_34472 = state_34428__$1;
(statearr_34448_34472[(2)] = inst_34413);

(statearr_34448_34472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (10))){
var inst_34420 = (state_34428[(2)]);
var state_34428__$1 = (function (){var statearr_34449 = state_34428;
(statearr_34449[(13)] = inst_34420);

return statearr_34449;
})();
var statearr_34450_34473 = state_34428__$1;
(statearr_34450_34473[(2)] = null);

(statearr_34450_34473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (8))){
var inst_34398 = (state_34428[(11)]);
var inst_34400 = console.log("Evaling!",inst_34398);
var inst_34401 = eval(inst_34398);
var state_34428__$1 = (function (){var statearr_34451 = state_34428;
(statearr_34451[(14)] = inst_34400);

return statearr_34451;
})();
var statearr_34452_34474 = state_34428__$1;
(statearr_34452_34474[(2)] = inst_34401);

(statearr_34452_34474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32219__auto__))
;
return ((function (switch__32131__auto__,c__32219__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32132__auto__ = null;
var figwheel$client$file_reloading$state_machine__32132__auto____0 = (function (){
var statearr_34453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34453[(0)] = figwheel$client$file_reloading$state_machine__32132__auto__);

(statearr_34453[(1)] = (1));

return statearr_34453;
});
var figwheel$client$file_reloading$state_machine__32132__auto____1 = (function (state_34428){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_34428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e34454){if((e34454 instanceof Object)){
var ex__32135__auto__ = e34454;
var statearr_34455_34475 = state_34428;
(statearr_34455_34475[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34476 = state_34428;
state_34428 = G__34476;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32132__auto__ = function(state_34428){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32132__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32132__auto____1.call(this,state_34428);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32132__auto____0;
figwheel$client$file_reloading$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32132__auto____1;
return figwheel$client$file_reloading$state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto__))
})();
var state__32221__auto__ = (function (){var statearr_34456 = f__32220__auto__.call(null);
(statearr_34456[(6)] = c__32219__auto__);

return statearr_34456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto__))
);

return c__32219__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__34478 = arguments.length;
switch (G__34478) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34480,callback){
var map__34481 = p__34480;
var map__34481__$1 = ((((!((map__34481 == null)))?((((map__34481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34481):map__34481);
var file_msg = map__34481__$1;
var namespace = cljs.core.get.call(null,map__34481__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34481,map__34481__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34481,map__34481__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34483){
var map__34484 = p__34483;
var map__34484__$1 = ((((!((map__34484 == null)))?((((map__34484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34484):map__34484);
var file_msg = map__34484__$1;
var namespace = cljs.core.get.call(null,map__34484__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34486){
var map__34487 = p__34486;
var map__34487__$1 = ((((!((map__34487 == null)))?((((map__34487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34487):map__34487);
var file_msg = map__34487__$1;
var namespace = cljs.core.get.call(null,map__34487__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28039__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28039__auto__){
var or__28051__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
var or__28051__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28051__auto____$1)){
return or__28051__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28039__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34489,callback){
var map__34490 = p__34489;
var map__34490__$1 = ((((!((map__34490 == null)))?((((map__34490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34490):map__34490);
var file_msg = map__34490__$1;
var request_url = cljs.core.get.call(null,map__34490__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34490__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32219__auto___34540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___34540,out){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___34540,out){
return (function (state_34525){
var state_val_34526 = (state_34525[(1)]);
if((state_val_34526 === (1))){
var inst_34499 = cljs.core.seq.call(null,files);
var inst_34500 = cljs.core.first.call(null,inst_34499);
var inst_34501 = cljs.core.next.call(null,inst_34499);
var inst_34502 = files;
var state_34525__$1 = (function (){var statearr_34527 = state_34525;
(statearr_34527[(7)] = inst_34501);

(statearr_34527[(8)] = inst_34502);

(statearr_34527[(9)] = inst_34500);

return statearr_34527;
})();
var statearr_34528_34541 = state_34525__$1;
(statearr_34528_34541[(2)] = null);

(statearr_34528_34541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (2))){
var inst_34502 = (state_34525[(8)]);
var inst_34508 = (state_34525[(10)]);
var inst_34507 = cljs.core.seq.call(null,inst_34502);
var inst_34508__$1 = cljs.core.first.call(null,inst_34507);
var inst_34509 = cljs.core.next.call(null,inst_34507);
var inst_34510 = (inst_34508__$1 == null);
var inst_34511 = cljs.core.not.call(null,inst_34510);
var state_34525__$1 = (function (){var statearr_34529 = state_34525;
(statearr_34529[(11)] = inst_34509);

(statearr_34529[(10)] = inst_34508__$1);

return statearr_34529;
})();
if(inst_34511){
var statearr_34530_34542 = state_34525__$1;
(statearr_34530_34542[(1)] = (4));

} else {
var statearr_34531_34543 = state_34525__$1;
(statearr_34531_34543[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (3))){
var inst_34523 = (state_34525[(2)]);
var state_34525__$1 = state_34525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34525__$1,inst_34523);
} else {
if((state_val_34526 === (4))){
var inst_34508 = (state_34525[(10)]);
var inst_34513 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34508);
var state_34525__$1 = state_34525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34525__$1,(7),inst_34513);
} else {
if((state_val_34526 === (5))){
var inst_34519 = cljs.core.async.close_BANG_.call(null,out);
var state_34525__$1 = state_34525;
var statearr_34532_34544 = state_34525__$1;
(statearr_34532_34544[(2)] = inst_34519);

(statearr_34532_34544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (6))){
var inst_34521 = (state_34525[(2)]);
var state_34525__$1 = state_34525;
var statearr_34533_34545 = state_34525__$1;
(statearr_34533_34545[(2)] = inst_34521);

(statearr_34533_34545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (7))){
var inst_34509 = (state_34525[(11)]);
var inst_34515 = (state_34525[(2)]);
var inst_34516 = cljs.core.async.put_BANG_.call(null,out,inst_34515);
var inst_34502 = inst_34509;
var state_34525__$1 = (function (){var statearr_34534 = state_34525;
(statearr_34534[(12)] = inst_34516);

(statearr_34534[(8)] = inst_34502);

return statearr_34534;
})();
var statearr_34535_34546 = state_34525__$1;
(statearr_34535_34546[(2)] = null);

(statearr_34535_34546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__32219__auto___34540,out))
;
return ((function (switch__32131__auto__,c__32219__auto___34540,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32132__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32132__auto____0 = (function (){
var statearr_34536 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34536[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32132__auto__);

(statearr_34536[(1)] = (1));

return statearr_34536;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32132__auto____1 = (function (state_34525){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_34525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e34537){if((e34537 instanceof Object)){
var ex__32135__auto__ = e34537;
var statearr_34538_34547 = state_34525;
(statearr_34538_34547[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34548 = state_34525;
state_34525 = G__34548;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32132__auto__ = function(state_34525){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32132__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32132__auto____1.call(this,state_34525);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32132__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32132__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___34540,out))
})();
var state__32221__auto__ = (function (){var statearr_34539 = f__32220__auto__.call(null);
(statearr_34539[(6)] = c__32219__auto___34540);

return statearr_34539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___34540,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34549,opts){
var map__34550 = p__34549;
var map__34550__$1 = ((((!((map__34550 == null)))?((((map__34550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34550):map__34550);
var eval_body = cljs.core.get.call(null,map__34550__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34550__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28039__auto__ = eval_body;
if(cljs.core.truth_(and__28039__auto__)){
return typeof eval_body === 'string';
} else {
return and__28039__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34552){var e = e34552;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34553_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34553_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34554){
var vec__34555 = p__34554;
var k = cljs.core.nth.call(null,vec__34555,(0),null);
var v = cljs.core.nth.call(null,vec__34555,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34558){
var vec__34559 = p__34558;
var k = cljs.core.nth.call(null,vec__34559,(0),null);
var v = cljs.core.nth.call(null,vec__34559,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34565,p__34566){
var map__34567 = p__34565;
var map__34567__$1 = ((((!((map__34567 == null)))?((((map__34567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34567):map__34567);
var opts = map__34567__$1;
var before_jsload = cljs.core.get.call(null,map__34567__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34567__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34567__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34568 = p__34566;
var map__34568__$1 = ((((!((map__34568 == null)))?((((map__34568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34568):map__34568);
var msg = map__34568__$1;
var files = cljs.core.get.call(null,map__34568__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34568__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34568__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32219__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34722){
var state_val_34723 = (state_34722[(1)]);
if((state_val_34723 === (7))){
var inst_34584 = (state_34722[(7)]);
var inst_34585 = (state_34722[(8)]);
var inst_34583 = (state_34722[(9)]);
var inst_34582 = (state_34722[(10)]);
var inst_34590 = cljs.core._nth.call(null,inst_34583,inst_34585);
var inst_34591 = figwheel.client.file_reloading.eval_body.call(null,inst_34590,opts);
var inst_34592 = (inst_34585 + (1));
var tmp34724 = inst_34584;
var tmp34725 = inst_34583;
var tmp34726 = inst_34582;
var inst_34582__$1 = tmp34726;
var inst_34583__$1 = tmp34725;
var inst_34584__$1 = tmp34724;
var inst_34585__$1 = inst_34592;
var state_34722__$1 = (function (){var statearr_34727 = state_34722;
(statearr_34727[(11)] = inst_34591);

(statearr_34727[(7)] = inst_34584__$1);

(statearr_34727[(8)] = inst_34585__$1);

(statearr_34727[(9)] = inst_34583__$1);

(statearr_34727[(10)] = inst_34582__$1);

return statearr_34727;
})();
var statearr_34728_34811 = state_34722__$1;
(statearr_34728_34811[(2)] = null);

(statearr_34728_34811[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (20))){
var inst_34625 = (state_34722[(12)]);
var inst_34633 = figwheel.client.file_reloading.sort_files.call(null,inst_34625);
var state_34722__$1 = state_34722;
var statearr_34729_34812 = state_34722__$1;
(statearr_34729_34812[(2)] = inst_34633);

(statearr_34729_34812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (27))){
var state_34722__$1 = state_34722;
var statearr_34730_34813 = state_34722__$1;
(statearr_34730_34813[(2)] = null);

(statearr_34730_34813[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (1))){
var inst_34574 = (state_34722[(13)]);
var inst_34571 = before_jsload.call(null,files);
var inst_34572 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34573 = (function (){return ((function (inst_34574,inst_34571,inst_34572,state_val_34723,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34562_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34562_SHARP_);
});
;})(inst_34574,inst_34571,inst_34572,state_val_34723,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34574__$1 = cljs.core.filter.call(null,inst_34573,files);
var inst_34575 = cljs.core.not_empty.call(null,inst_34574__$1);
var state_34722__$1 = (function (){var statearr_34731 = state_34722;
(statearr_34731[(14)] = inst_34571);

(statearr_34731[(13)] = inst_34574__$1);

(statearr_34731[(15)] = inst_34572);

return statearr_34731;
})();
if(cljs.core.truth_(inst_34575)){
var statearr_34732_34814 = state_34722__$1;
(statearr_34732_34814[(1)] = (2));

} else {
var statearr_34733_34815 = state_34722__$1;
(statearr_34733_34815[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (24))){
var state_34722__$1 = state_34722;
var statearr_34734_34816 = state_34722__$1;
(statearr_34734_34816[(2)] = null);

(statearr_34734_34816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (39))){
var inst_34675 = (state_34722[(16)]);
var state_34722__$1 = state_34722;
var statearr_34735_34817 = state_34722__$1;
(statearr_34735_34817[(2)] = inst_34675);

(statearr_34735_34817[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (46))){
var inst_34717 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34736_34818 = state_34722__$1;
(statearr_34736_34818[(2)] = inst_34717);

(statearr_34736_34818[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (4))){
var inst_34619 = (state_34722[(2)]);
var inst_34620 = cljs.core.List.EMPTY;
var inst_34621 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34620);
var inst_34622 = (function (){return ((function (inst_34619,inst_34620,inst_34621,state_val_34723,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34563_SHARP_){
var and__28039__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34563_SHARP_);
if(cljs.core.truth_(and__28039__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34563_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34563_SHARP_)));
} else {
return and__28039__auto__;
}
});
;})(inst_34619,inst_34620,inst_34621,state_val_34723,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34623 = cljs.core.filter.call(null,inst_34622,files);
var inst_34624 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34625 = cljs.core.concat.call(null,inst_34623,inst_34624);
var state_34722__$1 = (function (){var statearr_34737 = state_34722;
(statearr_34737[(17)] = inst_34621);

(statearr_34737[(12)] = inst_34625);

(statearr_34737[(18)] = inst_34619);

return statearr_34737;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34738_34819 = state_34722__$1;
(statearr_34738_34819[(1)] = (16));

} else {
var statearr_34739_34820 = state_34722__$1;
(statearr_34739_34820[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (15))){
var inst_34609 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34740_34821 = state_34722__$1;
(statearr_34740_34821[(2)] = inst_34609);

(statearr_34740_34821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (21))){
var inst_34635 = (state_34722[(19)]);
var inst_34635__$1 = (state_34722[(2)]);
var inst_34636 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34635__$1);
var state_34722__$1 = (function (){var statearr_34741 = state_34722;
(statearr_34741[(19)] = inst_34635__$1);

return statearr_34741;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34722__$1,(22),inst_34636);
} else {
if((state_val_34723 === (31))){
var inst_34720 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34722__$1,inst_34720);
} else {
if((state_val_34723 === (32))){
var inst_34675 = (state_34722[(16)]);
var inst_34680 = inst_34675.cljs$lang$protocol_mask$partition0$;
var inst_34681 = (inst_34680 & (64));
var inst_34682 = inst_34675.cljs$core$ISeq$;
var inst_34683 = (cljs.core.PROTOCOL_SENTINEL === inst_34682);
var inst_34684 = (inst_34681) || (inst_34683);
var state_34722__$1 = state_34722;
if(cljs.core.truth_(inst_34684)){
var statearr_34742_34822 = state_34722__$1;
(statearr_34742_34822[(1)] = (35));

} else {
var statearr_34743_34823 = state_34722__$1;
(statearr_34743_34823[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (40))){
var inst_34697 = (state_34722[(20)]);
var inst_34696 = (state_34722[(2)]);
var inst_34697__$1 = cljs.core.get.call(null,inst_34696,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34698 = cljs.core.get.call(null,inst_34696,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34699 = cljs.core.not_empty.call(null,inst_34697__$1);
var state_34722__$1 = (function (){var statearr_34744 = state_34722;
(statearr_34744[(21)] = inst_34698);

(statearr_34744[(20)] = inst_34697__$1);

return statearr_34744;
})();
if(cljs.core.truth_(inst_34699)){
var statearr_34745_34824 = state_34722__$1;
(statearr_34745_34824[(1)] = (41));

} else {
var statearr_34746_34825 = state_34722__$1;
(statearr_34746_34825[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (33))){
var state_34722__$1 = state_34722;
var statearr_34747_34826 = state_34722__$1;
(statearr_34747_34826[(2)] = false);

(statearr_34747_34826[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (13))){
var inst_34595 = (state_34722[(22)]);
var inst_34599 = cljs.core.chunk_first.call(null,inst_34595);
var inst_34600 = cljs.core.chunk_rest.call(null,inst_34595);
var inst_34601 = cljs.core.count.call(null,inst_34599);
var inst_34582 = inst_34600;
var inst_34583 = inst_34599;
var inst_34584 = inst_34601;
var inst_34585 = (0);
var state_34722__$1 = (function (){var statearr_34748 = state_34722;
(statearr_34748[(7)] = inst_34584);

(statearr_34748[(8)] = inst_34585);

(statearr_34748[(9)] = inst_34583);

(statearr_34748[(10)] = inst_34582);

return statearr_34748;
})();
var statearr_34749_34827 = state_34722__$1;
(statearr_34749_34827[(2)] = null);

(statearr_34749_34827[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (22))){
var inst_34635 = (state_34722[(19)]);
var inst_34639 = (state_34722[(23)]);
var inst_34643 = (state_34722[(24)]);
var inst_34638 = (state_34722[(25)]);
var inst_34638__$1 = (state_34722[(2)]);
var inst_34639__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34638__$1);
var inst_34640 = (function (){var all_files = inst_34635;
var res_SINGLEQUOTE_ = inst_34638__$1;
var res = inst_34639__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34635,inst_34639,inst_34643,inst_34638,inst_34638__$1,inst_34639__$1,state_val_34723,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34564_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34564_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34635,inst_34639,inst_34643,inst_34638,inst_34638__$1,inst_34639__$1,state_val_34723,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34641 = cljs.core.filter.call(null,inst_34640,inst_34638__$1);
var inst_34642 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34643__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34642);
var inst_34644 = cljs.core.not_empty.call(null,inst_34643__$1);
var state_34722__$1 = (function (){var statearr_34750 = state_34722;
(statearr_34750[(23)] = inst_34639__$1);

(statearr_34750[(24)] = inst_34643__$1);

(statearr_34750[(25)] = inst_34638__$1);

(statearr_34750[(26)] = inst_34641);

return statearr_34750;
})();
if(cljs.core.truth_(inst_34644)){
var statearr_34751_34828 = state_34722__$1;
(statearr_34751_34828[(1)] = (23));

} else {
var statearr_34752_34829 = state_34722__$1;
(statearr_34752_34829[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (36))){
var state_34722__$1 = state_34722;
var statearr_34753_34830 = state_34722__$1;
(statearr_34753_34830[(2)] = false);

(statearr_34753_34830[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (41))){
var inst_34697 = (state_34722[(20)]);
var inst_34701 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34702 = cljs.core.map.call(null,inst_34701,inst_34697);
var inst_34703 = cljs.core.pr_str.call(null,inst_34702);
var inst_34704 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34703)].join('');
var inst_34705 = figwheel.client.utils.log.call(null,inst_34704);
var state_34722__$1 = state_34722;
var statearr_34754_34831 = state_34722__$1;
(statearr_34754_34831[(2)] = inst_34705);

(statearr_34754_34831[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (43))){
var inst_34698 = (state_34722[(21)]);
var inst_34708 = (state_34722[(2)]);
var inst_34709 = cljs.core.not_empty.call(null,inst_34698);
var state_34722__$1 = (function (){var statearr_34755 = state_34722;
(statearr_34755[(27)] = inst_34708);

return statearr_34755;
})();
if(cljs.core.truth_(inst_34709)){
var statearr_34756_34832 = state_34722__$1;
(statearr_34756_34832[(1)] = (44));

} else {
var statearr_34757_34833 = state_34722__$1;
(statearr_34757_34833[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (29))){
var inst_34635 = (state_34722[(19)]);
var inst_34639 = (state_34722[(23)]);
var inst_34675 = (state_34722[(16)]);
var inst_34643 = (state_34722[(24)]);
var inst_34638 = (state_34722[(25)]);
var inst_34641 = (state_34722[(26)]);
var inst_34671 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34674 = (function (){var all_files = inst_34635;
var res_SINGLEQUOTE_ = inst_34638;
var res = inst_34639;
var files_not_loaded = inst_34641;
var dependencies_that_loaded = inst_34643;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34635,inst_34639,inst_34675,inst_34643,inst_34638,inst_34641,inst_34671,state_val_34723,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34673){
var map__34758 = p__34673;
var map__34758__$1 = ((((!((map__34758 == null)))?((((map__34758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34758):map__34758);
var namespace = cljs.core.get.call(null,map__34758__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34635,inst_34639,inst_34675,inst_34643,inst_34638,inst_34641,inst_34671,state_val_34723,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34675__$1 = cljs.core.group_by.call(null,inst_34674,inst_34641);
var inst_34677 = (inst_34675__$1 == null);
var inst_34678 = cljs.core.not.call(null,inst_34677);
var state_34722__$1 = (function (){var statearr_34760 = state_34722;
(statearr_34760[(28)] = inst_34671);

(statearr_34760[(16)] = inst_34675__$1);

return statearr_34760;
})();
if(inst_34678){
var statearr_34761_34834 = state_34722__$1;
(statearr_34761_34834[(1)] = (32));

} else {
var statearr_34762_34835 = state_34722__$1;
(statearr_34762_34835[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (44))){
var inst_34698 = (state_34722[(21)]);
var inst_34711 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34698);
var inst_34712 = cljs.core.pr_str.call(null,inst_34711);
var inst_34713 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34712)].join('');
var inst_34714 = figwheel.client.utils.log.call(null,inst_34713);
var state_34722__$1 = state_34722;
var statearr_34763_34836 = state_34722__$1;
(statearr_34763_34836[(2)] = inst_34714);

(statearr_34763_34836[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (6))){
var inst_34616 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34764_34837 = state_34722__$1;
(statearr_34764_34837[(2)] = inst_34616);

(statearr_34764_34837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (28))){
var inst_34641 = (state_34722[(26)]);
var inst_34668 = (state_34722[(2)]);
var inst_34669 = cljs.core.not_empty.call(null,inst_34641);
var state_34722__$1 = (function (){var statearr_34765 = state_34722;
(statearr_34765[(29)] = inst_34668);

return statearr_34765;
})();
if(cljs.core.truth_(inst_34669)){
var statearr_34766_34838 = state_34722__$1;
(statearr_34766_34838[(1)] = (29));

} else {
var statearr_34767_34839 = state_34722__$1;
(statearr_34767_34839[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (25))){
var inst_34639 = (state_34722[(23)]);
var inst_34655 = (state_34722[(2)]);
var inst_34656 = cljs.core.not_empty.call(null,inst_34639);
var state_34722__$1 = (function (){var statearr_34768 = state_34722;
(statearr_34768[(30)] = inst_34655);

return statearr_34768;
})();
if(cljs.core.truth_(inst_34656)){
var statearr_34769_34840 = state_34722__$1;
(statearr_34769_34840[(1)] = (26));

} else {
var statearr_34770_34841 = state_34722__$1;
(statearr_34770_34841[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (34))){
var inst_34691 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
if(cljs.core.truth_(inst_34691)){
var statearr_34771_34842 = state_34722__$1;
(statearr_34771_34842[(1)] = (38));

} else {
var statearr_34772_34843 = state_34722__$1;
(statearr_34772_34843[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (17))){
var state_34722__$1 = state_34722;
var statearr_34773_34844 = state_34722__$1;
(statearr_34773_34844[(2)] = recompile_dependents);

(statearr_34773_34844[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (3))){
var state_34722__$1 = state_34722;
var statearr_34774_34845 = state_34722__$1;
(statearr_34774_34845[(2)] = null);

(statearr_34774_34845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (12))){
var inst_34612 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34775_34846 = state_34722__$1;
(statearr_34775_34846[(2)] = inst_34612);

(statearr_34775_34846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (2))){
var inst_34574 = (state_34722[(13)]);
var inst_34581 = cljs.core.seq.call(null,inst_34574);
var inst_34582 = inst_34581;
var inst_34583 = null;
var inst_34584 = (0);
var inst_34585 = (0);
var state_34722__$1 = (function (){var statearr_34776 = state_34722;
(statearr_34776[(7)] = inst_34584);

(statearr_34776[(8)] = inst_34585);

(statearr_34776[(9)] = inst_34583);

(statearr_34776[(10)] = inst_34582);

return statearr_34776;
})();
var statearr_34777_34847 = state_34722__$1;
(statearr_34777_34847[(2)] = null);

(statearr_34777_34847[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (23))){
var inst_34635 = (state_34722[(19)]);
var inst_34639 = (state_34722[(23)]);
var inst_34643 = (state_34722[(24)]);
var inst_34638 = (state_34722[(25)]);
var inst_34641 = (state_34722[(26)]);
var inst_34646 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34648 = (function (){var all_files = inst_34635;
var res_SINGLEQUOTE_ = inst_34638;
var res = inst_34639;
var files_not_loaded = inst_34641;
var dependencies_that_loaded = inst_34643;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34635,inst_34639,inst_34643,inst_34638,inst_34641,inst_34646,state_val_34723,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34647){
var map__34778 = p__34647;
var map__34778__$1 = ((((!((map__34778 == null)))?((((map__34778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34778):map__34778);
var request_url = cljs.core.get.call(null,map__34778__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34635,inst_34639,inst_34643,inst_34638,inst_34641,inst_34646,state_val_34723,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34649 = cljs.core.reverse.call(null,inst_34643);
var inst_34650 = cljs.core.map.call(null,inst_34648,inst_34649);
var inst_34651 = cljs.core.pr_str.call(null,inst_34650);
var inst_34652 = figwheel.client.utils.log.call(null,inst_34651);
var state_34722__$1 = (function (){var statearr_34780 = state_34722;
(statearr_34780[(31)] = inst_34646);

return statearr_34780;
})();
var statearr_34781_34848 = state_34722__$1;
(statearr_34781_34848[(2)] = inst_34652);

(statearr_34781_34848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (35))){
var state_34722__$1 = state_34722;
var statearr_34782_34849 = state_34722__$1;
(statearr_34782_34849[(2)] = true);

(statearr_34782_34849[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (19))){
var inst_34625 = (state_34722[(12)]);
var inst_34631 = figwheel.client.file_reloading.expand_files.call(null,inst_34625);
var state_34722__$1 = state_34722;
var statearr_34783_34850 = state_34722__$1;
(statearr_34783_34850[(2)] = inst_34631);

(statearr_34783_34850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (11))){
var state_34722__$1 = state_34722;
var statearr_34784_34851 = state_34722__$1;
(statearr_34784_34851[(2)] = null);

(statearr_34784_34851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (9))){
var inst_34614 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34785_34852 = state_34722__$1;
(statearr_34785_34852[(2)] = inst_34614);

(statearr_34785_34852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (5))){
var inst_34584 = (state_34722[(7)]);
var inst_34585 = (state_34722[(8)]);
var inst_34587 = (inst_34585 < inst_34584);
var inst_34588 = inst_34587;
var state_34722__$1 = state_34722;
if(cljs.core.truth_(inst_34588)){
var statearr_34786_34853 = state_34722__$1;
(statearr_34786_34853[(1)] = (7));

} else {
var statearr_34787_34854 = state_34722__$1;
(statearr_34787_34854[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (14))){
var inst_34595 = (state_34722[(22)]);
var inst_34604 = cljs.core.first.call(null,inst_34595);
var inst_34605 = figwheel.client.file_reloading.eval_body.call(null,inst_34604,opts);
var inst_34606 = cljs.core.next.call(null,inst_34595);
var inst_34582 = inst_34606;
var inst_34583 = null;
var inst_34584 = (0);
var inst_34585 = (0);
var state_34722__$1 = (function (){var statearr_34788 = state_34722;
(statearr_34788[(7)] = inst_34584);

(statearr_34788[(32)] = inst_34605);

(statearr_34788[(8)] = inst_34585);

(statearr_34788[(9)] = inst_34583);

(statearr_34788[(10)] = inst_34582);

return statearr_34788;
})();
var statearr_34789_34855 = state_34722__$1;
(statearr_34789_34855[(2)] = null);

(statearr_34789_34855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (45))){
var state_34722__$1 = state_34722;
var statearr_34790_34856 = state_34722__$1;
(statearr_34790_34856[(2)] = null);

(statearr_34790_34856[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (26))){
var inst_34635 = (state_34722[(19)]);
var inst_34639 = (state_34722[(23)]);
var inst_34643 = (state_34722[(24)]);
var inst_34638 = (state_34722[(25)]);
var inst_34641 = (state_34722[(26)]);
var inst_34658 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34660 = (function (){var all_files = inst_34635;
var res_SINGLEQUOTE_ = inst_34638;
var res = inst_34639;
var files_not_loaded = inst_34641;
var dependencies_that_loaded = inst_34643;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34635,inst_34639,inst_34643,inst_34638,inst_34641,inst_34658,state_val_34723,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34659){
var map__34791 = p__34659;
var map__34791__$1 = ((((!((map__34791 == null)))?((((map__34791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34791):map__34791);
var namespace = cljs.core.get.call(null,map__34791__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34791__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34635,inst_34639,inst_34643,inst_34638,inst_34641,inst_34658,state_val_34723,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34661 = cljs.core.map.call(null,inst_34660,inst_34639);
var inst_34662 = cljs.core.pr_str.call(null,inst_34661);
var inst_34663 = figwheel.client.utils.log.call(null,inst_34662);
var inst_34664 = (function (){var all_files = inst_34635;
var res_SINGLEQUOTE_ = inst_34638;
var res = inst_34639;
var files_not_loaded = inst_34641;
var dependencies_that_loaded = inst_34643;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34635,inst_34639,inst_34643,inst_34638,inst_34641,inst_34658,inst_34660,inst_34661,inst_34662,inst_34663,state_val_34723,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34635,inst_34639,inst_34643,inst_34638,inst_34641,inst_34658,inst_34660,inst_34661,inst_34662,inst_34663,state_val_34723,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34665 = setTimeout(inst_34664,(10));
var state_34722__$1 = (function (){var statearr_34793 = state_34722;
(statearr_34793[(33)] = inst_34663);

(statearr_34793[(34)] = inst_34658);

return statearr_34793;
})();
var statearr_34794_34857 = state_34722__$1;
(statearr_34794_34857[(2)] = inst_34665);

(statearr_34794_34857[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (16))){
var state_34722__$1 = state_34722;
var statearr_34795_34858 = state_34722__$1;
(statearr_34795_34858[(2)] = reload_dependents);

(statearr_34795_34858[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (38))){
var inst_34675 = (state_34722[(16)]);
var inst_34693 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34675);
var state_34722__$1 = state_34722;
var statearr_34796_34859 = state_34722__$1;
(statearr_34796_34859[(2)] = inst_34693);

(statearr_34796_34859[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (30))){
var state_34722__$1 = state_34722;
var statearr_34797_34860 = state_34722__$1;
(statearr_34797_34860[(2)] = null);

(statearr_34797_34860[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (10))){
var inst_34595 = (state_34722[(22)]);
var inst_34597 = cljs.core.chunked_seq_QMARK_.call(null,inst_34595);
var state_34722__$1 = state_34722;
if(inst_34597){
var statearr_34798_34861 = state_34722__$1;
(statearr_34798_34861[(1)] = (13));

} else {
var statearr_34799_34862 = state_34722__$1;
(statearr_34799_34862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (18))){
var inst_34629 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
if(cljs.core.truth_(inst_34629)){
var statearr_34800_34863 = state_34722__$1;
(statearr_34800_34863[(1)] = (19));

} else {
var statearr_34801_34864 = state_34722__$1;
(statearr_34801_34864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (42))){
var state_34722__$1 = state_34722;
var statearr_34802_34865 = state_34722__$1;
(statearr_34802_34865[(2)] = null);

(statearr_34802_34865[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (37))){
var inst_34688 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34803_34866 = state_34722__$1;
(statearr_34803_34866[(2)] = inst_34688);

(statearr_34803_34866[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (8))){
var inst_34595 = (state_34722[(22)]);
var inst_34582 = (state_34722[(10)]);
var inst_34595__$1 = cljs.core.seq.call(null,inst_34582);
var state_34722__$1 = (function (){var statearr_34804 = state_34722;
(statearr_34804[(22)] = inst_34595__$1);

return statearr_34804;
})();
if(inst_34595__$1){
var statearr_34805_34867 = state_34722__$1;
(statearr_34805_34867[(1)] = (10));

} else {
var statearr_34806_34868 = state_34722__$1;
(statearr_34806_34868[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32131__auto__,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32132__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32132__auto____0 = (function (){
var statearr_34807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34807[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32132__auto__);

(statearr_34807[(1)] = (1));

return statearr_34807;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32132__auto____1 = (function (state_34722){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_34722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e34808){if((e34808 instanceof Object)){
var ex__32135__auto__ = e34808;
var statearr_34809_34869 = state_34722;
(statearr_34809_34869[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34870 = state_34722;
state_34722 = G__34870;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32132__auto__ = function(state_34722){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32132__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32132__auto____1.call(this,state_34722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32132__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32132__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32221__auto__ = (function (){var statearr_34810 = f__32220__auto__.call(null);
(statearr_34810[(6)] = c__32219__auto__);

return statearr_34810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto__,map__34567,map__34567__$1,opts,before_jsload,on_jsload,reload_dependents,map__34568,map__34568__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32219__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34873,link){
var map__34874 = p__34873;
var map__34874__$1 = ((((!((map__34874 == null)))?((((map__34874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34874):map__34874);
var file = cljs.core.get.call(null,map__34874__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34874,map__34874__$1,file){
return (function (p1__34871_SHARP_,p2__34872_SHARP_){
if(cljs.core._EQ_.call(null,p1__34871_SHARP_,p2__34872_SHARP_)){
return p1__34871_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34874,map__34874__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34877){
var map__34878 = p__34877;
var map__34878__$1 = ((((!((map__34878 == null)))?((((map__34878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34878):map__34878);
var match_length = cljs.core.get.call(null,map__34878__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34878__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34876_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34876_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34880_SHARP_,p2__34881_SHARP_){
return cljs.core.assoc.call(null,p1__34880_SHARP_,cljs.core.get.call(null,p2__34881_SHARP_,key),p2__34881_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34882 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34882);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34882);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34883,p__34884){
var map__34885 = p__34883;
var map__34885__$1 = ((((!((map__34885 == null)))?((((map__34885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34885):map__34885);
var on_cssload = cljs.core.get.call(null,map__34885__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34886 = p__34884;
var map__34886__$1 = ((((!((map__34886 == null)))?((((map__34886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34886):map__34886);
var files_msg = map__34886__$1;
var files = cljs.core.get.call(null,map__34886__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1511221097464
