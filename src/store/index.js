
import { createStore } from 'vuex'
import router from '../router'

const store = createStore({
  state () {
    return {
        lyrics: null,
    }
  },
  mutations: {
    
  },
  actions: {
    handleChangeLyric ( {state}, value ) {
        state.lyrics = value;
        router.push('/search');
    }
  }
})

export default store;

