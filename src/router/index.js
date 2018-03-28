import Vue from 'vue'
import Router from 'vue-router'
import userHome from '@/page/user/home/home'
import userOrder from '@/page/user/order/order'
import userOrderNew from '@/page/user/order/orderNew'
import userOrderCreate from '@/page/user/order/orderCreate'
import userOrderDetail from '@/page/user/order/orderDetail'
import userAddress from '@/page/user/address/address'
import userAddressEdit from '@/page/user/address/addressEdit'
import userAddressChoose from '@/page/user/address/addressChoose'
import userAddressCreate from '@/page/user/address/addressCreate'
import collectorOrder from '@/page/collector/order/order'
import collectorOrderDetail from '@/page/collector/order/orderDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'userHome',
      component: userHome
    },
    {
      path: '/user/address',
      name: 'userAddress',
      component: userAddress
    },
    {
      path: '/user/address/choose',
      name: 'userAddressChoose',
      component: userAddressChoose
    },
    {
      path: '/user/address/create',
      name: 'userAddressCreate',
      component: userAddressCreate
    },
    {
      path: '/user/address/:id/edit',
      name: 'userAddressEdit',
      component: userAddressEdit
    },
    {
      path: '/user/order',
      name: 'userOrder',
      component: userOrder
    },
    {
      path: '/user/order/new',
      name: 'userOrderNew',
      component: userOrderNew
    },
    {
      path: '/user/order/create',
      name: 'userOrderCreate',
      component: userOrderCreate
    },
    {
      path: '/user/order/detail',
      name: 'userOrderDetail',
      component: userOrderDetail
    },
    {
      path: '/collector/order/detail',
      name: 'collectorOrderDetail',
      component: collectorOrderDetail
    },
    {
      path: '/collector/order',
      name: 'collectorOrder',
      component: collectorOrder
    }
  ]
})
