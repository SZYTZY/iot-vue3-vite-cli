import { createStore } from 'vuex';

export default createStore({
  state: {
    scrollTop: 0 
  },
  mutations: {
    startComputeCurrent(state: any, topnum: any) {
      state.scrollTop = topnum
    }
  },
  actions: {},
  modules: {}
});
