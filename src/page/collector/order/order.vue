<template lang="html">
  <div class="the-all">

    <div class="weui-cells">

      <div class="weui-navbar">
        <div class="weui-navbar__item" :class="alloted ? 'weui-bar__item_on' : ''" v-on:click="$router.push('/collector/order/alloted')">
            当前订单
        </div>
        <div class="weui-navbar__item" :class="!alloted ? 'weui-bar__item_on' : ''" v-on:click="$router.push('/collector/order/all')">
            全部订单
        </div>
      </div>
      <div class="weui-tab__panel all-order">
        <router-link v-for="order in orders" :to="`/collector/order/${order.orderNo}`" v-if="!alloted || order.status === 10">
          <div class="weui-cells">
            <div class="weui-cell">
              <div class="weui-cell__bd" style="text-align:left;margin-left:10px;">
                <p class="font-first">{{ order.locDetail }}</p>
                <p class="font-third">{{ new Date(order.createdAt).toUTCString() }}</p>
                <p v-if="order.orderDetail.length > 0" class="font-second" style="margin-top:20px">{{ order.orderDetail[0].cate.name }}等商品</p>
              </div>

              <div class="weui-cell__bd" style="text-align:right">
                <p style="margin-bottom:31px">{{ orderStatus[order.status] }}</p>
                <p v-if="order.amount">¥ {{ (order.amount / 100).toFixed(2) }}</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import { listOrdersByCollector } from '@/service/getData'
import { mapState, mapMutations } from 'vuex'
import orderStatus from '@/assets/orderStatus'
export default {
  data() {
    return {
      orderStatus,
    }
  },
  computed: {
    ...mapState(['userId', 'orders']),
    alloted() {
      return this.$route.name === 'collectorAllotedOrder'
    },
  },
  created() {
    this.init()
  },
  methods: {
    ...mapMutations(['addOrder']),
    init() {
      if (this.orders.length !== 0) return
      listOrdersByCollector(this.userId).then(orders => {
        if (Array.isArray(orders)) {
          orders.map(i => this.addOrder(i))
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.the-all {
  font-size: 17px;
  .weui-cells {
    margin-top: 0px;
    font-family:cursive;
    color: black;
  }
  .space {
    width: 100%;
    background-color: #7979a5;
    .nav {
      padding: 35px 35px 35px 10px;
      .nav-img {
        position: relative;
        top: 3px;
      }
      .nav-address {
        position: relative;
        left: 20px;
      }
      .nav-text {
        color: white;
        font-family: fantasy;
      }
    }
  }
  .font-second {
    font-size: 13px;
  }
  .font-third {
    padding-top:0px;
    font-size: 11px;
    color: #a59191;
  }
  width: 100%;
  position: fixed;
  background-color: #ffefef;
}
</style>
