import Vue from 'vue'
import Router from 'vue-router'
import userHome from '@/components/user/home'
import userOrder from '@/components/user/order'
import userOrderNew from '@/components/user/order/orderNew'
import userOrderCreate from '@/components/user/order/orderCreate'
import userOrderDetail from '@/components/user/order/orderDetail'
import userAddress from '@/components/user/address'
import userAddressEdit from '@/components/user/address/addressEdit'
import userAddressChoose from '@/components/user/address/addressChoose'
import userAddressCreate from '@/components/user/address/addressCreate'
import collectorOrder from '@/components/collector/order'
import collectorOrderDetail from '@/components/collector/order/orderDetail'

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
