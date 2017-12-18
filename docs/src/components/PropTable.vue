<template>
  <el-table
    :data="tableData"
    stripe>
    <el-table-column
      prop="name"
      label="属性名">
    </el-table-column>
    <el-table-column
      prop="type"
      label="值类型">
    </el-table-column>
    <el-table-column
      prop="must"
      label="是否必须">
    </el-table-column>
    <el-table-column
      prop="default"
      label="默认值">
    </el-table-column>
    <el-table-column
      prop="variable"
      label="是否可变">
    </el-table-column>
    <el-table-column
      prop="gradual"
      label="是否渐变">
    </el-table-column>
    <el-table-column
      prop="description"
      label="说明"
      width="250">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    data: Array
  },
  computed: {
    tableData: function () {
      let result = []
      for (let i = 0; i < this.data.length; i++) {
        const item = this.data[i].split('|')
        result.push({
          name: item[0].trim(),
          type: item[1].trim(),
          must: item[2].trim(),
          default: item[3].trim(),
          variable: item[4].trim(),
          gradual: item[5].trim(),
          description: item[6].trim()
        })
      }
      return result
    }
  }
}
</script>
