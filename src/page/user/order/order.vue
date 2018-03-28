<template  lang="html">
  <div class="the-all">

    <div class="weui-cells">

      <div class="space">
        <div class="weui-cell nav">
          <router-link :to="'/'" class="weui-cell__hd nav-img">
            <img src="static/images/whitereturn.png">
          </router-link>
          <div class="weui-cell__bd nav-address">
            <p class="nav-text">我的订单</p>
          </div>
        </div>
      </div>

      <div v-for="(item, key) in orders" class="all-order">
        <router-link :to="{}" >
          <div class="weui-cells">
            <div class="weui-cell">
              <div class="weui-cell__hd">
                <img src="static/images/1.jpg" alt="" style="width:33px;display:block;margin-bottom:40px">
              </div>
              <div class="weui-cell__bd" style="text-align:left;margin-left:10px;">
                <p class="font-first">{{ item.collector.info.name }}</p>
                <p class="font-third">{{ item.createdAt }}</p>
                <p v-if="item.orderDetail.length > 0" class="font-second" style="margin-top:20px">{{ item.orderDetail[0].cate.name }}等物品</p>
              </div>

              <div class="weui-cell__bd" style="text-align:right">
                <p style="margin-bottom:31px">订单已完成</p>
                <p>¥ 20</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import { listOrdersByUser } from'@/service/getData'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['userId','orders'])
  },
  created() {
    this.init()
  },
  methods: {
    ...mapMutations(['setOrder']),
    init () {
      if (this.orders.length === 0) {
        listOrdersByUser(this.userId).then(result => {
          if ('error' in result) {

          } else {
            result.map(result => {
              this.setOrder(result)
            })
          }
        })
      }

    }
  }
}
</script>

<style lang="scss">
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
  .font-first {
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
  height: 100%;
  position: fixed;
  background-color: #ffefef;
}
</style>
