<template  lang="html">
  <div class="the-all">

    <div class="weui-cells">

      <div class="space">
        <div class="weui-cell nav">
          <router-link :to="'/user/home'" class="weui-cell__hd nav-img">
            <img src="static/images/whitereturn.png" class="returnpng">
          </router-link>
          <div class="weui-cell__bd nav-address">
            <p class="nav-text">{{ orderStatus[order.status] }}</p>
          </div>
        </div>
      </div>

      <div class="order-detail">

        <div class="weui-cells">
          <div v-for="item in order.orderDetail" class="weui-cell weui-cell_access">
            <div class="weui-cell__bd" style="text-align:left;margin-left:5px;">
              <p class="font-second">{{ item.cate.name }}</p>
            </div>
            <div class="weui-cell__bd" style="text-align:right">
              <p class="font-second">× {{ item.sum }} {{ item.cate.unit }}</p>
            </div>
            <div class="weui-cell__bd" style="text-align:right" v-if="order.amount">
              <p class="font-second">¥ {{ item.price }}</p>
            </div>
          </div>
        </div>

        <div class="weui-cells">
          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="static/images/phone.png" alt="" style="width:15px;margin-left:5px;display:block">
            </div>
            <div class="weui-cell__bd" style="text-align:left;margin-left:10px;">
              <span v-if="order.collector">回收员: {{ order.collector.name }}</br>电话：{{ order.collector.tel }}</span>
            </div>
            <div class="weui-cell__bd" style="text-align:right">
              <p v-if="order.amount">总售价   ¥ {{ (order.amount / 100).toFixed(2) }}</p>
            </div>
          </div>
        </div>

      </div>

      <div class="between-space">
      </div>

      <div class="delivery-information">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>收货地址</p>
          </div>
          <div class="weui-cell__ft">
            <p class="font-second">{{ getFullNameByLocation(order.location) }} {{ order.locDetail }}</p>
            <p class="font-third">{{ order.tel }}｝</p>
          </div>
        </div>
      </div>

      <div class="between-space">
      </div>

      <div class="order-information">
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
            <p>{{ formatDate(order.createdAt) }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import { getFullNameByLocation } from '@/assets/data_location/list'
import orderStatus from '@/assets/orderStatus'
export default {
  data () {
    return {
      orderStatus,
      order: {}
    }
  },
  computed: {
    ...mapGetters(['getOrder']),
  },
  created() {
    this.init()
  },
  methods: {
    getFullNameByLocation,
    init () {
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
  font-size: 17px;
  font-family: cursive;
  .weui-cells {
    margin-top: 0px;
  }
  .order-detail {
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
  .font-first {
    font-weight: bolder;
  }
  .font-second {
    font-size: 13px;
  }
  .font-third {
    padding-top:8px;
    font-size: 11px;
    color: #a59191;
  }
  .between-space {
    width: 100%;
    height: 5px;
    background-color: #ffefef;
  }
}
</style>
