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
}catch (e35550){if((e35550 instanceof Error)){
var e = e35550;
return "Error: Unable to stringify";
} else {
throw e35550;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35553 = arguments.length;
switch (G__35553) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__35551_SHARP_){
if(typeof p1__35551_SHARP_ === 'string'){
return p1__35551_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__35551_SHARP_);
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
var len__4730__auto___35556 = arguments.length;
var i__4731__auto___35557 = (0);
while(true){
if((i__4731__auto___35557 < len__4730__auto___35556)){
args__4736__auto__.push((arguments[i__4731__auto___35557]));

var G__35558 = (i__4731__auto___35557 + (1));
i__4731__auto___35557 = G__35558;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35555){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35555));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35560 = arguments.length;
var i__4731__auto___35561 = (0);
while(true){
if((i__4731__auto___35561 < len__4730__auto___35560)){
args__4736__auto__.push((arguments[i__4731__auto___35561]));

var G__35562 = (i__4731__auto___35561 + (1));
i__4731__auto___35561 = G__35562;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35559){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35559));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35563){
var map__35564 = p__35563;
var map__35564__$1 = (((((!((map__35564 == null))))?(((((map__35564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35564):map__35564);
var message = cljs.core.get.call(null,map__35564__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35564__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24321__auto___35643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___35643,ch){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___35643,ch){
return (function (state_35615){
var state_val_35616 = (state_35615[(1)]);
if((state_val_35616 === (7))){
var inst_35611 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35617_35644 = state_35615__$1;
(statearr_35617_35644[(2)] = inst_35611);

(statearr_35617_35644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (1))){
var state_35615__$1 = state_35615;
var statearr_35618_35645 = state_35615__$1;
(statearr_35618_35645[(2)] = null);

(statearr_35618_35645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (4))){
var inst_35568 = (state_35615[(7)]);
var inst_35568__$1 = (state_35615[(2)]);
var state_35615__$1 = (function (){var statearr_35619 = state_35615;
(statearr_35619[(7)] = inst_35568__$1);

return statearr_35619;
})();
if(cljs.core.truth_(inst_35568__$1)){
var statearr_35620_35646 = state_35615__$1;
(statearr_35620_35646[(1)] = (5));

} else {
var statearr_35621_35647 = state_35615__$1;
(statearr_35621_35647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (15))){
var inst_35575 = (state_35615[(8)]);
var inst_35590 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35575);
var inst_35591 = cljs.core.first.call(null,inst_35590);
var inst_35592 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35591);
var inst_35593 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35592)].join('');
var inst_35594 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35593);
var state_35615__$1 = state_35615;
var statearr_35622_35648 = state_35615__$1;
(statearr_35622_35648[(2)] = inst_35594);

(statearr_35622_35648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (13))){
var inst_35599 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35623_35649 = state_35615__$1;
(statearr_35623_35649[(2)] = inst_35599);

(statearr_35623_35649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (6))){
var state_35615__$1 = state_35615;
var statearr_35624_35650 = state_35615__$1;
(statearr_35624_35650[(2)] = null);

(statearr_35624_35650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (17))){
var inst_35597 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35625_35651 = state_35615__$1;
(statearr_35625_35651[(2)] = inst_35597);

(statearr_35625_35651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (3))){
var inst_35613 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35615__$1,inst_35613);
} else {
if((state_val_35616 === (12))){
var inst_35574 = (state_35615[(9)]);
var inst_35588 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35574,opts);
var state_35615__$1 = state_35615;
if(inst_35588){
var statearr_35626_35652 = state_35615__$1;
(statearr_35626_35652[(1)] = (15));

} else {
var statearr_35627_35653 = state_35615__$1;
(statearr_35627_35653[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (2))){
var state_35615__$1 = state_35615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35615__$1,(4),ch);
} else {
if((state_val_35616 === (11))){
var inst_35575 = (state_35615[(8)]);
var inst_35580 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35581 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35575);
var inst_35582 = cljs.core.async.timeout.call(null,(1000));
var inst_35583 = [inst_35581,inst_35582];
var inst_35584 = (new cljs.core.PersistentVector(null,2,(5),inst_35580,inst_35583,null));
var state_35615__$1 = state_35615;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35615__$1,(14),inst_35584);
} else {
if((state_val_35616 === (9))){
var inst_35575 = (state_35615[(8)]);
var inst_35601 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35602 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35575);
var inst_35603 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35602);
var inst_35604 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35603)].join('');
var inst_35605 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35604);
var state_35615__$1 = (function (){var statearr_35628 = state_35615;
(statearr_35628[(10)] = inst_35601);

return statearr_35628;
})();
var statearr_35629_35654 = state_35615__$1;
(statearr_35629_35654[(2)] = inst_35605);

(statearr_35629_35654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (5))){
var inst_35568 = (state_35615[(7)]);
var inst_35570 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35571 = (new cljs.core.PersistentArrayMap(null,2,inst_35570,null));
var inst_35572 = (new cljs.core.PersistentHashSet(null,inst_35571,null));
var inst_35573 = figwheel.client.focus_msgs.call(null,inst_35572,inst_35568);
var inst_35574 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35573);
var inst_35575 = cljs.core.first.call(null,inst_35573);
var inst_35576 = figwheel.client.autoload_QMARK_.call(null);
var state_35615__$1 = (function (){var statearr_35630 = state_35615;
(statearr_35630[(9)] = inst_35574);

(statearr_35630[(8)] = inst_35575);

return statearr_35630;
})();
if(cljs.core.truth_(inst_35576)){
var statearr_35631_35655 = state_35615__$1;
(statearr_35631_35655[(1)] = (8));

} else {
var statearr_35632_35656 = state_35615__$1;
(statearr_35632_35656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (14))){
var inst_35586 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35633_35657 = state_35615__$1;
(statearr_35633_35657[(2)] = inst_35586);

(statearr_35633_35657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (16))){
var state_35615__$1 = state_35615;
var statearr_35634_35658 = state_35615__$1;
(statearr_35634_35658[(2)] = null);

(statearr_35634_35658[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (10))){
var inst_35607 = (state_35615[(2)]);
var state_35615__$1 = (function (){var statearr_35635 = state_35615;
(statearr_35635[(11)] = inst_35607);

return statearr_35635;
})();
var statearr_35636_35659 = state_35615__$1;
(statearr_35636_35659[(2)] = null);

(statearr_35636_35659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (8))){
var inst_35574 = (state_35615[(9)]);
var inst_35578 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35574,opts);
var state_35615__$1 = state_35615;
if(cljs.core.truth_(inst_35578)){
var statearr_35637_35660 = state_35615__$1;
(statearr_35637_35660[(1)] = (11));

} else {
var statearr_35638_35661 = state_35615__$1;
(statearr_35638_35661[(1)] = (12));

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
});})(c__24321__auto___35643,ch))
;
return ((function (switch__24154__auto__,c__24321__auto___35643,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24155__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24155__auto____0 = (function (){
var statearr_35639 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35639[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24155__auto__);

(statearr_35639[(1)] = (1));

return statearr_35639;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24155__auto____1 = (function (state_35615){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_35615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e35640){if((e35640 instanceof Object)){
var ex__24158__auto__ = e35640;
var statearr_35641_35662 = state_35615;
(statearr_35641_35662[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35663 = state_35615;
state_35615 = G__35663;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24155__auto__ = function(state_35615){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24155__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24155__auto____1.call(this,state_35615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24155__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24155__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___35643,ch))
})();
var state__24323__auto__ = (function (){var statearr_35642 = f__24322__auto__.call(null);
(statearr_35642[(6)] = c__24321__auto___35643);

return statearr_35642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___35643,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35664_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35664_SHARP_));
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
var base_path_35670 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35670){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35666 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35667 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35668 = true;
var _STAR_print_fn_STAR__temp_val__35669 = ((function (_STAR_print_newline_STAR__orig_val__35666,_STAR_print_fn_STAR__orig_val__35667,_STAR_print_newline_STAR__temp_val__35668,sb,base_path_35670){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__35666,_STAR_print_fn_STAR__orig_val__35667,_STAR_print_newline_STAR__temp_val__35668,sb,base_path_35670))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35668;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35669;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35667;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35666;
}}catch (e35665){if((e35665 instanceof Error)){
var e = e35665;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35670], null));
} else {
var e = e35665;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_35670))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35671){
var map__35672 = p__35671;
var map__35672__$1 = (((((!((map__35672 == null))))?(((((map__35672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35672):map__35672);
var opts = map__35672__$1;
var build_id = cljs.core.get.call(null,map__35672__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35672,map__35672__$1,opts,build_id){
return (function (p__35674){
var vec__35675 = p__35674;
var seq__35676 = cljs.core.seq.call(null,vec__35675);
var first__35677 = cljs.core.first.call(null,seq__35676);
var seq__35676__$1 = cljs.core.next.call(null,seq__35676);
var map__35678 = first__35677;
var map__35678__$1 = (((((!((map__35678 == null))))?(((((map__35678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35678):map__35678);
var msg = map__35678__$1;
var msg_name = cljs.core.get.call(null,map__35678__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35676__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35675,seq__35676,first__35677,seq__35676__$1,map__35678,map__35678__$1,msg,msg_name,_,map__35672,map__35672__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35675,seq__35676,first__35677,seq__35676__$1,map__35678,map__35678__$1,msg,msg_name,_,map__35672,map__35672__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35672,map__35672__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35680){
var vec__35681 = p__35680;
var seq__35682 = cljs.core.seq.call(null,vec__35681);
var first__35683 = cljs.core.first.call(null,seq__35682);
var seq__35682__$1 = cljs.core.next.call(null,seq__35682);
var map__35684 = first__35683;
var map__35684__$1 = (((((!((map__35684 == null))))?(((((map__35684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35684):map__35684);
var msg = map__35684__$1;
var msg_name = cljs.core.get.call(null,map__35684__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35682__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35686){
var map__35687 = p__35686;
var map__35687__$1 = (((((!((map__35687 == null))))?(((((map__35687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35687):map__35687);
var on_compile_warning = cljs.core.get.call(null,map__35687__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35687__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35687,map__35687__$1,on_compile_warning,on_compile_fail){
return (function (p__35689){
var vec__35690 = p__35689;
var seq__35691 = cljs.core.seq.call(null,vec__35690);
var first__35692 = cljs.core.first.call(null,seq__35691);
var seq__35691__$1 = cljs.core.next.call(null,seq__35691);
var map__35693 = first__35692;
var map__35693__$1 = (((((!((map__35693 == null))))?(((((map__35693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35693):map__35693);
var msg = map__35693__$1;
var msg_name = cljs.core.get.call(null,map__35693__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35691__$1;
var pred__35695 = cljs.core._EQ_;
var expr__35696 = msg_name;
if(cljs.core.truth_(pred__35695.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35696))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35695.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35696))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35687,map__35687__$1,on_compile_warning,on_compile_fail))
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
var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto__,msg_hist,msg_names,msg){
return (function (state_35785){
var state_val_35786 = (state_35785[(1)]);
if((state_val_35786 === (7))){
var inst_35705 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
if(cljs.core.truth_(inst_35705)){
var statearr_35787_35834 = state_35785__$1;
(statearr_35787_35834[(1)] = (8));

} else {
var statearr_35788_35835 = state_35785__$1;
(statearr_35788_35835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (20))){
var inst_35779 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
var statearr_35789_35836 = state_35785__$1;
(statearr_35789_35836[(2)] = inst_35779);

(statearr_35789_35836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (27))){
var inst_35775 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
var statearr_35790_35837 = state_35785__$1;
(statearr_35790_35837[(2)] = inst_35775);

(statearr_35790_35837[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (1))){
var inst_35698 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35785__$1 = state_35785;
if(cljs.core.truth_(inst_35698)){
var statearr_35791_35838 = state_35785__$1;
(statearr_35791_35838[(1)] = (2));

} else {
var statearr_35792_35839 = state_35785__$1;
(statearr_35792_35839[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (24))){
var inst_35777 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
var statearr_35793_35840 = state_35785__$1;
(statearr_35793_35840[(2)] = inst_35777);

(statearr_35793_35840[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (4))){
var inst_35783 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35785__$1,inst_35783);
} else {
if((state_val_35786 === (15))){
var inst_35781 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
var statearr_35794_35841 = state_35785__$1;
(statearr_35794_35841[(2)] = inst_35781);

(statearr_35794_35841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (21))){
var inst_35734 = (state_35785[(2)]);
var inst_35735 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35736 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35735);
var state_35785__$1 = (function (){var statearr_35795 = state_35785;
(statearr_35795[(7)] = inst_35734);

return statearr_35795;
})();
var statearr_35796_35842 = state_35785__$1;
(statearr_35796_35842[(2)] = inst_35736);

(statearr_35796_35842[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (31))){
var inst_35764 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35785__$1 = state_35785;
if(inst_35764){
var statearr_35797_35843 = state_35785__$1;
(statearr_35797_35843[(1)] = (34));

} else {
var statearr_35798_35844 = state_35785__$1;
(statearr_35798_35844[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (32))){
var inst_35773 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
var statearr_35799_35845 = state_35785__$1;
(statearr_35799_35845[(2)] = inst_35773);

(statearr_35799_35845[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (33))){
var inst_35760 = (state_35785[(2)]);
var inst_35761 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35762 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35761);
var state_35785__$1 = (function (){var statearr_35800 = state_35785;
(statearr_35800[(8)] = inst_35760);

return statearr_35800;
})();
var statearr_35801_35846 = state_35785__$1;
(statearr_35801_35846[(2)] = inst_35762);

(statearr_35801_35846[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (13))){
var inst_35719 = figwheel.client.heads_up.clear.call(null);
var state_35785__$1 = state_35785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35785__$1,(16),inst_35719);
} else {
if((state_val_35786 === (22))){
var inst_35740 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35741 = figwheel.client.heads_up.append_warning_message.call(null,inst_35740);
var state_35785__$1 = state_35785;
var statearr_35802_35847 = state_35785__$1;
(statearr_35802_35847[(2)] = inst_35741);

(statearr_35802_35847[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (36))){
var inst_35771 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
var statearr_35803_35848 = state_35785__$1;
(statearr_35803_35848[(2)] = inst_35771);

(statearr_35803_35848[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (29))){
var inst_35751 = (state_35785[(2)]);
var inst_35752 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35753 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35752);
var state_35785__$1 = (function (){var statearr_35804 = state_35785;
(statearr_35804[(9)] = inst_35751);

return statearr_35804;
})();
var statearr_35805_35849 = state_35785__$1;
(statearr_35805_35849[(2)] = inst_35753);

(statearr_35805_35849[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (6))){
var inst_35700 = (state_35785[(10)]);
var state_35785__$1 = state_35785;
var statearr_35806_35850 = state_35785__$1;
(statearr_35806_35850[(2)] = inst_35700);

(statearr_35806_35850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (28))){
var inst_35747 = (state_35785[(2)]);
var inst_35748 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35749 = figwheel.client.heads_up.display_warning.call(null,inst_35748);
var state_35785__$1 = (function (){var statearr_35807 = state_35785;
(statearr_35807[(11)] = inst_35747);

return statearr_35807;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35785__$1,(29),inst_35749);
} else {
if((state_val_35786 === (25))){
var inst_35745 = figwheel.client.heads_up.clear.call(null);
var state_35785__$1 = state_35785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35785__$1,(28),inst_35745);
} else {
if((state_val_35786 === (34))){
var inst_35766 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35785__$1 = state_35785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35785__$1,(37),inst_35766);
} else {
if((state_val_35786 === (17))){
var inst_35725 = (state_35785[(2)]);
var inst_35726 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35727 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35726);
var state_35785__$1 = (function (){var statearr_35808 = state_35785;
(statearr_35808[(12)] = inst_35725);

return statearr_35808;
})();
var statearr_35809_35851 = state_35785__$1;
(statearr_35809_35851[(2)] = inst_35727);

(statearr_35809_35851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (3))){
var inst_35717 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35785__$1 = state_35785;
if(inst_35717){
var statearr_35810_35852 = state_35785__$1;
(statearr_35810_35852[(1)] = (13));

} else {
var statearr_35811_35853 = state_35785__$1;
(statearr_35811_35853[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (12))){
var inst_35713 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
var statearr_35812_35854 = state_35785__$1;
(statearr_35812_35854[(2)] = inst_35713);

(statearr_35812_35854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (2))){
var inst_35700 = (state_35785[(10)]);
var inst_35700__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35785__$1 = (function (){var statearr_35813 = state_35785;
(statearr_35813[(10)] = inst_35700__$1);

return statearr_35813;
})();
if(cljs.core.truth_(inst_35700__$1)){
var statearr_35814_35855 = state_35785__$1;
(statearr_35814_35855[(1)] = (5));

} else {
var statearr_35815_35856 = state_35785__$1;
(statearr_35815_35856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (23))){
var inst_35743 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35785__$1 = state_35785;
if(inst_35743){
var statearr_35816_35857 = state_35785__$1;
(statearr_35816_35857[(1)] = (25));

} else {
var statearr_35817_35858 = state_35785__$1;
(statearr_35817_35858[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (35))){
var state_35785__$1 = state_35785;
var statearr_35818_35859 = state_35785__$1;
(statearr_35818_35859[(2)] = null);

(statearr_35818_35859[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (19))){
var inst_35738 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35785__$1 = state_35785;
if(inst_35738){
var statearr_35819_35860 = state_35785__$1;
(statearr_35819_35860[(1)] = (22));

} else {
var statearr_35820_35861 = state_35785__$1;
(statearr_35820_35861[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (11))){
var inst_35709 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
var statearr_35821_35862 = state_35785__$1;
(statearr_35821_35862[(2)] = inst_35709);

(statearr_35821_35862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (9))){
var inst_35711 = figwheel.client.heads_up.clear.call(null);
var state_35785__$1 = state_35785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35785__$1,(12),inst_35711);
} else {
if((state_val_35786 === (5))){
var inst_35702 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35785__$1 = state_35785;
var statearr_35822_35863 = state_35785__$1;
(statearr_35822_35863[(2)] = inst_35702);

(statearr_35822_35863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (14))){
var inst_35729 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35785__$1 = state_35785;
if(inst_35729){
var statearr_35823_35864 = state_35785__$1;
(statearr_35823_35864[(1)] = (18));

} else {
var statearr_35824_35865 = state_35785__$1;
(statearr_35824_35865[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (26))){
var inst_35755 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35785__$1 = state_35785;
if(inst_35755){
var statearr_35825_35866 = state_35785__$1;
(statearr_35825_35866[(1)] = (30));

} else {
var statearr_35826_35867 = state_35785__$1;
(statearr_35826_35867[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (16))){
var inst_35721 = (state_35785[(2)]);
var inst_35722 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35723 = figwheel.client.heads_up.display_exception.call(null,inst_35722);
var state_35785__$1 = (function (){var statearr_35827 = state_35785;
(statearr_35827[(13)] = inst_35721);

return statearr_35827;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35785__$1,(17),inst_35723);
} else {
if((state_val_35786 === (30))){
var inst_35757 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35758 = figwheel.client.heads_up.display_warning.call(null,inst_35757);
var state_35785__$1 = state_35785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35785__$1,(33),inst_35758);
} else {
if((state_val_35786 === (10))){
var inst_35715 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
var statearr_35828_35868 = state_35785__$1;
(statearr_35828_35868[(2)] = inst_35715);

(statearr_35828_35868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (18))){
var inst_35731 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35732 = figwheel.client.heads_up.display_exception.call(null,inst_35731);
var state_35785__$1 = state_35785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35785__$1,(21),inst_35732);
} else {
if((state_val_35786 === (37))){
var inst_35768 = (state_35785[(2)]);
var state_35785__$1 = state_35785;
var statearr_35829_35869 = state_35785__$1;
(statearr_35829_35869[(2)] = inst_35768);

(statearr_35829_35869[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35786 === (8))){
var inst_35707 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35785__$1 = state_35785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35785__$1,(11),inst_35707);
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
});})(c__24321__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24154__auto__,c__24321__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24155__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24155__auto____0 = (function (){
var statearr_35830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35830[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24155__auto__);

(statearr_35830[(1)] = (1));

return statearr_35830;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24155__auto____1 = (function (state_35785){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_35785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e35831){if((e35831 instanceof Object)){
var ex__24158__auto__ = e35831;
var statearr_35832_35870 = state_35785;
(statearr_35832_35870[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35871 = state_35785;
state_35785 = G__35871;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24155__auto__ = function(state_35785){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24155__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24155__auto____1.call(this,state_35785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24155__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24155__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto__,msg_hist,msg_names,msg))
})();
var state__24323__auto__ = (function (){var statearr_35833 = f__24322__auto__.call(null);
(statearr_35833[(6)] = c__24321__auto__);

return statearr_35833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__,msg_hist,msg_names,msg))
);

return c__24321__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24321__auto___35900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto___35900,ch){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto___35900,ch){
return (function (state_35886){
var state_val_35887 = (state_35886[(1)]);
if((state_val_35887 === (1))){
var state_35886__$1 = state_35886;
var statearr_35888_35901 = state_35886__$1;
(statearr_35888_35901[(2)] = null);

(statearr_35888_35901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35887 === (2))){
var state_35886__$1 = state_35886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35886__$1,(4),ch);
} else {
if((state_val_35887 === (3))){
var inst_35884 = (state_35886[(2)]);
var state_35886__$1 = state_35886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35886__$1,inst_35884);
} else {
if((state_val_35887 === (4))){
var inst_35874 = (state_35886[(7)]);
var inst_35874__$1 = (state_35886[(2)]);
var state_35886__$1 = (function (){var statearr_35889 = state_35886;
(statearr_35889[(7)] = inst_35874__$1);

return statearr_35889;
})();
if(cljs.core.truth_(inst_35874__$1)){
var statearr_35890_35902 = state_35886__$1;
(statearr_35890_35902[(1)] = (5));

} else {
var statearr_35891_35903 = state_35886__$1;
(statearr_35891_35903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35887 === (5))){
var inst_35874 = (state_35886[(7)]);
var inst_35876 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35874);
var state_35886__$1 = state_35886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35886__$1,(8),inst_35876);
} else {
if((state_val_35887 === (6))){
var state_35886__$1 = state_35886;
var statearr_35892_35904 = state_35886__$1;
(statearr_35892_35904[(2)] = null);

(statearr_35892_35904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35887 === (7))){
var inst_35882 = (state_35886[(2)]);
var state_35886__$1 = state_35886;
var statearr_35893_35905 = state_35886__$1;
(statearr_35893_35905[(2)] = inst_35882);

(statearr_35893_35905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35887 === (8))){
var inst_35878 = (state_35886[(2)]);
var state_35886__$1 = (function (){var statearr_35894 = state_35886;
(statearr_35894[(8)] = inst_35878);

return statearr_35894;
})();
var statearr_35895_35906 = state_35886__$1;
(statearr_35895_35906[(2)] = null);

(statearr_35895_35906[(1)] = (2));


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
});})(c__24321__auto___35900,ch))
;
return ((function (switch__24154__auto__,c__24321__auto___35900,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24155__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24155__auto____0 = (function (){
var statearr_35896 = [null,null,null,null,null,null,null,null,null];
(statearr_35896[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24155__auto__);

(statearr_35896[(1)] = (1));

return statearr_35896;
});
var figwheel$client$heads_up_plugin_$_state_machine__24155__auto____1 = (function (state_35886){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_35886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e35897){if((e35897 instanceof Object)){
var ex__24158__auto__ = e35897;
var statearr_35898_35907 = state_35886;
(statearr_35898_35907[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35908 = state_35886;
state_35886 = G__35908;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24155__auto__ = function(state_35886){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24155__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24155__auto____1.call(this,state_35886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24155__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24155__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto___35900,ch))
})();
var state__24323__auto__ = (function (){var statearr_35899 = f__24322__auto__.call(null);
(statearr_35899[(6)] = c__24321__auto___35900);

return statearr_35899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto___35900,ch))
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
var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto__){
return (function (state_35914){
var state_val_35915 = (state_35914[(1)]);
if((state_val_35915 === (1))){
var inst_35909 = cljs.core.async.timeout.call(null,(3000));
var state_35914__$1 = state_35914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35914__$1,(2),inst_35909);
} else {
if((state_val_35915 === (2))){
var inst_35911 = (state_35914[(2)]);
var inst_35912 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35914__$1 = (function (){var statearr_35916 = state_35914;
(statearr_35916[(7)] = inst_35911);

return statearr_35916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35914__$1,inst_35912);
} else {
return null;
}
}
});})(c__24321__auto__))
;
return ((function (switch__24154__auto__,c__24321__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24155__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24155__auto____0 = (function (){
var statearr_35917 = [null,null,null,null,null,null,null,null];
(statearr_35917[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24155__auto__);

(statearr_35917[(1)] = (1));

return statearr_35917;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24155__auto____1 = (function (state_35914){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_35914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e35918){if((e35918 instanceof Object)){
var ex__24158__auto__ = e35918;
var statearr_35919_35921 = state_35914;
(statearr_35919_35921[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35922 = state_35914;
state_35914 = G__35922;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24155__auto__ = function(state_35914){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24155__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24155__auto____1.call(this,state_35914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24155__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24155__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto__))
})();
var state__24323__auto__ = (function (){var statearr_35920 = f__24322__auto__.call(null);
(statearr_35920[(6)] = c__24321__auto__);

return statearr_35920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__))
);

return c__24321__auto__;
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
var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__24322__auto__ = (function (){var switch__24154__auto__ = ((function (c__24321__auto__,figwheel_version,temp__5735__auto__){
return (function (state_35929){
var state_val_35930 = (state_35929[(1)]);
if((state_val_35930 === (1))){
var inst_35923 = cljs.core.async.timeout.call(null,(2000));
var state_35929__$1 = state_35929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35929__$1,(2),inst_35923);
} else {
if((state_val_35930 === (2))){
var inst_35925 = (state_35929[(2)]);
var inst_35926 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_35927 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35926);
var state_35929__$1 = (function (){var statearr_35931 = state_35929;
(statearr_35931[(7)] = inst_35925);

return statearr_35931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35929__$1,inst_35927);
} else {
return null;
}
}
});})(c__24321__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__24154__auto__,c__24321__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24155__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24155__auto____0 = (function (){
var statearr_35932 = [null,null,null,null,null,null,null,null];
(statearr_35932[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24155__auto__);

(statearr_35932[(1)] = (1));

return statearr_35932;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24155__auto____1 = (function (state_35929){
while(true){
var ret_value__24156__auto__ = (function (){try{while(true){
var result__24157__auto__ = switch__24154__auto__.call(null,state_35929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24157__auto__;
}
break;
}
}catch (e35933){if((e35933 instanceof Object)){
var ex__24158__auto__ = e35933;
var statearr_35934_35936 = state_35929;
(statearr_35934_35936[(5)] = ex__24158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35937 = state_35929;
state_35929 = G__35937;
continue;
} else {
return ret_value__24156__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24155__auto__ = function(state_35929){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24155__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24155__auto____1.call(this,state_35929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24155__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24155__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24155__auto__;
})()
;})(switch__24154__auto__,c__24321__auto__,figwheel_version,temp__5735__auto__))
})();
var state__24323__auto__ = (function (){var statearr_35935 = f__24322__auto__.call(null);
(statearr_35935[(6)] = c__24321__auto__);

return statearr_35935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__,figwheel_version,temp__5735__auto__))
);

return c__24321__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35938){
var map__35939 = p__35938;
var map__35939__$1 = (((((!((map__35939 == null))))?(((((map__35939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35939):map__35939);
var file = cljs.core.get.call(null,map__35939__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35939__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35939__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35941 = "";
var G__35941__$1 = (cljs.core.truth_(file)?[G__35941,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35941);
var G__35941__$2 = (cljs.core.truth_(line)?[G__35941__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35941__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__35941__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35941__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35942){
var map__35943 = p__35942;
var map__35943__$1 = (((((!((map__35943 == null))))?(((((map__35943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35943):map__35943);
var ed = map__35943__$1;
var exception_data = cljs.core.get.call(null,map__35943__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35943__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_35946 = (function (){var G__35945 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35945)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__35945;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_35946);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35947){
var map__35948 = p__35947;
var map__35948__$1 = (((((!((map__35948 == null))))?(((((map__35948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35948):map__35948);
var w = map__35948__$1;
var message = cljs.core.get.call(null,map__35948__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35950 = cljs.core.seq.call(null,plugins);
var chunk__35951 = null;
var count__35952 = (0);
var i__35953 = (0);
while(true){
if((i__35953 < count__35952)){
var vec__35960 = cljs.core._nth.call(null,chunk__35951,i__35953);
var k = cljs.core.nth.call(null,vec__35960,(0),null);
var plugin = cljs.core.nth.call(null,vec__35960,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35966 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35950,chunk__35951,count__35952,i__35953,pl_35966,vec__35960,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35966.call(null,msg_hist);
});})(seq__35950,chunk__35951,count__35952,i__35953,pl_35966,vec__35960,k,plugin))
);
} else {
}


var G__35967 = seq__35950;
var G__35968 = chunk__35951;
var G__35969 = count__35952;
var G__35970 = (i__35953 + (1));
seq__35950 = G__35967;
chunk__35951 = G__35968;
count__35952 = G__35969;
i__35953 = G__35970;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35950);
if(temp__5735__auto__){
var seq__35950__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35950__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35950__$1);
var G__35971 = cljs.core.chunk_rest.call(null,seq__35950__$1);
var G__35972 = c__4550__auto__;
var G__35973 = cljs.core.count.call(null,c__4550__auto__);
var G__35974 = (0);
seq__35950 = G__35971;
chunk__35951 = G__35972;
count__35952 = G__35973;
i__35953 = G__35974;
continue;
} else {
var vec__35963 = cljs.core.first.call(null,seq__35950__$1);
var k = cljs.core.nth.call(null,vec__35963,(0),null);
var plugin = cljs.core.nth.call(null,vec__35963,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35975 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35950,chunk__35951,count__35952,i__35953,pl_35975,vec__35963,k,plugin,seq__35950__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35975.call(null,msg_hist);
});})(seq__35950,chunk__35951,count__35952,i__35953,pl_35975,vec__35963,k,plugin,seq__35950__$1,temp__5735__auto__))
);
} else {
}


var G__35976 = cljs.core.next.call(null,seq__35950__$1);
var G__35977 = null;
var G__35978 = (0);
var G__35979 = (0);
seq__35950 = G__35976;
chunk__35951 = G__35977;
count__35952 = G__35978;
i__35953 = G__35979;
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
var G__35981 = arguments.length;
switch (G__35981) {
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

var seq__35982_35987 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35983_35988 = null;
var count__35984_35989 = (0);
var i__35985_35990 = (0);
while(true){
if((i__35985_35990 < count__35984_35989)){
var msg_35991 = cljs.core._nth.call(null,chunk__35983_35988,i__35985_35990);
figwheel.client.socket.handle_incoming_message.call(null,msg_35991);


var G__35992 = seq__35982_35987;
var G__35993 = chunk__35983_35988;
var G__35994 = count__35984_35989;
var G__35995 = (i__35985_35990 + (1));
seq__35982_35987 = G__35992;
chunk__35983_35988 = G__35993;
count__35984_35989 = G__35994;
i__35985_35990 = G__35995;
continue;
} else {
var temp__5735__auto___35996 = cljs.core.seq.call(null,seq__35982_35987);
if(temp__5735__auto___35996){
var seq__35982_35997__$1 = temp__5735__auto___35996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35982_35997__$1)){
var c__4550__auto___35998 = cljs.core.chunk_first.call(null,seq__35982_35997__$1);
var G__35999 = cljs.core.chunk_rest.call(null,seq__35982_35997__$1);
var G__36000 = c__4550__auto___35998;
var G__36001 = cljs.core.count.call(null,c__4550__auto___35998);
var G__36002 = (0);
seq__35982_35987 = G__35999;
chunk__35983_35988 = G__36000;
count__35984_35989 = G__36001;
i__35985_35990 = G__36002;
continue;
} else {
var msg_36003 = cljs.core.first.call(null,seq__35982_35997__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36003);


var G__36004 = cljs.core.next.call(null,seq__35982_35997__$1);
var G__36005 = null;
var G__36006 = (0);
var G__36007 = (0);
seq__35982_35987 = G__36004;
chunk__35983_35988 = G__36005;
count__35984_35989 = G__36006;
i__35985_35990 = G__36007;
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
var len__4730__auto___36012 = arguments.length;
var i__4731__auto___36013 = (0);
while(true){
if((i__4731__auto___36013 < len__4730__auto___36012)){
args__4736__auto__.push((arguments[i__4731__auto___36013]));

var G__36014 = (i__4731__auto___36013 + (1));
i__4731__auto___36013 = G__36014;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36009){
var map__36010 = p__36009;
var map__36010__$1 = (((((!((map__36010 == null))))?(((((map__36010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36010):map__36010);
var opts = map__36010__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36008){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36008));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36015){if((e36015 instanceof Error)){
var e = e36015;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36015;

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
return (function (p__36016){
var map__36017 = p__36016;
var map__36017__$1 = (((((!((map__36017 == null))))?(((((map__36017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36017):map__36017);
var msg_name = cljs.core.get.call(null,map__36017__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1631323776761
