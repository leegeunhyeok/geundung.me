const debug = true

const preloader = {}
preloader._loaded = 0
preloader._imageList = [
  'aa.png'
]

preloader.regist = function (callback) {
  this._callback = callback
  return this
}

preloader._handler = function () {
  this._loaded++
  if (this._imageList.length === this._loaded) {
    this._callback()
  }
}

preloader.preload = function () {
  const time = new Date().getTime()
  this._imageList.forEach(img => {
    let preloadImage = new Image()
    preloadImage.src = debug ? `${img}?${time}` : img
    preloadImage.onload = this._handler.bind(this)
    preloadImage.onerror = this._handler.bind(this)
  })
}

export default preloader
