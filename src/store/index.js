
import { createStore } from 'vuex'
import router from '../router'

const store = createStore({
  state () {
    return {
        lyrics: null,
        search: null,
        helper: false,
        lyricLetter: null
    }
  },
  mutations: {
    search (state, value) {
      state.search = value
    },
    helper (state) {
      state.lyricLetter = null;

      if (state.helper){
        state.helper = false;
      }else {
        state.helper = true;
      }
    },
    lyricLetter (state, value) {
      state.lyricLetter = value
    }

  },
  actions: {
    handleChangeLyric ( {state}, value ) {
        state.lyrics = value;
        router.push('/search');
    },
    handeChangeSearch ( { commit }, value ) {
      commit('search', value);
    },
    handleChangeHelper ( { commit }) {
      commit('helper');
    },
    handleChangeLetter ( {commit}, value ) {
      commit('helper');
      commit('lyricLetter', value);
    }
  }
})

export default store;

