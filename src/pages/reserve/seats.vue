<template>
    <div class="seats">
        
        <button class="seats__place">查看位置分布</button>
        <button class="seats__submit" @click="submit">确定</button>
    </div>
</template>

<script>
export default {
  methods: {
    submit () {
      const url = './order'
      wx.navigateTo({url: url})
    }
  },
  mounted () {
    wx.setNavigationBarTitle({title: '选择座位'})
  }
}
</script>

<style lang="less">
    .seats{
        &__place{
            background-color: #fff;
            border:1px solid #FDBB0D;
            width: 94%;
            position: fixed;
            bottom: 13%;
            left: 3%;
            font-size: 18px;
            color: #FDBB0D;
        }
        &__submit{
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