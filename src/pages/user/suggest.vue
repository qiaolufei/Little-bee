<template>
<!-- 意见反馈 -->
    <div class="suggest">
      <picker
          @change="placeChange"
          :value=index
          :range="placeList">
        <div class="suggest__choose">
          <span v-if="place == ''">选择您所在的门店</span>
          <span style="color:#000" v-else>{{place}}</span>
          <wux-icon class="suggest__choose-icon" type="ios-arrow-forward" size="16"/>
        </div>
      </picker>

      <div class="suggest__input">
        <textarea placeholder="留下您对小蜜蜂的意见~" v-model="suggest" cols="40" rows="15"></textarea>
      </div>
      <button class="suggest__button" @click="submit">确认</button>
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
    placeChange (e) {
      this.place = this.placeList[e.mp.detail.value]
    },
    submit () {
      wx.showToast({
        title: '提交成功', //提示的内容,
        icon: 'success', //图标,
        duration: 1000, //延迟时间,
        mask: true, //显示透明蒙层，防止触摸穿透,
        success: res => {
          // 延迟两秒后跳转
          let t;
          clearTimeout(t)
          t = setTimeout(function () {
            wx.switchTab({ url: '../user' });
          }, 2000);
        }
      })
    }
  },
  mounted () {
    wx.setNavigationBarTitle({title: '意见反馈'})
  }
}
</script>
<style lang="less">
.suggest{
    padding: 3% 0 0 0;
    &__choose{
      color: rgba(152,152,152,1);
      width: 90%;
      margin: 0 auto;
      padding: 5% 2% 5% 2%;
      background-color: #F2F2F2;
      border-radius: 3%;
      &-icon{
        position: fixed;
        right: 7%;
      }
    }
    &__input{
      width: 90%;
      margin: 0 auto;
      margin-top: 20px;
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