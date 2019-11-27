<template>
    <div class="seats">
        <div class="seats__info">
          <div v-for="i in 20" :key="i" class="seats__info-one">
            <img src="../../imgs/icon/seat-no.png" alt="seat">
            <br>
            <span>A1</span>
          </div>
        </div>
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
        &__info{
          width: 100%;
          &-one{
            margin: 2% 0 0 5%;
            display: inline-block;
            text-align: center;
            img{
              width: 51px;
              height: 48.8px;
            }
            span{
              font-weight:400;
              color:rgba(40,40,40,1);
            }
          }
        }
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