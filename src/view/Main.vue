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
<style lang='scss'>

</style>