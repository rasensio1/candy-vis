// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35697){
var map__35698 = p__35697;
var map__35698__$1 = ((((!((map__35698 == null)))?((((map__35698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35698):map__35698);
var m = map__35698__$1;
var n = cljs.core.get.call(null,map__35698__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35698__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35700_35722 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35701_35723 = null;
var count__35702_35724 = (0);
var i__35703_35725 = (0);
while(true){
if((i__35703_35725 < count__35702_35724)){
var f_35726 = cljs.core._nth.call(null,chunk__35701_35723,i__35703_35725);
cljs.core.println.call(null,"  ",f_35726);

var G__35727 = seq__35700_35722;
var G__35728 = chunk__35701_35723;
var G__35729 = count__35702_35724;
var G__35730 = (i__35703_35725 + (1));
seq__35700_35722 = G__35727;
chunk__35701_35723 = G__35728;
count__35702_35724 = G__35729;
i__35703_35725 = G__35730;
continue;
} else {
var temp__4657__auto___35731 = cljs.core.seq.call(null,seq__35700_35722);
if(temp__4657__auto___35731){
var seq__35700_35732__$1 = temp__4657__auto___35731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35700_35732__$1)){
var c__28890__auto___35733 = cljs.core.chunk_first.call(null,seq__35700_35732__$1);
var G__35734 = cljs.core.chunk_rest.call(null,seq__35700_35732__$1);
var G__35735 = c__28890__auto___35733;
var G__35736 = cljs.core.count.call(null,c__28890__auto___35733);
var G__35737 = (0);
seq__35700_35722 = G__35734;
chunk__35701_35723 = G__35735;
count__35702_35724 = G__35736;
i__35703_35725 = G__35737;
continue;
} else {
var f_35738 = cljs.core.first.call(null,seq__35700_35732__$1);
cljs.core.println.call(null,"  ",f_35738);

var G__35739 = cljs.core.next.call(null,seq__35700_35732__$1);
var G__35740 = null;
var G__35741 = (0);
var G__35742 = (0);
seq__35700_35722 = G__35739;
chunk__35701_35723 = G__35740;
count__35702_35724 = G__35741;
i__35703_35725 = G__35742;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35743 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28051__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35743);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35743)))?cljs.core.second.call(null,arglists_35743):arglists_35743));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35704_35744 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35705_35745 = null;
var count__35706_35746 = (0);
var i__35707_35747 = (0);
while(true){
if((i__35707_35747 < count__35706_35746)){
var vec__35708_35748 = cljs.core._nth.call(null,chunk__35705_35745,i__35707_35747);
var name_35749 = cljs.core.nth.call(null,vec__35708_35748,(0),null);
var map__35711_35750 = cljs.core.nth.call(null,vec__35708_35748,(1),null);
var map__35711_35751__$1 = ((((!((map__35711_35750 == null)))?((((map__35711_35750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35711_35750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35711_35750):map__35711_35750);
var doc_35752 = cljs.core.get.call(null,map__35711_35751__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35753 = cljs.core.get.call(null,map__35711_35751__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35749);

cljs.core.println.call(null," ",arglists_35753);

if(cljs.core.truth_(doc_35752)){
cljs.core.println.call(null," ",doc_35752);
} else {
}

var G__35754 = seq__35704_35744;
var G__35755 = chunk__35705_35745;
var G__35756 = count__35706_35746;
var G__35757 = (i__35707_35747 + (1));
seq__35704_35744 = G__35754;
chunk__35705_35745 = G__35755;
count__35706_35746 = G__35756;
i__35707_35747 = G__35757;
continue;
} else {
var temp__4657__auto___35758 = cljs.core.seq.call(null,seq__35704_35744);
if(temp__4657__auto___35758){
var seq__35704_35759__$1 = temp__4657__auto___35758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35704_35759__$1)){
var c__28890__auto___35760 = cljs.core.chunk_first.call(null,seq__35704_35759__$1);
var G__35761 = cljs.core.chunk_rest.call(null,seq__35704_35759__$1);
var G__35762 = c__28890__auto___35760;
var G__35763 = cljs.core.count.call(null,c__28890__auto___35760);
var G__35764 = (0);
seq__35704_35744 = G__35761;
chunk__35705_35745 = G__35762;
count__35706_35746 = G__35763;
i__35707_35747 = G__35764;
continue;
} else {
var vec__35713_35765 = cljs.core.first.call(null,seq__35704_35759__$1);
var name_35766 = cljs.core.nth.call(null,vec__35713_35765,(0),null);
var map__35716_35767 = cljs.core.nth.call(null,vec__35713_35765,(1),null);
var map__35716_35768__$1 = ((((!((map__35716_35767 == null)))?((((map__35716_35767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35716_35767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35716_35767):map__35716_35767);
var doc_35769 = cljs.core.get.call(null,map__35716_35768__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35770 = cljs.core.get.call(null,map__35716_35768__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35766);

cljs.core.println.call(null," ",arglists_35770);

if(cljs.core.truth_(doc_35769)){
cljs.core.println.call(null," ",doc_35769);
} else {
}

var G__35771 = cljs.core.next.call(null,seq__35704_35759__$1);
var G__35772 = null;
var G__35773 = (0);
var G__35774 = (0);
seq__35704_35744 = G__35771;
chunk__35705_35745 = G__35772;
count__35706_35746 = G__35773;
i__35707_35747 = G__35774;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35718 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35719 = null;
var count__35720 = (0);
var i__35721 = (0);
while(true){
if((i__35721 < count__35720)){
var role = cljs.core._nth.call(null,chunk__35719,i__35721);
var temp__4657__auto___35775__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35775__$1)){
var spec_35776 = temp__4657__auto___35775__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35776));
} else {
}

var G__35777 = seq__35718;
var G__35778 = chunk__35719;
var G__35779 = count__35720;
var G__35780 = (i__35721 + (1));
seq__35718 = G__35777;
chunk__35719 = G__35778;
count__35720 = G__35779;
i__35721 = G__35780;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35718);
if(temp__4657__auto____$1){
var seq__35718__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35718__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__35718__$1);
var G__35781 = cljs.core.chunk_rest.call(null,seq__35718__$1);
var G__35782 = c__28890__auto__;
var G__35783 = cljs.core.count.call(null,c__28890__auto__);
var G__35784 = (0);
seq__35718 = G__35781;
chunk__35719 = G__35782;
count__35720 = G__35783;
i__35721 = G__35784;
continue;
} else {
var role = cljs.core.first.call(null,seq__35718__$1);
var temp__4657__auto___35785__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35785__$2)){
var spec_35786 = temp__4657__auto___35785__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35786));
} else {
}

var G__35787 = cljs.core.next.call(null,seq__35718__$1);
var G__35788 = null;
var G__35789 = (0);
var G__35790 = (0);
seq__35718 = G__35787;
chunk__35719 = G__35788;
count__35720 = G__35789;
i__35721 = G__35790;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1511221099717
