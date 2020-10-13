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
      <el-input size="small" class="search m-r-10" placeholder="请输入内容" v-model="keywords">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button class="btnAsk" size="small" type="primary">提问</el-button>
      <div class="userInfo" v-if="!isLogin">
        <route-link :to="{ name: 'signup' }">登录</route-link>
      </div>

      <div class="userInfo" v-if="isLogin">
        <i class="el-icon-bell m-r-40 icon-item"></i>
        <i class="el-icon-message m-r-40 icon-item"></i>
        <!-- 下拉菜单  -->
        <el-dropdown placement="bottom" trigger="click" class="hand-click">
          <span>
            rz
            <img class="avator" height="20px" width="20px" src="./../assets/logo.png" alt="">
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
export default {
  data() {
    return {
      activeIndex: '1',
      keyword: '',
      isLogin: true,
      name: ''
    }
  },
  methods: {
    handleSelect(key) {
      console.log(key)
    },
    goToPersionalPage() {
      console.log('跳转到用户页面')
    }
  }
}
</script>

<style lang="less" scoped>
// .main-header {
//   position: relative;
//   z-index: 100;
//   min-width: 1032px;
//   overflow: hidden;
//   background: #FFFFFF;
//   box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
//   background-clip: content-box;
//   .header-content {
//     position: relative;
//     display: flex;
//     width: 1000px;
//     height: 52px;
//     padding: 0 16px;
//     margin: 0 auto;
//     align-items: center;
//     transition: -webkit-transform 0.3s;
//     transition: transform 0.3s;
//     transition: transform 0.3s, -webkit-transform 0.3s;
//     .logo {
//       height: 35px;
//     }
//     .search {
//       width: 300px;
//     }
//     .userInfo {
//       flex: 1;
//       justify-content: flex-end;
//       display: flex;
//       align-items: center;
//       .icon-item {
//         font-size: 20px;
//       }
//       .avatar {
//         width: 20px;
//       }
//     }
//   }
// }
</style>
