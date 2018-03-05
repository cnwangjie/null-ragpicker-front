/* eslint-disable */
<template lang="html">
  <div class="theall">

    <div class="navbar">
      <div class="navimg" v-on:click="back">
        <img src="static/images/return.png">
      </div>
      <img src="static/images/header.jpg" style="width: 100%">
      <div class="header">废品回收员已接单</div>
    </div>

    <div class="title">订单详细信息：</div>
    <div class="order-content">
      <table border="0">
        <tr>
          <td style="width: 20%"><img src="static/images/garbage/bottle.jpg" class="garbage"/></td>
          <td style="width: 30%">{{waste}}<br>X{{themount}}</td>
          <td style="width: 30%">预成交金额：<br>¥{{themoney}}</td>
        </tr>
        <tr>
          <td colspan="2">2018-01-01 18:51:07</td>
          <td>订单处理中</td>
        </tr>
      </table>
      <div class="bor3">
      </div>
    </div>

    <div class="title">废品回收员详细信息：</div>
    <div class="fastman">
      <img src="static/images/fastman.jpg" style="width: 100px;height: 100px;margin:5px 50px 5px 10px;">
      姓名：{{username}}<br>
      联系电话：{{userphone}}
    </div>
    <div class="bor3">
    </div>

    <div class="title">
      目前市场{{waste}}行情简析（仅供参考）<br>
      <ul>
        <li>市场{{waste}}平均单价：{{price}}元/个</li>
        <li>平台交易总量：{{dealmount}}</li>
      </ul>
    </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      themount: '52',
      themoney: '100',
      username: '张全蛋',
      userphone: '177777',
      waste: '废弃塑料瓶',
      dealmount: '100',
      price: '1'
    }
  },
  methods: {
    back () {
      console.log(2)
    }
  }
}
</script>

<style lang="scss">
</style>
