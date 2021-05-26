// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('adarsh_quil.img_paint_stroke');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('adarsh_quil.common');
goog.require('adarsh_quil.utils');
adarsh_quil.img_paint_stroke.process_img_once = (function adarsh_quil$img_paint_stroke$process_img_once(img,width,height){
quil.core.resize(img,width,height);

var mask = quil.core.create_image(width,height);
var mask_px = quil.core.pixels.cljs$core$IFn$_invoke$arity$1(mask);
var px = quil.core.pixels.cljs$core$IFn$_invoke$arity$1(img);
var n__4607__auto___6773 = width;
var x_6774 = (0);
while(true){
if((x_6774 < n__4607__auto___6773)){
var n__4607__auto___6775__$1 = height;
var y_6776 = (0);
while(true){
if((y_6776 < n__4607__auto___6775__$1)){
var pos_6777 = (((4) * x_6774) + (y_6776 * ((4) * width)));
(px[pos_6777] = (255));

(px[((1) + pos_6777)] = (255));

(px[((2) + pos_6777)] = (255));

(mask_px[(((3) + ((4) * x_6774)) + (y_6776 * ((4) * width)))] = (function (){var G__6772 = quil.core.lerp((255),(220),(x_6774 / width));
return Math.round(G__6772);
})());

var G__6778 = (y_6776 + (1));
y_6776 = G__6778;
continue;
} else {
}
break;
}

var G__6779 = (x_6774 + (1));
x_6774 = G__6779;
continue;
} else {
}
break;
}

quil.core.update_pixels.cljs$core$IFn$_invoke$arity$1(img);

quil.core.update_pixels.cljs$core$IFn$_invoke$arity$1(mask);

quil.core.mask_image.cljs$core$IFn$_invoke$arity$2(img,mask);

return img;
});
adarsh_quil.img_paint_stroke.partial_stroke = (function adarsh_quil$img_paint_stroke$partial_stroke(img,mask,width,height,step,speed){
var min_x = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var G__6780 = ((step - speed) * width);
return Math.floor(G__6780);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var max_x = (function (){var x__4222__auto__ = width;
var y__4223__auto__ = (function (){var G__6781 = (step * width);
return Math.ceil(G__6781);
})();
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var px = quil.core.pixels.cljs$core$IFn$_invoke$arity$1(mask);
var new_img = quil.core.create_image(width,height);
var seq__6782_6786 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(min_x,((1) + max_x)));
var chunk__6783_6787 = null;
var count__6784_6788 = (0);
var i__6785_6789 = (0);
while(true){
if((i__6785_6789 < count__6784_6788)){
var x_6790 = chunk__6783_6787.cljs$core$IIndexed$_nth$arity$2(null,i__6785_6789);
var n__4607__auto___6791 = height;
var y_6792 = (0);
while(true){
if((y_6792 < n__4607__auto___6791)){
(px[(((3) + ((4) * x_6790)) + (y_6792 * ((4) * width)))] = (255));

var G__6793 = (y_6792 + (1));
y_6792 = G__6793;
continue;
} else {
}
break;
}


var G__6794 = seq__6782_6786;
var G__6795 = chunk__6783_6787;
var G__6796 = count__6784_6788;
var G__6797 = (i__6785_6789 + (1));
seq__6782_6786 = G__6794;
chunk__6783_6787 = G__6795;
count__6784_6788 = G__6796;
i__6785_6789 = G__6797;
continue;
} else {
var temp__5735__auto___6798 = cljs.core.seq(seq__6782_6786);
if(temp__5735__auto___6798){
var seq__6782_6799__$1 = temp__5735__auto___6798;
if(cljs.core.chunked_seq_QMARK_(seq__6782_6799__$1)){
var c__4550__auto___6800 = cljs.core.chunk_first(seq__6782_6799__$1);
var G__6801 = cljs.core.chunk_rest(seq__6782_6799__$1);
var G__6802 = c__4550__auto___6800;
var G__6803 = cljs.core.count(c__4550__auto___6800);
var G__6804 = (0);
seq__6782_6786 = G__6801;
chunk__6783_6787 = G__6802;
count__6784_6788 = G__6803;
i__6785_6789 = G__6804;
continue;
} else {
var x_6805 = cljs.core.first(seq__6782_6799__$1);
var n__4607__auto___6806 = height;
var y_6807 = (0);
while(true){
if((y_6807 < n__4607__auto___6806)){
(px[(((3) + ((4) * x_6805)) + (y_6807 * ((4) * width)))] = (255));

var G__6808 = (y_6807 + (1));
y_6807 = G__6808;
continue;
} else {
}
break;
}


var G__6809 = cljs.core.next(seq__6782_6799__$1);
var G__6810 = null;
var G__6811 = (0);
var G__6812 = (0);
seq__6782_6786 = G__6809;
chunk__6783_6787 = G__6810;
count__6784_6788 = G__6811;
i__6785_6789 = G__6812;
continue;
}
} else {
}
}
break;
}

quil.core.update_pixels.cljs$core$IFn$_invoke$arity$1(mask);

quil.core.copy.cljs$core$IFn$_invoke$arity$4(img,new_img,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),width,height], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),width,height], null));

quil.core.mask_image.cljs$core$IFn$_invoke$arity$2(new_img,mask);

return new_img;
});

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
adarsh_quil.img_paint_stroke.Paint_Stroke = (function (weight,graphic,img,speed,__meta,__extmap,__hash){
this.weight = weight;
this.graphic = graphic;
this.img = img;
this.speed = speed;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k6815,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__6819 = k6815;
var G__6819__$1 = (((G__6819 instanceof cljs.core.Keyword))?G__6819.fqn:null);
switch (G__6819__$1) {
case "weight":
return self__.weight;

break;
case "graphic":
return self__.graphic;

break;
case "img":
return self__.img;

break;
case "speed":
return self__.speed;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6815,else__4388__auto__);

}
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__6820){
var vec__6821 = p__6820;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6821,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6821,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#adarsh-quil.img-paint-stroke.Paint-Stroke{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$weight,self__.weight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$graphic,self__.graphic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$img,self__.img],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$speed,self__.speed],null))], null),self__.__extmap));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6814){
var self__ = this;
var G__6814__$1 = this;
return (new cljs.core.RecordIter((0),G__6814__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weight,cljs.core.cst$kw$graphic,cljs.core.cst$kw$img,cljs.core.cst$kw$speed], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(self__.weight,self__.graphic,self__.img,self__.speed,self__.__meta,self__.__extmap,self__.__hash));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__6824 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (2009851939 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__6824(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6816,other6817){
var self__ = this;
var this6816__$1 = this;
return (((!((other6817 == null)))) && ((this6816__$1.constructor === other6817.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6816__$1.weight,other6817.weight)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6816__$1.graphic,other6817.graphic)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6816__$1.img,other6817.img)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6816__$1.speed,other6817.speed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6816__$1.__extmap,other6817.__extmap)));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.adarsh_quil$common$Drawable$ = cljs.core.PROTOCOL_SENTINEL;

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.adarsh_quil$common$Drawable$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var width = self__.graphic.width;
var height = self__.graphic.height;
if(cljs.core.contains_QMARK_(this$__$1,cljs.core.cst$kw$step)){
var map__6825 = this$__$1;
var map__6825__$1 = (((((!((map__6825 == null))))?(((((map__6825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6825):map__6825);
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6825__$1,cljs.core.cst$kw$step);
var step_mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6825__$1,cljs.core.cst$kw$step_DASH_mask);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6825__$1,cljs.core.cst$kw$ps);
if((step <= (1))){
var gr__6461__auto__ = self__.graphic;
var _STAR_graphics_STAR__orig_val__6827 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__6828 = gr__6461__auto__;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__6828;

try{quil.core.begin_draw(gr__6461__auto__);

quil.core.clear();

quil.core.image.cljs$core$IFn$_invoke$arity$3(adarsh_quil.img_paint_stroke.partial_stroke(ps,step_mask,width,height,step,self__.speed),(0),(0));

return quil.core.end_draw(gr__6461__auto__);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__6827;
}} else {
return null;
}
} else {
return null;
}
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.adarsh_quil$common$Drawable$next_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var width = self__.graphic.width;
var height = self__.graphic.height;
if(cljs.core.truth_((function (){var and__4120__auto__ = quil.core.loaded_QMARK_(self__.img);
if(cljs.core.truth_(and__4120__auto__)){
return (((self__.img.width > (1))) && ((!(cljs.core.contains_QMARK_(this$__$1,cljs.core.cst$kw$ps)))));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$1,cljs.core.cst$kw$ps,adarsh_quil.img_paint_stroke.process_img_once(self__.img,width,height),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$step,0.0,cljs.core.cst$kw$step_DASH_mask,quil.core.create_image(width,height)], 0));
} else {
if(cljs.core.contains_QMARK_(this$__$1,cljs.core.cst$kw$step)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$step,((function (width,height,this$__$1){
return (function (p1__6813_SHARP_){
var x__4222__auto__ = 1.1;
var y__4223__auto__ = (p1__6813_SHARP_ + self__.speed);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(width,height,this$__$1))
);
} else {
return this$__$1;
}
}
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.adarsh_quil$common$Drawable$weight$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.weight;
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.adarsh_quil$common$Drawable$done_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((cljs.core.contains_QMARK_(this$__$1,cljs.core.cst$kw$step)) && ((cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(this$__$1) > (1))));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$speed,null,cljs.core.cst$kw$graphic,null,cljs.core.cst$kw$weight,null,cljs.core.cst$kw$img,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(self__.weight,self__.graphic,self__.img,self__.speed,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__6814){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__6829 = cljs.core.keyword_identical_QMARK_;
var expr__6830 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__6832 = cljs.core.cst$kw$weight;
var G__6833 = expr__6830;
return (pred__6829.cljs$core$IFn$_invoke$arity$2 ? pred__6829.cljs$core$IFn$_invoke$arity$2(G__6832,G__6833) : pred__6829.call(null,G__6832,G__6833));
})())){
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(G__6814,self__.graphic,self__.img,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6834 = cljs.core.cst$kw$graphic;
var G__6835 = expr__6830;
return (pred__6829.cljs$core$IFn$_invoke$arity$2 ? pred__6829.cljs$core$IFn$_invoke$arity$2(G__6834,G__6835) : pred__6829.call(null,G__6834,G__6835));
})())){
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(self__.weight,G__6814,self__.img,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6836 = cljs.core.cst$kw$img;
var G__6837 = expr__6830;
return (pred__6829.cljs$core$IFn$_invoke$arity$2 ? pred__6829.cljs$core$IFn$_invoke$arity$2(G__6836,G__6837) : pred__6829.call(null,G__6836,G__6837));
})())){
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(self__.weight,self__.graphic,G__6814,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6838 = cljs.core.cst$kw$speed;
var G__6839 = expr__6830;
return (pred__6829.cljs$core$IFn$_invoke$arity$2 ? pred__6829.cljs$core$IFn$_invoke$arity$2(G__6838,G__6839) : pred__6829.call(null,G__6838,G__6839));
})())){
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(self__.weight,self__.graphic,self__.img,G__6814,self__.__meta,self__.__extmap,null));
} else {
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(self__.weight,self__.graphic,self__.img,self__.speed,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__6814),null));
}
}
}
}
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$weight,self__.weight,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$graphic,self__.graphic,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$img,self__.img,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$speed,self__.speed,null))], null),self__.__extmap));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__6814){
var self__ = this;
var this__4384__auto____$1 = this;
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(self__.weight,self__.graphic,self__.img,self__.speed,G__6814,self__.__extmap,self__.__hash));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

adarsh_quil.img_paint_stroke.Paint_Stroke.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$weight,cljs.core.cst$sym$graphic,cljs.core.cst$sym$img,cljs.core.cst$sym$speed], null);
});

adarsh_quil.img_paint_stroke.Paint_Stroke.cljs$lang$type = true;

adarsh_quil.img_paint_stroke.Paint_Stroke.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"adarsh-quil.img-paint-stroke/Paint-Stroke",null,(1),null));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"adarsh-quil.img-paint-stroke/Paint-Stroke");
});

/**
 * Positional factory function for adarsh-quil.img-paint-stroke/Paint-Stroke.
 */
adarsh_quil.img_paint_stroke.__GT_Paint_Stroke = (function adarsh_quil$img_paint_stroke$__GT_Paint_Stroke(weight,graphic,img,speed){
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(weight,graphic,img,speed,null,null,null));
});

/**
 * Factory function for adarsh-quil.img-paint-stroke/Paint-Stroke, taking a map of keywords to field values.
 */
adarsh_quil.img_paint_stroke.map__GT_Paint_Stroke = (function adarsh_quil$img_paint_stroke$map__GT_Paint_Stroke(G__6818){
var extmap__4424__auto__ = (function (){var G__6840 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6818,cljs.core.cst$kw$weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$graphic,cljs.core.cst$kw$img,cljs.core.cst$kw$speed], 0));
if(cljs.core.record_QMARK_(G__6818)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6840);
} else {
return G__6840;
}
})();
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(cljs.core.cst$kw$weight.cljs$core$IFn$_invoke$arity$1(G__6818),cljs.core.cst$kw$graphic.cljs$core$IFn$_invoke$arity$1(G__6818),cljs.core.cst$kw$img.cljs$core$IFn$_invoke$arity$1(G__6818),cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(G__6818),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

adarsh_quil.img_paint_stroke.screen_paint_stoke = (function adarsh_quil$img_paint_stroke$screen_paint_stoke(weight,p__6842){
var vec__6843 = p__6842;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6843,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6843,(1),null);
var screen_img_url = "img/black-brush-stroke-png-930x382.png";
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(weight,quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2(width,height),quil.core.load_image(screen_img_url),0.03,null,null,null));
});
