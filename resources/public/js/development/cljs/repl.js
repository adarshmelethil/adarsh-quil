// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28992){
var map__28993 = p__28992;
var map__28993__$1 = (((((!((map__28993 == null))))?(((((map__28993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28993):map__28993);
var m = map__28993__$1;
var n = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28995_29027 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28996_29028 = null;
var count__28997_29029 = (0);
var i__28998_29030 = (0);
while(true){
if((i__28998_29030 < count__28997_29029)){
var f_29031 = cljs.core._nth.call(null,chunk__28996_29028,i__28998_29030);
cljs.core.println.call(null,"  ",f_29031);


var G__29032 = seq__28995_29027;
var G__29033 = chunk__28996_29028;
var G__29034 = count__28997_29029;
var G__29035 = (i__28998_29030 + (1));
seq__28995_29027 = G__29032;
chunk__28996_29028 = G__29033;
count__28997_29029 = G__29034;
i__28998_29030 = G__29035;
continue;
} else {
var temp__5735__auto___29036 = cljs.core.seq.call(null,seq__28995_29027);
if(temp__5735__auto___29036){
var seq__28995_29037__$1 = temp__5735__auto___29036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28995_29037__$1)){
var c__4550__auto___29038 = cljs.core.chunk_first.call(null,seq__28995_29037__$1);
var G__29039 = cljs.core.chunk_rest.call(null,seq__28995_29037__$1);
var G__29040 = c__4550__auto___29038;
var G__29041 = cljs.core.count.call(null,c__4550__auto___29038);
var G__29042 = (0);
seq__28995_29027 = G__29039;
chunk__28996_29028 = G__29040;
count__28997_29029 = G__29041;
i__28998_29030 = G__29042;
continue;
} else {
var f_29043 = cljs.core.first.call(null,seq__28995_29037__$1);
cljs.core.println.call(null,"  ",f_29043);


var G__29044 = cljs.core.next.call(null,seq__28995_29037__$1);
var G__29045 = null;
var G__29046 = (0);
var G__29047 = (0);
seq__28995_29027 = G__29044;
chunk__28996_29028 = G__29045;
count__28997_29029 = G__29046;
i__28998_29030 = G__29047;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29048 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29048);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29048)))?cljs.core.second.call(null,arglists_29048):arglists_29048));
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
var seq__28999_29049 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29000_29050 = null;
var count__29001_29051 = (0);
var i__29002_29052 = (0);
while(true){
if((i__29002_29052 < count__29001_29051)){
var vec__29013_29053 = cljs.core._nth.call(null,chunk__29000_29050,i__29002_29052);
var name_29054 = cljs.core.nth.call(null,vec__29013_29053,(0),null);
var map__29016_29055 = cljs.core.nth.call(null,vec__29013_29053,(1),null);
var map__29016_29056__$1 = (((((!((map__29016_29055 == null))))?(((((map__29016_29055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29016_29055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29016_29055):map__29016_29055);
var doc_29057 = cljs.core.get.call(null,map__29016_29056__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29058 = cljs.core.get.call(null,map__29016_29056__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29054);

cljs.core.println.call(null," ",arglists_29058);

if(cljs.core.truth_(doc_29057)){
cljs.core.println.call(null," ",doc_29057);
} else {
}


var G__29059 = seq__28999_29049;
var G__29060 = chunk__29000_29050;
var G__29061 = count__29001_29051;
var G__29062 = (i__29002_29052 + (1));
seq__28999_29049 = G__29059;
chunk__29000_29050 = G__29060;
count__29001_29051 = G__29061;
i__29002_29052 = G__29062;
continue;
} else {
var temp__5735__auto___29063 = cljs.core.seq.call(null,seq__28999_29049);
if(temp__5735__auto___29063){
var seq__28999_29064__$1 = temp__5735__auto___29063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28999_29064__$1)){
var c__4550__auto___29065 = cljs.core.chunk_first.call(null,seq__28999_29064__$1);
var G__29066 = cljs.core.chunk_rest.call(null,seq__28999_29064__$1);
var G__29067 = c__4550__auto___29065;
var G__29068 = cljs.core.count.call(null,c__4550__auto___29065);
var G__29069 = (0);
seq__28999_29049 = G__29066;
chunk__29000_29050 = G__29067;
count__29001_29051 = G__29068;
i__29002_29052 = G__29069;
continue;
} else {
var vec__29018_29070 = cljs.core.first.call(null,seq__28999_29064__$1);
var name_29071 = cljs.core.nth.call(null,vec__29018_29070,(0),null);
var map__29021_29072 = cljs.core.nth.call(null,vec__29018_29070,(1),null);
var map__29021_29073__$1 = (((((!((map__29021_29072 == null))))?(((((map__29021_29072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29021_29072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29021_29072):map__29021_29072);
var doc_29074 = cljs.core.get.call(null,map__29021_29073__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29075 = cljs.core.get.call(null,map__29021_29073__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29071);

cljs.core.println.call(null," ",arglists_29075);

if(cljs.core.truth_(doc_29074)){
cljs.core.println.call(null," ",doc_29074);
} else {
}


var G__29076 = cljs.core.next.call(null,seq__28999_29064__$1);
var G__29077 = null;
var G__29078 = (0);
var G__29079 = (0);
seq__28999_29049 = G__29076;
chunk__29000_29050 = G__29077;
count__29001_29051 = G__29078;
i__29002_29052 = G__29079;
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

var seq__29023 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29024 = null;
var count__29025 = (0);
var i__29026 = (0);
while(true){
if((i__29026 < count__29025)){
var role = cljs.core._nth.call(null,chunk__29024,i__29026);
var temp__5735__auto___29080__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29080__$1)){
var spec_29081 = temp__5735__auto___29080__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29081));
} else {
}


var G__29082 = seq__29023;
var G__29083 = chunk__29024;
var G__29084 = count__29025;
var G__29085 = (i__29026 + (1));
seq__29023 = G__29082;
chunk__29024 = G__29083;
count__29025 = G__29084;
i__29026 = G__29085;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__29023);
if(temp__5735__auto____$1){
var seq__29023__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29023__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29023__$1);
var G__29086 = cljs.core.chunk_rest.call(null,seq__29023__$1);
var G__29087 = c__4550__auto__;
var G__29088 = cljs.core.count.call(null,c__4550__auto__);
var G__29089 = (0);
seq__29023 = G__29086;
chunk__29024 = G__29087;
count__29025 = G__29088;
i__29026 = G__29089;
continue;
} else {
var role = cljs.core.first.call(null,seq__29023__$1);
var temp__5735__auto___29090__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29090__$2)){
var spec_29091 = temp__5735__auto___29090__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29091));
} else {
}


var G__29092 = cljs.core.next.call(null,seq__29023__$1);
var G__29093 = null;
var G__29094 = (0);
var G__29095 = (0);
seq__29023 = G__29092;
chunk__29024 = G__29093;
count__29025 = G__29094;
i__29026 = G__29095;
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
var G__29096 = cljs.core.conj.call(null,via,t);
var G__29097 = cljs.core.ex_cause.call(null,t);
via = G__29096;
t = G__29097;
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
var map__29100 = datafied_throwable;
var map__29100__$1 = (((((!((map__29100 == null))))?(((((map__29100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29100):map__29100);
var via = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29101 = cljs.core.last.call(null,via);
var map__29101__$1 = (((((!((map__29101 == null))))?(((((map__29101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29101):map__29101);
var type = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29102 = data;
var map__29102__$1 = (((((!((map__29102 == null))))?(((((map__29102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29102):map__29102);
var problems = cljs.core.get.call(null,map__29102__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29102__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29102__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29103 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29103__$1 = (((((!((map__29103 == null))))?(((((map__29103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29103):map__29103);
var top_data = map__29103__$1;
var source = cljs.core.get.call(null,map__29103__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29108 = phase;
var G__29108__$1 = (((G__29108 instanceof cljs.core.Keyword))?G__29108.fqn:null);
switch (G__29108__$1) {
case "read-source":
var map__29109 = data;
var map__29109__$1 = (((((!((map__29109 == null))))?(((((map__29109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29109):map__29109);
var line = cljs.core.get.call(null,map__29109__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29109__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29111 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29111__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29111,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29111);
var G__29111__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29111__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29111__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29111__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29111__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29112 = top_data;
var G__29112__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29112,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29112);
var G__29112__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29112__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29112__$1);
var G__29112__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29112__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29112__$2);
var G__29112__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29112__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29112__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29112__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29112__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29113 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29113,(0),null);
var method = cljs.core.nth.call(null,vec__29113,(1),null);
var file = cljs.core.nth.call(null,vec__29113,(2),null);
var line = cljs.core.nth.call(null,vec__29113,(3),null);
var G__29116 = top_data;
var G__29116__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29116,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29116);
var G__29116__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29116__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29116__$1);
var G__29116__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__29116__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29116__$2);
var G__29116__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29116__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29116__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29116__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29116__$4;
}

break;
case "execution":
var vec__29117 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29117,(0),null);
var method = cljs.core.nth.call(null,vec__29117,(1),null);
var file = cljs.core.nth.call(null,vec__29117,(2),null);
var line = cljs.core.nth.call(null,vec__29117,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__29117,source__$1,method,file,line,G__29108,G__29108__$1,map__29100,map__29100__$1,via,trace,phase,map__29101,map__29101__$1,type,message,data,map__29102,map__29102__$1,problems,fn,caller,map__29103,map__29103__$1,top_data,source){
return (function (p1__29099_SHARP_){
var or__4131__auto__ = (p1__29099_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29099_SHARP_);
}
});})(vec__29117,source__$1,method,file,line,G__29108,G__29108__$1,map__29100,map__29100__$1,via,trace,phase,map__29101,map__29101__$1,type,message,data,map__29102,map__29102__$1,problems,fn,caller,map__29103,map__29103__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__29120 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29120__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29120,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29120);
var G__29120__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29120__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29120__$1);
var G__29120__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__29120__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29120__$2);
var G__29120__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29120__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29120__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29120__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29120__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29108__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29124){
var map__29125 = p__29124;
var map__29125__$1 = (((((!((map__29125 == null))))?(((((map__29125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29125):map__29125);
var triage_data = map__29125__$1;
var phase = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__29127 = phase;
var G__29127__$1 = (((G__29127 instanceof cljs.core.Keyword))?G__29127.fqn:null);
switch (G__29127__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29128_29137 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29129_29138 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29130_29139 = true;
var _STAR_print_fn_STAR__temp_val__29131_29140 = ((function (_STAR_print_newline_STAR__orig_val__29128_29137,_STAR_print_fn_STAR__orig_val__29129_29138,_STAR_print_newline_STAR__temp_val__29130_29139,sb__4661__auto__,G__29127,G__29127__$1,loc,class_name,simple_class,cause_type,format,map__29125,map__29125__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29128_29137,_STAR_print_fn_STAR__orig_val__29129_29138,_STAR_print_newline_STAR__temp_val__29130_29139,sb__4661__auto__,G__29127,G__29127__$1,loc,class_name,simple_class,cause_type,format,map__29125,map__29125__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29130_29139;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29131_29140;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29128_29137,_STAR_print_fn_STAR__orig_val__29129_29138,_STAR_print_newline_STAR__temp_val__29130_29139,_STAR_print_fn_STAR__temp_val__29131_29140,sb__4661__auto__,G__29127,G__29127__$1,loc,class_name,simple_class,cause_type,format,map__29125,map__29125__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29128_29137,_STAR_print_fn_STAR__orig_val__29129_29138,_STAR_print_newline_STAR__temp_val__29130_29139,_STAR_print_fn_STAR__temp_val__29131_29140,sb__4661__auto__,G__29127,G__29127__$1,loc,class_name,simple_class,cause_type,format,map__29125,map__29125__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29122_SHARP_){
return cljs.core.dissoc.call(null,p1__29122_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29128_29137,_STAR_print_fn_STAR__orig_val__29129_29138,_STAR_print_newline_STAR__temp_val__29130_29139,_STAR_print_fn_STAR__temp_val__29131_29140,sb__4661__auto__,G__29127,G__29127__$1,loc,class_name,simple_class,cause_type,format,map__29125,map__29125__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29128_29137,_STAR_print_fn_STAR__orig_val__29129_29138,_STAR_print_newline_STAR__temp_val__29130_29139,_STAR_print_fn_STAR__temp_val__29131_29140,sb__4661__auto__,G__29127,G__29127__$1,loc,class_name,simple_class,cause_type,format,map__29125,map__29125__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29129_29138;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29128_29137;
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
var _STAR_print_newline_STAR__orig_val__29132_29141 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29133_29142 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29134_29143 = true;
var _STAR_print_fn_STAR__temp_val__29135_29144 = ((function (_STAR_print_newline_STAR__orig_val__29132_29141,_STAR_print_fn_STAR__orig_val__29133_29142,_STAR_print_newline_STAR__temp_val__29134_29143,sb__4661__auto__,G__29127,G__29127__$1,loc,class_name,simple_class,cause_type,format,map__29125,map__29125__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29132_29141,_STAR_print_fn_STAR__orig_val__29133_29142,_STAR_print_newline_STAR__temp_val__29134_29143,sb__4661__auto__,G__29127,G__29127__$1,loc,class_name,simple_class,cause_type,format,map__29125,map__29125__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29134_29143;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29135_29144;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29132_29141,_STAR_print_fn_STAR__orig_val__29133_29142,_STAR_print_newline_STAR__temp_val__29134_29143,_STAR_print_fn_STAR__temp_val__29135_29144,sb__4661__auto__,G__29127,G__29127__$1,loc,class_name,simple_class,cause_type,format,map__29125,map__29125__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29132_29141,_STAR_print_fn_STAR__orig_val__29133_29142,_STAR_print_newline_STAR__temp_val__29134_29143,_STAR_print_fn_STAR__temp_val__29135_29144,sb__4661__auto__,G__29127,G__29127__$1,loc,class_name,simple_class,cause_type,format,map__29125,map__29125__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29123_SHARP_){
return cljs.core.dissoc.call(null,p1__29123_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29132_29141,_STAR_print_fn_STAR__orig_val__29133_29142,_STAR_print_newline_STAR__temp_val__29134_29143,_STAR_print_fn_STAR__temp_val__29135_29144,sb__4661__auto__,G__29127,G__29127__$1,loc,class_name,simple_class,cause_type,format,map__29125,map__29125__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29132_29141,_STAR_print_fn_STAR__orig_val__29133_29142,_STAR_print_newline_STAR__temp_val__29134_29143,_STAR_print_fn_STAR__temp_val__29135_29144,sb__4661__auto__,G__29127,G__29127__$1,loc,class_name,simple_class,cause_type,format,map__29125,map__29125__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29133_29142;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29132_29141;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29127__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1612339731147
