(ns adarsh-quil.img-paint-stroke
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [adarsh-quil.common :as c]
            [adarsh-quil.utils :as u]))

(defn process-img-once [img width height]
  (q/resize img width height)
  (let [mask (q/create-image width height)
        mask-px (q/pixels mask)
        px (q/pixels img)]
    (dotimes [x width]
      (dotimes [y height]
        ;; White
        (let [pos (+ (* 4 x) (* y (* 4 width)))]
          (aset px pos 255)
          (aset px (+ 1 pos) 255)
          (aset px (+ 2 pos) 255))
        ;; Faded tail
        (aset
         mask-px (+ 3 (* 4 x) (* y (* 4 width)))
         (Math/round (q/lerp 255 220 (/ x width))))))
    (q/update-pixels img)
    (q/update-pixels mask)

    (q/mask-image img mask)
    img))

(defn partial-stroke [img mask width height step speed]
  (let [min-x (max 0 (Math/floor (* (- step speed) width)))
        max-x (min width (Math/ceil (* step width)))
        px (q/pixels mask)
        new-img (q/create-image width height)]
    (doseq [x (range min-x (+ 1 max-x))]
      (dotimes [y height]
        (aset px (+ 3 (* 4 x) (* y (* 4 width))) 255)))
    (q/update-pixels mask)
    (q/copy img new-img [0 0 width height] [0 0 width height])
    (q/mask-image new-img mask)
    new-img))

(defrecord Paint-Stroke [weight graphic img speed]
  c/Drawable
  (c/render [this]
    (let [width (.-width graphic)
          height (.-height graphic)]
      (when (contains? this :step)
        (let [{:keys [step step-mask ps]} this]
          (when (<= step 1)
            (q/with-graphics graphic
              (q/clear)
              (q/image
               (partial-stroke ps step-mask width height step speed)
               0 0)))))))
  (c/next-state [this]
    (let [width (.-width graphic)
          height (.-height graphic)]
      (if (and (q/loaded? img) (> (.-width img) 1) (not (contains? this :ps)))
        (assoc this
               :ps (process-img-once img width height)
               :step 0.0
               :step-mask (q/create-image width height))
        (if (contains? this :step)
          (update this :step #(min 1.1 (+ % speed)))
          this))))
  (c/weight [this] weight)
  (c/done? [this] (and (contains? this :step) (> (:step this) 1))))

(defn screen-paint-stoke [weight [width height]]
  ;; Width -> width of the stroke which is from top to bottom
  (let [screen-img-url "img/black-brush-stroke-png-930x382.png"]
    (Paint-Stroke.
     weight
     (q/create-graphics width height)
     (q/load-image screen-img-url)
     0.03)))
