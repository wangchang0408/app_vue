<template>
  <div>
    <div class="outer_label">
      <img class="inner_label login_logo" src="../assets/logo.png">
    </div>
    <div class="register_form">
      <el-input type="text"  class="qxs-ic_user"  prefix-icon='el-iconyonghu' placeholder="用户名" v-model="userName"></el-input>
      &nbsp;
      <el-input type="password"  class="qxs-ic_password" prefix-icon='el-iconmima'  placeholder="密码" v-model="password"></el-input>
      <el-input type="password"  class="qxs-ic_repassword" prefix-icon='el-iconmima'  placeholder="确认密码" v-model="repassword"></el-input>
      &nbsp;
      <el-button class="register_btn" @click.native="register" type="primary" round :loading="isBtnLoading">注册</el-button>
      <div style="margin-top: 10px">
        <span style="color: #000099;" @click="login">已有账号，登录</span>
      </div>
    </div>
  </div>
</template>
 

<script>
  export default {
    data() {
      return {
        userName: '',
        password: '',
        repassword:'',
        isBtnLoading: false
      }
    },
    created () {
      if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
        this.userName = JSON.parse( localStorage.getItem('user')).userName;
        this.password = JSON.parse( localStorage.getItem('user')).password;
        this.repassword = JSON.parse( localStorage.getItem('user')).repassword;
      }
    },
    computed: {
      
    },
    methods: {
      register() {
        if (!this.userName) {
          this.$message.error('请输入用户名!');
          return;
        }else if (!this.password) {
          this.$message.error('请输入密码!');
          return;
        }else if (!this.repassword) {
          this.$message.error('请确认密码!');
          return;
        }else if (this.repassword!=this.password) {
          this.$message.error('两次密码输入不正确！');
          return;
        }else{
        let
          
        }
      },
      login(){
        this.$router.push({name:'Login'}) //name也可以作为路由跳转
      }
    }
  }
</script>
<style>
  .register_form {
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
  }
  .qxs-ic_user {
    background-size: 13px 15px;
    background-position: 3%;
  }
  .qxs-ic_password {
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  }
  .login_logo {
    height: 100%;
  }
  .register_btn {
    width: 100%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #000099 , #2154FA); /* 标准的语法 */
    filter: brightness(1.4);
  }
</style>