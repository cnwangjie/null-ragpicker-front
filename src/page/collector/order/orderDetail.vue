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
        <baidu-map v-if="bdak" :center="center" :zoom="zoom" class="bm-view" :ak="bdak">
        </baidu-map>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>收货地址</p>
          </div>
          <div class="weui-cell__ft">
            <p class="font-third">{{ getFullNameByLocation(order.location) }} {{ order.locDetail }}</p>
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
                {{ item.cate.name }} <span>× {{ item.sum }} {{ item.cate.unit }}</span>
              </li>
            </ul>
          </div>

      </div>


    </div>

  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map'
import { bdak } from '@/service/config'
import orderStatus from '@/assets/orderStatus'
import moment from 'moment'
import { mapState, mapMutations, mapGetters } from 'vuex'
import { list as dataLocationList, getFullNameByLocation } from '@/assets/data_location/list'
export default {
  data() {
    return {
      center: '',
      zoom: 15,
      bdak,
      order: {},
      orderStatus,
    }
  },
  components: {
    BaiduMap
  },
  created() {
    this.init()
  },
  computed: {
    ...mapState(['orders']),
    ...mapGetters(['getOrder']),
  },
  methods: {
    getFullNameByLocation,
    init() {
      this.order = this.getOrder(this.$route.params.orderNo)
      this.center = dataLocationList[this.order.location]
    },
    formatDate(time) {
      return moment(time).format('Y年M月d日')
    },
  }
}
</script>

<style lang="scss">
.the-all {
  .bm-view {
    width: 100%;
    height: 300px;
  }
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
