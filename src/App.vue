<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './assets/weui.js'
import { getToken, getUserByToken } from '@/service/getData'
import { mapState, mapMutations } from 'vuex'
import { listUserAddress } from '@/service/getData'
export default {
  data () {
    return {
      address: [],
    }
  },
  name: 'App',
  created() {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjEsImlkdCI6InVzZXIiLCJleHAiOjE1MjIwOTA1ODN9.-wlI6Chfz_YUTMl-dVVIQQnoLQB_woBus0qDh9p-qrJWLvqqGx0qXD-Xbau9TCpohnMj8o-He-CghiUbTZ9U7g'
    // const userId = getUserByToken(token).sub
    localStorage.setItem('jwt-token', token)
    const userId = 1
    // console.log(getUserByToken(token))
    this.setUserId(userId)
    //console.log(localStorage.getItem('userId'))
    //console.log(this.address)

  },
  methods: {
    ...mapMutations(['setUserId']),
  }
}
</script>

<style>
@import './assets/weui.min.css';
.the-all {
  width: 100%;
  height: 100%;
  font-family: cursive;
}
.font-first {
  font-weight: bolder;
}
.font-second {
  font-size: 15px;
}
.font-third {
  padding-top:8px;
  font-size: 13px;
  color: #a59191;
}
</style>
