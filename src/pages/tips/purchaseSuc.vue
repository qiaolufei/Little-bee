<template>
    <div class="purchaseSuc">
        <img class="purchaseSuc__img" src="../../imgs/icon/success-goumai.png" alt="购买成功">
        <span class="purchaseSuc__span">{{msg}}</span>
        <button @click="toOrders()" class="purchaseSuc__btn">查看详情</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '恭喜您，购买成功!'
    }
  },
  methods: {
    toOrders () {
      let url = '../user/orders'
      wx.navigateTo({url: url})
    }
  },
  mounted () {
    wx.setNavigationBarTitle({title: '购买成功'})
  }
}
</script>
<style lang="less">
    .purchaseSuc{
        text-align: center;
        &__img{
            display: block;
            margin: 0 auto;
            margin-top: 20%;
            height: 97px;
            width:130px
        }
        &__span{
            display: block;
            font-size: 18px;
            margin-top: 6%;
        }
        &__btn{
            width: 94%;
            background:rgba(253,187,13,1);
            border:none;
            border-radius:10px;
            margin-top: 4%;
            color: rgba(40,40,40,1);
        }
    }
</style>