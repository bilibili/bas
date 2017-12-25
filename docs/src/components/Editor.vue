<template>
  <div class="editor" ref="editor"></div>
</template>

<style scoped>
  .editor {
    height: 100%;
    font-size: 13px;
    line-height: 1.5;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  }
</style>

<script type="text/babel">
  export default {
    data () {
      return {
      }
    },

    mounted () {
      this.editor = window.ace.edit(this.$refs.editor)
      this.editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        maxLines: this.autoHeight ? Infinity : undefined,
        showGutter: this.showGutter
      })
      this.editor.getSession().setMode('ace/mode/bas')
      this.editor.setTheme('ace/theme/crimson_editor')
      this.editor.$blockScrolling = Infinity
      this.editor.setValue(this.code)
      this.editor.setReadOnly(this.readOnly)
      this.editor.clearSelection()
      this.editor.on('change', () => {
          // this.editorData[this.editorIndex] = this.editor['getValue']()
          // this.setLocalStorage()
      })
    },

    props: {
      code: {
        type: String,
        default: ''
      },
      readOnly: {
        type: Boolean,
        default: false
      },
      showGutter: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      value () {
        return this.editor.getValue()
      }
    }
  }
</script>
