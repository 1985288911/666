<template>
  <div>
    <!-- 头部左侧 -->
    <div :class="{'header-left':!getCollapse ,'header-left0':getCollapse}">
        <img src="@img/header/logo1.png" v-if="!getCollapse" alt="" style="width: 86px;height:44px;">
        <img src="@img/header/logo2.png" v-if="getCollapse" alt=""  style="width: 64px;height:32px;">
        <span class="header-version" v-if="!getCollapse">version 1.3.33</span>
    </div>
    <!-- 头部中间 -->
    <!-- 头部右侧 -->
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
        // getCollapse:false,//TODO
    }
  },
  computed: {
    ...mapGetters(['getCollapse']),
  },
  created(){
  
  },
  methods:{
  
  },
}

</script>
<style lang='scss'>

</style>