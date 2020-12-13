import Mock from 'mockjs'

// // 根据url获取query参数
// const getQuery = (url, name) => {
//   //   console.log(url, name)
//   //  /api/get/news?pageindex=1&pagesize=10 pageindex
//   const index = url.indexOf('?')
//   if (index !== -1) {
//     const queryStrArr = url.substr(index + 1).split('&')
//     // console.log(queryStrArr) // ["pageindex=1", "pagesize=10"]
//     for (var i = 0; i < queryStrArr.length; i++) {
//       const itemArr = queryStrArr[i].split('=')
//       if (itemArr[0] === name) {
//         return itemArr[1]
//       }
//     }
//   }
//   return null
// }
const name = Mock.mock({
  userName: '@cname'
})
// 登录接口
Mock.mock('/mp/v1_0/authorizations', 'post', options => {
  const body = JSON.parse(options.body)
  console.log(body)

  return {
    status: body.code === '246810' ? 201 : 400,
    message: '登录成功',
    token: 'logintoken',
    refresh_token: 'logintoken',
    id: 1,
    name: name.userName,
    photo: 'https://www.swiper.com.cn/templets/default/images/qrcode/index1.png'
  }
})
