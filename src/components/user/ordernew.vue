/* eslint-disable */
<template lang="html">
  <div class="theall">

    <div class="space">
      <div class="weui-cell nav">
        <router-link :to="''" class="weui-cell__hd navimg">
          <img src="static/images/whitereturn.png" class="returnpng">
        </router-link>
        <div class="weui-cell__bd navaddress">
          <p class="navtext">下单</p>
        </div>
      </div>
    </div>

    <div class="addresschose">

      <div class="weui-cell weui-cell_link">
        <div class="weui-cell__bd">选择地址</div>
      </div>
      <router-link :to="'/user/choseaddress'" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p class="addressinformation2">九龙路111号安徽大学清苑校区-行知楼</p>
          <p class="addressinformation3">孙权 17356535320</p>
        </div>
        <div class="weui-cell__ft">
        </div>
      </router-link>

    </div>

    <div class="betweenspace">
    </div>


    <div class="unused">
      <div class="weui-cell weui-cell_link">
        <div class="weui-cell__bd">废品类型</div>
      </div>

      <div class="weui-cells" style="margin-top:0px">

        <div class="weui-cell weui-cell_select weui-cell_select-after">
          <div class="weui-cell__hd">
            <label for class="weui-label">请选择</label>
          </div>
          <div class="weui-cell__bd">
            <select v-model="selected" class="weui-select usedtext" name="select2">
              <option v-for="item in items" v-bind:value="item.message" >{{ item.message }} 参考单价： {{ item.price }}</option>
            </select>
          </div>
        </div>
        <div class="weui-cell" style="padding-top:0px;padding-bottom:0px;">
          <div class="weui-cell__hd">
            <span class="weui-label"> {{ selected }} </span>
          </div>
          <div class="weui-cell__bd">
            <input v-model="thismount" class="weui-input" type="number" name="" value="" placeholder="请输入数量">
          </div>
          <div class="weui-cell__ft">
            <!--a href="addused" class="weui-btn weui-btn_mini_warn delete">添加</a-->
            <button v-on:click='addused' type="button" name="button" class="weui-btn weui-btn_mini_warn delete">添加</button>
          </div>

        </div>

        <div class="weui-cell weui-cell_link">
          <div class="weui-cell__bd">订单列表</div>
        </div>

        <div v-for="(add,index) in adds"  class="weui-cell" style="padding-top:0px;padding-bottom:0px;">
          <div class="weui-cell__hd">
            <label class="weui-label">{{ add.message }}</label>
          </div>
          <div class="weui-cell__bd" style="text-align:center">
            <label class="weui-label">× {{ add.mount }}</label>
          </div>
          <div class="weui-cell__ft">
            <!--a href="deleteused" class="weui-btn weui-btn_mini_warn delete">删除</a-->
            <button v-on:click='deleteused($index)' type="button" name="button" class="weui-btn weui-btn_mini_warn delete">删除</button>
          </div>
        </div>

      </div>
    </div>
    <div class="weui-btn-area">
      <button v-on:click="submit" class="weui-btn weui-btn_primary">下单</button>
    </div>
      <!--div class="weui-cells weui-cells_checkbox">
        <label class="weui-cell weui-check__label" for="s11">
          <div class="weui-cell__hd">
            <input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked='checked'>
            <i class="weui-icon-checked"></i>
          </div>
          <div class="weui-cell__bd">
            <p>废品A</p>
          </div>
        </label>
      </div>
      <div class="weui-cells weui-cells_checkbox">
        <label class="weui-cell weui-check__label" for="s12">
          <div class="weui-cell__hd">
            <input type="checkbox" class="weui-check" name="checkbox1" id="s12" checked=''>
            <i class="weui-icon-checked"></i>
          </div>
          <div class="weui-cell__bd">
            <p>废品B</p>
          </div>
        </label>
      </div>
      <div class="weui-cells weui-cells_checkbox">
        <label class="weui-cell weui-check__label" for="s13">
          <div class="weui-cell__hd">
            <input type="checkbox" class="weui-check" name="checkbox1" id="s13" checked='checked'>
            <i class="weui-icon-checked"></i>
          </div>
          <div class="weui-cell__bd">
            <p>废品C</p>
          </div>
        </label>
      </div-->


  </div>
</template>

<script>
export default {
  data () {
    return {
      selected:'Foo',
      items: [
        { message: 'Foo',price: '10' },
        { message: 'Bar',price: '20' },
        { message: 'Bac',price: '30' },
      ],
      thismount: '',
      adds: [],
      index: '0',
    }
  },
  methods: {
    addused () {
      this.adds.push({
        index: this.index++,message: this.selected,mount: this.thismount,
      })
      this.thismount = ''
    },
    deleteused (index) {
      this.adds.splice(index-1,1)
    },
    submit () {
    }
  }
}

</script>

<style lang="scss">
.theall {
  font-size: 17px;
  .space {
    width: 100%;
    background-color: #7979a5;
    .nav {
      padding: 35px 35px 35px 10px;
      .navimg {
        position: relative;
        top: 3px;
      }
      .navaddress {
        position: relative;
        left: 20px;
      }
      .navtext {
        color: white;
        font-family: fantasy;
      }
    }
  }
  .addressinformation2 {
    font-size: 13px;
  }
  .addressinformation3 {
    padding-top:8px;
    font-size: 11px;
    color: #a59191;
  }
  .betweenspace {
    width: 100%;
    height: 30px;
    background-color: #ffefef;
  }
  .therest {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #ffefef;
  }
  .usedtext {
    font-size: 15px;
  }
  .delete {
    //background-color: #d89797;
    color: black;
  }
}

</style>
