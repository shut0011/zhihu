<template>
  <div>
    <main-list-nav :type="type" />
    <el-card>
      <div class="card-content">
        <route-view v-for="(item, index) in fakeInfo" :key="index" :item="item"
        :index="index" :type="'item.type'" :showPart="['title']"/>
      </div>
    </el-card>
  </div>
</template>

<script>
import MainListNav from '@/components/MainListNav.vue'

export default {
  components: {
    MainListNav
  },
  data() {
    return {
      type: 'main',
      fakeInfo: {
        author: {
          avatar_url: '...',
          headline: 'abc',
          name: 'Tom'
        },
        relationship: {
          is_nothelp: false,
          is_thanked: false,
          voting: 0
        },
        question: {
          author: {
            avatar_url: 'cdefg',
            headline: 'ok  ',
            name: 'John'
          },
          answer_count: 18,
          comment_count: 1,
          excerpt: '"..."',
          title: '"abc"',
          type: '"question"',
          url: '"ab.com"'
        },
        comment_count: 41,
        content: '"aaaa"',
        excerpt: '"bbbb"',
        thanks_count: 69,
        thumbnail: '"uuu"',
        type: '"answer"',
        voteup_count: 771
      }
    }
  }
}
</script>
