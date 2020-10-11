<template>
  <header class="main-header">
    <div class="header-content">
      <router-link class="m-r-20" :to="{ name: 'home' }">
        <img class="logo" src="./../assets/logo.png" alt="">
      </router-link>
      <el-menu :default-active="activeIndex" class="m-r-20" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">发现</el-menu-item>
        <el-menu-item index="3">话题</el-menu-item>
      </el-menu>

      <!-- 搜索框主体部分 -->
      <el-input size="small" margin-top="10px" class="search m-r-10" placeholder="请输入内容" v-model="keywords">
        <el-button slot="appdend" icon="el-icon-search"></el-button>
      </el-input>
      <el-button size="small" margin-top="10px" type="primary">提问</el-button>
      <div class="userInfo" v-if="!isLogin">
        <route-link :to="{ name: 'signup' }">登录</route-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      keywords: '',
      isLogin: true
    }
  },
  methods: {
    handleSelect (key) {
      console.log(key)
    }
  }
}
</script>

<style scoped>
.logo {
  height: 40px;
  width: 40px;
}

.m-r-20 {
  height: 40px;
}

.el-menu-item {
  height: 40px;
}
</style>
