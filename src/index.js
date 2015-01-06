export default class Array2 {
  constructor(w, h, initValue) {
    this.w = w
    this.h = h
    this.e = new Array(w * h)

    let fn = typeof initValue == 'function' ? initValue : () => initValue

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        this.set(x, y, fn(x, y))
      }
    }
  }

  get(x, y) {
    if (x < 0 || y < 0 || x >= this.w || y >= this.h) return null
    return this.e[y * this.w + x]
  }

  set(x, y, val) {
    if (x < 0 || y < 0 || x >= this.w || y >= this.h) return
    this.e[y * this.w + x] = val
  }
}
