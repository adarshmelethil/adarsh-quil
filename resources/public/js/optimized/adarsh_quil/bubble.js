// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('adarsh_quil.bubble');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('adarsh_quil.common');
goog.require('adarsh_quil.utils');
adarsh_quil.bubble.process_img_once = (function adarsh_quil$bubble$process_img_once(img,width,height,spike_mag){
quil.core.resize(img,width,height);

return img;
});
adarsh_quil.bubble.frame_mask = (function adarsh_quil$bubble$frame_mask(width,height,z_val,spike_mag){
var mask = quil.core.create_image(width,height);
var mask_px = quil.core.pixels.cljs$core$IFn$_invoke$arity$1(mask);
var hw = (width / (2));
var hh = (height / (2));
var r = ((function (){var x__4222__auto__ = hw;
var y__4223__auto__ = hh;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})() - (spike_mag / (2)));
var n__4607__auto___6850 = width;
var x_6851 = (0);
while(true){
if((x_6851 < n__4607__auto___6850)){
var n__4607__auto___6852__$1 = height;
var y_6853 = (0);
while(true){
if((y_6853 < n__4607__auto___6852__$1)){
var xx_6854 = (x_6851 - hw);
var yy_6855 = (y_6853 - hh);
var angle_6856 = Math.atan2(yy_6855,xx_6854);
var noise_circle_radius_6857 = (4);
var x_point_on_circle_6858 = (noise_circle_radius_6857 + (noise_circle_radius_6857 * Math.cos(angle_6856)));
var y_point_on_circle_6859 = (noise_circle_radius_6857 + (noise_circle_radius_6857 * Math.sin(angle_6856)));
var noise_6860 = (spike_mag * quil.core.noise.cljs$core$IFn$_invoke$arity$3(x_point_on_circle_6858,y_point_on_circle_6859,z_val));
var spike_r_6861 = (function (){var G__6848 = (noise_6860 + r);
var G__6849 = (2);
return Math.pow(G__6848,G__6849);
})();
if(((Math.pow(xx_6854,(2)) + Math.pow(yy_6855,(2))) < spike_r_6861)){
(mask_px[(((3) + ((4) * x_6851)) + (y_6853 * ((4) * width)))] = (255));
} else {
}

var G__6862 = (y_6853 + (1));
y_6853 = G__6862;
continue;
} else {
}
break;
}

var G__6863 = (x_6851 + (1));
x_6851 = G__6863;
continue;
} else {
}
break;
}

quil.core.update_pixels.cljs$core$IFn$_invoke$arity$1(mask);

return mask;
});
adarsh_quil.bubble.apply_frame = (function adarsh_quil$bubble$apply_frame(img,frame){
var width = img.width;
var height = img.height;
var new_img = quil.core.create_image(width,height);
quil.core.copy.cljs$core$IFn$_invoke$arity$4(img,new_img,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),width,height], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),width,height], null));

quil.core.mask_image.cljs$core$IFn$_invoke$arity$2(new_img,frame);

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

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k6866,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__6870 = k6866;
var G__6870__$1 = (((G__6870 instanceof cljs.core.Keyword))?G__6870.fqn:null);
switch (G__6870__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6866,else__4388__auto__);

}
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__6871){
var vec__6872 = p__6871;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6872,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6872,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#adarsh-quil.bubble.Bubble-Image{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$weight,self__.weight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$graphic,self__.graphic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$img,self__.img],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$frames,self__.frames],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$z_DASH_count,self__.z_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$z_DASH_val_DASH_inc,self__.z_val_inc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$spike_DASH_mag,self__.spike_mag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$points,self__.points],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$speed,self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$size_DASH_start,self__.size_start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$size_DASH_end,self__.size_end],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$size_DASH_inc,self__.size_inc],null))], null),self__.__extmap));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6865){
var self__ = this;
var G__6865__$1 = this;
return (new cljs.core.RecordIter((0),G__6865__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weight,cljs.core.cst$kw$graphic,cljs.core.cst$kw$img,cljs.core.cst$kw$frames,cljs.core.cst$kw$z_DASH_count,cljs.core.cst$kw$z_DASH_val_DASH_inc,cljs.core.cst$kw$spike_DASH_mag,cljs.core.cst$kw$points,cljs.core.cst$kw$speed,cljs.core.cst$kw$size_DASH_start,cljs.core.cst$kw$size_DASH_end,cljs.core.cst$kw$size_DASH_inc], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (12 + cljs.core.count(self__.__extmap));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__6875 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1711428453 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__6875(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6867,other6868){
var self__ = this;
var this6867__$1 = this;
return (((!((other6868 == null)))) && ((this6867__$1.constructor === other6868.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6867__$1.weight,other6868.weight)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6867__$1.graphic,other6868.graphic)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6867__$1.img,other6868.img)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6867__$1.frames,other6868.frames)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6867__$1.z_count,other6868.z_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6867__$1.z_val_inc,other6868.z_val_inc)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6867__$1.spike_mag,other6868.spike_mag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6867__$1.points,other6868.points)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6867__$1.speed,other6868.speed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6867__$1.size_start,other6868.size_start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6867__$1.size_end,other6868.size_end)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6867__$1.size_inc,other6868.size_inc)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6867__$1.__extmap,other6868.__extmap)));
});

adarsh_quil.bubble.Bubble_Image.prototype.adarsh_quil$common$Drawable$ = cljs.core.PROTOCOL_SENTINEL;

adarsh_quil.bubble.Bubble_Image.prototype.adarsh_quil$common$Drawable$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(this$__$1,cljs.core.cst$kw$step)){
var width = self__.graphic.width;
var height = self__.graphic.height;
var hw = (width / (2));
var hh = (height / (2));
var map__6876 = this$__$1;
var map__6876__$1 = (((((!((map__6876 == null))))?(((((map__6876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6876):map__6876);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6876__$1,cljs.core.cst$kw$raw);
var frame_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6876__$1,cljs.core.cst$kw$frame_DASH_index);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6876__$1,cljs.core.cst$kw$size);
var gr__6461__auto___6915 = raw;
var _STAR_graphics_STAR__orig_val__6878_6916 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__6879_6917 = gr__6461__auto___6915;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__6879_6917;

try{quil.core.begin_draw(gr__6461__auto___6915);

quil.core.no_stroke();

if(cljs.core.not(this$__$1.adarsh_quil$common$Drawable$done_QMARK_$arity$1(null))){
var n__4607__auto___6918 = self__.points;
var __6919 = (0);
while(true){
if((__6919 < n__4607__auto___6918)){
var x_6920 = (hw + (hw * quil.core.random_gaussian()));
var y_6921 = (hh + (hh * quil.core.random_gaussian()));
var fill__6431__auto___6922 = quil.core.get_pixel.cljs$core$IFn$_invoke$arity$3(self__.img,x_6920,y_6921);
var previous_fill__6432__auto___6923 = quil.core.current_fill();
if(cljs.core.sequential_QMARK_(fill__6431__auto___6922)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,fill__6431__auto___6922);
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(fill__6431__auto___6922);

}

var return_val__6433__auto___6924 = quil.core.ellipse(x_6920,y_6921,size,size);
if((previous_fill__6432__auto___6923 == null)){
quil.core.no_fill();
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(previous_fill__6432__auto___6923);
}


var G__6925 = (__6919 + (1));
__6919 = G__6925;
continue;
} else {
}
break;
}
} else {
}

quil.core.end_draw(gr__6461__auto___6915);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__6878_6916;
}
var gr__6461__auto__ = self__.graphic;
var _STAR_graphics_STAR__orig_val__6880 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__6881 = gr__6461__auto__;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__6881;

try{quil.core.begin_draw(gr__6461__auto__);

quil.core.clear();

quil.core.image.cljs$core$IFn$_invoke$arity$3(adarsh_quil.bubble.apply_frame(raw,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.frames,frame_index)),(0),(0));

return quil.core.end_draw(gr__6461__auto__);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__6880;
}} else {
return null;
}
});

adarsh_quil.bubble.Bubble_Image.prototype.adarsh_quil$common$Drawable$next_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var width = self__.graphic.width;
var height = self__.graphic.height;
if(cljs.core.truth_((function (){var and__4120__auto__ = quil.core.loaded_QMARK_(self__.img);
if(cljs.core.truth_(and__4120__auto__)){
return (((self__.img.width > (1))) && ((!(cljs.core.contains_QMARK_(this$__$1,cljs.core.cst$kw$step)))));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$1,cljs.core.cst$kw$ps,adarsh_quil.bubble.process_img_once(self__.img,width,height,self__.spike_mag),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$frame_DASH_index,(0),cljs.core.cst$kw$frame_DASH_inc,(1),cljs.core.cst$kw$raw,quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2(width,height),cljs.core.cst$kw$size,self__.size_start,cljs.core.cst$kw$step,0.0], 0));
} else {
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(((((cljs.core.contains_QMARK_(this$__$1,cljs.core.cst$kw$step)) && (cljs.core.not(this$__$1.adarsh_quil$common$Drawable$done_QMARK_$arity$1(null)))))?(function (){var map__6883 = this$__$1;
var map__6883__$1 = (((((!((map__6883 == null))))?(((((map__6883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6883):map__6883);
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6883__$1,cljs.core.cst$kw$step);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6883__$1,cljs.core.cst$kw$size);
if((step > 1.0)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$1,cljs.core.cst$kw$step,0.0,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$size,(function (){var x__4219__auto__ = self__.size_end;
var y__4220__auto__ = (size - self__.size_inc);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()], 0));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$step,((function (map__6883,map__6883__$1,step,size,width,height,this$__$1){
return (function (p1__6864_SHARP_){
var x__4222__auto__ = 1.1;
var y__4223__auto__ = (p1__6864_SHARP_ + self__.speed);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(map__6883,map__6883__$1,step,size,width,height,this$__$1))
);
}
})():this$__$1),cljs.core.cst$kw$frame_DASH_index,(cljs.core.cst$kw$frame_DASH_index.cljs$core$IFn$_invoke$arity$1(this$__$1) + cljs.core.cst$kw$frame_DASH_inc.cljs$core$IFn$_invoke$arity$1(this$__$1)));
var map__6882 = new_state;
var map__6882__$1 = (((((!((map__6882 == null))))?(((((map__6882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6882):map__6882);
var frame_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6882__$1,cljs.core.cst$kw$frame_DASH_index);
var frame_inc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6882__$1,cljs.core.cst$kw$frame_DASH_inc);
if((!(((((0) < frame_index)) && ((frame_index < (self__.z_count - (1)))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$frame_DASH_inc,((-1) * frame_inc));
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
return ((cljs.core.contains_QMARK_(this$__$1,cljs.core.cst$kw$step)) && ((cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(this$__$1) > (1))) && ((cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(this$__$1) <= self__.size_end)));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [cljs.core.cst$kw$size_DASH_start,null,cljs.core.cst$kw$size_DASH_end,null,cljs.core.cst$kw$spike_DASH_mag,null,cljs.core.cst$kw$speed,null,cljs.core.cst$kw$frames,null,cljs.core.cst$kw$z_DASH_val_DASH_inc,null,cljs.core.cst$kw$points,null,cljs.core.cst$kw$size_DASH_inc,null,cljs.core.cst$kw$graphic,null,cljs.core.cst$kw$weight,null,cljs.core.cst$kw$z_DASH_count,null,cljs.core.cst$kw$img,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__6865){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__6886 = cljs.core.keyword_identical_QMARK_;
var expr__6887 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__6889 = cljs.core.cst$kw$weight;
var G__6890 = expr__6887;
return (pred__6886.cljs$core$IFn$_invoke$arity$2 ? pred__6886.cljs$core$IFn$_invoke$arity$2(G__6889,G__6890) : pred__6886.call(null,G__6889,G__6890));
})())){
return (new adarsh_quil.bubble.Bubble_Image(G__6865,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6891 = cljs.core.cst$kw$graphic;
var G__6892 = expr__6887;
return (pred__6886.cljs$core$IFn$_invoke$arity$2 ? pred__6886.cljs$core$IFn$_invoke$arity$2(G__6891,G__6892) : pred__6886.call(null,G__6891,G__6892));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,G__6865,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6893 = cljs.core.cst$kw$img;
var G__6894 = expr__6887;
return (pred__6886.cljs$core$IFn$_invoke$arity$2 ? pred__6886.cljs$core$IFn$_invoke$arity$2(G__6893,G__6894) : pred__6886.call(null,G__6893,G__6894));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,G__6865,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6895 = cljs.core.cst$kw$frames;
var G__6896 = expr__6887;
return (pred__6886.cljs$core$IFn$_invoke$arity$2 ? pred__6886.cljs$core$IFn$_invoke$arity$2(G__6895,G__6896) : pred__6886.call(null,G__6895,G__6896));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,G__6865,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6897 = cljs.core.cst$kw$z_DASH_count;
var G__6898 = expr__6887;
return (pred__6886.cljs$core$IFn$_invoke$arity$2 ? pred__6886.cljs$core$IFn$_invoke$arity$2(G__6897,G__6898) : pred__6886.call(null,G__6897,G__6898));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,G__6865,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6899 = cljs.core.cst$kw$z_DASH_val_DASH_inc;
var G__6900 = expr__6887;
return (pred__6886.cljs$core$IFn$_invoke$arity$2 ? pred__6886.cljs$core$IFn$_invoke$arity$2(G__6899,G__6900) : pred__6886.call(null,G__6899,G__6900));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,G__6865,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6901 = cljs.core.cst$kw$spike_DASH_mag;
var G__6902 = expr__6887;
return (pred__6886.cljs$core$IFn$_invoke$arity$2 ? pred__6886.cljs$core$IFn$_invoke$arity$2(G__6901,G__6902) : pred__6886.call(null,G__6901,G__6902));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,G__6865,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6903 = cljs.core.cst$kw$points;
var G__6904 = expr__6887;
return (pred__6886.cljs$core$IFn$_invoke$arity$2 ? pred__6886.cljs$core$IFn$_invoke$arity$2(G__6903,G__6904) : pred__6886.call(null,G__6903,G__6904));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,G__6865,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6905 = cljs.core.cst$kw$speed;
var G__6906 = expr__6887;
return (pred__6886.cljs$core$IFn$_invoke$arity$2 ? pred__6886.cljs$core$IFn$_invoke$arity$2(G__6905,G__6906) : pred__6886.call(null,G__6905,G__6906));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,G__6865,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6907 = cljs.core.cst$kw$size_DASH_start;
var G__6908 = expr__6887;
return (pred__6886.cljs$core$IFn$_invoke$arity$2 ? pred__6886.cljs$core$IFn$_invoke$arity$2(G__6907,G__6908) : pred__6886.call(null,G__6907,G__6908));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,G__6865,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6909 = cljs.core.cst$kw$size_DASH_end;
var G__6910 = expr__6887;
return (pred__6886.cljs$core$IFn$_invoke$arity$2 ? pred__6886.cljs$core$IFn$_invoke$arity$2(G__6909,G__6910) : pred__6886.call(null,G__6909,G__6910));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,G__6865,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6911 = cljs.core.cst$kw$size_DASH_inc;
var G__6912 = expr__6887;
return (pred__6886.cljs$core$IFn$_invoke$arity$2 ? pred__6886.cljs$core$IFn$_invoke$arity$2(G__6911,G__6912) : pred__6886.call(null,G__6911,G__6912));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,G__6865,self__.__meta,self__.__extmap,null));
} else {
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__6865),null));
}
}
}
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
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$weight,self__.weight,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$graphic,self__.graphic,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$img,self__.img,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$frames,self__.frames,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$z_DASH_count,self__.z_count,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$z_DASH_val_DASH_inc,self__.z_val_inc,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$spike_DASH_mag,self__.spike_mag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$points,self__.points,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$speed,self__.speed,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$size_DASH_start,self__.size_start,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$size_DASH_end,self__.size_end,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$size_DASH_inc,self__.size_inc,null))], null),self__.__extmap));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__6865){
var self__ = this;
var this__4384__auto____$1 = this;
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.frames,self__.z_count,self__.z_val_inc,self__.spike_mag,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,G__6865,self__.__extmap,self__.__hash));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

adarsh_quil.bubble.Bubble_Image.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$weight,cljs.core.cst$sym$graphic,cljs.core.cst$sym$img,cljs.core.cst$sym$frames,cljs.core.cst$sym$z_DASH_count,cljs.core.cst$sym$z_DASH_val_DASH_inc,cljs.core.cst$sym$spike_DASH_mag,cljs.core.cst$sym$points,cljs.core.cst$sym$speed,cljs.core.cst$sym$size_DASH_start,cljs.core.cst$sym$size_DASH_end,cljs.core.cst$sym$size_DASH_inc], null);
});

adarsh_quil.bubble.Bubble_Image.cljs$lang$type = true;

adarsh_quil.bubble.Bubble_Image.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"adarsh-quil.bubble/Bubble-Image",null,(1),null));
});

adarsh_quil.bubble.Bubble_Image.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"adarsh-quil.bubble/Bubble-Image");
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
adarsh_quil.bubble.map__GT_Bubble_Image = (function adarsh_quil$bubble$map__GT_Bubble_Image(G__6869){
var extmap__4424__auto__ = (function (){var G__6913 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6869,cljs.core.cst$kw$weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$graphic,cljs.core.cst$kw$img,cljs.core.cst$kw$frames,cljs.core.cst$kw$z_DASH_count,cljs.core.cst$kw$z_DASH_val_DASH_inc,cljs.core.cst$kw$spike_DASH_mag,cljs.core.cst$kw$points,cljs.core.cst$kw$speed,cljs.core.cst$kw$size_DASH_start,cljs.core.cst$kw$size_DASH_end,cljs.core.cst$kw$size_DASH_inc], 0));
if(cljs.core.record_QMARK_(G__6869)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6913);
} else {
return G__6913;
}
})();
return (new adarsh_quil.bubble.Bubble_Image(cljs.core.cst$kw$weight.cljs$core$IFn$_invoke$arity$1(G__6869),cljs.core.cst$kw$graphic.cljs$core$IFn$_invoke$arity$1(G__6869),cljs.core.cst$kw$img.cljs$core$IFn$_invoke$arity$1(G__6869),cljs.core.cst$kw$frames.cljs$core$IFn$_invoke$arity$1(G__6869),cljs.core.cst$kw$z_DASH_count.cljs$core$IFn$_invoke$arity$1(G__6869),cljs.core.cst$kw$z_DASH_val_DASH_inc.cljs$core$IFn$_invoke$arity$1(G__6869),cljs.core.cst$kw$spike_DASH_mag.cljs$core$IFn$_invoke$arity$1(G__6869),cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(G__6869),cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(G__6869),cljs.core.cst$kw$size_DASH_start.cljs$core$IFn$_invoke$arity$1(G__6869),cljs.core.cst$kw$size_DASH_end.cljs$core$IFn$_invoke$arity$1(G__6869),cljs.core.cst$kw$size_DASH_inc.cljs$core$IFn$_invoke$arity$1(G__6869),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

adarsh_quil.bubble.profile_bubble_img = (function adarsh_quil$bubble$profile_bubble_img(weight,p__6927){
var vec__6928 = p__6927;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6928,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6928,(1),null);
var profile_img_url = "img/profile.jpeg";
var z_count = (100);
var z_val_inc = 0.05;
var spike_mag = (50);
var points = (100);
var speed = 0.05;
var size_start = (50);
var size_end = (8);
var size_inc = (2);
return (new adarsh_quil.bubble.Bubble_Image(weight,quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2(width,height),quil.core.load_image(profile_img_url),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (profile_img_url,z_count,z_val_inc,spike_mag,points,speed,size_start,size_end,size_inc,vec__6928,width,height){
return (function (p1__6926_SHARP_){
return adarsh_quil.bubble.frame_mask(Math.round(width),Math.round(height),(p1__6926_SHARP_ * z_val_inc),spike_mag);
});})(profile_img_url,z_count,z_val_inc,spike_mag,points,speed,size_start,size_end,size_inc,vec__6928,width,height))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(z_count))),z_count,z_val_inc,spike_mag,points,speed,size_start,size_end,size_inc,null,null,null));
});
