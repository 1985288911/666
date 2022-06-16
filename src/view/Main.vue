<!-- 
    定义:app.vue下面的第一子组件
 -->
<template>
  <div class="mainContainer container">
    <!-- 登录 -->
    <div>

    </div>
    <!-- 头部 -->
    <!-- 下部 -->
      <!-- 下部-侧边栏 -->
      <!-- 下部-内容区 -->
    <div>
      <base-header class="header" v-show="!login"  :dataobj='dataobj'></base-header>
    </div>
  
  </div>
</template>

<script>
  import baseHeader from '@components/base-header.vue';
  export default {
    props:{

    },
    components:{
      baseHeader
    },
    data(){
      return {
        login:false,//TODO
        dataobj:{}//TODO
      }
    },
    created(){

    },
    methods:{

    },
  }
 
</script>
<style lang="scss" scoped>
  .mainContainer {
    width: 100%;
    height: 100%;
    background: #fafafa;
    display: flex;
    flex-direction: column;
    .content {
      overflow: hidden;
      display: flex;
      .content-box {
        position: relative;
        width: calc(100% - 288px);
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
      }
      .content-box.collapse {
        position: relative;
        width: calc(100% - 67px);
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
      }
      .aside-level1 {
        width: 288px !important;
      }
      .aside-level2 {
           width: 66px !important;
      }
    }
  }
  .imgitem{
      width: 24px;
      height: 24px;
  }
  </style>
  <style lang="scss">
  .el-table{
      .cell{
          .el-button--text{
              padding-left: 0;
          }
      }
  }
  ::-webkit-scrollbar {
    // background-color: #FFFFFF;
    // border-radius: 10px;
    width: 8px; //y轴滚动条宽度
    height:8px; //x轴滚动条高度
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 4px; //滚动条的圆角
    background: #D8DCE5; //滚动条的背景颜色
  }
  
  ::-webkit-scrollbar-track {
    // border-radius: 10px; //滚动条的背景区域的圆角
    background: #fff; //滚动条的背景颜色
    border: 1px solid #F0F0F1;
  }
  </style>