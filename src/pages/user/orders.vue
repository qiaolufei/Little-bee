<template>
    <div>
        <div v-for="(item,index) in cards" :key="index" class="orders">
            <h3 class="orders__time">{{item.time}}</h3>
            <span class="orders__name">{{item.name}}</span>
            <span class="orders__price">{{item.price}}元</span>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {name: '勤奋好学月卡（济南）', time: '2019.09.09 18:00', price: '400'},
        {name: '300元储值卡', time: '2019.09.09 18:00', price: '300'},
        {name: '预约座位', time: '2019.09.09 18:00', price: '12'}
      ]
    }
  },
  mounted () {
    wx.setNavigationBarTitle({title: '我的卡包'})
  }
}
</script>
<style lang="less">
    .orders{
        width:90%;
        margin: 0 auto;
        margin-top: 3%;
        padding: 3% 0 3% 3%;
        background:rgba(242,242,242,1);
        border-radius:10px;
        &__time{
            color: rgba(102,102,102,1);
            font-weight: 500;
        }
        &__name, &__price{
            display: inline-block;
            margin-top: 4%;
            font-size: 20px;
            font-weight:400;
            color:rgba(40,40,40,1);
        }
        &__price{
            position: fixed;
            right: 8%;
        }
    }
</style>