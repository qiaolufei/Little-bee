module.exports = {
  pages: [
    {path: 'pages/purchase'},
    {path: 'pages/seats'},
    {path: 'pages/user'},
    {path: 'pages/user/exchange'},
    {path: 'pages/user/suggest'},
    {path: 'pages/logs',
      config: {
        navigationBarTitleText: '查看启动日志'
      }
    }],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '小蜜蜂自习室',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    backgroundColor: '#fff',
    selectedColor: '#333',
    borderStyle: 'white',
    list: [{
      text: '购买套餐',
      pagePath: 'pages/purchase',
      iconPath: 'static/tabs/home.png',
      selectedIconPath: 'static/tabs/home-active.png'
    }, {
      text: '预定座位',
      pagePath: 'pages/seats',
      iconPath: 'static/tabs/orders.png',
      selectedIconPath: 'static/tabs/orders-active.png'
    }, {
      text: '我的',
      pagePath: 'pages/user',
      iconPath: 'static/tabs/orders.png',
      selectedIconPath: 'static/tabs/orders-active.png'
    }],
    position: 'bottom'
  },
  // 全局引入组件
  usingComponents: {
    'wux-search-bar': '../static/wux/search-bar/index',
    "wux-icon": "../static/wux/icon/index"
  }
}
