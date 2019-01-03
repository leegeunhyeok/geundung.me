import ProjectModel from '@/model/project'

const preloader = {}
preloader._loaded = 0
preloader._imageList = ProjectModel.map(img => img.thumbnail)

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
  this._imageList.forEach(img => {
    let preloadImage = new Image()
    preloadImage.src = img
    preloadImage.onload = this._handler.bind(this)
    preloadImage.onerror = this._handler.bind(this)
  })
}

export default preloader
