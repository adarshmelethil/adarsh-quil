// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('adarsh_quil.perlin_wave');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('adarsh_quil.common');
goog.require('adarsh_quil.utils');
adarsh_quil.perlin_wave.value_palette = (function adarsh_quil$perlin_wave$value_palette(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6671 = arguments.length;
var i__4731__auto___6672 = (0);
while(true){
if((i__4731__auto___6672 < len__4730__auto___6671)){
args__4736__auto__.push((arguments[i__4731__auto___6672]));

var G__6673 = (i__4731__auto___6672 + (1));
i__4731__auto___6672 = G__6673;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return adarsh_quil.perlin_wave.value_palette.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

adarsh_quil.perlin_wave.value_palette.cljs$core$IFn$_invoke$arity$variadic = (function (colors_values){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(cljs.core.count(colors_values),(2)),(0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6669_SHARP_){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__6669_SHARP_),cljs.core.second(p1__6669_SHARP_));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),colors_values)));
} else {
throw (new Error("color-picker requires even args"));
}
});

adarsh_quil.perlin_wave.value_palette.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
adarsh_quil.perlin_wave.value_palette.cljs$lang$applyTo = (function (seq6670){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6670));
});

adarsh_quil.perlin_wave.random_point = (function adarsh_quil$perlin_wave$random_point(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.random.cljs$core$IFn$_invoke$arity$2((0),quil.core.width()) + (quil.core.width() / (2))),(quil.core.random.cljs$core$IFn$_invoke$arity$2((0),quil.core.height()) + (quil.core.height() / (2)))], null);
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
adarsh_quil.perlin_wave.Particle = (function (world_size,pos,dir,vel,speed,radius,color,noise_scale,new_pos_func,__meta,__extmap,__hash){
this.world_size = world_size;
this.pos = pos;
this.dir = dir;
this.vel = vel;
this.speed = speed;
this.radius = radius;
this.color = color;
this.noise_scale = noise_scale;
this.new_pos_func = new_pos_func;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
adarsh_quil.perlin_wave.Particle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k6676,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__6680 = k6676;
var G__6680__$1 = (((G__6680 instanceof cljs.core.Keyword))?G__6680.fqn:null);
switch (G__6680__$1) {
case "world-size":
return self__.world_size;

break;
case "pos":
return self__.pos;

break;
case "dir":
return self__.dir;

break;
case "vel":
return self__.vel;

break;
case "speed":
return self__.speed;

break;
case "radius":
return self__.radius;

break;
case "color":
return self__.color;

break;
case "noise-scale":
return self__.noise_scale;

break;
case "new-pos-func":
return self__.new_pos_func;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6676,else__4388__auto__);

}
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__6681){
var vec__6682 = p__6681;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6682,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6682,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#adarsh-quil.perlin-wave.Particle{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$world_DASH_size,self__.world_size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dir,self__.dir],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vel,self__.vel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$speed,self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$radius,self__.radius],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$color,self__.color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$noise_DASH_scale,self__.noise_scale],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$new_DASH_pos_DASH_func,self__.new_pos_func],null))], null),self__.__extmap));
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6675){
var self__ = this;
var G__6675__$1 = this;
return (new cljs.core.RecordIter((0),G__6675__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$world_DASH_size,cljs.core.cst$kw$pos,cljs.core.cst$kw$dir,cljs.core.cst$kw$vel,cljs.core.cst$kw$speed,cljs.core.cst$kw$radius,cljs.core.cst$kw$color,cljs.core.cst$kw$noise_DASH_scale,cljs.core.cst$kw$new_DASH_pos_DASH_func], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,self__.__hash));
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (9 + cljs.core.count(self__.__extmap));
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__6685 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (235604254 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__6685(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6677,other6678){
var self__ = this;
var this6677__$1 = this;
return (((!((other6678 == null)))) && ((this6677__$1.constructor === other6678.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6677__$1.world_size,other6678.world_size)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6677__$1.pos,other6678.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6677__$1.dir,other6678.dir)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6677__$1.vel,other6678.vel)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6677__$1.speed,other6678.speed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6677__$1.radius,other6678.radius)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6677__$1.color,other6678.color)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6677__$1.noise_scale,other6678.noise_scale)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6677__$1.new_pos_func,other6678.new_pos_func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6677__$1.__extmap,other6678.__extmap)));
});

adarsh_quil.perlin_wave.Particle.prototype.adarsh_quil$common$Drawable$ = cljs.core.PROTOCOL_SENTINEL;

adarsh_quil.perlin_wave.Particle.prototype.adarsh_quil$common$Drawable$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__6686 = self__.pos;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6686,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6686,(1),null);
quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$1(self__.color);

return quil.core.ellipse(x,y,self__.radius,self__.radius);
});

adarsh_quil.perlin_wave.Particle.prototype.adarsh_quil$common$Drawable$next_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__6689 = self__.dir;
var dir_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6689,(0),null);
var dir_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6689,(1),null);
var vec__6692 = self__.vel;
var vel_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6692,(0),null);
var vel_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6692,(1),null);
var vec__6695 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__6689,dir_x,dir_y,vec__6692,vel_x,vel_y,this$__$1){
return (function (p1__6674_SHARP_){
return (p1__6674_SHARP_ / self__.noise_scale);
});})(vec__6689,dir_x,dir_y,vec__6692,vel_x,vel_y,this$__$1))
,self__.pos));
var noise_scaled_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6695,(0),null);
var noise_scaled_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6695,(1),null);
var noise = quil.core.noise.cljs$core$IFn$_invoke$arity$2(noise_scaled_x,noise_scaled_y);
var new_angle = (noise * quil.core.TWO_PI);
var new_dir = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.cos(new_angle),quil.core.sin(new_angle)], null);
var new_vel = adarsh_quil.utils.elem_mult.cljs$core$IFn$_invoke$arity$variadic(new_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.speed], 0));
var new_pos = adarsh_quil.utils.vec_add(self__.pos,new_vel);
var screen_offset = ((1) + ((2) * self__.radius));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$1,cljs.core.cst$kw$dir,self__.dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$vel,self__.vel,cljs.core.cst$kw$pos,((adarsh_quil.utils.hit_edge_QMARK_(self__.world_size,new_pos,screen_offset))?(self__.new_pos_func.cljs$core$IFn$_invoke$arity$2 ? self__.new_pos_func.cljs$core$IFn$_invoke$arity$2(self__.world_size,screen_offset) : self__.new_pos_func.call(null,self__.world_size,screen_offset)):new_pos)], 0));
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$color,null,cljs.core.cst$kw$dir,null,cljs.core.cst$kw$speed,null,cljs.core.cst$kw$new_DASH_pos_DASH_func,null,cljs.core.cst$kw$pos,null,cljs.core.cst$kw$radius,null,cljs.core.cst$kw$noise_DASH_scale,null,cljs.core.cst$kw$world_DASH_size,null,cljs.core.cst$kw$vel,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__6675){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__6698 = cljs.core.keyword_identical_QMARK_;
var expr__6699 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__6701 = cljs.core.cst$kw$world_DASH_size;
var G__6702 = expr__6699;
return (pred__6698.cljs$core$IFn$_invoke$arity$2 ? pred__6698.cljs$core$IFn$_invoke$arity$2(G__6701,G__6702) : pred__6698.call(null,G__6701,G__6702));
})())){
return (new adarsh_quil.perlin_wave.Particle(G__6675,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6703 = cljs.core.cst$kw$pos;
var G__6704 = expr__6699;
return (pred__6698.cljs$core$IFn$_invoke$arity$2 ? pred__6698.cljs$core$IFn$_invoke$arity$2(G__6703,G__6704) : pred__6698.call(null,G__6703,G__6704));
})())){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,G__6675,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6705 = cljs.core.cst$kw$dir;
var G__6706 = expr__6699;
return (pred__6698.cljs$core$IFn$_invoke$arity$2 ? pred__6698.cljs$core$IFn$_invoke$arity$2(G__6705,G__6706) : pred__6698.call(null,G__6705,G__6706));
})())){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,G__6675,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6707 = cljs.core.cst$kw$vel;
var G__6708 = expr__6699;
return (pred__6698.cljs$core$IFn$_invoke$arity$2 ? pred__6698.cljs$core$IFn$_invoke$arity$2(G__6707,G__6708) : pred__6698.call(null,G__6707,G__6708));
})())){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,G__6675,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6709 = cljs.core.cst$kw$speed;
var G__6710 = expr__6699;
return (pred__6698.cljs$core$IFn$_invoke$arity$2 ? pred__6698.cljs$core$IFn$_invoke$arity$2(G__6709,G__6710) : pred__6698.call(null,G__6709,G__6710));
})())){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,G__6675,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6711 = cljs.core.cst$kw$radius;
var G__6712 = expr__6699;
return (pred__6698.cljs$core$IFn$_invoke$arity$2 ? pred__6698.cljs$core$IFn$_invoke$arity$2(G__6711,G__6712) : pred__6698.call(null,G__6711,G__6712));
})())){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,G__6675,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6713 = cljs.core.cst$kw$color;
var G__6714 = expr__6699;
return (pred__6698.cljs$core$IFn$_invoke$arity$2 ? pred__6698.cljs$core$IFn$_invoke$arity$2(G__6713,G__6714) : pred__6698.call(null,G__6713,G__6714));
})())){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,G__6675,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6715 = cljs.core.cst$kw$noise_DASH_scale;
var G__6716 = expr__6699;
return (pred__6698.cljs$core$IFn$_invoke$arity$2 ? pred__6698.cljs$core$IFn$_invoke$arity$2(G__6715,G__6716) : pred__6698.call(null,G__6715,G__6716));
})())){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,G__6675,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6717 = cljs.core.cst$kw$new_DASH_pos_DASH_func;
var G__6718 = expr__6699;
return (pred__6698.cljs$core$IFn$_invoke$arity$2 ? pred__6698.cljs$core$IFn$_invoke$arity$2(G__6717,G__6718) : pred__6698.call(null,G__6717,G__6718));
})())){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,G__6675,self__.__meta,self__.__extmap,null));
} else {
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__6675),null));
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

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$world_DASH_size,self__.world_size,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pos,self__.pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$dir,self__.dir,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$vel,self__.vel,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$speed,self__.speed,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$radius,self__.radius,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$color,self__.color,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$noise_DASH_scale,self__.noise_scale,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$new_DASH_pos_DASH_func,self__.new_pos_func,null))], null),self__.__extmap));
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__6675){
var self__ = this;
var this__4384__auto____$1 = this;
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,G__6675,self__.__extmap,self__.__hash));
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

adarsh_quil.perlin_wave.Particle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$world_DASH_size,cljs.core.cst$sym$pos,cljs.core.cst$sym$dir,cljs.core.cst$sym$vel,cljs.core.cst$sym$speed,cljs.core.cst$sym$radius,cljs.core.cst$sym$color,cljs.core.cst$sym$noise_DASH_scale,cljs.core.cst$sym$new_DASH_pos_DASH_func], null);
});

adarsh_quil.perlin_wave.Particle.cljs$lang$type = true;

adarsh_quil.perlin_wave.Particle.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"adarsh-quil.perlin-wave/Particle",null,(1),null));
});

adarsh_quil.perlin_wave.Particle.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"adarsh-quil.perlin-wave/Particle");
});

/**
 * Positional factory function for adarsh-quil.perlin-wave/Particle.
 */
adarsh_quil.perlin_wave.__GT_Particle = (function adarsh_quil$perlin_wave$__GT_Particle(world_size,pos,dir,vel,speed,radius,color,noise_scale,new_pos_func){
return (new adarsh_quil.perlin_wave.Particle(world_size,pos,dir,vel,speed,radius,color,noise_scale,new_pos_func,null,null,null));
});

/**
 * Factory function for adarsh-quil.perlin-wave/Particle, taking a map of keywords to field values.
 */
adarsh_quil.perlin_wave.map__GT_Particle = (function adarsh_quil$perlin_wave$map__GT_Particle(G__6679){
var extmap__4424__auto__ = (function (){var G__6719 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6679,cljs.core.cst$kw$world_DASH_size,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pos,cljs.core.cst$kw$dir,cljs.core.cst$kw$vel,cljs.core.cst$kw$speed,cljs.core.cst$kw$radius,cljs.core.cst$kw$color,cljs.core.cst$kw$noise_DASH_scale,cljs.core.cst$kw$new_DASH_pos_DASH_func], 0));
if(cljs.core.record_QMARK_(G__6679)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6719);
} else {
return G__6719;
}
})();
return (new adarsh_quil.perlin_wave.Particle(cljs.core.cst$kw$world_DASH_size.cljs$core$IFn$_invoke$arity$1(G__6679),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__6679),cljs.core.cst$kw$dir.cljs$core$IFn$_invoke$arity$1(G__6679),cljs.core.cst$kw$vel.cljs$core$IFn$_invoke$arity$1(G__6679),cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(G__6679),cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(G__6679),cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(G__6679),cljs.core.cst$kw$noise_DASH_scale.cljs$core$IFn$_invoke$arity$1(G__6679),cljs.core.cst$kw$new_DASH_pos_DASH_func.cljs$core$IFn$_invoke$arity$1(G__6679),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

adarsh_quil.perlin_wave.make_particles = (function adarsh_quil$perlin_wave$make_particles(world_size,num_of_particles,colors,sizes,speeds,random_position_func){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){
return (new adarsh_quil.perlin_wave.Particle(world_size,(random_position_func.cljs$core$IFn$_invoke$arity$2 ? random_position_func.cljs$core$IFn$_invoke$arity$2(world_size,(0)) : random_position_func.call(null,world_size,(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.rand_nth(speeds),cljs.core.rand_nth(sizes),cljs.core.rand_nth(colors),(600),random_position_func,null,null,null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_of_particles));
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
adarsh_quil.perlin_wave.Perlin_Wave = (function (weight,graphic,particles,__meta,__extmap,__hash){
this.weight = weight;
this.graphic = graphic;
this.particles = particles;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k6722,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__6726 = k6722;
var G__6726__$1 = (((G__6726 instanceof cljs.core.Keyword))?G__6726.fqn:null);
switch (G__6726__$1) {
case "weight":
return self__.weight;

break;
case "graphic":
return self__.graphic;

break;
case "particles":
return self__.particles;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6722,else__4388__auto__);

}
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__6727){
var vec__6728 = p__6727;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6728,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6728,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#adarsh-quil.perlin-wave.Perlin-Wave{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$weight,self__.weight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$graphic,self__.graphic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$particles,self__.particles],null))], null),self__.__extmap));
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6721){
var self__ = this;
var G__6721__$1 = this;
return (new cljs.core.RecordIter((0),G__6721__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weight,cljs.core.cst$kw$graphic,cljs.core.cst$kw$particles], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new adarsh_quil.perlin_wave.Perlin_Wave(self__.weight,self__.graphic,self__.particles,self__.__meta,self__.__extmap,self__.__hash));
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__6731 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-420013250 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__6731(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6723,other6724){
var self__ = this;
var this6723__$1 = this;
return (((!((other6724 == null)))) && ((this6723__$1.constructor === other6724.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6723__$1.weight,other6724.weight)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6723__$1.graphic,other6724.graphic)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6723__$1.particles,other6724.particles)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6723__$1.__extmap,other6724.__extmap)));
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.adarsh_quil$common$Drawable$ = cljs.core.PROTOCOL_SENTINEL;

adarsh_quil.perlin_wave.Perlin_Wave.prototype.adarsh_quil$common$Drawable$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var gr__6461__auto__ = self__.graphic;
var _STAR_graphics_STAR__orig_val__6732 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__6733 = gr__6461__auto__;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__6733;

try{quil.core.begin_draw(gr__6461__auto__);

var seq__6734_6749 = cljs.core.seq(self__.particles);
var chunk__6735_6750 = null;
var count__6736_6751 = (0);
var i__6737_6752 = (0);
while(true){
if((i__6737_6752 < count__6736_6751)){
var particle_6753 = chunk__6735_6750.cljs$core$IIndexed$_nth$arity$2(null,i__6737_6752);
adarsh_quil.common.render(particle_6753);


var G__6754 = seq__6734_6749;
var G__6755 = chunk__6735_6750;
var G__6756 = count__6736_6751;
var G__6757 = (i__6737_6752 + (1));
seq__6734_6749 = G__6754;
chunk__6735_6750 = G__6755;
count__6736_6751 = G__6756;
i__6737_6752 = G__6757;
continue;
} else {
var temp__5735__auto___6758 = cljs.core.seq(seq__6734_6749);
if(temp__5735__auto___6758){
var seq__6734_6759__$1 = temp__5735__auto___6758;
if(cljs.core.chunked_seq_QMARK_(seq__6734_6759__$1)){
var c__4550__auto___6760 = cljs.core.chunk_first(seq__6734_6759__$1);
var G__6761 = cljs.core.chunk_rest(seq__6734_6759__$1);
var G__6762 = c__4550__auto___6760;
var G__6763 = cljs.core.count(c__4550__auto___6760);
var G__6764 = (0);
seq__6734_6749 = G__6761;
chunk__6735_6750 = G__6762;
count__6736_6751 = G__6763;
i__6737_6752 = G__6764;
continue;
} else {
var particle_6765 = cljs.core.first(seq__6734_6759__$1);
adarsh_quil.common.render(particle_6765);


var G__6766 = cljs.core.next(seq__6734_6759__$1);
var G__6767 = null;
var G__6768 = (0);
var G__6769 = (0);
seq__6734_6749 = G__6766;
chunk__6735_6750 = G__6767;
count__6736_6751 = G__6768;
i__6737_6752 = G__6769;
continue;
}
} else {
}
}
break;
}

return quil.core.end_draw(gr__6461__auto__);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__6732;
}});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.adarsh_quil$common$Drawable$next_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$particles,cljs.core.map.cljs$core$IFn$_invoke$arity$2(adarsh_quil.common.next_state,self__.particles));
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.adarsh_quil$common$Drawable$weight$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.weight;
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.adarsh_quil$common$Drawable$done_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return true;
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$graphic,null,cljs.core.cst$kw$weight,null,cljs.core.cst$kw$particles,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new adarsh_quil.perlin_wave.Perlin_Wave(self__.weight,self__.graphic,self__.particles,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__6721){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__6738 = cljs.core.keyword_identical_QMARK_;
var expr__6739 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__6741 = cljs.core.cst$kw$weight;
var G__6742 = expr__6739;
return (pred__6738.cljs$core$IFn$_invoke$arity$2 ? pred__6738.cljs$core$IFn$_invoke$arity$2(G__6741,G__6742) : pred__6738.call(null,G__6741,G__6742));
})())){
return (new adarsh_quil.perlin_wave.Perlin_Wave(G__6721,self__.graphic,self__.particles,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6743 = cljs.core.cst$kw$graphic;
var G__6744 = expr__6739;
return (pred__6738.cljs$core$IFn$_invoke$arity$2 ? pred__6738.cljs$core$IFn$_invoke$arity$2(G__6743,G__6744) : pred__6738.call(null,G__6743,G__6744));
})())){
return (new adarsh_quil.perlin_wave.Perlin_Wave(self__.weight,G__6721,self__.particles,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6745 = cljs.core.cst$kw$particles;
var G__6746 = expr__6739;
return (pred__6738.cljs$core$IFn$_invoke$arity$2 ? pred__6738.cljs$core$IFn$_invoke$arity$2(G__6745,G__6746) : pred__6738.call(null,G__6745,G__6746));
})())){
return (new adarsh_quil.perlin_wave.Perlin_Wave(self__.weight,self__.graphic,G__6721,self__.__meta,self__.__extmap,null));
} else {
return (new adarsh_quil.perlin_wave.Perlin_Wave(self__.weight,self__.graphic,self__.particles,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__6721),null));
}
}
}
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$weight,self__.weight,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$graphic,self__.graphic,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$particles,self__.particles,null))], null),self__.__extmap));
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__6721){
var self__ = this;
var this__4384__auto____$1 = this;
return (new adarsh_quil.perlin_wave.Perlin_Wave(self__.weight,self__.graphic,self__.particles,G__6721,self__.__extmap,self__.__hash));
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

adarsh_quil.perlin_wave.Perlin_Wave.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$weight,cljs.core.cst$sym$graphic,cljs.core.cst$sym$particles], null);
});

adarsh_quil.perlin_wave.Perlin_Wave.cljs$lang$type = true;

adarsh_quil.perlin_wave.Perlin_Wave.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"adarsh-quil.perlin-wave/Perlin-Wave",null,(1),null));
});

adarsh_quil.perlin_wave.Perlin_Wave.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"adarsh-quil.perlin-wave/Perlin-Wave");
});

/**
 * Positional factory function for adarsh-quil.perlin-wave/Perlin-Wave.
 */
adarsh_quil.perlin_wave.__GT_Perlin_Wave = (function adarsh_quil$perlin_wave$__GT_Perlin_Wave(weight,graphic,particles){
return (new adarsh_quil.perlin_wave.Perlin_Wave(weight,graphic,particles,null,null,null));
});

/**
 * Factory function for adarsh-quil.perlin-wave/Perlin-Wave, taking a map of keywords to field values.
 */
adarsh_quil.perlin_wave.map__GT_Perlin_Wave = (function adarsh_quil$perlin_wave$map__GT_Perlin_Wave(G__6725){
var extmap__4424__auto__ = (function (){var G__6747 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6725,cljs.core.cst$kw$weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$graphic,cljs.core.cst$kw$particles], 0));
if(cljs.core.record_QMARK_(G__6725)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6747);
} else {
return G__6747;
}
})();
return (new adarsh_quil.perlin_wave.Perlin_Wave(cljs.core.cst$kw$weight.cljs$core$IFn$_invoke$arity$1(G__6725),cljs.core.cst$kw$graphic.cljs$core$IFn$_invoke$arity$1(G__6725),cljs.core.cst$kw$particles.cljs$core$IFn$_invoke$arity$1(G__6725),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

adarsh_quil.perlin_wave.background_colors = (function adarsh_quil$perlin_wave$background_colors(){
var light_blue = quil.core.color.cljs$core$IFn$_invoke$arity$3((98),(203),(231));
var light_teal = quil.core.color.cljs$core$IFn$_invoke$arity$3((181),(224),(211));
var light_purple = quil.core.color.cljs$core$IFn$_invoke$arity$3((158),(123),(184));
var dark_purple = quil.core.color.cljs$core$IFn$_invoke$arity$3((71),(41),(118));
return adarsh_quil.perlin_wave.value_palette.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(50),dark_purple,(50),light_purple,(25),light_teal,(25),light_blue], 0));
});
adarsh_quil.perlin_wave.background_sizes = (function adarsh_quil$perlin_wave$background_sizes(){
return adarsh_quil.perlin_wave.value_palette.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(10),(20),(50),(10),(40),(5),(200),(2)], 0));
});
adarsh_quil.perlin_wave.background_speeds = (function adarsh_quil$perlin_wave$background_speeds(){
return adarsh_quil.perlin_wave.value_palette.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(10),1.0,(30),0.8,(70),0.6], 0));
});
adarsh_quil.perlin_wave.background_new_position_func = adarsh_quil.utils.random_point_on_perimeter;
adarsh_quil.perlin_wave.background_perlin_wave = (function adarsh_quil$perlin_wave$background_perlin_wave(weight,world_size){
return (new adarsh_quil.perlin_wave.Perlin_Wave(weight,quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2(cljs.core.first(world_size),cljs.core.second(world_size)),adarsh_quil.perlin_wave.make_particles(world_size,(100),adarsh_quil.perlin_wave.background_colors(),adarsh_quil.perlin_wave.background_sizes(),adarsh_quil.perlin_wave.background_speeds(),adarsh_quil.perlin_wave.background_new_position_func),null,null,null));
});
