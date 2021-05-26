// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e29339){if((e29339 instanceof Error)){
var e = e29339;
return "Error: Unable to stringify";
} else {
throw e29339;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29342 = arguments.length;
switch (G__29342) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29340_SHARP_){
if(typeof p1__29340_SHARP_ === 'string'){
return p1__29340_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29340_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29345 = arguments.length;
var i__4731__auto___29346 = (0);
while(true){
if((i__4731__auto___29346 < len__4730__auto___29345)){
args__4736__auto__.push((arguments[i__4731__auto___29346]));

var G__29347 = (i__4731__auto___29346 + (1));
i__4731__auto___29346 = G__29347;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29344){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29344));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29349 = arguments.length;
var i__4731__auto___29350 = (0);
while(true){
if((i__4731__auto___29350 < len__4730__auto___29349)){
args__4736__auto__.push((arguments[i__4731__auto___29350]));

var G__29351 = (i__4731__auto___29350 + (1));
i__4731__auto___29350 = G__29351;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29348){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29348));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29352){
var map__29353 = p__29352;
var map__29353__$1 = (((((!((map__29353 == null))))?(((((map__29353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29353):map__29353);
var message = cljs.core.get.call(null,map__29353__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29353__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23687__auto___29432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___29432,ch){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___29432,ch){
return (function (state_29404){
var state_val_29405 = (state_29404[(1)]);
if((state_val_29405 === (7))){
var inst_29400 = (state_29404[(2)]);
var state_29404__$1 = state_29404;
var statearr_29406_29433 = state_29404__$1;
(statearr_29406_29433[(2)] = inst_29400);

(statearr_29406_29433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (1))){
var state_29404__$1 = state_29404;
var statearr_29407_29434 = state_29404__$1;
(statearr_29407_29434[(2)] = null);

(statearr_29407_29434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (4))){
var inst_29357 = (state_29404[(7)]);
var inst_29357__$1 = (state_29404[(2)]);
var state_29404__$1 = (function (){var statearr_29408 = state_29404;
(statearr_29408[(7)] = inst_29357__$1);

return statearr_29408;
})();
if(cljs.core.truth_(inst_29357__$1)){
var statearr_29409_29435 = state_29404__$1;
(statearr_29409_29435[(1)] = (5));

} else {
var statearr_29410_29436 = state_29404__$1;
(statearr_29410_29436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (15))){
var inst_29364 = (state_29404[(8)]);
var inst_29379 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29364);
var inst_29380 = cljs.core.first.call(null,inst_29379);
var inst_29381 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29380);
var inst_29382 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29381)].join('');
var inst_29383 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29382);
var state_29404__$1 = state_29404;
var statearr_29411_29437 = state_29404__$1;
(statearr_29411_29437[(2)] = inst_29383);

(statearr_29411_29437[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (13))){
var inst_29388 = (state_29404[(2)]);
var state_29404__$1 = state_29404;
var statearr_29412_29438 = state_29404__$1;
(statearr_29412_29438[(2)] = inst_29388);

(statearr_29412_29438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (6))){
var state_29404__$1 = state_29404;
var statearr_29413_29439 = state_29404__$1;
(statearr_29413_29439[(2)] = null);

(statearr_29413_29439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (17))){
var inst_29386 = (state_29404[(2)]);
var state_29404__$1 = state_29404;
var statearr_29414_29440 = state_29404__$1;
(statearr_29414_29440[(2)] = inst_29386);

(statearr_29414_29440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (3))){
var inst_29402 = (state_29404[(2)]);
var state_29404__$1 = state_29404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29404__$1,inst_29402);
} else {
if((state_val_29405 === (12))){
var inst_29363 = (state_29404[(9)]);
var inst_29377 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29363,opts);
var state_29404__$1 = state_29404;
if(inst_29377){
var statearr_29415_29441 = state_29404__$1;
(statearr_29415_29441[(1)] = (15));

} else {
var statearr_29416_29442 = state_29404__$1;
(statearr_29416_29442[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (2))){
var state_29404__$1 = state_29404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29404__$1,(4),ch);
} else {
if((state_val_29405 === (11))){
var inst_29364 = (state_29404[(8)]);
var inst_29369 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29370 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29364);
var inst_29371 = cljs.core.async.timeout.call(null,(1000));
var inst_29372 = [inst_29370,inst_29371];
var inst_29373 = (new cljs.core.PersistentVector(null,2,(5),inst_29369,inst_29372,null));
var state_29404__$1 = state_29404;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29404__$1,(14),inst_29373);
} else {
if((state_val_29405 === (9))){
var inst_29364 = (state_29404[(8)]);
var inst_29390 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29391 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29364);
var inst_29392 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29391);
var inst_29393 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29392)].join('');
var inst_29394 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29393);
var state_29404__$1 = (function (){var statearr_29417 = state_29404;
(statearr_29417[(10)] = inst_29390);

return statearr_29417;
})();
var statearr_29418_29443 = state_29404__$1;
(statearr_29418_29443[(2)] = inst_29394);

(statearr_29418_29443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (5))){
var inst_29357 = (state_29404[(7)]);
var inst_29359 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29360 = (new cljs.core.PersistentArrayMap(null,2,inst_29359,null));
var inst_29361 = (new cljs.core.PersistentHashSet(null,inst_29360,null));
var inst_29362 = figwheel.client.focus_msgs.call(null,inst_29361,inst_29357);
var inst_29363 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29362);
var inst_29364 = cljs.core.first.call(null,inst_29362);
var inst_29365 = figwheel.client.autoload_QMARK_.call(null);
var state_29404__$1 = (function (){var statearr_29419 = state_29404;
(statearr_29419[(8)] = inst_29364);

(statearr_29419[(9)] = inst_29363);

return statearr_29419;
})();
if(cljs.core.truth_(inst_29365)){
var statearr_29420_29444 = state_29404__$1;
(statearr_29420_29444[(1)] = (8));

} else {
var statearr_29421_29445 = state_29404__$1;
(statearr_29421_29445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (14))){
var inst_29375 = (state_29404[(2)]);
var state_29404__$1 = state_29404;
var statearr_29422_29446 = state_29404__$1;
(statearr_29422_29446[(2)] = inst_29375);

(statearr_29422_29446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (16))){
var state_29404__$1 = state_29404;
var statearr_29423_29447 = state_29404__$1;
(statearr_29423_29447[(2)] = null);

(statearr_29423_29447[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (10))){
var inst_29396 = (state_29404[(2)]);
var state_29404__$1 = (function (){var statearr_29424 = state_29404;
(statearr_29424[(11)] = inst_29396);

return statearr_29424;
})();
var statearr_29425_29448 = state_29404__$1;
(statearr_29425_29448[(2)] = null);

(statearr_29425_29448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (8))){
var inst_29363 = (state_29404[(9)]);
var inst_29367 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29363,opts);
var state_29404__$1 = state_29404;
if(cljs.core.truth_(inst_29367)){
var statearr_29426_29449 = state_29404__$1;
(statearr_29426_29449[(1)] = (11));

} else {
var statearr_29427_29450 = state_29404__$1;
(statearr_29427_29450[(1)] = (12));

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
});})(c__23687__auto___29432,ch))
;
return ((function (switch__23592__auto__,c__23687__auto___29432,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23593__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23593__auto____0 = (function (){
var statearr_29428 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29428[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23593__auto__);

(statearr_29428[(1)] = (1));

return statearr_29428;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23593__auto____1 = (function (state_29404){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_29404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e29429){if((e29429 instanceof Object)){
var ex__23596__auto__ = e29429;
var statearr_29430_29451 = state_29404;
(statearr_29430_29451[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29452 = state_29404;
state_29404 = G__29452;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23593__auto__ = function(state_29404){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23593__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23593__auto____1.call(this,state_29404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23593__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23593__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___29432,ch))
})();
var state__23689__auto__ = (function (){var statearr_29431 = f__23688__auto__.call(null);
(statearr_29431[(6)] = c__23687__auto___29432);

return statearr_29431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___29432,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29453_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29453_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29459 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29459){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29455 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29456 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29457 = true;
var _STAR_print_fn_STAR__temp_val__29458 = ((function (_STAR_print_newline_STAR__orig_val__29455,_STAR_print_fn_STAR__orig_val__29456,_STAR_print_newline_STAR__temp_val__29457,sb,base_path_29459){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29455,_STAR_print_fn_STAR__orig_val__29456,_STAR_print_newline_STAR__temp_val__29457,sb,base_path_29459))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29457;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29458;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29456;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29455;
}}catch (e29454){if((e29454 instanceof Error)){
var e = e29454;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29459], null));
} else {
var e = e29454;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29459))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29460){
var map__29461 = p__29460;
var map__29461__$1 = (((((!((map__29461 == null))))?(((((map__29461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29461):map__29461);
var opts = map__29461__$1;
var build_id = cljs.core.get.call(null,map__29461__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29461,map__29461__$1,opts,build_id){
return (function (p__29463){
var vec__29464 = p__29463;
var seq__29465 = cljs.core.seq.call(null,vec__29464);
var first__29466 = cljs.core.first.call(null,seq__29465);
var seq__29465__$1 = cljs.core.next.call(null,seq__29465);
var map__29467 = first__29466;
var map__29467__$1 = (((((!((map__29467 == null))))?(((((map__29467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29467):map__29467);
var msg = map__29467__$1;
var msg_name = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29465__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29464,seq__29465,first__29466,seq__29465__$1,map__29467,map__29467__$1,msg,msg_name,_,map__29461,map__29461__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29464,seq__29465,first__29466,seq__29465__$1,map__29467,map__29467__$1,msg,msg_name,_,map__29461,map__29461__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29461,map__29461__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29469){
var vec__29470 = p__29469;
var seq__29471 = cljs.core.seq.call(null,vec__29470);
var first__29472 = cljs.core.first.call(null,seq__29471);
var seq__29471__$1 = cljs.core.next.call(null,seq__29471);
var map__29473 = first__29472;
var map__29473__$1 = (((((!((map__29473 == null))))?(((((map__29473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29473):map__29473);
var msg = map__29473__$1;
var msg_name = cljs.core.get.call(null,map__29473__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29471__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29475){
var map__29476 = p__29475;
var map__29476__$1 = (((((!((map__29476 == null))))?(((((map__29476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29476):map__29476);
var on_compile_warning = cljs.core.get.call(null,map__29476__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29476__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29476,map__29476__$1,on_compile_warning,on_compile_fail){
return (function (p__29478){
var vec__29479 = p__29478;
var seq__29480 = cljs.core.seq.call(null,vec__29479);
var first__29481 = cljs.core.first.call(null,seq__29480);
var seq__29480__$1 = cljs.core.next.call(null,seq__29480);
var map__29482 = first__29481;
var map__29482__$1 = (((((!((map__29482 == null))))?(((((map__29482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29482):map__29482);
var msg = map__29482__$1;
var msg_name = cljs.core.get.call(null,map__29482__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29480__$1;
var pred__29484 = cljs.core._EQ_;
var expr__29485 = msg_name;
if(cljs.core.truth_(pred__29484.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29485))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29484.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29485))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29476,map__29476__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23687__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto__,msg_hist,msg_names,msg){
return (function (state_29574){
var state_val_29575 = (state_29574[(1)]);
if((state_val_29575 === (7))){
var inst_29494 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
if(cljs.core.truth_(inst_29494)){
var statearr_29576_29623 = state_29574__$1;
(statearr_29576_29623[(1)] = (8));

} else {
var statearr_29577_29624 = state_29574__$1;
(statearr_29577_29624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (20))){
var inst_29568 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29578_29625 = state_29574__$1;
(statearr_29578_29625[(2)] = inst_29568);

(statearr_29578_29625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (27))){
var inst_29564 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29579_29626 = state_29574__$1;
(statearr_29579_29626[(2)] = inst_29564);

(statearr_29579_29626[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (1))){
var inst_29487 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29574__$1 = state_29574;
if(cljs.core.truth_(inst_29487)){
var statearr_29580_29627 = state_29574__$1;
(statearr_29580_29627[(1)] = (2));

} else {
var statearr_29581_29628 = state_29574__$1;
(statearr_29581_29628[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (24))){
var inst_29566 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29582_29629 = state_29574__$1;
(statearr_29582_29629[(2)] = inst_29566);

(statearr_29582_29629[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (4))){
var inst_29572 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29574__$1,inst_29572);
} else {
if((state_val_29575 === (15))){
var inst_29570 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29583_29630 = state_29574__$1;
(statearr_29583_29630[(2)] = inst_29570);

(statearr_29583_29630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (21))){
var inst_29523 = (state_29574[(2)]);
var inst_29524 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29525 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29524);
var state_29574__$1 = (function (){var statearr_29584 = state_29574;
(statearr_29584[(7)] = inst_29523);

return statearr_29584;
})();
var statearr_29585_29631 = state_29574__$1;
(statearr_29585_29631[(2)] = inst_29525);

(statearr_29585_29631[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (31))){
var inst_29553 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29574__$1 = state_29574;
if(inst_29553){
var statearr_29586_29632 = state_29574__$1;
(statearr_29586_29632[(1)] = (34));

} else {
var statearr_29587_29633 = state_29574__$1;
(statearr_29587_29633[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (32))){
var inst_29562 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29588_29634 = state_29574__$1;
(statearr_29588_29634[(2)] = inst_29562);

(statearr_29588_29634[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (33))){
var inst_29549 = (state_29574[(2)]);
var inst_29550 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29551 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29550);
var state_29574__$1 = (function (){var statearr_29589 = state_29574;
(statearr_29589[(8)] = inst_29549);

return statearr_29589;
})();
var statearr_29590_29635 = state_29574__$1;
(statearr_29590_29635[(2)] = inst_29551);

(statearr_29590_29635[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (13))){
var inst_29508 = figwheel.client.heads_up.clear.call(null);
var state_29574__$1 = state_29574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29574__$1,(16),inst_29508);
} else {
if((state_val_29575 === (22))){
var inst_29529 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29530 = figwheel.client.heads_up.append_warning_message.call(null,inst_29529);
var state_29574__$1 = state_29574;
var statearr_29591_29636 = state_29574__$1;
(statearr_29591_29636[(2)] = inst_29530);

(statearr_29591_29636[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (36))){
var inst_29560 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29592_29637 = state_29574__$1;
(statearr_29592_29637[(2)] = inst_29560);

(statearr_29592_29637[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (29))){
var inst_29540 = (state_29574[(2)]);
var inst_29541 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29542 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29541);
var state_29574__$1 = (function (){var statearr_29593 = state_29574;
(statearr_29593[(9)] = inst_29540);

return statearr_29593;
})();
var statearr_29594_29638 = state_29574__$1;
(statearr_29594_29638[(2)] = inst_29542);

(statearr_29594_29638[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (6))){
var inst_29489 = (state_29574[(10)]);
var state_29574__$1 = state_29574;
var statearr_29595_29639 = state_29574__$1;
(statearr_29595_29639[(2)] = inst_29489);

(statearr_29595_29639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (28))){
var inst_29536 = (state_29574[(2)]);
var inst_29537 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29538 = figwheel.client.heads_up.display_warning.call(null,inst_29537);
var state_29574__$1 = (function (){var statearr_29596 = state_29574;
(statearr_29596[(11)] = inst_29536);

return statearr_29596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29574__$1,(29),inst_29538);
} else {
if((state_val_29575 === (25))){
var inst_29534 = figwheel.client.heads_up.clear.call(null);
var state_29574__$1 = state_29574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29574__$1,(28),inst_29534);
} else {
if((state_val_29575 === (34))){
var inst_29555 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29574__$1 = state_29574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29574__$1,(37),inst_29555);
} else {
if((state_val_29575 === (17))){
var inst_29514 = (state_29574[(2)]);
var inst_29515 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29516 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29515);
var state_29574__$1 = (function (){var statearr_29597 = state_29574;
(statearr_29597[(12)] = inst_29514);

return statearr_29597;
})();
var statearr_29598_29640 = state_29574__$1;
(statearr_29598_29640[(2)] = inst_29516);

(statearr_29598_29640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (3))){
var inst_29506 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29574__$1 = state_29574;
if(inst_29506){
var statearr_29599_29641 = state_29574__$1;
(statearr_29599_29641[(1)] = (13));

} else {
var statearr_29600_29642 = state_29574__$1;
(statearr_29600_29642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (12))){
var inst_29502 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29601_29643 = state_29574__$1;
(statearr_29601_29643[(2)] = inst_29502);

(statearr_29601_29643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (2))){
var inst_29489 = (state_29574[(10)]);
var inst_29489__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29574__$1 = (function (){var statearr_29602 = state_29574;
(statearr_29602[(10)] = inst_29489__$1);

return statearr_29602;
})();
if(cljs.core.truth_(inst_29489__$1)){
var statearr_29603_29644 = state_29574__$1;
(statearr_29603_29644[(1)] = (5));

} else {
var statearr_29604_29645 = state_29574__$1;
(statearr_29604_29645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (23))){
var inst_29532 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29574__$1 = state_29574;
if(inst_29532){
var statearr_29605_29646 = state_29574__$1;
(statearr_29605_29646[(1)] = (25));

} else {
var statearr_29606_29647 = state_29574__$1;
(statearr_29606_29647[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (35))){
var state_29574__$1 = state_29574;
var statearr_29607_29648 = state_29574__$1;
(statearr_29607_29648[(2)] = null);

(statearr_29607_29648[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (19))){
var inst_29527 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29574__$1 = state_29574;
if(inst_29527){
var statearr_29608_29649 = state_29574__$1;
(statearr_29608_29649[(1)] = (22));

} else {
var statearr_29609_29650 = state_29574__$1;
(statearr_29609_29650[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (11))){
var inst_29498 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29610_29651 = state_29574__$1;
(statearr_29610_29651[(2)] = inst_29498);

(statearr_29610_29651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (9))){
var inst_29500 = figwheel.client.heads_up.clear.call(null);
var state_29574__$1 = state_29574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29574__$1,(12),inst_29500);
} else {
if((state_val_29575 === (5))){
var inst_29491 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29574__$1 = state_29574;
var statearr_29611_29652 = state_29574__$1;
(statearr_29611_29652[(2)] = inst_29491);

(statearr_29611_29652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (14))){
var inst_29518 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29574__$1 = state_29574;
if(inst_29518){
var statearr_29612_29653 = state_29574__$1;
(statearr_29612_29653[(1)] = (18));

} else {
var statearr_29613_29654 = state_29574__$1;
(statearr_29613_29654[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (26))){
var inst_29544 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29574__$1 = state_29574;
if(inst_29544){
var statearr_29614_29655 = state_29574__$1;
(statearr_29614_29655[(1)] = (30));

} else {
var statearr_29615_29656 = state_29574__$1;
(statearr_29615_29656[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (16))){
var inst_29510 = (state_29574[(2)]);
var inst_29511 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29512 = figwheel.client.heads_up.display_exception.call(null,inst_29511);
var state_29574__$1 = (function (){var statearr_29616 = state_29574;
(statearr_29616[(13)] = inst_29510);

return statearr_29616;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29574__$1,(17),inst_29512);
} else {
if((state_val_29575 === (30))){
var inst_29546 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29547 = figwheel.client.heads_up.display_warning.call(null,inst_29546);
var state_29574__$1 = state_29574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29574__$1,(33),inst_29547);
} else {
if((state_val_29575 === (10))){
var inst_29504 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29617_29657 = state_29574__$1;
(statearr_29617_29657[(2)] = inst_29504);

(statearr_29617_29657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (18))){
var inst_29520 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29521 = figwheel.client.heads_up.display_exception.call(null,inst_29520);
var state_29574__$1 = state_29574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29574__$1,(21),inst_29521);
} else {
if((state_val_29575 === (37))){
var inst_29557 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29618_29658 = state_29574__$1;
(statearr_29618_29658[(2)] = inst_29557);

(statearr_29618_29658[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (8))){
var inst_29496 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29574__$1 = state_29574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29574__$1,(11),inst_29496);
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
});})(c__23687__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23592__auto__,c__23687__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23593__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23593__auto____0 = (function (){
var statearr_29619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29619[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23593__auto__);

(statearr_29619[(1)] = (1));

return statearr_29619;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23593__auto____1 = (function (state_29574){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_29574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e29620){if((e29620 instanceof Object)){
var ex__23596__auto__ = e29620;
var statearr_29621_29659 = state_29574;
(statearr_29621_29659[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29660 = state_29574;
state_29574 = G__29660;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23593__auto__ = function(state_29574){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23593__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23593__auto____1.call(this,state_29574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23593__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23593__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto__,msg_hist,msg_names,msg))
})();
var state__23689__auto__ = (function (){var statearr_29622 = f__23688__auto__.call(null);
(statearr_29622[(6)] = c__23687__auto__);

return statearr_29622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto__,msg_hist,msg_names,msg))
);

return c__23687__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23687__auto___29689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto___29689,ch){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto___29689,ch){
return (function (state_29675){
var state_val_29676 = (state_29675[(1)]);
if((state_val_29676 === (1))){
var state_29675__$1 = state_29675;
var statearr_29677_29690 = state_29675__$1;
(statearr_29677_29690[(2)] = null);

(statearr_29677_29690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (2))){
var state_29675__$1 = state_29675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29675__$1,(4),ch);
} else {
if((state_val_29676 === (3))){
var inst_29673 = (state_29675[(2)]);
var state_29675__$1 = state_29675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29675__$1,inst_29673);
} else {
if((state_val_29676 === (4))){
var inst_29663 = (state_29675[(7)]);
var inst_29663__$1 = (state_29675[(2)]);
var state_29675__$1 = (function (){var statearr_29678 = state_29675;
(statearr_29678[(7)] = inst_29663__$1);

return statearr_29678;
})();
if(cljs.core.truth_(inst_29663__$1)){
var statearr_29679_29691 = state_29675__$1;
(statearr_29679_29691[(1)] = (5));

} else {
var statearr_29680_29692 = state_29675__$1;
(statearr_29680_29692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (5))){
var inst_29663 = (state_29675[(7)]);
var inst_29665 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29663);
var state_29675__$1 = state_29675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29675__$1,(8),inst_29665);
} else {
if((state_val_29676 === (6))){
var state_29675__$1 = state_29675;
var statearr_29681_29693 = state_29675__$1;
(statearr_29681_29693[(2)] = null);

(statearr_29681_29693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (7))){
var inst_29671 = (state_29675[(2)]);
var state_29675__$1 = state_29675;
var statearr_29682_29694 = state_29675__$1;
(statearr_29682_29694[(2)] = inst_29671);

(statearr_29682_29694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (8))){
var inst_29667 = (state_29675[(2)]);
var state_29675__$1 = (function (){var statearr_29683 = state_29675;
(statearr_29683[(8)] = inst_29667);

return statearr_29683;
})();
var statearr_29684_29695 = state_29675__$1;
(statearr_29684_29695[(2)] = null);

(statearr_29684_29695[(1)] = (2));


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
});})(c__23687__auto___29689,ch))
;
return ((function (switch__23592__auto__,c__23687__auto___29689,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23593__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23593__auto____0 = (function (){
var statearr_29685 = [null,null,null,null,null,null,null,null,null];
(statearr_29685[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23593__auto__);

(statearr_29685[(1)] = (1));

return statearr_29685;
});
var figwheel$client$heads_up_plugin_$_state_machine__23593__auto____1 = (function (state_29675){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_29675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e29686){if((e29686 instanceof Object)){
var ex__23596__auto__ = e29686;
var statearr_29687_29696 = state_29675;
(statearr_29687_29696[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29697 = state_29675;
state_29675 = G__29697;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23593__auto__ = function(state_29675){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23593__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23593__auto____1.call(this,state_29675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23593__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23593__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto___29689,ch))
})();
var state__23689__auto__ = (function (){var statearr_29688 = f__23688__auto__.call(null);
(statearr_29688[(6)] = c__23687__auto___29689);

return statearr_29688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto___29689,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23687__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto__){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto__){
return (function (state_29703){
var state_val_29704 = (state_29703[(1)]);
if((state_val_29704 === (1))){
var inst_29698 = cljs.core.async.timeout.call(null,(3000));
var state_29703__$1 = state_29703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29703__$1,(2),inst_29698);
} else {
if((state_val_29704 === (2))){
var inst_29700 = (state_29703[(2)]);
var inst_29701 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29703__$1 = (function (){var statearr_29705 = state_29703;
(statearr_29705[(7)] = inst_29700);

return statearr_29705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29703__$1,inst_29701);
} else {
return null;
}
}
});})(c__23687__auto__))
;
return ((function (switch__23592__auto__,c__23687__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23593__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23593__auto____0 = (function (){
var statearr_29706 = [null,null,null,null,null,null,null,null];
(statearr_29706[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23593__auto__);

(statearr_29706[(1)] = (1));

return statearr_29706;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23593__auto____1 = (function (state_29703){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_29703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e29707){if((e29707 instanceof Object)){
var ex__23596__auto__ = e29707;
var statearr_29708_29710 = state_29703;
(statearr_29708_29710[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29711 = state_29703;
state_29703 = G__29711;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23593__auto__ = function(state_29703){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23593__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23593__auto____1.call(this,state_29703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23593__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23593__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto__))
})();
var state__23689__auto__ = (function (){var statearr_29709 = f__23688__auto__.call(null);
(statearr_29709[(6)] = c__23687__auto__);

return statearr_29709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto__))
);

return c__23687__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23687__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23687__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__23688__auto__ = (function (){var switch__23592__auto__ = ((function (c__23687__auto__,figwheel_version,temp__5735__auto__){
return (function (state_29718){
var state_val_29719 = (state_29718[(1)]);
if((state_val_29719 === (1))){
var inst_29712 = cljs.core.async.timeout.call(null,(2000));
var state_29718__$1 = state_29718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29718__$1,(2),inst_29712);
} else {
if((state_val_29719 === (2))){
var inst_29714 = (state_29718[(2)]);
var inst_29715 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29716 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29715);
var state_29718__$1 = (function (){var statearr_29720 = state_29718;
(statearr_29720[(7)] = inst_29714);

return statearr_29720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29718__$1,inst_29716);
} else {
return null;
}
}
});})(c__23687__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__23592__auto__,c__23687__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23593__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23593__auto____0 = (function (){
var statearr_29721 = [null,null,null,null,null,null,null,null];
(statearr_29721[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23593__auto__);

(statearr_29721[(1)] = (1));

return statearr_29721;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23593__auto____1 = (function (state_29718){
while(true){
var ret_value__23594__auto__ = (function (){try{while(true){
var result__23595__auto__ = switch__23592__auto__.call(null,state_29718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23595__auto__;
}
break;
}
}catch (e29722){if((e29722 instanceof Object)){
var ex__23596__auto__ = e29722;
var statearr_29723_29725 = state_29718;
(statearr_29723_29725[(5)] = ex__23596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29726 = state_29718;
state_29718 = G__29726;
continue;
} else {
return ret_value__23594__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23593__auto__ = function(state_29718){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23593__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23593__auto____1.call(this,state_29718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23593__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23593__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23593__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23593__auto__;
})()
;})(switch__23592__auto__,c__23687__auto__,figwheel_version,temp__5735__auto__))
})();
var state__23689__auto__ = (function (){var statearr_29724 = f__23688__auto__.call(null);
(statearr_29724[(6)] = c__23687__auto__);

return statearr_29724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23689__auto__);
});})(c__23687__auto__,figwheel_version,temp__5735__auto__))
);

return c__23687__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29727){
var map__29728 = p__29727;
var map__29728__$1 = (((((!((map__29728 == null))))?(((((map__29728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29728):map__29728);
var file = cljs.core.get.call(null,map__29728__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29728__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29728__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29730 = "";
var G__29730__$1 = (cljs.core.truth_(file)?[G__29730,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29730);
var G__29730__$2 = (cljs.core.truth_(line)?[G__29730__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29730__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__29730__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29730__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29731){
var map__29732 = p__29731;
var map__29732__$1 = (((((!((map__29732 == null))))?(((((map__29732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29732):map__29732);
var ed = map__29732__$1;
var exception_data = cljs.core.get.call(null,map__29732__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29732__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29735 = (function (){var G__29734 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29734)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29734;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29735);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29736){
var map__29737 = p__29736;
var map__29737__$1 = (((((!((map__29737 == null))))?(((((map__29737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29737):map__29737);
var w = map__29737__$1;
var message = cljs.core.get.call(null,map__29737__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29739 = cljs.core.seq.call(null,plugins);
var chunk__29740 = null;
var count__29741 = (0);
var i__29742 = (0);
while(true){
if((i__29742 < count__29741)){
var vec__29749 = cljs.core._nth.call(null,chunk__29740,i__29742);
var k = cljs.core.nth.call(null,vec__29749,(0),null);
var plugin = cljs.core.nth.call(null,vec__29749,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29755 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29739,chunk__29740,count__29741,i__29742,pl_29755,vec__29749,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29755.call(null,msg_hist);
});})(seq__29739,chunk__29740,count__29741,i__29742,pl_29755,vec__29749,k,plugin))
);
} else {
}


var G__29756 = seq__29739;
var G__29757 = chunk__29740;
var G__29758 = count__29741;
var G__29759 = (i__29742 + (1));
seq__29739 = G__29756;
chunk__29740 = G__29757;
count__29741 = G__29758;
i__29742 = G__29759;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29739);
if(temp__5735__auto__){
var seq__29739__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29739__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29739__$1);
var G__29760 = cljs.core.chunk_rest.call(null,seq__29739__$1);
var G__29761 = c__4550__auto__;
var G__29762 = cljs.core.count.call(null,c__4550__auto__);
var G__29763 = (0);
seq__29739 = G__29760;
chunk__29740 = G__29761;
count__29741 = G__29762;
i__29742 = G__29763;
continue;
} else {
var vec__29752 = cljs.core.first.call(null,seq__29739__$1);
var k = cljs.core.nth.call(null,vec__29752,(0),null);
var plugin = cljs.core.nth.call(null,vec__29752,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29764 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29739,chunk__29740,count__29741,i__29742,pl_29764,vec__29752,k,plugin,seq__29739__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29764.call(null,msg_hist);
});})(seq__29739,chunk__29740,count__29741,i__29742,pl_29764,vec__29752,k,plugin,seq__29739__$1,temp__5735__auto__))
);
} else {
}


var G__29765 = cljs.core.next.call(null,seq__29739__$1);
var G__29766 = null;
var G__29767 = (0);
var G__29768 = (0);
seq__29739 = G__29765;
chunk__29740 = G__29766;
count__29741 = G__29767;
i__29742 = G__29768;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29770 = arguments.length;
switch (G__29770) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29771_29776 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29772_29777 = null;
var count__29773_29778 = (0);
var i__29774_29779 = (0);
while(true){
if((i__29774_29779 < count__29773_29778)){
var msg_29780 = cljs.core._nth.call(null,chunk__29772_29777,i__29774_29779);
figwheel.client.socket.handle_incoming_message.call(null,msg_29780);


var G__29781 = seq__29771_29776;
var G__29782 = chunk__29772_29777;
var G__29783 = count__29773_29778;
var G__29784 = (i__29774_29779 + (1));
seq__29771_29776 = G__29781;
chunk__29772_29777 = G__29782;
count__29773_29778 = G__29783;
i__29774_29779 = G__29784;
continue;
} else {
var temp__5735__auto___29785 = cljs.core.seq.call(null,seq__29771_29776);
if(temp__5735__auto___29785){
var seq__29771_29786__$1 = temp__5735__auto___29785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29771_29786__$1)){
var c__4550__auto___29787 = cljs.core.chunk_first.call(null,seq__29771_29786__$1);
var G__29788 = cljs.core.chunk_rest.call(null,seq__29771_29786__$1);
var G__29789 = c__4550__auto___29787;
var G__29790 = cljs.core.count.call(null,c__4550__auto___29787);
var G__29791 = (0);
seq__29771_29776 = G__29788;
chunk__29772_29777 = G__29789;
count__29773_29778 = G__29790;
i__29774_29779 = G__29791;
continue;
} else {
var msg_29792 = cljs.core.first.call(null,seq__29771_29786__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29792);


var G__29793 = cljs.core.next.call(null,seq__29771_29786__$1);
var G__29794 = null;
var G__29795 = (0);
var G__29796 = (0);
seq__29771_29776 = G__29793;
chunk__29772_29777 = G__29794;
count__29773_29778 = G__29795;
i__29774_29779 = G__29796;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29801 = arguments.length;
var i__4731__auto___29802 = (0);
while(true){
if((i__4731__auto___29802 < len__4730__auto___29801)){
args__4736__auto__.push((arguments[i__4731__auto___29802]));

var G__29803 = (i__4731__auto___29802 + (1));
i__4731__auto___29802 = G__29803;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29798){
var map__29799 = p__29798;
var map__29799__$1 = (((((!((map__29799 == null))))?(((((map__29799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29799):map__29799);
var opts = map__29799__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29797){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29797));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29804){if((e29804 instanceof Error)){
var e = e29804;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29804;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29805){
var map__29806 = p__29805;
var map__29806__$1 = (((((!((map__29806 == null))))?(((((map__29806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29806):map__29806);
var msg_name = cljs.core.get.call(null,map__29806__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1612339732418
