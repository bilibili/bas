<template>
  <div class="header">
    <div class="nav-logo"><img src="../assets/favicon.png"><span>bas</span></div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal">
      <el-menu-item
        v-for="(nav, index) in navs"
        :key="index"
        :index="index + ''">
        <router-link
          v-if="nav.path"
          :to="nav.path">{{ nav.name }}
        </router-link>
        <a
          v-if="nav.href"
          :href="nav.href">{{ nav.name }}
        </a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        {
          name: '指南',
          path: '/guide'
        },
        {
          name: '文档',
          path: '/docs'
        },
        {
          name: 'GitHub',
          href: 'https://github.com/Bilibili/bas'
        }
      ]
    }
  },

  computed: {
    activeIndex () {
      return '' + this.navs.findIndex((item) => item.path === this.$route.path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-logo {
  line-height: 60px;
  font-size: 25px;
  float: left;
  padding-left: 20px;
}

.nav-logo img {
  vertical-align: sub;
  margin-right: 10px;
}

.nav-logo span {
  color: #00a1d6;
  font-weight: bold;
  line-height: 60px;
}

.el-menu {
  float: right;
  padding-right: 20px;
}

.el-menu-item {
  padding: 0;
}

.el-menu-item a {
  padding: 0 20px;
  display: inline-block;
}
</style>
