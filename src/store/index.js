import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: NaN,
    address: [],
    userInfo: [],
    order: [],
  },
  getters: {
  },
  actions: {
  },
  mutations: {
    setUserId(state, id) {
      state.userId = id
    },
    setUserInfo(state,info) {
      state.userInfo.push(info)
    },
    setOrder(state,order) {
      state.order.push(order)
    },
    addAddress(state, address) {
      state.address.push(address)
    },
    editAddress(state,address) {
      for (let i = 0; i < state.address.length; i++ ) {
        if (state.address[i].id == address.id) {
          state.address[i] = address
        }
      }
    },
    deleteAddress(state,id) {
      for (let i = 0; i< state.address.length; i++ ) {
        if (state.address[i].id == id) {
          state.address.splice(i,1)
        }
      }
    },
  }
})
