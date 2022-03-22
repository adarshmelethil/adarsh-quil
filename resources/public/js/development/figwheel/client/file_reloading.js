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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32218_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32218_SHARP_));
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
var seq__32219 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32220 = null;
var count__32221 = (0);
var i__32222 = (0);
while(true){
if((i__32222 < count__32221)){
var n = cljs.core._nth.call(null,chunk__32220,i__32222);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32223 = seq__32219;
var G__32224 = chunk__32220;
var G__32225 = count__32221;
var G__32226 = (i__32222 + (1));
seq__32219 = G__32223;
chunk__32220 = G__32224;
count__32221 = G__32225;
i__32222 = G__32226;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32219);
if(temp__5735__auto__){
var seq__32219__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32219__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32219__$1);
var G__32227 = cljs.core.chunk_rest.call(null,seq__32219__$1);
var G__32228 = c__4550__auto__;
var G__32229 = cljs.core.count.call(null,c__4550__auto__);
var G__32230 = (0);
seq__32219 = G__32227;
chunk__32220 = G__32228;
count__32221 = G__32229;
i__32222 = G__32230;
continue;
} else {
var n = cljs.core.first.call(null,seq__32219__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32231 = cljs.core.next.call(null,seq__32219__$1);
var G__32232 = null;
var G__32233 = (0);
var G__32234 = (0);
seq__32219 = G__32231;
chunk__32220 = G__32232;
count__32221 = G__32233;
i__32222 = G__32234;
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
return cljs.core.some.call(null,(function (p__32235){
var vec__32236 = p__32235;
var _ = cljs.core.nth.call(null,vec__32236,(0),null);
var v = cljs.core.nth.call(null,vec__32236,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__32239){
var vec__32240 = p__32239;
var k = cljs.core.nth.call(null,vec__32240,(0),null);
var v = cljs.core.nth.call(null,vec__32240,(1),null);
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

var seq__32252_32260 = cljs.core.seq.call(null,deps);
var chunk__32253_32261 = null;
var count__32254_32262 = (0);
var i__32255_32263 = (0);
while(true){
if((i__32255_32263 < count__32254_32262)){
var dep_32264 = cljs.core._nth.call(null,chunk__32253_32261,i__32255_32263);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_32264;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32264));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32264,(depth + (1)),state);
} else {
}


var G__32265 = seq__32252_32260;
var G__32266 = chunk__32253_32261;
var G__32267 = count__32254_32262;
var G__32268 = (i__32255_32263 + (1));
seq__32252_32260 = G__32265;
chunk__32253_32261 = G__32266;
count__32254_32262 = G__32267;
i__32255_32263 = G__32268;
continue;
} else {
var temp__5735__auto___32269 = cljs.core.seq.call(null,seq__32252_32260);
if(temp__5735__auto___32269){
var seq__32252_32270__$1 = temp__5735__auto___32269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32252_32270__$1)){
var c__4550__auto___32271 = cljs.core.chunk_first.call(null,seq__32252_32270__$1);
var G__32272 = cljs.core.chunk_rest.call(null,seq__32252_32270__$1);
var G__32273 = c__4550__auto___32271;
var G__32274 = cljs.core.count.call(null,c__4550__auto___32271);
var G__32275 = (0);
seq__32252_32260 = G__32272;
chunk__32253_32261 = G__32273;
count__32254_32262 = G__32274;
i__32255_32263 = G__32275;
continue;
} else {
var dep_32276 = cljs.core.first.call(null,seq__32252_32270__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_32276;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32276));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32276,(depth + (1)),state);
} else {
}


var G__32277 = cljs.core.next.call(null,seq__32252_32270__$1);
var G__32278 = null;
var G__32279 = (0);
var G__32280 = (0);
seq__32252_32260 = G__32277;
chunk__32253_32261 = G__32278;
count__32254_32262 = G__32279;
i__32255_32263 = G__32280;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32256){
var vec__32257 = p__32256;
var seq__32258 = cljs.core.seq.call(null,vec__32257);
var first__32259 = cljs.core.first.call(null,seq__32258);
var seq__32258__$1 = cljs.core.next.call(null,seq__32258);
var x = first__32259;
var xs = seq__32258__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32257,seq__32258,first__32259,seq__32258__$1,x,xs,get_deps__$1){
return (function (p1__32243_SHARP_){
return clojure.set.difference.call(null,p1__32243_SHARP_,x);
});})(vec__32257,seq__32258,first__32259,seq__32258__$1,x,xs,get_deps__$1))
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
var seq__32281 = cljs.core.seq.call(null,provides);
var chunk__32282 = null;
var count__32283 = (0);
var i__32284 = (0);
while(true){
if((i__32284 < count__32283)){
var prov = cljs.core._nth.call(null,chunk__32282,i__32284);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32293_32301 = cljs.core.seq.call(null,requires);
var chunk__32294_32302 = null;
var count__32295_32303 = (0);
var i__32296_32304 = (0);
while(true){
if((i__32296_32304 < count__32295_32303)){
var req_32305 = cljs.core._nth.call(null,chunk__32294_32302,i__32296_32304);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32305,prov);


var G__32306 = seq__32293_32301;
var G__32307 = chunk__32294_32302;
var G__32308 = count__32295_32303;
var G__32309 = (i__32296_32304 + (1));
seq__32293_32301 = G__32306;
chunk__32294_32302 = G__32307;
count__32295_32303 = G__32308;
i__32296_32304 = G__32309;
continue;
} else {
var temp__5735__auto___32310 = cljs.core.seq.call(null,seq__32293_32301);
if(temp__5735__auto___32310){
var seq__32293_32311__$1 = temp__5735__auto___32310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32293_32311__$1)){
var c__4550__auto___32312 = cljs.core.chunk_first.call(null,seq__32293_32311__$1);
var G__32313 = cljs.core.chunk_rest.call(null,seq__32293_32311__$1);
var G__32314 = c__4550__auto___32312;
var G__32315 = cljs.core.count.call(null,c__4550__auto___32312);
var G__32316 = (0);
seq__32293_32301 = G__32313;
chunk__32294_32302 = G__32314;
count__32295_32303 = G__32315;
i__32296_32304 = G__32316;
continue;
} else {
var req_32317 = cljs.core.first.call(null,seq__32293_32311__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32317,prov);


var G__32318 = cljs.core.next.call(null,seq__32293_32311__$1);
var G__32319 = null;
var G__32320 = (0);
var G__32321 = (0);
seq__32293_32301 = G__32318;
chunk__32294_32302 = G__32319;
count__32295_32303 = G__32320;
i__32296_32304 = G__32321;
continue;
}
} else {
}
}
break;
}


var G__32322 = seq__32281;
var G__32323 = chunk__32282;
var G__32324 = count__32283;
var G__32325 = (i__32284 + (1));
seq__32281 = G__32322;
chunk__32282 = G__32323;
count__32283 = G__32324;
i__32284 = G__32325;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32281);
if(temp__5735__auto__){
var seq__32281__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32281__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32281__$1);
var G__32326 = cljs.core.chunk_rest.call(null,seq__32281__$1);
var G__32327 = c__4550__auto__;
var G__32328 = cljs.core.count.call(null,c__4550__auto__);
var G__32329 = (0);
seq__32281 = G__32326;
chunk__32282 = G__32327;
count__32283 = G__32328;
i__32284 = G__32329;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32281__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32297_32330 = cljs.core.seq.call(null,requires);
var chunk__32298_32331 = null;
var count__32299_32332 = (0);
var i__32300_32333 = (0);
while(true){
if((i__32300_32333 < count__32299_32332)){
var req_32334 = cljs.core._nth.call(null,chunk__32298_32331,i__32300_32333);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32334,prov);


var G__32335 = seq__32297_32330;
var G__32336 = chunk__32298_32331;
var G__32337 = count__32299_32332;
var G__32338 = (i__32300_32333 + (1));
seq__32297_32330 = G__32335;
chunk__32298_32331 = G__32336;
count__32299_32332 = G__32337;
i__32300_32333 = G__32338;
continue;
} else {
var temp__5735__auto___32339__$1 = cljs.core.seq.call(null,seq__32297_32330);
if(temp__5735__auto___32339__$1){
var seq__32297_32340__$1 = temp__5735__auto___32339__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32297_32340__$1)){
var c__4550__auto___32341 = cljs.core.chunk_first.call(null,seq__32297_32340__$1);
var G__32342 = cljs.core.chunk_rest.call(null,seq__32297_32340__$1);
var G__32343 = c__4550__auto___32341;
var G__32344 = cljs.core.count.call(null,c__4550__auto___32341);
var G__32345 = (0);
seq__32297_32330 = G__32342;
chunk__32298_32331 = G__32343;
count__32299_32332 = G__32344;
i__32300_32333 = G__32345;
continue;
} else {
var req_32346 = cljs.core.first.call(null,seq__32297_32340__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32346,prov);


var G__32347 = cljs.core.next.call(null,seq__32297_32340__$1);
var G__32348 = null;
var G__32349 = (0);
var G__32350 = (0);
seq__32297_32330 = G__32347;
chunk__32298_32331 = G__32348;
count__32299_32332 = G__32349;
i__32300_32333 = G__32350;
continue;
}
} else {
}
}
break;
}


var G__32351 = cljs.core.next.call(null,seq__32281__$1);
var G__32352 = null;
var G__32353 = (0);
var G__32354 = (0);
seq__32281 = G__32351;
chunk__32282 = G__32352;
count__32283 = G__32353;
i__32284 = G__32354;
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
var seq__32355_32359 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32356_32360 = null;
var count__32357_32361 = (0);
var i__32358_32362 = (0);
while(true){
if((i__32358_32362 < count__32357_32361)){
var ns_32363 = cljs.core._nth.call(null,chunk__32356_32360,i__32358_32362);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32363);


var G__32364 = seq__32355_32359;
var G__32365 = chunk__32356_32360;
var G__32366 = count__32357_32361;
var G__32367 = (i__32358_32362 + (1));
seq__32355_32359 = G__32364;
chunk__32356_32360 = G__32365;
count__32357_32361 = G__32366;
i__32358_32362 = G__32367;
continue;
} else {
var temp__5735__auto___32368 = cljs.core.seq.call(null,seq__32355_32359);
if(temp__5735__auto___32368){
var seq__32355_32369__$1 = temp__5735__auto___32368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32355_32369__$1)){
var c__4550__auto___32370 = cljs.core.chunk_first.call(null,seq__32355_32369__$1);
var G__32371 = cljs.core.chunk_rest.call(null,seq__32355_32369__$1);
var G__32372 = c__4550__auto___32370;
var G__32373 = cljs.core.count.call(null,c__4550__auto___32370);
var G__32374 = (0);
seq__32355_32359 = G__32371;
chunk__32356_32360 = G__32372;
count__32357_32361 = G__32373;
i__32358_32362 = G__32374;
continue;
} else {
var ns_32375 = cljs.core.first.call(null,seq__32355_32369__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32375);


var G__32376 = cljs.core.next.call(null,seq__32355_32369__$1);
var G__32377 = null;
var G__32378 = (0);
var G__32379 = (0);
seq__32355_32359 = G__32376;
chunk__32356_32360 = G__32377;
count__32357_32361 = G__32378;
i__32358_32362 = G__32379;
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
var G__32380__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32381__i = 0, G__32381__a = new Array(arguments.length -  0);
while (G__32381__i < G__32381__a.length) {G__32381__a[G__32381__i] = arguments[G__32381__i + 0]; ++G__32381__i;}
  args = new cljs.core.IndexedSeq(G__32381__a,0,null);
} 
return G__32380__delegate.call(this,args);};
G__32380.cljs$lang$maxFixedArity = 0;
G__32380.cljs$lang$applyTo = (function (arglist__32382){
var args = cljs.core.seq(arglist__32382);
return G__32380__delegate(args);
});
G__32380.cljs$core$IFn$_invoke$arity$variadic = G__32380__delegate;
return G__32380;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32383_SHARP_,p2__32384_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32383_SHARP_)),p2__32384_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32385_SHARP_,p2__32386_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32385_SHARP_),p2__32386_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32387 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32387.addCallback(((function (G__32387){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32387))
);

G__32387.addErrback(((function (G__32387){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32387))
);

return G__32387;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32388){if((e32388 instanceof Error)){
var e = e32388;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32388;

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
}catch (e32389){if((e32389 instanceof Error)){
var e = e32389;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32389;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32390 = cljs.core._EQ_;
var expr__32391 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32390.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32391))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32390.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32391))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32390.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32391))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32390,expr__32391){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32390,expr__32391))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32393,callback){
var map__32394 = p__32393;
var map__32394__$1 = (((((!((map__32394 == null))))?(((((map__32394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32394):map__32394);
var file_msg = map__32394__$1;
var request_url = cljs.core.get.call(null,map__32394__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32394,map__32394__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32394,map__32394__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto__){
return (function (state_32432){
var state_val_32433 = (state_32432[(1)]);
if((state_val_32433 === (7))){
var inst_32428 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
var statearr_32434_32460 = state_32432__$1;
(statearr_32434_32460[(2)] = inst_32428);

(statearr_32434_32460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (1))){
var state_32432__$1 = state_32432;
var statearr_32435_32461 = state_32432__$1;
(statearr_32435_32461[(2)] = null);

(statearr_32435_32461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (4))){
var inst_32398 = (state_32432[(7)]);
var inst_32398__$1 = (state_32432[(2)]);
var state_32432__$1 = (function (){var statearr_32436 = state_32432;
(statearr_32436[(7)] = inst_32398__$1);

return statearr_32436;
})();
if(cljs.core.truth_(inst_32398__$1)){
var statearr_32437_32462 = state_32432__$1;
(statearr_32437_32462[(1)] = (5));

} else {
var statearr_32438_32463 = state_32432__$1;
(statearr_32438_32463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (15))){
var inst_32411 = (state_32432[(8)]);
var inst_32413 = (state_32432[(9)]);
var inst_32415 = inst_32413.call(null,inst_32411);
var state_32432__$1 = state_32432;
var statearr_32439_32464 = state_32432__$1;
(statearr_32439_32464[(2)] = inst_32415);

(statearr_32439_32464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (13))){
var inst_32422 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
var statearr_32440_32465 = state_32432__$1;
(statearr_32440_32465[(2)] = inst_32422);

(statearr_32440_32465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (6))){
var state_32432__$1 = state_32432;
var statearr_32441_32466 = state_32432__$1;
(statearr_32441_32466[(2)] = null);

(statearr_32441_32466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (17))){
var inst_32419 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
var statearr_32442_32467 = state_32432__$1;
(statearr_32442_32467[(2)] = inst_32419);

(statearr_32442_32467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (3))){
var inst_32430 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32432__$1,inst_32430);
} else {
if((state_val_32433 === (12))){
var state_32432__$1 = state_32432;
var statearr_32443_32468 = state_32432__$1;
(statearr_32443_32468[(2)] = null);

(statearr_32443_32468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (2))){
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32432__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32433 === (11))){
var inst_32403 = (state_32432[(10)]);
var inst_32409 = figwheel.client.file_reloading.blocking_load.call(null,inst_32403);
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32432__$1,(14),inst_32409);
} else {
if((state_val_32433 === (9))){
var inst_32403 = (state_32432[(10)]);
var state_32432__$1 = state_32432;
if(cljs.core.truth_(inst_32403)){
var statearr_32444_32469 = state_32432__$1;
(statearr_32444_32469[(1)] = (11));

} else {
var statearr_32445_32470 = state_32432__$1;
(statearr_32445_32470[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (5))){
var inst_32404 = (state_32432[(11)]);
var inst_32398 = (state_32432[(7)]);
var inst_32403 = cljs.core.nth.call(null,inst_32398,(0),null);
var inst_32404__$1 = cljs.core.nth.call(null,inst_32398,(1),null);
var state_32432__$1 = (function (){var statearr_32446 = state_32432;
(statearr_32446[(11)] = inst_32404__$1);

(statearr_32446[(10)] = inst_32403);

return statearr_32446;
})();
if(cljs.core.truth_(inst_32404__$1)){
var statearr_32447_32471 = state_32432__$1;
(statearr_32447_32471[(1)] = (8));

} else {
var statearr_32448_32472 = state_32432__$1;
(statearr_32448_32472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (14))){
var inst_32413 = (state_32432[(9)]);
var inst_32403 = (state_32432[(10)]);
var inst_32411 = (state_32432[(2)]);
var inst_32412 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32413__$1 = cljs.core.get.call(null,inst_32412,inst_32403);
var state_32432__$1 = (function (){var statearr_32449 = state_32432;
(statearr_32449[(8)] = inst_32411);

(statearr_32449[(9)] = inst_32413__$1);

return statearr_32449;
})();
if(cljs.core.truth_(inst_32413__$1)){
var statearr_32450_32473 = state_32432__$1;
(statearr_32450_32473[(1)] = (15));

} else {
var statearr_32451_32474 = state_32432__$1;
(statearr_32451_32474[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (16))){
var inst_32411 = (state_32432[(8)]);
var inst_32417 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32411);
var state_32432__$1 = state_32432;
var statearr_32452_32475 = state_32432__$1;
(statearr_32452_32475[(2)] = inst_32417);

(statearr_32452_32475[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (10))){
var inst_32424 = (state_32432[(2)]);
var state_32432__$1 = (function (){var statearr_32453 = state_32432;
(statearr_32453[(12)] = inst_32424);

return statearr_32453;
})();
var statearr_32454_32476 = state_32432__$1;
(statearr_32454_32476[(2)] = null);

(statearr_32454_32476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (8))){
var inst_32404 = (state_32432[(11)]);
var inst_32406 = eval(inst_32404);
var state_32432__$1 = state_32432;
var statearr_32455_32477 = state_32432__$1;
(statearr_32455_32477[(2)] = inst_32406);

(statearr_32455_32477[(1)] = (10));


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
});})(c__24321__auto__))
;
return ((function (switch__24154__auto__,c__24321__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24155__auto__ = null;
var figwheel$client$file_reloading$state_machine__24155__auto____0 = (function (){
var statearr_32456 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32456[(0)] = figwheel$client$file_reloading$state_machine__24155__auto__);

(statearr_32456[(1)] = (1));

return statearr_32456;
});
var figwheel$client$file_reloading$state_machine__24155__auto____1 = (function (state_32432){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_32432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e32457){if((e32457 instanceof Object)){
var ex__24158__auto__ = e32457;
var statearr_32458_32478 = state_32432;
(statearr_32458_32478[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32479 = state_32432;
state_32432 = G__32479;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24155__auto__ = function(state_32432){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24155__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24155__auto____1.call(this,state_32432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24155__auto____0;
figwheel$client$file_reloading$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24155__auto____1;
return figwheel$client$file_reloading$state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto__))
})();
var state__24323__auto__ = (function (){var statearr_32459 = f__24322__auto__.call(null);
(statearr_32459[(6)] = c__24321__auto__);

return statearr_32459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__))
);

return c__24321__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32481 = arguments.length;
switch (G__32481) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32483,callback){
var map__32484 = p__32483;
var map__32484__$1 = (((((!((map__32484 == null))))?(((((map__32484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32484):map__32484);
var file_msg = map__32484__$1;
var namespace = cljs.core.get.call(null,map__32484__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32484,map__32484__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32484,map__32484__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32486){
var map__32487 = p__32486;
var map__32487__$1 = (((((!((map__32487 == null))))?(((((map__32487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32487):map__32487);
var file_msg = map__32487__$1;
var namespace = cljs.core.get.call(null,map__32487__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32489){
var map__32490 = p__32489;
var map__32490__$1 = (((((!((map__32490 == null))))?(((((map__32490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32490):map__32490);
var file_msg = map__32490__$1;
var namespace = cljs.core.get.call(null,map__32490__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32492,callback){
var map__32493 = p__32492;
var map__32493__$1 = (((((!((map__32493 == null))))?(((((map__32493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32493):map__32493);
var file_msg = map__32493__$1;
var request_url = cljs.core.get.call(null,map__32493__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32493__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24321__auto___32543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___32543,out){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___32543,out){
return (function (state_32528){
var state_val_32529 = (state_32528[(1)]);
if((state_val_32529 === (1))){
var inst_32502 = cljs.core.seq.call(null,files);
var inst_32503 = cljs.core.first.call(null,inst_32502);
var inst_32504 = cljs.core.next.call(null,inst_32502);
var inst_32505 = files;
var state_32528__$1 = (function (){var statearr_32530 = state_32528;
(statearr_32530[(7)] = inst_32504);

(statearr_32530[(8)] = inst_32503);

(statearr_32530[(9)] = inst_32505);

return statearr_32530;
})();
var statearr_32531_32544 = state_32528__$1;
(statearr_32531_32544[(2)] = null);

(statearr_32531_32544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (2))){
var inst_32505 = (state_32528[(9)]);
var inst_32511 = (state_32528[(10)]);
var inst_32510 = cljs.core.seq.call(null,inst_32505);
var inst_32511__$1 = cljs.core.first.call(null,inst_32510);
var inst_32512 = cljs.core.next.call(null,inst_32510);
var inst_32513 = (inst_32511__$1 == null);
var inst_32514 = cljs.core.not.call(null,inst_32513);
var state_32528__$1 = (function (){var statearr_32532 = state_32528;
(statearr_32532[(11)] = inst_32512);

(statearr_32532[(10)] = inst_32511__$1);

return statearr_32532;
})();
if(inst_32514){
var statearr_32533_32545 = state_32528__$1;
(statearr_32533_32545[(1)] = (4));

} else {
var statearr_32534_32546 = state_32528__$1;
(statearr_32534_32546[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (3))){
var inst_32526 = (state_32528[(2)]);
var state_32528__$1 = state_32528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32528__$1,inst_32526);
} else {
if((state_val_32529 === (4))){
var inst_32511 = (state_32528[(10)]);
var inst_32516 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32511);
var state_32528__$1 = state_32528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32528__$1,(7),inst_32516);
} else {
if((state_val_32529 === (5))){
var inst_32522 = cljs.core.async.close_BANG_.call(null,out);
var state_32528__$1 = state_32528;
var statearr_32535_32547 = state_32528__$1;
(statearr_32535_32547[(2)] = inst_32522);

(statearr_32535_32547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (6))){
var inst_32524 = (state_32528[(2)]);
var state_32528__$1 = state_32528;
var statearr_32536_32548 = state_32528__$1;
(statearr_32536_32548[(2)] = inst_32524);

(statearr_32536_32548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (7))){
var inst_32512 = (state_32528[(11)]);
var inst_32518 = (state_32528[(2)]);
var inst_32519 = cljs.core.async.put_BANG_.call(null,out,inst_32518);
var inst_32505 = inst_32512;
var state_32528__$1 = (function (){var statearr_32537 = state_32528;
(statearr_32537[(12)] = inst_32519);

(statearr_32537[(9)] = inst_32505);

return statearr_32537;
})();
var statearr_32538_32549 = state_32528__$1;
(statearr_32538_32549[(2)] = null);

(statearr_32538_32549[(1)] = (2));


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
});})(c__24321__auto___32543,out))
;
return ((function (switch__24154__auto__,c__24321__auto___32543,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24155__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24155__auto____0 = (function (){
var statearr_32539 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32539[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24155__auto__);

(statearr_32539[(1)] = (1));

return statearr_32539;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24155__auto____1 = (function (state_32528){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_32528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e32540){if((e32540 instanceof Object)){
var ex__24158__auto__ = e32540;
var statearr_32541_32550 = state_32528;
(statearr_32541_32550[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32551 = state_32528;
state_32528 = G__32551;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24155__auto__ = function(state_32528){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24155__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24155__auto____1.call(this,state_32528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24155__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24155__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___32543,out))
})();
var state__24323__auto__ = (function (){var statearr_32542 = f__24322__auto__.call(null);
(statearr_32542[(6)] = c__24321__auto___32543);

return statearr_32542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___32543,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32552,opts){
var map__32553 = p__32552;
var map__32553__$1 = (((((!((map__32553 == null))))?(((((map__32553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32553):map__32553);
var eval_body = cljs.core.get.call(null,map__32553__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32553__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e32555){var e = e32555;
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
return (function (p1__32556_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32556_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32557){
var vec__32558 = p__32557;
var k = cljs.core.nth.call(null,vec__32558,(0),null);
var v = cljs.core.nth.call(null,vec__32558,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32561){
var vec__32562 = p__32561;
var k = cljs.core.nth.call(null,vec__32562,(0),null);
var v = cljs.core.nth.call(null,vec__32562,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32568,p__32569){
var map__32570 = p__32568;
var map__32570__$1 = (((((!((map__32570 == null))))?(((((map__32570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32570):map__32570);
var opts = map__32570__$1;
var before_jsload = cljs.core.get.call(null,map__32570__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32570__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32570__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32571 = p__32569;
var map__32571__$1 = (((((!((map__32571 == null))))?(((((map__32571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32571):map__32571);
var msg = map__32571__$1;
var files = cljs.core.get.call(null,map__32571__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32571__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32571__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32725){
var state_val_32726 = (state_32725[(1)]);
if((state_val_32726 === (7))){
var inst_32586 = (state_32725[(7)]);
var inst_32585 = (state_32725[(8)]);
var inst_32588 = (state_32725[(9)]);
var inst_32587 = (state_32725[(10)]);
var inst_32593 = cljs.core._nth.call(null,inst_32586,inst_32588);
var inst_32594 = figwheel.client.file_reloading.eval_body.call(null,inst_32593,opts);
var inst_32595 = (inst_32588 + (1));
var tmp32727 = inst_32586;
var tmp32728 = inst_32585;
var tmp32729 = inst_32587;
var inst_32585__$1 = tmp32728;
var inst_32586__$1 = tmp32727;
var inst_32587__$1 = tmp32729;
var inst_32588__$1 = inst_32595;
var state_32725__$1 = (function (){var statearr_32730 = state_32725;
(statearr_32730[(7)] = inst_32586__$1);

(statearr_32730[(11)] = inst_32594);

(statearr_32730[(8)] = inst_32585__$1);

(statearr_32730[(9)] = inst_32588__$1);

(statearr_32730[(10)] = inst_32587__$1);

return statearr_32730;
})();
var statearr_32731_32814 = state_32725__$1;
(statearr_32731_32814[(2)] = null);

(statearr_32731_32814[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (20))){
var inst_32628 = (state_32725[(12)]);
var inst_32636 = figwheel.client.file_reloading.sort_files.call(null,inst_32628);
var state_32725__$1 = state_32725;
var statearr_32732_32815 = state_32725__$1;
(statearr_32732_32815[(2)] = inst_32636);

(statearr_32732_32815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (27))){
var state_32725__$1 = state_32725;
var statearr_32733_32816 = state_32725__$1;
(statearr_32733_32816[(2)] = null);

(statearr_32733_32816[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (1))){
var inst_32577 = (state_32725[(13)]);
var inst_32574 = before_jsload.call(null,files);
var inst_32575 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32576 = (function (){return ((function (inst_32577,inst_32574,inst_32575,state_val_32726,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32565_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32565_SHARP_);
});
;})(inst_32577,inst_32574,inst_32575,state_val_32726,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32577__$1 = cljs.core.filter.call(null,inst_32576,files);
var inst_32578 = cljs.core.not_empty.call(null,inst_32577__$1);
var state_32725__$1 = (function (){var statearr_32734 = state_32725;
(statearr_32734[(14)] = inst_32574);

(statearr_32734[(15)] = inst_32575);

(statearr_32734[(13)] = inst_32577__$1);

return statearr_32734;
})();
if(cljs.core.truth_(inst_32578)){
var statearr_32735_32817 = state_32725__$1;
(statearr_32735_32817[(1)] = (2));

} else {
var statearr_32736_32818 = state_32725__$1;
(statearr_32736_32818[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (24))){
var state_32725__$1 = state_32725;
var statearr_32737_32819 = state_32725__$1;
(statearr_32737_32819[(2)] = null);

(statearr_32737_32819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (39))){
var inst_32678 = (state_32725[(16)]);
var state_32725__$1 = state_32725;
var statearr_32738_32820 = state_32725__$1;
(statearr_32738_32820[(2)] = inst_32678);

(statearr_32738_32820[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (46))){
var inst_32720 = (state_32725[(2)]);
var state_32725__$1 = state_32725;
var statearr_32739_32821 = state_32725__$1;
(statearr_32739_32821[(2)] = inst_32720);

(statearr_32739_32821[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (4))){
var inst_32622 = (state_32725[(2)]);
var inst_32623 = cljs.core.List.EMPTY;
var inst_32624 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32623);
var inst_32625 = (function (){return ((function (inst_32622,inst_32623,inst_32624,state_val_32726,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32566_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32566_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32566_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32566_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_32622,inst_32623,inst_32624,state_val_32726,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32626 = cljs.core.filter.call(null,inst_32625,files);
var inst_32627 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32628 = cljs.core.concat.call(null,inst_32626,inst_32627);
var state_32725__$1 = (function (){var statearr_32740 = state_32725;
(statearr_32740[(17)] = inst_32624);

(statearr_32740[(18)] = inst_32622);

(statearr_32740[(12)] = inst_32628);

return statearr_32740;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32741_32822 = state_32725__$1;
(statearr_32741_32822[(1)] = (16));

} else {
var statearr_32742_32823 = state_32725__$1;
(statearr_32742_32823[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (15))){
var inst_32612 = (state_32725[(2)]);
var state_32725__$1 = state_32725;
var statearr_32743_32824 = state_32725__$1;
(statearr_32743_32824[(2)] = inst_32612);

(statearr_32743_32824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (21))){
var inst_32638 = (state_32725[(19)]);
var inst_32638__$1 = (state_32725[(2)]);
var inst_32639 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32638__$1);
var state_32725__$1 = (function (){var statearr_32744 = state_32725;
(statearr_32744[(19)] = inst_32638__$1);

return statearr_32744;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32725__$1,(22),inst_32639);
} else {
if((state_val_32726 === (31))){
var inst_32723 = (state_32725[(2)]);
var state_32725__$1 = state_32725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32725__$1,inst_32723);
} else {
if((state_val_32726 === (32))){
var inst_32678 = (state_32725[(16)]);
var inst_32683 = inst_32678.cljs$lang$protocol_mask$partition0$;
var inst_32684 = (inst_32683 & (64));
var inst_32685 = inst_32678.cljs$core$ISeq$;
var inst_32686 = (cljs.core.PROTOCOL_SENTINEL === inst_32685);
var inst_32687 = ((inst_32684) || (inst_32686));
var state_32725__$1 = state_32725;
if(cljs.core.truth_(inst_32687)){
var statearr_32745_32825 = state_32725__$1;
(statearr_32745_32825[(1)] = (35));

} else {
var statearr_32746_32826 = state_32725__$1;
(statearr_32746_32826[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (40))){
var inst_32700 = (state_32725[(20)]);
var inst_32699 = (state_32725[(2)]);
var inst_32700__$1 = cljs.core.get.call(null,inst_32699,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32701 = cljs.core.get.call(null,inst_32699,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32702 = cljs.core.not_empty.call(null,inst_32700__$1);
var state_32725__$1 = (function (){var statearr_32747 = state_32725;
(statearr_32747[(21)] = inst_32701);

(statearr_32747[(20)] = inst_32700__$1);

return statearr_32747;
})();
if(cljs.core.truth_(inst_32702)){
var statearr_32748_32827 = state_32725__$1;
(statearr_32748_32827[(1)] = (41));

} else {
var statearr_32749_32828 = state_32725__$1;
(statearr_32749_32828[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (33))){
var state_32725__$1 = state_32725;
var statearr_32750_32829 = state_32725__$1;
(statearr_32750_32829[(2)] = false);

(statearr_32750_32829[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (13))){
var inst_32598 = (state_32725[(22)]);
var inst_32602 = cljs.core.chunk_first.call(null,inst_32598);
var inst_32603 = cljs.core.chunk_rest.call(null,inst_32598);
var inst_32604 = cljs.core.count.call(null,inst_32602);
var inst_32585 = inst_32603;
var inst_32586 = inst_32602;
var inst_32587 = inst_32604;
var inst_32588 = (0);
var state_32725__$1 = (function (){var statearr_32751 = state_32725;
(statearr_32751[(7)] = inst_32586);

(statearr_32751[(8)] = inst_32585);

(statearr_32751[(9)] = inst_32588);

(statearr_32751[(10)] = inst_32587);

return statearr_32751;
})();
var statearr_32752_32830 = state_32725__$1;
(statearr_32752_32830[(2)] = null);

(statearr_32752_32830[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (22))){
var inst_32641 = (state_32725[(23)]);
var inst_32638 = (state_32725[(19)]);
var inst_32642 = (state_32725[(24)]);
var inst_32646 = (state_32725[(25)]);
var inst_32641__$1 = (state_32725[(2)]);
var inst_32642__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32641__$1);
var inst_32643 = (function (){var all_files = inst_32638;
var res_SINGLEQUOTE_ = inst_32641__$1;
var res = inst_32642__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32641,inst_32638,inst_32642,inst_32646,inst_32641__$1,inst_32642__$1,state_val_32726,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32567_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32567_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32641,inst_32638,inst_32642,inst_32646,inst_32641__$1,inst_32642__$1,state_val_32726,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32644 = cljs.core.filter.call(null,inst_32643,inst_32641__$1);
var inst_32645 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32646__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32645);
var inst_32647 = cljs.core.not_empty.call(null,inst_32646__$1);
var state_32725__$1 = (function (){var statearr_32753 = state_32725;
(statearr_32753[(23)] = inst_32641__$1);

(statearr_32753[(26)] = inst_32644);

(statearr_32753[(24)] = inst_32642__$1);

(statearr_32753[(25)] = inst_32646__$1);

return statearr_32753;
})();
if(cljs.core.truth_(inst_32647)){
var statearr_32754_32831 = state_32725__$1;
(statearr_32754_32831[(1)] = (23));

} else {
var statearr_32755_32832 = state_32725__$1;
(statearr_32755_32832[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (36))){
var state_32725__$1 = state_32725;
var statearr_32756_32833 = state_32725__$1;
(statearr_32756_32833[(2)] = false);

(statearr_32756_32833[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (41))){
var inst_32700 = (state_32725[(20)]);
var inst_32704 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32705 = cljs.core.map.call(null,inst_32704,inst_32700);
var inst_32706 = cljs.core.pr_str.call(null,inst_32705);
var inst_32707 = ["figwheel-no-load meta-data: ",inst_32706].join('');
var inst_32708 = figwheel.client.utils.log.call(null,inst_32707);
var state_32725__$1 = state_32725;
var statearr_32757_32834 = state_32725__$1;
(statearr_32757_32834[(2)] = inst_32708);

(statearr_32757_32834[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (43))){
var inst_32701 = (state_32725[(21)]);
var inst_32711 = (state_32725[(2)]);
var inst_32712 = cljs.core.not_empty.call(null,inst_32701);
var state_32725__$1 = (function (){var statearr_32758 = state_32725;
(statearr_32758[(27)] = inst_32711);

return statearr_32758;
})();
if(cljs.core.truth_(inst_32712)){
var statearr_32759_32835 = state_32725__$1;
(statearr_32759_32835[(1)] = (44));

} else {
var statearr_32760_32836 = state_32725__$1;
(statearr_32760_32836[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (29))){
var inst_32641 = (state_32725[(23)]);
var inst_32638 = (state_32725[(19)]);
var inst_32678 = (state_32725[(16)]);
var inst_32644 = (state_32725[(26)]);
var inst_32642 = (state_32725[(24)]);
var inst_32646 = (state_32725[(25)]);
var inst_32674 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32677 = (function (){var all_files = inst_32638;
var res_SINGLEQUOTE_ = inst_32641;
var res = inst_32642;
var files_not_loaded = inst_32644;
var dependencies_that_loaded = inst_32646;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32641,inst_32638,inst_32678,inst_32644,inst_32642,inst_32646,inst_32674,state_val_32726,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32676){
var map__32761 = p__32676;
var map__32761__$1 = (((((!((map__32761 == null))))?(((((map__32761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32761):map__32761);
var namespace = cljs.core.get.call(null,map__32761__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32641,inst_32638,inst_32678,inst_32644,inst_32642,inst_32646,inst_32674,state_val_32726,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32678__$1 = cljs.core.group_by.call(null,inst_32677,inst_32644);
var inst_32680 = (inst_32678__$1 == null);
var inst_32681 = cljs.core.not.call(null,inst_32680);
var state_32725__$1 = (function (){var statearr_32763 = state_32725;
(statearr_32763[(28)] = inst_32674);

(statearr_32763[(16)] = inst_32678__$1);

return statearr_32763;
})();
if(inst_32681){
var statearr_32764_32837 = state_32725__$1;
(statearr_32764_32837[(1)] = (32));

} else {
var statearr_32765_32838 = state_32725__$1;
(statearr_32765_32838[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (44))){
var inst_32701 = (state_32725[(21)]);
var inst_32714 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32701);
var inst_32715 = cljs.core.pr_str.call(null,inst_32714);
var inst_32716 = ["not required: ",inst_32715].join('');
var inst_32717 = figwheel.client.utils.log.call(null,inst_32716);
var state_32725__$1 = state_32725;
var statearr_32766_32839 = state_32725__$1;
(statearr_32766_32839[(2)] = inst_32717);

(statearr_32766_32839[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (6))){
var inst_32619 = (state_32725[(2)]);
var state_32725__$1 = state_32725;
var statearr_32767_32840 = state_32725__$1;
(statearr_32767_32840[(2)] = inst_32619);

(statearr_32767_32840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (28))){
var inst_32644 = (state_32725[(26)]);
var inst_32671 = (state_32725[(2)]);
var inst_32672 = cljs.core.not_empty.call(null,inst_32644);
var state_32725__$1 = (function (){var statearr_32768 = state_32725;
(statearr_32768[(29)] = inst_32671);

return statearr_32768;
})();
if(cljs.core.truth_(inst_32672)){
var statearr_32769_32841 = state_32725__$1;
(statearr_32769_32841[(1)] = (29));

} else {
var statearr_32770_32842 = state_32725__$1;
(statearr_32770_32842[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (25))){
var inst_32642 = (state_32725[(24)]);
var inst_32658 = (state_32725[(2)]);
var inst_32659 = cljs.core.not_empty.call(null,inst_32642);
var state_32725__$1 = (function (){var statearr_32771 = state_32725;
(statearr_32771[(30)] = inst_32658);

return statearr_32771;
})();
if(cljs.core.truth_(inst_32659)){
var statearr_32772_32843 = state_32725__$1;
(statearr_32772_32843[(1)] = (26));

} else {
var statearr_32773_32844 = state_32725__$1;
(statearr_32773_32844[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (34))){
var inst_32694 = (state_32725[(2)]);
var state_32725__$1 = state_32725;
if(cljs.core.truth_(inst_32694)){
var statearr_32774_32845 = state_32725__$1;
(statearr_32774_32845[(1)] = (38));

} else {
var statearr_32775_32846 = state_32725__$1;
(statearr_32775_32846[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (17))){
var state_32725__$1 = state_32725;
var statearr_32776_32847 = state_32725__$1;
(statearr_32776_32847[(2)] = recompile_dependents);

(statearr_32776_32847[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (3))){
var state_32725__$1 = state_32725;
var statearr_32777_32848 = state_32725__$1;
(statearr_32777_32848[(2)] = null);

(statearr_32777_32848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (12))){
var inst_32615 = (state_32725[(2)]);
var state_32725__$1 = state_32725;
var statearr_32778_32849 = state_32725__$1;
(statearr_32778_32849[(2)] = inst_32615);

(statearr_32778_32849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (2))){
var inst_32577 = (state_32725[(13)]);
var inst_32584 = cljs.core.seq.call(null,inst_32577);
var inst_32585 = inst_32584;
var inst_32586 = null;
var inst_32587 = (0);
var inst_32588 = (0);
var state_32725__$1 = (function (){var statearr_32779 = state_32725;
(statearr_32779[(7)] = inst_32586);

(statearr_32779[(8)] = inst_32585);

(statearr_32779[(9)] = inst_32588);

(statearr_32779[(10)] = inst_32587);

return statearr_32779;
})();
var statearr_32780_32850 = state_32725__$1;
(statearr_32780_32850[(2)] = null);

(statearr_32780_32850[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (23))){
var inst_32641 = (state_32725[(23)]);
var inst_32638 = (state_32725[(19)]);
var inst_32644 = (state_32725[(26)]);
var inst_32642 = (state_32725[(24)]);
var inst_32646 = (state_32725[(25)]);
var inst_32649 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32651 = (function (){var all_files = inst_32638;
var res_SINGLEQUOTE_ = inst_32641;
var res = inst_32642;
var files_not_loaded = inst_32644;
var dependencies_that_loaded = inst_32646;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32641,inst_32638,inst_32644,inst_32642,inst_32646,inst_32649,state_val_32726,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32650){
var map__32781 = p__32650;
var map__32781__$1 = (((((!((map__32781 == null))))?(((((map__32781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32781):map__32781);
var request_url = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32641,inst_32638,inst_32644,inst_32642,inst_32646,inst_32649,state_val_32726,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32652 = cljs.core.reverse.call(null,inst_32646);
var inst_32653 = cljs.core.map.call(null,inst_32651,inst_32652);
var inst_32654 = cljs.core.pr_str.call(null,inst_32653);
var inst_32655 = figwheel.client.utils.log.call(null,inst_32654);
var state_32725__$1 = (function (){var statearr_32783 = state_32725;
(statearr_32783[(31)] = inst_32649);

return statearr_32783;
})();
var statearr_32784_32851 = state_32725__$1;
(statearr_32784_32851[(2)] = inst_32655);

(statearr_32784_32851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (35))){
var state_32725__$1 = state_32725;
var statearr_32785_32852 = state_32725__$1;
(statearr_32785_32852[(2)] = true);

(statearr_32785_32852[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (19))){
var inst_32628 = (state_32725[(12)]);
var inst_32634 = figwheel.client.file_reloading.expand_files.call(null,inst_32628);
var state_32725__$1 = state_32725;
var statearr_32786_32853 = state_32725__$1;
(statearr_32786_32853[(2)] = inst_32634);

(statearr_32786_32853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (11))){
var state_32725__$1 = state_32725;
var statearr_32787_32854 = state_32725__$1;
(statearr_32787_32854[(2)] = null);

(statearr_32787_32854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (9))){
var inst_32617 = (state_32725[(2)]);
var state_32725__$1 = state_32725;
var statearr_32788_32855 = state_32725__$1;
(statearr_32788_32855[(2)] = inst_32617);

(statearr_32788_32855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (5))){
var inst_32588 = (state_32725[(9)]);
var inst_32587 = (state_32725[(10)]);
var inst_32590 = (inst_32588 < inst_32587);
var inst_32591 = inst_32590;
var state_32725__$1 = state_32725;
if(cljs.core.truth_(inst_32591)){
var statearr_32789_32856 = state_32725__$1;
(statearr_32789_32856[(1)] = (7));

} else {
var statearr_32790_32857 = state_32725__$1;
(statearr_32790_32857[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (14))){
var inst_32598 = (state_32725[(22)]);
var inst_32607 = cljs.core.first.call(null,inst_32598);
var inst_32608 = figwheel.client.file_reloading.eval_body.call(null,inst_32607,opts);
var inst_32609 = cljs.core.next.call(null,inst_32598);
var inst_32585 = inst_32609;
var inst_32586 = null;
var inst_32587 = (0);
var inst_32588 = (0);
var state_32725__$1 = (function (){var statearr_32791 = state_32725;
(statearr_32791[(32)] = inst_32608);

(statearr_32791[(7)] = inst_32586);

(statearr_32791[(8)] = inst_32585);

(statearr_32791[(9)] = inst_32588);

(statearr_32791[(10)] = inst_32587);

return statearr_32791;
})();
var statearr_32792_32858 = state_32725__$1;
(statearr_32792_32858[(2)] = null);

(statearr_32792_32858[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (45))){
var state_32725__$1 = state_32725;
var statearr_32793_32859 = state_32725__$1;
(statearr_32793_32859[(2)] = null);

(statearr_32793_32859[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (26))){
var inst_32641 = (state_32725[(23)]);
var inst_32638 = (state_32725[(19)]);
var inst_32644 = (state_32725[(26)]);
var inst_32642 = (state_32725[(24)]);
var inst_32646 = (state_32725[(25)]);
var inst_32661 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32663 = (function (){var all_files = inst_32638;
var res_SINGLEQUOTE_ = inst_32641;
var res = inst_32642;
var files_not_loaded = inst_32644;
var dependencies_that_loaded = inst_32646;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32641,inst_32638,inst_32644,inst_32642,inst_32646,inst_32661,state_val_32726,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32662){
var map__32794 = p__32662;
var map__32794__$1 = (((((!((map__32794 == null))))?(((((map__32794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32794):map__32794);
var namespace = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32641,inst_32638,inst_32644,inst_32642,inst_32646,inst_32661,state_val_32726,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32664 = cljs.core.map.call(null,inst_32663,inst_32642);
var inst_32665 = cljs.core.pr_str.call(null,inst_32664);
var inst_32666 = figwheel.client.utils.log.call(null,inst_32665);
var inst_32667 = (function (){var all_files = inst_32638;
var res_SINGLEQUOTE_ = inst_32641;
var res = inst_32642;
var files_not_loaded = inst_32644;
var dependencies_that_loaded = inst_32646;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32641,inst_32638,inst_32644,inst_32642,inst_32646,inst_32661,inst_32663,inst_32664,inst_32665,inst_32666,state_val_32726,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32641,inst_32638,inst_32644,inst_32642,inst_32646,inst_32661,inst_32663,inst_32664,inst_32665,inst_32666,state_val_32726,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32668 = setTimeout(inst_32667,(10));
var state_32725__$1 = (function (){var statearr_32796 = state_32725;
(statearr_32796[(33)] = inst_32666);

(statearr_32796[(34)] = inst_32661);

return statearr_32796;
})();
var statearr_32797_32860 = state_32725__$1;
(statearr_32797_32860[(2)] = inst_32668);

(statearr_32797_32860[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (16))){
var state_32725__$1 = state_32725;
var statearr_32798_32861 = state_32725__$1;
(statearr_32798_32861[(2)] = reload_dependents);

(statearr_32798_32861[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (38))){
var inst_32678 = (state_32725[(16)]);
var inst_32696 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32678);
var state_32725__$1 = state_32725;
var statearr_32799_32862 = state_32725__$1;
(statearr_32799_32862[(2)] = inst_32696);

(statearr_32799_32862[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (30))){
var state_32725__$1 = state_32725;
var statearr_32800_32863 = state_32725__$1;
(statearr_32800_32863[(2)] = null);

(statearr_32800_32863[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (10))){
var inst_32598 = (state_32725[(22)]);
var inst_32600 = cljs.core.chunked_seq_QMARK_.call(null,inst_32598);
var state_32725__$1 = state_32725;
if(inst_32600){
var statearr_32801_32864 = state_32725__$1;
(statearr_32801_32864[(1)] = (13));

} else {
var statearr_32802_32865 = state_32725__$1;
(statearr_32802_32865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (18))){
var inst_32632 = (state_32725[(2)]);
var state_32725__$1 = state_32725;
if(cljs.core.truth_(inst_32632)){
var statearr_32803_32866 = state_32725__$1;
(statearr_32803_32866[(1)] = (19));

} else {
var statearr_32804_32867 = state_32725__$1;
(statearr_32804_32867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (42))){
var state_32725__$1 = state_32725;
var statearr_32805_32868 = state_32725__$1;
(statearr_32805_32868[(2)] = null);

(statearr_32805_32868[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (37))){
var inst_32691 = (state_32725[(2)]);
var state_32725__$1 = state_32725;
var statearr_32806_32869 = state_32725__$1;
(statearr_32806_32869[(2)] = inst_32691);

(statearr_32806_32869[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32726 === (8))){
var inst_32598 = (state_32725[(22)]);
var inst_32585 = (state_32725[(8)]);
var inst_32598__$1 = cljs.core.seq.call(null,inst_32585);
var state_32725__$1 = (function (){var statearr_32807 = state_32725;
(statearr_32807[(22)] = inst_32598__$1);

return statearr_32807;
})();
if(inst_32598__$1){
var statearr_32808_32870 = state_32725__$1;
(statearr_32808_32870[(1)] = (10));

} else {
var statearr_32809_32871 = state_32725__$1;
(statearr_32809_32871[(1)] = (11));

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
});})(c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24154__auto__,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24155__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24155__auto____0 = (function (){
var statearr_32810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32810[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24155__auto__);

(statearr_32810[(1)] = (1));

return statearr_32810;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24155__auto____1 = (function (state_32725){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_32725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e32811){if((e32811 instanceof Object)){
var ex__24158__auto__ = e32811;
var statearr_32812_32872 = state_32725;
(statearr_32812_32872[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32873 = state_32725;
state_32725 = G__32873;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24155__auto__ = function(state_32725){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24155__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24155__auto____1.call(this,state_32725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24155__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24155__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24323__auto__ = (function (){var statearr_32813 = f__24322__auto__.call(null);
(statearr_32813[(6)] = c__24321__auto__);

return statearr_32813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__,map__32570,map__32570__$1,opts,before_jsload,on_jsload,reload_dependents,map__32571,map__32571__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24321__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32876,link){
var map__32877 = p__32876;
var map__32877__$1 = (((((!((map__32877 == null))))?(((((map__32877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32877):map__32877);
var file = cljs.core.get.call(null,map__32877__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__32877,map__32877__$1,file){
return (function (p1__32874_SHARP_,p2__32875_SHARP_){
if(cljs.core._EQ_.call(null,p1__32874_SHARP_,p2__32875_SHARP_)){
return p1__32874_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__32877,map__32877__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32880){
var map__32881 = p__32880;
var map__32881__$1 = (((((!((map__32881 == null))))?(((((map__32881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32881):map__32881);
var match_length = cljs.core.get.call(null,map__32881__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32881__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32879_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32879_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32883_SHARP_,p2__32884_SHARP_){
return cljs.core.assoc.call(null,p1__32883_SHARP_,cljs.core.get.call(null,p2__32884_SHARP_,key),p2__32884_SHARP_);
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
var loaded_f_datas_32885 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32885);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32885);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32886,p__32887){
var map__32888 = p__32886;
var map__32888__$1 = (((((!((map__32888 == null))))?(((((map__32888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32888):map__32888);
var on_cssload = cljs.core.get.call(null,map__32888__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32889 = p__32887;
var map__32889__$1 = (((((!((map__32889 == null))))?(((((map__32889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32889):map__32889);
var files_msg = map__32889__$1;
var files = cljs.core.get.call(null,map__32889__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1631323775565
