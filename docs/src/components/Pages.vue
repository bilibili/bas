<template>
  <el-scrollbar class="container-scroll">
    <el-container class="container">
      <el-scrollbar class="aside-scroll">
        <el-aside width="200px">
          <el-menu
            :default-openeds="openeds"
            :unique-opened="true"
            :default-active="activeId">
            <el-submenu
              v-for="(group, index) in sidebar"
              :key="index"
              :index="index + ''">
              <template slot="title">{{ group.name }}</template>
              <el-menu-item
                v-for="(child, childIndex) in group.children"
                :key="childIndex"
                :index="index + '-' + childIndex"><a href="javascript:;" v-scroll-to="'#' + child.hash">{{ child.name }}</a></el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
      </el-scrollbar>
      <el-main class="content markdown-body" ref="content">
        <guide v-if="type === 'guide'"></guide>
        <docs v-if="type === 'docs'"></docs>
      </el-main>
    </el-container>
    <el-footer>@bilibili</el-footer>
  </el-scrollbar>
</template>

<script>

import throttle from 'throttleit'

export default {
  props: {
    type: String
  },

  data () {
    return {
      activeId: '0-0',
      openeds: ['0'],
      guideMenu: [{
        name: '指南1',
        children: [{
          name: 'item1'
        }, {
          name: 'item2'
        }]
      }, {
        name: '指南2',
        children: [{
          name: 'item3'
        }, {
          name: 'item4'
        }]
      }],
      docsMenu: [{
        name: '文本对象',
        children: [{
          name: '示例',
          hash: 'shi-li'
        }, {
          name: '属性',
          hash: 'shu-xing'
        }]
      }, {
        name: '交互按钮',
        children: [{
          name: '示例',
          hash: 'shi-li-2'
        }, {
          name: '属性',
          hash: 'shu-xing-2'
        }, {
          name: 'av object',
          hash: 'av-object'
        }, {
          name: 'bangumi object',
          hash: 'bangumi-object'
        }, {
          name: 'seek object',
          hash: 'seek-object'
        }]
      }, {
        name: 'path 对象',
        children: [{
          name: '示例',
          hash: 'shi-li-3'
        }, {
          name: '属性',
          hash: 'shu-xing-3'
        }]
      }, {
        name: '动画',
        children: [{
          name: '简单动画',
          hash: 'jian-dan-dong-hua'
        }, {
          name: '串联动画',
          hash: 'chuan-lian-dong-hua'
        }, {
          name: '并联动画',
          hash: 'bing-lian-dong-hua'
        }]
      }]
    }
  },

  computed: {
    sidebar: function () {
      return this[`${this.type}Menu`]
    }
  },

  mounted () {
    this.scrollSpy()
  },

  methods: {
    getMenuList () {

    },
    scrollSpy () {
      const handleScroll = () => {
        const headings = document.getElementsByTagName('h3')
        const els = [...headings].map(heading => {
          return {
            top: heading.getBoundingClientRect().top - 200,
            id: heading.id
          }
        })
        const current = Math.max(els.filter(el => el.top < 0).length - 1, 0)
        let total = 0
        let i
        for (i = 0; i < this.sidebar.length; i++) {
          total += this.sidebar[i].children.length
          if (total > current) {
            break
          }
        }
        this.openeds = [i + '']
        this.activeId = `${i}-${current - total + this.sidebar[i].children.length}`
      }
      this.$el.getElementsByClassName('el-scrollbar__wrap')[0].addEventListener('scroll', throttle(handleScroll, 300))
    }
  }
}
</script>

<style scoped>
  .aside-scroll {
    position: fixed;
    height: calc(100% - 60px);
  }

  .aside-scroll .el-menu {
    border-right: none;
  }

  .aside-scroll .el-aside {
    padding-top: 20px;
  }

  .content {
    padding: 20px 20px 20px 220px;
  }

  .container {
    width: 1140px;
    margin: 0 auto;
    position: relative;
  }

  .el-menu-item a {
    line-height: 50px;
    display: inline-block;
    width: 100%;
  }

  .el-menu-item.is-active a {
    color: #409EFF;
  }

  .container-scroll {
    width: 100%;
    height: calc(100% - 60px);
  }

  .el-footer {
    color: #888;
    font-size: 13px;
    text-align: center;
    line-height: 60px;
  }
</style>
