// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('adarsh_quil.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
adarsh_quil.utils.golden_ratio_points = (function adarsh_quil$utils$golden_ratio_points(count){
var coordinates = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
var i = (1);
while(true){
if((i < count)){
var last_point = cljs.core.last(coordinates);
var G__6543 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coordinates,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(last_point) + (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(cljs.core.quot(i,(2)),(2))))?(1):(-1)) * i)),(cljs.core.second(last_point) + (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(cljs.core.quot((i - (1)),(2)),(2))))?(1):(-1)) * i))], null));
var G__6544 = (i + (1));
coordinates = G__6543;
i = G__6544;
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
var len__4730__auto___6548 = arguments.length;
var i__4731__auto___6549 = (0);
while(true){
if((i__4731__auto___6549 < len__4730__auto___6548)){
args__4736__auto__.push((arguments[i__4731__auto___6549]));

var G__6550 = (i__4731__auto___6549 + (1));
i__4731__auto___6549 = G__6550;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return adarsh_quil.utils.elem_mult.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

adarsh_quil.utils.elem_mult.cljs$core$IFn$_invoke$arity$variadic = (function (vec_arr,vals){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6545_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.cons(p1__6545_SHARP_,vals));
}),vec_arr));
});

adarsh_quil.utils.elem_mult.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
adarsh_quil.utils.elem_mult.cljs$lang$applyTo = (function (seq6546){
var G__6547 = cljs.core.first(seq6546);
var seq6546__$1 = cljs.core.next(seq6546);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6547,seq6546__$1);
});

adarsh_quil.utils.elem_add = (function adarsh_quil$utils$elem_add(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6554 = arguments.length;
var i__4731__auto___6555 = (0);
while(true){
if((i__4731__auto___6555 < len__4730__auto___6554)){
args__4736__auto__.push((arguments[i__4731__auto___6555]));

var G__6556 = (i__4731__auto___6555 + (1));
i__4731__auto___6555 = G__6556;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return adarsh_quil.utils.elem_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

adarsh_quil.utils.elem_add.cljs$core$IFn$_invoke$arity$variadic = (function (vec_arr,vals){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6551_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.cons(p1__6551_SHARP_,vals));
}),vec_arr));
});

adarsh_quil.utils.elem_add.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
adarsh_quil.utils.elem_add.cljs$lang$applyTo = (function (seq6552){
var G__6553 = cljs.core.first(seq6552);
var seq6552__$1 = cljs.core.next(seq6552);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6553,seq6552__$1);
});

adarsh_quil.utils.vec_add = (function adarsh_quil$utils$vec_add(vec1,vec2){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__6557_SHARP_,p2__6558_SHARP_){
return (p1__6557_SHARP_ + p2__6558_SHARP_);
}),vec1,vec2));
});
adarsh_quil.utils.hit_edge_QMARK_ = (function adarsh_quil$utils$hit_edge_QMARK_(p__6559,p__6560,offset){
var vec__6561 = p__6559;
var world_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6561,(0),null);
var world_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6561,(1),null);
var vec__6564 = p__6560;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6564,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6564,(1),null);
return (!(((((((- offset) <= x)) && ((x <= (offset + world_width))))) && (((((- offset) <= y)) && ((y <= (offset + world_height))))))));
});
adarsh_quil.utils.random_point_on_perimeter = (function adarsh_quil$utils$random_point_on_perimeter(p__6567,offset){
var vec__6568 = p__6567;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6568,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6568,(1),null);
var nwidth = (offset + width);
var nheight = (offset + height);
var lower = (- offset);
var G__6571 = (function (){var G__6572 = quil.core.random.cljs$core$IFn$_invoke$arity$2((1),(4));
return Math.round(G__6572);
})();
switch (G__6571) {
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lower,quil.core.random.cljs$core$IFn$_invoke$arity$2(lower,nwidth)], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nwidth,quil.core.random.cljs$core$IFn$_invoke$arity$2(lower,nheight)], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.random.cljs$core$IFn$_invoke$arity$2(lower,nwidth),lower], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.random.cljs$core$IFn$_invoke$arity$2(lower,nwidth),nheight], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6571)].join('')));

}
});
