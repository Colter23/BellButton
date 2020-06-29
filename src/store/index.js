import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    audioVolume: Number
  },
  mutations: {
    setAudioVolume(state,value){
      this.state.audioVolume = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
