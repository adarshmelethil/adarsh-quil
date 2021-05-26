// Compiled by ClojureScript 1.10.520 {}
goog.provide('adarsh_quil.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('adarsh_quil.common');
goog.require('adarsh_quil.perlin_wave');
goog.require('adarsh_quil.img_paint_stroke');
goog.require('adarsh_quil.bubble');
adarsh_quil.core.settings = (function adarsh_quil$core$settings(){
return quil.core.smooth.call(null);
});
adarsh_quil.core.screen_size_ratio = (1);
adarsh_quil.core.screen_size = (function adarsh_quil$core$screen_size(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.round((adarsh_quil.core.screen_size_ratio * quil.core.width.call(null))),Math.round((adarsh_quil.core.screen_size_ratio * quil.core.height.call(null)))], null);
});
adarsh_quil.core.profile_size = (function adarsh_quil$core$profile_size(){
var min_screen_side = cljs.core.apply.call(null,cljs.core.min,adarsh_quil.core.screen_size.call(null));
var profile_side = (0.6 * min_screen_side);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [profile_side,profile_side], null);
});
adarsh_quil.core.setup = (function adarsh_quil$core$setup(){
quil.core.frame_rate.call(null,(60));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"weight","weight",-1262796205),(0),new cljs.core.Keyword(null,"background","background",-863952629),adarsh_quil.perlin_wave.background_perlin_wave.call(null,(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.width.call(null),quil.core.height.call(null)], null)),new cljs.core.Keyword(null,"screen","screen",1990059748),adarsh_quil.img_paint_stroke.screen_paint_stoke.call(null,(0),adarsh_quil.core.screen_size.call(null)),new cljs.core.Keyword(null,"profile","profile",-545963874),adarsh_quil.bubble.profile_bubble_img.call(null,(1),adarsh_quil.core.profile_size.call(null))], null);
});
adarsh_quil.core.update_weight = (function adarsh_quil$core$update_weight(p__36211){
var map__36212 = p__36211;
var map__36212__$1 = (((((!((map__36212 == null))))?(((((map__36212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36212):map__36212);
var state = map__36212__$1;
var weight = cljs.core.get.call(null,map__36212__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var finished = cljs.core.map.call(null,((function (map__36212,map__36212__$1,state,weight){
return (function (p1__36208_SHARP_){
return adarsh_quil.common.done_QMARK_.call(null,cljs.core.second.call(null,p1__36208_SHARP_));
});})(map__36212,map__36212__$1,state,weight))
,cljs.core.filter.call(null,((function (map__36212,map__36212__$1,state,weight){
return (function (p1__36209_SHARP_){
return cljs.core._EQ_.call(null,adarsh_quil.common.weight.call(null,cljs.core.second.call(null,p1__36209_SHARP_)),weight);
});})(map__36212,map__36212__$1,state,weight))
,cljs.core.filter.call(null,((function (map__36212,map__36212__$1,state,weight){
return (function (p1__36210_SHARP_){
var G__36214 = cljs.core.second.call(null,p1__36210_SHARP_);
if((!((G__36214 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__36214.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__36214.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,adarsh_quil.common.Drawable,G__36214);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,adarsh_quil.common.Drawable,G__36214);
}
});})(map__36212,map__36212__$1,state,weight))
,state)));
if((((cljs.core.count.call(null,finished) > (0))) && (cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,finished)))){
return (weight + (1));
} else {
return weight;
}
});
adarsh_quil.core.update_state = (function adarsh_quil$core$update_state(p__36217){
var map__36218 = p__36217;
var map__36218__$1 = (((((!((map__36218 == null))))?(((((map__36218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36218):map__36218);
var state = map__36218__$1;
var weight = cljs.core.get.call(null,map__36218__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var seq__36220_36242 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (map__36218,map__36218__$1,state,weight){
return (function (p1__36215_SHARP_){
var and__4120__auto__ = (function (){var G__36233 = cljs.core.second.call(null,p1__36215_SHARP_);
if((!((G__36233 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__36233.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__36233.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,adarsh_quil.common.Drawable,G__36233);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,adarsh_quil.common.Drawable,G__36233);
}
})();
if(and__4120__auto__){
return (adarsh_quil.common.weight.call(null,cljs.core.second.call(null,p1__36215_SHARP_)) <= weight);
} else {
return and__4120__auto__;
}
});})(map__36218,map__36218__$1,state,weight))
,state));
var chunk__36221_36243 = null;
var count__36222_36244 = (0);
var i__36223_36245 = (0);
while(true){
if((i__36223_36245 < count__36222_36244)){
var vec__36234_36246 = cljs.core._nth.call(null,chunk__36221_36243,i__36223_36245);
var __36247 = cljs.core.nth.call(null,vec__36234_36246,(0),null);
var v_36248 = cljs.core.nth.call(null,vec__36234_36246,(1),null);
adarsh_quil.common.render.call(null,v_36248);


var G__36249 = seq__36220_36242;
var G__36250 = chunk__36221_36243;
var G__36251 = count__36222_36244;
var G__36252 = (i__36223_36245 + (1));
seq__36220_36242 = G__36249;
chunk__36221_36243 = G__36250;
count__36222_36244 = G__36251;
i__36223_36245 = G__36252;
continue;
} else {
var temp__5735__auto___36253 = cljs.core.seq.call(null,seq__36220_36242);
if(temp__5735__auto___36253){
var seq__36220_36254__$1 = temp__5735__auto___36253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36220_36254__$1)){
var c__4550__auto___36255 = cljs.core.chunk_first.call(null,seq__36220_36254__$1);
var G__36256 = cljs.core.chunk_rest.call(null,seq__36220_36254__$1);
var G__36257 = c__4550__auto___36255;
var G__36258 = cljs.core.count.call(null,c__4550__auto___36255);
var G__36259 = (0);
seq__36220_36242 = G__36256;
chunk__36221_36243 = G__36257;
count__36222_36244 = G__36258;
i__36223_36245 = G__36259;
continue;
} else {
var vec__36237_36260 = cljs.core.first.call(null,seq__36220_36254__$1);
var __36261 = cljs.core.nth.call(null,vec__36237_36260,(0),null);
var v_36262 = cljs.core.nth.call(null,vec__36237_36260,(1),null);
adarsh_quil.common.render.call(null,v_36262);


var G__36263 = cljs.core.next.call(null,seq__36220_36254__$1);
var G__36264 = null;
var G__36265 = (0);
var G__36266 = (0);
seq__36220_36242 = G__36263;
chunk__36221_36243 = G__36264;
count__36222_36244 = G__36265;
i__36223_36245 = G__36266;
continue;
}
} else {
}
}
break;
}

var new_state = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__36218,map__36218__$1,state,weight){
return (function (p1__36216_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,p1__36216_SHARP_),(((function (){var and__4120__auto__ = (function (){var G__36241 = cljs.core.second.call(null,p1__36216_SHARP_);
if((!((G__36241 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__36241.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__36241.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,adarsh_quil.common.Drawable,G__36241);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,adarsh_quil.common.Drawable,G__36241);
}
})();
if(and__4120__auto__){
return (adarsh_quil.common.weight.call(null,cljs.core.second.call(null,p1__36216_SHARP_)) <= weight);
} else {
return and__4120__auto__;
}
})())?adarsh_quil.common.next_state.call(null,cljs.core.second.call(null,p1__36216_SHARP_)):cljs.core.second.call(null,p1__36216_SHARP_))],null));
});})(map__36218,map__36218__$1,state,weight))
,state));
return cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"weight","weight",-1262796205),adarsh_quil.core.update_weight.call(null,new_state));
});
adarsh_quil.core.draw_state = (function adarsh_quil$core$draw_state(p__36267){
var map__36268 = p__36267;
var map__36268__$1 = (((((!((map__36268 == null))))?(((((map__36268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36268):map__36268);
var state = map__36268__$1;
var background = cljs.core.get.call(null,map__36268__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var screen = cljs.core.get.call(null,map__36268__$1,new cljs.core.Keyword(null,"screen","screen",1990059748));
var profile = cljs.core.get.call(null,map__36268__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var dark_blue_36273 = quil.core.color.call(null,(16),(67),(115));
quil.core.background.call(null,dark_blue_36273);

quil.core.image.call(null,new cljs.core.Keyword(null,"graphic","graphic",262278575).cljs$core$IFn$_invoke$arity$1(background),(0),(0));

var vec__36270 = adarsh_quil.core.screen_size.call(null);
var screen_width = cljs.core.nth.call(null,vec__36270,(0),null);
var screen_height = cljs.core.nth.call(null,vec__36270,(1),null);
var screen_offset_x = ((quil.core.width.call(null) - screen_width) / (2));
var screen_offset_y = ((quil.core.height.call(null) - screen_height) / (2));
var profile_offset = ((function (){var x__4222__auto__ = screen_offset_x;
var y__4223__auto__ = screen_offset_y;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})() + ((cljs.core.apply.call(null,cljs.core.min,adarsh_quil.core.screen_size.call(null)) - cljs.core.apply.call(null,cljs.core.min,adarsh_quil.core.profile_size.call(null))) / (2)));
quil.core.image.call(null,new cljs.core.Keyword(null,"graphic","graphic",262278575).cljs$core$IFn$_invoke$arity$1(screen),screen_offset_x,screen_offset_y);

return quil.core.image.call(null,new cljs.core.Keyword(null,"graphic","graphic",262278575).cljs$core$IFn$_invoke$arity$1(profile),profile_offset,profile_offset);
});
adarsh_quil.core.run_sketch = (function adarsh_quil$core$run_sketch(){
adarsh_quil.core.adarsh_quil = (function adarsh_quil$core$run_sketch_$_adarsh_quil(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"adarsh-quil",new cljs.core.Keyword(null,"settings","settings",1556144875),((cljs.core.fn_QMARK_.call(null,adarsh_quil.core.settings))?(function() { 
var G__36274__delegate = function (args){
return cljs.core.apply.call(null,adarsh_quil.core.settings,args);
};
var G__36274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36275__i = 0, G__36275__a = new Array(arguments.length -  0);
while (G__36275__i < G__36275__a.length) {G__36275__a[G__36275__i] = arguments[G__36275__i + 0]; ++G__36275__i;}
  args = new cljs.core.IndexedSeq(G__36275__a,0,null);
} 
return G__36274__delegate.call(this,args);};
G__36274.cljs$lang$maxFixedArity = 0;
G__36274.cljs$lang$applyTo = (function (arglist__36276){
var args = cljs.core.seq(arglist__36276);
return G__36274__delegate(args);
});
G__36274.cljs$core$IFn$_invoke$arity$variadic = G__36274__delegate;
return G__36274;
})()
:adarsh_quil.core.settings),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,adarsh_quil.core.update_state))?(function() { 
var G__36277__delegate = function (args){
return cljs.core.apply.call(null,adarsh_quil.core.update_state,args);
};
var G__36277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36278__i = 0, G__36278__a = new Array(arguments.length -  0);
while (G__36278__i < G__36278__a.length) {G__36278__a[G__36278__i] = arguments[G__36278__i + 0]; ++G__36278__i;}
  args = new cljs.core.IndexedSeq(G__36278__a,0,null);
} 
return G__36277__delegate.call(this,args);};
G__36277.cljs$lang$maxFixedArity = 0;
G__36277.cljs$lang$applyTo = (function (arglist__36279){
var args = cljs.core.seq(arglist__36279);
return G__36277__delegate(args);
});
G__36277.cljs$core$IFn$_invoke$arity$variadic = G__36277__delegate;
return G__36277;
})()
:adarsh_quil.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var width = (function (){var or__4131__auto__ = window.innerWidth;
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
})(),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,adarsh_quil.core.setup))?(function() { 
var G__36280__delegate = function (args){
return cljs.core.apply.call(null,adarsh_quil.core.setup,args);
};
var G__36280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36281__i = 0, G__36281__a = new Array(arguments.length -  0);
while (G__36281__i < G__36281__a.length) {G__36281__a[G__36281__i] = arguments[G__36281__i + 0]; ++G__36281__i;}
  args = new cljs.core.IndexedSeq(G__36281__a,0,null);
} 
return G__36280__delegate.call(this,args);};
G__36280.cljs$lang$maxFixedArity = 0;
G__36280.cljs$lang$applyTo = (function (arglist__36282){
var args = cljs.core.seq(arglist__36282);
return G__36280__delegate(args);
});
G__36280.cljs$core$IFn$_invoke$arity$variadic = G__36280__delegate;
return G__36280;
})()
:adarsh_quil.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,adarsh_quil.core.draw_state))?(function() { 
var G__36283__delegate = function (args){
return cljs.core.apply.call(null,adarsh_quil.core.draw_state,args);
};
var G__36283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36284__i = 0, G__36284__a = new Array(arguments.length -  0);
while (G__36284__i < G__36284__a.length) {G__36284__a[G__36284__i] = arguments[G__36284__i + 0]; ++G__36284__i;}
  args = new cljs.core.IndexedSeq(G__36284__a,0,null);
} 
return G__36283__delegate.call(this,args);};
G__36283.cljs$lang$maxFixedArity = 0;
G__36283.cljs$lang$applyTo = (function (arglist__36285){
var args = cljs.core.seq(arglist__36285);
return G__36283__delegate(args);
});
G__36283.cljs$core$IFn$_invoke$arity$variadic = G__36283__delegate;
return G__36283;
})()
:adarsh_quil.core.draw_state));
});
goog.exportSymbol('adarsh_quil.core.adarsh_quil', adarsh_quil.core.adarsh_quil);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20916__20917__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20916__20917__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),adarsh_quil.core.adarsh_quil,new cljs.core.Keyword(null,"host-id","host-id",742376279),"adarsh-quil"], null));
}
});
goog.exportSymbol('adarsh_quil.core.run_sketch', adarsh_quil.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1612602209673
