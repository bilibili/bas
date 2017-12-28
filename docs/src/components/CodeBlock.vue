<template>
  <div class="code-block">
    <el-button
      @click="run"
      type="primary"
      plain
    >运行</el-button>
    <el-button
      v-clipboard="code.code"
      @success="copySuccess"
      @error="copyError"
      type="primary"
      plain
    >复制</el-button>
    <div class="editor-wrap">
      <editor
        :code="code.code"
        :readOnly="true"
        :showGutter="false"
        :autoHeight="true"
      ></editor>
    </div>
  </div>
</template>

<style>
.code-block .ace_cursor-layer {
  display: none;
}
.code-block .ace_print-margin-layer {
  display: none;
}
.code-block .ace_marker-layer .ace_active-line {
  display: none;
}
.code-block .ace_scroller {
  cursor: auto;
}
</style>
<style scoped>
.code-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  margin: 16px 0;
}

.code-block .el-button {
  float: right;
  margin: 10px 10px 0 0;
  z-index: 2;
}

.code-block .editor-wrap {
  background-color: #f6f8fa;
  padding: 16px 16px 0;
}

.code-block .ace_editor {
  font-size: 13px;
  line-height: 1.5;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
}

.code-block .editor {
  background-color: #f6f8fa;
  height: 100%;
}
</style>

<script type="text/babel">
  export default {
    data () {
      return {
        hovering: false,
        isExpanded: false,
        fixedControl: false,
        scrollParent: null
      }
    },

    mounted () {
    },

    props: {
      code: Object,
      default () {
        return {}
      }
    },

    methods: {
      run () {
        this.$message('在新窗口运行')
        window.open(`${window.location.pathname}#/playground?code=${encodeURIComponent(this.code.code)}`)
      },

      copySuccess () {
        this.$message.success('复制成功')
      },

      copyError () {
        this.$message.error('复制失败')
      }
    }
  }
</script>
