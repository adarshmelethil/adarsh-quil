// Compiled by ClojureScript 1.10.520 {}
goog.provide('adarsh_quil.bubble');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('adarsh_quil.common');
goog.require('adarsh_quil.utils');
adarsh_quil.bubble.process_img_once = (function adarsh_quil$bubble$process_img_once(img,width,height,spike_mag){
quil.core.resize.call(null,img,width,height);

return img;
});
adarsh_quil.bubble.frame_mask = (function adarsh_quil$bubble$frame_mask(width,height,z_val,spike_mag){
var mask = quil.core.create_image.call(null,width,height);
var mask_px = quil.core.pixels.call(null,mask);
var hw = (width / (2));
var hh = (height / (2));
var r = ((function (){var x__4222__auto__ = hw;
var y__4223__auto__ = hh;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})() - (spike_mag / (2)));
var n__4607__auto___35511 = width;
var x_35512 = (0);
while(true){
if((x_35512 < n__4607__auto___35511)){
var n__4607__auto___35513__$1 = height;
var y_35514 = (0);
while(true){
if((y_35514 < n__4607__auto___35513__$1)){
var xx_35515 = (x_35512 - hw);
var yy_35516 = (y_35514 - hh);
var angle_35517 = Math.atan2(yy_35516,xx_35515);
var noise_circle_radius_35518 = (4);
var x_point_on_circle_35519 = (noise_circle_radius_35518 + (noise_circle_radius_35518 * Math.cos(angle_35517)));
var y_point_on_circle_35520 = (noise_circle_radius_35518 + (noise_circle_radius_35518 * Math.sin(angle_35517)));
var noise_35521 = (spike_mag * quil.core.noise.call(null,x_point_on_circle_35519,y_point_on_circle_35520,z_val));
var spike_r_35522 = Math.pow((noise_35521 + r),(2));
if(((Math.pow(xx_35515,(2)) + Math.pow(yy_35516,(2))) < spike_r_35522)){
(mask_px[(((3) + ((4) * x_35512)) + (y_35514 * ((4) * width)))] = (255));
} else {
}

var G__35523 = (y_35514 + (1));
y_35514 = G__35523;
continue;
} else {
}
break;
}

var G__35524 = (x_35512 + (1));
x_35512 = G__35524;
continue;
} else {
}
break;
}

quil.core.update_pixels.call(null,mask);

return mask;
});
adarsh_quil.bubble.apply_frame = (function adarsh_quil$bubble$apply_frame(img,frame){
var width = img.width;
var height = img.height;
var new_img = quil.core.create_image.call(null,width,height);
quil.core.copy.call(null,img,new_img,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),width,height], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),width,height], null));

quil.core.mask_image.call(null,new_img,frame);

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
adarsh_quil.bubble.Bubble_Image = (function (weight,graphic,img,frames,z_count,z_val_inc,spike_mag,points,speed,size_start,size_end,size_inc,__meta,__extmap,__hash){
this.weight = weight;
this.graphic = graphic;
this.img = img;
this.frames = frames;
this.z_count = z_count;
this.z_val_inc = z_val_inc;
this.spike_mag = spike_mag;
this.points = points;
this.speed = speed;
this.size_start = size_start;
this.size_end = size_end;
this.size_inc = size_inc;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35527,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35531 = k35527;
var G__35531__$1 = (((G__35531 instanceof cljs.core.Keyword))?G__35531.fqn:null);
switch (G__35531__$1) {
case "weight":
return self__.weight;

break;
case "graphic":
return self__.graphic;

break;
case "img":
return self__.img;

break;
case "frames":
return self__.frames;

break;
case "z-count":
return self__.z_count;

break;
case "z-val-inc":
return self__.z_val_inc;

break;
case "spike-mag":
return self__.spike_mag;

break;
case "points":
return self__.points;

break;
case "speed":
return self__.speed;

break;
case "size-start":
return self__.size_start;

break;
case "size-end":
return self__.size_end;

break;
case "size-inc":
return self__.size_inc;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35527,else__4388__auto__);

}
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35532){
var vec__35533 = p__35532;
var k__4408__auto__ = cljs.core.nth.call(null,vec__35533,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__35533,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#adarsh-quil.bubble.Bubble-Image{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graphic","graphic",262278575),self__.graphic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"img","img",1442687358),self__.img],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"frames","frames",1765687497),self__.frames],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"z-count","z-count",1773219834),self__.z_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"z-val-inc","z-val-inc",740266442),self__.z_val_inc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spike-mag","spike-mag",460533094),self__.spike_mag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size-start","size-start",-1085202492),self__.size_start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size-end","size-end",752731653),self__.size_end],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size-inc","size-inc",-417901586),self__.size_inc],null))], null),self__.__extmap));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35526){
var self__ = this;
var G__35526__$1 = this;
return (new cljs.core.RecordIter((0),G__35526__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"graphic","graphic",262278575),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.Keyword(null,"z-count","z-count",1773219834),new cljs.core.Keyword(null,"z-val-inc","z-val-inc",740266442),new cljs.core.Keyword(null,"spike-mag","spike-mag",460533094),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"size-start","size-start",-1085202492),new cljs.core.Keyword(null,"size-end","size-end",752731653),new cljs.core.Keyword(null,"size-inc","size-inc",-417901586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,self__.__hash));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (12 + cljs.core.count.call(null,self__.__extmap));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1711428453 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35528,other35529){
var self__ = this;
var this35528__$1 = this;
return (((!((other35529 == null)))) && ((this35528__$1.constructor === other35529.constructor)) && (cljs.core._EQ_.call(null,this35528__$1.weight,other35529.weight)) && (cljs.core._EQ_.call(null,this35528__$1.graphic,other35529.graphic)) && (cljs.core._EQ_.call(null,this35528__$1.img,other35529.img)) && (cljs.core._EQ_.call(null,this35528__$1.frames,other35529.frames)) && (cljs.core._EQ_.call(null,this35528__$1.z_count,other35529.z_count)) && (cljs.core._EQ_.call(null,this35528__$1.z_val_inc,other35529.z_val_inc)) && (cljs.core._EQ_.call(null,this35528__$1.spike_mag,other35529.spike_mag)) && (cljs.core._EQ_.call(null,this35528__$1.points,other35529.points)) && (cljs.core._EQ_.call(null,this35528__$1.speed,other35529.speed)) && (cljs.core._EQ_.call(null,this35528__$1.size_start,other35529.size_start)) && (cljs.core._EQ_.call(null,this35528__$1.size_end,other35529.size_end)) && (cljs.core._EQ_.call(null,this35528__$1.size_inc,other35529.size_inc)) && (cljs.core._EQ_.call(null,this35528__$1.__extmap,other35529.__extmap)));
});

adarsh_quil.bubble.Bubble_Image.prototype.adarsh_quil$common$Drawable$ = cljs.core.PROTOCOL_SENTINEL;

adarsh_quil.bubble.Bubble_Image.prototype.adarsh_quil$common$Drawable$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,this$__$1,new cljs.core.Keyword(null,"step","step",1288888124))){
var width = self__.graphic.width;
var height = self__.graphic.height;
var hw = (width / (2));
var hh = (height / (2));
var map__35536 = this$__$1;
var map__35536__$1 = (((((!((map__35536 == null))))?(((((map__35536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35536):map__35536);
var raw = cljs.core.get.call(null,map__35536__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var frame_index = cljs.core.get.call(null,map__35536__$1,new cljs.core.Keyword(null,"frame-index","frame-index",1898255777));
var size = cljs.core.get.call(null,map__35536__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var gr__21775__auto___35551 = raw;
var _STAR_graphics_STAR__orig_val__35538_35552 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__35539_35553 = gr__21775__auto___35551;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__35539_35553;

try{quil.core.begin_draw.call(null,gr__21775__auto___35551);

quil.core.no_stroke.call(null);

if(cljs.core.not.call(null,this$__$1.adarsh_quil$common$Drawable$done_QMARK_$arity$1(null))){
var n__4607__auto___35554 = self__.points;
var __35555 = (0);
while(true){
if((__35555 < n__4607__auto___35554)){
var x_35556 = (hw + (hw * quil.core.random_gaussian.call(null)));
var y_35557 = (hh + (hh * quil.core.random_gaussian.call(null)));
var fill__21745__auto___35558 = quil.core.get_pixel.call(null,self__.img,x_35556,y_35557);
var previous_fill__21746__auto___35559 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__21745__auto___35558)){
cljs.core.apply.call(null,quil.core.fill,fill__21745__auto___35558);
} else {
quil.core.fill.call(null,fill__21745__auto___35558);

}

var return_val__21747__auto___35560 = quil.core.ellipse.call(null,x_35556,y_35557,size,size);
if((previous_fill__21746__auto___35559 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__21746__auto___35559);
}


var G__35561 = (__35555 + (1));
__35555 = G__35561;
continue;
} else {
}
break;
}
} else {
}

quil.core.end_draw.call(null,gr__21775__auto___35551);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__35538_35552;
}
var gr__21775__auto__ = self__.graphic;
var _STAR_graphics_STAR__orig_val__35540 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__35541 = gr__21775__auto__;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__35541;

try{quil.core.begin_draw.call(null,gr__21775__auto__);

quil.core.clear.call(null);

quil.core.image.call(null,adarsh_quil.bubble.apply_frame.call(null,raw,cljs.core.nth.call(null,self__.frames,frame_index)),(0),(0));

return quil.core.end_draw.call(null,gr__21775__auto__);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__35540;
}} else {
return null;
}
});

adarsh_quil.bubble.Bubble_Image.prototype.adarsh_quil$common$Drawable$next_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var width = self__.graphic.width;
var height = self__.graphic.height;
if(cljs.core.truth_((function (){var and__4120__auto__ = quil.core.loaded_QMARK_.call(null,self__.img);
if(cljs.core.truth_(and__4120__auto__)){
return (((self__.img.width > (1))) && ((!(cljs.core.contains_QMARK_.call(null,this$__$1,new cljs.core.Keyword(null,"step","step",1288888124))))));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"ps","ps",292358046),adarsh_quil.bubble.process_img_once.call(null,self__.img,width,height,self__.spike_mag),new cljs.core.Keyword(null,"frame-index","frame-index",1898255777),(0),new cljs.core.Keyword(null,"frame-inc","frame-inc",1932537499),(1),new cljs.core.Keyword(null,"raw","raw",1604651272),quil.core.create_graphics.call(null,width,height),new cljs.core.Keyword(null,"size","size",1098693007),self__.size_start,new cljs.core.Keyword(null,"step","step",1288888124),0.0);
} else {
var new_state = cljs.core.assoc.call(null,((((cljs.core.contains_QMARK_.call(null,this$__$1,new cljs.core.Keyword(null,"step","step",1288888124))) && (cljs.core.not.call(null,this$__$1.adarsh_quil$common$Drawable$done_QMARK_$arity$1(null)))))?(function (){var map__35543 = this$__$1;
var map__35543__$1 = (((((!((map__35543 == null))))?(((((map__35543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35543):map__35543);
var step = cljs.core.get.call(null,map__35543__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var size = cljs.core.get.call(null,map__35543__$1,new cljs.core.Keyword(null,"size","size",1098693007));
if((step > 1.0)){
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"step","step",1288888124),0.0,new cljs.core.Keyword(null,"size","size",1098693007),(function (){var x__4219__auto__ = self__.size_end;
var y__4220__auto__ = (size - self__.size_inc);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
} else {
return cljs.core.update.call(null,this$__$1,new cljs.core.Keyword(null,"step","step",1288888124),((function (map__35543,map__35543__$1,step,size,width,height,this$__$1){
return (function (p1__35525_SHARP_){
var x__4222__auto__ = 1.1;
var y__4223__auto__ = (p1__35525_SHARP_ + self__.speed);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(map__35543,map__35543__$1,step,size,width,height,this$__$1))
);
}
})():this$__$1),new cljs.core.Keyword(null,"frame-index","frame-index",1898255777),(new cljs.core.Keyword(null,"frame-index","frame-index",1898255777).cljs$core$IFn$_invoke$arity$1(this$__$1) + new cljs.core.Keyword(null,"frame-inc","frame-inc",1932537499).cljs$core$IFn$_invoke$arity$1(this$__$1)));
var map__35542 = new_state;
var map__35542__$1 = (((((!((map__35542 == null))))?(((((map__35542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35542):map__35542);
var frame_index = cljs.core.get.call(null,map__35542__$1,new cljs.core.Keyword(null,"frame-index","frame-index",1898255777));
var frame_inc = cljs.core.get.call(null,map__35542__$1,new cljs.core.Keyword(null,"frame-inc","frame-inc",1932537499));
if((!(((((0) < frame_index)) && ((frame_index < (self__.z_count - (1)))))))){
return cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"frame-inc","frame-inc",1932537499),((-1) * frame_inc));
} else {
return new_state;
}
}
});

adarsh_quil.bubble.Bubble_Image.prototype.adarsh_quil$common$Drawable$weight$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.weight;
});

adarsh_quil.bubble.Bubble_Image.prototype.adarsh_quil$common$Drawable$done_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((cljs.core.contains_QMARK_.call(null,this$__$1,new cljs.core.Keyword(null,"step","step",1288888124))) && ((new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(this$__$1) > (1))) && ((new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(this$__$1) <= self__.size_end)));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"size-start","size-start",-1085202492),null,new cljs.core.Keyword(null,"size-end","size-end",752731653),null,new cljs.core.Keyword(null,"spike-mag","spike-mag",460533094),null,new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"frames","frames",1765687497),null,new cljs.core.Keyword(null,"z-val-inc","z-val-inc",740266442),null,new cljs.core.Keyword(null,"points","points",-1486596883),null,new cljs.core.Keyword(null,"size-inc","size-inc",-417901586),null,new cljs.core.Keyword(null,"graphic","graphic",262278575),null,new cljs.core.Keyword(null,"weight","weight",-1262796205),null,new cljs.core.Keyword(null,"z-count","z-count",1773219834),null,new cljs.core.Keyword(null,"img","img",1442687358),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35526){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35546 = cljs.core.keyword_identical_QMARK_;
var expr__35547 = k__4393__auto__;
if(cljs.core.truth_(pred__35546.call(null,new cljs.core.Keyword(null,"weight","weight",-1262796205),expr__35547))){
return (new adarsh_quil.bubble.Bubble_Image(G__35526,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35546.call(null,new cljs.core.Keyword(null,"graphic","graphic",262278575),expr__35547))){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,G__35526,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35546.call(null,new cljs.core.Keyword(null,"img","img",1442687358),expr__35547))){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,G__35526,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35546.call(null,new cljs.core.Keyword(null,"frames","frames",1765687497),expr__35547))){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,G__35526,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35546.call(null,new cljs.core.Keyword(null,"z-count","z-count",1773219834),expr__35547))){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,G__35526,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35546.call(null,new cljs.core.Keyword(null,"z-val-inc","z-val-inc",740266442),expr__35547))){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,G__35526,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35546.call(null,new cljs.core.Keyword(null,"spike-mag","spike-mag",460533094),expr__35547))){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,G__35526,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35546.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__35547))){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,G__35526,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35546.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__35547))){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,G__35526,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35546.call(null,new cljs.core.Keyword(null,"size-start","size-start",-1085202492),expr__35547))){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,G__35526,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35546.call(null,new cljs.core.Keyword(null,"size-end","size-end",752731653),expr__35547))){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,G__35526,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35546.call(null,new cljs.core.Keyword(null,"size-inc","size-inc",-417901586),expr__35547))){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,G__35526,self__.__meta,self__.__extmap,null));
} else {
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__35526),null));
}
}
}
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

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"graphic","graphic",262278575),self__.graphic,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"img","img",1442687358),self__.img,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"frames","frames",1765687497),self__.frames,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"z-count","z-count",1773219834),self__.z_count,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"z-val-inc","z-val-inc",740266442),self__.z_val_inc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"spike-mag","spike-mag",460533094),self__.spike_mag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"points","points",-1486596883),self__.points,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"size-start","size-start",-1085202492),self__.size_start,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"size-end","size-end",752731653),self__.size_end,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"size-inc","size-inc",-417901586),self__.size_inc,null))], null),self__.__extmap));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35526){
var self__ = this;
var this__4384__auto____$1 = this;
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,G__35526,self__.__extmap,self__.__hash));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

adarsh_quil.bubble.Bubble_Image.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"graphic","graphic",1902810102,null),new cljs.core.Symbol(null,"img","img",-1211748411,null),new cljs.core.Symbol(null,"frames","frames",-888748272,null),new cljs.core.Symbol(null,"z-count","z-count",-881215935,null),new cljs.core.Symbol(null,"z-val-inc","z-val-inc",-1914169327,null),new cljs.core.Symbol(null,"spike-mag","spike-mag",2101064621,null),new cljs.core.Symbol(null,"points","points",153934644,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null),new cljs.core.Symbol(null,"size-start","size-start",555329035,null),new cljs.core.Symbol(null,"size-end","size-end",-1901704116,null),new cljs.core.Symbol(null,"size-inc","size-inc",1222629941,null)], null);
});

adarsh_quil.bubble.Bubble_Image.cljs$lang$type = true;

adarsh_quil.bubble.Bubble_Image.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"adarsh-quil.bubble/Bubble-Image",null,(1),null));
});

adarsh_quil.bubble.Bubble_Image.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"adarsh-quil.bubble/Bubble-Image");
});

/**
 * Positional factory function for adarsh-quil.bubble/Bubble-Image.
 */
adarsh_quil.bubble.__GT_Bubble_Image = (function adarsh_quil$bubble$__GT_Bubble_Image(weight,graphic,img,frames,z_count,z_val_inc,spike_mag,points,speed,size_start,size_end,size_inc){
return (new adarsh_quil.bubble.Bubble_Image(weight,graphic,img,frames,z_count,z_val_inc,spike_mag,points,speed,size_start,size_end,size_inc,null,null,null));
});

/**
 * Factory function for adarsh-quil.bubble/Bubble-Image, taking a map of keywords to field values.
 */
adarsh_quil.bubble.map__GT_Bubble_Image = (function adarsh_quil$bubble$map__GT_Bubble_Image(G__35530){
var extmap__4424__auto__ = (function (){var G__35549 = cljs.core.dissoc.call(null,G__35530,new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"graphic","graphic",262278575),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.Keyword(null,"z-count","z-count",1773219834),new cljs.core.Keyword(null,"z-val-inc","z-val-inc",740266442),new cljs.core.Keyword(null,"spike-mag","spike-mag",460533094),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"size-start","size-start",-1085202492),new cljs.core.Keyword(null,"size-end","size-end",752731653),new cljs.core.Keyword(null,"size-inc","size-inc",-417901586));
if(cljs.core.record_QMARK_.call(null,G__35530)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35549);
} else {
return G__35549;
}
})();
return (new adarsh_quil.bubble.Bubble_Image(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(G__35530),new cljs.core.Keyword(null,"graphic","graphic",262278575).cljs$core$IFn$_invoke$arity$1(G__35530),new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(G__35530),new cljs.core.Keyword(null,"frames","frames",1765687497).cljs$core$IFn$_invoke$arity$1(G__35530),new cljs.core.Keyword(null,"z-count","z-count",1773219834).cljs$core$IFn$_invoke$arity$1(G__35530),new cljs.core.Keyword(null,"z-val-inc","z-val-inc",740266442).cljs$core$IFn$_invoke$arity$1(G__35530),new cljs.core.Keyword(null,"spike-mag","spike-mag",460533094).cljs$core$IFn$_invoke$arity$1(G__35530),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__35530),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__35530),new cljs.core.Keyword(null,"size-start","size-start",-1085202492).cljs$core$IFn$_invoke$arity$1(G__35530),new cljs.core.Keyword(null,"size-end","size-end",752731653).cljs$core$IFn$_invoke$arity$1(G__35530),new cljs.core.Keyword(null,"size-inc","size-inc",-417901586).cljs$core$IFn$_invoke$arity$1(G__35530),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

adarsh_quil.bubble.profile_bubble_img = (function adarsh_quil$bubble$profile_bubble_img(weight,p__35563){
var vec__35564 = p__35563;
var width = cljs.core.nth.call(null,vec__35564,(0),null);
var height = cljs.core.nth.call(null,vec__35564,(1),null);
var profile_img_url = "img/profile.jpeg";
var z_count = (100);
var z_val_inc = 0.05;
var spike_mag = (50);
var points = (100);
var speed = 0.05;
var size_start = (50);
var size_end = (8);
var size_inc = (2);
return (new adarsh_quil.bubble.Bubble_Image(weight,quil.core.create_graphics.call(null,width,height),quil.core.load_image.call(null,profile_img_url),cljs.core.doall.call(null,cljs.core.map.call(null,((function (profile_img_url,z_count,z_val_inc,spike_mag,points,speed,size_start,size_end,size_inc,vec__35564,width,height){
return (function (p1__35562_SHARP_){
return adarsh_quil.bubble.frame_mask.call(null,Math.round(width),Math.round(height),(p1__35562_SHARP_ * z_val_inc),spike_mag);
});})(profile_img_url,z_count,z_val_inc,spike_mag,points,speed,size_start,size_end,size_inc,vec__35564,width,height))
,cljs.core.range.call(null,z_count))),z_count,z_val_inc,spike_mag,points,speed,size_start,size_end,size_inc,null,null,null));
});

//# sourceMappingURL=bubble.js.map?rel=1612340014170
