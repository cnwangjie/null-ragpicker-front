/* eslint-disable */
<template lang="html">
  <div class="theall">

    <div class="userinformation">
      <div class="baseinfo">

        <div class="weui-cells">

          <router-link :to="'/'" class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="static/images/1.jpg" class="avatar">
            </div>
            <div class="weui-cell__bd title">
              <p class="na">{{ username }}</p>
              <p class="ph">{{ userphone }}</p>
            </div>
          </router-link>

          <div class="betweenspace">
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
export default {
  data () {
    return {
      username: '王尼玛',
      userphone: '1777777'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.theall {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #ffefef;
}
.userinformation {
  .betweenspace {
    width: 100%;
    height:50px;
    background-color: #ffefef;
  }
  .title {
    .na {
      font-weight: bold;
    }
    .ph {
      font-family:"Times New Roman",Georgia,Serif
    }

  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 100px
  }
}
</style>
