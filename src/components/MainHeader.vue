<template>
  <header class="main-header">
    <el-dialog title="新的问题" :visible.sync="askModelVisiable" :modal-append-to-body='false'>
      新问题
      <ask-model @changeAskModelVisiable=changeAskModelVisiable />
    </el-dialog>
    <div class="header-content">
      <router-link class="m-r-20" :to="{ name: 'home' }">
        <img class="logo" :src="require('./../assets/logo.png')" alt="">
      </router-link>
      <el-menu :default-active="activeIndex" class="m-r-20" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">发现</el-menu-item>
        <el-menu-item index="3">话题</el-menu-item>
      </el-menu>

      <!-- 搜索框主体部分 -->
      <el-input size="small" class="search m-r-10" placeholder="请输入内容" v-model="keywords">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button class="btnAsk" size="small" type="primary"  @click="askModelVisiable = true">提问</el-button>

      <div class="userInfo" v-if="!isLogin">
        <route-link :to="{ name: 'signup' }">登录</route-link>
      </div>

      <div class="userInfo" v-if="isLogin">
        <i class="el-icon-bell m-r-40 icon-item"></i>
        <i class="el-icon-message m-r-40 icon-item"></i>
        <!-- 下拉菜单  -->
        <el-dropdown placement="bottom" trigger="click" class="hand-click">
          <span>
            {{this.name}}
            <img class="avator" height="20px" width="20px" :src="require('./../assets/logo.png')" alt="">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div @click="goToPersionalPage">
                <span class="el el-icon-fakezhihu-persion"></span>
                我的主页
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <i class="el-icon-setting">设置</i>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <div @click="logout">
                <span class="el el-icon-facezhihu-poweroff"></span>
                退出
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
import request from '@/service'
import AskModel from './AskModel.vue'
import { getCookies } from '@/lib/utils'

export default {
  data() {
    return {
      activeIndex: '1',
      keywords: '',
      isLogin: true,
      name: '',
      askModelVisiable: false
    }
  },
  components: {
    AskModel
  },
  mounted() {
    this.checkLogin()
  },
  methods: {
    handleSelect(key) {
      console.log(key)
    },
    goToPersionalPage() {
      console.log('跳转到用户页面')
      this.$router.push(`/people/${getCookies('id')}`)
    },
    async checkLogin() {
      await request.get('users/checkLogin').then((res) => {
        if (res.status === 200) {
          this.name = res.data.name
          this.isLogin = true
        } else {
          this.$router.push({ name: 'signup' })
          this.isLogin = false
        }
      })
    },
    async logout() {
      await request.post('/users/logout').then((res) => {
        if (res.status === 200) {
          this.$Message.success('注销成功')
          this.name = ''
          this.$router.push({ name: 'signup' })
        } else {
          this.$Message.error('注销失败，请稍后再试')
        }
      })
      console.log('登出')
    },
    changeAskModelVisiable(status) {
      this.askModelVisiable = status
    }
  }
}
</script>
