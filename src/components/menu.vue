//左侧导航栏
<template>
    <div>
      <template v-for="(list,index) in this.menuList" >
        <!--组件在封装时需要传index ，index值为你的当前页面的名称eg（:index='菜单管理'    !！！这里为关键点）  -->
        <!-- 有子项 -->
        <el-submenu  v-if="list.children.length>0&& !GLOBAL.hasPermission(list.permission)" :disabled="list.path=='' " :key="index" :index="list.path">
          <template slot="title"  style="padding-left:10px" >
            <img class="imgitem" :src="list.icon" alt="">
            <span slot="title">{{getTitle(list.title)}}</span>
          </template>
          <Menu :menuList="list.children"></Menu>
        </el-submenu>
        <!-- 没有子项 -->
        <el-menu-item  v-if="list.children.length==0&& !GLOBAL.hasPermission(list.permission)" :index="list.path" :disabled="list.path==''" :key="index"  @click.native="changeRoute(list.title)">
            <img v-if="list.icon !=''" class="imgitem" :src="list.icon" alt="">
            <span>{{getTitle(list.title)}}</span>
        </el-menu-item >
      </template>
    </div>
</template>
<script>
export default {
    props: ['menuList'],
    name:'Menu',
    data(){
        return{

        }
    },
    methods: {
      getTitle(title){
        let str = 'menu.'+ title;
        return this.$t(str);
      },
      changeRoute(val){
        console.log("路由导航：", val);
      }
    }
}
</script>
<style lang="scss" scoped>
.imgitem{
    width: 24px;
    height: 24px;
}
</style>
<style lang="scss">
div.el-submenu__title>span{
  font-size: 14px;
  color: rgba(31, 31, 31, 1);
  font-weight: 600;
  display: inline-block;
  padding-top: 4px;
}
li.el-menu-item img + span{
  font-size: 14px;
  color: rgba(31, 31, 31, 1);
  font-weight: 600;
  display: inline-block;
  padding-top: 4px;
}

li.el-menu-item.is-active img + span{
  color: #409eff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
  }
  .aside-level2>.el-submenu__title{
      color: #8A8A8B;
  }
  .el-menu-item{
    color: #8A8A8B;
  }
  .el-submenu .el-menu-item {
    background-color: #FAFBFE !important;
  }
  .el-menu-item.is-active{
    background-color: #EBF5FF!important;
  }
  .el-menu-item:hover{
    background-color: #EBF5FF !important;
  }
</style>