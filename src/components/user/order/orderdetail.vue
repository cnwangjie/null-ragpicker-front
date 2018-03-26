/* eslint-disable */
<template  lang="html">
  <div class="the-all">

    <div class="weui-cells">

      <div class="space">
        <div class="weui-cell nav">
          <router-link :to="'/'" class="weui-cell__hd nav-img">
            <img src="static/images/whitereturn.png" class="returnpng">
          </router-link>
          <div class="weui-cell__bd nav-address">
            <p class="nav-text">订单已完成</p>
          </div>
        </div>
      </div>

      <div class="order-detail">
        <div class="weui-cell">
          <div class="weui-cell__bd">
              <p>接送员6号</p>
          </div>
          <div class="weui-cell__ft" style="font-size:8px;">
            <router-link :to="'/user/ordercreat'" class="weui-swiped-btn weui-swiped-btn btn" style="padding:5px;">再下一单</router-link>
          </div>
        </div>
        <hr>

        <div class="weui-cells">
          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="static/images/1.jpg" alt="" style="width:33px;margin-left:5px;display:block">
            </div>
            <div class="weui-cell__bd" style="text-align:left;margin-left:5px;">
              <p class="font-second">废弃书本</p>
            </div>
            <div class="weui-cell__bd" style="text-align:right">
              <p class="font-second">× 15</p>
            </div>
            <div class="weui-cell__bd" style="text-align:right">
              <p class="font-second">¥ 20</p>
            </div>
          </div>
        </div>

        <div class="weui-cells">
          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="static/images/phone.png" alt="" style="width:15px;margin-left:5px;display:block">
            </div>
            <div class="weui-cell__bd" style="text-align:left;margin-left:10px;">
              <a href="#">联系配送员</a>
            </div>
            <div class="weui-cell__bd" style="text-align:right">
              <p>总售价   ¥ 20</p>
            </div>
          </div>
        </div>

      </div>

      <div class="between-space">
      </div>

      <div class="delivery-information">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>配送信息:</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>送达时间</p>
          </div>
          <div class="weui-cell__ft">
            <p>尽快送达</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>收货地址</p>
          </div>
          <div class="weui-cell__ft">
            <p class="font-second">九龙路111号安徽大学清苑校区-行知楼</p>
            <p class="font-third">孙权 17356535320</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>配送方式</p>
          </div>
          <div class="weui-cell__ft">
            <p>商家配送</p>
          </div>
        </div>
      </div>

      <div class="between-space">
      </div>

      <div class="order-information">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>订单信息:</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>订单号</p>
          </div>
          <div class="weui-cell__ft">
            <p class="font-third">3020 0630 092 8789 118</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>支付方式</p>
          </div>
          <div class="weui-cell__ft">
            <p>在线支付</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>下单时间</p>
          </div>
          <div class="weui-cell__ft">
            <p>2018-03-03 21:56</p>
          </div>
        </div>
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
  width: 100%;
  height: 100%;
  position: fixed;
  //background-color: #ffefef;
  overflow: auto;
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
