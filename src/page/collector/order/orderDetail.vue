<template lang="html">
  <div class="the-all">

    <div class="weui-cells">

      <div class="space">
        <div class="weui-cell nav">
          <router-link :to="'/collector/order'" class="weui-cell__hd nav-img">
            <img src="static/images/whitereturn.png" class="returnpng">
          </router-link>
          <div class="weui-cell__bd nav-address">
            <p class="nav-text">{{ orderStatus[order.status] }}</p>
          </div>
        </div>
      </div>


      <div class="delivery-information">

        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>收货地址</p>
          </div>
          <div class="weui-cell__ft">
            <p class="font-third">{{ order.locDetail }}</p>
            <p class="font-third">{{ order.tel }}</p>
          </div>
        </div>

          <div class="weui-cell">
            <div class="weui-cell__bd">
              <p>订单号</p>
            </div>
            <div class="weui-cell__ft">
              <p class="font-third">{{ order.orderNo }}</p>
            </div>
          </div>

          <div class="weui-cell">
            <div class="weui-cell__bd">
              <p>下单时间</p>
            </div>
            <div class="weui-cell__ft">
              <p class="font-third">{{ formatDate(order.createdAt) }}</p>
            </div>
          </div>

          <div class="weui-cell">
            <div class="weui-cell__bd">
              <p>备注</p>
            </div>
            <div class="weui-cell__ft">
              <p class="font-third">{{ order.remark }}</p>
            </div>
          </div>
          <div class="weui-cells__title">废品列表</div>
          <div class="weui-cell order-detail">
            <ul>
              <li v-for="item in order.orderDetail">
                {{ item.cate.name }} <span>× {{ item.sum }}</span>
              </li>
            </ul>
          </div>

      </div>


    </div>

  </div>
</template>

<script>
import orderStatus from '@/assets/orderStatus'
import moment from 'moment'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      order: {},
      orderStatus,
    }
  },
  created() {
    this.init()
  },
  computed: {
    ...mapState(['orders']),
    ...mapGetters(['getOrder']),
  },
  methods: {
    init() {
      this.order = this.getOrder(this.$route.params.orderNo)
    },
    formatDate(time) {
      return moment(time).format('Y年M月d日')
    },
  }
}
</script>

<style lang="scss">
.the-all {
  .weui-cells {
    margin-top: 0px;
  }

  .order-detail {
    ul {
      margin: 0 auto;
      width: 80%;
      li {
        span {
          float: right;
        }
      }
    }
    .btn {
      border:1px solid #007cff;
      color: #007cff;
      background-color:#ffefef
    }
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
}
</style>
