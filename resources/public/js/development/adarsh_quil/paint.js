// Compiled by ClojureScript 1.10.520 {}
goog.provide('adarsh_quil.paint');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('adarsh_quil.common');
goog.require('adarsh_quil.utils');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {adarsh_quil.common.Drawable}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
adarsh_quil.paint.Paint_Stroke = (function (graphic,width,length,location,angle,color,starts,ends,step,total_step,__meta,__extmap,__hash){
this.graphic = graphic;
this.width = width;
this.length = length;
this.location = location;
this.angle = angle;
this.color = color;
this.starts = starts;
this.ends = ends;
this.step = step;
this.total_step = total_step;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k22191,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__22195 = k22191;
var G__22195__$1 = (((G__22195 instanceof cljs.core.Keyword))?G__22195.fqn:null);
switch (G__22195__$1) {
case "graphic":
return self__.graphic;

break;
case "width":
return self__.width;

break;
case "length":
return self__.length;

break;
case "location":
return self__.location;

break;
case "angle":
return self__.angle;

break;
case "color":
return self__.color;

break;
case "starts":
return self__.starts;

break;
case "ends":
return self__.ends;

break;
case "step":
return self__.step;

break;
case "total-step":
return self__.total_step;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22191,else__4388__auto__);

}
});

adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__22196){
var vec__22197 = p__22196;
var k__4408__auto__ = cljs.core.nth.call(null,vec__22197,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__22197,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#adarsh-quil.paint.Paint-Stroke{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graphic","graphic",262278575),self__.graphic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"length","length",588987862),self__.length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"location","location",1815599388),self__.location],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle","angle",1622094254),self__.angle],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color","color",1011675173),self__.color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"starts","starts",-1501572425),self__.starts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ends","ends",1984000412),self__.ends],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"step","step",1288888124),self__.step],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"total-step","total-step",953816728),self__.total_step],null))], null),self__.__extmap));
});

adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22190){
var self__ = this;
var G__22190__$1 = this;
return (new cljs.core.RecordIter((0),G__22190__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphic","graphic",262278575),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"starts","starts",-1501572425),new cljs.core.Keyword(null,"ends","ends",1984000412),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"total-step","total-step",953816728)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new adarsh_quil.paint.Paint_Stroke(self__.graphic,self__.width,self__.length,self__.location,self__.angle,self__.color,self__.starts,self__.ends,self__.step,self__.total_step,self__.__meta,self__.__extmap,self__.__hash));
});

adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1023486208 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22192,other22193){
var self__ = this;
var this22192__$1 = this;
return (((!((other22193 == null)))) && ((this22192__$1.constructor === other22193.constructor)) && (cljs.core._EQ_.call(null,this22192__$1.graphic,other22193.graphic)) && (cljs.core._EQ_.call(null,this22192__$1.width,other22193.width)) && (cljs.core._EQ_.call(null,this22192__$1.length,other22193.length)) && (cljs.core._EQ_.call(null,this22192__$1.location,other22193.location)) && (cljs.core._EQ_.call(null,this22192__$1.angle,other22193.angle)) && (cljs.core._EQ_.call(null,this22192__$1.color,other22193.color)) && (cljs.core._EQ_.call(null,this22192__$1.starts,other22193.starts)) && (cljs.core._EQ_.call(null,this22192__$1.ends,other22193.ends)) && (cljs.core._EQ_.call(null,this22192__$1.step,other22193.step)) && (cljs.core._EQ_.call(null,this22192__$1.total_step,other22193.total_step)) && (cljs.core._EQ_.call(null,this22192__$1.__extmap,other22193.__extmap)));
});

adarsh_quil.paint.Paint_Stroke.prototype.adarsh_quil$common$Drawable$ = cljs.core.PROTOCOL_SENTINEL;

adarsh_quil.paint.Paint_Stroke.prototype.adarsh_quil$common$Drawable$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var gr__21775__auto__ = self__.graphic;
var _STAR_graphics_STAR__orig_val__22200 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__22201 = gr__21775__auto__;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__22201;

try{quil.core.begin_draw.call(null,gr__21775__auto__);

quil.core.stroke.call(null,(0));

quil.core.line.call(null,(0),(0),self__.length,self__.width);

quil.core.line.call(null,(0),self__.width,self__.length,(0));

var tr__21761__auto___22211 = self__.location;
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21761__auto___22211);

var tr__21767__auto___22212 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.angle,(0),(0),(0)], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__21767__auto___22212);
}finally {quil.core.pop_matrix.call(null);
}
quil.core.no_stroke.call(null);

var cur_progress_22213 = (self__.step / self__.total_step);
var cur_alpha_22214 = Math.round(quil.core.lerp.call(null,(255),(0),cur_progress_22213));
var r_22215 = quil.core.red.call(null,self__.color);
var g_22216 = quil.core.green.call(null,self__.color);
var b_22217 = quil.core.blue.call(null,self__.color);
var cur_x_22218 = quil.core.lerp.call(null,(self__.length / (-2)),(self__.length / (2)),cur_progress_22213);
var seq__22202_22219 = cljs.core.seq.call(null,cljs.core.range.call(null,self__.width));
var chunk__22203_22220 = null;
var count__22204_22221 = (0);
var i__22205_22222 = (0);
while(true){
if((i__22205_22222 < count__22204_22221)){
var cur_y_index_22223 = cljs.core._nth.call(null,chunk__22203_22220,i__22205_22222);
var cur_y_22224 = quil.core.lerp.call(null,(self__.width / (-2)),(self__.width / (2)),(cur_y_index_22223 / self__.width));
var start_22225 = cljs.core.nth.call(null,self__.starts,cur_y_index_22223);
var end_22226 = cljs.core.nth.call(null,self__.ends,cur_y_index_22223);
if((((start_22225 < cur_x_22218)) && ((cur_x_22218 < end_22226)))){
quil.core.fill.call(null,r_22215,g_22216,b_22217,(10));

quil.core.ellipse.call(null,cur_x_22218,cur_y_22224,(100),(1));
} else {
}


var G__22227 = seq__22202_22219;
var G__22228 = chunk__22203_22220;
var G__22229 = count__22204_22221;
var G__22230 = (i__22205_22222 + (1));
seq__22202_22219 = G__22227;
chunk__22203_22220 = G__22228;
count__22204_22221 = G__22229;
i__22205_22222 = G__22230;
continue;
} else {
var temp__5735__auto___22231 = cljs.core.seq.call(null,seq__22202_22219);
if(temp__5735__auto___22231){
var seq__22202_22232__$1 = temp__5735__auto___22231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22202_22232__$1)){
var c__4550__auto___22233 = cljs.core.chunk_first.call(null,seq__22202_22232__$1);
var G__22234 = cljs.core.chunk_rest.call(null,seq__22202_22232__$1);
var G__22235 = c__4550__auto___22233;
var G__22236 = cljs.core.count.call(null,c__4550__auto___22233);
var G__22237 = (0);
seq__22202_22219 = G__22234;
chunk__22203_22220 = G__22235;
count__22204_22221 = G__22236;
i__22205_22222 = G__22237;
continue;
} else {
var cur_y_index_22238 = cljs.core.first.call(null,seq__22202_22232__$1);
var cur_y_22239 = quil.core.lerp.call(null,(self__.width / (-2)),(self__.width / (2)),(cur_y_index_22238 / self__.width));
var start_22240 = cljs.core.nth.call(null,self__.starts,cur_y_index_22238);
var end_22241 = cljs.core.nth.call(null,self__.ends,cur_y_index_22238);
if((((start_22240 < cur_x_22218)) && ((cur_x_22218 < end_22241)))){
quil.core.fill.call(null,r_22215,g_22216,b_22217,(10));

quil.core.ellipse.call(null,cur_x_22218,cur_y_22239,(100),(1));
} else {
}


var G__22242 = cljs.core.next.call(null,seq__22202_22232__$1);
var G__22243 = null;
var G__22244 = (0);
var G__22245 = (0);
seq__22202_22219 = G__22242;
chunk__22203_22220 = G__22243;
count__22204_22221 = G__22244;
i__22205_22222 = G__22245;
continue;
}
} else {
}
}
break;
}
}finally {quil.core.pop_matrix.call(null);
}
return quil.core.end_draw.call(null,gr__21775__auto__);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__22200;
}});

adarsh_quil.paint.Paint_Stroke.prototype.adarsh_quil$common$Drawable$next_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.step < self__.total_step)){
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"step","step",1288888124),(self__.step + (1)));
} else {
return this$__$1;
}
});

adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"angle","angle",1622094254),null,new cljs.core.Keyword(null,"graphic","graphic",262278575),null,new cljs.core.Keyword(null,"length","length",588987862),null,new cljs.core.Keyword(null,"starts","starts",-1501572425),null,new cljs.core.Keyword(null,"total-step","total-step",953816728),null,new cljs.core.Keyword(null,"location","location",1815599388),null,new cljs.core.Keyword(null,"ends","ends",1984000412),null,new cljs.core.Keyword(null,"step","step",1288888124),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new adarsh_quil.paint.Paint_Stroke(self__.graphic,self__.width,self__.length,self__.location,self__.angle,self__.color,self__.starts,self__.ends,self__.step,self__.total_step,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__22190){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__22206 = cljs.core.keyword_identical_QMARK_;
var expr__22207 = k__4393__auto__;
if(cljs.core.truth_(pred__22206.call(null,new cljs.core.Keyword(null,"graphic","graphic",262278575),expr__22207))){
return (new adarsh_quil.paint.Paint_Stroke(G__22190,self__.width,self__.length,self__.location,self__.angle,self__.color,self__.starts,self__.ends,self__.step,self__.total_step,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22206.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__22207))){
return (new adarsh_quil.paint.Paint_Stroke(self__.graphic,G__22190,self__.length,self__.location,self__.angle,self__.color,self__.starts,self__.ends,self__.step,self__.total_step,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22206.call(null,new cljs.core.Keyword(null,"length","length",588987862),expr__22207))){
return (new adarsh_quil.paint.Paint_Stroke(self__.graphic,self__.width,G__22190,self__.location,self__.angle,self__.color,self__.starts,self__.ends,self__.step,self__.total_step,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22206.call(null,new cljs.core.Keyword(null,"location","location",1815599388),expr__22207))){
return (new adarsh_quil.paint.Paint_Stroke(self__.graphic,self__.width,self__.length,G__22190,self__.angle,self__.color,self__.starts,self__.ends,self__.step,self__.total_step,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22206.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254),expr__22207))){
return (new adarsh_quil.paint.Paint_Stroke(self__.graphic,self__.width,self__.length,self__.location,G__22190,self__.color,self__.starts,self__.ends,self__.step,self__.total_step,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22206.call(null,new cljs.core.Keyword(null,"color","color",1011675173),expr__22207))){
return (new adarsh_quil.paint.Paint_Stroke(self__.graphic,self__.width,self__.length,self__.location,self__.angle,G__22190,self__.starts,self__.ends,self__.step,self__.total_step,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22206.call(null,new cljs.core.Keyword(null,"starts","starts",-1501572425),expr__22207))){
return (new adarsh_quil.paint.Paint_Stroke(self__.graphic,self__.width,self__.length,self__.location,self__.angle,self__.color,G__22190,self__.ends,self__.step,self__.total_step,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22206.call(null,new cljs.core.Keyword(null,"ends","ends",1984000412),expr__22207))){
return (new adarsh_quil.paint.Paint_Stroke(self__.graphic,self__.width,self__.length,self__.location,self__.angle,self__.color,self__.starts,G__22190,self__.step,self__.total_step,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22206.call(null,new cljs.core.Keyword(null,"step","step",1288888124),expr__22207))){
return (new adarsh_quil.paint.Paint_Stroke(self__.graphic,self__.width,self__.length,self__.location,self__.angle,self__.color,self__.starts,self__.ends,G__22190,self__.total_step,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22206.call(null,new cljs.core.Keyword(null,"total-step","total-step",953816728),expr__22207))){
return (new adarsh_quil.paint.Paint_Stroke(self__.graphic,self__.width,self__.length,self__.location,self__.angle,self__.color,self__.starts,self__.ends,self__.step,G__22190,self__.__meta,self__.__extmap,null));
} else {
return (new adarsh_quil.paint.Paint_Stroke(self__.graphic,self__.width,self__.length,self__.location,self__.angle,self__.color,self__.starts,self__.ends,self__.step,self__.total_step,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__22190),null));
}
}
}
}
}
}
}
}
}
}
});

adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"graphic","graphic",262278575),self__.graphic,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"width","width",-384071477),self__.width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"length","length",588987862),self__.length,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"location","location",1815599388),self__.location,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"angle","angle",1622094254),self__.angle,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"color","color",1011675173),self__.color,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"starts","starts",-1501572425),self__.starts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ends","ends",1984000412),self__.ends,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"step","step",1288888124),self__.step,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"total-step","total-step",953816728),self__.total_step,null))], null),self__.__extmap));
});

adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__22190){
var self__ = this;
var this__4384__auto____$1 = this;
return (new adarsh_quil.paint.Paint_Stroke(self__.graphic,self__.width,self__.length,self__.location,self__.angle,self__.color,self__.starts,self__.ends,self__.step,self__.total_step,G__22190,self__.__extmap,self__.__hash));
});

adarsh_quil.paint.Paint_Stroke.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

adarsh_quil.paint.Paint_Stroke.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"graphic","graphic",1902810102,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"length","length",-2065447907,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"starts","starts",138959102,null),new cljs.core.Symbol(null,"ends","ends",-670435357,null),new cljs.core.Symbol(null,"step","step",-1365547645,null),new cljs.core.Symbol(null,"total-step","total-step",-1700619041,null)], null);
});

adarsh_quil.paint.Paint_Stroke.cljs$lang$type = true;

adarsh_quil.paint.Paint_Stroke.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"adarsh-quil.paint/Paint-Stroke",null,(1),null));
});

adarsh_quil.paint.Paint_Stroke.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"adarsh-quil.paint/Paint-Stroke");
});

/**
 * Positional factory function for adarsh-quil.paint/Paint-Stroke.
 */
adarsh_quil.paint.__GT_Paint_Stroke = (function adarsh_quil$paint$__GT_Paint_Stroke(graphic,width,length,location,angle,color,starts,ends,step,total_step){
return (new adarsh_quil.paint.Paint_Stroke(graphic,width,length,location,angle,color,starts,ends,step,total_step,null,null,null));
});

/**
 * Factory function for adarsh-quil.paint/Paint-Stroke, taking a map of keywords to field values.
 */
adarsh_quil.paint.map__GT_Paint_Stroke = (function adarsh_quil$paint$map__GT_Paint_Stroke(G__22194){
var extmap__4424__auto__ = (function (){var G__22209 = cljs.core.dissoc.call(null,G__22194,new cljs.core.Keyword(null,"graphic","graphic",262278575),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"starts","starts",-1501572425),new cljs.core.Keyword(null,"ends","ends",1984000412),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"total-step","total-step",953816728));
if(cljs.core.record_QMARK_.call(null,G__22194)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22209);
} else {
return G__22209;
}
})();
return (new adarsh_quil.paint.Paint_Stroke(new cljs.core.Keyword(null,"graphic","graphic",262278575).cljs$core$IFn$_invoke$arity$1(G__22194),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__22194),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(G__22194),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__22194),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(G__22194),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(G__22194),new cljs.core.Keyword(null,"starts","starts",-1501572425).cljs$core$IFn$_invoke$arity$1(G__22194),new cljs.core.Keyword(null,"ends","ends",1984000412).cljs$core$IFn$_invoke$arity$1(G__22194),new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(G__22194),new cljs.core.Keyword(null,"total-step","total-step",953816728).cljs$core$IFn$_invoke$arity$1(G__22194),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

adarsh_quil.paint.make_paint_stroke = (function adarsh_quil$paint$make_paint_stroke(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22258 = arguments.length;
var i__4731__auto___22259 = (0);
while(true){
if((i__4731__auto___22259 < len__4730__auto___22258)){
args__4736__auto__.push((arguments[i__4731__auto___22259]));

var G__22260 = (i__4731__auto___22259 + (1));
i__4731__auto___22259 = G__22260;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((6) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((6)),(0),null)):null);
return adarsh_quil.paint.make_paint_stroke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4737__auto__);
});

adarsh_quil.paint.make_paint_stroke.cljs$core$IFn$_invoke$arity$variadic = (function (graphics,width,length,location,angle,color,p__22255){
var map__22256 = p__22255;
var map__22256__$1 = (((((!((map__22256 == null))))?(((((map__22256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22256):map__22256);
var total_step = cljs.core.get.call(null,map__22256__$1,new cljs.core.Keyword(null,"total-step","total-step",953816728),(1000));
var start_stroke_margin = cljs.core.get.call(null,map__22256__$1,new cljs.core.Keyword(null,"start-stroke-margin","start-stroke-margin",1303078323),0.05);
var end_stroke_margin = cljs.core.get.call(null,map__22256__$1,new cljs.core.Keyword(null,"end-stroke-margin","end-stroke-margin",1396791655),0.1);
var hw = (width / (2));
var hl = (length / (2));
var start_diff = (length * start_stroke_margin);
var end_diff = (length * end_stroke_margin);
return (new adarsh_quil.paint.Paint_Stroke(graphics,width,length,location,angle,color,cljs.core.vec.call(null,cljs.core.map.call(null,((function (hw,hl,start_diff,end_diff,map__22256,map__22256__$1,total_step,start_stroke_margin,end_stroke_margin){
return (function (p1__22246_SHARP_){
return (((- hl) + (0.02 * quil.core.sq.call(null,p1__22246_SHARP_))) + quil.core.random.call(null,(0),start_diff));
});})(hw,hl,start_diff,end_diff,map__22256,map__22256__$1,total_step,start_stroke_margin,end_stroke_margin))
,cljs.core.range.call(null,(- hw),hw))),cljs.core.vec.call(null,cljs.core.map.call(null,((function (hw,hl,start_diff,end_diff,map__22256,map__22256__$1,total_step,start_stroke_margin,end_stroke_margin){
return (function (p1__22247_SHARP_){
return ((hl - (0.09 * quil.core.sq.call(null,p1__22247_SHARP_))) - quil.core.random.call(null,(0),end_diff));
});})(hw,hl,start_diff,end_diff,map__22256,map__22256__$1,total_step,start_stroke_margin,end_stroke_margin))
,cljs.core.range.call(null,(- hw),hw))),(0),total_step,null,null,null));
});

adarsh_quil.paint.make_paint_stroke.cljs$lang$maxFixedArity = (6);

/** @this {Function} */
adarsh_quil.paint.make_paint_stroke.cljs$lang$applyTo = (function (seq22248){
var G__22249 = cljs.core.first.call(null,seq22248);
var seq22248__$1 = cljs.core.next.call(null,seq22248);
var G__22250 = cljs.core.first.call(null,seq22248__$1);
var seq22248__$2 = cljs.core.next.call(null,seq22248__$1);
var G__22251 = cljs.core.first.call(null,seq22248__$2);
var seq22248__$3 = cljs.core.next.call(null,seq22248__$2);
var G__22252 = cljs.core.first.call(null,seq22248__$3);
var seq22248__$4 = cljs.core.next.call(null,seq22248__$3);
var G__22253 = cljs.core.first.call(null,seq22248__$4);
var seq22248__$5 = cljs.core.next.call(null,seq22248__$4);
var G__22254 = cljs.core.first.call(null,seq22248__$5);
var seq22248__$6 = cljs.core.next.call(null,seq22248__$5);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22249,G__22250,G__22251,G__22252,G__22253,G__22254,seq22248__$6);
});

adarsh_quil.paint.screen_paint_stroke = (function adarsh_quil$paint$screen_paint_stroke(width,length){
return adarsh_quil.paint.make_paint_stroke.call(null,quil.core.create_graphics.call(null,length,width),width,length,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(length / (2)),(width / (2))], null),(0),quil.core.color.call(null,(255),(0),(0)));
});

//# sourceMappingURL=paint.js.map?rel=1612339714046
