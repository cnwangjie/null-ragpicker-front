/* eslint-disable */
<template  lang="html">
  <div class="theall">

    <div class="weui-cells">

      <div class="space">
        <div class="weui-cell nav">
          <router-link :to="'/user/home'" class="weui-cell__hd navimg">
            <img src="static/images/whitereturn.png" class="returnpng">
          </router-link>
          <div class="weui-cell__bd navaddress">
            <p class="navtext">收货地址</p>
          </div>
          <div class="weui-cell__hd ">
            <router-link :to="'/user/addresscreat'" class="navtext">新增地址</router-link>
          </div>
        </div>
      </div>

      <router-link :to="'/user/addressedit'" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p class="addressinformation1">安徽大学清苑校区-行知楼</p>
          <p class="addressinformation2">九龙路111号安徽大学清苑校区-行知楼</p>
          <p class="addressinformation3">孙权 17356535320</p>
        </div>
        <div class="weui-cell__hd">
          <img src="static/images/edit.png" class="editpng">
        </div>
      </router-link>

      <router-link :to="'/user/addressedit'" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p class="addressinformation1">安徽大学清苑校区-行知楼</p>
          <p class="addressinformation2">九龙路111号安徽大学清苑校区-行知楼</p>
          <p class="addressinformation3">孙权 17356535320</p>
        </div>
        <div class="weui-cell__hd">
          <img src="static/images/edit.png" class="editpng">
        </div>
      </router-link>

    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.theall {
  font-size: 17px;
  .weui-cells {
    margin-top: 0px;
  }
  .space {
    width: 100%;
    background-color: #7979a5;
    .nav {
      padding: 35px 35px 35px 10px;
      .navimg {
        position: relative;
        top: 3px;
      }
      .navaddress {
        position: relative;
        left: 20px;
      }
      .navtext {
        color: white;
        font-family: fantasy;
      }
    }
  }
  .addressinformation1{
    font-weight: bolder;
  }
  .addressinformation2 {
    font-size: 13px;
  }
  .addressinformation3 {
    padding-top:8px;
    font-size: 11px;
    color: #a59191;
  }
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #ffefef;
}
</style>
