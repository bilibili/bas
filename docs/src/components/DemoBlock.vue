<template>
  <div class="demo-block">
    <div @click="play">
      <div class="bas-container" ref="basContainer"></div>
    </div>
    <slot name="highlight"></slot>
  </div>
</template>

<style scoped>
.bas-container {
  position: relative;
  height: 400px;
  background: #000;
  overflow: hidden;
}

.demo-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  overflow: hidden;
}

.demo-block .highlight {
  margin: 0;
}

.highlight pre {
  margin: 0;
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
      const startTime = +new Date()
      /* eslint-disable new-cap */
      this.bas = new window.BasDanmaku.default({
        container: this.$refs.basContainer,
        timeSyncFunc: function () {
          return +new Date() - startTime
        }
      })
      this.bas.play()
    },

    props: {
      basCode: Object,
      default () {
        return {}
      }
    },

    methods: {
      play () {
        this.bas.add({
          stime: -1,
          text: this.basCode.code
        }, false, true)
      }
    }
  }
</script>
