// Compiled by ClojureScript 1.10.520 {}
goog.provide('adarsh_quil.utils');
goog.require('cljs.core');
goog.require('quil.core');
adarsh_quil.utils.golden_ratio_points = (function adarsh_quil$utils$golden_ratio_points(count){
var coordinates = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
var i = (1);
while(true){
if((i < count)){
var last_point = cljs.core.last.call(null,coordinates);
var G__22357 = cljs.core.conj.call(null,coordinates,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,last_point) + (((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,cljs.core.quot.call(null,i,(2)),(2))))?(1):(-1)) * i)),(cljs.core.second.call(null,last_point) + (((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,cljs.core.quot.call(null,(i - (1)),(2)),(2))))?(1):(-1)) * i))], null));
var G__22358 = (i + (1));
coordinates = G__22357;
i = G__22358;
continue;
} else {
return coordinates;
}
break;
}
});
adarsh_quil.utils.loop_around = (function adarsh_quil$utils$loop_around(val,left,right){
if((val < left)){
return right;
} else {
if((val > right)){
return left;
} else {
return val;

}
}
});
adarsh_quil.utils.elem_mult = (function adarsh_quil$utils$elem_mult(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22362 = arguments.length;
var i__4731__auto___22363 = (0);
while(true){
if((i__4731__auto___22363 < len__4730__auto___22362)){
args__4736__auto__.push((arguments[i__4731__auto___22363]));

var G__22364 = (i__4731__auto___22363 + (1));
i__4731__auto___22363 = G__22364;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return adarsh_quil.utils.elem_mult.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

adarsh_quil.utils.elem_mult.cljs$core$IFn$_invoke$arity$variadic = (function (vec_arr,vals){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__22359_SHARP_){
return cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.cons.call(null,p1__22359_SHARP_,vals));
}),vec_arr));
});

adarsh_quil.utils.elem_mult.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
adarsh_quil.utils.elem_mult.cljs$lang$applyTo = (function (seq22360){
var G__22361 = cljs.core.first.call(null,seq22360);
var seq22360__$1 = cljs.core.next.call(null,seq22360);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22361,seq22360__$1);
});

adarsh_quil.utils.elem_add = (function adarsh_quil$utils$elem_add(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22368 = arguments.length;
var i__4731__auto___22369 = (0);
while(true){
if((i__4731__auto___22369 < len__4730__auto___22368)){
args__4736__auto__.push((arguments[i__4731__auto___22369]));

var G__22370 = (i__4731__auto___22369 + (1));
i__4731__auto___22369 = G__22370;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return adarsh_quil.utils.elem_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

adarsh_quil.utils.elem_add.cljs$core$IFn$_invoke$arity$variadic = (function (vec_arr,vals){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__22365_SHARP_){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.cons.call(null,p1__22365_SHARP_,vals));
}),vec_arr));
});

adarsh_quil.utils.elem_add.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
adarsh_quil.utils.elem_add.cljs$lang$applyTo = (function (seq22366){
var G__22367 = cljs.core.first.call(null,seq22366);
var seq22366__$1 = cljs.core.next.call(null,seq22366);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22367,seq22366__$1);
});

adarsh_quil.utils.vec_add = (function adarsh_quil$utils$vec_add(vec1,vec2){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__22371_SHARP_,p2__22372_SHARP_){
return (p1__22371_SHARP_ + p2__22372_SHARP_);
}),vec1,vec2));
});
adarsh_quil.utils.hit_edge_QMARK_ = (function adarsh_quil$utils$hit_edge_QMARK_(p__22373,p__22374,offset){
var vec__22375 = p__22373;
var world_width = cljs.core.nth.call(null,vec__22375,(0),null);
var world_height = cljs.core.nth.call(null,vec__22375,(1),null);
var vec__22378 = p__22374;
var x = cljs.core.nth.call(null,vec__22378,(0),null);
var y = cljs.core.nth.call(null,vec__22378,(1),null);
return (!(((((((- offset) <= x)) && ((x <= (offset + world_width))))) && (((((- offset) <= y)) && ((y <= (offset + world_height))))))));
});
adarsh_quil.utils.random_point_on_perimeter = (function adarsh_quil$utils$random_point_on_perimeter(p__22381,offset){
var vec__22382 = p__22381;
var width = cljs.core.nth.call(null,vec__22382,(0),null);
var height = cljs.core.nth.call(null,vec__22382,(1),null);
var nwidth = (offset + width);
var nheight = (offset + height);
var lower = (- offset);
var G__22385 = Math.round(quil.core.random.call(null,(1),(4)));
switch (G__22385) {
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lower,quil.core.random.call(null,lower,nwidth)], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nwidth,quil.core.random.call(null,lower,nheight)], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.random.call(null,lower,nwidth),lower], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.random.call(null,lower,nwidth),nheight], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22385)].join('')));

}
});

//# sourceMappingURL=utils.js.map?rel=1631323772142
