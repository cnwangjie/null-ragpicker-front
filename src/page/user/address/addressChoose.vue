<template lang="html">
  <div class="the-all">

    <div class="weui-cells">

      <div class="space">
        <div class="weui-cell nav">
          <router-link :to="'/'" class="weui-cell__hd nav-img">
            <img src="static/images/whitereturn.png">
          </router-link>
          <div class="weui-cell__bd nav-address">
            <p class="nav-text">选择收货地址</p>
          </div>
          <div class="weui-cell__hd ">
            <router-link :to="'/user/address/creat'" class="nav-text">新增地址</router-link>
          </div>
        </div>
      </div>

      <router-link v-for="item in addresses" :to="''" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd address-content">
          <p>安徽大学清苑校区-行知楼</p>
          <p>九龙路111号安徽大学清苑校区-行知楼</p>
          <p>孙权 17356535320</p>
        </div>
        <router-link :to="'/user/address/edit'" class="weui-cell__hd">
          <img src="static/images/edit.png" class="edit-png">
        </router-link>
      </router-link>

    </div>

  </div>
</template>

<script>
export default {
}
</script>
<style lang="scss">
.the-all {
  .weui-cells {
    margin-top: 0px;
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
        font-size: 17px;
      }
    }
  }
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #ffefef;
}
</style>
