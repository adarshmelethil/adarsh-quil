// Compiled by ClojureScript 1.10.520 {}
goog.provide('adarsh_quil.common');
goog.require('cljs.core');

/**
 * @interface
 */
adarsh_quil.common.Drawable = function(){};

adarsh_quil.common.render = (function adarsh_quil$common$render(this$){
if((((!((this$ == null)))) && ((!((this$.adarsh_quil$common$Drawable$render$arity$1 == null)))))){
return this$.adarsh_quil$common$Drawable$render$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (adarsh_quil.common.render[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (adarsh_quil.common.render["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Drawable.render",this$);
}
}
}
});

adarsh_quil.common.next_state = (function adarsh_quil$common$next_state(this$){
if((((!((this$ == null)))) && ((!((this$.adarsh_quil$common$Drawable$next_state$arity$1 == null)))))){
return this$.adarsh_quil$common$Drawable$next_state$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (adarsh_quil.common.next_state[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (adarsh_quil.common.next_state["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Drawable.next-state",this$);
}
}
}
});

adarsh_quil.common.weight = (function adarsh_quil$common$weight(this$){
if((((!((this$ == null)))) && ((!((this$.adarsh_quil$common$Drawable$weight$arity$1 == null)))))){
return this$.adarsh_quil$common$Drawable$weight$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (adarsh_quil.common.weight[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (adarsh_quil.common.weight["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Drawable.weight",this$);
}
}
}
});

adarsh_quil.common.done_QMARK_ = (function adarsh_quil$common$done_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.adarsh_quil$common$Drawable$done_QMARK_$arity$1 == null)))))){
return this$.adarsh_quil$common$Drawable$done_QMARK_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (adarsh_quil.common.done_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (adarsh_quil.common.done_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Drawable.done?",this$);
}
}
}
});


//# sourceMappingURL=common.js.map?rel=1612339712587
