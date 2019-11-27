<template>
<div>
    <!-- 有预约 -->
    <div v-if="appoint.length != 0">
        <!-- 预约详情卡片 -->
        <div v-for="(item, index) in appoint" :key="index" class="appoint">
            <div class="appoint__left">
                <h3 class="appoint__left-shop">门店：{{item.shop}}</h3>
                <h3 class="appoint__left-seat">座位：{{item.seat}}</h3>
                <h3 class="appoint__left-time">时间：{{item.time}}</h3>
            </div>
            <div v-if="item.no==1?true:false" class="appoint__right">
                <button>取消预约</button>
            </div>
        </div>
    </div>
    <!-- 无预约 -->
    <div v-else class="no">
        <img class="no__img" src="../../imgs/icon/yuyue.png" alt="预约">
        <span class="no__span">{{msg}}</span>
        <button @click="toReserve()" class="no__btn">前往预约</button>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      msg: '您还没有预约，抓紧时间学习吧!',
      appoint: [
        {shop: '济南山东大学店', seat: 'A区 A1', time: '2019.09.09 18:00-20:00', no: 1},
        {shop: '济南山东大学店', seat: 'A区 A1', time: '2019.09.09 18:00-20:00', no: 0}
      ]
    }
  },
  methods: {
    toReserve () {
      let url = '../reserve'
      wx.switchTab({url: url})
    }
  },
  mounted () {
    wx.setNavigationBarTitle({title: '我的预约'})
  }
}
</script>
<style lang="less">
    .appoint{
        width:90%;
        margin: 0 auto;
        margin-top: 3%;
        padding: 3% 0 3% 3%;
        background:rgba(242,242,242,1);
        border-radius:10px;
        display: flex;
        flex-direction: row;
        &__left{
            &-shop, &-seat, &-time{
                margin-top: 2%;
                font-weight:400;
                color:rgba(40,40,40,1);
            }
        }
        &__right{
            display:flex;
            align-items:center;
            margin-left: 2%;
            button{
                background-color: rgba(253,187,13,1);
                border-radius: 10px;
                font-size: 15px;
                color:rgba(40,40,40,1);
            }
        }
    }
    .no{
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