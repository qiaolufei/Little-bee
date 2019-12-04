<template>
    <div>
        <div class="user">
            <img :v-if="userInfo.headUrl" class="user__head" :src=userInfo.headUrl >
            <span class="user__name">{{userInfo.name}}</span>
            <span class="user__vip">普通会员</span>
        </div>
        <div style="margin-top:10%">
        <div v-for="(item, index) in menu" :key="index" class="menu" @click="to(item.url)">
            <img :v-if="item.icon" :src=item.icon class="menu__img">
            <span class="menu__name">{{item.name}}</span>
            <!-- 根据menu来判断后面的元素内容 -->
            <span class="menu__choose" v-if="item.name == '我的余额'">260元</span>
            <span class="menu__choose" v-else-if="item.name == '我的积分'">
                <span>26分&emsp;</span>
                <span><wux-icon type="ios-arrow-forward" size="20"/></span>
            </span>
            <span v-else class="menu__choose"><wux-icon type="ios-arrow-forward" size="20"/></span>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      "navigationBarTitleText": "我的",
      menu: [
        {icon: '../imgs/icon/balance.png', name: '我的余额'},
        {icon: '../imgs/icon/cards.png', name: '我的卡包', url: './user/cards'},
        {icon: '../imgs/icon/points.png', name: '我的积分', url: './user/points'},
        {icon: '../imgs/icon/orders.png', name: '我的订单', url: './user/orders'},
        {icon: '../imgs/icon/appointment.png', name: '我的预约', url: './user/appointment'},
        {icon: '../imgs/icon/exchange.png', name: '兑换卡劵', url: './user/exchange'},
        {icon: '../imgs/icon/share.png', name: '分享'},
        {icon: '../imgs/icon/suggest.png', name: '意见反馈', url: './user/suggest'}],
      userInfo: {
        headUrl: '',
        name: ''
      }
    }
  },
  created () {
  },
  methods: {
    to (url) {
      wx.navigateTo({url: url})
    }
  },
  mounted () {
    var _this = this
    wx.getStorage({
      key: 'user',
      success (res) {
        console.log(res.data)
        _this.userInfo.headUrl = res.data.avatarUrl
        _this.userInfo.name = res.data.nickName
      }
    })
    wx.setNavigationBarTitle({title: '我的'})
  }
}
</script>
<style lang="less">
    .user{
        text-align: center;
        background: url('../imgs/icon/back.png');
        background-size:100% 145%;
        &__head{
            border-radius: 50%;
            width: 85px;
            height: 85px;
            margin-top: 6%
        }
        &__name{
            display: block;
            font-size: 22px;
            margin-top: 2%
        }
        &__vip{
            color: gray;
            display: block;
            font-size: 12px;
            margin-top: 2%
        }
    }
    .menu{
        margin-top: 3%;
        height: 20%;
        display: -webkit-box;
        display: flex;
        align-items: center;
        &__img{
            margin-left: 3%;
            width: 25px;
            height: 25px;
        }
        &__name{
            font-size: 20px;
            margin-left: 3%
        }
        &__choose{
            position: fixed;
            right: 3%;
            font-size: 18px;
            color: gray;
        }
    }
</style>
