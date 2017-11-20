// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e35985){if((e35985 instanceof Error)){
var e = e35985;
return "Error: Unable to stringify";
} else {
throw e35985;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35988 = arguments.length;
switch (G__35988) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__35986_SHARP_){
if(typeof p1__35986_SHARP_ === 'string'){
return p1__35986_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__35986_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29229__auto__ = [];
var len__29222__auto___35991 = arguments.length;
var i__29223__auto___35992 = (0);
while(true){
if((i__29223__auto___35992 < len__29222__auto___35991)){
args__29229__auto__.push((arguments[i__29223__auto___35992]));

var G__35993 = (i__29223__auto___35992 + (1));
i__29223__auto___35992 = G__35993;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35990){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35990));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29229__auto__ = [];
var len__29222__auto___35995 = arguments.length;
var i__29223__auto___35996 = (0);
while(true){
if((i__29223__auto___35996 < len__29222__auto___35995)){
args__29229__auto__.push((arguments[i__29223__auto___35996]));

var G__35997 = (i__29223__auto___35996 + (1));
i__29223__auto___35996 = G__35997;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35994){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35994));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35998){
var map__35999 = p__35998;
var map__35999__$1 = ((((!((map__35999 == null)))?((((map__35999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35999):map__35999);
var message = cljs.core.get.call(null,map__35999__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35999__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28051__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28039__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28039__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28039__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32219__auto___36078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___36078,ch){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___36078,ch){
return (function (state_36050){
var state_val_36051 = (state_36050[(1)]);
if((state_val_36051 === (7))){
var inst_36046 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
var statearr_36052_36079 = state_36050__$1;
(statearr_36052_36079[(2)] = inst_36046);

(statearr_36052_36079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (1))){
var state_36050__$1 = state_36050;
var statearr_36053_36080 = state_36050__$1;
(statearr_36053_36080[(2)] = null);

(statearr_36053_36080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (4))){
var inst_36003 = (state_36050[(7)]);
var inst_36003__$1 = (state_36050[(2)]);
var state_36050__$1 = (function (){var statearr_36054 = state_36050;
(statearr_36054[(7)] = inst_36003__$1);

return statearr_36054;
})();
if(cljs.core.truth_(inst_36003__$1)){
var statearr_36055_36081 = state_36050__$1;
(statearr_36055_36081[(1)] = (5));

} else {
var statearr_36056_36082 = state_36050__$1;
(statearr_36056_36082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (15))){
var inst_36010 = (state_36050[(8)]);
var inst_36025 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36010);
var inst_36026 = cljs.core.first.call(null,inst_36025);
var inst_36027 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36026);
var inst_36028 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36027)].join('');
var inst_36029 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36028);
var state_36050__$1 = state_36050;
var statearr_36057_36083 = state_36050__$1;
(statearr_36057_36083[(2)] = inst_36029);

(statearr_36057_36083[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (13))){
var inst_36034 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
var statearr_36058_36084 = state_36050__$1;
(statearr_36058_36084[(2)] = inst_36034);

(statearr_36058_36084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (6))){
var state_36050__$1 = state_36050;
var statearr_36059_36085 = state_36050__$1;
(statearr_36059_36085[(2)] = null);

(statearr_36059_36085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (17))){
var inst_36032 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
var statearr_36060_36086 = state_36050__$1;
(statearr_36060_36086[(2)] = inst_36032);

(statearr_36060_36086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (3))){
var inst_36048 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36050__$1,inst_36048);
} else {
if((state_val_36051 === (12))){
var inst_36009 = (state_36050[(9)]);
var inst_36023 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36009,opts);
var state_36050__$1 = state_36050;
if(cljs.core.truth_(inst_36023)){
var statearr_36061_36087 = state_36050__$1;
(statearr_36061_36087[(1)] = (15));

} else {
var statearr_36062_36088 = state_36050__$1;
(statearr_36062_36088[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (2))){
var state_36050__$1 = state_36050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36050__$1,(4),ch);
} else {
if((state_val_36051 === (11))){
var inst_36010 = (state_36050[(8)]);
var inst_36015 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36016 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36010);
var inst_36017 = cljs.core.async.timeout.call(null,(1000));
var inst_36018 = [inst_36016,inst_36017];
var inst_36019 = (new cljs.core.PersistentVector(null,2,(5),inst_36015,inst_36018,null));
var state_36050__$1 = state_36050;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36050__$1,(14),inst_36019);
} else {
if((state_val_36051 === (9))){
var inst_36010 = (state_36050[(8)]);
var inst_36036 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36037 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36010);
var inst_36038 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36037);
var inst_36039 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36038)].join('');
var inst_36040 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36039);
var state_36050__$1 = (function (){var statearr_36063 = state_36050;
(statearr_36063[(10)] = inst_36036);

return statearr_36063;
})();
var statearr_36064_36089 = state_36050__$1;
(statearr_36064_36089[(2)] = inst_36040);

(statearr_36064_36089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (5))){
var inst_36003 = (state_36050[(7)]);
var inst_36005 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36006 = (new cljs.core.PersistentArrayMap(null,2,inst_36005,null));
var inst_36007 = (new cljs.core.PersistentHashSet(null,inst_36006,null));
var inst_36008 = figwheel.client.focus_msgs.call(null,inst_36007,inst_36003);
var inst_36009 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36008);
var inst_36010 = cljs.core.first.call(null,inst_36008);
var inst_36011 = figwheel.client.autoload_QMARK_.call(null);
var state_36050__$1 = (function (){var statearr_36065 = state_36050;
(statearr_36065[(9)] = inst_36009);

(statearr_36065[(8)] = inst_36010);

return statearr_36065;
})();
if(cljs.core.truth_(inst_36011)){
var statearr_36066_36090 = state_36050__$1;
(statearr_36066_36090[(1)] = (8));

} else {
var statearr_36067_36091 = state_36050__$1;
(statearr_36067_36091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (14))){
var inst_36021 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
var statearr_36068_36092 = state_36050__$1;
(statearr_36068_36092[(2)] = inst_36021);

(statearr_36068_36092[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (16))){
var state_36050__$1 = state_36050;
var statearr_36069_36093 = state_36050__$1;
(statearr_36069_36093[(2)] = null);

(statearr_36069_36093[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (10))){
var inst_36042 = (state_36050[(2)]);
var state_36050__$1 = (function (){var statearr_36070 = state_36050;
(statearr_36070[(11)] = inst_36042);

return statearr_36070;
})();
var statearr_36071_36094 = state_36050__$1;
(statearr_36071_36094[(2)] = null);

(statearr_36071_36094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (8))){
var inst_36009 = (state_36050[(9)]);
var inst_36013 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36009,opts);
var state_36050__$1 = state_36050;
if(cljs.core.truth_(inst_36013)){
var statearr_36072_36095 = state_36050__$1;
(statearr_36072_36095[(1)] = (11));

} else {
var statearr_36073_36096 = state_36050__$1;
(statearr_36073_36096[(1)] = (12));

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
});})(c__32219__auto___36078,ch))
;
return ((function (switch__32131__auto__,c__32219__auto___36078,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32132__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32132__auto____0 = (function (){
var statearr_36074 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36074[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32132__auto__);

(statearr_36074[(1)] = (1));

return statearr_36074;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32132__auto____1 = (function (state_36050){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_36050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e36075){if((e36075 instanceof Object)){
var ex__32135__auto__ = e36075;
var statearr_36076_36097 = state_36050;
(statearr_36076_36097[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36098 = state_36050;
state_36050 = G__36098;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32132__auto__ = function(state_36050){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32132__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32132__auto____1.call(this,state_36050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32132__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32132__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___36078,ch))
})();
var state__32221__auto__ = (function (){var statearr_36077 = f__32220__auto__.call(null);
(statearr_36077[(6)] = c__32219__auto___36078);

return statearr_36077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___36078,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36099_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36099_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36101 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36101){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36100){if((e36100 instanceof Error)){
var e = e36100;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36101], null));
} else {
var e = e36100;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36101))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36102){
var map__36103 = p__36102;
var map__36103__$1 = ((((!((map__36103 == null)))?((((map__36103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36103):map__36103);
var opts = map__36103__$1;
var build_id = cljs.core.get.call(null,map__36103__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36103,map__36103__$1,opts,build_id){
return (function (p__36105){
var vec__36106 = p__36105;
var seq__36107 = cljs.core.seq.call(null,vec__36106);
var first__36108 = cljs.core.first.call(null,seq__36107);
var seq__36107__$1 = cljs.core.next.call(null,seq__36107);
var map__36109 = first__36108;
var map__36109__$1 = ((((!((map__36109 == null)))?((((map__36109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36109):map__36109);
var msg = map__36109__$1;
var msg_name = cljs.core.get.call(null,map__36109__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36107__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36106,seq__36107,first__36108,seq__36107__$1,map__36109,map__36109__$1,msg,msg_name,_,map__36103,map__36103__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36106,seq__36107,first__36108,seq__36107__$1,map__36109,map__36109__$1,msg,msg_name,_,map__36103,map__36103__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36103,map__36103__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36111){
var vec__36112 = p__36111;
var seq__36113 = cljs.core.seq.call(null,vec__36112);
var first__36114 = cljs.core.first.call(null,seq__36113);
var seq__36113__$1 = cljs.core.next.call(null,seq__36113);
var map__36115 = first__36114;
var map__36115__$1 = ((((!((map__36115 == null)))?((((map__36115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36115):map__36115);
var msg = map__36115__$1;
var msg_name = cljs.core.get.call(null,map__36115__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36113__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36117){
var map__36118 = p__36117;
var map__36118__$1 = ((((!((map__36118 == null)))?((((map__36118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36118):map__36118);
var on_compile_warning = cljs.core.get.call(null,map__36118__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36118__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36118,map__36118__$1,on_compile_warning,on_compile_fail){
return (function (p__36120){
var vec__36121 = p__36120;
var seq__36122 = cljs.core.seq.call(null,vec__36121);
var first__36123 = cljs.core.first.call(null,seq__36122);
var seq__36122__$1 = cljs.core.next.call(null,seq__36122);
var map__36124 = first__36123;
var map__36124__$1 = ((((!((map__36124 == null)))?((((map__36124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36124):map__36124);
var msg = map__36124__$1;
var msg_name = cljs.core.get.call(null,map__36124__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36122__$1;
var pred__36126 = cljs.core._EQ_;
var expr__36127 = msg_name;
if(cljs.core.truth_(pred__36126.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36127))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36126.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36127))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36118,map__36118__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32219__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto__,msg_hist,msg_names,msg){
return (function (state_36216){
var state_val_36217 = (state_36216[(1)]);
if((state_val_36217 === (7))){
var inst_36136 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36136)){
var statearr_36218_36265 = state_36216__$1;
(statearr_36218_36265[(1)] = (8));

} else {
var statearr_36219_36266 = state_36216__$1;
(statearr_36219_36266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (20))){
var inst_36210 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36220_36267 = state_36216__$1;
(statearr_36220_36267[(2)] = inst_36210);

(statearr_36220_36267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (27))){
var inst_36206 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36221_36268 = state_36216__$1;
(statearr_36221_36268[(2)] = inst_36206);

(statearr_36221_36268[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (1))){
var inst_36129 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36129)){
var statearr_36222_36269 = state_36216__$1;
(statearr_36222_36269[(1)] = (2));

} else {
var statearr_36223_36270 = state_36216__$1;
(statearr_36223_36270[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (24))){
var inst_36208 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36224_36271 = state_36216__$1;
(statearr_36224_36271[(2)] = inst_36208);

(statearr_36224_36271[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (4))){
var inst_36214 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36216__$1,inst_36214);
} else {
if((state_val_36217 === (15))){
var inst_36212 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36225_36272 = state_36216__$1;
(statearr_36225_36272[(2)] = inst_36212);

(statearr_36225_36272[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (21))){
var inst_36165 = (state_36216[(2)]);
var inst_36166 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36167 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36166);
var state_36216__$1 = (function (){var statearr_36226 = state_36216;
(statearr_36226[(7)] = inst_36165);

return statearr_36226;
})();
var statearr_36227_36273 = state_36216__$1;
(statearr_36227_36273[(2)] = inst_36167);

(statearr_36227_36273[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (31))){
var inst_36195 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36195)){
var statearr_36228_36274 = state_36216__$1;
(statearr_36228_36274[(1)] = (34));

} else {
var statearr_36229_36275 = state_36216__$1;
(statearr_36229_36275[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (32))){
var inst_36204 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36230_36276 = state_36216__$1;
(statearr_36230_36276[(2)] = inst_36204);

(statearr_36230_36276[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (33))){
var inst_36191 = (state_36216[(2)]);
var inst_36192 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36193 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36192);
var state_36216__$1 = (function (){var statearr_36231 = state_36216;
(statearr_36231[(8)] = inst_36191);

return statearr_36231;
})();
var statearr_36232_36277 = state_36216__$1;
(statearr_36232_36277[(2)] = inst_36193);

(statearr_36232_36277[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (13))){
var inst_36150 = figwheel.client.heads_up.clear.call(null);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(16),inst_36150);
} else {
if((state_val_36217 === (22))){
var inst_36171 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36172 = figwheel.client.heads_up.append_warning_message.call(null,inst_36171);
var state_36216__$1 = state_36216;
var statearr_36233_36278 = state_36216__$1;
(statearr_36233_36278[(2)] = inst_36172);

(statearr_36233_36278[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (36))){
var inst_36202 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36234_36279 = state_36216__$1;
(statearr_36234_36279[(2)] = inst_36202);

(statearr_36234_36279[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (29))){
var inst_36182 = (state_36216[(2)]);
var inst_36183 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36184 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36183);
var state_36216__$1 = (function (){var statearr_36235 = state_36216;
(statearr_36235[(9)] = inst_36182);

return statearr_36235;
})();
var statearr_36236_36280 = state_36216__$1;
(statearr_36236_36280[(2)] = inst_36184);

(statearr_36236_36280[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (6))){
var inst_36131 = (state_36216[(10)]);
var state_36216__$1 = state_36216;
var statearr_36237_36281 = state_36216__$1;
(statearr_36237_36281[(2)] = inst_36131);

(statearr_36237_36281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (28))){
var inst_36178 = (state_36216[(2)]);
var inst_36179 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36180 = figwheel.client.heads_up.display_warning.call(null,inst_36179);
var state_36216__$1 = (function (){var statearr_36238 = state_36216;
(statearr_36238[(11)] = inst_36178);

return statearr_36238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(29),inst_36180);
} else {
if((state_val_36217 === (25))){
var inst_36176 = figwheel.client.heads_up.clear.call(null);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(28),inst_36176);
} else {
if((state_val_36217 === (34))){
var inst_36197 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(37),inst_36197);
} else {
if((state_val_36217 === (17))){
var inst_36156 = (state_36216[(2)]);
var inst_36157 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36158 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36157);
var state_36216__$1 = (function (){var statearr_36239 = state_36216;
(statearr_36239[(12)] = inst_36156);

return statearr_36239;
})();
var statearr_36240_36282 = state_36216__$1;
(statearr_36240_36282[(2)] = inst_36158);

(statearr_36240_36282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (3))){
var inst_36148 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36148)){
var statearr_36241_36283 = state_36216__$1;
(statearr_36241_36283[(1)] = (13));

} else {
var statearr_36242_36284 = state_36216__$1;
(statearr_36242_36284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (12))){
var inst_36144 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36243_36285 = state_36216__$1;
(statearr_36243_36285[(2)] = inst_36144);

(statearr_36243_36285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (2))){
var inst_36131 = (state_36216[(10)]);
var inst_36131__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36216__$1 = (function (){var statearr_36244 = state_36216;
(statearr_36244[(10)] = inst_36131__$1);

return statearr_36244;
})();
if(cljs.core.truth_(inst_36131__$1)){
var statearr_36245_36286 = state_36216__$1;
(statearr_36245_36286[(1)] = (5));

} else {
var statearr_36246_36287 = state_36216__$1;
(statearr_36246_36287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (23))){
var inst_36174 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36174)){
var statearr_36247_36288 = state_36216__$1;
(statearr_36247_36288[(1)] = (25));

} else {
var statearr_36248_36289 = state_36216__$1;
(statearr_36248_36289[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (35))){
var state_36216__$1 = state_36216;
var statearr_36249_36290 = state_36216__$1;
(statearr_36249_36290[(2)] = null);

(statearr_36249_36290[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (19))){
var inst_36169 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36169)){
var statearr_36250_36291 = state_36216__$1;
(statearr_36250_36291[(1)] = (22));

} else {
var statearr_36251_36292 = state_36216__$1;
(statearr_36251_36292[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (11))){
var inst_36140 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36252_36293 = state_36216__$1;
(statearr_36252_36293[(2)] = inst_36140);

(statearr_36252_36293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (9))){
var inst_36142 = figwheel.client.heads_up.clear.call(null);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(12),inst_36142);
} else {
if((state_val_36217 === (5))){
var inst_36133 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36216__$1 = state_36216;
var statearr_36253_36294 = state_36216__$1;
(statearr_36253_36294[(2)] = inst_36133);

(statearr_36253_36294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (14))){
var inst_36160 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36160)){
var statearr_36254_36295 = state_36216__$1;
(statearr_36254_36295[(1)] = (18));

} else {
var statearr_36255_36296 = state_36216__$1;
(statearr_36255_36296[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (26))){
var inst_36186 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36186)){
var statearr_36256_36297 = state_36216__$1;
(statearr_36256_36297[(1)] = (30));

} else {
var statearr_36257_36298 = state_36216__$1;
(statearr_36257_36298[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (16))){
var inst_36152 = (state_36216[(2)]);
var inst_36153 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36154 = figwheel.client.heads_up.display_exception.call(null,inst_36153);
var state_36216__$1 = (function (){var statearr_36258 = state_36216;
(statearr_36258[(13)] = inst_36152);

return statearr_36258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(17),inst_36154);
} else {
if((state_val_36217 === (30))){
var inst_36188 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36189 = figwheel.client.heads_up.display_warning.call(null,inst_36188);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(33),inst_36189);
} else {
if((state_val_36217 === (10))){
var inst_36146 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36259_36299 = state_36216__$1;
(statearr_36259_36299[(2)] = inst_36146);

(statearr_36259_36299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (18))){
var inst_36162 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36163 = figwheel.client.heads_up.display_exception.call(null,inst_36162);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(21),inst_36163);
} else {
if((state_val_36217 === (37))){
var inst_36199 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36260_36300 = state_36216__$1;
(statearr_36260_36300[(2)] = inst_36199);

(statearr_36260_36300[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (8))){
var inst_36138 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(11),inst_36138);
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
});})(c__32219__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32131__auto__,c__32219__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32132__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32132__auto____0 = (function (){
var statearr_36261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36261[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32132__auto__);

(statearr_36261[(1)] = (1));

return statearr_36261;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32132__auto____1 = (function (state_36216){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_36216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e36262){if((e36262 instanceof Object)){
var ex__32135__auto__ = e36262;
var statearr_36263_36301 = state_36216;
(statearr_36263_36301[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36302 = state_36216;
state_36216 = G__36302;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32132__auto__ = function(state_36216){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32132__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32132__auto____1.call(this,state_36216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32132__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32132__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto__,msg_hist,msg_names,msg))
})();
var state__32221__auto__ = (function (){var statearr_36264 = f__32220__auto__.call(null);
(statearr_36264[(6)] = c__32219__auto__);

return statearr_36264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto__,msg_hist,msg_names,msg))
);

return c__32219__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32219__auto___36331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___36331,ch){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___36331,ch){
return (function (state_36317){
var state_val_36318 = (state_36317[(1)]);
if((state_val_36318 === (1))){
var state_36317__$1 = state_36317;
var statearr_36319_36332 = state_36317__$1;
(statearr_36319_36332[(2)] = null);

(statearr_36319_36332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (2))){
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36317__$1,(4),ch);
} else {
if((state_val_36318 === (3))){
var inst_36315 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36317__$1,inst_36315);
} else {
if((state_val_36318 === (4))){
var inst_36305 = (state_36317[(7)]);
var inst_36305__$1 = (state_36317[(2)]);
var state_36317__$1 = (function (){var statearr_36320 = state_36317;
(statearr_36320[(7)] = inst_36305__$1);

return statearr_36320;
})();
if(cljs.core.truth_(inst_36305__$1)){
var statearr_36321_36333 = state_36317__$1;
(statearr_36321_36333[(1)] = (5));

} else {
var statearr_36322_36334 = state_36317__$1;
(statearr_36322_36334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (5))){
var inst_36305 = (state_36317[(7)]);
var inst_36307 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36305);
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36317__$1,(8),inst_36307);
} else {
if((state_val_36318 === (6))){
var state_36317__$1 = state_36317;
var statearr_36323_36335 = state_36317__$1;
(statearr_36323_36335[(2)] = null);

(statearr_36323_36335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (7))){
var inst_36313 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
var statearr_36324_36336 = state_36317__$1;
(statearr_36324_36336[(2)] = inst_36313);

(statearr_36324_36336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (8))){
var inst_36309 = (state_36317[(2)]);
var state_36317__$1 = (function (){var statearr_36325 = state_36317;
(statearr_36325[(8)] = inst_36309);

return statearr_36325;
})();
var statearr_36326_36337 = state_36317__$1;
(statearr_36326_36337[(2)] = null);

(statearr_36326_36337[(1)] = (2));


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
});})(c__32219__auto___36331,ch))
;
return ((function (switch__32131__auto__,c__32219__auto___36331,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32132__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32132__auto____0 = (function (){
var statearr_36327 = [null,null,null,null,null,null,null,null,null];
(statearr_36327[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32132__auto__);

(statearr_36327[(1)] = (1));

return statearr_36327;
});
var figwheel$client$heads_up_plugin_$_state_machine__32132__auto____1 = (function (state_36317){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_36317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e36328){if((e36328 instanceof Object)){
var ex__32135__auto__ = e36328;
var statearr_36329_36338 = state_36317;
(statearr_36329_36338[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36339 = state_36317;
state_36317 = G__36339;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32132__auto__ = function(state_36317){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32132__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32132__auto____1.call(this,state_36317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32132__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32132__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___36331,ch))
})();
var state__32221__auto__ = (function (){var statearr_36330 = f__32220__auto__.call(null);
(statearr_36330[(6)] = c__32219__auto___36331);

return statearr_36330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___36331,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32219__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto__){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto__){
return (function (state_36345){
var state_val_36346 = (state_36345[(1)]);
if((state_val_36346 === (1))){
var inst_36340 = cljs.core.async.timeout.call(null,(3000));
var state_36345__$1 = state_36345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36345__$1,(2),inst_36340);
} else {
if((state_val_36346 === (2))){
var inst_36342 = (state_36345[(2)]);
var inst_36343 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36345__$1 = (function (){var statearr_36347 = state_36345;
(statearr_36347[(7)] = inst_36342);

return statearr_36347;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36345__$1,inst_36343);
} else {
return null;
}
}
});})(c__32219__auto__))
;
return ((function (switch__32131__auto__,c__32219__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32132__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32132__auto____0 = (function (){
var statearr_36348 = [null,null,null,null,null,null,null,null];
(statearr_36348[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32132__auto__);

(statearr_36348[(1)] = (1));

return statearr_36348;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32132__auto____1 = (function (state_36345){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_36345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e36349){if((e36349 instanceof Object)){
var ex__32135__auto__ = e36349;
var statearr_36350_36352 = state_36345;
(statearr_36350_36352[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36353 = state_36345;
state_36345 = G__36353;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32132__auto__ = function(state_36345){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32132__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32132__auto____1.call(this,state_36345);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32132__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32132__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto__))
})();
var state__32221__auto__ = (function (){var statearr_36351 = f__32220__auto__.call(null);
(statearr_36351[(6)] = c__32219__auto__);

return statearr_36351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto__))
);

return c__32219__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32219__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36360){
var state_val_36361 = (state_36360[(1)]);
if((state_val_36361 === (1))){
var inst_36354 = cljs.core.async.timeout.call(null,(2000));
var state_36360__$1 = state_36360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36360__$1,(2),inst_36354);
} else {
if((state_val_36361 === (2))){
var inst_36356 = (state_36360[(2)]);
var inst_36357 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36358 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36357);
var state_36360__$1 = (function (){var statearr_36362 = state_36360;
(statearr_36362[(7)] = inst_36356);

return statearr_36362;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36360__$1,inst_36358);
} else {
return null;
}
}
});})(c__32219__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__32131__auto__,c__32219__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32132__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32132__auto____0 = (function (){
var statearr_36363 = [null,null,null,null,null,null,null,null];
(statearr_36363[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32132__auto__);

(statearr_36363[(1)] = (1));

return statearr_36363;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32132__auto____1 = (function (state_36360){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_36360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e36364){if((e36364 instanceof Object)){
var ex__32135__auto__ = e36364;
var statearr_36365_36367 = state_36360;
(statearr_36365_36367[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36368 = state_36360;
state_36360 = G__36368;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32132__auto__ = function(state_36360){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32132__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32132__auto____1.call(this,state_36360);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32132__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32132__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32221__auto__ = (function (){var statearr_36366 = f__32220__auto__.call(null);
(statearr_36366[(6)] = c__32219__auto__);

return statearr_36366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto__,figwheel_version,temp__4657__auto__))
);

return c__32219__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36369){
var map__36370 = p__36369;
var map__36370__$1 = ((((!((map__36370 == null)))?((((map__36370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36370):map__36370);
var file = cljs.core.get.call(null,map__36370__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36370__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36370__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36372 = "";
var G__36372__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36372),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36372);
var G__36372__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36372__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36372__$1);
if(cljs.core.truth_((function (){var and__28039__auto__ = line;
if(cljs.core.truth_(and__28039__auto__)){
return column;
} else {
return and__28039__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36372__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36372__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36373){
var map__36374 = p__36373;
var map__36374__$1 = ((((!((map__36374 == null)))?((((map__36374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36374):map__36374);
var ed = map__36374__$1;
var formatted_exception = cljs.core.get.call(null,map__36374__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36374__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36374__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36376_36380 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36377_36381 = null;
var count__36378_36382 = (0);
var i__36379_36383 = (0);
while(true){
if((i__36379_36383 < count__36378_36382)){
var msg_36384 = cljs.core._nth.call(null,chunk__36377_36381,i__36379_36383);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36384);

var G__36385 = seq__36376_36380;
var G__36386 = chunk__36377_36381;
var G__36387 = count__36378_36382;
var G__36388 = (i__36379_36383 + (1));
seq__36376_36380 = G__36385;
chunk__36377_36381 = G__36386;
count__36378_36382 = G__36387;
i__36379_36383 = G__36388;
continue;
} else {
var temp__4657__auto___36389 = cljs.core.seq.call(null,seq__36376_36380);
if(temp__4657__auto___36389){
var seq__36376_36390__$1 = temp__4657__auto___36389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36376_36390__$1)){
var c__28890__auto___36391 = cljs.core.chunk_first.call(null,seq__36376_36390__$1);
var G__36392 = cljs.core.chunk_rest.call(null,seq__36376_36390__$1);
var G__36393 = c__28890__auto___36391;
var G__36394 = cljs.core.count.call(null,c__28890__auto___36391);
var G__36395 = (0);
seq__36376_36380 = G__36392;
chunk__36377_36381 = G__36393;
count__36378_36382 = G__36394;
i__36379_36383 = G__36395;
continue;
} else {
var msg_36396 = cljs.core.first.call(null,seq__36376_36390__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36396);

var G__36397 = cljs.core.next.call(null,seq__36376_36390__$1);
var G__36398 = null;
var G__36399 = (0);
var G__36400 = (0);
seq__36376_36380 = G__36397;
chunk__36377_36381 = G__36398;
count__36378_36382 = G__36399;
i__36379_36383 = G__36400;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36401){
var map__36402 = p__36401;
var map__36402__$1 = ((((!((map__36402 == null)))?((((map__36402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36402):map__36402);
var w = map__36402__$1;
var message = cljs.core.get.call(null,map__36402__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28039__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28039__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28039__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36404 = cljs.core.seq.call(null,plugins);
var chunk__36405 = null;
var count__36406 = (0);
var i__36407 = (0);
while(true){
if((i__36407 < count__36406)){
var vec__36408 = cljs.core._nth.call(null,chunk__36405,i__36407);
var k = cljs.core.nth.call(null,vec__36408,(0),null);
var plugin = cljs.core.nth.call(null,vec__36408,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36414 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36404,chunk__36405,count__36406,i__36407,pl_36414,vec__36408,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36414.call(null,msg_hist);
});})(seq__36404,chunk__36405,count__36406,i__36407,pl_36414,vec__36408,k,plugin))
);
} else {
}

var G__36415 = seq__36404;
var G__36416 = chunk__36405;
var G__36417 = count__36406;
var G__36418 = (i__36407 + (1));
seq__36404 = G__36415;
chunk__36405 = G__36416;
count__36406 = G__36417;
i__36407 = G__36418;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36404);
if(temp__4657__auto__){
var seq__36404__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36404__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__36404__$1);
var G__36419 = cljs.core.chunk_rest.call(null,seq__36404__$1);
var G__36420 = c__28890__auto__;
var G__36421 = cljs.core.count.call(null,c__28890__auto__);
var G__36422 = (0);
seq__36404 = G__36419;
chunk__36405 = G__36420;
count__36406 = G__36421;
i__36407 = G__36422;
continue;
} else {
var vec__36411 = cljs.core.first.call(null,seq__36404__$1);
var k = cljs.core.nth.call(null,vec__36411,(0),null);
var plugin = cljs.core.nth.call(null,vec__36411,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36423 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36404,chunk__36405,count__36406,i__36407,pl_36423,vec__36411,k,plugin,seq__36404__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36423.call(null,msg_hist);
});})(seq__36404,chunk__36405,count__36406,i__36407,pl_36423,vec__36411,k,plugin,seq__36404__$1,temp__4657__auto__))
);
} else {
}

var G__36424 = cljs.core.next.call(null,seq__36404__$1);
var G__36425 = null;
var G__36426 = (0);
var G__36427 = (0);
seq__36404 = G__36424;
chunk__36405 = G__36425;
count__36406 = G__36426;
i__36407 = G__36427;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__36429 = arguments.length;
switch (G__36429) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36430_36435 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36431_36436 = null;
var count__36432_36437 = (0);
var i__36433_36438 = (0);
while(true){
if((i__36433_36438 < count__36432_36437)){
var msg_36439 = cljs.core._nth.call(null,chunk__36431_36436,i__36433_36438);
figwheel.client.socket.handle_incoming_message.call(null,msg_36439);

var G__36440 = seq__36430_36435;
var G__36441 = chunk__36431_36436;
var G__36442 = count__36432_36437;
var G__36443 = (i__36433_36438 + (1));
seq__36430_36435 = G__36440;
chunk__36431_36436 = G__36441;
count__36432_36437 = G__36442;
i__36433_36438 = G__36443;
continue;
} else {
var temp__4657__auto___36444 = cljs.core.seq.call(null,seq__36430_36435);
if(temp__4657__auto___36444){
var seq__36430_36445__$1 = temp__4657__auto___36444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36430_36445__$1)){
var c__28890__auto___36446 = cljs.core.chunk_first.call(null,seq__36430_36445__$1);
var G__36447 = cljs.core.chunk_rest.call(null,seq__36430_36445__$1);
var G__36448 = c__28890__auto___36446;
var G__36449 = cljs.core.count.call(null,c__28890__auto___36446);
var G__36450 = (0);
seq__36430_36435 = G__36447;
chunk__36431_36436 = G__36448;
count__36432_36437 = G__36449;
i__36433_36438 = G__36450;
continue;
} else {
var msg_36451 = cljs.core.first.call(null,seq__36430_36445__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36451);

var G__36452 = cljs.core.next.call(null,seq__36430_36445__$1);
var G__36453 = null;
var G__36454 = (0);
var G__36455 = (0);
seq__36430_36435 = G__36452;
chunk__36431_36436 = G__36453;
count__36432_36437 = G__36454;
i__36433_36438 = G__36455;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36460 = arguments.length;
var i__29223__auto___36461 = (0);
while(true){
if((i__29223__auto___36461 < len__29222__auto___36460)){
args__29229__auto__.push((arguments[i__29223__auto___36461]));

var G__36462 = (i__29223__auto___36461 + (1));
i__29223__auto___36461 = G__36462;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36457){
var map__36458 = p__36457;
var map__36458__$1 = ((((!((map__36458 == null)))?((((map__36458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36458):map__36458);
var opts = map__36458__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36456){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36456));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36463){if((e36463 instanceof Error)){
var e = e36463;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36463;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36464){
var map__36465 = p__36464;
var map__36465__$1 = ((((!((map__36465 == null)))?((((map__36465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36465):map__36465);
var msg_name = cljs.core.get.call(null,map__36465__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1511221100550
