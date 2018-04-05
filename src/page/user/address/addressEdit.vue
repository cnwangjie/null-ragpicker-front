<template lang="html">
  <div class="the-all">

    <div class="space">
      <div class="weui-cell nav">
        <router-link :to="'/user/address'" class="weui-cell__hd nav-img">
          <img src="static/images/whitereturn.png">
        </router-link>
        <div class="weui-cell__bd nav-address">
          <p class="nav-text">{{ isCreate ? "新增地址" : "修改地址" }}</p>
        </div>
        <div v-if="!isCreate" class="weui-cell__ft">
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
        <input v-on:click="pickLocation" v-model="locationName" class="weui-input" type="text" name="" placeholder="">
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
      <div v-on:click="confirm" class="weui-btn weui-btn_primary">{{ isCreate ? "确认添加" : "确认修改" }}</div>
    </div>

    <div class="therest">
    </div>

  </div>
</template>

<script>
import { weui } from '@/assets/weui'
import { mapState, mapMutations, mapGetters } from 'vuex'
import {
  listUserAddress,
  deleteAddress,
  updateAddress,
  addAddress,
} from '@/service/getData'
import {
  default as dataLocationItems,
  list as dataLocationList,
  getFullNameByLocation,
} from '@/assets/data_location/list'
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
    ...mapGetters(['getAddress']),
    locationName() {
      return getFullNameByLocation(this.localAddress.location)
    },
    isCreate() {
      return this.$route.name === 'userAddressCreate'
    },
  },
  methods: {
    ...mapMutations(['addAddress','editAddress','deleteAddress']),
    init() {
      if (this.isCreate) return

      const address = this.getAddress(+this.$route.params.id)
      Object.assign(this.localAddress, address)
    },
    confirm() {
      if (this.localAddress.tel < 1E10 || this.localAddress.tel > 2E10) {
        weui.topTips('请输入正确的手机号')
        return
      }

      if (!(this.localAddress.location in dataLocationList)) {
        weui.topTips('请选择地址')
        return
      }

      if (this.localAddress.detail.length < 1) {
        weui.topTips('请输入完整的地址')
        return
      }

      if (this.isCreate) {
        addAddress(this.userId, this.localAddress).then(result => {
          if ('error' in result) {
            weui.topTips('保存失败')
          } else {
            this.addAddress(result)
            weui.toast('保存成功')
            this.$router.go(-1)
          }
        })
      } else {
        updateAddress(this.localAddress.id, this.localAddress).then(result => {
          if('error' in result) {
            weui.topTips('保存失败')
          } else {
            this.editAddress(this.localAddress)
            weui.toast('保存成功')
            this.$router.go(-1)
          }
        })
      }
    },
    addressDelete() {
      deleteAddress(this.localAddress.id).then(result => {
        if (result.status === 'success') {
          this.deleteAddress(this.localAddress.id)
          this.$router.push('/user/address')
        }
      })
    },
    pickLocation() {
      const loc = this.localAddress.location
      const defaultValue = []
      defaultValue.push((loc / 1E4 << 0) * 1E4)
      if (dataLocationList[(loc / 1E2 << 0) * 1E2]) defaultValue.push((loc / 1E2 << 0) * 1E2)
      defaultValue.push(loc)
      weui.picker(dataLocationItems, {
        container: 'body',
        depth: 3,
        defaultValue,
        onChange: result => {
        },
        onConfirm: result => {
          this.localAddress.location = +result.slice().pop().value
        },
        id: 'location-picker'
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
