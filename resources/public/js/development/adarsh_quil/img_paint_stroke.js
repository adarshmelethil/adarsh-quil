// Compiled by ClojureScript 1.10.520 {}
goog.provide('adarsh_quil.img_paint_stroke');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('adarsh_quil.common');
goog.require('adarsh_quil.utils');
adarsh_quil.img_paint_stroke.process_img_once = (function adarsh_quil$img_paint_stroke$process_img_once(img,width,height){
quil.core.resize.call(null,img,width,height);

var mask = quil.core.create_image.call(null,width,height);
var mask_px = quil.core.pixels.call(null,mask);
var px = quil.core.pixels.call(null,img);
var n__4607__auto___22046 = width;
var x_22047 = (0);
while(true){
if((x_22047 < n__4607__auto___22046)){
var n__4607__auto___22048__$1 = height;
var y_22049 = (0);
while(true){
if((y_22049 < n__4607__auto___22048__$1)){
var pos_22050 = (((4) * x_22047) + (y_22049 * ((4) * width)));
(px[pos_22050] = (255));

(px[((1) + pos_22050)] = (255));

(px[((2) + pos_22050)] = (255));

(mask_px[(((3) + ((4) * x_22047)) + (y_22049 * ((4) * width)))] = Math.round(quil.core.lerp.call(null,(255),(220),(x_22047 / width))));

var G__22051 = (y_22049 + (1));
y_22049 = G__22051;
continue;
} else {
}
break;
}

var G__22052 = (x_22047 + (1));
x_22047 = G__22052;
continue;
} else {
}
break;
}

quil.core.update_pixels.call(null,img);

quil.core.update_pixels.call(null,mask);

quil.core.mask_image.call(null,img,mask);

return img;
});
adarsh_quil.img_paint_stroke.partial_stroke = (function adarsh_quil$img_paint_stroke$partial_stroke(img,mask,width,height,step,speed){
var min_x = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = Math.floor(((step - speed) * width));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var max_x = (function (){var x__4222__auto__ = width;
var y__4223__auto__ = Math.ceil((step * width));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var px = quil.core.pixels.call(null,mask);
var new_img = quil.core.create_image.call(null,width,height);
var seq__22053_22057 = cljs.core.seq.call(null,cljs.core.range.call(null,min_x,((1) + max_x)));
var chunk__22054_22058 = null;
var count__22055_22059 = (0);
var i__22056_22060 = (0);
while(true){
if((i__22056_22060 < count__22055_22059)){
var x_22061 = cljs.core._nth.call(null,chunk__22054_22058,i__22056_22060);
var n__4607__auto___22062 = height;
var y_22063 = (0);
while(true){
if((y_22063 < n__4607__auto___22062)){
(px[(((3) + ((4) * x_22061)) + (y_22063 * ((4) * width)))] = (255));

var G__22064 = (y_22063 + (1));
y_22063 = G__22064;
continue;
} else {
}
break;
}


var G__22065 = seq__22053_22057;
var G__22066 = chunk__22054_22058;
var G__22067 = count__22055_22059;
var G__22068 = (i__22056_22060 + (1));
seq__22053_22057 = G__22065;
chunk__22054_22058 = G__22066;
count__22055_22059 = G__22067;
i__22056_22060 = G__22068;
continue;
} else {
var temp__5735__auto___22069 = cljs.core.seq.call(null,seq__22053_22057);
if(temp__5735__auto___22069){
var seq__22053_22070__$1 = temp__5735__auto___22069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22053_22070__$1)){
var c__4550__auto___22071 = cljs.core.chunk_first.call(null,seq__22053_22070__$1);
var G__22072 = cljs.core.chunk_rest.call(null,seq__22053_22070__$1);
var G__22073 = c__4550__auto___22071;
var G__22074 = cljs.core.count.call(null,c__4550__auto___22071);
var G__22075 = (0);
seq__22053_22057 = G__22072;
chunk__22054_22058 = G__22073;
count__22055_22059 = G__22074;
i__22056_22060 = G__22075;
continue;
} else {
var x_22076 = cljs.core.first.call(null,seq__22053_22070__$1);
var n__4607__auto___22077 = height;
var y_22078 = (0);
while(true){
if((y_22078 < n__4607__auto___22077)){
(px[(((3) + ((4) * x_22076)) + (y_22078 * ((4) * width)))] = (255));

var G__22079 = (y_22078 + (1));
y_22078 = G__22079;
continue;
} else {
}
break;
}


var G__22080 = cljs.core.next.call(null,seq__22053_22070__$1);
var G__22081 = null;
var G__22082 = (0);
var G__22083 = (0);
seq__22053_22057 = G__22080;
chunk__22054_22058 = G__22081;
count__22055_22059 = G__22082;
i__22056_22060 = G__22083;
continue;
}
} else {
}
}
break;
}

quil.core.update_pixels.call(null,mask);

quil.core.copy.call(null,img,new_img,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),width,height], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),width,height], null));

quil.core.mask_image.call(null,new_img,mask);

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

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k22086,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__22090 = k22086;
var G__22090__$1 = (((G__22090 instanceof cljs.core.Keyword))?G__22090.fqn:null);
switch (G__22090__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k22086,else__4388__auto__);

}
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__22091){
var vec__22092 = p__22091;
var k__4408__auto__ = cljs.core.nth.call(null,vec__22092,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__22092,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#adarsh-quil.img-paint-stroke.Paint-Stroke{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graphic","graphic",262278575),self__.graphic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"img","img",1442687358),self__.img],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22085){
var self__ = this;
var G__22085__$1 = this;
return (new cljs.core.RecordIter((0),G__22085__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"graphic","graphic",262278575),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (4 + cljs.core.count.call(null,self__.__extmap));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (2009851939 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22087,other22088){
var self__ = this;
var this22087__$1 = this;
return (((!((other22088 == null)))) && ((this22087__$1.constructor === other22088.constructor)) && (cljs.core._EQ_.call(null,this22087__$1.weight,other22088.weight)) && (cljs.core._EQ_.call(null,this22087__$1.graphic,other22088.graphic)) && (cljs.core._EQ_.call(null,this22087__$1.img,other22088.img)) && (cljs.core._EQ_.call(null,this22087__$1.speed,other22088.speed)) && (cljs.core._EQ_.call(null,this22087__$1.__extmap,other22088.__extmap)));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.adarsh_quil$common$Drawable$ = cljs.core.PROTOCOL_SENTINEL;

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.adarsh_quil$common$Drawable$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var width = self__.graphic.width;
var height = self__.graphic.height;
if(cljs.core.contains_QMARK_.call(null,this$__$1,new cljs.core.Keyword(null,"step","step",1288888124))){
var map__22095 = this$__$1;
var map__22095__$1 = (((((!((map__22095 == null))))?(((((map__22095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22095):map__22095);
var step = cljs.core.get.call(null,map__22095__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var step_mask = cljs.core.get.call(null,map__22095__$1,new cljs.core.Keyword(null,"step-mask","step-mask",1204874442));
var ps = cljs.core.get.call(null,map__22095__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
if((step <= (1))){
var gr__21775__auto__ = self__.graphic;
var _STAR_graphics_STAR__orig_val__22097 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__22098 = gr__21775__auto__;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__22098;

try{quil.core.begin_draw.call(null,gr__21775__auto__);

quil.core.clear.call(null);

quil.core.image.call(null,adarsh_quil.img_paint_stroke.partial_stroke.call(null,ps,step_mask,width,height,step,self__.speed),(0),(0));

return quil.core.end_draw.call(null,gr__21775__auto__);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__22097;
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
if(cljs.core.truth_((function (){var and__4120__auto__ = quil.core.loaded_QMARK_.call(null,self__.img);
if(cljs.core.truth_(and__4120__auto__)){
return (((self__.img.width > (1))) && ((!(cljs.core.contains_QMARK_.call(null,this$__$1,new cljs.core.Keyword(null,"ps","ps",292358046))))));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"ps","ps",292358046),adarsh_quil.img_paint_stroke.process_img_once.call(null,self__.img,width,height),new cljs.core.Keyword(null,"step","step",1288888124),0.0,new cljs.core.Keyword(null,"step-mask","step-mask",1204874442),quil.core.create_image.call(null,width,height));
} else {
if(cljs.core.contains_QMARK_.call(null,this$__$1,new cljs.core.Keyword(null,"step","step",1288888124))){
return cljs.core.update.call(null,this$__$1,new cljs.core.Keyword(null,"step","step",1288888124),((function (width,height,this$__$1){
return (function (p1__22084_SHARP_){
var x__4222__auto__ = 1.1;
var y__4223__auto__ = (p1__22084_SHARP_ + self__.speed);
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
return ((cljs.core.contains_QMARK_.call(null,this$__$1,new cljs.core.Keyword(null,"step","step",1288888124))) && ((new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(this$__$1) > (1))));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"graphic","graphic",262278575),null,new cljs.core.Keyword(null,"weight","weight",-1262796205),null,new cljs.core.Keyword(null,"img","img",1442687358),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(self__.weight,self__.graphic,self__.img,self__.speed,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__22085){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__22099 = cljs.core.keyword_identical_QMARK_;
var expr__22100 = k__4393__auto__;
if(cljs.core.truth_(pred__22099.call(null,new cljs.core.Keyword(null,"weight","weight",-1262796205),expr__22100))){
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(G__22085,self__.graphic,self__.img,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22099.call(null,new cljs.core.Keyword(null,"graphic","graphic",262278575),expr__22100))){
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(self__.weight,G__22085,self__.img,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22099.call(null,new cljs.core.Keyword(null,"img","img",1442687358),expr__22100))){
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(self__.weight,self__.graphic,G__22085,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22099.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__22100))){
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(self__.weight,self__.graphic,self__.img,G__22085,self__.__meta,self__.__extmap,null));
} else {
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(self__.weight,self__.graphic,self__.img,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__22085),null));
}
}
}
}
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"graphic","graphic",262278575),self__.graphic,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"img","img",1442687358),self__.img,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed,null))], null),self__.__extmap));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__22085){
var self__ = this;
var this__4384__auto____$1 = this;
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(self__.weight,self__.graphic,self__.img,self__.speed,G__22085,self__.__extmap,self__.__hash));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

adarsh_quil.img_paint_stroke.Paint_Stroke.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"graphic","graphic",1902810102,null),new cljs.core.Symbol(null,"img","img",-1211748411,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null)], null);
});

adarsh_quil.img_paint_stroke.Paint_Stroke.cljs$lang$type = true;

adarsh_quil.img_paint_stroke.Paint_Stroke.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"adarsh-quil.img-paint-stroke/Paint-Stroke",null,(1),null));
});

adarsh_quil.img_paint_stroke.Paint_Stroke.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"adarsh-quil.img-paint-stroke/Paint-Stroke");
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
adarsh_quil.img_paint_stroke.map__GT_Paint_Stroke = (function adarsh_quil$img_paint_stroke$map__GT_Paint_Stroke(G__22089){
var extmap__4424__auto__ = (function (){var G__22102 = cljs.core.dissoc.call(null,G__22089,new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"graphic","graphic",262278575),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"speed","speed",1257663751));
if(cljs.core.record_QMARK_.call(null,G__22089)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22102);
} else {
return G__22102;
}
})();
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(G__22089),new cljs.core.Keyword(null,"graphic","graphic",262278575).cljs$core$IFn$_invoke$arity$1(G__22089),new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(G__22089),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__22089),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

adarsh_quil.img_paint_stroke.screen_paint_stoke = (function adarsh_quil$img_paint_stroke$screen_paint_stoke(weight,p__22104){
var vec__22105 = p__22104;
var width = cljs.core.nth.call(null,vec__22105,(0),null);
var height = cljs.core.nth.call(null,vec__22105,(1),null);
var screen_img_url = "img/black-brush-stroke-png-930x382.png";
return (new adarsh_quil.img_paint_stroke.Paint_Stroke(weight,quil.core.create_graphics.call(null,width,height),quil.core.load_image.call(null,screen_img_url),0.03,null,null,null));
});

//# sourceMappingURL=img_paint_stroke.js.map?rel=1612339713637
