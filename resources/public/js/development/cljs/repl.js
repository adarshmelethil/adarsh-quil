// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34540){
var map__34541 = p__34540;
var map__34541__$1 = (((((!((map__34541 == null))))?(((((map__34541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34541):map__34541);
var m = map__34541__$1;
var n = cljs.core.get.call(null,map__34541__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34541__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34543_34575 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34544_34576 = null;
var count__34545_34577 = (0);
var i__34546_34578 = (0);
while(true){
if((i__34546_34578 < count__34545_34577)){
var f_34579 = cljs.core._nth.call(null,chunk__34544_34576,i__34546_34578);
cljs.core.println.call(null,"  ",f_34579);


var G__34580 = seq__34543_34575;
var G__34581 = chunk__34544_34576;
var G__34582 = count__34545_34577;
var G__34583 = (i__34546_34578 + (1));
seq__34543_34575 = G__34580;
chunk__34544_34576 = G__34581;
count__34545_34577 = G__34582;
i__34546_34578 = G__34583;
continue;
} else {
var temp__5735__auto___34584 = cljs.core.seq.call(null,seq__34543_34575);
if(temp__5735__auto___34584){
var seq__34543_34585__$1 = temp__5735__auto___34584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34543_34585__$1)){
var c__4550__auto___34586 = cljs.core.chunk_first.call(null,seq__34543_34585__$1);
var G__34587 = cljs.core.chunk_rest.call(null,seq__34543_34585__$1);
var G__34588 = c__4550__auto___34586;
var G__34589 = cljs.core.count.call(null,c__4550__auto___34586);
var G__34590 = (0);
seq__34543_34575 = G__34587;
chunk__34544_34576 = G__34588;
count__34545_34577 = G__34589;
i__34546_34578 = G__34590;
continue;
} else {
var f_34591 = cljs.core.first.call(null,seq__34543_34585__$1);
cljs.core.println.call(null,"  ",f_34591);


var G__34592 = cljs.core.next.call(null,seq__34543_34585__$1);
var G__34593 = null;
var G__34594 = (0);
var G__34595 = (0);
seq__34543_34575 = G__34592;
chunk__34544_34576 = G__34593;
count__34545_34577 = G__34594;
i__34546_34578 = G__34595;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34596 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34596);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34596)))?cljs.core.second.call(null,arglists_34596):arglists_34596));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34547_34597 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34548_34598 = null;
var count__34549_34599 = (0);
var i__34550_34600 = (0);
while(true){
if((i__34550_34600 < count__34549_34599)){
var vec__34561_34601 = cljs.core._nth.call(null,chunk__34548_34598,i__34550_34600);
var name_34602 = cljs.core.nth.call(null,vec__34561_34601,(0),null);
var map__34564_34603 = cljs.core.nth.call(null,vec__34561_34601,(1),null);
var map__34564_34604__$1 = (((((!((map__34564_34603 == null))))?(((((map__34564_34603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34564_34603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34564_34603):map__34564_34603);
var doc_34605 = cljs.core.get.call(null,map__34564_34604__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34606 = cljs.core.get.call(null,map__34564_34604__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34602);

cljs.core.println.call(null," ",arglists_34606);

if(cljs.core.truth_(doc_34605)){
cljs.core.println.call(null," ",doc_34605);
} else {
}


var G__34607 = seq__34547_34597;
var G__34608 = chunk__34548_34598;
var G__34609 = count__34549_34599;
var G__34610 = (i__34550_34600 + (1));
seq__34547_34597 = G__34607;
chunk__34548_34598 = G__34608;
count__34549_34599 = G__34609;
i__34550_34600 = G__34610;
continue;
} else {
var temp__5735__auto___34611 = cljs.core.seq.call(null,seq__34547_34597);
if(temp__5735__auto___34611){
var seq__34547_34612__$1 = temp__5735__auto___34611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34547_34612__$1)){
var c__4550__auto___34613 = cljs.core.chunk_first.call(null,seq__34547_34612__$1);
var G__34614 = cljs.core.chunk_rest.call(null,seq__34547_34612__$1);
var G__34615 = c__4550__auto___34613;
var G__34616 = cljs.core.count.call(null,c__4550__auto___34613);
var G__34617 = (0);
seq__34547_34597 = G__34614;
chunk__34548_34598 = G__34615;
count__34549_34599 = G__34616;
i__34550_34600 = G__34617;
continue;
} else {
var vec__34566_34618 = cljs.core.first.call(null,seq__34547_34612__$1);
var name_34619 = cljs.core.nth.call(null,vec__34566_34618,(0),null);
var map__34569_34620 = cljs.core.nth.call(null,vec__34566_34618,(1),null);
var map__34569_34621__$1 = (((((!((map__34569_34620 == null))))?(((((map__34569_34620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34569_34620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34569_34620):map__34569_34620);
var doc_34622 = cljs.core.get.call(null,map__34569_34621__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34623 = cljs.core.get.call(null,map__34569_34621__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34619);

cljs.core.println.call(null," ",arglists_34623);

if(cljs.core.truth_(doc_34622)){
cljs.core.println.call(null," ",doc_34622);
} else {
}


var G__34624 = cljs.core.next.call(null,seq__34547_34612__$1);
var G__34625 = null;
var G__34626 = (0);
var G__34627 = (0);
seq__34547_34597 = G__34624;
chunk__34548_34598 = G__34625;
count__34549_34599 = G__34626;
i__34550_34600 = G__34627;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__34571 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34572 = null;
var count__34573 = (0);
var i__34574 = (0);
while(true){
if((i__34574 < count__34573)){
var role = cljs.core._nth.call(null,chunk__34572,i__34574);
var temp__5735__auto___34628__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34628__$1)){
var spec_34629 = temp__5735__auto___34628__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34629));
} else {
}


var G__34630 = seq__34571;
var G__34631 = chunk__34572;
var G__34632 = count__34573;
var G__34633 = (i__34574 + (1));
seq__34571 = G__34630;
chunk__34572 = G__34631;
count__34573 = G__34632;
i__34574 = G__34633;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__34571);
if(temp__5735__auto____$1){
var seq__34571__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34571__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34571__$1);
var G__34634 = cljs.core.chunk_rest.call(null,seq__34571__$1);
var G__34635 = c__4550__auto__;
var G__34636 = cljs.core.count.call(null,c__4550__auto__);
var G__34637 = (0);
seq__34571 = G__34634;
chunk__34572 = G__34635;
count__34573 = G__34636;
i__34574 = G__34637;
continue;
} else {
var role = cljs.core.first.call(null,seq__34571__$1);
var temp__5735__auto___34638__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34638__$2)){
var spec_34639 = temp__5735__auto___34638__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34639));
} else {
}


var G__34640 = cljs.core.next.call(null,seq__34571__$1);
var G__34641 = null;
var G__34642 = (0);
var G__34643 = (0);
seq__34571 = G__34640;
chunk__34572 = G__34641;
count__34573 = G__34642;
i__34574 = G__34643;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34644 = cljs.core.conj.call(null,via,t);
var G__34645 = cljs.core.ex_cause.call(null,t);
via = G__34644;
t = G__34645;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34648 = datafied_throwable;
var map__34648__$1 = (((((!((map__34648 == null))))?(((((map__34648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34648):map__34648);
var via = cljs.core.get.call(null,map__34648__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__34648__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__34648__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34649 = cljs.core.last.call(null,via);
var map__34649__$1 = (((((!((map__34649 == null))))?(((((map__34649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34649):map__34649);
var type = cljs.core.get.call(null,map__34649__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__34649__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__34649__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34650 = data;
var map__34650__$1 = (((((!((map__34650 == null))))?(((((map__34650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34650):map__34650);
var problems = cljs.core.get.call(null,map__34650__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__34650__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__34650__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34651 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__34651__$1 = (((((!((map__34651 == null))))?(((((map__34651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34651):map__34651);
var top_data = map__34651__$1;
var source = cljs.core.get.call(null,map__34651__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__34656 = phase;
var G__34656__$1 = (((G__34656 instanceof cljs.core.Keyword))?G__34656.fqn:null);
switch (G__34656__$1) {
case "read-source":
var map__34657 = data;
var map__34657__$1 = (((((!((map__34657 == null))))?(((((map__34657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34657):map__34657);
var line = cljs.core.get.call(null,map__34657__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34657__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34659 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__34659__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34659,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34659);
var G__34659__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34659__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34659__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34659__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34659__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34660 = top_data;
var G__34660__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34660,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34660);
var G__34660__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34660__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34660__$1);
var G__34660__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34660__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34660__$2);
var G__34660__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34660__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34660__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34660__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34660__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34661 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34661,(0),null);
var method = cljs.core.nth.call(null,vec__34661,(1),null);
var file = cljs.core.nth.call(null,vec__34661,(2),null);
var line = cljs.core.nth.call(null,vec__34661,(3),null);
var G__34664 = top_data;
var G__34664__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__34664,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34664);
var G__34664__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__34664__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34664__$1);
var G__34664__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__34664__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34664__$2);
var G__34664__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34664__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34664__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34664__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34664__$4;
}

break;
case "execution":
var vec__34665 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34665,(0),null);
var method = cljs.core.nth.call(null,vec__34665,(1),null);
var file = cljs.core.nth.call(null,vec__34665,(2),null);
var line = cljs.core.nth.call(null,vec__34665,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__34665,source__$1,method,file,line,G__34656,G__34656__$1,map__34648,map__34648__$1,via,trace,phase,map__34649,map__34649__$1,type,message,data,map__34650,map__34650__$1,problems,fn,caller,map__34651,map__34651__$1,top_data,source){
return (function (p1__34647_SHARP_){
var or__4131__auto__ = (p1__34647_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__34647_SHARP_);
}
});})(vec__34665,source__$1,method,file,line,G__34656,G__34656__$1,map__34648,map__34648__$1,via,trace,phase,map__34649,map__34649__$1,type,message,data,map__34650,map__34650__$1,problems,fn,caller,map__34651,map__34651__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__34668 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34668__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__34668,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34668);
var G__34668__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34668__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34668__$1);
var G__34668__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__34668__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34668__$2);
var G__34668__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__34668__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34668__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34668__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34668__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34656__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34672){
var map__34673 = p__34672;
var map__34673__$1 = (((((!((map__34673 == null))))?(((((map__34673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34673):map__34673);
var triage_data = map__34673__$1;
var phase = cljs.core.get.call(null,map__34673__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__34673__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__34673__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34673__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__34673__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__34673__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__34673__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__34673__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34675 = phase;
var G__34675__$1 = (((G__34675 instanceof cljs.core.Keyword))?G__34675.fqn:null);
switch (G__34675__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34676_34685 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34677_34686 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34678_34687 = true;
var _STAR_print_fn_STAR__temp_val__34679_34688 = ((function (_STAR_print_newline_STAR__orig_val__34676_34685,_STAR_print_fn_STAR__orig_val__34677_34686,_STAR_print_newline_STAR__temp_val__34678_34687,sb__4661__auto__,G__34675,G__34675__$1,loc,class_name,simple_class,cause_type,format,map__34673,map__34673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__34676_34685,_STAR_print_fn_STAR__orig_val__34677_34686,_STAR_print_newline_STAR__temp_val__34678_34687,sb__4661__auto__,G__34675,G__34675__$1,loc,class_name,simple_class,cause_type,format,map__34673,map__34673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34678_34687;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34679_34688;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__34676_34685,_STAR_print_fn_STAR__orig_val__34677_34686,_STAR_print_newline_STAR__temp_val__34678_34687,_STAR_print_fn_STAR__temp_val__34679_34688,sb__4661__auto__,G__34675,G__34675__$1,loc,class_name,simple_class,cause_type,format,map__34673,map__34673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__34676_34685,_STAR_print_fn_STAR__orig_val__34677_34686,_STAR_print_newline_STAR__temp_val__34678_34687,_STAR_print_fn_STAR__temp_val__34679_34688,sb__4661__auto__,G__34675,G__34675__$1,loc,class_name,simple_class,cause_type,format,map__34673,map__34673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__34670_SHARP_){
return cljs.core.dissoc.call(null,p1__34670_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__34676_34685,_STAR_print_fn_STAR__orig_val__34677_34686,_STAR_print_newline_STAR__temp_val__34678_34687,_STAR_print_fn_STAR__temp_val__34679_34688,sb__4661__auto__,G__34675,G__34675__$1,loc,class_name,simple_class,cause_type,format,map__34673,map__34673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__34676_34685,_STAR_print_fn_STAR__orig_val__34677_34686,_STAR_print_newline_STAR__temp_val__34678_34687,_STAR_print_fn_STAR__temp_val__34679_34688,sb__4661__auto__,G__34675,G__34675__$1,loc,class_name,simple_class,cause_type,format,map__34673,map__34673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34677_34686;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34676_34685;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34680_34689 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34681_34690 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34682_34691 = true;
var _STAR_print_fn_STAR__temp_val__34683_34692 = ((function (_STAR_print_newline_STAR__orig_val__34680_34689,_STAR_print_fn_STAR__orig_val__34681_34690,_STAR_print_newline_STAR__temp_val__34682_34691,sb__4661__auto__,G__34675,G__34675__$1,loc,class_name,simple_class,cause_type,format,map__34673,map__34673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__34680_34689,_STAR_print_fn_STAR__orig_val__34681_34690,_STAR_print_newline_STAR__temp_val__34682_34691,sb__4661__auto__,G__34675,G__34675__$1,loc,class_name,simple_class,cause_type,format,map__34673,map__34673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34682_34691;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34683_34692;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__34680_34689,_STAR_print_fn_STAR__orig_val__34681_34690,_STAR_print_newline_STAR__temp_val__34682_34691,_STAR_print_fn_STAR__temp_val__34683_34692,sb__4661__auto__,G__34675,G__34675__$1,loc,class_name,simple_class,cause_type,format,map__34673,map__34673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__34680_34689,_STAR_print_fn_STAR__orig_val__34681_34690,_STAR_print_newline_STAR__temp_val__34682_34691,_STAR_print_fn_STAR__temp_val__34683_34692,sb__4661__auto__,G__34675,G__34675__$1,loc,class_name,simple_class,cause_type,format,map__34673,map__34673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__34671_SHARP_){
return cljs.core.dissoc.call(null,p1__34671_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__34680_34689,_STAR_print_fn_STAR__orig_val__34681_34690,_STAR_print_newline_STAR__temp_val__34682_34691,_STAR_print_fn_STAR__temp_val__34683_34692,sb__4661__auto__,G__34675,G__34675__$1,loc,class_name,simple_class,cause_type,format,map__34673,map__34673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__34680_34689,_STAR_print_fn_STAR__orig_val__34681_34690,_STAR_print_newline_STAR__temp_val__34682_34691,_STAR_print_fn_STAR__temp_val__34683_34692,sb__4661__auto__,G__34675,G__34675__$1,loc,class_name,simple_class,cause_type,format,map__34673,map__34673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34681_34690;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34680_34689;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34675__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1631323776416
