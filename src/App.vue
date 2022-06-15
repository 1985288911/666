<!-- 
  定义:目前的页面入口文件 打包之后首页是index.html
  
  主要有三个作用：
  1.主组件。
  2.放置项目中所有页面公共需要的动画或者样式。
  3.所有的页面都是在app.vue中进行切换的。可以理解为所有的路由都是app.vue的子组件。
 -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
