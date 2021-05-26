// Compiled by ClojureScript 1.10.520 {}
goog.provide('adarsh_quil.perlin_wave');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('adarsh_quil.common');
goog.require('adarsh_quil.utils');
adarsh_quil.perlin_wave.value_palette = (function adarsh_quil$perlin_wave$value_palette(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36133 = arguments.length;
var i__4731__auto___36134 = (0);
while(true){
if((i__4731__auto___36134 < len__4730__auto___36133)){
args__4736__auto__.push((arguments[i__4731__auto___36134]));

var G__36135 = (i__4731__auto___36134 + (1));
i__4731__auto___36134 = G__36135;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return adarsh_quil.perlin_wave.value_palette.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

adarsh_quil.perlin_wave.value_palette.cljs$core$IFn$_invoke$arity$variadic = (function (colors_values){
if(cljs.core._EQ_.call(null,cljs.core.mod.call(null,cljs.core.count.call(null,colors_values),(2)),(0))){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__36131_SHARP_){
return cljs.core.repeat.call(null,cljs.core.first.call(null,p1__36131_SHARP_),cljs.core.second.call(null,p1__36131_SHARP_));
}),cljs.core.partition.call(null,(2),colors_values)));
} else {
throw (new Error("color-picker requires even args"));
}
});

adarsh_quil.perlin_wave.value_palette.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
adarsh_quil.perlin_wave.value_palette.cljs$lang$applyTo = (function (seq36132){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36132));
});

adarsh_quil.perlin_wave.random_point = (function adarsh_quil$perlin_wave$random_point(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.random.call(null,(0),quil.core.width.call(null)) + (quil.core.width.call(null) / (2))),(quil.core.random.call(null,(0),quil.core.height.call(null)) + (quil.core.height.call(null) / (2)))], null);
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

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k36138,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__36142 = k36138;
var G__36142__$1 = (((G__36142 instanceof cljs.core.Keyword))?G__36142.fqn:null);
switch (G__36142__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k36138,else__4388__auto__);

}
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__36143){
var vec__36144 = p__36143;
var k__4408__auto__ = cljs.core.nth.call(null,vec__36144,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__36144,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#adarsh-quil.perlin-wave.Particle{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"world-size","world-size",-1891482119),self__.world_size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dir","dir",1734754661),self__.dir],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vel","vel",-110770822),self__.vel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"radius","radius",-2073122258),self__.radius],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color","color",1011675173),self__.color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"noise-scale","noise-scale",-2033475279),self__.noise_scale],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-pos-func","new-pos-func",-48173495),self__.new_pos_func],null))], null),self__.__extmap));
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36137){
var self__ = this;
var G__36137__$1 = this;
return (new cljs.core.RecordIter((0),G__36137__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-size","world-size",-1891482119),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"noise-scale","noise-scale",-2033475279),new cljs.core.Keyword(null,"new-pos-func","new-pos-func",-48173495)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (9 + cljs.core.count.call(null,self__.__extmap));
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (235604254 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36139,other36140){
var self__ = this;
var this36139__$1 = this;
return (((!((other36140 == null)))) && ((this36139__$1.constructor === other36140.constructor)) && (cljs.core._EQ_.call(null,this36139__$1.world_size,other36140.world_size)) && (cljs.core._EQ_.call(null,this36139__$1.pos,other36140.pos)) && (cljs.core._EQ_.call(null,this36139__$1.dir,other36140.dir)) && (cljs.core._EQ_.call(null,this36139__$1.vel,other36140.vel)) && (cljs.core._EQ_.call(null,this36139__$1.speed,other36140.speed)) && (cljs.core._EQ_.call(null,this36139__$1.radius,other36140.radius)) && (cljs.core._EQ_.call(null,this36139__$1.color,other36140.color)) && (cljs.core._EQ_.call(null,this36139__$1.noise_scale,other36140.noise_scale)) && (cljs.core._EQ_.call(null,this36139__$1.new_pos_func,other36140.new_pos_func)) && (cljs.core._EQ_.call(null,this36139__$1.__extmap,other36140.__extmap)));
});

adarsh_quil.perlin_wave.Particle.prototype.adarsh_quil$common$Drawable$ = cljs.core.PROTOCOL_SENTINEL;

adarsh_quil.perlin_wave.Particle.prototype.adarsh_quil$common$Drawable$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__36147 = self__.pos;
var x = cljs.core.nth.call(null,vec__36147,(0),null);
var y = cljs.core.nth.call(null,vec__36147,(1),null);
quil.core.no_stroke.call(null);

quil.core.fill.call(null,self__.color);

return quil.core.ellipse.call(null,x,y,self__.radius,self__.radius);
});

adarsh_quil.perlin_wave.Particle.prototype.adarsh_quil$common$Drawable$next_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__36150 = self__.dir;
var dir_x = cljs.core.nth.call(null,vec__36150,(0),null);
var dir_y = cljs.core.nth.call(null,vec__36150,(1),null);
var vec__36153 = self__.vel;
var vel_x = cljs.core.nth.call(null,vec__36153,(0),null);
var vel_y = cljs.core.nth.call(null,vec__36153,(1),null);
var vec__36156 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (vec__36150,dir_x,dir_y,vec__36153,vel_x,vel_y,this$__$1){
return (function (p1__36136_SHARP_){
return (p1__36136_SHARP_ / self__.noise_scale);
});})(vec__36150,dir_x,dir_y,vec__36153,vel_x,vel_y,this$__$1))
,self__.pos));
var noise_scaled_x = cljs.core.nth.call(null,vec__36156,(0),null);
var noise_scaled_y = cljs.core.nth.call(null,vec__36156,(1),null);
var noise = quil.core.noise.call(null,noise_scaled_x,noise_scaled_y);
var new_angle = (noise * quil.core.TWO_PI);
var new_dir = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.cos.call(null,new_angle),quil.core.sin.call(null,new_angle)], null);
var new_vel = adarsh_quil.utils.elem_mult.call(null,new_dir,self__.speed);
var new_pos = adarsh_quil.utils.vec_add.call(null,self__.pos,new_vel);
var screen_offset = ((1) + ((2) * self__.radius));
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"dir","dir",1734754661),self__.dir,new cljs.core.Keyword(null,"vel","vel",-110770822),self__.vel,new cljs.core.Keyword(null,"pos","pos",-864607220),((adarsh_quil.utils.hit_edge_QMARK_.call(null,self__.world_size,new_pos,screen_offset))?self__.new_pos_func.call(null,self__.world_size,screen_offset):new_pos));
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"dir","dir",1734754661),null,new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"new-pos-func","new-pos-func",-48173495),null,new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"radius","radius",-2073122258),null,new cljs.core.Keyword(null,"noise-scale","noise-scale",-2033475279),null,new cljs.core.Keyword(null,"world-size","world-size",-1891482119),null,new cljs.core.Keyword(null,"vel","vel",-110770822),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__36137){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__36159 = cljs.core.keyword_identical_QMARK_;
var expr__36160 = k__4393__auto__;
if(cljs.core.truth_(pred__36159.call(null,new cljs.core.Keyword(null,"world-size","world-size",-1891482119),expr__36160))){
return (new adarsh_quil.perlin_wave.Particle(G__36137,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36159.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__36160))){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,G__36137,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36159.call(null,new cljs.core.Keyword(null,"dir","dir",1734754661),expr__36160))){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,G__36137,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36159.call(null,new cljs.core.Keyword(null,"vel","vel",-110770822),expr__36160))){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,G__36137,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36159.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__36160))){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,G__36137,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36159.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258),expr__36160))){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,G__36137,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36159.call(null,new cljs.core.Keyword(null,"color","color",1011675173),expr__36160))){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,G__36137,self__.noise_scale,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36159.call(null,new cljs.core.Keyword(null,"noise-scale","noise-scale",-2033475279),expr__36160))){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,G__36137,self__.new_pos_func,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36159.call(null,new cljs.core.Keyword(null,"new-pos-func","new-pos-func",-48173495),expr__36160))){
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,G__36137,self__.__meta,self__.__extmap,null));
} else {
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__36137),null));
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
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"world-size","world-size",-1891482119),self__.world_size,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dir","dir",1734754661),self__.dir,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vel","vel",-110770822),self__.vel,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"radius","radius",-2073122258),self__.radius,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"color","color",1011675173),self__.color,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"noise-scale","noise-scale",-2033475279),self__.noise_scale,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"new-pos-func","new-pos-func",-48173495),self__.new_pos_func,null))], null),self__.__extmap));
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__36137){
var self__ = this;
var this__4384__auto____$1 = this;
return (new adarsh_quil.perlin_wave.Particle(self__.world_size,self__.pos,self__.dir,self__.vel,self__.speed,self__.radius,self__.color,self__.noise_scale,self__.new_pos_func,G__36137,self__.__extmap,self__.__hash));
});

adarsh_quil.perlin_wave.Particle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

adarsh_quil.perlin_wave.Particle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"world-size","world-size",-250950592,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null),new cljs.core.Symbol(null,"vel","vel",1529760705,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"noise-scale","noise-scale",-392943752,null),new cljs.core.Symbol(null,"new-pos-func","new-pos-func",1592358032,null)], null);
});

adarsh_quil.perlin_wave.Particle.cljs$lang$type = true;

adarsh_quil.perlin_wave.Particle.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"adarsh-quil.perlin-wave/Particle",null,(1),null));
});

adarsh_quil.perlin_wave.Particle.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"adarsh-quil.perlin-wave/Particle");
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
adarsh_quil.perlin_wave.map__GT_Particle = (function adarsh_quil$perlin_wave$map__GT_Particle(G__36141){
var extmap__4424__auto__ = (function (){var G__36162 = cljs.core.dissoc.call(null,G__36141,new cljs.core.Keyword(null,"world-size","world-size",-1891482119),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"noise-scale","noise-scale",-2033475279),new cljs.core.Keyword(null,"new-pos-func","new-pos-func",-48173495));
if(cljs.core.record_QMARK_.call(null,G__36141)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36162);
} else {
return G__36162;
}
})();
return (new adarsh_quil.perlin_wave.Particle(new cljs.core.Keyword(null,"world-size","world-size",-1891482119).cljs$core$IFn$_invoke$arity$1(G__36141),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__36141),new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(G__36141),new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(G__36141),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__36141),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(G__36141),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(G__36141),new cljs.core.Keyword(null,"noise-scale","noise-scale",-2033475279).cljs$core$IFn$_invoke$arity$1(G__36141),new cljs.core.Keyword(null,"new-pos-func","new-pos-func",-48173495).cljs$core$IFn$_invoke$arity$1(G__36141),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

adarsh_quil.perlin_wave.make_particles = (function adarsh_quil$perlin_wave$make_particles(world_size,num_of_particles,colors,sizes,speeds,random_position_func){
return cljs.core.map.call(null,(function (){
return (new adarsh_quil.perlin_wave.Particle(world_size,random_position_func.call(null,world_size,(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.rand_nth.call(null,speeds),cljs.core.rand_nth.call(null,sizes),cljs.core.rand_nth.call(null,colors),(600),random_position_func,null,null,null));
}),cljs.core.range.call(null,num_of_particles));
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

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k36165,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__36169 = k36165;
var G__36169__$1 = (((G__36169 instanceof cljs.core.Keyword))?G__36169.fqn:null);
switch (G__36169__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k36165,else__4388__auto__);

}
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__36170){
var vec__36171 = p__36170;
var k__4408__auto__ = cljs.core.nth.call(null,vec__36171,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__36171,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#adarsh-quil.perlin-wave.Perlin-Wave{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graphic","graphic",262278575),self__.graphic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"particles","particles",801881788),self__.particles],null))], null),self__.__extmap));
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36164){
var self__ = this;
var G__36164__$1 = this;
return (new cljs.core.RecordIter((0),G__36164__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"graphic","graphic",262278575),new cljs.core.Keyword(null,"particles","particles",801881788)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (3 + cljs.core.count.call(null,self__.__extmap));
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-420013250 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36166,other36167){
var self__ = this;
var this36166__$1 = this;
return (((!((other36167 == null)))) && ((this36166__$1.constructor === other36167.constructor)) && (cljs.core._EQ_.call(null,this36166__$1.weight,other36167.weight)) && (cljs.core._EQ_.call(null,this36166__$1.graphic,other36167.graphic)) && (cljs.core._EQ_.call(null,this36166__$1.particles,other36167.particles)) && (cljs.core._EQ_.call(null,this36166__$1.__extmap,other36167.__extmap)));
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.adarsh_quil$common$Drawable$ = cljs.core.PROTOCOL_SENTINEL;

adarsh_quil.perlin_wave.Perlin_Wave.prototype.adarsh_quil$common$Drawable$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var gr__21775__auto__ = self__.graphic;
var _STAR_graphics_STAR__orig_val__36174 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__36175 = gr__21775__auto__;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__36175;

try{quil.core.begin_draw.call(null,gr__21775__auto__);

var seq__36176_36185 = cljs.core.seq.call(null,self__.particles);
var chunk__36177_36186 = null;
var count__36178_36187 = (0);
var i__36179_36188 = (0);
while(true){
if((i__36179_36188 < count__36178_36187)){
var particle_36189 = cljs.core._nth.call(null,chunk__36177_36186,i__36179_36188);
adarsh_quil.common.render.call(null,particle_36189);


var G__36190 = seq__36176_36185;
var G__36191 = chunk__36177_36186;
var G__36192 = count__36178_36187;
var G__36193 = (i__36179_36188 + (1));
seq__36176_36185 = G__36190;
chunk__36177_36186 = G__36191;
count__36178_36187 = G__36192;
i__36179_36188 = G__36193;
continue;
} else {
var temp__5735__auto___36194 = cljs.core.seq.call(null,seq__36176_36185);
if(temp__5735__auto___36194){
var seq__36176_36195__$1 = temp__5735__auto___36194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36176_36195__$1)){
var c__4550__auto___36196 = cljs.core.chunk_first.call(null,seq__36176_36195__$1);
var G__36197 = cljs.core.chunk_rest.call(null,seq__36176_36195__$1);
var G__36198 = c__4550__auto___36196;
var G__36199 = cljs.core.count.call(null,c__4550__auto___36196);
var G__36200 = (0);
seq__36176_36185 = G__36197;
chunk__36177_36186 = G__36198;
count__36178_36187 = G__36199;
i__36179_36188 = G__36200;
continue;
} else {
var particle_36201 = cljs.core.first.call(null,seq__36176_36195__$1);
adarsh_quil.common.render.call(null,particle_36201);


var G__36202 = cljs.core.next.call(null,seq__36176_36195__$1);
var G__36203 = null;
var G__36204 = (0);
var G__36205 = (0);
seq__36176_36185 = G__36202;
chunk__36177_36186 = G__36203;
count__36178_36187 = G__36204;
i__36179_36188 = G__36205;
continue;
}
} else {
}
}
break;
}

return quil.core.end_draw.call(null,gr__21775__auto__);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__36174;
}});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.adarsh_quil$common$Drawable$next_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"particles","particles",801881788),cljs.core.map.call(null,adarsh_quil.common.next_state,self__.particles));
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
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graphic","graphic",262278575),null,new cljs.core.Keyword(null,"weight","weight",-1262796205),null,new cljs.core.Keyword(null,"particles","particles",801881788),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new adarsh_quil.perlin_wave.Perlin_Wave(self__.weight,self__.graphic,self__.particles,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__36164){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__36180 = cljs.core.keyword_identical_QMARK_;
var expr__36181 = k__4393__auto__;
if(cljs.core.truth_(pred__36180.call(null,new cljs.core.Keyword(null,"weight","weight",-1262796205),expr__36181))){
return (new adarsh_quil.perlin_wave.Perlin_Wave(G__36164,self__.graphic,self__.particles,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36180.call(null,new cljs.core.Keyword(null,"graphic","graphic",262278575),expr__36181))){
return (new adarsh_quil.perlin_wave.Perlin_Wave(self__.weight,G__36164,self__.particles,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36180.call(null,new cljs.core.Keyword(null,"particles","particles",801881788),expr__36181))){
return (new adarsh_quil.perlin_wave.Perlin_Wave(self__.weight,self__.graphic,G__36164,self__.__meta,self__.__extmap,null));
} else {
return (new adarsh_quil.perlin_wave.Perlin_Wave(self__.weight,self__.graphic,self__.particles,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__36164),null));
}
}
}
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"graphic","graphic",262278575),self__.graphic,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"particles","particles",801881788),self__.particles,null))], null),self__.__extmap));
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__36164){
var self__ = this;
var this__4384__auto____$1 = this;
return (new adarsh_quil.perlin_wave.Perlin_Wave(self__.weight,self__.graphic,self__.particles,G__36164,self__.__extmap,self__.__hash));
});

adarsh_quil.perlin_wave.Perlin_Wave.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

adarsh_quil.perlin_wave.Perlin_Wave.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"graphic","graphic",1902810102,null),new cljs.core.Symbol(null,"particles","particles",-1852553981,null)], null);
});

adarsh_quil.perlin_wave.Perlin_Wave.cljs$lang$type = true;

adarsh_quil.perlin_wave.Perlin_Wave.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"adarsh-quil.perlin-wave/Perlin-Wave",null,(1),null));
});

adarsh_quil.perlin_wave.Perlin_Wave.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"adarsh-quil.perlin-wave/Perlin-Wave");
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
adarsh_quil.perlin_wave.map__GT_Perlin_Wave = (function adarsh_quil$perlin_wave$map__GT_Perlin_Wave(G__36168){
var extmap__4424__auto__ = (function (){var G__36183 = cljs.core.dissoc.call(null,G__36168,new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"graphic","graphic",262278575),new cljs.core.Keyword(null,"particles","particles",801881788));
if(cljs.core.record_QMARK_.call(null,G__36168)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36183);
} else {
return G__36183;
}
})();
return (new adarsh_quil.perlin_wave.Perlin_Wave(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(G__36168),new cljs.core.Keyword(null,"graphic","graphic",262278575).cljs$core$IFn$_invoke$arity$1(G__36168),new cljs.core.Keyword(null,"particles","particles",801881788).cljs$core$IFn$_invoke$arity$1(G__36168),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

adarsh_quil.perlin_wave.background_colors = (function adarsh_quil$perlin_wave$background_colors(){
var light_blue = quil.core.color.call(null,(98),(203),(231));
var light_teal = quil.core.color.call(null,(181),(224),(211));
var light_purple = quil.core.color.call(null,(158),(123),(184));
var dark_purple = quil.core.color.call(null,(71),(41),(118));
return adarsh_quil.perlin_wave.value_palette.call(null,(50),dark_purple,(50),light_purple,(25),light_teal,(25),light_blue);
});
adarsh_quil.perlin_wave.background_sizes = (function adarsh_quil$perlin_wave$background_sizes(){
return adarsh_quil.perlin_wave.value_palette.call(null,(10),(20),(50),(10),(40),(5),(200),(2));
});
adarsh_quil.perlin_wave.background_speeds = (function adarsh_quil$perlin_wave$background_speeds(){
return adarsh_quil.perlin_wave.value_palette.call(null,(10),1.0,(30),0.8,(70),0.6);
});
adarsh_quil.perlin_wave.background_new_position_func = adarsh_quil.utils.random_point_on_perimeter;
adarsh_quil.perlin_wave.background_perlin_wave = (function adarsh_quil$perlin_wave$background_perlin_wave(weight,world_size){
return (new adarsh_quil.perlin_wave.Perlin_Wave(weight,quil.core.create_graphics.call(null,cljs.core.first.call(null,world_size),cljs.core.second.call(null,world_size)),adarsh_quil.perlin_wave.make_particles.call(null,world_size,(100),adarsh_quil.perlin_wave.background_colors.call(null),adarsh_quil.perlin_wave.background_sizes.call(null),adarsh_quil.perlin_wave.background_speeds.call(null),adarsh_quil.perlin_wave.background_new_position_func),null,null,null));
});

//# sourceMappingURL=perlin_wave.js.map?rel=1612602209541
