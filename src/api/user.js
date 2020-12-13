/**
 *
 * 用户相关请求模块
 */
import axios from '@/utils/request.js'
// 用户登录
export const login = data => {
  return axios({
    method: 'post',
    url: '/mp/v1_0/authorizations',
    // data用来设置post请求体
    data: data
  })
}

// 获取用户信息

// 修改用户信息
