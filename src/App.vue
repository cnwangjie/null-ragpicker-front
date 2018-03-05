<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './assets/weui.js'
export default {
  name: 'App'
}
</script>

<style>
@import './assets/weui.min.css';
@import './assets/index.css';
@import './assets/index2.css';
@import './assets/detail.css';
@import './assets/order.css';

.bor3 {
  border-top:2px solid #c5b1b1;
}
.bor {
  height: 5px;
  border-top: 5px solid black;
}
.bor2 {
  height: 5px;
  border-top: 5px solid #fafafa;
}
</style>
