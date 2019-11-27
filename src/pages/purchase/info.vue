<template>
    <div class="info">
        <div class="info__card">
            <span class="info__card-name">{{card.name}}</span>
            <span class="info__card-price">{{card.price}}元</span>
            <div class="info__card-btn">
            <button class="info__card-btn__btn1">购买</button>
            <button class="info__card-btn__btn2">兑换</button>
            </div>
        </div>
        <div class="info__explain">
            <h3 class="info__explain-title">使用说明</h3>
            <h3 class="info__explain-deadline">使用期限:{{explain.deadline}}</h3>
            <h3 class="info__explain-area">可使用区域:{{explain.area}}</h3>
            <h3 class="info__explain-miaoshu">套餐描述:</h3>
            <h3 class="info__explain-miaoshu" v-for="item in explain.msg" :key="item">{{item}}</h3>       
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      card: {name: '勤奋好学月卡(济南)', price: 400},
      explain: {deadline: '购买后永久有效', area: '全国所有分店', msg: ['1.本卡为济南不限时畅学月卡，有效期为开卡之日起30天，可使用自习天数30天。', '2.本卡仅限济南市内使用，购卡后不退不换。', '3.本卡仅限本人使用。']}
    }
  },
  mounted () {
    wx.setNavigationBarTitle({title: '套餐详情'})
  }
}
</script>
<style lang="less">
    .info{
        &__card{
            padding: 3% 3% 3% 3%;
            width:90%;
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 58px 2px rgba(0, 0, 0, 0.1);
            border-radius:10px;
            margin: 0 auto;
            margin-top: 3%;
            &-name{
                color:rgba(40,40,40,1);
                font-size: 20px;
            }
            &-price{
                color:rgba(40,40,40,1);
                font-size: 20px;
                position: fixed;
                right: 8%;
            }
            &-btn{
                display: flex;
                flex-direction: row;
                margin-top: 5%;
                &__btn1{
                    color:rgba(40,40,40,1);
                    margin-left: 40%;
                    font-size: 18px;
                    width: 25%;
                    background:rgba(253,187,13,1);
                    border-radius:10px;
                }
                &__btn2{
                    margin-left: 5%;
                    font-size: 18px;
                    color: rgba(253,187,13,1);
                    width: 25%;
                    border:1px solid rgba(253,187,13,1);
                    border-radius:10px;
                }
            }
        }
        &__explain{
            width:90%;
            margin: 0 auto;
            margin-top: 5%;
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 58px 2px rgba(0, 0, 0, 0.1);
            border-radius:10px;
            padding: 3% 3% 3% 3%;
            &-title{
                font-size: 20px;
                font-weight:500;
                color:rgba(40,40,40,1);
            }
            &-deadline, &-area, &-miaoshu{
                margin-top: 2%;
                font-weight:400;
                color:rgba(102,102,102,1);
            }
        }
    }
</style>