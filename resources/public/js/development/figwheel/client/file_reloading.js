// Compiled by ClojureScript 1.10.520 {}
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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
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
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
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
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27452_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27452_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
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
var seq__27453 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27454 = null;
var count__27455 = (0);
var i__27456 = (0);
while(true){
if((i__27456 < count__27455)){
var n = cljs.core._nth.call(null,chunk__27454,i__27456);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27457 = seq__27453;
var G__27458 = chunk__27454;
var G__27459 = count__27455;
var G__27460 = (i__27456 + (1));
seq__27453 = G__27457;
chunk__27454 = G__27458;
count__27455 = G__27459;
i__27456 = G__27460;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27453);
if(temp__5735__auto__){
var seq__27453__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27453__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27453__$1);
var G__27461 = cljs.core.chunk_rest.call(null,seq__27453__$1);
var G__27462 = c__4550__auto__;
var G__27463 = cljs.core.count.call(null,c__4550__auto__);
var G__27464 = (0);
seq__27453 = G__27461;
chunk__27454 = G__27462;
count__27455 = G__27463;
i__27456 = G__27464;
continue;
} else {
var n = cljs.core.first.call(null,seq__27453__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27465 = cljs.core.next.call(null,seq__27453__$1);
var G__27466 = null;
var G__27467 = (0);
var G__27468 = (0);
seq__27453 = G__27465;
chunk__27454 = G__27466;
count__27455 = G__27467;
i__27456 = G__27468;
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
return cljs.core.some.call(null,(function (p__27469){
var vec__27470 = p__27469;
var _ = cljs.core.nth.call(null,vec__27470,(0),null);
var v = cljs.core.nth.call(null,vec__27470,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__27473){
var vec__27474 = p__27473;
var k = cljs.core.nth.call(null,vec__27474,(0),null);
var v = cljs.core.nth.call(null,vec__27474,(1),null);
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

var seq__27486_27494 = cljs.core.seq.call(null,deps);
var chunk__27487_27495 = null;
var count__27488_27496 = (0);
var i__27489_27497 = (0);
while(true){
if((i__27489_27497 < count__27488_27496)){
var dep_27498 = cljs.core._nth.call(null,chunk__27487_27495,i__27489_27497);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27498;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27498));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27498,(depth + (1)),state);
} else {
}


var G__27499 = seq__27486_27494;
var G__27500 = chunk__27487_27495;
var G__27501 = count__27488_27496;
var G__27502 = (i__27489_27497 + (1));
seq__27486_27494 = G__27499;
chunk__27487_27495 = G__27500;
count__27488_27496 = G__27501;
i__27489_27497 = G__27502;
continue;
} else {
var temp__5735__auto___27503 = cljs.core.seq.call(null,seq__27486_27494);
if(temp__5735__auto___27503){
var seq__27486_27504__$1 = temp__5735__auto___27503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27486_27504__$1)){
var c__4550__auto___27505 = cljs.core.chunk_first.call(null,seq__27486_27504__$1);
var G__27506 = cljs.core.chunk_rest.call(null,seq__27486_27504__$1);
var G__27507 = c__4550__auto___27505;
var G__27508 = cljs.core.count.call(null,c__4550__auto___27505);
var G__27509 = (0);
seq__27486_27494 = G__27506;
chunk__27487_27495 = G__27507;
count__27488_27496 = G__27508;
i__27489_27497 = G__27509;
continue;
} else {
var dep_27510 = cljs.core.first.call(null,seq__27486_27504__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27510;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27510));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27510,(depth + (1)),state);
} else {
}


var G__27511 = cljs.core.next.call(null,seq__27486_27504__$1);
var G__27512 = null;
var G__27513 = (0);
var G__27514 = (0);
seq__27486_27494 = G__27511;
chunk__27487_27495 = G__27512;
count__27488_27496 = G__27513;
i__27489_27497 = G__27514;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27490){
var vec__27491 = p__27490;
var seq__27492 = cljs.core.seq.call(null,vec__27491);
var first__27493 = cljs.core.first.call(null,seq__27492);
var seq__27492__$1 = cljs.core.next.call(null,seq__27492);
var x = first__27493;
var xs = seq__27492__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27491,seq__27492,first__27493,seq__27492__$1,x,xs,get_deps__$1){
return (function (p1__27477_SHARP_){
return clojure.set.difference.call(null,p1__27477_SHARP_,x);
});})(vec__27491,seq__27492,first__27493,seq__27492__$1,x,xs,get_deps__$1))
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
var seq__27515 = cljs.core.seq.call(null,provides);
var chunk__27516 = null;
var count__27517 = (0);
var i__27518 = (0);
while(true){
if((i__27518 < count__27517)){
var prov = cljs.core._nth.call(null,chunk__27516,i__27518);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27527_27535 = cljs.core.seq.call(null,requires);
var chunk__27528_27536 = null;
var count__27529_27537 = (0);
var i__27530_27538 = (0);
while(true){
if((i__27530_27538 < count__27529_27537)){
var req_27539 = cljs.core._nth.call(null,chunk__27528_27536,i__27530_27538);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27539,prov);


var G__27540 = seq__27527_27535;
var G__27541 = chunk__27528_27536;
var G__27542 = count__27529_27537;
var G__27543 = (i__27530_27538 + (1));
seq__27527_27535 = G__27540;
chunk__27528_27536 = G__27541;
count__27529_27537 = G__27542;
i__27530_27538 = G__27543;
continue;
} else {
var temp__5735__auto___27544 = cljs.core.seq.call(null,seq__27527_27535);
if(temp__5735__auto___27544){
var seq__27527_27545__$1 = temp__5735__auto___27544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27527_27545__$1)){
var c__4550__auto___27546 = cljs.core.chunk_first.call(null,seq__27527_27545__$1);
var G__27547 = cljs.core.chunk_rest.call(null,seq__27527_27545__$1);
var G__27548 = c__4550__auto___27546;
var G__27549 = cljs.core.count.call(null,c__4550__auto___27546);
var G__27550 = (0);
seq__27527_27535 = G__27547;
chunk__27528_27536 = G__27548;
count__27529_27537 = G__27549;
i__27530_27538 = G__27550;
continue;
} else {
var req_27551 = cljs.core.first.call(null,seq__27527_27545__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27551,prov);


var G__27552 = cljs.core.next.call(null,seq__27527_27545__$1);
var G__27553 = null;
var G__27554 = (0);
var G__27555 = (0);
seq__27527_27535 = G__27552;
chunk__27528_27536 = G__27553;
count__27529_27537 = G__27554;
i__27530_27538 = G__27555;
continue;
}
} else {
}
}
break;
}


var G__27556 = seq__27515;
var G__27557 = chunk__27516;
var G__27558 = count__27517;
var G__27559 = (i__27518 + (1));
seq__27515 = G__27556;
chunk__27516 = G__27557;
count__27517 = G__27558;
i__27518 = G__27559;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27515);
if(temp__5735__auto__){
var seq__27515__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27515__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27515__$1);
var G__27560 = cljs.core.chunk_rest.call(null,seq__27515__$1);
var G__27561 = c__4550__auto__;
var G__27562 = cljs.core.count.call(null,c__4550__auto__);
var G__27563 = (0);
seq__27515 = G__27560;
chunk__27516 = G__27561;
count__27517 = G__27562;
i__27518 = G__27563;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27515__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27531_27564 = cljs.core.seq.call(null,requires);
var chunk__27532_27565 = null;
var count__27533_27566 = (0);
var i__27534_27567 = (0);
while(true){
if((i__27534_27567 < count__27533_27566)){
var req_27568 = cljs.core._nth.call(null,chunk__27532_27565,i__27534_27567);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27568,prov);


var G__27569 = seq__27531_27564;
var G__27570 = chunk__27532_27565;
var G__27571 = count__27533_27566;
var G__27572 = (i__27534_27567 + (1));
seq__27531_27564 = G__27569;
chunk__27532_27565 = G__27570;
count__27533_27566 = G__27571;
i__27534_27567 = G__27572;
continue;
} else {
var temp__5735__auto___27573__$1 = cljs.core.seq.call(null,seq__27531_27564);
if(temp__5735__auto___27573__$1){
var seq__27531_27574__$1 = temp__5735__auto___27573__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27531_27574__$1)){
var c__4550__auto___27575 = cljs.core.chunk_first.call(null,seq__27531_27574__$1);
var G__27576 = cljs.core.chunk_rest.call(null,seq__27531_27574__$1);
var G__27577 = c__4550__auto___27575;
var G__27578 = cljs.core.count.call(null,c__4550__auto___27575);
var G__27579 = (0);
seq__27531_27564 = G__27576;
chunk__27532_27565 = G__27577;
count__27533_27566 = G__27578;
i__27534_27567 = G__27579;
continue;
} else {
var req_27580 = cljs.core.first.call(null,seq__27531_27574__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27580,prov);


var G__27581 = cljs.core.next.call(null,seq__27531_27574__$1);
var G__27582 = null;
var G__27583 = (0);
var G__27584 = (0);
seq__27531_27564 = G__27581;
chunk__27532_27565 = G__27582;
count__27533_27566 = G__27583;
i__27534_27567 = G__27584;
continue;
}
} else {
}
}
break;
}


var G__27585 = cljs.core.next.call(null,seq__27515__$1);
var G__27586 = null;
var G__27587 = (0);
var G__27588 = (0);
seq__27515 = G__27585;
chunk__27516 = G__27586;
count__27517 = G__27587;
i__27518 = G__27588;
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
var seq__27589_27593 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27590_27594 = null;
var count__27591_27595 = (0);
var i__27592_27596 = (0);
while(true){
if((i__27592_27596 < count__27591_27595)){
var ns_27597 = cljs.core._nth.call(null,chunk__27590_27594,i__27592_27596);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27597);


var G__27598 = seq__27589_27593;
var G__27599 = chunk__27590_27594;
var G__27600 = count__27591_27595;
var G__27601 = (i__27592_27596 + (1));
seq__27589_27593 = G__27598;
chunk__27590_27594 = G__27599;
count__27591_27595 = G__27600;
i__27592_27596 = G__27601;
continue;
} else {
var temp__5735__auto___27602 = cljs.core.seq.call(null,seq__27589_27593);
if(temp__5735__auto___27602){
var seq__27589_27603__$1 = temp__5735__auto___27602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27589_27603__$1)){
var c__4550__auto___27604 = cljs.core.chunk_first.call(null,seq__27589_27603__$1);
var G__27605 = cljs.core.chunk_rest.call(null,seq__27589_27603__$1);
var G__27606 = c__4550__auto___27604;
var G__27607 = cljs.core.count.call(null,c__4550__auto___27604);
var G__27608 = (0);
seq__27589_27593 = G__27605;
chunk__27590_27594 = G__27606;
count__27591_27595 = G__27607;
i__27592_27596 = G__27608;
continue;
} else {
var ns_27609 = cljs.core.first.call(null,seq__27589_27603__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27609);


var G__27610 = cljs.core.next.call(null,seq__27589_27603__$1);
var G__27611 = null;
var G__27612 = (0);
var G__27613 = (0);
seq__27589_27593 = G__27610;
chunk__27590_27594 = G__27611;
count__27591_27595 = G__27612;
i__27592_27596 = G__27613;
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
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
var G__27614__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27615__i = 0, G__27615__a = new Array(arguments.length -  0);
while (G__27615__i < G__27615__a.length) {G__27615__a[G__27615__i] = arguments[G__27615__i + 0]; ++G__27615__i;}
  args = new cljs.core.IndexedSeq(G__27615__a,0,null);
} 
return G__27614__delegate.call(this,args);};
G__27614.cljs$lang$maxFixedArity = 0;
G__27614.cljs$lang$applyTo = (function (arglist__27616){
var args = cljs.core.seq(arglist__27616);
return G__27614__delegate(args);
});
G__27614.cljs$core$IFn$_invoke$arity$variadic = G__27614__delegate;
return G__27614;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27617_SHARP_,p2__27618_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27617_SHARP_)),p2__27618_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27619_SHARP_,p2__27620_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27619_SHARP_),p2__27620_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27621 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27621.addCallback(((function (G__27621){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27621))
);

G__27621.addErrback(((function (G__27621){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27621))
);

return G__27621;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27622){if((e27622 instanceof Error)){
var e = e27622;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27622;

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
}catch (e27623){if((e27623 instanceof Error)){
var e = e27623;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27623;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27624 = cljs.core._EQ_;
var expr__27625 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27624.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27625))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27624.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27625))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27624.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27625))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27624,expr__27625){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27624,expr__27625))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27627,callback){
var map__27628 = p__27627;
var map__27628__$1 = (((((!((map__27628 == null))))?(((((map__27628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27628):map__27628);
var file_msg = map__27628__$1;
var request_url = cljs.core.get.call(null,map__27628__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27628,map__27628__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27628,map__27628__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23687__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto__){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto__){
return (function (state_27666){
var state_val_27667 = (state_27666[(1)]);
if((state_val_27667 === (7))){
var inst_27662 = (state_27666[(2)]);
var state_27666__$1 = state_27666;
var statearr_27668_27694 = state_27666__$1;
(statearr_27668_27694[(2)] = inst_27662);

(statearr_27668_27694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (1))){
var state_27666__$1 = state_27666;
var statearr_27669_27695 = state_27666__$1;
(statearr_27669_27695[(2)] = null);

(statearr_27669_27695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (4))){
var inst_27632 = (state_27666[(7)]);
var inst_27632__$1 = (state_27666[(2)]);
var state_27666__$1 = (function (){var statearr_27670 = state_27666;
(statearr_27670[(7)] = inst_27632__$1);

return statearr_27670;
})();
if(cljs.core.truth_(inst_27632__$1)){
var statearr_27671_27696 = state_27666__$1;
(statearr_27671_27696[(1)] = (5));

} else {
var statearr_27672_27697 = state_27666__$1;
(statearr_27672_27697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (15))){
var inst_27647 = (state_27666[(8)]);
var inst_27645 = (state_27666[(9)]);
var inst_27649 = inst_27647.call(null,inst_27645);
var state_27666__$1 = state_27666;
var statearr_27673_27698 = state_27666__$1;
(statearr_27673_27698[(2)] = inst_27649);

(statearr_27673_27698[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (13))){
var inst_27656 = (state_27666[(2)]);
var state_27666__$1 = state_27666;
var statearr_27674_27699 = state_27666__$1;
(statearr_27674_27699[(2)] = inst_27656);

(statearr_27674_27699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (6))){
var state_27666__$1 = state_27666;
var statearr_27675_27700 = state_27666__$1;
(statearr_27675_27700[(2)] = null);

(statearr_27675_27700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (17))){
var inst_27653 = (state_27666[(2)]);
var state_27666__$1 = state_27666;
var statearr_27676_27701 = state_27666__$1;
(statearr_27676_27701[(2)] = inst_27653);

(statearr_27676_27701[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (3))){
var inst_27664 = (state_27666[(2)]);
var state_27666__$1 = state_27666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27666__$1,inst_27664);
} else {
if((state_val_27667 === (12))){
var state_27666__$1 = state_27666;
var statearr_27677_27702 = state_27666__$1;
(statearr_27677_27702[(2)] = null);

(statearr_27677_27702[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (2))){
var state_27666__$1 = state_27666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27666__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27667 === (11))){
var inst_27637 = (state_27666[(10)]);
var inst_27643 = figwheel.client.file_reloading.blocking_load.call(null,inst_27637);
var state_27666__$1 = state_27666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27666__$1,(14),inst_27643);
} else {
if((state_val_27667 === (9))){
var inst_27637 = (state_27666[(10)]);
var state_27666__$1 = state_27666;
if(cljs.core.truth_(inst_27637)){
var statearr_27678_27703 = state_27666__$1;
(statearr_27678_27703[(1)] = (11));

} else {
var statearr_27679_27704 = state_27666__$1;
(statearr_27679_27704[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (5))){
var inst_27632 = (state_27666[(7)]);
var inst_27638 = (state_27666[(11)]);
var inst_27637 = cljs.core.nth.call(null,inst_27632,(0),null);
var inst_27638__$1 = cljs.core.nth.call(null,inst_27632,(1),null);
var state_27666__$1 = (function (){var statearr_27680 = state_27666;
(statearr_27680[(11)] = inst_27638__$1);

(statearr_27680[(10)] = inst_27637);

return statearr_27680;
})();
if(cljs.core.truth_(inst_27638__$1)){
var statearr_27681_27705 = state_27666__$1;
(statearr_27681_27705[(1)] = (8));

} else {
var statearr_27682_27706 = state_27666__$1;
(statearr_27682_27706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (14))){
var inst_27647 = (state_27666[(8)]);
var inst_27637 = (state_27666[(10)]);
var inst_27645 = (state_27666[(2)]);
var inst_27646 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27647__$1 = cljs.core.get.call(null,inst_27646,inst_27637);
var state_27666__$1 = (function (){var statearr_27683 = state_27666;
(statearr_27683[(8)] = inst_27647__$1);

(statearr_27683[(9)] = inst_27645);

return statearr_27683;
})();
if(cljs.core.truth_(inst_27647__$1)){
var statearr_27684_27707 = state_27666__$1;
(statearr_27684_27707[(1)] = (15));

} else {
var statearr_27685_27708 = state_27666__$1;
(statearr_27685_27708[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (16))){
var inst_27645 = (state_27666[(9)]);
var inst_27651 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27645);
var state_27666__$1 = state_27666;
var statearr_27686_27709 = state_27666__$1;
(statearr_27686_27709[(2)] = inst_27651);

(statearr_27686_27709[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (10))){
var inst_27658 = (state_27666[(2)]);
var state_27666__$1 = (function (){var statearr_27687 = state_27666;
(statearr_27687[(12)] = inst_27658);

return statearr_27687;
})();
var statearr_27688_27710 = state_27666__$1;
(statearr_27688_27710[(2)] = null);

(statearr_27688_27710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (8))){
var inst_27638 = (state_27666[(11)]);
var inst_27640 = eval(inst_27638);
var state_27666__$1 = state_27666;
var statearr_27689_27711 = state_27666__$1;
(statearr_27689_27711[(2)] = inst_27640);

(statearr_27689_27711[(1)] = (10));


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
});})(c__23687__auto__))
;
return ((function (switch__23592__auto__,c__23687__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23593__auto__ = null;
var figwheel$client$file_reloading$state_machine__23593__auto____0 = (function (){
var statearr_27690 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27690[(0)] = figwheel$client$file_reloading$state_machine__23593__auto__);

(statearr_27690[(1)] = (1));

return statearr_27690;
});
var figwheel$client$file_reloading$state_machine__23593__auto____1 = (function (state_27666){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_27666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e27691){if((e27691 instanceof Object)){
var ex__23596__auto__ = e27691;
var statearr_27692_27712 = state_27666;
(statearr_27692_27712[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27713 = state_27666;
state_27666 = G__27713;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23593__auto__ = function(state_27666){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23593__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23593__auto____1.call(this,state_27666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23593__auto____0;
figwheel$client$file_reloading$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23593__auto____1;
return figwheel$client$file_reloading$state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto__))
})();
var state__23689__auto__ = (function (){var statearr_27693 = f__23688__auto__.call(null);
(statearr_27693[(6)] = c__23687__auto__);

return statearr_27693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto__))
);

return c__23687__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27715 = arguments.length;
switch (G__27715) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27717,callback){
var map__27718 = p__27717;
var map__27718__$1 = (((((!((map__27718 == null))))?(((((map__27718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27718):map__27718);
var file_msg = map__27718__$1;
var namespace = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27718,map__27718__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27718,map__27718__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27720){
var map__27721 = p__27720;
var map__27721__$1 = (((((!((map__27721 == null))))?(((((map__27721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27721):map__27721);
var file_msg = map__27721__$1;
var namespace = cljs.core.get.call(null,map__27721__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27723){
var map__27724 = p__27723;
var map__27724__$1 = (((((!((map__27724 == null))))?(((((map__27724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27724):map__27724);
var file_msg = map__27724__$1;
var namespace = cljs.core.get.call(null,map__27724__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27726,callback){
var map__27727 = p__27726;
var map__27727__$1 = (((((!((map__27727 == null))))?(((((map__27727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27727):map__27727);
var file_msg = map__27727__$1;
var request_url = cljs.core.get.call(null,map__27727__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27727__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23687__auto___27777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___27777,out){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___27777,out){
return (function (state_27762){
var state_val_27763 = (state_27762[(1)]);
if((state_val_27763 === (1))){
var inst_27736 = cljs.core.seq.call(null,files);
var inst_27737 = cljs.core.first.call(null,inst_27736);
var inst_27738 = cljs.core.next.call(null,inst_27736);
var inst_27739 = files;
var state_27762__$1 = (function (){var statearr_27764 = state_27762;
(statearr_27764[(7)] = inst_27739);

(statearr_27764[(8)] = inst_27738);

(statearr_27764[(9)] = inst_27737);

return statearr_27764;
})();
var statearr_27765_27778 = state_27762__$1;
(statearr_27765_27778[(2)] = null);

(statearr_27765_27778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (2))){
var inst_27739 = (state_27762[(7)]);
var inst_27745 = (state_27762[(10)]);
var inst_27744 = cljs.core.seq.call(null,inst_27739);
var inst_27745__$1 = cljs.core.first.call(null,inst_27744);
var inst_27746 = cljs.core.next.call(null,inst_27744);
var inst_27747 = (inst_27745__$1 == null);
var inst_27748 = cljs.core.not.call(null,inst_27747);
var state_27762__$1 = (function (){var statearr_27766 = state_27762;
(statearr_27766[(11)] = inst_27746);

(statearr_27766[(10)] = inst_27745__$1);

return statearr_27766;
})();
if(inst_27748){
var statearr_27767_27779 = state_27762__$1;
(statearr_27767_27779[(1)] = (4));

} else {
var statearr_27768_27780 = state_27762__$1;
(statearr_27768_27780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (3))){
var inst_27760 = (state_27762[(2)]);
var state_27762__$1 = state_27762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27762__$1,inst_27760);
} else {
if((state_val_27763 === (4))){
var inst_27745 = (state_27762[(10)]);
var inst_27750 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27745);
var state_27762__$1 = state_27762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27762__$1,(7),inst_27750);
} else {
if((state_val_27763 === (5))){
var inst_27756 = cljs.core.async.close_BANG_.call(null,out);
var state_27762__$1 = state_27762;
var statearr_27769_27781 = state_27762__$1;
(statearr_27769_27781[(2)] = inst_27756);

(statearr_27769_27781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (6))){
var inst_27758 = (state_27762[(2)]);
var state_27762__$1 = state_27762;
var statearr_27770_27782 = state_27762__$1;
(statearr_27770_27782[(2)] = inst_27758);

(statearr_27770_27782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (7))){
var inst_27746 = (state_27762[(11)]);
var inst_27752 = (state_27762[(2)]);
var inst_27753 = cljs.core.async.put_BANG_.call(null,out,inst_27752);
var inst_27739 = inst_27746;
var state_27762__$1 = (function (){var statearr_27771 = state_27762;
(statearr_27771[(7)] = inst_27739);

(statearr_27771[(12)] = inst_27753);

return statearr_27771;
})();
var statearr_27772_27783 = state_27762__$1;
(statearr_27772_27783[(2)] = null);

(statearr_27772_27783[(1)] = (2));


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
});})(c__23687__auto___27777,out))
;
return ((function (switch__23592__auto__,c__23687__auto___27777,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23593__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23593__auto____0 = (function (){
var statearr_27773 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27773[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23593__auto__);

(statearr_27773[(1)] = (1));

return statearr_27773;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23593__auto____1 = (function (state_27762){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_27762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e27774){if((e27774 instanceof Object)){
var ex__23596__auto__ = e27774;
var statearr_27775_27784 = state_27762;
(statearr_27775_27784[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27785 = state_27762;
state_27762 = G__27785;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23593__auto__ = function(state_27762){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23593__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23593__auto____1.call(this,state_27762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23593__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23593__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___27777,out))
})();
var state__23689__auto__ = (function (){var statearr_27776 = f__23688__auto__.call(null);
(statearr_27776[(6)] = c__23687__auto___27777);

return statearr_27776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___27777,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27786,opts){
var map__27787 = p__27786;
var map__27787__$1 = (((((!((map__27787 == null))))?(((((map__27787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27787):map__27787);
var eval_body = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27789){var e = e27789;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27790_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27790_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
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
return cljs.core.map.call(null,(function (p__27791){
var vec__27792 = p__27791;
var k = cljs.core.nth.call(null,vec__27792,(0),null);
var v = cljs.core.nth.call(null,vec__27792,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27795){
var vec__27796 = p__27795;
var k = cljs.core.nth.call(null,vec__27796,(0),null);
var v = cljs.core.nth.call(null,vec__27796,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27802,p__27803){
var map__27804 = p__27802;
var map__27804__$1 = (((((!((map__27804 == null))))?(((((map__27804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27804):map__27804);
var opts = map__27804__$1;
var before_jsload = cljs.core.get.call(null,map__27804__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27804__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27804__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27805 = p__27803;
var map__27805__$1 = (((((!((map__27805 == null))))?(((((map__27805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27805):map__27805);
var msg = map__27805__$1;
var files = cljs.core.get.call(null,map__27805__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27805__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27805__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23687__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27959){
var state_val_27960 = (state_27959[(1)]);
if((state_val_27960 === (7))){
var inst_27820 = (state_27959[(7)]);
var inst_27821 = (state_27959[(8)]);
var inst_27822 = (state_27959[(9)]);
var inst_27819 = (state_27959[(10)]);
var inst_27827 = cljs.core._nth.call(null,inst_27820,inst_27822);
var inst_27828 = figwheel.client.file_reloading.eval_body.call(null,inst_27827,opts);
var inst_27829 = (inst_27822 + (1));
var tmp27961 = inst_27820;
var tmp27962 = inst_27821;
var tmp27963 = inst_27819;
var inst_27819__$1 = tmp27963;
var inst_27820__$1 = tmp27961;
var inst_27821__$1 = tmp27962;
var inst_27822__$1 = inst_27829;
var state_27959__$1 = (function (){var statearr_27964 = state_27959;
(statearr_27964[(7)] = inst_27820__$1);

(statearr_27964[(11)] = inst_27828);

(statearr_27964[(8)] = inst_27821__$1);

(statearr_27964[(9)] = inst_27822__$1);

(statearr_27964[(10)] = inst_27819__$1);

return statearr_27964;
})();
var statearr_27965_28048 = state_27959__$1;
(statearr_27965_28048[(2)] = null);

(statearr_27965_28048[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (20))){
var inst_27862 = (state_27959[(12)]);
var inst_27870 = figwheel.client.file_reloading.sort_files.call(null,inst_27862);
var state_27959__$1 = state_27959;
var statearr_27966_28049 = state_27959__$1;
(statearr_27966_28049[(2)] = inst_27870);

(statearr_27966_28049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (27))){
var state_27959__$1 = state_27959;
var statearr_27967_28050 = state_27959__$1;
(statearr_27967_28050[(2)] = null);

(statearr_27967_28050[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (1))){
var inst_27811 = (state_27959[(13)]);
var inst_27808 = before_jsload.call(null,files);
var inst_27809 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27810 = (function (){return ((function (inst_27811,inst_27808,inst_27809,state_val_27960,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27799_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27799_SHARP_);
});
;})(inst_27811,inst_27808,inst_27809,state_val_27960,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27811__$1 = cljs.core.filter.call(null,inst_27810,files);
var inst_27812 = cljs.core.not_empty.call(null,inst_27811__$1);
var state_27959__$1 = (function (){var statearr_27968 = state_27959;
(statearr_27968[(13)] = inst_27811__$1);

(statearr_27968[(14)] = inst_27809);

(statearr_27968[(15)] = inst_27808);

return statearr_27968;
})();
if(cljs.core.truth_(inst_27812)){
var statearr_27969_28051 = state_27959__$1;
(statearr_27969_28051[(1)] = (2));

} else {
var statearr_27970_28052 = state_27959__$1;
(statearr_27970_28052[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (24))){
var state_27959__$1 = state_27959;
var statearr_27971_28053 = state_27959__$1;
(statearr_27971_28053[(2)] = null);

(statearr_27971_28053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (39))){
var inst_27912 = (state_27959[(16)]);
var state_27959__$1 = state_27959;
var statearr_27972_28054 = state_27959__$1;
(statearr_27972_28054[(2)] = inst_27912);

(statearr_27972_28054[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (46))){
var inst_27954 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_27973_28055 = state_27959__$1;
(statearr_27973_28055[(2)] = inst_27954);

(statearr_27973_28055[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (4))){
var inst_27856 = (state_27959[(2)]);
var inst_27857 = cljs.core.List.EMPTY;
var inst_27858 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27857);
var inst_27859 = (function (){return ((function (inst_27856,inst_27857,inst_27858,state_val_27960,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27800_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27800_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27800_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27800_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27856,inst_27857,inst_27858,state_val_27960,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27860 = cljs.core.filter.call(null,inst_27859,files);
var inst_27861 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27862 = cljs.core.concat.call(null,inst_27860,inst_27861);
var state_27959__$1 = (function (){var statearr_27974 = state_27959;
(statearr_27974[(17)] = inst_27856);

(statearr_27974[(18)] = inst_27858);

(statearr_27974[(12)] = inst_27862);

return statearr_27974;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27975_28056 = state_27959__$1;
(statearr_27975_28056[(1)] = (16));

} else {
var statearr_27976_28057 = state_27959__$1;
(statearr_27976_28057[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (15))){
var inst_27846 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_27977_28058 = state_27959__$1;
(statearr_27977_28058[(2)] = inst_27846);

(statearr_27977_28058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (21))){
var inst_27872 = (state_27959[(19)]);
var inst_27872__$1 = (state_27959[(2)]);
var inst_27873 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27872__$1);
var state_27959__$1 = (function (){var statearr_27978 = state_27959;
(statearr_27978[(19)] = inst_27872__$1);

return statearr_27978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27959__$1,(22),inst_27873);
} else {
if((state_val_27960 === (31))){
var inst_27957 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27959__$1,inst_27957);
} else {
if((state_val_27960 === (32))){
var inst_27912 = (state_27959[(16)]);
var inst_27917 = inst_27912.cljs$lang$protocol_mask$partition0$;
var inst_27918 = (inst_27917 & (64));
var inst_27919 = inst_27912.cljs$core$ISeq$;
var inst_27920 = (cljs.core.PROTOCOL_SENTINEL === inst_27919);
var inst_27921 = ((inst_27918) || (inst_27920));
var state_27959__$1 = state_27959;
if(cljs.core.truth_(inst_27921)){
var statearr_27979_28059 = state_27959__$1;
(statearr_27979_28059[(1)] = (35));

} else {
var statearr_27980_28060 = state_27959__$1;
(statearr_27980_28060[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (40))){
var inst_27934 = (state_27959[(20)]);
var inst_27933 = (state_27959[(2)]);
var inst_27934__$1 = cljs.core.get.call(null,inst_27933,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27935 = cljs.core.get.call(null,inst_27933,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27936 = cljs.core.not_empty.call(null,inst_27934__$1);
var state_27959__$1 = (function (){var statearr_27981 = state_27959;
(statearr_27981[(20)] = inst_27934__$1);

(statearr_27981[(21)] = inst_27935);

return statearr_27981;
})();
if(cljs.core.truth_(inst_27936)){
var statearr_27982_28061 = state_27959__$1;
(statearr_27982_28061[(1)] = (41));

} else {
var statearr_27983_28062 = state_27959__$1;
(statearr_27983_28062[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (33))){
var state_27959__$1 = state_27959;
var statearr_27984_28063 = state_27959__$1;
(statearr_27984_28063[(2)] = false);

(statearr_27984_28063[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (13))){
var inst_27832 = (state_27959[(22)]);
var inst_27836 = cljs.core.chunk_first.call(null,inst_27832);
var inst_27837 = cljs.core.chunk_rest.call(null,inst_27832);
var inst_27838 = cljs.core.count.call(null,inst_27836);
var inst_27819 = inst_27837;
var inst_27820 = inst_27836;
var inst_27821 = inst_27838;
var inst_27822 = (0);
var state_27959__$1 = (function (){var statearr_27985 = state_27959;
(statearr_27985[(7)] = inst_27820);

(statearr_27985[(8)] = inst_27821);

(statearr_27985[(9)] = inst_27822);

(statearr_27985[(10)] = inst_27819);

return statearr_27985;
})();
var statearr_27986_28064 = state_27959__$1;
(statearr_27986_28064[(2)] = null);

(statearr_27986_28064[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (22))){
var inst_27875 = (state_27959[(23)]);
var inst_27880 = (state_27959[(24)]);
var inst_27876 = (state_27959[(25)]);
var inst_27872 = (state_27959[(19)]);
var inst_27875__$1 = (state_27959[(2)]);
var inst_27876__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27875__$1);
var inst_27877 = (function (){var all_files = inst_27872;
var res_SINGLEQUOTE_ = inst_27875__$1;
var res = inst_27876__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27875,inst_27880,inst_27876,inst_27872,inst_27875__$1,inst_27876__$1,state_val_27960,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27801_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27801_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27875,inst_27880,inst_27876,inst_27872,inst_27875__$1,inst_27876__$1,state_val_27960,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27878 = cljs.core.filter.call(null,inst_27877,inst_27875__$1);
var inst_27879 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27880__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27879);
var inst_27881 = cljs.core.not_empty.call(null,inst_27880__$1);
var state_27959__$1 = (function (){var statearr_27987 = state_27959;
(statearr_27987[(23)] = inst_27875__$1);

(statearr_27987[(24)] = inst_27880__$1);

(statearr_27987[(25)] = inst_27876__$1);

(statearr_27987[(26)] = inst_27878);

return statearr_27987;
})();
if(cljs.core.truth_(inst_27881)){
var statearr_27988_28065 = state_27959__$1;
(statearr_27988_28065[(1)] = (23));

} else {
var statearr_27989_28066 = state_27959__$1;
(statearr_27989_28066[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (36))){
var state_27959__$1 = state_27959;
var statearr_27990_28067 = state_27959__$1;
(statearr_27990_28067[(2)] = false);

(statearr_27990_28067[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (41))){
var inst_27934 = (state_27959[(20)]);
var inst_27938 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27939 = cljs.core.map.call(null,inst_27938,inst_27934);
var inst_27940 = cljs.core.pr_str.call(null,inst_27939);
var inst_27941 = ["figwheel-no-load meta-data: ",inst_27940].join('');
var inst_27942 = figwheel.client.utils.log.call(null,inst_27941);
var state_27959__$1 = state_27959;
var statearr_27991_28068 = state_27959__$1;
(statearr_27991_28068[(2)] = inst_27942);

(statearr_27991_28068[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (43))){
var inst_27935 = (state_27959[(21)]);
var inst_27945 = (state_27959[(2)]);
var inst_27946 = cljs.core.not_empty.call(null,inst_27935);
var state_27959__$1 = (function (){var statearr_27992 = state_27959;
(statearr_27992[(27)] = inst_27945);

return statearr_27992;
})();
if(cljs.core.truth_(inst_27946)){
var statearr_27993_28069 = state_27959__$1;
(statearr_27993_28069[(1)] = (44));

} else {
var statearr_27994_28070 = state_27959__$1;
(statearr_27994_28070[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (29))){
var inst_27912 = (state_27959[(16)]);
var inst_27875 = (state_27959[(23)]);
var inst_27880 = (state_27959[(24)]);
var inst_27876 = (state_27959[(25)]);
var inst_27872 = (state_27959[(19)]);
var inst_27878 = (state_27959[(26)]);
var inst_27908 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27911 = (function (){var all_files = inst_27872;
var res_SINGLEQUOTE_ = inst_27875;
var res = inst_27876;
var files_not_loaded = inst_27878;
var dependencies_that_loaded = inst_27880;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27912,inst_27875,inst_27880,inst_27876,inst_27872,inst_27878,inst_27908,state_val_27960,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27910){
var map__27995 = p__27910;
var map__27995__$1 = (((((!((map__27995 == null))))?(((((map__27995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27995):map__27995);
var namespace = cljs.core.get.call(null,map__27995__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27912,inst_27875,inst_27880,inst_27876,inst_27872,inst_27878,inst_27908,state_val_27960,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27912__$1 = cljs.core.group_by.call(null,inst_27911,inst_27878);
var inst_27914 = (inst_27912__$1 == null);
var inst_27915 = cljs.core.not.call(null,inst_27914);
var state_27959__$1 = (function (){var statearr_27997 = state_27959;
(statearr_27997[(28)] = inst_27908);

(statearr_27997[(16)] = inst_27912__$1);

return statearr_27997;
})();
if(inst_27915){
var statearr_27998_28071 = state_27959__$1;
(statearr_27998_28071[(1)] = (32));

} else {
var statearr_27999_28072 = state_27959__$1;
(statearr_27999_28072[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (44))){
var inst_27935 = (state_27959[(21)]);
var inst_27948 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27935);
var inst_27949 = cljs.core.pr_str.call(null,inst_27948);
var inst_27950 = ["not required: ",inst_27949].join('');
var inst_27951 = figwheel.client.utils.log.call(null,inst_27950);
var state_27959__$1 = state_27959;
var statearr_28000_28073 = state_27959__$1;
(statearr_28000_28073[(2)] = inst_27951);

(statearr_28000_28073[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (6))){
var inst_27853 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_28001_28074 = state_27959__$1;
(statearr_28001_28074[(2)] = inst_27853);

(statearr_28001_28074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (28))){
var inst_27878 = (state_27959[(26)]);
var inst_27905 = (state_27959[(2)]);
var inst_27906 = cljs.core.not_empty.call(null,inst_27878);
var state_27959__$1 = (function (){var statearr_28002 = state_27959;
(statearr_28002[(29)] = inst_27905);

return statearr_28002;
})();
if(cljs.core.truth_(inst_27906)){
var statearr_28003_28075 = state_27959__$1;
(statearr_28003_28075[(1)] = (29));

} else {
var statearr_28004_28076 = state_27959__$1;
(statearr_28004_28076[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (25))){
var inst_27876 = (state_27959[(25)]);
var inst_27892 = (state_27959[(2)]);
var inst_27893 = cljs.core.not_empty.call(null,inst_27876);
var state_27959__$1 = (function (){var statearr_28005 = state_27959;
(statearr_28005[(30)] = inst_27892);

return statearr_28005;
})();
if(cljs.core.truth_(inst_27893)){
var statearr_28006_28077 = state_27959__$1;
(statearr_28006_28077[(1)] = (26));

} else {
var statearr_28007_28078 = state_27959__$1;
(statearr_28007_28078[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (34))){
var inst_27928 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
if(cljs.core.truth_(inst_27928)){
var statearr_28008_28079 = state_27959__$1;
(statearr_28008_28079[(1)] = (38));

} else {
var statearr_28009_28080 = state_27959__$1;
(statearr_28009_28080[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (17))){
var state_27959__$1 = state_27959;
var statearr_28010_28081 = state_27959__$1;
(statearr_28010_28081[(2)] = recompile_dependents);

(statearr_28010_28081[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (3))){
var state_27959__$1 = state_27959;
var statearr_28011_28082 = state_27959__$1;
(statearr_28011_28082[(2)] = null);

(statearr_28011_28082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (12))){
var inst_27849 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_28012_28083 = state_27959__$1;
(statearr_28012_28083[(2)] = inst_27849);

(statearr_28012_28083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (2))){
var inst_27811 = (state_27959[(13)]);
var inst_27818 = cljs.core.seq.call(null,inst_27811);
var inst_27819 = inst_27818;
var inst_27820 = null;
var inst_27821 = (0);
var inst_27822 = (0);
var state_27959__$1 = (function (){var statearr_28013 = state_27959;
(statearr_28013[(7)] = inst_27820);

(statearr_28013[(8)] = inst_27821);

(statearr_28013[(9)] = inst_27822);

(statearr_28013[(10)] = inst_27819);

return statearr_28013;
})();
var statearr_28014_28084 = state_27959__$1;
(statearr_28014_28084[(2)] = null);

(statearr_28014_28084[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (23))){
var inst_27875 = (state_27959[(23)]);
var inst_27880 = (state_27959[(24)]);
var inst_27876 = (state_27959[(25)]);
var inst_27872 = (state_27959[(19)]);
var inst_27878 = (state_27959[(26)]);
var inst_27883 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27885 = (function (){var all_files = inst_27872;
var res_SINGLEQUOTE_ = inst_27875;
var res = inst_27876;
var files_not_loaded = inst_27878;
var dependencies_that_loaded = inst_27880;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27875,inst_27880,inst_27876,inst_27872,inst_27878,inst_27883,state_val_27960,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27884){
var map__28015 = p__27884;
var map__28015__$1 = (((((!((map__28015 == null))))?(((((map__28015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28015):map__28015);
var request_url = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27875,inst_27880,inst_27876,inst_27872,inst_27878,inst_27883,state_val_27960,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27886 = cljs.core.reverse.call(null,inst_27880);
var inst_27887 = cljs.core.map.call(null,inst_27885,inst_27886);
var inst_27888 = cljs.core.pr_str.call(null,inst_27887);
var inst_27889 = figwheel.client.utils.log.call(null,inst_27888);
var state_27959__$1 = (function (){var statearr_28017 = state_27959;
(statearr_28017[(31)] = inst_27883);

return statearr_28017;
})();
var statearr_28018_28085 = state_27959__$1;
(statearr_28018_28085[(2)] = inst_27889);

(statearr_28018_28085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (35))){
var state_27959__$1 = state_27959;
var statearr_28019_28086 = state_27959__$1;
(statearr_28019_28086[(2)] = true);

(statearr_28019_28086[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (19))){
var inst_27862 = (state_27959[(12)]);
var inst_27868 = figwheel.client.file_reloading.expand_files.call(null,inst_27862);
var state_27959__$1 = state_27959;
var statearr_28020_28087 = state_27959__$1;
(statearr_28020_28087[(2)] = inst_27868);

(statearr_28020_28087[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (11))){
var state_27959__$1 = state_27959;
var statearr_28021_28088 = state_27959__$1;
(statearr_28021_28088[(2)] = null);

(statearr_28021_28088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (9))){
var inst_27851 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_28022_28089 = state_27959__$1;
(statearr_28022_28089[(2)] = inst_27851);

(statearr_28022_28089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (5))){
var inst_27821 = (state_27959[(8)]);
var inst_27822 = (state_27959[(9)]);
var inst_27824 = (inst_27822 < inst_27821);
var inst_27825 = inst_27824;
var state_27959__$1 = state_27959;
if(cljs.core.truth_(inst_27825)){
var statearr_28023_28090 = state_27959__$1;
(statearr_28023_28090[(1)] = (7));

} else {
var statearr_28024_28091 = state_27959__$1;
(statearr_28024_28091[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (14))){
var inst_27832 = (state_27959[(22)]);
var inst_27841 = cljs.core.first.call(null,inst_27832);
var inst_27842 = figwheel.client.file_reloading.eval_body.call(null,inst_27841,opts);
var inst_27843 = cljs.core.next.call(null,inst_27832);
var inst_27819 = inst_27843;
var inst_27820 = null;
var inst_27821 = (0);
var inst_27822 = (0);
var state_27959__$1 = (function (){var statearr_28025 = state_27959;
(statearr_28025[(7)] = inst_27820);

(statearr_28025[(8)] = inst_27821);

(statearr_28025[(9)] = inst_27822);

(statearr_28025[(10)] = inst_27819);

(statearr_28025[(32)] = inst_27842);

return statearr_28025;
})();
var statearr_28026_28092 = state_27959__$1;
(statearr_28026_28092[(2)] = null);

(statearr_28026_28092[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (45))){
var state_27959__$1 = state_27959;
var statearr_28027_28093 = state_27959__$1;
(statearr_28027_28093[(2)] = null);

(statearr_28027_28093[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (26))){
var inst_27875 = (state_27959[(23)]);
var inst_27880 = (state_27959[(24)]);
var inst_27876 = (state_27959[(25)]);
var inst_27872 = (state_27959[(19)]);
var inst_27878 = (state_27959[(26)]);
var inst_27895 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27897 = (function (){var all_files = inst_27872;
var res_SINGLEQUOTE_ = inst_27875;
var res = inst_27876;
var files_not_loaded = inst_27878;
var dependencies_that_loaded = inst_27880;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27875,inst_27880,inst_27876,inst_27872,inst_27878,inst_27895,state_val_27960,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27896){
var map__28028 = p__27896;
var map__28028__$1 = (((((!((map__28028 == null))))?(((((map__28028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28028):map__28028);
var namespace = cljs.core.get.call(null,map__28028__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28028__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27875,inst_27880,inst_27876,inst_27872,inst_27878,inst_27895,state_val_27960,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27898 = cljs.core.map.call(null,inst_27897,inst_27876);
var inst_27899 = cljs.core.pr_str.call(null,inst_27898);
var inst_27900 = figwheel.client.utils.log.call(null,inst_27899);
var inst_27901 = (function (){var all_files = inst_27872;
var res_SINGLEQUOTE_ = inst_27875;
var res = inst_27876;
var files_not_loaded = inst_27878;
var dependencies_that_loaded = inst_27880;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27875,inst_27880,inst_27876,inst_27872,inst_27878,inst_27895,inst_27897,inst_27898,inst_27899,inst_27900,state_val_27960,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27875,inst_27880,inst_27876,inst_27872,inst_27878,inst_27895,inst_27897,inst_27898,inst_27899,inst_27900,state_val_27960,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27902 = setTimeout(inst_27901,(10));
var state_27959__$1 = (function (){var statearr_28030 = state_27959;
(statearr_28030[(33)] = inst_27895);

(statearr_28030[(34)] = inst_27900);

return statearr_28030;
})();
var statearr_28031_28094 = state_27959__$1;
(statearr_28031_28094[(2)] = inst_27902);

(statearr_28031_28094[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (16))){
var state_27959__$1 = state_27959;
var statearr_28032_28095 = state_27959__$1;
(statearr_28032_28095[(2)] = reload_dependents);

(statearr_28032_28095[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (38))){
var inst_27912 = (state_27959[(16)]);
var inst_27930 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27912);
var state_27959__$1 = state_27959;
var statearr_28033_28096 = state_27959__$1;
(statearr_28033_28096[(2)] = inst_27930);

(statearr_28033_28096[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (30))){
var state_27959__$1 = state_27959;
var statearr_28034_28097 = state_27959__$1;
(statearr_28034_28097[(2)] = null);

(statearr_28034_28097[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (10))){
var inst_27832 = (state_27959[(22)]);
var inst_27834 = cljs.core.chunked_seq_QMARK_.call(null,inst_27832);
var state_27959__$1 = state_27959;
if(inst_27834){
var statearr_28035_28098 = state_27959__$1;
(statearr_28035_28098[(1)] = (13));

} else {
var statearr_28036_28099 = state_27959__$1;
(statearr_28036_28099[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (18))){
var inst_27866 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
if(cljs.core.truth_(inst_27866)){
var statearr_28037_28100 = state_27959__$1;
(statearr_28037_28100[(1)] = (19));

} else {
var statearr_28038_28101 = state_27959__$1;
(statearr_28038_28101[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (42))){
var state_27959__$1 = state_27959;
var statearr_28039_28102 = state_27959__$1;
(statearr_28039_28102[(2)] = null);

(statearr_28039_28102[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (37))){
var inst_27925 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_28040_28103 = state_27959__$1;
(statearr_28040_28103[(2)] = inst_27925);

(statearr_28040_28103[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (8))){
var inst_27832 = (state_27959[(22)]);
var inst_27819 = (state_27959[(10)]);
var inst_27832__$1 = cljs.core.seq.call(null,inst_27819);
var state_27959__$1 = (function (){var statearr_28041 = state_27959;
(statearr_28041[(22)] = inst_27832__$1);

return statearr_28041;
})();
if(inst_27832__$1){
var statearr_28042_28104 = state_27959__$1;
(statearr_28042_28104[(1)] = (10));

} else {
var statearr_28043_28105 = state_27959__$1;
(statearr_28043_28105[(1)] = (11));

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
});})(c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23592__auto__,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23593__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23593__auto____0 = (function (){
var statearr_28044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28044[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23593__auto__);

(statearr_28044[(1)] = (1));

return statearr_28044;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23593__auto____1 = (function (state_27959){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_27959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e28045){if((e28045 instanceof Object)){
var ex__23596__auto__ = e28045;
var statearr_28046_28106 = state_27959;
(statearr_28046_28106[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28107 = state_27959;
state_27959 = G__28107;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23593__auto__ = function(state_27959){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23593__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23593__auto____1.call(this,state_27959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23593__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23593__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23689__auto__ = (function (){var statearr_28047 = f__23688__auto__.call(null);
(statearr_28047[(6)] = c__23687__auto__);

return statearr_28047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto__,map__27804,map__27804__$1,opts,before_jsload,on_jsload,reload_dependents,map__27805,map__27805__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23687__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28110,link){
var map__28111 = p__28110;
var map__28111__$1 = (((((!((map__28111 == null))))?(((((map__28111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28111):map__28111);
var file = cljs.core.get.call(null,map__28111__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__28111,map__28111__$1,file){
return (function (p1__28108_SHARP_,p2__28109_SHARP_){
if(cljs.core._EQ_.call(null,p1__28108_SHARP_,p2__28109_SHARP_)){
return p1__28108_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__28111,map__28111__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28114){
var map__28115 = p__28114;
var map__28115__$1 = (((((!((map__28115 == null))))?(((((map__28115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28115):map__28115);
var match_length = cljs.core.get.call(null,map__28115__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28115__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28113_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28113_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28117_SHARP_,p2__28118_SHARP_){
return cljs.core.assoc.call(null,p1__28117_SHARP_,cljs.core.get.call(null,p2__28118_SHARP_,key),p2__28118_SHARP_);
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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28119 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28119);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28119);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28120,p__28121){
var map__28122 = p__28120;
var map__28122__$1 = (((((!((map__28122 == null))))?(((((map__28122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28122):map__28122);
var on_cssload = cljs.core.get.call(null,map__28122__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28123 = p__28121;
var map__28123__$1 = (((((!((map__28123 == null))))?(((((map__28123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28123):map__28123);
var files_msg = map__28123__$1;
var files = cljs.core.get.call(null,map__28123__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1612339728591
