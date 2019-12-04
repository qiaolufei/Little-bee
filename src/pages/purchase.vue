<template>
    <div>
        <!-- 套餐卡片 -->
        <div v-for="(item,index) in taocan" :key="index" class="taocan" @click="toInfo()">
            <span class="taocan__name">{{item.name}}</span>
            <span class="taocan__price">{{item.price}}元</span>
            <h3 class="taocan__deadline">使用期限：{{item.deadline}}</h3>
            <h3 class="taocan__area">可使用地区：{{item.area}}</h3>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      taocan: [
        {name: '勤奋好学月卡（济南）', price: '400', deadline: '购买后30天有效', area: '济南内所有分店'},
        {name: '300充500储值卡', price: '300', deadline: '购买后永久有效', area: '全国所有分店'}
      ]
    }
  },
  methods: {
    toInfo () {
      let url = './purchase/info'
      wx.navigateTo({url: url})
    }
  },
  mounted () {
    wx.setNavigationBarTitle({title: '购买套餐'})
  }
}
</script> 
<style lang="less">
    .taocan{
        width:90%;
        margin: 0 auto;
        margin-top: 3%;
        padding: 3% 0 3% 3%;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 58px 2px rgba(0, 0, 0, 0.1);
        border-radius:10px;
        &__name, &__price{
            color: rgba(40,40,40,1);
            font-weight: 500;
            font-size: 20px;
        }
        &__price{
            position: fixed;
            right: 8%;
        }
        &__deadline, &__area{
            margin-top: 2%;
            font-weight:400;
            color:rgba(102,102,102,1);
        }
        &__deadline{
            margin-top: 4%;
        }
    }
</style>