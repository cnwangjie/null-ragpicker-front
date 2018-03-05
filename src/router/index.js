import Vue from 'vue'
import Router from 'vue-router'
import useraddress from '@/components/user/address'
import useraddresscreat from '@/components/user/addresscreat'
import userhome from '@/components/user/home'
import userorder from '@/components/user/order'
import userordernew from '@/components/user/ordernew'
import userorderdetail from '@/components/user/orderdetail'
import useraddressedit from '@/components/user/addressedit'
import choseaddress from '@/components/user/choseaddress'
import collectororder from '@/components/collector/order'
import collectororderdetail from '@/components/collector/orderdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'userhome',
      component: userhome
    },
    {
      path: '/user/address',
      name: 'useraddress',
      component: useraddress
    },
    {
      path: '/user/choseaddress',
      name: 'choseaddress',
      component: choseaddress
    },
    {
      path: '/user/addresscreat',
      name: 'useraddresscreat',
      component: useraddresscreat
    },
    {
      path: '/user/addressedit',
      name: 'useraddressedit',
      component: useraddressedit
    },
    {
      path: '/user/order',
      name: 'userorder',
      component: userorder
    },
    {
      path: '/user/ordernew',
      name: 'userordernew',
      component: userordernew
    },
    {
      path: '/user/orderdetail',
      name: 'userorderdetail',
      component: userorderdetail
    },
    {
      path: '/collector/orderdetail',
      name: 'collectororderdetail',
      component: collectororderdetail
    },
    {
      path: '/collector/order',
      name: 'collectororder',
      component: collectororder
    }
  ]
})
