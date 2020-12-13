// 基于 axios 封装的请求模块
import axios from 'axios'

// 创建一个 axios 实例，说白了就是复制了一个 axios
// 网民通过整个实例去发请求，把需要的配置配置给这个实例处理
const request = axios.create({
  // 请求的基础地址
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 请求拦截器

// 响应拦截器

// 导出请求方法
export default request

// 谁要使用谁就加载 request 模块
// import request from 'request.js'
// request.get()
