(ns adarsh-quil.common)

(defprotocol Drawable
  (render [this])
  (next-state [this])
  (weight [this])
  (done? [this])
  )
