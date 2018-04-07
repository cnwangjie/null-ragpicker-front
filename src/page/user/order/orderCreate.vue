<template lang="html">
  <div class="the-all">

    <div class="space">
      <div class="weui-cell nav">
        <router-link :to="'/user/home'" class="weui-cell__hd nav-img">
          <img src="static/images/whitereturn.png">
        </router-link>
        <div class="weui-cell__bd nav-address">
          <p class="nav-text">下单</p>
        </div>
      </div>
    </div>

    <div class="address-choose weui-cells">

      <div class="weui-cells__title">选择地址</div>
      <router-link :to="'/user/address/choose'" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p class="font-second">{{ getFullNameByLocation(localAddress.location) }} {{ localAddress.locDetail }}</p>
          <p class="font-third">{{ localAddress.tel }}</p>
        </div>
        <div class="weui-cell__ft">
        </div>
      </router-link>

    </div>

    <div class="between-space">
    </div>

    <div class="weui-cells">
      <div class="weui-cells__title">废品列表</div>

      <div class="weui-cells" style="margin-top:0px">

        <div class="weui-cell weui-cell_select weui-cell_select-after">
          <div class="weui-cell__hd">
            <label for class="weui-label">请选择</label>
          </div>
          <div class="weui-cell__bd">
            <div class="weui-select used-text" v-on:click="pickCate">
              {{ selectedCate.name }}
            </div>
          </div>
        </div>
        <div class="weui-cell" style="padding-top:0px;padding-bottom:0px;">
          <div class="weui-cell__hd">
            <span class="weui-label"> {{ selectedCate.name }} </span>
          </div>
          <div class="weui-cell__bd">
            <input v-model="selectedCate.sum" class="weui-input" type="number" name="" value="" :placeholder="'请输入数量 ' + (selectedCate.index ? '单位(' + selectedCate.unit + ')' : '')">
          </div>
          <div class="weui-cell__ft">
            <a v-on:click='add'
              class="weui-btn weui-btn weui-btn_plain-default" :class="(this.selectedCate.name && this.selectedCate.sum > 0) ? '' : 'weui-btn_plain-disabled'">
              添加
            </a>
          </div>

        </div>

        <div v-for="(item, index) in creatingOrder.items"  class="weui-cell" style="padding-top:0px;padding-bottom:0px;">
          <div class="weui-cell__hd">
            <label class="weui-label">{{ item.name }}</label>
          </div>
          <div class="weui-cell__bd" style="text-align:center">
            <label class="weui-label">× {{ item.sum }} {{ item.unit }}</label>
          </div>
          <div class="weui-cell__ft">
            <button v-on:click='removeItem(index)' type="button" name="button" class="weui-btn weui-btn_warn">删除</button>
          </div>
        </div>

        <div class="weui-cells__title">备注</div>

        <div class="weui-cell">
          <div class="weui-cell__bd">
            <textarea v-model="creatingOrder.remark" class="weui-textarea" placeholder="请输入文本" rows="3" style="z-index: auto; position: relative; line-height: 25px; font-size: 17px; transition: none; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);"></textarea>
            <div class="weui-textarea-counter" :style="creatingOrder.remark.length > 200 ? {color: 'red'} : {}"><span>{{ creatingOrder.remark.length > 200 ? '字数过多' : '' }} {{ creatingOrder.remark.length }}</span>/200</div>
          </div>
        </div>

      </div>
    </div>
    <div class="weui-btn-area">
      <button v-on:click="submitOrder" class="weui-btn weui-btn_primary">下单</button>
    </div>


  </div>
</template>

<script>
import { weui } from '@/assets/weui'
import { listAllCates, createOrder } from '@/service/getData'
import { mapState, mapMutations, mapGetters } from 'vuex'
import { getFullNameByLocation } from '@/assets/data_location/list'
export default {
  data () {
    return {
      selectedCate: {
        index: null,
        name: '',
        unit: '',
        sum: null,
      }
    }
  },
  computed: {
    ...mapState(['userId', 'cates', 'creatingOrder']),
    ...mapGetters(['getAddress']),
    localAddress() {
      if (this.creatingOrder.selectedAddressId)
        return this.getAddress(this.creatingOrder.selectedAddressId)
      else
        return {
          location: 0,
          locDetail: '未选择',
          tel: null,
        }
    },
  },
  created() {
    this.init()
  },
  methods: {
    ...mapMutations(['setCates', 'addItem', 'removeItem']),
    getFullNameByLocation,
    init() {
      if (this.cates.length === 0) {
        listAllCates().then(cates => {
          if ('error' in cates) {
            console.log(cates)
          } else {
            this.setCates(cates)
          }
        })
      }
    },
    pickCate() {
      const items = this.cates.map((i, j) => {
        return {
          label: i.name,
          value: j,
        }
      })
      weui.picker(items, {
        container: 'body',
        defaultValue: this.selectedCate.index || 0,
        depth: 1,
        onChange: result => {
        },
        onConfirm: result => {
          const r = result.shift()
          this.selectedCate.index = r.value
          this.selectedCate.name = this.cates[r.value].name
          this.selectedCate.unit = this.cates[r.value].unit
        },
        id: 'cate-picker'
      })
    },
    add() {
      if (this.selectedCate.name && this.selectedCate.sum > 0) {
        this.addItem(Object.assign({},
          this.cates[this.selectedCate.index],
          {sum: this.selectedCate.sum}))
        this.selectedCate.name = ''
        this.selectedCate.sum = null
      }
    },
    submitOrder() {
      if (!this.creatingOrder.selectedAddressId) {
        weui.topTips('请选择地址')
        return
      }

      if (this.creatingOrder.items.length === 0) {
        weui.topTips('请添加废品')
        return
      }

      createOrder(this.userId, {
        addressId: this.creatingOrder.selectedAddressId,
        remark: this.creatingOrder.remark,
        orderDetails: this.creatingOrder.items,
      }).then(result => {
        if ('error' in result) {
          console.log(result)
          weui.topTips('出错啦')
        } else {
          weui.toast('下单成功')
          this.$router.push('/user/home')
        }
      })
    },
  }
}

</script>

<style lang="scss">
.the-all {
  font-size: 17px;
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
  .between-space {
    width: 100%;
    height: 30px;
    background-color: #ffefef;
  }
  .the-rest {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #ffefef;
  }
  .used-text {
    font-size: 15px;
  }
}

</style>
