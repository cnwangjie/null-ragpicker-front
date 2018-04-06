<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { getToken, getUserByToken } from '@/service/getData'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      address: [],
    }
  },
  name: 'App',
  created() {
    const token = getToken()
    const userId = getUserByToken(token).sub
    this.setUserId(userId)
  },
  methods: {
    ...mapMutations(['setUserId']),
  }
}
</script>

<style>
@import './assets/weui.min.css';
.the-all {
  font-family: cursive;
}
.font-first {
  font-weight: bolder;
}
.font-second {
  font-size: 15px;
}
.font-third {
  font-size: 13px;
  color: #a59191;
}
</style>
