<template>
    <div class="appointmentSuc">
        <img class="appointmentSuc__img" src="../../imgs/icon/success-yuyue.png" alt="预约成功">
        <span class="appointmentSuc__span">{{msg}}</span>
        <button @click="toOrders()" class="appointmentSuc__btn">查看详情</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '恭喜您，预约成功!'
    }
  },
  methods: {
    toOrders () {
      let url = '../user/appointment'
      wx.navigateTo({url: url})
    }
  },
  mounted () {
    wx.setNavigationBarTitle({title: '预约成功'})
  }
}
</script>
<style lang="less">
    .appointmentSuc{
        text-align: center;
        &__img{
            display: block;
            margin: 0 auto;
            margin-top: 20%;
            height: 177px;
            width:139px
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