import Fly from 'flyio/dist/npm/wx'

const fly = new Fly()
fly.config.baseURL = 'url' // 接口地址

export default {
  async get (url, param) {
    const timer = setTimeout(() => {
      console.log('网络超时')
    }, 6000)
    const res = await fly.get(url, param)
    clearTimeout(timer)
    if (res.status !== 200) {
      console.log('网络错误')
    }
    return res
  },

  async post (url, param) {
    const res = await fly.post(url, param)
    if (res.status !== 200) {
      console.log('网络错误')
    }
    return res
  }
}
