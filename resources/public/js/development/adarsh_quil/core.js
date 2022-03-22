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
adarsh_quil.core.update_weight = (function adarsh_quil$core$update_weight(p__22591){
var map__22592 = p__22591;
var map__22592__$1 = (((((!((map__22592 == null))))?(((((map__22592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22592):map__22592);
var state = map__22592__$1;
var weight = cljs.core.get.call(null,map__22592__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var finished = cljs.core.map.call(null,((function (map__22592,map__22592__$1,state,weight){
return (function (p1__22588_SHARP_){
return adarsh_quil.common.done_QMARK_.call(null,cljs.core.second.call(null,p1__22588_SHARP_));
});})(map__22592,map__22592__$1,state,weight))
,cljs.core.filter.call(null,((function (map__22592,map__22592__$1,state,weight){
return (function (p1__22589_SHARP_){
return cljs.core._EQ_.call(null,adarsh_quil.common.weight.call(null,cljs.core.second.call(null,p1__22589_SHARP_)),weight);
});})(map__22592,map__22592__$1,state,weight))
,cljs.core.filter.call(null,((function (map__22592,map__22592__$1,state,weight){
return (function (p1__22590_SHARP_){
var G__22594 = cljs.core.second.call(null,p1__22590_SHARP_);
if((!((G__22594 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__22594.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__22594.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,adarsh_quil.common.Drawable,G__22594);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,adarsh_quil.common.Drawable,G__22594);
}
});})(map__22592,map__22592__$1,state,weight))
,state)));
if((((cljs.core.count.call(null,finished) > (0))) && (cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,finished)))){
return (weight + (1));
} else {
return weight;
}
});
adarsh_quil.core.update_state = (function adarsh_quil$core$update_state(p__22597){
var map__22598 = p__22597;
var map__22598__$1 = (((((!((map__22598 == null))))?(((((map__22598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22598):map__22598);
var state = map__22598__$1;
var weight = cljs.core.get.call(null,map__22598__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var seq__22600_22622 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (map__22598,map__22598__$1,state,weight){
return (function (p1__22595_SHARP_){
var and__4120__auto__ = (function (){var G__22613 = cljs.core.second.call(null,p1__22595_SHARP_);
if((!((G__22613 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__22613.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__22613.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,adarsh_quil.common.Drawable,G__22613);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,adarsh_quil.common.Drawable,G__22613);
}
})();
if(and__4120__auto__){
return (adarsh_quil.common.weight.call(null,cljs.core.second.call(null,p1__22595_SHARP_)) <= weight);
} else {
return and__4120__auto__;
}
});})(map__22598,map__22598__$1,state,weight))
,state));
var chunk__22601_22623 = null;
var count__22602_22624 = (0);
var i__22603_22625 = (0);
while(true){
if((i__22603_22625 < count__22602_22624)){
var vec__22614_22626 = cljs.core._nth.call(null,chunk__22601_22623,i__22603_22625);
var __22627 = cljs.core.nth.call(null,vec__22614_22626,(0),null);
var v_22628 = cljs.core.nth.call(null,vec__22614_22626,(1),null);
adarsh_quil.common.render.call(null,v_22628);


var G__22629 = seq__22600_22622;
var G__22630 = chunk__22601_22623;
var G__22631 = count__22602_22624;
var G__22632 = (i__22603_22625 + (1));
seq__22600_22622 = G__22629;
chunk__22601_22623 = G__22630;
count__22602_22624 = G__22631;
i__22603_22625 = G__22632;
continue;
} else {
var temp__5735__auto___22633 = cljs.core.seq.call(null,seq__22600_22622);
if(temp__5735__auto___22633){
var seq__22600_22634__$1 = temp__5735__auto___22633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22600_22634__$1)){
var c__4550__auto___22635 = cljs.core.chunk_first.call(null,seq__22600_22634__$1);
var G__22636 = cljs.core.chunk_rest.call(null,seq__22600_22634__$1);
var G__22637 = c__4550__auto___22635;
var G__22638 = cljs.core.count.call(null,c__4550__auto___22635);
var G__22639 = (0);
seq__22600_22622 = G__22636;
chunk__22601_22623 = G__22637;
count__22602_22624 = G__22638;
i__22603_22625 = G__22639;
continue;
} else {
var vec__22617_22640 = cljs.core.first.call(null,seq__22600_22634__$1);
var __22641 = cljs.core.nth.call(null,vec__22617_22640,(0),null);
var v_22642 = cljs.core.nth.call(null,vec__22617_22640,(1),null);
adarsh_quil.common.render.call(null,v_22642);


var G__22643 = cljs.core.next.call(null,seq__22600_22634__$1);
var G__22644 = null;
var G__22645 = (0);
var G__22646 = (0);
seq__22600_22622 = G__22643;
chunk__22601_22623 = G__22644;
count__22602_22624 = G__22645;
i__22603_22625 = G__22646;
continue;
}
} else {
}
}
break;
}

var new_state = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__22598,map__22598__$1,state,weight){
return (function (p1__22596_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,p1__22596_SHARP_),(((function (){var and__4120__auto__ = (function (){var G__22621 = cljs.core.second.call(null,p1__22596_SHARP_);
if((!((G__22621 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__22621.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__22621.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,adarsh_quil.common.Drawable,G__22621);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,adarsh_quil.common.Drawable,G__22621);
}
})();
if(and__4120__auto__){
return (adarsh_quil.common.weight.call(null,cljs.core.second.call(null,p1__22596_SHARP_)) <= weight);
} else {
return and__4120__auto__;
}
})())?adarsh_quil.common.next_state.call(null,cljs.core.second.call(null,p1__22596_SHARP_)):cljs.core.second.call(null,p1__22596_SHARP_))],null));
});})(map__22598,map__22598__$1,state,weight))
,state));
return cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"weight","weight",-1262796205),adarsh_quil.core.update_weight.call(null,new_state));
});
adarsh_quil.core.draw_state = (function adarsh_quil$core$draw_state(p__22647){
var map__22648 = p__22647;
var map__22648__$1 = (((((!((map__22648 == null))))?(((((map__22648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22648):map__22648);
var state = map__22648__$1;
var background = cljs.core.get.call(null,map__22648__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var screen = cljs.core.get.call(null,map__22648__$1,new cljs.core.Keyword(null,"screen","screen",1990059748));
var profile = cljs.core.get.call(null,map__22648__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var dark_blue_22653 = quil.core.color.call(null,(16),(67),(115));
quil.core.background.call(null,dark_blue_22653);

quil.core.image.call(null,new cljs.core.Keyword(null,"graphic","graphic",262278575).cljs$core$IFn$_invoke$arity$1(background),(0),(0));

var vec__22650 = adarsh_quil.core.screen_size.call(null);
var screen_width = cljs.core.nth.call(null,vec__22650,(0),null);
var screen_height = cljs.core.nth.call(null,vec__22650,(1),null);
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
var G__22654__delegate = function (args){
return cljs.core.apply.call(null,adarsh_quil.core.settings,args);
};
var G__22654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22655__i = 0, G__22655__a = new Array(arguments.length -  0);
while (G__22655__i < G__22655__a.length) {G__22655__a[G__22655__i] = arguments[G__22655__i + 0]; ++G__22655__i;}
  args = new cljs.core.IndexedSeq(G__22655__a,0,null);
} 
return G__22654__delegate.call(this,args);};
G__22654.cljs$lang$maxFixedArity = 0;
G__22654.cljs$lang$applyTo = (function (arglist__22656){
var args = cljs.core.seq(arglist__22656);
return G__22654__delegate(args);
});
G__22654.cljs$core$IFn$_invoke$arity$variadic = G__22654__delegate;
return G__22654;
})()
:adarsh_quil.core.settings),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,adarsh_quil.core.update_state))?(function() { 
var G__22657__delegate = function (args){
return cljs.core.apply.call(null,adarsh_quil.core.update_state,args);
};
var G__22657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22658__i = 0, G__22658__a = new Array(arguments.length -  0);
while (G__22658__i < G__22658__a.length) {G__22658__a[G__22658__i] = arguments[G__22658__i + 0]; ++G__22658__i;}
  args = new cljs.core.IndexedSeq(G__22658__a,0,null);
} 
return G__22657__delegate.call(this,args);};
G__22657.cljs$lang$maxFixedArity = 0;
G__22657.cljs$lang$applyTo = (function (arglist__22659){
var args = cljs.core.seq(arglist__22659);
return G__22657__delegate(args);
});
G__22657.cljs$core$IFn$_invoke$arity$variadic = G__22657__delegate;
return G__22657;
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
var G__22660__delegate = function (args){
return cljs.core.apply.call(null,adarsh_quil.core.setup,args);
};
var G__22660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22661__i = 0, G__22661__a = new Array(arguments.length -  0);
while (G__22661__i < G__22661__a.length) {G__22661__a[G__22661__i] = arguments[G__22661__i + 0]; ++G__22661__i;}
  args = new cljs.core.IndexedSeq(G__22661__a,0,null);
} 
return G__22660__delegate.call(this,args);};
G__22660.cljs$lang$maxFixedArity = 0;
G__22660.cljs$lang$applyTo = (function (arglist__22662){
var args = cljs.core.seq(arglist__22662);
return G__22660__delegate(args);
});
G__22660.cljs$core$IFn$_invoke$arity$variadic = G__22660__delegate;
return G__22660;
})()
:adarsh_quil.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,adarsh_quil.core.draw_state))?(function() { 
var G__22663__delegate = function (args){
return cljs.core.apply.call(null,adarsh_quil.core.draw_state,args);
};
var G__22663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22664__i = 0, G__22664__a = new Array(arguments.length -  0);
while (G__22664__i < G__22664__a.length) {G__22664__a[G__22664__i] = arguments[G__22664__i + 0]; ++G__22664__i;}
  args = new cljs.core.IndexedSeq(G__22664__a,0,null);
} 
return G__22663__delegate.call(this,args);};
G__22663.cljs$lang$maxFixedArity = 0;
G__22663.cljs$lang$applyTo = (function (arglist__22665){
var args = cljs.core.seq(arglist__22665);
return G__22663__delegate(args);
});
G__22663.cljs$core$IFn$_invoke$arity$variadic = G__22663__delegate;
return G__22663;
})()
:adarsh_quil.core.draw_state));
});
goog.exportSymbol('adarsh_quil.core.adarsh_quil', adarsh_quil.core.adarsh_quil);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20937__20938__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20937__20938__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),adarsh_quil.core.adarsh_quil,new cljs.core.Keyword(null,"host-id","host-id",742376279),"adarsh-quil"], null));
}
});
goog.exportSymbol('adarsh_quil.core.run_sketch', adarsh_quil.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1631323772271
