(ns adarsh-quil.paint
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [adarsh-quil.common :as c]
            [adarsh-quil.utils :as u]))

(defrecord Paint-Stroke
    [graphic width length location angle color
     starts ends step total-step]
  c/Drawable
  (c/render [this]
    (q/with-graphics graphic
      (q/stroke 0)
      (q/line 0 0 length width)
      (q/line 0 width length 0)

      (q/with-translation location
        (q/with-rotation [angle 0 0 0])
        (q/no-stroke)
        (let [cur-progress (/ step total-step)
              cur-alpha (Math/round (q/lerp 255 0 cur-progress))
              r (q/red color)
              g (q/green color)
              b (q/blue color)
              cur-x (q/lerp (/ length -2) (/ length 2) cur-progress)]
          ;; (print cur-alpha)
          (doseq [cur-y-index (range width)]
            (let [cur-y (q/lerp (/ width -2) (/ width 2) (/ cur-y-index width))
                  start (nth starts cur-y-index)
                  end (nth ends cur-y-index)]
              (if (< start cur-x end)
                (do
                  (q/fill r g b 10)
                  ;; (q/no-fill)
                  (q/ellipse cur-x cur-y 100 1)))))))))
  (c/next-state [this]
    (if (< step total-step)
      (assoc this :step (inc step))
      this)))
(defn make-paint-stroke
  [graphics width length location angle color
   & {:keys [total-step
             start-stroke-margin
             end-stroke-margin]
      :or {total-step 1000
           end-stroke-margin 0.1
           start-stroke-margin 0.05}}]
  (let [hw (/ width 2)
        hl (/ length 2)
        start-diff (* length start-stroke-margin)
        end-diff (* length end-stroke-margin)]
    (Paint-Stroke.
     graphics width length location angle color
     (vec (map
           #(+ (- hl) (* 0.02 (q/sq %)) (q/random 0 start-diff))
           (range (- hw) hw)))
     (vec (map
           #(- hl (* 0.09 (q/sq %)) (q/random 0 end-diff))
           (range (- hw) hw)))
     0 total-step)))

(defn screen-paint-stroke [width length]
  (make-paint-stroke
   (q/create-graphics length width)
   width length
   [(/ length 2) (/ width 2)]
   0 (q/color 255 0 0)))
