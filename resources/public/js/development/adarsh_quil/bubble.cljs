(ns adarsh-quil.bubble
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [adarsh-quil.common :as c]
            [adarsh-quil.utils :as u]))

(defn process-img-once [img width height spike-mag]
  ;; (q/resize img (+ width spike-mag) (+ height spike-mag))
  (q/resize img width height)
  img)

(defn frame-mask [width height z-val spike-mag]
  (let [mask (q/create-image width height)
        mask-px (q/pixels mask)
        hw (/ width 2)
        hh (/ height 2)
        r (- (min hw hh) (/ spike-mag 2))]
    (dotimes [x width]
      (dotimes [y height]
        (let [xx (- x hw)
              yy (- y hh)
              angle (Math/atan2 yy xx)
              noise-circle-radius 4
              x-point-on-circle (+ noise-circle-radius (* noise-circle-radius (Math/cos angle)))
              y-point-on-circle (+ noise-circle-radius (* noise-circle-radius (Math/sin angle)))
              noise (* spike-mag (q/noise x-point-on-circle y-point-on-circle z-val))
              spike-r (Math/pow (+ noise r) 2)]
         (when (< (+ (Math/pow xx 2) (Math/pow yy 2))
                  spike-r
                  )
          (aset mask-px (+ 3 (* 4 x) (* y (* 4 width))) 255)))))
    (q/update-pixels mask)
    mask))

(defn apply-frame [img frame]
  (let [width (.-width img)
        height (.-height img)
        new-img (q/create-image width height)]
    (q/copy img new-img [0 0 width height] [0 0 width height])
    (q/mask-image new-img frame)
    new-img))

(defrecord Bubble-Image
    [weight graphic img frames z-count z-val-inc spike-mag points speed size-start size-end size-inc]
  c/Drawable
  (c/render [this]
    (when (contains? this :step)
      (let [width (.-width graphic)
            height (.-height graphic)
            hw (/ width 2)
            hh (/ height 2)
            {:keys [raw frame-index size]} this]
        (q/with-graphics raw
          (q/no-stroke)
          (when (not (c/done? this))
           (dotimes [_ points]
            (let [x (+ hw (* hw (q/random-gaussian)))
                  y (+ hh (* hh (q/random-gaussian)))]
              (q/with-fill (q/get-pixel img x y)
                (q/ellipse x y size size))))))
        (q/with-graphics graphic
          (q/clear)
          (q/image (apply-frame raw (nth frames frame-index)) 0 0)
          ))))

  (c/next-state [this]
    (let [width (.-width graphic)
          height (.-height graphic)]
      (if (and (q/loaded? img) (> (.-width img) 1) (not (contains? this :step)))
        (assoc this
               :ps (process-img-once img width height spike-mag)
               ;; :frames
               ;; (map #(frame-mask width height (* % z-val-inc) spike-mag) (range z-count))
               :frame-index 0
               :frame-inc 1
               :raw (q/create-graphics width height)
               :size size-start
               :step 0.0)
        (let [new-state (assoc (if (and (contains? this :step) (not (c/done? this)))
                                 (let [{:keys [step size]} this]
                                   (if (> step 1.0)
                                     (assoc this
                                            :step 0.0
                                            :size (max size-end (- size size-inc)))
                                     (update this
                                             :step #(min 1.1 (+ % speed)))))
                                 this)
                               :frame-index
                               (+ (:frame-index this) (:frame-inc this)))
              {:keys [frame-index frame-inc]} new-state]
          (if (not (< 0 frame-index (- z-count 1)))
            (assoc new-state :frame-inc (* -1 frame-inc))
            new-state)
          ))))
  (c/weight [this] weight)
  (c/done? [this] (and (contains? this :step) (> (:step this) 1) (<= (:size this) size-end))))

(defn profile-bubble-img [weight [width height]]
  ;; Width -> width of the stroke which is from top to bottom
  (let [profile-img-url "img/profile.jpeg"
        z-count 100 z-val-inc 0.05
        spike-mag 50
        points 100 speed 0.05
        size-start 50 size-end 8 size-inc 2]
    (Bubble-Image.
     weight
     (q/create-graphics width height)
     (q/load-image profile-img-url)
     (doall (map #(frame-mask (Math/round width) (Math/round height) (* % z-val-inc) spike-mag) (range z-count)))
     z-count z-val-inc spike-mag points speed size-start size-end size-inc
     )))
