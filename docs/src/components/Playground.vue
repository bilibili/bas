<template>
  <div class="playground">
    <div class="editor-wrap">
      <el-button
        @click="run"
        type="primary"
        plain
      >{{ buttonText }}</el-button>
      <editor :code="code" ref="editor"></editor>
    </div>
    <div class="basContainer" ref="basContainer"></div>
  </div>
</template>

<style scoped>
.playground {
  width: 1140px;
  height: calc(100% - 60px);
  margin: 0 auto;
}

.editor-wrap {
  width: 400px;
  height: 100% !important;
  float: left;
  position: relative;
  box-sizing: border-box;
  border-left: 1px solid #eaecef;
}

.editor-wrap .el-button {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 2;
}

.basContainer {
  width: 740px;
  height: 100%;
  background: #000;
  float: right;
  position: relative;
  overflow: hidden;
}
</style>

<script type="text/babel">
  export default {
    data () {
      return {
        buttonText: '运行'
      }
    },

    mounted () {
      const startTime = +new Date()
      /* eslint-disable new-cap */
      this.bas = new window.BasDanmaku({
        container: this.$refs.basContainer,
        timeSyncFunc: function () {
          return +new Date() - startTime
        }
      })
      this.bas.play()

      if (this.code) {
        this.run()
      }
    },

    props: {
      default () {
        return {}
      }
    },

    methods: {
      run () {
        const code = this.$refs.editor.value()
        if (code) {
          try {
            this.bas.add({
              dm: {
                stime: -1,
                text: code
              }
            }, false, true)
            this.$message.success('运行成功')
          } catch (e) {
            this.$message.error('运行出错 ' + e.message)
          }
        } else {
          this.$message.warning('请输入脚本内容')
        }
      }
    },

    computed: {
      code () {
        return this.$route.query.code
      }
    }
  }
</script>
