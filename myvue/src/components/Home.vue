<template>
  <div>
    <div class="searchTxt">
        <search-bar :onChange="onChange" :onSearch="onSearch">
          <div class="hot-wrapper">
            <div class="tip">热门搜索</div>
            <div class="label-wraper">
              <div class="label">笔记本</div>
              <div class="label">电视机</div>
              <div class="label">手机</div>
              <div class="label">汽车</div>
            </div>
          </div>
        </search-bar>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import TabBar from '@/components/TabBar';

  export default {
    name: "Home",
    data() {
      return {
        value: '',
      };
    },
    components: {
      TabBar
    },
    methods: {
      onSearch(value){
      },
      onChange(value){
      }
    },
  }

</script>

<style>
  .searchTxt {
    position: fixed;
    top: 10px;
    width: 100%;
  }
  .tip{
    padding: 4vw;
    text-align: left;
    font-size: 3.0vw;
    color: #999999;
  }
  .label-wraper {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4vw;
    border-bottom: 1px solid #e4e4e4;
  }
  .label{
    padding: 0.8vw 2vw;
    border-radius: 1vw;
    background-color: #efefef;
    font-size: 3.4vw;
    margin-bottom: 4vw;
    margin-right: 2vw;
    color: #666;
  }

</style>
