<template>
  <div id="app">
    <el-header>
      <main-header></main-header>
    </el-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
  @import 'highlight.js/styles/color-brewer.css';
  @import 'github-markdown-css/github-markdown.css';

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: #333;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #333;
    transition: color 0.2s;
  }

  a:hover {
    color: #00a1d6;
  }

  .markdown-body table {
    margin-bottom: 0;
  }

  .markdown-body table tr {
    border: none;
  }

  .markdown-body table th, .markdown-body table td {
    border: none;
    border-bottom: 1px solid #e6ebf5;
  }
</style>

<style scoped>
  #app {
    height: 100%;
    overflow-y: hidden;
  }

  .el-header {
    box-shadow: 0 0 2px rgba(0,0,0,0.25);
    padding: 0;
  }

  .header {
    max-width: 1140px;
    margin: 0 auto;
  }
</style>
