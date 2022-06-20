/* 左侧导航栏  */
<template>
    <!-- 面包屑 -->
    <div class="bread">
        <!-- 图标 -->
        <div class="bread-icon"></div>
        <el-breadcrumb v-show="!showBread">
            <el-breadcrumb-item  class="breadSty" to="/home">Home</el-breadcrumb-item>
        </el-breadcrumb>
         <!-- 面包屑导航 -->
        <el-breadcrumb v-show="showBread" separator="/">
            <el-breadcrumb-item to="/home">{{$t('breadcrumb.home')}}</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(list, index) in currentPath" :key="index"><span @click="clickFunc(list)">{{getTitle(list.name)}}</span></el-breadcrumb-item>
        </el-breadcrumb>
    </div>  
</template>
<style>


</style>
<script>
// import Bus from '@config/bus.js';
export default{
    props: ['currentPath'],
    data(){
        return {
            showBread:true,
        }
    },
    _methods:{
        getTitle(title){
            let str = 'breadcrumb.'+ title;
            // console.log("面包屑：：：：", this.$t(str))
            return this.$t(str).search("breadcrumb.") == -1 ? this.$t(str) : title;
        },
        clickFunc(list){
            console.log("list",list)
            if(list.path != this.$route.path){
                if(list.query){//路由存在query信息时
                    console.log("list.query",list.query)
                    this.$router.push({
                        path: list.path,
                        query:list.query
                    })
                }else {
                    this.$router.push({
                        path: list.path,
                        // query:list.query
                    })
                }
                
            }
        }
    },
    _created(){
        Bus.$on("deletTag", (val, val1) => {
            if(val == 0 ){
                this.showBread = false
            }else{
                this.showBread = true
            }
        });
    }
}
</script>
<style lang="scss" scoped>
.bread {
    margin:4px 0 4px 24px;
    display: flex;
    align-items: center;
    .bread-icon{
        width: 24px;
        height: 24px;
        background: url("../assets/img/bread/breadbg.png") no-repeat;
        background-size: cover;
        color: #ffffff;
        margin-right: 8px;
    }
    
}
</style>
<style lang="scss">
    .el-breadcrumb__item {
        font-style: normal;
        font-size: 12px;
        line-height: 24px;
        color: #2D2E2C
    }
    .el-breadcrumb__inner {
        font-weight: 400;
        cursor: pointer !important;
    }
    .el-breadcrumb__inner.is-link {
        color: #303133;
        font-weight: 800;
        cursor: pointer !important;
    }
    .el-breadcrumb__separator{
        font-weight: 800;
        cursor: pointer !important;
    }
    .el-breadcrumb__item:last-child .el-breadcrumb__inner {
        color: #303133;
        font-weight: 800;
    }
    .el-breadcrumb__inner:hover {
        color: #0486FE !important;
        cursor: pointer !important;
    }
    .el-breadcrumb__item:last-of-type .el-breadcrumb__inner:hover {
        color: #303133 !important;
        font-weight: 800;
    }
</style>