<template>
  <div class="login-container">
    <el-form ref="userFormRef" :model="userForm" :rules="userFormRules">
      <div class="login-head"></div>
      <el-form-item prop="mobile">
        <el-input
          v-model="userForm.mobile"
          placeholder="请输入手机号"
          prefix-icon="el-icon-mobile-phone"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="userForm.code" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item prop="agree">
        <el-checkbox v-model="userForm.agree"> </el-checkbox>
        <span> 我已阅读并同意用户协议和隐私条款</span>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          @click="onLogin()"
          :loading="loginLoading"
          >登录</el-button
        ></el-form-item
      >
    </el-form>
  </div>
</template>

<script>
// import axios from '@/utils/request.js'
import { login } from '@/api/user.js'
export default {
  name: 'LoginIndex',
  data () {
    return {
      userForm: {
        mobile: '13911111111',
        code: '246810',
        agree: false // 是否同意协议的选中状态
      },
      loginLoading: false, // 登录的loading状态
      // 表单验证规则
      userFormRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3|5|8]\d{9}$/, message: '请输入正确的号码格式', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入6位验证码', trigger: 'blur' }
        ],
        agree: [
          // 自定义校验规则
          {
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请勾选同意协议'))
              }
            },
            trigger: 'change'
          }
        ]
      }
    }
  },
  created () { },
  methods: {
    // 对于代码中的请求操作
    // 1.接口请求可能需要重用
    // 2.实际工作中，接口非常容易变动，改起来麻烦
    // 建议把所有的请求都封装成函数然后统一的组织到模块中进行管理
    onLogin () {
      // 获取表单数据
      // const user = this.userForm
      // 表单验证
      this.$refs.userFormRef.validate(async valid => {
        if (!valid) return this.$message.error('请输入正确的手机号或者验证码')
        // 验证通过，提交登录
        this.loginLoading = true
        const res = await login(this.userForm)
        console.log(res)
        if (res.data.status !== 201) {
          res.status = 400
          this.loginLoading = false
          return this.$message.error('手机号或验证错误')
        }
        res.status = 201
        // 处理后端响应结果
        // 成功xxx  失败xxx
        this.$message.success('登录成功')
        this.loginLoading = false
      })
      // 开启登录中 loading...
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: url(login_bg.jpg) no-repeat;
  background-size: cover;
  .login-head {
    width: 300px;
    height: 57px;
    background: url(logo_index.png) no-repeat;
    margin-bottom: 15px;
    background-color: #fff;
  }
  .el-form {
    background-color: #fff;
    padding: 50px;
    min-width: 300px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
