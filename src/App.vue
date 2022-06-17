<!-- 
  定义:目前的页面入口文件 打包之后首页是index.html

  主要有三个作用：
  1.主组件。
  2.放置项目中所有页面公共需要的动画或者样式。
  3.所有的页面都是在app.vue中进行切换的。可以理解为所有的路由都是app.vue的子组件。
 -->
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
}
html,body,#app{
  width:100%;
  height:100%;
}
// @font-face {
//   font-family: "NotoSansSC-Light";
//   src: url("assets/style/font/NotoSansSC-Light/NotoSansSC-Light.woff2") format("woff2"),
//        url("assets/style/font/NotoSansSC-Light/NotoSansSC-Light.woff") format("woff"),
//        url("assets/style/font/NotoSansSC-Light/NotoSansSC-Light.ttf") format("truetype"),
//        url("assets/style/font/NotoSansSC-Light/NotoSansSC-Light.eot") format("embedded-opentype"),
//        url("assets/style/font/NotoSansSC-Light/NotoSansSC-Light.svg") format("svg");
// }
#app{
  font-family: NotoSansSC-Light;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #434343;
  font-size: 14px;
}
/* .clearfix:after{
  content: "020"; 
  display: block; 
  height: 0; 
  clear: both; 
  visibility: hidden;  
}

.el-table .el-button+.el-button{
  margin-left: 0 !important;
} */

</style>
