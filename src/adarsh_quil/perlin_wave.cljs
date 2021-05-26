(ns adarsh-quil.perlin-wave
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [adarsh-quil.common :as c]
            [adarsh-quil.utils :as u]))


(defn value-palette [& colors-values]
  (if (= (mod (count colors-values) 2) 0)
    (apply concat (map #(repeat (first %) (second %)) (partition 2 colors-values)))
    (throw (js/Error. "color-picker requires even args"))))

(defn random-point []
  [(+ (q/random 0 (q/width)) (/ (q/width) 2))
   (+ (q/random 0 (q/height)) (/ (q/height) 2))])


(defrecord Particle
    [world-size pos dir vel speed radius color
     noise-scale new-pos-func]
  c/Drawable
  (c/render [this]
    (let [[x y] pos]
      (q/no-stroke)
      (q/fill color)
      (q/ellipse x y radius radius)))
  (c/next-state [this]
    (let [[dir-x dir-y] dir
          [vel-x vel-y] vel
          [noise-scaled-x noise-scaled-y] (vec (map #(/ % noise-scale) pos))
          noise (q/noise noise-scaled-x noise-scaled-y)
          new-angle (* noise q/TWO-PI)

          new-dir [(q/cos new-angle) (q/sin new-angle)]
          new-vel (u/elem-mult new-dir speed)
          new-pos (u/vec-add pos new-vel)
          screen-offset (+ 1 (* 2 radius))]
      (assoc this
           :dir dir
           :vel vel
           :pos (if (u/hit-edge? world-size new-pos screen-offset) (new-pos-func world-size screen-offset) new-pos)))))

(defn make-particles [world-size num-of-particles colors sizes speeds random-position-func]
  (map
   #(Particle.
     world-size
     (random-position-func world-size 0)
     [0 0]
     [0 0]
     (rand-nth speeds)
     (rand-nth sizes)
     (rand-nth colors)
     600
     random-position-func)
   (range num-of-particles)))

(defrecord Perlin-Wave [weight graphic particles]
  c/Drawable
  (c/render [this]
    (q/with-graphics graphic
     (doseq [particle particles]
      (c/render particle))))
  (c/next-state [this]
    (assoc this :particles (map c/next-state particles)))
  (c/weight [this] weight)
  (c/done? [this] true))


(defn background-colors []
  (let [light-blue   (q/color 98 203 231)
        light-teal   (q/color 181 224 211)
        light-purple (q/color 158 123 184)
        dark-purple  (q/color 71 41 118)]
    (value-palette 50 dark-purple 50 light-purple 25 light-teal  25 light-blue)))
(defn background-sizes []
  (value-palette
   10 20
   50 10
   40 5
   200 2))
(defn background-speeds []
  (value-palette
   10 1.0
   30 0.8
   70 0.6))
(def background-new-position-func u/random-point-on-perimeter)
(defn background-perlin-wave [weight world-size]
  (Perlin-Wave.
   weight
   (q/create-graphics (first world-size) (second world-size))
   (make-particles
    world-size
    100
    (background-colors)
    (background-sizes)
    (background-speeds)
    background-new-position-func)))

