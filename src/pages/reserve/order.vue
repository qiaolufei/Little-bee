<template>
    <div class="order">
        <div class="order__info">
            <h1 class="order__info-title">订单详情</h1>
            <h3 class="order__info-msg">门店：{{info.place}}</h3>
            <h3 class="order__info-msg">座位：{{info.seat}}</h3>
            <h3 class="order__info-msg">开始时间：{{info.stime}}</h3>
            <h3 class="order__info-msg">结束时间：{{info.etime}}</h3>
        </div>
        <div class="order__price">
            <span>价格</span>
            <span class="order__price-yuan">{{price}}元</span>
        </div>
        <button class="order__button">确认支付</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      info: {
        place: '济南山东大学店',
        seat: 'A区 A1',
        stime: '2019.09.06 18:00',
        etime: '2019.09.06 21:00'},
      price: 20
    }
  },
  mounted () {
    wx.setNavigationBarTitle({title: '确认订单'})
  }
}
</script>
<style lang="less">
    .order{
        &__info{
            width:90%;
            margin: 0 auto;
            margin-top: 3%;
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 58px 2px rgba(0, 0, 0, 0.1);
            border-radius:10px;
            padding: 3% 0 3% 3%;
            &-title{
                color: rgba(40,40,40,1);
                font-weight: 500;
                font-size: 20px;
            }
            &-msg{
                margin-top: 1%;
                font-weight:400;
                color:rgba(102,102,102,1);
            }
        }
        &__price{
            width:90%;
            margin: 0 auto;
            margin-top: 3%;
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 58px 2px rgba(0, 0, 0, 0.1);
            border-radius:10px;
            padding: 3% 0 3% 3%;
            font-weight: 500;
            font-size: 20px;
            &-yuan{
                position: fixed;
                right: 8%;
            }
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