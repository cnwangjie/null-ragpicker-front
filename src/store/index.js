import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: null,
    addresses: [],
    userInfo: [],
    orders: [],
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
      state.orders.push(order)
    },
    addAddress(state, address) {
      state.addresses.push(address)
    },
    editAddress(state, address) {
      for (let i = 0; i < state.addresses.length; i += 1) {
        if (state.addresses[i].id === address.id) {
          Object.assign(state.addresses[i], address)
        }
      }
    },
    deleteAddress(state, id) {
      state.addresses = state.addresses.filter(i => i.id !== id)
    },
  }
})
