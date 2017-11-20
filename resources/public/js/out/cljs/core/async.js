// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32265 = arguments.length;
switch (G__32265) {
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
if(typeof cljs.core.async.t_cljs$core$async32266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32266 = (function (f,blockable,meta32267){
this.f = f;
this.blockable = blockable;
this.meta32267 = meta32267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32268,meta32267__$1){
var self__ = this;
var _32268__$1 = this;
return (new cljs.core.async.t_cljs$core$async32266(self__.f,self__.blockable,meta32267__$1));
});

cljs.core.async.t_cljs$core$async32266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32268){
var self__ = this;
var _32268__$1 = this;
return self__.meta32267;
});

cljs.core.async.t_cljs$core$async32266.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32266.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32267","meta32267",878353876,null)], null);
});

cljs.core.async.t_cljs$core$async32266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32266";

cljs.core.async.t_cljs$core$async32266.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async32266");
});

cljs.core.async.__GT_t_cljs$core$async32266 = (function cljs$core$async$__GT_t_cljs$core$async32266(f__$1,blockable__$1,meta32267){
return (new cljs.core.async.t_cljs$core$async32266(f__$1,blockable__$1,meta32267));
});

}

return (new cljs.core.async.t_cljs$core$async32266(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__32272 = arguments.length;
switch (G__32272) {
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
var G__32275 = arguments.length;
switch (G__32275) {
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
var G__32278 = arguments.length;
switch (G__32278) {
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
var val_32280 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32280);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32280,ret){
return (function (){
return fn1.call(null,val_32280);
});})(val_32280,ret))
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
var G__32282 = arguments.length;
switch (G__32282) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__28998__auto___32284 = n;
var x_32285 = (0);
while(true){
if((x_32285 < n__28998__auto___32284)){
(a[x_32285] = (0));

var G__32286 = (x_32285 + (1));
x_32285 = G__32286;
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

var G__32287 = (i + (1));
i = G__32287;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32288 = (function (flag,meta32289){
this.flag = flag;
this.meta32289 = meta32289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32290,meta32289__$1){
var self__ = this;
var _32290__$1 = this;
return (new cljs.core.async.t_cljs$core$async32288(self__.flag,meta32289__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32290){
var self__ = this;
var _32290__$1 = this;
return self__.meta32289;
});})(flag))
;

cljs.core.async.t_cljs$core$async32288.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32288.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32288.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32288.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32288.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32289","meta32289",-1489667965,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32288";

cljs.core.async.t_cljs$core$async32288.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async32288");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32288 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32288(flag__$1,meta32289){
return (new cljs.core.async.t_cljs$core$async32288(flag__$1,meta32289));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32288(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32291 = (function (flag,cb,meta32292){
this.flag = flag;
this.cb = cb;
this.meta32292 = meta32292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32293,meta32292__$1){
var self__ = this;
var _32293__$1 = this;
return (new cljs.core.async.t_cljs$core$async32291(self__.flag,self__.cb,meta32292__$1));
});

cljs.core.async.t_cljs$core$async32291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32293){
var self__ = this;
var _32293__$1 = this;
return self__.meta32292;
});

cljs.core.async.t_cljs$core$async32291.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32291.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32291.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32291.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32292","meta32292",80208496,null)], null);
});

cljs.core.async.t_cljs$core$async32291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32291";

cljs.core.async.t_cljs$core$async32291.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async32291");
});

cljs.core.async.__GT_t_cljs$core$async32291 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32291(flag__$1,cb__$1,meta32292){
return (new cljs.core.async.t_cljs$core$async32291(flag__$1,cb__$1,meta32292));
});

}

return (new cljs.core.async.t_cljs$core$async32291(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32294_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32294_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32295_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32295_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28051__auto__ = wport;
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32296 = (i + (1));
i = G__32296;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28051__auto__ = ret;
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28039__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28039__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28039__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__29229__auto__ = [];
var len__29222__auto___32302 = arguments.length;
var i__29223__auto___32303 = (0);
while(true){
if((i__29223__auto___32303 < len__29222__auto___32302)){
args__29229__auto__.push((arguments[i__29223__auto___32303]));

var G__32304 = (i__29223__auto___32303 + (1));
i__29223__auto___32303 = G__32304;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32299){
var map__32300 = p__32299;
var map__32300__$1 = ((((!((map__32300 == null)))?((((map__32300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32300):map__32300);
var opts = map__32300__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32297){
var G__32298 = cljs.core.first.call(null,seq32297);
var seq32297__$1 = cljs.core.next.call(null,seq32297);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32298,seq32297__$1);
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
var G__32306 = arguments.length;
switch (G__32306) {
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
var c__32219__auto___32352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___32352){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___32352){
return (function (state_32330){
var state_val_32331 = (state_32330[(1)]);
if((state_val_32331 === (7))){
var inst_32326 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
var statearr_32332_32353 = state_32330__$1;
(statearr_32332_32353[(2)] = inst_32326);

(statearr_32332_32353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (1))){
var state_32330__$1 = state_32330;
var statearr_32333_32354 = state_32330__$1;
(statearr_32333_32354[(2)] = null);

(statearr_32333_32354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (4))){
var inst_32309 = (state_32330[(7)]);
var inst_32309__$1 = (state_32330[(2)]);
var inst_32310 = (inst_32309__$1 == null);
var state_32330__$1 = (function (){var statearr_32334 = state_32330;
(statearr_32334[(7)] = inst_32309__$1);

return statearr_32334;
})();
if(cljs.core.truth_(inst_32310)){
var statearr_32335_32355 = state_32330__$1;
(statearr_32335_32355[(1)] = (5));

} else {
var statearr_32336_32356 = state_32330__$1;
(statearr_32336_32356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (13))){
var state_32330__$1 = state_32330;
var statearr_32337_32357 = state_32330__$1;
(statearr_32337_32357[(2)] = null);

(statearr_32337_32357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (6))){
var inst_32309 = (state_32330[(7)]);
var state_32330__$1 = state_32330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32330__$1,(11),to,inst_32309);
} else {
if((state_val_32331 === (3))){
var inst_32328 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32330__$1,inst_32328);
} else {
if((state_val_32331 === (12))){
var state_32330__$1 = state_32330;
var statearr_32338_32358 = state_32330__$1;
(statearr_32338_32358[(2)] = null);

(statearr_32338_32358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (2))){
var state_32330__$1 = state_32330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32330__$1,(4),from);
} else {
if((state_val_32331 === (11))){
var inst_32319 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
if(cljs.core.truth_(inst_32319)){
var statearr_32339_32359 = state_32330__$1;
(statearr_32339_32359[(1)] = (12));

} else {
var statearr_32340_32360 = state_32330__$1;
(statearr_32340_32360[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (9))){
var state_32330__$1 = state_32330;
var statearr_32341_32361 = state_32330__$1;
(statearr_32341_32361[(2)] = null);

(statearr_32341_32361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (5))){
var state_32330__$1 = state_32330;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32342_32362 = state_32330__$1;
(statearr_32342_32362[(1)] = (8));

} else {
var statearr_32343_32363 = state_32330__$1;
(statearr_32343_32363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (14))){
var inst_32324 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
var statearr_32344_32364 = state_32330__$1;
(statearr_32344_32364[(2)] = inst_32324);

(statearr_32344_32364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (10))){
var inst_32316 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
var statearr_32345_32365 = state_32330__$1;
(statearr_32345_32365[(2)] = inst_32316);

(statearr_32345_32365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (8))){
var inst_32313 = cljs.core.async.close_BANG_.call(null,to);
var state_32330__$1 = state_32330;
var statearr_32346_32366 = state_32330__$1;
(statearr_32346_32366[(2)] = inst_32313);

(statearr_32346_32366[(1)] = (10));


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
});})(c__32219__auto___32352))
;
return ((function (switch__32131__auto__,c__32219__auto___32352){
return (function() {
var cljs$core$async$state_machine__32132__auto__ = null;
var cljs$core$async$state_machine__32132__auto____0 = (function (){
var statearr_32347 = [null,null,null,null,null,null,null,null];
(statearr_32347[(0)] = cljs$core$async$state_machine__32132__auto__);

(statearr_32347[(1)] = (1));

return statearr_32347;
});
var cljs$core$async$state_machine__32132__auto____1 = (function (state_32330){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_32330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e32348){if((e32348 instanceof Object)){
var ex__32135__auto__ = e32348;
var statearr_32349_32367 = state_32330;
(statearr_32349_32367[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32368 = state_32330;
state_32330 = G__32368;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$state_machine__32132__auto__ = function(state_32330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32132__auto____1.call(this,state_32330);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32132__auto____0;
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32132__auto____1;
return cljs$core$async$state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___32352))
})();
var state__32221__auto__ = (function (){var statearr_32350 = f__32220__auto__.call(null);
(statearr_32350[(6)] = c__32219__auto___32352);

return statearr_32350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___32352))
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
return (function (p__32369){
var vec__32370 = p__32369;
var v = cljs.core.nth.call(null,vec__32370,(0),null);
var p = cljs.core.nth.call(null,vec__32370,(1),null);
var job = vec__32370;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32219__auto___32541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___32541,res,vec__32370,v,p,job,jobs,results){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___32541,res,vec__32370,v,p,job,jobs,results){
return (function (state_32377){
var state_val_32378 = (state_32377[(1)]);
if((state_val_32378 === (1))){
var state_32377__$1 = state_32377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32377__$1,(2),res,v);
} else {
if((state_val_32378 === (2))){
var inst_32374 = (state_32377[(2)]);
var inst_32375 = cljs.core.async.close_BANG_.call(null,res);
var state_32377__$1 = (function (){var statearr_32379 = state_32377;
(statearr_32379[(7)] = inst_32374);

return statearr_32379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32377__$1,inst_32375);
} else {
return null;
}
}
});})(c__32219__auto___32541,res,vec__32370,v,p,job,jobs,results))
;
return ((function (switch__32131__auto__,c__32219__auto___32541,res,vec__32370,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0 = (function (){
var statearr_32380 = [null,null,null,null,null,null,null,null];
(statearr_32380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__);

(statearr_32380[(1)] = (1));

return statearr_32380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1 = (function (state_32377){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_32377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e32381){if((e32381 instanceof Object)){
var ex__32135__auto__ = e32381;
var statearr_32382_32542 = state_32377;
(statearr_32382_32542[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32543 = state_32377;
state_32377 = G__32543;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__ = function(state_32377){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1.call(this,state_32377);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___32541,res,vec__32370,v,p,job,jobs,results))
})();
var state__32221__auto__ = (function (){var statearr_32383 = f__32220__auto__.call(null);
(statearr_32383[(6)] = c__32219__auto___32541);

return statearr_32383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___32541,res,vec__32370,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32384){
var vec__32385 = p__32384;
var v = cljs.core.nth.call(null,vec__32385,(0),null);
var p = cljs.core.nth.call(null,vec__32385,(1),null);
var job = vec__32385;
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
var n__28998__auto___32544 = n;
var __32545 = (0);
while(true){
if((__32545 < n__28998__auto___32544)){
var G__32388_32546 = type;
var G__32388_32547__$1 = (((G__32388_32546 instanceof cljs.core.Keyword))?G__32388_32546.fqn:null);
switch (G__32388_32547__$1) {
case "compute":
var c__32219__auto___32549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32545,c__32219__auto___32549,G__32388_32546,G__32388_32547__$1,n__28998__auto___32544,jobs,results,process,async){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (__32545,c__32219__auto___32549,G__32388_32546,G__32388_32547__$1,n__28998__auto___32544,jobs,results,process,async){
return (function (state_32401){
var state_val_32402 = (state_32401[(1)]);
if((state_val_32402 === (1))){
var state_32401__$1 = state_32401;
var statearr_32403_32550 = state_32401__$1;
(statearr_32403_32550[(2)] = null);

(statearr_32403_32550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (2))){
var state_32401__$1 = state_32401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32401__$1,(4),jobs);
} else {
if((state_val_32402 === (3))){
var inst_32399 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32401__$1,inst_32399);
} else {
if((state_val_32402 === (4))){
var inst_32391 = (state_32401[(2)]);
var inst_32392 = process.call(null,inst_32391);
var state_32401__$1 = state_32401;
if(cljs.core.truth_(inst_32392)){
var statearr_32404_32551 = state_32401__$1;
(statearr_32404_32551[(1)] = (5));

} else {
var statearr_32405_32552 = state_32401__$1;
(statearr_32405_32552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (5))){
var state_32401__$1 = state_32401;
var statearr_32406_32553 = state_32401__$1;
(statearr_32406_32553[(2)] = null);

(statearr_32406_32553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (6))){
var state_32401__$1 = state_32401;
var statearr_32407_32554 = state_32401__$1;
(statearr_32407_32554[(2)] = null);

(statearr_32407_32554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (7))){
var inst_32397 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
var statearr_32408_32555 = state_32401__$1;
(statearr_32408_32555[(2)] = inst_32397);

(statearr_32408_32555[(1)] = (3));


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
});})(__32545,c__32219__auto___32549,G__32388_32546,G__32388_32547__$1,n__28998__auto___32544,jobs,results,process,async))
;
return ((function (__32545,switch__32131__auto__,c__32219__auto___32549,G__32388_32546,G__32388_32547__$1,n__28998__auto___32544,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0 = (function (){
var statearr_32409 = [null,null,null,null,null,null,null];
(statearr_32409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__);

(statearr_32409[(1)] = (1));

return statearr_32409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1 = (function (state_32401){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_32401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e32410){if((e32410 instanceof Object)){
var ex__32135__auto__ = e32410;
var statearr_32411_32556 = state_32401;
(statearr_32411_32556[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32557 = state_32401;
state_32401 = G__32557;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__ = function(state_32401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1.call(this,state_32401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__;
})()
;})(__32545,switch__32131__auto__,c__32219__auto___32549,G__32388_32546,G__32388_32547__$1,n__28998__auto___32544,jobs,results,process,async))
})();
var state__32221__auto__ = (function (){var statearr_32412 = f__32220__auto__.call(null);
(statearr_32412[(6)] = c__32219__auto___32549);

return statearr_32412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(__32545,c__32219__auto___32549,G__32388_32546,G__32388_32547__$1,n__28998__auto___32544,jobs,results,process,async))
);


break;
case "async":
var c__32219__auto___32558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32545,c__32219__auto___32558,G__32388_32546,G__32388_32547__$1,n__28998__auto___32544,jobs,results,process,async){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (__32545,c__32219__auto___32558,G__32388_32546,G__32388_32547__$1,n__28998__auto___32544,jobs,results,process,async){
return (function (state_32425){
var state_val_32426 = (state_32425[(1)]);
if((state_val_32426 === (1))){
var state_32425__$1 = state_32425;
var statearr_32427_32559 = state_32425__$1;
(statearr_32427_32559[(2)] = null);

(statearr_32427_32559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32426 === (2))){
var state_32425__$1 = state_32425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32425__$1,(4),jobs);
} else {
if((state_val_32426 === (3))){
var inst_32423 = (state_32425[(2)]);
var state_32425__$1 = state_32425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32425__$1,inst_32423);
} else {
if((state_val_32426 === (4))){
var inst_32415 = (state_32425[(2)]);
var inst_32416 = async.call(null,inst_32415);
var state_32425__$1 = state_32425;
if(cljs.core.truth_(inst_32416)){
var statearr_32428_32560 = state_32425__$1;
(statearr_32428_32560[(1)] = (5));

} else {
var statearr_32429_32561 = state_32425__$1;
(statearr_32429_32561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32426 === (5))){
var state_32425__$1 = state_32425;
var statearr_32430_32562 = state_32425__$1;
(statearr_32430_32562[(2)] = null);

(statearr_32430_32562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32426 === (6))){
var state_32425__$1 = state_32425;
var statearr_32431_32563 = state_32425__$1;
(statearr_32431_32563[(2)] = null);

(statearr_32431_32563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32426 === (7))){
var inst_32421 = (state_32425[(2)]);
var state_32425__$1 = state_32425;
var statearr_32432_32564 = state_32425__$1;
(statearr_32432_32564[(2)] = inst_32421);

(statearr_32432_32564[(1)] = (3));


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
});})(__32545,c__32219__auto___32558,G__32388_32546,G__32388_32547__$1,n__28998__auto___32544,jobs,results,process,async))
;
return ((function (__32545,switch__32131__auto__,c__32219__auto___32558,G__32388_32546,G__32388_32547__$1,n__28998__auto___32544,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0 = (function (){
var statearr_32433 = [null,null,null,null,null,null,null];
(statearr_32433[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__);

(statearr_32433[(1)] = (1));

return statearr_32433;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1 = (function (state_32425){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_32425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e32434){if((e32434 instanceof Object)){
var ex__32135__auto__ = e32434;
var statearr_32435_32565 = state_32425;
(statearr_32435_32565[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32566 = state_32425;
state_32425 = G__32566;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__ = function(state_32425){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1.call(this,state_32425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__;
})()
;})(__32545,switch__32131__auto__,c__32219__auto___32558,G__32388_32546,G__32388_32547__$1,n__28998__auto___32544,jobs,results,process,async))
})();
var state__32221__auto__ = (function (){var statearr_32436 = f__32220__auto__.call(null);
(statearr_32436[(6)] = c__32219__auto___32558);

return statearr_32436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(__32545,c__32219__auto___32558,G__32388_32546,G__32388_32547__$1,n__28998__auto___32544,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32388_32547__$1)].join('')));

}

var G__32567 = (__32545 + (1));
__32545 = G__32567;
continue;
} else {
}
break;
}

var c__32219__auto___32568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___32568,jobs,results,process,async){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___32568,jobs,results,process,async){
return (function (state_32458){
var state_val_32459 = (state_32458[(1)]);
if((state_val_32459 === (1))){
var state_32458__$1 = state_32458;
var statearr_32460_32569 = state_32458__$1;
(statearr_32460_32569[(2)] = null);

(statearr_32460_32569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (2))){
var state_32458__$1 = state_32458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32458__$1,(4),from);
} else {
if((state_val_32459 === (3))){
var inst_32456 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32458__$1,inst_32456);
} else {
if((state_val_32459 === (4))){
var inst_32439 = (state_32458[(7)]);
var inst_32439__$1 = (state_32458[(2)]);
var inst_32440 = (inst_32439__$1 == null);
var state_32458__$1 = (function (){var statearr_32461 = state_32458;
(statearr_32461[(7)] = inst_32439__$1);

return statearr_32461;
})();
if(cljs.core.truth_(inst_32440)){
var statearr_32462_32570 = state_32458__$1;
(statearr_32462_32570[(1)] = (5));

} else {
var statearr_32463_32571 = state_32458__$1;
(statearr_32463_32571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (5))){
var inst_32442 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32458__$1 = state_32458;
var statearr_32464_32572 = state_32458__$1;
(statearr_32464_32572[(2)] = inst_32442);

(statearr_32464_32572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (6))){
var inst_32444 = (state_32458[(8)]);
var inst_32439 = (state_32458[(7)]);
var inst_32444__$1 = cljs.core.async.chan.call(null,(1));
var inst_32445 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32446 = [inst_32439,inst_32444__$1];
var inst_32447 = (new cljs.core.PersistentVector(null,2,(5),inst_32445,inst_32446,null));
var state_32458__$1 = (function (){var statearr_32465 = state_32458;
(statearr_32465[(8)] = inst_32444__$1);

return statearr_32465;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32458__$1,(8),jobs,inst_32447);
} else {
if((state_val_32459 === (7))){
var inst_32454 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
var statearr_32466_32573 = state_32458__$1;
(statearr_32466_32573[(2)] = inst_32454);

(statearr_32466_32573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (8))){
var inst_32444 = (state_32458[(8)]);
var inst_32449 = (state_32458[(2)]);
var state_32458__$1 = (function (){var statearr_32467 = state_32458;
(statearr_32467[(9)] = inst_32449);

return statearr_32467;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32458__$1,(9),results,inst_32444);
} else {
if((state_val_32459 === (9))){
var inst_32451 = (state_32458[(2)]);
var state_32458__$1 = (function (){var statearr_32468 = state_32458;
(statearr_32468[(10)] = inst_32451);

return statearr_32468;
})();
var statearr_32469_32574 = state_32458__$1;
(statearr_32469_32574[(2)] = null);

(statearr_32469_32574[(1)] = (2));


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
});})(c__32219__auto___32568,jobs,results,process,async))
;
return ((function (switch__32131__auto__,c__32219__auto___32568,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0 = (function (){
var statearr_32470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__);

(statearr_32470[(1)] = (1));

return statearr_32470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1 = (function (state_32458){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_32458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e32471){if((e32471 instanceof Object)){
var ex__32135__auto__ = e32471;
var statearr_32472_32575 = state_32458;
(statearr_32472_32575[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32576 = state_32458;
state_32458 = G__32576;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__ = function(state_32458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1.call(this,state_32458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___32568,jobs,results,process,async))
})();
var state__32221__auto__ = (function (){var statearr_32473 = f__32220__auto__.call(null);
(statearr_32473[(6)] = c__32219__auto___32568);

return statearr_32473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___32568,jobs,results,process,async))
);


var c__32219__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto__,jobs,results,process,async){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto__,jobs,results,process,async){
return (function (state_32511){
var state_val_32512 = (state_32511[(1)]);
if((state_val_32512 === (7))){
var inst_32507 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32513_32577 = state_32511__$1;
(statearr_32513_32577[(2)] = inst_32507);

(statearr_32513_32577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (20))){
var state_32511__$1 = state_32511;
var statearr_32514_32578 = state_32511__$1;
(statearr_32514_32578[(2)] = null);

(statearr_32514_32578[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (1))){
var state_32511__$1 = state_32511;
var statearr_32515_32579 = state_32511__$1;
(statearr_32515_32579[(2)] = null);

(statearr_32515_32579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (4))){
var inst_32476 = (state_32511[(7)]);
var inst_32476__$1 = (state_32511[(2)]);
var inst_32477 = (inst_32476__$1 == null);
var state_32511__$1 = (function (){var statearr_32516 = state_32511;
(statearr_32516[(7)] = inst_32476__$1);

return statearr_32516;
})();
if(cljs.core.truth_(inst_32477)){
var statearr_32517_32580 = state_32511__$1;
(statearr_32517_32580[(1)] = (5));

} else {
var statearr_32518_32581 = state_32511__$1;
(statearr_32518_32581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (15))){
var inst_32489 = (state_32511[(8)]);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32511__$1,(18),to,inst_32489);
} else {
if((state_val_32512 === (21))){
var inst_32502 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32519_32582 = state_32511__$1;
(statearr_32519_32582[(2)] = inst_32502);

(statearr_32519_32582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (13))){
var inst_32504 = (state_32511[(2)]);
var state_32511__$1 = (function (){var statearr_32520 = state_32511;
(statearr_32520[(9)] = inst_32504);

return statearr_32520;
})();
var statearr_32521_32583 = state_32511__$1;
(statearr_32521_32583[(2)] = null);

(statearr_32521_32583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (6))){
var inst_32476 = (state_32511[(7)]);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32511__$1,(11),inst_32476);
} else {
if((state_val_32512 === (17))){
var inst_32497 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
if(cljs.core.truth_(inst_32497)){
var statearr_32522_32584 = state_32511__$1;
(statearr_32522_32584[(1)] = (19));

} else {
var statearr_32523_32585 = state_32511__$1;
(statearr_32523_32585[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (3))){
var inst_32509 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32511__$1,inst_32509);
} else {
if((state_val_32512 === (12))){
var inst_32486 = (state_32511[(10)]);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32511__$1,(14),inst_32486);
} else {
if((state_val_32512 === (2))){
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32511__$1,(4),results);
} else {
if((state_val_32512 === (19))){
var state_32511__$1 = state_32511;
var statearr_32524_32586 = state_32511__$1;
(statearr_32524_32586[(2)] = null);

(statearr_32524_32586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (11))){
var inst_32486 = (state_32511[(2)]);
var state_32511__$1 = (function (){var statearr_32525 = state_32511;
(statearr_32525[(10)] = inst_32486);

return statearr_32525;
})();
var statearr_32526_32587 = state_32511__$1;
(statearr_32526_32587[(2)] = null);

(statearr_32526_32587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (9))){
var state_32511__$1 = state_32511;
var statearr_32527_32588 = state_32511__$1;
(statearr_32527_32588[(2)] = null);

(statearr_32527_32588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (5))){
var state_32511__$1 = state_32511;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32528_32589 = state_32511__$1;
(statearr_32528_32589[(1)] = (8));

} else {
var statearr_32529_32590 = state_32511__$1;
(statearr_32529_32590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (14))){
var inst_32489 = (state_32511[(8)]);
var inst_32491 = (state_32511[(11)]);
var inst_32489__$1 = (state_32511[(2)]);
var inst_32490 = (inst_32489__$1 == null);
var inst_32491__$1 = cljs.core.not.call(null,inst_32490);
var state_32511__$1 = (function (){var statearr_32530 = state_32511;
(statearr_32530[(8)] = inst_32489__$1);

(statearr_32530[(11)] = inst_32491__$1);

return statearr_32530;
})();
if(inst_32491__$1){
var statearr_32531_32591 = state_32511__$1;
(statearr_32531_32591[(1)] = (15));

} else {
var statearr_32532_32592 = state_32511__$1;
(statearr_32532_32592[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (16))){
var inst_32491 = (state_32511[(11)]);
var state_32511__$1 = state_32511;
var statearr_32533_32593 = state_32511__$1;
(statearr_32533_32593[(2)] = inst_32491);

(statearr_32533_32593[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (10))){
var inst_32483 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32534_32594 = state_32511__$1;
(statearr_32534_32594[(2)] = inst_32483);

(statearr_32534_32594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (18))){
var inst_32494 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32535_32595 = state_32511__$1;
(statearr_32535_32595[(2)] = inst_32494);

(statearr_32535_32595[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (8))){
var inst_32480 = cljs.core.async.close_BANG_.call(null,to);
var state_32511__$1 = state_32511;
var statearr_32536_32596 = state_32511__$1;
(statearr_32536_32596[(2)] = inst_32480);

(statearr_32536_32596[(1)] = (10));


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
});})(c__32219__auto__,jobs,results,process,async))
;
return ((function (switch__32131__auto__,c__32219__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0 = (function (){
var statearr_32537 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32537[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__);

(statearr_32537[(1)] = (1));

return statearr_32537;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1 = (function (state_32511){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_32511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e32538){if((e32538 instanceof Object)){
var ex__32135__auto__ = e32538;
var statearr_32539_32597 = state_32511;
(statearr_32539_32597[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32598 = state_32511;
state_32511 = G__32598;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__ = function(state_32511){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1.call(this,state_32511);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32132__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto__,jobs,results,process,async))
})();
var state__32221__auto__ = (function (){var statearr_32540 = f__32220__auto__.call(null);
(statearr_32540[(6)] = c__32219__auto__);

return statearr_32540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto__,jobs,results,process,async))
);

return c__32219__auto__;
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
var G__32600 = arguments.length;
switch (G__32600) {
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
var G__32603 = arguments.length;
switch (G__32603) {
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
var G__32606 = arguments.length;
switch (G__32606) {
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
var c__32219__auto___32655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___32655,tc,fc){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___32655,tc,fc){
return (function (state_32632){
var state_val_32633 = (state_32632[(1)]);
if((state_val_32633 === (7))){
var inst_32628 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
var statearr_32634_32656 = state_32632__$1;
(statearr_32634_32656[(2)] = inst_32628);

(statearr_32634_32656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (1))){
var state_32632__$1 = state_32632;
var statearr_32635_32657 = state_32632__$1;
(statearr_32635_32657[(2)] = null);

(statearr_32635_32657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (4))){
var inst_32609 = (state_32632[(7)]);
var inst_32609__$1 = (state_32632[(2)]);
var inst_32610 = (inst_32609__$1 == null);
var state_32632__$1 = (function (){var statearr_32636 = state_32632;
(statearr_32636[(7)] = inst_32609__$1);

return statearr_32636;
})();
if(cljs.core.truth_(inst_32610)){
var statearr_32637_32658 = state_32632__$1;
(statearr_32637_32658[(1)] = (5));

} else {
var statearr_32638_32659 = state_32632__$1;
(statearr_32638_32659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (13))){
var state_32632__$1 = state_32632;
var statearr_32639_32660 = state_32632__$1;
(statearr_32639_32660[(2)] = null);

(statearr_32639_32660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (6))){
var inst_32609 = (state_32632[(7)]);
var inst_32615 = p.call(null,inst_32609);
var state_32632__$1 = state_32632;
if(cljs.core.truth_(inst_32615)){
var statearr_32640_32661 = state_32632__$1;
(statearr_32640_32661[(1)] = (9));

} else {
var statearr_32641_32662 = state_32632__$1;
(statearr_32641_32662[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (3))){
var inst_32630 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32632__$1,inst_32630);
} else {
if((state_val_32633 === (12))){
var state_32632__$1 = state_32632;
var statearr_32642_32663 = state_32632__$1;
(statearr_32642_32663[(2)] = null);

(statearr_32642_32663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (2))){
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32632__$1,(4),ch);
} else {
if((state_val_32633 === (11))){
var inst_32609 = (state_32632[(7)]);
var inst_32619 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32632__$1,(8),inst_32619,inst_32609);
} else {
if((state_val_32633 === (9))){
var state_32632__$1 = state_32632;
var statearr_32643_32664 = state_32632__$1;
(statearr_32643_32664[(2)] = tc);

(statearr_32643_32664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (5))){
var inst_32612 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32613 = cljs.core.async.close_BANG_.call(null,fc);
var state_32632__$1 = (function (){var statearr_32644 = state_32632;
(statearr_32644[(8)] = inst_32612);

return statearr_32644;
})();
var statearr_32645_32665 = state_32632__$1;
(statearr_32645_32665[(2)] = inst_32613);

(statearr_32645_32665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (14))){
var inst_32626 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
var statearr_32646_32666 = state_32632__$1;
(statearr_32646_32666[(2)] = inst_32626);

(statearr_32646_32666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (10))){
var state_32632__$1 = state_32632;
var statearr_32647_32667 = state_32632__$1;
(statearr_32647_32667[(2)] = fc);

(statearr_32647_32667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (8))){
var inst_32621 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
if(cljs.core.truth_(inst_32621)){
var statearr_32648_32668 = state_32632__$1;
(statearr_32648_32668[(1)] = (12));

} else {
var statearr_32649_32669 = state_32632__$1;
(statearr_32649_32669[(1)] = (13));

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
});})(c__32219__auto___32655,tc,fc))
;
return ((function (switch__32131__auto__,c__32219__auto___32655,tc,fc){
return (function() {
var cljs$core$async$state_machine__32132__auto__ = null;
var cljs$core$async$state_machine__32132__auto____0 = (function (){
var statearr_32650 = [null,null,null,null,null,null,null,null,null];
(statearr_32650[(0)] = cljs$core$async$state_machine__32132__auto__);

(statearr_32650[(1)] = (1));

return statearr_32650;
});
var cljs$core$async$state_machine__32132__auto____1 = (function (state_32632){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_32632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e32651){if((e32651 instanceof Object)){
var ex__32135__auto__ = e32651;
var statearr_32652_32670 = state_32632;
(statearr_32652_32670[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32671 = state_32632;
state_32632 = G__32671;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$state_machine__32132__auto__ = function(state_32632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32132__auto____1.call(this,state_32632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32132__auto____0;
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32132__auto____1;
return cljs$core$async$state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___32655,tc,fc))
})();
var state__32221__auto__ = (function (){var statearr_32653 = f__32220__auto__.call(null);
(statearr_32653[(6)] = c__32219__auto___32655);

return statearr_32653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___32655,tc,fc))
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
var c__32219__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto__){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto__){
return (function (state_32692){
var state_val_32693 = (state_32692[(1)]);
if((state_val_32693 === (7))){
var inst_32688 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32694_32712 = state_32692__$1;
(statearr_32694_32712[(2)] = inst_32688);

(statearr_32694_32712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (1))){
var inst_32672 = init;
var state_32692__$1 = (function (){var statearr_32695 = state_32692;
(statearr_32695[(7)] = inst_32672);

return statearr_32695;
})();
var statearr_32696_32713 = state_32692__$1;
(statearr_32696_32713[(2)] = null);

(statearr_32696_32713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (4))){
var inst_32675 = (state_32692[(8)]);
var inst_32675__$1 = (state_32692[(2)]);
var inst_32676 = (inst_32675__$1 == null);
var state_32692__$1 = (function (){var statearr_32697 = state_32692;
(statearr_32697[(8)] = inst_32675__$1);

return statearr_32697;
})();
if(cljs.core.truth_(inst_32676)){
var statearr_32698_32714 = state_32692__$1;
(statearr_32698_32714[(1)] = (5));

} else {
var statearr_32699_32715 = state_32692__$1;
(statearr_32699_32715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (6))){
var inst_32679 = (state_32692[(9)]);
var inst_32675 = (state_32692[(8)]);
var inst_32672 = (state_32692[(7)]);
var inst_32679__$1 = f.call(null,inst_32672,inst_32675);
var inst_32680 = cljs.core.reduced_QMARK_.call(null,inst_32679__$1);
var state_32692__$1 = (function (){var statearr_32700 = state_32692;
(statearr_32700[(9)] = inst_32679__$1);

return statearr_32700;
})();
if(inst_32680){
var statearr_32701_32716 = state_32692__$1;
(statearr_32701_32716[(1)] = (8));

} else {
var statearr_32702_32717 = state_32692__$1;
(statearr_32702_32717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (3))){
var inst_32690 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32692__$1,inst_32690);
} else {
if((state_val_32693 === (2))){
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32692__$1,(4),ch);
} else {
if((state_val_32693 === (9))){
var inst_32679 = (state_32692[(9)]);
var inst_32672 = inst_32679;
var state_32692__$1 = (function (){var statearr_32703 = state_32692;
(statearr_32703[(7)] = inst_32672);

return statearr_32703;
})();
var statearr_32704_32718 = state_32692__$1;
(statearr_32704_32718[(2)] = null);

(statearr_32704_32718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (5))){
var inst_32672 = (state_32692[(7)]);
var state_32692__$1 = state_32692;
var statearr_32705_32719 = state_32692__$1;
(statearr_32705_32719[(2)] = inst_32672);

(statearr_32705_32719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (10))){
var inst_32686 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32706_32720 = state_32692__$1;
(statearr_32706_32720[(2)] = inst_32686);

(statearr_32706_32720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (8))){
var inst_32679 = (state_32692[(9)]);
var inst_32682 = cljs.core.deref.call(null,inst_32679);
var state_32692__$1 = state_32692;
var statearr_32707_32721 = state_32692__$1;
(statearr_32707_32721[(2)] = inst_32682);

(statearr_32707_32721[(1)] = (10));


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
});})(c__32219__auto__))
;
return ((function (switch__32131__auto__,c__32219__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32132__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32132__auto____0 = (function (){
var statearr_32708 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32708[(0)] = cljs$core$async$reduce_$_state_machine__32132__auto__);

(statearr_32708[(1)] = (1));

return statearr_32708;
});
var cljs$core$async$reduce_$_state_machine__32132__auto____1 = (function (state_32692){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_32692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e32709){if((e32709 instanceof Object)){
var ex__32135__auto__ = e32709;
var statearr_32710_32722 = state_32692;
(statearr_32710_32722[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32723 = state_32692;
state_32692 = G__32723;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32132__auto__ = function(state_32692){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32132__auto____1.call(this,state_32692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32132__auto____0;
cljs$core$async$reduce_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32132__auto____1;
return cljs$core$async$reduce_$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto__))
})();
var state__32221__auto__ = (function (){var statearr_32711 = f__32220__auto__.call(null);
(statearr_32711[(6)] = c__32219__auto__);

return statearr_32711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto__))
);

return c__32219__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32219__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto__,f__$1){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto__,f__$1){
return (function (state_32729){
var state_val_32730 = (state_32729[(1)]);
if((state_val_32730 === (1))){
var inst_32724 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32729__$1 = state_32729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32729__$1,(2),inst_32724);
} else {
if((state_val_32730 === (2))){
var inst_32726 = (state_32729[(2)]);
var inst_32727 = f__$1.call(null,inst_32726);
var state_32729__$1 = state_32729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32729__$1,inst_32727);
} else {
return null;
}
}
});})(c__32219__auto__,f__$1))
;
return ((function (switch__32131__auto__,c__32219__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32132__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32132__auto____0 = (function (){
var statearr_32731 = [null,null,null,null,null,null,null];
(statearr_32731[(0)] = cljs$core$async$transduce_$_state_machine__32132__auto__);

(statearr_32731[(1)] = (1));

return statearr_32731;
});
var cljs$core$async$transduce_$_state_machine__32132__auto____1 = (function (state_32729){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_32729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e32732){if((e32732 instanceof Object)){
var ex__32135__auto__ = e32732;
var statearr_32733_32735 = state_32729;
(statearr_32733_32735[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32736 = state_32729;
state_32729 = G__32736;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32132__auto__ = function(state_32729){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32132__auto____1.call(this,state_32729);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32132__auto____0;
cljs$core$async$transduce_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32132__auto____1;
return cljs$core$async$transduce_$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto__,f__$1))
})();
var state__32221__auto__ = (function (){var statearr_32734 = f__32220__auto__.call(null);
(statearr_32734[(6)] = c__32219__auto__);

return statearr_32734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto__,f__$1))
);

return c__32219__auto__;
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
var G__32738 = arguments.length;
switch (G__32738) {
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
var c__32219__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto__){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto__){
return (function (state_32763){
var state_val_32764 = (state_32763[(1)]);
if((state_val_32764 === (7))){
var inst_32745 = (state_32763[(2)]);
var state_32763__$1 = state_32763;
var statearr_32765_32786 = state_32763__$1;
(statearr_32765_32786[(2)] = inst_32745);

(statearr_32765_32786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32764 === (1))){
var inst_32739 = cljs.core.seq.call(null,coll);
var inst_32740 = inst_32739;
var state_32763__$1 = (function (){var statearr_32766 = state_32763;
(statearr_32766[(7)] = inst_32740);

return statearr_32766;
})();
var statearr_32767_32787 = state_32763__$1;
(statearr_32767_32787[(2)] = null);

(statearr_32767_32787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32764 === (4))){
var inst_32740 = (state_32763[(7)]);
var inst_32743 = cljs.core.first.call(null,inst_32740);
var state_32763__$1 = state_32763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32763__$1,(7),ch,inst_32743);
} else {
if((state_val_32764 === (13))){
var inst_32757 = (state_32763[(2)]);
var state_32763__$1 = state_32763;
var statearr_32768_32788 = state_32763__$1;
(statearr_32768_32788[(2)] = inst_32757);

(statearr_32768_32788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32764 === (6))){
var inst_32748 = (state_32763[(2)]);
var state_32763__$1 = state_32763;
if(cljs.core.truth_(inst_32748)){
var statearr_32769_32789 = state_32763__$1;
(statearr_32769_32789[(1)] = (8));

} else {
var statearr_32770_32790 = state_32763__$1;
(statearr_32770_32790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32764 === (3))){
var inst_32761 = (state_32763[(2)]);
var state_32763__$1 = state_32763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32763__$1,inst_32761);
} else {
if((state_val_32764 === (12))){
var state_32763__$1 = state_32763;
var statearr_32771_32791 = state_32763__$1;
(statearr_32771_32791[(2)] = null);

(statearr_32771_32791[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32764 === (2))){
var inst_32740 = (state_32763[(7)]);
var state_32763__$1 = state_32763;
if(cljs.core.truth_(inst_32740)){
var statearr_32772_32792 = state_32763__$1;
(statearr_32772_32792[(1)] = (4));

} else {
var statearr_32773_32793 = state_32763__$1;
(statearr_32773_32793[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32764 === (11))){
var inst_32754 = cljs.core.async.close_BANG_.call(null,ch);
var state_32763__$1 = state_32763;
var statearr_32774_32794 = state_32763__$1;
(statearr_32774_32794[(2)] = inst_32754);

(statearr_32774_32794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32764 === (9))){
var state_32763__$1 = state_32763;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32775_32795 = state_32763__$1;
(statearr_32775_32795[(1)] = (11));

} else {
var statearr_32776_32796 = state_32763__$1;
(statearr_32776_32796[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32764 === (5))){
var inst_32740 = (state_32763[(7)]);
var state_32763__$1 = state_32763;
var statearr_32777_32797 = state_32763__$1;
(statearr_32777_32797[(2)] = inst_32740);

(statearr_32777_32797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32764 === (10))){
var inst_32759 = (state_32763[(2)]);
var state_32763__$1 = state_32763;
var statearr_32778_32798 = state_32763__$1;
(statearr_32778_32798[(2)] = inst_32759);

(statearr_32778_32798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32764 === (8))){
var inst_32740 = (state_32763[(7)]);
var inst_32750 = cljs.core.next.call(null,inst_32740);
var inst_32740__$1 = inst_32750;
var state_32763__$1 = (function (){var statearr_32779 = state_32763;
(statearr_32779[(7)] = inst_32740__$1);

return statearr_32779;
})();
var statearr_32780_32799 = state_32763__$1;
(statearr_32780_32799[(2)] = null);

(statearr_32780_32799[(1)] = (2));


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
});})(c__32219__auto__))
;
return ((function (switch__32131__auto__,c__32219__auto__){
return (function() {
var cljs$core$async$state_machine__32132__auto__ = null;
var cljs$core$async$state_machine__32132__auto____0 = (function (){
var statearr_32781 = [null,null,null,null,null,null,null,null];
(statearr_32781[(0)] = cljs$core$async$state_machine__32132__auto__);

(statearr_32781[(1)] = (1));

return statearr_32781;
});
var cljs$core$async$state_machine__32132__auto____1 = (function (state_32763){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_32763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e32782){if((e32782 instanceof Object)){
var ex__32135__auto__ = e32782;
var statearr_32783_32800 = state_32763;
(statearr_32783_32800[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32801 = state_32763;
state_32763 = G__32801;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$state_machine__32132__auto__ = function(state_32763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32132__auto____1.call(this,state_32763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32132__auto____0;
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32132__auto____1;
return cljs$core$async$state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto__))
})();
var state__32221__auto__ = (function (){var statearr_32784 = f__32220__auto__.call(null);
(statearr_32784[(6)] = c__32219__auto__);

return statearr_32784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto__))
);

return c__32219__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28734__auto__ = (((_ == null))?null:_);
var m__28735__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,_);
} else {
var m__28735__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28735__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,ch);
} else {
var m__28735__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m);
} else {
var m__28735__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async32802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32802 = (function (ch,cs,meta32803){
this.ch = ch;
this.cs = cs;
this.meta32803 = meta32803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32804,meta32803__$1){
var self__ = this;
var _32804__$1 = this;
return (new cljs.core.async.t_cljs$core$async32802(self__.ch,self__.cs,meta32803__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32804){
var self__ = this;
var _32804__$1 = this;
return self__.meta32803;
});})(cs))
;

cljs.core.async.t_cljs$core$async32802.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32802.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32802.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32802.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32802.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32802.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32803","meta32803",-1518347288,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32802";

cljs.core.async.t_cljs$core$async32802.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async32802");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32802 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32802(ch__$1,cs__$1,meta32803){
return (new cljs.core.async.t_cljs$core$async32802(ch__$1,cs__$1,meta32803));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32802(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32219__auto___33024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___33024,cs,m,dchan,dctr,done){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___33024,cs,m,dchan,dctr,done){
return (function (state_32939){
var state_val_32940 = (state_32939[(1)]);
if((state_val_32940 === (7))){
var inst_32935 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32941_33025 = state_32939__$1;
(statearr_32941_33025[(2)] = inst_32935);

(statearr_32941_33025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (20))){
var inst_32838 = (state_32939[(7)]);
var inst_32850 = cljs.core.first.call(null,inst_32838);
var inst_32851 = cljs.core.nth.call(null,inst_32850,(0),null);
var inst_32852 = cljs.core.nth.call(null,inst_32850,(1),null);
var state_32939__$1 = (function (){var statearr_32942 = state_32939;
(statearr_32942[(8)] = inst_32851);

return statearr_32942;
})();
if(cljs.core.truth_(inst_32852)){
var statearr_32943_33026 = state_32939__$1;
(statearr_32943_33026[(1)] = (22));

} else {
var statearr_32944_33027 = state_32939__$1;
(statearr_32944_33027[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (27))){
var inst_32882 = (state_32939[(9)]);
var inst_32807 = (state_32939[(10)]);
var inst_32887 = (state_32939[(11)]);
var inst_32880 = (state_32939[(12)]);
var inst_32887__$1 = cljs.core._nth.call(null,inst_32880,inst_32882);
var inst_32888 = cljs.core.async.put_BANG_.call(null,inst_32887__$1,inst_32807,done);
var state_32939__$1 = (function (){var statearr_32945 = state_32939;
(statearr_32945[(11)] = inst_32887__$1);

return statearr_32945;
})();
if(cljs.core.truth_(inst_32888)){
var statearr_32946_33028 = state_32939__$1;
(statearr_32946_33028[(1)] = (30));

} else {
var statearr_32947_33029 = state_32939__$1;
(statearr_32947_33029[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (1))){
var state_32939__$1 = state_32939;
var statearr_32948_33030 = state_32939__$1;
(statearr_32948_33030[(2)] = null);

(statearr_32948_33030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (24))){
var inst_32838 = (state_32939[(7)]);
var inst_32857 = (state_32939[(2)]);
var inst_32858 = cljs.core.next.call(null,inst_32838);
var inst_32816 = inst_32858;
var inst_32817 = null;
var inst_32818 = (0);
var inst_32819 = (0);
var state_32939__$1 = (function (){var statearr_32949 = state_32939;
(statearr_32949[(13)] = inst_32857);

(statearr_32949[(14)] = inst_32817);

(statearr_32949[(15)] = inst_32818);

(statearr_32949[(16)] = inst_32819);

(statearr_32949[(17)] = inst_32816);

return statearr_32949;
})();
var statearr_32950_33031 = state_32939__$1;
(statearr_32950_33031[(2)] = null);

(statearr_32950_33031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (39))){
var state_32939__$1 = state_32939;
var statearr_32954_33032 = state_32939__$1;
(statearr_32954_33032[(2)] = null);

(statearr_32954_33032[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (4))){
var inst_32807 = (state_32939[(10)]);
var inst_32807__$1 = (state_32939[(2)]);
var inst_32808 = (inst_32807__$1 == null);
var state_32939__$1 = (function (){var statearr_32955 = state_32939;
(statearr_32955[(10)] = inst_32807__$1);

return statearr_32955;
})();
if(cljs.core.truth_(inst_32808)){
var statearr_32956_33033 = state_32939__$1;
(statearr_32956_33033[(1)] = (5));

} else {
var statearr_32957_33034 = state_32939__$1;
(statearr_32957_33034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (15))){
var inst_32817 = (state_32939[(14)]);
var inst_32818 = (state_32939[(15)]);
var inst_32819 = (state_32939[(16)]);
var inst_32816 = (state_32939[(17)]);
var inst_32834 = (state_32939[(2)]);
var inst_32835 = (inst_32819 + (1));
var tmp32951 = inst_32817;
var tmp32952 = inst_32818;
var tmp32953 = inst_32816;
var inst_32816__$1 = tmp32953;
var inst_32817__$1 = tmp32951;
var inst_32818__$1 = tmp32952;
var inst_32819__$1 = inst_32835;
var state_32939__$1 = (function (){var statearr_32958 = state_32939;
(statearr_32958[(14)] = inst_32817__$1);

(statearr_32958[(15)] = inst_32818__$1);

(statearr_32958[(18)] = inst_32834);

(statearr_32958[(16)] = inst_32819__$1);

(statearr_32958[(17)] = inst_32816__$1);

return statearr_32958;
})();
var statearr_32959_33035 = state_32939__$1;
(statearr_32959_33035[(2)] = null);

(statearr_32959_33035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (21))){
var inst_32861 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32963_33036 = state_32939__$1;
(statearr_32963_33036[(2)] = inst_32861);

(statearr_32963_33036[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (31))){
var inst_32887 = (state_32939[(11)]);
var inst_32891 = done.call(null,null);
var inst_32892 = cljs.core.async.untap_STAR_.call(null,m,inst_32887);
var state_32939__$1 = (function (){var statearr_32964 = state_32939;
(statearr_32964[(19)] = inst_32891);

return statearr_32964;
})();
var statearr_32965_33037 = state_32939__$1;
(statearr_32965_33037[(2)] = inst_32892);

(statearr_32965_33037[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (32))){
var inst_32882 = (state_32939[(9)]);
var inst_32879 = (state_32939[(20)]);
var inst_32881 = (state_32939[(21)]);
var inst_32880 = (state_32939[(12)]);
var inst_32894 = (state_32939[(2)]);
var inst_32895 = (inst_32882 + (1));
var tmp32960 = inst_32879;
var tmp32961 = inst_32881;
var tmp32962 = inst_32880;
var inst_32879__$1 = tmp32960;
var inst_32880__$1 = tmp32962;
var inst_32881__$1 = tmp32961;
var inst_32882__$1 = inst_32895;
var state_32939__$1 = (function (){var statearr_32966 = state_32939;
(statearr_32966[(9)] = inst_32882__$1);

(statearr_32966[(20)] = inst_32879__$1);

(statearr_32966[(21)] = inst_32881__$1);

(statearr_32966[(22)] = inst_32894);

(statearr_32966[(12)] = inst_32880__$1);

return statearr_32966;
})();
var statearr_32967_33038 = state_32939__$1;
(statearr_32967_33038[(2)] = null);

(statearr_32967_33038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (40))){
var inst_32907 = (state_32939[(23)]);
var inst_32911 = done.call(null,null);
var inst_32912 = cljs.core.async.untap_STAR_.call(null,m,inst_32907);
var state_32939__$1 = (function (){var statearr_32968 = state_32939;
(statearr_32968[(24)] = inst_32911);

return statearr_32968;
})();
var statearr_32969_33039 = state_32939__$1;
(statearr_32969_33039[(2)] = inst_32912);

(statearr_32969_33039[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (33))){
var inst_32898 = (state_32939[(25)]);
var inst_32900 = cljs.core.chunked_seq_QMARK_.call(null,inst_32898);
var state_32939__$1 = state_32939;
if(inst_32900){
var statearr_32970_33040 = state_32939__$1;
(statearr_32970_33040[(1)] = (36));

} else {
var statearr_32971_33041 = state_32939__$1;
(statearr_32971_33041[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (13))){
var inst_32828 = (state_32939[(26)]);
var inst_32831 = cljs.core.async.close_BANG_.call(null,inst_32828);
var state_32939__$1 = state_32939;
var statearr_32972_33042 = state_32939__$1;
(statearr_32972_33042[(2)] = inst_32831);

(statearr_32972_33042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (22))){
var inst_32851 = (state_32939[(8)]);
var inst_32854 = cljs.core.async.close_BANG_.call(null,inst_32851);
var state_32939__$1 = state_32939;
var statearr_32973_33043 = state_32939__$1;
(statearr_32973_33043[(2)] = inst_32854);

(statearr_32973_33043[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (36))){
var inst_32898 = (state_32939[(25)]);
var inst_32902 = cljs.core.chunk_first.call(null,inst_32898);
var inst_32903 = cljs.core.chunk_rest.call(null,inst_32898);
var inst_32904 = cljs.core.count.call(null,inst_32902);
var inst_32879 = inst_32903;
var inst_32880 = inst_32902;
var inst_32881 = inst_32904;
var inst_32882 = (0);
var state_32939__$1 = (function (){var statearr_32974 = state_32939;
(statearr_32974[(9)] = inst_32882);

(statearr_32974[(20)] = inst_32879);

(statearr_32974[(21)] = inst_32881);

(statearr_32974[(12)] = inst_32880);

return statearr_32974;
})();
var statearr_32975_33044 = state_32939__$1;
(statearr_32975_33044[(2)] = null);

(statearr_32975_33044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (41))){
var inst_32898 = (state_32939[(25)]);
var inst_32914 = (state_32939[(2)]);
var inst_32915 = cljs.core.next.call(null,inst_32898);
var inst_32879 = inst_32915;
var inst_32880 = null;
var inst_32881 = (0);
var inst_32882 = (0);
var state_32939__$1 = (function (){var statearr_32976 = state_32939;
(statearr_32976[(9)] = inst_32882);

(statearr_32976[(20)] = inst_32879);

(statearr_32976[(27)] = inst_32914);

(statearr_32976[(21)] = inst_32881);

(statearr_32976[(12)] = inst_32880);

return statearr_32976;
})();
var statearr_32977_33045 = state_32939__$1;
(statearr_32977_33045[(2)] = null);

(statearr_32977_33045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (43))){
var state_32939__$1 = state_32939;
var statearr_32978_33046 = state_32939__$1;
(statearr_32978_33046[(2)] = null);

(statearr_32978_33046[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (29))){
var inst_32923 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32979_33047 = state_32939__$1;
(statearr_32979_33047[(2)] = inst_32923);

(statearr_32979_33047[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (44))){
var inst_32932 = (state_32939[(2)]);
var state_32939__$1 = (function (){var statearr_32980 = state_32939;
(statearr_32980[(28)] = inst_32932);

return statearr_32980;
})();
var statearr_32981_33048 = state_32939__$1;
(statearr_32981_33048[(2)] = null);

(statearr_32981_33048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (6))){
var inst_32871 = (state_32939[(29)]);
var inst_32870 = cljs.core.deref.call(null,cs);
var inst_32871__$1 = cljs.core.keys.call(null,inst_32870);
var inst_32872 = cljs.core.count.call(null,inst_32871__$1);
var inst_32873 = cljs.core.reset_BANG_.call(null,dctr,inst_32872);
var inst_32878 = cljs.core.seq.call(null,inst_32871__$1);
var inst_32879 = inst_32878;
var inst_32880 = null;
var inst_32881 = (0);
var inst_32882 = (0);
var state_32939__$1 = (function (){var statearr_32982 = state_32939;
(statearr_32982[(9)] = inst_32882);

(statearr_32982[(20)] = inst_32879);

(statearr_32982[(21)] = inst_32881);

(statearr_32982[(29)] = inst_32871__$1);

(statearr_32982[(30)] = inst_32873);

(statearr_32982[(12)] = inst_32880);

return statearr_32982;
})();
var statearr_32983_33049 = state_32939__$1;
(statearr_32983_33049[(2)] = null);

(statearr_32983_33049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (28))){
var inst_32879 = (state_32939[(20)]);
var inst_32898 = (state_32939[(25)]);
var inst_32898__$1 = cljs.core.seq.call(null,inst_32879);
var state_32939__$1 = (function (){var statearr_32984 = state_32939;
(statearr_32984[(25)] = inst_32898__$1);

return statearr_32984;
})();
if(inst_32898__$1){
var statearr_32985_33050 = state_32939__$1;
(statearr_32985_33050[(1)] = (33));

} else {
var statearr_32986_33051 = state_32939__$1;
(statearr_32986_33051[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (25))){
var inst_32882 = (state_32939[(9)]);
var inst_32881 = (state_32939[(21)]);
var inst_32884 = (inst_32882 < inst_32881);
var inst_32885 = inst_32884;
var state_32939__$1 = state_32939;
if(cljs.core.truth_(inst_32885)){
var statearr_32987_33052 = state_32939__$1;
(statearr_32987_33052[(1)] = (27));

} else {
var statearr_32988_33053 = state_32939__$1;
(statearr_32988_33053[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (34))){
var state_32939__$1 = state_32939;
var statearr_32989_33054 = state_32939__$1;
(statearr_32989_33054[(2)] = null);

(statearr_32989_33054[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (17))){
var state_32939__$1 = state_32939;
var statearr_32990_33055 = state_32939__$1;
(statearr_32990_33055[(2)] = null);

(statearr_32990_33055[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (3))){
var inst_32937 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32939__$1,inst_32937);
} else {
if((state_val_32940 === (12))){
var inst_32866 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32991_33056 = state_32939__$1;
(statearr_32991_33056[(2)] = inst_32866);

(statearr_32991_33056[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (2))){
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32939__$1,(4),ch);
} else {
if((state_val_32940 === (23))){
var state_32939__$1 = state_32939;
var statearr_32992_33057 = state_32939__$1;
(statearr_32992_33057[(2)] = null);

(statearr_32992_33057[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (35))){
var inst_32921 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32993_33058 = state_32939__$1;
(statearr_32993_33058[(2)] = inst_32921);

(statearr_32993_33058[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (19))){
var inst_32838 = (state_32939[(7)]);
var inst_32842 = cljs.core.chunk_first.call(null,inst_32838);
var inst_32843 = cljs.core.chunk_rest.call(null,inst_32838);
var inst_32844 = cljs.core.count.call(null,inst_32842);
var inst_32816 = inst_32843;
var inst_32817 = inst_32842;
var inst_32818 = inst_32844;
var inst_32819 = (0);
var state_32939__$1 = (function (){var statearr_32994 = state_32939;
(statearr_32994[(14)] = inst_32817);

(statearr_32994[(15)] = inst_32818);

(statearr_32994[(16)] = inst_32819);

(statearr_32994[(17)] = inst_32816);

return statearr_32994;
})();
var statearr_32995_33059 = state_32939__$1;
(statearr_32995_33059[(2)] = null);

(statearr_32995_33059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (11))){
var inst_32838 = (state_32939[(7)]);
var inst_32816 = (state_32939[(17)]);
var inst_32838__$1 = cljs.core.seq.call(null,inst_32816);
var state_32939__$1 = (function (){var statearr_32996 = state_32939;
(statearr_32996[(7)] = inst_32838__$1);

return statearr_32996;
})();
if(inst_32838__$1){
var statearr_32997_33060 = state_32939__$1;
(statearr_32997_33060[(1)] = (16));

} else {
var statearr_32998_33061 = state_32939__$1;
(statearr_32998_33061[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (9))){
var inst_32868 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32999_33062 = state_32939__$1;
(statearr_32999_33062[(2)] = inst_32868);

(statearr_32999_33062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (5))){
var inst_32814 = cljs.core.deref.call(null,cs);
var inst_32815 = cljs.core.seq.call(null,inst_32814);
var inst_32816 = inst_32815;
var inst_32817 = null;
var inst_32818 = (0);
var inst_32819 = (0);
var state_32939__$1 = (function (){var statearr_33000 = state_32939;
(statearr_33000[(14)] = inst_32817);

(statearr_33000[(15)] = inst_32818);

(statearr_33000[(16)] = inst_32819);

(statearr_33000[(17)] = inst_32816);

return statearr_33000;
})();
var statearr_33001_33063 = state_32939__$1;
(statearr_33001_33063[(2)] = null);

(statearr_33001_33063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (14))){
var state_32939__$1 = state_32939;
var statearr_33002_33064 = state_32939__$1;
(statearr_33002_33064[(2)] = null);

(statearr_33002_33064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (45))){
var inst_32929 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_33003_33065 = state_32939__$1;
(statearr_33003_33065[(2)] = inst_32929);

(statearr_33003_33065[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (26))){
var inst_32871 = (state_32939[(29)]);
var inst_32925 = (state_32939[(2)]);
var inst_32926 = cljs.core.seq.call(null,inst_32871);
var state_32939__$1 = (function (){var statearr_33004 = state_32939;
(statearr_33004[(31)] = inst_32925);

return statearr_33004;
})();
if(inst_32926){
var statearr_33005_33066 = state_32939__$1;
(statearr_33005_33066[(1)] = (42));

} else {
var statearr_33006_33067 = state_32939__$1;
(statearr_33006_33067[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (16))){
var inst_32838 = (state_32939[(7)]);
var inst_32840 = cljs.core.chunked_seq_QMARK_.call(null,inst_32838);
var state_32939__$1 = state_32939;
if(inst_32840){
var statearr_33007_33068 = state_32939__$1;
(statearr_33007_33068[(1)] = (19));

} else {
var statearr_33008_33069 = state_32939__$1;
(statearr_33008_33069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (38))){
var inst_32918 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_33009_33070 = state_32939__$1;
(statearr_33009_33070[(2)] = inst_32918);

(statearr_33009_33070[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (30))){
var state_32939__$1 = state_32939;
var statearr_33010_33071 = state_32939__$1;
(statearr_33010_33071[(2)] = null);

(statearr_33010_33071[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (10))){
var inst_32817 = (state_32939[(14)]);
var inst_32819 = (state_32939[(16)]);
var inst_32827 = cljs.core._nth.call(null,inst_32817,inst_32819);
var inst_32828 = cljs.core.nth.call(null,inst_32827,(0),null);
var inst_32829 = cljs.core.nth.call(null,inst_32827,(1),null);
var state_32939__$1 = (function (){var statearr_33011 = state_32939;
(statearr_33011[(26)] = inst_32828);

return statearr_33011;
})();
if(cljs.core.truth_(inst_32829)){
var statearr_33012_33072 = state_32939__$1;
(statearr_33012_33072[(1)] = (13));

} else {
var statearr_33013_33073 = state_32939__$1;
(statearr_33013_33073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (18))){
var inst_32864 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_33014_33074 = state_32939__$1;
(statearr_33014_33074[(2)] = inst_32864);

(statearr_33014_33074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (42))){
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32939__$1,(45),dchan);
} else {
if((state_val_32940 === (37))){
var inst_32807 = (state_32939[(10)]);
var inst_32898 = (state_32939[(25)]);
var inst_32907 = (state_32939[(23)]);
var inst_32907__$1 = cljs.core.first.call(null,inst_32898);
var inst_32908 = cljs.core.async.put_BANG_.call(null,inst_32907__$1,inst_32807,done);
var state_32939__$1 = (function (){var statearr_33015 = state_32939;
(statearr_33015[(23)] = inst_32907__$1);

return statearr_33015;
})();
if(cljs.core.truth_(inst_32908)){
var statearr_33016_33075 = state_32939__$1;
(statearr_33016_33075[(1)] = (39));

} else {
var statearr_33017_33076 = state_32939__$1;
(statearr_33017_33076[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (8))){
var inst_32818 = (state_32939[(15)]);
var inst_32819 = (state_32939[(16)]);
var inst_32821 = (inst_32819 < inst_32818);
var inst_32822 = inst_32821;
var state_32939__$1 = state_32939;
if(cljs.core.truth_(inst_32822)){
var statearr_33018_33077 = state_32939__$1;
(statearr_33018_33077[(1)] = (10));

} else {
var statearr_33019_33078 = state_32939__$1;
(statearr_33019_33078[(1)] = (11));

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
});})(c__32219__auto___33024,cs,m,dchan,dctr,done))
;
return ((function (switch__32131__auto__,c__32219__auto___33024,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32132__auto__ = null;
var cljs$core$async$mult_$_state_machine__32132__auto____0 = (function (){
var statearr_33020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33020[(0)] = cljs$core$async$mult_$_state_machine__32132__auto__);

(statearr_33020[(1)] = (1));

return statearr_33020;
});
var cljs$core$async$mult_$_state_machine__32132__auto____1 = (function (state_32939){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_32939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e33021){if((e33021 instanceof Object)){
var ex__32135__auto__ = e33021;
var statearr_33022_33079 = state_32939;
(statearr_33022_33079[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33080 = state_32939;
state_32939 = G__33080;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32132__auto__ = function(state_32939){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32132__auto____1.call(this,state_32939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32132__auto____0;
cljs$core$async$mult_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32132__auto____1;
return cljs$core$async$mult_$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___33024,cs,m,dchan,dctr,done))
})();
var state__32221__auto__ = (function (){var statearr_33023 = f__32220__auto__.call(null);
(statearr_33023[(6)] = c__32219__auto___33024);

return statearr_33023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___33024,cs,m,dchan,dctr,done))
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
var G__33082 = arguments.length;
switch (G__33082) {
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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,ch);
} else {
var m__28735__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,ch);
} else {
var m__28735__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m);
} else {
var m__28735__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,state_map);
} else {
var m__28735__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,mode);
} else {
var m__28735__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29229__auto__ = [];
var len__29222__auto___33094 = arguments.length;
var i__29223__auto___33095 = (0);
while(true){
if((i__29223__auto___33095 < len__29222__auto___33094)){
args__29229__auto__.push((arguments[i__29223__auto___33095]));

var G__33096 = (i__29223__auto___33095 + (1));
i__29223__auto___33095 = G__33096;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((3) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29230__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33088){
var map__33089 = p__33088;
var map__33089__$1 = ((((!((map__33089 == null)))?((((map__33089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33089):map__33089);
var opts = map__33089__$1;
var statearr_33091_33097 = state;
(statearr_33091_33097[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33089,map__33089__$1,opts){
return (function (val){
var statearr_33092_33098 = state;
(statearr_33092_33098[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33089,map__33089__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33093_33099 = state;
(statearr_33093_33099[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33084){
var G__33085 = cljs.core.first.call(null,seq33084);
var seq33084__$1 = cljs.core.next.call(null,seq33084);
var G__33086 = cljs.core.first.call(null,seq33084__$1);
var seq33084__$2 = cljs.core.next.call(null,seq33084__$1);
var G__33087 = cljs.core.first.call(null,seq33084__$2);
var seq33084__$3 = cljs.core.next.call(null,seq33084__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33085,G__33086,G__33087,seq33084__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33100 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33101){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33101 = meta33101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33102,meta33101__$1){
var self__ = this;
var _33102__$1 = this;
return (new cljs.core.async.t_cljs$core$async33100(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33101__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33102){
var self__ = this;
var _33102__$1 = this;
return self__.meta33101;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33100.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33100.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33101","meta33101",26430044,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33100";

cljs.core.async.t_cljs$core$async33100.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async33100");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33100 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33100(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33101){
return (new cljs.core.async.t_cljs$core$async33100(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33101));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33100(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32219__auto___33264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___33264,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___33264,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33204){
var state_val_33205 = (state_33204[(1)]);
if((state_val_33205 === (7))){
var inst_33119 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
var statearr_33206_33265 = state_33204__$1;
(statearr_33206_33265[(2)] = inst_33119);

(statearr_33206_33265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (20))){
var inst_33131 = (state_33204[(7)]);
var state_33204__$1 = state_33204;
var statearr_33207_33266 = state_33204__$1;
(statearr_33207_33266[(2)] = inst_33131);

(statearr_33207_33266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (27))){
var state_33204__$1 = state_33204;
var statearr_33208_33267 = state_33204__$1;
(statearr_33208_33267[(2)] = null);

(statearr_33208_33267[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (1))){
var inst_33106 = (state_33204[(8)]);
var inst_33106__$1 = calc_state.call(null);
var inst_33108 = (inst_33106__$1 == null);
var inst_33109 = cljs.core.not.call(null,inst_33108);
var state_33204__$1 = (function (){var statearr_33209 = state_33204;
(statearr_33209[(8)] = inst_33106__$1);

return statearr_33209;
})();
if(inst_33109){
var statearr_33210_33268 = state_33204__$1;
(statearr_33210_33268[(1)] = (2));

} else {
var statearr_33211_33269 = state_33204__$1;
(statearr_33211_33269[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (24))){
var inst_33164 = (state_33204[(9)]);
var inst_33178 = (state_33204[(10)]);
var inst_33155 = (state_33204[(11)]);
var inst_33178__$1 = inst_33155.call(null,inst_33164);
var state_33204__$1 = (function (){var statearr_33212 = state_33204;
(statearr_33212[(10)] = inst_33178__$1);

return statearr_33212;
})();
if(cljs.core.truth_(inst_33178__$1)){
var statearr_33213_33270 = state_33204__$1;
(statearr_33213_33270[(1)] = (29));

} else {
var statearr_33214_33271 = state_33204__$1;
(statearr_33214_33271[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (4))){
var inst_33122 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
if(cljs.core.truth_(inst_33122)){
var statearr_33215_33272 = state_33204__$1;
(statearr_33215_33272[(1)] = (8));

} else {
var statearr_33216_33273 = state_33204__$1;
(statearr_33216_33273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (15))){
var inst_33149 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
if(cljs.core.truth_(inst_33149)){
var statearr_33217_33274 = state_33204__$1;
(statearr_33217_33274[(1)] = (19));

} else {
var statearr_33218_33275 = state_33204__$1;
(statearr_33218_33275[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (21))){
var inst_33154 = (state_33204[(12)]);
var inst_33154__$1 = (state_33204[(2)]);
var inst_33155 = cljs.core.get.call(null,inst_33154__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33156 = cljs.core.get.call(null,inst_33154__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33157 = cljs.core.get.call(null,inst_33154__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33204__$1 = (function (){var statearr_33219 = state_33204;
(statearr_33219[(12)] = inst_33154__$1);

(statearr_33219[(11)] = inst_33155);

(statearr_33219[(13)] = inst_33156);

return statearr_33219;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33204__$1,(22),inst_33157);
} else {
if((state_val_33205 === (31))){
var inst_33186 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
if(cljs.core.truth_(inst_33186)){
var statearr_33220_33276 = state_33204__$1;
(statearr_33220_33276[(1)] = (32));

} else {
var statearr_33221_33277 = state_33204__$1;
(statearr_33221_33277[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (32))){
var inst_33163 = (state_33204[(14)]);
var state_33204__$1 = state_33204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33204__$1,(35),out,inst_33163);
} else {
if((state_val_33205 === (33))){
var inst_33154 = (state_33204[(12)]);
var inst_33131 = inst_33154;
var state_33204__$1 = (function (){var statearr_33222 = state_33204;
(statearr_33222[(7)] = inst_33131);

return statearr_33222;
})();
var statearr_33223_33278 = state_33204__$1;
(statearr_33223_33278[(2)] = null);

(statearr_33223_33278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (13))){
var inst_33131 = (state_33204[(7)]);
var inst_33138 = inst_33131.cljs$lang$protocol_mask$partition0$;
var inst_33139 = (inst_33138 & (64));
var inst_33140 = inst_33131.cljs$core$ISeq$;
var inst_33141 = (cljs.core.PROTOCOL_SENTINEL === inst_33140);
var inst_33142 = (inst_33139) || (inst_33141);
var state_33204__$1 = state_33204;
if(cljs.core.truth_(inst_33142)){
var statearr_33224_33279 = state_33204__$1;
(statearr_33224_33279[(1)] = (16));

} else {
var statearr_33225_33280 = state_33204__$1;
(statearr_33225_33280[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (22))){
var inst_33164 = (state_33204[(9)]);
var inst_33163 = (state_33204[(14)]);
var inst_33162 = (state_33204[(2)]);
var inst_33163__$1 = cljs.core.nth.call(null,inst_33162,(0),null);
var inst_33164__$1 = cljs.core.nth.call(null,inst_33162,(1),null);
var inst_33165 = (inst_33163__$1 == null);
var inst_33166 = cljs.core._EQ_.call(null,inst_33164__$1,change);
var inst_33167 = (inst_33165) || (inst_33166);
var state_33204__$1 = (function (){var statearr_33226 = state_33204;
(statearr_33226[(9)] = inst_33164__$1);

(statearr_33226[(14)] = inst_33163__$1);

return statearr_33226;
})();
if(cljs.core.truth_(inst_33167)){
var statearr_33227_33281 = state_33204__$1;
(statearr_33227_33281[(1)] = (23));

} else {
var statearr_33228_33282 = state_33204__$1;
(statearr_33228_33282[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (36))){
var inst_33154 = (state_33204[(12)]);
var inst_33131 = inst_33154;
var state_33204__$1 = (function (){var statearr_33229 = state_33204;
(statearr_33229[(7)] = inst_33131);

return statearr_33229;
})();
var statearr_33230_33283 = state_33204__$1;
(statearr_33230_33283[(2)] = null);

(statearr_33230_33283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (29))){
var inst_33178 = (state_33204[(10)]);
var state_33204__$1 = state_33204;
var statearr_33231_33284 = state_33204__$1;
(statearr_33231_33284[(2)] = inst_33178);

(statearr_33231_33284[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (6))){
var state_33204__$1 = state_33204;
var statearr_33232_33285 = state_33204__$1;
(statearr_33232_33285[(2)] = false);

(statearr_33232_33285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (28))){
var inst_33174 = (state_33204[(2)]);
var inst_33175 = calc_state.call(null);
var inst_33131 = inst_33175;
var state_33204__$1 = (function (){var statearr_33233 = state_33204;
(statearr_33233[(7)] = inst_33131);

(statearr_33233[(15)] = inst_33174);

return statearr_33233;
})();
var statearr_33234_33286 = state_33204__$1;
(statearr_33234_33286[(2)] = null);

(statearr_33234_33286[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (25))){
var inst_33200 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
var statearr_33235_33287 = state_33204__$1;
(statearr_33235_33287[(2)] = inst_33200);

(statearr_33235_33287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (34))){
var inst_33198 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
var statearr_33236_33288 = state_33204__$1;
(statearr_33236_33288[(2)] = inst_33198);

(statearr_33236_33288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (17))){
var state_33204__$1 = state_33204;
var statearr_33237_33289 = state_33204__$1;
(statearr_33237_33289[(2)] = false);

(statearr_33237_33289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (3))){
var state_33204__$1 = state_33204;
var statearr_33238_33290 = state_33204__$1;
(statearr_33238_33290[(2)] = false);

(statearr_33238_33290[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (12))){
var inst_33202 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33204__$1,inst_33202);
} else {
if((state_val_33205 === (2))){
var inst_33106 = (state_33204[(8)]);
var inst_33111 = inst_33106.cljs$lang$protocol_mask$partition0$;
var inst_33112 = (inst_33111 & (64));
var inst_33113 = inst_33106.cljs$core$ISeq$;
var inst_33114 = (cljs.core.PROTOCOL_SENTINEL === inst_33113);
var inst_33115 = (inst_33112) || (inst_33114);
var state_33204__$1 = state_33204;
if(cljs.core.truth_(inst_33115)){
var statearr_33239_33291 = state_33204__$1;
(statearr_33239_33291[(1)] = (5));

} else {
var statearr_33240_33292 = state_33204__$1;
(statearr_33240_33292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (23))){
var inst_33163 = (state_33204[(14)]);
var inst_33169 = (inst_33163 == null);
var state_33204__$1 = state_33204;
if(cljs.core.truth_(inst_33169)){
var statearr_33241_33293 = state_33204__$1;
(statearr_33241_33293[(1)] = (26));

} else {
var statearr_33242_33294 = state_33204__$1;
(statearr_33242_33294[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (35))){
var inst_33189 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
if(cljs.core.truth_(inst_33189)){
var statearr_33243_33295 = state_33204__$1;
(statearr_33243_33295[(1)] = (36));

} else {
var statearr_33244_33296 = state_33204__$1;
(statearr_33244_33296[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (19))){
var inst_33131 = (state_33204[(7)]);
var inst_33151 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33131);
var state_33204__$1 = state_33204;
var statearr_33245_33297 = state_33204__$1;
(statearr_33245_33297[(2)] = inst_33151);

(statearr_33245_33297[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (11))){
var inst_33131 = (state_33204[(7)]);
var inst_33135 = (inst_33131 == null);
var inst_33136 = cljs.core.not.call(null,inst_33135);
var state_33204__$1 = state_33204;
if(inst_33136){
var statearr_33246_33298 = state_33204__$1;
(statearr_33246_33298[(1)] = (13));

} else {
var statearr_33247_33299 = state_33204__$1;
(statearr_33247_33299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (9))){
var inst_33106 = (state_33204[(8)]);
var state_33204__$1 = state_33204;
var statearr_33248_33300 = state_33204__$1;
(statearr_33248_33300[(2)] = inst_33106);

(statearr_33248_33300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (5))){
var state_33204__$1 = state_33204;
var statearr_33249_33301 = state_33204__$1;
(statearr_33249_33301[(2)] = true);

(statearr_33249_33301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (14))){
var state_33204__$1 = state_33204;
var statearr_33250_33302 = state_33204__$1;
(statearr_33250_33302[(2)] = false);

(statearr_33250_33302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (26))){
var inst_33164 = (state_33204[(9)]);
var inst_33171 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33164);
var state_33204__$1 = state_33204;
var statearr_33251_33303 = state_33204__$1;
(statearr_33251_33303[(2)] = inst_33171);

(statearr_33251_33303[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (16))){
var state_33204__$1 = state_33204;
var statearr_33252_33304 = state_33204__$1;
(statearr_33252_33304[(2)] = true);

(statearr_33252_33304[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (38))){
var inst_33194 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
var statearr_33253_33305 = state_33204__$1;
(statearr_33253_33305[(2)] = inst_33194);

(statearr_33253_33305[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (30))){
var inst_33164 = (state_33204[(9)]);
var inst_33155 = (state_33204[(11)]);
var inst_33156 = (state_33204[(13)]);
var inst_33181 = cljs.core.empty_QMARK_.call(null,inst_33155);
var inst_33182 = inst_33156.call(null,inst_33164);
var inst_33183 = cljs.core.not.call(null,inst_33182);
var inst_33184 = (inst_33181) && (inst_33183);
var state_33204__$1 = state_33204;
var statearr_33254_33306 = state_33204__$1;
(statearr_33254_33306[(2)] = inst_33184);

(statearr_33254_33306[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (10))){
var inst_33106 = (state_33204[(8)]);
var inst_33127 = (state_33204[(2)]);
var inst_33128 = cljs.core.get.call(null,inst_33127,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33129 = cljs.core.get.call(null,inst_33127,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33130 = cljs.core.get.call(null,inst_33127,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33131 = inst_33106;
var state_33204__$1 = (function (){var statearr_33255 = state_33204;
(statearr_33255[(16)] = inst_33128);

(statearr_33255[(7)] = inst_33131);

(statearr_33255[(17)] = inst_33130);

(statearr_33255[(18)] = inst_33129);

return statearr_33255;
})();
var statearr_33256_33307 = state_33204__$1;
(statearr_33256_33307[(2)] = null);

(statearr_33256_33307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (18))){
var inst_33146 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
var statearr_33257_33308 = state_33204__$1;
(statearr_33257_33308[(2)] = inst_33146);

(statearr_33257_33308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (37))){
var state_33204__$1 = state_33204;
var statearr_33258_33309 = state_33204__$1;
(statearr_33258_33309[(2)] = null);

(statearr_33258_33309[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (8))){
var inst_33106 = (state_33204[(8)]);
var inst_33124 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33106);
var state_33204__$1 = state_33204;
var statearr_33259_33310 = state_33204__$1;
(statearr_33259_33310[(2)] = inst_33124);

(statearr_33259_33310[(1)] = (10));


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
});})(c__32219__auto___33264,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32131__auto__,c__32219__auto___33264,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32132__auto__ = null;
var cljs$core$async$mix_$_state_machine__32132__auto____0 = (function (){
var statearr_33260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33260[(0)] = cljs$core$async$mix_$_state_machine__32132__auto__);

(statearr_33260[(1)] = (1));

return statearr_33260;
});
var cljs$core$async$mix_$_state_machine__32132__auto____1 = (function (state_33204){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_33204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e33261){if((e33261 instanceof Object)){
var ex__32135__auto__ = e33261;
var statearr_33262_33311 = state_33204;
(statearr_33262_33311[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33312 = state_33204;
state_33204 = G__33312;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32132__auto__ = function(state_33204){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32132__auto____1.call(this,state_33204);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32132__auto____0;
cljs$core$async$mix_$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32132__auto____1;
return cljs$core$async$mix_$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___33264,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32221__auto__ = (function (){var statearr_33263 = f__32220__auto__.call(null);
(statearr_33263[(6)] = c__32219__auto___33264);

return statearr_33263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___33264,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28734__auto__ = (((p == null))?null:p);
var m__28735__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28735__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28734__auto__ = (((p == null))?null:p);
var m__28735__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,p,v,ch);
} else {
var m__28735__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33314 = arguments.length;
switch (G__33314) {
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28734__auto__ = (((p == null))?null:p);
var m__28735__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,p);
} else {
var m__28735__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28734__auto__ = (((p == null))?null:p);
var m__28735__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,p,v);
} else {
var m__28735__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,p,v);
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
var G__33318 = arguments.length;
switch (G__33318) {
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
var or__28051__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28051__auto__,mults){
return (function (p1__33316_SHARP_){
if(cljs.core.truth_(p1__33316_SHARP_.call(null,topic))){
return p1__33316_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33316_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28051__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33319 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33320){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33320 = meta33320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33321,meta33320__$1){
var self__ = this;
var _33321__$1 = this;
return (new cljs.core.async.t_cljs$core$async33319(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33320__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33321){
var self__ = this;
var _33321__$1 = this;
return self__.meta33320;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33319.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33320","meta33320",-1902553377,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33319.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33319";

cljs.core.async.t_cljs$core$async33319.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async33319");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33319 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33319(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33320){
return (new cljs.core.async.t_cljs$core$async33319(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33320));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33319(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32219__auto___33439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___33439,mults,ensure_mult,p){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___33439,mults,ensure_mult,p){
return (function (state_33393){
var state_val_33394 = (state_33393[(1)]);
if((state_val_33394 === (7))){
var inst_33389 = (state_33393[(2)]);
var state_33393__$1 = state_33393;
var statearr_33395_33440 = state_33393__$1;
(statearr_33395_33440[(2)] = inst_33389);

(statearr_33395_33440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (20))){
var state_33393__$1 = state_33393;
var statearr_33396_33441 = state_33393__$1;
(statearr_33396_33441[(2)] = null);

(statearr_33396_33441[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (1))){
var state_33393__$1 = state_33393;
var statearr_33397_33442 = state_33393__$1;
(statearr_33397_33442[(2)] = null);

(statearr_33397_33442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (24))){
var inst_33372 = (state_33393[(7)]);
var inst_33381 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33372);
var state_33393__$1 = state_33393;
var statearr_33398_33443 = state_33393__$1;
(statearr_33398_33443[(2)] = inst_33381);

(statearr_33398_33443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (4))){
var inst_33324 = (state_33393[(8)]);
var inst_33324__$1 = (state_33393[(2)]);
var inst_33325 = (inst_33324__$1 == null);
var state_33393__$1 = (function (){var statearr_33399 = state_33393;
(statearr_33399[(8)] = inst_33324__$1);

return statearr_33399;
})();
if(cljs.core.truth_(inst_33325)){
var statearr_33400_33444 = state_33393__$1;
(statearr_33400_33444[(1)] = (5));

} else {
var statearr_33401_33445 = state_33393__$1;
(statearr_33401_33445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (15))){
var inst_33366 = (state_33393[(2)]);
var state_33393__$1 = state_33393;
var statearr_33402_33446 = state_33393__$1;
(statearr_33402_33446[(2)] = inst_33366);

(statearr_33402_33446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (21))){
var inst_33386 = (state_33393[(2)]);
var state_33393__$1 = (function (){var statearr_33403 = state_33393;
(statearr_33403[(9)] = inst_33386);

return statearr_33403;
})();
var statearr_33404_33447 = state_33393__$1;
(statearr_33404_33447[(2)] = null);

(statearr_33404_33447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (13))){
var inst_33348 = (state_33393[(10)]);
var inst_33350 = cljs.core.chunked_seq_QMARK_.call(null,inst_33348);
var state_33393__$1 = state_33393;
if(inst_33350){
var statearr_33405_33448 = state_33393__$1;
(statearr_33405_33448[(1)] = (16));

} else {
var statearr_33406_33449 = state_33393__$1;
(statearr_33406_33449[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (22))){
var inst_33378 = (state_33393[(2)]);
var state_33393__$1 = state_33393;
if(cljs.core.truth_(inst_33378)){
var statearr_33407_33450 = state_33393__$1;
(statearr_33407_33450[(1)] = (23));

} else {
var statearr_33408_33451 = state_33393__$1;
(statearr_33408_33451[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (6))){
var inst_33372 = (state_33393[(7)]);
var inst_33324 = (state_33393[(8)]);
var inst_33374 = (state_33393[(11)]);
var inst_33372__$1 = topic_fn.call(null,inst_33324);
var inst_33373 = cljs.core.deref.call(null,mults);
var inst_33374__$1 = cljs.core.get.call(null,inst_33373,inst_33372__$1);
var state_33393__$1 = (function (){var statearr_33409 = state_33393;
(statearr_33409[(7)] = inst_33372__$1);

(statearr_33409[(11)] = inst_33374__$1);

return statearr_33409;
})();
if(cljs.core.truth_(inst_33374__$1)){
var statearr_33410_33452 = state_33393__$1;
(statearr_33410_33452[(1)] = (19));

} else {
var statearr_33411_33453 = state_33393__$1;
(statearr_33411_33453[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (25))){
var inst_33383 = (state_33393[(2)]);
var state_33393__$1 = state_33393;
var statearr_33412_33454 = state_33393__$1;
(statearr_33412_33454[(2)] = inst_33383);

(statearr_33412_33454[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (17))){
var inst_33348 = (state_33393[(10)]);
var inst_33357 = cljs.core.first.call(null,inst_33348);
var inst_33358 = cljs.core.async.muxch_STAR_.call(null,inst_33357);
var inst_33359 = cljs.core.async.close_BANG_.call(null,inst_33358);
var inst_33360 = cljs.core.next.call(null,inst_33348);
var inst_33334 = inst_33360;
var inst_33335 = null;
var inst_33336 = (0);
var inst_33337 = (0);
var state_33393__$1 = (function (){var statearr_33413 = state_33393;
(statearr_33413[(12)] = inst_33337);

(statearr_33413[(13)] = inst_33334);

(statearr_33413[(14)] = inst_33335);

(statearr_33413[(15)] = inst_33336);

(statearr_33413[(16)] = inst_33359);

return statearr_33413;
})();
var statearr_33414_33455 = state_33393__$1;
(statearr_33414_33455[(2)] = null);

(statearr_33414_33455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (3))){
var inst_33391 = (state_33393[(2)]);
var state_33393__$1 = state_33393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33393__$1,inst_33391);
} else {
if((state_val_33394 === (12))){
var inst_33368 = (state_33393[(2)]);
var state_33393__$1 = state_33393;
var statearr_33415_33456 = state_33393__$1;
(statearr_33415_33456[(2)] = inst_33368);

(statearr_33415_33456[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (2))){
var state_33393__$1 = state_33393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33393__$1,(4),ch);
} else {
if((state_val_33394 === (23))){
var state_33393__$1 = state_33393;
var statearr_33416_33457 = state_33393__$1;
(statearr_33416_33457[(2)] = null);

(statearr_33416_33457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (19))){
var inst_33324 = (state_33393[(8)]);
var inst_33374 = (state_33393[(11)]);
var inst_33376 = cljs.core.async.muxch_STAR_.call(null,inst_33374);
var state_33393__$1 = state_33393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33393__$1,(22),inst_33376,inst_33324);
} else {
if((state_val_33394 === (11))){
var inst_33334 = (state_33393[(13)]);
var inst_33348 = (state_33393[(10)]);
var inst_33348__$1 = cljs.core.seq.call(null,inst_33334);
var state_33393__$1 = (function (){var statearr_33417 = state_33393;
(statearr_33417[(10)] = inst_33348__$1);

return statearr_33417;
})();
if(inst_33348__$1){
var statearr_33418_33458 = state_33393__$1;
(statearr_33418_33458[(1)] = (13));

} else {
var statearr_33419_33459 = state_33393__$1;
(statearr_33419_33459[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (9))){
var inst_33370 = (state_33393[(2)]);
var state_33393__$1 = state_33393;
var statearr_33420_33460 = state_33393__$1;
(statearr_33420_33460[(2)] = inst_33370);

(statearr_33420_33460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (5))){
var inst_33331 = cljs.core.deref.call(null,mults);
var inst_33332 = cljs.core.vals.call(null,inst_33331);
var inst_33333 = cljs.core.seq.call(null,inst_33332);
var inst_33334 = inst_33333;
var inst_33335 = null;
var inst_33336 = (0);
var inst_33337 = (0);
var state_33393__$1 = (function (){var statearr_33421 = state_33393;
(statearr_33421[(12)] = inst_33337);

(statearr_33421[(13)] = inst_33334);

(statearr_33421[(14)] = inst_33335);

(statearr_33421[(15)] = inst_33336);

return statearr_33421;
})();
var statearr_33422_33461 = state_33393__$1;
(statearr_33422_33461[(2)] = null);

(statearr_33422_33461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (14))){
var state_33393__$1 = state_33393;
var statearr_33426_33462 = state_33393__$1;
(statearr_33426_33462[(2)] = null);

(statearr_33426_33462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (16))){
var inst_33348 = (state_33393[(10)]);
var inst_33352 = cljs.core.chunk_first.call(null,inst_33348);
var inst_33353 = cljs.core.chunk_rest.call(null,inst_33348);
var inst_33354 = cljs.core.count.call(null,inst_33352);
var inst_33334 = inst_33353;
var inst_33335 = inst_33352;
var inst_33336 = inst_33354;
var inst_33337 = (0);
var state_33393__$1 = (function (){var statearr_33427 = state_33393;
(statearr_33427[(12)] = inst_33337);

(statearr_33427[(13)] = inst_33334);

(statearr_33427[(14)] = inst_33335);

(statearr_33427[(15)] = inst_33336);

return statearr_33427;
})();
var statearr_33428_33463 = state_33393__$1;
(statearr_33428_33463[(2)] = null);

(statearr_33428_33463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (10))){
var inst_33337 = (state_33393[(12)]);
var inst_33334 = (state_33393[(13)]);
var inst_33335 = (state_33393[(14)]);
var inst_33336 = (state_33393[(15)]);
var inst_33342 = cljs.core._nth.call(null,inst_33335,inst_33337);
var inst_33343 = cljs.core.async.muxch_STAR_.call(null,inst_33342);
var inst_33344 = cljs.core.async.close_BANG_.call(null,inst_33343);
var inst_33345 = (inst_33337 + (1));
var tmp33423 = inst_33334;
var tmp33424 = inst_33335;
var tmp33425 = inst_33336;
var inst_33334__$1 = tmp33423;
var inst_33335__$1 = tmp33424;
var inst_33336__$1 = tmp33425;
var inst_33337__$1 = inst_33345;
var state_33393__$1 = (function (){var statearr_33429 = state_33393;
(statearr_33429[(12)] = inst_33337__$1);

(statearr_33429[(13)] = inst_33334__$1);

(statearr_33429[(14)] = inst_33335__$1);

(statearr_33429[(15)] = inst_33336__$1);

(statearr_33429[(17)] = inst_33344);

return statearr_33429;
})();
var statearr_33430_33464 = state_33393__$1;
(statearr_33430_33464[(2)] = null);

(statearr_33430_33464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (18))){
var inst_33363 = (state_33393[(2)]);
var state_33393__$1 = state_33393;
var statearr_33431_33465 = state_33393__$1;
(statearr_33431_33465[(2)] = inst_33363);

(statearr_33431_33465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33394 === (8))){
var inst_33337 = (state_33393[(12)]);
var inst_33336 = (state_33393[(15)]);
var inst_33339 = (inst_33337 < inst_33336);
var inst_33340 = inst_33339;
var state_33393__$1 = state_33393;
if(cljs.core.truth_(inst_33340)){
var statearr_33432_33466 = state_33393__$1;
(statearr_33432_33466[(1)] = (10));

} else {
var statearr_33433_33467 = state_33393__$1;
(statearr_33433_33467[(1)] = (11));

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
});})(c__32219__auto___33439,mults,ensure_mult,p))
;
return ((function (switch__32131__auto__,c__32219__auto___33439,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32132__auto__ = null;
var cljs$core$async$state_machine__32132__auto____0 = (function (){
var statearr_33434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33434[(0)] = cljs$core$async$state_machine__32132__auto__);

(statearr_33434[(1)] = (1));

return statearr_33434;
});
var cljs$core$async$state_machine__32132__auto____1 = (function (state_33393){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_33393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e33435){if((e33435 instanceof Object)){
var ex__32135__auto__ = e33435;
var statearr_33436_33468 = state_33393;
(statearr_33436_33468[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33469 = state_33393;
state_33393 = G__33469;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$state_machine__32132__auto__ = function(state_33393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32132__auto____1.call(this,state_33393);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32132__auto____0;
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32132__auto____1;
return cljs$core$async$state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___33439,mults,ensure_mult,p))
})();
var state__32221__auto__ = (function (){var statearr_33437 = f__32220__auto__.call(null);
(statearr_33437[(6)] = c__32219__auto___33439);

return statearr_33437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___33439,mults,ensure_mult,p))
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
var G__33471 = arguments.length;
switch (G__33471) {
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
var G__33474 = arguments.length;
switch (G__33474) {
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
var G__33477 = arguments.length;
switch (G__33477) {
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
var c__32219__auto___33544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___33544,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___33544,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33516){
var state_val_33517 = (state_33516[(1)]);
if((state_val_33517 === (7))){
var state_33516__$1 = state_33516;
var statearr_33518_33545 = state_33516__$1;
(statearr_33518_33545[(2)] = null);

(statearr_33518_33545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (1))){
var state_33516__$1 = state_33516;
var statearr_33519_33546 = state_33516__$1;
(statearr_33519_33546[(2)] = null);

(statearr_33519_33546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (4))){
var inst_33480 = (state_33516[(7)]);
var inst_33482 = (inst_33480 < cnt);
var state_33516__$1 = state_33516;
if(cljs.core.truth_(inst_33482)){
var statearr_33520_33547 = state_33516__$1;
(statearr_33520_33547[(1)] = (6));

} else {
var statearr_33521_33548 = state_33516__$1;
(statearr_33521_33548[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (15))){
var inst_33512 = (state_33516[(2)]);
var state_33516__$1 = state_33516;
var statearr_33522_33549 = state_33516__$1;
(statearr_33522_33549[(2)] = inst_33512);

(statearr_33522_33549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (13))){
var inst_33505 = cljs.core.async.close_BANG_.call(null,out);
var state_33516__$1 = state_33516;
var statearr_33523_33550 = state_33516__$1;
(statearr_33523_33550[(2)] = inst_33505);

(statearr_33523_33550[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (6))){
var state_33516__$1 = state_33516;
var statearr_33524_33551 = state_33516__$1;
(statearr_33524_33551[(2)] = null);

(statearr_33524_33551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (3))){
var inst_33514 = (state_33516[(2)]);
var state_33516__$1 = state_33516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33516__$1,inst_33514);
} else {
if((state_val_33517 === (12))){
var inst_33502 = (state_33516[(8)]);
var inst_33502__$1 = (state_33516[(2)]);
var inst_33503 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33502__$1);
var state_33516__$1 = (function (){var statearr_33525 = state_33516;
(statearr_33525[(8)] = inst_33502__$1);

return statearr_33525;
})();
if(cljs.core.truth_(inst_33503)){
var statearr_33526_33552 = state_33516__$1;
(statearr_33526_33552[(1)] = (13));

} else {
var statearr_33527_33553 = state_33516__$1;
(statearr_33527_33553[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (2))){
var inst_33479 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33480 = (0);
var state_33516__$1 = (function (){var statearr_33528 = state_33516;
(statearr_33528[(7)] = inst_33480);

(statearr_33528[(9)] = inst_33479);

return statearr_33528;
})();
var statearr_33529_33554 = state_33516__$1;
(statearr_33529_33554[(2)] = null);

(statearr_33529_33554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (11))){
var inst_33480 = (state_33516[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33516,(10),Object,null,(9));
var inst_33489 = chs__$1.call(null,inst_33480);
var inst_33490 = done.call(null,inst_33480);
var inst_33491 = cljs.core.async.take_BANG_.call(null,inst_33489,inst_33490);
var state_33516__$1 = state_33516;
var statearr_33530_33555 = state_33516__$1;
(statearr_33530_33555[(2)] = inst_33491);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33516__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (9))){
var inst_33480 = (state_33516[(7)]);
var inst_33493 = (state_33516[(2)]);
var inst_33494 = (inst_33480 + (1));
var inst_33480__$1 = inst_33494;
var state_33516__$1 = (function (){var statearr_33531 = state_33516;
(statearr_33531[(7)] = inst_33480__$1);

(statearr_33531[(10)] = inst_33493);

return statearr_33531;
})();
var statearr_33532_33556 = state_33516__$1;
(statearr_33532_33556[(2)] = null);

(statearr_33532_33556[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (5))){
var inst_33500 = (state_33516[(2)]);
var state_33516__$1 = (function (){var statearr_33533 = state_33516;
(statearr_33533[(11)] = inst_33500);

return statearr_33533;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33516__$1,(12),dchan);
} else {
if((state_val_33517 === (14))){
var inst_33502 = (state_33516[(8)]);
var inst_33507 = cljs.core.apply.call(null,f,inst_33502);
var state_33516__$1 = state_33516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33516__$1,(16),out,inst_33507);
} else {
if((state_val_33517 === (16))){
var inst_33509 = (state_33516[(2)]);
var state_33516__$1 = (function (){var statearr_33534 = state_33516;
(statearr_33534[(12)] = inst_33509);

return statearr_33534;
})();
var statearr_33535_33557 = state_33516__$1;
(statearr_33535_33557[(2)] = null);

(statearr_33535_33557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (10))){
var inst_33484 = (state_33516[(2)]);
var inst_33485 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33516__$1 = (function (){var statearr_33536 = state_33516;
(statearr_33536[(13)] = inst_33484);

return statearr_33536;
})();
var statearr_33537_33558 = state_33516__$1;
(statearr_33537_33558[(2)] = inst_33485);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33516__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (8))){
var inst_33498 = (state_33516[(2)]);
var state_33516__$1 = state_33516;
var statearr_33538_33559 = state_33516__$1;
(statearr_33538_33559[(2)] = inst_33498);

(statearr_33538_33559[(1)] = (5));


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
});})(c__32219__auto___33544,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32131__auto__,c__32219__auto___33544,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32132__auto__ = null;
var cljs$core$async$state_machine__32132__auto____0 = (function (){
var statearr_33539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33539[(0)] = cljs$core$async$state_machine__32132__auto__);

(statearr_33539[(1)] = (1));

return statearr_33539;
});
var cljs$core$async$state_machine__32132__auto____1 = (function (state_33516){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_33516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e33540){if((e33540 instanceof Object)){
var ex__32135__auto__ = e33540;
var statearr_33541_33560 = state_33516;
(statearr_33541_33560[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33561 = state_33516;
state_33516 = G__33561;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$state_machine__32132__auto__ = function(state_33516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32132__auto____1.call(this,state_33516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32132__auto____0;
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32132__auto____1;
return cljs$core$async$state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___33544,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32221__auto__ = (function (){var statearr_33542 = f__32220__auto__.call(null);
(statearr_33542[(6)] = c__32219__auto___33544);

return statearr_33542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___33544,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33564 = arguments.length;
switch (G__33564) {
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
var c__32219__auto___33618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___33618,out){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___33618,out){
return (function (state_33596){
var state_val_33597 = (state_33596[(1)]);
if((state_val_33597 === (7))){
var inst_33575 = (state_33596[(7)]);
var inst_33576 = (state_33596[(8)]);
var inst_33575__$1 = (state_33596[(2)]);
var inst_33576__$1 = cljs.core.nth.call(null,inst_33575__$1,(0),null);
var inst_33577 = cljs.core.nth.call(null,inst_33575__$1,(1),null);
var inst_33578 = (inst_33576__$1 == null);
var state_33596__$1 = (function (){var statearr_33598 = state_33596;
(statearr_33598[(7)] = inst_33575__$1);

(statearr_33598[(9)] = inst_33577);

(statearr_33598[(8)] = inst_33576__$1);

return statearr_33598;
})();
if(cljs.core.truth_(inst_33578)){
var statearr_33599_33619 = state_33596__$1;
(statearr_33599_33619[(1)] = (8));

} else {
var statearr_33600_33620 = state_33596__$1;
(statearr_33600_33620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (1))){
var inst_33565 = cljs.core.vec.call(null,chs);
var inst_33566 = inst_33565;
var state_33596__$1 = (function (){var statearr_33601 = state_33596;
(statearr_33601[(10)] = inst_33566);

return statearr_33601;
})();
var statearr_33602_33621 = state_33596__$1;
(statearr_33602_33621[(2)] = null);

(statearr_33602_33621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (4))){
var inst_33566 = (state_33596[(10)]);
var state_33596__$1 = state_33596;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33596__$1,(7),inst_33566);
} else {
if((state_val_33597 === (6))){
var inst_33592 = (state_33596[(2)]);
var state_33596__$1 = state_33596;
var statearr_33603_33622 = state_33596__$1;
(statearr_33603_33622[(2)] = inst_33592);

(statearr_33603_33622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (3))){
var inst_33594 = (state_33596[(2)]);
var state_33596__$1 = state_33596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33596__$1,inst_33594);
} else {
if((state_val_33597 === (2))){
var inst_33566 = (state_33596[(10)]);
var inst_33568 = cljs.core.count.call(null,inst_33566);
var inst_33569 = (inst_33568 > (0));
var state_33596__$1 = state_33596;
if(cljs.core.truth_(inst_33569)){
var statearr_33605_33623 = state_33596__$1;
(statearr_33605_33623[(1)] = (4));

} else {
var statearr_33606_33624 = state_33596__$1;
(statearr_33606_33624[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (11))){
var inst_33566 = (state_33596[(10)]);
var inst_33585 = (state_33596[(2)]);
var tmp33604 = inst_33566;
var inst_33566__$1 = tmp33604;
var state_33596__$1 = (function (){var statearr_33607 = state_33596;
(statearr_33607[(11)] = inst_33585);

(statearr_33607[(10)] = inst_33566__$1);

return statearr_33607;
})();
var statearr_33608_33625 = state_33596__$1;
(statearr_33608_33625[(2)] = null);

(statearr_33608_33625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (9))){
var inst_33576 = (state_33596[(8)]);
var state_33596__$1 = state_33596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33596__$1,(11),out,inst_33576);
} else {
if((state_val_33597 === (5))){
var inst_33590 = cljs.core.async.close_BANG_.call(null,out);
var state_33596__$1 = state_33596;
var statearr_33609_33626 = state_33596__$1;
(statearr_33609_33626[(2)] = inst_33590);

(statearr_33609_33626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (10))){
var inst_33588 = (state_33596[(2)]);
var state_33596__$1 = state_33596;
var statearr_33610_33627 = state_33596__$1;
(statearr_33610_33627[(2)] = inst_33588);

(statearr_33610_33627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (8))){
var inst_33575 = (state_33596[(7)]);
var inst_33577 = (state_33596[(9)]);
var inst_33576 = (state_33596[(8)]);
var inst_33566 = (state_33596[(10)]);
var inst_33580 = (function (){var cs = inst_33566;
var vec__33571 = inst_33575;
var v = inst_33576;
var c = inst_33577;
return ((function (cs,vec__33571,v,c,inst_33575,inst_33577,inst_33576,inst_33566,state_val_33597,c__32219__auto___33618,out){
return (function (p1__33562_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33562_SHARP_);
});
;})(cs,vec__33571,v,c,inst_33575,inst_33577,inst_33576,inst_33566,state_val_33597,c__32219__auto___33618,out))
})();
var inst_33581 = cljs.core.filterv.call(null,inst_33580,inst_33566);
var inst_33566__$1 = inst_33581;
var state_33596__$1 = (function (){var statearr_33611 = state_33596;
(statearr_33611[(10)] = inst_33566__$1);

return statearr_33611;
})();
var statearr_33612_33628 = state_33596__$1;
(statearr_33612_33628[(2)] = null);

(statearr_33612_33628[(1)] = (2));


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
});})(c__32219__auto___33618,out))
;
return ((function (switch__32131__auto__,c__32219__auto___33618,out){
return (function() {
var cljs$core$async$state_machine__32132__auto__ = null;
var cljs$core$async$state_machine__32132__auto____0 = (function (){
var statearr_33613 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33613[(0)] = cljs$core$async$state_machine__32132__auto__);

(statearr_33613[(1)] = (1));

return statearr_33613;
});
var cljs$core$async$state_machine__32132__auto____1 = (function (state_33596){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_33596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e33614){if((e33614 instanceof Object)){
var ex__32135__auto__ = e33614;
var statearr_33615_33629 = state_33596;
(statearr_33615_33629[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33630 = state_33596;
state_33596 = G__33630;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$state_machine__32132__auto__ = function(state_33596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32132__auto____1.call(this,state_33596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32132__auto____0;
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32132__auto____1;
return cljs$core$async$state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___33618,out))
})();
var state__32221__auto__ = (function (){var statearr_33616 = f__32220__auto__.call(null);
(statearr_33616[(6)] = c__32219__auto___33618);

return statearr_33616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___33618,out))
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
var G__33632 = arguments.length;
switch (G__33632) {
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
var c__32219__auto___33677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___33677,out){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___33677,out){
return (function (state_33656){
var state_val_33657 = (state_33656[(1)]);
if((state_val_33657 === (7))){
var inst_33638 = (state_33656[(7)]);
var inst_33638__$1 = (state_33656[(2)]);
var inst_33639 = (inst_33638__$1 == null);
var inst_33640 = cljs.core.not.call(null,inst_33639);
var state_33656__$1 = (function (){var statearr_33658 = state_33656;
(statearr_33658[(7)] = inst_33638__$1);

return statearr_33658;
})();
if(inst_33640){
var statearr_33659_33678 = state_33656__$1;
(statearr_33659_33678[(1)] = (8));

} else {
var statearr_33660_33679 = state_33656__$1;
(statearr_33660_33679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (1))){
var inst_33633 = (0);
var state_33656__$1 = (function (){var statearr_33661 = state_33656;
(statearr_33661[(8)] = inst_33633);

return statearr_33661;
})();
var statearr_33662_33680 = state_33656__$1;
(statearr_33662_33680[(2)] = null);

(statearr_33662_33680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (4))){
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33656__$1,(7),ch);
} else {
if((state_val_33657 === (6))){
var inst_33651 = (state_33656[(2)]);
var state_33656__$1 = state_33656;
var statearr_33663_33681 = state_33656__$1;
(statearr_33663_33681[(2)] = inst_33651);

(statearr_33663_33681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (3))){
var inst_33653 = (state_33656[(2)]);
var inst_33654 = cljs.core.async.close_BANG_.call(null,out);
var state_33656__$1 = (function (){var statearr_33664 = state_33656;
(statearr_33664[(9)] = inst_33653);

return statearr_33664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33656__$1,inst_33654);
} else {
if((state_val_33657 === (2))){
var inst_33633 = (state_33656[(8)]);
var inst_33635 = (inst_33633 < n);
var state_33656__$1 = state_33656;
if(cljs.core.truth_(inst_33635)){
var statearr_33665_33682 = state_33656__$1;
(statearr_33665_33682[(1)] = (4));

} else {
var statearr_33666_33683 = state_33656__$1;
(statearr_33666_33683[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (11))){
var inst_33633 = (state_33656[(8)]);
var inst_33643 = (state_33656[(2)]);
var inst_33644 = (inst_33633 + (1));
var inst_33633__$1 = inst_33644;
var state_33656__$1 = (function (){var statearr_33667 = state_33656;
(statearr_33667[(10)] = inst_33643);

(statearr_33667[(8)] = inst_33633__$1);

return statearr_33667;
})();
var statearr_33668_33684 = state_33656__$1;
(statearr_33668_33684[(2)] = null);

(statearr_33668_33684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (9))){
var state_33656__$1 = state_33656;
var statearr_33669_33685 = state_33656__$1;
(statearr_33669_33685[(2)] = null);

(statearr_33669_33685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (5))){
var state_33656__$1 = state_33656;
var statearr_33670_33686 = state_33656__$1;
(statearr_33670_33686[(2)] = null);

(statearr_33670_33686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (10))){
var inst_33648 = (state_33656[(2)]);
var state_33656__$1 = state_33656;
var statearr_33671_33687 = state_33656__$1;
(statearr_33671_33687[(2)] = inst_33648);

(statearr_33671_33687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (8))){
var inst_33638 = (state_33656[(7)]);
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33656__$1,(11),out,inst_33638);
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
});})(c__32219__auto___33677,out))
;
return ((function (switch__32131__auto__,c__32219__auto___33677,out){
return (function() {
var cljs$core$async$state_machine__32132__auto__ = null;
var cljs$core$async$state_machine__32132__auto____0 = (function (){
var statearr_33672 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33672[(0)] = cljs$core$async$state_machine__32132__auto__);

(statearr_33672[(1)] = (1));

return statearr_33672;
});
var cljs$core$async$state_machine__32132__auto____1 = (function (state_33656){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_33656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e33673){if((e33673 instanceof Object)){
var ex__32135__auto__ = e33673;
var statearr_33674_33688 = state_33656;
(statearr_33674_33688[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33689 = state_33656;
state_33656 = G__33689;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$state_machine__32132__auto__ = function(state_33656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32132__auto____1.call(this,state_33656);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32132__auto____0;
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32132__auto____1;
return cljs$core$async$state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___33677,out))
})();
var state__32221__auto__ = (function (){var statearr_33675 = f__32220__auto__.call(null);
(statearr_33675[(6)] = c__32219__auto___33677);

return statearr_33675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___33677,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33691 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33691 = (function (f,ch,meta33692){
this.f = f;
this.ch = ch;
this.meta33692 = meta33692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33693,meta33692__$1){
var self__ = this;
var _33693__$1 = this;
return (new cljs.core.async.t_cljs$core$async33691(self__.f,self__.ch,meta33692__$1));
});

cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33693){
var self__ = this;
var _33693__$1 = this;
return self__.meta33692;
});

cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33694 = (function (f,ch,meta33692,_,fn1,meta33695){
this.f = f;
this.ch = ch;
this.meta33692 = meta33692;
this._ = _;
this.fn1 = fn1;
this.meta33695 = meta33695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33696,meta33695__$1){
var self__ = this;
var _33696__$1 = this;
return (new cljs.core.async.t_cljs$core$async33694(self__.f,self__.ch,self__.meta33692,self__._,self__.fn1,meta33695__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33696){
var self__ = this;
var _33696__$1 = this;
return self__.meta33695;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33690_SHARP_){
return f1.call(null,(((p1__33690_SHARP_ == null))?null:self__.f.call(null,p1__33690_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33694.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33692","meta33692",-1025809691,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33691","cljs.core.async/t_cljs$core$async33691",1300167388,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33695","meta33695",1963532221,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33694";

cljs.core.async.t_cljs$core$async33694.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async33694");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33694 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33694(f__$1,ch__$1,meta33692__$1,___$2,fn1__$1,meta33695){
return (new cljs.core.async.t_cljs$core$async33694(f__$1,ch__$1,meta33692__$1,___$2,fn1__$1,meta33695));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33694(self__.f,self__.ch,self__.meta33692,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28039__auto__ = ret;
if(cljs.core.truth_(and__28039__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28039__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33692","meta33692",-1025809691,null)], null);
});

cljs.core.async.t_cljs$core$async33691.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33691";

cljs.core.async.t_cljs$core$async33691.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async33691");
});

cljs.core.async.__GT_t_cljs$core$async33691 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33691(f__$1,ch__$1,meta33692){
return (new cljs.core.async.t_cljs$core$async33691(f__$1,ch__$1,meta33692));
});

}

return (new cljs.core.async.t_cljs$core$async33691(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33697 = (function (f,ch,meta33698){
this.f = f;
this.ch = ch;
this.meta33698 = meta33698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33699,meta33698__$1){
var self__ = this;
var _33699__$1 = this;
return (new cljs.core.async.t_cljs$core$async33697(self__.f,self__.ch,meta33698__$1));
});

cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33699){
var self__ = this;
var _33699__$1 = this;
return self__.meta33698;
});

cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33697.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33698","meta33698",-1134369626,null)], null);
});

cljs.core.async.t_cljs$core$async33697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33697";

cljs.core.async.t_cljs$core$async33697.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async33697");
});

cljs.core.async.__GT_t_cljs$core$async33697 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33697(f__$1,ch__$1,meta33698){
return (new cljs.core.async.t_cljs$core$async33697(f__$1,ch__$1,meta33698));
});

}

return (new cljs.core.async.t_cljs$core$async33697(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33700 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33700 = (function (p,ch,meta33701){
this.p = p;
this.ch = ch;
this.meta33701 = meta33701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33702,meta33701__$1){
var self__ = this;
var _33702__$1 = this;
return (new cljs.core.async.t_cljs$core$async33700(self__.p,self__.ch,meta33701__$1));
});

cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33702){
var self__ = this;
var _33702__$1 = this;
return self__.meta33701;
});

cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33700.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33701","meta33701",-777355571,null)], null);
});

cljs.core.async.t_cljs$core$async33700.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33700";

cljs.core.async.t_cljs$core$async33700.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async33700");
});

cljs.core.async.__GT_t_cljs$core$async33700 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33700(p__$1,ch__$1,meta33701){
return (new cljs.core.async.t_cljs$core$async33700(p__$1,ch__$1,meta33701));
});

}

return (new cljs.core.async.t_cljs$core$async33700(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33704 = arguments.length;
switch (G__33704) {
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
var c__32219__auto___33744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___33744,out){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___33744,out){
return (function (state_33725){
var state_val_33726 = (state_33725[(1)]);
if((state_val_33726 === (7))){
var inst_33721 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
var statearr_33727_33745 = state_33725__$1;
(statearr_33727_33745[(2)] = inst_33721);

(statearr_33727_33745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (1))){
var state_33725__$1 = state_33725;
var statearr_33728_33746 = state_33725__$1;
(statearr_33728_33746[(2)] = null);

(statearr_33728_33746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (4))){
var inst_33707 = (state_33725[(7)]);
var inst_33707__$1 = (state_33725[(2)]);
var inst_33708 = (inst_33707__$1 == null);
var state_33725__$1 = (function (){var statearr_33729 = state_33725;
(statearr_33729[(7)] = inst_33707__$1);

return statearr_33729;
})();
if(cljs.core.truth_(inst_33708)){
var statearr_33730_33747 = state_33725__$1;
(statearr_33730_33747[(1)] = (5));

} else {
var statearr_33731_33748 = state_33725__$1;
(statearr_33731_33748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (6))){
var inst_33707 = (state_33725[(7)]);
var inst_33712 = p.call(null,inst_33707);
var state_33725__$1 = state_33725;
if(cljs.core.truth_(inst_33712)){
var statearr_33732_33749 = state_33725__$1;
(statearr_33732_33749[(1)] = (8));

} else {
var statearr_33733_33750 = state_33725__$1;
(statearr_33733_33750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (3))){
var inst_33723 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33725__$1,inst_33723);
} else {
if((state_val_33726 === (2))){
var state_33725__$1 = state_33725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33725__$1,(4),ch);
} else {
if((state_val_33726 === (11))){
var inst_33715 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
var statearr_33734_33751 = state_33725__$1;
(statearr_33734_33751[(2)] = inst_33715);

(statearr_33734_33751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (9))){
var state_33725__$1 = state_33725;
var statearr_33735_33752 = state_33725__$1;
(statearr_33735_33752[(2)] = null);

(statearr_33735_33752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (5))){
var inst_33710 = cljs.core.async.close_BANG_.call(null,out);
var state_33725__$1 = state_33725;
var statearr_33736_33753 = state_33725__$1;
(statearr_33736_33753[(2)] = inst_33710);

(statearr_33736_33753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (10))){
var inst_33718 = (state_33725[(2)]);
var state_33725__$1 = (function (){var statearr_33737 = state_33725;
(statearr_33737[(8)] = inst_33718);

return statearr_33737;
})();
var statearr_33738_33754 = state_33725__$1;
(statearr_33738_33754[(2)] = null);

(statearr_33738_33754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (8))){
var inst_33707 = (state_33725[(7)]);
var state_33725__$1 = state_33725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33725__$1,(11),out,inst_33707);
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
});})(c__32219__auto___33744,out))
;
return ((function (switch__32131__auto__,c__32219__auto___33744,out){
return (function() {
var cljs$core$async$state_machine__32132__auto__ = null;
var cljs$core$async$state_machine__32132__auto____0 = (function (){
var statearr_33739 = [null,null,null,null,null,null,null,null,null];
(statearr_33739[(0)] = cljs$core$async$state_machine__32132__auto__);

(statearr_33739[(1)] = (1));

return statearr_33739;
});
var cljs$core$async$state_machine__32132__auto____1 = (function (state_33725){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_33725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e33740){if((e33740 instanceof Object)){
var ex__32135__auto__ = e33740;
var statearr_33741_33755 = state_33725;
(statearr_33741_33755[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33756 = state_33725;
state_33725 = G__33756;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$state_machine__32132__auto__ = function(state_33725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32132__auto____1.call(this,state_33725);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32132__auto____0;
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32132__auto____1;
return cljs$core$async$state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___33744,out))
})();
var state__32221__auto__ = (function (){var statearr_33742 = f__32220__auto__.call(null);
(statearr_33742[(6)] = c__32219__auto___33744);

return statearr_33742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___33744,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33758 = arguments.length;
switch (G__33758) {
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
var c__32219__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto__){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto__){
return (function (state_33821){
var state_val_33822 = (state_33821[(1)]);
if((state_val_33822 === (7))){
var inst_33817 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
var statearr_33823_33861 = state_33821__$1;
(statearr_33823_33861[(2)] = inst_33817);

(statearr_33823_33861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (20))){
var inst_33787 = (state_33821[(7)]);
var inst_33798 = (state_33821[(2)]);
var inst_33799 = cljs.core.next.call(null,inst_33787);
var inst_33773 = inst_33799;
var inst_33774 = null;
var inst_33775 = (0);
var inst_33776 = (0);
var state_33821__$1 = (function (){var statearr_33824 = state_33821;
(statearr_33824[(8)] = inst_33775);

(statearr_33824[(9)] = inst_33773);

(statearr_33824[(10)] = inst_33798);

(statearr_33824[(11)] = inst_33774);

(statearr_33824[(12)] = inst_33776);

return statearr_33824;
})();
var statearr_33825_33862 = state_33821__$1;
(statearr_33825_33862[(2)] = null);

(statearr_33825_33862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (1))){
var state_33821__$1 = state_33821;
var statearr_33826_33863 = state_33821__$1;
(statearr_33826_33863[(2)] = null);

(statearr_33826_33863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (4))){
var inst_33762 = (state_33821[(13)]);
var inst_33762__$1 = (state_33821[(2)]);
var inst_33763 = (inst_33762__$1 == null);
var state_33821__$1 = (function (){var statearr_33827 = state_33821;
(statearr_33827[(13)] = inst_33762__$1);

return statearr_33827;
})();
if(cljs.core.truth_(inst_33763)){
var statearr_33828_33864 = state_33821__$1;
(statearr_33828_33864[(1)] = (5));

} else {
var statearr_33829_33865 = state_33821__$1;
(statearr_33829_33865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (15))){
var state_33821__$1 = state_33821;
var statearr_33833_33866 = state_33821__$1;
(statearr_33833_33866[(2)] = null);

(statearr_33833_33866[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (21))){
var state_33821__$1 = state_33821;
var statearr_33834_33867 = state_33821__$1;
(statearr_33834_33867[(2)] = null);

(statearr_33834_33867[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (13))){
var inst_33775 = (state_33821[(8)]);
var inst_33773 = (state_33821[(9)]);
var inst_33774 = (state_33821[(11)]);
var inst_33776 = (state_33821[(12)]);
var inst_33783 = (state_33821[(2)]);
var inst_33784 = (inst_33776 + (1));
var tmp33830 = inst_33775;
var tmp33831 = inst_33773;
var tmp33832 = inst_33774;
var inst_33773__$1 = tmp33831;
var inst_33774__$1 = tmp33832;
var inst_33775__$1 = tmp33830;
var inst_33776__$1 = inst_33784;
var state_33821__$1 = (function (){var statearr_33835 = state_33821;
(statearr_33835[(8)] = inst_33775__$1);

(statearr_33835[(9)] = inst_33773__$1);

(statearr_33835[(14)] = inst_33783);

(statearr_33835[(11)] = inst_33774__$1);

(statearr_33835[(12)] = inst_33776__$1);

return statearr_33835;
})();
var statearr_33836_33868 = state_33821__$1;
(statearr_33836_33868[(2)] = null);

(statearr_33836_33868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (22))){
var state_33821__$1 = state_33821;
var statearr_33837_33869 = state_33821__$1;
(statearr_33837_33869[(2)] = null);

(statearr_33837_33869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (6))){
var inst_33762 = (state_33821[(13)]);
var inst_33771 = f.call(null,inst_33762);
var inst_33772 = cljs.core.seq.call(null,inst_33771);
var inst_33773 = inst_33772;
var inst_33774 = null;
var inst_33775 = (0);
var inst_33776 = (0);
var state_33821__$1 = (function (){var statearr_33838 = state_33821;
(statearr_33838[(8)] = inst_33775);

(statearr_33838[(9)] = inst_33773);

(statearr_33838[(11)] = inst_33774);

(statearr_33838[(12)] = inst_33776);

return statearr_33838;
})();
var statearr_33839_33870 = state_33821__$1;
(statearr_33839_33870[(2)] = null);

(statearr_33839_33870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (17))){
var inst_33787 = (state_33821[(7)]);
var inst_33791 = cljs.core.chunk_first.call(null,inst_33787);
var inst_33792 = cljs.core.chunk_rest.call(null,inst_33787);
var inst_33793 = cljs.core.count.call(null,inst_33791);
var inst_33773 = inst_33792;
var inst_33774 = inst_33791;
var inst_33775 = inst_33793;
var inst_33776 = (0);
var state_33821__$1 = (function (){var statearr_33840 = state_33821;
(statearr_33840[(8)] = inst_33775);

(statearr_33840[(9)] = inst_33773);

(statearr_33840[(11)] = inst_33774);

(statearr_33840[(12)] = inst_33776);

return statearr_33840;
})();
var statearr_33841_33871 = state_33821__$1;
(statearr_33841_33871[(2)] = null);

(statearr_33841_33871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (3))){
var inst_33819 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33821__$1,inst_33819);
} else {
if((state_val_33822 === (12))){
var inst_33807 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
var statearr_33842_33872 = state_33821__$1;
(statearr_33842_33872[(2)] = inst_33807);

(statearr_33842_33872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (2))){
var state_33821__$1 = state_33821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33821__$1,(4),in$);
} else {
if((state_val_33822 === (23))){
var inst_33815 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
var statearr_33843_33873 = state_33821__$1;
(statearr_33843_33873[(2)] = inst_33815);

(statearr_33843_33873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (19))){
var inst_33802 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
var statearr_33844_33874 = state_33821__$1;
(statearr_33844_33874[(2)] = inst_33802);

(statearr_33844_33874[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (11))){
var inst_33773 = (state_33821[(9)]);
var inst_33787 = (state_33821[(7)]);
var inst_33787__$1 = cljs.core.seq.call(null,inst_33773);
var state_33821__$1 = (function (){var statearr_33845 = state_33821;
(statearr_33845[(7)] = inst_33787__$1);

return statearr_33845;
})();
if(inst_33787__$1){
var statearr_33846_33875 = state_33821__$1;
(statearr_33846_33875[(1)] = (14));

} else {
var statearr_33847_33876 = state_33821__$1;
(statearr_33847_33876[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (9))){
var inst_33809 = (state_33821[(2)]);
var inst_33810 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33821__$1 = (function (){var statearr_33848 = state_33821;
(statearr_33848[(15)] = inst_33809);

return statearr_33848;
})();
if(cljs.core.truth_(inst_33810)){
var statearr_33849_33877 = state_33821__$1;
(statearr_33849_33877[(1)] = (21));

} else {
var statearr_33850_33878 = state_33821__$1;
(statearr_33850_33878[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (5))){
var inst_33765 = cljs.core.async.close_BANG_.call(null,out);
var state_33821__$1 = state_33821;
var statearr_33851_33879 = state_33821__$1;
(statearr_33851_33879[(2)] = inst_33765);

(statearr_33851_33879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (14))){
var inst_33787 = (state_33821[(7)]);
var inst_33789 = cljs.core.chunked_seq_QMARK_.call(null,inst_33787);
var state_33821__$1 = state_33821;
if(inst_33789){
var statearr_33852_33880 = state_33821__$1;
(statearr_33852_33880[(1)] = (17));

} else {
var statearr_33853_33881 = state_33821__$1;
(statearr_33853_33881[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (16))){
var inst_33805 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
var statearr_33854_33882 = state_33821__$1;
(statearr_33854_33882[(2)] = inst_33805);

(statearr_33854_33882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (10))){
var inst_33774 = (state_33821[(11)]);
var inst_33776 = (state_33821[(12)]);
var inst_33781 = cljs.core._nth.call(null,inst_33774,inst_33776);
var state_33821__$1 = state_33821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33821__$1,(13),out,inst_33781);
} else {
if((state_val_33822 === (18))){
var inst_33787 = (state_33821[(7)]);
var inst_33796 = cljs.core.first.call(null,inst_33787);
var state_33821__$1 = state_33821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33821__$1,(20),out,inst_33796);
} else {
if((state_val_33822 === (8))){
var inst_33775 = (state_33821[(8)]);
var inst_33776 = (state_33821[(12)]);
var inst_33778 = (inst_33776 < inst_33775);
var inst_33779 = inst_33778;
var state_33821__$1 = state_33821;
if(cljs.core.truth_(inst_33779)){
var statearr_33855_33883 = state_33821__$1;
(statearr_33855_33883[(1)] = (10));

} else {
var statearr_33856_33884 = state_33821__$1;
(statearr_33856_33884[(1)] = (11));

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
});})(c__32219__auto__))
;
return ((function (switch__32131__auto__,c__32219__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32132__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32132__auto____0 = (function (){
var statearr_33857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33857[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32132__auto__);

(statearr_33857[(1)] = (1));

return statearr_33857;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32132__auto____1 = (function (state_33821){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_33821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e33858){if((e33858 instanceof Object)){
var ex__32135__auto__ = e33858;
var statearr_33859_33885 = state_33821;
(statearr_33859_33885[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33886 = state_33821;
state_33821 = G__33886;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32132__auto__ = function(state_33821){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32132__auto____1.call(this,state_33821);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32132__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32132__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto__))
})();
var state__32221__auto__ = (function (){var statearr_33860 = f__32220__auto__.call(null);
(statearr_33860[(6)] = c__32219__auto__);

return statearr_33860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto__))
);

return c__32219__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33888 = arguments.length;
switch (G__33888) {
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
var G__33891 = arguments.length;
switch (G__33891) {
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
var G__33894 = arguments.length;
switch (G__33894) {
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
var c__32219__auto___33941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___33941,out){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___33941,out){
return (function (state_33918){
var state_val_33919 = (state_33918[(1)]);
if((state_val_33919 === (7))){
var inst_33913 = (state_33918[(2)]);
var state_33918__$1 = state_33918;
var statearr_33920_33942 = state_33918__$1;
(statearr_33920_33942[(2)] = inst_33913);

(statearr_33920_33942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33919 === (1))){
var inst_33895 = null;
var state_33918__$1 = (function (){var statearr_33921 = state_33918;
(statearr_33921[(7)] = inst_33895);

return statearr_33921;
})();
var statearr_33922_33943 = state_33918__$1;
(statearr_33922_33943[(2)] = null);

(statearr_33922_33943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33919 === (4))){
var inst_33898 = (state_33918[(8)]);
var inst_33898__$1 = (state_33918[(2)]);
var inst_33899 = (inst_33898__$1 == null);
var inst_33900 = cljs.core.not.call(null,inst_33899);
var state_33918__$1 = (function (){var statearr_33923 = state_33918;
(statearr_33923[(8)] = inst_33898__$1);

return statearr_33923;
})();
if(inst_33900){
var statearr_33924_33944 = state_33918__$1;
(statearr_33924_33944[(1)] = (5));

} else {
var statearr_33925_33945 = state_33918__$1;
(statearr_33925_33945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33919 === (6))){
var state_33918__$1 = state_33918;
var statearr_33926_33946 = state_33918__$1;
(statearr_33926_33946[(2)] = null);

(statearr_33926_33946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33919 === (3))){
var inst_33915 = (state_33918[(2)]);
var inst_33916 = cljs.core.async.close_BANG_.call(null,out);
var state_33918__$1 = (function (){var statearr_33927 = state_33918;
(statearr_33927[(9)] = inst_33915);

return statearr_33927;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33918__$1,inst_33916);
} else {
if((state_val_33919 === (2))){
var state_33918__$1 = state_33918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33918__$1,(4),ch);
} else {
if((state_val_33919 === (11))){
var inst_33898 = (state_33918[(8)]);
var inst_33907 = (state_33918[(2)]);
var inst_33895 = inst_33898;
var state_33918__$1 = (function (){var statearr_33928 = state_33918;
(statearr_33928[(10)] = inst_33907);

(statearr_33928[(7)] = inst_33895);

return statearr_33928;
})();
var statearr_33929_33947 = state_33918__$1;
(statearr_33929_33947[(2)] = null);

(statearr_33929_33947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33919 === (9))){
var inst_33898 = (state_33918[(8)]);
var state_33918__$1 = state_33918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33918__$1,(11),out,inst_33898);
} else {
if((state_val_33919 === (5))){
var inst_33898 = (state_33918[(8)]);
var inst_33895 = (state_33918[(7)]);
var inst_33902 = cljs.core._EQ_.call(null,inst_33898,inst_33895);
var state_33918__$1 = state_33918;
if(inst_33902){
var statearr_33931_33948 = state_33918__$1;
(statearr_33931_33948[(1)] = (8));

} else {
var statearr_33932_33949 = state_33918__$1;
(statearr_33932_33949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33919 === (10))){
var inst_33910 = (state_33918[(2)]);
var state_33918__$1 = state_33918;
var statearr_33933_33950 = state_33918__$1;
(statearr_33933_33950[(2)] = inst_33910);

(statearr_33933_33950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33919 === (8))){
var inst_33895 = (state_33918[(7)]);
var tmp33930 = inst_33895;
var inst_33895__$1 = tmp33930;
var state_33918__$1 = (function (){var statearr_33934 = state_33918;
(statearr_33934[(7)] = inst_33895__$1);

return statearr_33934;
})();
var statearr_33935_33951 = state_33918__$1;
(statearr_33935_33951[(2)] = null);

(statearr_33935_33951[(1)] = (2));


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
});})(c__32219__auto___33941,out))
;
return ((function (switch__32131__auto__,c__32219__auto___33941,out){
return (function() {
var cljs$core$async$state_machine__32132__auto__ = null;
var cljs$core$async$state_machine__32132__auto____0 = (function (){
var statearr_33936 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33936[(0)] = cljs$core$async$state_machine__32132__auto__);

(statearr_33936[(1)] = (1));

return statearr_33936;
});
var cljs$core$async$state_machine__32132__auto____1 = (function (state_33918){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_33918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e33937){if((e33937 instanceof Object)){
var ex__32135__auto__ = e33937;
var statearr_33938_33952 = state_33918;
(statearr_33938_33952[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33953 = state_33918;
state_33918 = G__33953;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$state_machine__32132__auto__ = function(state_33918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32132__auto____1.call(this,state_33918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32132__auto____0;
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32132__auto____1;
return cljs$core$async$state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___33941,out))
})();
var state__32221__auto__ = (function (){var statearr_33939 = f__32220__auto__.call(null);
(statearr_33939[(6)] = c__32219__auto___33941);

return statearr_33939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___33941,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33955 = arguments.length;
switch (G__33955) {
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
var c__32219__auto___34021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___34021,out){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___34021,out){
return (function (state_33993){
var state_val_33994 = (state_33993[(1)]);
if((state_val_33994 === (7))){
var inst_33989 = (state_33993[(2)]);
var state_33993__$1 = state_33993;
var statearr_33995_34022 = state_33993__$1;
(statearr_33995_34022[(2)] = inst_33989);

(statearr_33995_34022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (1))){
var inst_33956 = (new Array(n));
var inst_33957 = inst_33956;
var inst_33958 = (0);
var state_33993__$1 = (function (){var statearr_33996 = state_33993;
(statearr_33996[(7)] = inst_33957);

(statearr_33996[(8)] = inst_33958);

return statearr_33996;
})();
var statearr_33997_34023 = state_33993__$1;
(statearr_33997_34023[(2)] = null);

(statearr_33997_34023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (4))){
var inst_33961 = (state_33993[(9)]);
var inst_33961__$1 = (state_33993[(2)]);
var inst_33962 = (inst_33961__$1 == null);
var inst_33963 = cljs.core.not.call(null,inst_33962);
var state_33993__$1 = (function (){var statearr_33998 = state_33993;
(statearr_33998[(9)] = inst_33961__$1);

return statearr_33998;
})();
if(inst_33963){
var statearr_33999_34024 = state_33993__$1;
(statearr_33999_34024[(1)] = (5));

} else {
var statearr_34000_34025 = state_33993__$1;
(statearr_34000_34025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (15))){
var inst_33983 = (state_33993[(2)]);
var state_33993__$1 = state_33993;
var statearr_34001_34026 = state_33993__$1;
(statearr_34001_34026[(2)] = inst_33983);

(statearr_34001_34026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (13))){
var state_33993__$1 = state_33993;
var statearr_34002_34027 = state_33993__$1;
(statearr_34002_34027[(2)] = null);

(statearr_34002_34027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (6))){
var inst_33958 = (state_33993[(8)]);
var inst_33979 = (inst_33958 > (0));
var state_33993__$1 = state_33993;
if(cljs.core.truth_(inst_33979)){
var statearr_34003_34028 = state_33993__$1;
(statearr_34003_34028[(1)] = (12));

} else {
var statearr_34004_34029 = state_33993__$1;
(statearr_34004_34029[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (3))){
var inst_33991 = (state_33993[(2)]);
var state_33993__$1 = state_33993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33993__$1,inst_33991);
} else {
if((state_val_33994 === (12))){
var inst_33957 = (state_33993[(7)]);
var inst_33981 = cljs.core.vec.call(null,inst_33957);
var state_33993__$1 = state_33993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33993__$1,(15),out,inst_33981);
} else {
if((state_val_33994 === (2))){
var state_33993__$1 = state_33993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33993__$1,(4),ch);
} else {
if((state_val_33994 === (11))){
var inst_33973 = (state_33993[(2)]);
var inst_33974 = (new Array(n));
var inst_33957 = inst_33974;
var inst_33958 = (0);
var state_33993__$1 = (function (){var statearr_34005 = state_33993;
(statearr_34005[(10)] = inst_33973);

(statearr_34005[(7)] = inst_33957);

(statearr_34005[(8)] = inst_33958);

return statearr_34005;
})();
var statearr_34006_34030 = state_33993__$1;
(statearr_34006_34030[(2)] = null);

(statearr_34006_34030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (9))){
var inst_33957 = (state_33993[(7)]);
var inst_33971 = cljs.core.vec.call(null,inst_33957);
var state_33993__$1 = state_33993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33993__$1,(11),out,inst_33971);
} else {
if((state_val_33994 === (5))){
var inst_33957 = (state_33993[(7)]);
var inst_33961 = (state_33993[(9)]);
var inst_33958 = (state_33993[(8)]);
var inst_33966 = (state_33993[(11)]);
var inst_33965 = (inst_33957[inst_33958] = inst_33961);
var inst_33966__$1 = (inst_33958 + (1));
var inst_33967 = (inst_33966__$1 < n);
var state_33993__$1 = (function (){var statearr_34007 = state_33993;
(statearr_34007[(12)] = inst_33965);

(statearr_34007[(11)] = inst_33966__$1);

return statearr_34007;
})();
if(cljs.core.truth_(inst_33967)){
var statearr_34008_34031 = state_33993__$1;
(statearr_34008_34031[(1)] = (8));

} else {
var statearr_34009_34032 = state_33993__$1;
(statearr_34009_34032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (14))){
var inst_33986 = (state_33993[(2)]);
var inst_33987 = cljs.core.async.close_BANG_.call(null,out);
var state_33993__$1 = (function (){var statearr_34011 = state_33993;
(statearr_34011[(13)] = inst_33986);

return statearr_34011;
})();
var statearr_34012_34033 = state_33993__$1;
(statearr_34012_34033[(2)] = inst_33987);

(statearr_34012_34033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (10))){
var inst_33977 = (state_33993[(2)]);
var state_33993__$1 = state_33993;
var statearr_34013_34034 = state_33993__$1;
(statearr_34013_34034[(2)] = inst_33977);

(statearr_34013_34034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33994 === (8))){
var inst_33957 = (state_33993[(7)]);
var inst_33966 = (state_33993[(11)]);
var tmp34010 = inst_33957;
var inst_33957__$1 = tmp34010;
var inst_33958 = inst_33966;
var state_33993__$1 = (function (){var statearr_34014 = state_33993;
(statearr_34014[(7)] = inst_33957__$1);

(statearr_34014[(8)] = inst_33958);

return statearr_34014;
})();
var statearr_34015_34035 = state_33993__$1;
(statearr_34015_34035[(2)] = null);

(statearr_34015_34035[(1)] = (2));


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
});})(c__32219__auto___34021,out))
;
return ((function (switch__32131__auto__,c__32219__auto___34021,out){
return (function() {
var cljs$core$async$state_machine__32132__auto__ = null;
var cljs$core$async$state_machine__32132__auto____0 = (function (){
var statearr_34016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34016[(0)] = cljs$core$async$state_machine__32132__auto__);

(statearr_34016[(1)] = (1));

return statearr_34016;
});
var cljs$core$async$state_machine__32132__auto____1 = (function (state_33993){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_33993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e34017){if((e34017 instanceof Object)){
var ex__32135__auto__ = e34017;
var statearr_34018_34036 = state_33993;
(statearr_34018_34036[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34037 = state_33993;
state_33993 = G__34037;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$state_machine__32132__auto__ = function(state_33993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32132__auto____1.call(this,state_33993);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32132__auto____0;
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32132__auto____1;
return cljs$core$async$state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___34021,out))
})();
var state__32221__auto__ = (function (){var statearr_34019 = f__32220__auto__.call(null);
(statearr_34019[(6)] = c__32219__auto___34021);

return statearr_34019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___34021,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34039 = arguments.length;
switch (G__34039) {
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
var c__32219__auto___34109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32219__auto___34109,out){
return (function (){
var f__32220__auto__ = (function (){var switch__32131__auto__ = ((function (c__32219__auto___34109,out){
return (function (state_34081){
var state_val_34082 = (state_34081[(1)]);
if((state_val_34082 === (7))){
var inst_34077 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
var statearr_34083_34110 = state_34081__$1;
(statearr_34083_34110[(2)] = inst_34077);

(statearr_34083_34110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (1))){
var inst_34040 = [];
var inst_34041 = inst_34040;
var inst_34042 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34081__$1 = (function (){var statearr_34084 = state_34081;
(statearr_34084[(7)] = inst_34042);

(statearr_34084[(8)] = inst_34041);

return statearr_34084;
})();
var statearr_34085_34111 = state_34081__$1;
(statearr_34085_34111[(2)] = null);

(statearr_34085_34111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (4))){
var inst_34045 = (state_34081[(9)]);
var inst_34045__$1 = (state_34081[(2)]);
var inst_34046 = (inst_34045__$1 == null);
var inst_34047 = cljs.core.not.call(null,inst_34046);
var state_34081__$1 = (function (){var statearr_34086 = state_34081;
(statearr_34086[(9)] = inst_34045__$1);

return statearr_34086;
})();
if(inst_34047){
var statearr_34087_34112 = state_34081__$1;
(statearr_34087_34112[(1)] = (5));

} else {
var statearr_34088_34113 = state_34081__$1;
(statearr_34088_34113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (15))){
var inst_34071 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
var statearr_34089_34114 = state_34081__$1;
(statearr_34089_34114[(2)] = inst_34071);

(statearr_34089_34114[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (13))){
var state_34081__$1 = state_34081;
var statearr_34090_34115 = state_34081__$1;
(statearr_34090_34115[(2)] = null);

(statearr_34090_34115[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (6))){
var inst_34041 = (state_34081[(8)]);
var inst_34066 = inst_34041.length;
var inst_34067 = (inst_34066 > (0));
var state_34081__$1 = state_34081;
if(cljs.core.truth_(inst_34067)){
var statearr_34091_34116 = state_34081__$1;
(statearr_34091_34116[(1)] = (12));

} else {
var statearr_34092_34117 = state_34081__$1;
(statearr_34092_34117[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (3))){
var inst_34079 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34081__$1,inst_34079);
} else {
if((state_val_34082 === (12))){
var inst_34041 = (state_34081[(8)]);
var inst_34069 = cljs.core.vec.call(null,inst_34041);
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34081__$1,(15),out,inst_34069);
} else {
if((state_val_34082 === (2))){
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34081__$1,(4),ch);
} else {
if((state_val_34082 === (11))){
var inst_34045 = (state_34081[(9)]);
var inst_34049 = (state_34081[(10)]);
var inst_34059 = (state_34081[(2)]);
var inst_34060 = [];
var inst_34061 = inst_34060.push(inst_34045);
var inst_34041 = inst_34060;
var inst_34042 = inst_34049;
var state_34081__$1 = (function (){var statearr_34093 = state_34081;
(statearr_34093[(11)] = inst_34059);

(statearr_34093[(12)] = inst_34061);

(statearr_34093[(7)] = inst_34042);

(statearr_34093[(8)] = inst_34041);

return statearr_34093;
})();
var statearr_34094_34118 = state_34081__$1;
(statearr_34094_34118[(2)] = null);

(statearr_34094_34118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (9))){
var inst_34041 = (state_34081[(8)]);
var inst_34057 = cljs.core.vec.call(null,inst_34041);
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34081__$1,(11),out,inst_34057);
} else {
if((state_val_34082 === (5))){
var inst_34042 = (state_34081[(7)]);
var inst_34045 = (state_34081[(9)]);
var inst_34049 = (state_34081[(10)]);
var inst_34049__$1 = f.call(null,inst_34045);
var inst_34050 = cljs.core._EQ_.call(null,inst_34049__$1,inst_34042);
var inst_34051 = cljs.core.keyword_identical_QMARK_.call(null,inst_34042,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34052 = (inst_34050) || (inst_34051);
var state_34081__$1 = (function (){var statearr_34095 = state_34081;
(statearr_34095[(10)] = inst_34049__$1);

return statearr_34095;
})();
if(cljs.core.truth_(inst_34052)){
var statearr_34096_34119 = state_34081__$1;
(statearr_34096_34119[(1)] = (8));

} else {
var statearr_34097_34120 = state_34081__$1;
(statearr_34097_34120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (14))){
var inst_34074 = (state_34081[(2)]);
var inst_34075 = cljs.core.async.close_BANG_.call(null,out);
var state_34081__$1 = (function (){var statearr_34099 = state_34081;
(statearr_34099[(13)] = inst_34074);

return statearr_34099;
})();
var statearr_34100_34121 = state_34081__$1;
(statearr_34100_34121[(2)] = inst_34075);

(statearr_34100_34121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (10))){
var inst_34064 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
var statearr_34101_34122 = state_34081__$1;
(statearr_34101_34122[(2)] = inst_34064);

(statearr_34101_34122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (8))){
var inst_34045 = (state_34081[(9)]);
var inst_34049 = (state_34081[(10)]);
var inst_34041 = (state_34081[(8)]);
var inst_34054 = inst_34041.push(inst_34045);
var tmp34098 = inst_34041;
var inst_34041__$1 = tmp34098;
var inst_34042 = inst_34049;
var state_34081__$1 = (function (){var statearr_34102 = state_34081;
(statearr_34102[(14)] = inst_34054);

(statearr_34102[(7)] = inst_34042);

(statearr_34102[(8)] = inst_34041__$1);

return statearr_34102;
})();
var statearr_34103_34123 = state_34081__$1;
(statearr_34103_34123[(2)] = null);

(statearr_34103_34123[(1)] = (2));


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
});})(c__32219__auto___34109,out))
;
return ((function (switch__32131__auto__,c__32219__auto___34109,out){
return (function() {
var cljs$core$async$state_machine__32132__auto__ = null;
var cljs$core$async$state_machine__32132__auto____0 = (function (){
var statearr_34104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34104[(0)] = cljs$core$async$state_machine__32132__auto__);

(statearr_34104[(1)] = (1));

return statearr_34104;
});
var cljs$core$async$state_machine__32132__auto____1 = (function (state_34081){
while(true){
var ret_value__32133__auto__ = (function (){try{while(true){
var result__32134__auto__ = switch__32131__auto__.call(null,state_34081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32134__auto__;
}
break;
}
}catch (e34105){if((e34105 instanceof Object)){
var ex__32135__auto__ = e34105;
var statearr_34106_34124 = state_34081;
(statearr_34106_34124[(5)] = ex__32135__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34125 = state_34081;
state_34081 = G__34125;
continue;
} else {
return ret_value__32133__auto__;
}
break;
}
});
cljs$core$async$state_machine__32132__auto__ = function(state_34081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32132__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32132__auto____1.call(this,state_34081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32132__auto____0;
cljs$core$async$state_machine__32132__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32132__auto____1;
return cljs$core$async$state_machine__32132__auto__;
})()
;})(switch__32131__auto__,c__32219__auto___34109,out))
})();
var state__32221__auto__ = (function (){var statearr_34107 = f__32220__auto__.call(null);
(statearr_34107[(6)] = c__32219__auto___34109);

return statearr_34107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32221__auto__);
});})(c__32219__auto___34109,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1511221096546
