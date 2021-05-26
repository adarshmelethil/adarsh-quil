(ns adarsh-quil.utils
  (:require [quil.core :as q :include-macros true]))


(defn golden-ratio-points [count]
  (loop [coordinates [[0 0]]
         i 1]
    (if (< i count)
      (let [last-point (last coordinates)]
        (recur
         (conj coordinates
               [(+ (first last-point) (* (if (= 0 (mod (quot i 2) 2)) 1 -1) i))
                (+ (second last-point) (* (if (= 0 (mod (quot (- i 1) 2) 2)) 1 -1) i))])
         (inc i)))
      coordinates)))

(defn loop-around [val left right]
  (cond
    (< val left) right
    (> val right) left
    :else val))

(defn elem-mult [vec-arr & vals]
  (vec (map #(apply * (cons % vals)) vec-arr)))
(defn elem-add [vec-arr & vals]
  (vec (map #(apply + (cons % vals)) vec-arr)))
(defn vec-add [vec1 vec2]
  (vec (map #(+ %1 %2) vec1 vec2)))

(defn hit-edge? [[world-width world-height] [x y] offset]
  (not (and (<= (- offset) x (+ offset world-width))
            (<= (- offset) y (+ offset world-height)))))

(defn random-point-on-perimeter [[width height] offset]
  (let [nwidth (+ offset width)
        nheight (+ offset height)
        lower (- offset)]
    (case (Math/round (q/random 1 4))
    1 [lower (q/random lower nwidth)]
    2 [nwidth (q/random lower nheight)]
    3 [(q/random lower nwidth) lower]
    4 [(q/random lower nwidth) nheight])))
