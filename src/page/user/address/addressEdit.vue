<template lang="html">
  <div class="the-all">

    <div class="space">
      <div class="weui-cell nav">
        <router-link :to="'/user/address'" class="weui-cell__hd nav-img">
          <img src="static/images/whitereturn.png">
        </router-link>
        <div class="weui-cell__bd nav-address">
          <p class="nav-text">修改地址</p>
        </div>
        <div class="weui-cell__ft">
          <div v-on:click="addressDelete" class="nav-text">删除地址</div>
        </div>
      </div>
    </div>

    <div class="weui-cell">
      <div class="weui-cell__hd">
        <label class="weui-label">电话</label>
      </div>
      <div class="weui-cell__bd">
        <input v-model="localAddress.tel" class="weui-input" type="text" name="" value="" placeholder="手机号码">
      </div>
    </div>
    <router-link :to="''" class="weui-cell weui-cell_access">
      <div class="weui-cell__hd">
        <label class="weui-label">地址</label>
      </div>
      <div class="weui-cell__bd">
        <input v-model="localAddress.location" class="weui-input" type="text" name="" value="" placeholder="">
      </div>
      <div class="weui-cell__ft">
      </div>
    </router-link>

    <div class="weui-cell">
      <div class="weui-cell__hd">
        <label class="weui-label">详细地址</label>
      </div>
      <div class="weui-cell__bd">
        <input v-model="localAddress.detail" class="weui-input" type="text" name="" value="" placeholder="详细地址">
      </div>
    </div>

    <div class="weui-btn-area">
      <div v-on:click="confirm" class="weui-btn weui-btn_primary">确认修改</div>
    </div>

    <div class="therest">
    </div>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { listUserAddress,deleteAddress,updateAddress } from '@/service/getData'
export default {
  data () {
    return {
      localAddress: {
        id: '',
        location: null,
        detail: '',
        tel: null,
      },
    }
  },
  created() {
    this.init()
  },
  computed: {
    ...mapState(['userId','addresses']),
  },
  methods: {
    ...mapMutations(['addAddress','editAddress','deleteAddress']),
    init() {
      for (let i = 0; i < this.addresses.length; i++) {
        if (this.addresses[i].id === +this.$route.params.id) {
          return Object.assign(this.localAddress, this.addresses[i])
        }
      }
    },
    confirm() {
      //console.log(this.address)
      updateAddress(this.$route.params.id, this.localAddress).then(result => {
        if('error' in result) {

        } else {
          this.editAddress(this.localAddress)
          //console.log(this.address)
        }
      })
    },
    addressDelete() {
      deleteAddress(this.$route.params.id).then(result =>{
        if('error' in result) {

        } else {
          this.deleteAddress(this.$route.params.id)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.the-all{
  font-size: 17px;
  .the-rest {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #ffefef;
  }
  .regtext-title {
    text-align: center;
  }
  .space {
    width: 100%;
    background-color: #7979a5;
    .img-rubbish {
      height: 32px;
      width: 32px;
      background-color: inherit;
    }
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
}

</style>
