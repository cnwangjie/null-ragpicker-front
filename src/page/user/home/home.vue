<template lang="html">
  <div class="the-all">


    <div class="user-information">
      <div class="base-information">

        <div class="weui-cells no-top">

          <router-link :to="'/user/address'" class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img :src="userInfo.avatar" class="avatar">
            </div>
            <div class="weui-cell__bd title">
              <p class="na">{{ userInfo.nickname }}</p>
            </div>
          </router-link>

          <div class="between-space" style="height:35px">
          </div>

          <!--router-link :to="'/user/address'" class="weui-cell weui-cell_access">
            <div class="weui-cell__bd">
              <p>收货地址</p>
            </div>
            <div class="weui-cell__ft">
            </div>
          </router-link>

          <router-link :to="'/user/order'" class="weui-cell weui-cell_access">
            <div class="weui-cell__bd">
              <p>我的订单</p>
            </div>
            <div class="weui-cell__ft">
            </div>
          </router-link-->
          <div v-for="(item, key) in orders" class="all-order">
            <router-link :to="{}">
              <div class="weui-cells no-top">
                <div class="weui-cell">

                  <div class="weui-cell__bd order-information">
                    <p class="font-third">{{ formatDate(item.createdAt) }}</p>
                    <p v-if="item.orderDetail.length > 0" class="font-second" >{{ item.orderDetail[0].cate.name }}等物品</p>
                  </div>

                  <div class="weui-cell__bd order-status">
                    <p class="status">订单已完成</p>
                    <p v-if="item.status == 2" class="amount"> {{ item.status.toFixed(2)}} 元 </p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>

        </div>

      </div>
    </div>

    <div class="add-order">
      <router-link :to="'/user/order/create'" class="weui-btn weui-btn_mini weui-btn_primary">下单</router-link>
    </div>

  </div>
</template>

<script>
import moment from 'moment'
import { mapState, mapMutations } from 'vuex'
import { listOrdersByUser, getUserInfo } from '@/service/getData'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['userId', 'userInfo', 'orders']),
  },
  created() {
    this.init()
  },
  methods: {
    ...mapMutations(['setUserInfo', 'addOrder']),
    init () {
      if (!('nickname' in this.userInfo)) {
        getUserInfo(this.userId).then(result => {
          if ('error' in result) {

          } else {
            this.setUserInfo(result)
          }
        })
      }

      if (this.orders.length === 0) {
        listOrdersByUser(this.userId).then(result => {
          if ('error' in result) {

          } else {
            result.map(result => {
              this.addOrder(result)
            })
          }
        })
      }
    },
    formatDate(time) {
      return moment(time).format('Y年M月d日')
    },

  }
}
</script>

<style lang="scss">
.the-all {
  background-color: #ffefef;
  .user-information {
    .no-top {
       margin-top:0px;
    }
    .order-information {
       height: 60px;
       .font-second {
         position: absolute;
         bottom: 15px;
       }
    }
    .order-status {
       height: 65px;
       text-align:right;
       .status{
         color: #a59191;
       }
       .amount {
         font-size: 15px;
         margin-top: 12px;
       }
    }
    .between-space {
      width: 100%;
      height:50px;
      background-color: #ffefef;
    }
    .title {
      .na {
        margin-left: 10px;
        font-family: "Times New Roman", Times, serif;
        font-weight:bold;
      }

    }
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 100px
    }
  }
  .add-order {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 9;
    a {
      display: block;
      margin: 0 auto 12px;
      width: 120px;
    }
  }
}

</style>
