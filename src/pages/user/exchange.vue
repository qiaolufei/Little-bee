<template>
<!-- 兑换卡劵 -->
    <div class="exchange">
        <div class="exchange__div">
            <input type="text" placeholder="请填写您的兑换码">
        </div>

      <button class="exchange__button" @click="submit">确认</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      place: '',
      suggest: '',
      placeList: [
        "山东",
        "沈阳"
      ]
    }
  },
  methods: {
    subbmit () {}
  },
  mounted () {
    wx.setNavigationBarTitle({title: '兑换卡劵'})
  }
}
</script>
<style lang="less">
.exchange{
    padding: 3% 0 0 0;
    &__div{
      color: rgba(152,152,152,1);
      width: 90%;
      margin: 0 auto;
      padding: 5% 2% 5% 2%;
      background-color: #F2F2F2;
      border-radius: 3%;
    }
    &__button{
      background-color: #FDBB0D;
      border:1px solid #FDBB0D;
      width: 94%;
      position: fixed;
      bottom: 3%;
      left: 3%;
      font-size: 18px;
      color: #282828
    }
}
</style>