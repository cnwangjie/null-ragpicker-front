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

          <div class="weui-cells">
            <div class="weui-cell" v-for="item, index in order.orderDetail">
              <div class="weui-cell__bd weui-cell_primary">
                <p>{{ item.cate.name }}</p>
              </div>

              <span class="weui-cell__ht">
                × {{ item.sum }} {{ item.cate.unit }} 单价: {{ (item.price / 100).toFixed(2) }}元
              </span>

              <div class="weui-cell__hd" v-if="editing" v-on:click="remove(index)">
                <i class="weui-icon-cancel"></i>
              </div>
            </div>

            <div class="weui-cell">
              总计: {{ formattedAmount }} 元
            </div>

            <!-- <div class="weui-cell order-detail">
              <ul>
                <li v-for="item in order.orderDetail">
                  {{ item.cate.name }} <span>× {{ item.sum }} {{ item.cate.unit }}</span>
                </li>
              </ul>
            </div> -->
            <div class="weui-cell weui-cell_select weui-cell_select-before" v-if="editing">
              <div class="weui-cell__hd weui-cell_access" v-on:click="pickCate">
                <input class="weui-select" disabled v-model="selected.cate.name">
                </input>
              </div>
              <div class="weui-cell__bd">
                <input v-model="selected.sum" class="weui-input" type="number" pattern="[0-9]*" :placeholder="'数量 ' + (selected.cate.unit ? `单位(${selected.cate.unit})` : '')">
              </div>
              <div class="weui-cell__bd">
                <input v-model="selected.price" class="weui-input" type="number" pattern="[0-9\.]*" v-on:change="formatPrice" :placeholder="'单价(元)'">
              </div>
              <div class="weui-cell__hd">
                <a href="javascript:void(0);" v-on:click="add" :style="">添加</a>
              </div>
            </div>
          </div>

          <div class="complete-btn" v-if="order.status === 10">
            <span v-if="!editing" class="weui-btn weui-btn_mini weui-btn_primary" v-on:click="editing = true">完成订单</span>
            <span v-if="editing" class="weui-btn weui-btn_mini weui-btn_primary" v-on:click="complete">确认</span>
            <span v-if="editing" class="weui-btn weui-btn_mini weui-btn_warn" v-on:click="editing = false">取消</span>
          </div>

      </div>

    </div>

  </div>
</template>

<script>
import { weui } from '@/assets/weui'
import BaiduMap from 'vue-baidu-map/components/map/Map'
import { bdak } from '@/service/config'
import orderStatus from '@/assets/orderStatus'
import { getOrderDetail, listAllCates, completeOrder } from '@/service/getData'
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
      storedOrderDetail: null,
      orderStatus,
      editing: false,
      selected: {
        cate: {
          name: '分类',
        },
        sum: null,
        price: null,
      },
      completing: false,
    }
  },
  watch: {
    editing(newStatus) {
      if (newStatus) {
        this.storedOrderDetail = this.order.orderDetail.slice()
      } else {
        this.order.orderDetail = this.storedOrderDetail
      }
    }
  },
  components: {
    BaiduMap,
  },
  created() {
    this.init()
  },
  computed: {
    ...mapState(['orders', 'cates']),
    ...mapGetters(['getOrder']),
    selectedCorrect() {
      return this.selected.cate.unit && this.selected.sum && this.selected.price
    },
    formattedAmount() {
      const amount = this.order.orderDetail.reduce((r, i) => {
        return r + i.price * i.sum
      }, 0)
      return (amount / 100).toFixed(2)
    }
  },
  methods: {
    ...mapMutations(['setCates', 'addOrder']),
    getFullNameByLocation,
    async init() {
      this.order = this.getOrder(this.$route.params.orderNo)
      if (!this.order) {
        const result = await getOrderDetail(this.$route.params.orderNo)
        if ('error' in result) {
          // ...
          return
        } else {
          this.order = result
        }
      }
      this.center = dataLocationList[this.order.location]
      if (this.cates.length === 0) this.getCates()
    },
    getCates() {
      if (this.cates.length === 0) {
        listAllCates().then(cates => {
          if ('error' in cates) {
            console.log(cates)
          } else {
            this.setCates(cates)
          }
        })
      }
    },
    pickCate() {
      const items = this.cates.map((i, j) => {
        return {
          label: i.name,
          value: j,
        }
      })
      if (this.cates.length === 0) return
      weui.picker(items, {
        container: 'body',
        defaultValue: this.selected.index || 0,
        depth: 1,
        onChange: result => {
        },
        onConfirm: result => {
          const r = result.shift()
          this.selected.index = r.value
          this.selected.cate = this.cates[r.value]
          this.selected.price = this.cate.price
        },
        id: 'cate-picker'
      })
    },
    remove(index) {
      this.order.orderDetail.splice(index, 1)
    },
    add() {
      if (!this.selectedCorrect) return
      this.order.orderDetail.push({
        cate: this.selected.cate,
        sum: this.selected.sum,
        price: this.selected.price * 100 << 0
      })
      this.selected = {
        cate: { name: '分类' },
        sum: null,
      }
    },
    formatPrice() {
      this.selected.price = (this.selected.price * 100 << 0) / 100
    },
    formatDate(time) {
      return moment(time).format('Y年M月d日')
    },
    complete() {
      if (this.completing) return
      this.completing = true
      if (this.order.orderDetail.length === 0) {
        weui.topTips('请设置废品列表')
        return
      }

      completeOrder(this.order.orderNo, this.order.orderDetail.map(i => {
        return {
          cate_id: i.cate.id,
          sum: i.sum,
          price: i.price,
        }
      })).then(result => {
        if ('error' in result || result.status !== 2) {
          weui.topTips('出错啦!')
        } else {
          weui.toast('成功')
          this.order = result
          this.addOrder(result)
        }
      }).finally(() => {
        this.completing = false
        this.editing = false
      })
    }
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
      list-style: none;
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
  .complete-btn {
    width: 100%;
    position: relative;
    bottom: 0;
    .weui-btn {
      display: block;
      margin: 12px auto;
      width: 120px;
    }
  }
}
</style>
