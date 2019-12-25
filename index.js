import {ContainerPlugin} from 'clappr'

export default class ClapprPauseTabVisibility extends ContainerPlugin {
  get name() {return 'clappr_pause_tab_visibility'}

  bindEvents() {
    var [hidden, visibilityEvent] = this.resoleVisibilityAPI()
    this.visibilityEvent = visibilityEvent
    this.originalTitle = document.title
    this.wasPlaying = false;
    this.onVisibilityChange = () => this.togglePauseResume(hidden)

    document.addEventListener(this.visibilityEvent, this.onVisibilityChange)
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
    if(!this.wasPlaying) {
      return;
    }

    this.container.play()
    if (this.options.visibilityEnableIcon) { document.title = this.originalTitle }
  }

  pause() {
    this.wasPlaying = this.container.isPlaying()
    if(!this.wasPlaying) {
      return;
    }

    this.container.pause()
    if (this.options.visibilityEnableIcon) { document.title = `\u23F8  ${this.originalTitle}` }
  }

  stopListening() {
    document.removeEventListener(this.visibilityEvent, this.onVisibilityChange)
  }
}

