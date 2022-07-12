<template>
  <div>group-library.vue--{{showTime}}</div>
</template>

<script>
export default {
  props:{
  
  },
  components:{
  },
  data(){
    return {
      timeArr:[
        {id:1,time:'2022-07-13 12:37:12'},
        {id:2,time:'2022-07-10 13:56:10'},
        {id:3,time:'2022-07-12 18:12:00'},
      ],
      showTime:''
    }
  },
  created(){
    this.changeAndSort()
  },
  methods:{
    //转化成时间戳并排序
    changeAndSort(){
      const arr = this.timeArr.sort((a,b)=>{
        return new Date(a.time).getTime()- new Date(b.time).getTime()//也可以直接new Date(a.time)- new Date(b.time)
      })
      console.log('arr',arr);
      
      this.showTime = arr[0].time
    },
  },
}

</script>
<style lang='scss'>

</style>