// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('adarsh_quil.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('adarsh_quil.common');
goog.require('adarsh_quil.perlin_wave');
goog.require('adarsh_quil.img_paint_stroke');
goog.require('adarsh_quil.bubble');
adarsh_quil.core.settings = (function adarsh_quil$core$settings(){
return quil.core.smooth.cljs$core$IFn$_invoke$arity$0();
});
adarsh_quil.core.screen_size_ratio = (1);
adarsh_quil.core.screen_size = (function adarsh_quil$core$screen_size(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__6933 = (adarsh_quil.core.screen_size_ratio * quil.core.width());
return Math.round(G__6933);
})(),(function (){var G__6934 = (adarsh_quil.core.screen_size_ratio * quil.core.height());
return Math.round(G__6934);
})()], null);
});
adarsh_quil.core.profile_size = (function adarsh_quil$core$profile_size(){
var min_screen_side = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,adarsh_quil.core.screen_size());
var profile_side = (0.6 * min_screen_side);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [profile_side,profile_side], null);
});
adarsh_quil.core.setup = (function adarsh_quil$core$setup(){
quil.core.frame_rate((60));

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$weight,(0),cljs.core.cst$kw$background,adarsh_quil.perlin_wave.background_perlin_wave((0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.width(),quil.core.height()], null)),cljs.core.cst$kw$screen,adarsh_quil.img_paint_stroke.screen_paint_stoke((0),adarsh_quil.core.screen_size()),cljs.core.cst$kw$profile,adarsh_quil.bubble.profile_bubble_img((1),adarsh_quil.core.profile_size())], null);
});
adarsh_quil.core.update_weight = (function adarsh_quil$core$update_weight(p__6938){
var map__6939 = p__6938;
var map__6939__$1 = (((((!((map__6939 == null))))?(((((map__6939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6939):map__6939);
var state = map__6939__$1;
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6939__$1,cljs.core.cst$kw$weight);
var finished = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__6939,map__6939__$1,state,weight){
return (function (p1__6935_SHARP_){
return adarsh_quil.common.done_QMARK_(cljs.core.second(p1__6935_SHARP_));
});})(map__6939,map__6939__$1,state,weight))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__6939,map__6939__$1,state,weight){
return (function (p1__6936_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(adarsh_quil.common.weight(cljs.core.second(p1__6936_SHARP_)),weight);
});})(map__6939,map__6939__$1,state,weight))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__6939,map__6939__$1,state,weight){
return (function (p1__6937_SHARP_){
var G__6941 = cljs.core.second(p1__6937_SHARP_);
if((!((G__6941 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__6941.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__6941.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6941);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6941);
}
});})(map__6939,map__6939__$1,state,weight))
,state)));
if((((cljs.core.count(finished) > (0))) && (cljs.core.every_QMARK_(cljs.core.true_QMARK_,finished)))){
return (weight + (1));
} else {
return weight;
}
});
adarsh_quil.core.update_state = (function adarsh_quil$core$update_state(p__6944){
var map__6945 = p__6944;
var map__6945__$1 = (((((!((map__6945 == null))))?(((((map__6945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6945):map__6945);
var state = map__6945__$1;
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6945__$1,cljs.core.cst$kw$weight);
var seq__6947_6969 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__6945,map__6945__$1,state,weight){
return (function (p1__6942_SHARP_){
var and__4120__auto__ = (function (){var G__6960 = cljs.core.second(p1__6942_SHARP_);
if((!((G__6960 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__6960.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__6960.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6960);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6960);
}
})();
if(and__4120__auto__){
return (adarsh_quil.common.weight(cljs.core.second(p1__6942_SHARP_)) <= weight);
} else {
return and__4120__auto__;
}
});})(map__6945,map__6945__$1,state,weight))
,state));
var chunk__6948_6970 = null;
var count__6949_6971 = (0);
var i__6950_6972 = (0);
while(true){
if((i__6950_6972 < count__6949_6971)){
var vec__6961_6973 = chunk__6948_6970.cljs$core$IIndexed$_nth$arity$2(null,i__6950_6972);
var __6974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6961_6973,(0),null);
var v_6975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6961_6973,(1),null);
adarsh_quil.common.render(v_6975);


var G__6976 = seq__6947_6969;
var G__6977 = chunk__6948_6970;
var G__6978 = count__6949_6971;
var G__6979 = (i__6950_6972 + (1));
seq__6947_6969 = G__6976;
chunk__6948_6970 = G__6977;
count__6949_6971 = G__6978;
i__6950_6972 = G__6979;
continue;
} else {
var temp__5735__auto___6980 = cljs.core.seq(seq__6947_6969);
if(temp__5735__auto___6980){
var seq__6947_6981__$1 = temp__5735__auto___6980;
if(cljs.core.chunked_seq_QMARK_(seq__6947_6981__$1)){
var c__4550__auto___6982 = cljs.core.chunk_first(seq__6947_6981__$1);
var G__6983 = cljs.core.chunk_rest(seq__6947_6981__$1);
var G__6984 = c__4550__auto___6982;
var G__6985 = cljs.core.count(c__4550__auto___6982);
var G__6986 = (0);
seq__6947_6969 = G__6983;
chunk__6948_6970 = G__6984;
count__6949_6971 = G__6985;
i__6950_6972 = G__6986;
continue;
} else {
var vec__6964_6987 = cljs.core.first(seq__6947_6981__$1);
var __6988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6964_6987,(0),null);
var v_6989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6964_6987,(1),null);
adarsh_quil.common.render(v_6989);


var G__6990 = cljs.core.next(seq__6947_6981__$1);
var G__6991 = null;
var G__6992 = (0);
var G__6993 = (0);
seq__6947_6969 = G__6990;
chunk__6948_6970 = G__6991;
count__6949_6971 = G__6992;
i__6950_6972 = G__6993;
continue;
}
} else {
}
}
break;
}

var new_state = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__6945,map__6945__$1,state,weight){
return (function (p1__6943_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(p1__6943_SHARP_),(((function (){var and__4120__auto__ = (function (){var G__6968 = cljs.core.second(p1__6943_SHARP_);
if((!((G__6968 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__6968.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__6968.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6968);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6968);
}
})();
if(and__4120__auto__){
return (adarsh_quil.common.weight(cljs.core.second(p1__6943_SHARP_)) <= weight);
} else {
return and__4120__auto__;
}
})())?adarsh_quil.common.next_state(cljs.core.second(p1__6943_SHARP_)):cljs.core.second(p1__6943_SHARP_))],null));
});})(map__6945,map__6945__$1,state,weight))
,state));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$weight,adarsh_quil.core.update_weight(new_state));
});
adarsh_quil.core.draw_state = (function adarsh_quil$core$draw_state(p__6994){
var map__6995 = p__6994;
var map__6995__$1 = (((((!((map__6995 == null))))?(((((map__6995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6995):map__6995);
var state = map__6995__$1;
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6995__$1,cljs.core.cst$kw$background);
var screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6995__$1,cljs.core.cst$kw$screen);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6995__$1,cljs.core.cst$kw$profile);
var dark_blue_7000 = quil.core.color.cljs$core$IFn$_invoke$arity$3((16),(67),(115));
quil.core.background.cljs$core$IFn$_invoke$arity$1(dark_blue_7000);

quil.core.image.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$graphic.cljs$core$IFn$_invoke$arity$1(background),(0),(0));

var vec__6997 = adarsh_quil.core.screen_size();
var screen_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6997,(0),null);
var screen_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6997,(1),null);
var screen_offset_x = ((quil.core.width() - screen_width) / (2));
var screen_offset_y = ((quil.core.height() - screen_height) / (2));
var profile_offset = ((function (){var x__4222__auto__ = screen_offset_x;
var y__4223__auto__ = screen_offset_y;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})() + ((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,adarsh_quil.core.screen_size()) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,adarsh_quil.core.profile_size())) / (2)));
quil.core.image.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$graphic.cljs$core$IFn$_invoke$arity$1(screen),screen_offset_x,screen_offset_y);

return quil.core.image.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$graphic.cljs$core$IFn$_invoke$arity$1(profile),profile_offset,profile_offset);
});
adarsh_quil.core.run_sketch = (function adarsh_quil$core$run_sketch(){
adarsh_quil.core.adarsh_quil = (function adarsh_quil$core$run_sketch_$_adarsh_quil(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"adarsh-quil",cljs.core.cst$kw$settings,((cljs.core.fn_QMARK_(adarsh_quil.core.settings))?(function() { 
var G__7001__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(adarsh_quil.core.settings,args);
};
var G__7001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7002__i = 0, G__7002__a = new Array(arguments.length -  0);
while (G__7002__i < G__7002__a.length) {G__7002__a[G__7002__i] = arguments[G__7002__i + 0]; ++G__7002__i;}
  args = new cljs.core.IndexedSeq(G__7002__a,0,null);
} 
return G__7001__delegate.call(this,args);};
G__7001.cljs$lang$maxFixedArity = 0;
G__7001.cljs$lang$applyTo = (function (arglist__7003){
var args = cljs.core.seq(arglist__7003);
return G__7001__delegate(args);
});
G__7001.cljs$core$IFn$_invoke$arity$variadic = G__7001__delegate;
return G__7001;
})()
:adarsh_quil.core.settings),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(adarsh_quil.core.update_state))?(function() { 
var G__7004__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(adarsh_quil.core.update_state,args);
};
var G__7004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7005__i = 0, G__7005__a = new Array(arguments.length -  0);
while (G__7005__i < G__7005__a.length) {G__7005__a[G__7005__i] = arguments[G__7005__i + 0]; ++G__7005__i;}
  args = new cljs.core.IndexedSeq(G__7005__a,0,null);
} 
return G__7004__delegate.call(this,args);};
G__7004.cljs$lang$maxFixedArity = 0;
G__7004.cljs$lang$applyTo = (function (arglist__7006){
var args = cljs.core.seq(arglist__7006);
return G__7004__delegate(args);
});
G__7004.cljs$core$IFn$_invoke$arity$variadic = G__7004__delegate;
return G__7004;
})()
:adarsh_quil.core.update_state),cljs.core.cst$kw$size,(function (){var width = (function (){var or__4131__auto__ = window.innerWidth;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return document.body.clientWidth;
}
})();
var height = (function (){var or__4131__auto__ = window.innerHeight;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return document.body.clientHeight;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null);
})(),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(adarsh_quil.core.setup))?(function() { 
var G__7007__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(adarsh_quil.core.setup,args);
};
var G__7007 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7008__i = 0, G__7008__a = new Array(arguments.length -  0);
while (G__7008__i < G__7008__a.length) {G__7008__a[G__7008__i] = arguments[G__7008__i + 0]; ++G__7008__i;}
  args = new cljs.core.IndexedSeq(G__7008__a,0,null);
} 
return G__7007__delegate.call(this,args);};
G__7007.cljs$lang$maxFixedArity = 0;
G__7007.cljs$lang$applyTo = (function (arglist__7009){
var args = cljs.core.seq(arglist__7009);
return G__7007__delegate(args);
});
G__7007.cljs$core$IFn$_invoke$arity$variadic = G__7007__delegate;
return G__7007;
})()
:adarsh_quil.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(adarsh_quil.core.draw_state))?(function() { 
var G__7010__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(adarsh_quil.core.draw_state,args);
};
var G__7010 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7011__i = 0, G__7011__a = new Array(arguments.length -  0);
while (G__7011__i < G__7011__a.length) {G__7011__a[G__7011__i] = arguments[G__7011__i + 0]; ++G__7011__i;}
  args = new cljs.core.IndexedSeq(G__7011__a,0,null);
} 
return G__7010__delegate.call(this,args);};
G__7010.cljs$lang$maxFixedArity = 0;
G__7010.cljs$lang$applyTo = (function (arglist__7012){
var args = cljs.core.seq(arglist__7012);
return G__7010__delegate(args);
});
G__7010.cljs$core$IFn$_invoke$arity$variadic = G__7010__delegate;
return G__7010;
})()
:adarsh_quil.core.draw_state)], 0));
});
goog.exportSymbol('adarsh_quil.core.adarsh_quil', adarsh_quil.core.adarsh_quil);

if(cljs.core.truth_(cljs.core.some((function (p1__5625__5626__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__5625__5626__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,adarsh_quil.core.adarsh_quil,cljs.core.cst$kw$host_DASH_id,"adarsh-quil"], null));
}
});
goog.exportSymbol('adarsh_quil.core.run_sketch', adarsh_quil.core.run_sketch);
