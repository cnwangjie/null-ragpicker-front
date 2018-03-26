/* eslint-disable */
<template lang="html">
  <div class="the-all">


    <div class="user-information">
      <div class="base-information">

        <div class="weui-cells" style="margin-top:0px">

          <router-link :to="'/'" class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img :src="info.avatar" class="avatar">
            </div>
            <div class="weui-cell__bd title">
              <p class="na">{{ info.nickName }}</p>

            </div>
          </router-link>

          <div class="between-space">
          </div>

          <router-link :to="'/user/address'" class="weui-cell weui-cell_access">
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
          </router-link>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { getUserInfo } from '@/service/getData'
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      info: {
        nickName: '',
        avatar: '',
      }
    }
  },
  computed: {
    ...mapState(['userId','userInfo'])
  },
  created() {
    this.init()
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    async init () {
      if (this.userInfo.length === 0) {
        await  getUserInfo(this.userId).then(result => {
          if ('error' in result) {

          } else {
            this.setUserInfo(result)
          }
        })
      }
      this.info.nickName = this.userInfo[0].nickname
      this.info.avatar = this.userInfo[0].avatar
    }
  }
}
</script>

<style lang="scss">
.the-all {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #ffefef;
  .user-information {
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
}

</style>
