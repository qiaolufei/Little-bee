<template>
    <div>
        <!-- 套餐卡片 -->
        <div v-for="(item,index) in cards" :key="index" class="cards">
            <span class="cards__name">{{item.name}}</span>
            <h3 class="cards__deadline">有效期至：{{item.deadline}}</h3>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {name: '勤奋好学月卡（济南）', deadline: '2019.09.09 18:00'},
        {name: '刻苦研读周卡（沈阳）', deadline: '2019.09.09 18:00'}
      ]
    }
  },
  mounted () {
    wx.setNavigationBarTitle({title: '我的卡包'})
  }
}
</script>
<style lang="less">
    .cards{
        width:90%;
        margin: 0 auto;
        margin-top: 3%;
        padding: 3% 0 3% 3%;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 58px 2px rgba(0, 0, 0, 0.1);
        border-radius:10px;
        &__name{
            color: rgba(40,40,40,1);
            font-weight: 500;
            font-size: 20px;
        }
        &__deadline{
            margin-top: 4%;
            font-weight:400;
            color:rgba(102,102,102,1);
        }
    }
</style>