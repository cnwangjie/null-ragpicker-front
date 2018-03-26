/* eslint-disable */
<template lang="html">
  <div class="the-all">

    <div class="space">
      <div class="weui-cell nav">
        <router-link :to="'/user/address'" class="weui-cell__hd nav-img">
          <img src="static/images/whitereturn.png" class="return-png">
        </router-link>
        <div class="weui-cell__bd nav-address">
          <p class="nav-text">新增地址</p>
        </div>
      </div>
    </div>

      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">联系人</label>
        </div>
        <div class="weui-cell__bd">
          <input   class="weui-input" type="text" name="" value="" placeholder="姓名">
        </div>
    	</div>

      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">电话</label>
        </div>
        <div class="weui-cell__bd">
          <input v-model="localAddress.tel" class="weui-input" type="number" name="" value="" placeholder="手机号码">
        </div>
    	</div>

      <router-link :to="''" v-on:click="" class="weui-cell weui-cell_access" id="picker">
        <div class="weui-cell__hd">
          <label class="weui-label">地址</label>
        </div>
        <div class="weui-cell__bd">
          <input v-model="localAddress.location" class="weui-input" type="text" name="" value="" placeholder="选择收货地址">
        </div>
        <div class="weui-cell__ft">
        </div>
      </router-link>


      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">详细地址</label>
        </div>
        <div class="weui-cell__bd">
          <input v-model="localAddress.detail" class="weui-input" type="text" name="" value="" placeholder="输入详细地址">
        </div>
    	</div>

      <div class="weui-btn-area">
        <div v-on:click="submit" class="weui-btn weui-btn_primary">提交</div>
      </div>


      <div class="the-rest">
      </div>


  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { addAddress,listUserAddress } from '@/service/getData'
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
    ...mapState(['userId',['address']]),
  },
  methods: {
    ...mapMutations(['addAddress']),
    async init() {
      if (this.address.length === 0) {
        await listUserAddress(this.userId).then(addresses => {
          addresses.map(address => {
            this.addAddress(address)
          })
        })
      }
    },
    submit () {
      addAddress(this.userId, this.localAddress).then(result => {
        if ('error' in result) {
          //
        } else {
          this.addAddress(result)
        }
      })
    },
  }
}
</script>

<style lang="scss">
.the-all {
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
