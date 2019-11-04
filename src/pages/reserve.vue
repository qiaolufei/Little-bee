<template>
    <div class="reserve">
        <picker
          @change="cityChange"
          :value=index
          :range="cityList">
        <div class="reserve__city">
          <span v-if="city == ''">选择您所在的城市</span>
          <span style="color:#000" v-else>{{city}}</span>
          <wux-icon class="reserve__city-icon" type="ios-arrow-forward" size="16"/>
        </div>
      </picker>
      <picker
          @change="shopChange"
          :value=index
          :range="shopList">
        <div class="reserve__shop">
          <span v-if="shop == ''">选择您所在的门店</span>
          <span style="color:#000" v-else>{{shop}}</span>
          <wux-icon class="reserve__shop-icon" type="ios-arrow-forward" size="16"/>
        </div>
      </picker>
      <picker
          @change="dayChange"
          :value=index
          mode=date>
        <div class="reserve__day">
          <span v-if="day == ''">选择您要预定的日期</span>
          <span style="color:#000" v-else>{{day}}</span>
          <wux-icon class="reserve__day-icon" type="ios-arrow-forward" size="16"/>
        </div>
      </picker>
      <picker
          @change="stimeChange"
          :value=index
          :range="timeList">
        <div class="reserve__stime">
          <span v-if="stime == ''">选择开始时间</span>
          <span style="color:#000" v-else>{{stime}}</span>
          <wux-icon class="reserve__stime-icon" type="ios-arrow-forward" size="16"/>
        </div>
      </picker>
      <picker
          @change="etimeChange"
          :value=index
          :range="timeList">
        <div class="reserve__etime">
          <span v-if="etime == ''">选择结束时间</span>
          <span style="color:#000" v-else>{{etime}}</span>
          <wux-icon class="reserve__etime-icon" type="ios-arrow-forward" size="16"/>
        </div>
      </picker>
      <button class="reserve__button" @click="submit">确认</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      city: '', // 城市
      shop: '', // 门店
      day: '', // 预定日期
      stime: '', // 开始时间
      etime: '', // 结束时间
      cityList: ['济南'],
      shopList: ['山东大学店'],
      timeList: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00',
        '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
    }
  },
  methods: {
    cityChange (e) {
      this.city = this.cityList[e.mp.detail.value]
    },
    shopChange (e) {
      this.shop = this.shopList[e.mp.detail.value]
    },
    dayChange (e) {
      this.day = e.mp.detail.value
    },
    stimeChange (e) {
      this.stime = this.timeList[e.mp.detail.value]
    },
    etimeChange (e) {
      this.etime = this.timeList[e.mp.detail.value]
    },
    submit () {
      const url = './reserve/seats'
      wx.navigateTo({url: url})
    }
  },
  mounted () {
    wx.setNavigationBarTitle({title: '预定座位'})
  }
}
</script>
<style lang="less">
.reserve{
    &__city, &__shop, &__day, &__stime, &__etime{
      color: rgba(152,152,152,1);
      width: 90%;
      margin: 0 auto;
      margin-top: 3%;
      padding: 5% 2% 5% 2%;
      background-color: #F2F2F2;
      border-radius: 3%;
      &-icon{
        position: fixed;
        right: 7%;
      }
    }
    &__button{
      background-color: #FDBB0D;
      border:1px solid #FDBB0D;
      width: 94%;
      margin:6% 0 0 3%;
      font-size: 18px;
      color: #282828
    }
}
    
</style>
