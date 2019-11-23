<template>
    <div class="points">
       <div class="points__msg">
           <h3 class="points__msg-title">积分</h3>
           <h3 class="points__msg-point">{{point}}</h3>
       </div>
       <div class="points__option">
           <span class="points__option-orders" v-show="!changeClass" @click="orders">积分订单</span>
           <span class="points__option-orders1" v-show="changeClass" @click="orders">积分订单</span>
           <span class="points__option-line">|</span>
           <span class="points__option-rule" v-show="!changeClass1" @click="rule">积分规则</span>
           <span class="points__option-rule1" v-show="changeClass1" @click="rule">积分规则</span>
       </div>
       <div class="points__info">
           <div class="points__info-title">
               <span>———&nbsp;{{title}}&nbsp;———</span>
           </div>
       </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      point: 260,
      changeClass: true,
      changeClass1: false,
      title: '积分明细'
    }
  },
  methods: {
    orders () {
      this.changeClass = !this.changeClass
      this.changeClass1 = false
      if (this.changeClass === true) {
        this.title = '积分明细'
      }
    },
    rule () {
      this.changeClass1 = !this.changeClass1
      this.changeClass = false
      if (this.changeClass1 === true) {
        this.title = '积分规则'
      }
    }
  },
  mounted () {
    wx.setNavigationBarTitle({title: '我的积分'})
  }
}
</script>
<style lang="less">
    .points{
        &__msg{
            width:90%;
            margin: 0 auto;
            margin-top: 3%;
            background:rgba(253,187,13,1);
            border-radius:10px 10px 0px 0px;
            padding: 5% 0 5% 3%;
            &-title{
                font-size: 20px;
                font-weight:bold;
                color:rgba(40,40,40,1);
            }
            &-point{
                margin-top: 3%;
                font-size: 50px;
                font-weight:bold;
                color:rgba(40,40,40,1);
            }
        }
        &__option{
            width: 100%;
            padding: 4% 15% 4% 15%;
            background:rgba(255,255,255,1);
            box-shadow:0  0  20px rgba(0, 0, 0, 0.21);
            &-line{
                color: rgba(153,153,153,1);
            }
            &-orders, &-orders1{
                margin-right: 15%;
            }
            &-rule, &-rule1{
                margin-left: 15%;
            }
            &-orders, &-rule{
                font-size: 16px;
                font-weight:400;
                color:rgba(102,102,102,1);
            }
            &-orders1, &-rule1{
                font-size: 18px;
                font-weight:bold;
                color:rgba(40,40,40,1);
            }
            
        }
        &__info{
            &-title{
                font-weight:400;
                color:rgba(152,152,152,1);
                margin-top: 3%;
                text-align: center;
            }
        }
    }
</style>