// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23747 = arguments.length;
switch (G__23747) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23748 = (function (f,blockable,meta23749){
this.f = f;
this.blockable = blockable;
this.meta23749 = meta23749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23750,meta23749__$1){
var self__ = this;
var _23750__$1 = this;
return (new cljs.core.async.t_cljs$core$async23748(self__.f,self__.blockable,meta23749__$1));
});

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23750){
var self__ = this;
var _23750__$1 = this;
return self__.meta23749;
});

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23749","meta23749",1380684322,null)], null);
});

cljs.core.async.t_cljs$core$async23748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23748";

cljs.core.async.t_cljs$core$async23748.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23748");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23748.
 */
cljs.core.async.__GT_t_cljs$core$async23748 = (function cljs$core$async$__GT_t_cljs$core$async23748(f__$1,blockable__$1,meta23749){
return (new cljs.core.async.t_cljs$core$async23748(f__$1,blockable__$1,meta23749));
});

}

return (new cljs.core.async.t_cljs$core$async23748(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23754 = arguments.length;
switch (G__23754) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23757 = arguments.length;
switch (G__23757) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23760 = arguments.length;
switch (G__23760) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23762 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23762);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23762,ret){
return (function (){
return fn1.call(null,val_23762);
});})(val_23762,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23764 = arguments.length;
switch (G__23764) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___23766 = n;
var x_23767 = (0);
while(true){
if((x_23767 < n__4607__auto___23766)){
(a[x_23767] = (0));

var G__23768 = (x_23767 + (1));
x_23767 = G__23768;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23769 = (i + (1));
i = G__23769;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23770 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23770 = (function (flag,meta23771){
this.flag = flag;
this.meta23771 = meta23771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23772,meta23771__$1){
var self__ = this;
var _23772__$1 = this;
return (new cljs.core.async.t_cljs$core$async23770(self__.flag,meta23771__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23772){
var self__ = this;
var _23772__$1 = this;
return self__.meta23771;
});})(flag))
;

cljs.core.async.t_cljs$core$async23770.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23770.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23770.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23771","meta23771",1681929403,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23770";

cljs.core.async.t_cljs$core$async23770.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23770");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23770.
 */
cljs.core.async.__GT_t_cljs$core$async23770 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23770(flag__$1,meta23771){
return (new cljs.core.async.t_cljs$core$async23770(flag__$1,meta23771));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23770(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23773 = (function (flag,cb,meta23774){
this.flag = flag;
this.cb = cb;
this.meta23774 = meta23774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23775,meta23774__$1){
var self__ = this;
var _23775__$1 = this;
return (new cljs.core.async.t_cljs$core$async23773(self__.flag,self__.cb,meta23774__$1));
});

cljs.core.async.t_cljs$core$async23773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23775){
var self__ = this;
var _23775__$1 = this;
return self__.meta23774;
});

cljs.core.async.t_cljs$core$async23773.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23773.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23773.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23773.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23774","meta23774",1370197384,null)], null);
});

cljs.core.async.t_cljs$core$async23773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23773";

cljs.core.async.t_cljs$core$async23773.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23773");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23773.
 */
cljs.core.async.__GT_t_cljs$core$async23773 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23773(flag__$1,cb__$1,meta23774){
return (new cljs.core.async.t_cljs$core$async23773(flag__$1,cb__$1,meta23774));
});

}

return (new cljs.core.async.t_cljs$core$async23773(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23776_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23776_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23777_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23777_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23778 = (i + (1));
i = G__23778;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23784 = arguments.length;
var i__4731__auto___23785 = (0);
while(true){
if((i__4731__auto___23785 < len__4730__auto___23784)){
args__4736__auto__.push((arguments[i__4731__auto___23785]));

var G__23786 = (i__4731__auto___23785 + (1));
i__4731__auto___23785 = G__23786;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23781){
var map__23782 = p__23781;
var map__23782__$1 = (((((!((map__23782 == null))))?(((((map__23782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23782):map__23782);
var opts = map__23782__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23779){
var G__23780 = cljs.core.first.call(null,seq23779);
var seq23779__$1 = cljs.core.next.call(null,seq23779);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23780,seq23779__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23788 = arguments.length;
switch (G__23788) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23687__auto___23834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___23834){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___23834){
return (function (state_23812){
var state_val_23813 = (state_23812[(1)]);
if((state_val_23813 === (7))){
var inst_23808 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
var statearr_23814_23835 = state_23812__$1;
(statearr_23814_23835[(2)] = inst_23808);

(statearr_23814_23835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (1))){
var state_23812__$1 = state_23812;
var statearr_23815_23836 = state_23812__$1;
(statearr_23815_23836[(2)] = null);

(statearr_23815_23836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (4))){
var inst_23791 = (state_23812[(7)]);
var inst_23791__$1 = (state_23812[(2)]);
var inst_23792 = (inst_23791__$1 == null);
var state_23812__$1 = (function (){var statearr_23816 = state_23812;
(statearr_23816[(7)] = inst_23791__$1);

return statearr_23816;
})();
if(cljs.core.truth_(inst_23792)){
var statearr_23817_23837 = state_23812__$1;
(statearr_23817_23837[(1)] = (5));

} else {
var statearr_23818_23838 = state_23812__$1;
(statearr_23818_23838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (13))){
var state_23812__$1 = state_23812;
var statearr_23819_23839 = state_23812__$1;
(statearr_23819_23839[(2)] = null);

(statearr_23819_23839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (6))){
var inst_23791 = (state_23812[(7)]);
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23812__$1,(11),to,inst_23791);
} else {
if((state_val_23813 === (3))){
var inst_23810 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23812__$1,inst_23810);
} else {
if((state_val_23813 === (12))){
var state_23812__$1 = state_23812;
var statearr_23820_23840 = state_23812__$1;
(statearr_23820_23840[(2)] = null);

(statearr_23820_23840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (2))){
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23812__$1,(4),from);
} else {
if((state_val_23813 === (11))){
var inst_23801 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
if(cljs.core.truth_(inst_23801)){
var statearr_23821_23841 = state_23812__$1;
(statearr_23821_23841[(1)] = (12));

} else {
var statearr_23822_23842 = state_23812__$1;
(statearr_23822_23842[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (9))){
var state_23812__$1 = state_23812;
var statearr_23823_23843 = state_23812__$1;
(statearr_23823_23843[(2)] = null);

(statearr_23823_23843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (5))){
var state_23812__$1 = state_23812;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23824_23844 = state_23812__$1;
(statearr_23824_23844[(1)] = (8));

} else {
var statearr_23825_23845 = state_23812__$1;
(statearr_23825_23845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (14))){
var inst_23806 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
var statearr_23826_23846 = state_23812__$1;
(statearr_23826_23846[(2)] = inst_23806);

(statearr_23826_23846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (10))){
var inst_23798 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
var statearr_23827_23847 = state_23812__$1;
(statearr_23827_23847[(2)] = inst_23798);

(statearr_23827_23847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (8))){
var inst_23795 = cljs.core.async.close_BANG_.call(null,to);
var state_23812__$1 = state_23812;
var statearr_23828_23848 = state_23812__$1;
(statearr_23828_23848[(2)] = inst_23795);

(statearr_23828_23848[(1)] = (10));


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
});})(c__23687__auto___23834))
;
return ((function (switch__23592__auto__,c__23687__auto___23834){
return (function() {
var cljs$core$async$state_machine__23593__auto__ = null;
var cljs$core$async$state_machine__23593__auto____0 = (function (){
var statearr_23829 = [null,null,null,null,null,null,null,null];
(statearr_23829[(0)] = cljs$core$async$state_machine__23593__auto__);

(statearr_23829[(1)] = (1));

return statearr_23829;
});
var cljs$core$async$state_machine__23593__auto____1 = (function (state_23812){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_23812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e23830){if((e23830 instanceof Object)){
var ex__23596__auto__ = e23830;
var statearr_23831_23849 = state_23812;
(statearr_23831_23849[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23850 = state_23812;
state_23812 = G__23850;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$state_machine__23593__auto__ = function(state_23812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23593__auto____1.call(this,state_23812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23593__auto____0;
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23593__auto____1;
return cljs$core$async$state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___23834))
})();
var state__23689__auto__ = (function (){var statearr_23832 = f__23688__auto__.call(null);
(statearr_23832[(6)] = c__23687__auto___23834);

return statearr_23832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___23834))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23851){
var vec__23852 = p__23851;
var v = cljs.core.nth.call(null,vec__23852,(0),null);
var p = cljs.core.nth.call(null,vec__23852,(1),null);
var job = vec__23852;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23687__auto___24023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___24023,res,vec__23852,v,p,job,jobs,results){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___24023,res,vec__23852,v,p,job,jobs,results){
return (function (state_23859){
var state_val_23860 = (state_23859[(1)]);
if((state_val_23860 === (1))){
var state_23859__$1 = state_23859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23859__$1,(2),res,v);
} else {
if((state_val_23860 === (2))){
var inst_23856 = (state_23859[(2)]);
var inst_23857 = cljs.core.async.close_BANG_.call(null,res);
var state_23859__$1 = (function (){var statearr_23861 = state_23859;
(statearr_23861[(7)] = inst_23856);

return statearr_23861;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23859__$1,inst_23857);
} else {
return null;
}
}
});})(c__23687__auto___24023,res,vec__23852,v,p,job,jobs,results))
;
return ((function (switch__23592__auto__,c__23687__auto___24023,res,vec__23852,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0 = (function (){
var statearr_23862 = [null,null,null,null,null,null,null,null];
(statearr_23862[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__);

(statearr_23862[(1)] = (1));

return statearr_23862;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1 = (function (state_23859){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_23859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e23863){if((e23863 instanceof Object)){
var ex__23596__auto__ = e23863;
var statearr_23864_24024 = state_23859;
(statearr_23864_24024[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24025 = state_23859;
state_23859 = G__24025;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__ = function(state_23859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1.call(this,state_23859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___24023,res,vec__23852,v,p,job,jobs,results))
})();
var state__23689__auto__ = (function (){var statearr_23865 = f__23688__auto__.call(null);
(statearr_23865[(6)] = c__23687__auto___24023);

return statearr_23865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___24023,res,vec__23852,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23866){
var vec__23867 = p__23866;
var v = cljs.core.nth.call(null,vec__23867,(0),null);
var p = cljs.core.nth.call(null,vec__23867,(1),null);
var job = vec__23867;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___24026 = n;
var __24027 = (0);
while(true){
if((__24027 < n__4607__auto___24026)){
var G__23870_24028 = type;
var G__23870_24029__$1 = (((G__23870_24028 instanceof cljs.core.Keyword))?G__23870_24028.fqn:null);
switch (G__23870_24029__$1) {
case "compute":
var c__23687__auto___24031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24027,c__23687__auto___24031,G__23870_24028,G__23870_24029__$1,n__4607__auto___24026,jobs,results,process,async){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (__24027,c__23687__auto___24031,G__23870_24028,G__23870_24029__$1,n__4607__auto___24026,jobs,results,process,async){
return (function (state_23883){
var state_val_23884 = (state_23883[(1)]);
if((state_val_23884 === (1))){
var state_23883__$1 = state_23883;
var statearr_23885_24032 = state_23883__$1;
(statearr_23885_24032[(2)] = null);

(statearr_23885_24032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23884 === (2))){
var state_23883__$1 = state_23883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23883__$1,(4),jobs);
} else {
if((state_val_23884 === (3))){
var inst_23881 = (state_23883[(2)]);
var state_23883__$1 = state_23883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23883__$1,inst_23881);
} else {
if((state_val_23884 === (4))){
var inst_23873 = (state_23883[(2)]);
var inst_23874 = process.call(null,inst_23873);
var state_23883__$1 = state_23883;
if(cljs.core.truth_(inst_23874)){
var statearr_23886_24033 = state_23883__$1;
(statearr_23886_24033[(1)] = (5));

} else {
var statearr_23887_24034 = state_23883__$1;
(statearr_23887_24034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23884 === (5))){
var state_23883__$1 = state_23883;
var statearr_23888_24035 = state_23883__$1;
(statearr_23888_24035[(2)] = null);

(statearr_23888_24035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23884 === (6))){
var state_23883__$1 = state_23883;
var statearr_23889_24036 = state_23883__$1;
(statearr_23889_24036[(2)] = null);

(statearr_23889_24036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23884 === (7))){
var inst_23879 = (state_23883[(2)]);
var state_23883__$1 = state_23883;
var statearr_23890_24037 = state_23883__$1;
(statearr_23890_24037[(2)] = inst_23879);

(statearr_23890_24037[(1)] = (3));


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
});})(__24027,c__23687__auto___24031,G__23870_24028,G__23870_24029__$1,n__4607__auto___24026,jobs,results,process,async))
;
return ((function (__24027,switch__23592__auto__,c__23687__auto___24031,G__23870_24028,G__23870_24029__$1,n__4607__auto___24026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0 = (function (){
var statearr_23891 = [null,null,null,null,null,null,null];
(statearr_23891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__);

(statearr_23891[(1)] = (1));

return statearr_23891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1 = (function (state_23883){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_23883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e23892){if((e23892 instanceof Object)){
var ex__23596__auto__ = e23892;
var statearr_23893_24038 = state_23883;
(statearr_23893_24038[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24039 = state_23883;
state_23883 = G__24039;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__ = function(state_23883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1.call(this,state_23883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__;
})()
;})(__24027,switch__23592__auto__,c__23687__auto___24031,G__23870_24028,G__23870_24029__$1,n__4607__auto___24026,jobs,results,process,async))
})();
var state__23689__auto__ = (function (){var statearr_23894 = f__23688__auto__.call(null);
(statearr_23894[(6)] = c__23687__auto___24031);

return statearr_23894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(__24027,c__23687__auto___24031,G__23870_24028,G__23870_24029__$1,n__4607__auto___24026,jobs,results,process,async))
);


break;
case "async":
var c__23687__auto___24040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24027,c__23687__auto___24040,G__23870_24028,G__23870_24029__$1,n__4607__auto___24026,jobs,results,process,async){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (__24027,c__23687__auto___24040,G__23870_24028,G__23870_24029__$1,n__4607__auto___24026,jobs,results,process,async){
return (function (state_23907){
var state_val_23908 = (state_23907[(1)]);
if((state_val_23908 === (1))){
var state_23907__$1 = state_23907;
var statearr_23909_24041 = state_23907__$1;
(statearr_23909_24041[(2)] = null);

(statearr_23909_24041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (2))){
var state_23907__$1 = state_23907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23907__$1,(4),jobs);
} else {
if((state_val_23908 === (3))){
var inst_23905 = (state_23907[(2)]);
var state_23907__$1 = state_23907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23907__$1,inst_23905);
} else {
if((state_val_23908 === (4))){
var inst_23897 = (state_23907[(2)]);
var inst_23898 = async.call(null,inst_23897);
var state_23907__$1 = state_23907;
if(cljs.core.truth_(inst_23898)){
var statearr_23910_24042 = state_23907__$1;
(statearr_23910_24042[(1)] = (5));

} else {
var statearr_23911_24043 = state_23907__$1;
(statearr_23911_24043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (5))){
var state_23907__$1 = state_23907;
var statearr_23912_24044 = state_23907__$1;
(statearr_23912_24044[(2)] = null);

(statearr_23912_24044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (6))){
var state_23907__$1 = state_23907;
var statearr_23913_24045 = state_23907__$1;
(statearr_23913_24045[(2)] = null);

(statearr_23913_24045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (7))){
var inst_23903 = (state_23907[(2)]);
var state_23907__$1 = state_23907;
var statearr_23914_24046 = state_23907__$1;
(statearr_23914_24046[(2)] = inst_23903);

(statearr_23914_24046[(1)] = (3));


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
});})(__24027,c__23687__auto___24040,G__23870_24028,G__23870_24029__$1,n__4607__auto___24026,jobs,results,process,async))
;
return ((function (__24027,switch__23592__auto__,c__23687__auto___24040,G__23870_24028,G__23870_24029__$1,n__4607__auto___24026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0 = (function (){
var statearr_23915 = [null,null,null,null,null,null,null];
(statearr_23915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__);

(statearr_23915[(1)] = (1));

return statearr_23915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1 = (function (state_23907){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_23907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e23916){if((e23916 instanceof Object)){
var ex__23596__auto__ = e23916;
var statearr_23917_24047 = state_23907;
(statearr_23917_24047[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24048 = state_23907;
state_23907 = G__24048;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__ = function(state_23907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1.call(this,state_23907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__;
})()
;})(__24027,switch__23592__auto__,c__23687__auto___24040,G__23870_24028,G__23870_24029__$1,n__4607__auto___24026,jobs,results,process,async))
})();
var state__23689__auto__ = (function (){var statearr_23918 = f__23688__auto__.call(null);
(statearr_23918[(6)] = c__23687__auto___24040);

return statearr_23918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(__24027,c__23687__auto___24040,G__23870_24028,G__23870_24029__$1,n__4607__auto___24026,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23870_24029__$1)].join('')));

}

var G__24049 = (__24027 + (1));
__24027 = G__24049;
continue;
} else {
}
break;
}

var c__23687__auto___24050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___24050,jobs,results,process,async){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___24050,jobs,results,process,async){
return (function (state_23940){
var state_val_23941 = (state_23940[(1)]);
if((state_val_23941 === (7))){
var inst_23936 = (state_23940[(2)]);
var state_23940__$1 = state_23940;
var statearr_23942_24051 = state_23940__$1;
(statearr_23942_24051[(2)] = inst_23936);

(statearr_23942_24051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (1))){
var state_23940__$1 = state_23940;
var statearr_23943_24052 = state_23940__$1;
(statearr_23943_24052[(2)] = null);

(statearr_23943_24052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (4))){
var inst_23921 = (state_23940[(7)]);
var inst_23921__$1 = (state_23940[(2)]);
var inst_23922 = (inst_23921__$1 == null);
var state_23940__$1 = (function (){var statearr_23944 = state_23940;
(statearr_23944[(7)] = inst_23921__$1);

return statearr_23944;
})();
if(cljs.core.truth_(inst_23922)){
var statearr_23945_24053 = state_23940__$1;
(statearr_23945_24053[(1)] = (5));

} else {
var statearr_23946_24054 = state_23940__$1;
(statearr_23946_24054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (6))){
var inst_23921 = (state_23940[(7)]);
var inst_23926 = (state_23940[(8)]);
var inst_23926__$1 = cljs.core.async.chan.call(null,(1));
var inst_23927 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23928 = [inst_23921,inst_23926__$1];
var inst_23929 = (new cljs.core.PersistentVector(null,2,(5),inst_23927,inst_23928,null));
var state_23940__$1 = (function (){var statearr_23947 = state_23940;
(statearr_23947[(8)] = inst_23926__$1);

return statearr_23947;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23940__$1,(8),jobs,inst_23929);
} else {
if((state_val_23941 === (3))){
var inst_23938 = (state_23940[(2)]);
var state_23940__$1 = state_23940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23940__$1,inst_23938);
} else {
if((state_val_23941 === (2))){
var state_23940__$1 = state_23940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23940__$1,(4),from);
} else {
if((state_val_23941 === (9))){
var inst_23933 = (state_23940[(2)]);
var state_23940__$1 = (function (){var statearr_23948 = state_23940;
(statearr_23948[(9)] = inst_23933);

return statearr_23948;
})();
var statearr_23949_24055 = state_23940__$1;
(statearr_23949_24055[(2)] = null);

(statearr_23949_24055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (5))){
var inst_23924 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23940__$1 = state_23940;
var statearr_23950_24056 = state_23940__$1;
(statearr_23950_24056[(2)] = inst_23924);

(statearr_23950_24056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23941 === (8))){
var inst_23926 = (state_23940[(8)]);
var inst_23931 = (state_23940[(2)]);
var state_23940__$1 = (function (){var statearr_23951 = state_23940;
(statearr_23951[(10)] = inst_23931);

return statearr_23951;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23940__$1,(9),results,inst_23926);
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
});})(c__23687__auto___24050,jobs,results,process,async))
;
return ((function (switch__23592__auto__,c__23687__auto___24050,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0 = (function (){
var statearr_23952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__);

(statearr_23952[(1)] = (1));

return statearr_23952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1 = (function (state_23940){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_23940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e23953){if((e23953 instanceof Object)){
var ex__23596__auto__ = e23953;
var statearr_23954_24057 = state_23940;
(statearr_23954_24057[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24058 = state_23940;
state_23940 = G__24058;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__ = function(state_23940){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1.call(this,state_23940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___24050,jobs,results,process,async))
})();
var state__23689__auto__ = (function (){var statearr_23955 = f__23688__auto__.call(null);
(statearr_23955[(6)] = c__23687__auto___24050);

return statearr_23955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___24050,jobs,results,process,async))
);


var c__23687__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto__,jobs,results,process,async){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto__,jobs,results,process,async){
return (function (state_23993){
var state_val_23994 = (state_23993[(1)]);
if((state_val_23994 === (7))){
var inst_23989 = (state_23993[(2)]);
var state_23993__$1 = state_23993;
var statearr_23995_24059 = state_23993__$1;
(statearr_23995_24059[(2)] = inst_23989);

(statearr_23995_24059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (20))){
var state_23993__$1 = state_23993;
var statearr_23996_24060 = state_23993__$1;
(statearr_23996_24060[(2)] = null);

(statearr_23996_24060[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (1))){
var state_23993__$1 = state_23993;
var statearr_23997_24061 = state_23993__$1;
(statearr_23997_24061[(2)] = null);

(statearr_23997_24061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (4))){
var inst_23958 = (state_23993[(7)]);
var inst_23958__$1 = (state_23993[(2)]);
var inst_23959 = (inst_23958__$1 == null);
var state_23993__$1 = (function (){var statearr_23998 = state_23993;
(statearr_23998[(7)] = inst_23958__$1);

return statearr_23998;
})();
if(cljs.core.truth_(inst_23959)){
var statearr_23999_24062 = state_23993__$1;
(statearr_23999_24062[(1)] = (5));

} else {
var statearr_24000_24063 = state_23993__$1;
(statearr_24000_24063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (15))){
var inst_23971 = (state_23993[(8)]);
var state_23993__$1 = state_23993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23993__$1,(18),to,inst_23971);
} else {
if((state_val_23994 === (21))){
var inst_23984 = (state_23993[(2)]);
var state_23993__$1 = state_23993;
var statearr_24001_24064 = state_23993__$1;
(statearr_24001_24064[(2)] = inst_23984);

(statearr_24001_24064[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (13))){
var inst_23986 = (state_23993[(2)]);
var state_23993__$1 = (function (){var statearr_24002 = state_23993;
(statearr_24002[(9)] = inst_23986);

return statearr_24002;
})();
var statearr_24003_24065 = state_23993__$1;
(statearr_24003_24065[(2)] = null);

(statearr_24003_24065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (6))){
var inst_23958 = (state_23993[(7)]);
var state_23993__$1 = state_23993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23993__$1,(11),inst_23958);
} else {
if((state_val_23994 === (17))){
var inst_23979 = (state_23993[(2)]);
var state_23993__$1 = state_23993;
if(cljs.core.truth_(inst_23979)){
var statearr_24004_24066 = state_23993__$1;
(statearr_24004_24066[(1)] = (19));

} else {
var statearr_24005_24067 = state_23993__$1;
(statearr_24005_24067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (3))){
var inst_23991 = (state_23993[(2)]);
var state_23993__$1 = state_23993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23993__$1,inst_23991);
} else {
if((state_val_23994 === (12))){
var inst_23968 = (state_23993[(10)]);
var state_23993__$1 = state_23993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23993__$1,(14),inst_23968);
} else {
if((state_val_23994 === (2))){
var state_23993__$1 = state_23993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23993__$1,(4),results);
} else {
if((state_val_23994 === (19))){
var state_23993__$1 = state_23993;
var statearr_24006_24068 = state_23993__$1;
(statearr_24006_24068[(2)] = null);

(statearr_24006_24068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (11))){
var inst_23968 = (state_23993[(2)]);
var state_23993__$1 = (function (){var statearr_24007 = state_23993;
(statearr_24007[(10)] = inst_23968);

return statearr_24007;
})();
var statearr_24008_24069 = state_23993__$1;
(statearr_24008_24069[(2)] = null);

(statearr_24008_24069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (9))){
var state_23993__$1 = state_23993;
var statearr_24009_24070 = state_23993__$1;
(statearr_24009_24070[(2)] = null);

(statearr_24009_24070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (5))){
var state_23993__$1 = state_23993;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24010_24071 = state_23993__$1;
(statearr_24010_24071[(1)] = (8));

} else {
var statearr_24011_24072 = state_23993__$1;
(statearr_24011_24072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (14))){
var inst_23973 = (state_23993[(11)]);
var inst_23971 = (state_23993[(8)]);
var inst_23971__$1 = (state_23993[(2)]);
var inst_23972 = (inst_23971__$1 == null);
var inst_23973__$1 = cljs.core.not.call(null,inst_23972);
var state_23993__$1 = (function (){var statearr_24012 = state_23993;
(statearr_24012[(11)] = inst_23973__$1);

(statearr_24012[(8)] = inst_23971__$1);

return statearr_24012;
})();
if(inst_23973__$1){
var statearr_24013_24073 = state_23993__$1;
(statearr_24013_24073[(1)] = (15));

} else {
var statearr_24014_24074 = state_23993__$1;
(statearr_24014_24074[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (16))){
var inst_23973 = (state_23993[(11)]);
var state_23993__$1 = state_23993;
var statearr_24015_24075 = state_23993__$1;
(statearr_24015_24075[(2)] = inst_23973);

(statearr_24015_24075[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (10))){
var inst_23965 = (state_23993[(2)]);
var state_23993__$1 = state_23993;
var statearr_24016_24076 = state_23993__$1;
(statearr_24016_24076[(2)] = inst_23965);

(statearr_24016_24076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (18))){
var inst_23976 = (state_23993[(2)]);
var state_23993__$1 = state_23993;
var statearr_24017_24077 = state_23993__$1;
(statearr_24017_24077[(2)] = inst_23976);

(statearr_24017_24077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (8))){
var inst_23962 = cljs.core.async.close_BANG_.call(null,to);
var state_23993__$1 = state_23993;
var statearr_24018_24078 = state_23993__$1;
(statearr_24018_24078[(2)] = inst_23962);

(statearr_24018_24078[(1)] = (10));


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
});})(c__23687__auto__,jobs,results,process,async))
;
return ((function (switch__23592__auto__,c__23687__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0 = (function (){
var statearr_24019 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__);

(statearr_24019[(1)] = (1));

return statearr_24019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1 = (function (state_23993){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_23993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e24020){if((e24020 instanceof Object)){
var ex__23596__auto__ = e24020;
var statearr_24021_24079 = state_23993;
(statearr_24021_24079[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24080 = state_23993;
state_23993 = G__24080;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__ = function(state_23993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1.call(this,state_23993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto__,jobs,results,process,async))
})();
var state__23689__auto__ = (function (){var statearr_24022 = f__23688__auto__.call(null);
(statearr_24022[(6)] = c__23687__auto__);

return statearr_24022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto__,jobs,results,process,async))
);

return c__23687__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24082 = arguments.length;
switch (G__24082) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24085 = arguments.length;
switch (G__24085) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24088 = arguments.length;
switch (G__24088) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23687__auto___24137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___24137,tc,fc){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___24137,tc,fc){
return (function (state_24114){
var state_val_24115 = (state_24114[(1)]);
if((state_val_24115 === (7))){
var inst_24110 = (state_24114[(2)]);
var state_24114__$1 = state_24114;
var statearr_24116_24138 = state_24114__$1;
(statearr_24116_24138[(2)] = inst_24110);

(statearr_24116_24138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (1))){
var state_24114__$1 = state_24114;
var statearr_24117_24139 = state_24114__$1;
(statearr_24117_24139[(2)] = null);

(statearr_24117_24139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (4))){
var inst_24091 = (state_24114[(7)]);
var inst_24091__$1 = (state_24114[(2)]);
var inst_24092 = (inst_24091__$1 == null);
var state_24114__$1 = (function (){var statearr_24118 = state_24114;
(statearr_24118[(7)] = inst_24091__$1);

return statearr_24118;
})();
if(cljs.core.truth_(inst_24092)){
var statearr_24119_24140 = state_24114__$1;
(statearr_24119_24140[(1)] = (5));

} else {
var statearr_24120_24141 = state_24114__$1;
(statearr_24120_24141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (13))){
var state_24114__$1 = state_24114;
var statearr_24121_24142 = state_24114__$1;
(statearr_24121_24142[(2)] = null);

(statearr_24121_24142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (6))){
var inst_24091 = (state_24114[(7)]);
var inst_24097 = p.call(null,inst_24091);
var state_24114__$1 = state_24114;
if(cljs.core.truth_(inst_24097)){
var statearr_24122_24143 = state_24114__$1;
(statearr_24122_24143[(1)] = (9));

} else {
var statearr_24123_24144 = state_24114__$1;
(statearr_24123_24144[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (3))){
var inst_24112 = (state_24114[(2)]);
var state_24114__$1 = state_24114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24114__$1,inst_24112);
} else {
if((state_val_24115 === (12))){
var state_24114__$1 = state_24114;
var statearr_24124_24145 = state_24114__$1;
(statearr_24124_24145[(2)] = null);

(statearr_24124_24145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (2))){
var state_24114__$1 = state_24114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24114__$1,(4),ch);
} else {
if((state_val_24115 === (11))){
var inst_24091 = (state_24114[(7)]);
var inst_24101 = (state_24114[(2)]);
var state_24114__$1 = state_24114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24114__$1,(8),inst_24101,inst_24091);
} else {
if((state_val_24115 === (9))){
var state_24114__$1 = state_24114;
var statearr_24125_24146 = state_24114__$1;
(statearr_24125_24146[(2)] = tc);

(statearr_24125_24146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (5))){
var inst_24094 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24095 = cljs.core.async.close_BANG_.call(null,fc);
var state_24114__$1 = (function (){var statearr_24126 = state_24114;
(statearr_24126[(8)] = inst_24094);

return statearr_24126;
})();
var statearr_24127_24147 = state_24114__$1;
(statearr_24127_24147[(2)] = inst_24095);

(statearr_24127_24147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (14))){
var inst_24108 = (state_24114[(2)]);
var state_24114__$1 = state_24114;
var statearr_24128_24148 = state_24114__$1;
(statearr_24128_24148[(2)] = inst_24108);

(statearr_24128_24148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (10))){
var state_24114__$1 = state_24114;
var statearr_24129_24149 = state_24114__$1;
(statearr_24129_24149[(2)] = fc);

(statearr_24129_24149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24115 === (8))){
var inst_24103 = (state_24114[(2)]);
var state_24114__$1 = state_24114;
if(cljs.core.truth_(inst_24103)){
var statearr_24130_24150 = state_24114__$1;
(statearr_24130_24150[(1)] = (12));

} else {
var statearr_24131_24151 = state_24114__$1;
(statearr_24131_24151[(1)] = (13));

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
});})(c__23687__auto___24137,tc,fc))
;
return ((function (switch__23592__auto__,c__23687__auto___24137,tc,fc){
return (function() {
var cljs$core$async$state_machine__23593__auto__ = null;
var cljs$core$async$state_machine__23593__auto____0 = (function (){
var statearr_24132 = [null,null,null,null,null,null,null,null,null];
(statearr_24132[(0)] = cljs$core$async$state_machine__23593__auto__);

(statearr_24132[(1)] = (1));

return statearr_24132;
});
var cljs$core$async$state_machine__23593__auto____1 = (function (state_24114){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_24114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e24133){if((e24133 instanceof Object)){
var ex__23596__auto__ = e24133;
var statearr_24134_24152 = state_24114;
(statearr_24134_24152[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24153 = state_24114;
state_24114 = G__24153;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$state_machine__23593__auto__ = function(state_24114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23593__auto____1.call(this,state_24114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23593__auto____0;
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23593__auto____1;
return cljs$core$async$state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___24137,tc,fc))
})();
var state__23689__auto__ = (function (){var statearr_24135 = f__23688__auto__.call(null);
(statearr_24135[(6)] = c__23687__auto___24137);

return statearr_24135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___24137,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23687__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto__){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto__){
return (function (state_24174){
var state_val_24175 = (state_24174[(1)]);
if((state_val_24175 === (7))){
var inst_24170 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24176_24194 = state_24174__$1;
(statearr_24176_24194[(2)] = inst_24170);

(statearr_24176_24194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (1))){
var inst_24154 = init;
var state_24174__$1 = (function (){var statearr_24177 = state_24174;
(statearr_24177[(7)] = inst_24154);

return statearr_24177;
})();
var statearr_24178_24195 = state_24174__$1;
(statearr_24178_24195[(2)] = null);

(statearr_24178_24195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (4))){
var inst_24157 = (state_24174[(8)]);
var inst_24157__$1 = (state_24174[(2)]);
var inst_24158 = (inst_24157__$1 == null);
var state_24174__$1 = (function (){var statearr_24179 = state_24174;
(statearr_24179[(8)] = inst_24157__$1);

return statearr_24179;
})();
if(cljs.core.truth_(inst_24158)){
var statearr_24180_24196 = state_24174__$1;
(statearr_24180_24196[(1)] = (5));

} else {
var statearr_24181_24197 = state_24174__$1;
(statearr_24181_24197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (6))){
var inst_24157 = (state_24174[(8)]);
var inst_24161 = (state_24174[(9)]);
var inst_24154 = (state_24174[(7)]);
var inst_24161__$1 = f.call(null,inst_24154,inst_24157);
var inst_24162 = cljs.core.reduced_QMARK_.call(null,inst_24161__$1);
var state_24174__$1 = (function (){var statearr_24182 = state_24174;
(statearr_24182[(9)] = inst_24161__$1);

return statearr_24182;
})();
if(inst_24162){
var statearr_24183_24198 = state_24174__$1;
(statearr_24183_24198[(1)] = (8));

} else {
var statearr_24184_24199 = state_24174__$1;
(statearr_24184_24199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (3))){
var inst_24172 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24174__$1,inst_24172);
} else {
if((state_val_24175 === (2))){
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24174__$1,(4),ch);
} else {
if((state_val_24175 === (9))){
var inst_24161 = (state_24174[(9)]);
var inst_24154 = inst_24161;
var state_24174__$1 = (function (){var statearr_24185 = state_24174;
(statearr_24185[(7)] = inst_24154);

return statearr_24185;
})();
var statearr_24186_24200 = state_24174__$1;
(statearr_24186_24200[(2)] = null);

(statearr_24186_24200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (5))){
var inst_24154 = (state_24174[(7)]);
var state_24174__$1 = state_24174;
var statearr_24187_24201 = state_24174__$1;
(statearr_24187_24201[(2)] = inst_24154);

(statearr_24187_24201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (10))){
var inst_24168 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24188_24202 = state_24174__$1;
(statearr_24188_24202[(2)] = inst_24168);

(statearr_24188_24202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (8))){
var inst_24161 = (state_24174[(9)]);
var inst_24164 = cljs.core.deref.call(null,inst_24161);
var state_24174__$1 = state_24174;
var statearr_24189_24203 = state_24174__$1;
(statearr_24189_24203[(2)] = inst_24164);

(statearr_24189_24203[(1)] = (10));


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
});})(c__23687__auto__))
;
return ((function (switch__23592__auto__,c__23687__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23593__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23593__auto____0 = (function (){
var statearr_24190 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24190[(0)] = cljs$core$async$reduce_$_state_machine__23593__auto__);

(statearr_24190[(1)] = (1));

return statearr_24190;
});
var cljs$core$async$reduce_$_state_machine__23593__auto____1 = (function (state_24174){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_24174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e24191){if((e24191 instanceof Object)){
var ex__23596__auto__ = e24191;
var statearr_24192_24204 = state_24174;
(statearr_24192_24204[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24205 = state_24174;
state_24174 = G__24205;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23593__auto__ = function(state_24174){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23593__auto____1.call(this,state_24174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23593__auto____0;
cljs$core$async$reduce_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23593__auto____1;
return cljs$core$async$reduce_$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto__))
})();
var state__23689__auto__ = (function (){var statearr_24193 = f__23688__auto__.call(null);
(statearr_24193[(6)] = c__23687__auto__);

return statearr_24193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto__))
);

return c__23687__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23687__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto__,f__$1){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto__,f__$1){
return (function (state_24211){
var state_val_24212 = (state_24211[(1)]);
if((state_val_24212 === (1))){
var inst_24206 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24211__$1 = state_24211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24211__$1,(2),inst_24206);
} else {
if((state_val_24212 === (2))){
var inst_24208 = (state_24211[(2)]);
var inst_24209 = f__$1.call(null,inst_24208);
var state_24211__$1 = state_24211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24211__$1,inst_24209);
} else {
return null;
}
}
});})(c__23687__auto__,f__$1))
;
return ((function (switch__23592__auto__,c__23687__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23593__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23593__auto____0 = (function (){
var statearr_24213 = [null,null,null,null,null,null,null];
(statearr_24213[(0)] = cljs$core$async$transduce_$_state_machine__23593__auto__);

(statearr_24213[(1)] = (1));

return statearr_24213;
});
var cljs$core$async$transduce_$_state_machine__23593__auto____1 = (function (state_24211){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_24211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e24214){if((e24214 instanceof Object)){
var ex__23596__auto__ = e24214;
var statearr_24215_24217 = state_24211;
(statearr_24215_24217[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24218 = state_24211;
state_24211 = G__24218;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23593__auto__ = function(state_24211){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23593__auto____1.call(this,state_24211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23593__auto____0;
cljs$core$async$transduce_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23593__auto____1;
return cljs$core$async$transduce_$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto__,f__$1))
})();
var state__23689__auto__ = (function (){var statearr_24216 = f__23688__auto__.call(null);
(statearr_24216[(6)] = c__23687__auto__);

return statearr_24216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto__,f__$1))
);

return c__23687__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24220 = arguments.length;
switch (G__24220) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23687__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto__){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto__){
return (function (state_24245){
var state_val_24246 = (state_24245[(1)]);
if((state_val_24246 === (7))){
var inst_24227 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
var statearr_24247_24268 = state_24245__$1;
(statearr_24247_24268[(2)] = inst_24227);

(statearr_24247_24268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (1))){
var inst_24221 = cljs.core.seq.call(null,coll);
var inst_24222 = inst_24221;
var state_24245__$1 = (function (){var statearr_24248 = state_24245;
(statearr_24248[(7)] = inst_24222);

return statearr_24248;
})();
var statearr_24249_24269 = state_24245__$1;
(statearr_24249_24269[(2)] = null);

(statearr_24249_24269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (4))){
var inst_24222 = (state_24245[(7)]);
var inst_24225 = cljs.core.first.call(null,inst_24222);
var state_24245__$1 = state_24245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24245__$1,(7),ch,inst_24225);
} else {
if((state_val_24246 === (13))){
var inst_24239 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
var statearr_24250_24270 = state_24245__$1;
(statearr_24250_24270[(2)] = inst_24239);

(statearr_24250_24270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (6))){
var inst_24230 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
if(cljs.core.truth_(inst_24230)){
var statearr_24251_24271 = state_24245__$1;
(statearr_24251_24271[(1)] = (8));

} else {
var statearr_24252_24272 = state_24245__$1;
(statearr_24252_24272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (3))){
var inst_24243 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24245__$1,inst_24243);
} else {
if((state_val_24246 === (12))){
var state_24245__$1 = state_24245;
var statearr_24253_24273 = state_24245__$1;
(statearr_24253_24273[(2)] = null);

(statearr_24253_24273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (2))){
var inst_24222 = (state_24245[(7)]);
var state_24245__$1 = state_24245;
if(cljs.core.truth_(inst_24222)){
var statearr_24254_24274 = state_24245__$1;
(statearr_24254_24274[(1)] = (4));

} else {
var statearr_24255_24275 = state_24245__$1;
(statearr_24255_24275[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (11))){
var inst_24236 = cljs.core.async.close_BANG_.call(null,ch);
var state_24245__$1 = state_24245;
var statearr_24256_24276 = state_24245__$1;
(statearr_24256_24276[(2)] = inst_24236);

(statearr_24256_24276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (9))){
var state_24245__$1 = state_24245;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24257_24277 = state_24245__$1;
(statearr_24257_24277[(1)] = (11));

} else {
var statearr_24258_24278 = state_24245__$1;
(statearr_24258_24278[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (5))){
var inst_24222 = (state_24245[(7)]);
var state_24245__$1 = state_24245;
var statearr_24259_24279 = state_24245__$1;
(statearr_24259_24279[(2)] = inst_24222);

(statearr_24259_24279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (10))){
var inst_24241 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
var statearr_24260_24280 = state_24245__$1;
(statearr_24260_24280[(2)] = inst_24241);

(statearr_24260_24280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (8))){
var inst_24222 = (state_24245[(7)]);
var inst_24232 = cljs.core.next.call(null,inst_24222);
var inst_24222__$1 = inst_24232;
var state_24245__$1 = (function (){var statearr_24261 = state_24245;
(statearr_24261[(7)] = inst_24222__$1);

return statearr_24261;
})();
var statearr_24262_24281 = state_24245__$1;
(statearr_24262_24281[(2)] = null);

(statearr_24262_24281[(1)] = (2));


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
});})(c__23687__auto__))
;
return ((function (switch__23592__auto__,c__23687__auto__){
return (function() {
var cljs$core$async$state_machine__23593__auto__ = null;
var cljs$core$async$state_machine__23593__auto____0 = (function (){
var statearr_24263 = [null,null,null,null,null,null,null,null];
(statearr_24263[(0)] = cljs$core$async$state_machine__23593__auto__);

(statearr_24263[(1)] = (1));

return statearr_24263;
});
var cljs$core$async$state_machine__23593__auto____1 = (function (state_24245){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_24245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e24264){if((e24264 instanceof Object)){
var ex__23596__auto__ = e24264;
var statearr_24265_24282 = state_24245;
(statearr_24265_24282[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24283 = state_24245;
state_24245 = G__24283;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$state_machine__23593__auto__ = function(state_24245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23593__auto____1.call(this,state_24245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23593__auto____0;
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23593__auto____1;
return cljs$core$async$state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto__))
})();
var state__23689__auto__ = (function (){var statearr_24266 = f__23688__auto__.call(null);
(statearr_24266[(6)] = c__23687__auto__);

return statearr_24266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto__))
);

return c__23687__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24284 = (function (ch,cs,meta24285){
this.ch = ch;
this.cs = cs;
this.meta24285 = meta24285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24286,meta24285__$1){
var self__ = this;
var _24286__$1 = this;
return (new cljs.core.async.t_cljs$core$async24284(self__.ch,self__.cs,meta24285__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24286){
var self__ = this;
var _24286__$1 = this;
return self__.meta24285;
});})(cs))
;

cljs.core.async.t_cljs$core$async24284.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24284.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24284.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24284.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24284.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24284.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24285","meta24285",861142314,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24284";

cljs.core.async.t_cljs$core$async24284.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24284");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24284.
 */
cljs.core.async.__GT_t_cljs$core$async24284 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24284(ch__$1,cs__$1,meta24285){
return (new cljs.core.async.t_cljs$core$async24284(ch__$1,cs__$1,meta24285));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24284(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23687__auto___24506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___24506,cs,m,dchan,dctr,done){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___24506,cs,m,dchan,dctr,done){
return (function (state_24421){
var state_val_24422 = (state_24421[(1)]);
if((state_val_24422 === (7))){
var inst_24417 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24423_24507 = state_24421__$1;
(statearr_24423_24507[(2)] = inst_24417);

(statearr_24423_24507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (20))){
var inst_24320 = (state_24421[(7)]);
var inst_24332 = cljs.core.first.call(null,inst_24320);
var inst_24333 = cljs.core.nth.call(null,inst_24332,(0),null);
var inst_24334 = cljs.core.nth.call(null,inst_24332,(1),null);
var state_24421__$1 = (function (){var statearr_24424 = state_24421;
(statearr_24424[(8)] = inst_24333);

return statearr_24424;
})();
if(cljs.core.truth_(inst_24334)){
var statearr_24425_24508 = state_24421__$1;
(statearr_24425_24508[(1)] = (22));

} else {
var statearr_24426_24509 = state_24421__$1;
(statearr_24426_24509[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (27))){
var inst_24289 = (state_24421[(9)]);
var inst_24369 = (state_24421[(10)]);
var inst_24362 = (state_24421[(11)]);
var inst_24364 = (state_24421[(12)]);
var inst_24369__$1 = cljs.core._nth.call(null,inst_24362,inst_24364);
var inst_24370 = cljs.core.async.put_BANG_.call(null,inst_24369__$1,inst_24289,done);
var state_24421__$1 = (function (){var statearr_24427 = state_24421;
(statearr_24427[(10)] = inst_24369__$1);

return statearr_24427;
})();
if(cljs.core.truth_(inst_24370)){
var statearr_24428_24510 = state_24421__$1;
(statearr_24428_24510[(1)] = (30));

} else {
var statearr_24429_24511 = state_24421__$1;
(statearr_24429_24511[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (1))){
var state_24421__$1 = state_24421;
var statearr_24430_24512 = state_24421__$1;
(statearr_24430_24512[(2)] = null);

(statearr_24430_24512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (24))){
var inst_24320 = (state_24421[(7)]);
var inst_24339 = (state_24421[(2)]);
var inst_24340 = cljs.core.next.call(null,inst_24320);
var inst_24298 = inst_24340;
var inst_24299 = null;
var inst_24300 = (0);
var inst_24301 = (0);
var state_24421__$1 = (function (){var statearr_24431 = state_24421;
(statearr_24431[(13)] = inst_24301);

(statearr_24431[(14)] = inst_24339);

(statearr_24431[(15)] = inst_24300);

(statearr_24431[(16)] = inst_24298);

(statearr_24431[(17)] = inst_24299);

return statearr_24431;
})();
var statearr_24432_24513 = state_24421__$1;
(statearr_24432_24513[(2)] = null);

(statearr_24432_24513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (39))){
var state_24421__$1 = state_24421;
var statearr_24436_24514 = state_24421__$1;
(statearr_24436_24514[(2)] = null);

(statearr_24436_24514[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (4))){
var inst_24289 = (state_24421[(9)]);
var inst_24289__$1 = (state_24421[(2)]);
var inst_24290 = (inst_24289__$1 == null);
var state_24421__$1 = (function (){var statearr_24437 = state_24421;
(statearr_24437[(9)] = inst_24289__$1);

return statearr_24437;
})();
if(cljs.core.truth_(inst_24290)){
var statearr_24438_24515 = state_24421__$1;
(statearr_24438_24515[(1)] = (5));

} else {
var statearr_24439_24516 = state_24421__$1;
(statearr_24439_24516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (15))){
var inst_24301 = (state_24421[(13)]);
var inst_24300 = (state_24421[(15)]);
var inst_24298 = (state_24421[(16)]);
var inst_24299 = (state_24421[(17)]);
var inst_24316 = (state_24421[(2)]);
var inst_24317 = (inst_24301 + (1));
var tmp24433 = inst_24300;
var tmp24434 = inst_24298;
var tmp24435 = inst_24299;
var inst_24298__$1 = tmp24434;
var inst_24299__$1 = tmp24435;
var inst_24300__$1 = tmp24433;
var inst_24301__$1 = inst_24317;
var state_24421__$1 = (function (){var statearr_24440 = state_24421;
(statearr_24440[(13)] = inst_24301__$1);

(statearr_24440[(15)] = inst_24300__$1);

(statearr_24440[(16)] = inst_24298__$1);

(statearr_24440[(18)] = inst_24316);

(statearr_24440[(17)] = inst_24299__$1);

return statearr_24440;
})();
var statearr_24441_24517 = state_24421__$1;
(statearr_24441_24517[(2)] = null);

(statearr_24441_24517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (21))){
var inst_24343 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24445_24518 = state_24421__$1;
(statearr_24445_24518[(2)] = inst_24343);

(statearr_24445_24518[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (31))){
var inst_24369 = (state_24421[(10)]);
var inst_24373 = done.call(null,null);
var inst_24374 = cljs.core.async.untap_STAR_.call(null,m,inst_24369);
var state_24421__$1 = (function (){var statearr_24446 = state_24421;
(statearr_24446[(19)] = inst_24373);

return statearr_24446;
})();
var statearr_24447_24519 = state_24421__$1;
(statearr_24447_24519[(2)] = inst_24374);

(statearr_24447_24519[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (32))){
var inst_24363 = (state_24421[(20)]);
var inst_24361 = (state_24421[(21)]);
var inst_24362 = (state_24421[(11)]);
var inst_24364 = (state_24421[(12)]);
var inst_24376 = (state_24421[(2)]);
var inst_24377 = (inst_24364 + (1));
var tmp24442 = inst_24363;
var tmp24443 = inst_24361;
var tmp24444 = inst_24362;
var inst_24361__$1 = tmp24443;
var inst_24362__$1 = tmp24444;
var inst_24363__$1 = tmp24442;
var inst_24364__$1 = inst_24377;
var state_24421__$1 = (function (){var statearr_24448 = state_24421;
(statearr_24448[(20)] = inst_24363__$1);

(statearr_24448[(22)] = inst_24376);

(statearr_24448[(21)] = inst_24361__$1);

(statearr_24448[(11)] = inst_24362__$1);

(statearr_24448[(12)] = inst_24364__$1);

return statearr_24448;
})();
var statearr_24449_24520 = state_24421__$1;
(statearr_24449_24520[(2)] = null);

(statearr_24449_24520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (40))){
var inst_24389 = (state_24421[(23)]);
var inst_24393 = done.call(null,null);
var inst_24394 = cljs.core.async.untap_STAR_.call(null,m,inst_24389);
var state_24421__$1 = (function (){var statearr_24450 = state_24421;
(statearr_24450[(24)] = inst_24393);

return statearr_24450;
})();
var statearr_24451_24521 = state_24421__$1;
(statearr_24451_24521[(2)] = inst_24394);

(statearr_24451_24521[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (33))){
var inst_24380 = (state_24421[(25)]);
var inst_24382 = cljs.core.chunked_seq_QMARK_.call(null,inst_24380);
var state_24421__$1 = state_24421;
if(inst_24382){
var statearr_24452_24522 = state_24421__$1;
(statearr_24452_24522[(1)] = (36));

} else {
var statearr_24453_24523 = state_24421__$1;
(statearr_24453_24523[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (13))){
var inst_24310 = (state_24421[(26)]);
var inst_24313 = cljs.core.async.close_BANG_.call(null,inst_24310);
var state_24421__$1 = state_24421;
var statearr_24454_24524 = state_24421__$1;
(statearr_24454_24524[(2)] = inst_24313);

(statearr_24454_24524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (22))){
var inst_24333 = (state_24421[(8)]);
var inst_24336 = cljs.core.async.close_BANG_.call(null,inst_24333);
var state_24421__$1 = state_24421;
var statearr_24455_24525 = state_24421__$1;
(statearr_24455_24525[(2)] = inst_24336);

(statearr_24455_24525[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (36))){
var inst_24380 = (state_24421[(25)]);
var inst_24384 = cljs.core.chunk_first.call(null,inst_24380);
var inst_24385 = cljs.core.chunk_rest.call(null,inst_24380);
var inst_24386 = cljs.core.count.call(null,inst_24384);
var inst_24361 = inst_24385;
var inst_24362 = inst_24384;
var inst_24363 = inst_24386;
var inst_24364 = (0);
var state_24421__$1 = (function (){var statearr_24456 = state_24421;
(statearr_24456[(20)] = inst_24363);

(statearr_24456[(21)] = inst_24361);

(statearr_24456[(11)] = inst_24362);

(statearr_24456[(12)] = inst_24364);

return statearr_24456;
})();
var statearr_24457_24526 = state_24421__$1;
(statearr_24457_24526[(2)] = null);

(statearr_24457_24526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (41))){
var inst_24380 = (state_24421[(25)]);
var inst_24396 = (state_24421[(2)]);
var inst_24397 = cljs.core.next.call(null,inst_24380);
var inst_24361 = inst_24397;
var inst_24362 = null;
var inst_24363 = (0);
var inst_24364 = (0);
var state_24421__$1 = (function (){var statearr_24458 = state_24421;
(statearr_24458[(27)] = inst_24396);

(statearr_24458[(20)] = inst_24363);

(statearr_24458[(21)] = inst_24361);

(statearr_24458[(11)] = inst_24362);

(statearr_24458[(12)] = inst_24364);

return statearr_24458;
})();
var statearr_24459_24527 = state_24421__$1;
(statearr_24459_24527[(2)] = null);

(statearr_24459_24527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (43))){
var state_24421__$1 = state_24421;
var statearr_24460_24528 = state_24421__$1;
(statearr_24460_24528[(2)] = null);

(statearr_24460_24528[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (29))){
var inst_24405 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24461_24529 = state_24421__$1;
(statearr_24461_24529[(2)] = inst_24405);

(statearr_24461_24529[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (44))){
var inst_24414 = (state_24421[(2)]);
var state_24421__$1 = (function (){var statearr_24462 = state_24421;
(statearr_24462[(28)] = inst_24414);

return statearr_24462;
})();
var statearr_24463_24530 = state_24421__$1;
(statearr_24463_24530[(2)] = null);

(statearr_24463_24530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (6))){
var inst_24353 = (state_24421[(29)]);
var inst_24352 = cljs.core.deref.call(null,cs);
var inst_24353__$1 = cljs.core.keys.call(null,inst_24352);
var inst_24354 = cljs.core.count.call(null,inst_24353__$1);
var inst_24355 = cljs.core.reset_BANG_.call(null,dctr,inst_24354);
var inst_24360 = cljs.core.seq.call(null,inst_24353__$1);
var inst_24361 = inst_24360;
var inst_24362 = null;
var inst_24363 = (0);
var inst_24364 = (0);
var state_24421__$1 = (function (){var statearr_24464 = state_24421;
(statearr_24464[(20)] = inst_24363);

(statearr_24464[(29)] = inst_24353__$1);

(statearr_24464[(30)] = inst_24355);

(statearr_24464[(21)] = inst_24361);

(statearr_24464[(11)] = inst_24362);

(statearr_24464[(12)] = inst_24364);

return statearr_24464;
})();
var statearr_24465_24531 = state_24421__$1;
(statearr_24465_24531[(2)] = null);

(statearr_24465_24531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (28))){
var inst_24380 = (state_24421[(25)]);
var inst_24361 = (state_24421[(21)]);
var inst_24380__$1 = cljs.core.seq.call(null,inst_24361);
var state_24421__$1 = (function (){var statearr_24466 = state_24421;
(statearr_24466[(25)] = inst_24380__$1);

return statearr_24466;
})();
if(inst_24380__$1){
var statearr_24467_24532 = state_24421__$1;
(statearr_24467_24532[(1)] = (33));

} else {
var statearr_24468_24533 = state_24421__$1;
(statearr_24468_24533[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (25))){
var inst_24363 = (state_24421[(20)]);
var inst_24364 = (state_24421[(12)]);
var inst_24366 = (inst_24364 < inst_24363);
var inst_24367 = inst_24366;
var state_24421__$1 = state_24421;
if(cljs.core.truth_(inst_24367)){
var statearr_24469_24534 = state_24421__$1;
(statearr_24469_24534[(1)] = (27));

} else {
var statearr_24470_24535 = state_24421__$1;
(statearr_24470_24535[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (34))){
var state_24421__$1 = state_24421;
var statearr_24471_24536 = state_24421__$1;
(statearr_24471_24536[(2)] = null);

(statearr_24471_24536[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (17))){
var state_24421__$1 = state_24421;
var statearr_24472_24537 = state_24421__$1;
(statearr_24472_24537[(2)] = null);

(statearr_24472_24537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (3))){
var inst_24419 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24421__$1,inst_24419);
} else {
if((state_val_24422 === (12))){
var inst_24348 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24473_24538 = state_24421__$1;
(statearr_24473_24538[(2)] = inst_24348);

(statearr_24473_24538[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (2))){
var state_24421__$1 = state_24421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24421__$1,(4),ch);
} else {
if((state_val_24422 === (23))){
var state_24421__$1 = state_24421;
var statearr_24474_24539 = state_24421__$1;
(statearr_24474_24539[(2)] = null);

(statearr_24474_24539[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (35))){
var inst_24403 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24475_24540 = state_24421__$1;
(statearr_24475_24540[(2)] = inst_24403);

(statearr_24475_24540[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (19))){
var inst_24320 = (state_24421[(7)]);
var inst_24324 = cljs.core.chunk_first.call(null,inst_24320);
var inst_24325 = cljs.core.chunk_rest.call(null,inst_24320);
var inst_24326 = cljs.core.count.call(null,inst_24324);
var inst_24298 = inst_24325;
var inst_24299 = inst_24324;
var inst_24300 = inst_24326;
var inst_24301 = (0);
var state_24421__$1 = (function (){var statearr_24476 = state_24421;
(statearr_24476[(13)] = inst_24301);

(statearr_24476[(15)] = inst_24300);

(statearr_24476[(16)] = inst_24298);

(statearr_24476[(17)] = inst_24299);

return statearr_24476;
})();
var statearr_24477_24541 = state_24421__$1;
(statearr_24477_24541[(2)] = null);

(statearr_24477_24541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (11))){
var inst_24320 = (state_24421[(7)]);
var inst_24298 = (state_24421[(16)]);
var inst_24320__$1 = cljs.core.seq.call(null,inst_24298);
var state_24421__$1 = (function (){var statearr_24478 = state_24421;
(statearr_24478[(7)] = inst_24320__$1);

return statearr_24478;
})();
if(inst_24320__$1){
var statearr_24479_24542 = state_24421__$1;
(statearr_24479_24542[(1)] = (16));

} else {
var statearr_24480_24543 = state_24421__$1;
(statearr_24480_24543[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (9))){
var inst_24350 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24481_24544 = state_24421__$1;
(statearr_24481_24544[(2)] = inst_24350);

(statearr_24481_24544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (5))){
var inst_24296 = cljs.core.deref.call(null,cs);
var inst_24297 = cljs.core.seq.call(null,inst_24296);
var inst_24298 = inst_24297;
var inst_24299 = null;
var inst_24300 = (0);
var inst_24301 = (0);
var state_24421__$1 = (function (){var statearr_24482 = state_24421;
(statearr_24482[(13)] = inst_24301);

(statearr_24482[(15)] = inst_24300);

(statearr_24482[(16)] = inst_24298);

(statearr_24482[(17)] = inst_24299);

return statearr_24482;
})();
var statearr_24483_24545 = state_24421__$1;
(statearr_24483_24545[(2)] = null);

(statearr_24483_24545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (14))){
var state_24421__$1 = state_24421;
var statearr_24484_24546 = state_24421__$1;
(statearr_24484_24546[(2)] = null);

(statearr_24484_24546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (45))){
var inst_24411 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24485_24547 = state_24421__$1;
(statearr_24485_24547[(2)] = inst_24411);

(statearr_24485_24547[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (26))){
var inst_24353 = (state_24421[(29)]);
var inst_24407 = (state_24421[(2)]);
var inst_24408 = cljs.core.seq.call(null,inst_24353);
var state_24421__$1 = (function (){var statearr_24486 = state_24421;
(statearr_24486[(31)] = inst_24407);

return statearr_24486;
})();
if(inst_24408){
var statearr_24487_24548 = state_24421__$1;
(statearr_24487_24548[(1)] = (42));

} else {
var statearr_24488_24549 = state_24421__$1;
(statearr_24488_24549[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (16))){
var inst_24320 = (state_24421[(7)]);
var inst_24322 = cljs.core.chunked_seq_QMARK_.call(null,inst_24320);
var state_24421__$1 = state_24421;
if(inst_24322){
var statearr_24489_24550 = state_24421__$1;
(statearr_24489_24550[(1)] = (19));

} else {
var statearr_24490_24551 = state_24421__$1;
(statearr_24490_24551[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (38))){
var inst_24400 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24491_24552 = state_24421__$1;
(statearr_24491_24552[(2)] = inst_24400);

(statearr_24491_24552[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (30))){
var state_24421__$1 = state_24421;
var statearr_24492_24553 = state_24421__$1;
(statearr_24492_24553[(2)] = null);

(statearr_24492_24553[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (10))){
var inst_24301 = (state_24421[(13)]);
var inst_24299 = (state_24421[(17)]);
var inst_24309 = cljs.core._nth.call(null,inst_24299,inst_24301);
var inst_24310 = cljs.core.nth.call(null,inst_24309,(0),null);
var inst_24311 = cljs.core.nth.call(null,inst_24309,(1),null);
var state_24421__$1 = (function (){var statearr_24493 = state_24421;
(statearr_24493[(26)] = inst_24310);

return statearr_24493;
})();
if(cljs.core.truth_(inst_24311)){
var statearr_24494_24554 = state_24421__$1;
(statearr_24494_24554[(1)] = (13));

} else {
var statearr_24495_24555 = state_24421__$1;
(statearr_24495_24555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (18))){
var inst_24346 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24496_24556 = state_24421__$1;
(statearr_24496_24556[(2)] = inst_24346);

(statearr_24496_24556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (42))){
var state_24421__$1 = state_24421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24421__$1,(45),dchan);
} else {
if((state_val_24422 === (37))){
var inst_24380 = (state_24421[(25)]);
var inst_24289 = (state_24421[(9)]);
var inst_24389 = (state_24421[(23)]);
var inst_24389__$1 = cljs.core.first.call(null,inst_24380);
var inst_24390 = cljs.core.async.put_BANG_.call(null,inst_24389__$1,inst_24289,done);
var state_24421__$1 = (function (){var statearr_24497 = state_24421;
(statearr_24497[(23)] = inst_24389__$1);

return statearr_24497;
})();
if(cljs.core.truth_(inst_24390)){
var statearr_24498_24557 = state_24421__$1;
(statearr_24498_24557[(1)] = (39));

} else {
var statearr_24499_24558 = state_24421__$1;
(statearr_24499_24558[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (8))){
var inst_24301 = (state_24421[(13)]);
var inst_24300 = (state_24421[(15)]);
var inst_24303 = (inst_24301 < inst_24300);
var inst_24304 = inst_24303;
var state_24421__$1 = state_24421;
if(cljs.core.truth_(inst_24304)){
var statearr_24500_24559 = state_24421__$1;
(statearr_24500_24559[(1)] = (10));

} else {
var statearr_24501_24560 = state_24421__$1;
(statearr_24501_24560[(1)] = (11));

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
});})(c__23687__auto___24506,cs,m,dchan,dctr,done))
;
return ((function (switch__23592__auto__,c__23687__auto___24506,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23593__auto__ = null;
var cljs$core$async$mult_$_state_machine__23593__auto____0 = (function (){
var statearr_24502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24502[(0)] = cljs$core$async$mult_$_state_machine__23593__auto__);

(statearr_24502[(1)] = (1));

return statearr_24502;
});
var cljs$core$async$mult_$_state_machine__23593__auto____1 = (function (state_24421){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_24421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e24503){if((e24503 instanceof Object)){
var ex__23596__auto__ = e24503;
var statearr_24504_24561 = state_24421;
(statearr_24504_24561[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24562 = state_24421;
state_24421 = G__24562;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23593__auto__ = function(state_24421){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23593__auto____1.call(this,state_24421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23593__auto____0;
cljs$core$async$mult_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23593__auto____1;
return cljs$core$async$mult_$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___24506,cs,m,dchan,dctr,done))
})();
var state__23689__auto__ = (function (){var statearr_24505 = f__23688__auto__.call(null);
(statearr_24505[(6)] = c__23687__auto___24506);

return statearr_24505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___24506,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24564 = arguments.length;
switch (G__24564) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24576 = arguments.length;
var i__4731__auto___24577 = (0);
while(true){
if((i__4731__auto___24577 < len__4730__auto___24576)){
args__4736__auto__.push((arguments[i__4731__auto___24577]));

var G__24578 = (i__4731__auto___24577 + (1));
i__4731__auto___24577 = G__24578;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24570){
var map__24571 = p__24570;
var map__24571__$1 = (((((!((map__24571 == null))))?(((((map__24571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24571):map__24571);
var opts = map__24571__$1;
var statearr_24573_24579 = state;
(statearr_24573_24579[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__24571,map__24571__$1,opts){
return (function (val){
var statearr_24574_24580 = state;
(statearr_24574_24580[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24571,map__24571__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24575_24581 = state;
(statearr_24575_24581[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24566){
var G__24567 = cljs.core.first.call(null,seq24566);
var seq24566__$1 = cljs.core.next.call(null,seq24566);
var G__24568 = cljs.core.first.call(null,seq24566__$1);
var seq24566__$2 = cljs.core.next.call(null,seq24566__$1);
var G__24569 = cljs.core.first.call(null,seq24566__$2);
var seq24566__$3 = cljs.core.next.call(null,seq24566__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24567,G__24568,G__24569,seq24566__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24582 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24583){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24583 = meta24583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24584,meta24583__$1){
var self__ = this;
var _24584__$1 = this;
return (new cljs.core.async.t_cljs$core$async24582(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24583__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24584){
var self__ = this;
var _24584__$1 = this;
return self__.meta24583;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24582.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24583","meta24583",-2083312892,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24582";

cljs.core.async.t_cljs$core$async24582.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24582");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24582.
 */
cljs.core.async.__GT_t_cljs$core$async24582 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24582(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24583){
return (new cljs.core.async.t_cljs$core$async24582(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24583));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24582(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23687__auto___24746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___24746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___24746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24686){
var state_val_24687 = (state_24686[(1)]);
if((state_val_24687 === (7))){
var inst_24601 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
var statearr_24688_24747 = state_24686__$1;
(statearr_24688_24747[(2)] = inst_24601);

(statearr_24688_24747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (20))){
var inst_24613 = (state_24686[(7)]);
var state_24686__$1 = state_24686;
var statearr_24689_24748 = state_24686__$1;
(statearr_24689_24748[(2)] = inst_24613);

(statearr_24689_24748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (27))){
var state_24686__$1 = state_24686;
var statearr_24690_24749 = state_24686__$1;
(statearr_24690_24749[(2)] = null);

(statearr_24690_24749[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (1))){
var inst_24588 = (state_24686[(8)]);
var inst_24588__$1 = calc_state.call(null);
var inst_24590 = (inst_24588__$1 == null);
var inst_24591 = cljs.core.not.call(null,inst_24590);
var state_24686__$1 = (function (){var statearr_24691 = state_24686;
(statearr_24691[(8)] = inst_24588__$1);

return statearr_24691;
})();
if(inst_24591){
var statearr_24692_24750 = state_24686__$1;
(statearr_24692_24750[(1)] = (2));

} else {
var statearr_24693_24751 = state_24686__$1;
(statearr_24693_24751[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (24))){
var inst_24660 = (state_24686[(9)]);
var inst_24637 = (state_24686[(10)]);
var inst_24646 = (state_24686[(11)]);
var inst_24660__$1 = inst_24637.call(null,inst_24646);
var state_24686__$1 = (function (){var statearr_24694 = state_24686;
(statearr_24694[(9)] = inst_24660__$1);

return statearr_24694;
})();
if(cljs.core.truth_(inst_24660__$1)){
var statearr_24695_24752 = state_24686__$1;
(statearr_24695_24752[(1)] = (29));

} else {
var statearr_24696_24753 = state_24686__$1;
(statearr_24696_24753[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (4))){
var inst_24604 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
if(cljs.core.truth_(inst_24604)){
var statearr_24697_24754 = state_24686__$1;
(statearr_24697_24754[(1)] = (8));

} else {
var statearr_24698_24755 = state_24686__$1;
(statearr_24698_24755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (15))){
var inst_24631 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
if(cljs.core.truth_(inst_24631)){
var statearr_24699_24756 = state_24686__$1;
(statearr_24699_24756[(1)] = (19));

} else {
var statearr_24700_24757 = state_24686__$1;
(statearr_24700_24757[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (21))){
var inst_24636 = (state_24686[(12)]);
var inst_24636__$1 = (state_24686[(2)]);
var inst_24637 = cljs.core.get.call(null,inst_24636__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24638 = cljs.core.get.call(null,inst_24636__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24639 = cljs.core.get.call(null,inst_24636__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24686__$1 = (function (){var statearr_24701 = state_24686;
(statearr_24701[(12)] = inst_24636__$1);

(statearr_24701[(10)] = inst_24637);

(statearr_24701[(13)] = inst_24638);

return statearr_24701;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24686__$1,(22),inst_24639);
} else {
if((state_val_24687 === (31))){
var inst_24668 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
if(cljs.core.truth_(inst_24668)){
var statearr_24702_24758 = state_24686__$1;
(statearr_24702_24758[(1)] = (32));

} else {
var statearr_24703_24759 = state_24686__$1;
(statearr_24703_24759[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (32))){
var inst_24645 = (state_24686[(14)]);
var state_24686__$1 = state_24686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24686__$1,(35),out,inst_24645);
} else {
if((state_val_24687 === (33))){
var inst_24636 = (state_24686[(12)]);
var inst_24613 = inst_24636;
var state_24686__$1 = (function (){var statearr_24704 = state_24686;
(statearr_24704[(7)] = inst_24613);

return statearr_24704;
})();
var statearr_24705_24760 = state_24686__$1;
(statearr_24705_24760[(2)] = null);

(statearr_24705_24760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (13))){
var inst_24613 = (state_24686[(7)]);
var inst_24620 = inst_24613.cljs$lang$protocol_mask$partition0$;
var inst_24621 = (inst_24620 & (64));
var inst_24622 = inst_24613.cljs$core$ISeq$;
var inst_24623 = (cljs.core.PROTOCOL_SENTINEL === inst_24622);
var inst_24624 = ((inst_24621) || (inst_24623));
var state_24686__$1 = state_24686;
if(cljs.core.truth_(inst_24624)){
var statearr_24706_24761 = state_24686__$1;
(statearr_24706_24761[(1)] = (16));

} else {
var statearr_24707_24762 = state_24686__$1;
(statearr_24707_24762[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (22))){
var inst_24645 = (state_24686[(14)]);
var inst_24646 = (state_24686[(11)]);
var inst_24644 = (state_24686[(2)]);
var inst_24645__$1 = cljs.core.nth.call(null,inst_24644,(0),null);
var inst_24646__$1 = cljs.core.nth.call(null,inst_24644,(1),null);
var inst_24647 = (inst_24645__$1 == null);
var inst_24648 = cljs.core._EQ_.call(null,inst_24646__$1,change);
var inst_24649 = ((inst_24647) || (inst_24648));
var state_24686__$1 = (function (){var statearr_24708 = state_24686;
(statearr_24708[(14)] = inst_24645__$1);

(statearr_24708[(11)] = inst_24646__$1);

return statearr_24708;
})();
if(cljs.core.truth_(inst_24649)){
var statearr_24709_24763 = state_24686__$1;
(statearr_24709_24763[(1)] = (23));

} else {
var statearr_24710_24764 = state_24686__$1;
(statearr_24710_24764[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (36))){
var inst_24636 = (state_24686[(12)]);
var inst_24613 = inst_24636;
var state_24686__$1 = (function (){var statearr_24711 = state_24686;
(statearr_24711[(7)] = inst_24613);

return statearr_24711;
})();
var statearr_24712_24765 = state_24686__$1;
(statearr_24712_24765[(2)] = null);

(statearr_24712_24765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (29))){
var inst_24660 = (state_24686[(9)]);
var state_24686__$1 = state_24686;
var statearr_24713_24766 = state_24686__$1;
(statearr_24713_24766[(2)] = inst_24660);

(statearr_24713_24766[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (6))){
var state_24686__$1 = state_24686;
var statearr_24714_24767 = state_24686__$1;
(statearr_24714_24767[(2)] = false);

(statearr_24714_24767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (28))){
var inst_24656 = (state_24686[(2)]);
var inst_24657 = calc_state.call(null);
var inst_24613 = inst_24657;
var state_24686__$1 = (function (){var statearr_24715 = state_24686;
(statearr_24715[(15)] = inst_24656);

(statearr_24715[(7)] = inst_24613);

return statearr_24715;
})();
var statearr_24716_24768 = state_24686__$1;
(statearr_24716_24768[(2)] = null);

(statearr_24716_24768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (25))){
var inst_24682 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
var statearr_24717_24769 = state_24686__$1;
(statearr_24717_24769[(2)] = inst_24682);

(statearr_24717_24769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (34))){
var inst_24680 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
var statearr_24718_24770 = state_24686__$1;
(statearr_24718_24770[(2)] = inst_24680);

(statearr_24718_24770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (17))){
var state_24686__$1 = state_24686;
var statearr_24719_24771 = state_24686__$1;
(statearr_24719_24771[(2)] = false);

(statearr_24719_24771[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (3))){
var state_24686__$1 = state_24686;
var statearr_24720_24772 = state_24686__$1;
(statearr_24720_24772[(2)] = false);

(statearr_24720_24772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (12))){
var inst_24684 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24686__$1,inst_24684);
} else {
if((state_val_24687 === (2))){
var inst_24588 = (state_24686[(8)]);
var inst_24593 = inst_24588.cljs$lang$protocol_mask$partition0$;
var inst_24594 = (inst_24593 & (64));
var inst_24595 = inst_24588.cljs$core$ISeq$;
var inst_24596 = (cljs.core.PROTOCOL_SENTINEL === inst_24595);
var inst_24597 = ((inst_24594) || (inst_24596));
var state_24686__$1 = state_24686;
if(cljs.core.truth_(inst_24597)){
var statearr_24721_24773 = state_24686__$1;
(statearr_24721_24773[(1)] = (5));

} else {
var statearr_24722_24774 = state_24686__$1;
(statearr_24722_24774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (23))){
var inst_24645 = (state_24686[(14)]);
var inst_24651 = (inst_24645 == null);
var state_24686__$1 = state_24686;
if(cljs.core.truth_(inst_24651)){
var statearr_24723_24775 = state_24686__$1;
(statearr_24723_24775[(1)] = (26));

} else {
var statearr_24724_24776 = state_24686__$1;
(statearr_24724_24776[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (35))){
var inst_24671 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
if(cljs.core.truth_(inst_24671)){
var statearr_24725_24777 = state_24686__$1;
(statearr_24725_24777[(1)] = (36));

} else {
var statearr_24726_24778 = state_24686__$1;
(statearr_24726_24778[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (19))){
var inst_24613 = (state_24686[(7)]);
var inst_24633 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24613);
var state_24686__$1 = state_24686;
var statearr_24727_24779 = state_24686__$1;
(statearr_24727_24779[(2)] = inst_24633);

(statearr_24727_24779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (11))){
var inst_24613 = (state_24686[(7)]);
var inst_24617 = (inst_24613 == null);
var inst_24618 = cljs.core.not.call(null,inst_24617);
var state_24686__$1 = state_24686;
if(inst_24618){
var statearr_24728_24780 = state_24686__$1;
(statearr_24728_24780[(1)] = (13));

} else {
var statearr_24729_24781 = state_24686__$1;
(statearr_24729_24781[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (9))){
var inst_24588 = (state_24686[(8)]);
var state_24686__$1 = state_24686;
var statearr_24730_24782 = state_24686__$1;
(statearr_24730_24782[(2)] = inst_24588);

(statearr_24730_24782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (5))){
var state_24686__$1 = state_24686;
var statearr_24731_24783 = state_24686__$1;
(statearr_24731_24783[(2)] = true);

(statearr_24731_24783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (14))){
var state_24686__$1 = state_24686;
var statearr_24732_24784 = state_24686__$1;
(statearr_24732_24784[(2)] = false);

(statearr_24732_24784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (26))){
var inst_24646 = (state_24686[(11)]);
var inst_24653 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24646);
var state_24686__$1 = state_24686;
var statearr_24733_24785 = state_24686__$1;
(statearr_24733_24785[(2)] = inst_24653);

(statearr_24733_24785[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (16))){
var state_24686__$1 = state_24686;
var statearr_24734_24786 = state_24686__$1;
(statearr_24734_24786[(2)] = true);

(statearr_24734_24786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (38))){
var inst_24676 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
var statearr_24735_24787 = state_24686__$1;
(statearr_24735_24787[(2)] = inst_24676);

(statearr_24735_24787[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (30))){
var inst_24637 = (state_24686[(10)]);
var inst_24638 = (state_24686[(13)]);
var inst_24646 = (state_24686[(11)]);
var inst_24663 = cljs.core.empty_QMARK_.call(null,inst_24637);
var inst_24664 = inst_24638.call(null,inst_24646);
var inst_24665 = cljs.core.not.call(null,inst_24664);
var inst_24666 = ((inst_24663) && (inst_24665));
var state_24686__$1 = state_24686;
var statearr_24736_24788 = state_24686__$1;
(statearr_24736_24788[(2)] = inst_24666);

(statearr_24736_24788[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (10))){
var inst_24588 = (state_24686[(8)]);
var inst_24609 = (state_24686[(2)]);
var inst_24610 = cljs.core.get.call(null,inst_24609,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24611 = cljs.core.get.call(null,inst_24609,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24612 = cljs.core.get.call(null,inst_24609,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24613 = inst_24588;
var state_24686__$1 = (function (){var statearr_24737 = state_24686;
(statearr_24737[(7)] = inst_24613);

(statearr_24737[(16)] = inst_24612);

(statearr_24737[(17)] = inst_24611);

(statearr_24737[(18)] = inst_24610);

return statearr_24737;
})();
var statearr_24738_24789 = state_24686__$1;
(statearr_24738_24789[(2)] = null);

(statearr_24738_24789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (18))){
var inst_24628 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
var statearr_24739_24790 = state_24686__$1;
(statearr_24739_24790[(2)] = inst_24628);

(statearr_24739_24790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (37))){
var state_24686__$1 = state_24686;
var statearr_24740_24791 = state_24686__$1;
(statearr_24740_24791[(2)] = null);

(statearr_24740_24791[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (8))){
var inst_24588 = (state_24686[(8)]);
var inst_24606 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24588);
var state_24686__$1 = state_24686;
var statearr_24741_24792 = state_24686__$1;
(statearr_24741_24792[(2)] = inst_24606);

(statearr_24741_24792[(1)] = (10));


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
});})(c__23687__auto___24746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23592__auto__,c__23687__auto___24746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23593__auto__ = null;
var cljs$core$async$mix_$_state_machine__23593__auto____0 = (function (){
var statearr_24742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24742[(0)] = cljs$core$async$mix_$_state_machine__23593__auto__);

(statearr_24742[(1)] = (1));

return statearr_24742;
});
var cljs$core$async$mix_$_state_machine__23593__auto____1 = (function (state_24686){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_24686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e24743){if((e24743 instanceof Object)){
var ex__23596__auto__ = e24743;
var statearr_24744_24793 = state_24686;
(statearr_24744_24793[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24794 = state_24686;
state_24686 = G__24794;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23593__auto__ = function(state_24686){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23593__auto____1.call(this,state_24686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23593__auto____0;
cljs$core$async$mix_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23593__auto____1;
return cljs$core$async$mix_$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___24746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23689__auto__ = (function (){var statearr_24745 = f__23688__auto__.call(null);
(statearr_24745[(6)] = c__23687__auto___24746);

return statearr_24745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___24746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24796 = arguments.length;
switch (G__24796) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24800 = arguments.length;
switch (G__24800) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__24798_SHARP_){
if(cljs.core.truth_(p1__24798_SHARP_.call(null,topic))){
return p1__24798_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24798_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24801 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24801 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24802){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24802 = meta24802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24803,meta24802__$1){
var self__ = this;
var _24803__$1 = this;
return (new cljs.core.async.t_cljs$core$async24801(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24802__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24801.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24803){
var self__ = this;
var _24803__$1 = this;
return self__.meta24802;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24801.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24801.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24801.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24801.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24801.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24801.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24801.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24801.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24802","meta24802",1760232577,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24801";

cljs.core.async.t_cljs$core$async24801.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24801");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24801.
 */
cljs.core.async.__GT_t_cljs$core$async24801 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24801(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24802){
return (new cljs.core.async.t_cljs$core$async24801(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24802));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24801(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23687__auto___24921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___24921,mults,ensure_mult,p){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___24921,mults,ensure_mult,p){
return (function (state_24875){
var state_val_24876 = (state_24875[(1)]);
if((state_val_24876 === (7))){
var inst_24871 = (state_24875[(2)]);
var state_24875__$1 = state_24875;
var statearr_24877_24922 = state_24875__$1;
(statearr_24877_24922[(2)] = inst_24871);

(statearr_24877_24922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (20))){
var state_24875__$1 = state_24875;
var statearr_24878_24923 = state_24875__$1;
(statearr_24878_24923[(2)] = null);

(statearr_24878_24923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (1))){
var state_24875__$1 = state_24875;
var statearr_24879_24924 = state_24875__$1;
(statearr_24879_24924[(2)] = null);

(statearr_24879_24924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (24))){
var inst_24854 = (state_24875[(7)]);
var inst_24863 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24854);
var state_24875__$1 = state_24875;
var statearr_24880_24925 = state_24875__$1;
(statearr_24880_24925[(2)] = inst_24863);

(statearr_24880_24925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (4))){
var inst_24806 = (state_24875[(8)]);
var inst_24806__$1 = (state_24875[(2)]);
var inst_24807 = (inst_24806__$1 == null);
var state_24875__$1 = (function (){var statearr_24881 = state_24875;
(statearr_24881[(8)] = inst_24806__$1);

return statearr_24881;
})();
if(cljs.core.truth_(inst_24807)){
var statearr_24882_24926 = state_24875__$1;
(statearr_24882_24926[(1)] = (5));

} else {
var statearr_24883_24927 = state_24875__$1;
(statearr_24883_24927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (15))){
var inst_24848 = (state_24875[(2)]);
var state_24875__$1 = state_24875;
var statearr_24884_24928 = state_24875__$1;
(statearr_24884_24928[(2)] = inst_24848);

(statearr_24884_24928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (21))){
var inst_24868 = (state_24875[(2)]);
var state_24875__$1 = (function (){var statearr_24885 = state_24875;
(statearr_24885[(9)] = inst_24868);

return statearr_24885;
})();
var statearr_24886_24929 = state_24875__$1;
(statearr_24886_24929[(2)] = null);

(statearr_24886_24929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (13))){
var inst_24830 = (state_24875[(10)]);
var inst_24832 = cljs.core.chunked_seq_QMARK_.call(null,inst_24830);
var state_24875__$1 = state_24875;
if(inst_24832){
var statearr_24887_24930 = state_24875__$1;
(statearr_24887_24930[(1)] = (16));

} else {
var statearr_24888_24931 = state_24875__$1;
(statearr_24888_24931[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (22))){
var inst_24860 = (state_24875[(2)]);
var state_24875__$1 = state_24875;
if(cljs.core.truth_(inst_24860)){
var statearr_24889_24932 = state_24875__$1;
(statearr_24889_24932[(1)] = (23));

} else {
var statearr_24890_24933 = state_24875__$1;
(statearr_24890_24933[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (6))){
var inst_24854 = (state_24875[(7)]);
var inst_24856 = (state_24875[(11)]);
var inst_24806 = (state_24875[(8)]);
var inst_24854__$1 = topic_fn.call(null,inst_24806);
var inst_24855 = cljs.core.deref.call(null,mults);
var inst_24856__$1 = cljs.core.get.call(null,inst_24855,inst_24854__$1);
var state_24875__$1 = (function (){var statearr_24891 = state_24875;
(statearr_24891[(7)] = inst_24854__$1);

(statearr_24891[(11)] = inst_24856__$1);

return statearr_24891;
})();
if(cljs.core.truth_(inst_24856__$1)){
var statearr_24892_24934 = state_24875__$1;
(statearr_24892_24934[(1)] = (19));

} else {
var statearr_24893_24935 = state_24875__$1;
(statearr_24893_24935[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (25))){
var inst_24865 = (state_24875[(2)]);
var state_24875__$1 = state_24875;
var statearr_24894_24936 = state_24875__$1;
(statearr_24894_24936[(2)] = inst_24865);

(statearr_24894_24936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (17))){
var inst_24830 = (state_24875[(10)]);
var inst_24839 = cljs.core.first.call(null,inst_24830);
var inst_24840 = cljs.core.async.muxch_STAR_.call(null,inst_24839);
var inst_24841 = cljs.core.async.close_BANG_.call(null,inst_24840);
var inst_24842 = cljs.core.next.call(null,inst_24830);
var inst_24816 = inst_24842;
var inst_24817 = null;
var inst_24818 = (0);
var inst_24819 = (0);
var state_24875__$1 = (function (){var statearr_24895 = state_24875;
(statearr_24895[(12)] = inst_24819);

(statearr_24895[(13)] = inst_24816);

(statearr_24895[(14)] = inst_24818);

(statearr_24895[(15)] = inst_24817);

(statearr_24895[(16)] = inst_24841);

return statearr_24895;
})();
var statearr_24896_24937 = state_24875__$1;
(statearr_24896_24937[(2)] = null);

(statearr_24896_24937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (3))){
var inst_24873 = (state_24875[(2)]);
var state_24875__$1 = state_24875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24875__$1,inst_24873);
} else {
if((state_val_24876 === (12))){
var inst_24850 = (state_24875[(2)]);
var state_24875__$1 = state_24875;
var statearr_24897_24938 = state_24875__$1;
(statearr_24897_24938[(2)] = inst_24850);

(statearr_24897_24938[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (2))){
var state_24875__$1 = state_24875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24875__$1,(4),ch);
} else {
if((state_val_24876 === (23))){
var state_24875__$1 = state_24875;
var statearr_24898_24939 = state_24875__$1;
(statearr_24898_24939[(2)] = null);

(statearr_24898_24939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (19))){
var inst_24856 = (state_24875[(11)]);
var inst_24806 = (state_24875[(8)]);
var inst_24858 = cljs.core.async.muxch_STAR_.call(null,inst_24856);
var state_24875__$1 = state_24875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24875__$1,(22),inst_24858,inst_24806);
} else {
if((state_val_24876 === (11))){
var inst_24816 = (state_24875[(13)]);
var inst_24830 = (state_24875[(10)]);
var inst_24830__$1 = cljs.core.seq.call(null,inst_24816);
var state_24875__$1 = (function (){var statearr_24899 = state_24875;
(statearr_24899[(10)] = inst_24830__$1);

return statearr_24899;
})();
if(inst_24830__$1){
var statearr_24900_24940 = state_24875__$1;
(statearr_24900_24940[(1)] = (13));

} else {
var statearr_24901_24941 = state_24875__$1;
(statearr_24901_24941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (9))){
var inst_24852 = (state_24875[(2)]);
var state_24875__$1 = state_24875;
var statearr_24902_24942 = state_24875__$1;
(statearr_24902_24942[(2)] = inst_24852);

(statearr_24902_24942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (5))){
var inst_24813 = cljs.core.deref.call(null,mults);
var inst_24814 = cljs.core.vals.call(null,inst_24813);
var inst_24815 = cljs.core.seq.call(null,inst_24814);
var inst_24816 = inst_24815;
var inst_24817 = null;
var inst_24818 = (0);
var inst_24819 = (0);
var state_24875__$1 = (function (){var statearr_24903 = state_24875;
(statearr_24903[(12)] = inst_24819);

(statearr_24903[(13)] = inst_24816);

(statearr_24903[(14)] = inst_24818);

(statearr_24903[(15)] = inst_24817);

return statearr_24903;
})();
var statearr_24904_24943 = state_24875__$1;
(statearr_24904_24943[(2)] = null);

(statearr_24904_24943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (14))){
var state_24875__$1 = state_24875;
var statearr_24908_24944 = state_24875__$1;
(statearr_24908_24944[(2)] = null);

(statearr_24908_24944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (16))){
var inst_24830 = (state_24875[(10)]);
var inst_24834 = cljs.core.chunk_first.call(null,inst_24830);
var inst_24835 = cljs.core.chunk_rest.call(null,inst_24830);
var inst_24836 = cljs.core.count.call(null,inst_24834);
var inst_24816 = inst_24835;
var inst_24817 = inst_24834;
var inst_24818 = inst_24836;
var inst_24819 = (0);
var state_24875__$1 = (function (){var statearr_24909 = state_24875;
(statearr_24909[(12)] = inst_24819);

(statearr_24909[(13)] = inst_24816);

(statearr_24909[(14)] = inst_24818);

(statearr_24909[(15)] = inst_24817);

return statearr_24909;
})();
var statearr_24910_24945 = state_24875__$1;
(statearr_24910_24945[(2)] = null);

(statearr_24910_24945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (10))){
var inst_24819 = (state_24875[(12)]);
var inst_24816 = (state_24875[(13)]);
var inst_24818 = (state_24875[(14)]);
var inst_24817 = (state_24875[(15)]);
var inst_24824 = cljs.core._nth.call(null,inst_24817,inst_24819);
var inst_24825 = cljs.core.async.muxch_STAR_.call(null,inst_24824);
var inst_24826 = cljs.core.async.close_BANG_.call(null,inst_24825);
var inst_24827 = (inst_24819 + (1));
var tmp24905 = inst_24816;
var tmp24906 = inst_24818;
var tmp24907 = inst_24817;
var inst_24816__$1 = tmp24905;
var inst_24817__$1 = tmp24907;
var inst_24818__$1 = tmp24906;
var inst_24819__$1 = inst_24827;
var state_24875__$1 = (function (){var statearr_24911 = state_24875;
(statearr_24911[(12)] = inst_24819__$1);

(statearr_24911[(13)] = inst_24816__$1);

(statearr_24911[(14)] = inst_24818__$1);

(statearr_24911[(17)] = inst_24826);

(statearr_24911[(15)] = inst_24817__$1);

return statearr_24911;
})();
var statearr_24912_24946 = state_24875__$1;
(statearr_24912_24946[(2)] = null);

(statearr_24912_24946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (18))){
var inst_24845 = (state_24875[(2)]);
var state_24875__$1 = state_24875;
var statearr_24913_24947 = state_24875__$1;
(statearr_24913_24947[(2)] = inst_24845);

(statearr_24913_24947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (8))){
var inst_24819 = (state_24875[(12)]);
var inst_24818 = (state_24875[(14)]);
var inst_24821 = (inst_24819 < inst_24818);
var inst_24822 = inst_24821;
var state_24875__$1 = state_24875;
if(cljs.core.truth_(inst_24822)){
var statearr_24914_24948 = state_24875__$1;
(statearr_24914_24948[(1)] = (10));

} else {
var statearr_24915_24949 = state_24875__$1;
(statearr_24915_24949[(1)] = (11));

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
});})(c__23687__auto___24921,mults,ensure_mult,p))
;
return ((function (switch__23592__auto__,c__23687__auto___24921,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23593__auto__ = null;
var cljs$core$async$state_machine__23593__auto____0 = (function (){
var statearr_24916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24916[(0)] = cljs$core$async$state_machine__23593__auto__);

(statearr_24916[(1)] = (1));

return statearr_24916;
});
var cljs$core$async$state_machine__23593__auto____1 = (function (state_24875){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_24875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e24917){if((e24917 instanceof Object)){
var ex__23596__auto__ = e24917;
var statearr_24918_24950 = state_24875;
(statearr_24918_24950[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24951 = state_24875;
state_24875 = G__24951;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$state_machine__23593__auto__ = function(state_24875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23593__auto____1.call(this,state_24875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23593__auto____0;
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23593__auto____1;
return cljs$core$async$state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___24921,mults,ensure_mult,p))
})();
var state__23689__auto__ = (function (){var statearr_24919 = f__23688__auto__.call(null);
(statearr_24919[(6)] = c__23687__auto___24921);

return statearr_24919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___24921,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24953 = arguments.length;
switch (G__24953) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24956 = arguments.length;
switch (G__24956) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24959 = arguments.length;
switch (G__24959) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23687__auto___25026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___25026,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___25026,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24998){
var state_val_24999 = (state_24998[(1)]);
if((state_val_24999 === (7))){
var state_24998__$1 = state_24998;
var statearr_25000_25027 = state_24998__$1;
(statearr_25000_25027[(2)] = null);

(statearr_25000_25027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (1))){
var state_24998__$1 = state_24998;
var statearr_25001_25028 = state_24998__$1;
(statearr_25001_25028[(2)] = null);

(statearr_25001_25028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (4))){
var inst_24962 = (state_24998[(7)]);
var inst_24964 = (inst_24962 < cnt);
var state_24998__$1 = state_24998;
if(cljs.core.truth_(inst_24964)){
var statearr_25002_25029 = state_24998__$1;
(statearr_25002_25029[(1)] = (6));

} else {
var statearr_25003_25030 = state_24998__$1;
(statearr_25003_25030[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (15))){
var inst_24994 = (state_24998[(2)]);
var state_24998__$1 = state_24998;
var statearr_25004_25031 = state_24998__$1;
(statearr_25004_25031[(2)] = inst_24994);

(statearr_25004_25031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (13))){
var inst_24987 = cljs.core.async.close_BANG_.call(null,out);
var state_24998__$1 = state_24998;
var statearr_25005_25032 = state_24998__$1;
(statearr_25005_25032[(2)] = inst_24987);

(statearr_25005_25032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (6))){
var state_24998__$1 = state_24998;
var statearr_25006_25033 = state_24998__$1;
(statearr_25006_25033[(2)] = null);

(statearr_25006_25033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (3))){
var inst_24996 = (state_24998[(2)]);
var state_24998__$1 = state_24998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24998__$1,inst_24996);
} else {
if((state_val_24999 === (12))){
var inst_24984 = (state_24998[(8)]);
var inst_24984__$1 = (state_24998[(2)]);
var inst_24985 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24984__$1);
var state_24998__$1 = (function (){var statearr_25007 = state_24998;
(statearr_25007[(8)] = inst_24984__$1);

return statearr_25007;
})();
if(cljs.core.truth_(inst_24985)){
var statearr_25008_25034 = state_24998__$1;
(statearr_25008_25034[(1)] = (13));

} else {
var statearr_25009_25035 = state_24998__$1;
(statearr_25009_25035[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (2))){
var inst_24961 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24962 = (0);
var state_24998__$1 = (function (){var statearr_25010 = state_24998;
(statearr_25010[(7)] = inst_24962);

(statearr_25010[(9)] = inst_24961);

return statearr_25010;
})();
var statearr_25011_25036 = state_24998__$1;
(statearr_25011_25036[(2)] = null);

(statearr_25011_25036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (11))){
var inst_24962 = (state_24998[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24998,(10),Object,null,(9));
var inst_24971 = chs__$1.call(null,inst_24962);
var inst_24972 = done.call(null,inst_24962);
var inst_24973 = cljs.core.async.take_BANG_.call(null,inst_24971,inst_24972);
var state_24998__$1 = state_24998;
var statearr_25012_25037 = state_24998__$1;
(statearr_25012_25037[(2)] = inst_24973);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24998__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (9))){
var inst_24962 = (state_24998[(7)]);
var inst_24975 = (state_24998[(2)]);
var inst_24976 = (inst_24962 + (1));
var inst_24962__$1 = inst_24976;
var state_24998__$1 = (function (){var statearr_25013 = state_24998;
(statearr_25013[(7)] = inst_24962__$1);

(statearr_25013[(10)] = inst_24975);

return statearr_25013;
})();
var statearr_25014_25038 = state_24998__$1;
(statearr_25014_25038[(2)] = null);

(statearr_25014_25038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (5))){
var inst_24982 = (state_24998[(2)]);
var state_24998__$1 = (function (){var statearr_25015 = state_24998;
(statearr_25015[(11)] = inst_24982);

return statearr_25015;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24998__$1,(12),dchan);
} else {
if((state_val_24999 === (14))){
var inst_24984 = (state_24998[(8)]);
var inst_24989 = cljs.core.apply.call(null,f,inst_24984);
var state_24998__$1 = state_24998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24998__$1,(16),out,inst_24989);
} else {
if((state_val_24999 === (16))){
var inst_24991 = (state_24998[(2)]);
var state_24998__$1 = (function (){var statearr_25016 = state_24998;
(statearr_25016[(12)] = inst_24991);

return statearr_25016;
})();
var statearr_25017_25039 = state_24998__$1;
(statearr_25017_25039[(2)] = null);

(statearr_25017_25039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (10))){
var inst_24966 = (state_24998[(2)]);
var inst_24967 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24998__$1 = (function (){var statearr_25018 = state_24998;
(statearr_25018[(13)] = inst_24966);

return statearr_25018;
})();
var statearr_25019_25040 = state_24998__$1;
(statearr_25019_25040[(2)] = inst_24967);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24998__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24999 === (8))){
var inst_24980 = (state_24998[(2)]);
var state_24998__$1 = state_24998;
var statearr_25020_25041 = state_24998__$1;
(statearr_25020_25041[(2)] = inst_24980);

(statearr_25020_25041[(1)] = (5));


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
});})(c__23687__auto___25026,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23592__auto__,c__23687__auto___25026,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23593__auto__ = null;
var cljs$core$async$state_machine__23593__auto____0 = (function (){
var statearr_25021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25021[(0)] = cljs$core$async$state_machine__23593__auto__);

(statearr_25021[(1)] = (1));

return statearr_25021;
});
var cljs$core$async$state_machine__23593__auto____1 = (function (state_24998){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_24998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e25022){if((e25022 instanceof Object)){
var ex__23596__auto__ = e25022;
var statearr_25023_25042 = state_24998;
(statearr_25023_25042[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25043 = state_24998;
state_24998 = G__25043;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$state_machine__23593__auto__ = function(state_24998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23593__auto____1.call(this,state_24998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23593__auto____0;
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23593__auto____1;
return cljs$core$async$state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___25026,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23689__auto__ = (function (){var statearr_25024 = f__23688__auto__.call(null);
(statearr_25024[(6)] = c__23687__auto___25026);

return statearr_25024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___25026,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25046 = arguments.length;
switch (G__25046) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23687__auto___25100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___25100,out){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___25100,out){
return (function (state_25078){
var state_val_25079 = (state_25078[(1)]);
if((state_val_25079 === (7))){
var inst_25057 = (state_25078[(7)]);
var inst_25058 = (state_25078[(8)]);
var inst_25057__$1 = (state_25078[(2)]);
var inst_25058__$1 = cljs.core.nth.call(null,inst_25057__$1,(0),null);
var inst_25059 = cljs.core.nth.call(null,inst_25057__$1,(1),null);
var inst_25060 = (inst_25058__$1 == null);
var state_25078__$1 = (function (){var statearr_25080 = state_25078;
(statearr_25080[(9)] = inst_25059);

(statearr_25080[(7)] = inst_25057__$1);

(statearr_25080[(8)] = inst_25058__$1);

return statearr_25080;
})();
if(cljs.core.truth_(inst_25060)){
var statearr_25081_25101 = state_25078__$1;
(statearr_25081_25101[(1)] = (8));

} else {
var statearr_25082_25102 = state_25078__$1;
(statearr_25082_25102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25079 === (1))){
var inst_25047 = cljs.core.vec.call(null,chs);
var inst_25048 = inst_25047;
var state_25078__$1 = (function (){var statearr_25083 = state_25078;
(statearr_25083[(10)] = inst_25048);

return statearr_25083;
})();
var statearr_25084_25103 = state_25078__$1;
(statearr_25084_25103[(2)] = null);

(statearr_25084_25103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25079 === (4))){
var inst_25048 = (state_25078[(10)]);
var state_25078__$1 = state_25078;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25078__$1,(7),inst_25048);
} else {
if((state_val_25079 === (6))){
var inst_25074 = (state_25078[(2)]);
var state_25078__$1 = state_25078;
var statearr_25085_25104 = state_25078__$1;
(statearr_25085_25104[(2)] = inst_25074);

(statearr_25085_25104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25079 === (3))){
var inst_25076 = (state_25078[(2)]);
var state_25078__$1 = state_25078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25078__$1,inst_25076);
} else {
if((state_val_25079 === (2))){
var inst_25048 = (state_25078[(10)]);
var inst_25050 = cljs.core.count.call(null,inst_25048);
var inst_25051 = (inst_25050 > (0));
var state_25078__$1 = state_25078;
if(cljs.core.truth_(inst_25051)){
var statearr_25087_25105 = state_25078__$1;
(statearr_25087_25105[(1)] = (4));

} else {
var statearr_25088_25106 = state_25078__$1;
(statearr_25088_25106[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25079 === (11))){
var inst_25048 = (state_25078[(10)]);
var inst_25067 = (state_25078[(2)]);
var tmp25086 = inst_25048;
var inst_25048__$1 = tmp25086;
var state_25078__$1 = (function (){var statearr_25089 = state_25078;
(statearr_25089[(10)] = inst_25048__$1);

(statearr_25089[(11)] = inst_25067);

return statearr_25089;
})();
var statearr_25090_25107 = state_25078__$1;
(statearr_25090_25107[(2)] = null);

(statearr_25090_25107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25079 === (9))){
var inst_25058 = (state_25078[(8)]);
var state_25078__$1 = state_25078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25078__$1,(11),out,inst_25058);
} else {
if((state_val_25079 === (5))){
var inst_25072 = cljs.core.async.close_BANG_.call(null,out);
var state_25078__$1 = state_25078;
var statearr_25091_25108 = state_25078__$1;
(statearr_25091_25108[(2)] = inst_25072);

(statearr_25091_25108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25079 === (10))){
var inst_25070 = (state_25078[(2)]);
var state_25078__$1 = state_25078;
var statearr_25092_25109 = state_25078__$1;
(statearr_25092_25109[(2)] = inst_25070);

(statearr_25092_25109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25079 === (8))){
var inst_25048 = (state_25078[(10)]);
var inst_25059 = (state_25078[(9)]);
var inst_25057 = (state_25078[(7)]);
var inst_25058 = (state_25078[(8)]);
var inst_25062 = (function (){var cs = inst_25048;
var vec__25053 = inst_25057;
var v = inst_25058;
var c = inst_25059;
return ((function (cs,vec__25053,v,c,inst_25048,inst_25059,inst_25057,inst_25058,state_val_25079,c__23687__auto___25100,out){
return (function (p1__25044_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25044_SHARP_);
});
;})(cs,vec__25053,v,c,inst_25048,inst_25059,inst_25057,inst_25058,state_val_25079,c__23687__auto___25100,out))
})();
var inst_25063 = cljs.core.filterv.call(null,inst_25062,inst_25048);
var inst_25048__$1 = inst_25063;
var state_25078__$1 = (function (){var statearr_25093 = state_25078;
(statearr_25093[(10)] = inst_25048__$1);

return statearr_25093;
})();
var statearr_25094_25110 = state_25078__$1;
(statearr_25094_25110[(2)] = null);

(statearr_25094_25110[(1)] = (2));


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
});})(c__23687__auto___25100,out))
;
return ((function (switch__23592__auto__,c__23687__auto___25100,out){
return (function() {
var cljs$core$async$state_machine__23593__auto__ = null;
var cljs$core$async$state_machine__23593__auto____0 = (function (){
var statearr_25095 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25095[(0)] = cljs$core$async$state_machine__23593__auto__);

(statearr_25095[(1)] = (1));

return statearr_25095;
});
var cljs$core$async$state_machine__23593__auto____1 = (function (state_25078){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_25078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e25096){if((e25096 instanceof Object)){
var ex__23596__auto__ = e25096;
var statearr_25097_25111 = state_25078;
(statearr_25097_25111[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25112 = state_25078;
state_25078 = G__25112;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$state_machine__23593__auto__ = function(state_25078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23593__auto____1.call(this,state_25078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23593__auto____0;
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23593__auto____1;
return cljs$core$async$state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___25100,out))
})();
var state__23689__auto__ = (function (){var statearr_25098 = f__23688__auto__.call(null);
(statearr_25098[(6)] = c__23687__auto___25100);

return statearr_25098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___25100,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25114 = arguments.length;
switch (G__25114) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23687__auto___25159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___25159,out){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___25159,out){
return (function (state_25138){
var state_val_25139 = (state_25138[(1)]);
if((state_val_25139 === (7))){
var inst_25120 = (state_25138[(7)]);
var inst_25120__$1 = (state_25138[(2)]);
var inst_25121 = (inst_25120__$1 == null);
var inst_25122 = cljs.core.not.call(null,inst_25121);
var state_25138__$1 = (function (){var statearr_25140 = state_25138;
(statearr_25140[(7)] = inst_25120__$1);

return statearr_25140;
})();
if(inst_25122){
var statearr_25141_25160 = state_25138__$1;
(statearr_25141_25160[(1)] = (8));

} else {
var statearr_25142_25161 = state_25138__$1;
(statearr_25142_25161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (1))){
var inst_25115 = (0);
var state_25138__$1 = (function (){var statearr_25143 = state_25138;
(statearr_25143[(8)] = inst_25115);

return statearr_25143;
})();
var statearr_25144_25162 = state_25138__$1;
(statearr_25144_25162[(2)] = null);

(statearr_25144_25162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (4))){
var state_25138__$1 = state_25138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25138__$1,(7),ch);
} else {
if((state_val_25139 === (6))){
var inst_25133 = (state_25138[(2)]);
var state_25138__$1 = state_25138;
var statearr_25145_25163 = state_25138__$1;
(statearr_25145_25163[(2)] = inst_25133);

(statearr_25145_25163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (3))){
var inst_25135 = (state_25138[(2)]);
var inst_25136 = cljs.core.async.close_BANG_.call(null,out);
var state_25138__$1 = (function (){var statearr_25146 = state_25138;
(statearr_25146[(9)] = inst_25135);

return statearr_25146;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25138__$1,inst_25136);
} else {
if((state_val_25139 === (2))){
var inst_25115 = (state_25138[(8)]);
var inst_25117 = (inst_25115 < n);
var state_25138__$1 = state_25138;
if(cljs.core.truth_(inst_25117)){
var statearr_25147_25164 = state_25138__$1;
(statearr_25147_25164[(1)] = (4));

} else {
var statearr_25148_25165 = state_25138__$1;
(statearr_25148_25165[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (11))){
var inst_25115 = (state_25138[(8)]);
var inst_25125 = (state_25138[(2)]);
var inst_25126 = (inst_25115 + (1));
var inst_25115__$1 = inst_25126;
var state_25138__$1 = (function (){var statearr_25149 = state_25138;
(statearr_25149[(10)] = inst_25125);

(statearr_25149[(8)] = inst_25115__$1);

return statearr_25149;
})();
var statearr_25150_25166 = state_25138__$1;
(statearr_25150_25166[(2)] = null);

(statearr_25150_25166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (9))){
var state_25138__$1 = state_25138;
var statearr_25151_25167 = state_25138__$1;
(statearr_25151_25167[(2)] = null);

(statearr_25151_25167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (5))){
var state_25138__$1 = state_25138;
var statearr_25152_25168 = state_25138__$1;
(statearr_25152_25168[(2)] = null);

(statearr_25152_25168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (10))){
var inst_25130 = (state_25138[(2)]);
var state_25138__$1 = state_25138;
var statearr_25153_25169 = state_25138__$1;
(statearr_25153_25169[(2)] = inst_25130);

(statearr_25153_25169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (8))){
var inst_25120 = (state_25138[(7)]);
var state_25138__$1 = state_25138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25138__$1,(11),out,inst_25120);
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
});})(c__23687__auto___25159,out))
;
return ((function (switch__23592__auto__,c__23687__auto___25159,out){
return (function() {
var cljs$core$async$state_machine__23593__auto__ = null;
var cljs$core$async$state_machine__23593__auto____0 = (function (){
var statearr_25154 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25154[(0)] = cljs$core$async$state_machine__23593__auto__);

(statearr_25154[(1)] = (1));

return statearr_25154;
});
var cljs$core$async$state_machine__23593__auto____1 = (function (state_25138){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_25138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e25155){if((e25155 instanceof Object)){
var ex__23596__auto__ = e25155;
var statearr_25156_25170 = state_25138;
(statearr_25156_25170[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25171 = state_25138;
state_25138 = G__25171;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$state_machine__23593__auto__ = function(state_25138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23593__auto____1.call(this,state_25138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23593__auto____0;
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23593__auto____1;
return cljs$core$async$state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___25159,out))
})();
var state__23689__auto__ = (function (){var statearr_25157 = f__23688__auto__.call(null);
(statearr_25157[(6)] = c__23687__auto___25159);

return statearr_25157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___25159,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25173 = (function (f,ch,meta25174){
this.f = f;
this.ch = ch;
this.meta25174 = meta25174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25175,meta25174__$1){
var self__ = this;
var _25175__$1 = this;
return (new cljs.core.async.t_cljs$core$async25173(self__.f,self__.ch,meta25174__$1));
});

cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25175){
var self__ = this;
var _25175__$1 = this;
return self__.meta25174;
});

cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25176 = (function (f,ch,meta25174,_,fn1,meta25177){
this.f = f;
this.ch = ch;
this.meta25174 = meta25174;
this._ = _;
this.fn1 = fn1;
this.meta25177 = meta25177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25178,meta25177__$1){
var self__ = this;
var _25178__$1 = this;
return (new cljs.core.async.t_cljs$core$async25176(self__.f,self__.ch,self__.meta25174,self__._,self__.fn1,meta25177__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25178){
var self__ = this;
var _25178__$1 = this;
return self__.meta25177;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25176.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25176.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25172_SHARP_){
return f1.call(null,(((p1__25172_SHARP_ == null))?null:self__.f.call(null,p1__25172_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25176.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25174","meta25174",-789040245,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25173","cljs.core.async/t_cljs$core$async25173",-968803947,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25177","meta25177",-1390931431,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25176";

cljs.core.async.t_cljs$core$async25176.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25176");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25176.
 */
cljs.core.async.__GT_t_cljs$core$async25176 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25176(f__$1,ch__$1,meta25174__$1,___$2,fn1__$1,meta25177){
return (new cljs.core.async.t_cljs$core$async25176(f__$1,ch__$1,meta25174__$1,___$2,fn1__$1,meta25177));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25176(self__.f,self__.ch,self__.meta25174,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25174","meta25174",-789040245,null)], null);
});

cljs.core.async.t_cljs$core$async25173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25173";

cljs.core.async.t_cljs$core$async25173.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25173");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25173.
 */
cljs.core.async.__GT_t_cljs$core$async25173 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25173(f__$1,ch__$1,meta25174){
return (new cljs.core.async.t_cljs$core$async25173(f__$1,ch__$1,meta25174));
});

}

return (new cljs.core.async.t_cljs$core$async25173(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25179 = (function (f,ch,meta25180){
this.f = f;
this.ch = ch;
this.meta25180 = meta25180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25181,meta25180__$1){
var self__ = this;
var _25181__$1 = this;
return (new cljs.core.async.t_cljs$core$async25179(self__.f,self__.ch,meta25180__$1));
});

cljs.core.async.t_cljs$core$async25179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25181){
var self__ = this;
var _25181__$1 = this;
return self__.meta25180;
});

cljs.core.async.t_cljs$core$async25179.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25179.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25179.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25180","meta25180",2024215328,null)], null);
});

cljs.core.async.t_cljs$core$async25179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25179";

cljs.core.async.t_cljs$core$async25179.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25179");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25179.
 */
cljs.core.async.__GT_t_cljs$core$async25179 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25179(f__$1,ch__$1,meta25180){
return (new cljs.core.async.t_cljs$core$async25179(f__$1,ch__$1,meta25180));
});

}

return (new cljs.core.async.t_cljs$core$async25179(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25182 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25182 = (function (p,ch,meta25183){
this.p = p;
this.ch = ch;
this.meta25183 = meta25183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25184,meta25183__$1){
var self__ = this;
var _25184__$1 = this;
return (new cljs.core.async.t_cljs$core$async25182(self__.p,self__.ch,meta25183__$1));
});

cljs.core.async.t_cljs$core$async25182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25184){
var self__ = this;
var _25184__$1 = this;
return self__.meta25183;
});

cljs.core.async.t_cljs$core$async25182.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25182.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25182.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25182.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25182.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25182.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25182.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25183","meta25183",-2088823245,null)], null);
});

cljs.core.async.t_cljs$core$async25182.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25182";

cljs.core.async.t_cljs$core$async25182.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25182");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25182.
 */
cljs.core.async.__GT_t_cljs$core$async25182 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25182(p__$1,ch__$1,meta25183){
return (new cljs.core.async.t_cljs$core$async25182(p__$1,ch__$1,meta25183));
});

}

return (new cljs.core.async.t_cljs$core$async25182(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25186 = arguments.length;
switch (G__25186) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23687__auto___25226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___25226,out){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___25226,out){
return (function (state_25207){
var state_val_25208 = (state_25207[(1)]);
if((state_val_25208 === (7))){
var inst_25203 = (state_25207[(2)]);
var state_25207__$1 = state_25207;
var statearr_25209_25227 = state_25207__$1;
(statearr_25209_25227[(2)] = inst_25203);

(statearr_25209_25227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (1))){
var state_25207__$1 = state_25207;
var statearr_25210_25228 = state_25207__$1;
(statearr_25210_25228[(2)] = null);

(statearr_25210_25228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (4))){
var inst_25189 = (state_25207[(7)]);
var inst_25189__$1 = (state_25207[(2)]);
var inst_25190 = (inst_25189__$1 == null);
var state_25207__$1 = (function (){var statearr_25211 = state_25207;
(statearr_25211[(7)] = inst_25189__$1);

return statearr_25211;
})();
if(cljs.core.truth_(inst_25190)){
var statearr_25212_25229 = state_25207__$1;
(statearr_25212_25229[(1)] = (5));

} else {
var statearr_25213_25230 = state_25207__$1;
(statearr_25213_25230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (6))){
var inst_25189 = (state_25207[(7)]);
var inst_25194 = p.call(null,inst_25189);
var state_25207__$1 = state_25207;
if(cljs.core.truth_(inst_25194)){
var statearr_25214_25231 = state_25207__$1;
(statearr_25214_25231[(1)] = (8));

} else {
var statearr_25215_25232 = state_25207__$1;
(statearr_25215_25232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (3))){
var inst_25205 = (state_25207[(2)]);
var state_25207__$1 = state_25207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25207__$1,inst_25205);
} else {
if((state_val_25208 === (2))){
var state_25207__$1 = state_25207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25207__$1,(4),ch);
} else {
if((state_val_25208 === (11))){
var inst_25197 = (state_25207[(2)]);
var state_25207__$1 = state_25207;
var statearr_25216_25233 = state_25207__$1;
(statearr_25216_25233[(2)] = inst_25197);

(statearr_25216_25233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (9))){
var state_25207__$1 = state_25207;
var statearr_25217_25234 = state_25207__$1;
(statearr_25217_25234[(2)] = null);

(statearr_25217_25234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (5))){
var inst_25192 = cljs.core.async.close_BANG_.call(null,out);
var state_25207__$1 = state_25207;
var statearr_25218_25235 = state_25207__$1;
(statearr_25218_25235[(2)] = inst_25192);

(statearr_25218_25235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (10))){
var inst_25200 = (state_25207[(2)]);
var state_25207__$1 = (function (){var statearr_25219 = state_25207;
(statearr_25219[(8)] = inst_25200);

return statearr_25219;
})();
var statearr_25220_25236 = state_25207__$1;
(statearr_25220_25236[(2)] = null);

(statearr_25220_25236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25208 === (8))){
var inst_25189 = (state_25207[(7)]);
var state_25207__$1 = state_25207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25207__$1,(11),out,inst_25189);
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
});})(c__23687__auto___25226,out))
;
return ((function (switch__23592__auto__,c__23687__auto___25226,out){
return (function() {
var cljs$core$async$state_machine__23593__auto__ = null;
var cljs$core$async$state_machine__23593__auto____0 = (function (){
var statearr_25221 = [null,null,null,null,null,null,null,null,null];
(statearr_25221[(0)] = cljs$core$async$state_machine__23593__auto__);

(statearr_25221[(1)] = (1));

return statearr_25221;
});
var cljs$core$async$state_machine__23593__auto____1 = (function (state_25207){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_25207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e25222){if((e25222 instanceof Object)){
var ex__23596__auto__ = e25222;
var statearr_25223_25237 = state_25207;
(statearr_25223_25237[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25238 = state_25207;
state_25207 = G__25238;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$state_machine__23593__auto__ = function(state_25207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23593__auto____1.call(this,state_25207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23593__auto____0;
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23593__auto____1;
return cljs$core$async$state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___25226,out))
})();
var state__23689__auto__ = (function (){var statearr_25224 = f__23688__auto__.call(null);
(statearr_25224[(6)] = c__23687__auto___25226);

return statearr_25224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___25226,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25240 = arguments.length;
switch (G__25240) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23687__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto__){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto__){
return (function (state_25303){
var state_val_25304 = (state_25303[(1)]);
if((state_val_25304 === (7))){
var inst_25299 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
var statearr_25305_25343 = state_25303__$1;
(statearr_25305_25343[(2)] = inst_25299);

(statearr_25305_25343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (20))){
var inst_25269 = (state_25303[(7)]);
var inst_25280 = (state_25303[(2)]);
var inst_25281 = cljs.core.next.call(null,inst_25269);
var inst_25255 = inst_25281;
var inst_25256 = null;
var inst_25257 = (0);
var inst_25258 = (0);
var state_25303__$1 = (function (){var statearr_25306 = state_25303;
(statearr_25306[(8)] = inst_25257);

(statearr_25306[(9)] = inst_25258);

(statearr_25306[(10)] = inst_25256);

(statearr_25306[(11)] = inst_25280);

(statearr_25306[(12)] = inst_25255);

return statearr_25306;
})();
var statearr_25307_25344 = state_25303__$1;
(statearr_25307_25344[(2)] = null);

(statearr_25307_25344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (1))){
var state_25303__$1 = state_25303;
var statearr_25308_25345 = state_25303__$1;
(statearr_25308_25345[(2)] = null);

(statearr_25308_25345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (4))){
var inst_25244 = (state_25303[(13)]);
var inst_25244__$1 = (state_25303[(2)]);
var inst_25245 = (inst_25244__$1 == null);
var state_25303__$1 = (function (){var statearr_25309 = state_25303;
(statearr_25309[(13)] = inst_25244__$1);

return statearr_25309;
})();
if(cljs.core.truth_(inst_25245)){
var statearr_25310_25346 = state_25303__$1;
(statearr_25310_25346[(1)] = (5));

} else {
var statearr_25311_25347 = state_25303__$1;
(statearr_25311_25347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (15))){
var state_25303__$1 = state_25303;
var statearr_25315_25348 = state_25303__$1;
(statearr_25315_25348[(2)] = null);

(statearr_25315_25348[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (21))){
var state_25303__$1 = state_25303;
var statearr_25316_25349 = state_25303__$1;
(statearr_25316_25349[(2)] = null);

(statearr_25316_25349[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (13))){
var inst_25257 = (state_25303[(8)]);
var inst_25258 = (state_25303[(9)]);
var inst_25256 = (state_25303[(10)]);
var inst_25255 = (state_25303[(12)]);
var inst_25265 = (state_25303[(2)]);
var inst_25266 = (inst_25258 + (1));
var tmp25312 = inst_25257;
var tmp25313 = inst_25256;
var tmp25314 = inst_25255;
var inst_25255__$1 = tmp25314;
var inst_25256__$1 = tmp25313;
var inst_25257__$1 = tmp25312;
var inst_25258__$1 = inst_25266;
var state_25303__$1 = (function (){var statearr_25317 = state_25303;
(statearr_25317[(8)] = inst_25257__$1);

(statearr_25317[(9)] = inst_25258__$1);

(statearr_25317[(10)] = inst_25256__$1);

(statearr_25317[(12)] = inst_25255__$1);

(statearr_25317[(14)] = inst_25265);

return statearr_25317;
})();
var statearr_25318_25350 = state_25303__$1;
(statearr_25318_25350[(2)] = null);

(statearr_25318_25350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (22))){
var state_25303__$1 = state_25303;
var statearr_25319_25351 = state_25303__$1;
(statearr_25319_25351[(2)] = null);

(statearr_25319_25351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (6))){
var inst_25244 = (state_25303[(13)]);
var inst_25253 = f.call(null,inst_25244);
var inst_25254 = cljs.core.seq.call(null,inst_25253);
var inst_25255 = inst_25254;
var inst_25256 = null;
var inst_25257 = (0);
var inst_25258 = (0);
var state_25303__$1 = (function (){var statearr_25320 = state_25303;
(statearr_25320[(8)] = inst_25257);

(statearr_25320[(9)] = inst_25258);

(statearr_25320[(10)] = inst_25256);

(statearr_25320[(12)] = inst_25255);

return statearr_25320;
})();
var statearr_25321_25352 = state_25303__$1;
(statearr_25321_25352[(2)] = null);

(statearr_25321_25352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (17))){
var inst_25269 = (state_25303[(7)]);
var inst_25273 = cljs.core.chunk_first.call(null,inst_25269);
var inst_25274 = cljs.core.chunk_rest.call(null,inst_25269);
var inst_25275 = cljs.core.count.call(null,inst_25273);
var inst_25255 = inst_25274;
var inst_25256 = inst_25273;
var inst_25257 = inst_25275;
var inst_25258 = (0);
var state_25303__$1 = (function (){var statearr_25322 = state_25303;
(statearr_25322[(8)] = inst_25257);

(statearr_25322[(9)] = inst_25258);

(statearr_25322[(10)] = inst_25256);

(statearr_25322[(12)] = inst_25255);

return statearr_25322;
})();
var statearr_25323_25353 = state_25303__$1;
(statearr_25323_25353[(2)] = null);

(statearr_25323_25353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (3))){
var inst_25301 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25303__$1,inst_25301);
} else {
if((state_val_25304 === (12))){
var inst_25289 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
var statearr_25324_25354 = state_25303__$1;
(statearr_25324_25354[(2)] = inst_25289);

(statearr_25324_25354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (2))){
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25303__$1,(4),in$);
} else {
if((state_val_25304 === (23))){
var inst_25297 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
var statearr_25325_25355 = state_25303__$1;
(statearr_25325_25355[(2)] = inst_25297);

(statearr_25325_25355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (19))){
var inst_25284 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
var statearr_25326_25356 = state_25303__$1;
(statearr_25326_25356[(2)] = inst_25284);

(statearr_25326_25356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (11))){
var inst_25269 = (state_25303[(7)]);
var inst_25255 = (state_25303[(12)]);
var inst_25269__$1 = cljs.core.seq.call(null,inst_25255);
var state_25303__$1 = (function (){var statearr_25327 = state_25303;
(statearr_25327[(7)] = inst_25269__$1);

return statearr_25327;
})();
if(inst_25269__$1){
var statearr_25328_25357 = state_25303__$1;
(statearr_25328_25357[(1)] = (14));

} else {
var statearr_25329_25358 = state_25303__$1;
(statearr_25329_25358[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (9))){
var inst_25291 = (state_25303[(2)]);
var inst_25292 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25303__$1 = (function (){var statearr_25330 = state_25303;
(statearr_25330[(15)] = inst_25291);

return statearr_25330;
})();
if(cljs.core.truth_(inst_25292)){
var statearr_25331_25359 = state_25303__$1;
(statearr_25331_25359[(1)] = (21));

} else {
var statearr_25332_25360 = state_25303__$1;
(statearr_25332_25360[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (5))){
var inst_25247 = cljs.core.async.close_BANG_.call(null,out);
var state_25303__$1 = state_25303;
var statearr_25333_25361 = state_25303__$1;
(statearr_25333_25361[(2)] = inst_25247);

(statearr_25333_25361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (14))){
var inst_25269 = (state_25303[(7)]);
var inst_25271 = cljs.core.chunked_seq_QMARK_.call(null,inst_25269);
var state_25303__$1 = state_25303;
if(inst_25271){
var statearr_25334_25362 = state_25303__$1;
(statearr_25334_25362[(1)] = (17));

} else {
var statearr_25335_25363 = state_25303__$1;
(statearr_25335_25363[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (16))){
var inst_25287 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
var statearr_25336_25364 = state_25303__$1;
(statearr_25336_25364[(2)] = inst_25287);

(statearr_25336_25364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (10))){
var inst_25258 = (state_25303[(9)]);
var inst_25256 = (state_25303[(10)]);
var inst_25263 = cljs.core._nth.call(null,inst_25256,inst_25258);
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25303__$1,(13),out,inst_25263);
} else {
if((state_val_25304 === (18))){
var inst_25269 = (state_25303[(7)]);
var inst_25278 = cljs.core.first.call(null,inst_25269);
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25303__$1,(20),out,inst_25278);
} else {
if((state_val_25304 === (8))){
var inst_25257 = (state_25303[(8)]);
var inst_25258 = (state_25303[(9)]);
var inst_25260 = (inst_25258 < inst_25257);
var inst_25261 = inst_25260;
var state_25303__$1 = state_25303;
if(cljs.core.truth_(inst_25261)){
var statearr_25337_25365 = state_25303__$1;
(statearr_25337_25365[(1)] = (10));

} else {
var statearr_25338_25366 = state_25303__$1;
(statearr_25338_25366[(1)] = (11));

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
});})(c__23687__auto__))
;
return ((function (switch__23592__auto__,c__23687__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23593__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23593__auto____0 = (function (){
var statearr_25339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25339[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23593__auto__);

(statearr_25339[(1)] = (1));

return statearr_25339;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23593__auto____1 = (function (state_25303){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_25303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e25340){if((e25340 instanceof Object)){
var ex__23596__auto__ = e25340;
var statearr_25341_25367 = state_25303;
(statearr_25341_25367[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25368 = state_25303;
state_25303 = G__25368;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23593__auto__ = function(state_25303){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23593__auto____1.call(this,state_25303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23593__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23593__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto__))
})();
var state__23689__auto__ = (function (){var statearr_25342 = f__23688__auto__.call(null);
(statearr_25342[(6)] = c__23687__auto__);

return statearr_25342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto__))
);

return c__23687__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25370 = arguments.length;
switch (G__25370) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25373 = arguments.length;
switch (G__25373) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25376 = arguments.length;
switch (G__25376) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23687__auto___25423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___25423,out){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___25423,out){
return (function (state_25400){
var state_val_25401 = (state_25400[(1)]);
if((state_val_25401 === (7))){
var inst_25395 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25402_25424 = state_25400__$1;
(statearr_25402_25424[(2)] = inst_25395);

(statearr_25402_25424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (1))){
var inst_25377 = null;
var state_25400__$1 = (function (){var statearr_25403 = state_25400;
(statearr_25403[(7)] = inst_25377);

return statearr_25403;
})();
var statearr_25404_25425 = state_25400__$1;
(statearr_25404_25425[(2)] = null);

(statearr_25404_25425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (4))){
var inst_25380 = (state_25400[(8)]);
var inst_25380__$1 = (state_25400[(2)]);
var inst_25381 = (inst_25380__$1 == null);
var inst_25382 = cljs.core.not.call(null,inst_25381);
var state_25400__$1 = (function (){var statearr_25405 = state_25400;
(statearr_25405[(8)] = inst_25380__$1);

return statearr_25405;
})();
if(inst_25382){
var statearr_25406_25426 = state_25400__$1;
(statearr_25406_25426[(1)] = (5));

} else {
var statearr_25407_25427 = state_25400__$1;
(statearr_25407_25427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (6))){
var state_25400__$1 = state_25400;
var statearr_25408_25428 = state_25400__$1;
(statearr_25408_25428[(2)] = null);

(statearr_25408_25428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (3))){
var inst_25397 = (state_25400[(2)]);
var inst_25398 = cljs.core.async.close_BANG_.call(null,out);
var state_25400__$1 = (function (){var statearr_25409 = state_25400;
(statearr_25409[(9)] = inst_25397);

return statearr_25409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25400__$1,inst_25398);
} else {
if((state_val_25401 === (2))){
var state_25400__$1 = state_25400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25400__$1,(4),ch);
} else {
if((state_val_25401 === (11))){
var inst_25380 = (state_25400[(8)]);
var inst_25389 = (state_25400[(2)]);
var inst_25377 = inst_25380;
var state_25400__$1 = (function (){var statearr_25410 = state_25400;
(statearr_25410[(10)] = inst_25389);

(statearr_25410[(7)] = inst_25377);

return statearr_25410;
})();
var statearr_25411_25429 = state_25400__$1;
(statearr_25411_25429[(2)] = null);

(statearr_25411_25429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (9))){
var inst_25380 = (state_25400[(8)]);
var state_25400__$1 = state_25400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25400__$1,(11),out,inst_25380);
} else {
if((state_val_25401 === (5))){
var inst_25380 = (state_25400[(8)]);
var inst_25377 = (state_25400[(7)]);
var inst_25384 = cljs.core._EQ_.call(null,inst_25380,inst_25377);
var state_25400__$1 = state_25400;
if(inst_25384){
var statearr_25413_25430 = state_25400__$1;
(statearr_25413_25430[(1)] = (8));

} else {
var statearr_25414_25431 = state_25400__$1;
(statearr_25414_25431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (10))){
var inst_25392 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25415_25432 = state_25400__$1;
(statearr_25415_25432[(2)] = inst_25392);

(statearr_25415_25432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (8))){
var inst_25377 = (state_25400[(7)]);
var tmp25412 = inst_25377;
var inst_25377__$1 = tmp25412;
var state_25400__$1 = (function (){var statearr_25416 = state_25400;
(statearr_25416[(7)] = inst_25377__$1);

return statearr_25416;
})();
var statearr_25417_25433 = state_25400__$1;
(statearr_25417_25433[(2)] = null);

(statearr_25417_25433[(1)] = (2));


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
});})(c__23687__auto___25423,out))
;
return ((function (switch__23592__auto__,c__23687__auto___25423,out){
return (function() {
var cljs$core$async$state_machine__23593__auto__ = null;
var cljs$core$async$state_machine__23593__auto____0 = (function (){
var statearr_25418 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25418[(0)] = cljs$core$async$state_machine__23593__auto__);

(statearr_25418[(1)] = (1));

return statearr_25418;
});
var cljs$core$async$state_machine__23593__auto____1 = (function (state_25400){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_25400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e25419){if((e25419 instanceof Object)){
var ex__23596__auto__ = e25419;
var statearr_25420_25434 = state_25400;
(statearr_25420_25434[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25435 = state_25400;
state_25400 = G__25435;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$state_machine__23593__auto__ = function(state_25400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23593__auto____1.call(this,state_25400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23593__auto____0;
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23593__auto____1;
return cljs$core$async$state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___25423,out))
})();
var state__23689__auto__ = (function (){var statearr_25421 = f__23688__auto__.call(null);
(statearr_25421[(6)] = c__23687__auto___25423);

return statearr_25421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___25423,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25437 = arguments.length;
switch (G__25437) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23687__auto___25503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___25503,out){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___25503,out){
return (function (state_25475){
var state_val_25476 = (state_25475[(1)]);
if((state_val_25476 === (7))){
var inst_25471 = (state_25475[(2)]);
var state_25475__$1 = state_25475;
var statearr_25477_25504 = state_25475__$1;
(statearr_25477_25504[(2)] = inst_25471);

(statearr_25477_25504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25476 === (1))){
var inst_25438 = (new Array(n));
var inst_25439 = inst_25438;
var inst_25440 = (0);
var state_25475__$1 = (function (){var statearr_25478 = state_25475;
(statearr_25478[(7)] = inst_25440);

(statearr_25478[(8)] = inst_25439);

return statearr_25478;
})();
var statearr_25479_25505 = state_25475__$1;
(statearr_25479_25505[(2)] = null);

(statearr_25479_25505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25476 === (4))){
var inst_25443 = (state_25475[(9)]);
var inst_25443__$1 = (state_25475[(2)]);
var inst_25444 = (inst_25443__$1 == null);
var inst_25445 = cljs.core.not.call(null,inst_25444);
var state_25475__$1 = (function (){var statearr_25480 = state_25475;
(statearr_25480[(9)] = inst_25443__$1);

return statearr_25480;
})();
if(inst_25445){
var statearr_25481_25506 = state_25475__$1;
(statearr_25481_25506[(1)] = (5));

} else {
var statearr_25482_25507 = state_25475__$1;
(statearr_25482_25507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25476 === (15))){
var inst_25465 = (state_25475[(2)]);
var state_25475__$1 = state_25475;
var statearr_25483_25508 = state_25475__$1;
(statearr_25483_25508[(2)] = inst_25465);

(statearr_25483_25508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25476 === (13))){
var state_25475__$1 = state_25475;
var statearr_25484_25509 = state_25475__$1;
(statearr_25484_25509[(2)] = null);

(statearr_25484_25509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25476 === (6))){
var inst_25440 = (state_25475[(7)]);
var inst_25461 = (inst_25440 > (0));
var state_25475__$1 = state_25475;
if(cljs.core.truth_(inst_25461)){
var statearr_25485_25510 = state_25475__$1;
(statearr_25485_25510[(1)] = (12));

} else {
var statearr_25486_25511 = state_25475__$1;
(statearr_25486_25511[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25476 === (3))){
var inst_25473 = (state_25475[(2)]);
var state_25475__$1 = state_25475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25475__$1,inst_25473);
} else {
if((state_val_25476 === (12))){
var inst_25439 = (state_25475[(8)]);
var inst_25463 = cljs.core.vec.call(null,inst_25439);
var state_25475__$1 = state_25475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25475__$1,(15),out,inst_25463);
} else {
if((state_val_25476 === (2))){
var state_25475__$1 = state_25475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25475__$1,(4),ch);
} else {
if((state_val_25476 === (11))){
var inst_25455 = (state_25475[(2)]);
var inst_25456 = (new Array(n));
var inst_25439 = inst_25456;
var inst_25440 = (0);
var state_25475__$1 = (function (){var statearr_25487 = state_25475;
(statearr_25487[(10)] = inst_25455);

(statearr_25487[(7)] = inst_25440);

(statearr_25487[(8)] = inst_25439);

return statearr_25487;
})();
var statearr_25488_25512 = state_25475__$1;
(statearr_25488_25512[(2)] = null);

(statearr_25488_25512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25476 === (9))){
var inst_25439 = (state_25475[(8)]);
var inst_25453 = cljs.core.vec.call(null,inst_25439);
var state_25475__$1 = state_25475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25475__$1,(11),out,inst_25453);
} else {
if((state_val_25476 === (5))){
var inst_25448 = (state_25475[(11)]);
var inst_25440 = (state_25475[(7)]);
var inst_25443 = (state_25475[(9)]);
var inst_25439 = (state_25475[(8)]);
var inst_25447 = (inst_25439[inst_25440] = inst_25443);
var inst_25448__$1 = (inst_25440 + (1));
var inst_25449 = (inst_25448__$1 < n);
var state_25475__$1 = (function (){var statearr_25489 = state_25475;
(statearr_25489[(11)] = inst_25448__$1);

(statearr_25489[(12)] = inst_25447);

return statearr_25489;
})();
if(cljs.core.truth_(inst_25449)){
var statearr_25490_25513 = state_25475__$1;
(statearr_25490_25513[(1)] = (8));

} else {
var statearr_25491_25514 = state_25475__$1;
(statearr_25491_25514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25476 === (14))){
var inst_25468 = (state_25475[(2)]);
var inst_25469 = cljs.core.async.close_BANG_.call(null,out);
var state_25475__$1 = (function (){var statearr_25493 = state_25475;
(statearr_25493[(13)] = inst_25468);

return statearr_25493;
})();
var statearr_25494_25515 = state_25475__$1;
(statearr_25494_25515[(2)] = inst_25469);

(statearr_25494_25515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25476 === (10))){
var inst_25459 = (state_25475[(2)]);
var state_25475__$1 = state_25475;
var statearr_25495_25516 = state_25475__$1;
(statearr_25495_25516[(2)] = inst_25459);

(statearr_25495_25516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25476 === (8))){
var inst_25448 = (state_25475[(11)]);
var inst_25439 = (state_25475[(8)]);
var tmp25492 = inst_25439;
var inst_25439__$1 = tmp25492;
var inst_25440 = inst_25448;
var state_25475__$1 = (function (){var statearr_25496 = state_25475;
(statearr_25496[(7)] = inst_25440);

(statearr_25496[(8)] = inst_25439__$1);

return statearr_25496;
})();
var statearr_25497_25517 = state_25475__$1;
(statearr_25497_25517[(2)] = null);

(statearr_25497_25517[(1)] = (2));


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
});})(c__23687__auto___25503,out))
;
return ((function (switch__23592__auto__,c__23687__auto___25503,out){
return (function() {
var cljs$core$async$state_machine__23593__auto__ = null;
var cljs$core$async$state_machine__23593__auto____0 = (function (){
var statearr_25498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25498[(0)] = cljs$core$async$state_machine__23593__auto__);

(statearr_25498[(1)] = (1));

return statearr_25498;
});
var cljs$core$async$state_machine__23593__auto____1 = (function (state_25475){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_25475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e25499){if((e25499 instanceof Object)){
var ex__23596__auto__ = e25499;
var statearr_25500_25518 = state_25475;
(statearr_25500_25518[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25519 = state_25475;
state_25475 = G__25519;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$state_machine__23593__auto__ = function(state_25475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23593__auto____1.call(this,state_25475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23593__auto____0;
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23593__auto____1;
return cljs$core$async$state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___25503,out))
})();
var state__23689__auto__ = (function (){var statearr_25501 = f__23688__auto__.call(null);
(statearr_25501[(6)] = c__23687__auto___25503);

return statearr_25501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___25503,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25521 = arguments.length;
switch (G__25521) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23687__auto___25591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___25591,out){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___25591,out){
return (function (state_25563){
var state_val_25564 = (state_25563[(1)]);
if((state_val_25564 === (7))){
var inst_25559 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
var statearr_25565_25592 = state_25563__$1;
(statearr_25565_25592[(2)] = inst_25559);

(statearr_25565_25592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (1))){
var inst_25522 = [];
var inst_25523 = inst_25522;
var inst_25524 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25563__$1 = (function (){var statearr_25566 = state_25563;
(statearr_25566[(7)] = inst_25523);

(statearr_25566[(8)] = inst_25524);

return statearr_25566;
})();
var statearr_25567_25593 = state_25563__$1;
(statearr_25567_25593[(2)] = null);

(statearr_25567_25593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (4))){
var inst_25527 = (state_25563[(9)]);
var inst_25527__$1 = (state_25563[(2)]);
var inst_25528 = (inst_25527__$1 == null);
var inst_25529 = cljs.core.not.call(null,inst_25528);
var state_25563__$1 = (function (){var statearr_25568 = state_25563;
(statearr_25568[(9)] = inst_25527__$1);

return statearr_25568;
})();
if(inst_25529){
var statearr_25569_25594 = state_25563__$1;
(statearr_25569_25594[(1)] = (5));

} else {
var statearr_25570_25595 = state_25563__$1;
(statearr_25570_25595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (15))){
var inst_25553 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
var statearr_25571_25596 = state_25563__$1;
(statearr_25571_25596[(2)] = inst_25553);

(statearr_25571_25596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (13))){
var state_25563__$1 = state_25563;
var statearr_25572_25597 = state_25563__$1;
(statearr_25572_25597[(2)] = null);

(statearr_25572_25597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (6))){
var inst_25523 = (state_25563[(7)]);
var inst_25548 = inst_25523.length;
var inst_25549 = (inst_25548 > (0));
var state_25563__$1 = state_25563;
if(cljs.core.truth_(inst_25549)){
var statearr_25573_25598 = state_25563__$1;
(statearr_25573_25598[(1)] = (12));

} else {
var statearr_25574_25599 = state_25563__$1;
(statearr_25574_25599[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (3))){
var inst_25561 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25563__$1,inst_25561);
} else {
if((state_val_25564 === (12))){
var inst_25523 = (state_25563[(7)]);
var inst_25551 = cljs.core.vec.call(null,inst_25523);
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25563__$1,(15),out,inst_25551);
} else {
if((state_val_25564 === (2))){
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25563__$1,(4),ch);
} else {
if((state_val_25564 === (11))){
var inst_25531 = (state_25563[(10)]);
var inst_25527 = (state_25563[(9)]);
var inst_25541 = (state_25563[(2)]);
var inst_25542 = [];
var inst_25543 = inst_25542.push(inst_25527);
var inst_25523 = inst_25542;
var inst_25524 = inst_25531;
var state_25563__$1 = (function (){var statearr_25575 = state_25563;
(statearr_25575[(11)] = inst_25541);

(statearr_25575[(12)] = inst_25543);

(statearr_25575[(7)] = inst_25523);

(statearr_25575[(8)] = inst_25524);

return statearr_25575;
})();
var statearr_25576_25600 = state_25563__$1;
(statearr_25576_25600[(2)] = null);

(statearr_25576_25600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (9))){
var inst_25523 = (state_25563[(7)]);
var inst_25539 = cljs.core.vec.call(null,inst_25523);
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25563__$1,(11),out,inst_25539);
} else {
if((state_val_25564 === (5))){
var inst_25531 = (state_25563[(10)]);
var inst_25524 = (state_25563[(8)]);
var inst_25527 = (state_25563[(9)]);
var inst_25531__$1 = f.call(null,inst_25527);
var inst_25532 = cljs.core._EQ_.call(null,inst_25531__$1,inst_25524);
var inst_25533 = cljs.core.keyword_identical_QMARK_.call(null,inst_25524,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25534 = ((inst_25532) || (inst_25533));
var state_25563__$1 = (function (){var statearr_25577 = state_25563;
(statearr_25577[(10)] = inst_25531__$1);

return statearr_25577;
})();
if(cljs.core.truth_(inst_25534)){
var statearr_25578_25601 = state_25563__$1;
(statearr_25578_25601[(1)] = (8));

} else {
var statearr_25579_25602 = state_25563__$1;
(statearr_25579_25602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (14))){
var inst_25556 = (state_25563[(2)]);
var inst_25557 = cljs.core.async.close_BANG_.call(null,out);
var state_25563__$1 = (function (){var statearr_25581 = state_25563;
(statearr_25581[(13)] = inst_25556);

return statearr_25581;
})();
var statearr_25582_25603 = state_25563__$1;
(statearr_25582_25603[(2)] = inst_25557);

(statearr_25582_25603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (10))){
var inst_25546 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
var statearr_25583_25604 = state_25563__$1;
(statearr_25583_25604[(2)] = inst_25546);

(statearr_25583_25604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25564 === (8))){
var inst_25531 = (state_25563[(10)]);
var inst_25523 = (state_25563[(7)]);
var inst_25527 = (state_25563[(9)]);
var inst_25536 = inst_25523.push(inst_25527);
var tmp25580 = inst_25523;
var inst_25523__$1 = tmp25580;
var inst_25524 = inst_25531;
var state_25563__$1 = (function (){var statearr_25584 = state_25563;
(statearr_25584[(7)] = inst_25523__$1);

(statearr_25584[(14)] = inst_25536);

(statearr_25584[(8)] = inst_25524);

return statearr_25584;
})();
var statearr_25585_25605 = state_25563__$1;
(statearr_25585_25605[(2)] = null);

(statearr_25585_25605[(1)] = (2));


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
});})(c__23687__auto___25591,out))
;
return ((function (switch__23592__auto__,c__23687__auto___25591,out){
return (function() {
var cljs$core$async$state_machine__23593__auto__ = null;
var cljs$core$async$state_machine__23593__auto____0 = (function (){
var statearr_25586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25586[(0)] = cljs$core$async$state_machine__23593__auto__);

(statearr_25586[(1)] = (1));

return statearr_25586;
});
var cljs$core$async$state_machine__23593__auto____1 = (function (state_25563){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_25563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e25587){if((e25587 instanceof Object)){
var ex__23596__auto__ = e25587;
var statearr_25588_25606 = state_25563;
(statearr_25588_25606[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25607 = state_25563;
state_25563 = G__25607;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
cljs$core$async$state_machine__23593__auto__ = function(state_25563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23593__auto____1.call(this,state_25563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23593__auto____0;
cljs$core$async$state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23593__auto____1;
return cljs$core$async$state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___25591,out))
})();
var state__23689__auto__ = (function (){var statearr_25589 = f__23688__auto__.call(null);
(statearr_25589[(6)] = c__23687__auto___25591);

return statearr_25589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___25591,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1612339720598
