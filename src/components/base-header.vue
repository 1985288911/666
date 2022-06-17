<template>
  <div class="header-container">
    <!-- 头部左侧 -->
    <div :class="{'header-left':!getCollapse ,'header-left0':getCollapse}">
        <img src="@img/header/logo1.png" v-if="!getCollapse" alt="" style="width: 86px;height:44px;">
        <img src="@img/header/logo2.png" v-if="getCollapse" alt=""  style="width: 64px;height:32px;">
        <span class="header-version" v-if="!getCollapse">version 1.3.33</span>
    </div>
    <!-- 头部中间 -->
    <div class="header-center">
      <span class="header-status-collapse" @click="change">
        <i :class="{'el-icon-s-unfold':getCollapse,'el-icon-s-fold':!getCollapse}" ></i>
      </span>
    </div>
    <!-- 头部右侧 -->
    <div class="header-scoll">
      <div class="tabs-box">
        <!-- 面包屑 -->
        <el-tabs v-model="activeId" @tab-click="changeTab(activeId)" type="card" closable @tab-remove="deletTag">
          <el-tab-pane v-for="item in tagArr" :key="item.tabId" :label="getTitle(item.name)" :name="item.tabId">
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="header-right">
        <!-- 语言 -->
        <div class="header-language">
          <el-button type="text">EN</el-button>
        </div>
        <!-- 搜索框 -->
        <div class="header-serach" style="display:none;">
          <i class="el-icon-search"></i>
        </div>
        <!-- 通知 -->
        <div class="header-serach">
          <i class="el-icon-bell"></i>
        </div>
        <!-- 用户 -->
        <div class="header-user">
            <el-avatar class="image" :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <template class="popout">
                <!-- <popout></popout> -->
            </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props:{
  
  },
  components:{
    
  },
  data(){
    return {
      activeId: '',
      tagArr: [{menuActive: "home",name: "home",path: "home",tabId: "24"}],//tab标签
    }
  },
  computed: {
    ...mapGetters(['getCollapse']),
  },
  created(){
  
  },
  methods:{
    //改变侧边栏的状态
    change() {
      this.$store.commit('changeCollapse');
    },
    //切换面包屑？
    changeTab(id) {
      /* if(!this.$store.state.userAgreeSign){
          return;
      }
      
      if (this.lastTabId != id) {//当切换至其他页面时
        var index = this.tagArr.findIndex((item) => {
          if (item.tabId == id) {
            return true;
          }
        });
        this.lastTabId = id;
        
        this.lastPageType = this.tagArr[index].pageType;
        this.$router.push({
          path: '/' + this.tagArr[index].path,
        });

      } */
    },
    //删除面包屑
    deletTag(id) {
      /* let index = this.tagArr.findIndex((item) => {
        if (item.tabId == id) {
          return true;
        }
      })
      
      if (this.tagArr.length == 1) {
        Bus.$emit("deletTag",  0, "子组件向兄弟组件传值");    //存 Bus.$emit
        this.$router.push({
          path: '/home',
        });
        this.tagArr.splice(index, 1);
        return;
      }
      if (this.lastTabId == id) {
        if (index == 0) {
          let newId = this.tagArr[index + 1].tabId;
          this.changeTab(newId);
        } else {
          let newId = this.tagArr[index - 1].tabId;
          this.changeTab(newId);
        }
      }

      this.tagArr.splice(index, 1); */
    },
    //面包屑中英文
    getTitle(title){
      return title //TODO
      /* let str = 'breadcrumb.'+ title;
      return this.$t(str).search("breadcrumb.") == -1 ? this.$t(str) : title; */
    },
  },
}

</script>
<style lang="scss" scoped>
    .header-container {
      height: 55px;
      display: flex;
      background: #ffffff;
      border-bottom: 1px #f0f0f1 solid;
    
      // // 头部左侧
      .header-left {
        width: 288px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px #f0f0f1 solid;
    
        img {
          height: 33px;
          width: 118.5px;
        }
      }
    
      .header-left0 {
        width: 66px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px #f0f0f1 solid;
    
        img {
          height: 40px;
          width: 40px;
        }
      }
    
      .header-version {
        float: right;
        font-size: 12px;
        line-height: 55px;
        color: #434343;
        margin-top: 15px;
        margin-left: 50px;
      }
    
      // // 头部中间
      .header-center {
        .header-status-collapse {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 30px;
          color: #fff;
          font-size: 24px;
          cursor: pointer;
        }
      }
    
      .header-scoll {
        flex: 1;
        display: flex;
        align-items: center;
        // justify-content: space-between;
        width: calc(100% - 500px);
    
        .tabs-box {
          border-bottom: 0;
          width: calc(100% - 200px);
          // padding-left: 30px;
          display: flex;
          align-items: center;
          // margin-left: 20px;
        }
    
        // 头部右侧
        .header-right {
          width: 188px;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-left: 1px #f0f0f1 solid;
    
          .header-language {
            font-size: 16px;
            line-height: 24px;
            color: #606266;
          }
    
          .header-serach {
            width: 24px;
            // height: 32px;
            font-size: 24px;
            .el-icon-bell{
              font-size: 18px;
            }
          }
          .header-user{
              position: relative;
              display: flex;
              align-items: center;
              .image{
                  margin-bottom: 4px;
                  position: absolute;
              }
              .popout{
                position: absolute;
              }
          }
        }
      }
    }
    </style>
    <style lang="scss">
    .header-language > .el-button--small {
      span {
        font-size: 16px;
        line-height: 24px;
        color: #606266 !important;
      }
    }
    
    .header-center > .header-status-collapse {
      color: #434343 !important;
    }
    
    .header-scoll .el-tabs {
      width: 100%;
      height: 55px;
      line-height: 55px;
    }
    
    .header-scoll .el-tabs .el-tabs__item {
      color: #8a8a8b;
      font-weight: 300;
    }
    
    .header-scoll .el-tabs .el-tabs__item.is-active {
      line-height: 55px;
      background-color: #fafafa;
      height: 55px;
      border: none;
      color: #409eff;
      font-weight: 600;
    }
    
    .header-scoll .el-tabs--card > .el-tabs__header {
      border: none;
    
      .el-tabs__nav {
        margin-right: 20px;
        border: none;
      }
    
      .el-tabs__item {
        border: none;
      }
      .el-tabs__nav-next, .el-tabs__nav-prev{
      line-height: 55px;
    }
    }
    .el-tabs__nav .el-tabs__item:nth-child(1) span{
        display: none;
    }
    </style>