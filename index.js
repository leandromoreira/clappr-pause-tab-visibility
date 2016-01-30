import {ContainerPlugin} from 'clappr'

export default class ClapprPauseTabVisibility extends ContainerPlugin {
  get name() {return 'clappr_pause_tab_visibility'}

  bindEvents() {
    var [hidden, visibilityEvent] = this.resoleVisibilityAPI()
    this.originalTitle = document.title

    document.addEventListener(visibilityEvent, () => this.togglePauseResume(hidden))
  }

  resoleVisibilityAPI() {
    var compatiblePropertyAndEvent = []
    var hiddenApi = ['hidden','webkithidden','mozhidden','mshidden','ohidden']
    var visibilityEventApi = ['visibilitychange','webkitvisibilitychange','mozvisibilitychange','msvisibility','ovisibility']

    hiddenApi.forEach((property, index) => {
      if (property in document) {
        compatiblePropertyAndEvent.push(property)
        compatiblePropertyAndEvent.push(visibilityEventApi[index])
      }
    })

    return compatiblePropertyAndEvent
  }

  togglePauseResume(hidden) {
    var command = document[hidden] ? 'pause': 'play'
    hidden && this[command]()
  }

  play() {
    this.container.play()
    if (this.options.visibilityEnableIcon) { document.title = this.originalTitle }
  }

  pause() {
    this.container.pause()
    if (this.options.visibilityEnableIcon) { document.title = `\u23F8  ${this.originalTitle}` }
  }
}

