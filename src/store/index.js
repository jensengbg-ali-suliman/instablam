import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    VideoStream: {},
    brightness: 0,
    saturation: 0,
    contrast: 0,
    vibrance: 0,
    hue: 0,
  },
  mutations: {
    saveVideoStream(state, stream) {
      state.VideoStream = stream
    },
    uppdateBrightness(state, val) {
      state.brightness = val
    },
    uppdateSaturation(state, val) {
      state.saturation = val
    },
    uppdateContrast(state, val) {
      state.contrast = val
    },
    uppdateVibrance(state, val) {
      state.vibrance = val
    },
    uppdateHue(state, val) {
      state.hue = val
    },
  },
  actions: {
    getVideoStream(ctx, stream) {
      ctx.commit('saveVideoStream', stream)
    },
    uppdateBrightness(ctx, val) {
      ctx.commit('uppdateBrightness', val)
    },
    uppdateSaturation(ctx, val) {
      ctx.commit('uppdateSaturation', val)
    },
    uppdateContrast(ctx, val) {
      ctx.commit('uppdateContrast', val)
    },
    uppdateVibrance(ctx, val) {
      ctx.commit('uppdateVibrance', val)
    },
    uppdateHue(ctx, val) {
      ctx.commit('uppdateHue', val)
    },
  },
  modules: {},
})
