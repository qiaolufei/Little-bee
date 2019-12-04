<template>
<!-- 授权登录 -->
    <div class="login">
      <h3 class="login__title">小蜜蜂自习室</h3>
      <h3 class="login__m1">申请获取以下权限</h3>
      <h3 class="login__m2">获得你的公开信息(昵称，头像等)</h3>
      <button class="login__btn" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      //判断小程序的API，回调，参数，组件等是否在当前版本可用。
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }
  },
  created () {
  },
  methods: {
    bindGetUserInfo (e) {
      if (e.mp.detail.userInfo) {
        //用户按了允许授权按钮
        console.log(e.mp.detail.userInfo)
        // 缓存用户信息
        wx.setStorage({
          key: 'user',
          data: e.mp.detail.userInfo
        })
        let url = './purchase'
        wx.switchTab({ url: url })
      } else {
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!',
          showCancel: false,
          confirmText: '返回授权',
          success: function(res) {
          }
        })
      }
    }
  },
  mounted () {
    wx.setNavigationBarTitle({title: '授权登录'})
  }
}
</script>
<style lang="less">
.login{
    padding: 10% 0 0 0;
    &__title{
      color: #FDBB0D;
      font-size: 25px;
      text-align: center
    }
    &__m1{
      color: #282828;
      font-size: 20px;
      margin: 4% 0 0 4%;
    }
    &__m2{
      color: #9d9d9d;
      font-size: 20px;
      margin: 4% 0 0 4%;
    }
    &__btn{
      width: 94%;
      background-color: #FDBB0D;
      margin-top: 5%;
    }
}
</style>