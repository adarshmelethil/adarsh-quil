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
var G__26245 = arguments.length;
switch (G__26245) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26246 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26246 = (function (f,blockable,meta26247){
this.f = f;
this.blockable = blockable;
this.meta26247 = meta26247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26248,meta26247__$1){
var self__ = this;
var _26248__$1 = this;
return (new cljs.core.async.t_cljs$core$async26246(self__.f,self__.blockable,meta26247__$1));
});

cljs.core.async.t_cljs$core$async26246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26248){
var self__ = this;
var _26248__$1 = this;
return self__.meta26247;
});

cljs.core.async.t_cljs$core$async26246.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26246.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26246.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26246.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26247","meta26247",-1976849003,null)], null);
});

cljs.core.async.t_cljs$core$async26246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26246";

cljs.core.async.t_cljs$core$async26246.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26246");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26246.
 */
cljs.core.async.__GT_t_cljs$core$async26246 = (function cljs$core$async$__GT_t_cljs$core$async26246(f__$1,blockable__$1,meta26247){
return (new cljs.core.async.t_cljs$core$async26246(f__$1,blockable__$1,meta26247));
});

}

return (new cljs.core.async.t_cljs$core$async26246(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26252 = arguments.length;
switch (G__26252) {
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
var G__26255 = arguments.length;
switch (G__26255) {
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
var G__26258 = arguments.length;
switch (G__26258) {
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
var val_26260 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26260);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26260,ret){
return (function (){
return fn1.call(null,val_26260);
});})(val_26260,ret))
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
var G__26262 = arguments.length;
switch (G__26262) {
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
var n__4607__auto___26264 = n;
var x_26265 = (0);
while(true){
if((x_26265 < n__4607__auto___26264)){
(a[x_26265] = (0));

var G__26266 = (x_26265 + (1));
x_26265 = G__26266;
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

var G__26267 = (i + (1));
i = G__26267;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26268 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26268 = (function (flag,meta26269){
this.flag = flag;
this.meta26269 = meta26269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26270,meta26269__$1){
var self__ = this;
var _26270__$1 = this;
return (new cljs.core.async.t_cljs$core$async26268(self__.flag,meta26269__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26270){
var self__ = this;
var _26270__$1 = this;
return self__.meta26269;
});})(flag))
;

cljs.core.async.t_cljs$core$async26268.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26268.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26268.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26269","meta26269",788299856,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26268.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26268";

cljs.core.async.t_cljs$core$async26268.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26268");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26268.
 */
cljs.core.async.__GT_t_cljs$core$async26268 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26268(flag__$1,meta26269){
return (new cljs.core.async.t_cljs$core$async26268(flag__$1,meta26269));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26268(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26271 = (function (flag,cb,meta26272){
this.flag = flag;
this.cb = cb;
this.meta26272 = meta26272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26273,meta26272__$1){
var self__ = this;
var _26273__$1 = this;
return (new cljs.core.async.t_cljs$core$async26271(self__.flag,self__.cb,meta26272__$1));
});

cljs.core.async.t_cljs$core$async26271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26273){
var self__ = this;
var _26273__$1 = this;
return self__.meta26272;
});

cljs.core.async.t_cljs$core$async26271.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26271.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26272","meta26272",-1592897224,null)], null);
});

cljs.core.async.t_cljs$core$async26271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26271";

cljs.core.async.t_cljs$core$async26271.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26271");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26271.
 */
cljs.core.async.__GT_t_cljs$core$async26271 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26271(flag__$1,cb__$1,meta26272){
return (new cljs.core.async.t_cljs$core$async26271(flag__$1,cb__$1,meta26272));
});

}

return (new cljs.core.async.t_cljs$core$async26271(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26274_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26274_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26275_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26275_SHARP_,port], null));
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
var G__26276 = (i + (1));
i = G__26276;
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
var len__4730__auto___26282 = arguments.length;
var i__4731__auto___26283 = (0);
while(true){
if((i__4731__auto___26283 < len__4730__auto___26282)){
args__4736__auto__.push((arguments[i__4731__auto___26283]));

var G__26284 = (i__4731__auto___26283 + (1));
i__4731__auto___26283 = G__26284;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26279){
var map__26280 = p__26279;
var map__26280__$1 = (((((!((map__26280 == null))))?(((((map__26280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26280):map__26280);
var opts = map__26280__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26277){
var G__26278 = cljs.core.first.call(null,seq26277);
var seq26277__$1 = cljs.core.next.call(null,seq26277);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26278,seq26277__$1);
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
var G__26286 = arguments.length;
switch (G__26286) {
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
var c__24321__auto___26332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___26332){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___26332){
return (function (state_26310){
var state_val_26311 = (state_26310[(1)]);
if((state_val_26311 === (7))){
var inst_26306 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26312_26333 = state_26310__$1;
(statearr_26312_26333[(2)] = inst_26306);

(statearr_26312_26333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (1))){
var state_26310__$1 = state_26310;
var statearr_26313_26334 = state_26310__$1;
(statearr_26313_26334[(2)] = null);

(statearr_26313_26334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (4))){
var inst_26289 = (state_26310[(7)]);
var inst_26289__$1 = (state_26310[(2)]);
var inst_26290 = (inst_26289__$1 == null);
var state_26310__$1 = (function (){var statearr_26314 = state_26310;
(statearr_26314[(7)] = inst_26289__$1);

return statearr_26314;
})();
if(cljs.core.truth_(inst_26290)){
var statearr_26315_26335 = state_26310__$1;
(statearr_26315_26335[(1)] = (5));

} else {
var statearr_26316_26336 = state_26310__$1;
(statearr_26316_26336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (13))){
var state_26310__$1 = state_26310;
var statearr_26317_26337 = state_26310__$1;
(statearr_26317_26337[(2)] = null);

(statearr_26317_26337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (6))){
var inst_26289 = (state_26310[(7)]);
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26310__$1,(11),to,inst_26289);
} else {
if((state_val_26311 === (3))){
var inst_26308 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26310__$1,inst_26308);
} else {
if((state_val_26311 === (12))){
var state_26310__$1 = state_26310;
var statearr_26318_26338 = state_26310__$1;
(statearr_26318_26338[(2)] = null);

(statearr_26318_26338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (2))){
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26310__$1,(4),from);
} else {
if((state_val_26311 === (11))){
var inst_26299 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
if(cljs.core.truth_(inst_26299)){
var statearr_26319_26339 = state_26310__$1;
(statearr_26319_26339[(1)] = (12));

} else {
var statearr_26320_26340 = state_26310__$1;
(statearr_26320_26340[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (9))){
var state_26310__$1 = state_26310;
var statearr_26321_26341 = state_26310__$1;
(statearr_26321_26341[(2)] = null);

(statearr_26321_26341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (5))){
var state_26310__$1 = state_26310;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26322_26342 = state_26310__$1;
(statearr_26322_26342[(1)] = (8));

} else {
var statearr_26323_26343 = state_26310__$1;
(statearr_26323_26343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (14))){
var inst_26304 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26324_26344 = state_26310__$1;
(statearr_26324_26344[(2)] = inst_26304);

(statearr_26324_26344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (10))){
var inst_26296 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26325_26345 = state_26310__$1;
(statearr_26325_26345[(2)] = inst_26296);

(statearr_26325_26345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (8))){
var inst_26293 = cljs.core.async.close_BANG_.call(null,to);
var state_26310__$1 = state_26310;
var statearr_26326_26346 = state_26310__$1;
(statearr_26326_26346[(2)] = inst_26293);

(statearr_26326_26346[(1)] = (10));


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
});})(c__24321__auto___26332))
;
return ((function (switch__24154__auto__,c__24321__auto___26332){
return (function() {
var cljs$core$async$state_machine__24155__auto__ = null;
var cljs$core$async$state_machine__24155__auto____0 = (function (){
var statearr_26327 = [null,null,null,null,null,null,null,null];
(statearr_26327[(0)] = cljs$core$async$state_machine__24155__auto__);

(statearr_26327[(1)] = (1));

return statearr_26327;
});
var cljs$core$async$state_machine__24155__auto____1 = (function (state_26310){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_26310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e26328){if((e26328 instanceof Object)){
var ex__24158__auto__ = e26328;
var statearr_26329_26347 = state_26310;
(statearr_26329_26347[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26348 = state_26310;
state_26310 = G__26348;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$state_machine__24155__auto__ = function(state_26310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24155__auto____1.call(this,state_26310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24155__auto____0;
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24155__auto____1;
return cljs$core$async$state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___26332))
})();
var state__24323__auto__ = (function (){var statearr_26330 = f__24322__auto__.call(null);
(statearr_26330[(6)] = c__24321__auto___26332);

return statearr_26330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___26332))
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
return (function (p__26349){
var vec__26350 = p__26349;
var v = cljs.core.nth.call(null,vec__26350,(0),null);
var p = cljs.core.nth.call(null,vec__26350,(1),null);
var job = vec__26350;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24321__auto___26521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___26521,res,vec__26350,v,p,job,jobs,results){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___26521,res,vec__26350,v,p,job,jobs,results){
return (function (state_26357){
var state_val_26358 = (state_26357[(1)]);
if((state_val_26358 === (1))){
var state_26357__$1 = state_26357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26357__$1,(2),res,v);
} else {
if((state_val_26358 === (2))){
var inst_26354 = (state_26357[(2)]);
var inst_26355 = cljs.core.async.close_BANG_.call(null,res);
var state_26357__$1 = (function (){var statearr_26359 = state_26357;
(statearr_26359[(7)] = inst_26354);

return statearr_26359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26357__$1,inst_26355);
} else {
return null;
}
}
});})(c__24321__auto___26521,res,vec__26350,v,p,job,jobs,results))
;
return ((function (switch__24154__auto__,c__24321__auto___26521,res,vec__26350,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0 = (function (){
var statearr_26360 = [null,null,null,null,null,null,null,null];
(statearr_26360[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__);

(statearr_26360[(1)] = (1));

return statearr_26360;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1 = (function (state_26357){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_26357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e26361){if((e26361 instanceof Object)){
var ex__24158__auto__ = e26361;
var statearr_26362_26522 = state_26357;
(statearr_26362_26522[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26523 = state_26357;
state_26357 = G__26523;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__ = function(state_26357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1.call(this,state_26357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___26521,res,vec__26350,v,p,job,jobs,results))
})();
var state__24323__auto__ = (function (){var statearr_26363 = f__24322__auto__.call(null);
(statearr_26363[(6)] = c__24321__auto___26521);

return statearr_26363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___26521,res,vec__26350,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26364){
var vec__26365 = p__26364;
var v = cljs.core.nth.call(null,vec__26365,(0),null);
var p = cljs.core.nth.call(null,vec__26365,(1),null);
var job = vec__26365;
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
var n__4607__auto___26524 = n;
var __26525 = (0);
while(true){
if((__26525 < n__4607__auto___26524)){
var G__26368_26526 = type;
var G__26368_26527__$1 = (((G__26368_26526 instanceof cljs.core.Keyword))?G__26368_26526.fqn:null);
switch (G__26368_26527__$1) {
case "compute":
var c__24321__auto___26529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26525,c__24321__auto___26529,G__26368_26526,G__26368_26527__$1,n__4607__auto___26524,jobs,results,process,async){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (__26525,c__24321__auto___26529,G__26368_26526,G__26368_26527__$1,n__4607__auto___26524,jobs,results,process,async){
return (function (state_26381){
var state_val_26382 = (state_26381[(1)]);
if((state_val_26382 === (1))){
var state_26381__$1 = state_26381;
var statearr_26383_26530 = state_26381__$1;
(statearr_26383_26530[(2)] = null);

(statearr_26383_26530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (2))){
var state_26381__$1 = state_26381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26381__$1,(4),jobs);
} else {
if((state_val_26382 === (3))){
var inst_26379 = (state_26381[(2)]);
var state_26381__$1 = state_26381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26381__$1,inst_26379);
} else {
if((state_val_26382 === (4))){
var inst_26371 = (state_26381[(2)]);
var inst_26372 = process.call(null,inst_26371);
var state_26381__$1 = state_26381;
if(cljs.core.truth_(inst_26372)){
var statearr_26384_26531 = state_26381__$1;
(statearr_26384_26531[(1)] = (5));

} else {
var statearr_26385_26532 = state_26381__$1;
(statearr_26385_26532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (5))){
var state_26381__$1 = state_26381;
var statearr_26386_26533 = state_26381__$1;
(statearr_26386_26533[(2)] = null);

(statearr_26386_26533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (6))){
var state_26381__$1 = state_26381;
var statearr_26387_26534 = state_26381__$1;
(statearr_26387_26534[(2)] = null);

(statearr_26387_26534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (7))){
var inst_26377 = (state_26381[(2)]);
var state_26381__$1 = state_26381;
var statearr_26388_26535 = state_26381__$1;
(statearr_26388_26535[(2)] = inst_26377);

(statearr_26388_26535[(1)] = (3));


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
});})(__26525,c__24321__auto___26529,G__26368_26526,G__26368_26527__$1,n__4607__auto___26524,jobs,results,process,async))
;
return ((function (__26525,switch__24154__auto__,c__24321__auto___26529,G__26368_26526,G__26368_26527__$1,n__4607__auto___26524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0 = (function (){
var statearr_26389 = [null,null,null,null,null,null,null];
(statearr_26389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__);

(statearr_26389[(1)] = (1));

return statearr_26389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1 = (function (state_26381){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_26381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e26390){if((e26390 instanceof Object)){
var ex__24158__auto__ = e26390;
var statearr_26391_26536 = state_26381;
(statearr_26391_26536[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26537 = state_26381;
state_26381 = G__26537;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__ = function(state_26381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1.call(this,state_26381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__;
})()
;})(__26525,switch__24154__auto__,c__24321__auto___26529,G__26368_26526,G__26368_26527__$1,n__4607__auto___26524,jobs,results,process,async))
})();
var state__24323__auto__ = (function (){var statearr_26392 = f__24322__auto__.call(null);
(statearr_26392[(6)] = c__24321__auto___26529);

return statearr_26392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(__26525,c__24321__auto___26529,G__26368_26526,G__26368_26527__$1,n__4607__auto___26524,jobs,results,process,async))
);


break;
case "async":
var c__24321__auto___26538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26525,c__24321__auto___26538,G__26368_26526,G__26368_26527__$1,n__4607__auto___26524,jobs,results,process,async){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (__26525,c__24321__auto___26538,G__26368_26526,G__26368_26527__$1,n__4607__auto___26524,jobs,results,process,async){
return (function (state_26405){
var state_val_26406 = (state_26405[(1)]);
if((state_val_26406 === (1))){
var state_26405__$1 = state_26405;
var statearr_26407_26539 = state_26405__$1;
(statearr_26407_26539[(2)] = null);

(statearr_26407_26539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26406 === (2))){
var state_26405__$1 = state_26405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26405__$1,(4),jobs);
} else {
if((state_val_26406 === (3))){
var inst_26403 = (state_26405[(2)]);
var state_26405__$1 = state_26405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26405__$1,inst_26403);
} else {
if((state_val_26406 === (4))){
var inst_26395 = (state_26405[(2)]);
var inst_26396 = async.call(null,inst_26395);
var state_26405__$1 = state_26405;
if(cljs.core.truth_(inst_26396)){
var statearr_26408_26540 = state_26405__$1;
(statearr_26408_26540[(1)] = (5));

} else {
var statearr_26409_26541 = state_26405__$1;
(statearr_26409_26541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26406 === (5))){
var state_26405__$1 = state_26405;
var statearr_26410_26542 = state_26405__$1;
(statearr_26410_26542[(2)] = null);

(statearr_26410_26542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26406 === (6))){
var state_26405__$1 = state_26405;
var statearr_26411_26543 = state_26405__$1;
(statearr_26411_26543[(2)] = null);

(statearr_26411_26543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26406 === (7))){
var inst_26401 = (state_26405[(2)]);
var state_26405__$1 = state_26405;
var statearr_26412_26544 = state_26405__$1;
(statearr_26412_26544[(2)] = inst_26401);

(statearr_26412_26544[(1)] = (3));


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
});})(__26525,c__24321__auto___26538,G__26368_26526,G__26368_26527__$1,n__4607__auto___26524,jobs,results,process,async))
;
return ((function (__26525,switch__24154__auto__,c__24321__auto___26538,G__26368_26526,G__26368_26527__$1,n__4607__auto___26524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0 = (function (){
var statearr_26413 = [null,null,null,null,null,null,null];
(statearr_26413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__);

(statearr_26413[(1)] = (1));

return statearr_26413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1 = (function (state_26405){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_26405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e26414){if((e26414 instanceof Object)){
var ex__24158__auto__ = e26414;
var statearr_26415_26545 = state_26405;
(statearr_26415_26545[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26546 = state_26405;
state_26405 = G__26546;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__ = function(state_26405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1.call(this,state_26405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__;
})()
;})(__26525,switch__24154__auto__,c__24321__auto___26538,G__26368_26526,G__26368_26527__$1,n__4607__auto___26524,jobs,results,process,async))
})();
var state__24323__auto__ = (function (){var statearr_26416 = f__24322__auto__.call(null);
(statearr_26416[(6)] = c__24321__auto___26538);

return statearr_26416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(__26525,c__24321__auto___26538,G__26368_26526,G__26368_26527__$1,n__4607__auto___26524,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26368_26527__$1)].join('')));

}

var G__26547 = (__26525 + (1));
__26525 = G__26547;
continue;
} else {
}
break;
}

var c__24321__auto___26548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___26548,jobs,results,process,async){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___26548,jobs,results,process,async){
return (function (state_26438){
var state_val_26439 = (state_26438[(1)]);
if((state_val_26439 === (7))){
var inst_26434 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
var statearr_26440_26549 = state_26438__$1;
(statearr_26440_26549[(2)] = inst_26434);

(statearr_26440_26549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (1))){
var state_26438__$1 = state_26438;
var statearr_26441_26550 = state_26438__$1;
(statearr_26441_26550[(2)] = null);

(statearr_26441_26550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (4))){
var inst_26419 = (state_26438[(7)]);
var inst_26419__$1 = (state_26438[(2)]);
var inst_26420 = (inst_26419__$1 == null);
var state_26438__$1 = (function (){var statearr_26442 = state_26438;
(statearr_26442[(7)] = inst_26419__$1);

return statearr_26442;
})();
if(cljs.core.truth_(inst_26420)){
var statearr_26443_26551 = state_26438__$1;
(statearr_26443_26551[(1)] = (5));

} else {
var statearr_26444_26552 = state_26438__$1;
(statearr_26444_26552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (6))){
var inst_26424 = (state_26438[(8)]);
var inst_26419 = (state_26438[(7)]);
var inst_26424__$1 = cljs.core.async.chan.call(null,(1));
var inst_26425 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26426 = [inst_26419,inst_26424__$1];
var inst_26427 = (new cljs.core.PersistentVector(null,2,(5),inst_26425,inst_26426,null));
var state_26438__$1 = (function (){var statearr_26445 = state_26438;
(statearr_26445[(8)] = inst_26424__$1);

return statearr_26445;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26438__$1,(8),jobs,inst_26427);
} else {
if((state_val_26439 === (3))){
var inst_26436 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26438__$1,inst_26436);
} else {
if((state_val_26439 === (2))){
var state_26438__$1 = state_26438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26438__$1,(4),from);
} else {
if((state_val_26439 === (9))){
var inst_26431 = (state_26438[(2)]);
var state_26438__$1 = (function (){var statearr_26446 = state_26438;
(statearr_26446[(9)] = inst_26431);

return statearr_26446;
})();
var statearr_26447_26553 = state_26438__$1;
(statearr_26447_26553[(2)] = null);

(statearr_26447_26553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (5))){
var inst_26422 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26438__$1 = state_26438;
var statearr_26448_26554 = state_26438__$1;
(statearr_26448_26554[(2)] = inst_26422);

(statearr_26448_26554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (8))){
var inst_26424 = (state_26438[(8)]);
var inst_26429 = (state_26438[(2)]);
var state_26438__$1 = (function (){var statearr_26449 = state_26438;
(statearr_26449[(10)] = inst_26429);

return statearr_26449;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26438__$1,(9),results,inst_26424);
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
});})(c__24321__auto___26548,jobs,results,process,async))
;
return ((function (switch__24154__auto__,c__24321__auto___26548,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0 = (function (){
var statearr_26450 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__);

(statearr_26450[(1)] = (1));

return statearr_26450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1 = (function (state_26438){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_26438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e26451){if((e26451 instanceof Object)){
var ex__24158__auto__ = e26451;
var statearr_26452_26555 = state_26438;
(statearr_26452_26555[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26556 = state_26438;
state_26438 = G__26556;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__ = function(state_26438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1.call(this,state_26438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___26548,jobs,results,process,async))
})();
var state__24323__auto__ = (function (){var statearr_26453 = f__24322__auto__.call(null);
(statearr_26453[(6)] = c__24321__auto___26548);

return statearr_26453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___26548,jobs,results,process,async))
);


var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__,jobs,results,process,async){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto__,jobs,results,process,async){
return (function (state_26491){
var state_val_26492 = (state_26491[(1)]);
if((state_val_26492 === (7))){
var inst_26487 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26493_26557 = state_26491__$1;
(statearr_26493_26557[(2)] = inst_26487);

(statearr_26493_26557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (20))){
var state_26491__$1 = state_26491;
var statearr_26494_26558 = state_26491__$1;
(statearr_26494_26558[(2)] = null);

(statearr_26494_26558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (1))){
var state_26491__$1 = state_26491;
var statearr_26495_26559 = state_26491__$1;
(statearr_26495_26559[(2)] = null);

(statearr_26495_26559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (4))){
var inst_26456 = (state_26491[(7)]);
var inst_26456__$1 = (state_26491[(2)]);
var inst_26457 = (inst_26456__$1 == null);
var state_26491__$1 = (function (){var statearr_26496 = state_26491;
(statearr_26496[(7)] = inst_26456__$1);

return statearr_26496;
})();
if(cljs.core.truth_(inst_26457)){
var statearr_26497_26560 = state_26491__$1;
(statearr_26497_26560[(1)] = (5));

} else {
var statearr_26498_26561 = state_26491__$1;
(statearr_26498_26561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (15))){
var inst_26469 = (state_26491[(8)]);
var state_26491__$1 = state_26491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26491__$1,(18),to,inst_26469);
} else {
if((state_val_26492 === (21))){
var inst_26482 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26499_26562 = state_26491__$1;
(statearr_26499_26562[(2)] = inst_26482);

(statearr_26499_26562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (13))){
var inst_26484 = (state_26491[(2)]);
var state_26491__$1 = (function (){var statearr_26500 = state_26491;
(statearr_26500[(9)] = inst_26484);

return statearr_26500;
})();
var statearr_26501_26563 = state_26491__$1;
(statearr_26501_26563[(2)] = null);

(statearr_26501_26563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (6))){
var inst_26456 = (state_26491[(7)]);
var state_26491__$1 = state_26491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26491__$1,(11),inst_26456);
} else {
if((state_val_26492 === (17))){
var inst_26477 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
if(cljs.core.truth_(inst_26477)){
var statearr_26502_26564 = state_26491__$1;
(statearr_26502_26564[(1)] = (19));

} else {
var statearr_26503_26565 = state_26491__$1;
(statearr_26503_26565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (3))){
var inst_26489 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26491__$1,inst_26489);
} else {
if((state_val_26492 === (12))){
var inst_26466 = (state_26491[(10)]);
var state_26491__$1 = state_26491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26491__$1,(14),inst_26466);
} else {
if((state_val_26492 === (2))){
var state_26491__$1 = state_26491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26491__$1,(4),results);
} else {
if((state_val_26492 === (19))){
var state_26491__$1 = state_26491;
var statearr_26504_26566 = state_26491__$1;
(statearr_26504_26566[(2)] = null);

(statearr_26504_26566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (11))){
var inst_26466 = (state_26491[(2)]);
var state_26491__$1 = (function (){var statearr_26505 = state_26491;
(statearr_26505[(10)] = inst_26466);

return statearr_26505;
})();
var statearr_26506_26567 = state_26491__$1;
(statearr_26506_26567[(2)] = null);

(statearr_26506_26567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (9))){
var state_26491__$1 = state_26491;
var statearr_26507_26568 = state_26491__$1;
(statearr_26507_26568[(2)] = null);

(statearr_26507_26568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (5))){
var state_26491__$1 = state_26491;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26508_26569 = state_26491__$1;
(statearr_26508_26569[(1)] = (8));

} else {
var statearr_26509_26570 = state_26491__$1;
(statearr_26509_26570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (14))){
var inst_26469 = (state_26491[(8)]);
var inst_26471 = (state_26491[(11)]);
var inst_26469__$1 = (state_26491[(2)]);
var inst_26470 = (inst_26469__$1 == null);
var inst_26471__$1 = cljs.core.not.call(null,inst_26470);
var state_26491__$1 = (function (){var statearr_26510 = state_26491;
(statearr_26510[(8)] = inst_26469__$1);

(statearr_26510[(11)] = inst_26471__$1);

return statearr_26510;
})();
if(inst_26471__$1){
var statearr_26511_26571 = state_26491__$1;
(statearr_26511_26571[(1)] = (15));

} else {
var statearr_26512_26572 = state_26491__$1;
(statearr_26512_26572[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (16))){
var inst_26471 = (state_26491[(11)]);
var state_26491__$1 = state_26491;
var statearr_26513_26573 = state_26491__$1;
(statearr_26513_26573[(2)] = inst_26471);

(statearr_26513_26573[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (10))){
var inst_26463 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26514_26574 = state_26491__$1;
(statearr_26514_26574[(2)] = inst_26463);

(statearr_26514_26574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (18))){
var inst_26474 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26515_26575 = state_26491__$1;
(statearr_26515_26575[(2)] = inst_26474);

(statearr_26515_26575[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (8))){
var inst_26460 = cljs.core.async.close_BANG_.call(null,to);
var state_26491__$1 = state_26491;
var statearr_26516_26576 = state_26491__$1;
(statearr_26516_26576[(2)] = inst_26460);

(statearr_26516_26576[(1)] = (10));


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
});})(c__24321__auto__,jobs,results,process,async))
;
return ((function (switch__24154__auto__,c__24321__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0 = (function (){
var statearr_26517 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__);

(statearr_26517[(1)] = (1));

return statearr_26517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1 = (function (state_26491){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_26491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e26518){if((e26518 instanceof Object)){
var ex__24158__auto__ = e26518;
var statearr_26519_26577 = state_26491;
(statearr_26519_26577[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26578 = state_26491;
state_26491 = G__26578;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__ = function(state_26491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1.call(this,state_26491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto__,jobs,results,process,async))
})();
var state__24323__auto__ = (function (){var statearr_26520 = f__24322__auto__.call(null);
(statearr_26520[(6)] = c__24321__auto__);

return statearr_26520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__,jobs,results,process,async))
);

return c__24321__auto__;
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
var G__26580 = arguments.length;
switch (G__26580) {
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
var G__26583 = arguments.length;
switch (G__26583) {
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
var G__26586 = arguments.length;
switch (G__26586) {
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
var c__24321__auto___26635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___26635,tc,fc){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___26635,tc,fc){
return (function (state_26612){
var state_val_26613 = (state_26612[(1)]);
if((state_val_26613 === (7))){
var inst_26608 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26614_26636 = state_26612__$1;
(statearr_26614_26636[(2)] = inst_26608);

(statearr_26614_26636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (1))){
var state_26612__$1 = state_26612;
var statearr_26615_26637 = state_26612__$1;
(statearr_26615_26637[(2)] = null);

(statearr_26615_26637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (4))){
var inst_26589 = (state_26612[(7)]);
var inst_26589__$1 = (state_26612[(2)]);
var inst_26590 = (inst_26589__$1 == null);
var state_26612__$1 = (function (){var statearr_26616 = state_26612;
(statearr_26616[(7)] = inst_26589__$1);

return statearr_26616;
})();
if(cljs.core.truth_(inst_26590)){
var statearr_26617_26638 = state_26612__$1;
(statearr_26617_26638[(1)] = (5));

} else {
var statearr_26618_26639 = state_26612__$1;
(statearr_26618_26639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (13))){
var state_26612__$1 = state_26612;
var statearr_26619_26640 = state_26612__$1;
(statearr_26619_26640[(2)] = null);

(statearr_26619_26640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (6))){
var inst_26589 = (state_26612[(7)]);
var inst_26595 = p.call(null,inst_26589);
var state_26612__$1 = state_26612;
if(cljs.core.truth_(inst_26595)){
var statearr_26620_26641 = state_26612__$1;
(statearr_26620_26641[(1)] = (9));

} else {
var statearr_26621_26642 = state_26612__$1;
(statearr_26621_26642[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (3))){
var inst_26610 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26612__$1,inst_26610);
} else {
if((state_val_26613 === (12))){
var state_26612__$1 = state_26612;
var statearr_26622_26643 = state_26612__$1;
(statearr_26622_26643[(2)] = null);

(statearr_26622_26643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (2))){
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26612__$1,(4),ch);
} else {
if((state_val_26613 === (11))){
var inst_26589 = (state_26612[(7)]);
var inst_26599 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26612__$1,(8),inst_26599,inst_26589);
} else {
if((state_val_26613 === (9))){
var state_26612__$1 = state_26612;
var statearr_26623_26644 = state_26612__$1;
(statearr_26623_26644[(2)] = tc);

(statearr_26623_26644[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (5))){
var inst_26592 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26593 = cljs.core.async.close_BANG_.call(null,fc);
var state_26612__$1 = (function (){var statearr_26624 = state_26612;
(statearr_26624[(8)] = inst_26592);

return statearr_26624;
})();
var statearr_26625_26645 = state_26612__$1;
(statearr_26625_26645[(2)] = inst_26593);

(statearr_26625_26645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (14))){
var inst_26606 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26626_26646 = state_26612__$1;
(statearr_26626_26646[(2)] = inst_26606);

(statearr_26626_26646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (10))){
var state_26612__$1 = state_26612;
var statearr_26627_26647 = state_26612__$1;
(statearr_26627_26647[(2)] = fc);

(statearr_26627_26647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (8))){
var inst_26601 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
if(cljs.core.truth_(inst_26601)){
var statearr_26628_26648 = state_26612__$1;
(statearr_26628_26648[(1)] = (12));

} else {
var statearr_26629_26649 = state_26612__$1;
(statearr_26629_26649[(1)] = (13));

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
});})(c__24321__auto___26635,tc,fc))
;
return ((function (switch__24154__auto__,c__24321__auto___26635,tc,fc){
return (function() {
var cljs$core$async$state_machine__24155__auto__ = null;
var cljs$core$async$state_machine__24155__auto____0 = (function (){
var statearr_26630 = [null,null,null,null,null,null,null,null,null];
(statearr_26630[(0)] = cljs$core$async$state_machine__24155__auto__);

(statearr_26630[(1)] = (1));

return statearr_26630;
});
var cljs$core$async$state_machine__24155__auto____1 = (function (state_26612){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_26612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e26631){if((e26631 instanceof Object)){
var ex__24158__auto__ = e26631;
var statearr_26632_26650 = state_26612;
(statearr_26632_26650[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26651 = state_26612;
state_26612 = G__26651;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$state_machine__24155__auto__ = function(state_26612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24155__auto____1.call(this,state_26612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24155__auto____0;
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24155__auto____1;
return cljs$core$async$state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___26635,tc,fc))
})();
var state__24323__auto__ = (function (){var statearr_26633 = f__24322__auto__.call(null);
(statearr_26633[(6)] = c__24321__auto___26635);

return statearr_26633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___26635,tc,fc))
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
var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto__){
return (function (state_26672){
var state_val_26673 = (state_26672[(1)]);
if((state_val_26673 === (7))){
var inst_26668 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26674_26692 = state_26672__$1;
(statearr_26674_26692[(2)] = inst_26668);

(statearr_26674_26692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (1))){
var inst_26652 = init;
var state_26672__$1 = (function (){var statearr_26675 = state_26672;
(statearr_26675[(7)] = inst_26652);

return statearr_26675;
})();
var statearr_26676_26693 = state_26672__$1;
(statearr_26676_26693[(2)] = null);

(statearr_26676_26693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (4))){
var inst_26655 = (state_26672[(8)]);
var inst_26655__$1 = (state_26672[(2)]);
var inst_26656 = (inst_26655__$1 == null);
var state_26672__$1 = (function (){var statearr_26677 = state_26672;
(statearr_26677[(8)] = inst_26655__$1);

return statearr_26677;
})();
if(cljs.core.truth_(inst_26656)){
var statearr_26678_26694 = state_26672__$1;
(statearr_26678_26694[(1)] = (5));

} else {
var statearr_26679_26695 = state_26672__$1;
(statearr_26679_26695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (6))){
var inst_26652 = (state_26672[(7)]);
var inst_26659 = (state_26672[(9)]);
var inst_26655 = (state_26672[(8)]);
var inst_26659__$1 = f.call(null,inst_26652,inst_26655);
var inst_26660 = cljs.core.reduced_QMARK_.call(null,inst_26659__$1);
var state_26672__$1 = (function (){var statearr_26680 = state_26672;
(statearr_26680[(9)] = inst_26659__$1);

return statearr_26680;
})();
if(inst_26660){
var statearr_26681_26696 = state_26672__$1;
(statearr_26681_26696[(1)] = (8));

} else {
var statearr_26682_26697 = state_26672__$1;
(statearr_26682_26697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (3))){
var inst_26670 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26672__$1,inst_26670);
} else {
if((state_val_26673 === (2))){
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26672__$1,(4),ch);
} else {
if((state_val_26673 === (9))){
var inst_26659 = (state_26672[(9)]);
var inst_26652 = inst_26659;
var state_26672__$1 = (function (){var statearr_26683 = state_26672;
(statearr_26683[(7)] = inst_26652);

return statearr_26683;
})();
var statearr_26684_26698 = state_26672__$1;
(statearr_26684_26698[(2)] = null);

(statearr_26684_26698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (5))){
var inst_26652 = (state_26672[(7)]);
var state_26672__$1 = state_26672;
var statearr_26685_26699 = state_26672__$1;
(statearr_26685_26699[(2)] = inst_26652);

(statearr_26685_26699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (10))){
var inst_26666 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26686_26700 = state_26672__$1;
(statearr_26686_26700[(2)] = inst_26666);

(statearr_26686_26700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (8))){
var inst_26659 = (state_26672[(9)]);
var inst_26662 = cljs.core.deref.call(null,inst_26659);
var state_26672__$1 = state_26672;
var statearr_26687_26701 = state_26672__$1;
(statearr_26687_26701[(2)] = inst_26662);

(statearr_26687_26701[(1)] = (10));


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
});})(c__24321__auto__))
;
return ((function (switch__24154__auto__,c__24321__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24155__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24155__auto____0 = (function (){
var statearr_26688 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26688[(0)] = cljs$core$async$reduce_$_state_machine__24155__auto__);

(statearr_26688[(1)] = (1));

return statearr_26688;
});
var cljs$core$async$reduce_$_state_machine__24155__auto____1 = (function (state_26672){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_26672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e26689){if((e26689 instanceof Object)){
var ex__24158__auto__ = e26689;
var statearr_26690_26702 = state_26672;
(statearr_26690_26702[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26703 = state_26672;
state_26672 = G__26703;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24155__auto__ = function(state_26672){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24155__auto____1.call(this,state_26672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24155__auto____0;
cljs$core$async$reduce_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24155__auto____1;
return cljs$core$async$reduce_$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto__))
})();
var state__24323__auto__ = (function (){var statearr_26691 = f__24322__auto__.call(null);
(statearr_26691[(6)] = c__24321__auto__);

return statearr_26691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__))
);

return c__24321__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__,f__$1){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto__,f__$1){
return (function (state_26709){
var state_val_26710 = (state_26709[(1)]);
if((state_val_26710 === (1))){
var inst_26704 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26709__$1 = state_26709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26709__$1,(2),inst_26704);
} else {
if((state_val_26710 === (2))){
var inst_26706 = (state_26709[(2)]);
var inst_26707 = f__$1.call(null,inst_26706);
var state_26709__$1 = state_26709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26709__$1,inst_26707);
} else {
return null;
}
}
});})(c__24321__auto__,f__$1))
;
return ((function (switch__24154__auto__,c__24321__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24155__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24155__auto____0 = (function (){
var statearr_26711 = [null,null,null,null,null,null,null];
(statearr_26711[(0)] = cljs$core$async$transduce_$_state_machine__24155__auto__);

(statearr_26711[(1)] = (1));

return statearr_26711;
});
var cljs$core$async$transduce_$_state_machine__24155__auto____1 = (function (state_26709){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_26709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e26712){if((e26712 instanceof Object)){
var ex__24158__auto__ = e26712;
var statearr_26713_26715 = state_26709;
(statearr_26713_26715[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26716 = state_26709;
state_26709 = G__26716;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24155__auto__ = function(state_26709){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24155__auto____1.call(this,state_26709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24155__auto____0;
cljs$core$async$transduce_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24155__auto____1;
return cljs$core$async$transduce_$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto__,f__$1))
})();
var state__24323__auto__ = (function (){var statearr_26714 = f__24322__auto__.call(null);
(statearr_26714[(6)] = c__24321__auto__);

return statearr_26714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__,f__$1))
);

return c__24321__auto__;
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
var G__26718 = arguments.length;
switch (G__26718) {
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
var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto__){
return (function (state_26743){
var state_val_26744 = (state_26743[(1)]);
if((state_val_26744 === (7))){
var inst_26725 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26745_26766 = state_26743__$1;
(statearr_26745_26766[(2)] = inst_26725);

(statearr_26745_26766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (1))){
var inst_26719 = cljs.core.seq.call(null,coll);
var inst_26720 = inst_26719;
var state_26743__$1 = (function (){var statearr_26746 = state_26743;
(statearr_26746[(7)] = inst_26720);

return statearr_26746;
})();
var statearr_26747_26767 = state_26743__$1;
(statearr_26747_26767[(2)] = null);

(statearr_26747_26767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (4))){
var inst_26720 = (state_26743[(7)]);
var inst_26723 = cljs.core.first.call(null,inst_26720);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26743__$1,(7),ch,inst_26723);
} else {
if((state_val_26744 === (13))){
var inst_26737 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26748_26768 = state_26743__$1;
(statearr_26748_26768[(2)] = inst_26737);

(statearr_26748_26768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (6))){
var inst_26728 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
if(cljs.core.truth_(inst_26728)){
var statearr_26749_26769 = state_26743__$1;
(statearr_26749_26769[(1)] = (8));

} else {
var statearr_26750_26770 = state_26743__$1;
(statearr_26750_26770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (3))){
var inst_26741 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26743__$1,inst_26741);
} else {
if((state_val_26744 === (12))){
var state_26743__$1 = state_26743;
var statearr_26751_26771 = state_26743__$1;
(statearr_26751_26771[(2)] = null);

(statearr_26751_26771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (2))){
var inst_26720 = (state_26743[(7)]);
var state_26743__$1 = state_26743;
if(cljs.core.truth_(inst_26720)){
var statearr_26752_26772 = state_26743__$1;
(statearr_26752_26772[(1)] = (4));

} else {
var statearr_26753_26773 = state_26743__$1;
(statearr_26753_26773[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (11))){
var inst_26734 = cljs.core.async.close_BANG_.call(null,ch);
var state_26743__$1 = state_26743;
var statearr_26754_26774 = state_26743__$1;
(statearr_26754_26774[(2)] = inst_26734);

(statearr_26754_26774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (9))){
var state_26743__$1 = state_26743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26755_26775 = state_26743__$1;
(statearr_26755_26775[(1)] = (11));

} else {
var statearr_26756_26776 = state_26743__$1;
(statearr_26756_26776[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (5))){
var inst_26720 = (state_26743[(7)]);
var state_26743__$1 = state_26743;
var statearr_26757_26777 = state_26743__$1;
(statearr_26757_26777[(2)] = inst_26720);

(statearr_26757_26777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (10))){
var inst_26739 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26758_26778 = state_26743__$1;
(statearr_26758_26778[(2)] = inst_26739);

(statearr_26758_26778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (8))){
var inst_26720 = (state_26743[(7)]);
var inst_26730 = cljs.core.next.call(null,inst_26720);
var inst_26720__$1 = inst_26730;
var state_26743__$1 = (function (){var statearr_26759 = state_26743;
(statearr_26759[(7)] = inst_26720__$1);

return statearr_26759;
})();
var statearr_26760_26779 = state_26743__$1;
(statearr_26760_26779[(2)] = null);

(statearr_26760_26779[(1)] = (2));


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
});})(c__24321__auto__))
;
return ((function (switch__24154__auto__,c__24321__auto__){
return (function() {
var cljs$core$async$state_machine__24155__auto__ = null;
var cljs$core$async$state_machine__24155__auto____0 = (function (){
var statearr_26761 = [null,null,null,null,null,null,null,null];
(statearr_26761[(0)] = cljs$core$async$state_machine__24155__auto__);

(statearr_26761[(1)] = (1));

return statearr_26761;
});
var cljs$core$async$state_machine__24155__auto____1 = (function (state_26743){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_26743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e26762){if((e26762 instanceof Object)){
var ex__24158__auto__ = e26762;
var statearr_26763_26780 = state_26743;
(statearr_26763_26780[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26781 = state_26743;
state_26743 = G__26781;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$state_machine__24155__auto__ = function(state_26743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24155__auto____1.call(this,state_26743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24155__auto____0;
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24155__auto____1;
return cljs$core$async$state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto__))
})();
var state__24323__auto__ = (function (){var statearr_26764 = f__24322__auto__.call(null);
(statearr_26764[(6)] = c__24321__auto__);

return statearr_26764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__))
);

return c__24321__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26782 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26782 = (function (ch,cs,meta26783){
this.ch = ch;
this.cs = cs;
this.meta26783 = meta26783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26784,meta26783__$1){
var self__ = this;
var _26784__$1 = this;
return (new cljs.core.async.t_cljs$core$async26782(self__.ch,self__.cs,meta26783__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26784){
var self__ = this;
var _26784__$1 = this;
return self__.meta26783;
});})(cs))
;

cljs.core.async.t_cljs$core$async26782.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26782.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26782.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26782.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26782.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26782.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26782.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26783","meta26783",-164463498,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26782";

cljs.core.async.t_cljs$core$async26782.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26782");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26782.
 */
cljs.core.async.__GT_t_cljs$core$async26782 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26782(ch__$1,cs__$1,meta26783){
return (new cljs.core.async.t_cljs$core$async26782(ch__$1,cs__$1,meta26783));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26782(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24321__auto___27004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___27004,cs,m,dchan,dctr,done){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___27004,cs,m,dchan,dctr,done){
return (function (state_26919){
var state_val_26920 = (state_26919[(1)]);
if((state_val_26920 === (7))){
var inst_26915 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
var statearr_26921_27005 = state_26919__$1;
(statearr_26921_27005[(2)] = inst_26915);

(statearr_26921_27005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (20))){
var inst_26818 = (state_26919[(7)]);
var inst_26830 = cljs.core.first.call(null,inst_26818);
var inst_26831 = cljs.core.nth.call(null,inst_26830,(0),null);
var inst_26832 = cljs.core.nth.call(null,inst_26830,(1),null);
var state_26919__$1 = (function (){var statearr_26922 = state_26919;
(statearr_26922[(8)] = inst_26831);

return statearr_26922;
})();
if(cljs.core.truth_(inst_26832)){
var statearr_26923_27006 = state_26919__$1;
(statearr_26923_27006[(1)] = (22));

} else {
var statearr_26924_27007 = state_26919__$1;
(statearr_26924_27007[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (27))){
var inst_26787 = (state_26919[(9)]);
var inst_26862 = (state_26919[(10)]);
var inst_26860 = (state_26919[(11)]);
var inst_26867 = (state_26919[(12)]);
var inst_26867__$1 = cljs.core._nth.call(null,inst_26860,inst_26862);
var inst_26868 = cljs.core.async.put_BANG_.call(null,inst_26867__$1,inst_26787,done);
var state_26919__$1 = (function (){var statearr_26925 = state_26919;
(statearr_26925[(12)] = inst_26867__$1);

return statearr_26925;
})();
if(cljs.core.truth_(inst_26868)){
var statearr_26926_27008 = state_26919__$1;
(statearr_26926_27008[(1)] = (30));

} else {
var statearr_26927_27009 = state_26919__$1;
(statearr_26927_27009[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (1))){
var state_26919__$1 = state_26919;
var statearr_26928_27010 = state_26919__$1;
(statearr_26928_27010[(2)] = null);

(statearr_26928_27010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (24))){
var inst_26818 = (state_26919[(7)]);
var inst_26837 = (state_26919[(2)]);
var inst_26838 = cljs.core.next.call(null,inst_26818);
var inst_26796 = inst_26838;
var inst_26797 = null;
var inst_26798 = (0);
var inst_26799 = (0);
var state_26919__$1 = (function (){var statearr_26929 = state_26919;
(statearr_26929[(13)] = inst_26797);

(statearr_26929[(14)] = inst_26796);

(statearr_26929[(15)] = inst_26799);

(statearr_26929[(16)] = inst_26837);

(statearr_26929[(17)] = inst_26798);

return statearr_26929;
})();
var statearr_26930_27011 = state_26919__$1;
(statearr_26930_27011[(2)] = null);

(statearr_26930_27011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (39))){
var state_26919__$1 = state_26919;
var statearr_26934_27012 = state_26919__$1;
(statearr_26934_27012[(2)] = null);

(statearr_26934_27012[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (4))){
var inst_26787 = (state_26919[(9)]);
var inst_26787__$1 = (state_26919[(2)]);
var inst_26788 = (inst_26787__$1 == null);
var state_26919__$1 = (function (){var statearr_26935 = state_26919;
(statearr_26935[(9)] = inst_26787__$1);

return statearr_26935;
})();
if(cljs.core.truth_(inst_26788)){
var statearr_26936_27013 = state_26919__$1;
(statearr_26936_27013[(1)] = (5));

} else {
var statearr_26937_27014 = state_26919__$1;
(statearr_26937_27014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (15))){
var inst_26797 = (state_26919[(13)]);
var inst_26796 = (state_26919[(14)]);
var inst_26799 = (state_26919[(15)]);
var inst_26798 = (state_26919[(17)]);
var inst_26814 = (state_26919[(2)]);
var inst_26815 = (inst_26799 + (1));
var tmp26931 = inst_26797;
var tmp26932 = inst_26796;
var tmp26933 = inst_26798;
var inst_26796__$1 = tmp26932;
var inst_26797__$1 = tmp26931;
var inst_26798__$1 = tmp26933;
var inst_26799__$1 = inst_26815;
var state_26919__$1 = (function (){var statearr_26938 = state_26919;
(statearr_26938[(13)] = inst_26797__$1);

(statearr_26938[(14)] = inst_26796__$1);

(statearr_26938[(18)] = inst_26814);

(statearr_26938[(15)] = inst_26799__$1);

(statearr_26938[(17)] = inst_26798__$1);

return statearr_26938;
})();
var statearr_26939_27015 = state_26919__$1;
(statearr_26939_27015[(2)] = null);

(statearr_26939_27015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (21))){
var inst_26841 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
var statearr_26943_27016 = state_26919__$1;
(statearr_26943_27016[(2)] = inst_26841);

(statearr_26943_27016[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (31))){
var inst_26867 = (state_26919[(12)]);
var inst_26871 = done.call(null,null);
var inst_26872 = cljs.core.async.untap_STAR_.call(null,m,inst_26867);
var state_26919__$1 = (function (){var statearr_26944 = state_26919;
(statearr_26944[(19)] = inst_26871);

return statearr_26944;
})();
var statearr_26945_27017 = state_26919__$1;
(statearr_26945_27017[(2)] = inst_26872);

(statearr_26945_27017[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (32))){
var inst_26861 = (state_26919[(20)]);
var inst_26862 = (state_26919[(10)]);
var inst_26859 = (state_26919[(21)]);
var inst_26860 = (state_26919[(11)]);
var inst_26874 = (state_26919[(2)]);
var inst_26875 = (inst_26862 + (1));
var tmp26940 = inst_26861;
var tmp26941 = inst_26859;
var tmp26942 = inst_26860;
var inst_26859__$1 = tmp26941;
var inst_26860__$1 = tmp26942;
var inst_26861__$1 = tmp26940;
var inst_26862__$1 = inst_26875;
var state_26919__$1 = (function (){var statearr_26946 = state_26919;
(statearr_26946[(20)] = inst_26861__$1);

(statearr_26946[(10)] = inst_26862__$1);

(statearr_26946[(21)] = inst_26859__$1);

(statearr_26946[(11)] = inst_26860__$1);

(statearr_26946[(22)] = inst_26874);

return statearr_26946;
})();
var statearr_26947_27018 = state_26919__$1;
(statearr_26947_27018[(2)] = null);

(statearr_26947_27018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (40))){
var inst_26887 = (state_26919[(23)]);
var inst_26891 = done.call(null,null);
var inst_26892 = cljs.core.async.untap_STAR_.call(null,m,inst_26887);
var state_26919__$1 = (function (){var statearr_26948 = state_26919;
(statearr_26948[(24)] = inst_26891);

return statearr_26948;
})();
var statearr_26949_27019 = state_26919__$1;
(statearr_26949_27019[(2)] = inst_26892);

(statearr_26949_27019[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (33))){
var inst_26878 = (state_26919[(25)]);
var inst_26880 = cljs.core.chunked_seq_QMARK_.call(null,inst_26878);
var state_26919__$1 = state_26919;
if(inst_26880){
var statearr_26950_27020 = state_26919__$1;
(statearr_26950_27020[(1)] = (36));

} else {
var statearr_26951_27021 = state_26919__$1;
(statearr_26951_27021[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (13))){
var inst_26808 = (state_26919[(26)]);
var inst_26811 = cljs.core.async.close_BANG_.call(null,inst_26808);
var state_26919__$1 = state_26919;
var statearr_26952_27022 = state_26919__$1;
(statearr_26952_27022[(2)] = inst_26811);

(statearr_26952_27022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (22))){
var inst_26831 = (state_26919[(8)]);
var inst_26834 = cljs.core.async.close_BANG_.call(null,inst_26831);
var state_26919__$1 = state_26919;
var statearr_26953_27023 = state_26919__$1;
(statearr_26953_27023[(2)] = inst_26834);

(statearr_26953_27023[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (36))){
var inst_26878 = (state_26919[(25)]);
var inst_26882 = cljs.core.chunk_first.call(null,inst_26878);
var inst_26883 = cljs.core.chunk_rest.call(null,inst_26878);
var inst_26884 = cljs.core.count.call(null,inst_26882);
var inst_26859 = inst_26883;
var inst_26860 = inst_26882;
var inst_26861 = inst_26884;
var inst_26862 = (0);
var state_26919__$1 = (function (){var statearr_26954 = state_26919;
(statearr_26954[(20)] = inst_26861);

(statearr_26954[(10)] = inst_26862);

(statearr_26954[(21)] = inst_26859);

(statearr_26954[(11)] = inst_26860);

return statearr_26954;
})();
var statearr_26955_27024 = state_26919__$1;
(statearr_26955_27024[(2)] = null);

(statearr_26955_27024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (41))){
var inst_26878 = (state_26919[(25)]);
var inst_26894 = (state_26919[(2)]);
var inst_26895 = cljs.core.next.call(null,inst_26878);
var inst_26859 = inst_26895;
var inst_26860 = null;
var inst_26861 = (0);
var inst_26862 = (0);
var state_26919__$1 = (function (){var statearr_26956 = state_26919;
(statearr_26956[(20)] = inst_26861);

(statearr_26956[(10)] = inst_26862);

(statearr_26956[(21)] = inst_26859);

(statearr_26956[(11)] = inst_26860);

(statearr_26956[(27)] = inst_26894);

return statearr_26956;
})();
var statearr_26957_27025 = state_26919__$1;
(statearr_26957_27025[(2)] = null);

(statearr_26957_27025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (43))){
var state_26919__$1 = state_26919;
var statearr_26958_27026 = state_26919__$1;
(statearr_26958_27026[(2)] = null);

(statearr_26958_27026[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (29))){
var inst_26903 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
var statearr_26959_27027 = state_26919__$1;
(statearr_26959_27027[(2)] = inst_26903);

(statearr_26959_27027[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (44))){
var inst_26912 = (state_26919[(2)]);
var state_26919__$1 = (function (){var statearr_26960 = state_26919;
(statearr_26960[(28)] = inst_26912);

return statearr_26960;
})();
var statearr_26961_27028 = state_26919__$1;
(statearr_26961_27028[(2)] = null);

(statearr_26961_27028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (6))){
var inst_26851 = (state_26919[(29)]);
var inst_26850 = cljs.core.deref.call(null,cs);
var inst_26851__$1 = cljs.core.keys.call(null,inst_26850);
var inst_26852 = cljs.core.count.call(null,inst_26851__$1);
var inst_26853 = cljs.core.reset_BANG_.call(null,dctr,inst_26852);
var inst_26858 = cljs.core.seq.call(null,inst_26851__$1);
var inst_26859 = inst_26858;
var inst_26860 = null;
var inst_26861 = (0);
var inst_26862 = (0);
var state_26919__$1 = (function (){var statearr_26962 = state_26919;
(statearr_26962[(20)] = inst_26861);

(statearr_26962[(30)] = inst_26853);

(statearr_26962[(10)] = inst_26862);

(statearr_26962[(21)] = inst_26859);

(statearr_26962[(11)] = inst_26860);

(statearr_26962[(29)] = inst_26851__$1);

return statearr_26962;
})();
var statearr_26963_27029 = state_26919__$1;
(statearr_26963_27029[(2)] = null);

(statearr_26963_27029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (28))){
var inst_26859 = (state_26919[(21)]);
var inst_26878 = (state_26919[(25)]);
var inst_26878__$1 = cljs.core.seq.call(null,inst_26859);
var state_26919__$1 = (function (){var statearr_26964 = state_26919;
(statearr_26964[(25)] = inst_26878__$1);

return statearr_26964;
})();
if(inst_26878__$1){
var statearr_26965_27030 = state_26919__$1;
(statearr_26965_27030[(1)] = (33));

} else {
var statearr_26966_27031 = state_26919__$1;
(statearr_26966_27031[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (25))){
var inst_26861 = (state_26919[(20)]);
var inst_26862 = (state_26919[(10)]);
var inst_26864 = (inst_26862 < inst_26861);
var inst_26865 = inst_26864;
var state_26919__$1 = state_26919;
if(cljs.core.truth_(inst_26865)){
var statearr_26967_27032 = state_26919__$1;
(statearr_26967_27032[(1)] = (27));

} else {
var statearr_26968_27033 = state_26919__$1;
(statearr_26968_27033[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (34))){
var state_26919__$1 = state_26919;
var statearr_26969_27034 = state_26919__$1;
(statearr_26969_27034[(2)] = null);

(statearr_26969_27034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (17))){
var state_26919__$1 = state_26919;
var statearr_26970_27035 = state_26919__$1;
(statearr_26970_27035[(2)] = null);

(statearr_26970_27035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (3))){
var inst_26917 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26919__$1,inst_26917);
} else {
if((state_val_26920 === (12))){
var inst_26846 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
var statearr_26971_27036 = state_26919__$1;
(statearr_26971_27036[(2)] = inst_26846);

(statearr_26971_27036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (2))){
var state_26919__$1 = state_26919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26919__$1,(4),ch);
} else {
if((state_val_26920 === (23))){
var state_26919__$1 = state_26919;
var statearr_26972_27037 = state_26919__$1;
(statearr_26972_27037[(2)] = null);

(statearr_26972_27037[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (35))){
var inst_26901 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
var statearr_26973_27038 = state_26919__$1;
(statearr_26973_27038[(2)] = inst_26901);

(statearr_26973_27038[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (19))){
var inst_26818 = (state_26919[(7)]);
var inst_26822 = cljs.core.chunk_first.call(null,inst_26818);
var inst_26823 = cljs.core.chunk_rest.call(null,inst_26818);
var inst_26824 = cljs.core.count.call(null,inst_26822);
var inst_26796 = inst_26823;
var inst_26797 = inst_26822;
var inst_26798 = inst_26824;
var inst_26799 = (0);
var state_26919__$1 = (function (){var statearr_26974 = state_26919;
(statearr_26974[(13)] = inst_26797);

(statearr_26974[(14)] = inst_26796);

(statearr_26974[(15)] = inst_26799);

(statearr_26974[(17)] = inst_26798);

return statearr_26974;
})();
var statearr_26975_27039 = state_26919__$1;
(statearr_26975_27039[(2)] = null);

(statearr_26975_27039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (11))){
var inst_26818 = (state_26919[(7)]);
var inst_26796 = (state_26919[(14)]);
var inst_26818__$1 = cljs.core.seq.call(null,inst_26796);
var state_26919__$1 = (function (){var statearr_26976 = state_26919;
(statearr_26976[(7)] = inst_26818__$1);

return statearr_26976;
})();
if(inst_26818__$1){
var statearr_26977_27040 = state_26919__$1;
(statearr_26977_27040[(1)] = (16));

} else {
var statearr_26978_27041 = state_26919__$1;
(statearr_26978_27041[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (9))){
var inst_26848 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
var statearr_26979_27042 = state_26919__$1;
(statearr_26979_27042[(2)] = inst_26848);

(statearr_26979_27042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (5))){
var inst_26794 = cljs.core.deref.call(null,cs);
var inst_26795 = cljs.core.seq.call(null,inst_26794);
var inst_26796 = inst_26795;
var inst_26797 = null;
var inst_26798 = (0);
var inst_26799 = (0);
var state_26919__$1 = (function (){var statearr_26980 = state_26919;
(statearr_26980[(13)] = inst_26797);

(statearr_26980[(14)] = inst_26796);

(statearr_26980[(15)] = inst_26799);

(statearr_26980[(17)] = inst_26798);

return statearr_26980;
})();
var statearr_26981_27043 = state_26919__$1;
(statearr_26981_27043[(2)] = null);

(statearr_26981_27043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (14))){
var state_26919__$1 = state_26919;
var statearr_26982_27044 = state_26919__$1;
(statearr_26982_27044[(2)] = null);

(statearr_26982_27044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (45))){
var inst_26909 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
var statearr_26983_27045 = state_26919__$1;
(statearr_26983_27045[(2)] = inst_26909);

(statearr_26983_27045[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (26))){
var inst_26851 = (state_26919[(29)]);
var inst_26905 = (state_26919[(2)]);
var inst_26906 = cljs.core.seq.call(null,inst_26851);
var state_26919__$1 = (function (){var statearr_26984 = state_26919;
(statearr_26984[(31)] = inst_26905);

return statearr_26984;
})();
if(inst_26906){
var statearr_26985_27046 = state_26919__$1;
(statearr_26985_27046[(1)] = (42));

} else {
var statearr_26986_27047 = state_26919__$1;
(statearr_26986_27047[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (16))){
var inst_26818 = (state_26919[(7)]);
var inst_26820 = cljs.core.chunked_seq_QMARK_.call(null,inst_26818);
var state_26919__$1 = state_26919;
if(inst_26820){
var statearr_26987_27048 = state_26919__$1;
(statearr_26987_27048[(1)] = (19));

} else {
var statearr_26988_27049 = state_26919__$1;
(statearr_26988_27049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (38))){
var inst_26898 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
var statearr_26989_27050 = state_26919__$1;
(statearr_26989_27050[(2)] = inst_26898);

(statearr_26989_27050[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (30))){
var state_26919__$1 = state_26919;
var statearr_26990_27051 = state_26919__$1;
(statearr_26990_27051[(2)] = null);

(statearr_26990_27051[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (10))){
var inst_26797 = (state_26919[(13)]);
var inst_26799 = (state_26919[(15)]);
var inst_26807 = cljs.core._nth.call(null,inst_26797,inst_26799);
var inst_26808 = cljs.core.nth.call(null,inst_26807,(0),null);
var inst_26809 = cljs.core.nth.call(null,inst_26807,(1),null);
var state_26919__$1 = (function (){var statearr_26991 = state_26919;
(statearr_26991[(26)] = inst_26808);

return statearr_26991;
})();
if(cljs.core.truth_(inst_26809)){
var statearr_26992_27052 = state_26919__$1;
(statearr_26992_27052[(1)] = (13));

} else {
var statearr_26993_27053 = state_26919__$1;
(statearr_26993_27053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (18))){
var inst_26844 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
var statearr_26994_27054 = state_26919__$1;
(statearr_26994_27054[(2)] = inst_26844);

(statearr_26994_27054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (42))){
var state_26919__$1 = state_26919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26919__$1,(45),dchan);
} else {
if((state_val_26920 === (37))){
var inst_26887 = (state_26919[(23)]);
var inst_26787 = (state_26919[(9)]);
var inst_26878 = (state_26919[(25)]);
var inst_26887__$1 = cljs.core.first.call(null,inst_26878);
var inst_26888 = cljs.core.async.put_BANG_.call(null,inst_26887__$1,inst_26787,done);
var state_26919__$1 = (function (){var statearr_26995 = state_26919;
(statearr_26995[(23)] = inst_26887__$1);

return statearr_26995;
})();
if(cljs.core.truth_(inst_26888)){
var statearr_26996_27055 = state_26919__$1;
(statearr_26996_27055[(1)] = (39));

} else {
var statearr_26997_27056 = state_26919__$1;
(statearr_26997_27056[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (8))){
var inst_26799 = (state_26919[(15)]);
var inst_26798 = (state_26919[(17)]);
var inst_26801 = (inst_26799 < inst_26798);
var inst_26802 = inst_26801;
var state_26919__$1 = state_26919;
if(cljs.core.truth_(inst_26802)){
var statearr_26998_27057 = state_26919__$1;
(statearr_26998_27057[(1)] = (10));

} else {
var statearr_26999_27058 = state_26919__$1;
(statearr_26999_27058[(1)] = (11));

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
});})(c__24321__auto___27004,cs,m,dchan,dctr,done))
;
return ((function (switch__24154__auto__,c__24321__auto___27004,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24155__auto__ = null;
var cljs$core$async$mult_$_state_machine__24155__auto____0 = (function (){
var statearr_27000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27000[(0)] = cljs$core$async$mult_$_state_machine__24155__auto__);

(statearr_27000[(1)] = (1));

return statearr_27000;
});
var cljs$core$async$mult_$_state_machine__24155__auto____1 = (function (state_26919){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_26919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e27001){if((e27001 instanceof Object)){
var ex__24158__auto__ = e27001;
var statearr_27002_27059 = state_26919;
(statearr_27002_27059[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27060 = state_26919;
state_26919 = G__27060;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24155__auto__ = function(state_26919){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24155__auto____1.call(this,state_26919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24155__auto____0;
cljs$core$async$mult_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24155__auto____1;
return cljs$core$async$mult_$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___27004,cs,m,dchan,dctr,done))
})();
var state__24323__auto__ = (function (){var statearr_27003 = f__24322__auto__.call(null);
(statearr_27003[(6)] = c__24321__auto___27004);

return statearr_27003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___27004,cs,m,dchan,dctr,done))
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
var G__27062 = arguments.length;
switch (G__27062) {
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
var len__4730__auto___27074 = arguments.length;
var i__4731__auto___27075 = (0);
while(true){
if((i__4731__auto___27075 < len__4730__auto___27074)){
args__4736__auto__.push((arguments[i__4731__auto___27075]));

var G__27076 = (i__4731__auto___27075 + (1));
i__4731__auto___27075 = G__27076;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27068){
var map__27069 = p__27068;
var map__27069__$1 = (((((!((map__27069 == null))))?(((((map__27069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27069):map__27069);
var opts = map__27069__$1;
var statearr_27071_27077 = state;
(statearr_27071_27077[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__27069,map__27069__$1,opts){
return (function (val){
var statearr_27072_27078 = state;
(statearr_27072_27078[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27069,map__27069__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_27073_27079 = state;
(statearr_27073_27079[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27064){
var G__27065 = cljs.core.first.call(null,seq27064);
var seq27064__$1 = cljs.core.next.call(null,seq27064);
var G__27066 = cljs.core.first.call(null,seq27064__$1);
var seq27064__$2 = cljs.core.next.call(null,seq27064__$1);
var G__27067 = cljs.core.first.call(null,seq27064__$2);
var seq27064__$3 = cljs.core.next.call(null,seq27064__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27065,G__27066,G__27067,seq27064__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27080 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27080 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27081){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27081 = meta27081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27082,meta27081__$1){
var self__ = this;
var _27082__$1 = this;
return (new cljs.core.async.t_cljs$core$async27080(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27081__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27082){
var self__ = this;
var _27082__$1 = this;
return self__.meta27081;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27080.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27080.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27081","meta27081",1011471833,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27080";

cljs.core.async.t_cljs$core$async27080.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27080");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27080.
 */
cljs.core.async.__GT_t_cljs$core$async27080 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27080(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27081){
return (new cljs.core.async.t_cljs$core$async27080(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27081));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27080(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24321__auto___27244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___27244,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___27244,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27184){
var state_val_27185 = (state_27184[(1)]);
if((state_val_27185 === (7))){
var inst_27099 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
var statearr_27186_27245 = state_27184__$1;
(statearr_27186_27245[(2)] = inst_27099);

(statearr_27186_27245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (20))){
var inst_27111 = (state_27184[(7)]);
var state_27184__$1 = state_27184;
var statearr_27187_27246 = state_27184__$1;
(statearr_27187_27246[(2)] = inst_27111);

(statearr_27187_27246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (27))){
var state_27184__$1 = state_27184;
var statearr_27188_27247 = state_27184__$1;
(statearr_27188_27247[(2)] = null);

(statearr_27188_27247[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (1))){
var inst_27086 = (state_27184[(8)]);
var inst_27086__$1 = calc_state.call(null);
var inst_27088 = (inst_27086__$1 == null);
var inst_27089 = cljs.core.not.call(null,inst_27088);
var state_27184__$1 = (function (){var statearr_27189 = state_27184;
(statearr_27189[(8)] = inst_27086__$1);

return statearr_27189;
})();
if(inst_27089){
var statearr_27190_27248 = state_27184__$1;
(statearr_27190_27248[(1)] = (2));

} else {
var statearr_27191_27249 = state_27184__$1;
(statearr_27191_27249[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (24))){
var inst_27144 = (state_27184[(9)]);
var inst_27158 = (state_27184[(10)]);
var inst_27135 = (state_27184[(11)]);
var inst_27158__$1 = inst_27135.call(null,inst_27144);
var state_27184__$1 = (function (){var statearr_27192 = state_27184;
(statearr_27192[(10)] = inst_27158__$1);

return statearr_27192;
})();
if(cljs.core.truth_(inst_27158__$1)){
var statearr_27193_27250 = state_27184__$1;
(statearr_27193_27250[(1)] = (29));

} else {
var statearr_27194_27251 = state_27184__$1;
(statearr_27194_27251[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (4))){
var inst_27102 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
if(cljs.core.truth_(inst_27102)){
var statearr_27195_27252 = state_27184__$1;
(statearr_27195_27252[(1)] = (8));

} else {
var statearr_27196_27253 = state_27184__$1;
(statearr_27196_27253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (15))){
var inst_27129 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
if(cljs.core.truth_(inst_27129)){
var statearr_27197_27254 = state_27184__$1;
(statearr_27197_27254[(1)] = (19));

} else {
var statearr_27198_27255 = state_27184__$1;
(statearr_27198_27255[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (21))){
var inst_27134 = (state_27184[(12)]);
var inst_27134__$1 = (state_27184[(2)]);
var inst_27135 = cljs.core.get.call(null,inst_27134__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27136 = cljs.core.get.call(null,inst_27134__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27137 = cljs.core.get.call(null,inst_27134__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27184__$1 = (function (){var statearr_27199 = state_27184;
(statearr_27199[(13)] = inst_27136);

(statearr_27199[(11)] = inst_27135);

(statearr_27199[(12)] = inst_27134__$1);

return statearr_27199;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27184__$1,(22),inst_27137);
} else {
if((state_val_27185 === (31))){
var inst_27166 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
if(cljs.core.truth_(inst_27166)){
var statearr_27200_27256 = state_27184__$1;
(statearr_27200_27256[(1)] = (32));

} else {
var statearr_27201_27257 = state_27184__$1;
(statearr_27201_27257[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (32))){
var inst_27143 = (state_27184[(14)]);
var state_27184__$1 = state_27184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27184__$1,(35),out,inst_27143);
} else {
if((state_val_27185 === (33))){
var inst_27134 = (state_27184[(12)]);
var inst_27111 = inst_27134;
var state_27184__$1 = (function (){var statearr_27202 = state_27184;
(statearr_27202[(7)] = inst_27111);

return statearr_27202;
})();
var statearr_27203_27258 = state_27184__$1;
(statearr_27203_27258[(2)] = null);

(statearr_27203_27258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (13))){
var inst_27111 = (state_27184[(7)]);
var inst_27118 = inst_27111.cljs$lang$protocol_mask$partition0$;
var inst_27119 = (inst_27118 & (64));
var inst_27120 = inst_27111.cljs$core$ISeq$;
var inst_27121 = (cljs.core.PROTOCOL_SENTINEL === inst_27120);
var inst_27122 = ((inst_27119) || (inst_27121));
var state_27184__$1 = state_27184;
if(cljs.core.truth_(inst_27122)){
var statearr_27204_27259 = state_27184__$1;
(statearr_27204_27259[(1)] = (16));

} else {
var statearr_27205_27260 = state_27184__$1;
(statearr_27205_27260[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (22))){
var inst_27144 = (state_27184[(9)]);
var inst_27143 = (state_27184[(14)]);
var inst_27142 = (state_27184[(2)]);
var inst_27143__$1 = cljs.core.nth.call(null,inst_27142,(0),null);
var inst_27144__$1 = cljs.core.nth.call(null,inst_27142,(1),null);
var inst_27145 = (inst_27143__$1 == null);
var inst_27146 = cljs.core._EQ_.call(null,inst_27144__$1,change);
var inst_27147 = ((inst_27145) || (inst_27146));
var state_27184__$1 = (function (){var statearr_27206 = state_27184;
(statearr_27206[(9)] = inst_27144__$1);

(statearr_27206[(14)] = inst_27143__$1);

return statearr_27206;
})();
if(cljs.core.truth_(inst_27147)){
var statearr_27207_27261 = state_27184__$1;
(statearr_27207_27261[(1)] = (23));

} else {
var statearr_27208_27262 = state_27184__$1;
(statearr_27208_27262[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (36))){
var inst_27134 = (state_27184[(12)]);
var inst_27111 = inst_27134;
var state_27184__$1 = (function (){var statearr_27209 = state_27184;
(statearr_27209[(7)] = inst_27111);

return statearr_27209;
})();
var statearr_27210_27263 = state_27184__$1;
(statearr_27210_27263[(2)] = null);

(statearr_27210_27263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (29))){
var inst_27158 = (state_27184[(10)]);
var state_27184__$1 = state_27184;
var statearr_27211_27264 = state_27184__$1;
(statearr_27211_27264[(2)] = inst_27158);

(statearr_27211_27264[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (6))){
var state_27184__$1 = state_27184;
var statearr_27212_27265 = state_27184__$1;
(statearr_27212_27265[(2)] = false);

(statearr_27212_27265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (28))){
var inst_27154 = (state_27184[(2)]);
var inst_27155 = calc_state.call(null);
var inst_27111 = inst_27155;
var state_27184__$1 = (function (){var statearr_27213 = state_27184;
(statearr_27213[(7)] = inst_27111);

(statearr_27213[(15)] = inst_27154);

return statearr_27213;
})();
var statearr_27214_27266 = state_27184__$1;
(statearr_27214_27266[(2)] = null);

(statearr_27214_27266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (25))){
var inst_27180 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
var statearr_27215_27267 = state_27184__$1;
(statearr_27215_27267[(2)] = inst_27180);

(statearr_27215_27267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (34))){
var inst_27178 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
var statearr_27216_27268 = state_27184__$1;
(statearr_27216_27268[(2)] = inst_27178);

(statearr_27216_27268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (17))){
var state_27184__$1 = state_27184;
var statearr_27217_27269 = state_27184__$1;
(statearr_27217_27269[(2)] = false);

(statearr_27217_27269[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (3))){
var state_27184__$1 = state_27184;
var statearr_27218_27270 = state_27184__$1;
(statearr_27218_27270[(2)] = false);

(statearr_27218_27270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (12))){
var inst_27182 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27184__$1,inst_27182);
} else {
if((state_val_27185 === (2))){
var inst_27086 = (state_27184[(8)]);
var inst_27091 = inst_27086.cljs$lang$protocol_mask$partition0$;
var inst_27092 = (inst_27091 & (64));
var inst_27093 = inst_27086.cljs$core$ISeq$;
var inst_27094 = (cljs.core.PROTOCOL_SENTINEL === inst_27093);
var inst_27095 = ((inst_27092) || (inst_27094));
var state_27184__$1 = state_27184;
if(cljs.core.truth_(inst_27095)){
var statearr_27219_27271 = state_27184__$1;
(statearr_27219_27271[(1)] = (5));

} else {
var statearr_27220_27272 = state_27184__$1;
(statearr_27220_27272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (23))){
var inst_27143 = (state_27184[(14)]);
var inst_27149 = (inst_27143 == null);
var state_27184__$1 = state_27184;
if(cljs.core.truth_(inst_27149)){
var statearr_27221_27273 = state_27184__$1;
(statearr_27221_27273[(1)] = (26));

} else {
var statearr_27222_27274 = state_27184__$1;
(statearr_27222_27274[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (35))){
var inst_27169 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
if(cljs.core.truth_(inst_27169)){
var statearr_27223_27275 = state_27184__$1;
(statearr_27223_27275[(1)] = (36));

} else {
var statearr_27224_27276 = state_27184__$1;
(statearr_27224_27276[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (19))){
var inst_27111 = (state_27184[(7)]);
var inst_27131 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27111);
var state_27184__$1 = state_27184;
var statearr_27225_27277 = state_27184__$1;
(statearr_27225_27277[(2)] = inst_27131);

(statearr_27225_27277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (11))){
var inst_27111 = (state_27184[(7)]);
var inst_27115 = (inst_27111 == null);
var inst_27116 = cljs.core.not.call(null,inst_27115);
var state_27184__$1 = state_27184;
if(inst_27116){
var statearr_27226_27278 = state_27184__$1;
(statearr_27226_27278[(1)] = (13));

} else {
var statearr_27227_27279 = state_27184__$1;
(statearr_27227_27279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (9))){
var inst_27086 = (state_27184[(8)]);
var state_27184__$1 = state_27184;
var statearr_27228_27280 = state_27184__$1;
(statearr_27228_27280[(2)] = inst_27086);

(statearr_27228_27280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (5))){
var state_27184__$1 = state_27184;
var statearr_27229_27281 = state_27184__$1;
(statearr_27229_27281[(2)] = true);

(statearr_27229_27281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (14))){
var state_27184__$1 = state_27184;
var statearr_27230_27282 = state_27184__$1;
(statearr_27230_27282[(2)] = false);

(statearr_27230_27282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (26))){
var inst_27144 = (state_27184[(9)]);
var inst_27151 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27144);
var state_27184__$1 = state_27184;
var statearr_27231_27283 = state_27184__$1;
(statearr_27231_27283[(2)] = inst_27151);

(statearr_27231_27283[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (16))){
var state_27184__$1 = state_27184;
var statearr_27232_27284 = state_27184__$1;
(statearr_27232_27284[(2)] = true);

(statearr_27232_27284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (38))){
var inst_27174 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
var statearr_27233_27285 = state_27184__$1;
(statearr_27233_27285[(2)] = inst_27174);

(statearr_27233_27285[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (30))){
var inst_27136 = (state_27184[(13)]);
var inst_27144 = (state_27184[(9)]);
var inst_27135 = (state_27184[(11)]);
var inst_27161 = cljs.core.empty_QMARK_.call(null,inst_27135);
var inst_27162 = inst_27136.call(null,inst_27144);
var inst_27163 = cljs.core.not.call(null,inst_27162);
var inst_27164 = ((inst_27161) && (inst_27163));
var state_27184__$1 = state_27184;
var statearr_27234_27286 = state_27184__$1;
(statearr_27234_27286[(2)] = inst_27164);

(statearr_27234_27286[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (10))){
var inst_27086 = (state_27184[(8)]);
var inst_27107 = (state_27184[(2)]);
var inst_27108 = cljs.core.get.call(null,inst_27107,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27109 = cljs.core.get.call(null,inst_27107,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27110 = cljs.core.get.call(null,inst_27107,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27111 = inst_27086;
var state_27184__$1 = (function (){var statearr_27235 = state_27184;
(statearr_27235[(16)] = inst_27108);

(statearr_27235[(17)] = inst_27109);

(statearr_27235[(7)] = inst_27111);

(statearr_27235[(18)] = inst_27110);

return statearr_27235;
})();
var statearr_27236_27287 = state_27184__$1;
(statearr_27236_27287[(2)] = null);

(statearr_27236_27287[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (18))){
var inst_27126 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
var statearr_27237_27288 = state_27184__$1;
(statearr_27237_27288[(2)] = inst_27126);

(statearr_27237_27288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (37))){
var state_27184__$1 = state_27184;
var statearr_27238_27289 = state_27184__$1;
(statearr_27238_27289[(2)] = null);

(statearr_27238_27289[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (8))){
var inst_27086 = (state_27184[(8)]);
var inst_27104 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27086);
var state_27184__$1 = state_27184;
var statearr_27239_27290 = state_27184__$1;
(statearr_27239_27290[(2)] = inst_27104);

(statearr_27239_27290[(1)] = (10));


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
});})(c__24321__auto___27244,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24154__auto__,c__24321__auto___27244,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24155__auto__ = null;
var cljs$core$async$mix_$_state_machine__24155__auto____0 = (function (){
var statearr_27240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27240[(0)] = cljs$core$async$mix_$_state_machine__24155__auto__);

(statearr_27240[(1)] = (1));

return statearr_27240;
});
var cljs$core$async$mix_$_state_machine__24155__auto____1 = (function (state_27184){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_27184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e27241){if((e27241 instanceof Object)){
var ex__24158__auto__ = e27241;
var statearr_27242_27291 = state_27184;
(statearr_27242_27291[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27292 = state_27184;
state_27184 = G__27292;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24155__auto__ = function(state_27184){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24155__auto____1.call(this,state_27184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24155__auto____0;
cljs$core$async$mix_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24155__auto____1;
return cljs$core$async$mix_$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___27244,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24323__auto__ = (function (){var statearr_27243 = f__24322__auto__.call(null);
(statearr_27243[(6)] = c__24321__auto___27244);

return statearr_27243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___27244,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__27294 = arguments.length;
switch (G__27294) {
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
var G__27298 = arguments.length;
switch (G__27298) {
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
return (function (p1__27296_SHARP_){
if(cljs.core.truth_(p1__27296_SHARP_.call(null,topic))){
return p1__27296_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27296_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27299 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27300){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27300 = meta27300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27301,meta27300__$1){
var self__ = this;
var _27301__$1 = this;
return (new cljs.core.async.t_cljs$core$async27299(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27300__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27301){
var self__ = this;
var _27301__$1 = this;
return self__.meta27300;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27299.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27300","meta27300",-452032419,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27299";

cljs.core.async.t_cljs$core$async27299.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27299");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27299.
 */
cljs.core.async.__GT_t_cljs$core$async27299 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27299(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27300){
return (new cljs.core.async.t_cljs$core$async27299(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27300));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27299(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24321__auto___27419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___27419,mults,ensure_mult,p){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___27419,mults,ensure_mult,p){
return (function (state_27373){
var state_val_27374 = (state_27373[(1)]);
if((state_val_27374 === (7))){
var inst_27369 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27375_27420 = state_27373__$1;
(statearr_27375_27420[(2)] = inst_27369);

(statearr_27375_27420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (20))){
var state_27373__$1 = state_27373;
var statearr_27376_27421 = state_27373__$1;
(statearr_27376_27421[(2)] = null);

(statearr_27376_27421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (1))){
var state_27373__$1 = state_27373;
var statearr_27377_27422 = state_27373__$1;
(statearr_27377_27422[(2)] = null);

(statearr_27377_27422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (24))){
var inst_27352 = (state_27373[(7)]);
var inst_27361 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27352);
var state_27373__$1 = state_27373;
var statearr_27378_27423 = state_27373__$1;
(statearr_27378_27423[(2)] = inst_27361);

(statearr_27378_27423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (4))){
var inst_27304 = (state_27373[(8)]);
var inst_27304__$1 = (state_27373[(2)]);
var inst_27305 = (inst_27304__$1 == null);
var state_27373__$1 = (function (){var statearr_27379 = state_27373;
(statearr_27379[(8)] = inst_27304__$1);

return statearr_27379;
})();
if(cljs.core.truth_(inst_27305)){
var statearr_27380_27424 = state_27373__$1;
(statearr_27380_27424[(1)] = (5));

} else {
var statearr_27381_27425 = state_27373__$1;
(statearr_27381_27425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (15))){
var inst_27346 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27382_27426 = state_27373__$1;
(statearr_27382_27426[(2)] = inst_27346);

(statearr_27382_27426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (21))){
var inst_27366 = (state_27373[(2)]);
var state_27373__$1 = (function (){var statearr_27383 = state_27373;
(statearr_27383[(9)] = inst_27366);

return statearr_27383;
})();
var statearr_27384_27427 = state_27373__$1;
(statearr_27384_27427[(2)] = null);

(statearr_27384_27427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (13))){
var inst_27328 = (state_27373[(10)]);
var inst_27330 = cljs.core.chunked_seq_QMARK_.call(null,inst_27328);
var state_27373__$1 = state_27373;
if(inst_27330){
var statearr_27385_27428 = state_27373__$1;
(statearr_27385_27428[(1)] = (16));

} else {
var statearr_27386_27429 = state_27373__$1;
(statearr_27386_27429[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (22))){
var inst_27358 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
if(cljs.core.truth_(inst_27358)){
var statearr_27387_27430 = state_27373__$1;
(statearr_27387_27430[(1)] = (23));

} else {
var statearr_27388_27431 = state_27373__$1;
(statearr_27388_27431[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (6))){
var inst_27304 = (state_27373[(8)]);
var inst_27352 = (state_27373[(7)]);
var inst_27354 = (state_27373[(11)]);
var inst_27352__$1 = topic_fn.call(null,inst_27304);
var inst_27353 = cljs.core.deref.call(null,mults);
var inst_27354__$1 = cljs.core.get.call(null,inst_27353,inst_27352__$1);
var state_27373__$1 = (function (){var statearr_27389 = state_27373;
(statearr_27389[(7)] = inst_27352__$1);

(statearr_27389[(11)] = inst_27354__$1);

return statearr_27389;
})();
if(cljs.core.truth_(inst_27354__$1)){
var statearr_27390_27432 = state_27373__$1;
(statearr_27390_27432[(1)] = (19));

} else {
var statearr_27391_27433 = state_27373__$1;
(statearr_27391_27433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (25))){
var inst_27363 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27392_27434 = state_27373__$1;
(statearr_27392_27434[(2)] = inst_27363);

(statearr_27392_27434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (17))){
var inst_27328 = (state_27373[(10)]);
var inst_27337 = cljs.core.first.call(null,inst_27328);
var inst_27338 = cljs.core.async.muxch_STAR_.call(null,inst_27337);
var inst_27339 = cljs.core.async.close_BANG_.call(null,inst_27338);
var inst_27340 = cljs.core.next.call(null,inst_27328);
var inst_27314 = inst_27340;
var inst_27315 = null;
var inst_27316 = (0);
var inst_27317 = (0);
var state_27373__$1 = (function (){var statearr_27393 = state_27373;
(statearr_27393[(12)] = inst_27316);

(statearr_27393[(13)] = inst_27317);

(statearr_27393[(14)] = inst_27315);

(statearr_27393[(15)] = inst_27314);

(statearr_27393[(16)] = inst_27339);

return statearr_27393;
})();
var statearr_27394_27435 = state_27373__$1;
(statearr_27394_27435[(2)] = null);

(statearr_27394_27435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (3))){
var inst_27371 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27373__$1,inst_27371);
} else {
if((state_val_27374 === (12))){
var inst_27348 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27395_27436 = state_27373__$1;
(statearr_27395_27436[(2)] = inst_27348);

(statearr_27395_27436[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (2))){
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27373__$1,(4),ch);
} else {
if((state_val_27374 === (23))){
var state_27373__$1 = state_27373;
var statearr_27396_27437 = state_27373__$1;
(statearr_27396_27437[(2)] = null);

(statearr_27396_27437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (19))){
var inst_27304 = (state_27373[(8)]);
var inst_27354 = (state_27373[(11)]);
var inst_27356 = cljs.core.async.muxch_STAR_.call(null,inst_27354);
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27373__$1,(22),inst_27356,inst_27304);
} else {
if((state_val_27374 === (11))){
var inst_27328 = (state_27373[(10)]);
var inst_27314 = (state_27373[(15)]);
var inst_27328__$1 = cljs.core.seq.call(null,inst_27314);
var state_27373__$1 = (function (){var statearr_27397 = state_27373;
(statearr_27397[(10)] = inst_27328__$1);

return statearr_27397;
})();
if(inst_27328__$1){
var statearr_27398_27438 = state_27373__$1;
(statearr_27398_27438[(1)] = (13));

} else {
var statearr_27399_27439 = state_27373__$1;
(statearr_27399_27439[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (9))){
var inst_27350 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27400_27440 = state_27373__$1;
(statearr_27400_27440[(2)] = inst_27350);

(statearr_27400_27440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (5))){
var inst_27311 = cljs.core.deref.call(null,mults);
var inst_27312 = cljs.core.vals.call(null,inst_27311);
var inst_27313 = cljs.core.seq.call(null,inst_27312);
var inst_27314 = inst_27313;
var inst_27315 = null;
var inst_27316 = (0);
var inst_27317 = (0);
var state_27373__$1 = (function (){var statearr_27401 = state_27373;
(statearr_27401[(12)] = inst_27316);

(statearr_27401[(13)] = inst_27317);

(statearr_27401[(14)] = inst_27315);

(statearr_27401[(15)] = inst_27314);

return statearr_27401;
})();
var statearr_27402_27441 = state_27373__$1;
(statearr_27402_27441[(2)] = null);

(statearr_27402_27441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (14))){
var state_27373__$1 = state_27373;
var statearr_27406_27442 = state_27373__$1;
(statearr_27406_27442[(2)] = null);

(statearr_27406_27442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (16))){
var inst_27328 = (state_27373[(10)]);
var inst_27332 = cljs.core.chunk_first.call(null,inst_27328);
var inst_27333 = cljs.core.chunk_rest.call(null,inst_27328);
var inst_27334 = cljs.core.count.call(null,inst_27332);
var inst_27314 = inst_27333;
var inst_27315 = inst_27332;
var inst_27316 = inst_27334;
var inst_27317 = (0);
var state_27373__$1 = (function (){var statearr_27407 = state_27373;
(statearr_27407[(12)] = inst_27316);

(statearr_27407[(13)] = inst_27317);

(statearr_27407[(14)] = inst_27315);

(statearr_27407[(15)] = inst_27314);

return statearr_27407;
})();
var statearr_27408_27443 = state_27373__$1;
(statearr_27408_27443[(2)] = null);

(statearr_27408_27443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (10))){
var inst_27316 = (state_27373[(12)]);
var inst_27317 = (state_27373[(13)]);
var inst_27315 = (state_27373[(14)]);
var inst_27314 = (state_27373[(15)]);
var inst_27322 = cljs.core._nth.call(null,inst_27315,inst_27317);
var inst_27323 = cljs.core.async.muxch_STAR_.call(null,inst_27322);
var inst_27324 = cljs.core.async.close_BANG_.call(null,inst_27323);
var inst_27325 = (inst_27317 + (1));
var tmp27403 = inst_27316;
var tmp27404 = inst_27315;
var tmp27405 = inst_27314;
var inst_27314__$1 = tmp27405;
var inst_27315__$1 = tmp27404;
var inst_27316__$1 = tmp27403;
var inst_27317__$1 = inst_27325;
var state_27373__$1 = (function (){var statearr_27409 = state_27373;
(statearr_27409[(17)] = inst_27324);

(statearr_27409[(12)] = inst_27316__$1);

(statearr_27409[(13)] = inst_27317__$1);

(statearr_27409[(14)] = inst_27315__$1);

(statearr_27409[(15)] = inst_27314__$1);

return statearr_27409;
})();
var statearr_27410_27444 = state_27373__$1;
(statearr_27410_27444[(2)] = null);

(statearr_27410_27444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (18))){
var inst_27343 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27411_27445 = state_27373__$1;
(statearr_27411_27445[(2)] = inst_27343);

(statearr_27411_27445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (8))){
var inst_27316 = (state_27373[(12)]);
var inst_27317 = (state_27373[(13)]);
var inst_27319 = (inst_27317 < inst_27316);
var inst_27320 = inst_27319;
var state_27373__$1 = state_27373;
if(cljs.core.truth_(inst_27320)){
var statearr_27412_27446 = state_27373__$1;
(statearr_27412_27446[(1)] = (10));

} else {
var statearr_27413_27447 = state_27373__$1;
(statearr_27413_27447[(1)] = (11));

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
});})(c__24321__auto___27419,mults,ensure_mult,p))
;
return ((function (switch__24154__auto__,c__24321__auto___27419,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24155__auto__ = null;
var cljs$core$async$state_machine__24155__auto____0 = (function (){
var statearr_27414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27414[(0)] = cljs$core$async$state_machine__24155__auto__);

(statearr_27414[(1)] = (1));

return statearr_27414;
});
var cljs$core$async$state_machine__24155__auto____1 = (function (state_27373){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_27373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e27415){if((e27415 instanceof Object)){
var ex__24158__auto__ = e27415;
var statearr_27416_27448 = state_27373;
(statearr_27416_27448[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27449 = state_27373;
state_27373 = G__27449;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$state_machine__24155__auto__ = function(state_27373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24155__auto____1.call(this,state_27373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24155__auto____0;
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24155__auto____1;
return cljs$core$async$state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___27419,mults,ensure_mult,p))
})();
var state__24323__auto__ = (function (){var statearr_27417 = f__24322__auto__.call(null);
(statearr_27417[(6)] = c__24321__auto___27419);

return statearr_27417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___27419,mults,ensure_mult,p))
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
var G__27451 = arguments.length;
switch (G__27451) {
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
var G__27454 = arguments.length;
switch (G__27454) {
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
var G__27457 = arguments.length;
switch (G__27457) {
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
var c__24321__auto___27524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___27524,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___27524,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27496){
var state_val_27497 = (state_27496[(1)]);
if((state_val_27497 === (7))){
var state_27496__$1 = state_27496;
var statearr_27498_27525 = state_27496__$1;
(statearr_27498_27525[(2)] = null);

(statearr_27498_27525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (1))){
var state_27496__$1 = state_27496;
var statearr_27499_27526 = state_27496__$1;
(statearr_27499_27526[(2)] = null);

(statearr_27499_27526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (4))){
var inst_27460 = (state_27496[(7)]);
var inst_27462 = (inst_27460 < cnt);
var state_27496__$1 = state_27496;
if(cljs.core.truth_(inst_27462)){
var statearr_27500_27527 = state_27496__$1;
(statearr_27500_27527[(1)] = (6));

} else {
var statearr_27501_27528 = state_27496__$1;
(statearr_27501_27528[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (15))){
var inst_27492 = (state_27496[(2)]);
var state_27496__$1 = state_27496;
var statearr_27502_27529 = state_27496__$1;
(statearr_27502_27529[(2)] = inst_27492);

(statearr_27502_27529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (13))){
var inst_27485 = cljs.core.async.close_BANG_.call(null,out);
var state_27496__$1 = state_27496;
var statearr_27503_27530 = state_27496__$1;
(statearr_27503_27530[(2)] = inst_27485);

(statearr_27503_27530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (6))){
var state_27496__$1 = state_27496;
var statearr_27504_27531 = state_27496__$1;
(statearr_27504_27531[(2)] = null);

(statearr_27504_27531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (3))){
var inst_27494 = (state_27496[(2)]);
var state_27496__$1 = state_27496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27496__$1,inst_27494);
} else {
if((state_val_27497 === (12))){
var inst_27482 = (state_27496[(8)]);
var inst_27482__$1 = (state_27496[(2)]);
var inst_27483 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27482__$1);
var state_27496__$1 = (function (){var statearr_27505 = state_27496;
(statearr_27505[(8)] = inst_27482__$1);

return statearr_27505;
})();
if(cljs.core.truth_(inst_27483)){
var statearr_27506_27532 = state_27496__$1;
(statearr_27506_27532[(1)] = (13));

} else {
var statearr_27507_27533 = state_27496__$1;
(statearr_27507_27533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (2))){
var inst_27459 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27460 = (0);
var state_27496__$1 = (function (){var statearr_27508 = state_27496;
(statearr_27508[(9)] = inst_27459);

(statearr_27508[(7)] = inst_27460);

return statearr_27508;
})();
var statearr_27509_27534 = state_27496__$1;
(statearr_27509_27534[(2)] = null);

(statearr_27509_27534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (11))){
var inst_27460 = (state_27496[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27496,(10),Object,null,(9));
var inst_27469 = chs__$1.call(null,inst_27460);
var inst_27470 = done.call(null,inst_27460);
var inst_27471 = cljs.core.async.take_BANG_.call(null,inst_27469,inst_27470);
var state_27496__$1 = state_27496;
var statearr_27510_27535 = state_27496__$1;
(statearr_27510_27535[(2)] = inst_27471);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27496__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (9))){
var inst_27460 = (state_27496[(7)]);
var inst_27473 = (state_27496[(2)]);
var inst_27474 = (inst_27460 + (1));
var inst_27460__$1 = inst_27474;
var state_27496__$1 = (function (){var statearr_27511 = state_27496;
(statearr_27511[(10)] = inst_27473);

(statearr_27511[(7)] = inst_27460__$1);

return statearr_27511;
})();
var statearr_27512_27536 = state_27496__$1;
(statearr_27512_27536[(2)] = null);

(statearr_27512_27536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (5))){
var inst_27480 = (state_27496[(2)]);
var state_27496__$1 = (function (){var statearr_27513 = state_27496;
(statearr_27513[(11)] = inst_27480);

return statearr_27513;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27496__$1,(12),dchan);
} else {
if((state_val_27497 === (14))){
var inst_27482 = (state_27496[(8)]);
var inst_27487 = cljs.core.apply.call(null,f,inst_27482);
var state_27496__$1 = state_27496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27496__$1,(16),out,inst_27487);
} else {
if((state_val_27497 === (16))){
var inst_27489 = (state_27496[(2)]);
var state_27496__$1 = (function (){var statearr_27514 = state_27496;
(statearr_27514[(12)] = inst_27489);

return statearr_27514;
})();
var statearr_27515_27537 = state_27496__$1;
(statearr_27515_27537[(2)] = null);

(statearr_27515_27537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (10))){
var inst_27464 = (state_27496[(2)]);
var inst_27465 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27496__$1 = (function (){var statearr_27516 = state_27496;
(statearr_27516[(13)] = inst_27464);

return statearr_27516;
})();
var statearr_27517_27538 = state_27496__$1;
(statearr_27517_27538[(2)] = inst_27465);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27496__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (8))){
var inst_27478 = (state_27496[(2)]);
var state_27496__$1 = state_27496;
var statearr_27518_27539 = state_27496__$1;
(statearr_27518_27539[(2)] = inst_27478);

(statearr_27518_27539[(1)] = (5));


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
});})(c__24321__auto___27524,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24154__auto__,c__24321__auto___27524,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24155__auto__ = null;
var cljs$core$async$state_machine__24155__auto____0 = (function (){
var statearr_27519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27519[(0)] = cljs$core$async$state_machine__24155__auto__);

(statearr_27519[(1)] = (1));

return statearr_27519;
});
var cljs$core$async$state_machine__24155__auto____1 = (function (state_27496){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_27496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e27520){if((e27520 instanceof Object)){
var ex__24158__auto__ = e27520;
var statearr_27521_27540 = state_27496;
(statearr_27521_27540[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27541 = state_27496;
state_27496 = G__27541;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$state_machine__24155__auto__ = function(state_27496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24155__auto____1.call(this,state_27496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24155__auto____0;
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24155__auto____1;
return cljs$core$async$state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___27524,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24323__auto__ = (function (){var statearr_27522 = f__24322__auto__.call(null);
(statearr_27522[(6)] = c__24321__auto___27524);

return statearr_27522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___27524,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27544 = arguments.length;
switch (G__27544) {
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
var c__24321__auto___27598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___27598,out){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___27598,out){
return (function (state_27576){
var state_val_27577 = (state_27576[(1)]);
if((state_val_27577 === (7))){
var inst_27556 = (state_27576[(7)]);
var inst_27555 = (state_27576[(8)]);
var inst_27555__$1 = (state_27576[(2)]);
var inst_27556__$1 = cljs.core.nth.call(null,inst_27555__$1,(0),null);
var inst_27557 = cljs.core.nth.call(null,inst_27555__$1,(1),null);
var inst_27558 = (inst_27556__$1 == null);
var state_27576__$1 = (function (){var statearr_27578 = state_27576;
(statearr_27578[(7)] = inst_27556__$1);

(statearr_27578[(8)] = inst_27555__$1);

(statearr_27578[(9)] = inst_27557);

return statearr_27578;
})();
if(cljs.core.truth_(inst_27558)){
var statearr_27579_27599 = state_27576__$1;
(statearr_27579_27599[(1)] = (8));

} else {
var statearr_27580_27600 = state_27576__$1;
(statearr_27580_27600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (1))){
var inst_27545 = cljs.core.vec.call(null,chs);
var inst_27546 = inst_27545;
var state_27576__$1 = (function (){var statearr_27581 = state_27576;
(statearr_27581[(10)] = inst_27546);

return statearr_27581;
})();
var statearr_27582_27601 = state_27576__$1;
(statearr_27582_27601[(2)] = null);

(statearr_27582_27601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (4))){
var inst_27546 = (state_27576[(10)]);
var state_27576__$1 = state_27576;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27576__$1,(7),inst_27546);
} else {
if((state_val_27577 === (6))){
var inst_27572 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27583_27602 = state_27576__$1;
(statearr_27583_27602[(2)] = inst_27572);

(statearr_27583_27602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (3))){
var inst_27574 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27576__$1,inst_27574);
} else {
if((state_val_27577 === (2))){
var inst_27546 = (state_27576[(10)]);
var inst_27548 = cljs.core.count.call(null,inst_27546);
var inst_27549 = (inst_27548 > (0));
var state_27576__$1 = state_27576;
if(cljs.core.truth_(inst_27549)){
var statearr_27585_27603 = state_27576__$1;
(statearr_27585_27603[(1)] = (4));

} else {
var statearr_27586_27604 = state_27576__$1;
(statearr_27586_27604[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (11))){
var inst_27546 = (state_27576[(10)]);
var inst_27565 = (state_27576[(2)]);
var tmp27584 = inst_27546;
var inst_27546__$1 = tmp27584;
var state_27576__$1 = (function (){var statearr_27587 = state_27576;
(statearr_27587[(10)] = inst_27546__$1);

(statearr_27587[(11)] = inst_27565);

return statearr_27587;
})();
var statearr_27588_27605 = state_27576__$1;
(statearr_27588_27605[(2)] = null);

(statearr_27588_27605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (9))){
var inst_27556 = (state_27576[(7)]);
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27576__$1,(11),out,inst_27556);
} else {
if((state_val_27577 === (5))){
var inst_27570 = cljs.core.async.close_BANG_.call(null,out);
var state_27576__$1 = state_27576;
var statearr_27589_27606 = state_27576__$1;
(statearr_27589_27606[(2)] = inst_27570);

(statearr_27589_27606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (10))){
var inst_27568 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27590_27607 = state_27576__$1;
(statearr_27590_27607[(2)] = inst_27568);

(statearr_27590_27607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (8))){
var inst_27556 = (state_27576[(7)]);
var inst_27555 = (state_27576[(8)]);
var inst_27546 = (state_27576[(10)]);
var inst_27557 = (state_27576[(9)]);
var inst_27560 = (function (){var cs = inst_27546;
var vec__27551 = inst_27555;
var v = inst_27556;
var c = inst_27557;
return ((function (cs,vec__27551,v,c,inst_27556,inst_27555,inst_27546,inst_27557,state_val_27577,c__24321__auto___27598,out){
return (function (p1__27542_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27542_SHARP_);
});
;})(cs,vec__27551,v,c,inst_27556,inst_27555,inst_27546,inst_27557,state_val_27577,c__24321__auto___27598,out))
})();
var inst_27561 = cljs.core.filterv.call(null,inst_27560,inst_27546);
var inst_27546__$1 = inst_27561;
var state_27576__$1 = (function (){var statearr_27591 = state_27576;
(statearr_27591[(10)] = inst_27546__$1);

return statearr_27591;
})();
var statearr_27592_27608 = state_27576__$1;
(statearr_27592_27608[(2)] = null);

(statearr_27592_27608[(1)] = (2));


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
});})(c__24321__auto___27598,out))
;
return ((function (switch__24154__auto__,c__24321__auto___27598,out){
return (function() {
var cljs$core$async$state_machine__24155__auto__ = null;
var cljs$core$async$state_machine__24155__auto____0 = (function (){
var statearr_27593 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27593[(0)] = cljs$core$async$state_machine__24155__auto__);

(statearr_27593[(1)] = (1));

return statearr_27593;
});
var cljs$core$async$state_machine__24155__auto____1 = (function (state_27576){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_27576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e27594){if((e27594 instanceof Object)){
var ex__24158__auto__ = e27594;
var statearr_27595_27609 = state_27576;
(statearr_27595_27609[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27610 = state_27576;
state_27576 = G__27610;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$state_machine__24155__auto__ = function(state_27576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24155__auto____1.call(this,state_27576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24155__auto____0;
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24155__auto____1;
return cljs$core$async$state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___27598,out))
})();
var state__24323__auto__ = (function (){var statearr_27596 = f__24322__auto__.call(null);
(statearr_27596[(6)] = c__24321__auto___27598);

return statearr_27596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___27598,out))
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
var G__27612 = arguments.length;
switch (G__27612) {
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
var c__24321__auto___27657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___27657,out){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___27657,out){
return (function (state_27636){
var state_val_27637 = (state_27636[(1)]);
if((state_val_27637 === (7))){
var inst_27618 = (state_27636[(7)]);
var inst_27618__$1 = (state_27636[(2)]);
var inst_27619 = (inst_27618__$1 == null);
var inst_27620 = cljs.core.not.call(null,inst_27619);
var state_27636__$1 = (function (){var statearr_27638 = state_27636;
(statearr_27638[(7)] = inst_27618__$1);

return statearr_27638;
})();
if(inst_27620){
var statearr_27639_27658 = state_27636__$1;
(statearr_27639_27658[(1)] = (8));

} else {
var statearr_27640_27659 = state_27636__$1;
(statearr_27640_27659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (1))){
var inst_27613 = (0);
var state_27636__$1 = (function (){var statearr_27641 = state_27636;
(statearr_27641[(8)] = inst_27613);

return statearr_27641;
})();
var statearr_27642_27660 = state_27636__$1;
(statearr_27642_27660[(2)] = null);

(statearr_27642_27660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (4))){
var state_27636__$1 = state_27636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27636__$1,(7),ch);
} else {
if((state_val_27637 === (6))){
var inst_27631 = (state_27636[(2)]);
var state_27636__$1 = state_27636;
var statearr_27643_27661 = state_27636__$1;
(statearr_27643_27661[(2)] = inst_27631);

(statearr_27643_27661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (3))){
var inst_27633 = (state_27636[(2)]);
var inst_27634 = cljs.core.async.close_BANG_.call(null,out);
var state_27636__$1 = (function (){var statearr_27644 = state_27636;
(statearr_27644[(9)] = inst_27633);

return statearr_27644;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27636__$1,inst_27634);
} else {
if((state_val_27637 === (2))){
var inst_27613 = (state_27636[(8)]);
var inst_27615 = (inst_27613 < n);
var state_27636__$1 = state_27636;
if(cljs.core.truth_(inst_27615)){
var statearr_27645_27662 = state_27636__$1;
(statearr_27645_27662[(1)] = (4));

} else {
var statearr_27646_27663 = state_27636__$1;
(statearr_27646_27663[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (11))){
var inst_27613 = (state_27636[(8)]);
var inst_27623 = (state_27636[(2)]);
var inst_27624 = (inst_27613 + (1));
var inst_27613__$1 = inst_27624;
var state_27636__$1 = (function (){var statearr_27647 = state_27636;
(statearr_27647[(10)] = inst_27623);

(statearr_27647[(8)] = inst_27613__$1);

return statearr_27647;
})();
var statearr_27648_27664 = state_27636__$1;
(statearr_27648_27664[(2)] = null);

(statearr_27648_27664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (9))){
var state_27636__$1 = state_27636;
var statearr_27649_27665 = state_27636__$1;
(statearr_27649_27665[(2)] = null);

(statearr_27649_27665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (5))){
var state_27636__$1 = state_27636;
var statearr_27650_27666 = state_27636__$1;
(statearr_27650_27666[(2)] = null);

(statearr_27650_27666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (10))){
var inst_27628 = (state_27636[(2)]);
var state_27636__$1 = state_27636;
var statearr_27651_27667 = state_27636__$1;
(statearr_27651_27667[(2)] = inst_27628);

(statearr_27651_27667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (8))){
var inst_27618 = (state_27636[(7)]);
var state_27636__$1 = state_27636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27636__$1,(11),out,inst_27618);
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
});})(c__24321__auto___27657,out))
;
return ((function (switch__24154__auto__,c__24321__auto___27657,out){
return (function() {
var cljs$core$async$state_machine__24155__auto__ = null;
var cljs$core$async$state_machine__24155__auto____0 = (function (){
var statearr_27652 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27652[(0)] = cljs$core$async$state_machine__24155__auto__);

(statearr_27652[(1)] = (1));

return statearr_27652;
});
var cljs$core$async$state_machine__24155__auto____1 = (function (state_27636){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_27636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e27653){if((e27653 instanceof Object)){
var ex__24158__auto__ = e27653;
var statearr_27654_27668 = state_27636;
(statearr_27654_27668[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27669 = state_27636;
state_27636 = G__27669;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$state_machine__24155__auto__ = function(state_27636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24155__auto____1.call(this,state_27636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24155__auto____0;
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24155__auto____1;
return cljs$core$async$state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___27657,out))
})();
var state__24323__auto__ = (function (){var statearr_27655 = f__24322__auto__.call(null);
(statearr_27655[(6)] = c__24321__auto___27657);

return statearr_27655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___27657,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27671 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27671 = (function (f,ch,meta27672){
this.f = f;
this.ch = ch;
this.meta27672 = meta27672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27673,meta27672__$1){
var self__ = this;
var _27673__$1 = this;
return (new cljs.core.async.t_cljs$core$async27671(self__.f,self__.ch,meta27672__$1));
});

cljs.core.async.t_cljs$core$async27671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27673){
var self__ = this;
var _27673__$1 = this;
return self__.meta27672;
});

cljs.core.async.t_cljs$core$async27671.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27671.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27671.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27671.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27671.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27674 = (function (f,ch,meta27672,_,fn1,meta27675){
this.f = f;
this.ch = ch;
this.meta27672 = meta27672;
this._ = _;
this.fn1 = fn1;
this.meta27675 = meta27675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27676,meta27675__$1){
var self__ = this;
var _27676__$1 = this;
return (new cljs.core.async.t_cljs$core$async27674(self__.f,self__.ch,self__.meta27672,self__._,self__.fn1,meta27675__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27676){
var self__ = this;
var _27676__$1 = this;
return self__.meta27675;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27674.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27674.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27674.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27674.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27670_SHARP_){
return f1.call(null,(((p1__27670_SHARP_ == null))?null:self__.f.call(null,p1__27670_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27674.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27672","meta27672",989375852,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27671","cljs.core.async/t_cljs$core$async27671",-630555015,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27675","meta27675",765695200,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27674";

cljs.core.async.t_cljs$core$async27674.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27674");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27674.
 */
cljs.core.async.__GT_t_cljs$core$async27674 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27674(f__$1,ch__$1,meta27672__$1,___$2,fn1__$1,meta27675){
return (new cljs.core.async.t_cljs$core$async27674(f__$1,ch__$1,meta27672__$1,___$2,fn1__$1,meta27675));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27674(self__.f,self__.ch,self__.meta27672,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async27671.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27671.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27672","meta27672",989375852,null)], null);
});

cljs.core.async.t_cljs$core$async27671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27671";

cljs.core.async.t_cljs$core$async27671.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27671");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27671.
 */
cljs.core.async.__GT_t_cljs$core$async27671 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27671(f__$1,ch__$1,meta27672){
return (new cljs.core.async.t_cljs$core$async27671(f__$1,ch__$1,meta27672));
});

}

return (new cljs.core.async.t_cljs$core$async27671(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27677 = (function (f,ch,meta27678){
this.f = f;
this.ch = ch;
this.meta27678 = meta27678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27679,meta27678__$1){
var self__ = this;
var _27679__$1 = this;
return (new cljs.core.async.t_cljs$core$async27677(self__.f,self__.ch,meta27678__$1));
});

cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27679){
var self__ = this;
var _27679__$1 = this;
return self__.meta27678;
});

cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27677.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27678","meta27678",-1769562253,null)], null);
});

cljs.core.async.t_cljs$core$async27677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27677";

cljs.core.async.t_cljs$core$async27677.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27677");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27677.
 */
cljs.core.async.__GT_t_cljs$core$async27677 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27677(f__$1,ch__$1,meta27678){
return (new cljs.core.async.t_cljs$core$async27677(f__$1,ch__$1,meta27678));
});

}

return (new cljs.core.async.t_cljs$core$async27677(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27680 = (function (p,ch,meta27681){
this.p = p;
this.ch = ch;
this.meta27681 = meta27681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27682,meta27681__$1){
var self__ = this;
var _27682__$1 = this;
return (new cljs.core.async.t_cljs$core$async27680(self__.p,self__.ch,meta27681__$1));
});

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27682){
var self__ = this;
var _27682__$1 = this;
return self__.meta27681;
});

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27680.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27681","meta27681",1597195789,null)], null);
});

cljs.core.async.t_cljs$core$async27680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27680";

cljs.core.async.t_cljs$core$async27680.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27680");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27680.
 */
cljs.core.async.__GT_t_cljs$core$async27680 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27680(p__$1,ch__$1,meta27681){
return (new cljs.core.async.t_cljs$core$async27680(p__$1,ch__$1,meta27681));
});

}

return (new cljs.core.async.t_cljs$core$async27680(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27684 = arguments.length;
switch (G__27684) {
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
var c__24321__auto___27724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___27724,out){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___27724,out){
return (function (state_27705){
var state_val_27706 = (state_27705[(1)]);
if((state_val_27706 === (7))){
var inst_27701 = (state_27705[(2)]);
var state_27705__$1 = state_27705;
var statearr_27707_27725 = state_27705__$1;
(statearr_27707_27725[(2)] = inst_27701);

(statearr_27707_27725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27706 === (1))){
var state_27705__$1 = state_27705;
var statearr_27708_27726 = state_27705__$1;
(statearr_27708_27726[(2)] = null);

(statearr_27708_27726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27706 === (4))){
var inst_27687 = (state_27705[(7)]);
var inst_27687__$1 = (state_27705[(2)]);
var inst_27688 = (inst_27687__$1 == null);
var state_27705__$1 = (function (){var statearr_27709 = state_27705;
(statearr_27709[(7)] = inst_27687__$1);

return statearr_27709;
})();
if(cljs.core.truth_(inst_27688)){
var statearr_27710_27727 = state_27705__$1;
(statearr_27710_27727[(1)] = (5));

} else {
var statearr_27711_27728 = state_27705__$1;
(statearr_27711_27728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27706 === (6))){
var inst_27687 = (state_27705[(7)]);
var inst_27692 = p.call(null,inst_27687);
var state_27705__$1 = state_27705;
if(cljs.core.truth_(inst_27692)){
var statearr_27712_27729 = state_27705__$1;
(statearr_27712_27729[(1)] = (8));

} else {
var statearr_27713_27730 = state_27705__$1;
(statearr_27713_27730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27706 === (3))){
var inst_27703 = (state_27705[(2)]);
var state_27705__$1 = state_27705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27705__$1,inst_27703);
} else {
if((state_val_27706 === (2))){
var state_27705__$1 = state_27705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27705__$1,(4),ch);
} else {
if((state_val_27706 === (11))){
var inst_27695 = (state_27705[(2)]);
var state_27705__$1 = state_27705;
var statearr_27714_27731 = state_27705__$1;
(statearr_27714_27731[(2)] = inst_27695);

(statearr_27714_27731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27706 === (9))){
var state_27705__$1 = state_27705;
var statearr_27715_27732 = state_27705__$1;
(statearr_27715_27732[(2)] = null);

(statearr_27715_27732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27706 === (5))){
var inst_27690 = cljs.core.async.close_BANG_.call(null,out);
var state_27705__$1 = state_27705;
var statearr_27716_27733 = state_27705__$1;
(statearr_27716_27733[(2)] = inst_27690);

(statearr_27716_27733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27706 === (10))){
var inst_27698 = (state_27705[(2)]);
var state_27705__$1 = (function (){var statearr_27717 = state_27705;
(statearr_27717[(8)] = inst_27698);

return statearr_27717;
})();
var statearr_27718_27734 = state_27705__$1;
(statearr_27718_27734[(2)] = null);

(statearr_27718_27734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27706 === (8))){
var inst_27687 = (state_27705[(7)]);
var state_27705__$1 = state_27705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27705__$1,(11),out,inst_27687);
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
});})(c__24321__auto___27724,out))
;
return ((function (switch__24154__auto__,c__24321__auto___27724,out){
return (function() {
var cljs$core$async$state_machine__24155__auto__ = null;
var cljs$core$async$state_machine__24155__auto____0 = (function (){
var statearr_27719 = [null,null,null,null,null,null,null,null,null];
(statearr_27719[(0)] = cljs$core$async$state_machine__24155__auto__);

(statearr_27719[(1)] = (1));

return statearr_27719;
});
var cljs$core$async$state_machine__24155__auto____1 = (function (state_27705){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_27705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e27720){if((e27720 instanceof Object)){
var ex__24158__auto__ = e27720;
var statearr_27721_27735 = state_27705;
(statearr_27721_27735[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27736 = state_27705;
state_27705 = G__27736;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$state_machine__24155__auto__ = function(state_27705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24155__auto____1.call(this,state_27705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24155__auto____0;
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24155__auto____1;
return cljs$core$async$state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___27724,out))
})();
var state__24323__auto__ = (function (){var statearr_27722 = f__24322__auto__.call(null);
(statearr_27722[(6)] = c__24321__auto___27724);

return statearr_27722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___27724,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27738 = arguments.length;
switch (G__27738) {
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
var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto__){
return (function (state_27801){
var state_val_27802 = (state_27801[(1)]);
if((state_val_27802 === (7))){
var inst_27797 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27803_27841 = state_27801__$1;
(statearr_27803_27841[(2)] = inst_27797);

(statearr_27803_27841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (20))){
var inst_27767 = (state_27801[(7)]);
var inst_27778 = (state_27801[(2)]);
var inst_27779 = cljs.core.next.call(null,inst_27767);
var inst_27753 = inst_27779;
var inst_27754 = null;
var inst_27755 = (0);
var inst_27756 = (0);
var state_27801__$1 = (function (){var statearr_27804 = state_27801;
(statearr_27804[(8)] = inst_27753);

(statearr_27804[(9)] = inst_27778);

(statearr_27804[(10)] = inst_27756);

(statearr_27804[(11)] = inst_27755);

(statearr_27804[(12)] = inst_27754);

return statearr_27804;
})();
var statearr_27805_27842 = state_27801__$1;
(statearr_27805_27842[(2)] = null);

(statearr_27805_27842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (1))){
var state_27801__$1 = state_27801;
var statearr_27806_27843 = state_27801__$1;
(statearr_27806_27843[(2)] = null);

(statearr_27806_27843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (4))){
var inst_27742 = (state_27801[(13)]);
var inst_27742__$1 = (state_27801[(2)]);
var inst_27743 = (inst_27742__$1 == null);
var state_27801__$1 = (function (){var statearr_27807 = state_27801;
(statearr_27807[(13)] = inst_27742__$1);

return statearr_27807;
})();
if(cljs.core.truth_(inst_27743)){
var statearr_27808_27844 = state_27801__$1;
(statearr_27808_27844[(1)] = (5));

} else {
var statearr_27809_27845 = state_27801__$1;
(statearr_27809_27845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (15))){
var state_27801__$1 = state_27801;
var statearr_27813_27846 = state_27801__$1;
(statearr_27813_27846[(2)] = null);

(statearr_27813_27846[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (21))){
var state_27801__$1 = state_27801;
var statearr_27814_27847 = state_27801__$1;
(statearr_27814_27847[(2)] = null);

(statearr_27814_27847[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (13))){
var inst_27753 = (state_27801[(8)]);
var inst_27756 = (state_27801[(10)]);
var inst_27755 = (state_27801[(11)]);
var inst_27754 = (state_27801[(12)]);
var inst_27763 = (state_27801[(2)]);
var inst_27764 = (inst_27756 + (1));
var tmp27810 = inst_27753;
var tmp27811 = inst_27755;
var tmp27812 = inst_27754;
var inst_27753__$1 = tmp27810;
var inst_27754__$1 = tmp27812;
var inst_27755__$1 = tmp27811;
var inst_27756__$1 = inst_27764;
var state_27801__$1 = (function (){var statearr_27815 = state_27801;
(statearr_27815[(8)] = inst_27753__$1);

(statearr_27815[(10)] = inst_27756__$1);

(statearr_27815[(11)] = inst_27755__$1);

(statearr_27815[(14)] = inst_27763);

(statearr_27815[(12)] = inst_27754__$1);

return statearr_27815;
})();
var statearr_27816_27848 = state_27801__$1;
(statearr_27816_27848[(2)] = null);

(statearr_27816_27848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (22))){
var state_27801__$1 = state_27801;
var statearr_27817_27849 = state_27801__$1;
(statearr_27817_27849[(2)] = null);

(statearr_27817_27849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (6))){
var inst_27742 = (state_27801[(13)]);
var inst_27751 = f.call(null,inst_27742);
var inst_27752 = cljs.core.seq.call(null,inst_27751);
var inst_27753 = inst_27752;
var inst_27754 = null;
var inst_27755 = (0);
var inst_27756 = (0);
var state_27801__$1 = (function (){var statearr_27818 = state_27801;
(statearr_27818[(8)] = inst_27753);

(statearr_27818[(10)] = inst_27756);

(statearr_27818[(11)] = inst_27755);

(statearr_27818[(12)] = inst_27754);

return statearr_27818;
})();
var statearr_27819_27850 = state_27801__$1;
(statearr_27819_27850[(2)] = null);

(statearr_27819_27850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (17))){
var inst_27767 = (state_27801[(7)]);
var inst_27771 = cljs.core.chunk_first.call(null,inst_27767);
var inst_27772 = cljs.core.chunk_rest.call(null,inst_27767);
var inst_27773 = cljs.core.count.call(null,inst_27771);
var inst_27753 = inst_27772;
var inst_27754 = inst_27771;
var inst_27755 = inst_27773;
var inst_27756 = (0);
var state_27801__$1 = (function (){var statearr_27820 = state_27801;
(statearr_27820[(8)] = inst_27753);

(statearr_27820[(10)] = inst_27756);

(statearr_27820[(11)] = inst_27755);

(statearr_27820[(12)] = inst_27754);

return statearr_27820;
})();
var statearr_27821_27851 = state_27801__$1;
(statearr_27821_27851[(2)] = null);

(statearr_27821_27851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (3))){
var inst_27799 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27801__$1,inst_27799);
} else {
if((state_val_27802 === (12))){
var inst_27787 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27822_27852 = state_27801__$1;
(statearr_27822_27852[(2)] = inst_27787);

(statearr_27822_27852[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (2))){
var state_27801__$1 = state_27801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27801__$1,(4),in$);
} else {
if((state_val_27802 === (23))){
var inst_27795 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27823_27853 = state_27801__$1;
(statearr_27823_27853[(2)] = inst_27795);

(statearr_27823_27853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (19))){
var inst_27782 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27824_27854 = state_27801__$1;
(statearr_27824_27854[(2)] = inst_27782);

(statearr_27824_27854[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (11))){
var inst_27753 = (state_27801[(8)]);
var inst_27767 = (state_27801[(7)]);
var inst_27767__$1 = cljs.core.seq.call(null,inst_27753);
var state_27801__$1 = (function (){var statearr_27825 = state_27801;
(statearr_27825[(7)] = inst_27767__$1);

return statearr_27825;
})();
if(inst_27767__$1){
var statearr_27826_27855 = state_27801__$1;
(statearr_27826_27855[(1)] = (14));

} else {
var statearr_27827_27856 = state_27801__$1;
(statearr_27827_27856[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (9))){
var inst_27789 = (state_27801[(2)]);
var inst_27790 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27801__$1 = (function (){var statearr_27828 = state_27801;
(statearr_27828[(15)] = inst_27789);

return statearr_27828;
})();
if(cljs.core.truth_(inst_27790)){
var statearr_27829_27857 = state_27801__$1;
(statearr_27829_27857[(1)] = (21));

} else {
var statearr_27830_27858 = state_27801__$1;
(statearr_27830_27858[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (5))){
var inst_27745 = cljs.core.async.close_BANG_.call(null,out);
var state_27801__$1 = state_27801;
var statearr_27831_27859 = state_27801__$1;
(statearr_27831_27859[(2)] = inst_27745);

(statearr_27831_27859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (14))){
var inst_27767 = (state_27801[(7)]);
var inst_27769 = cljs.core.chunked_seq_QMARK_.call(null,inst_27767);
var state_27801__$1 = state_27801;
if(inst_27769){
var statearr_27832_27860 = state_27801__$1;
(statearr_27832_27860[(1)] = (17));

} else {
var statearr_27833_27861 = state_27801__$1;
(statearr_27833_27861[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (16))){
var inst_27785 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27834_27862 = state_27801__$1;
(statearr_27834_27862[(2)] = inst_27785);

(statearr_27834_27862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (10))){
var inst_27756 = (state_27801[(10)]);
var inst_27754 = (state_27801[(12)]);
var inst_27761 = cljs.core._nth.call(null,inst_27754,inst_27756);
var state_27801__$1 = state_27801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27801__$1,(13),out,inst_27761);
} else {
if((state_val_27802 === (18))){
var inst_27767 = (state_27801[(7)]);
var inst_27776 = cljs.core.first.call(null,inst_27767);
var state_27801__$1 = state_27801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27801__$1,(20),out,inst_27776);
} else {
if((state_val_27802 === (8))){
var inst_27756 = (state_27801[(10)]);
var inst_27755 = (state_27801[(11)]);
var inst_27758 = (inst_27756 < inst_27755);
var inst_27759 = inst_27758;
var state_27801__$1 = state_27801;
if(cljs.core.truth_(inst_27759)){
var statearr_27835_27863 = state_27801__$1;
(statearr_27835_27863[(1)] = (10));

} else {
var statearr_27836_27864 = state_27801__$1;
(statearr_27836_27864[(1)] = (11));

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
});})(c__24321__auto__))
;
return ((function (switch__24154__auto__,c__24321__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24155__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24155__auto____0 = (function (){
var statearr_27837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27837[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24155__auto__);

(statearr_27837[(1)] = (1));

return statearr_27837;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24155__auto____1 = (function (state_27801){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_27801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e27838){if((e27838 instanceof Object)){
var ex__24158__auto__ = e27838;
var statearr_27839_27865 = state_27801;
(statearr_27839_27865[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27866 = state_27801;
state_27801 = G__27866;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24155__auto__ = function(state_27801){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24155__auto____1.call(this,state_27801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24155__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24155__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto__))
})();
var state__24323__auto__ = (function (){var statearr_27840 = f__24322__auto__.call(null);
(statearr_27840[(6)] = c__24321__auto__);

return statearr_27840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__))
);

return c__24321__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27868 = arguments.length;
switch (G__27868) {
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
var G__27871 = arguments.length;
switch (G__27871) {
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
var G__27874 = arguments.length;
switch (G__27874) {
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
var c__24321__auto___27921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___27921,out){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___27921,out){
return (function (state_27898){
var state_val_27899 = (state_27898[(1)]);
if((state_val_27899 === (7))){
var inst_27893 = (state_27898[(2)]);
var state_27898__$1 = state_27898;
var statearr_27900_27922 = state_27898__$1;
(statearr_27900_27922[(2)] = inst_27893);

(statearr_27900_27922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (1))){
var inst_27875 = null;
var state_27898__$1 = (function (){var statearr_27901 = state_27898;
(statearr_27901[(7)] = inst_27875);

return statearr_27901;
})();
var statearr_27902_27923 = state_27898__$1;
(statearr_27902_27923[(2)] = null);

(statearr_27902_27923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (4))){
var inst_27878 = (state_27898[(8)]);
var inst_27878__$1 = (state_27898[(2)]);
var inst_27879 = (inst_27878__$1 == null);
var inst_27880 = cljs.core.not.call(null,inst_27879);
var state_27898__$1 = (function (){var statearr_27903 = state_27898;
(statearr_27903[(8)] = inst_27878__$1);

return statearr_27903;
})();
if(inst_27880){
var statearr_27904_27924 = state_27898__$1;
(statearr_27904_27924[(1)] = (5));

} else {
var statearr_27905_27925 = state_27898__$1;
(statearr_27905_27925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (6))){
var state_27898__$1 = state_27898;
var statearr_27906_27926 = state_27898__$1;
(statearr_27906_27926[(2)] = null);

(statearr_27906_27926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (3))){
var inst_27895 = (state_27898[(2)]);
var inst_27896 = cljs.core.async.close_BANG_.call(null,out);
var state_27898__$1 = (function (){var statearr_27907 = state_27898;
(statearr_27907[(9)] = inst_27895);

return statearr_27907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27898__$1,inst_27896);
} else {
if((state_val_27899 === (2))){
var state_27898__$1 = state_27898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27898__$1,(4),ch);
} else {
if((state_val_27899 === (11))){
var inst_27878 = (state_27898[(8)]);
var inst_27887 = (state_27898[(2)]);
var inst_27875 = inst_27878;
var state_27898__$1 = (function (){var statearr_27908 = state_27898;
(statearr_27908[(10)] = inst_27887);

(statearr_27908[(7)] = inst_27875);

return statearr_27908;
})();
var statearr_27909_27927 = state_27898__$1;
(statearr_27909_27927[(2)] = null);

(statearr_27909_27927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (9))){
var inst_27878 = (state_27898[(8)]);
var state_27898__$1 = state_27898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27898__$1,(11),out,inst_27878);
} else {
if((state_val_27899 === (5))){
var inst_27875 = (state_27898[(7)]);
var inst_27878 = (state_27898[(8)]);
var inst_27882 = cljs.core._EQ_.call(null,inst_27878,inst_27875);
var state_27898__$1 = state_27898;
if(inst_27882){
var statearr_27911_27928 = state_27898__$1;
(statearr_27911_27928[(1)] = (8));

} else {
var statearr_27912_27929 = state_27898__$1;
(statearr_27912_27929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (10))){
var inst_27890 = (state_27898[(2)]);
var state_27898__$1 = state_27898;
var statearr_27913_27930 = state_27898__$1;
(statearr_27913_27930[(2)] = inst_27890);

(statearr_27913_27930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (8))){
var inst_27875 = (state_27898[(7)]);
var tmp27910 = inst_27875;
var inst_27875__$1 = tmp27910;
var state_27898__$1 = (function (){var statearr_27914 = state_27898;
(statearr_27914[(7)] = inst_27875__$1);

return statearr_27914;
})();
var statearr_27915_27931 = state_27898__$1;
(statearr_27915_27931[(2)] = null);

(statearr_27915_27931[(1)] = (2));


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
});})(c__24321__auto___27921,out))
;
return ((function (switch__24154__auto__,c__24321__auto___27921,out){
return (function() {
var cljs$core$async$state_machine__24155__auto__ = null;
var cljs$core$async$state_machine__24155__auto____0 = (function (){
var statearr_27916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27916[(0)] = cljs$core$async$state_machine__24155__auto__);

(statearr_27916[(1)] = (1));

return statearr_27916;
});
var cljs$core$async$state_machine__24155__auto____1 = (function (state_27898){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_27898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e27917){if((e27917 instanceof Object)){
var ex__24158__auto__ = e27917;
var statearr_27918_27932 = state_27898;
(statearr_27918_27932[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27933 = state_27898;
state_27898 = G__27933;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$state_machine__24155__auto__ = function(state_27898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24155__auto____1.call(this,state_27898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24155__auto____0;
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24155__auto____1;
return cljs$core$async$state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___27921,out))
})();
var state__24323__auto__ = (function (){var statearr_27919 = f__24322__auto__.call(null);
(statearr_27919[(6)] = c__24321__auto___27921);

return statearr_27919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___27921,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27935 = arguments.length;
switch (G__27935) {
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
var c__24321__auto___28001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___28001,out){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___28001,out){
return (function (state_27973){
var state_val_27974 = (state_27973[(1)]);
if((state_val_27974 === (7))){
var inst_27969 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
var statearr_27975_28002 = state_27973__$1;
(statearr_27975_28002[(2)] = inst_27969);

(statearr_27975_28002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (1))){
var inst_27936 = (new Array(n));
var inst_27937 = inst_27936;
var inst_27938 = (0);
var state_27973__$1 = (function (){var statearr_27976 = state_27973;
(statearr_27976[(7)] = inst_27937);

(statearr_27976[(8)] = inst_27938);

return statearr_27976;
})();
var statearr_27977_28003 = state_27973__$1;
(statearr_27977_28003[(2)] = null);

(statearr_27977_28003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (4))){
var inst_27941 = (state_27973[(9)]);
var inst_27941__$1 = (state_27973[(2)]);
var inst_27942 = (inst_27941__$1 == null);
var inst_27943 = cljs.core.not.call(null,inst_27942);
var state_27973__$1 = (function (){var statearr_27978 = state_27973;
(statearr_27978[(9)] = inst_27941__$1);

return statearr_27978;
})();
if(inst_27943){
var statearr_27979_28004 = state_27973__$1;
(statearr_27979_28004[(1)] = (5));

} else {
var statearr_27980_28005 = state_27973__$1;
(statearr_27980_28005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (15))){
var inst_27963 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
var statearr_27981_28006 = state_27973__$1;
(statearr_27981_28006[(2)] = inst_27963);

(statearr_27981_28006[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (13))){
var state_27973__$1 = state_27973;
var statearr_27982_28007 = state_27973__$1;
(statearr_27982_28007[(2)] = null);

(statearr_27982_28007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (6))){
var inst_27938 = (state_27973[(8)]);
var inst_27959 = (inst_27938 > (0));
var state_27973__$1 = state_27973;
if(cljs.core.truth_(inst_27959)){
var statearr_27983_28008 = state_27973__$1;
(statearr_27983_28008[(1)] = (12));

} else {
var statearr_27984_28009 = state_27973__$1;
(statearr_27984_28009[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (3))){
var inst_27971 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27973__$1,inst_27971);
} else {
if((state_val_27974 === (12))){
var inst_27937 = (state_27973[(7)]);
var inst_27961 = cljs.core.vec.call(null,inst_27937);
var state_27973__$1 = state_27973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27973__$1,(15),out,inst_27961);
} else {
if((state_val_27974 === (2))){
var state_27973__$1 = state_27973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27973__$1,(4),ch);
} else {
if((state_val_27974 === (11))){
var inst_27953 = (state_27973[(2)]);
var inst_27954 = (new Array(n));
var inst_27937 = inst_27954;
var inst_27938 = (0);
var state_27973__$1 = (function (){var statearr_27985 = state_27973;
(statearr_27985[(7)] = inst_27937);

(statearr_27985[(8)] = inst_27938);

(statearr_27985[(10)] = inst_27953);

return statearr_27985;
})();
var statearr_27986_28010 = state_27973__$1;
(statearr_27986_28010[(2)] = null);

(statearr_27986_28010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (9))){
var inst_27937 = (state_27973[(7)]);
var inst_27951 = cljs.core.vec.call(null,inst_27937);
var state_27973__$1 = state_27973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27973__$1,(11),out,inst_27951);
} else {
if((state_val_27974 === (5))){
var inst_27937 = (state_27973[(7)]);
var inst_27941 = (state_27973[(9)]);
var inst_27946 = (state_27973[(11)]);
var inst_27938 = (state_27973[(8)]);
var inst_27945 = (inst_27937[inst_27938] = inst_27941);
var inst_27946__$1 = (inst_27938 + (1));
var inst_27947 = (inst_27946__$1 < n);
var state_27973__$1 = (function (){var statearr_27987 = state_27973;
(statearr_27987[(11)] = inst_27946__$1);

(statearr_27987[(12)] = inst_27945);

return statearr_27987;
})();
if(cljs.core.truth_(inst_27947)){
var statearr_27988_28011 = state_27973__$1;
(statearr_27988_28011[(1)] = (8));

} else {
var statearr_27989_28012 = state_27973__$1;
(statearr_27989_28012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (14))){
var inst_27966 = (state_27973[(2)]);
var inst_27967 = cljs.core.async.close_BANG_.call(null,out);
var state_27973__$1 = (function (){var statearr_27991 = state_27973;
(statearr_27991[(13)] = inst_27966);

return statearr_27991;
})();
var statearr_27992_28013 = state_27973__$1;
(statearr_27992_28013[(2)] = inst_27967);

(statearr_27992_28013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (10))){
var inst_27957 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
var statearr_27993_28014 = state_27973__$1;
(statearr_27993_28014[(2)] = inst_27957);

(statearr_27993_28014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (8))){
var inst_27937 = (state_27973[(7)]);
var inst_27946 = (state_27973[(11)]);
var tmp27990 = inst_27937;
var inst_27937__$1 = tmp27990;
var inst_27938 = inst_27946;
var state_27973__$1 = (function (){var statearr_27994 = state_27973;
(statearr_27994[(7)] = inst_27937__$1);

(statearr_27994[(8)] = inst_27938);

return statearr_27994;
})();
var statearr_27995_28015 = state_27973__$1;
(statearr_27995_28015[(2)] = null);

(statearr_27995_28015[(1)] = (2));


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
});})(c__24321__auto___28001,out))
;
return ((function (switch__24154__auto__,c__24321__auto___28001,out){
return (function() {
var cljs$core$async$state_machine__24155__auto__ = null;
var cljs$core$async$state_machine__24155__auto____0 = (function (){
var statearr_27996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27996[(0)] = cljs$core$async$state_machine__24155__auto__);

(statearr_27996[(1)] = (1));

return statearr_27996;
});
var cljs$core$async$state_machine__24155__auto____1 = (function (state_27973){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_27973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e27997){if((e27997 instanceof Object)){
var ex__24158__auto__ = e27997;
var statearr_27998_28016 = state_27973;
(statearr_27998_28016[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28017 = state_27973;
state_27973 = G__28017;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$state_machine__24155__auto__ = function(state_27973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24155__auto____1.call(this,state_27973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24155__auto____0;
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24155__auto____1;
return cljs$core$async$state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___28001,out))
})();
var state__24323__auto__ = (function (){var statearr_27999 = f__24322__auto__.call(null);
(statearr_27999[(6)] = c__24321__auto___28001);

return statearr_27999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___28001,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28019 = arguments.length;
switch (G__28019) {
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
var c__24321__auto___28089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___28089,out){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___28089,out){
return (function (state_28061){
var state_val_28062 = (state_28061[(1)]);
if((state_val_28062 === (7))){
var inst_28057 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
var statearr_28063_28090 = state_28061__$1;
(statearr_28063_28090[(2)] = inst_28057);

(statearr_28063_28090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28062 === (1))){
var inst_28020 = [];
var inst_28021 = inst_28020;
var inst_28022 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28061__$1 = (function (){var statearr_28064 = state_28061;
(statearr_28064[(7)] = inst_28022);

(statearr_28064[(8)] = inst_28021);

return statearr_28064;
})();
var statearr_28065_28091 = state_28061__$1;
(statearr_28065_28091[(2)] = null);

(statearr_28065_28091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28062 === (4))){
var inst_28025 = (state_28061[(9)]);
var inst_28025__$1 = (state_28061[(2)]);
var inst_28026 = (inst_28025__$1 == null);
var inst_28027 = cljs.core.not.call(null,inst_28026);
var state_28061__$1 = (function (){var statearr_28066 = state_28061;
(statearr_28066[(9)] = inst_28025__$1);

return statearr_28066;
})();
if(inst_28027){
var statearr_28067_28092 = state_28061__$1;
(statearr_28067_28092[(1)] = (5));

} else {
var statearr_28068_28093 = state_28061__$1;
(statearr_28068_28093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28062 === (15))){
var inst_28051 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
var statearr_28069_28094 = state_28061__$1;
(statearr_28069_28094[(2)] = inst_28051);

(statearr_28069_28094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28062 === (13))){
var state_28061__$1 = state_28061;
var statearr_28070_28095 = state_28061__$1;
(statearr_28070_28095[(2)] = null);

(statearr_28070_28095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28062 === (6))){
var inst_28021 = (state_28061[(8)]);
var inst_28046 = inst_28021.length;
var inst_28047 = (inst_28046 > (0));
var state_28061__$1 = state_28061;
if(cljs.core.truth_(inst_28047)){
var statearr_28071_28096 = state_28061__$1;
(statearr_28071_28096[(1)] = (12));

} else {
var statearr_28072_28097 = state_28061__$1;
(statearr_28072_28097[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28062 === (3))){
var inst_28059 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28061__$1,inst_28059);
} else {
if((state_val_28062 === (12))){
var inst_28021 = (state_28061[(8)]);
var inst_28049 = cljs.core.vec.call(null,inst_28021);
var state_28061__$1 = state_28061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28061__$1,(15),out,inst_28049);
} else {
if((state_val_28062 === (2))){
var state_28061__$1 = state_28061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28061__$1,(4),ch);
} else {
if((state_val_28062 === (11))){
var inst_28025 = (state_28061[(9)]);
var inst_28029 = (state_28061[(10)]);
var inst_28039 = (state_28061[(2)]);
var inst_28040 = [];
var inst_28041 = inst_28040.push(inst_28025);
var inst_28021 = inst_28040;
var inst_28022 = inst_28029;
var state_28061__$1 = (function (){var statearr_28073 = state_28061;
(statearr_28073[(7)] = inst_28022);

(statearr_28073[(11)] = inst_28041);

(statearr_28073[(8)] = inst_28021);

(statearr_28073[(12)] = inst_28039);

return statearr_28073;
})();
var statearr_28074_28098 = state_28061__$1;
(statearr_28074_28098[(2)] = null);

(statearr_28074_28098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28062 === (9))){
var inst_28021 = (state_28061[(8)]);
var inst_28037 = cljs.core.vec.call(null,inst_28021);
var state_28061__$1 = state_28061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28061__$1,(11),out,inst_28037);
} else {
if((state_val_28062 === (5))){
var inst_28022 = (state_28061[(7)]);
var inst_28025 = (state_28061[(9)]);
var inst_28029 = (state_28061[(10)]);
var inst_28029__$1 = f.call(null,inst_28025);
var inst_28030 = cljs.core._EQ_.call(null,inst_28029__$1,inst_28022);
var inst_28031 = cljs.core.keyword_identical_QMARK_.call(null,inst_28022,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28032 = ((inst_28030) || (inst_28031));
var state_28061__$1 = (function (){var statearr_28075 = state_28061;
(statearr_28075[(10)] = inst_28029__$1);

return statearr_28075;
})();
if(cljs.core.truth_(inst_28032)){
var statearr_28076_28099 = state_28061__$1;
(statearr_28076_28099[(1)] = (8));

} else {
var statearr_28077_28100 = state_28061__$1;
(statearr_28077_28100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28062 === (14))){
var inst_28054 = (state_28061[(2)]);
var inst_28055 = cljs.core.async.close_BANG_.call(null,out);
var state_28061__$1 = (function (){var statearr_28079 = state_28061;
(statearr_28079[(13)] = inst_28054);

return statearr_28079;
})();
var statearr_28080_28101 = state_28061__$1;
(statearr_28080_28101[(2)] = inst_28055);

(statearr_28080_28101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28062 === (10))){
var inst_28044 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
var statearr_28081_28102 = state_28061__$1;
(statearr_28081_28102[(2)] = inst_28044);

(statearr_28081_28102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28062 === (8))){
var inst_28025 = (state_28061[(9)]);
var inst_28021 = (state_28061[(8)]);
var inst_28029 = (state_28061[(10)]);
var inst_28034 = inst_28021.push(inst_28025);
var tmp28078 = inst_28021;
var inst_28021__$1 = tmp28078;
var inst_28022 = inst_28029;
var state_28061__$1 = (function (){var statearr_28082 = state_28061;
(statearr_28082[(7)] = inst_28022);

(statearr_28082[(8)] = inst_28021__$1);

(statearr_28082[(14)] = inst_28034);

return statearr_28082;
})();
var statearr_28083_28103 = state_28061__$1;
(statearr_28083_28103[(2)] = null);

(statearr_28083_28103[(1)] = (2));


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
});})(c__24321__auto___28089,out))
;
return ((function (switch__24154__auto__,c__24321__auto___28089,out){
return (function() {
var cljs$core$async$state_machine__24155__auto__ = null;
var cljs$core$async$state_machine__24155__auto____0 = (function (){
var statearr_28084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28084[(0)] = cljs$core$async$state_machine__24155__auto__);

(statearr_28084[(1)] = (1));

return statearr_28084;
});
var cljs$core$async$state_machine__24155__auto____1 = (function (state_28061){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_28061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e28085){if((e28085 instanceof Object)){
var ex__24158__auto__ = e28085;
var statearr_28086_28104 = state_28061;
(statearr_28086_28104[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28105 = state_28061;
state_28061 = G__28105;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
cljs$core$async$state_machine__24155__auto__ = function(state_28061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24155__auto____1.call(this,state_28061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24155__auto____0;
cljs$core$async$state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24155__auto____1;
return cljs$core$async$state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___28089,out))
})();
var state__24323__auto__ = (function (){var statearr_28087 = f__24322__auto__.call(null);
(statearr_28087[(6)] = c__24321__auto___28089);

return statearr_28087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___28089,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1631323773407
