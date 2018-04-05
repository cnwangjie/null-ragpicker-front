import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: null,
    addresses: [],
    userInfo: {},
    orders: [],
    creatingOrder: {
      items: [],
      selectedAddressId: null,
      remark: '',
    },
    cates: [],
  },
  getters: {
    getAddress(state) {
      return id => state.addresses.find(i => i.id === id)
    }
  },
  actions: {
  },
  mutations: {
    setcate(state, cate) {
      state.cate = cate
    },
    setUserId(state, id) {
      state.userId = id
    },
    setUserInfo(state, info) {
      state.userInfo = info
    },
    addOrder(state, order) {
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
    selectAddress(state, id) {
      state.creatingOrder.selectedAddressId = id
    },
    addItem(state, item) {
      state.creatingOrder.items.push(item)
    },
    removeItem(state, index) {
      state.creatingOrder.items.splice(index, 1)
    },
    setCates(state, cates) {
      state.cates = cates
    },
  }
})
