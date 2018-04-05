<template  lang="html">
  <div class="the-all">

    <div class="weui-cells">

      <div class="space">
        <div class="weui-cell nav">
          <router-link :to="'/'" class="weui-cell__hd nav-img">
            <img src="static/images/whitereturn.png">
          </router-link>
          <div class="weui-cell__bd nav-address">
            <p class="nav-text">收货地址</p>
          </div>
          <div class="weui-cell__hd ">
            <router-link :to="'/user/address/create'" class="nav-text">新增地址</router-link>
          </div>
        </div>
      </div>

      <div v-for="(item, key) in addresses">
        <router-link :to="`/user/address/${item.id}/edit`" class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p class="font-first"> {{ item.detail }}</p>
            <p class="font-second"> {{ getFullNameByLocation(item.location) }}</p>
            <p class="font-third"> {{ item.tel }}</p>

          </div>

          <div class="weui-cell__hd">
            <img src="static/images/edit.png">
          </div>
        </router-link>
      </div>

    </div>

  </div>
</template>

<script>
import { getFullNameByLocation } from '@/assets/data_location/list'
import { mapState, mapMutations } from 'vuex'
import { listUserAddress } from '@/service/getData'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['userId', 'addresses']),
  },
  created() {
    this.init()
  },
  methods: {
    formatDate(time) {
      return moment(time).format('Y年M月d日')
    },
    ...mapMutations(['addAddress']),
    getFullNameByLocation,
    init() {
      if (this.addresses.length !== 0) return

      listUserAddress(this.userId).then(addresses => {
        addresses.map(address => {
          this.addAddress(address)
        })
      })
    },
  }
}
</script>

<style lang="scss">
.the-all {
  font-size: 17px;
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
      }
    }
  }
  width: 100%;
  height: 100%;
  background-color: #ffefef;
}
</style>
