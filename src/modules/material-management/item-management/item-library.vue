<template>
  <div>
    <span>动态列表</span>
    <!-- 复选table -->
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    </el-table>
    <!-- 表格 -->
    <el-table :data="tableListData" :header-cell-style="tableHeader" fit stripe >
        <template  v-for="(item, index) in realTableHide">
            <el-table-column :prop="item.dataColumnName" :key="index" :label="item.webColumnName" :min-width="item.webColumnWidth" show-overflow-tooltip>
                <template slot-scope="scope">
                  <span 
                    v-if="item.dataColumnName=='launchDate'||item.dataColumnName=='scDate'||item.dataColumnName=='poDate'||item.dataColumnName=='deliveryDate'"
                  >{{GLOBAL.getDateNoTime(scope.row[item.dataColumnName],4)}}</span>
                  <span v-else>{{scope.row[item.dataColumnName]}}</span>
                </template>
            </el-table-column>
        </template>
    </el-table>
  </div>
</template>

<script>

export default {
  props:{
  
  },
  components:{
    // HelloWorld
  },
  data(){
    return {
      tableData:[
        {date: '2016-05-01',name: '王小虎1',address: '上海市普陀区金沙江路 1518 弄',dataColumnName:'wang1'},
        {date: '2016-05-02',name: '王小虎2',address: '上海市普陀区金沙江路 1518 弄',dataColumnName:'wang2'},
        {date: '2016-05-03',name: '王小虎3',address: '上海市普陀区金沙江路 1518 弄',dataColumnName:'wang3'},
      ],
      tableListData: [
        {
          workflowId:'id',brandName:'brandName',projectName:'projectName',launchDate:111111111,scDate:111111111,poDate:111111111,deliveryDate:111111111,
          wang1:'1',wang2:'2',wang3:'3'
        },
      ],
      tableHide:[
        { 
          "webColumnName":"Project ID", "dataColumnName":"workflowId", "webColumnWidth": 11, "sort": 1
        },
        { 
          "webColumnName":"Brand", "dataColumnName":"brandName", "webColumnWidth": 6, "sort": 2
        },
        { 
          "webColumnName":"Project Name", "dataColumnName":"projectName", "webColumnWidth":18, "sort":3
        },
        { 
          "webColumnName":"Launch Date", "dataColumnName":"launchDate", "webColumnWidth":11, "sort":4
        },
        { 
          "webColumnName":"SC Date", "dataColumnName":"scDate", "webColumnWidth":14, "sort":5
        },
        { 
          "webColumnName":"PO Date", "dataColumnName":"poDate", "webColumnWidth":11, "sort":6
        },
        { 
          "webColumnName":"Delivery Date", "dataColumnName":"deliveryDate", "webColumnWidth":11, "sort":7
        }
      ],
      realTableHide:[],
      tableHideLength:7,
      multipleSelection:[
        //选择的项目-复选框
      ]
    }
  },
  created(){
    this.realTableHide = JSON.parse(JSON.stringify(this.tableHide))
  },
  methods:{
    handleSelectionChange(val) {
      this.multipleSelection = val;
      //创建表头数据
      if(this.multipleSelection.length){
        let list = []
        this.multipleSelection.forEach((item,k)=>{
          list.push({
            "webColumnName":item.name, "dataColumnName":item.dataColumnName, "webColumnWidth": 8, "sort": this.tableHideLength+Number(k)+1
          })
        })
        this.realTableHide = this.tableHide.concat(list)
      }else{
        this.realTableHide = JSON.parse(JSON.stringify(this.tableHide))
      }
      
    },
    //表格头部样式
    tableHeader() {
      return 'font-weight: 400;font-style: normal;font-size: 12px;line-height: 16px;border-top: 1px solid #EBEEF5';
    },
  },
}

</script>
<style lang='scss'>

</style>