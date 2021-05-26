(ns adarsh-quil.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [adarsh-quil.common :as c]
            [adarsh-quil.perlin-wave :as pw]
            [adarsh-quil.img-paint-stroke :as p]
            [adarsh-quil.bubble :as b]
            ))

(defn settings []
  (q/smooth))

(def screen-size-ratio 1)
(defn screen-size []
  [(Math/round (* screen-size-ratio (q/width)))
   (Math/round (* screen-size-ratio (q/height)))])
(defn profile-size []
  (let [min-screen-side (apply min (screen-size))
        profile-side (* 0.6 min-screen-side)]
    [profile-side profile-side]))

(defn setup []
  (q/frame-rate 60)

  ;; (q/set-state! :screen-img (q/load-image screen-img-url))

  {:weight 0
   :background (pw/background-perlin-wave 0 [(q/width) (q/height)])
   ;; :screen (p/screen-paint-stroke (* 0.8 (q/height)) (* 0.8 (q/width)))
   :screen (p/screen-paint-stoke 0 (screen-size))
   :profile (b/profile-bubble-img 1 (profile-size))
   }
  )

(defn update-weight [{:keys [weight] :as state}]
  (let [finished (map #(c/done? (second %))
                      (filter #(= (c/weight (second %)) weight)
                              (filter #(satisfies? c/Drawable (second %)) state)))]
    (if (and (> (count finished) 0) (every? true? finished))
      (inc weight)
      weight)))

(defn update-state [{:keys [weight] :as state}]
  (doseq [[_ v] (filter #(and (satisfies? c/Drawable (second %))
                              (<= (c/weight (second %)) weight)) state)]
    (c/render v))

  (let [new-state (into {} (map #(vector (first %)
                                         (if (and (satisfies? c/Drawable (second %))
                                                  (<= (c/weight (second %)) weight))
                                           (c/next-state (second %))
                                           (second %))) state))]
    (assoc new-state :weight (update-weight new-state))))

(defn draw-state [{:keys [background screen profile] :as state}]
  (let [dark-blue (q/color 16 67 115 )]
    (q/background dark-blue))

  (q/image (:graphic background) 0 0)
  (let [[screen-width screen-height] (screen-size)
        screen-offset-x (/ (- (q/width) screen-width) 2)
        screen-offset-y (/ (- (q/height) screen-height) 2)

        profile-offset (+ (min screen-offset-x screen-offset-y)
                          (/ (- (apply min (screen-size)) (apply min (profile-size))) 2))
        ]
    (q/image (:graphic screen)
             screen-offset-x
             screen-offset-y)

    (q/image (:graphic profile) profile-offset profile-offset))

  ;; (let [image-size (min (:length screen) (:width screen))
  ;;       x (min 0 (- (q/width) image-size))
  ;;       y (min 0 (- (q/height) image-size))]
  ;;   (q/image (:graphic screen) 0 0))

  ;; (let [im (state :screen-img)]
  ;;   (when (q/loaded? im) (q/image im 0 0))
  ;;   )
  )

(defn ^:export run-sketch []
  (q/defsketch adarsh-quil
    :host "adarsh-quil"
    :size (let [width (or (.. js/window -innerWidth) (.. js/document -body -clientWidth))
                height (or (.. js/window -innerHeight) (.. js/document -body -clientHeight))]
            [width height])
    :setup setup
    :settings settings
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)

