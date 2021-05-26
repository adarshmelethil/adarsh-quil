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
var G__21879 = cljs.core.conj.call(null,coordinates,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,last_point) + (((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,cljs.core.quot.call(null,i,(2)),(2))))?(1):(-1)) * i)),(cljs.core.second.call(null,last_point) + (((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,cljs.core.quot.call(null,(i - (1)),(2)),(2))))?(1):(-1)) * i))], null));
var G__21880 = (i + (1));
coordinates = G__21879;
i = G__21880;
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
var len__4730__auto___21884 = arguments.length;
var i__4731__auto___21885 = (0);
while(true){
if((i__4731__auto___21885 < len__4730__auto___21884)){
args__4736__auto__.push((arguments[i__4731__auto___21885]));

var G__21886 = (i__4731__auto___21885 + (1));
i__4731__auto___21885 = G__21886;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return adarsh_quil.utils.elem_mult.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

adarsh_quil.utils.elem_mult.cljs$core$IFn$_invoke$arity$variadic = (function (vec_arr,vals){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__21881_SHARP_){
return cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.cons.call(null,p1__21881_SHARP_,vals));
}),vec_arr));
});

adarsh_quil.utils.elem_mult.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
adarsh_quil.utils.elem_mult.cljs$lang$applyTo = (function (seq21882){
var G__21883 = cljs.core.first.call(null,seq21882);
var seq21882__$1 = cljs.core.next.call(null,seq21882);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21883,seq21882__$1);
});

adarsh_quil.utils.elem_add = (function adarsh_quil$utils$elem_add(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21890 = arguments.length;
var i__4731__auto___21891 = (0);
while(true){
if((i__4731__auto___21891 < len__4730__auto___21890)){
args__4736__auto__.push((arguments[i__4731__auto___21891]));

var G__21892 = (i__4731__auto___21891 + (1));
i__4731__auto___21891 = G__21892;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return adarsh_quil.utils.elem_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

adarsh_quil.utils.elem_add.cljs$core$IFn$_invoke$arity$variadic = (function (vec_arr,vals){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__21887_SHARP_){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.cons.call(null,p1__21887_SHARP_,vals));
}),vec_arr));
});

adarsh_quil.utils.elem_add.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
adarsh_quil.utils.elem_add.cljs$lang$applyTo = (function (seq21888){
var G__21889 = cljs.core.first.call(null,seq21888);
var seq21888__$1 = cljs.core.next.call(null,seq21888);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21889,seq21888__$1);
});

adarsh_quil.utils.vec_add = (function adarsh_quil$utils$vec_add(vec1,vec2){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__21893_SHARP_,p2__21894_SHARP_){
return (p1__21893_SHARP_ + p2__21894_SHARP_);
}),vec1,vec2));
});
adarsh_quil.utils.hit_edge_QMARK_ = (function adarsh_quil$utils$hit_edge_QMARK_(p__21895,p__21896,offset){
var vec__21897 = p__21895;
var world_width = cljs.core.nth.call(null,vec__21897,(0),null);
var world_height = cljs.core.nth.call(null,vec__21897,(1),null);
var vec__21900 = p__21896;
var x = cljs.core.nth.call(null,vec__21900,(0),null);
var y = cljs.core.nth.call(null,vec__21900,(1),null);
return (!(((((((- offset) <= x)) && ((x <= (offset + world_width))))) && (((((- offset) <= y)) && ((y <= (offset + world_height))))))));
});
adarsh_quil.utils.random_point_on_perimeter = (function adarsh_quil$utils$random_point_on_perimeter(p__21903,offset){
var vec__21904 = p__21903;
var width = cljs.core.nth.call(null,vec__21904,(0),null);
var height = cljs.core.nth.call(null,vec__21904,(1),null);
var nwidth = (offset + width);
var nheight = (offset + height);
var lower = (- offset);
var G__21907 = Math.round(quil.core.random.call(null,(1),(4)));
switch (G__21907) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21907)].join('')));

}
});

//# sourceMappingURL=utils.js.map?rel=1612339712707
