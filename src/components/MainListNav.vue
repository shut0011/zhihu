<template>
  <el-card class="list-nav-card">
    <el-menu class="listNav" :default-active="activeIndex" mode="horizontal">
      <el-menu-item index="1" v-if="type === 'main'">
        <route-link :to="{ name: 'home' }">推荐</route-link>
      </el-menu-item>
      <el-menu-item index="2" v-if="type === 'main'">
        <route-link :to="{ name: 'hot' }">热榜</route-link>
      </el-menu-item>
    </el-menu>
  </el-card>
</template>

<script>
export default {
  props: ['type'],
  data() {
    return {
      routerNametoIndex: {
        home: '1',
        hot: '2'
      },
      activeIndex: '1'
    }
  },
  mounted() {
    this.activeIndex = this.routerNametoIndex[this.$route.name]
  }
}
</script>
