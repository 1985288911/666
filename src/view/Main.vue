<!-- 
    定义:app.vue下面的第一子组件
    核心：el-menu、el-submenu、Menu 或者 el-menu-item.....breadcrumbNav......router-view
 -->
<template>
  <div class="mainContainer container">
    <!-- 登录 -->
    <div></div>
    
    <div>
      <!-- 头部 -->
      <base-header class="header" v-show="!login"  :dataobj='dataobj'></base-header>
      <!-- 下部 -->
      <div class="content">
        <!-- 下部-侧边栏 -->
        <el-menu v-show="!login" :default-active="active" router  :class="getCollapse == true ? 'el-menu-vertical-demo aside-level2' : 'el-menu-vertical-demo aside-level1'" :collapse="getCollapse" :collapse-transition="false" :default-openeds="$router.path" style="overflow-y:auto;height:100%" unique-opened @select="handleMenuSelect">
          <template v-for="list in menuList" >
              <!-- el-submenu 一级菜单 文案 -->
              <!-- 有子项 -->
              <el-submenu v-if="list.children.length>0&& !GLOBAL.hasPermission(list.permission)" :key="list.path" :disabled="list.path==''"  :index="list.path"  >
                <template slot="title"  style="padding-left:10px" >
                  <img class="imgitem" :src="list.icon" alt="">
                  <span slot="title">{{getTitle(list.title)}}</span>
                </template>
                <Menu :menuList="list.children"></Menu>
              </el-submenu>
              <!-- 没有子项 -->
              <el-menu-item v-if="list.children.length==0&& !GLOBAL.hasPermission(list.permission)" :index="list.path"  :key="list.path" :disabled="list.path==''">
                <img v-if="list.icon !=''" class="imgitem" :src="list.icon" alt="">
                <span>{{getTitle(list.title)}}</span>
              </el-menu-item >
          </template>
        </el-menu>
        <!-- 下部-内容区 -->
        <!-- 内容区 -->
        <div :class="getCollapse == true ? 'content-box collapse':'content-box'" v-show="!login" id="content" >
          <!-- 面包屑 -->
          <breadcrumbNav :currentPath="breads"></breadcrumbNav>
          <!-- 内容部分 -->
          <keep-alive>
            <router-view v-if="$route.meta.isKeep" />
          </keep-alive>
          <router-view v-if="!$route.meta.isKeep" />
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
  import baseHeader from '@components/base-header.vue';
  import Menu from '@components/menu.vue';
  import breadcrumbNav from '@components/breadcrumb.vue';
  import { mapGetters } from 'vuex';
  export default {
    props:{

    },
    components:{
      baseHeader,
      Menu,
      breadcrumbNav
    },
    computed: {
      ...mapGetters(['getCollapse']),
    },
    data(){
      return {
        login:false,//TODO
        dataobj:{},//TODO
        active: 'item-library',
        menuList: [
          {/* 一级菜单 */
            icon: require('@img/aside/item-management.png'),
            iconActive: require('@img/aside/progress-management.png'),//选中时得图标
            title: 'itmeManagement',
            permission:'2ec41af2-25b2-4ab4-9d98-5ef2f481fe4d',
            path: 'item-management',/* index */
            children: [
              {icon: '',title: 'itemLibrary',path: 'item-library',permission:'fe21dbf8-0a6a-4fd6-8db0-3f0a28a9906b',children: [],},
              {icon: '',title: 'groupLibrary',path: 'group-library',permission:'c60ced38-924f-4e7d-83a1-6a8ae89e1486',children: [],},
              {icon: '',title: 'categoryLibrary',path: 'category-library',permission:'fef7e208-96f7-4f29-936c-7acb270956d9',children: [],},
              {icon: '',title: 'visualLibrary',path: 'light',permission:'2f02c98b-88cd-483d-9798-1c085afe192a',children: [],},
              {icon: '',title: 'ratecard',path: 'ratecard',permission:'6e5ecd30-5494-4b70-b04a-3b2589900ff4',children: [],},
            ],
          },
          /* dashboard start */
          /* {
            icon: require('@img/aside/report.png'),
            iconActive: require('@img/aside/report2.png'),
            title: 'report',
            permission:'2665b9aa-ff83-43b6-9390-02eaf7386340',
            path: 'report',
            children: [
              {icon: '',title: 'vmDashboard',path: 'vm-dashboard',permission:'dc92d02b-a0ab-42f6-923e-4f2d2d8e8a95',children: [],},
            ],
          }, */
          /* dashboard end */
          /* {
            icon: require('@img/aside/progress-management.png'),
            title: 'projectManagement',
            path: 'progress-management',
            permission:'4c673035-3cb5-42fc-a6f3-6a9fc6c619ef,439c9c8c-bd94-4278-aab6-0a36633c17d8,70e3f21a-156d-4212-b074-cb355c63e1f6,92645682-5983-4d9a-b4fe-9b351b5d4884,6b34726a-73d7-49c0-b189-5156ef41ce38',
            permission:'menu',
            children: [
              {icon: '',title: 'newOpening',permission:'4c673035-3cb5-42fc-a6f3-6a9fc6c619ef',path: 'new-counter',children: [],},
              {icon: '',title: 'renovation',permission:'menu',path: '',children: [],},
              {icon: '',title: 'modification',permission:'menu',path: '',children: [],},
              {icon: '',title: 'closeCounter',permission:'menu',path: 'close-counter',children: [],},
              {icon: '',title: 'newLaunch',permission:'70e3f21a-156d-4212-b074-cb355c63e1f6,439c9c8c-bd94-4278-aab6-0a36633c17d8',path: 'new-launch',children: [],},
              {icon: '',title: 'maintenance',permission:'92645682-5983-4d9a-b4fe-9b351b5d4884',path: 'repair-list',children: [],},
              {icon: '',title: 'replenishment',permission:'6b34726a-73d7-49c0-b189-5156ef41ce38',path: 'replenishment-list',children: [],},
              {icon: '',title: 'massProduction',permission:'menu',path: 'mass-production',children: [],},
            ],
          },
          {
            icon: require('@img/aside/counter-management.png'),
            title: 'counterManagement',
            path: 'counter-management',
            permission:'0d157751-3f26-4311-ab74-8514050e6091',
            children: [],
          },
          {
            icon: require('@img/aside/store-management.png'),
            title: 'storeManagement',
            path: 'store-management',
            permission:'d1e4c06f-9ce2-4b0e-86ee-770535e5fb6e',
            children: [],
          },
          {
            icon: require('@img/aside/inventory-management.png'),
            title: 'inventoryManagement',
            path: 'inventory-management',
            permission:'bb7ed9e0-7112-4ed5-833c-9f4c975a5a41',
            children: [],
          },
          {
            icon: require('@img/aside/supplier-management.png'),
            title: 'supplierManagement',
            path: 'supplier-management',
            permission:'2e56e15b-a358-4c01-8100-c805de1bbd39',
            children: [],
          },
          {
            icon: require('@img/aside/user-management.png'),
            title: 'userManagement',
            path: 'user-management',
            permission:'a7ca6820-7b87-42a3-a702-53e3f082e379',
            children: [
              {icon: '',title: 'user',path: 'user',permission:'b5e3faf8-a616-4da5-8e6c-32d5c3ac1736',children: [],},
              {icon: '',title: 'functionRole',path: 'function-role',permission:'d81a1dd5-98ef-4b96-8547-12fdd5e9c1d1',children: [],},
              {icon: '',title: 'dataRole',path: 'data-role-list',permission:'b4545470-c62a-40b1-b92b-4ee45ca70d16',children: [],},
            ],
          },
          {
            icon: require('@img/aside/order-management.png'),
            title: 'orderManagement',
            path: 'order-management',
            permission:'413e5168-091d-4497-813a-28462389f8c0',
            children: [
                {icon: '', title: 'productionRequest',permission:'333d3e53-3d81-4fcd-9ec9-7193054bd5d6',path: 'po',children: [],},
                {icon: '', title: 'visualRequest',permission:'133a0677-a64c-4378-b543-533cffbb9348',path: 'visual-request',children: [],},
                {icon: '', title: 'massProduction',permission:'menu',path: '',children: [],},
                {icon: '', title: 'installationOrder',permission:'menu',path: '',children: [],},
                {icon: '', title: 'transportationOrder',permission:'menu',path: '',children: [],},
                {icon: '', title: 'replenishmentOrder',permission:'menu',path: '',children: [],},
            ],
          }, */
          /* Finance Management */
          /* {
            icon: require('@img/aside/finance.png'),
            title: 'budgetManagement',
            permission:'2823b044-3016-4e22-8be0-79cb6a0d4a9b',
            path: 'finance',
            children: [
              {icon: '', title: 'masterData',permission:'7fc6b2f7-d7dd-4619-8b90-bc8048abf8e2', path: 'finance-md',children: [],},
              {icon: '', title: 'budget',permission:'11884eb1-5040-4cb2-8637-00265f7b2d39,e2ae2b17-326e-46f6-bc34-16e4c6c5dece,533844c3-fabf-4007-9239-30ffd42871c7,cc33e0a7-273f-4f12-a7c0-8e1ebdd39206',path: 'finance-budget', children: [],},
              {icon: '', title: 'actual',permission:'de174797-c36a-44a5-acba-23a4d7e8afcd,d5007f97-2a5e-4e73-86e4-f7c80e8a7954,9f98e948-514d-46dd-8ad5-89f044a051ab', path: 'finance-actual', children: [],},
              {icon: '', title: 'trend', permission:'cf55dee2-b076-492a-9661-3aa3694a78f0',path: 'finance-trend',children: [], },
              {icon: '', title: 'summary',permission:'3e45dd7c-866d-4fef-b62a-cfd3b763ba5a', path: 'finance-summary', children: [],},
            ],
          } */
        ],
        breads: [],
      }
    },
    created(){
      let permission = this.GLOBAL.hasPermission(this.$route.meta.permission)/* true:没权限 */
      if(permission){
        this.$router.push({
          path: '/nodata', //直接路由到详情页 type注意 
          query: {
            name:this.$route.meta.bread[0].name
          }
        });
      }
      
      if(this.$route.path === '/'){
          this.login = true;
        }else{
          this.login = false;
        }
        if(this.$store.state.userInfo.id == 'acc4fd86-900a-4f3f-a105-c5b29483c670' || this.$store.state.userInfo.id == 'f370e9a5-6787-4ea4-a810-edb45d43f30d'){
          let index = this.menuList.findIndex(item => item.title == 'userManagement')
          this.menuList.splice(index,1)
        }
      this.breads = this.$route.meta.bread;
      // this.breads[0] = this.$route.name;
      this.active = this.$route.meta.menuActive
      if (this.$route.meta.tabId) {
        this.dataobj = this.$route.meta;
      }
    },
    methods:{
      /* 辅助函数 */// 菜单显示的文字
      getTitle(title){
        let str = 'menu.'+ title;
        return this.$t(str);
      },
      // 菜单激活
      handleMenuSelect(index, indexPath) {
          this.menuList.forEach((item)=>{
              if(index == item.path){
                  item.icon = require('@img/aside/'+index+'2.png');
              }else {
                  item.icon = require('@img/aside/'+item.path+'.png');
              }
          })
          // if(index == 'counter-management'){
          //     this.menuList[2].icon = require('@img/aside/counter-management2.png');
          // }else {
          //     this.menuList[2].icon = require('@img/aside/counter-management.png');
          // }
      },
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
  /* .el-table{
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
  } */
  </style>