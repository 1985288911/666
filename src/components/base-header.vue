<template>
  <div>
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
        <el-tabs v-model="activeId" @tab-click="changeTab(activeId)" type="card" closable @tab-remove="deletTag">
          <el-tab-pane v-for="item in tagArr" :key="item.tabId" :label="getTitle(item.name)" :name="item.tabId">
          </el-tab-pane>
        </el-tabs>
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
<style lang='scss'>

</style>