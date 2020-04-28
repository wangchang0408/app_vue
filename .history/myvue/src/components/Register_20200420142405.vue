<template>
  <div class="register">
<van-cell-group>
  <van-field v-model="value" placeholder="请输入用户名" />
    <van-field v-model="value" placeholder="请输入密码" />
</van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field } from 'vant';
Vue.use(Field)
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
