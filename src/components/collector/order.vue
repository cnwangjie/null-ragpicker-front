/* eslint-disable */
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

      <div class="all-order">
        <router-link :to="{}">
          <div class="weui-cells">
            <div class="weui-cell">
              <div class="weui-cell__hd">
                <img src="static/images/1.jpg" alt="" style="width:33px;display:block;margin-bottom:40px">
              </div>
              <div class="weui-cell__bd" style="text-align:left;margin-left:10px;">
                <p class="font-first">收购员6号</p>
                <p class="font-third">2018-03-04 16:57</p>
                <p class="font-second" style="margin-top:20px">废弃书本等商品</p>
              </div>

              <div class="weui-cell__bd" style="text-align:right">
                <p style="margin-bottom:31px">订单已完成</p>
                <p>¥ 20</p>
              </div>
            </div>
          </div>
        </router-link>
        <router-link :to="{}">
          <div class="weui-cells">
            <div class="weui-cell">
              <div class="weui-cell__hd">
                <img src="static/images/1.jpg" alt="" style="width:33px;display:block;margin-bottom:40px">
              </div>
              <div class="weui-cell__bd" style="text-align:left;margin-left:10px;">
                <p class="font-first">收购员6号</p>
                <p class="font-third">2018-03-04 16:57</p>
                <p class="font-second" style="margin-top:20px">废弃书本等商品</p>
              </div>

              <div class="weui-cell__bd" style="text-align:right">
                <p style="margin-bottom:31px">订单已完成</p>
                <p>¥ 20</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <!--router-link :to="'/user/addressedit'" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p class="addressinformation-first">安徽大学清苑校区-行知楼</p>
          <p class="addressinformation-second">九龙路111号安徽大学清苑校区-行知楼</p>
          <p class="addressinformation-third">孙权 17356535320</p>
        </div>
        <div class="weui-cell__hd">
          <img src="static/images/edit.png" class="editpng">
        </div>
      </router-link>

      <router-link :to="'/user/addressedit'" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p class="addressinformation-first">安徽大学清苑校区-行知楼</p>
          <p class="addressinformation-second">九龙路111号安徽大学清苑校区-行知楼</p>
          <p class="addressinformation-third">孙权 17356535320</p>
        </div>
        <div class="weui-cell__hd">
          <img src="static/images/edit.png" class="editpng">
        </div>
      </router-link-->
    </div>

  </div>
</template>

<script>
export default {
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
