<template>
  <div id="app">
    <van-tabbar v-model="active" >
      <van-tabbar-item to="/">
        <span>首页</span>
        <img slot="icon" slot-scope="props"
          :src="props.active ? home_icon.active : home_icon.normal">
      </van-tabbar-item>

      <van-tabbar-item to="/publishPage">
        <span>发布</span>
        <img slot="icon" slot-scope="props"
          :src="props.active ? publishPage_icon.active : publishPage_icon.normal">
      </van-tabbar-item>

      <van-tabbar-item to="/orderPage">
        <span>订单</span>
        <img slot="icon" slot-scope="props"
          :src="props.active ? orderPage_icon.active : orderPage_icon.normal">
      </van-tabbar-item>

      <van-tabbar-item to="/myPage">
        <span>我的</span>
        <img slot="icon" slot-scope="props"
          :src="props.active ? myPage_icon.active : myPage_icon.normal">
      </van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>



<script>
  import {
    Tabbar,
    TabbarItem,
  } from 'vant';
  export default {
    name: 'Tabbar',
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]:TabbarItem
    },
    data() {
      return {
        active: 0,
        tabbar:["home","publishPage","orderPage","myPage"],
        home_icon: {
          normal: require('../assets/icon/tabbar_icon/home.png'),
          active: require('../assets/icon/tabbar_icon/home_ac.png')
        },
        publishPage_icon: {
          normal: require('../assets/icon/tabbar_icon/publishPage.png'),
          active: require('../assets/icon/tabbar_icon/publishPage_ac.png')
        },
        orderPage_icon: {
          normal: require('../assets/icon/tabbar_icon/orderPage.png'),
          active: require('../assets/icon/tabbar_icon/orderPage_ac.png')
        },
        myPage_icon: {
          normal: require('../assets/icon/tabbar_icon/myPage.png'),
          active: require('../assets/icon/tabbar_icon/myPage_ac.png')
        }
      }
    },
    mounted(){
      this.tabbarActive();
    },
    watch: {
      '$route' (to, from) {// 对路由变化作出响应
        this.tabbarActive();
      }
    },
    methods: {
      tabbarActive(){
        const href = window.location.href.split("#/")[1];
        for(let i=0;i<4;i++){
          if(href==this.tabbar[i]){
            this.active=i;
          }
        }
      },
    },
  }
</script>

<style scoped>
  .active_tab img {
    width: 26px;
    height: 26px;
  }

  .active_tab .router-link-active {
    color: #e10f02;
  }
</style>
