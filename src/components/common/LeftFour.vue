<template>
  <div class="leftFour">
    <div class="leftTitle">在线用户数</div>
    <template >
      <div id="eltmp">
        <el-table :header-cell-style="tableHeaderColor"
          :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="auto" height="32" align="center" >
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="auto" height="32" align="center">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="auto" height="32" align="center">
          </el-table-column>
        </el-table>
      </div>

    </template>
  </div>
</template>

<script>
  export default {
    name: 'LeftFour',
    data () {
      return {
        bgcolor:'black',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀'        },
          {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀'        }

          ]
      }
    },
    methods:{

      // 修改table header的背景色
      tableHeaderColor({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 0) {
          return 'background-color: #0C2859;color: #fff;font-weight: 500;'
        }
      }
     }
  }
</script>

<style >

  #eltmp{
    padding:0 20px ;
  }
  .leftFour {
    height: 192px;
    margin-bottom: 0;
    /*background-color: #998e56;*/
  }
  .el-table td, .el-table th{
    padding: 0;
   }



  .el-table .cell,.el-table th>.cell{
    height: 30px;
    line-height: 30px;
    }


  .el-table, .el-table th, .el-table tr{
    background-color: transparent;
  }
  .el-table{
    color:white;
  }

  .el-table tbody tr:hover>td { background-color: black }
</style>
