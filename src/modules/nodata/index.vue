<template>
<!-- 主页面 -->
<div class="dataBg" :style="'height:'+ tableComfig.height + 'px'">
    <div class="data" >
        <img :src="require('@img/login/no-permission.png')" alt="">
        <div class="msg"><span>“{{$route.query.name}}”</span>No Permission</div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            tableComfig:{
                height: window.innerHeight - 100
            },
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.dataBg{
    background-color: #fff;
    margin: 0 24px 24px 24px;
    display: flex;
    align-items:center;
    justify-content: center;
    .data{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 104px;
            height: 104px;
        }
        .msg{
            font-size: 16px;
            color: #8A8A8B;
            span{
                padding-right: 10px;
                font-weight: bold;
            }
        }
        
    }
}
</style>