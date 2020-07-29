import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Vuex State.',
    name: 'Nico',
    surname: 'Rondán',
    friends: []
  },
  mutations: {
    addFriend(state, friend){
      state.friends = [friend, ...state.friends]
    },
    deleteFriend(state, index){
      state.friends.splice(index, 1);
    }
  },
  actions: {
    addFriendAction(context, friend){
      context.commit('addFriend', friend);
    },
    deleteFriendAction(context, index){
      context.commit('deleteFriend', index);
    }
  },
  modules: {
  },
  getters: {
    message(state){
      return state.msg;
    },
    fullname(state){
      return `${state.name} ${state.surname}`;
    }
  }
})
